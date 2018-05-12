$(document).ready(function(){
    $('#form').submit(function(e){
        e.preventDefault();

        var uid = $('input[id=uid]').val();
        var pwd = $('input[id=pwd]').val();
        
        var data = {"uid":uid,"pwd":pwd};

        $.ajax({
            url:'/login',
            method:'POST',
            data:data,
            success:function(data){
                alert(data);
            }
        });
    });

    $('#yet').on('click',function(e){
        e.preventDefault();
    });
});