define(['jquery','nprogress','common','template'],function($,nprogress,undefined,template){
    // 讲师列表数据缓存
    var treacherListCache = null;
    try{
        treacherListCache = JSON.parse(localStorage.getItem('treacherListCache'))
    }catch(e){

    }
    if(treacherListCache){
        $('.table tbody').html(template('teacher-list-tpl',{list:treacherListCache}));
    }else{
        $.get('/v6/teacher',function(data){
            if(data.code == 200){
                localStorage.setItem('treacherListCache',JSON.stringify(data.result));
                $('.table tbody').html(template('teacher-list-tpl',{list:data.result}));
            }
        });
    }
    // 渲染讲师列表

    //由于上面的请求数据渲染是异步进行的，所以直接给生成的元素添加事件不能得到元素
    //使用事件委托(冒泡)，给其父元素添加事件处理程序，但由子元素触发事件冒泡到父级元素
    //把'.teacher-view'添加的事件委托到父级'.table tbody'上
    $('.table tbody').on('click','.teacher-view',function(){
        $.get('/v6/teacher/view',{
            tc_id:$(this).parent().attr('data-id')
        },function(data){
            if(data.code == 200){
                $('#teacherModal').html(template('teacher-view-tpl',data.result));
            }
    })
    });

    // 讲师状态修改
    $('.table tbody').on('click','.teacher-status',function(){
        var $that = $(this);
        $.ajax({
            url:'/v6/teacher/handle',
            type:'post',
            data:{
                tc_id:$(this).parent().attr('data-id'),
                tc_status:$(this).parent().attr('data-status')
            },
            success:function(data){
                $that.html(data.result.tc_status == 0?'开启':'关闭');
                $that.parent().attr('data-status',data.result.tc_status);
            }
        })
    })







    nprogress.done();
})