import React, { useEffect, useState } from "react";
import { useStore } from "../../zustand/reducer";

import { getProduct, getProductById, addCart } from "../cofee/action";

import "./promo.scss";

function Promo() {
  const login = JSON.parse(window.localStorage.getItem("login"));

  const idUser = login ? login.id : false;

  const dispatch = useStore((state) => state.dispatch);
  const useSelector = useStore((state) => state);

  const [data, setData] = useState([]);

  useEffect(() => {
    handleGetProduct();
  }, []);

  const handleGetProduct = async () => {
    const result = await getProduct();
    handlePromo(result.data.result);
  };

  const handlePromo = (data) => {
    const result = [];
    data.forEach((item) => {
      if (item.discount !== 0) {
        result.push(item);
      }
    });
    setData(result);
  };

  const handleAddCart = async (id) => {
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
  };

  return (
    <div className="container-fluid wrapper-promo">
      <div className="container">
        <h1 className="mb-3">Discount's</h1>
        <div className="row">
          {data &&
            data.map((item, index) => (
              <div
                className="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-xs-12 mb-3"
                key={index}
              >
                <div className="cart-promo">
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
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Promo;
