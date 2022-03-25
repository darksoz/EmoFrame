import Container from 'react-bootstrap/Container';
import ReactApexChart from "react-apexcharts";
import { Form } from 'react-bootstrap';

function PageDimension() {
    let dados = {

        series: [{
            name: 'Series 1',
            data: [80, 50, 30, 40],
        }],
        options: {
            chart: {
                height: 600,
                type: 'radar',
            },
            title: {
                text: ''
            },
            xaxis: {
                categories: ['Psicológica', 'Biológica', 'Social', 'Quedas']
            }
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
                    height={600} />

                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label className='h5'>O(a) idoso(a) apresenta outras demandas não contempladas no mapa? Se sim, especificar:
                    </Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                </Form>
            </Container>
        </>
    )
}
export default PageDimension;