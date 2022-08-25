import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
export const createReview = async (req:any,res:any) => {
    const category = await prisma.reviews.create({
        data:{
            date:req.body.date,
            comment:req.body.comment,
            title:req.body.title,
            rating:req.body.rating,
            productId:req.body.productId
            
        }
    }).then((result) => res.send(result)).catch((err:any) => res.send(err));
}
export const getReview = async (req:any,res:any) => {
    const category=await prisma.reviews.findMany()
    .then((result) => res.send(result)).catch((err) => res.send(err))
} 
export const getReviews = async (req:any,res:any) => {
    const category=await prisma.reviews.findUnique({
        where:{
            id:req.body.id
        }
    }).then((result) => res.send(result)).catch((err:any) => res.send(err))
} 
export const deleteReview = async (req:any,res:any) => {
    const category = await prisma.reviews.delete({
        where:{
            id:req.body.id,
        }
    }).then((result) => res.send(result)).catch((err:any) => res.send(err))
}
export const updateReview = async (req:any,res:any) => {
    const category = await prisma.reviews.updateMany({
        where:{
            id:req.body.id,
        },
        data:{
            date:req.body.date,
            comment:req.body.comment,
            title:req.body.title,
            rating:req.body.rating,
            productId:req.body.productId
            
        }
    }).then((result) => res.send(result).catch((err:any) => res.send(err)))
}