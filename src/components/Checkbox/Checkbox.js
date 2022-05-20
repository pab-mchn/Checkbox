import React from "react";
import { useState } from "react";

const Checkbox = () => {
  const [checked, setChecked] = useState(false);
  return (
    <>
      <form>
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
      </form>
    </>
  );
};

export default Checkbox;
