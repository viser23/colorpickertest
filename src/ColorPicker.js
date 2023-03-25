import React from "react";
import { CustomPicker } from "react-color";
import {
  EditableInput,
  Hue,
  Saturation
} from "react-color/lib/components/common";

export const MyPicker = ({ hex, hsl, hsv, onChange }) => {
  const styles = {
    hue: {
      width: 300,
      height: 18,
      position: "relative",
      marginBottom: 8
    },
    saturation: {
      width: 300,
      height: 30,
      position: "relative",
      marginBottom: 8
    }
  };
  return (
    <div>
      <div style={styles.hue}>
        <Hue hsl={hsl} onChange={onChange} />
      </div>

      <div style={styles.saturation}>
        <Saturation hsl={hsl} hsv={hsv} onChange={onChange} />
      </div>

      <div style={{ display: "flex" }}>
        <EditableInput
          style={{ input: styles.input }}
          value={hex}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default CustomPicker(MyPicker);
