export type Question = {
    description: string,
    answers: Answer[],
    selected: number,
}
export type Answer = {
    x: number, //macro x micro
    y: number, //aggressive x defensive
    name: string
}
export const questions: Question[] = [
    {
        description: "Cannon rushes are…",
        answers: [
            {x: 0, y: 0, name: "Fun to watch, horrible to play against."},
            {x: 0, y: 0, name: "An abomination."},
            {x: 0, y: 0, name: "Free MMR machine."},
            {x: 0, y: 0, name: "For people who can’t macro"}
        ],
        selected: -1
    },
    {
        description: "Turtle mech is…",
        answers: [
            {x: 0, y: 0, name: "The best way to gain MMR."},
            {x: 0, y: 0, name: "BORING!"},
            {x: 0, y: 0, name: "Too slow. Where are my drops?"},
            {x: 0, y: 0, name: "Fun to dismantle."}
        ],
        selected: -1
    },
    {
        description: "Queen walks are…",
        answers: [
            {x: 0, y: 0, name: "A marvel of nature."},
            {x: 0, y: 0, name: "Too risqué for my taste."},
            {x: 0, y: 0, name: "Hard to pull off. I always transfuse too late."},
            {x: 0, y: 0, name: "Bad. Respect the elderly and call a German taxi."}
        ],
        selected: -1
    },
    {
        description: "Your army value is bigger. What do you do?",
        answers: [
            {x: 0, y: 0, name: "Attack."},
            {x: 0, y: 0, name: "Take an expo."},
            {x: 0, y: 0, name: "Deny an expo."},
            {x: 0, y: 0, name: "Tech up."}
        ],
        selected: -1
    },
    {
        description: "The enemy is coming to attack you with a bigger attack force. What do you do?",
        answers: [
            {x: 0, y: 0, name: "Base trade!"},
            {x: 0, y: 0, name: "Try to get him with his pants down in the middle of the map."},
            {x: 0, y: 0, name: "Build static defense."},
            {x: 0, y: 0, name: "Harass worker line while defending."}
        ],
        selected: -1
    },
    {
        description: "Your opponent has good micro, but you…",
        answers: [
            {x: 0, y: 0, name: "Are even better at microing."},
            {x: 0, y: 0, name: "Have a better plan."},
            {x: 0, y: 0, name: "Compensate with macro."},
            {x: 0, y: 0, name: "Know where to pick fights."}
        ],
        selected: -1
    },
    {
        description: "To solve worker line harassment, you…",
        answers: [
            {x: 0, y: 0, name: "Counter harass. Fight fire with fire."},
            {x: 0, y: 0, name: "Use static defense."},
            {x: 0, y: 0, name: "Block the base entrance."},
            {x: 0, y: 0, name: "Do nothing. You had too many workers anyway."}
        ],
        selected: -1
    },
    {
        description: "Which of the following is the best line?",
        answers: [
            {x: 0, y: 0, name: '"Fear the reaper man!"'},
            {x: 0, y: 0, name: "*Roach noises*"},
            {x: 0, y: 0, name: '"Carrier has arrived!"'},
            {x: 0, y: 0, name: '"Mineral field exhausted."'}
        ],
        selected: -1
    },
    {
        description: "Your favorite way of winning is by…",
        answers: [
            {x: 0, y: 0, name: "Overwhelming the opponent with a massive army advantage."},
            {x: 0, y: 0, name: "Chipping his units away with spellcasters."},
            {x: 0, y: 0, name: "Waiting. They are always too impatient."},
            {x: 0, y: 0, name: "Setting careful traps and pouncing when the time is right."}
        ],
        selected: -1
    },
    {
        description: "The ideal map has…",
        answers: [
            {x: 0, y: 0, name: "A short rush distance."},
            {x: 0, y: 0, name: "A lot of bases."},
            {x: 0, y: 0, name: "Easily defendable positions."},
            {x: 0, y: 0, name: "Special features for fun fights."}
        ],
        selected: -1
    }
    // {
    //     description: "Question Description",
    //     answers: [
    //         {x: 0, y: 0, name: "Option"},
    //         {x: 0, y: 0, name: "Option"},
    //         {x: 0, y: 0, name: "Option"},
    //         {x: 0, y: 0, name: "Option"}
    //     ]
    // }
]