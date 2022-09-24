import React, { useEffect, useState } from "react";

import Table from "react-bootstrap/Table";

import "./cart.scss";

import { BsXCircle } from "react-icons/bs";

import { getCartByUserId, addPayment, deleteCart } from "./action";
import { useNavigate } from "react-router-dom";
import { useStore } from "../../zustand/reducer";

function Cart() {
  const login = JSON.parse(window.localStorage.getItem("login"));

  const id = login ? login.id : false;

  const dispatch = useStore((state) => state.dispatch);

  const navigate = useNavigate();

  const [cart, setCart] = useState();
  const [total, setTotal] = useState();
  const [name, setName] = useState();
  const [metodePembayaran, setMetodePembayaran] = useState();
  const [alamat, setAlamat] = useState();
  const [phone, setPhone] = useState();
  const [image, setImage] = useState(null);

  useEffect(() => {
    handleGetCart();
  }, []);

  const handleGetCart = async () => {
    const result = await getCartByUserId(id);
    setCart(result.data.products);
    handleSumPrice(result.data.products);
  };

  const handleSumPrice = (data) => {
    let result = 0;
    let price = 0;
    let discount = 0;

    data.forEach((item) => {
      price += item.price;
      discount += item.discount;
      return (result = price - discount);
    });
    setTotal(result);
  };

  const handleAddPayments = async () => {
    const add = new FormData();
    add.append("name", name);
    add.append("memetodePembayaran", metodePembayaran);
    add.append("alamat", alamat);
    add.append("phone", phone);
    image !== null ? add.append("image", image) : add.append("picture", null);
    await addPayment(add);
    handleDeleteCart();
    navigate("/");
    dispatch({ cart: 0 });
  };

  const handleDeleteCart = async () => {
    await deleteCart(id);
  };

  return (
    <div className="container-fluid cart">
      <div className="container">
        <div className="row">
          <div className="col-xl-7 col-lg-12 mt-5">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>NO</th>
                  <th>Product Name</th>
                  <th>Category</th>
                  <th>Image</th>
                  <th>Price</th>
                  <th>Cancel</th>
                </tr>
              </thead>
              <tbody>
                {cart
                  ? cart.map((item, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.name}</td>
                        <td>{item.category}</td>
                        <td>
                          <img className="image-cart" src={item.image} alt="" />
                        </td>
                        <td>Rp. {item.price}</td>
                        <td>
                          <button className="btn btn-light">
                            <BsXCircle color="Red" fontSize="1.3em" />
                          </button>
                        </td>
                      </tr>
                    ))
                  : null}
                <tr>
                  <td></td>
                  <td className="fw-bold">Total</td>
                  <td></td>
                  <td></td>
                  <td className="fw-bold">Rp. {total}</td>
                  <td></td>
                </tr>
              </tbody>
            </Table>
          </div>
          <div className="col-xl-5 col-lg-12 mt-5">
            {metodePembayaran == "transfer" && (
              <h6>
                Tranfer ke :
                <p className="m-1">
                  {" "}
                  <span>Name :</span>
                  <span> Wariman Sentosa</span>
                </p>
                <p className="m-1">
                  {" "}
                  <span>NoRek :</span>
                  <span> 5221 8430 2924 803</span>
                </p>
              </h6>
            )}

            <div className="card-payment">
              <div className="input-payment">
                <span>Name</span>
                <input type="text" onChange={(e) => setName(e.target.value)} />
              </div>
              <div className="input-payment mt-2">
                <span>Metode Pembayaran</span>
                <select onChange={(e) => setMetodePembayaran(e.target.value)}>
                  <option>Select</option>
                  <option value="cod">COD</option>
                  <option value="transfer">Transfer</option>
                </select>
              </div>
              <div className="input-payment mt-2">
                <span>Phone</span>
                <input type="text" onChange={(e) => setPhone(e.target.value)} />
              </div>
              <div className="input-payment mt-2">
                <span>Alamat</span>
                <input
                  type="text"
                  onChange={(e) => setAlamat(e.target.value)}
                />
              </div>
              {metodePembayaran == "transfer" && (
                <div className="input-payment mt-2">
                  <span>SS Bukti Pembayaran</span>
                  <input
                    type="file"
                    onChange={(e) => setImage(e.target.files[0])}
                  />
                </div>
              )}

              <button
                className="btn btn-dark mt-2 w-100 fw-bold"
                onClick={handleAddPayments}
              >
                Okeh Buy
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
