import './Panas.css';
import Container from 'react-bootstrap/Container';
import { Breadcrumb } from "react-bootstrap";
import PanasExample from '../../Components/PanasExample/PanasExample';
import PanasForm from '../../Components/PanasForm/PanasForm';
import arrayShuffle from 'array-shuffle';
import { Questions1 } from "../../services/Questions/Panas/Panas.js";


let firstQuestions = arrayShuffle(Questions1);


function Panas() {
    return (
        <>
            <Breadcrumb>
                <Breadcrumb.Item href='./dashboard'>Página Inicial</Breadcrumb.Item>
                <Breadcrumb.Item active>Panas</Breadcrumb.Item>
            </Breadcrumb>
            <Container>

                <PanasExample />

                {
                    firstQuestions.map((content, index) => (
                        <>
                            <div style={{
                                marginBottom: "20px",
                            }}>
                                <PanasForm Title={content.Title}
                                    Name={content.Name} />
                                <hr></hr>
                            </div>
                        </>
                    ))
                }
            </Container>

        </>
    );
}

export default Panas;