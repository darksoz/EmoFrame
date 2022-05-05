import ReactApexChart from "react-apexcharts";

function LineChartPoms (props) {  
  let dados = {
    series: [{
        name: "Desktops",
        data: props.ScaleResults
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
        text: '',
        align: 'left'
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.5
        },
      },
      xaxis: {
        categories: ['Tensão', 'Depressão', 'Hostilidade', 'Fadiga', 'Vigor', 'Confusão'],
      }
    },
  };

    return (
        <>
          <ReactApexChart   options={dados.options} 
                            series={dados.series} 
                            type="line" 
                            height={350}/>
        </>
    )
}

export default LineChartPoms;