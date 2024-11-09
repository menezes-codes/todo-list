import { Button, Buttons, Container, Text } from "./styles";

const Task = ({ title, description }) => {
  return (
    <Container>
      <Text>
        <h2>{title}</h2>
        <p>{description}</p>
      </Text>
      <Buttons>
        <Button color="var(--color-edit)">EDIT</Button>
        <Button color="var(--color-completed)">COMPLETED</Button>
        <Button color="var(--color-delete)">DELETE</Button>
      </Buttons>
    </Container>
  );
};

export default Task;
