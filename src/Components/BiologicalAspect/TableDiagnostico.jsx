import { React } from "react";
import "./Table.css";

function TableDiagnostico(props) {
  let diagnostico;
  let nmDiagnosticos = 0;
  let nmRemedios = 0;
  const retornaDiagnostico = (dados, questao) => {
    if (dados.length > +questao) {
      let diagnostico = dados.find((item) => item.id == questao);
      if (diagnostico != undefined) {
        diagnostico = diagnostico.answer;
        return diagnostico;
      }
    }
  };

  if (props.remedios.length >= 43) {
    diagnostico = props.diagnosticoItem;
    nmDiagnosticos = retornaDiagnostico(diagnostico, "44.1");
    nmRemedios = retornaDiagnostico(diagnostico, "46.1");
  }

  return (
    <>
      <table class="tg">
        <thead>
          <tr>
            <th class="tg-0lax" rowspan="2">
              <strong>Nº de diagnósticos: {nmDiagnosticos}</strong>
            </th>
            <th class="tg-0lax" colspan="2">
              <strong>Uso de medicamento inapropriado: {nmRemedios}</strong>
            </th>
          </tr>
          <tr>
            <th class="tg-0lax">Sim</th>
            <th class="tg-0lax">Não</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="tg-0lax">1</td>
            <td class="tg-0lax">9</td>
            <td class="tg-0lax">18</td>
          </tr>
          <tr>
            <td class="tg-0lax">2</td>
            <td class="tg-0lax">6</td>
            <td class="tg-0lax">15</td>
          </tr>
          <tr>
            <td class="tg-0lax">3</td>
            <td class="tg-0lax">2</td>
            <td class="tg-0lax">11</td>
          </tr>
          <tr>
            <td class="tg-0lax">4</td>
            <td class="tg-0lax">0</td>
            <td class="tg-0lax">7</td>
          </tr>
          <tr>
            <td class="tg-0lax">5</td>
            <td class="tg-0lax">0</td>
            <td class="tg-0lax">4</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default TableDiagnostico;
