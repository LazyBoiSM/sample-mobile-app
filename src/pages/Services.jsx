import { useContext, useEffect } from "react";
import { Context } from "../components/context/Context";

function Services() {
  const { pointer, setPointer } = useContext(Context);
  useEffect(() => {
    setPointer("services");
  }, [pointer]);
  return <h1>This is Services page</h1>;
}

export default Services;
