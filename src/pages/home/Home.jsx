import React from 'react';
import Profile from '../../assets/home.jpg';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import './home.css';

const Home = () => {
	return (
		<section className='home section grid'>
			<img src={Profile} alt='' className='home__img' />

			<div className='home__content'>
				<div className='home__data'>
					<h1 className='home__title'>
						<span>Hi, i'm Alex.</span> Aspiring Web Developer
					</h1>

					<p className='home__description'>
						I'm Moldavian born, Portuguese citizen who is looking to start his journey as a front-end developer. My past professional experience has taught me alot and helped me grow as person and as
						a professional employee. From army to working in a restaurant i have always teamed up with all types of personalities and nationalities. I don't have much free time since i'm always
						working or learning something but whatever spare time i have i usually spend it at the gym or riding my motorcycle. I like all sorts of things but my passion is riding motorbikes. I am
						looking forward to meeting you and my new colleagues.
					</p>

					<Link to='/about' className='button'>
						More About Me{' '}
						<span className='button__icon'>
							<FaArrowRight />
						</span>
					</Link>
				</div>
			</div>

			<div className='color__block'></div>
		</section>
	);
};

export default Home;
