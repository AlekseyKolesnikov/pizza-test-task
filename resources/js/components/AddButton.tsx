import React from 'react';
import * as Types from '../types';
import * as basketActions from '../actions/basketActions';

const addToBasket = (event: React.MouseEvent, id: number) => {
    event.preventDefault();
    event.stopPropagation();
    (event.target as HTMLElement).blur();
    basketActions.dispatchAddToBasket(id);
}

const removeFromBasket = (event: React.MouseEvent, id: number) => {
    event.preventDefault();
    event.stopPropagation();
    (event.target as HTMLElement).blur();
    basketActions.dispatchRemoveFromBasket(id);
}

interface IAddButtonProps {
    item: Types.IItem;
    qnt: number;
}

const AddButton = ({item, qnt}: IAddButtonProps) => {
    if (qnt) {
        return (
            <div className="d-flex align-items-center my-3">
                <button className="btn btn-primary"
                    onClick={event => removeFromBasket(event, item.id)}><i className="fa fa-minus" aria-hidden="true"></i></button>
                <span className="px-3">{qnt}</span>
                <button className="btn btn-primary"
                    onClick={event => addToBasket(event, item.id)}><i className="fa fa-plus" aria-hidden="true"></i></button>
            </div>
        );
    } else {
        return (
            <button className="btn btn-primary my-3"
            onClick={event => addToBasket(event, item.id)}><strong>Add to Cart</strong></button>
        );
    }
}

export default AddButton;
