import { useState } from "react";
import { Container, Modal } from "react-bootstrap";
import { Register } from "../../services/api";
import ModalTest from "../Modal/ModalTest";

function RegisterSpecialist(props) {

    const [registerData, setRegisterData] = useState({});
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [show, setShow] = useState(false);
    const [success, setSuccess] = useState(false);
    
    const handleChange = (e) => {
        if(e.target.name !== "ReligionOption"){
            console.log(`Name: ${e.target.name}, Value: ${e.target.value}`);
            const { name, value } = e.target;
            setRegisterData(prevState => ({
                ...prevState,
                [name]: value
            }));
        }
    }

    const handleSubmit = async () => {
        setRegisterData(prevState => ({
            ...prevState,
            FullName: `${registerData.Name} ${registerData.Surname}`,
            Usertype: `${props.Usertype}`
        }));
        let json = JSON.stringify(registerData);
        
        let response = await    (json, 'specialist');
        if (response.status === 201) {
            console.log("Dados salvos aqui ==> ", response.data);   
            setTitle("cadastro concluído");
            setBody("Especialista cadastrado(a) com sucesso");
            setSuccess(true);
            setShow(true);
        }
        else {
            console.log("Erro ==> ", response.status);   
            setTitle("Erro ao realizar cadastro");
            setBody("Email já cadastrado");
            setSuccess(false);
            setShow(true);
        }
        
    }   

    return (
        <>
            <Container >
            <ModalTest Success={success} Title={title} Body={body} Reveal={show} Finish={"/dashboard"} Retry={true} />
                <h3>Cadastrar Especialista</h3>
                <div onChange={handleChange}>

                    <div className="form-group">
                        <label class="col-sm-10 control-label text-start">Nome</label>
                        <input type="text" className="form-control" name="Name" placeholder="Nome" />
                    </div>

                    <div className="form-group">
                        <label class="col-sm-10 control-label text-start">Sobrenome</label>
                        <input type="text" className="form-control" name="Surname" placeholder="Sobrenome" />
                    </div>

                    <div className="form-group">
                        <label class="col-sm-10 text-start control-label">Nome Social</label>
                        <input type="text" className="form-control" name="SocialName" placeholder="Nome social" />
                    </div>

                    <div className="form-group">
                        <label class="col-sm-10 text-start control-label">Especialidade</label>
                        <select class="form-select"
                            id="especialidade"
                            aria-label="Default select example" name="Specialty">
                            <option value="" selected> Selecione a especialidade</option>
                            <option value="Gerontologia">Gerontologia</option>
                            <option value="Psicologia">Psicologia</option>
                            <option value="Fisioterapia">Fsioterapia</option>
                            <option value="Terapia ocupacional">Terapia Ocupacional</option>
                            <option value="Computação">Computação</option>
                            <option value="Outra">Outra</option>
                        </select>

                    </div>

                    <div className="form-group">
                        <label class="col-sm-10 text-start control-label">Vínculo</label>
                        <input type="text" className="form-control" name="EmploymentPlace" placeholder="Instituição a qual está vinculado(a)" />
                    </div>

                    <div className="form-group">
                        <label class="col-sm-10 text-start control-label">Telefone</label>
                        <input type="email" className="form-control" name="PhoneNumber" placeholder="Número do telefone" />
                    </div>

                    <div className="form-group">
                        <label class="col-sm-10 text-start control-label">Gênero</label>
                        <select class="form-select" name="Gender" aria-label="Default select example">
                            <option selected disabled>Selecione o gênero</option>
                            <option value="Feminino">Feminino</option>
                            <option value="Masculno">Masculino</option>
                            <option value="Não sei"> Não sei/Prefiro não dizer</option>
                            <option value="Outro">Outro</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label class="col-sm-10 text-start control-label">E-mail</label>
                        <input type="email" className="form-control" name="Email" placeholder="E-mail" />
                    </div>

                    <div className="form-group">
                        <label class="col-sm-10 text-start control-label">Senha</label>
                        <input type="password" className="form-control" name="Password" placeholder="Senha" />
                    </div>
                    <button onClick={handleSubmit} type="submit" className="btn whitebutton btn-lg btn-block">Cadastrar</button>
                </div>
            </Container>
        </>
    )
}
export default RegisterSpecialist; 