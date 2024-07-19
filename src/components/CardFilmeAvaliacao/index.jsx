import { format } from "date-fns";
import { IoMdTime } from "react-icons/io";
import imgAvatar from "../../assets/avatar_placeholder.svg";

import { useAuth } from "../../hooks/auth.jsx";

import { api } from "../../services/api";

import { Stars } from "../Stars";
import { TagLi } from "../Tag";

import { Container, ContainerTag, User } from "./style";

export const CardFilmeAvaliacao = ({ data, ...res }) => {
  const { user } = useAuth();

  const avatURl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : imgAvatar;

  const formatDate = (timestamp, split) => {
    const date = timestamp.split(" ")[split];
    return format(date, "dd/MM/yyyy");
  };

  const updatedDate = formatDate(data.updated_at, 0);

  return (
    <Container {...res}>
      <div>
        <h1>{data.title}</h1>
        <Stars avaliation={data.rating} />
      </div>
      <User>
        <span>
          <img src={avatURl} alt={`Foto do usuario ${user.name}`} />
          Por {user.name}
        </span>
        <span>
          <IoMdTime />
          {updatedDate} às {data.updated_at.split(" ")[1]}
        </span>
      </User>
      {data.tags && (
        <ContainerTag key={user.id}>
          {data.tags.map((tag, index) => (
            <TagLi key={index} title={tag.name} />
          ))}
        </ContainerTag>
      )}
      <p>{data.description}</p>
    </Container>
  );
};
