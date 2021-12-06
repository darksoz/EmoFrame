import '../../Pages/Sus/Sus.css';
function SusForm(props) {
    return (  
    
    <div class="form">
    <label class="statement-leap text-start">{props.Title}</label>
    <ul class="likert-leap">
        <li>
            <input class="form-check-input" type="radio" name={props.Name}value="1" required />
            <p>Concordo Fortemente</p>
        </li>
        <li>
            <input class="form-check-input" type="radio" name={props.Name}value="2" />
            <p>Concordo Parcialmente</p>
        </li>
        <li>
            <input class="form-check-input" type="radio" name={props.Name} value="3" />
            <p>Neutro</p>
        </li>
        <li>
            <input class="form-check-input" type="radio" name={props.Name} value="4" />
            <p>Discordo Parcialmente</p>
        </li>
        <li>
            <input class="form-check-input" type="radio" name={props.Name} value="5" />
            <p>Discordo Fortemente</p>
        </li>
        <li>
            <input class="form-check-input" type="radio" name={props.Name} value="99" />
            <p>Não quero responder</p>
        </li>
    </ul>
</div>);
}
export default SusForm;