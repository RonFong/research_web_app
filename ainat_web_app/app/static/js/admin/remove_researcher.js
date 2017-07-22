$(function(){
    var $submit = $('#submit');
    var $email = $('#email').data({'valid': false});
    var $confirm = $('#confirm').data({'valid': false});
    var pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    $email.on('input', function(){
       if($email.val().search(pattern) !== -1){
           $email.parent().addClass('has-success').removeClass('has-error');
           $email.next().addClass('glyphicon-ok').removeClass('glyphicon-remove');
           $email.valid = true;
           submitCheck();

       }else{
           $email.valid = false;
           $submit.attr('disabled', 'True');
           $email.parent().removeClass('has-success');
           $email.next().removeClass('glyphicon-ok');
       }
    });

    $confirm.on('change', function(){
       if($confirm.is(':checked')){
            $confirm.valid = true;
            submitCheck();
       }else{
           $confirm.valid = false;
           $submit.attr('disabled', 'True');
       }
    });


    $submit.on('click', function(){
        $(this).button('loading');
    });


    function submitCheck(){
        if($email.valid === true && $confirm.valid === true){
            $submit.removeAttr('disabled');
        }
    }

});