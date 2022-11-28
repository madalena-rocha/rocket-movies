import { Container } from "./styles";

import { Header } from '../../components/Header';
import { Textarea } from '../../components/Textarea';
import { Section } from '../../components/Section';
import { MovieItem } from '../../components/MovieItem';

export function New() {
  return (
    <Container>
      <Header />

      <Textarea placeholder="Observações" />

      <Section title="Marcadores">
        <MovieItem value="React" />
				<MovieItem isNew placeholder="Novo marcador" />
      </Section>
    </Container>
  );
}
