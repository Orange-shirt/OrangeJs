context_thisScriptName = "种豆得豆自动脚本";
context_thisScriptVersion = "（Beta1.23）";

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
                    toastLog("请打开京东至种豆得豆的主界面\n剩余" + deng + "秒后运行脚本...");
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
                    toastLog("请打开京东至种豆得豆的主界面\n剩余" + deng + "秒后运行脚本...");
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
                    toastLog("请打开京东至种豆得豆的主界面\n剩余" + deng + "秒后运行脚本...");
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
                    toastLog("请打开京东至种豆得豆的主界面\n剩余" + deng + "秒后运行脚本...");
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
            if (files.read("/storage/emulated/0/OrangeJs/种豆得豆自动脚本/Root返回开关.txt") == "true") {
                view.UseRootBackText.setText("已开启");
                view.UseRootBackText.setTextColor(colors.parseColor("#FF1E56"));
                RootBack = true;
            } else if (files.read("/storage/emulated/0/OrangeJs/种豆得豆自动脚本/Root返回开关.txt") == "false") {
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
                files.write("/storage/emulated/0/OrangeJs/种豆得豆自动脚本/Root返回开关.txt", "false");
            } else {
                files.write("/storage/emulated/0/OrangeJs/种豆得豆自动脚本/Root返回开关.txt", "true");
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
            if (files.exists("/storage/emulated/0/OrangeJs/种豆得豆自动脚本/吐司or日志.txt") == true) {
                if (files.read("/storage/emulated/0/OrangeJs/种豆得豆自动脚本/吐司or日志.txt") == "日志") {
                    answer.WhatNow.setText("当前脚本使用：悬浮日志");
                } else if (files.read("/storage/emulated/0/OrangeJs/种豆得豆自动脚本/吐司or日志.txt") == "吐司") {
                    answer.WhatNow.setText("当前脚本使用：吐司（Toast）");
                }
            }
            answer.UseToast.click(() => {
                files.createWithDirs("/storage/emulated/0/OrangeJs/种豆得豆自动脚本/吐司or日志.txt");
                if (files.exists("/storage/emulated/0/OrangeJs/种豆得豆自动脚本/吐司or日志.txt") == true) {
                    try {
                        files.read("/storage/emulated/0/OrangeJs/种豆得豆自动脚本/吐司or日志.txt");
                        files.write("/storage/emulated/0/OrangeJs/种豆得豆自动脚本/吐司or日志.txt", "吐司");
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
                files.createWithDirs("/storage/emulated/0/OrangeJs/种豆得豆自动脚本/吐司or日志.txt");
                if (files.exists("/storage/emulated/0/OrangeJs/种豆得豆自动脚本/吐司or日志.txt") == true) {
                    try {
                        files.read("/storage/emulated/0/OrangeJs/种豆得豆自动脚本/吐司or日志.txt");
                        files.write("/storage/emulated/0/OrangeJs/种豆得豆自动脚本/吐司or日志.txt", "日志");
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
if (files.exists("/storage/emulated/0/OrangeJs/种豆得豆自动脚本/吐司or日志.txt") == true && files.read("/storage/emulated/0/OrangeJs/种豆得豆自动脚本/吐司or日志.txt") == "吐司") {
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
    if (files.exists("/storage/emulated/0/OrangeJs/种豆得豆自动脚本/Root返回开关.txt") == true) {
        if (files.read("/storage/emulated/0/OrangeJs/种豆得豆自动脚本/Root返回开关.txt") == "true") {
            RootBack = true;
        } else if (files.read("/storage/emulated/0/OrangeJs/种豆得豆自动脚本/Root返回开关.txt") == "false") {
            RootBack = false;
        } else {
            toastLog("脚本配置文件错误，已尝试删除错误配置文件：(/storage/emulated/0/OrangeJs/种豆得豆自动脚本/Root返回开关.txt)" + files.remove("/storage/emulated/0/OrangeJs/种豆得豆自动脚本/Root返回开关.txt"));
            files.createWithDirs("/storage/emulated/0/OrangeJs/种豆得豆自动脚本/Root返回开关.txt");
            files.write("/storage/emulated/0/OrangeJs/种豆得豆自动脚本/Root返回开关.txt", "false");
            RootBack = false;
        }
    } else {
        files.createWithDirs("/storage/emulated/0/OrangeJs/种豆得豆自动脚本/Root返回开关.txt");
        files.write("/storage/emulated/0/OrangeJs/种豆得豆自动脚本/Root返回开关.txt", "false");
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
                <text text="种豆得豆自动脚本：已为您停止运行" textSize="15" textStyle="bold" textColor="{{context_textColor}}" gravity="center" margin="5"/>
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

function openInTask() {
    function closeJDLocationView() {
        let jddwdhk = id("com.jingdong.app.mall:id/bn").text("为保证您正常地使用此功能，需要获取您的位置信息使用权限，请允许。").findOnce();
        if (jddwdhk != null && jddwdhk.parent().parent().childCount() > 1 &&
            jddwdhk.parent().parent().child(1).childCount() > 0) {
            for (let i = 0; i < jddwdhk.parent().parent().child(1).childCount(); i++) {
                if (jddwdhk.parent().parent().child(1).child(i).text() == "取消") {
                    if (jddwdhk.parent().parent().child(1).child(i).clickable() == true) {
                        jddwdhk.parent().parent().child(1).child(i).click();
                        toastLog("已尝试盲点“关闭京东位置权限授权框”");
                        sleep(2000);
                    } else {
                        let a = jddwdhk.parent().parent().child(1).child(i).bounds();
                        click(a.centerX(), a.centerY());
                        toastLog("已尝试点击“关闭京东位置权限授权框”");
                        sleep(2000);
                    }
                }
            }
        }
    }
    while (true) {
        closeJDLocationView();

        function ClickRk() {
            let a = className("android.widget.LinearLayout").id("com.jd.lib.personal.feature:id/gm").findOnce();
            let b = className("android.widget.LinearLayout").id("com.jd.lib.personal.feature:id/h4").findOnce();
            let yhA = selector().findOnce();
            if (b != null && b.childCount() > 0 &&
                b.child(0).childCount() > 0 &&
                b.child(0).child(0).childCount() > 4 &&
                b.child(0).child(0).child(4).childCount() > 0 &&
                b.child(0).child(0).child(4).child(0).scrollable() == true) {
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
                            a.child(0).child(0).child(3).child(0).child(ii).child(i).child(0).child(1).text() == "种豆得豆") {
                            return a.child(0).child(0).child(3).child(0).child(ii).child(i);
                        }
                    }
                }
            }else if (a != null && a.childCount() > 0 &&
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
                            a.child(0).child(0).child(4).child(0).child(ii).child(i).child(0).child(1).text() == "种豆得豆") {
                            return a.child(0).child(0).child(4).child(0).child(ii).child(i);
                        }
                    }
                }
            } else if (b != null && b.childCount() > 0 &&
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
                            b.child(0).child(0).child(4).child(0).child(ii).child(i).child(0).child(1).text() == "种豆得豆") {
                            return b.child(0).child(0).child(4).child(0).child(ii).child(i);
                        }
                    }
                }
            } else if (yhA != null && yhA.childCount() > 0 &&
                yhA.child(0).childCount() > 4 &&
                yhA.child(0).child(4).childCount() > 0 &&
                yhA.child(0).child(4).child(0).childCount() > 0 &&
                yhA.child(0).child(4).child(0).child(0).childCount() > 1 &&
                yhA.child(0).child(4).child(0).child(0).child(1).childCount() > 0 &&
                yhA.child(0).child(4).child(0).child(0).child(1).child(0).text() == "种豆得豆") {
                return yhA.child(0).child(4).child(0).child(0).child(1);
            }

        }
        if (className("android.view.View").desc("我的").findOnce() != null && text("种豆得豆").className("android.widget.TextView").findOnce() != null && text("瓜分亿万京豆").className("android.widget.TextView").findOnce() != null) {
            if (text("种豆得豆").className("android.widget.TextView").findOnce().parent().clickable() == true) {
                text("种豆得豆").className("android.widget.TextView").findOnce().parent().click();
                toastLog("已尝试盲点“种豆得豆”入口按钮");
                sleep(3000);
            } else {
                let a = text("种豆得豆").className("android.widget.TextView").findOnce().parent().bounds();
                click(a.centerX(), a.centerY());
                toastLog("已尝试点击“种豆得豆”入口按钮");
                sleep(3000);
            }
            break;
        } else if (className("android.view.View").desc("我的").findOnce() != null && ClickRk() != undefined) {
            let a = ClickRk();
            if (a.clickable() == true) {
                a.click();
                toastLog("已尝试盲点“种豆得豆”入口按钮");
                sleep(3000);
            } else {
                let aa = a.bounds();
                click(aa.centerX(), aa.centerY());
                toastLog("已尝试点击“种豆得豆”入口按钮");
                sleep(3000);
            }
            break;
        } else if (className("android.view.View").desc("我的").findOnce() != null) {
            className("android.view.View").desc("我的").findOnce().click();
            toastLog("已尝试点击京东主页“我的”按钮");
            sleep(2000);
        } else if (currentPackage() != "com.jingdong.app.mall") {
            app.startActivity({
                action: "android.intent.action.VIEW", //此处可为其他值
                packageName: "com.jingdong.app.mall",
                className: "com.jingdong.app.mall.main.MainActivity"
                //此处可以加入其他内容，如data、extras
            });
            toastLog("当前未处于京东APP中，正在重新打开京东……");
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
    for (var d = 10; d > 0; d--) {
        if (MakeSureInHD() == true) {
            sleep(3000);
            break
        } else {
            toastLog("正在等待“种豆得豆”活动界面加载，剩余" + d + "秒……");
            sleep(2000);
        }
    }
    if (MakeSureInHD() == false) {
        openInTask();
    }
}

function MakeSureInHD() {
    if (className("android.widget.TextView").text("收取营养液").findOnce() != null) {
        return true;
    } else {
        return false;
    }
}

function DoTask() {
    if (id("com.jingdong.app.mall:id/aba").findOnce() != null &&
        id("com.jingdong.app.mall:id/aba").findOnce().childCount() > 0 &&
        id("com.jingdong.app.mall:id/aba").findOnce().child(0).childCount() > 0 &&
        id("com.jingdong.app.mall:id/aba").findOnce().child(0).child(0).childCount() > 0 &&
        id("com.jingdong.app.mall:id/aba").findOnce().child(0).child(0).child(0).childCount() > 0 &&
        id("com.jingdong.app.mall:id/aba").findOnce().child(0).child(0).child(0).child(0).childCount() > 0 &&
        id("com.jingdong.app.mall:id/aba").findOnce().child(0).child(0).child(0).child(0).child(0).childCount() > 0 &&
        id("com.jingdong.app.mall:id/aba").findOnce().child(0).child(0).child(0).child(0).child(0).child(0).childCount() > 0 &&
        id("com.jingdong.app.mall:id/aba").findOnce().child(0).child(0).child(0).child(0).child(0).child(0).child(0).childCount() > 0 &&
        id("com.jingdong.app.mall:id/aba").findOnce().child(0).child(0).child(0).child(0).child(0).child(0).child(0).child(0).childCount() == 2 &&
        id("com.jingdong.app.mall:id/aba").findOnce().child(0).child(0).child(0).child(0).child(0).child(0).child(0).child(0).child(0).className() == "android.view.ViewGroup" &&
        id("com.jingdong.app.mall:id/aba").findOnce().child(0).child(0).child(0).child(0).child(0).child(0).child(0).child(0).child(1).className() == "android.widget.ImageView"
    ) {
        let a = id("com.jingdong.app.mall:id/aba").findOnce().child(0).child(0).child(0).child(0).child(0).child(0).child(0).child(0).child(1);
        if (a.clickable() == true) {
            a.click();
            toastLog("已尝试盲点“收豆蒙版”按钮");
        } else {
            let b = a.bounds();
            click(b.centerX(), b.centerY());
            toastLog("已尝试点击“收豆蒙版”按钮");
        }
        sleep(3000);
        if (className("android.widget.TextView").text("上轮您的豆豆成长值为").findOnce() != null && className("android.widget.TextView").text("上轮您的豆豆成长值为").findOnce().parent().childCount() == 4 &&
            className("android.widget.TextView").text("上轮您的豆豆成长值为").findOnce().parent().child(0).className() == "android.widget.TextView" && className("android.widget.TextView").text("上轮您的豆豆成长值为").findOnce().parent().child(1).className() == "android.widget.TextView" && className("android.widget.TextView").text("上轮您的豆豆成长值为").findOnce().parent().child(2).className() == "android.widget.TextView" && className("android.widget.TextView").text("上轮您的豆豆成长值为").findOnce().parent().child(3).className() == "android.widget.TextView") {
            toastLog(className("android.widget.TextView").text("上轮您的豆豆成长值为").findOnce().parent().child(0).text() + className("android.widget.TextView").text("上轮您的豆豆成长值为").findOnce().parent().child(1).text() + className("android.widget.TextView").text("上轮您的豆豆成长值为").findOnce().parent().child(2).text() + className("android.widget.TextView").text("上轮您的豆豆成长值为").findOnce().parent().child(3).text())
        }
        if (className("android.widget.TextView").text("收下京豆").findOnce() != null) {
            let b = className("android.widget.TextView").text("收下京豆").findOnce().bounds();
            click(b.centerX(), b.centerY());
            sleep(3000);
        }
    } else if (className("android.widget.LinearLayout").id("com.jingdong.app.mall:id/aba").findOnce() != null &&
        className("android.widget.LinearLayout").id("com.jingdong.app.mall:id/aba").findOnce().child(0).childCount() > 0 &&
        className("android.widget.LinearLayout").id("com.jingdong.app.mall:id/aba").findOnce().child(0).child(0).childCount() > 0 &&
        className("android.widget.LinearLayout").id("com.jingdong.app.mall:id/aba").findOnce().child(0).child(0).child(0).childCount() > 0 &&
        className("android.widget.LinearLayout").id("com.jingdong.app.mall:id/aba").findOnce().child(0).child(0).child(0).child(0).childCount() > 7 &&
        className("android.widget.LinearLayout").id("com.jingdong.app.mall:id/aba").findOnce().child(0).child(0).child(0).child(0).child(7).childCount() > 0 &&
        className("android.widget.LinearLayout").id("com.jingdong.app.mall:id/aba").findOnce().child(0).child(0).child(0).child(0).child(7).child(0).childCount() > 0 &&
        className("android.widget.LinearLayout").id("com.jingdong.app.mall:id/aba").findOnce().child(0).child(0).child(0).child(0).child(7).child(0).child(0).childCount() > 1 &&
        className("android.widget.LinearLayout").id("com.jingdong.app.mall:id/aba").findOnce().child(0).child(0).child(0).child(0).child(7).child(0).child(0).child(1).className() == "android.widget.ImageView" &&
        className("android.widget.LinearLayout").id("com.jingdong.app.mall:id/aba").findOnce().child(0).child(0).child(0).child(0).child(7).child(0).child(0).child(0).childCount() > 0 &&
        className("android.widget.LinearLayout").id("com.jingdong.app.mall:id/aba").findOnce().child(0).child(0).child(0).child(0).child(7).child(0).child(0).child(0).child(0).className() == "android.widget.ImageView") {
        let a = className("android.widget.LinearLayout").id("com.jingdong.app.mall:id/aba").findOnce().child(0).child(0).child(0).child(0).child(7).child(0).child(0).child(1).bounds();
        click(a.centerX(), a.centerY());
        toastLog("已尝试点击“收取提醒小手”");
        sleep(3000);
        if (className("android.widget.TextView").text("上轮您的豆豆成长值为").findOnce() != null && className("android.widget.TextView").text("上轮您的豆豆成长值为").findOnce().parent().childCount() == 4 &&
            className("android.widget.TextView").text("上轮您的豆豆成长值为").findOnce().parent().child(0).className() == "android.widget.TextView" && className("android.widget.TextView").text("上轮您的豆豆成长值为").findOnce().parent().child(1).className() == "android.widget.TextView" && className("android.widget.TextView").text("上轮您的豆豆成长值为").findOnce().parent().child(2).className() == "android.widget.TextView" && className("android.widget.TextView").text("上轮您的豆豆成长值为").findOnce().parent().child(3).className() == "android.widget.TextView") {
            toastLog(className("android.widget.TextView").text("上轮您的豆豆成长值为").findOnce().parent().child(0).text() + className("android.widget.TextView").text("上轮您的豆豆成长值为").findOnce().parent().child(1).text() + className("android.widget.TextView").text("上轮您的豆豆成长值为").findOnce().parent().child(2).text() + className("android.widget.TextView").text("上轮您的豆豆成长值为").findOnce().parent().child(3).text())
        }
        if (className("android.widget.TextView").text("收下京豆").findOnce() != null) {
            let b = className("android.widget.TextView").text("收下京豆").findOnce().bounds();
            click(b.centerX(), b.centerY());
            sleep(3000);
        }
    }

    let ShouQu = ["好友帮收", "逛逛会场", "点击领取", "营养液", "每日签到", "618活动", "浏览店铺", "挑选商品", "金融双签", "疯抢爆品", "收取好友", "低价包邮", "高考加油", "千万京豆", "种豆专享", "健康宝藏"];
    for (let a = 0; a < ShouQu.length; a++) {
        while (className("android.widget.TextView").text(ShouQu[a]).findOnce() != null && className("android.widget.TextView").text(ShouQu[a]).findOnce().parent().child(0).childCount() > 2 && className("android.widget.TextView").text(ShouQu[a]).findOnce().parent().child(0).child(2).className() == "android.widget.TextView") {
            let b = className("android.widget.TextView").text(ShouQu[a]).findOnce().parent().child(0).child(2);
            click(b.bounds().centerX(), b.bounds().centerY());
            toastLog("已尝试点击“" + ShouQu[a] + b.text() + "”");
            sleep(2000);
        }
    }

    function findQBRW() {
        let a = className("android.widget.LinearLayout").id("com.jingdong.app.mall:id/aba").findOnce();
        if (a != null && a.childCount() > 0 &&
            a.child(0).childCount() > 0 &&
            a.child(0).child(0).childCount() > 0 &&
            a.child(0).child(0).child(0).childCount() > 0 &&
            a.child(0).child(0).child(0).child(0).childCount() > 0 &&
            a.child(0).child(0).child(0).child(0).child(0).childCount() > 0 &&
            a.child(0).child(0).child(0).child(0).child(0).child(0).childCount() > 0) {
            for (let i = 0; i < a.child(0).child(0).child(0).child(0).child(0).child(0).childCount(); i++) {
                if (a.child(0).child(0).child(0).child(0).child(0).child(0).child(i).childCount() > 0 &&
                    a.child(0).child(0).child(0).child(0).child(0).child(0).child(i).child(0).childCount() > 1 &&
                    a.child(0).child(0).child(0).child(0).child(0).child(0).child(i).child(0).child(1).text().search("更多任务") >= 0 ||
                    a.child(0).child(0).child(0).child(0).child(0).child(0).child(i).childCount() > 0 &&
                    a.child(0).child(0).child(0).child(0).child(0).child(0).child(i).child(0).childCount() > 1 &&
                    a.child(0).child(0).child(0).child(0).child(0).child(0).child(i).child(0).child(1).text().search("全部任务") >= 0) {
                    return a.child(0).child(0).child(0).child(0).child(0).child(0).child(i).child(0);
                } else if (a.child(0).child(0).child(0).child(0).child(0).child(0).child(i).childCount() > 1 &&
                    a.child(0).child(0).child(0).child(0).child(0).child(0).child(i).child(1).text().search("更多任务") >= 0 ||
                    a.child(0).child(0).child(0).child(0).child(0).child(0).child(i).childCount() > 1 &&
                    a.child(0).child(0).child(0).child(0).child(0).child(0).child(i).child(1).text().search("全部任务") >= 0) {
                    return a.child(0).child(0).child(0).child(0).child(0).child(0).child(i);
                }
            }
        }
        if (a != null &&
            a.childCount() > 0 &&
            a.child(0).childCount() > 0 &&
            a.child(0).child(0).childCount() > 0 &&
            a.child(0).child(0).child(0).childCount() > 0 &&
            a.child(0).child(0).child(0).child(0).childCount() > 0 &&
            a.child(0).child(0).child(0).child(0).child(0).childCount() > 0 &&
            a.child(0).child(0).child(0).child(0).child(0).child(0).childCount() > 2) {
            let i = a.child(0).child(0).child(0).child(0).child(0).child(0).childCount();
            if (a.child(0).child(0).child(0).child(0).child(0).child(0).child(i - 2).childCount() > 1 &&
                a.child(0).child(0).child(0).child(0).child(0).child(0).child(i - 2).child(1).text().search("更多任务") >= 0) {
                return a.child(0).child(0).child(0).child(0).child(0).child(0).child(i - 2).child(1);
            }
        }
    }
    log("r" + findQBRW());
    if (findQBRW() != undefined) {
        let a = findQBRW().bounds();
        click(a.centerX(), a.centerY());
        toastLog("已尝试点击“全部任务”按钮X");
        sleep(3000);
    } else if (className("android.widget.ScrollView").findOnce() != null && className("android.widget.ScrollView").findOnce().childCount() > 0 && className("android.widget.ScrollView").findOnce().child(0).childCount() > 2) {
        let a = className("android.widget.ScrollView").findOnce().child(0).child(className("android.widget.ScrollView").findOnce().child(0).childCount() - 2).bounds();
        click(a.centerX(), a.centerY());
        toastLog("已尝试点击“全部任务”按钮");
        sleep(3000);
    } else if (className("android.widget.TextView").text("收取营养液").findOnce() != null && className("android.widget.TextView").text("收取营养液").findOnce().parent().className() == "android.view.ViewGroup" && className("android.widget.TextView").text("收取营养液").findOnce().parent().parent().childCount() > 14) {
        let a = className("android.widget.TextView").text("收取营养液").findOnce().parent().parent().child(13).bounds();
        click(a.centerX(), a.centerY());
        toastLog("已尝试点击“全部任务”按钮");
        sleep(3000);
    }


    var ax = 0;
    var DoNotDoPJRW = null;
    var DoNotDoGGHC = null;
    while (true) {
        if (className("android.widget.TextView").text("全部任务").findOnce() != null && className("android.widget.TextView").text("全部任务").findOnce().parent().child(className("android.widget.TextView").text("全部任务").findOnce().parent().childCount() - 1).className() == "android.widget.ScrollView") {
            var A = className("android.widget.TextView").text("全部任务").findOnce().parent().child(className("android.widget.TextView").text("全部任务").findOnce().parent().childCount() - 1);
            var B = A.child(0);
        } else if (className("android.widget.TextView").textContains("当前通过任务获得").findOnce() != null &&
            className("android.widget.TextView").textContains("当前通过任务获得").findOnce().parent().parent().childCount() > 2 &&
            className("android.widget.TextView").textContains("当前通过任务获得").findOnce().parent().parent().child(2).className() == "android.widget.ScrollView" &&
            className("android.widget.TextView").textContains("当前通过任务获得").findOnce().parent().parent().child(2).childCount() == 1) {
            var B = className("android.widget.TextView").textContains("当前通过任务获得").findOnce().parent().parent().child(2).child(0);
        }
        toastLog("任务列表可滑动区域为：" + B.bounds().top + "," + B.bounds().bottom);
        if (ax >= B.childCount()) {
            break;
        } else {
            try {
                if (B.child(ax).child(0).childCount() > 1 && B.child(ax).child(0).child(1).className() == "android.widget.TextView") {
                    var RwTitle = B.child(ax).child(0).child(1).text();
                } else if (B.child(ax).child(0).childCount() > 0 && B.child(ax).child(0).child(0).childCount() > 1 && B.child(ax).child(0).child(0).child(1).className() == "android.widget.TextView") {
                    var RwTitle = B.child(ax).child(0).child(0).child(1).text();
                }
                if (B.child(ax).childCount() > 0 &&
                    B.child(ax).child(0).childCount() > 2 &&
                    B.child(ax).child(0).child(2).childCount() > 1 &&
                    B.child(ax).child(0).child(2).child(1).className() == "android.widget.TextView") {
                    var ZhuangTai = B.child(ax).child(0).child(2).child(1).text();
                } else if (B.child(ax).childCount() > 0 &&
                    B.child(ax).child(0).childCount() > 2 &&
                    B.child(ax).child(0).child(2).childCount() > 0 &&
                    B.child(ax).child(0).child(2).child(0).className() == "android.widget.TextView") {
                    var ZhuangTai = B.child(ax).child(0).child(2).child(0).text();
                }
                log(ZhuangTai);
                if (B.child(ax).childCount() > 0 &&
                    B.child(ax).child(0).childCount() > 5 &&
                    B.child(ax).child(0).child(5).className() == "android.view.ViewGroup") {
                    var Button = B.child(ax).child(0).child(5).child(0);
                } else if (B.child(ax).childCount() > 0 &&
                    B.child(ax).child(0).childCount() > 4 &&
                    B.child(ax).child(0).child(4).className() == "android.widget.TextView") {
                    var Button = B.child(ax).child(0).child(4);
                } else if (B.child(ax).childCount() > 0 &&
                    B.child(ax).child(0).childCount() > 4 &&
                    B.child(ax).child(0).child(4).className() == "android.view.ViewGroup") {
                    var Button = B.child(ax).child(0).child(4).child(0);
                }
                log(RwTitle, ZhuangTai, Button.text());
            } catch (e) {
                console.warn("当前活动：" + currentActivity() + "，当前包名：" + currentPackage() + "当前应用名：" + getAppName(currentPackage()));
                toastLog("当前未处于“任务列表”界面或返回任务界面出错，正在重新进入:" + e);
                openInTask();
                DoTask();
            }
            if (ZhuangTai.search("/") > 0) {
                let Start = ZhuangTai.search("/");
                now = null;
                xz = null;
                i = Start - 1;
                while (true) {
                    if (now != null && isNaN(ZhuangTai[i]) == true) {
                        break;
                    } else if (now == null) {
                        var now = ZhuangTai[i];
                    } else {
                        var now = ZhuangTai[i] + now;
                    }
                    i--;
                }
                i = Start + 1;
                while (true) {
                    if (xz != null && isNaN(ZhuangTai[i]) == true) {
                        break;
                    } else if (xz == null) {
                        var xz = ZhuangTai[i];
                    } else {
                        var xz = xz + ZhuangTai[i];
                    }
                    i++;
                }
            } else {
                log("无法确定任务上限及当前完成数，请联系开发者解决", "任务名状态名：" + ZhuangTai);
                alert("无法确定任务上限及当前完成数，请联系开发者解决", "任务名状态名：" + ZhuangTai);
                exit();
            }
            toastLog("当前任务完成已完成" + now + "次，当前任务上限为" + xz + "次");
            if (Button.bounds().centerY() > B.bounds().bottom - 10) {
                swipe(B.bounds().centerX(), B.bounds().centerY(), B.bounds().centerX(), B.bounds().centerY() - 500, 500);
                toastLog("已尝试上滑当前任务页，滑动前按钮“" + Button.text() + "”中心点Y坐标为：" + Button.bounds().centerY());
                sleep(1000);
            } else if (Button.bounds().centerY() < B.bounds().top) {
                swipe(B.bounds().centerX(), B.bounds().centerY(), B.bounds().centerX(), B.bounds().centerY() + 500, 500);
                toastLog("已尝试下滑当前任务页，滑动前按钮“" + Button.text() + "”中心点Y坐标为：" + Button.bounds().centerY());
                sleep(1000);
            } else if (now != xz && RwTitle != "逛逛会场" && RwTitle != "评价商品" && RwTitle != "好友助力" || now != xz && RwTitle == "逛逛会场" && DoNotDoGGHC == null && now == 0 || now != xz && RwTitle == "评价商品" && DoNotDoPJRW == null) {
                if (Button.clickable() == true) {
                    Button.click();
                    toastLog("已尝试盲点“" + Button.text() + "”按钮");
                } else {
                    let a = Button.bounds();
                    click(a.centerX(), a.centerY());
                    toastLog("已尝试点击“" + Button.text() + "”按钮");
                }
                sleep(3000);
                for (var JustWait = 10; JustWait > 0; JustWait--) {
                    if (className("android.widget.TextView").text("进店任务").findOnce() != null) { //浏览店铺
                        var limit = Number(xz);
                        var over = 0;
                        var ALL = className("android.widget.TextView").text("进店并关注").find().size();
                        try {
                            var X = className("android.widget.ScrollView").findOnce().bounds();
                            log(X);
                        } catch (e) {
                            console.warn("当前活动：" + currentActivity() + "，当前包名：" + currentPackage() + "当前应用名：" + getAppName(currentPackage()));
                            toastLog("未成功进入“进店并关注”菜单界面，正在重试中……");
                            openInTask();
                            DoTask();

                        }
                        toastLog("【“进店并关注”数量】：" + ALL + "【可点击区域】：" + X.top, X.bottom);
                        for (var i = 0; i <= ALL; i++) {
                            while (true) {
                                log(over, limit);
                                if (over >= limit) {
                                    toastLog("“进店并关注”获得营养液已达每日上限" + limit + "，返回继续进行下一任务");
                                    if (className("android.widget.ImageView").desc("返回").clickable(true).findOnce() != null) {
                                        className("android.widget.ImageView").desc("返回").clickable(true).findOnce().click();
                                    } else {
                                        Justback();
                                    }
                                    sleep(3000);
                                    var i = ALL;
                                    var JustWait = 0;
                                    break;
                                } else if (i >= ALL) {
                                    toastLog("已找完全部" + ALL + "个店铺，在浏览" + i + "个店铺后共找到" + over + "瓶营养液，但未达到今日" + limit + "个上限")
                                    if (className("android.widget.ImageView").desc("返回").clickable(true).findOnce() != null) {
                                        className("android.widget.ImageView").desc("返回").clickable(true).findOnce().click();
                                    } else {
                                        Justback();
                                    }
                                    sleep(3000);
                                    var JustWait = 0;
                                    break;
                                } else {
                                    let a = className("android.widget.TextView").text("进店并关注").findOnce(i);
                                    if (a == null) {
                                        toastLog("找不到“进店并关注”按钮，正在重新尝试中……");
                                        openInTask();
                                        DoTask();
                                        var JustWait = 0;
                                        break;
                                    } else if (a.bounds().top != X.top && a.bounds().bottom != X.bottom) {
                                        toastLog("【已点击】第" + i + "个“进店并关注”范围为：" + a.bounds().centerX(), a.bounds().centerY(), "上边缘点下边缘点分别为：" + a.bounds().top, a.bounds().bottom);
                                        click(a.bounds().centerX(), a.bounds().centerY());
                                        sleep(3000);
                                        if (currentActivity() == "com.jd.lib.jshop.jshop.JshopMainShopActivity" || className("android.widget.EditText").findOnce() != null) {
                                            for (var z = 5; z > 0; z--) {
                                                if (className("android.view.View").text("营养液走丢了～").findOnce() != null) {
                                                    var z = 0;
                                                    if (className("android.view.View").text("营养液走丢了～").findOnce().parent().parent().childCount() == 3) {
                                                        var za = className("android.view.View").text("营养液走丢了～").findOnce().parent().parent().child(2).child(1);
                                                    } else if (className("android.view.View").text("营养液走丢了～").findOnce().parent().parent().childCount() == 2) {
                                                        var za = className("android.view.View").text("营养液走丢了～").findOnce().parent().parent().child(1).child(1);
                                                    }
                                                    if (za.clickable() == true) {
                                                        za.click();
                                                        toastLog("营养液走丢了～已盲点“继续找营养液”");
                                                    } else {
                                                        let zb = za.bounds();
                                                        click(zb.centerX(), zb.centerY());
                                                        toastLog("营养液走丢了～已点击“继续找营养液（" + zb.centerX(), zb.centerY() + "）”");
                                                    }
                                                    sleep(3000);
                                                } else if (className("android.view.View").text("1个营养液").findOnce() != null || className("android.view.View").textContains("个营养液").findOnce() != null) {
                                                    var z = 0;
                                                    if (className("android.view.View").text("1个营养液").findOnce() != null && className("android.view.View").text("1个营养液").findOnce().parent().parent().childCount() == 3) {
                                                        var zat = className("android.view.View").text("1个营养液").findOnce();
                                                        var za = className("android.view.View").text("1个营养液").findOnce().parent().parent().child(2).child(1);
                                                    } else if (className("android.view.View").textContains("个营养液").findOnce() != null && className("android.view.View").textContains("个营养液").findOnce().parent().parent().childCount() == 3) {
                                                        var zat = className("android.view.View").textContains("个营养液").findOnce();
                                                        var za = className("android.view.View").textContains("个营养液").findOnce().parent().parent().child(2).child(1);
                                                    } else if (className("android.view.View").text("1个营养液").findOnce() != null && className("android.view.View").text("1个营养液").findOnce().parent().parent().childCount() == 2) {
                                                        var zat = className("android.view.View").text("1个营养液").findOnce();
                                                        var za = className("android.view.View").text("1个营养液").findOnce().parent().parent().child(1).child(1);
                                                    } else if (className("android.view.View").textContains("个营养液").findOnce() != null && className("android.view.View").textContains("个营养液").findOnce().parent().parent().childCount() == 2) {
                                                        var zat = className("android.view.View").textContains("个营养液").findOnce();
                                                        var za = className("android.view.View").textContains("个营养液").findOnce().parent().parent().child(1).child(1);
                                                    }
                                                    if (za.clickable() == true) {
                                                        za.click();
                                                        toastLog("已找到" + zat.text() + "～已盲点“继续找营养液”");
                                                    } else {
                                                        let zb = za.bounds();
                                                        click(zb.centerX(), zb.centerY());
                                                        toastLog("已找到" + zat.text() + "～已点击“继续找营养液（" + zb.centerX(), zb.centerY() + "）”");
                                                    }
                                                    over++;
                                                    sleep(3000);
                                                } else {
                                                    toastLog("正在浏览第" + i + "个店铺，剩余" + z + "秒后返回……");
                                                    sleep(2500);
                                                }
                                            }
                                            if (currentActivity() == "com.jd.lib.jshop.jshop.JshopMainShopActivity" || className("android.widget.EditText").findOnce() != null) {
                                                toastLog("仍然处于店铺中正在尝试返回种豆得豆界面");
                                                Justback();
                                                sleep(3000);
                                            }
                                        }
                                        break;
                                    } else if (a.bounds().top == X.top) {
                                        swipe(X.centerX(), X.centerY(), X.centerX(), X.centerY() + 300, 500);
                                    } else if (a.bounds().bottom == X.bottom) {
                                        swipe(X.centerX(), X.centerY(), X.centerX(), X.centerY() - 300, 500);
                                    }
                                }
                            }
                        }
                    } else if (text("关注频道任务").id("fd").findOnce() != null) {
                        var limit = Number(xz);
                        var over = 0;
                        try {
                            var X = id("fd").findOnce().bounds();
                        } catch (e) {
                            console.warn("当前活动：" + currentActivity() + "，当前包名：" + currentPackage() + "当前应用名：" + getAppName(currentPackage()));
                            toastLog("未成功进入“进入并关注”菜单界面，正在重试中……");
                            openInTask();
                            DoTask();

                        }
                        var ALL = className("android.view.View").text("进入并关注").find().size();
                        toastLog("【“进入并关注”数量】：" + ALL + "【可点击区域】：" + X.bottom, device.height);
                        for (var i = 0; i <= ALL; i++) {
                            while (true) {
                                if (over >= limit) {
                                    toastLog("“进入并关注”获得营养液已达每日上限" + limit + "，返回继续进行下一任务");
                                    if (className("android.widget.ImageView").desc("返回").clickable(true).findOnce() != null) {
                                        className("android.widget.ImageView").desc("返回").clickable(true).findOnce().click();
                                    } else {
                                        Justback();
                                    }
                                    sleep(3000);
                                    var i = ALL;
                                    var JustWait = 0;

                                    break;
                                } else if (i >= ALL) {
                                    toastLog("已找完全部" + ALL + "个店铺，在浏览" + i + "个店铺后共找到" + over + "瓶营养液，但未达到今日" + limit + "个上限")
                                    if (className("android.widget.ImageView").desc("返回").clickable(true).findOnce() != null) {
                                        className("android.widget.ImageView").desc("返回").clickable(true).findOnce().click();
                                    } else {
                                        Justback();
                                    }
                                    sleep(3000);
                                    var JustWait = 0;

                                    break;
                                } else {
                                    let a = className("android.view.View").text("进入并关注").findOnce(i);
                                    if (a == null) {
                                        toastLog("找不到“进入并关注”按钮，正在重新尝试中……");
                                        openInTask();
                                        DoTask();
                                        var JustWait = 0;

                                        break;
                                    } else if (a.clickable() == true) {
                                        a.click();
                                        toastLog("已盲点第" + i + "个“进入并关注”");
                                        for (let deng = 3; deng > 0; deng--) {
                                            if (className("android.view.View").text("恭喜获得1瓶营养液").findOnce() != null) {
                                                toastLog("恭喜获得1瓶营养液");
                                                over++;
                                                break;
                                            } else if (className("android.view.View").text("营养液走丢了，继续寻找吧~").findOnce() != null) {
                                                toastLog("营养液走丢了，继续寻找吧~");
                                                break;
                                            } else {
                                                toastLog("正在尝试查找“点击提示”，剩余" + deng + "秒……");
                                                sleep(1000);
                                            }
                                        }
                                        for (let a = 5; a > 0; a--) {
                                            toastLog("正在等待活动加载，剩余" + a + "秒……");
                                            sleep(1000);
                                        }
                                        if (id("com.jingdong.app.mall:id/fd").text("关注频道任务").findOnce() == null) {
                                            if (className("android.widget.ImageView").desc("返回").clickable(true).findOnce() != null) {
                                                className("android.widget.ImageView").desc("返回").clickable(true).findOnce().click();
                                                sleep(3000);
                                            } else {
                                                Justback();
                                                sleep(3000);
                                            }
                                        } else {
                                            toastLog("点击后未完成活动或未成功点击");
                                            sleep(2000);
                                        }
                                        break;
                                    } else if (a.bounds().top > X.bottom && a.bounds().bottom != device.height) {
                                        toastLog("【已点击】第" + i + "个“进入并关注”范围为：" + a.bounds().centerX(), a.bounds().centerY(), "上边缘点下边缘点分别为：" + a.bounds().top, a.bounds().bottom);
                                        click(a.bounds().centerX(), a.bounds().centerY());
                                        if (className("android.view.View").text("恭喜获得1瓶营养液").findOne(5000) != null) {
                                            toastLog("恭喜获得1瓶营养液");
                                            over++;
                                        }
                                        for (let a = 5; a > 0; a--) {
                                            toastLog("正在等待活动加载，剩余" + a + "秒……");
                                            sleep(2500);
                                        }
                                        if (id("com.jingdong.app.mall:id/fd").text("关注频道任务").findOnce() == null) {
                                            if (className("android.widget.ImageView").desc("返回").clickable(true).findOnce() != null) {
                                                className("android.widget.ImageView").desc("返回").clickable(true).findOnce().click();
                                                toastLog("已尝试盲点返回按钮");
                                                sleep(3000);
                                            } else {
                                                Justback();
                                                sleep(3000);
                                            }
                                        }
                                        break;
                                    } else if (a.bounds().top <= X.bottom) {
                                        swipe(device.width / 2, device.height / 2, device.width / 2, device.height / 2 + 300, 500);
                                    } else if (a.bounds().bottom == device.height) {
                                        swipe(device.width / 2, device.height / 2, device.width / 2, device.height / 2 - 300, 500);
                                    }
                                }
                            }
                        }
                    } else if (currentActivity() == "com.jingdong.common.jdreactFramework.activities.JDReactNativeCommonActivity" && className("android.widget.TextView").text("签到领京豆").findOnce() != null) {
                        if (className("android.widget.TextView").text("签到领京豆").findOnce() != null) {
                            let a = className("android.widget.TextView").text("签到领京豆").findOnce().bounds();
                            click(a.centerX(), a.centerY());
                            toastLog("已尝试点击“签到领京豆”按钮");
                            for (let dengw = 10; dengw > 0; dengw--) {
                                if (className("android.widget.Image").text("rqgw7ZXmQDKLeno6UJDwD4AAObPazg9A5AddKkSX").findOnce() != null) {
                                    click(className("android.widget.Image").text("rqgw7ZXmQDKLeno6UJDwD4AAObPazg9A5AddKkSX").findOnce().bounds().centerX(), className("android.widget.Image").text("rqgw7ZXmQDKLeno6UJDwD4AAObPazg9A5AddKkSX").findOnce().bounds().centerY());
                                    toastLog("已尝试点击“查看签到成功”按钮");
                                    sleep(2000);
                                } else if (className("android.view.View").text("今日签到成功奖励").findOnce() != null && className("android.view.View").text("今日签到成功奖励").findOnce().parent().parent().parent().childCount() > 1 &&
                                    className("android.view.View").text("今日签到成功奖励").findOnce().parent().parent().parent().child(1).childCount() > 0 && className("android.view.View").text("今日签到成功奖励").findOnce().parent().parent().parent().child(1).child(0).childCount() > 0 &&
                                    className("android.view.View").text("今日签到成功奖励").findOnce().parent().parent().parent().child(1).child(0).child(0).childCount() > 2 && className("android.view.View").text("今日签到成功奖励").findOnce().parent().parent().parent().child(1).child(0).child(0).child(2).text() != "" && className("android.view.View").text("今日签到成功奖励").findOnce().parent().parent().parent().child(1).child(0).child(0).child(2).text() != null) {
                                    toastLog("今日签到成功奖励：" + className("android.view.View").text("今日签到成功奖励").findOnce().parent().parent().parent().child(1).child(0).child(0).child(2).text() + "个京豆");
                                    sleep(2000);
                                    break;
                                } else if (className("android.widget.TextView").text("今日签到成功奖励").findOnce() != null && className("android.widget.TextView").text("今日签到成功奖励").findOnce().parent().parent().parent().childCount() > 1 &&
                                    className("android.widget.TextView").text("今日签到成功奖励").findOnce().parent().parent().parent().child(1).childCount() > 0 && className("android.widget.TextView").text("今日签到成功奖励").findOnce().parent().parent().parent().child(1).child(0).childCount() > 0 &&
                                    className("android.widget.TextView").text("今日签到成功奖励").findOnce().parent().parent().parent().child(1).child(0).child(0).childCount() > 2 && className("android.widget.TextView").text("今日签到成功奖励").findOnce().parent().parent().parent().child(1).child(0).child(0).child(2).text() != "" && className("android.widget.TextView").text("今日签到成功奖励").findOnce().parent().parent().parent().child(1).child(0).child(0).child(2).text() != null) {
                                    toastLog("今日签到成功奖励：" + className("android.widget.TextView").text("今日签到成功奖励").findOnce().parent().parent().parent().child(1).child(0).child(0).child(2).text() + "个京豆");
                                    sleep(2000);
                                    break;
                                } else if (className("android.widget.TextView").text("签到成功，").findOnce() != null) {
                                    try {
                                        let a = className("android.widget.TextView").text("签到成功，").findOnce();
                                        let b = a.parent().child(a.drawingOrder()).text();
                                        let c = a.parent().child(a.drawingOrder() + 3).text();
                                        toastLog(a.text() + b + "京豆x" + c);
                                        sleep(2000);
                                        break;
                                    } catch (e) {
                                        log(e);
                                    }
                                } else {
                                    toastLog("正在等待“签到成功”界面加载，剩余" + dengw + "秒……");
                                    sleep(1000);
                                }
                            }
                            for (let f = 2; f > 0; f--) {
                                if (className("android.view.ViewGroup").depth(1).findOnce() != null) {
                                    let ba = className("android.view.ViewGroup").depth(1).findOnce().bounds();
                                    click(ba.centerX(), ba.centerY());
                                    toastLog("已尝试点击“返回按钮”");
                                    sleep(2000);
                                } else {
                                    Justback();
                                    sleep(2000);
                                }
                            }
                            var JustWait = 0;
                        } else if (className("android.widget.TextView").text("已连续签到").findOnce() != null) {
                            let b = className("android.widget.TextView").text("已连续签到").findOne().parent();
                            console.warn("若看到此日志，请截图提醒开发者！此处代码不应该运行的哦。");
                            if (b.childCount() != 3) {
                                toastLog("今日已签到，本处代码不应该运行的。");
                            } else {
                                toastLog(b.child(0).text() + b.child(1).text() + b.child(2).text());
                            }
                            if (className("android.view.ViewGroup").depth(1).findOnce() != null) {
                                let ba = className("android.view.ViewGroup").depth(1).findOnce().bounds();
                                click(ba.centerX(), ba.centerY());
                                toastLog("已尝试点击“返回按钮”");
                                sleep(2000);
                            } else {
                                Justback();
                                sleep(2000);
                            }
                            var JustWait = 0;
                        } else {
                            console.warn("当前活动：" + currentActivity() + "，当前包名：" + currentPackage() + "当前应用名：" + getAppName(currentPackage()));
                            toastLog("错误！未找到“签到领京豆”按钮，重新进入并重试中……");
                            openInTask();
                            DoTask();
                            var JustWait = 0;
                        }
                    } else if (className("android.widget.TextView").text("已获得").findOnce() != null) {
                        var limit = Number(xz);
                        var over = 0;
                        var i = 1;
                        while (true) {
                            let as = className("android.widget.TextView").text("x6").find();
                            for (var ii = 0; ii < className("android.widget.TextView").text("x6").find().length; ii++) {
                                if (className("android.widget.LinearLayout").id("com.jingdong.app.mall:id/abb").findOnce() != null &&
                                    className("android.widget.LinearLayout").id("com.jingdong.app.mall:id/abb").findOnce().child(0).childCount() > 0 &&
                                    className("android.widget.LinearLayout").id("com.jingdong.app.mall:id/abb").findOnce().child(0).child(0).childCount() > 0 &&
                                    className("android.widget.LinearLayout").id("com.jingdong.app.mall:id/abb").findOnce().child(0).child(0).child(0).childCount() > 0 &&
                                    className("android.widget.LinearLayout").id("com.jingdong.app.mall:id/abb").findOnce().child(0).child(0).child(0).child(0).childCount() > 0 &&
                                    className("android.widget.LinearLayout").id("com.jingdong.app.mall:id/abb").findOnce().child(0).child(0).child(0).child(0).child(0).childCount() > 0 &&
                                    className("android.widget.LinearLayout").id("com.jingdong.app.mall:id/abb").findOnce().child(0).child(0).child(0).child(0).child(0).child(0).childCount() > 0 &&
                                    className("android.widget.LinearLayout").id("com.jingdong.app.mall:id/abb").findOnce().child(0).child(0).child(0).child(0).child(0).child(0).child(0).childCount() > 4 &&
                                    className("android.widget.LinearLayout").id("com.jingdong.app.mall:id/abb").findOnce().child(0).child(0).child(0).child(0).child(0).child(0).child(0).child(4).childCount() > 2 &&
                                    className("android.widget.LinearLayout").id("com.jingdong.app.mall:id/abb").findOnce().child(0).child(0).child(0).child(0).child(0).child(0).child(0).child(4).child(2).childCount() > 0 &&
                                    className("android.widget.LinearLayout").id("com.jingdong.app.mall:id/abb").findOnce().child(0).child(0).child(0).child(0).child(0).child(0).child(0).child(4).child(2).child(0).text() == "已完成") {
                                    toastLog("已成功完成“挑选商品”任务，正在尝试返回");
                                    if (className("android.widget.ImageView").desc("返回").clickable(true).findOnce() != null) {
                                        className("android.widget.ImageView").desc("返回").clickable(true).findOnce().click();
                                    } else {
                                        Justback();
                                    }
                                    sleep(3000);
                                    var JustWait = 0;
                                    var ii = -1;
                                } else if (as.get(ii) != null &&
                                    as.get(ii).parent().childCount() > 0 &&
                                    as.get(ii).parent().child(as.get(ii).parent().childCount() - 1).childCount() > 0 &&
                                    as.get(ii).parent().child(as.get(ii).parent().childCount() - 1).child(0).text() == "已完成") {
                                    toastLog("已成功完成“挑选商品”任务，正在尝试返回");
                                    if (className("android.widget.ImageView").desc("返回").clickable(true).findOnce() != null) {
                                        className("android.widget.ImageView").desc("返回").clickable(true).findOnce().click();
                                    } else {
                                        Justback();
                                    }
                                    sleep(3000);
                                    var JustWait = 0;
                                    var ii = -1;
                                }
                            }
                            if (ii == -1) {
                                break;
                            } else {
                                try {
                                    let p = className("android.widget.TextView").text("已获得").findOnce().parent().parent();
                                    let o = p.parent().child(p.parent().childCount() - 2);
                                    var C = o.child(0).child(0).child(2).child(0);
                                    let n = o.child(1).text();
                                    var Now = Number(n);
                                    let b = o.child(2).text();
                                    var ALL = b.replace("/", "");
                                } catch (e) {
                                    log(e);
                                    console.warn("当前活动：" + currentActivity() + "，当前包名：" + currentPackage() + "当前应用名：" + getAppName(currentPackage()));
                                    toastLog("未处于进入“选ta并关注”菜单界面，正在重试中……");
                                    openInTask();
                                    DoTask();
                                    var JustWait = 0;
                                    break;
                                }
                                toastLog("当前为第" + Now + "个卡片，卡片总数为" + ALL);
                                if (over >= limit) {
                                    toastLog("“选ta并关注”获得营养液已达每日上限" + limit + "，返回继续进行下一任务");
                                    if (className("android.widget.ImageView").desc("返回").clickable(true).findOnce() != null) {
                                        className("android.widget.ImageView").desc("返回").clickable(true).findOnce().click();
                                    } else {
                                        Justback();
                                    }
                                    sleep(3000);
                                    var JustWait = 0;
                                    break;
                                } else if (i > ALL) {
                                    toastLog("已找完全部" + ALL + "个店铺，在浏览" + i + "个店铺后共找到" + over + "瓶营养液，但未达到今日" + limit + "个上限")
                                    if (className("android.widget.ImageView").desc("返回").clickable(true).findOnce() != null) {
                                        className("android.widget.ImageView").desc("返回").clickable(true).findOnce().click();
                                    } else {
                                        Justback();
                                    }
                                    sleep(3000);
                                    var JustWait = 0;
                                    break;
                                } else {
                                    if (Now != i) {
                                        if (Now < i) {
                                            swipe(C.bounds().centerX(), C.bounds().centerY(), 0, C.bounds().centerY(), 500);
                                        } else if (Now > i) {
                                            swipe(C.bounds().centerX(), C.bounds().centerY(), C.bounds().width(), C.bounds().centerY(), 500);
                                        }
                                        toastLog("已尝试按顺序滑动至第" + i + "个卡片");
                                        sleep(2000);
                                    } else {
                                        let a = C.child(C.childCount() - 1).bounds();
                                        click(a.centerX(), a.centerY());
                                        toastLog("已尝试点击“选ta并关注”按钮");
                                        if (text("关注成功，获得1瓶营养液").findOne(5000) != null) {
                                            toastLog("关注成功，获得1瓶营养液");
                                            over++;
                                        }
                                        for (let deng = 3; deng > 0; deng--) {
                                            if (text("关注成功，获得1瓶营养液").findOnce() != null || desc("关注成功，获得1瓶营养液").findOnce() != null) {
                                                toastLog("关注成功，获得1瓶营养液");
                                                over++;
                                                break;
                                            } else if (text("营养液走丢了，继续寻找吧~").findOnce() != null) {
                                                toastLog("营养液走丢了，继续寻找吧~");
                                                break;
                                            } else {
                                                toastLog("正在尝试查找“点击提示”，剩余" + deng + "秒……");
                                                sleep(1000);
                                            }
                                        }
                                        for (var loop = 5; loop > 0; loop--) {
                                            if (currentActivity() == "com.jd.lib.productdetail.ProductDetailActivity" || id("com.jd.lib.productdetail:id/akl").findOnce() != null) {
                                                var loop = 0;
                                                sleep(2000);
                                                if (className("android.widget.ImageView").desc("返回").clickable(true).findOnce() != null) {
                                                    className("android.widget.ImageView").desc("返回").clickable(true).findOnce().click();
                                                    toastLog("已盲点返回");
                                                    sleep(3000);
                                                } else {
                                                    Justback();
                                                    sleep(3000);
                                                }
                                            } else {
                                                toastLog("正在等待商品页加载，剩余" + loop + "秒……");
                                                sleep(2000);
                                            }
                                        }
                                        i++;
                                    }
                                }
                            }
                        }
                    } else if (id("com.jingdong.app.mall:id/fd").text("评价中心").findOnce() != null && text("没有待评价的商品哦~").findOnce() != null) {
                        var DoNotDoPJRW = 1;
                        toastLog("评价商品任务内无任何商品可评价");
                        if (className("android.widget.ImageView").desc("返回").clickable(true).findOnce() != null) {
                            className("android.widget.ImageView").desc("返回").clickable(true).findOnce().click();
                        } else {
                            Justback();
                        }
                        sleep(3000);
                        var JustWait = 0;
                    } else if (id("com.jingdong.app.mall:id/fd").text("评价中心").findOnce() != null) {
                        for (let i = 1; i > 0; i--) {
                            if (id("com.jd.lib.evaluatecenter:id/abm").className("android.widget.TextView").clickable(true).text("评价").findOnce() != null) {
                                id("com.jd.lib.evaluatecenter:id/abm").className("android.widget.TextView").clickable(true).text("评价").findOnce().click();
                                toastLog("已尝试点击第" + i + "个评价按钮");
                                sleep(3000);
                                if (id("com.jd.lib.evaluatecenter:id/akh").text("匿名评价").findOnce() != null && id("com.jd.lib.evaluatecenter:id/akh").text("匿名评价").findOnce().checked() == false) {
                                    id("com.jd.lib.evaluatecenter:id/akh").text("匿名评价").findOnce().click();
                                    toastLog("已尝试点击“匿名评价”按钮");
                                    sleep(3000);
                                }
                                if (id("com.jingdong.app.mall:id/a9b").className("android.widget.TextView").text("提交").clickable(true).findOnce() != null) {
                                    id("com.jingdong.app.mall:id/a9b").className("android.widget.TextView").text("提交").clickable(true).findOnce().click();
                                    toastLog("已尝试点击“提交评价”按钮");
                                    sleep(3000);
                                    for (let a = 2; a > 0; a--) {
                                        if (desc("返回").clickable(true).findOnce() != null) {
                                            desc("返回").clickable(true).findOnce().click();
                                            toastLog("已尝试盲点“返回按钮”");
                                            sleep(2000);
                                        } else {
                                            Justback();
                                            sleep(1000);
                                        }
                                    }
                                }
                            } else {
                                toastLog("当前已无任何可评价商品");
                                if (desc("返回").clickable(true).findOnce() != null) {
                                    desc("返回").clickable(true).findOnce().click();
                                    toastLog("已尝试盲点“返回按钮”");
                                    sleep(2000);
                                } else {
                                    Justback();
                                    sleep(1000);
                                }
                            }
                        }
                        var DoNotDoPJRW = 1;
                        toastLog("评价商品任务已完成");
                        var JustWait = 0;
                    } else {
                        toastLog("正在等待任务界面加载，剩余" + JustWait + "秒……");
                        sleep(1000);
                    }
                }
                if (RwTitle == "逛逛会场") {
                    var DoNotDoGGHC = 1;
                }
                if (MakeSureInHD() == false) {
                    toastLog("尝试返回“任务列表”界面");
                    if (className("android.widget.ImageView").desc("返回").clickable(true).findOnce() != null) {
                        className("android.widget.ImageView").desc("返回").clickable(true).findOnce().click();
                    } else {
                        Justback();
                    }
                    sleep(3000);
                }
            } else {
                if (now == xz) {
                    toastLog("【任务已完成】" + RwTitle + "(" + ZhuangTai + ")");
                } else {
                    toastLog("【已跳过】" + RwTitle + "(" + ZhuangTai + ")");
                }
                ax++;
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
};