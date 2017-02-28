define(['jquery','jquery_cookie','nprogress'],function($,undefined,nprogress){

    /**
     * չʾ�û�����ʷ��½ͷ��
     * 1����ȡuserInfo���cookieֵ
     * 2����cookie�ַ���ת��Ϊ����
     * 3�����õ�½ҳ��img-srcΪ�����е�tc_avatar����ֵ�����û�и�һ��Ĭ��ͷ��ĵ�ַ
     */
    var userInfo = null;
    try{
        userInfo = JSON.parse($.cookie('userInfo'));

    }catch(e){
        userInfo = {};
    }
    $('.login .avatar img').attr('src',userInfo.tc_avatar?userInfo.tc_avatar:'/img/default.png');

    /*1.�ȼ��������ύ�¼�
    *2.�¼�����ֹ��Ĭ����ת
    *3.�¼���ajax���ͱ�����
    *4.���code==200֤����¼�ɹ�
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