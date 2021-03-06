import { Form } from 'react-bootstrap';

function GerontologistAssessment (props) {
    return (
        <>
        <div className='border border-dark bg-lgrey text-white'>
                    <h3>AVALIAÇÃO DO GERONTÓLOGO </h3>
                </div>

                <div className="border mb-3">
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Control as="textarea" placeholder="Campo para a avaliação do gerontólogo" rows={6} name='avaliacaoGerontologo' value={props.evaluation.avaliacaoGerontologo}/>
                        </Form.Group>
                    </Form>
                </div>
        </>
    )
}
export default GerontologistAssessment;