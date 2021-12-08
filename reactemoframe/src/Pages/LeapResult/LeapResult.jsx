import Container from 'react-bootstrap/Container'
import LeapReferenceTable from '../../Components/LeapReferenceTable/LeapReferenceTable';
import LeapResultTable from '../../Components/LeapResultTable/LeapResultTable';
import { Breadcrumb } from "react-bootstrap";
import { getIdTestData } from '../../services/auth';
import { GetTestResult } from '../../services/api';
import {useState } from 'react';
import {useAsyncEffect} from 'use-async-effect';
import {mockData} from '../../MockData/Leap/LeapMock';

let pf1_l = [3, 10, 12, 13, 21, 23, 24, 25, 26, 29, 31, 35, 39, 40];
let pf1_w = [-0.32, 0.32, 0.28, 0.66, 0.67, 0.43, 0.53, 0.31, 0.37, 0.27, 0.51, 0.52, 0.59, 0.47];
let pf2_l = [3, 8, 9, 14, 17, 27, 36, 39];
let pf2_w = [0.29, 0.73, 0.63, 0.26, 0.26, 0.34, 0.69, 0.33];
let pf3_l = [2, 12, 14, 15, 19, 27, 29, 33];
let pf3_w = [0.48, 0.43, 0.44, 0.65, 0.32, 0.34, 0.5, 0.57];
let pf4_l = [2, 5, 10, 14, 19, 28, 33];
let pf4_w = [0.33, 0.67, 0.6, 0.41, 0.68, 0.32, 0.37];
let pf5_l = [7, 18, 34];
let pf5_w = [0.82, -0.76, 0.64];
let pf6_l = [4, 26, 31, 34, 37, 38];
let pf6_w = [0.26, 0.57, 0.27, 0.27, 0.39, 0.8];
let pf7_l = [2, 3, 4, 12, 22, 27, 28, 32];
let pf7_w = [0.29, 0.25, 0.41, 0.29, 0.71, 0.31, 0.3, 0.56];
let pf8_l = [16, 20, 37];
let pf8_w = [0.6, 0.6, 0.68];
let pf9_l = [3, 4, 17, 20, 26, 27, 28];
let pf9_w = [0.36, 0.35, 0.88, 0.49, 0.33, -0.31, 0.29];
let pf10_l = [23, 27, 28, 30, 40];
let pf10_w = [0.56, 0.33, 0.38, 0.66, 0.35];
let pf11_l = [1, 12, 14, 25, 28, 31];
let pf11_w = [0.65, 0.28, 0.32, 0.45, 0.34, 0.26];
let pf12_l = [3, 6, 11, 12];
let pf12_w = [0.26, 0.59, 0.72, -0.34];

function LeapResult() {
  const [questions, setQuestions] = useState([]);
  const [name, setName] = useState('');
  const [datetime, setDatetime] = useState('');
  const [factors, setFactors] = useState([]);

  useAsyncEffect(async () => {
    const getResult = async () => {
      if (getIdTestData() != null) {
        let json = { "id": getIdTestData() }
        json = JSON.stringify(json);
        let response = await GetTestResult('leap', json);
        if (response.status === 201) {
          let data = response.data;
          setQuestions(data.Questions);
          setName(data.Username);
          setDatetime(data.Datetime);
          console.log("Dados salvos aqui ==> ", response.data);
        }
        else {
          console.log("Error data response");
        }
      }
      else {
        setQuestions(mockData);
      }
    }
    const getFactors = () => {
      if (questions && factors.length === 0) {
        setFactors(oldArray => [...oldArray, factorCalculation(pf1_l, pf1_w)]);
        setFactors(oldArray => [...oldArray, factorCalculation(pf2_l, pf2_w)]);
        setFactors(oldArray => [...oldArray, factorCalculation(pf3_l, pf3_w)]);
        setFactors(oldArray => [...oldArray, factorCalculation(pf4_l, pf4_w)]);
        setFactors(oldArray => [...oldArray, factorCalculation(pf5_l, pf5_w)]);
        setFactors(oldArray => [...oldArray, factorCalculation(pf6_l, pf6_w)]);
        setFactors(oldArray => [...oldArray, factorCalculation(pf7_l, pf7_w)]);
        setFactors(oldArray => [...oldArray, factorCalculation(pf8_l, pf8_w)]);
        setFactors(oldArray => [...oldArray, factorCalculation(pf9_l, pf9_w)]);
        setFactors(oldArray => [...oldArray, factorCalculation(pf10_l, pf10_w)]);
        setFactors(oldArray => [...oldArray, factorCalculation(pf11_l, pf11_w)]);
        setFactors(oldArray => [...oldArray, factorCalculation(pf12_l, pf12_w)]);
      }
    }
    await getResult();
    getFactors();
  });

  const factorCalculation = (locution, weight) => {
    if (questions && questions.length > 0) {
      let presence = 0;
      let max = 0;
      let min = 0;
      let sumPresence = 0;
      let sumMax = 0;
      let sumMin = 0;

      locution.forEach((element, index) => {
        sumPresence += questions[element - 1].answer * weight[index];
        sumMax += weight[index] < 0 ? weight[index] * 1 : weight[index] * 5;
        sumMin += weight[index] < 0 ? weight[index] * 5 : weight[index] * 1;
      })
      presence = sumPresence / locution.length;
      max = sumMax / locution.length;
      min = sumMin / locution.length;
      return (presence - min) / (max - min);
    }
  }

  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item href='./dashboard'>Página Inicial</Breadcrumb.Item>
        <Breadcrumb.Item active>Resultado Leap</Breadcrumb.Item>
      </Breadcrumb>
      <Container>
        <h1>Resultado LEAP</h1>

        <LeapReferenceTable />

        <LeapResultTable Factors={factors} />
      </Container>

    </>
  );
}

export default LeapResult;