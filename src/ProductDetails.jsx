import React, { useState, useEffect, useCallback } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { getProductData } from "./api/api";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import UserLoading from "./LoadingComponets/UserLoading";
import DataNotFound from "./DataNotFound";

import { RiArrowGoBackFill } from "react-icons/ri";
import { withAlert, withCart } from "./withProvider";

import RozerpaymentGatbay from "./RozerpaymentGatbay/RozerpaymentGatbay";
import Fakeproductapi from "./Fakestoreapi/Fakeproductapi";

function ProductDetails({ addToCart, setAlert }) {
  const { id } = useParams();
  const [count, setCount] = useState(1);
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(function () {
    const pr = getProductData(id);

    pr.then(function (response) {
      console.log(response);
      setProduct(response);

      setLoading(false);
    }).catch(function () {
      setLoading(false);
    });
  }, []);

  function handleValue(event) {
    setCount(+event.target.value);
  }
  function handlebuttonclick() {
    addToCart(id, count);
    setAlert({
      type: "Success",
      message: "items added successfully" + product.title,
    });
  }
  if (loading) {
    return <UserLoading />;
  }

  if (!product) {
    return <DataNotFound></DataNotFound>;
  }

  return (
    <>
      <div className="bg-white rounded-lg mt-10 mx-9 px-3 py-10 flex gap-5   ">
        <div className="  flex  space-x-10 ">
          <TransformWrapper>
            <TransformComponent>
              <img
                className="rounded-md  max-w-sm object-cover border-2 border-gray-400 "
                src={product.thumbnail}
              />
            </TransformComponent>
          </TransformWrapper>
          <div className="">
            <div className="text-bold text-red-500 text-3xl ">
              {product.title}{" "}
            </div>
            <div className="text-xl font-bold">{product.category} </div>
            <div className="text-2xl font-bold text-orange-600">
              Rs.{product.price}
            </div>
            <div className="text-2xl font-bold text-orange-600">
              <span className="text-black">Brand:</span>
              {product.brand}
            </div>

            <div className=" space-y-2 ">
              <div>
                <input
                  type="number"
                  value={count}
                  onChange={handleValue}
                  className="w-20 text-center border-2 border-orange-600 rounded "
                />
              </div>
            </div>

            <div className="mt-5">
              <button
                onClick={handlebuttonclick}
                className="bg-orange-400 p-2 rounded-sm text-white"
              >
                Add to Cart
              </button>
              <RozerpaymentGatbay product={product} />
            </div>
          </div>
          <div className="mr-20">
            <Link className="text-xl text-bold" to="/">
              {" "}
              <RiArrowGoBackFill />{" "}
            </Link>
          </div>
        </div>
      </div>
      <div className="text-3xl font-bold ml-10 ">
        You might be interested in
      </div>
      <div className="mt-5">  <Fakeproductapi /></div>
    </>
  );
}

export default withCart(withAlert(ProductDetails));
