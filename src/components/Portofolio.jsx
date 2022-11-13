import React from 'react';
import portos from '../data/portos';
import SectionTitle from './SectionTitle';
import PortofolioItem from './PortofolioItem';

function Portos() {
	return (
		<div className="py-12">
			<SectionTitle id="port">Portofolio</SectionTitle>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
				{portos.map(port => (
					<PortofolioItem
						key={port.title}
						img={port.img}
						title={port.title}
						url={port.url}
					/>
				))}
			</div>
		</div>
	);
}

export default Portos;
