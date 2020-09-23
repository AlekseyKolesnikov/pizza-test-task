import React from 'react';
import * as Types from '../types';
import AddButton from './AddButton';
import { formatPrice, getDesc, curStr } from '../utils';

interface IModalDetailsProps {
    id: number;
	items: Array<Types.IItem>;
	basket: Array<Types.IBasketItem>;
	currency: boolean;
	closeModal: Function;
}

interface IModalDetailsState {
	desc: string;
}

class ModalDetails extends React.Component<IModalDetailsProps, IModalDetailsState> {
    item: Types.IItem | undefined;
    curStr = '';
    price = '';

    constructor (props: IModalDetailsProps) {
        super(props);
        this.item = props.items.find(el => el.id == props.id);

        this.curStr = curStr(props.currency);
        if (this.item) this.price = (props.currency ? formatPrice(this.item.usd) : formatPrice(this.item.price));

        this.state = {
            desc: 'Loading description...',
        };
    }

    componentDidMount() {
        getDesc(this.props.id)
            .then(res => {
                this.setState({desc: res.toString()});
            })
            .catch(error => {
                console.error(error);
            });
    }

    render() {
        if (!this.item === undefined) return null;

        const basketItem = this.props.basket.find(el => el.id == this.item!.id);

        return (
            <div className="modal fade show" tabIndex={-1} role="dialog" aria-labelledby="details" aria-hidden="true" onClick={() => this.props.closeModal()}>
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content shadow">
                        <div className="modal-header">
                            <h5 className="modal-title" id="details">{this.item!.name}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => this.props.closeModal()}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body d-flex flex-wrap flex-sm-nowrap">
                            <img src={`img/${this.item!.img}`} width="340" height="340" alt={this.item!.name} className="w-340"/>
                            <div className="m-3">{this.state.desc}</div>
                        </div>
                        <div className="modal-footer justify-content-between">
                            <strong className="text-primary">{this.price} <i className={`fa fa-${this.curStr}`} aria-hidden="true"></i></strong>
                            <AddButton item={this.item!} qnt={basketItem ? basketItem.qnt : 0} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ModalDetails;
