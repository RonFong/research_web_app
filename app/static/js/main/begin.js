$(function(){

    var $selectPicker = $('.selectpicker');
    var $supplement = $('#supplement');
    var $submit = $('#submit');

    $selectPicker.selectpicker('mobile').selectpicker('setStyle', 'btn-lg', 'add');

    $selectPicker.on('change', function(){
        if($selectPicker.val() !== ''){
            $supplement.slideDown();
            $submit.removeAttr('disabled');
        }else {
            $submit.attr('disabled', 'true');
            $supplement.slideUp();
        }
    });

});