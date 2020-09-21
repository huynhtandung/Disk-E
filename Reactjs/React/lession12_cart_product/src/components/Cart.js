import React, { Component } from 'react';
import CartItem from './CartItem';
import CartResult from './CartResult';
import { connect } from 'react-redux';

class Cart extends Component {
    showCarts = (carts) =>{
        var result = null;
        if(carts.length > 0){
            result = carts.map((item, index) => {
                return  <CartItem 
                            key = {index}
                            item = {item}
                        />
            });
        }
        return result;
    }

	render() {
        var {carts} = this.props;
	    return (
	    	<section className="section">
                <div className="table-responsive">
                    <table className="table product-table">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Sản Phẩm</th>
                                <th>Giá</th>
                                <th>Số Lượng</th>
                                <th>Tổng Cộng</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            { this.showCarts(carts) }
                            <CartResult />
                        </tbody>
                    </table>
                </div>
            </section>
	    );
	}
}
const mapStateToProps = (state) =>{
    return{
        carts : state.carts
    }
}
export default connect(mapStateToProps, null)(Cart);