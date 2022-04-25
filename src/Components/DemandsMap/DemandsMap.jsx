import PageDemands from "../../Components/PageDemands/PageDemands";
import PageDimension from "../../Components/PageDimensions/PageDimensions";

function DemandsMap(props) {
  const sumValue = (a) => {
    let sum = 0;
    a.forEach((element) => {
      sum += parseInt(element.answer);
    });
    return sum;
  };
  const subAspectos = [
    {
      subAspectos: "Quedas",
      min: 86,
      max: 102,
    },
    {
      subAspectos: "Deficit Sensorial",
      min: 14,
      max: 19,
    },
    {
      subAspectos: "Incapacidade Funcional",
      min: 19,
      max: 25,
    },
    {
      subAspectos: "Desnutricao",
      min: 25,
      max: 32,
    },
    {
      subAspectos: "Doenças Cardiovasculares",
      min: 32,
      max: 41,
    },
    {
      subAspectos: "Uso Inadequado de Medicamentos",
      min: 41,
      max: 53,
    },
    {
      subAspectos: "Atitudes Negativas",
      min: 6,
      max: 8,
    },
    {
      subAspectos: "Depressao",
      min: 8,
      max: 14,
    },
    {
      subAspectos: "Deficit Cognitivo",
      min: 0,
      max: 6,
    },
    {
      subAspectos: "Baixo Suporte Social",
      min: 53,
      max: 62,
    },
    {
      subAspectos: "Problemas Ambientais",
      min: 62,
      max: 78,
    },
    {
      subAspectos: "Violencia",
      min: 78,
      max: 86,
    },
  ];

  for (const element of subAspectos) {
    let test = props.questions.slice(element.min, element.max);
    element['total'] = sumValue(test);
  }
  
  return (
    <>
      <div className="border border-dark bg-lgrey text-white">
        <h3>Mapa de Demandas</h3>
      </div>
      <div className="border mb-3">
        <PageDemands subAspectos={subAspectos}/>
        <PageDimension dominios={subAspectos} evaluation={props.evaluation}/>
      </div>
    </>
  );
}
export default DemandsMap;