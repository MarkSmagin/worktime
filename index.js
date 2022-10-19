var days = [
  'Воскресенье',
  'Понедельник',
  'Вторник',
  'Среда',
  'Четверг',
  'Пятница',
  'Суббота'
];
var d = new Date();
var n = d.getDay();
console.log(n);

$('.clinic-worktime').accordion({
  heightStyle: 'content',
  active: true,
  collapsible: true,
});

$('.clinic-worktime').on('click', function(){
  if($('.current_worktime').hasClass('worktime_underline')){
    setTimeout(() => {
      $('.current_worktime').removeClass('worktime_underline');
    }, 400);
  } else {
    $('.current_worktime').addClass('worktime_underline');
  }
})

if(n >= 1 && n <= 5){
  $('.current_worktime').children('div').text($('.weekday').children('div').text());
} else if(n == 6){
  $('.current_worktime').children('div').text($('.saturday').children('div').text());
} else{
  $('.current_worktime').children('div').text($('.sunday').children('div').text());
}