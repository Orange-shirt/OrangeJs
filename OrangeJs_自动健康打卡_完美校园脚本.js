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

function dialogs_js() {
    var ScriptVersion = ("Beta1.22"); //版本
    log("软件脚本已开始运行，如果没有弹出菜单请强行停止再打开本软件！");
    var options_ = ["▶️ 开始运行脚本", "🕒 计时运行脚本", "⏰ 定时运行脚本", "⏹ 停止运行脚本", "💬 吐司/日志切换"]
    var i = dialogs.select("*+*+*+* 橘衫の脚本 *+*+*+*\n*+*+*+*  Orange Js *+*+*+*\n\n欢迎使用 (◍•ᴗ•◍)❤" + "\n" + "“自动健康打卡”" + ScriptVersion + "\n请选择一个要进行的选项", options_);
    if (i < 0) {
        toastLog("没有选择，如需关闭对话框\n  请选择“停止运行脚本”");
        dialogs_js();
    } else if (i == 0) {
        toastLog(options_[i]);
    } else if (i == 3) {
        toastLog(options_[i]);
        exit();
    } else if (i == 1) {
        context_Run = null;
        toastLog("请稍候，正在检测权限...")
        toastLog(options_[i]);
        device.keepScreenDim();
        toastLog("检测权限设置……");
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
        DS();
        device.keepScreenDim();
    } else if (i == 4) {
        toastLog(options_[i]);
        context_Manualstate = 0;
        if (files.exists("/storage/emulated/0/OrangeJs/自动健康打卡/吐司or日志.txt") == true) {
            var z = files.read("/storage/emulated/0/OrangeJs/自动健康打卡/吐司or日志.txt");
            if (z != "吐司" && z != "日志") {
                alert("“吐司or日志”文件错误，已尝试删除错误文件");
                try {
                    files.remove("/storage/emulated/0/OrangeJs/自动健康打卡/吐司or日志.txt");
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
                files.createWithDirs("/storage/emulated/0/OrangeJs/自动健康打卡/吐司or日志.txt");
                files.write("/storage/emulated/0/OrangeJs/自动健康打卡/吐司or日志.txt", "吐司");
            } catch (e) {
                log("未授予存储权限或存储权限错误，当前设置为吐司");
                var T = 0;
            }
        } else if (da == 1) {
            toastLog("您选择了：使用悬浮日志");
            try {
                var T = 1;
                files.createWithDirs("/storage/emulated/0/OrangeJs/自动健康打卡/吐司or日志.txt");
                files.write("/storage/emulated/0/OrangeJs/自动健康打卡/吐司or日志.txt", "日志");
            } catch (e) {
                log("未授予存储权限或存储权限错误，开启悬浮日志");
                var T = 1;
            }
        }
        dialogs_js();
    }
}
if (files.exists("/storage/emulated/0/OrangeJs/自动健康打卡/吐司or日志.txt") == true) {
    try {
        let z = files.read("/storage/emulated/0/OrangeJs/自动健康打卡/吐司or日志.txt");
        if (z == "吐司") {
            var T = 0;
        } else if (z == "日志") {
            var T = 1;
        } else {
            toastLog("“吐司or日志”文件错误，已尝试删除并使用默认日志");
            try {
                files.remove("/storage/emulated/0/OrangeJs/自动健康打卡/吐司or日志.txt");
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
        files.createWithDirs("/storage/emulated/0/OrangeJs/自动健康打卡/吐司or日志.txt");
        files.write("/storage/emulated/0/OrangeJs/自动健康打卡/吐司or日志.txt", "日志");
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
            //Set_Back_way();
            waiting_time();
        }
    }
    if (i_wait == 1) {
        var choice_confirm = dialogs.confirm("您选择了5分钟后运行", "点击确定进行一次设定返回操作的方法后，脚本将在您设定的时间结束后开始自动运行\n请不要清理本软件的后台或者锁屏手机等，否则可能会造成定时任务失效");
        if (choice_confirm == false) {
            toastLog("取消了定时运行确认");
            wait_Time_over();
        } else {
            //Set_Back_way();
            waiting_time();
        }
    }
    if (i_wait == 2) {
        var choice_confirm = dialogs.confirm("您选择了10分钟后运行", "点击确定进行一次设定返回操作的方法后，脚本将在您设定的时间结束后开始自动运行\n请不要清理本软件的后台或者锁屏手机等，否则可能会造成定时任务失效");
        if (choice_confirm == false) {
            toastLog("取消了定时运行确认");
            wait_Time_over();
        } else {
            //Set_Back_way();
            waiting_time();
        }
    }
    if (i_wait == 3) {
        var choice_confirm = dialogs.confirm("您选择了30分钟后运行", "点击确定进行一次设定返回操作的方法后，脚本将在您设定的时间结束后开始自动运行\n请不要清理本软件的后台或者锁屏手机等，否则可能会造成定时任务失效");
        if (choice_confirm == false) {
            toastLog("取消了定时运行确认");
            wait_Time_over();
        } else {
            //Set_Back_way();
            waiting_time();
        }
    }
    if (i_wait == 4) {
        var choice_confirm = dialogs.confirm("您选择了一小时后运行", "点击确定进行一次设定返回操作的方法后，脚本将在您设定的时间结束后开始自动运行\n请不要清理本软件的后台或者锁屏手机等，否则可能会造成定时任务失效");
        if (choice_confirm == false) {
            toastLog("取消了定时运行确认");
            wait_Time_over();
        } else {
            //Set_Back_way();
            waiting_time();
        }
    }
    if (i_wait == 5) {
        var choice_confirm = dialogs.confirm("您选择了两小时后运行", "点击确定进行一次设定返回操作的方法后，脚本将在您设定的时间结束后开始自动运行\n请不要清理本软件的后台或者锁屏手机等，否则可能会造成定时任务失效");
        if (choice_confirm == false) {
            toastLog("取消了定时运行确认");
            wait_Time_over();
        } else {
            //Set_Back_way();
            waiting_time();
        }
    }
    if (i_wait == 6) {
        var choice_confirm = dialogs.confirm("您选择了三小时后运行", "点击确定进行一次设定返回操作的方法后，脚本将在您设定的时间结束后开始自动运行\n请不要清理本软件的后台或者锁屏手机等，否则可能会造成定时任务失效");
        if (choice_confirm == false) {
            toastLog("取消了定时运行确认");
            wait_Time_over();
        } else {
            //Set_Back_way();
            waiting_time();
        }
    }
    if (i_wait == 7) {
        var choice_confirm = dialogs.confirm("您选择了五小时后运行", "点击确定进行一次设定返回操作的方法后，脚本将在您设定的时间结束后开始自动运行\n请不要清理本软件的后台或者锁屏手机等，否则可能会造成定时任务失效");
        if (choice_confirm == false) {
            toastLog("取消了定时运行确认");
            wait_Time_over
        } else {
            //Set_Back_way();
            waiting_time();
        }
    }
    if (i_wait == 8) {
        var choice_confirm = dialogs.confirm("您选择了八小时后运行", "点击确定进行一次设定返回操作的方法后，脚本将在您设定的时间结束后开始自动运行\n请不要清理本软件的后台或者锁屏手机等，否则可能会造成定时任务失效");
        if (choice_confirm == false) {
            toastLog("取消了定时运行确认");
            wait_Time_over();
        } else {
            //Set_Back_way();
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
    device.cancelKeepingAwake();
    dialogs.alert("已停止运行脚本！");
    log("用户点击了停止按钮");
    exit();
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

function OpenInTask() {
    window.setPosition(100, 100);
    w.setPosition(0, device.height - 500);
    device.wakeUp(); //唤醒设备
    device.keepScreenOn(3600 * 1000); //屏幕常亮
    app.startActivity({
        action: "android.intent.action.VIEW", //此处可为其他值
        packageName: "com.newcapec.mobile.ncp",
        className: "com.wanxiao.basebusiness.activity.SplashActivity"
        //此处可以加入其他内容，如data、extras
    });
    var deng = 8;
    for (deng == 8; deng > 0; deng--) {
        toastLog("已尝试打开完美校园APP，正在等待完美校园加载，剩余" + deng + "秒…");
        sleep(2000);
        if (className("android.widget.TextView").text("跳过").findOnce() != null) {
            var TG = className("android.widget.TextView").text("跳过").findOnce().bounds();
            click(TG.centerX(), TG.centerY());
        }
        if (id("com.newcapec.mobile.ncp:id/menuTitle").text("健康打卡").findOnce() != null) {
            var deng = 0;
            toastLog("已成功打开完美校园主界面")
        }
        if (id("activity_head_linea_back").findOnce() != null) {
            id("activity_head_linea_back").findOnce().click();
            toastLog("已尝试点击关闭按钮");
        }
        if (id("com.newcapec.mobile.ncp:id/iv_close").findOnce() != null) {
            id("com.newcapec.mobile.ncp:id/iv_close").findOnce().click();
            toastLog("已尝试点击关闭浮窗按钮")
        }
        if (id("btnBarBack_sdk_virtual_card").findOnce() != null) {
            id("btnBarBack_sdk_virtual_card").findOnce().click()
            toastLog("已尝试点击关闭卡片页");
        }
        if (id("activity_head_image_back").findOnce() != null) {
            id("activity_head_image_back").findOnce().click();
            toastLog("已尝试点击图片返回按钮");
        }
        if (id("com.newcapec.mobile.ncp:id/tv_home").findOnce() != null) {
            id("com.newcapec.mobile.ncp:id/tv_home").findOnce().click();
            toastLog("已尝试点击首页按钮");
        }
    }
    if (id("com.newcapec.mobile.ncp:id/menuTitle").text("健康打卡").findOnce() != null) {
        className("android.widget.TextView").text("健康打卡").findOnce().parent().parent().click();
        toastLog("已尝试点击“健康打卡”入口");
        sleep(2000);
    } else {
        dialogs.alert("当前界面找不到“健康打卡”入口，请手动打开健康打卡界面");
        var deng = 10;
        for (deng == 10; deng > 0; deng--) {
            toastLog("请手动打开“健康打卡”界面，" + deng + "秒后脚本继续运行…")
            sleep(1500);
        }
    }
    for (var deng = 8; deng > 0; deng--) {
        if (className("android.widget.Button").clickable(true).text("提交信息").findOnce() == null) {
            toastLog("正在等待“健康打卡”界面加载……");
            sleep(1000);
        } else {
            var deng = 0;
            toastLog("已成功打开至打卡界面");
            sleep(3000);
        }
    }
}

function Daka() {
    while (true) {
        if (className("android.view.View").text("我知道了").findOnce() != null) {
            className("android.view.View").text("我知道了").findOnce().click();
            toastLog("已尝试点击“我知道了”按钮……");
            sleep(3000);
        }
        if (className("android.widget.Button").clickable(true).text("提交信息").findOnce() != null) {
            className("android.widget.Button").clickable(true).text("提交信息").findOnce().click();
            toastLog("已尝试点击“提交信息”按钮");
            sleep(3000);
            for (var deng = 5; deng > 0; deng--) {
                if (className("android.widget.Button").text("确认提交").findOnce() != null || text("确认提交").findOnce() != null || className("android.app.Dialog").findOnce() != null && className("android.app.Dialog").findOnce().child(2).child(1).text() == "确认提交") {
                    var deng = 0;
                    toastLog("已找到“确认提交”按钮");
                } else if (className("android.view.View").text("打卡成功").findOnce() != null || text("打卡成功").findOnce() != null) {
                    var deng = 0;
                    toastLog("已找到“打卡成功”提示");
                } else {
                    toastLog("正在等待“确认提交”按钮加载，剩余" + deng + "秒……");
                    sleep(1500);
                }
            }
            if (className("android.widget.Button").text("确认提交").findOnce() != null || text("确认提交").findOnce() != null || className("android.app.Dialog").findOnce() != null && className("android.app.Dialog").findOnce().child(2).child(1).text() == "确认提交") {
                if (className("android.widget.Button").text("确认提交").findOnce() != null) {
                    let a = className("android.widget.Button").text("确认提交").findOnce();
                    if (a.clickable() == true) {
                        a.click();
                    } else {
                        let b = a.bounds();
                        click(b.centerX(), b.centerY());
                    }
                } else if (text("确认提交").findOnce() != null) {
                    let a = text("确认提交").findOnce();
                    if (a.clickable() == true) {
                        a.click();
                    } else {
                        let b = a.bounds();
                        click(b.centerX(), b.centerY());
                    }
                } else if (className("android.app.Dialog").findOnce() != null && className("android.app.Dialog").findOnce().child(2).child(1).text() == "确认提交") {
                    let a = className("android.app.Dialog").findOnce().child(2).child(1);
                    if (a.clickable() == true) {
                        a.click();
                    } else {
                        let b = a.bounds();
                        click(b.centerX(), b.centerY());
                    }
                }
                toastLog("已尝试点击“确认提交”按钮");
                for (var deng = 5; deng > 0; deng--) {
                    if (className("android.view.View").text("打卡成功").findOnce() != null || text("打卡成功").findOnce() != null) {
                        var deng = 0;
                        toastLog("已找到“打卡成功”提示");
                    } else {
                        toastLog("正在等待“打卡成功”提示加载，剩余" + deng + "秒……");
                        sleep(1500);
                    }
                }
                if (className("android.view.View").text("打卡成功").findOnce() != null || text("打卡成功").findOnce() != null) {
                    var myDate = new Date();
                    let 时 = myDate.getHours();
                    let 分 = myDate.getMinutes();
                    let 秒 = myDate.getSeconds();
                    device.cancelKeepingAwake();
                    alert("自动健康打卡\n脚本已运行完成");
                    let re = dialogs.confirm("要在明天" + 时 + ":" + 分 + "自动运行脚本吗？", "点击确定后，脚本会为您设定一个定时任务，只要您保留本软件的后台并保证本软件后台不被清除，脚本将在明天的" + 时 + ":" + 分 + "再次准时运行脚本。\n\n注意！脚本无法自动解锁任何锁屏，但锁屏却会严重影响脚本运行，除非您设置一个无密码锁屏（即灭屏后再次亮屏即是桌面）脚本才可正常运行！");
                    if (re == true) {
                        window.setPosition(-9999, -9999);
                        w.setPosition(-8888, -8888);
                        dialogs.alert("将于明天" + 时 + ":" + 分 + "再次自动运行脚本");
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
                    } else {
                        device.cancelKeepingAwake();
                        exit();
                    }
                } else {
                    toastLog("未找到“打卡成功”提示，正在重新打开至打卡界面打卡……")
                    OpenInTask();
                    Daka();
                }
            } else if (className("android.view.View").text("打卡成功").findOnce() != null || text("打卡成功").findOnce() != null) {
                var myDate = new Date();
                let 时 = myDate.getHours();
                let 分 = myDate.getMinutes();
                let 秒 = myDate.getSeconds();
                device.cancelKeepingAwake();
                alert("自动健康打卡\n脚本已运行完成");
                let re = dialogs.confirm("要在明天" + 时 + ":" + 分 + "自动运行脚本吗？", "点击确定后，脚本会为您设定一个定时任务，只要您保留本软件的后台并保证本软件后台不被清除，脚本将在明天的" + 时 + ":" + 分 + "再次准时运行脚本。\n\n注意！脚本无法自动解锁任何锁屏，但锁屏却会严重影响脚本运行，除非您设置一个无密码锁屏（即灭屏后再次亮屏即是桌面）脚本才可正常运行！");
                if (re == true) {
                    window.setPosition(-9999, -9999);
                    w.setPosition(-8888, -8888);
                    dialogs.alert("将于明天" + 时 + ":" + 分 + "再次自动运行脚本");
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
                } else {
                    device.cancelKeepingAwake();
                    exit();
                }
            } else {
                toastLog("未找到“确认提交”按钮，正在重新打开至打卡界面打卡……");
                OpenInTask();
                Daka();
            }
        } else {
            toastLog("未找到“提交信息”按钮，正在重新打开至打卡界面打卡……");
            OpenInTask();
            Daka();
        }
    }
}

OpenInTask();
Daka();