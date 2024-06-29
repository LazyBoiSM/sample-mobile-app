import { useContext, useEffect } from "react";
import { Context } from "../components/context/Context";

function Products() {
  const { pointer, setPointer } = useContext(Context);
  useEffect(() => {
    setPointer("products");
  }, [pointer]);
  return <h1>This is Products page</h1>;
}

export default Products;
