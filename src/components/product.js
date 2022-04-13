import React from "react";

class Product extends React.Component {
    render() {
        return(
            <div className="product-item">
                <h3 className="item-name">имя товара</h3>
                <div className="item-img">картинка товара</div>
                <p className="item-description">Описание</p>
                <p className="item-price">Цена</p>
                <button className="add-to-cart-button">Добавить в корзину</button>
            </div>
        )
    }
}

export default Product;