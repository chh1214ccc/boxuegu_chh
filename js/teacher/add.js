define(['jquery','nprogress','common','util','template','datepicker','datepickerLanguage'],
    function($,nprogress,undefined,util,template,datepicker){


    /**
     * ��ȡtc_id��ѯ�ַ��������������Ϊ��ǰ�ǽ�ʦ�༭ҳ�棬û������Ϊ���½�ʦ���ҳ�档
     *
     * �༭��ʦ��
     * 1���Ȼ�ȡ��ʦ��Ϣ��չʾ������
     * 2�������ύ���¼���תΪajax��ʽ�ύ����ʦ�޸Ľӿڡ�
     *
     * ��ӽ�ʦ��
     * 1�������ύ���¼���תΪajax��ʽ�ύ����ʦ��ӽӿڡ�
     * */

        // ���ݱ༭����ӣ���Ӧ����Ⱦ��

    var tcId = util.getQueryString('tc_id');
    if(tcId){
        $.get('/v6/teacher/edit',{ tc_id:tcId },function(data){
            if(data.code == 200){
                $('.teacher-add').html(template('teacher_add_tpl',data.result));
                $('#datepicter').datepicker({
                    language:'zh-CN',
                    endDate:new Date(),
                    format:'yyyy-mm-dd'
                })
            }
        })
    }else{
        $('.teacher-add').html(template('teacher_add_tpl',{}));
        $('#datepicter').datepicker({
            language:'zh-CN',
            endDate:new Date(),
            format:'yyyy-mm-dd'
        })
    }


    /**
     * �������ύ�¼���ת��Ϊajax����
     * ����Ǳ༭����ô����/v6/teacher/update�� ������Ҫһ��tc_id������
     * �������ӣ���ô����/v6/teacher/add��
     * */
    $('#teacher-add-form').on('submit',function(){
        $.ajax({
            url:'/v6/teacher'+(tcId?"/update":"/add"),
            type:'post',
            data:$(this).serialize()+(tcId?"&tc_id="+tcId:""),
            success:function(data){
                if(data.code== 200){
                    location.href = '/html/teacher/list.html';
                }
            }
        })
        return false;
    })

    nprogress.done();
})