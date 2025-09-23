import { useState } from 'react';
import './Projects.css';
import recommendationImg from '../assets/recommandation.jpg';
import erodeEkart from '../assets/erode_ekart.jpg';
import linkedinJobAnalysis from '../assets/linkedindata.jpg'; // Import other project images as needed
// Import other images as needed

const projectDetails = [
	{
		title: 'Recommendation Algorithm',
		date: 'February 2025',
		type: 'Hackathon',
		short: 'A real-time product recommendation system using hybrid filtering to boost personalization',
		long: `This project was developed during a hackathon and implements a real-time product recommendation system. It uses a hybrid filtering approach, combining collaborative and content-based filtering to provide highly personalized recommendations. The system is designed for scalability and fast response, and was shown to increase user engagement and sales in a simulated e-commerce environment. Technologies used: Python, scikit-learn, Node.js, MongoDB, React.`,
		github: 'https://github.com/Ganesh-M01/Recommender-Algorithm',
		deployment: 'https://recommendation-demo.example.com',
		backgroundImage: `url(${recommendationImg})`
	},
	{
		title: 'Erode Marketing E-Kart',
		date: 'December 2024 - February 2025',
		type: 'Academic Project',
		short: 'An E-Commerce platform for Erode Marketing for their appliances using the MERN stack',
		long: `This project involved developing an e-commerce platform aimed at promoting local artisans and their products. The platform features a user-friendly interface, secure payment options, and a robust backend to manage inventory and orders. Technologies used: MERN stack (MongoDB, Express.js, React, Node.js), Stripe API for payments.`,
		github: 'https://github.com/ARUNKUMARM17/erode-estore',
		deployment: 'https://erode-estore.vercel.app/',
		backgroundImage: `url(${erodeEkart})`
	},
	{
		title: 'LinkedIn Job Data Analysis',
		date: 'January 2025',
		type: 'Academic Project',
		short: 'A data analysis project on LinkedIn job postings to identify skills in demand using Power BI',
		long: `This project involved analyzing LinkedIn job postings to identify trends in job requirements and skills in demand. Using Power BI, the project visualized key insights from the data, helping job seekers understand the skills they need to acquire for their desired roles. Technologies used: Power BI, DAX, LinkedIn API.`,
		github: 'https://github.com/yourusername/linkedin-job-data-analysis',
		deployment: 'https://linkedin-job-analysis-demo.example.com',
		backgroundImage: `url(${linkedinJobAnalysis})`
	}
];

const Projects = () => {
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	return (
		<div className="projects-wrapper">
			<h1 className="projects-title">PROJECTS</h1>
			<div className="container">
				{projectDetails.map((proj, idx) => (
					<div
						className="box"
						key={idx}
						style={{
							position: 'relative',
							overflow: 'hidden',
							background: '#222' // fallback for lower part
						}}
					>
						{/* Top background image section */}
						<div
							className="project-bg"
							style={{
								position: 'absolute',
								top: '0px', // Lower from the top as requested
								left: 0,
								right: 0,
								height: '200px', // Adjust as needed
								backgroundImage: proj.backgroundImage,
								backgroundSize: 'cover',
								backgroundPosition: 'center',
								zIndex: 0,
								pointerEvents: 'none'
							}}
						/>
						{/* Optional overlay for readability */}
						<div
							style={{
								position: 'absolute',
								top: 'max',
								left: 0,
								right: 0,
								height: '110px', // Same as above
								background: 'rgba(0,0,0,0.45)',
								zIndex: 1
							}}
						/>
						<span></span>
						<div className="content" style={{ position: 'relative', zIndex: 2 }}>
							<small>{proj.date}</small>
							<h2>{proj.title}</h2>
							<p style={{ marginRight: '1em' }}>
								<strong>{proj.type}</strong>
								<br />
								<hr />
								{proj.short}
							</p>
							<div style={{ display: 'flex', alignItems: 'center', gap: '0.7em' }}>
								<a href="#" onClick={e => { e.preventDefault(); setOpenIndex(idx); }}>Show More</a>
								<a
									href={proj.github || '#'}
									target="_blank"
									rel="noopener noreferrer"
									style={{ display: 'flex', alignItems: 'center', gap: '0.3em', color: '#fff', textDecoration: 'none', fontWeight: 500 }}
								>
									<svg height="20" width="20" viewBox="0 0 16 16" fill="currentColor" style={{ verticalAlign: 'middle' }}>
										<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.65 7.65 0 0 1 2-.27c.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
									</svg>
									Github
								</a>
								<a
									href={proj.deployment || '#'}
									target="_blank"
									rel="noopener noreferrer"
									style={{ display: 'flex', alignItems: 'center', gap: '0.3em', color: '#fff', textDecoration: 'none', fontWeight: 500 }}
								>
									<svg height="20" width="20" viewBox="0 0 24 24" fill="currentColor" style={{ verticalAlign: 'middle' }}>
										<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-2.83.48-5.48-.3-7.5-2.02l1.43-1.43c1.37 1.1 3.12 1.7 5.07 1.41 2.01-.3 3.68-1.97 3.98-3.98.29-1.95-.31-3.7-1.41-5.07l1.43-1.43c1.72 2.02 2.5 4.67 2.02 7.5-.44 2.6-2.34 4.5-4.94 4.94zM12 4c4.41 0 8 3.59 8 8 0 1.85-.63 3.55-1.69 4.9l-1.43-1.43c.7-.99 1.12-2.21 1.12-3.47 0-3.31-2.69-6-6-6-1.26 0-2.48.42-3.47 1.12l-1.43-1.43C8.45 4.63 10.15 4 12 4z"/>
									</svg>
									Deployment
								</a>
							</div>
						</div>
						{/* Bottom overlay for rest of the card */}
						<div
							style={{
								position: 'absolute',
								top: '110px', // Same as above
								left: 0,
								right: 0,
								bottom: 0,
								background: 'rgba(0,0,0,0.85)',
								zIndex: 1
							}}
						/>
					</div>
				))}
			</div>
			{openIndex !== null && (
				<div className="project-modal-overlay" onClick={() => setOpenIndex(null)}>
					<div className="project-modal" onClick={e => e.stopPropagation()}>
						<button className="close-btn" onClick={() => setOpenIndex(null)}>&times;</button>
						<h2>{projectDetails[openIndex].title}</h2>
						<small>{projectDetails[openIndex].date}</small>
						<p style={{ marginTop: '1em' }}>{projectDetails[openIndex].long}</p>
					</div>
				</div>
			)}
		</div>
	);
};

export default Projects;
