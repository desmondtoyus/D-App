import React, { memo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react';
import Wrapper from '../../components/wrapper';
import './index.css';
import myImg from '../../assets/images/desmond.jpg'

function About(props){

    return(
        <Wrapper title={`About Us`} viewId='about' desc={`Desmond Ademiluyi -  hands-on React (& Redux) and NodeJS Engineer, I have over 7 years’ experience working with JavaScript.`}>
            {/* <div>
            <p>I’m a hands-on React (& Redux) and NodeJS Engineer, I have over 7 years’ experience working with JavaScript. For the past 3 years, I have worked as a full-stack developer at PilotX where I helped the company developed the PilotX Online AdTech SaaS platform (average 100k users daily) using React and Redux on the frontend and NodeJS on the backend.</p>
            <p>I have been building React/NodeJS apps since 2015, the component-based structure of React added to the state management function of Redux with the event-driven architecture of NodeJS make React/NodeJS apps perform better, scale easily, and maintainable. I have worked on several projects from architecture to full development and deployment, including a Social Countdown Sharing App and React/JavaScript libraries. I love adding value to whatever I do while learning new skills and meeting new people.</p>
            </div> */}

            <div className="about-section">
		<div className="container">
			<div className="site-title text-center">
				<h3>Desmond Ademiluyi</h3>
				<p> About Me</p>
			</div>
			<div className="about-inner-section">	
			    <div className="col-md-6 about-right">
				<img src={myImg} alt="Desmond Ademiluyi"/>
			</div>
				<div className="col-md-6 about-inner-column">
					<p>I’m a hands-on React (& Redux) and NodeJS Engineer, I have over 7 years’ experience working with JavaScript. For the past 3 years, I have worked as a full-stack developer at PilotX where I helped the company develop their Online AdTech SaaS platform using React and Redux on the frontend and NodeJS on the backend.</p>
                    <p>I have been building React/NodeJS apps since 2016, the component-based structure of React added to the state management function of Redux with the event-driven architecture of NodeJS make React/NodeJS apps perform better, scale easily, and maintainable. I have worked on several projects from architecture to full development and deployment, including a Social Countdown Sharing App, Business Rating App, React/JavaScript libraries and much more. I love adding value to where ever I find myself while learning new skills and meeting new people.</p>
                    <p> I have a strong eye for UI design with extensive experiences working with HTML5, CSS, Bootstrap, JavaScript, Node.js, React JS, Redux, jQuery, PostgreSQL, MySQL, Roku Bright Script and Swift/TVMLKit JS.</p>
				</div>
				
				<div className="clearfix"> </div>
			</div>
		</div>
	</div>
        </Wrapper>
    )
}

export default memo(About);