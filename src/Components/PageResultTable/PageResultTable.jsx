import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import { Button } from "react-bootstrap";
import "../../Pages/Page/Page.css";
import { Form } from "react-bootstrap";

function PageResultTable(props) {
  let aspectos = props.aspectos;
  const sumValue = (a) => {
    let sum = 0;
    a.forEach((element) => {
      sum += parseInt(element.answer);
    });
    return sum;
  };
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
              <Button
              style={{
                backgroundColor: "#00bfa5",
                borderColor: "#00bfa5",
                margin: "20px",
                padding: "10px",
              }}
            >
              <h1>Sus Score = {sumValue(props.questions)}</h1>
            </Button>
            </td>
            
          </tr>
          <tr className="bg-lgrey">
            <td>
              <Form>
                {["checkbox"].map((type) => (
                  <div key={`default-${type}`} className="mb-3">
                    <Form.Check
                      type={type}
                      id={`default-${type}`}
                      label="&ge; 70 PONTOS = RISCO BAIXO"
                    />
                  </div>
                ))}
              </Form>
            </td>
            <td>
              <Form>
                {["checkbox"].map((type) => (
                  <div key={`default-${type}`} className="mb-3">
                    <Form.Check
                      type={type}
                      id={`default-${type}`}
                      label="69 A 40 PONTOS = RISCO MODERADO"
                    />
                  </div>
                ))}
              </Form>
            </td>
            <td>
              <Form>
                {["checkbox"].map((type) => (
                  <div key={`default-${type}`} className="mb-3">
                    <Form.Check
                      type={type}
                      id={`default-${type}`}
                      label="&le;  39 PONTOS = RISCO ALTO"
                    />
                  </div>
                ))}
              </Form>
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}
export default PageResultTable;
