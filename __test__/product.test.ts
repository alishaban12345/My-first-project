import { createProduct,getProduct,getProducts,updateProduct,deleteProduct} from './product';
import {prismaMock} from './../singleton';
import { any } from 'jest-mock-extended';
const product:any = {
    id:                   8,
    name:               "cup",
    description:        "good",
    quantity:           6,
    price:              50,
    onSale:             true,
    categoryId:         1  
} 
test('should create new product ', async () => {
    prismaMock.products.create.mockResolvedValue(product);
    await expect(createProduct(product)).resolves.toEqual(product)
  })
  test('should update product ', async () => { 
    prismaMock.products.update.mockResolvedValue(product);
    await expect(updateProduct(product)).resolves.toEqual(product)
  })
  test("find Unique", async () =>{
    prismaMock.products.findUnique.mockResolvedValue(product);
    expect(getProduct(product)).resolves.toEqual(product)
  })
test("find many", async () => {
    prismaMock.products.findMany.mockResolvedValue(product);
    expect(getProducts(product)).resolves.toEqual(product)
})
test('delete product', async () => {
    prismaMock.products.delete.mockResolvedValue(product);
    expect(deleteProduct(product)).resolves.toEqual(product)
})



//  test('show products', async() => {
//     const response = await getProducts();
//      expect(response).toBe(response)
//  })
//  test("show product", async() => {
//     const response = await getProduct();
//     expect(response).toBe(response);
//  })
// test("update product", async () => {
//     const response = await updateProduct();
//     expect(response).toBe(response)
// })

// test('should create new user ', async () => {
//         const product:any = {
//                 id: 1,
//                 name:"abac",
//                 description:"abcdfg",
//                 quantity:88,
//                 price:70,
//                 onSale:true,
//                 categoryId:1
//         }
//         prismaMock.products.create.mockResolvedValue(product);
//          expect(product).toBe(product);
//       })
//   test('get Product', async () => {
//         const product=prismaMock.products.findMany()
//         expect(product).toBe(product)
//       })
//     test('update product', async () => {
//         prismaMock.products.update({
//             where:{
//                 id:7
//             },
//             data:{
//                 name:"chair",
//                 description:"abcdfg",
//                 quantity:88,
//                 price:70,
//                 onSale:true,
//                 categoryId:1
//             }
//         })
//     })
//   test('delete product', async () => {
//     const product = prismaMock.products.delete({
//         where:{
//             id:9
//         }
//     })
//   }) 