
const twitterData = [
    {
        userName: 'Raj',
        userId: 'tu1',
        tweet: 'These communities are responsible for terrorist attacks',
        hateSpeechFlag: 1
    },
    {
        userName: 'Pravin',
        userId: 'tu2',
        tweet: 'Seems like a good day',
        hateSpeechFlag: 0
    },
    {
        userName: 'Rahul',
        userId: 'tu3',
        tweet: 'They deserved a terrorist attack',
        hateSpeechFlag: 1
    },
    {
        userName: 'Ajay',
        userId: 'tu4',
        tweet: 'I happy to tell you guys that I will be pursuing masters in NYU',
        hateSpeechFlag: 0
    },
    {
        userName: 'Salman',
        userId: 'tu5',
        tweet: 'I am glad he got murdered',
        hateSpeechFlag: 1
    },
    {
        userName: 'Amaan',
        userId: 'tu6',
        tweet: 'I really like the vibe of this country',
        hateSpeechFlag: 0
    },
    {
        userName: 'Rajeev',
        userId: 'tu7',
        tweet: 'Bike rides are so much fun',
        hateSpeechFlag: 0
    },
    {
        userName: 'Abid',
        userId: 'tu8',
        tweet: 'These kind of people deserve to be killed',
        hateSpeechFlag: 1
    },
    {
        userName: 'Yash',
        userId: 'tu9',
        tweet: 'Hope you die soon',
        hateSpeechFlag: 1
    },
    {
        userName: 'Sam',
        userId: 'tu10',
        tweet: 'I am happy to announce I have got a new job opportunity',
        hateSpeechFlag: 0
    },
    {
        userName: 'Muskan',
        userId: 'tu11',
        tweet: 'Really appreciate your hardwork',
        hateSpeechFlag: 0
    },
    {
        userName: 'Faizan',
        userId: 'tu12',
        tweet: 'I will Kill you',
        hateSpeechFlag: 1
    }
]

const hateSpeechTwits = [];
const normalTwits = [];

function getFilteredTwits() {
    twitterData.forEach(twits => {
        if (twits?.hateSpeechFlag === 1) {
            hateSpeechTwits.push(twits)
        } else {
            normalTwits.push(twits)
        }
    });
    document.getElementById('hateSpeech').innerText = JSON.stringify(hateSpeechTwits, null, 4);
    document.getElementById('normalTwits').innerText = JSON.stringify(normalTwits, null, 4);
}

getFilteredTwits()

