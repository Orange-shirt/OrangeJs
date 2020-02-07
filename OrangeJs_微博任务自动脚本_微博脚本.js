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
    var ScriptVersion = ("Beta1.0"); //版本
    log("软件脚本已开始运行，如果没有弹出菜单请强行停止再打开本软件！");
    var options_ = ["▶️ 开始运行脚本", "🕒 定时运行脚本", "⏹ 停止运行脚本", "🌐 向作者反馈问题", "*️⃣ 脚本介绍/作者信息"]
    var i = dialogs.select("*+*+*+* 橘衫の脚本 *+*+*+*\n*+*+*+*  Orange Js *+*+*+*\n\n欢迎使用 (◍•ᴗ•◍)❤" + "\n" + "“微博任务自动脚本”" + ScriptVersion + "\n请选择一个要进行的选项", options_);
    if (i < 0) {
        toastLog("没有选择，如需关闭对话框\n  请选择“停止运行脚本”");
        dialogs_js();
    } else if (i == 0) {
        toastLog(options_[i]);
        context_Manualstate = 0;
        Set_Back_way();
    } else if (i == 2) {
        toastLog(options_[i]);
        exit();
    } else if (i == 3) {
        toastLog(options_[i]);
        app.openUrl("https://wj.qq.com/s2/5238744/d982");
        dialogs_js();
    } else if (i == 4) {
        toastLog(options_[i]);
        alert("=(^･ω･^)=  脚本作者\n酷安@橘衫下邂逅的时光", "“微博任务自动脚本” " + ScriptVersion + "\n当前软件版本" + app.versionName + "(" + app.versionCode + ")\n\n全自动的微博活动脚本！\n支持多种分辨率，安卓7+无需ROOT！\n支持启动后自动更新脚本，无需费心即可保持最新，且开放全部的脚本代码！\n脚本的全部运行不加任何广告，不干任何不相关的事情！不触碰任何个人隐私！\n此脚本为兴趣制作，仅供参考，严禁售卖\n\n如有任何问题，欢迎向作者反馈哦～");
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
        NOpeninHd();
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

OpeninHd();

function OpeninHd() {
    //此功能无链式调用
    app.startActivity({
        action: "android.intent.action.VIEW", //此处可为其他值
        packageName: "com.sina.weibo",
        className: "com.sina.weibo.feed.HomeActivity"
        //此处可以加入其他内容，如data、extras
    });
    var deng = 5;
    for (deng == 5; deng > 0; deng--) {
        if (id("titleSave").findOnce() == null) {
            toastLog("正在等待微博APP启动至主页\n当前剩余" + deng + "秒……");
            sleep(2000);
        } else {
            toastLog("已到达主页");
            var deng = 0;
        }
    }
    if (id("titleSave").findOnce() == null) {
        toastLog("HomeIntent打开失败\n自动切换Intent\n尝试再次打开…");
        sleep(1000);
        app.startActivity({
            action: "android.intent.action.VIEW", //此处可为其他值
            packageName: "com.sina.weibo",
            className: "com.sina.weibo.MainTabActivity"
            //此处可以加入其他内容，如data、extras
        });
        var deng = 5;
        for (deng == 5; deng > 0; deng--) {
            if (id("titleSave").findOnce() == null) {
                toastLog("正在等待微博APP启动至主页\n当前剩余" + deng + "秒……");
                sleep(2000);
            } else {
                toastLog("已到达主页");
                var deng = 0;
            }
        }
    }
    sleep(2000);
    app.startActivity({
        action: "android.intent.action.VIEW",
        packageName: "com.sina.weibo",
        className: "com.sina.weibo.browser.WeiboBrowser",
        data: app.parseUri("https://m.weibo.cn/feature/applink?scheme=sinaweibo%3A%2F%2Fbrowser%3Furl%3Dhttps%253A%252F%252Fm.weibo.cn%252Fc%252Fcheckin%253Ffeaturecode%253Dfrom_sharingpage_to_mtask%26featurecode%3Dfrom_sharingpage_to_mtask&yingyongbao=0&golight=0&goxianzhi=0&url=https%3A%2F%2Fc.weibo.cn%3Fscheme%3Dsinaweibo%253A%252F%252Fbrowser%253Furl%253Dhttps%25253A%25252F%25252Fm.weibo.cn%25252Fc%25252Fcheckin%25253Ffeaturecode%25253Dfrom_sharingpage_to_mtask%2526featurecode%253Dfrom_sharingpage_to_mtask%26directdownload%3D0"),
        flags: ["grant_read_uri_permission", "grant_write_uri_permission"],
    });

    var While = 1;
    while (While == 1) {
        if (text("日常任务").exists()) {
            toastLog("已处于微博任务界面")
            var While = 0;
        } else if (text("微博-出错了").findOnce() != null) {
            var While = 0;
            OpeninHd();
        } else {
            toastLog("正在等待微博任务界面加载……");
            sleep(2000);
        }
    }
    DoTask();
}

function NOpeninHd() {
    //此功能无链式调用
    app.startActivity({
        action: "android.intent.action.VIEW", //此处可为其他值
        packageName: "com.sina.weibo",
        className: "com.sina.weibo.feed.HomeActivity"
        //此处可以加入其他内容，如data、extras
    });
    var deng = 5;
    for (deng == 5; deng > 0; deng--) {
        if (id("titleSave").findOnce() == null) {
            toastLog("正在等待微博APP启动至主页\n当前剩余" + deng + "秒……");
            sleep(2000);
        } else {
            toastLog("已到达主页");
            var deng = 0;
        }
    }
    if (id("titleSave").findOnce() == null) {
        toastLog("HomeIntent打开失败\n自动切换Intent\n尝试再次打开…");
        sleep(1000);
        app.startActivity({
            action: "android.intent.action.VIEW", //此处可为其他值
            packageName: "com.sina.weibo",
            className: "com.sina.weibo.MainTabActivity"
            //此处可以加入其他内容，如data、extras
        });
        var deng = 5;
        for (deng == 5; deng > 0; deng--) {
            if (id("titleSave").findOnce() == null) {
                toastLog("正在等待微博APP启动至主页\n当前剩余" + deng + "秒……");
                sleep(2000);
            } else {
                toastLog("已到达主页");
                var deng = 0;
            }
        }
    }
    sleep(2000);
    app.startActivity({
        action: "android.intent.action.VIEW",
        packageName: "com.sina.weibo",
        className: "com.sina.weibo.browser.WeiboBrowser",
        data: app.parseUri("https://m.weibo.cn/feature/applink?scheme=sinaweibo%3A%2F%2Fbrowser%3Furl%3Dhttps%253A%252F%252Fm.weibo.cn%252Fc%252Fcheckin%253Ffeaturecode%253Dfrom_sharingpage_to_mtask%26featurecode%3Dfrom_sharingpage_to_mtask&yingyongbao=0&golight=0&goxianzhi=0&url=https%3A%2F%2Fc.weibo.cn%3Fscheme%3Dsinaweibo%253A%252F%252Fbrowser%253Furl%253Dhttps%25253A%25252F%25252Fm.weibo.cn%25252Fc%25252Fcheckin%25253Ffeaturecode%25253Dfrom_sharingpage_to_mtask%2526featurecode%253Dfrom_sharingpage_to_mtask%26directdownload%3D0"),
        flags: ["grant_read_uri_permission", "grant_write_uri_permission"],
    });

    var While = 1;
    while (While == 1) {
        if (text("日常任务").exists()) {
            toastLog("已处于微博任务界面")
            var While = 0;
        } else if (text("微博-出错了").findOnce() != null) {
            var While = 0;
            NOpeninHd();
        } else {
            toastLog("正在等待微博任务界面加载……");
            sleep(2000);
        }
    }
}



function DoTask() {

    //完成“关注”任务
    var While = 1;
    while (While == 1) {
        var A = className("android.widget.Button").text("关注").findOnce();
        if (A != null) {
            A.click();
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
                    }
                } else {
                    var CW = id("titleText").findOnce().text();
                    toastLog("处于错误的界面:" + CW + "\n即将重新进入活动…");
                    sleep(2000);
                }
            } else {
                toastLog("未找到微博顶栏标题\n即将重新进入活动…");
                sleep(2000);
            }
        } else {
            var While = 0;
            toastLog("跳过！已找不到“关注任务”");
        }
        NOpeninHd();
    }

    //完成“转发”任务
    var While = 1;
    while (While == 1) {
        if (Delete == null) {
            var Delete = 1;
        } else {
            Delete++;
        }
        var A = className("android.widget.Button").text("转发").findOnce();
        if (A != null) {
            A.click();
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
                                    setText("转发微博（Waiting For Delete &" + Delete + ")");
                                    sleep(1000);
                                    var Fs = id("com.sina.weibo:id/titleSave").findOne().bounds();
                                    click(Fs.centerX(), Fs.centerY());
                                    toastLog("已尝试点击“发送”按钮");
                                    sleep(2000);
                                }
                            }
                        }
                    }
                } else {
                    var CW = id("titleText").findOnce().text();
                    toastLog("处于错误的界面:" + CW + "\n即将重新进入活动…");
                    sleep(2000);
                }
            } else {
                toastLog("未找到微博顶栏标题\n即将重新进入活动…");
                sleep(2000);
            }
        } else {
            var While = 0;
            toastLog("跳过！已找不到“转发任务”");
        }
        NOpeninHd();
    }

    //完成“评论”任务
    var While = 1;
    while (While == 1) {
        var A = className("android.widget.Button").text("评论").findOnce();
        if (A != null) {
            A.click();
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
                                            toastLog("已成功完成一次评论任务\n正在尝试返回活动界面");
                                        }
                                    }
                                } else {
                                    toastLog("未找到发送的评论\n尝试下拉刷新…");
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
                                                toastLog("已成功完成一次评论任务\n正在尝试返回活动界面");
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                } else {
                    var CW = id("titleText").findOnce().text();
                    toastLog("处于错误的界面:" + CW + "\n即将重新进入活动…");
                    sleep(2000);
                }
            } else {
                toastLog("未找到微博顶栏标题\n即将重新进入活动…");
                sleep(2000);
            }
        } else {
            var While = 0;
            toastLog("跳过！已找不到“评论任务”");
        }
        NOpeninHd();
    }

    //完成“发微博”任务
    var While = 1;
    while (While == 1) {
        var A = className("android.widget.Button").text("发微博").findOnce();
        if (A != null) {
            A.click();
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
                    toastLog("处于错误的界面:" + CW + "\n即将重新进入活动…");
                    sleep(2000);
                }
            } else {
                toastLog("未找到微博顶栏标题\n即将重新进入活动…");
                sleep(2000);
            }
        } else {
            if (text("限时福利").findOnce() != null) {
                toastLog("跳过!已找不到“发微博”任务");
                var While = 0;
            } else {
                NOpeninHd();
            }
        }
    }

    //领取未领取的积分
    var While = 1;
    while (While == 1) {
        var A = className("android.widget.Button").text("领取3积分").findOnce();
        var B = className("android.widget.Button").text("领取5积分").findOnce();
        var C = className("android.widget.Button").text("领取30积分").findOnce();
        var D = className("android.widget.Button").text("领取10积分").findOnce();
        var E = className("android.widget.Button").text("领取50积分").findOnce();
        if (A != null) {
            A.click();
            toastLog("已找到“领取3积分”按钮\n已尝试点击……");
            sleep(2000);
        } else if (B != null) {
            B.click();
            toastLog("已找到“领取5积分”按钮\n已尝试点击……");
            sleep(2000);
        } else if (C != null) {
            C.click();
            toastLog("已找到“领取30积分”按钮\n已尝试点击……");
            sleep(2000);
        } else if (D != null) {
            D.click();
            toastLog("已找到“领取10积分”按钮\n已尝试点击……");
            sleep(2000);
        } else if (E != null) {
            E.click();
            toastLog("已找到“领取50积分”按钮\n已尝试点击……");
            sleep(2000);
        } else {
            var While = 0;
            toastLog("跳过！已找不到“领取积分”按钮");
        }
    }

    //删除 转发&发送 的任务微博
    app.startActivity({
        action: "android.intent.action.VIEW", //此处可为其他值
        packageName: "com.sina.weibo",
        className: "com.sina.weibo.MainTabActivity"
        //此处可以加入其他内容，如data、extras
    });
    while (id("titleSave").findOnce() == null) {
        toastLog("正在等待微博APP启动至主页");
        sleep(2000);
    }
    sleep(2000);
    if (className("android.view.ViewGroup").desc("我").findOnce() != null) {
        className("android.view.ViewGroup").desc("我").findOnce().click();
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
            while (id("com.sina.weibo:id/lySearchInput").findOnce() == null) {
                toastLog("正在等待“我的微博”加载……");
                sleep(2000);
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
                }
            }
        }
    }
}

dialogs.alert("脚本已运行完成");
log("脚本已运行完成");
exit();