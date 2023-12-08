import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import "./Import_wallet_model.css";
import swal from "sweetalert";

export default function Import_wallet_model(props) {
  const [privateKey, setPrivateKey] = useState("");
  const [errorKey, setErrorKey] = useState(false);
  return (
    <div>
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <h5 className="text-center text-white">Import Wallet</h5>
          <div>
            {errorKey ? (
              <>
                <span style={{ color: "red", fontSize: "15px" }}>
                  Enter your secret phrase First!{" "}
                </span>{" "}
              </>
            ) : (
              <></>
            )}
            <textarea
              className="import_text"
              name=""
              id=""
              cols="30"
              rows="6"
              placeholder="Enter your secret phrase here (mnemonic or private key)"
              onChange={(e) => (setPrivateKey(e.target.value),setErrorKey(false))}
            ></textarea>
          </div>
          <div>
            <button className="go_back_btn">Go back</button>
            <button
              className="import_wallet_btn"
              onClick={() => (
                privateKey == ""
                  ? setErrorKey(true)
                  : (props.setModalShow2(false),
                swal("Success!", " Thank you for Submitting", "success"))
              )}
            >
              import Wallet
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
