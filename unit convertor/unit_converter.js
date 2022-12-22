let ans=document.getElementById("value-sec")
console.log(ans)
ans.textContent=10;
let M1=document.getElementById("m1")
let M2=document.getElementById("m2")
let M3=document.getElementById("m3")
let val1=ans.textContent*3.28084
let val2=ans.textContent*0.3048
console.log(val1)
M1.textContent=ans.textContent + " Meters = "+val1.toFixed(3) + " Feet" +" | "+
             ans.textContent + " Feet = "+val2.toFixed(3)+ " Meters"
let val3=ans.textContent*0.264172
let val4=ans.textContent*3.78541
M2.textContent=ans.textContent + " Liters = "+val3.toFixed(3) + " Gallons" +" | "+
              ans.textContent + " Gallons = "+val4.toFixed(3)+ " Liters"

let val5=ans.textContent*2.20462
let val6=ans.textContent*0.453592
M3.textContent=ans.textContent + " Kilos = "+val5.toFixed(3) + " Pounds" +" | "+
          ans.textContent + " Pounds = "+val6.toFixed(3)+ " Kilos"//
