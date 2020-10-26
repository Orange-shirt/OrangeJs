context_thisScriptName = "微博任务自动脚本";
context_thisScriptVersion = "（Beta1.19）";

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
                                    <text text="要进行“手动运行”，您需要选择一个时间另脚本进入等待状态，并在脚本等待期间自行打开微博APP至活动页，脚本等待时间结束后则会开始运行" textSize="15sp" textStyle="bold" textColor="{{context_textColor}}" gravity="left" margin="0 5"/>
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
                    toastLog("请打开微博至微博任务的主界面\n剩余" + deng + "秒后运行脚本...");
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
                    toastLog("请打开微博至微博任务的主界面\n剩余" + deng + "秒后运行脚本...");
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
                    toastLog("请打开微博至微博任务的主界面\n剩余" + deng + "秒后运行脚本...");
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
                    toastLog("请打开微博至微博任务的主界面\n剩余" + deng + "秒后运行脚本...");
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
            if (files.read("/storage/emulated/0/OrangeJs/微博任务自动脚本/Root返回开关.txt") == "true") {
                view.UseRootBackText.setText("已开启");
                view.UseRootBackText.setTextColor(colors.parseColor("#FF1E56"));
                RootBack = true;
            } else if (files.read("/storage/emulated/0/OrangeJs/微博任务自动脚本/Root返回开关.txt") == "false") {
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
                files.write("/storage/emulated/0/OrangeJs/微博任务自动脚本/Root返回开关.txt", "false");
            } else {
                files.write("/storage/emulated/0/OrangeJs/微博任务自动脚本/Root返回开关.txt", "true");
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
            if (files.exists("/storage/emulated/0/OrangeJs/微博任务自动脚本/吐司or日志.txt") == true) {
                if (files.read("/storage/emulated/0/OrangeJs/微博任务自动脚本/吐司or日志.txt") == "日志") {
                    answer.WhatNow.setText("当前脚本使用：悬浮日志");
                } else if (files.read("/storage/emulated/0/OrangeJs/微博任务自动脚本/吐司or日志.txt") == "吐司") {
                    answer.WhatNow.setText("当前脚本使用：吐司（Toast）");
                }
            }
            answer.UseToast.click(() => {
                files.createWithDirs("/storage/emulated/0/OrangeJs/微博任务自动脚本/吐司or日志.txt");
                if (files.exists("/storage/emulated/0/OrangeJs/微博任务自动脚本/吐司or日志.txt") == true) {
                    try {
                        files.read("/storage/emulated/0/OrangeJs/微博任务自动脚本/吐司or日志.txt");
                        files.write("/storage/emulated/0/OrangeJs/微博任务自动脚本/吐司or日志.txt", "吐司");
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
                files.createWithDirs("/storage/emulated/0/OrangeJs/微博任务自动脚本/吐司or日志.txt");
                if (files.exists("/storage/emulated/0/OrangeJs/微博任务自动脚本/吐司or日志.txt") == true) {
                    try {
                        files.read("/storage/emulated/0/OrangeJs/微博任务自动脚本/吐司or日志.txt");
                        files.write("/storage/emulated/0/OrangeJs/微博任务自动脚本/吐司or日志.txt", "日志");
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
if (files.exists("/storage/emulated/0/OrangeJs/微博任务自动脚本/吐司or日志.txt") == true && files.read("/storage/emulated/0/OrangeJs/微博任务自动脚本/吐司or日志.txt") == "吐司") {
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
    if (files.exists("/storage/emulated/0/OrangeJs/微博任务自动脚本/Root返回开关.txt") == true) {
        if (files.read("/storage/emulated/0/OrangeJs/微博任务自动脚本/Root返回开关.txt") == "true") {
            RootBack = true;
        } else if (files.read("/storage/emulated/0/OrangeJs/微博任务自动脚本/Root返回开关.txt") == "false") {
            RootBack = false;
        } else {
            toastLog("脚本配置文件错误，已尝试删除错误配置文件：(/storage/emulated/0/OrangeJs/微博任务自动脚本/Root返回开关.txt)" + files.remove("/storage/emulated/0/OrangeJs/微博任务自动脚本/Root返回开关.txt"));
            files.createWithDirs("/storage/emulated/0/OrangeJs/微博任务自动脚本/Root返回开关.txt");
            files.write("/storage/emulated/0/OrangeJs/微博任务自动脚本/Root返回开关.txt", "false");
            RootBack = false;
        }
    } else {
        files.createWithDirs("/storage/emulated/0/OrangeJs/微博任务自动脚本/Root返回开关.txt");
        files.write("/storage/emulated/0/OrangeJs/微博任务自动脚本/Root返回开关.txt", "false");
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
                <text text="微博任务自动脚本：已为您停止运行" textSize="15" textStyle="bold" textColor="{{context_textColor}}" gravity="center" margin="5"/>
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

function WhatIsThis() {
    try {
        if (className("android.webkit.WebView").desc("用户任务中心").findOnce() != null) {
            let A = className("android.webkit.WebView").desc("用户任务中心").findOnce();
            for (let i = 0; i < A.childCount(); i++) {
                if (A.child(i).desc() != null && A.child(i).desc() == "新手任务") {
                    return A.child(i).desc();
                    break;
                } else if (A.child(i).desc() != null && A.child(i).desc() == "日常任务") {
                    return A.child(i).desc();
                    break;
                }
            }
        }
    } catch (e) {
        log(e);
    }
}
var PlWhile = null;
function openInTask() {
    while (true) {
        if (WhatIsThis() == "新手任务") {
            dialogs.alert("暂不支持自动完成“新手任务”", "很抱歉，由于开发者未对“新手任务”进行适配，脚本暂时无法完成“新手任务”，感谢您的使用！")
            exit();
        } else if (className("android.widget.TextView").text("用户任务中心").findOnce() != null && className("android.widget.TextView").text("日常任务").findOnce() != null ||
            className("android.webkit.WebView").desc("用户任务中心").findOnce() != null &&
            className("android.webkit.WebView").desc("用户任务中心").findOnce().childCount() > 1 &&
            className("android.webkit.WebView").desc("用户任务中心").findOnce().child(1).childCount() > 0 &&
            className("android.webkit.WebView").desc("用户任务中心").findOnce().child(1).child(0).childCount() > 3 &&
            className("android.webkit.WebView").desc("用户任务中心").findOnce().child(1).child(0).child(3).childCount() > 5 &&
            className("android.webkit.WebView").desc("用户任务中心").findOnce().child(1).child(0).child(3).child(0).desc() != null &&
            className("android.webkit.WebView").desc("用户任务中心").findOnce().child(1).child(0).child(3).child(0).desc() == "日常任务" ||
            className("android.webkit.WebView").text("用户任务中心").findOnce() != null &&
            className("android.webkit.WebView").text("用户任务中心").findOnce().child(0).childCount() > 1 &&
            className("android.webkit.WebView").text("用户任务中心").findOnce().child(0).child(1).childCount() > 0 &&
            className("android.webkit.WebView").text("用户任务中心").findOnce().child(0).child(1).child(0).childCount() > 3 &&
            className("android.webkit.WebView").text("用户任务中心").findOnce().child(0).child(1).child(0).child(3).childCount() > 0 &&
            className("android.webkit.WebView").text("用户任务中心").findOnce().child(0).child(1).child(0).child(3).child(0).childCount() > 1 &&
            className("android.webkit.WebView").text("用户任务中心").findOnce().child(0).child(1).child(0).child(3).child(0).child(1).text() == "日常任务" ||
            className("android.webkit.WebView").text("用户任务中心").findOnce() != null &&
            className("android.webkit.WebView").text("用户任务中心").findOnce().childCount() > 1 &&
            className("android.webkit.WebView").text("用户任务中心").findOnce().child(1).childCount() > 0 &&
            className("android.webkit.WebView").text("用户任务中心").findOnce().child(1).child(0).childCount() > 2 &&
            className("android.webkit.WebView").text("用户任务中心").findOnce().child(1).child(0).child(2).childCount() > 1 &&
            className("android.webkit.WebView").text("用户任务中心").findOnce().child(1).child(0).child(2).child(1).childCount() > 5 &&
            className("android.webkit.WebView").text("用户任务中心").findOnce().child(1).child(0).child(2).child(1).child(0).childCount() > 1 &&
            className("android.webkit.WebView").text("用户任务中心").findOnce().child(1).child(0).child(2).child(1).child(0).child(1).desc() != null &&
            className("android.webkit.WebView").text("用户任务中心").findOnce().child(1).child(0).child(2).child(1).child(0).child(1).desc() == "日常任务" ||
            className("android.webkit.WebView").text("用户任务中心").findOnce() != null &&
            className("android.webkit.WebView").text("用户任务中心").findOnce().childCount() > 1 &&
            className("android.webkit.WebView").text("用户任务中心").findOnce().child(1).childCount() > 0 &&
            className("android.webkit.WebView").text("用户任务中心").findOnce().child(1).child(0).childCount() > 2 &&
            className("android.webkit.WebView").text("用户任务中心").findOnce().child(1).child(0).child(2).childCount() > 1 &&
            className("android.webkit.WebView").text("用户任务中心").findOnce().child(1).child(0).child(2).child(1).childCount() > 5 &&
            className("android.webkit.WebView").text("用户任务中心").findOnce().child(1).child(0).child(2).child(1).child(0).childCount() > 1 &&
            className("android.webkit.WebView").text("用户任务中心").findOnce().child(1).child(0).child(2).child(1).child(0).child(1).text() == "日常任务" ||
            className("android.webkit.WebView").desc("用户任务中心").findOnce() != null &&
            className("android.webkit.WebView").desc("用户任务中心").findOnce().childCount() > 1 &&
            className("android.webkit.WebView").desc("用户任务中心").findOnce().child(1).childCount() > 0 &&
            className("android.webkit.WebView").desc("用户任务中心").findOnce().child(1).child(0).childCount() > 2 &&
            className("android.webkit.WebView").desc("用户任务中心").findOnce().child(1).child(0).child(2).childCount() > 1 &&
            className("android.webkit.WebView").desc("用户任务中心").findOnce().child(1).child(0).child(2).child(1).childCount() > 5 &&
            className("android.webkit.WebView").desc("用户任务中心").findOnce().child(1).child(0).child(2).child(1).child(0).childCount() > 1 &&
            className("android.webkit.WebView").desc("用户任务中心").findOnce().child(1).child(0).child(2).child(1).child(0).child(1).text() == "日常任务" ||
            WhatIsThis() == "日常任务") {
            toastLog("已处于“用户任务中心”任务界面");
            break;
        } else if (className("android.widget.FrameLayout").clickable(true).id("com.sina.weibo:id/rlredpacketSave").findOnce() != null) {
            className("android.widget.FrameLayout").clickable(true).id("com.sina.weibo:id/rlredpacketSave").findOnce().click();
            toastLog("已尝试点击主页活动入口按钮");
            sleep(2000);
        } else if (currentActivity() == "com.sina.weibo.MainTabActivity") {
            app.startActivity({
                action: "android.intent.action.VIEW",
                packageName: "com.sina.weibo",
                className: "com.sina.weibo.browser.WeiboBrowser",
                data: app.parseUri("https://m.weibo.cn/feature/applink?scheme=sinaweibo%3A%2F%2Fbrowser%3Furl%3Dhttps%253A%252F%252Fm.weibo.cn%252Fc%252Fcheckin%253Ffeaturecode%253Dfrom_sharingpage_to_mtask%26featurecode%3Dfrom_sharingpage_to_mtask&yingyongbao=0&golight=0&goxianzhi=0&url=https%3A%2F%2Fc.weibo.cn%3Fscheme%3Dsinaweibo%253A%252F%252Fbrowser%253Furl%253Dhttps%25253A%25252F%25252Fm.weibo.cn%25252Fc%25252Fcheckin%25253Ffeaturecode%25253Dfrom_sharingpage_to_mtask%2526featurecode%253Dfrom_sharingpage_to_mtask%26directdownload%3D0"),
                flags: ["grant_read_uri_permission", "grant_write_uri_permission"],
            });
            toastLog("处于主页，已尝试使用Intent调起活动界面");
            sleep(2000);
        } else if (currentActivity() == "com.sina.weibo.browser.WeiboBrowser") {
            sleep(2000);
            for (let a = 10; a > 0; a--) {
                if (className("android.widget.TextView").text("用户任务中心").findOnce() != null && className("android.widget.TextView").text("日常任务").findOnce() != null ||
                    className("android.webkit.WebView").desc("用户任务中心").findOnce() != null &&
                    className("android.webkit.WebView").desc("用户任务中心").findOnce().childCount() > 1 &&
                    className("android.webkit.WebView").desc("用户任务中心").findOnce().child(1).childCount() > 0 &&
                    className("android.webkit.WebView").desc("用户任务中心").findOnce().child(1).child(0).childCount() > 3 &&
                    className("android.webkit.WebView").desc("用户任务中心").findOnce().child(1).child(0).child(3).childCount() > 5 &&
                    className("android.webkit.WebView").desc("用户任务中心").findOnce().child(1).child(0).child(3).child(0).desc() != null &&
                    className("android.webkit.WebView").desc("用户任务中心").findOnce().child(1).child(0).child(3).child(0).desc() == "日常任务" ||
                    className("android.webkit.WebView").text("用户任务中心").findOnce() != null &&
                    className("android.webkit.WebView").text("用户任务中心").findOnce().child(0).childCount() > 1 &&
                    className("android.webkit.WebView").text("用户任务中心").findOnce().child(0).child(1).childCount() > 0 &&
                    className("android.webkit.WebView").text("用户任务中心").findOnce().child(0).child(1).child(0).childCount() > 3 &&
                    className("android.webkit.WebView").text("用户任务中心").findOnce().child(0).child(1).child(0).child(3).childCount() > 0 &&
                    className("android.webkit.WebView").text("用户任务中心").findOnce().child(0).child(1).child(0).child(3).child(0).childCount() > 1 &&
                    className("android.webkit.WebView").text("用户任务中心").findOnce().child(0).child(1).child(0).child(3).child(0).child(1).text() == "日常任务" ||
                    className("android.webkit.WebView").text("用户任务中心").findOnce() != null &&
                    className("android.webkit.WebView").text("用户任务中心").findOnce().childCount() > 1 &&
                    className("android.webkit.WebView").text("用户任务中心").findOnce().child(1).childCount() > 0 &&
                    className("android.webkit.WebView").text("用户任务中心").findOnce().child(1).child(0).childCount() > 2 &&
                    className("android.webkit.WebView").text("用户任务中心").findOnce().child(1).child(0).child(2).childCount() > 1 &&
                    className("android.webkit.WebView").text("用户任务中心").findOnce().child(1).child(0).child(2).child(1).childCount() > 5 &&
                    className("android.webkit.WebView").text("用户任务中心").findOnce().child(1).child(0).child(2).child(1).child(0).childCount() > 1 &&
                    className("android.webkit.WebView").text("用户任务中心").findOnce().child(1).child(0).child(2).child(1).child(0).child(1).desc() != null &&
                    className("android.webkit.WebView").text("用户任务中心").findOnce().child(1).child(0).child(2).child(1).child(0).child(1).desc() == "日常任务" ||
                    className("android.webkit.WebView").text("用户任务中心").findOnce() != null &&
                    className("android.webkit.WebView").text("用户任务中心").findOnce().childCount() > 1 &&
                    className("android.webkit.WebView").text("用户任务中心").findOnce().child(1).childCount() > 0 &&
                    className("android.webkit.WebView").text("用户任务中心").findOnce().child(1).child(0).childCount() > 2 &&
                    className("android.webkit.WebView").text("用户任务中心").findOnce().child(1).child(0).child(2).childCount() > 1 &&
                    className("android.webkit.WebView").text("用户任务中心").findOnce().child(1).child(0).child(2).child(1).childCount() > 5 &&
                    className("android.webkit.WebView").text("用户任务中心").findOnce().child(1).child(0).child(2).child(1).child(0).childCount() > 1 &&
                    className("android.webkit.WebView").text("用户任务中心").findOnce().child(1).child(0).child(2).child(1).child(0).child(1).text() == "日常任务" ||
                    WhatIsThis() == "日常任务") {
                    break;
                } else if (className("android.widget.TextView").text("用户任务中心").findOnce() != null) {
                    toastLog("正在等待“用户任务中心”加载，剩余" + a + "秒……");
                    sleep(2000);
                } else {
                    if (className("android.widget.TextView").text("网页无法打开").findOnce() != null) {
                        toastLog("网页无法打开");
                    }
                    break;
                }
            }
            if (className("android.widget.TextView").text("用户任务中心").findOnce() != null && className("android.widget.TextView").text("日常任务").findOnce() != null ||
                className("android.webkit.WebView").desc("用户任务中心").findOnce() != null &&
                className("android.webkit.WebView").desc("用户任务中心").findOnce().childCount() > 1 &&
                className("android.webkit.WebView").desc("用户任务中心").findOnce().child(1).childCount() > 0 &&
                className("android.webkit.WebView").desc("用户任务中心").findOnce().child(1).child(0).childCount() > 3 &&
                className("android.webkit.WebView").desc("用户任务中心").findOnce().child(1).child(0).child(3).childCount() > 5 &&
                className("android.webkit.WebView").desc("用户任务中心").findOnce().child(1).child(0).child(3).child(0).desc() != null &&
                className("android.webkit.WebView").desc("用户任务中心").findOnce().child(1).child(0).child(3).child(0).desc() == "日常任务" ||
                WhatIsThis() == "日常任务") {
                toastLog("已处于“用户任务中心”任务界面");
                break;
            } else {
                if (id("com.sina.weibo:id/titleLeft").className("android.widget.TextView").clickable(true).findOnce() != null) {
                    id("com.sina.weibo:id/titleLeft").className("android.widget.TextView").clickable(true).findOnce().click();
                    toastLog("“用户任务中心”加载超时，已尝试盲点关闭按钮，重试中……");
                    sleep(2000);
                } else {
                    toastLog("“用户任务中心”加载超时，重试中……");
                    Justback();
                    sleep(1000);
                }
            }
        } else if (currentPackage() != "com.sina.weibo") {
            app.startActivity({
                action: "android.intent.action.MAIN",
                packageName: "com.sina.weibo",
                className: "com.sina.weibo.SplashActivity",
                category: ["android.intent.category.LAUNCHER"],
                flags: ["activity_new_task"]
            });
            var deng = 5;
            for (deng == 5; deng > 0; deng--) {
                if (id("titleSave").findOnce() == null) {
                    toastLog("正在等待微博APP启动至主页，当前剩余" + deng + "秒……");
                    sleep(2000);
                    if (className("android.view.View").desc("首页").findOnce() != null) {
                        className("android.view.View").desc("首页").findOnce().click();
                        toastLog("已尝试点击“首页”按钮");
                    }
                } else {
                    toastLog("已到达主页");
                    var deng = 0;
                }
            }
        } else {
            if (className("android.widget.ImageView").clickable(true).desc("返回").findOnce() != null) {
                className("android.widget.ImageView").clickable(true).desc("返回").findOnce().click();
                toastLog("已尝试盲点“返回按钮”");
                sleep(2000);
            } else if (id("com.sina.weibo:id/rltitleBack").findOnce() != null) {
                id("com.sina.weibo:id/rltitleBack").findOnce().click();
                toastLog("已尝试盲点ID“返回按钮”");
                sleep(2000);
            } else if (className("android.widget.TextView").desc("返回").findOnce() != null && className("android.widget.TextView").desc("返回").findOnce().parent().parent().clickable() == true) {
                className("android.widget.TextView").desc("返回").findOnce().parent().parent().click();
                toastLog("已尝试盲点父级“返回按钮”");
                sleep(2000);
            } else if (id("com.sina.weibo:id/titleLeft").className("android.widget.TextView").clickable(true).findOnce() != null) {
                id("com.sina.weibo:id/titleLeft").className("android.widget.TextView").clickable(true).findOnce().click();
                toastLog("已尝试盲点左关闭按钮，重试中……");
                sleep(2000);
            } else {
                Justback();
                sleep(1000);
            }
        }
    }
}

function DoTask() {
    var FindKJ = {
        lingQu: function() {
            try {
                if (className("android.webkit.WebView").desc("用户任务中心").findOnce() != null) {
                    let A = className("android.webkit.WebView").desc("用户任务中心").findOnce();
                    for (let i = 0; i < A.childCount(); i++) {
                        if (A.child(i).desc() != null && A.child(i).desc().search("领取") >= 0 && A.child(i).desc().search("积分") >= 0 ||
                            A.child(i).desc() != null && A.child(i).desc().search("领") >= 0 && A.child(i).search("元") >= 0) {
                            A.child(i).click();
                            toastLog("已尝试盲点“" + A.child(i).desc() + "”按钮");
                            return true;
                            break;
                        }
                    }
                }
            } catch (e) {
                log(e);
            }
        },
        Guanzhu: function() {
            try {
                if (className("android.webkit.WebView").desc("用户任务中心").findOnce() != null) {
                    let A = className("android.webkit.WebView").desc("用户任务中心").findOnce();
                    for (let i = 0; i < A.childCount(); i++) {
                        if (A.child(i).desc() != null && A.child(i).desc() == "关注") {
                            A.child(i).click();
                            return A.child(i).desc();
                            break;
                        }
                    }
                }
            } catch (e) {
                log(e);
            }
        },
        Zhuanfa: function() {
            try {
                if (className("android.webkit.WebView").desc("用户任务中心").findOnce() != null) {
                    let A = className("android.webkit.WebView").desc("用户任务中心").findOnce();
                    for (let i = 0; i < A.childCount(); i++) {
                        if (A.child(i).desc() != null && A.child(i).desc() == "转发") {
                            A.child(i).click();
                            return A.child(i).desc();
                            break;
                        }
                    }
                }
            } catch (e) {
                log(e);
            }
        },
        Pinglun: function() {
            try {
                if (className("android.webkit.WebView").desc("用户任务中心").findOnce() != null) {
                    let A = className("android.webkit.WebView").desc("用户任务中心").findOnce();
                    for (let i = 0; i < A.childCount(); i++) {
                        if (A.child(i).desc() != null && A.child(i).desc() == "评论") {
                            A.child(i).click();
                            return A.child(i).desc();
                            break;
                        }
                    }
                }
            } catch (e) {
                log(e);
            }
        },
        Faweibo: function() {
            try {
                if (className("android.webkit.WebView").desc("用户任务中心").findOnce() != null) {
                    let A = className("android.webkit.WebView").desc("用户任务中心").findOnce();
                    for (let i = 0; i < A.childCount(); i++) {
                        if (A.child(i).desc() != null && A.child(i).desc() == "发微博") {
                            A.child(i).click();
                            return A.child(i).desc();
                            break;
                        }
                    }
                }
            } catch (e) {
                log(e);
            }
        },
        Dianzan: function() {
            try {
                if (className("android.webkit.WebView").desc("用户任务中心").findOnce() != null) {
                    let A = className("android.webkit.WebView").desc("用户任务中心").findOnce();
                    for (let i = 0; i < A.childCount(); i++) {
                        if (A.child(i).desc() != null && A.child(i).desc() == "点赞") {
                            A.child(i).click();
                            return A.child(i).desc();
                            break;
                        }
                    }
                }
            } catch (e) {
                log(e);
            }
        }
    }

    function Guanzhu() {
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
                } else if (className("android.view.ViewGroup").clickable(true).findOne(8000) != null) {
                    className("android.view.ViewGroup").clickable(true).findOne(8000).child(2).click()
                    sleep(2000);
                    toastLog("已尝试点击“关注”按钮");
                    if (className("android.view.ViewGroup").clickable(true).findOne(8000).child(2).child(0).text() == "已关注") {
                        var A = className("android.view.ViewGroup").clickable(true).findOne(8000).child(2).child(0).bounds();
                        click(A.centerX(), A.centerY());
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
            } else {
                var CW = id("titleText").findOnce().text();
                toastLog("处于错误的界面:" + CW + "，即将重新进入活动…");
                sleep(2000);
            }
        } else {
            toastLog("未找到微博顶栏标题，即将重新进入活动…");
            sleep(2000);
        }
    }
    var ZhuanfaT = 1;

    function Zhuanfa() {
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
                                setText("转发微博（Waiting For Delete &" + ZhuanfaT + ")");
                                sleep(1000);
                                var Fs = id("com.sina.weibo:id/titleSave").findOne().bounds();
                                click(Fs.centerX(), Fs.centerY());
                                toastLog("已尝试点击“发送”按钮");
                                sleep(2000);
                                ZhuanfaT++;
                            }
                        }
                    }
                }
            } else {
                var CW = id("titleText").findOnce().text();
                toastLog("处于错误的界面:" + CW + "，即将重新进入活动…");
                sleep(2000);
            }
        } else {
            toastLog("未找到微博顶栏标题，即将重新进入活动…");
            sleep(2000);
        }
    }

    function Pinglun() {
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
                        if (text("由于对方的设置，你需要先关注他，才能评论。").findOnce() != null) {
                            if (className("android.widget.TextView").text("加关注").findOnce() != null) {
                                className("android.widget.TextView").text("加关注").findOnce().click();
                                toastLog("已尝试加关注此账号");
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
                                                if (id("detail_activity_header_avatar").findOnce() != null) {
                                                    id("detail_activity_header_avatar").findOnce().parent().click();
                                                    toastLog("已尝试点击顶栏账号标题");
                                                    sleep(2000);
                                                    if (className("android.widget.TextView").text("已关注").findOnce() != null) {
                                                        var Aqg = className("android.widget.TextView").text("已关注").findOnce().bounds();
                                                        click(Aqg.centerX(), Aqg.centerY());
                                                        toastLog("已尝试点击“已关注菜单”按钮");
                                                        sleep(3000);
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
                                    }
                                }
                            }

                        } else if (id("com.sina.weibo:id/element_editbox").findOnce() != null||
                        id("com.sina.weibo:id/edit_view").findOnce()!=null&&
                        id("com.sina.weibo:id/edit_view").findOnce().setText("CommentTest")==true) {
                            toastLog("已找到“评论框”");
                            setText("CommentTest");
                            sleep(1000);
                            id("com.sina.weibo:id/tv_send").findOnce().click();
                            toastLog("已尝试点击“发送评论”按钮");
                            sleep(2000);
                            if (text("由于对方的设置，你需要先关注他，才能评论。").findOnce() != null) {
                                if (className("android.widget.TextView").text("加关注").findOnce() != null) {
                                    className("android.widget.TextView").text("加关注").findOnce().click();
                                    toastLog("已尝试加关注此账号");
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
                                                if (id("detail_activity_header_avatar").findOnce() != null) {
                                                    id("detail_activity_header_avatar").findOnce().parent().click();
                                                    toastLog("已尝试点击顶栏账号标题");
                                                    sleep(2000);
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
                                    }
                                }
                            } else if (id("com.sina.weibo:id/tvItemCmtContent").text("CommentTest").findOnce() != null) {
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
                                        toastLog("已成功完成一次评论任务，正在尝试返回活动界面");
                                    }
                                }
                            } else {
                                toastLog("未找到发送的评论，尝试下拉刷新…");
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
                                            toastLog("已成功完成一次评论任务，正在尝试返回活动界面");
                                        }
                                    }
                                }
                            }
                        } else {
                            PlWhile++;
                        }
                    }
                }
            } else {
                var CW = id("titleText").findOnce().text();
                toastLog("处于错误的界面:" + CW + "，即将重新进入活动…");
                sleep(2000);
            }
        } else {
            toastLog("未找到微博顶栏标题，即将重新进入活动…");
            sleep(2000);
        }
    }

    function Faweibo() {
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
                toastLog("处于错误的界面:" + CW + "，即将重新进入活动…");
                sleep(2000);
            }
        } else {
            toastLog("未找到微博顶栏标题，即将重新进入活动…");
            sleep(2000);
        }
    }

    function Dianzan() {
        sleep(1000);
        while (text("加载中").findOnce() != null) {
            toastLog("正在等待“点赞界面”加载……");
            sleep(2000);
        }
        if (id("titleText").findOnce() != null) {
            if (id("titleText").findOnce().text() == "热门微博") {
                toastLog("已处于“点赞”页面");
                sleep(2000);
                if (id("com.sina.weibo:id/rightButton").findOnce() != null) {
                    id("com.sina.weibo:id/rightButton").findOnce().click();
                    toastLog("已尝试点击“点赞按钮”");
                    sleep(2000);
                }
            } else {
                var CW = id("titleText").findOnce().text();
                toastLog("处于错误的界面:" + CW + "，即将重新进入活动…");
                sleep(2000);
            }
        } else {
            toastLog("未找到微博顶栏标题，即将重新进入活动…");
            sleep(2000);
        }
    }
    var i = 0;
    var twice = null;
    while (true) {
        if (className("android.webkit.WebView").desc("用户任务中心").findOnce() != null &&
            className("android.webkit.WebView").desc("用户任务中心").findOnce().childCount() > 1 &&
            className("android.webkit.WebView").desc("用户任务中心").findOnce().child(1).childCount() > 0 &&
            className("android.webkit.WebView").desc("用户任务中心").findOnce().child(1).child(0).childCount() > 3 &&
            className("android.webkit.WebView").desc("用户任务中心").findOnce().child(1).child(0).child(3).childCount() > 5 &&
            className("android.webkit.WebView").desc("用户任务中心").findOnce().child(1).child(0).child(3).child(0).desc() != null &&
            className("android.webkit.WebView").desc("用户任务中心").findOnce().child(1).child(0).child(3).child(0).desc() == "日常任务") {
            var A = className("android.webkit.WebView").desc("用户任务中心").findOnce().child(1).child(0).child(3);
            var Rwmodel = "顺序";
        } else if (className("android.webkit.WebView").text("用户任务中心").findOnce() != null &&
            className("android.webkit.WebView").text("用户任务中心").findOnce().childCount() > 1 &&
            className("android.webkit.WebView").text("用户任务中心").findOnce().child(1).childCount() > 0 &&
            className("android.webkit.WebView").text("用户任务中心").findOnce().child(1).child(0).childCount() > 2 &&
            className("android.webkit.WebView").text("用户任务中心").findOnce().child(1).child(0).child(2).childCount() > 1 &&
            className("android.webkit.WebView").text("用户任务中心").findOnce().child(1).child(0).child(2).child(1).childCount() > 5 &&
            className("android.webkit.WebView").text("用户任务中心").findOnce().child(1).child(0).child(2).child(1).child(0).childCount() > 1 &&
            className("android.webkit.WebView").text("用户任务中心").findOnce().child(1).child(0).child(2).child(1).child(0).child(1).desc() != null &&
            className("android.webkit.WebView").text("用户任务中心").findOnce().child(1).child(0).child(2).child(1).child(0).child(1).desc() == "日常任务" ||
            className("android.webkit.WebView").text("用户任务中心").findOnce() != null &&
            className("android.webkit.WebView").text("用户任务中心").findOnce().childCount() > 1 &&
            className("android.webkit.WebView").text("用户任务中心").findOnce().child(1).childCount() > 0 &&
            className("android.webkit.WebView").text("用户任务中心").findOnce().child(1).child(0).childCount() > 2 &&
            className("android.webkit.WebView").text("用户任务中心").findOnce().child(1).child(0).child(2).childCount() > 1 &&
            className("android.webkit.WebView").text("用户任务中心").findOnce().child(1).child(0).child(2).child(1).childCount() > 5 &&
            className("android.webkit.WebView").text("用户任务中心").findOnce().child(1).child(0).child(2).child(1).child(0).childCount() > 1 &&
            className("android.webkit.WebView").text("用户任务中心").findOnce().child(1).child(0).child(2).child(1).child(0).child(1).text() == "日常任务") {
            var A = className("android.webkit.WebView").text("用户任务中心").findOnce().child(1).child(0).child(2).child(1);
            var Rwmodel = "顺序";
        } else if (className("android.webkit.WebView").text("用户任务中心").findOnce() != null &&
            className("android.webkit.WebView").text("用户任务中心").findOnce().childCount() > 1 &&
            className("android.webkit.WebView").text("用户任务中心").findOnce().child(1).childCount() > 0 &&
            className("android.webkit.WebView").text("用户任务中心").findOnce().child(1).child(0).childCount() > 2 &&
            className("android.webkit.WebView").text("用户任务中心").findOnce().child(1).child(0).child(2).childCount() > 2 &&
            className("android.webkit.WebView").text("用户任务中心").findOnce().child(1).child(0).child(2).child(2).childCount() > 0 &&
            className("android.webkit.WebView").text("用户任务中心").findOnce().child(1).child(0).child(2).child(2).child(0).childCount() > 1 &&
            className("android.webkit.WebView").text("用户任务中心").findOnce().child(1).child(0).child(2).child(2).child(0).child(1).desc() != null &&
            className("android.webkit.WebView").text("用户任务中心").findOnce().child(1).child(0).child(2).child(2).child(0).child(1).desc() == "日常任务" ||
            className("android.webkit.WebView").text("用户任务中心").findOnce() != null &&
            className("android.webkit.WebView").text("用户任务中心").findOnce().childCount() > 1 &&
            className("android.webkit.WebView").text("用户任务中心").findOnce().child(1).childCount() > 0 &&
            className("android.webkit.WebView").text("用户任务中心").findOnce().child(1).child(0).childCount() > 2 &&
            className("android.webkit.WebView").text("用户任务中心").findOnce().child(1).child(0).child(2).childCount() > 2 &&
            className("android.webkit.WebView").text("用户任务中心").findOnce().child(1).child(0).child(2).child(2).childCount() > 0 &&
            className("android.webkit.WebView").text("用户任务中心").findOnce().child(1).child(0).child(2).child(2).child(0).childCount() > 1 &&
            className("android.webkit.WebView").text("用户任务中心").findOnce().child(1).child(0).child(2).child(2).child(0).child(1).text() == "日常任务") {
            var A = className("android.webkit.WebView").text("用户任务中心").findOnce().child(1).child(0).child(2).child(2);
            var Rwmodel = "顺序";
        } else if (className("android.webkit.WebView").text("用户任务中心").findOnce() != null &&
            className("android.webkit.WebView").text("用户任务中心").findOnce().child(0).childCount() > 1 &&
            className("android.webkit.WebView").text("用户任务中心").findOnce().child(0).child(1).childCount() > 0 &&
            className("android.webkit.WebView").text("用户任务中心").findOnce().child(0).child(1).child(0).childCount() > 3 &&
            className("android.webkit.WebView").text("用户任务中心").findOnce().child(0).child(1).child(0).child(3).childCount() > 0 &&
            className("android.webkit.WebView").text("用户任务中心").findOnce().child(0).child(1).child(0).child(3).child(0).childCount() > 1 &&
            className("android.webkit.WebView").text("用户任务中心").findOnce().child(0).child(1).child(0).child(3).child(0).child(1).text() == "日常任务") {
            var A = className("android.webkit.WebView").text("用户任务中心").findOnce().child(0).child(1).child(0).child(3);
            var Rwmodel = "顺序";
        } else if (WhatIsThis() == "日常任务") {
            toastLog("以遍历“日常任务”模式运行");
            var Rwmodel = "遍历日常任务";
        } else {
            console.warn("当前活动：" + currentActivity() + "，当前包名：" + currentPackage() + "当前应用名：" + getAppName(currentPackage()));
            toastLog("当前未处于“任务中心”界面，正在重新尝试打开ddd");
            openInTask();
            DoTask();
            break;
        }
        if (Rwmodel == "顺序" && i >= A.childCount() && twice == true) {
            break;
        } else if (Rwmodel == "顺序" && i >= A.childCount()) {
            var i = 0;
            var twice = true;
            toastLog("首次遍历已完成，正在进行二次任务遍历");
            sleep(2000);
        } else if (Rwmodel == "顺序" && A.childCount() > i &&
            A.child(i).childCount() > 3 &&
            A.child(i).child(3).desc() != null &&
            A.child(i).child(3).desc().search("领取") >= 0 &&
            A.child(i).child(3).desc().search("积分") >= 0 ||
            A.childCount() > i &&
            A.child(i).childCount() > 3 &&
            A.child(i).child(3).desc() != null &&
            A.child(i).child(3).desc().search("领") >= 0 &&
            A.child(i).child(3).desc().search("元") >= 0) {
            A.child(i).child(3).click();
            toastLog("已尝试盲点“" + A.child(i).child(3).desc() + "”按钮");
            sleep(3000);
        } else if (Rwmodel == "顺序" && A.childCount() > i &&
            A.child(i).childCount() > 3 &&
            A.child(i).child(3).text() != null &&
            A.child(i).child(3).text().search("领取") >= 0 &&
            A.child(i).child(3).text().search("积分") >= 0 ||
            A.childCount() > i &&
            A.child(i).childCount() > 3 &&
            A.child(i).child(3).text() != null &&
            A.child(i).child(3).text().search("领") >= 0 &&
            A.child(i).child(3).text().search("元") >= 0) {
            A.child(i).child(3).click();
            toastLog("已尝试盲点“" + A.child(i).child(3).text() + "”按钮");
            sleep(3000);
        } else if (Rwmodel == "顺序" && A.childCount() > i &&
            A.child(i).childCount() > 2 &&
            A.child(i).child(2).desc() != null &&
            A.child(i).child(2).desc().search("领取") >= 0 &&
            A.child(i).child(2).desc().search("积分") >= 0 ||
            A.childCount() > i &&
            A.child(i).childCount() > 2 &&
            A.child(i).child(2).desc() != null &&
            A.child(i).child(2).desc().search("领") >= 0 &&
            A.child(i).child(2).desc().search("元") >= 0) {
            A.child(i).child(2).click();
            toastLog("已尝试盲点“" + A.child(i).child(2).desc() + "”按钮");
            sleep(3000);
        } else if (Rwmodel == "顺序" && A.childCount() > i &&
            A.child(i).childCount() > 1 &&
            A.child(i).child(1).desc() != null &&
            A.child(i).child(1).desc().search("领取") >= 0 &&
            A.child(i).child(1).desc().search("积分") >= 0 ||
            A.childCount() > i &&
            A.child(i).childCount() > 1 &&
            A.child(i).child(1).desc() != null &&
            A.child(i).child(1).desc().search("领") >= 0 &&
            A.child(i).child(1).desc().search("元") >= 0) {
            A.child(i).child(1).click();
            toastLog("已尝试盲点“" + A.child(i).child(1).text() + "”按钮");
            sleep(3000);
        } else if (FindKJ.lingQu() != null) {
            sleep(3000);
        } else if (Rwmodel == "顺序" && A.childCount() > i &&
            A.child(i).childCount() > 3 &&
            A.child(i).child(3).text() != null &&
            A.child(i).child(3).text() == "关注" ||
            Rwmodel == "顺序" && A.childCount() > i &&
            A.child(i).childCount() > 3 &&
            A.child(i).child(3).desc() != null &&
            A.child(i).child(3).desc() == "关注") {
            A.child(i).child(3).click();
            Guanzhu();
        } else if (Rwmodel == "顺序" && A.childCount() > i &&
            A.child(i).childCount() > 2 &&
            A.child(i).child(2).desc() != null &&
            A.child(i).child(2).desc() == "关注") {
            A.child(i).child(2).click();
            Guanzhu();
        } else if (Rwmodel == "顺序" && A.childCount() > i &&
            A.child(i).childCount() > 1 &&
            A.child(i).child(1).text() != null &&
            A.child(i).child(1).text() == "关注") {
            A.child(i).child(1).click();
            Guanzhu();
        } else if (FindKJ.Guanzhu() == "关注") {
            Guanzhu();
        } else if (Rwmodel == "顺序" && A.childCount() > i &&
            A.child(i).childCount() > 3 &&
            A.child(i).child(3).desc() != null &&
            A.child(i).child(3).desc() == "转发" ||
            Rwmodel == "顺序" && A.childCount() > i &&
            A.child(i).childCount() > 3 &&
            A.child(i).child(3).text() != null &&
            A.child(i).child(3).text() == "转发") {
            A.child(i).child(3).click();
            Zhuanfa();
        } else if (Rwmodel == "顺序" && A.childCount() > i &&
            A.child(i).childCount() > 2 &&
            A.child(i).child(2).desc() != null &&
            A.child(i).child(2).desc() == "转发") {
            A.child(i).child(2).click();
            Zhuanfa();
        } else if (Rwmodel == "顺序" && A.childCount() > i &&
            A.child(i).childCount() > 1 &&
            A.child(i).child(1).text() != null &&
            A.child(i).child(1).text() == "转发") {
            A.child(i).child(1).click();
            Zhuanfa();
        } else if (FindKJ.Zhuanfa() == "转发") {
            Zhuanfa();
        } else if (Rwmodel == "顺序" && A.childCount() > i &&
            A.child(i).childCount() > 3 &&
            A.child(i).child(3).desc() != null &&
            A.child(i).child(3).desc() == "评论" ||
            Rwmodel == "顺序" && A.childCount() > i &&
            A.child(i).childCount() > 3 &&
            A.child(i).child(3).text() != null &&
            A.child(i).child(3).text() == "评论") {
            A.child(i).child(3).click();
            Pinglun();
        } else if (Rwmodel == "顺序" && A.childCount() > i &&
            A.child(i).childCount() > 2 &&
            A.child(i).child(2).desc() != null &&
            A.child(i).child(2).desc() == "评论") {
            A.child(i).child(2).click();
            Pinglun();
        } else if (Rwmodel == "顺序" && A.childCount() > i &&
            A.child(i).childCount() > 1 &&
            A.child(i).child(1).text() != null &&
            A.child(i).child(1).text() == "评论") {
            A.child(i).child(1).click();
            Pinglun();
        } else if (FindKJ.Pinglun() == "评论") {
            Pinglun();
        } else if (Rwmodel == "顺序" && A.childCount() > i &&
            A.child(i).childCount() > 3 &&
            A.child(i).child(3).desc() != null &&
            A.child(i).child(3).desc() == "发微博" ||
            Rwmodel == "顺序" && A.childCount() > i &&
            A.child(i).childCount() > 3 &&
            A.child(i).child(3).text() != null &&
            A.child(i).child(3).text() == "发微博") {
            A.child(i).child(3).click();
            Faweibo();
        } else if (Rwmodel == "顺序" && A.childCount() > i &&
            A.child(i).childCount() > 2 &&
            A.child(i).child(2).desc() != null &&
            A.child(i).child(2).desc() == "发微博") {
            A.child(i).child(2).click();
            Faweibo();
        } else if (Rwmodel == "顺序" && A.childCount() > i &&
            A.child(i).childCount() > 1 &&
            A.child(i).child(1).text() != null &&
            A.child(i).child(1).text() == "发微博") {
            A.child(i).child(1).click();
            Faweibo();
        } else if (FindKJ.Faweibo() == "发微博") {
            Faweibo();
        } else if (Rwmodel == "顺序" && A.childCount() > i &&
            A.child(i).childCount() > 3 &&
            A.child(i).child(3).desc() != null &&
            A.child(i).child(3).desc() == "点赞" ||
            Rwmodel == "顺序" && A.childCount() > i &&
            A.child(i).childCount() > 3 &&
            A.child(i).child(3).text() != null &&
            A.child(i).child(3).text() == "点赞") {
            A.child(i).child(3).click();
            toastLog("已尝试点击“点赞”任务按钮");
            Dianzan();
        } else if (Rwmodel == "顺序" && A.childCount() > i &&
            A.child(i).childCount() > 2 &&
            A.child(i).child(2).desc() != null &&
            A.child(i).child(2).desc() == "点赞") {
            A.child(i).child(2).click();
            toastLog("已尝试点击“点赞”任务按钮");
            Dianzan();
        } else if (Rwmodel == "顺序" && A.childCount() > i &&
            A.child(i).childCount() > 1 &&
            A.child(i).child(1).text() != null &&
            A.child(i).child(1).text() == "点赞") {
            A.child(i).child(1).click();
            toastLog("已尝试点击“点赞”任务按钮");
            Dianzan();
        } else if (FindKJ.Dianzan() == "点赞") {
            Dianzan();
        } else if (Rwmodel == "顺序") {
            i++;
        }
        openInTask();
    }
    //删除 转发&发送 的任务微博
    while (true) {
        if (className("android.view.ViewGroup").desc("我").findOnce() != null && className("android.widget.ImageView").clickable(true).id("com.sina.weibo:id/story_shoot_auth_exit").findOnce() == null) {
            toastLog("已处于微博主页");
            sleep(2000);
            break;
        } else if (className("android.widget.FrameLayout").desc("我").findOnce() != null && className("android.widget.ImageView").clickable(true).id("com.sina.weibo:id/story_shoot_auth_exit").findOnce() == null) {
            toastLog("已处于微博主页");
            sleep(2000);
            break;
        } else if (className("android.view.ViewGroup").desc("我").findOnce() != null && className("android.widget.ImageView").clickable(true).id("com.sina.weibo:id/story_shoot_auth_exit").findOnce() == null) {
            className("android.widget.ImageView").clickable(true).id("com.sina.weibo:id/story_shoot_auth_exit").findOnce().click();
            toastLog("已尝试点击关闭“微博故事”按钮");
            sleep(2000);
        } else if (currentPackage() != "com.sina.weibo") {
            app.startActivity({
                action: "android.intent.action.MAIN",
                packageName: "com.sina.weibo",
                className: "com.sina.weibo.SplashActivity",
                category: ["android.intent.category.LAUNCHER"],
                flags: ["activity_new_task"]
            });
            toastLog("正在等待微博APP启动至主页……");
            sleep(2000);
        } else {
            if (className("android.widget.ImageView").clickable(true).desc("返回").findOnce() != null) {
                className("android.widget.ImageView").clickable(true).desc("返回").findOnce().click();
                toastLog("已尝试盲点“返回按钮”");
                sleep(2000);
            } else if (className("android.widget.TextView").desc("返回").findOnce() != null && className("android.widget.TextView").desc("返回").findOnce().parent().parent().clickable() == true) {
                className("android.widget.TextView").desc("返回").findOnce().parent().parent().click();
                toastLog("已尝试盲点父级“返回按钮”");
                sleep(2000);
            } else if (id("com.sina.weibo:id/titleLeft").className("android.widget.TextView").clickable(true).findOnce() != null) {
                id("com.sina.weibo:id/titleLeft").className("android.widget.TextView").clickable(true).findOnce().click();
                toastLog("已尝试盲点左关闭按钮，重试中……");
                sleep(2000);
            } else {
                Justback();
                sleep(1000);
            }
        }
    }
    if (className("android.view.ViewGroup").desc("我").findOnce() != null || className("android.widget.FrameLayout").desc("我").findOne() != null) {
        if (className("android.view.ViewGroup").desc("我").findOnce() != null) {
            className("android.view.ViewGroup").desc("我").findOnce().click();
        } else if (className("android.widget.FrameLayout").desc("我").findOne() != null) {
            className("android.widget.FrameLayout").desc("我").findOnce().click();
        }
        toastLog("已尝试点击主页“我”按钮");
        while (true) {
            let j=text("加载中").findOnce();
            if(j!=null){
            toastLog("正在等待“我的微博”加载……");
            sleep(2000);
            }else{
                break;
                }
        }
        sleep(2000);
        if (id("com.sina.weibo:id/cabWeibo").findOnce() != null) {
            id("com.sina.weibo:id/cabWeibo").findOnce().click();
            toastLog("已尝试点击“我的微博”按钮");
            sleep(3000);
            while (true) {
                if (id("com.sina.weibo:id/common_search_root").findOnce() != null||
                id("com.sina.weibo:id/contentTextView").findOnce()!=null||
                id("com.sina.weibo:id/lySearchInput").findOnce() != null) {
                    toastLog("已进入“我的微博”界面");
                    sleep(2000);
                    break;
                }else if (id("com.sina.weibo:id/lable").text("暂无微博").findOnce() != null) {
                    toastLog("已找到“暂无微博”提示");
                    break;
                } else if (desc("暂无微博").findOnce() != null) {
                    toastLog("已找到“暂无微博”提示");
                    break;
                } else {
                    toastLog("正在等待“我的微博”界面加载…");
                    sleep(2000);
                }
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
            }
        }
    }
}