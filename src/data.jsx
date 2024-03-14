import { FaHome, FaUser, FaFolderOpen, FaEnvelopeOpen, FaBriefcase, FaGraduationCap, FaCode } from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';

import Work1 from './assets/project-1.jpg';
import Work2 from './assets/project-2.jpg';
import Work3 from './assets/project-3.jpg';
import Work4 from './assets/project-4.jpg';
import Work5 from './assets/project-5.jpg';
import Work6 from './assets/project-6.jpg';

import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

export const links = [
	{
		id: 1,
		name: 'Home',
		icon: <FaHome className='nav__icon' />,
		path: '/',
	},

	{
		id: 2,
		name: 'About',
		icon: <FaUser className='nav__icon' />,
		path: '/about',
	},

	{
		id: 3,
		name: 'Portfolio',
		icon: <FaFolderOpen className='nav__icon' />,
		path: '/portfolio',
	},

	{
		id: 4,
		name: 'Contact',
		icon: <FaEnvelopeOpen className='nav__icon' />,
		path: '/contact',
	},
];

export const personalInfo = [
	{
		id: 1,
		title: 'First Name : ',
		description: 'Alexandru',
	},

	{
		id: 2,
		title: 'Last Name : ',
		description: 'Iabanji',
	},

	{
		id: 3,
		title: 'Age : ',
		description: '32 Years',
	},

	{
		id: 4,
		title: 'Nationality : ',
		description: 'Portuguese',
	},

	{
		id: 5,
		title: 'Status : ',
		description: 'Available',
	},

	{
		id: 6,
		title: 'Address : ',
		description: 'Portugal, Lisbon',
	},

	{
		id: 7,
		title: 'Phone : ',
		description: '+351926830729',
	},

	{
		id: 8,
		title: 'Email : ',
		description: 'alexoneplus91@gmail.com',
	},

	{
		id: 9,
		title: 'Languages : ',
		description: 'Portuguese, English, Moldavian, Romenian, Russian, Spanish',
	},
];

export const stats = [
	{
		id: 1,
		no: '< 1',
		title: 'Years of <br /> Experience',
	},

	{
		id: 2,
		no: '6',
		title: 'Completed <br /> Projects',
	},
];

export const resume = [
	{
		id: 1,
		category: 'experience',
		icon: <FaBriefcase />,
		year: '2022 - PRESENT',
		title: 'Courier <span> Pizza na Brasa </span>',
	},

	{
		id: 2,
		category: 'experience',
		icon: <FaBriefcase />,
		year: '2020 - 2022',
		title: 'Construction <span> Germany </span>',
	},

	{
		id: 3,
		category: 'experience',
		icon: <FaBriefcase />,
		year: '2015 - 2020',
		title: 'Sushiman <span> Yo Nashi, Noori </span>',
	},

	{
		id: 4,
		category: 'experience',
		icon: <FaBriefcase />,
		year: '2013-2015',
		title: 'Construction <span> Germany </span>',
	},

	{
		id: 5,
		category: 'experience',
		icon: <FaBriefcase />,
		year: '2012-2013',
		title: 'Military Service <span> Portuguese Army </span>',
	},

	{
		id: 6,
		category: 'education',
		icon: <FaGraduationCap />,
		year: '2011',
		title: 'High School Degree <span> Escola Secundária de Miraflores  </span>',
	},
];

export const skills = [
	{
		id: 1,
		title: 'Html',
		percentage: '79',
	},

	{
		id: 2,
		title: 'Javascript',
		percentage: '64',
	},

	{
		id: 3,
		title: 'Css',
		percentage: '80',
	},

	{
		id: 4,
		title: 'Php',
		percentage: '10',
	},

	{
		id: 5,
		title: 'React',
		percentage: '65',
	},

	{
		id: 6,
		title: 'Angular',
		percentage: '0',
	},

	{
		id: 7,
		title: 'Mysql',
		percentage: '5',
	},
];

export const portfolio = [
	{
		id: 1,
		img: Work1,
		title: 'Website Design',
		details: [
			{
				icon: <FiFileText />,
				title: 'Project : ',
				desc: 'Gym site',
			},
			{
				icon: <FiUser />,
				title: 'Client : ',
				desc: 'Gym Owner',
			},
			{
				icon: <FaCode />,
				title: 'Language : ',
				desc: 'React Js',
			},
			{
				icon: <FiExternalLink />,
				title: 'Preview : ',
				desc: 'www.GymPlus.com',
			},
		],
	},

	{
		id: 2,
		img: Work2,
		title: 'Website Design',
		details: [
			{
				icon: <FiFileText />,
				title: 'Project : ',
				desc: 'Car Dealership',
			},
			{
				icon: <FiUser />,
				title: 'Client : ',
				desc: 'Tesla',
			},
			{
				icon: <FaCode />,
				title: 'Language : ',
				desc: 'Angular',
			},
			{
				icon: <FiExternalLink />,
				title: 'Preview : ',
				desc: 'www.tesla.com',
			},
		],
	},

	{
		id: 3,
		img: Work3,
		title: 'Website Design',
		details: [
			{
				icon: <FiFileText />,
				title: 'Project : ',
				desc: 'Clothing Store',
			},
			{
				icon: <FiUser />,
				title: 'Client : ',
				desc: 'Made Well',
			},
			{
				icon: <FaCode />,
				title: 'Language : ',
				desc: 'React Js',
			},
			{
				icon: <FiExternalLink />,
				title: 'Preview : ',
				desc: 'www.madewell.com',
			},
		],
	},

	{
		id: 4,
		img: Work4,
		title: 'Website Design',
		details: [
			{
				icon: <FiFileText />,
				title: 'Project : ',
				desc: 'Grocery Store',
			},
			{
				icon: <FiUser />,
				title: 'Client : ',
				desc: 'Fine Food',
			},
			{
				icon: <FaCode />,
				title: 'Language : ',
				desc: 'React Js',
			},
			{
				icon: <FiExternalLink />,
				title: 'Preview : ',
				desc: 'www.finefood.com',
			},
		],
	},

	{
		id: 5,
		img: Work5,
		title: 'Website Design',
		details: [
			{
				title: 'Project : ',
				desc: 'Airport Website',
			},
			{
				title: 'Client : ',
				desc: 'Sever Sky',
			},
			{
				title: 'Language : ',
				desc: 'React JS',
			},
			{
				title: 'Preview : ',
				desc: 'www.sevensky.com',
			},
		],
	},

	{
		id: 6,
		img: Work6,
		title: 'Website Design',
		details: [
			{
				icon: <FiFileText />,
				title: 'Project : ',
				desc: 'Betting Site',
			},
			{
				icon: <FiUser />,
				title: 'Client : ',
				desc: 'Betting Manager',
			},
			{
				icon: <FaCode />,
				title: 'Language : ',
				desc: 'React Js',
			},
			{
				icon: <FiExternalLink />,
				title: 'Preview : ',
				desc: 'www.soccer.com',
			},
		],
	},
];

export const themes = [
	{
		id: 1,
		img: Theme1,
		color: 'hsl(252, 35%, 51%)',
	},

	{
		id: 2,
		img: Theme2,
		color: 'hsl(4, 93%, 54%)',
	},

	{
		id: 3,
		img: Theme3,
		color: 'hsl(271, 76%, 53%)',
	},

	{
		id: 4,
		img: Theme4,
		color: 'hsl(225, 73%, 57%)',
	},

	{
		id: 5,
		img: Theme5,
		color: 'hsl(43, 74%, 49%)',
	},

	{
		id: 6,
		img: Theme6,
		color: 'hsl(339, 81%, 66%)',
	},

	{
		id: 7,
		img: Theme7,
		color: 'hsl(80, 61%, 50%)',
	},

	{
		id: 8,
		img: Theme8,
		color: 'hsl(19, 96%, 52%)',
	},

	{
		id: 9,
		img: Theme9,
		color: 'hsl(88, 65%, 43%)',
	},

	{
		id: 10,
		img: Theme10,
		color: 'hsl(42, 100%, 50%)',
	},
];
