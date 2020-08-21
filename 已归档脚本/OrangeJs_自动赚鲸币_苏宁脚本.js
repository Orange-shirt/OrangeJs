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

var height = device.height;
var weight = device.width;

function dialogs_js() {
    var ScriptVersion = ("Beta1.1"); //版本
    log("软件脚本已开始运行，如果没有弹出菜单请强行停止再打开本软件！");
    var options_ = ["▶️ 开始运行脚本", "🕒 计时运行脚本", "⏰ 定时运行脚本", "⏹ 停止运行脚本", "🔙 返回方法设置", "🔧 手动打开模式", "💬 吐司/日志切换"]
    var i = dialogs.select("*+*+*+* 橘衫の脚本 *+*+*+*\n*+*+*+*  Orange Js *+*+*+*\n\n欢迎使用 (◍•ᴗ•◍)❤" + "\n" + "“自动赚鲸币”" + ScriptVersion + "\n请选择一个要进行的选项", options_);
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
            if (files.exists("/storage/emulated/0/OrangeJs/自动赚鲸币/返回方法设置.txt") == true && files.read("/storage/emulated/0/OrangeJs/自动赚鲸币/返回方法设置.txt") > 2 && files.exists("/storage/emulated/0/OrangeJs/自动赚鲸币/滑动返回速度.txt") == false) {
                files.remove("/storage/emulated/0/OrangeJs/自动赚鲸币/返回方法设置.txt");
                log("当前返回方法设置为滑动返回但未设置滑动返回速度");
            }
            if (files.exists("/storage/emulated/0/OrangeJs/自动赚鲸币/返回方法设置.txt") == true) {
                files.rename("/storage/emulated/0/OrangeJs/自动赚鲸币/返回方法设置.txt", "X返回方法设置.txt");
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
        if (files.exists("/storage/emulated/0/OrangeJs/自动赚鲸币/吐司or日志.txt") == true) {
            var z = files.read("/storage/emulated/0/OrangeJs/自动赚鲸币/吐司or日志.txt");
            if (z != "吐司" && z != "日志") {
                alert("“吐司or日志”文件错误，已尝试删除错误文件");
                try {
                    files.remove("/storage/emulated/0/OrangeJs/自动赚鲸币/吐司or日志.txt");
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
                files.createWithDirs("/storage/emulated/0/OrangeJs/自动赚鲸币/吐司or日志.txt");
                files.write("/storage/emulated/0/OrangeJs/自动赚鲸币/吐司or日志.txt", "吐司");
            } catch (e) {
                log("未授予存储权限或存储权限错误，当前设置为吐司");
                var T = 0;
            }
        } else if (da == 1) {
            toastLog("您选择了：使用悬浮日志");
            try {
                var T = 1;
                files.createWithDirs("/storage/emulated/0/OrangeJs/自动赚鲸币/吐司or日志.txt");
                files.write("/storage/emulated/0/OrangeJs/自动赚鲸币/吐司or日志.txt", "日志");
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
        if (files.exists("/storage/emulated/0/OrangeJs/自动赚鲸币/返回方法设置.txt") == true) {
            context_i_back = files.read("/storage/emulated/0/OrangeJs/自动赚鲸币/返回方法设置.txt");
            log("返回方法：" + context_i_back);
            if (context_i_back > 2) {
                try {
                    context_gestures_speed = files.read("/storage/emulated/0/OrangeJs/自动赚鲸币/滑动返回速度.txt")
                    log("滑动返回速度：" + context_gestures_speed)
                } catch (e) {
                    log("上次未完成滑动返回速度设置");
                    files.remove("/storage/emulated/0/OrangeJs/自动赚鲸币/返回方法设置.txt");
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
                files.createWithDirs("/storage/emulated/0/OrangeJs/自动赚鲸币/返回方法设置.txt");
                files.write("/storage/emulated/0/OrangeJs/自动赚鲸币/返回方法设置.txt", context_i_back);
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
                    files.createWithDirs("/storage/emulated/0/OrangeJs/自动赚鲸币/滑动返回速度.txt");
                    files.write("/storage/emulated/0/OrangeJs/自动赚鲸币/滑动返回速度.txt", context_gestures_speed);
                }
            }
            if (files.exists("/storage/emulated/0/OrangeJs/自动赚鲸币/返回方法设置.txt") == true && files.exists("/storage/emulated/0/OrangeJs/自动赚鲸币/X返回方法设置.txt") == true) {
                log("删除");
                files.remove("/storage/emulated/0/OrangeJs/自动赚鲸币/X返回方法设置.txt");
                dialogs_js();
            } else if (files.exists("/storage/emulated/0/OrangeJs/自动赚鲸币/X返回方法设置.txt") == true) {
                log("重命名");
                files.rename("/storage/emulated/0/OrangeJs/自动赚鲸币/X返回方法设置.txt", "返回方法设置.txt");
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
if (files.exists("/storage/emulated/0/OrangeJs/自动赚鲸币/吐司or日志.txt") == true) {
    try {
        let z = files.read("/storage/emulated/0/OrangeJs/自动赚鲸币/吐司or日志.txt");
        if (z == "吐司") {
            var T = 0;
        } else if (z == "日志") {
            var T = 1;
        } else {
            toastLog("“吐司or日志”文件错误，已尝试删除并使用默认日志");
            try {
                files.remove("/storage/emulated/0/OrangeJs/自动赚鲸币/吐司or日志.txt");
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
        files.createWithDirs("/storage/emulated/0/OrangeJs/自动赚鲸币/吐司or日志.txt");
        files.write("/storage/emulated/0/OrangeJs/自动赚鲸币/吐司or日志.txt", "日志");
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
        toastLog("从屏幕中间从左向内滑动来返回");
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

function FindWebView() {
    if (className("android.webkit.WebView").text("天天发现鲸").findOnce() != null) {
        return className("android.webkit.WebView").text("天天发现鲸").findOnce();
    } else if (className("android.webkit.WebView").desc("天天发现鲸").findOnce() != null) {
        return className("android.webkit.WebView").desc("天天发现鲸").findOnce();
    } else {
        return null;
    }
}
try {
    device.keepScreenDim();
} catch (e) {
    toastLog("开启屏幕半常亮失败！：" + e);
}

function openInTask() {
    while (true) {
        if (id("com.suning.mobile.ebuy:id/btn_click_1").className("android.view.View").clickable(true).findOnce() != null) {
            id("com.suning.mobile.ebuy:id/btn_click_1").className("android.view.View").clickable(true).findOnce().click();
            toastLog("已尝试盲点“悬浮确认”按钮");
            sleep(2000);
        }
        if (id("com.suning.mobile.ebuy:id/btn_click_2").className("android.view.View").clickable(true).findOnce() != null) {
            id("com.suning.mobile.ebuy:id/btn_click_2").className("android.view.View").clickable(true).findOnce().click();
            toastLog("已尝试盲点“悬浮确认2”按钮");
            sleep(2000);
        }
        if (id("com.suning.mobile.ebuy:id/sign_cancel_img").clickable(true).findOnce() != null) {
            id("com.suning.mobile.ebuy:id/sign_cancel_img").clickable(true).findOnce().click();
            toastLog("已尝试盲点“关闭悬浮蒙版”按钮");
            sleep(3000);
        }
        if (id("com.suning.mobile.ebuy:id/home_img_drag_view").desc("悬浮广告").findOnce() != null) {
            let a = id("com.suning.mobile.ebuy:id/home_img_drag_view").desc("悬浮广告").findOnce().bounds();
            click(a.centerX(), a.centerY());
            toastLog("已尝试点击“悬浮广告（活动入口）”按钮");
            sleep(2000);
            break;
        } else if (className("android.widget.TabHost").id("android:id/tabhost").findOnce() != null &&
            className("android.widget.TabHost").id("android:id/tabhost").findOnce().childCount() > 0 &&
            className("android.widget.TabHost").id("android:id/tabhost").findOnce().child(0).childCount() > 0 &&
            className("android.widget.TabHost").id("android:id/tabhost").findOnce().child(0).child(0).childCount() > 0 &&
            className("android.widget.TabHost").id("android:id/tabhost").findOnce().child(0).child(0).className() == "android.widget.TabWidget" &&
            className("android.widget.TabHost").id("android:id/tabhost").findOnce().child(0).child(0).child(0).clickable() == true) {
            className("android.widget.TabHost").id("android:id/tabhost").findOnce().child(0).child(0).child(0).click();
            toastLog("已尝试点击主页“首页”按钮");
            sleep(2000);
        } else if (currentPackage() != "com.suning.mobile.ebuy") {
            app.startActivity({
                action: "android.intent.action.VIEW", //此处可为其他值
                packageName: "com.suning.mobile.ebuy",
                className: "com.suning.mobile.ebuy.host.InitialActivity"
                //此处可以加入其他内容，如data、extras
            });
            toastLog("当前未处于苏宁易购APP中，正在重新打开苏宁易购……");
            console.warn("当前活动：" + currentActivity() + "，当前包名：" + currentPackage() + "当前应用名：" + getAppName(currentPackage()));
            sleep(3000);
        } else {
            if (className("android.widget.ImageView").desc("返回").clickable(true).findOnce() != null) {
                className("android.widget.ImageView").desc("返回").clickable(true).findOnce().click();
                toastLog("已尝试盲点“返回”按钮");
            } else {
                Justback();
            }
            sleep(2000);
        }
    }
    for (let d = 10; d > 0; d--) {
        if (FindWebView() != null &&
            FindWebView().childCount() > 0 &&
            FindWebView().child(0).childCount() > 0 &&
            FindWebView().child(0).child(0).childCount() > 0 &&
            FindWebView().child(0).child(0).child(0).childCount() > 0 &&
            FindWebView().child(0).child(0).child(0).child(0).childCount() > 0 &&
            FindWebView().child(0).child(0).child(0).child(0).child(0).id() == "fishPic") {
            toastLog("已成功打开至活动界面，停止等待计时");
            sleep(2000);
            break;
        } else if (FindWebView() != null &&
            FindWebView().childCount() > 0 &&
            FindWebView().child(0).childCount() > 0 &&
            FindWebView().child(0).child(0).childCount() > 0 &&
            FindWebView().child(0).child(0).child(0).childCount() > 0 &&
            FindWebView().child(0).child(0).child(0).child(0).childCount() > 0 &&
            FindWebView().child(0).child(0).child(0).child(0).child(0).id() == "fishPic") {
            toastLog("已成功打开至活动界面，停止等待计时");
            sleep(2000);
            break;
        } else {
            toastLog("正在等待“天天发现鲸”活动界面加载，剩余" + d + "秒……");
            sleep(1000);
        }
    }
}

function DoTask() {
    if (FindWebView() != null &&
        FindWebView().childCount() > 0 &&
        FindWebView().child(0).childCount() > 0 &&
        FindWebView().child(0).child(0).childCount() > 0 &&
        FindWebView().child(0).child(0).child(0).childCount() > 0 &&
        FindWebView().child(0).child(0).child(0).child(0).childCount() > 1 &&
        FindWebView().child(0).child(0).child(0).child(0).child(1).childCount() > 1 &&
        FindWebView().child(0).child(0).child(0).child(0).child(1).child(1).text() == "送你一个红包" ||
        FindWebView() != null &&
        FindWebView().childCount() > 0 &&
        FindWebView().child(0).childCount() > 0 &&
        FindWebView().child(0).child(0).childCount() > 0 &&
        FindWebView().child(0).child(0).child(0).childCount() > 0 &&
        FindWebView().child(0).child(0).child(0).child(0).childCount() > 1 &&
        FindWebView().child(0).child(0).child(0).child(0).child(1).childCount() > 1 &&
        FindWebView().child(0).child(0).child(0).child(0).child(1).child(1).desc() == "送你一个红包"
    ) {
        let a = FindWebView().child(0).child(0).child(0).child(0).child(1).child(FindWebView().child(0).child(0).child(0).child(0).child(1).childCount() - 1).bounds();
        click(a.centerX(), a.centerY());
        toastLog("已尝试点击收下" + FindWebView().child(0).child(0).child(0).child(0).child(1).child(2).text() + FindWebView().child(0).child(0).child(0).child(0).child(1).child(2).desc() + "的红包");
        sleep(2000);
    }
    let ClickText = ["点击收鲸币，再升1级开红包!", "升级获得的奖励都在这里哦，赶快去领取吧!"];
    for (let i = 0; i < ClickText.length; i++) {
        if (FindWebView() != null &&
            FindWebView().childCount() > 0 &&
            FindWebView().child(0).childCount() > 0 &&
            FindWebView().child(0).child(0).childCount() > 0 &&
            FindWebView().child(0).child(0).child(0).childCount() > 0 &&
            FindWebView().child(0).child(0).child(0).child(0).childCount() > 1 &&
            FindWebView().child(0).child(0).child(0).child(0).child(1).childCount() > 0 &&
            FindWebView().child(0).child(0).child(0).child(0).child(1).child(0).text() == ClickText[i]) {
            let a = FindWebView().child(0).child(0).child(0).child(0).child(1).child(0).bounds();
            click(a.centerX(), a.centerY());
            toastLog("已尝试点击“" + ClickText[i] + "”");
            sleep(3000);
        } else if (FindWebView() != null &&
            FindWebView().childCount() > 0 &&
            FindWebView().child(0).childCount() > 0 &&
            FindWebView().child(0).child(0).childCount() > 0 &&
            FindWebView().child(0).child(0).child(0).childCount() > 0 &&
            FindWebView().child(0).child(0).child(0).child(0).childCount() > 1 &&
            FindWebView().child(0).child(0).child(0).child(0).child(1).childCount() > 0 &&
            FindWebView().child(0).child(0).child(0).child(0).child(1).child(0).desc() == ClickText[i]) {
            let a = FindWebView().child(0).child(0).child(0).child(0).child(1).child(0).bounds();
            click(a.centerX(), a.centerY());
            toastLog("已尝试点击“" + ClickText[i] + "”");
            sleep(3000);
        }
    }

    if (FindWebView() != null &&
        FindWebView().childCount() > 0 &&
        FindWebView().child(0).childCount() > 0 &&
        FindWebView().child(0).child(0).childCount() > 0) {
        var A = FindWebView().child(0).child(0).child(0);
        for (let i = 0; i < A.childCount() - 1; i++) {
            if (A.child(i).childCount() > 1 &&
                A.child(i).child(1).childCount() > 1 &&
                A.child(i).child(1).child(1).childCount() > 1 &&
                A.child(i).child(1).child(1).child(1).text() != "" &&
                A.child(i).child(1).child(1).child(1).text().search("/") > 0 &&
                A.child(i).child(1).child(1).child(1).text().search("00") > 0 ||
                A.child(i).childCount() > 1 &&
                A.child(i).child(1).childCount() > 1 &&
                A.child(i).child(1).child(1).childCount() > 1 &&
                A.child(i).child(1).child(1).child(1).text() != "" &&
                A.child(i).child(1).child(1).child(1).text().search("0/") >= 0
            ) {
                let a = A.child(i).child(1).child(1).child(1).bounds();
                click(a.centerX(), a.top - 50);
                toastLog("已尝试点击“收取鲸币（" + A.child(i).child(1).child(1).child(1).text() + A.child(i).child(1).child(1).child(1).desc() + "）”");
                sleep(3000);
                break;
            } else if (A.child(i).childCount() > 1 &&
                A.child(i).child(1).childCount() > 0 &&
                A.child(i).child(1).child(0).childCount() > 1 &&
                A.child(i).child(1).child(0).child(1).desc() !=null&&
                A.child(i).child(1).child(0).child(1).desc() != "" &&
                A.child(i).child(1).child(0).child(1).desc().search("/") > 0 &&
                A.child(i).child(1).child(0).child(1).desc().search("00") > 0 ||
                A.child(i).childCount() > 1 &&
                A.child(i).child(1).childCount() > 0 &&
                A.child(i).child(1).child(0).childCount() > 1 &&
                A.child(i).child(1).child(0).child(1).desc()!=null&&
                A.child(i).child(1).child(0).child(1).desc() != "" &&
                A.child(i).child(1).child(0).child(1).desc().search("0/") >= 0) {
                let a = A.child(i).child(1).child(0).child(1).bounds();
                click(a.centerX(), a.top - 50);
                toastLog("已尝试点击“收取鲸币（" + A.child(i).child(1).child(0).child(1).text() + A.child(i).child(1).child(0).child(1).desc() + "）”");
                sleep(3000);
                break;
            }
        }
        if (A.child(A.childCount() - 3).clickable() == true) {
            A.child(A.childCount() - 3).click();
            toastLog("已尝试盲点“赚鲸币”按钮");
        } else {
            let a = A.child(A.childCount() - 3).bounds();
            click(a.centerX(), a.centerY());
            toastLog("已尝试点击“赚鲸币”按钮");
        }
        sleep(3000);

        var i = 0;
        while (true) {
            if (FindWebView() != null &&
                FindWebView().childCount() > 0 &&
                FindWebView().child(0).childCount() > 0 &&
                FindWebView().child(0).child(0).childCount() > 4 &&
                FindWebView().child(0).child(0).child(4).childCount() > 0 &&
                FindWebView().child(0).child(0).child(4).child(0).childCount() > 0 &&
                FindWebView().child(0).child(0).child(4).child(0).child(0).childCount() > 2 &&
                FindWebView().child(0).child(0).child(4).child(0).child(0).child(1).childCount() > 0 &&
                FindWebView().child(0).child(0).child(4).child(0).child(0).child(1).child(0).text() == "task-banner" &&
                FindWebView().child(0).child(0).child(4).child(0).child(0).child(2).childCount() > 0 &&
                FindWebView().child(0).child(0).child(4).child(0).child(0).child(2).child(0).childCount() > 10) {
                var B = FindWebView().child(0).child(0).child(4).child(0).child(0).child(2).child(0);
            } else if (FindWebView() != null &&
                FindWebView().childCount() > 0 &&
                FindWebView().child(0).childCount() > 0 &&
                FindWebView().child(0).child(0).childCount() > 0 &&
                FindWebView().child(0).child(0).child(FindWebView().child(0).child(0).childCount() - 1).childCount() > 0 &&
                FindWebView().child(0).child(0).child(FindWebView().child(0).child(0).childCount() - 1).child(0).childCount() > 0 &&
                FindWebView().child(0).child(0).child(FindWebView().child(0).child(0).childCount() - 1).child(0).child(0).childCount() > 2 &&
                FindWebView().child(0).child(0).child(FindWebView().child(0).child(0).childCount() - 1).child(0).child(0).child(1).childCount() > 0 &&
                FindWebView().child(0).child(0).child(FindWebView().child(0).child(0).childCount() - 1).child(0).child(0).child(1).child(0).text() == "task-banner" &&
                FindWebView().child(0).child(0).child(FindWebView().child(0).child(0).childCount() - 1).child(0).child(0).child(2).childCount() > 0 &&
                FindWebView().child(0).child(0).child(FindWebView().child(0).child(0).childCount() - 1).child(0).child(0).child(2).child(0).childCount() > 10) {
                var B = FindWebView().child(0).child(0).child(FindWebView().child(0).child(0).childCount() - 1).child(0).child(0).child(2).child(0);
            } else if (FindWebView() != null &&
                FindWebView().childCount() > 0 &&
                FindWebView().child(0).childCount() > 0 &&
                FindWebView().child(0).child(0).childCount() > 1 &&
                FindWebView().child(0).child(0).child(1).childCount() > 0 &&
                FindWebView().child(0).child(0).child(1).child(0).childCount() > 2 &&
                FindWebView().child(0).child(0).child(1).child(0).child(1).childCount() > 0 &&
                FindWebView().child(0).child(0).child(1).child(0).child(1).child(0).desc() == "task-banner" &&
                FindWebView().child(0).child(0).child(1).child(0).child(2).childCount() > 0 &&
                FindWebView().child(0).child(0).child(1).child(0).child(2).child(0).childCount() > 10 ||
                FindWebView() != null &&
                FindWebView().childCount() > 0 &&
                FindWebView().child(0).childCount() > 0 &&
                FindWebView().child(0).child(0).childCount() > 1 &&
                FindWebView().child(0).child(0).child(1).childCount() > 0 &&
                FindWebView().child(0).child(0).child(1).child(0).childCount() > 2 &&
                FindWebView().child(0).child(0).child(1).child(0).child(1).childCount() > 0 &&
                FindWebView().child(0).child(0).child(1).child(0).child(1).child(0).text() == "task-banner" &&
                FindWebView().child(0).child(0).child(1).child(0).child(2).childCount() > 0 &&
                FindWebView().child(0).child(0).child(1).child(0).child(2).child(0).childCount() > 10) {
                var B = FindWebView().child(0).child(0).child(1).child(0).child(2).child(0);
            } else if (FindWebView() != null &&
                FindWebView().childCount() > 0 &&
                FindWebView().child(0).childCount() > 0 &&
                FindWebView().child(0).child(0).childCount() > 4 &&
                FindWebView().child(0).child(0).child(4).childCount() > 0 &&
                FindWebView().child(0).child(0).child(4).child(0).childCount() > 0 &&
                FindWebView().child(0).child(0).child(4).child(0).child(0).childCount() > 2 &&
                FindWebView().child(0).child(0).child(4).child(0).child(0).child(1).childCount() > 0 &&
                FindWebView().child(0).child(0).child(4).child(0).child(0).child(1).child(0).text() == "task-banner") {
                toastLog("已打开任务蒙版但任务未能及时加载，即将重试");
                openInTask();
                DoTask();
                break;
            } else {
                console.warn("当前活动：" + currentActivity() + "，当前包名：" + currentPackage() + "当前应用名：" + getAppName(currentPackage()));
                toastLog("未发现任务蒙版，正在重新尝试中……");
                openInTask();
                DoTask();
                break;
            }
            if (i >= B.childCount()) {
                if (B.parent().parent().child(0).clickable() == true) {
                    B.parent().parent().child(0).click();
                    toastLog("已遍历完全部任务并尝试盲点关闭任务蒙版");
                } else {
                    let a = B.parent().parent().child(0).bounds();
                    click(a.centerX(), a.centerY());
                    toastLog("已遍历完全部任务并尝试点击关闭任务蒙版");
                }
                sleep(3000);
                break;
            } else {
                if (B.child(i).className() == "android.widget.Button") {
                    if (B.child(i).text() == "去邀请" || i > 1 && B.child(i - 2).text().search("口令送喜") >= 0 || i > 1 && B.child(i - 2).text().search("逛狮狮连萌") >= 0) {
                        toastLog("【已跳过】“" + B.child(i - 2).text() + B.child(i).text() + "”任务");
                        i++;
                    } else if (B.child(i).text() == "立即签到" || B.child(i).desc() == "立即签到") {
                        var Done = false;
                        for (let ii = 0; ii < B.child(i + 1).childCount(); ii++) {
                            if (B.child(i + 1).child(ii).text() == "今日已签" ||B.child(i + 1).child(ii).desc()!=null&& B.child(i + 1).child(ii).desc() == "今日已签") {
                                var Done = true;
                                break
                            }
                        }
                        if (Done == false) {
                            if (B.child(i).clickable() == true) {
                                B.child(i).click();
                                toastLog("已尝试盲点“立即签到”按钮");
                            } else {
                                let a = B.child(i).bounds();
                                click(a.centerX(), a.centerY());
                                toastLog("已尝试点击“立即签到”按钮");
                            }
                            sleep(1000);
                        } else {
                            toastLog("今天已经签到过啦～");
                        }
                        i++;
                    } else if (B.child(i).text() == "明日再来" ||B.child(i).desc()!=null&& B.child(i).desc() == "明日再来") {
                        toastLog("今天已经签到过啦～");
                        i++;
                    } else if (B.child(i).desc() == "去邀请" || i > 1 && B.child(i - 2).desc() != null && B.child(i - 2).desc().search("口令送喜") >= 0 || i > 1 && B.child(i - 2).desc() != null && B.child(i - 2).desc().search("逛狮狮连萌") >= 0) {
                        toastLog("【已跳过】“" + B.child(i - 2).desc() + B.child(i).desc() + "”任务");
                        i++;
                    } else {
                        try {
                            if (B.child(i - 2).text() != null && B.child(i - 2).text() != "") {
                                var RwTitle = B.child(i - 2).text();
                            } else if (B.child(i - 2).desc() != null && B.child(i - 2).desc() != "") {
                                var RwTitle = B.child(i - 2).desc();
                            }
                        } catch (e) {
                            if (B.child(i).text() != null && B.child(i).text() != "") {
                                toastLog("任务名识别出错，当前按钮：" + B.child(i).text() + i + "\n全部控件：");
                            } else if (B.child(i).desc() != null && B.child(i).desc() != "") {
                                toastLog("任务名识别出错，当前按钮：" + B.child(i).desc() + i + "\n全部控件：");
                            }
                            console.info(B.children());
                        }
                        var RwButton = B.child(i);
                        if (RwTitle.search("/") >= 0 && RwTitle.search("崗") < 0 && RwTitle.search("籤") < 0 && RwTitle.search("骺") < 0) {
                            let ARw = RwTitle.replace("/", "崗");
                            BRw = ARw.replace("(", "籤");
                            CRw = BRw.replace(")", "骺");
                            nanNow = CRw.match(/籤(\S*)崗/)[1];
                            nanLimit = CRw.match(/崗(\S*)骺/)[1];
                            NowNum = Number(nanNow);
                            LimitNum = Number(nanLimit);
                            if (NowNum != LimitNum && B.child(i).text() != "去邀请" && RwTitle.search("口令送喜") < 0 && RwTitle.search("逛狮狮连萌") < 0 && B.child(i).desc() != "去邀请") {
                                if (B.child(i - 1).text() != null && B.child(i - 1).text() != "") {
                                    toastLog("【待完成】：" + RwTitle + " —— " + B.child(i - 1).text());
                                } else if (B.child(i - 1).desc() != null && B.child(i - 1).desc() != "") {
                                    toastLog("【待完成】：" + RwTitle + " —— " + B.child(i - 1).desc());
                                }
                                if (RwButton.clickable() == true) {
                                    RwButton.click();
                                    toastLog("已尝试盲点“" + RwButton.text() + RwButton.desc() + "［" + RwTitle + "］”按钮");
                                } else {
                                    let a = Button.bounds();
                                    click(a.centerX(), a.centerY());
                                    toastLog("【未适配！！！】已尝试点击“" + RwButton.text() + RwButton.desc() + "［" + RwTitle + "］”按钮");
                                }
                                sleep(3000);
                                for (let deng = 20; deng > 0; deng--) {
                                    if (className("com.uc.webview.export.WebView").findOnce() != null) {
                                        var UcWebview = className("com.uc.webview.export.WebView").findOnce();
                                    } else {
                                        var UcWebview = null;
                                    }
                                    try {
                                        if (id("com.suning.mobile.ebuy:id/btn_closed").findOnce() != null &&
                                            id("com.suning.mobile.ebuy:id/btn_closed").findOnce().clickable() == true) {
                                            id("com.suning.mobile.ebuy:id/btn_closed").findOnce().click();
                                            toastLog("已尝试盲点“关闭浮窗”按钮");
                                            sleep(2000);
                                        }
                                        if (FindWebView() != null) {
                                            if (RwTitle.search("逛店铺") >= 0) {
                                                if (FindWebView() != null &&
                                                    FindWebView().childCount() > 0 &&
                                                    FindWebView().child(0).childCount() > 2 &&
                                                    FindWebView().child(0).child(2).childCount() > 2 &&
                                                    FindWebView().child(0).child(2).child(2).childCount() > 0) {
                                                    for (let iiii = 2; iiii < FindWebView().child(0).child(2).childCount(); iiii++) {
                                                        var done = false;
                                                        for (let iii = 0; iii < FindWebView().child(0).child(2).child(iiii).childCount(); iii++) {
                                                            if (FindWebView().child(0).child(2).child(iiii).child(iii).text().search("00") >= 0 ||
                                                                FindWebView().child(0).child(2).child(iiii).child(iii).desc() != null &&
                                                                FindWebView().child(0).child(2).child(iiii).child(iii).desc().search("00") >= 0
                                                            ) {
                                                                FindWebView().child(0).child(2).child(iiii).child(iii).click();
                                                                toastLog("已尝试盲点活动页第" + iii + "个店铺");
                                                                sleep(3000);
                                                                var done = true;
                                                                break;
                                                            }
                                                        }
                                                        if (done == true) {
                                                            break;
                                                        }
                                                    }
                                                } else {
                                                    toastLog(RwTitle + "任务控件出错，正在重新尝试（控件错误或控件不符合要求，若多次出现此问题请联系开发者）");
                                                    openInTask();
                                                    DoTask();
                                                    break;
                                                }
                                            } else {
                                                toastLog("任务按钮未能成功点击，正在重试[出错任务：" + RwTitle + "出错按钮：" + RwButton.text() + RwButton.desc() + "]");
                                                openInTask();
                                                DoTask();
                                                break;
                                            }
                                        } else if (id("com.suning.mobile.ebuy:id/view_body_native").className("android.widget.RelativeLayout").findOnce() != null &&
                                            id("com.suning.mobile.ebuy:id/view_body_native").className("android.widget.RelativeLayout").findOnce().childCount() > 0 &&
                                            id("com.suning.mobile.ebuy:id/view_body_native").className("android.widget.RelativeLayout").findOnce().child(0).childCount() > 2 &&
                                            id("com.suning.mobile.ebuy:id/view_body_native").className("android.widget.RelativeLayout").findOnce().child(0).child(2).childCount() > 1 &&
                                            id("com.suning.mobile.ebuy:id/view_body_native").className("android.widget.RelativeLayout").findOnce().child(0).child(2).child(1).text() != null &&
                                            id("com.suning.mobile.ebuy:id/view_body_native").className("android.widget.RelativeLayout").findOnce().child(0).child(2).child(1).text().search("s") >= 0 ||
                                            id("com.suning.mobile.ebuy:id/view_body_native").className("android.widget.RelativeLayout").findOnce() != null &&
                                            id("com.suning.mobile.ebuy:id/view_body_native").className("android.widget.RelativeLayout").findOnce().childCount() > 0 &&
                                            id("com.suning.mobile.ebuy:id/view_body_native").className("android.widget.RelativeLayout").findOnce().child(0).childCount() > 2 &&
                                            id("com.suning.mobile.ebuy:id/view_body_native").className("android.widget.RelativeLayout").findOnce().child(0).child(2).childCount() > 1 &&
                                            id("com.suning.mobile.ebuy:id/view_body_native").className("android.widget.RelativeLayout").findOnce().child(0).child(2).child(1).desc() != null &&
                                            id("com.suning.mobile.ebuy:id/view_body_native").className("android.widget.RelativeLayout").findOnce().child(0).child(2).child(1).desc().search("s") >= 0) {
                                            for (let dengss = 10; dengss > 0; dengss--) {
                                                if (id("com.suning.mobile.ebuy:id/view_body_native").className("android.widget.RelativeLayout").findOnce() != null &&
                                                    id("com.suning.mobile.ebuy:id/view_body_native").className("android.widget.RelativeLayout").findOnce().childCount() > 0 &&
                                                    id("com.suning.mobile.ebuy:id/view_body_native").className("android.widget.RelativeLayout").findOnce().childCount() > 2 &&
                                                    id("com.suning.mobile.ebuy:id/view_body_native").className("android.widget.RelativeLayout").findOnce().child(0).child(2).childCount() > 1 &&
                                                    id("com.suning.mobile.ebuy:id/view_body_native").className("android.widget.RelativeLayout").findOnce().child(0).child(2).child(1).text().search("s") >= 0 ||
                                                    id("com.suning.mobile.ebuy:id/view_body_native").className("android.widget.RelativeLayout").findOnce() != null &&
                                                    id("com.suning.mobile.ebuy:id/view_body_native").className("android.widget.RelativeLayout").findOnce().childCount() > 0 &&
                                                    id("com.suning.mobile.ebuy:id/view_body_native").className("android.widget.RelativeLayout").findOnce().childCount() > 2 &&
                                                    id("com.suning.mobile.ebuy:id/view_body_native").className("android.widget.RelativeLayout").findOnce().child(0).child(2).childCount() > 1 &&
                                                    id("com.suning.mobile.ebuy:id/view_body_native").className("android.widget.RelativeLayout").findOnce().child(0).child(2).child(1).desc() != null &&
                                                    id("com.suning.mobile.ebuy:id/view_body_native").className("android.widget.RelativeLayout").findOnce().child(0).child(2).child(1).desc().search("s") >= 0) {
                                                    toastLog("已识别到应用内任务计时器，剩余" + id("com.suning.mobile.ebuy:id/view_body_native").className("android.widget.RelativeLayout").findOnce().child(0).child(2).child(1).text() + id("com.suning.mobile.ebuy:id/view_body_native").className("android.widget.RelativeLayout").findOnce().child(0).child(2).child(1).desc());
                                                    sleep(1000);
                                                } else if (id("com.suning.mobile.ebuy:id/view_body_native").className("android.widget.RelativeLayout").findOnce() != null &&
                                                    id("com.suning.mobile.ebuy:id/view_body_native").className("android.widget.RelativeLayout").findOnce().childCount() > 0 &&
                                                    id("com.suning.mobile.ebuy:id/view_body_native").className("android.widget.RelativeLayout").findOnce().childCount() > 2 &&
                                                    id("com.suning.mobile.ebuy:id/view_body_native").className("android.widget.RelativeLayout").findOnce().child(0).child(2).childCount() > 1 &&
                                                    id("com.suning.mobile.ebuy:id/view_body_native").className("android.widget.RelativeLayout").findOnce().child(0).child(2).child(1).text().search("s") < 0 &&
                                                    id("com.suning.mobile.ebuy:id/view_body_native").className("android.widget.RelativeLayout").findOnce() != null &&
                                                    id("com.suning.mobile.ebuy:id/view_body_native").className("android.widget.RelativeLayout").findOnce().childCount() > 0 &&
                                                    id("com.suning.mobile.ebuy:id/view_body_native").className("android.widget.RelativeLayout").findOnce().childCount() > 2 &&
                                                    id("com.suning.mobile.ebuy:id/view_body_native").className("android.widget.RelativeLayout").findOnce().child(0).child(2).childCount() > 1 &&
                                                    id("com.suning.mobile.ebuy:id/view_body_native").className("android.widget.RelativeLayout").findOnce().child(0).child(2).child(1).desc() != null &&
                                                    id("com.suning.mobile.ebuy:id/view_body_native").className("android.widget.RelativeLayout").findOnce().child(0).child(2).child(1).desc().search("s") < 0) {
                                                    toastLog("应用内任务计时器已结束，尝试返回任务蒙版界面");
                                                    sleep(1000);
                                                    break;
                                                } else {
                                                    toastLog("识别到应用内计时器加等时间，剩余" + dengss + "秒……");
                                                    sleep(1000);
                                                }
                                            }
                                            break;
                                        } else if (id("com.suning.mobile.ebuy:id/view_body_native").className("android.widget.RelativeLayout").findOnce() != null &&
                                            id("com.suning.mobile.ebuy:id/view_body_native").className("android.widget.RelativeLayout").findOnce().childCount() > 0 &&
                                            id("com.suning.mobile.ebuy:id/view_body_native").className("android.widget.RelativeLayout").findOnce().child(0).childCount() > 2 &&
                                            id("com.suning.mobile.ebuy:id/view_body_native").className("android.widget.RelativeLayout").findOnce().child(0).child(2).childCount() > 1 &&
                                            id("com.suning.mobile.ebuy:id/view_body_native").className("android.widget.RelativeLayout").findOnce().child(0).child(2).child(1).text() == "返回领取" ||
                                            id("com.suning.mobile.ebuy:id/view_body_native").className("android.widget.RelativeLayout").findOnce() != null &&
                                            id("com.suning.mobile.ebuy:id/view_body_native").className("android.widget.RelativeLayout").findOnce().childCount() > 0 &&
                                            id("com.suning.mobile.ebuy:id/view_body_native").className("android.widget.RelativeLayout").findOnce().child(0).childCount() > 2 &&
                                            id("com.suning.mobile.ebuy:id/view_body_native").className("android.widget.RelativeLayout").findOnce().child(0).child(2).childCount() > 1 &&
                                            id("com.suning.mobile.ebuy:id/view_body_native").className("android.widget.RelativeLayout").findOnce().child(0).child(2).child(1).desc() != null &&
                                            id("com.suning.mobile.ebuy:id/view_body_native").className("android.widget.RelativeLayout").findOnce().child(0).child(2).child(1).desc() == "返回领取") {
                                            toastLog("已识别到“返回领取”按钮，结束等待计时");
                                            sleep(1000);
                                            break;
                                        } else if (RwTitle.search("逛会场") >= 0 &&
                                            UcWebview != null &&
                                            UcWebview.childCount() > 0 &&
                                            UcWebview.child(0).childCount() > 0 &&
                                            UcWebview.child(0).child(0).childCount() > 0 &&
                                            UcWebview.child(0).child(0).child(0).childCount() > 0 &&
                                            UcWebview.child(0).child(0).child(0).child(0).child(UcWebview.child(0).child(0).child(0).child(0).childCount() - 1).childCount() > 0 &&
                                            UcWebview.child(0).child(0).child(0).child(0).child(UcWebview.child(0).child(0).child(0).child(0).childCount() - 1).child(0).text().search("秒") >= 0 ||
                                            RwTitle.search("逛会场") >= 0 &&
                                            UcWebview != null &&
                                            UcWebview.childCount() > 0 &&
                                            UcWebview.child(0).childCount() > 0 &&
                                            UcWebview.child(0).child(0).childCount() > 0 &&
                                            UcWebview.child(0).child(0).child(0).childCount() > 0 &&
                                            UcWebview.child(0).child(0).child(0).child(0).child(UcWebview.child(0).child(0).child(0).child(0).childCount() - 1).childCount() > 0 &&
                                            UcWebview.child(0).child(0).child(0).child(0).child(UcWebview.child(0).child(0).child(0).child(0).childCount() - 1).child(0).desc() != null &&
                                            UcWebview.child(0).child(0).child(0).child(0).child(UcWebview.child(0).child(0).child(0).child(0).childCount() - 1).child(0).desc().search("秒") >= 0) {
                                            for (let dengs = 10; dengs > 0; dengs--) {
                                                if (className("com.uc.webview.export.WebView").findOnce() != null) {
                                                    var UcWebview = className("com.uc.webview.export.WebView").findOnce();
                                                } else {
                                                    toastLog("特定控件消失，尝试返回任务蒙版界面");
                                                    sleep(1000);
                                                    break;
                                                }
                                                if (RwTitle.search("逛会场") >= 0 &&
                                                    UcWebview != null &&
                                                    UcWebview.childCount() > 0 &&
                                                    UcWebview.child(0).childCount() > 0 &&
                                                    UcWebview.child(0).child(0).childCount() > 0 &&
                                                    UcWebview.child(0).child(0).child(0).childCount() > 0 &&
                                                    UcWebview.child(0).child(0).child(0).child(0).child(UcWebview.child(0).child(0).child(0).child(0).childCount() - 1).childCount() > 0 &&
                                                    UcWebview.child(0).child(0).child(0).child(0).child(UcWebview.child(0).child(0).child(0).child(0).childCount() - 1).child(0).text().search("秒") >= 0 ||
                                                    RwTitle.search("逛会场") >= 0 &&
                                                    UcWebview != null &&
                                                    UcWebview.childCount() > 0 &&
                                                    UcWebview.child(0).childCount() > 0 &&
                                                    UcWebview.child(0).child(0).childCount() > 0 &&
                                                    UcWebview.child(0).child(0).child(0).childCount() > 0 &&
                                                    UcWebview.child(0).child(0).child(0).child(0).child(UcWebview.child(0).child(0).child(0).child(0).childCount() - 1).childCount() > 0 &&
                                                    UcWebview.child(0).child(0).child(0).child(0).child(UcWebview.child(0).child(0).child(0).child(0).childCount() - 1).child(0).desc() != null &&
                                                    UcWebview.child(0).child(0).child(0).child(0).child(UcWebview.child(0).child(0).child(0).child(0).childCount() - 1).child(0).desc().search("秒") >= 0) {
                                                    toastLog("已识别到应用内任务计时器，剩余" + UcWebview.child(0).child(0).child(0).child(0).child(UcWebview.child(0).child(0).child(0).child(0).childCount() - 1).child(0).text() + UcWebview.child(0).child(0).child(0).child(0).child(UcWebview.child(0).child(0).child(0).child(0).childCount() - 1).child(0).desc());
                                                    sleep(1000);
                                                } else {
                                                    toastLog("应用任务计时已结束，尝试返回任务蒙版界面");
                                                    sleep(1000);
                                                    break;
                                                }
                                            }
                                            break;
                                        } else if (className("com.uc.webview.export.WebView").findOnce() != null &&
                                            className("com.uc.webview.export.WebView").findOnce().childCount() > 0 &&
                                            className("com.uc.webview.export.WebView").findOnce().child(0).childCount() > 0 &&
                                            className("com.uc.webview.export.WebView").findOnce().child(0).child(0).childCount() > 0 &&
                                            className("com.uc.webview.export.WebView").findOnce().child(0).child(0).child(0).childCount() > 0 &&
                                            className("com.uc.webview.export.WebView").findOnce().child(0).child(0).child(0).child(0).childCount() > 0 &&
                                            className("com.uc.webview.export.WebView").findOnce().child(0).child(0).child(0).child(0).child(0).childCount() > 0 &&
                                            className("com.uc.webview.export.WebView").findOnce().child(0).child(0).child(0).child(0).child(0).child(0).text().search("秒") >= 0 ||
                                            className("com.uc.webview.export.WebView").findOnce().childCount() > 0 &&
                                            className("com.uc.webview.export.WebView").findOnce().child(0).childCount() > 0 &&
                                            className("com.uc.webview.export.WebView").findOnce().child(0).child(0).childCount() > 0 &&
                                            className("com.uc.webview.export.WebView").findOnce().child(0).child(0).child(0).childCount() > 0 &&
                                            className("com.uc.webview.export.WebView").findOnce().child(0).child(0).child(0).child(0).childCount() > 0 &&
                                            className("com.uc.webview.export.WebView").findOnce().child(0).child(0).child(0).child(0).child(0).childCount() > 0 &&
                                            className("com.uc.webview.export.WebView").findOnce().child(0).child(0).child(0).child(0).child(0).child(0).desc() != null &&
                                            className("com.uc.webview.export.WebView").findOnce().child(0).child(0).child(0).child(0).child(0).child(0).desc().search("秒") >= 0) {
                                            for (let dengs = 10; dengs > 0; dengs--) {
                                                if (className("com.uc.webview.export.WebView").findOnce() != null &&
                                                    className("com.uc.webview.export.WebView").findOnce().childCount() > 0 &&
                                                    className("com.uc.webview.export.WebView").findOnce().child(0).childCount() > 0 &&
                                                    className("com.uc.webview.export.WebView").findOnce().child(0).child(0).childCount() > 0 &&
                                                    className("com.uc.webview.export.WebView").findOnce().child(0).child(0).child(0).childCount() > 0 &&
                                                    className("com.uc.webview.export.WebView").findOnce().child(0).child(0).child(0).child(0).childCount() > 0 &&
                                                    className("com.uc.webview.export.WebView").findOnce().child(0).child(0).child(0).child(0).child(0).childCount() > 0 &&
                                                    className("com.uc.webview.export.WebView").findOnce().child(0).child(0).child(0).child(0).child(0).child(0).text().search("秒") >= 0 ||
                                                    className("com.uc.webview.export.WebView").findOnce() != null &&
                                                    className("com.uc.webview.export.WebView").findOnce().childCount() > 0 &&
                                                    className("com.uc.webview.export.WebView").findOnce().child(0).childCount() > 0 &&
                                                    className("com.uc.webview.export.WebView").findOnce().child(0).child(0).childCount() > 0 &&
                                                    className("com.uc.webview.export.WebView").findOnce().child(0).child(0).child(0).childCount() > 0 &&
                                                    className("com.uc.webview.export.WebView").findOnce().child(0).child(0).child(0).child(0).childCount() > 0 &&
                                                    className("com.uc.webview.export.WebView").findOnce().child(0).child(0).child(0).child(0).child(0).childCount() > 0 &&
                                                    className("com.uc.webview.export.WebView").findOnce().child(0).child(0).child(0).child(0).child(0).child(0).text().search("s") >= 0 ||
                                                    className("com.uc.webview.export.WebView").findOnce() != null &&
                                                    className("com.uc.webview.export.WebView").findOnce().childCount() > 0 &&
                                                    className("com.uc.webview.export.WebView").findOnce().child(0).childCount() > 0 &&
                                                    className("com.uc.webview.export.WebView").findOnce().child(0).child(0).childCount() > 0 &&
                                                    className("com.uc.webview.export.WebView").findOnce().child(0).child(0).child(0).childCount() > 0 &&
                                                    className("com.uc.webview.export.WebView").findOnce().child(0).child(0).child(0).child(0).childCount() > 0 &&
                                                    className("com.uc.webview.export.WebView").findOnce().child(0).child(0).child(0).child(0).child(0).childCount() > 0 &&
                                                    className("com.uc.webview.export.WebView").findOnce().child(0).child(0).child(0).child(0).child(0).child(0).desc() != null &&
                                                    className("com.uc.webview.export.WebView").findOnce().child(0).child(0).child(0).child(0).child(0).child(0).desc().search("秒") >= 0 ||
                                                    className("com.uc.webview.export.WebView").findOnce() != null &&
                                                    className("com.uc.webview.export.WebView").findOnce().childCount() > 0 &&
                                                    className("com.uc.webview.export.WebView").findOnce().child(0).childCount() > 0 &&
                                                    className("com.uc.webview.export.WebView").findOnce().child(0).child(0).childCount() > 0 &&
                                                    className("com.uc.webview.export.WebView").findOnce().child(0).child(0).child(0).childCount() > 0 &&
                                                    className("com.uc.webview.export.WebView").findOnce().child(0).child(0).child(0).child(0).childCount() > 0 &&
                                                    className("com.uc.webview.export.WebView").findOnce().child(0).child(0).child(0).child(0).child(0).childCount() > 0 &&
                                                    className("com.uc.webview.export.WebView").findOnce().child(0).child(0).child(0).child(0).child(0).child(0).desc() != null &&
                                                    className("com.uc.webview.export.WebView").findOnce().child(0).child(0).child(0).child(0).child(0).child(0).desc().search("s") >= 0) {
                                                    toastLog("已识别到应用内任务计时器，剩余" + className("com.uc.webview.export.WebView").findOnce().child(0).child(0).child(0).child(0).child(0).child(0).text() + className("com.uc.webview.export.WebView").findOnce().child(0).child(0).child(0).child(0).child(0).child(0).desc());
                                                    sleep(1000);
                                                } else if (className("com.uc.webview.export.WebView").findOnce() != null &&
                                                    className("com.uc.webview.export.WebView").findOnce().childCount() > 0 &&
                                                    className("com.uc.webview.export.WebView").findOnce().child(0).childCount() > 0 &&
                                                    className("com.uc.webview.export.WebView").findOnce().child(0).child(0).childCount() > 0 &&
                                                    className("com.uc.webview.export.WebView").findOnce().child(0).child(0).child(0).childCount() > 0 &&
                                                    className("com.uc.webview.export.WebView").findOnce().child(0).child(0).child(0).child(0).childCount() > 0 &&
                                                    className("com.uc.webview.export.WebView").findOnce().child(0).child(0).child(0).child(0).child(0).childCount() > 0 &&
                                                    className("com.uc.webview.export.WebView").findOnce().child(0).child(0).child(0).child(0).child(0).child(0).text().search("秒") < 0 &&
                                                    className("com.uc.webview.export.WebView").findOnce().child(0).child(0).child(0).child(0).child(0).child(0).text().search("s") < 0 &&
                                                    className("com.uc.webview.export.WebView").findOnce().child(0).child(0).child(0).child(0).child(0).child(0).desc() == null) {
                                                    toastLog("应用内任务计时器已结束，尝试返回任务蒙版界面");
                                                    sleep(1000);
                                                    break;
                                                } else {
                                                    toastLog("识别到应用内计时器加等时间，剩余" + dengs + "秒……");
                                                    sleep(1000);
                                                }
                                            }
                                            break;
                                        } else if (desc("关注").className("android.widget.ImageView").id("com.suning.mobile.ebuy:id/iv_shop_home_collection").clickable(true).findOnce() != null && RwTitle.search("关注店铺") >= 0) {
                                            desc("关注").className("android.widget.ImageView").id("com.suning.mobile.ebuy:id/iv_shop_home_collection").clickable(true).findOnce().click();
                                            toastLog("已尝试盲点“关注（店铺）”按钮");
                                            sleep(2000);
                                            if (desc("关注").className("android.widget.ImageView").id("com.suning.mobile.ebuy:id/iv_shop_home_collection").clickable(true).findOnce() != null) {
                                                desc("关注").className("android.widget.ImageView").id("com.suning.mobile.ebuy:id/iv_shop_home_collection").clickable(true).findOnce().click();
                                                toastLog("已尝试盲点“已关注（店铺）”按钮");
                                                sleep(3000);
                                            }
                                            if (text("取消关注").clickable(true).findOnce() != null) {
                                                text("取消关注").clickable(true).findOnce().click();
                                                toastLog("已尝试盲点“取消关注”按钮");
                                                sleep(3000);
                                            } else if (desc("取消关注").clickable(true).findOnce() != null) {
                                                desc("取消关注").clickable(true).findOnce().click();
                                                toastLog("已尝试盲点“取消关注”按钮");
                                                sleep(3000);
                                            }
                                            break;
                                        } else if (className("android.widget.RelativeLayout").id("com.suning.mobile.ebuy:id/rl_root").findOnce() != null &&
                                            className("android.widget.RelativeLayout").id("com.suning.mobile.ebuy:id/rl_root").findOnce().childCount() > 1 &&
                                            className("android.widget.RelativeLayout").id("com.suning.mobile.ebuy:id/rl_root").findOnce().child(1).childCount() > 0 &&
                                            className("android.widget.RelativeLayout").id("com.suning.mobile.ebuy:id/rl_root").findOnce().child(1).child(0).text().search("观看直播领奖励") >= 0 &&
                                            id("com.suning.mobile.ebuy:id/id_recycleview").className("android.support.v7.widget.RecyclerView").scrollable(true).findOnce() != null ||
                                            className("android.widget.RelativeLayout").id("com.suning.mobile.ebuy:id/rl_root").findOnce() != null &&
                                            className("android.widget.RelativeLayout").id("com.suning.mobile.ebuy:id/rl_root").findOnce().childCount() > 1 &&
                                            className("android.widget.RelativeLayout").id("com.suning.mobile.ebuy:id/rl_root").findOnce().child(1).childCount() > 0 &&
                                            className("android.widget.RelativeLayout").id("com.suning.mobile.ebuy:id/rl_root").findOnce().child(1).child(0).text().search("观看直播领奖励") >= 0 &&
                                            id("com.suning.mobile.ebuy:id/id_recycleview").className("android.support.v7.widget.RecyclerView").scrollable(true).findOnce() != null) {
                                            if (className("android.widget.RelativeLayout").id("com.suning.mobile.ebuy:id/rl_root").findOnce().child(1).child(0).text() != null && className("android.widget.RelativeLayout").id("com.suning.mobile.ebuy:id/rl_root").findOnce().child(1).child(0).text() != "") {
                                                var LiveRwTitle = className("android.widget.RelativeLayout").id("com.suning.mobile.ebuy:id/rl_root").findOnce().child(1).child(0).text();
                                            } else if (className("android.widget.RelativeLayout").id("com.suning.mobile.ebuy:id/rl_root").findOnce().child(1).child(0).desc() != null && className("android.widget.RelativeLayout").id("com.suning.mobile.ebuy:id/rl_root").findOnce().child(1).child(0).desc() != "") {
                                                var LiveRwTitle = className("android.widget.RelativeLayout").id("com.suning.mobile.ebuy:id/rl_root").findOnce().child(1).child(0).desc();
                                            }
                                            toastLog("已处于直播列表界面，当前：" + LiveRwTitle);
                                            let ARw = LiveRwTitle.replace("/", "崗");
                                            BRw = ARw.replace("(", "籤");
                                            CRw = BRw.replace(")", "骺");
                                            nanNowThis = CRw.match(/籤(\S*)崗/)[1];
                                            nanLimitThis = CRw.match(/崗(\S*)骺/)[1];
                                            NowNumThis = Number(nanNowThis);
                                            LimitNumThis = Number(nanLimitThis);
                                            if (NowNumThis != LimitNumThis) {
                                                for (let f = 0; f < id("com.suning.mobile.ebuy:id/id_recycleview").className("android.support.v7.widget.RecyclerView").scrollable(true).findOnce().childCount(); f++) {
                                                    id("com.suning.mobile.ebuy:id/id_recycleview").className("android.support.v7.widget.RecyclerView").scrollable(true).findOnce().scrollForward();
                                                    toastLog("已尝试上滑直播列表");
                                                    sleep(2000);
                                                    if (id("com.suning.mobile.ebuy:id/id_recycleview").className("android.support.v7.widget.RecyclerView").scrollable(true).findOnce().child(f).clickable() == true &&
                                                        id("com.suning.mobile.ebuy:id/id_recycleview").className("android.support.v7.widget.RecyclerView").scrollable(true).findOnce().child(f).childCount() > 1 &&
                                                        id("com.suning.mobile.ebuy:id/id_recycleview").className("android.support.v7.widget.RecyclerView").scrollable(true).findOnce().child(f).child(0).className() == "android.widget.RelativeLayout" &&
                                                        id("com.suning.mobile.ebuy:id/id_recycleview").className("android.support.v7.widget.RecyclerView").scrollable(true).findOnce().child(f).child(1).className() == "android.widget.LinearLayout") {
                                                        id("com.suning.mobile.ebuy:id/id_recycleview").className("android.support.v7.widget.RecyclerView").scrollable(true).findOnce().child(f).click();
                                                        toastLog("已尝试盲点直播" + f);
                                                        sleep(3000);
                                                        for (let denglive = 10; denglive > 0; denglive--) {
                                                            if (className("android.widget.LinearLayout").id("com.suning.mobile.ebuy:id/play_view_pro").findOnce() != null &&
                                                                className("android.widget.LinearLayout").id("com.suning.mobile.ebuy:id/play_view_pro").findOnce().childCount() > 0 &&
                                                                className("android.widget.LinearLayout").id("com.suning.mobile.ebuy:id/play_view_pro").findOnce().child(0).childCount() > 0 &&
                                                                className("android.widget.LinearLayout").id("com.suning.mobile.ebuy:id/play_view_pro").findOnce().child(0).child(0).childCount() > 1 &&
                                                                className("android.widget.LinearLayout").id("com.suning.mobile.ebuy:id/play_view_pro").findOnce().child(0).child(0).child(1).text().search("s") >= 0 ||
                                                                className("android.widget.LinearLayout").id("com.suning.mobile.ebuy:id/play_view_pro").findOnce() != null &&
                                                                className("android.widget.LinearLayout").id("com.suning.mobile.ebuy:id/play_view_pro").findOnce().childCount() > 0 &&
                                                                className("android.widget.LinearLayout").id("com.suning.mobile.ebuy:id/play_view_pro").findOnce().child(0).childCount() > 0 &&
                                                                className("android.widget.LinearLayout").id("com.suning.mobile.ebuy:id/play_view_pro").findOnce().child(0).child(0).childCount() > 1 &&
                                                                className("android.widget.LinearLayout").id("com.suning.mobile.ebuy:id/play_view_pro").findOnce().child(0).child(0).child(1).desc() != null &&
                                                                className("android.widget.LinearLayout").id("com.suning.mobile.ebuy:id/play_view_pro").findOnce().child(0).child(0).child(1).desc().search("s") >= 0) {
                                                                for (let dengslive = 10; dengslive > 0; dengslive--) {
                                                                    if (className("android.widget.LinearLayout").id("com.suning.mobile.ebuy:id/play_view_pro").findOnce() != null &&
                                                                        className("android.widget.LinearLayout").id("com.suning.mobile.ebuy:id/play_view_pro").findOnce().childCount() > 0 &&
                                                                        className("android.widget.LinearLayout").id("com.suning.mobile.ebuy:id/play_view_pro").findOnce().child(0).childCount() > 0 &&
                                                                        className("android.widget.LinearLayout").id("com.suning.mobile.ebuy:id/play_view_pro").findOnce().child(0).child(0).childCount() > 1 &&
                                                                        className("android.widget.LinearLayout").id("com.suning.mobile.ebuy:id/play_view_pro").findOnce().child(0).child(0).child(1).text().search("任务已完成") >= 0 ||
                                                                        className("android.widget.LinearLayout").id("com.suning.mobile.ebuy:id/play_view_pro").findOnce() != null &&
                                                                        className("android.widget.LinearLayout").id("com.suning.mobile.ebuy:id/play_view_pro").findOnce().childCount() > 0 &&
                                                                        className("android.widget.LinearLayout").id("com.suning.mobile.ebuy:id/play_view_pro").findOnce().child(0).childCount() > 0 &&
                                                                        className("android.widget.LinearLayout").id("com.suning.mobile.ebuy:id/play_view_pro").findOnce().child(0).child(0).childCount() > 1 &&
                                                                        className("android.widget.LinearLayout").id("com.suning.mobile.ebuy:id/play_view_pro").findOnce().child(0).child(0).child(1).desc() != null &&
                                                                        className("android.widget.LinearLayout").id("com.suning.mobile.ebuy:id/play_view_pro").findOnce().child(0).child(0).child(1).desc().search("任务已完成") >= 0) {
                                                                        toastLog("本次任务已完成，结束等待计时");
                                                                        break;
                                                                    } else if (className("android.widget.LinearLayout").id("com.suning.mobile.ebuy:id/play_view_pro").findOnce() != null &&
                                                                        className("android.widget.LinearLayout").id("com.suning.mobile.ebuy:id/play_view_pro").findOnce().childCount() > 0 &&
                                                                        className("android.widget.LinearLayout").id("com.suning.mobile.ebuy:id/play_view_pro").findOnce().child(0).childCount() > 0 &&
                                                                        className("android.widget.LinearLayout").id("com.suning.mobile.ebuy:id/play_view_pro").findOnce().child(0).child(0).childCount() > 1 &&
                                                                        className("android.widget.LinearLayout").id("com.suning.mobile.ebuy:id/play_view_pro").findOnce().child(0).child(0).child(1).text().search("s") >= 0 ||
                                                                        className("android.widget.LinearLayout").id("com.suning.mobile.ebuy:id/play_view_pro").findOnce() != null &&
                                                                        className("android.widget.LinearLayout").id("com.suning.mobile.ebuy:id/play_view_pro").findOnce().childCount() > 0 &&
                                                                        className("android.widget.LinearLayout").id("com.suning.mobile.ebuy:id/play_view_pro").findOnce().child(0).childCount() > 0 &&
                                                                        className("android.widget.LinearLayout").id("com.suning.mobile.ebuy:id/play_view_pro").findOnce().child(0).child(0).childCount() > 1 &&
                                                                        className("android.widget.LinearLayout").id("com.suning.mobile.ebuy:id/play_view_pro").findOnce().child(0).child(0).child(1).desc() != null &&
                                                                        className("android.widget.LinearLayout").id("com.suning.mobile.ebuy:id/play_view_pro").findOnce().child(0).child(0).child(1).desc().search("s") >= 0) {
                                                                        toastLog("识别到应用内计时器，计时器剩余" + className("android.widget.LinearLayout").id("com.suning.mobile.ebuy:id/play_view_pro").findOnce().child(0).child(0).child(1).text());
                                                                        sleep(1000);
                                                                    } else if (className("android.widget.LinearLayout").id("com.suning.mobile.ebuy:id/play_view_pro").findOnce() != null &&
                                                                        className("android.widget.LinearLayout").id("com.suning.mobile.ebuy:id/play_view_pro").findOnce().childCount() > 0 &&
                                                                        className("android.widget.LinearLayout").id("com.suning.mobile.ebuy:id/play_view_pro").findOnce().child(0).childCount() > 0 &&
                                                                        className("android.widget.LinearLayout").id("com.suning.mobile.ebuy:id/play_view_pro").findOnce().child(0).child(0).childCount() > 1 &&
                                                                        className("android.widget.LinearLayout").id("com.suning.mobile.ebuy:id/play_view_pro").findOnce().child(0).child(0).child(1).text().search("s") < 0 ||
                                                                        className("android.widget.LinearLayout").id("com.suning.mobile.ebuy:id/play_view_pro").findOnce() != null &&
                                                                        className("android.widget.LinearLayout").id("com.suning.mobile.ebuy:id/play_view_pro").findOnce().childCount() > 0 &&
                                                                        className("android.widget.LinearLayout").id("com.suning.mobile.ebuy:id/play_view_pro").findOnce().child(0).childCount() > 0 &&
                                                                        className("android.widget.LinearLayout").id("com.suning.mobile.ebuy:id/play_view_pro").findOnce().child(0).child(0).childCount() > 1 &&
                                                                        className("android.widget.LinearLayout").id("com.suning.mobile.ebuy:id/play_view_pro").findOnce().child(0).child(0).child(1).desc() != null &&
                                                                        className("android.widget.LinearLayout").id("com.suning.mobile.ebuy:id/play_view_pro").findOnce().child(0).child(0).child(1).desc().search("s") < 0) {
                                                                        toastLog("应用内计时器结束，尝试返回上一级");
                                                                        break;
                                                                    } else {
                                                                        toastLog("识别到应用内计时器，加时等待剩余" + dengslive + "秒……");
                                                                        sleep(1000);
                                                                    }
                                                                }
                                                                break;
                                                            } else if (className("android.widget.LinearLayout").id("com.suning.mobile.ebuy:id/play_view_pro").findOnce() != null &&
                                                                className("android.widget.LinearLayout").id("com.suning.mobile.ebuy:id/play_view_pro").findOnce().childCount() > 0 &&
                                                                className("android.widget.LinearLayout").id("com.suning.mobile.ebuy:id/play_view_pro").findOnce().child(0).childCount() > 0 &&
                                                                className("android.widget.LinearLayout").id("com.suning.mobile.ebuy:id/play_view_pro").findOnce().child(0).child(0).childCount() > 1 &&
                                                                className("android.widget.LinearLayout").id("com.suning.mobile.ebuy:id/play_view_pro").findOnce().child(0).child(0).child(1).text().search("任务已完成") >= 0 ||
                                                                className("android.widget.LinearLayout").id("com.suning.mobile.ebuy:id/play_view_pro").findOnce() != null &&
                                                                className("android.widget.LinearLayout").id("com.suning.mobile.ebuy:id/play_view_pro").findOnce().childCount() > 0 &&
                                                                className("android.widget.LinearLayout").id("com.suning.mobile.ebuy:id/play_view_pro").findOnce().child(0).childCount() > 0 &&
                                                                className("android.widget.LinearLayout").id("com.suning.mobile.ebuy:id/play_view_pro").findOnce().child(0).child(0).childCount() > 1 &&
                                                                className("android.widget.LinearLayout").id("com.suning.mobile.ebuy:id/play_view_pro").findOnce().child(0).child(0).child(1).desc() != null &&
                                                                className("android.widget.LinearLayout").id("com.suning.mobile.ebuy:id/play_view_pro").findOnce().child(0).child(0).child(1).desc().search("任务已完成") >= 0) {
                                                                toastLog("本次任务已完成，结束等待计时");
                                                                break;
                                                            } else {
                                                                toastLog("正在观看直播，剩余等待" + denglive + "秒……");
                                                                sleep(1000);
                                                            }
                                                        }
                                                        Justback();
                                                        sleep(1000);
                                                        break
                                                    }
                                                }
                                            } else {
                                                toastLog(LiveRwTitle + "，尝试返回任务蒙版界面");
                                                break;
                                            }
                                        } else {
                                            toastLog("正在进行“" + RwTitle + "”任务，剩余" + deng + "秒……");
                                            sleep(1000);
                                        }
                                    } catch (e) {
                                        try {
                                            toastLog("完成“" + RwTitle + "”任务时出现错误：" + e + "，等待剩余" + deng + "秒……");
                                        } catch (error) {
                                            toastLog("完成“" + RwTitle + "”任务时出现错误：" + e);
                                        }
                                        sleep(1000);
                                    }
                                }
                                if (FindWebView() == null) {
                                    if (id("com.suning.mobile.ebuy:id/btn_back").className("android.widget.ImageView").desc("返回").clickable(true).findOnce() != null) {
                                        id("com.suning.mobile.ebuy:id/btn_back").className("android.widget.ImageView").desc("返回").clickable(true).findOnce().click();
                                        toastLog("已尝试盲点“返回”按钮");
                                        sleep(3000);
                                    } else {
                                        Justback();
                                        sleep(1000);
                                    }
                                }
                                if (FindWebView() != null &&
                                    FindWebView().childCount() > 0 &&
                                    FindWebView().child(0).childCount() > 0 &&
                                    FindWebView().child(0).child(0).childCount() > 4 &&
                                    FindWebView().child(0).child(0).child(4).childCount() == 0 &&
                                    FindWebView().child(0).child(0).child(0).childCount() > 0 ||
                                    FindWebView() != null &&
                                    FindWebView().childCount() > 0 &&
                                    FindWebView().child(0).childCount() > 0 &&
                                    FindWebView().child(0).child(0).childCount() == 1) {
                                    var A = FindWebView().child(0).child(0).child(0);
                                    if (A.child(A.childCount() - 3).clickable() == true) {
                                        A.child(A.childCount() - 3).click();
                                        toastLog("已尝试盲点“赚鲸币”按钮");
                                    } else {
                                        let a = A.child(A.childCount() - 3).bounds();
                                        click(a.centerX(), a.centerY());
                                        toastLog("已尝试点击“赚鲸币”按钮");
                                    }
                                    sleep(3000);
                                }
                            } else {
                                if (B.child(i).text() == "去邀请" || B.child(i).desc() != null && B.child(i).desc() == "去邀请" || RwTitle.search("口令送喜") >= 0 || RwTitle.search("逛狮狮连萌") >= 0) {
                                    toastLog("【已跳过】“" + RwTitle + RwButton.text() + RwButton.desc() + "”任务");
                                } else {
                                    toastLog("【已完成任务】：" + RwTitle);
                                }
                                i++;
                            }
                        } else {
                            console.warn("❎任务名识别错误！", "由于此问题比较严重导致脚本无法继续运行，请将此对话框截图后反馈给开发者解决\n出错任务名：" + B.child(i - 2).text() + "\n当前按钮标题：" + B.child(i).text());
                            alert("❎任务名识别错误！", "由于此问题比较严重导致脚本无法继续运行，请将此对话框截图后反馈给开发者解决\n出错任务名：" + B.child(i - 2).text() + "\n当前按钮标题：" + B.child(i).text());
                            exit();
                        }
                    }
                } else {
                    i++;
                }
            }
        }
        dialogs.alert("“自动赚鲸币”：\n脚本已运行完成");
        try {
            device.cancelKeepingAwake();
        } catch (e) {
            toastLog("关闭“屏幕半常亮”失败！：" + e);
        }
        exit();
    } else {
        console.warn("当前活动：" + currentActivity() + "，当前包名：" + currentPackage() + "当前应用名：" + getAppName(currentPackage()));
        toastLog("当前未处于活动界面，正在重新尝试中……");
        openInTask();
        DoTask();
    }
}
firstD();

function firstD() {
    if (context_Manualstate == 1) {
        toastLog("已手动模式运行脚本");
        var options = ["等待20秒", "等待30秒", "等待50秒", "等待60秒", "等待10秒"]
        var i = dialogs.select("🔧以“手动模式”运行脚本\n\n接下来您需要在提示出现后自行打开苏宁易购APP至活动页”\n\n请选择脚本等待您打开苏宁易购的时间", options);
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
            toastLog("请打开苏宁易购至“天天发现鲸”活动的主界面\n剩余" + deng + "秒后运行脚本...");
            sleep(1111);
        }
        DoTask();
    } else {
        openInTask();
        DoTask();
    }
}