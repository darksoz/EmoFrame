import { Table } from "react-bootstrap";

function PageNotesTable(props) {

  console.log("aspects",props.aspects)
  const oBAspects = props.aspects.reduce(
    (obj, item) => Object.assign(obj, { [item.id]: item.answer}),
    {}
  );
  console.log(oBAspects);
  console.log(props.aspects);
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
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Psicológico</td>
              <td>{oBAspects.anotacao_aspectos_psicologicos}</td>
            </tr>
            <tr>
              <td>Biológico</td>
              <td>{oBAspects.anotacao_aspectos_biologicos}</td>
            </tr>
            <tr>
              <td>Social</td>
              <td>{oBAspects.anotacao_aspectos_sociais}</td>
            </tr>
            <tr>
              <td>Quedas</td>
              <td>{oBAspects.anotacao_aspectos_multidimensionais}</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
}
export default PageNotesTable;
