import Button from '@restart/ui/esm/Button';
import { useEffect, useState } from 'react';
import {Container} from 'react-bootstrap'
import SusScoreReference from "../../Components/SusScoreReference/SusScoreReference";
import SusVariationPlot from "../../Components/SusVariationPlot/SusVariationPlot";
import { GetTestResult } from '../../services/api';
import { getIdTestData } from '../../services/auth';
import { Breadcrumb } from "react-bootstrap";

let mockData = {
    "Username": "Suzane Santos dos Santos",
    "Instrument": "sus",
    "Datetime": "2021-12-04",
    "Questions":[
        {
            "id": 1,
            "answer": 5
        },
        {
            "id": 2,
            "answer": 3
        },
        {
            "id": 3,
            "answer": 1
        },
        {
            "id": 4,
            "answer": 4
        },
        {
            "id": 5,
            "answer": 5
        },
        {
            "id": 6,
            "answer": 3
        },
        {
            "id": 7,
            "answer": 1
        },
        {
            "id": 8,
            "answer": 4
        },
        {
            "id": 9,
            "answer": 5
        },
        {
            "id": 10,
            "answer": 3
        },
        {
            "id": 11,
            "answer": 1
        },
        {
            "id": 12,
            "answer": 4
        },
        {
            "id": 13,
            "answer": 5
        },
        {
            "id": 14,
            "answer": 3
        },
        {
            "id": 15,
            "answer": 1
        },
        {
            "id": 16,
            "answer": 4
        },
        {
            "id": 17,
            "answer": 5
        },
        {
            "id": 18,
            "answer": 3
        },
        {
            "id": 19,
            "answer": 1
        },
        {
            "id": 20,
            "answer": 4
        },
        {
            "id": 21,
            "answer": 5
        },
        {
            "id": 22,
            "answer": 3
        },
        {
            "id": 23,
            "answer": 1
        },
        {
            "id": 24,
            "answer": 4
        },
        {
            "id": 25,
            "answer": 5
        },
        {
            "id": 26,
            "answer": 3
        },
        {
            "id": 27,
            "answer": 1
        },
        {
            "id": 28,
            "answer": 4
        },
    ],
    "Solution": "Testes dos carros"
}
function SusResult(){
    const [questions, setQuestions] = useState([]);
    const [name, setName] = useState('');
    const [datetime, setDatetime] = useState('');


    const GetSusScore = () =>{
        let sum = 0;
        questions.forEach(item => {
            sum += item.answer % 2 !== 0 ? Math.abs(item.answer - 1) :  Math.abs(item.answer - 5);
        });
        let result =  sum * 7;
        console.log("sus score result here ==> ", result);
        return result;
    }

    const GetVariationAnswer = () => {
        let variation = [];
        let result;
        questions.forEach(item => {
            result = 3 - item.answer;
            variation.push(result);
        });
        return variation
    }
    useEffect(() => {
        const getResult = async () => {
            if(getIdTestData() != null){
                let json = {"id": getIdTestData()}
                json = JSON.stringify(json);
                let response = await GetTestResult('sus', json);
                if(response.status === 201){    
                    let data = response.data;
                    setQuestions(data.Questions);
                    setName(data.Username);
                    setDatetime(data.Datetime);
                    console.log("Dados salvos aqui ==> ", response.data);
                }
                else{
                    console.log("Error data response");
                }
            }
            else{
                setQuestions(mockData.Questions);
                setName(mockData.Username);
                setDatetime(mockData.Datetime);
            }
        }
        getResult();
      });
    return(
        <>
            <Breadcrumb>
                <Breadcrumb.Item href='./dashboard'>Página Inicial</Breadcrumb.Item>
                <Breadcrumb.Item href='./results'>Resultados</Breadcrumb.Item>
                <Breadcrumb.Item active>Resultado Sus</Breadcrumb.Item>
            </Breadcrumb>
            <Container>
                <h1>{name}/{datetime}</h1>
                <Button style={{backgroundColor:"#00bfa5",
                                borderColor: "#00bfa5",
                                margin:"20px",
                                padding:"10px"}}>
                        <h1>Sus Score = {GetSusScore()}</h1>
                </Button>
                <SusScoreReference/>
                <SusVariationPlot Variation={GetVariationAnswer()}/>
            </Container>
        </>
    )
}

export default SusResult;
