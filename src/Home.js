import React from "react";
import "./Home.css";
import Product from "./Product";
import Carousel from 'react-bootstrap/Carousel'
import './App.css'


function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <div className="home_image">
          <Carousel interval="4000" stopOnHover home_images>
            <Carousel.Item>
              <img
                className=" home_image "
                src="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2021/journeys/MzBiNjIyYjgt/MzBiNjIyYjgt-NWM5ZWJlYTct-w1500._CB669030425_.jpg "
                alt=""
                // style={{ height: "100vh" }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className=" home_image "
                src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/YmM4ZGRiNGQt/YmM4ZGRiNGQt-ZGU1MTFjY2Mt-w1500._CB669562935_.jpg"
                alt=""
                // style={{ height: "100vh" }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className=" home_image "
                src="https://images-na.ssl-images-amazon.com/images/G/01/Audible/Homestead/AHM_Week-1_Gateway_Desktop_1500x600-V4._CB655178950_.jpg"
                alt=""
                // style={{ height: "100vh" }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className=" home_image"
                src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/Nzg3NzIxZDct/Nzg3NzIxZDct-YzA3MzM4Yjgt-w1500._CB412117312_.jpg"
                alt=""
                // style={{ height: "100vh" }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="home_image"
                src="https://images-na.ssl-images-amazon.com/images/G/01/img18/home/journeys/MmY4MTZlYmMt/MmY4MTZlYmMt-MWZjMjc0MzEt-w1500._CB670025017_.jpg"
                alt=""
                // style={{ height: "100vh" }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className=" home_image"
                src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/2019/Other/RB-1424_AcquisitionHolidayAssets/GW_DesktopHero_RB-1424_PV-AcquisitionHolidayAssets_1500x600._CB451871227_.jpg"
                alt=""
                // style={{ height: "100vh" }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="home_image"
                src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/Y2UwYWM0MDQt/Y2UwYWM0MDQt-MjZhZDIzYTIt-w1500._CB670370726_.jpg"
                alt=""
                // style={{ height: "100vh" }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="home_image"
                src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/Nzg3NzIxZDct/Nzg3NzIxZDct-YmQ1NDM5ZDgt-w1500._CB412095397_.jpg"
                alt=""
                // style={{ height: "100vh" }}
              />
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="home_row">
          <Product
            id="12321341"
            title="Solo Stove Bonfire Fire Pit - Smokeless Large 19.5 Inch Stainless Steel Outdoor Firepit"
            price={299.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/418wuPAKnrL._AC_SY240_.jpg"
          />
          <Product
            id="49538094"
            title="Supergoop! Superscreen - 1.7 fl oz - SPF 40 PA+++ Hydrating Daily Moisturizer"
            price={130.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2021/img/Consumables/XCM_CUTTLE_1305322_1561942_US_3654123_379x304_1X_en_US._SY304_CB662317373_.jpg"
          />
          <Product
            id="4903850"
            title="OutdoorMaster Skateboard Cycling Helmet, Youth & Adults"
            price={39.99}
            rating={3}
            image="https://m.media-amazon.com/images/I/817yJ4mUvCL._AC_SX180_SY120_QL70_.jpg"
          />
        </div>

        <div className="home_row">
          <Product
            id="12321341"
            title="Dell Inspiron 14 HD High Performance Laptop (2021 Latest Model), Intel Core i3-1005G1 Processor, 8GB RAM, 256GB SSD"
            price={439.0}
            rating={5}
            image="https://m.media-amazon.com/images/I/61RRuoA16SS._AC_UY218_.jpg"
          />
          <Product
            id="49538094"
            title="CyberpowerPC Gamer Xtreme VR Gaming PC, Intel Core i5-9400F 2.9GHz, NVIDIA GeForce GTX 1660 6GB, 8GB DDR4, 240GB SSD, 1TB HDD, WiFi Ready "
            price={1630.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71fVpfx5oiL._AC_SX425_.jpg"
          />
        </div>
        <div className="home_row">
          <Product
            id="23445930"
            title="New Apple iPhone 12 (128GB, Purple) [Locked] + Carrier Subscription"
            price={934.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/71hIfcIPyxS._FMwebp__.jpg"
          />
          <Product
            id="23445930"
            title="TOBBI Kids Ride on Truck Style 12V Battery Powered Electric Car W/Remote Control Pink"
            price={259.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/61sDPiq%2BvuL._AC_SX466_.jpg"
          />
          <Product
            id="3254354345"
            title="SAMSUNG 65-inch Class Curved UHD TU-8300 Series - 4K UHD HDR Smart TV With Alexa Built-in (UN65TU8300FXZA, 2020 Model)"
            price={647.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/91ybDuGaToL._AC_SX355_.jpg"
          />
        </div>
        <div className="feed-carousel-viewport">
          <Carousel infiniteLoop useKeyboardArrows autoPlay infinite="true">
            <Carousel.Item> 
             
              <img
                className="home_image1"
                src="https://m.media-amazon.com/images/I/41uhW4jkb-L._AC_SY200_.jpg "
                alt=""
              />
             
              <img
                className="home_image1"
                src="https://m.media-amazon.com/images/I/4143ZkSx3lL._AC_SY200_.jpg"
                alt=""
              />
            
            <img
              className="home_image1"
              src="https://m.media-amazon.com/images/I/31yRCHsN8uL._AC_SY200_.jpg "
              alt=""
            />
            <img
              className="home_image1"
              src="https://m.media-amazon.com/images/I/41fk35FiFfL._AC_SY200_.jpg "
              alt=""
            />
            <img
              className="home_image1"
              src="https://m.media-amazon.com/images/I/41rICIwWBnL._AC_SY200_.jpg "
              alt=""
            />
            <img
              className="home_image1"
              src="https://m.media-amazon.com/images/I/41qf6TlnSML._AC_SY200_.jpg"
              alt=""
            />
            <img
              className="home_image1"
              src="https://m.media-amazon.com/images/I/41Dxo2U1ArL._AC_SY200_.jpg"
              alt=""
            />
            <img
              className="home_image1"
              src="https://m.media-amazon.com/images/I/31pkeHFVuZL._AC_SY200_.jpg"
              alt=""
            />
            <img
              className="home_image1"
              src="https://m.media-amazon.com/images/I/31oefLcRRVL._AC_SY200_.jpg"
              alt=""
            />
            <img
              className="home_image1"
              src="https://m.media-amazon.com/images/I/41dAQlG-61L._AC_SY200_.jpg"
              alt=""
            />
            <img
              className="home_image1"
              src="https://m.media-amazon.com/images/I/415csT8Ut8L._AC_SY200_.jpg"
              alt=""
            />
            <img
              className="home_image1"
              src="https://m.media-amazon.com/images/I/51PT7vGoqnL._AC_SY200_.jpg"
              alt=""
            />
            <img
              className="home_image1"
              src="https://m.media-amazon.com/images/I/41A0A4roSbL._AC_SY200_.jpg"
              alt=""
            />
            <img
              className="home_image1"
              src="https://m.media-amazon.com/images/I/41A0A4roSbL._AC_SY200_.jpg"
              alt=""
            />
            <img
              className="home_image1"
              src="https://m.media-amazon.com/images/I/31bESR1MD3L._AC_SY200_.jpg"
              alt=""
            />
            </Carousel.Item> 
          </Carousel>
        </div>
        {/* ************************************************************************************************************************ */}
        <div className="home_row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
        <div className="lower_container row">
          <div className="col-sm-12 inner_container">
            <div className="fluid-image-container col-sm-4">
              <div className="col-sm-12">
                <h4>Womens shop by price</h4>
              </div>
              <img
                className="image"
                src="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2021/journeys/N2FkMDllZDUt/N2FkMDllZDUt-NTk4OTg4MGQt-w186._SY116_CB669993134_.jpg"
                alt=""
              ></img>

              <img
                className="image"
                src="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2021/journeys/N2FkMDllZDUt/N2FkMDllZDUt-OTg4NDRhZDYt-w186._SY116_CB669993134_.jpg"
                alt=""
              ></img>
              <img
                className="image"
                src="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2021/journeys/N2FkMDllZDUt/N2FkMDllZDUt-ZDg2NDAyZTMt-w186._SY116_CB669993134_.jpg"
                alt=""
              ></img>
              <img
                className="image"
                src="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2021/journeys/N2FkMDllZDUt/N2FkMDllZDUt-ZTQ3MDVhZWUt-w186._SY116_CB669993134_.jpg"
                alt=""
              ></img>
              <div className="col-sm-12">
                <a href="https://www.amazon.com/b?node=9538491011&ref=af_gw_top_quadcard_may_w_sbp_5&pf_rd_r=1F5HVHJAYJTCEJRGWZX7&pf_rd_p=275cf974-dd3b-483d-b581-8282a1f50dad&pd_rd_r=42414dfd-e8fe-496b-99ae-5fdfccf9a422&pd_rd_w=awSJs&pd_rd_wg=UY4FM&ref_=pd_gw_unk">
                  Shop style savings
                </a>
              </div>
            </div>
            <div className="fluid-image-container col-sm-4">
              <div className="col-sm-12">
                <h4>put your photos on (smart) display</h4>
              </div>
              <img
                className="image"
                src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/ZDNhNDdkYjQt/ZDNhNDdkYjQt-MzE4MDkxYjIt-w379._SY304_CB667102597_.jpg"
                alt=""
              ></img>
              <div className="col-sm-12">
                <a href="https://www.amazon.com/dp/B07RQ3TCT2/ref=ods_gw_ha_db_photo_d_052821?pf_rd_r=1F5HVHJAYJTCEJRGWZX7&pf_rd_p=1d2c04fa-34bd-479e-9d8f-6593afc2d993&pd_rd_r=42414dfd-e8fe-496b-99ae-5fdfccf9a422&pd_rd_w=NiKRA&pd_rd_wg=UY4FM&ref_=pd_gw_unk">
                  Showcase your photos on Echo show 8
                </a>
              </div>
            </div>

            <div className="fluid-image-container col-sm-4">
              <div className="col-sm-12">
                <h4>Deal of the day</h4>
              </div>
              <img
                className="image"
                src="https://m.media-amazon.com/images/I/51sMmK5CEZL._AC_SY240_.jpg"
                alt=""
              ></img>
              <div className="col-sm-6">
                <p>$39-$145</p>
              </div>
              <div className="col-sm-12">
                <p>Save on Comfier Massage Devices</p>
              </div>
              <div className="col-sm-12">
                <a href="https://www.amazon.com/gp/goldbox/?pf_rd_r=1F5HVHJAYJTCEJRGWZX7&pf_rd_p=ef7995b6-f4c6-4b03-8477-fa7146066bc2&pd_rd_r=42414dfd-e8fe-496b-99ae-5fdfccf9a422&pd_rd_w=fLBeC&pd_rd_wg=UY4FM&ref_=pd_gw_unk">
                  See all deals
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
