function PomsForm(props) {
    return (
        <>
            <div class="form">
                <label class="statement-leap text-start">{props.Title}</label>
                <ul class="likert-leap">
                    <li>
                    <input class="form-check-input" type="radio" name={props.Name}value="1" required />
                        <label>Nada</label>
                    </li>
                    <li>
                    <input class="form-check-input" type="radio" name={props.Name}value="2" />
                        <label>Um Pouco</label>
                    </li>
                    <li>
                    <input class="form-check-input" type="radio" name={props.Name}value="3" />
                        <label>Moderadamente</label>
                    </li>
                    <li>
                    <input class="form-check-input" type="radio" name={props.Name}value="4" />
                    <label>Bastante</label>
                    </li>
                    <li>
                    <input class="form-check-input" type="radio" name={props.Name}value="5" />
                        <label>Muitíssimo</label>
                    </li>

                </ul>
            </div>
        </>
    );
}
export default PomsForm;