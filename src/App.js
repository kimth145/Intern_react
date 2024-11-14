import { useEffect, useState } from "react";
import "./style.css";

function App() {
  const [opacity, setOpacity] = useState(0);

  // const [width, setWidth] = useState("100px");
  // const [height, setHeight] = useState("100px");

  const [size1, setSize] = useState({
    width: "100px",
    height: "100px",
  });

  const [img, setImg] = useState([]);

  function handleImg() {
    // img.push("aaaa.jpg");
    setImg([...img, "aaaa.jpg"]);
  }

  console.log(img);

  function opacity1(op, size) {
    setOpacity(op);
    // setSize({ ...size1, width: size });
    // setSize({ ...size1, height: size });

    setSize({
      ...size1,
      width: size,
      height: size,
    });
  }

  useEffect(() => opacity1(0.5, "100px"), []);

  return (
    <>
      <div
        style={{
          opacity: opacity,
          backgroundColor: "red",
          width: size1.width,
          height: size1.height,
        }}
        onMouseOver={() => opacity1(1, "150px")}
        onMouseOut={() => opacity1(0.5, "100px")}
      ></div>

      <button onClick={handleImg}>aaa</button>

      <div>
        {/* {for (let index = 0; index < img.length; index++) {
           <img src={img && img}></img>
          
        } }
        */}
      </div>
    </>
  );
}

export default App;
