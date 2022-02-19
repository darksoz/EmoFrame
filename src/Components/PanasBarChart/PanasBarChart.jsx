import ReactApexChart from "react-apexcharts";

function PanasBarChart() {

    let dados = {

        series: [{
            name: 'Valor Mínimo',
            data: [10, 10]
        }, {
            name: 'Valor Obtido',
            data: [25, 38]
        }, {
            name: 'Valor Máximo',
            data: [50, 50]
        }],
        options: {
            chart: {
                type: 'bar',
                height: 350
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '55%',
                    endingShape: 'rounded'
                },
            },
            dataLabels: {
                enabled: true
            },
            stroke: {
                show: true,
                width: 2,
                colors: ['transparent']
            },
            xaxis: {
                categories: ['Afetos Positivos', 'Afetos Negativos'],
            },
            yaxis: {
                title: {
                    text: 'Valor'
                }
            },
            fill: {
                opacity: 1
            },
           
        },


    };

    return (
        <>
            <ReactApexChart options={dados.options}
                series={dados.series}
                type="bar"
                height={350} />
        </>
    )
}
export default PanasBarChart;