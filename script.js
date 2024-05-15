const scoreDisplay = document.getElementById('score')
const spinDrum = document.getElementById('hand')

//SCREENS/SQUARE FROM RIGHT TO LEFT
const firstScreen = document.getElementById('boxA')
const secondScreen = document.getElementById('boxB')
const thirdScreen = document.getElementById('boxC')

let score = 0

//HOLDS SLOT MACHINES ICONS
let iconScreenArray = []

const slotMachineIcons = [
    "🍒", // Cherries
    "🔔", // Bell
    "🎰", // Slot Machine
    "💰", // Money Bag
    "💎", // Gem Stone
    "🍀", // Four Leaf Clover (Luck)
    "💵", // Dollar Banknote
    "💳", // Credit Card
    "🃏", // Playing Card
    "⭐", // Star
    "7️⃣", // Number 7
];

//APPEND ICONS IN SCREEN ARRAY
function appendIconsInArray (array){
    for (let i = 0; i < slotMachineIcons.length; i++) {
        array.push(slotMachineIcons[i]);
    }
}

//APPEND ICONS TO SCREEN 1,2 AND 3
function appendIconsToScreen (screen, array) {
    screen.innerHTML = ''
    array.forEach(item => {
        screen.innerHTML += `
            <div class="screen">${item}</div>
        `
    })
}
//SPIN DRUM
function spinIcons(){
    spinDrum.onclick = () => {
        
        shuffleArray(iconScreenArray)
        appendIconsToScreen (firstScreen, iconScreenArray)
        
        shuffleArray(iconScreenArray)
        appendIconsToScreen (secondScreen, iconScreenArray)
        
        shuffleArray(iconScreenArray)
        appendIconsToScreen (thirdScreen, iconScreenArray)
    }
}
//SHUFFLE ICONS IN DIFFERENT SCREENS
function shuffleArray (array){
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

appendIconsInArray(iconScreenArray)

spinIcons()



