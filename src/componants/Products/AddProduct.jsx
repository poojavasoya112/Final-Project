import React from 'react'
import { useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import './AddProduct.css'
import { useDispatch } from 'react-redux';
import { CreateProductAync } from '../../Services/Actions/Product.action';

function AddProduct() {

    const [product, setProduct] = useState({
        name: '',
        price: '',
        detail: ''
    })

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
        console.log({...product,dateDay : date},"product");
        dispatch(CreateProductAync({...product,dateDay : date}));
        setProduct({
            name: '',
            price: '',
            detail: ''
        })
    }

    return (
        <div className='my-5 mx-auto product-form align-items-center'>
            <Form className='p-2 w-50 mx-auto  p-3 rounded shadow-sm ' onSubmit={(e) => { handleSubmit(e) }}>
                <h5 className='text-primary align-items-center'>Add product here..</h5>
                <hr></hr>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Product name</Form.Label>
                    <Form.Control type="text" placeholder="Enter product name.." name='name' value={product.name} onChange={(e) => { handleChange(e) }} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Product Price</Form.Label>
                    <Form.Control type="text" placeholder="Enter price" name='price' value={product.price} onChange={(e) => { handleChange(e) }} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Product Detail</Form.Label>
                    <Form.Control type="text" placeholder="Enter product detail" name='detail' value={product.detail} onChange={(e) => { handleChange(e) }} />
                </Form.Group>

                <Button type="submit" className='btn bg-primary btn btn-success rounded-1 mt-2'>
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default AddProduct
