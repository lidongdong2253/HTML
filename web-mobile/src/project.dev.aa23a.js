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
  adaptation: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2e8c6rboYtErZtEDxrztcbG", "adaptation");
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
            cc.log("\u8bbe\u8ba1\u5206\u8fa8\u7387\u5bbd\u9ad8\u6bd4\u5927\u4e8e\u5c4f\u5e55\u5206\u8fa8\u7387\uff0c\u9002\u914d\u9ad8\u5ea6\u907f\u514d\u9ed1\u8fb9");
          } else {
            bg.width += 200;
            cc.log("\u8bbe\u8ba1\u5206\u8fa8\u7387\u5bbd\u9ad8\u6bd4\u5c0f\u4e8e\u5c4f\u5e55\u5206\u8fa8\u7387\uff0c\u9002\u914d\u5bbd\u5ea6\u907f\u514d\u9ed1\u8fb9");
          }
        }
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  createLayer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ecffaeTnDhKf74sLLEV1Nao", "createLayer");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {
        var self = this;
        this.initAllBtn();
        var create_bg = cc.find("Canvas/create_room_layer/create_bg");
        this.btn_1 = cc.find("Canvas/create_room_layer/btn_scroll_view/view/content/btn_1").getComponent(cc.Button);
        this.btn_2 = cc.find("Canvas/create_room_layer/btn_scroll_view/view/content/btn_2").getComponent(cc.Button);
        this.create_rule_node_1 = cc.find("Canvas/create_room_layer/create_rule_node_1");
        this.create_rule_node_2 = cc.find("Canvas/create_room_layer/create_rule_node_2");
        var callback = function callback() {
          self.node.active = false;
        };
        wsft.uiFuncs.bindTouchLayer(this.node, create_bg, callback);
      },
      start: function start() {},
      onEnable: function onEnable() {
        this.btn_1.interactable = false;
        this.btn_2.interactable = true;
        this.create_rule_node_1.active = true;
        this.create_rule_node_2.active = false;
      },
      allBtnCallback: function allBtnCallback(event, name) {
        cc.log(name);
        if ("close" === name) this.node.active = false; else if ("create" == name) cc.log("\u521b\u5efa\u623f\u95f4"); else if ("btn_1" == name) {
          this.btn_1.interactable = false;
          this.btn_2.interactable = true;
          this.create_rule_node_1.active = true;
          this.create_rule_node_2.active = false;
        } else if ("btn_2" == name) {
          this.btn_1.interactable = true;
          this.btn_2.interactable = false;
          this.create_rule_node_1.active = false;
          this.create_rule_node_2.active = true;
        }
      },
      initAllBtn: function initAllBtn() {
        var self = this;
        var btnHader = function btnHader(btnPath, name) {
          var btn = cc.find(btnPath);
          wsft.event.addBtnEvent(btn, self.node, "createLayer", "allBtnCallback", name);
        };
        btnHader("Canvas/create_room_layer/close_btn", "close");
        btnHader("Canvas/create_room_layer/btn_scroll_view/view/content/btn_1", "btn_1");
        btnHader("Canvas/create_room_layer/btn_scroll_view/view/content/btn_2", "btn_2");
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
      }
    });
    cc._RF.pop();
  }, {} ],
  joinLayer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4daf1xyfjVEb6necjkHjEqc", "joinLayer");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {
        var self = this;
        this.num_lable = [];
        this.inputNum = 0;
        var join_bg = cc.find("Canvas/join_room_layer/jion_bg_1");
        this.initAllBtn();
        for (var i = 0; i < 6; i++) {
          var lable = cc.find("Canvas/join_room_layer/srk_node/join_srk_" + i + "/join_num_label").getComponent(cc.Label);
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
        if ("wx" === name) this.agreementCheckBox.isChecked ? self.jumpScene() : wsft.uiFuncs.showTip("\u8bf7\u540c\u610f\u7528\u6237\u4f7f\u7528\u534f\u8bae", 30); else if ("agreement" === name) if ("" === this.agreementLabel) {
          var callback = function callback(data) {
            cc.log("date=" + data);
            self.agreementLabel = data;
            self._lable.string = self.agreementLabel;
            self.showAgreementLayer();
          };
          wsft.funcs.getTxTStr("argeementTXT", callback);
        } else self.showAgreementLayer(); else "agt_close" === name && self.closeAgreementLayer();
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
      },
      start: function start() {
        this.notice();
      },
      notice: function notice() {
        var noticeNode = cc.find("Canvas/notice_node");
        this.noticeJS = noticeNode.getComponent("notice");
        this.noticeJS.setDefaultNotice("\u5317\u4eac\u7f51\u5723\u98de\u817e\u6b22\u8fce\u4f60\uff01");
      },
      allBtnCallback: function allBtnCallback(event, name) {
        cc.log(name);
        var self = this;
        "creatroom" === name ? this.create_room_layer.active = true : "joinroom" === name ? this.join_room_layer.active = true : "shop" === name || ("rule" === name ? this.rule_layer.active = true : "set" === name || "record" === name || "share" === name);
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
        btnHader("Canvas/top_node/shop_btn", "shop");
        btnHader("Canvas/down_node/rule_btn", "rule");
        btnHader("Canvas/down_node/set_btn", "set");
        btnHader("Canvas/down_node/record_btn", "record");
        btnHader("Canvas/down_node/share_btn", "share");
        btnHader("Canvas/top_node/info_node/add_diamond_btn", "diamond");
      }
    });
    cc._RF.pop();
  }, {} ],
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
        var ac = cc.sequence(cc.moveBy(0, 0, 0), cc.callFunc(function() {
          self._runAction();
        }));
        self.Lable.runAction(ac);
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
  ruleLayer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "acaeaj2q91BXaq8APAUODsN", "ruleLayer");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        spriteFrame_1: cc.SpriteFrame,
        spriteFrame_2: cc.SpriteFrame
      },
      onLoad: function onLoad() {
        var self = this;
        this.initAllBtn();
        this.btn_1 = cc.find("Canvas/rule_layer/btn_scroll_view/view/content/btn_1").getComponent(cc.Button);
        this.btn_2 = cc.find("Canvas/rule_layer/btn_scroll_view/view/content/btn_2").getComponent(cc.Button);
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
        this.btn_1.interactable = false;
        this.btn_2.interactable = true;
        this.showImg(this.spriteFrame_1, 1);
      },
      showImg: function showImg(_spriteFrame, _num) {
        var rule_height = [ 1891, 1434 ];
        this.rule_info_node.getComponent(cc.Sprite).spriteFrame = _spriteFrame;
        var content = cc.find("Canvas/rule_layer/show_scroll_view/view/content");
        content.height = rule_height[_num - 1];
        this.rule_info_node.height = rule_height[_num - 1];
      },
      allBtnCallback: function allBtnCallback(event, name) {
        cc.log(name);
        if ("close" === name) this.node.active = false; else if ("btn_1" == name) {
          this.rule_scroll.stopAutoScroll();
          this.btn_1.interactable = false;
          this.btn_2.interactable = true;
          this.showImg(this.spriteFrame_1, 1);
          this.rule_scroll.scrollToTop(0);
        } else if ("btn_2" == name) {
          this.rule_scroll.stopAutoScroll();
          this.btn_1.interactable = true;
          this.btn_2.interactable = false;
          this.showImg(this.spriteFrame_2, 2);
          this.rule_scroll.scrollToTop(0);
        }
      },
      initAllBtn: function initAllBtn() {
        var self = this;
        var btnHader = function btnHader(btnPath, name) {
          var btn = cc.find(btnPath);
          wsft.event.addBtnEvent(btn, self.node, "ruleLayer", "allBtnCallback", name);
        };
        btnHader("Canvas/rule_layer/close_btn", "close");
        btnHader("Canvas/rule_layer/btn_scroll_view/view/content/btn_1", "btn_1");
        btnHader("Canvas/rule_layer/btn_scroll_view/view/content/btn_2", "btn_2");
      },
      onDisable: function onDisable() {
        this.rule_scroll.stopAutoScroll();
      }
    });
    cc._RF.pop();
  }, {} ],
  uiFuncs: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f11e1Sy88VKKaIMUsFfNxYq", "uiFuncs");
    "use strict";
    window.wsft = window.wsft || {};
    var uiFuncs = {
      showTip: function showTip(_txt, _fontSize, _time, _color) {
        cc.loader.loadRes("common/prefabs/showTip", function(err, prefab) {
          var showTime = _time || 2;
          var fontSize = _fontSize || 40;
          var color = _color || new cc.Color(255, 255, 73);
          var tipNode = cc.instantiate(prefab);
          var _lable = tipNode.getComponent(cc.Label);
          var scene = cc.director.getScene();
          scene.addChild(tipNode);
          var tipNodeX = .5 * cc.winSize.width;
          var tipNodeY = .5 * cc.winSize.height;
          tipNode.x = tipNodeX;
          tipNode.y = tipNodeY - 100;
          tipNode.color = color;
          _lable.fontSize = fontSize;
          _lable.fontHeight = fontSize;
          _lable.string = _txt;
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
          cc.log(completedCount);
          cc.log(totalCount);
          cc.log(item);
        };
        cc.loader.loadResDir("textures", function(err, textures) {
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
  } ]
}, {}, [ "init", "layer_scale_show", "https", "notice", "adaptation", "err", "event", "funcs", "uiFuncs", "loginScene", "createLayer", "joinLayer", "mainScene", "ruleLayer", "update" ]);