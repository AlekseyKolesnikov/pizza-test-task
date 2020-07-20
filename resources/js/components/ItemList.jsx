import React from 'react';
import Item from './Item';

const ItemList = ({items, currency, basket, showDetails}) => {
    return (
        <div className="container mt-5 py-5 d-flex flex-wrap justify-content-around bg-center-panel shadow-sm">
            {items.map(item => {
                const basketItem = basket.find(el => el.id == item.id);
                return <Item key={item.id} item={item} currency={currency} qnt={basketItem ? basketItem.qnt : 0} showDetails={showDetails}/>;
            })}
        </div>
    );
}

export default ItemList;
