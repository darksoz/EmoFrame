import { useState } from "react";
import Tabs from "../../Components/Tabs/Tabs";
import "./UserRegister.css";

function UserRegister() {
    let [relVisibility, setRelVisibility] = useState(false);

    const Religion = () => {
        var e = document.getElementById("Religião");
        var strUser = e.value;
        if (parseInt(strUser) == 1) {
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
            <Tabs active="register" />

            <div class="container card mt-3">

                <form class="form-horizontal">
                    <h3>Cadastrar Usuário</h3>

                    <div className="form-group">
                        <select class="form-select col-sm-10 control-label" aria-label="Default select example">

                            <option selected>Quem está respondendo esse cadastro? </option>
                            <option value="1">Usuário</option>
                            <option value="2">Responsável</option>
                        </select>
                    </div>

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
                        <label class="col-sm-10 text-start control-label">Data de Nascimento</label>
                        <input type="date" className="form-control" placeholder="Data de nascimento" />
                    </div>

                    <div className="form-group">
                        <label class="col-sm-10 text-start control-label"> Nacionalidade </label>
                        <select class="form-select" aria-label="Default select example">
                            <option selected>Selecione a nacionalidade</option>
                            <option value="África do Sul">África do Sul</option>
                            <option value="Albânia">Albânia</option>
                            <option value="Alemanha">Alemanha</option>
                            <option value="Andorra">Andorra</option>
                            <option value="Angola">Angola</option>
                            <option value="Anguilla">Anguilla</option>
                            <option value="Antigua">Antigua</option>
                            <option value="Arábia Saudita">Arábia Saudita</option>
                            <option value="Argentina">Argentina</option>
                            <option value="Armênia">Armênia</option>
                            <option value="Aruba">Aruba</option>
                            <option value="Austrália">Austrália</option>
                            <option value="Áustria">Áustria</option>
                            <option value="Azerbaijão">Azerbaijão</option>
                            <option value="Bahamas">Bahamas</option>
                            <option value="Bahrein">Bahrein</option>
                            <option value="Bangladesh">Bangladesh</option>
                            <option value="Barbados">Barbados</option>
                            <option value="Bélgica">Bélgica</option>
                            <option value="Benin">Benin</option>
                            <option value="Bermudas">Bermudas</option>
                            <option value="Botsuana">Botsuana</option>
                            <option value="Brasil">Brasil</option>
                            <option value="Brunei">Brunei</option>
                            <option value="Bulgária">Bulgária</option>
                            <option value="Burkina Fasso">Burkina Fasso</option>
                            <option value="botão">botão</option>
                            <option value="Cabo Verde">Cabo Verde</option>
                            <option value="Camarões">Camarões</option>
                            <option value="Camboja">Camboja</option>
                            <option value="Canadá">Canadá</option>
                            <option value="Cazaquistão">Cazaquistão</option>
                            <option value="Chade">Chade</option>
                            <option value="Chile">Chile</option>
                            <option value="China">China</option>
                            <option value="Cidade do Vaticano">Cidade do Vaticano</option>
                            <option value="Colômbia">Colômbia</option>
                            <option value="Congo">Congo</option>
                            <option value="Coréia do Sul">Coréia do Sul</option>
                            <option value="Costa do Marfim">Costa do Marfim</option>
                            <option value="Costa Rica">Costa Rica</option>
                            <option value="Croácia">Croácia</option>
                            <option value="Dinamarca">Dinamarca</option>
                            <option value="Djibuti">Djibuti</option>
                            <option value="Dominica">Dominica</option>
                            <option value="EUA">EUA</option>
                            <option value="Egito">Egito</option>
                            <option value="El Salvador">El Salvador</option>
                            <option value="Emirados Árabes">Emirados Árabes</option>
                            <option value="Equador">Equador</option>
                            <option value="Eritréia">Eritréia</option>
                            <option value="Escócia">Escócia</option>
                            <option value="Eslováquia">Eslováquia</option>
                            <option value="Eslovênia">Eslovênia</option>
                            <option value="Espanha">Espanha</option>
                            <option value="Estônia">Estônia</option>
                            <option value="Etiópia">Etiópia</option>
                            <option value="Fiji">Fiji</option>
                            <option value="Filipinas">Filipinas</option>
                            <option value="Finlândia">Finlândia</option>
                            <option value="França">França</option>
                            <option value="Gabão">Gabão</option>
                            <option value="Gâmbia">Gâmbia</option>
                            <option value="Gana">Gana</option>
                            <option value="Geórgia">Geórgia</option>
                            <option value="Gibraltar">Gibraltar</option>
                            <option value="Granada">Granada</option>
                            <option value="Grécia">Grécia</option>
                            <option value="Guadalupe">Guadalupe</option>
                            <option value="Guam">Guam</option>
                            <option value="Guatemala">Guatemala</option>
                            <option value="Guiana">Guiana</option>
                            <option value="Guiana Francesa">Guiana Francesa</option>
                            <option value="Guiné-bissau">Guiné-bissau</option>
                            <option value="Haiti">Haiti</option>
                            <option value="Holanda">Holanda</option>
                            <option value="Honduras">Honduras</option>
                            <option value="Hong Kong">Hong Kong</option>
                            <option value="Hungria">Hungria</option>
                            <option value="Iêmen">Iêmen</option>
                            <option value="Ilhas Cayman">Ilhas Cayman</option>
                            <option value="Ilhas Cook">Ilhas Cook</option>
                            <option value="Ilhas Curaçao">Ilhas Curaçao</option>
                            <option value="Ilhas Marshall">Ilhas Marshall</option>
                            <option value="Ilhas Turks & Caicos">Ilhas Turks & Caicos</option>
                            <option value="Ilhas Virgens (brit.)">Ilhas Virgens (brit.)</option>
                            <option value="Ilhas Virgens(amer.)">Ilhas Virgens(amer.)</option>
                            <option value="Ilhas Wallis e Futuna">Ilhas Wallis e Futuna</option>
                            <option value="Índia">Índia</option>
                            <option value="Indonésia">Indonésia</option>
                            <option value="Inglaterra">Inglaterra</option>
                            <option value="Irlanda">Irlanda</option>
                            <option value="Islândia">Islândia</option>
                            <option value="Israel">Israel</option>
                            <option value="Itália">Itália</option>
                            <option value="Jamaica">Jamaica</option>
                            <option value="Japão">Japão</option>
                            <option value="Jordânia">Jordânia</option>
                            <option value="Kuwait">Kuwait</option>
                            <option value="Latvia">Latvia</option>
                            <option value="Líbano">Líbano</option>
                            <option value="Liechtenstein">Liechtenstein</option>
                            <option value="Lituânia">Lituânia</option>
                            <option value="Luxemburgo">Luxemburgo</option>
                            <option value="Macau">Macau</option>
                            <option value="Macedônia">Macedônia</option>
                            <option value="Madagascar">Madagascar</option>
                            <option value="Malásia">Malásia</option>
                            <option value="Malaui">Malaui</option>
                            <option value="Mali">Mali</option>
                            <option value="Malta">Malta</option>
                            <option value="Marrocos">Marrocos</option>
                            <option value="Martinica">Martinica</option>
                            <option value="Mauritânia">Mauritânia</option>
                            <option value="Mauritius">Mauritius</option>
                            <option value="México">México</option>
                            <option value="Moldova">Moldova</option>
                            <option value="Mônaco">Mônaco</option>
                            <option value="Montserrat">Montserrat</option>
                            <option value="Nepal">Nepal</option>
                            <option value="Nicarágua">Nicarágua</option>
                            <option value="Niger">Niger</option>
                            <option value="Nigéria">Nigéria</option>
                            <option value="Noruega">Noruega</option>
                            <option value="Nova Caledônia">Nova Caledônia</option>
                            <option value="Nova Zelândia">Nova Zelândia</option>
                            <option value="Omã">Omã</option>
                            <option value="Palau">Palau</option>
                            <option value="Panamá">Panamá</option>
                            <option value="Papua-nova Guiné">Papua-nova Guiné</option>
                            <option value="Paquistão">Paquistão</option>
                            <option value="Peru">Peru</option>
                            <option value="Polinésia Francesa">Polinésia Francesa</option>
                            <option value="Polônia">Polônia</option>
                            <option value="Porto Rico">Porto Rico</option>
                            <option value="Portugal">Portugal</option>
                            <option value="Qatar">Qatar</option>
                            <option value="Quênia">Quênia</option>
                            <option value="Rep. Dominicana">Rep. Dominicana</option>
                            <option value="Rep. Tcheca">Rep. Tcheca</option>
                            <option value="Reunion">Reunion</option>
                            <option value="Romênia">Romênia</option>
                            <option value="Ruanda">Ruanda</option>
                            <option value="Rússia">Rússia</option>
                            <option value="Saipan">Saipan</option>
                            <option value="Samoa Americana">Samoa Americana</option>
                            <option value="Senegal">Senegal</option>
                            <option value="Serra Leone">Serra Leone</option>
                            <option value="Seychelles">Seychelles</option>
                            <option value="Singapura">Singapura</option>
                            <option value="Síria">Síria</option>
                            <option value="Sri Lanka">Sri Lanka</option>
                            <option value="St. Kitts & Nevis">St. Kitts & Nevis</option>
                            <option value="St. Lúcia">St. Lúcia</option>
                            <option value="St. Vincent">St. Vincent</option>
                            <option value="Sudão">Sudão</option>
                            <option value="Suécia">Suécia</option>
                            <option value="Suiça">Suiça</option>
                            <option value="Suriname">Suriname</option>
                            <option value="Tailândia">Tailândia</option>
                            <option value="Taiwan">Taiwan</option>
                            <option value="Tanzânia">Tanzânia</option>
                            <option value="Togo">Togo</option>
                            <option value="Trinidad & Tobago">Trinidad & Tobago</option>
                            <option value="Tunísia">Tunísia</option>
                            <option value="Turquia">Turquia</option>
                            <option value="Ucrânia">Ucrânia</option>
                            <option value="Uganda">Uganda</option>
                            <option value="Uruguai">Uruguai</option>
                            <option value="Venezuela">Venezuela</option>
                            <option value="Vietnã">Vietnã</option>
                            <option value="Zaire">Zaire</option>
                            <option value="Zâmbia">Zâmbia</option>
                            <option value="Zimbábue">Zimbábue</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label class="col-sm-10 text-start control-label"> Naturalidade </label>
                        <select class="form-select" aria-label="Default select example">
                            <option selected>Selecione a naturalidade</option>
                            <option value="AC">Acre</option>
                            <option value="AL">Alagoas</option>
                            <option value="AP">Amapá</option>
                            <option value="AM">Amazonas</option>
                            <option value="BA">Bahia</option>
                            <option value="CE">Ceará</option>
                            <option value="DF">Distrito Federal</option>
                            <option value="ES">Espirito Santo</option>
                            <option value="GO">Goiás</option>
                            <option value="MA">Maranhão</option>
                            <option value="MS">Mato Grosso do Sul</option>
                            <option value="MT">Mato Grosso</option>
                            <option value="MG">Minas Gerais</option>
                            <option value="PA">Pará</option>
                            <option value="PB">Paraíba</option>
                            <option value="PR">Paraná</option>
                            <option value="PE">Pernambuco</option>
                            <option value="PI">Piauí</option>
                            <option value="RJ">Rio de Janeiro</option>
                            <option value="RN">Rio Grande do Norte</option>
                            <option value="RS">Rio Grande do Sul</option>
                            <option value="RO">Rondônia</option>
                            <option value="RR">Roraima</option>
                            <option value="SC">Santa Catarina</option>
                            <option value="SP">São Paulo</option>
                            <option value="SE">Sergipe</option>
                            <option value="TO">Tocantins</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label class="col-sm-10 text-start control-label">Endereço</label>
                        <input type="email" className="form-control" placeholder="Endereço" />
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
                        <label class="col-sm-10 text-start control-label">Com quem você mora?</label>
                        <input type="email" className="form-control" placeholder="Com quem você mora?" />
                    </div>

                    <div className="form-group">
                        <label class="col-sm-10 text-start control-label">Raça autodeclarada</label>
                        <select class="form-select" aria-label="Default select example">
                            <option selected>Selecione a raça</option>
                            <option value="1">Amarelo</option>
                            <option value="2">Branco</option>
                            <option value="3">Indígena</option>
                            <option value="4">Pardo</option>
                            <option value="5">Preto</option>
                        </select>
                    </div>

                    <div className="form-group" >
                        <label class="col-sm-10 text-start control-label">Possui alguma religião?</label>
                        <select class="form-select"
                            id="Religião"
                            aria-label="Default select example"
                            onChange={() => Religion()}>
                            <option selected> Selecione uma opção</option>
                            <option value="1">Sim</option>
                            <option value="2">Não</option>
                        </select>
                        {relVisibility === true && (
                            <div>
                                <label class="col-sm-10 text-start control-label">Religião</label>
                                <input type="text" className="form-control" placeholder="Religião" />
                            </div>
                        )}

                    </div>

                    <div className="form-group">
                        <label class="col-sm-10 text-start control-label">Escolaridade</label>
                        <select class="form-select inputbox mt-3" aria-label="Default select example">
                            <option selected>Selecione a escolaridade</option>
                            <option value="1">Analfabeto(a)</option>
                            <option value="2">Ensino fundamental (incompleto)</option>
                            <option value="3">Ensino fundamental (completo)</option>
                            <option value="4">Ensino médio (incompleto)</option>
                            <option value="5">Ensino médio (completo)</option>
                            <option value="6">Ensino superior (incompleto)</option>
                            <option value="7">Ensino superior (completo)</option>
                            <option value="8">Ensino superior (com pós-graduação)</option>

                        </select>
                    </div>

                    <div className="form-group">
                    <label class="col-sm-10 control-label text-start">De acordo com sua escolaridade, você estudou, formalmente, durante quantos anos?</label>
                    <input type="email" className="form-control" placeholder="Anos de estudo" />
                    </div>

                    <div className="form-group" >
                        <label class="col-sm-10 text-start control-label">Renda Individual Mensal</label>
                        <select class="form-select" aria-label="Default select example">
                                <option selected>Selecione a renda individual mensal</option>
                                <option value="1">BPC</option>
                                <option value="2">Até um salário mínimo</option>
                                <option value="3">Entre 1 e 2 salários mínimos</option>
                                <option value="5">Entre 2 e 3 salários mínimos</option>
                                <option value="6">Entre 3 e 4 salários mínimos</option>
                                <option value="7">Entre 4 e 5 salários mínimos</option>
                                <option value="8">Entre 5 e 10 salários mínimos</option>
                                <option value="9">Mais de 10 salários mínimos</option>
                                <option value="10">Prefere não informar</option>
                        </select>
                    </div>

                    <div className="form-group" >
                        <label class="col-sm-10 text-start control-label">Renda Familiar Mensal</label>
                        <select class="form-select" aria-label="Default select example">
                                <option selected>Selecione a renda familiar mensal</option>
                                <option value="1">BPC</option>
                                <option value="2">Até um salário mínimo</option>
                                <option value="3">Entre 1 e 2 salários mínimos</option>
                                <option value="5">Entre 2 e 3 salários mínimos</option>
                                <option value="6">Entre 3 e 4 salários mínimos</option>
                                <option value="7">Entre 4 e 5 salários mínimos</option>
                                <option value="8">Entre 5 e 10 salários mínimos</option>
                                <option value="9">Mais de 10 salários mínimos</option>
                                <option value="10">Prefere não informar</option>
                                <option value="11">Não se aplica</option>
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

                    <div className="form-group">
                        <label class="col-sm-10 text-start control-label">Informações Adicionais</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Informações adicionais que você considera importante"></textarea>

                    </div>

                    <button type="submit" className="btn whitebutton btn-lg btn-block">Cadastrar</button>

                </form>


            </div>


        </>
    );
}

export default UserRegister;