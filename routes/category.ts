const express = require('express');
const {createCategory,getCategories,getCategory,updateCategory,deleteCategory} = require('../controller/category.ts');
const router=express.Router();

router.post('/',createCategory);
router.get('/',getCategories);
router.get('/:id',getCategory);
router.put('/:id',updateCategory);
router.delete('/:id',deleteCategory);

export default router;