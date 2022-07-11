import Container from "react-bootstrap/Container";
import ReactApexChart from "react-apexcharts";

function PageDemands(props) {
  const categories = props.subAspectos.map(
    (subAspecto) => subAspecto.subAspectos
  );
  const dataI = props.subAspectos.map((a) => a.total);
  const data = props.subAspectos.map((a) =>
    ((a.total *100)/  a.maxima).toFixed(2))
  let dados = {
    series: [
      {
        name: "Series 1",
        data: data,
      },
    ],
    options: {
      chart: {
        height: 800,
        type: "radar",
      },
      dataLabels: {
        enabled: true,
        background: {
          enabled: true,
          borderRadius:2,
        }
      },
      title: {
        text: "",
      },
      xaxis: {
        categories: ['Quedas', 'Deficit Sensorial', 'Incapacidade Funcional', 'Desnutricao', 'Doenças Cardiovasculares', 'Uso Inadequado de Medicamentos', 'Atitudes Negativas', 'Depressao', 'Deficit Cognitivo', 'Baixo Suporte Social', 'Problemas Ambientais', 'Violencia'],
        labels:{
          style: {
            colors: ["#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000"],
            fontSize: "16px",
            fontWeight: "bold",
            
          }
        }
      },
      yaxis:{
        min:0,
        max:100
      }
    },
  };

  return (
    <>
      <Container>
        <h3>Demandas Prioritárias</h3>
        <ReactApexChart
          options={dados.options}
          series={dados.series}
          type="radar"
          height={800}
        />
      </Container>
    </>
  );
}

export default PageDemands;
