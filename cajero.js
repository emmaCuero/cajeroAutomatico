let saldo = 1000;  // Saldo inicial
const usuario = {
    nombre: "Juan",
    pin: "1234"
};

function login() {
    const username = document.getElementById("username").value;
    const pin = document.getElementById("pin").value;
    
    if (username === usuario.nombre && pin === usuario.pin) {
        document.getElementById("login-section").style.display = "none";
        document.getElementById("atm-section").style.display = "block";
        document.getElementById("user-name").innerText = usuario.nombre;
    } else {
        alert("Usuario o PIN incorrecto");
    }
}

function consultarSaldo() {
    document.getElementById("resultado").innerText = `Tu saldo actual es: $${saldo}`;
}

function mostrarRetiro() {
    document.getElementById("retiro-section").style.display = "block";
    document.getElementById("consignar-section").style.display = "none";
}

function mostrarConsignacion() {
    document.getElementById("consignar-section").style.display = "block";
    document.getElementById("retiro-section").style.display = "none";
}

function retirar() {
    const monto = parseInt(document.getElementById("retiro").value);
    if (isNaN(monto) || monto <= 0) {
        alert("Por favor ingresa un monto válido");
        return;
    }
    
    if (monto > saldo) {
        alert("Saldo insuficiente");
    } else {
        saldo -= monto;
        document.getElementById("resultado").innerText = `Has retirado $${monto}. Tu saldo actual es: $${saldo}`;
    }
    document.getElementById("retiro-section").style.display = "none";
}

function consignar() {
    const monto = parseInt(document.getElementById("consignacion").value);
    if (isNaN(monto) || monto <= 0) {
        alert("Por favor ingresa un monto válido");
        return;
    }
    
    saldo += monto;
    document.getElementById("resultado").innerText = `Has consignado $${monto}. Tu saldo actual es: $${saldo}`;
    document.getElementById("consignar-section").style.display = "none";
}

function salir() {
    alert("Gracias por usar el cajero automático. ¡Hasta pronto!");
    document.getElementById("atm-section").style.display = "none";
    document.getElementById("login-section").style.display = "block";
    document.getElementById("resultado").innerText = "";
    document.getElementById("username").value = "";
    document.getElementById("pin").value = "";
}
