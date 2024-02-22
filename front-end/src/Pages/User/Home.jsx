import Carousel from "../component/Carousal";
import { Link } from "react-router-dom";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Home = () =>
{

    const testimonials = [
        {
            text: "Amazing products! I've never felt more beautiful. Thank you, Makeup Universe!",
            author: 'Jane Doe',
        },
        {
            text: "Amazing products! I've never felt more beautiful. ",
            author: 'Sameem Amjad',
        }, {
            text: "I love the variety of products and the quality is outstanding. Makeup Universe is my go-to beauty store!",
            author: 'John Smith',
        },
        {
            text: "The customer service is exceptional, and the shipping is always fast. Highly recommend Makeup Universe!",
            author: 'Emily Johnson',
        },
        {
            text: "Beautiful packaging and the products exceeded my expectations. Can't wait to order again!",
            author: 'Alex Rodriguez',
        },
        {
            text: "I've tried many brands, but Makeup Universe stands out. The results are incredible. Five stars!",
            author: 'Sophia Miller',
        },
    ];
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,         // Enable autoplay
        autoplaySpeed: 2000,
    };
    const specialOffers = [
        {
            name: 'Bundle Deal: Everyday Essentials',
            discount: '30% OFF',
        },
        {
            name: 'Limited Edition Holiday Collection',
            discount: 'Buy 1 Get 1 Free',
        },
    ];
    const makeupTips = [
        {
            title: 'Flawless Foundation Application',
            description: 'Learn how to apply foundation for a natural and flawless finish.',
        },
        {
            title: 'Smokey Eye Makeup Tutorial',
            description: 'Master the art of creating a classic smokey eye with our step-by-step tutorial.',
        },
        {
            title: 'Lip Care Routine for Soft Lips',
            description: 'Discover the secrets to maintaining soft and hydrated lips with our lip care routine.',
        },
    ];

    const exclusiveBrands = [
        {
            name: 'Glamourous Cosmetics',
            image: 'https://plus.unsplash.com/premium_photo-1661754333744-38817d55d79a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            name: 'Chic Beauty Essentials',
            image: 'https://plus.unsplash.com/premium_photo-1683121409041-076759249d56?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            name: 'Elegance Makeup Co.',
            image: 'https://images.unsplash.com/photo-1551723454-7565a1f5b161?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
    ];
    return (
        <div className='flex min-h-screen flex-col overflow-x-hidden  bg-slate-700 items-center '>
            {/* Hero Section */ }
            <section className="hero bg-cover bg-center h-96 flex items-center justify-center text-white">
                <div className="text-center">
                    <h2 className="text-4xl font-bold mb-4 hover:scale-105 transition-transform">Discover Your Beauty</h2>
                    <p className="text-justify text-lg">Explore our wide range of makeup products and enhance your beauty.</p>
                    <Link to="/product" className="mt-4 inline-block bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-6 rounded-full hover:scale-105 transition-transform duration-300">Shop Now</Link>
                </div>
            </section>
            <div className="w-5/6 hover:shadow-white shadow-lg overflow-hidden rounded-2xl  m-3 hover:scale-105 duration-500"><Carousel /></div>



            {/* Featured Products */ }
            <section className="container mt-8 w-5/6 mx-auto">
                <h2 className="text-white text-4xl font-bold mb-4">Featured Products</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {/* Product Cards go here */ }
                    <div className="bg-gray-200 rounded-lg p-4 shadow-md transform hover:scale-105 transition-transform duration-300">
                        <img src="https://www.vegas.pk/beta-admin/public/storage/images/product/variants/Nars_Radiant_Creamy_Concealer_cannelle.jpg" alt="Product 1" className="w-full h-54 object-cover mb-4 rounded-md" />
                        <h3 className="text-lg font-semibold">Product 1</h3>
                        <p className="text-justify text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <Link to="/products/1" className="mt-2 inline-block text-pink-500 hover:text-pink-600">View Details</Link>
                    </div>
                    <div className="bg-gray-200 rounded-lg p-4 shadow-md transform hover:scale-105 transition-transform duration-300">
                        <img src="https://www.revolutionbeauty.com/dw/image/v2/BCZJ_PRD/on/demandware.static/-/Sites-revbe-master-catalog/default/dw3154041e/images/hi-res/1180177_Revolution%20Satin%20Kiss%20Lipliner%202.jpg" alt="Product 1" className="w-full h-54 object-cover mb-4 rounded-md" />
                        <h3 className="text-lg font-semibold">Product 2</h3>
                        <p className="text-justify text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <Link to="/products/1" className="mt-2 inline-block text-pink-500 hover:text-pink-600">View Details</Link>
                    </div>
                    <div className="bg-gray-200 rounded-lg p-4 shadow-md transform hover:scale-105 transition-transform duration-300">
                        <img src="https://images.unsplash.com/photo-1620464003286-a5b0d79f32c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fE1ha2V1cCUyMGJydXNoJTIwc2V0fGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60" alt="Product 1" className="w-full h-54 object-cover mb-4 rounded-md" />
                        <h3 className="text-lg font-semibold">Product 3</h3>
                        <p className="text-justify text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <Link to="/products/1" className="mt-2 inline-block text-pink-500 hover:text-pink-600">View Details</Link>
                    </div>
                    <div className="bg-gray-200 rounded-lg p-4 shadow-md transform hover:scale-105 transition-transform duration-300">
                        <img src="https://images.unsplash.com/photo-1620804587331-effc68d47d7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fEV5ZSUyMGxpbmVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60" alt="Product 1" className="w-full h-54 object-cover mb-4 rounded-md" />
                        <h3 className="text-lg font-semibold">Product 4</h3>
                        <p className="text-justify text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <Link to="/products/1" className="mt-2 inline-block text-pink-500 hover:text-pink-600">View Details</Link>
                    </div>

                    {/* Repeat similar structure for other products */ }
                </div>
            </section>
            {/* Trending Products */ }
            <section className="container mx-auto w-5/6 mt-8">
                <h2 className="text-white text-4xl font-bold mb-4 ">Trending Products</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {/* Product Cards go here */ }
                    <div className="bg-gray-200 rounded-lg p-4 shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300">
                        <img src="https://images.unsplash.com/photo-1690214392602-796cff6b4e8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TWFrZXVwJTIwSGlnaGxpZ2h0ZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60" alt="Product 2" className="w-full h-50 object-cover mb-4 rounded-md" />
                        <h3 className="text-lg font-semibold">Product 1</h3>
                        <p className="text-justify text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <Link to="/products/2" className="mt-2 inline-block text-pink-500 hover:text-pink-600">View Details</Link>
                    </div>
                    <div className="bg-gray-200 rounded-lg p-4 shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300">
                        <img src="https://images.unsplash.com/photo-1542452255191-c85a98f2c5d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGxpcHN0aWNrfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60" alt="Product 2" className="w-full h-50 object-cover mb-4 rounded-md" />
                        <h3 className="text-lg font-semibold">Product 2</h3>
                        <p className="text-justify text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <Link to="/products/2" className="mt-2 inline-block text-pink-500 hover:text-pink-600">View Details</Link>
                    </div>
                    <div className="bg-gray-200 rounded-lg p-4 shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300">
                        <img src="https://images.unsplash.com/photo-1620464003286-a5b0d79f32c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fE1ha2V1cCUyMGJydXNoJTIwc2V0fGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60" alt="Product 2" className="w-full h-50 object-cover mb-4 rounded-md" />
                        <h3 className="text-lg font-semibold">Product 3</h3>
                        <p className="text-justify text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <Link to="/products/2" className="mt-2 inline-block text-pink-500 hover:text-pink-600">View Details</Link>
                    </div>
                    {/* Repeat similar structure for other trending products */ }
                </div>
            </section>
            {/* Special Offers Section */ }
            <section className="container mx-auto mt-8 w-5/6">
                <h2 className="text-white text-4xl font-bold mb-4">Special Offers</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    { specialOffers.map( ( offer, index ) => (
                        <div key={ index } className="bg-slate-200 rounded-lg p-4 shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300">
                            <h3 className="text-lg font-semibold">{ offer.name }</h3>
                            <p className="text-justify text-green-500 font-bold">{ offer.discount }</p>
                        </div>
                    ) ) }
                </div>
            </section>
            {/* Makeup Tips Section */ }
            <section className="container w-5/6 mx-auto mt-8">
                <h2 className="text-white text-4xl font-bold mb-4">Makeup Tips</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    { makeupTips.map( ( tip, index ) => (
                        <div key={ index } className="bg-gray-200 rounded-lg p-4 shadow-md hover:shadow-lg hover:scale-105 transition duration-300">
                            <h3 className="text-lg font-semibold">{ tip.title }</h3>
                            <p className="text-justify text-gray-500">{ tip.description }</p>
                        </div>
                    ) ) }
                </div>
            </section>

            {/* Exclusive Brands Section */ }
            <section className="bg-gray-200 w-5/6 p-12 m-8 rounded-lg ">
                <div className="container mx-auto text-center">
                    <h2 className="text-zinc-600 text-4xl font-bold mb-4">Exclusive Brands</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        { exclusiveBrands.map( ( brand, index ) => (
                            <div key={ index } className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg hover:scale-105 transition duration-300">
                                <img src={ brand.image } alt={ brand.name } className="w-full h-32 object-cover mb-4 rounded-md" />
                                <h3 className="text-lg font-semibold">{ brand.name }</h3>
                            </div>
                        ) ) }
                    </div>
                </div>
            </section>
            {/* Customer Testimonials */ }
            <section className="bg-gray-200 p-12 m-8 rounded-lg w-5/6">
                <div className="container mx-auto text-center">
                    <h2 className=" text-zinc-600 text-4xl font-bold mb-4">What Our Customers Say</h2>
                    <Slider { ...settings } >
                        { testimonials.map( ( testimonial, index ) => (
                            <div key={ index } className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 mb-8">
                                <p className="text-justify text-gray-700 mb-4">{ testimonial.text }</p>
                                <p className="text-justify text-sm text-gray-500">- { testimonial.author }</p>
                            </div>
                        ) ) }
                    </Slider>
                </div>
            </section>


        </div>
    );
};
export default Home;