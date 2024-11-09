import { Button, Buttons, Container, Text } from "./styles";

const Task = () => {
  return (
    <Container>
      <Text>
        <h2>Organizar documentos</h2>
        <p>Separar e arquivar os documentos antigos e categorizá-los.</p>
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
