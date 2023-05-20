import React, { useState, useEffect } from "react";
import { getProductFake } from "./api/api";
import Loading from "./LoadingComponets/Loading";
import Productsfakelist from "./Productsfakelist";

function Fakeproductpage() {
  const [productxyz, setProductxyz] = useState([]);
  const [loding, setLoading] = useState(true);

  useEffect(function () {
    const xyz = getProductFake();

    xyz.then(function (product) {
      setProductxyz(product);
      setLoading(false);
    });
  }, []);

  let data = productxyz;

  if (loding) {
    return <Loading />;
  }

  return (
    <div>
      <Productsfakelist Products={data} />
    </div>
  );
}

export default Fakeproductpage;
