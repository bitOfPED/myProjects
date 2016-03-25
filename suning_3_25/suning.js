/**
 * webShow()鼠标离开或者进入时，隐藏显示网站导航的下部弹框
 * @param h3
 * @param display
 */
function webShow(h3, display) {
    var div = h3.parentNode.querySelector("div");
    var span = h3.getElementsByTagName("span")[0];
    div.style.display = display;
    span.style.transform = display === "block" ? "rotate(-90deg)" : "rotate(90deg)";
}
/**
 * keepWebShow()保持鼠标未离开时的状态
 * @param div
 * @param display
 */
function keepWebShow(div, display) {
    var n = div.style.display = display;
    var h3 = div.parentNode.querySelector("h3");
    var span = h3.getElementsByTagName("span")[0];
    h3.className = n === "block" ? "keepwzhover" : "";
    h3.style.paddingLeft = n === "block" ? "9px" : "";
    span.style.transform = n === "block" ? "rotate(-90deg)" : "rotate(90deg)";
}
/**
 * myGoods()鼠标划过我的订单，我的易购时下拉菜单的显示隐藏
 * @param li
 * @param display
 */
function myGoods(li, display) {
    var ul = li.querySelector("ul");
    ul.style.display = display;
}
/**
 * onfoucs()点击搜索框时，清空内部内容
 * @param text
 */
function onfoucs(text) {
    var div = document.getElementById("show_search");
    div.style.display = "block";
    text.value = "";
}
/**
 * onb()失去焦点时，显示内容
 * @param text
 */
function onb(text) {
    text.value = "魅族MX5更好用的手机";
    var div = document.getElementById("show_search");
    div.style.display = "none";
}

/**
 * TIMER()轮播图逻辑
 * this.arr[]存放轮播图改变时，相应的背景颜色
 * this.lun_in()图片进入时
 * this.lun_out图片离开时
 */
var timer = null;
var endTime;
function TIMER() {
    this.n = 0;
    this.div = document.getElementById("lun_bg");
    this.as = this.div.getElementsByTagName("a");
    this.arr = ["#FFC605", "#0DBFFF", "#510194"];
    this.as[0].style.display = "block";
    //$(this.as[0]).fadeIn("slow");
    this.div.style.background = "#F53044";
    this.lun_in = function () {
        var div = this.div;
        div.classList.add("bg_changeIn");
        setTimeout(function() {
            div.classList.remove("bg_changeIn");
        },300);
    };
    this.lun_out = function () {
        var div = this.div;
        div.classList.add("bg_changeOut");
        setTimeout(function() {
            div.classList.remove("bg_changeOut");
        },400);
    };
    this.lun = function () {
        if (this.n !== 3) {
            this.lun_in();
            this.as[this.n + 1].style.display = "block";
            this.lun_out();
            //$(this.as[this.n+1]).fadeIn("slow");
            this.div.style.background = this.arr[this.n];
            this.n++;
        } else {
            this.lun_in();
            this.div.style.background = "#F53044";
            this.lun_out();
            for (var i = 1; i < this.as.length; i++) {
                this.as[i].style.display = "none";
                //$(this.as[this.n+1]).fadeOut("slow");
            }
            this.n = 0;
        }
    };
}

var lunbo = new TIMER();
var list_leftP = document.getElementById("list_left");
var list_rightP = document.getElementById("list_right");
timer = setInterval(function () {
    lunbo.lun();
}, 3500);
function stopTimer() {
    list_leftP.style.display = "block";
    list_rightP.style.display = "block";
    clearInterval(timer);
    timer = null;
}

function startTimer() {
    list_leftP.style.display = "none";
    list_rightP.style.display = "none";
    timer = setInterval(function () {
        lunbo.lun();
    }, 3500);
}
/**
 * 点击轮播图上面的右按键
 */
list_rightP.onclick = function () {
    if (lunbo.n !== 3) {
        lunbo.n += 1;
        lunbo.lun_in();
        lunbo.as[lunbo.n].style.display = "block";
        lunbo.div.style.background = lunbo.arr[lunbo.n - 1];
        lunbo.lun_out();
    } else {
        for (var i = 0; i < lunbo.as.length; i++) {
            lunbo.as[i].style.display = "none";
        }
        lunbo.lun_in();
        lunbo.as[0].style.display = "block";
        lunbo.div.style.background = "#F53044";
        lunbo.n = 0;
        lunbo.lun_out();
    }
};
/*点击轮播图上面的左按键*/
list_leftP.onclick = function () {
    if (lunbo.n >= 1) {
        lunbo.n -= 1;
        for (var i = 0; i < lunbo.as.length; i++) {
            lunbo.as[i].style.display = "none";
        }
        lunbo.lun_in();
        lunbo.as[0].style.display = "block";
        lunbo.as[lunbo.n].style.display = "block";
        lunbo.div.style.background = lunbo.n !== 0 ? lunbo.arr[lunbo.n - 1] : "#F53044";
        lunbo.lun_out();
    } else {
        lunbo.lun_in();
        lunbo.as[3].style.display = "block";
        lunbo.div.style.background = lunbo.arr[2];
        lunbo.n = 3;
        lunbo.lun_out();
    }
};

/*列表和隐藏div*/
function show_div(li, display) {
    var index;
    as = li.getElementsByTagName("a");
    lis = li.parentNode.getElementsByTagName("li");
    for (var i = 0; i < lis.length; i++) {
        if (lis[i] == li) {
            index = i;
        }
    }
    var div = document.getElementById("list_div" + (index + 1));
    var n = div.style.display = display;
    for (var i = 0; i < as.length; i++) {
        as[i].style.color = display === "block" ? "#2b2b2b" : "#fff";
    }
    div.onmouseover = function () {
        div.style.display = "block";
        li.className = "onHover";
        for (var i = 0; i < as.length; i++) {
            as[i].style.color = "#2b2b2b";
        }
    };
    div.onmouseout = function () {
        div.style.display = "none";
        li.className = "";
        for (var i = 0; i < as.length; i++) {
            as[i].style.color = "#fff";
        }
    };
}
/***jinrong zhe zhao*****/
$(".jr_zz").mouseenter(function () {
    $(".jr_dzz").slideDown(200);
});
$("#jr_zezhao").mouseleave(function () {
    $(".jr_dzz").slideUp(200);
});
/******lunaside bian se**********/
$("#lunasied_bs a").each(function (index, delem) {
    $(delem).mouseover(function () {
        $(delem).find("i").css("color", "#fa0");
    }).mouseout(function () {
        $(delem).find("i").css("color", "#333");
    });
});
$("#hotport").addClass("ph_hot");
$("#hotport").mouseenter(function () {
    $("#hotproduct").removeClass("ph_hot");
    $("#hotport").addClass("ph_hot");
    $("#phcnt_right2").addClass("ph_none");
    $("#phcnt_right1").removeClass("ph_none");
});
/***************ajax huo qu shou ji lie biao***********************/
$("#hotproduct").mouseenter(function () {
    $("#hotproduct").addClass("ph_hot");
    $("#hotport").removeClass("ph_hot");
    $("#phcnt_right1").addClass("ph_none");
    $("#phcnt_right2").removeClass("ph_none");
    $.getJSON("sql/phone.php", function (data) {
        $("#ajx_phone>li").remove();
        for (var i = 0; i < data.length; i++) {
            $("#ajx_phone").append("<li><a><dl><dt><img src='" + data[i].pimg + "'/></dt><dd>" + data[i].pduan + "</dd></dl></a><span><b>" + data[i].pprice + "</b>00</span></li>");
        }
    });
});
/******deng lu***********/
$("#denglu").click(function () {
    $("#user_enter")[0].style.display = "block";
});
$("#dl_close").click(function () {
    $("#user_enter")[0].style.display = "none";
});
$("#userinform .username").blur(function () {
    if ($("#userinform .username").val() === "") {
        $("#userinform .span1").html("用户名不能为空").css("color", "#f00");
    } else {
        $.getJSON("sql/user.php", function (data) {
                var a = 0;
                for (var i = 0; i < data.length; i++) {
                    if ($("#userinform .username").val() != data[i].username) {
                        a = 0;
                    } else {
                        a = i;
                        break;
                    }
                }
                if (a === 0) {
                    $("#userinform .span1").html("该用户名不存在").css("color", "#f00");
                } else {
                    $("#userinform .span1").html("用户名正确").css("color", "#090");
                    $("#userinform .pwd").blur(function () {
                        if ($("#userinform .pwd").val() != data[a].password) {
                            $("#userinform .span2").html("密码错误").css("color", "#f00");
                        } else {
                            $("#userinform .span2").html("密码正确").css("color", "#090");
                            $("#userinform .denglu").click(function () {
                                $("#user_enter").css("display", "none");
                                $("#dl_success").html("欢迎" + " " + data[a].username).css("color", "#fa0");
                            });
                        }
                    }).focus(function () {
                        $("#userinform .span2").html("");
                    });
                }
            }
        );
    }
}).focus(function () {
    $("#userinform .span1").html("");
});

