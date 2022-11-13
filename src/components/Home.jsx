import React from 'react'
import { Link } from "react-router-dom";


function Home() {
    return (
        <div id="home" className="flex items-center justify-center flex-col py-20">
            <div className="text-center">
                <h1 className="text-2xl md:text-4xl mb-1 md:mb-3 text-indigo-600 font-semibold">
                    Hi, This is Ilyas
                </h1>
                <p className="text-md md:text-xl max-w-wd mb-3 text-gray-300">
                    Nama saya Ilyas Budi Wahyu Jati, Saya Seorang Mahasiswa Teknik Informatika Yang Tertarik Dengan Modern Web Development.
                </p>
                <Link to={"/About"} className="inline-block px-8 py-3 border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:text-md" >
                About Me
                </Link>
            </div>
        </div>
        
    );
}

export default Home;