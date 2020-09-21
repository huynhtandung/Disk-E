import React, { Component } from 'react';
import { connect } from 'react-redux';

class CartResult extends Component {
    onCartResult = () =>{
        var result = 0;
        var {carts} = this.props;
        carts.forEach((cart, index)=>{
            result = result + cart.price * cart.quantity;
        })
        return result;
    }

	render() {
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
                        <strong>{this.onCartResult()}</strong>
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
}
const mapStateToProps = (state) =>{
    return{
        carts : state.carts
    }
}
export default connect(mapStateToProps, null)(CartResult);