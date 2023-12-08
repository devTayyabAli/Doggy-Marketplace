import React from "react";
import "./Header.css";
import logo from "../Assets/logo.png";
import { FaWallet } from "react-icons/fa6";
import Open_wallet_model from "../Open_wallet_model/Open_wallet_model";
import Import_wallet_model from "../Import_wallet_model/Import_wallet_model";
export default function Header() {
  const [modalShow, setModalShow] = React.useState(false);
  const [modalShow2, setModalShow2] = React.useState(false);

  return (
    <div className="main_header">
      <div className="container">
        <div className="d-flex align-items-center justify-content-between gap-3">
          <div className="logo_main_wid">
            <img src={logo} alt="" />
          </div>
          <div>
            <input
              type="text"
              placeholder="Search for tokens,Wallets, dogemap, inscriptions"
              className="main_input_header"
            />
          </div>
          <div
            onClick={() => setModalShow(true)}
            className="Open_wallte_btn d-flex align-items-center gap-2"
          >
            <FaWallet /> open wallet
          </div>
          <Open_wallet_model
            show={modalShow}
            setModalShow={setModalShow}
            setModalShow2={setModalShow2}
            onHide={() => setModalShow(false)}
          />
          <Import_wallet_model
            show={modalShow2}
            onHide={() => setModalShow2(false)}
            setModalShow2={setModalShow2}
          />
        </div>
      </div>
    </div>
  );
}
