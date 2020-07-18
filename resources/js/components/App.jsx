import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './NavBar';
import ItemList from './ItemList';

class App extends React.Component {
	constructor (props) {
		super(props);

		this.state = {
			currency: false,
			basket: [],
		};

		this.switchCurrency = this.switchCurrency.bind(this);
		this.addToBasket = this.addToBasket.bind(this);
		this.removeFromBasket = this.removeFromBasket.bind(this);
	}

	switchCurrency() {
		this.setState(state => ({currency: !state.currency}));
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
				<ItemList items={this.props.items} currency={this.state.currency} basket={this.state.basket}
					addToBasket={this.addToBasket} removeFromBasket={this.removeFromBasket}/>
			</>
		);
	}
}

const app = document.getElementById('app');
if (app) {
	ReactDOM.render(<App items={JSON.parse(app.dataset.items)}/>, app);
}
