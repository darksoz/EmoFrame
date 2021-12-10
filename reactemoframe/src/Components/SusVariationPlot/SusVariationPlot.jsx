import ReactApexChart from "react-apexcharts";

function SusVariationPlot(props) {

    let dados = {
          
        series: [{
            name: "Desktops",
            data: props.Variation
        }],
        options: {
          chart: {
            height: 350,
            type: 'line',
            zoom: {
              enabled: false
            }
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'straight'
          },
          title: {
            text: 'Variação das respostas',
            align: 'left'
          },
          grid: {
            row: {
              colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
              opacity: 0.5
            },
          },
          xaxis: {
            categories: ['Q1', 'Q2', 'Q3', 'Q4','Q5','Q6','Q7','Q8','Q9','Q10',
                        'Q11','Q12','Q13','Q14','Q15','Q16','Q17','Q18','Q19','Q10',
                        'Q21','Q22','Q23','Q24','Q25','Q26', 'Q27', 'Q28',],
          }
        },
      
      
      };
    return (
        <>
            <ReactApexChart options={dados.options} 
                            series={dados.series} 
                            type="line" 
                            height={350} />
        </>
    )
}
export default SusVariationPlot;