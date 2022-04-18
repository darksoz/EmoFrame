import { Table } from "react-bootstrap";

function PageNotesTable() {
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
                        <td>Anotações sobre o bloco psicológico</td>
                        <td>Lista de demandas para investigar</td>
                    </tr>
                    <tr>
                        <td>Biológico</td>
                        <td>anotações sobre o bloco biológico</td>
                        <td>Lista de demandas para investigar</td>

                    </tr>
                    <tr>
                        <td>Social</td>
                        <td>Anotações sobre o bloco social</td>
                        <td>Lista de demandas para investigar</td>

                    </tr>
                    <tr>
                        <td>Quedas</td>
                        <td>Anotações sobre o bloco quedas</td>
                        <td>Lista de demandas para investigar</td>

                    </tr>
                </tbody>
            </Table>
            </div>
        </>
    )
}
export default PageNotesTable;