import React, {Component} from 'react';
import { NavLink, Route } from "react-router-dom";
import Product from './Product';

class Products extends Component {
    render() {
        var products = [{
            id: 1,
            name: 'iphone 7 plus',
            slug: 'iphone',
            price: 100
        },{
            id: 2,
            name: 'samsung note 8',
            slug: 'samsung',
            price: 200
        },{
            id: 3,
            name: 'oppo F1S',
            slug: 'oppo',
            price: 150
        }];

        var {match} = this.props;

        var elementPRoducts = products.map((product, index) => {
            return (
                <NavLink to={`${match.url}/${product.slug}`} key={index}>
                    <li className="list-group-item">
                        {product.id} - {product.name} - {product.price}
                    </li>
                </NavLink>
            )
        });

        console.log(this.props.location);

        return (
            <div>
                this is products page
                <h1>Danh sách sản phẩm</h1>
                <div className="row">
                    <ul className="list-group">
                        {elementPRoducts}
                    </ul>
                </div>
                
                <div className="row">
                    <Route path="/products/:slug" component={Product} />
                </div>
            </div>
        );
    }
}

export default Products;