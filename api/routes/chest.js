const express = require('express');
const router = express.Router();

router.get('/', (req,res,next)=>{
    res.status(200).json({
        message:"GET"
    });
});

router.post('/', (req,res,next)=>{
    res.status(200).json({
        message:"POST"
    });
});

module.exports = router;