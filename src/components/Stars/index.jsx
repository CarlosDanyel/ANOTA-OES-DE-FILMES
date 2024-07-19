import { useState } from "react";

import { StarItem } from "./styles.js";

export const Stars = ({ avaliation }) => {
  const [rating] = useState(avaliation);

  return (
    <StarItem>
      {[...Array(5)].map((_, index) => {
        return <li key={index}>{index < rating ? "\u2605" : "\u2606"}</li>;
      })}
    </StarItem>
  );
};
