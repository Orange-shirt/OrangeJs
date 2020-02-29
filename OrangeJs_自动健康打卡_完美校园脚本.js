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

if (files.exists("/storage/emulated/0/OrangeJs/自动健康打卡/.RandomNumber") == false) {
    files.createWithDirs("/storage/emulated/0/OrangeJs/自动健康打卡/.RandomNumber");
    var RDM = open("/storage/emulated/0/OrangeJs/自动健康打卡/.RandomNumber");
    files.write("/storage/emulated/0/OrangeJs/自动健康打卡/.RandomNumber", random(0000000000000000, 9999999999999999));
    RDM.close();
}
var TestCreate = files.createWithDirs("/storage/emulated/0/OrangeJs/自动健康打卡/测试");
if (TestCreate == false) {
    log("测试文件创建失败！存储权限未开启!");
    dialogs.alert("出错了-_-||\n存储权限未开启！", "由于脚本需要将您的个人信息以及设置等数据保存在您的设备中\n因此请授予“Orange Js橘衫の脚本”软件“存储权限”后再尝试运行");
    exit();
} else {
    log("设备存储权限正常");
    var TestFile = open("/storage/emulated/0/OrangeJs/自动健康打卡/测试");
    files.write("/storage/emulated/0/OrangeJs/自动健康打卡/测试", "测试");
    var Read = files.read("/storage/emulated/0/OrangeJs/自动健康打卡/测试");
    if (Read != "测试") {
        log("写入出现错误！：" + Read);
        dialogs.alert("文件写入异常！", Read);
        TestFile.close();
        var Delete = files.remove("/storage/emulated/0/OrangeJs/自动健康打卡/测试");
        log("删除文件：" + Delete);
        exit();
    } else {
        TestFile.close();
        var Delete = files.remove("/storage/emulated/0/OrangeJs/自动健康打卡/测试");
        log("写入文件正常;\n删除文件：" + Delete);
    }
}

if (files.exists("/storage/emulated/0/OrangeJs/自动健康打卡/附加功能.txt") == true) {
    requestScreenCapture();
}
dialogs_js();

function dialogs_js() {
    var ScriptVersion = ("Beta1.2"); //版本
    log("软件脚本已开始运行，如果没有弹出菜单请强行停止再打开本软件！");
    var options_ = ["▶️ 开始运行脚本", "🕒 定时运行脚本", "⏹ 停止运行脚本", "📄 查看已保存信息", "🔖 附加功能设置"]
    var i = dialogs.select("*+*+*+* 橘衫の脚本 *+*+*+*\n*+*+*+*  Orange Js *+*+*+*\n\n欢迎使用 (◍•ᴗ•◍)❤" + "\n" + "“自动健康打卡”" + ScriptVersion + "\n请选择一个要进行的选项", options_);
    if (i < 0) {
        toastLog("没有选择，如需关闭对话框\n  请选择“停止运行脚本”");
        dialogs_js();
    } else if (i == 0) {
        toastLog(options_[i]);
        if (files.exists("/storage/emulated/0/OrangeJs/自动健康打卡/.OrangeJs.EncryptedValue") == true) {
            var XIANG = ["\n🔐自动填写已加密保存的信息", "📝替换并创建新的信息再保存\n"]
            var XUAN = dialogs.select("**********************\n***  ADVANCED\n***  ENCRYPTION\n***  STANDARD\n***  高级加密标准\n***  确保数据安全\n**********************\n\n您已存在加密的信息\n请选择要填写的信息", XIANG);
            if (XUAN == 0) {
                toastLog(XIANG[XUAN]);
                context_Run = null;
            } else if (XUAN == 1) {
                toastLog(XIANG[XUAN]);
                //按照首次运行操作
                context_Run = 0;
            } else {
                dialogs_js();
            }
        } else {
            //首次运行脚本;
            context_Run = 0;
        }
    } else if (i == 2) {
        toastLog(options_[i]);
        exit();
    } else if (i == 3) {
        toastLog(options_[i]);
        if (files.exists("/storage/emulated/0/OrangeJs/自动健康打卡/.OrangeJs.EncryptedValue") == false) {
            dialogs.alert("你还没有运行后保存信息哦(^_^)");
            dialogs_js();
        } else {
            var H_Key = files.read("/storage/emulated/0/OrangeJs/自动健康打卡/.RandomNumber");
            var AES_Padding = "PKCS7Padding"; //PKCS5Padding/PKCS7Padding/NoPadding/ISO10126Padding
            var AES_Model = "ECB"; //ECB/CBC/CTR/OFB/CFB
            var AES_Key = device.getAndroidId() + H_Key; //32位
            var AES_Aws = "256";
            var AES_OutType = "base64"; //base64,Hex
            var AES_Chat = "UTF-8"; //UTF-8/gb2312/gbk/gb18030
            var WFD = "";
            var WFE = "";

            function AesDecrypt(souce, passkey) {
                var result = "";
                var errstr = "";
                var zx = 1;
                var text = "";

                if (passkey == undefined || passkey == "") passkey = AES_Key;
                if (AES_OutType == "base64") {
                    text = android.util.Base64.decode(souce, 0);
                } else if (AES_OutType == "Hex") {
                    text = hexstringtobytes(souce);
                } else {
                    errstr = "输出形式未选择";
                    zx = 0;
                }

                var mm = java.lang.String(passkey).getBytes(AES_Chat);
                if (mm.length != AES_Aws / 8) {
                    errstr = "密码长度必须为" + AES_Aws / 8 + "位!";
                    zx = 0;
                }
                var iv = "";
                if (AES_Model != "ECB") {
                    var iv = java.lang.String(AES_Key).getBytes();
                    if (iv.length != AES_Aws / 8) {
                        errstr = "偏移长度必须为" + AES_Aws / 8 + "位!";
                        zx = 0;
                    }
                }
                var lx = "AES/" + AES_Model + "/" + AES_Padding;
                if (zx == 1) {
                    try {
                        var jg = aesDecode(text, mm, lx, iv);
                        result = java.lang.String(jg, AES_Chat);
                    } catch (e) {
                        errstr = "解密错误!";
                    }
                }
                //根据需要可选择是否输入错误内容
                return result + errstr;
            }

            function aesDecode(byteContent, password, lx, iv) {
                var key = javax.crypto.spec.SecretKeySpec(password, "AES");
                var cipher = javax.crypto.Cipher.getInstance(lx);
                if (AES_Model == "ECB") {
                    cipher.init(javax.crypto.Cipher.DECRYPT_MODE, key);
                } else {
                    cipher.init(javax.crypto.Cipher.DECRYPT_MODE, key, javax.crypto.spec.IvParameterSpec(iv));
                }
                return cipher.doFinal(byteContent);
            }

            function bytestohexstring(bytes) {
                var val = "";
                for (var i = 0; i < bytes.length; i++) {
                    var tmp = bytes[i];
                    if (tmp < 0) {
                        tmp = 256 + tmp;
                    }
                    tmp = tmp.toString(16);
                    if ((tmp + "").length == 1) {
                        tmp = "0" + tmp;
                    }
                    val += tmp;
                }
                return val;
            }

            function hexstringtobytes(str) {
                var val = [];
                str = str.split("");
                for (var i = 0; i < str.length; i++) {
                    var tmp = "" + str[i] + str[i + 1];
                    tmp = parseInt(tmp, 16);
                    if (tmp <= 127) {
                        val[i / 2] = tmp;
                    } else {
                        val[i / 2] = tmp - 256;
                    }
                }
                return val;
            }
            var WFD = files.read("/storage/emulated/0/OrangeJs/自动健康打卡/.OrangeJs.EncryptedValue");
            if (WFD != "") {
                var loop = 3;
                for (loop == 3; loop > 0; loop--) {
                    if (Decrypted == null) {
                        var Decrypted = AesDecrypt(WFD, AES_Key); //解密
                    } else {
                        var Decrypted = AesDecrypt(Decrypted, AES_Key); //解密
                    }
                }
            }
            //从本地文件内容取出密文（WFD）并解密得到Decrypted
            var Choice = Decrypted;
            dialogs.alert("以下是您已保存的信息\n脚本将严格填写此信息\n如需更改请运行替换", Choice);
            dialogs_js();
        }
    } else if (i == 4) {
        if (files.exists("/storage/emulated/0/OrangeJs/自动健康打卡/附加功能.txt") != true) {
            let A = dialogs.confirm("🔖 附加功能设置\n打卡完成图发送", "这个功能可以帮您在打卡完成之后自动截取完成图，并将截图发送到指定QQ群/QQ好友，截图不会包含任何个人信息以及脚本悬浮窗\n\n请问需要开启吗？（此功能需要最新版QQ/TIM）");
            if (A == true) {
                //开启附加功能
                let B = dialogs.rawInput("请输入发送对象信息\n\n支持QQ/昵称/备注/群聊号/群聊名");
                if (B == null) {
                    toastLog("没有输入发送对象\n返回主菜单");
                    dialogs_js();
                } else {
                    while (true) {
                        let s = dialogs.select("🔖 附加功能设置\n请选择", "使用QQ发送截图", "使用TIM发送截图");
                        if (s == 0) {
                            files.createWithDirs("/storage/emulated/0/OrangeJs/自动健康打卡/附加功能.txt");
                            files.write("/storage/emulated/0/OrangeJs/自动健康打卡/附加功能.txt", B + "\ncom.tencent.mobileqq");
                            dialogs.alert("附加功能配置已保存\n请重新运行脚本！", "发送对象：" + B + "\n使用QQ发送\n如需更改请在主界面进行");
                            exit();
                            break;
                        } else if (s == 1) {
                            files.createWithDirs("/storage/emulated/0/OrangeJs/自动健康打卡/附加功能.txt");
                            files.write("/storage/emulated/0/OrangeJs/自动健康打卡/附加功能.txt", B + "\ncom.tencent.tim");
                            dialogs.alert("附加功能配置已保存\n请重新运行脚本！", "发送对象：" + B + "\n使用TIM发送\n如需更改请在主界面进行");
                            exit();
                            break;
                        } else {
                            toastLog("没有选择");
                        }
                    }
                    //返回主菜单
                    dialogs_js();
                }
            } else {
                //返回主菜单
                dialogs_js();
            }
        } else {
            var Wj = open("/storage/emulated/0/OrangeJs/自动健康打卡/附加功能.txt");
            var Fz = Wj.readlines();
            if (Fz[1] == "com.tencent.mobileqq") {
                var Dx = "使用QQ发送截图";
            } else if (Fz[1] == "com.tencent.tim") {
                var Dx = "使用TIM发送截图";
            }
            let qd = dialogs.confirm("🔖 附加功能设置 \n您的配置如下", Fz[0] + "\n" + Dx + "\n您确定要进行更改吗？");
            Wj.close();
            if (qd == true) {
                let B = dialogs.rawInput("请输入发送对象信息\n\n支持QQ/昵称/备注/群聊号/群聊名");
                if (B == null) {
                    toastLog("没有输入发送对象\n返回主菜单");
                    dialogs_js();
                } else {
                    while (true) {
                        let s = dialogs.select("🔖 附加功能设置\n请选择", "使用QQ发送截图", "使用TIM发送截图");
                        if (s == 0) {
                            files.createWithDirs("/storage/emulated/0/OrangeJs/自动健康打卡/附加功能.txt");
                            files.write("/storage/emulated/0/OrangeJs/自动健康打卡/附加功能.txt", B + "\ncom.tencent.mobileqq");
                            dialogs.alert("附加功能配置已保存\n请重新运行脚本！", "发送对象：" + B + "\n使用QQ发送\n如需更改请在主界面进行");
                            exit();
                            break;
                        } else if (s == 1) {
                            files.createWithDirs("/storage/emulated/0/OrangeJs/自动健康打卡/附加功能.txt");
                            files.write("/storage/emulated/0/OrangeJs/自动健康打卡/附加功能.txt", B + "\ncom.tencent.tim");
                            dialogs.alert("附加功能配置已保存\n请重新运行脚本！", "发送对象：" + B + "\n使用TIM发送\n如需更改请在主界面进行");
                            exit();
                            break;
                        } else {
                            toastLog("没有选择");
                        }
                    }
                    //返回主菜单
                    dialogs_js();
                }
            } else {
                //返回主菜单
                dialogs_js();
            }
        }

    } else if (i == 1) {
        if (files.exists("/storage/emulated/0/OrangeJs/自动健康打卡/.OrangeJs.EncryptedValue") == false) {
            dialogs.alert("首次运行脚本不能定时运行哦(^_^)");
            dialogs_js();
        } else {
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
        }
    }
}
/*
function NotFirst() {
    var XIANG = ["🔐自动填写已加密保存的信息", "📝替换并创建新的信息再保存"]
    var XUAN = dialogs.select("**********************\n***  ADVANCED\n***  ENCRYPTION\n***  STANDARD\n***  高级加密标准\n***  确保数据安全\n**********************\n\n您已存在加密的信息\n请选择要填写的信息", XIANG);
    if (XUAN == 0) {
        toastLog(XIANG[XUAN]);
    } else if (XUAN == 1) {
        toastLog(XIANG[XUAN]);
        //按照首次运行操作
        var Run = 0;
    } else {
        dialogs_js();
    }
}*/

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

var H_Key = files.read("/storage/emulated/0/OrangeJs/自动健康打卡/.RandomNumber");
var AES_Padding = "PKCS7Padding"; //PKCS5Padding/PKCS7Padding/NoPadding/ISO10126Padding
var AES_Model = "ECB"; //ECB/CBC/CTR/OFB/CFB
var AES_Key = device.getAndroidId() + H_Key; //32位
var AES_Aws = "256";
var AES_OutType = "base64"; //base64,Hex
var AES_Chat = "UTF-8"; //UTF-8/gb2312/gbk/gb18030
var WFD = "";
var WFE = "";

app.startActivity({
    action: "android.intent.action.VIEW", //此处可为其他值
    packageName: "com.newcapec.mobile.ncp",
    className: "com.wanxiao.basebusiness.activity.SplashActivity"
    //此处可以加入其他内容，如data、extras
});
var deng = 8;
for (deng == 8; deng > 0; deng--) {
    toastLog("已尝试打开完美校园APP\n正在等待完美校园加载\n剩余" + deng + "秒…");
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
    dialogs.alert("当前界面找不到“健康打卡”入口\n请手动打开健康打卡界面");
    var deng = 10;
    for (deng == 10; deng > 0; deng--) {
        toastLog("请手动打开“健康打卡”界面\n" + deng + "秒后脚本继续运行…")
        sleep(1500);
    }
}

if (context_Run == 0) {
    var Run = 0;
    FirstDo();
} else {
    for (let deng = 8; deng > 0; deng--) {
        if (className("android.view.View").clickable(true).text("提交信息").findOnce() == null) {
            toastLog("正在等待“健康打卡”界面加载……");
            sleep(1000);
        } else {
            let deng = 0;
            NotFirstRun();
        }
    }
}

function FirstDo() {
    if (Run != 1) {
        dialogs.alert("请从上至下填写表单");
    }
    var Choice = ["【专业/部门未选择】", "\n姓名：", "【姓名未填写】", "\n学号/工号：", "【学号/工号未填写】", "\n", "【省份未选择】", "【详细位置未填写】", "\n体温：", "36.6度（默认）", "\n症状：", "无症状", "", "", "", "", "", "", "\n* 本人电话", "【本人电话未填写】", "\n* 紧急联系人姓名", "【紧急联系人姓名未填写】", "\n* 紧急联系人手机号", "【紧急联系人手机号未填写】", "\n\n",
        "* 是否被确诊为新型冠状病毒肺炎病例？", "否", "\n\n",
        "* 是否是高度疑似新型冠状病毒肺炎人员且隔离观察？", "否，未隔离", "\n\n",
        "* 假期（近14天）是否去过湖北、武汉？", "否", "\n\n",
        "* 假期（近14天）中是否与确诊的新型冠状病毒人员接触？", "否", "\n\n",
        "* 假期（近14天）中是否途经/中转/停留武汉？", "否", "\n\n",
        "* 假期（近14天）中是否途经/中转/停留湖北省？", "否", "\n\n",
        "* 近期您的家人朋友，是否有发热，咳嗽，乏力，呼吸困难等症状？", "没有", "\n\n",
        "* 近14天是否与来自武汉、湖北其他地市的亲朋好友或有发热、咳嗽、呼吸困难、感冒等症状的亲友接触过？", "没有", "\n\n",
        "* 您是否已在学校？", "否", "\n\n",
        "* 您在家上网络课堂是否有宽带wifi?", "否", "\n\n",
        "* 今日心理状况？", "健康", "\n\n",
        "* 是否在返校途中?", "否", "\n\n",
        "* 是否返回学校所在地?", "否", "\n\n",
        "* 是否是高度疑似新型冠状病毒肺炎人员，且具体隔离措施为？", "否，未隔离", "\n\n",
        "* 是否被确诊为新型冠状病毒肺炎病例？（请正确如实选择）", "否", "\n\n",
        "* 是否是高度疑似新型冠状病毒肺炎人员，且具体隔离措施为？（请正确如实选择）", "否，未隔离", "\n\n",
        "* 假期（近14天）中是否与确诊的新型冠状病毒人员接触？", "否"
    ]
    //log(Choice.length);
    var While = 1;
    while (While == 1) {
        try {
            if (text("* 专业/部门").findOnce() != null) {
                var A = text("* 专业/部门").findOnce().parent().children();
                var B = A[1].children();
                var C = B[0].children();
                //log(A[0].text() + "：" + C[0].text());
                if (C[0].text() != "选择院系和专业") {
                    Choice[0] = C[0].text();
                    if (text("* 姓名").findOnce() != null) {
                        var A = text("* 姓名").findOnce().parent().children();
                        var C = A[1].children();
                        //log(A[0].text() + "：" + C[0].text());
                        if (C[0].text() != "") {
                            Choice[2] = C[0].text();
                            if (text("* 学号/工号").findOnce() != null) {
                                var A = text("* 学号/工号").findOnce().parent().children();
                                var C = A[1].children();
                                //log(A[0].text() + "：" + C[0].text());
                                if (C[0].text() != "") {
                                    Choice[4] = C[0].text();
                                    if (text("* 您当前位置").findOnce() != null) {
                                        var A = text("* 您当前位置").findOnce().parent().children();
                                        var C = A[1].children();
                                        var D = A[2].children();
                                        //log(A[0].text() + "：" + C[0].text());
                                        if (C[0].text() != "省份/市") {
                                            Choice[6] = C[0].text();
                                            var While = 0;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        } catch (e) {
            log(e);
        }
    }
    if (Run != 1) {
        var ksTx = dialogs.confirm("您已填完基本个人信息", "若您最近一切正常请点击确定\n脚本将帮您选择一切正常");
        toastLog("正在快速选择中，请稍等……");
        if (ksTx == true) {
            //自动填写选择表单为“一切正常”
            var SD = Choice[9];
            if (text("今日体温（腋下温度）").findOnce() != null) {
                var A = text("今日体温（腋下温度）").findOnce().parent().children();
                //log(A[0].text() + "：" + D.text());
                var E = text("今日体温（腋下温度）").findOne(1000).parent().child(2).text();
                while (true) {
                    var E = text("今日体温（腋下温度）").findOne(1000).parent().child(2).text();
                    if (E[0] > SD[0]) {
                        log(E[0], SD[0]);
                        A[1].click();
                        sleep(200);
                    } else if (E[0] < SD[0]) {
                        log(E[0], SD[0]);
                        A[3].click();
                        sleep(200);
                    } else if (E[1] > SD[1]) {
                        log(E[1], SD[1]);
                        A[1].click();
                        sleep(200);
                    } else if (E[1] < SD[1]) {
                        log(E[1], SD[1]);
                        A[3].click();
                        sleep(200);
                    } else if (E[3] > SD[3]) {
                        log(E[3], SD[3]);
                        A[1].click();
                        sleep(200);
                    } else if (E[3] < SD[3]) {
                        log(E[3], SD[3]);
                        A[3].click();
                        sleep(200);
                    } else {
                        break;
                    }
                }
            }
            if (text("* 选择以下自己出现的症状(可多选)").findOnce() != null) {
                var A = text("* 选择以下自己出现的症状(可多选)").findOnce().parent();
                for (var I = 11; I < 17; I++) {
                    for (var i = A.childCount() - 1; i >= 0; i--) {
                        if (A.child(i).text() == Choice[I]) {
                            A.child(i).click();
                            sleep(200);
                        }
                    }
                }
            }
            var While = 1;
            var Da = 25; //单选题起始位置
            while (While == 1) {
                if (text(Choice[Da]).findOnce() != null) {
                    var A = text(Choice[Da]).findOnce().parent();
                    var Aa = text(Choice[Da]).findOnce().parent().children();
                    for (var i = A.childCount(); i > 0; i--) {
                        try {
                            if (Aa[i].text() == Choice[Da + 1]) {
                                //定义变量
                                //log(Choice[Da] + ":" + Aa[i].text());
                                Aa[i].click();
                                sleep(200);
                                var Da = Da + 3;
                            }
                        } catch (e) {
                            log(e);
                        }
                    }
                } else if (Da > Choice.length) {
                    var While = 0;
                    log("已遍历完成所有题目");
                } else {
                    var Da = Da + 3;
                }
            }

            dialogs.alert("已快速选择正常选项\n请继续填写其它题目\n您也可更改已填选项");
            for (var S = 20; S > 0; S--) {
                className("android.webkit.WebView").text("健康打卡").findOne(3000).scrollUp();
            }
        } else {
            dialogs.alert("请按照您自身情况\n填写剩余表单");
        }
    }
    if (Run == 1) {
        var Other = 1;
    } else {
        var windowB = floaty.rawWindow(
            <frame h="*" >
                <card id="action" cardCornerRadius="50" layout_gravity="center" cardElevation="15dp" foreground="?selectableItemBackground" w="200" h="40" bg="#1E88E5">
                    <text text="点击保存信息" gravity="center" textColor="#000000">
                    </text>
                </card>
            </frame>
        );
        windowB.setPosition(device.width / 4.5, device.height - 200);
        var windowBs = setInterval(() => {}, 1000);
        var execution = null;
        //记录按键被按下时的触摸坐标
        var x = 0,
            y = 0;
        //记录按键被按下时的悬浮窗位置
        var windowX, windowY;
        //记录按键被按下的时间以便判断长按等动作
        var downTime;

        windowB.action.setOnTouchListener(function(view, event) {
            switch (event.getAction()) {
                case event.ACTION_DOWN:
                    x = event.getRawX();
                    y = event.getRawY();
                    windowX = windowB.getX();
                    windowY = windowB.getY();
                    downTime = new Date().getTime();
                    return true;
                case event.ACTION_MOVE:
                    //移动手指时调整悬浮窗位置
                    windowB.setPosition(windowX + (event.getRawX() - x),
                        windowY + (event.getRawY() - y));
                    //如果按下的时间超过1.5秒判断为长按
                    if (new Date().getTime() - downTime > 1500) {
                        toast("长按可以移动位置哦～");
                    }
                    return true;
                case event.ACTION_UP:
                    //手指弹起时如果偏移很小则判断为点击
                    toastLog("不要着急，请稍等一下下");
                    if (Math.abs(event.getRawY() - y) < 5 && Math.abs(event.getRawX() - x) < 5) {
                        if (id("com.newcapec.mobile.ncp:id/activity_head_text_title").text("健康打卡").findOnce() != null) {
                            engines.execScript("再次检测", "var Run=1;\nFirstDo();\n" + FirstDo.toString());
                            //var Now=ScriptExecution.getEngine();
                        } else {
                            dialogs.alert("您并未处于“健康打卡”界面\n请回到健康打卡界面\n并填完所有信息");
                        }
                    }
                    return true;
            }
            return true;
        });
    }

    if (Other == 1) {
        if (D[0].text() != "") {
            //log(A[0].text() + "：" + D[0].text()); //详细地址
            Choice[7] = D[0].text();
        }
        if (text("今日体温（腋下温度）").findOnce() != null) {
            var A = text("今日体温（腋下温度）").findOnce().parent().children();
            var D = A[2];
            if (D.text() != "") {
                Choice[9] = D.text();
            }
        }
        if (text("* 选择以下自己出现的症状(可多选)").findOnce() != null) {
            var A = text("* 选择以下自己出现的症状(可多选)").findOnce().parent();
            var II = 11;
            for (let i = A.childCount() - 1; i > 0; i--) {
                if (A.child(i).checked() == true) {
                    Choice[II] = A.child(i).text();
                    II++;
                }
            }
        }
        var While = 1;
        var Da = 25; //单选题起始位置
        while (While == 1) {
            if (text(Choice[Da]).findOnce() != null) {
                var A = text(Choice[Da]).findOnce().parent();
                var i = A.childCount();
                var ii = 10;
                //var Aa = text(Choice[Da]).findOnce().parent().children();
                for (i == A.childCount(); i > 0; i--) {
                    try {
                        if (A.child(i).checked() == true) {
                            //定义变量
                            //log(Choice[Da] + ":" + Aa[i].text());
                            Choice[Da + 1] = A.child(i).text();
                            var Da = Da + 3;
                        }
                    } catch (e) {
                        log(e);
                    }
                }
            } else if (Da > Choice.length) {
                var While = 0;
                log("已遍历完成所有题目");
            } else {
                var Da = Da + 3;
            }
        }
        if (text("* 本人电话").findOnce() != null) {
            var A = text("* 本人电话").findOnce().parent();
            var D = A.child(1).child(0);
            if (D.text() != "") {
                Choice[19] = D.text();
            }
        }
        if (text("* 紧急联系人姓名").findOnce() != null) {
            var A = text("* 紧急联系人姓名").findOnce().parent();
            var D = A.child(1).child(0);
            if (D.text() != "") {
                Choice[21] = D.text();
            }
        }
        if (text("* 紧急联系人手机号").findOnce() != null) {
            var A = text("* 紧急联系人手机号").findOnce().parent();
            var D = A.child(1).child(0);
            if (D.text() != "") {
                Choice[23] = D.text();
            }
        }
        var H_Key = files.read("/storage/emulated/0/OrangeJs/自动健康打卡/.RandomNumber");
        var AES_Padding = "PKCS7Padding"; //PKCS5Padding/PKCS7Padding/NoPadding/ISO10126Padding
        var AES_Model = "ECB"; //ECB/CBC/CTR/OFB/CFB
        var AES_Key = device.getAndroidId() + H_Key; //32位
        var AES_Aws = "256";
        var AES_OutType = "base64"; //base64,Hex
        var AES_Chat = "UTF-8"; //UTF-8/gb2312/gbk/gb18030
        var WFD = "";
        var WFE = "";

        function AesEncrypt(souce, passkey) {
            var result = "";
            var errstr = "";
            var zx = 1;

            if (passkey == undefined || passkey == "") passkey = AES_Key;
            var text = java.lang.String(souce).getBytes(AES_Chat);
            var mm = java.lang.String(passkey).getBytes(AES_Chat);
            if (AES_Padding == "NoPadding" && (AES_Model == "ECB" || AES_Model == "CBC")) {
                if (text.length % 16 != 0) {
                    //输出错误
                    errstr = AES_Model + "/" + AES_Padding + "要加密的内容长度必须是16的整数倍";
                    zx = 0;
                }
            }
            if (mm.length != AES_Aws / 8) {
                //输出错误
                errstr = "密码长度必须为" + AES_Aws / 8 + "位!";
                zx = 0;
            }
            var iv = "";
            if (AES_Model != "ECB") {
                iv = java.lang.String(passkey).getBytes();
                if (iv.length != AES_Aws / 8) {
                    //输出错误
                    errstr = "偏移量长度必须为" + AES_Aws / 8 + "位!";
                    zx = 0;
                }
            }
            var lx = "AES/" + AES_Model + "/" + AES_Padding;

            if (zx == 1) {
                var jg = aesEncode(text, mm, lx, iv);
                if (AES_OutType == "base64") {
                    result = java.lang.String(android.util.Base64.encode(jg, 0));
                } else if (AES_OutType == "Hex") {
                    result = bytestohexstring(jg);
                } else {
                    errstr = "输出形式未选择";
                }
            }
            //根据需要可选择是否输入错误内容
            return result + errstr;
        }

        function aesEncode(byteContent, password, lx, iv) {
            var key = javax.crypto.spec.SecretKeySpec(password, "AES");
            var cipher = javax.crypto.Cipher.getInstance(lx);
            if (AES_Model == "ECB") {
                cipher.init(javax.crypto.Cipher.ENCRYPT_MODE, key);
            } else {
                cipher.init(javax.crypto.Cipher.ENCRYPT_MODE, key, javax.crypto.spec.IvParameterSpec(iv));
            }
            return cipher.doFinal(byteContent);
        }

        function hexstringtobytes(str) {
            var val = [];
            str = str.split("");
            for (var i = 0; i < str.length; i++) {
                var tmp = "" + str[i] + str[i + 1];
                tmp = parseInt(tmp, 16);
                if (tmp <= 127) {
                    val[i / 2] = tmp;
                } else {
                    val[i / 2] = tmp - 256;
                }
            }
            return val;
        }

        function bytestohexstring(bytes) {
            var val = "";
            for (var i = 0; i < bytes.length; i++) {
                var tmp = bytes[i];
                if (tmp < 0) {
                    tmp = 256 + tmp;
                }
                tmp = tmp.toString(16);
                if ((tmp + "").length == 1) {
                    tmp = "0" + tmp;
                }
                val += tmp;
            }
            return val;
        }
        var queR = dialogs.confirm("下面是您已选择的内容\n如有问题请点击取消修改\n\n如您的表单中没有某个题目请忽略，若有题目但没有识别选项请在表单中检查您是否做了选择", "⚠️日志中不会保存任何信息，请仔细检查！下次运行可直接填写此信息\n\n" + Choice);
        if (queR == true) {
            //已确认信息无误，加密保存。
            var writing = dialogs.build({
                title: "正在进行加密保存……",
                progress: {
                    max: -1
                },
                cancelable: false
            }).show();
            //加密变量
            var WFE = Choice.toString(); //等待加密
            if (WFE != "") {
                var loop = 3;
                for (loop == 3; loop > 0; loop--) {


                    if (Encrypted == null) {
                        var Encrypted = AesEncrypt(WFE, AES_Key); //加密
                    } else {
                        var Encrypted = AesEncrypt(Encrypted, AES_Key); //加密
                    }
                }
                files.createWithDirs("/storage/emulated/0/OrangeJs/自动健康打卡/.OrangeJs.EncryptedValue");
                var WJ = open("/storage/emulated/0/OrangeJs/自动健康打卡/.OrangeJs.EncryptedValue");
                files.write("/storage/emulated/0/OrangeJs/自动健康打卡/.OrangeJs.EncryptedValue", Encrypted) //将密文保存至文件中;
                WJ.close();
                writing.dismiss();
                toastLog("您的信息已加密保存在您的设备中");
                dialogs.alert("您的信息已加密\n保存在您的设备中", "下次运行可直接填写");
                engines.stopAll();
            }
        }
    }
}

function NotFirstRun() {

    var H_Key = files.read("/storage/emulated/0/OrangeJs/自动健康打卡/.RandomNumber");
    var AES_Padding = "PKCS7Padding"; //PKCS5Padding/PKCS7Padding/NoPadding/ISO10126Padding
    var AES_Model = "ECB"; //ECB/CBC/CTR/OFB/CFB
    var AES_Key = device.getAndroidId() + H_Key; //32位
    var AES_Aws = "256";
    var AES_OutType = "base64"; //base64,Hex
    var AES_Chat = "UTF-8"; //UTF-8/gb2312/gbk/gb18030
    var WFD = "";
    var WFE = "";

    function AesDecrypt(souce, passkey) {
        var result = "";
        var errstr = "";
        var zx = 1;
        var text = "";

        if (passkey == undefined || passkey == "") passkey = AES_Key;
        if (AES_OutType == "base64") {
            text = android.util.Base64.decode(souce, 0);
        } else if (AES_OutType == "Hex") {
            text = hexstringtobytes(souce);
        } else {
            errstr = "输出形式未选择";
            zx = 0;
        }

        var mm = java.lang.String(passkey).getBytes(AES_Chat);
        if (mm.length != AES_Aws / 8) {
            errstr = "密码长度必须为" + AES_Aws / 8 + "位!";
            zx = 0;
        }
        var iv = "";
        if (AES_Model != "ECB") {
            var iv = java.lang.String(AES_Key).getBytes();
            if (iv.length != AES_Aws / 8) {
                errstr = "偏移长度必须为" + AES_Aws / 8 + "位!";
                zx = 0;
            }
        }
        var lx = "AES/" + AES_Model + "/" + AES_Padding;
        if (zx == 1) {
            try {
                var jg = aesDecode(text, mm, lx, iv);
                result = java.lang.String(jg, AES_Chat);
            } catch (e) {
                errstr = "解密错误!";
            }
        }
        //根据需要可选择是否输入错误内容
        return result + errstr;
    }



    function aesDecode(byteContent, password, lx, iv) {
        var key = javax.crypto.spec.SecretKeySpec(password, "AES");
        var cipher = javax.crypto.Cipher.getInstance(lx);
        if (AES_Model == "ECB") {
            cipher.init(javax.crypto.Cipher.DECRYPT_MODE, key);
        } else {
            cipher.init(javax.crypto.Cipher.DECRYPT_MODE, key, javax.crypto.spec.IvParameterSpec(iv));
        }
        return cipher.doFinal(byteContent);
    }

    function bytestohexstring(bytes) {
        var val = "";
        for (var i = 0; i < bytes.length; i++) {
            var tmp = bytes[i];
            if (tmp < 0) {
                tmp = 256 + tmp;
            }
            tmp = tmp.toString(16);
            if ((tmp + "").length == 1) {
                tmp = "0" + tmp;
            }
            val += tmp;
        }
        return val;
    }

    function hexstringtobytes(str) {
        var val = [];
        str = str.split("");
        for (var i = 0; i < str.length; i++) {
            var tmp = "" + str[i] + str[i + 1];
            tmp = parseInt(tmp, 16);
            if (tmp <= 127) {
                val[i / 2] = tmp;
            } else {
                val[i / 2] = tmp - 256;
            }
        }
        return val;
    }
    var WFD = files.read("/storage/emulated/0/OrangeJs/自动健康打卡/.OrangeJs.EncryptedValue");
    if (WFD != "") {
        var loop = 3;
        for (loop == 3; loop > 0; loop--) {
            if (Decrypted == null) {
                var Decrypted = AesDecrypt(WFD, AES_Key); //解密
            } else {
                var Decrypted = AesDecrypt(Decrypted, AES_Key); //解密
            }
        }
        //从本地文件内容取出密文（WFD）并解密得到Decrypted
        var Choice = Decrypted;
        var Choice = Choice.split(',');

        if (text("* 专业/部门").findOnce() != null) {
            var A = text("* 专业/部门").findOnce().parent().children();
            var B = A[1].children();
            var C = B[0];
            var D = B[0].children();

            if (D[0].text() == "选择院系和专业" || D[0].text() != Choice[0]) {
                C.click();
                sleep(1000);
                var str = Choice[0];
                //第一次正则
                var n = str.search("-");
                while (n >= 0) {
                    if (n >= 0) {
                        var i = 0;
                        for (i = 0; i <= n; i++) {
                            if (i != n) {
                                //log(str[i]);
                                if (g != null) {
                                    var g = g + str[i];
                                } else {
                                    var g = str[i];
                                }
                            } else {
                                //删除分割之前的字符
                                var A = g;
                            }
                        }
                        //log(A);
                        try {
                            var a = className("android.widget.Button").text(A).findOnce();
                            if (a.focused() == false) {
                                //log(a.text() + a.focused());
                                a.click();
                                sleep(1000);
                            }
                        } catch (e) {
                            log(e);
                        }
                        var str = str.replace(A + "-", "");
                        //log(str);
                    } else {
                        var A = str;
                        //log(A);
                        try {
                            var a = className("android.widget.Button").text(A).findOnce();
                            if (a.focused() == false) {
                                //log(a.text() + a.focused());
                                a.click();
                                sleep(1000);
                            }
                        } catch (e) {
                            log(e);
                        }
                    }
                    var g = null;
                    var n = str.search("-");
                    try {
                        text(str).findOnce().click();
                    } catch (e) {
                        log(e);
                    }
                }
            }
        }
        if (text("* 姓名").findOnce() != null) {
            var A = text("* 姓名").findOnce().parent()
            var C = A.child(1).child(0);
            if (C.text() != "") {
                if (C.text() != Choice[2]) {
                    C.setText(Choice[2]);
                }
            } else {
                C.setText(Choice[2]);
            }
        }
        if (text("* 学号/工号").findOnce() != null) {
            var A = text("* 学号/工号").findOnce().parent()
            var C = A.child(1).child(0);
            if (C.text() != "") {
                if (C.text() != Choice[4]) {
                    C.setText(Choice[4]);
                }
            } else {
                C.setText(Choice[4]);
            }
        }

        if (text("* 您当前位置").findOnce() != null) {
            var A = text("* 您当前位置").findOnce().parent().children();
            var B = A[1].children();
            var C = B[0];
            var D = B[0].children();
            if (C.text() == "省份/市" || C.text() != Choice[6]) {
                C.click();
                sleep(1000);
                var str = Choice[6];
                //第一次正则
                var n = str.search("/");
                while (n >= 0) {
                    if (n >= 0) {
                        var i = 0;
                        for (i = 0; i <= n; i++) {
                            if (i != n) {
                                //log(str[i]);
                                if (g != null) {
                                    var g = g + str[i];
                                } else {
                                    var g = str[i];
                                }
                            } else {
                                //删除分割之前的字符
                                var A = g;
                            }
                        }
                        try {
                            var a = className("android.widget.Button").text(A).findOnce();
                            if (a.focused() == false) {
                                //log(a.text() + a.focused());
                                a.click();
                                sleep(1500);
                            }
                        } catch (e) {
                            log(e);
                        }
                        var str = str.replace(A + "/", "");
                    } else {
                        var A = str;
                        //log(A);
                        try {
                            var a = className("android.widget.Button").text(A).findOnce();
                            if (a.focused() == false) {
                                //log(a.text() + a.focused());
                                a.click();
                                sleep(1000);
                            }
                        } catch (e) {
                            log(e);
                        }
                    }
                    var g = null;
                    var n = str.search("/");
                    try {
                        text(str).findOnce().click();
                        sleep(1500);
                        className("android.widget.Button").text("确认").findOnce().click();
                    } catch (e) {
                        log(e);
                    }
                }
            }
        }
        if (text("* 您当前位置").findOnce() != null) {
            var A = text("* 您当前位置").findOnce().parent()
            var C = A.child(2).child(0);
            if (C.text() != "") {
                if (C.text() != Choice[7]) {
                    C.setText(Choice[7]);
                }
            } else {
                C.setText(Choice[7]);
            }
        }
        var SD = Choice[9];
        if (text("今日体温（腋下温度）").findOnce() != null) {
            var A = text("今日体温（腋下温度）").findOnce().parent().children();
            //log(A[0].text() + "：" + D.text());
            var E = text("今日体温（腋下温度）").findOne(1000).parent().child(2).text();
            while (true) {
                var E = text("今日体温（腋下温度）").findOne(1000).parent().child(2).text();
                if (E[0] > SD[0]) {
                    log(E[0], SD[0]);
                    A[1].click();
                    sleep(200);
                } else if (E[0] < SD[0]) {
                    log(E[0], SD[0]);
                    A[3].click();
                    sleep(200);
                } else if (E[1] > SD[1]) {
                    log(E[1], SD[1]);
                    A[1].click();
                    sleep(200);
                } else if (E[1] < SD[1]) {
                    log(E[1], SD[1]);
                    A[3].click();
                    sleep(200);
                } else if (E[3] > SD[3]) {
                    log(E[3], SD[3]);
                    A[1].click();
                    sleep(200);
                } else if (E[3] < SD[3]) {
                    log(E[3], SD[3]);
                    A[3].click();
                    sleep(200);
                } else {
                    break;
                }
            }
        }
        if (text("* 选择以下自己出现的症状(可多选)").findOnce() != null) {
            var A = text("* 选择以下自己出现的症状(可多选)").findOnce().parent();
            var II = 11;
            while (true) {
                if (II > 17) {
                    break;
                }
                for (let i = A.childCount() - 1; i > 0; i--) {
                    if (A.child(i).text() == Choice[II]) {
                        if (A.child(i).checked() == false) {
                            A.child(i).click();
                            sleep(200);
                        }
                        II++;
                    }
                }
            }
        }
        var While = 1;
        var Da = 25; //单选题起始位置
        while (While == 1) {
            if (text(Choice[Da]).findOnce() != null) {
                var A = text(Choice[Da]).findOnce().parent();
                var Aa = text(Choice[Da]).findOnce().parent().children();
                for (var i = A.childCount(); i > 0; i--) {
                    try {
                        if (Aa[i].text() == Choice[Da + 1]) {
                            //定义变量
                            //log(Choice[Da] + ":" + Aa[i].text());
                            Aa[i].click();
                            sleep(500);
                            var Da = Da + 3;
                        }
                    } catch (e) {
                        log(e);
                    }
                }
            } else if (Da > Choice.length) {
                var While = 0;
                log("已遍历完成所有题目");
            } else {
                var Da = Da + 3;
            }
        }
        if (text("* 本人电话").findOnce() != null) {
            var A = text("* 本人电话").findOnce().parent();
            var D = A.child(1).child(0);
            if (D.text() != "") {
                if (D.text() != Choice[19]) {
                    D.setText(Choice[19]);
                }
            } else {
                D.setText(Choice[19]);
            }
        }
        if (text("* 紧急联系人姓名").findOnce() != null) {
            var A = text("* 紧急联系人姓名").findOnce().parent();
            var D = A.child(1).child(0);
            if (D.text() != "") {
                if (D.text() != Choice[21]) {
                    D.setText(Choice[21]);
                }
            } else {
                D.setText(Choice[21]);
            }
        }
        if (text("* 紧急联系人手机号").findOnce() != null) {
            var A = text("* 紧急联系人手机号").findOnce().parent();
            var D = A.child(1).child(0);
            if (D.text() != "") {
                if (D.text() != Choice[23]) {
                    D.setText(Choice[23]);
                }
            } else {
                D.setText(Choice[23]);
            }
        }
        sleep(1000);
        className("android.view.View").text("提交信息").findOne(2000).click();
        if (files.exists("/storage/emulated/0/OrangeJs/自动健康打卡/附加功能.txt") == true) {
            var stop = 0;
            while (true) {
                if (text("打卡成功").findOnce() != null) {
                    window.setPosition(-1000, -1000);
                    sleep(1000);
                    captureScreen("/storage/emulated/0/OrangeJs/自动健康打卡/健康打卡截图.png");
                    toastLog("已尝试截图");
                    window.setPosition(10,10);
                    break;
                } else if (stop > 3) {
                    dialogs.alert("等待加载超时，已取消发送截图");
                    exit();
                    break;
                } else {
                    sleep(3000);
                    log("正在等待打卡完成");
                    stop++;
                }
            }

            function QqShare(Search) {
                while (true) {
                    if (id("com.tencent.mobileqq:id/f55").desc("我的文件").findOnce() != null) {
                        id("com.tencent.mobileqq:id/f55").desc("我的文件").findOnce().click();
                        toastLog("已尝试点击“我的文件”按钮");
                        sleep(2000);
                        break;
                    } else if (id("com.tencent.mobileqq:id/ba1").desc("帐户及设置").findOnce() != null && id("com.tencent.mobileqq:id/kbi").className("android.widget.TextView").text("联系人").findOnce() != null) {
                        id("com.tencent.mobileqq:id/ba1").desc("帐户及设置").findOnce().click();
                        toastLog("已尝试点击“帐户及设置”");
                        sleep(2000);
                    } else if (id("com.tencent.mobileqq:id/kbi").className("android.widget.TextView").text("联系人").findOnce() != null) {
                        id("com.tencent.mobileqq:id/kbi").className("android.widget.TextView").text("联系人").findOnce().parent().click();
                        toastLog("已尝试点击联系人按钮");
                        sleep(2000);
                    } else if (currentPackage() != "com.tencent.mobileqq") {
                        app.startActivity({
                            action: "android.intent.action.VIEW", //此处可为其他值
                            packageName: "com.tencent.mobileqq",
                            className: "com.tencent.mobileqq.activity.SplashActivity"
                            //此处可以加入其他内容，如data、extras
                        });
                        toastLog("当前非QQ主界面\n正在启动QQ");
                        sleep(2000);
                    } else {
                        back();
                        toastLog("QQ已启动，但未处于主界面，返回中……");
                        sleep(2000);
                    }
                }
                if (id("com.tencent.mobileqq:id/dqc").text("手机文件").findOnce() != null) {
                    id("com.tencent.mobileqq:id/dqc").text("手机文件").findOnce().click();
                    toastLog("已尝试点击“手机文件”按钮");
                    sleep(2000);
                    if (id("com.tencent.mobileqq:id/iim").text("全部(手机内存/SD卡)").findOnce() != null) {
                        id("com.tencent.mobileqq:id/iim").text("全部(手机内存/SD卡)").findOnce().click();
                        toastLog("已尝试点击“全部文件”");
                        sleep(2000);
                        if (id("com.tencent.mobileqq:id/arm").className("android.widget.TextView").text("SD卡").findOnce() != null) {
                            id("com.tencent.mobileqq:id/arm").className("android.widget.TextView").text("SD卡").findOnce().parent().click();
                            toastLog("已尝试点击SD按钮");
                            sleep(2000);
                            if (id("com.tencent.mobileqq:id/bcl").text("/storage/emulated/0").findOnce() == null) {
                                toastLog("SD卡非主内存\n返回重选");
                                Justback();
                                sleep(1000);
                                if (id("com.tencent.mobileqq:id/arm").className("android.widget.TextView").text("手机内存").findOnce() != null) {
                                    id("com.tencent.mobileqq:id/arm").className("android.widget.TextView").text("手机内存").findOnce().parent().click();
                                    toastLog("已尝试点击“手机内存”按钮");
                                    sleep(2000);
                                } else {
                                    toastLog("找不到手机内存按钮");
                                }
                            }
                            if (id("com.tencent.mobileqq:id/bcl").text("/storage/emulated/0").findOnce() != null) {
                                while (true) {
                                    if (id("com.tencent.mobileqq:id/ec9").className("android.widget.AbsListView").findOnce() == null) {
                                        toastLog("当前非文件浏览界面");
                                        break;
                                    } else if (id("com.tencent.mobileqq:id/c_x").className("android.widget.TextView").text("OrangeJs").findOnce() != null) {
                                        id("com.tencent.mobileqq:id/c_x").className("android.widget.TextView").text("OrangeJs").findOnce().parent().click();
                                        toastLog("已找到目标文件夹\n并已尝试点击…");
                                        sleep(2000);
                                        break;
                                    } else {
                                        var a = id("com.tencent.mobileqq:id/ec9").className("android.widget.AbsListView").findOnce().bounds();
                                        swipe(a.centerX(), a.height(), a.centerX(), 0, 500);
                                        toastLog("正在滑动寻找OrangeJs文件夹");
                                    }
                                }
                                if (id("com.tencent.mobileqq:id/c_x").className("android.widget.TextView").text("自动健康打卡").findOnce() != null) {
                                    id("com.tencent.mobileqq:id/c_x").className("android.widget.TextView").text("自动健康打卡").findOnce().parent().click();
                                    toastLog("已尝试点击“自动健康打卡”文件夹");
                                    sleep(2000);
                                    if (id("com.tencent.mobileqq:id/c_g").className("android.widget.TextView").text("健康打卡截图.png").findOnce()) {
                                        id("com.tencent.mobileqq:id/c_g").className("android.widget.TextView").text("健康打卡截图.png").findOnce().parent().parent().click();
                                        toastLog("已尝试点击“健康打卡截图”");
                                        sleep(2000);
                                        if (id("com.tencent.mobileqq:id/ivTitleBtnRightImage").desc("菜单").findOnce() != null) {
                                            id("com.tencent.mobileqq:id/ivTitleBtnRightImage").desc("菜单").findOnce().click();
                                            toastLog("已尝试点击“菜单”按钮");
                                            sleep(2000);
                                            if (className("android.widget.GridView").id("com.tencent.mobileqq:id/cx3").findOnce() != null) {
                                                className("android.widget.GridView").id("com.tencent.mobileqq:id/cx3").findOnce().child(0).click();
                                                toastLog("已尝试点击“发给好友”按钮");
                                                sleep(2000);
                                                if (id("com.tencent.mobileqq:id/et_search_keyword").findOnce() != null) {
                                                    id("com.tencent.mobileqq:id/et_search_keyword").findOnce().click();
                                                    toastLog("已尝试点击“搜索框”");
                                                    sleep(2000);
                                                    if (id("com.tencent.mobileqq:id/name").className("android.widget.LinearLayout").depth(5).findOnce() != null || id("com.tencent.mobileqq:id/ik9").findOnce() != null) {
                                                        if (id("com.tencent.mobileqq:id/name").className("android.widget.LinearLayout").depth(5).findOnce() != null) {
                                                            id("com.tencent.mobileqq:id/name").className("android.widget.LinearLayout").depth(5).findOnce().child(0).child(0).setText(Search);
                                                            log("已找到悬浮搜索框8.1");
                                                            sleep(2000);
                                                        } else if (id("com.tencent.mobileqq:id/ik9").findOnce() != null) {
                                                            id("com.tencent.mobileqq:id/ik9").findOnce().child(0).child(0).setText(Search);
                                                            log("已找到悬浮搜索框8.2.7");
                                                            sleep(2000);
                                                        }
                                                        if (id("com.tencent.mobileqq:id/title").className("android.widget.TextView").text(Search).findOnce() != null) {
                                                            id("com.tencent.mobileqq:id/title").className("android.widget.TextView").text(Search).findOnce().parent().parent().click();
                                                            toastLog("已尝试点击“发送对象（名称）”");
                                                            sleep(2000);
                                                            if (id("com.tencent.mobileqq:id/dialogRightBtn").findOnce() != null) {
                                                                id("com.tencent.mobileqq:id/dialogRightBtn").findOnce().click();
                                                                toastLog("已尝试点击“发送”按钮");
                                                            } else {
                                                                toastLog("未找到QQ“发送”按钮");
                                                            }
                                                        } else if (id("com.tencent.mobileqq:id/name").className("android.widget.TextView").text("(" + Search + ")").findOnce() != null || id("com.tencent.mobileqq:id/j64").className("android.widget.TextView").text("(" + Search + ")").findOnce() != null) {
                                                            if (id("com.tencent.mobileqq:id/name").className("android.widget.TextView").text("(" + Search + ")").findOnce() != null) {
                                                                id("com.tencent.mobileqq:id/name").className("android.widget.TextView").text("(" + Search + ")").findOnce().parent().parent().click();
                                                                log("已找到8.1发送对象的号码");
                                                            } else if (id("com.tencent.mobileqq:id/j64").className("android.widget.TextView").text("(" + Search + ")").findOnce() != null) {
                                                                id("com.tencent.mobileqq:id/j64").className("android.widget.TextView").text("(" + Search + ")").findOnce().parent().parent().click();
                                                                log("已找到8.2.7发送对象的号码");
                                                            }
                                                            toastLog("已尝试点击“发送对象（号码）”");
                                                            sleep(2000);
                                                            if (id("com.tencent.mobileqq:id/dialogRightBtn").findOnce() != null) {
                                                                id("com.tencent.mobileqq:id/dialogRightBtn").findOnce().click();
                                                                toastLog("已尝试点击“发送”按钮");
                                                            } else {
                                                                toastLog("未找到QQ“发送”按钮");
                                                            }
                                                        } else {
                                                            toastLog("未找到QQ发送对象");
                                                        }
                                                    } else {
                                                        toastLog("未找到QQ悬浮搜索框");
                                                    }
                                                } else {
                                                    toastLog("未找到QQ分享页搜索框");
                                                }
                                            } else {
                                                toastLog("未找到“分享菜单”")
                                            }
                                        } else {
                                            toastLog("找不到菜单按钮");
                                        }
                                    } else {
                                        toastLog("找不到健康打卡截图");
                                    }
                                } else {
                                    toastLog("找不到“自动健康打卡”文件夹")
                                }
                            } else {
                                toastLog("找不到标准存储位置");
                            }
                        } else {
                            toastLog("找不到存储位置");
                        }
                    }
                }
            }

            function TimShare(Search) {
                while (true) {
                    if (className("android.widget.EditText").id("com.tencent.tim:id/et_search_keyword").findOnce() != null) {
                        className("android.widget.EditText").id("com.tencent.tim:id/et_search_keyword").findOnce().click();
                        toastLog("已尝试点击“首页搜索框”");
                        sleep(2000);
                        break;
                    } else if (className("android.widget.TabWidget").id("android:id/tabs").findOnce() != null) {
                        className("android.widget.TabWidget").id("android:id/tabs").findOnce().child(0).click();
                        toastLog("已尝试点击首页按钮");
                        sleep(2000);
                    } else if (currentPackage() != "com.tencent.tim") {
                        app.startActivity({
                            action: "android.intent.action.VIEW", //此处可为其他值
                            packageName: "com.tencent.tim",
                            className: "com.tencent.mobileqq.activity.SplashActivity"
                            //此处可以加入其他内容，如data、extras
                        });
                        toastLog("当前非TIM主界面\n正在启动TIM");
                        sleep(2000);
                    } else {
                        back();
                        toastLog("TIM已启动，但未处于主界面，返回中……");
                        sleep(2000);
                    }
                }
                if (id("com.tencent.tim:id/et_search_keyword").findOnce() != null) {
                    id("com.tencent.tim:id/et_search_keyword").findOnce().click();
                    toastLog("已尝试点击“搜索框”");
                    sleep(2000);
                    if (id("com.tencent.tim:id/name").className("android.widget.LinearLayout").depth(5).findOnce() != null) {
                        id("com.tencent.tim:id/name").className("android.widget.LinearLayout").depth(5).findOnce().child(0).child(0).setText(Search);
                        sleep(2000);
                        if (id("com.tencent.tim:id/name").className("android.widget.TextView").text("(" + Search + ")").findOnce() != null) {
                            id("com.tencent.tim:id/name").className("android.widget.TextView").text("(" + Search + ")").findOnce().parent().parent().click();
                            toastLog("已尝试点击“发送对象（号码）”");
                            sleep(2000);
                            TimShareFs();
                        } else if (id("com.tencent.tim:id/title").className("android.widget.TextView").text(Search).findOnce() != null) {
                            id("com.tencent.tim:id/title").className("android.widget.TextView").text(Search).findOnce().parent().parent().click();
                            toastLog("已尝试点击“发送对象（名称）”");
                            sleep(2000);
                            TimShareFs();
                        } else {
                            toastLog("未找到TIM发送对象");
                        }
                    } else {
                        toastLog("未找到TIM悬浮搜索框");
                    }
                } else {
                    toastLog("未找到TIM分享页搜索框");
                }

                function TimShareFs() {
                    if (id("com.tencent.tim:id/rlCommenTitle").findOnce() != null) {
                        if (id("com.tencent.tim:id/rlCommenTitle").findOnce().parent().childCount() == 8) {
                            id("com.tencent.tim:id/rlCommenTitle").findOnce().parent().child(7).child(4).click();
                        } else if (id("com.tencent.tim:id/rlCommenTitle").findOnce().parent().childCount() == 10) {
                            id("com.tencent.tim:id/rlCommenTitle").findOnce().parent().child(9).child(4).click();
                        }
                        toastLog("已尝试点击“文件”按钮");
                        sleep(2000);
                        if (id("com.tencent.tim:id/name").className("android.widget.TextView").text("本机文件").findOnce() != null) {
                            id("com.tencent.tim:id/name").className("android.widget.TextView").text("本机文件").findOnce().parent().parent().click();
                            toastLog("已尝试点击“本机文件”");
                            sleep(2000);
                            if (id("com.tencent.tim:id/ivTitleBtnRightText").text("更多").findOnce() != null) {
                                id("com.tencent.tim:id/ivTitleBtnRightText").text("更多").findOnce().click();
                                toastLog("已点击“更多”按钮");
                                sleep(2000);
                                if (id("com.tencent.tim:id/name").className("android.widget.TextView").text("SD卡").findOnce() != null) {
                                    id("com.tencent.tim:id/name").className("android.widget.TextView").text("SD卡").findOnce().parent().click();
                                    toastLog("已尝试点击SD按钮");
                                    sleep(2000);
                                    if (id("com.tencent.tim:id/name").className("android.widget.TextView").text("/storage/emulated/0").findOnce() == null) {
                                        toastLog("SD卡非主内存\n返回重选");
                                        Justback();
                                        sleep(1000);
                                        if (id("com.tencent.tim:id/name").className("android.widget.TextView").text("手机内存").findOnce() != null) {
                                            id("com.tencent.tim:id/name").className("android.widget.TextView").text("手机内存").findOnce().parent().click();
                                            toastLog("已尝试点击“手机内存”按钮");
                                            sleep(2000);
                                        } else {
                                            toastLog("找不到手机内存按钮");
                                        }
                                    }
                                    if (id("com.tencent.tim:id/name").className("android.widget.TextView").text("/storage/emulated/0").findOnce() != null) {
                                        while (true) {
                                            if (id("com.tencent.tim:id/name").className("android.widget.AbsListView").findOnce() == null) {
                                                toastLog("当前非文件浏览界面");
                                                break;
                                            } else if (id("com.tencent.tim:id/name").className("android.widget.TextView").text("OrangeJs").findOnce() != null) {
                                                id("com.tencent.tim:id/name").className("android.widget.TextView").text("OrangeJs").findOnce().parent().click();
                                                toastLog("已找到目标文件夹\n并已尝试点击…");
                                                sleep(2000);
                                                break;
                                            } else {
                                                var a = id("com.tencent.tim:id/name").className("android.widget.AbsListView").findOnce().bounds();
                                                swipe(a.centerX(), a.height(), a.centerX(), 0, 500);
                                                toastLog("正在滑动寻找OrangeJs文件夹");
                                            }
                                        }
                                        if (id("com.tencent.tim:id/name").className("android.widget.TextView").text("自动健康打卡").findOnce() != null) {
                                            id("com.tencent.tim:id/name").className("android.widget.TextView").text("自动健康打卡").findOnce().parent().click();
                                            toastLog("已尝试点击“自动健康打卡”文件夹");
                                            sleep(2000);
                                            if (id("com.tencent.tim:id/name").className("android.widget.TextView").text("健康打卡截图.png").findOnce()) {
                                                id("com.tencent.tim:id/name").className("android.widget.TextView").text("健康打卡截图.png").findOnce().parent().click();
                                                toastLog("已尝试点击“健康打卡截图”");
                                                sleep(2000);
                                                if (id("com.tencent.tim:id/name").className("android.widget.Button").text("发送(1)").findOnce() != null) {
                                                    id("com.tencent.tim:id/name").className("android.widget.Button").text("发送(1)").findOnce().click();
                                                    toastLog("已尝试点击“发送”按钮");
                                                    sleep(2000);
                                                    if (text("健康打卡截图.png").exists()) {
                                                        toastLog("发送截图任务已完成");
                                                    }
                                                } else {
                                                    toastLog("找不到发送按钮");
                                                }
                                            } else {
                                                toastLog("找不到健康打卡截图");
                                            }
                                        } else {
                                            toastLog("找不到“自动健康打卡”文件夹")
                                        }
                                    } else {
                                        toastLog("找不到标准存储位置");
                                    }
                                } else {
                                    toastLog("找不到存储位置");
                                }
                            } else {
                                toastLog("找不到“更多”按钮");
                            }
                        } else {
                            toastLog("找不到“本机文件”");
                        }
                    } else {
                        toastLog("找不到标准聊天界面");
                    }
                }
            }
            var Wj = open("/storage/emulated/0/OrangeJs/自动健康打卡/附加功能.txt");
            var Fz = Wj.readlines();
            var Search = Fz[0];
            if (Fz[1] == "com.tencent.mobileqq") {
                QqShare(Search);
            } else if (Fz[1] == "com.tencent.tim") {
                TimShare(Search);
            }
            Wj.close();
        }
        toastLog("自动健康打卡：\n脚本已运行完成");
        dialogs.alert("自动健康打卡：\n脚本已运行完成");
        exit();
    }
}