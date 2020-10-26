context_thisScriptName = "星秀猫喵币++";
context_thisScriptVersion = "（Beta1.1）";

ScriptMENU();

function ScriptMENU() {
    ui.run(() => {
        let view = ui.inflate(
            <vertical bg="{{context_framebg}}" padding="35 0 35 0">
                        <card gravity="center_vertical" cardElevation="0dp" cardBackgroundColor="{{context_framebg}}" margin="0 10">
                            <img src="{{context_Logo}}" w="100" h="35"/>
                            <linear gravity="center||right">
                                <img id="ExitScript" src="@drawable/ic_clear_black_48dp" w="35" h="35" tint="{{context_textColor}}" foreground="?attr/selectableItemBackground" clickable="true"/>
                            </linear>
                        </card>
                        
                        <text text="{{context_thisScriptName+context_thisScriptVersion}}" textSize="15sp" textStyle="bold" textColor="{{context_textColor}}" gravity="left" margin="0 0 0 0"/>
                        <linear orientation="horizontal" align="left" margin="0" paddingTop="0">
                            <card id="StartRunning" layout_weight="50" h="50"cardCornerRadius="5dp" cardElevation="0dp" gravity="center_vertical" margin="0 5 5 5" cardBackgroundColor="{{context_SettingsCard}}" foreground="?attr/selectableItemBackground" clickable="true">
                                <vertical gravity="center">
                                    <img src="@drawable/ic_play_arrow_black_48dp" h="30" tint="{{context_textColor}}" marginTop="5"/>
                                    <text  text="开始运行" textStyle="bold" textColor="{{context_textColor}}" textSize="8sp" gravity="center"  paddingBottom="5"/>
                                </vertical>
                            </card>
                            <card id="WaitForRun" layout_weight="50" h="50" cardCornerRadius="5dp" cardElevation="0dp" gravity="center_vertical" margin="0 5 0 5" cardBackgroundColor="{{context_SettingsCard}}" foreground="?attr/selectableItemBackground" clickable="true">
                                <vertical gravity="center">
                                    <img src="@drawable/ic_build_black_48dp" h="20" tint="{{context_textColor}}" margin="0 10 0 5"/>
                                    <text text="手动运行" textStyle="bold" textColor="{{context_textColor}}" gravity="center" textSize="8sp" paddingBottom="5"/>
                                </vertical>
                            </card>
                            <card id="ScriptSetting" layout_weight="50" h="50" cardCornerRadius="5dp" cardElevation="0dp" gravity="center_vertical" margin="5" cardBackgroundColor="{{context_SettingsCard}}" foreground="?attr/selectableItemBackground" clickable="true">
                                <vertical gravity="center">
                                    <img src="@drawable/ic_settings_black_48dp" h="20" tint="{{context_textColor}}" margin="0 10 0 5"/>
                                    <text text="脚本设置" textStyle="bold" textColor="{{context_textColor}}" gravity="center" textSize="8sp" paddingBottom="5"/>
                                </vertical>
                            </card>
                        </linear>
                    </vertical>, null, false);

        let DHK = dialogs.build({
            customView: view,
            wrapInScrollView: false,
            autoDismiss: false,
            cancelable: false
        }).show();

        view.StartRunning.click(() => {
            DHK.dismiss();
            threads.start(function() {
                StopScriptWindowOn();
                FloatJournal();
                openInTask();
                DoTask();
            });
        });
        view.WaitForRun.click(() => {
            DHK.dismiss();
            ShouDong();
        });
        view.ScriptSetting.click(() => {
            if (files.listDir("/sdcard").length != 0) {
                DHK.dismiss();
                ScriptSettings();
            } else {
                let view = ui.inflate(
                    <vertical bg="{{context_framebg}}" padding="25 0 25 0">
                                        <img src="@drawable/ic_warning_black_48dp" h="35" tint="{{context_textColor}}" margin="5"/>
                                        <text text="未授予本软件“存储权限”，无法更改脚本配置" textSize="15" textStyle="bold" textColor="{{context_textColor}}" gravity="center" margin="5"/>
                                    </vertical>
                );
                dialogs.build({
                    customView: view,
                    wrapInScrollView: false,
                    autoDismiss: true
                }).show();
            }
        });
        view.ExitScript.longClick(() => {
            toast("关闭脚本");
        });

        view.ExitScript.click(() => {
            DHK.dismiss();
            exit();
        });
    });
}

function ShouDong() {
    ui.run(() => {
        let view = ui.inflate(
            <vertical bg="{{context_framebg}}" padding="35 0 35 0">
                        <card gravity="center_vertical" cardElevation="0dp" cardBackgroundColor="{{context_framebg}}" margin="0 10 0 5">
                            <img src="{{context_Logo}}" w="100" h="35"/>
                            <linear gravity="center||right">
                                <img id="ExitScript" src="@drawable/ic_clear_black_48dp" w="35" h="35" tint="{{context_textColor}}" foreground="?attr/selectableItemBackground" clickable="true"/>
                                <linear gravity="center||right">
                                    <img id="GoBack" src="@drawable/ic_chevron_left_black_48dp" w="40" h="40" tint="{{context_textColor}}" foreground="?attr/selectableItemBackground" clickable="true"/>
                                </linear>
                            </linear>
                        </card>
                        <text text="{{context_thisScriptName+context_thisScriptVersion}}" textSize="15sp" textStyle="bold" textColor="{{context_textColor}}" gravity="left" margin="0 0 0 0"/>
                        <card gravity="center_vertical" cardElevation="0dp" cardBackgroundColor="{{context_framebg}}">
                            <text text="手动运行" textSize="15sp" textStyle="bold" textColor="{{context_textColor}}" gravity="left" margin="0 0 0 0"/>
                            <linear gravity="center||right">
                                <img id="Question" src="@drawable/ic_help_outline_black_48dp" w="20sp" h="20sp" tint="{{context_textColor}}" foreground="?attr/selectableItemBackground" clickable="true" marginRight="25"/>
                            </linear>
                        </card>
                        <text text="请选择脚本等待您打开活动页面的时间" textSize="10sp" textColor="{{context_textColor}}" gravity="left" margin="0 0 0 0"/>
                        
                        <linear orientation="horizontal" align="left" margin="0" paddingTop="0">
                            <card id="Waiting10s" layout_weight="50" h="40"cardCornerRadius="5dp" cardElevation="0dp" gravity="center_vertical" margin="0 5 5 5" cardBackgroundColor="{{context_SettingsCard}}" foreground="?attr/selectableItemBackground" clickable="true">
                                <text text="10s" textStyle="bold" textColor="{{context_textColor}}" textSize="15sp" gravity="center"  paddingBottom="5"/>
                            </card>
                            <card id="Waiting20s" layout_weight="50" h="40" cardCornerRadius="5dp" cardElevation="0dp" gravity="center_vertical" margin="0 5 0 5" cardBackgroundColor="{{context_SettingsCard}}" foreground="?attr/selectableItemBackground" clickable="true">
                                <text text="20s" textStyle="bold" textColor="{{context_textColor}}" textSize="15sp" gravity="center"  paddingBottom="5"/>
                            </card>
                            <card id="Waiting30s" layout_weight="50" h="40" cardCornerRadius="5dp" cardElevation="0dp" gravity="center_vertical" margin="5 5 0 5" cardBackgroundColor="{{context_SettingsCard}}" foreground="?attr/selectableItemBackground" clickable="true">
                                <text text="30s" textStyle="bold" textColor="{{context_textColor}}" textSize="15sp" gravity="center"  paddingBottom="5"/>
                            </card>
                            <card id="Waiting50s" layout_weight="50" h="40" cardCornerRadius="5dp" cardElevation="0dp" gravity="center_vertical" margin="5" cardBackgroundColor="{{context_SettingsCard}}" foreground="?attr/selectableItemBackground" clickable="true">
                                <text text="50s" textStyle="bold" textColor="{{context_textColor}}" textSize="15sp" gravity="center"  paddingBottom="5"/>
                            </card>
                        </linear>
                    </vertical>, null, false);

        let DHK = dialogs.build({
            customView: view,
            wrapInScrollView: false,
            autoDismiss: false,
            cancelable: false
        }).show();
        view.Question.longClick(() => {
            toast("帮助");
        });
        view.Question.click(() => {
            let answer = ui.inflate(
                <vertical bg="{{context_framebg}}" padding="35 0 35 0">
                                    <img src="@drawable/ic_help_outline_black_48dp" w="25" h="25" tint="{{context_textColor}}" foreground="?attr/selectableItemBackground" clickable="true" margin="0 5"/>
                                    <text text="要进行“手动运行”，您需要选择一个时间另脚本进入等待状态，并在脚本等待期间自行打开手机淘宝APP至活动页，脚本等待时间结束后则会开始运行" textSize="15sp" textStyle="bold" textColor="{{context_textColor}}" gravity="left" margin="0 5"/>
                                    <text text="所谓“手动运行”，仅需要您自行手动打开至活动页。若您直接点击“开始运行”后，脚本无法为您自动打开至活动页面，则您才需要尝试“手动运行”。" textSize="10sp" textStyle="bold" textColor="{{context_textColor}}" gravity="left" margin="0 5"/>
                                </vertical>, null, false);
            dialogs.build({
                customView: answer,

                wrapInScrollView: false,

                autoDismiss: false
            }).show();
        });
        view.ExitScript.longClick(() => {
            toast("关闭脚本");
        });
        view.GoBack.longClick(() => {
            toast("返回上一级");
        });
        view.GoBack.click(() => {
            DHK.dismiss();
            ScriptMENU();
        });
        view.ExitScript.click(() => {
            DHK.dismiss();
            exit();
        });

        view.Waiting10s.click(() => {
            DHK.dismiss();
            threads.start(function() {
                StopScriptWindowOn();
                FloatJournal();
                for (let deng = 10; deng > 0; deng--) {
                    toastLog("请打开手机淘宝至超级星秀猫的主界面\n剩余" + deng + "秒后运行脚本...");
                    sleep(1000);
                }
                DoTask();
            });
        });
        view.Waiting20s.click(() => {
            DHK.dismiss();
            threads.start(function() {
                StopScriptWindowOn();
                FloatJournal();
                for (let deng = 20; deng > 0; deng--) {
                    toastLog("请打开手机淘宝至超级星秀猫的主界面\n剩余" + deng + "秒后运行脚本...");
                    sleep(1000);
                }
                DoTask();
            });
        });
        view.Waiting30s.click(() => {
            DHK.dismiss();
            threads.start(function() {
                StopScriptWindowOn();
                FloatJournal();
                for (let deng = 30; deng > 0; deng--) {
                    toastLog("请打开手机淘宝至超级星秀猫的主界面\n剩余" + deng + "秒后运行脚本...");
                    sleep(1000);
                }
                DoTask();
            });
        });
        view.Waiting50s.click(() => {
            DHK.dismiss();
            threads.start(function() {
                StopScriptWindowOn();
                FloatJournal();
                for (let deng = 50; deng > 0; deng--) {
                    toastLog("请打开手机淘宝至超级星秀猫的主界面\n剩余" + deng + "秒后运行脚本...");
                    sleep(1000);
                }
                DoTask();
            });
        });
    });
}

function ScriptSettings() {
    ui.run(() => {
        let view = ui.inflate(
            <vertical bg="{{context_framebg}}" padding="35 0 35 0">
                        <card gravity="center_vertical" cardElevation="0dp" cardBackgroundColor="{{context_framebg}}" margin="0 10 0 5">
                            <img src="{{context_Logo}}" w="100" h="35"/>
                            <linear gravity="center||right">
                                <img id="ExitScript" src="@drawable/ic_clear_black_48dp" w="35" h="35" tint="{{context_textColor}}" foreground="?attr/selectableItemBackground" clickable="true"/>
                                <linear gravity="center||right">
                                    <img id="GoBack" src="@drawable/ic_chevron_left_black_48dp" w="40" h="40" tint="{{context_textColor}}" foreground="?attr/selectableItemBackground" clickable="true"/>
                                </linear>
                            </linear>
                        </card>
                        <text text="{{context_thisScriptName+context_thisScriptVersion}}" textSize="15sp" textStyle="bold" textColor="{{context_textColor}}" gravity="left" margin="0 0 0 0"/>
                        <text text="脚本设置" textSize="15sp" textStyle="bold" textColor="{{context_textColor}}" gravity="left" margin="0 0 0 0"/>
                        <card id="LmcsAndLmyc" layout_weight="50" h="40"cardCornerRadius="5dp" cardElevation="0dp" gravity="center_vertical" margin="0 5 5 5" cardBackgroundColor="{{context_SettingsCard}}" foreground="?attr/selectableItemBackground" clickable="true">
                            <linear orientation="horizontal" align="left" margin="0" paddingTop="0">
                                <img src="@drawable/ic_pets_black_48dp" w="20" h="20" tint="{{context_textColor}}" layout_gravity="left||center" margin="10 5"/>
                                <text text="撸猫次数与撸猫延迟设置" textStyle="bold" textColor="{{context_textColor}}" textSize="12sp"layout_gravity="left||center"/>
                            </linear>
                        </card>
                        <card id="UseRootBack" h="40" cardCornerRadius="5dp" cardElevation="0dp" gravity="center_vertical" margin="0 5 5 5"cardBackgroundColor="{{context_SettingsCard}}" foreground="?attr/selectableItemBackground" clickable="true">
                            <linear orientation="horizontal" gravity="center||left">
                                <img src="@drawable/ic_wrap_text_black_48dp" w="20" h="20" circle="true" tint="{{context_textColor}}" margin="10 5"/>
                                <linear orientation="vertical"  gravity="center">
                                    <text text="使用Root权限进行返回操作" textColor="{{context_textColor}}" textStyle="bold" textSize="12sp"/>
                                </linear>
                            </linear>
                            <linear gravity="center||right" marginRight="10">
                                <text id="UseRootBackText" textStyle="bold" textSize="12sp"/>
                            </linear>
                        </card>
                        <card id="AutoClickOn" h="40" cardCornerRadius="5dp" cardElevation="0dp" gravity="center_vertical" margin="0 5 5 5"cardBackgroundColor="{{context_SettingsCard}}" foreground="?attr/selectableItemBackground" clickable="true">
                            <linear orientation="horizontal" gravity="center||left">
                                <img src="@drawable/ic_touch_app_black_48dp" w="20" h="20" circle="true" tint="{{context_textColor}}" margin="10 5"/>
                                <linear orientation="vertical" gravity="center">
                                    <text text="使用“盲点click()”代替物理点击" textColor="{{context_textColor}}" textStyle="bold" textSize="12sp"/>
                                </linear>
                            </linear>
                            <linear gravity="center||right" marginRight="10">
                                <text id="AutoClickOnText" textStyle="bold" textSize="12sp"/>
                            </linear>
                        </card>
                        <card id="ToastOrFloatjournal" layout_weight="50" h="40"cardCornerRadius="5dp" cardElevation="0dp" gravity="center_vertical" margin="0 5 5 5" cardBackgroundColor="{{context_SettingsCard}}" foreground="?attr/selectableItemBackground" clickable="true">
                            <linear orientation="horizontal" align="left" margin="0" paddingTop="0">
                                <img src="@drawable/ic_chat_black_48dp" w="20" h="20" tint="{{context_textColor}}" layout_gravity="left||center" margin="10 5"/>
                                <text text="“吐司（Toast）”/“悬浮日志”切换" textStyle="bold" textColor="{{context_textColor}}" textSize="12sp"layout_gravity="left||center"/>
                            </linear>
                        </card>
                    </vertical>, null, false);

        function Setstate() {
            if (files.read("/storage/emulated/0/OrangeJs/星秀猫喵币++/脚本盲点开关.txt") == "true") {
                view.AutoClickOnText.setText("已开启");
                view.AutoClickOnText.setTextColor(colors.parseColor("#FF1E56"));
                MangDian = true;
            } else if (files.read("/storage/emulated/0/OrangeJs/星秀猫喵币++/脚本盲点开关.txt") == "false") {
                view.AutoClickOnText.setText("已关闭");
                view.AutoClickOnText.setTextColor(colors.parseColor("#17B978"));
                MangDian = false;
            }
            if (files.read("/storage/emulated/0/OrangeJs/星秀猫喵币++/Root返回开关.txt") == "true") {
                view.UseRootBackText.setText("已开启");
                view.UseRootBackText.setTextColor(colors.parseColor("#FF1E56"));
                RootBack = true;
            } else if (files.read("/storage/emulated/0/OrangeJs/星秀猫喵币++/Root返回开关.txt") == "false") {
                view.UseRootBackText.setText("已关闭");
                view.UseRootBackText.setTextColor(colors.parseColor("#17B978"));
                RootBack = false;
            }
        }
        Setstate();
        let DHK = dialogs.build({
            customView: view,
            wrapInScrollView: false,
            autoDismiss: false,
            cancelable: false
        }).show();
        view.LmcsAndLmyc.click(() => {
            let views = ui.inflate(
                <vertical padding="25 0" bg="{{context_framebg}}">
                                    <img src="@drawable/ic_pets_black_48dp" w="20" h="20" margin="5" tint="{{context_textColor}}"/>
                                    <text id="tips" textColor="{{context_textColor}}" textSize="10sp"/>
                                    <text text="脚本喂猫次数" textColor="{{context_textColor}}" textStyle="bold"/>
                                    <input id="times" textColor="{{context_textColor}}" inputType="number" hint="请输入1～100的数字" textColorHint="#9E9E9E"/>
                                    <text text="脚本喂猫延迟（单位：毫秒 1秒=1000毫秒）" textColor="{{context_textColor}}" textStyle="bold"/>
                                    <input id="timeyc" textColor="{{context_textColor}}" inputType="number" hint="请输入200～5000的数字" textColorHint="#9E9E9E"/>
                                    <linear orientation="horizontal" align="left" margin="0" paddingTop="0">
                                        <card layout_weight="50" h="40" cardCornerRadius="5dp" cardElevation="0dp" gravity="center_vertical" margin="5"cardBackgroundColor="{{context_SettingsCard}}">
                                            <text id="Determine" text="确定" textStyle="bold" textColor="{{context_textColor}}" gravity="center" textSize="12sp" foreground="?attr/selectableItemBackground" clickable="true"/>
                                        </card>
                                        <card layout_weight="50" h="40" cardCornerRadius="5dp" cardElevation="0dp" gravity="center_vertical" margin="5"cardBackgroundColor="{{context_SettingsCard}}">
                                            <text id="cancel" text="取消" textStyle="bold" textColor="{{context_textColor}}" gravity="center" textSize="12sp" foreground="?attr/selectableItemBackground" clickable="true"/>
                                        </card>
                                    </linear>
                                </vertical>, null, false);
            views.tips.setText("当前撸猫次数为：" + files.read("/storage/emulated/0/OrangeJs/星秀猫喵币++/撸猫次数.txt") + "次  撸猫延迟为：" + files.read("/storage/emulated/0/OrangeJs/星秀猫喵币++/撸猫延迟.txt") + "毫秒");
            views.Determine.click(() => {
                let lmcs = views.times.getText();
                let lmyc = views.timeyc.getText();
                if (lmcs <= 0) {
                    views.times.setError("撸猫次数不能小于或等于0次");
                } else if (lmcs > 100) {
                    views.times.setError("撸猫次数不能大于100次");
                } else if (lmyc < 200) {
                    views.timeyc.setError("撸猫延迟不能小于200毫秒");
                } else if (lmyc > 5000) {
                    views.timeyc.setError("撸猫延迟不能大于5000毫秒");
                } else {
                    DHKs.dismiss();
                    files.write("/storage/emulated/0/OrangeJs/星秀猫喵币++/撸猫次数.txt", lmcs);
                    files.write("/storage/emulated/0/OrangeJs/星秀猫喵币++/撸猫延迟.txt", lmyc);
                    let viewsss = ui.inflate(
                        <vertical bg="{{context_framebg}}" padding="25 0 25 0">
                                                    <img src="@drawable/ic_check_circle_black_48dp" h="35" tint="{{context_textColor}}" margin="5"/>
                                                    <text id="tipk" textSize="15" textStyle="bold" textColor="{{context_textColor}}" gravity="center" margin="5"/>
                                                </vertical>
                    );
                    viewsss.tipk.setText("撸猫次数已设置为：" + lmcs + "次\n撸猫延迟已设置为：" + lmyc + "毫秒");
                    let DHKS = dialogs.build({
                        customView: viewsss,
                        wrapInScrollView: false,
                        autoDismiss: false
                    }).show();
                }
            });
            views.cancel.click(() => {
                DHKs.dismiss();
            });
            var DHKs = dialogs.build({
                customView: views,
                wrapInScrollView: false,
                autoDismiss: false,
                cancelable: false
            }).show();
        });
        view.AutoClickOn.click(() => {
            if (MangDian == true) {
                files.write("/storage/emulated/0/OrangeJs/星秀猫喵币++/脚本盲点开关.txt", "false");
            } else {
                files.write("/storage/emulated/0/OrangeJs/星秀猫喵币++/脚本盲点开关.txt", "true");
            }
            Setstate();
        });
        view.UseRootBack.click(() => {
            if (RootBack == true) {
                files.write("/storage/emulated/0/OrangeJs/星秀猫喵币++/Root返回开关.txt", "false");
            } else {
                files.write("/storage/emulated/0/OrangeJs/星秀猫喵币++/Root返回开关.txt", "true");
            }
            Setstate();
        });

        view.ToastOrFloatjournal.click(() => {
            let answer = ui.inflate(
                <vertical bg="{{context_framebg}}" padding="35 0 35 0">
                                    <img src="@drawable/ic_chat_black_48dp" w="25" h="25" tint="{{context_textColor}}" foreground="?attr/selectableItemBackground" clickable="true" margin="0 5"/>
                                    <text id="WhatNow" textSize="15sp" textStyle="bold" textColor="{{context_textColor}}" gravity="left" margin="0 2"/>
                                    <text text="请选择您要切换的方式" textSize="10sp" textStyle="bold" textColor="{{context_textColor}}" gravity="left" margin="0 5"/>
                                    <linear orientation="horizontal" align="left" margin="0" paddingTop="0">
                                        <card id="UseToast" layout_weight="50" h="50"cardCornerRadius="5dp" cardElevation="0dp" gravity="center_vertical" margin="0 5 5 5" cardBackgroundColor="{{context_SettingsCard}}" foreground="?attr/selectableItemBackground" clickable="true">
                                            <vertical gravity="center">
                                                <img src="@drawable/ic_speaker_notes_black_48dp" h="20" tint="{{context_textColor}}" margin="0 10 0 5"/>
                                                <text  text="吐司（Toast）" textStyle="bold" textColor="{{context_textColor}}" textSize="8sp" gravity="center"  paddingBottom="5"/>
                                            </vertical>
                                        </card>
                                        <card id="UseFloatjournal" layout_weight="50" h="50" cardCornerRadius="5dp" cardElevation="0dp" gravity="center_vertical" margin="0 5 0 5" cardBackgroundColor="{{context_SettingsCard}}" foreground="?attr/selectableItemBackground" clickable="true">
                                            <vertical gravity="center">
                                                <img src="@drawable/ic_assignment_black_48dp" h="20" tint="{{context_textColor}}" margin="0 10 0 5"/>
                                                <text text="悬浮日志" textStyle="bold" textColor="{{context_textColor}}" gravity="center" textSize="8sp" paddingBottom="5"/>
                                            </vertical>
                                        </card>
                                    </linear>
                                </vertical>, null, false);
            if (files.exists("/storage/emulated/0/OrangeJs/星秀猫喵币++/吐司or日志.txt") == true) {
                if (files.read("/storage/emulated/0/OrangeJs/星秀猫喵币++/吐司or日志.txt") == "日志") {
                    answer.WhatNow.setText("当前脚本使用：悬浮日志");
                } else if (files.read("/storage/emulated/0/OrangeJs/星秀猫喵币++/吐司or日志.txt") == "吐司") {
                    answer.WhatNow.setText("当前脚本使用：吐司（Toast）");
                }
            }
            answer.UseToast.click(() => {
                files.createWithDirs("/storage/emulated/0/OrangeJs/星秀猫喵币++/吐司or日志.txt");
                if (files.exists("/storage/emulated/0/OrangeJs/星秀猫喵币++/吐司or日志.txt") == true) {
                    try {
                        files.read("/storage/emulated/0/OrangeJs/星秀猫喵币++/吐司or日志.txt");
                        files.write("/storage/emulated/0/OrangeJs/星秀猫喵币++/吐司or日志.txt", "吐司");
                        DHKs.dismiss();
                        let answerT = ui.inflate(
                            <vertical bg="{{context_framebg}}" padding="35 0 35 0">
                                                        <img src="@drawable/ic_check_circle_black_48dp" w="25" h="25" tint="{{context_textColor}}" foreground="?attr/selectableItemBackground" clickable="true" margin="0 5"/>
                                                        <text id="tipR" textSize="15sp" textStyle="bold" textColor="{{context_textColor}}" gravity="left" margin="0 2"/>
                                                        <text id="Ttips" textSize="10sp" textColor="{{context_textColor}}" gravity="left" margin="0 2"/>
                                                    </vertical>, null, false);
                        answerT.tipR.setText("已成功切换为“吐司（Toast）”\n重新运行脚本即可生效");
                        dialogs.build({
                            customView: answerT,
                            wrapInScrollView: false,
                            autoDismiss: false
                        }).show();
                    } catch (e) {
                        log(e);
                        DHKs.dismiss();
                        let answerT = ui.inflate(
                            <vertical bg="{{context_framebg}}" padding="35 0 35 0">
                                                        <img src="@drawable/ic_warning_black_48dp" w="25" h="25" tint="{{context_textColor}}" foreground="?attr/selectableItemBackground" clickable="true" margin="0 5"/>
                                                        <text text="存储权限异常，切换为“吐司（Toast）”失败！" textSize="15sp" textStyle="bold" textColor="{{context_textColor}}" gravity="left" margin="0 2"/>
                                                        <text id="Ttips" textSize="10sp" textColor="{{context_textColor}}" gravity="left" margin="0 2"/>
                                                    </vertical>, null, false);
                        answerT.Ttips.setText("由于脚本需要将脚本设置文件保存至您的设备中，因此请您授予本软件“存储权限”以保障软件正常运行\n" + e);
                        dialogs.build({
                            customView: answerT,
                            wrapInScrollView: false,
                            autoDismiss: false
                        }).show();
                    }
                } else {
                    let answerT = ui.inflate(
                        <vertical bg="{{context_framebg}}" padding="35 0 35 0">
                                                    <img src="@drawable/ic_warning_black_48dp" w="25" h="25" tint="{{context_textColor}}" foreground="?attr/selectableItemBackground" clickable="true" margin="0 5"/>
                                                    <text text="存储权限异常，切换为“吐司（Toast）”失败！" textSize="15sp" textStyle="bold" textColor="{{context_textColor}}" gravity="left" margin="0 2"/>
                                                    <text id="Ttips" textSize="10sp" textColor="{{context_textColor}}" gravity="left" margin="0 2"/>
                                                </vertical>, null, false);
                    answerT.Ttips.setText("由于脚本需要将脚本设置文件保存至您的设备中，因此请您授予本软件“存储权限”以保障软件正常运行");
                    dialogs.build({
                        customView: answerT,
                        wrapInScrollView: false,
                        autoDismiss: false
                    }).show();
                }
            });
            answer.UseFloatjournal.click(() => {
                files.createWithDirs("/storage/emulated/0/OrangeJs/星秀猫喵币++/吐司or日志.txt");
                if (files.exists("/storage/emulated/0/OrangeJs/星秀猫喵币++/吐司or日志.txt") == true) {
                    try {
                        files.read("/storage/emulated/0/OrangeJs/星秀猫喵币++/吐司or日志.txt");
                        files.write("/storage/emulated/0/OrangeJs/星秀猫喵币++/吐司or日志.txt", "日志");
                        DHKs.dismiss();
                        let answerT = ui.inflate(
                            <vertical bg="{{context_framebg}}" padding="35 0 35 0">
                                                        <img src="@drawable/ic_check_circle_black_48dp" w="25" h="25" tint="{{context_textColor}}" foreground="?attr/selectableItemBackground" clickable="true" margin="0 5"/>
                                                        <text id="tipR" textSize="15sp" textStyle="bold" textColor="{{context_textColor}}" gravity="left" margin="0 2"/>
                                                        <text id="Ttips" textSize="10sp" textColor="{{context_textColor}}" gravity="left" margin="0 2"/>
                                                    </vertical>, null, false);
                        answerT.tipR.setText("已成功切换为“悬浮日志”\n重新运行脚本即可生效");
                        dialogs.build({
                            customView: answerT,
                            wrapInScrollView: false,
                            autoDismiss: false
                        }).show();
                    } catch (e) {
                        log(e);
                        DHKs.dismiss();
                        let answerT = ui.inflate(
                            <vertical bg="{{context_framebg}}" padding="35 0 35 0">
                                                        <img src="@drawable/ic_warning_black_48dp" w="25" h="25" tint="{{context_textColor}}" foreground="?attr/selectableItemBackground" clickable="true" margin="0 5"/>
                                                        <text text="存储权限异常，切换为“悬浮日志”失败！" textSize="15sp" textStyle="bold" textColor="{{context_textColor}}" gravity="left" margin="0 2"/>
                                                        <text id="Ttips" textSize="10sp" textColor="{{context_textColor}}" gravity="left" margin="0 2"/>
                                                    </vertical>, null, false);
                        answerT.Ttips.setText("由于脚本需要将脚本设置文件保存至您的设备中，因此请您授予本软件“存储权限”以保障软件正常运行\n" + e);
                        dialogs.build({
                            customView: answerT,
                            wrapInScrollView: false,
                            autoDismiss: false
                        }).show();
                    }
                } else {
                    let answerT = ui.inflate(
                        <vertical bg="{{context_framebg}}" padding="35 0 35 0">
                                                    <img src="@drawable/ic_warning_black_48dp" w="25" h="25" tint="{{context_textColor}}" foreground="?attr/selectableItemBackground" clickable="true" margin="0 5"/>
                                                    <text text="存储权限异常，切换为“悬浮日志”失败！" textSize="15sp" textStyle="bold" textColor="{{context_textColor}}" gravity="left" margin="0 2"/>
                                                    <text id="Ttips" textSize="10sp" textColor="{{context_textColor}}" gravity="left" margin="0 2"/>
                                                </vertical>, null, false);
                    answerT.Ttips.setText("由于脚本需要将脚本设置文件保存至您的设备中，因此请您授予本软件“存储权限”以保障软件正常运行");
                    dialogs.build({
                        customView: answerT,
                        wrapInScrollView: false,
                        autoDismiss: false
                    }).show();
                }
            });
            let DHKs = dialogs.build({
                customView: answer,
                wrapInScrollView: false,
                autoDismiss: false
            }).show();
        });

        view.ExitScript.longClick(() => {
            toast("关闭脚本");
        });
        view.GoBack.longClick(() => {
            toast("返回上一级");
        });
        view.GoBack.click(() => {
            DHK.dismiss();
            ScriptMENU();
        });
        view.ExitScript.click(() => {
            DHK.dismiss();
            exit();
        });
    });
}

if (files.exists("/storage/emulated/0/OrangeJs/星秀猫喵币++/吐司or日志.txt") == true && files.read("/storage/emulated/0/OrangeJs/星秀猫喵币++/吐司or日志.txt") == "吐司") {
    var ChangeToastLog = null;
} else {
    var ChangeToastLog = true;
}
if (ChangeToastLog == true) {
    function toastLog(message) {
        log(message);
        var myDate = new Date();
        ui.run(() => {
            context_FloatJournal.WZ.setText(myDate.getHours() + "时" + myDate.getMinutes() + "分" + myDate.getSeconds() + "秒：" + message + "\n" + context_FloatJournal.WZ.getText());
        });
    }
}

function StopScriptWindowOn() {
    var window = floaty.window(
        <frame>
            <button id="action" text="点击停止脚本" w="120" h="40" bg="#F0EB4336"/>
        </frame>
    );
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
                if (new Date().getTime() - downTime > 1500) {
                    toast("长按可以移动位置哦～");
                }
                return true;
            case event.ACTION_UP:
                if (Math.abs(event.getRawY() - y) < 5 && Math.abs(event.getRawX() - x) < 5) {
                    onClick();
                }
                return true;
        }
        return true;
    });

    function onClick() {
        floaty.closeAll();
        threads.shutDownAll();
        let view = ui.inflate(
            <vertical bg="{{context_framebg}}" padding="25 0 25 0">
                <img src="@drawable/ic_warning_black_48dp" h="35" tint="{{context_textColor}}" margin="5"/>
                <text text="星秀猫喵币++：已为您停止运行" textSize="15" textStyle="bold" textColor="{{context_textColor}}" gravity="center" margin="5"/>
            </vertical>
        );
        dialogs.build({
            customView: view,
            wrapInScrollView: false,
            autoDismiss: true
        }).show();
        log("用户点击了停止按钮");
        exit();
    }
}

function FloatJournal() {
    if (ChangeToastLog == true) {
        context_FloatJournal = floaty.rawWindow(
            <card bg="#80000000">
                <vertical align="center">
                    <img src="{{getStorageData('APPbasic', 'URLprefix')}}/OrangeJs-logoWhite.png" h="30" margin="0 10 0 5"/>//黑色logo
                    <text text="─ 当前脚本运行日志 ─" textSize="15" color="#FFFFFF" textStyle="bold" gravity="center" margin="0 0 0 5"/>
                    <text id="WZ" text="" textSize="15" color="#FFFFFF" marginLeft="10" gravity="left"/>
                </vertical>
            </card>
        );
        context_FloatJournal.setSize(device.width, 500);
        context_FloatJournal.setTouchable(false);
        context_FloatJournal.setPosition(0, device.height - 500);
    }
}
if (files.listDir("/sdcard/").length == 0) {
    toastLog("未授予“存储权限”，使用默认配置");
    lmcs = 10;
    lmyc = 1000;
    MangDian = false;
    RootBack = false;
} else {
    if (files.exists("/storage/emulated/0/OrangeJs/星秀猫喵币++/脚本盲点开关.txt") == true) {
        if (files.read("/storage/emulated/0/OrangeJs/星秀猫喵币++/脚本盲点开关.txt") == "true") {
            MangDian = true;
        } else if (files.read("/storage/emulated/0/OrangeJs/星秀猫喵币++/脚本盲点开关.txt") == "false") {
            MangDian = false;
        } else {
            toastLog("脚本配置文件错误，已尝试删除错误配置文件：(/storage/emulated/0/OrangeJs/星秀猫喵币++/脚本盲点开关.txt)" + files.remove("/storage/emulated/0/OrangeJs/星秀猫喵币++/脚本盲点开关.txt"));
            files.createWithDirs("/storage/emulated/0/OrangeJs/星秀猫喵币++/脚本盲点开关.txt");
            files.write("/storage/emulated/0/OrangeJs/星秀猫喵币++/脚本盲点开关.txt", "false");
            MangDian = false;
        }
    } else {
        files.createWithDirs("/storage/emulated/0/OrangeJs/星秀猫喵币++/脚本盲点开关.txt");
        files.write("/storage/emulated/0/OrangeJs/星秀猫喵币++/脚本盲点开关.txt", "false");
        MangDian = false;
    }
    if (files.exists("/storage/emulated/0/OrangeJs/星秀猫喵币++/Root返回开关.txt") == true) {
        if (files.read("/storage/emulated/0/OrangeJs/星秀猫喵币++/Root返回开关.txt") == "true") {
            RootBack = true;
        } else if (files.read("/storage/emulated/0/OrangeJs/星秀猫喵币++/Root返回开关.txt") == "false") {
            RootBack = false;
        } else {
            toastLog("脚本配置文件错误，已尝试删除错误配置文件：(/storage/emulated/0/OrangeJs/星秀猫喵币++/Root返回开关.txt)" + files.remove("/storage/emulated/0/OrangeJs/星秀猫喵币++/Root返回开关.txt"));
            files.createWithDirs("/storage/emulated/0/OrangeJs/星秀猫喵币++/Root返回开关.txt");
            files.write("/storage/emulated/0/OrangeJs/星秀猫喵币++/Root返回开关.txt", "false");
            RootBack = false;
        }
    } else {
        files.createWithDirs("/storage/emulated/0/OrangeJs/星秀猫喵币++/Root返回开关.txt");
        files.write("/storage/emulated/0/OrangeJs/星秀猫喵币++/Root返回开关.txt", "false");
        RootBack = false;
    }
    if (files.exists("/storage/emulated/0/OrangeJs/星秀猫喵币++/撸猫次数.txt") == true) {
        if (isNaN(files.read("/storage/emulated/0/OrangeJs/星秀猫喵币++/撸猫次数.txt")) == false &&
            Number(files.read("/storage/emulated/0/OrangeJs/星秀猫喵币++/撸猫次数.txt")) > 0 &&
            Number(files.read("/storage/emulated/0/OrangeJs/星秀猫喵币++/撸猫次数.txt")) <= 100) {
            lmcs = Number(files.read("/storage/emulated/0/OrangeJs/星秀猫喵币++/撸猫次数.txt"));
        } else {
            toastLog("脚本配置文件错误，已尝试删除错误配置文件并调整为默认配置：(/storage/emulated/0/OrangeJs/星秀猫喵币++/撸猫次数.txt)" + files.remove("/storage/emulated/0/OrangeJs/星秀猫喵币++/撸猫次数.txt"));
            files.createWithDirs("/storage/emulated/0/OrangeJs/星秀猫喵币++/撸猫次数.txt");
            files.write("/storage/emulated/0/OrangeJs/星秀猫喵币++/撸猫次数.txt", "10");
            lmcs = 10;
        }
    } else {
        files.createWithDirs("/storage/emulated/0/OrangeJs/星秀猫喵币++/撸猫次数.txt");
        files.write("/storage/emulated/0/OrangeJs/星秀猫喵币++/撸猫次数.txt", "10");
        lmcs = 10;
    }
    if (files.exists("/storage/emulated/0/OrangeJs/星秀猫喵币++/撸猫延迟.txt") == true) {
        if (isNaN(files.read("/storage/emulated/0/OrangeJs/星秀猫喵币++/撸猫延迟.txt")) == false &&
            Number(files.read("/storage/emulated/0/OrangeJs/星秀猫喵币++/撸猫延迟.txt")) > 199 &&
            Number(files.read("/storage/emulated/0/OrangeJs/星秀猫喵币++/撸猫延迟.txt")) <= 5000) {
            lmyc = Number(files.read("/storage/emulated/0/OrangeJs/星秀猫喵币++/撸猫延迟.txt"));
        } else {
            toastLog("脚本配置文件错误，已尝试删除错误配置文件并调整为默认配置：(/storage/emulated/0/OrangeJs/星秀猫喵币++/撸猫延迟.txt)" + files.remove("/storage/emulated/0/OrangeJs/星秀猫喵币++/撸猫延迟.txt"));
            files.createWithDirs("/storage/emulated/0/OrangeJs/星秀猫喵币++/撸猫延迟.txt");
            files.write("/storage/emulated/0/OrangeJs/星秀猫喵币++/撸猫延迟.txt", "2000");
            lmyc = 1000;
        }
    } else {
        files.createWithDirs("/storage/emulated/0/OrangeJs/星秀猫喵币++/撸猫延迟.txt");
        files.write("/storage/emulated/0/OrangeJs/星秀猫喵币++/撸猫延迟.txt", "2000");
        lmyc = 1000;
    }
}
Keyword = "超级星秀猫";

function Justback() {
    click_CancelUpdateButton();
    if (RootBack != true) {
        toastLog("尝试使用“无障碍权限”进行返回")
        back();
        sleep(1000);
    } else {
        toastLog("尝试使用“ROOT权限”进行返回")
        try {
            Back();
        } catch (e) {
            toastLog("“使用Root权限返回出错：”" + e);
        }
        sleep(1000);
    }
}

function click_CancelUpdateButton() {
    if (className("android.widget.TextView").text("提示").findOnce() != null &&
        className("android.widget.TextView").text("提示").findOnce().parent().child(className("android.widget.TextView").text("提示").findOnce().parent().childCount() - 1).className() == "android.widget.LinearLayout" &&
        className("android.widget.TextView").text("提示").findOnce().parent().child(className("android.widget.TextView").text("提示").findOnce().parent().childCount() - 1).childCount() > 0 &&
        className("android.widget.TextView").text("提示").findOnce().parent().child(className("android.widget.TextView").text("提示").findOnce().parent().childCount() - 1).child(0).childCount() > 0 &&
        className("android.widget.TextView").text("提示").findOnce().parent().child(className("android.widget.TextView").text("提示").findOnce().parent().childCount() - 1).child(0).child(0).text() == "取消") {
        let a = className("android.widget.TextView").text("提示").findOnce().parent().child(className("android.widget.TextView").text("提示").findOnce().parent().childCount() - 1).child(0).child(0);
        if (a.clickable() == true && MangDian == true) {
            a.click();
            toastLog("已尝试盲点“取消升级”按钮");
        } else {
            let b = a.bounds();
            click(b.centerX(), b.centerY());
            toastLog("已尝试点击“取消升级”按钮");
        }
        sleep(2000);
    }
}

function openInTask() {
    Done = 0;
    while (true) {
        click_CancelUpdateButton();
        let sousuo = className("android.widget.RelativeLayout").id("com.taobao.taobao:id/tbsearch_searchdoor").findOnce();
        let shouye = className("android.widget.LinearLayout").id("com.taobao.taobao:id/action_bar_root").findOnce();
        let Zhushouye = className("android.widget.FrameLayout").id("com.taobao.taobao:id/homepage_root_layout").findOnce();
        let mytaobao = className("android.support.v7.widget.RecyclerView").id("com.taobao.taobao:id/mytaobao_listview").findOnce();
        if (shouye != null &&
            shouye.childCount() > 0 &&
            shouye.child(0).childCount() > 0 &&
            shouye.child(0).child(0).childCount() > 0 &&
            shouye.child(0).child(0).child(0).childCount() > 0 &&
            shouye.child(0).child(0).child(0).child(0).childCount() > 1 &&
            shouye.child(0).child(0).child(0).child(0).child(1).childCount() > 1 &&
            shouye.child(0).child(0).child(0).child(0).child(1).child(1).childCount() > 4 &&
            shouye.child(0).child(0).child(0).child(0).child(1).child(1).child(4).childCount() > 0 &&
            shouye.child(0).child(0).child(0).child(0).child(1).child(1).child(4).child(0).childCount() > 0) {
            ha = false;
            for (let i = 0; i < shouye.child(0).child(0).child(0).child(0).child(1).child(1).child(4).child(0).childCount(); i++) {
                if (shouye.child(0).child(0).child(0).child(0).child(1).child(1).child(4).child(0).child(i).className() == "android.widget.FrameLayout" &&
                    shouye.child(0).child(0).child(0).child(0).child(1).child(1).child(4).child(0).child(i).desc() != null &&
                    shouye.child(0).child(0).child(0).child(0).child(1).child(1).child(4).child(0).child(i).desc() == "养猫分20亿") {
                    if (shouye.child(0).child(0).child(0).child(0).child(1).child(1).child(4).child(0).child(i).clickable() == true && MangDian == true) {
                        shouye.child(0).child(0).child(0).child(0).child(1).child(1).child(4).child(0).child(i).click();
                        toastLog("已尝试盲点“" + shouye.child(0).child(0).child(0).child(0).child(1).child(1).child(4).child(0).child(i).desc() + "”按钮");
                    } else {
                        let a = shouye.child(0).child(0).child(0).child(0).child(1).child(1).child(4).child(0).child(i).bounds();
                        click(a.centerX(), a.centerY());
                        toastLog("已尝试点击“" + shouye.child(0).child(0).child(0).child(0).child(1).child(1).child(4).child(0).child(i).desc() + "”按钮");
                    }
                    sleep(3000);
                    var ha = true;
                    break;
                }
            }
            if (ha == true) {
                break;
            }
        }
        if (shouye != null &&
            shouye.childCount() > 0 &&
            shouye.child(0).childCount() > 0 &&
            shouye.child(0).child(0).childCount() > 0 &&
            shouye.child(0).child(0).child(0).childCount() > 1 &&
            shouye.child(0).child(0).child(0).child(1).childCount() > 5 &&
            shouye.child(0).child(0).child(0).child(1).child(5).childCount() > 0 &&
            shouye.child(0).child(0).child(0).child(1).child(5).child(0).childCount() > 1 &&
            shouye.child(0).child(0).child(0).child(1).child(5).child(0).child(1).childCount() > 0) {
            var ha = false;
            for (let i = 0; i < shouye.child(0).child(0).child(0).child(1).child(5).child(0).child(1).childCount(); i++) {
                if (shouye.child(0).child(0).child(0).child(1).child(5).child(0).child(1).child(i).className() == "android.widget.FrameLayout" &&
                    shouye.child(0).child(0).child(0).child(1).child(5).child(0).child(1).child(i).desc() != null &&
                    shouye.child(0).child(0).child(0).child(1).child(5).child(0).child(1).child(i).desc() == "养猫分20亿") {
                    if (shouye.child(0).child(0).child(0).child(1).child(5).child(0).child(1).child(i).clickable() == "true" && MangDian == true) {
                        shouye.child(0).child(0).child(0).child(1).child(5).child(0).child(1).child(i).click();
                        toastLog("已尝试盲点“" + shouye.child(0).child(0).child(0).child(1).child(5).child(0).child(1).child(i).desc() + "”按钮");
                    } else {
                        let a = shouye.child(0).child(0).child(0).child(1).child(5).child(0).child(1).child(i).bounds();
                        click(a.centerX(), a.centerY());
                        toastLog("已尝试点击“" + shouye.child(0).child(0).child(0).child(1).child(5).child(0).child(1).child(i).desc() + "”按钮");
                    }
                    sleep(3000);
                    var ha = true;
                    break;
                }
            }
            if (ha == true) {
                break;
            }
        }
        if (Done < 3 && shouye != null &&
            shouye.childCount() > 0 &&
            shouye.child(0).childCount() > 1 &&
            shouye.child(0).child(1).childCount() > 0 &&
            shouye.child(0).child(1).child(0).childCount() > 2 &&
            shouye.child(0).child(1).child(0).child(2).childCount() > 4 &&
            shouye.child(0).child(1).child(0).child(2).child(4).desc() != null &&
            shouye.child(0).child(1).child(0).child(2).child(4).desc() == "我的淘宝") {
            Done++;
            if (shouye.child(0).child(1).child(0).child(2).child(4).clickable() == true && MangDian == true) {
                shouye.child(0).child(1).child(0).child(2).child(4).click();
                toastLog("已尝试盲点“" + shouye.child(0).child(1).child(0).child(2).child(4).desc() + "”按钮");
            } else {
                let a = shouye.child(0).child(1).child(0).child(2).child(4).bounds();
                click(a.centerX(), a.centerY());
                toastLog("已尝试点击“" + shouye.child(0).child(1).child(0).child(2).child(4).desc() + "”按钮");
            }
            sleep(3000);
        } else if (sousuo != null &&
            sousuo.childCount() > 2 &&
            sousuo.child(2).childCount() > 0 &&
            sousuo.child(2).child(0).childCount() > 0 &&
            sousuo.child(2).child(0).child(0).childCount() > 2 &&
            sousuo.child(2).child(0).child(0).child(2).text() == "搜索" &&
            sousuo.child(2).child(0).child(0).child(1).childCount() > 0 &&
            sousuo.child(2).child(0).child(0).child(1).child(0).id() == "com.taobao.taobao:id/searchEdit") {
            toastLog("输入关键词：“" + Keyword + "”(" + sousuo.child(2).child(0).child(0).child(1).child(0).setText(Keyword) + ")");
            sleep(1000);
            if (sousuo.child(2).child(0).child(0).child(2).clickable() == true && MangDian == true) {
                sousuo.child(2).child(0).child(0).child(2).click();
                toastLog("已尝试盲点“" + sousuo.child(2).child(0).child(0).child(2).text() + "”按钮");
            } else {
                let a = sousuo.child(2).child(0).child(0).child(2).bounds();
                click(a.centerX(), a.centerY());
                toastLog("已尝试点击“" + sousuo.child(2).child(0).child(0).child(2).text() + "”按钮");
            }
            sleep(3000);
            break;
        } else if (Zhushouye != null &&
            Zhushouye.childCount() > 2 &&
            Zhushouye.child(2).childCount() > 0 &&
            Zhushouye.child(2).child(0).childCount() > 0 &&
            Zhushouye.child(2).child(0).child(0).childCount() > 3 &&
            Zhushouye.child(2).child(0).child(0).child(3).childCount() > 1 &&
            Zhushouye.child(2).child(0).child(0).child(3).child(1).childCount() > 3 &&
            Zhushouye.child(2).child(0).child(0).child(3).child(1).child(3).desc() != null &&
            Zhushouye.child(2).child(0).child(0).child(3).child(1).child(3).desc() == "搜索") {
            if (Zhushouye.child(2).child(0).child(0).child(3).child(1).child(3).clickable() == true && MangDian == true) {
                Zhushouye.child(2).child(0).child(0).child(3).child(1).child(3).click();
                toastLog("已尝试盲点首页“" + Zhushouye.child(2).child(0).child(0).child(3).child(1).child(3).desc() + "”按钮");
            } else {
                let a = Zhushouye.child(2).child(0).child(0).child(3).child(1).child(3).bounds();
                click(a.centerX(), a.centerY());
                toastLog("已尝试点击首页“" + Zhushouye.child(2).child(0).child(0).child(3).child(1).child(3).desc() + "”按钮");
            }
            sleep(3000);
        } else if (shouye != null &&
            shouye.childCount() > 0 &&
            shouye.child(0).childCount() > 0 &&
            shouye.child(0).child(0).childCount() > 0 &&
            shouye.child(0).child(0).child(0).childCount() > 2 &&
            shouye.child(0).child(0).child(0).child(2).childCount() > 0 &&
            shouye.child(0).child(0).child(0).child(2).child(0).childCount() > 0 &&
            shouye.child(0).child(0).child(0).child(2).child(0).child(0).childCount() > 4 &&
            shouye.child(0).child(0).child(0).child(2).child(0).child(0).child(4).childCount() > 1 &&
            shouye.child(0).child(0).child(0).child(2).child(0).child(0).child(4).child(1).childCount() > 3 &&
            shouye.child(0).child(0).child(0).child(2).child(0).child(0).child(4).child(1).child(3).desc() != null &&
            shouye.child(0).child(0).child(0).child(2).child(0).child(0).child(4).child(1).child(3).desc() == "搜索") {
            if (shouye.child(0).child(0).child(0).child(2).child(0).child(0).child(4).child(1).child(3).clickable() == true && MangDian == true) {
                shouye.child(0).child(0).child(0).child(2).child(0).child(0).child(4).child(1).child(3).click();
                toastLog("已尝试盲点“" + shouye.child(0).child(0).child(0).child(2).child(0).child(0).child(4).child(1).child(3).desc() + "”按钮");
            } else {
                let a = shouye.child(0).child(0).child(0).child(2).child(0).child(0).child(4).child(1).child(3).bounds();
                click(a.centerX(), a.centerY());
                toastLog("已尝试点击“" + shouye.child(0).child(0).child(0).child(2).child(0).child(0).child(4).child(1).child(3).desc() + "”按钮");
            }
            sleep(3000);
        } else if (Zhushouye != null &&
            Zhushouye.childCount() > 2 &&
            Zhushouye.child(2).childCount() > 0 &&
            Zhushouye.child(2).child(0).childCount() > 0 &&
            Zhushouye.child(2).child(0).child(0).childCount() > 3 &&
            Zhushouye.child(2).child(0).child(0).child(3).childCount() > 0 &&
            Zhushouye.child(2).child(0).child(0).child(3).child(0).childCount() > 2 &&
            Zhushouye.child(2).child(0).child(0).child(3).child(0).child(2).childCount() > 3 &&
            Zhushouye.child(2).child(0).child(0).child(3).child(0).child(2).child(3).desc() != null &&
            Zhushouye.child(2).child(0).child(0).child(3).child(0).child(2).child(3).desc() == "搜索") {
            if (Zhushouye.child(2).child(0).child(0).child(3).child(0).child(2).child(3).clickable() == true && MangDian == true) {
                Zhushouye.child(2).child(0).child(0).child(3).child(0).child(2).child(3).click();
                toastLog("已尝试盲点首页“" + Zhushouye.child(2).child(0).child(0).child(3).child(0).child(2).child(3).desc() + "”按钮");
            } else {
                let a = Zhushouye.child(2).child(0).child(0).child(3).child(0).child(2).child(3).bounds();
                click(a.centerX(), a.centerY());
                toastLog("已尝试点击首页“" + Zhushouye.child(2).child(0).child(0).child(3).child(0).child(2).child(3).desc() + "”按钮");
            }
            sleep(3000);
        } else if (shouye != null &&
            shouye.childCount() > 0 &&
            shouye.child(0).childCount() > 1 &&
            shouye.child(0).child(1).childCount() > 0 &&
            shouye.child(0).child(1).child(0).childCount() > 2 &&
            shouye.child(0).child(1).child(0).child(2).childCount() > 0 &&
            shouye.child(0).child(1).child(0).child(2).child(0).desc() != null &&
            shouye.child(0).child(1).child(0).child(2).child(0).desc() == "首页") {
            if (shouye.child(0).child(1).child(0).child(2).child(0).clickable() == true && MangDian == true) {
                shouye.child(0).child(1).child(0).child(2).child(0).click();
                toastLog("已尝试盲点“" + shouye.child(0).child(1).child(0).child(2).child(0).desc() + "”按钮");
            } else {
                let a = shouye.child(0).child(1).child(0).child(2).child(0).bounds();
                click(a.centerX(), a.centerY());
                toastLog("已尝试点击“" + shouye.child(0).child(1).child(0).child(2).child(0).desc() + "”按钮");
            }
            sleep(3000);
        } else if (currentPackage() != "com.taobao.taobao") {
            launch("com.taobao.taobao");
            for (let i = 3; i > 0; i--) {
                toastLog("正在启动“手机淘宝”，请稍等" + i + "秒……");
                sleep(1000);
            }
        } else {
            Justback();
            sleep(1000);
        }
    }
    for (let i = 10; i > 0; i--) {
        if (makeA("test") != false) {
            toastLog("已成功打开“超级星秀猫”活动界面");
            sleep(2000);
            break;
        } else {
            toastLog("正在等待“超级星秀猫”活动界面加载，请等待" + i + "秒……");
            sleep(1000);
        }
    }
}

function makeA(mode) {
    var a = className("com.uc.webkit.bb").findOnce();
    if (className("com.uc.webkit.ay").findOnce() != null) {
        var a = className("com.uc.webkit.ay").findOnce();
    }
    if (a != null &&
        a.childCount() > 0 &&
        a.child(0).childCount() > 0 &&
        a.child(0).child(0).childCount() > 0 &&
        a.child(0).child(0).child(0).childCount() > 0 &&
        a.child(0).child(0).child(0).child(0).childCount() > 0 &&
        a.child(0).child(0).child(0).child(0).child(0).childCount() > 0 &&
        a.child(0).child(0).child(0).child(0).child(0).child(0).className() == "android.widget.Image"
    ) {
        return a.child(0).child(0).child(0).child(0).child(0);
    } else if (a != null &&
        a.childCount() > 0 &&
        a.child(0).childCount() > 0 &&
        a.child(0).child(0).childCount() > 0 &&
        a.child(0).child(0).child(0).childCount() > 0 &&
        a.child(0).child(0).child(0).child(0).childCount() > 0 &&
        a.child(0).child(0).child(0).child(0).child(0).childCount() > 0 &&
        a.child(0).child(0).child(0).child(0).child(0).child(0).childCount() > 0 &&
        a.child(0).child(0).child(0).child(0).child(0).child(0).child(0).className() == "android.widget.Image"
    ) {
        return a.child(0).child(0).child(0).child(0).child(0).child(0);
    } else {
        if (mode != "test") {
            toastLog("找不到“A控件”，正在重新尝试");
            openInTask();
            DoTask();
        }
        return false;
    }
}

function DoTask() {
    function makeB(mode) {
        var a = className("com.uc.webkit.bb").findOnce();
        if (className("com.uc.webkit.ay").findOnce() != null) {
            var a = className("com.uc.webkit.ay").findOnce();
        }
        if (a != null &&
            a.childCount() > 0 &&
            a.child(0).childCount() > 0 &&
            a.child(0).child(0).childCount() > 0 &&
            a.child(0).child(0).child(0).childCount() > 0 &&
            a.child(0).child(0).child(0).child(0).childCount() > 0 &&
            a.child(0).child(0).child(0).child(0).child(0).childCount() > 0 &&
            a.child(0).child(0).child(0).child(0).child(0).child(0).childCount() > 0 &&
            a.child(0).child(0).child(0).child(0).child(0).child(0).child(0).childCount() > 1 &&
            a.child(0).child(0).child(0).child(0).child(0).child(0).child(0).child(1).childCount() > 0 &&
            a.child(0).child(0).child(0).child(0).child(0).child(0).child(0).child(1).child(0).className() == "android.widget.ListView"
        ) {
            return a.child(0).child(0).child(0).child(0).child(0).child(0).child(0).child(1).child(0);
        } else {
            if (mode != "test") {
                toastLog("找不到“B控件”，正在重新尝试");
                openInTask();
                DoTask();
            }
            return false;
        }
    }

    for (let i = 0; i < lmcs; i++) {
        if (makeA() != false) {
            let A = makeA();
            if (A.childCount() > 1 &&
                A.child(1).childCount() > 0 &&
                A.child(1).child(0).text() == "我的猫，点击撸猫") {
                if (A.child(1).child(0).clickable() == true && MangDian == true) {
                    A.child(1).child(0).click();
                    toastLog("已尝试盲点“撸猫” （" + (i + 1) + "/" + lmcs.toString() + "）");
                } else {
                    let a = A.child(1).child(0).bounds();
                    click(a.centerX(), a.centerY());
                    toastLog("已尝试点击“撸猫” （" + (i + 1) + "/" + lmcs.toString() + "）");
                }
                sleep(lmyc);
            }
            if (A.childCount() > 1 &&
                A.child(1).childCount() > 1 &&
                A.child(1).child(1).text().search("喵币点击领取") >= 0) {
                if (A.child(1).child(1).clickable() == true && MangDian == true) {
                    A.child(1).child(1).click();
                    toastLog("已尝试盲点“" + A.child(1).child(1).text() + "”");
                } else {
                    let a = A.child(1).child(1).bounds();
                    click(a.centerX(), a.centerY());
                    toastLog("已尝试点击“" + A.child(1).child(1).text() + "”");
                }
                sleep(3000);
            }
        } else {
            break;
        }
    }
    while (makeA() != false) {
        let A = makeA();
        if (A.childCount() > 3 &&
            A.child(3).childCount() > 1 &&
            A.child(3).child(1).childCount() > 0 &&
            A.child(3).child(1).child(0).childCount() > 1 &&
            A.child(3).child(1).child(0).child(1).text().search("我的喵币,") >= 0) {
            let nowCoin = A.child(3).child(1).child(0).child(1).text().replace("我的喵币,", "");
            toastLog("当前剩余：" + nowCoin + "喵币");
            if (nowCoin < 60000) {
                toastLog("剩余喵币不足60000，停止喂猫升级");
                break;
            }
        }
        if (A.childCount() > 3 &&
            A.child(3).childCount() > 0 &&
            A.child(3).child(0).childCount() > 1 &&
            A.child(3).child(0).child(1).childCount() > 0 &&
            A.child(3).child(0).child(1).child(0).childCount() > 0 &&
            A.child(3).child(0).child(1).child(0).child(0).text().search("喂猫升级") >= 0 ||
            A.childCount() > 3 &&
            A.child(3).childCount() > 0 &&
            A.child(3).child(0).childCount() > 1 &&
            A.child(3).child(0).child(1).childCount() > 0 &&
            A.child(3).child(0).child(1).child(0).childCount() > 0 &&
            A.child(3).child(0).child(1).child(0).child(0).text().search("选兴趣领红包") >= 0
        ) {
            if (A.child(3).child(0).child(1).child(0).child(0).clickable() == true && MangDian == true) {
                A.child(3).child(0).child(1).child(0).child(0).click();
                toastLog("已尝试盲点“喂喵升级”按钮");
            } else {
                let a = A.child(3).child(0).child(1).child(0).child(0).bounds();
                click(a.centerX(), a.centerY());
                toastLog("已尝试点击“喂喵升级”按钮");
            }
            sleep(3000);
        }
        let DHK = className("android.app.Dialog").findOnce();
        if (DHK != null && DHK.childCount() > 0 &&
            DHK.child(0).childCount() > 0 &&
            DHK.child(0).child(0).childCount() > 0 &&
            DHK.child(0).child(0).child(0).childCount() > 2 &&
            DHK.child(0).child(0).child(0).child(2).childCount() > 0 &&
            DHK.child(0).child(0).child(0).child(2).child(0).text() == "我知道了，喵～") {
            if (DHK.child(0).child(0).child(0).child(2).child(0).clickable() == true && MangDian == true) {
                DHK.child(0).child(0).child(0).child(2).child(0).click();
                toastLog("已尝试盲点“" + DHK.child(0).child(0).child(0).child(2).child(0).text() + "”对话框");
            } else {
                let a = DHK.child(0).child(0).child(0).child(2).child(0).bounds();
                click(a.centerX(), a.centerY());
                toastLog("已尝试点击“" + DHK.child(0).child(0).child(0).child(2).child(0).text() + "”对话框");
            }
            sleep(2000);
        }
        if (DHK != null && DHK.childCount() > 0 &&
            DHK.child(0).childCount() > 0 &&
            DHK.child(0).child(0).childCount() > 0 &&
            DHK.child(0).child(0).child(0).childCount() > 2 &&
            DHK.child(0).child(0).child(0).child(2).child(0).text() == "选好了，领红包") {
            if (DHK.child(0).child(0).child(0).child(2).child(0).clickable() == true && MangDian == true) {
                DHK.child(0).child(0).child(0).child(2).child(0).click();
                toastLog("已尝试盲点“" + DHK.child(0).child(0).child(0).child(2).child(0).text() + "”对话框按钮");
            } else {
                let a = DHK.child(0).child(0).child(0).child(2).child(0).bounds();
                click(a.centerX(), a.centerY());
                toastLog("已尝试点击“" + DHK.child(0).child(0).child(0).child(2).child(0).text() + "”对话框按钮");
            }
            sleep(3000);
        }
        if (DHK != null && DHK.childCount() > 0 &&
            DHK.child(0).childCount() > 0 &&
            DHK.child(0).child(0).childCount() > 0 &&
            DHK.child(0).child(0).child(0).childCount() > 2 &&
            DHK.child(0).child(0).child(0).child(2).child(0).text() == "开心收下，喵～") {
            if (DHK.child(0).child(0).child(0).child(2).child(0).clickable() == true && MangDian == true) {
                DHK.child(0).child(0).child(0).child(2).child(0).click();
                toastLog("已尝试盲点“" + DHK.child(0).child(0).child(0).child(2).child(0).text() + "”对话框按钮");
            } else {
                let a = DHK.child(0).child(0).child(0).child(2).child(0).bounds();
                click(a.centerX(), a.centerY());
                toastLog("已尝试点击“" + DHK.child(0).child(0).child(0).child(2).child(0).text() + "”对话框按钮");
            }
            sleep(3000);
        }
        if (DHK != null && DHK.childCount() > 0 &&
            DHK.child(0).childCount() > 0 &&
            DHK.child(0).child(0).childCount() > 0 &&
            DHK.child(0).child(0).child(0).childCount() > 3 &&
            DHK.child(0).child(0).child(0).child(3).text() == "关闭") {
            if (DHK.child(0).child(0).child(0).child(3).clickable() == true && MangDian == true) {
                DHK.child(0).child(0).child(0).child(3).click();
                toastLog("已尝试盲点“关闭”对话框按钮");
            } else {
                let a = DHK.child(0).child(0).child(0).child(3).bounds();
                click(a.centerX(), a.centerY());
                toastLog("已尝试点击“关闭”对话框按钮");
            }
            sleep(3000);
            break;
        }
    }

    if (makeA() != false) {
        let A = makeA();
        if (A.childCount() > 3 &&
            A.child(3).childCount() > 1 &&
            A.child(3).child(1).childCount() > 0 &&
            A.child(3).child(1).child(0).childCount() > 2 &&
            A.child(3).child(1).child(0).child(2).text() == "赚喵币") {
            if (A.child(3).child(1).child(0).child(2).clickable() == true && MangDian == true) {
                A.child(3).child(1).child(0).child(2).click();
                toastLog("已盲点点击“赚喵币”按钮");
            } else {
                let a = A.child(3).child(1).child(0).child(2).bounds();
                click(a.centerX(), a.centerY());
                toastLog("已尝试点击“赚喵币”按钮");
            }
            sleep(5000);
        }
    }
    let Ti = 0;
    while (makeB() != false) {
        let B = makeB();
        if (Ti == 0) {
            if (B.childCount() > Ti &&
                B.child(0).childCount() > 1 &&
                B.child(0).child(1).childCount() > 0 &&
                B.child(0).child(1).child(0).childCount() > 0) {
                for (let i = 0; i < B.child(0).child(1).child(0).childCount(); i++) {
                    if (B.childCount() > Ti &&
                        B.child(0).childCount() > 1 &&
                        B.child(0).child(1).childCount() > 0 &&
                        B.child(0).child(1).child(0).childCount() > i &&
                        B.child(0).child(1).child(0).child(i).childCount() > 1 &&
                        B.child(0).child(1).child(0).child(i).child(1).text() == "领取奖励") {
                        if (B.child(0).child(1).child(0).child(i).child(1).clickable() == true && MangDian == true) {
                            B.child(0).child(1).child(0).child(i).child(1).click();
                            toastLog("已尝试盲点“" + B.child(0).child(1).child(0).child(i).child(1).text() + "”按钮");
                        } else {
                            let a = B.child(0).child(1).child(0).child(i).child(1).bounds();
                            click(a.centerX(), a.centerY());
                            toastLog("已尝试点击“" + B.child(0).child(1).child(0).child(i).child(1).text() + "”按钮");
                        }
                        sleep(3000);
                    }
                }
            }
            Ti++;
        } else {
            if (Ti >= B.childCount()) {
                break;
            } else {
                let RwTitle = B.child(Ti).child(0).child(0).text();
                let Button = B.child(Ti).child(1);
                now = RwTitle.substring(RwTitle.indexOf("(") + 1, RwTitle.indexOf("/") + 0);
                xz = RwTitle.substring(RwTitle.indexOf("/") + 1, RwTitle.indexOf(")") + 0);
                log(RwTitle, Button.text(), Button.clickable(), "当前：" + now, "上限：" + xz);
                if (RwTitle.search("邀请好友") < 0 &&
                    RwTitle.search("芭芭农场") < 0 &&
                    RwTitle.search("开通省钱卡") < 0 &&
                    RwTitle.search("天猫农场") < 0 &&
                    RwTitle.search("续费88VIP") < 0 &&
                    RwTitle.search("登录特价版") < 0 &&
                    RwTitle.search("淘宝人生") < 0 &&
                    RwTitle.search("收菜") < 0 &&
                    RwTitle.search("红包省钱卡") < 0 &&
                    RwTitle.search("开连续包月") < 0 &&
                    RwTitle.search("开通省钱卡") < 0 &&
                    RwTitle.search("蚂蚁庄园") < 0 &&
                    RwTitle.search("开卡得") < 0 &&
                    RwTitle.search("充话费") < 0 &&
                    RwTitle.search("连续包月") < 0 &&
                    RwTitle.search("淘宝特价版") < 0 &&
                    RwTitle.search("充值") < 0 &&
                    now != xz) {
                    if (Button.clickable() == true && MangDian == true) {
                        Button.click();
                        toastLog("已尝试盲点“" + Button.text() + "”按钮");
                    } else {
                        let a = Button.bounds();
                        click(a.centerX(), a.centerY());
                        toastLog("已尝试点击“" + Button.text() + "”按钮");
                    }
                    sleep(3000);
                    if (makeB("test") == false) {
                        for (let deng = 15; deng > 0; deng--) {
                            let W = className("com.uc.webview.export.WebView").findOnce();
                            let WC = className("android.view.View").desc("任务完成").findOnce();
                            let WCs = className("android.view.View").desc("任务已经").findOnce();
                            let Df = id("com.taobao.taobao:id/weex_render_view").className("android.widget.FrameLayout").findOnce();
                            if (text("网络竟然崩溃了").findOnce() != null && className("android.widget.Button").text("刷新").clickable(true).findOnce() != null) {
                                className("android.widget.Button").text("刷新").clickable(true).findOnce().click();
                                toastLog("网络竟然崩溃了，已尝试点击“刷新”按钮");
                                sleep(3000);
                            }

                            function ForDone() {
                                let W = className("com.uc.webview.export.WebView").findOnce();
                                if (W != null &&
                                    W.childCount() > 0 &&
                                    W.child(0).childCount() > 0 &&
                                    W.child(0).child(0).childCount() > 0 &&
                                    W.child(0).child(0).child(0).childCount() > 0 &&
                                    W.child(0).child(0).child(0).child(0).childCount() > 0 &&
                                    W.child(0).child(0).child(0).child(0).child(0).childCount() > 5) {
                                    let ji = W.child(0).child(0).child(0).child(0).child(0);
                                    for (let i = 0; i < ji.childCount(); i++) {
                                        if (ji.child(i).childCount() > 0 &&
                                            ji.child(i).childCount() > 0 &&
                                            ji.child(i).child(0).childCount() > 2 &&
                                            ji.child(i).child(0).child(2).childCount() > 0 &&
                                            ji.child(i).child(0).child(2).child(0).childCount() > 0 &&
                                            ji.child(i).child(0).child(2).child(0).child(0).text().search("完成") >= 0 ||
                                            ji.child(i).childCount() > 0 &&
                                            ji.child(i).childCount() > 0 &&
                                            ji.child(i).child(0).childCount() > 2 &&
                                            ji.child(i).child(0).child(2).childCount() > 0 &&
                                            ji.child(i).child(0).child(2).child(0).childCount() > 0 &&
                                            ji.child(i).child(0).child(2).child(0).child(0).text().search("开小差") >= 0) {
                                            return true;
                                        }
                                    }
                                }
                            }
                            if (ForDone() == true ||
                                Df != null &&
                                Df.childCount() > 0 &&
                                Df.child(0).childCount() > 0 &&
                                Df.child(0).child(0).childCount() > 0 &&
                                Df.child(0).child(0).child(0).childCount() > 1 &&
                                Df.child(0).child(0).child(0).child(1).childCount() > 0 &&
                                Df.child(0).child(0).child(0).child(1).child(0).childCount() > 0 &&
                                Df.child(0).child(0).child(0).child(1).child(0).child(0).childCount() > 0 &&
                                Df.child(0).child(0).child(0).child(1).child(0).child(0).child(0).childCount() > 0 &&
                                Df.child(0).child(0).child(0).child(1).child(0).child(0).child(0).child(0).childCount() > 2 &&
                                Df.child(0).child(0).child(0).child(1).child(0).child(0).child(0).child(0).child(2).childCount() > 0 &&
                                Df.child(0).child(0).child(0).child(1).child(0).child(0).child(0).child(0).child(2).child(0).childCount() > 0 &&
                                Df.child(0).child(0).child(0).child(1).child(0).child(0).child(0).child(0).child(2).child(0).child(0).childCount() > 2 &&
                                Df.child(0).child(0).child(0).child(1).child(0).child(0).child(0).child(0).child(2).child(0).child(0).child(2).childCount() > 1 &&
                                Df.child(0).child(0).child(0).child(1).child(0).child(0).child(0).child(0).child(2).child(0).child(0).child(2).child(1).childCount() > 0 &&
                                Df.child(0).child(0).child(0).child(1).child(0).child(0).child(0).child(0).child(2).child(0).child(0).child(2).child(1).child(0).childCount() > 0 &&
                                Df.child(0).child(0).child(0).child(1).child(0).child(0).child(0).child(0).child(2).child(0).child(0).child(2).child(1).child(0).child(0).desc() != null &&
                                Df.child(0).child(0).child(0).child(1).child(0).child(0).child(0).child(0).child(2).child(0).child(0).child(2).child(1).child(0).child(0).desc().search("任务") >= 0 ||
                                WC != null ||
                                W != null && W.childCount() > 1 &&
                                W.child(1).childCount() > 0 &&
                                W.child(1).child(0).childCount() > 0 &&
                                W.child(1).child(0).child(0).childCount() > 2 &&
                                W.child(1).child(0).child(0).child(2).childCount() > 1 &&
                                W.child(1).child(0).child(0).child(2).child(1).childCount() > 0 &&
                                W.child(1).child(0).child(0).child(2).child(1).child(0).childCount() > 0 &&
                                W.child(1).child(0).child(0).child(2).child(1).child(0).child(0).desc() == "任务完成" ||
                                W != null && W.childCount() > 0 &&
                                W.child(0).childCount() > 0 &&
                                W.child(0).child(0).childCount() > 0 &&
                                W.child(0).child(0).child(0).childCount() > 0 &&
                                W.child(0).child(0).child(0).child(0).childCount() > 1 &&
                                W.child(0).child(0).child(0).child(0).child(1).childCount() > 0 &&
                                W.child(0).child(0).child(0).child(0).child(1).child(0).childCount() > 0 &&
                                W.child(0).child(0).child(0).child(0).child(1).child(0).child(0).childCount() > 0 &&
                                W.child(0).child(0).child(0).child(0).child(1).child(0).child(0).child(0).childCount() > 0 &&
                                W.child(0).child(0).child(0).child(0).child(1).child(0).child(0).child(0).child(0).childCount() > 2 &&
                                W.child(0).child(0).child(0).child(0).child(1).child(0).child(0).child(0).child(0).child(2).childCount() > 0 &&
                                W.child(0).child(0).child(0).child(0).child(1).child(0).child(0).child(0).child(0).child(2).child(0).childCount() > 0 &&
                                W.child(0).child(0).child(0).child(0).child(1).child(0).child(0).child(0).child(0).child(2).child(0).child(0).text() == "任务完成" ||
                                W != null && W.childCount() > 0 &&
                                W.child(0).childCount() > 0 &&
                                W.child(0).child(0).childCount() > 0 &&
                                W.child(0).child(0).child(0).childCount() > 0 &&
                                W.child(0).child(0).child(0).child(0).childCount() > 1 &&
                                W.child(0).child(0).child(0).child(0).child(1).childCount() > 0 &&
                                W.child(0).child(0).child(0).child(0).child(1).child(0).childCount() > 0 &&
                                W.child(0).child(0).child(0).child(0).child(1).child(0).child(0).childCount() > 0 &&
                                W.child(0).child(0).child(0).child(0).child(1).child(0).child(0).child(0).childCount() > 0 &&
                                W.child(0).child(0).child(0).child(0).child(1).child(0).child(0).child(0).child(0).childCount() > 2 &&
                                W.child(0).child(0).child(0).child(0).child(1).child(0).child(0).child(0).child(0).child(2).childCount() > 0 &&
                                W.child(0).child(0).child(0).child(0).child(1).child(0).child(0).child(0).child(0).child(2).child(0).childCount() > 0 &&
                                W.child(0).child(0).child(0).child(0).child(1).child(0).child(0).child(0).child(0).child(2).child(0).child(0).text() == "任务已经" ||
                                W != null &&
                                W.childCount() > 0 &&
                                W.child(0).childCount() > 0 &&
                                W.child(0).child(0).childCount() > 0 &&
                                W.child(0).child(0).child(0).childCount() > 0 &&
                                W.child(0).child(0).child(0).child(0).childCount() > 0 &&
                                W.child(0).child(0).child(0).child(0).child(0).childCount() > 2 &&
                                W.child(0).child(0).child(0).child(0).child(0).child(W.child(0).child(0).child(0).child(0).child(0).childCount() - 2).childCount() > 0 &&
                                W.child(0).child(0).child(0).child(0).child(0).child(W.child(0).child(0).child(0).child(0).child(0).childCount() - 2).child(0).childCount() > 2 &&
                                W.child(0).child(0).child(0).child(0).child(0).child(W.child(0).child(0).child(0).child(0).child(0).childCount() - 2).child(0).child(2).childCount() > 0 &&
                                W.child(0).child(0).child(0).child(0).child(0).child(W.child(0).child(0).child(0).child(0).child(0).childCount() - 2).child(0).child(2).child(0).childCount() > 0 &&
                                W.child(0).child(0).child(0).child(0).child(0).child(W.child(0).child(0).child(0).child(0).child(0).childCount() - 2).child(0).child(2).child(0).child(0).text() == "任务已经" ||
                                W != null &&
                                W.childCount() > 0 &&
                                W.child(0).childCount() > 0 &&
                                W.child(0).child(0).childCount() > 0 &&
                                W.child(0).child(0).child(0).childCount() > 0 &&
                                W.child(0).child(0).child(0).child(0).childCount() > 0 &&
                                W.child(0).child(0).child(0).child(0).child(0).childCount() > 2 &&
                                W.child(0).child(0).child(0).child(0).child(0).child(2).childCount() > 0 &&
                                W.child(0).child(0).child(0).child(0).child(0).child(2).child(0).childCount() > 2 &&
                                W.child(0).child(0).child(0).child(0).child(0).child(2).child(0).child(2).childCount() > 0 &&
                                W.child(0).child(0).child(0).child(0).child(0).child(2).child(0).child(2).child(0).childCount() > 0 &&
                                W.child(0).child(0).child(0).child(0).child(0).child(2).child(0).child(2).child(0).child(0).text() == "任务完成" ||
                                W != null &&
                                W.childCount() > 0 &&
                                W.child(0).childCount() > 0 &&
                                W.child(0).child(0).childCount() > 0 &&
                                W.child(0).child(0).child(0).childCount() > 0 &&
                                W.child(0).child(0).child(0).child(0).childCount() > 0 &&
                                W.child(0).child(0).child(0).child(0).child(0).childCount() > 3 &&
                                W.child(0).child(0).child(0).child(0).child(0).child(3).childCount() > 0 &&
                                W.child(0).child(0).child(0).child(0).child(0).child(3).child(0).childCount() > 2 &&
                                W.child(0).child(0).child(0).child(0).child(0).child(3).child(0).child(2).childCount() > 0 &&
                                W.child(0).child(0).child(0).child(0).child(0).child(3).child(0).child(2).child(0).childCount() > 0 &&
                                W.child(0).child(0).child(0).child(0).child(0).child(3).child(0).child(2).child(0).child(0).text() == "任务已经" ||
                                W != null &&
                                W.childCount() > 0 &&
                                W.child(0).childCount() > 0 &&
                                W.child(0).child(0).childCount() > 0 &&
                                W.child(0).child(0).child(0).childCount() > 0 &&
                                W.child(0).child(0).child(0).child(0).childCount() > 0 &&
                                W.child(0).child(0).child(0).child(0).child(0).childCount() > 0 &&
                                W.child(0).child(0).child(0).child(0).child(0).child(0).childCount() > 0 &&
                                W.child(0).child(0).child(0).child(0).child(0).child(0).child(0).childCount() > 0 &&
                                W.child(0).child(0).child(0).child(0).child(0).child(0).child(0).child(0).childCount() > 0 &&
                                W.child(0).child(0).child(0).child(0).child(0).child(0).child(0).child(0).child(0).childCount() > 0 &&
                                W.child(0).child(0).child(0).child(0).child(0).child(0).child(0).child(0).child(0).child(0).childCount() > 0 &&
                                W.child(0).child(0).child(0).child(0).child(0).child(0).child(0).child(0).child(0).child(0).child(0).childCount() > 2 &&
                                W.child(0).child(0).child(0).child(0).child(0).child(0).child(0).child(0).child(0).child(0).child(0).child(2).childCount() > 0 &&
                                W.child(0).child(0).child(0).child(0).child(0).child(0).child(0).child(0).child(0).child(0).child(0).child(2).child(0).childCount() > 0 &&
                                W.child(0).child(0).child(0).child(0).child(0).child(0).child(0).child(0).child(0).child(0).child(0).child(2).child(0).child(0).text() == "任务已经" ||
                                W != null &&
                                W.childCount() > 0 &&
                                W.child(0).childCount() > 0 &&
                                W.child(0).child(0).childCount() > 0 &&
                                W.child(0).child(0).child(0).childCount() > 0 &&
                                W.child(0).child(0).child(0).child(0).childCount() > 0 &&
                                W.child(0).child(0).child(0).child(0).child(0).childCount() > 0 &&
                                W.child(0).child(0).child(0).child(0).child(0).child(0).childCount() > 0 &&
                                W.child(0).child(0).child(0).child(0).child(0).child(0).child(0).childCount() > 0 &&
                                W.child(0).child(0).child(0).child(0).child(0).child(0).child(0).child(0).childCount() > 0 &&
                                W.child(0).child(0).child(0).child(0).child(0).child(0).child(0).child(0).child(0).childCount() > 0 &&
                                W.child(0).child(0).child(0).child(0).child(0).child(0).child(0).child(0).child(0).child(0).childCount() > 0 &&
                                W.child(0).child(0).child(0).child(0).child(0).child(0).child(0).child(0).child(0).child(0).child(0).childCount() > 2 &&
                                W.child(0).child(0).child(0).child(0).child(0).child(0).child(0).child(0).child(0).child(0).child(0).child(2).childCount() > 0 &&
                                W.child(0).child(0).child(0).child(0).child(0).child(0).child(0).child(0).child(0).child(0).child(0).child(2).child(0).childCount() > 0 &&
                                W.child(0).child(0).child(0).child(0).child(0).child(0).child(0).child(0).child(0).child(0).child(0).child(2).child(0).child(0).text() == "任务完成" ||
                                className("android.view.View").desc(" 任务已完成").findOnce() != null ||
                                className("android.view.View").desc(" 任务完成").findOnce() != null ||
                                className("android.view.View").text("任务已完成").findOnce() != null ||
                                className("android.view.View").textContains("任务已完成").findOnce() != null &&
                                className("android.view.View").textContains("任务完成").findOnce() != null) {
                                toastLog("任务已完成");
                                break;
                            } else {
                                toastLog("正在完成“" + Button.text() + "（" + now + "/" + xz + "）”任务，剩余" + deng + "秒……");
                                sleep(2000);
                            }
                        }
                        if (className("android.widget.ImageView").desc("返回").clickable(true).findOnce() != null) {
                            className("android.widget.ImageView").desc("返回").findOnce().click();
                            toastLog("已尝试盲点“返回”按钮");
                            sleep(2000);
                        } else {
                            Justback();
                            sleep(2000);
                        }
                    }
                } else {
                    if (now == xz) {
                        toastLog("【任务已完成】" + RwTitle);
                    } else {
                        toastLog("【已跳过】" + RwTitle);
                    }
                    Ti++;
                }
            }
        }
    }
    let view = ui.inflate(
        <vertical bg="{{context_framebg}}" padding="25 0 25 0">
            <img src="@drawable/ic_check_circle_black_48dp" h="35" tint="{{context_textColor}}" margin="5"/>
            <text id="tip" textSize="15" textStyle="bold" textColor="{{context_textColor}}" gravity="center" margin="5"/>
        </vertical>
    );
    view.tip.setText(context_thisScriptName + "：脚本已运行完成");
    dialogs.build({
        customView: view,
        wrapInScrollView: false,
        autoDismiss: true
    }).show();
    floaty.closeAll();
    threads.shutDownAll();
    exit();
}