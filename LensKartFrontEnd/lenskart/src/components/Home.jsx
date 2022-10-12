import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Product from "./Product";
import Row from "react-bootstrap/Row";

const Home = () => {
  return (
    <div>
      
      <Row className="justify-content-center py-3 mx-auto">
        <Carousel variant="dark" style={{ height: "500px" }}>
          <Carousel.Item>

              <img
                className="d-block w-100"
                src="https://static1.lenskart.com/media/desktop/img/Sept22/20-Sep/Launch_Web_1920x520.gif"
                alt="Home Furnishings"
                height="450px"
              />

          </Carousel.Item>
          <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://static1.lenskart.com/media/desktop/img/Sept22/grad2.gif"
                alt="Fashion"
                height="450px"
              />

          </Carousel.Item>
          <Carousel.Item>

              <img
                className="d-block w-100"
                src="https://static1.lenskart.com/media/desktop/img/Sep22/Shapes_Web_Banner_F.gif"
                alt="Mobiles And Tablets"
                height="450px"
              />

          </Carousel.Item>
          <Carousel.Item>

              <img
                className="d-block w-100"
                src="https://static1.lenskart.com/media/desktop/img/Sep22/3%20(3).jpg"
                alt="Consumer Electronics"
                height="450px"
              />

          </Carousel.Item>
          <Carousel.Item>

              <img
                className="d-block w-100"
                src="https://static1.lenskart.com/media/desktop/img/Aug22/KJ-2.jpg"
                alt="Books"
                height="450px"
              />

          </Carousel.Item>
          <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://static1.lenskart.com/media/desktop/img/Sep22/8sep22/Web%20Banner.gif"
                alt="Baby Product"
                height="450px"
              />
          </Carousel.Item>
          <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://static1.lenskart.com/media/desktop/img/Sep22/8sep22/attachments/Web%20Banner%20.gif"
                alt="Baby Product"
                height="450px"
              />
          </Carousel.Item>
          <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://static1.lenskart.com/media/desktop/img/Sep22/1920%20x%20528.png"
                alt="Baby Product"
                height="450px"
              />
          </Carousel.Item>
          <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://static1.lenskart.com/media/desktop/img/Sep22/1%20(6).png"
                alt="Baby Product"
                height="450px"
              />
          </Carousel.Item>
          <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://static1.lenskart.com/media/desktop/img/Apr22/prescription%20web%20banners.png"
                alt="Baby Product"
                height="450px"
              />
          </Carousel.Item>

        </Carousel> 
      </Row>
     
      <Product />
    </div>
  );
};

export default Home;