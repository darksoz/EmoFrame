import { React, useEffect } from "react";
import ImcInput from "./ImcInput";

function InputText({ text, question, answers, imc }) {
  const sliceText = (text) => text.split("_");
  const lastItem = sliceText(text).length - 1;
  
  const returnAnswer = (id) => {
    if (answers != undefined){
      if (answers.length != 0) {
        let answer = answers.find((item) => item.id == id);
        if (answer !== undefined && answer !== null) {
          if (answer.answer !== null && answer.answer !== undefined) {
            return answer.answer;
          } else {
            return "";
          }
        }else{
          return "";
        }
      
      }else{
        return "";
      }}
  };
  return (
    <>
      <p className="h5">
        {imc === "imc" ? (
          <ImcInput text={text} question={question} answers={answers}/>
        ) : (
          <>
            {question} -
            {sliceText(text).map((texto, index) => (
              <>
                {texto}
                {lastItem !== index ? (
                  <input
                    type="text"
                    key={index}
                    style={{ width: "30%", height: "10px" }}
                    name={question + "." + (index + 1)}
                    placeholder={returnAnswer(question + "." + (index + 1))}
                  />
                  
                ) : (
                  ""
                )}
              </>
            ))}
          </>
        )}
      </p>
    </>
  );
}

export default InputText;