import { useNavigate } from "react-router-dom";
import { jwtDecode } from 'jwt-decode';
const Buy_Products = () =>
{
    const selectedProduct = JSON.parse( localStorage.getItem( 'products' ) );
    const navigate = useNavigate();
    let auth = localStorage.getItem( 'token' );
    auth = jwtDecode( auth );
    
    const buyProduct = async ( product_id ) =>
    {
        const product = selectedProduct.find( ( e ) => e._id === product_id );
        product.user_id = auth.user._id;
        let res = await fetch( 'http://51.20.87.247:4000/buy-product', {
            method: 'POST',
            body: JSON.stringify( { product } ),
            headers: { 'Content-Type': 'application/json' },
        } );
        res = await res.json();
        if ( res.result === "success" )
        {
            console.log( res );
            if ( !selectedProduct || !Array.isArray( selectedProduct ) )
            {
                // Handle the case where the data is not an array or not found in localStorage
                console.error( "Products data not found in localStorage or not an array." );
            } else
            {
                // Step 2: Modify the array to remove the object
                const productIdToDelete = product._id; // Replace with the ID of the object to delete
                const updatedSelectedProduct = selectedProduct.filter(
                    ( f ) => f._id !== productIdToDelete
                );
                // Step 3: Save the modified array back to localStorage
                localStorage.setItem( "products", JSON.stringify( updatedSelectedProduct ) );
                navigate( '/buy-Product' );
            }
        }
    }
    const deleteFromCart = (product_id) =>
    {
        const product = selectedProduct.find( ( e ) => e._id === product_id );
        if ( !selectedProduct || !Array.isArray( selectedProduct ) )
        {
            // Handle the case where the data is not an array or not found in localStorage
            console.error( "Products data not found in localStorage or not an array." );
        } else
        {
            // Step 2: Modify the array to remove the object
            const productIdToDelete = product._id; // Replace with the ID of the object to delete
            const updatedSelectedProduct = selectedProduct.filter(
                ( f ) => f._id !== productIdToDelete
            );
            // Step 3: Save the modified array back to localStorage
            localStorage.setItem( "products", JSON.stringify( updatedSelectedProduct ) );
            navigate( '/buy-Product' );
        }
    }
        return (
            < div className="min-h-screen flex flex-col bg-slate-700">
                <h2 className="text-white text-xl font-bold m-2">Selected Product</h2>
                <div className="flex flex-row flex-wrap justify-center ">
                    { selectedProduct ? (
                        selectedProduct.map( ( e ) => (
                            <div key={ e._id } className="flex flex-col  bg-violet-100   p-2 m-3 rounded-md hover:scale-105 duration-500">
                                <div className="flex flex-1  flex-col justify-center items-center bg-gray-300 rounded-md m-2">
                                    <div className='flex justify-center'><img className='h-64 w-52  rounded-lg' src={ e.imageUrl } alt="hello" /></div>
                                    <div className='flex flex-col items-center pt-2 pb-2 '>
                                        <h1 className=' font-bold text-lg text-gray-700'>{ e.productName }</h1>
                                        <p className='text-gray-600 text-sm text-center'>{ e.productDescription }</p>
                                        <h1 className='font-bold text-sm text-gray-700'>{ e.productQuality }</h1>
                                        <h1 className='font-bold text-sm text-gray-700'>{ e.productQuantity }</h1>
                                    </div>
                                    <div className='flex justify-center w-1/2 flex-wrap'>
                                        <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm p-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800' onClick={ () =>
                                        {
                                            buyProduct( e._id );
                                        } }>Buy This </button>
                                        <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm p-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800' onClick={ () =>
                                        {
                                            deleteFromCart( e._id );
                                        }}>delete   </button>
                                    </div>
                                </div>
                            </div>
                        )
                        ) )
                        : (
                            <p className="text-white text-2xl font-bold mb-2">No product selected.</p>
                        ) }
                </div>
            </div>
        );
    };
    export default Buy_Products;