import { useState } from "react";
import { Breadcrumb } from "react-bootstrap";
import SelectCountry from "../../Components/SelectCountry/SelectCountry";
import Tabs from "../../Components/Tabs/Tabs";
import "./UserRegister.css";


function UserRegister() {
  
    let [relVisibility, setRelVisibility] = useState(false);

    const Religion = () => {
        var e = document.getElementById("Religião");
        var strUser = e.value;
        if (parseInt(strUser) === 1) {
            setRelVisibility(true);
            console.log("Religião sim");
        }
        else {
            setRelVisibility(false);
            console.log("Religião não");
        }

    }

    return (
        <>
            <Breadcrumb>
                <Breadcrumb.Item href='./dashboard'>Página Inicial</Breadcrumb.Item>
                <Breadcrumb.Item active>Cadastrar Usuário</Breadcrumb.Item>
            </Breadcrumb>
            <Tabs active="register" />

            <div class="container card mt-3">

                <form class="form-horizontal">
                    <h3>Cadastrar Usuário</h3>

                    <div className="form-group">
                        <select class="form-select col-sm-10 control-label" name="Respondendo" aria-label="Default select example" required>

                            <option>Quem está respondendo esse cadastro? </option>
                            <option value="User">Usuário</option>
                            <option value="Responsável">Responsável</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label class="col-sm-10 control-label text-start">Nome</label>
                        <input type="text" className="form-control" placeholder="Nome" value="Nome" required/>
                    </div>

                    <div className="form-group">
                        <label class="col-sm-10 control-label text-start">Sobrenome</label>
                        <input type="text" className="form-control" placeholder="Sobrenome" value="Sobrenome" required/>
                    </div>

                    <div className="form-group">
                        <label class="col-sm-10 text-start control-label">Nome Social</label>
                        <input type="text" className="form-control" placeholder="Nome social" value="Nome Social" />
                    </div>

                    <div className="form-group">
                        <label class="col-sm-10 text-start control-label">Data de Nascimento</label>
                        <input type="date" className="form-control" placeholder="Data de nascimento" value="Data de nascimento" required/>
                    </div>

                    
                    <SelectCountry/>
                    
                    <div className="form-group">
                        <label class="col-sm-10 text-start control-label">Endereço</label>
                        <input type="text" className="form-control" placeholder="Endereço" value="Endereço" required/>
                    </div>

                    <div className="form-group">
                        <label class="col-sm-10 text-start control-label">Telefone</label>
                        <input type="text" className="form-control" placeholder="Número do telefone" value="Telefone" required/>
                    </div>

                    <div className="form-group">
                        <label class="col-sm-10 text-start control-label">Gênero</label>
                        <select class="form-select" aria-label="Default select example" name="gênero">
                            <option selected>Selecione o gênero</option>
                            <option value="Feminino">Feminino</option>
                            <option value="Masculino">Masculino</option>
                            <option value="Não sei"> Não sei/Prefiro não dizer</option>
                            <option value="Outro">Outro</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label class="col-sm-10 text-start control-label">Com quem você mora?</label>
                        <input type="text" className="form-control" placeholder="Com quem você mora?" value="Com quem você mora" required/>
                    </div>

                    <div className="form-group">
                        <label class="col-sm-10 text-start control-label">Raça autodeclarada</label>
                        <select class="form-select" aria-label="Default select example" name="raça">
                            <option selected>Selecione a raça</option>
                            <option value="Amarelo">Amarelo</option>
                            <option value="Branco">Branco</option>
                            <option value="Indígena">Indígena</option>
                            <option value="Pardo">Pardo</option>
                            <option value="Preto">Preto</option>
                        </select>
                    </div>

                    <div className="form-group" >
                        <label class="col-sm-10 text-start control-label">Possui alguma religião?</label>
                        <select class="form-select"
                            name="Religião"
                            id="Religião"
                            aria-label="Default select example"
                            onChange={() => Religion()}>
                            <option selected> Selecione uma opção</option>
                            <option value="Sim">Sim</option>
                            <option value="Não">Não</option>
                        </select>
                        {relVisibility === true && (
                            <div>
                                <label class="col-sm-10 text-start control-label">Religião</label>
                                <input type="text" className="form-control" placeholder="Religião" value="Religião" />
                            </div>
                        )}

                    </div>

                    <div className="form-group">
                        <label class="col-sm-10 text-start control-label">Escolaridade</label>
                        <select class="form-select inputbox mt-3" aria-label="Default select example" name="escolaridade">
                            <option selected>Selecione a escolaridade</option>
                            <option value="Analfabeto">Analfabeto(a)</option>
                            <option value="Ens. Fundamental Incompleto">Ensino fundamental (incompleto)</option>
                            <option value="Ens. Fundamental Completo">Ensino fundamental (completo)</option>
                            <option value="Ens. Médio Incompleto">Ensino médio (incompleto)</option>
                            <option value="Ens. Médio Completo">Ensino médio (completo)</option>
                            <option value="Ens. Superior Incompleto">Ensino superior (incompleto)</option>
                            <option value="Ens. Superior Completo">Ensino superior (completo)</option>
                            <option value="Ens. Superior Com Pós">Ensino superior (com pós-graduação)</option>

                        </select>
                    </div>

                    <div className="form-group">
                    <label class="col-sm-10 control-label text-start">De acordo com sua escolaridade, você estudou, formalmente, durante quantos anos?</label>
                    <input type="text" className="form-control" placeholder="Anos de estudo"  value="anos de estudo" required/>
                    </div>

                    <div className="form-group" >
                        <label class="col-sm-10 text-start control-label">Renda Individual Mensal</label>
                        <select class="form-select" aria-label="Default select example" name="Renda individual" required>
                                <option selected>Selecione a renda individual mensal</option>
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
                        <select class="form-select" aria-label="Default select example" name="Renda Familiar" required>
                                <option selected>Selecione a renda familiar mensal</option>
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
                        <input type="email" className="form-control" placeholder="E-mail" value="email" required/>
                    </div>

                    <div className="form-group">
                        <label class="col-sm-10 text-start control-label">Senha</label>
                        <input type="password" className="form-control" placeholder="Senha" value="senha" required/>
                    </div>

                    <div className="form-group">
                        <label class="col-sm-10 text-start control-label">Informações Adicionais</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" value="inf. adicionais" placeholder="Informações adicionais que você considera importante"></textarea>

                    </div>

                    <button type="submit" className="btn whitebutton btn-lg btn-block">Cadastrar</button>

                </form>


            </div>


        </>
    );
}

export default UserRegister;