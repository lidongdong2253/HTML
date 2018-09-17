window.__require = function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var b = o.split("/");
        b = b[b.length - 1];
        if (!t[b]) {
          var a = "function" == typeof __require && __require;
          if (!u && a) return a(b, !0);
          if (i) return i(b, !0);
          throw new Error("Cannot find module '" + o + "'");
        }
      }
      var f = n[o] = {
        exports: {}
      };
      t[o][0].call(f.exports, function(e) {
        var n = t[o][1][e];
        return s(n || e);
      }, f, f.exports, e, t, n, r);
    }
    return n[o].exports;
  }
  var i = "function" == typeof __require && __require;
  for (var o = 0; o < r.length; o++) s(r[o]);
  return s;
}({
  ChiFengMJ: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "927efOdEYtOJLh4kHlGm9+z", "ChiFengMJ");
    "use strict";
    var MODEL = [ [ [ "6\u5c40(\u7816\u77f3\xd74)", "12\u5c40(\u7816\u77f3\xd74)", "26\u5c40(\u7816\u77f3\xd76)" ], [ "5\u5c40(\u7816\u77f3\xd74)", "10\u5c40(\u7816\u77f3\xd74)", "20\u5c40(\u7816\u77f3\xd76)" ], [ "1\u5708(\u7816\u77f3\xd74)", "2\u5708(\u7816\u77f3\xd74)", "4\u5708(\u7816\u77f3\xd76)" ] ], [ [ "6\u5c40(\u7816\u77f3\xd72/\u4eba)", "12\u5c40(\u7816\u77f3\xd72/\u4eba)", "26\u5c40(\u7816\u77f3\xd73/\u4eba)" ], [ "5\u5c40(\u7816\u77f3\xd72/\u4eba)", "10\u5c40(\u7816\u77f3\xd72/\u4eba)", "20\u5c40(\u7816\u77f3\xd72/\u4eba)" ], [ "1\u5708(\u7816\u77f3\xd71/\u4eba)", "2\u5708(\u7816\u77f3\xd71/\u4eba)", "4\u5708(\u7816\u77f3\xd72/\u4eba)" ] ] ];
    cc.Class({
      extends: cc.Component,
      properties: {
        checkedColor: new cc.Color(255, 0, 0),
        noCheckedColor: new cc.Color(150, 115, 110),
        createLabel: [],
        createToggle: []
      },
      onLoad: function onLoad() {
        this.initcheckBox();
        for (var i = 1; i < 4; ++i) {
          this.createLabel.push(cc.find("Canvas/create_room_layer/create_rule_node_1/model_node/toggle" + i + "/label"));
          this.createToggle.push(cc.find("Canvas/create_room_layer/create_rule_node_1/model_node/toggle" + i));
        }
        for (var i = 1; i < 3; ++i) {
          this.createLabel.push(cc.find("Canvas/create_room_layer/create_rule_node_1/pay_node/toggle" + i + "/label"));
          this.createToggle.push(cc.find("Canvas/create_room_layer/create_rule_node_1/pay_node/toggle" + i));
        }
        for (var i = 1; i < 4; ++i) {
          this.createLabel.push(cc.find("Canvas/create_room_layer/create_rule_node_1/player_num_node/toggle" + i + "/label"));
          this.createToggle.push(cc.find("Canvas/create_room_layer/create_rule_node_1/player_num_node/toggle" + i));
        }
        for (var i = 1; i < 7; ++i) {
          this.createLabel.push(cc.find("Canvas/create_room_layer/create_rule_node_1/rule_node/toggle_node_" + i + "/label"));
          this.createToggle.push(cc.find("Canvas/create_room_layer/create_rule_node_1/rule_node/toggle_node_" + i));
        }
      },
      initColor: function initColor() {
        for (var i = 0; i < this.createLabel.length; ++i) this.createToggle[i].getComponent(cc.Toggle).isChecked ? this.createLabel[i].color = this.checkedColor : this.createLabel[i].color = this.noCheckedColor;
      },
      setLabelColor: function setLabelColor(_colorTable) {
        for (var i = 0; i < this.createLabel.length; ++i) {
          this.createLabel[i].color = this.noCheckedColor;
          this.createToggle[i].getComponent(cc.Toggle).isChecked = false;
        }
        for (var i = 0; i < _colorTable.length; ++i) {
          this.createLabel[_colorTable[i]].color = this.checkedColor;
          this.createToggle[_colorTable[i]].getComponent(cc.Toggle).isChecked = true;
          console.log(_colorTable[i]);
        }
      },
      modelToggle: function modelToggle(_num) {
        for (var i = 0; i < 3; ++i) this.createLabel[i].color = _num == i ? this.checkedColor : this.noCheckedColor;
      },
      payToggle: function payToggle(_num) {
        for (var i = 3; i < 5; ++i) this.createLabel[i].color = _num == i ? this.checkedColor : this.noCheckedColor;
      },
      playerToggle: function playerToggle(_num) {
        for (var i = 5; i < 8; ++i) this.createLabel[i].color = _num == i ? this.checkedColor : this.noCheckedColor;
      },
      ruleToggle: function ruleToggle(_num) {
        this.createToggle[_num].getComponent(cc.Toggle).isChecked ? this.createLabel[_num].color = this.checkedColor : this.createLabel[_num].color = this.noCheckedColor;
      },
      judgeChecked: function judgeChecked() {
        var judgeTable = [];
        for (var i = 0; i < this.createLabel.length; ++i) this.createToggle[i].getComponent(cc.Toggle).isChecked && judgeTable.push(i);
        return judgeTable;
      },
      initToggleLabel: function initToggleLabel(_pay, _player) {
        var _playerNum = 0;
        var _payNum = 0;
        if (_player) _playerNum = _player; else for (var i = 5; i < 8; ++i) this.createToggle[i].getComponent(cc.Toggle).isChecked && (_playerNum = i);
        if (_pay) _payNum = _pay; else for (var i = 3; i < 5; ++i) this.createToggle[i].getComponent(cc.Toggle).isChecked && (_payNum = i);
        for (var i = 0; i < 3; ++i) this.createLabel[i].getComponent(cc.Label).string = MODEL[_payNum - 3][_playerNum - 5][i];
      },
      checkBoxCallback: function checkBoxCallback(toggle, name) {
        console.log(name);
        if ("model_1" == name) this.modelToggle(0); else if ("model_2" == name) this.modelToggle(1); else if ("model_3" == name) this.modelToggle(2); else if ("pay_1" == name) {
          this.payToggle(3);
          this.initToggleLabel(3, null);
        } else if ("pay_2" == name) {
          this.payToggle(4);
          this.initToggleLabel(4, null);
        } else if ("player_1" == name) {
          this.playerToggle(5);
          this.initToggleLabel(null, 5);
        } else if ("player_2" == name) {
          this.playerToggle(6);
          this.initToggleLabel(null, 6);
        } else if ("player_3" == name) {
          this.playerToggle(7);
          this.initToggleLabel(null, 7);
        } else "rule_1" == name ? this.ruleToggle(8) : "rule_2" == name ? this.ruleToggle(9) : "rule_3" == name ? this.ruleToggle(10) : "rule_4" == name ? this.ruleToggle(11) : "rule_5" == name ? this.ruleToggle(12) : "rule_6" == name && this.ruleToggle(13);
      },
      initcheckBox: function initcheckBox() {
        console.log("434343");
        var self = this;
        var checkBoxhander = function checkBoxhander(_sliderPath, _name) {
          var slider = cc.find(_sliderPath);
          wsft.event.addCheckBoxEvent(slider, self.node, "ChiFengMJ", "checkBoxCallback", _name);
        };
        for (var i = 1; i < 4; ++i) {
          checkBoxhander("Canvas/create_room_layer/create_rule_node_1/model_node/toggle" + i, "model_" + i);
          checkBoxhander("Canvas/create_room_layer/create_rule_node_1/player_num_node/toggle" + i, "player_" + i);
        }
        for (var i = 1; i < 7; ++i) checkBoxhander("Canvas/create_room_layer/create_rule_node_1/rule_node/toggle_node_" + i, "rule_" + i);
        checkBoxhander("Canvas/create_room_layer/create_rule_node_1/pay_node/toggle1", "pay_1");
        checkBoxhander("Canvas/create_room_layer/create_rule_node_1/pay_node/toggle2", "pay_2");
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  adaptiveView: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "386b2pp5cxMH6UCHgkGzEUV", "adaptiveView");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        PORTRAIT: 0,
        LANDSCAPE: 1
      },
      ctor: function ctor() {
        window.addEventListener("orientationchange", function(event) {
          if (180 == window.orientation || 0 == window.orientation) {
            console.log("\u7ad6\u5c4f");
            this.ORTRAIT = 1;
            this.LANDSCAPE = 0;
            wsft.message.emit(wsft.protocol.adaptiveView, true);
          }
          if (90 == window.orientation || -90 == window.orientation) {
            console.log("\u6a2a\u5c4f");
            this.ORTRAIT = 0;
            this.LANDSCAPE = 1;
            wsft.message.emit(wsft.protocol.adaptiveView, false);
          }
        });
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  adaptive: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2e8c6rboYtErZtEDxrztcbG", "adaptive");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {
        var canvas = this.node.getComponent(cc.Canvas);
        if (cc.sys.isBrowser) {
          var designResolutionBI = canvas.designResolution.width / canvas.designResolution.height;
          var visibleRectSize = cc.visibleRect.width / cc.visibleRect.height;
          var bg = cc.find("Canvas/scene_bg");
          if (designResolutionBI >= visibleRectSize) {
            bg.height += 200;
            canvas.fitWidth = false;
            canvas.fitHeight = true;
            cc.log("\u8bbe\u8ba1\u5206\u8fa8\u7387\u5bbd\u9ad8\u6bd4\u5927\u4e8e\u5c4f\u5e55\u5206\u8fa8\u7387\uff0c\u9002\u914d\u9ad8\u5ea6\u907f\u514d\u9ed1\u8fb9");
          } else {
            bg.width += 200;
            canvas.fitWidth = true;
            canvas.fitHeight = false;
            cc.log("\u8bbe\u8ba1\u5206\u8fa8\u7387\u5bbd\u9ad8\u6bd4\u5c0f\u4e8e\u5c4f\u5e55\u5206\u8fa8\u7387\uff0c\u9002\u914d\u5bbd\u5ea6\u907f\u514d\u9ed1\u8fb9");
          }
        }
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  audioFuncs: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7d0ffigInVClJw2yhEfvB83", "audioFuncs");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        musicVolume: .5,
        soundVolume: .5,
        bgMusicAudioID: -1
      },
      ctor: function ctor() {
        var m = cc.sys.localStorage.getItem("musicVolume");
        null != m && (this.musicVolume = parseFloat(m));
        var s = cc.sys.localStorage.getItem("soundVolume");
        null != s && (this.soundVolume = parseFloat(s));
      },
      getUrl: function getUrl(url) {
        return cc.url.raw("resources/sounds/" + url);
      },
      playMusic: function playMusic(url) {
        var audioUrl = this.getUrl(url);
        console.log(audioUrl);
        this.bgMusicAudioID >= 0 && cc.audioEngine.stop(this.bgMusicAudioID);
        this.bgMusicAudioID = cc.audioEngine.play(audioUrl, true, this.musicVolume);
      },
      playSound: function playSound(url) {
        var audioUrl = this.getUrl(url);
        if (this.soundVolume > 0) var audioId = cc.audioEngine.play(audioUrl, false, this.soundVolume);
      },
      setSoundVolume: function setSoundVolume(v) {
        if (this.soundVolume != v) {
          cc.sys.localStorage.setItem("soundVolume", v);
          this.soundVolume = v;
        }
      },
      setMusicVolume: function setMusicVolume(v) {
        this.bgMusicAudioID >= 0 && (v > 0 ? cc.audioEngine.resume(this.bgMusicAudioID) : cc.audioEngine.pause(this.bgMusicAudioID));
        if (this.musicVolume != v) {
          cc.sys.localStorage.setItem("musicVolume", v);
          this.musicVolume = v;
          cc.audioEngine.setVolume(this.bgMusicAudioID, v);
        }
      },
      pauseAll: function pauseAll() {
        cc.audioEngine.pauseAll();
      },
      resumeAll: function resumeAll() {
        cc.audioEngine.resumeAll();
      }
    });
    cc._RF.pop();
  }, {} ],
  config: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7b6baUAo2ZEkZNpKTnr4Xxt", "config");
    "use strict";
    window.wsft = window.wsft || {};
    var config = {
      deviceId: "wxWeb"
    };
    wsft.config = module.exports = config;
    cc._RF.pop();
  }, {} ],
  copy_h5: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d9f40Jb5b1JK6diX452Z1Xl", "copy_h5");
    "use strict";
    module.exports = function(input) {
      var el = document.createElement("textarea");
      el.value = input;
      el.setAttribute("readonly", "");
      el.style.contain = "strict";
      el.style.position = "absolute";
      el.style.left = "-9999px";
      el.style.fontSize = "12pt";
      var selection = getSelection();
      var originalRange = false;
      selection.rangeCount > 0 && (originalRange = selection.getRangeAt(0));
      document.body.appendChild(el);
      el.select();
      el.selectionStart = 0;
      el.selectionEnd = input.length;
      var success = false;
      try {
        success = document.execCommand("copy");
      } catch (err) {}
      document.body.removeChild(el);
      if (originalRange) {
        selection.removeAllRanges();
        selection.addRange(originalRange);
      }
      return success;
    };
    cc._RF.pop();
  }, {} ],
  createConfig: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c2238WvTl5PeKEbvgPjZRos", "createConfig");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      ctor: function ctor() {},
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  createLayer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ecffaeTnDhKf74sLLEV1Nao", "createLayer");
    "use strict";
    var RULE_NAME = [ "ChiFengMJ", "DouDiZhu" ];
    var RULE = 0;
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {
        var self = this;
        this.initAllBtn();
        var create_bg = cc.find("Canvas/create_room_layer/create_bg");
        this.btn_1 = cc.find("Canvas/create_room_layer/btn_scroll_view/view/content/btn_1").getComponent(cc.Button);
        this.create_rule_node_1 = cc.find("Canvas/create_room_layer/create_rule_node_1");
        var callback = function callback() {
          self.node.active = false;
        };
        wsft.uiFuncs.bindTouchLayer(this.node, create_bg, callback);
      },
      start: function start() {
        this.ChiFengMJ = this.create_rule_node_1.getComponent("ChiFengMJ");
        var ruleData = JSON.parse(cc.sys.localStorage.getItem("ruleData"));
        if (null != ruleData) {
          console.log(ruleData);
          var name = ruleData.name;
          var _chekedTable = ruleData.chekedTable;
          if (name == RULE_NAME[0]) {
            this.ChiFengMJ.setLabelColor(_chekedTable);
            this.create_rule_node_1.activeInHierarchy || (this.create_rule_node_1.active = true);
          }
        } else this.ChiFengMJ.initColor();
        this.ChiFengMJ.initToggleLabel();
      },
      onEnable: function onEnable() {},
      allBtnCallback: function allBtnCallback(event, name) {
        cc.log(name);
        if ("close" === name) this.node.active = false; else if ("create" == name) {
          cc.log("\u521b\u5efa\u623f\u95f4");
          var _chekedTable = this.ChiFengMJ.judgeChecked();
          var ruleData = {
            name: RULE_NAME[RULE],
            chekedTable: _chekedTable
          };
          cc.sys.localStorage.setItem("ruleData", JSON.stringify(ruleData));
          console.log(_chekedTable);
        } else "btn_1" == name ? RULE = 0 : "btn_2" == name;
      },
      initAllBtn: function initAllBtn() {
        var self = this;
        var btnHader = function btnHader(btnPath, name) {
          var btn = cc.find(btnPath);
          wsft.event.addBtnEvent(btn, self.node, "createLayer", "allBtnCallback", name);
        };
        btnHader("Canvas/create_room_layer/close_btn", "close");
        btnHader("Canvas/create_room_layer/btn_scroll_view/view/content/btn_1", "btn_1");
        btnHader("Canvas/create_room_layer/create_roon_btn", "create");
      }
    });
    cc._RF.pop();
  }, {} ],
  err: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d23c85UtIpJLrQ0K+SnlqfQ", "err");
    "use strict";
    window.wsft = window.wsft || {};
    var err = {
      LABEL_START_DELAY: "label_start_delay"
    };
    wsft.err = module.exports = err;
    cc._RF.pop();
  }, {} ],
  event: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "cd93cI/GYtOk6AyEIl6gFpN", "event");
    "use strict";
    window.wsft = window.wsft || {};
    var event = {
      addBtnEvent: function addBtnEvent(btn, node, MyComponent, callback, customEventData) {
        var clickEventHandler = new cc.Component.EventHandler();
        clickEventHandler.target = node;
        clickEventHandler.component = MyComponent;
        clickEventHandler.handler = callback;
        clickEventHandler.customEventData = customEventData;
        var button = btn.getComponent(cc.Button);
        button.clickEvents.push(clickEventHandler);
      },
      addSliderEvent: function addSliderEvent(_slider, _node, _MyComponent, _callback, _customEventData) {
        var sliderEventHandler = new cc.Component.EventHandler();
        sliderEventHandler.target = _node;
        sliderEventHandler.component = _MyComponent;
        sliderEventHandler.handler = _callback;
        sliderEventHandler.customEventData = _customEventData;
        var slider = _slider.getComponent(cc.Slider);
        slider.slideEvents.push(sliderEventHandler);
      },
      addCheckBoxEvent: function addCheckBoxEvent(_checkBox, _node, _MyComponent, _callback, _customEventData) {
        var checkEventHandler = new cc.Component.EventHandler();
        checkEventHandler.target = _node;
        checkEventHandler.component = _MyComponent;
        checkEventHandler.handler = _callback;
        checkEventHandler.customEventData = _customEventData;
        var toggle = _checkBox.getComponent(cc.Toggle);
        toggle.checkEvents.push(checkEventHandler);
      }
    };
    wsft.event = module.exports = event;
    cc._RF.pop();
  }, {} ],
  funcs: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "04e06GrD3lByJkSEyBxp3eA", "funcs");
    "use strict";
    window.wsft = window.wsft || {};
    var funcs = {
      getTxTStr: function getTxTStr(_url, callback) {
        cc.loader.loadRes(_url, function(err, data) {
          if (err) {
            wsft.uiFuncs.showTip("\u83b7\u53d6\u6587\u672c\u5931\u8d25\uff01", 30);
            callback("");
          } else callback(data);
        });
      }
    };
    wsft.funcs = module.exports = funcs;
    cc._RF.pop();
  }, {} ],
  gameScene: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "08150PC/iFDKK62tL1fEtzL", "gameScene");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        my_hand_card_prefab: cc.Prefab,
        _myMJArr: [],
        _selectMJ: null
      },
      onLoad: function onLoad() {
        this.inintView();
      },
      start: function start() {},
      inintView: function inintView() {
        var gameNode = cc.find("Canvas/game_node");
        var myselfNode = cc.find("Canvas/game_node/myself_node");
        var myHandCard = cc.find("Canvas/game_node/myself_node/hand_card");
        this._outCard = cc.find("Canvas/game_node/out_card_game");
        this._outCard.active = false;
        for (var i = 0; i < 14; ++i) {
          var my_hand_card = cc.instantiate(this.my_hand_card_prefab);
          my_hand_card.x = 75 * i - 500;
          my_hand_card.y = 0;
          13 == i && (my_hand_card.x += 25);
          myHandCard.addChild(my_hand_card);
          var sprite = my_hand_card.getComponent(cc.Sprite);
          sprite.spriteFrame = null;
          this._myMJArr.push(sprite);
          my_hand_card.on("click", this.onOutCardClicked, this);
          this.initTouchHandCard(sprite.node);
        }
        var Winwidth = cc.winSize.width;
        myHandCard.scaleX *= Winwidth / 1280;
        myHandCard.scaleY *= Winwidth / 1280;
        var sides = [ "myself_node", "right_node", "up_node", "left_node" ];
        for (var i = 0; i < sides.length; ++i) ;
      },
      initTouchHandCard: function initTouchHandCard(node) {
        node.on(cc.Node.EventType.TOUCH_START, function(event) {
          console.log("START");
          node.opacity = 255;
          this._outCard.active = false;
          this._outCard.getComponent(cc.Sprite).spriteFrame = node.getComponent(cc.Sprite).spriteFrame;
          this._outCard.x = event.getLocationX() - cc.winSize.width / 2;
          this._outCard.y = event.getLocationY() - cc.winSize.height / 2;
        }.bind(this));
        node.on(cc.Node.EventType.TOUCH_MOVE, function(event) {
          console.log("MOVE");
          this._outCard.active = true;
          node.opacity = 150;
          this._outCard.opacity = 255;
          this._outCard.x = event.getLocationX() - cc.winSize.width / 2;
          this._outCard.y = event.getLocationY() - cc.winSize.height / 2;
          node.y = 0;
        }.bind(this));
        node.on(cc.Node.EventType.TOUCH_END, function(event) {
          console.log("END");
          this._outCard.active = false;
          node.opacity = 255;
          event.getLocationY() > 180 && console.log("\u51fa\u724c==");
        }.bind(this));
        node.on(cc.Node.EventType.TOUCH_CANCEL, function(event) {
          console.log("TOUCH_CANCEL");
          this._outCard.active = false;
          node.opacity = 255;
          event.getLocationY() > 180 ? console.log("\u51fa\u724c==") : null != this._selectMJ && this._selectMJ == node && (this._selectMJ.y = 15);
        }.bind(this));
      },
      onOutCardClicked: function onOutCardClicked(event) {
        for (var i = 0; i < this._myMJArr.length; ++i) if (event.target == this._myMJArr[i].node) {
          if (event.target == this._selectMJ) {
            console.log("\u51fa\u724c");
            this.shootCard();
            this._selectMJ.y = 0;
            this._selectMJ = null;
            return;
          }
          null != this._selectMJ && (this._selectMJ.y = 0);
          event.target.y = 15;
          this._selectMJ = event.target;
          return;
        }
      },
      shootCard: function shootCard(_mjID) {
        if (null == _mjID) return;
      }
    });
    cc._RF.pop();
  }, {} ],
  https: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9fbcaRcV15Ii5MZK8fXsucA", "https");
    "use strict";
    window.wsft = window.wsft || {};
    var https = {
      get: function get() {
        cc.log("HTTP===============Get");
      }
    };
    wsft.https = module.exports = https;
    cc._RF.pop();
  }, {} ],
  imgHead: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "73ab1zOUrFFM4FdskEBEeRC", "imgHead");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {
        this.setHead();
      },
      start: function start() {},
      setHead: function setHead(_headurl) {},
      setSpriteFrame: function setSpriteFrame() {
        if (this._spriteFrame) {
          var sp = this.getComponent(cc.Sprite);
          sp && (sp.spriteFrame = this._spriteFrame);
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  infoLayer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4668bBquANB4YcwWZcnZsVD", "infoLayer");
    "use strict";
    var _copy = require("copy_h5");
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {
        var self = this;
        this.initAllBtn();
        var info_bg = cc.find("Canvas/info_layer/info_bg");
        var callback = function callback() {
          self.node.active = false;
        };
        wsft.uiFuncs.bindTouchLayer(this.node, info_bg, callback);
        this.refreshInfo();
      },
      start: function start() {},
      refreshInfo: function refreshInfo() {
        var _name = cc.find("Canvas/info_layer/info_name").getComponent(cc.Label);
        var _id = cc.find("Canvas/info_layer/info_id").getComponent(cc.Label);
        var _ip = cc.find("Canvas/info_layer/info_ip").getComponent(cc.Label);
        _name.string = wsft.ME.userName;
        _id.string = wsft.ME.userId;
        _ip.string = wsft.ME.ip;
      },
      allBtnCallback: function allBtnCallback(event, name) {
        cc.log(name);
        if ("close" === name) this.node.active = false; else if ("copy" === name) {
          var _copyStr = "" + wsft.ME.userId;
          cc.sys.isBrowser && (_copy(_copyStr) ? wsft.uiFuncs.showTip("\u590d\u5236ID\u6210\u529f", 32) : wsft.uiFuncs.showTip("\u590d\u5236ID\u5931\u8d25", 32));
        }
      },
      initAllBtn: function initAllBtn() {
        var self = this;
        var btnHader = function btnHader(btnPath, name) {
          var btn = cc.find(btnPath);
          wsft.event.addBtnEvent(btn, self.node, "infoLayer", "allBtnCallback", name);
        };
        btnHader("Canvas/info_layer/close_btn", "close");
        btnHader("Canvas/info_layer/copy_btn", "copy");
      }
    });
    cc._RF.pop();
  }, {
    copy_h5: "copy_h5"
  } ],
  init: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b8dc2sC1IBB34TJuVNyvUY8", "init");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      ctor: function ctor() {
        cc.log("------init\u521d\u59cb\u5316------------");
        window.wsft = window.wsft || {};
        var audioFuncs = require("audioFuncs");
        wsft.audioFuncs = new audioFuncs();
        var adaptiveView = require("adaptiveView");
        wsft.adaptiveView = new adaptiveView();
      }
    });
    cc._RF.pop();
  }, {
    adaptiveView: "adaptiveView",
    audioFuncs: "audioFuncs"
  } ],
  joinLayer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "970c4W6SZpPCZTML22KzuLR", "joinLayer");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {
        var self = this;
        this.num_lable = [];
        this.inputNum = 0;
        var join_bg = cc.find("Canvas/join_room_layer/jion_bg");
        this.initAllBtn();
        for (var i = 0; i < 6; ++i) {
          var lable = cc.find("Canvas/join_room_layer/srk_node/join_srk/join_num_label_" + i).getComponent(cc.Label);
          this.num_lable.push(lable);
        }
        var callback = function callback() {
          self.node.active = false;
        };
        wsft.uiFuncs.bindTouchLayer(this.node, join_bg, callback);
      },
      start: function start() {},
      onEnable: function onEnable() {
        this.resetBtn();
      },
      resetBtn: function resetBtn() {
        cc.log("resetBtn==============");
        for (var i = 0; i < this.num_lable.length; ++i) this.num_lable[i].string = "";
        this.inputNum = 0;
      },
      delLabelBtn: function delLabelBtn() {
        if (this.inputNum > 0) {
          this.inputNum -= 1;
          this.num_lable[this.inputNum].string = "";
        }
      },
      getRoomId: function getRoomId() {
        var roomId = "";
        for (var i = 0; i < this.num_lable.length; ++i) roomId += this.num_lable[i].string;
        return roomId;
      },
      inputLabel: function inputLabel(_num) {
        if (this.inputNum >= this.num_lable.length) return;
        this.num_lable[this.inputNum].string = _num;
        this.inputNum += 1;
        if (this.inputNum == this.num_lable.length) {
          var roomId = this.getRoomId();
          this.sendRoomID(roomId);
        }
      },
      sendRoomID: function sendRoomID(roomId) {
        cc.log("\u53d1\u9001\u623f\u95f4\u53f7--\x3e" + roomId);
      },
      onDisable: function onDisable() {},
      allBtnCallback: function allBtnCallback(event, name) {
        cc.log(name);
        "close" === name ? this.node.active = false : 10 == name ? this.resetBtn() : 11 == name ? this.delLabelBtn() : this.inputLabel(name);
      },
      initAllBtn: function initAllBtn() {
        cc.log("btn==============");
        var self = this;
        var btnHader = function btnHader(btnPath, name) {
          var btn = cc.find(btnPath);
          wsft.event.addBtnEvent(btn, self.node, "joinLayer", "allBtnCallback", name);
        };
        btnHader("Canvas/join_room_layer/close_btn", "close");
        for (var i = 0; i < 12; ++i) btnHader("Canvas/join_room_layer/btn_node/num_" + i, i);
      }
    });
    cc._RF.pop();
  }, {} ],
  layer_scale_show: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "869e8HJFNlDOYcyZHzXLM7j", "layer_scale_show");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {},
      onEnable: function onEnable() {
        var scaleAction1 = cc.scaleTo(.1, 1.25);
        var scaleAction2 = cc.scaleTo(.1, 1);
        var seq = cc.sequence(scaleAction1, scaleAction2);
        this.node.runAction(seq);
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  loginScene: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "866cfKSv+5M659rzdXxtpTf", "loginScene");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        agreementLabel: ""
      },
      onLoad: function onLoad() {},
      start: function start() {
        var self = this;
        this.initAllBtn();
        this.agreementLayer = cc.find("Canvas/agreement_layer");
        var ag_scrollView_node = cc.find("Canvas/agreement_layer/ScrollView");
        this.agreementCheckBox = cc.find("Canvas/agreement_checkBox").getComponent(cc.Toggle);
        this._lable = cc.find("Canvas/agreement_layer/ScrollView/view/content/item").getComponent(cc.Label);
        var callback = function callback() {
          self.closeAgreementLayer();
        };
        wsft.uiFuncs.bindTouchLayer(this.agreementLayer, ag_scrollView_node, callback);
      },
      allBtnCallback: function allBtnCallback(event, name) {
        cc.log(name);
        var self = this;
        "wx" === name ? this.agreementCheckBox.isChecked ? self.jumpScene() : wsft.uiFuncs.showTip("\u8bf7\u540c\u610f\u7528\u6237\u4f7f\u7528\u534f\u8bae\u8bf7\u540c\u610f\u7528\u6237\u4f7f\u7528\u534f\u8bae\u8bf7\u540c\u610f\u7528\u6237\u4f7f\u7528\u534f\u8bae", 30) : "agreement" === name ? this.agreementLayer.active = true : "agt_close" === name && self.closeAgreementLayer();
      },
      initAllBtn: function initAllBtn() {
        var self = this;
        var btnHader = function btnHader(btnPath, name) {
          var btn = cc.find(btnPath);
          wsft.event.addBtnEvent(btn, self.node, "loginScene", "allBtnCallback", name);
        };
        btnHader("Canvas/wx_btn", "wx");
        btnHader("Canvas/agreement_btn", "agreement");
        btnHader("Canvas/agreement_layer/close_btn", "agt_close");
      },
      showAgreementLayer: function showAgreementLayer() {
        this.agreementLayer.active = true;
      },
      closeAgreementLayer: function closeAgreementLayer() {
        this.agreementLayer.active = false;
      },
      jumpScene: function jumpScene() {
        cc.director.loadScene("MainScene");
      }
    });
    cc._RF.pop();
  }, {} ],
  mainScene: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8434d84+pZEUZ87zRLD6obT", "mainScene");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {
        this.initAllBtn();
        this.join_room_layer = cc.find("Canvas/join_room_layer");
        this.rule_layer = cc.find("Canvas/rule_layer");
        this.create_room_layer = cc.find("Canvas/create_room_layer");
        this.shop_layer = cc.find("Canvas/shop_layer");
        this.news_layer = cc.find("Canvas/news_layer");
        this.set_layer = cc.find("Canvas/set_layer");
        this.infoLayer = cc.find("Canvas/info_layer");
        this.recordLayer = cc.find("Canvas/record_layer");
        this.shareLayer = cc.find("Canvas/share_layer");
        wsft.message.on(wsft.protocol.adaptiveView, this.adaView.bind(this));
        wsft.message.emitAll();
      },
      adaView: function adaView(data) {
        cc.log("\u76d1\u542c\u5230\u4e86\u5417\uff01");
        console.log(data);
      },
      start: function start() {
        this.notice();
        this.refreshInfo();
      },
      refreshInfo: function refreshInfo() {
        var _name = cc.find("Canvas/top_node/info_node/name_lable").getComponent(cc.Label);
        var _id = cc.find("Canvas/top_node/info_node/id_lable").getComponent(cc.Label);
        var _diamond = cc.find("Canvas/top_node/info_node/diamond_bg/diamond_num").getComponent(cc.Label);
        _name.string = wsft.uiFuncs.trimName(wsft.ME.userName, 4, "...");
        _id.string = wsft.ME.userId;
        _diamond.string = wsft.ME.diamond;
      },
      notice: function notice() {
        var noticeNode = cc.find("Canvas/notice_node");
        this.noticeJS = noticeNode.getComponent("notice");
        this.noticeJS.setDefaultNotice("\u5317\u4eac\u7f51\u5723\u98de\u817e\u6b22\u8fce\u4f60\uff01\u5317\u4eac\u7f51\u5723\u98de\u817e\u6b22\u8fce\u4f60\uff01\u5317\u4eac\u7f51\u5723\u98de\u817e\u6b22\u8fce\u4f60\uff01");
        this.noticeJS.addNoticeTable("\u4f60\u597d\uff01\u4f60\u597d\uff01");
      },
      allBtnCallback: function allBtnCallback(event, name) {
        cc.log(name);
        var self = this;
        "creatroom" === name ? this.create_room_layer.active = true : "joinroom" === name ? this.join_room_layer.active = true : "gold" === name || "diamond" == name ? this.shop_layer.active = true : "rule" === name ? this.rule_layer.active = true : "set" === name ? this.set_layer.active = true : "record" === name ? this.recordLayer.active = true : "share" === name ? this.shareLayer.active = true : "news" === name ? this.news_layer.active = true : "myBSS" === name ? wsft.uiFuncs.showTip("\u656c\u8bf7\u671f\u5f85\uff01", 40) : "head" === name && (this.infoLayer.active = true);
      },
      initAllBtn: function initAllBtn() {
        cc.log("btn===init");
        var self = this;
        var btnHader = function btnHader(btnPath, name) {
          var btn = cc.find(btnPath);
          wsft.event.addBtnEvent(btn, self.node, "mainScene", "allBtnCallback", name);
        };
        btnHader("Canvas/center_node/createRoom_btn", "creatroom");
        btnHader("Canvas/center_node/joinRoom_btn", "joinroom");
        btnHader("Canvas/center_node/myBSS_btn", "myBSS");
        btnHader("Canvas/top_node/btn_node/news_btn", "news");
        btnHader("Canvas/top_node/btn_node/rule_btn", "rule");
        btnHader("Canvas/top_node/btn_node/set_btn", "set");
        btnHader("Canvas/top_node/btn_node/record_btn", "record");
        btnHader("Canvas/top_node/btn_node/share_btn", "share");
        btnHader("Canvas/top_node/info_node/head_mask", "head");
        btnHader("Canvas/top_node/info_node/diamond_bg/add_diamond_btn", "diamond");
        btnHader("Canvas/top_node/info_node/gold_bg/add_gold_btn", "gold");
      }
    });
    cc._RF.pop();
  }, {} ],
  messageCenter: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "41da1Kza1JF0ZVa+vJaz/Wq", "messageCenter");
    "use strict";
    window.wsft = window.wsft || {};
    var bindFuncList = [];
    var emitList = [];
    var message = {
      on: function on(key, cbFunc) {
        if (bindFuncList[key]) bindFuncList[key].push(cbFunc); else {
          var ary = new Array();
          ary.push(cbFunc);
          bindFuncList[key] = ary;
        }
      },
      emit: function emit(key, args) {
        var ary = bindFuncList[key];
        if (ary) {
          for (var i in ary) if (ary.hasOwnProperty(i)) try {
            ary[i].call(this, args);
          } catch (error) {}
        } else if (emitList[key]) emitList[key].push(args); else {
          var ary = new Array();
          ary.push(args);
          emitList[key] = ary;
        }
      },
      emitAll: function emitAll() {
        for (var key in emitList) if (emitList.hasOwnProperty(key)) {
          var emitAry = emitList[key];
          for (var j in emitAry) if (emitAry.hasOwnProperty(j)) {
            var args = emitAry[j];
            var ary = bindFuncList[key];
            for (var iterator in ary) if (ary.hasOwnProperty(iterator)) try {
              ary[iterator].call(this, args);
            } catch (error) {}
          }
        }
        emitList = [];
      },
      popAll: function popAll() {
        bindFuncList = [];
      }
    };
    wsft.message = module.exports = message;
    cc._RF.pop();
  }, {} ],
  mjCard: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1596dJv2GdMn46U42qoBnBZ", "mjCard");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        leftAtlas: cc.SpriteAtlas,
        rightAtlas: cc.SpriteAtlas,
        bottomAtlas: cc.SpriteAtlas
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  newsLayer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f675e0m8OtPsoSelsW36qmO", "newsLayer");
    "use strict";
    var _copy = require("copy_h5");
    var _copyStr = "LiDongDong";
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {
        var self = this;
        this.initAllBtn();
        this.btn_1 = cc.find("Canvas/news_layer/btn_1").getComponent(cc.Button);
        this.btn_2 = cc.find("Canvas/news_layer/btn_2").getComponent(cc.Button);
        this.btn_3 = cc.find("Canvas/news_layer/btn_3").getComponent(cc.Button);
        this.news_node_1 = cc.find("Canvas/news_layer/news_node_1");
        this.news_node_2 = cc.find("Canvas/news_layer/news_node_2");
        this.news_node_3 = cc.find("Canvas/news_layer/news_node_3");
        var news_bg = cc.find("Canvas/news_layer/news_bg");
        var callback = function callback() {
          self.node.active = false;
        };
        wsft.uiFuncs.bindTouchLayer(this.node, news_bg, callback);
      },
      start: function start() {},
      onEnable: function onEnable() {
        this.showNewsNode(1);
      },
      showNewsNode: function showNewsNode(_num) {
        this.btn_1.interactable = true;
        this.btn_2.interactable = true;
        this.btn_3.interactable = true;
        this.news_node_1.active = false;
        this.news_node_2.active = false;
        this.news_node_3.active = false;
        if (1 == _num) {
          this.btn_1.interactable = false;
          this.news_node_1.active = true;
        } else if (2 == _num) {
          this.btn_2.interactable = false;
          this.news_node_2.active = true;
        } else if (3 == _num) {
          this.btn_3.interactable = false;
          this.news_node_3.active = true;
        }
      },
      allBtnCallback: function allBtnCallback(event, name) {
        cc.log(name);
        "close" === name ? this.node.active = false : "btn_1" == name ? this.showNewsNode(1) : "btn_2" == name ? this.showNewsNode(2) : "btn_3" == name ? this.showNewsNode(3) : "copy" == name && cc.sys.isBrowser && (_copy(_copyStr) ? wsft.uiFuncs.showTip("\u590d\u5236" + _copyStr + "\u6210\u529f", 32) : wsft.uiFuncs.showTip("\u590d\u5236" + _copyStr + "\u5931\u8d25", 32));
      },
      initAllBtn: function initAllBtn() {
        var self = this;
        var btnHander = function btnHander(btnPath, name) {
          var btn = cc.find(btnPath);
          wsft.event.addBtnEvent(btn, self.node, "newsLayer", "allBtnCallback", name);
        };
        btnHander("Canvas/news_layer/close_btn", "close");
        btnHander("Canvas/news_layer/btn_1", "btn_1");
        btnHander("Canvas/news_layer/btn_2", "btn_2");
        btnHander("Canvas/news_layer/btn_3", "btn_3");
        btnHander("Canvas/news_layer/news_node_3/copy_btn", "copy");
      },
      onDisable: function onDisable() {}
    });
    cc._RF.pop();
  }, {
    copy_h5: "copy_h5"
  } ],
  notice: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "414966uQLJLaYsj8iVMOHqY", "notice");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        defaultNotice: null,
        isRuning: false,
        noticeTable: [ cc.String ],
        speed: 100
      },
      onLoad: function onLoad() {
        this.Lable = cc.find("Canvas/notice_node/mask_node/notice_label");
        this._lable = this.Lable.getComponent(cc.Label);
        this.mask = cc.find("Canvas/notice_node/mask_node");
      },
      start: function start() {},
      setSpeed: function setSpeed(_speed) {
        this.speed = _speed;
      },
      setDefaultNotice: function setDefaultNotice(_defaultNotice) {
        if (void 0 == _defaultNotice) return;
        cc.log("\u8bbe\u7f6e\u9ed8\u8ba4\u516c\u544a===" + _defaultNotice);
        this.defaultNotice = _defaultNotice;
        this.runNotice();
      },
      addNoticeTable: function addNoticeTable(_noticeTable) {
        if (void 0 == _noticeTable) return;
        cc.log("\u6dfb\u52a0\u5e7f\u64ad===" + _noticeTable);
        this.noticeTable.push(_noticeTable);
        this.runNotice();
      },
      runNotice: function runNotice() {
        var self = this;
        if (this.isRuning) return;
        var str = "";
        if (0 == this.noticeTable.length) {
          if (!this.defaultNotice) {
            self.node.active = false;
            return;
          }
          str = this.defaultNotice;
        } else str = this.noticeTable.shift();
        this.isRuning = true;
        this._lable.string = str;
        this.Lable.x = this.mask.width / 2;
        this.Lable.y = 0;
        this._lable._updateRenderData(true);
        self._runAction();
      },
      _runAction: function _runAction() {
        var self = this;
        var moveX = this.mask.width + this.Lable.width;
        var time = moveX / this.speed;
        var ac = cc.sequence(cc.moveBy(time, -moveX, 0), cc.callFunc(function() {
          self.isRuning = false;
          self.runNotice();
        }));
        self.Lable.runAction(ac);
      }
    });
    cc._RF.pop();
  }, {} ],
  protocol: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "54a30xRSopJ8p/SSg99rup2", "protocol");
    "use strict";
    window.wsft = window.wsft || {};
    var protocol = {
      adaptiveView: "PORTRAIT_LANDSCAPE"
    };
    wsft.protocol = module.exports = protocol;
    cc._RF.pop();
  }, {} ],
  recordLayer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "52db2DutxVGQLAOZ6SubuGu", "recordLayer");
    "use strict";
    var INFO = [ {
      room: "123456",
      time: "2018-09-12 20:05:13",
      playerArr: [ {
        name: "\u674e\u4e1c\u4e1c1\u674e\u4e1c\u4e1c1",
        socore: 100
      }, {
        name: "\u674e\u4e1c\u4e1c2\u674e\u4e1c\u4e1c1",
        socore: 200
      }, {
        name: "\u674e\u4e1c\u4e1c3",
        socore: 300
      }, {
        name: "\u674e\u4e1c\u4e1c4",
        socore: 400
      } ],
      twoArr: [ {
        order: "1",
        time: "09-12 20:05:13",
        playerArr: [ {
          name: "\u674e\u4e1c\u4e1c1\u674e\u4e1c\u4e1c1",
          socore: 100
        }, {
          name: "\u674e\u4e1c\u4e1c2\u674e\u4e1c\u4e1c1",
          socore: 200
        }, {
          name: "\u674e\u4e1c\u4e1c3",
          socore: 300
        }, {
          name: "\u674e\u4e1c\u4e1c4",
          socore: 400
        } ]
      }, {
        order: "2",
        time: "09-12 20:05:13",
        playerArr: [ {
          name: "\u674e\u4e1c\u4e1c1\u674e\u4e1c\u4e1c1",
          socore: 100
        }, {
          name: "\u674e\u4e1c\u4e1c2\u674e\u4e1c\u4e1c1",
          socore: 200
        }, {
          name: "\u674e\u4e1c\u4e1c3",
          socore: 300
        }, {
          name: "\u674e\u4e1c\u4e1c4",
          socore: 400
        } ]
      }, {
        order: "3",
        time: "09-12 20:05:13",
        playerArr: [ {
          name: "\u674e\u4e1c\u4e1c1\u674e\u4e1c\u4e1c1",
          socore: 100
        }, {
          name: "\u674e\u4e1c\u4e1c2\u674e\u4e1c\u4e1c1",
          socore: 200
        }, {
          name: "\u674e\u4e1c\u4e1c3",
          socore: 300
        }, {
          name: "\u674e\u4e1c\u4e1c4",
          socore: 400
        } ]
      }, {
        order: "4",
        time: "09-12 20:05:13",
        playerArr: [ {
          name: "\u674e\u4e1c\u4e1c1\u674e\u4e1c\u4e1c1",
          socore: 100
        }, {
          name: "\u674e\u4e1c\u4e1c2\u674e\u4e1c\u4e1c1",
          socore: 200
        }, {
          name: "\u674e\u4e1c\u4e1c3",
          socore: 300
        }, {
          name: "\u674e\u4e1c\u4e1c4",
          socore: 400
        } ]
      }, {
        order: "5",
        time: "09-12 20:05:13",
        playerArr: [ {
          name: "\u674e\u4e1c\u4e1c1\u674e\u4e1c\u4e1c1",
          socore: 100
        }, {
          name: "\u674e\u4e1c\u4e1c2\u674e\u4e1c\u4e1c1",
          socore: 200
        }, {
          name: "\u674e\u4e1c\u4e1c3",
          socore: 300
        }, {
          name: "\u674e\u4e1c\u4e1c4",
          socore: 400
        } ]
      }, {
        order: "6",
        time: "09-12 20:05:13",
        playerArr: [ {
          name: "\u674e\u4e1c\u4e1c1\u674e\u4e1c\u4e1c1",
          socore: 100
        }, {
          name: "\u674e\u4e1c\u4e1c2\u674e\u4e1c\u4e1c1",
          socore: 200
        }, {
          name: "\u674e\u4e1c\u4e1c3",
          socore: 300
        }, {
          name: "\u674e\u4e1c\u4e1c4",
          socore: 400
        } ]
      }, {
        order: "7",
        time: "09-12 20:05:13",
        playerArr: [ {
          name: "\u674e\u4e1c\u4e1c1\u674e\u4e1c\u4e1c1",
          socore: 100
        }, {
          name: "\u674e\u4e1c\u4e1c2\u674e\u4e1c\u4e1c1",
          socore: 200
        }, {
          name: "\u674e\u4e1c\u4e1c3",
          socore: 300
        }, {
          name: "\u674e\u4e1c\u4e1c4",
          socore: 400
        } ]
      } ]
    }, {
      room: "123456",
      time: "2018-09-12 20:05:13",
      playerArr: [ {
        name: "\u674e\u4e1c\u4e1c1",
        socore: 100
      }, {
        name: "\u674e\u4e1c\u4e1c2",
        socore: 200
      } ]
    }, {
      room: "123456",
      time: "2018-09-12 20:05:13",
      playerArr: [ {
        name: "\u674e\u4e1c\u4e1c1",
        socore: 100
      }, {
        name: "\u674e\u4e1c\u4e1c2",
        socore: 200
      }, {
        name: "\u674e\u4e1c\u4e1c3",
        socore: 300
      }, {
        name: "\u674e\u4e1c\u4e1c4",
        socore: 400
      } ]
    }, {
      room: "123456",
      time: "2018-09-12 20:05:13",
      playerArr: [ {
        name: "\u674e\u4e1c\u4e1c1",
        socore: 100
      }, {
        name: "\u674e\u4e1c\u4e1c2",
        socore: 200
      }, {
        name: "\u674e\u4e1c\u4e1c3",
        socore: 300
      }, {
        name: "\u674e\u4e1c\u4e1c4",
        socore: 400
      } ]
    } ];
    cc.Class({
      extends: cc.Component,
      properties: {
        record_scroll_view_1: cc.Node,
        record_scroll_view_2: cc.Node,
        oneInfoContent: cc.Node,
        twoInfoContent: cc.Node,
        showType: 1
      },
      onLoad: function onLoad() {
        var self = this;
        this.initAllBtn();
        var record_bg = this.node.getChildByName("record_bg");
        var callback = function callback() {
          self.node.active = false;
        };
        wsft.uiFuncs.bindTouchLayer(this.node, record_bg, callback);
      },
      start: function start() {},
      onEnable: function onEnable() {
        this.recordOneInfo = this.oneInfoContent.getChildByName("record_one_info");
        this.recordOneInfo.active = false;
        this.record_scroll_view_1.active = true;
        this.record_scroll_view_2.active = false;
        this.showType = 1;
        this.updateOneData();
      },
      updateOneData: function updateOneData() {
        var children = this.oneInfoContent._children;
        for (var i = 0; i < children.length; ++i) "one_info" == children[i].name && children[i].destroy();
        this.oneInfoContent.height = 130 * INFO.length;
        for (var index = 0; index < INFO.length; index++) {
          var data = INFO[index];
          var oneInfoNode = this.getOneInfoNode(index);
          if (oneInfoNode) {
            oneInfoNode.active = true;
            this.updateOneInfoNode(index, oneInfoNode, data);
          }
        }
      },
      getOneInfoNode: function getOneInfoNode(index) {
        if (0 == index) return this.recordOneInfo;
        var reInfoNode = cc.instantiate(this.recordOneInfo);
        reInfoNode.setName("one_info");
        reInfoNode.setPosition(0, -130 * index);
        this.oneInfoContent.addChild(reInfoNode);
        return reInfoNode;
      },
      updateOneInfoNode: function updateOneInfoNode(index, oneInfoNode, data) {
        oneInfoNode.getChildByName("room_num_label").getComponent(cc.Label).string = data.room + "\u53f7\u623f\u95f4";
        oneInfoNode.getChildByName("time_label").getComponent(cc.Label).string = "\u5bf9\u6218\u65f6\u95f4\uff1a" + data.time;
        for (var i = 0; i < data.playerArr.length; i++) {
          var num = i + 1;
          var element = data.playerArr[i];
          var _name = wsft.uiFuncs.trimName(element.name, 8, "...");
          oneInfoNode.getChildByName("name_label_" + num).getComponent(cc.Label).string = _name;
          oneInfoNode.getChildByName("scores_label_" + num).getComponent(cc.Label).string = element.socore;
          oneInfoNode.getChildByName("name_label_" + num).active = true;
          oneInfoNode.getChildByName("scores_label_" + num).active = true;
        }
        for (var i = data.playerArr.length + 1; i < 5; i++) {
          oneInfoNode.getChildByName("name_label_" + i).active = false;
          oneInfoNode.getChildByName("scores_label_" + i).active = false;
        }
        this.addOneBtnHandler(oneInfoNode, index.toString());
      },
      addOneBtnHandler: function addOneBtnHandler(btn, data) {
        btn.on("click", this.onOneClicked, this);
        var btnEvents = btn.getComponent(cc.Button);
        btnEvents.dataName = data;
      },
      onOneClicked: function onOneClicked(event) {
        var param = parseInt(event.dataName);
        if (param < 0 || param >= INFO.length) return;
        var data = INFO[param];
        if (!data) return;
        this.updateTwoInfoData(data.twoArr);
      },
      updateTwoInfoData: function updateTwoInfoData(_info) {
        this.record_scroll_view_1.active = false;
        this.record_scroll_view_2.active = true;
        this.recordTwoneInfo = this.twoInfoContent.getChildByName("record_two_info");
        this.recordTwoneInfo.active = false;
        this.showType = 2;
        var children = this.twoInfoContent._children;
        for (var i = 0; i < children.length; ++i) "two_info" == children[i].name && children[i].destroy();
        this.twoInfoContent.height = 102 * _info.length;
        for (var index = 0; index < _info.length; index++) {
          var data = _info[index];
          var twoInfoNode = this.getTwoInfoNode(index);
          if (twoInfoNode) {
            twoInfoNode.active = true;
            this.updateTowInfoNode(index, twoInfoNode, data);
          }
        }
      },
      getTwoInfoNode: function getTwoInfoNode(index) {
        if (0 == index) return this.recordTwoneInfo;
        var reInfoNode = cc.instantiate(this.recordTwoneInfo);
        reInfoNode.setName("two_info");
        reInfoNode.setPosition(0, -102 * index);
        this.twoInfoContent.addChild(reInfoNode);
        return reInfoNode;
      },
      updateTowInfoNode: function updateTowInfoNode(index, twoInfoNode, data) {
        twoInfoNode.getChildByName("order_num_label").getComponent(cc.Label).string = data.order;
        twoInfoNode.getChildByName("time_label").getComponent(cc.Label).string = data.time;
        for (var i = 0; i < data.playerArr.length; i++) {
          var num = i + 1;
          var element = data.playerArr[i];
          var _name = wsft.uiFuncs.trimName(element.name, 4, "...");
          this.record_scroll_view_2.getChildByName("name_label_" + num).getComponent(cc.Label).string = _name;
          twoInfoNode.getChildByName("score_label_" + num).getComponent(cc.Label).string = element.socore;
          this.record_scroll_view_2.getChildByName("name_label_" + num).active = true;
          twoInfoNode.getChildByName("score_label_" + num).active = true;
        }
        for (var i = data.playerArr.length + 1; i < 5; i++) {
          this.record_scroll_view_2.getChildByName("name_label_" + i).active = false;
          twoInfoNode.getChildByName("score_label_" + i).active = false;
        }
        var check_btn = twoInfoNode.getChildByName("check_btn");
        this.addTwoBtnHandler(check_btn, index.toString());
      },
      addTwoBtnHandler: function addTwoBtnHandler(btn, data) {
        btn.on("click", this.onTwoClicked, this);
        var btnEvents = btn.getComponent(cc.Button);
        btnEvents.dataName = data;
      },
      onTwoClicked: function onTwoClicked(event) {
        console.log(event.dataName);
      },
      allBtnCallback: function allBtnCallback(event, name) {
        cc.log(name);
        if ("close" === name) if (1 == this.showType) this.node.active = false; else {
          this.record_scroll_view_1.active = true;
          this.record_scroll_view_2.active = false;
          this.showType = 1;
        }
      },
      initAllBtn: function initAllBtn() {
        var self = this;
        var btnHader = function btnHader(btnPath, name) {
          var btn = cc.find(btnPath);
          wsft.event.addBtnEvent(btn, self.node, "recordLayer", "allBtnCallback", name);
        };
        btnHader("Canvas/record_layer/close_btn", "close");
      }
    });
    cc._RF.pop();
  }, {} ],
  ruleLayer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "acaeaj2q91BXaq8APAUODsN", "ruleLayer");
    "use strict";
    var _copy = require("copy_h5");
    cc.Class({
      extends: cc.Component,
      properties: {
        spriteFrame_1: cc.SpriteFrame
      },
      onLoad: function onLoad() {
        var self = this;
        this.initAllBtn();
        this.btn_1 = cc.find("Canvas/rule_layer/btn_scroll_view/view/content/btn_1").getComponent(cc.Button);
        this.rule_scroll = cc.find("Canvas/rule_layer/show_scroll_view").getComponent(cc.ScrollView);
        this.rule_info_node = cc.find("Canvas/rule_layer/show_scroll_view/view/content/rule_show");
        var rule_bg = cc.find("Canvas/rule_layer/rule_bg");
        var callback = function callback() {
          self.node.active = false;
        };
        wsft.uiFuncs.bindTouchLayer(this.node, rule_bg, callback);
      },
      start: function start() {},
      onEnable: function onEnable() {
        this.rule_scroll.scrollToTop(0);
        this.showImg(this.spriteFrame_1, 1);
      },
      showImg: function showImg(_spriteFrame, _num) {
        var rule_height = [ 1754, 1434 ];
        this.rule_info_node.getComponent(cc.Sprite).spriteFrame = _spriteFrame;
        var content = cc.find("Canvas/rule_layer/show_scroll_view/view/content");
        content.height = rule_height[_num - 1];
        this.rule_info_node.height = rule_height[_num - 1];
      },
      allBtnCallback: function allBtnCallback(event, name) {
        cc.log(name);
        "close" === name ? this.node.active = false : "btn_1" == name || "btn_2" == name;
      },
      initAllBtn: function initAllBtn() {
        var self = this;
        var btnHader = function btnHader(btnPath, name) {
          var btn = cc.find(btnPath);
          wsft.event.addBtnEvent(btn, self.node, "ruleLayer", "allBtnCallback", name);
        };
        btnHader("Canvas/rule_layer/close_btn", "close");
        btnHader("Canvas/rule_layer/btn_scroll_view/view/content/btn_1", "btn_1");
      },
      onDisable: function onDisable() {
        this.rule_scroll.stopAutoScroll();
      }
    });
    cc._RF.pop();
  }, {
    copy_h5: "copy_h5"
  } ],
  setLayer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "045ddLdmWxCcID82kF8dVzR", "setLayer");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {
        var self = this;
        this.initAllBtn();
        this.initSlider();
        this.initcheckBox();
        var set_bg = cc.find("Canvas/set_layer/set_bg");
        var callback = function callback() {
          self.node.active = false;
        };
        wsft.uiFuncs.bindTouchLayer(this.node, set_bg, callback);
        this.refreshVolume();
      },
      start: function start() {},
      onEnable: function onEnable() {
        this.refreshVolume();
      },
      refreshVolume: function refreshVolume() {
        var _musicMask = cc.find("Canvas/set_layer/set_node/slider_music/mask_node");
        var _soundMask = cc.find("Canvas/set_layer/set_node/slider_sound/mask_node");
        var sliderMusic = cc.find("Canvas/set_layer/set_node/slider_music").getComponent(cc.Slider);
        var sliderSound = cc.find("Canvas/set_layer/set_node/slider_sound").getComponent(cc.Slider);
        _musicMask.width = 500 * wsft.audioFuncs.musicVolume;
        _soundMask.width = 500 * wsft.audioFuncs.soundVolume;
        sliderMusic.progress = wsft.audioFuncs.musicVolume;
        sliderSound.progress = wsft.audioFuncs.soundVolume;
      },
      checkBoxCallback: function checkBoxCallback(toggle, name) {
        console.log(toggle);
        "toggle" == name && (toggle.isChecked ? wsft.uiFuncs.showTip("\u6682\u65f6\u672a\u5f00\u901aGPS\u529f\u80fd\uff01", 30, 2, new cc.Color(0, 0, 0)) : wsft.uiFuncs.showTip("\u6682\u65f6\u672a\u5f00\u901aGPS\u529f\u80fd", 30, 2, new cc.Color(0, 0, 0)));
      },
      initcheckBox: function initcheckBox() {
        var self = this;
        var checkBoxhander = function checkBoxhander(_sliderPath, _name) {
          var slider = cc.find(_sliderPath);
          wsft.event.addCheckBoxEvent(slider, self.node, "setLayer", "checkBoxCallback", _name);
        };
        checkBoxhander("Canvas/set_layer/distance_toggle", "toggle");
      },
      allBtnCallback: function allBtnCallback(event, name) {
        cc.log(name);
        "close" === name ? this.node.active = false : "change" == name && cc.director.loadScene("LoginScene");
      },
      initAllBtn: function initAllBtn() {
        var self = this;
        var btnHader = function btnHader(btnPath, name) {
          var btn = cc.find(btnPath);
          wsft.event.addBtnEvent(btn, self.node, "setLayer", "allBtnCallback", name);
        };
        btnHader("Canvas/set_layer/close_btn", "close");
        btnHader("Canvas/set_layer/change_account_btn", "change");
      },
      sliderCallback: function sliderCallback(slider, name) {
        console.log(name);
        "music" == name ? wsft.audioFuncs.setMusicVolume(slider.progress) : "sound" == name && wsft.audioFuncs.setSoundVolume(slider.progress);
        this.refreshVolume();
      },
      initSlider: function initSlider() {
        var self = this;
        var sliderhander = function sliderhander(_sliderPath, _name) {
          var slider = cc.find(_sliderPath);
          wsft.event.addSliderEvent(slider, self.node, "setLayer", "sliderCallback", _name);
        };
        sliderhander("Canvas/set_layer/set_node/slider_music", "music");
        sliderhander("Canvas/set_layer/set_node/slider_sound", "sound");
      },
      onDisable: function onDisable() {}
    });
    cc._RF.pop();
  }, {} ],
  shareLayer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9c57ezFg5tAH59eOU5vSXa9", "shareLayer");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {
        var self = this;
        var share_bg = this.node.getChildByName("share_bg");
        var callback = function callback() {
          self.node.active = false;
        };
        wsft.uiFuncs.bindTouchLayer(this.node, share_bg, callback);
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  shopLayer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "60b3drDJe9IO6Ei963yg5Wq", "shopLayer");
    "use strict";
    var _copy = require("copy_h5");
    var _copyStr = "\u7f51\u5723\u98de\u817e";
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {
        var self = this;
        this.initAllBtn();
        var shop_bg = cc.find("Canvas/shop_layer/shop_bg");
        var callback = function callback() {
          self.node.active = false;
        };
        wsft.uiFuncs.bindTouchLayer(this.node, shop_bg, callback);
      },
      start: function start() {},
      allBtnCallback: function allBtnCallback(event, name) {
        cc.log(name);
        "close" === name || "sure" == name ? this.node.active = false : "copy" == name && cc.sys.isBrowser && (_copy(_copyStr) ? wsft.uiFuncs.showTip("\u590d\u5236\u6210\u529f", 30) : wsft.uiFuncs.showTip("\u590d\u5236\u5931\u8d25", 30));
      },
      initAllBtn: function initAllBtn() {
        var self = this;
        var btnHader = function btnHader(btnPath, name) {
          var btn = cc.find(btnPath);
          wsft.event.addBtnEvent(btn, self.node, "shopLayer", "allBtnCallback", name);
        };
        btnHader("Canvas/shop_layer/close_btn", "close");
        btnHader("Canvas/shop_layer/copy_btn", "copy");
        btnHader("Canvas/shop_layer/sure_btn", "sure");
      }
    });
    cc._RF.pop();
  }, {
    copy_h5: "copy_h5"
  } ],
  uiFuncs: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f11e1Sy88VKKaIMUsFfNxYq", "uiFuncs");
    "use strict";
    window.wsft = window.wsft || {};
    var uiFuncs = {
      showTip: function showTip(_txt, _fontSize, _time, _color) {
        cc.loader.loadRes("common/prefabs/showTip/showTip", function(err, prefab) {
          var showTime = _time || 2;
          var fontSize = _fontSize || 40;
          var color = _color || new cc.Color(0, 0, 0);
          var tipNode = cc.instantiate(prefab);
          var _tipBg = tipNode.getChildByName("showTip_bg");
          var _label = tipNode.getChildByName("tipLabel").getComponent(cc.Label);
          var scene = cc.director.getScene();
          scene.addChild(tipNode);
          var tipNodeX = .5 * cc.winSize.width;
          var tipNodeY = .5 * cc.winSize.height;
          tipNode.x = tipNodeX;
          tipNode.y = tipNodeY - 100;
          tipNode.color = color;
          _label.fontSize = fontSize;
          _label.fontHeight = fontSize;
          _label.string = _txt;
          _label._updateRenderData(true);
          _tipBg.width = _label.node.width + 20;
          _tipBg.height = fontSize + 10;
          var callFunc = function callFunc() {
            tipNode.destroy();
          };
          var action1 = cc.moveTo(.5, cc.v2(tipNodeX, tipNodeY));
          var action2 = cc.delayTime(showTime);
          var action3 = cc.callFunc(callFunc);
          var seq = cc.sequence(action1, action2, action3);
          tipNode.runAction(seq);
        });
      },
      bindTouchLayer: function bindTouchLayer(_touchNode, _node, _callback) {
        _touchNode.on(cc.Node.EventType.TOUCH_END, function(_event) {
          var pos = _event.getLocation();
          if (!_node.getBoundingBoxToWorld().contains(_event.getLocation())) {
            var callback = _callback || function() {};
            callback();
          }
        });
      },
      trimName: function trimName(name, Ilength, insertStr) {
        if (!name) return "NULL";
        name = name.toString();
        var tmp = 0;
        var len = 0;
        var okLen = 0;
        var dowble = 0;
        Ilength *= 2;
        for (var i = 0; i < name.length; i++) {
          name.charCodeAt(i) > 255 ? tmp += 2 : len += 1;
          okLen += 1;
          if (tmp + len > Ilength) {
            okLen += dowble - 1;
            return name.substring(0, okLen) + insertStr;
          }
          if (name.codePointAt(i) > 65535) {
            i++;
            i < name.length && (dowble += 1);
          }
        }
        return name.substring(0, okLen + dowble);
      }
    };
    wsft.uiFuncs = module.exports = uiFuncs;
    cc._RF.pop();
  }, {} ],
  update: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ae70c8zDflJ/aowXDWFe+Z0", "update");
    "use strict";
    var init = require("init");
    cc.Class({
      extends: cc.Component,
      properties: {
        tipLable: cc.Label
      },
      onLoad: function onLoad() {
        var initNew = new init();
        this.is_loading = true;
        this.jindu = 0;
      },
      start: function start() {
        var self = this;
        cc.loader.onProgress = function(completedCount, totalCount, item) {
          if (self.is_loading) {
            self.jindu = completedCount / totalCount;
            var number_jindu = parseInt(100 * self.jindu);
            self.tipLable.string = "\u6b63\u5728\u52a0\u8f7d\u8d44\u6e90\uff0c\u8bf7\u7a0d\u5019..." + number_jindu + "%";
          }
        };
        cc.loader.loadResDir("prefabs", function(err, textures) {
          self.is_loading = false;
          self.jumpScene();
        });
      },
      jumpScene: function jumpScene() {
        cc.director.loadScene("LoginScene");
      },
      update: function update(dt) {}
    });
    cc._RF.pop();
  }, {
    init: "init"
  } ],
  userData: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "64874gZoehN+IVSm3iXJOx0", "userData");
    "use strict";
    window.wsft = window.wsft || {};
    var userInfo = null;
    var ME = {
      parse: function parse(data) {
        data && (userInfo = data);
      },
      get userId() {
        return 200101;
      },
      get userName() {
        return "\u4e1c\u90e1\u7231\u6211\u4e1c\u90e1\u7231\u6211";
      },
      get diamond() {
        return 10010;
      },
      get ip() {
        return "192.168.1.1";
      }
    };
    cc.director.on(cc.Director.EVENT_AFTER_SCENE_LAUNCH, function() {});
    wsft.ME = module.exports = ME;
    cc._RF.pop();
  }, {} ]
}, {}, [ "createConfig", "config", "init", "layer_scale_show", "messageCenter", "protocol", "https", "notice", "adaptive", "adaptiveView", "imgHead", "audioFuncs", "copy_h5", "err", "event", "funcs", "uiFuncs", "userData", "gameScene", "mjCard", "loginScene", "ChiFengMJ", "createLayer", "infoLayer", "joinLayer", "mainScene", "newsLayer", "recordLayer", "ruleLayer", "setLayer", "shareLayer", "shopLayer", "update" ]);
//# sourceMappingURL=project.dev.js.map