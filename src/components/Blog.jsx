import React from "react";
import mdn from '../images/blog-mdn.png';

function Blog() {
    return (
        <>
            <div id="blog" className="bg-slate-900 px-4 xl:px-0 py-12">
                <div className="mx-auto container">
                    <h1 className="text-center text-3xl lg:text-5xl tracking-wider text-indigo-600 font-bold">BLOG</h1>
                    <div className="mt-12 lg:mt-24">
                        <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8">
                            <div>
                                <img className="w-full rounded-tl-lg rounded-tr-lg overflow-hidden" src={mdn} alt="mdn-web-docs" />
                                <div className="py-4 px-8 w-full flex justify-between bg-indigo-700">
                                    
                                    <p className="text-sm text-gray-300 font-semibold tracking-wide">13 Sept, 2022</p>
                                </div>
                                <div className="bg-slate-800 px-10 py-6 rounded-bl-lg rounded-br-lg">
                                    <h1 className="text-4xl text-gray-100 font-semibold tracking-wider">HTML: HyperText Markup Language</h1>
                                    <p className="text-gray-300 text-base lg:text-lg  lg:leading-8 tracking-wide mt-6 w-11/12">
                                        HTML (HyperText Markup Language) is the most basic building block of the Web. It defines the meaning and structure of web content. Other technologies besides HTML are generally used to describe a web page's appearance/presentation (CSS) or functionality/behavior (JavaScript).
                                        "Hypertext" refers to links that connect web pages to one another, either within a single website or between websites. Links are a fundamental aspect of the Web.
                                    </p>
                                    <div className="w-full mt-4 justify-end flex items-center cursor-pointer">
                                        <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/HTML" className="text-base tracking-wide text-indigo-500">Read more</a>
                                        <svg className="ml-3 lg:ml-6" xmlns="http://www.w3.org/2000/svg" width={20} height={18} viewBox="0 0 20 18" fill="none">
                                            <path d="M11.7998 1L18.9998 8.53662L11.7998 16.0732" stroke="#4338ca" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M1 8.53662H19" stroke="#4338ca" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <div className="h-5 w-2" />
                                </div>
                            </div>
                            <div>
                                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
                                    <div>
                                        <img className="w-full rounded-tl-lg rounded-tr-lg overflow-hidden" src={mdn} alt="mdn-web-docs" />
                                        <div className="py-2 px-4 w-full flex justify-between bg-indigo-700">
                                            
                                            <p className="text-sm text-gray-300 font-semibold tracking-wide">25 Sept, 2022</p>
                                        </div>
                                        <div className="bg-slate-800 px-3  lg:px-6 py-4 rounded-bl-lg rounded-br-lg">
                                            <h1 className="text-lg text-gray-100 font-semibold tracking-wider">CSS: Cascading Style Sheets</h1>
                                            <p className="text-gray-300 text-sm  lg:text-base  lg:leading-8 pr-4 tracking-wide mt-2">Cascading Style Sheets (CSS) is a stylesheet language used to describe the...</p>
                                            <div className="w-full mt-4 justify-end flex items-center cursor-pointer" >
                                                <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS" className="text-base tracking-wide text-indigo-500">Read more</a>
                                                <svg className="ml-3 lg:ml-6" xmlns="http://www.w3.org/2000/svg" width={20} height={18} viewBox="0 0 20 18" fill="none">
                                                <path d="M11.7998 1L18.9998 8.53662L11.7998 16.0732" stroke="#4338ca" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M1 8.53662H19" stroke="#4338ca" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <img className="w-full rounded-tl-lg rounded-tr-lg overflow-hidden" src={mdn} alt="mdn-web-docs" />
                                        <div className="py-2 px-4 w-full flex justify-between bg-indigo-700">
                                            <p className="text-sm text-gray-300 font-semibold tracking-wide">26 Oct, 2022</p>
                                        </div>
                                        <div className="bg-slate-800 px-3  lg:px-6 py-4 rounded-bl-lg rounded-br-lg">
                                            <h1 className="text-lg text-gray-100 font-semibold tracking-wider">JavaScript</h1>
                                            <p className="text-gray-300 text-sm  lg:text-base  lg:leading-8 pr-4 tracking-wide mt-2">JavaScript is a programming language that allows you to implement complex things on ...</p>
                                            <div className="w-full mt-4 justify-end flex items-center cursor-pointer">
                                                <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript" className="text-base tracking-wide text-indigo-500">Read more</a>
                                                <svg className="ml-3 lg:ml-6" xmlns="http://www.w3.org/2000/svg" width={20} height={18} viewBox="0 0 20 18" fill="none">
                                                <path d="M11.7998 1L18.9998 8.53662L11.7998 16.0732" stroke="#4338ca" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M1 8.53662H19" stroke="#4338ca" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
                                    <div>
                                        <img className="w-full rounded-tl-lg rounded-tr-lg overflow-hidden" src={mdn} alt="mdn-web-docs" />
                                        <div className="py-2 px-4 w-full flex justify-between bg-indigo-700">
                                            
                                            <p className="text-sm text-gray-300 font-semibold tracking-wide">6 Nov, 2022</p>
                                        </div>
                                        <div className="bg-slate-800 px-3  lg:px-6 py-4 rounded-bl-lg rounded-br-lg">
                                            <h1 className="text-lg text-gray-100 font-semibold tracking-wider">Getting started with React</h1>
                                            <p className="text-gray-300 text-sm  lg:text-base  lg:leading-8 pr-4 tracking-wide mt-2">In this article we will say hello to React. We'll discover a little bit of detail about its...</p>
                                            <div className="w-full mt-4 justify-end flex items-center cursor-pointer">
                                                <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started" className="text-base tracking-wide text-indigo-500">Read more</a>
                                                <svg className="ml-3 lg:ml-6" xmlns="http://www.w3.org/2000/svg" width={20} height={18} viewBox="0 0 20 18" fill="none">
                                                <path d="M11.7998 1L18.9998 8.53662L11.7998 16.0732" stroke="#4338ca" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M1 8.53662H19" stroke="#4338ca" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <img className="w-full rounded-tl-lg rounded-tr-lg overflow-hidden" src={mdn} alt="mdn-web-docs" />
                                        <div className="py-2 px-4 w-full flex justify-between bg-indigo-700">
                                            
                                            <p className="text-sm text-gray-300 font-semibold tracking-wide">13TH Oct, 2020</p>
                                        </div>
                                        <div className="bg-slate-800 px-3  lg:px-6 py-4 rounded-bl-lg rounded-br-lg">
                                            <h1 className="text-lg text-gray-100 font-semibold tracking-wider">React interactivity</h1>
                                            <p className="text-gray-300 text-sm  lg:text-base  lg:leading-8 pr-4 tracking-wide mt-2">As we near the end of our React journey (for now at least), we'll add the finishing touches to the main... </p>
                                            <div className="w-full mt-4 justify-end flex items-center cursor-pointer">
                                                <p className="text-base tracking-wide text-indigo-500">Read more</p>
                                                <svg className="ml-3 lg:ml-6" xmlns="http://www.w3.org/2000/svg" width={20} height={18} viewBox="0 0 20 18" fill="none">
                                                <path d="M11.7998 1L18.9998 8.53662L11.7998 16.0732" stroke="#4338ca" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M1 8.53662H19" stroke="#4338ca" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Blog;
