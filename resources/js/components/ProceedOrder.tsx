import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Types from '../types';
import * as orderActions from '../actions/orderActions';
import { dispatchClearBasket } from '../actions/basketActions';
import { formatPrice, curStr } from '../utils';

interface IOrder {
    name: string;
    phone: string;
    address: string;
    zone: number;
}

interface IProceedOrderProps {
    currency: boolean;
    price: number;
	zones: Types.IZones;
	order: IOrder;
    showMessage: Types.IFuncStringFuncReturnVoid;
    changeNameAction: Types.IFuncStringReturnVoid;
    changePhoneAction: Types.IFuncStringReturnVoid;
    changeAddressAction: Types.IFuncStringReturnVoid;
    switchZoneAction: Types.IFuncNumberReturnVoid;
}

const ProceedOrder = ({currency, price, zones, order, ...methods}: IProceedOrderProps) => {
    const zoneIdx = (currency ? 'zones_usd' : 'zones');
    const total = price + zones[zoneIdx][order.zone];
    const onSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        methods.showMessage('Thank you for your order! We will contact you shortly.', dispatchClearBasket);
    }

    return (
        <form className="border bg-top-panel mx-1 my-2 m-sm-3 d-flex w-100" onSubmit={onSubmit}>
            <div className="w-75 m-4">
                <div className="input-group mb-3">
                    <input type="text" placeholder="Name" aria-label="Name" className="form-control"
                        value={order.name} onChange={event => methods.changeNameAction(event.target.value)}/>
                    <input type="tel" placeholder="Phone" aria-label="Phone" className="form-control"
                        value={order.phone} onChange={event => methods.changePhoneAction(event.target.value)}/>
                </div>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <label className="input-group-text" htmlFor="zone">Delivery</label>
                    </div>
                    <select className="custom-select" id="zone" value={order.zone} onChange={event => methods.switchZoneAction(+event.target.value)}>
                        <option value="0">Zone #1</option>
                        <option value="1">Zone #2</option>
                        <option value="2">Zone #3</option>
                    </select>
                </div>
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Address" aria-label="Address" aria-describedby="address"
                        value={order.address} onChange={event => methods.changeAddressAction(event.target.value)}/>
                </div>
            </div>

            <div className="w-25 m-4 d-flex flex-column align-items-center justify-content-between">
                <h5 className="mt-2">Total:&nbsp;
                    <span className="d-block d-md-inline">{formatPrice(total)} <i className={`fa fa-${curStr(currency)}`} aria-hidden="true"></i></span>
                </h5>
                <button type="submit" className="btn btn-success" disabled={price <= 0}>Proceed <span className="d-none d-md-inline">order</span></button>
            </div>
        </form>
    );
}

interface IStateProps {
	order: IOrder;
}

const mapStateToProps = (state: IStateProps) => {
	return {
		order: state.order,
	}
};

const mapDispatchToProps = (dispatch: any) => {
	return {
		switchZoneAction: bindActionCreators(orderActions.switchZoneAction, dispatch),
		changeAddressAction: bindActionCreators(orderActions.changeAddressAction, dispatch),
		changeNameAction: bindActionCreators(orderActions.changeNameAction, dispatch),
		changePhoneAction: bindActionCreators(orderActions.changePhoneAction, dispatch),
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(ProceedOrder);
