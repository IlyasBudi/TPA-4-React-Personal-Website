import React from 'react';
import educations from '../data/educations';
import SectionTitle from './SectionTitle';
import EducationItem from './EducationItem';

function Educations() {
	return (
		<div className="py-12">
			<SectionTitle>Education</SectionTitle>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
				{educations.map(education => (
					<EducationItem
						key={education.title}
						title={education.title}
						icon={education.icon}
						description={education.description}
					/>
				))}
			</div>
		</div>
	);
}

export default Educations;
