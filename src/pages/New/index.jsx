import { useState } from 'react';
import { FiArrowLeft } from "react-icons/fi";

import { useNavigate } from 'react-router-dom';

import { ButtonText } from "../../components/ButtonText";
import { Textarea } from "../../components/Textarea";
import { MovieItem } from "../../components/MovieItem";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

import { api } from '../../services/api';

import { Container, Form } from "./styles";

export function New() {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");
	const [description, setDescription] = useState("");

  const [tags, setTags] = useState([]);
	const [newTag, setNewTag] = useState("");

  const navigate = useNavigate();

	function handleBack() {
		navigate(-1);
	}

  function handleAddTag() {
		setTags(prevState => [...prevState, newTag])
		setNewTag("");
	}

  function handleRemoveTag(deleted) {
		setTags(prevState => prevState.filter(tag => tag !== deleted));
	}

  async function handleNewMovie() {
    if (!title) {
			return alert("Digite o título do filme");
		}
    
    const isRatingValid = rating >= 0 && rating <= 5;

    if (!isRatingValid) {
      return alert("A nota do filme deve ser entre 0 e 5");
    }
    
		if (newTag) {
			return alert("Você deixou uma tag no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio.");
		}

		await api.post("/notes", {
			title,
			description,
      rating,
			tags
		});

		alert("Filme adicionado com sucesso!");
		navigate(-1);
	}

  function handleDiscardMovie() {
    const userConfirmation = confirm(
      "Todas as alterações serão perdidas... Tem certeza que deseja descartar as alterações?"
    );

    if (userConfirmation) {
      navigate(-1);
    }
  }

  return (
    <Container>
      <Header>
        <Input 
          placeholder="Pesquisar pelo título"
        />
      </Header>

      <main>
        <Form>
          <header>
            <ButtonText
              onClick={handleBack}
            >
              <FiArrowLeft />
              Voltar
            </ButtonText>

            <h1>Novo filme</h1>
          </header>

          <div>
            <Input 
              placeholder="Título" 
              onChange={e => setTitle(e.target.value)}
            />

            <Input 
              placeholder="Sua nota (de 0 a 5)" 
              type="number"
              min="0"
              max="5"
              value={rating}
              onChange={e => setRating(e.target.value)}
            />
          </div>

          <Textarea 
						placeholder="Observações"
						onChange={e => setDescription(e.target.value)} 
					/>

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
            <Button 
              title="Descartar alterações" 
              onClick={handleDiscardMovie}
            />

            <Button 
              title="Salvar alterações" 
              onClick={handleNewMovie}
            />
          </div>
        </Form>
      </main>
    </Container>
  );
}
