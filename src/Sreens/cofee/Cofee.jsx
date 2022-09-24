import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./cofee.scss";

import { getProduct, getProductById, addCart } from "./action";

import { useStore } from "../../zustand/reducer";
import ModalUmum from "../../Components/modal/ModalUmum";

function Cofee() {
  const login = JSON.parse(window.localStorage.getItem("login"));
  const isLogin = login ? login.isLogin : false;
  const idUser = login ? login.id : false;

  const dispatch = useStore((state) => state.dispatch);
  const useSelector = useStore((state) => state);

  const [data, setData] = useState([]);
  const [alertShow, setAlertShow] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    handleGetProduct();
  }, []);

  const handleGetProduct = async () => {
    const result = await getProduct();
    setData(result.data.result);
  };

  const handleAddCart = async (id) => {
    if (isLogin == true) {
      const dataById = await getProductById(id);
      const data = {
        userId: idUser,
        name: dataById.data.result.name,
        category: dataById.data.result.category,
        price: dataById.data.result.price,
        discount: dataById.data.result.discount,
        image: dataById.data.result.image,
      };
      await addCart(data);
      dispatch({ cart: useSelector.cart + 1 });
    } else {
      setAlertShow(true);
    }
  };

  return (
    <div className="container-fluid wrapper-cofee">
      <div className="container">
        <h1 className="mb-3">Cofee's</h1>
        <div className="row">
          {data &&
            data.map((item, index) => (
              <div
                className="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-xs-12 mb-3"
                key={index}
              >
                <div className="cart-cofee">
                  <div className="header-cart">
                    <p>{item.name}</p>
                    <p>{item.category}</p>
                  </div>
                  <img src={item.image} alt="" />
                  <div className="buttom-cart my-2">
                    <button
                      type="button"
                      className="btn btn-dark  btn-cart"
                      onClick={() => handleAddCart(item._id)}
                    >
                      Add to Cart
                    </button>

                    {item.discount !== 0 ? (
                      <span>
                        <p
                          className="text-decoration-line-through"
                          style={{
                            fontSize: "12px",
                          }}
                        >
                          Rp. {item.price}
                        </p>
                        <p>Rp. {item.price - item.discount}</p>
                      </span>
                    ) : (
                      <p>Rp. {item.price}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
        </div>
        <ModalUmum show={alertShow} onHide={() => setAlertShow(false)} />
      </div>
    </div>
  );
}

export default Cofee;
