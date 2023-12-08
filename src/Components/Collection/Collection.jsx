import React from "react";
import one from "../Assets/col.png"
import two from "../Assets/col1.png"
import three from "../Assets/col2.jpg"
import four from "../Assets/col3.png"
import dog from "../Assets/dog.svg"

import "./Collection.css";
export default function Collection() {
  return (
    <div className="main_collection">
      <h1>Collection</h1>
      <div className="row">
      <div className="col-md-6">
          <div className="collection_card_item">
            <div className="collection_rank">
              <p>1</p>
            </div>
            <img className="collection_img" src={one} alt="" />
            <div>
                <div className="collection_name">Doginal Mini Doges</div>
                <div className="collection_floor">
                Floor price:  <img src={dog} className="dog_pic  me-1" alt="" /> <span>874</span>
                </div>
            </div>
            <div className="colletion_vol">
                <img src={dog} className="dog_pic  me-1" alt="" />
                2,882,589
            </div>
          </div>
          <div className="collection_card_item">
            <div className="collection_rank">
              <p>2</p>
            </div>
            <img className="collection_img" src={two} alt="" />
            <div>
                <div className="collection_name">Doginal Mini Doges</div>
                <div className="collection_floor">
                Floor price:  <img src={dog} className="dog_pic  me-1" alt="" /> <span>874</span>
                </div>
            </div>
            <div className="colletion_vol">
                <img src={dog} className="dog_pic  me-1" alt="" />
                2,882,589
            </div>
          </div>
          <div className="collection_card_item">
            <div className="collection_rank">
              <p>3</p>
            </div>
            <img className="collection_img" src={three} alt="" />
            <div>
                <div className="collection_name">Doginal Mini Doges</div>
                <div className="collection_floor">
                Floor price:  <img src={dog} className="dog_pic  me-1" alt="" /> <span>874</span>
                </div>
            </div>
            <div className="colletion_vol">
                <img src={dog} className="dog_pic  me-1" alt="" />
                2,882,589
            </div>
          </div>
          <div className="collection_card_item">
            <div className="collection_rank">
              <p>4</p>
            </div>
            <img className="collection_img" src={four} alt="" />
            <div>
                <div className="collection_name">Doginal Mini Doges</div>
                <div className="collection_floor">
                Floor price:  <img src={dog} className="dog_pic  me-1" alt="" /> <span>874</span>
                </div>
            </div>
            <div className="colletion_vol">
                <img src={dog} className="dog_pic  me-1" alt="" />
                2,882,589
            </div>
          </div>
        </div>
        <div className="col-md-6">
          {/* <div className="collection_card_item">
            <div className="collection_rank">
              <p>1</p>
            </div>
            <img className="collection_img" src={one} alt="" />
            <div>
                <div className="collection_name">Doginal Mini Doges</div>
                <div className="collection_floor">
                Floor price:  <img src={dog} className="dog_pic  me-1" alt="" /> <span>874</span>
                </div>
            </div>
            <div className="colletion_vol">
                <img src={dog} className="dog_pic  me-1" alt="" />
                2,882,589
            </div>
          </div> */}
          <div className="collection_card_item">
            <div className="collection_rank">
              <p>5</p>
            </div>
            <img className="collection_img" src={four} alt="" />
            <div>
                <div className="collection_name">Doginal Mini Doges</div>
                <div className="collection_floor">
                Floor price:  <img src={dog} className="dog_pic  me-1" alt="" /> <span>874</span>
                </div>
            </div>
            <div className="colletion_vol">
                <img src={dog} className="dog_pic  me-1" alt="" />
                2,882,589
            </div>
          </div>
          <div className="collection_card_item">
            <div className="collection_rank">
              <p>6</p>
            </div>
            <img className="collection_img" src={one} alt="" />
            <div>
                <div className="collection_name">Doginal Mini Doges</div>
                <div className="collection_floor">
                Floor price:  <img src={dog} className="dog_pic  me-1" alt="" /> <span>874</span>
                </div>
            </div>
            <div className="colletion_vol">
                <img src={dog} className="dog_pic  me-1" alt="" />
                2,882,589
            </div>
          </div>
          <div className="collection_card_item">
            <div className="collection_rank">
              <p>7</p>
            </div>
            <img className="collection_img" src={two} alt="" />
            <div>
                <div className="collection_name">Doginal Mini Doges</div>
                <div className="collection_floor">
                Floor price:  <img src={dog} className="dog_pic  me-1" alt="" /> <span>874</span>
                </div>
            </div>
            <div className="colletion_vol">
                <img src={dog} className="dog_pic  me-1" alt="" />
                2,882,589
            </div>
          </div>
          <div className="collection_card_item show_all_col">
          <p>Show all collections</p>
          </div>
        </div>
      
      </div>
    </div>
  );
}
