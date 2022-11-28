import { Container } from "./styles";

import { Header } from '../../components/Header';
import { Textarea } from '../../components/Textarea';

export function New() {
  return (
    <Container>
      <Header />

      <Textarea placeholder="Observações" />
    </Container>
  );
}
