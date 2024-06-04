import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
const ProductSection = () =>
{
    const selectedProduct = [];
    const [ product, setProduct ] = useState( [] );
    useEffect( () =>
    {
        const apiUrl = "https://the-make-up-marvels.onrender.com/product";
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
    const handleToCart = ( productId ) =>
    {

        if ( product  )
        {
            const productFind = product.find( ( e ) => e._id === productId );

           
            if ( productFind  )
            {
                selectedProduct.push( productFind );
                alert("product added"+productFind)
                localStorage.setItem( "products", JSON.stringify(selectedProduct) );
            } else
            {
                alert("Quantity is out of range")
            }
        }
    };
    return (
        <>
            <div className='flex pt-12  items-center justify-center bg-gray-700'>
                <Link className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 m-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800' to='/buy-Product' >Show All Your Product </Link>
            </div>
            <div className='flex p-12 flex-row flex-wrap justify-center bg-gray-700'>
                {
                    product.map( ( e ) => (
                        <div key={ e._id } className="flex flex-col  hover:scale-105 duration-500 bg-violet-100   p-2 m-3 rounded-md">
                            <div className="flex  flex-col justify-around items-center bg-gray-300 rounded-md m-2">
                                <div className='flex  justify-center'><img className=' h-64 w-52 rounded-lg' src={ e.imageUrl } alt="hello" /></div>
                                <div className='flex flex-col items-center'>
                                    <h1 className='font-bold text-lg text-gray-700'>{ e.productName }</h1>
                                    <p className='text-gray-600 text-ellipsis text-sm text-center'>{ e.productDescription }</p>
                                    <h1 className='font-bold text-sm text-gray-700'>{ e.productQuality }</h1>
                                    <input type='digit' className='text-sm rounded-lg p-1  m-2 bg-gray-900 text-white text-center ' placeholder="Enter Quantity" onChangeCapture={ ( j ) =>
                                    {
                                        e.productQuantity = j.target.value;
                                    } } />
                                </div>
                                <div className='flex  justify-center'>
                                    <button onClick={ () =>
                                    {
                                        handleToCart( e._id );
                                    } } className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>Add To Cart</button>
                                </div>

                            </div>
                        </div>
                    ) )
                }

            </div>
        </>
    );
};
export default ProductSection;