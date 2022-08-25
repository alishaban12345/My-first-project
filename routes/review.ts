
const {createReview,getReview,getReviews,updateReview,deleteReview} = require('../controller/review.ts')
const express = require('express');
const router=express.Router();
router.post('/',createReview);
router.get('/',getReviews);
router.get('/:id',getReview);
router.put('/:id',updateReview);
router.delete('/:id',deleteReview);

export default router;