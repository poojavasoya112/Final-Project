import React from 'react'
import './SideBar.css';
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import { Box2Fill, ChevronDown, GearFill, PeopleFill, PersonFill, Speedometer } from 'react-bootstrap-icons'
import { NavLink } from 'react-router-dom';

function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
        console.log('totally custom!'),
    );

    return (
        <a href=''
            style={{ textDecoration : "none" }}
            onClick={decoratedOnClick}
        >
            {children}
        </a>
    );
}

function SideBar({hide}) {
    return (
        // <div className='sidebar vh-100 bg-secondary  p-2 '>
        <div className={hide ? 'sidebar   vh-100 hide' : 'sidebar  vh-100'}>
            <div className="logo p-2 ">
                <h2 className='text-center'>
                    <a href='#' className='text-white text-decoration-none text-center'>
                        Pooja
                    </a>
                </h2>
            </div>
            <nav>
                <div className='text-light p-2'>
                    Menu
                </div>
                <div className='menu'>
                    <ul>
                    <Accordion defaultActiveKey="0">
                        <li className='list-unstyled'>
                            <NavLink className='p-1 text-decoration-none text-black d-flex navlink' to="/dashboard" >
                                <div className='icon'>
                                    <Speedometer />
                                </div>
                                <div className='content ms-2 '>
                                    <span >
                                        Dashboard
                                    </span>
                                </div>
                            </NavLink>
                        </li>
                        <li className='list-unstyled'>
                            <CustomToggle eventKey="0">
                                <NavLink className='p-1 text-decoration-none text-black d-flex navlink' to="/">
                                    <div className='icon'>
                                        <PeopleFill />
                                    </div>
                                    <div className='content ms-2 '>
                                        <span >
                                            Users
                                        </span>
                                    </div>
                                    <div className='icon ms-2 '>
                                        <ChevronDown />
                                    </div>
                                </NavLink>
                            </CustomToggle>
                            <Accordion.Collapse eventKey="0">
                            <ul className='dropdownMenu'>
                                <li className='list-unstyled'>
                                    <NavLink className='p-1 text-decoration-none text-black d-flex navlink' to="/admin">
                                        <div className="icon ms-2">
                                            <PersonFill />
                                        </div>
                                        <div className='content ms-1'>
                                            <span >
                                                Admin
                                            </span>
                                        </div>
                                    </NavLink>
                                </li>
                                <li className='list-unstyled'>
                                    <NavLink className='p-1 text-decoration-none text-black d-flex navlink' to="/user">
                                        <div className="icon ms-2">
                                            <PersonFill />
                                        </div>
                                        <div className='content ms-1'>
                                            <span >
                                                User
                                            </span>
                                        </div>
                                    </NavLink>
                                </li>
                            </ul>
                            </Accordion.Collapse>
                        </li>
                        <li className='list-unstyled'>
                            <NavLink className='text-decoration-none text-black d-flex navlink' to="/product">
                                <div className='icon'>
                                    <Box2Fill />
                                </div>
                                <div className='content ms-2 '>
                                    <span >
                                        Products
                                    </span>
                                </div>
                            </NavLink>
                        </li>
                        <li className='list-unstyled'>
                            <NavLink className='text-decoration-none text-black d-flex navlink' to="/setting">
                                <div className='icon'>
                                    <GearFill />
                                </div>
                                <div className='content ms-2 '>
                                    <span >
                                        Setting
                                    </span>
                                </div>
                            </NavLink>
                        </li>
                    </Accordion>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default SideBar;