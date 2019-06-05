import React, {Component} from 'react';
import { Route, Link } from "react-router-dom";

const menus = [{
    name: "Home",
    to: "/",
    exact: true
},{
    name: "About",
    to: "/about",
    exact: false
},{
    name: "Contact",
    to: "/contact",
    exact: false
},{
    name: "Products",
    to: "/products",
    exact: false
},{
    name: "Login",
    to: "/login",
    exact: false
}];

const MenuLink = ({label, to, activeOnlyWhenExact}) => {
    return (
      <Route path={to} exact={activeOnlyWhenExact} 
        children={({match}) => {
          var active = match ? 'active' : '';
          return (
            <li className={active}>
              <Link to={to}>{label}</Link>
            </li>
          )
        }} 
      />
    )
  }

class Menu extends Component {
    render() {
        return (
            <nav className="navbar navbar-inverse">
                <ul className="nav navbar-nav">
                    { this.showMenu(menus) }
                </ul>
            </nav>
        );
    }

    showMenu = (menus) => {
        var result = null;
        if (menus && menus.length > 0) {
            result = menus.map((menu, index) => {
                return (
                    <MenuLink key={index} label={menu.name} to={menu.to} activeOnlyWhenExact={menu.exact} />
                )
            });
        }
        return result;
    }
}

export default Menu;