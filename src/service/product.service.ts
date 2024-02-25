import { Product } from '../interface/product.interface'
import ProductSchema from './../model/product.model';

export const getEntries = async (): Promise<Product[]> => {
    const products: Product[] = await ProductSchema.find();
    return products;
};

export const addEntry = async (entry: Product): Promise<Product | any> => {
    const product = await ProductSchema.create(entry)
    return product;
}

export const getEntryById = async (id: string): Promise<Product | null> =>{
    const product: Product | null = await ProductSchema.findById(id);
    return product;
}

export const deleteEntryById = async (id: string): Promise<Product | null> => (await ProductSchema.findByIdAndDelete(id))

export const updateEntryById = async (id: string, entry: Product): Promise<Product | null> => {
    const product: Product | null = await ProductSchema.findByIdAndUpdate({_id: id}, entry);
    if(!product){
        return null;
    }
    
    return await ProductSchema.findById(id);
}