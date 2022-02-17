import {getUsertype} from '../../services/auth';

function Tabs(props) {
    
    return (
        <>
            <div class="mt-3">
                {
                    getUsertype() === 'Specialist'  ?
                    <ul class="nav nav-tabs">
                    <li class="nav-item">
                        {
                            props.active === "tools" ? 
                            <a class="nav-link active" href="/dashboard">Ferramentas</a> :
                            <a class="nav-link" href="/dashboard">Ferramentas</a>
                        }
                        
                    </li>
                    <li class="nav-item">
                        {
                            props.active === "register" ? 
                            <a class="nav-link active" href="/userregister">Cadastrar Usuários</a> :
                            <a class="nav-link" href="/userregister">Cadastrar Usuários</a>
                        }
                    </li>
                    <li class="nav-item">
                        {
                            props.active === "results" ? 
                            <a class="nav-link active" href="/results">Resultados</a> :
                            <a class="nav-link" href="/results">Resultados</a>
                        }
                    </li>
                    </ul>
                    :
                    <br/>
                }
            </div>
        </>
    )
}

export default Tabs;