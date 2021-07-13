const cipher = {
  encode(offset, mensaje) {
    let mjsCifrado = "";
    let offset1 = Number(offset);
    for (let i = 0; i < mensaje.length; i++) {
      let cifrarTexto = mensaje[i];
      let unicode = cifrarTexto.charCodeAt();
      let mathform = ((unicode - 65 + offset1) % 26) + 65;
      if (cifrarTexto < 65 || cifrarTexto > 90) {
        mjsCifrado += "";
      } else {
        mjsCifrado += String.fromCharCode(mathform);
      }
    }
    return mjsCifrado;
  },
  decode(offset2, mnsjCifrado) {
    let mnsdesCifrado = "";
    let offsetDes = Number(offset2);
    for (let i = 0; i < mnsjCifrado.length; i++) {
      let descifrarTexto = mnsjCifrado[i];
      let unicode2 = descifrarTexto.charCodeAt();
      let mathform2 = ((unicode2 - 65 - offsetDes) % 26) + 65;
      if (descifrarTexto < 65 || descifrarTexto > 90) {
        mnsdesCifrado += "";
      } else {
        mnsdesCifrado += String.fromCharCode(mathform2);
      }
    }
    return mnsdesCifrado;
  },
};
export default cipher;
