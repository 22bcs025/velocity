function printEven (from, to){
    for (let i = from; i < to; i++){
        i % 2 || console.log (i)
    }
}

// printEven (1, 100)

function pattern (){
    for (let i = 1; i <= 4; i++){
        console.log ('*'.repeat (i))
    }
}

// pattern ()

const DICT = {
    'Abnegation': 'Renouncing a belief or doctrine',
    'Aggrandize': 'enhance power, wealth or status',
    'Alacrity': 'Eagerness',
    'Anachronistic': 'misplaced chronologically',
    'Archetypal': 'quintessential of a certain kind',
    'Ascetic': 'one who practices self-denial as part of spiritual discipline',
    'Beguile': 'influence someone in a deceptive way',
    'Blandishment': 'intentional flattery for persuasion',
    'Cajole': 'persuade by flattery or coaxing',
    'Callous': 'disregard for others'
}

function printWord (word){
    console.log (`${word}: ${DICT[word]}`)
}

// printWord ('Abnegation')
// printWord ('Anachronistic')
// printWord ('Cajole')