import React from "react";

import Cbutton from "../button/Cbutton";

function ModalUmum({ show, onHide }) {
  return (
    <div className={show ? "login-show" : "login-off"}>
      <div className="cart-login">
        <h2 className="text-center mt-4">~ Power Cofee Alert ~</h2>
        <h4 className="text-center mt-4">You have to Login first</h4>
        <h5 className="text-center mt-4 mb-5">Go to Login page?</h5>
        <div className="btn-login">
          <Cbutton
            title="Cancel"
            color="btn-light"
            width="170px"
            margin="me-2"
            border="border border-dark"
            click={onHide}
          />
          <Cbutton title="Okeh" color="btn-dark" width="170px" click={onHide} />
        </div>
      </div>
    </div>
  );
}

export default ModalUmum;
