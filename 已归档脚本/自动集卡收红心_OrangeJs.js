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

//Beta1.3脚本更新提醒
var Qz = files.exists("/storage/emulated/0/OrangeJs/自动选号赚红心/Beta1.3脚本更新日志.txt")
if (Qz == false) {
    var SD = dialogs.confirm("‼️ Beta1.3重要更新提醒", "•脚本现不支持快手“大屏模式”，请不要开启快手“大屏模式”\n\n•完成“去分享”任务时更换为“复制链接”分享，所复制的链接为您自己的分享链接，但不会进行分享操作\n\n•脚本已更名为“自动选号赚红心”\n\n•所有功能均在快手6.11.5.12256版本上开发且经过测试");
    if (SD == true) {
        files.createWithDirs("/storage/emulated/0/OrangeJs/自动选号赚红心/Beta1.3脚本更新日志.txt");
    }
}

dialogs_js();
var height = device.height;
var width = device.width;

function dialogs_js() {
    var ScriptVersion = ("Beta1.3"); //版本
    log("软件脚本已开始运行，如果没有弹出菜单请强行停止再打开本软件！");
    var options_ = ["▶️ 开始运行脚本", "🕒 定时运行脚本", "⏹ 停止运行脚本", "🌐 向作者反馈问题", "*️⃣ 脚本介绍/作者信息", "ℹ️ Q&A常见问题解答", "🔧 手动打开模式"]
    var i = dialogs.select("*+*+*+* 橘衫の脚本 *+*+*+*\n*+*+*+*  Orange Js *+*+*+*\n\n欢迎使用 (◍•ᴗ•◍)❤" + "\n" + "“自动选号赚红心”" + ScriptVersion + "\n请选择一个要进行的选项", options_);
    if (i < 0) {
        toastLog("没有选择，如需关闭对话框\n  请选择“停止运行脚本”");
        dialogs_js();
    } else if (i == 0) {
        toastLog(options_[i]);
        context_Manualstate = 0;
        Set_Back_way();
        var Mute = confirm("🔇要静音媒体音量吗?", "建议在公共场合选择静音，已免快手视频的噪音影响其它人\n\n若没有授予本软件“修改系统设置”权限请手动静音。\n没有授予该权限点击确定后会跳转设置");
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
        alert("=(^･ω･^)=  脚本作者\n酷安@橘衫下邂逅的时光", "“自动选号赚红心” " + ScriptVersion + "\n当前软件版本" + app.versionName + "(" + app.versionCode + ")\n\n全自动的快手活动脚本！\n支持多种分辨率，安卓7+无需ROOT！\n支持启动后自动更新脚本，无需费心即可保持最新，且开放全部的脚本代码！\n脚本的全部运行不加任何广告，不干任何不相关的事情！不触碰任何个人隐私！\n此脚本为兴趣制作，仅供参考，严禁售卖\n\n如有任何问题，欢迎向作者反馈哦～");
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
        var Mute = confirm("🔇要静音媒体音量吗?", "建议在公共场合选择静音，已免快手视频的噪音影响其它人\n\n若没有授予本软件“修改系统设置”权限请手动静音。\n没有授予该权限点击确定后会跳转设置");
        if (Mute) {
            device.setMusicVolume(0);
            context_Mute = 1;
            toastLog("🔇已静音媒体音量");
        } else {
            context_Mute = 0;
        }
        sleep(2000);
        wait_Time_over();
    } else if (i == 5) {
        toastLog(options_[i]);
        Q_A_();
    } else if (i == 6) {
        toastLog(options_[i]);
        context_Manualstate = 1;
        Set_Back_way() //设置手动模式
        var Mute = confirm("🔇要静音媒体音量吗?", "建议在公共场合选择静音，已免快手视频的噪音影响其它人\n\n若没有授予本软件“修改系统设置”权限请手动静音。\n没有授予该权限点击确定后会跳转设置");
        if (Mute) {
            device.setMusicVolume(0);
            context_Mute = 1;
            toastLog("🔇已静音媒体音量");
        } else {
            context_Mute = 0;
        }
    }
}

function Q_A_() {
    var Q1 = ("1⃣MIUI11如何开启无障碍服务？");
    var A1 = ("💬一般情况下脚本运行会自动调出无障碍服务设置，之后只需在无障碍服务设置中找到“已下载的服务”点击后找到“橘衫の脚本”打开即可。\n手动打开无障碍权限的方法为\n①打开“设置”→②在“搜索系统设置项”搜索“无障碍”点击第一项→③再在无障碍设置中找到“已下载的服务”点击进入后找到“橘衫の脚本”打开即可");

    var Q2 = ("2⃣脚本突然停到快手不运行了，怎么办？");
    var A2 = ("💬这种情况一般是快手卡顿引起的。如脚本停到快手不动，您可以尝试关掉快手再打开至快手界面即可。若依然没有运行可尝试重启手机后再次运行脚本");

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
        Maininterface();
        ClickMenu();
        ClickHDdoor();
        InToHD();
        DoTask();
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


function Maininterface() {
    var WhileT = 1;
    var While = 1;
    while (While == 1) {
        WhileT++;
        if (desc("菜单").findOnce() != null) {
            var While = 0;
        } else {
            ensureApp();
            Justback();
            toastLog("已尝试返回快手主界面");
            sleep(2000);
        }
        ensureApp();
    }

    function ensureApp() {
        if (currentPackage() != "com.smile.gifmaker") {
            //打开快手主页
            toastLog("检测到快手APP未打开\n正在打开快手*" + WhileT + "次");
            app.startActivity({
                action: "android.intent.action.VIEW", //此处可为其他值
                packageName: "com.smile.gifmaker",
                className: "com.yxcorp.gifshow.HomeActivity"
                //此处可以加入其他内容，如data、extras
            });
            //等待快手打开
            toastLog("等待快手缓冲中*" + WhileT + "次");
            sleep(3000);
        }
    }
}

function ClickMenu() {
    //点击菜单按钮
    toastLog("正在尝试点击菜单按钮");
    if (id("com.smile.gifmaker:id/left_btn").findOnce != null) {
        var Btn = id("com.smile.gifmaker:id/left_btn").findOnce();
        if (Btn != null) {
            Btn.click();
            toastLog("已找到并尝试点击菜单按钮");
            sleep(2000);
        } else {
            toastLog("找不到菜单按钮");
            Maininterface();
            if (id("com.smile.gifmaker:id/left_btn").findOnce() != null) {
                id("com.smile.gifmaker:id/left_btn").findOne().click();
                toastLog("已找到并尝试点击菜单按钮");
                sleep(2000);
            }
        }
    } else {
        toastLog("找不到菜单按钮");
        Maininterface();
        if (id("com.smile.gifmaker:id/left_btn").findOnce() != null) {
            id("com.smile.gifmaker:id/left_btn").findOne().click();
            toastLog("已找到并尝试点击菜单按钮");
            sleep(2000);
        }
    }
}

function ClickHDdoor() {
    if (text("邀请你体验快手新版大屏模式").exists()) {
        var A = text("取消").findOnce();
        if (A != null) {
            toastLog("正在尝试取消弹窗");
            var B = A.bounds();
            click(B.centerX(), B.centerY());
            sleep(2000);
        }
    }
    if (text("我的春节红包").findOnce() != null) {
        var A = text("我的春节红包").findOnce();
        toastLog("正在尝试点击“我的春节红包”");
        if (A != null) {
            var B = A.bounds();
            click(B.centerX(), B.centerY());
            toastLog("已找到并尝试点击活动入口");
            sleep(3000);
        } else {
            toastLog("找不到活动入口");
            Maininterface();
            ClickMenu();
        }
    } else if (textContains("我的春节红包").findOnce() != null) {
        var A = textContains("我的春节红包").findOnce();
        toastLog("正在尝试点击“我的春节红包”");
        if (A != null) {
            var B = A.bounds();
            click(B.centerX(), B.centerY());
            toastLog("已找到并尝试点击活动入口");
            sleep(3000);
        } else {
            toastLog("找不到活动入口");
            Maininterface();
            ClickMenu();
        }
    } else {
        dialogs.alert("未发现“我的春节红包”入口", "脚本并没有在您的快手主界面菜单栏找到“我的春节红包”活动入口，请检查您是否存在这个入口。\n\n如未存在则代表您的账号无法参与此活动。\n\n若存在此入口请截图后向开发者反馈");
        toastLog("找不到活动入口，已停止运行脚本");
        exit();
    }
}

function InToHD() {
    var While = 1;
    while (While == 1) {
        sleep(1000);
        if (text("我知道了").findOnce() != null) {
            var Am = text("我知道了").findOnce().bounds();
            click(Am.centerX(), Am.centerY());
            toastLog("点击了“我知道了”");
            sleep(2000);
        }
        if (text("去选号").findOnce() != null) {
            toastLog("已处于“去选号”界面中");
            var While = 0;
        } else if (text("加载中...").findOnce() != null) {
            toastLog("正在等待活动界面加载...");
            sleep(1000);
        } else if (text("刷新").findOnce() != null) {
            toastLog("正在进行刷新...");
            var A = text("刷新").findOne().bounds();
            click(A.centerX(), A.centerY());
            sleep(1000);
        } else if (currentActivity() == "com.kuaishou.spring.redpacket.redpacketlist.activity.RedPacketListActivity") {
            toastLog("正在等待活动界面加载...");
            sleep(1000);
        } else {
            Maininterface();
            ClickMenu();
            ClickHDdoor();
            InToHD();
        }
    }
}

function DoTask() {
    if (context_Mute == 1) {
        device.setMusicVolume(0);
        toastLog("🔇静音媒体音量");
    }
    if (text("去选号").exists()) {
        toastLog("已处于“去选号”界面");
        sleep(2000);
        if (text("去选号").findOnce != null) {
            toastLog("正在跳转到“去选号”界面...");
            if (text("去选号").exists()) {
                var Z = text("去选号").findOne().click();
                //click(Z.centerX(), Z.centerY());
                toastLog("已点击“去选号”");
                sleep(2500);
            } else {
                toastLog("找不到“去选号”按钮\n尝试重新进入活动中...");
                Maininterface();
                ClickMenu();
                ClickHDdoor();
                InToHD();
                DoTask();
            }
        }
    }
    OpenJK();

    function OpenJK() {
        if (text("去选号").findOnce() != null) {
            var A = textContains("去选号").findOne();
            var B = A.bounds();
            click(B.centerX(), B.centerY());
            sleep(2000);
        }
        var While = 1;
        while (While == 1) {
            if (text("加载中...").findOnce() != null) {
                toastLog("正在等待“选号夺金”界面加载...");
                sleep(1000);
            } else if (text("刷新").findOnce() != null) {
                toastLog("正在进行刷新集卡界面...");
                var A = text("刷新").findOne().bounds();
                click(A.centerX(), A.centerY());
                sleep(1000);
            } else if (text("选号夺金").findOnce() != null) {
                toastLog("已处于活动中");
                var While = 0;
            } else if (currentActivity() == "com.yxcorp.gifshow.webview.KwaiWebViewActivity") {
                toastLog("正在等待“选号夺金”界面加载...");
                sleep(1000);
            } else {
                Maininterface();
                ClickMenu();
                ClickHDdoor();
                InToHD();
                DoTask();
            }
        }
        //这是已处于“选号夺金”界面的代码
    }
    if (text("知道了").findOnce() != null) {
        var Df = text("知道了").findOnce().bounds();
        click(Df.centerX(), Df.centerY());
        toastLog("已尝试点击“知道了”");
        sleep(1000);
    }
    sleep(2000);
    if (text("赚红心").findOnce() != null) {
        toastLog("正在跳转到“赚红心”界面...");
        if (text("赚红心").exists()) {
            var Z = text("赚红心").findOne().click();
            //click(Z.centerX(), Z.centerY());
            toastLog("已尝试点击“赚红心”按钮");
            sleep(2500);
            JustDo();
        } else {
            toastLog("找不到“赚红心”按钮\n尝试重新进入活动中...");
            Maininterface();
            ClickMenu();
            ClickHDdoor();
            InToHD();
            DoTask();
        }
    } else {
        toastLog("可能处于错误界面，正在尝试重新进入活动中...");
        Maininterface();
        ClickMenu();
        ClickHDdoor();
        InToHD();
        DoTask();
    }
}

function JustDo() {
    if (text("做任务得红心").findOnce() != null) {
        while (text("去签到").exists()) {
            var A = text("去签到").findOnce();
            if (A != null) {
                var B = A.bounds();
                click(B.centerX(), B.centerY());
                toastLog("已尝试点击“去签到”按钮");
                sleep(2000);
            }
        }
        while (text("去浏览").exists()) {
            if (context_Mute == 1) {
                device.setMusicVolume(0);
                toastLog("🔇静音媒体音量");
            }
            var A = text("去浏览").findOnce();
            if (A != null) {
                var B = A.click();
                toastLog("已尝试点击“去浏览”按钮");
                //click(B.centerX(), B.centerY());
                sleep(2000);
                var WhileX = 1;
                while (WhileX == 1) {
                    if (text("加载中...").findOnce() != null) {
                        toastLog("找到了加载，正在等待页面加载...");
                        sleep(1000);
                    } else {
                        var WhileX = 0;
                        if (textContains("观看视频得").exists()) {
                            while (textContains("观看视频得").exists()) {
                                toastLog("正在进行观看视频任务\n共6个视频正在观看第1个\n等待任务完成中...");
                                sleep(2000);
                            }
                            swipe(width / 2, height - 300, width / 2, 0, 2000);
                            while (text("已完成1/6").exists()) {
                                toastLog("正在进行观看视频任务\n共6个视频正在观看第2个\n等待任务完成中...");
                                sleep(2000);
                            }
                            swipe(width / 2, height - 300, width / 2, 0, 2000);
                            while (text("已完成2/6").exists()) {
                                toastLog("正在进行观看视频任务\n共6个视频正在观看第3个\n等待任务完成中...");
                                sleep(2000);
                            }
                            swipe(width / 2, height - 300, width / 2, 0, 2000);
                            while (text("已完成3/6").exists()) {
                                toastLog("正在进行观看视频任务\n共6个视频正在观看第4个\n等待任务完成中...");
                                sleep(2000);
                            }
                            swipe(width / 2, height - 300, width / 2, 0, 2000);
                            while (text("已完成4/6").exists()) {
                                toastLog("正在进行观看视频任务\n共6个视频正在观看第5个\n等待任务完成中...");
                                sleep(2000);
                            }
                            swipe(width / 2, height - 300, width / 2, 0, 2000);
                            while (text("已完成5/6").exists()) {
                                toastLog("正在进行观看视频任务\n共6个视频正在观看第6个\n等待任务完成中...");
                                sleep(2000);
                            }
                        }
                        /*var video = 6;
                        for (video == 6; video > 0; video--) {
                            var dengK = 8;
                            for (dengK == 8; dengK > 0; dengK--) {
                                toastLog("正在完成观看视频任务\n" + "当前总剩余" + video + "个视频" + "\n本视频浏览剩余" + dengK + "秒...");
                                sleep(1000);
                            }
                            swipe(width / 2, height - 300, width / 2, 0, 2000);
                        }*/
                        else if (text("快手健身舞").exists()) {
                            var deng = 6;
                            for (deng == 6; deng > 0; deng--) {
                                toastLog("正在完成“快手健身舞”浏览\n剩余" + deng + "秒...");
                                sleep(1000);
                            }
                        } else {

                            var deng = 20;
                            for (deng == 20; deng > 0; deng--) {
                                toastLog("正在完成“去浏览”任务\n剩余" + deng + "秒...");
                                sleep(1500);
                                if (text("任务已完成").exists()) {
                                    var deng = 0;
                                } else if (text("任务完成").exists()) {
                                    var deng = 0;
                                } else if (text("请重试").exists()) {
                                    var deng = 0;
                                }
                            }
                        }
                    }
                }
                if (text("任务已完成").exists()) {
                    Justback();
                    sleep(2000);
                } else if (text("任务完成").exists()) {
                    Justback();
                    sleep(2000);
                } else {
                    Justback();
                    toastLog("已尝试返回活动界面");
                    sleep(2000);
                }
                if (text("做任务得红心").exists()) {
                    toastLog("已返回活动界面")
                } else {
                    toastLog("没有返回活动界面，再次返回");
                    Justback();
                    if (text("做任务得红心").exists()) {
                        toastLog("已返回活动界面")
                    } else {
                        toastLog("没有返回活动界面，尝试重新进入活动");
                        Maininterface();
                        ClickMenu();
                        ClickHDdoor();
                        InToHD();
                        DoTask();
                    }
                } //

            } else {
                //异常退出了活动
                toastLog("正在尝试回到活动中...");
                Maininterface();
                ClickMenu();
                ClickHDdoor();
                InToHD();
                DoTask();
            }
        }
        //swipe(width / 2, height - 100, width / 2, 100, 500);
        while (text("去分享").exists()) {
            var A = text("去分享").findOnce();
            if (A != null) {
                var B = A.click();
                toastLog("已尝试点击“去分享”按钮");
                //click(B.centerX(), B.centerY());
                sleep(2000);
                if (text("分享至").exists()) {
                    var X = text("复制链接").findOnce();
                    if (X != null) {
                        var V = X.bounds();
                        click(V.centerX(), V.centerY());
                        toastLog("点击了“复制链接”分享\n（不分享!直接尝试返回）");
                        sleep(2000);
                        //直接返回不分享！
                        Justback();
                        toastLog("已尝试返回快手活动界面");
                        sleep(2000);
                    }
                }
            }
        }
    } else {
        toastLog("未找到“做任务得红心”标题\n判断为未处于活动，重新进入活动中...");
        Maininterface();
        ClickMenu();
        ClickHDdoor();
        InToHD();
        DoTask();
    }

    //已处于做任务界面
    if (text("做任务得红心").findOnce() != null) {
        Justback();
        toastLog("已尝试返回“选号夺金”界面");
        sleep(2000);
        var While = 1;
        while (While == 1) {
            if (text("我知道了").exists()) {
                var Z = text("我知道了").findOnce();
                if (Z != null) {
                    var D = Z.bounds();
                    click(D.centerX(), D.centerY());
                    toastLog("已尝试点击“我知道了”");
                    sleep(2000);
                }
            }
            if (text("已达本期选号上限").exists()) {
                toastLog("已达本期选号上限")
                var While = 0;
            } else if (textContains("红心不足，去做任务").exists()) {
                toastLog("红心不足，去做任务");
                var While = 0;
            } else if (text("立即选号").exists()) {
                var DT = text("立即选号").findOnce();
                if (DT != null) {
                    var Xs = DT.bounds();
                    click(Xs.centerX(), Xs.centerY());
                    toastLog("已尝试点击“立即选号”按钮");
                    sleep(3000);
                    var Va = text("确认选号").findOnce();
                    if (Va != null) {
                        var Vb = Va.bounds();
                        click(Vb.centerX(), Vb.centerY());
                        toastLog("已尝试点击“确认选号”按钮");
                    }
                } else {
                    var While = 0;
                }
            } else if (text("再次选号").exists()) {
                var DT = text("再次选号").findOnce();
                if (DT != null) {
                    var Xs = DT.bounds();
                    click(Xs.centerX(), Xs.centerY());
                    toastLog("已尝试点击“再次选号”按钮");
                    sleep(3000);
                    var Va = text("确认选号").findOnce();
                    if (Va != null) {
                        var Vb = Va.bounds();
                        click(Vb.centerX(), Vb.centerY());
                        toastLog("已尝试点击“确认选号”按钮");
                    }
                } else {
                    var While = 0;
                }
            } else if (text("确认选号").findOnce() != null) {
                var bx = text("确认选号").findOnce();
                if (bx != null) {
                    var bn = bx.bounds();
                    click(bn.centerX(), bn.centerY());
                    toastLog("已尝试点击残留的“确认选号”按钮");
                    sleep(2000);
                }
            } else {
                var While = 0;
            }
        } //选号任务完成
    }
}
firstD();

function firstD() {
    if (context_Manualstate == 1) {
        toastLog("已手动模式运行脚本");
        var options = ["等待20秒", "等待30秒", "等待50秒", "等待60秒", "等待10秒"]
        var i = dialogs.select("🔧以“手动模式”运行脚本\n\n接下来您需要在提示出现后自行打开快手APP至“选号夺金”界面”\n\n请选择脚本等待您打开快手的时间", options);
        if (i >= 0) {
            toast("您选择的是" + options[i]);
        } else if (i < 0) {
            toastLog("您取消了选择");
            dialogs_js();
            firstD();
        }
        if (i == 0) {
            //等待20秒
            var deng = 20;
        } else if (i == 1) {
            //等待30秒
            var deng = 30;
        } else if (i == 2) {
            //等待50秒
            var deng = 50;
        } else if (i == 3) {
            //等待60秒
            var deng = 60;
        } else if (i == 4) {
            //等待10秒
            var deng = 10;
        }
        for (deng = deng; deng > 0; deng--) {
            toastLog("请打开快手至“选号夺金”的界面\n剩余" + deng + "秒后运行脚本...");
            sleep(1111);
        }
        JustDo();
    } else {
        Maininterface();
        ClickMenu();
        ClickHDdoor();
        InToHD();
        DoTask();
    }
}
log("任务已完成！检测不到任务了！");
dialogs.alert("(☞ﾟ∀ﾟ)☞\n(☞^o^) ☞     脚本已运行完毕\n(☞ ͡° ͜ʖ ͡°)☞", "检测不到任务喽～\n如有遗漏请自行操作或再次运行\n如有任何问题欢迎向作者反馈哦～\n\n脚本作者@橘衫下邂逅的时光");
exit();