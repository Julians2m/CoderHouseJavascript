function calcularCuotas() {
    let monto = parseFloat(document.getElementById("monto").value);
    let cuotas = parseInt(document.getElementById("cuotas").value);
    let interes = parseFloat(document.getElementById("interes").value) / 100;

    if (isNaN(monto) || isNaN(cuotas) || isNaN(interes)) {
    document.getElementById("resultado").innerHTML =
        "Error: ingresa valores numéricos.";
    return;
    }

    let cuotaMensual = (monto * interes) / ((1 - (1 + interes) ** -cuotas));
    let totalPagar = cuotaMensual * cuotas;
    let totalInteres = totalPagar - monto;

    document.getElementById(
    "resultado"
    ).innerHTML = `Monto a pagar por cuota mensual: $${cuotaMensual.toFixed(
    2
    )}.<br> Total a pagar: $${totalPagar.toFixed(2)}.<br> Interés total a pagar: $${totalInteres.toFixed(
    2
    )}.`;
}

function generarTablaAmortizacion() {
    let monto = parseFloat(document.getElementById("monto").value);
    let cuotas = parseInt(document.getElementById("cuotas").value);
    let interes = parseFloat(document.getElementById("interes").value) / 100;

    if (isNaN(monto) || isNaN(cuotas) || isNaN(interes)) {
    document.getElementById("tabla-amortizacion").innerHTML =
        "Error: ingresa valores numéricos.";
    return;
    }

    // let saldoPendiente = monto;
    // let cuotaMensual = (monto * interes) / (1 - ((1 + interes) ** (-cuotas)));
 
}

document.getElementById("calcular").addEventListener("click", calcularCuotas);
document
    .getElementById("generar-tabla")
    .addEventListener("click", generarTablaAmortizacion);
