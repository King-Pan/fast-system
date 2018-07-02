$(function () {
    $('#userTable').bootstrapTable({
        method: 'get',                      //请求方式（*）
        url: '/users/',
        toolbar: '#toolbar',              //工具按钮用哪个容器
        striped: true,                      //是否显示行间隔色
        cache: false,                       //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
        pagination: true,                   //是否显示分页（*）
        sortable: true,                     //是否启用排序
        sortOrder: "asc",                   //排序方式
        sidePagination: "server",           //分页方式：client客户端分页，server服务端分页（*）
        pageNumber: 1,                      //初始化加载第一页，默认第一页,并记录
        pageSize: 20,                     //每页的记录行数（*）
        pageList: [10, 25, 50, 100],        //可供选择的每页的行数（*）
        search: false,                      //是否显示表格搜索
        strictSearch: true,
        showColumns: true,                  //是否显示所有的列（选择显示的列）
        showRefresh: true,                  //是否显示刷新按钮
        minimumCountColumns: 2,             //最少允许的列数
        clickToSelect: true,                //是否启用点击选中行
        //height: 500,                      //行高，如果没有设置height属性，表格自动根据记录条数觉得表格高度
        uniqueId: "userId",                     //每一行的唯一标识，一般为主键列
        idField: "userId",
        showToggle: false,                   //是否显示详细视图和列表视图的切换按钮
        showFullscreen: true,
        cardView: false,                    //是否显示详细视图
        detailView: false,                  //是否显示父子表
        columns: [{
            field: 'userId',
            title: '用户编码',
            visible: false,
            align: 'center',
            valign: 'center'
        }, {
            field: 'userName',
            title: '用户名称',
            align: 'center',
            valign: 'center'
        }, {
            field: 'nickName',
            title: '昵称',
            align: 'center',
            valign: 'center'
        }, {
            field: 'email',
            title: '邮箱',
            align: 'center',
            valign: 'center'
        }, {
            field: 'phoneNum',
            title: '电话',
            align: 'center',
            valign: 'center'
        }, {
            field: 'status',
            title: '状态',
            align: 'center',
            valign: 'center'
        }, {
            field: 'createTime',
            title: '创建时间',
            align: 'center',
            valign: 'center',
            formatter: formatterUtils.getFullTime
        }, {
            field: 'lastLoginTime',
            title: '最后登录时间',
            align: 'center',
            valign: 'center',
            formatter: formatterUtils.getFullTime
        }]
    });

    $("#infoModal").modal("show");
    console.log($('#infoForm').serializeArray());
    console.log($('#infoForm').serialize());

});


$(document).ready(function () {
    $('#infoForm').bootstrapValidator({
        message: 'This value is not valid',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            userName: {
                message: 'The username is not valid',
                validators: {
                    notEmpty: {
                        message: '用户名不能为空'
                    },
                    stringLength: {//检测长度
                        min: 6,
                        max: 30,
                        message: '长度必须在6-30之间'
                    },
                    regexp: {//正则验证
                        regexp: /^[a-zA-Z0-9]+$/,
                        message: '所输入的字符不符要求【必须是字母和数字】'
                    },
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: '邮件不能为空'
                    },
                    emailAddress: {
                        message: '请输入正确的邮件地址如：123@qq.com'
                    }
                }
            },
            nickName: {
                validators: {
                    notEmpty: {
                        message: '昵称不能为空'
                    },
                    stringLength: {//检测长度
                        min: 2,
                        max: 10,
                        message: '长度必须在2-10之间'
                    },
                    regexp: {//正则验证
                        regexp: /^[\u4e00-\u9fa5_a-zA-Z0-9]+$/,
                        message: '所输入的字符不符要求【必须是字母、数字和中文字符】'
                    }


                }
            },
            phoneNum: {
                validators: {
                    notEmpty: {
                        message: '手机号码不能为空'
                    },
                    stringLength: {
                        min: 11,
                        max: 11,
                        message: '请输入11位手机号码'
                    },
                    regexp: {
                        regexp: /^1[3|5|8]{1}[0-9]{9}$/,
                        message: '请输入正确的手机号码'
                    }
                }
            }
        }
    });
});


