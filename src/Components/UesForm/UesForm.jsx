function UesForm (props) {
    return (
        <>
         <div class="form">
            <label class="statement-leap text-start">{props.Title}</label>
            <ul class="likert-sus">
                <li>
                    <input class="form-check-input" type="radio" name={props.Name} value="5" required />
                    <p>Concordo Fortemente</p>
                </li>
                <li>
                    <input class="form-check-input" type="radio" name={props.Name} value="4" />
                    <p>Concordo Parcialmente</p>
                </li>
                <li>
                    <input class="form-check-input" type="radio" name={props.Name} value="3" />
                    <p>Não concordo nem discordo</p>
                </li>
                <li>
                    <input class="form-check-input" type="radio" name={props.Name} value="2" />
                    <p>Discordo Parcialmente</p>
                </li>
                <li>
                    <input class="form-check-input" type="radio" name={props.Name} value="1" />
                    <p>Discordo Fortemente</p>
                </li>
            </ul>
        </div>
        </>
    )
}
export default UesForm;