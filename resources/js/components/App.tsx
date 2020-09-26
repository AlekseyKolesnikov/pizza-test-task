import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import * as Types from '../types';
import { curStr } from '../utils';
import NavBar from './NavBar';
import ItemList from './ItemList';
import Basket from './Basket';
import ModalDetails from './ModalDetails';
import MessageBox from './MessageBox';

interface IAppProps {
	items: Array<Types.IItem>;
	zones: Types.IZones;
	root: string;
	currency?: boolean;
	basket?: Array<Types.IBasketItem>;
}

const App = ({items, zones, root, currency, basket}: IAppProps) => {
	const [showDetailsInfo, setShowDetailsInfo] = useState(0);
	const [message, setMessage] = useState('');
	const [messageClosedCallback, setMessageClosedCallback] = useState((() => {}) as Function);

	const showDetails = (id: number) => {
		setShowDetailsInfo(id);
	}

	const closeModal = () => {
		setShowDetailsInfo(0);
	}

	const showMessage = (msg: string, msgClosedCallback: Function) => {
		setMessage(msg);
		setMessageClosedCallback(msgClosedCallback);
	}

	const closeMessage = () => {
		if (messageClosedCallback) messageClosedCallback();
		setMessage('');
		setMessageClosedCallback(() => {});
	}
	
	if (currency === undefined) return null;
	if (basket === undefined) return null;

	let price = 0, qnt = 0;
	
	basket.forEach(basketItem => {
		const item = items.find(el => el.id == basketItem.id) as Types.IItem;
		price += (currency ? item.usd : item.price) * basketItem.qnt;
		qnt += basketItem.qnt;
	});

	return (
		<BrowserRouter basename={root}>
			<NavBar price={price} number={qnt} curStr={curStr(currency)}/>

			<Switch>
				<Route path="/" component={() =>
					<ItemList items={items} currency={currency} showDetails={showDetails} basket={basket}/>
				} exact />
				<Route path="/basket" component={() =>
					<Basket items={items} currency={currency} basket={basket} price={price} zones={zones}
						showDetails={showDetails} showMessage={showMessage}/>
				} exact />
			</Switch>

			{showDetailsInfo
				? <ModalDetails id={showDetailsInfo} items={items} basket={basket} currency={currency}
					closeModal={closeModal}/>
				: null}

			{message
				? <MessageBox message={message} title="Information" closeModal={closeMessage}/>
				: null}
		</BrowserRouter>
	);
}

interface IStateProps {
	currency: boolean;
	basket: Array<Types.IBasketItem>;
}

const mapStateToProps = (state: IStateProps) => {
	return {
		basket: state.basket,
		currency: state.currency,
	}
};

export default connect(mapStateToProps, null)(App);
