import { useContext, useEffect } from "react";
import { Context } from "../components/context/Context";

function AboutUs() {
  const { pointer, setPointer } = useContext(Context);
  useEffect(() => {
    setPointer("aboutUs");
  }, [pointer]);
  return <h1>This is AboutUs page</h1>;
}

export default AboutUs;
