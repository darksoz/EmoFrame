import { Table } from "react-bootstrap";

function PomsTable(props) {

    const getResult = (index) =>{
        if(props.ScaleResults.length > 0){
            return props.ScaleResults[index];
        }
    }
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
                        <td>{getResult(0)}</td>
                        <td>24</td>
                    </tr>
                    <tr>
                        <td>Depressão</td>
                        <td>0</td>
                        <td>{getResult(1)}</td>
                        <td>24</td>
                    </tr>
                    <tr>
                        <td>Hostilidade</td>
                        <td>0</td>
                        <td>{getResult(2)}</td>
                        <td>24</td>
                    </tr>
                    <tr>
                        <td>Fadiga</td>
                        <td>0</td>
                        <td>{getResult(3)}</td>
                        <td>24</td>
                    </tr>
                    <tr>
                        <td>Vigor</td>
                        <td>0</td>
                        <td>{getResult(4)}</td>
                        <td>24</td>
                    </tr>
                    <tr>
                        <td>Confusão</td>
                        <td>0</td>
                        <td>{getResult(5)}</td>
                        <td>24</td>
                    </tr>
                </tbody>
            </Table>
        </>
    );
}

export default PomsTable;