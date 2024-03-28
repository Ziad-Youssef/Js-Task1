var yearSelector = document.getElementById('year');
var options = '' ;
for(var i =2024; i >=1900; i--){
    options += `<option value="${i}">${i}</option>`;
}
yearSelector.innerHTML = options;

var monthSelector = document.getElementById('month');
var options = '' ;
for(var i =1; i <=12; i++){
    options += `<option value="${i}">${i}</option>`;
}
monthSelector.innerHTML = options;

var daySelector = document.getElementById('day');
var options = '' ;
for(var i =1; i <=31; i++){
    options += `<option value="${i}">${i}</option>`;
}
daySelector.innerHTML = options;