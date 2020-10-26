"ui";
importClass(android.content.Intent);
importClass(android.net.Uri);
importClass(java.io.File);
context_DayOrNight = 1;
activity.window.addFlags(android.view.WindowManager.LayoutParams.FLAG_TRANSLUCENT_STATUS);
context_LogomarginTop = "0"

function enableAbs() {
    importClass(android.content.Context);
    importClass(android.provider.Settings);
    var packageName = context.getPackageName();
    var absPermittedByshell = false;
    try {
        var enabledServices = Settings.Secure.getString(context.getContentResolver(), Settings.Secure.ENABLED_ACCESSIBILITY_SERVICES);
        log('当前已启用的辅助服务\n', enabledServices);
        if (enabledServices.indexOf(packageName) >= 0 && auto.service != null) {
            log("已经开启无障碍服务，无需重复开启");
        } else {
            var Services = enabledServices + ":" + packageName + "/com.stardust.autojs.core.accessibility.AccessibilityService";
            Settings.Secure.putString(context.getContentResolver(), Settings.Secure.ENABLED_ACCESSIBILITY_SERVICES, Services);
            Settings.Secure.putString(context.getContentResolver(), Settings.Secure.ACCESSIBILITY_ENABLED, '1');
            log("成功开启无障碍服务");
        }
        return true
    } catch (error) {
        if (absPermittedByshell == false && shell("pm grant " + packageName + " android.permission.WRITE_SECURE_SETTINGS", true).code == 0) {
            log("已成功使用shell开启无障碍服务授权");
            absPermittedByshell = true;
            return this.enableAbs()
        } else {
            if (absPermittedByshell == true) {
                log("shell开启授权成功，但仍然无法顺利开启无障碍服务，请手动开启！");
                return false;
            } else {
                log("使用shell开启授权失败");
                return false
            }
        }
        log("使用Shell开启无障碍失败，错误:" + error);
    }
}

function clacAspectRatio(fromWidth, fromHeight, toWidthOrHeight, isWidth) {
    if (isWidth == true) {
        return fromHeight * (toWidthOrHeight / fromWidth);
    } else {
        return fromWidth * (toWidthOrHeight / fromHeight);
    }
}

function setDayMode() {
    context_framebg = "#FFFFFF" //全局背景
    context_textColor = "#000000" //文字颜色
    context_textBg = "#FAFAFA" //文字背景
    context_Fgx = "#EEEEEE" //分割线颜色
    context_TBbgColor = "FF5722" //淘宝背景颜色
    context_PDDbgColor = "FF1744" //拼多多背景颜色
    context_WBbgColor = "FF8F00" //微博背景颜色
    context_WXbgColor = "4CAF50" //微信背景颜色
    context_QQbgColor = "2196F3" //QQ背景颜色
    context_JDbgColor = "F44336" //京东背景颜色
    context_WMbgColor = "FD7034" //完美校园背景颜色
    context_JBScolor = "FAFAFA"
    context_SettingsCard = "#F5F5F5" //设置卡片颜色
    context_LogomarginTop = getStorageData("DayUi", "LogomarginTop");
    context_SunMoon = "@drawable/ic_wb_sunny_black_48dp"; //☀️
    context_Logo = getStorageData('APPbasic', 'URLprefix') + "/OrangeJs_logo.png";
    context_TopPics = getStorageData("DayUiPicture", "TopPics");
    context_TopPics_Copyright = getStorageData("DayUiPicture", "TopPicsCopyright");
    context_BottomPics = getStorageData("DayUiPicture", "BottomPics");
    context_BottomPics_Copyright = getStorageData("DayUiPicture", "BottomPicsCopyright");
    if (context_TopPics == undefined) {
        context_TopPics = "http://www.google.com";
    }
    if (context_BottomPics == undefined) {
        context_BottomPics = "http://www.google.com"
    }
    if (context_TopPics.search("file://") == 0 && images.read(context_TopPics.replace("file://", "")) != null) {
        let img = images.read(context_TopPics.replace("file://", ""));
        imgWidth = img.getWidth();
        imgHeight = img.getHeight();
        context_TopPics_width = device.width;
        context_TopPics_height = Math.round(clacAspectRatio(imgWidth, imgHeight, context_TopPics_width, true));
    } else {
        context_TopPics_width = 0;
        context_TopPics_height = 0;
    }
    if (context_BottomPics.search("file://") == 0 && images.read(context_BottomPics.replace("file://", "")) != null) {
        let img = images.read(context_BottomPics.replace("file://", ""));
        imgWidth = img.getWidth();
        imgHeight = img.getHeight();
        context_BottomPics_width = device.width;
        context_BottomPics_height = Math.round(clacAspectRatio(imgWidth, imgHeight, context_BottomPics_width, true));
    } else {
        context_BottomPics_width = 0;
        context_BottomPics_height = 0;
    }
}

function setNightMode() {
    context_framebg = "#000000"; //全局背景
    context_textColor = "#FFFFFF" //文字颜色
    context_textBg = "#000000" //文字背景
    context_Fgx = "#50EEEEEE" //分割线颜色
    context_TBbgColor = "000000" //淘宝背景颜色
    context_PDDbgColor = "000000" //拼多多背景颜色
    context_WBbgColor = "000000" //微博背景颜色
    context_WXbgColor = "000000" //微信背景颜色
    context_QQbgColor = "000000" //QQ背景颜色
    context_JDbgColor = "000000" //京东背景颜色
    context_WMbgColor = "000000" //完美校园背景颜色
    context_JBScolor = "000000"
    context_SettingsCard = "#616161"
    context_LogomarginTop = getStorageData("NightUi", "LogomarginTop");
    context_SunMoon = "@drawable/ic_brightness_2_black_48dp" //🌙
    context_Logo = getStorageData('APPbasic', 'URLprefix') + "/OrangeJs-logoWhite.png" //白色Logo
    context_TopPics = getStorageData("NightUiPicture", "TopPics");
    context_TopPics_Copyright = getStorageData("NightUiPicture", "TopPicsCopyright");
    context_BottomPics = getStorageData("NightUiPicture", "BottomPics");
    context_BottomPics_Copyright = getStorageData("NightUiPicture", "BottomPicsCopyright");;
    if (context_TopPics == undefined) {
        context_TopPics = "http://www.google.com";
    }
    if (context_BottomPics == undefined) {
        context_BottomPics = "http://www.google.com"
    }
    if (context_TopPics.search("file://") == 0 && images.read(context_TopPics.replace("file://", "")) != null) {
        let img = images.read(context_TopPics.replace("file://", ""));
        imgWidth = img.getWidth();
        imgHeight = img.getHeight();
        context_TopPics_width = device.width;
        context_TopPics_height = Math.round(clacAspectRatio(imgWidth, imgHeight, context_TopPics_width, true));
    } else {
        context_TopPics_width = 0;
        context_TopPics_height = 0;
    }
    if (context_BottomPics.search("file://") == 0 && images.read(context_BottomPics.replace("file://", "")) != null) {
        let img = images.read(context_BottomPics.replace("file://", ""));
        imgWidth = img.getWidth();
        imgHeight = img.getHeight();
        context_BottomPics_width = device.width;
        context_BottomPics_height = Math.round(clacAspectRatio(imgWidth, imgHeight, context_BottomPics_width, true));
    } else {
        context_BottomPics_width = 0;
        context_BottomPics_height = 0;
    }
}

function WhatNowColor() {
    if (getStorageData("DayNightSetting", "AutoDayNight") != undefined) {
        var NightTime = getStorageData("DayNightSetting", "NightTime");
        var DayTime = getStorageData("DayNightSetting", "DayTime");
        var myDate = new Date();
        if (Number(NightTime) > Number(DayTime) && myDate.getHours() >= Number(NightTime) || Number(NightTime) > Number(DayTime) && myDate.getHours() < Number(DayTime) || Number(NightTime) < Number(DayTime) && myDate.getHours() >= Number(NightTime) && myDate.getHours() < Number(DayTime)) {
            return 0;
        } else {
            return 1;
        }
    }
}
if (WhatNowColor() != context_DayOrNight && getStorageData("DayNightSetting", "AutoDayNight") != undefined) {
    if (WhatNowColor() == 1) {
        context_DayOrNight = 1;
        setDayMode();
    } else {
        context_DayOrNight = 0;
        setNightMode();
    }
}

function md5(string) {
    return java.math.BigInteger(1, java.security.MessageDigest.getInstance("MD5")
        .digest(java.lang.String(string).getBytes())).toString(4 * 4);
}
ui.emitter.on("back_pressed", e => {
    try {
        clearInterval(contextJdtX);
    } catch (e) {}
    if (context_NowUi != "SignUp" && context_NowUi != "mainUi") {
        mainUi();
        e.consumed = true;
    } else if (getStorageData("uiProtectSetting", "UiProtect") != undefined) {
        let view = ui.inflate(
            <vertical bg="{{context_framebg}}">
                        <linear orientation="horizontal" align="left" margin="0" paddingTop="0">
                            <img src="@drawable/ic_lock_outline_black_48dp" w="20" h="20" margin="18 10 2 0" tint="{{context_textColor}}" gravity="left"/>
                            <text text="UI界面锁定" textSize="15" textStyle="bold" margin="0 10 0 0" textColor="{{context_textColor}}"/>
                        </linear>
                        <text id="tip" textSize="10" margin="20 5 10 10" textColor="{{context_textColor}}"/>
                    </vertical>, null, false);
        view.tip.setText("• 如需保留界面和后台脚本，请点按Home键或直接切换到其它应用中\n• 若当前无定时任务且需要强制关闭界面，请点击“管理运行脚本”");
        dialogs.build({
            customView: view,
            wrapInScrollView: false,
            autoDismiss: false
        }).show();
        e.consumed = true;
    }
});

ui.emitter.on("resume", function() {
    if (WhatNowColor() == 1 && WhatNowColor() != context_DayOrNight) {
        context_DayOrNight = 1;
        setDayMode();
        refreshUI();
    } else if (WhatNowColor() == 0 && WhatNowColor() != context_DayOrNight) {
        context_DayOrNight = 0;
        setNightMode();
        refreshUI();
    }

    function refreshUI() {
        if (context_NowUi == "mainUi") {
            mainUi();
        } else if (context_NowUi == "SettingsUI") {
            SettingsUI();
        } else if (context_NowUi == "AboutApp") {
            AboutApp();
        } else if (context_NowUi == "SP") {
            SP();
        } else if (context_NowUi == "TalkToDeveloper") {
            TalkToDeveloper();
        } else if (context_NowUi == "SignUp") {
            SignUp();
        }
    }
    try {
        ui.autoService.checked = auto.service != null;
    } catch (e) {}
});
if (getStorageData("SignUp", "SignKey") != undefined &&
    md5(getStorageData("SignUp", "SignKey")) == "109e1be70ecf784109576e7a5df1750a") {
    mainUi();
} else {
    if (context_DayOrNight == 1) {
        setDayMode();
    } else {
        setNightMode();
    }
    SignUp();
}

function mainUi() {
    context_NowUi = "mainUi";
    if (WhatNowColor() != context_DayOrNight && getStorageData("DayNightSetting", "AutoDayNight") != undefined) {
        if (WhatNowColor() == 1) {
            context_DayOrNight = 1;
            setDayMode();
        } else {
            setNightMode();
            context_DayOrNight = 0;
        }
    }
    if (context_DayOrNight == 1) {
        setDayMode();
    } else {
        setNightMode();
    }

    function Color(color) {
        return android.graphics.Color.parseColor(color);
    }

    function GradientDrawable(orientation, color) {
        var colors = [];
        color.forEach(color => colors.push(Color(color)));
        return new android.graphics.drawable.GradientDrawable(android.graphics.drawable.GradientDrawable.Orientation[orientation], colors);
    }
    ui.layout(
        <scroll bg="{{context_framebg}}">
            <frame id="main" background="{{context_framebg}}">
                <vertical align="center" margin="0">
                    <card w="{{context_TopPics_width}}px" h="{{context_TopPics_height}}px" cardElevation="0dp" gravity="center_vertical">
                        <img id="Pics" src="{{context_TopPics}}"  scaleType="fitXY"/>
                        <text id="CopyrightTop" textColor="{{context_textColor}}" textSize="5" gravity="bottom|right" margin="2 0 5 2" padding="0 0 0 0"/>
                    </card>
                    <img id="UiLogo" src="{{context_Logo}}" h="30" marginTop="{{context_LogomarginTop}}" marginBottom="10"/>
                    <linear orientation="horizontal" align="left">
                        <HorizontalScrollView>
                            <linear orientation="horizontal" align="left" h="70" padding="0 10">
                                <card w="150dp" h="50" marginLeft="2"  cardCornerRadius="25dp" cardElevation="0dp" gravity="center_vertical" cardBackgroundColor="{{context_textColor}}" alpha="0.7">
                                    <card h="40" w="*" margin="5 0 5 0" cardCornerRadius="20dp" cardElevation="0dp" align="center" cardBackgroundColor="{{context_framebg}}">
                                        <Switch id="autoService" margin="7 0" text="无障碍服务" textColor="{{context_textColor}}" gravity="center" textStyle="bold" checked="{{auto.service != null}}" textSize="12sp"/>
                                    </card>
                                </card>
                                <card w="150dp" h="50" marginLeft="2" cardCornerRadius="25dp" cardElevation="0dp" gravity="center" cardBackgroundColor="{{context_textColor}}" alpha="0.7">
                                    <card id="StopAllScript" w="*" h="40" margin="5 0 5 0" cardCornerRadius="20dp" cardElevation="0dp" align="center" cardBackgroundColor="{{context_framebg}}" foreground="?selectableItemBackground">
                                        <text text="管理运行脚本" textStyle="bold" color="{{context_textColor}}" gravity="center" size="12"/>
                                    </card>
                                </card>
                                <card w="150dp" h="50" marginLeft="2" cardCornerRadius="25dp" cardElevation="0dp" gravity="center" cardBackgroundColor="{{context_textColor}}" alpha="0.7">
                                    <card id="ViewLog" w="*" h="40" margin="5 0 5 0" cardCornerRadius="20dp" cardElevation="0dp" align="center" cardBackgroundColor="{{context_framebg}}" foreground="?selectableItemBackground" clickable="true">
                                        <text text="查看运行日志" textStyle="bold" color="{{context_textColor}}" gravity="center" size="12"/>
                                    </card>
                                </card>
                                <card w="150dp" h="50" marginLeft="2" cardCornerRadius="25dp" cardElevation="0dp" gravity="center" cardBackgroundColor="{{context_textColor}}" alpha="0.7">
                                    <card id="RefreshUI" w="*" h="40" margin="5 0 5 0" cardCornerRadius="20dp" cardElevation="0dp" align="center" cardBackgroundColor="{{context_framebg}}" foreground="?selectableItemBackground" clickable="true">
                                        <text text="重启刷新界面" textStyle="bold" color="{{context_textColor}}" gravity="center" size="12"/>
                                    </card>
                                </card>
                                <card w="150dp" h="50" marginLeft="2" cardCornerRadius="25dp" cardElevation="0dp" gravity="center" cardBackgroundColor="{{context_textColor}}" alpha="0.7">
                                    <card id="Settings" w="*" h="40" margin="5 0 5 0" cardCornerRadius="20dp" cardElevation="0dp" align="center" cardBackgroundColor="{{context_framebg}}" foreground="?selectableItemBackground" clickable="true">
                                        <text text="脚本设置" textStyle="bold" color="{{context_textColor}}" gravity="center" size="12"/>
                                    </card>
                                </card>
                            </linear>
                        </HorizontalScrollView>
                    </linear>
                    <card h="1" margin="5 5" cardCornerRadius="1dp" cardElevation="0dp" gravity="center_vertical" cardBackgroundColor="{{context_Fgx}}"/>
                    <linear orientation="horizontal" align="left" margin="0 5 0 0">
                        <card layout_weight="50" h="120" cardCornerRadius="10dp" cardElevation="0dp" align="left" margin="5 0 3 5">
                            <View id="Taobaobg" bg="#{{context_TBbgColor}}" h="*" w="*"/>
                            <linear orientation="horizontal" align="center" margin="0" layout_gravity="left">
                                <img src="https://pp.myapp.com/ma_icon/0/icon_5080_1587958433/96" w="20"  h="20" margin="20 23 0 0"/>
                                <text text="手机淘宝" typeface="sans" textStyle="bold" color="#FFFFFF"  gravity="center" size="15" margin="5 23 0 0"/>
                            </linear>
                            <card w="*" h="40" cardCornerRadius="5dp" cardElevation="0dp" margin="20 20 20 0" gravity="center" layout_gravity="center">
                                <View w="*" h="*" bg="#90{{context_TBbgColor}}"/>
                                <text id="ScriptTwo" text="星秀猫喵币++" typeface="sans" color="#FFFFFF"  gravity="center" textSize="15" marginTop="0" bg="?attr/selectableItemBackground" clickable="true"/>
                            </card>
                        </card>
                        <card id="R_JD" layout_weight="50" h="120" cardCornerRadius="10dp" cardElevation="2dp" align="left" margin="5 0 3 5" foreground="?selectableItemBackground">
                            <View id="Jingdongbg" bg="#{{context_JDbgColor}}" h="*" w="*"/>
                            <linear orientation="horizontal" align="left" margin="0">
                                <img src="https://app.jd.com/uploads/client-1.png" w="30" h="26" margin="15 18 0 0"/>
                                <vertical padding="0 0" h="auto">
                                    <text text="京东" typeface="sans" textStyle="bold" color="#FFFFFF"  gravity="center" size="15" margin="0 23 0 0"/>
                                </vertical>
                            </linear>
                            <card w="*" h="40" cardCornerRadius="5dp" cardElevation="0dp" margin="20 20 20 0" gravity="center" layout_gravity="center">
                                <View bg="#90{{context_JDbgColor}}"/>
                                <spinner id="sp_Jd1" entries="全民营业自动脚本|种豆得豆自动脚本|自动宠汪汪" textColor="#FFFFFF" align="center" marginLeft="10" textSize="15" gravity="center"/>
                            </card>
                        </card>
                    </linear>
                    <linear orientation="horizontal" align="left" margin="0">
                        <card h="120" layout_weight="50" cardCornerRadius="10dp" cardElevation="2dp" align="left" margin="5 0 3 5">
                            <View id="Weibobg" bg="#{{context_WBbgColor}}" h="*" w="*"/>
                            <linear orientation="horizontal" align="left" margin="0">
                                <img src="https://pp.myapp.com/ma_icon/0/icon_9926_1588143998/96" w="20" h="20" margin="20 23 0 0"/>
                                <vertical padding="0 0" h="auto">
                                    <text text="微博" typeface="sans" textStyle="bold" color="#FFFFFF"  gravity="center" size="15" margin="5 23 0 0"/>
                                </vertical>
                            </linear>
                            <card w="*" h="40" cardCornerRadius="5dp" cardElevation="0dp" margin="20 20 20 0" gravity="center" layout_gravity="center">
                                <View w="*" h="*" bg="#90{{context_WBbgColor}}"/>
                                <text id="ScriptNine" text="微博任务自动脚本" typeface="sans" color="#FFFFFF"  gravity="center" size="15" marginTop="0" bg="?attr/selectableItemBackground" clickable="true"/>
                            </card>
                        </card>
                        <card h="120" layout_weight="50" cardCornerRadius="10dp" cardElevation="2dp" align="left" margin="3 0 5 5">
                            <View id="Weixinbg" bg="#{{context_WXbgColor}}" h="*" w="*"/>
                            <linear orientation="horizontal" align="left" margin="0">
                                <img src="http://pp.myapp.com/ma_icon/0/icon_10910_1577346809/256" w="20" h="20" margin="20 23 0 0"/>
                                <vertical padding="0 0" h="auto">
                                    <text text="微信" typeface="sans" textStyle="bold" color="#FFFFFF"  gravity="center" size="15" margin="5 23 0 0"/>
                                </vertical>
                            </linear>
                            <card w="*" h="40" cardCornerRadius="5dp" cardElevation="0dp" margin="20 20 20 0" gravity="center" layout_gravity="center">
                                <View w="*" h="*" bg="#90{{context_WXbgColor}}"/>
                                <text id="ScriptOne" text="自动微信发消息" typeface="sans" color="#FFFFFF"  gravity="center" textSize="15" marginTop="0" bg="?attr/selectableItemBackground" clickable="true"/>
                            </card>
                        </card>
                    </linear>
                    <linear orientation="horizontal" align="left" margin="0" weightSum="100">
                        <card layout_weight="50" h="120" cardCornerRadius="10dp" cardElevation="2dp" align="left" margin="5 0 5 10">
                            <View id="QQbg" bg="#{{context_QQbgColor}}" h="*" w="*"/>
                            <linear orientation="horizontal" align="left" margin="0">
                                <img src="http://pp.myapp.com/ma_icon/0/icon_6633_1584375640/256" w="20" h="20" margin="20 23 0 0"/>
                                <text text="QQ" typeface="sans" textStyle="bold" color="#FFFFFF"  gravity="center" size="15" margin="5 23 0 0"/>
                            </linear>
                            <card w="*" h="40" cardCornerRadius="5dp" cardElevation="0dp" margin="20 20 20 0" gravity="center" layout_gravity="center">
                                <View w="*" h="*" bg="#90{{context_QQbgColor}}"/>
                                <text id="ScriptThi" text="自动动态点赞" typeface="sans" color="#FFFFFF"  gravity="center" textSize="15" marginTop="0" bg="?attr/selectableItemBackground" clickable="true"/>
                            </card>
                        </card>
                    </linear>
                    <card h="1" margin="5 0" cardCornerRadius="1dp" cardElevation="0dp" gravity="center_vertical" cardBackgroundColor="{{context_Fgx}}"/>
                    
                    <linear orientation="horizontal" gravity="center" margin="5 15 5 15" >
                        <img src="{{context_SunMoon}}" id="changeColor" w="30" h="30"  tint="{{context_textColor}}" layout_weight="20" gravity="center" foreground="?attr/selectableItemBackground" clickable="true"/>
                        <text id="Privacy_Security" text="隐私与安全" color="#BDBDBD" textSize="13sp" layout_weight="20" gravity="center" bg="?attr/selectableItemBackground" clickable="true"/>
                        <text id="JoinQQGroup" text="加入QQ群" color="#BDBDBD" textSize="13sp" layout_weight="20" gravity="center" bg="?attr/selectableItemBackground" clickable="true"/>
                        <text id="TalktoDeveloper" text="反馈问题" color="#BDBDBD" textSize="13sp" layout_weight="20" gravity="center" bg="?attr/selectableItemBackground" clickable="true"/>
                        <text id="AboutApp" text="关于软件" color="#BDBDBD" textSize="13sp" layout_weight="20" gravity="center" bg="?attr/selectableItemBackground" clickable="true"/>
                    </linear>
                    <card w="{{context_BottomPics_width}}px" h="{{context_BottomPics_height}}px" cardElevation="0dp" gravity="center_vertical" cardBackgroundColor="{{context_SettingsCard}}">
                        <img src="{{context_BottomPics}}"  scaleType="fitXY"/>
                        <text id="CopyrightBottom" textColor="{{context_textColor}}" textSize="5" gravity="bottom|right" margin="2 0 0 20" padding="0 0 0 0"/>
                    </card>
                </vertical>
            </frame>
        </scroll>
    );
    if (getStorageData("mainUi", "NewWay") == undefined) {
        let view = ui.inflate(
            <vertical bg="{{context_framebg}}">
                <linear orientation="horizontal" align="left" margin="10" paddingTop="0">
                    <img src="@drawable/ic_fiber_new_black_48dp" w="20" h="20" tint="#3EC3FE" layout_gravity="center"/>
                    <text text="新的操作方式" textStyle="bold" textSize="15" textColor="#3EC3FE" layout_gravity="center"/>
                    <linear orientation="horizontal" w="match_parent" gravity="right||center">
                        <img id="ExitScript" src="@drawable/ic_clear_black_48dp" w="35" h="35" tint="#000000" foreground="?attr/selectableItemBackground" clickable="true"/>
                    </linear>
                </linear>
                <linear gravity="center">
                    <img src="https://gitee.com/Orange_shirt/OrangeJs/raw/master/OtherRes/%E6%96%B0%E7%9A%84%E6%93%8D%E4%BD%9C%E6%96%B9%E5%BC%8F.jpg" scaleType="fitXY" w="300" h="200" gravity="center"/>
                </linear>
            </vertical>, null, false);
        view.ExitScript.click(() => {
            DHK.dismiss();
        });
        let DHK = dialogs.build({
            customView: view,
            wrapInScrollView: false,
            cancelable: false,
            autoDismiss: true
        }).show();
        setStorageData("mainUi", "NewWay", "true");
    }
    if (context_TopPics != "http://www.google.com" && context_TopPics_Copyright != undefined) {
        ui.CopyrightTop.setText(context_TopPics_Copyright);
    }
    if (context_BottomPics != "http://www.google.com" && context_BottomPics_Copyright != undefined) {
        ui.CopyrightBottom.setText(context_BottomPics_Copyright);
    }
    if (getStorageData("ColorSetting", "GradientColor") != undefined) {
        ui.Taobaobg.backgroundDrawable = GradientDrawable("TL_BR", ["#50" + context_JBScolor, "#" + context_TBbgColor, "#" + context_TBbgColor, "#" + context_TBbgColor]);
        //ui.Pddbg.backgroundDrawable = GradientDrawable("TL_BR", ["#50" + context_JBScolor, "#" + context_PDDbgColor, "#" + context_PDDbgColor, "#" + context_PDDbgColor]);
        ui.Weibobg.backgroundDrawable = GradientDrawable("TL_BR", ["#50" + context_JBScolor, "#" + context_WBbgColor, "#" + context_WBbgColor, "#" + context_WBbgColor]);
        ui.Weixinbg.backgroundDrawable = GradientDrawable("TL_BR", ["#50" + context_JBScolor, "#" + context_WXbgColor, "#" + context_WXbgColor, "#" + context_WXbgColor]);
        ui.QQbg.backgroundDrawable = GradientDrawable("TL_BR", ["#50" + context_JBScolor, "#" + context_QQbgColor, "#" + context_QQbgColor, "#" + context_QQbgColor, "#" + context_QQbgColor]);
        ui.Jingdongbg.backgroundDrawable = GradientDrawable("TL_BR", ["#50" + context_JBScolor, "#" + context_JDbgColor, "#" + context_JDbgColor, "#" + context_JDbgColor]);
    }
    ui.UiLogo.click(() => {
        let view = ui.inflate(
            <vertical padding="25 0" bg="{{context_framebg}}">
                        <linear orientation="horizontal" align="left" margin="0" paddingTop="0">
                            <img src="@drawable/ic_unfold_more_black_48dp" h="30" marginTop="3" tint="{{context_textColor}}" layout_gravity="center"/>
                            <text text="上间距调整" textSize="15" textStyle="bold" margin="0 5 10 0" textColor="{{context_textColor}}" layout_gravity="center"/>
                        </linear>
                        <text id="nJj" textSize="10" margin="10 5 10 5" textColor="{{context_textColor}}"/>
                        <input id="TopMargin" hint="请输入10～100的数字" inputType="number" textColor="{{context_textColor}}" textColorHint="#9E9E9E"/>
                        <linear orientation="horizontal" align="left" margin="0" paddingTop="0">
                            <card layout_weight="50" h="30" cardCornerRadius="5dp" cardElevation="0dp" gravity="center_vertical" margin="5"cardBackgroundColor="#F44336">
                                <text id="Determine" text="取消" textStyle="bold" textColor="#FFFFFF" gravity="center" textSize="12sp" foreground="?attr/selectableItemBackground" clickable="true"/>
                            </card>
                            <card layout_weight="50" h="30" cardCornerRadius="5dp" cardElevation="0dp" gravity="center_vertical" margin="5"cardBackgroundColor="#4CAF50">
                                <text id="cancel" text="确定" textStyle="bold" textColor="#FFFFFF" gravity="center" textSize="12sp" foreground="?attr/selectableItemBackground" clickable="true"/>
                            </card>
                        </linear>
                    </vertical>, null, false);
        if (context_DayOrNight == 1) {
            view.nJj.setText("当前上间距为：" + getStorageData("DayUi", "LogomarginTop"));
        } else {
            view.nJj.setText("当前上间距为：" + getStorageData("NightUi", "LogomarginTop"));
        }
        view.Determine.click(() => {
            DHK.dismiss();
        });
        view.cancel.click(() => {
            let a = view.TopMargin.getText();
            if (Number(a) > 100) {
                view.TopMargin.setError("数值不能大于100");
            } else if (Number(a) < 10) {
                view.TopMargin.setError("数值不能小于10");
            } else {
                if (context_DayOrNight == 0 || context_DayOrNight == "0") {
                    setStorageData("NightUi", "LogomarginTop", a.toString());
                } else if (context_DayOrNight == 1 || context_DayOrNight == "1") {
                    setStorageData("DayUi", "LogomarginTop", a.toString());
                }
                DHK.dismiss();
                mainUi();
                let view = ui.inflate(
                    <vertical padding="25 0" bg="{{context_framebg}}">
                                        <img src="@drawable/ic_check_circle_black_48dp" size="20" margin="5" gravity="center"tint="{{context_textColor}}"/>
                                        <text id="tio" textStyle="bold" textSize="15" margin="10" textColor="#777777" gravity="center"/>
                                    </vertical>
                );
                view.tio.setText("上间距已调整为" + a.toString() + "\n如未变化请刷新界面");
                dialogs.build({
                    customView: view,
                    wrapInScrollView: false,
                    autoDismiss: false
                }).show();
            }
        });
        var DHK = dialogs.build({
            customView: view,
            wrapInScrollView: false,
            autoDismiss: false
        }).show();
    });

    ui.autoService.on("check", function(checked) {
        if (checked && auto.service == null) {
            var absPermittedByshell = false;
            try {
                var en = enableAbs();
            } catch (e) {
                log(e);
                var en = false;
            }
            if (en != true) {
                app.startActivity({
                    action: "android.settings.ACCESSIBILITY_SETTINGS"
                });
            }
        }
        if (!checked && auto.service != null) {
            let view = ui.inflate(
                <vertical padding="25 0" bg="{{context_framebg}}">
                            <linear orientation="horizontal" align="left" margin="0" paddingTop="0">
                                <img src="@drawable/ic_warning_black_48dp" h="20" marginTop="3" tint="#F44336" layout_gravity="center"/>
                                <text text="您确定要关闭“无障碍服务”吗？" textSize="15" textStyle="bold" margin="0 5 10 0" textColor="#F44336"/>
                            </linear>
                            <text text="本软件内的所有脚本均需要“无障碍服务”，若您关闭“无障碍服务”，本软件内的所有脚本都将立即无法工作，请确认" textStyle="bold" textSize="10" margin="10 5 10 5" textColor="#D32F2F"/>
                            <linear orientation="horizontal" align="left" margin="0" paddingTop="0">
                                <card layout_weight="50" h="40" cardCornerRadius="5dp" cardElevation="0dp" gravity="center_vertical" margin="5"cardBackgroundColor="#F44336">
                                    <text id="Determine" text="确认关闭" textStyle="bold" textColor="#FFFFFF" gravity="center" textSize="12sp" foreground="?attr/selectableItemBackground" clickable="true"/>
                                </card>
                                <card layout_weight="50" h="40" cardCornerRadius="5dp" cardElevation="0dp" gravity="center_vertical" margin="5"cardBackgroundColor="#4CAF50">
                                    <text id="cancel" text="保持开启" textStyle="bold" textColor="#FFFFFF" gravity="center" textSize="12sp" foreground="?attr/selectableItemBackground" clickable="true"/>
                                </card>
                            </linear>
                        </vertical>, null, false);
            view.cancel.click(() => {
                ui.autoService.setChecked(true);
                DHK.dismiss();
            });
            view.Determine.click(() => {
                auto.service.disableSelf();
                DHK.dismiss();
            });
            var DHK = dialogs.build({
                customView: view,
                wrapInScrollView: false,
                autoDismiss: false,
                cancelable: false
            }).show();
        }
    });

    function RunScript(ScriptUrl, ScriptName, AppPackageName) {
        if (app.getAppName(AppPackageName) != null && auto.service != null) {
            threads.start(function() {
                let view = ui.inflate(
                    <vertical padding="25 0" bg="{{context_framebg}}">
                                <text id="scriptText" textSize="15" margin="10 5 10 5" textColor="{{context_textColor}}"/>
                                <text id="Network" textSize="10" margin="10 0 10 0" textColor="{{context_textColor}}" alpha="0.9"/>
                                <text id="tips" textSize="8" margin="10 5 10 0" textColor="{{context_textColor}}" alpha="0.9"/>
                                <progressbar indeterminate="true" style="@style/Base.Widget.AppCompat.ProgressBar.Horizontal"/>
                            </vertical>, null, false);
                view.scriptText.setText("正在请求“" + ScriptName + "”");
                let sometips = ["每次请求到的脚本都是最新的哦，懒到不用更新爽吧？🤪", "世界上最遥远的距离是“没网”，而最尴尬的事情是“网慢”🙃", "开发者很佛系的，若您有任何问题记得及时提交反馈哈～😃", "撸码可是很辛苦的内～有时候要有耐心哦😬", "偶尔去看看日志也许会有新发现呢～🤓", "人类的本质是……“🕊？”", "告诉你个小秘密，这条线最多只能坚持20秒……🙈", "哦～我亲爱的上帝～快来带走我所有的BUG吧～😇", "写代码能当饭吃的话还是挺不错的😋", "喝着Orange Juice用着Orange Js，嗯…很Nice！😗"]
                view.tips.setText("tips:" + sometips[random(0, sometips.length - 1)]);
                contextDownJs = dialogs.build({
                    customView: view,
                    wrapInScrollView: false,
                    autoDismiss: false,
                    cancelable: false
                }).show();
                try {
                    view.Network.setText("当前网络状态为：" + MyNetworkInformation());
                    var res_script = http.get(ScriptUrl, {
                        headers: {
                            'Accept-Language': 'en-us,en;q=0.5',
                            'User-Agent': 'Mozilla/5.0(Macintosh;IntelMacOSX10_7_0)AppleWebKit/535.11(KHTML,likeGecko)Chrome/17.0.963.56Safari/535.11'
                        }
                    });

                    if (res_script.statusCode == 200) {
                        try {
                            view.scriptText.setText("“" + ScriptName + "”" + "请求成功");
                            contextDownJs.dismiss();
                        } catch (e) {
                            log(e);
                        }
                        var OrangeJs = res_script.body.string();
                        let sharevalue = 'context_framebg="' + context_framebg + '";context_textColor="' + context_textColor + '";context_DayOrNight="' + context_DayOrNight + '";context_SettingsCard="' + context_SettingsCard + '";context_Logo="' + context_Logo + '";';
                        engines.execScript(ScriptName, sharevalue + OrangeJs);
                        exit();
                    } else {
                        contextDownJs.dismiss();
                        let view = ui.inflate(
                            <vertical padding="25 0" bg="{{context_framebg}}">
                                        <linear orientation="horizontal" gravity="left" marginTop="10">
                                            <img src="@drawable/ic_warning_black_48dp" tint="{{context_textColor}}" h="27"/>
                                            <text id="Statuscode" textStyle="bold" textSize="20" textColor="{{context_textColor}}"/>
                                        </linear>
                                        <text id="tip" textStyle="bold" textSize="15" margin="10 5 10 5" textColor="{{context_textColor}}"/>
                                        <text id="tips" textSize="10" margin="10 0 40 10" textColor="{{context_textColor}}" alpha="0.9"/>
                                    </vertical>, null, false);
                        view.tip.setText("“" + ScriptName + "”" + "请求错误！");
                        view.tips.setText("这可能是一个严重的服务器端的错误，请先检查您的网络配置是否正确，若多次出现此错误请联系开发者。");
                        view.Statuscode.setText(res_script.statusMessage + res_script.statusCode);
                        dialogs.build({
                            customView: view,
                            wrapInScrollView: false,
                            autoDismiss: false
                        }).show();
                        exit();
                    }
                } catch (e) {
                    contextDownJs.dismiss();
                    let views = ui.inflate(
                        <vertical padding="25 0" bg="{{context_framebg}}">
                                    <linear orientation="horizontal" gravity="left" marginTop="10">
                                        <img src="@drawable/ic_warning_black_48dp" tint="{{context_textColor}}" h="27"/>
                                        <text id="Statuscode" textStyle="bold" textSize="20" textColor="{{context_textColor}}"/>
                                    </linear>
                                    <text id="tip" textStyle="bold" textSize="15" margin="10 5 10 5" textColor="{{context_textColor}}"/>
                                    <text id="tips" textSize="10" margin="10 0 50 10" textColor="{{context_textColor}}"/>
                                </vertical>, null, false);
                    views.tip.setText("无法请求“" + ScriptName + "”");
                    views.tips.setText("请检查您当前的网络连接可用性，连接可用网络并授予本软件联网权限后再尝试重新运行。\n\n错误代码：" + e);
                    views.Statuscode.setText("无可用网络");
                    dialogs.build({
                        customView: views,
                        wrapInScrollView: false,
                        autoDismiss: false
                    }).show();
                    exit();
                }
            });
            setTimeout(function() {
                contextDownJs.dismiss();
                let views = ui.inflate(
                    <vertical padding="25 0" bg="{{context_framebg}}">
                                <linear orientation="horizontal" gravity="left" marginTop="10">
                                    <img src="@drawable/ic_warning_black_48dp" tint="{{context_textColor}}" h="27"/>
                                </linear>
                                <text id="tip" textStyle="bold" textSize="15" margin="10 5 10 5" textColor="{{context_textColor}}"/>
                                <text id="tips" textSize="10" margin="10 0 50 10" textColor="{{context_textColor}}"/>
                            </vertical>, null, false);
                views.tip.setText("“" + ScriptName + "”请求超时");
                views.tips.setText("请检查您当前的网络连接可用性，连接可用网络并授予本软件联网权限并保障网络通畅后可再尝试运行。");
                dialogs.build({
                    customView: views,
                    wrapInScrollView: false,
                    autoDismiss: false
                }).show();
                exit();
            }, 20000);
        } else if (app.getAppName(AppPackageName) == null) {
            let viewss = ui.inflate(
                <vertical padding="25 0" bg="{{context_framebg}}">
                    <linear orientation="horizontal" gravity="left" marginTop="10">
                        <img src="@drawable/ic_warning_black_48dp" tint="{{context_textColor}}" h="27"/>
                        <text id="Statuscode" textStyle="bold" textSize="20" textColor="{{context_textColor}}"/>
                    </linear>
                    <text id="tip" textStyle="bold" textSize="15" margin="10 5 10 5" textColor="{{context_textColor}}"/>
                    <text id="tips" textSize="10" margin="10 0 50 10" textColor="{{context_textColor}}"/>
                </vertical>, null, false);
            viewss.tip.setText("“" + ScriptName + "”" + "：未安装支持的APP");
            dialogs.build({
                customView: viewss,
                wrapInScrollView: false,
                autoDismiss: false
            }).show();
        } else {
            let views = ui.inflate(
                <vertical padding="25 0" bg="{{context_framebg}}">
                    <linear orientation="horizontal" gravity="left" marginTop="10">
                        <img src="@drawable/ic_warning_black_48dp" tint="{{context_textColor}}" h="27"/>
                    </linear>
                    <text id="tip" textStyle="bold" textSize="15" margin="10 5 10 5" textColor="{{context_textColor}}"/>
                    <text id="tips" textSize="10" margin="10 0 50 10" textColor="{{context_textColor}}"/>
                </vertical>, null, false);
            views.tip.setText("请开启无障碍权限");
            views.tips.setText("很抱歉，脚本运行必须使用“无障碍服务”，请在您的设备上自行授予“Orange Js橘衫の脚本”软件“无障碍权限”，之后可再次尝试运行脚本");
            dialogs.build({
                customView: views,
                wrapInScrollView: false,
                autoDismiss: false
            }).show();
        }

        function MyNetworkInformation() {
            importClass(android.net.ConnectivityManager);
            mConnectivityManager = context.getSystemService(context.CONNECTIVITY_SERVICE);
            netInfo = mConnectivityManager.getActiveNetworkInfo();
            if (netInfo != null && netInfo.isAvailable()) {
                name = netInfo.getTypeName();
                if (netInfo.getType() == ConnectivityManager.TYPE_WIFI) {
                    return "WIFI网络";
                } else if (netInfo.getType() == ConnectivityManager.TYPE_ETHERNET) {
                    return "有线网络";
                } else if (netInfo.getType() == ConnectivityManager.TYPE_MOBILE) {
                    return "移动网络";
                }
            } else {
                return "网络断开";
            }
        }
    }

    ui.Settings.click(() => {
        SettingsUI();
    });
    ui.AboutApp.click(() => {
        AboutApp();
    });
    ui.RefreshUI.click(() => {
        ui.finish();
        engines.execScript("重启刷新界面", "RefreshMainUI();\n" + RefreshMainUI.toString());

        function RefreshMainUI() {
            app.startActivity({
                action: "android.intent.action.VIEW",
                packageName: "com.orange.orangejs",
                className: "com.stardust.auojs.inrt.SplashActivity"
            });
        }
    });
    ui.ScriptOne.click(() => {
        let Url = getStorageData('APPbasic', 'URLprefix') + "/OrangeJs_%E8%87%AA%E5%8A%A8%E5%BE%AE%E4%BF%A1%E5%8F%91%E6%B6%88%E6%81%AF_%E5%BE%AE%E4%BF%A1%E8%84%9A%E6%9C%AC.js";
        let str = 'RunScript("' + Url + '","自动微信发消息","com.tencent.mm")';
        let sharevalue = 'context_framebg="' + context_framebg + '";context_textColor="' + context_textColor + '";context_DayOrNight="' + context_DayOrNight + '";context_SettingsCard="' + context_SettingsCard + '";context_Logo="' + context_Logo + '";';
        engines.execScript("请求脚本", "" + sharevalue + str + ";\n" + RunScript.toString());
    });

    ui.R_JD.click(() => {
        /*if (ui.sp_Jd1.getSelectedItemPosition() == 2) {
            let Url = getStorageData('APPbasic', 'URLprefix') + "/OrangeJs_%E4%B8%9C%E4%B8%9C%E5%86%9C%E5%9C%BA%E8%87%AA%E5%8A%A8%E8%84%9A%E6%9C%AC_%E4%BA%AC%E4%B8%9C%E8%84%9A%E6%9C%AC.js";
            let str = 'RunScript("' + Url + '","东东农场自动脚本","com.jingdong.app.mall")';
            let sharevalue = 'context_framebg="' + context_framebg + '";context_textColor="' + context_textColor + '";context_DayOrNight="' + context_DayOrNight + '";context_SettingsCard="'+context_SettingsCard+'";context_Logo="'+context_Logo+'";';
                engines.execScript("请求脚本", "" + sharevalue + str + ";\n" + RunScript.toString());
        } else */
        if (ui.sp_Jd1.getSelectedItemPosition() == 2) {
            let Url = getStorageData('APPbasic', 'URLprefix') + "/OrangeJs_%E8%87%AA%E5%8A%A8%E5%AE%A0%E6%B1%AA%E6%B1%AA_%E4%BA%AC%E4%B8%9C%E8%84%9A%E6%9C%AC.js";
            let str = 'RunScript("' + Url + '","自动宠汪汪","com.jingdong.app.mall")';
            let sharevalue = 'context_framebg="' + context_framebg + '";context_textColor="' + context_textColor + '";context_DayOrNight="' + context_DayOrNight + '";context_SettingsCard="' + context_SettingsCard + '";context_Logo="' + context_Logo + '";';
            engines.execScript("请求脚本", "" + sharevalue + str + ";\n" + RunScript.toString());
        } else if (ui.sp_Jd1.getSelectedItemPosition() == 1) {
            let Url = getStorageData('APPbasic', 'URLprefix') + "/OrangeJs_%E7%A7%8D%E8%B1%86%E5%BE%97%E8%B1%86%E8%87%AA%E5%8A%A8%E8%84%9A%E6%9C%AC_%E4%BA%AC%E4%B8%9C%E8%84%9A%E6%9C%AC.js";
            let str = 'RunScript("' + Url + '","种豆得豆自动脚本","com.jingdong.app.mall")';
            let sharevalue = 'context_framebg="' + context_framebg + '";context_textColor="' + context_textColor + '";context_DayOrNight="' + context_DayOrNight + '";context_SettingsCard="' + context_SettingsCard + '";context_Logo="' + context_Logo + '";';
            engines.execScript("请求脚本", "" + sharevalue + str + ";\n" + RunScript.toString());
        } else if (ui.sp_Jd1.getSelectedItemPosition() == 0) {
            let Url = getStorageData('APPbasic', 'URLprefix') + "/OrangeJs_%E5%85%A8%E6%B0%91%E8%90%A5%E4%B8%9A%E8%87%AA%E5%8A%A8%E8%84%9A%E6%9C%AC_%E4%BA%AC%E4%B8%9C%E8%84%9A%E6%9C%AC.js";
            let str = 'RunScript("' + Url + '","全民营业自动脚本","com.jingdong.app.mall")';
            let sharevalue = 'context_framebg="' + context_framebg + '";context_textColor="' + context_textColor + '";context_DayOrNight="' + context_DayOrNight + '";context_SettingsCard="' + context_SettingsCard + '";context_Logo="' + context_Logo + '";';
            engines.execScript("请求脚本", "" + sharevalue + str + ";\n" + RunScript.toString());
        }
    });

    /*ui.ScriptTen.click(() => {
        let Url = getStorageData('APPbasic', 'URLprefix') + "/OrangeJs_%E5%A4%9A%E5%A4%9A%E6%9E%9C%E5%9B%AD%E8%87%AA%E5%8A%A8%E8%84%9A%E6%9C%AC_%E6%8B%BC%E5%A4%9A%E5%A4%9A%E8%84%9A%E6%9C%AC.js";
        let str = 'RunScript("' + Url + '","多多果园自动脚本","com.xunmeng.pinduoduo")';
        let sharevalue = 'context_framebg="' + context_framebg + '";context_textColor="' + context_textColor + '";context_DayOrNight="' + context_DayOrNight + '";context_SettingsCard="'+context_SettingsCard+'";context_Logo="'+context_Logo+'";';
            engines.execScript("请求脚本", "" + sharevalue + str + ";\n" + RunScript.toString());
    });*/
    ui.ScriptNine.click(() => {
        let Url = getStorageData('APPbasic', 'URLprefix') + "/OrangeJs_%E5%BE%AE%E5%8D%9A%E4%BB%BB%E5%8A%A1%E8%87%AA%E5%8A%A8%E8%84%9A%E6%9C%AC_%E5%BE%AE%E5%8D%9A%E8%84%9A%E6%9C%AC.js";
        let str = 'RunScript("' + Url + '","微博任务自动脚本","com.sina.weibo")';
        let sharevalue = 'context_framebg="' + context_framebg + '";context_textColor="' + context_textColor + '";context_DayOrNight="' + context_DayOrNight + '";context_SettingsCard="' + context_SettingsCard + '";context_Logo="' + context_Logo + '";';
        engines.execScript("请求脚本", "" + sharevalue + str + ";\n" + RunScript.toString());
    });

    ui.ScriptTwo.click(() => {
        let Url = getStorageData('APPbasic', 'URLprefix') + "/OrangeJs_%E6%98%9F%E7%A7%80%E7%8C%AB%E5%96%B5%E5%B8%81%2B%2B_%E6%B7%98%E5%AE%9D%E8%84%9A%E6%9C%AC.js";
        let str = 'RunScript("' + Url + '","星秀猫喵币++","com.taobao.taobao")';
        let sharevalue = 'context_framebg="' + context_framebg + '";context_textColor="' + context_textColor + '";context_DayOrNight="' + context_DayOrNight + '";context_SettingsCard="' + context_SettingsCard + '";context_Logo="' + context_Logo + '";';
        engines.execScript("请求脚本", "" + sharevalue + str + ";\n" + RunScript.toString());
    });

    ui.ScriptThi.click(() => {
        let Url = getStorageData('APPbasic', 'URLprefix') + "/OrangeJs_%E8%87%AA%E5%8A%A8%E5%8A%A8%E6%80%81%E7%82%B9%E8%B5%9E_QQ%E8%84%9A%E6%9C%AC.js";
        let str = 'RunScript("' + Url + '","自动动态点赞","com.tencent.mobileqq")';
        let sharevalue = 'context_framebg="' + context_framebg + '";context_textColor="' + context_textColor + '";context_DayOrNight="' + context_DayOrNight + '";context_SettingsCard="' + context_SettingsCard + '";context_Logo="' + context_Logo + '";';
        engines.execScript("请求脚本", "" + sharevalue + str + ";\n" + RunScript.toString());
    });

    ui.TalktoDeveloper.click(() => {
        TalkToDeveloper();
    });

    ui.JoinQQGroup.click(() => {
        let view = ui.inflate(
            <vertical padding="25 0" bg="{{context_framebg}}">
                        <linear orientation="horizontal" align="left" margin="0" paddingTop="0">
                            <img src="@drawable/ic_supervisor_account_black_48dp" h="20" marginTop="3" tint="#777777" layout_gravity="center"/>
                            <text text="加入QQ群" textSize="15" textStyle="bold" margin="0 5 10 0" textColor="#777777"/>
                        </linear>
                        <text text="请选择加群方式，期待与您一起愉快的玩耍:D" textSize="10" margin="10 5 10 5" textColor="#777777"/>
                        <linear orientation="horizontal" align="left" margin="0" paddingTop="0">
                            <card layout_weight="50" h="40" cardCornerRadius="5dp" cardElevation="0dp" gravity="center_vertical" margin="5"cardBackgroundColor="{{context_SettingsCard}}">
                                <text id="Determine" text="使用QQ加群" textStyle="bold" textColor="{{context_textColor}}" gravity="center" textSize="12sp" foreground="?attr/selectableItemBackground" clickable="true"/>
                            </card>
                            <card layout_weight="50" h="40" cardCornerRadius="5dp" cardElevation="0dp" gravity="center_vertical" margin="5"cardBackgroundColor="{{context_SettingsCard}}">
                                <text id="cancel" text="使用TIM加群" textStyle="bold" textColor="{{context_textColor}}" gravity="center" textSize="12sp" foreground="?attr/selectableItemBackground" clickable="true"/>
                            </card>
                        </linear>
                    </vertical>, null, false);
        view.cancel.click(() => {
            DHK.dismiss();
            try {
                app.startActivity({
                    action: "android.intent.action.VIEW",
                    packageName: "com.tencent.tim",
                    className: "com.tencent.mobileqq.activity.JumpActivity",
                    data: app.parseUri("mqqopensdkapi://bizAgent/qm/qr?url=http%3A%2F%2Fqm.qq.com%2Fcgi-bin%2Fqm%2Fqr%3Ffrom%3Dapp%26p%3Dandroid%26k%3Dv5ohaWahdOfqDmyX7L_a196dl3K-SX5_"),
                    flags: ["grant_read_uri_permission", "grant_write_uri_permission"],
                });
            } catch (e) {
                let view = ui.inflate(
                    <vertical padding="25 0" bg="{{context_framebg}}">
                                        <text text="当前设备未安装TIM" textStyle="bold" textSize="15" margin="10" textColor="#777777" gravity="center"/>
                                    </vertical>
                );
                dialogs.build({
                    customView: view,
                    wrapInScrollView: false,
                    autoDismiss: false
                }).show();
            }
        });
        view.Determine.click(() => {
            DHK.dismiss();
            try {
                app.startActivity({
                    action: "android.intent.action.VIEW",
                    packageName: "com.tencent.mobileqq",
                    className: "com.tencent.mobileqq.activity.JumpActivity",
                    data: app.parseUri("mqqopensdkapi://bizAgent/qm/qr?url=http%3A%2F%2Fqm.qq.com%2Fcgi-bin%2Fqm%2Fqr%3Ffrom%3Dapp%26p%3Dandroid%26k%3Dv5ohaWahdOfqDmyX7L_a196dl3K-SX5_"),
                    flags: ["grant_read_uri_permission", "grant_write_uri_permission"],
                });
            } catch (e) {
                let view = ui.inflate(
                    <vertical padding="25 0" bg="{{context_framebg}}">
                                        <text text="当前设备未安装QQ" textStyle="bold" textSize="15" margin="10" textColor="#777777" gravity="center"/>
                                    </vertical>
                );
                dialogs.build({
                    customView: view,
                    wrapInScrollView: false,
                    autoDismiss: false
                }).show();
            }
        });
        var DHK = dialogs.build({
            customView: view,
            wrapInScrollView: false,
            autoDismiss: false
        }).show();
    });

    ui.StopAllScript.click(() => {
        controlScript();

        function controlScript() {
            function stopscript(scriptId) {
                let execution = engines.all();
                for (var i = 0; i < execution.length; i++) {
                    if (scriptId == execution[i].getId()) {
                        execution[i].forceStop();
                        return true;
                    }
                }
            }
            let DHK = ui.inflate(
                <frame background="{{context_framebg}}" padding="5">
                            <scroll bg="{{context_framebg}}">
                                <vertical bg="{{context_framebg}}">
                                    <linear orientation="horizontal" gravity="left||center">
                                        <img src="{{getStorageData('APPbasic', 'URLprefix')}}/OrangeJs-Logo.png" w="30" h="30" margin="5 0"/>
                                        <img src="{{context_Logo}}" w="85" h="35"/>
                                        <linear orientation="horizontal" w="match_parent" gravity="right||center">
                                            <text text="管理运行脚本" textStyle="bold" textSize="20" textColor="{{context_textColor}}" marginRight="5"/>
                                        </linear>
                                    </linear>
                                    <View bg="{{context_SettingsCard}}" w="*" h="1" margin="5"/>
                                    <list id="alljslist">
                                        <card w="*" h="50" cardCornerRadius="10dp" cardElevation="0dp" gravity="center_vertical" margin="5" cardBackgroundColor="{{context_SettingsCard}}">
                                            <linear orientation="horizontal" gravity="center|left">
                                                <img id="checkthisjs" src="{{icon}}" w="30" h="30" tint="{{context_textColor}}" marginLeft="5"/>
                                                <text id="TAG" textSize="16sp" gravity="left||center" textColor="#FF9800" text="{{tag}}"/>
                                                <text id="ID" textSize="16sp" gravity="left||center" textColor="#4CAF50" text="[{{Id}}]"/>
                                                <text id="name" textSize="16sp" gravity="left||center" textColor="{{context_textColor}}" text="{{name}}"/>
                                            </linear>
                                            <linear gravity="center||right" marginRight="20">
                                                <img id="deleteItem" src="@drawable/ic_clear_black_48dp" w="35" h="35" tint="{{context_textColor}}" foreground="?attr/selectableItemBackground" clickable="true"/>
                                            </linear>
                                        </card>
                                    </list>
                                    <text text="已经到底啦" textSize="10" textColor="{{context_textColor}}" margin="5 5 5 100" alpha="0.5" gravity="bottom||center"/>
                                </vertical>
                            </scroll>
                            <card w="*" h="50" cardCornerRadius="10dp" cardElevation="0dp" layout_gravity="bottom" margin="5" cardBackgroundColor="{{context_SettingsCard}}">
                                <linear orientation="horizontal" gravity="center|left">
                                    <img id="checkAll" src="@drawable/ic_panorama_fish_eye_black_48dp" w="30" h="30" tint="{{context_textColor}}" marginLeft="5"/>
                                    <text id="checkAllText" textSize="16sp" gravity="left||center" textColor="{{context_textColor}}" text="全选"/>
                                </linear>
                                <linear gravity="center||right" marginRight="20">
                                    <card id="finaldel" h="0" cardCornerRadius="5dp" gravity="center_vertical" cardBackgroundColor="#000000" foreground="?attr/selectableItemBackground" clickable="true">
                                        <text text="强行停止" textColor="{{context_textColor}}" textSize="16sp" gravity="center" margin="10 0"/>
                                    </card>
                                </linear>
                            </card>
                        </frame>, null, false);
            let ControlDHK = dialogs.build({
                customView: DHK,
                wrapInScrollView: false,
                autoDismiss: false
            }).show();
            DHK.finaldel.click(() => {
                let view = ui.inflate(
                    <vertical padding="25 0" bg="{{context_framebg}}">
                                        <linear orientation="horizontal" align="left" margin="0" paddingTop="0">
                                            <img src="@drawable/ic_warning_black_48dp" h="20" marginTop="3" tint="#F44336" layout_gravity="center"/>
                                            <text id="deleteTitle" textSize="15" textStyle="bold" margin="0 5 10 0" textColor="#F44336"/>
                                        </linear>
                                        <text id="deleteTips" textStyle="bold" textSize="10" margin="10 5 10 5" textColor="#D32F2F"/>
                                        <linear orientation="horizontal" align="left" margin="0" paddingTop="0">
                                            <card layout_weight="50" h="40" cardCornerRadius="5dp" cardElevation="0dp" gravity="center_vertical" margin="5"cardBackgroundColor="#F44336">
                                                <text id="Determine" text="确认停止" textStyle="bold" textColor="#FFFFFF" gravity="center" textSize="12sp" foreground="?attr/selectableItemBackground" clickable="true"/>
                                            </card>
                                            <card layout_weight="50" h="40" cardCornerRadius="5dp" cardElevation="0dp" gravity="center_vertical" margin="5"cardBackgroundColor="#4CAF50">
                                                <text id="cancel" text="取消停止" textStyle="bold" textColor="#FFFFFF" gravity="center" textSize="12sp" foreground="?attr/selectableItemBackground" clickable="true"/>
                                            </card>
                                        </linear>
                                    </vertical>, null, false);
                view.deleteTitle.setText("您确定要强行停止以下" + context_ListDeletejs.length + "个脚本吗？");
                var waitdel = [];
                for (let i = 0; i < context_ListDeletejs.length; i++) {
                    waitdel.push("[" + context_ListDeletejs[i].Id + "]" + context_ListDeletejs[i].name);
                }
                view.deleteTips.setText("本次将强行停止的脚本：\n“" + waitdel + "”\n\n* 强行停止脚本可能会造成数据丢失等意外情况，请确认无误后再进行操作");
                view.cancel.click(() => {
                    DHK.dismiss();
                });
                view.Determine.click(() => {
                    let deleteWrong = [];
                    for (let i = 0; i < context_ListDeletejs.length; i++) {
                        if (stopscript(context_ListDeletejs[i].Id) != true) {
                            deleteWrong.push("[" + context_ListDeletejs[i].Id + "]" + context_ListDeletejs[i].name);
                        }
                    }
                    if (deleteWrong.length == 0) {
                        DHK.dismiss();
                        let views = ui.inflate(
                            <vertical padding="25 0" bg="{{context_framebg}}">
                                                        <img src="@drawable/ic_check_circle_black_48dp" size="20" margin="5" gravity="center"tint="{{context_textColor}}"/>
                                                        <text id="deleteDone" textStyle="bold" textSize="15" margin="10" textColor="{{context_textColor}}" gravity="center"/>
                                                        <text id="deleteDonetips" textSize="10" margin="5" textColor="{{context_textColor}}" gravity="center"/>
                                                    </vertical>
                        );
                        views.deleteDone.setText("已强行停止" + context_ListDeletejs.length + "个脚本");
                        deleteAlready = [];
                        for (let i = 0; i < context_ListDeletejs.length; i++) {
                            deleteAlready.push("[" + context_ListDeletejs[i].Id + "]" + context_ListDeletejs[i].name);
                        }
                        views.deleteDonetips.setText("已被强行停止的脚本：\n“" + deleteAlready + "”");
                        dialogs.build({
                            customView: views,
                            wrapInScrollView: false,
                            autoDismiss: true
                        }).show();
                    } else {
                        DHK.dismiss();
                        let views = ui.inflate(
                            <vertical padding="25 0" bg="{{context_framebg}}">
                                                        <img src="@drawable/ic_cancel_black_48dp" size="20" margin="5" gravity="center" tint="{{context_textColor}}"/>
                                                        <text id="deleteDone" textStyle="bold" textSize="15" margin="10" textColor="{{context_textColor}}" gravity="center"/>
                                                        <text id="deleteDonetips" textSize="10" margin="5" textColor="{{context_textColor}}" gravity="center"/>
                                                    </vertical>
                        );
                        views.deleteDone.setText("共有" + deleteWrong.length + "个脚本强行停止失败！");
                        views.deleteDonetips.setText("以下为本次强行停止失败的脚本：\n“" + deleteWrong + "”");
                        dialogs.build({
                            customView: views,
                            wrapInScrollView: false,
                            autoDismiss: true
                        }).show();
                    }
                    context_ListDeletejs = [];
                    items = [];
                    let execution = engines.all();
                    for (let i = 0; i < execution.length; i++) {
                        if (execution[i] != engines.myEngine()) {
                            items.push({
                                icon: "@drawable/ic_panorama_fish_eye_black_48dp",
                                name: execution[i].getSource().toString().match(/([^/]+)$/)[1],
                                Id: execution[i].getId(),
                                tag: ""
                            });
                        } else {
                            items.push({
                                icon: "@drawable/ic_panorama_fish_eye_black_48dp",
                                name: execution[i].getSource().toString().match(/([^/]+)$/)[1],
                                Id: execution[i].getId(),
                                tag: "[当前脚本]"
                            });
                        }
                    }
                    DHK.alljslist.setDataSource(items);
                    DHK.finaldel.attr("h", 0);
                    DHK.checkAllText.setText("全选");
                    DHK.checkAll.setSource("@drawable/ic_panorama_fish_eye_black_48dp");
                });
                let DHK = dialogs.build({
                    customView: view,
                    wrapInScrollView: false,
                    autoDismiss: false
                }).show();
            });
            items = [];
            let execution = engines.all();
            for (let i = 0; i < execution.length; i++) {
                if (execution[i] != engines.myEngine()) {
                    items.push({
                        icon: "@drawable/ic_panorama_fish_eye_black_48dp",
                        name: execution[i].getSource().toString().match(/([^/]+)$/)[1],
                        Id: execution[i].getId(),
                        tag: ""
                    });
                } else {
                    items.push({
                        icon: "@drawable/ic_panorama_fish_eye_black_48dp",
                        name: execution[i].getSource().toString().match(/([^/]+)$/)[1],
                        Id: execution[i].getId(),
                        tag: "[当前脚本]"
                    });
                }
            }
            DHK.alljslist.setDataSource(items);
            context_ListDeletejs = [];
            DHK.alljslist.on("item_click", function(item, i, itemView, alljslistView) {
                function WhetherAlready(D) {
                    for (let i = 0; i < context_ListDeletejs.length; i++) {
                        if (D == context_ListDeletejs[i].Id) {
                            return i;
                        }
                    }
                }
                if (WhetherAlready(item.Id) != undefined) {
                    context_ListDeletejs.remove(context_ListDeletejs[WhetherAlready(item.Id)]);
                    itemView.checkthisjs.setSource("@drawable/ic_panorama_fish_eye_black_48dp");
                } else {
                    context_ListDeletejs.push({
                        Id: item.Id,
                        name: item.name
                    });
                    itemView.checkthisjs.setSource("@drawable/ic_check_circle_black_48dp");
                }
                if (context_ListDeletejs.length > 0) {
                    DHK.finaldel.attr("h", 35);
                    DHK.finaldel.attr("cardBackgroundColor", "#F44336");
                    DHK.checkAllText.setText("全选（已勾选" + context_ListDeletejs.length + "个）");
                } else {
                    DHK.finaldel.attr("h", 0);
                    DHK.checkAllText.setText("全选");
                    DHK.checkAll.setSource("@drawable/ic_panorama_fish_eye_black_48dp");
                }
                if (context_ListDeletejs.length > 0 && context_ListDeletejs.length == items.length) {
                    DHK.checkAll.setSource("@drawable/ic_check_circle_black_48dp");
                    DHK.finaldel.attr("h", 35);
                    DHK.finaldel.attr("cardBackgroundColor", "#F44336");
                } else if (context_ListDeletejs.length > 0) {
                    DHK.checkAll.setSource("@drawable/ic_panorama_fish_eye_black_48dp");
                }
            });

            DHK.alljslist.on("item_bind", function(itemView, itemHolder) {
                itemView.deleteItem.on("click", function() {
                    let item = itemHolder.item;
                    let view = ui.inflate(
                        <vertical padding="25 0" bg="{{context_framebg}}">
                                                    <linear orientation="horizontal" align="left">
                                                        <img src="@drawable/ic_warning_black_48dp" h="20" marginTop="3" tint="#F44336" layout_gravity="center"/>
                                                        <text id="deleteTitle" textSize="15" textStyle="bold" margin="0 5 0 0" textColor="#F44336"/>
                                                    </linear>
                                                    <text id="deleteTips" textStyle="bold" textSize="10" margin="10 5 10 5" textColor="#D32F2F"/>
                                                    <linear orientation="horizontal" align="left" margin="0" paddingTop="0">
                                                        <card layout_weight="50" h="40" cardCornerRadius="5dp" cardElevation="0dp" gravity="center_vertical" margin="5"cardBackgroundColor="#F44336">
                                                            <text id="Determine" text="强行停止" textStyle="bold" textColor="#FFFFFF" gravity="center" textSize="12sp" foreground="?attr/selectableItemBackground" clickable="true"/>
                                                        </card>
                                                        <card layout_weight="50" h="40" cardCornerRadius="5dp" cardElevation="0dp" gravity="center_vertical" margin="5"cardBackgroundColor="#4CAF50">
                                                            <text id="cancel" text="取消停止" textStyle="bold" textColor="#FFFFFF" gravity="center" textSize="12sp" foreground="?attr/selectableItemBackground" clickable="true"/>
                                                        </card>
                                                    </linear>
                                                </vertical>, null, false);
                    view.deleteTitle.setText("您确定要强行停止“[" + item.Id + "]" + item.name + "”脚本吗？");

                    view.Determine.click(() => {
                        if (stopscript(item.Id) == true) {
                            items.splice(itemHolder.position, 1);
                            DHK.dismiss();
                            let views = ui.inflate(
                                <vertical padding="25 0" bg="{{context_framebg}}">
                                                                    <img src="@drawable/ic_check_circle_black_48dp" size="20" margin="5" gravity="center"tint="{{context_textColor}}"/>
                                                                    <text id="deleteDone" textStyle="bold" textSize="15" margin="10" textColor="{{context_textColor}}" gravity="center"/>
                                                                </vertical>
                            );
                            views.deleteDone.setText("已成功停止“" + item.name + "(" + item.Id + ")”脚本");
                            dialogs.build({
                                customView: views,
                                wrapInScrollView: false,
                                autoDismiss: true
                            }).show();
                        } else {
                            DHK.dismiss();
                            let views = ui.inflate(
                                <vertical padding="25 0" bg="{{context_framebg}}">
                                                                    <img src="@drawable/ic_cancel_black_48dp" size="20" margin="5" gravity="center" tint="{{context_textColor}}"/>
                                                                    <text id="deleteDone" textStyle="bold" textSize="15" margin="10" textColor="{{context_textColor}}" gravity="center"/>
                                                                </vertical>
                            );
                            views.deleteDone.setText("停止“" + item.name + "(" + item.Id + ")”脚本失败！");
                            dialogs.build({
                                customView: views,
                                wrapInScrollView: false,
                                autoDismiss: true
                            }).show();
                        }
                    });
                    view.cancel.click(() => {
                        DHK.dismiss();
                    });
                    let DHK = dialogs.build({
                        customView: view,
                        wrapInScrollView: false,
                        autoDismiss: false
                    }).show();
                });
            })
            context_CheckAlldelete = false;
            DHK.checkAll.on("click", function(item, i, itemView, alljslistView) {
                if (context_CheckAlldelete == true) {
                    context_CheckAlldelete = false;
                    DHK.checkAll.setSource("@drawable/ic_panorama_fish_eye_black_48dp");
                    items = [];
                    let execution = engines.all();
                    for (let i = 0; i < execution.length; i++) {
                        if (execution[i] != engines.myEngine()) {
                            items.push({
                                icon: "@drawable/ic_panorama_fish_eye_black_48dp",
                                name: execution[i].getSource().toString().match(/([^/]+)$/)[1],
                                Id: execution[i].getId(),
                                tag: ""
                            });
                        } else {
                            items.push({
                                icon: "@drawable/ic_panorama_fish_eye_black_48dp",
                                name: execution[i].getSource().toString().match(/([^/]+)$/)[1],
                                Id: execution[i].getId(),
                                tag: "[当前脚本]"
                            });
                        }
                    }
                    DHK.alljslist.setDataSource(items);
                    context_ListDeletejs = [];
                } else {
                    context_CheckAlldelete = true;
                    DHK.checkAll.setSource("@drawable/ic_check_circle_black_48dp");
                    items = [];
                    let execution = engines.all();
                    for (let i = 0; i < execution.length; i++) {
                        if (execution[i] != engines.myEngine()) {
                            items.push({
                                icon: "@drawable/ic_check_circle_black_48dp",
                                name: execution[i].getSource().toString().match(/([^/]+)$/)[1],
                                Id: execution[i].getId(),
                                tag: ""
                            });
                        } else {
                            items.push({
                                icon: "@drawable/ic_check_circle_black_48dp",
                                name: execution[i].getSource().toString().match(/([^/]+)$/)[1],
                                Id: execution[i].getId(),
                                tag: "[当前脚本]"
                            });
                        }
                    }
                    DHK.alljslist.setDataSource(items);
                    context_ListDeletejs = [];
                    for (let i = 0; i < items.length; i++) {
                        context_ListDeletejs.push({
                            Id: items[i].Id,
                            name: items[i].name
                        });
                    }
                }
                if (context_ListDeletejs.length > 0) {
                    DHK.checkAllText.setText("全选（已勾选" + context_ListDeletejs.length + "个）");
                    DHK.finaldel.attr("h", 35);
                    DHK.finaldel.attr("cardBackgroundColor", "#F44336");
                } else {
                    DHK.checkAllText.setText("全选");
                    DHK.finaldel.attr("h", 0);
                }
            });

            Array.prototype.indexOf = function(val) {
                for (var i = 0; i < this.length; i++) {
                    if (this[i] == val) return i;
                }
                return -1;
            };
            Array.prototype.remove = function(val) {
                var index = this.indexOf(val);
                if (index > -1) {
                    this.splice(index, 1);
                }
            };
        }
    });

    ui.ViewLog.click(() => {
        app.startActivity({
            action: "android.intent.action.VIEW",
            packageName: "com.orange.orangejs",
            className: "com.stardust.auojs.inrt.LogActivity"
        });
    });

    ui.changeColor.click(() => {
        if (getStorageData("DayNightSetting", "AutoDayNight") != undefined) {
            let view = ui.inflate(
                <vertical bg="{{context_framebg}}" padding="25 0">
                            <img src="@drawable/ic_announcement_black_48dp" w="25" h="25" margin="5 0" tint="{{context_textColor}}"/>
                            <text text="您已开启“自动切换主题”确定要关闭吗？" textSize="15sp" textStyle="bold" textColor="{{context_textColor}}" gravity="left" margin="5 0 5 0"/>
                            <text id="nowInformation" textSize="10sp" textStyle="bold" textColor="{{context_textColor}}" gravity="left" margin="5 0 5 0"/>
                            <text text="*要在“自动切换主题”开启的情况下手动切换主题，你必须先点击“确定”关闭“自动切换主题”功能才能成功完成一次手动切换主题" textSize="5sp" textColor="{{context_textColor}}" gravity="left" margin="5 0 5 0"/>
                            <linear orientation="horizontal" align="left" margin="0" paddingTop="0">
                                <card layout_weight="50" h="40" cardCornerRadius="5dp" cardElevation="0dp" gravity="center_vertical" margin="5"cardBackgroundColor="{{context_SettingsCard}}">
                                    <text id="Determine" text="确定" textStyle="bold" textColor="{{context_textColor}}" gravity="center" textSize="12sp" foreground="?attr/selectableItemBackground" clickable="true"/>
                                </card>
                                <card layout_weight="50" h="40" cardCornerRadius="5dp" cardElevation="0dp" gravity="center_vertical" margin="5"cardBackgroundColor="{{context_SettingsCard}}">
                                    <text id="cancel" text="取消" textStyle="bold" textColor="{{context_textColor}}" gravity="center" textSize="12sp" foreground="?attr/selectableItemBackground" clickable="true"/>
                                </card>
                            </linear>
                        </vertical>, null, false);
            let DAY = "";
            let NIGHT = "";
            let a = Number(getStorageData("DayNightSetting", "DayTime"));
            let b = Number(getStorageData("DayNightSetting", "NightTime"));
            let c = Number(getStorageData("DayNightSetting", "NightTime"));
            let d = Number(getStorageData("DayNightSetting", "DayTime"));
            if (a > b) {
                var DAY = "次日";
            }
            if (c > d) {
                var NIGHT = "次日";
            }
            view.nowInformation.setText("当前时段切换设置 浅色：" + getStorageData("DayNightSetting", "DayTime") + "时-" + DAY + getStorageData("DayNightSetting", "NightTime") + "时  夜间：" + getStorageData("DayNightSetting", "NightTime") + "时-" + NIGHT + getStorageData("DayNightSetting", "DayTime") + "时");
            view.Determine.click(() => {
                delStorageData("DayNightSetting", "AutoDayNight");
                DHK.dismiss();
                if (context_DayOrNight == 1) {
                    context_DayOrNight = 0;
                } else {
                    context_DayOrNight = 1;
                }
                mainUi();
            });
            view.cancel.click(() => {
                DHK.dismiss();
            });
            var DHK = dialogs.build({
                customView: view,
                wrapInScrollView: false,
                autoDismiss: false
            }).show();
        } else {
            if (context_DayOrNight == 1) {
                context_DayOrNight = 0;
            } else {
                context_DayOrNight = 1;
            }
            mainUi();
        }
    });


    ui.Privacy_Security.click(() => {
        SP();
    });
}

function SignUp() {
    context_NowUi = "SignUp";
    activity.window.addFlags(android.view.WindowManager.LayoutParams.FLAG_TRANSLUCENT_STATUS); //设置状态栏透明
    ui.layout(
        <scroll bg="#FFFFFF">
            <vertical layout_gravity="center" marginBottom="0">
                <linear orientation="horizontal" gravity="center">
                    <img src="{{getStorageData('APPbasic', 'URLprefix')}}/OrangeJs-Logo.png" w="30" h="30" margin="5 0"/>
                    <img src="{{getStorageData('APPbasic', 'URLprefix')}}/OrangeJs_logo.png" w="85" h="35"/>
                </linear>
                <text text="欢迎使用" textSize="45sp" textColor="#000000" gravity="center"/>
                <text text="全新1.1.0主界面" marginTop="10" textSize="15sp" textColor="#000000" gravity="center"/>
                <linear orientation="horizontal" gravity="center" marginTop="150">
                    <card w="150dp" h="50" marginRight="2" cardCornerRadius="25dp" cardElevation="0dp" gravity="center" cardBackgroundColor="#2196F3" alpha="0.7">
                        <card id="SignUp" h="40" w="*" margin="5 0 5 0" cardCornerRadius="20dp" cardElevation="0dp" align="center" cardBackgroundColor="#FFFFFF" foreground="?selectableItemBackground" clickable="true">
                            <text text="填写注册问卷" textStyle="bold" color="#2196F3" gravity="center" size="12"/>
                        </card>
                    </card>
                    <card w="50dp" h="50" marginLeft="2" cardCornerRadius="25dp" cardElevation="0dp" gravity="center" cardBackgroundColor="#4CAF50" alpha="0.7">
                        <card id="SignIn" h="40" w="*" margin="5 0 5 0" cardCornerRadius="20dp" cardElevation="0dp" align="center" cardBackgroundColor="#FFFFFF" foreground="?selectableItemBackground" clickable="true">
                            <img src="@drawable/ic_vpn_key_black_48dp" tint="#4CAF50" w="30" h="30"/>
                        </card>
                    </card>
                </linear>
            </vertical>
        </scroll>
    );
    ui.SignUp.click(() => {
        let view = ui.inflate(
            <vertical bg="#FFFFFF" padding="25 10 25 0">
                        <linear orientation="horizontal" gravity="left||center" marginBottom="5">
                            <img src="{{getStorageData('APPbasic', 'URLprefix')}}/OrangeJs-Logo.png" w="30" h="30" margin="5 0"/>
                            <img src="{{getStorageData('APPbasic', 'URLprefix')}}/OrangeJs_logo.png" w="85" h="35"/>
                            <linear orientation="horizontal" w="match_parent" gravity="right||center">
                                <img id="ExitScript" src="@drawable/ic_clear_black_48dp" w="35" h="35" tint="#000000" foreground="?attr/selectableItemBackground" clickable="true"/>
                            </linear>
                        </linear>
                        <ScrollView>
                            <webview id="webview"/>
                        </ScrollView>
                    </vertical>
        );
        view.webview.loadUrl("https://www.wjx.top/jq/94788811.aspx");
        view.ExitScript.click(() => {
            android.webkit.WebStorage.getInstance().deleteAllData();
            DHK.dismiss();
        });
        let DHK = dialogs.build({
            customView: view,
            wrapInScrollView: false,
            cancelable: false,
            autoDismiss: true
        }).show();
    });

    ui.SignIn.click(() => {
        let view = ui.inflate(
            <vertical bg="#FFFFFF" padding="25 10 25 0">
                        <input id="password" textColor="#000000" hint="请输入激活码[填写问卷立得]" textColorHint="#9E9E9E"/>
                        <button id="ok" text="确定" style="Widget.AppCompat.Button.Borderless.Colored" w="50" layout_gravity="right"/>
                    </vertical>
        );

        view.ok.click(() => {
            let a = view.password.getText();
            if (md5(a.toString()) == "109e1be70ecf784109576e7a5df1750a") {
                DHK.dismiss();
                setStorageData("SignUp", "SignKey", a.toString());
                if (getStorageData("DayUi", "LogomarginTop") == undefined) {
                    setStorageData("DayUi", "LogomarginTop", "10");
                    log("浅色主题主界面间距设为了10")
                }
                if (getStorageData("NightUi", "LogomarginTop") == undefined) {
                    setStorageData("NightUi", "LogomarginTop", "10");
                    log("深色主界面间距设为了10")
                }
                SettingsUI();
                let views = ui.inflate(
                    <vertical bg="#FFFFFF" padding="25 0 25 0">
                                        <text text="欢迎" textSize="25" textStyle="bold" textColor="#000000" gravity="left"/>
                                        <text text="先来进行设置吧～" textSize="15" textStyle="bold" textColor="#000000" gravity="left" margin="0 5"/>
                                    </vertical>
                );
                dialogs.build({
                    customView: views,
                    wrapInScrollView: false,
                    autoDismiss: true
                }).show();
            } else {
                view.password.setError("激活码输入错误");
            }
        });
        let DHK = dialogs.build({
            customView: view,
            wrapInScrollView: false,
            autoDismiss: true
        }).show();
    });
}

function SettingsUI() {
    context_NowUi = "SettingsUI";
    events.removeAllListeners();
    ui.layout(
        <frame background="{{context_framebg}}">
            <scroll bg="{{context_framebg}}">
                <vertical margin="0 25 0 0">
                    <linear orientation="horizontal" gravity="left||center">
                        <img src="{{getStorageData('APPbasic', 'URLprefix')}}/OrangeJs-Logo.png" w="30" h="30" margin="5 0"/>
                        <img src="{{context_Logo}}" w="85" h="30"/>
                        <linear orientation="horizontal" w="match_parent" gravity="right||center">
                            <text text="设置" textStyle="bold" textSize="25" textColor="{{context_textColor}}" marginRight="5"/>
                        </linear>
                    </linear>
                    <card h="1" cardCornerRadius="1dp" cardElevation="0dp" gravity="center_vertical" cardBackgroundColor="{{context_Fgx}}" margin="5 0"/>
                    <list id='ZhuTiTu' orientation="horizontal" layout_gravity="center_vertical" layout_weight="80">
                        <card w="180"  h="180" cardCornerRadius="5dp" cardElevation="5dp" layout_gravity="center" cardBackgroundColor="{{context_Fgx}}" margin="5" foreground="?attr/selectableItemBackground" clickable="true">
                            <img id="picView" src="{{this.Picture}}" scaleType="centerCrop"/>
                            <card h="20" cardCornerRadius="2dp" cardElevation="0dp" layout_gravity="bottom|center" cardBackgroundColor="{{context_framebg}}" margin="50 5" alpha="0.8">
                                <text text="{{this.TextofPic}}" textSize="10" textColor="{{context_textColor}}" margin="0 0 0 0" gravity="center"/>
                            </card>
                        </card>
                    </list>
                    <card h="50" cardCornerRadius="10dp" cardElevation="0dp" marginTop="10"cardBackgroundColor="{{context_SettingsCard}}">
                        <linear orientation="horizontal" gravity="center||left">
                            <img src="@drawable/ic_brightness_4_black_48dp" w="30" h="30" circle="true" tint="{{context_textColor}}" marginLeft="10"/>
                            <linear orientation="vertical"  marginLeft="5" gravity="center">
                                <text text="自动切换时段主题" textColor="{{context_textColor}}" textStyle="bold" textSize="15sp"/>
                            </linear>
                        </linear>
                        <text id="nighttip" textSize="5sp" textColor="{{context_textColor}}" paddingLeft="2" gravity="bottom||left" margin="45 0 0 10"/>
                        <Switch id="DayNight" marginRight="25" gravity="right||center"/>
                    </card>
                    <card h="50" cardCornerRadius="10dp" cardElevation="0dp" gravity="center_vertical" marginTop="10"cardBackgroundColor="{{context_SettingsCard}}">
                        <linear orientation="horizontal" gravity="center||left">
                            <img src="@drawable/ic_color_lens_black_48dp" w="30" h="30" circle="true" tint="{{context_textColor}}" marginLeft="10"/>
                            <linear orientation="vertical"  marginLeft="5" gravity="center">
                                <text text="主页卡片颜色渐变" textColor="{{context_textColor}}" textStyle="bold" textSize="15sp"/>
                            </linear>
                        </linear>
                        <Switch id="Gradient" marginRight="25" gravity="right||center"/>
                    </card>
                    <card h="50" cardCornerRadius="10dp" cardElevation="0dp" gravity="center_vertical" marginTop="10"cardBackgroundColor="{{context_SettingsCard}}">
                        <linear orientation="horizontal" gravity="center||left">
                            <img src="@drawable/ic_lock_black_48dp" w="30" h="30" circle="true" tint="{{context_textColor}}" marginLeft="10"/>
                            <linear orientation="vertical"  marginLeft="5" gravity="center">
                                <text text="UI界面返回锁定" textColor="{{context_textColor}}" textStyle="bold" textSize="15sp"/>
                            </linear>
                        </linear>
                        <text id="tips" text="* 推荐开启以防止直接返回退出导致界面关闭" textSize="5sp" textColor="{{context_textColor}}" paddingLeft="2" gravity="bottom||left" margin="45 0 0 5"/>
                        <Switch id="uiProtect" marginRight="25" gravity="right||center"/>
                    </card>
                    <card id="DeleteJsSettings" h="50" cardCornerRadius="10dp" cardElevation="0dp" gravity="center_vertical" marginTop="10"cardBackgroundColor="{{context_SettingsCard}}" foreground="?attr/selectableItemBackground" clickable="true">
                        <linear orientation="horizontal" gravity="center||left">
                            <img src="@drawable/ic_delete_sweep_black_48dp" w="30" h="30" circle="true" tint="{{context_textColor}}" marginLeft="10"/>
                            <linear orientation="vertical"  marginLeft="5" gravity="center">
                                <text text="手动删除脚本配置" textColor="{{context_textColor}}" textStyle="bold" textSize="15sp"/>
                            </linear>
                        </linear>
                        <linear gravity="center||right" marginRight="10">
                            <img marginRight="25" src="@drawable/ic_keyboard_arrow_right_black_48dp" w="15" h="15" circle="true" tint="{{context_textColor}}"/>
                        </linear>
                    </card>
                    <card id="GetUiObject" h="50" cardCornerRadius="10dp" cardElevation="0dp" gravity="center_vertical" marginTop="10"cardBackgroundColor="{{context_SettingsCard}}" foreground="?attr/selectableItemBackground" clickable="true">
                        <linear orientation="horizontal" gravity="center||left">
                            <img src="@drawable/ic_poll_black_48dp" w="30" h="30" circle="true" tint="{{context_textColor}}" marginLeft="10"/>
                            <linear orientation="vertical"  marginLeft="5" gravity="center">
                                <text text="APP控件数据获取" textColor="{{context_textColor}}" textStyle="bold" textSize="15sp"/>
                            </linear>
                        </linear>
                        <linear gravity="center||right" marginRight="10">
                            <img marginRight="25" src="@drawable/ic_keyboard_arrow_right_black_48dp" w="15" h="15" circle="true" tint="{{context_textColor}}"/>
                        </linear>
                    </card>
                    <card id="CodeTest" h="50" cardCornerRadius="10dp" cardElevation="0dp" gravity="center_vertical" marginTop="10"cardBackgroundColor="{{context_SettingsCard}}" foreground="?attr/selectableItemBackground" clickable="true">
                        <linear orientation="horizontal" gravity="center||left">
                            <img src="@drawable/ic_bug_report_black_48dp" w="30" h="30" circle="true" tint="{{context_textColor}}" marginLeft="10"/>
                            <linear orientation="vertical"  marginLeft="5" gravity="center">
                                <text text="开发人员代码测试" textColor="{{context_textColor}}" textStyle="bold" textSize="15sp"/>
                            </linear>
                        </linear>
                        <linear gravity="center||right" marginRight="10">
                            <img marginRight="25" src="@drawable/ic_keyboard_arrow_right_black_48dp" w="15" h="15" circle="true" tint="{{context_textColor}}"/>
                        </linear>
                    </card>
                    <card id="Appsettings" h="50" cardCornerRadius="10dp" cardElevation="0dp" gravity="center_vertical" marginTop="10"cardBackgroundColor="{{context_SettingsCard}}" foreground="?attr/selectableItemBackground" clickable="true">
                        <linear orientation="horizontal" gravity="center||left">
                            <img src="@drawable/ic_open_in_new_black_48dp" w="30" h="30" circle="true" tint="{{context_textColor}}" marginLeft="10"/>
                            <linear orientation="vertical"  marginLeft="5" gravity="center">
                                <text text="跳转软件自带设置" textColor="{{context_textColor}}" textStyle="bold" textSize="15sp"/>
                            </linear>
                        </linear>
                        <linear gravity="center||right" marginRight="10">
                            <img marginRight="25" src="@drawable/ic_keyboard_arrow_right_black_48dp" w="15" h="15" circle="true" tint="{{context_textColor}}"/>
                        </linear>
                    </card>
                </vertical>
            </scroll>
            <fab id="back" w="auto" h="auto" src="@drawable/ic_arrow_back_black_48dp"
            margin="16" layout_gravity="bottom|right" tint="#ffffff" />
        </frame>
    );
    ui.back.click(() => {
        mainUi();
    });
    ui.ZhuTiTu.on("item_click", function(item, i, itemView, listView) {
        function saveThisPic(ShouldsavePath) {
            var imgView = itemView.picView;
            var myBitmap = createBitmap(imgView);
            var imgPath = saveBitmap(myBitmap);
            return true;

            function createBitmap(view) {
                view.setDrawingCacheEnabled(true);
                view.buildDrawingCache();
                var bitmap = view.getDrawingCache();
                return bitmap;
            }

            function saveBitmap(bitmap) {
                var imgPath = ShouldsavePath;
                var canvas = new Canvas(bitmap);
                var myimg = canvas.toImage();
                images.save(myimg, imgPath);
                return imgPath;
            }
        }
        if (item.TextofPic == "当前顶图") {
            var view = ui.inflate(
                <vertical padding="25 0" bg="{{context_framebg}}">
                            <text text="您想对当前顶图做什么？" textStyle="bold" textSize="15" marginTop="10" textColor="#777777" gravity="center"/>
                            <linear gravity="center">
                                <img src="{{context_TopPics}}" margin="10" scaleType="centerCrop" w="200" h="200" gravity="center"/>
                            </linear>
                            <linear orientation="horizontal" align="left" margin="0" paddingTop="0">
                                <card layout_weight="50" h="40" cardCornerRadius="5dp" cardElevation="0dp" gravity="center_vertical" margin="5 5 5 0"cardBackgroundColor="{{context_SettingsCard}}">
                                    <text id="ChangePic" text="更换图片" textStyle="bold" textColor="{{context_textColor}}" gravity="center" textSize="12sp" foreground="?attr/selectableItemBackground" clickable="true"/>
                                </card>
                                <card layout_weight="50" h="40" cardCornerRadius="5dp" cardElevation="0dp" gravity="center_vertical" margin="5 5 5 0"cardBackgroundColor="{{context_SettingsCard}}">
                                    <text id="BeBottomPic" text="设为底图" textStyle="bold" textColor="{{context_textColor}}" gravity="center" textSize="12sp" foreground="?attr/selectableItemBackground" clickable="true"/>
                                </card>
                            </linear>
                            <linear orientation="horizontal" align="left" margin="0" paddingTop="0">
                                <card layout_weight="50" h="40" cardCornerRadius="5dp" cardElevation="0dp" gravity="center_vertical" margin="5 5 5 5"cardBackgroundColor="{{context_SettingsCard}}">
                                    <text id="SharePic" text="分享图片" textStyle="bold" textColor="#4CAF50" gravity="center" textSize="12sp" foreground="?attr/selectableItemBackground" clickable="true"/>
                                </card>
                                <card layout_weight="50" h="40" cardCornerRadius="5dp" cardElevation="0dp" gravity="center_vertical" margin="5 5 5 5"cardBackgroundColor="{{context_SettingsCard}}">
                                    <text id="DeletePic" text="移除图片" textStyle="bold" textColor="#FF3D00" gravity="center" textSize="12sp" foreground="?attr/selectableItemBackground" clickable="true"/>
                                </card>
                            </linear>
                        </vertical>, null, false);
            view.ChangePic.click(() => {
                DHK.dismiss();
                let view = ui.inflate(
                    <vertical padding="25 0" bg="{{context_framebg}}">
                                        <text text="请选择您要更换的图片类型" textStyle="bold" textSize="15" marginTop="10" textColor="#777777" gravity="center"/>
                                        <linear orientation="horizontal" align="left" margin="0" paddingTop="0">
                                            <card layout_weight="50" h="40" cardCornerRadius="5dp" cardElevation="0dp" gravity="center_vertical" margin="5"cardBackgroundColor="{{context_SettingsCard}}">
                                                <text id="LocalPic" text="更换本地图片" textStyle="bold" textColor="{{context_textColor}}" gravity="center" textSize="12sp" foreground="?attr/selectableItemBackground" clickable="true"/>
                                            </card>
                                            <card layout_weight="50" h="40" cardCornerRadius="5dp" cardElevation="0dp" gravity="center_vertical" margin="5"cardBackgroundColor="{{context_SettingsCard}}">
                                                <text id="UrlPic" text="更换网络图片" textStyle="bold" textColor="{{context_textColor}}" gravity="center" textSize="12sp" foreground="?attr/selectableItemBackground" clickable="true"/>
                                            </card>
                                        </linear>
                                    </vertical>, null, false);
                view.LocalPic.click(() => {
                    DHKs.dismiss();
                    startChooseFile("image/*", {}, "选择顶图");
                });
                view.UrlPic.click(() => {
                    let view = ui.inflate(
                        <vertical padding="25 0" bg="{{context_framebg}}">
                                                    <text text="请输入网络图片直链" textStyle="bold" textColor="{{context_textColor}}" />
                                                    <input id="PictureUrl" text="http://" textColor="{{context_textColor}}" textColorHint="#9E9E9E"/>
                                                    <text text="请输入图片版权信息" textStyle="bold" textColor="{{context_textColor}}"/>
                                                    <input id="PictureCopyright" text="©" textColor="{{context_textColor}}" textColorHint="#9E9E9E"/>
                                                    <linear orientation="horizontal" align="left" margin="0" paddingTop="0">
                                                        <card layout_weight="50" h="40" cardCornerRadius="5dp" cardElevation="0dp" gravity="center_vertical" margin="5"cardBackgroundColor="{{context_SettingsCard}}">
                                                            <text id="Determine" text="确定" textStyle="bold" textColor="{{context_textColor}}" gravity="center" textSize="12sp" foreground="?attr/selectableItemBackground" clickable="true"/>
                                                        </card>
                                                        <card layout_weight="50" h="40" cardCornerRadius="5dp" cardElevation="0dp" gravity="center_vertical" margin="5"cardBackgroundColor="{{context_SettingsCard}}">
                                                            <text id="cancel" text="取消" textStyle="bold" textColor="{{context_textColor}}" gravity="center" textSize="12sp" foreground="?attr/selectableItemBackground" clickable="true"/>
                                                        </card>
                                                    </linear>
                                                </vertical>, null, false);
                    view.Determine.click(() => {
                        let Purl = String(view.PictureUrl.getText());
                        let Pcopyright = String(view.PictureCopyright.getText());
                        if (Purl.search("http://") == 0 || Purl.search("https://") == 0) {
                            DHKs.dismiss();
                            DHKss.dismiss();
                            if (context_DayOrNight == 0) {
                                let str = 'imgDownLoad("' + Purl + '","/storage/emulated/0/OrangeJs/主界面示例图片/夜间示例顶图.png","顶图","' + Pcopyright + '")';
                                let sharevalue = 'context_framebg="' + context_framebg + '";context_textColor="' + context_textColor + '";context_DayOrNight="' + context_DayOrNight + '";';
                                engines.execScript("下载图片", "" + sharevalue + str + ";\n" + imgDownLoad.toString());
                            } else if (context_DayOrNight == 1) {
                                let str = 'imgDownLoad("' + Purl + '","/storage/emulated/0/OrangeJs/主界面示例图片/示例顶图.png","顶图","' + Pcopyright + '")';
                                let sharevalue = 'context_framebg="' + context_framebg + '";context_textColor="' + context_textColor + '";context_DayOrNight="' + context_DayOrNight + '";';
                                engines.execScript("下载图片", "" + sharevalue + str + ";\n" + imgDownLoad.toString());
                            }
                            var keep = setInterval(function() {}, 1000);
                            var chaoshi = setTimeout(function() {
                                clearInterval(keep);
                            }, 25 * 1000);
                            events.broadcast.on('imgSetOk', function(zt) {
                                clearInterval(keep);
                                clearTimeout(chaoshi);
                                if (zt == "图片下载完成&设置成功") {
                                    mainUi();
                                    SettingsUI();
                                }
                            });
                        } else {
                            view.PictureUrl.setError("图片直链需以http://或https://开头");
                        }
                    });
                    view.cancel.click(() => {
                        DHKss.dismiss();
                    });
                    var DHKss = dialogs.build({
                        customView: view,
                        wrapInScrollView: false,
                        autoDismiss: false
                    }).show();
                });
                var DHKs = dialogs.build({
                    customView: view,
                    wrapInScrollView: false,
                    autoDismiss: false
                }).show();
            });
            view.BeBottomPic.click(() => {
                DHK.dismiss();
                if (context_DayOrNight == 0) {
                    setStorageData("NightUiPicture", "BottomPics", context_TopPics);
                    if (getStorageData("NightUiPicture", "BottomPicsCopyright") != undefined) {
                        setStorageData("NightUiPicture", "BottomPicsCopyright", context_TopPics_Copyright);
                    }
                } else if (context_DayOrNight == 1) {
                    setStorageData("DayUiPicture", "BottomPics", context_TopPics);
                    if (getStorageData("DayUiPicture", "BottomPicsCopyright") != undefined) {
                        setStorageData("DayUiPicture", "BottomPicsCopyright", context_TopPics_Copyright);
                    }
                }
                context_BottomPics = context_TopPics;
                context_BottomPics_Copyright = context_TopPics_Copyright;
                let view = ui.inflate(
                    <vertical padding="25 0" bg="{{context_framebg}}">
                                        <text text="已设为底图" textStyle="bold" textSize="15" margin="10" textColor="#777777" gravity="center"/>
                                    </vertical>
                );
                dialogs.build({
                    customView: view,
                    wrapInScrollView: false,
                    autoDismiss: false
                }).show();
                SettingsUI();
            });
            view.SharePic.click(() => {
                DHK.dismiss();
                if (context_TopPics.search("http://") == 0 || context_TopPics.search("https://") == 0) {
                    var view = ui.inflate(
                        <vertical padding="25 0" bg="{{context_framebg}}">
                                            <linear gravity="center">
                                                <img src="{{context_TopPics}}" margin="10" scaleType="centerCrop" w="200" h="200" gravity="center"/>
                                            </linear>
                                            <text id="showurl" textSize="8" margin="10 5 10 5" textColor="{{context_textColor}}"/>
                                            <linear orientation="horizontal" align="left" margin="0" paddingTop="0">
                                                <card layout_weight="50" h="40" cardCornerRadius="5dp" cardElevation="0dp" gravity="center_vertical" margin="5"cardBackgroundColor="{{context_SettingsCard}}">
                                                    <text id="CopyUrltext" text="复制链接文字" textStyle="bold" textColor="{{context_textColor}}" gravity="center" textSize="12sp" foreground="?attr/selectableItemBackground" clickable="true"/>
                                                </card>
                                                <card layout_weight="50" h="40" cardCornerRadius="5dp" cardElevation="0dp" gravity="center_vertical" margin="5"cardBackgroundColor="{{context_SettingsCard}}">
                                                    <text id="shareUrltext" text="分享链接文字" textStyle="bold" textColor="{{context_textColor}}" gravity="center" textSize="12sp" foreground="?attr/selectableItemBackground" clickable="true"/>
                                                </card>
                                            </linear>
                                        </vertical>, null, false);
                    view.showurl.setText("图片直链：" + context_TopPics + "\n图片版权：" + context_TopPics_Copyright);
                    let a = view.showurl.getText();
                    view.CopyUrltext.click(() => {
                        setClip(a);
                        let view = ui.inflate(
                            <vertical padding="25 0" bg="{{context_framebg}}">
                                                        <text text="链接文字已复制到剪切板" textStyle="bold" textSize="15" margin="10" textColor="#777777" gravity="center"/>
                                                    </vertical>
                        );
                        dialogs.build({
                            customView: view,
                            wrapInScrollView: false,
                            autoDismiss: false
                        }).show();
                    });
                    view.shareUrltext.click(() => {
                        app.startActivity({
                            action: "android.intent.action.SEND",
                            type: "text/*",
                            extras: {
                                "android.intent.extra.TEXT": a
                            }
                        });
                    });
                    dialogs.build({
                        customView: view,
                        wrapInScrollView: false,
                        autoDismiss: false
                    }).show();
                } else {
                    let picfileurl = context_TopPics.replace("file://", "");
                    shareFile(picfileurl, "image/*");
                }
            });
            view.DeletePic.click(() => {
                DHK.dismiss();

                if (context_DayOrNight == 0) {
                    delStorageData("NightUiPicture", "TopPics");
                    delStorageData("NightUiPicture", "TopPicsCopyright");
                } else if (context_DayOrNight == 1) {
                    delStorageData("DayUiPicture", "TopPics");
                    delStorageData("DayUiPicture", "TopPicsCopyright");
                }
                ZhuTiTu.splice(i, 1);
            });
        } else if (item.TextofPic == "当前底图") {
            var view = ui.inflate(
                <vertical padding="25 0" bg="{{context_framebg}}">
                            <text text="您想对当前底图做什么？" textStyle="bold" textSize="15" marginTop="10" textColor="#777777" gravity="center"/>
                            <linear gravity="center">
                                <img src="{{context_BottomPics}}" margin="10" scaleType="centerCrop" w="200" h="200" gravity="center"/>
                            </linear>
                            <linear orientation="horizontal" align="left" margin="0" paddingTop="0">
                                <card layout_weight="50" h="40" cardCornerRadius="5dp" cardElevation="0dp" gravity="center_vertical" margin="5 5 5 0"cardBackgroundColor="{{context_SettingsCard}}">
                                    <text id="ChangePic" text="更换图片" textStyle="bold" textColor="{{context_textColor}}" gravity="center" textSize="12sp" foreground="?attr/selectableItemBackground" clickable="true"/>
                                </card>
                                <card layout_weight="50" h="40" cardCornerRadius="5dp" cardElevation="0dp" gravity="center_vertical" margin="5 5 5 0"cardBackgroundColor="{{context_SettingsCard}}">
                                    <text id="BeTopPic" text="设为顶图" textStyle="bold" textColor="{{context_textColor}}" gravity="center" textSize="12sp" foreground="?attr/selectableItemBackground" clickable="true"/>
                                </card>
                            </linear>
                            <linear orientation="horizontal" align="left" margin="0" paddingTop="0">
                                <card layout_weight="50" h="40" cardCornerRadius="5dp" cardElevation="0dp" gravity="center_vertical" margin="5 5 5 5"cardBackgroundColor="{{context_SettingsCard}}">
                                    <text id="SharePic" text="分享图片" textStyle="bold" textColor="#4CAF50" gravity="center" textSize="12sp" foreground="?attr/selectableItemBackground" clickable="true"/>
                                </card>
                                <card layout_weight="50" h="40" cardCornerRadius="5dp" cardElevation="0dp" gravity="center_vertical" margin="5 5 5 5"cardBackgroundColor="{{context_SettingsCard}}">
                                    <text id="DeletePic" text="移除图片" textStyle="bold" textColor="#FF3D00" gravity="center" textSize="12sp" foreground="?attr/selectableItemBackground" clickable="true"/>
                                </card>
                            </linear>
                        </vertical>, null, false);
            view.ChangePic.click(() => {
                DHK.dismiss();
                let view = ui.inflate(
                    <vertical padding="25 0" bg="{{context_framebg}}">
                                        <text text="请选择您要更换的图片类型" textStyle="bold" textSize="15" marginTop="10" textColor="#777777" gravity="center"/>
                                        <linear orientation="horizontal" align="left" margin="0" paddingTop="0">
                                            <card layout_weight="50" h="40" cardCornerRadius="5dp" cardElevation="0dp" gravity="center_vertical" margin="5"cardBackgroundColor="{{context_SettingsCard}}">
                                                <text id="LocalPic" text="更换本地图片" textStyle="bold" textColor="{{context_textColor}}" gravity="center" textSize="12sp" foreground="?attr/selectableItemBackground" clickable="true"/>
                                            </card>
                                            <card layout_weight="50" h="40" cardCornerRadius="5dp" cardElevation="0dp" gravity="center_vertical" margin="5"cardBackgroundColor="{{context_SettingsCard}}">
                                                <text id="UrlPic" text="更换网络图片" textStyle="bold" textColor="{{context_textColor}}" gravity="center" textSize="12sp" foreground="?attr/selectableItemBackground" clickable="true"/>
                                            </card>
                                        </linear>
                                    </vertical>, null, false);
                view.LocalPic.click(() => {
                    DHKs.dismiss();
                    startChooseFile("image/*", {}, "选择底图");
                });
                view.UrlPic.click(() => {
                    let view = ui.inflate(
                        <vertical padding="25 0" bg="{{context_framebg}}">
                                                    <text text="请输入网络图片直链" textStyle="bold" textColor="{{context_textColor}}" />
                                                    <input id="PictureUrl" text="http://" textColor="{{context_textColor}}" textColorHint="#9E9E9E"/>
                                                    <text text="请输入图片版权信息" textStyle="bold" textColor="{{context_textColor}}"/>
                                                    <input id="PictureCopyright" text="©" textColor="{{context_textColor}}" textColorHint="#9E9E9E"/>
                                                    <linear orientation="horizontal" align="left" margin="0" paddingTop="0">
                                                        <card layout_weight="50" h="40" cardCornerRadius="5dp" cardElevation="0dp" gravity="center_vertical" margin="5"cardBackgroundColor="{{context_SettingsCard}}">
                                                            <text id="Determine" text="确定" textStyle="bold" textColor="{{context_textColor}}" gravity="center" textSize="12sp" foreground="?attr/selectableItemBackground" clickable="true"/>
                                                        </card>
                                                        <card layout_weight="50" h="40" cardCornerRadius="5dp" cardElevation="0dp" gravity="center_vertical" margin="5"cardBackgroundColor="{{context_SettingsCard}}">
                                                            <text id="cancel" text="取消" textStyle="bold" textColor="{{context_textColor}}" gravity="center" textSize="12sp" foreground="?attr/selectableItemBackground" clickable="true"/>
                                                        </card>
                                                    </linear>
                                                </vertical>, null, false);
                    view.Determine.click(() => {
                        let Purl = String(view.PictureUrl.getText());
                        let Pcopyright = String(view.PictureCopyright.getText());
                        if (Purl.search("http://") == 0 || Purl.search("https://") == 0) {
                            DHKs.dismiss();
                            DHKss.dismiss();
                            if (context_DayOrNight == 0) {
                                let str = 'imgDownLoad("' + Purl + '","/storage/emulated/0/OrangeJs/主界面示例图片/夜间示例底图.png","底图","' + Pcopyright + '")';
                                let sharevalue = 'context_framebg="' + context_framebg + '";context_textColor="' + context_textColor + '";context_DayOrNight="' + context_DayOrNight + '";';
                                engines.execScript("下载图片", "" + sharevalue + str + ";\n" + imgDownLoad.toString());
                            } else if (context_DayOrNight == 1) {
                                let str = 'imgDownLoad("' + Purl + '","/storage/emulated/0/OrangeJs/主界面示例图片/示例底图.png","底图","' + Pcopyright + '")';
                                let sharevalue = 'context_framebg="' + context_framebg + '";context_textColor="' + context_textColor + '";context_DayOrNight="' + context_DayOrNight + '";';
                                engines.execScript("下载图片", "" + sharevalue + str + ";\n" + imgDownLoad.toString());
                            }
                            var keep = setInterval(function() {}, 1000);
                            var chaoshi = setTimeout(function() {
                                clearInterval(keep);
                            }, 25 * 1000);
                            events.broadcast.on('imgSetOk', function(zt) {
                                clearInterval(keep);
                                clearTimeout(chaoshi);
                                if (zt == "图片下载完成&设置成功") {
                                    mainUi();
                                    SettingsUI();
                                }
                            });
                        } else {
                            view.PictureUrl.setError("图片直链需以http://或https://开头");
                        }
                    });
                    view.cancel.click(() => {
                        DHKss.dismiss();
                    });
                    var DHKss = dialogs.build({
                        customView: view,
                        wrapInScrollView: false,
                        autoDismiss: false
                    }).show();
                });
                var DHKs = dialogs.build({
                    customView: view,
                    wrapInScrollView: false,
                    autoDismiss: false
                }).show();
            });

            view.BeTopPic.click(() => {
                DHK.dismiss();
                if (context_DayOrNight == 0) {
                    setStorageData("NightUiPicture", "TopPics", context_BottomPics);
                    if (getStorageData("NightUiPicture", "TopPicsCopyright") != undefined) {
                        setStorageData("NightUiPicture", "TopPicsCopyright", context_BottomPics_Copyright);
                    }
                } else if (context_DayOrNight == 1) {
                    setStorageData("DayUiPicture", "TopPics", context_BottomPics);
                    if (getStorageData("DayUiPicture", "TopPicsCopyright") != undefined) {
                        setStorageData("DayUiPicture", "TopPicsCopyright", context_BottomPics_Copyright);
                    }
                }
                context_TopPics = context_BottomPics;
                context_TopPics_Copyright = context_BottomPics_Copyright;
                let view = ui.inflate(
                    <vertical padding="25 0" bg="{{context_framebg}}">
                                        <text text="已设为顶图" textStyle="bold" textSize="15" margin="10" textColor="#777777" gravity="center"/>
                                    </vertical>
                );
                dialogs.build({
                    customView: view,
                    wrapInScrollView: false,
                    autoDismiss: false
                }).show();
                SettingsUI();
            });

            view.SharePic.click(() => {
                DHK.dismiss();
                if (context_BottomPics.search("http://") == 0 || context_BottomPics.search("https://") == 0) {
                    var view = ui.inflate(
                        <vertical padding="25 0" bg="{{context_framebg}}">
                                            <linear gravity="center">
                                                <img src="{{context_BottomPics}}" margin="10" scaleType="centerCrop" w="200" h="200" gravity="center"/>
                                            </linear>
                                            <text id="showurl" textSize="8" margin="10 5 10 5" textColor="{{context_textColor}}"/>
                                            <linear orientation="horizontal" align="left" margin="0" paddingTop="0">
                                                <card layout_weight="50" h="40" cardCornerRadius="5dp" cardElevation="0dp" gravity="center_vertical" margin="5"cardBackgroundColor="{{context_SettingsCard}}">
                                                    <text id="CopyUrltext" text="复制链接文字" textStyle="bold" textColor="{{context_textColor}}" gravity="center" textSize="12sp" foreground="?attr/selectableItemBackground" clickable="true"/>
                                                </card>
                                                <card layout_weight="50" h="40" cardCornerRadius="5dp" cardElevation="0dp" gravity="center_vertical" margin="5"cardBackgroundColor="{{context_SettingsCard}}">
                                                    <text id="shareUrltext" text="分享链接文字" textStyle="bold" textColor="{{context_textColor}}" gravity="center" textSize="12sp" foreground="?attr/selectableItemBackground" clickable="true"/>
                                                </card>
                                            </linear>
                                        </vertical>, null, false);
                    view.showurl.setText("图片直链：" + context_BottomPics + "\n图片版权：" + context_BottomPics_Copyright);
                    let a = view.showurl.getText();
                    view.CopyUrltext.click(() => {
                        setClip(a);
                        let view = ui.inflate(
                            <vertical padding="25 0" bg="{{context_framebg}}">
                                                        <text text="链接文字已复制到剪切板" textStyle="bold" textSize="15" margin="10" textColor="#777777" gravity="center"/>
                                                    </vertical>
                        );
                        dialogs.build({
                            customView: view,
                            wrapInScrollView: false,
                            autoDismiss: false
                        }).show();
                    });
                    view.shareUrltext.click(() => {
                        app.startActivity({
                            action: "android.intent.action.SEND",
                            type: "text/*",
                            extras: {
                                "android.intent.extra.TEXT": a
                            }
                        });
                    });
                    dialogs.build({
                        customView: view,
                        wrapInScrollView: false,
                        autoDismiss: false
                    }).show();
                } else {
                    let picfileurl = context_BottomPics.replace("file://", "");
                    shareFile(picfileurl, "image/*");
                }
            });
            view.DeletePic.click(() => {
                DHK.dismiss();
                if (context_DayOrNight == 0) {
                    delStorageData("NightUiPicture", "BottomPics");
                    delStorageData("NightUiPicture", "BottomPicsCopyright");
                } else if (context_DayOrNight == 1) {
                    delStorageData("DayUiPicture", "BottomPics");
                    delStorageData("DayUiPicture", "BottomPicsCopyright");
                }

                ZhuTiTu.splice(i, 1);
            });
        } else {
            var view = ui.inflate(
                <vertical padding="25 0" bg="{{context_framebg}}">
                            <text text="您想对这张图片做什么？" textStyle="bold" textSize="15" marginTop="10" textColor="#777777" gravity="center"/>
                            <linear orientation="horizontal" align="left" margin="0" paddingTop="0">
                                <card layout_weight="50" h="40" cardCornerRadius="5dp" cardElevation="0dp" gravity="center_vertical" margin="5"cardBackgroundColor="{{context_SettingsCard}}">
                                    <text id="BeTopPic" text="设为顶图" textStyle="bold" textColor="{{context_textColor}}" gravity="center" textSize="12sp" foreground="?attr/selectableItemBackground" clickable="true"/>
                                </card>
                                <card layout_weight="50" h="40" cardCornerRadius="5dp" cardElevation="0dp" gravity="center_vertical" margin="5"cardBackgroundColor="{{context_SettingsCard}}">
                                    <text id="BeBottomPic" text="设为底图" textStyle="bold" textColor="{{context_textColor}}" gravity="center" textSize="12sp" foreground="?attr/selectableItemBackground" clickable="true"/>
                                </card>
                            </linear>
                        </vertical>, null, false);
            view.BeTopPic.click(() => {
                DHK.dismiss();
                files.ensureDir("/storage/emulated/0/OrangeJs/主界面示例图片");
                if (context_DayOrNight == 0) {
                    let str = 'imgDownLoad("' + item.Picture + '","/storage/emulated/0/OrangeJs/主界面示例图片/夜间示例顶图.png","顶图","' + item.CopyrightOfPicture + '")';
                    let sharevalue = 'context_framebg="' + context_framebg + '";context_textColor="' + context_textColor + '";context_DayOrNight="' + context_DayOrNight + '";';
                    engines.execScript("下载图片", "" + sharevalue + str + ";\n" + imgDownLoad.toString());
                } else if (context_DayOrNight == 1) {
                    let str = 'imgDownLoad("' + item.Picture + '","/storage/emulated/0/OrangeJs/主界面示例图片/示例顶图.png","顶图","' + item.CopyrightOfPicture + '")';
                    let sharevalue = 'context_framebg="' + context_framebg + '";context_textColor="' + context_textColor + '";context_DayOrNight="' + context_DayOrNight + '";';
                    engines.execScript("下载图片", "" + sharevalue + str + ";\n" + imgDownLoad.toString());
                }
                var keep = setInterval(function() {}, 1000);
                var chaoshi = setTimeout(function() {
                    clearInterval(keep);
                }, 25 * 1000);
                events.broadcast.on('imgSetOk', function(zt) {
                    clearInterval(keep);
                    clearTimeout(chaoshi);
                    if (zt == "图片下载完成&设置成功") {
                        mainUi();
                        SettingsUI();
                    }
                });
            });
            view.BeBottomPic.click(() => {
                DHK.dismiss();
                files.ensureDir("/storage/emulated/0/OrangeJs/主界面示例图片");
                if (context_DayOrNight == 0) {
                    let str = 'imgDownLoad("' + item.Picture + '","/storage/emulated/0/OrangeJs/主界面示例图片/夜间示例底图.png","底图","' + item.CopyrightOfPicture + '")';
                    let sharevalue = 'context_framebg="' + context_framebg + '";context_textColor="' + context_textColor + '";context_DayOrNight="' + context_DayOrNight + '";';
                    engines.execScript("下载图片", "" + sharevalue + str + ";\n" + imgDownLoad.toString());
                } else if (context_DayOrNight == 1) {
                    let str = 'imgDownLoad("' + item.Picture + '","/storage/emulated/0/OrangeJs/主界面示例图片/示例底图.png","底图","' + item.CopyrightOfPicture + '")';
                    let sharevalue = 'context_framebg="' + context_framebg + '";context_textColor="' + context_textColor + '";context_DayOrNight="' + context_DayOrNight + '";';
                    engines.execScript("下载图片", "" + sharevalue + str + ";\n" + imgDownLoad.toString());
                }
                var keep = setInterval(function() {}, 1000);
                var chaoshi = setTimeout(function() {
                    clearInterval(keep);
                }, 25 * 1000);
                events.broadcast.on('imgSetOk', function(zt) {
                    clearInterval(keep);
                    clearTimeout(chaoshi);
                    if (zt == "图片下载完成&设置成功") {
                        mainUi();
                        SettingsUI();
                    }
                });
            });
        }
        var DHK = dialogs.build({
            customView: view,
            wrapInScrollView: false,
            autoDismiss: true
        }).show();

    });
    if (getStorageData("DayNightSetting", "AutoDayNight") != undefined) {
        let DAY = "";
        let NIGHT = "";
        ui.DayNight.setChecked(true);
        let a = Number(getStorageData("DayNightSetting", "DayTime"));
        let b = Number(getStorageData("DayNightSetting", "NightTime"));
        let c = Number(getStorageData("DayNightSetting", "NightTime"));
        let d = Number(getStorageData("DayNightSetting", "DayTime"));
        if (a > b) {
            var DAY = "次日";
        }
        if (c > d) {
            var NIGHT = "次日";
        }
        ui.nighttip.attr("textSize", "5sp");
        ui.nighttip.setText("浅色：" + getStorageData("DayNightSetting", "DayTime") + "时-" + DAY + getStorageData("DayNightSetting", "NightTime") + "时  夜间：" + getStorageData("DayNightSetting", "NightTime") + "时-" + NIGHT + getStorageData("DayNightSetting", "DayTime") + "时");
    }
    if (getStorageData("ColorSetting", "GradientColor") != undefined) {
        ui.Gradient.setChecked(true);
    }
    if (getStorageData("uiProtectSetting", "UiProtect") != undefined) {
        ui.uiProtect.setChecked(true);
        ui.tips.setText("");
    }

    ui.DayNight.on("click", (checked) => {
        if (ui.DayNight.isChecked() == true) {
            ui.DayNight.setChecked(false);
            let view = ui.inflate(
                <vertical padding="25 0" bg="{{context_framebg}}">
                            <img src="@drawable/ic_brightness_4_black_48dp" w="20" h="20" margin="5" tint="{{context_textColor}}"/>
                            <text text="*请输入0-23的小时数字" textSize="10" textColor="#90A6AE"/>
                            <text text="自动开启浅色主题时间" textColor="{{context_textColor}}" />
                            <input id="Day" textColor="{{context_textColor}}" inputType="number" hint="开启浅色时间（0～23数字）" textColorHint="#9E9E9E"/>
                            <text text="自动开启夜间主题时间" textColor="{{context_textColor}}"/>
                            <input id="Night" textColor="{{context_textColor}}" inputType="number" hint="开启深色时间（0～23数字）" textColorHint="#9E9E9E"/>
                            <linear orientation="horizontal" align="left" margin="0" paddingTop="0">
                                <card layout_weight="50" h="40" cardCornerRadius="5dp" cardElevation="0dp" gravity="center_vertical" margin="5"cardBackgroundColor="{{context_SettingsCard}}">
                                    <text id="Determine" text="确定" textStyle="bold" textColor="{{context_textColor}}" gravity="center" textSize="12sp" foreground="?attr/selectableItemBackground" clickable="true"/>
                                </card>
                                <card layout_weight="50" h="40" cardCornerRadius="5dp" cardElevation="0dp" gravity="center_vertical" margin="5"cardBackgroundColor="{{context_SettingsCard}}">
                                    <text id="cancel" text="取消" textStyle="bold" textColor="{{context_textColor}}" gravity="center" textSize="12sp" foreground="?attr/selectableItemBackground" clickable="true"/>
                                </card>
                            </linear>
                        </vertical>, null, false);
            view.Determine.click(() => {
                let day = String(view.Day.getText());
                let night = String(view.Night.getText());
                while (true) {
                    if (day.search(" ") >= 0) {
                        var day = day.replace(" ", "");
                    } else if (night.search(" ") >= 0) {
                        var night = night.replace(" ", "");
                    } else {
                        break;
                    }
                }
                if (day == "") {
                    view.Day.setError("您未输入任何内容");
                } else if (night == "") {
                    view.Night.setError("您未输入任何内容");
                } else if (day == night) {
                    view.Night.setError("浅色与夜间主题不能在同一时间切换");
                } else if (day < 0 || day > 23) {
                    view.Day.setError("时间数应大于等于0小于24");
                } else if (night < 0 || night > 23) {
                    view.Night.setError("时间数应大于等于0小于24");
                } else if (isNaN(night) == true) {
                    view.Night.setError("您输入的时间非数字");
                } else if (isNaN(day) == true) {
                    view.Day.setError("您输入的时间数非数字");
                } else {
                    DHK.dismiss();
                    ui.DayNight.setChecked(true);
                    setStorageData("DayNightSetting", "AutoDayNight", true);
                    setStorageData("DayNightSetting", "DayTime", day);
                    setStorageData("DayNightSetting", "NightTime", night);
                    let DAY = "";
                    let NIGHT = "";
                    ui.DayNight.setChecked(true);
                    let a = Number(getStorageData("DayNightSetting", "DayTime"));
                    let b = Number(getStorageData("DayNightSetting", "NightTime"));
                    let c = Number(getStorageData("DayNightSetting", "NightTime"));
                    let d = Number(getStorageData("DayNightSetting", "DayTime"));
                    if (a > b) {
                        var DAY = "次日";
                    }
                    if (c > d) {
                        var NIGHT = "次日";
                    }
                    ui.nighttip.attr("textSize", "5sp");
                    ui.nighttip.setText("浅色：" + getStorageData("DayNightSetting", "DayTime") + "时-" + DAY + getStorageData("DayNightSetting", "NightTime") + "时  夜间：" + getStorageData("DayNightSetting", "NightTime") + "时-" + NIGHT + getStorageData("DayNightSetting", "DayTime") + "时");
                }
            });
            view.cancel.click(() => {
                DHK.dismiss();
            })
            var DHK = dialogs.build({
                customView: view,
                wrapInScrollView: false,
                autoDismiss: false
            }).show();
        } else {
            ui.DayNight.setChecked(false);
            delStorageData("DayNightSetting", "AutoDayNight");
            ui.nighttip.attr("textSize", "0sp");
            ui.nighttip.setText("");
        }
    });

    ui.Gradient.on("check", (checked) => {
        if (ui.Gradient.isChecked() == true) {
            ui.Gradient.setChecked(true);
            setStorageData("ColorSetting", "GradientColor", true);
        } else {
            ui.Gradient.setChecked(false);
            delStorageData("ColorSetting", "GradientColor");
        }
    });

    ui.uiProtect.on("check", (checked) => {
        if (ui.uiProtect.isChecked() == true) {
            ui.uiProtect.setChecked(true);
            ui.tips.setText("");
            setStorageData("uiProtectSetting", "UiProtect", true);
        } else {
            ui.uiProtect.setChecked(false);
            delStorageData("uiProtectSetting", "UiProtect");
            ui.tips.setText("* 推荐开启以防止直接退出导致界面关闭");
        }
    });
    ui.DeleteJsSettings.click(() => {
        let Deletejsview = ui.inflate(
            <frame background="{{context_framebg}}" padding="5">
                        <scroll>
                            <vertical>
                                <linear orientation="horizontal" gravity="left||center">
                                    <img src="{{getStorageData('APPbasic', 'URLprefix')}}/OrangeJs-Logo.png" w="30" h="30" margin="5 0"/>
                                    <img src="{{context_Logo}}" w="85" h="35"/>
                                    <linear orientation="horizontal" w="match_parent" gravity="right||center">
                                        <text text="删除脚本配置" textStyle="bold" textSize="20" textColor="{{context_textColor}}" marginRight="5"/>
                                    </linear>
                                </linear>
                                <View bg="{{context_SettingsCard}}" w="*" h="1" margin="5"/>
                                <list id="alljslist">
                                    <card w="*" h="50" cardCornerRadius="10dp" cardElevation="0dp" gravity="center_vertical" margin="5" cardBackgroundColor="{{context_SettingsCard}}">
                                        <linear orientation="horizontal" gravity="center|left">
                                            <img id="checkthisjs" src="{{icon}}" w="30" h="30" tint="{{context_textColor}}" marginLeft="5"/>
                                            <text id="name" textSize="16sp" gravity="left||center" textColor="{{context_textColor}}" text="{{name}}"/>
                                        </linear>
                                        <linear gravity="center||right" marginRight="20">
                                            <img id="deleteItem" src="@drawable/ic_delete_forever_black_48dp" w="35" h="35" tint="{{context_textColor}}" foreground="?attr/selectableItemBackground" clickable="true"/>
                                        </linear>
                                    </card>
                                </list>
                                <text id="Ttip" text="已经到底啦" textSize="10" textColor="{{context_textColor}}" margin="5 5 5 100" alpha="0.5" gravity="bottom||center"/>
                            </vertical>
                        </scroll>
                        <card w="*" h="50" cardCornerRadius="10dp" cardElevation="0dp" layout_gravity="bottom" margin="5" cardBackgroundColor="{{context_SettingsCard}}">
                            <linear orientation="horizontal" gravity="center|left">
                                <img id="checkAll" src="@drawable/ic_panorama_fish_eye_black_48dp" w="30" h="30" tint="{{context_textColor}}" marginLeft="5"/>
                                <text id="checkAllText" textSize="16sp" gravity="left||center" textColor="{{context_textColor}}" text="全选"/>
                            </linear>
                            <linear gravity="center||right" marginRight="20">
                                <card id="finaldel" h="0" cardCornerRadius="5dp" gravity="center_vertical" cardBackgroundColor="#000000" foreground="?attr/selectableItemBackground" clickable="true">
                                    <text text="删除" textColor="{{context_textColor}}" textSize="16sp" gravity="center" margin="10 0"/>
                                </card>
                            </linear>
                        </card>
                    </frame>, null, false);
        if (files.listDir("/sdcard/").length == 0) {
            Deletejsview.Ttip.setText("无存储权限，无法获取脚本配置");
        }
        Deletejsview.finaldel.click(() => {
            let view = ui.inflate(
                <vertical padding="25 0" bg="{{context_framebg}}">
                                    <linear orientation="horizontal" align="left" margin="0" paddingTop="0">
                                        <img src="@drawable/ic_warning_black_48dp" h="20" marginTop="3" tint="#F44336" layout_gravity="center"/>
                                        <text id="deleteTitle" textSize="15" textStyle="bold" margin="0 5 10 0" textColor="#F44336"/>
                                    </linear>
                                    <text id="deleteTips" textStyle="bold" textSize="10" margin="10 5 10 5" textColor="#D32F2F"/>
                                    <linear orientation="horizontal" align="left" margin="0" paddingTop="0">
                                        <card layout_weight="50" h="40" cardCornerRadius="5dp" cardElevation="0dp" gravity="center_vertical" margin="5"cardBackgroundColor="#F44336">
                                            <text id="Determine" text="确定删除" textStyle="bold" textColor="#FFFFFF" gravity="center" textSize="12sp" foreground="?attr/selectableItemBackground" clickable="true"/>
                                        </card>
                                        <card layout_weight="50" h="40" cardCornerRadius="5dp" cardElevation="0dp" gravity="center_vertical" margin="5"cardBackgroundColor="#4CAF50">
                                            <text id="cancel" text="取消删除" textStyle="bold" textColor="#FFFFFF" gravity="center" textSize="12sp" foreground="?attr/selectableItemBackground" clickable="true"/>
                                        </card>
                                    </linear>
                                </vertical>, null, false);
            view.deleteTitle.setText("您确定要删除以下" + context_ListDeletejs.length + "个脚本配置吗？");
            view.deleteTips.setText("本次将删除的脚本配置包含：\n“" + context_ListDeletejs + "”\n\n脚本配置一旦删除将无法恢复，若有个人文件存储于这些目录下请点击对应的单独删除按钮进行检查");
            view.cancel.click(() => {
                DHK.dismiss();
            });
            view.Determine.click(() => {
                let deleteWrong = [];
                for (let i = 0; i < context_ListDeletejs.length; i++) {
                    if (files.removeDir("/storage/emulated/0/OrangeJs/" + context_ListDeletejs[i]) == false) {
                        deleteWrong.push(context_ListDeletejs[i]);
                    }
                }
                if (deleteWrong.length == 0) {
                    DHK.dismiss();
                    let views = ui.inflate(
                        <vertical padding="25 0" bg="{{context_framebg}}">
                                                    <img src="@drawable/ic_check_circle_black_48dp" size="20" margin="5" gravity="center"tint="{{context_textColor}}"/>
                                                    <text id="deleteDone" textStyle="bold" textSize="15" margin="10" textColor="{{context_textColor}}" gravity="center"/>
                                                    <text id="deleteDonetips" textSize="10" margin="5" textColor="{{context_textColor}}" gravity="center"/>
                                                </vertical>
                    );
                    views.deleteDone.setText("已成功删除" + context_ListDeletejs.length + "个脚本配置");
                    views.deleteDonetips.setText("已被删除的脚本配置目录：\n“" + context_ListDeletejs + "”");
                    dialogs.build({
                        customView: views,
                        wrapInScrollView: false,
                        autoDismiss: true
                    }).show();
                } else {
                    DHK.dismiss();
                    let views = ui.inflate(
                        <vertical padding="25 0" bg="{{context_framebg}}">
                                                    <img src="@drawable/ic_cancel_black_48dp" size="20" margin="5" gravity="center" tint="{{context_textColor}}"/>
                                                    <text id="deleteDone" textStyle="bold" textSize="15" margin="10" textColor="{{context_textColor}}" gravity="center"/>
                                                    <text id="deleteDonetips" textSize="10" margin="5" textColor="{{context_textColor}}" gravity="center"/>
                                                </vertical>
                    );
                    views.deleteDone.setText("共有" + deleteWrong.length + "个脚本配置删除失败！");
                    views.deleteDonetips.setText("以下为本次删除失败的脚本配置目录：\n“" + deleteWrong + "”");
                    dialogs.build({
                        customView: views,
                        wrapInScrollView: false,
                        autoDismiss: true
                    }).show();
                }
                context_ListDeletejs = [];
                var items = [];
                for (let i = 0; i < files.listDir("/storage/emulated/0/OrangeJs").length; i++) {
                    if (files.isDir("/storage/emulated/0/OrangeJs/" + files.listDir("/storage/emulated/0/OrangeJs")[i]) == true) {
                        items.push({
                            icon: "@drawable/ic_panorama_fish_eye_black_48dp",
                            name: files.listDir("/storage/emulated/0/OrangeJs")[i]
                        });
                    }
                }
                Deletejsview.alljslist.setDataSource(items);
                Deletejsview.finaldel.attr("h", 0);
                Deletejsview.checkAllText.setText("全选");
                Deletejsview.checkAll.setSource("@drawable/ic_panorama_fish_eye_black_48dp");
            });
            let DHK = dialogs.build({
                customView: view,
                wrapInScrollView: false,
                autoDismiss: false
            }).show();
        });

        var items = [];
        for (let i = 0; i < files.listDir("/storage/emulated/0/OrangeJs").length; i++) {
            if (files.isDir("/storage/emulated/0/OrangeJs/" + files.listDir("/storage/emulated/0/OrangeJs")[i]) == true) {
                items.push({
                    icon: "@drawable/ic_panorama_fish_eye_black_48dp",
                    name: files.listDir("/storage/emulated/0/OrangeJs")[i]
                });
            }
        }
        Deletejsview.alljslist.setDataSource(items);
        context_ListDeletejs = [];
        Deletejsview.alljslist.on("item_click", function(item, i, itemView, alljslistView) {
            if (context_ListDeletejs.indexOf(item.name) >= 0) {
                context_ListDeletejs.remove(item.name);
                itemView.checkthisjs.setSource("@drawable/ic_panorama_fish_eye_black_48dp");
            } else {
                context_ListDeletejs.push(item.name);
                itemView.checkthisjs.setSource("@drawable/ic_check_circle_black_48dp");
            }
            if (context_ListDeletejs.length > 0) {
                Deletejsview.finaldel.attr("h", 35);
                Deletejsview.finaldel.attr("cardBackgroundColor", "#F44336");
                Deletejsview.checkAllText.setText("全选（已勾选" + context_ListDeletejs.length + "个）");
            } else {
                Deletejsview.finaldel.attr("h", 0);
                Deletejsview.checkAllText.setText("全选");
                Deletejsview.checkAll.setSource("@drawable/ic_panorama_fish_eye_black_48dp");
            }
            if (context_ListDeletejs.length > 0 && context_ListDeletejs.length == items.length) {
                Deletejsview.checkAll.setSource("@drawable/ic_check_circle_black_48dp");
                Deletejsview.finaldel.attr("h", 35);
                Deletejsview.finaldel.attr("cardBackgroundColor", "#F44336");
            } else if (context_ListDeletejs.length > 0) {
                Deletejsview.checkAll.setSource("@drawable/ic_panorama_fish_eye_black_48dp");
            }
        });

        Deletejsview.alljslist.on("item_bind", function(itemView, itemHolder) {
            itemView.deleteItem.on("click", function() {
                let item = itemHolder.item;
                let view = ui.inflate(
                    <vertical padding="25 0" bg="{{context_framebg}}">
                                                <linear orientation="horizontal" align="left" margin="0" paddingTop="0">
                                                    <img src="@drawable/ic_warning_black_48dp" h="20" marginTop="3" tint="#F44336" layout_gravity="center"/>
                                                    <text id="deleteTitle" textSize="15" textStyle="bold" margin="0 5 10 0" textColor="#F44336"/>
                                                </linear>
                                                <text id="deleteTips" textStyle="bold" textSize="10" margin="10 5 10 5" textColor="#D32F2F"/>
                                                <linear orientation="horizontal" align="left" margin="0" paddingTop="0">
                                                    <card layout_weight="50" h="40" cardCornerRadius="5dp" cardElevation="0dp" gravity="center_vertical" margin="5"cardBackgroundColor="#F44336">
                                                        <text id="Determine" text="确定删除" textStyle="bold" textColor="#FFFFFF" gravity="center" textSize="12sp" foreground="?attr/selectableItemBackground" clickable="true"/>
                                                    </card>
                                                    <card layout_weight="50" h="40" cardCornerRadius="5dp" cardElevation="0dp" gravity="center_vertical" margin="5"cardBackgroundColor="#4CAF50">
                                                        <text id="cancel" text="取消删除" textStyle="bold" textColor="#FFFFFF" gravity="center" textSize="12sp" foreground="?attr/selectableItemBackground" clickable="true"/>
                                                    </card>
                                                </linear>
                                            </vertical>, null, false);
                view.deleteTitle.setText("您确定要删除“" + item.name + "”的脚本配置吗？");
                if (files.isDir("/storage/emulated/0/OrangeJs/" + item.name) == true && files.isEmptyDir("/storage/emulated/0/OrangeJs/" + item.name) == true) {
                    view.deleteTips.setText("“" + item.name + "”是一个空文件夹，可以放心删除");
                } else if (files.isDir("/storage/emulated/0/OrangeJs/" + item.name) == true) {
                    var listFile = null;
                    for (let i = 0; i < files.listDir("/storage/emulated/0/OrangeJs/" + item.name).length; i++) {
                        if (listFile == null) {
                            var listFile = "“" + files.listDir("/storage/emulated/0/OrangeJs/" + item.name)[i] + "”";
                        } else {
                            var listFile = listFile + "，" + "“" + files.listDir("/storage/emulated/0/OrangeJs/" + item.name)[i] + "”";
                        }
                    }
                    view.deleteTips.setText("“" + item.name + "”是一个非空文件夹，其中包括" + listFile + "文件，请谨慎删除");
                } else if (files.isFile("/storage/emulated/0/OrangeJs/" + item.name) == true) {
                    view.deleteTips.setText("“" + item.name + "”是一个" + files.getExtension("/storage/emulated/0/OrangeJs/" + item.name) + "文件，请谨慎删除");
                }
                view.Determine.click(() => {
                    if (files.removeDir("/storage/emulated/0/OrangeJs/" + item.name) == true) {
                        items.splice(itemHolder.position, 1);
                        DHK.dismiss();
                        let views = ui.inflate(
                            <vertical padding="25 0" bg="{{context_framebg}}">
                                                                <img src="@drawable/ic_check_circle_black_48dp" size="20" margin="5" gravity="center"tint="{{context_textColor}}"/>
                                                                <text id="deleteDone" textStyle="bold" textSize="15" margin="10" textColor="{{context_textColor}}" gravity="center"/>
                                                            </vertical>
                        );
                        views.deleteDone.setText("已成功删除“" + item.name + "”的脚本配置");
                        dialogs.build({
                            customView: views,
                            wrapInScrollView: false,
                            autoDismiss: true
                        }).show();
                    } else {
                        DHK.dismiss();
                        let views = ui.inflate(
                            <vertical padding="25 0" bg="{{context_framebg}}">
                                                                <img src="@drawable/ic_cancel_black_48dp" size="20" margin="5" gravity="center" tint="{{context_textColor}}"/>
                                                                <text id="deleteDone" textStyle="bold" textSize="15" margin="10" textColor="{{context_textColor}}" gravity="center"/>
                                                            </vertical>
                        );
                        views.deleteDone.setText("删除“" + item.name + "”的脚本配置失败！");
                        dialogs.build({
                            customView: views,
                            wrapInScrollView: false,
                            autoDismiss: true
                        }).show();
                    }
                });
                view.cancel.click(() => {
                    DHK.dismiss();
                });
                let DHK = dialogs.build({
                    customView: view,
                    wrapInScrollView: false,
                    autoDismiss: false
                }).show();
            });
        })
        context_CheckAlldelete = false;
        Deletejsview.checkAll.on("click", function(item, i, itemView, alljslistView) {
            if (context_CheckAlldelete == true) {
                context_CheckAlldelete = false;
                Deletejsview.checkAll.setSource("@drawable/ic_panorama_fish_eye_black_48dp");
                var items = [];
                for (let i = 0; i < files.listDir("/storage/emulated/0/OrangeJs").length; i++) {
                    if (files.isDir("/storage/emulated/0/OrangeJs/" + files.listDir("/storage/emulated/0/OrangeJs")[i]) == true) {
                        items.push({
                            icon: "@drawable/ic_panorama_fish_eye_black_48dp",
                            name: files.listDir("/storage/emulated/0/OrangeJs")[i]
                        });
                    }
                }
                Deletejsview.alljslist.setDataSource(items);
                context_ListDeletejs = [];
            } else {
                context_CheckAlldelete = true;
                Deletejsview.checkAll.setSource("@drawable/ic_check_circle_black_48dp");
                var items = [];
                for (let i = 0; i < files.listDir("/storage/emulated/0/OrangeJs").length; i++) {
                    if (files.isDir("/storage/emulated/0/OrangeJs/" + files.listDir("/storage/emulated/0/OrangeJs")[i]) == true) {
                        items.push({
                            icon: "@drawable/ic_check_circle_black_48dp",
                            name: files.listDir("/storage/emulated/0/OrangeJs")[i]
                        });
                    }
                }
                Deletejsview.alljslist.setDataSource(items);
                context_ListDeletejs = [];
                for (let i = 0; i < items.length; i++) {
                    context_ListDeletejs.push(items[i].name);
                }
            }
            if (context_ListDeletejs.length > 0) {
                Deletejsview.checkAllText.setText("全选（已勾选" + context_ListDeletejs.length + "个）");
                Deletejsview.finaldel.attr("h", 35);
                Deletejsview.finaldel.attr("cardBackgroundColor", "#F44336");
            } else {
                Deletejsview.checkAllText.setText("全选");
                Deletejsview.finaldel.attr("h", 0);
            }
        });

        Array.prototype.indexOf = function(val) {
            for (var i = 0; i < this.length; i++) {
                if (this[i] == val) return i;
            }
            return -1;
        };
        Array.prototype.remove = function(val) {
            var index = this.indexOf(val);
            if (index > -1) {
                this.splice(index, 1);
            }
        };
        let deleteDHK = dialogs.build({
            customView: Deletejsview,
            wrapInScrollView: false,
            autoDismiss: false
        }).show();
    });

    ui.GetUiObject.click(() => {
        let a = auto.service;
        if (a == null) {
            let view = ui.inflate(
                <vertical padding="25 0" bg="{{context_framebg}}">
                            <img src="@drawable/ic_error_outline_black_48dp" h="35" tint="{{context_textColor}}" marginTop="5"/>
                            <text text="请开启“无障碍服务”" textSize="15" margin="5 0" textStyle="bold" gravity="center" textColor="{{context_textColor}}"/>
                            <text text="此功能需要“无障碍服务”，请前往主界面打开" textSize="10" gravity="center" margin="5 0 5 5" textColor="{{context_textColor}}" alpha="0.9"/>
                        </vertical>, null, false);
            dialogs.build({
                customView: view,
                wrapInScrollView: false,
                autoDismiss: false
            }).show();
        } else {
            let sharevalue = 'context_framebg="' + context_framebg + '";context_textColor="' + context_textColor + '";context_SettingsCard="' + context_SettingsCard + '";context_Logo="' + context_Logo + '";';
            engines.execScript("APP控件数据获取界面", "'ui';\n" + sharevalue + "\nUiObjectSearch();\n" + UiObjectSearch.toString());
        }
    });
    ui.CodeTest.click(() => {
        let a = auto.service;
        if (a == null) {
            let view = ui.inflate(
                <vertical padding="25 0" bg="{{context_framebg}}">
                            <img src="@drawable/ic_error_outline_black_48dp" h="35" tint="{{context_textColor}}" marginTop="5"/>
                            <text text="请开启“无障碍服务”" textSize="15" margin="5 0" textStyle="bold" gravity="center" textColor="{{context_textColor}}"/>
                            <text text="此功能需要“无障碍服务”，请前往主界面打开" textSize="10" gravity="center" margin="5 0 5 5" textColor="{{context_textColor}}" alpha="0.9"/>
                        </vertical>, null, false);
            dialogs.build({
                customView: view,
                wrapInScrollView: false,
                autoDismiss: false
            }).show();
        } else {
            engines.execScript("开关人员代码测试", "'ui';\nTESTCode();\n" + TESTCode.toString());
        }
    });
    ui.Appsettings.click(() => {
        app.startActivity({
            action: "android.intent.action.VIEW",
            packageName: "com.orange.orangejs",
            className: "com.stardust.auojs.inrt.SettingsActivity"
        });
    });
    var ZhuTiTu = [];

    if (context_TopPics != undefined && context_TopPics != "http://www.google.com") {
        ZhuTiTu.push({
            Picture: context_TopPics,
            TextofPic: '当前顶图'
        });
    }
    if (context_BottomPics != undefined && context_BottomPics != "http://www.google.com") {
        ZhuTiTu.push({
            Picture: context_BottomPics,
            TextofPic: '当前底图'
        });
    }
    if (context_DayOrNight == 1) {
        ZhuTiTu.push({
            Picture: getStorageData('APPbasic', 'URLprefix') + "/%E5%9B%BE%E7%89%87%E7%9B%B4%E9%93%BE/PicsArt_05-04-10.09.31.jpg",
            TextofPic: "示例顶图",
            CopyrightOfPicture: "©照明娱乐Illumination Entertainment"
        }, {
            Picture: getStorageData('APPbasic', 'URLprefix') + "/%E5%9B%BE%E7%89%87%E7%9B%B4%E9%93%BE/PicsArt_04-30-08.00.59.jpg",
            TextofPic: "示例顶图",
            CopyrightOfPicture: "©照明娱乐Illumination Entertainment"
        }, {
            Picture: getStorageData('APPbasic', 'URLprefix') + "/%E5%9B%BE%E7%89%87%E7%9B%B4%E9%93%BE/PicsArt_05-04-10.06.03.jpg",
            TextofPic: "示例顶图",
            CopyrightOfPicture: "©照明娱乐Illumination Entertainment"
        }, {
            Picture: getStorageData('APPbasic', 'URLprefix') + "/%E5%9B%BE%E7%89%87%E7%9B%B4%E9%93%BE/PicsArt_05-04-10.06.39.jpg",
            TextofPic: "示例顶图",
            CopyrightOfPicture: "©照明娱乐Illumination Entertainment"
        }, {
            Picture: getStorageData('APPbasic', 'URLprefix') + "/%E5%9B%BE%E7%89%87%E7%9B%B4%E9%93%BE/PicsArt_05-04-10.07.53.jpg",
            TextofPic: "示例顶图",
            CopyrightOfPicture: "©照明娱乐Illumination Entertainment"
        }, {
            Picture: getStorageData('APPbasic', 'URLprefix') + "/%E5%9B%BE%E7%89%87%E7%9B%B4%E9%93%BE/PicsArt_05-04-10.09.03.jpg",
            TextofPic: "示例顶图",
            CopyrightOfPicture: "©照明娱乐Illumination Entertainment"
        }, {
            Picture: getStorageData('APPbasic', 'URLprefix') + "/%E5%9B%BE%E7%89%87%E7%9B%B4%E9%93%BE/PicsArt_04-30-07.56.51.jpg",
            TextofPic: "示例底图",
            CopyrightOfPicture: "©照明娱乐Illumination Entertainment"
        }, {
            Picture: getStorageData('APPbasic', 'URLprefix') + "/%E5%9B%BE%E7%89%87%E7%9B%B4%E9%93%BE/PicsArt_04-30-07.19.32.jpg",
            TextofPic: "示例底图",
            CopyrightOfPicture: "©照明娱乐Illumination Entertainment"
        }, {
            Picture: getStorageData('APPbasic', 'URLprefix') + "/%E5%9B%BE%E7%89%87%E7%9B%B4%E9%93%BE/PicsArt_05-04-10.13.12.jpg",
            TextofPic: "示例底图",
            CopyrightOfPicture: "©照明娱乐Illumination Entertainment"
        });
    } else if (context_DayOrNight == 0) {
        ZhuTiTu.push({
            Picture: getStorageData('APPbasic', 'URLprefix') + "/%E5%9B%BE%E7%89%87%E7%9B%B4%E9%93%BE/%E5%A4%9C%E9%97%B4%E7%A4%BA%E4%BE%8B%E5%9B%BE01.jpg",
            TextofPic: "示例顶图",
            CopyrightOfPicture: "©迪士尼Disney"
        }, {
            Picture: getStorageData('APPbasic', 'URLprefix') + "/%E5%9B%BE%E7%89%87%E7%9B%B4%E9%93%BE/%E5%A4%9C%E9%97%B4%E7%A4%BA%E4%BE%8B%E5%9B%BE02.jpg",
            TextofPic: "示例顶图",
            CopyrightOfPicture: "©迪士尼Disney"
        }, {
            Picture: getStorageData('APPbasic', 'URLprefix') + "/%E5%9B%BE%E7%89%87%E7%9B%B4%E9%93%BE/%E5%A4%9C%E9%97%B4%E7%A4%BA%E4%BE%8B%E5%9B%BE03.jpg",
            TextofPic: "示例顶图",
            CopyrightOfPicture: "©迪士尼Disney"
        }, {
            Picture: getStorageData('APPbasic', 'URLprefix') + "/%E5%9B%BE%E7%89%87%E7%9B%B4%E9%93%BE/%E5%A4%9C%E9%97%B4%E7%A4%BA%E4%BE%8B%E5%9B%BE04.jpg",
            TextofPic: "示例顶图",
            CopyrightOfPicture: "©迪士尼Disney"
        }, {
            Picture: getStorageData('APPbasic', 'URLprefix') + "/%E5%9B%BE%E7%89%87%E7%9B%B4%E9%93%BE/%E5%A4%9C%E9%97%B4%E7%A4%BA%E4%BE%8B%E5%9B%BE05.png",
            TextofPic: "示例顶图",
            CopyrightOfPicture: "©《星际穿越》(Interstellar)"
        }, {
            Picture: getStorageData('APPbasic', 'URLprefix') + "/%E5%9B%BE%E7%89%87%E7%9B%B4%E9%93%BE/%E5%A4%9C%E9%97%B4%E7%A4%BA%E4%BE%8B%E5%9B%BE07.jpg",
            TextofPic: "示例顶图",
            CopyrightOfPicture: "©《刺猬索尼克》(Sonic the Hedgehog)"
        }, {
            Picture: getStorageData('APPbasic', 'URLprefix') + "/%E5%9B%BE%E7%89%87%E7%9B%B4%E9%93%BE/%E5%A4%9C%E9%97%B4%E7%A4%BA%E4%BE%8B%E5%9B%BE08.jpg",
            TextofPic: "示例顶图",
            CopyrightOfPicture: "©迪士尼Disney"
        }, {
            Picture: getStorageData('APPbasic', 'URLprefix') + "/%E5%9B%BE%E7%89%87%E7%9B%B4%E9%93%BE/%E5%A4%9C%E9%97%B4%E7%A4%BA%E4%BE%8B%E5%9B%BE09.jpg",
            TextofPic: "示例底图",
            CopyrightOfPicture: "©《为全人类》(For All Mankind)"
        }, {
            Picture: getStorageData('APPbasic', 'URLprefix') + "/%E5%9B%BE%E7%89%87%E7%9B%B4%E9%93%BE/%E5%A4%9C%E9%97%B4%E7%A4%BA%E4%BE%8B%E5%9B%BE10.jpg",
            TextofPic: "示例顶图",
            CopyrightOfPicture: "©迪士尼Disney"
        }, {
            Picture: getStorageData('APPbasic', 'URLprefix') + "/%E5%9B%BE%E7%89%87%E7%9B%B4%E9%93%BE/%E5%A4%9C%E9%97%B4%E7%A4%BA%E4%BE%8B%E5%9B%BE11.png",
            TextofPic: "示例顶图",
            CopyrightOfPicture: "©索尼Sony"
        }, {
            Picture: getStorageData('APPbasic', 'URLprefix') + "/%E5%9B%BE%E7%89%87%E7%9B%B4%E9%93%BE/%E5%A4%9C%E9%97%B4%E7%A4%BA%E4%BE%8B%E5%9B%BE12.jpg",
            TextofPic: "示例顶图",
            CopyrightOfPicture: "©《哥斯拉》(Godzilla: King of the Monsters)"
        }, {
            Picture: getStorageData('APPbasic', 'URLprefix') + "/%E5%9B%BE%E7%89%87%E7%9B%B4%E9%93%BE/%E5%A4%9C%E9%97%B4%E7%A4%BA%E4%BE%8B%E5%9B%BE14.jpg",
            TextofPic: "示例顶图",
            CopyrightOfPicture: "©迪士尼Disney"
        }, {
            Picture: getStorageData('APPbasic', 'URLprefix') + "/%E5%9B%BE%E7%89%87%E7%9B%B4%E9%93%BE/%E5%A4%9C%E9%97%B4%E7%A4%BA%E4%BE%8B%E5%9B%BE15.jpg",
            TextofPic: "示例顶图",
            CopyrightOfPicture: "©《蜘蛛侠》"
        }, {
            Picture: getStorageData('APPbasic', 'URLprefix') + "/%E5%9B%BE%E7%89%87%E7%9B%B4%E9%93%BE/%E5%A4%9C%E9%97%B4%E7%A4%BA%E4%BE%8B%E5%9B%BE17.jpg",
            TextofPic: "示例顶图",
            CopyrightOfPicture: "©《少年派的奇幻漂流》(Life of Pi)"
        });
    }
    ui.ZhuTiTu.setDataSource(ZhuTiTu);
}

function TalkToDeveloper() {
    context_NowUi = "TalkToDeveloper";
    ui.layout(
        <frame bg="{{context_framebg}}" w="*" h="*" marginTop="25">
            <vertical align="left">
                <linear orientation="horizontal" gravity="left||center" marginBottom="5">
                    <img src="{{getStorageData('APPbasic', 'URLprefix')}}/OrangeJs-Logo.png" w="30" h="30" margin="5 0"/>
                    <img src="{{context_Logo}}" w="85" h="35"/>
                    <linear orientation="horizontal" w="match_parent" gravity="right||center">
                        <text text="反馈问题" textStyle="bold" textSize="25" textColor="{{context_textColor}}" marginRight="5"/>
                    </linear>
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
        clearInterval(contextJdtX);
        android.webkit.WebStorage.getInstance().deleteAllData();
        mainUi();
    });
    contextJdtX = setInterval(() => {
        try {
            var P = ui.webview.getProgress();
            var T = ui.webview.getTitle();
            if (P == 100) {
                ui.run(() => {
                    ui.progressX.setVisibility(8);
                });
            } else {
                ui.run(() => {
                    ui.progressX.setVisibility(0);
                    ui.progressX.progress = P;
                });
            }
        } catch (e) {
            log(e);
        }
    }, 100);
}

function AboutApp() {
    context_NowUi = "AboutApp";
    ui.layout(
        <frame w="*" h="*" background="{{context_framebg}}">
            <scroll bg="{{context_framebg}}">
                <vertical align="left">
                    <img src="{{getStorageData('APPbasic', 'URLprefix')}}/OrangeJs-Logo.png" marginTop="50" w="auto"h="50" gravity="center"/>//应用logo
                    <img src="{{context_Logo}}" w="auto"h="50" gravity="center"/>
                    <card  h="5" marginTop="10" cardCornerRadius="0dp"
                    cardElevation="0dp" gravity="center_vertical">
                    <vertical padding="0 0" h="auto">
                    </vertical>
                    <View bg="#FFEA3324" h="*" w="*"/>
                </card>
                <text text="软件及脚本开发者" color="{{context_textColor}}" textSize="10" textStyle="normal" marginLeft="5"/>
                <img src="{{getStorageData('APPbasic', 'URLprefix')}}/authorName.png" layout_gravity="center" w="150" tint="{{context_textColor}}" h="30" />//作者名
                <card  h="5" marginTop="10" cardCornerRadius="0dp"
                cardElevation="0dp" gravity="center_vertical">
                <vertical padding="0 0" h="auto">
                </vertical>
                <View bg="#FFFF711F" h="*" w="*"/>
            </card>
            <text text="软件版本" color="{{context_textColor}}" textSize="10" textStyle="normal" marginLeft="5"/>
            <text id="AppVision" color="{{context_textColor}}" textSize="20" textStyle="normal" gravity="center"/>
            <card  h="5" marginTop="10" cardCornerRadius="0dp"
            cardElevation="0dp" gravity="center_vertical">
            <vertical padding="0 0" h="auto">
            </vertical>
            <View bg="#FFFABB06" h="*" w="*"/>
        </card>
        <text text="设备信息" color="{{context_textColor}}" textSize="10" textStyle="normal" marginLeft="5"/>
        <text id="DeviceInformation" color="{{context_textColor}}" textSize="15" textStyle="normal" gravity="center"/>
        
        <card  h="5" marginTop="10" cardCornerRadius="0dp"
        cardElevation="0dp" gravity="center_vertical">
        <vertical padding="0 0" h="auto">
        </vertical>
        <View bg="#FF34A853" h="*" w="*"/>
        </card>
        <text text="项目开源地址" color="{{context_textColor}}" textSize="10" textStyle="normal" marginLeft="5"/>
        <text id="OpenSource" autoLink="web" color="{{context_textColor}}" textSize="15" textStyle="normal" gravity="left" margin="10 0"/>
        <card  h="5" marginTop="10" cardCornerRadius="0dp"
        cardElevation="0dp" gravity="center_vertical">
        <vertical padding="0 0" h="auto">
        </vertical>
        <View bg="#FF4285F4" h="*" w="*"/>
        </card>
        <text id="Ttip"  color="{{context_textColor}}" textSize="15" textStyle="normal" marginTop="5" gravity="center"/>
        <card  h="5" margin="0 10 0 10" cardCornerRadius="0dp"
        cardElevation="0dp" gravity="center_vertical">
        <vertical padding="0 0" h="auto">
        </vertical>
        <View bg="#FF9D41F9" h="*" w="*"/>
        </card>
        </vertical>
        </scroll>
        <fab id="Back" w="auto" h="auto" src="@drawable/ic_arrow_back_black_48dp"
        margin="0 0 15 15" layout_gravity="bottom|right" tint="#ffffff" />
        </frame>
    );
    ui.AppVision.text(app.versionName + "(" + app.versionCode + ")");
    ui.OpenSource.text("Github：https://github.com/Orange-shirt/OrangeJs" + "\nGitee：https://gitee.com/Orange_shirt/OrangeJs\nCoding：https://orange-shirt.coding.net/p/OrangeJs/git");
    ui.DeviceInformation.text("设备品牌/型号：" + device.brand + "(" + device.model + ")\n" + "安卓版本：" + device.release + device.baseOS + "\n修订版本号：" + device.buildId + "\n设备分辨率：" + device.height + "*" + device.width);
    ui.Ttip.text("此软件/脚本均为兴趣制作，仅供学习参考交流使用\n请勿将本软件/脚本用于任何商业用途");
    ui.Back.click(() => {
        mainUi();
    });
}

function SP() {
    context_NowUi = "SP";
    events.removeAllListeners();
    ui.layout(
        <frame background="{{context_framebg}}">
            <vertical align="left" margin="10 25 10 0">
                <linear orientation="horizontal" gravity="left||center">
                    <img src="{{getStorageData('APPbasic', 'URLprefix')}}/OrangeJs-Logo.png" w="30" h="30" margin="5 0"/>
                    <img src="{{context_Logo}}" w="85" h="35"/>
                    <linear orientation="horizontal" w="match_parent" gravity="right||center">
                        <text text="隐私与安全" textStyle="bold" textSize="25" textColor="{{context_textColor}}" marginRight="5"/>
                    </linear>
                </linear>
                <scroll>
                    <linear orientation="vertical" align="left" margin="0" paddingTop="0">
                        <text id="Privacy" color="{{context_textColor}}" textStyle="bold" typeface="sans"/>
                        <frame id="Q0" marginTop="5">
                            <text text="软件需要什么权限？" gravity="left" textSize="15" color="{{context_textColor}}" textStyle="bold" typeface="sans"/>
                            <linear gravity="center||right" marginRight="10">
                                <img id="Q0img" marginRight="25" src="@drawable/ic_chevron_left_black_48dp" w="15" h="15" circle="true" tint="{{context_textColor}}" foreground="?attr/selectableItemBackground" clickable="true"/>
                            </linear>
                        </frame>
                        <text id="A0" textSize="0" typeface="sans" color="{{context_textColor}}"/>
                        <frame id="Q1" marginTop="5">
                            <text text="为什么要收集信息？" textSize="15" color="{{context_textColor}}" textStyle="bold" typeface="sans"/>
                            <linear gravity="center||right" marginRight="10">
                                <img id="Q1img" marginRight="25" src="@drawable/ic_chevron_left_black_48dp" w="15" h="15" circle="true" tint="{{context_textColor}}" foreground="?attr/selectableItemBackground" clickable="true"/>
                            </linear>
                        </frame>
                        <text id="A1" textSize="0" typeface="sans" color="{{context_textColor}}"/>
                        <frame id="Q2" marginTop="5">
                            <text text="本软件会收集哪些信息？" textSize="15" color="{{context_textColor}}" textStyle="bold" typeface="sans"/>
                            <linear gravity="center||right" marginRight="10">
                                <img id="Q2img" marginRight="25" src="@drawable/ic_chevron_left_black_48dp" w="15" h="15" circle="true" tint="{{context_textColor}}" foreground="?attr/selectableItemBackground" clickable="true"/>
                            </linear>
                        </frame>
                        <text id="A2"  textSize="0" typeface="sans" color="{{context_textColor}}"/>
                    </linear>
                </scroll>
            </vertical>
            <fab id="back" w="auto" h="auto" src="@drawable/ic_arrow_back_black_48dp"
            margin="16" layout_gravity="bottom|right" tint="#ffffff" />
        </frame>
    );

    ui.Privacy.text("隐私安全事关重大！脚本类软件更是无所不能！因此，隐私安全变得极为重要，保护隐私安全绝对是不可忽视的！\n\n作为一名开发者，在开发本软件、脚本以及各项功能时，我都在考虑该如何合理收集信息以及保持信息安全。\n\n本文档将以普通人也能理解的语言详细说明本软件（包括所有脚本）对您信息的收集及处理方式等，请您仔细阅读！");
    ui.A0.setText("软件的正常运行需要“存储空间”权限！因为本软件/脚本内的设置项目都是以文件方式保存在您手机中的。" +
        "\n\n脚本的运行需要“无障碍权限”来执行各种自动操作，例如:点击，滑动，获取文字等。" +
        "\n\n“悬浮窗权限”是为了显示“停止运行脚本”等需要此权限才能使用的悬浮控件" +
        "\n\n“联网权限”是本软件最重要的权限，软件的所有源码存储在网络，您必须联网获取后才能正常运行。这样的设计是为了方便更新以及提升体验，因此您无需操作即可同步最新代码");
    ui.A1.text("软件只会在必要的前提下才会收集信息！\n例如：\n软件可能需要收集您的“应用版本号”、“设备名称”、“设备型号”、“系统版本”等信息来查找问题以及改善使用体验；");
    ui.A2.text("本软件将收集的信息分为两类，分别为“个人信息（可辨识您身份的信息，如：电话、QQ、IP地址等）" +
        "”与“非个人信息（除个人信息之外的信息，例如：手机品牌、型号、分辨率、系统版本等）”，本软件收集信息都是在必要前提下再进行的，且目前除反馈时所需收集的信息外，其它一切信息全部都保存在您的设备当中，对于收集的所有信息本软件都绝对不会在未经您允许的情况下传播给任何人" +
        "");
    ui.Q0.click(() => { //软件需要什么权限?
        if (ui.A0.textSize == 0) {
            ui.Q0img.rotation = "270";
            ui.A0.textSize = "15";
        } else {
            ui.Q0img.rotation = "360";
            ui.A0.textSize = "0";
        }
    });
    ui.Q0img.click(() => {
        if (ui.A0.textSize == 0) {
            ui.Q0img.rotation = "270";
            ui.A0.textSize = "15";
        } else {
            ui.Q0img.rotation = "360";
            ui.A0.textSize = "0";
        }
    });

    ui.Q1.click(() => { //为什么要收集信息？
        if (ui.A1.textSize == 0) {
            ui.Q1img.rotation = "270";
            ui.A1.textSize = "15";
        } else {
            ui.Q1img.rotation = "360";
            ui.A1.textSize = "0";
        }
    });
    ui.Q1img.click(() => {
        if (ui.A1.textSize == 0) {
            ui.Q1img.rotation = "270";
            ui.A1.textSize = "15";
        } else {
            ui.Q1img.rotation = "360";
            ui.A1.textSize = "0";
        }
    });

    ui.Q2.click(() => { //本软件会收集哪些信息?
        if (ui.A2.textSize == 0) {
            ui.Q2img.rotation = "270";
            ui.A2.textSize = "15";
        } else {
            ui.Q2img.rotation = "360";
            ui.A2.textSize = "0";
        }
    });
    ui.Q2img.click(() => {
        if (ui.A2.textSize == 0) {
            ui.Q2img.rotation = "270";
            ui.A2.textSize = "15";
        } else {
            ui.Q2img.rotation = "360";
            ui.A2.textSize = "0";
        }
    });

    ui.back.click(() => {
        mainUi();
    });
}

function TESTCode() {
    context_framebg = importClass(android.view.WindowManager);
    ui.statusBarColor("#000000");
    ui.layout(
        <vertical bg="#000000">
            <input id="x" color="#FFFFFF" gravity="left|top" lines="32" inputType="textAutoComplete" textSize="16sp" hint="请输入要运行的代码" textColorHint="#9E9E9E" />
            <linear orientation="horizontal" align="center" margin="5 0 5 0" weightSum="10">
                <button id="ru" layout_weight="5" h="50" bg="#4CAF50" color="#FFFFFF" marginRight="5" text="运行" gravity="center" />
                <button id="qk" layout_weight="5" h="50" bg="#FF5722" color="#FFFFFF" marginLeft="5" text="清空" gravity="center" />
            </linear>
            <button id="con" w="*" h="50" bg="#2196F3" color="#FFFFFF" margin="5 5 5 0" text="查看日志" gravity="center" />
            <text text="* 使用 Auto.js(4.1) 作为脚本引擎" color="#9e9e9e" textSize="10" marginTop="10" gravity="center" />
        </vertical>
    );
    events.on("状态", function(words) {
        if (words == "结束") {
            ui.ru.text("运行");
        }
    });
    activity.getWindow().setSoftInputMode(WindowManager.LayoutParams.SOFT_INPUT_ADJUST_RESIZE);
    ui.ru.on("click", () => {
        var text = 'if (engines.all()[0] == engines.myEngine()) {\n        序号 = 1\n    } else {\n        序号 = 0\n    }\n    try {\n' + ui.x.text() + '\n    } catch (error) {\n        let 行号 = error.stack.match(/(.js:(.*)\\n)/g).toString().replace(/(\.js:)|\\n/, "")\n        console.error(error.stack.replace(行号, 行号 - 6), "\\n" , error)\n        toast(error.stack.replace(行号, 行号 - 6) + "\\n" + error)\n    };\n    engines.all()[序号].emit("状态", "结束");';
        if (text != "") {
            switch (ui.ru.text()) {
                case "运行":
                    ui.ru.text("停止");
                    当前引擎 = engines.execScript("测试运行", text);
                    break;
                case "停止":
                    ui.ru.text("运行");
                    当前引擎.getEngine().forceStop()
                    break;
            }
        } else {
            toastLog("没有输入任何代码");
        }
    });
    ui.qk.on("click", () => {
        let view = ui.inflate(
            <vertical padding="25 0" bg="#000000">
                        <text id="tip" textSize="15" textStyle="bold" textColor="#FFFFFF" gravity="left" margin="5"/>
                        <linear orientation="horizontal" align="left" margin="0" paddingTop="0">
                            <card layout_weight="50" h="40" cardCornerRadius="5dp" cardElevation="0dp" gravity="center_vertical" margin="5" cardBackgroundColor="#FF5722">
                                <text id="Determine" text="确定" textStyle="bold" textColor="#FFFFFF" gravity="center" textSize="12sp" foreground="?attr/selectableItemBackground" clickable="true"/>
                            </card>
                            <card layout_weight="50" h="40" cardCornerRadius="5dp" cardElevation="0dp" gravity="center_vertical" margin="5" cardBackgroundColor="#4CAF50">
                                <text id="cancel" text="取消" textStyle="bold" textColor="#FFFFFF" gravity="center" textSize="12sp" foreground="?attr/selectableItemBackground" clickable="true"/>
                            </card>
                        </linear>
                    </vertical>, null, false);
        view.tip.setText("您确定要清空全部代码吗？\n此操作将无法撤销");
        view.Determine.click(() => {
            ui.x.setText("");
            DHK.dismiss();
        });
        view.cancel.click(() => {
            DHK.dismiss();
        });
        let DHK = dialogs.build({
            customView: view,
            wrapInScrollView: false,
            autoDismiss: false,
            cancelable: false
        }).show();
    });
    ui.con.on("click", () => {
        app.startActivity("console");
    });

    let view = ui.inflate(
        <vertical bg="#000000" padding="25 0 25 0">
            <img src="@drawable/ic_report_problem_black_48dp" h="35" tint="#FFFFFF" margin="5"/>
            <text id="tip" textSize="15" textStyle="bold" textColor="#FFFFFF" gravity="left" margin="5"/>
        </vertical>
    );
    view.tip.setText("注意！此功能仅供开发人员使用，小白用户请严格在开发者指导下使用！\n\n请不要运行来路不明的代码，以免造成隐私信息泄露等不可挽回的严重后果！");
    dialogs.build({
        customView: view,
        wrapInScrollView: false,
        autoDismiss: true
    }).show();
    //感谢 @抠脚本人 对此处代码的优化 ：D
}

var ResultIntent = {
    intentCallback: {},
    init: function() {
        activity.getEventEmitter().on("activity_result", (requestCode, resultCode, data) => {
            this.onActivityResult(requestCode, resultCode, data);
        });
    },
    startActivityForResult: function(intent, callback) {
        var i;
        for (i = 0; i < 65536; i++) {
            if (!(i in this.intentCallback)) break;
        }
        if (i >= 65536) {
            toast("启动Intent失败：同时请求的Intent过多");
            return;
        }
        this.intentCallback[i] = callback;
        activity.startActivityForResult(intent, i);
    },
    onActivityResult: function(requestCode, resultCode, data) {
        var cb = this.intentCallback[requestCode];
        if (!cb) return;
        delete this.intentCallback[requestCode];
        cb(resultCode, data);
    }
};
ResultIntent.init();

function URIUtils_uriToFile(uri) { //Source : https://www.cnblogs.com/panhouye/archive/2017/04/23/6751710.html
    var r = null,
        cursor, column_index, selection = null,
        selectionArgs = null,
        isKitKat = android.os.Build.VERSION.SDK_INT >= 19,
        docs;
    if (uri.getScheme().equalsIgnoreCase("content")) {
        if (isKitKat && android.provider.DocumentsContract.isDocumentUri(activity, uri)) {
            if (String(uri.getAuthority()) == "com.android.externalstorage.documents") {
                docs = String(android.provider.DocumentsContract.getDocumentId(uri)).split(":");
                if (docs[0] == "primary") {
                    return android.os.Environment.getExternalStorageDirectory() + "/" + docs[1];
                }
            } else if (String(uri.getAuthority()) == "com.android.providers.downloads.documents") {
                uri = android.content.ContentUris.withAppendedId(
                    android.net.Uri.parse("content://downloads/public_downloads"),
                    parseInt(android.provider.DocumentsContract.getDocumentId(uri))
                );
            } else if (String(uri.getAuthority()) == "com.android.providers.media.documents") {
                docs = String(android.provider.DocumentsContract.getDocumentId(uri)).split(":");
                if (docs[0] == "image") {
                    uri = android.provider.MediaStore.Images.Media.EXTERNAL_CONTENT_URI;
                } else if (docs[0] == "video") {
                    uri = android.provider.MediaStore.Video.Media.EXTERNAL_CONTENT_URI;
                } else if (docs[0] == "audio") {
                    uri = android.provider.MediaStore.Audio.Media.EXTERNAL_CONTENT_URI;
                }
                selection = "_id=?";
                selectionArgs = [docs[1]];
            }
        }
        try {
            cursor = activity.getContentResolver().query(uri, ["_data"], selection, selectionArgs, null);
            if (cursor && cursor.moveToFirst()) {
                r = String(cursor.getString(cursor.getColumnIndexOrThrow("_data")));
            }
        } catch (e) {
            log(e)
        }
        if (cursor) cursor.close();
        return r;
    } else if (uri.getScheme().equalsIgnoreCase("file")) {
        return String(uri.getPath());
    }
    return null;
}

function startChooseFile(mimeType, callback, Type) {
    var i = new android.content.Intent(android.content.Intent.ACTION_GET_CONTENT);
    i.setType(mimeType);
    ResultIntent.startActivityForResult(i, function(resultCode, data) {
        if (resultCode != activity.RESULT_OK) return;
        let fileurlselect = URIUtils_uriToFile(data.getData());
        if (fileurlselect != null && fileurlselect != undefined && Type == "选择底图") {
            if (context_DayOrNight == 0) {
                setStorageData("NightUiPicture", "BottomPics", "file://" + fileurlselect);
                delStorageData("NightUiPicture", "BottomPicsCopyright");
                context_BottomPics = "file://" + fileurlselect;
                context_BottomPics_Copyright = "";
            } else if (context_DayOrNight == 1) {
                setStorageData("DayUiPicture", "BottomPics", "file://" + fileurlselect);
                delStorageData("DayUiPicture", "BottomPicsCopyright");
                context_BottomPics = "file://" + fileurlselect;
                context_BottomPics_Copyright = "";
            }
            let view = ui.inflate(
                <vertical padding="25 0" bg="{{context_framebg}}">
                            <text text="已将您的本地图片设为底图" textStyle="bold" textSize="15" margin="10" textColor="#777777" gravity="center"/>
                        </vertical>
            );
            dialogs.build({
                customView: view,
                wrapInScrollView: false,
                autoDismiss: false
            }).show();
            SettingsUI();
        } else if (fileurlselect != null && fileurlselect != undefined && Type == "选择顶图") {
            if (context_DayOrNight == 0) {
                setStorageData("NightUiPicture", "TopPics", "file://" + fileurlselect);
                delStorageData("NightUiPicture", "TopPicsCopyright");
                context_TopPics = "file://" + fileurlselect;
                context_TopPics_Copyright = "";
            } else if (context_DayOrNight == 1) {
                setStorageData("DayUiPicture", "TopPics", "file://" + fileurlselect);
                delStorageData("DayUiPicture", "TopPicsCopyright");
                context_TopPics = "file://" + fileurlselect;
                context_TopPics_Copyright = "";
            }
            let view = ui.inflate(
                <vertical padding="25 0" bg="{{context_framebg}}">
                            <text text="已将您的本地图片设为顶图" textStyle="bold" textSize="15" margin="10" textColor="#777777" gravity="center"/>
                        </vertical>
            );
            dialogs.build({
                customView: view,
                wrapInScrollView: false,
                autoDismiss: false
            }).show();
            SettingsUI();
        }
    });
}

function shareFile(file, type) {
    importPackage(android.content);
    importClass(android.net.Uri);
    importClass(java.io.File);
    importClass(android.provider.MediaStore);
    let f = new File(file);
    let uri = Uri.fromFile(f);
    let fp = app.parseUri(uri.toString());
    let intent = new Intent("android.intent.action.SEND");
    intent.setType(type);
    intent.putExtra(Intent.EXTRA_STREAM, uri);
    intent.setClipData(ClipData.newRawUri(MediaStore.EXTRA_OUTPUT, fp));
    intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
    context.startActivity(intent);
}

function imgDownLoad(imgUrl, imgSavePath, WhatIsThis, PicCopyright) {
    let view = ui.inflate(
        <vertical padding="25 0" bg="{{context_framebg}}">
            <linear orientation="horizontal" gravity="left" marginTop="10">
                <img src="@drawable/ic_get_app_black_48dp" tint="{{context_textColor}}" h="30" layout_gravity="center"/>
                <text text="正在下载图片……" textStyle="bold" textSize="20" textColor="{{context_textColor}}" layout_gravity="center"/>
            </linear>
            <text id="tip" textSize="10" margin="10 5 10 5" textColor="{{context_textColor}}" alpha="0.8"/>
            <progressbar id="loading" indeterminate="true" style="@style/Base.Widget.AppCompat.ProgressBar.Horizontal"/>
            <linear orientation="horizontal" gravity="center||right" margin="0 5 10 10">
                <text id="exit" text="取消" textStyle="bold" textColor="{{context_textColor}}" textSize="16sp" gravity="center" margin="10 0" foreground="?attr/selectableItemBackground" clickable="true"/>
            </linear>
        </vertical>, null, false);

    context_imgDownloadDHK = dialogs.build({
        customView: view,
        wrapInScrollView: false,
        autoDismiss: false,
        cancelable: false
    }).show();
    view.tip.setText("图片链接：" + imgUrl);
    view.exit.click(() => {
        context_imgDownloadDHK.dismiss();
        events.broadcast.emit('imgSetOk', '用户取消');
        exit();
    });

    var Downloadimgthread = threads.start(function() {
        try {
            let res = http.get(imgUrl, {
                headers: {
                    'Accept-Language': 'en-us,en;q=0.5',
                    'User-Agent': 'Mozilla/5.0(Macintosh;IntelMacOSX10_7_0)AppleWebKit/535.11(KHTML,likeGecko)Chrome/17.0.963.56Safari/535.11'
                }
            });
            if (res.statusCode == 200) {
                files.createWithDirs(imgSavePath);
                files.writeBytes(imgSavePath, res.body.bytes());
                if (WhatIsThis == "底图") {
                    if (context_DayOrNight == 0) {
                        setStorageData("NightUiPicture", "BottomPics", "file:///storage/emulated/0/OrangeJs/主界面示例图片/夜间示例底图.png");
                        if (PicCopyright != undefined) {
                            setStorageData("NightUiPicture", "BottomPicsCopyright", PicCopyright);
                            context_BottomPics_Copyright = PicCopyright;
                        } else {
                            delStorageData("DayUiPicture", "BottomPicsCopyright");
                            context_BottomPics_Copyright = "";
                        }
                        context_BottomPics = "file:///storage/emulated/0/OrangeJs/主界面示例图片/夜间示例底图.png"
                    } else if (context_DayOrNight == 1) {
                        setStorageData("DayUiPicture", "BottomPics", "file:///storage/emulated/0/OrangeJs/主界面示例图片/示例底图.png");
                        if (PicCopyright != undefined) {
                            setStorageData("DayUiPicture", "BottomPicsCopyright", PicCopyright);
                            context_BottomPics_Copyright = PicCopyright;
                        } else {
                            delStorageData("DayUiPicture", "BottomPicsCopyright");
                            context_BottomPics_Copyright = "";
                        }
                        context_BottomPics = "file:///storage/emulated/0/OrangeJs/主界面示例图片/示例底图.png";
                    }
                } else if (WhatIsThis == "顶图") {
                    if (context_DayOrNight == 0) {
                        setStorageData("NightUiPicture", "TopPics", "file:///storage/emulated/0/OrangeJs/主界面示例图片/夜间示例顶图.png");
                        if (PicCopyright != undefined) {
                            setStorageData("NightUiPicture", "TopPicsCopyright", PicCopyright);
                            context_TopPics_Copyright = PicCopyright;
                        } else {
                            setStorageData("NightUiPicture", "TopPicsCopyright", "");
                            context_TopPics_Copyright = "";
                        }
                        context_TopPics = "file:///storage/emulated/0/OrangeJs/主界面示例图片/夜间示例顶图.png"
                    } else if (context_DayOrNight == 1) {
                        setStorageData("DayUiPicture", "TopPics", "file:///storage/emulated/0/OrangeJs/主界面示例图片/示例顶图.png");
                        if (PicCopyright != undefined) {
                            setStorageData("DayUiPicture", "TopPicsCopyright", PicCopyright);
                            context_TopPics_Copyright = PicCopyright;
                        } else {
                            setStorageData("DayUiPicture", "TopPicsCopyright", "");
                            context_TopPics_Copyright = "";
                        }
                        context_TopPics = "file:///storage/emulated/0/OrangeJs/主界面示例图片/示例顶图.png";
                    }
                }
                context_imgDownloadDHK.dismiss();
                let views = ui.inflate(
                    <vertical padding="25 0" bg="{{context_framebg}}">
                                <linear orientation="horizontal" gravity="left" marginTop="10">
                                    <img src="@drawable/ic_offline_pin_black_48dp" tint="{{context_textColor}}" h="30" layout_gravity="center"/>
                                    <text id="title" textStyle="bold" textSize="20" textColor="{{context_textColor}}" layout_gravity="center"/>
                                </linear>
                                <text id="tip" textSize="10" margin="10 5 10 5" textColor="{{context_textColor}}" alpha="0.8"/>
                            </vertical>, null, false);
                views.title.setText("图片下载完成&设置成功");
                views.tip.setText("图片下载成功并已设置为主界面“" + WhatIsThis + "”");
                dialogs.build({
                    customView: views,
                    wrapInScrollView: false,
                    autoDismiss: false
                }).show();
                events.broadcast.emit('imgSetOk', '图片下载完成&设置成功')
                exit();
            } else {
                context_imgDownloadDHK.dismiss();
                let views = ui.inflate(
                    <vertical padding="25 0" bg="{{context_framebg}}">
                                <linear orientation="horizontal" gravity="left" marginTop="10">
                                    <img src="@drawable/ic_cancel_black_48dp" tint="{{context_textColor}}" h="30" layout_gravity="center"/>
                                    <text text="图片下载失败" textStyle="bold" textSize="20" textColor="{{context_textColor}}" layout_gravity="center"/>
                                </linear>
                                <text id="tip" textSize="10" margin="10 5 10 5" textColor="{{context_textColor}}" alpha="0.8"/>
                            </vertical>, null, false);
                views.tip.setText("该图片不存在或者该图片无法解码，请检查后重试\nHTTP状态码：" + res.statusCode + res.statusMessage + "\n图片链接：" + imgUrl);
                dialogs.build({
                    customView: views,
                    wrapInScrollView: false,
                    autoDismiss: false
                }).show();
                events.broadcast.emit('imgSetOk', '图片下载失败')
                exit();
            }
        } catch (e) {
            context_imgDownloadDHK.dismiss();
            let views = ui.inflate(
                <vertical padding="25 0" bg="{{context_framebg}}">
                            <linear orientation="horizontal" gravity="left" marginTop="10">
                                <img src="@drawable/ic_cancel_black_48dp" tint="{{context_textColor}}" h="30" layout_gravity="center"/>
                                <text text="网络连接错误" textStyle="bold" textSize="20" textColor="{{context_textColor}}" layout_gravity="center"/>
                            </linear>
                            <text id="tip" textSize="10" margin="10 5 10 5" textColor="{{context_textColor}}" alpha="0.8"/>
                        </vertical>, null, false);
            views.tip.setText("当前网络错误，请检查后重试\n错误代码：" + e);
            dialogs.build({
                customView: views,
                wrapInScrollView: false,
                autoDismiss: false
            }).show();
            events.broadcast.emit('imgSetOk', '网络连接错误');
            exit();
        }
    });
    setTimeout(function() {
        context_imgDownloadDHK.dismiss();
        let views = ui.inflate(
            <vertical padding="25 0" bg="{{context_framebg}}">
                        <linear orientation="horizontal" gravity="left" marginTop="10">
                            <img src="@drawable/ic_cancel_black_48dp" tint="{{context_textColor}}" h="30" layout_gravity="center"/>
                            <text text="图片下载超时" textStyle="bold" textSize="20" textColor="{{context_textColor}}" layout_gravity="center"/>
                        </linear>
                        <text id="tip" textSize="10" margin="10 5 10 5" textColor="{{context_textColor}}" alpha="0.8"/>
                    </vertical>, null, false);
        views.tip.setText("这种情况可能是图片过大造成的，若图片过大可更换小体积图片后重试。\n也有可能是您的网络原因所导致，若网络连接错误请检查网络后重试");
        var DHK = dialogs.build({
            customView: views,
            wrapInScrollView: false,
            autoDismiss: true
        }).show();
        Downloadimgthread.interrupt();
        events.broadcast.emit('imgSetOk', '图片下载超时');
        exit();
    }, 20000);
}

function haveScript(scriptName) {
    try {
        for (let i = 0; i < engines.all().length; i++) {
            if (scriptName + ".js" == engines.all()[i].getSource().toString().match(/([^/]+)$/)[1] ||
                scriptName == engines.all()[i].getSource().toString().match(/([^/]+)$/)[1]) {
                return true;
                break;
            }
        }
    } catch (e) {
        log("判断是否存在脚本" + scriptName + "时出现错误：" + e);
    }
}

function UiObjectSearch() {
    if (context_framebg == "#000000") {
        ui.statusBarColor(context_framebg);
    } else {
        ui.statusBarColor("#EBEBEB");
    }
    var dataItem = {
        text: true,
        desc: true,
        password: false,
        checked: true,
        selected: true
    };
    context_getDatamode = "ALL";
    ui.layout(
        <frame background="{{context_framebg}}">
            <scroll>
                <vertical>
                    <linear orientation="horizontal" gravity="left||center">
                        <img src="{{getStorageData('APPbasic', 'URLprefix')}}/OrangeJs-Logo.png" w="30" h="30" margin="5 0"/>
                        <img src="{{context_Logo}}" w="85" h="35"/>
                        <linear orientation="horizontal" w="match_parent" gravity="right||center">
                            <text text="APP控件数据获取" textStyle="bold" textSize="25" textColor="{{context_textColor}}" marginRight="5"/>
                        </linear>
                    </linear>
                    <View bg="{{context_SettingsCard}}" w="*" h="1" margin="5"/>
                    <linear orientation="horizontal" gravity="center|left" margin="5">
                        <vertical layout_weight="50" id="getAllObject">
                            <text id="getAll_text" text="获取全部控件" textStyle="bold" textSize="20" textColor="#17B978" gravity="center"/>
                            <card id="getAll_spot" w="25" h="3" layout_gravity="center" cardCornerRadius="5dp" cardBackgroundColor="#17B978" foreground="?attr/selectableItemBackground" clickable="true"/>
                        </vertical>
                        <vertical layout_weight="50" id="getPointObject">
                            <text id="getPoint_Text" text="定向获取控件" textSize="18" textColor="#767676"textStyle="bold" gravity="center"/>
                            <card id="getPoint_spot" w="25" h="0" layout_gravity="center" cardCornerRadius="5dp" cardBackgroundColor="#17B978" foreground="?attr/selectableItemBackground" clickable="true"/>
                        </vertical>
                    </linear>
                    <text text="隐私数据选项" textStyle="bold" textSize="10" textColor="{{context_textColor}}" marginLeft="5"/>
                    <linear orientation="horizontal" gravity="center|left"margin="0 5">
                        <card id="getText" layout_weight="20" w="80" h="80" marginLeft="5" cardCornerRadius="5dp" cardBackgroundColor="#17B978" foreground="?attr/selectableItemBackground" clickable="true">
                            <img id="getText_img"  w="45" h="45" layout_gravity="center" tint="{{context_textColor}}"/>
                            <text marginBottom="2" text="text" textStyle="bold" textSize="13" textColor="{{context_textColor}}" gravity="bottom||center"/>
                        </card>
                        <card id="getDesc" layout_weight="20" w="80" h="80" marginLeft="5" cardCornerRadius="5dp" cardBackgroundColor="#17B978" foreground="?attr/selectableItemBackground" clickable="true">
                            <img id="getDesc_img" src="@drawable/ic_event_available_black_48dp" w="45" h="45" layout_gravity="center" tint="{{context_textColor}}"/>
                            <text marginBottom="2" text="desc" textStyle="bold" textSize="13" textColor="{{context_textColor}}" gravity="bottom||center"/>
                        </card>
                        <card id="getPassword" layout_weight="20" w="80" h="80" marginLeft="5" cardCornerRadius="5dp" cardBackgroundColor="#17B978" foreground="?attr/selectableItemBackground" clickable="true">
                            <img id="getPassword_img" src="@drawable/ic_event_available_black_48dp" w="45" h="45" layout_gravity="center" tint="{{context_textColor}}"/>
                            <text marginBottom="2" text="password" textStyle="bold" textSize="13" textColor="{{context_textColor}}" gravity="bottom||center"/>
                        </card>
                        <card id="getChecked" layout_weight="20"w="80" h="80" marginLeft="5" cardCornerRadius="5dp" cardBackgroundColor="#17B978" foreground="?attr/selectableItemBackground" clickable="true">
                            <img id="getChecked_img" src="@drawable/ic_event_available_black_48dp" w="45" h="45" layout_gravity="center" tint="{{context_textColor}}"/>
                            <text marginBottom="2" text="checked" textStyle="bold" textSize="13" textColor="{{context_textColor}}" gravity="bottom||center"/>
                        </card>
                        <card id="getSelected" layout_weight="20"w="80" h="80" margin="5 0" cardCornerRadius="5dp" cardBackgroundColor="#FF1E56" foreground="?attr/selectableItemBackground" clickable="true">
                            <img id="getSelected_img" src="@drawable/ic_event_busy_black_48dp" w="45" h="45" layout_gravity="center" tint="{{context_textColor}}"/>
                            <text marginBottom="2" text="selected" textStyle="bold" textSize="13" textColor="{{context_textColor}}" gravity="bottom||center"/>
                        </card>
                    </linear>
                    <text id="privatcyTips" textSize="10" textColor="{{context_textColor}}" marginLeft="5"/>
                    <input id="PointObject" hint="请输入指定控件代码" textColor="{{context_textColor}}" textColorHint="#9E9E9E" margin="5" h="auto" alpha="0"/>
                </vertical>
            </scroll>
            <card id="startGetData" w="*" h="50" cardCornerRadius="25dp" layout_gravity="bottom" margin="100 5 100 5" cardBackgroundColor="#17B978" foreground="?attr/selectableItemBackground" clickable="true">
                <text id="startGetDataText" text="启动获取数据悬浮窗" textStyle="bold" textSize="15" textColor="{{context_textColor}}" gravity="center"/>
            </card>
        </frame>
    );
    ChangeIcon();

    function SearchScript(scriptName) {
        let execution = engines.all();
        for (let i = 0; i < execution.length; i++) {
            if (scriptName == execution[i].getSource().toString().match(/([^/]+)$/)[1]) {
                return true;
            }
        }
    }

    function ChangeIcon() {
        if (dataItem.text == true) {
            ui.getText_img.setSource("@drawable/ic_event_available_black_48dp");
            ui.getText.setCardBackgroundColor(colors.parseColor("#17B978"));
        } else {
            ui.getText_img.setSource("@drawable/ic_event_busy_black_48dp");
            ui.getText.setCardBackgroundColor(colors.parseColor("#FF1E56"));
        }
        if (dataItem.desc == true) {
            ui.getDesc_img.setSource("@drawable/ic_event_available_black_48dp");
            ui.getDesc.setCardBackgroundColor(colors.parseColor("#17B978"));
        } else {
            ui.getDesc_img.setSource("@drawable/ic_event_busy_black_48dp");
            ui.getDesc.setCardBackgroundColor(colors.parseColor("#FF1E56"));
        }
        if (dataItem.password == true) {
            ui.getPassword_img.setSource("@drawable/ic_event_available_black_48dp");
            ui.getPassword.setCardBackgroundColor(colors.parseColor("#17B978"));
        } else {
            ui.getPassword_img.setSource("@drawable/ic_event_busy_black_48dp");
            ui.getPassword.setCardBackgroundColor(colors.parseColor("#FF1E56"));
        }
        if (dataItem.checked == true) {
            ui.getChecked_img.setSource("@drawable/ic_event_available_black_48dp");
            ui.getChecked.setCardBackgroundColor(colors.parseColor("#17B978"));
        } else {
            ui.getChecked_img.setSource("@drawable/ic_event_busy_black_48dp");
            ui.getChecked.setCardBackgroundColor(colors.parseColor("#FF1E56"));
        }
        if (dataItem.selected == true) {
            ui.getSelected_img.setSource("@drawable/ic_event_available_black_48dp");
            ui.getSelected.setCardBackgroundColor(colors.parseColor("#17B978"));
        } else {
            ui.getSelected_img.setSource("@drawable/ic_event_busy_black_48dp");
            ui.getSelected.setCardBackgroundColor(colors.parseColor("#FF1E56"));
        }
    }
    ui.getText.click(() => {
        if (dataItem.text == true) {
            dataItem.text = false;
        } else {
            dataItem.text = true;
        }
        ChangeIcon();
    });
    ui.getDesc.click(() => {
        if (dataItem.desc == true) {
            dataItem.desc = false;
        } else {
            dataItem.desc = true;
        }
        ChangeIcon();
    });
    ui.getPassword.click(() => {
        if (dataItem.password == true) {
            dataItem.password = false;
        } else {
            dataItem.password = true;
        }
        ChangeIcon();
    });
    ui.getChecked.click(() => {
        if (dataItem.checked == true) {
            dataItem.checked = false;
        } else {
            dataItem.checked = true;
        }
        ChangeIcon();
    });
    ui.getSelected.click(() => {
        if (dataItem.selected == true) {
            dataItem.selected = false;
        } else {
            dataItem.selected = true;
        }
        ChangeIcon();
    });
    ui.startGetData.click(() => {
        let WhetherStart = ui.startGetDataText.getText();
        if (WhetherStart == "启动获取数据悬浮窗" && SearchScript("获取控件数据悬浮窗.js") == true) {
            ui.startGetDataText.setText("已经启动了");
            ui.startGetData.setCardBackgroundColor(colors.parseColor(context_framebg));
            setTimeout(function() {
                ui.startGetDataText.setText("启动获取数据悬浮窗");
                ui.startGetData.setCardBackgroundColor(colors.parseColor("#17B978"));
            }, 5000);
        } else if (WhetherStart == "启动获取数据悬浮窗") {
            ui.startGetDataText.setText("已尝试启动");
            ui.startGetData.setCardBackgroundColor(colors.parseColor(context_framebg));
            setTimeout(function() {
                ui.startGetDataText.setText("启动获取数据悬浮窗");
                ui.startGetData.setCardBackgroundColor(colors.parseColor("#17B978"));
            }, 3000);
            var wei = null;
            let pointObject = ui.PointObject.getText().toString();
            if (pointObject.length > 15) {
                for (let i = pointObject.length - 12; i < pointObject.length; i++) {
                    if (wei == null) {
                        var wei = pointObject[i];
                    } else {
                        var wei = wei + pointObject[i];
                    }
                }
                if (wei == ".findOnce();" || wei.replace(wei[0], "") == ".findOnce()") {
                    var wei = true;
                }
            }
            if (context_getDatamode == "POINT" && pointObject != "" && pointObject.length > 15 && wei == true) {
                let change = JSON.stringify(dataItem);
                let str = 'FindUiObjectFloatWindow()';
                let sharevalue = 'context_framebg="' + context_framebg + '";context_textColor="' + context_textColor + '";context_SettingsCard="' + context_SettingsCard + '";context_getDatamode ="' + context_getDatamode + '";context_Logo="' + context_Logo + '";dataItem=' + change + ';var pointObject="' + pointObject + '";';
                engines.execScript("获取控件数据悬浮窗", sharevalue + str + ";\n" + FindUiObjectFloatWindow.toString());
            } else if (context_getDatamode == "ALL") {
                let change = JSON.stringify(dataItem);
                let str = 'FindUiObjectFloatWindow()';
                let sharevalue = 'context_framebg="' + context_framebg + '";context_textColor="' + context_textColor + '";context_SettingsCard="' + context_SettingsCard + '";context_getDatamode ="' + context_getDatamode + '";context_Logo="' + context_Logo + '";dataItem=' + change + ';';
                engines.execScript("获取控件数据悬浮窗", sharevalue + str + ";\n" + FindUiObjectFloatWindow.toString());
            } else {
                let view = ui.inflate(
                    <vertical padding="25 0" bg="{{context_framebg}}">
                                <linear orientation="horizontal" align="left" margin="0" paddingTop="0">
                                    <img src="@drawable/ic_warning_black_48dp" h="20" marginTop="3" tint="#F44336" layout_gravity="center"/>
                                    <text text="定向控件代码输入错误" textSize="15" textStyle="bold" margin="0 5 10 0" textColor="#F44336"/>
                                </linear>
                                <text id="tips" textStyle="bold" textSize="10" margin="10 5 10 5" textColor="#D32F2F"/>
                                <linear orientation="horizontal" align="left" margin="0" paddingTop="0">
                                    <card layout_weight="50" h="40" cardCornerRadius="5dp" cardElevation="0dp" gravity="center_vertical" margin="5"cardBackgroundColor="#F44336">
                                        <text id="clear" text="清空代码" textStyle="bold" textColor="#FFFFFF" gravity="center" textSize="12sp" foreground="?attr/selectableItemBackground" clickable="true"/>
                                    </card>
                                    <card layout_weight="50" h="40" cardCornerRadius="5dp" cardElevation="0dp" gravity="center_vertical" margin="5"cardBackgroundColor="#4CAF50">
                                        <text id="ok" text="确定" textStyle="bold" textColor="#FFFFFF" gravity="center" textSize="12sp" foreground="?attr/selectableItemBackground" clickable="true"/>
                                    </card>
                                </linear>
                            </vertical>, null, false);
                view.tips.setText("* 代码必须以.findOnce();结束，不能有空格等;\n* 代码长度不得少于15个字符;");
                ui.PointObject.setError("代码必须以.findOnce();结束，且长度不得少于15个字符");
                view.clear.click(() => {
                    ui.PointObject.setText("");
                    DHK.dismiss();
                });
                view.ok.click(() => {
                    DHK.dismiss();
                });
                let DHK = dialogs.build({
                    customView: view,
                    wrapInScrollView: false,
                    autoDismiss: false
                }).show();
            }
        }
    });
    ui.getAllObject.click(() => {
        context_getDatamode = "ALL";
        ui.getAll_text.textSize = "20";
        ui.getAll_text.setTextColor(colors.parseColor("#17B978"));
        ui.getAll_spot.attr("h", 3);
        ui.getPoint_Text.textSize = "18";
        ui.getPoint_Text.setTextColor(colors.parseColor("#767676"));
        ui.getPoint_spot.attr("h", 0);
        ui.PointObject.attr("alpha", 0);
    });
    ui.privatcyTips.setText("text/desc:这两种属性可能会包含一些可见的文字信息，若在您要获取控件数据的界面上含有隐私信息文字可取消获取此属性的数据。\npassword:若在您要获取控件数据的界面上含有密码输入框且您不愿意获取其数据则可关闭获取此属性的数据。\nchecked/selected:若在您要获取控件数据的界面上含有您已做出选择的且您不愿获取的隐私选项则可关闭获取此属性的数据。");
    ui.getPointObject.click(() => {
        context_getDatamode = "POINT";
        ui.getAll_text.textSize = "18";
        ui.getAll_text.setTextColor(colors.parseColor("#767676"));
        ui.getAll_spot.attr("h", 0);
        ui.getPoint_Text.textSize = "20";
        ui.getPoint_Text.setTextColor(colors.parseColor("#17B978"));
        ui.getPoint_spot.attr("h", 3);
        ui.PointObject.attr("alpha", 1);
    });

    function FindUiObjectFloatWindow() {
        context_Data = null;
        window = floaty.window(
            <frame background="{{context_framebg}}" alpha="0.8" minHeight="250" padding="10">
                <scroll>
                    <vertical>
                        <linear orientation="horizontal" gravity="left||center">
                            <img src="{{getStorageData('APPbasic', 'URLprefix')}}/OrangeJs-Logo.png" w="30" h="30" margin="5 0"/>
                            <img src="{{context_Logo}}" w="85" h="30"/>
                            <linear orientation="horizontal" w="match_parent" gravity="right||center">
                                <img id="Stop" src="@drawable/ic_close_black_48dp" w="40" h="0" tint="{{context_textColor}}" marginRight="5" layout_gravity="right||center"/>
                                <linear id="action" orientation="horizontal" gravity="right||center">
                                    <img src="@drawable/ic_open_with_black_48dp" w="30" h="30" tint="{{context_textColor}}" marginRight="5"/>
                                </linear>
                            </linear>
                        </linear>
                        <View bg="{{context_SettingsCard}}" w="*" h="1" margin="5 5 5 5"/>
                        <text id="loadingText" textColor="{{context_textColor}}" textSize="0" gravity="center" textStyle="bold" margin="5 0"/>
                        <text id="ModeText" textColor="{{context_textColor}}" textSize="10" textStyle="bold" margin="5 0"/>
                        <progressbar id="loading" indeterminate="true" style="@style/Base.Widget.AppCompat.ProgressBar.Horizontal" h="0"/>
                        <text id="tips" textColor="{{context_textColor}}" textSize="0" margin="5 0"/>
                        <text id="nowAppName" text="当前应用名：" textColor="{{context_textColor}}" textSize="8" textStyle="bold" margin="5 0"/>
                        <text id="nowAppPackageName" text="应用包名：" textColor="{{context_textColor}}" textSize="8" textStyle="bold" margin="5 0"/>
                        <text id="nowAppActivity" text="应用Activity：" textColor="{{context_textColor}}" textSize="8" textStyle="bold" margin="5 0"/>
                    </vertical>
                </scroll>
                <vertical gravity="center||bottom">
                    <linear orientation="horizontal" gravity="left||center">
                        <card id="cancelGet" layout_weight="5" h="30" cardCornerRadius="25dp"  cardBackgroundColor="#FF1E56" margin="5 0 5 0" foreground="?attr/selectableItemBackground" clickable="true">
                            <text id="cancelGetText" text="取消获取" textStyle="bold" textSize="10" textColor="{{context_textColor}}" gravity="center"/>
                        </card>
                        <card id="startGet" layout_weight="5"  h="30" cardCornerRadius="25dp"  cardBackgroundColor="#17B978" margin="0 0 5 0" foreground="?attr/selectableItemBackground" clickable="true">
                            <text id="startGetText" text="立即获取" textStyle="bold" textSize="10" textColor="{{context_textColor}}" gravity="center"/>
                        </card>
                    </linear>
                    <linear orientation="horizontal" gravity="left||center" marginTop="2">
                        <card id="setClips" layout_weight="5" h="0" cardCornerRadius="25dp"  cardBackgroundColor="#FFC107" margin="5 0 5 0" foreground="?attr/selectableItemBackground" clickable="true">
                            <text id="setClipsText" text="存至剪切板" textStyle="bold" textSize="10" textColor="{{context_textColor}}" gravity="center"/>
                        </card>
                        <card id="saveOpen" layout_weight="5"  h="0" cardCornerRadius="25dp"  cardBackgroundColor="#2196F3" margin="0 0 5 0" foreground="?attr/selectableItemBackground" clickable="true">
                            <text id="saveOpenText" text="保存并查看" textStyle="bold" textSize="10" textColor="{{context_textColor}}" gravity="center"/>
                        </card>
                    </linear>
                </vertical>
            </frame>
        );
        if (context_getDatamode == "ALL") {
            window.ModeText.setText("* 本次将获取当前界面全部控件数据");
        } else {
            window.tips.setText("定向控件代码：" + pointObject);
            window.tips.textSize = "8";
            window.ModeText.setText("* 本次将定向获取当前界面控件数据");
        }
        window.startGet.click(() => {
            let WhetherStart = window.startGetText.getText();
            if (WhetherStart == "立即获取") {
                window.ModeText.textSize = "0";
                window.nowAppName.textSize = "0";
                window.nowAppPackageName.textSize = "0";
                window.nowAppActivity.textSize = "0";
                window.cancelGet.attr("h", 0);
                window.startGet.attr("h", 0);
                window.action.attr("h", 0);
                window.loadingText.textSize = "15";
                window.loadingText.setText("正在获取，请勿操作！");
                window.tips.textSize = "8";
                window.tips.setText("tips:获取期间手机会稍有卡顿属正常现象，复杂界面可能需要几分钟时间获取数据，提示未响应或过长时间未成功则请尝试重启软件。");
                window.loading.attr("h", 15);
                window.loading.attr("margin", "5 5 5 0");
                setTimeout(function() {
                    if (context_getDatamode == "ALL") {
                        generateObjectTree(null);
                    } else {
                        generateObjectTree(pointObject);
                    }
                }, 500);
            } else if (WhetherStart == "保存并分享") {
                let a = WhetherStart;
                if (files.listDir("/sdcard/").length != 0 && a == "保存并分享") {
                    let filename = "/storage/emulated/0/OrangeJs/控件数据/[" + String(context_getDatamode) + "]" + String(context_Datafilename + ".orangejsUOD");
                    files.createWithDirs(filename);
                    files.write(filename, context_Data);
                    window.startGetText.setText("已保存");
                    let before = window.tips.getText();
                    window.tips.setText(before + "\n数据文件已保存至：" + filename);

                    function shareFile(file, type) {
                        importPackage(android.content);
                        importClass(android.net.Uri);
                        importClass(java.io.File);
                        importClass(android.provider.MediaStore);
                        let f = new File(file);
                        let uri = Uri.fromFile(f);
                        let fp = app.parseUri(uri.toString());
                        let intent = new Intent("android.intent.action.SEND");
                        intent.setType(type);
                        intent.putExtra(Intent.EXTRA_STREAM, uri);
                        intent.setClipData(ClipData.newRawUri(MediaStore.EXTRA_OUTPUT, fp));
                        intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
                        context.startActivity(intent);
                    }
                    shareFile(filename, "*/*");
                    setTimeout(function() {
                        window.startGetText.setText("保存并分享");
                        window.tips.setText(before);
                    }, 5000);
                } else if (files.listDir("/sdcard/").length == 0 && a == "保存并分享") {
                    window.startGetText.setText("无存储权限");
                    window.startGet.setCardBackgroundColor(colors.parseColor("#FF1E56"));
                    setTimeout(function() {
                        window.startGetText.setText("保存并分享");
                        window.startGet.setCardBackgroundColor(colors.parseColor("#17B978"));
                    }, 3000);
                }
            } else if (WhetherStart == "再重新获取" || WhetherStart == "重新获取") {
                window.setClips.attr("h", 0);
                window.saveOpen.attr("h", 0);
                window.ModeText.textSize = "10";
                window.nowAppName.textSize = "8";
                window.nowAppPackageName.textSize = "8";
                window.nowAppActivity.textSize = "8";
                window.cancelGetText.setText("取消获取");
                window.startGetText.setText("立即获取");
                window.Stop.attr("h", 0);
                window.loading.attr("margin", "0");
                window.loadingText.textSize = "0";
                window.tips.textSize = "0";
                if (context_getDatamode == "ALL") {
                    window.ModeText.setText("* 本次将获取当前界面全部控件数据");
                } else {
                    window.tips.setText("定向控件代码：" + pointObject);
                    window.tips.textSize = "8";
                    window.ModeText.setText("* 本次将定向获取当前界面控件数据");
                }
            }
        });
        window.Stop.longClick(() => {
            toast("关闭");
        });
        window.Stop.click(() => {
            window.close();
            exit();
        });
        window.setClips.click(() => {
            let a = window.setClipsText.getText();
            if (a == "存至剪切板") {
                setClip(context_Data);
                window.setClipsText.setText("已复制至剪切板");
            }
        });
        window.saveOpen.click(() => {
            let a = window.saveOpenText.getText();
            if (files.listDir("/sdcard/").length != 0 && a == "保存并查看") {
                let filename = "/storage/emulated/0/OrangeJs/控件数据/[" + String(context_getDatamode) + "]" + String(context_Datafilename + ".orangejsUOD");
                files.createWithDirs(filename);
                files.write(filename, context_Data);
                app.viewFile(filename);
            } else if (files.listDir("/sdcard/").length == 0 && a == "保存并查看") {
                window.saveOpenText.setText("无存储权限");
                window.saveOpen.setCardBackgroundColor(colors.parseColor("#FF1E56"));
                setTimeout(function() {
                    window.saveOpenText.setText("保存并查看");
                    window.saveOpen.setCardBackgroundColor(colors.parseColor("#2196F3"));
                }, 3000);
            }
        });
        window.cancelGet.click(() => {
            let WhetherStart = window.cancelGetText.getText();
            if (WhetherStart == "取消获取") {
                window.close();
                exit();
            } else if (WhetherStart == "重新获取" || WhetherStart == "再重新获取") {
                window.setClips.attr("h", 0);
                window.saveOpen.attr("h", 0);
                window.ModeText.textSize = "10";
                window.nowAppName.textSize = "8";
                window.nowAppPackageName.textSize = "8";
                window.nowAppActivity.textSize = "8";
                window.cancelGetText.setText("取消获取");
                window.startGetText.setText("立即获取");
                window.Stop.attr("h", 0);
                window.loading.attr("margin", "0");
                window.loadingText.textSize = "0";
                window.tips.textSize = "0";
                if (context_getDatamode == "ALL") {
                    window.ModeText.setText("* 本次将获取当前界面全部控件数据");
                } else {
                    window.tips.setText("定向控件代码：" + pointObject);
                    window.tips.textSize = "8";
                    window.ModeText.setText("* 本次将定向获取当前界面控件数据");
                }
            }
        });
        var execution = null;
        var x = 0,
            y = 0;
        var windowX, windowY;
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
                    window.setPosition(windowX + (event.getRawX() - x),
                        windowY + (event.getRawY() - y));
                    return true;
                case event.ACTION_UP:
                    return true;
            }
            return true;
        });
        setInterval(() => {
            function getPackageVersion(packageName) {
                importPackage(android.content);
                var pckMan = context.getPackageManager();
                var packageInfo = pckMan.getPackageInfo(packageName, 0);
                return packageInfo.versionName;
            }
            ui.run(() => {
                window.nowAppName.setText("当前应用名：" + app.getAppName(currentPackage()) + "（" + getPackageVersion(currentPackage()) + "）");
                window.nowAppPackageName.setText("应用包名：" + currentPackage());
                window.nowAppActivity.setText("应用Activity：" + currentActivity());
            });
        }, 10);

        function getTime() {
            var date = new Date();
            var year = date.getFullYear();
            var month = date.getMonth() + 1;
            var strDate = date.getDate();
            if (month >= 1 && month <= 9) {
                month = '0' + month;
            }
            if (strDate >= 0 && strDate <= 9) {
                strDate = '0' + strDate;
            }
            var currentdate = year + '-' + month + '-' + strDate + "-" + date.getDay() + "-" + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + ":" + date.getMilliseconds();
            return currentdate;
        }

        function generateObjectTree(pointObject) {
            function StrRebuild(str, number) {
                let a = {
                    objectNumber: number,
                    boundsInParent: str.boundsInParent().toString(),
                    boundsInScreen: str.bounds().toString(),
                    packageName: str.packageName(),
                    className: str.className(),
                    text: str.text(),
                    desc: str.desc(),
                    contentDescription: str.contentDescription,
                    viewId: str.id(),
                    drawingOrder: str.drawingOrder(),
                    checkable: str.checkable(),
                    checked: str.checked(),
                    focusable: str.focusable(),
                    focused: str.focused(),
                    selected: str.selected(),
                    clickable: str.clickable(),
                    longClickable: str.longClickable(),
                    enabled: str.enabled(),
                    password: str.password(),
                    scrollable: str.scrollable(),
                    children: []
                }
                if (dataItem.text == false) {
                    delete a.text;
                }
                if (dataItem.desc == false) {
                    delete a.desc;
                }
                if (dataItem.password == false) {
                    delete a.password;
                }
                if (dataItem.checked == false) {
                    delete a.checked;
                }
                if (dataItem.selected == false) {
                    delete a.selected;
                }
                return a;
            }

            function MakeNowUiObject(x) {
                let x = x.toString();
                var X = null;
                for (let i = 0; i < x.length; i++) {
                    if (X == null) {
                        var X = "RootUiObject.child(" + x[i] + ")";
                    } else {
                        var X = X + ".child(" + x[i] + ")";
                    }
                }
                try {
                    let b = eval(X);
                    return b;
                } catch (e) {
                    return null;
                }
            }

            function Additem(nums, content) {
                let content = JSON.stringify(content);
                let num = nums.toString();
                var X = null;
                for (let i = 0; i < num.length; i++) {
                    if (X == null) {
                        var X = "ObjectTree[" + num[i] + "]";
                    } else {
                        var X = X + ".children[" + num[i] + "]";
                    }
                }
                eval(X + '=' + content + '');
                return X;
            }
            let Date = getTime();
            let Information = {
                APPname: app.getAppName(currentPackage()),
                PackageName: currentPackage(),
                Activity: currentActivity()
            }
            var WRONG = false;
            RootUiObject = null;
            if (pointObject == null) {
                RootUiObject = selector().findOnce();
            } else {
                try {
                    RootUiObject = eval(pointObject);
                } catch (e) {
                    var WRONG = true;
                    ui.run(() => {
                        window.cancelGetText.setText("取消获取");
                        window.startGetText.setText("重新获取");
                        window.cancelGet.attr("h", 30);
                        window.startGet.attr("h", 30);
                        window.action.attr("h", 30);
                        window.loading.attr("h", 0);
                        window.loading.attr("margin", "0");
                        window.loadingText.setText("定向控件代码错误");
                        window.ModeText.textSize = "10";
                        window.ModeText.setText("请按照错误代码检查定向控件代码，如有疑问请联系开发者。\n" + e);
                        window.tips.setText("\n定向控件代码：" + pointObject);
                    });
                }
            }
            if (RootUiObject != null && WRONG == false) {
                AllUiObject = [];
                while (true) {
                    let Zancun = [];
                    if (AllUiObject.length < 1) {
                        for (let i = 0; i < RootUiObject.childCount(); i++) {
                            Zancun.push(StrRebuild(RootUiObject.child(i), i));
                        }
                    } else if (AllUiObject[AllUiObject.length - 1].length > 0) {
                        for (let i = 0; i < AllUiObject[AllUiObject.length - 1].length; i++) {
                            let ParentObject = MakeNowUiObject(AllUiObject[AllUiObject.length - 1][i].objectNumber);
                            if (ParentObject != null && ParentObject.childCount() > 0) {
                                for (let s = 0; s < ParentObject.childCount(); s++) {
                                    let thisObjectNumber = AllUiObject[AllUiObject.length - 1][i].objectNumber + s.toString();
                                    Zancun.push(StrRebuild(ParentObject.child(s), thisObjectNumber));
                                }
                            }
                        }
                    } else {
                        break;
                    }
                    AllUiObject.push(Zancun);
                }
                var Num = 0;
                for (let i = 0; i < AllUiObject.length; i++) {
                    var Num = Num + AllUiObject[i].length;
                }
                let ceng = AllUiObject.length - 1;
                var ObjectTree = []
                for (let i = 0; i < AllUiObject.length; i++) {
                    let Jh = AllUiObject[i];
                    if (Jh.length > 0) {
                        for (let ii = 0; ii < Jh.length; ii++) {
                            if (i > 0) {
                                var ObjectTree = JSON.parse(JSON.stringify(ObjectTree));
                            }
                            Additem(Jh[ii].objectNumber, Jh[ii]);
                        }
                    }
                }
                let RootUiObjectText = StrRebuild(RootUiObject, "根");
                let context_Datas = {
                    Time: Date,
                    Info: Information,
                    RootUiObject: RootUiObjectText,
                    General: "[" + context_getDatamode + "]共计" + ceng + "层，包含" + Num + "个控件",
                    UiObjectTree: ObjectTree
                };
                context_Datafilename = context_Datas.Info.APPname + "_" + context_Datas.Time;
                context_Data = JSON.stringify(context_Datas);
                ui.run(() => {
                    window.setClips.attr("h", 30);
                    window.saveOpen.attr("h", 30);
                    window.cancelGetText.setText("再重新获取");
                    window.startGetText.setText("保存并分享");
                    window.cancelGet.attr("h", 30);
                    window.startGet.attr("h", 30);
                    window.Stop.attr("h", 40);
                    window.action.attr("h", 30);
                    window.loading.attr("h", 0);
                    window.loading.attr("margin", "0");
                    window.loadingText.setText("获取成功\n共计" + ceng + "层，包含" + Num + "个控件");
                    window.tips.setText("tips:控件数据可能包含明文隐私信息，分享前请使用文本查看工具仔细检查！请勿将控件数据公开分享或分享给不可靠之人，时刻注意个人隐私数据安全！");
                });
            } else if (WRONG == false) {
                ui.run(() => {
                    window.cancelGetText.setText("取消获取");
                    window.startGetText.setText("重新获取");
                    window.cancelGet.attr("h", 30);
                    window.startGet.attr("h", 30);
                    window.action.attr("h", 30);
                    window.loading.attr("h", 0);
                    window.loading.attr("margin", "0");
                    window.loadingText.setText("未找到根控件");
                    window.ModeText.textSize = "10";
                    if (context_getDatamode == "ALL") {
                        window.ModeText.setText("请检查当前无障碍服务状态，同时请关闭其它容易造成干扰的悬浮窗、其它脚本软件、其它无障碍服务等。");
                    } else {
                        window.ModeText.setText("请检查定向控件代码输入是否正确，是否处于代码对应界面，同时请关闭其它容易造成干扰的悬浮窗、其它脚本软件、其它无障碍服务等。");
                        window.tips.setText("\n定向控件代码：" + pointObject);
                    }
                });
            }
        }
    }
}