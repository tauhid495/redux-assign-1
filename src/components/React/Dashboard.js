import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className='flex'>
            {/* sideBar */}
            <div className='w-1/4 bg-slate-300 h-screen border-t-2'>
                <Link to='bloglist'>Blog List</Link>
            </div>
            {/* Outlet */}
            <div className='w-3/4'>
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;