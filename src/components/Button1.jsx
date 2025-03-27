import { useState } from "react";

function Button1() {
  const [value, setValue] = useState("-");
  const chose = () => {
    const outCome = Math.random() < 0.5 ? "Wisam" : "Rana";
    setValue(outCome);
  };
  return (
    <>
      <input type="button" onClick={chose} value="clickMe" />
      <p>{value}</p>
    </>
  );
}

export default Button1;
