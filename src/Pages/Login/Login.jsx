import './Login.css';
import { useState } from "react";
import { Redirect } from 'react-router-dom';
import { LoginAccount } from '../../services/api.js';
import { login, isAuthenticated } from '../../services/auth.js';
import { RediretToPage } from '../../services/utils';
import { Button, Modal } from 'react-bootstrap';

function Login() {
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    const [show, setShow] = useState(false);
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    function onEmailChange(value) {
        setEmail(value)
    }
    function onPasswordChange(value) {
        setPassword(value)
    }

    const handleSubmit = async () => {
        if (email === "" || password === "") {
            setTitle("Não foi possível conectar em sua conta");
            setBody("Dados incompletos");
            setShow(true);
        }
        else {
            var json = JSON.stringify({
                "email": `${email}`,
                "password": `${password}`
            });

            let response = await LoginAccount(json);
            if (response.status === 201) {
                console.log("Data aqui ==> ", response.data);
                login(response.data);
                RediretToPage("/dashboard");
            }
            else if (response.status === 401) {
                console.log("senha ou email errados");
                setTitle("Não foi possível conectar em sua conta");
                setBody("Senha e/ou email errados");
                setShow(true);
            }
        }
    }

    const handleClose = () => {
        setShow(false);
    }
    
    return isAuthenticated() ? <Redirect to='/dashboard' /> :
        (
            <>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>{body}</Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={handleClose}>
                            Fechar
                        </Button>
                    </Modal.Footer>
                </Modal>
                <div class="flex-fill">
                    <div class="wrapper fadeInDown">
                        <div id="formContent" >
                            <div class="fadeIn first m-4">
                                <span class="far fa-user fa-2x" />
                            </div>
                            <input type="text" id="email" class="fadeIn second" name="login" placeholder="E-mail" required onChange={e => onEmailChange(e.target.value)} />
                            <input type="password" id="password" class="fadeIn third" name="login" placeholder="Senha" required onChange={e => onPasswordChange(e.target.value)} />
                            <input type="submit" class="fadeIn fourth" value="Entrar" onClick={async () => await handleSubmit()} />
                        </div>
                    </div>
                </div>
            </>
        )
}

export default Login;