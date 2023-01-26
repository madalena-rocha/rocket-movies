import { useState, useEffect } from 'react';
import { FiArrowLeft, FiClock } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';

import { api } from '../../services/api';

import moment from 'moment-timezone';

import { Container } from "./styles";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Rating } from "../../components/Rating";
import { Tag } from "../../components/Tag";

export function Details() {
  const [data, setData] = useState({});

	const params = useParams();
  
  const { user } = useAuth();
  
  const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  const formattedDate = moment.utc(data.updated_at).tz('America/Sao_Paulo').format('DD/MM/YYYY HH:mm:ss');

	useEffect(() => {
		async function fetchMovie() {
			const response = await api.get(`/notes/${params.id}`);
			setData(response.data);
		}

		fetchMovie();
	}, []);

  return (
    <Container>
      <Header>
        <Input 
          placeholder="Pesquisar pelo título"
        />
      </Header>

      {
				data &&
        <main>
          <header>
            <Link to="/">
              <FiArrowLeft />
              Voltar
            </Link>

            <div>
              <h1>{data.title}</h1>
              <Rating grade={data.rating} isBigSize />
            </div>

            <div className="movie-info">
              <p>
                <img
                  src={avatarURL}
                  alt={user.name}
                />
                Por {user.name}
              </p>

              <div>
                <FiClock />
                
                <p>
                  {formattedDate}
                </p>
                
              </div>
            </div>
          </header>

          { 
						data.tags && 
            <section>
              {
                data.tags.map(tag => (
                  <Tag 
                    key={String(tag.id)}
                    title={tag.name} 
                  />
                ))
              }
            </section>
          }

          <p>{data.description}</p>
        </main>
      }
    </Container>
  );
}
