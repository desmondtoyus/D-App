const router = require('express').Router();
const mock = (req, res)=>{
    let obj = {
        name: 'Mr. Biggs',
        location: 'Ibadan',
        id: 4,
    }
    return res.json(obj);
}

router.route('/').get(mock);
module.exports = router;