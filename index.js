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
  let ced;
  let nom;
  do {
    nom = prompt("cual es su nombre?");
  } while (nom > -10000000000000);
  do {
    ced = parseInt(prompt("ingrese su cedula"));
  } while (isNaN(ced));

  p = 1;
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
          prompt(
            "desea comprar: 1. cigarrillos, 2. bebida alcoholica (10% de monto adicional al IVA por valor al lujo)"
          )
        );

        if (des == 1) {
          cc += parseInt(
            prompt("cuantos cigarrillos desea? el precio es de 4 la unidad")
          );
          ttc = cc * 4;
          pr = (ttc * 16) / 100;
          ttc = ttc + pr;
          lj = (ttc * 16) / 100;
          ttc = ttc + lj;
        } else if (des == 2) {
          cba += parseInt(
            prompt("cuantas bebidas desea? el precio es de 8 la unidad")
          );
          tba = cba * 8;
          pr = (16 * tba) / 100;
          tba = tba + pr;
          lj = (10 * tba) / 100;
          tba = tba + lj;
        }
        break;
      case 2:
        cb++;
        des = parseInt(prompt("desea comprar: 1. Enlatados, 2. Carnes"));
        if (des == 1) {
          ce += parseInt(
            prompt(
              "Que cantidad de enlatados desea? el precio es de 22 la unidad (16% de IVA)"
            )
          );
          tte = ce * 22;
          pr = (16 * tte) / 100;
          tte = tte + pr;
        } else if (des == 2) {
          ccr += parseInt(
            prompt(
              "Cantidad de carnes desea? el precio es de 24 la unidad (16% de IVA)"
            )
          );
          ttcr = ccr * 24;
          pr = (16 * ttcr) / 100;
          ttcr = ttcr + pr;
        }
        break;
      case 3:
        cpc++;
        des = parseInt(prompt("desea comprar: 1. arroz 2. azúcar 3. huevos"));
        if (des == 1) {
          cca += parseInt(
            prompt("Que cantidad de Arroz desea? el precio es de 11 la unidad")
          );
          ttar = cca * 11;
        } else if (des == 2) {
          caz += parseInt(
            prompt("Cuantos kg de azucar de sea? el precio es de 12 el kg")
          );
          ttaz = caz * 12;
        } else if (des == 3) {
          ch = parseInt(
            prompt(
              "Que Cantidad de Huevos desea? el precio es de 30 por docena"
            )
          );
          tth = ch * 30;
        }
        break;
      default:
        break;
    }

    p = parseInt(prompt("desea comprar algo más? 1. si 2. no"));
  }

  let monta = ttc + tba;
  let montb = tte + ttcr;
  let montc = ttar + ttaz + tth;
  let ttba = monta + montb + montc;
  let cantip = ca + cb + cpc;

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

  z = parseInt(prompt("algún otro cliente? 1. si 2. no"));
}

alert(`el monto hecho en el día es de : ${gene}`);
