// rfce - Para crear estructura básica de componente.
import React from 'react';

import '../stylesheet/Testimonios.css';

function Testimonios(props) {
	return (
		<div className='container-testimony'>
			<img
				className='img-testimony'
				src={require(`../img/testimony-${props.img}.png`)}
				alt='Foto de 1'
			/>
			<div className='container-text-testimony'>
				<p className='name-testimony'>
					{props.name} en {props.country}
				</p>
				<p className='name-charge'>
					{props.charge} en {props.company}
				</p>
				<p className='text-testimony'>"{props.testimony}"</p>
			</div>
		</div>
	);
}

export default Testimonios;
