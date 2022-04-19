import { Table } from "react-bootstrap";

function PageInvestigationTable(props) {
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
                    <tr>
                        <td>Déficit Cognitivo</td>
                        <td>Psicológico</td>
                        <td>x</td>

                    </tr>
                    <tr>
                        <td>Atitude Negativa em Relação ao Processo de Envelhecimento</td>
                        <td>Psicológico</td>
                        <td>x</td>

                    </tr>

                    <tr>
                        <td>Depressão</td>
                        <td>Psicológico</td>
                        <td>x</td>

                    </tr>

                    <tr>
                        <td>Déficite Sensorial</td>
                        <td>Biológico</td>
                        <td>x</td>

                    </tr>

                    <tr>
                        <td>Incapacidade Funcional</td>
                        <td>Biológico</td>
                        <td>x</td>

                    </tr>

                    <tr>
                        <td>Desnutrição</td>
                        <td>Biológico</td>
                        <td>x</td>

                    </tr>

                    <tr>
                        <td>Doenças Cardiovasculates</td>
                        <td>Biológico</td>
                        <td>x</td>

                    </tr>

                    <tr>
                        <td>Uso Inadequado de Medicamentos</td>
                        <td>Biológico</td>
                        <td>x</td>

                    </tr>

                    <tr>
                        <td>Baixo Suporte Social</td>
                        <td>Social</td>
                        <td>x</td>

                    </tr>

                    <tr>
                        <td>Violência</td>
                        <td>Social</td>
                        <td>x</td>

                    </tr>

                    <tr>
                        <td>Problemas Ambientais</td>
                        <td>Social</td>
                        <td>x</td>

                    </tr>

                    <tr>
                        <td>Quedas</td>
                        <td>Multidimensional</td>
                        <td>x</td>

                    </tr>

                </tbody>
            </Table>
            </div>
        </>
    )
}
export default PageInvestigationTable;