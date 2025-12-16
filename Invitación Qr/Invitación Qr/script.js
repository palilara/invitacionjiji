const btnSi = document.getElementById("btn-si");
const btnFea = document.getElementById("btn-fea");
const btnNo = document.getElementById("btn-no");
const respuesta = document.getElementById("respuesta");

btnSi.addEventListener("click", () => {
  respuesta.textContent = "Vamos este o el próximo finde... bueno ahora coordinamos el día. Tqm";
});

btnFea.addEventListener("click", () => {
  respuesta.innerHTML = "Aquí quise poner una respuesta con imagen, pero no entendí mucho como hacerlo jajjaja :c";
});

btnNo.addEventListener("click", () => {
  respuesta.textContent = "...hay opción a decir que no c:";
});


