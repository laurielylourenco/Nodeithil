import { Response, Request } from "express"
import { CreateProductInput, UpdateProductInput } from "../schema/product.schema";
import { createProduct, deleteProduct, findAndUpdateProduct, findProduct } from "../service/product.service";
import log from "../utils/logger";

export async function createProductHandler(req: Request<{}, {}, CreateProductInput["body"]>, res: Response) {

    const userId = res.locals.user._id;
    const body = req.body;
    const product = await createProduct({ ...body, user: userId });

    return res.send(product);
}

export async function getProductHandler(req: Request<UpdateProductInput["params"]>, res: Response) {

    const productId = req.params.productId;
    const product = await findProduct({ productId });
  
    if (!product) {
      return res.sendStatus(404);
    }
  
    return res.send(product);
}

export async function updateProductHandler(req: Request<UpdateProductInput["params"]>, res: Response) {

    const userId = res.locals.user._id;
    const productId = req.params.productId; // nome do paramentro foi definido no product.schema 
    const update = req.body;

    const product = await findProduct({ productId })

    if (!product) {

        return res.sendStatus(404);
    }

    if(product.user !== userId) {

        return res.sendStatus(403)
    }


    const updatedProduct = await findAndUpdateProduct({productId}, update,{
        new: true,
    })


    return res.send(updatedProduct)

}


export async function deleteProductHandler(req: Request<UpdateProductInput["params"]>, res: Response) {

    const userId = res.locals.user._id;
    const productId = req.params.productId; // nome do paramentro foi definido no product.schema 

    const product = await findProduct({ productId })

    if (!product) {

        return res.sendStatus(404);
    }

    if(product.user !== userId) {

        return res.sendStatus(403)
    }

    const deletePorduc = await deleteProduct({productId})
    return res.sendStatus(200)
}
