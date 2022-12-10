import { useState } from 'react';
import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";

import { Textarea } from "../../components/Textarea";
import { MovieItem } from "../../components/MovieItem";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

import { Container, Form } from "./styles";

export function New() {
  const [tags, setTags] = useState([]);
	const [newTag, setNewTag] = useState("");

  function handleAddTag() {
		setTags(prevState => [...prevState, newTag])
		setNewTag("");
	}

  function handleRemoveTag(deleted) {
		setTags(prevState => prevState.filter(tag => tag !== deleted));
	}

  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <Link to="/">
              <FiArrowLeft />
              Voltar
            </Link>

            <h1>Novo filme</h1>
          </header>

          <div>
            <Input placeholder="Título" />
            <Input placeholder="Sua nota (de 0 a 5)" />
          </div>

          <Textarea placeholder="Observações" />

          <Section title="Marcadores">
            <div className="tags">
              {
								tags.map((tag, index) => (
									<MovieItem 
										key={String(index)}
										value={tag} 
										onClick={() => handleRemoveTag(tag)}
									/>
								))
							}

							<MovieItem 
								isNew 
								placeholder="Novo marcador" 
								onChange={e => setNewTag(e.target.value)}
								value={newTag}
								onClick={handleAddTag}
							/>
            </div>
          </Section>

          <div>
            <Button title="Excluir filme" />
            <Button title="Salvar alterações" />
          </div>
        </Form>
      </main>
    </Container>
  );
}
