import { Link } from "@mui/material";
import { Table } from "react-bootstrap";
import { setIdTestData } from "../../services/auth";
const ticksToDate = require('ticks-to-date');

function FilterTable(props) {

    const getDateimeFromTicks = (ticks) =>{
        const date = ticksToDate(ticks);
        return `${date.getUTCDay()}/${date.getUTCMonth()}/${date.getUTCFullYear()}`
    }
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
                                <td>{content.Solution}</td>
                                <td>{getDateimeFromTicks(content.Datetime)}</td>
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