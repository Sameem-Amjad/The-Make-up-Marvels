import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/Company_logo.png';
const Email =import.meta.env.VITE_REACT_APP_EMAIL;
const Nav = () =>
{
    const navigate = useNavigate();
    const [ auth, setAuth ] = useState( null );
    const [ email, setEmail ] = useState( null );
    useEffect( () =>
    {
        localStorage.getItem( 'token' ) !== undefined ? setAuth( JSON.parse( localStorage.getItem( 'token' ) ) ) : setAuth( auth );
        localStorage.getItem( 'email' ) !== undefined ? setEmail( JSON.parse( localStorage.getItem( 'email' ) ) ) : setEmail( email );
    } );
    // const login = () =>
    // {

    //     email!==Email?
    //     navigate( '/admin' ):navigate('/')
    // };/
    const logout = () =>
    {
        localStorage.clear();
        setAuth( null );
        setEmail( null );
        navigate( '/signup' );
    };
    return (
        <>
            <nav className="bg-gray-800  flex  flex-wrap font-bold  text-white z-99">
                <div className='flex  items-center '><Link to="/"><div className='flex bg- items-center text-violet-200'>
                    <img srcSet={ logo } className='h-8 w-7 m-2 ml-8 bg-violet-200 rounded-md hover:bg-white' alt="" />
                    <h1 className='hover:text-white text-violet-200'>The Make-Up Artist</h1>
                </div></Link></div>
                <div className=' flex-1 justify-center flex'>
                    {
                        auth == null ?
                            <ul className='flex items-center '>
                                <li className='p-4 hover:text-violet-200 '>
                                    <Link to="/login">Log In</Link>
                                </li>
                                <li><Link to="/signup">Sign Up</Link></li>
                            </ul> :
                            email === Email ?
                                <ul className='flex flex-wrap'>
                                    <li className='p-4 hover:text-violet-200 '>
                                        <Link to="/admin">Dashboard</Link>
                                    </li>
                                    <li className='p-4 hover:text-violet-200 '>
                                        <Link to="/admin/orders">Orders</Link>
                                    </li>
                                    <li className='p-4 hover:text-violet-200 hover:scale-105 duration-500'>
                                        <Link to="/admin/add-product">Add Product</Link>
                                    </li>
                                    <li className='p-4 hover:text-violet-200 hover:scale-105 duration-500'>
                                        <Link to="/admin/update-product">Update Product</Link>
                                    </li>
                                    <li className='p-4 hover:text-violet-200 hover:scale-105 duration-500'>
                                        <Link to="/admin/delete-product">Delete Product</Link>
                                    </li>
                                    <li className='p-4 hover:text-violet-200 hover:scale-105 duration-500'>
                                        <Link onClick={ logout } to="/signup">Log Out</Link>
                                    </li>
                                </ul>
                                : <ul className='flex'>
                                    <li className='p-4 hover:text-violet-200 hover:scale-105 duration-500'>
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li className='p-4 hover:text-violet-200 hover:scale-105 duration-500'>
                                        <Link to="/about">About</Link>
                                    </li>
                                    <li className='p-4 hover:text-violet-200 hover:scale-105 duration-500'>
                                        <Link to="/product">Product</Link>
                                    </li>
                                    <li className='p-4 hover:text-violet-200 hover:scale-105 duration-500'>
                                        <Link to="/contact">Contact</Link>
                                    </li>
                                     <li className='p-4 hover:text-violet-200 hover:scale-105 duration-500'>
                                        <Link to="/profile">Profile</Link>
                                    </li>
                                    <li className='p-4 hover:text-violet-200 hover:scale-105 duration-500'>
                                        <Link onClick={ logout } to="/signup">Log Out</Link>
                                    </li>
                                </ul>
                    }
                </div>
            </nav>
        </>
    );
};
export default Nav;