import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Checkbox from '@mui/material/Checkbox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons'
import { faFile } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react';
import { GetTestsData } from '../../services/api';
import FilterTable from '../../Components/FilterTable/FilterTable';




function SearchResult() {
    let [filters, setFilters] = useState({
        "sam": false,
        "sus": false,
        "leap": false
    })
    const [searchText, setSearchText] = useState('');
    const [testsData, setTestsData] = useState([]);

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

    const handleSearch = async () => {
        let isFiltered = Object.values(filters).includes(true);
        let keys = isFiltered ? getKeysByValue(filters) : Object.keys(filters);
        console.log("filters", keys);
        console.log("text", searchText);
        /*let array = []
        setTestsData([]);
        keys.forEach(async (key) => {
            let json = { "name": searchText }
            json = JSON.stringify(json);
            if (key === "sus" || key === "leap") {
                let response = await GetTestsData(json, key);
                if (response.status === 201) {
                    setTestsData([...array, ...response.data]);
                    array = [...array, ...response.data]
                    console.log("Dados salvos aqui ==> ", array);
                }
                else {
                    console.log("Error data response");
                }
            }
        });*/
    }

    return (
        <>
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
                                <Row style={{ marginLeft: "0px" }}>
                                    <label><Checkbox name="sam" value="sam" /> {"Sam"}</label>
                                </Row>
                                <Row style={{ marginLeft: "-4px" }}    >
                                    <label><Checkbox name="sus" value="sus" /> {"Sus"}</label>
                                </Row>
                                <Row style={{ marginLeft: "4px" }}    >
                                    <label><Checkbox name="leap" value="leap" /> {"Leap"}</label>
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
                                    <button class="btn whitebutton" type="submit" onClick={() => handleSearch()}><span class="fa fa-search"></span></button>
                                </Col>
                            </Row>
                            <Row>
                                <FilterTable Data={testsData} />
                            </Row>
                        </Col>


                    </Row>
                </Card>
            </Container>
        </>
    );
}
export default SearchResult;