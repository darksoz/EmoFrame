import Table from 'react-bootstrap/Table';
function SusScoreReference() {
    return (
        <div class="row">
            <div class="col-md-12">
                <h4>Como interpretar o Score do SUS</h4>
                <Table striped bordered hover>
                    <tbody>
                    <tr>
                        <td> Menor que 60</td>
                        <td>Inaceitável</td>
                    </tr>
                    <tr>
                        <td> 60-70</td>
                        <td>Ok</td>
                    </tr>
                    <tr>
                        <td> 70-80</td>
                        <td>Bom</td>
                    </tr>
                    <tr>
                        <td> 80-90</td>
                        <td>Excelente</td>
                    </tr>
                    <tr>
                        <td> Maior que 90</td>
                        <td>Melhor usabilidade possível</td>
                    </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    );
}

export default SusScoreReference;