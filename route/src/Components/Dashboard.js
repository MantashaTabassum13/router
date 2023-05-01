import React from 'react'
import { NavLink } from 'react-router-dom'
const Dashboard = () => {
    return (
        <>
            <div>dashboard</div>
            <ul>
                <li>
                    <NavLink to="/dashboard/settings">Settings</NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard/accounts">Accounts</NavLink>
                </li>
            </ul>
        </>
    )
}

export default Dashboard