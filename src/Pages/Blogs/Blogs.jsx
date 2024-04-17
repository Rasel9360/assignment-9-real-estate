import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import { useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet-async";


const Blogs = () => {
    const blog = useLoaderData();
    // console.log(blog)


    return (
        <div>
            <Helmet>
                <title>Blogs</title>
            </Helmet>
            <div className="bg-[#1313130D] py-6">
                <h3 className="text-center text-4xl p-font font-bold mb-3 text-black  font-serif">Blog</h3>
                <div className="flex justify-center ">
                    <p className="w-2/4 text-center text-gray-600 text-lg">"Real Estate provides the highest returns, the greatest values and the least risk." -- Armstrong Williams
                        Learn about real estate in Bangladesh from NR Holding blog.</p>
                </div>
            </div>
            <div className="lg:w-11/12 mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    blog.map((b, i) => <Blog key={i} blog={b}></Blog>)
                }
            </div>
        </div>
    );
};

export default Blogs;