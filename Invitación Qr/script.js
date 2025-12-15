const botonSi = document.getElementById("btn-si");
const botonFea = document.getElementById("btn-fea");
const botonNo = document.getElementById("btn-no");

const respuesta = document.getElementById("respuesta");

botonSi.addEventListener("click", function () {
  respuesta.textContent = "Ahora coordinamos el día, tqm c:";
});

botonFea.addEventListener("click", function () {
  respuesta.innerHTML = `
    <p> respeta </p>
    <img src="imagenes/meme-fea.jpg" alt="meme fea" width="250">
  `;
});


botonNo.addEventListener("click", function () {
  respuesta.textContent = "…lo dudes.";
});






