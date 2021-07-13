import cipher from "./cipher.js";
document.getElementById("cipherBtn").addEventListener("click", function () {
  let offset = document.getElementById("desplazamientos").value;
  let mensaje = document.getElementById("mensaje").value;
  document.getElementById("mensajeCifrado").value = cipher.encode(
    offset,
    mensaje.toUpperCase()
  );
});
document.getElementById("descifrarBtn").addEventListener("click", function () {
  let offset2 = document.getElementById("desplazamientos1").value;
  let mnsjCifrado = document.getElementById("mnsCifrado").value;
  document.getElementById("mnsdesCifrado").value = cipher.decode(
    offset2,
    mnsjCifrado.toUpperCase()
  );
});

document.getElementById("ingresoF").style.display = "none";
(() => {
  let mostrar_F = document.getElementById("ingF");
  mostrar_F.addEventListener(
    "click",
    () => {
      document.getElementById("ingresoF").style.display = "block";
    },
    false
  );
  let hidenCipher = document.getElementById("backFormulator");
  hidenCipher.addEventListener(
    "click",
    () => {
      document.getElementById("ingresoF").style.display = "none";
    },
    false
  );
})();

document.getElementById("ingresoP").style.display = "none";
(() => {
  let mostrar_P = document.getElementById("ingP");
  mostrar_P.addEventListener(
    "click",
    () => {
      document.getElementById("ingresoP").style.display = "block";
    },
    false
  );
  let hidenDecipher = document.getElementById("backPreparer");
  hidenDecipher.addEventListener(
    "click",
    () => {
      document.getElementById("ingresoP").style.display = "none";
    },
    false
  );
})();

(() => {
  let eraser = document.getElementById("cipherBtn");
  eraser.addEventListener("click", () => {
    document.getElementById("mensaje").value = "";
  });
})();

(() => {
  let eraser = document.getElementById("descifrarBtn");
  eraser.addEventListener("click", () => {
    document.getElementById("mnsCifrado").value = "";
  });
})();
