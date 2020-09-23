import React from 'react';
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

interface IAppState {
	showDetailsInfo: number;
	message: string;
	messageClosedCallback: Function;
}

class App extends React.Component<IAppProps, IAppState> {
	constructor (props: IAppProps) {
		super(props);

		this.state = {
			showDetailsInfo: 0,
			message: '',
			messageClosedCallback: () => {},
		};

		this.showDetails = this.showDetails.bind(this);
		this.closeModal = this.closeModal.bind(this);
		this.showMessage = this.showMessage.bind(this);
		this.closeMessage = this.closeMessage.bind(this);
	}

	showDetails(id: number) {
		this.setState({showDetailsInfo: id});
	}

	closeModal() {
		this.setState({showDetailsInfo: 0});
	}

	showMessage(message: string, messageClosedCallback: Function) {
		this.setState({message, messageClosedCallback});
	}

	closeMessage() {
		if (this.state.messageClosedCallback) this.state.messageClosedCallback();
		this.setState({message: '', messageClosedCallback: () => {}});
	}

	render() {
		// if (!this.props.currency || this.props.basket) return null;
		const currency = this.props.currency!;
		const basket = this.props.basket!;

		let price = 0, qnt = 0;

		basket.forEach(basketItem => {
			const item = this.props.items.find(el => el.id == basketItem.id) as Types.IItem;
			price += (currency ? item.usd : item.price) * basketItem.qnt;
			qnt += basketItem.qnt;
		});

		return (
			<BrowserRouter basename={this.props.root}>
				<NavBar price={price} number={qnt} curStr={curStr(currency)}/>
				<Switch>
					<Route path="/" component={() =>
						<ItemList items={this.props.items} currency={currency} showDetails={this.showDetails} basket={basket}/>
					} exact />
					<Route path="/basket" component={() =>
						<Basket items={this.props.items} currency={currency} basket={basket} price={price} zones={this.props.zones}
							showDetails={this.showDetails} showMessage={this.showMessage}/>
					} exact />
				</Switch>

				{this.state.showDetailsInfo
					? <ModalDetails id={this.state.showDetailsInfo} items={this.props.items} basket={basket} currency={currency}
						closeModal={this.closeModal}/>
					: null}

				{this.state.message
					? <MessageBox message={this.state.message} title="Information" closeModal={this.closeMessage}/>
					: null}
			</BrowserRouter>
		);
	}
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
