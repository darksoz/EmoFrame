import Tabs from "../../Components/Tabs/Tabs";
import "./UserRegister.css";

function UserRegister() {
    return (
        <>
            <Tabs active="register" />

            <div class="wrapper">
                <div class="container">
                    <div class="card">
                        <div class="row">
                            <div class="col-md-12">

                                <div class="form">

                                    <p class="h2">Cadastrar novo usuário</p>


                                    <div>
                                        <select class="form-select inputbox mt-3" aria-label="Default select example">
                                            <option selected>Quem está respondendo esse cadastro?</option>
                                            <option value="1">Usuário</option>
                                            <option value="1">Responsável</option>
                                        </select>
                                    </div>

                                    <div class="row">

                                        <div class="col-md-6">

                                            <div class="inputbox mt-3 text-start"> <span>Nome </span> <br/>
                                            <input type="text" placeholder="Nome" name="" class="form-control" /></div>

                                        </div>

                                        <div class="col-md-6">

                                        <div class="inputbox mt-3 text-start"> <span>Sobrenome</span> <br/>
                                        <input type="text" placeholder="Sobrenome" name="" class="form-control"/></div>

                                        </div>

                                        <div class="row">

                                            <div class="col-md-6">

                                            <div class="inputbox mt-3 text-start"> <span>Nome Social</span> <br/>
                                            <input type="text" placeholder="Nome social" name="" class="form-control"/> </div>

                                            </div>

                                            <div class="col-md-6">

                                            <div class="inputbox mt-3 text-start"> <span>Email</span> <br/>
                                            <input type="text" placeholder="Email" name="" class="form-control"/> </div>

                                            </div>

                                        </div>

                                        

                                        

                                    </div>



                                </div>


                            </div>

                        </div>


                    </div>
                </div>

            </div>

        </>
    );
}

export default UserRegister;