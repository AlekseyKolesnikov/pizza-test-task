import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { switchZoneAction, changeAddressAction, changeNameAction, changePhoneAction } from '../actions/orderActions';
import { formatPrice, curStr } from '../utils';

const ProceedOrder = ({currency, price, zones, order, switchZoneAction, changeAddressAction, changeNameAction, changePhoneAction}) => {
    const zoneIdx = (currency ? 'zones_usd' : 'zones');
    const total = price + zones[zoneIdx][order.zone];

    return (
        <form className="border bg-top-panel mx-1 my-2 m-sm-3 d-flex w-100">
            <div className="w-75 m-4">
                <div className="input-group mb-3">
                    <input type="text" placeholder="Name" aria-label="Name" className="form-control"
                        value={order.name} onChange={e => changeNameAction(e.target.value)}/>
                    <input type="tel" placeholder="Phone" aria-label="Phone" className="form-control"
                        value={order.phone} onChange={e => changePhoneAction(e.target.value)}/>
                </div>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <label className="input-group-text" htmlFor="zone">Delivery</label>
                    </div>
                    <select className="custom-select" id="zone" value={order.zone} onChange={e => switchZoneAction(e.target.value)}>
                        <option value="0">Zone #1</option>
                        <option value="1">Zone #2</option>
                        <option value="2">Zone #3</option>
                    </select>
                </div>
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Address" aria-label="Address" aria-describedby="address"
                        value={order.address} onChange={e => changeAddressAction(e.target.value)}/>
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

const mapStateToProps = (state) => {
	return {
		order: state.order,
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		switchZoneAction: bindActionCreators(switchZoneAction, dispatch),
		changeAddressAction: bindActionCreators(changeAddressAction, dispatch),
		changeNameAction: bindActionCreators(changeNameAction, dispatch),
		changePhoneAction: bindActionCreators(changePhoneAction, dispatch),
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(ProceedOrder);
