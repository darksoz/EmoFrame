import React, { useState } from 'react';
import './Register.css';
import Tabs from '../../Components/Tabs/Tabs';
import RegisterSpecialist from '../../Components/RegisterSpecialist/RegisterSpecialist';

function Register() {


    return (
        <div>

            <Tabs active="register" />
            <div className="container card mt-3">
                <h3>Cadastre-se</h3>
                <RegisterSpecialist/>
            </div>
        </div>
    )
}
export default Register;
