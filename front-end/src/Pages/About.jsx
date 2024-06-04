const About = () =>
{
    return (
        <div className="flex justify-center items-center py-12 min-h-screen bg-slate-700 flex-col">
            <section className=" mb-12 w-4/5">
                <h2 className="text-white text-4xl font-bold mb-2 ">About Us</h2>
                <p className=" bg-slate-200 hover:shadow-white shadow-md hover:scale-105 duration-500 rounded-lg p-6 text-slate-800 font-bold leading-relaxed text-justify">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Aenean in turpis eu lacus luctus fermentum.
                    Sed eu urna auctor, aliquam nisi ut, commodo leo. In hac habitasse platea dictumst.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Aenean in turpis eu lacus luctus fermentum.
                    Sed eu urna auctor, aliquam nisi ut, commodo leo. In hac habitasse platea dictumst.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Aenean in turpis eu lacus luctus fermentum.
                    Sed eu urna auctor, aliquam nisi ut, commodo leo. In hac habitasse platea dictumst.
                </p>
            </section>

            <section className="mb-12 w-4/5">
                <h2 className="text-white text-4xl font-bold mb-4 ">Our Team</h2>

                <div className="bg-slate-200 hover:scale-105 duration-500 hover:shadow-white shadow-lg w-full rounded-lg p-6  hover:shadow-lg transition flex flex-wrap  justify-around">
                    <div className="w-1/3 p-2 border-b-2 border-slate-600 shadow-white shadow-md m-1 rounded-sm">
                        <img className="w-10 ml-2 h-10 rounded-full" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        <h3 className="text-lg  text-slate-600 font-bold">John Doe</h3>
                        <p className="text-gray-500">Position: CEO</p>
                        <p className="text-gray-500">Email: john@example.com</p>

                    </div>
                    <div className="w-1/3 p-2 border-b-2 border-slate-600 shadow-white shadow-md m-1 rounded-sm">
                        <img className="w-10 ml-2 h-10 rounded-full" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        <h3 className="text-lg  text-slate-600 font-bold">John Doe</h3>
                        <p className="text-gray-500">Position: CEO</p>
                        <p className="text-gray-500">Email: john@example.com</p>

                    </div>
                    <div className="w-1/3 p-2 border-b-2 border-slate-600 shadow-white shadow-md m-1 rounded-sm">
                        <img className="w-10 ml-2 h-10 rounded-full" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

                        <h3 className="text-lg  text-slate-600 font-bold">John Doe</h3>
                        <p className="text-gray-500">Position: CEO</p>
                        <p className="text-gray-500">Email: john@example.com</p>
                    </div>
                    <div className="w-1/3 p-2 border-b-2 border-slate-600 shadow-white shadow-md m-1 rounded-sm">
                        <img className="w-10 ml-2 h-10 rounded-full" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

                        <h3 className="text-lg  text-slate-600 font-bold">John Doe</h3>
                        <p className="text-gray-500">Position: CEO</p>
                        <p className="text-gray-500">Email: john@example.com</p>
                    </div>
                    <div className="w-1/3 p-2 border-b-2 border-slate-600 shadow-white shadow-md m-1 rounded-sm">
                        <img className="w-10 ml-2 h-10 rounded-full" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

                        <h3 className="text-lg  text-slate-600 font-bold">John Doe</h3>
                        <p className="text-gray-500">Position: CEO</p>
                        <p className="text-gray-500">Email: john@example.com</p>
                    </div>
                    {/* Add more employee details as needed */ }
                </div>
            </section>

            <section className="mb-12 w-4/5">
                <h2 className="text-white text-4xl font-bold mb-4 ">Our Sponsors</h2>

                <div className="bg-slate-200 hover:scale-105 duration-500 hover:shadow-white shadow-lg w-full rounded-lg p-6  hover:shadow-lg transition ">
                    <img src="sponsor1.jpg" alt="Sponsor 1" className="w-full h-20 object-cover mb-4 rounded-md" />
                    {/* Add more sponsor details as needed */ }
                </div>

            </section>


            <section className="mb-12 w-4/5">
                <h2 className="text-white text-4xl font-bold mb-4 ">Contact Information</h2>
                <div className="bg-slate-200 hover:scale-105 duration-500 hover:shadow-white shadow-lg w-full rounded-lg p-6  hover:shadow-lg transition ">
                    <h3 className="text-lg  text-slate-600 font-bold">General Inquiries</h3>
                    <p className="text-gray-500">Email: info@example.com</p>
                    <p className="text-gray-500">Phone: +1 123-456-7890</p>

                    {/* Add more contact information sections as needed */ }
                </div>
            </section>
        </div>
    );
};
export default About;