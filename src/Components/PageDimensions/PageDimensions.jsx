import Container from "react-bootstrap/Container";
import ReactApexChart from "react-apexcharts";
import { Form } from "react-bootstrap";

function PageDimension(props) {
  let psicologico = ["Deficit Cognitivo", "Atitudes Negativas", "Depressao"];
  let biologicos = [
    "Doenças Cardiovasculares",
    "Deficit Sensorial",
    "Incapacidade Funcional",
    "Desnutricao",
    "Uso Inadequado de Medicamentos",
  ];
  let sociais = ["Baixo Suporte Social", "Violencia", "Problemas Ambientais"];
  let quedas = ["Quedas"];
  const somaPhase = (dados, phase) => {
    let soma = 0;
    for (const element of dados) {
      if (phase.includes(element.subAspectos)) {
        soma += element.total;
      }
    }
    return soma;
  };

  let totalSociais = (somaPhase(props.dominios, sociais) * 100) / 31;
  let totalBiologicos = (somaPhase(props.dominios, biologicos) * 100) / 33;
  let totalPsicologico = (somaPhase(props.dominios, psicologico)*100) / 19;
  let totalQuedas = (somaPhase(props.dominios, quedas) * 100) / 16;
  console.log([totalPsicologico, totalBiologicos, totalSociais, totalQuedas])
  let dados = {
    series: [
      {
        name: "Series 1",
        data: [totalPsicologico, totalBiologicos, totalSociais, totalQuedas],
      },
    ],
    options: {
      chart: {
        height: 600,
        type: "radar",
      },
      title: {
        text: "",
      },
      xaxis: {
        categories: ["Psicológica", "Biológica", "Socioambiental", "Tranversal"],
      },
    },
  };
  return (
    <>
      <Container>
        <h3>Dimensão Prioritária</h3>
        <ReactApexChart
          options={dados.options}
          series={dados.series}
          type="radar"
          height={600}
        />

        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label className="h5">
              O(a) idoso(a) apresenta outras demandas não contempladas no mapa?
              Se sim, especificar:
            </Form.Label>
            <Form.Control as="textarea" rows={3} name='demandas' value={props.evaluation.demandas}/>
          </Form.Group>
        </Form>
      </Container>
    </>
  );
}
export default PageDimension;