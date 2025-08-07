const moveableHeight = 300 - 10;
const buttons = document.querySelectorAll(".button");
const scrollers = document.querySelectorAll(".scroller-body");
const scrollerRepositories = document.querySelectorAll(".scroller");

const linkedScrollers = {
    0: [3, 6],
    1: [4],
    2: [5, 7],
    3: [0],
    4: [1, 8],
    5: [2],
    6: [0, 9],
    7: [2],
    8: [4],
    9: [6]
};

const buttonPositions = Array.from({length: buttons.length }, () => moveableHeight);


buttons.forEach((button, index) => {
    const scroller = scrollers[index];
    const scrollerHeight = scroller.clientHeight;
    const currentMoveableHeight = scrollerHeight - button.clientHeight;
    button.style.top = `${moveableHeight}px`; //sets button to the bottom of scroller body
     
    let grab = false;
    let startingBottomPosition = 0; 
    let startingTopPosition = 0;
    let activeButtonIndex = null;

    button.addEventListener("mousedown", (e) => { 
        grab = true; 
        activeButtonIndex = index;
        startingBottomPosition = e.clientY; 
        startingTopPosition = buttonPositions[index];
        document.body.style.cursor = "grabbing";
    });

    function scrollerPairer(value, min, max) { 
        return Math.max(min, Math.min(value, max));
    }

    function numberFromButtonPosition(position) { 
        const number = Math.round(9 - (position / currentMoveableHeight) * 9);
        return scrollerPairer(number, 0, 9)
    }

    document.addEventListener("mousemove", (e) => {
        if (!grab) return;

        const dy = e.clientY - startingBottomPosition; 
        let newPosition = scrollerPairer(startingTopPosition + dy,0, currentMoveableHeight);

        buttonPositions[activeButtonIndex] = newPosition;

        const linked = linkedScrollers[activeButtonIndex] || [];
        linked.forEach((linkedIndex) => {
            const adjusted = scrollerPairer(buttonPositions[linkedIndex] - dy * 0.5, 0, moveableHeight);
            buttonPositions[linkedIndex] = adjusted;
        });

        buttons.forEach((button, index) => {
            button.style.top = `${buttonPositions[index]}px`;
            const digit = numberFromButtonPosition(buttonPositions[index]);
            const display = scrollerRepositories[index].querySelector(".starting-number");
            display.textContent = digit;
        });
    });

    document.addEventListener("mouseup", () => {
        grab = false;
        document.body.style.cursor = "default";
    });

    const savePhoneNumber = document.getElementById("phone-number-saver");
    const notificationBox = document.getElementById("saved-phone-notification");

    savePhoneNumber.addEventListener("click", () => {
    const phoneDigits = Array.from(scrollerRepositories).map((scroller) =>
        scroller.querySelector(".starting-number").textContent
    ).join("");
    notificationBox.textContent = `Your phone number is ${phoneDigits}`;
    });
});
