import { Table } from "react-bootstrap";

function PageInvestigationTable(props) {
  console.log("props", props.aspects);
  return (
    <>
      <div className="border border-dark bg-lgrey text-white">
        <h3>Investigação de Demandas</h3>
      </div>

      <div className="border mb-3">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Demanda</th>
              <th>Aspecto</th>
              <th>Necessita de Investigação?</th>
            </tr>
          </thead>
          <tbody>
            {props.aspects.map((item, index) =>
              'aspect' in item && (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.aspect}</td>
                  <td>{item.answer}</td>
                </tr>
              )) }
          </tbody>
        </Table>
      </div>
    </>
  );
}
export default PageInvestigationTable;
