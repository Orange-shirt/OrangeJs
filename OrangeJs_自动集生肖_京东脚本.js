var EwmPicture = "OrangeJsRes"; //存放活动入口二维码的文件夹
files.ensureDir("/storage/emulated/0/OrangeJsRes/"); //确保文件夹存在，不存在自动创建
var EwmT = files.exists("/storage/emulated/0/OrangeJsRes/JD_QRcode_OrangeJs.jpg"); //判断文件是否存在
if (EwmT == false) {
    files.removeDir("/storage/emulated/0/OrangeJsRes/"); //防止有其它文件捣乱，各位也不要在此文件夹存其它东西
    files.ensureDir("/storage/emulated/0/OrangeJsRes/"); //确保文件夹存在，不存在自动创建
    toastLog("正在下载活动入口二维码……\n请确保已授予存储权限！");
    var url = "https://code.aliyun.com/orange_shirt/OrangeJs/raw/master/OtherRes/JDQRcode_OrangeJs.png";
    var res = http.get(url);
    if (res.statusCode != 200) {
        dialogs.alert("活动入口二维码下载失败", "这可能是您的网络不好导致的，请检查网络是否正常后再重新运行脚本吧 :c" + "\nHTTP状态码" + res.statusCode);
    }
    files.writeBytes("/storage/emulated/0/OrangeJsRes/JD_QRcode_OrangeJs.jpg", res.body.bytes());
    toast("下载成功");
    //var Re=files.rename("/storage/emulated/0/OrangeJsRes/QRcode_", "QRcode_ForJd_byOrangeJs.png");

    //if(Re==true){
    //toastLog("重命名活动二维码已成功");
    //}
}

log("*   ╉ The Animal Protecting ╊");
log("*　　┏┓　　　┏┓+ +");
log("*　┏┛┻━━━┛┻┓ + +");
log("*　┃　　　　　　　┃");
log("*　┃　　　━　　　┃ ++ + + +");
log("*　████━████ 　+");
log("*　┃　　　　　　　┃ +");
log("*　┃　　　┻　　　┃")
log("*　┃　　　　　　　┃ + +");
log("*　┗━┓　　　┏━┛");
log("*　　　┃　　　┃");
log("*　　　┃　　　┃ + + + +");
log("*　　　┃　　　┃　　　　");
log("*　　　┃　　　┃ + 　");
log("*　　　┃　　　┃")
log("*　　　┃　　　┃　　+");
log("*　　　┃　　　┗━━━┓ + +")
log("*　　　┃　　　　　　　┣┓+ + + ");
log("*　　　┃　　　　　　　┏┛+ +");
log("*　　　┗┓┓┏━┳┓┏┛ + ");
log("*　　　　┃┫┫　┃┫┫");
log("*　　　　┗┻┛　┗┻┛+ + ");
log("*    Code is far away from bug!");
log("*        神兽保佑,代码无bug");


dialogs_js();
var height = device.height;
var width = device.width;


function dialogs_js() {
    var ScriptVersion = ("Beta1.1"); //版本
    log("软件脚本已开始运行，如果没有弹出菜单请强行停止再打开本软件！");
    var options_ = ["▶️ 开始运行脚本", "🕒 定时运行脚本", "⏹ 停止运行脚本", "🌐 向作者反馈问题", "*️⃣ 脚本介绍/作者信息", "ℹ️ Q&A常见问题解答"]
    var i = dialogs.select("*+*+*+* 橘衫の脚本 *+*+*+*\n*+*+*+*  Orange Js *+*+*+*\n\n欢迎使用 (◍•ᴗ•◍)❤" + "\n" + "“自动集生肖”" + ScriptVersion + "\n请选择一个要进行的选项", options_);
    if (i < 0) {
        toastLog("没有选择，如需关闭对话框\n  请选择“停止运行脚本”");
        dialogs_js();
    } else if (i == 0) {
        toastLog(options_[i]);
        context_Manualstate = 0;
        Set_Back_way();
    } else if (i == 2) {
        toastLog(options_[i]);
        exit();
    } else if (i == 3) {
        toastLog(options_[i]);
        app.openUrl("https://wj.qq.com/s2/5238744/d982");
        dialogs_js();
    } else if (i == 4) {
        toastLog(options_[i]);
        alert("=(^･ω･^)=  脚本作者\n酷安@橘衫下邂逅的时光", "“自动集生肖” " + ScriptVersion + "\n当前软件版本" + app.versionName + "(" + app.versionCode + ")\n\n全自动的京东活动脚本！\n支持多种分辨率，安卓7+无需ROOT！\n支持启动后自动更新脚本，无需费心即可保持最新，且开放全部的脚本代码！\n脚本的全部运行不加任何广告，不干任何不相关的事情！不触碰任何个人隐私！\n此脚本为兴趣制作，仅供参考，严禁售卖\n\n如有任何问题，欢迎向作者反馈哦～");
        dialogs_js();
    } else if (i == 1) {
        toastLog(options_[i]);
        device.keepScreenDim();
        toastLog("检测权限设置……");
        context_Manualstate = 0;
        toastLog("等待无障碍权限开启……\n您必须手动授予本软件无障碍权限\n否则本软件将无法工作！");
        auto.waitFor();
        toastLog("无障碍权限已开启" + "\n" + "继续运行脚本……");
        sleep(3000);
        toastLog("为保证脚本正常运行\n请授予本软件悬浮窗权限");
        sleep(2000);
        var test_rawWindow = floaty.rawWindow(
            <frame gravity="center" bg="#00000000"/>
        );
        test_rawWindow.setSize(-1, -1);
        test_rawWindow.setTouchable(false);
        setTimeout(() => {
            test_rawWindow.close();
        }, 1000);
        toastLog("悬浮窗权限已开启！");
        sleep(2000);
        wait_Time_over();
    } else if (i == 5) {
        toastLog(options_[i]);
        Q_A_();
    }
}

function Q_A_() {
    var Q1 = ("1⃣MIUI11如何开启无障碍服务？");
    var A1 = ("💬一般情况下脚本运行会自动调出无障碍服务设置，之后只需在无障碍服务设置中找到“已下载的服务”点击后找到“橘衫の脚本”打开即可。\n手动打开无障碍权限的方法为\n①打开“设置”→②在“搜索系统设置项”搜索“无障碍”点击第一项→③再在无障碍设置中找到“已下载的服务”点击进入后找到“橘衫の脚本”打开即可");

    var Q2 = ("2⃣脚本突然停到京东搜索框不运行了，怎么办？");
    var A2 = ("💬这种情况一般是京东卡顿引起的。如脚本停到搜索框不动且日志中提示“找不到搜索按钮”您就可以尝试关掉京东再打开至京东搜索界面即可。若依然没有运行可尝试重启手机后再次运行脚本");

    var Q3 = ("3⃣脚本运行到活动界面提示找不到任务");
    var A3 = ("💬如出现此问题请先检查一下“活动界面”中是不是真的没有任务了，如果有任务可以尝试重启手机后重新运行脚本，若重启后依然在活动界面提示找不到任务请立即向作者反馈。");

    var Q4 = ("4⃣安卓6.0以下系统能否使用本脚本？");
    var A4 = ("💬本脚本完全使用Auto.js制作。因此在安卓6.0以下系统会不支持无障碍服务以及造成大量函数失效，因此本脚本是不支持安卓6.0及以下系统的，敬请谅解");

    var Q5 = ("5⃣定时运行之后却没有在预定的时间运行脚本");
    var A5 = ("💬使用定时运行脚本会自动设置屏幕常亮并驻留后台，但清理本软件或者锁屏甚至关机以及关闭本软件必要的无障碍权限和悬浮窗权限都将会使定时运行失效，建议在定时运行时将本软件加入清理白名单或锁定本软件后台且不要锁屏以及不要关闭无障碍与悬浮窗权限即可");

    var Q_A_options = [Q1, Q2, Q3, Q4, Q5]
    var Q_A = dialogs.select("◖⚆ᴥ⚆◗\n Q&A常见问题解答", Q_A_options);
    if (Q_A == 0) {
        dialogs.alert(Q1, A1);
        Q_A_();
    } else if (Q_A == 1) {
        dialogs.alert(Q2, A2);
        Q_A_();
    } else if (Q_A == 2) {
        dialogs.alert(Q3, A3);
        Q_A_();
    } else if (Q_A == 3) {
        dialogs.alert(Q4, A4);
        Q_A_();
    } else if (Q_A == 4) {
        dialogs.alert(Q5, A5);
        Q_A_();
    } else if (Q_A < 0) {
        dialogs_js();
    }
}

function Set_Back_way() {
    //💟🕎⛎设定返回方法及滑动速度的代码
    var options_hq = ["🔙 普通的返回\n(使用无障碍权限)", "#⃣ 使用ROOT返回\n(必须授予本软件ROOT权限)", "🔍 通过调用搜索界面进入\n（“曲线救国法” 若其它返回均失效\n    来尝试此方法吧）", "👉👉🏻👉🏼👉🏽👉🏾👉🏿 \n从屏幕中间从左向内滑动\n(全面屏手势返回 例如:小米MIUI)", "              👈🏿👈🏾👈🏽👈🏼👈🏻👈 \n从屏幕中间从右向内滑动\n(全面屏手势返回 例如:华为EMUI)", "👆👆🏻👆🏼👆🏽👆🏾👆🏿 \n从屏幕左侧下方向上滑动\n(全面屏手势返回 例如:锤子Smartisan UI)", "               ☝🏿☝🏾☝🏽☝🏼☝🏻☝️ \n从屏幕右侧下方向上滑动\n(全面屏手势返回)"]
    var i_back = dialogs.select(" Hi! ( ╹▽╹ )\n请选择一个方法\n用于实现返回操作", options_hq);
    if (i_back >= 0) {
        toastLog("您选择的是" + options_hq[i_back]);
        sleep(2000);
        var options_select = options_hq[i_back];
        context_i_back = i_back;
    } else {
        toastLog("没有选择返回方法！");
        device.cancelKeepingAwake();
        dialogs_js();
    }
    if (i_back > 2) {
        var options_hd = ["200毫秒\n(默认，如果太快请选其它)", "500毫秒", "800毫秒", "1秒(1000毫秒)", "1.5秒（1500毫秒）", "2秒（2000毫秒）"]
        var iix = dialogs.select("Ok! (・∀・) 您选择了:\n" + options_select + "\n请选择滑动速度\n单位:毫秒（1秒=1000毫秒）", options_hd);
    }
    if (iix == 0) {
        context_gestures_speed = 200;
        toastLog("滑动速度设定为\n" + context_gestures_speed + "毫秒");
        sleep(2000);
    }
    if (iix == 1) {
        context_gestures_speed = 500;
        toastLog("滑动速度设定为\n" + context_gestures_speed + "毫秒");
        sleep(2000);
    }
    if (iix == 2) {
        context_gestures_speed = 800;
        toastLog("滑动速度设定为\n" + context_gestures_speed + "毫秒");
        sleep(2000);
    }
    if (iix == 3) {
        context_gestures_speed = 1000;
        toastLog("滑动速度设定为\n" + context_gestures_speed + "毫秒");
        sleep(2000);
    }
    if (iix == 4) {
        context_gestures_speed = 1500;
        toastLog("滑动速度设定为\n" + context_gestures_speed + "毫秒");
        sleep(2000);
    }
    if (iix == 5) {
        context_gestures_speed = 2000;
        toastLog("滑动速度设定为\n" + context_gestures_speed + "毫秒");
        sleep(2000);
    }
    if (iix < 0) {
        toastLog("没有选择滑动速度");
        Set_Back_way();
    }
}
sleep(1000);
toastLog("等待无障碍权限开启……\n您必须手动授予本软件无障碍权限\n否则本软件将无法工作！");
auto.waitFor();
toastLog("无障碍权限已开启" + "\n" + "继续运行脚本……");

function wait_Time_over() {
    var i_wait = dialogs.singleChoice("🕗 定时运行\n\n(＾∇＾)ﾉ♪\n请选择一个选项\n计时结束会自动运行", ["1分钟后运行", "5分钟后运行", "10分钟后运行", "30分钟后运行", "一小时后运行", "两小时后运行", "三小时后运行", "五小时后运行", "八小时后运行"], 2);
    if (i_wait < 0) {
        toast("您取消了选择");
        device.cancelKeepingAwake();
        dialogs_js();
    }
    if (i_wait >= 0) {
        context_i_wait = i_wait;
    }
    if (i_wait == 0) {
        var choice_confirm = dialogs.confirm("您选择了1分钟后运行", "点击确定进行一次设定返回操作的方法后，脚本将在您设定的时间结束后开始自动运行\n请不要清理本软件的后台或者锁屏手机等，否则可能会造成定时任务失效");
        if (choice_confirm == false) {
            toastLog("取消了定时运行确认");
            wait_Time_over();
        } else {
            Set_Back_way();
            waiting_time();
        }
    }
    if (i_wait == 1) {
        var choice_confirm = dialogs.confirm("您选择了5分钟后运行", "点击确定进行一次设定返回操作的方法后，脚本将在您设定的时间结束后开始自动运行\n请不要清理本软件的后台或者锁屏手机等，否则可能会造成定时任务失效");
        if (choice_confirm == false) {
            toastLog("取消了定时运行确认");
            wait_Time_over();
        } else {
            Set_Back_way();
            waiting_time();
        }
    }
    if (i_wait == 2) {
        var choice_confirm = dialogs.confirm("您选择了10分钟后运行", "点击确定进行一次设定返回操作的方法后，脚本将在您设定的时间结束后开始自动运行\n请不要清理本软件的后台或者锁屏手机等，否则可能会造成定时任务失效");
        if (choice_confirm == false) {
            toastLog("取消了定时运行确认");
            wait_Time_over();
        } else {
            Set_Back_way();
            waiting_time();
        }
    }
    if (i_wait == 3) {
        var choice_confirm = dialogs.confirm("您选择了30分钟后运行", "点击确定进行一次设定返回操作的方法后，脚本将在您设定的时间结束后开始自动运行\n请不要清理本软件的后台或者锁屏手机等，否则可能会造成定时任务失效");
        if (choice_confirm == false) {
            toastLog("取消了定时运行确认");
            wait_Time_over();
        } else {
            Set_Back_way();
            waiting_time();
        }
    }
    if (i_wait == 4) {
        var choice_confirm = dialogs.confirm("您选择了一小时后运行", "点击确定进行一次设定返回操作的方法后，脚本将在您设定的时间结束后开始自动运行\n请不要清理本软件的后台或者锁屏手机等，否则可能会造成定时任务失效");
        if (choice_confirm == false) {
            toastLog("取消了定时运行确认");
            wait_Time_over();
        } else {
            Set_Back_way();
            waiting_time();
        }
    }
    if (i_wait == 5) {
        var choice_confirm = dialogs.confirm("您选择了两小时后运行", "点击确定进行一次设定返回操作的方法后，脚本将在您设定的时间结束后开始自动运行\n请不要清理本软件的后台或者锁屏手机等，否则可能会造成定时任务失效");
        if (choice_confirm == false) {
            toastLog("取消了定时运行确认");
            wait_Time_over();
        } else {
            Set_Back_way();
            waiting_time();
        }
    }
    if (i_wait == 6) {
        var choice_confirm = dialogs.confirm("您选择了三小时后运行", "点击确定进行一次设定返回操作的方法后，脚本将在您设定的时间结束后开始自动运行\n请不要清理本软件的后台或者锁屏手机等，否则可能会造成定时任务失效");
        if (choice_confirm == false) {
            toastLog("取消了定时运行确认");
            wait_Time_over();
        } else {
            Set_Back_way();
            waiting_time();
        }
    }
    if (i_wait == 7) {
        var choice_confirm = dialogs.confirm("您选择了五小时后运行", "点击确定进行一次设定返回操作的方法后，脚本将在您设定的时间结束后开始自动运行\n请不要清理本软件的后台或者锁屏手机等，否则可能会造成定时任务失效");
        if (choice_confirm == false) {
            toastLog("取消了定时运行确认");
            wait_Time_over
        } else {
            Set_Back_way();
            waiting_time();
        }
    }
    if (i_wait == 8) {
        var choice_confirm = dialogs.confirm("您选择了八小时后运行", "点击确定进行一次设定返回操作的方法后，脚本将在您设定的时间结束后开始自动运行\n请不要清理本软件的后台或者锁屏手机等，否则可能会造成定时任务失效");
        if (choice_confirm == false) {
            toastLog("取消了定时运行确认");
            wait_Time_over();
        } else {
            Set_Back_way();
            waiting_time();
        }
    }
}

function waiting_time() {
    //计时运行脚本
    if (context_i_wait == 0) {
        var Seconds = 60;
        for (Seconds == 60; Seconds > 0; Seconds--) {
            console.warn("【定时运行】计时中……\n" + Seconds + "秒后开始运行");
            sleep(1000);
        }
    }
    if (context_i_wait == 1) {
        var Minutes = 4;
        for (Minutes == 4; Minutes >= 0; Minutes--) {
            if (Minutes >= 0) {
                var Seconds = 60;
                for (Seconds == 60; Seconds > 0; Seconds--) {
                    console.warn("【定时运行】计时中……\n" + Minutes + "分钟" + Seconds + "秒后开始运行");
                    sleep(1000);
                }
            }
        }
    }
    if (context_i_wait == 2) {
        var Minutes = 9;
        for (Minutes == 9; Minutes >= 0; Minutes--) {
            if (Minutes >= 0) {
                var Seconds = 60;
                for (Seconds == 60; Seconds > 0; Seconds--) {
                    console.warn("【定时运行】计时中……\n" + Minutes + "分钟" + Seconds + "秒后开始运行");
                    sleep(1000);
                }
            }
        }
    }
    if (context_i_wait == 3) {
        var Minutes = 29;
        for (Minutes == 29; Minutes >= 0; Minutes--) {
            if (Minutes >= 0) {
                var Seconds = 60;
                for (Seconds == 60; Seconds > 0; Seconds--) {
                    console.warn("【定时运行】计时中……\n" + Minutes + "分钟" + Seconds + "秒后开始运行");
                    sleep(1000);
                }
            }
        }
    }
    if (context_i_wait == 4) {
        var Minutes = 59;
        for (Minutes == 59; Minutes >= 0; Minutes--) {
            if (Minutes >= 0) {
                var Seconds = 60;
                for (Seconds == 60; Seconds > 0; Seconds--) {
                    console.warn("【定时运行】计时中……\n" + Minutes + "分钟" + Seconds + "秒后开始运行");
                    sleep(1000);
                }
            }
        }
    }
    if (context_i_wait == 5) {
        var Hours = 1;
        for (Hours == 1; Hours >= 0; Hours--) {
            var Minutes = 59;
            for (Minutes == 59; Minutes >= 0; Minutes--) {
                if (Minutes >= 0) {
                    var Seconds = 60;
                    for (Seconds == 60; Seconds > 0; Seconds--) {
                        console.warn("【定时运行】计时中……\n" + Hours + "小时" + Minutes + "分钟" + Seconds + "秒后开始运行");
                        sleep(1000);
                    }
                }
            }
        }
    }
    if (context_i_wait == 6) {
        var Hours = 2;
        for (Hours == 2; Hours >= 0; Hours--) {
            var Minutes = 59;
            for (Minutes == 59; Minutes >= 0; Minutes--) {
                if (Minutes >= 0) {
                    var Seconds = 60;
                    for (Seconds == 60; Seconds > 0; Seconds--) {
                        console.warn("【定时运行】计时中……\n" + Hours + "小时" + Minutes + "分钟" + Seconds + "秒后开始运行");
                        sleep(1000);
                    }
                }
            }
        }
    }
    if (context_i_wait == 7) {
        var Hours = 4;
        for (Hours == 4; Hours >= 0; Hours--) {
            var Minutes = 59;
            for (Minutes == 59; Minutes >= 0; Minutes--) {
                if (Minutes >= 0) {
                    var Seconds = 60;
                    for (Seconds == 60; Seconds > 0; Seconds--) {
                        console.warn("【定时运行】计时中……\n" + Hours + "小时" + Minutes + "分钟" + Seconds + "秒后开始运行");
                        sleep(1000);
                    }
                }
            }
        }
    }
    if (context_i_wait == 8) {
        var Hours = 7;
        for (Hours == 7; Hours >= 0; Hours--) {
            var Minutes = 59;
            for (Minutes == 59; Minutes >= 0; Minutes--) {
                if (Minutes >= 0) {
                    var Seconds = 60;
                    for (Seconds == 60; Seconds > 0; Seconds--) {
                        console.warn("【定时运行】计时中……\n" + Hours + "小时" + Minutes + "分钟" + Seconds + "秒后开始运行");
                        sleep(1000);
                    }
                }
            }
        }
    }
}

//下面是悬浮窗
var window = floaty.window(
    <frame>
        <button id="action" text="点击停止脚本" w="120" h="40" bg="#F0EB4336"/>
    </frame>
);
setInterval(() => {}, 1000);
var execution = null;
//记录按键被按下时的触摸坐标
var x = 0,
    y = 0;
//记录按键被按下时的悬浮窗位置
var windowX, windowY;
//记录按键被按下的时间以便判断长按等动作
var downTime;
window.action.setOnTouchListener(function(view, event) {
    switch (event.getAction()) {
        case event.ACTION_DOWN:
            x = event.getRawX();
            y = event.getRawY();
            windowX = window.getX();
            windowY = window.getY();
            downTime = new Date().getTime();
            return true;
        case event.ACTION_MOVE:
            //移动手指时调整悬浮窗位置
            window.setPosition(windowX + (event.getRawX() - x),
                windowY + (event.getRawY() - y));
            //如果按下的时间超过1.5秒判断为长按，退出脚本
            if (new Date().getTime() - downTime > 1500) {
                toast("长按可以移动位置哦～");
            }
            return true;
        case event.ACTION_UP:
            //手指弹起时如果偏移很小则判断为点击
            if (Math.abs(event.getRawY() - y) < 5 && Math.abs(event.getRawX() - x) < 5) {
                onClick();
            }
            return true;
    }
    return true;
});

function onClick() {
    dialogs.alert("已停止运行脚本！");
    log("用户点击了停止按钮");
    engines.stopAllAndToast();
}

function Justback() {
    //💝💝💝💝💝使用用户设定的返回方法
    if (context_i_back == 0) {
        sleep(1000);
        toastLog("使用普通的返回");
        back();
        sleep(2000);
    }
    if (context_i_back == 1) {
        sleep(1000);
        toastLog("使用ROOT返回\n请确保已给ROOT权限！");
        Back();
        sleep(2000);
    }
    if (context_i_back == 2) {
        openJd();
        openHd();
        Doit();
    }
    if (context_i_back == 3) {
        sleep(1000);
        toastLog("从屏幕中间向从左向内滑动来返回");
        gestures([context_gestures_speed, [0, height / 2],
            [500, height / 2]
        ]);
        sleep(2000);
    }
    if (context_i_back == 5) {
        sleep(1000);
        toastLog("从屏幕左侧下方向上滑动来返回");
        gestures([context_gestures_speed, [width / 2 - 300, height - 1],
            [width / 2 - 300, height - 500]
        ]);
        sleep(2000);
    }
    if (context_i_back == 4) {
        sleep(1000);
        toastLog("从屏幕中间向从右向内滑动来返回");
        gestures([context_gestures_speed, [width - 1, height / 2],
            [width - 500, height / 2]
        ]);
        sleep(2000);
    }
    if (context_i_back == 6) {
        sleep(1000);
        toastLog("从屏幕左侧下面向上面滑动来返回");
        gestures([context_gestures_speed, [width / 2 + 300, height - 1],
            [width / 2 + 300, height - 500]
        ]);
        sleep(2000);
    }
}

function openJd() {
    launch("com.jingdong.app.mall");
    for (var deng = 10; deng > 0; deng--) {
        toastLog("正在启动京东APP，剩余" + deng)
        sleep(2000);
        if (currentPackage() == "com.jingdong.app.mall") {
            var deng = 0;
        }
    }
    if (text("立即修复").exists) {
        toastLog("存在“立即修复”按钮");
        var Aa = textContains("退出").findOnce();
        if (Aa != null) {
            click(Aa.centerX(), Aa.centerY());
            sleep(3000);
            launch("com.jingdong.app.mall");
            for (var deng = 10; deng > 0; deng--) {
                toastLog("正在启动京东APP，剩余" + deng)
                sleep(2000);
                if (currentPackage() == "com.jingdong.app.mall") {
                    var deng = 0;
                }
            }
        }
    }
    app.startActivity({
        action: "android.intent.action.VIEW", //此处可为其他值
        packageName: "com.jingdong.app.mall",
        className: "com.jd.lib.rank.view.activity.RankingListActivity"
        //此处可以加入其他内容，如data、extras
    });
    toastLog("正在尝试打开搜索后界面");
    sleep(3000);
    app.startActivity({
        action: "android.intent.action.VIEW", //此处可为其他值
        packageName: "com.jingdong.app.mall",
        className: "com.jingdong.app.mall.main.MainActivity"
        //此处可以加入其他内容，如data、extras
    });
    toastLog("正在尝试打开主页");
    sleep(2000);
    if (currentActivity() != "com.jingdong.app.mall.MainFrameActivity") {
        toastLog("[循环]当前非京东主界面，返回中……");
        context_while = 1;
        while (context_while == 1) {
            Justback();
            sleep(1000);
            if (currentActivity() == "com.jingdong.app.mall.MainFrameActivity") {
                if (desc("扫啊扫").exists()) {
                    toastLog("已处于京东主界面[循环结束]");
                    context_while = 0;
                }
            }
            if (text("搜索").exists()) {
                toastLog("存在搜索");
                Justback();
                sleep(1000);
                if (currentActivity() == "com.jingdong.app.mall.MainFrameActivity") {
                    toastLog(currentActivity());
                    if (text("搜索").exists()) {
                        toastLog("搜索依然存在#587");
                    } else if (currentActivity() == "com.jingdong.app.mall.MainFrameActivity") {
                        toastLog("已无搜索，判断为主界面[退出循环]");
                        context_while = 0;
                    }
                }
            } else {
                if (currentPackage() != "com.jingdong.app.mall") {
                    toastLog("当前未处于京东中，尝试重新进入");
                    openJd();
                    context_while = 0;
                }
            }
        }
    }
}

function openHd() {
    sleep(1000);
    if (desc("扫啊扫").exists()) {
        var A = desc("扫啊扫").findOne().bounds();
        click(A.centerX(), A.centerY());
    } else {
        //找不到按钮第一次重试
        toastLog("没有在当前界面找到“扫啊扫”按钮\n正在尝试重新打开京东……");
        openJd();
        if (desc("扫啊扫").exists()) {
            var A = desc("扫啊扫").findOne().bounds();
            click(A.centerX(), A.centerY());
        } else {
            //依然找不到按钮，报错！
            dialogs.alert("重试后仍然未能找到“扫啊扫”按钮\n请检查当前界面是否存在“扫啊扫”按钮。若没有此按钮请升级到京东最新版。若有却仍然报错请向作者反馈");
            exit();
        }
    }
    sleep(2000);
    className("android.widget.Button").findOne().click();
    sleep(2000);
    if (text("最近添加").exists()) {
        text("最近添加").findOne().click();
    }
    var Swipe = className("android.support.v7.widget.RecyclerView").findOne().bounds();
    context_while = 1;
    while (context_while == 1) {
        var A = className("android.widget.RelativeLayout").findOnce(1).bounds();
        if (textContains(EwmPicture).exists()) {
            context_while = 0;
            var Tp = textContains(EwmPicture).findOne().bounds();
            click(Tp.centerX(), Tp.centerY());
            toastLog("已点击存放二维码的文件夹:\n" + EwmPicture);
            sleep(2000);
            var Ewm = className("android.widget.RelativeLayout").findOnce(2).bounds();
            click(Ewm.centerX(), Ewm.centerY());
            log(Ewm);
            toastLog("已点击活动入口二维码")
            sleep(3000);
        } else {
            toastLog("正在寻找存放活动二维码的文件夹\n" + EwmPicture);
            //若找到了文件夹退出循环，且不执行下面的代码
            //判断文件夹是否存在
            context_AO = className("android.widget.TextView").find();
            log(context_AO.size());
            var i = 0;
            for (i == 0; i < context_AO.size(); i++) {
                log(context_AO[i].text());
                var Sa = Sa + context_AO[i].text();
            }
            log("现在检测到的文件夹名称为:\n" + Sa);
            log("上次检测到的文件夹名称为:\n" + SS);
            //若上一次的变量等于现有变量则滑动三次后若还等于则判断为没有文件夹，
            if (SS == Sa) {

                //若上一次的变量等于这次的变量三次后判断为没有文件夹，报错！

                toastLog("已无其它文件夹\n已检测到此情况次数为:" + stop)
                if (stop < 3) {
                    //滑动
                    swipe(Swipe.centerX(), Swipe.height(), Swipe.centerX(), 0, 500);
                    stop++;
                } else if (stop == 3) {
                    //报错！没有文件夹
                    dialogs.alert("京东没有扫描到文件夹:\n" + EwmPicture, "很抱歉，由于安卓系统“Mediastore”未即时更新，导致京东扫描不到已下载好的二维码文件夹，请重启手机后查看【系统图库】中是否存在文件夹" + EwmPicture + "和活动入口二维码图片，若存在再重新运行脚本。\n一般情况下重启手机后五六分钟之后安卓系统Mediastore就会更新，或者您可以以您自己的办法让处于" + EwmPicture + "文件夹中的活动二维码图片和文件夹出现在系统图库中，一般重新对图片进行编辑保存到" + EwmPicture + "文件夹下即可让系统更新Mediastore")
                    exit();
                } else {
                    var stop = 0;
                }
            } else {
                var SS = Sa;
                toastLog("还未找到文件夹，继续寻找……");
                //滑动
                swipe(Swipe.centerX(), Swipe.height(), Swipe.centerX(), 0, 500);
            }

        }
        var Sa = null;
    }

}

function Doit() {
    for (var dengdai10s = 10; dengdai10s > 0; dengdai10s--) {
        toastLog("正在进入京东十二生肖活动\n剩余" + dengdai10s + "秒……");
        sleep(2000);
    }
    if (text("做任务攒福币").exists()) {
        toastLog("正在寻找“做任务攒福币”按钮点击");
        text("做任务攒福币").findOne().click();
        sleep(2000);
        var hd = "每日浏览品牌店铺（80/80）"
        if (textContains("每日浏览品牌店铺").exists()) {
            toastLog("已找到任务，准备完成中……");
            context_xH = 1;
        } else {
            toastLog("没有找到任务按钮，重新进入活动中……");
            openJd();
            toastLog("没有找到任务按钮，重新进入活动中……");
            openHd();
            toastLog("没有找到任务按钮，重新进入活动中……");
            Doit();
        }

        while (context_xH == 1) {
            if (StopThis > 0) {
                if (StopThis == 3) {
                    context_xH = 0;
                    toastLog("京东活动出现问题，取消完成任务");
                }
            } else {
                var StopThis = 1;
            }
            toastLog(StopThis);
            var D = textContains("每日浏览品牌店铺").findOne();
            var AO = D.parent();
            var B = AO.children();
            var H = B[0].text();
            toastLog(h);
            if (h == H) {
                toastLog("检测上一次并没有完成任务\n这可能是京东的问题");
                StopThis++;
            } else {
                log("上一次任务已成功完成");
            }
            var h = H;
            if (H == hd) {
                toastLog(H);
                context_xH = 0;
            } else {
                toastLog(H);
                B[2].click();
                sleep(3000);
                //返回
                Justback();
                if (textContains("每日浏览品牌店铺").exists()) {
                    toastLog("已返回活动界面\n继续完成任务……");
                } else {
                    toastLog("没有返回活动界面，尝试重新返回");
                    Justback();
                    if (textContains("每日浏览品牌店铺").exists()) {
                        toastLog("已返回活动界面");
                    } else {
                        toastLog("由于未能返回活动界面\n正在尝试重新进入");
                        openJd();
                        toastLog("由于未能返回活动界面\n正在尝试重新进入");
                        openHd();
                        toastLog("由于未能返回活动界面\n正在尝试重新进入");
                        Doit();
                    }

                }
            }

        }
    } else {
        dialogs.alert("没有找到“做任务攒福币”按钮", "若处于活动界面却看到此提示有可能是京东卡顿或者是您网络的问题，您可以尝试重新运行脚本");
        exit();
    }
} //等待10秒进入后完成了浏览80次店铺，停在活动按钮处。
//尝试自动连连看兑换
//滑动到顶部进行自动兑换
function Duihuan() {
    var whileX = 1;
    while (whileX == 1) {
        toastLog("正在点击“福币兑换”按钮")
        text("javascript:;").findOne().click();
        sleep(2000);
        if (text("小福袋兑换成功").exists()) {
            var D = textContains("小福袋兑换成功").findOne();
            var AO = D.parent();
            var B = AO.children();            
            B[4].click();
            toastLog("已成功收下福币");
        } else {
            //退出循环
            var whileX = 0;
            toastLog("福币已用完");
        }
    }
}

openJd();
openHd();
Doit(); //等待10秒进入后完成了浏览80次店铺，停在活动按钮处。
//尝试自动连连看兑换
Duihuan(); //自动兑换

dialogs.alert("脚本已运行完成");
exit();