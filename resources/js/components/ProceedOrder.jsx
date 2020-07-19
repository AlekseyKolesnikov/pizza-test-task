import React from 'react';
import { formatPrice } from '../utils';

class Item extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            zone: 0,
        };
        this.curStr = (props.currency ? 'dollar' : 'euro')
        this.zoneIdx = (props.currency ? 'zones_usd' : 'zones')
    }

    render() {
        const price = this.props.price + this.props.zones[this.zoneIdx][this.state.zone];
        return (
            <form className="border bg-white mx-1 my-2 m-sm-3 d-flex w-100">
                <div className="w-75 m-4">
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <label className="input-group-text" htmlFor="zone">Delivery</label>
                        </div>
                        <select className="custom-select" id="zone" value={this.state.zone} onChange={e => this.setState({zone: e.target.value})}>
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
                        <span className="d-block d-md-inline">{formatPrice(price)} <i className={`fa fa-${this.curStr}`} aria-hidden="true"></i></span>
                    </h5>
                    <button type="submit" className="btn btn-success">Proceed <span className="d-none d-md-inline">order</span></button>
                </div>
            </form>
        );
    }
}

export default Item;
