import React from 'react';
import styled from 'styled-components';

const AppContainer = styled.div`
    margin: 1rem;
    color: #222222;
`;

const App = () => (
	<AppContainer>
		<section class="about_area section_gap">
			<div class="container">
				<div class="row justify-content-start align-items-center">

					<div class="offset-lg-3 col-lg-6">
						<div class="main_title text-left">
							<h1>Hi I'm Mei Rizal</h1>
							<h4>Lead Software Development Engineer</h4>
							<p>Have loved coding since 2007</p>
							<h4>@merizrizal</h4>
							<p>Nice to meet you!</p>
							<a class="primary_btn btn-block" href="https://medium.com/@merizrizal"><span><i class="fab fa-medium"></i> &nbsp; &nbsp;My Articles</span></a>
							<a class="primary_btn btn-block" href="https://github.com/merizrizal"><span><i class="fab fa-github"></i> &nbsp; &nbsp;Projects in Github</span></a>
							<a class="primary_btn btn-block" href="https://www.linkedin.com/in/merizrizal/"><span><i class="fab fa-linkedin"></i> &nbsp; &nbsp;Linkedin Profile</span></a>
						</div>
					</div>
				</div>
			</div>
		</section>
	</AppContainer>
);

export default App;