import { Container, Brand, Search, Profile, Logout } from "./styles";
import { useAuth } from '../../hooks/auth';

import { Input } from "../../components/Input";

export function Header() {
  const { signOut } = useAuth();

  return (
    <Container>
      <Brand>
        <h1>RocketMovies</h1>
      </Brand>

      <Search>
        <Input placeholder="Pesquisar pelo título" />
      </Search>

      <Profile to="/profile">
        <div>
          <strong>Madalena Machado</strong>
          <Logout onClick={signOut}>
            sair
          </Logout>
        </div>

        <img
          src="https://github.com/madalena-rocha.png"
          alt="Foto do usuário"
        />
      </Profile>
    </Container>
  );
}
