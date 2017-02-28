define(['jquery','nprogress','common','template'],function($,nprogress,undefined,template){

    // ��Ⱦ��ʦ�б�
    $.get('/v6/teacher',function(data){
        if(data.code == 200){
            $('.table tbody').html(template('teacher-list-tpl',{list:data.result}));
        }
    });
    //�������������������Ⱦ���첽���еģ�����ֱ�Ӹ����ɵ�Ԫ������¼����ܵõ�Ԫ��
    //ʹ���¼�ί��(ð��)�����丸Ԫ������¼�������򣬵�����Ԫ�ش����¼�ð�ݵ�����Ԫ��
    //��'.teacher-view'��ӵ��¼�ί�е�����'.table tbody'��
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