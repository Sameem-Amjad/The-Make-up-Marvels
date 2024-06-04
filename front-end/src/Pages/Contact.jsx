const Contact = () =>
{
    return (
        <div className="min-h-screen flex-col py-12 flex justify-center items-center bg-slate-700">
                {/* Contact Form Section */ }
                <section className="mb-12 w-4/5">
                    <h2 className="text-white text-4xl font-bold mb-2">Contact Us</h2>
                    <form className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-sm font-medium text-white">Your Name</label>
                            <input type="text" id="name" name="name" className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-white">Your Email</label>
                            <input type="email" id="email" name="email" className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300" />
                        </div>
                        <div className="col-span-2 mb-4">
                            <label htmlFor="message" className="block text-sm font-medium text-white">Your Message</label>
                            <textarea id="message" name="message" rows="4" className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"></textarea>
                        </div>
                        <div className="col-span-2">
                            <button type="submit" className="bg-blue-500 text-white font-semibold py-2 px-6 rounded-full hover:bg-blue-600 transition duration-300 focus:outline-none focus:ring focus:border-blue-300">Send Message</button>
                        </div>
                    </form>
                </section>

                {/* About the Website Section */ }
                <section className="mb-12 w-4/5">
                    <h2 className="text-white text-4xl font-bold mb-2">About Our Website</h2>
                    <p className="text-white leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Aenean in turpis eu lacus luctus fermentum.
                        Sed eu urna auctor, aliquam nisi ut, commodo leo. In hac habitasse platea dictumst.
                    </p>
                </section>

                {/* Mission and Vision Section */ }
                <section className="mb-12 w-4/5">
                    <h2 className="text-white text-4xl font-bold mb-2">Our Mission and Vision</h2>
                    <p className="text-white leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Aenean in turpis eu lacus luctus fermentum.
                        Sed eu urna auctor, aliquam nisi ut, commodo leo. In hac habitasse platea dictumst.
                    </p>
                </section>
            
        </div>
    );
};
export default Contact;