import { Table } from "react-bootstrap";

function PageNotesTable(props) {
  /// anotacao_aspectos_biologicos
  /// anotacao_aspectos_multidimensionais
  /// anotação_aspectos_psicologicos
  /// anotacao_aspectos_psicológicos
  console.log("aspects",props.aspects)
  const oBAspects = props.aspects.reduce(
    (obj, item) => Object.assign(obj, { [item.id]: item.answer }),
    {}
  );
  console.log(oBAspects);
  return (
    <>
      <div className="border border-dark bg-lgrey text-white">
        <h3>Anotações Sobre os Blocos</h3>
      </div>

      <div className="border mb-3">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Bloco</th>
              <th>Anotações</th>
              <th>Demandas Para Investigar</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Psicológico</td>
              <td>{oBAspects.anotacao_aspectos_psicologicos}</td>
              <td>Lista de demandas para investigar</td>
            </tr>
            <tr>
              <td>Biológico</td>
              <td>{oBAspects.anotacao_aspectos_biologicos}</td>
              <td>Lista de demandas para investigar</td>
            </tr>
            <tr>
              <td>Social</td>
              <td>{oBAspects.anotacao_aspectos_sociais}</td>
              <td>Lista de demandas para investigar</td>
            </tr>
            <tr>
              <td>Quedas</td>
              <td>{oBAspects.anotacao_aspectos_multidimensionais}</td>
              <td>Lista de demandas para investigar</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
}
export default PageNotesTable;
