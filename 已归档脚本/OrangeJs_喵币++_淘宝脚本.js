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
try {
    if (contextPASS != undefined) {
        log("[⏰]定时任务启动脚本");
    }
} catch (e) {
    contextPASS = 0;
}
if (contextPASS == 0) {
    dialogs_js();
} else {
    context_Manualstate = 0;
    Set_Back_way();
}
var WaitForDelete = [];
var height = device.height;
var width = device.width;

function dialogs_js() {
    var ScriptVersion = ("Beta1.1"); //版本
    log("软件脚本已开始运行，如果没有弹出菜单请强行停止再打开本软件！");
    var options_ = ["▶️ 开始运行脚本", "🕒 计时运行脚本", "⏰ 定时运行脚本", "⏹ 停止运行脚本", "🔙 返回方法设置", "🔧 手动打开模式", "💬 吐司/日志切换"]
    var i = dialogs.select("*+*+*+* 橘衫の脚本 *+*+*+*\n*+*+*+*  Orange Js *+*+*+*\n\n欢迎使用 (◍•ᴗ•◍)❤" + "\n" + "“喵币++”" + ScriptVersion + "\n请选择一个要进行的选项", options_);
    if (i < 0) {
        toastLog("没有选择，如需关闭对话框\n  请选择“停止运行脚本”");
        dialogs_js();
    } else if (i == 0) {
        toastLog(options_[i]);
        context_Manualstate = 0;
        Set_Back_way();
    } else if (i == 3) {
        toastLog(options_[i]);
        exit();
    } else if (i == 1) {
        toastLog("请稍候，正在检测权限...");
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
        wait_Time_over();
    } else if (i == 2) {
        toastLog("请稍候，正在检测权限...");
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
        context_Manualstate = 0;
        Set_Back_way();
        DS();
        device.keepScreenDim();
    } else if (i == 4) {
        toastLog(options_[i]);
        try {
            if (files.exists("/storage/emulated/0/OrangeJs/喵币++/返回方法设置.txt") == true && files.read("/storage/emulated/0/OrangeJs/喵币++/返回方法设置.txt") > 2 && files.exists("/storage/emulated/0/OrangeJs/喵币++/滑动返回速度.txt") == false) {
                files.remove("/storage/emulated/0/OrangeJs/喵币++/返回方法设置.txt");
                log("当前返回方法设置为滑动返回但未设置滑动返回速度");
            }
            if (files.exists("/storage/emulated/0/OrangeJs/喵币++/返回方法设置.txt") == true) {
                files.rename("/storage/emulated/0/OrangeJs/喵币++/返回方法设置.txt", "X返回方法设置.txt");
                Set_Back_way();
            } else {
                dialogs.alert("您未保存任何返回方法，请运行脚本后再进行修改");
                dialogs_js();
            }
        } catch (e) {
            dialogs.alert("未授予本软件“存储权限”", "软件内的设置存储都需要“存储权限”才能正常保存设置，您需要自行授予本软件“存储权限”才能正常使用设置保存功能");
            dialogs_js();
        }
    } else if (i == 5) {
        toastLog(options_[i]);
        context_Manualstate = 1;
        Set_Back_way() //设置手动模式
    } else if (i == 6) {
        toastLog(options_[i]);
        context_Manualstate = 0;
        if (files.exists("/storage/emulated/0/OrangeJs/喵币++/吐司or日志.txt") == true) {
            var z = files.read("/storage/emulated/0/OrangeJs/喵币++/吐司or日志.txt");
            if (z != "吐司" && z != "日志") {
                alert("“吐司or日志”文件错误，已尝试删除错误文件");
                try {
                    files.remove("/storage/emulated/0/OrangeJs/喵币++/吐司or日志.txt");
                } catch (e) {
                    toastLog("删除“吐司or日志”文件失败！");
                }
                var Z = "";
            } else {
                var Z = "当前脚本使用：" + z + "\n";
            }
        } else {
            var Z = "";
        }
        let da = dialogs.select(Z + "请选择一个选项", "使用吐司（Toast）", "使用脚本悬浮日志")
        if (da == 0) {
            toastLog("您选择了：使用吐司");
            try {
                var T = 0;
                files.createWithDirs("/storage/emulated/0/OrangeJs/喵币++/吐司or日志.txt");
                files.write("/storage/emulated/0/OrangeJs/喵币++/吐司or日志.txt", "吐司");
            } catch (e) {
                log("未授予存储权限或存储权限错误，当前设置为吐司");
                var T = 0;
            }
        } else if (da == 1) {
            toastLog("您选择了：使用悬浮日志");
            try {
                var T = 1;
                files.createWithDirs("/storage/emulated/0/OrangeJs/喵币++/吐司or日志.txt");
                files.write("/storage/emulated/0/OrangeJs/喵币++/吐司or日志.txt", "日志");
            } catch (e) {
                log("未授予存储权限或存储权限错误，开启悬浮日志");
                var T = 1;
            }
        }
        dialogs_js();
    }
}



function Set_Back_way() {
    try {
        if (files.exists("/storage/emulated/0/OrangeJs/喵币++/返回方法设置.txt") == true) {
            context_i_back = files.read("/storage/emulated/0/OrangeJs/喵币++/返回方法设置.txt");
            log("返回方法：" + context_i_back);
            if (context_i_back > 2) {
                try {
                    context_gestures_speed = files.read("/storage/emulated/0/OrangeJs/喵币++/滑动返回速度.txt")
                    log("滑动返回速度：" + context_gestures_speed)
                } catch (e) {
                    log("上次未完成滑动返回速度设置");
                    files.remove("/storage/emulated/0/OrangeJs/喵币++/返回方法设置.txt");
                    Set_Back_way();
                }
            }
        } else {
            //💟🕎⛎设定返回方法及滑动速度的代码
            var options_hq = ["🔙 普通的返回\n(使用无障碍权限)", "#⃣ 使用ROOT返回\n(必须授予本软件ROOT权限)", "🔍 通过调用搜索界面进入\n（“曲线救国法” 若其它返回均失效\n    来尝试此方法吧）", "👉👉🏻👉🏼👉🏽👉🏾👉🏿 \n从屏幕中间从左向内滑动\n(全面屏手势返回 例如:小米MIUI)", "              👈🏿👈🏾👈🏽👈🏼👈🏻👈 \n从屏幕中间从右向内滑动\n(全面屏手势返回 例如:华为EMUI)", "👆👆🏻👆🏼👆🏽👆🏾👆🏿 \n从屏幕左侧下方向上滑动\n(全面屏手势返回 例如:锤子Smartisan UI)", "               ☝🏿☝🏾☝🏽☝🏼☝🏻☝️ \n从屏幕右侧下方向上滑动\n(全面屏手势返回)"]
            var i_back = dialogs.select(" Hi! ( ╹▽╹ )\n请选择一个方法\n用于实现返回操作", options_hq);
            if (i_back >= 0) {
                toastLog("您选择的是" + options_hq[i_back]);
                sleep(2000);
                var options_select = options_hq[i_back];
                context_i_back = i_back;
                files.createWithDirs("/storage/emulated/0/OrangeJs/喵币++/返回方法设置.txt");
                files.write("/storage/emulated/0/OrangeJs/喵币++/返回方法设置.txt", context_i_back);
            } else {
                toastLog("没有选择返回方法！");
                device.cancelKeepingAwake();
            }
            if (i_back > 2) {
                var options_hd = ["200毫秒\n(默认，如果太快请选其它)", "500毫秒", "800毫秒", "1秒(1000毫秒)", "1.5秒（1500毫秒）", "2秒（2000毫秒）"]
                var iix = dialogs.select("Ok! (・∀・) 您选择了:\n" + options_select + "\n请选择滑动速度\n单位:毫秒（1秒=1000毫秒）", options_hd);
                if (iix < 0) {
                    toastLog("没有选择滑动速度");
                    Set_Back_way();
                } else {
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
                    files.createWithDirs("/storage/emulated/0/OrangeJs/喵币++/滑动返回速度.txt");
                    files.write("/storage/emulated/0/OrangeJs/喵币++/滑动返回速度.txt", context_gestures_speed);
                }
            }
            if (files.exists("/storage/emulated/0/OrangeJs/喵币++/返回方法设置.txt") == true && files.exists("/storage/emulated/0/OrangeJs/喵币++/X返回方法设置.txt") == true) {
                log("删除");
                files.remove("/storage/emulated/0/OrangeJs/喵币++/X返回方法设置.txt");
                dialogs_js();
            } else if (files.exists("/storage/emulated/0/OrangeJs/喵币++/X返回方法设置.txt") == true) {
                log("重命名");
                files.rename("/storage/emulated/0/OrangeJs/喵币++/X返回方法设置.txt", "返回方法设置.txt");
                dialogs_js();
            }
        }
    } catch (e) {
        log("未授予“存储权限”");
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
        }
        if (i_back > 2) {
            var options_hd = ["200毫秒\n(默认，如果太快请选其它)", "500毫秒", "800毫秒", "1秒(1000毫秒)", "1.5秒（1500毫秒）", "2秒（2000毫秒）"]
            var iix = dialogs.select("Ok! (・∀・) 您选择了:\n" + options_select + "\n请选择滑动速度\n单位:毫秒（1秒=1000毫秒）", options_hd);
            if (iix < 0) {
                toastLog("没有选择滑动速度");
                Set_Back_way();
            } else {
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
            }
        }
    }
}

sleep(1000);
toastLog("等待无障碍权限开启……\n您必须手动授予本软件无障碍权限\n否则本软件将无法工作！");
auto.waitFor();
toastLog("无障碍权限已开启" + "\n" + "继续运行脚本……");
if (files.exists("/storage/emulated/0/OrangeJs/喵币++/吐司or日志.txt") == true) {
    try {
        let z = files.read("/storage/emulated/0/OrangeJs/喵币++/吐司or日志.txt");
        if (z == "吐司") {
            var T = 0;
        } else if (z == "日志") {
            var T = 1;
        } else {
            toastLog("“吐司or日志”文件错误，已尝试删除并使用默认日志");
            try {
                files.remove("/storage/emulated/0/OrangeJs/喵币++/吐司or日志.txt");
            } catch (e) {
                toastLog("删除“吐司or日志”文件失败！");
            }
            var T = 1;
        }
    } catch (e) {
        if (T == null) {
            log("未授予存储权限或存储权限错误，默认开启悬浮日志");
            var T = 1;
        }
    }
} else {
    try {
        files.createWithDirs("/storage/emulated/0/OrangeJs/喵币++/吐司or日志.txt");
        files.write("/storage/emulated/0/OrangeJs/喵币++/吐司or日志.txt", "日志");
        var T = 1;
        log("默认使用日志，如需更改请在主菜单进行");
    } catch (e) {
        log("未授予存储权限或存储权限错误，默认开启悬浮日志");
        var T = 1;
    }
}

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

function DS() {
    var While = 1;
    while (While == 1) {
        var 时 = dialogs.rawInput("🔵定时→定分→定秒→确认\n\n请输入0-23的小时数\n到此时间脚本会自动运行");
        if (时 == null) {
            //没有输入
            toastLog("没有输入！返回主菜单");
            var While = 0;
            dialogs_js();
        } else if (时 == "") {
            //没有输入
            toastLog("没有输入！返回主菜单");
            var While = 0;
            dialogs_js();
        } else if (时 >= 0) {
            if (时 < 24) {
                var While = 2;
                while (While == 2) {
                    var 分 = dialogs.rawInput("✔️定时🔵定分→定秒→确认\n\n请输入0-59的分钟数\n\n" + 时 + "时" + "❓分❓秒");
                    if (分 == null) {
                        toastLog("没有输入！返回上级");
                        var While = 1;
                    } else if (分 == null) {
                        toastLog("没有输入！返回上级");
                        var While = 1;
                    } else if (分 >= 0) {
                        if (分 < 60) {
                            var While = 3;
                            while (While == 3) {
                                var 秒 = dialogs.rawInput("✔️定时✔️定分🔵定秒→确认\n\n请输入0-59的秒数\n\n" + 时 + "时" + 分 + "分❓秒");
                                if (秒 == null) {
                                    toastLog("没有输入！返回上级");
                                    var While = 2;
                                } else if (秒 == null) {
                                    toastLog("没有输入！返回上级");
                                    var While = 2;
                                } else if (秒 >= 0) {
                                    if (秒 < 60) {
                                        var QR = dialogs.confirm("脚本将在\n⏰" + 时 + "时" + 分 + "分" + 秒 + "秒\n准时运行！", "如需更改请点击取消\n点击确定定时，定时状态可以在日志中查看");
                                        if (QR == false) {
                                            //返回主菜单
                                            var While = 1;
                                        } else {
                                            var While = 0;
                                            //仅定时运行一次
                                            while (true) {
                                                var myDate = new Date();
                                                if (myDate.getHours() == 时 && myDate.getMinutes() == 分 && myDate.getSeconds() == 秒) {
                                                    console.warn("时间到！开始运行脚本！" + myDate.getHours() + "时" + myDate.getMinutes() + "分" + myDate.getSeconds() + "秒");
                                                    device.wakeUpIfNeeded();
                                                    break;
                                                }
                                                sleep(1000);
                                                console.info("现在是" + myDate.getHours() + "时" + myDate.getMinutes() + "分" + myDate.getSeconds() + "秒\n脚本将在" + 时 + "时" + 分 + "分" + 秒 + "秒，准时运行！\n请保持手机处于工作状态，不要锁屏关机等");
                                            }
                                        }
                                    } else {
                                        toastLog("输入错误！秒必须小于等于60");
                                    }
                                } else {
                                    toastLog("输入错误！秒必须大于等于0");
                                }
                            }
                        } else {
                            toastLog("输入错误！分钟必须小于60");
                        }
                    } else {
                        toastLog("输入错误！分钟必须大于等于0");
                    }
                }
            } else {
                toastLog("输入错误！时间必须小于24");
            }
        } else {
            toastLog("输入错误！时间必须大于等于0");
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
        openInTask();
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

if (T == 1) {
    log("使用“悬浮日志”");

    function toastLog(message) {
        log(message);
        var myDate = new Date();
        ui.run(() => {
            w.WZ.setText(myDate.getHours() + "时" + myDate.getMinutes() + "分" + myDate.getSeconds() + "秒：" + message + "\n" + w.WZ.getText());
            return true;
        });
    }
    var w = floaty.rawWindow(
        <card bg="#80000000">
            <vertical align="center">
                <img src="{{getStorageData('APPbasic', 'URLprefix')}}/OrangeJs-logoWhite.png" h="30" margin="0 10 0 5"/>//黑色logo
                <text text="─ 当前脚本运行日志 ─" textSize="15" color="#FFFFFF" textStyle="bold" gravity="center" margin="0 0 0 5"/>
                <text id="WZ" text="" textSize="15" color="#FFFFFF" marginLeft="10" gravity="left"/>
            </vertical>
        </card>
    );
    w.setSize(device.width, 500);
    w.setTouchable(false);
    w.setPosition(0, device.height - 500);
} else if (T == 0) {
    log("使用脚本自带“吐司”");
}

function openInTask() {
    app.startActivity({
        action: "android.intent.action.VIEW",
        packageName: "com.taobao.taobao",
        className: "com.taobao.browser.BrowserActivity",
        data: app.parseUri("https://pages.tmall.com/wow/z/hdwk/n-hdwk-solution/2020618-single?spm=a211oj.14651605.1135447480.d_primarybtn_1&disableNav=YES&disableProgress=YES&hd_from=mallres"),
        flags: ["grant_read_uri_permission", "grant_write_uri_permission"],
    });
    toastLog("已尝试启动淘宝内置浏览器跳转至“活动页”");
    for (var d = 10; d > 0; d--) {
        if (className("android.widget.Button").text("做任务，领喵币").findOnce() != null) {
            toastLog("已成功处于“618列车”活动界面");
            break;
        } else {
            toastLog("正在等待“全民618列车”活动界面加载，剩余" + d + "秒……");
            sleep(2000);
        }
    }
    if (className("android.widget.Button").text("做任务，领喵币").findOnce() == null) {
        let i = 0;
        while (true) {
            if (currentActivity() == "com.taobao.search.searchdoor.SearchDoorActivity" && className("android.widget.EditText").findOnce() != null && className("android.widget.Button").desc("搜索").findOnce() != null) {
                toastLog("当前已处于“淘宝搜索界面”");
                let s = className("android.widget.EditText").findOnce().setText("618列车");
                toastLog("已尝试设置淘宝搜索框搜索关键词为：“618列车”");
                sleep(1000);
                if (s == false) {
                    toastLog("设置“搜索关键词”失败，尝试全局设置");
                    setText("618列车");
                }
                let a = className("android.widget.Button").desc("搜索").findOnce();
                if (a.clickable() == true) {
                    a.click();
                    toastLog("已尝试点击“搜索”按钮");
                } else {
                    let b = a.bounds();
                    click(b.centerX(), b.centerY());
                    toastLog("已尝试点击“搜索”按钮");
                }
                sleep(2000);
                break;
            } else if (currentActivity() == "com.taobao.tao.TBMainActivity" && className("android.widget.FrameLayout").desc("首页").findOnce() != null && className("android.view.View").desc("搜索").clickable(true).findOnce() != null) {
                className("android.view.View").desc("搜索").clickable(true).findOnce().click();
                toastLog("已尝试盲点淘宝主页“搜索框”");
                sleep(2000);
            } else if (currentActivity() == "com.taobao.tao.TBMainActivity" && className("android.widget.FrameLayout").desc("首页").findOnce() != null) {
                className("android.widget.FrameLayout").desc("首页").findOnce().click();
                toastLog("已尝试点击淘宝主页“首页”按钮");
                sleep(2000);
            } else if (currentPackage() != "com.taobao.taobao") {
                toastLog("当前未处于淘宝APP中，正在重新打开淘宝……");
                console.warn("当前活动：" + currentActivity() + "，当前包名：" + currentPackage() + "当前应用名：" + getAppName(currentPackage()));
                app.startActivity({
                    action: "android.intent.action.MAIN",
                    packageName: "com.taobao.taobao",
                    className: "com.taobao.tao.welcome.Welcome",
                    category: ["android.intent.category.LAUNCHER"],
                    flags: ["activity_new_task"]
                });
                sleep(2000);
                if (i > 3 && currentPackage() != "com.taobao.taobao") {
                    try {
                        app.startActivity({
                            action: "android.intent.action.VIEW", //此处可为其他值
                            packageName: "com.taobao.taobao",
                            className: "com.taobao.tao.TBMainActivity"
                            //此处可以加入其他内容，如data、extras
                        });
                        toastLog("已再次尝试跳转“淘宝主页”界面");
                        sleep(2000);
                    } catch (e) {
                        log("使用隐式Intent启动淘宝搜索界面失败！");
                    }
                }
                if (i > 5) {
                    app.startActivity({
                        action: "android.intent.action.VIEW",
                        packageName: "com.taobao.taobao",
                        className: "com.taobao.browser.BrowserActivity",
                        data: app.parseUri("https://pages.tmall.com/wow/z/hdwk/n-hdwk-solution/2020618-single?spm=a211oj.14651605.1135447480.d_primarybtn_1&disableNav=YES&disableProgress=YES&hd_from=mallres"),
                        flags: ["grant_read_uri_permission", "grant_write_uri_permission"],
                    });
                    sleep(3000);
                    break;
                }
                i++;
            } else {
                if (className("android.widget.Button").text("返回").clickable(true).findOnce() != null) {
                    className("android.widget.Button").text("返回").clickable(true).findOnce().click();
                    toastLog("已尝试盲点“返回”按钮");
                } else if (className("android.widget.ImageView").clickable(true).desc("返回上一页").findOnce() != null) {
                    className("android.widget.ImageView").clickable(true).desc("返回上一页").findOnce().click();
                    toastLog("已尝试盲点“返回上一页面”按钮");
                } else if (className("android.widget.ImageButton").desc("转到上一层级").clickable(true).findOnce() != null) {
                    className("android.widget.ImageButton").desc("转到上一层级").clickable(true).findOnce().click();
                    toastLog("已盲点“转到上一层级”按钮");
                } else {
                    Justback();
                }
                sleep(2000);
            }
        }
        for (var d = 10; d > 0; d--) {
            if (className("android.widget.Button").text("做任务，领喵币").findOnce() != null) {
                toastLog("已成功处于“618列车”活动界面");
                break;
            } else if (currentActivity() == "com.taobao.browser.BrowserActivity") {
                toastLog("正在等待“全民618列车”活动界面加载，剩余" + d + "秒……");
                sleep(2000);
            } else {
                var d = 0;
                toastLog("当前未处于“全民618列车”活动加载界面，正在重试……");
                openInTask();
                break;
            }
        }
    }
}

function click_CancelUpdateButton() {
    if (className("android.widget.TextView").text("提示").findOnce() != null &&
        className("android.widget.TextView").text("提示").findOnce().parent().child(className("android.widget.TextView").text("提示").findOnce().parent().childCount() - 1).className() == "android.widget.LinearLayout" &&
        className("android.widget.TextView").text("提示").findOnce().parent().child(className("android.widget.TextView").text("提示").findOnce().parent().childCount() - 1).childCount() > 0 &&
        className("android.widget.TextView").text("提示").findOnce().parent().child(className("android.widget.TextView").text("提示").findOnce().parent().childCount() - 1).child(0).childCount() > 0 &&
        className("android.widget.TextView").text("提示").findOnce().parent().child(className("android.widget.TextView").text("提示").findOnce().parent().childCount() - 1).child(0).child(0).text() == "取消") {
        let a = className("android.widget.TextView").text("提示").findOnce().parent().child(className("android.widget.TextView").text("提示").findOnce().parent().childCount() - 1).child(0).child(0);
        if (a.clickable() == true) {
            a.click();
            toastLog("已尝试盲点“取消升级”按钮");
        } else {
            let b = a.bounds();
            click(b.centerX(), b.centerY());
            toastLog("已尝试点击“取消升级”按钮");
        }
        sleep(2000);
    }
}

function DoTask() {
    click_CancelUpdateButton();
    if (className("android.widget.Button").text("收下祝福").findOnce() != null) {
        className("android.widget.Button").text("收下祝福").findOnce().click();
        toastLog("已尝试点击“收下祝福”按钮");
        sleep(2000);
    }
    if (className("android.widget.Button").text("做任务，领喵币").findOnce() != null) {
        className("android.widget.Button").text("做任务，领喵币").findOnce().click();
        toastLog("已尝试点击“做任务，领喵币”按钮");
        sleep(2000);
    }
    var i = 0;
    while (true) {
        click_CancelUpdateButton();
        try {
            var A = className("android.widget.Button").text("做任务，领喵币").findOnce().parent().parent().parent().parent().child(6).child(0).child(0);
            var Close = A.child(A.childCount() - 1);
            var List = A.child(0).child(A.child(0).childCount() - 1);
            if (A.child(0).child(A.child(0).childCount() - 2).text() == "签到") {
                A.child(0).child(A.child(0).childCount() - 2).click();
                toastLog("已尝试点击“签到”按钮");
                sleep(2000);
            }
        } catch (e) {
            try {
                var A = className("android.widget.Button").text("关闭").findOnce().parent();
            } catch (e) {
                try {
                    var A = className("android.view.View").text("TB1Y2tIHND1gK0jSZFsXXbldVXa-680-120.png_").findOnce().parent();
                } catch (e) {
                    toastLog("当前未处于淘宝618列车活动界面，正在重新打开");
                    console.warn("当前活动：" + currentActivity() + "，当前包名：" + currentPackage() + "当前应用名：" + getAppName(currentPackage()));
                    openInTask();
                    DoTask();
                }
            }
        }
        if (i >= List.childCount()) {
            break;
        } else {
            let RwTitle = List.child(i).child(0).text();
            let Button = List.child(i).child(1);
            now = RwTitle.substring(RwTitle.indexOf("(") + 1, RwTitle.indexOf("/") + 0);
            xz = RwTitle.substring(RwTitle.indexOf("/") + 1, RwTitle.indexOf(")") + 0);
            log(RwTitle, Button.text(), Button.clickable(), "当前：" + now, "上限：" + xz);
            if (RwTitle.search("邀请好友") < 0 && RwTitle.search("开通省钱卡") < 0 && RwTitle.search("天猫农场") < 0 && RwTitle.search("续费88VIP") < 0  && RwTitle.search("登录特价版") < 0&& RwTitle.search("淘宝人") < 0&& RwTitle.search("收菜") < 0 && RwTitle.search("红包省钱卡") < 0  && RwTitle.search("开连续包月") < 0 && now != xz) {
                if (Button.clickable() == true) {
                    Button.click();
                    toastLog("已尝试盲点“" + Button.text() + "”按钮");
                } else {
                    let a = Button.bounds();
                    click(a.centerX(), a.centerY());
                    toastLog("已尝试点击“" + Button.text() + "”按钮");
                }
                sleep(3000);
                if (className("android.widget.Button").text("做任务，领喵币").findOnce() == null) {
                    for (let deng = 15; deng > 0; deng--) {
                        if (text("网络竟然崩溃了").findOnce() != null && className("android.widget.Button").text("刷新").clickable(true).findOnce() != null) {
                            className("android.widget.Button").text("刷新").clickable(true).findOnce().click();
                            toastLog("网络竟然崩溃了，已尝试点击“刷新”按钮");
                            sleep(3000);
                        }
                        if (className("android.view.View").desc(" 任务已完成").findOnce() != null || className("android.view.View").desc(" 任务完成").findOnce() != null || className("android.view.View").text("任务已完成").findOnce() != null || className("android.view.View").textContains("任务已完成").findOnce() != null && className("android.view.View").textContains("任务完成").findOnce() != null) {
                            toastLog("任务已完成");
                            break;
                        } else {
                            toastLog("正在完成“" + Button.text() + "（" + now + "/" + xz + "）”任务，剩余" + deng + "秒……");
                            sleep(2000);
                        }
                    }
                    if (className("android.widget.ImageView").desc("返回").clickable(true).findOnce() != null) {
                        className("android.widget.ImageView").desc("返回").findOnce().click();
                        toastLog("已尝试盲点“返回”按钮");
                        sleep(2000);
                    } else {
                        Justback();
                        sleep(2000);
                    }
                }
            } else {
                if (now == xz) {
                    toastLog("【任务已完成】" + RwTitle);
                } else {
                    toastLog("【已跳过】" + RwTitle);
                }
                i++;
            }
        }
    }
    alert("喵币++：\n脚本已运行完成");
    exit();
}
firstD();

function firstD() {
    if (context_Manualstate == 1) {
        toastLog("已手动模式运行脚本");
        var options = ["等待20秒", "等待30秒", "等待50秒", "等待60秒", "等待10秒"]
        var i = dialogs.select("🔧以“手动模式”运行脚本\n\n接下来您需要在提示出现后自行打开淘宝APP至活动页”\n\n请选择脚本等待您打开淘宝的时间", options);
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
            toastLog("请打开淘宝至618列车的主界面\n剩余" + deng + "秒后运行脚本...");
            sleep(1111);
        }
        DoTask();
    } else {
        openInTask();
        DoTask();
    }
}