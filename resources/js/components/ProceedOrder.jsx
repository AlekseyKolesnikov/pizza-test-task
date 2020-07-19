import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { switchZoneAction } from '../actions/zoneActions';
import { formatPrice, curStr } from '../utils';

const ProceedOrder = ({currency, price, zones, zone, switchZoneAction}) => {
    const zoneIdx = (currency ? 'zones_usd' : 'zones');
    const total = price + zones[zoneIdx][zone];

    return (
        <form className="border bg-white mx-1 my-2 m-sm-3 d-flex w-100">
            <div className="w-75 m-4">
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <label className="input-group-text" htmlFor="zone">Delivery</label>
                    </div>
                    <select className="custom-select" id="zone" value={zone} onChange={e => switchZoneAction(e.target.value)}>
                        <option value="0">Zone #1</option>
                        <option value="1">Zone #2</option>
                        <option value="2">Zone #3</option>
                    </select>
                </div>
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Address" aria-label="Username" aria-describedby="address"/>
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
		zone: state.zone,
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		switchZoneAction: bindActionCreators(switchZoneAction, dispatch),
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(ProceedOrder);
