import Table from "react-bootstrap/Table";
import { Card } from "react-bootstrap";
import "../../Pages/Page/Page.css";

function PageResultTable(props) {
  let aspectos = props.aspectos;
  const sumValue = (value) => {
    let sum = 0;
    
    if(value.length > 0){
      value.forEach((element) => {
        sum += parseInt(element.answer);
      });
      return sum;
    }
  };

  const GetRisc = value => {
        if( value <= 39){
            return "Alto";
        }
        else if(value > 39 &&  value <= 69){
            return "Moderado";
        }
        else{
            return "Baixo";
        }
    
}

  return (
    <>
      <Table bordered>
        <tbody>
          <tr className="bg-lgrey">
            <td colSpan={3} className="border border-dark text-white h3">
              Escores
            </td>
          </tr>
          <tr>
            <td colSpan={2}>PONTUAÇÃO POR DIMENSÃO</td>
            <td className="custom">
              <div>
                ASPECTOS PSICOLÓGICOS (MÁXIMA = {aspectos["Aspectos Psicologicos"].length} PONTOS):{" "}
                {sumValue(aspectos["Aspectos Psicologicos"])}
              </div>
              <div>
                ASPECTOS BIOLÓGICOS (MÁXIMA = {aspectos["Aspectos Biologicos"].length} PONTOS):{" "}
                {sumValue(aspectos["Aspectos Biologicos"])}
              </div>

              <div>
                ASPECTOS SOCIOAMBIENTAIS (MÁXIMA = {aspectos["Aspectos Sociais"].length} PONTOS):{" "}
                {sumValue(aspectos["Aspectos Sociais"])}
              </div>

              <div>
                DOMÍNIO TRANSVERSAL (MÁXIMA = {aspectos["Aspectos Multidimensionais"].length} PONTOS):{" "}
                {sumValue(aspectos["Aspectos Multidimensionais"])}
              </div>
            </td>
          </tr>
          <tr className="bg-lgrey">
            <td colSpan={3}>
              PONTUAÇÃO TOTAL (MÁXIMA = 99 PONTOS): {sumValue(props.questions)}
            </td>
          </tr>
          <tr>
            <td colSpan={3}>
              CLASSIFICAÇÃO DE RISCO DE VULNERABILIDADE BIOPSICOSSOCIAL
              <br/>
         
            </td>
            
          </tr>
          <tr className="bg-lgrey">
            <td>
              <div className="mb-3">
                &ge; 75 PONTOS = RISCO BAIXO
              </div>
            </td>
            <td>
              <div className="mb-3">
                74 A 45 PONTOS = RISCO MODERADO
              </div>
            </td>
            <td>
              <div className="mb-3">
                &le;  44 PONTOS = RISCO ALTO
              </div>
            </td>
          </tr>
        </tbody>
      </Table>
      {
        GetRisc(sumValue(props.questions)) === "Alto" &&
        <Card className='my-5 bg-danger'>
          <h1 className="text-dark">Risco de Vulnerabilidade Biopsicossocial: {GetRisc(sumValue(props.questions))}</h1> 
        </Card>
      }
      {
        GetRisc(sumValue(props.questions)) === "Moderado" &&
        <Card className='my-5 bg-warning'>
          <h1 className="text-dark">Risco de Vulnerabilidade Biopsicossocial: {GetRisc(sumValue(props.questions))}</h1> 
        </Card>
      }
      {
        GetRisc(sumValue(props.questions)) === "Baixo" &&
        <Card className='my-5 bg-success' >
          <h1 className="text-dark">Risco de Vulnerabilidade Biopsicossocial: {GetRisc(sumValue(props.questions))}</h1> 
        </Card>
      }
    </>
  );
}
export default PageResultTable;