import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { curStr } from '../utils';
import NavBar from './NavBar';
import ItemList from './ItemList';
import Basket from './Basket';
import ModalDetails from './ModalDetails';

// TODO: save Redux to LocalStorage or ...

class App extends React.Component {
	constructor (props) {
		super(props);

		this.state = {
			showDetails: 0,
		};

		this.showDetails = this.showDetails.bind(this);
		this.closeModal = this.closeModal.bind(this);
	}

	showDetails(id) {
		this.setState({showDetails: id});
	}

	closeModal() {
		this.setState({showDetails: 0});
	}

	render() {
		let price = 0, qnt = 0;

		this.props.basket.forEach(basketItem => {
			const item = this.props.items.find(el => el.id == basketItem.id);
			price += (this.props.currency ? item.usd : item.price) * basketItem.qnt;
			qnt += basketItem.qnt;
		});

		return (
			<BrowserRouter basename={this.props.root}>
				<NavBar price={price} number={qnt} curStr={curStr(this.props.currency)}/>
				<Switch>
					<Route path="/" component={() =>
						<ItemList items={this.props.items} currency={this.props.currency} showDetails={this.showDetails} basket={this.props.basket}/>
					} exact />
					<Route path="/basket" component={() =>
						<Basket items={this.props.items} currency={this.props.currency} basket={this.props.basket} price={price} zones={this.props.zones}
							showDetails={this.showDetails}/>
					} exact />
				</Switch>

				{this.state.showDetails
					? <ModalDetails id={this.state.showDetails} items={this.props.items} basket={this.props.basket} currency={this.props.currency}
						closeModal={this.closeModal}/>
					: null}
			</BrowserRouter>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		basket: state.basket,
		currency: state.currency,
	}
};

export default connect(mapStateToProps, null)(App);
