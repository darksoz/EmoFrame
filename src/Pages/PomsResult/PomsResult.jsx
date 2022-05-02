import { Breadcrumb, Container, Row, Col } from "react-bootstrap";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import PomsTable from "../../Components/PomsTable/PomsTable";

let T_scale = [1, 10, 14, 18, 26, 18];
let D_scale = [6, 13, 15, 19, 27, 33];
let H_scale = [2, 8, 12, 22, 25, 32];
let F_scale = [3, 11, 17, 20, 30, 36];
let V_scale = [4, 7, 9, 24, 29, 34];
let C_scale = [5, 16, 21, 23, 31, 35];
let Reverse = [23, 26, 31];

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
                        <PomsTable />
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
            </Container>
            <Footer />
        </>
    );
}
export default PomsResult;