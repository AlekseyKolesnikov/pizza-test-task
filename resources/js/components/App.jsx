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
				<ItemList items={this.props.items} currency={this.state.currency} addToBasket={this.addToBasket}/>
			</>
		);
	}
}

const app = document.getElementById('app');
if (app) {
	ReactDOM.render(<App items={JSON.parse(app.dataset.items)}/>, app);
}
