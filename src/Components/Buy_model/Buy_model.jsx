import React, { useContext } from "react";
import Modal from "react-bootstrap/Modal";
import "./Buy_model.css";
import org from "../Assets/org.png";
import dog from "../Assets/dog.svg"
import { MyContext } from "../../MyContext";

export default function Buy_model(props) {
  const { setModalShow2,modalShow2,setModalShow,modalShow } = useContext(MyContext);
  return (
    <div>
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <h4 className="mdh buy_dg">Buy dogemap</h4>
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="bgg_dgg ">
                <div className="justify-content-center d-flex">
                  <img src={org} className="w-50" alt="" />
                </div>
                <p className="text-white text-center">178525.dogemap</p>
              </div>

              <div className="content_buy_model">
              <div className="row mt-2">

                <div className="col-md-12 text-center">
                <div className="d-flex gap-2 justify-content-between">


                <div className="text-white buyyy_text">Taker fee (2.8%):</div>
                <div className="buyyy_text">
                    <img src={dog} className="dog_pic me-2" alt="" />
                    3.08 ($0.3)
                </div>
                </div>

                </div>
              </div>
              <div className="row mt-2">

                <div className="col-md-12 text-center">
                <div className="d-flex gap-2 justify-content-between">


                <div className="text-white buyyy_text">Network fee:</div>
                <div className="buyyy_text">
                    <img src={dog} className="dog_pic me-2" alt="" />
                    3.08 ($0.3)
                </div>
                </div>

                </div>
              </div>
              <div className="row mt-2">

                <div className="col-md-12 text-center">
                <div className="d-flex gap-2 justify-content-between">


                <div className="text-white buyyy_text">Total:</div>
                <div className="buyyy_text">
                    <img src={dog} className="dog_pic me-2" alt="" />
                    3.08 ($0.3)
                </div>
                </div>

                </div>
              </div>
              <div className="row mt-2">

                <div className="col-md-12 text-center">
                <div className="d-flex gap-2 justify-content-between">


                <div className="text-white buyyy_text">Available balance:</div>
                <div className="buyyy_text">
                    <img src={dog} className="dog_pic me-2" alt="" />
                    3.08 ($0.3)
                </div>
                </div>

                </div>
              </div>
              </div>
            </div>
          </div>
          <div>
            <button className="unlock_wallet" onClick={()=>(setModalShow(true),props.onHide())}>Unlock your wallet to buy</button>
            {/* <button className="import_wallet">Import wallet</button> */}
          </div>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer> */}
      </Modal>
    </div>
  );
}
