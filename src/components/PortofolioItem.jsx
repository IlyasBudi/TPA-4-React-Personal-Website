import React from 'react';

function PortofolioItem({ img, title, url }) {
    return (
        <a href={url} target="_blank" rel="noreferrer" className="bg-slate-800 rounded-lg overflow-hidden">
            <img src={img} alt="porto" className="w-full h-36 md:h-48 object-cover"
            />
            <div className="w-full p-5 text-gray-300 ">
                <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold">
                    {title}
                </h3>
            </div>   
        </a>
    );
}

export default PortofolioItem;