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
    var ScriptVersion = ("Beta1.62"); //版本
    log("软件脚本已开始运行，如果没有弹出菜单请强行停止再打开本软件！");
    var options_ = ["▶️ 开始运行脚本", "🕒 计时运行脚本", "⏰ 定时运行脚本", "⏹ 停止运行脚本", "🔙 返回方法设置", "🔧 手动打开模式", "💬 吐司/日志切换"]
    var i = dialogs.select("*+*+*+* 橘衫の脚本 *+*+*+*\n*+*+*+*  Orange Js *+*+*+*\n\n欢迎使用 (◍•ᴗ•◍)❤" + "\n" + "“自动宠汪汪”" + ScriptVersion + "\n请选择一个要进行的选项", options_);
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
        wait_Time_over();
    } else if (i == 2) {
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
        context_Manualstate = 0;
        Set_Back_way();
        DS();
        device.keepScreenDim();
    } else if (i == 4) {
        toastLog(options_[i]);
        try {
            if (files.exists("/storage/emulated/0/OrangeJs/自动宠汪汪/返回方法设置.txt") == true && files.read("/storage/emulated/0/OrangeJs/自动宠汪汪/返回方法设置.txt") > 2 && files.exists("/storage/emulated/0/OrangeJs/自动宠汪汪/滑动返回速度.txt") == false) {
                files.remove("/storage/emulated/0/OrangeJs/自动宠汪汪/返回方法设置.txt");
                log("当前返回方法设置为滑动返回但未设置滑动返回速度");
            }
            if (files.exists("/storage/emulated/0/OrangeJs/自动宠汪汪/返回方法设置.txt") == true) {
                files.rename("/storage/emulated/0/OrangeJs/自动宠汪汪/返回方法设置.txt", "X返回方法设置.txt");
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
        if (files.exists("/storage/emulated/0/OrangeJs/自动宠汪汪/吐司or日志.txt") == true) {
            var z = files.read("/storage/emulated/0/OrangeJs/自动宠汪汪/吐司or日志.txt");
            if (z != "吐司" && z != "日志") {
                alert("“吐司or日志”文件错误，已尝试删除错误文件");
                try {
                    files.remove("/storage/emulated/0/OrangeJs/自动宠汪汪/吐司or日志.txt");
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
                files.createWithDirs("/storage/emulated/0/OrangeJs/自动宠汪汪/吐司or日志.txt");
                files.write("/storage/emulated/0/OrangeJs/自动宠汪汪/吐司or日志.txt", "吐司");
            } catch (e) {
                log("未授予存储权限或存储权限错误，当前设置为吐司");
                var T = 0;
            }
        } else if (da == 1) {
            toastLog("您选择了：使用悬浮日志");
            try {
                var T = 1;
                files.createWithDirs("/storage/emulated/0/OrangeJs/自动宠汪汪/吐司or日志.txt");
                files.write("/storage/emulated/0/OrangeJs/自动宠汪汪/吐司or日志.txt", "日志");
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
        if (files.exists("/storage/emulated/0/OrangeJs/自动宠汪汪/返回方法设置.txt") == true) {
            context_i_back = files.read("/storage/emulated/0/OrangeJs/自动宠汪汪/返回方法设置.txt");
            log("返回方法：" + context_i_back);
            if (context_i_back > 2) {
                try {
                    context_gestures_speed = files.read("/storage/emulated/0/OrangeJs/自动宠汪汪/滑动返回速度.txt")
                    log("滑动返回速度：" + context_gestures_speed)
                } catch (e) {
                    log("上次未完成滑动返回速度设置");
                    files.remove("/storage/emulated/0/OrangeJs/自动宠汪汪/返回方法设置.txt");
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
                files.createWithDirs("/storage/emulated/0/OrangeJs/自动宠汪汪/返回方法设置.txt");
                files.write("/storage/emulated/0/OrangeJs/自动宠汪汪/返回方法设置.txt", context_i_back);
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
                    files.createWithDirs("/storage/emulated/0/OrangeJs/自动宠汪汪/滑动返回速度.txt");
                    files.write("/storage/emulated/0/OrangeJs/自动宠汪汪/滑动返回速度.txt", context_gestures_speed);
                }
            }
            if (files.exists("/storage/emulated/0/OrangeJs/自动宠汪汪/返回方法设置.txt") == true && files.exists("/storage/emulated/0/OrangeJs/自动宠汪汪/X返回方法设置.txt") == true) {
                log("删除");
                files.remove("/storage/emulated/0/OrangeJs/自动宠汪汪/X返回方法设置.txt");
                dialogs_js();
            } else if (files.exists("/storage/emulated/0/OrangeJs/自动宠汪汪/X返回方法设置.txt") == true) {
                log("重命名");
                files.rename("/storage/emulated/0/OrangeJs/自动宠汪汪/X返回方法设置.txt", "返回方法设置.txt");
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
if (files.exists("/storage/emulated/0/OrangeJs/自动宠汪汪/吐司or日志.txt") == true) {
    try {
        let z = files.read("/storage/emulated/0/OrangeJs/自动宠汪汪/吐司or日志.txt");
        if (z == "吐司") {
            var T = 0;
        } else if (z == "日志") {
            var T = 1;
        } else {
            toastLog("“吐司or日志”文件错误，已尝试删除并使用默认日志");
            try {
                files.remove("/storage/emulated/0/OrangeJs/自动宠汪汪/吐司or日志.txt");
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
        files.createWithDirs("/storage/emulated/0/OrangeJs/自动宠汪汪/吐司or日志.txt");
        files.write("/storage/emulated/0/OrangeJs/自动宠汪汪/吐司or日志.txt", "日志");
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
                <img src="https://code.aliyun.com/orange_shirt/OrangeJs/raw/master/OrangeJs-logoWhite.png" h="30" margin="0 10 0 5"/>//黑色logo
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

function AlreadyInHD() {
    if (className("android.webkit.WebView").text("宠汪汪").findOnce() != null &&
        className("android.webkit.WebView").text("宠汪汪").findOnce().childCount() > 0 &&
        className("android.webkit.WebView").text("宠汪汪").findOnce().child(0).id() == "app" &&
        className("android.webkit.WebView").text("宠汪汪").findOnce().child(0).childCount() > 0 &&
        className("android.webkit.WebView").text("宠汪汪").findOnce().child(0).child(0).childCount() > 0
    ) {
        return true;
    } else {
        return false;
    }
}
context_JDbug = null;

function openInTask() {
    while (true) {
        function ClickRk() {
            let a = className("android.widget.LinearLayout").id("com.jd.lib.personal.feature:id/gm").findOnce();
            if (a != null && a.childCount() > 0 &&
                a.child(0).childCount() > 0 &&
                a.child(0).child(0).childCount() > 3 &&
                a.child(0).child(0).child(3).childCount() > 0 &&
                a.child(0).child(0).child(3).child(0).childCount() > 0 &&
                a.child(0).child(0).child(3).child(0).child(0).className() == "androidx.recyclerview.widget.RecyclerView" &&
                a.child(0).child(0).child(3).child(0).child(0).childCount() > 5) {
                for (let ii = 0; ii < a.child(0).child(0).child(3).child(0).childCount(); ii++) {
                    for (let i = 0; i < a.child(0).child(0).child(3).child(0).child(ii).childCount(); i++) {
                        if (a.child(0).child(0).child(3).child(0).child(ii).child(i).childCount() > 0 &&
                            a.child(0).child(0).child(3).child(0).child(ii).child(i).child(0).childCount() > 1 &&
                            a.child(0).child(0).child(3).child(0).child(ii).child(i).child(0).child(1).text() == "宠汪汪") {
                            return a.child(0).child(0).child(3).child(0).child(ii).child(i);
                        }
                    }
                }
            }
        }
        if (className("android.view.View").desc("我的").findOnce() != null && text("宠汪汪").className("android.widget.TextView").findOnce() != null && text("瓜分亿万京豆").className("android.widget.TextView").findOnce() != null) {
            if (text("宠汪汪").className("android.widget.TextView").findOnce().parent().clickable() == true) {
                text("宠汪汪").className("android.widget.TextView").findOnce().parent().click();
                toastLog("已尝试盲点“宠汪汪”入口按钮");
                sleep(3000);
            } else {
                let a = text("宠汪汪").className("android.widget.TextView").findOnce().parent().bounds();
                click(a.centerX(), a.centerY());
                toastLog("已尝试点击“宠汪汪”入口按钮");
                sleep(3000);
            }
            break;
        } else if (className("android.view.View").desc("我的").findOnce() != null && ClickRk() != undefined) {
            let a = ClickRk();
            if (a.clickable() == true) {
                a.click();
                toastLog("已尝试盲点“宠汪汪”入口按钮");
                sleep(3000);
            } else {
                let aa = a.bounds();
                click(aa.centerX(), aa.centerY());
                toastLog("已尝试点击“宠汪汪”入口按钮");
                sleep(3000);
            }
            break;
        } else if (className("android.view.View").clickable(true).desc("我的").findOnce() != null) {
            className("android.view.View").desc("我的").findOnce().click();
            toastLog("已尝试盲点京东主页“我的”按钮");
            sleep(2000);
        } else if (className("android.widget.LinearLayout").id("com.jingdong.app.mall:id/tj").findOnce() != null &&
            className("android.widget.LinearLayout").id("com.jingdong.app.mall:id/tj").findOnce().childCount() > 4 &&
            className("android.widget.LinearLayout").id("com.jingdong.app.mall:id/tj").findOnce().child(4).childCount() > 2 &&
            className("android.widget.LinearLayout").id("com.jingdong.app.mall:id/tj").findOnce().child(4).child(2).desc() != null &&
            className("android.widget.LinearLayout").id("com.jingdong.app.mall:id/tj").findOnce().child(4).child(2).desc() == "我的") {
            if (className("android.widget.LinearLayout").id("com.jingdong.app.mall:id/tj").findOnce().child(4).child(2).clickable() == true) {
                className("android.widget.LinearLayout").id("com.jingdong.app.mall:id/tj").findOnce().child(4).child(2).click();
                toastLog("已尝试盲点京东主页“我的”按钮（层级）");
            } else {
                let a = className("android.widget.LinearLayout").id("com.jingdong.app.mall:id/tj").findOnce().child(4).child(2).bounds();
                click(a.centerX(), a.centerY());
                toastLog("已尝试点击京东主页“我的”按钮（层级）");
            }
            sleep(2000);
        } else if (className("android.widget.LinearLayout").id("com.jingdong.app.mall:id/tj").findOnce() != null &&
            className("android.widget.LinearLayout").id("com.jingdong.app.mall:id/tj").findOnce().childCount() > 4 &&
            className("android.widget.LinearLayout").id("com.jingdong.app.mall:id/tj").findOnce().child(4).childCount() > 2 &&
            className("android.widget.LinearLayout").id("com.jingdong.app.mall:id/tj").findOnce().child(4).child(2).desc() != null &&
            className("android.widget.LinearLayout").id("com.jingdong.app.mall:id/tj").findOnce().child(4).child(2).desc() == "我的") {
            if (className("android.widget.LinearLayout").id("com.jingdong.app.mall:id/tj").findOnce().child(4).child(2).clickable() == true) {
                className("android.widget.LinearLayout").id("com.jingdong.app.mall:id/tj").findOnce().child(4).child(2).click();
                toastLog("已尝试盲点京东主页“我的”按钮（层级）");
            } else {
                let a = className("android.widget.LinearLayout").id("com.jingdong.app.mall:id/tj").findOnce().child(4).child(2).bounds();
                click(a.centerX(), a.centerY());
                toastLog("已尝试点击京东主页“我的”按钮（层级）");
            }
            sleep(2000);
        } else if (currentPackage() != "com.jingdong.app.mall") {
            app.startActivity({
                action: "android.intent.action.VIEW", //此处可为其他值
                packageName: "com.jingdong.app.mall",
                className: "com.jingdong.app.mall.main.MainActivity"
                //此处可以加入其他内容，如data、extras
            });
            toastLog("当前未处于京东APP中，正在重新打开京东……");
            if (className("android.widget.ImageView").desc("返回").clickable(true).findOnce() != null) {
                className("android.widget.ImageView").desc("返回").clickable(true).findOnce().click();
                toastLog("处于京东已尝试点击“返回”按钮");
            }
            console.warn("当前活动：" + currentActivity() + "，当前包名：" + currentPackage() + "当前应用名：" + getAppName(currentPackage()));
            sleep(2000);
        } else {
            if (className("android.widget.ImageView").desc("返回").clickable(true).findOnce() != null) {
                className("android.widget.ImageView").desc("返回").clickable(true).findOnce().click();
                toastLog("已尝试点击“返回”按钮");
            } else {
                Justback();
            }
            sleep(2000);
        }
    }
    for (let d = 10; d > 0; d--) {
        toastLog("正在等待“宠汪汪”活动界面加载，剩余" + d + "秒……");
        sleep(1000);
    }
}


function DoTask() {
    if (AlreadyInHD() == true) {
        try {
            var A = className("android.webkit.WebView").text("宠汪汪").findOnce().child(0).child(1).child(0);
        } catch (e) {
            console.warn("当前活动：" + currentActivity() + "，当前包名：" + currentPackage() + "当前应用名：" + getAppName(currentPackage()));
            toastLog("未处于“宠汪汪”主界面，正在重试中……" + e);
            openInTask();
            DoTask();
        }

        function EatingOrNot() {
            var IsEating = null;
            for (let i = A.childCount() - 1; i >= 0; i--) {
                if (A.child(i).childCount() > 1 && A.child(i).child(1).childCount() > 1 && A.child(i).child(1).child(1).text() != "") {
                    let ObjectText = A.child(i).child(1).child(1).text();
                    if (ObjectText.search("小时") >= 0 && ObjectText.search("分") >= 0 && ObjectText.search("秒") >= 0) {
                        var IsEating = ObjectText;
                        break;
                    }
                }
            }
            if (IsEating == null) {
                return false;
            } else {
                return IsEating;
            }
        }
        if (EatingOrNot() == false) {
            let a = A.child(A.childCount() - 1).child(0).bounds();
            click(a.centerX(), a.centerY());
            toastLog("已尝试点击“喂养”按钮");
            sleep(2000);
            try {
                var BeforeDogFood = A.child(A.childCount() - 1).child(0).child(2).text();
            } catch (e) {
                console.warn("当前活动：" + currentActivity() + "，当前包名：" + currentPackage() + "当前应用名：" + getAppName(currentPackage()));
                toastLog("A当前未处于“宠汪汪”活动页面，正在重新尝试进入……" + e);
                openInTask();
                DoTask();
            }
            let DogFood = BeforeDogFood.replace("g", "");
            if (className("android.view.View").text("喂食送积分").findOnce() != null) {
                var B = className("android.view.View").text("喂食送积分").findOnce().parent();
                let AllChoice = [];
                for (let i = 0; i < B.childCount(); i++) {
                    if (B.child(i).childCount() > 3 && B.child(i).child(1).text() == "消耗" && B.child(i).child(2).text() != "" && B.child(i).child(3).text() != "") {
                        AllChoice.push({
                            No: i,
                            Number: B.child(i).child(2).text(),
                            text: B.child(i).child(1).text() + B.child(i).child(2).text() + B.child(i).child(3).text()
                        });
                    }
                }
                for (let i = AllChoice.length - 1; i >= 0; i--) {
                    let BeforeChoice = AllChoice[i].Number;
                    if (Number(DogFood) >= Number(BeforeChoice)) {
                        let a = B.child(AllChoice[i].No).bounds();
                        click(a.centerX(), a.centerY());
                        toastLog("已尝试点击" + AllChoice[i].text);
                        sleep(2000);
                        let b = B.child(B.childCount() - 1).bounds();
                        click(b.centerX(), b.centerY());
                        toastLog("已尝试点击“喂养”按钮");
                        if (className("android.view.View").text("您的宠物正在进食中,请稍后再喂食").findOne(2000) != null) {
                            let a = B.parent().child(0).bounds();
                            click(a.centerX(), a.centerY());
                            toastLog("您的宠物正在进食中,请稍后再喂食，已尝试点击“关闭蒙版”按钮");
                            sleep(2000);
                        }
                        break;
                    } else if (i == 0) {
                        let a = B.parent().child(0).bounds();
                        click(a.centerX(), a.centerY());
                        toastLog("狗粮不足，已尝试点击“关闭蒙版”按钮");
                        sleep(2000);
                    }
                }
            }
        } else {
            log("您的宠物正在进食中,请" + EatingOrNot() + "后再喂食");
        }
        let LGLbutton = [];
        for (let i = 0; i < A.childCount(); i++) {
            if (A.child(i).childCount() > 3) {
                for (let ii = A.child(i).childCount() - 1; ii >= 0; ii--) {
                    if (A.child(i).child(ii).childCount() > 0 && A.child(i).child(ii).child(0).childCount() > 0 && A.child(i).child(ii).child(0).child(0).text() == "linggouliang") {
                        LGLbutton.push({
                            NumberOne: i,
                            NumberTwo: ii
                        });
                    }
                }
            }
        }
        if (LGLbutton.length == 1) {
            let a = A.child(LGLbutton[0].NumberOne).child(LGLbutton[0].NumberTwo).bounds();
            click(a.centerX(), a.centerY());
            toastLog("已尝试点击“领狗粮”按钮");
            sleep(3000);
        } else {
            toastLog("找不到领狗粮按钮，正在重新尝试");
            openInTask();
            DoTask();
        }
        let I = 0;
        var Hdname = null;
        var WrongTime = 0;
        while (true) {
            try {
                var A = className("android.webkit.WebView").text("宠汪汪").findOnce().child(0).child(1).child(0);
                var a = A.child(A.childCount() - 1).child(1).childCount() - 1;
                var B = A.child(A.childCount() - 1).child(1).child(a);
            } catch (e) {
                console.warn("当前活动：" + currentActivity() + "，当前包名：" + currentPackage() + "当前应用名：" + getAppName(currentPackage()));
                toastLog("未处于“宠汪汪”主界面，正在重试中……" + e);
                openInTask();
                DoTask();
            }
            if (I >= B.childCount()) {
                let aa = A.child(A.childCount() - 1).child(1).child(a - 1).bounds();
                click(aa.centerX(), aa.centerY());
                toastLog("已尝试点击“关闭蒙版”按钮");
                sleep(3000);
                break;
            } else {
                if (B.child(I).childCount() > 3 && B.child(I).child(1).text() != "" && B.child(I).child(3).text() != "") {
                    let BeforeWhatNow = B.child(I).child(1).text();
                    if (Hdname == null) {
                        var Hdname = BeforeWhatNow;
                    } else if (Hdname == BeforeWhatNow) {
                        WrongTime++;
                    } else {
                        var Hdname = BeforeWhatNow;
                    }
                    if (WrongTime >= 3) {
                        toastLog("无法完成“" + BeforeWhatNow + "”任务，现跳过此任务");
                        context_JDbug = BeforeWhatNow;
                        var Hdname = null;
                        var WrongTime = null;
                    }
                    if (BeforeWhatNow.search("（") >= 0 && BeforeWhatNow.search("）") >= 0 && BeforeWhatNow.search("/") >= 0) {
                        WhatNowss = BeforeWhatNow.replace("/", "替");
                        WhatNows = WhatNowss.replace("（", "头");
                        WhatNow = WhatNows.match(/头(\S*)替/)[1];
                        limitss = BeforeWhatNow.replace("/", "替");
                        limits = limitss.replace("）", "尾");
                        limit = limits.match(/替(\S*)尾/)[1];
                        toastLog(B.child(I).child(1).text() + "，" + B.child(I).child(3).text());
                        if (B.child(I).child(3).bounds().top >= B.bounds().bottom) {
                            B.scrollBackward();
                            toastLog("已尝试上滑任务列表，当前按钮：" + B.child(I).child(3).text() + B.child(I).child(3).bounds());
                            sleep(2000);
                        } else if (B.child(I).child(3).bounds().bottom <= B.bounds().top || B.child(I).bounds().height() < 50) {
                            B.scrollForward();
                            toastLog("已尝试下滑任务列表，当前按钮名称：" + B.child(I).child(3).text() + B.child(I).child(3).bounds());
                            sleep(2000);
                        } else if (WhatNow != limit && context_JDbug != BeforeWhatNow) {
                            let a = B.child(I).child(3).bounds();
                            click(a.centerX(), a.centerY());
                            toastLog("已尝试点击“" + B.child(I).child(3).text() + "”按钮");
                            sleep(3000);
                            let time = 0;
                            for (let deng = 10; deng > 0; deng--) {
                                if (className("android.webkit.WebView").findOnce() != null && className("android.webkit.WebView").findOnce().text() == "关注店铺任务" &&
                                    className("android.webkit.WebView").text("关注店铺任务").findOnce().childCount() > 0 && className("android.webkit.WebView").text("关注店铺任务").findOnce().child(0).childCount() > 0) {
                                    toastLog("当前处于“关注店铺任务”");
                                    var AA = className("android.webkit.WebView").text("关注店铺任务").findOnce().child(0).child(0);
                                    let ia = 0;
                                    while (true) {
                                        try {
                                            var AA = className("android.webkit.WebView").text("关注店铺任务").findOnce().child(0).child(0);
                                        } catch (e) {
                                            toastLog("完成“关注店铺任务”出现错误：" + e);
                                            break;
                                        }
                                        if (ia >= AA.childCount()) {
                                            toastLog("当前已无“进店并关注”按钮");
                                            break;
                                        } else if (AA.child(ia).text() == "进店并关注") {
                                            if (AA.child(ia).bounds().top >= AA.bounds().bottom || AA.child(ia).bounds().height() < 20) {
                                                className("android.webkit.WebView").text("关注店铺任务").findOnce().scrollForward();
                                                toastLog("“进店并关注”按钮超出可点击范围，已尝试上滑");
                                                sleep(2000);
                                            }
                                            let aa = AA.child(ia).bounds();
                                            click(aa.centerX(), aa.centerY());
                                            toastLog("已尝试点击第" + time + "个“进店并关注”按钮");
                                            sleep(3000);
                                            if (className("android.webkit.WebView").text("关注店铺任务").findOnce() == null) {
                                                for (let dengs = 5; dengs > 0; dengs--) {
                                                    toastLog("正在进行第" + time + "个“进店并关注”，剩余" + dengs + "秒……");
                                                    sleep(1000);
                                                }
                                                time++;
                                                Justback();
                                                if (className("android.view.View").text("关注已达上限~").findOne(3000) != null) {
                                                    toastLog("识别到“关注已达上限”");
                                                    sleep(1000);
                                                    break;
                                                }
                                            }
                                        } else {
                                            ia++;
                                        }
                                    }
                                    break;
                                } else if (className("android.webkit.WebView").findOnce() != null && className("android.webkit.WebView").findOnce().text() == "关注频道任务" &&
                                    className("android.webkit.WebView").text("关注频道任务").findOnce().childCount() > 0 && className("android.webkit.WebView").text("关注频道任务").findOnce().child(0).childCount() > 0) {
                                    toastLog("当前处于“关注频道任务”");
                                    var AA = className("android.webkit.WebView").text("关注频道任务").findOnce().child(0).child(0);
                                    let ia = 0;
                                    while (true) {
                                        try {
                                            var AA = className("android.webkit.WebView").text("关注频道任务").findOnce().child(0).child(0);
                                        } catch (e) {
                                            toastLog("完成“关注频道任务”出现错误：" + e);
                                            break;
                                        }
                                        if (ia >= AA.childCount()) {
                                            toastLog("当前已无“进入并关注”按钮");
                                            break;
                                        } else if (AA.child(ia).text() == "进入并关注") {
                                            if (AA.child(ia).bounds().top >= AA.bounds().bottom || AA.child(ia).bounds().height() < 20) {
                                                className("android.webkit.WebView").text("关注频道任务").findOnce().scrollForward();
                                                toastLog("“进入并关注”按钮超出可点击范围，已尝试上滑");
                                                sleep(2000);
                                            }
                                            let aa = AA.child(ia).bounds();
                                            click(aa.centerX(), aa.centerY());
                                            toastLog("已尝试点击第" + time + "个“进入并关注”按钮");
                                            sleep(3000);
                                            if (className("android.webkit.WebView").text("关注频道任务").findOnce() == null) {
                                                for (let dengs = 5; dengs > 0; dengs--) {
                                                    toastLog("正在进行第" + time + "个“进入并关注”，剩余" + dengs + "秒……");
                                                    sleep(1000);
                                                }
                                                time++;
                                                Justback();
                                                sleep(2000);
                                            }
                                        } else {
                                            ia++;
                                        }
                                    }
                                    break;
                                } else {
                                    toastLog("正在完成浏览任务，剩余" + deng + "秒后返回...");
                                    sleep(1000);
                                }
                            }
                            Justback();
                            sleep(3000);
                        } else {
                            I++;
                        }
                    } else if (B.child(I).child(3).text() == "领取") {
                        if (B.child(I).child(3).bounds().top >= B.bounds().bottom) {
                            B.scrollBackward();
                            toastLog("已尝试上滑任务列表，当前按钮：" + B.child(I).child(3).text() + B.child(I).child(3).bounds());
                            sleep(2000);
                        } else if (B.child(I).child(3).bounds().bottom <= B.bounds().top || B.child(I).bounds().height() < 50) {
                            B.scrollForward();
                            toastLog("已尝试下滑任务列表，当前按钮名称：" + B.child(I).child(3).text() + B.child(I).child(3).bounds());
                            sleep(2000);
                        } else {
                            let a = B.child(I).child(3).bounds();
                            click(a.centerX(), a.centerY());
                            toastLog("已尝试点击“" + B.child(I).child(3).text() + "”按钮");
                            sleep(3000);
                        }
                    } else {
                        I++;
                    }
                } else {
                    I++;
                }
            }
        }
        try {
            var A = className("android.webkit.WebView").text("宠汪汪").findOnce().child(0).child(1).child(0);
        } catch (e) {
            console.warn("当前活动：" + currentActivity() + "，当前包名：" + currentPackage() + "当前应用名：" + getAppName(currentPackage()));
            toastLog("未处于“宠汪汪”主界面，正在重试中……" + e);
            openInTask();
            DoTask();
        }
        let CWSPbutton = [];
        for (let i = A.childCount() - 1; i >= 0; i--) {
            if (A.child(i).childCount() > 3) {
                for (let ii = A.child(i).childCount() - 1; ii >= 0; ii--) {
                    if (A.child(i).child(ii).childCount() > 1 && A.child(i).child(ii).child(1).childCount() > 0 && A.child(i).child(ii).child(1).child(0).text() == "pet_run2") {
                        CWSPbutton.push({
                            NumberOne: i,
                            NumberTwo: ii
                        });
                    }
                }
            }
        }
        if (CWSPbutton.length == 1) {
            let a = A.child(CWSPbutton[0].NumberOne).child(CWSPbutton[0].NumberTwo).bounds();
            click(a.centerX(), a.centerY());
            toastLog("已尝试点击“宠物赛跑”按钮");
            sleep(3000);
        } else {
            toastLog("找不到宠物赛跑按钮，正在重新尝试");
            openInTask();
            DoTask();
        }
        if (className("android.webkit.WebView").text("宠物赛跑").findOnce() != null &&
            className("android.webkit.WebView").text("宠物赛跑").findOnce().childCount() > 0 &&
            className("android.webkit.WebView").text("宠物赛跑").findOnce().child(0).childCount() > 0) {
            var C = className("android.webkit.WebView").text("宠物赛跑").findOnce().child(0).child(0);
            for (let i = 0; i < C.childCount(); i++) {
                if (C.child(i).childCount() > 0 &&
                    C.child(i).child(0).childCount() > 2 &&
                    C.child(i).child(0).child(2).childCount() > 0 &&
                    C.child(i).child(0).child(2).child(0).text() == "确认领取") {
                    let a = C.child(i).child(0).child(2).child(0).bounds();
                    click(a.centerX(), a.centerY());
                    toastLog("已尝试点击“确认领取”按钮");
                    sleep(2000);
                } else if (
                    C.child(i).childCount() > 0 &&
                    C.child(i).child(0).childCount() > 0 &&
                    C.child(i).child(0).child(C.child(i).child(0).childCount() - 1).childCount() > 0 &&
                    C.child(i).child(0).child(C.child(i).child(0).childCount() - 1).child(0).text() == "确认领取") {
                    let a = C.child(i).child(0).child(C.child(i).child(0).childCount() - 1).child(0).bounds();
                    click(a.centerX(), a.centerY());
                    toastLog("已尝试点击“确认领取”按钮");
                    sleep(2000);
                }
            }

            function ClickZDL() {
                for (let i = 0; i < C.childCount(); i++) {
                    if (C.child(i).childCount() > 0 &&
                        C.child(i).child(0).childCount() > 2 &&
                        C.child(i).child(0).child(1).childCount() > 0 &&
                        C.child(i).child(0).child(1).child(0).text() == "知道啦") {
                        let a = C.child(i).child(0).child(1).child(0).bounds();
                        click(a.centerX(), a.centerY());
                        toastLog("已尝试点击“知道啦”按钮");
                        sleep(2000);
                        return true;
                    } else if (
                        C.child(i).childCount() > 0 &&
                        C.child(i).child(0).childCount() > 0 &&
                        C.child(i).child(0).child(C.child(i).child(0).childCount() - 1).childCount() > 0 &&
                        C.child(i).child(0).child(C.child(i).child(0).childCount() - 1).child(0).text() == "知道啦") {
                        let a = C.child(i).child(0).child(C.child(i).child(0).childCount() - 1).child(0).bounds();
                        click(a.centerX(), a.centerY());
                        toastLog("已尝试点击“知道啦”按钮");
                        sleep(2000);
                        return true;
                    }
                }
            }
            if (ClickZDL() != true) {
                let PKchoice = "双人PK赛";
                for (let i = 0; i < C.child(1).childCount(); i++) {
                    if (C.childCount() > 1 &&
                        C.child(1).childCount() > i &&
                        C.child(1).child(i).childCount() > 0 &&
                        C.child(1).child(i).child(0).childCount() > 0 &&
                        C.child(1).child(i).child(0).child(0).text() == "two_main_title" &&
                        PKchoice == "双人PK赛") {
                        let a = C.child(1).child(i).child(0).child(0).bounds();
                        click(a.centerX(), a.centerY());
                        toastLog("已尝试点击“双人PK赛”按钮");
                        sleep(3000);
                        break;
                    } else if (C.childCount() > 1 &&
                        C.child(1).childCount() > i &&
                        C.child(1).child(i).childCount() > 0 &&
                        C.child(1).child(i).child(0).childCount() > 0 &&
                        C.child(1).child(i).child(0).child(0).text() == "ten_main_title" &&
                        PKchoice == "10人突围赛") {
                        let a = C.child(1).child(i).child(0).child(0).bounds();
                        click(a.centerX(), a.centerY());
                        toastLog("已尝试点击“10人突围赛”按钮");
                        sleep(3000);
                        break;
                    } else if (C.childCount() > 1 &&
                        C.child(1).childCount() > i &&
                        C.child(1).child(i).childCount() > 0 &&
                        C.child(1).child(i).child(0).childCount() > 0 &&
                        C.child(1).child(i).child(0).child(0).text() == "fifty_main_title" &&
                        PKchoice == "50人挑战赛") {
                        let a = C.child(1).child(i).child(0).child(0).bounds();
                        click(a.centerX(), a.centerY());
                        toastLog("已尝试点击“50人挑战赛”按钮");
                        sleep(3000);
                        break;
                    }
                }
                var C = className("android.webkit.WebView").text("宠物赛跑").findOnce().child(0).child(0);
                for (let i = 0; i < C.child(1).child(0).childCount(); i++) {
                    if (C.childCount() > 1 &&
                        C.child(1).childCount() > 0 &&
                        C.child(1).child(0).childCount() > i &&
                        C.child(1).child(0).child(i).childCount() > 0 &&
                        C.child(1).child(0).child(i).child(0).text() == "我要加入") {
                        let a = C.child(1).child(0).child(i).child(0).bounds();
                        click(a.centerX(), a.centerY());
                        toastLog("已尝试点击“" + C.child(1).child(0).child(i).child(0).text() + "”按钮");
                        sleep(3000);
                        break;
                    }
                }
                for (let i = 0; i < C.childCount(); i++) {
                    if (C.childCount() > i &&
                        C.child(i).childCount() > 0 &&
                        C.child(i).child(C.child(i).childCount() - 1).childCount() > 0 &&
                        C.child(i).child(C.child(i).childCount() - 1).child(0).childCount() > 1 &&
                        C.child(i).child(C.child(i).childCount() - 1).child(0).child(1).text() == "能量补给") {
                        let a = C.child(i).child(C.child(i).childCount() - 1).child(0).child(1).bounds();
                        click(a.centerX(), a.centerY());
                        toastLog("已尝试点击“" + C.child(i).child(C.child(i).childCount() - 1).child(0).child(1).text() + "”按钮");
                        sleep(3000);
                        if (className("android.webkit.WebView").text("能量补给站").findOnce() != null) {
                            var D = className("android.webkit.WebView").text("能量补给站").findOnce().child(0).child(0);
                            for (let i = 0; i < D.childCount(); i++) {
                                var D = className("android.webkit.WebView").text("能量补给站").findOnce().child(0).child(0);
                                if (D.childCount() > i &&
                                    D.child(i).childCount() > 0 &&
                                    D.child(i).child(0).childCount() > 2 &&
                                    D.child(i).child(0).child(2).text() == "逛逛会场") {
                                    let a = D.child(i).child(0).child(2).bounds();
                                    click(a.centerX(), a.centerY());
                                    toastLog("已尝试点击“" + D.child(i).child(0).child(2).text() + "”按钮");
                                    sleep(3000);
                                    for (let deng = 5; deng > 0; deng--) {
                                        toastLog("正在完成“宠物赛跑：逛逛会场”任务，剩余" + deng + "秒……");
                                        sleep(1000);
                                    }
                                    if (desc("返回").clickable(true).className("android.widget.ImageView").findOnce() != null) {
                                        desc("返回").clickable(true).className("android.widget.ImageView").findOnce().click();
                                        toastLog("已尝试盲点“返回”按钮");
                                        sleep(2000);
                                    } else {
                                        Justback();
                                        sleep(2000);
                                    }
                                } else if (D.childCount() > i &&
                                    D.child(i).childCount() > 0 &&
                                    D.child(i).child(0).childCount() > 0 &&
                                    D.child(i).child(0).child(D.child(i).child(0).childCount() - 1).text() == "逛逛会场") {
                                    let a = D.child(i).child(0).child(D.child(i).child(0).childCount() - 1).bounds();
                                    click(a.centerX(), a.centerY());
                                    toastLog("已尝试点击“" + D.child(i).child(0).child(D.child(i).child(0).childCount() - 1).text() + "”按钮");
                                    sleep(3000);
                                    for (let deng = 5; deng > 0; deng--) {
                                        toastLog("正在完成“宠物赛跑：逛逛会场”任务，剩余" + deng + "秒……");
                                        sleep(1000);
                                    }
                                    if (desc("返回").clickable(true).className("android.widget.ImageView").findOnce() != null) {
                                        desc("返回").clickable(true).className("android.widget.ImageView").findOnce().click();
                                        toastLog("已尝试盲点“返回”按钮");
                                        sleep(2000);
                                    } else {
                                        Justback();
                                        sleep(2000);
                                    }
                                }
                            }
                            if (desc("返回").clickable(true).className("android.widget.ImageView").findOnce() != null) {
                                desc("返回").clickable(true).className("android.widget.ImageView").findOnce().click();
                                toastLog("已尝试盲点“返回”按钮");
                                sleep(2000);
                            } else {
                                Justback();
                                sleep(2000);
                            }
                        }
                        if (desc("返回").clickable(true).className("android.widget.ImageView").findOnce() != null) {
                            desc("返回").clickable(true).className("android.widget.ImageView").findOnce().click();
                            toastLog("已尝试盲点“返回”按钮");
                            sleep(2000);
                        } else {
                            Justback();
                            sleep(2000);
                        }
                        break;
                    }
                }

                if (desc("返回").clickable(true).className("android.widget.ImageView").findOnce() != null) {
                    desc("返回").clickable(true).className("android.widget.ImageView").findOnce().click();
                    toastLog("已尝试盲点“返回”按钮");
                    sleep(2000);
                } else {
                    Justback();
                    sleep(2000);
                }
            } else {
                toastLog("当前可能非宠物赛跑时间");
            }
            try {
                var A = className("android.webkit.WebView").text("宠汪汪").findOnce().child(0).child(1).child(0);
            } catch (e) {
                console.warn("当前活动：" + currentActivity() + "，当前包名：" + currentPackage() + "当前应用名：" + getAppName(currentPackage()));
                toastLog("未处于“宠汪汪”主界面，正在重试中……" + e);
                openInTask();
                DoTask();
            }
            let BMWYbutton = [];
            for (let i = A.childCount() - 1; i >= 0; i--) {
                if (A.child(i).childCount() > 3) {
                    for (let ii = A.child(i).childCount() - 1; ii >= 0; ii--) {
                        if (A.child(i).child(ii).childCount() > 1 && A.child(i).child(ii).child(1).childCount() > 0 && A.child(i).child(ii).child(1).child(0).text() == "help_icon2") {
                            BMWYbutton.push({
                                NumberOne: i,
                                NumberTwo: ii
                            });
                        }
                    }
                }
            }
            if (BMWYbutton.length == 1) {
                let a = A.child(BMWYbutton[0].NumberOne).child(BMWYbutton[0].NumberTwo).bounds();
                click(a.centerX(), a.centerY());
                toastLog("已尝试点击“帮忙喂养”按钮");
                sleep(3000);
            } else {
                toastLog("找不到帮忙喂养按钮，正在重新尝试");
                openInTask();
                DoTask();
            }
            var I = 0;
            while (true) {
                try {
                    var A = className("android.webkit.WebView").text("宠汪汪").findOnce().child(0).child(1).child(0);
                    var E = A.child(A.childCount() - 1).child(1).child(A.child(A.childCount() - 1).child(1).childCount() - 1);
                    E.scrollForward();
                } catch (e) {
                    toastLog("帮喂控件查找出现错误，正在重新尝试：" + e);
                    openInTask();
                    DoTask();
                }
                if (I >= E.childCount()) {
                    break;
                } else {
                    if (E.child(I).childCount() > 5 && E.child(I).child(2).text() != "" && E.child(I).child(5).text() == "可帮喂") {
                        toastLog(E.child(I).child(2).text() + "，" + E.child(I).child(5).text());
                        let a = E.child(I).child(5).bounds();
                        let bb = E.child(I).child(2).text();
                        let b = bb.toString();
                        click(a.centerX(), a.centerY());
                        toastLog("已尝试点击“帮喂：" + E.child(I).child(2).text() + "”按钮");
                        sleep(5000);
                        if (className("android.webkit.WebView").findOnce() != null &&
                            className("android.webkit.WebView").findOnce().childCount() > 0 &&
                            className("android.webkit.WebView").findOnce().child(0).childCount() > 0 &&
                            className("android.webkit.WebView").findOnce().child(0).child(0).childCount() > 0) {
                            var G = className("android.webkit.WebView").findOnce().child(0).child(1).child(0);
                            for (let i = 0; i < G.childCount(); i++) {
                                if (G.childCount() > i &&
                                    G.child(i).childCount() > 0 &&
                                    G.child(i).child(0).childCount() > 0 &&
                                    G.child(i).child(0).child(0).childCount() > 0 &&
                                    G.child(i).child(0).child(0).child(0).text() == "bone_ava") {
                                    let a = G.child(i).child(0).child(0).child(0).bounds();
                                    click(a.centerX(), a.centerY());
                                    toastLog("已尝试点击“骨头”按钮");
                                    sleep(3000);
                                    break;
                                }
                            }
                            var G = className("android.webkit.WebView").textContains("的汪汪").findOnce().child(0).child(1).child(0);
                            for (let i = 0; i < G.childCount(); i++) {
                                if (G.childCount() > i &&
                                    G.child(i).childCount() > 0 &&
                                    G.child(i).child(0).childCount() > 0 &&
                                    G.child(i).child(0).child(0).childCount() > 0 &&
                                    G.child(i).child(0).child(0).child(0).text() == "dog-food-icon") {
                                    let a = G.child(i).child(0).child(0).child(0).bounds();
                                    click(a.centerX(), a.centerY());
                                    toastLog("已尝试点击“帮ta喂养”按钮");
                                    sleep(3000);
                                    break;
                                }
                            }
                            var G = className("android.webkit.WebView").textContains("的汪汪").findOnce().child(0).child(1).child(0);
                            for (let i = 0; i < G.childCount(); i++) {
                                if (G.childCount() > i &&
                                    G.child(i).childCount() > 1 &&
                                    G.child(i).child(1).childCount() > 3 &&
                                    G.child(i).child(1).child(3).childCount() > 0 &&
                                    G.child(i).child(1).child(3).child(0).text() == "确定") {
                                    let a = G.child(i).child(1).child(3).child(0).bounds();
                                    click(a.centerX(), a.centerY());
                                    toastLog("已尝试点击“确定帮ta喂养”按钮");
                                    sleep(3000);
                                    break;
                                } else if (G.childCount() > i &&
                                    G.child(i).childCount() > 1 &&
                                    G.child(i).child(1).childCount() > 0 &&
                                    G.child(i).child(1).child(G.child(i).child(1).childCount() - 1).childCount() > 0 &&
                                    G.child(i).child(1).child(G.child(i).child(1).childCount() - 1).child(0).text() == "确定") {
                                    let a = G.child(i).child(1).child(G.child(i).child(1).childCount() - 1).child(0).bounds();
                                    click(a.centerX(), a.centerY());
                                    toastLog("已尝试点击“确定帮ta喂养”按钮");
                                    sleep(3000);
                                    break;
                                }
                            }
                            if (desc("返回").clickable(true).className("android.widget.ImageView").findOnce() != null) {
                                desc("返回").clickable(true).className("android.widget.ImageView").findOnce().click();
                                toastLog("已尝试盲点“返回”按钮");
                                sleep(5000);
                            } else {
                                Justback();
                                sleep(5000);
                            }
                        }
                    } else {;
                        I++;
                    }
                }
            }
            alert("自动宠汪汪：\n脚本已运行完成");
            exit();
        }
    } else {
        console.warn("当前活动：" + currentActivity() + "，当前包名：" + currentPackage() + "当前应用名：" + getAppName(currentPackage()));
        toastLog("当前未处于“宠汪汪”活动页面，正在重新尝试进入……");
        openInTask();
        DoTask();
    }
}
firstD();

function firstD() {
    if (context_Manualstate == 1) {
        toastLog("已手动模式运行脚本");
        var options = ["等待20秒", "等待30秒", "等待50秒", "等待60秒", "等待10秒"]
        var i = dialogs.select("🔧以“手动模式”运行脚本\n\n接下来您需要在提示出现后自行打开京东APP至活动页”\n\n请选择脚本等待您打开京东的时间", options);
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
            toastLog("请打开京东至宠汪汪的主界面\n剩余" + deng + "秒后运行脚本...");
            sleep(1111);
        }
        DoTask();
    } else {
        openInTask();
        DoTask();
    }
}
dialogs.alert("自动宠汪汪：\n脚本已运行完成");
log("自动宠汪汪：\n脚本已运行完成");
exit();