const express = require('express');
const router  = express.Router();

const { Category: CATEGORY_MODEL } = require('../models/category');

router.post('/new', async (req, res) => {
    const { title, description } = req.body;

    const newCategory   = new CATEGORY_MODEL({ title, description });
    let resultSave      = await newCategory.save();

    res.json({ resultSave });
});

router.get('/list', async (req, res) => {
    let listCategory = await CATEGORY_MODEL.find({})
            .populate({
                path: 'products',
                select: 'title description'
            })
    res.json({ listCategory });
});

exports.CATEGORY_ROUTERS = router;