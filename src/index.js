//ocultando pantallas
document.getElementById('create-encryptyon').style.display = 'none';
document.getElementById('decipherp').style.display = 'none';
document.getElementById('final').style.display = 'none';
document.getElementById('error-input').style.display = 'none';
document.getElementById('error-inputd').style.display = 'none';
//Pasar a clave cifrada
const btnpassword = document.getElementById("password");
btnpassword.addEventListener('click', () => {
  document.getElementById('start').style.display = 'none';
  document.getElementById('create-encryptyon').style.display = 'block';
});
// pasar al final desde cifrar
const btncreateencryptyon = document.getElementById("createencryptyon");
btncreateencryptyon.addEventListener('click', () => {
  if (document.getElementById('cipherpas').value === '') {
    document.getElementById('error-input').style.display = 'block';
    document.getElementById('cipherpas').style.borderColor = 'red';
  } else {
    //cifrado ascii
    let input = document.getElementById('cipherpas').value;
    let offset = parseInt(document.getElementById('offset').value);
    let palabraCifrada = cipher.encode(input, offset);
    if (palabraCifrada === false) {
      alert("se ingresaron caracteres no permitidos , verifirque NO TENER ESPACIO NI SIMBOLOS");
    } else {
      document.getElementById('create-encryptyon').style.display = 'none';
      document.getElementById('final').style.display = 'block';
      document.getElementById('operationResult').innerHTML = `Tu Clave Cifrada es : ${palabraCifrada}`;
    }
  }
});
// Pasar a descifrando clave
const btndescipher = document.getElementById("descipher");
btndescipher.addEventListener('click', () => {
  document.getElementById('start').style.display = 'none';
  document.getElementById('decipherp').style.display = 'block';
})
//pasar al final desde descifrado
const btndescipherf = document.getElementById("descipherf");
btndescipherf.addEventListener('click', () => {
  if (document.getElementById('passwordd').value === '') {
    document.getElementById('error-inputd').style.display = 'block'
    document.getElementById('passwordd').style.borderColor = 'red';
  } else {
    //descifrado ascii
    let input = document.getElementById('passwordd').value;
    let offset = parseInt(document.getElementById('offset2').value);
    let palabraDesCifrada = cipher.decode(input, offset);
    if (palabraDesCifrada === false) {
      alert("se ingresaron caracteres no permitidos , verifirque NO TENER ESPACIO NI SIMBOLOS");
    } else {
      document.getElementById('decipherp').style.display = 'none';
      document.getElementById('final').style.display = 'block';
      document.getElementById('operationResult').innerHTML = `Tu Clave descifrada es : ${palabraDesCifrada}`;
    }
  }
});
//volver al inicio
const btncoming = document.getElementById("coming");
btncoming.addEventListener('click', () => {
  document.getElementById('final').style.display = 'none';
  document.getElementById('start').style.display = 'block';
});
