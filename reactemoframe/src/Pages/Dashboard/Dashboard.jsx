import React from 'react';
import { Redirect } from 'react-router-dom';
import Card from '../../Components/Card/Card';
import Tabs from '../../Components/Tabs/Tabs';
import { isAuthenticated } from '../../services/auth';
import { getUsertype } from '../../services/auth';

function Dashboard() {
    return isAuthenticated() === false ? <Redirect to='/' /> : (
        <div>
            <Tabs active="tools"/>   
            <div class="row m-3">
                <Card />
            </div>
        </div>
    )
}
export default Dashboard;