import { Container, Brand, Search, Profile, Logout } from "./styles";
import { useAuth } from "../../hooks/auth";

import { api } from "../../services/api";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

import { Input } from "../../components/Input";

export function Header() {
  const { signOut, user, setInput } = useAuth();

  const avatarURL = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  return (
    <Container>
      <Brand>
        <h1>RocketMovies</h1>
      </Brand>

      <Search>
        <Input placeholder="Pesquisar pelo título" onChange={handleInput} />
      </Search>

      <Profile to="/profile">
        <div>
          <strong>{user.name}</strong>
          <Logout onClick={signOut}>sair</Logout>
        </div>

        <img src={avatarURL} alt={user.name} />
      </Profile>
    </Container>
  );
}
