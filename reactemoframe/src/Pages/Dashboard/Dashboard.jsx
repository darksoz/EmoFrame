import React from 'react';
import Card from '../../Components/Card/Card';
function Dashboard() {
    return (
        <div>
            <div class="row m-3">
                <Card Text="Erick" image={`${process.env.PUBLIC_URL}/emoframe.png`} />
            </div>
        </div>
    )
}

export default Dashboard;