import React, { useState, useEffect } from "react";
import GetAllProducts from "../components/GetAllProducts";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useParams } from "react-router";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { addItem, delItem, allItem } from "../redux/actions/index";
import Form from "react-bootstrap/Form";

import AddItemsAxios from "./AddItemsAxios";
import DeleteItemsAxios from "./DeleteItemsAxios";

function ProductDetail() {
  const [data, setdata] = useState([]);
  const [cartBtn, setCartBtn] = useState("Add to Cart");
  const [qty, setqty] = useState(1);
  let d;

  // We need to store useDispatch in a variable
  const dispatch = useDispatch();

  useEffect(() => {
    GetAllProducts.getAllProducts().then((value) => {
      setdata(value);
      d = value;
      console.log("dygwewfiuhhfoiqhofioehfoiehfiwe ", value);
    });
  }, []);
  const proid = useParams();
  console.log("proid: ", proid.id);
  console.log("data: ", data);
  const proDetail = data.filter((x) => x.productId == proid.id);
  console.log("productDetail: ", proDetail);
  const product = proDetail[0];
  console.log(product);

  const func = () => {
    const handleCart = (product) => {
      let result;
      if (sessionStorage.getItem("token") !== "") {
        if (cartBtn === "Add to Cart") {
          AddItemsAxios.addItemsAxios(
            "http://localhost:8001/allowed/items/" +
              product.productId +
              "/" +
              qty
          ).then((value) => {
            result = value[0];
            console.log("result ", result);
            console.log("product ", product);
            dispatch(addItem(result));
            setCartBtn("Remove from Cart");
          });
        } else {
          DeleteItemsAxios.deleteItemsAxios(
            "http://localhost:8084/cart-service/cart/updateCart/deleteItem/" +
              product.productName
          );

          dispatch(delItem(product));
          setCartBtn("Add to Cart");
        }
      } else {
        alert("PLEASE LOGIN/SIGNUP TO ADD ITEMS TO CART");
      }
    };

    const funcSearch = (event) => {
      event.preventDefault();
      setqty(document.getElementById("Quantity").value);
      console.log(qty);
    };

    return (
      <div>
        <Container className="my-5 py-3">
          {
            <Row>
              <Col className="d-flex justify-content-center mx-auto product">
                <img src={product.productImg} alt={""} height="600px" />
              </Col>
              <Col className="d-flex flex-column justify-content-center">
                {(product.category == "frame"||product.category == "frameandglass" )&& (
                  <>
                    <h1>Brand Name: {product.frame.brandName}</h1>
                    <h3>Price: ₹{product.frame.price}</h3>
                    <h5>Category: {product.category.toUpperCase()}</h5>
                    <h5>Color: {product.frame.color}</h5>
                    <h5>Description: {product.frame.description}</h5>

                    <h5 className="my-3">Available Sapes :</h5>
                    <div key={`inline-radio1`} className="mb-3">
                      {product.frame.shape.filter((x) => x == "rectangle")
                        .length > 0 && (
                        <Form.Check
                          inline
                          label="Rectangle"
                          name="group1"
                          type="radio"
                          id="formBasicRadioFrameShapeRectangle"
                        />
                      )}
                      {product.frame.shape.filter((x) => x == "oval").length >
                        0 && (
                        <Form.Check
                          inline
                          label="Oval"
                          name="group1"
                          type="radio"
                          id="formBasicRadioFrameShapeOval"
                        />
                      )}
                      {product.frame.shape.filter((x) => x == "round").length >
                        0 && (
                        <Form.Check
                          inline
                          label="Round"
                          name="group1"
                          type="radio"
                          id="formBasicRadioFrameShapeRound"
                        />
                      )}
                      {product.frame.shape.filter((x) => x == "cateye").length >
                        0 && (
                        <Form.Check
                          inline
                          label="Cat Eye"
                          name="group1"
                          type="radio"
                          id="formBasicRadioFrameShapeCateye"
                        />
                      )}
                    </div>
                    <h5 className="my-3">Available Sizes :</h5>
                    <div key={`inline-radio2`} className="mb-3">
                      {product.frame.size.filter((x) => x == "large").length >
                        0 && (
                        <Form.Check
                          inline
                          label="Large"
                          name="group2"
                          type="radio"
                          id="formBasicRadioFrameSizeLarge"
                        />
                      )}
                      {product.frame.size.filter((x) => x == "medium").length >
                        0 && (
                        <Form.Check
                          inline
                          label="Medium"
                          name="group2"
                          type="radio"
                          id="formBasicRadioFrameSizeMedium"
                        />
                      )}
                      {product.frame.size.filter((x) => x == "small").length >
                        0 && (
                        <Form.Check
                          inline
                          label="Small"
                          name="group2"
                          type="radio"
                          id="formBasicRadioFrameSizeSmall"
                        />
                      )}
                    </div>
                  </>
                )}

                {(product.category == "glass"||product.category == "frameandglass" )&& (
                  <>
                    <h1>Brand Name: {product.glass.brandName}</h1>
                    <h3>Price: ₹{product.glass.price}</h3>
                    <h5>Category: {product.category.toUpperCase()}</h5>
                    

                    <h5 className="my-3">Available Power Ranges :</h5>
                    <div key={`inline-radio3`} className="mb-3">
                      {product.glass.powerRange.filter((x) => x == "+/-10")
                        .length > 0 && (
                        <Form.Check
                          inline
                          label="+/-10"
                          name="group3"
                          type="radio"
                          id="formBasicRadioGlassPowerRange+/-10"
                        />
                      )}
                      {product.glass.powerRange.filter((x) => x == "+/-8")
                        .length > 0 && (
                        <Form.Check
                          inline
                          label="+/-8"
                          name="group3"
                          type="radio"
                          id="formBasicRadioGlassPowerRange+/-8"
                        />
                      )}
                      {product.glass.powerRange.filter((x) => x == "+/-4")
                        .length > 0 && (
                        <Form.Check
                          inline
                          label="+/-4"
                          name="group3"
                          type="radio"
                          id="formBasicRadioGlassPowerRange+/-4"
                        />
                      )}
                      {product.glass.powerRange.filter((x) => x == "0")
                        .length > 0 && (
                        <Form.Check
                          inline
                          label="0"
                          name="group3"
                          type="radio"
                          id="formBasicRadioGlassPowerRange0"
                        />
                      )}
                      
                    </div>
                    <h5 className="my-3">Available types :</h5>
                    <div key={`inline-radio4`} className="mb-3">
                      {product.glass.type.filter((x) => x == "ZeroPower").length >
                        0 && (
                        <Form.Check
                          inline
                          label="Zero Power"
                          name="group4"
                          type="radio"
                          id="formBasicRadioGlassTypeZeroPower"
                        />
                      )}
                      {product.glass.type.filter((x) => x == "DigitalScreenProtection").length >
                        0 && (
                        <Form.Check
                          inline
                          label="Digital Screen Protection"
                          name="group4"
                          type="radio"
                          id="formBasicRadioGlassTypeDigitalScreenProtection"
                        />
                      )}
                      {product.glass.type.filter((x) => x == "SingleVision").length >
                        0 && (
                        <Form.Check
                          inline
                          label="Single Vision"
                          name="group4"
                          type="radio"
                          id="formBasicRadioGlassTypeSingleVision"
                        />
                      )}
                      {product.glass.type.filter((x) => x == "Bifocal").length >
                        0 && (
                        <Form.Check
                          inline
                          label="Bifocal"
                          name="group4"
                          type="radio"
                          id="formBasicRadioGlassTypeBifocal"
                        />
                      )}
                    </div>
                  </>
                )}
                {product.category == "lenses"&&
                    <>
                    <h1>Brand Name: {product.lenses.brandName}</h1>
                    <h3>Price: ₹{product.lenses.price}</h3>
                    <h5>Category: {product.category.toUpperCase()}</h5>
                    <h5>Shape: {product.lenses.shape}</h5>
                    <h5>Color: {product.lenses.color}</h5>
                    <h5>Quantity in Box: {product.lenses.qtyInBox}</h5>
                    </>
                }
                {product.category == "sunglasses"&&
                    <>
                    <h1>Brand Name: {product.sunGlasses.brandName}</h1>
                    <h3>Price: ₹{product.sunGlasses.price}</h3>
                    <h5>Category: {product.category.toUpperCase()}</h5>
                    <h5>Frame Color: {product.sunGlasses.frameColor}</h5>
                    <h5>Frame Shape: {product.sunGlasses.frameShape}</h5>
                    <h5>Glass Color: {product.sunGlasses.glassColor}</h5>
                    <h5>Weight: {product.sunGlasses.weight}</h5>
                    </>
                }

                {product.stockQuantity <= 0 && (
                  <div>
                    <h2 className="f-bolder" style={{ color: "red" }}>
                      SORRY OUT OF STOCK !
                    </h2>
                    <p className="f-bolder" style={{ color: "green" }}>
                      Pre book this item to get it as soon as it is back in
                      stock .
                    </p>
                  </div>
                )}
                <Container>
                  <Row className="d-flex">
                    <Col className="text-left d-flex">
                      {product.stockQuantity > 0 && (
                        <Form className="d-flex ">
                          <Form.Group
                            className="d-flex "
                            controlId="Quantity"
                          >
                            <Form.Label
                              className="d-flex fw-bolder"
                              style={{ fontSize: "25px" }}
                            >
                              QUANTITY :
                            </Form.Label>
                            <Form.Control
                              className="ms-5"
                              type="number"
                              defaultValue={1}
                              placeholder="Quantity"
                              style={{ width: "10rem" }}
                              onChange={funcSearch}
                            />
                          </Form.Group>
                        </Form>
                      )}
                    </Col>
                  </Row>
                </Container>

                <Button
                  onClick={() => handleCart(product)}
                  variant="outline-primary my-5"
                  className="fa fa-cart-plus"
                >
                  {"    "}
                  {cartBtn}
                </Button>
              </Col>
            </Row>
          }
        </Container>
      </div>
    );
  };

  return React.Children.toArray(data.map(func)[0]);
}
export default ProductDetail;
