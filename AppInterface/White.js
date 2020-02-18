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
    context_Logo = "https://code.aliyun.com/orange_shirt/OrangeJs/raw/master/OrangeJs_logo.png" //黑色logo
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
    context_Logo = "https://code.aliyun.com/orange_shirt/OrangeJs/raw/master/OrangeJs-logoWhite.png" //白色Logo
}
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
                
                <card layout_weight="50" h="40" margin="5 0 5 0" cardCornerRadius="20dp"
                cardElevation="0dp" align="center">
                <vertical padding="10 0" h="auto">
                </vertical>
                <View bg="{{context_FctextBg}}" h="*" w="*"/>//悬浮窗权限中的卡片颜色
                <text id="xfc_text" textStyle="bold" color="{{context_textColor}}" bg="{{context_FctextBg}}" gravity="center" size="15" h="auto"/>
                
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
                //淘宝脚本
                <card h="150" w="300" cardCornerRadius="10dp" cardElevation="2dp" align="left" margin="5 5 5 5">
                    <View bg="#FF5722" h="*" w="*"/>
                    <vertical padding="0 0" h="auto">
                        <linear orientation="horizontal" align="left" margin="0">
                            <img src="https://pp.myapp.com/ma_icon/0/icon_5080_1577343737/256" w="40" h="40" margin="20 20 0 0"/>
                            <vertical padding="0 0" h="auto">
                                <text text="手机淘宝" typeface="sans" textStyle="bold" color="#FFFFFF"  gravity="center" size="20" margin="10 20 0 0"/>
                                <text text="推荐9.4.0版本" typeface="monospace"  color="#FFFFFF"  gravity="center" size="5" margin="10 0 0 0"/>
                            </vertical>
                        </linear>
                        //
                        <linear orientation="horizontal" align="center" margin="0" layout_gravity="left">
                            <card w="200" h="50" cardCornerRadius="5dp" cardElevation="0dp" margin="20 20" >
                                <View w="*" h="*" bg="#FFAB91"/>
                                <text id="ScriptTwo" text="自动集福气" typeface="sans" color="#FFFFFF"  gravity="center" textSize="20" marginTop="0"/>
                            </card>
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
                                <text text="拼多多" typeface="sans" textStyle="bold" color="#FFFFFF"  gravity="center" size="20" margin="10 20 0 0"/>
                                <text text="推荐4.90.0版本" typeface="monospace"  color="#FFFFFF"  gravity="center" size="5" margin="10 0 0 0"/>
                            </vertical>
                        </linear>
                        <linear orientation="horizontal" align="center" margin="0" layout_gravity="left">
                            <card w="200" h="50" cardCornerRadius="5dp" cardElevation="0dp" margin="20 20" >
                                <View w="*" h="*" bg="#90FF1744"/>
                                <text id="ScriptTen" text="多多果园自动脚本" typeface="sans" color="#FFFFFF"  gravity="center" textSize="20" marginTop="0"/>
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
                                <text text="微博" typeface="sans" textStyle="bold" color="#FFFFFF"  gravity="center" size="20" margin="10 20 0 0"/>
                                <text text="推荐9.9.3版本" typeface="monospace"  color="#FFFFFF"  gravity="center" size="5" margin="10 0 0 0"/>
                            </vertical>
                        </linear>
                        <linear orientation="horizontal" align="center" margin="0" layout_gravity="left">
                            <card w="200" h="50" cardCornerRadius="5dp" cardElevation="0dp" margin="20 20" >
                                <View w="*" h="*" bg="#90FF8F00"/>
                                <text id="ScriptNine" text="微博任务自动脚本" typeface="sans" color="#FFFFFF"  gravity="center" size="20" marginTop="0"/>
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
                                <text text="微信" typeface="sans" textStyle="bold" color="#FFFFFF"  gravity="center" size="20" margin="10 20 0 0"/>
                                <text text="推荐7.0.10版本" typeface="monospace"  color="#FFFFFF"  gravity="center" size="5" margin="10 0 0 0"/>
                            </vertical>
                        </linear>
                        <linear orientation="horizontal" align="center" margin="0" layout_gravity="left">
                            <card w="200" h="50" cardCornerRadius="5dp" cardElevation="0dp" margin="20 20" >
                                <View w="*" h="*" bg="#A5D6A7"/>
                                <text id="ScriptOne" text="自动微信发消息" typeface="sans" color="#FFFFFF"  gravity="center" textSize="20" marginTop="0"/>
                            </card>
                        </linear>
                    </vertical>
                </card>
            </linear>
        </Horizo​​ntalScrollView>
        //京东脚本
        <card h="150" cardCornerRadius="10dp" cardElevation="2dp" align="left" margin="5 5 5 5">
            <View bg="#F44336" h="*" w="*"/>
            <vertical padding="0 0" h="auto">
                <linear orientation="horizontal" align="left" margin="0">
                    <img src="https://pp.myapp.com/ma_icon/0/icon_7193_1578290782/256" w="40" h="40" margin="20 20 0 0"/>
                    <vertical padding="0 0" h="auto">
                        <text text="京东" typeface="sans" textStyle="bold" color="#FFFFFF"  gravity="center" size="20" margin="10 20 0 0"/>
                        <text text="推荐8.4.6版本" typeface="monospace"  color="#FFFFFF"  gravity="center" size="5" margin="10 0 0 0"/>
                    </vertical>
                </linear>
                <Horizo​​ntalScrollView>
                    <linear orientation="horizontal" align="center" margin="0" layout_gravity="left">
                        <card w="200" h="50" cardCornerRadius="5dp" cardElevation="0dp" margin="20 20">
                            <View w="*" h="*" bg="#EF9A9A"/>
                            <text id="ScriptSix" text="自动宠汪汪" typeface="sans" color="#FFFFFF"  gravity="center" textSize="20" marginTop="0"/>
                        </card>
                        <card w="200" h="50" cardCornerRadius="5dp" cardElevation="0dp" margin="0 20 20 0">
                            <View w="*" h="*" bg="#EF9A9A"/>
                            <text id="ScriptEight" text="东东农场自动脚本" typeface="sans" color="#FFFFFF"  gravity="center" textSize="20" marginTop="0"/>
                        </card>
                    </linear>
                </Horizo​​ntalScrollView>
            </vertical>
        </card>
        <text text="关注疫情" textStyle="bold" color="{{context_textColor}}" gravity="left" size="15" marginLeft="28"/>
        <card h="1" margin="5 5" cardCornerRadius="1dp"
        cardElevation="0dp" gravity="center_vertical">
        <View bg="#FF832FFD" h="*" w="*"/>//分割线颜色1
        <View bg="#FF4395FB" h="*" marginRight="63"/>//分割线颜色2
        <View bg="#FF32F558" h="*" marginRight="126"/>//分割线颜色3
        <View bg="#FFFCD830" h="*" marginRight="189"/>//分割线颜色4
        <View bg="#FFFE8E2D" h="*" marginRight="252"/>//分割线颜色5
        <View bg="#FFFC3032" h="*" marginRight="315"/>//分割线颜色6
        </card>
        <Horizo​​ntalScrollView>
            <linear orientation="horizontal" align="left" margin="0">
                //实时疫情
                <card h="150" w="300" cardCornerRadius="10dp" cardElevation="5dp" align="left" margin="5 5 5 5">
                    <img id="YQ" src="https://x0.ifengimg.com/ucms/2020_04/83F0FE405D7CD5A09187BE43FD34FBB7316556AA_w750_h300.jpg" scaleType="fitXY"/>
                </card>
                
                //驰援疫情
                <card h="150" w="300" cardCornerRadius="10dp" cardElevation="5dp" align="left" margin="5 5 5 5">
                    <img id="JK" src="https://code.aliyun.com/orange_shirt/OrangeJs/raw/master/PicsArt_01-27-12.26.54.jpg" scaleType="fitXY"/>
                </card>
            </linear>
        </Horizo​​ntalScrollView>
        
        <linear orientation="horizontal" align="center" margin="5 15 5 15" >
            <img src="{{context_SunMoon}}" id="changeColor" w="30" h="30"  tint="{{context_textColor}}" bg="{{context_textBg}}" layout_weight="20" layout_gravity="center"/>
            <text id="Privacy_Security" text="隐私与安全" color="#BDBDBD"  bg="{{context_textBg}}" textSize="13sp" layout_weight="20" layout_gravity="center" />
            <text id="JoinQQGroup" text="加入QQ群" color="#BDBDBD"  bg="{{context_textBg}}" textSize="13sp" layout_weight="20" layout_gravity="center" />
            <text id="TalktoDeveloper" text="反馈问题" color="#BDBDBD"  bg="{{context_textBg}}" textSize="13sp" layout_weight="20" layout_gravity="center" />
            <text id="AboutApp" text="关于软件" color="#BDBDBD"  bg="{{context_textBg}}" textSize="13sp" layout_weight="20" layout_gravity="center"/>
        </linear>
        </vertical>
        </frame>
        </ScrollView>
    );

    ui.autoService.on("check", function(checked) {
        /* // 用户勾选无障碍服务的选项时，跳转到页面让用户去开启
         if (auto.service == null) {
             app.startActivity({
                 action: "android.settings.ACCESSIBILITY_SETTINGS"
             });
         }*/

        if (!checked && auto.service != null) {
            auto.service.disableSelf();
        } else if (auto.service == null) {
            if (checked) {
                engines.execScript("Auto", "auto.waitFor();\ntoastLog('无障碍权限已开启！')");
            }
        }
    });
    // 当用户回到本界面时，resume事件会被触发
    ui.main.on("resume", function() {
        // 此时根据无障碍服务的开启情况，同步开关的状态
        ui.autoService.checked = auto.service != null;
    });
    ui.ScriptOne.click(() => {
        engines.execScript("自动看团课", "runScriptOne();\n" + runScriptOne.toString());
    });
    ui.AboutApp.click(() => {
        engines.execScript(AboutApp());
    });


    function runScriptOne() {
        var DownJs = dialogs.build({
            title: "正在请求脚本中……",
            progress: {
                max: -1
            },
            cancelable: false
        }).show();
        var ScriptOne_Url = "https://code.aliyun.com/orange_shirt/OrangeJs/raw/master/OrangeJs_%E8%87%AA%E5%8A%A8%E5%BE%AE%E4%BF%A1%E5%8F%91%E6%B6%88%E6%81%AF_%E5%BE%AE%E4%BF%A1%E8%84%9A%E6%9C%AC.js"; //第一个脚本网址
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

    ui.ScriptEight.click(() => {
        engines.execScript("东东农场自动脚本", "runScriptEight();\n" + runScriptEight.toString());
    });

    function runScriptEight() {
        var DownJs = dialogs.build({
            title: "正在请求脚本中……",
            progress: {
                max: -1
            },
            cancelable: false
        }).show();
        var ScriptEight_Url = "https://code.aliyun.com/orange_shirt/OrangeJs/raw/master/OrangeJs_%E4%B8%9C%E4%B8%9C%E5%86%9C%E5%9C%BA%E8%87%AA%E5%8A%A8%E8%84%9A%E6%9C%AC_%E4%BA%AC%E4%B8%9C%E8%84%9A%E6%9C%AC.js"; //第八个脚本网址
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
        var ScriptTen_Url = "https://code.aliyun.com/orange_shirt/OrangeJs/raw/master/OrangeJs_%E5%A4%9A%E5%A4%9A%E6%9E%9C%E5%9B%AD%E8%87%AA%E5%8A%A8%E8%84%9A%E6%9C%AC_%E6%8B%BC%E5%A4%9A%E5%A4%9A%E8%84%9A%E6%9C%AC.js"; //第十个脚本网址
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

    ui.ScriptSix.click(() => {
        engines.execScript("自动宠汪汪", "runScriptSix();\n" + runScriptSix.toString());
    });


    function runScriptSix() {
        var DownJs = dialogs.build({
            title: "正在请求脚本中……",
            progress: {
                max: -1
            },
            cancelable: false
        }).show();
        var ScriptSix_Url = "https://code.aliyun.com/orange_shirt/OrangeJs/raw/master/OrangeJs_%E8%87%AA%E5%8A%A8%E5%AE%A0%E6%B1%AA%E6%B1%AA_%E4%BA%AC%E4%B8%9C%E8%84%9A%E6%9C%AC.js"; //第六个脚本网址
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
        var ScriptNine_Url = "https://code.aliyun.com/orange_shirt/OrangeJs/raw/master/OrangeJs_%E5%BE%AE%E5%8D%9A%E4%BB%BB%E5%8A%A1%E8%87%AA%E5%8A%A8%E8%84%9A%E6%9C%AC_%E5%BE%AE%E5%8D%9A%E8%84%9A%E6%9C%AC.js"; //第九个脚本网址
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

    ui.ScriptTwo.click(() => {
        engines.execScript("自动集福气", "runScriptTwo();\n" + runScriptTwo.toString());
    });

    function runScriptTwo() {
        var DownJs = dialogs.build({
            title: "正在请求脚本中……",
            progress: {
                max: -1
            },
            cancelable: false
        }).show();
        var ScriptTwo_Url = "https://code.aliyun.com/orange_shirt/OrangeJs/raw/master/OrangeJs_%E8%87%AA%E5%8A%A8%E9%9B%86%E7%A6%8F%E6%B0%94"; //第二个脚本网址
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
            engines.execScript("自动集福气", OrangeJs);
        } else {
            DownJs.dismiss();
            dialogs.alert("脚本获取失败！这可能是您的网络原因造成的，建议您检查网络后再重新运行软件吧\nHTTP状态码:" + res_script.statusMessage);
        }
    }

    ui.TalktoDeveloper.click(() => {
        engines.execScript(TalkToDeveloper());
    });

    function TalkToDeveloper() {
        events.removeAllListeners();
        ui.layout(
            <frame w="*" h="*">
                <vertical align="left">
                    <linear orientation="horizontal" align="left" margin="0" >
                        <img src="https://code.aliyun.com/orange_shirt/OrangeJs/raw/master/OrangeJs-Logo.png" w="40"h="50" padding="8 0 0 0"/>//应用logo
                        <img src="https://code.aliyun.com/orange_shirt/OrangeJs/raw/master/OrangeJs_logo.png" marginLeft="10" w="105"h="50"/>//黑色logo
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
            engines.execScript(mainUi());
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

    ui.YQ.click(() => {
        engines.execScript(YQ());
    });

    function YQ() {
        events.removeAllListeners();
        ui.layout(
            <frame w="*" h="*">
                <vertical align="left">
                    <linear orientation="horizontal" align="left" margin="0" >
                        <img src="https://code.aliyun.com/orange_shirt/OrangeJs/raw/master/OrangeJs-Logo.png" w="40"h="50" padding="8 0 0 0"/>//应用logo
                        <img src="https://code.aliyun.com/orange_shirt/OrangeJs/raw/master/OrangeJs_logo.png" marginLeft="10" w="105"h="50"/>//黑色logo
                        <text text="疫情动态" textStyle="bold" textSize="20sp" textColor="#000000" padding="10 8 0 0"/>
                        <View bg="#FFFFFF" h="*" w="*"/>//打底卡片颜色1
                    </linear>
                    <progressbar id="progress" style="@style/Base.Widget.AppCompat.ProgressBar.Horizontal"layout_gravity="top"/>
                    <ScrollView>
                        <webview id="webview"/>
                    </ScrollView>
                    
                </vertical>
                <fab id="Back" w="auto" h="auto" src="@drawable/ic_arrow_back_black_48dp"
                margin="16" layout_gravity="bottom|right" tint="#ffffff" />
            </frame>
        );
        ui.webview.loadUrl("https://news.ifeng.com/c/special/7tPlDSzDgVk");
        ui.Back.click(() => {
            clearInterval(Jdt);
            engines.execScript(mainUi());
        });

        var Jdt = setInterval(() => {
            var P = ui.webview.getProgress(); //获取进度
            var T = ui.webview.getTitle(); //获取网页标题
            if (P == 100) {
                ui.run(() => {
                    ui.progress.setVisibility(8);
                });
            } else {
                ui.run(() => {
                    ui.progress.setVisibility(0);
                    ui.progress.progress = P;
                });
            };
        }, 100);
    }

    ui.JK.click(() => {
        engines.execScript("向武汉市慈善总会捐款", "JK();\n" + JK.toString());
    });

    function JK() {
        var JKs = dialogs.confirm("向武汉市慈善总会捐款\n为武汉加油！", "根据武汉市慈善总会公开的信息，武汉市慈善总会现接受社会捐款且支持支付宝转账\n武汉市慈善总会官方支付宝账户为\nWuhancishan@sina.com\n\n在您点击确定后您将跳转浏览器页面，请在浏览器打开之后若出现“打开支付宝”请点击后将会跳转支付界面，支付时根据武汉市慈善总会官方要求请备注“疫情防控捐款”\n\n在您点击确定后脚本会自动设置剪切板为捐款备注文字（请在捐款时粘贴）并跳转浏览器");
        if (JKs == true) {
            setClip("疫情防控捐款");
            toastLog("请在浏览器中打开");
            app.openUrl("https://ds.alipay.com/?from=mobilecodec&scheme=alipays%3A%2F%2Fplatformapi%2Fstartapp%3FsaId%3D10000007%26clientVersion%3D3.7.0.0718%26qrcode%3Dhttps%253A%252F%252Fqr.alipay.com%252Fap7zk606x2ul8gb1d4%253F_s%253Dweb-other");
        }
    }

    function AboutApp() {
        events.removeAllListeners();
        ui.layout(
            <ScrollView>
                <frame w="*" h="*" background="{{context_framebg}}">
                    <vertical align="center">
                        <img src="https://code.aliyun.com/orange_shirt/OrangeJs/raw/master/OrangeJs-Logo.png" marginTop="50" w="auto"h="50" gravity="center"/>//应用logo
                        <img src="{{context_Logo}}" w="auto"h="50" gravity="center"/>//黑色logo
                        <card  h="5" marginTop="10" cardCornerRadius="0dp"
                        cardElevation="0dp" gravity="center_vertical">
                        <vertical padding="0 0" h="auto">
                        </vertical>
                        <View bg="#FFEA3324" h="*" w="*"/>//卡片颜色1
                    </card>
                    <text text="软件及脚本开发者" color="{{context_textColor}}" textSize="10" textStyle="normal" marginLeft="5"/>
                    <img src="https://code.aliyun.com/orange_shirt/OrangeJs/raw/master/authorName.png" layout_gravity="center" w="150" h="30" />//作者名
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
            <card  h="5" margin="0 10 0 100" cardCornerRadius="0dp"
            cardElevation="0dp" gravity="center_vertical">
            <vertical padding="0 0" h="auto">
            </vertical>
            <View bg="#FF9D41F9" h="*" w="*"/>//卡片颜色1
            </card>
            
            </vertical>
            <fab id="Back" w="auto" h="auto" src="@drawable/ic_arrow_back_black_48dp"
            margin="16" layout_gravity="bottom|right" tint="#ffffff" />
            </frame>
            </ScrollView>
        );
        ui.AppVision.text(app.versionName + "(" + app.versionCode + ")");
        ui.OpenSource.text("Github：https://github.com/Orange-shirt/OrangeJs" + "\n阿里云Code：\nhttps://code.aliyun.com/orange_shirt/OrangeJs");
        ui.DeviceInformation.text("设备品牌/型号：" + device.brand + "(" + device.model + ")\n" + "安卓版本：" + device.release + device.baseOS + "\n修订版本号：" + device.buildId + "\n设备分辨率：" + device.height + "*" + device.width);
        ui.Ttip.text("此软件/脚本均为兴趣制作，仅供学习参考交流使用\n请勿将本软件/脚本用于任何商业用途");
        ui.Back.click(() => {
            engines.execScript(mainUi());
        });
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

    ui.xfc_text.text("停止全部脚本");

    ui.Privacy_Security.click(() => {

    });

    ui.xfc_text.click(() => {
        engines.stopAllAndToast();
    });


    ui.changeColor.click(() => { //更换主题(仅可更换10次)
        if (context_DayOrNight == 1) {
            context_DayOrNight = 0;
        } else {
            context_DayOrNight = 1;
        }
        engines.execScript(events.removeAllListeners(), mainUi());
    });


    ui.Privacy_Security.click(() => {
        engines.execScript(SP());
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
                    <img src="https://code.aliyun.com/orange_shirt/OrangeJs/raw/master/OrangeJs-Logo.png" w="40"h="50"/>//应用logo
                    <img src="https://code.aliyun.com/orange_shirt/OrangeJs/raw/master/OrangeJs-logoWhite.png" marginLeft="10" w="105"h="50"/>//黑色logo
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
        engines.execScript(mainUi());
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