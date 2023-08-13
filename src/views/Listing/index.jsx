import React from "react";
import Products from "./products.json";
import { Col, Row } from "reactstrap";
import "./styles.scss"

const Listing = () => {
  let phones = Products.phones;
  return (
    <>
      <Row className="list-wrapper">
        {phones.map((product) => (
          <Col xs={12} className="product">
            <Row>
              <Col md={3}>
                <img src={product.img} className="product-img" alt="" width={160} />
              </Col>
              <Col md={6}>
                <h3 className="product-brand">
                  {product.brand} {product.model}
                </h3>
                <p className="mb-0 product-desc">{product.storage}</p>
                <p className="mb-0 product-desc">{product.display}</p>
                <p className="mb-0 product-desc">{product.camera}</p>
                <p className="mb-0 product-desc">{product.warranty}</p>
              </Col>
              <Col md={3}>
                <h2 className="product-price">{product.price}</h2>
              </Col>
            </Row>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Listing;
