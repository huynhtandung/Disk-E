import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions/index';

class CartItem extends Component {
    onAddToCart = () =>{
        var item = {
            id : this.props.item.id,
            name : this.props.item.name,
            price: this.props.item.price,
            quantity: 1
        }
        this.props.onAddToCart(item);
    }
    onMinusToCart = () =>{
        this.props.onMinusToCart(this.props.item.id);
    }
    onRemoveToCart = () =>{
        this.props.onRemoveToCart(this.props.item);
    }
	render() {
	    return (
	    	<tr>
                <th scope="row">
                    <img src=""
                        alt="" className="img-fluid z-depth-0" />
                </th>
                <td>
                    <h5>
                        <strong>{this.props.item.name}</strong>
                    </h5>
                </td>
                <td>{this.props.item.price}</td>
                <td className="center-on-small-only">
                    <span className="qty">{this.props.item.quantity}</span>
                    <div className="btn-group radio-group" data-toggle="buttons">
                        <label className="btn btn-sm btn-primary
                            btn-rounded waves-effect waves-light"
                            onClick={this.onMinusToCart}
                        >
                            <a>—</a>
                        </label>
                        <label className="btn btn-sm btn-primary
                            btn-rounded waves-effect waves-light"
                            onClick={this.onAddToCart}
                        >
                            <a>+</a>
                        </label>
                    </div>
                </td>
                <td>{this.props.item.price * this.props.item.quantity}</td>
                <td>
                    <button type="button" className="btn btn-sm btn-primary waves-effect waves-light" data-toggle="tooltip" data-placement="top"
                        title="" data-original-title="Remove item"
                        onClick={this.onRemoveToCart}
                    >
                        X
                    </button>
                </td>
            </tr>
	    );
	}
}
const mapDispatchToProps = (dispatch, props) =>{
    return{
        onAddToCart : (item) =>{
            dispatch(actions.addToCart(item))
        },
        onMinusToCart : (id) =>{
            dispatch(actions.minusToCart(id))
        },
        onRemoveToCart : (item) =>{
            dispatch(actions.removeToCart(item))
        }
    }
}
export default connect(null, mapDispatchToProps)(CartItem);