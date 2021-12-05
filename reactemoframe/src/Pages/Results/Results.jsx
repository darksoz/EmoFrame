import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Checkbox from '@mui/material/Checkbox';

import Tabs from '../../Components/Tabs/Tabs';

function Results() {
    let [filters, setFilters] = useState({
        "sam": false,
        "sus": false
    })
    const [searchText, setSearchText] = useState('');

    const handleSearchTextChange = (event) => {
        setSearchText(event.target.value.toLowerCase());
    }
    function getKeysByValue(object, value) {
        let keys = []
        Object.keys(object).forEach(item => {
            if(filters[item] === true){
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

    const handleSearch = () => {
        let isFiltered = Object.values(filters).includes(true);
        let keys = isFiltered ? getKeysByValue(filters) : Object.keys(filters);
        console.log("Filters => ", keys);
    }

    return (
        <div>
            <Tabs active="results" />
            <Container>
                <Row>
                    <Col>
                        <h1>Filter</h1>
                        <div onChange={handleFilterChange}>
                            <Row style={{ marginLeft: "0px" }}>
                                <label><Checkbox name="sam" value="sam" /> {"Sam"}</label>
                            </Row>
                            <Row style={{ marginLeft: "-4px" }}    >
                                <label><Checkbox name="sus" value="sus" /> {"Sus"}</label>
                            </Row>
                        </div>
                    </Col>
                    <Col xs={9}>
                        <h1>Buscar Usuário</h1>
                        <Row>
                            <Col xs={10}>
                                <input class="form-control me-2" type="search" placeholder="Digite o nome do usuário" aria-label="Search" onChange={handleSearchTextChange} />
                            </Col>
                            <Col style={{ marginLeft: "-40px", marginTop: "-5px" }}>
                                <button class="btn whitebutton" type="submit" onClick={handleSearch}><span class="fa fa-search"></span></button>
                            </Col>
                        </Row>
                        <Row>

                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
export default Results;
