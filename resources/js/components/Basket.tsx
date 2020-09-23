import React from 'react';
import * as Types from '../types';
import BasketItem from './BasketItem';
import ProceedOrder from './ProceedOrder';

interface IBasketProps {
	items: Array<Types.IItem>;
    currency: boolean;
    price: number;
	basket: Array<Types.IBasketItem>;
    showDetails: Types.IFuncNumberReturnVoid;
	zones: Types.IZones;
    showMessage: Types.IFuncStringFuncReturnVoid;
}

const Basket = ({items, currency, price, basket, showDetails, zones, showMessage}: IBasketProps) => {
    return (
        <div className="container mt-5 py-5 pr-4 pr-sm-5 d-flex flex-column bg-center-panel shadow-sm">
            <ProceedOrder price={price} currency={currency} zones={zones} showMessage={showMessage}/>

            {basket.map(basketItem => {
                if (basketItem.qnt < 1) return null;
                const item = items.find(el => el.id == basketItem.id);
                if (item) return <BasketItem key={item.id} item={item} currency={currency} qnt={basketItem.qnt} showDetails={showDetails}/>;
            })}
        </div>
    );
}

export default Basket;
