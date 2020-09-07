const router = require('express').Router();
const mock = (req, res)=>{
    const response = [{
        name: 'AreWeThere.yt',
        datails: 'Sharable Social Countdown Timer',
        link: 'https://arewethere.yt',
        id: 1,
        img:'/1.png',
        alt:'Sharable Social Countdown Timer'
    },
    {
        name: 'Rating.NG',
        datails: 'Sharable Social Countdown Timer',
        link: 'https://rating.ng',
        id: 2,
        img:'/2.png',
        alt:'Business Rating and Review App'
    },
    {
        name: 'The New Man Novel',
        datails: 'The New Man Novel',
        link: 'https://thenewman.online',
        id: 3,
        img:'/3.png',
        alt:'The New Man Novel'
    },
    {
        name: 'Top 10% of engineers',
        datails: 'Top 10% of engineers who took the Front End assessment on the Triplebyte platform',
        link: 'https://triplebyte.com/tb/desmond-toye-ademiluyi-c8ne960/certificate/track/frontend',
        id: 4,
        img:'/4.png',
        alt:'Top 10% of engineers'
    },
]
//simulating delays in https calls
setTimeout(()=>res.json(response), 1000);
return;
}


router.route('/').get(mock);
module.exports = router;