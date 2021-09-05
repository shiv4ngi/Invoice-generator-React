import "./Address.css";
import DropdownState from "./DropdownState";
 

const Address = (props) => {

    return(
        <>
        <div>
        <label for="address">Address Line1</label>
        <input className="address" type="text"/>
        </div>
        <div>
        <label for="address" >Address Line2</label>
        <input className="address" type="text"/>
        </div>
        <DropdownState />
    </>
    );
}
export default Address;