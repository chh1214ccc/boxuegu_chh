requirejs.config({
    //绝对路径
    baseUrl:'/',
    paths:{
        // 第三方库的路径配置
        jquery:'lib/jquery/jquery',
        bootstarp:'lib/bootstrap/js/bootstrap.min',
        jquery_cookie:'lib/jquery-cookie/jquery.cookie',
        // 自己写的路径配置
        userList: 'js/user/list',
        userProfile: 'js/user/profile',
        common:'js/common/common',
        //course对应的js
        course_add:'js/course/add',
        add_stap1:'js/course/add_stap1',
        add_stap2:'js/course/add_stap2',
        add_stap3:'js/course/add_stap3',
        category:'js/course/category',
        category_add:'js/course/category_add',
        course_list:'js/course/list',
        topic:'js/course/topic',
        //home对应的js
        login:'js/home/login',
        repass:'js/home/repass',
        settings:'js/home/settings',
        //teacher对应的js
        teacher_add:'js/teacher/add',
        teacher_list:'js/teacher/list',
        index:'js/index',
        template:'lib/artTemplate-3.0.1/template',
        nprogress:'lib/nprogress/nprogress',


    },
    shim:{
        bootstarp:{
            deps:['jquery']
        }
    }
});
// 优先以最快的速度开启页面进度条，其他的js加载延后。
require(['nprogress'],function(nprogress){
    nprogress.start();
})
// 所有的页面都需要这两个js，先加载他们。
require(['bootstarp','jquery','common']);

//获取页面的pathname,然后加载对应的js
(function(window){
    // 获取路径
    var pathname = window.location.pathname;
    /**
     * 判断登陆状态:
     *
     * 1、登陆页
     * 1.1、没有SESSID，不用管
     * 1.2、有SESSID，跳转到首页
     *
     * 2、其它页
     * 2.1、没有SESSID，跳转到登陆页
     * 2.2、有SESSID，不用管
     */
    require(['jquery','jquery_cookie'],function($){
        var sessID =  $.cookie('PHPSESSID');
        if(pathname == '/html/home/login.html' && sessID){
            location.href = '/';
        }else if(pathname != '/html/home/login.html' && !sessID){
            location.href = '/html/home/login.html';
        };
        //回调函数是异步加载，如果没有跳转再加载js
        switch (pathname){
            case '/':
                require(['index']);
                break;
            case '/html/user/list.html':
                require(['userList']);
                break;
            case '/html/user/profile.html':
                require(['userProfile']);
                break;
            case '/html/teacher/add.html':
                require(['teacher_add']);
                break;
            case '/html/teacher/list.html':
                require(['teacher_list']);
                break;
            case '/html/home/login.html':
                require(['login']);
                break;
            case '/html/home/repass.html':
                require(['repass']);
                break;
            case '/html/home/settings.html':
                require(['settings']);
                break;
            case '/html/course/add.html':
                require(['course_add']);
                break;
            case '/html/course/add_step1.html':
                require(['add_stap1']);
                break;
            case '/html/course/add_step2.html':
                require(['add_stap2']);
                break;
            case '/html/course/add_step3.html':
                require(['add_stap3']);
                break;
            case '/html/course/category.html':
                require(['category']);
                break;
            case '/html/course/category_add.html':
                require(['category_add']);
                break;
            case '/html/course/list.html':
                require(['course_list']);
                break;
            case '/html/course/topic.html':
                require(['topic']);
                break;
        }

    })

})(window)