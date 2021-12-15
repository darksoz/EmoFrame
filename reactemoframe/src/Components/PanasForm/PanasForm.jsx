import '../../Pages/Panas/Panas.css';
import Container from 'react-bootstrap/Container';
function PanasForm(props) {
    return (
        <>
            <Container>
                <div className="form">
                <label class="statement-panas text-start">{props.Title}</label>
                    <ul class="likert-panas">
                        <li>
                            <input class="form-check-input" type="radio" name={props.Name}value="1" required  />
                            <p>1 <br></br>(Nada ou muito ligeiramente)</p>
                        </li>
                        <li>
                            <input class="form-check-input" type="radio" name={props.Name}value="2" />
                            <p>2 <br></br>(Um pouco)</p>
                        </li>
                        <li>
                            <input class="form-check-input" type="radio" name={props.Name}value="3" />
                            <p>3 <br></br>(Moderadamente)</p>
                        </li>
                        <li>
                            <input class="form-check-input" type="radio" name={props.Name}value="4" />
                            <p>4 <br></br>(Bastante)</p>
                        </li>
                        <li>
                            <input class="form-check-input" type="radio" name={props.Name}value="5" />
                            <p>5 <br></br>(Extremamente)</p>
                        </li>
                        

                    </ul>


                </div>
            </Container>
        </>
    );
}
export default PanasForm;