import { Breadcrumb, Container, Button, Row, Col } from "react-bootstrap";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import LineChartPoms from "../../Components/LineChartPoms/LineChartPoms";
import PomsTable from "../../Components/PomsTable/PomsTable";

function PomsResult() {
    return (
        <>
            <Header />
            <Breadcrumb>
                <Breadcrumb.Item href='/dashboard'>Página Inicial</Breadcrumb.Item>
                <Breadcrumb.Item href='/searchResults'>Resultados</Breadcrumb.Item>
                <Breadcrumb.Item active>Resultado POMS</Breadcrumb.Item>
            </Breadcrumb>
            <Container>

                <Row class="mt-5">
                    <Col>
                    <PomsTable/>
                    </Col>
                </Row>
               
                <Row>

                <h5>Fórmula de Perturbação Total de Humor (PTH)</h5>

                    <Col>

        
                        <div class="text-center border border-dark p-4"> 
        
                          <h3>PTH =[(tensão + depressão + hostilidade + fadiga + confusão)- vigor]+ 100 = X
                        </h3>  
                        </div>
                        <p>Quanto maior o valor de PTH, maior é a piora do humor.</p>
                    </Col>
                </Row>

                <Row>
                    <Col>
                    <LineChartPoms/>
                    </Col>
                </Row>

               

              
            </Container>
            <Footer />
        </>
    );
}
export default PomsResult;