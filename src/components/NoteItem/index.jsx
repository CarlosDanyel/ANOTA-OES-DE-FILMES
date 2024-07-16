import { FiPlus, FiX } from "react-icons/fi";
import { Container } from "./styles.js";

export const NoteItem = ({ isNew, value, onClick, placeholder, ...res }) => {
  return (
    <Container isNew={isNew}>
      <input
        type="text"
        value={value}
        readOnly={!isNew}
        placeholder={placeholder}
        {...res}
      ></input>
      <button type="button" onClick={onClick}>
        {isNew ? <FiPlus /> : <FiX />}
      </button>
    </Container>
  );
};
