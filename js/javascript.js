$(document).ready(function(){
    $("#but1").click(function(event){
             $.getJSON('../HTML/autumn.json', function (jsonObject){
             $("#name").html('<center>'+'<p style="font-size: 13pt; text-shadow: 1px 1px #ffffff, 1px -1px #ffffff,  3px 3px 6px #ffffff;"> <b>Название поры года: </b>' + jsonObject.name + '</p>'+ '</center>');
             $("#duration").html('<center>'+'<p style="font-size: 13pt;text-shadow: 1px 1px #ffffff, 1px -1px #ffffff,  3px 3px 6px #ffffff;"> <b>Продолжительность по календарю: </b>' + jsonObject.duration + '</p>'+ '</center>');
             $("#temperature").html('<center>'+'<p style="font-size: 13pt;text-shadow: 1px 1px #ffffff, 1px -1px #ffffff,  3px 3px 6px #ffffff;"> <b>Средняя температура в РБ: </b>' + jsonObject.temperature[0].desc + jsonObject.temperature[0].quantity + "<br>" + jsonObject.temperature[1].desc + jsonObject.temperature[1].quantity + "<br>" +  jsonObject.temperature[2].desc + jsonObject.temperature[2].quantity + '</p>'+ '</center>');			
             $("#description").html('<center>'+'<p style="font-size: 13pt;text-shadow: 1px 1px #ffffff, 1px -1px #ffffff,  3px 3px 6px #ffffff;"> <b>Краткое описание: </b>' + jsonObject.description + '</p>'+ '</center>');
             });
             $("#autumn").load("../HTML/autumn.html");
     });
    
     
  });