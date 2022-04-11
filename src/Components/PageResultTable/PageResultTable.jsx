import Table from "react-bootstrap/Table";
import { Card } from "react-bootstrap";
import "../../Pages/Page/Page.css";

function PageResultTable(props) {
  let aspectos = props.aspectos;
  const sumValue = (value) => {
    let sum = 0;
    console.log("Valor => ", value);
    if(value.length > 0){
      value.forEach((element) => {
        sum += parseInt(element.answer);
      });
      return sum;
    }
  };

  const GetRisc = value => {
    
       // let value = props.Factors[index];
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
                ASPECTOS PSICOLÓGICOS (MÁXIMA = 14 PONTOS):{" "}
                {sumValue(aspectos["Aspectos Psicologicos"])}
              </div>
              <div>
                ASPECTOS BIOLÓGICOS (MÁXIMA = 36 PONTOS):{" "}
                {sumValue(aspectos["Aspectos Biologicos"])}
              </div>

              <div>
                ASPECTOS SOCIAIS (MÁXIMA = 32 PONTOS):{" "}
                {sumValue(aspectos["Aspectos Sociais"])}
              </div>

              <div>
                QUEDAS (MÁXIMA = 16 PONTOS):{" "}
                {sumValue(aspectos["Aspectos Multidimensionais"])}
              </div>
            </td>
          </tr>
          <tr className="bg-lgrey">
            <td colSpan={3}>
              PONTUAÇÃO TOTAL (MÁXIMA = 98 PONTOS): {sumValue(props.questions)}
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
                &ge; 70 PONTOS = RISCO BAIXO
              </div>
            </td>
            <td>
              <div className="mb-3">
                69 A 40 PONTOS = RISCO MODERADO
              </div>
            </td>
            <td>
              <div className="mb-3">
                &le;  39 PONTOS = RISCO ALTO
              </div>
            </td>
          </tr>
        </tbody>
      </Table>

      <Card className='bg-lgrey my-5' >
        <h1 className="text-white">Risco de Vulnerabilidade Biopsicossocial: {GetRisc(sumValue(props.questions))}</h1> 
      </Card>
    </>
  );
}
export default PageResultTable;