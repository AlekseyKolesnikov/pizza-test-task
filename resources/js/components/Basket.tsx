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
    proceedOrder: Types.IFuncStringReturnVoid;
}

const Basket = ({items, currency, price, basket, showDetails, zones, proceedOrder}: IBasketProps) => {
    return (
        <div className="container mt-5 py-5 pr-4 pr-sm-5 d-flex flex-column bg-center-panel shadow-sm">
            <ProceedOrder price={price} currency={currency} zones={zones} proceedOrder={proceedOrder}/>

            {basket.map(basketItem => {
                if (basketItem.qnt) {
                    const item = items.find(el => el.id == basketItem.id);
                    if (item) return <BasketItem key={item.id} item={item} currency={currency} qnt={basketItem.qnt} showDetails={showDetails}/>;
                }
            })}
        </div>
    );
}

export default Basket;
