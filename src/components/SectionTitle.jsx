import React from 'react';

function SectionTitle({ children, id }) {
	return (
		<h1
			id={id && id}
			className="text-3xl font-bold mb-5 text-indigo-600 "
		>
			{children}
		</h1>
	);
}

export default SectionTitle;
