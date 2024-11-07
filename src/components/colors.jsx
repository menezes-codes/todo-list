import "./index.css";

const Colors = () => {
  return (
    <div className="container">
      <div className="content-um">
        <h1>Lista de Tarefas</h1>
        <div className="tarefa-um">
          <input type="text" placeholder="O que temos de fazer hoje?" />
        </div>
        <div className="tarefa-um">
          <div className="tarefa-um-content">
            <h2 className="texto-principal-um">Organizar documentos</h2>
            <p className="descricao">
              Separar e arquivar os documentos antigos e categorizá-los.
            </p>
          </div>
          <div className="tarefa-um-botoes">
            <button style={{ color: "#6A9955" }}>EDIT</button>
            <button style={{ color: "#D18B47" }}>COMPLETED</button>
            <button style={{ color: "#A64D4D" }}>DELETE</button>
          </div>
        </div>
        <div className="tarefa-um">
          <div className="tarefa-um-content">
            <h2 className="texto-principal-um">Comprar suprimentos</h2>
            <p className="descricao">
              Lista de compras para a semana: papel, canetas, clips e pastas.
            </p>
          </div>
          <div className="tarefa-um-botoes">
            <button style={{ color: "#6A9955" }}>EDIT</button>
            <button style={{ color: "#D18B47" }}>COMPLETED</button>
            <button style={{ color: "#A64D4D" }}>DELETE</button>
          </div>
        </div>
        <div className="tarefa-um">
          <div className="tarefa-um-content">
            <h2 className="texto-principal-um">Revisar projeto</h2>
            <p className="descricao">
              Verificar todos os itens da checklist do projeto atual e atualizar
              status.
            </p>
          </div>
          <div className="tarefa-um-botoes">
            <button style={{ color: "#6A9955" }}>EDIT</button>
            <button style={{ color: "#D18B47" }}>COMPLETED</button>
            <button style={{ color: "#A64D4D" }}>DELETE</button>
          </div>
        </div>
        {/* <button className="botao">Nova Tarefa</button> */}
      </div>
      <div className="content-dois">
        <div>Fundo principal </div>
        <div>Caixa de tarefas</div>
        <div>Texto Principal</div>
        <div>bordas e linha divisórias</div>
        <div>botões de ação</div>
      </div>
    </div>
  );
};

export default Colors;
