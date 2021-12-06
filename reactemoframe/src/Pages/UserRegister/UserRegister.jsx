import Tabs from "../../Components/Tabs/Tabs";
import { Breadcrumb } from "react-bootstrap";


function UserRegister() {
    return (
        <>
            <Breadcrumb>
                <Breadcrumb.Item href='./dashboard'>Página Inicial</Breadcrumb.Item>
                <Breadcrumb.Item active>Cadastrar Usuário</Breadcrumb.Item>
            </Breadcrumb>
            <Tabs active="register" />
            <h1>User register</h1>
        </>
    );
}

export default UserRegister;