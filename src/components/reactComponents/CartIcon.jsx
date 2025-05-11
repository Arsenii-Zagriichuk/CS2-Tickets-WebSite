import { ticketsStorage } from "/src/scripts/ticketsStorage.js";

export default function CartIcon() {

    function redirect() {
        window.location.href = "/CartPage";
    }

    return (
        <div id="cartIconContainer">       
            <img src="./src/images/cartIcon.png" alt="CartIcon" id="cartIcon" onClick={redirect}/>
        </div>
    );
}