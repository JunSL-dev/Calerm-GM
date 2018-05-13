$(document).ready(function(){
    $('.info-on, #yet, #close').on('click',function(){
        var data = $(this).data("number");

        location.replace("/#t"+data);
    });

    $('#login-form').submit(function(e){
        e.preventDefault();

        var uid = $('input[id=uid]').val();
        var pwd = $('input[id=pwd]').val();
        
        var data = {"uid":uid,"pwd":pwd};

        $.ajax({
            url:'/login',
            method:'POST',
            data:data,
            success:function(data){
                if(data.no){
                    $('#no').html("메일 혹은 비밀번호가 올바르지 않습니다.").fadeIn(300);
                    $('#no').parent().find('label').css('color','#fdc34a');
                }
                
                if(data.result){
                    location.replace('/main');
                }
            }
        });
    });

    $('#sign-form').submit(function(e){
        e.preventDefault();

        var name = $('input[id=sname]').val();
        var uid = $('input[id=suid]').val();
        var pwd = $('input[id=spwd]').val();
        var pwd_check = $('input[id=spwd-check]').val();
        
        if(pwd != pwd_check){
            $('#same').html("비밀번호가 달라요").fadeIn(300);
            $('#same').parent().css('color','#fdc34a');
            return;
        }

        var data = {"name":name,"uid":uid,"pwd":pwd};

        $.ajax({
            url:'/signup',
            method:'Post',
            data:data,
            success:function(data){
                if(data.already){
                    $('#already').html("이미 존재하는 아이디 입니다!").fadeIn(300);
                    $('#already').parent().css('color','#fdc34a');
                }

                if(data.result){
                    location.replace('/main');
                    // location.href = "/main";
                }
            }
        });
    });
});