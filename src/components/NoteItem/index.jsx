import { FiPlus } from "react-icons/fi";
import { Container } from "./styles.js";

export const NoteItem = ({
  value,
  clickBtnForm,
  placeholder,
  setEstate,
  ...res
}) => {
  return (
    <Container>
      <input
        onChange={(e) => setEstate(e.target.value)}
        type="text"
        value={value}
        placeholder={placeholder}
        {...res}
      ></input>
      <button type="button" onClick={clickBtnForm}>
        <FiPlus />
      </button>
    </Container>
  );
};
