alert('Use com moderação, Atenciosamente Jotta Marinho!')


function calcularTroco() {
    const valorPago = parseFloat(document.getElementById('pago').value);
    const totalCompra = parseFloat(document.getElementById('total').value);
    const troco = valorPago - totalCompra;

    if (troco >= 0) {
        document.getElementById('troco').textContent = `Troco: R$ ${troco.toFixed(2)}`;
    } else {
        document.getElementById('troco').textContent = 'Valor insuficiente.';
    }
}