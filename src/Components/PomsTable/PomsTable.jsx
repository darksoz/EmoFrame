import { Table } from "react-bootstrap";

function PomsTable() {
    return (
        <>
          <h3>Valores obtidos em cada escala do POMS</h3>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Escala</th>
                        <th>Valor Mínimo</th>
                        <th>Valor Obtido</th>
                        <th>Valor Máximo</th>
                        
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Tensão</td>
                        <td>0</td>
                        <td>x</td>
                        <td>24</td>
                    </tr>
                    <tr>
                        <td>Depressão</td>
                        <td>0</td>
                        <td>x</td>
                        <td>24</td>
                    </tr>
                    <tr>
                        <td>Hostilidade</td>
                        <td>0</td>
                        <td>x</td>
                        <td>24</td>
                    </tr>
                    <tr>
                        <td>Fadiga</td>
                        <td>0</td>
                        <td>x</td>
                        <td>24</td>
                    </tr>
                    <tr>
                        <td>Vigor</td>
                        <td>0</td>
                        <td>x</td>
                        <td>24</td>
                    </tr>
                    <tr>
                        <td>Confusão</td>
                        <td>0</td>
                        <td>x</td>
                        <td>24</td>
                    </tr>
                </tbody>
            </Table>
        </>
    );
}

export default PomsTable;