window.cipher = {
    encode: (input, offset) => {
      let palabraCifrada = '';

      for (let i = 0; i < input.length; i++) {
        let posicionInicialLetra = input[i].charCodeAt(0);

        if (posicionInicialLetra >= 65 && posicionInicialLetra <= 90) {
          let posicionFinalLetra = (posicionInicialLetra - 65 + offset) % 26 + 65;
          let letraCifrada = String.fromCharCode(posicionFinalLetra);

          palabraCifrada = palabraCifrada + letraCifrada;

        } else if (posicionInicialLetra >= 97 && posicionInicialLetra <= 122) {
            let posicionFinalLetraM = (posicionInicialLetra - 97 + offset)% 26 +97 ;
            let letraCifradaM = String.fromCharCode(posicionFinalLetraM);
            palabraCifrada = palabraCifrada + letraCifradaM ;
        }
         else if (posicionInicialLetra >=48 && posicionInicialLetra <=57 ) {
             let posicionFinalNumber = (posicionInicialLetra-48+offset) %10 +48;
             let numbercipher = String.fromCharCode(posicionFinalNumber);
             palabraCifrada = palabraCifrada + numbercipher ;
         }

        }
        return palabraCifrada;
      },

      decode: (input, offset) => {
        let palabraDesCifrada = '';

        for (let i = 0; i < input.length; i++) {
          let posicionInicialLetra = input[i].charCodeAt(0);
          
        if (posicionInicialLetra >= 65 && posicionInicialLetra <= 90){
          let posicionFinalLetra = (posicionInicialLetra - 13 - offset) % 26 + 65;
          let letraCifrada = String.fromCharCode(posicionFinalLetra);

          palabraDesCifrada = palabraDesCifrada + letraCifrada;
        }
         else if (posicionInicialLetra >= 97 && posicionInicialLetra <= 122) {
            let posicionFinalLetraM = (posicionInicialLetra - 45 - offset)% 26 +97 ;
            let letraCifradaM = String.fromCharCode(posicionFinalLetraM);
            palabraDesCifrada = palabraDesCifrada + letraCifradaM ;
         }
        else if (posicionInicialLetra >=48 && posicionInicialLetra <=57 ) {
            let posicionFinalNumber = (posicionInicialLetra- 8 -offset) %10 +48;
            let numbercipher = String.fromCharCode(posicionFinalNumber);
            palabraDesCifrada = palabraDesCifrada + numbercipher ;


        }
        }
        return palabraDesCifrada;
      }
    };
