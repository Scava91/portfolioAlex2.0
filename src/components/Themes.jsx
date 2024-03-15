import React, { useEffect, useReducer } from 'react';
import { themes } from '../data';
import ThemeItem from './ThemeItem';
import { FaCog } from 'react-icons/fa';
import { BsSun, BsMoon } from 'react-icons/bs';
import './themes.css';

const getStorageColor = () => {
	let color = 'hsl(118, 67%, 23%)';
	if (localStorage.getItem('color')) {
		color = localStorage.getItem('color');
	}

	return color;
};

const getStorageTheme = () => {
	let theme = 'light-theme';
	if (localStorage.getItem('theme')) {
		theme = localStorage.getItem('theme');
	}

	return theme;
};

const initialState = {
	showSwitcher: false,
	color: getStorageColor(),
	theme: getStorageTheme(),
};

const reducer = (state, action) => {
	switch (action.type) {
		case 'TOGGLE_SWITCHER':
			return { ...state, showSwitcher: !state.showSwitcher };
		case 'CHANGE_COLOR':
			return { ...state, color: action.payload };
		case 'TOGGLE_THEME':
			return { ...state, theme: state.theme === 'light-theme' ? 'dark-theme' : 'light-theme' };
		default:
			return state;
	}
};

const Themes = () => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const changeColor = color => {
		dispatch({ type: 'CHANGE_COLOR', payload: color });
	};

	const toggleTheme = () => {
		dispatch({ type: 'TOGGLE_THEME' });
	};

	useEffect(() => {
		document.documentElement.style.setProperty('--first-color', state.color);
		localStorage.setItem('color', state.color);
	}, [state.color]);

	useEffect(() => {
		document.documentElement.className = state.theme;
		localStorage.setItem('theme', state.theme);
	}, [state.theme]);

	return (
		<div>
			<div className={`${state.showSwitcher ? 'show-switcher' : ''} style__switcher`}>
				<div className='style__switcher-toggler' onClick={() => dispatch({ type: 'TOGGLE_SWITCHER' })}>
					<FaCog />
				</div>

				<div className='theme__toggler' onClick={toggleTheme}>
					{state.theme === 'light-theme' ? <BsMoon /> : <BsSun />}
				</div>

				<h3 className='style__switcher-title'>Style Switcher</h3>
				<div className='style__switcher-items'>
					{themes.map((theme, index) => {
						return <ThemeItem key={index} {...theme} changeColor={changeColor} />;
					})}
				</div>

				<div className='style__switcher-close' onClick={() => dispatch({ type: 'TOGGLE_SWITCHER' })}>
					&times;
				</div>
			</div>
		</div>
	);
};

export default Themes;
