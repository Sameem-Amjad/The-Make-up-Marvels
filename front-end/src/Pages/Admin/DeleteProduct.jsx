import logo from '../../assets/Company_logo.png';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const DeleteProduct = () =>
{
    const [ productName, setProductName ] = useState( "" );
    const [ productDescription, setProductDescription ] = useState( "" );
    const [ quality, setQuality ] = useState( "" );
    const [ imageUrl, setImageUrl ] = useState( "" );
    const [ quantity, setQuantity ] = useState( 0 );
    const navigate = useNavigate();
    const productAddedDate = Date.now();
    const collectionData = async () =>
    {
        let result = await fetch( 'http://localhost:4000/admin/delete-product', {
            method: 'POST',
            body: JSON.stringify( { productName, productDescription, quality, quantity, imageUrl, productAddedDate } ),
            headers: { 'Content-Type': 'application/json' },
        } );
        result = await result.json();
        console.log( result );
        if ( result )
        {
            productName !== "" ? navigate( '/admin/delete-product' ) : navigate( '/admin' );
        }
    };
    return (
        <>
            <form id="true" className="flex w-full  bg-slate-700 justify-center ">
                <div className="flex w-1/2  justify-center ">
                    <div className="flex flex-col text-white w-10/12 shadow-2xl shadow-white items-center gap-5 m-4 rounded-xl bg-gray-800 ">

                        <div className="flex flex-row items-center w-10/12 justify-center gap-2 mt-2 ">
                            <img srcSet={ logo } className="h-9  rounded-sm bg-violet-200 hover:bg-white" alt="" />
                            <h1 className=" font-bold text-xl text-violet-200 hover:text-white">The Makeup Artist</h1>
                        </div>

                        <div className="flex flex-col w-11/12 gap-2">
                            <h1 className="text-2xl text-slate-200 font-bold">Update An Product</h1>
                        </div>
                        <div className="flex flex-col w-11/12 gap-2">
                            <label htmlFor="productName" className="text-violet-79">Product Name</label>
                            <input onChange={ ( e ) =>
                            {
                                setProductName( e.target.value );
                            } } id="productName" type="text" className="border-violet-700 shadow-lg shadow-violet-700/50  rounded-lg w-full p-2.5 bg-gray-700 placeholder-gray-400 text-white focus:border-none focus:ring-4  focus:ring-violet-700" placeholder="..." />
                        </div>
                        <div className="flex flex-col w-11/12 gap-2">
                            <label htmlFor="productDescription" className="text-violet-79">Product Description</label>
                            <textarea onChange={ ( e ) =>
                            {
                                setProductDescription( e.target.value );
                            } } id="productDescription" type="text" className="border-violet-700 shadow-lg shadow-violet-700/50  rounded-lg w-full p-2.5 bg-gray-700 placeholder-gray-400 text-white focus:border-none focus:ring-4  focus:ring-violet-700" placeholder="Product Description" />
                        </div>
                        <div className="flex flex-col  w-11/12 gap-2">
                            <label htmlFor="Quantity" className="text-violet-79">Quantity</label>
                            <input onChange={ ( e ) =>
                            {
                                setQuantity( e.target.value );
                            } } id="Quantity" type="text" placeholder="1-100" className="border-violet-700 shadow-lg shadow-violet-700/50  rounded-lg w-full p-2.5 bg-gray-700 placeholder-gray-400 text-white focus:border-none focus:ring-4  focus:ring-violet-700 " />
                        </div>
                        <div className="flex flex-col  w-11/12 gap-2">
                            <label htmlFor="Quality" className="text-violet-79">Quality</label>
                            <input onChange={ ( e ) =>
                            {
                                setQuality( e.target.value );
                            } } id="Quality" type="text" placeholder="Excellent" className="border-violet-700 shadow-lg shadow-violet-700/50  rounded-lg w-full p-2.5 bg-gray-700 placeholder-gray-400 text-white focus:border-none focus:ring-4  focus:ring-violet-700" />
                        </div>
                        <div className="flex flex-col  w-11/12 gap-2">
                            <label htmlFor="ImageUrl" className="text-violet-79">ImageUrl</label>
                            <input onChange={ ( e ) =>
                            {
                                setImageUrl( e.target.value );
                            } } id="ImageUrl" type="text" placeholder="Excellent" className="border-violet-700 shadow-lg shadow-violet-700/50  rounded-lg w-full p-2.5 bg-gray-700 placeholder-gray-400 text-white focus:border-none focus:ring-4  focus:ring-violet-700" />
                        </div>
                        <div className="flex flex-col w-1/2 items-center">
                            <button type="button" className="w-1/2 shadow-lg  text-violet-700 hover:text-white border  hover:bg-violet-800 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-violet-500 dark:text-violet-500 dark:hover:text-white dark:hover:bg-violet-700 dark:focus:ring-violet-900" onClick={ collectionData }>Delete Product </button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
};
export default DeleteProduct;