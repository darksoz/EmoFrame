import { Checkbox } from "@material-ui/core";
import { React } from "react";

function ImagesAspect(props) {
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