define(['jquery','jquery_cookie'],function($){
    //ajax请求触发document的两个事件
    $(document).ajaxStart(function(){
        $('.overlay').show();
    }).ajaxStop(function(){
        $('.overlay').hide();
    });

    //侧边栏下拉列表
    $('.navs a').on('click',function(){
        $(this).next().slideToggle();
    });


    /**
     * 根据页面路径定位左侧导航
     * 1、获取当前页面的pathname
     * 2、然后获取所有的a，remove掉active class，
     * 然后再使用pathname获取到应该被选中的a，给它添加active class即可。
     * 3、最后获取该a标签所有的父ul标签，让他们展示出来，如果不展示，我是看不着的。
     * */

    var pathName = window.location.pathname;
    $('.navs a').removeClass('active').filter('[href="'+pathName+'"]').addClass('active')
        .parents('ul').show();

    //退出功能
    $('#logout').on('click',function(){
        $.post('/v6/logout.html',function(data){
            if(data.code == 200){
                location.href = '/html/home/login.html';
            }
        })
    });


    //获取本地cookie数据，同时做容错处理
    var userInfo = null;
    try{
        userInfo = JSON.parse($.cookie('userInfo'));
    }catch(e){
        userInfo = {};
    }
    //然后展示到左侧导航栏
    $('.aside .profile h4').html(userInfo.tc_name?userInfo.tc_name:'undefined');
    $('.aside .profile img').attr('src',userInfo.tc_avatar?userInfo.tc_avatar:'/img/default.png');
})