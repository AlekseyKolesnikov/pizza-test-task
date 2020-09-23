import React from 'react';
import * as Types from '../types';
import AddButton from './AddButton';
import { formatPrice, getDesc, curStr } from '../utils';

interface IBasketItemProps {
    key: number;
    item: Types.IItem;
    currency: boolean;
    qnt: number;
    showDetails: Types.IFuncNumberReturnVoid;
}

interface IBasketItemState {
    desc: string;
}

class BasketItem extends React.Component<IBasketItemProps, IBasketItemState> {
    curStr = '';
    price = '';

    constructor (props: IBasketItemProps) {
        super(props);

        this.state = {
            desc: 'Loading description...',
        };

        this.curStr = curStr(props.currency);
        this.price = (props.currency ? formatPrice(props.item.usd) : formatPrice(props.item.price));
    }

    componentDidMount() {
        getDesc(this.props.item.id)
            .then(res => {
                this.setState({desc: res.toString()});
            })
            .catch(error => {
                console.error(error);
            });
    }

    render() {
        const item = this.props.item;
        return (
            <a className="border bg-white mx-1 my-2 m-sm-3 d-flex text-dark text-decoration-none pizza-item w-100"
                href={`pizza/${item.id}`} onClick={event => {event.preventDefault(); this.props.showDetails(item.id)}}>
                <img src={`img/${item.img}`} width="240" height="240" alt={item.name} className="m-3 w-240"/>
    
                <div className="d-flex flex-column justify-content-between align-items-center align-items-md-stretch m-3 mt-4 mr-4 w-100">
                    <h5>{item.name}</h5>
                    <p className="d-none d-md-block truncate-overflow">
                        {this.state.desc}
                        <img src="img/hider.png" height="16"/>
                    </p>
    
                    <div className="d-flex justify-content-between align-items-center flex-column flex-md-row w-100">
                        <strong className="text-primary">{this.price} <i className={`fa fa-${this.curStr}`} aria-hidden="true"></i></strong>
                        <AddButton item={item} qnt={this.props.qnt} />
                    </div>
                </div>
            </a>
        );
    }
}

export default BasketItem;
