import { Container } from "./styles";

export function Input({ icon: Icon, ...rest }) {
  return (
    <Container>
      {Icon && <Icon size={"2rem"} />}
      <input {...rest} />
    </Container>
  );
}
