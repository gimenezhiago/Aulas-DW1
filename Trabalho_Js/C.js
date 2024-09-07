let condicao1 = false;
let condicao2 = true;
let condicao3 = true;
let condicao4 = false;
let condicao5 = false;
let condicao6 = true;
let condicao7 = true;
let condicao8 = false;

if (condicao1 == true) {
  console.log("A");
  if (condicao5 == true) {
    console.log("B");
  } else {
    if (condicao6 == true) {
      console.log("C");
    } else {
      if (condicao7 == true) {
        console.log("D");
      } else {
        if (condicao8 == true) {
          console.log("E");
        }
      }
    }
  }
} else {
  if (condicao2 == true) {
    console.log("F");
  } else {
    if (condicao3 == true) {
      console.log("G");
    } else {
      if (condicao4 == true) {
        console.log("H");
      }
    }
  }
}
