import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
function Profile ()
{
    const [ userOrder, setUserOrder ] = useState( [] );
    let token = localStorage.getItem( "token" );
    token = jwtDecode( token );
    useEffect( () => 
    {
        getUserOrder();

    }, [] );
    const getUserOrder = async () =>
    {
        let response = await fetch( `http://ec2-16-16-202-180.eu-north-1.compute.amazonaws.com:4000/userOrdersById/${ token.user._id }` );
        response = await response.json();
        if ( response )
        {
            setUserOrder( response );
            console.log( response );
        } else
        {
            alert( "No Order From the user" );
        }
    };
    return (
        <div className="flex flex-col min-h-screen py-12  bg-slate-700 justify-center items-center ">
            <div className="flex flex-col h-1/2 w-2/3 m-3 mb-12 p-12 gap-4 bg-slate-800 rounded-md items-center shadow-slate-100 shadow-md" >

                <img className="m-1 h-44 bg-slate-500 w-1/4 rounded-full shadow-lg shadow-white" src='https://plus.unsplash.com/premium_photo-1700924890600-87b89b33ba75?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
                <h1 className="m-1 ml-4 text-slate-200 font-bold text-lg">Name: { token.user.name}</h1>
                <h1 className="m-1 ml-4 text-slate-200 font-bold text-lg">Email: { token.user.email }</h1>
                <h1 className="m-1 text-slate-200 font-bold text-lg">Your Orders </h1>

            </div>
            <div className='flex h-1/2 w-2/3 mb-6 flex-row flex-wrap justify-center rounded-sm  hover:shadow-white shadow-lg py-8 bg-gray-600'>
                {
                    userOrder.map( ( e ) => (
                        <div key={ e._id } className="">
                            <div  className="flex flex-col hover:scale-105 duration-500 bg-violet-100   p-2 m-3 rounded-md">
                                <div className="flex flex-col justify-around items-center bg-gray-300 rounded-md m-2">
                                    <div className='flex  justify-center'><img className=' h-64 w-52 rounded-lg' src={ e.imageUrl } alt="hello" /></div>
                                    <div className='flex flex-col items-center'>
                                        <h1 className='font-bold text-lg text-gray-700'>{ e.productName }</h1>
                                        <p className='text-gray-600 text-ellipsis text-sm text-center'>{ e.productDescription }</p>
                                        <h1 className='font-bold text-sm text-gray-700'>{ e.productQuality }</h1>
                                        <h1 className='font-bold text-sm text-gray-700'>{ e.productQuantity }</h1>
                                    </div>


                                </div>
                            </div>
                        </div>

                    ) )
                }

            </div>
        </div>
    );
}
export default Profile;