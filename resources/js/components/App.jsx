import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import ItemList from './ItemList';
import Basket from './Basket';
import ModalDetails from './ModalDetails';

// TODO: Basket, Redux

class App extends React.Component {
	constructor (props) {
		super(props);

		this.state = {
			currency: false,
			basket: [{id: 1, qnt: 1}, {id: 5, qnt: 3}, {id: 9, qnt: 2}],
			showDetails: 0,
		};

		this.switchCurrency = this.switchCurrency.bind(this);
		this.showDetails = this.showDetails.bind(this);
		this.closeModal = this.closeModal.bind(this);
		this.addToBasket = this.addToBasket.bind(this);
		this.removeFromBasket = this.removeFromBasket.bind(this);
	}

	switchCurrency() {
		this.setState(state => ({currency: !state.currency}));
	}

	showDetails(id) {
		this.setState({showDetails: id});
	}

	closeModal() {
		this.setState({showDetails: 0});
	}

	addToBasket(item) {
		this.setState(state => {
			const basket = [...state.basket];
			let basketItem = basket.find(el => el.id == item.id);
			if (basketItem) {
				basketItem.qnt++;
			} else {
				basketItem = {id: item.id, qnt: 1};
				basket.push(basketItem);
			}
			return {basket};
		});
	}

	removeFromBasket(item) {
		this.setState(state => {
			const basket = [...state.basket];
			let basketItem = basket.find(el => el.id == item.id);
			if (basketItem) {
				basketItem.qnt--;
			}
			return {basket};
		});
	}

	render() {
		let price = 0, qnt = 0;

		this.state.basket.forEach(basketItem => {
			const item = this.props.items.find(el => el.id == basketItem.id);
			price += (this.state.currency ? item.usd : item.price) * basketItem.qnt;
			qnt += basketItem.qnt;
		});

		return (
			<>
				<NavBar price={price} number={qnt} currency={this.state.currency} switchCurrency={this.switchCurrency}/>
				<Switch>
					<Route path="/" component={() =>
						<ItemList items={this.props.items} currency={this.state.currency} basket={this.state.basket}
							addToBasket={this.addToBasket} removeFromBasket={this.removeFromBasket} showDetails={this.showDetails}/>
					} exact />
					<Route path="/basket" component={() =>
						<Basket items={this.props.items} currency={this.state.currency} basket={this.state.basket}
							addToBasket={this.addToBasket} removeFromBasket={this.removeFromBasket} showDetails={this.showDetails}/>
					} exact />
				</Switch>

				{this.state.showDetails
					? <ModalDetails id={this.state.showDetails} items={this.props.items} basket={this.state.basket} currency={this.state.currency}
						closeModal={this.closeModal} addToBasket={this.addToBasket} removeFromBasket={this.removeFromBasket}/>
					: null}
			</>
		);
	}
}

const app = document.getElementById('app');
if (app) {
	ReactDOM.render(
		<BrowserRouter basename={app.dataset.root}>
			<App items={JSON.parse(app.dataset.items)}/>
		</BrowserRouter>, app
	);
}
