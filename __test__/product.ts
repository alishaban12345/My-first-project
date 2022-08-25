import prisma from '../client'
interface CreateProduct {
    id:               number
  name:               string
  description:        string
  quantity:           number
  price:              number
  onSale:             boolean
  categoryId:         number
  }
  export const createProduct = async (product: CreateProduct) => {
    try{
        return await prisma.products.create({    
            data: product   
        })
    }
    catch{
        console.log('not create')
    }         
    } 
export const getProducts = async (product:CreateProduct) => {
    return await prisma.products.findMany();
}
export const getProduct = async (product:CreateProduct) => {
  const pro = await prisma.products.findUnique({
        where:{
            id:product.id,
        },
    })
    return pro;
}
export const updateProduct = async (product: CreateProduct) => {
    try{
        return await prisma.products.update({
            where:{
                id:product.id,
            },
            data:product
    })
    }
   catch{
    console.log('Not Updated');
   }
}
export const deleteProduct = async (product:CreateProduct) => {
    try{
        const deleteValue= await prisma.products.delete({
            where:{
                id:product.id
            },
        })
        return deleteValue;
    }
    catch{
        console.log('not deleted');
    }
}
