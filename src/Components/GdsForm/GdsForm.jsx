import '../../Pages/Gds/Gds.css';
function GdsForm (props) {
    return (
        <>
        <div class="form   gdsdiv">
        <label class="statement text-start">{props.Title}</label>
          
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name={props.Name}value="1" required />
                    <label class="form-check-label">Não</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name={props.Name}value="2" />
                    <label class="form-check-label" >Sim</label>
                </div>
            
        </div>  
        </>



    );
}

export default GdsForm;