import Footer from '../../Components/Footer/Footer';
import { Breadcrumb, Card, Col, Container, Row } from 'react-bootstrap';
import Header from '../../Components/Header/Header';
import { RediretToPage } from '../../services/utils';
function MoreInfo() {
    return (
        <>
            <Header />
            <Breadcrumb>
                <Breadcrumb.Item href='/' style={{marginLeft:'12px'}}>Ínicio</Breadcrumb.Item>
                <Breadcrumb.Item active>Saiba mais</Breadcrumb.Item>
            </Breadcrumb>

            <Container>
                <Row>
                    <blockquote>
                        <p className='h1'> Sobre o EmoFrame </p>
                    </blockquote>
                </Row>
                <hr></hr>
                <Row>
                    <h3>
                        Analisar aspectos emocionais de usuários, quando estes interagem com soluções computacionais interativas, constitui-se um desafio para profissionais da Computação. Em diversas situações, tal avaliação fica a cargo dos profissionais especialistas do domínio estudado. Este projeto busca reunir diferentes instrumentos para a avaliação de respostas emocionais em um framework, o EmoFrame.
                    </h3>
                </Row>

                <Row className='mt-5'>
                    <h4 className='mb-4'> O EmoFrame tem como função</h4>
                    <div class="col-sm-4">
                        <div className='text-center p-3 border border-dark bgA'>
                            <div>
                                <p>Auxiliar o profissional da Computação a encontrar ferramentas adequadas para o público alvo da sua aplicação, considerando as particularidades dos usuários.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div className='text-center p-3 border border-dark bgB'>
                            <div>
                                <p >Auxiliar profissionais, sobretudo da área da Saúde, a aplicarem seus instrumentos ou protocolos de forma sistematizada e com rápida visualização dos resultados.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div className='text-center p-3 border border-dark bgC'>
                            <div>
                                <p >Viabilizar que profissionais da Computação, possam usar instrumentos de outros domínios de modo a obter resultados sobre a efetividade no uso da sua solução.</p>
                            </div>
                        </div>
                    </div>
                </Row>

                <Row>
                    <h4 className='mb-4 mt-4'> Acesso ao EmoFrame</h4>
                    <blockquote>
                        <p className='lead'>O EmoFrame possui duas interfaces distintas, uma para o especialista e outra para o usuário. Apenas um especialista pode cadastrar um usuário.</p> 
                    </blockquote>

                    <blockquote>
                        <p className='lead'> Para solicitar seu cadastro como especialista entre em contato conosco.</p>
                        <button class="btn whitebutton btn-lg" onClick={() => RediretToPage('contactus')}>Contato</button>
                    </blockquote>

                </Row>
            </Container>
            <Footer />

        </>
    )
}
export default MoreInfo;