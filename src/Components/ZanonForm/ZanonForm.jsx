import Container from 'react-bootstrap/Container';
import '../../Pages/Zanon/Zanon.css';
function ZanonForm(props) {
    return (
        <>
            <Container>
                <div className="form">
                    <label class="statement-zanon text-start">{props.Title}</label>
                    <ul class="likert-zanon">
                        <li>
                            <input class="form-check-input" type="radio" name={props.Name}value="1" required />
                            <p> Não tem a ver comigo</p>
                        </li>
                        <li>
                            <input class="form-check-input" type="radio" name={props.Name}value="2" />
                            <p> Tem pouco a ver comigo</p>
                        </li>
                        <li>
                            <input class="form-check-input" type="radio" name={props.Name}value="3" />
                            <p> Ás vezes tem e às vezes não tem a ver comigo</p>
                        </li>
                        <li>
                            <input class="form-check-input" type="radio" name={props.Name}value="4" />
                            <p> Tem muito a ver comigo</p>
                        </li>
                        <li>
                            <input class="form-check-input" type="radio" name={props.Name}value="5" />
                            <p> Tem tudo a ver comigo</p>
                        </li>
                    </ul>
                </div>
            </Container>
        </>
    );
}
export default ZanonForm;