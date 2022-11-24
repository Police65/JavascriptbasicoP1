let cba, tba, cc, cca, caz, ch, ttar, ttaz, tth, ttc, tte, ttcr, des;
alert("bienvenido al supermercado maker");
let p = 1;
let ca = 0;
let cb = 0;
let cpc = 0;
let ce = 0;
let ccr = 0;
let pr = 0;
let lj = 0;
while (p == 1) {
  let categoria = parseInt(
    prompt(
      "que desea comprar?: 1: Cigarrillos y bebidas alcoholicas, 2: Enlatados y carnes, 3: Arroz, Azúcar, Huevos. "
    )
  );

  switch (categoria) {
    case 1:
      ca++;

      des = parseInt(
        prompt("desea comprar: 1. cigarrillos, 2. bebida alcoholica (10% de monto adicional al IVA por valor al lujo)")
      );

      if (des == 1) {
        cc = parseInt(
          prompt("cuantos cigarrillos desea? el precio es de 4 la unidad")
        );
        ttc = cc * 4;
        pr = (16 * 100) / ttc;
        ttc = ttc + pr;
        lj = (10 * 100) / ttc;
        ttc = ttc + lj;
      } else if (des == 2) {
        cba = parseInt(
          prompt("cuantas bebidas desea? el precio es de 8 la unidad")
        );
        tba = cba * 8;
        pr = (16 * 100) / tba;
        tba = tba + pr;
        lj = (10 * 100) / tba;
        tba = tba + lj;
      }
      break;
    case 2:
      cb++;
      des = parseInt(prompt("desea comprar: 1. Enlatados, 2. Carnes"));
      if (des == 1) {
        ce = parseInt(prompt"Que cantidad de enlatados desea? el precio es de 22 la unidad (16% de IVA)");
        tte = ce * 22;
        pr = (16 * 100) / tte;
        tte = tte + pr;
      } else if (des == 2) {
        ccr = parseInt(prompt"Cantidad de enlatados desea? el precio es de 24 la unidad (16% de IVA)");
        ttcr = ccr * 24;
        pr = (16 * 100) / tbatch;
        ttcr = tttcr + pr;
       }
      break;
    case 3:
      cpc++;
      if (des == 1) {
        cca = parseInt(prompt"Que cantidad de Arroz desea? el precio es de 11 la unidad");
        ttar = cca * 11;
      } else if (des == 2) {
        caz = parseInt(prompt"Cuantos kg de azucar de sea? el precio es de 12 el kg");
        ttaz = caz * 12;
      } else if (des == 3) {
        ch = parseInt(prompt"Que Cantidad de Huevos desea? el precio es de 30 por docena");
        tth = ch * 30;
}
      break;
    default:
      break;
  }

  p = parseInt(prompt("desea comprar algo más?"));
}
cl = 1;
while (cl == 1) {}
