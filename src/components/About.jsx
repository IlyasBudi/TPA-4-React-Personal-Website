import React from 'react';
import aboutImg from '../images/about-img.jpg'
import SectionTitle from './SectionTitle';

function About() {
	return (
		<div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 py-12" id="about">
			<div className="w-full md:w-6/12">
				<SectionTitle>About Me</SectionTitle>
				<p className="text-md text-gray-300">
				Saya Ilyas Budi Wahyu Jati Mahasiswa Dari Program Studi Teknik Informatika Institut Teknologi Indonesia. Saya Memiliki Ketertarikan Dengan Bidang Front-End Web Development.
				</p>
				<p className="text-md text-gray-300 pt-2">
					Tempat, Tanggal lahir: Tangerang, 31 Juli 2002
				</p>
				<p className="text-md text-gray-300">
					Umur: 20 Tahun
				</p>
				<p className="text-md text-gray-300">
					Alamat: Tangerang, Indonesia
				</p>
				<a
					href="wjati145@gmail.com"
					className="block mt-3 text-md md:text-lg text-gray-300 underline decoration-1 hover:text-indigo-500"
				>
					wjati145@gmail.com
				</a>
			</div>

			<img
				src={aboutImg}
				alt="Photo"
				className="w-6/12 md:w-3/12 rounded-lg object-cover"
			/>
		</div>
		
	);
}

export default About;
