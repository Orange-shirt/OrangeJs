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

function getPackageVersion(packageName) {
    try {
        importPackage(android.content);
        var pckMan = context.getPackageManager();
        var packageInfo = pckMan.getPackageInfo(packageName, 0);
        return packageInfo.versionName;
    } catch (e) {
        dialogs.alert("您没有安装京东APP");
        exit();
    }
}
var InstalledVersion = getPackageVersion("com.jingdong.app.mall");
var SupportVersion = ["8.5.6", "8.5.4", "8.5.2", "8.5.1", "8.5.0", "8.4.6", "8.4.4"]

var Each = SupportVersion.length;
var While = 1;
while (While == 1) {
    if (Each < 0) {
        context_check = null;
        //判断是否选择了不再显示
        if (files.exists("/storage/emulated/0/OrangeJs/自动宠汪汪/不再显示.txt") != true) {
            dialogs.build({
                //对话框标题
                title: "当前京东APP版本未经测试",
                titleColor: "#F44336",
                contentLineSpacing: 1.2,
                //对话框内容
                content: "本脚本目前已测试的软件版本有：\n京东" + SupportVersion + "\n您当前安装的版本为：" + InstalledVersion + "\n如您使用没有问题可直接忽略\n若有问题可使用相应版本或反馈",
                //对话框文字颜色
                contentColor: "#777777",
                //确定键内容
                positive: "继续运行",
                positiveColor: "#388E3C",
                //取消键内容
                negative: "取消运行",
                negativeColor: "#D32F2F",
                //中性键内容
                neutral: "给作者反馈",
                neutralColor: "#616161",
                cancelable: false,
                canceledOnTouchOutside: false,
                //勾选框内容
                checkBoxPrompt: "能正常使用，不再提示"
            }).on("positive", () => {
                //监听确定键
                toast("继续运行脚本");
                if (context_check == 1) {
                    //创建文件
                    var NeverShow = files.createWithDirs("/storage/emulated/0/OrangeJs/自动宠汪汪/不再显示.txt");
                    if (NeverShow == false) {
                        dialogs.alert("设置不再显示失败！\n请授予本软件存储权限！");
                    }
                }
                engines.execScript("自动宠汪汪", "RunJs()\n" + RunJs.toString());
            }).on("neutral", () => {
                //监听中性键
                app.openUrl("https://wj.qq.com/s2/5238744/d982");
            }).on("negative", () => {
                //监听消极键
                exit();
            }).on("check", (checked) => {
                //监听勾选框
                log("勾选框状态：" + checked);
                if (checked == true) {
                    context_check = 1;
                    toastLog("请确保您当前软件的版本可以正常使用\n否则请不要勾选此按钮");
                } else {
                    context_check = null;
                }
            }).show();
        } else {
            engines.execScript("自动宠汪汪", "RunJs()\n" + RunJs.toString());
        }
        var While = 0;
    } else if (SupportVersion[Each] != InstalledVersion) {
        Each--;
    } else {
        var While = 0;
        log("已安装支持的软件版本：" + SupportVersion[Each]);
        engines.execScript("自动宠汪汪", "RunJs()\n" + RunJs.toString());
    }
}

function RunJs() {
    dialogs_js();
    var height = device.height;
    var width = device.width;

    var GJCwords = "宠汪汪" //京东搜索关键词
    function dialogs_js() {
        var ScriptVersion = ("Beta1.56"); //版本
        log("软件脚本已开始运行，如果没有弹出菜单请强行停止再打开本软件！");
        var options_ = ["▶️ 开始运行脚本", "🕒 计时运行脚本", "⏰ 定时运行脚本", "⏹ 停止运行脚本", "🔙 返回方法设置", "🔧 手动打开模式"]
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
            openJDinSearch();
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

    function openJDinSearch() {
        app.startActivity({
            action: "android.intent.action.VIEW", //此处可为其他值
            packageName: "com.jingdong.app.mall",
            className: "com.jingdong.app.mall.main.MainActivity"
            //此处可以加入其他内容，如data、extras
        });
        var deng = 5;
        for (deng == 5; deng > 0; deng--) {
            if (desc("分类").findOnce() != null) {
                toastLog("已处于京东主界面");
                var deng = 0;
                sleep(2000);
            } else {
                toastLog("正在打开京东中……\n等待缓冲剩余" + deng + "秒…");
                sleep(2000);
            }
        }
        A();
    }

    function A() {
        var A = desc("分类").findOnce();
        if (A != null) {
            var B = A.bounds();
            click(B.centerX(), B.centerY());
            sleep(2000);
        } else {
            if (desc("分类").findOnce() == null) {
                var While = 1;
            }
            while (While == 1) {
                toastLog("当前未处于京东主界面\n尝试返回京东主界面中……");
                Justback();
                sleep(2000);
                if (desc("分类").findOnce() != null && currentActivity() == "com.jingdong.app.mall.MainFrameActivity") {
                    var While = 0;
                    toastLog("已返回京东主界面");
                    sleep(2000);
                    openJDinSearch();
                }
            }
        }
        // var Ac=id("a3l").findOnce();
        //京东8.4.4
        var Ac = className("android.widget.TextView").id("com.jd.lib.category:id/a3l").findOnce();
        if (Ac != null) {
            var a = Ac.bounds();
            sleep(1000);
            click(a.centerX(), a.centerY());
            toastLog("已尝试点击“分类搜索框”");
            sleep(1000);
            if (id("com.jd.lib.search:id/a3o").findOnce() == null) {
                sleep(2000);
                if (id("com.jd.lib.search:id/a3o").findOnce() == null) {
                    sleep(2000);
                    if (id("com.jd.lib.search:id/a3o").findOnce() == null) {
                        openJDinSearch();
                    }
                }
            } else {
                toastLog("已找到“京东搜索框”尝试搜索进入活动…");
                BS();
            }
        } else {
            //京东8.4.6
            var Ac = className("android.widget.RelativeLayout").id("com.jd.lib.category:id/a2u").findOnce();
            if (Ac != null) {
                var a = Ac.bounds();
                sleep(1000);
                click(a.centerX(), a.centerY());
                toastLog("已尝试点击“分类搜索框”");
                sleep(1000);
                if (id("com.jd.lib.search:id/a3r").findOnce() == null) {
                    sleep(2000);
                    if (id("com.jd.lib.search:id/a3r").findOnce() == null) {
                        sleep(2000);
                        if (id("com.jd.lib.search:id/a3r").findOnce() == null) {
                            openJDinSearch();
                        }
                    }
                } else {
                    toastLog("已找到“京东搜索框”尝试搜索进入活动…");
                    BS();
                }
            } else { //京东8.5.0
                var Ac = className("android.widget.RelativeLayout").id("com.jd.lib.category:id/a2v").findOnce();
                if (Ac == null && className("android.view.View").desc("分类").findOnce() != null) {
                    className("android.view.View").desc("分类").findOnce().click();
                    toastLog("已尝试点击“分类”按钮");
                    sleep(2000);
                }
                if (Ac != null) {
                    Ac.click();
                    sleep(1000);
                    toastLog("已尝试点击“分类搜索框8.5.0”");
                    sleep(1000);
                    if (id("com.jd.lib.search:id/a2v").findOnce() == null) {
                        sleep(2000);
                        if (id("com.jd.lib.search:id/a2v").findOnce() == null) {
                            sleep(2000);
                            if (id("com.jd.lib.search:id/a2v").findOnce() == null) {
                                openJDinSearch();
                            }
                        }
                    } else {
                        toastLog("已找到“京东搜索框”尝试搜索进入活动…");
                        BS();
                    }
                } else { //8.5.2/8.5.4
                    var Ac = className("android.widget.RelativeLayout").id("com.jd.lib.category:id/a3b").findOnce();
                    if (Ac != null) {
                        Ac.click();
                        sleep(1000);
                        toastLog("已尝试点击“分类搜索框8.5.2/4”");
                        sleep(2000);
                        BS();
                    } else { //8.5.6
                        var Ac = className("android.widget.RelativeLayout").id("com.jd.lib.category:id/a3c").findOnce();
                        if (Ac != null) {
                            Ac.click();
                            sleep(1000);
                            toastLog("已尝试点击“分类搜索框8.5.6”");
                            sleep(2000);
                            BS();
                        } else {
                            toastLog("未找到“分类”中的搜索栏\n重试中……");
                            openJDinSearch();
                        }
                    }
                }
            }
        }
    }

    function BS() {
        setText(GJCwords); //😇
        sleep(1000);
        var Z = id("com.jingdong.app.mall:id/a9b").findOnce();
        if (Z != null) {
            if (id("com.jingdong.app.mall:id/a9b").clickable(true).findOnce() != null) {
                Z.click();
                toastLog("已找到搜索按钮\n并已尝试盲点…");
                sleep(2000);
            } else if (id("com.jingdong.app.mall:id/a9b").findOnce() != null) {
                var z = Z.bounds();
                click(z.centerX(), z.centerY());
                toastLog("已找到搜索按钮\n并已尝试点击…");
                sleep(2000);
            }
            C();
        } else {
            toastLog("找不到搜索按钮\n无法进行搜索操作\n重试中……");
            A();
        }
    }

    function C() {
        var deng = 10;
        for (deng == 10; deng > 0; deng--) {
            if (id("com.jd.lib.search:id/ak1").findOnce() != null) {
                if (id("com.jd.lib.search:id/bw").findOnce() != null) {
                    var d = id("com.jd.lib.search:id/bw").findOnce();
                    if (d != null) {
                        var dd = d.bounds();
                        click(dd.centerX(), dd.centerY());
                        toastLog("存在“重新加载”按钮\n已尝试点击……");
                        sleep(2000);
                        var deng = 10;
                    }
                } else {
                    toastLog("正在等待“宠汪汪”活动加载\n剩余" + deng + "秒……");
                    sleep(1500);
                }
            } else if (id("com.jd.lib.search:id/ak7").findOnce() != null || id("com.jd.lib.search:id/akg").findOnce() != null) {
                if (id("com.jd.lib.search:id/bw").findOnce() != null) { //京东8.5.0/8.5.2
                    var d = id("com.jd.lib.search:id/bw").findOnce();
                    if (d != null) {
                        var dd = d.bounds();
                        click(dd.centerX(), dd.centerY());
                        toastLog("存在“重新加载”按钮\n已尝试点击……");
                        sleep(2000);
                        var deng = 10;
                    }
                } else {
                    toastLog("正在等待“宠汪汪”活动入口加载\n剩余" + deng + "秒……");
                    sleep(1500);
                }
            } else if (id("com.jd.lib.search:id/akn").findOnce() != null) { //8.5.4
                if (id("com.jd.lib.search:id/bw").findOnce() != null) {
                    var d = id("com.jd.lib.search:id/bw").findOnce();
                    if (d != null) {
                        var dd = d.bounds();
                        click(dd.centerX(), dd.centerY());
                        toastLog("存在“重新加载”按钮\n已尝试点击……");
                        sleep(2000);
                        var deng = 10;
                    }
                } else {
                    toastLog("正在等待“宠汪汪”活动加载\n剩余" + deng + "秒……");
                    sleep(1500);
                }
            } else if (id("com.jd.lib.search:id/akw").findOnce() != null) { //8.5.6
                if (id("com.jd.lib.search:id/bw").findOnce() != null) {
                    var d = id("com.jd.lib.search:id/bw").findOnce();
                    if (d != null) {
                        var dd = d.bounds();
                        click(dd.centerX(), dd.centerY());
                        toastLog("存在“重新加载”按钮\n已尝试点击……");
                        sleep(2000);
                        var deng = 10;
                    }
                } else {
                    toastLog("正在等待“宠汪汪”活动加载\n剩余" + deng + "秒……");
                    sleep(1500);
                }
            } else {
                var deng = 0;
                toastLog("检测到当前并未处于京东搜索\n重试中……");
                BS();
            }
        }
        D();
    }

    function D() {
        var jr = className("android.widget.LinearLayout").id("com.jd.lib.search:id/ako").findOnce();
        if (jr != null) {

            var j = jr.bounds();
            click(j.centerX(), j.centerY());
            toastLog("已尝试点击“宠汪汪”活动入口…");
            sleep(2000);
            var deng = 8;
            for (deng == 8; deng > 0; deng--) {
                toastLog("正在等待宠汪汪活动界面加载\n请稍等" + deng + "秒……");
                sleep(1000);
            }
            mainC();
        } else {
            var jr = className("android.widget.LinearLayout").id("com.jd.lib.search:id/aks").findOnce();
            if (jr != null) {

                var j = jr.bounds();
                click(j.centerX(), j.centerY());
                toastLog("已尝试点击“宠汪汪”活动入口…");
                sleep(2000);
                var deng = 8;
                for (deng == 8; deng > 0; deng--) {
                    toastLog("正在等待宠汪汪活动界面加载\n请稍等" + deng + "秒……");
                    sleep(1000);
                }
                mainC();
            } else {
                var jr = className("android.widget.LinearLayout").id("com.jd.lib.search:id/aku").findOnce();
                if (jr != null) {

                    jr.child(0).click();
                    toastLog("已尝试点击“宠汪汪”活动入口…");
                    sleep(2000);
                    var deng = 8;
                    for (deng == 8; deng > 0; deng--) {
                        toastLog("正在等待宠汪汪活动界面加载\n请稍等" + deng + "秒……");
                        sleep(1000);
                    }
                    mainC();
                } else {
                    var jr = className("android.widget.LinearLayout").id("com.jd.lib.search:id/ali").findOnce(); //8.5.2
                    if (jr != null) {

                        jr.child(0).click();
                        toastLog("已尝试点击“宠汪汪”活动入口…");
                        sleep(2000);
                        var deng = 8;
                        for (deng == 8; deng > 0; deng--) {
                            toastLog("正在等待宠汪汪活动界面加载\n请稍等" + deng + "秒……");
                            sleep(1000);
                        }
                        mainC();
                    } else {
                        var jr = className("android.widget.LinearLayout").id("com.jd.lib.search:id/alq").findOnce(); //8.5.4

                        if (jr != null) {

                            jr.child(0).click();
                            toastLog("已尝试点击“宠汪汪”活动入口…");
                            sleep(2000);
                            var deng = 8;
                            for (deng == 8; deng > 0; deng--) {
                                toastLog("正在等待宠汪汪活动界面加载\n请稍等" + deng + "秒……");
                                sleep(1000);
                            }
                            mainC();
                        } else {
                            var jr = className("android.widget.LinearLayout").id("com.jd.lib.search:id/alw").findOnce(); //8.5.6

                            if (jr != null) {

                                jr.child(0).click();
                                toastLog("已尝试点击“宠汪汪”活动入口…");
                                sleep(2000);
                                var deng = 8;
                                for (deng == 8; deng > 0; deng--) {
                                    toastLog("正在等待宠汪汪活动界面加载\n请稍等" + deng + "秒……");
                                    sleep(1000);
                                }
                                mainC();
                            } else {
                                toastLog("找不到“宠汪汪”活动入口\n重试中……");
                                openJDinSearch();
                            }
                        }
                    }
                }
            }
        }
    }

    function InternetError() {
        if (text("网络开小差啦，请稍后重试～").exists()) {
            toastLog("存在京东提示：\n网络开小差啦，请稍后重试～");
            openJDinSearch();
        }
    }


    function mainC() {
        try {
            var M = text("下一页").findOnce();
            if (M != null) {
                var P = M.bounds();
                click(P.centerX(), P.centerY());
                toastLog("存在“下一页”按钮\n已尝试点击…");
                sleep(2000);
            }
            InternetError();
            var E = text("点击领养").findOnce();
            if (E != null) {
                var e = E.bounds();
                click(e.centerX(), e.centerY());
                toastLog("存在“点击领养”按钮\n已尝试点击…");
                sleep(2000);
            }
            InternetError();

            var G = text("进入小家").findOnce();
            if (G != null) {
                var g = G.bounds();
                click(g.centerX(), g.centerY());
                toastLog("存在“进入小家”按钮\n已尝试点击…");
                sleep(2000);
            }
            InternetError();
            var B = text("跳过引导").findOnce();
            if (B != null) {
                var b = B.bounds();
                click(b.centerX(), b.centerY());
                toastLog("存在“跳过引导”按钮\n已尝试点击…");
                sleep(2000);
            }
            InternetError();
            var lq = text("去领取").findOnce();
            if (lq != null) {
                var lqa = lq.bounds();
                click(lqa.centerX(), lqa.centerY());
                toastLog("存在“去领取”按钮\n已尝试点击");
                sleep(2000);
            }
            var jx = text("继续领水滴").findOnce();
            if (jx != null) {
                var jxa = jx.bounds();
                click(jxa.centerX(), jxa.centerY());
                toastLog("存在“继续领水滴”按钮\n已尝试点击");
                sleep(2000);
            }

            var jbp = text("聚宝盆来了").findOnce();
            if (jbp != null) {
                var gb = text("close-btn-1").findOnce();
                if (gb != null) {
                    var jbpa = gb.bounds();
                    click(jbpa.centerX(), jbpa.centerY());
                    toastLog("存在“聚宝盆来了”弹窗\n尝试关闭…");
                    sleep(2000);
                }
            }


            function WY() {
                var While = 10;
                //这个while可以完成喂养狗狗任务，直到狗粮不足或进食中
                for (While == 10; While > 0; While--) {
                    var A = text("dog-food-icon").findOnce();
                    if (A != null) {
                        var B = A.bounds();
                        click(B.centerX(), B.centerY());
                        toastLog("已找到“喂养”按钮\n尝试点击…");
                        sleep(2000);
                        if (text("做任务得狗粮，喂养宠物可以获得更多积分哦～").exists()) {
                            var S = className("android.widget.Image").text("pop_close_btn").findOnce();
                            if (S != null) {
                                var s = S.parent().bounds();
                                click(s.centerX(), s.centerY());
                                toastLog("已尝试关闭“做任务领狗粮”蒙版");
                                sleep(1000);
                            }
                        }
                        if (text("请选择狗粮克数").findOnce() != null) {
                            var C = text("喂养").findOnce();
                            if (C != null) {
                                var c = C.bounds();
                                click(c.centerX(), c.centerY());
                                toastLog("已找到并尝试点击“喂养”按钮");
                                sleep(1000);
                                if (text("您的宠物正在进食中,请稍后再喂食").exists()) {
                                    var Aa = text("close-btn-1").findOnce();
                                    if (Aa != null) {
                                        var Ab = Aa.bounds();
                                        click(Ab.centerX(), Ab.centerY());
                                        toastLog("检测到您的宠物正在进食中，已尝试关闭喂养弹窗");
                                        var While = 0;
                                    }
                                }
                                sleep(1000);
                                if (text("您的宠物正在进食中,请稍后再喂食").exists()) {
                                    var Aa = text("close-btn-1").findOnce();
                                    if (Aa != null) {
                                        var Ab = Aa.bounds();
                                        click(Ab.centerX(), Ab.centerY());
                                        toastLog("检测到您的宠物正在进食中，已尝试关闭喂养弹窗");
                                        var While = 0;
                                    }
                                } else if (className("android.widget.Image").text("3CHy8l0d+v+eC8bshGb9DkuG7Jhm+k+AHlnoZYT+lAkEAAAAASUVORK5CYII=").findOnce() != null) {
                                    var Aa = text("close-btn-1").findOnce();
                                    if (Aa != null) {
                                        var Ab = Aa.bounds();
                                        click(Ab.centerX(), Ab.centerY());
                                        toastLog("检测到您的宠物正在进食中，已尝试关闭喂养弹窗");
                                        var While = 0;
                                    }
                                }
                                sleep(1000);
                            }
                        } else if (textContains("请赚取足够狗粮后再来喂养").findOnce() != null) {
                            //停止点击喂养按钮
                            toastLog("检测到狗粮不足，停止喂养");
                            var While = 0;
                        }
                    }
                }
            }
            WY();
            sleep(1000);
            if (className("android.widget.Image").text("close-btn-1").findOnce() != null) {
                var Ab = className("android.widget.Image").text("close-btn-1").findOnce().bounds();
                click(Ab.centerX(), Ab.centerY());
                toastLog("已尝试关闭喂养弹窗");
                sleep(1000);
            }
            if (text("linggouliang").findOnce() != null) {
                var lgla = text("linggouliang").findOnce().bounds();
                click(lgla.centerX(), lgla.centerY());
                toastLog("已找到“领狗粮”按钮\n尝试点击…");
                sleep(2000);
                if (text("做任务得狗粮，喂养宠物可以获得更多积分哦～").findOnce() != null) {
                    toastLog("已成功打开“任务页”");
                } else {
                    if (className("android.widget.Image").text("close-btn-1").findOnce() != null) {
                        var Ab = className("android.widget.Image").text("close-btn-1").findOnce().bounds();
                        click(Ab.centerX(), Ab.centerY());
                        toastLog("已尝试关闭喂养弹窗");
                        sleep(1000);
                    }
                    if (className("android.widget.Image").text("linggouliang_text2").findOnce() != null) {
                        var dk = className("android.widget.Image").text("linggouliang_text2").findOne().parent().bounds();
                        click(dk.centerX(), dk.centerY());
                        toastLog("已尝试再次点击打开“任务页”");
                        sleep(2000);
                    }
                }
            } else {
                toastLog("未找到“领狗粮按钮”等待两秒重试");
                sleep(2000);
                var lgl = text("linggouliang").findOnce();
                if (lgl != null) {
                    var lgla = lgl.bounds();
                    click(lgla.centerX(), lgla.centerY());
                    toastLog("已找到“领狗粮”按钮\n尝试点击…");
                    sleep(2000);
                } else {
                    toastLog("未发现“领狗粮”按钮");
                }
            }
            var zrw = text("做任务得狗粮，喂养宠物可以获得更多积分哦～").findOnce();
            if (zrw != null) {
                toastLog("已处于“做任务领狗粮”界面")
                var qd = text("领取").findOnce();
                if (qd != null) {
                    var qda = qd.bounds();
                    click(qda.centerX(), qda.centerY());
                    toastLog("存在“领取”按钮\n已尝试点击…");
                    sleep(2000);
                }
                sleep(2000);
                var Number = 20;
                var hd3 = "关注店铺（" + Number + "/" + Number + "）";
                if (textContains("关注店铺").exists()) {
                    context_xH = 1;
                    while (context_xH == 1) {
                        var D = textContains("关注店铺").findOnce();
                        if (D != null) {
                            toastLog("已找到“关注店铺”");
                            var AO = D.parent();
                            var B = AO.children();
                            var H = B[1].text();
                            if (H == hd3) {
                                toastLog(H);
                                context_xH = 0;
                            } else if (Number != 0) {
                                Number--;
                                var hd3 = "关注店铺（" + Number + "/" + Number + "）";
                                if (H == hd3) {
                                    toastLog(H);
                                    var Number = 0;
                                    context_xH = 0;
                                }
                            } else {
                                var Number = 20;
                                toastLog(H);
                                var AB = B[3].bounds();
                                click(AB.centerX(), AB.centerY());
                                toastLog("正在完成关注店铺任务\n" + H)
                                sleep(3000);
                                //完成关注店铺任务
                                var While = 1;
                                while (While == 1) {
                                    sleep(2000);
                                    if (id("fd").findOnce() != null) {
                                        if (id("fd").findOnce().text() == "关注店铺任务") {
                                            var CC = text("已关注").find().length;
                                            var A = text("进店并关注").find();
                                            if (CC > 5) {
                                                swipe(width / 2, height / 2, width / 2, 0, 1000);
                                            }
                                            if (A.length != 0) {
                                                var A = text("进店并关注").find();
                                                toastLog("需要关注的店铺数量剩余：" + A.length + "个\n当前已关注" + CC + "个店铺");
                                                var B = A[0].bounds();
                                                click(B.centerX(), B.centerY());
                                                var deng = 5;
                                                for (deng == 5; deng > 0; deng--) {
                                                    toastLog("已尝试点击进入店铺\n" + deng + "秒后本店铺浏览完成\n剩余" + A.length + "个店铺未浏览");
                                                    sleep(1500);
                                                }
                                                Justback();
                                            } else {
                                                toastLog("已关注全部店铺");
                                                var While = 0;
                                            }
                                        }
                                    } else {
                                        if (id("fd").findOnce() != null) {
                                            if (id("fd").findOnce().text() == "宠汪汪") {
                                                if (text("做任务得狗粮，喂养宠物可以获得更多积分哦～").exists()) {
                                                    var While = 0;
                                                    toastLog("处于“做任务领狗粮”界面未进入关注店铺中，尝试进入……");
                                                }
                                            } else if (currentActivity() == "com.jd.lib.jshop.jshop.JshopMainShopActivity") {
                                                //上面的返回来处理店铺弹窗后这里再次返回
                                                toastLog("当前未返回关注店铺界面\n尝试返回中……");
                                                Justback();
                                            }
                                        } else if (currentActivity() == "com.jd.lib.jshop.jshop.JshopMainShopActivity") {
                                            //上面的返回来处理店铺弹窗后这里再次返回
                                            toastLog("当前未返回关注店铺界面\n尝试返回中……");
                                            Justback();
                                        }
                                    }
                                }
                                sleep(2000);
                                if (id("fd").findOnce() != null) {
                                    if (id("fd").findOnce().text() == "关注店铺任务") {
                                        //循环结束即任务完成返回
                                        Justback();
                                        toastLog("处于“关注店铺任务”界面\n尝试返回……");
                                        sleep(2000);
                                    } else if (id("fd").findOnce().text() == "宠汪汪") {
                                        if (text("做任务得狗粮，喂养宠物可以获得更多积分哦～").exists()) {
                                            toastLog("已处于“做任务领狗粮”界面");
                                        } else {
                                            toastLog("处于“宠汪汪”界面\n但未发现“做任务领狗粮”\n尝试点击“领狗粮”按钮");
                                            var ZX = text("linggouliang").findOnce();
                                            if (ZX != null) {
                                                var Zx = ZX.bounds();
                                                click(Zx.centerX(), Zx.centerY());
                                                sleep(2000);
                                            } else {
                                                toastLog("处于“宠汪汪”界面但未找到“领狗粮”按钮");
                                                sleep(2000);
                                            }
                                        }
                                    }
                                } else {
                                    toastLog("正在完成“关注店铺”任务\n但没有找到顶栏标题\n重试中……");
                                    sleep(2000);
                                }
                            }
                        } else {
                            toastLog("未找到“关注店铺”重试中……")
                            mainC();
                            toastLog("跳过! 未找到“关注店铺”");
                            context_xH = 0;
                        }
                    }
                } //完成“关注店铺”任务
                else {
                    toastLog("未找到“关注店铺”重试中……")
                    mainC();
                    toastLog("跳过! 未找到“关注店铺”");
                    context_xH = 0;
                }
                sleep(2000);
                //在屏幕上滑动两个控件的距离
                var Hd = className("android.widget.Image").text("task_sign").findOnce();
                if (Hd != null) {
                    var Hdgd = className("android.widget.Image").text("task_sign").findOnce().parent().parent().bounds();
                    var rwlb = className("android.view.View").scrollable(true).findOnce();
                    if (rwlb != null) {
                        var rwlb = className("android.view.View").scrollable(true).findOnce().bounds();
                        log("已找到任务列表");
                        swipe(rwlb.centerX(), rwlb.centerY(), rwlb.centerX(), rwlb.centerY() - Hdgd.height(), 500);
                    }
                } else if (className("android.widget.Image").text("task_meals").findOnce() != null) {
                    var Hdgd = className("android.widget.Image").text("task_meals").findOnce().parent().parent().bounds();
                    var rwlb = className("android.view.View").scrollable(true).findOnce();
                    if (rwlb != null) {
                        var rwlb = className("android.view.View").scrollable(true).findOnce().bounds();
                        log("已找到任务列表");
                        swipe(rwlb.centerX(), rwlb.centerY(), rwlb.centerX(), rwlb.centerY() - Hdgd.height(), 500);
                    }
                } else {
                    toastLog("找不到滑动位置");
                }

                //开始完成逛逛会场任务
                var Number = 20;
                var OK = 0;
                var rw = "逛逛会场（" + Number + "/" + Number + "）";
                if (textContains("逛逛会场").exists()) {
                    context_xH = 1;
                    while (context_xH == 1) {
                        var D = textContains("逛逛会场").findOnce();
                        if (D != null) {
                            toastLog("已找到“逛逛会场”");
                            var AO = D.parent();
                            var B = AO.children();
                            try {
                                if (OK > 8) { //最多只做8次
                                    if (H != null) {
                                        if (H == B[1].text()) {
                                            context_xH = 0;
                                            toastLog("检测到上次任务未完成\n跳过此任务");
                                        }
                                    }
                                } else {
                                    var H = B[1].text();
                                }
                            } catch (e) {
                                log(e);
                            } finally {
                                var H = B[1].text();
                            }
                            if (H == rw) {
                                toastLog(H);
                                context_xH = 0;
                            } else if (Number != 0) {
                                Number--;
                                var rw = "逛逛会场（" + Number + "/" + Number + "）";
                                if (H == rw) {
                                    toastLog(H);
                                    var Number = 0;
                                    context_xH = 0;
                                }
                            } else {
                                var Number = 20;
                                OK++;
                                toastLog(H);
                                var AB = B[3].bounds();
                                click(AB.centerX(), AB.centerY());
                                toastLog("已尝试点击去完成“逛逛会场”任务");
                                sleep(2000);
                                if (id("fd").findOnce() != null) {
                                    if (id("fd").findOnce().text() != "宠汪汪") {
                                        var deng = 5;
                                        for (deng == 5; deng > 0; deng--) {
                                            toastLog("正在完成逛逛会场任务\n" + H + "\n剩余" + deng + "秒……");
                                            sleep(2000);
                                        }
                                        Justback();
                                        sleep(2000);
                                        /*if (id("a96").findOnce() != null) {
                                            Justback();
                                            sleep(2000);
                                            if (id("a96").findOnce() != null) {
                                                openJDinSearch();
                                            }
                                        }*/
                                        if (id("fd").findOnce() != null) {
                                            if (id("fd").findOnce().text() == "宠汪汪") {
                                                if (text("做任务得狗粮，喂养宠物可以获得更多积分哦～").exists()) {
                                                    toastLog("已处于“做任务领狗粮”界面");
                                                } else {
                                                    toastLog("处于“宠汪汪”界面\n但未发现“做任务领狗粮”\n尝试点击“领狗粮”按钮");
                                                    var ZX = text("linggouliang").findOnce();
                                                    if (ZX != null) {
                                                        var Zx = ZX.bounds();
                                                        click(Zx.centerX(), Zx.centerY());
                                                        sleep(2000);
                                                    } else {
                                                        toastLog("处于“宠汪汪”界面但未找到“领狗粮”按钮");
                                                        sleep(2000);
                                                    }
                                                }
                                            } else {
                                                Justback();
                                                sleep(3000);
                                                if (id("fd").findOnce().text() == "宠汪汪") {
                                                    if (text("做任务得狗粮，喂养宠物可以获得更多积分哦～").exists()) {
                                                        toastLog("已处于“做任务领狗粮”界面");
                                                    } else {
                                                        toastLog("处于“宠汪汪”界面\n但未发现“做任务领狗粮”\n尝试点击“领狗粮”按钮");
                                                        var ZX = text("linggouliang").findOnce();
                                                        if (ZX != null) {
                                                            var Zx = ZX.bounds();
                                                            click(Zx.centerX(), Zx.centerY());
                                                            sleep(2000);
                                                        } else {
                                                            toastLog("处于“宠汪汪”界面但未找到“领狗粮”按钮");
                                                            sleep(2000);
                                                        }
                                                    }
                                                } else {
                                                    toastLog("仍然找不到顶栏标题\n尝试重新进入……");
                                                    sleep(2000);
                                                    context_xH = 0;
                                                    openJDinSearch();
                                                }
                                            }
                                        } else {
                                            toastLog("未找到顶栏标题\n等待加载重试中……");
                                            sleep(2000);
                                        }
                                    } else if (id("fd").findOnce().text() == "宠汪汪") {
                                        if (text("做任务得狗粮，喂养宠物可以获得更多积分哦～").exists()) {
                                            toastLog("已处于“做任务领狗粮”界面");
                                        } else {
                                            toastLog("处于“宠汪汪”界面\n但未发现“做任务领狗粮”\n尝试点击“领狗粮”按钮");
                                            var ZX = text("linggouliang").findOnce();
                                            if (ZX != null) {
                                                var Zx = ZX.bounds();
                                                click(Zx.centerX(), Zx.centerY());
                                                sleep(2000);
                                            } else {
                                                toastLog("处于“宠汪汪”界面但未找到“领狗粮”按钮");
                                                sleep(2000);
                                            }
                                        }
                                    }
                                } else if (id("a96").findOnce() != null) {
                                    var deng = 5;
                                    for (deng == 5; deng > 0; deng--) {
                                        toastLog("正在完成逛逛会场任务\n" + H + "\n剩余" + deng + "秒……");
                                        sleep(2000);
                                    }
                                    Justback();
                                    sleep(2000);
                                } else {
                                    Justback();
                                    sleep(2000);
                                }
                            }
                        } else {
                            toastLog("跳过! 未找到“逛逛会场”");
                            context_xH = 0;
                        }
                    }
                } else {
                    toastLog("未找到“逛逛会场”重试中……")
                    mainC();
                    toastLog("跳过! 未找到“逛逛会场”");
                    context_xH = 0;
                } //“逛逛会场”任务完成
                sleep(2000);
                /*
                //在屏幕上滑动两个控件的距离
                var Hd = className("android.widget.Image").text("task_sign").findOnce();
                if (Hd != null) {
                    var Hdgd = className("android.widget.Image").text("task_sign").findOnce().parent().parent().bounds();
                    var rwlb = className("android.view.View").scrollable(true).findOnce();
                    if (rwlb != null) {
                        var rwlb = className("android.view.View").scrollable(true).findOnce().bounds();
                        log("已找到任务列表");
                        swipe(rwlb.centerX(), rwlb.centerY(), rwlb.centerX(), rwlb.centerY() - Hdgd.height(), 500);
                    }
                } else if (className("android.widget.Image").text("task_meals").findOnce() != null) {
                    var Hdgd = className("android.widget.Image").text("task_meals").findOnce().parent().parent().bounds();
                    var rwlb = className("android.view.View").scrollable(true).findOnce();
                    if (rwlb != null) {
                        var rwlb = className("android.view.View").scrollable(true).findOnce().bounds();
                        log("已找到任务列表");
                        swipe(rwlb.centerX(), rwlb.centerY(), rwlb.centerX(), rwlb.centerY() - Hdgd.height(), 500);
                    }
                } else {
                    toastLog("找不到滑动位置");
                }*/
                try {
                    className("android.view.View").scrollable(true).findOnce().scrollDown();
                } catch (e) {
                    log(e);
                }

                //开始完成关注商品任务
                var Number = 20;
                var rw = "关注商品（" + Number + "/" + Number + "）";
                if (textContains("关注商品").exists()) {
                    context_xH = 1;

                    while (context_xH == 1) {
                        var D = textContains("关注商品").findOnce();
                        if (D != null) {
                            toastLog("已找到“关注商品”");
                            var AO = D.parent();
                            var B = AO.children();
                            var H = B[1].text();
                            if (H == rw) {
                                toastLog(H);
                                context_xH = 0;
                            } else if (Number != 0) {
                                Number--;
                                var rw = "关注商品（" + Number + "/" + Number + "）";
                                if (H == rw) {
                                    toastLog(H);
                                    var Number = 0;
                                    context_xH = 0;
                                }
                            } else {
                                var Number = 20;
                                toastLog(H);
                                var AB = B[3].bounds();
                                click(AB.centerX(), AB.centerY());
                                sleep(2000);
                                if (currentActivity() == "com.jd.lib.productdetail.ProductDetailActivity") {
                                    var deng = 5;
                                    for (deng == 5; deng > 0; deng--) {
                                        toastLog("正在完成关注商品任务\n" + H + "\n剩余" + deng + "秒……");
                                        sleep(2000);
                                    }
                                    Justback();
                                    sleep(1000);
                                    if (id("fd").findOnce() != null) {
                                        if (id("fd").findOnce().text() == "宠汪汪") {
                                            if (text("做任务得狗粮，喂养宠物可以获得更多积分哦～").exists()) {
                                                toastLog("已返回“做任务领狗粮”界面");
                                            }
                                        }
                                    } else {
                                        toastLog("关注商品任务\n没有找到顶栏标题");
                                        sleep(2000);
                                    }
                                } else if (id("fd").findOnce() != null) {
                                    if (id("fd").findOnce().text() == "宠汪汪") {
                                        toastLog("还处于“做任务领狗粮”界面\n继续任务……");
                                    }
                                } else if (id("fd").findOnce() == null) {
                                    var deng = 5;
                                    for (deng == 5; deng > 0; deng--) {
                                        toastLog("正在完成关注商品任务\n" + H + "\n剩余" + deng + "秒……");
                                        sleep(2000);
                                    }
                                    Justback();
                                    sleep(1000);
                                }
                            }
                        } else {
                            toastLog("跳过! 未找到“关注商品”");
                            context_xH = 0;
                        }
                    } //“关注商品”任务完成
                } else {
                    toastLog("未找到“关注商品”重试中……")
                    mainC();
                    toastLog("跳过! 未找到“关注商品”");
                    context_xH = 0;
                }

                sleep(2000);
                try {
                    className("android.view.View").scrollable(true).findOnce().scrollDown();
                } catch (e) {
                    log(e);
                }
                /*
                        //在屏幕上滑动两个控件的距离
                        var Hd = className("android.widget.Image").text("task_sign").findOnce();
                        if (Hd != null) {
                            var Hdgd = className("android.widget.Image").text("task_sign").findOnce().parent().parent().bounds();
                            var rwlb = className("android.view.View").scrollable(true).findOnce();
                            if (rwlb != null) {
                                var rwlb = className("android.view.View").scrollable(true).findOnce().bounds();
                                log("已找到任务列表");
                                swipe(rwlb.centerX(), rwlb.centerY(), rwlb.centerX(), rwlb.centerY() - Hdgd.height(), 500);
                            }
                        } else if (className("android.widget.Image").text("task_meals").findOnce() != null) {
                            var Hdgd = className("android.widget.Image").text("task_meals").findOnce().parent().parent().bounds();
                            var rwlb = className("android.view.View").scrollable(true).findOnce();
                            if (rwlb != null) {
                                var rwlb = className("android.view.View").scrollable(true).findOnce().bounds();
                                log("已找到任务列表");
                                swipe(rwlb.centerX(), rwlb.centerY(), rwlb.centerX(), rwlb.centerY() - Hdgd.height(), 500);
                            }
                        } else {
                            toastLog("找不到滑动位置");
                        }*/
                //开始完成关注频道任务
                var Number = 20;
                var hd3 = "关注频道（" + Number + "/" + Number + "）";
                if (textContains("关注频道").exists()) {
                    context_xH = 1;

                    while (context_xH == 1) {
                        var D = textContains("关注频道").findOnce();
                        if (D != null) {
                            toastLog("已找到“关注频道”");
                            var AO = D.parent();
                            var B = AO.children();
                            var H = B[1].text();
                            if (H == hd3) {
                                toastLog(H);
                                context_xH = 0;
                            } else if (Number != 0) {
                                Number--;
                                var hd3 = "关注频道（" + Number + "/" + Number + "）";
                                if (H == hd3) {
                                    toastLog(H);
                                    var Number = 0;
                                    context_xH = 0;
                                }
                            } else {
                                var Number = 20;
                                toastLog(H);
                                var AB = B[3].bounds();
                                click(AB.centerX(), AB.centerY());
                                toastLog("正在完成关注频道任务\n" + H)
                                sleep(3000);
                                //完成关注店铺任务
                                var While = 1;
                                while (While == 1) {
                                    sleep(2000);
                                    var AZ = id("com.jingdong.app.mall:id/fd").findOnce();
                                    if (AZ != null) {
                                        var AX = AZ.text();
                                        if (AX == "关注频道任务") {
                                            var AA = "关注频道任务";
                                        }
                                    }
                                    if (AA != null) {
                                        var CC = text("已关注").find().length;
                                        var A = text("进入并关注").find();
                                        if (CC > 3) {
                                            swipe(width / 2, height / 2, width / 2, 0, 1000);
                                        }
                                        if (A.length != 0) {
                                            var A = text("进入并关注").find();
                                            if (A.nonEmpty() == true) {
                                                toastLog("需要关注的频道数量剩余：" + A.length + "个\n当前已关注" + CC + "个频道");
                                                var B = A[0].bounds();
                                                click(B.centerX(), B.centerY());
                                                var deng = 5;
                                                for (deng == 5; deng > 0; deng--) {
                                                    toastLog("已尝试点击进入频道\n" + deng + "秒后本频道浏览完成\n剩余" + A.length + "个频道未浏览");
                                                    sleep(1500);
                                                }
                                                Justback();
                                            } else {
                                                toastLog("进入并关注的Find是空的");
                                                sleep(2000);
                                            }
                                        } else {
                                            toastLog("已关注全部频道");
                                            var While = 0;
                                        }
                                    } else {
                                        if (id("com.jingdong.app.mall:id/fd").findOnce() != null) {
                                            if (id("com.jingdong.app.mall:id/fd").findOnce().text() == "宠汪汪") {
                                                if (text("做任务得狗粮，喂养宠物可以获得更多积分哦～").exists()) {
                                                    var While = 0;
                                                    toastLog("处于“做任务领狗粮”界面未进入关注频道任务中，尝试进入……");
                                                }
                                            } else {
                                                toastLog("尝试返回到任务界面中……");
                                                Justback();
                                                sleep(2000);
                                            }
                                        } else {
                                            toastLog("尝试返回到任务界面中……");
                                            Justback();
                                            sleep(2000);
                                        }
                                    }
                                }
                                sleep(2000);
                                if (id("com.jingdong.app.mall:id/fd").findOnce() != null) {
                                    if (id("com.jingdong.app.mall:id/fd").findOnce().text() == "关注频道任务") {
                                        //循环结束即任务完成返回
                                        Justback();
                                        toastLog("处于“关注频道任务”界面\n尝试返回……");
                                        sleep(2000);
                                    } else if (id("com.jingdong.app.mall:id/fd").findOnce().text() == "宠汪汪") {
                                        if (text("做任务得狗粮，喂养宠物可以获得更多积分哦～").exists()) {
                                            toastLog("已处于“做任务领狗粮”界面");
                                        } else {
                                            toastLog("处于“宠汪汪”界面\n但未发现“做任务领狗粮”\n尝试点击“领狗粮”按钮");
                                            var ZX = text("linggouliang").findOnce();
                                            if (ZX != null) {
                                                var Zx = ZX.bounds();
                                                click(Zx.centerX(), Zx.centerY());
                                                toastLog("已尝试点击“领狗粮”按钮");
                                                sleep(2000);
                                            } else {
                                                toastLog("处于“宠汪汪”界面但未找到“领狗粮”按钮");
                                                sleep(2000);
                                            }
                                        }
                                    }
                                } else {
                                    toastLog("正在完成“关注频道”任务\n但没有找到顶栏标题\n重试中……");
                                    sleep(2000);
                                }
                            }
                        } else {
                            toastLog("未找到“关注频道”重试中……")
                            mainC();
                            toastLog("跳过! 未找到“关注频道”");
                            context_xH = 0;
                        }
                    }
                } //完成“关注频道”任务
                else {
                    toastLog("未找到“关注频道”重试中……")
                    mainC();
                    toastLog("跳过! 未找到“关注频道”");
                    context_xH = 0;
                }

                sleep(2000);
                var A = className("android.widget.Image").text("Wyf3EG0V9Ic75ItYoAAAAAElFTkSuQmCC").findOnce();
                if (A != null) {
                    var V = A.parent().bounds();
                    click(V.centerX(), V.centerY());
                    toastLog("已尝试关闭“做任务领狗粮”");
                    sleep(2000);
                }
                var A = className("android.widget.Image").text("Wyf3EG0V9Ic75ItYoAAAAAElFTkSuQmCC").findOnce();
                if (A != null) {
                    var V = A.parent().bounds();
                    click(V.centerX(), V.centerY());
                    toastLog("已尝试关闭“做任务领狗粮”");
                    sleep(2000);
                }

                WY();
                //开始帮喂汪汪
                var OI = className("android.widget.Image").text("help_icon2").findOnce();
                if (OI != null) {
                    var Op = OI.bounds();
                    click(Op.centerX(), Op.centerY());
                    toastLog("已找到“帮忙喂养按钮”\n尝试点击");
                    sleep(2500);
                    var m = text("可帮喂").find();
                    var l = text("已帮喂").find();
                    var ff = text("抢").find();
                    if (m.size() > 0) {
                        var While = 1;
                    } else if (ff.size() > 0) {
                        var While = 1;
                    } else {
                        toastLog("未找到“可喂养”的汪汪\n跳过此任务！");
                        var S = className("android.widget.Image").text("pop_close_btn").findOnce();
                        if (S != null) {
                            var ss = S.bounds();
                            click(ss.centerX(), ss.centerY());
                            toastLog("已尝试点击关闭蒙版按钮");
                            sleep(2000);
                        }
                        dialogs.alert("自动宠汪汪：\n脚本已运行完成");
                        log("自动宠汪汪：\n脚本已运行完成");
                        exit();
                    }
                    while (While == 1) {
                        var m = text("可帮喂").find();
                        var l = text("已帮喂").find();
                        var ff = text("抢").find();
                        toastLog("当前还可以帮喂" + m.size() + "个宠物\n当前已帮喂" + l.size() + "个宠物\n当前可抢的狗粮剩余：" + ff.size());
                        if (m.nonEmpty() == true) {
                            var g = m[0].parent();
                            var GG = g.children();
                            var ww_title = GG[2].text() + "的汪汪";
                        }
                        var dian = text("可帮喂").findOnce();
                        var dianM = text("抢").findOnce();

                        function S_Wy_Qiang() {
                            if (id("com.jingdong.app.mall:id/fd").findOnce() != null) {
                                var a = id("com.jingdong.app.mall:id/fd").findOnce().text();
                                if (a == ww_title) {
                                    toastLog("正在喂养" + ww_title);
                                    sleep(2000);
                                    if (className("android.widget.Image").text("bone_ava").findOnce() != null) {
                                        var ns = className("android.widget.Image").text("bone_ava").findOnce().bounds();
                                        click(ns.centerX(), ns.centerY());
                                        toastLog("已尝试点击了“狗粮骨头”");
                                        sleep(2000);
                                    }
                                    if (text("dog-food-icon").findOnce() != null) {
                                        var hv = text("dog-food-icon").findOnce().bounds();
                                        click(hv.centerX(), hv.centerY());
                                        toastLog("已尝试点击“帮TA喂养”按钮");
                                        sleep(2000);
                                        if (className("android.view.View").text("确定").findOnce() != null) {
                                            var ed = className("android.view.View").text("确定").findOnce().bounds();
                                            click(ed.centerX(), ed.centerY());
                                            toastLog("已尝试点击“确定帮TA喂养按钮”");
                                            sleep(2000);

                                        }
                                        Justback();
                                        sleep(2000);
                                    } else {
                                        toastLog("处于“喂养" + ww_title + "”界面\n但未发现喂养按钮\n返回上一级界面...");
                                        Justback();
                                        sleep(2000);
                                    }
                                }
                            } else {
                                sleep(2000);
                                if (id("com.jingdong.app.mall:id/fd").findOnce() != null) {
                                    var a = id("com.jingdong.app.mall:id/fd").findOnce().text();
                                    if (a == ww_title) {
                                        toastLog("正在喂养" + ww_title);
                                        sleep(2000);
                                        if (className("android.widget.Image").text("bone_ava").findOnce() != null) {
                                            var ns = className("android.widget.Image").text("bone_ava").findOnce().bounds();
                                            click(ns.centerX(), ns.centerY());
                                            toastLog("已尝试点击了“狗粮骨头”");
                                            sleep(2000);
                                        }
                                        if (text("dog-food-icon").findOnce() != null) {
                                            var hv = text("dog-food-icon").findOnce().bounds();
                                            click(hv.centerX(), hv.centerY());
                                            toastLog("已尝试点击“帮TA喂养”按钮");
                                            sleep(2000);
                                            if (className("android.view.View").text("确定").findOnce() != null) {
                                                var ed = className("android.view.View").text("确定").findOnce().bounds();
                                                click(ed.centerX(), ed.centerY());
                                                toastLog("已尝试点击“确定帮TA喂养按钮”");
                                                sleep(2000);
                                            }
                                            Justback();
                                            sleep(2000);
                                        } else {
                                            toastLog("处于“喂养" + ww_title + "”界面\n但未发现喂养按钮\n返回上一级界面...");
                                            Justback();
                                            sleep(2000);
                                        }
                                    } else if (a == "宠汪汪") {
                                        toastLog("还处于“宠汪汪”界面\n继续任务…");
                                    }
                                } else {
                                    toastLog("没有找到顶栏标题\n跳过此任务");
                                    var While = 0;
                                }
                            }
                        }
                        if (dian != null) {
                            var fw = dian.bounds();
                            click(fw.centerX(), fw.centerY());
                            toastLog("已点击“可帮喂”按钮\n准备帮喂中……");
                            sleep(3000);
                            S_Wy_Qiang();
                        } else if (dianM != null) {
                            var fg = dianM.bounds();
                            click(fg.centerX(), fg.centerY());
                            toastLog("已点击“抢”按钮\n准备抢狗粮中……");
                            sleep(3000);
                            if (className("android.widget.Image").text("bone_ava").findOnce() != null) {
                                var ns = className("android.widget.Image").text("bone_ava").findOnce().bounds();
                                click(ns.centerX(), ns.centerY());
                                toastLog("已尝试点击了“狗粮骨头”");
                                sleep(2000);
                            }
                            Justback();
                            sleep(2000);
                        } else {
                            toastLog("已找不到“可帮喂”按钮");
                            var While = 0;
                            dialogs.alert("自动宠汪汪：\n脚本已运行完成");
                            log("自动宠汪汪：\n脚本已运行完成");
                            exit();
                        }
                    }
                    dialogs.alert("自动宠汪汪：\n脚本已运行完成");
                    log("自动宠汪汪：\n脚本已运行完成");
                    exit();
                } else {
                    toastLog("未找到“帮忙喂养”按钮\n跳过此任务！");
                    dialogs.alert("自动宠汪汪：\n脚本已运行完成");
                    log("自动宠汪汪：\n脚本已运行完成");
                    exit();
                }
            }
        } catch (e) {
            log(e);
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
            mainC();
        } else {
            openJDinSearch();
        }
    }
    dialogs.alert("自动宠汪汪：\n脚本已运行完成");
    log("自动宠汪汪：\n脚本已运行完成");
    exit();
}