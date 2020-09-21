import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Cart from './../components/Cart';
import CartItem from './../components/CartItem';
import CartResult from './../components/CartResult';
import * as Message from './../constants/Message';
import { connect } from 'react-redux';
import {actDeleteProductInCart} from './../actions/index';
import {actChangeMessage} from './../actions/index';
import {actAddToCart, actMinusToCart} from './../actions/index';

class CartContainer extends Component {
	render() {
        var {cart} = this.props;
	    return (
	    	<Cart>
                {this.showCartItem(cart)}
                {this.showTotalAmount(cart)}
            </Cart>
	    );
	}
    showCartItem(cart){
        var result = null;
        if(cart.length > 0){
            result = cart.map((item, index)=>{
                return <CartItem
                            key={index}
                            item={item}
                            onDeleteProductInCart={this.props.onDeleteProductInCart}
                            onChangeMessage={this.props.onChangeMessage}
                            onAddToCart={this.props.onAddToCart}
                            onMinusToCart={this.props.onMinusToCart}
                        />
                        
            })
        }
        return result;
    }
    showTotalAmount(cart){
        var result = 0;
        if(cart.length > 0){
            result = <CartResult cart={cart} />
        }
        return result;
    }

}
CartContainer.propTypes = {
    cart : PropTypes.arrayOf(PropTypes.shape({
        product : PropTypes.shape({
            id : PropTypes.number.isRequired,
            name : PropTypes.string.isRequired,
            image : PropTypes.string.isRequired,
            description : PropTypes.string.isRequired,
            price : PropTypes.number.isRequired,
            inventory : PropTypes.number.isRequired,
            rating : PropTypes.number.isRequired,
        }).isRequired,
        quantity : PropTypes.number.isRequired
    })).isRequired

}
const mapStateToProps = (state) =>{
    return{
        cart : state.cart
    }
}
const mapDispatchToProps = (dispatch, props)=>{
    return{
        onDeleteProductInCart : (product)=>{
            dispatch(actDeleteProductInCart(product))
        },
        onChangeMessage : (message)=>{
            dispatch(actChangeMessage(message))
        },
        onAddToCart : (product) =>{
            dispatch(actAddToCart(product, 1))
        },
        onMinusToCart : (product)=>{
            dispatch(actMinusToCart(product, -1))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);