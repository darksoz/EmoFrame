function WhoqolForm(props) {
return (
    <>
      <div class="form">
            <label class="statement-leap text-start">{props.Title}</label>
            <ul class="likert-leap">
                <li>
                    <input class="form-check-input" type="radio" name={props.Name}value="1" required />
                    <p>{props.Option1}</p>
                </li>
                <li>
                    <input class="form-check-input" type="radio" name={props.Name}value="2" />
                    <p>{props.Option2}</p>
                </li>
                <li>
                    <input class="form-check-input" type="radio" name={props.Name} value="3" />
                    <p>{props.Option3}</p>
                </li>
                <li>
                    <input class="form-check-input" type="radio" name={props.Name} value="4" />
                    <p>{props.Option4}</p>
                </li>
                <li>
                    <input class="form-check-input" type="radio" name={props.Name} value="5" />
                    <p>{props.Option5}</p>
                </li>
            </ul>
        </div>
    </>
);
}
export default WhoqolForm;