import { React } from "react";

function ImagesAspect(props) {
  return (
    <>
      <img src={`${process.env.PUBLIC_URL}/` + props.images} alt="" />
      <textarea
        name={props.question + "." + props.name}
        id={props.question + "." + props.name}
        rows="2"
        cols="10"
      ></textarea>
    </>
  );
}

export default ImagesAspect;