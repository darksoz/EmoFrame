import { Form } from 'react-bootstrap';

function ActionPlanning (props) {
    
    return (
        <>
        <div className='border border-dark bg-lgrey text-white'>
                    <h3>PLANEJAMENTO DAS AÇÕES </h3>
                </div>

                <div className="border mb-3">

                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label className='h5'> 1. Identificação das Demandas/Problemas (listes as demandas/problemas identificadas na avaliação de acordo com a ordem de prioridade. Lembre-se de verificar se as prioridades da equipe são compatíveis com as prioridades do idoso/família).
                            </Form.Label>
                            <Form.Control as="textarea" rows={3} name='acao1' value={props.evaluation.acao1}/>
                        </Form.Group>
                    </Form>

                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label className='h5'> 2. Estabelecimento das Metas (estipule as metas a curto, médio e longo prazos para cada problema ou demanda identificada no item anterior).
                            </Form.Label>
                            <Form.Control as="textarea" rows={3} name='acao2' value={props.evaluation.acao2}/>
                        </Form.Group>
                    </Form>

                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label className='h5'> 3. Organização das Ações e dos Serviços (especifique as características das ações e dos serviços necessários para que a pessoa idosa alcance as metas estipuladas no item anterior – exemplo: número de visitas domiciliares, agendamento de consultas, intervenções, tratamentos, encaminhamentos, etc.).
                            </Form.Label>
                            <Form.Control as="textarea" rows={3}  name='acao3' value={props.evaluation.acao3}/>
                        </Form.Group>
                    </Form>
                </div>

        </>
    )
}
export default ActionPlanning;