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
            text: 'Answers Variation',
            align: 'left'
          },
          grid: {
            row: {
              colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
              opacity: 0.5
            },
          },
          xaxis: {
            categories: ['Q1', 'Q2', 'Q3', 'Q4'],
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