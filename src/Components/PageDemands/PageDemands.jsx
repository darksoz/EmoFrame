import Container from 'react-bootstrap/Container';
import ReactApexChart from "react-apexcharts";

function PageDemands () {

    let dados = {
          
        series: [{
          name: 'Series 1',
          data: [80, 50, 30, 40, 100, 20, 70, 60, 120, 10, 90, 110],
        }],
        options: {
          chart: {
            height: 800,
            type: 'radar',
          },
          title: {
            text: ''
          },
          xaxis: {
            categories: ['Déficit Sensorial', 'Incapacidade Funcional', 'Desnutrição', 'Doenças Cardiovasculares', 'Uso Inadequado de Medicamentos', 'Atitudes Negativas', 'Depressão', 'Déficit Cognitivo', 'Baixo Suporte Social', 'Problemas Ambientais', 'Violência', 'Quedas']
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
            height={800} />

            
        </Container>
        </>
    )
}

export default PageDemands;