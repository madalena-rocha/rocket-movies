import { FiPlus } from "react-icons/fi";
import { Container, Content, NewMovie } from "./styles";

import { Header } from "../../components/Header";
import { Movie } from "../../components/Movie";
import { useAuth } from "../../hooks/auth";

import data from "../../mock/data.json";

export function Home() {
  const { input } = useAuth();
  const filteredData = data.filter((data) =>
    data.title.toLowerCase().includes(input.toLowerCase())
  );
  return (
    <Container>
      <Header />
      <main>
        <header>
          <h1>Meus filmes</h1>
          <NewMovie to="/new">
            <FiPlus />
            Adicionar filme
          </NewMovie>
        </header>
        <Content>
          {filteredData.length ? (
            filteredData.map((data, i) => <Movie key={i} data={data} />)
          ) : (
            <h1
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "calc(100vh - 300px)",
              }}
            >
              Nenhum filme foi encontrado
            </h1>
          )}
        </Content>
      </main>
    </Container>
  );
}
