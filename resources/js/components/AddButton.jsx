import React from 'react';

const AddButton = ({item, qnt, addToBasket, removeFromBasket}) => {
    if (qnt) {
        return (
            <div className="d-flex align-items-center my-3">
                <button className="btn btn-primary"
                    onClick={e => {e.preventDefault(); e.stopPropagation(); e.target.blur(); removeFromBasket(item)}}><i className="fa fa-minus" aria-hidden="true"></i></button>
                <span className="px-3">{qnt}</span>
                <button className="btn btn-primary"
                    onClick={e => {e.preventDefault(); e.stopPropagation(); e.target.blur(); addToBasket(item)}}><i className="fa fa-plus" aria-hidden="true"></i></button>
            </div>
        );
    } else {
        return (
            <button className="btn btn-primary my-3"
                onClick={e => {e.preventDefault(); e.stopPropagation(); e.target.blur(); addToBasket(item)}}><strong>Add to Cart</strong></button>
        );
    }
}

export default AddButton;
