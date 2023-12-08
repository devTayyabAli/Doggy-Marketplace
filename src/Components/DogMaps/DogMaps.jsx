import React from "react";
import "./DogMaps.css";
import dog from "../Assets/dog.svg";
import org from "../Assets/org.png"
import orgg from "../Assets/orgg.png"
import Buy_model from "../Buy_model/Buy_model";
export default function DogMaps() {
  const [modalShow1, setModalShow1] = React.useState(false);

  return (
    <div className="main_dog_maps">
      <div className="container-fluid">
        <div className="row align-items-center justify-content-between">
          <div className="col-4">
            <div className="dogmap_content">
              <h2>Dogemaps</h2>
              <div className="d-flex align-items-center gap-2 floor_pric">
                Floor price:
                <img src={dog} className="dog_pic" alt="" />
                <span>7</span>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-2">
            <div className="hot_badge">🔥 577 buys in last hour</div>
          </div>
        </div>

        <div className="dog_map_cards mt-5">
        <div className="inner_dog_card">
        <div className="d-flex justify-content-center">
            <img src={org} className="org_wid" alt="" />
        </div>
        <div className="dog_content_inner">
        <p className="dog_bout">3479596.dogemap</p>

        <div className="d-flex justify-content-between" >
            <p className="seller">Seller:</p>
            <p className="dog_numbers" >D7M2s...6LMow</p>
        </div>

        <div className="dog_buy_lower">
        <div className="d-flex justify-content-center gap-2 price_dog" >
            <img src={dog} className="dog_pic" alt="" />
            98
            <span>($9.5)</span>
        </div>

        </div>

        <div className="buy_btn">
            <button  onClick={() => setModalShow1(true)}>Buy </button>
        </div>

        </div>

        </div>
        <div className="inner_dog_card">
        <div className="d-flex justify-content-center">
            <img src={org} className="org_wid" alt="" />
        </div>
        <div className="dog_content_inner">
        <p className="dog_bout">3479596.dogemap</p>

        <div className="d-flex justify-content-between" >
            <p className="seller">Seller:</p>
            <p className="dog_numbers" >D7M2s...6LMow</p>
        </div>

        <div className="dog_buy_lower">
        <div className="d-flex justify-content-center gap-2 price_dog" >
            <img src={dog} className="dog_pic" alt="" />
            98
            <span>($9.5)</span>
        </div>

        </div>

        <div className="buy_btn">
            <button  onClick={() => setModalShow1(true)}>Buy</button>
        </div>

        </div>

        </div>
        <div className="inner_dog_card">
        <div className="d-flex justify-content-center">
            <img src={org} className="org_wid" alt="" />
        </div>
        <div className="dog_content_inner">
        <p className="dog_bout">3479596.dogemap</p>

        <div className="d-flex justify-content-between" >
            <p className="seller">Seller:</p>
            <p className="dog_numbers" >D7M2s...6LMow</p>
        </div>

        <div className="dog_buy_lower">
        <div className="d-flex justify-content-center gap-2 price_dog" >
            <img src={dog} className="dog_pic" alt="" />
            98
            <span>($9.5)</span>
        </div>

        </div>

        <div className="buy_btn">
            <button  onClick={() => setModalShow1(true)}>Buy</button>
        </div>

        </div>

        </div>
        <div className="inner_dog_card">
        <div className="d-flex justify-content-center">
            <img src={orgg} className="org_widd" alt="" />
        </div>
        <div className="dog_content_inner">
        <p className="dog_bout">3479596.dogemap</p>

        <div className="d-flex justify-content-between" >
            <p className="seller">Seller:</p>
            <p className="dog_numbers" >D7M2s...6LMow</p>
        </div>

        <div className="dog_buy_lower">
        <div className="d-flex justify-content-center gap-2 price_dog" >
            <img src={dog} className="dog_pic" alt="" />
            98
            <span>($9.5)</span>
        </div>

        </div>

        <div className="buy_btn">
            <button  onClick={() => setModalShow1(true)}    >Buy</button>
        </div>

        </div>

        </div>
        <div className="inner_dog_card text_dog_card">
      
        <p>Show all listed dogemaps</p>


        </div>
        <Buy_model
        show={modalShow1}
        onHide={() => setModalShow1(false)}
      />

        </div>
      </div>
    </div>
  );
}
