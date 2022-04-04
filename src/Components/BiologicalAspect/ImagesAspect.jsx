import { React } from "react";

function ImagesAspect(props) {
  return (
    <>
      <ul>
        {" "}
        <img src={`${process.env.PUBLIC_URL}/` + props.images} alt="" className="fig-page"/>
        <textarea
          class="form-control mt-5"
          id="exampleFormControlTextarea1"
          name={props.question + "." + props.name}
          rows="1"
        ></textarea>
      </ul>
    </>
  );
}

export default ImagesAspect;
