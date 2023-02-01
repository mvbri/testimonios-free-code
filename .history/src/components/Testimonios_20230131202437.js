// rfce - Para crear estructura básica de componente.
import React from 'react';

function Testimonios() {
	return (
		<div className='container-testimony'>
			<img
				className='img-testimony'
				src={require('../img/testimony-1.png')}
				alt='Foto de 1'
			/>
			<div className='container-text-testimony'>
				<p className='name-testimony'>Lorem en ipsu</p>
				<p className='charhe-name'>lorem ipsum</p>
				<p className='text-testimony'>
					Da miedo cambiar de carrera. Solo gané la confianza de que podía
					programar trabajando a través de los cientos de horas de lecciones
					gratuitas en freeCodeCamp. Dentro de un año tuve un trabajo de seis
					cifras como ingeniero de software. freeCodeCamp cambió mi vida.
				</p>
			</div>
		</div>
	);
}

export default Testimonios;
