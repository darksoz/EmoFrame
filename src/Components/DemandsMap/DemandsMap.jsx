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

  const sumDominio = (arr) => {
    let sum = 0;
    if (arr.length > 0) {
      arr.forEach((element) => {
        sum += parseInt(element.answer);
      });
      return sum;
    }
  };
  const pontuacaoDom = (dominio, answers, dominios) => {
    let teste = dominios.find((item) => item.subAspectos == dominio);
    let testearr = answers.filter((item) => {
      return teste.aspectos.includes(item.id);
    });

    return sumDominio(testearr);
  };
  const subAspectos = [
    {
      subAspectos: "Quedas",
      min: 84,
      max: 100,
      maxima: 16,
      aspectos: [
        "88",
        "89",
        "90",
        "91",
        "92",
        "93",
        "94",
        "95",
        "96",
        "97",
        "98",
        "99",
        "100",
        "101",
        "102",
        "103",
        "104",
      ],
    },
    {
      subAspectos: "Deficit Sensorial",
      min: 19,
      max: 23,
      maxima: 4,
      aspectos: ["20", "21", "22", "23"],
    },
    {
      subAspectos: "Incapacidade Funcional",
      min: 23,
      max: 29,
      maxima: 6,
      aspectos: ["24", "25", "26", "27", "28", "29"],
    },
    {
      subAspectos: "Desnutricao",
      min: 29,
      max: 35,
      maxima: 6,
      aspectos: ["30", "31", "32", "33", "34", "35"],
    },
    {
      subAspectos: "Doenças Cardiovasculares",
      min: 35,
      max: 43,
      maxima: 8,
      aspectos: ["36", "37", "38", "39", "40", "41", "42", "43"],
    },
    {
      subAspectos: "Uso Inadequado de Medicamentos",
      min: 43,
      max: 52,
      aspectos: [
        "44",
        "45",
        "46",
        "47",
        "48",
        "49",
        "50",
        "51",
        "52",
        "53",
        "54",
      ],
      maxima: 9,
    },
    {
      subAspectos: "Atitudes Negativas",
      min: 6,
      max: 14,
      maxima: 8,
      aspectos: ["7", "8", "9", "10", "11", "12", "13", "14"],
    },
    {
      subAspectos: "Depressao",
      min: 14,
      max: 19,
      maxima: 5,
      aspectos: ["15", "16", "17", "18", "19"],
    },
    {
      subAspectos: "Deficit Cognitivo",
      min: 0,
      max: 6,
      maxima: 6,
      aspectos: ["1", "2", "3", "4", "5", "6"],
    },
    {
      subAspectos: "Baixo Suporte Social",
      min: 52,
      max: 60,
      maxima: 8,
      aspectos: ["55", "56", "57", "58", "59", "60", "61", "62", "63"],
    },
    {
      subAspectos: "Problemas Ambientais",
      min: 68,
      max: 84,
      maxima: 15,
      aspectos: [
        "72",
        "73",
        "74",
        "75",
        "76",
        "77",
        "78",
        "79",
        "80",
        "81",
        "82",
        "83",
        "84",
        "85",
        "86",
        "87",
      ],
    },
    {
      subAspectos: "Violencia",
      min: 60,
      max: 68,
      maxima: 8,
      aspectos: ["64", "65", "66", "67", "68", "69", "70", "71"],
    },
  ];
  if (props.questions.length > 0) {
    for (const element of subAspectos) {
      let test = props.questions.slice(element.min, element.max);
      element["total"] = sumValue(test);
    }
  }

  return (
    <>
      <div className="border border-dark bg-lgrey text-white">
        <h3>Mapa de Demandas</h3>
      </div>
      <div className="border mb-3">
        <PageDemands
          subAspectos={subAspectos}
          questions={sumValue(props.questions)}
        />
        <PageDimension dominios={subAspectos} evaluation={props.evaluation} />
      </div>
    </>
  );
}
export default DemandsMap;
