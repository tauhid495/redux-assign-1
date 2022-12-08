import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar bg-slate-300 px-20 font-semibold">
  <div className="flex-1">
    <Link to='/' className="btn btn-ghost normal-case text-xl">Open Blog Site </Link>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal p-0">
      <li><Link to='/home'>Home</Link></li>
      <li><Link to='/post'>Post A Blog</Link></li>
      <li><Link to='/history'>History</Link></li>
      <li><Link to='/dashboard'>Dashboard</Link></li>
    </ul>
  </div>
</div>
    );
};

export default Navbar;