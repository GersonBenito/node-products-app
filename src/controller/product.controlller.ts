import { Request, Response } from 'express';
import * as productService from './../service/product.service';
import { Product } from '../interface/product.interface'

export const getEntries = async (_req: Request, res: Response) => {
    const products: Product[] = await productService.getEntries();
    return res.status(200).json({
        status: 200,
        data: products,
        message: 'Get entries success'
    });
}

export const addEntry = async (req: Request, res: Response) => {
    const product: Product = await productService.addEntry(req.body);
    return res.status(200).json({
        status: 200,
        data: product,
        message: 'New entry added suceess'
    });
}

export const getEntryById = async (req: Request, res: Response) => {
    const id = req.params.id;
    const product: Product | null = await productService.getEntryById(id);
    if(!product){
        return res.status(400).json({
            status: 400,
            data: {},
            message: `Entry by id ${id} was not found`
        }); 
    }
    return res.status(200).json({
        status: 200,
        data: product,
        message: 'Get entry success'
    });
}

export const deleteEntryById = async (req: Request, res: Response) => {
    const id = req.params.id;
    const product: Product | null = await productService.deleteEntryById(id);
    if(!product){
        return res.status(400).json({
            status: 400,
            data: {},
            message: `Entry by id ${id} was not found`
        }); 
    }
    return res.status(200).json({
        status: 200,
        data: product,
        message: 'Delete entry success'
    });
}
export const updateEntryById = async (req: Request, res: Response) => {
    const id = req.params.id;
    const entry: Product = req.body;
    const product: Product | null = await productService.updateEntryById(id, entry);
    if(!product){
        return res.status(400).json({
            status: 400,
            data: {},
            message: `Entry by id ${id} was not found`
        }); 
    }
    return res.status(200).json({
        status: 200,
        data: product,
        message: 'Update entry success'
    });
}