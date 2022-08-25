import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const createProduct = async (req:any,res:any) => {
    const product = await prisma.products.create({
        data:{
            name:req.body.name,
            description:req.body.description,
            quantity:req.body.quantity,
            price:req.body.price,
            onSale:req.body.onSale,
            categoryId:req.body.categoryId
        }
    }).then((result) => res.send(result)).catch((err:any) => res.send(err));
}
export const getProducts = async (req:any,res:any) => {
    const product=await prisma.products.findMany()
    .then((result) => res.send(result)).catch((err:any) => res.send(err))
} 
export const getProduct = async (req:any,res:any) => {
    const {id}=req.params;
    const idd=parseInt(id)
    const product=await prisma.products.findUnique({
        where:{
            id:idd
        }
    })
} 
export const deleteProduct = async (req:any,res:any) => {
    const deleteProduct = await prisma.products.delete({
        where:{
            id:req.body.id,
        }
    })
}
export const updateProduct = async (req:any,res:any) => {
    const updateProduct = await prisma.products.updateMany({
        where:{
            id:req.body.id,
        },
        data:{
            name:req.body.name,
            description:req.body.description,
            quantity:req.body.quantity,
            price:req.body.price,
            onSale:req.body.onSale
        }
    });
}