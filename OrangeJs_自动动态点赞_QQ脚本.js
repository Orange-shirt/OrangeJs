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
        dialogs.alert("您没有安装QQ");
        exit();
    }
}
var InstalledVersion = getPackageVersion("com.tencent.mobileqq");
var SupportVersion = ["8.3.3", "8.3.0", "8.2.7"] //支持的版本

var Each = SupportVersion.length;
var While = 1;
while (While == 1) {
    if (Each < 0) {
        context_check = null;
        //判断是否选择了不再显示
        if (files.exists("/storage/emulated/0/OrangeJs/自动动态点赞/不再显示.txt") != true) {
            dialogs.build({
                //对话框标题
                title: "当前QQ版本未经测试",
                titleColor: "#F44336",
                contentLineSpacing: 1.2,
                //对话框内容
                content: "本脚本目前已测试的软件版本有：\nQQ" + SupportVersion + "\n您当前安装的版本为：" + InstalledVersion + "\n如您使用没有问题可直接忽略\n若有问题可使用相应版本或反馈",
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
                    var NeverShow = files.createWithDirs("/storage/emulated/0/OrangeJs/自动动态点赞/不再显示.txt");
                    if (NeverShow == false) {
                        dialogs.alert("设置不再显示失败！\n请授予本软件存储权限！");
                    }
                }
                engines.execScript("自动动态点赞", "RunJs()\n" + RunJs.toString());
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
            engines.execScript("自动动态点赞", "RunJs()\n" + RunJs.toString());
        }
        var While = 0;
    } else if (SupportVersion[Each] != InstalledVersion) {
        Each--;
    } else {
        var While = 0;
        log("已安装支持的软件版本：" + SupportVersion[Each]);
        engines.execScript("自动动态点赞", "RunJs()\n" + RunJs.toString());
    }
}

function RunJs() {
    function toastLog(message) {
        toast(message);
        log(message);
    }
    dialogs_js();
    var height = device.height;
    var width = device.width;

    function dialogs_js() {
        var ScriptVersion = ("Beta1.1"); //版本
        log("软件脚本已开始运行，如果没有弹出菜单请强行停止再打开本软件！");
        var options_ = ["▶️ 开始运行脚本", "🕒 计时运行脚本", "⏰ 定时运行脚本", "⏹ 停止运行脚本", "🛠 脚本运行配置", "🔙 返回方法设置", "💬 吐司/日志切换"]
        var i = dialogs.select("*+*+*+* 橘衫の脚本 *+*+*+*\n*+*+*+*  Orange Js *+*+*+*\n\n欢迎使用 (◍•ᴗ•◍)❤" + "\n" + "“自动动态点赞”" + ScriptVersion + "\n请选择一个要进行的选项", options_);
        if (i < 0) {
            toastLog("没有选择，如需关闭对话框\n  请选择“停止运行脚本”");
            dialogs_js();
        } else if (i == 0) {
            toastLog(options_[i]);
            if (files.exists("/storage/emulated/0/OrangeJs/自动动态点赞/点赞次数设置.txt") == false || files.exists("/storage/emulated/0/OrangeJs/自动动态点赞/点赞界面设置.txt") == false) {
                dialogs.alert("您还没有配置脚本，不能开始运行哦(^_^)", "请在脚本主菜单中选择“脚本运行配置”进行相关操作后再运行脚本");
                dialogs_js();
            } else {
                context_Manualstate = 0;
                Set_Back_way();
            }
        } else if (i == 3) {
            toastLog(options_[i]);
            exit();
        } else if (i == 4) {
            InformationSettings();
        } else if (i == 5) {
            if (files.exists("/storage/emulated/0/OrangeJs/自动动态点赞/返回方法设置.txt") == true && files.read("/storage/emulated/0/OrangeJs/自动动态点赞/返回方法设置.txt") > 1 && files.exists("/storage/emulated/0/OrangeJs/自动动态点赞/滑动返回速度.txt")) {
                files.remove("/storage/emulated/0/OrangeJs/自动动态点赞/返回方法设置.txt");
                log("当前返回方法设置为滑动返回但未设置滑动返回速度");
            }
            if (files.exists("/storage/emulated/0/OrangeJs/自动动态点赞/返回方法设置.txt") == true) {
                files.rename("/storage/emulated/0/OrangeJs/自动动态点赞/返回方法设置.txt", "X返回方法设置.txt");
                Set_Back_way();
            } else {
                dialogs.alert("您未保存任何返回方法，请运行脚本后再进行修改");
                dialogs_js();
            }
        } else if (i == 6) {
            toastLog(options_[i]);
            context_Manualstate = 0;
            if (files.exists("/storage/emulated/0/OrangeJs/自动动态点赞/吐司or日志.txt") == true) {
                var z = files.read("/storage/emulated/0/OrangeJs/自动动态点赞/吐司or日志.txt");
                if (z != "吐司" && z != "日志") {
                    alert("“吐司or日志”文件错误，已尝试删除错误文件");
                    try {
                        files.remove("/storage/emulated/0/OrangeJs/自动动态点赞/吐司or日志.txt");
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
                    files.createWithDirs("/storage/emulated/0/OrangeJs/自动动态点赞/吐司or日志.txt");
                    files.write("/storage/emulated/0/OrangeJs/自动动态点赞/吐司or日志.txt", "吐司");
                } catch (e) {
                    log("未授予存储权限或存储权限错误，当前设置为吐司");
                    var T = 0;
                }
            } else if (da == 1) {
                toastLog("您选择了：使用悬浮日志");
                try {
                    var T = 1;
                    files.createWithDirs("/storage/emulated/0/OrangeJs/自动动态点赞/吐司or日志.txt");
                    files.write("/storage/emulated/0/OrangeJs/自动动态点赞/吐司or日志.txt", "日志");
                } catch (e) {
                    log("未授予存储权限或存储权限错误，开启悬浮日志");
                    var T = 1;
                }
            }
            dialogs_js();
        } else if (i == 1) {
            if (files.exists("/storage/emulated/0/OrangeJs/自动动态点赞/点赞次数设置.txt") == false || files.exists("/storage/emulated/0/OrangeJs/自动动态点赞/点赞界面设置.txt") == false) {
                dialogs.alert("您还没有配置脚本，不能计时运行哦(^_^)", "请在脚本主菜单中选择“脚本运行配置”进行相关操作后再运行脚本");
                dialogs_js();
            } else {
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
                device.keepScreenDim();
            }
        } else if (i == 2) {
            if (files.exists("/storage/emulated/0/OrangeJs/自动动态点赞/点赞次数设置.txt") == false || files.exists("/storage/emulated/0/OrangeJs/自动动态点赞/点赞界面设置.txt") == false) {
                dialogs.alert("您还没有配置脚本，不能定时运行哦(^_^)", "请在脚本主菜单中选择“脚本运行配置”进行相关操作后再运行脚本");
                dialogs_js();
            } else {
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
    }

    function InformationSettings() {
        while (true) {
            var V = "";
            if (files.exists("/storage/emulated/0/OrangeJs/自动动态点赞/点赞界面设置.txt") == true && files.exists("/storage/emulated/0/OrangeJs/自动动态点赞/点赞次数设置.txt") == true) {
                let a = open("/storage/emulated/0/OrangeJs/自动动态点赞/点赞界面设置.txt");
                let b = a.readlines();
                a.close();
                if (b[0] == "🌟 点赞主页好友动态") {
                    var V = "\n当前：🌟 点赞主页好友动态" + "\n每条动态点赞次数：" + files.read("/storage/emulated/0/OrangeJs/自动动态点赞/点赞次数设置.txt") + "次";
                } else if (b[0] == "👍 点赞单个好友动态") {
                    var V = "\n当前：" + b[0] + "\n点赞好友空间：" + b[1] + "\n每条动态点赞次数：" + files.read("/storage/emulated/0/OrangeJs/自动动态点赞/点赞次数设置.txt") + "次";
                }
            } else if (files.exists("/storage/emulated/0/OrangeJs/自动动态点赞/点赞界面设置.txt") == true) {
                let a = open("/storage/emulated/0/OrangeJs/自动动态点赞/点赞界面设置.txt");
                let b = a.readlines();
                a.close();
                if (b[0] == "🌟 点赞主页好友动态") {
                    var V = "\n当前：🌟 点赞主页好友动态" + "\n请再进行点赞次数设置";
                } else if (b[0] == "👍 点赞单个好友动态") {
                    var V = "\n当前：" + b[0] + "\n点赞好友空间：" + b[1] + "\n请再进行点赞次数设置";
                }
            } else if (files.exists("/storage/emulated/0/OrangeJs/自动动态点赞/点赞次数设置.txt") == true) {
                var V = "\n每条动态点赞次数：" + files.read("/storage/emulated/0/OrangeJs/自动动态点赞/点赞次数设置.txt") + "次" + "\n请再进行点赞界面设置";
            }
            var e = ["点赞界面设置", "点赞次数设置"];
            var s = dialogs.select("🔧 请选择设置选项\n" + V, e)
            if (e[s] == "点赞界面设置") {
                //点赞界面设置
                while (true) {
                    var x = ["🌟 点赞主页好友动态", "👍 点赞单个好友动态"]
                    var XX = dialogs.select("请选择点赞界面", x);
                    if (x[XX] == "🌟 点赞主页好友动态") {
                        let a = dialogs.confirm(x[XX], "脚本将会在运行时进入QQ主页的“好友动态”界面下对所有说说进行点赞");
                        if (a == true) {
                            //保存设置
                            toastLog("设置已保存");
                            log("当前设置文件状态：" + files.createWithDirs("/storage/emulated/0/OrangeJs/自动动态点赞/点赞界面设置.txt"));
                            log("设置保存状态：" + files.write("/storage/emulated/0/OrangeJs/自动动态点赞/点赞界面设置.txt", "🌟 点赞主页好友动态"));
                            break;
                        } else {
                            toastLog("已取消");
                        }
                    } else if (x[XX] == "👍 点赞单个好友动态") {
                        let a = dialogs.confirm(x[XX], "脚本将会对您指定的QQ好友所公开的所有说说进行点赞，如需使用请点击确定后输入要进行点赞的QQ号码");
                        if (a == true) {
                            while (true) {
                                var b = dialogs.rawInput("请输入要进行点赞的QQ号码");
                                if (b != null && b != "" && b >= 10000 && b <= 9999999999 && b.search(" ") < 0) {
                                    let c = dialogs.confirm("您输入的QQ号码是：\n" + b, "检查正确请点击确定保存，脚本将在运行时点赞此QQ号码空间内的动态");
                                    if (c == true) {
                                        //保存设置
                                        toastLog("设置已保存");
                                        log("当前设置文件状态：" + files.createWithDirs("/storage/emulated/0/OrangeJs/自动动态点赞/点赞界面设置.txt"));
                                        log("设置保存状态：" + files.write("/storage/emulated/0/OrangeJs/自动动态点赞/点赞界面设置.txt", "👍 点赞单个好友动态" + "\n" + b));
                                        break;
                                    } else {
                                        toastLog("已取消保存，请重新输入");
                                    }
                                } else {
                                    toastLog("QQ号码格式错误或没有输入");
                                    break;
                                }
                            }
                            break;
                        } else {
                            toastLog("已取消");
                        }
                    } else {
                        toastLog("没有选择点赞设置\n返回上级菜单");
                        break;
                    }
                }
            } else if (e[s] == "点赞次数设置") {
                //点赞次数设置
                while (true) {
                    var a = dialogs.rawInput("请输入每条动态的点赞数");
                    if (a > 0 && a < 100) {
                        let c = dialogs.confirm("您输入的每条动态的点赞数为：" + a + "次", "点击确定后脚本将对每条动态点赞" + a + "次");
                        if (c == true) { //保存设置
                            toastLog("点赞数已保存更改");
                            log("当前设置文件状态：" + files.createWithDirs("/storage/emulated/0/OrangeJs/自动动态点赞/点赞次数设置.txt"));
                            log("设置保存状态：" + files.write("/storage/emulated/0/OrangeJs/自动动态点赞/点赞次数设置.txt", a));;
                            break;
                        }
                    } else if (a == 0 || a > 99) {
                        toastLog("点赞数不能为0或大于99次");
                    } else {
                        toastLog("输入错误，返回上一级");
                        break;
                    }
                }
            } else {
                toastLog("没有选择,返回主菜单");
                dialogs_js();
                break;
            }
        }
    }

    function Set_Back_way() {
        try {
            if (files.exists("/storage/emulated/0/OrangeJs/自动动态点赞/返回方法设置.txt") == true) {
                context_i_back = files.read("/storage/emulated/0/OrangeJs/自动动态点赞/返回方法设置.txt");
                log("返回方法：" + context_i_back);
                if (context_i_back > 1) {
                    try {
                        context_gestures_speed = files.read("/storage/emulated/0/OrangeJs/自动动态点赞/滑动返回速度.txt")
                        log("滑动返回速度：" + context_gestures_speed)
                    } catch (e) {
                        log("上次未完成滑动返回速度设置");
                        files.remove("/storage/emulated/0/OrangeJs/自动动态点赞/返回方法设置.txt");
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
                    files.createWithDirs("/storage/emulated/0/OrangeJs/自动动态点赞/返回方法设置.txt");
                    files.write("/storage/emulated/0/OrangeJs/自动动态点赞/返回方法设置.txt", context_i_back);
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
                        files.createWithDirs("/storage/emulated/0/OrangeJs/自动动态点赞/滑动返回速度.txt");
                        files.write("/storage/emulated/0/OrangeJs/自动动态点赞/滑动返回速度.txt", context_gestures_speed);
                    }
                }
                if (files.exists("/storage/emulated/0/OrangeJs/自动动态点赞/返回方法设置.txt") == true && files.exists("/storage/emulated/0/OrangeJs/自动动态点赞/X返回方法设置.txt") == true) {
                    log("删除");
                    files.remove("/storage/emulated/0/OrangeJs/自动动态点赞/X返回方法设置.txt");
                    dialogs_js();
                } else if (files.exists("/storage/emulated/0/OrangeJs/自动动态点赞/X返回方法设置.txt") == true) {
                    log("重命名");
                    files.rename("/storage/emulated/0/OrangeJs/自动动态点赞/X返回方法设置.txt", "返回方法设置.txt");
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
    if (files.exists("/storage/emulated/0/OrangeJs/自动动态点赞/吐司or日志.txt") == true) {
        let z = files.read("/storage/emulated/0/OrangeJs/自动动态点赞/吐司or日志.txt");
        if (z == "吐司") {
            var T = 0;
        } else if (z == "日志") {
            var T = 1;
        } else {
            toastLog("“吐司or日志”文件错误，已尝试删除并使用默认日志");
            try {
                files.remove("/storage/emulated/0/OrangeJs/自动动态点赞/吐司or日志.txt");
            } catch (e) {
                toastLog("删除“吐司or日志”文件失败！");
            }
            var T = 1;
        }
    } else {
        try {
            files.createWithDirs("/storage/emulated/0/OrangeJs/自动动态点赞/吐司or日志.txt");
            files.write("/storage/emulated/0/OrangeJs/自动动态点赞/吐司or日志.txt", "日志");
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
                //如果按下的时间超过1.5秒判断为长按
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
            toastLog("使用ROOT返回\n请确保已给ROOT权限！");
            Back();
            sleep(1000);
        }
        if (context_i_back == 2) {
            toastLog("从屏幕中间向从左向内滑动来返回");
            gestures([context_gestures_speed, [0, height / 2],
                [500, height / 2]
            ]);
            sleep(1000);
        }
        if (context_i_back == 4) {
            toastLog("从屏幕左侧下方向上滑动来返回");
            gestures([context_gestures_speed, [width / 2 - 300, height - 1],
                [width / 2 - 300, height - 500]
            ]);
            sleep(1000);
        }
        if (context_i_back == 3) {
            toastLog("从屏幕中间向从右向内滑动来返回");
            gestures([context_gestures_speed, [width - 1, height / 2],
                [width - 500, height / 2]
            ]);
            sleep(1000);
        }
        if (context_i_back == 5) {
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
    let a = open("/storage/emulated/0/OrangeJs/自动动态点赞/点赞界面设置.txt");
    let b = a.readlines();
    a.close();
    if (b[0] == "🌟 点赞主页好友动态") {
        openQQZone();
    } else if (b[0] == "👍 点赞单个好友动态") {
        openQQContacts(b[1]);
    }
    ThumbsUp();

    function openQQZone() {
        while (true) {
            if (id("com.tencent.mobileqq:id/qzone_feed_entry").findOnce() != null) {
                id("com.tencent.mobileqq:id/qzone_feed_entry").findOnce().click();
                toastLog("已尝试点击“好友动态”按钮");
                sleep(2000);
                ThumbsUp();
                break;
            } else if (id("com.tencent.mobileqq:id/kbi").className("android.widget.TextView").text("动态").findOnce() != null) {
                id("com.tencent.mobileqq:id/kbi").className("android.widget.TextView").text("动态").findOnce().parent().parent().click();
                toastLog("已尝试点击“主页动态”按钮");
                sleep(2000);
            } else if (id("com.tencent.mobileqq:id/a4a").desc("返回").findOnce() != null && id("com.tencent.mobileqq:id/nightmode_txt").findOnce() != null) {
                id("com.tencent.mobileqq:id/a4a").desc("返回").findOnce().click();
                toastLog("已尝试点击返回按钮");
                sleep(2000);
            } else if (id("com.tencent.mobileqq:id/b9o").findOnce() != null && id("com.tencent.mobileqq:id/b9o").findOnce().childCount() == 3) {
                id("com.tencent.mobileqq:id/b9o").findOne(2000).child(2).child(3).click();
                toastLog("当前QQ处于简洁模式\n已尝试点击动态按钮");
                sleep(2000);
                if (className("android.widget.AbsListView").id("com.tencent.mobileqq:id/j").findOnce() != null) {
                    break;
                }
            } else if (currentPackage() != "com.tencent.mobileqq") {
                app.startActivity({
                    action: "android.intent.action.VIEW", //此处可为其他值
                    packageName: "com.tencent.mobileqq",
                    className: "com.tencent.mobileqq.activity.SplashActivity"
                    //此处可以加入其他内容，如data、extras
                });
                toastLog("正在尝试启动QQ……");
                sleep(3000);
            } else {
                toastLog("已处于QQ尝试返回主界面");
                Justback();
                sleep(2000);
            }
        }
    }

    function openQQContacts(QQnumber) {
        app.startActivity({
            action: "android.intent.action.VIEW",
            packageName: "com.tencent.mobileqq",
            className: "com.tencent.mobileqq.activity.JumpActivity",
            data: app.parseUri("mqqwpa://im/chat?chat_type=wpa&uin=" + QQnumber),
            flags: ["grant_read_uri_permission", "grant_write_uri_permission"],
        });
        id("com.tencent.mobileqq:id/title").findOne(3000).click();
        className("android.widget.LinearLayout").desc("QQ空间").findOne(3000).click();
        ThumbsUp();
    }

    function ThumbsUp() {
        if (id("com.tencent.mobileqq:id/ha1").findOnce() != null) {
            id("com.tencent.mobileqq:id/ha1").findOnce().click();
            toastLog("已尝试点击顶部“好友动态”");
            sleep(2000);
        }
        var T = 0;
        while (className("android.widget.AbsListView").id("com.tencent.mobileqq:id/j").findOnce() != null) {
            var A = id("com.tencent.mobileqq:id/c7p").findOnce();
            if (A != null && A.selected() == false) {
                while (true) {
                    var A = id("com.tencent.mobileqq:id/c7p").selected(false).findOnce();
                    var B = className("android.widget.AbsListView").id("com.tencent.mobileqq:id/j").findOnce();
                    if (A.bounds().centerY() < B.bounds().bottom && A.bounds().centerY() > B.bounds().top) {
                        break;
                    } else if (A.bounds().centerY() > B.bounds().bottom) {
                        log("超出顶部！" + A.bounds().top);
                        swipe(device.width / 2, device.height / 2, device.width / 2, device.height / 2 - 800, 500);
                    } else if (A.bounds().centerY() < B.bounds().top) {
                        log("超出底部！" + A.bounds().top);
                        swipe(device.width / 2, device.height / 2, device.width / 2, device.height / 2 + 800, 500);
                    }
                }
                var zan = files.read("/storage/emulated/0/OrangeJs/自动动态点赞/点赞次数设置.txt");
                for (var Zan = zan; Zan > 0; Zan--) {
                    A.click();
                }
                T++;
                toastLog("已点赞" + T + "条动态");
                sleep(1000);
            } else {
                swipe(device.width / 2, device.height / 2, device.width / 2, device.height / 2 - 400, 500);
                sleep(100);
            }
            if (id("com.tencent.mobileqq:id/b3i").text("查看更多").findOnce() != null) {
                id("com.tencent.mobileqq:id/b3i").text("查看更多").findOnce().parent().parent().click();
                toastLog("已尝试点击“查看更多”")
                sleep(2000);
            }
            if (id("com.tencent.mobileqq:id/kl2").text("该用户尚未开通空间").findOnce() != null) {
                dialogs.alert("这个人没有开通空间哦(^_^)");
                break;
            } else if (id("com.tencent.mobileqq:id/cj_").text("你暂时没有收到任何动态哦").findOnce() != null) {
                dialogs.alert("你暂时没有收到任何动态哦");
                break;
            } else if (id("com.tencent.mobileqq:id/b3i").text("正在加载更多…").findOnce() != null) {
                sleep(2000);
            }
        }
    }
    dialogs.alert("自动动态点赞：\n脚本已运行完成！");
    exit();
}