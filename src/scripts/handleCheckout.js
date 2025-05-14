export function handleCheckout(tickets, subtotal, taxFee = 5.0) {
  if (parseFloat(subtotal) === 0) return;

  const finalTotal = (parseFloat(subtotal) + taxFee).toFixed(2);

  localStorage.setItem("checkoutData", JSON.stringify({
    tickets,
    subtotal: parseFloat(subtotal).toFixed(2),
    taxFee: taxFee.toFixed(2),
    total: finalTotal
  }));

  window.location.href = "/Checkout";
}
