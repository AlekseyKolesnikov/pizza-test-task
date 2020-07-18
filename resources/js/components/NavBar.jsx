import React from 'react';
import { formatPrice } from '../utils';

const NavBar = ({price, number, currency, switchCurrency}) => {
	const curStr = (currency ? 'dollar' : 'euro')
	return (
		<nav className="navbar fixed-top navbar-expand-lg navbar-light bg-aqua shadow-sm border-bottom">
			<a className="navbar-brand" href="/">
				<img src="img/logo.png" width="40" height="40" alt="Pizzas"/>
			</a>

			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<div className="navbar-nav mr-auto">
					<div className="nav-item active">
						<a className="nav-link" href="/"><h5 className="mt-1 mb-0">PiZZaS</h5></a>
					</div>
				</div>
				<div className="navbar-nav">
					<div className="nav-item">
						<button className="btn btn-outline-primary mr-3" aria-label={curStr} title="Switch Currency" onClick={switchCurrency}>
							<strong>{formatPrice(price)}</strong> <i className={`fa fa-${curStr}`} aria-hidden="true"></i>
						</button>
					</div>
					<div className="nav-item">
						<button className="btn btn-outline-primary" aria-label="shopping cart" title="Shopping Cart">
							<i className="fa fa-shopping-cart" aria-hidden="true"></i>
							{
								number
								? <span className="ml-2 rounded border border-primary pl-1 pr-1">{number}</span>
								: null
							}
						</button>
					</div>
				</div>
			</div>
		</nav>
	);
}

export default NavBar;
