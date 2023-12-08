import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./Open_wallet_model.css";
import Import_wallet_model from "../Import_wallet_model/Import_wallet_model";

export default function Open_wallet_model(props) {

  return (
    <div>
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <h4 className="mdh">DoggyMarket Wallet</h4>
          <p className="text-white">
            DoggyMarket comes with built-in wallet, there is no need to download
            any browser extension. Your private keys are stored in the browser
            and are never sent to the server.
          </p>
          <div>
            <button className="create_wallet">Create new wallet</button>
            <button
              className="import_wallet"
              // onClick={() => setModalShow2(true)}
              onClick={()=>(props.setModalShow2(true),props.setModalShow(false))}
            >
              Import wallet
            </button>
          </div>

        </Modal.Body>
        {/* <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer> */}
      </Modal>
    </div>
  );
}
