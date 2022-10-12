import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import ReactDOM from "react-dom";
import Card from "react-bootstrap/Card";
import GetAllProducts from "../components/GetAllProducts";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import AdminAddProductAxios from "./AdminAddProductAxios";

function AdminEdit() {
  const [data, setdata] = useState([]);
  const [show, setShow] = useState(false);
  const [type, setType] = useState("frame");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let d;
  useEffect(() => {
    GetAllProducts.getAllProducts().then((value) => {
      setdata(value);
      d = value;
      console.log("d ", d);
      console.log("token :", sessionStorage.getItem("token"));
    });
  }, []);

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
           
           </>
           }
           {item.category=="glass" &&
          <>
           <Card.Text><h4>Brand Name: {item.glass.brandName}</h4></Card.Text>
           <Card.Text><h4>Price: ₹{item.glass.price}</h4></Card.Text>
           
           </>
           }
           {item.category=="frameandglass" &&
          <>
           <Card.Text><h3>FRAME</h3></Card.Text>
           <Card.Text><h4>Brand Name: {item.frame.brandName}</h4></Card.Text>
           <Card.Text>Color: {item.frame.color}</Card.Text>
           <Card.Text><h4>Price: ₹{item.frame.price}</h4></Card.Text>
           <Card.Text>Description: {item.frame.description}</Card.Text>
           

           <Card.Text><h3>GLASS</h3></Card.Text>
           <Card.Text><h4>Brand Name: {item.glass.brandName}</h4></Card.Text>
           <Card.Text><h4>Price: ₹{item.glass.price}</h4></Card.Text>
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
          <NavLink
            to={"/AdminEdit/ProductDetails/" + item.productId}
            className="btn btn-outline-primary ms-2 fa fa-pencil"
          >
            {"    "}
            Edit Product
          </NavLink>
        </Card.Body>
      </Card>
    );
  };

  

  const addProducts = (event) => {
    console.log("Add Products");
    return (
      <div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>ADD PRODUCT</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formBasicSelectCategory">
                <Form.Label>Select Category</Form.Label>
                <Form.Control
                  as="select"
                  value={type}
                  onChange={(e) => {
                    console.log("e.target.value", e.target.value);
                    setType(e.target.value);
                  }}
                >
                  <option value="frame">Frame</option>
                  <option value="glass">Glasses</option>
                  <option value="frameandglass">Frame + Glasses</option>
                  <option value="lenses">Lenses</option>
                  <option value="sunglasses">Sun Glasses</option>
                </Form.Control>
              </Form.Group>

              {(type == "frame" || type=="frameandglass") && (
                <div
                  className="my-3 "
                  style={{ backgroundColor: "rgba(235,228,227,1)" }}
                >
                  <h3>Frame</h3>
                  <Form.Group
                    className="mb-3 "
                    style={{ width: "400px" }}
                    controlId="formBasicFrameBrandName"
                  >
                    <Form.Label>Brand Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Brand Name"
                      required
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    style={{ width: "400px" }}
                    controlId="formBasicFrameColor"
                  >
                    <Form.Label>Color</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Color"
                      required
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="formBasicFrameDescription"
                    style={{ width: "400px" }}
                  >
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Description"
                      required
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    style={{ width: "400px" }}
                    controlId="formBasicFramePrice"
                  >
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                      type="number"
                      step="any"
                      placeholder="Enter Price"
                      required
                    />
                  </Form.Group>
                  <Form.Label>Select Shapes</Form.Label>
                  <div className="my-1">
                    <Form.Check
                      inline
                      label="rectangle"
                      name="group1"
                      id="formBasicFrameShapeRectangle"
                    />
                    <Form.Check
                      inline
                      label="oval"
                      name="group1"
                      id="formBasicFrameShapeOval"
                    />
                    <Form.Check
                      inline
                      label="round"
                      name="group1"
                      id="formBasicFrameShapeRound"
                    />
                    <Form.Check
                      inline
                      label="cateye"
                      name="group1"
                      id="formBasicFrameShapeCateye"
                    />
                  </div>
                  <Form.Label>Select Sizes</Form.Label>
                  <div className="my-1">
                    <Form.Check
                      inline
                      label="large"
                      name="group1"
                      id="formBasicFrameSizeLarge"
                    />
                    <Form.Check
                      inline
                      label="medium"
                      name="group1"
                      id="formBasicFrameSizeMedium"
                    />
                    <Form.Check
                      inline
                      label="small"
                      name="group1"
                      id="formBasicFrameSizeSmall"
                    />
                  </div>
                </div>
              )}
              {(type == "glass" || type=="frameandglass") && (
                <div
                  className="my-3 "
                  style={{ backgroundColor: "rgba(235,228,227,1)" }}
                >
                  <h3>Glass</h3>
                  <Form.Group
                    className="mb-3 "
                    style={{ width: "400px" }}
                    controlId="formBasicGlassBrandName"
                  >
                    <Form.Label>Brand Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Brand Name"
                      required
                    />
                  </Form.Group>

                  <Form.Group
                    className="mb-3"
                    style={{ width: "400px" }}
                    controlId="formBasicGlassPrice"
                  >
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                      type="number"
                      step="any"
                      placeholder="Enter Price"
                      required
                    />
                  </Form.Group>
                  <Form.Label>Select Power Range</Form.Label>
                  <div className="my-1">
                    <Form.Check
                      inline
                      label="+/-10"
                      name="group1"
                      id="formBasicGlassPowerRange+/-10"
                    />
                    <Form.Check
                      inline
                      label="+/-8"
                      name="group1"
                      id="formBasicGlassPowerRange+/-8"
                    />
                    <Form.Check
                      inline
                      label="+/-4"
                      name="group1"
                      id="formBasicGlassPowerRange+/-4"
                    />
                    <Form.Check
                      inline
                      label="0"
                      name="group1"
                      id="formBasicGlassPowerRange0"
                    />
                  </div>
                  <Form.Label>Select Type</Form.Label>
                  <div className="my-1">
                    <Form.Check
                      inline
                      label="Zero Power"
                      name="group1"
                      id="formBasicGlassTypeZeroPower"
                    />
                    <Form.Check
                      inline
                      label="Digital Screen Protection"
                      name="group1"
                      id="formBasicGlassTypeDigitalScreenProtection"
                    />
                    <Form.Check
                      inline
                      label="Single Vision"
                      name="group1"
                      id="formBasicGlassTypeSingleVision"
                    />
                    <Form.Check
                      inline
                      label="Bifocal"
                      name="group1"
                      id="formBasicGlassTypeBifocal"
                    />
                  </div>
                </div>
              )}
              {(type == "lenses" ) && (
                <div
                  className="my-3 "
                  style={{ backgroundColor: "rgba(235,228,227,1)" }}
                >
                  <h3>Lenses</h3>
                  <Form.Group
                    className="mb-3 "
                    style={{ width: "400px" }}
                    controlId="formBasicLensesBrandName"
                  >
                    <Form.Label>Brand Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Brand Name"
                      required
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    style={{ width: "400px" }}
                    controlId="formBasicLensesColor"
                  >
                    <Form.Label>Color</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Color"
                      required
                    />
                  </Form.Group>
                  
                  <Form.Group
                    className="mb-3"
                    style={{ width: "400px" }}
                    controlId="formBasicLensesPrice"
                  >
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                      type="number"
                      step="any"
                      placeholder="Enter Price"
                      required
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    style={{ width: "400px" }}
                    controlId="formBasicLensesQtyInBox"
                  >
                    <Form.Label>Quantity in Box</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Enter Quantity in Box"
                      required
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    style={{ width: "400px" }}
                    controlId="formBasicLensesShape"
                  >
                    <Form.Label>Shape</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Shape"
                      required
                    />
                  </Form.Group>
                </div>
              )}
              {(type == "sunglasses" ) && (
                <div
                  className="my-3 "
                  style={{ backgroundColor: "rgba(235,228,227,1)" }}
                >
                  <h3>Sunglasses</h3>
                  <Form.Group
                    className="mb-3 "
                    style={{ width: "400px" }}
                    controlId="formBasicSunglassesBrandName"
                  >
                    <Form.Label>Brand Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Brand Name"
                      required
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    style={{ width: "400px" }}
                    controlId="formBasicSunglassesFrameColor"
                  >
                    <Form.Label>Frame Color</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Frame Color"
                      required
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    style={{ width: "400px" }}
                    controlId="formBasicSunglassesFrameShape"
                  >
                    <Form.Label>Frame Shape</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Frame Shape"
                      required
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    style={{ width: "400px" }}
                    controlId="formBasicSunglassesGlassColor"
                  >
                    <Form.Label>Glass Color</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Glass Color"
                      required
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    style={{ width: "400px" }}
                    controlId="formBasicSunglassesPrice"
                  >
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                      type="number"
                      step="any"
                      placeholder="Enter Price"
                      required
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    style={{ width: "400px" }}
                    controlId="formBasicSunglassesWeight"
                  >
                    <Form.Label>Weight</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Weight"
                      required
                    />
                  </Form.Group>
                </div>
              )}

              
              <Form.Group className="mb-3" controlId="formBasicStockQuantity1">
                <Form.Label>Stock Quantity</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter Stock Quantity"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicProductImg1">
                <Form.Label>Product Image</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Product Image URL"
                  required
                />
              </Form.Group>

              <Button
                variant="outline-primary w-100 mt-5"
                type="submit"
                onClick={addProductsAxios}
                className="fa fa-share"
              >
                {"    "}
                Submit
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    );
  };

  const addProductsAxios = (event) => {
    event.preventDefault();
    console.log("Add Product Axios");
    
   
    let category1 = document.getElementById("formBasicSelectCategory").value;
    let StockQuantity1 = document.getElementById(
      "formBasicStockQuantity1"
    ).value;
    let ProductImage1 = document.getElementById("formBasicProductImg1").value;
    let body;

    if(category1=="frame")
    {
      let brand_name1 = document.getElementById("formBasicFrameBrandName").value;
      let color1 = document.getElementById("formBasicFrameColor").value;
      let description1 = document.getElementById("formBasicFrameDescription").value;
      let price1 = document.getElementById("formBasicFramePrice").value;
      let i=0;
      let shape1=[];
      if(document.getElementById("formBasicFrameShapeRectangle").checked)
      {
        shape1[i]="rectangle";
        i++;
      }
      if(document.getElementById("formBasicFrameShapeOval").checked)
      {
        shape1[i]="oval";
        i++;
      }
      if(document.getElementById("formBasicFrameShapeRound").checked)
      {
        shape1[i]="round";
        i++;
      }
      if(document.getElementById("formBasicFrameShapeCateye").checked)
      {
        shape1[i]="cateye";
        i++;
      }
      i=0;
      let size1=[];
      if(document.getElementById("formBasicFrameSizeLarge").checked)
      {
        size1[i]="large";
        i++;
      }
      if(document.getElementById("formBasicFrameSizeMedium").checked)
      {
        size1[i]="medium";
        i++;
      }
      if(document.getElementById("formBasicFrameSizeSmall").checked)
      {
        size1[i]="small";
        i++;
      }
      
      body = {
        category: category1,
        frame: {
          brandName: brand_name1,
          color: color1,
          price: price1,
          description: description1,
          shape: shape1,
          size: size1
        },
        stockQuantity: StockQuantity1,
        productImg: ProductImage1
      };
    }
    if(category1=="glass")
    {
      let brand_name1 = document.getElementById("formBasicGlassBrandName").value;
      let price1 = document.getElementById("formBasicGlassPrice").value;
      let i=0;
      let powerRange1=[];
      if(document.getElementById("formBasicGlassPowerRange+/-10").checked)
      {
        powerRange1[i]="+/-10";
        i++;
      }
      if(document.getElementById("formBasicGlassPowerRange+/-8").checked)
      {
        powerRange1[i]="+/-8";
        i++;
      }
      if(document.getElementById("formBasicGlassPowerRange+/-4").checked)
      {
        powerRange1[i]="+/-4";
        i++;
      }
      
      i=0;
      let type1=[];
      if(document.getElementById("formBasicGlassTypeZeroPower").checked)
      {
        type1[i]="ZeroPower";
        i++;
      }
      if(document.getElementById("formBasicGlassTypeDigitalScreenProtection").checked)
      {
        type1[i]="DigitalScreenProtection";
        i++;
      }
      if(document.getElementById("formBasicGlassTypeSingleVision").checked)
      {
        type1[i]="SingleVision";
        i++;
      }
      if(document.getElementById("formBasicGlassTypeBifocal").checked)
      {
        type1[i]="Bifocal";
        i++;
      }
      
      body = {
        category: category1,
        glass: {
          brandName: brand_name1,
          price: price1,
          type: type1,
          powerRange: powerRange1,
          
        },
        stockQuantity: StockQuantity1,
        productImg: ProductImage1
      };
    }
    if(category1=="frameandglass")
    {
      let brand_name1 = document.getElementById("formBasicFrameBrandName").value;
      let color1 = document.getElementById("formBasicFrameColor").value;
      let description1 = document.getElementById("formBasicFrameDescription").value;
      let price1 = document.getElementById("formBasicFramePrice").value;
      let i=0;
      let shape1=[];
      if(document.getElementById("formBasicFrameShapeRectangle").checked)
      {
        shape1[i]="rectangle";
        i++;
      }
      if(document.getElementById("formBasicFrameShapeOval").checked)
      {
        shape1[i]="oval";
        i++;
      }
      if(document.getElementById("formBasicFrameShapeRound").checked)
      {
        shape1[i]="round";
        i++;
      }
      if(document.getElementById("formBasicFrameShapeCateye").checked)
      {
        shape1[i]="cateye";
        i++;
      }
      i=0;
      let size1=[];
      if(document.getElementById("formBasicFrameSizeLarge").checked)
      {
        size1[i]="large";
        i++;
      }
      if(document.getElementById("formBasicFrameSizeMedium").checked)
      {
        size1[i]="medium";
        i++;
      }
      if(document.getElementById("formBasicFrameSizeSmall").checked)
      {
        size1[i]="small";
        i++;
      }

      let brand_name2 = document.getElementById("formBasicGlassBrandName").value;
      let price2 = document.getElementById("formBasicGlassPrice").value;
      i=0;
      let powerRange2=[];
      if(document.getElementById("formBasicGlassPowerRange+/-10").checked)
      {
        powerRange2[i]="+/-10";
        i++;
      }
      if(document.getElementById("formBasicGlassPowerRange+/-8").checked)
      {
        powerRange2[i]="+/-8";
        i++;
      }
      if(document.getElementById("formBasicGlassPowerRange+/-4").checked)
      {
        powerRange2[i]="+/-4";
        i++;
      }
      
      i=0;
      let type2=[];
      if(document.getElementById("formBasicGlassTypeZeroPower").checked)
      {
        type2[i]="ZeroPower";
        i++;
      }
      if(document.getElementById("formBasicGlassTypeDigitalScreenProtection").checked)
      {
        type2[i]="DigitalScreenProtection";
        i++;
      }
      if(document.getElementById("formBasicGlassTypeSingleVision").checked)
      {
        type2[i]="SingleVision";
        i++;
      }
      if(document.getElementById("formBasicGlassTypeBifocal").checked)
      {
        type2[i]="Bifocal";
        i++;
      }
      
      body = {
        category: category1,
        frame: {
          brandName: brand_name1,
          color: color1,
          price: price1,
          description: description1,
          shape: shape1,
          size: size1
        },
        glass: {
          brandName: brand_name2,
          price: price2,
          type: type2,
          powerRange: powerRange2,
          
        },
        stockQuantity: StockQuantity1,
        productImg: ProductImage1
      };
    }
    if(category1=="lenses")
    {
      let brand_name1 = document.getElementById("formBasicLensesBrandName").value;
      let color1 =  document.getElementById("formBasicLensesColor").value;
      let price1 = document.getElementById("formBasicLensesPrice").value;
      let qtyInBox1 =  document.getElementById("formBasicLensesQtyInBox").value;
      let shape1 =  document.getElementById("formBasicLensesShape").value;

      
      
      body = {
        category: category1,
        lenses: {
          brandName: brand_name1,
          shape: shape1,
          color: color1,
          price: price1,
          qtyInBox: qtyInBox1,
        },
        stockQuantity: StockQuantity1,
        productImg: ProductImage1
      };
    }
    if(category1=="sunglasses")
    {
      let brand_name1 = document.getElementById("formBasicSunglassesBrandName").value;
      let price1 = document.getElementById("formBasicSunglassesPrice").value;
      let frameColor1 =  document.getElementById("formBasicSunglassesFrameColor").value;
      let frameShape1 =  document.getElementById("formBasicSunglassesFrameShape").value;
      let glassColor1 =  document.getElementById("formBasicSunglassesGlassColor").value;
      let weight1 =  document.getElementById("formBasicSunglassesWeight").value;

      
      
      body = {
        category: category1,
        sunGlasses: {
          brandName: brand_name1,
          price: price1,
          frameColor: frameColor1,
          frameShape: frameShape1,
          glassColor: glassColor1,
          weight: weight1
        },
        stockQuantity: StockQuantity1,
        productImg: ProductImage1
      };
    }
    
    console.log(body);
    AdminAddProductAxios.AdminAddProductAxios(body).then((value) => {
      handleClose();
      window.open("http://localhost:3000/AdminEdit", "_self");
    });
  };

  return (
    <div>
      <Container className="py-5">
        <Row>
          <Col className="text-center">
            <h1>Admin Product Details</h1>
            <hr />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="d-flex">
          <Col className="text-left d-flex">
            
              <Button
                className="ms-3 fa fa-plus-circle"
                variant="outline-primary"
                onClick={handleShow}
                style={{ height: "2.5rem" }}
              >
                {"    "}
                Add Products
              </Button>
              {show == true && addProducts()}
            
          </Col>
        </Row>
      </Container>
      <Container id="products_all">
        <Row className="justify-content-around">
          {/* using React.childer to Arrya to set key automatically for the items of list */}
          {React.Children.toArray(data.map(cardItem))}
        </Row>
      </Container>
    </div>
  );
}

export default AdminEdit;
