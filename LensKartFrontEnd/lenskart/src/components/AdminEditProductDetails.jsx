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
import AdminEditProductDetailsAxios from "./AdminEditProductDetailsAxios";
import AdminDeleteProductAxios from "./AdminDeleteProductAxios";

function AdminEditProductDetails() {
  const [data, setdata] = useState([]);
  const [cartBtn, setCartBtn] = useState("Add to Cart");
  const [qty, setqty] = useState(0);
  const [type, setType] = useState("");
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
  console.log("proooooooooooooooooooo",product);
   

  const func = () => {
    if(type=="")
  setType(product.category); 
  
    const EditDetails = (event) => {
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
      AdminEditProductDetailsAxios.AdminEditProductDetailsAxios(
        body,
        product.productId
      ).then((value) => {
        window.open("http://localhost:3000/AdminEdit", "_self");
      });
    };

    const DeleteProduct = (event) => {
      event.preventDefault();
      if (
        window.confirm("Are you sure about deleting this Product Listing ?")
      ) {
        AdminDeleteProductAxios.AdminDeleteProductAxios(product.productId).then(
          (value) => {
            window.open("http://localhost:3000/AdminEdit", "_self");
          }
        );
      }
    };
 
    return (
      <div>
        <Container className="my-5 py-3">
          {
            <Row>
              <Col className="d-flex justify-content-center mx-auto product">
                <img
                  src={product.productImg}
                  alt={product.productName}
                  height="600px"
                />
              </Col>
              <Col className="d-flex flex-column justify-content-center">
                
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
                      defaultValue={product.frame.brandName}
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
                      defaultValue={product.frame.color}
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
                      defaultValue={product.frame.description}
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
                      defaultValue={product.frame.price}
                      placeholder="Enter Price"
                      required
                    />
                  </Form.Group>
                  <Form.Label>Select Shapes</Form.Label>
                  <div className="my-1">
                    {(product.frame.shape.filter((x) => x == "rectangle").length>0)&&
                    <Form.Check
                      inline
                      label="rectangle"
                      defaultChecked="true"
                      name="group1"
                      id="formBasicFrameShapeRectangle"
                    />}
                    {(product.frame.shape.filter((x) => x == "rectangle").length==0)&&
                    <Form.Check
                      inline
                      label="rectangle"
                      name="group1"
                      id="formBasicFrameShapeRectangle"
                    />}

                    {(product.frame.shape.filter((x) => x == "oval").length>0)&&
                    <Form.Check
                      inline
                      label="oval"
                      defaultChecked="true"
                      name="group1"
                      id="formBasicFrameShapeOval"
                    />}
                    {(product.frame.shape.filter((x) => x == "oval").length==0)&&
                    <Form.Check
                      inline
                      label="oval"
                      name="group1"
                      id="formBasicFrameShapeOval"
                    />}

                    {(product.frame.shape.filter((x) => x == "round").length>0)&&
                    <Form.Check
                      inline
                      label="round"
                      defaultChecked="true"
                      name="group1"
                      id="formBasicFrameShapeRound"
                    />}
                    {(product.frame.shape.filter((x) => x == "round").length==0)&&
                    <Form.Check
                      inline
                      label="round"
                      name="group1"
                      id="formBasicFrameShapeRound"
                    />}

                    {(product.frame.shape.filter((x) => x == "cateye").length>0)&&
                    <Form.Check
                      inline
                      label="cateye"
                      defaultChecked="true"
                      name="group1"
                      id="formBasicFrameShapeCateye"
                    />}
                    {(product.frame.shape.filter((x) => x == "cateye").length==0)&&
                    <Form.Check
                      inline
                      label="cateye"
                      name="group1"
                      id="formBasicFrameShapeCateye"
                    />}

                  </div>
                  <Form.Label>Select Sizes</Form.Label>
                  <div className="my-1">
                  {(product.frame.size.filter((x) => x == "large").length>0)&&
                    <Form.Check
                      inline
                      label="large"
                      defaultChecked="true"
                      name="group1"
                      id="formBasicFrameSizeLarge"
                    />}
                    {(product.frame.size.filter((x) => x == "large").length==0)&&
                    <Form.Check
                      inline
                      label="large"
                      name="group1"
                      id="formBasicFrameSizeLarge"
                    />}

                    {(product.frame.size.filter((x) => x == "medium").length>0)&&
                    <Form.Check
                      inline
                      label="medium"
                      defaultChecked="true"
                      name="group1"
                      id="formBasicFrameSizeMedium"
                    />}
                    {(product.frame.size.filter((x) => x == "medium").length==0)&&
                    <Form.Check
                      inline
                      label="medium"
                      name="group1"
                      id="formBasicFrameSizeMedium"
                    />}

                    {(product.frame.size.filter((x) => x == "small").length>0)&&
                    <Form.Check
                      inline
                      label="small"
                      defaultChecked="true"
                      name="group1"
                      id="formBasicFrameSizeSmall"
                    />}
                    {(product.frame.size.filter((x) => x == "small").length==0)&&
                    <Form.Check
                      inline
                      label="small"
                      name="group1"
                      id="formBasicFrameSizeSmall"
                    />}
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
                      defaultValue={product.glass.brandName}
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
                      defaultValue={product.glass.price}
                      placeholder="Enter Price"
                      required
                    />
                  </Form.Group>
                  <Form.Label>Select Power Range</Form.Label>
                  <div className="my-1">
                  {(product.glass.powerRange.filter((x) => x == "+/-10").length>0)&&
                    <Form.Check
                      inline
                      label="+/-10"
                      defaultChecked="true"
                      name="group1"
                      id="formBasicGlassPowerRange+/-10"
                    />}
                    {(product.glass.powerRange.filter((x) => x == "+/-10").length==0)&&
                    <Form.Check
                      inline
                      label="+/-10"
                      name="group1"
                      id="formBasicGlassPowerRange+/-10"
                    />}
                    {(product.glass.powerRange.filter((x) => x == "+/-8").length>0)&&
                    <Form.Check
                      inline
                      label="+/-8"
                      defaultChecked="true"
                      name="group1"
                      id="formBasicGlassPowerRange+/-8"
                    />}
                    {(product.glass.powerRange.filter((x) => x == "+/-8").length==0)&&
                    <Form.Check
                      inline
                      label="+/-8"
                      name="group1"
                      id="formBasicGlassPowerRange+/-8"
                    />}
                     {(product.glass.powerRange.filter((x) => x == "+/-4").length>0)&&
                    <Form.Check
                      inline
                      label="+/-4"
                      defaultChecked="true"
                      name="group1"
                      id="formBasicGlassPowerRange+/-4"
                    />}
                    {(product.glass.powerRange.filter((x) => x == "+/-4").length==0)&&
                    <Form.Check
                      inline
                      label="+/-4"
                      name="group1"
                      id="formBasicGlassPowerRange+/-4"
                    />}
                    {(product.glass.powerRange.filter((x) => x == "0").length>0)&&
                    <Form.Check
                      inline
                      label="0"
                      defaultChecked="true"
                      name="group1"
                      id="formBasicGlassPowerRange0"
                    />}
                    {(product.glass.powerRange.filter((x) => x == "0").length==0)&&
                    <Form.Check
                      inline
                      label="0"
                      name="group1"
                      id="formBasicGlassPowerRange0"
                    />}
                  </div>
                  <Form.Label>Select Type</Form.Label>
                  <div className="my-1">
                  {(product.glass.type.filter((x) => x == "ZeroPower").length>0)&&
                    <Form.Check
                      inline
                      label="Zero Power"
                      defaultChecked="true"
                      name="group1"
                      id="formBasicGlassTypeZeroPower"
                    />}
                    {(product.glass.type.filter((x) => x == "ZeroPower").length==0)&&
                    <Form.Check
                      inline
                      label="Zero Power"
                      name="group1"
                      id="formBasicGlassTypeZeroPower"
                    />}
                     {(product.glass.type.filter((x) => x == "DigitalScreenProtection").length>0)&&
                    <Form.Check
                      inline
                      label="Digital Screen Protection"
                      defaultChecked="true"
                      name="group1"
                      id="formBasicGlassTypeDigitalScreenProtection"
                    />}
                    {(product.glass.type.filter((x) => x == "DigitalScreenProtection").length==0)&&
                    <Form.Check
                      inline
                      label="Digital Screen Protection"
                      name="group1"
                      id="formBasicGlassTypeDigitalScreenProtection"
                    />}
                    {(product.glass.type.filter((x) => x == "SingleVision").length>0)&&
                    <Form.Check
                      inline
                      label="Single Vision"
                      defaultChecked="true"
                      name="group1"
                      id="formBasicGlassTypeSingleVision"
                    />}
                    {(product.glass.type.filter((x) => x == "SingleVision").length==0)&&
                    <Form.Check
                      inline
                      label="Single Vision"
                      name="group1"
                      id="formBasicGlassTypeSingleVision"
                    />}
                    {(product.glass.type.filter((x) => x == "Bifocal").length>0)&&
                    <Form.Check
                      inline
                      label="Bifocal"
                      defaultChecked="true"
                      name="group1"
                      id="formBasicGlassTypeBifocal"
                    />}
                    {(product.glass.type.filter((x) => x == "Bifocal").length==0)&&
                    <Form.Check
                      inline
                      label="Bifocal"
                      name="group1"
                      id="formBasicGlassTypeBifocal"
                    />}
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
                      defaultValue={product.lenses.brandName}
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
                      defaultValue={product.lenses.color}
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
                      defaultValue={product.lenses.price}
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
                      defaultValue={product.lenses.qtyInBox}
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
                      defaultValue={product.lenses.shape}
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
                      defaultValue={product.sunGlasses.brandName}
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
                      defaultValue={product.sunGlasses.frameColor}
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
                      defaultValue={product.sunGlasses.frameShape}
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
                      defaultValue={product.sunGlasses.glassColor}
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
                      defaultValue={product.sunGlasses.price}
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
                      defaultValue={product.sunGlasses.weight}
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
                  defaultValue={product.stockQuantity}
                  placeholder="Enter Stock Quantity"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicProductImg1">
                <Form.Label>Product Image</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={product.productImg}
                  placeholder="Enter Product Image URL"
                  required
                />
              </Form.Group>


                  <Button
                    variant="outline-primary w-50 mt-5"
                    type="submit"
                    onClick={EditDetails}
                    className="fa fa-refresh"
                  >
                    {"    "}
                    Update
                  </Button>
                  <Button
                    variant="outline-danger w-50 mt-5"
                    type="submit"
                    onClick={DeleteProduct}
                    className="fa fa-trash"
                  >
                    {"    "}
                    Delete
                  </Button>
                </Form>
              </Col>
            </Row>
          }
        </Container>
      </div>
    );
  };

  return React.Children.toArray(data.map(func)[0]);
}
export default AdminEditProductDetails;
