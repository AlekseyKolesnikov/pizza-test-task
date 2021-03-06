import React from 'react';
import AddButton from './AddButton';
import { formatPrice, curStr } from '../utils';

const Item = ({item, currency, qnt, showDetails}) => {
	const price = (currency ? formatPrice(item.usd) : formatPrice(item.price))

    return (
        <a className="border bg-white m-3 d-flex flex-column align-items-center text-dark text-decoration-none pizza-item"
            href={`pizza/${item.id}`} onClick={event => {event.preventDefault(); showDetails(item.id)}}>
            <img src={`img/${item.img}`} width="240" height="240" alt={item.name} className="m-3"/>

            <h5>{item.name}</h5>

            <div className="d-flex justify-content-between align-items-center px-3 w-100">
                <strong className="text-primary">{price} <i className={`fa fa-${curStr(currency)}`} aria-hidden="true"></i></strong>
                <AddButton item={item} qnt={qnt} />
            </div>
        </a>
    );
}

export default Item;
