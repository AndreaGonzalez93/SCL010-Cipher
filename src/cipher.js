window.cipher = {
  encode: (input, offset) => {
      let palabraCifrada = '';

      for (let i = 0; i < input.length; i++) {
          let posicionInicialLetra = input[i].charCodeAt(0);
          let posicionFinalLetra = (posicionInicialLetra - 65 + offset) % 26 + 65;
          let letraCifrada = String.fromCharCode(posicionFinalLetra);

          palabraCifrada = palabraCifrada + letraCifrada;
      }
      return palabraCifrada;
  },
  decode: (input, offset) => {
      let palabraDesCifrada = '';

      for (let i = 0; i < input.length; i++) {
          let posicionInicialLetra = input[i].charCodeAt(0);
          let posicionFinalLetra = (posicionInicialLetra - 13 - offset) % 26 + 65;
          let letraCifrada = String.fromCharCode(posicionFinalLetra);

          palabraDesCifrada = palabraDesCifrada + letraCifrada;
      }
      return palabraDesCifrada;
  }
};