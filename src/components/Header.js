import React from "react";
import logo from '../logo.svg';

class Header extends React.Component {
    render() {
        return(
            <header className="header-top">
                <div className="wrapper header-top">
                    <div className="header-left"><img src={logo} className="App-logo" alt="logo" /></div>
                    <div className="header-right">
                        <button>меню</button>
                        <button>корзина</button>
                        <button>???</button>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;