'use strict';

function calc(
  castDrinkQuantity,
  cheki_quantity,
  come_hour,
  come_minute,
  go_hour,
  go_minute,
  first,
  finish_hour,
  finish_minute,
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
  extension_p
){
  const time1 = Math.round((go_hour - come_hour) * 60);
  const time2 = Math.round(go_minute - come_minute);
  const time3 = Math.round((time1 - time2) % 20);
  const time3_2 = Math.round((time1 - time2 - 90) % 20);
  const time4 = Math.round((time1 - time2 - 90) % 20);
  const time7 = Math.round(come_hour * 1);
  //　延長回数、ちょうどいい時間
  if (first === '60-1' || first === '60-2') {
    const time5 = document.getElementById('field1').value =
    Math.ceil((time1 + time2 - 60) / 20);
    const time6 = Math.round(20-((time1 + time2) % 20));
    if (time3 == 0){
      document.getElementById('feild25').value = go_hour;

      document.getElementById('feild26').value = go_minute;
    }
    if (time3 != 0) {
      document.getElementById('feild25').value = Math.floor(time7 + ((time1 + time2) / 60));
      
      document.getElementById('feild26').value =
        Math.round((time1 + time2) % 60 + time6);
    }
  }
  if (first === '90') {
    const time5 = document.getElementById('field1').value =
      Math.ceil((time1 + time2 - 90) / 20);
    const time6 = Math.round(20 - ((time1 + time2 + 30) % 20));
    if (time3_2 == 0){
      document.getElementById('feild25').value = go_hour;

      document.getElementById('feild26').value = go_minute;
    }
    if (time3_2 != 0) {
      document.getElementById('feild25').value = Math.floor(time7 + ((time1 + time2) / 60));
      
      document.getElementById('feild26').value =
        Math.round((time1 + time2) % 60 + time6);
    }
  };
  





  // 延長料金
  const price4 = document.getElementById('field2').value =
    Math.round(extension_q * 1000);

  // キャストドリンク
    const price1 = document.getElementById('field3').value =
    Math.round(castDrinkQuantity * 1200);
  // チェキ
  const price2 = document.getElementById('field4').value = Math.round(cheki_quantity * 1400);
  // その他
  const price5 = document.getElementById('outher_p').value =
    Math.round(outher_p * 1);
  const price6 = document.getElementById('outher_m').value = 
    Math.round(outher_m * 1);
  
  // シャンパン
  const price7 = document.getElementById('field5').value = 
    Math.round(champagneA * 7000);
  const price8 = document.getElementById('field6').value = 
    Math.round(champagneB * 7000);
  const price9 = document.getElementById('field7').value = 
    Math.round(champagneC * 10000);
  const price10 = document.getElementById('field8').value = 
    Math.round(champagneD * 23000);
  const price11 = document.getElementById('field9').value = 
    Math.round(champagneE * 29000);
  const price12 = document.getElementById('field10').value = 
    Math.round(champagneF * 35000);
  const price13 = document.getElementById('field11').value = 
    Math.round(champagneG * 57000);
  const price14 = document.getElementById('field12').value = 
    Math.round(champagneH * 92000);
  const price15 = document.getElementById('field13').value = 
    Math.round(champagneI * 138000);
  
  
  const all_price = price1 + price2 + price4 + price5 - price6 + price7 + price8 + price9 + price10 + price11 + price12 + price13 + price14 + price15;
  
  if (first === '60-1') {
      const time4 = document.getElementById('all_p').value =
        Math.round(all_price + 3000);
  }
  if (first === '90') {
    const time4 = document.getElementById('all_p').value =
      Math.round(all_price + 3500);
  }
  if (first === '60-2') {
       const time4 = document.getElementById('all_p').value =
        Math.round(all_price + 2500);
  }
};
