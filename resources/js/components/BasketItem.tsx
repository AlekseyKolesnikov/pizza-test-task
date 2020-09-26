import React, { useEffect, useState } from 'react';
import * as Types from '../types';
import AddButton from './AddButton';
import { formatPrice, getDesc, curStr } from '../utils';

interface IBasketItemProps {
    item: Types.IItem;
    currency: boolean;
    qnt: number;
    showDetails: Types.IFuncNumberReturnVoid;
}

const BasketItem = ({item, currency, qnt, showDetails}: IBasketItemProps) => {
    const [currencyStr, setCurrencyStr] = useState(curStr(currency));
    const [price, setPrice] = useState(currency ? formatPrice(item.usd) : formatPrice(item.price));
    const [desc, setDesc] = useState('Loading description...');

    useEffect(() => {
        getDesc(item.id)
            .then(res => {
                setDesc(res.toString());
            })
            .catch(error => {
                console.error(error);
            });
    }, [item.id]);

    useEffect(() => {
        setCurrencyStr(curStr(currency));
    }, [currency]);

    useEffect(() => {
        setPrice(currency ? formatPrice(item.usd) : formatPrice(item.price));
    }, [currency, item]);

    const showDetailsClick = (event: React.MouseEvent) => {
        event.preventDefault();
        showDetails(item.id);
    }

    return (
        <a className="border bg-white mx-1 my-2 m-sm-3 d-flex text-dark text-decoration-none pizza-item w-100"
            href={`pizza/${item.id}`} onClick={showDetailsClick}>
            <img src={`img/${item.img}`} width="240" height="240" alt={item.name} className="m-3 w-240"/>

            <div className="d-flex flex-column justify-content-between align-items-center align-items-md-stretch m-3 mt-4 mr-4 w-100">
                <h5>{item.name}</h5>
                <p className="d-none d-md-block truncate-overflow">
                    {desc}
                    <img src="img/hider.png" height="16"/>
                </p>

                <div className="d-flex justify-content-between align-items-center flex-column flex-md-row w-100">
                    <strong className="text-primary">{price} <i className={`fa fa-${currencyStr}`} aria-hidden="true"></i></strong>
                    <AddButton item={item} qnt={qnt} />
                </div>
            </div>
        </a>
    );
}

export default BasketItem;
