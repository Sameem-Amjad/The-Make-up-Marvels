import { useState } from "react";
import { useNavigate } from "react-router-dom";

import logo from '../assets/Company_logo.png';
const SignUp = () =>
{
    const [ password, setPassword ] = useState( "" );
    const [ name, setName ] = useState( "" );
    const [ email, setEmail ] = useState( "" );
    const navigate = useNavigate();
    const [ confirmPassword, setConfirmPaswword ] = useState( "" );
    const [ checkbox, setCheckbox ] = useState( false );
    const collectionData = async () =>
    {
        if ( name === "" || email === "" || password === "" || confirmPassword === "" )
            alert( "Please Enter Complete Info" );
        else
        {
            let result = await fetch( 'http://ec2-16-16-202-180.eu-north-1.compute.amazonaws.com:4000/signup', {
                method: 'POST',
                body: JSON.stringify( { name, email, password, confirmPassword } ),
                headers: { 'Content-Type': 'application/json' },
            } );
            result = await result.json();
            if ( result.message==="User registered successfully." )
            {
                navigate( '/login' );
                alert( result.message );
            } else
            {
                alert( result.message );
            }
        }
    };
    return (
        <>
            <form key={13} id="true" className="flex w-full min-h-screen pb-10 bg-slate-800/90 justify-center items-center">
                <div  className="flex w-1/2  justify-center ">
                    <div className="flex flex-col text-white w-10/12 shadow-2xl shadow-white items-center gap-5 m-4 rounded-xl bg-gray-800 ">

                        <div className="flex flex-row items-center w-10/12 justify-center gap-2 mt-2 ">
                            <img srcSet={ logo } className="h-9  rounded-sm bg-violet-200 hover:bg-white" alt="" />
                            <h1 className=" font-bold text-xl text-violet-200 hover:text-white">The Makeup Artist</h1>
                        </div>

                        <div className="flex flex-col w-11/12 gap-2">
                            <h1 className="text-2xl text-violet-500 font-bold">Create Your Account </h1>
                        </div>
                        <div className="flex flex-col w-11/12 gap-2">
                            <label htmlFor="username" className="text-violet-79">User Name</label>
                            <input onChange={ ( e ) =>
                            {
                                setName( e.target.value );
                            } } id="username" type="text" className="border-violet-700 shadow-lg shadow-gray-900  rounded-lg w-full p-2.5 bg-gray-700 placeholder-gray-400 text-white focus:border-none focus:ring-4  focus:ring-violet-700" placeholder="John123..." />
                        </div>
                        <div className="flex flex-col w-11/12 gap-2">
                            <label htmlFor="email" className="text-violet-79">Email</label>
                            <input onChange={ ( e ) =>
                            {
                                setEmail( e.target.value );
                            } } id="email" type="email" className="border-violet-700 shadow-lg shadow-gray-900  rounded-lg w-full p-2.5 bg-gray-700 placeholder-gray-400 text-white focus:border-none focus:ring-4  focus:ring-violet-700" placeholder="...@email.com" />
                        </div>
                        <div className="flex flex-col  w-11/12 gap-2">
                            <label htmlFor="password" className="text-violet-79">Password</label>
                            <input onChange={ ( e ) =>
                            {
                                setPassword( e.target.value );
                            } } id="password" type="password" placeholder="*****..." className="border-violet-700 shadow-lg shadow-gray-900  rounded-lg w-full p-2.5 bg-gray-700 placeholder-gray-400 text-white focus:border-none focus:ring-4  focus:ring-violet-700 " />
                        </div>
                        <div className="flex flex-col  w-11/12 gap-2">
                            <label htmlFor="confirmPassword" className="text-violet-79">Confirm Password</label>
                            <input onChange={ ( e ) =>
                            {
                                setConfirmPaswword( e.target.value );
                            } } id="confirmPassword" type="password" placeholder="*****..." className="border-violet-700 shadow-lg shadow-gray-900  rounded-lg w-full p-2.5 bg-gray-700 placeholder-gray-400 text-white focus:border-none focus:ring-4  focus:ring-violet-700" />
                        </div>
                        <div className="flex flex-row gap-2">
                            <input type="checkbox" />
                            <p className="text-sm">I am agree to <span className="underline text-violet-500 hover:text-red-500">Licencing And Privacy Policy</span> </p>
                        </div>
                        <div className="flex flex-col w-1/2 items-center">
                            <button type="button" className="w-1/2 shadow-lg  text-violet-700 hover:text-white border  hover:bg-violet-800 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-violet-500 dark:text-violet-500 dark:hover:text-white dark:hover:bg-violet-700 dark:focus:ring-violet-900" onClick={ collectionData }>Sign Up</button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
};
export default SignUp;