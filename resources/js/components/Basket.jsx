import React from 'react';
import BasketItem from './BasketItem';
import ProceedOrder from './ProceedOrder';

const Basket = ({items, currency, price, basket, addToBasket, removeFromBasket, showDetails, zones}) => {
    return (
        <div className="container mt-5 py-5 pr-4 pr-sm-5 d-flex flex-column bg-greeny shadow-sm">
            <ProceedOrder price={price} currency={currency} zones={zones}/>

            {basket.map(basketItem => {
                const item = items.find(el => el.id == basketItem.id);
                return <BasketItem key={item.id} item={item} currency={currency} qnt={basketItem.qnt}
                    addToBasket={addToBasket} removeFromBasket={removeFromBasket} showDetails={showDetails}/>;
            })}
        </div>
    );
}

export default Basket;
