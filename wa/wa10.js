const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = 'It was 102 degrees outside, so :insertx: put on sunglasses and left the house. When they arrived at :inserty:, they gasped dramatically, then :insertz:. Bob watched in disbelief — :insertx: had eaten three burritos for breakfast, and the heat was unbearable.';

var insertX = ['Professor Pickle', 'Mega Grandma', 'Captain Marshmallow'];

var insertY = ['Area 51', 'a haunted bowling alley', 'the Moonbase gift shop'];

var insertZ = ['started tap dancing uncontrollably', 'vanished into a cloud of glitter', 'screamed and rode off on a giant hamster'];

randomize.addEventListener('click', result);

function result() {

    let newStory = storyText; 

    const xItem = randomValueFromArray(insertX);
    const yItem = randomValueFromArray(insertY);
    const zItem = randomValueFromArray(insertZ);

    newStory = newStory.replaceAll(":insertx:", xItem);
    newStory = newStory.replace(":inserty:", yItem);
    newStory = newStory.replace(":insertz:", zItem);

    if(customName.value !== '') {
        const name = customName.value;
        newStory = newStory.replace("Bob", name); 

    }

    if(document.getElementById("uk").checked) {
    const weight = Math.round(300 * 0.0714) + ' stone';
    const temperature =  Math.round((94-32) * 5/9) + ' centigrade';

    newStory = newStory.replace("94 fahrenheit", temperature); 
    newStory = newStory.replace("300 pounds", weight); 

    }

    story.textContent = newStory;
    story.style.visibility = 'visible';
}



