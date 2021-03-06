define(['jquery','nprogress','common','template'],function($,nprogress,undefined,template){

    // 渲染讲师列表
    $.get('/v6/teacher',function(data){
        if(data.code == 200){
            $('.table tbody').html(template('teacher-list-tpl',{list:data.result}));
        }
    });
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
    })






    nprogress.done();
})