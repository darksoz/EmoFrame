import { Container } from "react-bootstrap";

function RegisterSpecialist() {
    return (
        <>
            <Container >
                <h3>Cadastrar Especialista</h3>
                <form class="form-horizontal">

                    <div className="form-group">
                        <label class="col-sm-10 control-label text-start">Nome</label>
                        <input type="text" className="form-control" placeholder="Nome" name="Name" required/>
                    </div>

                    <div className="form-group">
                        <label class="col-sm-10 control-label text-start">Sobrenome</label>
                        <input type="text" className="form-control" placeholder="Sobrenome" name="Surname" required/>
                    </div>

                    <div className="form-group">
                        <label class="col-sm-10 text-start control-label">Nome Social</label>
                        <input type="text" className="form-control" placeholder="Nome social" name="SocialName"/>
                    </div>

                    <div className="form-group">
                        <label class="col-sm-10 text-start control-label">Especialidade</label>
                        <select class="form-select"
                            id="especialidade"
                            name="Specialty"
                            aria-label="Default select example">
                            <option value="" selected> Selecione a especialidade</option>
                            <option value="Gerontologia">Gerontologia</option>
                            <option value="Psicologia">Psicologia</option>
                            <option value="Fsioterapia">Fsioterapia</option>
                            <option value="TO">Terapia Ocupacional</option>
                            <option value="Computação">Computação</option>
                            <option value="Outra">Outra</option>
                        </select>

                    </div>

                    <div className="form-group">
                        <label class="col-sm-10 text-start control-label">Vínculo</label>
                        <input type="text" className="form-control" placeholder="Instituição a qual está vinculado(a)" name="Bond" required />
                    </div>

                    <div className="form-group">
                        <label class="col-sm-10 text-start control-label">Telefone</label>
                        <input type="email" className="form-control" placeholder="Número do telefone" name="PhoneNumber" required/>
                    </div>

                    <div className="form-group">
                        <label class="col-sm-10 text-start control-label">Gênero</label>
                        <select class="form-select" aria-label="Default select example" name="Gender">
                            <option selected>Selecione o gênero</option>
                            <option value="Feminino">Feminino</option>
                            <option value="Masculino">Masculino</option>
                            <option value="Não sei"> Não sei/Prefiro não dizer</option>
                            <option value="Outro">Outro</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label class="col-sm-10 text-start control-label">E-mail</label>
                        <input type="email" className="form-control" placeholder="E-mail" name="Email" required/>
                    </div>

                    <div className="form-group">
                        <label class="col-sm-10 text-start control-label">Senha</label>
                        <input type="password" className="form-control" placeholder="Senha" name="Password" required/>
                    </div>
                    <button type="submit" className="btn whitebutton btn-lg btn-block">Cadastrar</button>
                </form>
            </Container>
        </>
    )
}
export default RegisterSpecialist; 