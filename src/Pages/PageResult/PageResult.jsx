import { Container } from "react-bootstrap";
import PageResultTable from "../../Components/PageResultTable/PageResultTable";
import GerontologistAssessment from "../../Components/GerontologistAssessment/GerontologistAssessment";
import ActionPlanning from "../../Components/ActionPlanning/ActionPlanning";
import ActionsImplementation from "../../Components/ActionsImplementation/ActionsImplementation";
import ActionsControl from "../../Components/ActionsControl/ActionsControl";
import DemandsMap from "../../Components/DemandsMap/DemandsMap";
import { Breadcrumb } from "react-bootstrap";

function PageResult() {
    return (
        <>
           <Breadcrumb>
                <Breadcrumb.Item href='./dashboard'>Página Inicial</Breadcrumb.Item>
                <Breadcrumb.Item href='./results'>Resultados</Breadcrumb.Item>
                <Breadcrumb.Item active>Resultado PAGe</Breadcrumb.Item>
            </Breadcrumb>
            <Container>
                <h1>Resultado PAGE</h1>
        
                <PageResultTable />

                <DemandsMap/>

                <GerontologistAssessment/>

                <ActionPlanning/>

                <ActionsImplementation/>

                <ActionsControl/>

            </Container>
        </>
    );
}
export default PageResult;