import React from 'react';
import AddButton from './AddButton';
import { formatPrice } from '../utils';

class ModalDetails extends React.Component {
    constructor (props) {
        super(props);
        this.item = props.items.find(el => el.id == props.id);

        this.curStr = (props.currency ? 'dollar' : 'euro')
        this.price = (props.currency ? formatPrice(this.item.usd) : formatPrice(this.item.price))

        this.state = {
            desc: 'Loading description...',
        };
    }

    componentDidMount() {
        axios
            .get(`api/desc/${this.props.id}`, {withCredentials: true})
            .then(res => {
                this.setState({desc: res.data.desc});
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        const basketItem = this.props.basket.find(el => el.id == this.item.id);

        return (
            <div className="modal fade show" tabIndex="-1" role="dialog" aria-labelledby="details" aria-hidden="true" onClick={this.props.closeModal}>
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content shadow">
                        <div className="modal-header">
                            <h5 className="modal-title" id="details">{this.item.name}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.props.closeModal}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body d-flex flex-wrap flex-sm-nowrap">
                            <img src={`img/${this.item.img}`} width="340" height="340" alt={this.item.name} className="w-340"/>
                            <div className="m-3">{this.state.desc}</div>
                        </div>
                        <div className="modal-footer justify-content-between">
                            <strong className="text-primary">{this.price} <i className={`fa fa-${this.curStr}`} aria-hidden="true"></i></strong>
                            <AddButton item={this.item} qnt={basketItem ? basketItem.qnt : 0}
                                addToBasket={this.props.addToBasket} removeFromBasket={this.props.removeFromBasket} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ModalDetails;
