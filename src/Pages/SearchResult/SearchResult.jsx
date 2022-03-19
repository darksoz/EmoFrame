import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Checkbox from '@mui/material/Checkbox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons'
import { faFile } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react';
import { GetResultsByName } from '../../services/api';
import FilterTable from '../../Components/FilterTable/FilterTable';
import { Button, Modal } from 'react-bootstrap';
import Tabs from '../../Components/Tabs/Tabs';
import { Breadcrumb } from "react-bootstrap";
import { isEmptyString } from '../../services/utils';
import Footer from '../../Components/Footer/Footer';



function SearchResult() {
    let [filters, setFilters] = useState({
        "sam": false,
        "sus": false,
        "leap": false,
        "zanon": false,
        "panas": false
    })
    const [searchText, setSearchText] = useState("");
    const [testsData, setTestsData] = useState([]);
    const [show, setShow] = useState(false);
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const handleSearchTextChange = (event) => {
        setSearchText(event.target.value.toLowerCase());
    }
    function getKeysByValue(object, value) {
        let keys = []
        Object.keys(object).forEach(item => {
            if (filters[item] === true) {
                keys.push(item);
            }
        })
        return keys;
    }
    const handleFilterChange = (event) => {
        let key = event.target.name;
        let value = event.target.checked;
        setFilters(prevState => ({
            ...prevState,
            [key]: value
        }))
    }

    const handleClose = () => {
        setShow(false);
    }

    const handleSearch = async () => {
        let isFiltered = Object.values(filters).includes(true);
        let keys = isFiltered ? getKeysByValue(filters) : Object.keys(filters);
        let array = []
        setTestsData([]);
        if(isEmptyString(searchText)){
            setTitle("Não foi possível realizar a busca");
            setBody("Busca inválida");
            setShow(true);
        }
        else{
            keys.forEach(async (key, index) => {
                let response = await GetResultsByName(key, searchText);
                if (response.status === 200) {
                    array = [...array, ...response.data]
                    if(index === keys.length -1 && array.length === 0){
                        setTitle("Busca");
                        setBody("Nenhum usuário encontrado");
                        setShow(true);
                    }
                    else if(index === keys.length -1 && array.length > 0){
                        array = array.sort(function(a,b){
                            return new Date(b.Datetime) - new Date(a.Datetime);
                          });
                        setTestsData([...array]);
                        console.log("Array =>", array);
                    }
                }
                else {
                        setTitle("Não foi possível realizar a busca");
                        setBody("Erro ao realizar busca no banco de dados");
                        setShow(true);
                }
            });
        }
    }

    return (
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


           
            <Tabs active="results"/>
           
            <Container>
                <Card className='mt-3'>
                    <Row>
                        <Col md={3} className='border'>
                            <h3>
                                <FontAwesomeIcon icon={faFilter} /> Filtro
                            </h3>
                            <hr />
                            <h5>Por Instrumento:</h5>
                            <div onChange={handleFilterChange}>
                                <Row style={{ marginLeft: "0px", marginBottom: "10px" }}>
                                    <label><Checkbox name="sam" value="sam" /> {"Sam"}</label>
                                </Row>
                                <Row style={{ marginLeft: "-4px", marginBottom: "10px" }}    >
                                    <label><Checkbox name="sus" value="sus" /> {"Sus"}</label>
                                </Row>
                                <Row style={{ marginLeft: "4px", marginBottom: "10px" }}    >
                                    <label><Checkbox name="leap" value="leap" /> {"Leap"}</label>
                                </Row>
                                <Row style={{ marginLeft: "13px", marginBottom: "10px" }}    >
                                    <label><Checkbox name="zanon" value="zanon" /> {"Zanon"}</label>
                                </Row>
                                <Row style={{ marginLeft: "13px", marginBottom: "10px" }}    >
                                    <label><Checkbox name="panas" value="panas" /> {"Panas"}</label>
                                </Row>
                            </div>
                        </Col>

                        <Col md={8} className='border'>
                            <h1>
                                <FontAwesomeIcon icon={faFile} /> Resultados
                            </h1>
                            <hr />
                            <h5 className='mt-2'>Buscar Usuário</h5>
                            <Row>
                                <Col xs={10}>
                                    <input class="form-control me-2" type="search" placeholder="Digite o nome do usuário" aria-label="Search" onChange={handleSearchTextChange} />
                                </Col>
                                <Col style={{ marginLeft: "-40px", marginTop: "-5px" }}>
                                    <button class="btn whitebutton" type="submit" onClick={() => handleSearch()}><span class="fa fa-search"></span> Buscar</button>
                                </Col>
                            </Row>
                            <Row>
                                <FilterTable Data={testsData} />
                            </Row>
                        </Col>
                    </Row>
                </Card>
            </Container>
            <Footer/>
        </>
    );
}
export default SearchResult;