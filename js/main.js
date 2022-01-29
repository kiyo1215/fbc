'use strict';

function calc(
  castDrinkQuantity,
  cheki_quantity,
  add_person,
  come_hour,
  come_minute,
  go_hour,
  go_minute,
  first,
  outher_p,
  outher_m,
  champagneA,
  champagneB,
  champagneC,
  champagneD,
  champagneE,
  champagneF,
  champagneG,
  champagneH,
  champagneI,
  extension_q,
  extension_p,
  three_hundred_drink,
  lunch,
  speed_appetizers,
  fire_appetizers,
  whimsical
){
  const time1 = Math.round((go_hour - come_hour) * 60);
  const time2 = Math.round(go_minute - come_minute);
  
  if (first === '60-1' || first === '60-2'|| first === '60-2-l'){
    const time3 = document.getElementById('extension_q').value =
      Math.ceil((time1 + time2 - 60) / 20);
  } else if (first === '90'|| first === '90-l') {
    const time3 = document.getElementById('extension_q').value =
      Math.ceil((time1 + time2 - 90) / 20);
  };

  // キャストドリンク
    const price1 = document.getElementById('field1').value =
    Math.round(castDrinkQuantity * 1200);
  // チェキ
  const price2 = document.getElementById('feild2').value = Math.round((cheki_quantity * 1400) + (add_person * 500));
  // const price21 = Math.round(add_person * 500);
  // const cheki_price = document.getElementById('feild2') = Math.round(price2 + price21);
  // 延長
  const price4 = document.getElementById('extension_p').value =
    Math.round(extension_q * 1000);
  // その他
  const price5 = document.getElementById('outher_p').value =
    Math.round(outher_p * 1);
  const price6 = document.getElementById('outher_m').value = 
    Math.round(outher_m * 1);
  
  // シャンパン
  const price7 = document.getElementById('feild4').value = 
    Math.round(champagneA * 7000);
  const price8 = document.getElementById('feild5').value = 
    Math.round(champagneB * 7000);
  const price9 = document.getElementById('feild6').value = 
    Math.round(champagneC * 10000);
  const price10 = document.getElementById('feild7').value = 
    Math.round(champagneD * 23000);
  const price11 = document.getElementById('feild8').value = 
    Math.round(champagneE * 29000);
  const price12 = document.getElementById('feild9').value = 
    Math.round(champagneF * 35000);
  const price13 = document.getElementById('feild10').value = 
    Math.round(champagneG * 57000);
  const price14 = document.getElementById('feild11').value = 
    Math.round(champagneH * 92000);
  const price15 = document.getElementById('feild12').value = 
    Math.round(champagneI * 138000);
  
  //＋300ドリンク
  const price16 = document.getElementById('feild13').value =
    Math.round(three_hundred_drink * 300);
  
  //フード
  const price17 = document.getElementById('feild14').value =
    Math.round(lunch * 800);
  const price18 = document.getElementById('feild15').value =
    Math.round(speed_appetizers * 400);
  const price19 = document.getElementById('feild16').value =
    Math.round(fire_appetizers * 600);
  const price20 = document.getElementById('feild17').value =
    Math.round(whimsical * 600);
  
  
  const all_price = price1 + price2 + price4 + price5 - price6 + price7 + price8 + price9 + price10 + price11 + price12 + price13 + price14 + price15 + price16 + price17 + price18 + price19 + price20;
  
    if (first === '60-1') {
      const time4 = document.getElementById('all_p').value =
        Math.round(all_price + 3000);
  }
  if (first === '90') {
    const time4 = document.getElementById('all_p').value =
      Math.round(all_price + 3500);
  }
  if (first === '90-l') {
    const time4 = document.getElementById('all_p').value =
      Math.round(all_price + 4000);
  }
  if (first === '60-2') {
       const time4 = document.getElementById('all_p').value =
        Math.round(all_price + 2500);
  }
  if (first === '60-2-l') {
       const time4 = document.getElementById('all_p').value =
        Math.round(all_price + 3500);
  }
};
