import { useEffect, useState } from 'react';
import axios from 'axios';
const UsersOrder = () =>
{
    const [ product, setProduct ] = useState( [] );
    useEffect( () =>
    {
        const apiUrl = "https://the-make-up-marvels.onrender.com/users-Orders";
        axios.get( apiUrl )
            .then( ( response ) =>
            {
                setProduct( response.data );
                // Assuming the API response is an array of products
            } )
            .catch( ( error ) =>
            {
                console.error( 'Error fetching products:', error );
            } );
    }, [] );
    return(
        <>
            <div className='flex flex-row flex-wrap justify-center bg-gray-600'>
                {
                    product.map( ( e ) => (
                        <div key={ e._id } className="flex flex-col bg-violet-100   p-2 m-3 rounded-md">
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
                    ) )
                }

            </div>
        </>
    )
}
export default UsersOrder;