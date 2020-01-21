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
    var i = dialogs.select("*+*+*+* 橘衫の脚本 *+*+*+*\n*+*+*+*  Orange Js *+*+*+*\n\n欢迎使用 (◍•ᴗ•◍)❤" + "\n" + "“自动赢红包”" + ScriptVersion + "\n请选择一个要进行的选项", options_);
    if (i < 0) {
        toastLog("没有选择，如需关闭对话框\n  请选择“停止运行脚本”");
        dialogs_js();
    } else if (i == 0) {
        toastLog(options_[i]);
        context_Manualstate = 0;
        Set_Back_way();
        var Mute = confirm("🔇要静音媒体音量吗?", "建议在公共场合选择静音，已免抖音视频的噪音影响其它人\n\n若没有授予本软件“修改系统设置”权限请手动静音。\n没有授予该权限点击确定后会跳转设置");
        if (Mute) {
            device.setMusicVolume(0);
            context_Mute = 1;
            toastLog("🔇已静音媒体音量");
        } else {
            context_Mute = 0;
        }
    } else if (i == 2) {
        toastLog(options_[i]);
        exit();
    } else if (i == 3) {
        toastLog(options_[i]);
        app.openUrl("https://wj.qq.com/s2/5238744/d982");
        dialogs_js();
    } else if (i == 4) {
        toastLog(options_[i]);
        alert("=(^･ω･^)=  脚本作者\n酷安@橘衫下邂逅的时光", "“自动赢红包” " + ScriptVersion + "\n当前软件版本" + app.versionName + "(" + app.versionCode + ")\n\n全自动的抖音活动脚本！\n支持多种分辨率，安卓7+无需ROOT！\n支持启动后自动更新脚本，无需费心即可保持最新，且开放全部的脚本代码！\n脚本的全部运行不加任何广告，不干任何不相关的事情！不触碰任何个人隐私！\n此脚本为兴趣制作，仅供参考，严禁售卖\n\n如有任何问题，欢迎向作者反馈哦～");
        dialogs_js();
    } else if (i == 1) {
        toastLog("请稍候，正在检测权限...")
        context_Manualstate = 0;
        toastLog(options_[i]);
        device.keepScreenDim();
        toastLog("检测权限设置……");
        context_Manualstate = 0;
        toastLog("等待无障碍权限开启……\n您必须手动授予本软件无障碍权限\n否则本软件将无法工作！");
        auto.waitFor();
        toastLog("无障碍权限已开启" + "\n" + "继续运行脚本……");
        sleep(2000);
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
        var Mute = confirm("🔇要静音媒体音量吗?", "建议在公共场合选择静音，已免抖音视频的噪音影响其它人\n\n若没有授予本软件“修改系统设置”权限请手动静音。\n没有授予该权限点击确定后会跳转设置");
        if (Mute) {
            device.setMusicVolume(0);
            context_Mute = 1;
            toastLog("🔇已静音媒体音量");
        } else {
            context_Mute = 0;
        }
        wait_Time_over();
    } else if (i == 5) {
        toastLog(options_[i]);
        Q_A_();
    }
}

function Q_A_() {
    var Q1 = ("1⃣MIUI11如何开启无障碍服务？");
    var A1 = ("💬一般情况下脚本运行会自动调出无障碍服务设置，之后只需在无障碍服务设置中找到“已下载的服务”点击后找到“橘衫の脚本”打开即可。\n手动打开无障碍权限的方法为\n①打开“设置”→②在“搜索系统设置项”搜索“无障碍”点击第一项→③再在无障碍设置中找到“已下载的服务”点击进入后找到“橘衫の脚本”打开即可");

    var Q2 = ("3⃣脚本运行到活动界面提示找不到任务");
    var A2 = ("💬如出现此问题请先检查一下“活动界面”中是不是真的没有任务了，如果有任务可以尝试重启手机后重新运行脚本，若重启后依然在活动界面提示找不到任务请立即向作者反馈。");

    var Q3 = ("4⃣安卓6.0以下系统能否使用本脚本？");
    var A3 = ("💬本脚本完全使用Auto.js制作。因此在安卓6.0以下系统会不支持无障碍服务以及造成大量函数失效，因此本脚本是不支持安卓6.0及以下系统的，敬请谅解");

    var Q4 = ("5⃣定时运行之后却没有在预定的时间运行脚本");
    var A4 = ("💬使用定时运行脚本会自动设置屏幕常亮并驻留后台，但清理本软件或者锁屏甚至关机以及关闭本软件必要的无障碍权限和悬浮窗权限都将会使定时运行失效，建议在定时运行时将本软件加入清理白名单或锁定本软件后台且不要锁屏以及不要关闭无障碍与悬浮窗权限即可");

    var Q_A_options = [Q1, Q2, Q3, Q4]
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
    exit();
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
        openApp();
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
openApp();

function openApp() {
    //用安卓Intent打开抖音
    app.startActivity({
        action: "android.intent.action.VIEW", //此处可为其他值
        packageName: "com.ss.android.ugc.aweme",
        className: "com.ss.android.ugc.aweme.main.MainActivity"
        //此处可以加入其他内容，如data、extras
    });
    var deng = 5;
    for (deng == 5; deng > 0; deng--) {
        if (text("跳过广告").exists()) {
            var E = text("跳过广告").findOnce();
            if (E != null) {
                var Ed = E.bounds();
                click(Ed.centerX, Ed.centerY());
                toastLog("存在“跳过广告”按钮\n已尝试点击……");
            }
        }
        toastLog("等待抖音加载应用界面\n剩余" + deng + "秒");
        var C = id("fullId = com.ss.android.ugc.aweme.diamond_sdk:id/diamond_btn_redpackage_close").findOnce();
        if (C != null) {
            C.click();
            toastLog("检测到有悬浮窗口\n已尝试关闭");
            sleep(1000);
        }
        sleep(1500);
    }
    openHomePage();
}

function openHomePage() {
    var A = className("android.widget.TextView").text("首页").findOnce();
    if (A != null) {
        //找到首页按钮
        var B = A.bounds();
        click(B.centerX(), B.centerY());
        toastLog("已尝试点击抖音主界面“首页”按钮")
        sleep(2000);
    } else {
        //没有找到首页按钮
        toastLog("找不到抖音“首页”按钮");
        var While = 1;
        while (While == 1) {
            JustBack();
            toastLog("正在尝试返回“抖音”主界面\n若退出了抖音请停止脚本后再重新运行脚本");
            sleep(2000);
            var A = className("android.widget.TextView").text("首页").findOnce();
            if (A != null) {
                var While = 0;
                //找到首页按钮
                var B = A.bounds();
                click(B.centerX(), B.centerY());
                toastLog("已尝试点击抖音主界面“首页”按钮")
                sleep(2000);
            }
        }
    }
    clickHomeSs();
}

function clickHomeSs() {
    var D = id("com.ss.android.ugc.aweme:id/avg").findOnce();
    if (D != null) {
        var d = D.bounds();
        click(d.centerX(), d.centerY());
        toastLog("已找到“首页搜索”按钮\n尝试点击……");
        sleep(2000);
    } else {
        var D = id("com.ss.android.ugc.aweme:id/avx").findOnce();
        if (D != null) {
            var d = D.bounds();
            click(d.centerX(), d.centerY());
            toastLog("已找到“首页搜索”按钮\n尝试点击……");
            sleep(2000);
        } else {
            console.trace("找不到“首页搜索”按钮\n正在重试中……");
            openApp();
        }
    }
    SearchIn();
}

function SearchIn() {
    //此处应处于搜索界面
    if (id("com.ss.android.ugc.aweme:id/ao_").findOnce() != null) {
        setText("发财中国年");
        var deng = 5;
        for (deng == 5; deng > 0; deng--) {
            toastLog("已设置搜索关键词\n即将点击出现的联想词\n正在等待联想词汇出现\n请稍等" + deng + "秒……");
            sleep(1000);
            var A = className("android.widget.TextView").text("发财中国年").findOnce();
            if (A != null) {
                var deng = 0;
                toastLog("已找到匹配的联想词汇");
            }
        }
        var A = className("android.widget.TextView").text("发财中国年").findOnce();
        if (A != null) {
            var B = A.bounds();
            click(B.centerX(), B.centerY());
            toastLog("已点击“发财中国年”联想词汇");
        } else {
            toastLog("找不到“发财中国年”的联想词\n重试中……");
            openApp();
        }
    } else {
        toastLog("检测不到抖音“搜索框”\n重试中……");
        openApp();
    }
    D_InRK();
}

function D_InRK() {
    var While = 1;
    while (While == 1) {
        var l = className("android.widget.TextView").text("刷新").findOnce();
        if (text("参与发财中国年，分20亿元").exists()) {
            var While = 0;
            toastLog("活动入口已出现");
            sleep(2000); //为点击预留时间
        } else if (l != null) {
            //如果有刷新则进行刷新
            var lz = l.bounds();
            click(lz.centerX(), lz.centerY());
            toastLog("当前存在加载按钮\n已尝试点击……");
            sleep(1000);
        } else {
            toastLog("正在等待抖音活动入口加载……");
            sleep(1000);
        }
    }
    C_D_InHD();
}

function C_D_InHD() {
    var A = text("参与发财中国年，分20亿元").findOnce();
    if (A != null) {
        var Aa = A.bounds();
        click(Aa.centerX(), Aa.centerY());
        toastLog("界面存在活动入口文字\n已尝试点击活动入口……");
        sleep(1000);
    } else {
        toastLog("当前界面未找到活动入口文字\n正在重试中……");
        openApp();
    }
    var While = 1;
    while (While == 1) {
        if (text("跳过").exists()) {
            var Skip = text("跳过").findOnce();
            if (Skip != null) {
                var Skipb = Skip.bounds();
                click(Skipb.centerX(), Skipb.centerY());
                toastLog("存在“跳过”按钮\n已尝试点击……");
                sleep(1000);
            }
        }
        if (className("android.widget.TextView").text("增加抽卡数").exists()) {
            toastLog("已处于“发财中国年”活动界面");
            var While = 0;
            sleep(2000);
        } else {
            if (className("android.widget.TextView").text("立即增加抽卡数").exists()) {
                toastLog("已处于“发财中国年”活动界面");
                var While = 0;
                sleep(2000);
            } else {
                toastLog("正在等待抖音“发财中国年”活动加载……");
                sleep(1000);
            }
        }
    }
    if (text("我知道了").findOnce() != null) {
        var z = text("我知道了").findOnce().bounds();
        click(z.centerX(), z.centerY());
        toastLog("存在“我知道了”按钮\n已尝试点击……");
        sleep(2000);
    }
    InDoRW();
}

function InDoRW() {
    var A = className("android.widget.TextView").text("增加抽卡数").findOnce();
    if (A != null) {
        var Aa = A.bounds();
        click(Aa.centerX(), Aa.centerY());
        toastLog("存在“增加抽卡数”\n已尝试点击……");
        sleep(3000);
        if (text("集卡任务").findOnce() != null) {
            toastLog("已处于“集卡任务”界面");
            sleep(1000);
        } else {
            toastLog("未发现“集卡任务”\n等待界面加载3秒……");
            sleep(3000);
        }
    } else {
        var A = className("android.widget.TextView").text("立即增加抽卡数").findOnce();
        if (A != null) {
            var Aa = A.bounds();
            click(Aa.centerX(), Aa.centerY());
            toastLog("存在“立即增加抽卡数”\n已尝试点击……");
            sleep(3000);
            if (text("集卡任务").findOnce() != null) {
                toastLog("已处于“集卡任务”界面");
                sleep(1000);
            } else {
                toastLog("未发现“集卡任务”\n等待界面加载3秒……");
                sleep(3000);
            }
        } else {
            toastLog("当前界面不存在“增加抽卡数”\n重试中……");
            openApp();
        }
    }
    DoRw();
}

function DoRw() {
    if (text("集卡任务").exists()) { //换成while？//好像不用！
        toastLog("已处于“集卡任务”界面\n开始完成任务……");
        var Q = className("android.view.View").text("去完成").findOnce();
        if (Q != null) {
            //完成“去完成”任务
            var A = Q.bounds();
            click(A.centerX(), A.centerY());
            toastLog("已尝试点击“去完成”按钮");
            sleep(2000);
            //去完成的任务需要5分钟计时
            var minutes = 4;
            for (minutes == 4; minutes >= 0; minutes--) {
                var seconds = 59; //每减少一分钟重新定为59秒
                for (seconds == 59; seconds > 0; seconds--) {
                    toastLog("正在完成抖音“去完成”任务\n请不要离开抖音观看视频界面\n剩余" + minutes + "分钟" + seconds + "秒……");
                    sleep(1120); //每分钟预留7秒缓冲时间，共预留36秒。保证任务顺利完成
                }
            }
            toastLog("[去完成]任务计时结束\n重新回到活动中……");
            //完成后可能需要重新进入活动
            openApp(); //从头开始，因此不用while
        }

        var S = className("android.view.View").text("去观看").findOnce();
        if (S != null) {
            //完成“去观看”
            var Ss = S.bounds();
            click(Ss.centerX(), Ss.centerY());
            toastLog("存在“去观看”按钮\n已尝试点击……");
            sleep(2000);
            //观看视频需要15秒;
            var deng = 15;
            for (deng == 15; deng > 0; deng--) {
                toastLog("正在完成“去观看”任务\n剩余" + deng + "秒……");
                sleep(2000);
                if (text("去抽卡").findOnce() != null) {
                    var deng = 0;
                }
            }
            //for结束
            if (text("去抽卡").findOnce() != null) {
                var A = text("去抽卡").findOnce().bounds();
                click(A.centerX(), A.centerY());
                sleep(2000);
                var K = className("android.widget.TextView").text("增加抽卡数").findOnce();
                if (K != null) {
                    var Kk = K.bounds();
                    click(Kk.centerX, Kk.centerY());
                    toastLog("[去抽卡]已找到“增加抽卡数”按钮\n已尝试点击……");
                    sleep(2000);
                } else {
                    openApp();
                }
            }
        }

    } else {
        toastLog("未处于集卡任务\n无法进行任务\n重试中……");
        openApp();
    }
    JustBack();
    sleep(2000);
    Ck();
}

function Ck() {
    while (textContains("抽卡×").findOnce() != null) {
        textContains("抽卡×").findOnce().click();
        toastLog("已尝试点击“抽卡”按钮");
        sleep(3000);
        while (text("翻 开").findOnce() != null) {
            text("翻 开").findOnce().click();
            toastLog("已尝试翻开卡片")
            sleep(3000);
            while (text("收下TA").findOnce() != null) {
                text("收下TA").findOnce().click();
                toastLog("已尝试点击“收下TA”");
                sleep(3000);
            }
        }
        toastLog("已找不到“翻开”按钮\n尝试返回");
        JustBack();
        sleep(3000);
    }
}

dialogs.alert("脚本已运行完成");
log("脚本已运行完成");
exit();