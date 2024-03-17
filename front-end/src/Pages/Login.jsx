import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/Company_logo.png';
const Email = import.meta.env.VITE_REACT_APP_EMAIL+"";
const Login = () =>
{
    const [ name, setName ] = useState( 'none' );
    const [ email, setEmail ] = useState( "" );
    const [ password, setPassword ] = useState( "" );
    const navigate = useNavigate();
    const collectData = async () =>
    {
        if ( name === "" || email === "" || password === "" )
        {
            alert( "Enter Complete Credentials" );
        } else
        {
            try
            {
                const response = await fetch( "http://51.20.87.247:4000/login/", {
                    method: 'POST',
                    body: JSON.stringify( { name, email, password } ),
                    headers: { 'Content-Type': 'application/json' },
                } ); 

                if ( !response.ok )
                {
                    alert( response.message );
                }
                let result = await response.json();
                if(
                result.token !== undefined || result.email !== undefined){
                    localStorage.setItem( "token", JSON.stringify( result.token ) );
                    localStorage.setItem( "email", JSON.stringify( result.userEmail ) );
                    console.log(Email===result.userEmail+"sameem")
                    result.userEmail == Email ? navigate( '/admin' ) : navigate( '/' );
                    
                } else
                {
                    alert("wrong Credentials")
                }

            } catch ( error )  
            {
                // Handle network or other errors
                alert( error.message );
            }
        }
    };
    return (
        <>
            <form id="true" className="flex w-full min-h-screen pb-10 bg-slate-800/90 items-center justify-center">
                <div className="flex w-1/2 h-1/2 justify-center ">
                    <div className="flex flex-col text-white w-10/12 shadow-2xl shadow-white items-center gap-9 m-5 rounded-xl bg-gray-800 ">

                        <div className="flex flex-row items-center w-10/12 justify-center gap-2 mt-2 ">
                            <img srcSet={ logo } className="h-9  rounded-sm bg-violet-200 hover:bg-white" alt="" />
                            <h1 className=" font-bold text-xl text-violet-200 hover:text-white">The Makeup Artist</h1>
                        </div>
                        <div className="flex flex-col w-11/12 gap-2">
                            <h1 className="text-2xl text-white font-bold">Create Your Account </h1>
                        </div>
                        
                        <div className="flex flex-col w-11/12 gap-2">
                            <label htmlFor="username" className="text-violet-79">Email</label>
                            <input onChange={ ( e ) =>
                            {
                                setEmail( e.target.value );
                            } } id="username" type="email" className="border-violet-700 shadow-lg shadow-violet-700/50  rounded-lg w-full p-2.5 bg-gray-700 placeholder-gray-400 text-white focus:border-none focus:ring-4  focus:ring-violet-700" placeholder="xyz@mail.com" />
                            
                        </div>
                        <div className="flex flex-col  w-11/12 gap-2">
                            <label htmlFor="password" className="text-violet-79">Password</label>
                            <input onChange={ ( e ) =>
                            {
                                setPassword( e.target.value );
                            } } id="password" type="password" placeholder="*****..." className="border-violet-700 shadow-lg shadow-violet-700/50  rounded-lg w-full p-2.5 bg-gray-700 placeholder-gray-400 text-white focus:border-none focus:ring-4  focus:ring-violet-700 " />
                        </div>
                        <div className="flex flex-col w-1/2 items-center">
                            <button onClick={ () => { collectData(); } } type="button" className="w-1/2 shadow-lg  text-violet-700 hover:text-white border  hover:bg-violet-800 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-violet-500 dark:text-violet-500 dark:hover:text-white dark:hover:bg-violet-700 dark:focus:ring-violet-900" >Login</button>
                        </div>
                    </div>
                </div>
            </form>
        </> );
};
export default Login;