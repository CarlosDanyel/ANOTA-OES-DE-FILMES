import { useState } from "react";

import { StarItem } from "./styles.js";

export const Stars = () => {
  const [rating, setRating] = useState(0);

  const handleRating = (index) => {
    setRating(index + 1);
  };

  return (
    <StarItem>
      {[...Array(5)].map((_, index) => {
        return (
          <li key={index} onClick={() => handleRating(index)}>
            {index < rating ? "\u2605" : "\u2606"}
          </li>
        );
      })}
    </StarItem>
  );
};
