import { useState } from "react";
import { Container } from "react-bootstrap";
import { Register } from "../../services/api";
import ModalTest from "../Modal/ModalTest";
import "./RegisterUser.css";

function RegisterUser(props) {

    const [registerData, setRegisterData] = useState({});
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [show, setShow] = useState(false);
    const [success, setSuccess] = useState(false);

    

    const handleChange = (e) => {
        if(e.target.name !== "ReligionOption"){
            const { name, value } = e.target;
            setRegisterData(prevState => ({
                ...prevState,
                [name]: value,
                FullName: `${registerData.Name} ${registerData.Surname}`,
                Usertype: `${props.Usertype}`
            }));
        }
    }

    const handleSubmit = async() => {
        if(registerData.Religion === undefined){
            setRegisterData(prevState => ({
                ...prevState,
                Religion: "N/A"
            }));
        }
        setRegisterData(prevState => ({
            ...prevState,
            FullName: `${registerData.Name} ${registerData.Surname}`,
            Usertype: `${props.Usertype}`
        }));
        let json = JSON.stringify(registerData);

        let response = await Register(json, 'patient');
        if (response.status === 201) {
            setTitle("cadastro concluído");
            setBody("Usuário cadastrado(a) com sucesso");
            setSuccess(true);
            setShow(true);
        }
        else {
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
                <h3>Cadastrar Usuário</h3>
                <div onChange={handleChange}>
                    <div className="form-group">
                        <select class="form-select col-sm-10 control-label" name="Respondent" aria-label="Default select example" required>
                            <option disabled selected>Quem está respondendo esse cadastro? </option>
                            <option value="Usuário">Usuário</option>
                            <option value="Responsável">Responsável</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label class="col-sm-10 control-label text-start">Nome</label>
                        <input type="text" className="form-control" placeholder="Nome" name="Name" required />
                    </div>

                    <div className="form-group">
                        <label class="col-sm-10 control-label text-start">Sobrenome</label>
                        <input type="text" className="form-control" placeholder="Sobrenome" name="Surname" required />
                    </div>

                    <div className="form-group">
                        <label class="col-sm-10 text-start control-label">Nome Social</label>
                        <input type="text" className="form-control" placeholder="Nome social" name="SocialName" />
                    </div>

                    <div className="form-group">
                        <label class="col-sm-10 text-start control-label">Data de Nascimento</label>
                        <input type="date" className="form-control" placeholder="Data de nascimento" name="Birthdate" required />
                    </div>


                    <div className="form-group">
                        <label class="col-sm-10 text-start control-label">Endereço</label>
                        <input type="text" className="form-control" placeholder="Endereço" name="Address" required />
                    </div>

                    <div className="form-group">
                        <label class="col-sm-10 text-start control-label">Telefone</label>
                        <input type="text" className="form-control" placeholder="Número do telefone" name="PhoneNumber" required />
                    </div>

                    <div className="form-group">
                        <label class="col-sm-10 text-start control-label">Gênero</label>
                        <select class="form-select" name="Gender" aria-label="Default select example" >
                            <option disabled selected>Selecione o gênero</option>
                            <option value="Feminino">Feminino</option>
                            <option value="Masculino">Masculino</option>
                            <option value="Não sei"> Não sei/Prefiro não dizer</option>
                            <option value="Outro">Outro</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label class="col-sm-10 text-start control-label">Raça autodeclarada</label>
                        <select class="form-select" aria-label="Default select example" name="Race">
                            <option disabled selected>Selecione a raça</option>
                            <option value="Amarelo">Amarelo</option>
                            <option value="Branco">Branco</option>
                            <option value="Indígena">Indígena</option>
                            <option value="Pardo">Pardo</option>
                            <option value="Preto">Preto</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label class="col-sm-10 text-start control-label">Escolaridade</label>
                        <select class="form-select inputbox mt-3" aria-label="Default select example" name="Schooling">
                            <option disabled selected>Selecione a escolaridade</option>
                            <option value="Analfabeto">Analfabeto(a)</option>
                            <option value="Fundamental Incompleto">Ensino fundamental (incompleto)</option>
                            <option value="Fundamental Completo">Ensino fundamental (completo)</option>
                            <option value="Médio Incompleto">Ensino médio (incompleto)</option>
                            <option value="Médio Completo">Ensino médio (completo)</option>
                            <option value="Superior Incompleto">Ensino superior (incompleto)</option>
                            <option value="Superior Completo">Ensino superior (completo)</option>
                            <option value="Superior Com Pós">Ensino superior (com pós-graduação)</option>
                        </select>
                    </div>

                 

                    <div className="form-group" >
                        <label class="col-sm-10 text-start control-label">Renda Individual Mensal</label>
                        <select class="form-select" aria-label="Default select example" name="IndividualIncome" required>
                            <option disabled selected>Selecione a renda individual mensal</option>
                            <option value="BPC">BPC</option>
                            <option value="Até um salário mínimo">Até um salário mínimo</option>
                            <option value="Entre 1 e 2 salários mínimos">Entre 1 e 2 salários mínimos</option>
                            <option value="Entre 2 e 3 salários mínimos">Entre 2 e 3 salários mínimos</option>
                            <option value="Entre 3 e 4 salários mínimos">Entre 3 e 4 salários mínimos</option>
                            <option value="Entre 4 e 5 salários mínimos">Entre 4 e 5 salários mínimos</option>
                            <option value="Entre 5 e 10 salários mínimos">Entre 5 e 10 salários mínimos</option>
                            <option value="Mais de 10 salários mínimos">Mais de 10 salários mínimos</option>
                            <option value="Prefere não informar">Prefere não informar</option>
                        </select>
                    </div>

                    <div className="form-group" >
                        <label class="col-sm-10 text-start control-label">Renda Familiar Mensal</label>
                        <select class="form-select" aria-label="Default select example" name="FamilyIncome" required>
                            <option disabled selected>Selecione a renda familiar mensal</option>
                            <option value="BPC">BPC</option>
                            <option value="Até um salário mínimo">Até um salário mínimo</option>
                            <option value="Entre 1 e 2 salários mínimos">Entre 1 e 2 salários mínimos</option>
                            <option value="Entre 2 e 3 salários mínimos">Entre 2 e 3 salários mínimos</option>
                            <option value="Entre 3 e 4 salários mínimos">Entre 3 e 4 salários mínimos</option>
                            <option value="Entre 4 e 5 salários mínimos">Entre 4 e 5 salários mínimos</option>
                            <option value="Entre 5 e 10 salários mínimos">Entre 5 e 10 salários mínimos</option>
                            <option value="Mais de 10 salários mínimos">Mais de 10 salários mínimos</option>
                            <option value="Prefere não informar">Prefere não informar</option>
                            <option value="Não se aplica">Não se aplica</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label class="col-sm-10 text-start control-label">E-mail</label>
                        <input type="email" className="form-control" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" placeholder="E-mail" name="Email" required />
                    </div>

                    <div className="form-group" >
                        <label class="col-sm-10 text-start control-label">Senha</label>
                        <input type="password" className="form-control" placeholder="Senha" name="Password" required />
                    </div>

                    <div className="form-group">
                        <label class="col-sm-10 text-start control-label">Informações Adicionais</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name="AdditionalInfo" placeholder="Informações adicionais que você considera importante"></textarea>

                    </div>
                    <button onClick={handleSubmit} className="btn whitebutton btn-lg btn-block">Cadastrar</button>
                </div>
            </Container>
        </>
    );
}

export default RegisterUser;