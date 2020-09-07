import React, { useRef } from 'react';
import { useTransition, useSpring, useChain, animated } from 'react-spring';
import styled from 'styled-components';

const AppContainer = styled.div`
    margin: 1rem;
    color: #222222;
`;

const App = () => {

	const transRefs = [useRef(), useRef(), useRef()];
	
	const components = [
		useTransition({ key: 1, text: <h1>Hi I'm Mei Rizal</h1> }, item => item.key, {
			ref: transRefs[2],
			from: { transform: 'translate3d(0, -800px, 0)' },
			enter: { transform: 'translate3d(0, 0, 0)' },
			trail: 300,
			config: { duration: 500 }
		}),
		useTransition({ key: 1, text: <h4>Lead Software Development Engineer</h4> }, item => item.key, {
			ref: transRefs[1],
			from: { transform: 'translate3d(-800px, 0, 0)' },
			enter: { transform: 'translate3d(0, 0, 0)' },
			trail: 300,
			config: { duration: 500 }
		}),
		useTransition({ key: 1, text: <p>Have loved coding since 2007</p> }, item => item.key, {
			ref: transRefs[0],
			from: { transform: 'translate3d(800px, 0, 0)' },
			enter: { transform: 'translate3d(0, 0, 0)' },
			trail: 100,
			config: { duration: 500 }
		})
	];
	
	useChain(transRefs, [2, 1]);

	const transitionComponents = 
		components.map((component) => 
			component.map(({ item, props, key }) =>
				<animated.div
					key={key}
					style={props}>{item.text}</animated.div>
			)
		);
		
	const springRefs = [useRef(), useRef(), useRef()];
	
	const { transform: transformLeft500 } = useSpring({
		ref: springRefs[2],
		from: {transform: 'perspective(600px) rotateY(180deg)'},
		to: {transform: 'perspective(600px) rotateY(360deg)'},
		config: { duration: 500 }
	});
	
	const { transform: transformRight700 } = useSpring({
		ref: springRefs[1],
		from: {transform: 'perspective(600px) rotateY(180deg)'},
		to: {transform: 'perspective(600px) rotateY(0deg)'},
		config: { duration: 500 }
	});
	
	const { transform: transformLeft800 } = useSpring({
		ref: springRefs[0],
		from: {transform: 'perspective(600px) rotateY(180deg)'},
		to: {transform: 'perspective(600px) rotateY(360deg)'},
		config: { duration: 500 }
	});
	
	useChain(springRefs, [2, 1]);

	return (
		<AppContainer>
			<section className="about_area section_gap">
				<div className="container">
					<div className="row justify-content-start align-items-center">
						<div className="offset-lg-3 col-lg-6">
							<div className="main_title text-left">
								{transitionComponents}
								<h4>@merizrizal</h4>
								<p>Nice to meet you!</p>
								<animated.a className="primary_btn btn-block" style={{transform: transformLeft500}} href="https://medium.com/@merizrizal">
									<span><i className="fab fa-medium"></i> &nbsp; &nbsp;My Articles</span>
								</animated.a>
								<animated.a className="primary_btn btn-block" style={{transform: transformRight700}} href="https://github.com/merizrizal">
									<span><i className="fab fa-github"></i> &nbsp; &nbsp;Projects in Github</span>
								</animated.a>
								<animated.a className="primary_btn btn-block" style={{transform: transformLeft800}}  href="https://www.linkedin.com/in/merizrizal/">
									<span><i className="fab fa-linkedin"></i> &nbsp; &nbsp;Linkedin Profile</span>
								</animated.a>
							</div>
						</div>
					</div>
				</div>
			</section>
		</AppContainer>
	);
};

export default App;