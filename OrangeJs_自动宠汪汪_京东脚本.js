context_thisScriptName = "自动宠汪汪";
context_thisScriptVersion = "（Beta1.63）";

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
                                    <text text="要进行“手动运行”，您需要选择一个时间另脚本进入等待状态，并在脚本等待期间自行打开京东APP至活动页，脚本等待时间结束后则会开始运行" textSize="15sp" textStyle="bold" textColor="{{context_textColor}}" gravity="left" margin="0 5"/>
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
                    toastLog("请打开京东至宠汪汪的主界面\n剩余" + deng + "秒后运行脚本...");
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
                    toastLog("请打开京东至宠汪汪的主界面\n剩余" + deng + "秒后运行脚本...");
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
                    toastLog("请打开京东至宠汪汪的主界面\n剩余" + deng + "秒后运行脚本...");
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
                    toastLog("请打开京东至宠汪汪的主界面\n剩余" + deng + "秒后运行脚本...");
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
                        <card id="ToastOrFloatjournal" layout_weight="50" h="40"cardCornerRadius="5dp" cardElevation="0dp" gravity="center_vertical" margin="0 5 5 5" cardBackgroundColor="{{context_SettingsCard}}" foreground="?attr/selectableItemBackground" clickable="true">
                            <linear orientation="horizontal" align="left" margin="0" paddingTop="0">
                                <img src="@drawable/ic_chat_black_48dp" w="20" h="20" tint="{{context_textColor}}" layout_gravity="left||center" margin="10 5"/>
                                <text text="“吐司（Toast）”/“悬浮日志”切换" textStyle="bold" textColor="{{context_textColor}}" textSize="12sp"layout_gravity="left||center"/>
                            </linear>
                        </card>
                    </vertical>, null, false);

        function Setstate() {
            if (files.read("/storage/emulated/0/OrangeJs/自动宠汪汪/Root返回开关.txt") == "true") {
                view.UseRootBackText.setText("已开启");
                view.UseRootBackText.setTextColor(colors.parseColor("#FF1E56"));
                RootBack = true;
            } else if (files.read("/storage/emulated/0/OrangeJs/自动宠汪汪/Root返回开关.txt") == "false") {
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

        view.UseRootBack.click(() => {
            if (RootBack == true) {
                files.write("/storage/emulated/0/OrangeJs/自动宠汪汪/Root返回开关.txt", "false");
            } else {
                files.write("/storage/emulated/0/OrangeJs/自动宠汪汪/Root返回开关.txt", "true");
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
            if (files.exists("/storage/emulated/0/OrangeJs/自动宠汪汪/吐司or日志.txt") == true) {
                if (files.read("/storage/emulated/0/OrangeJs/自动宠汪汪/吐司or日志.txt") == "日志") {
                    answer.WhatNow.setText("当前脚本使用：悬浮日志");
                } else if (files.read("/storage/emulated/0/OrangeJs/自动宠汪汪/吐司or日志.txt") == "吐司") {
                    answer.WhatNow.setText("当前脚本使用：吐司（Toast）");
                }
            }
            answer.UseToast.click(() => {
                files.createWithDirs("/storage/emulated/0/OrangeJs/自动宠汪汪/吐司or日志.txt");
                if (files.exists("/storage/emulated/0/OrangeJs/自动宠汪汪/吐司or日志.txt") == true) {
                    try {
                        files.read("/storage/emulated/0/OrangeJs/自动宠汪汪/吐司or日志.txt");
                        files.write("/storage/emulated/0/OrangeJs/自动宠汪汪/吐司or日志.txt", "吐司");
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
                files.createWithDirs("/storage/emulated/0/OrangeJs/自动宠汪汪/吐司or日志.txt");
                if (files.exists("/storage/emulated/0/OrangeJs/自动宠汪汪/吐司or日志.txt") == true) {
                    try {
                        files.read("/storage/emulated/0/OrangeJs/自动宠汪汪/吐司or日志.txt");
                        files.write("/storage/emulated/0/OrangeJs/自动宠汪汪/吐司or日志.txt", "日志");
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

function Justback() {
    if (RootBack != true) {
        toastLog("尝试使用“无障碍权限”进行返回")
        back();
        sleep(1000);
    } else {
        toastLog("尝试使用“ROOT权限”进行返回")
        Back();
        sleep(1000);
    }
}
if (files.exists("/storage/emulated/0/OrangeJs/自动宠汪汪/吐司or日志.txt") == true && files.read("/storage/emulated/0/OrangeJs/自动宠汪汪/吐司or日志.txt") == "吐司") {
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
if (files.listDir("/sdcard/").length == 0) {
    toastLog("未授予“存储权限”，使用默认配置");
    RootBack = false;
} else {
    if (files.exists("/storage/emulated/0/OrangeJs/自动宠汪汪/Root返回开关.txt") == true) {
        if (files.read("/storage/emulated/0/OrangeJs/自动宠汪汪/Root返回开关.txt") == "true") {
            RootBack = true;
        } else if (files.read("/storage/emulated/0/OrangeJs/自动宠汪汪/Root返回开关.txt") == "false") {
            RootBack = false;
        } else {
            toastLog("脚本配置文件错误，已尝试删除错误配置文件：(/storage/emulated/0/OrangeJs/自动宠汪汪/Root返回开关.txt)" + files.remove("/storage/emulated/0/OrangeJs/自动宠汪汪/Root返回开关.txt"));
            files.createWithDirs("/storage/emulated/0/OrangeJs/自动宠汪汪/Root返回开关.txt");
            files.write("/storage/emulated/0/OrangeJs/自动宠汪汪/Root返回开关.txt", "false");
            RootBack = false;
        }
    } else {
        files.createWithDirs("/storage/emulated/0/OrangeJs/自动宠汪汪/Root返回开关.txt");
        files.write("/storage/emulated/0/OrangeJs/自动宠汪汪/Root返回开关.txt", "false");
        RootBack = false;
    }
}

function StopScriptWindowOn() {
    //下面是悬浮窗
    var window = floaty.window(
        <frame>
            <button id="action" text="点击停止脚本" w="120" h="40" bg="#F0EB4336"/>
        </frame>
    );
    //setInterval(() => {}, 1000);
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
        floaty.closeAll();
        threads.shutDownAll();
        let view = ui.inflate(
            <vertical bg="{{context_framebg}}" padding="25 0 25 0">
                <img src="@drawable/ic_warning_black_48dp" h="35" tint="{{context_textColor}}" margin="5"/>
                <text text="自动宠汪汪：已为您停止运行" textSize="15" textStyle="bold" textColor="{{context_textColor}}" gravity="center" margin="5"/>
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

function AlreadyInHD() {
    if (className("android.webkit.WebView").text("宠汪汪").findOnce() != null &&
        className("android.webkit.WebView").text("宠汪汪").findOnce().childCount() > 0 &&
        className("android.webkit.WebView").text("宠汪汪").findOnce().child(0).id() == "app" &&
        className("android.webkit.WebView").text("宠汪汪").findOnce().child(0).childCount() > 0 &&
        className("android.webkit.WebView").text("宠汪汪").findOnce().child(0).child(0).childCount() > 0
    ) {
        return true;
    } else {
        return false;
    }
}
context_JDbug = null;

function openInTask() {
    while (true) {
        function ClickRk() {
            let a = className("android.widget.LinearLayout").id("com.jd.lib.personal.feature:id/gm").findOnce();
            let b = className("android.widget.LinearLayout").id("com.jd.lib.personal.feature:id/h4").findOnce();
            if(b!=null&&b.childCount()>0&&
            b.child(0).childCount()>0&&
            b.child(0).child(0).childCount()>4&&
            b.child(0).child(0).child(4).childCount()>0&&
            b.child(0).child(0).child(4).child(0).scrollable()==true){
                b.child(0).child(0).child(4).child(0).scrollForward();
                toastLog("已尝试左滑菜单控件");
                sleep(2000);
                }
            if (a != null && a.childCount() > 0 &&
                a.child(0).childCount() > 0 &&
                a.child(0).child(0).childCount() > 3 &&
                a.child(0).child(0).child(3).childCount() > 0 &&
                a.child(0).child(0).child(3).child(0).childCount() > 0 &&
                a.child(0).child(0).child(3).child(0).child(0).className() == "androidx.recyclerview.widget.RecyclerView" &&
                a.child(0).child(0).child(3).child(0).child(0).childCount() > 5) {
                for (let ii = 0; ii < a.child(0).child(0).child(3).child(0).childCount(); ii++) {
                    for (let i = 0; i < a.child(0).child(0).child(3).child(0).child(ii).childCount(); i++) {
                        if (a.child(0).child(0).child(3).child(0).child(ii).child(i).childCount() > 0 &&
                            a.child(0).child(0).child(3).child(0).child(ii).child(i).child(0).childCount() > 1 &&
                            a.child(0).child(0).child(3).child(0).child(ii).child(i).child(0).child(1).text() == "宠汪汪") {
                            return a.child(0).child(0).child(3).child(0).child(ii).child(i);
                        }
                    }
                }
            } else if (a != null && a.childCount() > 0 &&
                a.child(0).childCount() > 0 &&
                a.child(0).child(0).childCount() > 4 &&
                a.child(0).child(0).child(4).childCount() > 0 &&
                a.child(0).child(0).child(4).child(0).childCount() > 0 &&
                a.child(0).child(0).child(4).child(0).child(0).className() == "androidx.recyclerview.widget.RecyclerView" &&
                a.child(0).child(0).child(4).child(0).child(0).childCount() > 5) {
                for (let ii = 0; ii < a.child(0).child(0).child(4).child(0).childCount(); ii++) {
                    for (let i = 0; i < a.child(0).child(0).child(4).child(0).child(ii).childCount(); i++) {
                        if (a.child(0).child(0).child(4).child(0).child(ii).child(i).childCount() > 0 &&
                            a.child(0).child(0).child(4).child(0).child(ii).child(i).child(0).childCount() > 1 &&
                            a.child(0).child(0).child(4).child(0).child(ii).child(i).child(0).child(1).text() == "宠汪汪") {
                            return a.child(0).child(0).child(4).child(0).child(ii).child(i);
                        }
                    }
                }
            }else if (b != null && b.childCount() > 0 &&
                b.child(0).childCount() > 0 &&
                b.child(0).child(0).childCount() > 4 &&
                b.child(0).child(0).child(4).childCount() > 0 &&
                b.child(0).child(0).child(4).child(0).childCount() > 0 &&
                b.child(0).child(0).child(4).child(0).child(0).className() == "androidx.recyclerview.widget.RecyclerView" &&
                b.child(0).child(0).child(4).child(0).child(0).childCount() > 5) {
                for (let ii = 0; ii < b.child(0).child(0).child(4).child(0).childCount(); ii++) {
                    for (let i = 0; i < b.child(0).child(0).child(4).child(0).child(ii).childCount(); i++) {
                        if (b.child(0).child(0).child(4).child(0).child(ii).child(i).childCount() > 0 &&
                            b.child(0).child(0).child(4).child(0).child(ii).child(i).child(0).childCount() > 1 &&
                            b.child(0).child(0).child(4).child(0).child(ii).child(i).child(0).child(1).text() == "宠汪汪") {
                            return b.child(0).child(0).child(4).child(0).child(ii).child(i);
                        }
                    }
                }
            }
        }
        if (className("android.view.View").desc("我的").findOnce() != null && text("宠汪汪").className("android.widget.TextView").findOnce() != null && text("瓜分亿万京豆").className("android.widget.TextView").findOnce() != null) {
            if (text("宠汪汪").className("android.widget.TextView").findOnce().parent().clickable() == true) {
                text("宠汪汪").className("android.widget.TextView").findOnce().parent().click();
                toastLog("已尝试盲点“宠汪汪”入口按钮");
                sleep(3000);
            } else {
                let a = text("宠汪汪").className("android.widget.TextView").findOnce().parent().bounds();
                click(a.centerX(), a.centerY());
                toastLog("已尝试点击“宠汪汪”入口按钮");
                sleep(3000);
            }
            break;
        } else if (className("android.view.View").desc("我的").findOnce() != null && ClickRk() != undefined) {
            let a = ClickRk();
            if (a.clickable() == true) {
                a.click();
                toastLog("已尝试盲点“宠汪汪”入口按钮");
                sleep(3000);
            } else {
                let aa = a.bounds();
                click(aa.centerX(), aa.centerY());
                toastLog("已尝试点击“宠汪汪”入口按钮");
                sleep(3000);
            }
            break;
        } else if (className("android.view.View").clickable(true).desc("我的").findOnce() != null) {
            className("android.view.View").desc("我的").findOnce().click();
            toastLog("已尝试盲点京东主页“我的”按钮");
            sleep(2000);
        } else if (className("android.widget.LinearLayout").id("com.jingdong.app.mall:id/tj").findOnce() != null &&
            className("android.widget.LinearLayout").id("com.jingdong.app.mall:id/tj").findOnce().childCount() > 4 &&
            className("android.widget.LinearLayout").id("com.jingdong.app.mall:id/tj").findOnce().child(4).childCount() > 2 &&
            className("android.widget.LinearLayout").id("com.jingdong.app.mall:id/tj").findOnce().child(4).child(2).desc() != null &&
            className("android.widget.LinearLayout").id("com.jingdong.app.mall:id/tj").findOnce().child(4).child(2).desc() == "我的") {
            if (className("android.widget.LinearLayout").id("com.jingdong.app.mall:id/tj").findOnce().child(4).child(2).clickable() == true) {
                className("android.widget.LinearLayout").id("com.jingdong.app.mall:id/tj").findOnce().child(4).child(2).click();
                toastLog("已尝试盲点京东主页“我的”按钮（层级）");
            } else {
                let a = className("android.widget.LinearLayout").id("com.jingdong.app.mall:id/tj").findOnce().child(4).child(2).bounds();
                click(a.centerX(), a.centerY());
                toastLog("已尝试点击京东主页“我的”按钮（层级）");
            }
            sleep(2000);
        } else if (className("android.widget.LinearLayout").id("com.jingdong.app.mall:id/tj").findOnce() != null &&
            className("android.widget.LinearLayout").id("com.jingdong.app.mall:id/tj").findOnce().childCount() > 4 &&
            className("android.widget.LinearLayout").id("com.jingdong.app.mall:id/tj").findOnce().child(4).childCount() > 2 &&
            className("android.widget.LinearLayout").id("com.jingdong.app.mall:id/tj").findOnce().child(4).child(2).desc() != null &&
            className("android.widget.LinearLayout").id("com.jingdong.app.mall:id/tj").findOnce().child(4).child(2).desc() == "我的") {
            if (className("android.widget.LinearLayout").id("com.jingdong.app.mall:id/tj").findOnce().child(4).child(2).clickable() == true) {
                className("android.widget.LinearLayout").id("com.jingdong.app.mall:id/tj").findOnce().child(4).child(2).click();
                toastLog("已尝试盲点京东主页“我的”按钮（层级）");
            } else {
                let a = className("android.widget.LinearLayout").id("com.jingdong.app.mall:id/tj").findOnce().child(4).child(2).bounds();
                click(a.centerX(), a.centerY());
                toastLog("已尝试点击京东主页“我的”按钮（层级）");
            }
            sleep(2000);
        } else if (currentPackage() != "com.jingdong.app.mall") {
            app.startActivity({
                action: "android.intent.action.VIEW", //此处可为其他值
                packageName: "com.jingdong.app.mall",
                className: "com.jingdong.app.mall.main.MainActivity"
                //此处可以加入其他内容，如data、extras
            });
            toastLog("当前未处于京东APP中，正在重新打开京东……");
            if (className("android.widget.ImageView").desc("返回").clickable(true).findOnce() != null) {
                className("android.widget.ImageView").desc("返回").clickable(true).findOnce().click();
                toastLog("处于京东已尝试点击“返回”按钮");
            }
            console.warn("当前活动：" + currentActivity() + "，当前包名：" + currentPackage() + "当前应用名：" + getAppName(currentPackage()));
            sleep(2000);
        } else {
            if (className("android.widget.ImageView").desc("返回").clickable(true).findOnce() != null) {
                className("android.widget.ImageView").desc("返回").clickable(true).findOnce().click();
                toastLog("已尝试点击“返回”按钮");
            } else {
                Justback();
            }
            sleep(2000);
        }
    }
    for (let d = 10; d > 0; d--) {
        toastLog("正在等待“宠汪汪”活动界面加载，剩余" + d + "秒……");
        sleep(1000);
    }
}


function DoTask() {
    if (AlreadyInHD() == true) {
        try {
            var A = className("android.webkit.WebView").text("宠汪汪").findOnce().child(0).child(1).child(0);
        } catch (e) {
            console.warn("当前活动：" + currentActivity() + "，当前包名：" + currentPackage() + "当前应用名：" + getAppName(currentPackage()));
            toastLog("未处于“宠汪汪”主界面，正在重试中……" + e);
            openInTask();
            DoTask();
        }

        function EatingOrNot() {
            var IsEating = null;
            for (let i = A.childCount() - 1; i >= 0; i--) {
                if (A.child(i).childCount() > 1 && A.child(i).child(1).childCount() > 1 && A.child(i).child(1).child(1).text() != "") {
                    let ObjectText = A.child(i).child(1).child(1).text();
                    if (ObjectText.search("小时") >= 0 && ObjectText.search("分") >= 0 && ObjectText.search("秒") >= 0) {
                        var IsEating = ObjectText;
                        break;
                    }
                }
            }
            if (IsEating == null) {
                return false;
            } else {
                return IsEating;
            }
        }
        if (EatingOrNot() == false) {
            let a = A.child(A.childCount() - 1).child(0).bounds();
            click(a.centerX(), a.centerY());
            toastLog("已尝试点击“喂养”按钮");
            sleep(2000);
            try {
                var BeforeDogFood = A.child(A.childCount() - 1).child(0).child(2).text();
            } catch (e) {
                console.warn("当前活动：" + currentActivity() + "，当前包名：" + currentPackage() + "当前应用名：" + getAppName(currentPackage()));
                toastLog("A当前未处于“宠汪汪”活动页面，正在重新尝试进入……" + e);
                openInTask();
                DoTask();
            }
            let DogFood = BeforeDogFood.replace("g", "");
            if (className("android.view.View").text("喂食送积分").findOnce() != null) {
                var B = className("android.view.View").text("喂食送积分").findOnce().parent();
                let AllChoice = [];
                for (let i = 0; i < B.childCount(); i++) {
                    if (B.child(i).childCount() > 3 && B.child(i).child(1).text() == "消耗" && B.child(i).child(2).text() != "" && B.child(i).child(3).text() != "") {
                        AllChoice.push({
                            No: i,
                            Number: B.child(i).child(2).text(),
                            text: B.child(i).child(1).text() + B.child(i).child(2).text() + B.child(i).child(3).text()
                        });
                    }
                }
                for (let i = AllChoice.length - 1; i >= 0; i--) {
                    let BeforeChoice = AllChoice[i].Number;
                    if (Number(DogFood) >= Number(BeforeChoice)) {
                        let a = B.child(AllChoice[i].No).bounds();
                        click(a.centerX(), a.centerY());
                        toastLog("已尝试点击" + AllChoice[i].text);
                        sleep(2000);
                        let b = B.child(B.childCount() - 1).bounds();
                        click(b.centerX(), b.centerY());
                        toastLog("已尝试点击“喂养”按钮");
                        if (className("android.view.View").text("您的宠物正在进食中,请稍后再喂食").findOne(2000) != null) {
                            let a = B.parent().child(0).bounds();
                            click(a.centerX(), a.centerY());
                            toastLog("您的宠物正在进食中,请稍后再喂食，已尝试点击“关闭蒙版”按钮");
                            sleep(2000);
                        }
                        break;
                    } else if (i == 0) {
                        let a = B.parent().child(0).bounds();
                        click(a.centerX(), a.centerY());
                        toastLog("狗粮不足，已尝试点击“关闭蒙版”按钮");
                        sleep(2000);
                    }
                }
            }
        } else {
            log("您的宠物正在进食中,请" + EatingOrNot() + "后再喂食");
        }
        let LGLbutton = [];
        for (let i = 0; i < A.childCount(); i++) {
            if (A.child(i).childCount() > 3) {
                for (let ii = A.child(i).childCount() - 1; ii >= 0; ii--) {
                    if (A.child(i).child(ii).childCount() > 0 && A.child(i).child(ii).child(0).childCount() > 0 && A.child(i).child(ii).child(0).child(0).text() == "linggouliang") {
                        LGLbutton.push({
                            NumberOne: i,
                            NumberTwo: ii
                        });
                    }
                }
            }
        }
        if (LGLbutton.length == 1) {
            let a = A.child(LGLbutton[0].NumberOne).child(LGLbutton[0].NumberTwo).bounds();
            click(a.centerX(), a.centerY());
            toastLog("已尝试点击“领狗粮”按钮");
            sleep(3000);
        } else {
            toastLog("找不到领狗粮按钮，正在重新尝试");
            openInTask();
            DoTask();
        }
        let I = 0;
        var Hdname = null;
        var WrongTime = 0;
        while (true) {
            try {
                var A = className("android.webkit.WebView").text("宠汪汪").findOnce().child(0).child(1).child(0);
                var a = A.child(A.childCount() - 1).child(1).childCount() - 1;
                var B = A.child(A.childCount() - 1).child(1).child(a);
            } catch (e) {
                console.warn("当前活动：" + currentActivity() + "，当前包名：" + currentPackage() + "当前应用名：" + getAppName(currentPackage()));
                toastLog("未处于“宠汪汪”主界面，正在重试中……" + e);
                openInTask();
                DoTask();
            }
            if (I >= B.childCount()) {
                let aa = A.child(A.childCount() - 1).child(1).child(a - 1).bounds();
                click(aa.centerX(), aa.centerY());
                toastLog("已尝试点击“关闭蒙版”按钮");
                sleep(3000);
                break;
            } else {
                if (B.child(I).childCount() > 3 && B.child(I).child(1).text() != "" && B.child(I).child(3).text() != "") {
                    let BeforeWhatNow = B.child(I).child(1).text();
                    if (Hdname == null) {
                        var Hdname = BeforeWhatNow;
                    } else if (Hdname == BeforeWhatNow) {
                        WrongTime++;
                    } else {
                        var Hdname = BeforeWhatNow;
                    }
                    if (WrongTime >= 3) {
                        toastLog("无法完成“" + BeforeWhatNow + "”任务，现跳过此任务");
                        context_JDbug = BeforeWhatNow;
                        var Hdname = null;
                        var WrongTime = null;
                    }
                    if (BeforeWhatNow.search("（") >= 0 && BeforeWhatNow.search("）") >= 0 && BeforeWhatNow.search("/") >= 0) {
                        WhatNowss = BeforeWhatNow.replace("/", "替");
                        WhatNows = WhatNowss.replace("（", "头");
                        WhatNow = WhatNows.match(/头(\S*)替/)[1];
                        limitss = BeforeWhatNow.replace("/", "替");
                        limits = limitss.replace("）", "尾");
                        limit = limits.match(/替(\S*)尾/)[1];
                        toastLog(B.child(I).child(1).text() + "，" + B.child(I).child(3).text());
                        if (B.child(I).child(3).bounds().top >= B.bounds().bottom) {
                            B.scrollBackward();
                            toastLog("已尝试上滑任务列表，当前按钮：" + B.child(I).child(3).text() + B.child(I).child(3).bounds());
                            sleep(2000);
                        } else if (B.child(I).child(3).bounds().bottom <= B.bounds().top || B.child(I).bounds().height() < 50) {
                            B.scrollForward();
                            toastLog("已尝试下滑任务列表，当前按钮名称：" + B.child(I).child(3).text() + B.child(I).child(3).bounds());
                            sleep(2000);
                        } else if (WhatNow != limit && context_JDbug != BeforeWhatNow) {
                            let a = B.child(I).child(3).bounds();
                            click(a.centerX(), a.centerY());
                            toastLog("已尝试点击“" + B.child(I).child(3).text() + "”按钮");
                            sleep(3000);
                            let time = 0;
                            for (let deng = 10; deng > 0; deng--) {
                                if (className("android.webkit.WebView").findOnce() != null && className("android.webkit.WebView").findOnce().text() == "关注店铺任务" &&
                                    className("android.webkit.WebView").text("关注店铺任务").findOnce().childCount() > 0 && className("android.webkit.WebView").text("关注店铺任务").findOnce().child(0).childCount() > 0) {
                                    toastLog("当前处于“关注店铺任务”");
                                    var AA = className("android.webkit.WebView").text("关注店铺任务").findOnce().child(0).child(0);
                                    let ia = 0;
                                    while (true) {
                                        try {
                                            var AA = className("android.webkit.WebView").text("关注店铺任务").findOnce().child(0).child(0);
                                        } catch (e) {
                                            toastLog("完成“关注店铺任务”出现错误：" + e);
                                            break;
                                        }
                                        if (ia >= AA.childCount()) {
                                            toastLog("当前已无“进店并关注”按钮");
                                            break;
                                        } else if (AA.child(ia).text() == "进店并关注") {
                                            if (AA.child(ia).bounds().top >= AA.bounds().bottom || AA.child(ia).bounds().height() < 20) {
                                                className("android.webkit.WebView").text("关注店铺任务").findOnce().scrollForward();
                                                toastLog("“进店并关注”按钮超出可点击范围，已尝试上滑");
                                                sleep(2000);
                                            }
                                            let aa = AA.child(ia).bounds();
                                            click(aa.centerX(), aa.centerY());
                                            toastLog("已尝试点击第" + time + "个“进店并关注”按钮");
                                            sleep(3000);
                                            if (className("android.webkit.WebView").text("关注店铺任务").findOnce() == null) {
                                                for (let dengs = 5; dengs > 0; dengs--) {
                                                    toastLog("正在进行第" + time + "个“进店并关注”，剩余" + dengs + "秒……");
                                                    sleep(1000);
                                                }
                                                time++;
                                                Justback();
                                                if (className("android.view.View").text("关注已达上限~").findOne(3000) != null) {
                                                    toastLog("识别到“关注已达上限”");
                                                    sleep(1000);
                                                    break;
                                                }
                                            }
                                        } else {
                                            ia++;
                                        }
                                    }
                                    break;
                                } else if (className("android.webkit.WebView").findOnce() != null && className("android.webkit.WebView").findOnce().text() == "关注频道任务" &&
                                    className("android.webkit.WebView").text("关注频道任务").findOnce().childCount() > 0 && className("android.webkit.WebView").text("关注频道任务").findOnce().child(0).childCount() > 0) {
                                    toastLog("当前处于“关注频道任务”");
                                    var AA = className("android.webkit.WebView").text("关注频道任务").findOnce().child(0).child(0);
                                    let ia = 0;
                                    while (true) {
                                        try {
                                            var AA = className("android.webkit.WebView").text("关注频道任务").findOnce().child(0).child(0);
                                        } catch (e) {
                                            toastLog("完成“关注频道任务”出现错误：" + e);
                                            break;
                                        }
                                        if (ia >= AA.childCount()) {
                                            toastLog("当前已无“进入并关注”按钮");
                                            break;
                                        } else if (AA.child(ia).text() == "进入并关注") {
                                            if (AA.child(ia).bounds().top >= AA.bounds().bottom || AA.child(ia).bounds().height() < 20) {
                                                className("android.webkit.WebView").text("关注频道任务").findOnce().scrollForward();
                                                toastLog("“进入并关注”按钮超出可点击范围，已尝试上滑");
                                                sleep(2000);
                                            }
                                            let aa = AA.child(ia).bounds();
                                            click(aa.centerX(), aa.centerY());
                                            toastLog("已尝试点击第" + time + "个“进入并关注”按钮");
                                            sleep(3000);
                                            if (className("android.webkit.WebView").text("关注频道任务").findOnce() == null) {
                                                for (let dengs = 5; dengs > 0; dengs--) {
                                                    toastLog("正在进行第" + time + "个“进入并关注”，剩余" + dengs + "秒……");
                                                    sleep(1000);
                                                }
                                                time++;
                                                Justback();
                                                sleep(2000);
                                            }
                                        } else {
                                            ia++;
                                        }
                                    }
                                    break;
                                } else {
                                    toastLog("正在完成浏览任务，剩余" + deng + "秒后返回...");
                                    sleep(1000);
                                }
                            }
                            Justback();
                            sleep(3000);
                        } else {
                            I++;
                        }
                    } else if (B.child(I).child(3).text() == "领取") {
                        if (B.child(I).child(3).bounds().top >= B.bounds().bottom) {
                            B.scrollBackward();
                            toastLog("已尝试上滑任务列表，当前按钮：" + B.child(I).child(3).text() + B.child(I).child(3).bounds());
                            sleep(2000);
                        } else if (B.child(I).child(3).bounds().bottom <= B.bounds().top || B.child(I).bounds().height() < 50) {
                            B.scrollForward();
                            toastLog("已尝试下滑任务列表，当前按钮名称：" + B.child(I).child(3).text() + B.child(I).child(3).bounds());
                            sleep(2000);
                        } else {
                            let a = B.child(I).child(3).bounds();
                            click(a.centerX(), a.centerY());
                            toastLog("已尝试点击“" + B.child(I).child(3).text() + "”按钮");
                            sleep(3000);
                        }
                    } else {
                        I++;
                    }
                } else {
                    I++;
                }
            }
        }
        try {
            var A = className("android.webkit.WebView").text("宠汪汪").findOnce().child(0).child(1).child(0);
        } catch (e) {
            console.warn("当前活动：" + currentActivity() + "，当前包名：" + currentPackage() + "当前应用名：" + getAppName(currentPackage()));
            toastLog("未处于“宠汪汪”主界面，正在重试中……" + e);
            openInTask();
            DoTask();
        }
        let CWSPbutton = [];
        for (let i = A.childCount() - 1; i >= 0; i--) {
            if (A.child(i).childCount() > 3) {
                for (let ii = A.child(i).childCount() - 1; ii >= 0; ii--) {
                    if (A.child(i).child(ii).childCount() > 1 && A.child(i).child(ii).child(1).childCount() > 0 && A.child(i).child(ii).child(1).child(0).text() == "pet_run2") {
                        CWSPbutton.push({
                            NumberOne: i,
                            NumberTwo: ii
                        });
                    }
                }
            }
        }
        if (CWSPbutton.length == 1) {
            let a = A.child(CWSPbutton[0].NumberOne).child(CWSPbutton[0].NumberTwo).bounds();
            click(a.centerX(), a.centerY());
            toastLog("已尝试点击“宠物赛跑”按钮");
            sleep(3000);
        } else {
            toastLog("找不到宠物赛跑按钮，正在重新尝试");
            openInTask();
            DoTask();
        }
        if (className("android.webkit.WebView").text("宠物赛跑").findOnce() != null &&
            className("android.webkit.WebView").text("宠物赛跑").findOnce().childCount() > 0 &&
            className("android.webkit.WebView").text("宠物赛跑").findOnce().child(0).childCount() > 0) {
            var C = className("android.webkit.WebView").text("宠物赛跑").findOnce().child(0).child(0);
            for (let i = 0; i < C.childCount(); i++) {
                if (C.child(i).childCount() > 0 &&
                    C.child(i).child(0).childCount() > 2 &&
                    C.child(i).child(0).child(2).childCount() > 0 &&
                    C.child(i).child(0).child(2).child(0).text() == "确认领取") {
                    let a = C.child(i).child(0).child(2).child(0).bounds();
                    click(a.centerX(), a.centerY());
                    toastLog("已尝试点击“确认领取”按钮");
                    sleep(2000);
                } else if (
                    C.child(i).childCount() > 0 &&
                    C.child(i).child(0).childCount() > 0 &&
                    C.child(i).child(0).child(C.child(i).child(0).childCount() - 1).childCount() > 0 &&
                    C.child(i).child(0).child(C.child(i).child(0).childCount() - 1).child(0).text() == "确认领取") {
                    let a = C.child(i).child(0).child(C.child(i).child(0).childCount() - 1).child(0).bounds();
                    click(a.centerX(), a.centerY());
                    toastLog("已尝试点击“确认领取”按钮");
                    sleep(2000);
                }
            }

            function ClickZDL() {
                for (let i = 0; i < C.childCount(); i++) {
                    if (C.child(i).childCount() > 0 &&
                        C.child(i).child(0).childCount() > 2 &&
                        C.child(i).child(0).child(1).childCount() > 0 &&
                        C.child(i).child(0).child(1).child(0).text() == "知道啦") {
                        let a = C.child(i).child(0).child(1).child(0).bounds();
                        click(a.centerX(), a.centerY());
                        toastLog("已尝试点击“知道啦”按钮");
                        sleep(2000);
                        return true;
                    } else if (
                        C.child(i).childCount() > 0 &&
                        C.child(i).child(0).childCount() > 0 &&
                        C.child(i).child(0).child(C.child(i).child(0).childCount() - 1).childCount() > 0 &&
                        C.child(i).child(0).child(C.child(i).child(0).childCount() - 1).child(0).text() == "知道啦") {
                        let a = C.child(i).child(0).child(C.child(i).child(0).childCount() - 1).child(0).bounds();
                        click(a.centerX(), a.centerY());
                        toastLog("已尝试点击“知道啦”按钮");
                        sleep(2000);
                        return true;
                    }
                }
            }
            if (ClickZDL() != true) {
                let PKchoice = "双人PK赛";
                for (let i = 0; i < C.child(1).childCount(); i++) {
                    if (C.childCount() > 1 &&
                        C.child(1).childCount() > i &&
                        C.child(1).child(i).childCount() > 0 &&
                        C.child(1).child(i).child(0).childCount() > 0 &&
                        C.child(1).child(i).child(0).child(0).text() == "two_main_title" &&
                        PKchoice == "双人PK赛") {
                        let a = C.child(1).child(i).child(0).child(0).bounds();
                        click(a.centerX(), a.centerY());
                        toastLog("已尝试点击“双人PK赛”按钮");
                        sleep(3000);
                        break;
                    } else if (C.childCount() > 1 &&
                        C.child(1).childCount() > i &&
                        C.child(1).child(i).childCount() > 0 &&
                        C.child(1).child(i).child(0).childCount() > 0 &&
                        C.child(1).child(i).child(0).child(0).text() == "ten_main_title" &&
                        PKchoice == "10人突围赛") {
                        let a = C.child(1).child(i).child(0).child(0).bounds();
                        click(a.centerX(), a.centerY());
                        toastLog("已尝试点击“10人突围赛”按钮");
                        sleep(3000);
                        break;
                    } else if (C.childCount() > 1 &&
                        C.child(1).childCount() > i &&
                        C.child(1).child(i).childCount() > 0 &&
                        C.child(1).child(i).child(0).childCount() > 0 &&
                        C.child(1).child(i).child(0).child(0).text() == "fifty_main_title" &&
                        PKchoice == "50人挑战赛") {
                        let a = C.child(1).child(i).child(0).child(0).bounds();
                        click(a.centerX(), a.centerY());
                        toastLog("已尝试点击“50人挑战赛”按钮");
                        sleep(3000);
                        break;
                    }
                }
                var C = className("android.webkit.WebView").text("宠物赛跑").findOnce().child(0).child(0);
                for (let i = 0; i < C.child(1).child(0).childCount(); i++) {
                    if (C.childCount() > 1 &&
                        C.child(1).childCount() > 0 &&
                        C.child(1).child(0).childCount() > i &&
                        C.child(1).child(0).child(i).childCount() > 0 &&
                        C.child(1).child(0).child(i).child(0).text() == "我要加入") {
                        let a = C.child(1).child(0).child(i).child(0).bounds();
                        click(a.centerX(), a.centerY());
                        toastLog("已尝试点击“" + C.child(1).child(0).child(i).child(0).text() + "”按钮");
                        sleep(3000);
                        break;
                    }
                }
                for (let i = 0; i < C.childCount(); i++) {
                    if (C.childCount() > i &&
                        C.child(i).childCount() > 0 &&
                        C.child(i).child(C.child(i).childCount() - 1).childCount() > 0 &&
                        C.child(i).child(C.child(i).childCount() - 1).child(0).childCount() > 1 &&
                        C.child(i).child(C.child(i).childCount() - 1).child(0).child(1).text() == "能量补给") {
                        let a = C.child(i).child(C.child(i).childCount() - 1).child(0).child(1).bounds();
                        click(a.centerX(), a.centerY());
                        toastLog("已尝试点击“" + C.child(i).child(C.child(i).childCount() - 1).child(0).child(1).text() + "”按钮");
                        sleep(3000);
                        if (className("android.webkit.WebView").text("能量补给站").findOnce() != null) {
                            var D = className("android.webkit.WebView").text("能量补给站").findOnce().child(0).child(0);
                            for (let i = 0; i < D.childCount(); i++) {
                                var D = className("android.webkit.WebView").text("能量补给站").findOnce().child(0).child(0);
                                if (D.childCount() > i &&
                                    D.child(i).childCount() > 0 &&
                                    D.child(i).child(0).childCount() > 2 &&
                                    D.child(i).child(0).child(2).text() == "逛逛会场") {
                                    let a = D.child(i).child(0).child(2).bounds();
                                    click(a.centerX(), a.centerY());
                                    toastLog("已尝试点击“" + D.child(i).child(0).child(2).text() + "”按钮");
                                    sleep(3000);
                                    for (let deng = 5; deng > 0; deng--) {
                                        toastLog("正在完成“宠物赛跑：逛逛会场”任务，剩余" + deng + "秒……");
                                        sleep(1000);
                                    }
                                    if (desc("返回").clickable(true).className("android.widget.ImageView").findOnce() != null) {
                                        desc("返回").clickable(true).className("android.widget.ImageView").findOnce().click();
                                        toastLog("已尝试盲点“返回”按钮");
                                        sleep(2000);
                                    } else {
                                        Justback();
                                        sleep(2000);
                                    }
                                } else if (D.childCount() > i &&
                                    D.child(i).childCount() > 0 &&
                                    D.child(i).child(0).childCount() > 0 &&
                                    D.child(i).child(0).child(D.child(i).child(0).childCount() - 1).text() == "逛逛会场") {
                                    let a = D.child(i).child(0).child(D.child(i).child(0).childCount() - 1).bounds();
                                    click(a.centerX(), a.centerY());
                                    toastLog("已尝试点击“" + D.child(i).child(0).child(D.child(i).child(0).childCount() - 1).text() + "”按钮");
                                    sleep(3000);
                                    for (let deng = 5; deng > 0; deng--) {
                                        toastLog("正在完成“宠物赛跑：逛逛会场”任务，剩余" + deng + "秒……");
                                        sleep(1000);
                                    }
                                    if (desc("返回").clickable(true).className("android.widget.ImageView").findOnce() != null) {
                                        desc("返回").clickable(true).className("android.widget.ImageView").findOnce().click();
                                        toastLog("已尝试盲点“返回”按钮");
                                        sleep(2000);
                                    } else {
                                        Justback();
                                        sleep(2000);
                                    }
                                }
                            }
                            if (desc("返回").clickable(true).className("android.widget.ImageView").findOnce() != null) {
                                desc("返回").clickable(true).className("android.widget.ImageView").findOnce().click();
                                toastLog("已尝试盲点“返回”按钮");
                                sleep(2000);
                            } else {
                                Justback();
                                sleep(2000);
                            }
                        }
                        if (desc("返回").clickable(true).className("android.widget.ImageView").findOnce() != null) {
                            desc("返回").clickable(true).className("android.widget.ImageView").findOnce().click();
                            toastLog("已尝试盲点“返回”按钮");
                            sleep(2000);
                        } else {
                            Justback();
                            sleep(2000);
                        }
                        break;
                    }
                }

                if (desc("返回").clickable(true).className("android.widget.ImageView").findOnce() != null) {
                    desc("返回").clickable(true).className("android.widget.ImageView").findOnce().click();
                    toastLog("已尝试盲点“返回”按钮");
                    sleep(2000);
                } else {
                    Justback();
                    sleep(2000);
                }
            } else {
                toastLog("当前可能非宠物赛跑时间");
            }
            try {
                var A = className("android.webkit.WebView").text("宠汪汪").findOnce().child(0).child(1).child(0);
            } catch (e) {
                console.warn("当前活动：" + currentActivity() + "，当前包名：" + currentPackage() + "当前应用名：" + getAppName(currentPackage()));
                toastLog("未处于“宠汪汪”主界面，正在重试中……" + e);
                openInTask();
                DoTask();
            }
            let BMWYbutton = [];
            for (let i = A.childCount() - 1; i >= 0; i--) {
                if (A.child(i).childCount() > 3) {
                    for (let ii = A.child(i).childCount() - 1; ii >= 0; ii--) {
                        if (A.child(i).child(ii).childCount() > 1 && A.child(i).child(ii).child(1).childCount() > 0 && A.child(i).child(ii).child(1).child(0).text() == "help_icon2") {
                            BMWYbutton.push({
                                NumberOne: i,
                                NumberTwo: ii
                            });
                        }
                    }
                }
            }
            if (BMWYbutton.length == 1) {
                let a = A.child(BMWYbutton[0].NumberOne).child(BMWYbutton[0].NumberTwo).bounds();
                click(a.centerX(), a.centerY());
                toastLog("已尝试点击“帮忙喂养”按钮");
                sleep(3000);
            } else {
                toastLog("找不到帮忙喂养按钮，正在重新尝试");
                openInTask();
                DoTask();
            }
            var I = 0;
            while (true) {
                try {
                    var A = className("android.webkit.WebView").text("宠汪汪").findOnce().child(0).child(1).child(0);
                    var E = A.child(A.childCount() - 1).child(1).child(A.child(A.childCount() - 1).child(1).childCount() - 1);
                    E.scrollForward();
                } catch (e) {
                    toastLog("帮喂控件查找出现错误，正在重新尝试：" + e);
                    openInTask();
                    DoTask();
                }
                if (I >= E.childCount()) {
                    break;
                } else {
                    if (E.child(I).childCount() > 5 && E.child(I).child(2).text() != "" && E.child(I).child(5).text() == "可帮喂") {
                        toastLog(E.child(I).child(2).text() + "，" + E.child(I).child(5).text());
                        let a = E.child(I).child(5).bounds();
                        let bb = E.child(I).child(2).text();
                        let b = bb.toString();
                        click(a.centerX(), a.centerY());
                        toastLog("已尝试点击“帮喂：" + E.child(I).child(2).text() + "”按钮");
                        sleep(5000);
                        if (className("android.webkit.WebView").findOnce() != null &&
                            className("android.webkit.WebView").findOnce().childCount() > 0 &&
                            className("android.webkit.WebView").findOnce().child(0).childCount() > 0 &&
                            className("android.webkit.WebView").findOnce().child(0).child(0).childCount() > 0) {
                            var G = className("android.webkit.WebView").findOnce().child(0).child(1).child(0);
                            for (let i = 0; i < G.childCount(); i++) {
                                if (G.childCount() > i &&
                                    G.child(i).childCount() > 0 &&
                                    G.child(i).child(0).childCount() > 0 &&
                                    G.child(i).child(0).child(0).childCount() > 0 &&
                                    G.child(i).child(0).child(0).child(0).text() == "bone_ava") {
                                    let a = G.child(i).child(0).child(0).child(0).bounds();
                                    click(a.centerX(), a.centerY());
                                    toastLog("已尝试点击“骨头”按钮");
                                    sleep(3000);
                                    break;
                                }
                            }
                            var G = className("android.webkit.WebView").textContains("的汪汪").findOnce().child(0).child(1).child(0);
                            for (let i = 0; i < G.childCount(); i++) {
                                if (G.childCount() > i &&
                                    G.child(i).childCount() > 0 &&
                                    G.child(i).child(0).childCount() > 0 &&
                                    G.child(i).child(0).child(0).childCount() > 0 &&
                                    G.child(i).child(0).child(0).child(0).text() == "dog-food-icon") {
                                    let a = G.child(i).child(0).child(0).child(0).bounds();
                                    click(a.centerX(), a.centerY());
                                    toastLog("已尝试点击“帮ta喂养”按钮");
                                    sleep(3000);
                                    break;
                                }
                            }
                            var G = className("android.webkit.WebView").textContains("的汪汪").findOnce().child(0).child(1).child(0);
                            for (let i = 0; i < G.childCount(); i++) {
                                if (G.childCount() > i &&
                                    G.child(i).childCount() > 1 &&
                                    G.child(i).child(1).childCount() > 3 &&
                                    G.child(i).child(1).child(3).childCount() > 0 &&
                                    G.child(i).child(1).child(3).child(0).text() == "确定") {
                                    let a = G.child(i).child(1).child(3).child(0).bounds();
                                    click(a.centerX(), a.centerY());
                                    toastLog("已尝试点击“确定帮ta喂养”按钮");
                                    sleep(3000);
                                    break;
                                } else if (G.childCount() > i &&
                                    G.child(i).childCount() > 1 &&
                                    G.child(i).child(1).childCount() > 0 &&
                                    G.child(i).child(1).child(G.child(i).child(1).childCount() - 1).childCount() > 0 &&
                                    G.child(i).child(1).child(G.child(i).child(1).childCount() - 1).child(0).text() == "确定") {
                                    let a = G.child(i).child(1).child(G.child(i).child(1).childCount() - 1).child(0).bounds();
                                    click(a.centerX(), a.centerY());
                                    toastLog("已尝试点击“确定帮ta喂养”按钮");
                                    sleep(3000);
                                    break;
                                }
                            }
                            if (desc("返回").clickable(true).className("android.widget.ImageView").findOnce() != null) {
                                desc("返回").clickable(true).className("android.widget.ImageView").findOnce().click();
                                toastLog("已尝试盲点“返回”按钮");
                                sleep(5000);
                            } else {
                                Justback();
                                sleep(5000);
                            }
                        }
                    } else {;
                        I++;
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
    } else {
        console.warn("当前活动：" + currentActivity() + "，当前包名：" + currentPackage() + "当前应用名：" + getAppName(currentPackage()));
        toastLog("当前未处于“宠汪汪”活动页面，正在重新尝试进入……");
        openInTask();
        DoTask();
    }
}