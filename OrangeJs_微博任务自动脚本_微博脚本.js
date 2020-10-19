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
    var ScriptVersion = ("Beta1.18"); //版本
    log("软件脚本已开始运行，如果没有弹出菜单请强行停止再打开本软件！");
    var options_ = ["▶️ 开始运行脚本", "🕒 计时运行脚本", "⏰ 定时运行脚本", "⏹ 停止运行脚本", "🔙 返回方法设置", "💬 吐司/日志切换"]
    var i = dialogs.select("*+*+*+* 橘衫の脚本 *+*+*+*\n*+*+*+*  Orange Js *+*+*+*\n\n欢迎使用 (◍•ᴗ•◍)❤" + "\n" + "“微博任务自动脚本”" + ScriptVersion + "\n请选择一个要进行的选项", options_);
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
    } else if (i == 4) {
        toastLog(options_[i]);
        if (files.exists("/storage/emulated/0/OrangeJs/微博任务自动脚本/返回方法设置.txt") == true && files.read("/storage/emulated/0/OrangeJs/微博任务自动脚本/返回方法设置.txt") > 1 && files.exists("/storage/emulated/0/OrangeJs/微博任务自动脚本/滑动返回速度.txt")) {
            files.remove("/storage/emulated/0/OrangeJs/微博任务自动脚本/返回方法设置.txt");
            log("当前返回方法设置为滑动返回但未设置滑动返回速度");
        }
        if (files.exists("/storage/emulated/0/OrangeJs/微博任务自动脚本/返回方法设置.txt") == true) {
            files.rename("/storage/emulated/0/OrangeJs/微博任务自动脚本/返回方法设置.txt", "X返回方法设置.txt");
            Set_Back_way();
        } else {
            dialogs.alert("您未保存任何返回方法，请运行脚本后再进行修改");
            dialogs_js();
        }
    } else if (i == 5) {
        toastLog(options_[i]);
        context_Manualstate = 0;
        if (files.exists("/storage/emulated/0/OrangeJs/自动微信发消息/吐司or日志.txt") == true) {
            var z = files.read("/storage/emulated/0/OrangeJs/自动微信发消息/吐司or日志.txt");
            if (z != "吐司" && z != "日志") {
                alert("“吐司or日志”文件错误，已尝试删除错误文件");
                try {
                    files.remove("/storage/emulated/0/OrangeJs/自动微信发消息/吐司or日志.txt");
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
                files.createWithDirs("/storage/emulated/0/OrangeJs/自动微信发消息/吐司or日志.txt");
                files.write("/storage/emulated/0/OrangeJs/自动微信发消息/吐司or日志.txt", "吐司");
            } catch (e) {
                log("未授予存储权限或存储权限错误，当前设置为吐司");
                var T = 0;
            }
        } else if (da == 1) {
            toastLog("您选择了：使用悬浮日志");
            try {
                var T = 1;
                files.createWithDirs("/storage/emulated/0/OrangeJs/自动微信发消息/吐司or日志.txt");
                files.write("/storage/emulated/0/OrangeJs/自动微信发消息/吐司or日志.txt", "日志");
            } catch (e) {
                log("未授予存储权限或存储权限错误，开启悬浮日志");
                var T = 1;
            }
        }
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
    }
}

function Set_Back_way() {
    try {
        if (files.exists("/storage/emulated/0/OrangeJs/微博任务自动脚本/返回方法设置.txt") == true) {
            context_i_back = files.read("/storage/emulated/0/OrangeJs/微博任务自动脚本/返回方法设置.txt");
            log("返回方法：" + context_i_back);
            if (context_i_back > 1) {
                try {
                    context_gestures_speed = files.read("/storage/emulated/0/OrangeJs/微博任务自动脚本/滑动返回速度.txt")
                    log("滑动返回速度：" + context_gestures_speed)
                } catch (e) {
                    log("上次未完成滑动返回速度设置");
                    files.remove("/storage/emulated/0/OrangeJs/微博任务自动脚本/返回方法设置.txt");
                    Set_Back_way();
                }
            }
        } else {
            //💟🕎⛎设定返回方法及滑动速度的代码
            var options_hq = ["🔙 普通的返回\n(使用无障碍权限)", "#⃣ 使用ROOT返回\n(必须授予本软件ROOT权限)", "👉👉🏻👉🏼👉🏽👉🏾👉🏿 \n从屏幕中间从左向内滑动\n(全面屏手势返回 例如:小米MIUI)", "              👈🏿👈🏾👈🏽👈🏼👈🏻👈 \n从屏幕中间从右向内滑动\n(全面屏手势返回 例如:华为EMUI)", "👆👆🏻👆🏼👆🏽👆🏾👆🏿 \n从屏幕左侧下方向上滑动\n(全面屏手势返回 例如:锤子Smartisan UI)", "               ☝🏿☝🏾☝🏽☝🏼☝🏻☝️ \n从屏幕右侧下方向上滑动\n(全面屏手势返回)"]
            var i_back = dialogs.select(" Hi! ( ╹▽╹ )\n请选择一个方法\n用于实现返回操作", options_hq);
            if (i_back >= 0) {
                toastLog("您选择的是" + options_hq[i_back]);
                sleep(2000);
                var options_select = options_hq[i_back];
                context_i_back = i_back;
                files.createWithDirs("/storage/emulated/0/OrangeJs/微博任务自动脚本/返回方法设置.txt");
                files.write("/storage/emulated/0/OrangeJs/微博任务自动脚本/返回方法设置.txt", context_i_back);
            } else {
                dialogs_js();
                toastLog("没有选择返回方法！");
                device.cancelKeepingAwake();
            }
            if (i_back > 1) {
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
                    files.createWithDirs("/storage/emulated/0/OrangeJs/微博任务自动脚本/滑动返回速度.txt");
                    files.write("/storage/emulated/0/OrangeJs/微博任务自动脚本/滑动返回速度.txt", context_gestures_speed);
                }
            }
            if (files.exists("/storage/emulated/0/OrangeJs/微博任务自动脚本/返回方法设置.txt") == true && files.exists("/storage/emulated/0/OrangeJs/微博任务自动脚本/X返回方法设置.txt") == true) {
                log("删除");
                files.remove("/storage/emulated/0/OrangeJs/微博任务自动脚本/X返回方法设置.txt");
                dialogs_js();
            } else if (files.exists("/storage/emulated/0/OrangeJs/微博任务自动脚本/X返回方法设置.txt") == true) {
                log("重命名");
                files.rename("/storage/emulated/0/OrangeJs/微博任务自动脚本/X返回方法设置.txt", "返回方法设置.txt");
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
if (files.exists("/storage/emulated/0/OrangeJs/微博任务自动脚本/吐司or日志.txt") == true) {
    try {
        let z = files.read("/storage/emulated/0/OrangeJs/微博任务自动脚本/吐司or日志.txt");
        if (z == "吐司") {
            var T = 0;
        } else if (z == "日志") {
            var T = 1;
        } else {
            toastLog("“吐司or日志”文件错误，已尝试删除并使用默认日志");
            try {
                files.remove("/storage/emulated/0/OrangeJs/微博任务自动脚本/吐司or日志.txt");
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
        files.createWithDirs("/storage/emulated/0/OrangeJs/微博任务自动脚本/吐司or日志.txt");
        files.write("/storage/emulated/0/OrangeJs/微博任务自动脚本/吐司or日志.txt", "日志");
        var T = 1;
        log("默认使用日志，如需更改请在主菜单进行");
    } catch (e) {
        log("未授予存储权限或存储权限错误，默认开启悬浮日志");
        var T = 1;
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

function wait_Time_over() {
    var i_wait = dialogs.singleChoice("🕗 定时运行\n\n(＾∇＾)ﾉ♪\n请选择一个选项\n计时结束会自动运行", ["1分钟后运行", "5分钟后运行", "10分钟后运行", "30分钟后运行", "一小时后运行", "两小时后运行", "三小时后运行", "四小时后运行", "五小时后运行", "六小时后运行", "七小时后运行", "八小时后运行", "九小时后运行", "十小时后运行"], 2);
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
        var choice_confirm = dialogs.confirm("您选择了四小时后运行", "点击确定进行一次设定返回操作的方法后，脚本将在您设定的时间结束后开始自动运行\n请不要清理本软件的后台或者锁屏手机等，否则可能会造成定时任务失效");
        if (choice_confirm == false) {
            toastLog("取消了定时运行确认");
            wait_Time_over();
        } else {
            Set_Back_way();
            waiting_time();
        }
    }
    if (i_wait == 8) {
        var choice_confirm = dialogs.confirm("您选择了五小时后运行", "点击确定进行一次设定返回操作的方法后，脚本将在您设定的时间结束后开始自动运行\n请不要清理本软件的后台或者锁屏手机等，否则可能会造成定时任务失效");
        if (choice_confirm == false) {
            toastLog("取消了定时运行确认");
            wait_Time_over()
        } else {
            Set_Back_way();
            waiting_time();
        }
    }
    if (i_wait == 9) {
        var choice_confirm = dialogs.confirm("您选择了六小时后运行", "点击确定进行一次设定返回操作的方法后，脚本将在您设定的时间结束后开始自动运行\n请不要清理本软件的后台或者锁屏手机等，否则可能会造成定时任务失效");
        if (choice_confirm == false) {
            toastLog("取消了定时运行确认");
            wait_Time_over();
        } else {
            Set_Back_way();
            waiting_time();
        }
    }
    if (i_wait == 10) {
        var choice_confirm = dialogs.confirm("您选择了七小时后运行", "点击确定进行一次设定返回操作的方法后，脚本将在您设定的时间结束后开始自动运行\n请不要清理本软件的后台或者锁屏手机等，否则可能会造成定时任务失效");
        if (choice_confirm == false) {
            toastLog("取消了定时运行确认");
            wait_Time_over();
        } else {
            Set_Back_way();
            waiting_time();
        }
    }
    if (i_wait == 11) {
        var choice_confirm = dialogs.confirm("您选择了八小时后运行", "点击确定进行一次设定返回操作的方法后，脚本将在您设定的时间结束后开始自动运行\n请不要清理本软件的后台或者锁屏手机等，否则可能会造成定时任务失效");
        if (choice_confirm == false) {
            toastLog("取消了定时运行确认");
            wait_Time_over();
        } else {
            Set_Back_way();
            waiting_time();
        }
    }
    if (i_wait == 12) {
        var choice_confirm = dialogs.confirm("您选择了九小时后运行", "点击确定进行一次设定返回操作的方法后，脚本将在您设定的时间结束后开始自动运行\n请不要清理本软件的后台或者锁屏手机等，否则可能会造成定时任务失效");
        if (choice_confirm == false) {
            toastLog("取消了定时运行确认");
            wait_Time_over();
        } else {
            Set_Back_way();
            waiting_time();
        }
    }
    if (i_wait == 13) {
        var choice_confirm = dialogs.confirm("您选择了十小时后运行", "点击确定进行一次设定返回操作的方法后，脚本将在您设定的时间结束后开始自动运行\n请不要清理本软件的后台或者锁屏手机等，否则可能会造成定时任务失效");
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
        var Hours = 3;
        for (Hours == 3; Hours >= 0; Hours--) {
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
    if (context_i_wait == 9) {
        var Hours = 5;
        for (Hours == 5; Hours >= 0; Hours--) {
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
    if (context_i_wait == 10) {
        var Hours = 6;
        for (Hours == 6; Hours >= 0; Hours--) {
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
    if (context_i_wait == 11) {
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
    if (context_i_wait == 12) {
        var Hours = 8;
        for (Hours == 8; Hours >= 0; Hours--) {
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
    if (context_i_wait == 13) {
        var Hours = 9;
        for (Hours == 9; Hours >= 0; Hours--) {
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
        toastLog("使用普通的返回");
        back();
        sleep(1000);
    }
    if (context_i_back == 1) {
        toastLog("使用ROOT返回，请确保已给ROOT权限！");
        Back();
        sleep(1000);
    }
    if (context_i_back == 2) {
        OpeninHd();
    }
    if (context_i_back == 3) {
        toastLog("从屏幕中间向从左向内滑动来返回");
        gestures([context_gestures_speed, [0, height / 2],
            [500, height / 2]
        ]);
        sleep(1000);
    }
    if (context_i_back == 5) {
        toastLog("从屏幕左侧下方向上滑动来返回");
        gestures([context_gestures_speed, [width / 2 - 300, height - 1],
            [width / 2 - 300, height - 500]
        ]);
        sleep(1000);
    }
    if (context_i_back == 4) {
        toastLog("从屏幕中间向从右向内滑动来返回");
        gestures([context_gestures_speed, [width - 1, height / 2],
            [width - 500, height / 2]
        ]);
        sleep(1000);
    }
    if (context_i_back == 6) {
        toastLog("从屏幕左侧下面向上面滑动来返回");
        gestures([context_gestures_speed, [width / 2 + 300, height - 1],
            [width / 2 + 300, height - 500]
        ]);
        sleep(1000);
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
var PlWhile = null;

function WhatIsThis() {
    try {
        if (className("android.webkit.WebView").desc("用户任务中心").findOnce() != null) {
            let A = className("android.webkit.WebView").desc("用户任务中心").findOnce();
            for (let i = 0; i < A.childCount(); i++) {
                if (A.child(i).desc() != null && A.child(i).desc() == "新手任务") {
                    return A.child(i).desc();
                    break;
                } else if (A.child(i).desc() != null && A.child(i).desc() == "日常任务") {
                    return A.child(i).desc();
                    break;
                }
            }
        }
    } catch (e) {
        log(e);
    }
}

function OpeninHd() {
    while (true) {
        if (WhatIsThis() == "新手任务") {
            dialogs.alert("暂不支持自动完成“新手任务”", "很抱歉，由于开发者未对“新手任务”进行适配，脚本暂时无法完成“新手任务”，感谢您的使用！")
            exit();
        } else if (className("android.widget.TextView").text("用户任务中心").findOnce() != null && className("android.widget.TextView").text("日常任务").findOnce() != null ||
            className("android.webkit.WebView").desc("用户任务中心").findOnce() != null &&
            className("android.webkit.WebView").desc("用户任务中心").findOnce().childCount() > 1 &&
            className("android.webkit.WebView").desc("用户任务中心").findOnce().child(1).childCount() > 0 &&
            className("android.webkit.WebView").desc("用户任务中心").findOnce().child(1).child(0).childCount() > 3 &&
            className("android.webkit.WebView").desc("用户任务中心").findOnce().child(1).child(0).child(3).childCount() > 5 &&
            className("android.webkit.WebView").desc("用户任务中心").findOnce().child(1).child(0).child(3).child(0).desc() != null &&
            className("android.webkit.WebView").desc("用户任务中心").findOnce().child(1).child(0).child(3).child(0).desc() == "日常任务" ||
            className("android.webkit.WebView").text("用户任务中心").findOnce() != null &&
            className("android.webkit.WebView").text("用户任务中心").findOnce().child(0).childCount() > 1 &&
            className("android.webkit.WebView").text("用户任务中心").findOnce().child(0).child(1).childCount() > 0 &&
            className("android.webkit.WebView").text("用户任务中心").findOnce().child(0).child(1).child(0).childCount() > 3 &&
            className("android.webkit.WebView").text("用户任务中心").findOnce().child(0).child(1).child(0).child(3).childCount() > 0 &&
            className("android.webkit.WebView").text("用户任务中心").findOnce().child(0).child(1).child(0).child(3).child(0).childCount() > 1 &&
            className("android.webkit.WebView").text("用户任务中心").findOnce().child(0).child(1).child(0).child(3).child(0).child(1).text() == "日常任务" ||
            className("android.webkit.WebView").text("用户任务中心").findOnce() != null &&
            className("android.webkit.WebView").text("用户任务中心").findOnce().childCount() > 1 &&
            className("android.webkit.WebView").text("用户任务中心").findOnce().child(1).childCount() > 0 &&
            className("android.webkit.WebView").text("用户任务中心").findOnce().child(1).child(0).childCount() > 2 &&
            className("android.webkit.WebView").text("用户任务中心").findOnce().child(1).child(0).child(2).childCount() > 1 &&
            className("android.webkit.WebView").text("用户任务中心").findOnce().child(1).child(0).child(2).child(1).childCount() > 5 &&
            className("android.webkit.WebView").text("用户任务中心").findOnce().child(1).child(0).child(2).child(1).child(0).childCount() > 1 &&
            className("android.webkit.WebView").text("用户任务中心").findOnce().child(1).child(0).child(2).child(1).child(0).child(1).desc() != null &&
            className("android.webkit.WebView").text("用户任务中心").findOnce().child(1).child(0).child(2).child(1).child(0).child(1).desc() == "日常任务" ||
            className("android.webkit.WebView").text("用户任务中心").findOnce() != null &&
            className("android.webkit.WebView").text("用户任务中心").findOnce().childCount() > 1 &&
            className("android.webkit.WebView").text("用户任务中心").findOnce().child(1).childCount() > 0 &&
            className("android.webkit.WebView").text("用户任务中心").findOnce().child(1).child(0).childCount() > 2 &&
            className("android.webkit.WebView").text("用户任务中心").findOnce().child(1).child(0).child(2).childCount() > 1 &&
            className("android.webkit.WebView").text("用户任务中心").findOnce().child(1).child(0).child(2).child(1).childCount() > 5 &&
            className("android.webkit.WebView").text("用户任务中心").findOnce().child(1).child(0).child(2).child(1).child(0).childCount() > 1 &&
            className("android.webkit.WebView").text("用户任务中心").findOnce().child(1).child(0).child(2).child(1).child(0).child(1).text() == "日常任务" ||
            className("android.webkit.WebView").desc("用户任务中心").findOnce() != null &&
            className("android.webkit.WebView").desc("用户任务中心").findOnce().childCount() > 1 &&
            className("android.webkit.WebView").desc("用户任务中心").findOnce().child(1).childCount() > 0 &&
            className("android.webkit.WebView").desc("用户任务中心").findOnce().child(1).child(0).childCount() > 2 &&
            className("android.webkit.WebView").desc("用户任务中心").findOnce().child(1).child(0).child(2).childCount() > 1 &&
            className("android.webkit.WebView").desc("用户任务中心").findOnce().child(1).child(0).child(2).child(1).childCount() > 5 &&
            className("android.webkit.WebView").desc("用户任务中心").findOnce().child(1).child(0).child(2).child(1).child(0).childCount() > 1 &&
            className("android.webkit.WebView").desc("用户任务中心").findOnce().child(1).child(0).child(2).child(1).child(0).child(1).text() == "日常任务" ||
            WhatIsThis() == "日常任务") {
            toastLog("已处于“用户任务中心”任务界面");
            break;
        } else if (className("android.widget.FrameLayout").clickable(true).id("com.sina.weibo:id/rlredpacketSave").findOnce() != null) {
            className("android.widget.FrameLayout").clickable(true).id("com.sina.weibo:id/rlredpacketSave").findOnce().click();
            toastLog("已尝试点击主页活动入口按钮");
            sleep(2000);
        } else if (currentActivity() == "com.sina.weibo.MainTabActivity") {
            app.startActivity({
                action: "android.intent.action.VIEW",
                packageName: "com.sina.weibo",
                className: "com.sina.weibo.browser.WeiboBrowser",
                data: app.parseUri("https://m.weibo.cn/feature/applink?scheme=sinaweibo%3A%2F%2Fbrowser%3Furl%3Dhttps%253A%252F%252Fm.weibo.cn%252Fc%252Fcheckin%253Ffeaturecode%253Dfrom_sharingpage_to_mtask%26featurecode%3Dfrom_sharingpage_to_mtask&yingyongbao=0&golight=0&goxianzhi=0&url=https%3A%2F%2Fc.weibo.cn%3Fscheme%3Dsinaweibo%253A%252F%252Fbrowser%253Furl%253Dhttps%25253A%25252F%25252Fm.weibo.cn%25252Fc%25252Fcheckin%25253Ffeaturecode%25253Dfrom_sharingpage_to_mtask%2526featurecode%253Dfrom_sharingpage_to_mtask%26directdownload%3D0"),
                flags: ["grant_read_uri_permission", "grant_write_uri_permission"],
            });
            toastLog("处于主页，已尝试使用Intent调起活动界面");
            sleep(2000);
        } else if (currentActivity() == "com.sina.weibo.browser.WeiboBrowser") {
            sleep(2000);
            for (let a = 10; a > 0; a--) {
                if (className("android.widget.TextView").text("用户任务中心").findOnce() != null && className("android.widget.TextView").text("日常任务").findOnce() != null ||
                    className("android.webkit.WebView").desc("用户任务中心").findOnce() != null &&
                    className("android.webkit.WebView").desc("用户任务中心").findOnce().childCount() > 1 &&
                    className("android.webkit.WebView").desc("用户任务中心").findOnce().child(1).childCount() > 0 &&
                    className("android.webkit.WebView").desc("用户任务中心").findOnce().child(1).child(0).childCount() > 3 &&
                    className("android.webkit.WebView").desc("用户任务中心").findOnce().child(1).child(0).child(3).childCount() > 5 &&
                    className("android.webkit.WebView").desc("用户任务中心").findOnce().child(1).child(0).child(3).child(0).desc() != null &&
                    className("android.webkit.WebView").desc("用户任务中心").findOnce().child(1).child(0).child(3).child(0).desc() == "日常任务" ||
                    className("android.webkit.WebView").text("用户任务中心").findOnce() != null &&
                    className("android.webkit.WebView").text("用户任务中心").findOnce().child(0).childCount() > 1 &&
                    className("android.webkit.WebView").text("用户任务中心").findOnce().child(0).child(1).childCount() > 0 &&
                    className("android.webkit.WebView").text("用户任务中心").findOnce().child(0).child(1).child(0).childCount() > 3 &&
                    className("android.webkit.WebView").text("用户任务中心").findOnce().child(0).child(1).child(0).child(3).childCount() > 0 &&
                    className("android.webkit.WebView").text("用户任务中心").findOnce().child(0).child(1).child(0).child(3).child(0).childCount() > 1 &&
                    className("android.webkit.WebView").text("用户任务中心").findOnce().child(0).child(1).child(0).child(3).child(0).child(1).text() == "日常任务" ||
                    className("android.webkit.WebView").text("用户任务中心").findOnce() != null &&
                    className("android.webkit.WebView").text("用户任务中心").findOnce().childCount() > 1 &&
                    className("android.webkit.WebView").text("用户任务中心").findOnce().child(1).childCount() > 0 &&
                    className("android.webkit.WebView").text("用户任务中心").findOnce().child(1).child(0).childCount() > 2 &&
                    className("android.webkit.WebView").text("用户任务中心").findOnce().child(1).child(0).child(2).childCount() > 1 &&
                    className("android.webkit.WebView").text("用户任务中心").findOnce().child(1).child(0).child(2).child(1).childCount() > 5 &&
                    className("android.webkit.WebView").text("用户任务中心").findOnce().child(1).child(0).child(2).child(1).child(0).childCount() > 1 &&
                    className("android.webkit.WebView").text("用户任务中心").findOnce().child(1).child(0).child(2).child(1).child(0).child(1).desc() != null &&
                    className("android.webkit.WebView").text("用户任务中心").findOnce().child(1).child(0).child(2).child(1).child(0).child(1).desc() == "日常任务" ||
                    className("android.webkit.WebView").text("用户任务中心").findOnce() != null &&
                    className("android.webkit.WebView").text("用户任务中心").findOnce().childCount() > 1 &&
                    className("android.webkit.WebView").text("用户任务中心").findOnce().child(1).childCount() > 0 &&
                    className("android.webkit.WebView").text("用户任务中心").findOnce().child(1).child(0).childCount() > 2 &&
                    className("android.webkit.WebView").text("用户任务中心").findOnce().child(1).child(0).child(2).childCount() > 1 &&
                    className("android.webkit.WebView").text("用户任务中心").findOnce().child(1).child(0).child(2).child(1).childCount() > 5 &&
                    className("android.webkit.WebView").text("用户任务中心").findOnce().child(1).child(0).child(2).child(1).child(0).childCount() > 1 &&
                    className("android.webkit.WebView").text("用户任务中心").findOnce().child(1).child(0).child(2).child(1).child(0).child(1).text() == "日常任务" ||
                    WhatIsThis() == "日常任务") {
                    break;
                } else if (className("android.widget.TextView").text("用户任务中心").findOnce() != null) {
                    toastLog("正在等待“用户任务中心”加载，剩余" + a + "秒……");
                    sleep(2000);
                } else {
                    if (className("android.widget.TextView").text("网页无法打开").findOnce() != null) {
                        toastLog("网页无法打开");
                    }
                    break;
                }
            }
            if (className("android.widget.TextView").text("用户任务中心").findOnce() != null && className("android.widget.TextView").text("日常任务").findOnce() != null ||
                className("android.webkit.WebView").desc("用户任务中心").findOnce() != null &&
                className("android.webkit.WebView").desc("用户任务中心").findOnce().childCount() > 1 &&
                className("android.webkit.WebView").desc("用户任务中心").findOnce().child(1).childCount() > 0 &&
                className("android.webkit.WebView").desc("用户任务中心").findOnce().child(1).child(0).childCount() > 3 &&
                className("android.webkit.WebView").desc("用户任务中心").findOnce().child(1).child(0).child(3).childCount() > 5 &&
                className("android.webkit.WebView").desc("用户任务中心").findOnce().child(1).child(0).child(3).child(0).desc() != null &&
                className("android.webkit.WebView").desc("用户任务中心").findOnce().child(1).child(0).child(3).child(0).desc() == "日常任务" ||
                WhatIsThis() == "日常任务") {
                toastLog("已处于“用户任务中心”任务界面");
                break;
            } else {
                if (id("com.sina.weibo:id/titleLeft").className("android.widget.TextView").clickable(true).findOnce() != null) {
                    id("com.sina.weibo:id/titleLeft").className("android.widget.TextView").clickable(true).findOnce().click();
                    toastLog("“用户任务中心”加载超时，已尝试盲点关闭按钮，重试中……");
                    sleep(2000);
                } else {
                    toastLog("“用户任务中心”加载超时，重试中……");
                    Justback();
                    sleep(1000);
                }
            }
        } else if (currentPackage() != "com.sina.weibo") {
            app.startActivity({
                action: "android.intent.action.MAIN",
                packageName: "com.sina.weibo",
                className: "com.sina.weibo.SplashActivity",
                category: ["android.intent.category.LAUNCHER"],
                flags: ["activity_new_task"]
            });
            var deng = 5;
            for (deng == 5; deng > 0; deng--) {
                if (id("titleSave").findOnce() == null) {
                    toastLog("正在等待微博APP启动至主页，当前剩余" + deng + "秒……");
                    sleep(2000);
                    if (className("android.view.View").desc("首页").findOnce() != null) {
                        className("android.view.View").desc("首页").findOnce().click();
                        toastLog("已尝试点击“首页”按钮");
                    }
                } else {
                    toastLog("已到达主页");
                    var deng = 0;
                }
            }
        } else {
            if (className("android.widget.ImageView").clickable(true).desc("返回").findOnce() != null) {
                className("android.widget.ImageView").clickable(true).desc("返回").findOnce().click();
                toastLog("已尝试盲点“返回按钮”");
                sleep(2000);
            } else if (id("com.sina.weibo:id/rltitleBack").findOnce() != null) {
                id("com.sina.weibo:id/rltitleBack").findOnce().click();
                toastLog("已尝试盲点ID“返回按钮”");
                sleep(2000);
            } else if (className("android.widget.TextView").desc("返回").findOnce() != null && className("android.widget.TextView").desc("返回").findOnce().parent().parent().clickable() == true) {
                className("android.widget.TextView").desc("返回").findOnce().parent().parent().click();
                toastLog("已尝试盲点父级“返回按钮”");
                sleep(2000);
            } else if (id("com.sina.weibo:id/titleLeft").className("android.widget.TextView").clickable(true).findOnce() != null) {
                id("com.sina.weibo:id/titleLeft").className("android.widget.TextView").clickable(true).findOnce().click();
                toastLog("已尝试盲点左关闭按钮，重试中……");
                sleep(2000);
            } else {
                Justback();
                sleep(1000);
            }
        }
    }
}

function DoTask() {
    var FindKJ = {
        lingQu: function() {
            try {
                if (className("android.webkit.WebView").desc("用户任务中心").findOnce() != null) {
                    let A = className("android.webkit.WebView").desc("用户任务中心").findOnce();
                    for (let i = 0; i < A.childCount(); i++) {
                        if (A.child(i).desc() != null && A.child(i).desc().search("领取") >= 0 && A.child(i).desc().search("积分") >= 0 ||
                            A.child(i).desc() != null && A.child(i).desc().search("领") >= 0 && A.child(i).search("元") >= 0) {
                            A.child(i).click();
                            toastLog("已尝试盲点“" + A.child(i).desc() + "”按钮");
                            return true;
                            break;
                        }
                    }
                }
            } catch (e) {
                log(e);
            }
        },
        Guanzhu: function() {
            try {
                if (className("android.webkit.WebView").desc("用户任务中心").findOnce() != null) {
                    let A = className("android.webkit.WebView").desc("用户任务中心").findOnce();
                    for (let i = 0; i < A.childCount(); i++) {
                        if (A.child(i).desc() != null && A.child(i).desc() == "关注") {
                            A.child(i).click();
                            return A.child(i).desc();
                            break;
                        }
                    }
                }
            } catch (e) {
                log(e);
            }
        },
        Zhuanfa: function() {
            try {
                if (className("android.webkit.WebView").desc("用户任务中心").findOnce() != null) {
                    let A = className("android.webkit.WebView").desc("用户任务中心").findOnce();
                    for (let i = 0; i < A.childCount(); i++) {
                        if (A.child(i).desc() != null && A.child(i).desc() == "转发") {
                            A.child(i).click();
                            return A.child(i).desc();
                            break;
                        }
                    }
                }
            } catch (e) {
                log(e);
            }
        },
        Pinglun: function() {
            try {
                if (className("android.webkit.WebView").desc("用户任务中心").findOnce() != null) {
                    let A = className("android.webkit.WebView").desc("用户任务中心").findOnce();
                    for (let i = 0; i < A.childCount(); i++) {
                        if (A.child(i).desc() != null && A.child(i).desc() == "评论") {
                            A.child(i).click();
                            return A.child(i).desc();
                            break;
                        }
                    }
                }
            } catch (e) {
                log(e);
            }
        },
        Faweibo: function() {
            try {
                if (className("android.webkit.WebView").desc("用户任务中心").findOnce() != null) {
                    let A = className("android.webkit.WebView").desc("用户任务中心").findOnce();
                    for (let i = 0; i < A.childCount(); i++) {
                        if (A.child(i).desc() != null && A.child(i).desc() == "发微博") {
                            A.child(i).click();
                            return A.child(i).desc();
                            break;
                        }
                    }
                }
            } catch (e) {
                log(e);
            }
        },
        Dianzan: function() {
            try {
                if (className("android.webkit.WebView").desc("用户任务中心").findOnce() != null) {
                    let A = className("android.webkit.WebView").desc("用户任务中心").findOnce();
                    for (let i = 0; i < A.childCount(); i++) {
                        if (A.child(i).desc() != null && A.child(i).desc() == "点赞") {
                            A.child(i).click();
                            return A.child(i).desc();
                            break;
                        }
                    }
                }
            } catch (e) {
                log(e);
            }
        }
    }

    function Guanzhu() {
        toastLog("已尝试点击“关注”任务按钮");
        sleep(2000);
        while (text("加载中").findOnce() != null) {
            toastLog("正在等待“关注列表”加载……");
            sleep(2000);
        }
        if (id("titleText").findOnce() != null) {
            if (id("titleText").findOnce().text() == "关注") {
                toastLog("已处于“关注列表”");
                sleep(3000);
                if (id("com.sina.weibo:id/numbertext").findOnce() != null) {
                    var Gduo = id("com.sina.weibo:id/numbertext").findOnce().bounds();
                    click(Gduo.centerX(), Gduo.centerY());
                    toastLog("已尝试点击“更多关注”按钮");
                    sleep(4000);
                    if (text("关注").findOnce() != null) {
                        var GZZ = text("关注").findOnce().bounds();
                        click(GZZ.centerX(), GZZ.centerY());
                        toastLog("已尝试点击“关注”按钮");
                        sleep(3000);
                        if (text("已关注").findOnce() != null) {
                            var QXGZ = text("已关注").findOnce().bounds();
                            click(QXGZ.centerX(), QXGZ.centerY());
                            toastLog("已尝试点击“已关注”按钮");
                            sleep(3000);
                            if (className("android.widget.TextView").text("已关注").findOnce() != null) {
                                var Aqg = className("android.widget.TextView").text("已关注").findOnce().bounds();
                                click(Aqg.centerX(), Aqg.centerY());
                                toastLog("已尝试点击“已关注菜单”按钮");
                                sleep(2000);
                                if (className("android.widget.TextView").text("取消关注").findOnce() != null) {
                                    var QG = className("android.widget.TextView").text("取消关注").findOnce().bounds();
                                    click(QG.centerX(), QG.centerY());
                                    toastLog("已尝试点击“取消关注”按钮");
                                    sleep(2000);
                                    if (className("android.widget.TextView").text("确定").findOnce() != null) {
                                        className("android.widget.TextView").text("确定").findOnce().click();
                                        toastLog("已尝试点击“确定取消关注”按钮");
                                        sleep(2000);
                                    }
                                }
                            }
                        }
                    }
                } else if (className("android.view.ViewGroup").clickable(true).findOne(8000) != null) {
                    className("android.view.ViewGroup").clickable(true).findOne(8000).child(2).click()
                    sleep(2000);
                    toastLog("已尝试点击“关注”按钮");
                    if (className("android.view.ViewGroup").clickable(true).findOne(8000).child(2).child(0).text() == "已关注") {
                        var A = className("android.view.ViewGroup").clickable(true).findOne(8000).child(2).child(0).bounds();
                        click(A.centerX(), A.centerY());
                        toastLog("已尝试点击“已关注”按钮");
                        sleep(3000);
                        if (className("android.widget.TextView").text("已关注").findOnce() != null) {
                            var Aqg = className("android.widget.TextView").text("已关注").findOnce().bounds();
                            click(Aqg.centerX(), Aqg.centerY());
                            toastLog("已尝试点击“已关注菜单”按钮");
                            sleep(2000);
                            if (className("android.widget.TextView").text("取消关注").findOnce() != null) {
                                var QG = className("android.widget.TextView").text("取消关注").findOnce().bounds();
                                click(QG.centerX(), QG.centerY());
                                toastLog("已尝试点击“取消关注”按钮");
                                sleep(2000);
                                if (className("android.widget.TextView").text("确定").findOnce() != null) {
                                    className("android.widget.TextView").text("确定").findOnce().click();
                                    toastLog("已尝试点击“确定取消关注”按钮");
                                    sleep(2000);
                                }
                            }
                        }
                    }
                }
            } else {
                var CW = id("titleText").findOnce().text();
                toastLog("处于错误的界面:" + CW + "，即将重新进入活动…");
                sleep(2000);
            }
        } else {
            toastLog("未找到微博顶栏标题，即将重新进入活动…");
            sleep(2000);
        }
    }
    var ZhuanfaT = 1;

    function Zhuanfa() {
        toastLog("已尝试点击“转发”任务按钮");
        sleep(1000);
        while (text("加载中").findOnce() != null) {
            toastLog("正在等待“转发列表”加载……");
            sleep(2000);
        }
        if (id("titleText").findOnce() != null) {
            if (id("titleText").findOnce().text() == "热门微博") {
                toastLog("已处于“转发列表”");
                sleep(2000);
                if (id("com.sina.weibo:id/leftButton").findOnce() != null) {
                    id("com.sina.weibo:id/leftButton").findOnce().click();
                    toastLog("已尝试点击“左转”按钮");
                    sleep(2000);
                    if (id("com.sina.weibo:id/forward_edit").findOnce() != null) {
                        id("com.sina.weibo:id/forward_edit").findOnce().click();
                        toastLog("已尝试点击“转发编辑”按钮");
                        sleep(2000);
                        if (id("com.sina.weibo:id/titleText").findOnce() != null) {
                            if (id("com.sina.weibo:id/titleText").findOnce().text() == "转发微博") {
                                setText("转发微博（Waiting For Delete &" + ZhuanfaT + ")");
                                sleep(1000);
                                var Fs = id("com.sina.weibo:id/titleSave").findOne().bounds();
                                click(Fs.centerX(), Fs.centerY());
                                toastLog("已尝试点击“发送”按钮");
                                sleep(2000);
                                ZhuanfaT++;
                            }
                        }
                    }
                }
            } else {
                var CW = id("titleText").findOnce().text();
                toastLog("处于错误的界面:" + CW + "，即将重新进入活动…");
                sleep(2000);
            }
        } else {
            toastLog("未找到微博顶栏标题，即将重新进入活动…");
            sleep(2000);
        }
    }

    function Pinglun() {
        toastLog("已尝试点击“评论”任务按钮");
        sleep(1000);
        while (text("加载中").findOnce() != null) {
            toastLog("正在等待“评论列表”加载……");
            sleep(2000);
        }
        if (id("titleText").findOnce() != null) {
            if (id("titleText").findOnce().text() == "热门微博") {
                toastLog("已处于“评论列表”");
                sleep(2000);
                if (id("contentTextView").findOnce() != null) {
                    var AS = id("contentTextView").findOnce().bounds();
                    click(AS.centerX(), AS.centerY());
                    toastLog("已尝试点击“微博正文”");
                    sleep(3000);
                    if (id("tvButton").text("评论").findOnce() != null) {
                        toastLog("已找到微博正文“评论按钮”");
                        var Pl = id("tvButton").text("评论").findOnce().bounds();
                        click(Pl.centerX(), Pl.centerY());
                        toastLog("已尝试点击微博正文“评论按钮”");
                        sleep(2000);
                        if (text("由于对方的设置，你需要先关注他，才能评论。").findOnce() != null) {
                            if (className("android.widget.TextView").text("加关注").findOnce() != null) {
                                className("android.widget.TextView").text("加关注").findOnce().click();
                                toastLog("已尝试加关注此账号");
                                sleep(2000);
                                if (id("com.sina.weibo:id/element_editbox").findOnce() != null) {
                                    toastLog("已找到“评论框”");
                                    setText("CommentTest");
                                    sleep(1000);
                                    id("com.sina.weibo:id/tv_send").findOnce().click();
                                    toastLog("已尝试点击“发送评论”按钮");
                                    sleep(2000);
                                    if (id("com.sina.weibo:id/tvItemCmtContent").text("CommentTest").findOnce() != null) {
                                        var PL = id("com.sina.weibo:id/tvItemCmtContent").text("CommentTest").findOnce().bounds();
                                        click(PL.centerX(), PL.centerY());
                                        toastLog("已尝试点击要删除的任务评论");
                                        sleep(2000);
                                        if (className("android.widget.TextView").text("删除").findOnce() != null) {
                                            className("android.widget.TextView").text("删除").findOnce().click();
                                            toastLog("已尝试点击删除“任务评论”");
                                            sleep(2000);
                                            if (className("android.widget.TextView").text("确定").findOnce() != null) {
                                                className("android.widget.TextView").text("确定").findOnce().click();
                                                toastLog("已尝试点击确定删除“任务评论”");
                                                sleep(2000);
                                                if (id("detail_activity_header_avatar").findOnce() != null) {
                                                    id("detail_activity_header_avatar").findOnce().parent().click();
                                                    toastLog("已尝试点击顶栏账号标题");
                                                    sleep(2000);
                                                    if (className("android.widget.TextView").text("已关注").findOnce() != null) {
                                                        var Aqg = className("android.widget.TextView").text("已关注").findOnce().bounds();
                                                        click(Aqg.centerX(), Aqg.centerY());
                                                        toastLog("已尝试点击“已关注菜单”按钮");
                                                        sleep(3000);
                                                        if (className("android.widget.TextView").text("取消关注").findOnce() != null) {
                                                            var QG = className("android.widget.TextView").text("取消关注").findOnce().bounds();
                                                            click(QG.centerX(), QG.centerY());
                                                            toastLog("已尝试点击“取消关注”按钮");
                                                            sleep(2000);
                                                            if (className("android.widget.TextView").text("确定").findOnce() != null) {
                                                                className("android.widget.TextView").text("确定").findOnce().click();
                                                                toastLog("已尝试点击“确定取消关注”按钮");
                                                                sleep(2000);
                                                            }
                                                        }
                                                    }

                                                }
                                            }
                                        }
                                    }
                                }
                            }

                        } else if (id("com.sina.weibo:id/element_editbox").findOnce() != null) {
                            toastLog("已找到“评论框”");
                            setText("CommentTest");
                            sleep(1000);
                            id("com.sina.weibo:id/tv_send").findOnce().click();
                            toastLog("已尝试点击“发送评论”按钮");
                            sleep(2000);
                            if (text("由于对方的设置，你需要先关注他，才能评论。").findOnce() != null) {
                                if (className("android.widget.TextView").text("加关注").findOnce() != null) {
                                    className("android.widget.TextView").text("加关注").findOnce().click();
                                    toastLog("已尝试加关注此账号");
                                    sleep(2000);
                                    if (id("com.sina.weibo:id/tvItemCmtContent").text("CommentTest").findOnce() != null) {
                                        var PL = id("com.sina.weibo:id/tvItemCmtContent").text("CommentTest").findOnce().bounds();
                                        click(PL.centerX(), PL.centerY());
                                        toastLog("已尝试点击要删除的任务评论");
                                        sleep(2000);
                                        if (className("android.widget.TextView").text("删除").findOnce() != null) {
                                            className("android.widget.TextView").text("删除").findOnce().click();
                                            toastLog("已尝试点击删除“任务评论”");
                                            sleep(2000);
                                            if (className("android.widget.TextView").text("确定").findOnce() != null) {
                                                className("android.widget.TextView").text("确定").findOnce().click();
                                                toastLog("已尝试点击确定删除“任务评论”");
                                                sleep(2000);
                                                if (id("detail_activity_header_avatar").findOnce() != null) {
                                                    id("detail_activity_header_avatar").findOnce().parent().click();
                                                    toastLog("已尝试点击顶栏账号标题");
                                                    sleep(2000);
                                                    if (className("android.widget.TextView").text("已关注").findOnce() != null) {
                                                        var Aqg = className("android.widget.TextView").text("已关注").findOnce().bounds();
                                                        click(Aqg.centerX(), Aqg.centerY());
                                                        toastLog("已尝试点击“已关注菜单”按钮");
                                                        sleep(2000);
                                                        if (className("android.widget.TextView").text("取消关注").findOnce() != null) {
                                                            var QG = className("android.widget.TextView").text("取消关注").findOnce().bounds();
                                                            click(QG.centerX(), QG.centerY());
                                                            toastLog("已尝试点击“取消关注”按钮");
                                                            sleep(2000);
                                                            if (className("android.widget.TextView").text("确定").findOnce() != null) {
                                                                className("android.widget.TextView").text("确定").findOnce().click();
                                                                toastLog("已尝试点击“确定取消关注”按钮");
                                                                sleep(2000);
                                                            }
                                                        }
                                                    }

                                                }
                                            }
                                        }
                                    }
                                }
                            } else if (id("com.sina.weibo:id/tvItemCmtContent").text("CommentTest").findOnce() != null) {
                                var PL = id("com.sina.weibo:id/tvItemCmtContent").text("CommentTest").findOnce().bounds();
                                click(PL.centerX(), PL.centerY());
                                toastLog("已尝试点击要删除的任务评论");
                                sleep(2000);
                                if (className("android.widget.TextView").text("删除").findOnce() != null) {
                                    className("android.widget.TextView").text("删除").findOnce().click();
                                    toastLog("已尝试点击删除“任务评论”");
                                    sleep(2000);
                                    if (className("android.widget.TextView").text("确定").findOnce() != null) {
                                        className("android.widget.TextView").text("确定").findOnce().click();
                                        toastLog("已尝试点击确定删除“任务评论”");
                                        sleep(2000);
                                        toastLog("已成功完成一次评论任务，正在尝试返回活动界面");
                                    }
                                }
                            } else {
                                toastLog("未找到发送的评论，尝试下拉刷新…");
                                swipe(device.width / 2, device.height / 2, device.width / 2, device.height, 500);
                                sleep(3000);
                                if (id("com.sina.weibo:id/tvItemCmtContent").text("CommentTest").findOnce() != null) {
                                    var PL = id("com.sina.weibo:id/tvItemCmtContent").text("CommentTest").findOnce().bounds();
                                    click(PL.centerX(), PL.centerY());
                                    toastLog("已尝试点击要删除的任务评论");
                                    sleep(2000);
                                    if (className("android.widget.TextView").text("删除").findOnce() != null) {
                                        className("android.widget.TextView").text("删除").findOnce().click();
                                        toastLog("已尝试点击删除“任务评论”");
                                        sleep(2000);
                                        if (className("android.widget.TextView").text("确定").findOnce() != null) {
                                            className("android.widget.TextView").text("确定").findOnce().click();
                                            toastLog("已尝试点击确定删除“任务评论”");
                                            sleep(2000);
                                            toastLog("已成功完成一次评论任务，正在尝试返回活动界面");
                                        }
                                    }
                                }
                            }
                        } else {
                            PlWhile++;
                        }
                    }
                }
            } else {
                var CW = id("titleText").findOnce().text();
                toastLog("处于错误的界面:" + CW + "，即将重新进入活动…");
                sleep(2000);
            }
        } else {
            toastLog("未找到微博顶栏标题，即将重新进入活动…");
            sleep(2000);
        }
    }

    function Faweibo() {
        toastLog("已尝试点击“发微博”任务按钮");
        sleep(1000);
        while (text("加载中").findOnce() != null) {
            toastLog("正在等待“发微博”加载……");
            sleep(2000);
        }
        if (id("titleText").findOnce() != null) {
            if (id("titleText").findOnce().text() == "发微博") {
                toastLog("已处于“发微博”页面");
                sleep(2000);
                if (Sendtime == null) {
                    var Sendtime = 1;
                } else {
                    Sendtime++;
                }
                setText("TestWeibo：" + Sendtime);
                sleep(1000);
                if (id("com.sina.weibo:id/titleSave").findOnce() != null) {
                    var FS = id("com.sina.weibo:id/titleSave").findOnce().bounds();
                    click(FS.centerX(), FS.centerY());
                    toastLog("已尝试点击“发送”按钮");
                    sleep(2000);
                }
            } else {
                var CW = id("titleText").findOnce().text();
                toastLog("处于错误的界面:" + CW + "，即将重新进入活动…");
                sleep(2000);
            }
        } else {
            toastLog("未找到微博顶栏标题，即将重新进入活动…");
            sleep(2000);
        }
    }

    function Dianzan() {
        sleep(1000);
        while (text("加载中").findOnce() != null) {
            toastLog("正在等待“点赞界面”加载……");
            sleep(2000);
        }
        if (id("titleText").findOnce() != null) {
            if (id("titleText").findOnce().text() == "热门微博") {
                toastLog("已处于“点赞”页面");
                sleep(2000);
                if (id("com.sina.weibo:id/rightButton").findOnce() != null) {
                    id("com.sina.weibo:id/rightButton").findOnce().click();
                    toastLog("已尝试点击“点赞按钮”");
                    sleep(2000);
                }
            } else {
                var CW = id("titleText").findOnce().text();
                toastLog("处于错误的界面:" + CW + "，即将重新进入活动…");
                sleep(2000);
            }
        } else {
            toastLog("未找到微博顶栏标题，即将重新进入活动…");
            sleep(2000);
        }
    }
    var i = 0;
    var twice = null;
    while (true) {
        if (className("android.webkit.WebView").desc("用户任务中心").findOnce() != null &&
            className("android.webkit.WebView").desc("用户任务中心").findOnce().childCount() > 1 &&
            className("android.webkit.WebView").desc("用户任务中心").findOnce().child(1).childCount() > 0 &&
            className("android.webkit.WebView").desc("用户任务中心").findOnce().child(1).child(0).childCount() > 3 &&
            className("android.webkit.WebView").desc("用户任务中心").findOnce().child(1).child(0).child(3).childCount() > 5 &&
            className("android.webkit.WebView").desc("用户任务中心").findOnce().child(1).child(0).child(3).child(0).desc() != null &&
            className("android.webkit.WebView").desc("用户任务中心").findOnce().child(1).child(0).child(3).child(0).desc() == "日常任务") {
            var A = className("android.webkit.WebView").desc("用户任务中心").findOnce().child(1).child(0).child(3);
            var Rwmodel = "顺序";
        } else if (className("android.webkit.WebView").text("用户任务中心").findOnce() != null &&
            className("android.webkit.WebView").text("用户任务中心").findOnce().childCount() > 1 &&
            className("android.webkit.WebView").text("用户任务中心").findOnce().child(1).childCount() > 0 &&
            className("android.webkit.WebView").text("用户任务中心").findOnce().child(1).child(0).childCount() > 2 &&
            className("android.webkit.WebView").text("用户任务中心").findOnce().child(1).child(0).child(2).childCount() > 1 &&
            className("android.webkit.WebView").text("用户任务中心").findOnce().child(1).child(0).child(2).child(1).childCount() > 5 &&
            className("android.webkit.WebView").text("用户任务中心").findOnce().child(1).child(0).child(2).child(1).child(0).childCount() > 1 &&
            className("android.webkit.WebView").text("用户任务中心").findOnce().child(1).child(0).child(2).child(1).child(0).child(1).desc() != null &&
            className("android.webkit.WebView").text("用户任务中心").findOnce().child(1).child(0).child(2).child(1).child(0).child(1).desc() == "日常任务" ||
            className("android.webkit.WebView").text("用户任务中心").findOnce() != null &&
            className("android.webkit.WebView").text("用户任务中心").findOnce().childCount() > 1 &&
            className("android.webkit.WebView").text("用户任务中心").findOnce().child(1).childCount() > 0 &&
            className("android.webkit.WebView").text("用户任务中心").findOnce().child(1).child(0).childCount() > 2 &&
            className("android.webkit.WebView").text("用户任务中心").findOnce().child(1).child(0).child(2).childCount() > 1 &&
            className("android.webkit.WebView").text("用户任务中心").findOnce().child(1).child(0).child(2).child(1).childCount() > 5 &&
            className("android.webkit.WebView").text("用户任务中心").findOnce().child(1).child(0).child(2).child(1).child(0).childCount() > 1 &&
            className("android.webkit.WebView").text("用户任务中心").findOnce().child(1).child(0).child(2).child(1).child(0).child(1).text() == "日常任务") {
            var A = className("android.webkit.WebView").text("用户任务中心").findOnce().child(1).child(0).child(2).child(1);
            var Rwmodel = "顺序";
        } else if (className("android.webkit.WebView").text("用户任务中心").findOnce() != null &&
            className("android.webkit.WebView").text("用户任务中心").findOnce().childCount() > 1 &&
            className("android.webkit.WebView").text("用户任务中心").findOnce().child(1).childCount() > 0 &&
            className("android.webkit.WebView").text("用户任务中心").findOnce().child(1).child(0).childCount() > 2 &&
            className("android.webkit.WebView").text("用户任务中心").findOnce().child(1).child(0).child(2).childCount() > 2 &&
            className("android.webkit.WebView").text("用户任务中心").findOnce().child(1).child(0).child(2).child(2).childCount() > 0 &&
            className("android.webkit.WebView").text("用户任务中心").findOnce().child(1).child(0).child(2).child(2).child(0).childCount() > 1 &&
            className("android.webkit.WebView").text("用户任务中心").findOnce().child(1).child(0).child(2).child(2).child(0).child(1).desc() != null &&
            className("android.webkit.WebView").text("用户任务中心").findOnce().child(1).child(0).child(2).child(2).child(0).child(1).desc() == "日常任务" ||
            className("android.webkit.WebView").text("用户任务中心").findOnce() != null &&
            className("android.webkit.WebView").text("用户任务中心").findOnce().childCount() > 1 &&
            className("android.webkit.WebView").text("用户任务中心").findOnce().child(1).childCount() > 0 &&
            className("android.webkit.WebView").text("用户任务中心").findOnce().child(1).child(0).childCount() > 2 &&
            className("android.webkit.WebView").text("用户任务中心").findOnce().child(1).child(0).child(2).childCount() > 2 &&
            className("android.webkit.WebView").text("用户任务中心").findOnce().child(1).child(0).child(2).child(2).childCount() > 0 &&
            className("android.webkit.WebView").text("用户任务中心").findOnce().child(1).child(0).child(2).child(2).child(0).childCount() > 1 &&
            className("android.webkit.WebView").text("用户任务中心").findOnce().child(1).child(0).child(2).child(2).child(0).child(1).text() == "日常任务") {
            var A = className("android.webkit.WebView").text("用户任务中心").findOnce().child(1).child(0).child(2).child(2);
            var Rwmodel = "顺序";
        } else if (className("android.webkit.WebView").text("用户任务中心").findOnce() != null &&
            className("android.webkit.WebView").text("用户任务中心").findOnce().child(0).childCount() > 1 &&
            className("android.webkit.WebView").text("用户任务中心").findOnce().child(0).child(1).childCount() > 0 &&
            className("android.webkit.WebView").text("用户任务中心").findOnce().child(0).child(1).child(0).childCount() > 3 &&
            className("android.webkit.WebView").text("用户任务中心").findOnce().child(0).child(1).child(0).child(3).childCount() > 0 &&
            className("android.webkit.WebView").text("用户任务中心").findOnce().child(0).child(1).child(0).child(3).child(0).childCount() > 1 &&
            className("android.webkit.WebView").text("用户任务中心").findOnce().child(0).child(1).child(0).child(3).child(0).child(1).text() == "日常任务") {
            var A = className("android.webkit.WebView").text("用户任务中心").findOnce().child(0).child(1).child(0).child(3);
            var Rwmodel = "顺序";
        } else if (WhatIsThis() == "日常任务") {
            toastLog("以遍历“日常任务”模式运行");
            var Rwmodel = "遍历日常任务";
        } else {
            console.warn("当前活动：" + currentActivity() + "，当前包名：" + currentPackage() + "当前应用名：" + getAppName(currentPackage()));
            toastLog("当前未处于“任务中心”界面，正在重新尝试打开ddd");
            OpeninHd();
            DoTask();
            break;
        }
        if (Rwmodel == "顺序" && i >= A.childCount() && twice == true) {
            break;
        } else if (Rwmodel == "顺序" && i >= A.childCount()) {
            var i = 0;
            var twice = true;
            toastLog("首次遍历已完成，正在进行二次任务遍历");
            sleep(2000);
        } else if (Rwmodel == "顺序" && A.childCount() > i &&
            A.child(i).childCount() > 3 &&
            A.child(i).child(3).desc() != null &&
            A.child(i).child(3).desc().search("领取") >= 0 &&
            A.child(i).child(3).desc().search("积分") >= 0 ||
            A.childCount() > i &&
            A.child(i).childCount() > 3 &&
            A.child(i).child(3).desc() != null &&
            A.child(i).child(3).desc().search("领") >= 0 &&
            A.child(i).child(3).desc().search("元") >= 0) {
            A.child(i).child(3).click();
            toastLog("已尝试盲点“" + A.child(i).child(3).desc() + "”按钮");
            sleep(3000);
        } else if (Rwmodel == "顺序" && A.childCount() > i &&
            A.child(i).childCount() > 3 &&
            A.child(i).child(3).text() != null &&
            A.child(i).child(3).text().search("领取") >= 0 &&
            A.child(i).child(3).text().search("积分") >= 0 ||
            A.childCount() > i &&
            A.child(i).childCount() > 3 &&
            A.child(i).child(3).text() != null &&
            A.child(i).child(3).text().search("领") >= 0 &&
            A.child(i).child(3).text().search("元") >= 0) {
            A.child(i).child(3).click();
            toastLog("已尝试盲点“" + A.child(i).child(3).text() + "”按钮");
            sleep(3000);
        } else if (Rwmodel == "顺序" && A.childCount() > i &&
            A.child(i).childCount() > 2 &&
            A.child(i).child(2).desc() != null &&
            A.child(i).child(2).desc().search("领取") >= 0 &&
            A.child(i).child(2).desc().search("积分") >= 0 ||
            A.childCount() > i &&
            A.child(i).childCount() > 2 &&
            A.child(i).child(2).desc() != null &&
            A.child(i).child(2).desc().search("领") >= 0 &&
            A.child(i).child(2).desc().search("元") >= 0) {
            A.child(i).child(2).click();
            toastLog("已尝试盲点“" + A.child(i).child(2).desc() + "”按钮");
            sleep(3000);
        } else if (Rwmodel == "顺序" && A.childCount() > i &&
            A.child(i).childCount() > 1 &&
            A.child(i).child(1).desc() != null &&
            A.child(i).child(1).desc().search("领取") >= 0 &&
            A.child(i).child(1).desc().search("积分") >= 0 ||
            A.childCount() > i &&
            A.child(i).childCount() > 1 &&
            A.child(i).child(1).desc() != null &&
            A.child(i).child(1).desc().search("领") >= 0 &&
            A.child(i).child(1).desc().search("元") >= 0) {
            A.child(i).child(1).click();
            toastLog("已尝试盲点“" + A.child(i).child(1).text() + "”按钮");
            sleep(3000);
        } else if (FindKJ.lingQu() != null) {
            sleep(3000);
        } else if (Rwmodel == "顺序" && A.childCount() > i &&
            A.child(i).childCount() > 3 &&
            A.child(i).child(3).text() != null &&
            A.child(i).child(3).text() == "关注" ||
            Rwmodel == "顺序" && A.childCount() > i &&
            A.child(i).childCount() > 3 &&
            A.child(i).child(3).desc() != null &&
            A.child(i).child(3).desc() == "关注") {
            A.child(i).child(3).click();
            Guanzhu();
        } else if (Rwmodel == "顺序" && A.childCount() > i &&
            A.child(i).childCount() > 2 &&
            A.child(i).child(2).desc() != null &&
            A.child(i).child(2).desc() == "关注") {
            A.child(i).child(2).click();
            Guanzhu();
        } else if (Rwmodel == "顺序" && A.childCount() > i &&
            A.child(i).childCount() > 1 &&
            A.child(i).child(1).text() != null &&
            A.child(i).child(1).text() == "关注") {
            A.child(i).child(1).click();
            Guanzhu();
        } else if (FindKJ.Guanzhu() == "关注") {
            Guanzhu();
        } else if (Rwmodel == "顺序" && A.childCount() > i &&
            A.child(i).childCount() > 3 &&
            A.child(i).child(3).desc() != null &&
            A.child(i).child(3).desc() == "转发" ||
            Rwmodel == "顺序" && A.childCount() > i &&
            A.child(i).childCount() > 3 &&
            A.child(i).child(3).text() != null &&
            A.child(i).child(3).text() == "转发") {
            A.child(i).child(3).click();
            Zhuanfa();
        } else if (Rwmodel == "顺序" && A.childCount() > i &&
            A.child(i).childCount() > 2 &&
            A.child(i).child(2).desc() != null &&
            A.child(i).child(2).desc() == "转发") {
            A.child(i).child(2).click();
            Zhuanfa();
        } else if (Rwmodel == "顺序" && A.childCount() > i &&
            A.child(i).childCount() > 1 &&
            A.child(i).child(1).text() != null &&
            A.child(i).child(1).text() == "转发") {
            A.child(i).child(1).click();
            Zhuanfa();
        } else if (FindKJ.Zhuanfa() == "转发") {
            Zhuanfa();
        } else if (Rwmodel == "顺序" && A.childCount() > i &&
            A.child(i).childCount() > 3 &&
            A.child(i).child(3).desc() != null &&
            A.child(i).child(3).desc() == "评论" ||
            Rwmodel == "顺序" && A.childCount() > i &&
            A.child(i).childCount() > 3 &&
            A.child(i).child(3).text() != null &&
            A.child(i).child(3).text() == "评论") {
            A.child(i).child(3).click();
            Pinglun();
        } else if (Rwmodel == "顺序" && A.childCount() > i &&
            A.child(i).childCount() > 2 &&
            A.child(i).child(2).desc() != null &&
            A.child(i).child(2).desc() == "评论") {
            A.child(i).child(2).click();
            Pinglun();
        } else if (Rwmodel == "顺序" && A.childCount() > i &&
            A.child(i).childCount() > 1 &&
            A.child(i).child(1).text() != null &&
            A.child(i).child(1).text() == "评论") {
            A.child(i).child(1).click();
            Pinglun();
        } else if (FindKJ.Pinglun() == "评论") {
            Pinglun();
        } else if (Rwmodel == "顺序" && A.childCount() > i &&
            A.child(i).childCount() > 3 &&
            A.child(i).child(3).desc() != null &&
            A.child(i).child(3).desc() == "发微博" ||
            Rwmodel == "顺序" && A.childCount() > i &&
            A.child(i).childCount() > 3 &&
            A.child(i).child(3).text() != null &&
            A.child(i).child(3).text() == "发微博") {
            A.child(i).child(3).click();
            Faweibo();
        } else if (Rwmodel == "顺序" && A.childCount() > i &&
            A.child(i).childCount() > 2 &&
            A.child(i).child(2).desc() != null &&
            A.child(i).child(2).desc() == "发微博") {
            A.child(i).child(2).click();
            Faweibo();
        } else if (Rwmodel == "顺序" && A.childCount() > i &&
            A.child(i).childCount() > 1 &&
            A.child(i).child(1).text() != null &&
            A.child(i).child(1).text() == "发微博") {
            A.child(i).child(1).click();
            Faweibo();
        } else if (FindKJ.Faweibo() == "发微博") {
            Faweibo();
        } else if (Rwmodel == "顺序" && A.childCount() > i &&
            A.child(i).childCount() > 3 &&
            A.child(i).child(3).desc() != null &&
            A.child(i).child(3).desc() == "点赞" ||
            Rwmodel == "顺序" && A.childCount() > i &&
            A.child(i).childCount() > 3 &&
            A.child(i).child(3).text() != null &&
            A.child(i).child(3).text() == "点赞") {
            A.child(i).child(3).click();
            toastLog("已尝试点击“点赞”任务按钮");
            Dianzan();
        } else if (Rwmodel == "顺序" && A.childCount() > i &&
            A.child(i).childCount() > 2 &&
            A.child(i).child(2).desc() != null &&
            A.child(i).child(2).desc() == "点赞") {
            A.child(i).child(2).click();
            toastLog("已尝试点击“点赞”任务按钮");
            Dianzan();
        } else if (Rwmodel == "顺序" && A.childCount() > i &&
            A.child(i).childCount() > 1 &&
            A.child(i).child(1).text() != null &&
            A.child(i).child(1).text() == "点赞") {
            A.child(i).child(1).click();
            toastLog("已尝试点击“点赞”任务按钮");
            Dianzan();
        } else if (FindKJ.Dianzan() == "点赞") {
            Dianzan();
        } else if (Rwmodel == "顺序") {
            i++;
        }
        OpeninHd();
    }
    //删除 转发&发送 的任务微博
    while (true) {
        if (className("android.view.ViewGroup").desc("我").findOnce() != null && className("android.widget.ImageView").clickable(true).id("com.sina.weibo:id/story_shoot_auth_exit").findOnce() == null) {
            toastLog("已处于微博主页");
            sleep(2000);
            break;
        } else if (className("android.widget.FrameLayout").desc("我").findOnce() != null && className("android.widget.ImageView").clickable(true).id("com.sina.weibo:id/story_shoot_auth_exit").findOnce() == null) {
            toastLog("已处于微博主页");
            sleep(2000);
            break;
        } else if (className("android.view.ViewGroup").desc("我").findOnce() != null && className("android.widget.ImageView").clickable(true).id("com.sina.weibo:id/story_shoot_auth_exit").findOnce() == null) {
            className("android.widget.ImageView").clickable(true).id("com.sina.weibo:id/story_shoot_auth_exit").findOnce().click();
            toastLog("已尝试点击关闭“微博故事”按钮");
            sleep(2000);
        } else if (currentPackage() != "com.sina.weibo") {
            app.startActivity({
                action: "android.intent.action.MAIN",
                packageName: "com.sina.weibo",
                className: "com.sina.weibo.SplashActivity",
                category: ["android.intent.category.LAUNCHER"],
                flags: ["activity_new_task"]
            });
            toastLog("正在等待微博APP启动至主页……");
            sleep(2000);
        } else {
            if (className("android.widget.ImageView").clickable(true).desc("返回").findOnce() != null) {
                className("android.widget.ImageView").clickable(true).desc("返回").findOnce().click();
                toastLog("已尝试盲点“返回按钮”");
                sleep(2000);
            } else if (className("android.widget.TextView").desc("返回").findOnce() != null && className("android.widget.TextView").desc("返回").findOnce().parent().parent().clickable() == true) {
                className("android.widget.TextView").desc("返回").findOnce().parent().parent().click();
                toastLog("已尝试盲点父级“返回按钮”");
                sleep(2000);
            } else if (id("com.sina.weibo:id/titleLeft").className("android.widget.TextView").clickable(true).findOnce() != null) {
                id("com.sina.weibo:id/titleLeft").className("android.widget.TextView").clickable(true).findOnce().click();
                toastLog("已尝试盲点左关闭按钮，重试中……");
                sleep(2000);
            } else {
                Justback();
                sleep(1000);
            }
        }
    }
    if (className("android.view.ViewGroup").desc("我").findOnce() != null || className("android.widget.FrameLayout").desc("我").findOne() != null) {
        if (className("android.view.ViewGroup").desc("我").findOnce() != null) {
            className("android.view.ViewGroup").desc("我").findOnce().click();
        } else if (className("android.widget.FrameLayout").desc("我").findOne() != null) {
            className("android.widget.FrameLayout").desc("我").findOnce().click();
        }
        toastLog("已尝试点击主页“我”按钮");
        while (text("加载中").findOnce() != null) {
            toastLog("正在等待“我的微博”加载……");
            sleep(2000);
        }
        sleep(2000);
        if (id("com.sina.weibo:id/cabWeibo").findOnce() != null) {
            id("com.sina.weibo:id/cabWeibo").findOnce().click();
            toastLog("已尝试点击“我的微博”按钮");
            sleep(3000);
            var WhileX = 1;
            while (WhileX == 1) {
                if (id("com.sina.weibo:id/lySearchInput").findOnce() != null) {
                    toastLog("已进入“我的微博”界面");
                    sleep(2000);
                    var WhileX = 0;
                } else if (id("com.sina.weibo:id/lable").text("暂无微博").findOnce() != null) {
                    toastLog("已找到“暂无微博”提示");
                    var WhileX = 0;
                } else if (desc("暂无微博").findOnce() != null) {
                    toastLog("已找到“暂无微博”提示");
                    var WhileX = 0;
                } else {
                    toastLog("正在等待“我的微博”界面加载…");
                    sleep(2000);
                }
            }
            var While = 1;
            var Xb = 0;
            while (While == 1) {
                while (text("加载中").findOnce() != null) {
                    toastLog("正在等待“我的微博”加载……");
                    sleep(2000);
                }
                var X = id("com.sina.weibo:id/contentTextView").descContains("TestWeibo").findOnce();
                var XX = id("com.sina.weibo:id/contentTextView").descContains("Waiting For Delete &").findOnce();
                if (X != null) {
                    if (Xb == X.desc()) {
                        toastLog("重复点击，尝试滑动更新");
                        var Xc = X.parent();
                        var Xd = Xc.bounds();
                        swipe(Xd.centerX(), Xd.height(), Xd.centerX(), device.height, 500);
                        sleep(2000);
                    } else {
                        //发微博任务遗留微博
                        var Xa = X.bounds();
                        var Xb = X.desc();
                        click(Xa.centerX(), Xa.centerY());
                        toastLog("已尝试点击微博：" + Xb);
                        sleep(2000);
                        if (id("com.sina.weibo:id/detail_activity_header_right_button_text").findOnce() != null) {
                            var SC = id("com.sina.weibo:id/detail_activity_header_right_button_text").findOnce().bounds();
                            click(SC.centerX(), SC.centerY());
                            toastLog("已尝试点击“正文菜单”按钮");
                            sleep(2000);
                            if (id("com.sina.weibo:id/tv_dialog_item").text("删除").findOnce() != null) {
                                var Sc = id("com.sina.weibo:id/tv_dialog_item").text("删除").findOnce().bounds();
                                click(Sc.centerX(), Sc.centerY());
                                toastLog("已尝试点击“删除”按钮");
                                sleep(2000);
                                if (className("android.widget.TextView").text("确定").findOnce() != null) {
                                    className("android.widget.TextView").text("确定").findOnce().click();
                                    toastLog("已尝试点击“确定删除”按钮");
                                    sleep(2000);
                                }
                            }
                        }
                    }
                } else if (XX != null) {
                    if (Xb == XX.desc()) {
                        toastLog("重复点击，尝试滑动更新！");
                        var Xc = XX.parent();
                        var Xd = Xc.bounds();
                        swipe(Xd.centerX(), Xd.height(), Xd.centerX(), device.height, 500);
                        sleep(2000);
                    } else {
                        //转发微博任务遗留微博
                        var Xa = XX.bounds();
                        var Xb = XX.desc();
                        click(Xa.centerX(), Xa.centerY());
                        toastLog("已尝试点击微博：" + Xb);
                        sleep(2000);
                        if (id("com.sina.weibo:id/detail_activity_header_right_button_text").findOnce() != null) {
                            var SC = id("com.sina.weibo:id/detail_activity_header_right_button_text").findOnce().bounds();
                            click(SC.centerX(), SC.centerY());
                            toastLog("已尝试点击“正文菜单”按钮");
                            sleep(2000);
                            if (id("com.sina.weibo:id/tv_dialog_item").text("删除").findOnce() != null) {
                                var Sc = id("com.sina.weibo:id/tv_dialog_item").text("删除").findOnce().bounds();
                                click(Sc.centerX(), Sc.centerY());
                                toastLog("已尝试点击“删除”按钮");
                                sleep(2000);
                                if (className("android.widget.TextView").text("确定").findOnce() != null) {
                                    className("android.widget.TextView").text("确定").findOnce().click();
                                    toastLog("已尝试点击“确定删除”按钮");
                                    sleep(2000);
                                }
                            }
                        }
                    }
                } else {
                    var While = 0;
                    toastLog("当前已无任务遗留微博");
                    dialogs.alert("微博任务自动脚本：\n脚本已运行完成");
                    log("微博任务自动脚本：脚本已运行完成");
                    exit();
                }
            }
        }
    }
}

OpeninHd();
DoTask();