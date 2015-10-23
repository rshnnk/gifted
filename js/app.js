$(document).ready(function(){
    $('a[href^="#"], a[href^="."]').click( function(){ // если в href начинается с # или ., то ловим клик
        var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
          var plus = $(window).innerHeight() / 100 * 5;
        $('html, body').animate({ scrollTop: $(scroll_el).offset().top - plus}, 500); // анимируем скроолинг к элементу scroll_el
        }
        return false; // выключаем стандартное действие
    });

  $("input:radio[name='dif']").each(function(){
      $(this).click(function() {
      var weightvalue = $(this).val();
      $('.summ').text(weightvalue + 'грн.');
    });
  });

    $('.total button').click(function(){
  
            var h3Text = $('.product .modal.in').find('h3').text();
            $("input[name='productname']").val(h3Text);
            
            $('.send-overlay').addClass('active');
            var dif = $("input:radio:checked[name='dif']").attr('data-weigth');
           
            $("input[name='product-dif']").val(dif);
            var radiosize = $('input:radio[name=size]:checked').val();
          
            $("input[name='productsize']").val(radiosize);
    });

    var accessoriesBut = $('#accessoriesbutton').find('button');
    accessoriesBut.click(function(){
      var AccText = $(this).prev('p').text();
       $("input[name='productname']").val(AccText);
       $('.send-overlay').addClass('active');
    });

    $('.send-popup .btn-close').click(function(){
        $('.send-overlay').removeClass('active');
    });




  $('#athlete-3 button').click(function(){
    $(this).parent().parent().modal('hide');
  });

  $("input[name='number']").bind("change keyup input click", function() {
    if (this.value.match(/[^0-9]/g)) {
        this.value = this.value.replace(/[^0-9]/g, '');
    }
  });

  $('.__modals button').click(function (e) {
    $('html, body').animate({
        scrollTop: $('.productcard-modal').offset().top - 120
    }, 'slow');
    $('.btn-close').animate({
      scrollTop: $('.productcard-modal').offset().top -120
    }, 'slow');
  });

  $('.__modals-buttons button').click(function (e) {
    $('html, body').animate({
        scrollTop: $('.athlets .modal').offset().top
    }, 'slow');
    $('.btn-close').animate({
      scrollTop: $('.athlets .modal').offset().top
    }, 'slow');
  });

  $('.__modals button').click(function(){
    if($('.product .modal').hasClass('in')){
      if($("input[name='dif']").is(':checked') === false) {
        $("input[name='dif']").prop('checked', true);
    }
    }
  });

});
