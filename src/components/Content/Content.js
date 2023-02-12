import React from "react";
import "./Content.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import axios from "axios";
import {Link} from 'react-router-dom'

function Content() {
  const [data, SetData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const config = {
        headers: {
          "X-Country-Id": "TR",
          "X-Language-Id": "TR",
        },
      };
      const response = await axios.get(
        "https://api.extrazone.com/tags/list",
        config
      );
      SetData(response.data);
      console.log(response);
    };
    fetchData();
  }, []);
  const settings = {
    className: "slider variable-width",
    dots: true,
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    dotsClass: "slick-dots",
  };
  return (
    <Slider {...settings}>
      {data.map((item) => (
        
        <div className="product">
            <div className="bg-img">
                <img src="rectangle/Rectangle.png" className="bg-rect"/>
            </div>
          <img src="products\IMG_1.jpg" className="product-img" />
          <img src={item.IconUrl} className="promo-icon" />
          <p className="promo-txt">2,5 LT Sprite kapakları 330 ML Kutu kazandırıyor!</p>
          <Link to={`campaign/${item.Name}/${item.Id}`} state={{from: item.Id}} className="promo-detail">Daha Daha</Link>
        </div>
        
      ))}
    </Slider>
  );
}

export default Content;
