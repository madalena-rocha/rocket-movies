import { Container } from "./styles";

import { Input } from '../../components/Input';
import { Button } from "../../components/Button";

export function SignIn() {
  return (
    <Container>
      <Input placeholder="E-mail" />
      <Input placeholder="Senha" />

      <Button title="Entrar" />
    </Container>
  );
}
