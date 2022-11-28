import { Container } from "./styles";

import { Header } from '../../components/Header';
import { Textarea } from '../../components/Textarea';
import { Section } from '../../components/Section';

export function New() {
  return (
    <Container>
      <Header />

      <Textarea placeholder="Observações" />

      <Section title="Marcadores"></Section>
    </Container>
  );
}
