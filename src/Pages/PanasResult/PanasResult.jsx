import { useEffect, useState } from 'react';
import {Container} from 'react-bootstrap'
import { Breadcrumb } from "react-bootstrap";
import PanasBarChart from '../../Components/PanasBarChart/PanasBarChart';
import { GetTestData} from '../../services/api';

const positiveScale = [1, 3, 5, 8, 10, 11, 13, 15, 17, 19];
const negativeScale = [2, 4, 6, 7, 9, 12, 14, 16, 18, 20];

function PanasResult () {
    let result = [10,50];
    const [positive, setPositive] = useState(0);
    const [negative, setNegative] = useState(0);

    useEffect(() => {
        const getResult = async () => {
            if(true){
                let response = await GetTestData('panas', '62143d5136279a07f49b5ba8');
                if(response.status === 200){    
                    let data = response.data;
                    console.log("Dados aqui ==> ", data.Questions);
                    console.log("Soma das respostas positivas ==> ", getSumResult(positiveScale, data.Questions));
                    console.log("Soma das respostas negativas ==> ", getSumResult(negativeScale, data.Questions));
                }
                else{
                    console.log("Error data response", response);
                }
            }
        }
        const getSumResult = (answers, Questions) => {
            let sum = 0;
            answers.forEach(element => {
                sum += Questions[element-1].answer;
            });
            return sum;
        }


        getResult();
      });
    return (
        <>
        <Breadcrumb>
                <Breadcrumb.Item href='./dashboard'>Página Inicial</Breadcrumb.Item>
                <Breadcrumb.Item href='./results'>Resultados</Breadcrumb.Item>
                <Breadcrumb.Item active>Resultado PANAS</Breadcrumb.Item>
            </Breadcrumb>
            <Container>
                <h1>Resultado Panas</h1>
                <PanasBarChart Data={result}/>
            </Container>
        </>
    );
}

export default PanasResult;