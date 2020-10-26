context_thisScriptName = "全民营业自动脚本";
context_thisScriptVersion = "（Beta1.0）";
Keyword = "全民营业";
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
                    toastLog("请打开京东至全民营业的主界面\n剩余" + deng + "秒后运行脚本...");
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
                    toastLog("请打开京东至全民营业的主界面\n剩余" + deng + "秒后运行脚本...");
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
                    toastLog("请打开京东至全民营业的主界面\n剩余" + deng + "秒后运行脚本...");
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
                    toastLog("请打开京东至全民营业的主界面\n剩余" + deng + "秒后运行脚本...");
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
                        <card id="DeleteSp" h="40" cardCornerRadius="5dp" cardElevation="0dp" gravity="center_vertical" margin="0 5 5 5"cardBackgroundColor="{{context_SettingsCard}}" foreground="?attr/selectableItemBackground" clickable="true">
                            <linear orientation="horizontal" gravity="center||left">
                                <img src="@drawable/ic_delete_black_48dp" w="20" h="20" circle="true" tint="{{context_textColor}}" margin="10 5"/>
                                <linear orientation="vertical" gravity="center">
                                    <text text="删除脚本自动加购的商品" textColor="{{context_textColor}}" textStyle="bold" textSize="12sp"/>
                                </linear>
                            </linear>
                            <linear gravity="center||right" marginRight="10">
                                <text id="DeleteSptext" textStyle="bold" textSize="12sp"/>
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
            if (files.read("/storage/emulated/0/OrangeJs/全民营业自动脚本/脚本盲点开关.txt") == "true") {
                view.AutoClickOnText.setText("已开启");
                view.AutoClickOnText.setTextColor(colors.parseColor("#FF1E56"));
                MangDian = true;
            } else if (files.read("/storage/emulated/0/OrangeJs/全民营业自动脚本/脚本盲点开关.txt") == "false") {
                view.AutoClickOnText.setText("已关闭");
                view.AutoClickOnText.setTextColor(colors.parseColor("#17B978"));
                MangDian = false;
            }
            if (files.read("/storage/emulated/0/OrangeJs/全民营业自动脚本/Root返回开关.txt") == "true") {
                view.UseRootBackText.setText("已开启");
                view.UseRootBackText.setTextColor(colors.parseColor("#FF1E56"));
                RootBack = true;
            } else if (files.read("/storage/emulated/0/OrangeJs/全民营业自动脚本/Root返回开关.txt") == "false") {
                view.UseRootBackText.setText("已关闭");
                view.UseRootBackText.setTextColor(colors.parseColor("#17B978"));
                RootBack = false;
            }
            if (files.read("/storage/emulated/0/OrangeJs/全民营业自动脚本/删除脚本自动加购的商品.txt") == "true") {
                view.DeleteSptext.setText("已开启");
                view.DeleteSptext.setTextColor(colors.parseColor("#FF1E56"));
                deleteShangPin = true;
            } else if (files.read("/storage/emulated/0/OrangeJs/全民营业自动脚本/删除脚本自动加购的商品.txt") == "false") {
                view.DeleteSptext.setText("已关闭");
                view.DeleteSptext.setTextColor(colors.parseColor("#17B978"));
                deleteShangPin = false;
            }
        }
        Setstate();
        let DHK = dialogs.build({
            customView: view,
            wrapInScrollView: false,
            autoDismiss: false,
            cancelable: false
        }).show();
        view.DeleteSp.click(() => {
            if (deleteShangPin == true) {
                files.write("/storage/emulated/0/OrangeJs/全民营业自动脚本/删除脚本自动加购的商品.txt", "false");
            } else {
                files.write("/storage/emulated/0/OrangeJs/全民营业自动脚本/删除脚本自动加购的商品.txt", "true");
            }
            Setstate();
        });
        view.UseRootBack.click(() => {
            if (RootBack == true) {
                files.write("/storage/emulated/0/OrangeJs/全民营业自动脚本/Root返回开关.txt", "false");
            } else {
                files.write("/storage/emulated/0/OrangeJs/全民营业自动脚本/Root返回开关.txt", "true");
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
            if (files.exists("/storage/emulated/0/OrangeJs/全民营业自动脚本/吐司or日志.txt") == true) {
                if (files.read("/storage/emulated/0/OrangeJs/全民营业自动脚本/吐司or日志.txt") == "日志") {
                    answer.WhatNow.setText("当前脚本使用：悬浮日志");
                } else if (files.read("/storage/emulated/0/OrangeJs/全民营业自动脚本/吐司or日志.txt") == "吐司") {
                    answer.WhatNow.setText("当前脚本使用：吐司（Toast）");
                }
            }
            answer.UseToast.click(() => {
                files.createWithDirs("/storage/emulated/0/OrangeJs/全民营业自动脚本/吐司or日志.txt");
                if (files.exists("/storage/emulated/0/OrangeJs/全民营业自动脚本/吐司or日志.txt") == true) {
                    try {
                        files.read("/storage/emulated/0/OrangeJs/全民营业自动脚本/吐司or日志.txt");
                        files.write("/storage/emulated/0/OrangeJs/全民营业自动脚本/吐司or日志.txt", "吐司");
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
                files.createWithDirs("/storage/emulated/0/OrangeJs/全民营业自动脚本/吐司or日志.txt");
                if (files.exists("/storage/emulated/0/OrangeJs/全民营业自动脚本/吐司or日志.txt") == true) {
                    try {
                        files.read("/storage/emulated/0/OrangeJs/全民营业自动脚本/吐司or日志.txt");
                        files.write("/storage/emulated/0/OrangeJs/全民营业自动脚本/吐司or日志.txt", "日志");
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
if (files.exists("/storage/emulated/0/OrangeJs/全民营业自动脚本/吐司or日志.txt") == true && files.read("/storage/emulated/0/OrangeJs/全民营业自动脚本/吐司or日志.txt") == "吐司") {
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
var SameTaskRw=0;
var RwTitle = null;
if (files.listDir("/sdcard/").length == 0) {
    toastLog("未授予“存储权限”，使用默认配置");
    RootBack = false;
} else {
    if (files.exists("/storage/emulated/0/OrangeJs/全民营业自动脚本/Root返回开关.txt") == true) {
        if (files.read("/storage/emulated/0/OrangeJs/全民营业自动脚本/Root返回开关.txt") == "true") {
            RootBack = true;
        } else if (files.read("/storage/emulated/0/OrangeJs/全民营业自动脚本/Root返回开关.txt") == "false") {
            RootBack = false;
        } else {
            toastLog("脚本配置文件错误，已尝试删除错误配置文件：(/storage/emulated/0/OrangeJs/全民营业自动脚本/Root返回开关.txt)" + files.remove("/storage/emulated/0/OrangeJs/全民营业自动脚本/Root返回开关.txt"));
            files.createWithDirs("/storage/emulated/0/OrangeJs/全民营业自动脚本/Root返回开关.txt");
            files.write("/storage/emulated/0/OrangeJs/全民营业自动脚本/Root返回开关.txt", "false");
            RootBack = false;
        }
    } else {
        files.createWithDirs("/storage/emulated/0/OrangeJs/全民营业自动脚本/Root返回开关.txt");
        files.write("/storage/emulated/0/OrangeJs/全民营业自动脚本/Root返回开关.txt", "false");
        RootBack = false;
    }
    if (files.exists("/storage/emulated/0/OrangeJs/全民营业自动脚本/脚本盲点开关.txt") == true) {
        if (files.read("/storage/emulated/0/OrangeJs/全民营业自动脚本/脚本盲点开关.txt") == "true") {
            MangDian = true;
        } else if (files.read("/storage/emulated/0/OrangeJs/全民营业自动脚本/脚本盲点开关.txt") == "false") {
            MangDian = false;
        } else {
            toastLog("脚本配置文件错误，已尝试删除错误配置文件：(/storage/emulated/0/OrangeJs/全民营业自动脚本/脚本盲点开关.txt)" + files.remove("/storage/emulated/0/OrangeJs/全民营业自动脚本/脚本盲点开关.txt"));
            files.createWithDirs("/storage/emulated/0/OrangeJs/全民营业自动脚本/脚本盲点开关.txt");
            files.write("/storage/emulated/0/OrangeJs/全民营业自动脚本/脚本盲点开关.txt", "true");
            MangDian = true;
        }
    } else {
        files.createWithDirs("/storage/emulated/0/OrangeJs/全民营业自动脚本/脚本盲点开关.txt");
        files.write("/storage/emulated/0/OrangeJs/全民营业自动脚本/脚本盲点开关.txt", "true");
        MangDian = true;
    }
    if (files.exists("/storage/emulated/0/OrangeJs/全民营业自动脚本/删除脚本自动加购的商品.txt") == true) {
        if (files.read("/storage/emulated/0/OrangeJs/全民营业自动脚本/删除脚本自动加购的商品.txt") == "true") {
            deleteShangPin = true;
        } else if (files.read("/storage/emulated/0/OrangeJs/全民营业自动脚本/删除脚本自动加购的商品.txt") == "false") {
            deleteShangPin = false;
        } else {
            toastLog("脚本配置文件错误，已尝试删除错误配置文件：(/storage/emulated/0/OrangeJs/全民营业自动脚本/删除脚本自动加购的商品.txt)" + files.remove("/storage/emulated/0/OrangeJs/全民营业自动脚本/删除脚本自动加购的商品.txt"));
            files.createWithDirs("/storage/emulated/0/OrangeJs/全民营业自动脚本/删除脚本自动加购的商品.txt");
            files.write("/storage/emulated/0/OrangeJs/全民营业自动脚本/删除脚本自动加购的商品.txt", "true");
            deleteShangPin = true;
        }
    } else {
        files.createWithDirs("/storage/emulated/0/OrangeJs/全民营业自动脚本/删除脚本自动加购的商品.txt");
        files.write("/storage/emulated/0/OrangeJs/全民营业自动脚本/删除脚本自动加购的商品.txt", "true");
        deleteShangPin = true;
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
                <text text="全民营业自动脚本：已为您停止运行" textSize="15" textStyle="bold" textColor="{{context_textColor}}" gravity="center" margin="5"/>
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
                    } else {
                        let a = jddwdhk.parent().parent().child(1).child(i).bounds();
                        click(a.centerX(), a.centerY());
                        toastLog("已尝试点击“关闭京东位置权限授权框”");
                    }
                    sleep(2000);
                }
            }
        }
    }
    while (true) {
        closeJDLocationView();

        function ClickRk() {
            let a = className("android.widget.ImageView").desc("浮层活动").findOnce();
            let b = className("android.widget.RelativeLayout").id("com.jingdong.app.mall:id/aza").findOnce();
            if (a != null) {
                return a;
            } else if (b != null &&
                b.childCount() > 0 &&
                b.child(0).childCount() > 0 &&
                b.child(0).child(0).desc() != null &&
                b.child(0).child(0).desc() == "浮层活动") {
                return b.child(0).child(0);
            }
        }
        if (className("android.view.View").desc("首页").findOnce() != null && ClickRk() != undefined) {
            let aa = ClickRk().bounds();
            click(aa.centerX(), aa.centerY());
            toastLog("已尝试点击“全民营业”入口按钮");
            sleep(3000);
            if (ClickRk() == undefined) {
                break;
            }
        } else if (id("com.jd.lib.category.feature:id/bt").clickable(true).className("android.widget.RelativeLayout").findOnce() != null && id("com.jd.lib.category.feature:id/bt").clickable(true).className("android.widget.RelativeLayout").findOnce().click() == true) {
            toastLog("已尝试盲点分类“搜索框”");
            sleep(3000);
            let root = selector().findOnce();
            if (root != null && root.childCount() > 0 &&
                root.child(0).childCount() > 0 &&
                root.child(0).child(0).childCount() > 0 &&
                root.child(0).child(0).child(0).childCount() > 0 &&
                root.child(0).child(0).child(0).child(0).childCount() > 1 &&
                root.child(0).child(0).child(0).child(0).child(0).childCount() > 1 &&
                root.child(0).child(0).child(0).child(0).child(0).child(1).childCount() > 2 &&
                root.child(0).child(0).child(0).child(0).child(0).child(1).child(2).text() == "搜索" &&
                root.child(0).child(0).child(0).child(0).child(1).childCount() > 1 &&
                root.child(0).child(0).child(0).child(0).child(1).child(1).desc() != null &&
                root.child(0).child(0).child(0).child(0).child(1).child(1).setText("") == true) {
                toastLog("已尝试设置搜索框为：" + Keyword + "(" + root.child(0).child(0).child(0).child(0).child(1).child(1).setText(Keyword) + ")");
                sleep(1000);
                root.child(0).child(0).child(0).child(0).child(0).child(1).child(2).click();
                toastLog("已尝试盲点“搜索”按钮");
                sleep(2000);
                for (let i = 10; i > 0; i--) {
                    let h = className("androidx.recyclerview.widget.RecyclerView").findOnce();
                    if (h != null &&
                        h.childCount() > 1 &&
                        h.child(1).childCount() > 0 &&
                        h.child(1).child(0).childCount() > 0 &&
                        h.child(1).child(0).child(0).className() == "android.widget.ImageView") {
                        h.child(1).child(0).child(0).click();
                        toastLog("已尝试盲点活动入口");
                        break;
                    } else {
                        toastLog("正在等待活动入口加载，剩余" + i + "秒……");
                        sleep(1000);
                    }
                }
                let h = className("androidx.recyclerview.widget.RecyclerView").findOnce();
                if (h != null &&
                    h.childCount() > 1 &&
                    h.child(1).childCount() > 0 &&
                    h.child(1).child(0).childCount() > 0 &&
                    h.child(1).child(0).child(0).className() == "android.widget.ImageView") {
                    h.child(1).child(0).child(0).click();
                    toastLog("已尝试盲点活动入口");
                    break;
                } else {
                    toastLog("未找到活动入口界面，正在重新尝试");
                    openInTask();
                }
            }
        } else if (className("android.view.View").desc("首页").clickable(true).findOnce() != null) {
            className("android.view.View").desc("首页").clickable(true).findOnce().click();
            toastLog("已尝试盲点京东主页“首页”按钮");
            sleep(2000);
        } else if (currentPackage() != "com.jingdong.app.mall") {
            app.startActivity({
                action: "android.intent.action.VIEW",
                packageName: "com.jingdong.app.mall",
                className: "com.jingdong.app.mall.main.MainActivity"
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
    for (let d = 10; d > 0; d--) {
        toastLog("正在等待“全民营业”活动界面加载，剩余" + d + "秒……");
        sleep(1000);
    }
}

function findA(mode) {
    let a = className("android.webkit.WebView").text("　").findOnce();
    let b = className("android.widget.LinearLayout").id("com.jingdong.app.mall:id/g4").findOnce();
    if (a != null) {
        return a;
    } else if (b != null &&
        b.childCount() > 0 &&
        b.child(0).childCount() > 0 &&
        b.child(0).child(0).childCount() > 0 &&
        b.child(0).child(0).child(0).childCount() > 0 &&
        b.child(0).child(0).child(0).child(0).className() == "android.webkit.WebView") {
        return b.child(0).child(0).child(0).child(0);
    } else {
        if (mode != "test") {
            console.warn("当前活动：" + currentActivity() + "，当前包名：" + currentPackage() + "当前应用名：" + getAppName(currentPackage()));
            toastLog("在当前界面上找不到A控件，正在重新尝试中");
            openInTask();
            DoTask()
        }
        return false;
    }
}

function DoTask() {
    let S = className("android.widget.TextView").text("送你启动资金").findOnce()
    if (S != null &&
        S.parent().parent().childCount() > 1) {
        if (S.parent().parent().child(1).clickable() == true && MangDian == true) {
            S.parent().parent().child(1).click();
            toastLog("已尝试盲点“送你启动资金(蒙版)”按钮");
        } else {
            let a = S.parent().parent().child(1).bounds();
            click(a.centerX(), a.centerY());
            toastLog("已尝试点击“送你启动资金(蒙版)”按钮");
        }
        sleep(3000);
    }

    function zyfindButton(text, equal) {
        let A = findA();
        if (A.childCount() > 0 &&
            A.child(0).childCount() > 0 &&
            A.child(0).child(0).childCount() > 10) {
            for (let i = 0; A.child(0).child(0).childCount() > i; i++) {
                if (equal == true &&
                    A.child(0).child(0).child(i).desc() != null &&
                    A.child(0).child(0).child(i).desc() == text ||
                    equal == true &&
                    A.child(0).child(0).child(i).text() == text) {
                    return A.child(0).child(0).child(i);
                } else if (equal == false &&
                    A.child(0).child(0).child(i).desc() != null &&
                    A.child(0).child(0).child(i).desc().search(text) >= 0 ||
                    equal == false &&
                    A.child(0).child(0).child(i).text().search(text) >= 0) {
                    return A.child(0).child(0).child(i);
                }
            }
        }
    }

    function JiesuoSj() {
        while (true) {
            let jshop = zyfindButton("立即解锁", false);
            if (jshop != undefined &&
                jshop.childCount() > 1 &&
                jshop.child(1).childCount() > 0 &&
                jshop.child(1).child(0).text().match(/[0-9]+/g).length == 2) {
                let mycoin = jshop.child(1).child(0).text().match(/[0-9]+/g);
                toastLog("当前金币数：" + mycoin[0] + "，升级所需金币：" + mycoin[1]);
                if (Number(mycoin[0]) >= Number(mycoin[1])) {
                    if (jshop.clickable() == true && MangDian == true) {
                        jshop.click();
                        if (jshop.desc() != null) {
                            toastLog("已尝试盲点：" + jshop.desc());
                        } else {
                            toastLog("已尝试盲点：" + jshop.text());
                        }
                    } else {
                        let a = jshop.bounds();
                        click(a.centerX(), jshop.centerY());
                        if (jshop.desc() != null) {
                            toastLog("已尝试点击：" + jshop.desc());
                        } else {
                            toastLog("已尝试点击：" + jshop.text());
                        }
                    }
                    sleep(3000);
                } else {
                    break;
                }
            } else {
                break;
            }
        }
    }
    JiesuoSj();

    function DianSongHuo() {
        let shangxian = 20;
        for (let i = 0; i < shangxian; i++) {
            if (findA() != undefined &&
                findA().childCount() > 0 &&
                findA().child(0).childCount() > 0 &&
                findA().child(0).child(0).childCount() > 0 &&
                findA().child(0).child(0).child(0).childCount() > 0 &&
                findA().child(0).child(0).child(0).child(0).childCount() > 2 &&
                findA().child(0).child(0).child(0).child(0).child(2).childCount() > 2 &&
                findA().child(0).child(0).child(0).child(0).child(2).child(findA().child(0).child(0).child(0).child(0).child(2).childCount() - 2).childCount() > 0 &&
                findA().child(0).child(0).child(0).child(0).child(2).child(findA().child(0).child(0).child(0).child(0).child(2).childCount() - 2).child(0).childCount() > 0 &&
                findA().child(0).child(0).child(0).child(0).child(2).child(findA().child(0).child(0).child(0).child(0).child(2).childCount() - 2).child(0).child(0).text() == "点我送货赚金币") {
                let S = findA().child(0).child(0).child(0).child(0).child(2).child(findA().child(0).child(0).child(0).child(0).child(2).childCount() - 2).child(0);
                if (S.clickable() == true && MangDian == true) {
                    S.click();
                    toastLog("尝试盲点“送货赚金币”(" + (i + 1) + "/" + shangxian + ")");
                } else {
                    toastLog("尝试点击“送货赚金币”(" + (i + 1) + "/" + shangxian + ")");
                }
                sleep(200);
            } else {
                break;
            }
        }
    }
    DianSongHuo();
    let a = className("android.view.View").desc("领金币").findOnce();
    let b = className("android.view.View").text("领金币").findOnce();
    if (a != null) {
        if (a.clickable() == true && MangDian == true) {
            a.click();
            toastLog("已尝试盲点“领金币”按钮");
        } else {
            let b = a.bounds();
            click(b.centerX(), b.centerY());
            toastLog("已尝试点击“领金币”按钮");
        }
        sleep(3000);
    } else if (b != null) {
        if (b.clickable() == true && MangDian == true) {
            b.click();
            toastLog("已尝试盲点“领金币”按钮");
        } else {
            let bb = b.bounds();
            click(bb.centerX(), bb.centerY());
            toastLog("已尝试点击“领金币”按钮");
        }
        sleep(3000);
    } else if (zyfindButton("领金币", true) != undefined) {
        let a = zyfindButton("领金币", true);
        if (a.clickable() == true && MangDian == true) {
            a.click();
            toastLog("已尝试盲点“领金币”按钮");
        } else {
            let b = a.bounds();
            click(b.centerX(), b.centerY());
            toastLog("已尝试点击“领金币”按钮");
        }
        sleep(3000);
    }

    WaitForDelete = [];

    function findB(mode) {
        function  isInteger(obj) {    
            return  obj % 1 === 0
        }
        if (mode == "test" && findA("test") == false) {
            return false;
        }
        let A = findA();
        if (A != undefined &&
            A.childCount() > 0 &&
            A.child(0).childCount() > 0 &&
            A.child(0).child(0).childCount() > 0 &&
            A.child(0).child(0).child(A.child(0).child(0).childCount() - 1).childCount() > 0 &&
            A.child(0).child(0).child(A.child(0).child(0).childCount() - 1).child(0).childCount() > 0 &&
            A.child(0).child(0).child(A.child(0).child(0).childCount() - 1).child(0).child(0).childCount() > 1 &&
            A.child(0).child(0).child(A.child(0).child(0).childCount() - 1).child(0).child(0).child(1).childCount() > 0 &&
            A.child(0).child(0).child(A.child(0).child(0).childCount() - 1).child(0).child(0).child(1).child(0).childCount() > 4 &&
            isInteger(A.child(0).child(0).child(A.child(0).child(0).childCount() - 1).child(0).child(0).child(1).child(0).childCount() / 4) == true &&
            A.child(0).child(0).child(A.child(0).child(0).childCount() - 1).child(0).child(0).child(1).child(0).child(0).className() == "android.widget.Image") {
            return A.child(0).child(0).child(A.child(0).child(0).childCount() - 1).child(0).child(0).child(1).child(0);
        } else {
            if (mode != "test") {
                console.warn("当前活动：" + currentActivity() + "，当前包名：" + currentPackage() + "当前应用名：" + getAppName(currentPackage()));
                toastLog("在当前界面上找不到B控件，正在重新尝试中");
                openInTask();
                DoTask();
            }
            return false;
        }
    }

    if (findB() != undefined) {
        let B = findB();
        var a = 0;
        while (true) {
            let B = findB();
            if (B.parent().parent().childCount() > 0 &&
                B.parent().parent().child(0).childCount() > 0 &&
                B.parent().parent().child(0).child(0).childCount() > 0 &&
                B.parent().parent().child(0).child(0).child(B.parent().parent().child(0).child(0).childCount() - 1).childCount() > 0 &&
                B.parent().parent().child(0).child(0).child(B.parent().parent().child(0).child(0).childCount() - 1).child(0).childCount() > 0 &&
                B.parent().parent().child(0).child(0).child(B.parent().parent().child(0).child(0).childCount() - 1).child(0).child(0).text().search("签到") >= 0) {
                if (B.parent().parent().child(0).child(0).child(B.parent().parent().child(0).child(0).childCount() - 1).child(0).clickable() == true && MangDian == true) {
                    B.parent().parent().child(0).child(0).child(B.parent().parent().child(0).child(0).childCount() - 1).child(0).click();
                    toastLog("已尝试盲点“签到”按钮");
                } else {
                    let a = B.parent().parent().child(0).child(0).child(B.parent().parent().child(0).child(0).childCount() - 1).child(0).bounds();
                    click(a.centerX(), a.centerY());
                    toastLog("已尝试点击“签到”按钮");
                }
                sleep(3000);
            }
            if (a >= B.childCount()) {
                toastLog("当前所有任务已完成");
                if (findB().parent().parent().childCount() > 2) {
                    if (findB().parent().parent().child(2).clickable() == true && MangDian == true) {
                        findB().parent().parent().child(2).click();
                        toastLog("已尝试盲点“关闭”蒙版按钮");
                    } else {
                        let a = findB().parent().parent().child(2).bounds();
                        click(a.centerX(), a.centerY());
                        toastLog("已尝试点击“关闭”蒙版按钮");
                    }
                    sleep(3000);
                }
                break;
            } else {
                if (B.child(a + 1).text() != "") {
                    if (RwTitle != null && RwTitle == B.child(a + 1).text()) {
                        SameTaskRw++;
                        toastLog("上次任务未完成或京东任务标题刷新出现BUG*" + SameTaskRw + "次");
                    }
                    if (SameTaskRw >= 2) {
                        var SameTaskRw = 0;
                        toastLog("上次任务未完成或京东任务标题刷新出现BUG已达" + SameTaskRw + "次，正在尝试重新进入完成");
                        openInTask();
                        DoTask();
                    }
                    var RwTitle = B.child(a + 1).text();
                    now = RwTitle.substring(RwTitle.indexOf("(") + 1, RwTitle.indexOf("/") + 0);
                    xz = RwTitle.substring(RwTitle.indexOf("/") + 1, RwTitle.indexOf(")") + 0);
                    if (!isNaN(xz) && !isNaN(now)) {
                        toastLog("当前任务完成数：" + now + "，当前任务上限为：" + xz);
                    } else {
                        toastLog("数字识别错误！错误任务标题：" + RwTitle + "\n错误当前任务完成数：" + now + "\n错误当前任务上限：" + xz);
                        console.error("数字识别错误！错误任务标题：" + RwTitle + "\n错误当前任务完成数：" + now + "\n错误当前任务上限：" + xz);
                        exit();
                    }
                } else {
                    toastLog("标题错误！：" + B.child(a + 1).text() + "[" + a + "]");
                    console.error("标题错误！：" + B.child(a + 1).text() + "[" + a + "]");
                    exit();
                }
                if (B.child(a + 3).desc() != null &&
                    B.child(a + 3).desc() != "") {
                    RwButton = B.child(a + 3);
                    RwButtonText = B.child(a + 3).desc();
                } else if (B.child(a + 3).text() != null &&
                    B.child(a + 3).text() != "") {
                    RwButton = B.child(a + 3);
                    RwButtonText = B.child(a + 3).text();
                } else {
                    toastLog("按钮标题错误！：" + B.child(a + 3).desc() + B.child(a + 3).text() + "[" + a + "]");
                    console.error("按钮标题错误！：" + B.child(a + 3).desc() + "[" + a + "]");
                    exit();
                }
                if (RwTitle.search("战队PK") < 0 &&
                    RwTitle.search("AR") < 0 &&
                    RwTitle.search("邀请好友助力") < 0 &&
                    RwTitle.search("邀人助力") < 0 &&
                    RwTitle.search("会员得") < 0 &&
                    RwTitle.search("所在战队成员") < 0 &&
                    RwTitle.search("商圈") < 0 &&
                    RwTitle.search("联合会员") < 0 &&
                    now != xz) {
                    if (RwButton.clickable() == true) {
                        RwButton.click();
                        toastLog("已尝试盲点" + RwButtonText + "按钮");
                    } else {
                        let b = RwButton.bounds();
                        click(b.centerX(), b.centerY());
                        toastLog("已尝试点击" + RwButtonText + "按钮");
                    }
                    sleep(3000);
                    log(RwTitle);
                    if (findB("test") == false) {
                        for (let deng = 10; deng > 0; deng--) {
                            let StopA = id("com.jingdong.app.mall:id/g4").className("android.widget.LinearLayout").findOnce();
                            let StopB = className("android.widget.RelativeLayout").id("com.jd.lib.babel.feature:id/fy").findOnce();
                            let StopC = className("android.widget.FrameLayout").id("com.jd.lib.jshop.feature:id/n_").findOnce();
                            let liulan = className("android.view.View").textContains("任意浏览以下").findOnce();
                            let Jiagou = className("android.view.View").textContains("在当前页任意加购").findOnce();
                            let kaika=text("品牌会员联合开卡").id("com.jingdong.app.mall:id/fd").findOnce();
                            if (kaika!=null||
                                StopC != null &&
                                StopC.childCount() > 0 &&
                                StopC.child(0).childCount() > 0 &&
                                StopC.child(0).child(0).childCount() > 1 &&
                                StopC.child(0).child(0).child(1).childCount() > 0 &&
                                StopC.child(0).child(0).child(1).child(0).childCount() > 1 &&
                                StopC.child(0).child(0).child(1).child(0).child(1).childCount() > 1 &&
                                StopC.child(0).child(0).child(1).child(0).child(1).child(1).childCount() > 5 ||
                                StopA != null &&
                                StopA.childCount() > 0 &&
                                StopA.child(0).childCount() > 0 &&
                                StopA.child(0).child(0).childCount() > 0 &&
                                StopA.child(0).child(0).child(0).childCount() > 0 &&
                                StopA.child(0).child(0).child(0).child(0).childCount() > 0 &&
                                StopA.child(0).child(0).child(0).child(0).child(0).childCount() > 1 &&
                                StopA.child(0).child(0).child(0).child(0).child(0).child(1).childCount() > 0 &&
                                StopA.child(0).child(0).child(0).child(0).child(0).child(1).child(0).childCount() > 0 &&
                                StopA.child(0).child(0).child(0).child(0).child(0).child(1).child(0).child(StopA.child(0).child(0).child(0).child(0).child(0).child(1).child(0).childCount() - 1).childCount() > 0 &&
                                StopA.child(0).child(0).child(0).child(0).child(0).child(1).child(0).child(StopA.child(0).child(0).child(0).child(0).child(0).child(1).child(0).childCount() - 1).child(0).childCount() > 0 &&
                                StopA.child(0).child(0).child(0).child(0).child(0).child(1).child(0).child(StopA.child(0).child(0).child(0).child(0).child(0).child(1).child(0).childCount() - 1).child(0).child(0).childCount() > 0 &&
                                StopA.child(0).child(0).child(0).child(0).child(0).child(1).child(0).child(StopA.child(0).child(0).child(0).child(0).child(0).child(1).child(0).childCount() - 1).child(0).child(0).child(0).childCount() > 0 &&
                                StopA.child(0).child(0).child(0).child(0).child(0).child(1).child(0).child(StopA.child(0).child(0).child(0).child(0).child(0).child(1).child(0).childCount() - 1).child(0).child(0).child(0).child(0).childCount() > 0 &&
                                StopA.child(0).child(0).child(0).child(0).child(0).child(1).child(0).child(StopA.child(0).child(0).child(0).child(0).child(0).child(1).child(0).childCount() - 1).child(0).child(0).child(0).child(0).child(0).childCount() > 2 &&
                                StopA.child(0).child(0).child(0).child(0).child(0).child(1).child(0).child(StopA.child(0).child(0).child(0).child(0).child(0).child(1).child(0).childCount() - 1).child(0).child(0).child(0).child(0).child(0).child(2).text().search("获得") >= 0 ||
                                StopA != null &&
                                StopA.childCount() > 0 &&
                                StopA.child(0).childCount() > 0 &&
                                StopA.child(0).child(0).childCount() > 0 &&
                                StopA.child(0).child(0).child(0).childCount() > 0 &&
                                StopA.child(0).child(0).child(0).child(0).childCount() > 1 &&
                                StopA.child(0).child(0).child(0).child(0).child(1).childCount() > 0 &&
                                StopA.child(0).child(0).child(0).child(0).child(1).child(0).childCount() > 0 &&
                                StopA.child(0).child(0).child(0).child(0).child(1).child(0).child(0).childCount() > 0 &&
                                StopA.child(0).child(0).child(0).child(0).child(1).child(0).child(0).child(0).childCount() > 0 &&
                                StopA.child(0).child(0).child(0).child(0).child(1).child(0).child(0).child(0).child(0).childCount() > 0 &&
                                StopA.child(0).child(0).child(0).child(0).child(1).child(0).child(0).child(0).child(0).child(0).childCount() > 5 ||
                                StopA != null &&
                                StopA.childCount() > 0 &&
                                StopA.child(0).childCount() > 0 &&
                                StopA.child(0).child(0).childCount() > 0 &&
                                StopA.child(0).child(0).child(0).childCount() > 0 &&
                                StopA.child(0).child(0).child(0).child(0).childCount() > 1 &&
                                StopA.child(0).child(0).child(0).child(0).child(1).childCount() > 0 &&
                                StopA.child(0).child(0).child(0).child(0).child(1).child(0).childCount() > 0 &&
                                StopA.child(0).child(0).child(0).child(0).child(1).child(0).child(0).childCount() > 0 &&
                                StopA.child(0).child(0).child(0).child(0).child(1).child(0).child(0).child(0).childCount() > 0 &&
                                StopA.child(0).child(0).child(0).child(0).child(1).child(0).child(0).child(0).child(0).childCount() > 0 &&
                                StopA.child(0).child(0).child(0).child(0).child(1).child(0).child(0).child(0).child(0).child(0).childCount() > 2 &&
                                StopA.child(0).child(0).child(0).child(0).child(1).child(0).child(0).child(0).child(0).child(0).child(2).text().search("获得") >= 0 ||
                                StopA != null &&
                                StopA.childCount() > 0 &&
                                StopA.child(0).childCount() > 0 &&
                                StopA.child(0).child(0).childCount() > 0 &&
                                StopA.child(0).child(0).child(0).childCount() > 0 &&
                                StopA.child(0).child(0).child(0).child(0).childCount() > 0 &&
                                StopA.child(0).child(0).child(0).child(0).child(0).childCount() > 2 &&
                                StopA.child(0).child(0).child(0).child(0).child(0).child(2).childCount() > 0 &&
                                StopA.child(0).child(0).child(0).child(0).child(0).child(2).child(0).childCount() > 0 &&
                                StopA.child(0).child(0).child(0).child(0).child(0).child(2).child(0).child(0).childCount() > 0 &&
                                StopA.child(0).child(0).child(0).child(0).child(0).child(2).child(0).child(0).child(0).childCount() > 0 &&
                                StopA.child(0).child(0).child(0).child(0).child(0).child(2).child(0).child(0).child(0).child(0).childCount() > 0 &&
                                StopA.child(0).child(0).child(0).child(0).child(0).child(2).child(0).child(0).child(0).child(0).child(0).childCount() > 2 &&
                                StopA.child(0).child(0).child(0).child(0).child(0).child(2).child(0).child(0).child(0).child(0).child(0).child(2).text().search("获得") >= 0 ||
                                StopB != null &&
                                StopB.childCount() > 0 &&
                                StopB.child(1).childCount() > 0 &&
                                StopB.child(1).child(0).childCount() > 0 &&
                                StopB.child(1).child(0).child(0).childCount() > 1 &&
                                StopB.child(1).child(0).child(0).child(1).childCount() > 0 &&
                                StopB.child(1).child(0).child(0).child(1).child(0).childCount() > 1 &&
                                StopB.child(1).child(0).child(0).child(1).child(0).child(1).childCount() > 1 &&
                                StopB.child(1).child(0).child(0).child(1).child(0).child(1).child(1).childCount() > 5) {
                                toastLog("已完成一次当前任务");
                                break;
                            } else if (liulan != null && liulan.text().search("个") >= 0 &&
                                liulan.parent().parent().childCount() > 1 &&
                                liulan.parent().parent().child(1).childCount() > 0) {
                                let cs = Number(liulan.text().substring(liulan.text().indexOf("下") + 1, liulan.text().indexOf("个") + 0));
                                for (let loop = 0; loop < cs; loop++) {
                                    if (loop > 3) {
                                        toastLog("已尝试上滑浏览商品页面");
                                        swipe(device.width / 2, device.height / 2, device.width / 2, 0, 500);
                                    }
                                    try {
                                        if (liulan.parent().child(0).text() == "已完成") {
                                            toastLog("【已完成】：" + liulan.text());
                                            break;
                                        }
                                        if (liulan.parent().parent().childCount() > 1 &&
                                            liulan.parent().parent().child(1).childCount() > 2) {
                                            let yl = liulan.parent().parent().child(1).child(loop).childCount();
                                            if (liulan.parent().parent().child(1).child(loop).child(yl - 1).clickable() == true && MangDian == true) {
                                                liulan.parent().parent().child(1).child(loop).child(yl - 1).click();
                                                toastLog("已尝试盲点第" + loop + "个商品");
                                            } else {
                                                let b = liulan.parent().parent().child(1).child(loop).bounds();
                                                click(b.centerX(), b.centerY());
                                                toastLog("已尝试点击第" + loop + "个商品");
                                            }
                                        }
                                    } catch (e) {
                                        console.warn("当前活动：" + currentActivity() + "，当前包名：" + currentPackage() + "当前应用名：" + getAppName(currentPackage()) + e);
                                        toastLog("A完成浏览商品时未能成功返回商品页，正在重新进入活动");
                                        openInTask();
                                        DoTask();
                                    }
                                    sleep(3000);
                                    if (className("android.widget.ImageView").desc("返回").findOnce() != null) {
                                        if (className("android.widget.ImageView").desc("返回").findOnce().clickable() == true) {
                                            className("android.widget.ImageView").desc("返回").findOnce().click();
                                            toastLog("已尝试盲点“返回”按钮");
                                        } else {
                                            let b = className("android.widget.ImageView").desc("返回").findOnce().bounds();
                                            click(b.centerX(), b.centerY());
                                            toastLog("已尝试点击“返回”按钮");
                                        }
                                        sleep(3000);
                                    } else {
                                        Justback();
                                        sleep(1000);
                                    }
                                }
                                break;
                            } else if (Jiagou != null && Jiagou.text().search("个") >= 0 &&
                                Jiagou.parent().parent().childCount() > 1 &&
                                Jiagou.parent().parent().child(1).childCount() > 0) {
                                let cs = Number(Jiagou.text().substring(Jiagou.text().indexOf("购") + 1, Jiagou.text().indexOf("个") + 0));
                                for (let loop = 0; loop < cs; loop++) {
                                    if (loop > 3) {
                                        toastLog("已尝试上滑加购商品页面");
                                        swipe(device.width / 2, device.height / 2, device.width / 2, 0, 500);
                                    }
                                    try {
                                        if (Jiagou.parent().child(0).text() == "已完成") {
                                            toastLog("【已完成】：" + Jiagou.text());
                                            break;
                                        }
                                        if (Jiagou.parent().parent().childCount() > 1 &&
                                            Jiagou.parent().parent().child(1).childCount() > 2) {
                                            let yl = Jiagou.parent().parent().child(1).child(loop).childCount();
                                            if (Jiagou.parent().parent().child(1).child(loop).childCount() > 1 &&
                                                Jiagou.parent().parent().child(1).child(loop).child(1).text() != "") {
                                                WaitForDelete.push(Jiagou.parent().parent().child(1).child(loop).child(1).text());
                                                toastLog("已将当前商品添加至待删除列表。当前商品：" + Jiagou.parent().parent().child(1).child(loop).child(1).text());
                                            }
                                            if (Jiagou.parent().parent().child(1).child(loop).child(yl - 1).clickable() == true && MangDian == true) {
                                                Jiagou.parent().parent().child(1).child(loop).child(yl - 1).click();
                                                toastLog("已尝试盲点加购第" + loop + "个商品");
                                            } else {
                                                let b = Jiagou.parent().parent().child(1).child(loop).bounds();
                                                click(b.centerX(), b.centerY());
                                                toastLog("已尝试点击加购第" + loop + "个商品");
                                            }
                                        }
                                    } catch (e) {
                                        log(e);
                                        console.warn("当前活动：" + currentActivity() + "，当前包名：" + currentPackage() + "当前应用名：" + getAppName(currentPackage()));
                                        toastLog("A完成加购商品时未能成功返回商品页，正在重新进入活动");
                                        openInTask();
                                        DoTask();
                                    }
                                    sleep(3000);
                                }
                                break;
                            } else if (textContains("恭喜完成").findOnce() != null) {
                                toastLog(textContains("恭喜完成").findOnce().text());
                                break;
                            } else if (text("出错了，返回再试试").findOnce() != null) {
                                toastLog("出错了，返回再试试");
                                break;
                            } else {
                                toastLog("正在完成“" + RwButtonText + "（" + now + "/" + xz + "）”任务，剩余" + deng + "秒……");
                                sleep(2000);
                            }
                        }
                        if (className("android.widget.ImageView").desc("返回").clickable(true).findOnce() != null) {
                            className("android.widget.ImageView").desc("返回").clickable(true).findOnce().click();
                            toastLog("已尝试盲点“返回”按钮");
                            //sleep(2000);
                        } else if (currentActivity() == "com.jd.lib.jshop.jshop.JshopMainShopActivity" && id("com.jd.lib.jshop:id/fd").findOnce() != null && id("com.jd.lib.jshop:id/fd").findOnce().clickable() == true) {
                            id("com.jd.lib.jshop:id/fd").findOnce().click();
                            toastLog("已尝试盲点“返回”按钮");
                            // sleep(2000);
                        } else if (className("android.view.ViewGroup").desc("返回按钮").findOnce() != null) {
                            let c = className("android.view.ViewGroup").desc("返回按钮").findOnce();
                            if (c.clickable() == true) {
                                c.click();
                                toastLog("已尝试盲点“返回”按钮");
                                //sleep(2000);
                            } else {
                                let b = c.bounds();
                                click(b.centerX(), b.centerY());
                                toastLog("已尝试点击“返回”按钮");
                                //sleep(2000);
                            }
                        } else {
                            Justback();
                            sleep(1000);
                        }
                    } else {
                        console.warn("当前活动：" + currentActivity() + "，当前包名：" + currentPackage() + "当前应用名：" + getAppName(currentPackage()));
                        toastLog("B当前未处于活动界面或任务蒙版未能成功打开，正在重新尝试");
                        openInTask();
                        DoTask();
                    }
                    if (text("忍痛离开").findOne(3000) != null) {
                        let v = text("忍痛离开").findOnce();
                        if (v.clickable() == true) {
                            v.click();
                            toastLog("已尝试盲点“忍痛离开”按钮");
                        } else {
                            let vb = v.bounds();
                            click(vb.centerX(), vb.centerY());
                            toastLog("已尝试点击“忍痛离开”按钮");
                        }
                        sleep(2000);
                    }
                } else {
                    if (now == xz) {
                        toastLog("【任务已完成】" + RwTitle);
                    } else {
                        toastLog("【已跳过】" + RwTitle);
                    }
                    a = a + 4;
                }
            }
        }
    }
    if (deleteShangPin == true) {
        DeleteFunction(WaitForDelete);
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

function DeleteFunction() {
    if (WaitForDelete.length > 0) {
        toastLog("【开始删除加购商品】正在跳转“购物车”界面，删除任务加购的商品");
        while (true) {
            if (currentActivity() == "com.jingdong.app.mall.MainFrameActivity" && className("android.view.View").descContains("购物车").findOnce() != null) {
                className("android.view.View").descContains("购物车").findOnce().click();
                toastLog("已尝试点击京东主页“购物车”按钮");
                sleep(3000);
                if (className("android.widget.TextView").textContains("全部(").findOnce() != null) {
                    let a = className("android.widget.TextView").textContains("全部(").findOnce();
                    if (a.clickable() == true) {
                        a.click();
                        toastLog("已尝试点击“全部”按钮");
                        sleep(3000);
                    } else {
                        let b = a.bounds();
                        click(b.centerX(), b.centerY());
                        toastLog("已尝试点击“全部”按钮");
                        sleep(3000);
                    }
                }
                break;
            } else if (currentPackage() != "com.jingdong.app.mall") {
                app.startActivity({
                    action: "android.intent.action.VIEW",
                    packageName: "com.jingdong.app.mall",
                    className: "com.jingdong.app.mall.main.MainActivity"
                });
                toastLog("当前未处于京东APP中，正在重新打开京东……");
                console.warn("当前活动：" + currentActivity() + "，当前包名：" + currentPackage() + "当前应用名：" + getAppName(currentPackage()));
                sleep(2000);
            } else {
                if (className("android.widget.ImageView").desc("返回").clickable(true).findOnce() != null) {
                    className("android.widget.ImageView").desc("返回").clickable(true).findOnce().click();
                    toastLog("已尝试点击“返回”按钮");
                } else if (currentActivity() == "com.jd.lib.jshop.jshop.JshopMainShopActivity" && id("com.jd.lib.jshop:id/fd").findOnce() != null && id("com.jd.lib.jshop:id/fd").findOnce().clickable() == true) {
                    id("com.jd.lib.jshop:id/fd").findOnce().click();
                    toastLog("已尝试盲点“返回”按钮");
                    sleep(2000);
                } else {
                    Justback();
                }
                sleep(2000);
            }
        }

        Array.prototype.remove  =   function(val)  {
            var  index  =  this.indexOf(val);
            if  (index  >  -1)  {
                this.splice(index,  1);
            }
        };
        if (className("android.widget.ImageView").desc("返回顶部").findOnce() != null) {
            let a = className("android.widget.ImageView").desc("返回顶部").findOnce();
            if (a.clickable() == true) {
                a.click();
                toastLog("已尝试盲点“返回顶部”按钮");
                sleep(2000);
            } else {
                let b = a.bounds();
                click(b.centerX(), b.centerY());
                toastLog("已尝试点击“返回顶部”按钮");
                sleep(2000);
            }
        }
        if (text("编辑").className("android.widget.TextView").clickable(true).findOnce() != null) {
            text("编辑").className("android.widget.TextView").clickable(true).findOnce().click();
            toastLog("已尝试盲点购物车“编辑”按钮");
            sleep(3000);
            let d = id("com.jingdong.app.mall:id/sh").className("android.widget.FrameLayout").findOnce();
            if (d != null && d.childCount() > 0 &&
                d.child(0).childCount() > 2 &&
                d.child(0).child(2).childCount() > 0 &&
                d.child(0).child(2).child(0).className() == "android.widget.LinearLayout" &&
                d.child(0).child(2).child(0).id() == "com.jd.lib.cart.feature:id/cart_select_all_layout_edit") {
                let v = d.child(0).child(2).child(0);
                if (v != null && v.parent().childCount() > 3 &&
                    v.parent().child(3).id() == "com.jd.lib.cart.feature:id/cart_edit_to_delete" &&
                    v.parent().child(3).text() == "删除" && v.parent().child(3).clickable() == true) {
                    if (v != null && v.childCount() > 0 &&
                        v.child(0).checked() == false && v.child(0).clickable() == true && v.child(0).className() == "android.widget.CheckBox") {
                        v.child(0).click();
                        toastLog("已尝试全选购物车，即将进行全不选");
                        sleep(2000);
                        let d = id("com.jingdong.app.mall:id/sh").className("android.widget.FrameLayout").findOnce();
                        if (d != null && d.childCount() > 0 &&
                            d.child(0).childCount() > 2 &&
                            d.child(0).child(2).childCount() > 0 &&
                            d.child(0).child(2).child(0).className() == "android.widget.LinearLayout" &&
                            d.child(0).child(2).child(0).id() == "com.jd.lib.cart.feature:id/cart_select_all_layout_edit") {
                            let v = d.child(0).child(2).child(0);
                            if (v != null && v.childCount() > 0 &&
                                v.child(0).checked() == true && v.child(0).clickable() == true && v.child(0).className() == "android.widget.CheckBox") {
                                v.child(0).click();
                                toastLog("已尝试全不选购物车，即将开始删除加购商品");
                                sleep(2000);
                                DeleteShangPin();
                            }
                        }
                    } else if (v != null && v.childCount() > 0 &&
                        v.child(0).checked() == true && v.child(0).clickable() == true && v.child(0).className() == "android.widget.CheckBox") {
                        v.child(0).click();
                        toastLog("已尝试全不选购物车，即将开始删除加购商品");
                        sleep(2000);
                        DeleteShangPin();
                    }
                }
            }
        }
    } else {
        toastLog("没有需要等待删除的加购商品");
    }

    function DeleteShangPin() {
        var ScrollFalse = 0;
        let A = className("androidx.recyclerview.widget.RecyclerView").findOnce();
        let d = id("com.jingdong.app.mall:id/sh").className("android.widget.FrameLayout").findOnce();
        if (d != null && d.childCount() > 0 &&
            d.child(0).childCount() > 2 &&
            d.child(0).child(2).childCount() > 0 &&
            d.child(0).child(2).child(0).className() == "android.widget.LinearLayout" &&
            d.child(0).child(2).child(0).id() == "com.jd.lib.cart.feature:id/cart_select_all_layout_edit") {
            var v = d.child(0).child(2).child(0);
        }
        if (A != null &&
            A.childCount() > 3 &&
            A.scrollable() == true) {
            while (true) {
                let A = className("androidx.recyclerview.widget.RecyclerView").findOnce();
                if (A != null) {
                    if (WaitForDelete.length == 0) {
                        toastLog("已删除全部已加购的商品");
                        break;
                    } else if (text("购物车是空的").findOnce() != null) {
                        toastLog("购物车是空的");
                        break;
                    } else if (ScrollFalse > 3) {
                        if (v != null && v.parent().childCount() > 3 &&
                            v.parent().child(3).id() == "com.jd.lib.cart.feature:id/cart_edit_to_delete" &&
                            v.parent().child(3).text() == "删除") {
                            v.parent().child(3).click();
                            toastLog("已尝试盲点“删除”按钮");
                            sleep(3000);
                            let X = className("android.widget.Button").clickable(true).text("确定").id("com.jingdong.app.mall:id/bq").findOne(3000);
                            if (X != null) {
                                X.click();
                                toastLog("已尝试盲点“删除”按钮");
                                sleep(2000);
                                break;
                            } else {
                                toastLog("找不到“删除”按钮");
                                DeleteFunction();
                            }
                        } else {
                            toastLog("找不到删除按钮，正在重新尝试中");
                            DeleteFunction();
                        }
                    } else {
                        for (let i = 0; i < A.childCount() - 1; i++) {
                            if (A.child(i) != null && A.childCount() > i &&
                                A.child(i).id() != null &&
                                A.child(i).id() == "com.jd.lib.cart.feature:id/cart_single_product_item_layout" &&
                                A.child(i).className() == "android.widget.RelativeLayout" &&
                                A.child(i).childCount() > 1 &&
                                A.child(i).child(0).child(0).className() == "android.widget.CheckBox" &&
                                A.child(i).child(0).child(0).clickable() == true &&
                                A.child(i).child(1).childCount() > 1 &&
                                A.child(i).child(1).child(1).childCount() > 0 &&
                                A.child(i).child(1).child(1).child(0).childCount() > 0 &&
                                A.child(i).child(1).child(1).child(0).child(0).text() != "" &&
                                A.child(i).child(1).child(1).child(0).child(0).id() != null &&
                                A.child(i).child(1).child(1).child(0).child(0).id() == "com.jd.lib.cart.feature:id/cart_single_product_name") {
                                var HAD = null;
                                for (let ii = 0; ii < WaitForDelete.length; ii++) {
                                    if (A.child(i).child(1).child(1).child(0).child(0).text() == WaitForDelete[ii]) {
                                        if (A.child(i).child(0).child(0).checked() == false) {
                                            A.child(i).child(0).child(0).click();
                                            toastLog("已尝试勾选：" + A.child(i).child(1).child(1).child(0).child(0).text());
                                            sleep(2000);
                                        } else {
                                            toastLog("此商品已被勾选：" + A.child(i).child(1).child(1).child(0).child(0).text());
                                        }
                                        var HAD = true;
                                    }
                                }
                                if (HAD == null && A.child(i).child(0).child(0).checked() == true) {
                                    A.child(i).child(0).child(0).click();
                                    toastLog("已尝试取消勾选：" + A.child(i).child(1).child(1).child(0).child(0).text());
                                    sleep(2000);
                                }
                            }
                        }
                        let Hua = A.scrollForward();
                        toastLog("已尝试上滑购物车列表(" + Hua + ")");
                        if (Hua == false) {
                            ScrollFalse++;
                        }
                        sleep(3000);
                    }
                } else {
                    toastLog("控件消失，正在重新尝试运行");
                    console.warn("当前活动：" + currentActivity() + "，当前包名：" + currentPackage() + "当前应用名：" + getAppName(currentPackage()));
                    DeleteFunction();
                    break;
                }
            }
        } else {
            toastLog("找不到“购物车商品”控件");
        }
    }
}