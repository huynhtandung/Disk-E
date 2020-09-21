import React, { Component } from 'react';
//import { connect } from 'react-redux';

class CartResult extends Component {
    
	render() {
        var {cart} = this.props;
	    return (
	    	<tr>
                <td colSpan="3"></td>
                <td>
                    <h4>
                        <strong>Tổng Tiền</strong>
                    </h4>
                </td>
                <td>
                    <h4>
                        <strong>{this.showTotalAmount(cart)}</strong>
                    </h4>
                </td>
                <td colSpan="3">
                    <button type="button" className="btn btn-primary waves-effect waves-light">Complete purchase
                        <i className="fa fa-angle-right right"></i>
                    </button>
                </td>
            </tr>
	    );
	}
    showTotalAmount(cart){
        var result = 0;
        if(cart.length > 0){
            cart.map((item, index)=>{
                result = result + item.product.price * item.quantity
            })
        }
        return result;
    }
}

export default CartResult;