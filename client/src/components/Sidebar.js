import { Link } from "react-router-dom";
function Sidebar(){
    return (
        <div className="sidebar">
            <ul className="sidebar-menus">
                <li className="active"><Link to='/' className="link-btn">Users</Link></li>
                <li><Link to='/' className="link-btn">Timesheet</Link></li>
                <li><Link to='/' className="link-btn">Leaves</Link></li>
                <li><Link to='/' className="link-btn">Projects</Link></li>
            </ul>
        </div>
    );
}

export default Sidebar;