import React, { useState } from 'react';
import { useTransition, animated } from 'react-spring';
import styled from 'styled-components';

const AppContainer = styled.div`
    margin: 1rem;
    color: #222222;
`;

const App = () => {

	const components = [
		useTransition({ key: 1, text: <h1>Hi I'm Mei Rizal</h1> }, item => item.key, {
			from: { transform: 'translate3d(0, -800px, 0)' },
			enter: { transform: 'translate3d(0, 0, 0)' }
		}),
		useTransition({ key: 1, text: <h4>Lead Software Development Engineer</h4> }, item => item.key, {
			from: { transform: 'translate3d(-800px, 0, 0)' },
			enter: { transform: 'translate3d(0, 0, 0)' }
		}),
		useTransition({ key: 1, text: <p>Have loved coding since 2007</p> }, item => item.key, {
			from: { transform: 'translate3d(800px, 0, 0)' },
			enter: { transform: 'translate3d(0, 0, 0)' }
		})
	];

	const TransitionComponents = () => {
		return (
			components.map((component) => component.map(({ item, props, key }) =>
				<animated.div
					key={key}
					style={props}>{item.text}</animated.div>
			))
		)
	};

	return (
		<AppContainer>
			<section className="about_area section_gap">
				<div className="container">
					<div className="row justify-content-start align-items-center">
						<div className="offset-lg-3 col-lg-6">
							<div className="main_title text-left">
								<TransitionComponents />
								
								
								<h4>@merizrizal</h4>
								<p>Nice to meet you!</p>
								<a className="primary_btn btn-block" href="https://medium.com/@merizrizal"><span><i className="fab fa-medium"></i> &nbsp; &nbsp;My Articles</span></a>
								<a className="primary_btn btn-block" href="https://github.com/merizrizal"><span><i className="fab fa-github"></i> &nbsp; &nbsp;Projects in Github</span></a>
								<a className="primary_btn btn-block" href="https://www.linkedin.com/in/merizrizal/"><span><i className="fab fa-linkedin"></i> &nbsp; &nbsp;Linkedin Profile</span></a>
							</div>
						</div>
					</div>
				</div>
			</section>
		</AppContainer>
	);
};

export default App;