import React from 'react';
import Item from './Item';

const ItemList = ({items, currency, basket, addToBasket, removeFromBasket}) => {
    return (
        <div className="container mt-5 py-5 d-flex flex-wrap justify-content-around bg-greeny shadow-sm">
            {items.map(item => {
                const basketItem = basket.find(el => el.id == item.id);
                return <Item item={item} currency={currency} qnt={basketItem ? basketItem.qnt : 0} addToBasket={addToBasket} removeFromBasket={removeFromBasket} key={item.id}/>;
            })}
        </div>
    );
}

export default ItemList;
