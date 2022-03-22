import PageDemands from "../../Components/PageDemands/PageDemands";
import PageDimension from "../../Components/PageDimensions/PageDimensions";

function DemandsMap () {
    return (
        <>
               <div className='border border-dark bg-lgrey text-white'>
                    <h3>Mapa de Demandas</h3>
                </div>
                <div className="border mb-3">
                    <PageDemands/>
                    <PageDimension />
                </div>
        </>
    )
}
export default DemandsMap;