import PageDemands from "../../Components/PageDemands/PageDemands";
import PageResultTable from "../../Components/PageResultTable/PageResultTable";

function PageResult () {
    return (
        <>
        <h1>Resultado PAGE</h1>
        <PageResultTable/>
        <hr/>
        <PageDemands/>
        </>
    );
}
export default PageResult;