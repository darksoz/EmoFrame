import '../../Pages/Leap/Leap.css';
function LeapForm(props) {
    return (
        <div class="form">
            <label class="statement-leap text-start">{props.Title}</label>
            <ul class="likert-leap">
                <li>
                    <input class="form-check-input" type="radio" name={props.Name}value="1" required />
                    <p>1 <br></br>(Muito Fraco)</p>
                </li>
                <li>
                    <input class="form-check-input" type="radio" name={props.Name}value="2" />
                    <p>2 <br></br>(Fraco)</p>
                </li>
                <li>
                    <input class="form-check-input" type="radio" name={props.Name} value="3" />
                    <p>3 <br></br>(Mais ou Menos)</p>
                </li>
                <li>
                    <input class="form-check-input" type="radio" name={props.Name} value="4" />
                    <p>4 <br></br>(Forte)</p>
                </li>
                <li>
                    <input class="form-check-input" type="radio" name={props.Name} value="5" />
                    <p>5 <br></br>(Muito Forte)</p>
                </li>
            </ul>
        </div>
    );
}

export default LeapForm;