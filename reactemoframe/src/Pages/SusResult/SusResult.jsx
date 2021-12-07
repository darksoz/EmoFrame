import { margin } from '@mui/system';
import Button from '@restart/ui/esm/Button';
import { useEffect, useState } from 'react';
import {Container} from 'react-bootstrap'
import SusScoreReference from "../../Components/SusScoreReference/SusScoreReference";
import SusVariationPlot from "../../Components/SusVariationPlot/SusVariationPlot";
import { GetTestResult } from '../../services/api';
import { getIdTestData } from '../../services/auth';
let data = {
    "Username": "suzane",
    "Datetime": 343434343434,
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
        let result =  sum * 2.5;
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
        getResult();
      });
    return(
        <>
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