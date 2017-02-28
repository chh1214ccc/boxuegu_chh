define(['jquery','jquery_cookie','nprogress'],function($,undefined,nprogress){

    /**
     * 展示用户的历史登陆头像：
     * 1、获取userInfo这个cookie值
     * 2、把cookie字符串转化为对象
     * 3、设置登陆页的img-src为对象中的tc_avatar属性值，如果没有给一个默认头像的地址
     */
    var userInfo = null;
    try{
        userInfo = JSON.parse($.cookie('userInfo'));

    }catch(e){
        userInfo = {};
    }
    $('.login .avatar img').attr('src',userInfo.tc_avatar?userInfo.tc_avatar:'/img/default.png');

    /*1.先监听表单的提交事件
    *2.事件中阻止表单默认跳转
    *3.事件中ajax发送表单数据
    *4.如果code==200证明登录成功
    * */
    $('#form-login').on('submit',function(){
        $.ajax({
            url:'/v6/login',
            type:'post',
            data:$(this).serialize(),
            success:function(data){
                if(data.code == 200){
                    $.cookie('userInfo',JSON.stringify(data.result),{path:'/'});
                    location.href = '/';
                }
            },
            error:function(){
                console.log('false');
            }
        })
        return false;
    })

    nprogress.done();
});