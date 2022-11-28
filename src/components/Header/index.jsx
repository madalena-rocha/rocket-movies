import { Container, Brand, Search, Profile, Logout } from "./styles";

import { Input } from "../../components/Input";

export function Header() {
  return (
    <Container>
      <Brand>
        <h1>RocketMovies</h1>
      </Brand>

      <Search>
        <Input placeholder="Pesquisar pelo título" />
      </Search>

      <Profile>
        <div>
          <strong>Madalena Machado</strong>
          <Logout>sair</Logout>
        </div>

        <img
          src="https://github.com/madalena-rocha.png"
          alt="Foto do usuário"
        />
      </Profile>
    </Container>
  );
}
