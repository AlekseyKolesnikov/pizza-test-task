import React from 'react';
import Item from './Item';

const ItemList = ({items, currency, addToBasket}) => {
    return (
        <div className="container mt-5 py-5 d-flex flex-wrap justify-content-around bg-greeny shadow-sm">
            {items.map(item => {
                return <Item item={item} currency={currency} addToBasket={addToBasket} key={item.id}/>;
            })}
        </div>
    );
}

export default ItemList;
