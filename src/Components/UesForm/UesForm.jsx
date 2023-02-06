function UesForm () {
    return (
        <>
         <div class="form">
            <label class="statement-leap text-start">{props.Title}</label>
            <ul class="likert-sus">
                <li>
                    <input class="form-check-input" type="radio" name={props.Name} value="5" required />
                    <p>(5)<br/>Concordo Fortemente</p>
                </li>
                <li>
                    <input class="form-check-input" type="radio" name={props.Name} value="4" />
                    <p>(4)<br/>Concordo Parcialmente</p>
                </li>
                <li>
                    <input class="form-check-input" type="radio" name={props.Name} value="3" />
                    <p>(3)<br/>Não concordo nem discordo</p>
                </li>
                <li>
                    <input class="form-check-input" type="radio" name={props.Name} value="2" />
                    <p>(2)<br/>Discordo Parcialmente</p>
                </li>
                <li>
                    <input class="form-check-input" type="radio" name={props.Name} value="1" />
                    <p>(1)<br/>Discordo Fortemente</p>
                </li>
            </ul>
        </div>
        </>
    )
}
export default UesForm;