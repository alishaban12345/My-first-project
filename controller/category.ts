import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
export const createCategory = async (req:any,res:any) => {
    console.log("create Category ");
    console.log(req.body.categoryId);
    const category = await prisma.categories.create({
        data:{
            name:req.body.name,
            
        }
    }).then((result) => res.send(result)).catch((err:any) => res.send(err));
}
export const getCategory = async (req:any,res:any) => {
    const category=await prisma.categories.findMany()
    .then((result) => res.send(result)).catch((err:any) => res.send(err))
} 
export const getCategories = async (req:any,res:any) => {
    const category=await prisma.categories.findUnique({
        where:{
            id:req.body.id
        }
    })
} 
export const deleteCategory = async (req:any,res:any) => {
    const category = await prisma.categories.delete({
        where:{
            id:req.body.id,
        }
    })
}
export const updateCategory = async (req:any,res:any) => {
    const category = await prisma.categories.updateMany({
        where:{
            id:req.body.id,
        },
        data:{
            name:req.body.name,
            
        }
    })
}