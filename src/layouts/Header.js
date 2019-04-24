import React, { Component } from 'react';

class Header extends Component {
	render() {
		return (
			<header>
				<div className='collapse bg-dark' id='navbarHeader'>
					<div className='container'>
						<div className='row'>
							<div className='col-sm-8 col-md-7 py-4'>
								<h4 className='text-white'>About</h4>
								<p className='text-muted'>
									This is a simple TODO app using only React,
									for my own educational purpouses.
								</p>
							</div>
							<div className='col-sm-4 offset-md-1 py-4'>
								<h4 className='text-white'>Contact</h4>
								<ul className='list-unstyled'>
									<li>
										<a
											href='https://twitter.com/samuel27m'
											className='text-white'
										>
											Follow me on Twitter
										</a>
									</li>
									<li>
										<a
											href='https://www.github.com/samuel27m'
											className='text-white'
										>
											Follow me on Github
										</a>
									</li>
									<li>
										<a
											href='mailto:samuel.moreira.work@gmail.com'
											className='text-white'
										>
											Email me
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className='navbar navbar-dark bg-dark shadow-sm'>
					<div className='container d-flex justify-content-between'>
						<a
							href='/'
							className='navbar-brand d-flex align-items-center'
						>
							<strong>React TODO</strong>
						</a>
						<button
							className='navbar-toggler'
							type='button'
							data-toggle='collapse'
							data-target='#navbarHeader'
							aria-controls='navbarHeader'
							aria-expanded='false'
							aria-label='Toggle navigation'
						>
							<span className='navbar-toggler-icon' />
						</button>
					</div>
				</div>
			</header>
		);
	}
}

export default Header;
