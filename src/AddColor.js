import { useState } from 'react';

export function AddColor() {
  let [color, setColor] = useState("");
  const styles = { background: color, width: "200px" };
  let [colorList, setColorList] = useState(["red", "teal", "green", "yellow"]);
  return (
    <div className="colors">
      <div className="addColor">
        <input
          value={color}
          placeholder="Enter a color"
          onChange={(e) => setColor(e.target.value)}
          style={styles} />
        <button
          onClick={() => {
            setColorList([...colorList, color]);
            console.log(colorList);
          }}
        >
          AddColor
        </button>
      </div>
      <div className="colorList">
        {colorList.map((color) => (
          <ColorBox color={color} />
        ))}
      </div>
    </div>
  );
}
function ColorBox({ color }) {
  const styles = {
    height: "30px",
    width: "200px",
    background: color
  };
  return <div style={styles}>{color}</div>;
}
