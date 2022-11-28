import { Container } from "./styles";

import { Header } from "../../components/Header";
import { Rating } from "../../components/Rating";

export function Home() {
  return (
    <Container>
      <Header />

      <Rating grade="4" isBigSize={false} />
    </Container>
  );
}
