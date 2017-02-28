requirejs.config({
    //����·��
    baseUrl:'/',
    paths:{
        // ���������·������
        jquery:'lib/jquery/jquery',
        bootstarp:'lib/bootstrap/js/bootstrap.min',
        jquery_cookie:'lib/jquery-cookie/jquery.cookie',
        // �Լ�д��·������
        userList: 'js/user/list',
        userProfile: 'js/user/profile',
        common:'js/common/common',
        //course��Ӧ��js
        course_add:'js/course/add',
        add_stap1:'js/course/add_stap1',
        add_stap2:'js/course/add_stap2',
        add_stap3:'js/course/add_stap3',
        category:'js/course/category',
        category_add:'js/course/category_add',
        course_list:'js/course/list',
        topic:'js/course/topic',
        //home��Ӧ��js
        login:'js/home/login',
        repass:'js/home/repass',
        settings:'js/home/settings',
        //teacher��Ӧ��js
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
// �����������ٶȿ���ҳ���������������js�����Ӻ�
require(['nprogress'],function(nprogress){
    nprogress.start();
})
// ���е�ҳ�涼��Ҫ������js���ȼ������ǡ�
require(['bootstarp','jquery','common']);

//��ȡҳ���pathname,Ȼ����ض�Ӧ��js
(function(window){
    // ��ȡ·��
    var pathname = window.location.pathname;
    /**
     * �жϵ�½״̬:
     *
     * 1����½ҳ
     * 1.1��û��SESSID�����ù�
     * 1.2����SESSID����ת����ҳ
     *
     * 2������ҳ
     * 2.1��û��SESSID����ת����½ҳ
     * 2.2����SESSID�����ù�
     */
    require(['jquery','jquery_cookie'],function($){
        var sessID =  $.cookie('PHPSESSID');
        if(pathname == '/html/home/login.html' && sessID){
            location.href = '/';
        }else if(pathname != '/html/home/login.html' && !sessID){
            location.href = '/html/home/login.html';
        };
        //�ص��������첽���أ����û����ת�ټ���js
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