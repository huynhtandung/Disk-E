import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions/index';
import * as message from './../constants/Message';

class Product extends Component {

    style = () => {
        return {
            height: 340,
        };
    }
    onAddToCart = () =>{
        var products = JSON.parse(localStorage.getItem('products'));
        var check = 0;
 
        products.forEach((product, index)=>{
            if(product.id == this.props.product.id)
                if(product.inventory > 0){
                    check = 1;
                    //console.log(product.inventory);
                }
        })
        if(check == 1)
            this.props.onMessageAddToCart(message.MSG_ADD_TO_CART_SUCCESS);
        else
            this.props.onMessageAddToCart(message.OUT_OF_ORDER);

        var item = {
            id : this.props.product.id,
            name : this.props.product.name,
            price: this.props.product.price,
            quantity: 1
        }
        this.props.onAddToCart(item);
    }

	render() {
	    return (
	    	<div className="col-lg-4 col-md-6 mb-r">
                <div className="card text-center card-cascade narrower">
                    <div className="view overlay hm-white-slight z-depth-1">
                        <img src={this.props.product.image} style={this.style()}
                            className="img-fluid" alt={this.props.product.name} />
                        <a>
                            <div className="mask waves-light waves-effect waves-light"></div>
                        </a>
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">
                            <strong>
                                <a>{this.props.product.name}</a>
                            </strong>
                        </h4>
                        <ul className="rating">
                            <li>
                                <i className="fa fa-star"></i>
                            </li>
                            <li>
                                <i className="fa fa-star"></i>
                            </li>
                            <li>
                                <i className="fa fa-star"></i>
                            </li>
                            <li>
                                <i className="fa fa-star"></i>
                            </li>
                            <li>
                                <i className="fa fa-star"></i>
                            </li>
                        </ul>
                        <p className="card-text">
                            {this.props.product.discription}
                        </p>
                        <div className="card-footer">
                            <span className="left">{this.props.product.price}</span>
                            <span className="right">
                                <a className="btn-floating blue-gradient" data-toggle="tooltip" data-placement="top" title="" data-original-title="Add to Cart"
                                    onClick={this.onAddToCart}
                                >
                                    <i className="fa fa-shopping-cart"></i>
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
	    );
	}
}

const mapDispatchToProps = (dispatch, props) =>{
    return{
        onAddToCart : (item) =>{
            dispatch(actions.addToCart(item))
        },
        onMessageAddToCart : (message) =>{
            dispatch(actions.changeMessage(message))
        }
    }
}
export default connect(null, mapDispatchToProps)(Product);