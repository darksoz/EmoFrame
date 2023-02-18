import { Container } from "react-bootstrap";
import UesForm from "../UesForm/UesForm";
import Row from 'react-bootstrap/Row';


function UesExample() {
    return (
        <>
            <Container>
                <Row>
                    <h1 class="likert-leap-header mt-2">UES-BR</h1>
                </Row>
                <Row>
                    <p class="lead ml-5 p-3">
                        As afirmações a seguir pedem que você reflita sobre sua experiência de envolvimento com a aplicação avaliada. Para cada afirmação, use a escala a seguir para indicar o que é mais verdadeiro para você:                     
                    </p>

                    <UesForm/>
                    <hr></hr>


                </Row>

            </Container>
        </>
    );
}
export default UesExample;