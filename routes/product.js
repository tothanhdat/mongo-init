const express = require('express');
const router  = express.Router();

const { Product: PRODUCT_MODEL } = require('../models/product');
const { Category: CATEGORY_MODEL } = require('../models/category');
router.post('/new', async (req, res) => {
    const { title, description, price, categoryID } = req.body;
    const newProduct = new PRODUCT_MODEL({ title, description, price });
    const resultProductSave = await newProduct.save(); 

    const { _id: productID } = resultProductSave;

    const infoCategoryAfterUpdated = await CATEGORY_MODEL.findByIdAndUpdate(categoryID, {
        $push : { products: productID }
    }, { new: true });

    res.json({ productInfo: resultProductSave, categoryInfo: infoCategoryAfterUpdated });
})
router.get('/list', async (req, res) => {
    let listProduct = await PRODUCT_MODEL.find({});
    res.json({ listProduct });
})

exports.PRODUCT_ROUTERS = router;