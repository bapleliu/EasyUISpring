$(function () {

    $("#nav").tree({
        lines: true,
        data: [{
            "id": 1,
            "text": "小区",
            "state": "open",
            "iconCls": "icon-system",
            "children": [{
                "id": 101,
                "text": "小区管理",
                "state": "open",
                "iconCls": "icon-manager",
                "attributes": {
                    "myurl": "/EasyUISpring/admin/customlist"
                },
            }]
        }],
        onClick: function (node) {
            if (node.attributes.myurl) {
                if ($('#tabs').tabs('exists', node.text)) {
                    $('#tabs').tabs('select', node.text);
                } else {
                    $('#tabs').tabs('add', {
                        title: node.text,
                        iconCls: node.iconCls,
                        closable: true,
                        href: node.attributes.myurl
                    });
                }
            }
        }
    });

    $('#tabs').tabs({
        fit: true,
        border: false,
    });
});