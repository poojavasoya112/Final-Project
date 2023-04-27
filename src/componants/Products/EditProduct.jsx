import React from 'react'
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { EditProductAcync } from '../../Services/Actions/Product.action';

function EditProduct() {
    const {productInfo} = useSelector((state) => state.ProductReducer);
    const [product, setProduct] = useState(productInfo)

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setProduct({
            ...product, [name]: value
        })
    }

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const date = new Date().toLocaleString();
        console.log({...product, dateDay: date }, "product");
        dispatch(EditProductAcync({...product, dateDay: date }));
        setProduct({
            name: '',
            price: '',
            detail: '',
            category: ''
        })
    }

    return (
        <div className='my-5 mx-auto product-form'>
            <Form className='p-2 w-50 mx-auto border p-3 rounded shadow-sm bg-white' onSubmit={(e) => { handleSubmit(e) }}>
                <h5 className='text-primary'>Edit product here..</h5>
                <hr></hr>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Product name</Form.Label>
                    <Form.Control type="text" placeholder="Enter product name.." name='name' value={product.name} onChange={(e) => { handleChange(e) }} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Product Price</Form.Label>
                    <Form.Control type="number" placeholder="Enter price" name='price' value={product.price} onChange={(e) => { handleChange(e) }} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Product Detail</Form.Label>
                    <Form.Control type="text" placeholder="Enter product detail" name='detail' value={product.detail} onChange={(e) => { handleChange(e) }} />
                </Form.Group>

                <Button type="submit" className='btn bg-primary btn btn-success rounded-1 mt-2'>
                    Update
                </Button>
            </Form>
        </div>
    )
}

export default EditProduct
