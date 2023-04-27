import React, { useEffect } from 'react'
import { Activity, Boxes, Calendar2, Calendar2Fill, Plus, PlusCircle } from 'react-bootstrap-icons';
import { Button } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './Dashboard.css';
import { useState } from 'react';
import DatePicker, { DateObject } from 'react-multi-date-picker';
import { useDispatch, useSelector } from 'react-redux';
import { productCountAsync } from '../../Services/Actions/Product.action';


function OffCanvas({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  return (
    <>
      <Button className='bg-primary border-0 py-1' onClick={handleShow}>
        <Activity />
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

function Dashboard() {

  const [values, setValues] = useState([
    new DateObject().subtract(4, "days"),
    new DateObject().add(4, "days")
  ])

  const dispatch = useDispatch();

  const productCount = () => {
    dispatch(productCountAsync())
  }

  const { productcount } = useSelector((state) => state.ProductReducer);

  useEffect(() => {
    productCount()
  }, [])

  return (
    <>
      <div className='container-fluid d-flex'>
        <div className='col-6 py-3'>
          <h6 className='fs-16 mb-1'>Good morning ...</h6>
          <p className='mb-0'>Here's what's happening with your store today.</p>
        </div>
        <div className="col-6 d-flex align-items-center mx-2 justify-content-end pe-2">
          <div className="calender d-flex align-items-center shadow-sm">
            <div className="w-10  py-1 px-2 bg-white rounded-start">
              <DatePicker
                range
                dateSeparator=" to "
              />
            </div>
            <div className="w-2 bg-primary py-1 px-2 rounded-end">
              <Calendar2Fill className='text-white calender-icon' />
            </div>
          </div>
          <div className="cta-btn">
            <Button className='mx-2 bg-primary border-0 py-1'>
              <PlusCircle className='me-2' />
              <span>Add Product</span>
            </Button>
          </div>
          <div className="recentActivity">
            <OffCanvas placement={'end'} name={'end'} />
          </div>
        </div>
      </div>
      <section className='py-3'>
        <div className="d-flex">
          <div className="col-3 px-2">
            <div className="card bg-white rounded-1 shadow-sm p-4 border-0 text-center">
              <Boxes className='mx-auto text-primary' />
              <h6 className='mb-0 mt-3 fw-bold'>{`${productcount} Product`}</h6>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Dashboard