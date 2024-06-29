import "./Home.css";
import { useContext, useEffect } from "react";
import { Context } from "../../components/context/Context";

function Home() {
  const { pointer, setPointer } = useContext(Context);
  useEffect(() => {
    setPointer("home");
  }, [pointer]);
  return (
    <div className="homeContainer">
      <h1>Home Page</h1>
    </div>
  );
}

export default Home;
