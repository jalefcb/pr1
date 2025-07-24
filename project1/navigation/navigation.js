
var toggle=document.querySelector('.toggle');
var navigation=document.querySelector('.navigation');

toggle.addEventListener('click',function(){
  toggle.classList.toggle('active');
  navigation.classList.toggle('active');
})






const menuList = document.querySelectorAll('.list');

menuList.forEach(item => {
  item.addEventListener('click', function(event) {
    menuList.forEach(item => item.classList.remove('active'));

    this.classList.add('active');

    event.preventDefault();
  });
});



