import { Checkbox } from "@material-ui/core";
import { React } from "react";

function ImagesAspect(props) {
  const returnAnswer = (id) => {
    if (props.answers.length != 0 && props.answers !== undefined) {
      let answer = props.answers.find((item) => item.id == id);
      if (answer !== undefined && answer !== null) {
        if (answer.answer !== null && answer.answer !== undefined) {
          return answer.answer;
        } else {
          return "";
        }
      }
    } else {
      return "";
    }
  };
  return (
    <>
      <div className="mt-5" style={{ alignItens: "flex-start" }}>
        <img 
          src={`${process.env.PUBLIC_URL}/` + props.images}
          alt={props.images}
          className="fig-page"
        />
        {props.question === 3 ? (
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            name={props.question + "." + props.name}
            rows="1"
            value={returnAnswer(props.question + "." + props.name)}
          ></textarea>
        ) : (
          <Checkbox
            name={props.question + "." + props.name}
            value={1}
          ></Checkbox>
        )}
        
        
      </div>
    </>
  );
}

export default ImagesAspect;