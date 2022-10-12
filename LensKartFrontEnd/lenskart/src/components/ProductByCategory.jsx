import React, { useState, useEffect } from "react";
import GetAllProducts from "../components/GetAllProducts";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useParams } from "react-router";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";
import Card from "react-bootstrap/Card";

function ProductByCategory() {
  const [data, setdata] = useState([]);
  let d;
  useEffect(() => {
    GetAllProducts.getAllProducts().then((value) => {
      setdata(value);
      d = value;
      console.log("dygwewfiuhhfoiqhofioehfoiehfiwe ", value);
    });
  }, []);
  const proCat = useParams().cat.replace("%", " ");

  const cardItem = (item) => {
    return (
        <Card className="my-5 py-4" style={{ width: "32rem" }}>
        <div>
          <Card.Img
            src={item.productImg}
            variant="top"
            style={{ width: "30rem", height: "32rem" }}
            className="justify-content-center"
          />
        </div>
        <Card.Body className="text-center my-5">
          <Card.Text><h4>Product category: {item.category}</h4></Card.Text>
          
           {item.category=="frame" &&
          <>
           <Card.Text><h4>Brand Name: {item.frame.brandName}</h4></Card.Text>
           <Card.Text>Color: {item.frame.color}</Card.Text>
           <Card.Text><h4>Price: ₹{item.frame.price}</h4></Card.Text>
           <Card.Text>Description: {item.frame.description}</Card.Text>
           <Card.Text>Size: {item.frame.size[0]}</Card.Text>
           <Card.Text>Shape: {item.frame.shape[0]}</Card.Text>
           </>
           }
           {item.category=="glass" &&
          <>
           <Card.Text><h4>Brand Name: {item.glass.brandName}</h4></Card.Text>
           <Card.Text>PowerRange: {item.glass.powerRange[0]}</Card.Text>
           <Card.Text><h4>Price: ₹{item.glass.price}</h4></Card.Text>
           <Card.Text>Type: {item.glass.type[0]}</Card.Text>
           </>
           }
           {item.category=="frameandglass" &&
          <>
           <Card.Text><h3>FRAME</h3></Card.Text>
           <Card.Text><h4>Brand Name: {item.frame.brandName}</h4></Card.Text>
           <Card.Text>Color: {item.frame.color}</Card.Text>
           <Card.Text><h4>Price: ₹{item.frame.price}</h4></Card.Text>
           <Card.Text>Description: {item.frame.description}</Card.Text>
           <Card.Text>Size: {item.frame.size[0]}</Card.Text>
           <Card.Text>Shape: {item.frame.shape[0]}</Card.Text>

           <Card.Text><h3>GLASS</h3></Card.Text>
           <Card.Text><h4>Brand Name: {item.glass.brandName}</h4></Card.Text>
           <Card.Text>PowerRange: {item.glass.powerRange[0]}</Card.Text>
           <Card.Text><h4>Price: ₹{item.glass.price}</h4></Card.Text>
           <Card.Text>Type: {item.glass.type[0]}</Card.Text>
           </>
           
           }
           
           {item.category=="lenses" &&
          <>
           <Card.Text><h4>Brand Name: {item.lenses.brandName}</h4></Card.Text>
           <Card.Text>Color: {item.lenses.color}</Card.Text>
           <Card.Text><h4>Price: ₹{item.lenses.price}</h4></Card.Text>
           <Card.Text>Quantity in Box: {item.lenses.qtyInBox}</Card.Text>
           <Card.Text>Shape: {item.lenses.shape}</Card.Text>
           </>
           }
           {item.category=="sunglasses" &&
          <>
           <Card.Text><h4>Brand Name: {item.sunGlasses.brandName}</h4></Card.Text>
           <Card.Text>FrameColor: {item.sunGlasses.frameColor}</Card.Text>
           <Card.Text>FrameShape: {item.sunGlasses.frameShape}</Card.Text>
           <Card.Text>GlassColor: {item.sunGlasses.glassColor}</Card.Text>
           <Card.Text><h4>Price: ₹{item.sunGlasses.price}</h4></Card.Text>
           <Card.Text>Weight: ₹{item.sunGlasses.weight}</Card.Text>
           </>
           }
          {item.stockQuantity <= 0 && (
            <h4 className="f-bolder" style={{ color: "red" }}>
              SORRY OUT OF STOCK !
            </h4>
          )}

          {item.stockQuantity > 0 && (
            <NavLink
              to={"/product/" + item.productId}
              className="btn btn-outline-primary ms-2 fa fa-shopping-cart"
            >
              {"    "}
              Buy Now
            </NavLink>
          )}
          {item.stockQuantity <= 0 && (
            <NavLink
              to={"/product/" + item.productId}
              className="btn btn-outline-primary ms-2 fa fa-shopping-cart"
            >
              {"    "}
              Pre Book This Item
            </NavLink>
          )}
        </Card.Body>
      </Card>
    );
  };

  return (
    <div>
      <Container className="py-5">
        <Row>
          <Col className="text-center">
            <h1>{proCat.toUpperCase()}</h1>
            <hr />
          </Col>
        </Row>
      </Container>
      <Container id="products_all">
        <Row className="justify-content-around">
          {/* using React.childer to Arrya to set key automatically for the items of list */}
          {React.Children.toArray(
            data.filter((x) => x.category == proCat).map(cardItem)
          )}
        </Row>
      </Container>
    </div>
  );
}
export default ProductByCategory;