const express = require('express');
const router = express.Router();

router.get('/first', (req, res)=>{
    res.json({
        status: 'fist api'
    })
})

module.exports = router;