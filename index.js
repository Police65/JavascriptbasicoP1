let acumb = 0;
let acuma = 0;
let acumcpc = 0;
let gene = 0,
  vuelto = 0,
  pago = 0,
  cba = 0,
  tba = 0,
  cc = 0,
  cca = 0,
  caz = 0,
  ch = 0,
  ttar = 0,
  ttaz = 0,
  tth = 0,
  ttc = 0,
  tte = 0,
  ttcr = 0,
  des;
alert("bienvenido al supermercado maker");
let p = 1;
let ca = 0;
let cb = 0;
let cpc = 0;
let ce = 0;
let ccr = 0;
let pr = 0;
let lj = 0;
let z = 1;
while (z == 1) {
  ca = 0;
  cb = 0;
  cpc = 0;
  ce = 0;
  ccr = 0;
  cba = 0;
  cc = 0;
  cca = 0;
  caz = 0;
  ch = 0;
  let monta;
  let montb;
  let montc;
  let ttba;
  monta = 0;
  montb = 0;
  montc = 0;
  ttba = 0;
  let ced;
  let nom;
  do {
    nom = prompt("cual es su nombre?");
  } while (nom > -10000000000000);
  do {
    ced = parseInt(prompt("ingrese su cedula"));
  } while (isNaN(ced) || ced > 99999999);

  p = 1;
  while (p == 1) {
    let categoria;
    do {
      categoria = parseInt(
        prompt(
          "que desea comprar?: 1: Cigarrillos y bebidas alcoholicas, 2: Enlatados y carnes, 3: Arroz, Azúcar, Huevos. "
        )
      );
    } while (categoria > 3 || categoria < 1 || isNaN(categoria));
    switch (categoria) {
      case 1:
        do {
          des = parseInt(
            prompt(
              "desea comprar: 1. cigarrillos, 2. bebida alcoholica (10% de monto adicional al IVA por valor al lujo)"
            )
          );
        } while (des > 3 || des < 1 || isNaN(des));
        if (des == 1) {
          do {
            cc += parseInt(
              prompt("cuantos cigarrillos desea? el precio es de 4 la unidad")
            );
          } while (isNaN(cc));
          ttc = cc * 4;
          pr = (ttc * 16) / 100;
          ttc = ttc + pr;
          lj = (ttc * 16) / 100;
          ttc = ttc + lj;
        } else if (des == 2) {
          do {
            cba += parseInt(
              prompt("cuantas bebidas desea? el precio es de 8 la unidad")
            );
          } while (isNaN(cba));
          tba = cba * 8;
          pr = (16 * tba) / 100;
          tba = tba + pr;
          lj = (10 * tba) / 100;
          tba = tba + lj;
        }
        break;
      case 2:
        do {
          des = parseInt(prompt("desea comprar: 1. Enlatados, 2. Carnes"));
        } while (des > 2 || des < 1 || isNaN(des));
        if (des == 1) {
          do {
            ce += parseInt(
              prompt(
                "Que cantidad de enlatados desea? el precio es de 22 la unidad (16% de IVA)"
              )
            );
          } while (isNaN(ce));
          tte = ce * 22;
          pr = (16 * tte) / 100;
          tte = tte + pr;
        } else if (des == 2) {
          do {
            ccr += parseInt(
              prompt(
                "Cantidad de carnes desea? el precio es de 24 la unidad (16% de IVA)"
              )
            );
          } while (isNaN(ccr));
          ttcr = ccr * 24;
          pr = (16 * ttcr) / 100;
          ttcr = ttcr + pr;
        }
        break;
      case 3:
        do {
          des = parseInt(prompt("desea comprar: 1. arroz 2. azúcar 3. huevos"));
        } while (des > 3 || des < 1 || isNaN(des));
        if (des == 1) {
          do {
            cca += parseInt(
              prompt(
                "Que cantidad de Arroz desea? el precio es de 11 la unidad"
              )
            );
          } while (isNaN(cca));
          ttar = cca * 11;
        } else if (des == 2) {
          do {
            caz += parseInt(
              prompt("Cuantos kg de azucar de sea? el precio es de 12 el kg")
            );
          } while (isNaN(caz));
          ttaz = caz * 12;
        } else if (des == 3) {
          do {
            ch = parseInt(
              prompt(
                "Que Cantidad de Huevos desea? el precio es de 30 por docena"
              )
            );
          } while (isNaN(ch));
          tth = ch * 30;
        }
        break;
      default:
        break;
    }
    do {
      p = parseInt(prompt("desea comprar algo más? 1. si 2. no"));
    } while (p < 1 || p > 2 || isNaN(p));
  }

  ca = cc + cba;
  cb = ccr + ce;
  cpc = cca + caz + ch;

  monta = ttc + tba;
  montb = tte + ttcr;
  montc = ttar + ttaz + tth;
  ttba = monta + montb + montc;
  cantip = ca + cb + cpc;

  alert(
    "su nombre es: " +
      nom +
      "\n" +
      "su cedula es: " +
      ced +
      "\n" +
      "Cantidad de productos clase A: " +
      ca +
      "\n" +
      "cantidad de cigarrillos: " +
      cc +
      "\n" +
      "cantidad de bebidas alcoholicas: " +
      cba +
      "\n" +
      "cantidad de productos b: " +
      cb +
      "\n" +
      "cantidad de enlatados: " +
      ce +
      "\n" +
      "cantidad de carnes: " +
      ccr +
      "\n" +
      "Cantidad de productos clase c: " +
      cpc +
      "\n" +
      "Cantidad de Arroz: " +
      cca +
      "\n" +
      "Cantidad de Azúcar: " +
      caz +
      "\n" +
      "Cantidad de docenas de huevo: " +
      ch +
      "\n" +
      "monto de la clase A: " +
      monta +
      "\n" +
      "monto de la clase B: " +
      montb +
      "\n" +
      "Monto de la clase C: " +
      montc +
      "\n" +
      "cantidad de productos comprados: " +
      cantip +
      "\n" +
      "el total a pagar es de: " +
      ttba
  );

  pago = parseInt(prompt("ingrese su pago, el monto es de: " + ttba));

  if (pago < ttba) {
    alert("fondo insuficiente");
  } else if (pago == ttba) {
    alert("gracias por su compra");
    gene = gene + ttba;
  } else if (pago > ttba) {
    vuelto = pago - ttba;
    alert("al cliente se le regresa: " + vuelto);
    gene = gene + ttba;
  }
  while (pago < ttba) {
    pago = parseInt(prompt("ingrese su pago, el monto es de: " + ttba));
    if (pago > ttba) {
      vuelto = pago - ttba;
      alert("al cliente se le regresa: " + vuelto);
      gene = gene + ttba;
    }
  }
  acuma = acuma + ca;
  acumb = acumb + cb;
  acumcpc = acumcpc + cpc;
  do {
    z = parseInt(prompt("algún otro cliente? 1. si 2. no"));
  } while (z > 2 || z < 1 || isNaN(z));
}
alert(`el acumulado de los productos C del dia es de: ${acumcpc}`);
alert(`el acumulado de los productos B del dia es de: ${acumb}`);
alert(`el acumulado de los productos A del dia es de: ${acuma}`);
alert(`el monto hecho en el día es de : ${gene}`);
