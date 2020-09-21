import React, { Component } from 'react';
import * as Message from './../constants/Message';

class CartItem extends Component {
   
	render() {
        var {item} = this.props;
	    return (
	    	<tr>
                <th scope="row">
                    <img src={item.product.image}
                        alt="" className="img-fluid z-depth-0" />
                </th>
                <td>
                    <h5>
                        <strong>{item.product.name}</strong>
                    </h5>
                </td>
                <td>{item.product.price}</td>
                <td className="center-on-small-only">
                    <span className="qty">{item.quantity}</span>
                    <div className="btn-group radio-group" data-toggle="buttons">
                        <label className="btn btn-sm btn-primary
                            btn-rounded waves-effect waves-light"
                            onClick={()=>this.onMinusToCart()}
                        >
                            <a>—</a>
                        </label>
                        <label className="btn btn-sm btn-primary
                            btn-rounded waves-effect waves-light"
                            onClick={()=>this.onAddToCart()}
                        >
                            <a>+</a>
                        </label>
                    </div>
                </td>
                <td>{item.product.price * item.quantity}</td>
                <td>
                    <button type="button" className="btn btn-sm btn-primary waves-effect waves-light" data-toggle="tooltip" data-placement="top"
                        title="" data-original-title="Remove item"
                        onClick={()=>this.onDeleteProductInCart()}
                    >
                        X
                    </button>
                </td>
            </tr>
	    );
	}
    onDeleteProductInCart = ()=>{
        this.props.onDeleteProductInCart(this.props.item.product);
        this.props.onChangeMessage(Message.MSG_DELETE_PRODUCT_IN_CART_SUCCESS);
    }
    onAddToCart = ()=>{
        this.props.onAddToCart(this.props.item.product);
        this.props.onChangeMessage(Message.MSG_ADD_TO_CART_SUCCESS);
    }
    onMinusToCart = ()=>{
        this.props.onMinusToCart(this.props.item.product);
        this.props.onChangeMessage(Message.MSG_MINUS_TO_CART);
    }
}
export default CartItem;