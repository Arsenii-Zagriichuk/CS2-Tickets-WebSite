import { ticketsStorage } from "/src/components/ticketsStorage.js";

export default function CartIcon() {

    function handleSave() {
        localStorage.setItem("ticketsStorage", JSON.stringify(ticketsStorage));
        console.log("Saved successfully")
        window.location.href = "/CartPage";
    }

    return (
        <div id="cartIconContainer">       
            <img src="./src/images/cartIcon.png" alt="CartIcon" id="cartIcon" onClick={handleSave}/>
        </div>
    );
}