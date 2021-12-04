import {Container} from 'react-bootstrap'
import SusScoreReference from "../../Components/SusScoreReference/SusScoreReference";
import SusVariationPlot from "../../Components/SusVariationPlot/SusVariationPlot";
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
    const GetSusScore = () =>{
        let questions = data.Questions;
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
        let questions = data.Questions;
        let result;
        questions.forEach(item => {
            result = 3 - item.answer;
            variation.push(result);
        });
        return variation
    }
    GetSusScore();
    return(
        <>
            <h1>Sus result</h1>
            
            <Container>
                <SusScoreReference/>
                <SusVariationPlot Variation={GetVariationAnswer()}/>
            </Container>
            
        </>
    )
}

export default SusResult;