const scoreDisplay = document.getElementById('score')
const spinDrum = document.getElementById('hand')

//SCREENS/SQUARE FROM RIGHT TO LEFT
const firstScreen = document.getElementById('boxA')
const secondScreen = document.getElementById('boxB')
const thirdScreen = document.getElementById('boxC')

//HOLDS SLOT MACHINES ICONS
let firstScreenArray = []
let secondScreenArray = []
let thirdScreenArray = []

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

const scoringRules = {
    "🍒🍒🍒": 100,
    "🔔🔔🔔": 200,
    "🎰🎰🎰": 300,
    "💰💰💰": 400,
    "💎💎💎": 500,
    "🍀🍀🍀": 600,
    "💵💵💵": 700,
    "💳💳💳": 800,
    "🃏🃏🃏": 900,
    "⭐⭐⭐": 1000,
    "7️⃣7️⃣7️⃣": 1500,
    "🍒🍒": 50,
    "🔔🔔": 70,
    "🎰🎰": 90,
    "💰💰": 110,
    "💎💎": 130,
    "🍀🍀": 150,
    "💵💵": 170,
    "💳💳": 190,
    "🃏🃏": 210,
    "⭐⭐": 230,
    "7️⃣7️⃣": 250
}

let totalScore = 0;

function calculateScore(firstIcon, secondIcon, thirdIcon) {
    const combination = firstIcon + secondIcon + thirdIcon
    if (scoringRules.hasOwnProperty(combination)) {
        return scoringRules[combination]
    } else {
        const twoIconsCombination = firstIcon + secondIcon
        if (scoringRules.hasOwnProperty(twoIconsCombination)) {
            return scoringRules[twoIconsCombination]
        }
        
        return 0
    }
}

// APPEND ICONS IN SCREEN ARRAY
function appendIconsInArray (array){
    for (let i = 0; i < slotMachineIcons.length; i++) {
        array.push(slotMachineIcons[i]);
    }
}

//APPEND ICONS TO SCREEN 1,2 AND 3
function appendIconsToScreen (screen, array) {
    screen.innerHTML = ''
    if (array.length > 0) {
        screen.innerHTML += `
            <div class="screen">${array[0]}</div>
        `
        for (let i =  1 ; i < array.length; i++) {
            screen.innerHTML += `
                <div class="screen" style="display: none;">${array[i]}</div>
            `
        }
    }
    
    
    // array.forEach(item => {
    //     screen.innerHTML += `
    //         <div class="screen">${item}</div>
    //     `
    // })
}
//SPIN DRUM
function spinIcons(){
    spinDrum.onclick = () => {
        //SHUFFLE ICONS FOR EACH SCREEN SEPARATELY
        firstScreenArray = shuffleArray([...slotMachineIcons])
        secondScreenArray = shuffleArray([...slotMachineIcons])
        thirdScreenArray = shuffleArray([...slotMachineIcons])
        
        //UPDATE ICONS ON EACH SCREEN
        appendIconsToScreen(firstScreen, firstScreenArray)
        appendIconsToScreen(secondScreen, secondScreenArray)
        appendIconsToScreen(thirdScreen, thirdScreenArray)
        
        //CALCULATE THE SCORE BASED ON DISPLAYED ICONS
        const firstIcon = firstScreenArray[0]
        const secondIcon = secondScreenArray[0]
        const thirdIcon = thirdScreenArray[0]
        
        const spinScore = calculateScore(firstIcon, secondIcon, thirdIcon)
        totalScore += spinScore
        
        scoreDisplay.innerHTML = `Score: ${totalScore}`
    }
}
//SHUFFLE
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array
}

appendIconsInArray(firstScreenArray)
appendIconsInArray(secondScreenArray)
appendIconsInArray(thirdScreenArray)
spinIcons()




