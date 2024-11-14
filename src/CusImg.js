function CusImg({ img_name, id }) {
  return (
    <div
      id={id}
      style={{
        margin: "1px",
        // height: "50px",
        backgroundColor: "red",
      }}
    >
      {/* {text} */}
      <img src={img_name}></img>
    </div>
  );
}

export default CusImg;
