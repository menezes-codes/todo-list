import tasks from "../../json/tasks.json";
import Task from "../Task";
import { Container } from "./styles";

const List = () => {
  return (
    <Container>
      <ul>
        {tasks.map((task, index) => (
          <Task key={index} title={task.title} description={task.description} />
        ))}
      </ul>
    </Container>
  );
};

export default List;
