import React from 'react';
import { GiBookCover } from 'react-icons/gi';
import { GiBookshelf } from 'react-icons/gi';
import { IoSchool } from 'react-icons/io5';

export default [
	{
		title: '2014-2017',
		icon: <GiBookCover className="w-full h-full" />,
		description:
			'SMPN 23 Kota Tangerang',
	},
	{
		title: '2017-2020',
		icon: <GiBookshelf className="w-full h-full" />,
		description:
			'SMKN 5 Kota Tangerang',
	},
	{
		title: '2020-Sekarang',
		icon: <IoSchool className="w-full h-full" />,
		description:
			'Institut Teknologi Indonesia',
	},
];
