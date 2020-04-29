import React from "react";

import CollectionItem from "../collection-item/collection-item.component";

import "./collection-preview.styles.scss";

const CollectionPreview = ({ title, items }) => (
  // <div className="collection-preview">
  //   <h1 className="title">{title.toUpperCase()}</h1>
  //   <div className="preview">
  //     {items
  //       .filter((item, idx) => idx < 4)
  //       .map(item => (
  //         <CollectionItem key={item.id} item={item} />
  //       ))}
  //   </div>
  // </div>

  <div className="best-product-area">
    <div className="pl-100 pr-100">
      <div className="container-fluid">
        <div className="section-title-3 text-center mb-40">
          <h2>{title.toUpperCase()}</h2>
        </div>
        <div className="best-product-style">
          <div className="tab-content">
            <div
              className="tab-pane active show fade"
              id="home6"
              role="tabpanel"
            >
              <div className="custom-row">
                {items
                  .filter((item, idx) => idx < 4)
                  .map((item) => (
                    <CollectionItem key={item.id} item={item} />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default CollectionPreview;
