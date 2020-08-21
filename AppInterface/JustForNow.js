"ui";
context_DayOrNight = 1;
context_widthofTen = device.width / 10;

function setDayMode() {
    context_framebg = "#FAFAFA" //全局背景
    context_sBarColor = "#BDBDBD"; //通知栏颜色
    context_textColor = "#000000" //文字颜色
    context_textBg = "#FAFAFA" //文字背景
    context_QxtextBg = "#FAFAFA" //权限设置中的背景
    context_FctextBg = "#FAFAFA" //悬浮窗权限中的背景
    context_SunMoon = "@drawable/ic_wb_sunny_black_48dp"; //☀️
    context_Logo = getStorageData('APPbasic', 'URLprefix') + "/OrangeJs_logo.png" //黑色logo
}
importClass(android.animation.ObjectAnimator);

function setNightMode() {
    context_framebg = "#000000"; //全局背景
    context_sBarColor = "#000000"; //通知栏颜色
    context_textColor = "#FFFFFF" //文字颜色
    context_textBg = "#000000" //文字背景
    context_QxtextBg = "#903F3F3F" //权限设置中的背景
    context_FctextBg = "#646464" //悬浮窗的背景
    context_SunMoon = "@drawable/ic_brightness_2_black_48dp" //🌙
    context_Logo = getStorageData('APPbasic', 'URLprefix') + "/OrangeJs-logoWhite.png" //白色Logo
}
ui.emitter.on("resume", function() {
    try {
        ui.autoService.checked = auto.service != null;
    } catch (e) {}
});
mainUi();

function mainUi() {
    if (context_DayOrNight == 1) {
        setDayMode();
    } else {
        setNightMode();
    }
    ui.statusBarColor(context_sBarColor); //通知栏颜色
    //Not pink色是#DFC8C6
    ui.layout(
        <ScrollView>
            <frame id="main" background="{{context_framebg}}">//全局背景颜色
                <vertical align="center" paddingTop="5" margin="0">
                    <img src="{{context_Logo}}" h="40" margin="0 0 0 10"/>//黑色logo
                    <text id="text" textStyle="bold" color="{{context_textColor}}" gravity="left" size="15" marginLeft="28"/>
                    //水平线性布局
                    <linear orientation="horizontal" align="center" margin="5">
                        <card layout_weight="50" h="50" marginRight="2" cardCornerRadius="25dp"
                        cardElevation="0dp" gravity="center_vertical">
                        <vertical padding="10 0" h="auto">
                        </vertical>
                        <View bg="#FFEA3324" h="*" w="*"/>//卡片颜色1
                        <View bg="#FF4395FB" h="*" w="0"/>//卡片颜色2
                        <card layout_weight="50" h="40" margin="5 0 5 0" cardCornerRadius="20dp"
                        cardElevation="0dp" align="center" >
                        <vertical padding="10 0" h="auto">
                        </vertical>
                        <View bg="{{context_QxtextBg}}" h="*" w="*"/>
                        <Switch id="autoService" text="无障碍服务" textColor="{{context_textColor}}" gravity="center" textStyle="bold" bg="{{context_QxtextBg}}" checked="{{auto.service != null}}" padding="5 5 5 5" textSize="15sp"/>
                    </card>
                </card>
                
                <card layout_weight="50" h="50" marginLeft="2" cardCornerRadius="25dp"
                cardElevation="0dp" gravity="center">
                <vertical padding="10 0" h="auto">
                </vertical>
                <View id="TEST" bg="#FF007CF3" h="*" w="*"/>//卡片颜色1
                <View bg="#FF4395FB" h="*" w="0"/>//卡片颜色2
                
                <card id="xfc_text" layout_weight="50" h="40" margin="5 0 5 0" cardCornerRadius="20dp"
                cardElevation="0dp" align="center" foreground="?attr/selectableItemBackground" clickable="true">
                <vertical padding="10 0" h="auto">
                </vertical>
                <View bg="{{context_FctextBg}}" h="*" w="*"/>//悬浮窗权限中的卡片颜色
                <text textStyle="bold" text="停止全部脚本" color="{{context_textColor}}" bg="{{context_FctextBg}}" gravity="center" size="15" h="auto"/>
                
            </card>
        </card>
        </linear>
        <card h="1" margin="5 5" cardCornerRadius="1dp"
        cardElevation="0dp" gravity="center_vertical">
        <View bg="#FF832FFD" h="*" w="*"/>//分割线颜色1
        <View bg="#FF4395FB" h="*" marginRight="63"/>//分割线颜色2
        <View bg="#FF32F558" h="*" marginRight="126"/>//分割线颜色3
        <View bg="#FFFCD830" h="*" marginRight="189"/>//分割线颜色4
        <View bg="#FFFE8E2D" h="*" marginRight="252"/>//分割线颜色5
        <View bg="#FFFC3032" h="*" marginRight="315"/>//分割线颜色6
        </card>
        <text id="NowScript" text="可运行脚本" textStyle="bold" color="{{context_textColor}}" gravity="left" size="15" marginLeft="28">
        </text>
        <Horizo​​ntalScrollView>
            <linear orientation="horizontal" align="left" margin="0 5 0 0">
                //京东脚本
                <card w="300" h="150" cardCornerRadius="10dp" cardElevation="2dp" align="left" margin="5 5 5 5">
                    <View bg="#F44336" h="*" w="*"/>
                    <vertical padding="0 0" h="auto">
                        <linear orientation="horizontal" align="left" margin="0">
                            <img src="https://pp.myapp.com/ma_icon/0/icon_7193_1578290782/256" w="40" h="40" margin="20 20 0 0"/>
                            <vertical padding="0 0" h="auto">
                                <text text="京东" typeface="sans" textStyle="bold" color="#FFFFFF"  gravity="center" size="20" margin="10 25 0 0"/>
                            </vertical>
                        </linear>
                        <linear orientation="horizontal" align="center" margin="0" layout_gravity="left">
                            <card w="240" h="50" cardCornerRadius="5dp" cardElevation="0dp" margin="20 20 0 20">
                                <View bg="#EF9A9A"/>
                                <spinner id="sp_Jd1" entries="种豆得豆自动脚本|自动宠汪汪|东东农场自动脚本" textColor="#FFFFFF" align="center" marginLeft="10" textSize="20" layout_gravity="center" spinnerMode="dialog"/>
                            </card>
                            <img src="@drawable/ic_play_arrow_black_48dp" id="R_JD" w="*" h="30" tint="#EF9A9A" layout_gravity="center" bg="?attr/selectableItemBackground" clickable="true" circle="true"/>
                        </linear>
                    </vertical>
                </card>
                //拼多多脚本
                <card w="300" h="150" cardCornerRadius="10dp" cardElevation="2dp" align="left" margin="5 0">
                    <View bg="#FF1744" h="*" w="*"/>
                    <vertical padding="0 0" h="auto">
                        <linear orientation="horizontal" align="left" margin="0">
                            <img src="http://image.coolapk.com/apk_logo/2019/1218/11/512E5B9B4E8B4A7-32664-o_1dsbg23j210ns1ee110u7evuevcr-uid-1871800@512x512.png" w="40" h="40" margin="20 20 0 0"/>
                            <vertical padding="0 0" h="auto">
                                <text text="拼多多" typeface="sans" textStyle="bold" color="#FFFFFF"  gravity="center" size="20" margin="10 25 0 0"/>
                            </vertical>
                        </linear>
                        <linear orientation="horizontal" align="center" margin="0" layout_gravity="left">
                            <card w="200" h="50" cardCornerRadius="5dp" cardElevation="0dp" margin="20 20" >
                                <View w="*" h="*" bg="#90FF1744"/>
                                <text id="ScriptTen" text="多多果园自动脚本" typeface="sans" color="#FFFFFF"  gravity="center" textSize="20" marginTop="0" bg="?attr/selectableItemBackground" clickable="true"/>
                            </card>
                        </linear>
                    </vertical>
                </card>
                
            </linear>
        </Horizo​​ntalScrollView>
        
        <Horizo​​ntalScrollView>
            <linear orientation="horizontal" align="left" margin="0">
                //微博脚本
                <card h="150" w="300" cardCornerRadius="10dp" cardElevation="2dp" align="left" margin="5 5 5 5">
                    <View bg="#FF8F00" h="*" w="*"/>
                    <vertical padding="0 0" h="auto">
                        <linear orientation="horizontal" align="left" margin="0">
                            <img src="http://pp.myapp.com/ma_icon/0/icon_9926_1579487446/256" w="40" h="40" margin="20 20 0 0"/>
                            <vertical padding="0 0" h="auto">
                                <text text="微博" typeface="sans" textStyle="bold" color="#FFFFFF"  gravity="center" size="20" margin="10 25 0 0"/>
                            </vertical>
                        </linear>
                        <linear orientation="horizontal" align="center" margin="0" layout_gravity="left">
                            <card w="200" h="50" cardCornerRadius="5dp" cardElevation="0dp" margin="20 20" >
                                <View w="*" h="*" bg="#90FF8F00"/>
                                <text id="ScriptNine" text="微博任务自动脚本" typeface="sans" color="#FFFFFF"  gravity="center" size="20" marginTop="0" bg="?attr/selectableItemBackground" clickable="true"/>
                            </card>
                        </linear>
                    </vertical>
                </card>
                //微信脚本
                <card w="300" h="150" cardCornerRadius="10dp" cardElevation="2dp" align="left" margin="5 0">
                    <View bg="#4CAF50" h="*" w="*"/>
                    <vertical padding="0 0" h="auto">
                        <linear orientation="horizontal" align="left" margin="0">
                            <img src="http://pp.myapp.com/ma_icon/0/icon_10910_1577346809/256" w="40" h="40" margin="20 20 0 0"/>
                            <vertical padding="0 0" h="auto">
                                <text text="微信" typeface="sans" textStyle="bold" color="#FFFFFF"  gravity="center" size="20" margin="10 25 0 0"/>
                            </vertical>
                        </linear>
                        <linear orientation="horizontal" align="center" margin="0" layout_gravity="left">
                            <card w="200" h="50" cardCornerRadius="5dp" cardElevation="0dp" margin="20 20" >
                                <View w="*" h="*" bg="#A5D6A7"/>
                                <text id="ScriptOne" text="自动微信发消息" typeface="sans" color="#FFFFFF"  gravity="center" textSize="20" marginTop="0" bg="?attr/selectableItemBackground" clickable="true"/>
                            </card>
                        </linear>
                    </vertical>
                </card>
            </linear>
        </Horizo​​ntalScrollView>
        
        <Horizo​​ntalScrollView>
            <linear orientation="horizontal" align="left" margin="0">
                //QQ脚本
                <card h="150" w="300" cardCornerRadius="10dp" cardElevation="2dp" align="left" margin="5 5 5 5">
                    <View bg="#F02196F3" h="*" w="*"/>
                    <vertical padding="0 0" h="auto">
                        <linear orientation="horizontal" align="left" margin="0">
                            <img src="http://pp.myapp.com/ma_icon/0/icon_6633_1584375640/256" w="40" h="40" margin="20 20 0 0"/>
                            <vertical padding="0 0" h="auto">
                                <text text="QQ" typeface="sans" textStyle="bold" color="#FFFFFF"  gravity="center" size="20" margin="10 25 0 0"/>
                            </vertical>
                        </linear>
                        <linear orientation="horizontal" align="center" margin="0" layout_gravity="left">
                            <card w="200" h="50" cardCornerRadius="5dp" cardElevation="0dp" margin="20 20" >
                                <View w="*" h="*" bg="#90CAF9"/>
                                <text id="ScriptThi" text="自动动态点赞" typeface="sans" color="#FFFFFF"  gravity="center" size="20" marginTop="0" bg="?attr/selectableItemBackground" clickable="true"/>
                            </card>
                        </linear>
                    </vertical>
                </card>
                //完美校园脚本
                <card w="300" h="150" cardCornerRadius="10dp" cardElevation="2dp" align="left" margin="5 0">
                    <View bg="#F0FD7034" h="*" w="*"/>
                    <vertical padding="0 0" h="auto">
                        <linear orientation="horizontal" align="left" margin="0">
                            <img src="https://android-artworks.25pp.com/fs08/2020/01/22/8/110_30d36bea2b970bda26ac38b5eb3a2935_con_130x130.png" w="40" h="40" margin="20 20 0 0"/>
                            <vertical padding="0 0" h="auto">
                                <text text="完美校园" typeface="sans" textStyle="bold" color="#FFFFFF"  gravity="center" size="20" margin="10 25 0 0"/>
                            </vertical>
                        </linear>
                        <linear orientation="horizontal" align="center" margin="0" layout_gravity="left">
                            <card w="200" h="50" cardCornerRadius="5dp" cardElevation="0dp" margin="20 20" >
                                <View w="*" h="*" bg="#80FD7034"/>
                                <text id="ScriptTwe" text="自动健康打卡" typeface="sans" color="#FFFFFF"  gravity="center" textSize="20" marginTop="0" bg="?attr/selectableItemBackground" clickable="true"/>
                            </card>
                        </linear>
                    </vertical>
                </card>
            </linear>
        </Horizo​​ntalScrollView>
        
        <linear orientation="horizontal" align="center" margin="5 15 5 15" >
            <img src="{{context_SunMoon}}" id="changeColor" w="30" h="30"  tint="{{context_textColor}}" bg="{{context_textBg}}" layout_weight="20" layout_gravity="center" bg="?attr/selectableItemBackground" clickable="true"/>
            <text id="Privacy_Security" text="隐私与安全" color="#BDBDBD"  bg="{{context_textBg}}" textSize="13sp" layout_weight="20" layout_gravity="center" bg="?attr/selectableItemBackground" clickable="true"/>
            <text id="JoinQQGroup" text="加入QQ群" color="#BDBDBD"  bg="{{context_textBg}}" textSize="13sp" layout_weight="20" layout_gravity="center" bg="?attr/selectableItemBackground" clickable="true"/>
            <text id="TalktoDeveloper" text="反馈问题" color="#BDBDBD"  bg="{{context_textBg}}" textSize="13sp" layout_weight="20" layout_gravity="center" bg="?attr/selectableItemBackground" clickable="true"/>
            <text id="AboutApp" text="关于软件" color="#BDBDBD"  bg="{{context_textBg}}" textSize="13sp" layout_weight="20" layout_gravity="center" bg="?attr/selectableItemBackground" clickable="true"/>
        </linear>
        </vertical>
        </frame>
        </ScrollView>
    );
    ui.autoService.on("check", function(checked) {
        // 用户勾选无障碍服务的选项时，跳转到页面让用户去开启
        if (checked && auto.service == null) {
            app.startActivity({
                action: "android.settings.ACCESSIBILITY_SETTINGS"
            });
        }
        if (!checked && auto.service != null) {
            auto.service.disableSelf();
        }
    });
    ui.ScriptOne.click(() => {
        engines.execScript("自动微信发消息", "runScriptOne();\n" + runScriptOne.toString());
    });
    ui.AboutApp.click(() => {
        AboutApp();
    });

    function runScriptOne() {
        var DownJs = dialogs.build({
            title: "正在请求脚本中……",
            progress: {
                max: -1
            },
            cancelable: false
        }).show();
        var ScriptOne_Url = getStorageData('APPbasic', 'URLprefix') + "/OrangeJs_%E8%87%AA%E5%8A%A8%E5%BE%AE%E4%BF%A1%E5%8F%91%E6%B6%88%E6%81%AF_%E5%BE%AE%E4%BF%A1%E8%84%9A%E6%9C%AC.js"; //第一个脚本网址
        var res_script = http.get(ScriptOne_Url, {
            headers: {
                'Accept-Language': 'en-us,en;q=0.5',
                'User-Agent': 'Mozilla/5.0(Macintosh;IntelMacOSX10_7_0)AppleWebKit/535.11(KHTML,likeGecko)Chrome/17.0.963.56Safari/535.11'
            }
        });

        if (res_script.statusCode == 200) {
            DownJs.dismiss();
            toastLog("脚本获取成功");
            var OrangeJs = res_script.body.string();
            engines.execScript("自动微信发消息", OrangeJs);
        } else {
            DownJs.dismiss();
            dialogs.alert("脚本获取失败！这可能是您的网络原因造成的，建议您检查网络后再重新运行软件吧\nHTTP状态码:" + res_script.statusMessage);
        }
    }
    ui.R_JD.click(() => {
        if (ui.sp_Jd1.getSelectedItemPosition() == 2) {
            engines.execScript("东东农场自动脚本", "runScriptEight();\n" + runScriptEight.toString());
        } else if (ui.sp_Jd1.getSelectedItemPosition() == 1) {
            engines.execScript("自动宠汪汪", "runScriptSix();\n" + runScriptSix.toString());
        } else if (ui.sp_Jd1.getSelectedItemPosition() == 0) {
            engines.execScript("种豆得豆自动脚本", "runScriptFourt();\n" + runScriptFourt.toString());
        }
    });

    function runScriptEight() {
        var DownJs = dialogs.build({
            title: "正在请求脚本中……",
            progress: {
                max: -1
            },
            cancelable: false
        }).show();
        var ScriptEight_Url = getStorageData('APPbasic', 'URLprefix') + "/OrangeJs_%E4%B8%9C%E4%B8%9C%E5%86%9C%E5%9C%BA%E8%87%AA%E5%8A%A8%E8%84%9A%E6%9C%AC_%E4%BA%AC%E4%B8%9C%E8%84%9A%E6%9C%AC.js"; //第八个脚本网址
        var res_script = http.get(ScriptEight_Url, {
            headers: {
                'Accept-Language': 'en-us,en;q=0.5',
                'User-Agent': 'Mozilla/5.0(Macintosh;IntelMacOSX10_7_0)AppleWebKit/535.11(KHTML,likeGecko)Chrome/17.0.963.56Safari/535.11'
            }
        });
        if (res_script.statusCode == 200) {
            DownJs.dismiss();
            toastLog("脚本获取成功");
            var OrangeJs = res_script.body.string();
            engines.execScript("东东农场自动脚本", OrangeJs);
        } else {
            DownJs.dismiss();
            dialogs.alert("脚本获取失败！", "这可能是您的网络原因造成的，建议您检查网络后再重新运行软件吧\nHTTP状态码:" + res_script.statusMessage);
        }
    }

    function runScriptFourt() {
        var DownJs = dialogs.build({
            title: "正在请求脚本中……",
            progress: {
                max: -1
            },
            cancelable: false
        }).show();
        var ScriptFourt_Url = getStorageData('APPbasic', 'URLprefix') + "/OrangeJs_%E7%A7%8D%E8%B1%86%E5%BE%97%E8%B1%86%E8%87%AA%E5%8A%A8%E8%84%9A%E6%9C%AC_%E4%BA%AC%E4%B8%9C%E8%84%9A%E6%9C%AC.js"; //第十四个脚本网址
        var res_script = http.get(ScriptFourt_Url, {
            headers: {
                'Accept-Language': 'en-us,en;q=0.5',
                'User-Agent': 'Mozilla/5.0(Macintosh;IntelMacOSX10_7_0)AppleWebKit/535.11(KHTML,likeGecko)Chrome/17.0.963.56Safari/535.11'
            }
        });
        if (res_script.statusCode == 200) {
            DownJs.dismiss();
            toastLog("脚本获取成功");
            var OrangeJs = res_script.body.string();
            engines.execScript("种豆得豆自动脚本", OrangeJs);
        } else {
            DownJs.dismiss();
            dialogs.alert("脚本获取失败！", "这可能是您的网络原因造成的，建议您检查网络后再重新运行软件吧\nHTTP状态码:" + res_script.statusMessage);
        }
    }

    ui.ScriptTen.click(() => {
        engines.execScript("多多果园自动脚本", "runScriptTen();\n" + runScriptTen.toString());
    });

    function runScriptTen() {
        var DownJs = dialogs.build({
            title: "正在请求脚本中……",
            progress: {
                max: -1
            },
            cancelable: false
        }).show();
        var ScriptTen_Url = getStorageData('APPbasic', 'URLprefix') + "/OrangeJs_%E5%A4%9A%E5%A4%9A%E6%9E%9C%E5%9B%AD%E8%87%AA%E5%8A%A8%E8%84%9A%E6%9C%AC_%E6%8B%BC%E5%A4%9A%E5%A4%9A%E8%84%9A%E6%9C%AC.js"; //第十个脚本网址
        var res_script = http.get(ScriptTen_Url, {
            headers: {
                'Accept-Language': 'en-us,en;q=0.5',
                'User-Agent': 'Mozilla/5.0(Macintosh;IntelMacOSX10_7_0)AppleWebKit/535.11(KHTML,likeGecko)Chrome/17.0.963.56Safari/535.11'
            }
        });
        if (res_script.statusCode == 200) {
            DownJs.dismiss();
            toastLog("脚本获取成功");
            var OrangeJs = res_script.body.string();
            engines.execScript("多多果园自动脚本", OrangeJs);
        } else {
            DownJs.dismiss();
            dialogs.alert("脚本获取失败！", "这可能是您的网络原因造成的，建议您检查网络后再重新运行软件吧\nHTTP状态码:" + res_script.statusMessage);
        }
    }


    function runScriptSix() {
        var DownJs = dialogs.build({
            title: "正在请求脚本中……",
            progress: {
                max: -1
            },
            cancelable: false
        }).show();
        var ScriptSix_Url = getStorageData('APPbasic', 'URLprefix') + "/OrangeJs_%E8%87%AA%E5%8A%A8%E5%AE%A0%E6%B1%AA%E6%B1%AA_%E4%BA%AC%E4%B8%9C%E8%84%9A%E6%9C%AC.js"; //第六个脚本网址
        var res_script = http.get(ScriptSix_Url, {
            headers: {
                'Accept-Language': 'en-us,en;q=0.5',
                'User-Agent': 'Mozilla/5.0(Macintosh;IntelMacOSX10_7_0)AppleWebKit/535.11(KHTML,likeGecko)Chrome/17.0.963.56Safari/535.11'
            }
        });
        if (res_script.statusCode == 200) {
            DownJs.dismiss();
            toastLog("脚本获取成功");
            var OrangeJs = res_script.body.string();
            engines.execScript("自动宠汪汪", OrangeJs);
        } else {
            DownJs.dismiss();
            dialogs.alert("脚本获取失败！", "这可能是您的网络原因造成的，建议您检查网络后再重新运行软件吧\nHTTP状态码:" + res_script.statusMessage);
        }
    }
    ui.ScriptNine.click(() => {
        engines.execScript("微博任务自动脚本", "runScriptNine();\n" + runScriptNine.toString());
    });

    function runScriptNine() {
        var DownJs = dialogs.build({
            title: "正在请求脚本中……",
            progress: {
                max: -1
            },
            cancelable: false
        }).show();
        var ScriptNine_Url = getStorageData('APPbasic', 'URLprefix') + "/OrangeJs_%E5%BE%AE%E5%8D%9A%E4%BB%BB%E5%8A%A1%E8%87%AA%E5%8A%A8%E8%84%9A%E6%9C%AC_%E5%BE%AE%E5%8D%9A%E8%84%9A%E6%9C%AC.js"; //第九个脚本网址
        var res_script = http.get(ScriptNine_Url, {
            headers: {
                'Accept-Language': 'en-us,en;q=0.5',
                'User-Agent': 'Mozilla/5.0(Macintosh;IntelMacOSX10_7_0)AppleWebKit/535.11(KHTML,likeGecko)Chrome/17.0.963.56Safari/535.11'
            }
        });
        if (res_script.statusCode == 200) {
            DownJs.dismiss();
            toastLog("脚本获取成功");
            var OrangeJs = res_script.body.string();
            engines.execScript("微博任务自动脚本", OrangeJs);
        } else {
            DownJs.dismiss();
            dialogs.alert("脚本获取失败！", "这可能是您的网络原因造成的，建议您检查网络后再重新运行软件吧\nHTTP状态码:" + res_script.statusMessage);
        }
    }

    ui.ScriptTwe.click(() => {
        engines.execScript("自动健康打卡", "runScriptTwe();\n" + runScriptTwe.toString());
    });

    function runScriptTwe() {
        var DownJs = dialogs.build({
            title: "正在请求脚本中……",
            progress: {
                max: -1
            },
            cancelable: false
        }).show();
        var ScriptTwe_Url = getStorageData('APPbasic', 'URLprefix') + "/OrangeJs_%E8%87%AA%E5%8A%A8%E5%81%A5%E5%BA%B7%E6%89%93%E5%8D%A1_%E5%AE%8C%E7%BE%8E%E6%A0%A1%E5%9B%AD%E8%84%9A%E6%9C%AC.js"; //第十二个脚本网址
        var res_script = http.get(ScriptTwe_Url, {
            headers: {
                'Accept-Language': 'en-us,en;q=0.5',
                'User-Agent': 'Mozilla/5.0(Macintosh;IntelMacOSX10_7_0)AppleWebKit/535.11(KHTML,likeGecko)Chrome/17.0.963.56Safari/535.11'
            }
        });
        if (res_script.statusCode == 200) {
            DownJs.dismiss();
            toastLog("脚本获取成功");
            var OrangeJs = res_script.body.string();
            engines.execScript("自动健康打卡", OrangeJs);
        } else {
            DownJs.dismiss();
            dialogs.alert("脚本获取失败！这可能是您的网络原因造成的，建议您检查网络后再重新运行软件吧\nHTTP状态码:" + res_script.statusMessage);
        }
    }

    ui.ScriptThi.click(() => {
        engines.execScript("自动动态点赞", "runScriptThi();\n" + runScriptThi.toString());
    });

    function runScriptThi() {
        var DownJs = dialogs.build({
            title: "正在请求脚本中……",
            progress: {
                max: -1
            },
            cancelable: false
        }).show();
        var ScriptTwo_Url = getStorageData('APPbasic', 'URLprefix') + "/OrangeJs_%E8%87%AA%E5%8A%A8%E5%8A%A8%E6%80%81%E7%82%B9%E8%B5%9E_QQ%E8%84%9A%E6%9C%AC.js"; //第十三个脚本网址
        var res_script = http.get(ScriptTwo_Url, {
            headers: {
                'Accept-Language': 'en-us,en;q=0.5',
                'User-Agent': 'Mozilla/5.0(Macintosh;IntelMacOSX10_7_0)AppleWebKit/535.11(KHTML,likeGecko)Chrome/17.0.963.56Safari/535.11'
            }
        });
        if (res_script.statusCode == 200) {
            DownJs.dismiss();
            toastLog("脚本获取成功");
            var OrangeJs = res_script.body.string();
            engines.execScript("自动动态点赞", OrangeJs);
        } else {
            DownJs.dismiss();
            dialogs.alert("脚本获取失败！这可能是您的网络原因造成的，建议您检查网络后再重新运行软件吧\nHTTP状态码:" + res_script.statusMessage);
        }
    }

    ui.TalktoDeveloper.click(() => {
        engines.execScript("问题反馈", "\"ui\";TalkToDeveloper();" + TalkToDeveloper.toString());
    });

    function TalkToDeveloper() {
        ui.statusBarColor("#BDBDBD"); //通知栏颜色
        events.removeAllListeners();
        ui.layout(
            <frame w="*" h="*">
                <vertical align="left">
                    <linear orientation="horizontal" align="left" margin="0" >
                        <img src="{{getStorageData('APPbasic', 'URLprefix')}}/OrangeJs-Logo.png" w="40"h="50" padding="8 0 0 0"/>//应用logo
                        <img src="{{getStorageData('APPbasic', 'URLprefix')}}/OrangeJs_logo.png" marginLeft="10" w="105"h="50"/>//黑色logo
                        <text text="问题反馈" textStyle="bold" textSize="20sp" textColor="#000000" padding="10 8 0 0"/>
                        <View bg="#FFFFFF" h="*" w="*"/>//打底卡片颜色1
                    </linear>
                    <progressbar id="progressX" style="@style/Base.Widget.AppCompat.ProgressBar.Horizontal"layout_gravity="top"/>
                    <ScrollView>
                        <webview id="webview"/>
                    </ScrollView>
                    
                </vertical>
                <fab id="Back" w="auto" h="auto" src="@drawable/ic_arrow_back_black_48dp"
                margin="16" layout_gravity="bottom|right" tint="#ffffff" />
            </frame>
        );
        ui.webview.loadUrl("https://wj.qq.com/s2/5238744/d982");
        ui.Back.click(() => {
            clearInterval(JdtX);
            android.webkit.WebStorage.getInstance().deleteAllData(); //清空WebView的localStorage
            ui.finish();
        });
        var JdtX = setInterval(() => {
            var P = ui.webview.getProgress(); //获取进度
            var T = ui.webview.getTitle(); //获取网页标题
            if (P == 100) {
                ui.run(() => {
                    ui.progressX.setVisibility(8);
                });
            } else {
                ui.run(() => {
                    ui.progressX.setVisibility(0);
                    ui.progressX.progress = P;
                });
            };
        }, 100);
    }


    function AboutApp() {
        events.removeAllListeners();
        ui.layout(
            <ScrollView>
                <frame w="*" h="*" background="{{context_framebg}}">
                    <vertical align="center">
                        <img src="{{getStorageData('APPbasic', 'URLprefix')}}/OrangeJs-Logo.png" marginTop="50" w="auto"h="50" gravity="center"/>//应用logo
                        <img src="{{context_Logo}}" w="auto"h="50" gravity="center"/>//黑色logo
                        <card  h="5" marginTop="10" cardCornerRadius="0dp"
                        cardElevation="0dp" gravity="center_vertical">
                        <vertical padding="0 0" h="auto">
                        </vertical>
                        <View bg="#FFEA3324" h="*" w="*"/>//卡片颜色1
                    </card>
                    <text text="软件及脚本开发者" color="{{context_textColor}}" textSize="10" textStyle="normal" marginLeft="5"/>
                    <img src="{{getStorageData('APPbasic', 'URLprefix')}}/authorName.png" layout_gravity="center" w="150" h="30" />//作者名
                    <card  h="5" marginTop="10" cardCornerRadius="0dp"
                    cardElevation="0dp" gravity="center_vertical">
                    <vertical padding="0 0" h="auto">
                    </vertical>
                    <View bg="#FFFF711F" h="*" w="*"/>//卡片颜色1
                </card>
                <text text="软件版本" color="{{context_textColor}}" textSize="10" textStyle="normal" marginLeft="5"/>
                <text id="AppVision" color="{{context_textColor}}" textSize="20" textStyle="normal" gravity="center"/>
                <card  h="5" marginTop="10" cardCornerRadius="0dp"
                cardElevation="0dp" gravity="center_vertical">
                <vertical padding="0 0" h="auto">
                </vertical>
                <View bg="#FFFABB06" h="*" w="*"/>//卡片颜色1
            </card>
            <text text="设备信息" color="{{context_textColor}}" textSize="10" textStyle="normal" marginLeft="5"/>
            <text id="DeviceInformation" color="{{context_textColor}}" textSize="15" textStyle="normal" gravity="center"/>
            
            <card  h="5" marginTop="10" cardCornerRadius="0dp"
            cardElevation="0dp" gravity="center_vertical">
            <vertical padding="0 0" h="auto">
            </vertical>
            <View bg="#FF34A853" h="*" w="*"/>//卡片颜色1
            </card>
            <text text="项目开源地址" color="{{context_textColor}}" textSize="10" textStyle="normal" marginLeft="5"/>
            <text id="OpenSource" autoLink="web" color="{{context_textColor}}" textSize="15" textStyle="normal" gravity="center"/>
            <card  h="5" marginTop="10" cardCornerRadius="0dp"
            cardElevation="0dp" gravity="center_vertical">
            <vertical padding="0 0" h="auto">
            </vertical>
            <View bg="#FF4285F4" h="*" w="*"/>//卡片颜色1
            </card>
            <text id="Ttip"  color="{{context_textColor}}" textSize="15" textStyle="normal" marginTop="5" gravity="center"/>
            <card  h="5" margin="0 10 0 10" cardCornerRadius="0dp"
            cardElevation="0dp" gravity="center_vertical">
            <vertical padding="0 0" h="auto">
            </vertical>
            <View bg="#FF9D41F9" h="*" w="*"/>//卡片颜色1
            </card>
            <button id="TESTcode" text="代码测试台" color="#FFFFFF" bg="#90A4AE" textSize="15" textStyle="normal" margin="5 5 5 200" gravity="center"/>
            </vertical>
            <fab id="Back" w="auto" h="auto" src="@drawable/ic_arrow_back_black_48dp"
            margin="0 0 15 120" layout_gravity="bottom|right" tint="#ffffff" />
            </frame>
            </ScrollView>
        );
        ui.AppVision.text(app.versionName + "(" + app.versionCode + ")");
        ui.OpenSource.text("Github：https://github.com/Orange-shirt/OrangeJs" + "\nGitee：https://gitee.com/Orange_shirt/OrangeJs\nCoding：https://orange-shirt.coding.net/p/OrangeJs/git");
        ui.DeviceInformation.text("设备品牌/型号：" + device.brand + "(" + device.model + ")\n" + "安卓版本：" + device.release + device.baseOS + "\n修订版本号：" + device.buildId + "\n设备分辨率：" + device.height + "*" + device.width);
        ui.Ttip.text("此软件/脚本均为兴趣制作，仅供学习参考交流使用\n请勿将本软件/脚本用于任何商业用途");
        ui.Back.click(() => {
            engines.execScript(mainUi());
        });
        ui.TESTcode.click(() => {
            TESTCode();
        });

        function TESTCode() {
            ui.statusBarColor("#000000"); //通知栏颜色
            ui.layout(
                <vertical bg="#000000">
                    <!-- lines属性用来设置输入框的行数 -->
                    <text text="请输入要运行的代码" textColor="white" textSize="16sp" marginTop="16"/>
                    <input id="x" color="#FFFFFF" lines="20"/>
                    //水平线性布局
                    <linear orientation="horizontal" align="center" margin="5 0 5 0" weightSum="10">
                        <button id="ru" layout_weight="5" h="50" bg="#4CAF50" color="#FFFFFF" marginRight="5" text="运行" gravity="center"/>
                        <button id="qk" layout_weight="5" h="50" bg="#FF5722" color="#FFFFFF" marginLeft="5" text="清空" gravity="center"/>
                    </linear>
                    <button id="con" w="*" h="50" bg="#2196F3" color="#FFFFFF" margin="5 5 5 0" text="打开控制台" gravity="center"/>
                    <text text="* 使用 Auto.js(4.0) 作为脚本引擎" color="#9e9e9e" textSize="10" marginTop="10"gravity="center"/>
                    <fab id="Back" w="auto" h="auto" src="@drawable/ic_arrow_back_black_48dp"
                    margin="10" layout_gravity="bottom|right" tint="#ffffff" />
                </vertical>

            );
            ui.ru.on("click", () => {
                var text = ui.x.getText();
                if (text != "") {
                    engines.execScript("测试运行", text);
                } else {
                    toastLog("没有输入任何代码");
                }
            });
            ui.qk.on("click", () => {
                dialogs.confirm("您确定要清空吗？", "此操作将无法撤销").then(value => {
                    if (value == true) {
                        ui.x.text("");
                        toastLog("已清空");
                    }
                })
            });
            ui.con.on("click", () => {
                threads.start(function() {
                    console.show();
                });
            });
            ui.Back.click(() => {
                AboutApp();
            });
        }
    }


    ui.JoinQQGroup.click(() => {
        engines.execScript("加入QQ群", "JoinQQGroup();\n" + JoinQQGroup.toString());
    });

    function JoinQQGroup() {
        var options = ["使用QQ加群", "使用TIM加群"]
        var i = dialogs.select("请选择", options);
        if (i >= 0) {
            toast("您选择的是" + options[i]);
        } else {
            toastLog("您取消了选择");
            exit();
        }
        if (i == 1) {
            app.startActivity({
                action: "android.intent.action.VIEW",
                packageName: "com.tencent.tim",
                className: "com.tencent.mobileqq.activity.JumpActivity",
                data: app.parseUri("mqqopensdkapi://bizAgent/qm/qr?url=http%3A%2F%2Fqm.qq.com%2Fcgi-bin%2Fqm%2Fqr%3Ffrom%3Dapp%26p%3Dandroid%26k%3Dv5ohaWahdOfqDmyX7L_a196dl3K-SX5_"),
                flags: ["grant_read_uri_permission", "grant_write_uri_permission"],
            });
        } else if (i == 0) {
            app.startActivity({
                action: "android.intent.action.VIEW",
                packageName: "com.tencent.mobileqq",
                className: "com.tencent.mobileqq.activity.JumpActivity",
                data: app.parseUri("mqqopensdkapi://bizAgent/qm/qr?url=http%3A%2F%2Fqm.qq.com%2Fcgi-bin%2Fqm%2Fqr%3Ffrom%3Dapp%26p%3Dandroid%26k%3Dv5ohaWahdOfqDmyX7L_a196dl3K-SX5_"),
                flags: ["grant_read_uri_permission", "grant_write_uri_permission"],
            });
        }
    }


    ui.text.text("权限设置");

    ui.Privacy_Security.click(() => {

    });

    ui.xfc_text.click(() => {
        engines.stopAllAndToast();
    });


    ui.changeColor.click(() => {
        if (context_DayOrNight == 1) {
            context_DayOrNight = 0;
        } else {
            context_DayOrNight = 1;
        }
        engines.execScript(events.removeAllListeners(), mainUi());
    });


    ui.Privacy_Security.click(() => {
        engines.execScript("隐私与安全", "\"ui\";SP();" + SP.toString());
    });

}

function SP() {
    events.removeAllListeners();
    ui.statusBarColor("#2196F3"); //通知栏颜色
    //Not pink色是#DFC8C6
    ui.layout(
        <frame background="#2196F3">//全局背景颜色
            <vertical align="left" paddingTop="5" margin="20 5 20 0">
                <linear orientation="horizontal" align="left" margin="0" paddingTop="0">
                    <img src="{{getStorageData('APPbasic', 'URLprefix')}}/OrangeJs-Logo.png" w="40"h="50"/>//应用logo
                    <img src="{{getStorageData('APPbasic', 'URLprefix')}}/OrangeJs-logoWhite.png" marginLeft="10" w="105"h="50"/>//黑色logo
                </linear>
                <ScrollView>
                    <linear orientation="vertical" align="left" margin="0" paddingTop="0">
                        <text text="隐私与安全（完善中……）" textSize="20" color="#FFFFFF" textStyle="bold" typeface="sans" paddingTop="5"/>
                        <text text="文档日期:2020年1月4日" textSize="15" color="#FFFFFF" textStyle="bold" typeface="sans"/>
                        <text id="Privacy" color="#F5F5F5" textStyle="bold" typeface="sans">
                        </text>
                        <text id="Q0" text="软件需要什么权限？" textSize="15" color="#FFFFFF" textStyle="bold" typeface="sans" paddingTop="5"/>
                        <text id="A0" text="（↑请点击上方问题查看答案）" textSize="15" typeface="sans" color="#FFFFFF"/>
                        <text id="Q1" text="为什么要收集信息？" textSize="15" color="#FFFFFF" textStyle="bold" typeface="sans" paddingTop="5"/>
                        <text id="A1" text="（↑请点击上方问题查看答案）" textSize="15" typeface="sans" color="#FFFFFF"/>
                        <text id="Q2" text="本软件会收集哪些信息？" textSize="15" color="#FFFFFF" textStyle="bold" typeface="sans" paddingTop="5"/>
                        <text id="A2" text="（↑请点击上方问题查看答案）" textSize="15" typeface="sans" color="#FFFFFF"/>
                        
                    </linear>
                </ScrollView>
            </vertical>
            <fab id="back" w="auto" h="auto" src="@drawable/ic_arrow_back_black_48dp"
            margin="16" layout_gravity="bottom|right" tint="#ffffff" />
        </frame>
    );

    ui.Privacy.text("隐私安全事关重大！" +
        "\n因此，在开发本软件、脚本以及各项功能时，我都在考虑该如何合理收集信息以及保持信息安全");
    ui.Q0.click(() => { //软件需要什么权限?
        ui.A0.text("软件的正常运行需要“存储空间”权限！因为本软件/脚本内的设置项目都是以文件方式保存在您手机中的。" +
            "\n\n脚本的运行需要“无障碍权限”来执行各种自动操作，例如:点击，滑动，获取文字等。" +
            "\n\n“悬浮窗权限”是为了显示“停止运行脚本”等需要此权限才能使用的悬浮控件" +
            "\n\n“联网权限”是本软件最重要的权限，软件的所有源码存储在网络，您必须联网获取后才能正常运行。这样的设计是为了方便更新以及提升体验，因此您无需操作即可同步最新代码");

    });
    ui.back.click(() => {
        ui.finish();
    });
    ui.Q1.click(() => { //为什么要收集信息？
        ui.A1.text("");
    });
    ui.Q2.click(() => { //本软件会收集哪些信息?
        ui.A2.text("本软件将收集的信息分为两类，分别为“个人信息（可辨识您身份的信息，如：姓名、性别、电话、QQ、IP地址等）" +
            "”与“非个人信息（除个人信息之外的信息，例如：手机品牌、型号、分辨率、系统版本等）”，但无论是哪种信息本软件都是在必要前提下再进行收集并保存在您的设备中的，收集的所有信息都绝对不会在未经您允许的情况下传播给任何人" +
            "");
    });

}
//保存本地数据
function setStorageData(name, key, value) {
    const storage = storages.create(name);
    storage.put(key, value);
};

//读取本地数据
function getStorageData(name, key) {
    const storage = storages.create(name);
    if (storage.contains(key)) {
        return storage.get(key, "");
    };
    //默认返回undefined
};

//删除本地数据
function delStorageData(name, key) {
    const storage = storages.create(name);
    if (storage.contains(key)) {
        storage.remove(key);
    };
};