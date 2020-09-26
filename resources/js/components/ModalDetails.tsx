import React, { useEffect, useState } from 'react';
import * as Types from '../types';
import AddButton from './AddButton';
import { formatPrice, getDesc, curStr } from '../utils';

interface IModalDetailsProps {
    id: number;
	items: Array<Types.IItem>;
	basket: Array<Types.IBasketItem>;
	currency: boolean;
	// eslint-disable-next-line no-unused-vars
	closeModal: (event: React.MouseEvent) => void;
}

const ModalDetails = ({id, items, basket, currency, closeModal}: IModalDetailsProps) => {
    const item = items.find(el => el.id == id);
    if (item === undefined) return null;

    const currencyStr = curStr(currency);
    const price = currency ? formatPrice(item!.usd) : formatPrice(item!.price);
    const basketItem = basket.find(el => el.id == item!.id);

    const [desc, setDesc] = useState('Loading description...');

    useEffect(() => {
        getDesc(id)
            .then(res => {
                setDesc(res.toString());
            })
            .catch(error => {
                console.error(error);
            });
    }, [id]);

    return (
        <div className="modal fade show" tabIndex={-1} role="dialog" aria-labelledby="details" aria-hidden="true" onClick={closeModal}>
            <div className="modal-dialog modal-dialog-centered modal-lg">
                <div className="modal-content shadow">
                    <div className="modal-header">
                        <h5 className="modal-title" id="details">{item!.name}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={closeModal}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body d-flex flex-wrap flex-sm-nowrap">
                        <img src={`img/${item!.img}`} width="340" height="340" alt={item!.name} className="w-340"/>
                        <div className="m-3">{desc}</div>
                    </div>
                    <div className="modal-footer justify-content-between">
                        <strong className="text-primary">{price} <i className={`fa fa-${currencyStr}`} aria-hidden="true"></i></strong>
                        <AddButton item={item!} qnt={basketItem ? basketItem.qnt : 0} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalDetails;
