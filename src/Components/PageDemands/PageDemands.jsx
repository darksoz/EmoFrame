import Container from 'react-bootstrap/Container';
import ReactApexChart from "react-apexcharts";

function PageDemands (props) {
    const categories = props.subAspectos.map(subAspecto => subAspecto.subAspectos);
    const data = props.subAspectos.map(a=> ((a.total/ props.questions) * 100).toFixed(2)) 
    console.log('data',data)
    console.log('categories',categories)
    console.log('props.subAspectos',props.questions)
    let dados = {
          
        series: [{
          name: 'Series 1',
          data: data,
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
            categories: categories,
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