import { useEffect } from "react";
import cartIcon from "../../images/cartIcon.png";

export default function CartIcon() {
    let quantity;

    function redirect() {
        window.location.href = "/CartPage";
    }
    function quantityIcon() {
        const stored = JSON.parse(localStorage.getItem("ticketsStorage"));
        const quantityElement = document.querySelector("#quantity");

        if (stored && stored.length > 0) {
            quantityElement.textContent = stored.length;
            quantityElement.style.opacity = "1";
        } else {
            quantityElement.textContent = "";
            quantityElement.style.opacity = "0";
        }
    }

    useEffect(() => {
        quantityIcon();
      }, []);


    return (
        <div id="cartIconContainer">       
            <img src={cartIcon.src} alt="CartIcon" id="cartIcon" onClick={redirect}/>
            <p id="quantity">{quantity}</p>
        </div>
    );
}