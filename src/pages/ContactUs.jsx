import { useContext, useEffect } from "react";
import { Context } from "../components/context/Context";

function ContactUs() {
  const { pointer, setPointer } = useContext(Context);
  useEffect(() => {
    setPointer("contactUs");
  }, [pointer]);
  return <h1>This is ContactUs page</h1>;
}

export default ContactUs;
