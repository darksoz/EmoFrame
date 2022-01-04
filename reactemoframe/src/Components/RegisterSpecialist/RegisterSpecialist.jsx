import { Container } from "react-bootstrap";

function RegisterSpecialist() {
    return (
        <>
            <Container >
                <h3>Cadastrar Especialista</h3>
                <form class="form-horizontal">

                    <div className="form-group">
                        <label class="col-sm-10 control-label text-start">Nome</label>
                        <input type="text" className="form-control" placeholder="Nome" />
                    </div>

                    <div className="form-group">
                        <label class="col-sm-10 control-label text-start">Sobrenome</label>
                        <input type="text" className="form-control" placeholder="Sobrenome" />
                    </div>

                    <div className="form-group">
                        <label class="col-sm-10 text-start control-label">Nome Social</label>
                        <input type="text" className="form-control" placeholder="Nome social" />
                    </div>

                    <div className="form-group">
                        <label class="col-sm-10 text-start control-label">Especialidade</label>
                        <select class="form-select"
                            id="especialidade"
                            aria-label="Default select example">
                            <option value="" selected> Selecione a especialidade</option>
                            <option value="0">Gerontologia</option>
                            <option value="2">Psicologia</option>
                            <option value="3">Fsioterapia</option>
                            <option value="4">Terapia Ocupacional</option>
                            <option value="5">Computação</option>
                            <option value="1">Outra</option>
                        </select>

                    </div>

                    <div className="form-group">
                        <label class="col-sm-10 text-start control-label">Vínculo</label>
                        <input type="text" className="form-control" placeholder="Instituição a qual está vinculado(a)" />
                    </div>

                    <div className="form-group">
                        <label class="col-sm-10 text-start control-label">Telefone</label>
                        <input type="email" className="form-control" placeholder="Número do telefone" />
                    </div>

                    <div className="form-group">
                        <label class="col-sm-10 text-start control-label">Gênero</label>
                        <select class="form-select" aria-label="Default select example">
                            <option selected>Selecione o gênero</option>
                            <option value="1">Feminino</option>
                            <option value="2">Masculino</option>
                            <option value="3"> Não sei/Prefiro não dizer</option>
                            <option value="4">Outro</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label class="col-sm-10 text-start control-label">E-mail</label>
                        <input type="email" className="form-control" placeholder="E-mail" />
                    </div>

                    <div className="form-group">
                        <label class="col-sm-10 text-start control-label">Senha</label>
                        <input type="password" className="form-control" placeholder="Senha" />
                    </div>
                    <button type="submit" className="btn whitebutton btn-lg btn-block">Cadastrar</button>
                </form>
            </Container>
        </>
    )
}
export default RegisterSpecialist; 