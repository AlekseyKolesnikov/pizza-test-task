import React from 'react';
import BasketItem from './BasketItem';

const Basket = ({items, currency, basket, addToBasket, removeFromBasket, showDetails}) => {
    return (
        <div className="container mt-5 py-5 pr-5 d-flex flex-column bg-greeny shadow-sm">
            {basket.map(basketItem => {
                const item = items.find(el => el.id == basketItem.id);
                return <BasketItem key={item.id} item={item} currency={currency} qnt={basketItem.qnt}
                    addToBasket={addToBasket} removeFromBasket={removeFromBasket} showDetails={showDetails}/>;
            })}
        </div>
    );
}

export default Basket;
