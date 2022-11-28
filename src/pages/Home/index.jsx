import { Container } from "./styles";

import { Header } from '../../components/Header';
import { Tag } from '../../components/Tag';

export function Home() {
  return (
    <Container>
      <Header />

      <Tag title="Ficção Científica" />
			<Tag title="Drama" />
      <Tag title="Família" />
    </Container>
  );
}
