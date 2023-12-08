import "./Sale_Slider.css";
import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import card_one from "../Assets/content.png";
import card_three from "../Assets/c2.png";
import card_four from "../Assets/c3.png";
import card_five from "../Assets/c4.png";
import card_six from "../Assets/c3.png";
import card_two from "../Assets/c1.png";
import dog from "../Assets/dog.svg";

export default function Sale_Slider() {
  return (
    <div className="main_sale_slider">
    <div className="">

    <h1 className="main_heading">Biggest sale of the day     </h1>
    <Swiper
          slidesPerView={1}
          spaceBetween={10}
          loop={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          modules={[]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="sale_card_main">
              <div className="card_number">#3333</div>
              <img src={card_one} alt="" />
              <div className="card_content">
                <div className="pb-2">
                  <span>Doge Smokes</span> <span>#312</span>
                </div>

                <div className="vaule_co d-flex align-items-center justify-content-center gap-2">
                  <img src={dog} className="dog_pic" alt="" />
                  9,999
                  <span className="usd_value">($969.24)</span>
                </div>

                <div>
                  <button className="card_sold"> Sold</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="sale_card_main">
              <div className="card_number">#3333</div>
              <img src={card_two} alt="" />
              <div className="card_content">
                <div className="pb-2">
                  <span>Doge Smokes</span> <span>#312</span>
                </div>

                <div className="vaule_co d-flex align-items-center justify-content-center gap-2">
                  <img src={dog} className="dog_pic" alt="" />
                  9,999
                  <span className="usd_value">($969.24)</span>
                </div>

                <div>
                  <button className="card_sold"> Sold</button>
                </div>
              </div>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className="sale_card_main">
              <div className="card_number">#3333</div>
              <img src={card_three} alt="" />
              <div className="card_content">
                <div className="pb-2">
                  <span>Doge Smokes</span> <span>#312</span>
                </div>

                <div className="vaule_co d-flex align-items-center justify-content-center gap-2">
                  <img src={dog} className="dog_pic" alt="" />
                  9,999
                  <span className="usd_value">($969.24)</span>
                </div>

                <div>
                  <button className="card_sold"> Sold</button>
                </div>
              </div>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className="sale_card_main">
              <div className="card_number">#3333</div>
              <img src={card_four} alt="" />
              <div className="card_content">
                <div className="pb-2">
                  <span>Doge Smokes</span> <span>#312</span>
                </div>

                <div className="vaule_co d-flex align-items-center justify-content-center gap-2">
                  <img src={dog} className="dog_pic" alt="" />
                  9,999
                  <span className="usd_value">($969.24)</span>
                </div>

                <div>
                  <button className="card_sold"> Sold</button>
                </div>
              </div>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className="sale_card_main">
              <div className="card_number">#3333</div>
              <img src={card_five} alt="" />
              <div className="card_content">
                <div className="pb-2">
                  <span>Doge Smokes</span> <span>#312</span>
                </div>

                <div className="vaule_co d-flex align-items-center justify-content-center gap-2">
                  <img src={dog} className="dog_pic" alt="" />
                  9,999
                  <span className="usd_value">($969.24)</span>
                </div>

                <div>
                  <button className="card_sold"> Sold</button>
                </div>
              </div>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className="sale_card_main">
              <div className="card_number">#3333</div>
              <img src={card_six} alt="" />
              <div className="card_content">
                <div className="pb-2">
                  <span>Doge Smokes</span> <span>#312</span>
                </div>

                <div className="vaule_co d-flex align-items-center justify-content-center gap-2">
                  <img src={dog} className="dog_pic" alt="" />
                  9,999
                  <span className="usd_value">($969.24)</span>
                </div>

                <div>
                  <button className="card_sold"> Sold</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

    </div>
    
    </div>
  );
}
