import { React, useEffect, useState } from 'react';
const Dashboard = () =>
{
    const [ users, setUsers ] = useState( [] );
    const [ userOrders, setUserOrders ] = useState( [] );
    const [ display, setDisplay ] = useState( true );
    useEffect( () =>
    {
        getUsersOrders();
    }, [] );
    let getUsersOrders = async () =>
    {
        let response = await fetch( 'http://ec2-16-16-202-180.eu-north-1.compute.amazonaws.com:4000/admin/getUsers' );
        if ( response )
        {
            response = await response.json();
            setUsers( response );
            console.log( users );
        } else
        {
            alert( 'No User' );
        }
    };
    return (

        <div className='flex min-h-screen bg-slate-700 justify-center '>
            <div className='flex flex-col w-5/6 bg-slate-700 m-10 min-h-screen rounded-lg shadow-white shadow-2xl items-center '>
                {/* Table Header */ }
                <div className='m-2 p-2 w-full rounded-sm bg-slate-900 shadow-slate-900 shadow-2xl'>
                    <div className='flex   text-white font-bold items-center justify-between'>
                        <h1 className='w-1/5  text-slate-300 font-bold'>Name</h1>
                        <h1 className='w-1/5  text-slate-300 font-bold'>Email</h1>
                        <h1 className='w-1/5  text-slate-300 font-bold '>Order Name</h1>
                        <h1 className='w-1/5  text-slate-300 font-bold '>Order Quantity</h1>
                        <h1 className='w-1/5  text-slate-300 font-bold'>Date</h1>
                        <h1 className='w-1/5  text-slate-300 font-bold text-center'>image</h1>
                    </div>
                </div>

                {/* User Orders */ }
                { users.map( ( user ) => (
                    <div key={ user._id } className='m-2 p-2 w-full rounded-sm shadow-black border-b-2 border-slate-600 shadow-2xl'>
                        <div className='flex  items-center  text-white font-bold justify-between'>
                            <h1 className='w-1/5  text-slate-300 font-bold '>{ user.user_id.name }</h1>
                            <h1 className='w-1/5  text-slate-300 font-bold text-sm '>{ user.user_id.email }</h1>
                            <h1 className='w-1/5  text-slate-300 font-bold '>{ user.productName }</h1>
                            <h1 className='w-1/5  text-slate-300 font-bold '>{ user.productQuantity }</h1>
                            <h1 className='w-1/5  text-slate-300 font-bold '>{ user.productDateAdded.split( 'T' )[ 0 ] }</h1>
                            <h1 className='w-1/5  text-slate-500 font-bold flex justify-center'><img className='w-6 h-6 rounder-sm' src={`${user.imageUrl}`} alt="" /></h1>
                        </div>
                    </div>
                ) ) }
            </div>

        </div>

    );
};
export default Dashboard;