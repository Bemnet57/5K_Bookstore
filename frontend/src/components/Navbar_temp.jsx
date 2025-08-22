import { Link} from 'react-router-dom';


function Navbar(){
    return (
        <nav class name = "navabar">
            <img src = "/logo.png" alt = "5k gibi gubae" />
            <h1 className ="project-title"> 5k Gibi Gubae Book Store</h1>
            <div classname = "links">
                < Link to = "/">Home</Link>
                < Link to = "/">Profile</Link>
                < Link to = "/">Cart</Link>
                < Link to = "/"> Delivery History</Link>
            </div>
        </nav>
    )
}

export default Navbar;