import React from "react";
import { connect } from "react-redux";

// import CustomButton from "../custom-button/custom-button.component";
import { addItem } from "../../redux/cart/cart.actions";

import "./collection-item.styles.scss";

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    // <div className="collection-item">
    //   <div
    //     className="image"
    //     style={{
    //       backgroundImage: `url(${imageUrl})`
    //     }}
    //   />
    //   <div className="collection-footer">
    //     <span className="name">{name}</span>
    //     <span className="price">{price}</span>
    //   </div>
    //   <CustomButton onClick={() => addItem(item)} inverted>
    //     Add to cart
    //   </CustomButton>
    // </div>

    <div className="custom-col-5 custom-col-style mb-95">
      <div className="product-wrapper">
        <div className="product-img-2">
          <img className="image" src={imageUrl} alt="" />

          <div className="product-action-2">
            <button
              className="animate-left add-style-2"
              title="Add To Cart"
              onClick={() => addItem(item)}
            >
              Add to Cart <i className="fa fa-shopping-cart"></i>
            </button>
          </div>
        </div>
        <div className="product-content-2 text-center">
          <h4>
            <p>{name}</p>
          </h4>
          <span>{price}</span>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
