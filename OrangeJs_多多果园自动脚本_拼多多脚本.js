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
        dialogs.alert("您没有安装拼多多APP");
        exit();
    }
}
var InstalledVersion = getPackageVersion("com.xunmeng.pinduoduo");
var SupportVersion = ["5.3.0","5.2.0", "5.1.1", "5.0.0", "4.92.0", "4.91.0", "4.90.0"]

var Each = SupportVersion.length;
var While = 1;
while (While == 1) {
    if (Each < 0) {
        context_check = null;
        //判断是否选择了不再显示
        if (files.exists("/storage/emulated/0/OrangeJs/多多果园自动脚本/不再显示.txt") != true) {
            dialogs.build({
                //对话框标题
                title: "当前拼多多APP版本未经测试",
                titleColor: "#F44336",
                contentLineSpacing: 1.2,
                //对话框内容
                content: "本脚本目前已测试的软件版本有：\n拼多多" + SupportVersion + "\n您当前安装的版本为：" + InstalledVersion + "\n如您使用没有问题可直接忽略\n若有问题可使用相应版本或反馈",
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
                    var NeverShow = files.createWithDirs("/storage/emulated/0/OrangeJs/多多果园自动脚本/不再显示.txt");
                    if (NeverShow == false) {
                        dialogs.alert("设置不再显示失败！\n请授予本软件存储权限！");
                    }
                }
                engines.execScript("多多果园自动脚本", "RunJs()\n" + RunJs.toString());
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
            engines.execScript("多多果园自动脚本", "RunJs()\n" + RunJs.toString());
        }
        var While = 0;
    } else if (SupportVersion[Each] != InstalledVersion) {
        Each--;
    } else {
        var While = 0;
        log("已安装支持的软件版本：" + SupportVersion[Each]);
        engines.execScript("多多果园自动脚本", "RunJs()\n" + RunJs.toString());
    }
}

function RunJs() {
    dialogs_js();
    var height = device.height;
    var width = device.width;

    function dialogs_js() {
        var ScriptVersion = ("Beta1.4"); //版本
        log("软件脚本已开始运行，如果没有弹出菜单请强行停止再打开本软件！");
        var options_ = ["▶️ 开始运行脚本", "🕒 定时运行脚本", "⏹ 停止运行脚本", "🌐 向作者反馈问题", "*️⃣ 脚本介绍/作者信息", "🔧 手动打开模式"]
        var i = dialogs.select("*+*+*+* 橘衫の脚本 *+*+*+*\n*+*+*+*  Orange Js *+*+*+*\n\n欢迎使用 (◍•ᴗ•◍)❤" + "\n" + "“多多果园自动脚本”" + ScriptVersion + "\n请选择一个要进行的选项", options_);
        if (i < 0) {
            toastLog("没有选择，如需关闭对话框\n  请选择“停止运行脚本”");
            dialogs_js();
        } else if (i == 0) {
            toastLog(options_[i]);
            context_Manualstate = 0;
            Set_Back_way();
            //设置浇水次数
            var JiaoShuiC = ["（脚本一次运行的浇水总次数）\n\n💧 浇水10次", "💦 浇水20次", "🌊 浇水30次"];
            var JiaoShui = dialogs.select("请选择脚本浇水的次数", JiaoShuiC);
            if (JiaoShui == 0) {
                toastLog("您选择了：浇水10次");
                context_JiaoShui = 0;
            } else if (JiaoShui == 1) {
                toastLog("您选择了：浇水20次");
                context_JiaoShui = 1;
            } else if (JiaoShui == 2) {
                toastLog("您选择了：浇水30次");
                context_JiaoShui = 2;
            } else {
                toastLog("没有选择浇水次数\n默认浇水次数10次");
                context_JiaoShui = 0;
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
            alert("=(^･ω･^)=  脚本作者\n酷安@橘衫下邂逅的时光", "“多多果园自动脚本” " + ScriptVersion + "\n当前软件版本" + app.versionName + "(" + app.versionCode + ")\n\n全自动的拼多多活动脚本！\n支持多种分辨率，安卓7+无需ROOT！\n支持启动后自动更新脚本，无需费心即可保持最新，且开放全部的脚本代码！\n脚本的全部运行不加任何广告，不干任何不相关的事情！不触碰任何个人隐私！\n此脚本为兴趣制作，仅供参考，严禁售卖\n\n如有任何问题，欢迎向作者反馈哦～");
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
            //设置浇水次数
            var JiaoShuiC = ["（脚本一次运行的浇水总次数）\n\n💧 浇水10次", "💦 浇水20次", "🌊 浇水30次"];
            var JiaoShui = dialogs.select("请选择脚本浇水的次数", JiaoShuiC);
            if (JiaoShui == 0) {
                toastLog("您选择了：浇水10次");
                context_JiaoShui = 0;
            } else if (JiaoShui == 1) {
                toastLog("您选择了：浇水20次");
                context_JiaoShui = 1;
            } else if (JiaoShui == 2) {
                toastLog("您选择了：浇水30次");
                context_JiaoShui = 2;
            } else {
                toastLog("没有选择浇水次数\n默认浇水次数10次");
                context_JiaoShui = 0;
            }
            wait_Time_over();
        } else if (i == 5) {
            toastLog(options_[i]);
            context_Manualstate = 1;
            Set_Back_way() //设置手动模式
            //设置浇水次数
            var JiaoShuiC = ["（脚本一次运行的浇水总次数）\n\n💧 浇水10次", "💦 浇水20次", "🌊 浇水30次"];
            var JiaoShui = dialogs.select("请选择脚本浇水的次数", JiaoShuiC);
            if (JiaoShui == 0) {
                toastLog("您选择了：浇水10次");
                context_JiaoShui = 0;
            } else if (JiaoShui == 1) {
                toastLog("您选择了：浇水20次");
                context_JiaoShui = 1;
            } else if (JiaoShui == 2) {
                toastLog("您选择了：浇水30次");
                context_JiaoShui = 2;
            } else {
                toastLog("没有选择浇水次数\n默认浇水次数10次");
                context_JiaoShui = 0;
            }
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

    function getPackageVersion(packageName) {
        try {
            importPackage(android.content);
            var pckMan = context.getPackageManager();
            var packageInfo = pckMan.getPackageInfo(packageName, 0);
            return packageInfo.versionName;
        } catch (e) {
            dialogs.alert("您没有安装拼多多APP");
            exit();
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
            toastLog("使用ROOT返回\n请确保已给ROOT权限！");
            Back();
            sleep(1000);
        }
        if (context_i_back == 2) {
            OpenApp();
            EnSure();
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


    function OpenApp() {
        app.startActivity({
            action: "android.intent.action.VIEW", //此处可为其他值
            packageName: "com.xunmeng.pinduoduo",
            className: "com.xunmeng.pinduoduo.ui.activity.MainFrameActivity"
            //此处可以加入其他内容，如data、extras
        });
        var deng = 5;
        for (deng == 5; deng > 0; deng--) {
            toastLog("正在等待“拼多多”启动缓冲\n剩余" + deng + "秒……");
            sleep(2000);
            if (id("com.xunmeng.pinduoduo:id/bza").findOnce() != null) { //4.90.0
                toastLog("已处于拼多多首页");
                var deng = 0;
            } else if (id("d1j").className("android.widget.TextView").text("首页").findOnce() != null) { //4.91.0首页
                toastLog("已处于拼多多首页");
                var deng = 0;
            } else if (id("d25").className("android.widget.TextView").text("首页").findOnce() != null) { //4.92.0首页
                toastLog("已处于拼多多首页");
                var deng = 0;
            } else if (id("com.xunmeng.pinduoduo:id/c09").findOnce() != null) { //4.91.0
                toastLog("已处于拼多多首页");
                var deng = 0;
            } else if (id("com.xunmeng.pinduoduo:id/c0s").findOnce() != null) { //4.92.0
                toastLog("已处于拼多多首页");
                var deng = 0;
            }
        }
        var While = 1;
        while (While == 1) {
            if (id("com.xunmeng.pinduoduo:id/bza").findOnce() != null) { //4.90.0
                id("com.xunmeng.pinduoduo:id/bza").findOnce().click();
                toastLog("已尝试点击“主页搜索框4.90.0”");
                var While = 0;
                sleep(2000);
            } else if (id("com.xunmeng.pinduoduo:id/c09").findOnce() != null) { //4.91.0
                id("com.xunmeng.pinduoduo:id/c09").findOnce().click();
                toastLog("已尝试点击“主页搜索框4.91.0”");
                var While = 0;
                sleep(2000);
            } else if (id("com.xunmeng.pinduoduo:id/c0s").findOnce() != null) { //4.92.0
                id("com.xunmeng.pinduoduo:id/c0s").findOnce().click();
                toastLog("已尝试点击“主页搜索框4.92.0”");
                var While = 0;
                sleep(2000);
            } else if (getPackageVersion("com.xunmeng.pinduoduo") == "5.0.0" && id("com.xunmeng.pinduoduo:id/c1s").findOnce() != null) { //5.0.0
                id("com.xunmeng.pinduoduo:id/c1s").findOnce().click();
                toastLog("已尝试点击“主页搜索框5.0.0”");
                var While = 0;
                sleep(2000);
            } else if (getPackageVersion("com.xunmeng.pinduoduo") == "5.1.1" && id("com.xunmeng.pinduoduo:id/c3i").findOnce() != null) { //5.1.1
                id("com.xunmeng.pinduoduo:id/c3i").findOnce().click();
                toastLog("已尝试点击“主页搜索框5.1.1”");
                var While = 0;
                sleep(2000);
            } else if (id("com.xunmeng.pinduoduo:id/c6u").findOnce() != null) { //5.2.0
                id("com.xunmeng.pinduoduo:id/c6u").findOnce().click();
                toastLog("已尝试点击“主页搜索框5.2.0”");
                var While = 0;
                sleep(2000);
            } else if (id("com.xunmeng.pinduoduo:id/c9x").findOnce() != null) { //5.3.0
                id("com.xunmeng.pinduoduo:id/c9x").findOnce().click();
                toastLog("已尝试点击“主页搜索框5.3.0”");
                var While = 0;
                sleep(2000);
            } else if (id("d1j").className("android.widget.TextView").text("首页").findOnce() != null) { //4.91.0
                var S = id("d1j").className("android.widget.TextView").text("首页").findOnce().bounds();
                click(S.centerX(), S.centerY());
                toastLog("已找到首页按钮尝试点击…");
                sleep(2000);
            } else if (id("d25").className("android.widget.TextView").text("首页").findOnce() != null) { //4.92.0
                var S = id("d25").className("android.widget.TextView").text("首页").findOnce().bounds();
                click(S.centerX(), S.centerY());
                toastLog("已找到首页按钮尝试点击…");
                sleep(2000);
            } else if (id("d38").className("android.widget.TextView").text("首页").findOnce() != null) { //5.0.0
                var S = id("d38").className("android.widget.TextView").text("首页").findOnce().bounds();
                click(S.centerX(), S.centerY());
                toastLog("已找到首页按钮尝试点击…");
                sleep(2000);
            } else if (id("d51").className("android.widget.TextView").text("首页").findOnce() != null) { //5.1.1
                id("d51").className("android.widget.TextView").text("首页").findOne(1000).parent().click();
                toastLog("已找到首页按钮尝试点击…");
                sleep(2000);
            } else if (id("d8q").className("android.widget.TextView").text("首页").findOnce() != null) { //5.2.0
                id("d8q").className("android.widget.TextView").text("首页").findOne(1000).parent().click();
                toastLog("已找到首页按钮尝试点击…");
                sleep(2000);
            } else if (id("dba").className("android.widget.TextView").text("首页").findOnce() != null) { //5.3.0
                id("dba").className("android.widget.TextView").text("首页").findOne(1000).parent().click();
                toastLog("已找到首页按钮尝试点击…");
                sleep(2000);
            } else {
                Justback();
                toastLog("拼多多已启动但未处于首页\n正在尝试返回拼多多首页中……");
                if (text("直接离开").clickable(true).findOnce() != null) {
                    text("直接离开").clickable(true).findOnce().click();
                }
                sleep(3000);
                if (currentPackage() != "com.xunmeng.pinduoduo") {
                    app.startActivity({
                        action: "android.intent.action.VIEW", //此处可为其他值
                        packageName: "com.xunmeng.pinduoduo",
                        className: "com.xunmeng.pinduoduo.ui.activity.MainFrameActivity"
                        //此处可以加入其他内容，如data、extras
                    });
                    var deng = 5;
                    for (deng == 5; deng > 0; deng--) {
                        toastLog("正在等待“拼多多”启动缓冲\n剩余" + deng + "秒……");
                        sleep(2000);
                        if (id("com.xunmeng.pinduoduo:id/bza").findOnce() != null) { //4.90.0
                            toastLog("已处于拼多多首页");
                            var deng = 0;
                        } else if (id("com.xunmeng.pinduoduo:id/c09").findOnce() != null) { //4.91.0
                            toastLog("已处于拼多多首页");
                            var deng = 0;
                        } else if (id("com.xunmeng.pinduoduo:id/c0s").findOnce() != null) { //4.92.0
                            toastLog("已处于拼多多首页");
                            var deng = 0;
                        } else if (id("com.xunmeng.pinduoduo:id/c1s").findOnce() != null) { //5.0.0
                            toastLog("已处于拼多多首页");
                            var deng = 0;
                        } else if (id("com.xunmeng.pinduoduo:id/c3i").findOnce() != null) { //5.1.1
                            toastLog("已处于拼多多首页");
                            var deng = 0;
                        } else if (id("com.xunmeng.pinduoduo:id/c6u").findOnce() != null) { //5.2.0
                            toastLog("已处于拼多多首页");
                            var deng = 0;
                        } else if (id("com.xunmeng.pinduoduo:id/c9x").findOnce() != null) { //5.3.0
                            toastLog("已处于拼多多首页");
                            var deng = 0;
                        }
                        /*else if (id("d1j").className("android.widget.TextView").text("首页").findOnce() != null) { //4.91.0
                                                toastLog("已处于拼多多首页");
                                                var deng = 0;
                                            } else if (id("d25").className("android.widget.TextView").text("首页").findOnce() != null) { //4.92.0
                                                toastLog("已处于拼多多首页");
                                                var deng = 0;
                                            }*/
                    }
                }
            }
        }

        if (id("com.xunmeng.pinduoduo:id/bzg").findOnce() != null) { //4.90.0
            toastLog("已处于搜索界面");
            setText("多多果园");
            sleep(2000);
            if (id("com.xunmeng.pinduoduo:id/b1").text("多多果园").findOnce() != null) {
                var ks = id("com.xunmeng.pinduoduo:id/b1").text("多多果园").findOnce().bounds();
                click(ks.centerX(), ks.centerY());
                toastLog("已尝试点击快速入口“多多果园”");
                sleep(2000);
                var deng = 10;
                for (deng == 10; deng > 0; deng--) {
                    if (text("bottle_default_bt").findOnce() != null) {
                        toastLog("已处于“多多果园”活动界面");
                        var deng = 0;
                    } else {
                        toastLog("正在等待“多多果园”活动界面加载\n当前剩余" + deng + "秒……");
                        sleep(1500);
                    }
                }
                if (text("bottle_default_bt").findOnce() == null) {
                    toastLog("“多多果园”活动未成功加载\n正在重新打开软件……");
                    sleep(2000);
                    OpenApp();
                }
            } else if (id("com.xunmeng.pinduoduo:id/bz6").findOnce() != null) {
                id("com.xunmeng.pinduoduo:id/bz6").findOnce().click();
                toastLog("已尝试点击“搜索”按钮");
                sleep(2000);
                var deng = 10;
                for (deng == 10; deng > 0; deng--) {
                    if (id("com.xunmeng.pinduoduo:id/bz0").findOnce() != null) {
                        var deng = 0;
                        toastLog("已找到“多多果园”入口");
                    } else {
                        toastLog("正在等待“多多果园”入口加载\n当前剩余" + deng + "秒……");
                        sleep(1500);
                    }
                }
                if (id("com.xunmeng.pinduoduo:id/bz0").findOnce() != null) {
                    var A = id("com.xunmeng.pinduoduo:id/bz0").findOnce().children();
                    A[0].click();
                    toastLog("已尝试点击“多多果园”入口");
                    sleep(2000);
                    var deng = 10;
                    for (deng == 10; deng > 0; deng--) {
                        if (text("bottle_default_bt").findOnce() != null) {
                            toastLog("已处于“多多果园”活动界面");
                            var deng = 0;
                        } else {
                            toastLog("正在等待“多多果园”活动界面加载\n当前剩余" + deng + "秒……");
                            sleep(1500);
                        }
                    }
                    if (text("bottle_default_bt").findOnce() == null) {
                        toastLog("“多多果园”活动未成功加载\n正在重新打开软件……");
                        OpenApp();
                    }
                } else {
                    toastLog("未找到“多多果园”入口\n重新打开软件中……");
                    sleep(1500);
                    OpenApp();
                }
            }
        } //↓4.91.0
        else if (id("com.xunmeng.pinduoduo:id/c0e").findOnce() != null) {
            toastLog("已处于搜索界面");
            setText("多多果园");
            sleep(2000);
            if (id("com.xunmeng.pinduoduo:id/b1").text("多多果园").findOnce() != null) {
                var ks = id("com.xunmeng.pinduoduo:id/b1").text("多多果园").findOnce().bounds();
                click(ks.centerX(), ks.centerY());
                toastLog("已尝试点击快速入口“多多果园”");
                sleep(2000);
                var deng = 10;
                for (deng == 10; deng > 0; deng--) {
                    /*if (text("bottle_default_bt").findOnce() != null) {
                        toastLog("已处于“多多果园”活动界面");
                        var deng = 0;
                    } else {}*/
                    toastLog("正在等待“多多果园”活动界面加载\n当前剩余" + deng + "秒……");
                    sleep(1500);

                }
                if (text("bottle_default_bt").findOnce() == null) {
                    toastLog("“多多果园”活动未成功加载\n正在重新打开软件……");
                    sleep(2000);
                    OpenApp();
                }
            } else if (id("com.xunmeng.pinduoduo:id/c04").findOnce() != null) {
                id("com.xunmeng.pinduoduo:id/c04").findOnce().click();
                toastLog("已尝试点击“搜索”按钮");
                sleep(2000);
                var deng = 10;
                for (deng == 10; deng > 0; deng--) {
                    if (id("com.xunmeng.pinduoduo:id/bzy").findOnce() != null) {
                        var deng = 0;
                        toastLog("已找到“多多果园”入口");
                    } else {
                        toastLog("正在等待“多多果园”入口加载\n当前剩余" + deng + "秒……");
                        sleep(1500);
                    }
                }
                if (id("com.xunmeng.pinduoduo:id/bzy").findOnce() != null) {
                    var A = id("com.xunmeng.pinduoduo:id/bzy").findOnce().children();
                    A[0].click();
                    toastLog("已尝试点击“多多果园”入口");
                    sleep(2000);
                    var deng = 10;
                    for (deng == 10; deng > 0; deng--) {
                        /*if (text("bottle_default_bt").findOnce() != null) {
                            toastLog("已处于“多多果园”活动界面");
                            var deng = 0;
                        } else {}*/
                        toastLog("正在等待“多多果园”活动界面加载\n当前剩余" + deng + "秒……");
                        sleep(1500);

                    }
                    if (text("bottle_default_bt").findOnce() == null) {
                        toastLog("“多多果园”活动未成功加载\n正在重新打开软件……");
                        OpenApp();
                    }
                } else {
                    toastLog("未找到“多多果园”入口\n重新打开软件中……");
                    sleep(1500);
                    OpenApp();
                }
            }
        } //↓4.92.0
        else if (id("com.xunmeng.pinduoduo:id/c0y").findOnce() != null) {
            toastLog("已处于搜索界面4.92.0");
            setText("多多果园");
            sleep(2000);
            if (id("com.xunmeng.pinduoduo:id/b1").text("多多果园").findOnce() != null) {
                var ks = id("com.xunmeng.pinduoduo:id/b1").text("多多果园").findOnce().bounds();
                click(ks.centerX(), ks.centerY());
                toastLog("已尝试点击快速入口“多多果园”");
                sleep(2000);
                var deng = 10;
                for (deng == 10; deng > 0; deng--) {
                    /*if (text("bottle_default_bt").findOnce() != null) {
                        toastLog("已处于“多多果园”活动界面");
                        var deng = 0;
                    } else {}*/
                    toastLog("正在等待“多多果园”活动界面加载\n当前剩余" + deng + "秒……");
                    sleep(1500);

                }
                if (text("bottle_default_bt").findOnce() == null) {
                    toastLog("“多多果园”活动未成功加载\n正在重新打开软件……");
                    sleep(2000);
                    OpenApp();
                }
            } else if (id("com.xunmeng.pinduoduo:id/c0n").findOnce() != null) {
                id("com.xunmeng.pinduoduo:id/c0n").findOnce().click();
                toastLog("已尝试点击“搜索”按钮");
                sleep(2000);
                var deng = 10;
                for (deng == 10; deng > 0; deng--) {
                    if (id("com.xunmeng.pinduoduo:id/c0h").findOnce() != null) {
                        var deng = 0;
                        toastLog("已找到“多多果园”入口");
                    } else {
                        toastLog("正在等待“多多果园”入口加载\n当前剩余" + deng + "秒……");
                        sleep(1500);
                    }
                }
                if (id("com.xunmeng.pinduoduo:id/c0h").findOnce() != null) {
                    var A = id("com.xunmeng.pinduoduo:id/c0h").findOnce().children();
                    A[0].click();
                    toastLog("已尝试点击“多多果园”入口");
                    sleep(2000);
                    var deng = 10;
                    for (deng == 10; deng > 0; deng--) {
                        /*if (text("bottle_default_bt").findOnce() != null) {
                            toastLog("已处于“多多果园”活动界面");
                            var deng = 0;
                        } else {}*/
                        toastLog("正在等待“多多果园”活动界面加载\n当前剩余" + deng + "秒……");
                        sleep(1500);

                    }
                    if (text("bottle_default_bt").findOnce() == null) {
                        toastLog("“多多果园”活动未成功加载\n正在重新打开软件……");
                        OpenApp();
                    }
                } else {
                    toastLog("未找到“多多果园”入口\n重新打开软件中……");
                    sleep(1500);
                    OpenApp();
                }
            }
        } //↓5.0.0
        else if (id("com.xunmeng.pinduoduo:id/c1y").findOnce() != null) {
            toastLog("已处于搜索界面");
            setText("多多果园");
            sleep(2000);
            if (id("com.xunmeng.pinduoduo:id/b2").text("多多果园").findOnce() != null) {
                var ks = id("com.xunmeng.pinduoduo:id/b2").text("多多果园").findOnce().bounds();
                click(ks.centerX(), ks.centerY());
                toastLog("已尝试点击快速入口“多多果园”");
                sleep(2000);
                var deng = 10;
                for (deng == 10; deng > 0; deng--) {
                    /*if (text("bottle_default_bt").findOnce() != null) {
                        toastLog("已处于“多多果园”活动界面");
                        var deng = 0;
                    } else {}*/
                    toastLog("正在等待“多多果园”活动界面加载\n当前剩余" + deng + "秒……");
                    sleep(1500);

                }
                if (text("bottle_default_bt").findOnce() == null) {
                    toastLog("“多多果园”活动未成功加载\n正在重新打开软件……");
                    sleep(2000);
                    OpenApp();
                }
            } else if (id("com.xunmeng.pinduoduo:id/c1n").findOnce() != null) {
                id("com.xunmeng.pinduoduo:id/c1n").findOnce().click();
                toastLog("已尝试点击“搜索”按钮");
                sleep(2000);
                var deng = 10;
                for (deng == 10; deng > 0; deng--) {
                    if (id("com.xunmeng.pinduoduo:id/c1h").findOnce() != null) {
                        var deng = 0;
                        toastLog("已找到“多多果园”入口");
                    } else {
                        toastLog("正在等待“多多果园”入口加载\n当前剩余" + deng + "秒……");
                        sleep(1500);
                    }
                }
                if (id("com.xunmeng.pinduoduo:id/c1h").findOnce() != null) {
                    var A = id("com.xunmeng.pinduoduo:id/c1h").findOnce().children();
                    A[0].click();
                    toastLog("已尝试点击“多多果园”入口");
                    sleep(2000);
                    var deng = 10;
                    for (deng == 10; deng > 0; deng--) {
                        /*if (text("bottle_default_bt").findOnce() != null) {
                            toastLog("已处于“多多果园”活动界面");
                            var deng = 0;
                        } else {}*/
                        toastLog("正在等待“多多果园”活动界面加载\n当前剩余" + deng + "秒……");
                        sleep(1500);

                    }
                    if (text("bottle_default_bt").findOnce() == null) {
                        toastLog("“多多果园”活动未成功加载\n正在重新打开软件……");
                        OpenApp();
                    }
                } else {
                    toastLog("未找到“多多果园”入口\n重新打开软件中……");
                    sleep(1500);
                    OpenApp();
                }
            }
        } //↓5.1.1
        else if (id("com.xunmeng.pinduoduo:id/c3o").findOnce() != null) {
            toastLog("已处于搜索界面");
            setText("多多果园");
            sleep(2000);
            if (id("com.xunmeng.pinduoduo:id/b2").text("多多果园").findOnce() != null) {
                var ks = id("com.xunmeng.pinduoduo:id/b2").text("多多果园").findOnce().bounds();
                click(ks.centerX(), ks.centerY());
                toastLog("已尝试点击快速入口“多多果园”");
                sleep(2000);
                var deng = 10;
                for (deng == 10; deng > 0; deng--) {
                    /*if (text("bottle_default_bt").findOnce() != null) {
                        toastLog("已处于“多多果园”活动界面");
                        var deng = 0;
                    } else {}*/
                    toastLog("正在等待“多多果园”活动界面加载\n当前剩余" + deng + "秒……");
                    sleep(1500);

                }
                if (text("bottle_default_bt").findOnce() == null) {
                    toastLog("“多多果园”活动未成功加载\n正在重新打开软件……");
                    sleep(2000);
                    OpenApp();
                }
            } else if (id("com.xunmeng.pinduoduo:id/c3d").findOnce() != null) {
                id("com.xunmeng.pinduoduo:id/c3d").findOnce().click();
                toastLog("已尝试点击“搜索”按钮");
                sleep(2000);
                var deng = 10;
                for (deng == 10; deng > 0; deng--) {
                    if (id("com.xunmeng.pinduoduo:id/c1h").findOnce() != null) {
                        var deng = 0;
                        toastLog("已找到“多多果园”入口");
                    } else {
                        toastLog("正在等待“多多果园”入口加载\n当前剩余" + deng + "秒……");
                        sleep(1500);
                    }
                }
                if (id("com.xunmeng.pinduoduo:id/c38").findOnce() != null) {
                    id("com.xunmeng.pinduoduo:id/c38").findOnce().child(0).click();
                    toastLog("已尝试点击“多多果园”入口");
                    sleep(2000);
                    var deng = 10;
                    for (deng == 10; deng > 0; deng--) {
                        /*if (text("bottle_default_bt").findOnce() != null) {
                            toastLog("已处于“多多果园”活动界面");
                            var deng = 0;
                        } else {}*/
                        toastLog("正在等待“多多果园”活动界面加载\n当前剩余" + deng + "秒……");
                        sleep(1500);

                    }
                    if (text("bottle_default_bt").findOnce() == null) {
                        toastLog("“多多果园”活动未成功加载\n正在重新打开软件……");
                        OpenApp();
                    }
                } else {
                    toastLog("未找到“多多果园”入口\n重新打开软件中……");
                    sleep(1500);
                    OpenApp();
                }
            }
        } //↓5.2.0
        else if (id("com.xunmeng.pinduoduo:id/c70").findOnce() != null) {
            toastLog("已处于搜索界面");
            setText("多多果园");
            sleep(2000);
            if (id("com.xunmeng.pinduoduo:id/b1").text("多多果园").findOnce() != null) {
                var ks = id("com.xunmeng.pinduoduo:id/b1").text("多多果园").findOnce().bounds();
                click(ks.centerX(), ks.centerY());
                toastLog("已尝试点击快速入口“多多果园”");
                sleep(2000);
                var deng = 10;
                for (deng == 10; deng > 0; deng--) {
                    /*if (text("bottle_default_bt").findOnce() != null) {
                        toastLog("已处于“多多果园”活动界面");
                        var deng = 0;
                    } else {}*/
                    toastLog("正在等待“多多果园”活动界面加载\n当前剩余" + deng + "秒……");
                    sleep(1500);

                }
                if (text("bottle_default_bt").findOnce() == null) {
                    toastLog("“多多果园”活动未成功加载\n正在重新打开软件……");
                    sleep(2000);
                    OpenApp();
                }
            } else if (id("com.xunmeng.pinduoduo:id/c6p").findOnce() != null) {
                id("com.xunmeng.pinduoduo:id/c6p").findOnce().click();
                toastLog("已尝试点击“搜索”按钮");
                sleep(2000);
                var deng = 10;
                for (deng == 10; deng > 0; deng--) {
                    if (id("com.xunmeng.pinduoduo:id/c6j").findOnce() != null) {
                        var deng = 0;
                        toastLog("已找到“多多果园”入口");
                    } else {
                        toastLog("正在等待“多多果园”入口加载\n当前剩余" + deng + "秒……");
                        sleep(1500);
                    }
                }
                if (id("com.xunmeng.pinduoduo:id/c6j").findOnce() != null) {
                    id("com.xunmeng.pinduoduo:id/c6j").findOnce().child(0).click();
                    toastLog("已尝试点击“多多果园”入口");
                    sleep(2000);
                    var deng = 10;
                    for (deng == 10; deng > 0; deng--) {
                        /*if (text("bottle_default_bt").findOnce() != null) {
                            toastLog("已处于“多多果园”活动界面");
                            var deng = 0;
                        } else {}*/
                        toastLog("正在等待“多多果园”活动界面加载\n当前剩余" + deng + "秒……");
                        sleep(1500);

                    }
                    if (text("bottle_default_bt").findOnce() == null) {
                        toastLog("“多多果园”活动未成功加载\n正在重新打开软件……");
                        OpenApp();
                    }
                } else {
                    toastLog("未找到“多多果园”入口\n重新打开软件中……");
                    sleep(1500);
                    OpenApp();
                }
            }
        } //↓5.3.0
        else if (id("com.xunmeng.pinduoduo:id/c_3").findOnce() != null) {
            toastLog("已处于搜索界面");
            setText("多多果园");
            sleep(2000);
            if (id("com.xunmeng.pinduoduo:id/b1").text("多多果园").findOnce() != null) {
                var ks = id("com.xunmeng.pinduoduo:id/b1").text("多多果园").findOnce().bounds();
                click(ks.centerX(), ks.centerY());
                toastLog("已尝试点击快速入口“多多果园”");
                sleep(2000);
                var deng = 10;
                for (deng == 10; deng > 0; deng--) {
                    /*if (text("bottle_default_bt").findOnce() != null) {
                        toastLog("已处于“多多果园”活动界面");
                        var deng = 0;
                    } else {}*/
                    toastLog("正在等待“多多果园”活动界面加载\n当前剩余" + deng + "秒……");
                    sleep(1500);

                }
                if (text("bottle_default_bt").findOnce() == null) {
                    toastLog("“多多果园”活动未成功加载\n正在重新打开软件……");
                    sleep(2000);
                    OpenApp();
                }
            } else if (id("com.xunmeng.pinduoduo:id/c9s").findOnce() != null) {
                id("com.xunmeng.pinduoduo:id/c9s").findOnce().click();
                toastLog("已尝试点击“搜索”按钮");
                sleep(2000);
                var deng = 10;
                for (deng == 10; deng > 0; deng--) {
                    if (id("com.xunmeng.pinduoduo:id/c9m").findOnce() != null) {
                        var deng = 0;
                        toastLog("已找到“多多果园”入口");
                    } else {
                        toastLog("正在等待“多多果园”入口加载\n当前剩余" + deng + "秒……");
                        sleep(1500);
                    }
                }
                if (id("com.xunmeng.pinduoduo:id/c9m").findOnce() != null) {
                    id("com.xunmeng.pinduoduo:id/c9m").findOnce().child(0).click();
                    toastLog("已尝试点击“多多果园”入口");
                    sleep(2000);
                    var deng = 10;
                    for (deng == 10; deng > 0; deng--) {
                        /*if (text("bottle_default_bt").findOnce() != null) {
                            toastLog("已处于“多多果园”活动界面");
                            var deng = 0;
                        } else {}*/
                        toastLog("正在等待“多多果园”活动界面加载\n当前剩余" + deng + "秒……");
                        sleep(1500);

                    }
                    if (text("bottle_default_bt").findOnce() == null) {
                        toastLog("“多多果园”活动未成功加载\n正在重新打开软件……");
                        OpenApp();
                    }
                } else {
                    toastLog("未找到“多多果园”入口\n重新打开软件中……");
                    sleep(1500);
                    OpenApp();
                }
            }
        }
    }

    function CloseAll() {
        if (text("水壶已经满了").findOnce() != null) {
            var Qd = text("确定").findOnce().bounds();
            click(Qd.centerX(), Qd.centerY());
            toastLog("已尝试点击“确定”按钮");
            sleep(2000);
            var While = 0;
            var deng = 0;
        }
        if (text("commonPopupCloseButton").findOnce() != null) {
            var DT = text("commonPopupCloseButton").findOnce().bounds();
            click(DT.centerX(), DT.centerY());
            toastLog("已尝试点击“关闭蒙版”按钮");
            sleep(2000);
        }
        if (text("每天5次定时领水").findOnce() != null) {
            var D = text("确定领取").findOnce().bounds();
            click(D.centerX(), D.centerY());
            toastLog("已尝试点击“确定领取”按钮");
            sleep(2000);
        }
        if (text("commonPopupCloseButton").findOnce() != null) {
            var D = text("commonPopupCloseButton").findOnce().bounds();
            click(D.centerX(), D.centerY());
            toastLog("已尝试点击“关闭蒙版”按钮");
            sleep(2000);
        }

        if (text("多谢浇水，送你种树大礼包").findOnce() != null) {
            var D = text("commonPopupCloseButtonV2").findOnce().bounds();
            click(D.centerX(), D.centerY());
            toastLog("已尝试关闭“种树礼包”蒙版");
            sleep(2000);
        }
        if (text("多谢你坚持浇水，送你限时福利").findOnce() != null) {
            var D = text("commonPopupCloseButtonV2").findOnce().bounds();
            click(D.centerX(), D.centerY());
            toastLog("已尝试关闭“坚持浇水”蒙版");
            sleep(2000);
        }
        if (text("每日登录领水滴，连续2日开宝箱").findOnce() != null) {
            if (text("领取水滴去浇水").findOnce() != null) {
                var D = text("领取水滴去浇水").findOnce().bounds();
                click(D.centerX(), D.centerY());
                toastLog("已尝试点击“领取水滴去浇水”按钮");
                sleep(2000);
            } else if (text("commonPopupCloseButtonV2").findOnce() != null) {
                var D = text("commonPopupCloseButtonV2").findOnce().bounds();
                click(D.centerX(), D.centerY());
                toastLog("已尝试点击“开宝箱关闭蒙版”按钮");
                sleep(2000);
            }
        }
        if (text("继续参与下一期").findOnce() != null) {
            var D = text("继续参与下一期").findOnce().bounds();
            click(D.centerX(), D.centerY());
            toastLog("已尝试点击“继续参与下一期”按钮");
            sleep(2000);
        }
        if (text("浇水挑战升级,以下浇水宝箱2选1").findOnce() != null) {
            var D = text("选我").findOnce().bounds();
            click(D.centerX(), D.centerY());
            toastLog("已尝试点击“2选1选我”按钮");
            sleep(2000);
        }
        if (text("每日登录领水滴，连续2日开宝箱").findOnce() != null) {
            if (text("领取水滴去浇水").findOnce() != null) {
                var D = text("领取水滴去浇水").findOnce().bounds();
                click(D.centerX(), D.centerY());
                toastLog("已尝试点击“领取水滴去浇水”按钮");
                sleep(2000);
            } else if (text("commonPopupCloseButtonV2").findOnce() != null) {
                var D = text("commonPopupCloseButtonV2").findOnce().bounds();
                click(D.centerX(), D.centerY());
                toastLog("已尝试点击“开宝箱关闭蒙版”按钮");
                sleep(2000);
            }
        }
        if (text("领取水滴去浇水").findOnce() != null) {
            if (text("领取水滴去浇水").findOnce() != null) {
                var D = text("领取水滴去浇水").findOnce().bounds();
                click(D.centerX(), D.centerY());
                toastLog("已尝试点击“领取水滴去浇水”按钮");
                sleep(2000);
            } else if (text("commonPopupCloseButtonV2").findOnce() != null) {
                var D = text("commonPopupCloseButtonV2").findOnce().bounds();
                click(D.centerX(), D.centerY());
                toastLog("已尝试点击“开宝箱关闭蒙版”按钮");
                sleep(2000);
            }
        }
        if (className("android.widget.Button").text("开福袋").clickable(true).depth(16).findOnce() != null) {
            className("android.widget.Button").text("开福袋").clickable(true).depth(16).findOnce().click();
            toastLog("已尝试点击“开福袋”按钮");
            sleep(2000);
        }
        if (text("commonPopupCloseButtonV2").findOnce() != null) {
            var D = text("commonPopupCloseButtonV2").findOnce().bounds();
            click(D.centerX(), D.centerY());
            toastLog("已尝试点击“关闭蒙版”按钮");
            sleep(2000);
        }
        if (text("ny-20-close").findOnce() != null) {
            var D = text("ny-20-close").findOnce().bounds();
            click(D.centerX(), D.centerY());
            toastLog("已尝试点击“关闭红包蒙版”按钮");
            sleep(2000);
        }
        if (text("限时派送, 果园惊喜2选1").findOnce() != null) {
            var D = text("选我").findOnce().bounds();
            click(D.centerX(), D.centerY());
            toastLog("已尝试点击“2选1选择”按钮");
            sleep(2000);
        }
        if (text("限定页面完成拼单可得").findOnce() != null) {
            var D = text("commonPopupCloseButtonV2").findOnce().bounds();
            click(D.centerX(), D.centerY());
            toastLog("已尝试点击“关闭拼单”按钮");
            sleep(2000);
        }
        if (text("每天5次定时领水").findOnce() != null) {
            var D = text("确定领取").findOnce().bounds();
            click(D.centerX(), D.centerY());
            toastLog("已尝试点击“确定领取”按钮");
            sleep(2000);
        }
        if (text("摇一摇").findOnce() != null) {
            var D = text("摇一摇").findOnce().bounds()
            click(D.centerX(), D.centerY());
            toastLog("已尝试点击“摇一摇”按钮");
            sleep(2000);
        }

        if (text("恭喜获得10g水滴").findOnce() != null) {
            var D = text("commonPopupCloseButtonV2").findOnce().bounds();
            click(D.centerX(), D.centerY());
            toastLog("已尝试点击关闭“蒙版按钮”");
            sleep(2000);
        }
        if (className("android.widget.Image").text("commonPopupCloseButtonV2").findOnce() != null) {
            var D = className("android.widget.Image").text("commonPopupCloseButtonV2").findOnce().bounds();
            click(D.centerX(), D.centerY());
            toastLog("已尝试点击“关闭蒙版”按钮");
            sleep(2000);
        }
    }

    function DGk() {
        if (text("送你四张刮刮卡，赶快刮开领大奖吧～").findOnce() != null) {
            var f = className("android.view.View").text("送你四张刮刮卡，赶快刮开领大奖吧～").findOnce().parent();
            var c = f.children();
            if (c[3].text() != "即将开启") {
                toastLog("正在尝试刮奖（1）");
                var gj = c[3].bounds();
                swipe(gj.centerX(), gj.centerY(), gj.centerX() - 100, gj.centerY(), 500);
                swipe(gj.centerX() - 100, gj.centerY(), gj.centerX() + 100, gj.centerY(), 500);
                swipe(gj.centerX(), gj.centerY() - 20, gj.centerX() - 100, gj.centerY() - 20, 500);
                swipe(gj.centerX() - 100, gj.centerY() - 20, gj.centerX() + 100, gj.centerY() - 20, 500);
            }
            if (c[4].text() != "即将开启") {
                toastLog("正在尝试刮奖（2）");
                var gj = c[4].bounds();
                swipe(gj.centerX(), gj.centerY(), gj.centerX() - 100, gj.centerY(), 500);
                swipe(gj.centerX() - 100, gj.centerY(), gj.centerX() + 100, gj.centerY(), 500);
                swipe(gj.centerX(), gj.centerY() - 20, gj.centerX() - 100, gj.centerY() - 20, 500);
                swipe(gj.centerX() - 100, gj.centerY() - 20, gj.centerX() + 100, gj.centerY() - 20, 500);
            }
            if (c[5].text() != "即将开启") {
                toastLog("正在尝试刮奖（3）");
                var gj = c[5].bounds();
                swipe(gj.centerX(), gj.centerY(), gj.centerX() - 100, gj.centerY(), 500);
                swipe(gj.centerX() - 100, gj.centerY(), gj.centerX() + 100, gj.centerY(), 500);
                swipe(gj.centerX(), gj.centerY() - 20, gj.centerX() - 100, gj.centerY() - 20, 500);
                swipe(gj.centerX() - 100, gj.centerY() - 20, gj.centerX() + 100, gj.centerY() - 20, 500);
            }
            if (c[6].text() != "即将开启") {
                toastLog("正在尝试刮奖（4）");
                var gj = c[6].bounds();
                swipe(gj.centerX(), gj.centerY(), gj.centerX() - 100, gj.centerY(), 500);
                swipe(gj.centerX() - 100, gj.centerY(), gj.centerX() + 100, gj.centerY(), 500);
                swipe(gj.centerX(), gj.centerY() - 20, gj.centerX() - 100, gj.centerY() - 20, 500);
                swipe(gj.centerX() - 100, gj.centerY() - 20, gj.centerX() + 100, gj.centerY() - 20, 500);
            }
            sleep(2000);
            if (text("commonPopupCloseButtonV2").findOnce() != null) {
                var D = text("commonPopupCloseButtonV2").findOnce().bounds();
                click(D.centerX(), D.centerY());
                toastLog("已尝试点击“刮奖蒙版”按钮");
                sleep(2000);
            }
        }
    }

    function GiveWater() {
        CloseAll();
        var While = 10;
        for (While == 10; While > 0; While--) {
            if (text("剩余水滴不足,完成任务得水滴").findOnce() != null) {
                var D = text("commonPopupCloseButton").findOnce().bounds();
                click(D.centerX(), D.centerY());
                toastLog("已尝试点击水滴不足“关闭蒙版”按钮");
                sleep(2000);
                var While = 0;
            } else if (text("当前的水滴数不够").findOnce() != null) {
                toastLog("当前的水滴数不够");
                sleep(2000);
                var While = 0;
            } else if (text("0g").findOnce() != null) {
                toastLog("当前的水滴数0g");
                sleep(2000);
                var While = 0;
            } else if (text("ny-20-close").findOnce() != null) {
                var D = text("ny-20-close").findOnce().bounds();
                click(D.centerX(), D.centerY());
                toastLog("已尝试点击“关闭红包蒙版”按钮");
                sleep(2000);
            } else if (text("bottle_default_bt").findOnce() != null) {
                var Q = text("bottle_default_bt").findOnce().bounds();
                click(Q.centerX(), Q.centerY());
                toastLog("已尝试点击“浇水”按钮");
                sleep(2000);
                if (className("android.widget.Button").text("去浇水").findOnce() != null) {
                    var A = className("android.widget.Button").text("去浇水").findOnce().bounds();
                    click(A.centerX(), A.centerY());
                    toastLog("已尝试点击“可去浇水”按钮");
                    sleep(2000);
                }
                if (text("多谢你坚持浇水，送你限时福利").findOnce() != null) {
                    var D = text("commonPopupCloseButtonV2").findOnce().bounds();
                    click(D.centerX(), D.centerY());
                    toastLog("已尝试关闭“坚持浇水”蒙版");
                    sleep(2000);
                }
                if (text("ny-20-close").findOnce() != null) {
                    var D = text("ny-20-close").findOnce().bounds();
                    click(D.centerX(), D.centerY());
                    toastLog("已尝试点击“关闭红包蒙版”按钮");
                    sleep(2000);
                }
                if (text("限定页面完成拼单可得").findOnce() != null) {
                    var D = text("commonPopupCloseButtonV2").findOnce().bounds();
                    click(D.centerX(), D.centerY());
                    toastLog("已尝试点击“关闭拼单”按钮");
                    sleep(2000);
                }
                if (text("限时派送, 果园惊喜2选1").findOnce() != null) {
                    var D = text("选我").findOnce().bounds();
                    click(D.centerX(), D.centerY());
                    toastLog("已尝试点击“2选1选择”按钮");
                    sleep(2000);
                }
                if (className("android.view.View").text("领取水滴去浇水").findOnce() != null) {
                    var D = className("android.view.View").text("领取水滴去浇水").findOnce().bounds();
                    click(D.centerX(), D.centerY());
                    toastLog("已尝试点击“领取水滴去浇水”按钮");
                    sleep(2000);
                }
                if (text("浇水挑战升级,以下浇水宝箱2选1").findOnce() != null) {
                    var D = text("选我").findOnce().bounds();
                    click(D.centerX(), D.centerY());
                    toastLog("已尝试点击“2选1选择”按钮");
                    sleep(2000);
                }
                if (text("点击领取+").findOnce() != null) {
                    var D = text("点击领取+").findOne().bounds();
                    click(D.centerX(), D.centerY());
                    toastLog("已尝试点击“领取”");
                    sleep(2000);
                }
                if (text("继续参与下一期").findOnce() != null) {
                    var d = text("继续参与下一期").findOne().bounds();
                    click(d.centerX(), d.centerY());
                    toastLog("已尝试点击“继续参与下一期”");
                    sleep(2000);
                }
                if (text("去使用").findOnce() != null) {
                    var D = text("去使用").findOnce().bounds();
                    click(D.centerX(), D.centerY());
                    toastLog("已尝试点击“去使用”按钮");
                    sleep(2000);
                }
                if (text("2020.02.08兑换期截止，过期元宝将清零").findOnce() != null) {
                    if (className("android.widget.Button").text("领取").findOnce() != null) {
                        className("android.widget.Button").text("领取").findOnce().click();
                        toastLog("已尝试点击元宝“领取”按钮");
                        sleep(2000);
                    }
                }
            } else {
                if (text("点击领取+").findOnce() != null) {
                    var D = text("点击领取+").findOne().bounds();
                    click(D.centerX(), D.centerY());
                    toastLog("已尝试点击“领取”");
                    sleep(2000);
                }
                if (text("去使用").findOnce() != null) {
                    var D = text("去使用").findOnce().bounds();
                    click(D.centerX(), D.centerY());
                    toastLog("已尝试点击“去使用”按钮");
                    sleep(2000);
                }
                if (text("2020.02.08兑换期截止，过期元宝将清零").findOnce() != null) {
                    if (className("android.widget.Button").text("领取").findOnce() != null) {
                        className("android.widget.Button").text("领取").findOnce().click();
                        toastLog("已尝试点击元宝“领取”按钮");
                        sleep(2000);
                    }

                }
                toastLog("找不到浇水按钮");
                var While = 0;
            }
        }
    }

    function DoTask() {
        if (text("getWater_v4").findOnce() != null) {
            var A = text("getWater_v4").findOnce().bounds();
            click(A.centerX(), A.centerY());
            toastLog("已尝试点击“领水滴”按钮");
            sleep(2000);
            if (className("android.view.View").text("领水滴").findOnce() != null) {
                toastLog("已处于“领水滴”界面\n开始任务……");
            }
        }
        var While = 1;
        while (While == 1) {
            if (className("android.view.View").text("每日免费领水").findOnce() != null) {
                var A = className("android.view.View").text("每日免费领水").findOnce().parent();
                var B = A.children();
                var C = B[3];
                var D = C.children();
                if (A.child(3).childCount() != 0) {
                    if (D[0].text() == "去完成") {
                        D[0].click();
                        toastLog("已尝试点击“" + D[0].text() + "”按钮\n" + B[0].text() + B[2].text() + "未完成");
                        sleep(2000);
                        var A = className("android.view.View").text("每日免费领水").findOnce().parent();
                        var B = A.children();
                        var C = B[3];
                        var D = C.children();
                        if (D[0].text() == "去完成") {
                            var While = 0;
                            toastLog("重复！跳过此任务!")
                        } else {
                            var deng = 20;
                            for (deng == 20; deng > 0; deng--) {
                                toastLog("请等待" + deng + "秒……\n之后继续完成：\n" + B[0].text() + "任务");
                                sleep(1500);
                                CloseAll();
                                if (text("去邀请好友").clickable(true).findOnce() != null) {
                                    text("去邀请好友").clickable(true).findOnce().click();
                                    toastLog("已尝试点击“去邀请好友按钮”");
                                    sleep(1500);
                                    click(device.width / 2, device.height / 2);
                                    toastLog("已尝试点击关闭“去邀请好友”");
                                    sleep(1500);
                                    if (text("getWater_v4").findOnce() != null) {
                                        var A = text("getWater_v4").findOnce().bounds();
                                        click(A.centerX(), A.centerY());
                                        toastLog("已尝试点击“领水滴”按钮");
                                        sleep(2000);
                                        if (className("android.view.View").text("领水滴").findOnce() != null) {
                                            toastLog("已处于“领水滴”界面\n继续任务……");
                                        } else {
                                            toastLog("竟然打不到“领水滴”按钮！\n重新打开软件……");
                                            OpenApp();
                                        }

                                    } else {
                                        toastLog("关闭“邀请好友”失败！\n重新打开软件……");
                                        OpenApp();
                                    }
                                }
                            }
                        }
                    } //此任务会有20秒缓冲时间;
                    else if (D[0].text() == "明日再来") {
                        var While = 0;
                        toastLog(B[0].text() + "：明日再来");
                    } else if (D[0].text() == "去邀请") {
                        var While = 0;
                        toastLog(B[0].text() + "：去邀请");
                    } else {
                        var While = 0;
                        toastLog("未知情况，跳过此任务！");
                    }
                }

                if (A.child(4).childCount() != 0) {
                    var A = className("android.view.View").text("每日免费领水").findOnce().parent();
                    var B = A.children();
                    var C = B[4];
                    var D = C.children();
                    if (D[0].text() == "去完成") {
                        D[0].click();
                        toastLog("已尝试点击“" + D[0].text() + "”按钮\n" + B[0].text() + B[2].text() + "未完成");
                        sleep(2000);
                        var A = className("android.view.View").text("每日免费领水").findOnce().parent();
                        var B = A.children();
                        var C = B[4];
                        var D = C.children();
                        if (D[0].text() == "去完成") {
                            var While = 0;
                            toastLog("重复！跳过此任务！")
                        } else {
                            var deng = 20;
                            for (deng == 20; deng > 0; deng--) {
                                toastLog("请等待" + deng + "秒……\n之后继续完成：\n" + B[0].text() + "任务");
                                sleep(1500);

                                if (text("水壶已经满了").findOnce() != null) {
                                    var Qd = text("确定").findOnce().bounds();
                                    click(Qd.centerX(), Qd.centerY());
                                    toastLog("已尝试点击“确定”按钮");
                                    sleep(2000);
                                    var While = 0;
                                    var deng = 0;
                                }
                                if (text("commonPopupCloseButton").findOnce() != null) {
                                    var DT = text("commonPopupCloseButton").findOnce().bounds();
                                    click(DT.centerX(), DT.centerY());
                                    toastLog("已尝试点击“关闭蒙版”按钮");
                                    sleep(2000);
                                }
                                if (text("每天5次定时领水").findOnce() != null) {
                                    var D = text("确定领取").findOnce().bounds();
                                    click(D.centerX(), D.centerY());
                                    toastLog("已尝试点击“确定领取”按钮");
                                    sleep(2000);
                                }
                                if (text("去邀请好友").clickable(true).findOnce() != null) {
                                    text("去邀请好友").clickable(true).findOnce().click();
                                    toastLog("已尝试点击“去邀请好友按钮”");
                                    sleep(1500);
                                    click(device.width / 2, device.height / 2);
                                    toastLog("已尝试点击关闭“去邀请好友”");
                                    sleep(1500);
                                    if (text("getWater_v4").findOnce() != null) {
                                        var A = text("getWater_v4").findOnce().bounds();
                                        click(A.centerX(), A.centerY());
                                        toastLog("已尝试点击“领水滴”按钮");
                                        sleep(2000);
                                        if (className("android.view.View").text("领水滴").findOnce() != null) {
                                            toastLog("已处于“领水滴”界面\n继续任务……");
                                        } else {
                                            toastLog("竟然打不到“领水滴”按钮！\n重新打开软件……");
                                            OpenApp();
                                        }

                                    } else {
                                        toastLog("关闭“邀请好友”失败！\n重新打开软件……");
                                        OpenApp();
                                    }
                                }
                            }

                        }
                    } //此任务会有20秒缓冲时间;
                    else if (D[0].text() == "明日再来") {
                        var While = 0;
                        toastLog(B[0].text() + "：明日再来");
                    } else if (D[0].text() == "去邀请") {
                        var While = 0;
                        toastLog(B[0].text() + "：去邀请");
                    } else {
                        var While = 0;
                        toastLog("未知情况，跳过此任务！");
                    }
                } else {
                    var While = 0;
                }
            } else {
                var While = 0;
            }
        }
        CloseAll();
        if (className("android.view.View").text("浏览商品1分钟").findOnce() != null) {
            var A = className("android.view.View").text("浏览商品1分钟").findOnce().parent();
            var B = A.children();
            var C = B[3];
            var D = C.children();
            if (D[0].text() == "去完成") {
                D[0].click();
                toastLog("已尝试点击“" + D[0].text() + "”按钮\n" + B[0].text() + B[2].text());
                sleep(2000);
                if (id("29").findOnce() != null) {
                    var X = id("29").findOnce().bounds();
                    click(X.centerX(), X.centerY());
                    toastLog("已尝试再次点击“浏览商品1分享去完成”按钮");
                    sleep(2000);
                }
                var deng = 60;
                for (deng == 60; deng > 0; deng--) {
                    toastLog("正在完成“" + B[0].text() + "”任务\n当前剩余" + deng + "秒……");
                    sleep(1100);
                    if (text("惊喜礼包大放送").findOnce() != null) {
                        var D = text("commonPopupCloseButtonV2").findOnce().bounds();
                        click(D.centerX(), D.centerY());
                        toastLog("已尝试点击“关闭礼包蒙版”按钮");
                        sleep(2000);
                    }
                }
                toastLog("任务完成尝试返回活动界面");
                Justback();
                if (className("android.view.View").text("领水滴").findOnce() != null) {
                    toastLog("已返回“领水滴”界面\n继续完成任务…");
                    sleep(2000);
                } else {
                    toastLog("未处于活动界面\n尝试再次返回…");
                    Justback();
                    sleep(2000);
                }
            } else if (D[1].text() == "领取") {
                D[1].click();
                toastLog("已尝试点击“" + D[1].text() + "”按钮\n" + B[0].text() + B[2].text());
                sleep(2000);
            }
        }
        try {
            if (className("android.view.View").text("浏览商品1分钟").findOnce().parent().child(3).child(1).text() == "领取") {
                className("android.view.View").text("浏览商品1分钟").findOnce().parent().child(3).child(1).click();
                toastLog("已尝试点击“浏览商品”领取按钮");
                sleep(2000);
            }
        } catch (e) {
            log(e);
        }
        CloseAll();
        if (className("android.view.View").text("浏览果园大讲堂1分钟").findOnce() != null) {
            var A = className("android.view.View").text("浏览果园大讲堂1分钟").findOnce().parent();
            var B = A.children();
            var C = B[4];
            var D = C.children();
            if (D[0].text() == "去完成") {
                D[0].click();
                toastLog("已尝试点击“" + D[0].text() + "”按钮\n" + B[0].text() + B[2].text());
                sleep(2000);
                if (id("30030").findOnce() != null) {
                    var X = id("30030").findOnce().bounds();
                    click(X.centerX(), X.centerY());
                    toastLog("已尝试再次点击“浏览果园1分钟去完成”按钮");
                    sleep(2000);
                }
                var deng = 60;
                for (deng == 60; deng > 0; deng--) {
                    toastLog("正在完成“" + B[0].text() + "”任务\n当前剩余" + deng + "秒……");
                    sleep(1100);
                    if (text("惊喜礼包大放送").findOnce() != null) {
                        var D = text("commonPopupCloseButtonV2").findOnce().bounds();
                        click(D.centerX(), D.centerY());
                        toastLog("已尝试点击“关闭礼包蒙版”按钮");
                        sleep(2000);
                    }
                }
                toastLog("任务完成尝试返回活动界面");
                Justback();
                if (className("android.view.View").text("领水滴").findOnce() != null) {
                    toastLog("已返回“领水滴”界面\n继续完成任务…");
                    sleep(2000);
                } else {
                    toastLog("未处于活动界面\n尝试再次返回…");
                    Justback();
                    sleep(2000);
                }
            } else if (D[1].text() == "领取") {
                D[1].click();
                toastLog("已尝试点击“" + D[1].text() + "”按钮\n" + B[0].text() + B[2].text());
                sleep(2000);
            }
        }
        try {
            if (className("android.view.View").text("浏览果园大讲堂1分钟").findOnce().parent().child(4).child(1).text() == "领取") {
                className("android.view.View").text("浏览果园大讲堂1分钟").findOnce().parent().child(4).child(1).click();
                toastLog("已尝试点击“浏览果园”领取按钮");
                sleep(2000);
            }
        } catch (e) {
            log(e);
        }
        CloseAll();
        while (true) {
            if (className("android.view.View").text("浏览爆款会场").findOnce() != null) {
                var A = className("android.view.View").text("浏览爆款会场").findOnce().parent();
                var B = A.children();
                var C = B[3];
                var D = C.children();
                if (D[0].text() == "去完成") {
                    D[0].click();
                    toastLog("已尝试点击“" + D[0].text() + "”按钮\n" + B[0].text() + B[2].text());
                    sleep(2000);
                    if (className("android.view.View").text("浏览爆款会场").findOnce() != null) {
                        var A = className("android.view.View").text("浏览爆款会场").findOnce().parent();
                        var B = A.children();
                        var C = B[3];
                        var D = C.children();
                        if (D[0].text() == "去完成") {
                            D[0].click();
                            toastLog("已尝试再次点击“浏览爆款会场”去完成");
                            sleep(2000);
                        }
                    }
                    var deng = 60;
                    for (deng == 60; deng > 0; deng--) {
                        toastLog("正在完成“" + B[0].text() + "”任务\n当前剩余" + deng + "秒……");
                        sleep(1100);
                        if (text("惊喜礼包大放送").findOnce() != null) {
                            var D = text("commonPopupCloseButtonV2").findOnce().bounds();
                            click(D.centerX(), D.centerY());
                            toastLog("已尝试点击“关闭礼包蒙版”按钮");
                            sleep(2000);
                        }
                    }
                    toastLog("任务完成尝试返回活动界面");
                    Justback();
                    if (className("android.view.View").text("领水滴").findOnce() != null) {
                        toastLog("已返回“领水滴”界面\n继续完成任务…");
                        sleep(2000);
                    } else {
                        toastLog("未处于活动界面\n尝试再次返回…");
                        Justback();
                        sleep(2000);
                    }
                } else if (D[1].text() == "领取") {
                    D[1].click();
                    toastLog("已尝试点击“" + D[1].text() + "”按钮\n" + B[0].text() + B[2].text());
                    sleep(2000);
                } else {
                    break;
                }
            }
        }
        CloseAll();
        /*var While = 1;
        while (While == 1) {
            if (className("android.widget.Button").text("领取").findOnce() != null) {
                className("android.widget.Button").text("领取").findOnce().click();
                toastLog("已尝试点击“领取”按钮");
                sleep(2000);
            } else {
                var While = 0;
                toastLog("已不存在“领取”按钮");
                sleep(2000);
            }
        }*/
        sleep(1000);
        if (text("好友种下果树后即可获得80g").findOnce() != null) {
            var DT = text("好友种下果树后即可获得80g").findOnce().bounds();
            click(DT.centerX(), DT.centerY() - 200);
            toastLog("已尝试点击“关闭邀请好友界面”按钮");
            sleep(2000);
        }
        /*
        if (text("commonPopupCloseButton").findOnce() != null) {
            var DT = text("commonPopupCloseButton").findOnce().bounds();
            click(DT.centerX(), DT.centerY());
            toastLog("已尝试点击“关闭蒙版”按钮");
            sleep(2000);
        }
            
        if (className("android.widget.Image").text("closeIconV4").depth(16).findOne(1000) != null) {
            var DT = className("android.widget.Image").text("closeIconV4").depth(16).findOne(1000).parent().bounds();
            click(DT.centerX(), DT.centerY());
            toastLog("已尝试点击“关闭蒙版”按钮");
            sleep(2000);
        }
            
        if (text("大年初七后奖励升级").findOnce() != null) {
            var GB = text("大年初七后奖励升级").findOnce().bounds();
            click(GB.centerX(), GB.centerY());
            toastLog("已尝试点击“大年初七后奖励升级”按钮来关闭“领水滴”蒙版");
            sleep(2000);
        }*/
        CloseAll();
        if (className("android.widget.Image").text("closeIconV4").depth(16).findOnce() != null) {
            var A = className("android.widget.Image").text("closeIconV4").depth(16).findOnce().parent().bounds();
            click(A.centerX(), A.centerY());
            toastLog("已尝试点击关闭任务蒙版");
            sleep(2000);
        }
        if (context_JiaoShui = 0) {
            toastLog("浇水10次已完成");
        } else if (context_JiaoShui == 1) {
            GiveWater();
            toastLog("浇水20次已完成");
        } else if (context_JiaoShui == 2) {
            GiveWater();
            sleep(2000);
            GiveWater();
            toastLog("浇水30次已完成");
        }
        if (text("可刮卡").findOnce() != null) {
            var Gk = text("可刮卡").findOnce().bounds();
            click(Gk.centerX(), Gk.centerY());
            sleep(2000);
            DGk();
        }
        if (className("android.widget.Image").text("guide_light_2_v2").findOne(1000) != null) {
            var Ad = className("android.widget.Image").text("guide_light_2_v2").findOne(1000).parent().parent().bounds();
            click(Ad.centerX(), Ad.centerY());
            toastLog("已尝试点击“水滴娱乐”按钮");
            sleep(2000);
            if (className("android.view.View").text("水滴娱乐").findOnce() != null) {
                toastLog("当前已处于“水滴娱乐”界面\n继续任务…");
                sleep(3000);
                if (className("android.view.View").text("领取").findOnce() != null) {
                    var Aq = className("android.view.View").text("领取").findOnce().bounds();
                    click(Aq.centerX(), Aq.centerY());
                    toastLog("已尝试点击“领取”按钮");
                    sleep(2000);
                }
                if (className("android.widget.Button").text("去抽奖").clickable(true).depth(19).findOnce() != null) {
                    var Aq = className("android.widget.Button").text("去抽奖").clickable(true).depth(19).findOnce().click();
                    toastLog("已尝试点击“去抽奖”按钮");
                    sleep(3500);
                    if (text("抽奖 本次免费").findOnce() != null) {
                        var Cj = text("抽奖 本次免费").findOnce().bounds();
                        click(Cj.centerX(), Cj.centerY());
                        toastLog("已尝试点击“免费抽奖”按钮");
                        sleep(8000);
                        if (text("继续抽奖").findOnce() != null) {
                            var JC = text("继续抽奖").findOnce().bounds();
                            click(JC.centerX(), JC.centerY());
                            toastLog("已尝试点击“继续抽奖”按钮");
                            sleep(3000);
                        }
                    }
                    var loop = 5;
                    for (loop == 5; loop > 0; loop--) {
                        if (text("领取").findOnce() != null) {
                            var DL = text("领取").findOnce().bounds();
                            click(DL.centerX(), DL.centerY());
                            toastLog("已点击“领取”按钮");
                            sleep(2000);
                        } else {
                            var loop = 0;
                        }
                    }
                    if (text("水滴娱乐").findOnce() == null) {
                        Justback();
                    }
                } else {
                    toastLog("未找到“去抽奖”按钮");
                }
            } else {
                toastLog("跳过！未找到“水滴娱乐”标题");
            }
        } else {
            toastLog("跳过！未找到“水滴娱乐”入口按钮");
        }
        //去抽签任务
        if (text("amusement_v4").findOnce() != null) {
            var Ad = text("amusement_v4").findOnce().bounds();
            click(Ad.centerX(), Ad.centerY());
            toastLog("已尝试点击“水滴娱乐”按钮");
            sleep(2000);
            if (className("android.view.View").text("水滴娱乐").findOnce() != null) {
                toastLog("当前已处于“水滴娱乐”界面\n继续任务…");
                sleep(3000);
                if (className("android.view.View").text("领取").findOnce() != null) {
                    var Aq = className("android.view.View").text("领取").findOnce().bounds();
                    click(Aq.centerX(), Aq.centerY());
                    toastLog("已尝试点击“领取”按钮");
                    sleep(2000);
                }
                if (className("android.widget.Button").text("去抽签").findOnce() != null) {
                    var Aq = className("android.widget.Button").text("去抽签").findOnce().bounds();
                    click(Aq.centerX(), Aq.centerY());
                    toastLog("已尝试点击“去抽签”按钮");
                    sleep(3500);
                    if (text("本次免费").findOnce() != null) {
                        var Cj = text("本次免费").findOnce().bounds();
                        click(Cj.centerX(), Cj.centerY());
                        toastLog("已尝试点击“免费抽签”按钮");
                        sleep(8000);
                        if (text("继续抽奖").findOnce() != null) {
                            var JC = text("继续抽奖").findOnce().bounds();
                            click(JC.centerX(), JC.centerY());
                            toastLog("已尝试点击“继续抽奖”按钮");
                            sleep(3000);
                        }
                    }
                    Justback();
                    sleep(2000);
                    if (className("android.view.View").text("领取").findOnce() != null) {
                        var Aq = className("android.view.View").text("领取").findOnce().bounds();
                        click(Aq.centerX(), Aq.centerY());
                        toastLog("已尝试点击“领取”按钮");
                        sleep(2000);
                    }
                }
            } else {
                toastLog("跳过！未找到“水滴娱乐”标题");
            }
        } else {
            toastLog("跳过！未找到“水滴娱乐”入口按钮");
        }

        dialogs.alert("脚本已运行完成");
        log("脚本已运行完成");
        exit();
    }

    function EnSure() {
        if (className("android.widget.Button").textContains("开始种植").findOnce() != null) {
            var A = className("android.widget.Button").textContains("开始种植").findOnce().bounds();
            click(A.centerX(), A.centerY());
            toastLog("已尝试点击“开始种植”按钮");
            sleep(2000);
            if (className("android.widget.Button").text("去浇水").findOnce() != null) {
                var A = className("android.widget.Button").text("去浇水").findOnce().bounds();
                click(A.centerX(), A.centerY());
                toastLog("已尝试点击“可去浇水”按钮");
                sleep(2000);
            }
            if (text("我知道了").findOnce() != null) {
                var d = text("我知道了").findOne().bounds();
                click(d.centerX(), d.centerY());
                toastLog("已尝试点击“我知道了”");
                sleep(2000);
            }
            if (text("guideGetWaterTip_v3").findOnce() != null) {
                var V = text("getWater_v4").findOnce().bounds();
                click(V.centerX(), V.centerY());
                toastLog("已尝试点击“领水滴”按钮");
                sleep(2000);
            }
            if (text("点击领取+").findOnce() != null) {
                var D = text("点击领取+").findOne().bounds();
                click(D.centerX(), D.centerY());
                toastLog("已尝试点击“领取”");
                sleep(2000);
            }
            if (text("我知道了").findOnce() != null) {
                var d = text("我知道了").findOne().bounds();
                click(d.centerX(), d.centerY());
                toastLog("已尝试点击“我知道了”");
                sleep(2000);
            }
            if (text("help-to-water-v4").findOnce() != null) {
                var J = text("help-to-water-v4").findOnce().bounds();
                click(J.centerX(), J.centerY());
                toastLog("已尝试点击“领水滴”按钮");
                sleep(2000);
            }
            if (text("去完成").findOnce(3) != null) {
                text("去完成").findOnce(3).click();
                toastLog("已尝试点击首次“去完成”按钮");
                sleep(3000);
                Justback();
                sleep(2000);
                //确定是否是活动界面
                if (text("直接离开").findOnce() != null) {
                    text("直接离开").findOnce().click();
                    toastLog("已尝试点击“直接离开”");
                    sleep(2000);
                }
            }
            if (text("我知道了").findOnce() != null) {
                var d = text("我知道了").findOne().bounds();
                click(d.centerX(), d.centerY());
                toastLog("已尝试点击“我知道了”");
                sleep(2000);
            }
            if (text("领取奖励").findOnce() != null) {
                var d = text("领取奖励").findOne().bounds();
                click(d.centerX(), d.centerY());
                toastLog("已尝试点击“领取奖励”");
                sleep(2000);
            }
            if (text("commonPopupCloseButton").findOnce() != null) {
                var D = text("commonPopupCloseButton").findOnce().bounds();
                click(D.centerX(), D.centerY());
                toastLog("已尝试点击“关闭蒙版”按钮");
                sleep(2000);
            }
            if (text("去好友家看看有没有水").findOnce() != null) {
                var D = text("friend_list_steal_water2").findOnce(2).bounds();
                click(D.centerX(), D.centerY());
                toastLog("已尝试点击“好友家”");
                sleep(2000);
            }
        }
        DGk();
        if (text("commonPopupCloseButton").findOnce() != null) {
            var D = text("commonPopupCloseButton").findOnce().bounds();
            click(D.centerX(), D.centerY());
            toastLog("已尝试点击“关闭蒙版”按钮");
            sleep(2000);
        }
        if (text("多谢浇水，送你种树大礼包").findOnce() != null) {
            var D = text("commonPopupCloseButtonV2").findOnce().bounds();
            click(D.centerX(), D.centerY());
            toastLog("已尝试关闭“种树礼包”蒙版");
            sleep(2000);
        }
        if (text("多谢你坚持浇水，送你限时福利").findOnce() != null) {
            var D = text("commonPopupCloseButtonV2").findOnce().bounds();
            click(D.centerX(), D.centerY());
            toastLog("已尝试关闭“坚持浇水”蒙版");
            sleep(2000);
        }
        if (text("每日登录领水滴，连续2日开宝箱").findOnce() != null) {
            if (text("领取水滴去浇水").findOnce() != null) {
                var D = text("领取水滴去浇水").findOnce().bounds();
                click(D.centerX(), D.centerY());
                toastLog("已尝试点击“领取水滴去浇水”按钮");
                sleep(2000);
            } else if (text("commonPopupCloseButtonV2").findOnce() != null) {
                var D = text("commonPopupCloseButtonV2").findOnce().bounds();
                click(D.centerX(), D.centerY());
                toastLog("已尝试点击“开宝箱关闭蒙版”按钮");
                sleep(2000);
            }
        }
        if (text("继续参与下一期").findOnce() != null) {
            var D = text("继续参与下一期").findOnce().bounds();
            click(D.centerX(), D.centerY());
            toastLog("已尝试点击“继续参与下一期”按钮");
            sleep(2000);
        }
        if (text("浇水挑战升级,以下浇水宝箱2选1").findOnce() != null) {
            var D = text("选我").findOnce().bounds();
            click(D.centerX(), D.centerY());
            toastLog("已尝试点击“2选1选我”按钮");
            sleep(2000);
        }
        if (text("每日登录领水滴，连续2日开宝箱").findOnce() != null) {
            if (text("领取水滴去浇水").findOnce() != null) {
                var D = text("领取水滴去浇水").findOnce().bounds();
                click(D.centerX(), D.centerY());
                toastLog("已尝试点击“领取水滴去浇水”按钮");
                sleep(2000);
            } else if (text("commonPopupCloseButtonV2").findOnce() != null) {
                var D = text("commonPopupCloseButtonV2").findOnce().bounds();
                click(D.centerX(), D.centerY());
                toastLog("已尝试点击“开宝箱关闭蒙版”按钮");
                sleep(2000);
            }
        }
        if (text("领取水滴去浇水").findOnce() != null) {
            if (text("领取水滴去浇水").findOnce() != null) {
                var D = text("领取水滴去浇水").findOnce().bounds();
                click(D.centerX(), D.centerY());
                toastLog("已尝试点击“领取水滴去浇水”按钮");
                sleep(2000);
            } else if (text("commonPopupCloseButtonV2").findOnce() != null) {
                var D = text("commonPopupCloseButtonV2").findOnce().bounds();
                click(D.centerX(), D.centerY());
                toastLog("已尝试点击“开宝箱关闭蒙版”按钮");
                sleep(2000);
            }
        }
        if (className("android.widget.Button").text("开福袋").clickable(true).depth(16).findOnce() != null) {
            className("android.widget.Button").text("开福袋").clickable(true).depth(16).findOnce().click();
            toastLog("已尝试点击“开福袋”按钮");
            sleep(2000);
        }
        if (text("commonPopupCloseButtonV2").findOnce() != null) {
            var D = text("commonPopupCloseButtonV2").findOnce().bounds();
            click(D.centerX(), D.centerY());
            toastLog("已尝试点击“关闭蒙版”按钮");
            sleep(2000);
        }
        if (text("ny-20-close").findOnce() != null) {
            var D = text("ny-20-close").findOnce().bounds();
            click(D.centerX(), D.centerY());
            toastLog("已尝试点击“关闭红包蒙版”按钮");
            sleep(2000);
        }
        if (text("限时派送, 果园惊喜2选1").findOnce() != null) {
            var D = text("选我").findOnce().bounds();
            click(D.centerX(), D.centerY());
            toastLog("已尝试点击“2选1选择”按钮");
            sleep(2000);
        }
        if (text("限定页面完成拼单可得").findOnce() != null) {
            var D = text("commonPopupCloseButtonV2").findOnce().bounds();
            click(D.centerX(), D.centerY());
            toastLog("已尝试点击“关闭拼单”按钮");
            sleep(2000);
        }
        if (text("每天5次定时领水").findOnce() != null) {
            var D = text("确定领取").findOnce().bounds();
            click(D.centerX(), D.centerY());
            toastLog("已尝试点击“确定领取”按钮");
            sleep(2000);
        }
        if (text("摇一摇").findOnce() != null) {
            var D = text("摇一摇").findOnce().bounds()
            click(D.centerX(), D.centerY());
            toastLog("已尝试点击“摇一摇”按钮");
            sleep(2000);
        }

        if (text("恭喜获得10g水滴").findOnce() != null) {
            var D = text("commonPopupCloseButtonV2").findOnce().bounds();
            click(D.centerX(), D.centerY());
            toastLog("已尝试点击关闭“蒙版按钮”");
            sleep(2000);
        }
        GiveWater();
        DoTask();
    }

    firstD();

    function firstD() {
        if (context_Manualstate == 1) {
            toastLog("已手动模式运行脚本");
            var options = ["等待20秒", "等待30秒", "等待50秒", "等待60秒", "等待10秒"]
            var i = dialogs.select("🔧以“手动模式”运行脚本\n\n接下来您需要在提示出现后自行打开拼多多APP至活动页\n\n请选择脚本等待您打开拼多多的时间", options);
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
                toastLog("请打开拼多多至多多果园的主界面\n剩余" + deng + "秒后运行脚本...");
                sleep(1111);
            }
            EnSure();
        } else {
            OpenApp();
            EnSure();
        }
    }
    dialogs.alert("脚本已运行完成");
    log("脚本已运行完成");
    exit();
}