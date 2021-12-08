import { Table } from "react-bootstrap";
import { setIdTestData } from "../../services/auth";

function FilterTable(props) {
    const handleResult = (id) =>{
        setIdTestData(id);
    }
    return (
        <>
            <Table hover>
                <tbody>
                    {
                       (props.Data.map((content, index)=> (
                           <>
                            <tr>
                                <td>{index+1}</td>
                                <td>{content.Username}<br/>
                                <a href={`/${content.Instrument}Result`} onClick={handleResult(content._id)}>Ver resultados</a>
                                </td>
                                <td>{content.Instrument}</td>
                                <td>{content.Datetime}</td>
                             </tr>
                           </>
                       )))
                    }
                </tbody>
            </Table>
        </>
    )
}

export default FilterTable;