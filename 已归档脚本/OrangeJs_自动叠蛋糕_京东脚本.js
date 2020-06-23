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

function dialogs_js() {
    var ScriptVersion = ("Beta1.1"); //版本
    log("软件脚本已开始运行，如果没有弹出菜单请强行停止再打开本软件！");
    var options_ = ["▶️ 开始运行脚本", "🕒 计时运行脚本", "⏰ 定时运行脚本", "⏹ 停止运行脚本", "🔙 返回方法设置", "🔧 手动打开模式", "💬 吐司/日志切换"]
    var i = dialogs.select("*+*+*+* 橘衫の脚本 *+*+*+*\n*+*+*+*  Orange Js *+*+*+*\n\n欢迎使用 (◍•ᴗ•◍)❤" + "\n" + "“自动叠蛋糕”" + ScriptVersion + "\n请选择一个要进行的选项", options_);
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
            if (files.exists("/storage/emulated/0/OrangeJs/自动叠蛋糕/返回方法设置.txt") == true && files.read("/storage/emulated/0/OrangeJs/自动叠蛋糕/返回方法设置.txt") > 2 && files.exists("/storage/emulated/0/OrangeJs/自动叠蛋糕/滑动返回速度.txt") == false) {
                files.remove("/storage/emulated/0/OrangeJs/自动叠蛋糕/返回方法设置.txt");
                log("当前返回方法设置为滑动返回但未设置滑动返回速度");
            }
            if (files.exists("/storage/emulated/0/OrangeJs/自动叠蛋糕/返回方法设置.txt") == true) {
                files.rename("/storage/emulated/0/OrangeJs/自动叠蛋糕/返回方法设置.txt", "X返回方法设置.txt");
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
        if (files.exists("/storage/emulated/0/OrangeJs/自动叠蛋糕/吐司or日志.txt") == true) {
            var z = files.read("/storage/emulated/0/OrangeJs/自动叠蛋糕/吐司or日志.txt");
            if (z != "吐司" && z != "日志") {
                alert("“吐司or日志”文件错误，已尝试删除错误文件");
                try {
                    files.remove("/storage/emulated/0/OrangeJs/自动叠蛋糕/吐司or日志.txt");
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
                files.createWithDirs("/storage/emulated/0/OrangeJs/自动叠蛋糕/吐司or日志.txt");
                files.write("/storage/emulated/0/OrangeJs/自动叠蛋糕/吐司or日志.txt", "吐司");
            } catch (e) {
                log("未授予存储权限或存储权限错误，当前设置为吐司");
                var T = 0;
            }
        } else if (da == 1) {
            toastLog("您选择了：使用悬浮日志");
            try {
                var T = 1;
                files.createWithDirs("/storage/emulated/0/OrangeJs/自动叠蛋糕/吐司or日志.txt");
                files.write("/storage/emulated/0/OrangeJs/自动叠蛋糕/吐司or日志.txt", "日志");
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
        if (files.exists("/storage/emulated/0/OrangeJs/自动叠蛋糕/返回方法设置.txt") == true) {
            context_i_back = files.read("/storage/emulated/0/OrangeJs/自动叠蛋糕/返回方法设置.txt");
            log("返回方法：" + context_i_back);
            if (context_i_back > 2) {
                try {
                    context_gestures_speed = files.read("/storage/emulated/0/OrangeJs/自动叠蛋糕/滑动返回速度.txt")
                    log("滑动返回速度：" + context_gestures_speed)
                } catch (e) {
                    log("上次未完成滑动返回速度设置");
                    files.remove("/storage/emulated/0/OrangeJs/自动叠蛋糕/返回方法设置.txt");
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
                files.createWithDirs("/storage/emulated/0/OrangeJs/自动叠蛋糕/返回方法设置.txt");
                files.write("/storage/emulated/0/OrangeJs/自动叠蛋糕/返回方法设置.txt", context_i_back);
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
                    files.createWithDirs("/storage/emulated/0/OrangeJs/自动叠蛋糕/滑动返回速度.txt");
                    files.write("/storage/emulated/0/OrangeJs/自动叠蛋糕/滑动返回速度.txt", context_gestures_speed);
                }
            }
            if (files.exists("/storage/emulated/0/OrangeJs/自动叠蛋糕/返回方法设置.txt") == true && files.exists("/storage/emulated/0/OrangeJs/自动叠蛋糕/X返回方法设置.txt") == true) {
                log("删除");
                files.remove("/storage/emulated/0/OrangeJs/自动叠蛋糕/X返回方法设置.txt");
                dialogs_js();
            } else if (files.exists("/storage/emulated/0/OrangeJs/自动叠蛋糕/X返回方法设置.txt") == true) {
                log("重命名");
                files.rename("/storage/emulated/0/OrangeJs/自动叠蛋糕/X返回方法设置.txt", "返回方法设置.txt");
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
if (files.exists("/storage/emulated/0/OrangeJs/自动叠蛋糕/吐司or日志.txt") == true) {
    try {
        let z = files.read("/storage/emulated/0/OrangeJs/自动叠蛋糕/吐司or日志.txt");
        if (z == "吐司") {
            var T = 0;
        } else if (z == "日志") {
            var T = 1;
        } else {
            toastLog("“吐司or日志”文件错误，已尝试删除并使用默认日志");
            try {
                files.remove("/storage/emulated/0/OrangeJs/自动叠蛋糕/吐司or日志.txt");
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
        files.createWithDirs("/storage/emulated/0/OrangeJs/自动叠蛋糕/吐司or日志.txt");
        files.write("/storage/emulated/0/OrangeJs/自动叠蛋糕/吐司or日志.txt", "日志");
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
window.setPosition(800, 100);

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
    var i = 0;
    while (true) {
        if (currentActivity() == "com.jingdong.app.mall.MainFrameActivity" && className("android.view.View").desc("我的").findOnce() != null && text("领现金红包").className("android.widget.TextView").findOnce() != null && text("叠蛋糕分10亿").className("android.widget.TextView").findOnce() != null) {
            if (text("领现金红包").className("android.widget.TextView").findOnce().parent().clickable() == true) {
                text("领现金红包").className("android.widget.TextView").findOnce().parent().click();
                toastLog("已尝试盲点“领现金红包”入口按钮");
                sleep(3000);
            } else {
                let a = text("领现金红包").className("android.widget.TextView").findOnce().parent().bounds();
                click(a.centerX(), a.centerY());
                toastLog("已尝试点击“领现金红包”入口按钮");
                sleep(3000);
            }
            break;
        } else if (currentActivity() == "com.jingdong.app.mall.MainFrameActivity" && className("android.view.View").desc("我的").findOnce() != null) {
            className("android.view.View").desc("我的").findOnce().click();
            toastLog("已尝试点击京东主页“我的”按钮");
            sleep(2000);
            i++;
            if (i > 3) {
                app.startActivity({
                    data: "openApp.jdMobile://virtual?params=%7B%22des%22%3A%22m%22%2C%22url%22%3A%22https%3A%2F%2Fbunearth.m.jd.com%2FbabelDiy%2FZeus%2F3xAU77DgiPoDvHdbXUZb95a7u71X%2Findex.html%22%2C%22category%22%3A%22jump%22%2C%22sourceType%22%3A%22JSHOP_SOURCE_TYPE%22%2C%22sourceValue%22%3A%22JSHOP_SOURCE_VALUE%22%2C%22M_sourceFrom%22%3A%22lkyl%22%2C%22msf_type%22%3A%22click%22%2C%22m_param%22%3A%7B%22m_source%22%3A%220%22%2C%22event_series%22%3A%7B%7D%2C%22jda%22%3A%22177095863.1664140455.1538579865.1572975960.1572979455.472%22%2C%22usc%22%3A%22androidapp%22%2C%22ucp%22%3A%22t_335139774%22%2C%22umd%22%3A%22appshare%22%2C%22utr%22%3A%22CopyURL%22%2C%22jdv%22%3A%22177095863%7Candroidapp%7Ct_335139774%7Cappshare%7CCopyURL%7C1572882675599%22%2C%22ref%22%3A%22https%3A%2F%2Fbunearth.m.jd.com%2FbabelDiy%2FZeus%2F3xAU77DgiPoDvHdbXUZb95a7u71X%2Findex.html%22%2C%22psn%22%3A%221664140455%7C472%22%2C%22psq%22%3A5%2C%22pc_source%22%3A%22%22%2C%22mba_muid%22%3A%221664140455%22%2C%22mba_sid%22%3A%221572979455588510925986537476%22%2C%22std%22%3A%22MO-J2011-1%22%2C%22par%22%3A%22%22%2C%22event_id%22%3A%22Mnpm_ComponentApplied%22%2C%22mt_xid%22%3A%22%22%2C%22mt_subsite%22%3A%22%22%7D%2C%22SE%22%3A%7B%22mt_subsite%22%3A%22%22%2C%22__jdv%22%3A%22177095863%7Candroidapp%7Ct_335139774%7Cappshare%7CCopyURL%7C1572882675599%22%2C%22__jda%22%3A%22177095863.1664140455.1538579865.1572975960.1572979455.472%22%7D%7D",
                });
                break;
            }
        } else if (currentPackage() != "com.jingdong.app.mall") {
            app.startActivity({
                action: "android.intent.action.VIEW", //此处可为其他值
                packageName: "com.jingdong.app.mall",
                className: "com.jingdong.app.mall.main.MainActivity"
                //此处可以加入其他内容，如data、extras
            });
            toastLog("当前未处于京东APP中，正在重新打开京东……");
            console.warn("当前活动：" + currentActivity() + "，当前包名：" + currentPackage() + "当前应用名：" + getAppName(currentPackage()));
            sleep(2000);
        } else {
            if (className("android.widget.ImageView").desc("返回").clickable(true).findOnce() != null) {
                className("android.widget.ImageView").desc("返回").clickable(true).findOnce().click();
                toastLog("已尝试点击“返回”按钮");
            } else if (currentActivity() == "com.jd.lib.jshop.jshop.JshopMainShopActivity" && id("com.jd.lib.jshop:id/fd").findOnce() != null && id("com.jd.lib.jshop:id/fd").findOnce().clickable() == true) {
                id("com.jd.lib.jshop:id/fd").findOnce().click();
                toastLog("已尝试盲点“返回”按钮");
                sleep(2000);
            } else {
                Justback();
            }
            sleep(2000);
        }
    }
    for (var d = 10; d > 0; d--) {
        if (className("android.view.View").text("叠蛋糕").findOnce() != null || className("android.view.View").text("当前蛋糕：").findOnce() != null || className("android.view.View").text("做任务领金币").findOnce() != null || className("android.webkit.WebView").text("　").findOnce() != null &&
            className("android.webkit.WebView").text("　").findOnce().childCount() > 0 && className("android.webkit.WebView").text("　").findOnce().child(0).childCount() > 0 && className("android.webkit.WebView").text("　").findOnce().child(0).child(0).childCount() > 0 && className("android.webkit.WebView").text("　").findOnce().child(0).child(0).child(0).childCount() > 0 &&
            className("android.webkit.WebView").text("　").findOnce().child(0).child(0).child(0).child(0).childCount() > 1 && className("android.webkit.WebView").text("　").findOnce().child(0).child(0).child(0).child(0).child(1).childCount() > 4 && className("android.webkit.WebView").text("　").findOnce().child(0).child(0).child(0).child(0).child(1).child(4).childCount() > 1 &&
            className("android.webkit.WebView").text("　").findOnce().child(0).child(0).child(0).child(0).child(1).child(4).child(1).text() == "做任务领金币") {
            toastLog("已处于“叠蛋糕”活动界面");
            var d = 0;
        } else if (currentActivity() == "com.jingdong.app.mall.WebActivity" || currentActivity() == "com.jingdong.common.jdreactFramework.activities.JDReactNativeCommonActivity") {
            toastLog("正在等待“全民叠蛋糕”活动界面加载，剩余" + d + "秒……");
            sleep(2000);
        } else {
            var d = 0;
            toastLog("当前未处于“全民叠蛋糕”活动加载界面，正在重试……");
        }
    }
}

function DoTask() {
    let a = className("android.view.View").text("开心收下").findOnce();
    if (a != null && a.clickable() == true) {
        a.click()
        toastLog("已尝试盲点“开心收下”按钮");
        sleep(2000);
    } else if (a != null) {
        let ab = a.bounds();
        click(ab.centerX(), ab.centerY());
        toastLog("已尝试点击“开心收下”按钮");
        sleep(2000);
    }
    a = className("android.view.View").text("立即签到").findOnce();
    if (a != null && a.parent().parent().clickable() == true) {
        a.parent().parent().click()
        toastLog("已尝试盲点“立即签到”按钮");
        sleep(2000);
    } else if (a != null) {
        let ab = a.bounds();
        click(ab.centerX(), ab.centerY());
        toastLog("已尝试点击“立即签到”按钮");
        sleep(2000);
    }

    if (className("android.view.View").text("当前蛋糕：").findOnce() != null && className("android.view.View").text("当前蛋糕：").findOnce().parent().parent().parent().childCount() > 4 && className("android.view.View").text("当前蛋糕：").findOnce().parent().parent().parent().child(4).id() == "goldElfin" && className("android.view.View").text("当前蛋糕：").findOnce().parent().parent().parent().child(4).child(0).child(1).text() == "点我得金币") {
        className("android.view.View").text("当前蛋糕：").findOnce().parent().parent().parent().child(4).click();
        toastLog("已尝试盲点“点我得金币”按钮");
        sleep(2000);
    }
    a = null;
    if (className("android.view.View").text("当前蛋糕：").findOnce() != null && className("android.view.View").text("当前蛋糕：").findOnce().parent().childCount() == 3) {
        var a = className("android.view.View").text("当前蛋糕：").findOnce().parent();
        let b = a.child(0).text() + a.child(1).text() + a.child(2).text();
        let c = a.parent().child(5).child(0).text() + a.parent().child(5).child(1).text();
        log(b, a.parent().child(2).text(), c); //层数 比值 金币数
    }

    if (a != null && a.parent().child(4).childCount() > 2 && a.parent().child(4).child(1).text() == "做任务领金币") {
        if (a.parent().child(4).clickable() == true) {
            a.parent().child(4).click();
            toastLog("已尝试盲点“做任务领金币”按钮");
            sleep(2000);
        } else {
            let b = a.parent().child(4).bounds();
            click(b.centerX(), b.centerY());
            toastLog("已尝试点击“做任务领金币”按钮");
            sleep(2000);
        }
        try {
            var A = a.parent().child(4).child(1).parent().parent().parent().parent().child(4);
            var Bd = A.child(0).child(0).child(0).depth();
            log(Bd);
        } catch (e) {
            try {
                let a = className("android.view.View").text("做任务领金币").findOnce();
                var A = a.parent().parent().parent().parent().child(4);
                var Bd = A.child(0).child(0).child(0).depth();
                log(Bd);
            } catch (e) {
                var A = null;
            }
        }

    } else if (className("android.view.View").text("做任务领金币").findOnce() != null) { //防止树状控件不一致
        let a = className("android.view.View").text("做任务领金币").findOnce();
        if (a.parent().clickable() == true) {
            a.parent().click();
            toastLog("已尝试盲点“做任务领金币”（父级）");
            sleep(2000);
        } else {
            let b = a.bounds();
            click(b.centerX(), b.centerY());
            toastLog("已尝试点击“做任务领金币”按钮");
            sleep(2000);
        }
        var A = a.parent().parent().parent().parent().child(4);
        var Bd = A.child(0).child(0).child(0).depth();
        log(Bd);
    } else {
        console.warn("当前活动：" + currentActivity() + "，当前包名：" + currentPackage() + "当前应用名：" + getAppName(currentPackage()));
        toastLog("无法找到“做任务领金币”按钮，正在重新尝试进入活动");
        openInTask();
        DoTask();
    }

    function makesureHDTC() {
        if (className("android.view.View").text("任务每日0点刷新，记得每天都来看看哦~").findOnce() != null ||
            className("android.view.View").textContains("邀请好友助力").findOnce() != null) {
            return true;
        } else {
            return false;
        }
    }

    if (makesureHDTC() == true) {
        if (A != null && A.child(0).child(0).child(0).child(3).child(2).child(0).text() != "已签到") {
            if (A.child(0).child(0).child(0).child(3).child(2).clickable() == true) {
                A.child(0).child(0).child(0).child(3).child(2).click();
                toastLog("已尝试盲点“签到”按钮");
                sleep(2000);
            } else {
                let b = A.child(0).child(0).child(0).child(3).child(2).bounds();
                click(b.centerX(), b.centerY());
                toastLog("已尝试点击“签到”按钮");
                sleep(2000);
            }
        } else if (text("签到").findOnce() != null) {
            let a = text("签到").findOnce();
            if (a.clickable() == true) {
                a.click();
                toastLog("已尝试盲点“签到”按钮");
                sleep(2000);
            } else {
                let b = a.bounds();
                click(b.centerX(), b.centerY());
                toastLog("已尝试点击“签到”按钮");
                sleep(2000);
            }
        } else {
            toastLog("真棒！今天已经签过到啦～");
        }
        var a = 0;
        while (true) {
            try {
                var B = className("android.view.View").text("做任务领金币").findOnce().parent().parent().parent().parent().child(4).child(0).child(0).child(0).child(4).child(0).child(0);
                log("B控件为：" + B);
            } catch (e) {
                try {
                    var B = className("android.view.View").text("任务每日0点刷新，记得每天都来看看哦~").findOnce().parent().child(4).child(0).child(0);
                } catch (e) {
                    console.warn("当前活动：" + currentActivity() + "，当前包名：" + currentPackage() + "当前应用名：" + getAppName(currentPackage()));
                    toastLog("当前未处于活动界面，正在重新进入活动：" + e);
                    openInTask();
                    DoTask();
                }
            }
            if (a >= B.childCount()) {
                toastLog("当前所有任务已完成");
                try {
                    let a = className("android.view.View").text("做任务领金币").findOne().parent().parent().parent().parent().child(4).child(0).child(0).child(0).child(1).child(0);
                    if (a.clickable() == true) {
                        a.click();
                        toastLog("已尝试盲点“关闭蒙版”按钮");
                        sleep(2000);
                    } else {
                        let b = a.bounds();
                        click(b.centerX(), b.centerY());
                        toastLog("已尝试点击“关闭蒙版”按钮");
                        sleep(2000);
                    }
                } catch (e) {
                    let a = className("android.view.View").text("任务每日0点刷新，记得每天都来看看哦~").findOnce().parent().child(1).child(0);
                    if (a.clickable() == true) {
                        a.click();
                        toastLog("已尝试盲点“关闭蒙版”按钮");
                        sleep(2000);
                    } else {
                        let b = a.bounds();
                        click(b.centerX(), b.centerY());
                        toastLog("已尝试点击“关闭蒙版”按钮");
                        sleep(2000);
                    }
                }
                break;
            } else {
                var RwTitle = B.child(a).child(0).child(1).text();
                now = RwTitle.substring(RwTitle.indexOf("(") + 1, RwTitle.indexOf("/") + 0);
                xz = RwTitle.substring(RwTitle.indexOf("/") + 1, RwTitle.indexOf(")") + 0);
                if (!isNaN(xz) && !isNaN(now)) {
                    toastLog("当前任务完成数：" + now + "，当前任务上限为：" + xz);
                } else {
                    console.error("数字识别错误！错误任务标题：" + RwTitle + "\n错误当前任务完成数：" + now + "\n错误当前任务上限：" + xz);
                    exit();
                }
                log(B.child(a).child(1).child(0).child(0).text(), B.child(a).child(1).child(0).clickable());
                var RwButtonText = B.child(a).child(1).child(0).child(0).text();
                if (RwTitle.search("战队PK") < 0 &&RwTitle.search("AR") < 0 && RwTitle.search("邀请好友助力") < 0 && RwTitle.search("邀人助力") < 0&& RwTitle.search("会员得") < 0 && RwTitle.search("所在战队成员") < 0 && now != xz) {
                    if (B.child(a).child(1).child(0).clickable() == true) {
                        B.child(a).child(1).child(0).click();
                        toastLog("已尝试盲点" + B.child(a).child(1).child(0).child(0).text() + "按钮");
                    } else {
                        let b = B.child(a).child(1).child(0).bounds();
                        click(b.centerX(), b.centerY());
                        toastLog("已尝试点击" + B.child(a).child(1).child(0).child(0).text() + "按钮");
                    }
                    sleep(3000);
                    //判断是否太火爆了
                    if (makesureHDTC() == false) {
                        for (let deng = 10; deng > 0; deng--) {
                            if (className("android.view.View").text("浏览以下" + xz + "个商品").findOnce() != null) {
                                for (let loop = 0; loop < 5; loop++) {
                                    if (loop > 3) {
                                        toastLog("已尝试上滑浏览商品页面");
                                        swipe(device.width / 2, device.height / 2, device.width / 2, 0, 500);
                                    }
                                    try {
                                        if (className("android.view.View").text("浏览以下" + xz + "个商品").findOnce().parent().child(0).text() == "已完成") {
                                            toastLog("已完成一次“浏览商品”任务");
                                            break;
                                        }
                                        let c = className("android.view.View").text("浏览以下" + xz + "个商品").findOnce().parent().parent().child(1).child(loop);
                                        if (c.clickable() == true) {
                                            c.click();
                                            toastLog("已尝试盲点第" + loop + "个商品");
                                        } else {
                                            let b = c.bounds();
                                            click(b.centerX(), b.centerY());
                                            toastLog("已尝试点击第" + loop + "个商品");
                                        }
                                    } catch (e) {
                                        console.warn("当前活动：" + currentActivity() + "，当前包名：" + currentPackage() + "当前应用名：" + getAppName(currentPackage()));
                                        toastLog("A完成浏览商品时未能成功返回商品页，正在重新进入活动");
                                        openInTask();
                                        DoTask();
                                    }
                                    sleep(3000);
                                    if (className("android.widget.ImageView").desc("返回").findOnce() != null) {
                                        if (className("android.widget.ImageView").desc("返回").findOnce().clickable() == true) {
                                            className("android.widget.ImageView").desc("返回").findOnce().click();
                                            toastLog("已尝试盲点“返回”按钮");
                                            sleep(3000);
                                        } else {
                                            let b = className("android.widget.ImageView").desc("返回").findOnce().bounds();
                                            click(b.centerX(), b.centerY());
                                            toastLog("已尝试点击“返回”按钮");
                                            sleep(3000);
                                        }
                                    } else {
                                        Justback();
                                        sleep(1000);
                                    }
                                }
                                break;
                            } else if (className("android.webkit.WebView").text("　").findOnce() != null &&
                                className("android.webkit.WebView").text("　").findOnce().childCount() > 0 && className("android.webkit.WebView").text("　").findOnce().child(0).childCount() > 0 &&
                                className("android.webkit.WebView").text("　").findOnce().child(0).child(0).childCount() > 0 && className("android.webkit.WebView").text("　").findOnce().child(0).child(0).child(0).childCount() > 1 &&
                                className("android.webkit.WebView").text("　").findOnce().child(0).child(0).child(0).child(1).childCount() > 0 && className("android.webkit.WebView").text("　").findOnce().child(0).child(0).child(0).child(1).child(0).childCount() > 0 &&
                                className("android.webkit.WebView").text("　").findOnce().child(0).child(0).child(0).child(1).child(0).child(0).text() == "浏览以下" + xz + "个商品") {
                                for (let loop = 0; loop < 5; loop++) {
                                    if (loop > 3) {
                                        toastLog("已尝试上滑浏览商品页面");
                                        swipe(device.width / 2, device.height / 2, device.width / 2, 0, 500);
                                    }
                                    try {
                                        let c = className("android.webkit.WebView").text("　").findOnce().child(0).child(0).child(0).child(1).child(1).child(loop);
                                        if (c.clickable() == true) {
                                            c.click();
                                            toastLog("已尝试盲点第" + loop + "个商品");
                                        } else {
                                            let b = c.bounds();
                                            click(b.centerX(), b.centerY());
                                            toastLog("已尝试点击第" + loop + "个商品");
                                        }
                                    } catch (e) {
                                        console.warn("当前活动：" + currentActivity() + "，当前包名：" + currentPackage() + "当前应用名：" + getAppName(currentPackage()));
                                        toastLog("B完成浏览商品时未能成功返回商品页，正在重新进入活动");
                                        openInTask();
                                        DoTask();
                                    }
                                    sleep(3000);
                                    if (className("android.widget.ImageView").desc("返回").findOnce() != null) {
                                        if (className("android.widget.ImageView").desc("返回").findOnce().clickable() == true) {
                                            className("android.widget.ImageView").desc("返回").findOnce().click();
                                            toastLog("已尝试盲点“返回”按钮");
                                            sleep(3000);
                                        } else {
                                            let b = className("android.widget.ImageView").desc("返回").findOnce().bounds();
                                            click(b.centerX(), b.centerY());
                                            toastLog("已尝试点击“返回”按钮");
                                            sleep(3000);
                                        }
                                    } else {
                                        Justback();
                                        sleep(1000);
                                    }
                                }
                                break;
                            } else if (className("android.view.View").text("当前页点击加购以下" + xz + "个商品").findOnce() != null) {
                                for (let loop = 0; loop < 5; loop++) {
                                    if (loop > 3) {
                                        toastLog("已尝试上滑加购商品页面");
                                        swipe(device.width / 2, device.height / 2, device.width / 2, 0, 500);
                                    }
                                    try {
                                        if (className("android.view.View").text("当前页点击加购以下" + xz + "个商品").findOnce().parent().child(0).text() == "已完成") {
                                            toastLog("已完成一次“加购商品”任务");
                                            break;
                                        }
                                        let c = className("android.view.View").text("当前页点击加购以下" + xz + "个商品").findOnce().parent().parent().child(1).child(loop);
                                        if (c.child(c.childCount() - 3).childCount() > 1 && c.child(c.childCount() - 3).child(0).text() != "" && c.child(c.childCount() - 3).child(0).text() != null) {
                                            WaitForDelete.push(c.child(c.childCount() - 3).child(0).text());
                                            toastLog("已将当前商品添加至待删除列表。当前商品：" + c.child(c.childCount() - 3).child(0).text());
                                        }
                                        if (c.child(c.childCount() - 1).clickable() == true) {
                                            c.child(c.childCount() - 1).click();
                                            toastLog("已尝试盲点加购第" + loop + "个商品");
                                        } else {
                                            let b = c.child(c.childCount() - 1).bounds();
                                            click(b.centerX(), b.centerY());
                                            toastLog("已尝试点击加购第" + loop + "个商品");
                                        }
                                    } catch (e) {
                                        log(e);
                                        console.warn("当前活动：" + currentActivity() + "，当前包名：" + currentPackage() + "当前应用名：" + getAppName(currentPackage()));
                                        toastLog("A完成加购商品时未能成功返回商品页，正在重新进入活动");
                                        openInTask();
                                        DoTask();
                                    }
                                    sleep(3000);
                                }
                                break;
                            } else if (currentActivity() == "com.jd.lib.matrixar.ArFaceActivity" && className("android.webkit.WebView").text("AR叠蛋糕").findOnce() != null &&
                                className("android.webkit.WebView").text("AR叠蛋糕").findOnce().childCount() > 0 && className("android.webkit.WebView").text("AR叠蛋糕").findOnce().child(0).childCount() > 4 &&
                                className("android.webkit.WebView").text("AR叠蛋糕").findOnce().child(0).child(4).childCount() > 1 && className("android.webkit.WebView").text("AR叠蛋糕").findOnce().child(0).child(4).child(2).id() == "pop-start-btn") {
                                className("android.webkit.WebView").text("AR叠蛋糕").findOnce().child(0).child(4).child(2).click();
                                toastLog("已尝试点击“开始AR游戏”按钮");
                                sleep(2000);
                                for (let deng = 20; deng > 0; deng--) {
                                    toastLog("正在完成“AR游戏”任务，剩余" + deng + "秒……");
                                    sleep(1200);
                                }
                                break;
                            } else if (textContains("恭喜完成").findOnce() != null) {
                                toastLog(textContains("恭喜完成").findOnce().text());
                                break;
                            } else if (text("出错了，返回再试试").findOnce() != null) {
                                toastLog("出错了，返回再试试");
                                break;
                            } else {
                                toastLog("正在完成“" + RwButtonText + "（" + now + "/" + xz + "）”任务，剩余" + deng + "秒……");
                                sleep(2000);
                            }
                        }
                        if (className("android.widget.ImageView").desc("返回").clickable(true).findOnce() != null) {
                            className("android.widget.ImageView").desc("返回").clickable(true).findOnce().click();
                            toastLog("已尝试盲点“返回”按钮");
                            //sleep(2000);
                        } else if (currentActivity() == "com.jd.lib.jshop.jshop.JshopMainShopActivity" && id("com.jd.lib.jshop:id/fd").findOnce() != null && id("com.jd.lib.jshop:id/fd").findOnce().clickable() == true) {
                            id("com.jd.lib.jshop:id/fd").findOnce().click();
                            toastLog("已尝试盲点“返回”按钮");
                            // sleep(2000);
                        } else if (className("android.view.ViewGroup").desc("返回按钮").findOnce() != null) {
                            let c = className("android.view.ViewGroup").desc("返回按钮").findOnce();
                            if (c.clickable() == true) {
                                c.click();
                                toastLog("已尝试盲点“返回”按钮");
                                //sleep(2000);
                            } else {
                                let b = c.bounds();
                                click(b.centerX(), b.centerY());
                                toastLog("已尝试点击“返回”按钮");
                                //sleep(2000);
                            }
                        } else {
                            Justback();
                            sleep(1000);
                        }
                    } else {
                        console.warn("当前活动：" + currentActivity() + "，当前包名：" + currentPackage() + "当前应用名：" + getAppName(currentPackage()));
                        toastLog("B当前未处于活动界面或任务蒙版未能成功打开，正在重新尝试");
                        openInTask();
                        DoTask();
                    }
                    if (text("忍痛离开").findOne(3000) != null) {
                        let v = text("忍痛离开").findOnce();
                        if (v.clickable() == true) {
                            v.click();
                            toastLog("已尝试盲点“忍痛离开”按钮");
                            sleep(2000);
                        } else {
                            let vb = v.bounds();
                            click(vb.centerX(), vb.centerY());
                            toastLog("已尝试点击“忍痛离开”按钮");
                            sleep(2000);
                        }
                    }
                } else {
                    if (now == xz) {
                        toastLog("【任务已完成】" + RwTitle);
                    } else {
                        toastLog("【已跳过】" + RwTitle);
                    }
                    a++;
                }
            }
        }

        function CakeUp() {
            while (true) {
                try {
                    var done = 0;
                    while (className("android.view.View").text("当前蛋糕：").findOnce() != null && className("android.view.View").text("当前蛋糕：").findOnce().parent().parent().parent().childCount() > 4 && className("android.view.View").text("当前蛋糕：").findOnce().parent().parent().parent().child(4).id() == "goldElfin" && className("android.view.View").text("当前蛋糕：").findOnce().parent().parent().parent().child(4).child(0).child(1).text() == "点我得金币") {
                        className("android.view.View").text("当前蛋糕：").findOnce().parent().parent().parent().child(4).click();
                        if (done >= 50) {
                            break;
                        } else {
                            toastLog("已尝试盲点“点我得金币”按钮*" + done);
                            done++;
                            sleep(100);
                        }
                    }
                } catch (e) {}
                if (className("android.view.View").text("继续叠蛋糕 分红包").findOnce() != null) {
                    if (className("android.view.View").text("继续叠蛋糕 分红包").findOnce().clickable() == true) {
                        className("android.view.View").text("继续叠蛋糕 分红包").findOnce().click();
                        toastLog("已尝试盲点“继续叠蛋糕”按钮");
                        sleep(2000);
                    } else {
                        let b = className("android.view.View").text("继续叠蛋糕 分红包").findOnce().bounds();
                        click(b.centerX(), b.centerY());
                        toastLog("已尝试点击“继续叠蛋糕”按钮");
                        sleep(2000);
                    }
                }
                if (className("android.view.View").text("当前蛋糕：").findOnce() != null && className("android.view.View").text("当前蛋糕：").findOnce().parent().childCount() == 3) {
                    var a = className("android.view.View").text("当前蛋糕：").findOnce().parent();
                    let b = a.child(0).text() + a.child(1).text() + a.child(2).text();
                    let c = a.parent().child(5).child(0).text() + a.parent().child(5).child(1).text();
                    let d = a.parent().child(2).text();
                    toastLog(b + "，" + c + "，" + d); //层数 金币数 比值
                    str = d.replace("/", "分");
                    now = str.match(/(\S*)分/)[1];
                    all = str.match(/分(\S*)/)[1];
                    if (!isNaN(all) && !isNaN(now) && Number(now) >= Number(all)) {
                        toastLog("当前金币数：" + now + "，升级所需金币数：" + all);
                        if (a.parent().child(5).clickable() == true) {
                            a.parent().child(5).click();
                            toastLog("已尝试盲点“叠蛋糕”按钮");
                            sleep(3000);
                        } else {
                            let b = a.parent().child(5).bounds();
                            click(b.centerX(), b.centerY());
                            toastLog("已尝试点击“叠蛋糕”按钮");
                            sleep(3000);
                        }
                    } else {
                        toastLog("金币不足！当前金币数：" + now + "，升级所需金币数：" + all);
                        break;
                    }
                } else {
                    console.warn("当前活动：" + currentActivity() + "，当前包名：" + currentPackage() + "当前应用名：" + getAppName(currentPackage()));
                    toastLog("当前未处于“叠蛋糕”活动界面，正在重新尝试进入");
                    openInTask();
                    DoTask();
                    break;
                }
            }
        }
        CakeUp();
        if (WaitForDelete.length > 0) {
            toastLog("【开始删除加购商品】正在跳转“购物车”界面，删除任务加购的商品");
            while (true) {
                if (currentActivity() == "com.jingdong.app.mall.MainFrameActivity" && className("android.view.View").descContains("购物车").findOnce() != null) {
                    className("android.view.View").descContains("购物车").findOnce().click();
                    toastLog("已尝试点击京东主页“购物车”按钮");
                    sleep(3000);
                    if (className("android.widget.TextView").textContains("全部(").findOnce() != null) {
                        let a = className("android.widget.TextView").textContains("全部(").findOnce();
                        if (a.clickable() == true) {
                            a.click();
                            toastLog("已尝试点击“全部”按钮");
                            sleep(3000);
                        } else {
                            let b = a.bounds();
                            click(b.centerX(), b.centerY());
                            toastLog("已尝试点击“全部”按钮");
                            sleep(3000);
                        }
                    }
                    break;
                } else if (currentPackage() != "com.jingdong.app.mall") {
                    app.startActivity({
                        action: "android.intent.action.VIEW", //此处可为其他值
                        packageName: "com.jingdong.app.mall",
                        className: "com.jingdong.app.mall.main.MainActivity"
                        //此处可以加入其他内容，如data、extras
                    });
                    toastLog("当前未处于京东APP中，正在重新打开京东……");
                    console.warn("当前活动：" + currentActivity() + "，当前包名：" + currentPackage() + "当前应用名：" + getAppName(currentPackage()));
                    sleep(2000);
                } else {
                    if (className("android.widget.ImageView").desc("返回").clickable(true).findOnce() != null) {
                        className("android.widget.ImageView").desc("返回").clickable(true).findOnce().click();
                        toastLog("已尝试点击“返回”按钮");
                    } else if (currentActivity() == "com.jd.lib.jshop.jshop.JshopMainShopActivity" && id("com.jd.lib.jshop:id/fd").findOnce() != null && id("com.jd.lib.jshop:id/fd").findOnce().clickable() == true) {
                        id("com.jd.lib.jshop:id/fd").findOnce().click();
                        toastLog("已尝试盲点“返回”按钮");
                        sleep(2000);
                    } else {
                        Justback();
                    }
                    sleep(2000);
                }
            }

            Array.prototype.remove  =   function(val)  {
                var  index  =  this.indexOf(val);
                if  (index  >  -1)  {
                    this.splice(index,  1);
                }
            };


            if (className("android.widget.ImageView").desc("返回顶部").findOnce() != null) {
                let a = className("android.widget.ImageView").desc("返回顶部").findOnce();
                if (a.clickable() == true) {
                    a.click();
                    toastLog("已尝试盲点“返回顶部”按钮");
                    sleep(2000);
                } else {
                    let b = a.bounds();
                    click(b.centerX(), b.centerY());
                    toastLog("已尝试点击“返回顶部”按钮");
                    sleep(2000);
                }
            }
            var OVER = 0;
            while (true) {
                if (WaitForDelete.length == 0) {
                    toastLog("已删除全部已加购的商品");
                    break;
                } else if (text("购物车是空的").findOnce() != null) {
                    toastLog("购物车是空的");
                    break;
                } else if (OVER > 20) {
                    toastLog("滑动失败已超20次，结束");
                    break;
                } else if (className("android.widget.TextView").text("没有更多了~").findOnce() != null) {
                    toastLog("没有更多了~但还有" + WaitForDelete.length + "个商品没有被删除，它们分别是：\n" + WaitForDelete);
                    break;
                } else if (className("android.support.v7.widget.RecyclerView").findOnce() != null) {
                    for (let i = 0; i < WaitForDelete.length; i++) {
                        if (desc(WaitForDelete[i]).longClickable(true).findOnce() != null) {
                            toastLog("已找到要删除的商品：" + WaitForDelete[i]);
                            desc(WaitForDelete[i]).longClickable(true).findOnce().longClick();
                            sleep(1000);
                            if (desc(WaitForDelete[i]).longClickable(true).findOnce() != null &&
                                desc(WaitForDelete[i]).longClickable(true).findOnce().child(0).childCount() == 4 &&
                                desc(WaitForDelete[i]).longClickable(true).findOnce().child(0).child(3).desc() == "删除") {
                                if (desc(WaitForDelete[i]).longClickable(true).findOnce().child(0).child(3).clickable() == true) {
                                    desc(WaitForDelete[i]).longClickable(true).findOnce().child(0).child(3).click();
                                    toastLog("已尝试盲点删除商品：" + WaitForDelete[i]);
                                    WaitForDelete.remove(WaitForDelete[i]);
                                    sleep(2000);
                                } else {
                                    let bs = desc(WaitForDelete[i]).longClickable(true).findOnce().child(0).child(3).bounds();
                                    click(bs.centerX(), bs.centerY());
                                    toastLog("已尝试点击删除商品：" + WaitForDelete[i]);
                                    WaitForDelete.remove(WaitForDelete[i]);
                                    sleep(2000);
                                }
                            }
                        }
                    }
                    let s = className("android.support.v7.widget.RecyclerView").findOnce().scrollForward();
                    if (s == false) {
                        OVER++;
                    }
                    toastLog("已尝试上滑购物车商品列表查找加购的商品");
                    sleep(2000);
                } else {
                    toastLog("当前未处于购物车界面，正在重新尝试运行");
                    console.warn("当前活动：" + currentActivity() + "，当前包名：" + currentPackage() + "当前应用名：" + getAppName(currentPackage()));
                    openInTask();
                    DoTask();
                    break;
                }
            }
        }
        dialogs.alert("自动叠蛋糕：\n脚本已运行完成");
        exit();
    } else {
        console.warn("当前活动：" + currentActivity() + "，当前包名：" + currentPackage() + "当前应用名：" + getAppName(currentPackage()));
        toastLog("当前未处于活动界面或任务蒙版未能成功打开，正在重新尝试");
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
            toastLog("请打开京东至叠蛋糕的主界面\n剩余" + deng + "秒后运行脚本...");
            sleep(1111);
        }
        DoTask();
    } else {
        openInTask();
        DoTask();
    }
}