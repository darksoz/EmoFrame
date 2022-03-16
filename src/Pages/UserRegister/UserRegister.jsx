import { useState } from "react";
import { Breadcrumb} from "react-bootstrap";
import Footer from "../../Components/Footer/Footer";
import RegisterSpecialist from "../../Components/RegisterSpecialist/RegisterSpecialist";
import RegisterUser from "../../Components/RegisterUser/RegisterUser";
import Tabs from "../../Components/Tabs/Tabs";


function UserRegister() {

    const [registerType, setRegisterType] = useState("");
    const handleChange = (event) => {
        setRegisterType(event.target.value);
    }
    return (
        <>
            <Breadcrumb>
                <Breadcrumb.Item href='./dashboard'>Página Inicial</Breadcrumb.Item>
                <Breadcrumb.Item active>Cadastrar Usuário</Breadcrumb.Item>
            </Breadcrumb>
            <Tabs active="register" />
            <div className="form-group mt-3" onChange={handleChange}>
                <h3>Cadastro</h3>
                <select class="form-select col-sm-10 control-label" name="Usertype" aria-label="Default select example" required>
                    <option disabled selected>Quem você gostaria de cadastrar? </option>
                    <option value="User">Usuário</option>
                    <option value="Specialist">Especialista</option>
                </select>
            </div>
            {
                registerType === "User" && (
                    <>
                        <RegisterUser Usertype={registerType}/>
                    </>
                )
            }
            {
                registerType === "Specialist" && (
                    <>
                        <RegisterSpecialist Usertype={registerType}/>
                    </>
                )
            }
           <div className="mt-5">
           <Footer/>
           </div>
         
        </>
    );
}

export default UserRegister;