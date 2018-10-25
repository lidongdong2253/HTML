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
  1: [ function(require, module, exports) {
    var process = module.exports = {};
    var cachedSetTimeout;
    var cachedClearTimeout;
    function defaultSetTimout() {
      throw new Error("setTimeout has not been defined");
    }
    function defaultClearTimeout() {
      throw new Error("clearTimeout has not been defined");
    }
    (function() {
      try {
        cachedSetTimeout = "function" === typeof setTimeout ? setTimeout : defaultSetTimout;
      } catch (e) {
        cachedSetTimeout = defaultSetTimout;
      }
      try {
        cachedClearTimeout = "function" === typeof clearTimeout ? clearTimeout : defaultClearTimeout;
      } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
      }
    })();
    function runTimeout(fun) {
      if (cachedSetTimeout === setTimeout) return setTimeout(fun, 0);
      if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
      }
      try {
        return cachedSetTimeout(fun, 0);
      } catch (e) {
        try {
          return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
          return cachedSetTimeout.call(this, fun, 0);
        }
      }
    }
    function runClearTimeout(marker) {
      if (cachedClearTimeout === clearTimeout) return clearTimeout(marker);
      if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
      }
      try {
        return cachedClearTimeout(marker);
      } catch (e) {
        try {
          return cachedClearTimeout.call(null, marker);
        } catch (e) {
          return cachedClearTimeout.call(this, marker);
        }
      }
    }
    var queue = [];
    var draining = false;
    var currentQueue;
    var queueIndex = -1;
    function cleanUpNextTick() {
      if (!draining || !currentQueue) return;
      draining = false;
      currentQueue.length ? queue = currentQueue.concat(queue) : queueIndex = -1;
      queue.length && drainQueue();
    }
    function drainQueue() {
      if (draining) return;
      var timeout = runTimeout(cleanUpNextTick);
      draining = true;
      var len = queue.length;
      while (len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) currentQueue && currentQueue[queueIndex].run();
        queueIndex = -1;
        len = queue.length;
      }
      currentQueue = null;
      draining = false;
      runClearTimeout(timeout);
    }
    process.nextTick = function(fun) {
      var args = new Array(arguments.length - 1);
      if (arguments.length > 1) for (var i = 1; i < arguments.length; i++) args[i - 1] = arguments[i];
      queue.push(new Item(fun, args));
      1 !== queue.length || draining || runTimeout(drainQueue);
    };
    function Item(fun, array) {
      this.fun = fun;
      this.array = array;
    }
    Item.prototype.run = function() {
      this.fun.apply(null, this.array);
    };
    process.title = "browser";
    process.browser = true;
    process.env = {};
    process.argv = [];
    process.version = "";
    process.versions = {};
    function noop() {}
    process.on = noop;
    process.addListener = noop;
    process.once = noop;
    process.off = noop;
    process.removeListener = noop;
    process.removeAllListeners = noop;
    process.emit = noop;
    process.prependListener = noop;
    process.prependOnceListener = noop;
    process.listeners = function(name) {
      return [];
    };
    process.binding = function(name) {
      throw new Error("process.binding is not supported");
    };
    process.cwd = function() {
      return "/";
    };
    process.chdir = function(dir) {
      throw new Error("process.chdir is not supported");
    };
    process.umask = function() {
      return 0;
    };
  }, {} ],
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
        createToggle: [],
        modelNode: cc.Node,
        payNode: cc.Node,
        playerNumNode: cc.Node,
        ruleNode: cc.Node
      },
      onLoad: function onLoad() {
        this.initcheckBox();
        for (var i = 1; i < 4; ++i) {
          var _tog = this.modelNode.getChildByName("toggle" + i);
          this.pushToggleLabel(_tog);
        }
        for (var i = 1; i < 3; ++i) {
          var _tog = this.payNode.getChildByName("toggle" + i);
          this.pushToggleLabel(_tog);
        }
        for (var i = 1; i < 4; ++i) {
          var _tog = this.playerNumNode.getChildByName("toggle" + i);
          this.pushToggleLabel(_tog);
        }
        for (var i = 1; i < 7; ++i) {
          var _tog = this.ruleNode.getChildByName("toggle_node_" + i);
          this.pushToggleLabel(_tog);
        }
      },
      pushToggleLabel: function pushToggleLabel(_toggle) {
        this.createLabel.push(_toggle.getChildByName("label"));
        this.createToggle.push(_toggle);
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
        var checkBoxhander = function checkBoxhander(slider, _name) {
          wsft.event.addCheckBoxEvent(slider, self.node, "ChiFengMJ", "checkBoxCallback", _name);
        };
        for (var i = 1; i < 4; ++i) {
          checkBoxhander(this.modelNode.getChildByName("toggle" + i), "model_" + i);
          checkBoxhander(this.playerNumNode.getChildByName("toggle" + i), "player_" + i);
        }
        for (var i = 1; i < 7; ++i) checkBoxhander(this.ruleNode.getChildByName("toggle_node_" + i), "rule_" + i);
        for (var i = 1; i < 3; ++i) checkBoxhander(this.payNode.getChildByName("toggle" + i), "pay_" + i);
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
      properties: {},
      ctor: function ctor() {
        window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", function() {
          if (180 === window.orientation || 0 === window.orientation) {
            console.log("\u7ad6\u5c4f");
            config.onorientationChange = "portrait";
            wsft.message.sendMessage(wsft.protocol.adaptiveView, "portrait");
          }
          if (90 === window.orientation || -90 === window.orientation) {
            console.log("\u6a2a\u5c4f");
            config.onorientationChange = "landscape";
            wsft.message.sendMessage(wsft.protocol.adaptiveView, "landscape");
          }
        }, false);
      },
      judgeView: function judgeView() {
        var width = document.documentElement.clientWidth;
        var height = document.documentElement.clientHeight;
        cc.log("width==" + width);
        cc.log("height==" + height);
        return height > width ? "portrait" : "landscape";
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
            canvas.fitWidth = false;
            canvas.fitHeight = true;
            cc.log("\u8bbe\u8ba1\u5206\u8fa8\u7387\u5bbd\u9ad8\u6bd4\u5927\u4e8e\u5c4f\u5e55\u5206\u8fa8\u7387\uff0c\u9002\u914d\u9ad8\u5ea6\u907f\u514d\u9ed1\u8fb9");
          } else {
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
  agreementLayer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a8e48wLbS9DyYtfQWxjkMdh", "agreementLayer");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        content: cc.Node
      },
      onLoad: function onLoad() {
        var self = this;
        this.initAllBtn();
        var ScrollView = this.node.getChildByName("ScrollView");
        var callback = function callback() {
          self.node.active = false;
        };
        wsft.uiFuncs.bindTouchLayer(this.node, ScrollView, callback);
        var callback = function callback(data) {
          var label_node = self.content.getChildByName("item");
          var label = label_node.getComponent(cc.Label);
          label.string = data;
          label._updateRenderData(true);
          self.content.height = label_node.height;
        };
        wsft.funcs.getTxTStr("common/argeementTXT", callback);
      },
      start: function start() {},
      allBtnCallback: function allBtnCallback(event, name) {
        console.log(name);
        "close" === name && (this.node.active = false);
      },
      initAllBtn: function initAllBtn() {
        var self = this;
        var btnHader = function btnHader(btn, name) {
          wsft.event.addBtnEvent(btn, self.node, "agreementLayer", "allBtnCallback", name);
        };
        btnHader(this.node.getChildByName("close_btn"), "close");
      }
    });
    cc._RF.pop();
  }, {} ],
  arrow: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5463cbEp0ZEd6BXTpCbq8Su", "arrow");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        _arrow: null,
        _pointer: null,
        _pointerChildren: [],
        _timeLabel: null,
        _time: -1,
        _alertTime: -1
      },
      onLoad: function onLoad() {
        var gameChild = this.node.getChildByName("game_node");
        this._arrow = gameChild.getChildByName("arrow_node");
        this._pointer = this._arrow.getChildByName("pointer_node");
        this._pointer.rotation = 90 * (wsft.gameData.mySeatIndex - 1);
        2 == wsft.gameData.playerNum && 2 == wsft.gameData.mySeatIndex && (this._pointer.rotation = 180);
        this._arrow.active = true;
        for (var i = 0; i < 4; ++i) this._pointerChildren.push(this._pointer.getChildByName("arrow_" + i));
        this.initPointer();
        this._timeLabel = this._arrow.getChildByName("count_down_label").getComponent(cc.Label);
        this._timeLabel.string = "00";
        this.mjCount = this._arrow.getChildByName("mj_count").getComponent(cc.Label);
        this.mjCount.string = "0\u5f20";
        this.juCount = this._arrow.getChildByName("ju_count").getComponent(cc.Label);
        this.juCount.string = "0/0\u5708";
        this.addMessgetListen();
      },
      start: function start() {},
      addMessgetListen: function addMessgetListen() {
        wsft.message.addMessage(wsft.protocol.CATCHCARD, this.catchCarda.bind(this));
        wsft.message.addMessage(wsft.protocol.SEATCATCHCARD, this.seatCatchCarda.bind(this));
        wsft.message.addMessage(wsft.protocol.PUSHPENGCARD, this.seatCatchCarda.bind(this));
        wsft.message.addMessage(wsft.protocol.RECEIVEANGANG, this.seatCatchCarda.bind(this));
        wsft.message.addMessage(wsft.protocol.PUSHANGANG, this.seatCatchCarda.bind(this));
        wsft.message.addMessage(wsft.protocol.PUSHMINGGANG, this.seatCatchCarda.bind(this));
        wsft.message.addMessage(wsft.protocol.PUSHJIEGANG, this.seatCatchCarda.bind(this));
        wsft.message.addMessage(wsft.protocol.PUSHOUTCARD, this.seatCatchCarda.bind(this));
        wsft.message.addMessage(wsft.protocol.RECEIVEOFFLINERECONNECTION, this.receiveOfflineReconnectiona.bind(this));
      },
      receiveOfflineReconnectiona: function receiveOfflineReconnectiona(data) {
        data.start && this.catchCarda();
      },
      catchCarda: function catchCarda(data) {
        this._arrow.active = true;
        this.mjCount.string = wsft.gameData.cardNum + "\u5f20";
        this.initPointer();
        this._time = 15;
        this._alertTime = 3;
      },
      seatCatchCarda: function seatCatchCarda(data) {
        this.mjCount.string = wsft.gameData.cardNum + "\u5f20";
        this._arrow.active = true;
        this.initPointer();
        this._time = 15;
        this._alertTime = 3;
      },
      initPointer: function initPointer() {
        if (!this._arrow.active) return;
        if (-1 == wsft.gameData.turnIndex) return;
        var turn = wsft.gameData.turnIndex;
        var localIndex = turn - 1;
        if (3 == wsft.gameData.playerNum) {
          1 == wsft.gameData.mySeatIndex && 2 == localIndex && (localIndex = 3);
          2 == wsft.gameData.mySeatIndex && 3 == localIndex && (localIndex = 2);
          3 == wsft.gameData.mySeatIndex && 0 == localIndex && (localIndex = 3);
        } else 2 == wsft.gameData.playerNum && 1 == localIndex && (localIndex = 2);
        for (var i = 0; i < 4; ++i) this._pointerChildren[i].active = i == localIndex;
      },
      update: function update(dt) {
        if (this._time > 0) {
          this._time -= dt;
          this._alertTime > 0 && this._time < this._alertTime && (this._alertTime = -1);
          var pre = "";
          this._time < 0 && (this._time = 0);
          var t = Math.ceil(this._time);
          t < 10 && (pre = "0");
          this._timeLabel.string = pre + t;
        }
      }
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
        bgMusicAudioID: -1,
        stopMusicVolume: .5
      },
      ctor: function ctor() {
        var m = cc.sys.localStorage.getItem("musicVolume");
        null != m && (this.musicVolume = parseFloat(m));
        var s = cc.sys.localStorage.getItem("soundVolume");
        null != s && (this.soundVolume = parseFloat(s));
        var sm = cc.sys.localStorage.getItem("stopMusicVolume");
        null != sm && (this.stopMusicVolume = parseFloat(sm));
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
  bigGameOverLayer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2bbc6YwAV5L0okVVzm+3NmY", "bigGameOverLayer");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        headImg: [ cc.Node ],
        timeLabel: null,
        player: []
      },
      onLoad: function onLoad() {
        var roomIdLabel = this.node.getChildByName("room_num_label").getComponent(cc.Label);
        roomIdLabel.string = "\u623f\u95f4\u53f7:" + wsft.gameData.roomId;
        var gameName = this.node.getChildByName("game_name").getComponent(cc.Label);
        gameName.string = "\u8d64\u5cf0\u9ebb\u5c06";
        this.timeLabel = this.node.getChildByName("time_label").getComponent(cc.Label);
        var callback = function callback() {};
        wsft.uiFuncs.bindTouchLayer(this.node, this.node, callback);
        this.initAllBtn();
        for (var i = 0; i < 4; ++i) {
          this.player[i] = this.node.getChildByName("player_node_" + i);
          this.player[i].active = true;
        }
        if (4 == wsft.gameData.playerNum) {
          this.player[0].x = -390;
          this.player[1].x = -130;
          this.player[2].x = 130;
          this.player[3].x = 390;
        } else if (3 == wsft.gameData.playerNum) {
          this.player[0].x = -330;
          this.player[1].x = 0;
          this.player[2].x = 330;
          this.player[3].active = false;
        } else if (2 == wsft.gameData.playerNum) {
          this.player[0].x = -220;
          this.player[1].x = 220;
          this.player[2].active = false;
          this.player[3].active = false;
        }
      },
      setBigGameOverData: function setBigGameOverData(data) {
        this.timeLabel.string = wsft.funcs.formatTime("YYYY-MM-DD hh:mm");
        var seats = wsft.gameData.seats;
        var rs = data.rs;
        for (var i = 0; i < seats.length; i++) {
          var player = this.node.getChildByName("player_node_" + i);
          var nameTabLabel = player.getChildByName("name_label").getComponent(cc.Label);
          nameTabLabel.string = seats[i].nickname;
          var nameTabLabel = player.getChildByName("id_label").getComponent(cc.Label);
          nameTabLabel.string = "ID:" + seats[i].uid;
          var headjs = this.headImg[i].getComponent("imgHead");
          headjs.setHead(seats[i].headimg);
          var dyj = player.getChildByName("dyj");
          dyj.active = false;
          for (var key in data.seetIndex) dyj.active = i == data.seetIndex[key] - 1;
          var zjps = player.getChildByName("zjps");
          zjps.active = false;
          for (var _key in data.paoShou) zjps.active = i == data.paoShou[_key] - 1;
          var fangz = player.getChildByName("fangz");
          fangz.active = seats[i].isMaster;
          var ziMoLabel = player.getChildByName("zi_mo_num").getChildByName("label").getComponent(cc.Label);
          ziMoLabel.string = rs[i].ziMo;
          var jiePaoLabel = player.getChildByName("jie_pao_num").getChildByName("label").getComponent(cc.Label);
          jiePaoLabel.string = rs[i].jiePao;
          var dianPaoLabel = player.getChildByName("dian_pao_num").getChildByName("label").getComponent(cc.Label);
          dianPaoLabel.string = rs[i].fangPao;
          var anGangLabel = player.getChildByName("an_gang_num").getChildByName("label").getComponent(cc.Label);
          anGangLabel.string = rs[i].anGang;
          var mingGangLabel = player.getChildByName("ming_gang_num").getChildByName("label").getComponent(cc.Label);
          mingGangLabel.string = rs[i].mingGang;
          var scoreTabLabel = player.getChildByName("score_label").getComponent(cc.Label);
          if (rs[i].coin >= 0) {
            scoreTabLabel.node.color = new cc.Color(255, 0, 0);
            scoreTabLabel.string = "+" + rs[i].coin;
          } else {
            scoreTabLabel.node.color = new cc.Color(0, 120, 200);
            scoreTabLabel.string = rs[i].coin;
          }
        }
      },
      start: function start() {},
      allBtnCallback: function allBtnCallback(event, name) {
        cc.log(name);
        "return" == name && wsft.gameData.jumpMainScene();
      },
      initAllBtn: function initAllBtn() {
        var self = this;
        var btnHader = function btnHader(btn, name) {
          wsft.event.addBtnEvent(btn, self.node, "bigGameOverLayer", "allBtnCallback", name);
        };
        btnHader(this.node.getChildByName("return_btn"), "return");
      }
    });
    cc._RF.pop();
  }, {} ],
  bytebuffer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a42fcvBnE9G2IrQEzvBPd5V", "bytebuffer");
    "use strict";
    var _typeof = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(obj) {
      return typeof obj;
    } : function(obj) {
      return obj && "function" === typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    (function(global, factory) {
      "function" === typeof define && define["amd"] ? define([ "long" ], factory) : "function" === typeof require && "object" === ("undefined" === typeof module ? "undefined" : _typeof(module)) && module && module["exports"] ? module["exports"] = function() {
        var Long;
        try {
          Long = require("long");
        } catch (e) {}
        return factory(Long);
      }() : (global["dcodeIO"] = global["dcodeIO"] || {})["ByteBuffer"] = factory(global["dcodeIO"]["Long"]);
    })(void 0, function(Long) {
      var ByteBuffer = function ByteBuffer(capacity, littleEndian, noAssert) {
        "undefined" === typeof capacity && (capacity = ByteBuffer.DEFAULT_CAPACITY);
        "undefined" === typeof littleEndian && (littleEndian = ByteBuffer.DEFAULT_ENDIAN);
        "undefined" === typeof noAssert && (noAssert = ByteBuffer.DEFAULT_NOASSERT);
        if (!noAssert) {
          capacity |= 0;
          if (capacity < 0) throw RangeError("Illegal capacity");
          littleEndian = !!littleEndian;
          noAssert = !!noAssert;
        }
        this.buffer = 0 === capacity ? EMPTY_BUFFER : new ArrayBuffer(capacity);
        this.view = 0 === capacity ? null : new Uint8Array(this.buffer);
        this.offset = 0;
        this.markedOffset = -1;
        this.limit = capacity;
        this.littleEndian = littleEndian;
        this.noAssert = noAssert;
      };
      ByteBuffer.VERSION = "5.0.1";
      ByteBuffer.LITTLE_ENDIAN = true;
      ByteBuffer.BIG_ENDIAN = false;
      ByteBuffer.DEFAULT_CAPACITY = 16;
      ByteBuffer.DEFAULT_ENDIAN = ByteBuffer.BIG_ENDIAN;
      ByteBuffer.DEFAULT_NOASSERT = false;
      ByteBuffer.Long = Long || null;
      var ByteBufferPrototype = ByteBuffer.prototype;
      ByteBufferPrototype.__isByteBuffer__;
      Object.defineProperty(ByteBufferPrototype, "__isByteBuffer__", {
        value: true,
        enumerable: false,
        configurable: false
      });
      var EMPTY_BUFFER = new ArrayBuffer(0);
      var stringFromCharCode = String.fromCharCode;
      function stringSource(s) {
        var i = 0;
        return function() {
          return i < s.length ? s.charCodeAt(i++) : null;
        };
      }
      function stringDestination() {
        var cs = [], ps = [];
        return function() {
          if (0 === arguments.length) return ps.join("") + stringFromCharCode.apply(String, cs);
          cs.length + arguments.length > 1024 && (ps.push(stringFromCharCode.apply(String, cs)), 
          cs.length = 0);
          Array.prototype.push.apply(cs, arguments);
        };
      }
      ByteBuffer.accessor = function() {
        return Uint8Array;
      };
      ByteBuffer.allocate = function(capacity, littleEndian, noAssert) {
        return new ByteBuffer(capacity, littleEndian, noAssert);
      };
      ByteBuffer.concat = function(buffers, encoding, littleEndian, noAssert) {
        if ("boolean" === typeof encoding || "string" !== typeof encoding) {
          noAssert = littleEndian;
          littleEndian = encoding;
          encoding = void 0;
        }
        var capacity = 0;
        for (var i = 0, k = buffers.length, length; i < k; ++i) {
          ByteBuffer.isByteBuffer(buffers[i]) || (buffers[i] = ByteBuffer.wrap(buffers[i], encoding));
          length = buffers[i].limit - buffers[i].offset;
          length > 0 && (capacity += length);
        }
        if (0 === capacity) return new ByteBuffer(0, littleEndian, noAssert);
        var bb = new ByteBuffer(capacity, littleEndian, noAssert), bi;
        i = 0;
        while (i < k) {
          bi = buffers[i++];
          length = bi.limit - bi.offset;
          if (length <= 0) continue;
          bb.view.set(bi.view.subarray(bi.offset, bi.limit), bb.offset);
          bb.offset += length;
        }
        bb.limit = bb.offset;
        bb.offset = 0;
        return bb;
      };
      ByteBuffer.isByteBuffer = function(bb) {
        return true === (bb && bb["__isByteBuffer__"]);
      };
      ByteBuffer.type = function() {
        return ArrayBuffer;
      };
      ByteBuffer.wrap = function(buffer, encoding, littleEndian, noAssert) {
        if ("string" !== typeof encoding) {
          noAssert = littleEndian;
          littleEndian = encoding;
          encoding = void 0;
        }
        if ("string" === typeof buffer) {
          "undefined" === typeof encoding && (encoding = "utf8");
          switch (encoding) {
           case "base64":
            return ByteBuffer.fromBase64(buffer, littleEndian);

           case "hex":
            return ByteBuffer.fromHex(buffer, littleEndian);

           case "binary":
            return ByteBuffer.fromBinary(buffer, littleEndian);

           case "utf8":
            return ByteBuffer.fromUTF8(buffer, littleEndian);

           case "debug":
            return ByteBuffer.fromDebug(buffer, littleEndian);

           default:
            throw Error("Unsupported encoding: " + encoding);
          }
        }
        if (null === buffer || "object" !== ("undefined" === typeof buffer ? "undefined" : _typeof(buffer))) throw TypeError("Illegal buffer");
        var bb;
        if (ByteBuffer.isByteBuffer(buffer)) {
          bb = ByteBufferPrototype.clone.call(buffer);
          bb.markedOffset = -1;
          return bb;
        }
        if (buffer instanceof Uint8Array) {
          bb = new ByteBuffer(0, littleEndian, noAssert);
          if (buffer.length > 0) {
            bb.buffer = buffer.buffer;
            bb.offset = buffer.byteOffset;
            bb.limit = buffer.byteOffset + buffer.byteLength;
            bb.view = new Uint8Array(buffer.buffer);
          }
        } else if (buffer instanceof ArrayBuffer) {
          bb = new ByteBuffer(0, littleEndian, noAssert);
          if (buffer.byteLength > 0) {
            bb.buffer = buffer;
            bb.offset = 0;
            bb.limit = buffer.byteLength;
            bb.view = buffer.byteLength > 0 ? new Uint8Array(buffer) : null;
          }
        } else {
          if ("[object Array]" !== Object.prototype.toString.call(buffer)) throw TypeError("Illegal buffer");
          bb = new ByteBuffer(buffer.length, littleEndian, noAssert);
          bb.limit = buffer.length;
          for (var i = 0; i < buffer.length; ++i) bb.view[i] = buffer[i];
        }
        return bb;
      };
      ByteBufferPrototype.writeBitSet = function(value, offset) {
        var relative = "undefined" === typeof offset;
        relative && (offset = this.offset);
        if (!this.noAssert) {
          if (!(value instanceof Array)) throw TypeError("Illegal BitSet: Not an array");
          if ("number" !== typeof offset || offset % 1 !== 0) throw TypeError("Illegal offset: " + offset + " (not an integer)");
          offset >>>= 0;
          if (offset < 0 || offset + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + offset + " (+0) <= " + this.buffer.byteLength);
        }
        var start = offset, bits = value.length, bytes = bits >> 3, bit = 0, k;
        offset += this.writeVarint32(bits, offset);
        while (bytes--) {
          k = 1 & !!value[bit++] | (1 & !!value[bit++]) << 1 | (1 & !!value[bit++]) << 2 | (1 & !!value[bit++]) << 3 | (1 & !!value[bit++]) << 4 | (1 & !!value[bit++]) << 5 | (1 & !!value[bit++]) << 6 | (1 & !!value[bit++]) << 7;
          this.writeByte(k, offset++);
        }
        if (bit < bits) {
          var m = 0;
          k = 0;
          while (bit < bits) k |= (1 & !!value[bit++]) << m++;
          this.writeByte(k, offset++);
        }
        if (relative) {
          this.offset = offset;
          return this;
        }
        return offset - start;
      };
      ByteBufferPrototype.readBitSet = function(offset) {
        var relative = "undefined" === typeof offset;
        relative && (offset = this.offset);
        var ret = this.readVarint32(offset), bits = ret.value, bytes = bits >> 3, bit = 0, value = [], k;
        offset += ret.length;
        while (bytes--) {
          k = this.readByte(offset++);
          value[bit++] = !!(1 & k);
          value[bit++] = !!(2 & k);
          value[bit++] = !!(4 & k);
          value[bit++] = !!(8 & k);
          value[bit++] = !!(16 & k);
          value[bit++] = !!(32 & k);
          value[bit++] = !!(64 & k);
          value[bit++] = !!(128 & k);
        }
        if (bit < bits) {
          var m = 0;
          k = this.readByte(offset++);
          while (bit < bits) value[bit++] = !!(k >> m++ & 1);
        }
        relative && (this.offset = offset);
        return value;
      };
      ByteBufferPrototype.readBytes = function(length, offset) {
        var relative = "undefined" === typeof offset;
        relative && (offset = this.offset);
        if (!this.noAssert) {
          if ("number" !== typeof offset || offset % 1 !== 0) throw TypeError("Illegal offset: " + offset + " (not an integer)");
          offset >>>= 0;
          if (offset < 0 || offset + length > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + offset + " (+" + length + ") <= " + this.buffer.byteLength);
        }
        var slice = this.slice(offset, offset + length);
        relative && (this.offset += length);
        return slice;
      };
      ByteBufferPrototype.writeBytes = ByteBufferPrototype.append;
      ByteBufferPrototype.writeInt8 = function(value, offset) {
        var relative = "undefined" === typeof offset;
        relative && (offset = this.offset);
        if (!this.noAssert) {
          if ("number" !== typeof value || value % 1 !== 0) throw TypeError("Illegal value: " + value + " (not an integer)");
          value |= 0;
          if ("number" !== typeof offset || offset % 1 !== 0) throw TypeError("Illegal offset: " + offset + " (not an integer)");
          offset >>>= 0;
          if (offset < 0 || offset + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + offset + " (+0) <= " + this.buffer.byteLength);
        }
        offset += 1;
        var capacity0 = this.buffer.byteLength;
        offset > capacity0 && this.resize((capacity0 *= 2) > offset ? capacity0 : offset);
        offset -= 1;
        this.view[offset] = value;
        relative && (this.offset += 1);
        return this;
      };
      ByteBufferPrototype.writeByte = ByteBufferPrototype.writeInt8;
      ByteBufferPrototype.readInt8 = function(offset) {
        var relative = "undefined" === typeof offset;
        relative && (offset = this.offset);
        if (!this.noAssert) {
          if ("number" !== typeof offset || offset % 1 !== 0) throw TypeError("Illegal offset: " + offset + " (not an integer)");
          offset >>>= 0;
          if (offset < 0 || offset + 1 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + offset + " (+1) <= " + this.buffer.byteLength);
        }
        var value = this.view[offset];
        128 === (128 & value) && (value = -(255 - value + 1));
        relative && (this.offset += 1);
        return value;
      };
      ByteBufferPrototype.readByte = ByteBufferPrototype.readInt8;
      ByteBufferPrototype.writeUint8 = function(value, offset) {
        var relative = "undefined" === typeof offset;
        relative && (offset = this.offset);
        if (!this.noAssert) {
          if ("number" !== typeof value || value % 1 !== 0) throw TypeError("Illegal value: " + value + " (not an integer)");
          value >>>= 0;
          if ("number" !== typeof offset || offset % 1 !== 0) throw TypeError("Illegal offset: " + offset + " (not an integer)");
          offset >>>= 0;
          if (offset < 0 || offset + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + offset + " (+0) <= " + this.buffer.byteLength);
        }
        offset += 1;
        var capacity1 = this.buffer.byteLength;
        offset > capacity1 && this.resize((capacity1 *= 2) > offset ? capacity1 : offset);
        offset -= 1;
        this.view[offset] = value;
        relative && (this.offset += 1);
        return this;
      };
      ByteBufferPrototype.writeUInt8 = ByteBufferPrototype.writeUint8;
      ByteBufferPrototype.readUint8 = function(offset) {
        var relative = "undefined" === typeof offset;
        relative && (offset = this.offset);
        if (!this.noAssert) {
          if ("number" !== typeof offset || offset % 1 !== 0) throw TypeError("Illegal offset: " + offset + " (not an integer)");
          offset >>>= 0;
          if (offset < 0 || offset + 1 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + offset + " (+1) <= " + this.buffer.byteLength);
        }
        var value = this.view[offset];
        relative && (this.offset += 1);
        return value;
      };
      ByteBufferPrototype.readUInt8 = ByteBufferPrototype.readUint8;
      ByteBufferPrototype.writeInt16 = function(value, offset) {
        var relative = "undefined" === typeof offset;
        relative && (offset = this.offset);
        if (!this.noAssert) {
          if ("number" !== typeof value || value % 1 !== 0) throw TypeError("Illegal value: " + value + " (not an integer)");
          value |= 0;
          if ("number" !== typeof offset || offset % 1 !== 0) throw TypeError("Illegal offset: " + offset + " (not an integer)");
          offset >>>= 0;
          if (offset < 0 || offset + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + offset + " (+0) <= " + this.buffer.byteLength);
        }
        offset += 2;
        var capacity2 = this.buffer.byteLength;
        offset > capacity2 && this.resize((capacity2 *= 2) > offset ? capacity2 : offset);
        offset -= 2;
        if (this.littleEndian) {
          this.view[offset + 1] = (65280 & value) >>> 8;
          this.view[offset] = 255 & value;
        } else {
          this.view[offset] = (65280 & value) >>> 8;
          this.view[offset + 1] = 255 & value;
        }
        relative && (this.offset += 2);
        return this;
      };
      ByteBufferPrototype.writeShort = ByteBufferPrototype.writeInt16;
      ByteBufferPrototype.readInt16 = function(offset) {
        var relative = "undefined" === typeof offset;
        relative && (offset = this.offset);
        if (!this.noAssert) {
          if ("number" !== typeof offset || offset % 1 !== 0) throw TypeError("Illegal offset: " + offset + " (not an integer)");
          offset >>>= 0;
          if (offset < 0 || offset + 2 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + offset + " (+2) <= " + this.buffer.byteLength);
        }
        var value = 0;
        if (this.littleEndian) {
          value = this.view[offset];
          value |= this.view[offset + 1] << 8;
        } else {
          value = this.view[offset] << 8;
          value |= this.view[offset + 1];
        }
        32768 === (32768 & value) && (value = -(65535 - value + 1));
        relative && (this.offset += 2);
        return value;
      };
      ByteBufferPrototype.readShort = ByteBufferPrototype.readInt16;
      ByteBufferPrototype.writeUint16 = function(value, offset) {
        var relative = "undefined" === typeof offset;
        relative && (offset = this.offset);
        if (!this.noAssert) {
          if ("number" !== typeof value || value % 1 !== 0) throw TypeError("Illegal value: " + value + " (not an integer)");
          value >>>= 0;
          if ("number" !== typeof offset || offset % 1 !== 0) throw TypeError("Illegal offset: " + offset + " (not an integer)");
          offset >>>= 0;
          if (offset < 0 || offset + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + offset + " (+0) <= " + this.buffer.byteLength);
        }
        offset += 2;
        var capacity3 = this.buffer.byteLength;
        offset > capacity3 && this.resize((capacity3 *= 2) > offset ? capacity3 : offset);
        offset -= 2;
        if (this.littleEndian) {
          this.view[offset + 1] = (65280 & value) >>> 8;
          this.view[offset] = 255 & value;
        } else {
          this.view[offset] = (65280 & value) >>> 8;
          this.view[offset + 1] = 255 & value;
        }
        relative && (this.offset += 2);
        return this;
      };
      ByteBufferPrototype.writeUInt16 = ByteBufferPrototype.writeUint16;
      ByteBufferPrototype.readUint16 = function(offset) {
        var relative = "undefined" === typeof offset;
        relative && (offset = this.offset);
        if (!this.noAssert) {
          if ("number" !== typeof offset || offset % 1 !== 0) throw TypeError("Illegal offset: " + offset + " (not an integer)");
          offset >>>= 0;
          if (offset < 0 || offset + 2 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + offset + " (+2) <= " + this.buffer.byteLength);
        }
        var value = 0;
        if (this.littleEndian) {
          value = this.view[offset];
          value |= this.view[offset + 1] << 8;
        } else {
          value = this.view[offset] << 8;
          value |= this.view[offset + 1];
        }
        relative && (this.offset += 2);
        return value;
      };
      ByteBufferPrototype.readUInt16 = ByteBufferPrototype.readUint16;
      ByteBufferPrototype.writeInt32 = function(value, offset) {
        var relative = "undefined" === typeof offset;
        relative && (offset = this.offset);
        if (!this.noAssert) {
          if ("number" !== typeof value || value % 1 !== 0) throw TypeError("Illegal value: " + value + " (not an integer)");
          value |= 0;
          if ("number" !== typeof offset || offset % 1 !== 0) throw TypeError("Illegal offset: " + offset + " (not an integer)");
          offset >>>= 0;
          if (offset < 0 || offset + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + offset + " (+0) <= " + this.buffer.byteLength);
        }
        offset += 4;
        var capacity4 = this.buffer.byteLength;
        offset > capacity4 && this.resize((capacity4 *= 2) > offset ? capacity4 : offset);
        offset -= 4;
        if (this.littleEndian) {
          this.view[offset + 3] = value >>> 24 & 255;
          this.view[offset + 2] = value >>> 16 & 255;
          this.view[offset + 1] = value >>> 8 & 255;
          this.view[offset] = 255 & value;
        } else {
          this.view[offset] = value >>> 24 & 255;
          this.view[offset + 1] = value >>> 16 & 255;
          this.view[offset + 2] = value >>> 8 & 255;
          this.view[offset + 3] = 255 & value;
        }
        relative && (this.offset += 4);
        return this;
      };
      ByteBufferPrototype.writeInt = ByteBufferPrototype.writeInt32;
      ByteBufferPrototype.readInt32 = function(offset) {
        var relative = "undefined" === typeof offset;
        relative && (offset = this.offset);
        if (!this.noAssert) {
          if ("number" !== typeof offset || offset % 1 !== 0) throw TypeError("Illegal offset: " + offset + " (not an integer)");
          offset >>>= 0;
          if (offset < 0 || offset + 4 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + offset + " (+4) <= " + this.buffer.byteLength);
        }
        var value = 0;
        if (this.littleEndian) {
          value = this.view[offset + 2] << 16;
          value |= this.view[offset + 1] << 8;
          value |= this.view[offset];
          value += this.view[offset + 3] << 24 >>> 0;
        } else {
          value = this.view[offset + 1] << 16;
          value |= this.view[offset + 2] << 8;
          value |= this.view[offset + 3];
          value += this.view[offset] << 24 >>> 0;
        }
        value |= 0;
        relative && (this.offset += 4);
        return value;
      };
      ByteBufferPrototype.readInt = ByteBufferPrototype.readInt32;
      ByteBufferPrototype.writeUint32 = function(value, offset) {
        var relative = "undefined" === typeof offset;
        relative && (offset = this.offset);
        if (!this.noAssert) {
          if ("number" !== typeof value || value % 1 !== 0) throw TypeError("Illegal value: " + value + " (not an integer)");
          value >>>= 0;
          if ("number" !== typeof offset || offset % 1 !== 0) throw TypeError("Illegal offset: " + offset + " (not an integer)");
          offset >>>= 0;
          if (offset < 0 || offset + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + offset + " (+0) <= " + this.buffer.byteLength);
        }
        offset += 4;
        var capacity5 = this.buffer.byteLength;
        offset > capacity5 && this.resize((capacity5 *= 2) > offset ? capacity5 : offset);
        offset -= 4;
        if (this.littleEndian) {
          this.view[offset + 3] = value >>> 24 & 255;
          this.view[offset + 2] = value >>> 16 & 255;
          this.view[offset + 1] = value >>> 8 & 255;
          this.view[offset] = 255 & value;
        } else {
          this.view[offset] = value >>> 24 & 255;
          this.view[offset + 1] = value >>> 16 & 255;
          this.view[offset + 2] = value >>> 8 & 255;
          this.view[offset + 3] = 255 & value;
        }
        relative && (this.offset += 4);
        return this;
      };
      ByteBufferPrototype.writeUInt32 = ByteBufferPrototype.writeUint32;
      ByteBufferPrototype.readUint32 = function(offset) {
        var relative = "undefined" === typeof offset;
        relative && (offset = this.offset);
        if (!this.noAssert) {
          if ("number" !== typeof offset || offset % 1 !== 0) throw TypeError("Illegal offset: " + offset + " (not an integer)");
          offset >>>= 0;
          if (offset < 0 || offset + 4 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + offset + " (+4) <= " + this.buffer.byteLength);
        }
        var value = 0;
        if (this.littleEndian) {
          value = this.view[offset + 2] << 16;
          value |= this.view[offset + 1] << 8;
          value |= this.view[offset];
          value += this.view[offset + 3] << 24 >>> 0;
        } else {
          value = this.view[offset + 1] << 16;
          value |= this.view[offset + 2] << 8;
          value |= this.view[offset + 3];
          value += this.view[offset] << 24 >>> 0;
        }
        relative && (this.offset += 4);
        return value;
      };
      ByteBufferPrototype.readUInt32 = ByteBufferPrototype.readUint32;
      if (Long) {
        ByteBufferPrototype.writeInt64 = function(value, offset) {
          var relative = "undefined" === typeof offset;
          relative && (offset = this.offset);
          if (!this.noAssert) {
            if ("number" === typeof value) value = Long.fromNumber(value); else if ("string" === typeof value) value = Long.fromString(value); else if (!(value && value instanceof Long)) throw TypeError("Illegal value: " + value + " (not an integer or Long)");
            if ("number" !== typeof offset || offset % 1 !== 0) throw TypeError("Illegal offset: " + offset + " (not an integer)");
            offset >>>= 0;
            if (offset < 0 || offset + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + offset + " (+0) <= " + this.buffer.byteLength);
          }
          "number" === typeof value ? value = Long.fromNumber(value) : "string" === typeof value && (value = Long.fromString(value));
          offset += 8;
          var capacity6 = this.buffer.byteLength;
          offset > capacity6 && this.resize((capacity6 *= 2) > offset ? capacity6 : offset);
          offset -= 8;
          var lo = value.low, hi = value.high;
          if (this.littleEndian) {
            this.view[offset + 3] = lo >>> 24 & 255;
            this.view[offset + 2] = lo >>> 16 & 255;
            this.view[offset + 1] = lo >>> 8 & 255;
            this.view[offset] = 255 & lo;
            offset += 4;
            this.view[offset + 3] = hi >>> 24 & 255;
            this.view[offset + 2] = hi >>> 16 & 255;
            this.view[offset + 1] = hi >>> 8 & 255;
            this.view[offset] = 255 & hi;
          } else {
            this.view[offset] = hi >>> 24 & 255;
            this.view[offset + 1] = hi >>> 16 & 255;
            this.view[offset + 2] = hi >>> 8 & 255;
            this.view[offset + 3] = 255 & hi;
            offset += 4;
            this.view[offset] = lo >>> 24 & 255;
            this.view[offset + 1] = lo >>> 16 & 255;
            this.view[offset + 2] = lo >>> 8 & 255;
            this.view[offset + 3] = 255 & lo;
          }
          relative && (this.offset += 8);
          return this;
        };
        ByteBufferPrototype.writeLong = ByteBufferPrototype.writeInt64;
        ByteBufferPrototype.readInt64 = function(offset) {
          var relative = "undefined" === typeof offset;
          relative && (offset = this.offset);
          if (!this.noAssert) {
            if ("number" !== typeof offset || offset % 1 !== 0) throw TypeError("Illegal offset: " + offset + " (not an integer)");
            offset >>>= 0;
            if (offset < 0 || offset + 8 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + offset + " (+8) <= " + this.buffer.byteLength);
          }
          var lo = 0, hi = 0;
          if (this.littleEndian) {
            lo = this.view[offset + 2] << 16;
            lo |= this.view[offset + 1] << 8;
            lo |= this.view[offset];
            lo += this.view[offset + 3] << 24 >>> 0;
            offset += 4;
            hi = this.view[offset + 2] << 16;
            hi |= this.view[offset + 1] << 8;
            hi |= this.view[offset];
            hi += this.view[offset + 3] << 24 >>> 0;
          } else {
            hi = this.view[offset + 1] << 16;
            hi |= this.view[offset + 2] << 8;
            hi |= this.view[offset + 3];
            hi += this.view[offset] << 24 >>> 0;
            offset += 4;
            lo = this.view[offset + 1] << 16;
            lo |= this.view[offset + 2] << 8;
            lo |= this.view[offset + 3];
            lo += this.view[offset] << 24 >>> 0;
          }
          var value = new Long(lo, hi, false);
          relative && (this.offset += 8);
          return value;
        };
        ByteBufferPrototype.readLong = ByteBufferPrototype.readInt64;
        ByteBufferPrototype.writeUint64 = function(value, offset) {
          var relative = "undefined" === typeof offset;
          relative && (offset = this.offset);
          if (!this.noAssert) {
            if ("number" === typeof value) value = Long.fromNumber(value); else if ("string" === typeof value) value = Long.fromString(value); else if (!(value && value instanceof Long)) throw TypeError("Illegal value: " + value + " (not an integer or Long)");
            if ("number" !== typeof offset || offset % 1 !== 0) throw TypeError("Illegal offset: " + offset + " (not an integer)");
            offset >>>= 0;
            if (offset < 0 || offset + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + offset + " (+0) <= " + this.buffer.byteLength);
          }
          "number" === typeof value ? value = Long.fromNumber(value) : "string" === typeof value && (value = Long.fromString(value));
          offset += 8;
          var capacity7 = this.buffer.byteLength;
          offset > capacity7 && this.resize((capacity7 *= 2) > offset ? capacity7 : offset);
          offset -= 8;
          var lo = value.low, hi = value.high;
          if (this.littleEndian) {
            this.view[offset + 3] = lo >>> 24 & 255;
            this.view[offset + 2] = lo >>> 16 & 255;
            this.view[offset + 1] = lo >>> 8 & 255;
            this.view[offset] = 255 & lo;
            offset += 4;
            this.view[offset + 3] = hi >>> 24 & 255;
            this.view[offset + 2] = hi >>> 16 & 255;
            this.view[offset + 1] = hi >>> 8 & 255;
            this.view[offset] = 255 & hi;
          } else {
            this.view[offset] = hi >>> 24 & 255;
            this.view[offset + 1] = hi >>> 16 & 255;
            this.view[offset + 2] = hi >>> 8 & 255;
            this.view[offset + 3] = 255 & hi;
            offset += 4;
            this.view[offset] = lo >>> 24 & 255;
            this.view[offset + 1] = lo >>> 16 & 255;
            this.view[offset + 2] = lo >>> 8 & 255;
            this.view[offset + 3] = 255 & lo;
          }
          relative && (this.offset += 8);
          return this;
        };
        ByteBufferPrototype.writeUInt64 = ByteBufferPrototype.writeUint64;
        ByteBufferPrototype.readUint64 = function(offset) {
          var relative = "undefined" === typeof offset;
          relative && (offset = this.offset);
          if (!this.noAssert) {
            if ("number" !== typeof offset || offset % 1 !== 0) throw TypeError("Illegal offset: " + offset + " (not an integer)");
            offset >>>= 0;
            if (offset < 0 || offset + 8 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + offset + " (+8) <= " + this.buffer.byteLength);
          }
          var lo = 0, hi = 0;
          if (this.littleEndian) {
            lo = this.view[offset + 2] << 16;
            lo |= this.view[offset + 1] << 8;
            lo |= this.view[offset];
            lo += this.view[offset + 3] << 24 >>> 0;
            offset += 4;
            hi = this.view[offset + 2] << 16;
            hi |= this.view[offset + 1] << 8;
            hi |= this.view[offset];
            hi += this.view[offset + 3] << 24 >>> 0;
          } else {
            hi = this.view[offset + 1] << 16;
            hi |= this.view[offset + 2] << 8;
            hi |= this.view[offset + 3];
            hi += this.view[offset] << 24 >>> 0;
            offset += 4;
            lo = this.view[offset + 1] << 16;
            lo |= this.view[offset + 2] << 8;
            lo |= this.view[offset + 3];
            lo += this.view[offset] << 24 >>> 0;
          }
          var value = new Long(lo, hi, true);
          relative && (this.offset += 8);
          return value;
        };
        ByteBufferPrototype.readUInt64 = ByteBufferPrototype.readUint64;
      }
      function ieee754_read(buffer, offset, isLE, mLen, nBytes) {
        var e, m, eLen = 8 * nBytes - mLen - 1, eMax = (1 << eLen) - 1, eBias = eMax >> 1, nBits = -7, i = isLE ? nBytes - 1 : 0, d = isLE ? -1 : 1, s = buffer[offset + i];
        i += d;
        e = s & (1 << -nBits) - 1;
        s >>= -nBits;
        nBits += eLen;
        for (;nBits > 0; e = 256 * e + buffer[offset + i], i += d, nBits -= 8) ;
        m = e & (1 << -nBits) - 1;
        e >>= -nBits;
        nBits += mLen;
        for (;nBits > 0; m = 256 * m + buffer[offset + i], i += d, nBits -= 8) ;
        if (0 === e) e = 1 - eBias; else {
          if (e === eMax) return m ? NaN : Infinity * (s ? -1 : 1);
          m += Math.pow(2, mLen);
          e -= eBias;
        }
        return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
      }
      function ieee754_write(buffer, value, offset, isLE, mLen, nBytes) {
        var e, m, c, eLen = 8 * nBytes - mLen - 1, eMax = (1 << eLen) - 1, eBias = eMax >> 1, rt = 23 === mLen ? Math.pow(2, -24) - Math.pow(2, -77) : 0, i = isLE ? 0 : nBytes - 1, d = isLE ? 1 : -1, s = value < 0 || 0 === value && 1 / value < 0 ? 1 : 0;
        value = Math.abs(value);
        if (isNaN(value) || Infinity === value) {
          m = isNaN(value) ? 1 : 0;
          e = eMax;
        } else {
          e = Math.floor(Math.log(value) / Math.LN2);
          if (value * (c = Math.pow(2, -e)) < 1) {
            e--;
            c *= 2;
          }
          value += e + eBias >= 1 ? rt / c : rt * Math.pow(2, 1 - eBias);
          if (value * c >= 2) {
            e++;
            c /= 2;
          }
          if (e + eBias >= eMax) {
            m = 0;
            e = eMax;
          } else if (e + eBias >= 1) {
            m = (value * c - 1) * Math.pow(2, mLen);
            e += eBias;
          } else {
            m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
            e = 0;
          }
        }
        for (;mLen >= 8; buffer[offset + i] = 255 & m, i += d, m /= 256, mLen -= 8) ;
        e = e << mLen | m;
        eLen += mLen;
        for (;eLen > 0; buffer[offset + i] = 255 & e, i += d, e /= 256, eLen -= 8) ;
        buffer[offset + i - d] |= 128 * s;
      }
      ByteBufferPrototype.writeFloat32 = function(value, offset) {
        var relative = "undefined" === typeof offset;
        relative && (offset = this.offset);
        if (!this.noAssert) {
          if ("number" !== typeof value) throw TypeError("Illegal value: " + value + " (not a number)");
          if ("number" !== typeof offset || offset % 1 !== 0) throw TypeError("Illegal offset: " + offset + " (not an integer)");
          offset >>>= 0;
          if (offset < 0 || offset + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + offset + " (+0) <= " + this.buffer.byteLength);
        }
        offset += 4;
        var capacity8 = this.buffer.byteLength;
        offset > capacity8 && this.resize((capacity8 *= 2) > offset ? capacity8 : offset);
        offset -= 4;
        ieee754_write(this.view, value, offset, this.littleEndian, 23, 4);
        relative && (this.offset += 4);
        return this;
      };
      ByteBufferPrototype.writeFloat = ByteBufferPrototype.writeFloat32;
      ByteBufferPrototype.readFloat32 = function(offset) {
        var relative = "undefined" === typeof offset;
        relative && (offset = this.offset);
        if (!this.noAssert) {
          if ("number" !== typeof offset || offset % 1 !== 0) throw TypeError("Illegal offset: " + offset + " (not an integer)");
          offset >>>= 0;
          if (offset < 0 || offset + 4 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + offset + " (+4) <= " + this.buffer.byteLength);
        }
        var value = ieee754_read(this.view, offset, this.littleEndian, 23, 4);
        relative && (this.offset += 4);
        return value;
      };
      ByteBufferPrototype.readFloat = ByteBufferPrototype.readFloat32;
      ByteBufferPrototype.writeFloat64 = function(value, offset) {
        var relative = "undefined" === typeof offset;
        relative && (offset = this.offset);
        if (!this.noAssert) {
          if ("number" !== typeof value) throw TypeError("Illegal value: " + value + " (not a number)");
          if ("number" !== typeof offset || offset % 1 !== 0) throw TypeError("Illegal offset: " + offset + " (not an integer)");
          offset >>>= 0;
          if (offset < 0 || offset + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + offset + " (+0) <= " + this.buffer.byteLength);
        }
        offset += 8;
        var capacity9 = this.buffer.byteLength;
        offset > capacity9 && this.resize((capacity9 *= 2) > offset ? capacity9 : offset);
        offset -= 8;
        ieee754_write(this.view, value, offset, this.littleEndian, 52, 8);
        relative && (this.offset += 8);
        return this;
      };
      ByteBufferPrototype.writeDouble = ByteBufferPrototype.writeFloat64;
      ByteBufferPrototype.readFloat64 = function(offset) {
        var relative = "undefined" === typeof offset;
        relative && (offset = this.offset);
        if (!this.noAssert) {
          if ("number" !== typeof offset || offset % 1 !== 0) throw TypeError("Illegal offset: " + offset + " (not an integer)");
          offset >>>= 0;
          if (offset < 0 || offset + 8 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + offset + " (+8) <= " + this.buffer.byteLength);
        }
        var value = ieee754_read(this.view, offset, this.littleEndian, 52, 8);
        relative && (this.offset += 8);
        return value;
      };
      ByteBufferPrototype.readDouble = ByteBufferPrototype.readFloat64;
      ByteBuffer.MAX_VARINT32_BYTES = 5;
      ByteBuffer.calculateVarint32 = function(value) {
        value >>>= 0;
        return value < 128 ? 1 : value < 16384 ? 2 : value < 1 << 21 ? 3 : value < 1 << 28 ? 4 : 5;
      };
      ByteBuffer.zigZagEncode32 = function(n) {
        return ((n |= 0) << 1 ^ n >> 31) >>> 0;
      };
      ByteBuffer.zigZagDecode32 = function(n) {
        return n >>> 1 ^ -(1 & n) | 0;
      };
      ByteBufferPrototype.writeVarint32 = function(value, offset) {
        var relative = "undefined" === typeof offset;
        relative && (offset = this.offset);
        if (!this.noAssert) {
          if ("number" !== typeof value || value % 1 !== 0) throw TypeError("Illegal value: " + value + " (not an integer)");
          value |= 0;
          if ("number" !== typeof offset || offset % 1 !== 0) throw TypeError("Illegal offset: " + offset + " (not an integer)");
          offset >>>= 0;
          if (offset < 0 || offset + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + offset + " (+0) <= " + this.buffer.byteLength);
        }
        var size = ByteBuffer.calculateVarint32(value), b;
        offset += size;
        var capacity10 = this.buffer.byteLength;
        offset > capacity10 && this.resize((capacity10 *= 2) > offset ? capacity10 : offset);
        offset -= size;
        value >>>= 0;
        while (value >= 128) {
          b = 127 & value | 128;
          this.view[offset++] = b;
          value >>>= 7;
        }
        this.view[offset++] = value;
        if (relative) {
          this.offset = offset;
          return this;
        }
        return size;
      };
      ByteBufferPrototype.writeVarint32ZigZag = function(value, offset) {
        return this.writeVarint32(ByteBuffer.zigZagEncode32(value), offset);
      };
      ByteBufferPrototype.readVarint32 = function(offset) {
        var relative = "undefined" === typeof offset;
        relative && (offset = this.offset);
        if (!this.noAssert) {
          if ("number" !== typeof offset || offset % 1 !== 0) throw TypeError("Illegal offset: " + offset + " (not an integer)");
          offset >>>= 0;
          if (offset < 0 || offset + 1 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + offset + " (+1) <= " + this.buffer.byteLength);
        }
        var c = 0, value = 0, b;
        do {
          if (!this.noAssert && offset > this.limit) {
            var err = Error("Truncated");
            err["truncated"] = true;
            throw err;
          }
          b = this.view[offset++];
          c < 5 && (value |= (127 & b) << 7 * c);
          ++c;
        } while (0 !== (128 & b));
        value |= 0;
        if (relative) {
          this.offset = offset;
          return value;
        }
        return {
          value: value,
          length: c
        };
      };
      ByteBufferPrototype.readVarint32ZigZag = function(offset) {
        var val = this.readVarint32(offset);
        "object" === ("undefined" === typeof val ? "undefined" : _typeof(val)) ? val["value"] = ByteBuffer.zigZagDecode32(val["value"]) : val = ByteBuffer.zigZagDecode32(val);
        return val;
      };
      if (Long) {
        ByteBuffer.MAX_VARINT64_BYTES = 10;
        ByteBuffer.calculateVarint64 = function(value) {
          "number" === typeof value ? value = Long.fromNumber(value) : "string" === typeof value && (value = Long.fromString(value));
          var part0 = value.toInt() >>> 0, part1 = value.shiftRightUnsigned(28).toInt() >>> 0, part2 = value.shiftRightUnsigned(56).toInt() >>> 0;
          return 0 == part2 ? 0 == part1 ? part0 < 16384 ? part0 < 128 ? 1 : 2 : part0 < 1 << 21 ? 3 : 4 : part1 < 16384 ? part1 < 128 ? 5 : 6 : part1 < 1 << 21 ? 7 : 8 : part2 < 128 ? 9 : 10;
        };
        ByteBuffer.zigZagEncode64 = function(value) {
          "number" === typeof value ? value = Long.fromNumber(value, false) : "string" === typeof value ? value = Long.fromString(value, false) : false !== value.unsigned && (value = value.toSigned());
          return value.shiftLeft(1).xor(value.shiftRight(63)).toUnsigned();
        };
        ByteBuffer.zigZagDecode64 = function(value) {
          "number" === typeof value ? value = Long.fromNumber(value, false) : "string" === typeof value ? value = Long.fromString(value, false) : false !== value.unsigned && (value = value.toSigned());
          return value.shiftRightUnsigned(1).xor(value.and(Long.ONE).toSigned().negate()).toSigned();
        };
        ByteBufferPrototype.writeVarint64 = function(value, offset) {
          var relative = "undefined" === typeof offset;
          relative && (offset = this.offset);
          if (!this.noAssert) {
            if ("number" === typeof value) value = Long.fromNumber(value); else if ("string" === typeof value) value = Long.fromString(value); else if (!(value && value instanceof Long)) throw TypeError("Illegal value: " + value + " (not an integer or Long)");
            if ("number" !== typeof offset || offset % 1 !== 0) throw TypeError("Illegal offset: " + offset + " (not an integer)");
            offset >>>= 0;
            if (offset < 0 || offset + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + offset + " (+0) <= " + this.buffer.byteLength);
          }
          "number" === typeof value ? value = Long.fromNumber(value, false) : "string" === typeof value ? value = Long.fromString(value, false) : false !== value.unsigned && (value = value.toSigned());
          var size = ByteBuffer.calculateVarint64(value), part0 = value.toInt() >>> 0, part1 = value.shiftRightUnsigned(28).toInt() >>> 0, part2 = value.shiftRightUnsigned(56).toInt() >>> 0;
          offset += size;
          var capacity11 = this.buffer.byteLength;
          offset > capacity11 && this.resize((capacity11 *= 2) > offset ? capacity11 : offset);
          offset -= size;
          switch (size) {
           case 10:
            this.view[offset + 9] = part2 >>> 7 & 1;

           case 9:
            this.view[offset + 8] = 9 !== size ? 128 | part2 : 127 & part2;

           case 8:
            this.view[offset + 7] = 8 !== size ? part1 >>> 21 | 128 : part1 >>> 21 & 127;

           case 7:
            this.view[offset + 6] = 7 !== size ? part1 >>> 14 | 128 : part1 >>> 14 & 127;

           case 6:
            this.view[offset + 5] = 6 !== size ? part1 >>> 7 | 128 : part1 >>> 7 & 127;

           case 5:
            this.view[offset + 4] = 5 !== size ? 128 | part1 : 127 & part1;

           case 4:
            this.view[offset + 3] = 4 !== size ? part0 >>> 21 | 128 : part0 >>> 21 & 127;

           case 3:
            this.view[offset + 2] = 3 !== size ? part0 >>> 14 | 128 : part0 >>> 14 & 127;

           case 2:
            this.view[offset + 1] = 2 !== size ? part0 >>> 7 | 128 : part0 >>> 7 & 127;

           case 1:
            this.view[offset] = 1 !== size ? 128 | part0 : 127 & part0;
          }
          if (relative) {
            this.offset += size;
            return this;
          }
          return size;
        };
        ByteBufferPrototype.writeVarint64ZigZag = function(value, offset) {
          return this.writeVarint64(ByteBuffer.zigZagEncode64(value), offset);
        };
        ByteBufferPrototype.readVarint64 = function(offset) {
          var relative = "undefined" === typeof offset;
          relative && (offset = this.offset);
          if (!this.noAssert) {
            if ("number" !== typeof offset || offset % 1 !== 0) throw TypeError("Illegal offset: " + offset + " (not an integer)");
            offset >>>= 0;
            if (offset < 0 || offset + 1 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + offset + " (+1) <= " + this.buffer.byteLength);
          }
          var start = offset, part0 = 0, part1 = 0, part2 = 0, b = 0;
          b = this.view[offset++];
          part0 = 127 & b;
          if (128 & b) {
            b = this.view[offset++];
            part0 |= (127 & b) << 7;
            if (128 & b || this.noAssert && "undefined" === typeof b) {
              b = this.view[offset++];
              part0 |= (127 & b) << 14;
              if (128 & b || this.noAssert && "undefined" === typeof b) {
                b = this.view[offset++];
                part0 |= (127 & b) << 21;
                if (128 & b || this.noAssert && "undefined" === typeof b) {
                  b = this.view[offset++];
                  part1 = 127 & b;
                  if (128 & b || this.noAssert && "undefined" === typeof b) {
                    b = this.view[offset++];
                    part1 |= (127 & b) << 7;
                    if (128 & b || this.noAssert && "undefined" === typeof b) {
                      b = this.view[offset++];
                      part1 |= (127 & b) << 14;
                      if (128 & b || this.noAssert && "undefined" === typeof b) {
                        b = this.view[offset++];
                        part1 |= (127 & b) << 21;
                        if (128 & b || this.noAssert && "undefined" === typeof b) {
                          b = this.view[offset++];
                          part2 = 127 & b;
                          if (128 & b || this.noAssert && "undefined" === typeof b) {
                            b = this.view[offset++];
                            part2 |= (127 & b) << 7;
                            if (128 & b || this.noAssert && "undefined" === typeof b) throw Error("Buffer overrun");
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          var value = Long.fromBits(part0 | part1 << 28, part1 >>> 4 | part2 << 24, false);
          if (relative) {
            this.offset = offset;
            return value;
          }
          return {
            value: value,
            length: offset - start
          };
        };
        ByteBufferPrototype.readVarint64ZigZag = function(offset) {
          var val = this.readVarint64(offset);
          val && val["value"] instanceof Long ? val["value"] = ByteBuffer.zigZagDecode64(val["value"]) : val = ByteBuffer.zigZagDecode64(val);
          return val;
        };
      }
      ByteBufferPrototype.writeCString = function(str, offset) {
        var relative = "undefined" === typeof offset;
        relative && (offset = this.offset);
        var i, k = str.length;
        if (!this.noAssert) {
          if ("string" !== typeof str) throw TypeError("Illegal str: Not a string");
          for (i = 0; i < k; ++i) if (0 === str.charCodeAt(i)) throw RangeError("Illegal str: Contains NULL-characters");
          if ("number" !== typeof offset || offset % 1 !== 0) throw TypeError("Illegal offset: " + offset + " (not an integer)");
          offset >>>= 0;
          if (offset < 0 || offset + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + offset + " (+0) <= " + this.buffer.byteLength);
        }
        k = utfx.calculateUTF16asUTF8(stringSource(str))[1];
        offset += k + 1;
        var capacity12 = this.buffer.byteLength;
        offset > capacity12 && this.resize((capacity12 *= 2) > offset ? capacity12 : offset);
        offset -= k + 1;
        utfx.encodeUTF16toUTF8(stringSource(str), function(b) {
          this.view[offset++] = b;
        }.bind(this));
        this.view[offset++] = 0;
        if (relative) {
          this.offset = offset;
          return this;
        }
        return k;
      };
      ByteBufferPrototype.readCString = function(offset) {
        var relative = "undefined" === typeof offset;
        relative && (offset = this.offset);
        if (!this.noAssert) {
          if ("number" !== typeof offset || offset % 1 !== 0) throw TypeError("Illegal offset: " + offset + " (not an integer)");
          offset >>>= 0;
          if (offset < 0 || offset + 1 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + offset + " (+1) <= " + this.buffer.byteLength);
        }
        var start = offset, temp;
        var sd, b = -1;
        utfx.decodeUTF8toUTF16(function() {
          if (0 === b) return null;
          if (offset >= this.limit) throw RangeError("Illegal range: Truncated data, " + offset + " < " + this.limit);
          b = this.view[offset++];
          return 0 === b ? null : b;
        }.bind(this), sd = stringDestination(), true);
        if (relative) {
          this.offset = offset;
          return sd();
        }
        return {
          string: sd(),
          length: offset - start
        };
      };
      ByteBufferPrototype.writeIString = function(str, offset) {
        var relative = "undefined" === typeof offset;
        relative && (offset = this.offset);
        if (!this.noAssert) {
          if ("string" !== typeof str) throw TypeError("Illegal str: Not a string");
          if ("number" !== typeof offset || offset % 1 !== 0) throw TypeError("Illegal offset: " + offset + " (not an integer)");
          offset >>>= 0;
          if (offset < 0 || offset + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + offset + " (+0) <= " + this.buffer.byteLength);
        }
        var start = offset, k;
        k = utfx.calculateUTF16asUTF8(stringSource(str), this.noAssert)[1];
        offset += 4 + k;
        var capacity13 = this.buffer.byteLength;
        offset > capacity13 && this.resize((capacity13 *= 2) > offset ? capacity13 : offset);
        offset -= 4 + k;
        if (this.littleEndian) {
          this.view[offset + 3] = k >>> 24 & 255;
          this.view[offset + 2] = k >>> 16 & 255;
          this.view[offset + 1] = k >>> 8 & 255;
          this.view[offset] = 255 & k;
        } else {
          this.view[offset] = k >>> 24 & 255;
          this.view[offset + 1] = k >>> 16 & 255;
          this.view[offset + 2] = k >>> 8 & 255;
          this.view[offset + 3] = 255 & k;
        }
        offset += 4;
        utfx.encodeUTF16toUTF8(stringSource(str), function(b) {
          this.view[offset++] = b;
        }.bind(this));
        if (offset !== start + 4 + k) throw RangeError("Illegal range: Truncated data, " + offset + " == " + (offset + 4 + k));
        if (relative) {
          this.offset = offset;
          return this;
        }
        return offset - start;
      };
      ByteBufferPrototype.readIString = function(offset) {
        var relative = "undefined" === typeof offset;
        relative && (offset = this.offset);
        if (!this.noAssert) {
          if ("number" !== typeof offset || offset % 1 !== 0) throw TypeError("Illegal offset: " + offset + " (not an integer)");
          offset >>>= 0;
          if (offset < 0 || offset + 4 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + offset + " (+4) <= " + this.buffer.byteLength);
        }
        var start = offset;
        var len = this.readUint32(offset);
        var str = this.readUTF8String(len, ByteBuffer.METRICS_BYTES, offset += 4);
        offset += str["length"];
        if (relative) {
          this.offset = offset;
          return str["string"];
        }
        return {
          string: str["string"],
          length: offset - start
        };
      };
      ByteBuffer.METRICS_CHARS = "c";
      ByteBuffer.METRICS_BYTES = "b";
      ByteBufferPrototype.writeUTF8String = function(str, offset) {
        var relative = "undefined" === typeof offset;
        relative && (offset = this.offset);
        if (!this.noAssert) {
          if ("number" !== typeof offset || offset % 1 !== 0) throw TypeError("Illegal offset: " + offset + " (not an integer)");
          offset >>>= 0;
          if (offset < 0 || offset + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + offset + " (+0) <= " + this.buffer.byteLength);
        }
        var k;
        var start = offset;
        k = utfx.calculateUTF16asUTF8(stringSource(str))[1];
        offset += k;
        var capacity14 = this.buffer.byteLength;
        offset > capacity14 && this.resize((capacity14 *= 2) > offset ? capacity14 : offset);
        offset -= k;
        utfx.encodeUTF16toUTF8(stringSource(str), function(b) {
          this.view[offset++] = b;
        }.bind(this));
        if (relative) {
          this.offset = offset;
          return this;
        }
        return offset - start;
      };
      ByteBufferPrototype.writeString = ByteBufferPrototype.writeUTF8String;
      ByteBuffer.calculateUTF8Chars = function(str) {
        return utfx.calculateUTF16asUTF8(stringSource(str))[0];
      };
      ByteBuffer.calculateUTF8Bytes = function(str) {
        return utfx.calculateUTF16asUTF8(stringSource(str))[1];
      };
      ByteBuffer.calculateString = ByteBuffer.calculateUTF8Bytes;
      ByteBufferPrototype.readUTF8String = function(length, metrics, offset) {
        if ("number" === typeof metrics) {
          offset = metrics;
          metrics = void 0;
        }
        var relative = "undefined" === typeof offset;
        relative && (offset = this.offset);
        "undefined" === typeof metrics && (metrics = ByteBuffer.METRICS_CHARS);
        if (!this.noAssert) {
          if ("number" !== typeof length || length % 1 !== 0) throw TypeError("Illegal length: " + length + " (not an integer)");
          length |= 0;
          if ("number" !== typeof offset || offset % 1 !== 0) throw TypeError("Illegal offset: " + offset + " (not an integer)");
          offset >>>= 0;
          if (offset < 0 || offset + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + offset + " (+0) <= " + this.buffer.byteLength);
        }
        var i = 0, start = offset, sd;
        if (metrics === ByteBuffer.METRICS_CHARS) {
          sd = stringDestination();
          utfx.decodeUTF8(function() {
            return i < length && offset < this.limit ? this.view[offset++] : null;
          }.bind(this), function(cp) {
            ++i;
            utfx.UTF8toUTF16(cp, sd);
          });
          if (i !== length) throw RangeError("Illegal range: Truncated data, " + i + " == " + length);
          if (relative) {
            this.offset = offset;
            return sd();
          }
          return {
            string: sd(),
            length: offset - start
          };
        }
        if (metrics === ByteBuffer.METRICS_BYTES) {
          if (!this.noAssert) {
            if ("number" !== typeof offset || offset % 1 !== 0) throw TypeError("Illegal offset: " + offset + " (not an integer)");
            offset >>>= 0;
            if (offset < 0 || offset + length > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + offset + " (+" + length + ") <= " + this.buffer.byteLength);
          }
          var k = offset + length;
          utfx.decodeUTF8toUTF16(function() {
            return offset < k ? this.view[offset++] : null;
          }.bind(this), sd = stringDestination(), this.noAssert);
          if (offset !== k) throw RangeError("Illegal range: Truncated data, " + offset + " == " + k);
          if (relative) {
            this.offset = offset;
            return sd();
          }
          return {
            string: sd(),
            length: offset - start
          };
        }
        throw TypeError("Unsupported metrics: " + metrics);
      };
      ByteBufferPrototype.readString = ByteBufferPrototype.readUTF8String;
      ByteBufferPrototype.writeVString = function(str, offset) {
        var relative = "undefined" === typeof offset;
        relative && (offset = this.offset);
        if (!this.noAssert) {
          if ("string" !== typeof str) throw TypeError("Illegal str: Not a string");
          if ("number" !== typeof offset || offset % 1 !== 0) throw TypeError("Illegal offset: " + offset + " (not an integer)");
          offset >>>= 0;
          if (offset < 0 || offset + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + offset + " (+0) <= " + this.buffer.byteLength);
        }
        var start = offset, k, l;
        k = utfx.calculateUTF16asUTF8(stringSource(str), this.noAssert)[1];
        l = ByteBuffer.calculateVarint32(k);
        offset += l + k;
        var capacity15 = this.buffer.byteLength;
        offset > capacity15 && this.resize((capacity15 *= 2) > offset ? capacity15 : offset);
        offset -= l + k;
        offset += this.writeVarint32(k, offset);
        utfx.encodeUTF16toUTF8(stringSource(str), function(b) {
          this.view[offset++] = b;
        }.bind(this));
        if (offset !== start + k + l) throw RangeError("Illegal range: Truncated data, " + offset + " == " + (offset + k + l));
        if (relative) {
          this.offset = offset;
          return this;
        }
        return offset - start;
      };
      ByteBufferPrototype.readVString = function(offset) {
        var relative = "undefined" === typeof offset;
        relative && (offset = this.offset);
        if (!this.noAssert) {
          if ("number" !== typeof offset || offset % 1 !== 0) throw TypeError("Illegal offset: " + offset + " (not an integer)");
          offset >>>= 0;
          if (offset < 0 || offset + 1 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + offset + " (+1) <= " + this.buffer.byteLength);
        }
        var start = offset;
        var len = this.readVarint32(offset);
        var str = this.readUTF8String(len["value"], ByteBuffer.METRICS_BYTES, offset += len["length"]);
        offset += str["length"];
        if (relative) {
          this.offset = offset;
          return str["string"];
        }
        return {
          string: str["string"],
          length: offset - start
        };
      };
      ByteBufferPrototype.append = function(source, encoding, offset) {
        if ("number" === typeof encoding || "string" !== typeof encoding) {
          offset = encoding;
          encoding = void 0;
        }
        var relative = "undefined" === typeof offset;
        relative && (offset = this.offset);
        if (!this.noAssert) {
          if ("number" !== typeof offset || offset % 1 !== 0) throw TypeError("Illegal offset: " + offset + " (not an integer)");
          offset >>>= 0;
          if (offset < 0 || offset + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + offset + " (+0) <= " + this.buffer.byteLength);
        }
        source instanceof ByteBuffer || (source = ByteBuffer.wrap(source, encoding));
        var length = source.limit - source.offset;
        if (length <= 0) return this;
        offset += length;
        var capacity16 = this.buffer.byteLength;
        offset > capacity16 && this.resize((capacity16 *= 2) > offset ? capacity16 : offset);
        offset -= length;
        this.view.set(source.view.subarray(source.offset, source.limit), offset);
        source.offset += length;
        relative && (this.offset += length);
        return this;
      };
      ByteBufferPrototype.appendTo = function(target, offset) {
        target.append(this, offset);
        return this;
      };
      ByteBufferPrototype.assert = function(assert) {
        this.noAssert = !assert;
        return this;
      };
      ByteBufferPrototype.capacity = function() {
        return this.buffer.byteLength;
      };
      ByteBufferPrototype.clear = function() {
        this.offset = 0;
        this.limit = this.buffer.byteLength;
        this.markedOffset = -1;
        return this;
      };
      ByteBufferPrototype.clone = function(copy) {
        var bb = new ByteBuffer(0, this.littleEndian, this.noAssert);
        if (copy) {
          bb.buffer = new ArrayBuffer(this.buffer.byteLength);
          bb.view = new Uint8Array(bb.buffer);
        } else {
          bb.buffer = this.buffer;
          bb.view = this.view;
        }
        bb.offset = this.offset;
        bb.markedOffset = this.markedOffset;
        bb.limit = this.limit;
        return bb;
      };
      ByteBufferPrototype.compact = function(begin, end) {
        "undefined" === typeof begin && (begin = this.offset);
        "undefined" === typeof end && (end = this.limit);
        if (!this.noAssert) {
          if ("number" !== typeof begin || begin % 1 !== 0) throw TypeError("Illegal begin: Not an integer");
          begin >>>= 0;
          if ("number" !== typeof end || end % 1 !== 0) throw TypeError("Illegal end: Not an integer");
          end >>>= 0;
          if (begin < 0 || begin > end || end > this.buffer.byteLength) throw RangeError("Illegal range: 0 <= " + begin + " <= " + end + " <= " + this.buffer.byteLength);
        }
        if (0 === begin && end === this.buffer.byteLength) return this;
        var len = end - begin;
        if (0 === len) {
          this.buffer = EMPTY_BUFFER;
          this.view = null;
          this.markedOffset >= 0 && (this.markedOffset -= begin);
          this.offset = 0;
          this.limit = 0;
          return this;
        }
        var buffer = new ArrayBuffer(len);
        var view = new Uint8Array(buffer);
        view.set(this.view.subarray(begin, end));
        this.buffer = buffer;
        this.view = view;
        this.markedOffset >= 0 && (this.markedOffset -= begin);
        this.offset = 0;
        this.limit = len;
        return this;
      };
      ByteBufferPrototype.copy = function(begin, end) {
        "undefined" === typeof begin && (begin = this.offset);
        "undefined" === typeof end && (end = this.limit);
        if (!this.noAssert) {
          if ("number" !== typeof begin || begin % 1 !== 0) throw TypeError("Illegal begin: Not an integer");
          begin >>>= 0;
          if ("number" !== typeof end || end % 1 !== 0) throw TypeError("Illegal end: Not an integer");
          end >>>= 0;
          if (begin < 0 || begin > end || end > this.buffer.byteLength) throw RangeError("Illegal range: 0 <= " + begin + " <= " + end + " <= " + this.buffer.byteLength);
        }
        if (begin === end) return new ByteBuffer(0, this.littleEndian, this.noAssert);
        var capacity = end - begin, bb = new ByteBuffer(capacity, this.littleEndian, this.noAssert);
        bb.offset = 0;
        bb.limit = capacity;
        bb.markedOffset >= 0 && (bb.markedOffset -= begin);
        this.copyTo(bb, 0, begin, end);
        return bb;
      };
      ByteBufferPrototype.copyTo = function(target, targetOffset, sourceOffset, sourceLimit) {
        var relative, targetRelative;
        if (!this.noAssert && !ByteBuffer.isByteBuffer(target)) throw TypeError("Illegal target: Not a ByteBuffer");
        targetOffset = (targetRelative = "undefined" === typeof targetOffset) ? target.offset : 0 | targetOffset;
        sourceOffset = (relative = "undefined" === typeof sourceOffset) ? this.offset : 0 | sourceOffset;
        sourceLimit = "undefined" === typeof sourceLimit ? this.limit : 0 | sourceLimit;
        if (targetOffset < 0 || targetOffset > target.buffer.byteLength) throw RangeError("Illegal target range: 0 <= " + targetOffset + " <= " + target.buffer.byteLength);
        if (sourceOffset < 0 || sourceLimit > this.buffer.byteLength) throw RangeError("Illegal source range: 0 <= " + sourceOffset + " <= " + this.buffer.byteLength);
        var len = sourceLimit - sourceOffset;
        if (0 === len) return target;
        target.ensureCapacity(targetOffset + len);
        target.view.set(this.view.subarray(sourceOffset, sourceLimit), targetOffset);
        relative && (this.offset += len);
        targetRelative && (target.offset += len);
        return this;
      };
      ByteBufferPrototype.ensureCapacity = function(capacity) {
        var current = this.buffer.byteLength;
        if (current < capacity) return this.resize((current *= 2) > capacity ? current : capacity);
        return this;
      };
      ByteBufferPrototype.fill = function(value, begin, end) {
        var relative = "undefined" === typeof begin;
        relative && (begin = this.offset);
        "string" === typeof value && value.length > 0 && (value = value.charCodeAt(0));
        "undefined" === typeof begin && (begin = this.offset);
        "undefined" === typeof end && (end = this.limit);
        if (!this.noAssert) {
          if ("number" !== typeof value || value % 1 !== 0) throw TypeError("Illegal value: " + value + " (not an integer)");
          value |= 0;
          if ("number" !== typeof begin || begin % 1 !== 0) throw TypeError("Illegal begin: Not an integer");
          begin >>>= 0;
          if ("number" !== typeof end || end % 1 !== 0) throw TypeError("Illegal end: Not an integer");
          end >>>= 0;
          if (begin < 0 || begin > end || end > this.buffer.byteLength) throw RangeError("Illegal range: 0 <= " + begin + " <= " + end + " <= " + this.buffer.byteLength);
        }
        if (begin >= end) return this;
        while (begin < end) this.view[begin++] = value;
        relative && (this.offset = begin);
        return this;
      };
      ByteBufferPrototype.flip = function() {
        this.limit = this.offset;
        this.offset = 0;
        return this;
      };
      ByteBufferPrototype.mark = function(offset) {
        offset = "undefined" === typeof offset ? this.offset : offset;
        if (!this.noAssert) {
          if ("number" !== typeof offset || offset % 1 !== 0) throw TypeError("Illegal offset: " + offset + " (not an integer)");
          offset >>>= 0;
          if (offset < 0 || offset + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + offset + " (+0) <= " + this.buffer.byteLength);
        }
        this.markedOffset = offset;
        return this;
      };
      ByteBufferPrototype.order = function(littleEndian) {
        if (!this.noAssert && "boolean" !== typeof littleEndian) throw TypeError("Illegal littleEndian: Not a boolean");
        this.littleEndian = !!littleEndian;
        return this;
      };
      ByteBufferPrototype.LE = function(littleEndian) {
        this.littleEndian = "undefined" === typeof littleEndian || !!littleEndian;
        return this;
      };
      ByteBufferPrototype.BE = function(bigEndian) {
        this.littleEndian = "undefined" !== typeof bigEndian && !bigEndian;
        return this;
      };
      ByteBufferPrototype.prepend = function(source, encoding, offset) {
        if ("number" === typeof encoding || "string" !== typeof encoding) {
          offset = encoding;
          encoding = void 0;
        }
        var relative = "undefined" === typeof offset;
        relative && (offset = this.offset);
        if (!this.noAssert) {
          if ("number" !== typeof offset || offset % 1 !== 0) throw TypeError("Illegal offset: " + offset + " (not an integer)");
          offset >>>= 0;
          if (offset < 0 || offset + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + offset + " (+0) <= " + this.buffer.byteLength);
        }
        source instanceof ByteBuffer || (source = ByteBuffer.wrap(source, encoding));
        var len = source.limit - source.offset;
        if (len <= 0) return this;
        var diff = len - offset;
        if (diff > 0) {
          var buffer = new ArrayBuffer(this.buffer.byteLength + diff);
          var view = new Uint8Array(buffer);
          view.set(this.view.subarray(offset, this.buffer.byteLength), len);
          this.buffer = buffer;
          this.view = view;
          this.offset += diff;
          this.markedOffset >= 0 && (this.markedOffset += diff);
          this.limit += diff;
          offset += diff;
        } else var arrayView = new Uint8Array(this.buffer);
        this.view.set(source.view.subarray(source.offset, source.limit), offset - len);
        source.offset = source.limit;
        relative && (this.offset -= len);
        return this;
      };
      ByteBufferPrototype.prependTo = function(target, offset) {
        target.prepend(this, offset);
        return this;
      };
      ByteBufferPrototype.printDebug = function(out) {
        "function" !== typeof out && (out = console.log.bind(console));
        out(this.toString() + "\n-------------------------------------------------------------------\n" + this.toDebug(true));
      };
      ByteBufferPrototype.remaining = function() {
        return this.limit - this.offset;
      };
      ByteBufferPrototype.reset = function() {
        if (this.markedOffset >= 0) {
          this.offset = this.markedOffset;
          this.markedOffset = -1;
        } else this.offset = 0;
        return this;
      };
      ByteBufferPrototype.resize = function(capacity) {
        if (!this.noAssert) {
          if ("number" !== typeof capacity || capacity % 1 !== 0) throw TypeError("Illegal capacity: " + capacity + " (not an integer)");
          capacity |= 0;
          if (capacity < 0) throw RangeError("Illegal capacity: 0 <= " + capacity);
        }
        if (this.buffer.byteLength < capacity) {
          var buffer = new ArrayBuffer(capacity);
          var view = new Uint8Array(buffer);
          view.set(this.view);
          this.buffer = buffer;
          this.view = view;
        }
        return this;
      };
      ByteBufferPrototype.reverse = function(begin, end) {
        "undefined" === typeof begin && (begin = this.offset);
        "undefined" === typeof end && (end = this.limit);
        if (!this.noAssert) {
          if ("number" !== typeof begin || begin % 1 !== 0) throw TypeError("Illegal begin: Not an integer");
          begin >>>= 0;
          if ("number" !== typeof end || end % 1 !== 0) throw TypeError("Illegal end: Not an integer");
          end >>>= 0;
          if (begin < 0 || begin > end || end > this.buffer.byteLength) throw RangeError("Illegal range: 0 <= " + begin + " <= " + end + " <= " + this.buffer.byteLength);
        }
        if (begin === end) return this;
        Array.prototype.reverse.call(this.view.subarray(begin, end));
        return this;
      };
      ByteBufferPrototype.skip = function(length) {
        if (!this.noAssert) {
          if ("number" !== typeof length || length % 1 !== 0) throw TypeError("Illegal length: " + length + " (not an integer)");
          length |= 0;
        }
        var offset = this.offset + length;
        if (!this.noAssert && (offset < 0 || offset > this.buffer.byteLength)) throw RangeError("Illegal length: 0 <= " + this.offset + " + " + length + " <= " + this.buffer.byteLength);
        this.offset = offset;
        return this;
      };
      ByteBufferPrototype.slice = function(begin, end) {
        "undefined" === typeof begin && (begin = this.offset);
        "undefined" === typeof end && (end = this.limit);
        if (!this.noAssert) {
          if ("number" !== typeof begin || begin % 1 !== 0) throw TypeError("Illegal begin: Not an integer");
          begin >>>= 0;
          if ("number" !== typeof end || end % 1 !== 0) throw TypeError("Illegal end: Not an integer");
          end >>>= 0;
          if (begin < 0 || begin > end || end > this.buffer.byteLength) throw RangeError("Illegal range: 0 <= " + begin + " <= " + end + " <= " + this.buffer.byteLength);
        }
        var bb = this.clone();
        bb.offset = begin;
        bb.limit = end;
        return bb;
      };
      ByteBufferPrototype.toBuffer = function(forceCopy) {
        var offset = this.offset, limit = this.limit;
        if (!this.noAssert) {
          if ("number" !== typeof offset || offset % 1 !== 0) throw TypeError("Illegal offset: Not an integer");
          offset >>>= 0;
          if ("number" !== typeof limit || limit % 1 !== 0) throw TypeError("Illegal limit: Not an integer");
          limit >>>= 0;
          if (offset < 0 || offset > limit || limit > this.buffer.byteLength) throw RangeError("Illegal range: 0 <= " + offset + " <= " + limit + " <= " + this.buffer.byteLength);
        }
        if (!forceCopy && 0 === offset && limit === this.buffer.byteLength) return this.buffer;
        if (offset === limit) return EMPTY_BUFFER;
        var buffer = new ArrayBuffer(limit - offset);
        new Uint8Array(buffer).set(new Uint8Array(this.buffer).subarray(offset, limit), 0);
        return buffer;
      };
      ByteBufferPrototype.toArrayBuffer = ByteBufferPrototype.toBuffer;
      ByteBufferPrototype.toString = function(encoding, begin, end) {
        if ("undefined" === typeof encoding) return "ByteBufferAB(offset=" + this.offset + ",markedOffset=" + this.markedOffset + ",limit=" + this.limit + ",capacity=" + this.capacity() + ")";
        "number" === typeof encoding && (encoding = "utf8", begin = encoding, end = begin);
        switch (encoding) {
         case "utf8":
          return this.toUTF8(begin, end);

         case "base64":
          return this.toBase64(begin, end);

         case "hex":
          return this.toHex(begin, end);

         case "binary":
          return this.toBinary(begin, end);

         case "debug":
          return this.toDebug();

         case "columns":
          return this.toColumns();

         default:
          throw Error("Unsupported encoding: " + encoding);
        }
      };
      var lxiv = function() {
        var lxiv = {};
        var aout = [ 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 43, 47 ];
        var ain = [];
        for (var i = 0, k = aout.length; i < k; ++i) ain[aout[i]] = i;
        lxiv.encode = function(src, dst) {
          var b, t;
          while (null !== (b = src())) {
            dst(aout[b >> 2 & 63]);
            t = (3 & b) << 4;
            if (null !== (b = src())) {
              t |= b >> 4 & 15;
              dst(aout[63 & (t | b >> 4 & 15)]);
              t = (15 & b) << 2;
              null !== (b = src()) ? (dst(aout[63 & (t | b >> 6 & 3)]), dst(aout[63 & b])) : (dst(aout[63 & t]), 
              dst(61));
            } else dst(aout[63 & t]), dst(61), dst(61);
          }
        };
        lxiv.decode = function(src, dst) {
          var c, t1, t2;
          function fail(c) {
            throw Error("Illegal character code: " + c);
          }
          while (null !== (c = src())) {
            t1 = ain[c];
            "undefined" === typeof t1 && fail(c);
            if (null !== (c = src())) {
              t2 = ain[c];
              "undefined" === typeof t2 && fail(c);
              dst(t1 << 2 >>> 0 | (48 & t2) >> 4);
              if (null !== (c = src())) {
                t1 = ain[c];
                if ("undefined" === typeof t1) {
                  if (61 === c) break;
                  fail(c);
                }
                dst((15 & t2) << 4 >>> 0 | (60 & t1) >> 2);
                if (null !== (c = src())) {
                  t2 = ain[c];
                  if ("undefined" === typeof t2) {
                    if (61 === c) break;
                    fail(c);
                  }
                  dst((3 & t1) << 6 >>> 0 | t2);
                }
              }
            }
          }
        };
        lxiv.test = function(str) {
          return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(str);
        };
        return lxiv;
      }();
      ByteBufferPrototype.toBase64 = function(begin, end) {
        "undefined" === typeof begin && (begin = this.offset);
        "undefined" === typeof end && (end = this.limit);
        begin |= 0;
        end |= 0;
        if (begin < 0 || end > this.capacity || begin > end) throw RangeError("begin, end");
        var sd;
        lxiv.encode(function() {
          return begin < end ? this.view[begin++] : null;
        }.bind(this), sd = stringDestination());
        return sd();
      };
      ByteBuffer.fromBase64 = function(str, littleEndian) {
        if ("string" !== typeof str) throw TypeError("str");
        var bb = new ByteBuffer(str.length / 4 * 3, littleEndian), i = 0;
        lxiv.decode(stringSource(str), function(b) {
          bb.view[i++] = b;
        });
        bb.limit = i;
        return bb;
      };
      ByteBuffer.btoa = function(str) {
        return ByteBuffer.fromBinary(str).toBase64();
      };
      ByteBuffer.atob = function(b64) {
        return ByteBuffer.fromBase64(b64).toBinary();
      };
      ByteBufferPrototype.toBinary = function(begin, end) {
        "undefined" === typeof begin && (begin = this.offset);
        "undefined" === typeof end && (end = this.limit);
        begin |= 0;
        end |= 0;
        if (begin < 0 || end > this.capacity() || begin > end) throw RangeError("begin, end");
        if (begin === end) return "";
        var chars = [], parts = [];
        while (begin < end) {
          chars.push(this.view[begin++]);
          chars.length >= 1024 && (parts.push(String.fromCharCode.apply(String, chars)), chars = []);
        }
        return parts.join("") + String.fromCharCode.apply(String, chars);
      };
      ByteBuffer.fromBinary = function(str, littleEndian) {
        if ("string" !== typeof str) throw TypeError("str");
        var i = 0, k = str.length, charCode, bb = new ByteBuffer(k, littleEndian);
        while (i < k) {
          charCode = str.charCodeAt(i);
          if (charCode > 255) throw RangeError("illegal char code: " + charCode);
          bb.view[i++] = charCode;
        }
        bb.limit = k;
        return bb;
      };
      ByteBufferPrototype.toDebug = function(columns) {
        var i = -1, k = this.buffer.byteLength, b, hex = "", asc = "", out = "";
        while (i < k) {
          if (-1 !== i) {
            b = this.view[i];
            hex += b < 16 ? "0" + b.toString(16).toUpperCase() : b.toString(16).toUpperCase();
            columns && (asc += b > 32 && b < 127 ? String.fromCharCode(b) : ".");
          }
          ++i;
          if (columns && i > 0 && i % 16 === 0 && i !== k) {
            while (hex.length < 51) hex += " ";
            out += hex + asc + "\n";
            hex = asc = "";
          }
          i === this.offset && i === this.limit ? hex += i === this.markedOffset ? "!" : "|" : i === this.offset ? hex += i === this.markedOffset ? "[" : "<" : i === this.limit ? hex += i === this.markedOffset ? "]" : ">" : hex += i === this.markedOffset ? "'" : columns || 0 !== i && i !== k ? " " : "";
        }
        if (columns && " " !== hex) {
          while (hex.length < 51) hex += " ";
          out += hex + asc + "\n";
        }
        return columns ? out : hex;
      };
      ByteBuffer.fromDebug = function(str, littleEndian, noAssert) {
        var k = str.length, bb = new ByteBuffer((k + 1) / 3 | 0, littleEndian, noAssert);
        var i = 0, j = 0, ch, b, rs = false, ho = false, hm = false, hl = false, fail = false;
        while (i < k) {
          switch (ch = str.charAt(i++)) {
           case "!":
            if (!noAssert) {
              if (ho || hm || hl) {
                fail = true;
                break;
              }
              ho = hm = hl = true;
            }
            bb.offset = bb.markedOffset = bb.limit = j;
            rs = false;
            break;

           case "|":
            if (!noAssert) {
              if (ho || hl) {
                fail = true;
                break;
              }
              ho = hl = true;
            }
            bb.offset = bb.limit = j;
            rs = false;
            break;

           case "[":
            if (!noAssert) {
              if (ho || hm) {
                fail = true;
                break;
              }
              ho = hm = true;
            }
            bb.offset = bb.markedOffset = j;
            rs = false;
            break;

           case "<":
            if (!noAssert) {
              if (ho) {
                fail = true;
                break;
              }
              ho = true;
            }
            bb.offset = j;
            rs = false;
            break;

           case "]":
            if (!noAssert) {
              if (hl || hm) {
                fail = true;
                break;
              }
              hl = hm = true;
            }
            bb.limit = bb.markedOffset = j;
            rs = false;
            break;

           case ">":
            if (!noAssert) {
              if (hl) {
                fail = true;
                break;
              }
              hl = true;
            }
            bb.limit = j;
            rs = false;
            break;

           case "'":
            if (!noAssert) {
              if (hm) {
                fail = true;
                break;
              }
              hm = true;
            }
            bb.markedOffset = j;
            rs = false;
            break;

           case " ":
            rs = false;
            break;

           default:
            if (!noAssert && rs) {
              fail = true;
              break;
            }
            b = parseInt(ch + str.charAt(i++), 16);
            if (!noAssert && (isNaN(b) || b < 0 || b > 255)) throw TypeError("Illegal str: Not a debug encoded string");
            bb.view[j++] = b;
            rs = true;
          }
          if (fail) throw TypeError("Illegal str: Invalid symbol at " + i);
        }
        if (!noAssert) {
          if (!ho || !hl) throw TypeError("Illegal str: Missing offset or limit");
          if (j < bb.buffer.byteLength) throw TypeError("Illegal str: Not a debug encoded string (is it hex?) " + j + " < " + k);
        }
        return bb;
      };
      ByteBufferPrototype.toHex = function(begin, end) {
        begin = "undefined" === typeof begin ? this.offset : begin;
        end = "undefined" === typeof end ? this.limit : end;
        if (!this.noAssert) {
          if ("number" !== typeof begin || begin % 1 !== 0) throw TypeError("Illegal begin: Not an integer");
          begin >>>= 0;
          if ("number" !== typeof end || end % 1 !== 0) throw TypeError("Illegal end: Not an integer");
          end >>>= 0;
          if (begin < 0 || begin > end || end > this.buffer.byteLength) throw RangeError("Illegal range: 0 <= " + begin + " <= " + end + " <= " + this.buffer.byteLength);
        }
        var out = new Array(end - begin), b;
        while (begin < end) {
          b = this.view[begin++];
          b < 16 ? out.push("0", b.toString(16)) : out.push(b.toString(16));
        }
        return out.join("");
      };
      ByteBuffer.fromHex = function(str, littleEndian, noAssert) {
        if (!noAssert) {
          if ("string" !== typeof str) throw TypeError("Illegal str: Not a string");
          if (str.length % 2 !== 0) throw TypeError("Illegal str: Length not a multiple of 2");
        }
        var k = str.length, bb = new ByteBuffer(k / 2 | 0, littleEndian), b;
        for (var i = 0, j = 0; i < k; i += 2) {
          b = parseInt(str.substring(i, i + 2), 16);
          if (!noAssert && (!isFinite(b) || b < 0 || b > 255)) throw TypeError("Illegal str: Contains non-hex characters");
          bb.view[j++] = b;
        }
        bb.limit = j;
        return bb;
      };
      var utfx = function() {
        var utfx = {};
        utfx.MAX_CODEPOINT = 1114111;
        utfx.encodeUTF8 = function(src, dst) {
          var cp = null;
          "number" === typeof src && (cp = src, src = function src() {
            return null;
          });
          while (null !== cp || null !== (cp = src())) {
            cp < 128 ? dst(127 & cp) : cp < 2048 ? (dst(cp >> 6 & 31 | 192), dst(63 & cp | 128)) : cp < 65536 ? (dst(cp >> 12 & 15 | 224), 
            dst(cp >> 6 & 63 | 128), dst(63 & cp | 128)) : (dst(cp >> 18 & 7 | 240), dst(cp >> 12 & 63 | 128), 
            dst(cp >> 6 & 63 | 128), dst(63 & cp | 128));
            cp = null;
          }
        };
        utfx.decodeUTF8 = function(src, dst) {
          var a, b, c, d, fail = function fail(b) {
            b = b.slice(0, b.indexOf(null));
            var err = Error(b.toString());
            err.name = "TruncatedError";
            err["bytes"] = b;
            throw err;
          };
          while (null !== (a = src())) if (0 === (128 & a)) dst(a); else if (192 === (224 & a)) null === (b = src()) && fail([ a, b ]), 
          dst((31 & a) << 6 | 63 & b); else if (224 === (240 & a)) (null === (b = src()) || null === (c = src())) && fail([ a, b, c ]), 
          dst((15 & a) << 12 | (63 & b) << 6 | 63 & c); else {
            if (240 !== (248 & a)) throw RangeError("Illegal starting byte: " + a);
            (null === (b = src()) || null === (c = src()) || null === (d = src())) && fail([ a, b, c, d ]), 
            dst((7 & a) << 18 | (63 & b) << 12 | (63 & c) << 6 | 63 & d);
          }
        };
        utfx.UTF16toUTF8 = function(src, dst) {
          var c1, c2 = null;
          while (true) {
            if (null === (c1 = null !== c2 ? c2 : src())) break;
            if (c1 >= 55296 && c1 <= 57343 && null !== (c2 = src()) && c2 >= 56320 && c2 <= 57343) {
              dst(1024 * (c1 - 55296) + c2 - 56320 + 65536);
              c2 = null;
              continue;
            }
            dst(c1);
          }
          null !== c2 && dst(c2);
        };
        utfx.UTF8toUTF16 = function(src, dst) {
          var cp = null;
          "number" === typeof src && (cp = src, src = function src() {
            return null;
          });
          while (null !== cp || null !== (cp = src())) {
            cp <= 65535 ? dst(cp) : (cp -= 65536, dst(55296 + (cp >> 10)), dst(cp % 1024 + 56320));
            cp = null;
          }
        };
        utfx.encodeUTF16toUTF8 = function(src, dst) {
          utfx.UTF16toUTF8(src, function(cp) {
            utfx.encodeUTF8(cp, dst);
          });
        };
        utfx.decodeUTF8toUTF16 = function(src, dst) {
          utfx.decodeUTF8(src, function(cp) {
            utfx.UTF8toUTF16(cp, dst);
          });
        };
        utfx.calculateCodePoint = function(cp) {
          return cp < 128 ? 1 : cp < 2048 ? 2 : cp < 65536 ? 3 : 4;
        };
        utfx.calculateUTF8 = function(src) {
          var cp, l = 0;
          while (null !== (cp = src())) l += cp < 128 ? 1 : cp < 2048 ? 2 : cp < 65536 ? 3 : 4;
          return l;
        };
        utfx.calculateUTF16asUTF8 = function(src) {
          var n = 0, l = 0;
          utfx.UTF16toUTF8(src, function(cp) {
            ++n;
            l += cp < 128 ? 1 : cp < 2048 ? 2 : cp < 65536 ? 3 : 4;
          });
          return [ n, l ];
        };
        return utfx;
      }();
      ByteBufferPrototype.toUTF8 = function(begin, end) {
        "undefined" === typeof begin && (begin = this.offset);
        "undefined" === typeof end && (end = this.limit);
        if (!this.noAssert) {
          if ("number" !== typeof begin || begin % 1 !== 0) throw TypeError("Illegal begin: Not an integer");
          begin >>>= 0;
          if ("number" !== typeof end || end % 1 !== 0) throw TypeError("Illegal end: Not an integer");
          end >>>= 0;
          if (begin < 0 || begin > end || end > this.buffer.byteLength) throw RangeError("Illegal range: 0 <= " + begin + " <= " + end + " <= " + this.buffer.byteLength);
        }
        var sd;
        try {
          utfx.decodeUTF8toUTF16(function() {
            return begin < end ? this.view[begin++] : null;
          }.bind(this), sd = stringDestination());
        } catch (e) {
          if (begin !== end) throw RangeError("Illegal range: Truncated data, " + begin + " != " + end);
        }
        return sd();
      };
      ByteBuffer.fromUTF8 = function(str, littleEndian, noAssert) {
        if (!noAssert && "string" !== typeof str) throw TypeError("Illegal str: Not a string");
        var bb = new ByteBuffer(utfx.calculateUTF16asUTF8(stringSource(str), true)[1], littleEndian, noAssert), i = 0;
        utfx.encodeUTF16toUTF8(stringSource(str), function(b) {
          bb.view[i++] = b;
        });
        bb.limit = i;
        return bb;
      };
      return ByteBuffer;
    });
    cc._RF.pop();
  }, {
    long: "long"
  } ],
  chatLayer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3c55d3b3cJBfLnG6JawIpYR", "chatLayer");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        chatListContent: cc.Node,
        bqLayoutNode: cc.Node
      },
      onLoad: function onLoad() {
        var self = this;
        this.initAllBtn();
        this.cyyBtn = this.node.getChildByName("cyy_btn").getComponent(cc.Button);
        this.bqBtn = this.node.getChildByName("bq_btn").getComponent(cc.Button);
        this.chatListNode = this.node.getChildByName("chat_list_node");
        this.bqLayoutNode = this.node.getChildByName("bq_layout_node");
        this.chatListScroll = this.node.getChildByName("chat_list_node").getComponent(cc.ScrollView);
        var chat_bg = this.node.getChildByName("chat_bg");
        var callback = function callback() {
          self.node.active = false;
        };
        wsft.uiFuncs.bindTouchLayer(this.node, chat_bg, callback);
      },
      start: function start() {},
      onEnable: function onEnable() {
        this.cyyBtn.interactable = false;
        this.bqBtn.interactable = true;
        this.chatListNode.active = true;
        this.bqLayoutNode.active = false;
      },
      allBtnCallback: function allBtnCallback(event, name) {
        cc.log(name);
        if ("cyy" == name) {
          this.cyyBtn.interactable = false;
          this.bqBtn.interactable = true;
          this.chatListNode.active = true;
          this.bqLayoutNode.active = false;
        } else if ("bq" == name) {
          this.cyyBtn.interactable = true;
          this.bqBtn.interactable = false;
          this.chatListNode.active = false;
          this.bqLayoutNode.active = true;
          this.chatListScroll.stopAutoScroll();
          this.chatListScroll.scrollToTop(0);
        } else {
          for (var i = 1; i < 10; ++i) name == "itme_" + i && wsft.sendDataSocket.ChatRoom(i - 1, 2, "");
          for (var i = 1; i < 19; ++i) name == "bq_" + i && wsft.sendDataSocket.ChatRoom(i, 1, "");
        }
      },
      initAllBtn: function initAllBtn() {
        var self = this;
        var btnHader = function btnHader(btn, name) {
          wsft.event.addBtnEvent(btn, self.node, "chatLayer", "allBtnCallback", name);
        };
        btnHader(this.node.getChildByName("cyy_btn"), "cyy");
        btnHader(this.node.getChildByName("bq_btn"), "bq");
        for (var i = 1; i < 10; ++i) btnHader(this.chatListContent.getChildByName("itme_" + i), "itme_" + i);
        for (var i = 1; i < 19; ++i) btnHader(this.bqLayoutNode.getChildByName("bq_" + i), "bq_" + i);
      }
    });
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
  createLayer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ecffaeTnDhKf74sLLEV1Nao", "createLayer");
    "use strict";
    var RULE_NAME = [ "ChiFengMJ", "DouDiZhu" ];
    var RULE = 0;
    cc.Class({
      extends: cc.Component,
      properties: {
        contentBtn: cc.Node
      },
      onLoad: function onLoad() {
        var self = this;
        this.initAllBtn();
        this.create_rule_node_1 = this.node.getChildByName("create_rule_node_1");
        var create_bg = this.node.getChildByName("create_bg");
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
      onEnable: function onEnable() {
        wsft.loading.hide();
      },
      jumpScene: function jumpScene() {
        wsft.loading.show("\u6b63\u5728\u52a0\u8f7d\u8d44\u6e90\uff0c\u8bf7\u7a0d\u5019...");
        cc.director.loadScene("GameScene");
      },
      createRoom: function createRoom() {
        var data = {};
        data.piaohu = false;
        data.shisanyao = false;
        data.qiDui = false;
        data.qingYiSe = false;
        data.shisanyao = false;
        data.diangang = false;
        data.area = 4;
        data.timesLimit = 3;
        0 == RULE && (data.area = 4);
        var _chekedTable = this.ChiFengMJ.judgeChecked();
        for (var i = 0; i < _chekedTable.length; ++i) {
          3 == _chekedTable[i] && (data.zhifu = true);
          4 == _chekedTable[i] && (data.zhifu = false);
          5 == _chekedTable[i] && (data.num = 2);
          6 == _chekedTable[i] && (data.num = 3);
          7 == _chekedTable[i] && (data.num = 4);
          8 == _chekedTable[i] && (data.qiDui = true);
          9 == _chekedTable[i] && (data.piaohu = true);
          10 == _chekedTable[i] && (data.shisanyao = true);
          11 == _chekedTable[i] && (data.gangshangpao = true);
          12 == _chekedTable[i] && (data.qingYiSe = true);
          13 == _chekedTable[i] && (data.diangang = true);
        }
        data.bankerMode = _chekedTable[0] + 1;
        console.log(data);
        wsft.loading.show("\u6b63\u5728\u521b\u5efa\u623f\u95f4...");
        wsft.sendDataSocket.CreateRoomCm(data);
      },
      allBtnCallback: function allBtnCallback(event, name) {
        cc.log(name);
        if ("close" === name) this.node.active = false; else if ("create" == name) {
          cc.log("\u521b\u5efa\u623f\u95f4");
          this.createRoom();
        } else "btn_1" == name ? RULE = 0 : "btn_2" == name && (RULE = 1);
      },
      initAllBtn: function initAllBtn() {
        var self = this;
        var btnHader = function btnHader(btn, name) {
          wsft.event.addBtnEvent(btn, self.node, "createLayer", "allBtnCallback", name);
        };
        btnHader(this.node.getChildByName("close_btn"), "close");
        btnHader(this.contentBtn.getChildByName("btn_1"), "btn_1");
        btnHader(this.node.getChildByName("create_roon_btn"), "create");
      }
    });
    cc._RF.pop();
  }, {} ],
  dissolveRoomLayer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a42d1QygVlE+6VDoPmGORy9", "dissolveRoomLayer");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        nameTable: [],
        time_label: null,
        _time: -1
      },
      onLoad: function onLoad() {
        for (var i = 0; i < 4; ++i) {
          this.nameTable.push(this.node.getChildByName("name_label_" + i));
          this.nameTable[i].getChildByName("label").getComponent(cc.Label).string = "\u7b49\u5f85\u9009\u62e9";
        }
        this.initAllBtn();
        this.time_label = this.node.getChildByName("time_label").getComponent(cc.Label);
        this.time_label.string = "0";
      },
      start: function start() {},
      initName: function initName() {
        var seats = wsft.gameData.seats;
        for (var i = 0; i < seats.length; ++i) {
          this.nameTable[i].getComponent(cc.Label).string = seats[i].nickname;
          this.nameTable[i].getChildByName("label").getComponent(cc.Label).string = "\u7b49\u5f85\u9009\u62e9";
          this.nameTable[i].active = true;
        }
        if (4 == wsft.gameData.playerNum) {
          this.nameTable[0].y = 65;
          this.nameTable[1].y = 25;
          this.nameTable[2].y = -15;
          this.nameTable[3].y = -55;
        } else if (3 == wsft.gameData.playerNum) {
          this.nameTable[0].y = 60;
          this.nameTable[1].y = 0;
          this.nameTable[2].y = -60;
          this.nameTable[3].active = false;
        } else if (2 == wsft.gameData.playerNum) {
          this.nameTable[0].y = 40;
          this.nameTable[1].y = -40;
          this.nameTable[2].active = false;
          this.nameTable[3].active = false;
        }
      },
      refreshDada: function refreshDada(data) {
        this.showBtn();
        for (var i = 0; i < data.agreeSeetIndex.length; ++i) {
          var index = data.agreeSeetIndex[i] - 1;
          this.nameTable[index].getChildByName("label").getComponent(cc.Label).string = 0 == i ? "\u7533\u8bf7\u89e3\u6563\u623f\u95f4,\u662f\u5426\u540c\u610f\uff1f" : "\u540c\u610f";
          if (wsft.gameData.mySeatIndex == data.agreeSeetIndex[i]) {
            console.log("data.agreeSeetIndex[i]data.agreeSeetIndex[i]==", data.agreeSeetIndex[i]);
            this.hideBtn();
          }
        }
        for (var i = 0; i < data.disagreeSeetIndex.length; ++i) {
          var index = data.disagreeSeetIndex[i] - 1;
          this.nameTable[index].getChildByName("label").getComponent(cc.Label).string = "\u62d2\u7edd";
          if (wsft.gameData.mySeatIndex == data.disagreeSeetIndex[i]) {
            console.log("data.agreeSeetIndex[i]data.disagreeSeetIndex[i]==", data.disagreeSeetIndex[i]);
            this.hideBtn();
          }
        }
        this._time = Math.ceil(data.memberDisInMillis / 1e3);
      },
      hideBtn: function hideBtn() {
        var confirm = this.node.getChildByName("confirm_btn");
        var reject = this.node.getChildByName("reject_btn");
        confirm.active = false;
        reject.active = false;
      },
      showBtn: function showBtn() {
        var confirm = this.node.getChildByName("confirm_btn");
        var reject = this.node.getChildByName("reject_btn");
        confirm.active = true;
        reject.active = true;
      },
      allBtnCallback: function allBtnCallback(event, name) {
        cc.log(name);
        "confirm" == name ? wsft.sendDataSocket.ApplayDissolveRoom(true) : "reject" == name && wsft.sendDataSocket.ApplayDissolveRoom(false);
      },
      initAllBtn: function initAllBtn() {
        var self = this;
        var btnHader = function btnHader(btn, name) {
          wsft.event.addBtnEvent(btn, self.node, "dissolveRoomLayer", "allBtnCallback", name);
        };
        btnHader(this.node.getChildByName("confirm_btn"), "confirm");
        btnHader(this.node.getChildByName("reject_btn"), "reject");
      },
      update: function update(dt) {
        if (this._time > 0) {
          this._time -= dt;
          this._time < 0 && (this._time = 0);
          var t = Math.ceil(this._time);
          this.time_label.string = t;
        }
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
  fs: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "fa1b4+fF3JMxKvWO/KrWot1", "fs");
    "use strict";
    module.exports = {
      readFile: function readFile(path, cb) {
        var str = jsb.fileUtils.getStringFromFile(path);
        cb(null, str);
      },
      readFileSync: function readFileSync(path) {
        return jsb.fileUtils.getStringFromFile(path);
      }
    };
    cc._RF.pop();
  }, {} ],
  funcs: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "04e06GrD3lByJkSEyBxp3eA", "funcs");
    "use strict";
    var _typeof = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(obj) {
      return typeof obj;
    } : function(obj) {
      return obj && "function" === typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    window.wsft = window.wsft || {};
    var funcs = {
      getTxTStr: function getTxTStr(_url, callback) {
        cc.loader.loadRes(_url, function(err, data) {
          if (err) {
            wsft.uiFuncs.showTip("\u83b7\u53d6\u6587\u672c\u5931\u8d25\uff01", 30);
            callback("");
          } else callback(data);
        });
      },
      formatTime: function formatTime(format, timestampm) {
        timestampm && timestampm < 1e10 && (timestampm *= 1e3);
        var day = timestampm ? new Date(parseInt(timestampm)) : new Date();
        var year = day.getFullYear() + "";
        var month = day.getMonth() + 1 + "";
        var date = day.getDate() + "";
        var hour = day.getHours() + "";
        var minute = day.getMinutes() + "";
        var second = day.getSeconds() + "";
        var ret = format;
        ret = ret.replace("YYYY", year);
        ret = ret.replace("MM", 2 == month.length ? month : "0" + month);
        ret = ret.replace("DD", 2 == date.length ? date : "0" + date);
        ret = ret.replace("hh", 2 == hour.length ? hour : "0" + hour);
        ret = ret.replace("mm", 2 == minute.length ? minute : "0" + minute);
        ret = ret.replace("ss", 2 == second.length ? second : "0" + second);
        ret = ret.replace("M", month);
        ret = ret.replace("D", date);
        ret = ret.replace("h", hour);
        ret = ret.replace("m", minute);
        ret = ret.replace("s", second);
        return ret;
      },
      deepCopy: function deepCopy(obj) {
        if ("object" !== ("undefined" === typeof obj ? "undefined" : _typeof(obj))) return obj;
        var newObj = obj instanceof Array ? [] : {};
        for (var key in obj) obj.hasOwnProperty(key) && (newObj[key] = "object" === _typeof(obj[key]) ? this.deepCopy(obj[key]) : obj[key]);
        return newObj;
      },
      removeLoginMessage: function removeLoginMessage() {
        wsft.message.removeKeyMessage(wsft.protocol.TCP_ONOPEN);
      },
      removeMainMessage: function removeMainMessage() {
        wsft.message.removeKeyMessage(wsft.protocol.adaptiveView);
        wsft.message.removeKeyMessage(wsft.protocol.RECEIVEPLAYERRECORDCAST);
      },
      removeGameMessage: function removeGameMessage() {
        wsft.message.removeKeyMessage(wsft.protocol.PUSHJOINROOM);
        wsft.message.removeKeyMessage(wsft.protocol.GAMEINBG);
        wsft.message.removeKeyMessage(wsft.protocol.GAMEINMUSIC);
        wsft.message.removeKeyMessage(wsft.protocol.PUSHSENDCARD);
        wsft.message.removeKeyMessage(wsft.protocol.RECEIVEAPPLAYDISSOLVEROOM);
        wsft.message.removeKeyMessage(wsft.protocol.PUSHAPPLAYDISSOLVEROOM);
        wsft.message.removeKeyMessage(wsft.protocol.CATCHCARD);
        wsft.message.removeKeyMessage(wsft.protocol.SEATCATCHCARD);
        wsft.message.removeKeyMessage(wsft.protocol.RECEIVEOUTCARD);
        wsft.message.removeKeyMessage(wsft.protocol.PUSHOUTCARD);
        wsft.message.removeKeyMessage(wsft.protocol.RECEIVEPENGCARD);
        wsft.message.removeKeyMessage(wsft.protocol.PUSHPENGCARD);
        wsft.message.removeKeyMessage(wsft.protocol.RECEIVEPASS);
        wsft.message.removeKeyMessage(wsft.protocol.RECEIVEANGANG);
        wsft.message.removeKeyMessage(wsft.protocol.PUSHANGANG);
        wsft.message.removeKeyMessage(wsft.protocol.RECEIVEMINGGANG);
        wsft.message.removeKeyMessage(wsft.protocol.PUSHMINGGANG);
        wsft.message.removeKeyMessage(wsft.protocol.RECEIVEJIEGANG);
        wsft.message.removeKeyMessage(wsft.protocol.PUSHJIEGANG);
        wsft.message.removeKeyMessage(wsft.protocol.PUSHOFFLINE);
        wsft.message.removeKeyMessage(wsft.protocol.RECEIVEOFFLINERECONNECTION);
        wsft.message.removeKeyMessage(wsft.protocol.RECEIVEJIEPAO);
        wsft.message.removeKeyMessage(wsft.protocol.RECEIVEZIMO);
        wsft.message.removeKeyMessage(wsft.protocol.RECEIVEPREPAREROOM);
        wsft.message.removeKeyMessage(wsft.protocol.PUSHPREPAREROOM);
        wsft.message.removeKeyMessage(wsft.protocol.RECEIVECHATROOM);
        wsft.message.removeKeyMessage(wsft.protocol.PUSHCHATROOM);
        wsft.message.removeKeyMessage(wsft.protocol.PUSHROUNDRESULT);
        wsft.message.removeKeyMessage(wsft.protocol.PUSHGAMEOVER);
      }
    };
    wsft.funcs = module.exports = funcs;
    cc._RF.pop();
  }, {} ],
  gameData: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1bf76I87YZB7LlBofAfDRKZ", "gameData");
    "use strict";
    function search(arr, dst) {
      var i = arr.length;
      while (i >= 0) {
        i -= 1;
        if (arr[i].num == dst.num && arr[i].type == dst.type) return i;
      }
      return -1;
    }
    cc.Class({
      extends: cc.Component,
      properties: {
        gameSceneName: "",
        recordDate: null,
        gameState: "",
        roomId: "",
        playerNum: 0,
        cardNum: 0,
        seats: [],
        rule: null,
        mySeatIndex: -1,
        bankerSeatIndex: -1,
        turnIndex: -1,
        outCard: null,
        gangType: null,
        huType: null,
        gameRoomIntervalFunc: null
      },
      ctor: function ctor() {
        this.addMessgetListen();
      },
      reset: function reset() {
        this.turnIndex = -1;
        this.outCard = null;
        this.gangType = null;
        this.huType = null;
        for (var i = 0; i < this.seats.length; ++i) {
          this.seats[i].handCard = [];
          this.seats[i].outOldCard = [];
          this.seats[i].pengs = [];
          this.seats[i].anGangs = [];
          this.seats[i].mingGangs = [];
          this.seats[i].jieGangs = [];
        }
      },
      clearData: function clearData() {
        this.roomId = null;
        this.gameState = "", this.playerNum = 0;
        this.seats = [];
        this.rule = null;
        this.mySeatIndex = null;
        this.bankerSeatIndex = -1;
        this.turnIndex = -1;
        this.outCard = null;
        this.gangType = null;
        this.huType = null;
        if (this.gameRoomIntervalFunc) {
          clearInterval(this.gameRoomIntervalFunc);
          this.gameRoomIntervalFunc = null;
        }
      },
      testInfo: function testInfo() {
        this.mySeatIndex = 1;
        this.seats = [];
        for (var i = 0; i < 4; ++i) {
          this.seats[i] = [];
          this.seats[i].uid = i + 1e3;
          this.seats[i].seetIndex = i + 1;
          this.seats[i].userState = 1;
          this.seats[i].isMaster = false;
          this.seats[i].headimg = "http://192.168.31.78:50505/1.png";
          this.seats[i].nickname = i + "\u4e1c\u90e1\u7231\u6211\u7231\u6211";
          this.seats[i].coin = 100;
          this.seats[i].sex = 1;
          this.seats[i].ip = "188.188.1.1";
        }
        this.seats[0].isMaster = true;
        this.seats[1].userState = 2;
        this.roomId = "123456";
        this.rule = [];
      },
      addMessgetListen: function addMessgetListen() {
        wsft.message.addMessage(wsft.protocol.RECEIVE_CREATE_ROOM, this.createRoom.bind(this));
        wsft.message.addMessage(wsft.protocol.RECEIVE_JOIN_ROOM, this.joinRoom.bind(this));
        wsft.message.addMessage(wsft.protocol.PUSH_JOIN_ROOM, this.pushJoinRoom.bind(this));
        wsft.message.addMessage(wsft.protocol.PUSH_PLAYER_RECORD_CAST, this.pushRecord.bind(this));
        wsft.message.addMessage(wsft.protocol.RECEIVE_PLAYER_RECORD_CAST, this.receiveRecord.bind(this));
        wsft.message.addMessage(wsft.protocol.RECEIVE_PREPARE_ROOM, this.receivePrepare.bind(this));
        wsft.message.addMessage(wsft.protocol.PUSH_PREPARE_ROOM, this.pushPrepare.bind(this));
        wsft.message.addMessage(wsft.protocol.RECEIVE_LEAVE_ROOM, this.leaveRoom.bind(this));
        wsft.message.addMessage(wsft.protocol.RECEIVE_DISSOLVE_ROOM, this.dissolveRoom.bind(this));
        wsft.message.addMessage(wsft.protocol.PUSH_DISSOLVE_ROOM, this.pushDissolveRoom.bind(this));
        wsft.message.addMessage(wsft.protocol.RECEIVE_CHAT_ROOM, this.receiveChatRoom.bind(this));
        wsft.message.addMessage(wsft.protocol.PUSH_CHAT_ROOM, this.pushChatRoom.bind(this));
        wsft.message.addMessage(wsft.protocol.RECEIVE_APPLAY_DISSOLVE_ROOM, this.receiveApplayDissolveRoom.bind(this));
        wsft.message.addMessage(wsft.protocol.PUSH_APPLAY_DISSOLVE_ROOM, this.pushApplayDissolveRoom.bind(this));
        wsft.message.addMessage(wsft.protocol.PUSH_OFFLINE, this.pushOffline.bind(this));
        wsft.message.addMessage(wsft.protocol.PUSH_SEND_CARD, this.pushSendCard.bind(this));
        wsft.message.addMessage(wsft.protocol.CATCH_CARD, this.catchCard.bind(this));
        wsft.message.addMessage(wsft.protocol.SEAT_CATCH_CARD, this.seatCatchCard.bind(this));
        wsft.message.addMessage(wsft.protocol.RECEIVE_OUT_CARD, this.receiveOutCard.bind(this));
        wsft.message.addMessage(wsft.protocol.PUSH_OUT_CARD, this.pushOutCard.bind(this));
        wsft.message.addMessage(wsft.protocol.RECEIVE_PASS, this.receivePassCard.bind(this));
        wsft.message.addMessage(wsft.protocol.RECEIVE_PENG_CARD, this.receivePengCard.bind(this));
        wsft.message.addMessage(wsft.protocol.PUSH_PENG_CARD, this.pushPengCard.bind(this));
        wsft.message.addMessage(wsft.protocol.RECEIVE_ANGANG, this.receiveAnGang.bind(this));
        wsft.message.addMessage(wsft.protocol.PUSH_ANGANG, this.pushAnGang.bind(this));
        wsft.message.addMessage(wsft.protocol.RECEIVE_MINGGANG, this.receiveMingGang.bind(this));
        wsft.message.addMessage(wsft.protocol.PUSH_MINGGANG, this.pushMingGang.bind(this));
        wsft.message.addMessage(wsft.protocol.RECEIVE_JIEGANG, this.receiveJieGang.bind(this));
        wsft.message.addMessage(wsft.protocol.PUSH_JIEGANG, this.pushJieGang.bind(this));
        wsft.message.addMessage(wsft.protocol.RECEIVE_ZI_MO, this.receiveZiMo.bind(this));
        wsft.message.addMessage(wsft.protocol.RECEIVE_JIE_PAO, this.receiveJiePao.bind(this));
        wsft.message.addMessage(wsft.protocol.RECEIVE_OFFLINE_RECONNECTION, this.receiveOfflineReconnection.bind(this));
        wsft.message.addMessage(wsft.protocol.PUSH_ROUND_RESULT, this.pushRoundResult.bind(this));
        wsft.message.addMessage(wsft.protocol.PUSH_GAME_OVER, this.gameOver.bind(this));
      },
      createRoom: function createRoom(data) {
        console.log("createRoom==", data);
        if (1 == data.code) {
          this.gameState = "NO";
          this.roomId = data.roomId;
          this.seats[0] = data.info;
          this.rule = data.playType;
          this.seats[0].seetIndex = 1;
          this.playerNum = data.playType.num;
          this.mySeatIndex = 1;
          this.setRuleLocalStorage(data.playType);
          this.jumpGameScene();
        } else if (165 == data.code) {
          wsft.uiFuncs.showTip("\u7816\u77f3\u4e0d\u8db3,\u8bf7\u5145\u503c", 30);
          wsft.loading.hide();
        } else {
          wsft.uiFuncs.showTip("\u521b\u5efa\u623f\u95f4\u5931\u8d25", 30);
          wsft.loading.hide();
        }
      },
      joinRoom: function joinRoom(data) {
        console.log("joinRoom==", data);
        if (1 == data.code) {
          this.gameState = "NO";
          this.mySeatIndex = data.seatIndex;
          this.roomId = data.roomId;
          this.seats = data.users;
          this.rule = data.playType;
          this.playerNum = data.playType.num;
          this.setRuleLocalStorage(data.playType);
          this.jumpGameScene();
        } else if (166 == data.code) {
          wsft.uiFuncs.showTip("\u623f\u95f4\u4e0d\u5b58\u5728\uff01", 30);
          wsft.loading.hide();
        } else if (121 == data.code) {
          wsft.uiFuncs.showTip("\u623f\u95f4\u5df2\u6ee1\uff01", 30);
          wsft.loading.hide();
        } else {
          wsft.uiFuncs.showTip("\u52a0\u5165\u623f\u95f4\u5931\u8d25\uff01", 30);
          wsft.loading.hide();
        }
      },
      pushJoinRoom: function pushJoinRoom(data) {
        console.log("pushJoinRoom==", data);
        if (data.delSeatIndex) {
          console.log("\u9000\u51fa\u623f\u95f4==" + data.delSeatIndex);
          this.seats[data.delSeatIndex - 1] = null;
          wsft.message.sendMessage(wsft.protocol.PUSHJOINROOM, data);
        } else {
          this.seats[data.addUser.seetIndex - 1] = data.addUser;
          wsft.message.sendMessage(wsft.protocol.PUSHJOINROOM, data);
        }
      },
      pushRecord: function pushRecord(data) {
        console.log("pushRecord==", data);
        this.recordDate = data.record;
      },
      receiveRecord: function receiveRecord(data) {
        console.log("receiveRecord==", data);
        1 == data.code ? wsft.message.sendMessage(wsft.protocol.RECEIVEPLAYERRECORDCAST, data) : wsft.uiFuncs.showTip("\u83b7\u53d6\u6218\u7ee9\u5931\u8d25", 30);
      },
      receivePrepare: function receivePrepare(data) {
        console.log("=receivePrepare==", data);
        wsft.message.sendMessage(wsft.protocol.RECEIVEPREPAREROOM, data);
      },
      pushPrepare: function pushPrepare(data) {
        console.log("=pushPrepare==", data);
        wsft.message.sendMessage(wsft.protocol.PUSHPREPAREROOM, data);
      },
      leaveRoom: function leaveRoom(data) {
        1 == data.code ? this.jumpMainScene() : wsft.uiFuncs.showTip("\u79bb\u5f00\u623f\u95f4\u5931\u8d25\uff01", 30);
      },
      dissolveRoom: function dissolveRoom(data) {
        1 == data.code || wsft.uiFuncs.showTip("\u89e3\u6563\u623f\u95f4\u5931\u8d25\uff01", 30);
      },
      pushDissolveRoom: function pushDissolveRoom(data) {
        console.log("pushDissolveRoom==", data);
        this.jumpMainScene();
      },
      receiveApplayDissolveRoom: function receiveApplayDissolveRoom(data) {
        console.log("pushDissolveRoom==", data);
        wsft.message.sendMessage(wsft.protocol.RECEIVEAPPLAYDISSOLVEROOM, data);
      },
      pushApplayDissolveRoom: function pushApplayDissolveRoom(data) {
        console.log("pushDissolveRoom==", data);
        wsft.message.sendMessage(wsft.protocol.PUSHAPPLAYDISSOLVEROOM, data);
      },
      receiveChatRoom: function receiveChatRoom(data) {
        console.log("receiveChatRoom==", data);
        wsft.message.sendMessage(wsft.protocol.RECEIVECHATROOM, data);
      },
      pushChatRoom: function pushChatRoom(data) {
        console.log("pushChatRoom==", data);
        wsft.message.sendMessage(wsft.protocol.PUSHCHATROOM, data);
      },
      pushOffline: function pushOffline(data) {
        console.log("pushOffline==", data);
        wsft.message.sendMessage(wsft.protocol.PUSHOFFLINE, data);
      },
      pushSendCard: function pushSendCard(data) {
        console.log("pushSendCard==", data);
        this.gameState = "YES";
        this.setInitCardNum();
        this.reset();
        this.seats[this.mySeatIndex - 1].handCard = data.pais;
        this.bankerSeatIndex = data.bankerSeetIndex;
        wsft.message.sendMessage(wsft.protocol.PUSHSENDCARD, data);
      },
      catchCard: function catchCard(data) {
        console.log("catchCard==", data);
        this.cardNum -= 1;
        this.turnIndex = this.mySeatIndex;
        var seatData = this.seats[this.mySeatIndex - 1];
        seatData.handCard && this.seats[this.mySeatIndex - 1].handCard.push(data.mj);
        data.anGang.length > 0 && (this.gangType = "anGang");
        data.mingGang.length > 0 && (this.gangType = "mingGang");
        data.ziMo && (this.huType = "ziMo");
        wsft.message.sendMessage(wsft.protocol.CATCHCARD, data);
      },
      seatCatchCard: function seatCatchCard(data) {
        console.log("seatCatchCard==", data);
        this.cardNum -= 1;
        this.turnIndex = data.seetIndex;
        wsft.message.sendMessage(wsft.protocol.SEATCATCHCARD, data);
      },
      receiveOutCard: function receiveOutCard(data) {
        console.log("receiveOutCard==", data);
        this.turnIndex = this.mySeatIndex;
        var seatData = this.seats[this.mySeatIndex - 1];
        if (1 == data.code) {
          seatData.outOldCard.push(data.mj);
          this.outCard = data.mj;
          if (seatData.handCard) {
            var idx = search(seatData.handCard, data.mj);
            -1 != idx ? seatData.handCard.splice(idx, 1) : wsft.uiFuncs.showTip("\u624b\u724c\u79fb\u9664\u5931\u8d25", 30);
            console.log("idxidx==", idx);
            console.log("handCardhandCard==", seatData.handCard);
          }
          wsft.message.sendMessage(wsft.protocol.RECEIVEOUTCARD, data);
        } else wsft.uiFuncs.showTip("\u51fa\u724c\u5931\u8d25\uff01", 30);
      },
      pushOutCard: function pushOutCard(data) {
        console.log("pushOutCard==", data);
        this.turnIndex = data.seetIndex;
        var seatData = this.seats[data.seetIndex - 1];
        if (this.mySeatIndex == data.seetIndex && seatData.handCard) {
          var idx = search(seatData.handCard, data.mj);
          -1 != idx ? seatData.handCard.splice(idx, 1) : wsft.uiFuncs.showTip("\u624b\u724c\u79fb\u9664\u5931\u8d25", 30);
        }
        seatData.outOldCard.push(data.mj);
        this.outCard = data.mj;
        data.jieGang && (this.gangType = "jieGang");
        data.jiePao && (this.huType = "jiePao");
        wsft.message.sendMessage(wsft.protocol.PUSHOUTCARD, data);
      },
      receivePassCard: function receivePassCard(data) {
        console.log("receivePassCard==", data);
        1 == data.code ? wsft.message.sendMessage(wsft.protocol.RECEIVEPASS, data) : wsft.uiFuncs.showTip("\u8fc7\u724c\u5931\u8d25", 30);
      },
      receivePengCard: function receivePengCard(data) {
        console.log("receivePengCard==", data);
        1 == data.code ? wsft.message.sendMessage(wsft.protocol.RECEIVEPENGCARD, data) : wsft.uiFuncs.showTip("\u78b0\u724c\u5931\u8d25", 30);
      },
      pushPengCard: function pushPengCard(data) {
        console.log("pushPengCard==", data);
        this.turnIndex = data.seetIndex;
        this.seats[data.daSeetIndex - 1].outOldCard.pop();
        this.seats[data.seetIndex - 1].pengs.push(data.mj);
        if (data.seetIndex == this.mySeatIndex) {
          var seatData = this.seats[this.mySeatIndex - 1];
          if (seatData.handCard) for (var i = 0; i < 2; ++i) {
            var idx = search(seatData.handCard, data.mj);
            -1 != idx ? seatData.handCard.splice(idx, 1) : wsft.uiFuncs.showTip("\u624b\u724c\u79fb\u9664\u5931\u8d25", 30);
          }
        }
        wsft.message.sendMessage(wsft.protocol.PUSHPENGCARD, data);
      },
      receiveAnGang: function receiveAnGang(data) {
        console.log("receiveAnGang==", data);
        if (1 == data.code) {
          this.turnIndex = this.mySeatIndex;
          this.seats[this.mySeatIndex - 1].anGangs.push(data.mj);
          var seatData = this.seats[this.mySeatIndex - 1];
          if (seatData.handCard) for (var i = 0; i < 4; ++i) {
            var idx = search(seatData.handCard, data.mj);
            -1 != idx ? seatData.handCard.splice(idx, 1) : wsft.uiFuncs.showTip("\u624b\u724c\u79fb\u9664\u5931\u8d25", 30);
          }
          wsft.message.sendMessage(wsft.protocol.RECEIVEANGANG, data);
        } else wsft.uiFuncs.showTip("\u6697\u6760\u5931\u8d25", 30);
      },
      pushAnGang: function pushAnGang(data) {
        console.log("pushAnGang==", data);
        if (data.seetIndex != this.mySeatIndex) {
          this.turnIndex = data.seetIndex;
          this.seats[data.seetIndex - 1].anGangs.push(data.mj);
          wsft.message.sendMessage(wsft.protocol.PUSHANGANG, data);
        }
      },
      receiveMingGang: function receiveMingGang(data) {
        console.log("receiveMingGang==", data);
        1 == data.code ? wsft.message.sendMessage(wsft.protocol.RECEIVEMINGGANG, data) : wsft.uiFuncs.showTip("\u660e\u6760\u5931\u8d25", 30);
      },
      pushMingGang: function pushMingGang(data) {
        console.log("pushMingGang==", data);
        this.turnIndex = data.seetIndex;
        var seatData = this.seats[data.seetIndex - 1];
        if (seatData.pengs) {
          var idx = search(seatData.pengs, data.mj);
          -1 != idx ? seatData.pengs.splice(idx, 1) : wsft.uiFuncs.showTip("\u78b0\u724c\u79fb\u9664\u5931\u8d25", 30);
        }
        this.seats[data.seetIndex - 1].mingGangs.push(data.mj);
        if (data.seetIndex == this.mySeatIndex && seatData.handCard) {
          var idx = search(seatData.handCard, data.mj);
          -1 != idx ? seatData.handCard.splice(idx, 1) : wsft.uiFuncs.showTip("\u624b\u724c\u79fb\u9664\u5931\u8d25", 30);
        }
        wsft.message.sendMessage(wsft.protocol.PUSHMINGGANG, data);
      },
      receiveJieGang: function receiveJieGang(data) {
        console.log("receiveJieGang==", data);
        1 == data.code ? wsft.message.sendMessage(wsft.protocol.RECEIVEJIEGANG, data) : wsft.uiFuncs.showTip("\u63a5\u6760\u5931\u8d25", 30);
      },
      pushJieGang: function pushJieGang(data) {
        console.log("pushJieGang==", data);
        this.turnIndex = data.seetIndex;
        this.seats[data.daSeetIndex - 1].outOldCard.pop();
        this.seats[data.seetIndex - 1].jieGangs.push(data.mj);
        if (data.seetIndex == this.mySeatIndex) {
          var seatData = this.seats[this.mySeatIndex - 1];
          if (seatData.handCard) for (var i = 0; i < 3; ++i) {
            var idx = search(seatData.handCard, data.mj);
            -1 != idx ? seatData.handCard.splice(idx, 1) : wsft.uiFuncs.showTip("\u624b\u724c\u79fb\u9664\u5931\u8d25", 30);
          }
        }
        wsft.message.sendMessage(wsft.protocol.PUSHJIEGANG, data);
      },
      receiveZiMo: function receiveZiMo(data) {
        console.log("receiveZiMo==", data);
        1 == data.code ? wsft.message.sendMessage(wsft.protocol.RECEIVEZIMO, data) : wsft.uiFuncs.showTip("\u81ea\u6478\u5931\u8d25", 30);
      },
      receiveJiePao: function receiveJiePao(data) {
        console.log("receiveJiePao==", data);
        1 == data.code ? wsft.message.sendMessage(wsft.protocol.RECEIVEJIEPAO, data) : wsft.uiFuncs.showTip("\u63a5\u70ae\u5931\u8d25", 30);
      },
      receiveOfflineReconnection: function receiveOfflineReconnection(data) {
        console.log("receiveOfflineReconnection==", data);
        if (1 == data.code) {
          this.roomId = data.roomId;
          this.rule = data.playType;
          this.playerNum = data.playType.num;
          this.seats = data.users;
          this.setRuleLocalStorage(data.playType);
          for (var i = 0; i < data.users.length; ++i) wsft.userData.uid == data.users[i].uid && (this.mySeatIndex = data.users[i].seetIndex);
          if (false == data.start) {
            this.gameState = "NO";
            this.jumpGameScene();
          } else {
            this.gameState = "YES";
            this.reset();
            if (data.my) {
              this.cardNum = data.my.leftPaiNum;
              this.seats[this.mySeatIndex - 1].handCard = wsft.funcs.deepCopy(data.my.pais);
            }
            this.bankerSeatIndex = data.bankerSeetIndex;
            for (var i in data.usersRound) {
              var seatData = this.seats[data.usersRound[i].seetIndex - 1];
              for (var j = 0; j < data.usersRound[i].mj.length; ++j) seatData.outOldCard.push(data.usersRound[i].mj[j]);
              var gpc = data.usersRound[i].gpc;
              for (var g = 0; g < gpc.length; ++g) {
                var type = gpc[g].type;
                1 == type ? seatData.anGangs.push(gpc[g].mj) : 2 == type ? seatData.mingGangs.push(gpc[g].mj) : 3 == type ? seatData.jieGangs.push(gpc[g].mj) : 4 == type && seatData.pengs.push(gpc[g].mj);
              }
            }
            this.jumpGameScene();
            wsft.message.sendMessage(wsft.protocol.RECEIVEOFFLINERECONNECTION, data);
          }
        }
      },
      pushRoundResult: function pushRoundResult(data) {
        console.log("pushRoundResult==", data);
        for (var i in data.rs) {
          var seatData = this.seats[data.rs[i].seetIndex - 1];
          seatData.handCard = wsft.funcs.deepCopy(data.rs[i].mj);
          if (data.reconnect) {
            var gpc = data.rs[i].gpc;
            for (var g = 0; g < gpc.length; ++g) {
              var type = gpc[g].type;
              1 == type ? seatData.anGangs.push(gpc[g].mj) : 2 == type ? seatData.mingGangs.push(gpc[g].mj) : 3 == type ? seatData.jieGangs.push(gpc[g].mj) : 4 == type && seatData.pengs.push(gpc[g].mj);
            }
          }
        }
        wsft.message.sendMessage(wsft.protocol.PUSHROUNDRESULT, data);
      },
      gameOver: function gameOver(data) {
        console.log("gameOver==", data);
        wsft.message.sendMessage(wsft.protocol.PUSHGAMEOVER, data);
      },
      setInitCardNum: function setInitCardNum() {
        4 == this.playerNum ? this.cardNum = 84 : 3 == this.playerNum ? this.cardNum = 97 : 2 == this.playerNum && (this.cardNum = 110);
      },
      setRuleLocalStorage: function setRuleLocalStorage(_rule) {
        var ruleName = [ "ChiFengMJ", "DouDiZhu" ];
        var _chekedTable = [];
        1 == _rule.bankerMode && _chekedTable.push(0);
        2 == _rule.bankerMode && _chekedTable.push(1);
        3 == _rule.bankerMode && _chekedTable.push(2);
        true == _rule.zhifu ? _chekedTable.push(3) : _chekedTable.push(4);
        2 == _rule.num ? _chekedTable.push(5) : 3 == _rule.num ? _chekedTable.push(6) : 4 == _rule.num && _chekedTable.push(7);
        _rule.qiDui && _chekedTable.push(8);
        _rule.piaohu && _chekedTable.push(9);
        _rule.shisanyao && _chekedTable.push(10);
        _rule.gangshangpao && _chekedTable.push(11);
        _rule.qingYiSe && _chekedTable.push(12);
        _rule.diangang && _chekedTable.push(13);
        var ruleData = {
          name: ruleName[0],
          chekedTable: _chekedTable
        };
        cc.sys.localStorage.setItem("ruleData", JSON.stringify(ruleData));
      },
      getRule: function getRule() {
        var _str = "";
        if (!this.rule) return;
        if (1 == this.rule.bankerMode) {
          4 == this.rule.num && (_str += "1\u5708  ");
          3 == this.rule.num && (_str += "5\u5c40  ");
          2 == this.rule.num && (_str += "6\u5c40  ");
        }
        if (2 == this.rule.bankerMode) {
          4 == this.rule.num && (_str += "2\u5708  ");
          3 == this.rule.num && (_str += "10\u5c40  ");
          2 == this.rule.num && (_str += "12\u5c40  ");
        }
        if (3 == this.rule.bankerMode) {
          4 == this.rule.num && (_str += "4\u5708  ");
          3 == this.rule.num && (_str += "20\u5c40  ");
          2 == this.rule.num && (_str += "26\u5c40  ");
        }
        true == this.rule.zhifu ? _str += "\u623f\u4e3b\u652f\u4ed8  " : _str += "AA\u652f\u4ed8  ";
        _str += this.rule.num + "\u4eba ";
        this.rule.qiDui && (_str += "\u4e03\u5c0f\u5bf9  ");
        this.rule.piaohu && (_str += "\u98d8\u80e1  ");
        this.rule.shisanyao && (_str += "\u5341\u4e09\u5e7a  ");
        this.rule.gangshangpao && (_str += "\u6760\u4e0a\u70ae  ");
        this.rule.qingYiSe && (_str += "\u6e05\u4e00\u8272  ");
        this.rule.diangang && (_str += "\u70b9\u6760  ");
        return _str;
      },
      getLocalIndex: function getLocalIndex(index) {
        var _index = (index - this.mySeatIndex + 4) % 4;
        if (3 == this.playerNum) {
          1 == this.mySeatIndex && 2 == _index && (_index = 3);
          2 == this.mySeatIndex && 2 == _index && (_index = 1);
          3 == this.mySeatIndex && 2 == _index && (_index = 1);
        } else if (2 == this.playerNum) {
          1 == this.mySeatIndex && 1 == _index && (_index = 2);
          2 == this.mySeatIndex && 3 == _index && (_index = 2);
        }
        return _index;
      },
      getSeatId: function getSeatId(otherId) {
        var seatId = 0;
        var myId = this.mySeatIndex;
        if (myId == otherId) {
          seatId = 1;
          return seatId;
        }
        if (otherId > myId) {
          var seatId = otherId + myId - 1;
          seatId > 4 && (seatId -= 4);
          return seatId;
        }
        var seatId = myId - otherId + 1;
        return seatId;
      },
      getHuTypeString: function getHuTypeString(_num) {
        var huType = [];
        huType = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "\u5e73\u80e1", "17", "18", "19", "\u6df7\u4e00\u8272", "21", "22", "23", "24", "25", "\u5939\u5f20", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43" ];
        return huType[_num];
      },
      jumpGameScene: function jumpGameScene() {
        wsft.loading.show("\u6b63\u5728\u52a0\u8f7d\u8d44\u6e90\uff0c\u8bf7\u7a0d\u5019...");
        cc.director.loadScene("GameScene");
      },
      jumpMainScene: function jumpMainScene() {
        this.clearData();
        wsft.loading.show("\u6b63\u5728\u8fd4\u56de\u5927\u5385\uff0c\u8bf7\u7a0d\u5019...");
        cc.director.loadScene("MainScene");
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  gameRoom: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9e104syGyBAQbfvbvFFn1EX", "gameRoom");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        seatNodeJS: null,
        beginBeforNode: null,
        prepareNode: null,
        prepareChild: [],
        dissolveRoomLayer: null,
        dissolveRoomLayerJS: null,
        smallGameOverlayer: null,
        smallGameOverlayerJS: null,
        bigGameOverLayer: null,
        bigGameOverLayerJS: null,
        tipLayer: null,
        chatLayer: null,
        chatLayerJS: null,
        tipLayerJS: null,
        ruleLayerPrefab: null,
        setLayerPrefab: null,
        smallGameOverlayerfab: null,
        dissolveRoomLayerPrefab: null,
        bigGameOverLayerfab: null,
        tipLayerfab: null,
        gameOverData: null,
        chatLayerfab: null,
        _chatInfo: null
      },
      onLoad: function onLoad() {
        this.seatNodeJS = this.node.getChildByName("seat_node").getComponent("gameSeat");
        this.seatNodeJS.initSeat();
        this.beginBeforNode = this.node.getChildByName("begin_befor_node");
        this.prepareNode = this.node.getChildByName("prepare_node");
        this.prepareNode.active = true;
        this.node.getChildByName("game_set").zIndex = 10;
        var gameSceneJS = this.node.getComponent("gameScene");
        this.ruleLayerPrefab = gameSceneJS.ruleLayerPrefab;
        this.setLayerPrefab = gameSceneJS.setLayerPrefab;
        this.dissolveRoomLayerPrefab = gameSceneJS.dissolveRoomLayerPrefab;
        this.smallGameOverlayerfab = gameSceneJS.smallGameOverlayerfab;
        this.bigGameOverLayerfab = gameSceneJS.bigGameOverLayerfab;
        this.tipLayerfab = gameSceneJS.tipLayerfab;
        this.chatLayerfab = gameSceneJS.chatLayerfab;
        this.gameBg_1 = gameSceneJS.gameBg_1;
        this.gameBg_2 = gameSceneJS.gameBg_2;
        this.gameBg_3 = gameSceneJS.gameBg_3;
        this.initMusic();
        this.initGameInfo();
        this.initPrepare();
        this.chatInfo();
        this.initAllBtn();
        this.initcheckBox();
        this.initLayer();
        this.initSeats();
        this.addMessgetListen();
      },
      start: function start() {
        this.initGameBg();
      },
      initPrepare: function initPrepare() {
        for (var i = 0; i < 4; ++i) {
          this.prepareChild[i] = this.prepareNode.getChildByName("prepare_" + i);
          this.prepareChild[i].active = false;
        }
      },
      chatInfo: function chatInfo() {
        this._chatInfo = {};
        this._chatInfo[0] = {
          content: "\u5feb\u70b9\u554a\uff01\u6211\u7b49\u7684\u82b1\u90fd\u8c22\u4e86\uff01",
          sound: "fix_msg_1.mp3"
        };
        this._chatInfo[1] = {
          content: "\u548c\u4f60\u5408\u4f5c\uff0c\u771f\u662f\u592a\u6109\u5feb\u4e86\uff01",
          sound: "fix_msg_2.mp3"
        };
        this._chatInfo[2] = {
          content: "\u4f60\u8fd9\u4e48\u725b\u53c9\uff0c\u4f60\u5bb6\u4eba\u77e5\u9053\u4e48\uff1f",
          sound: "fix_msg_3.mp3"
        };
        this._chatInfo[3] = {
          content: "\u54e6\uff01\u7cdf\u4e86\uff01",
          sound: "fix_msg_4.mp3"
        };
        this._chatInfo[4] = {
          content: "\u600e\u4e48\u53c8\u65ad\u7ebf\u4e86\uff0c\u7f51\u7edc\u4e5f\u5fd2\u5dee\u4e86\uff01",
          sound: "fix_msg_5.mp3"
        };
        this._chatInfo[5] = {
          content: "\u4e0d\u80dc\u5229\uff0c\u543e\u5b81\u6b7b\uff01",
          sound: "fix_msg_6.mp3"
        };
        this._chatInfo[6] = {
          content: "\u571f\u8c6a\uff0c\u6211\u4eec\u505a\u670b\u53cb\u5427\uff01",
          sound: "fix_msg_7.mp3"
        };
        this._chatInfo[7] = {
          content: "\u4e0d\u8981\u8d70\u51b3\u6218\u5230\u5929\u4eae\uff01",
          sound: "fix_msg_8.mp3"
        };
        this._chatInfo[8] = {
          content: "\u522b\u5435\u4e86\uff0c\u522b\u5435\u4e86\uff0c\u4e13\u5fc3\u73a9\u6e38\u620f\u5427\uff01",
          sound: "fix_msg_9.mp3"
        };
      },
      initLayer: function initLayer() {
        if (this.dissolveRoomLayer) {
          this.dissolveRoomLayer.active = false;
          this.dissolveRoomLayerJS = this.dissolveRoomLayer.getComponent("dissolveRoomLayer");
        } else {
          this.dissolveRoomLayer = cc.instantiate(this.dissolveRoomLayerPrefab);
          this.dissolveRoomLayer.setName("dissolveRoomLayer");
          this.node.addChild(this.dissolveRoomLayer, 100);
          this.dissolveRoomLayer.active = false;
          this.dissolveRoomLayerJS = this.dissolveRoomLayer.getComponent("dissolveRoomLayer");
        }
      },
      addMessgetListen: function addMessgetListen() {
        wsft.message.addMessage(wsft.protocol.PUSHJOINROOM, this.pushJoinRoom.bind(this));
        wsft.message.addMessage(wsft.protocol.GAMEINBG, this.initGameBg.bind(this));
        wsft.message.addMessage(wsft.protocol.GAMEINMUSIC, this.initMusic.bind(this));
        wsft.message.addMessage(wsft.protocol.RECEIVEAPPLAYDISSOLVEROOM, this.receiveApplayDissolveRoom.bind(this));
        wsft.message.addMessage(wsft.protocol.PUSHAPPLAYDISSOLVEROOM, this.pushApplayDissolveRoom.bind(this));
        wsft.message.addMessage(wsft.protocol.PUSHSENDCARD, this.pushSendCardg.bind(this));
        wsft.message.addMessage(wsft.protocol.PUSHROUNDRESULT, this.pushRoundResultgr.bind(this));
        wsft.message.addMessage(wsft.protocol.RECEIVEPREPAREROOM, this.receivePreparegr.bind(this));
        wsft.message.addMessage(wsft.protocol.PUSHPREPAREROOM, this.pushPreparegr.bind(this));
        wsft.message.addMessage(wsft.protocol.RECEIVECHATROOM, this.receiveChatRoomgr.bind(this));
        wsft.message.addMessage(wsft.protocol.PUSHCHATROOM, this.pushChatRoomgr.bind(this));
        wsft.message.addMessage(wsft.protocol.PUSHOFFLINE, this.pushOfflinegr.bind(this));
        wsft.message.addMessage(wsft.protocol.RECEIVEOFFLINERECONNECTION, this.receiveOfflineReconnectiongr.bind(this));
        wsft.message.addMessage(wsft.protocol.PUSHGAMEOVER, this.gameOver.bind(this));
      },
      gameOver: function gameOver(data) {
        this.gameOverData = data;
      },
      receivePreparegr: function receivePreparegr(data) {
        1 == data.code || 149 == data.code ? this.smallGameOverlayer && (this.smallGameOverlayer.active = false) : 133 == data.code && this.addGameOverLayer();
      },
      pushPreparegr: function pushPreparegr(data) {
        var index = wsft.gameData.getLocalIndex(data.seatIndex);
        this.prepareChild[index].active = true;
      },
      receiveChatRoomgr: function receiveChatRoomgr(data) {
        1 == data.code && this.chatLayer && (this.chatLayer.active = false);
      },
      pushChatRoomgr: function pushChatRoomgr(data) {
        if (1 == data.type) {
          var index = wsft.gameData.getLocalIndex(data.seetIndex);
          this.seatNodeJS.setBiaoQing(index, wsft.mjCard.getChatSpriteFrame(data.id));
        } else if (2 == data.type) {
          var index = wsft.gameData.getLocalIndex(data.seetIndex);
          this.seatNodeJS.setQiPao(index, this._chatInfo[data.id].content);
        } else 3 == data.type;
      },
      pushRoundResultgr: function pushRoundResultgr(data) {
        console.log("gameRoom===pushRoundResultgr");
        var self = this;
        data.reconnect ? this.addSmallGameOverlayer(data) : setTimeout(function() {
          self.addSmallGameOverlayer(data);
        }, 3e3);
      },
      addGameOverLayer: function addGameOverLayer() {
        var date = this.gameOverData;
        if (date) if (this.bigGameOverLayer) {
          this.bigGameOverLayer.active = true;
          this.bigGameOverLayerJS.setBigGameOverData(date);
        } else {
          this.bigGameOverLayer = cc.instantiate(this.bigGameOverLayerfab);
          this.bigGameOverLayer.setName("bigGameOverLayer");
          this.node.addChild(this.bigGameOverLayer, 100);
          this.bigGameOverLayerJS = this.bigGameOverLayer.getComponent("bigGameOverLayer");
          this.bigGameOverLayerJS.setBigGameOverData(date);
        } else wsft.uiFuncs.showTip("\u6e38\u620f\u7ed3\u675f\u6570\u636e\u672a\u5230\uff01", 30);
      },
      addSmallGameOverlayer: function addSmallGameOverlayer(data) {
        if (this.smallGameOverlayer) {
          this.smallGameOverlayer.active = true;
          this.smallGameOverlayerJS.setSmallGameOver(data);
        } else {
          this.smallGameOverlayer = cc.instantiate(this.smallGameOverlayerfab);
          this.smallGameOverlayer.setName("smallGameOverlayer");
          this.node.addChild(this.smallGameOverlayer, 100);
          this.smallGameOverlayerJS = this.smallGameOverlayer.getComponent("smallGameOverLayer");
          this.smallGameOverlayerJS.setSmallGameOver(data);
        }
      },
      receiveOfflineReconnectiongr: function receiveOfflineReconnectiongr() {
        this.pushSendCardg();
        this.initSeats();
      },
      pushOfflinegr: function pushOfflinegr(data) {
        var index = wsft.gameData.getLocalIndex(data.seetIndex);
        2 == data.isOk ? this.seatNodeJS.setOffline(index, data.isOk) : 1 == data.isOk && this.seatNodeJS.setOffline(index, data.isOk);
        console.log("pushOffline==", data);
      },
      receiveApplayDissolveRoom: function receiveApplayDissolveRoom() {
        this.setLayer && (this.setLayer.active = false);
      },
      pushApplayDissolveRoom: function pushApplayDissolveRoom(date) {
        if (0 == date.isOk) {
          console.log("\u89e3\u6563\u623f\u95f4==11");
          if (this.dissolveRoomLayer) {
            this.dissolveRoomLayer.active = true;
            this.dissolveRoomLayerJS.initName();
            this.dissolveRoomLayerJS.refreshDada(date);
          } else {
            this.dissolveRoomLayer = cc.instantiate(this.dissolveRoomLayerPrefab);
            this.dissolveRoomLayer.setName("dissolveRoomLayer");
            this.node.addChild(this.dissolveRoomLayer, 100);
            this.dissolveRoomLayerJS = this.dissolveRoomLayer.getComponent("dissolveRoomLayer");
            this.dissolveRoomLayerJS.initName();
            this.dissolveRoomLayerJS.refreshDada(date);
          }
        } else if (1 == date.isOk) {
          this.dissolveRoomLayer.active = false;
          var str1 = "";
          var str2 = "\u540c\u610f\u89e3\u6563\u623f\u95f4,\u623f\u95f4\u89e3\u6563\u6210\u529f\uff01";
          var seats = wsft.gameData.seats;
          for (var i = 0; i < date.agreeSeetIndex.length; ++i) {
            var index = date.agreeSeetIndex[i] - 1;
            str1 += seats[index].nickname + "  ";
          }
          this.addTipLayer("JieSanOK", str1, str2, this);
        } else if (2 == date.isOk) {
          this.dissolveRoomLayer.active = false;
          var str1 = "";
          var str2 = "\u4e0d\u540c\u610f\u89e3\u6563\u623f\u95f4,\u623f\u95f4\u89e3\u6563\u5931\u8d25\uff01";
          var seats = wsft.gameData.seats;
          for (var i = 0; i < date.disagreeSeetIndex.length; ++i) {
            var index = date.disagreeSeetIndex[i] - 1;
            str1 += seats[index].nickname + "  ";
          }
          this.addTipLayer("JieSanNoOK", str1, str2, this);
        }
      },
      addTipLayer: function addTipLayer(_type, _str1, _str2, _self) {
        console.log("addTipLayer==");
        if (this.tipLayer) {
          this.tipLayer.active = true;
          this.tipLayerJS.setLabel(_type, _str1, _str2, _self);
        } else {
          this.tipLayer = cc.instantiate(this.tipLayerfab);
          this.tipLayer.setName("tipLayer");
          this.node.addChild(this.tipLayer, 100);
          this.tipLayerJS = this.tipLayer.getComponent("tipLayer");
          this.tipLayerJS.setLabel(_type, _str1, _str2, _self);
        }
      },
      pushSendCardg: function pushSendCardg() {
        this.beginBeforNode.active = false;
        this.initPrepare();
        var index = wsft.gameData.getLocalIndex(wsft.gameData.bankerSeatIndex);
        for (var i = 0; i < 4; i++) index == i ? this.seatNodeJS.setZhuang(index, true) : this.seatNodeJS.setZhuang(i, false);
      },
      pushJoinRoom: function pushJoinRoom(date) {
        if (date.delSeatIndex) {
          var index = wsft.gameData.getLocalIndex(date.delSeatIndex);
          this.prepareChild[index].active = false;
          this.seatNodeJS.restHead(index);
        } else this.initSingleSeat(date.addUser);
      },
      initGameBg: function initGameBg() {
        var scene_bg = this.node.getChildByName("scene_bg").getComponent(cc.Sprite);
        var gameBg = cc.sys.localStorage.getItem("gameBg");
        if (null != gameBg) "1" == gameBg ? scene_bg.spriteFrame = this.gameBg_1 : "2" == gameBg ? scene_bg.spriteFrame = this.gameBg_2 : "3" == gameBg && (scene_bg.spriteFrame = this.gameBg_3); else {
          scene_bg.spriteFrame = this.gameBg_1;
          cc.sys.localStorage.setItem("gameBg", "1");
        }
      },
      initGameInfo: function initGameInfo() {
        var gameInfoNode = this.node.getChildByName("game_info");
        var gameNameLabel = gameInfoNode.getChildByName("game_name").getComponent(cc.Label);
        gameNameLabel.string = "\u8d64\u5cf0\u9ebb\u5c06";
        var gameRoomNum = gameInfoNode.getChildByName("game_room_num").getComponent(cc.Label);
        gameRoomNum.string = "\u623f\u53f7:" + wsft.gameData.roomId;
        var ruleLabel = gameInfoNode.getChildByName("rule").getComponent(cc.Label);
        ruleLabel.string = wsft.gameData.getRule();
        this.timeLabel = gameInfoNode.getChildByName("time").getComponent(cc.Label);
        this.delayLabel = gameInfoNode.getChildByName("delay").getComponent(cc.Label);
        wsft.gameData.gameRoomIntervalFunc = setInterval(this.timeOrDelay.bind(this), 1e3);
      },
      timeOrDelay: function timeOrDelay() {
        this.timeLabel.string = wsft.funcs.formatTime("YYYY-MM-DD hh:mm");
        if (null != wsft.heartBeat.HearTime) if (wsft.heartBeat.HearTime >= 500) {
          this.delayLabel.node.color = new cc.Color(255, 0, 0);
          this.delayLabel.string = wsft.heartBeat.HearTime + "ms";
          wsft.heartBeat.HearTime >= 2e4 && (this.delayLabel.string = "!");
        } else if (wsft.heartBeat.HearTime > 100 && wsft.heartBeat.HearTime < 500) {
          this.delayLabel.node.color = new cc.Color(255, 214, 0);
          this.delayLabel.string = wsft.heartBeat.HearTime + "ms";
        } else if (wsft.heartBeat.HearTime <= 100) {
          this.delayLabel.node.color = new cc.Color(2, 247, 62);
          this.delayLabel.string = wsft.heartBeat.HearTime + "ms";
        }
      },
      initMusic: function initMusic() {
        console.log(wsft.audioFuncs.musicVolume);
        var music_toggle = cc.find("Canvas/game_set/setBack_bg/music_toggle").getComponent(cc.Toggle);
        0 == wsft.audioFuncs.musicVolume ? music_toggle.isChecked = false : music_toggle.isChecked = true;
      },
      initSeats: function initSeats() {
        var seats = wsft.gameData.seats;
        for (var i = 0; i < seats.length; ++i) this.initSingleSeat(seats[i]);
        var _indexMaster = wsft.gameData.mySeatIndex - 1;
        if (seats[_indexMaster].isMaster) {
          this.beginBeforNode.getChildByName("dissolve_btn").active = true;
          this.beginBeforNode.getChildByName("quit_btn").active = false;
        } else {
          this.beginBeforNode.getChildByName("dissolve_btn").active = false;
          this.beginBeforNode.getChildByName("quit_btn").active = true;
        }
      },
      initSingleSeat: function initSingleSeat(seat) {
        var index = wsft.gameData.getLocalIndex(seat.seetIndex);
        this.seatNodeJS.setMaster(index, seat.isMaster);
        this.seatNodeJS.setScore(index, seat.coin);
        this.seatNodeJS.setName(index, seat.nickname);
        this.seatNodeJS.setOffline(index, seat.userState);
        this.seatNodeJS.setHeadImg(index, seat.headimg);
        if (1 == seat.gstate) {
          console.log("\u521d\u59cb\u5316\u5355\u4e2a\u5ea7\u4f4d\u4fe1\u606f==", index);
          this.prepareChild[index].active = true;
        }
      },
      allBtnCallback: function allBtnCallback(event, name) {
        cc.log(name);
        if ("gps" === name) wsft.uiFuncs.showTip("\u656c\u8bf7\u671f\u5f85"); else if ("chat" === name) if (this.chatLayer) this.chatLayer.active = true; else {
          this.chatLayer = cc.instantiate(this.chatLayerfab);
          this.chatLayer.setName("chatLayer");
          this.node.addChild(this.chatLayer, 100);
        } else if ("set" === name) if (this.setLayer) this.setLayer.active = true; else {
          this.setLayer = cc.instantiate(this.setLayerPrefab);
          this.setLayer.setName("setLayer");
          this.node.addChild(this.setLayer, 100);
        } else if ("rule_btn" === name) if (this.ruleLayer) this.ruleLayer.active = true; else {
          this.ruleLayer = cc.instantiate(this.ruleLayerPrefab);
          this.ruleLayer.setName("ruleLayer");
          this.node.addChild(this.ruleLayer, 100);
        } else "wx" === name ? wsft.uiFuncs.showTip("\u656c\u8bf7\u671f\u5f85") : "dissolve" === name ? wsft.sendDataSocket.DissolveRoom() : "quit" === name ? wsft.sendDataSocket.LeaveRoom() : wsft.uiFuncs.showTip("\u529f\u80fd\u4e3a\u5f00\u53d1");
      },
      initAllBtn: function initAllBtn() {
        var self = this;
        var btnHader = function btnHader(btn, name) {
          wsft.event.addBtnEvent(btn, self.node, "gameRoom", "allBtnCallback", name);
        };
        btnHader(this.beginBeforNode.getChildByName("wx_btn"), "wx");
        btnHader(this.beginBeforNode.getChildByName("dissolve_btn"), "dissolve");
        btnHader(this.beginBeforNode.getChildByName("quit_btn"), "quit");
        var btnFindHader = function btnFindHader(btnPath, name) {
          var btn = cc.find(btnPath);
          wsft.event.addBtnEvent(btn, self.node, "gameRoom", "allBtnCallback", name);
        };
        btnFindHader("Canvas/game_set/gps_btn", "gps");
        btnFindHader("Canvas/game_set/setBack_bg/chat_btn", "chat");
        btnFindHader("Canvas/game_set/setBack_bg/gps_btn", "gps");
        btnFindHader("Canvas/game_set/setBack_bg/set_btn", "set");
        btnFindHader("Canvas/game_info/rule_btn", "rule_btn");
      },
      checkBoxCallback: function checkBoxCallback(event, name) {
        console.log(event);
        if ("set_toggle" == name) {
          var setBack_bg = cc.find("Canvas/game_set/setBack_bg");
          var gps_btn = cc.find("Canvas/game_set/gps_btn");
          if (event.node.getComponent(cc.Toggle).isChecked) {
            setBack_bg.active = false;
            gps_btn.active = true;
          } else {
            setBack_bg.active = true;
            gps_btn.active = false;
          }
        }
        if ("music_toggle" == name) if (event.node.getComponent(cc.Toggle).isChecked) wsft.audioFuncs.setMusicVolume(wsft.audioFuncs.stopMusicVolume); else {
          wsft.audioFuncs.stopMusicVolume = wsft.audioFuncs.musicVolume;
          cc.sys.localStorage.setItem("stopMusicVolume", wsft.audioFuncs.stopMusicVolume);
          wsft.audioFuncs.setMusicVolume(0);
        }
      },
      initcheckBox: function initcheckBox() {
        var self = this;
        var checkBoxhander = function checkBoxhander(_sliderPath, _name) {
          var slider = cc.find(_sliderPath);
          wsft.event.addCheckBoxEvent(slider, self.node, "gameRoom", "checkBoxCallback", _name);
        };
        checkBoxhander("Canvas/game_set/set_toggle", "set_toggle");
        checkBoxhander("Canvas/game_set/setBack_bg/music_toggle", "music_toggle");
      }
    });
    cc._RF.pop();
  }, {} ],
  gameRuleLayer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e24064dxlhKyI6m8i3E1Ke3", "gameRuleLayer");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {
        var self = this;
        var rule_bg = this.node.getChildByName("rule_bg");
        var callback = function callback() {
          self.node.active = false;
        };
        wsft.uiFuncs.bindTouchLayer(this.node, rule_bg, callback);
      },
      start: function start() {},
      onEnable: function onEnable() {
        this.setLabel();
      },
      setLabel: function setLabel() {
        var ruleLabel = this.node.getChildByName("rule_label").getComponent(cc.Label);
        ruleLabel.string = wsft.gameData.getRule();
      }
    });
    cc._RF.pop();
  }, {} ],
  gameScene: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "08150PC/iFDKK62tL1fEtzL", "gameScene");
    "use strict";
    function judgeAnGangMingGang(arr, dst) {
      var i = arr.length;
      while (i > 0) {
        i -= 1;
        if (arr[i].num == dst.num && arr[i].type == dst.type) return true;
      }
      return false;
    }
    cc.Class({
      extends: cc.Component,
      properties: {
        gameBg_1: cc.SpriteFrame,
        gameBg_2: cc.SpriteFrame,
        gameBg_3: cc.SpriteFrame,
        ruleLayerPrefab: cc.Prefab,
        setLayerPrefab: cc.Prefab,
        smallGameOverlayerfab: cc.Prefab,
        bigGameOverLayerfab: cc.Prefab,
        chatLayerfab: cc.Prefab,
        dissolveRoomLayerPrefab: cc.Prefab,
        tipLayerfab: cc.Prefab,
        my_hand_card_prefab: cc.Prefab,
        right_hand_card_prefab: cc.Prefab,
        up_hand_card_prefab: cc.Prefab,
        lsft_hand_card_prefab: cc.Prefab,
        _myMJArr: [],
        _selectMJ: null,
        _outCardSprite: [],
        mjActionBtnNode: null,
        mjActionBtnArr: [],
        _playAni: [],
        _otherHandCard: []
      },
      onLoad: function onLoad() {
        wsft.gameData.gameSceneName = "GameScene";
        wsft.funcs.removeLoginMessage();
        wsft.funcs.removeMainMessage();
        this.addComponent("gameRoom");
        this.addComponent("pengGang");
        this.addComponent("arrow");
        this.addComponent("outOldCard");
        this.inintView();
        this.gameNode = this.node.getChildByName("game_node");
        this.gameNode.active = false;
        this.begin = this.node.getChildByName("begin");
        this.begin.active = false;
        this.onBeginGame();
        this.initAllBtn();
        this.addMessgetListen();
      },
      start: function start() {
        wsft.message.sendNoMessage();
      },
      addMessgetListen: function addMessgetListen() {
        wsft.message.addMessage(wsft.protocol.PUSHSENDCARD, this.pushSendCard.bind(this));
        wsft.message.addMessage(wsft.protocol.CATCHCARD, this.catchCard.bind(this));
        wsft.message.addMessage(wsft.protocol.SEATCATCHCARD, this.seatCatchCard.bind(this));
        wsft.message.addMessage(wsft.protocol.RECEIVEOUTCARD, this.receiveOutCard.bind(this));
        wsft.message.addMessage(wsft.protocol.PUSHOUTCARD, this.pushOutCard.bind(this));
        wsft.message.addMessage(wsft.protocol.RECEIVEPENGCARD, this.receivePengCard.bind(this));
        wsft.message.addMessage(wsft.protocol.PUSHPENGCARD, this.pushPengCard.bind(this));
        wsft.message.addMessage(wsft.protocol.RECEIVEPASS, this.receivePass.bind(this));
        wsft.message.addMessage(wsft.protocol.RECEIVEANGANG, this.receiveAnGang.bind(this));
        wsft.message.addMessage(wsft.protocol.PUSHANGANG, this.pushAnGang.bind(this));
        wsft.message.addMessage(wsft.protocol.RECEIVEMINGGANG, this.receiveMingGang.bind(this));
        wsft.message.addMessage(wsft.protocol.PUSHMINGGANG, this.pushMingGang.bind(this));
        wsft.message.addMessage(wsft.protocol.RECEIVEJIEGANG, this.receiveJieGang.bind(this));
        wsft.message.addMessage(wsft.protocol.PUSHJIEGANG, this.pushJieGang.bind(this));
        wsft.message.addMessage(wsft.protocol.RECEIVEJIEPAO, this.receiveJiePao.bind(this));
        wsft.message.addMessage(wsft.protocol.RECEIVEZIMO, this.receiveZiMo.bind(this));
        wsft.message.addMessage(wsft.protocol.PUSHROUNDRESULT, this.pushRoundResult.bind(this));
        wsft.message.addMessage(wsft.protocol.RECEIVEOFFLINERECONNECTION, this.receiveOfflineReconnection.bind(this));
      },
      pushRoundResult: function pushRoundResult(data) {
        console.log("gameRoom===pushRoundResultgr");
        var self = this;
        if (data.reconnect) self.hideAllHandCard(); else {
          for (var h in data.hu) {
            var index = wsft.gameData.getLocalIndex(data.hu[h].seetIndex);
            1 == data.getHuPaiType ? this.playAni(index, "game_hu") : 2 == data.getHuPaiType ? this.playAni(index, "game_zimo") : 3 == data.getHuPaiType && this.playAni(index, "game_hu");
          }
          for (var i = 0; i < wsft.gameData.seats.length; ++i) i == wsft.gameData.mySeatIndex - 1 || this.initOtherHandCard(i + 1);
          setTimeout(function() {
            self.hideAllHandCard();
          }, 3e3);
        }
      },
      receiveOfflineReconnection: function receiveOfflineReconnection(data) {
        console.log("gameScene==receiveOfflineReconnection");
        this.gameNode.active = true;
        if (data.my) {
          this.initAllOtherHandCard();
          this.hidePlayAni();
          this.initMyHandCard(data.my.pais);
        }
      },
      receiveZiMo: function receiveZiMo(data) {
        this.hideHGPGBtn();
      },
      receiveJiePao: function receiveJiePao(data) {
        this.hideHGPGBtn();
      },
      receiveAnGang: function receiveAnGang(data) {
        this.hideHGPGBtn();
        this.playAni(0, "game_gang");
        this.initAllOtherHandCard();
        this.initMyHandCard();
      },
      pushAnGang: function pushAnGang(data) {
        var index = wsft.gameData.getLocalIndex(data.seetIndex);
        console.log("\u6697\u6760(\u63a8\u9001)==" + index);
        this.playAni(index, "game_gang");
        this.initAllOtherHandCard();
        wsft.gameData.mySeatIndex == data.seetIndex ? this.initMyHandCard() : this.moPai(data.seetIndex);
      },
      receiveMingGang: function receiveMingGang(data) {
        this.hideHGPGBtn();
      },
      pushMingGang: function pushMingGang(data) {
        var index = wsft.gameData.getLocalIndex(data.seetIndex);
        console.log("\u660e\u6760(\u63a8\u9001)==" + index);
        this.playAni(index, "game_gang");
        this.initAllOtherHandCard();
        wsft.gameData.mySeatIndex == data.seetIndex ? this.initMyHandCard() : this.moPai(data.seetIndex);
      },
      receiveJieGang: function receiveJieGang(data) {
        this.hideHGPGBtn();
      },
      pushJieGang: function pushJieGang(data) {
        var index = wsft.gameData.getLocalIndex(data.seetIndex);
        console.log("\u63a5\u6760(\u63a8\u9001)==" + index);
        this.playAni(index, "game_gang");
        this.initAllOtherHandCard();
        wsft.gameData.mySeatIndex == data.seetIndex ? this.initMyHandCard() : this.moPai(data.seetIndex);
      },
      receivePass: function receivePass(data) {
        this.hideHGPGBtn();
      },
      receivePengCard: function receivePengCard(data) {
        this.hideHGPGBtn();
      },
      pushPengCard: function pushPengCard(data) {
        var index = wsft.gameData.getLocalIndex(data.seetIndex);
        console.log("\u78b0\u724c(\u63a8\u9001)==" + index);
        this.playAni(index, "game_peng");
        this.initAllOtherHandCard();
        if (wsft.gameData.mySeatIndex == data.seetIndex) {
          if (data.anGang.length > 0 || data.mingGang.length > 0) {
            var arr = [];
            var _anGang = data.anGang;
            var _mingGang = data.mingGang;
            var gang = data.anGang.concat(data.mingGang);
            var _boolGang = false;
            if (1 == gang.length) {
              arr.push(1);
              _boolGang = false;
            } else if (2 == gang.length) {
              arr.push(2);
              arr.push(3);
              _boolGang = true;
            } else if (3 == gang.length) {
              arr.push(2);
              arr.push(3);
              arr.push(4);
              _boolGang = true;
            }
            this.addHGPGBtn(arr, _boolGang, gang, _anGang, _mingGang);
          }
          this.initMyHandCard();
        } else this.moPai(data.seetIndex);
      },
      receiveOutCard: function receiveOutCard(data) {
        this.showOutCard(wsft.gameData.mySeatIndex);
        this.initMyHandCard();
      },
      pushOutCard: function pushOutCard(data) {
        this.showOutCard(data.seetIndex);
        this.initOtherHandCard(data.seetIndex);
        wsft.gameData.mySeatIndex == data.seetIndex && this.initMyHandCard();
        if (data.peng || data.jieGang || data.jiePao) {
          var arr = [];
          data.peng && arr.push(0);
          data.jieGang && arr.push(1);
          data.jiePao && arr.push(5);
          this.addHGPGBtn(arr, false, data.jieGang);
        }
      },
      catchCard: function catchCard(data) {
        console.log("===catchCard", data);
        var mjNum = data.mj.num;
        var mjType = data.mj.type;
        var sprite = this._myMJArr[13];
        sprite.node.mjNum = mjNum;
        sprite.node.mjType = mjType;
        sprite.node.y = 0;
        this.setSpriteFrameByMJ("M_", sprite, mjNum, mjType);
        if (data.anGang.length > 0 || data.mingGang.length > 0 || true == data.ziMo) {
          var arr = [];
          var _anGang = data.anGang;
          var _mingGang = data.mingGang;
          var gang = data.anGang.concat(data.mingGang);
          var _boolGang = false;
          if (1 == gang.length) {
            arr.push(1);
            _boolGang = false;
          } else if (2 == gang.length) {
            arr.push(2);
            arr.push(3);
            _boolGang = true;
          } else if (3 == gang.length) {
            arr.push(2);
            arr.push(3);
            arr.push(4);
            _boolGang = true;
          }
          data.ziMo && arr.push(5);
          this.addHGPGBtn(arr, _boolGang, gang, _anGang, _mingGang);
        }
      },
      seatCatchCard: function seatCatchCard(data) {
        console.log("gameScens==MOPai");
        this.moPai(data.seetIndex);
      },
      pushSendCard: function pushSendCard() {
        var self = this;
        this.begin.active = true;
        setTimeout(function() {
          self.begin.active = false;
          self.gameNode.active = true;
          self.initMyHandCard();
          self.initAllOtherHandCard();
          self.hidePlayAni();
        }, 1e3);
      },
      inintView: function inintView() {
        var gameNode = cc.find("Canvas/game_node");
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
          this._myMJArr.push(sprite);
          sprite.spriteFrame = null;
          my_hand_card.on("click", this.onOutCardClicked, this);
          this.initTouchHandCard(sprite.node);
        }
        var winWidth = cc.winSize.width;
        myHandCard.scaleX *= winWidth / 1280;
        myHandCard.scaleY *= winWidth / 1280;
        var sides = [ "right_node", "up_node", "left_node" ];
        for (var i = 0; i < sides.length; ++i) {
          this._otherHandCard[sides[i]] = [];
          var sideChild = gameNode.getChildByName(sides[i]);
          var hand_card = sideChild.getChildByName("hand_card");
          var other_hand_card = null;
          for (var j = 0; j < 14; ++j) {
            if ("right_node" == sides[i]) {
              other_hand_card = cc.instantiate(this.right_hand_card_prefab);
              other_hand_card.zIndex = 14 - j;
              other_hand_card.x = 0;
              other_hand_card.y = 25 * j;
              13 == j && (other_hand_card.y += 40);
            } else if ("up_node" == sides[i]) {
              other_hand_card = cc.instantiate(this.up_hand_card_prefab);
              other_hand_card.x = 0 - 40 * j;
              other_hand_card.y = 0;
              13 == j && (other_hand_card.x -= 25);
            } else if ("left_node" == sides[i]) {
              other_hand_card = cc.instantiate(this.lsft_hand_card_prefab);
              other_hand_card.x = 0;
              other_hand_card.y = -25 * j;
              13 == j && (other_hand_card.y -= 40);
            }
            other_hand_card.active = false;
            hand_card.addChild(other_hand_card);
            this._otherHandCard[sides[i]].push(other_hand_card);
          }
        }
        var sidess = [ "myself_node", "right_node", "up_node", "left_node" ];
        for (var i = 0; i < sidess.length; ++i) {
          var side = sidess[i];
          var sideChild = gameNode.getChildByName(side);
          this._outCardSprite[i] = sideChild.getChildByName("out_card").getComponent(cc.Sprite);
          this._playAni[i] = sideChild.getChildByName("animation_node").getComponent(cc.Animation);
        }
        this.mjActionBtnNode = gameNode.getChildByName("mj_action_btn");
        this.mjActionBtnArr.push(this.mjActionBtnNode.getChildByName("peng"));
        this.mjActionBtnArr.push(this.mjActionBtnNode.getChildByName("gang"));
        this.mjActionBtnArr.push(this.mjActionBtnNode.getChildByName("gang1"));
        this.mjActionBtnArr.push(this.mjActionBtnNode.getChildByName("gang2"));
        this.mjActionBtnArr.push(this.mjActionBtnNode.getChildByName("gang3"));
        this.mjActionBtnArr.push(this.mjActionBtnNode.getChildByName("hu"));
        this.hideHGPGBtn();
        this.mjActionBtnNode.on(cc.Node.EventType.TOUCH_START, function(t) {
          console.log("\u78b0 \u521a \u80e1 \u8fc7");
        }, this);
      },
      addHGPGBtn: function addHGPGBtn(_table, _boolGang, _gangLabel, _anGang, _mingGang) {
        this.mjActionBtnNode.active = true;
        for (var i = 0; i < _table.length; ++i) {
          this.mjActionBtnArr[_table[i]].active = true;
          this.mjActionBtnArr[_table[i]].x = 250 - 125 * i;
        }
        if (1 == _gangLabel.length) {
          this.mjActionBtnArr[1].mjNum = _gangLabel[0].num;
          this.mjActionBtnArr[1].mjType = _gangLabel[0].type;
        }
        if (_boolGang) for (var i = 0; i < _gangLabel.length; ++i) {
          var sprite = this.mjActionBtnArr[i + 2].getChildByName("mjgang").getComponent(cc.Sprite);
          sprite.spriteFrame = wsft.mjCard.getSpriteFrameByMJ("M_", _gangLabel[i].num, _gangLabel[i].type);
          this.mjActionBtnArr[i + 2].mjNum = _gangLabel[i].num;
          this.mjActionBtnArr[i + 2].mjType = _gangLabel[i].type;
          judgeAnGangMingGang(_anGang, _gangLabel[i]) && (this.mjActionBtnArr[i + 2].gangType = "anGang");
          judgeAnGangMingGang(_mingGang, _gangLabel[i]) && (this.mjActionBtnArr[i + 2].gangType = "mingGang");
        }
      },
      hideHGPGBtn: function hideHGPGBtn() {
        this.mjActionBtnNode.active = false;
        for (var i = 0; i < this.mjActionBtnNode.childrenCount; ++i) {
          var child = this.mjActionBtnNode.children[i];
          child.active = false;
        }
        this.mjActionBtnNode.getChildByName("pass").active = true;
      },
      playAni: function playAni(index, name) {
        this._playAni[index].node.active = true;
        this._playAni[index].play(name);
      },
      hidePlayAni: function hidePlayAni() {
        for (var i = 0; i < this._playAni.length; ++i) this._playAni[i].node.active = false;
      },
      moPai: function moPai(seetIndex) {
        console.log("moPai==", seetIndex);
        var localIndex = wsft.gameData.getLocalIndex(seetIndex);
        if (0 == localIndex) return;
        var _side = wsft.mjCard.getSide(localIndex);
        this._otherHandCard[_side][13].active = true;
      },
      initMyHandCard: function initMyHandCard(_HandCard) {
        var seats = wsft.gameData.seats;
        var mySeat = seats[wsft.gameData.mySeatIndex - 1];
        var _myhandCard = _HandCard || mySeat.handCard;
        var myHandCard = this.sortHandCard(_myhandCard);
        console.log("_myhandCard==", myHandCard);
        if (null == myHandCard) return;
        var mjPGNum = 3 * (mySeat.pengs.length + mySeat.anGangs.length + mySeat.mingGangs.length + mySeat.jieGangs.length);
        for (var i = 0; i < myHandCard.length; ++i) {
          var mjNum = myHandCard[i].num;
          var mjType = myHandCard[i].type;
          var sprite = this._myMJArr[mjPGNum + i];
          sprite.node.mjNum = mjNum;
          sprite.node.mjType = mjType;
          sprite.node.y = 0;
          this.setSpriteFrameByMJ("M_", sprite, mjNum, mjType);
        }
        for (var i = 0; i < mjPGNum; ++i) {
          var sprite = this._myMJArr[i];
          sprite.node.active = false;
          sprite.node.mjNum = null;
          sprite.node.mjType = null;
          sprite.spriteFrame = null;
        }
        for (var i = mjPGNum + myHandCard.length; i < this._myMJArr.length; ++i) {
          var sprite = this._myMJArr[i];
          sprite.node.active = false;
          sprite.node.mjNum = null;
          sprite.node.mjType = null;
          sprite.spriteFrame = null;
        }
      },
      initAllOtherHandCard: function initAllOtherHandCard() {
        var seats = wsft.gameData.seats;
        for (var i in seats) {
          var seatData = seats[i];
          seatData.seetIndex != wsft.gameData.mySeatIndex && this.initOtherHandCard(seatData.seetIndex);
        }
      },
      hideAllHandCard: function hideAllHandCard() {
        var sides = [ "myself_node", "right_node", "up_node", "left_node" ];
        for (var i = 0; i < sides.length; ++i) {
          var side = sides[i];
          this.hideHandCard(side);
        }
      },
      hideHandCard: function hideHandCard(side) {
        var gameChild = this.node.getChildByName("game_node");
        var myself = gameChild.getChildByName(side);
        var handCardroot = myself.getChildByName("hand_card");
        if (handCardroot) for (var i = 0; i < handCardroot.childrenCount; ++i) handCardroot.children[i].active = false;
      },
      initOtherHandCard: function initOtherHandCard(seetIndex) {
        var localIndex = wsft.gameData.getLocalIndex(seetIndex);
        var seatData = wsft.gameData.seats[seetIndex - 1];
        if (0 == localIndex) return;
        var _side = wsft.mjCard.getSide(localIndex);
        var num = 3 * (seatData.pengs.length + seatData.anGangs.length + seatData.mingGangs.length + seatData.jieGangs.length);
        for (var i = 0; i < num; ++i) this._otherHandCard[_side][i].active = false;
        for (var i = num; i < 14; ++i) {
          var sprite = this._otherHandCard[_side][i].getComponent(cc.Sprite);
          sprite.node.active = true;
          if ("up_node" == _side) {
            sprite.node.scaleX = 1;
            sprite.node.scaleY = 1;
          }
          sprite.spriteFrame = wsft.mjCard.getEmptySpriteFrameHand(_side);
        }
        this._otherHandCard[_side][13].active = false;
        if (seatData.handCard.length > 0) {
          var pre = wsft.mjCard.getPre(localIndex);
          var _handCard = this.sortHandCard(seatData.handCard);
          for (var i = 0; i < _handCard.length; ++i) {
            var mjNum = _handCard[i].num;
            var mjType = _handCard[i].type;
            var sprite = this._otherHandCard[_side][i + num].getComponent(cc.Sprite);
            if ("up_node" == _side) {
              sprite.node.scaleX = .72;
              sprite.node.scaleY = .72;
            }
            sprite.node.active = true;
            sprite.spriteFrame = wsft.mjCard.getSpriteFrameByMJ(pre, mjNum, mjType);
          }
        }
        console.log("initOtherHandCard");
      },
      sortHandCard: function sortHandCard(HandCard) {
        HandCard.sort(function(a, b) {
          var value1 = a.type, value2 = b.type;
          if (value1 === value2) return a.num - b.num;
          return value1 - value2;
        });
        return HandCard;
      },
      setSpriteFrameByMJ: function setSpriteFrameByMJ(pre, sprite, mjNum, mjType) {
        sprite.spriteFrame = wsft.mjCard.getSpriteFrameByMJ(pre, mjNum, mjType);
        sprite.node.active = true;
      },
      hideOutCard: function hideOutCard() {
        for (var i = 0; i < this._outCardSprite.length; ++i) this._outCardSprite[i].node.active = false;
      },
      showOutCard: function showOutCard(_index) {
        var self = this;
        var outCard = wsft.gameData.outCard;
        var index = wsft.gameData.getLocalIndex(_index);
        var sprite = this._outCardSprite[index];
        sprite.spriteFrame = wsft.mjCard.getSpriteFrameByMJ("M_", outCard.num, outCard.type);
        sprite.node.active = true;
        setTimeout(function() {
          self.hideOutCard();
        }, 500);
      },
      onBeginGame: function onBeginGame() {},
      initTouchHandCard: function initTouchHandCard(node) {
        node.on(cc.Node.EventType.TOUCH_START, function(event) {
          console.log("START");
          if (wsft.gameData.turnIndex != wsft.gameData.mySeatIndex) return;
          node.interactable = node.getComponent(cc.Button).interactable;
          if (!node.interactable) return;
          node.opacity = 255;
          this._outCard.active = false;
          this._outCard.getComponent(cc.Sprite).spriteFrame = node.getComponent(cc.Sprite).spriteFrame;
          this._outCard.x = event.getLocationX() - cc.winSize.width / 2;
          this._outCard.y = event.getLocationY() - cc.winSize.height / 2;
        }.bind(this));
        node.on(cc.Node.EventType.TOUCH_MOVE, function(event) {
          console.log("MOVE");
          if (wsft.gameData.turnIndex != wsft.gameData.mySeatIndex) return;
          if (!node.interactable) return;
          if (Math.abs(event.getDeltaX()) + Math.abs(event.getDeltaY()) < .5) return;
          this._outCard.active = true;
          node.opacity = 150;
          this._outCard.opacity = 255;
          this._outCard.x = event.getLocationX() - cc.winSize.width / 2;
          this._outCard.y = event.getLocationY() - cc.winSize.height / 2;
          node.y = 0;
        }.bind(this));
        node.on(cc.Node.EventType.TOUCH_END, function(event) {
          console.log("END");
          if (wsft.gameData.turnIndex != wsft.gameData.mySeatIndex) return;
          if (!node.interactable) return;
          this._outCard.active = false;
          node.opacity = 255;
          if (event.getLocationY() > 180) {
            console.log("\u51fa\u724c==");
            this.shootCard(node.mjNum, node.mjType);
          }
        }.bind(this));
        node.on(cc.Node.EventType.TOUCH_CANCEL, function(event) {
          console.log("TOUCH_CANCEL");
          if (wsft.gameData.turnIndex != wsft.gameData.mySeatIndex) return;
          if (!node.interactable) return;
          this._outCard.active = false;
          node.opacity = 255;
          if (event.getLocationY() > 180) {
            console.log("\u51fa\u724c==");
            this.shootCard(node.mjNum, node.mjType);
          } else null != this._selectMJ && this._selectMJ == node && (this._selectMJ.y = 15);
        }.bind(this));
      },
      onOutCardClicked: function onOutCardClicked(event) {
        if (wsft.gameData.turnIndex != wsft.gameData.mySeatIndex) {
          console.log("\u4e0d\u8be5\u4f60\u51fa\u724c=" + wsft.gameData.turnIndex);
          return;
        }
        for (var i = 0; i < this._myMJArr.length; ++i) if (event.target == this._myMJArr[i].node) {
          if (event.target == this._selectMJ) {
            console.log("\u51fa\u724c");
            this.shootCard(this._selectMJ.mjNum, this._selectMJ.mjType);
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
      shootCard: function shootCard(mjNum, mjType) {
        if (null == mjNum || null == mjType) return;
        console.log("num==" + mjNum);
        console.log("mjType==" + mjType);
        wsft.sendDataSocket.OutCard(mjNum, mjType);
      },
      allBtnCallback: function allBtnCallback(event, name) {
        cc.log(name);
        if ("pass" === name) wsft.sendDataSocket.PassCard(); else if ("peng" === name) wsft.sendDataSocket.PengCard(); else if ("gang" === name) "jieGang" == wsft.gameData.gangType ? wsft.sendDataSocket.JieGang() : "anGang" == wsft.gameData.gangType ? wsft.sendDataSocket.AnGang(event.target.mjNum, event.target.mjType) : "mingGang" == wsft.gameData.gangType && wsft.sendDataSocket.MingGang(event.target.mjNum, event.target.mjType); else if ("gang1" === name) "anGang" == event.target.gangType ? wsft.sendDataSocket.AnGang(event.target.mjNum, event.target.mjType) : "mingGang" == event.target.gangType && wsft.sendDataSocket.MingGang(event.target.mjNum, event.target.mjType); else if ("gang2" === name) "anGang" == event.target.gangType ? wsft.sendDataSocket.AnGang(event.target.mjNum, event.target.mjType) : "mingGang" == event.target.gangType && wsft.sendDataSocket.MingGang(event.target.mjNum, event.target.mjType); else if ("gang3" === name) "anGang" == event.target.gangType ? wsft.sendDataSocket.AnGang(event.target.mjNum, event.target.mjType) : "mingGang" == event.target.gangType && wsft.sendDataSocket.MingGang(event.target.mjNum, event.target.mjType); else if ("hu" === name) {
          console.log("wsft.gameData.huType==", wsft.gameData.huType);
          "jiePao" == wsft.gameData.huType ? wsft.sendDataSocket.JiePao() : "ziMo" == wsft.gameData.huType && wsft.sendDataSocket.ZiMo();
        }
      },
      initAllBtn: function initAllBtn() {
        var self = this;
        var btnHader = function btnHader(btnPath, name) {
          var btn = cc.find(btnPath);
          wsft.event.addBtnEvent(btn, self.node, "gameScene", "allBtnCallback", name);
        };
        btnHader("Canvas/game_node/mj_action_btn/pass", "pass");
        btnHader("Canvas/game_node/mj_action_btn/peng", "peng");
        btnHader("Canvas/game_node/mj_action_btn/gang", "gang");
        btnHader("Canvas/game_node/mj_action_btn/gang1", "gang1");
        btnHader("Canvas/game_node/mj_action_btn/gang2", "gang2");
        btnHader("Canvas/game_node/mj_action_btn/gang3", "gang3");
        btnHader("Canvas/game_node/mj_action_btn/hu", "hu");
      }
    });
    cc._RF.pop();
  }, {} ],
  gameSeat: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "54e03p3re1OX4tQ/Gp4noFt", "gameSeat");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        seatHead: [ cc.Node ],
        headImg: [ cc.Node ],
        infoLayerPrefab: cc.Prefab
      },
      onLoad: function onLoad() {
        this.node.zIndex = 2;
        this.initAllBtn();
      },
      initSeat: function initSeat() {
        if (3 == wsft.gameData.playerNum) this.seatHead[2].active = false; else if (2 == wsft.gameData.playerNum) {
          this.seatHead[1].active = false;
          this.seatHead[3].active = false;
        }
        for (var i = 0; i < 4; ++i) this.restHead(i);
      },
      restHead: function restHead(index) {
        this.seatHead[index].getChildByName("offline").active = false;
        this.seatHead[index].getChildByName("name").active = false;
        this.seatHead[index].getChildByName("score_nmu").active = false;
        this.seatHead[index].getChildByName("zhuang").active = false;
        this.seatHead[index].getChildByName("fang").active = false;
        this.seatHead[index].getChildByName("qipao").active = false;
        this.seatHead[index].getChildByName("biaoqing").active = false;
        this.headImg[index].active = false;
      },
      setMaster: function setMaster(index, _bool) {
        this.seatHead[index].getChildByName("fang").active = _bool;
      },
      setZhuang: function setZhuang(index, _bool) {
        this.seatHead[index].getChildByName("zhuang").active = _bool;
      },
      setScore: function setScore(index, scoreNum) {
        this.seatHead[index].getChildByName("score_nmu").active = true;
        this.seatHead[index].getChildByName("score_nmu").getComponent(cc.Label).string = scoreNum;
      },
      setName: function setName(index, name) {
        var _name = wsft.uiFuncs.trimName(name, 4, "...");
        this.seatHead[index].getChildByName("name").active = true;
        this.seatHead[index].getChildByName("name").getComponent(cc.Label).string = _name;
      },
      setOffline: function setOffline(index, _userState) {
        var _bool = false;
        2 == _userState && (_bool = true);
        this.seatHead[index].getChildByName("offline").active = _bool;
      },
      setHeadImg: function setHeadImg(index, _headurl) {
        this.headImg[index].active = true;
        var headjs = this.headImg[index].getComponent("imgHead");
        headjs.setHead(_headurl);
      },
      setQiPao: function setQiPao(index, str) {
        var self = this;
        var qipao = this.seatHead[index].getChildByName("qipao");
        qipao.getChildByName("label").getComponent(cc.Label).string = str;
        qipao.active = true;
        setTimeout(function() {
          self.seatHead[index].getChildByName("qipao").active = false;
        }, 1500);
      },
      setBiaoQing: function setBiaoQing(index, _sprite) {
        var self = this;
        this.seatHead[index].getChildByName("biaoqing").getComponent(cc.Sprite).spriteFrame = _sprite;
        this.seatHead[index].getChildByName("biaoqing").active = true;
        setTimeout(function() {
          self.seatHead[index].getChildByName("biaoqing").active = false;
        }, 1500);
      },
      allBtnCallback: function allBtnCallback(event, _name) {
        cc.log(_name);
        if (!this.infoLayer) {
          this.infoLayer = cc.instantiate(this.infoLayerPrefab);
          this.infoLayer.setName("infoLayer");
          var scene = cc.director.getScene();
          scene.addChild(this.infoLayer);
        }
        var name = null;
        name = wsft.gameData.mySeatIndex + _name - 1;
        name >= 4 && (name -= 4);
        var _headurl = wsft.gameData.seats[name].headimg;
        var _nickname = wsft.gameData.seats[name].nickname;
        var _uid = wsft.gameData.seats[name].uid;
        var _ip = wsft.gameData.seats[name].ip;
        var info = this.infoLayer.getComponent("infoLayer");
        info.setInfo(_headurl, _nickname, _uid, _ip, false);
        this.infoLayer.active = true;
      },
      initAllBtn: function initAllBtn() {
        cc.log("btn==============");
        var self = this;
        var btnHader = function btnHader(btn, name) {
          wsft.event.addBtnEvent(btn, self.node, "gameSeat", "allBtnCallback", name);
        };
        for (var i = 0; i < 4; ++i) btnHader(this.headImg[i], i);
      }
    });
    cc._RF.pop();
  }, {} ],
  heartbeat: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "defb69WDa1EmIh2jdZnDlMF", "heartbeat");
    "use strict";
    cc.Class({
      ctor: function ctor() {
        this._interval = 0;
        this._timeoutNum = 0;
        this._num = 3;
        this._intervalFunc = null;
        this.HearTime = 0;
        wsft.message.addMessage(wsft.protocol.MSG_HEART_BEAT, this.onHeartbeatBack.bind(this));
      },
      onHeartbeatBack: function onHeartbeatBack() {
        cc.log("onHeartbeatBack...");
        this._timeoutNum = 0;
        this.lastRecieveTime = Date.now();
        this.HearTime = this.lastRecieveTime - this.lastSendTime;
      },
      startHeartBeat: function startHeartBeat(interval, num) {
        this._interval = interval || this._interval;
        this._num = num || this._num;
        this._timeoutNum = 0;
        this._startTick();
      },
      _startTick: function _startTick() {
        this.stopHeartBeat();
        this._intervalFunc = setInterval(this._sendMsg.bind(this), 1e3 * this._interval);
      },
      _sendMsg: function _sendMsg() {
        if (++this._timeoutNum > this._num) {
          cc.log("Heart beat time out.");
          this._timeoutNum = 0;
          wsft._socket.reconnect();
          return;
        }
        this.lastSendTime = Date.now();
        wsft.sendDataSocket.HeadrtBeat();
      },
      stopHeartBeat: function stopHeartBeat() {
        if (this._intervalFunc) {
          clearInterval(this._intervalFunc);
          this._intervalFunc = null;
        }
      },
      startHertBeatReconnect: function startHertBeatReconnect() {
        this.stopHeartBeat();
        this._timeoutNum = this._num + 1;
        this._sendMsg();
      }
    });
    cc._RF.pop();
  }, {} ],
  https: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9fbcaRcV15Ii5MZK8fXsucA", "https");
    "use strict";
    var _typeof = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(obj) {
      return typeof obj;
    } : function(obj) {
      return obj && "function" === typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    window.wsft = window.wsft || {};
    var https = {
      get: function get(url, callback, dataInfo) {
        if (dataInfo) {
          var connecter = "?";
          "&" === url[url.length - 1] ? connecter = "" : url.indexOf("?") > 0 && (connecter = "&");
          var params = joinParams(dataInfo);
          params.length > 0 && (url += connecter + params);
        }
        var xhr = cc.loader.getXMLHttpRequest();
        xhr.timeout = 3e4;
        xhr.ontimeout = function() {
          cc.log("[tydf.https] get: request time out.");
          wsft.uiFuncs.showTip("\u8fde\u63a5\u8d85\u65f6");
        };
        xhr.onreadystatechange = function() {
          4 === xhr.readyState && callback && callback(xhr.status, xhr.responseText);
        };
        xhr.open("GET", encodeURI(url), true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.send();
      },
      post: function post(url, callback, dataInfo) {
        console.log("post==" + url);
        var xhr = cc.loader.getXMLHttpRequest();
        xhr.timeout = 3e4;
        xhr.ontimeout = function() {
          cc.log("wsft_http_post: request time out.");
          wsft.uiFuncs.showTip("\u8fde\u63a5\u8d85\u65f6,\u8bf7\u68c0\u67e5\u7f51\u7edc!");
          wsft.loading.hide();
        };
        xhr.onreadystatechange = function() {
          4 === xhr.readyState && callback && callback(xhr.status, xhr.responseText);
        };
        xhr.open("POST", encodeURI(url), true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.send(joinParams(dataInfo));
      },
      postJson: function postJson(url, callback, dataInfo) {
        var xhr = cc.loader.getXMLHttpRequest();
        xhr.onreadystatechange = function() {
          4 === xhr.readyState && callback && callback(xhr.status, xhr.responseText);
        };
        xhr.open("POST", encodeURI(url), true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.send(dataInfo);
      },
      loadZipText: function loadZipText(url, callback) {
        var xhr = cc.loader.getXMLHttpRequest();
        xhr.onreadystatechange = function() {
          4 === xhr.readyState && callback && callback(xhr.status, xhr.responseText);
        };
        xhr.open("GET", encodeURI(url), true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.send();
      }
    };
    function joinParams(dataInfo) {
      if ("object" === ("undefined" === typeof dataInfo ? "undefined" : _typeof(dataInfo))) {
        if (null === dataInfo) return;
        if (Array.isArray(dataInfo)) return JSON.stringify(dataInfo);
        var keys = Object.keys(dataInfo);
        var params = keys.map(function(key, index) {
          return key + "=" + dataInfo[key] + (index === keys.length - 1 ? "" : "&");
        });
        return params.join("");
      }
      return dataInfo + "";
    }
    wsft.https = module.exports = https;
    cc._RF.pop();
  }, {} ],
  imgHead: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "73ab1zOUrFFM4FdskEBEeRC", "imgHead");
    "use strict";
    var Base64 = {
      _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
      encode: function encode(input) {
        var output = "";
        var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
        var i = 0;
        while (i < input.length) {
          chr1 = input[i++];
          chr2 = input[i++];
          chr3 = input[i++];
          enc1 = chr1 >> 2;
          enc2 = (3 & chr1) << 4 | chr2 >> 4;
          enc3 = (15 & chr2) << 2 | chr3 >> 6;
          enc4 = 63 & chr3;
          isNaN(chr2) ? enc3 = enc4 = 64 : isNaN(chr3) && (enc4 = 64);
          output = output + Base64._keyStr.charAt(enc1) + Base64._keyStr.charAt(enc2) + Base64._keyStr.charAt(enc3) + Base64._keyStr.charAt(enc4);
        }
        return output;
      }
    };
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {
        var sp = this.node.getComponent(cc.Sprite);
        sp.spriteFrame = null;
      },
      setHead: function setHead(_headurl) {
        var self = this;
        cc.loader.load({
          url: _headurl,
          type: "png"
        }, function(err, texture) {
          if (err) {
            cc.log("getHeadImg err " + err);
            return;
          }
          var spriteFrame = new cc.SpriteFrame(texture);
          if (spriteFrame) {
            self._spriteFrame = spriteFrame;
            self.setSpriteFrame();
          }
        });
      },
      setSpriteFrame: function setSpriteFrame() {
        if (this._spriteFrame) {
          var sp = this.node.getComponent(cc.Sprite);
          if (sp) {
            this.active = true;
            sp.spriteFrame = this._spriteFrame;
            sp.node.width = 90;
            sp.node.height = 90;
          }
        }
      },
      setHeadImgNUll: function setHeadImgNUll() {
        this.node.getComponent(cc.Sprite).spriteFrame = null;
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
      properties: {
        sprHeadImg: cc.Sprite
      },
      onLoad: function onLoad() {
        var self = this;
        this.initAllBtn();
        var info_bg = this.node.getChildByName("info_bg");
        var callback = function callback() {
          self.node.active = false;
        };
        wsft.uiFuncs.bindTouchLayer(this.node, info_bg, callback);
      },
      start: function start() {},
      onEnable: function onEnable() {
        wsft.loading.hide();
      },
      setInfo: function setInfo(headimg, nickname, uid, ip, _isCopy) {
        this.node.getChildByName("copy_btn").active = _isCopy;
        var _name = this.node.getChildByName("info_name").getComponent(cc.Label);
        var _id = this.node.getChildByName("info_id").getComponent(cc.Label);
        var _ip = this.node.getChildByName("info_ip").getComponent(cc.Label);
        var imgHead = this.sprHeadImg.node.getComponent("imgHead");
        imgHead.setHead(headimg);
        _name.string = nickname;
        _id.string = "ID:" + uid;
        _ip.string = "IP" + ip;
        this.id = uid;
      },
      allBtnCallback: function allBtnCallback(event, name) {
        cc.log(name);
        if ("close" === name) this.node.active = false; else if ("copy" === name) {
          var _copyStr = "" + this.id;
          cc.sys.isBrowser && (_copy(_copyStr) ? wsft.uiFuncs.showTip("\u590d\u5236ID\u6210\u529f", 32) : wsft.uiFuncs.showTip("\u590d\u5236ID\u5931\u8d25", 32));
        }
      },
      initAllBtn: function initAllBtn() {
        var self = this;
        var btnHader = function btnHader(btn, name) {
          wsft.event.addBtnEvent(btn, self.node, "infoLayer", "allBtnCallback", name);
        };
        btnHader(this.node.getChildByName("close_btn"), "close");
        btnHader(this.node.getChildByName("copy_btn"), "copy");
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
        config.onorientationChange = wsft.adaptiveView.judgeView();
        var pbmsg = require("pbMsg");
        wsft.pbMsg = new pbmsg();
        var heartbeat = require("heartbeat");
        wsft.heartBeat = new heartbeat();
        var userdata = require("userData");
        wsft.userData = new userdata();
        var gamedata = require("gameData");
        wsft.gameData = new gamedata();
      }
    });
    cc._RF.pop();
  }, {
    adaptiveView: "adaptiveView",
    audioFuncs: "audioFuncs",
    gameData: "gameData",
    heartbeat: "heartbeat",
    pbMsg: "pbMsg",
    userData: "userData"
  } ],
  joinLayer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "970c4W6SZpPCZTML22KzuLR", "joinLayer");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        joinSRK: cc.Node,
        btnNode: cc.Node
      },
      onLoad: function onLoad() {
        var self = this;
        this.num_lable = [];
        this.inputNum = 0;
        var join_bg = this.node.getChildByName("jion_bg");
        this.initAllBtn();
        for (var i = 0; i < 6; ++i) {
          var lable = this.joinSRK.getChildByName("join_num_label_" + i).getComponent(cc.Label);
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
        wsft.loading.hide();
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
        wsft.loading.show("\u6b63\u5728\u52a0\u5165\u623f\u95f4...");
        wsft.sendDataSocket.JoinRoomCm(roomId);
      },
      onDisable: function onDisable() {},
      allBtnCallback: function allBtnCallback(event, name) {
        cc.log(name);
        "close" === name ? this.node.active = false : 10 == name ? this.resetBtn() : 11 == name ? this.delLabelBtn() : this.inputLabel(name);
      },
      initAllBtn: function initAllBtn() {
        cc.log("btn==============");
        var self = this;
        var btnHader = function btnHader(btn, name) {
          wsft.event.addBtnEvent(btn, self.node, "joinLayer", "allBtnCallback", name);
        };
        btnHader(this.node.getChildByName("close_btn"), "close");
        for (var i = 0; i < 12; ++i) btnHader(this.btnNode.getChildByName("num_" + i), i);
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
  loading: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "dbd9f8ol3VA9aDcm8glKlmD", "loading");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        loading: cc.Node,
        loadingLabel: cc.Label,
        _isShow: false
      },
      onLoad: function onLoad() {
        if (null == wsft) return;
        this.node.zIndex = 9999;
        var loading_bg = this.node.getChildByName("loading_bg");
        wsft.uiFuncs.bindTouchLayer(this.node, loading_bg);
        wsft.loading = this;
        this.node.active = this._isShow;
      },
      show: function show(_str) {
        this._isShow = true;
        this.node && (this.node.active = this._isShow);
        if (this.loadingLabel) {
          null == _str && (_str = "");
          this.loadingLabel.string = _str;
        }
      },
      hide: function hide() {
        this._isShow = false;
        this.node && (this.node.active = this._isShow);
      },
      update: function update(dt) {
        this.loading.rotation = this.loading.rotation + 45 * dt;
      }
    });
    cc._RF.pop();
  }, {} ],
  loginScene: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a6b89FrofBG0KA5BwcFj7Zw", "loginScene");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        agreementLayerPrafab: cc.Prefab,
        uid: null,
        sessionCode: null,
        loginTime: null
      },
      onLoad: function onLoad() {
        wsft.gameData.gameSceneName = "LoginScene";
        wsft.funcs.removeGameMessage();
        wsft.funcs.removeMainMessage();
      },
      start: function start() {
        var self = this;
        this.initAllBtn();
        this.agreementCheckBox = cc.find("Canvas/agreement_checkBox").getComponent(cc.Toggle);
        wsft.message.addMessage(wsft.protocol.TCP_ONOPEN, this.tcpOnOpen.bind(this));
      },
      tcpOnOpen: function tcpOnOpen() {
        console.log("\u8fde\u63a5\u6210\u529f");
        wsft.heartBeat.startHeartBeat(5, 3);
        wsft.sendDataSocket.LoginCm(this.uid, this.sessionCode, this.loginTime);
      },
      loginCallback: function loginCallback(status, response) {
        console.log("========" + response);
        console.log("========" + status);
        var self = this;
        if (200 == status) {
          var responseObj = JSON.parse(response);
          console.log("HTTP===");
          console.log(responseObj);
          if (1 == responseObj.code) {
            wsft.userData.uid = responseObj.uid;
            this.uid = responseObj.uid;
            this.sessionCode = responseObj.target.sessionCode;
            this.loginTime = responseObj.loginTime;
            var url = responseObj.target.URL;
            cc.sys.localStorage.setItem("sessionCode", this.sessionCode);
            wsft._socket.connect(url);
          } else {
            wsft.loading.hide();
            wsft.uiFuncs.showTip("\u91cd\u65b0\u6389\u8d77\u5fae\u4fe1");
          }
        } else {
          wsft.loading.hide();
          wsft.uiFuncs.showTip("\u767b\u5f55\u8fde\u63a5\u5f02\u5e38\uff1a" + status);
        }
      },
      login: function login() {
        if (config.isDebug) {
          var edit = cc.find("Canvas/debugLogin/editBox").getComponent(cc.EditBox);
          var _name = edit.string;
          var _password = edit.string;
          cc.log("_name==" + _name);
          if ("" == _name) {
            wsft.uiFuncs.showTip("\u8bf7\u8f93\u5165\u8d26\u53f7", 30);
            wsft.loading.hide();
          } else wsft.sendDataHttp.Login_name_paw(_name, _password, this.loginCallback.bind(this));
        } else {
          var url = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx11e205ff507dc176&redirect_uri=http://www.baidu.com&response_type=code&scope=SCOPE&state=STATE#wechat_redirect";
          wsft.https.get(url, this.loginCallback.bind(this));
        }
      },
      allBtnCallback: function allBtnCallback(event, name) {
        cc.log(name);
        var self = this;
        if ("wx" === name) if (this.agreementCheckBox.isChecked) {
          wsft.loading.show("\u6b63\u5728\u94fe\u63a5\u670d\u52a1\u5668...");
          this.login();
        } else {
          wsft.message.sendMessage(wsft.protocol.TCP_ONOPEN, "");
          wsft.uiFuncs.showTip("\u8bf7\u540c\u610f\u7528\u6237\u4f7f\u7528\u534f\u8bae\u8bf7\u540c\u610f\u7528\u6237\u4f7f\u7528\u534f\u8bae\u8bf7\u540c\u610f\u7528\u6237\u4f7f\u7528\u534f\u8bae", 30);
        } else if ("agreement" === name) if (this.agreementLayer) this.agreementLayer.active = true; else {
          this.agreementLayer = cc.instantiate(this.agreementLayerPrafab);
          this.agreementLayer.setName("agreementLayer");
          this.node.addChild(this.agreementLayer);
        }
      },
      initAllBtn: function initAllBtn() {
        var self = this;
        var btnHader = function btnHader(btnPath, name) {
          var btn = cc.find(btnPath);
          wsft.event.addBtnEvent(btn, self.node, "loginScene", "allBtnCallback", name);
        };
        btnHader("Canvas/wx_btn", "wx");
        btnHader("Canvas/agreement_btn", "agreement");
      },
      jumpScene: function jumpScene() {
        wsft.loading.show("\u6b63\u5728\u52a0\u8f7d\u8d44\u6e90\uff0c\u8bf7\u7a0d\u5019...");
        cc.director.loadScene("MainScene");
      }
    });
    cc._RF.pop();
  }, {} ],
  long: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a0f69vdkIdEPJM/6vq9Bne0", "long");
    "use strict";
    var _typeof = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(obj) {
      return typeof obj;
    } : function(obj) {
      return obj && "function" === typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    (function(global, factory) {
      "function" === typeof define && define["amd"] ? define([], factory) : "function" === typeof require && "object" === ("undefined" === typeof module ? "undefined" : _typeof(module)) && module && module["exports"] ? module["exports"] = factory() : (global["dcodeIO"] = global["dcodeIO"] || {})["Long"] = factory();
    })(void 0, function() {
      function Long(low, high, unsigned) {
        this.low = 0 | low;
        this.high = 0 | high;
        this.unsigned = !!unsigned;
      }
      Long.prototype.__isLong__;
      Object.defineProperty(Long.prototype, "__isLong__", {
        value: true,
        enumerable: false,
        configurable: false
      });
      function isLong(obj) {
        return true === (obj && obj["__isLong__"]);
      }
      Long.isLong = isLong;
      var INT_CACHE = {};
      var UINT_CACHE = {};
      function fromInt(value, unsigned) {
        var obj, cachedObj, cache;
        if (unsigned) {
          value >>>= 0;
          if (cache = 0 <= value && value < 256) {
            cachedObj = UINT_CACHE[value];
            if (cachedObj) return cachedObj;
          }
          obj = fromBits(value, (0 | value) < 0 ? -1 : 0, true);
          cache && (UINT_CACHE[value] = obj);
          return obj;
        }
        value |= 0;
        if (cache = -128 <= value && value < 128) {
          cachedObj = INT_CACHE[value];
          if (cachedObj) return cachedObj;
        }
        obj = fromBits(value, value < 0 ? -1 : 0, false);
        cache && (INT_CACHE[value] = obj);
        return obj;
      }
      Long.fromInt = fromInt;
      function fromNumber(value, unsigned) {
        if (isNaN(value) || !isFinite(value)) return unsigned ? UZERO : ZERO;
        if (unsigned) {
          if (value < 0) return UZERO;
          if (value >= TWO_PWR_64_DBL) return MAX_UNSIGNED_VALUE;
        } else {
          if (value <= -TWO_PWR_63_DBL) return MIN_VALUE;
          if (value + 1 >= TWO_PWR_63_DBL) return MAX_VALUE;
        }
        if (value < 0) return fromNumber(-value, unsigned).neg();
        return fromBits(value % TWO_PWR_32_DBL | 0, value / TWO_PWR_32_DBL | 0, unsigned);
      }
      Long.fromNumber = fromNumber;
      function fromBits(lowBits, highBits, unsigned) {
        return new Long(lowBits, highBits, unsigned);
      }
      Long.fromBits = fromBits;
      var pow_dbl = Math.pow;
      function fromString(str, unsigned, radix) {
        if (0 === str.length) throw Error("empty string");
        if ("NaN" === str || "Infinity" === str || "+Infinity" === str || "-Infinity" === str) return ZERO;
        "number" === typeof unsigned ? (radix = unsigned, unsigned = false) : unsigned = !!unsigned;
        radix = radix || 10;
        if (radix < 2 || 36 < radix) throw RangeError("radix");
        var p;
        if ((p = str.indexOf("-")) > 0) throw Error("interior hyphen");
        if (0 === p) return fromString(str.substring(1), unsigned, radix).neg();
        var radixToPower = fromNumber(pow_dbl(radix, 8));
        var result = ZERO;
        for (var i = 0; i < str.length; i += 8) {
          var size = Math.min(8, str.length - i), value = parseInt(str.substring(i, i + size), radix);
          if (size < 8) {
            var power = fromNumber(pow_dbl(radix, size));
            result = result.mul(power).add(fromNumber(value));
          } else {
            result = result.mul(radixToPower);
            result = result.add(fromNumber(value));
          }
        }
        result.unsigned = unsigned;
        return result;
      }
      Long.fromString = fromString;
      function fromValue(val) {
        if (val instanceof Long) return val;
        if ("number" === typeof val) return fromNumber(val);
        if ("string" === typeof val) return fromString(val);
        return fromBits(val.low, val.high, val.unsigned);
      }
      Long.fromValue = fromValue;
      var TWO_PWR_16_DBL = 65536;
      var TWO_PWR_24_DBL = 1 << 24;
      var TWO_PWR_32_DBL = TWO_PWR_16_DBL * TWO_PWR_16_DBL;
      var TWO_PWR_64_DBL = TWO_PWR_32_DBL * TWO_PWR_32_DBL;
      var TWO_PWR_63_DBL = TWO_PWR_64_DBL / 2;
      var TWO_PWR_24 = fromInt(TWO_PWR_24_DBL);
      var ZERO = fromInt(0);
      Long.ZERO = ZERO;
      var UZERO = fromInt(0, true);
      Long.UZERO = UZERO;
      var ONE = fromInt(1);
      Long.ONE = ONE;
      var UONE = fromInt(1, true);
      Long.UONE = UONE;
      var NEG_ONE = fromInt(-1);
      Long.NEG_ONE = NEG_ONE;
      var MAX_VALUE = fromBits(-1, 2147483647, false);
      Long.MAX_VALUE = MAX_VALUE;
      var MAX_UNSIGNED_VALUE = fromBits(-1, -1, true);
      Long.MAX_UNSIGNED_VALUE = MAX_UNSIGNED_VALUE;
      var MIN_VALUE = fromBits(0, -2147483648, false);
      Long.MIN_VALUE = MIN_VALUE;
      var LongPrototype = Long.prototype;
      LongPrototype.toInt = function toInt() {
        return this.unsigned ? this.low >>> 0 : this.low;
      };
      LongPrototype.toNumber = function toNumber() {
        if (this.unsigned) return (this.high >>> 0) * TWO_PWR_32_DBL + (this.low >>> 0);
        return this.high * TWO_PWR_32_DBL + (this.low >>> 0);
      };
      LongPrototype.toString = function toString(radix) {
        radix = radix || 10;
        if (radix < 2 || 36 < radix) throw RangeError("radix");
        if (this.isZero()) return "0";
        if (this.isNegative()) {
          if (this.eq(MIN_VALUE)) {
            var radixLong = fromNumber(radix), div = this.div(radixLong), rem1 = div.mul(radixLong).sub(this);
            return div.toString(radix) + rem1.toInt().toString(radix);
          }
          return "-" + this.neg().toString(radix);
        }
        var radixToPower = fromNumber(pow_dbl(radix, 6), this.unsigned), rem = this;
        var result = "";
        while (true) {
          var remDiv = rem.div(radixToPower), intval = rem.sub(remDiv.mul(radixToPower)).toInt() >>> 0, digits = intval.toString(radix);
          rem = remDiv;
          if (rem.isZero()) return digits + result;
          while (digits.length < 6) digits = "0" + digits;
          result = "" + digits + result;
        }
      };
      LongPrototype.getHighBits = function getHighBits() {
        return this.high;
      };
      LongPrototype.getHighBitsUnsigned = function getHighBitsUnsigned() {
        return this.high >>> 0;
      };
      LongPrototype.getLowBits = function getLowBits() {
        return this.low;
      };
      LongPrototype.getLowBitsUnsigned = function getLowBitsUnsigned() {
        return this.low >>> 0;
      };
      LongPrototype.getNumBitsAbs = function getNumBitsAbs() {
        if (this.isNegative()) return this.eq(MIN_VALUE) ? 64 : this.neg().getNumBitsAbs();
        var val = 0 != this.high ? this.high : this.low;
        for (var bit = 31; bit > 0; bit--) if (0 != (val & 1 << bit)) break;
        return 0 != this.high ? bit + 33 : bit + 1;
      };
      LongPrototype.isZero = function isZero() {
        return 0 === this.high && 0 === this.low;
      };
      LongPrototype.isNegative = function isNegative() {
        return !this.unsigned && this.high < 0;
      };
      LongPrototype.isPositive = function isPositive() {
        return this.unsigned || this.high >= 0;
      };
      LongPrototype.isOdd = function isOdd() {
        return 1 === (1 & this.low);
      };
      LongPrototype.isEven = function isEven() {
        return 0 === (1 & this.low);
      };
      LongPrototype.equals = function equals(other) {
        isLong(other) || (other = fromValue(other));
        if (this.unsigned !== other.unsigned && this.high >>> 31 === 1 && other.high >>> 31 === 1) return false;
        return this.high === other.high && this.low === other.low;
      };
      LongPrototype.eq = LongPrototype.equals;
      LongPrototype.notEquals = function notEquals(other) {
        return !this.eq(other);
      };
      LongPrototype.neq = LongPrototype.notEquals;
      LongPrototype.lessThan = function lessThan(other) {
        return this.comp(other) < 0;
      };
      LongPrototype.lt = LongPrototype.lessThan;
      LongPrototype.lessThanOrEqual = function lessThanOrEqual(other) {
        return this.comp(other) <= 0;
      };
      LongPrototype.lte = LongPrototype.lessThanOrEqual;
      LongPrototype.greaterThan = function greaterThan(other) {
        return this.comp(other) > 0;
      };
      LongPrototype.gt = LongPrototype.greaterThan;
      LongPrototype.greaterThanOrEqual = function greaterThanOrEqual(other) {
        return this.comp(other) >= 0;
      };
      LongPrototype.gte = LongPrototype.greaterThanOrEqual;
      LongPrototype.compare = function compare(other) {
        isLong(other) || (other = fromValue(other));
        if (this.eq(other)) return 0;
        var thisNeg = this.isNegative(), otherNeg = other.isNegative();
        if (thisNeg && !otherNeg) return -1;
        if (!thisNeg && otherNeg) return 1;
        if (!this.unsigned) return this.sub(other).isNegative() ? -1 : 1;
        return other.high >>> 0 > this.high >>> 0 || other.high === this.high && other.low >>> 0 > this.low >>> 0 ? -1 : 1;
      };
      LongPrototype.comp = LongPrototype.compare;
      LongPrototype.negate = function negate() {
        if (!this.unsigned && this.eq(MIN_VALUE)) return MIN_VALUE;
        return this.not().add(ONE);
      };
      LongPrototype.neg = LongPrototype.negate;
      LongPrototype.add = function add(addend) {
        isLong(addend) || (addend = fromValue(addend));
        var a48 = this.high >>> 16;
        var a32 = 65535 & this.high;
        var a16 = this.low >>> 16;
        var a00 = 65535 & this.low;
        var b48 = addend.high >>> 16;
        var b32 = 65535 & addend.high;
        var b16 = addend.low >>> 16;
        var b00 = 65535 & addend.low;
        var c48 = 0, c32 = 0, c16 = 0, c00 = 0;
        c00 += a00 + b00;
        c16 += c00 >>> 16;
        c00 &= 65535;
        c16 += a16 + b16;
        c32 += c16 >>> 16;
        c16 &= 65535;
        c32 += a32 + b32;
        c48 += c32 >>> 16;
        c32 &= 65535;
        c48 += a48 + b48;
        c48 &= 65535;
        return fromBits(c16 << 16 | c00, c48 << 16 | c32, this.unsigned);
      };
      LongPrototype.subtract = function subtract(subtrahend) {
        isLong(subtrahend) || (subtrahend = fromValue(subtrahend));
        return this.add(subtrahend.neg());
      };
      LongPrototype.sub = LongPrototype.subtract;
      LongPrototype.multiply = function multiply(multiplier) {
        if (this.isZero()) return ZERO;
        isLong(multiplier) || (multiplier = fromValue(multiplier));
        if (multiplier.isZero()) return ZERO;
        if (this.eq(MIN_VALUE)) return multiplier.isOdd() ? MIN_VALUE : ZERO;
        if (multiplier.eq(MIN_VALUE)) return this.isOdd() ? MIN_VALUE : ZERO;
        if (this.isNegative()) return multiplier.isNegative() ? this.neg().mul(multiplier.neg()) : this.neg().mul(multiplier).neg();
        if (multiplier.isNegative()) return this.mul(multiplier.neg()).neg();
        if (this.lt(TWO_PWR_24) && multiplier.lt(TWO_PWR_24)) return fromNumber(this.toNumber() * multiplier.toNumber(), this.unsigned);
        var a48 = this.high >>> 16;
        var a32 = 65535 & this.high;
        var a16 = this.low >>> 16;
        var a00 = 65535 & this.low;
        var b48 = multiplier.high >>> 16;
        var b32 = 65535 & multiplier.high;
        var b16 = multiplier.low >>> 16;
        var b00 = 65535 & multiplier.low;
        var c48 = 0, c32 = 0, c16 = 0, c00 = 0;
        c00 += a00 * b00;
        c16 += c00 >>> 16;
        c00 &= 65535;
        c16 += a16 * b00;
        c32 += c16 >>> 16;
        c16 &= 65535;
        c16 += a00 * b16;
        c32 += c16 >>> 16;
        c16 &= 65535;
        c32 += a32 * b00;
        c48 += c32 >>> 16;
        c32 &= 65535;
        c32 += a16 * b16;
        c48 += c32 >>> 16;
        c32 &= 65535;
        c32 += a00 * b32;
        c48 += c32 >>> 16;
        c32 &= 65535;
        c48 += a48 * b00 + a32 * b16 + a16 * b32 + a00 * b48;
        c48 &= 65535;
        return fromBits(c16 << 16 | c00, c48 << 16 | c32, this.unsigned);
      };
      LongPrototype.mul = LongPrototype.multiply;
      LongPrototype.divide = function divide(divisor) {
        isLong(divisor) || (divisor = fromValue(divisor));
        if (divisor.isZero()) throw Error("division by zero");
        if (this.isZero()) return this.unsigned ? UZERO : ZERO;
        var approx, rem, res;
        if (this.unsigned) {
          divisor.unsigned || (divisor = divisor.toUnsigned());
          if (divisor.gt(this)) return UZERO;
          if (divisor.gt(this.shru(1))) return UONE;
          res = UZERO;
        } else {
          if (this.eq(MIN_VALUE)) {
            if (divisor.eq(ONE) || divisor.eq(NEG_ONE)) return MIN_VALUE;
            if (divisor.eq(MIN_VALUE)) return ONE;
            var halfThis = this.shr(1);
            approx = halfThis.div(divisor).shl(1);
            if (approx.eq(ZERO)) return divisor.isNegative() ? ONE : NEG_ONE;
            rem = this.sub(divisor.mul(approx));
            res = approx.add(rem.div(divisor));
            return res;
          }
          if (divisor.eq(MIN_VALUE)) return this.unsigned ? UZERO : ZERO;
          if (this.isNegative()) {
            if (divisor.isNegative()) return this.neg().div(divisor.neg());
            return this.neg().div(divisor).neg();
          }
          if (divisor.isNegative()) return this.div(divisor.neg()).neg();
          res = ZERO;
        }
        rem = this;
        while (rem.gte(divisor)) {
          approx = Math.max(1, Math.floor(rem.toNumber() / divisor.toNumber()));
          var log2 = Math.ceil(Math.log(approx) / Math.LN2), delta = log2 <= 48 ? 1 : pow_dbl(2, log2 - 48), approxRes = fromNumber(approx), approxRem = approxRes.mul(divisor);
          while (approxRem.isNegative() || approxRem.gt(rem)) {
            approx -= delta;
            approxRes = fromNumber(approx, this.unsigned);
            approxRem = approxRes.mul(divisor);
          }
          approxRes.isZero() && (approxRes = ONE);
          res = res.add(approxRes);
          rem = rem.sub(approxRem);
        }
        return res;
      };
      LongPrototype.div = LongPrototype.divide;
      LongPrototype.modulo = function modulo(divisor) {
        isLong(divisor) || (divisor = fromValue(divisor));
        return this.sub(this.div(divisor).mul(divisor));
      };
      LongPrototype.mod = LongPrototype.modulo;
      LongPrototype.not = function not() {
        return fromBits(~this.low, ~this.high, this.unsigned);
      };
      LongPrototype.and = function and(other) {
        isLong(other) || (other = fromValue(other));
        return fromBits(this.low & other.low, this.high & other.high, this.unsigned);
      };
      LongPrototype.or = function or(other) {
        isLong(other) || (other = fromValue(other));
        return fromBits(this.low | other.low, this.high | other.high, this.unsigned);
      };
      LongPrototype.xor = function xor(other) {
        isLong(other) || (other = fromValue(other));
        return fromBits(this.low ^ other.low, this.high ^ other.high, this.unsigned);
      };
      LongPrototype.shiftLeft = function shiftLeft(numBits) {
        isLong(numBits) && (numBits = numBits.toInt());
        return 0 === (numBits &= 63) ? this : numBits < 32 ? fromBits(this.low << numBits, this.high << numBits | this.low >>> 32 - numBits, this.unsigned) : fromBits(0, this.low << numBits - 32, this.unsigned);
      };
      LongPrototype.shl = LongPrototype.shiftLeft;
      LongPrototype.shiftRight = function shiftRight(numBits) {
        isLong(numBits) && (numBits = numBits.toInt());
        return 0 === (numBits &= 63) ? this : numBits < 32 ? fromBits(this.low >>> numBits | this.high << 32 - numBits, this.high >> numBits, this.unsigned) : fromBits(this.high >> numBits - 32, this.high >= 0 ? 0 : -1, this.unsigned);
      };
      LongPrototype.shr = LongPrototype.shiftRight;
      LongPrototype.shiftRightUnsigned = function shiftRightUnsigned(numBits) {
        isLong(numBits) && (numBits = numBits.toInt());
        numBits &= 63;
        if (0 === numBits) return this;
        var high = this.high;
        if (numBits < 32) {
          var low = this.low;
          return fromBits(low >>> numBits | high << 32 - numBits, high >>> numBits, this.unsigned);
        }
        return fromBits(32 === numBits ? high : high >>> numBits - 32, 0, this.unsigned);
      };
      LongPrototype.shru = LongPrototype.shiftRightUnsigned;
      LongPrototype.toSigned = function toSigned() {
        if (!this.unsigned) return this;
        return fromBits(this.low, this.high, false);
      };
      LongPrototype.toUnsigned = function toUnsigned() {
        if (this.unsigned) return this;
        return fromBits(this.low, this.high, true);
      };
      LongPrototype.toBytes = function(le) {
        return le ? this.toBytesLE() : this.toBytesBE();
      };
      LongPrototype.toBytesLE = function() {
        var hi = this.high, lo = this.low;
        return [ 255 & lo, lo >>> 8 & 255, lo >>> 16 & 255, lo >>> 24 & 255, 255 & hi, hi >>> 8 & 255, hi >>> 16 & 255, hi >>> 24 & 255 ];
      };
      LongPrototype.toBytesBE = function() {
        var hi = this.high, lo = this.low;
        return [ hi >>> 24 & 255, hi >>> 16 & 255, hi >>> 8 & 255, 255 & hi, lo >>> 24 & 255, lo >>> 16 & 255, lo >>> 8 & 255, 255 & lo ];
      };
      return Long;
    });
    cc._RF.pop();
  }, {} ],
  mainScene: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8434d84+pZEUZ87zRLD6obT", "mainScene");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        joinRoomLayerPrefab: cc.Prefab,
        ruleLayerPrefab: cc.Prefab,
        createRoomLayerPrefab: cc.Prefab,
        shopLayerPrefab: cc.Prefab,
        newsLayerPrefab: cc.Prefab,
        setLayerPrefab: cc.Prefab,
        infoLayerPrefab: cc.Prefab,
        recordLayerPrefab: cc.Prefab,
        shareLayerPrefab: cc.Prefab,
        sprHeadImg: cc.Sprite
      },
      onLoad: function onLoad() {
        wsft.gameData.gameSceneName = "MainScene";
        wsft.funcs.removeLoginMessage();
        wsft.funcs.removeGameMessage();
        this.initAllBtn();
        var imgHead = this.sprHeadImg.node.getComponent("imgHead");
        imgHead.setHead(wsft.userData.headimg);
      },
      start: function start() {
        this.notice();
        this.refreshInfo();
      },
      refreshInfo: function refreshInfo() {
        var _name = cc.find("Canvas/top_node/info_node/name_lable").getComponent(cc.Label);
        var _id = cc.find("Canvas/top_node/info_node/id_lable").getComponent(cc.Label);
        var _diamond = cc.find("Canvas/top_node/info_node/diamond_bg/diamond_num").getComponent(cc.Label);
        _name.string = wsft.uiFuncs.trimName(wsft.userData.nickname, 4, "...");
        _id.string = "ID:" + wsft.userData.uid;
        _diamond.string = wsft.userData.diamond;
      },
      notice: function notice() {
        var noticeNode = cc.find("Canvas/notice_node");
        this.noticeJS = noticeNode.getComponent("notice");
        this.noticeJS.setDefaultNotice(wsft.userData.notice);
      },
      allBtnCallback: function allBtnCallback(event, name) {
        cc.log(name);
        if ("creatroom" === name) if (this.createRoomLayer) this.createRoomLayer.active = true; else {
          this.createRoomLayer = cc.instantiate(this.createRoomLayerPrefab);
          this.createRoomLayer.setName("createRoomLayer");
          this.node.addChild(this.createRoomLayer);
        } else if ("joinroom" === name) if (this.joinRoomLayer) this.joinRoomLayer.active = true; else {
          this.joinRoomLayer = cc.instantiate(this.joinRoomLayerPrefab);
          this.joinRoomLayer.setName("joinRoomLayer");
          this.node.addChild(this.joinRoomLayer);
        } else if ("gold" === name || "diamond" == name) if (this.shopLayer) this.shopLayer.active = true; else {
          this.shopLayer = cc.instantiate(this.shopLayerPrefab);
          this.shopLayer.setName("shopLayer");
          this.node.addChild(this.shopLayer);
        } else if ("rule" === name) if (this.ruleLayer) this.ruleLayer.active = true; else {
          this.ruleLayer = cc.instantiate(this.ruleLayerPrefab);
          this.ruleLayer.setName("ruleLayer");
          this.node.addChild(this.ruleLayer);
        } else if ("set" === name) if (this.setLayer) this.setLayer.active = true; else {
          this.setLayer = cc.instantiate(this.setLayerPrefab);
          this.setLayer.setName("setLayer");
          this.node.addChild(this.setLayer);
        } else if ("record" === name) if (this.recordLayer) this.recordLayer.active = true; else {
          this.recordLayer = cc.instantiate(this.recordLayerPrefab);
          this.recordLayer.setName("recordLayer");
          this.node.addChild(this.recordLayer);
        } else if ("share" === name) if (this.shareLayer) this.shareLayer.active = true; else {
          this.shareLayer = cc.instantiate(this.shareLayerPrefab);
          this.shareLayer.setName("shareLayer");
          this.node.addChild(this.shareLayer);
        } else if ("news" === name) if (this.newsLayer) this.newsLayer.active = true; else {
          this.newsLayer = cc.instantiate(this.newsLayerPrefab);
          this.newsLayer.setName("newsLayer");
          this.node.addChild(this.newsLayer);
        } else if ("head" === name) if (this.infoLayer) this.infoLayer.active = true; else {
          this.infoLayer = cc.instantiate(this.infoLayerPrefab);
          this.infoLayer.setName("infoLayer");
          this.node.addChild(this.infoLayer);
          var info = this.infoLayer.getComponent("infoLayer");
          info.setInfo(wsft.userData.headimg, wsft.userData.nickname, wsft.userData.uid, wsft.userData.ip, true);
        } else {
          wsft.loading.hide();
          wsft.uiFuncs.showTip("\u656c\u8bf7\u671f\u5f85\uff01", 40);
        }
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
        btnHader("Canvas/top_node/info_node/head_mask/head", "head");
        btnHader("Canvas/top_node/info_node/diamond_bg/add_diamond_btn", "diamond");
        btnHader("Canvas/top_node/info_node/gold_bg/add_gold_btn", "gold");
      }
    });
    cc._RF.pop();
  }, {} ],
  message: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "41da1Kza1JF0ZVa+vJaz/Wq", "message");
    "use strict";
    window.wsft = window.wsft || {};
    var bindFuncList = [];
    var emitList = [];
    var message = {
      addMessage: function addMessage(key, cbFunc) {
        if (bindFuncList[key]) bindFuncList[key].push(cbFunc); else {
          var ary = new Array();
          ary.push(cbFunc);
          bindFuncList[key] = ary;
        }
      },
      sendMessage: function sendMessage(key, args) {
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
      sendNoMessage: function sendNoMessage() {
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
      removeAllMessage: function removeAllMessage() {
        bindFuncList = [];
      },
      removeKeyMessage: function removeKeyMessage(_key) {
        bindFuncList[_key] && (bindFuncList[_key] = null);
      }
    };
    wsft.message = module.exports = message;
    cc._RF.pop();
  }, {} ],
  mjCard: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1596dJv2GdMn46U42qoBnBZ", "mjCard");
    "use strict";
    var mjSprite = [];
    cc.Class({
      extends: cc.Component,
      properties: {
        upAtlas: cc.SpriteAtlas,
        leftAtlas: cc.SpriteAtlas,
        rightAtlas: cc.SpriteAtlas,
        bottomAtlas: cc.SpriteAtlas,
        myAtlas: cc.SpriteAtlas,
        emptyAtlas: cc.SpriteAtlas,
        chatAtlas: cc.SpriteAtlas,
        pengGangMyUpPre: cc.Prefab,
        pengGangLeftRightPre: cc.Prefab,
        myOutOldCardPre: cc.Prefab,
        rightOutOldCardPre: cc.Prefab,
        upOutOldCardPre: cc.Prefab,
        leftOutOldCardPre: cc.Prefab
      },
      onLoad: function onLoad() {
        wsft.mjCard = this;
        this._sides = [ "myself_node", "right_node", "up_node", "left_node" ];
        this._pres = [ "M_", "R_", "U_", "L_" ];
        this._outPres = [ "B_", "R_", "U_", "L_" ];
      },
      getMJSpriteByID: function getMJSpriteByID(id) {
        return mjSprite[id];
      },
      getMJType: function getMJType(id) {
        if (id >= 0 && id < 9) return 0;
        if (id >= 9 && id < 18) return 1;
        if (id >= 18 && id < 27) return 2;
      },
      getChatSpriteFrame: function getChatSpriteFrame(_index) {
        var spriteFrameName = "biaoqing_" + _index;
        return this.chatAtlas.getSpriteFrame(spriteFrameName);
      },
      getSpriteFrameByMJ: function getSpriteFrameByMJ(pre, mjNum, mjType) {
        var spriteFrameName = "";
        1 == mjType ? spriteFrameName = "W_" + mjNum : 2 == mjType ? spriteFrameName = "T_" + mjNum : 3 == mjType ? spriteFrameName = "B_" + mjNum : 4 == mjType && (spriteFrameName = "F_" + mjNum);
        spriteFrameName = pre + spriteFrameName;
        if ("M_" == pre) return this.myAtlas.getSpriteFrame(spriteFrameName);
        if ("B_" == pre) return this.bottomAtlas.getSpriteFrame(spriteFrameName);
        if ("U_" == pre) return this.upAtlas.getSpriteFrame(spriteFrameName);
        if ("L_" == pre) return this.leftAtlas.getSpriteFrame(spriteFrameName);
        if ("R_" == pre) return this.rightAtlas.getSpriteFrame(spriteFrameName);
      },
      getEmptySpriteFrame: function getEmptySpriteFrame(side) {
        if ("up_node" == side) return this.emptyAtlas.getSpriteFrame("e_mj_b_up");
        if ("myself_node" == side) return this.emptyAtlas.getSpriteFrame("e_mj_b_up");
        if ("left_node" == side) return this.emptyAtlas.getSpriteFrame("e_mj_b_left");
        if ("right_node" == side) return this.emptyAtlas.getSpriteFrame("e_mj_b_right");
      },
      getEmptySpriteFrameHand: function getEmptySpriteFrameHand(side) {
        if ("up_node" == side) return this.emptyAtlas.getSpriteFrame("e_mj_up");
        if ("left_node" == side) return this.emptyAtlas.getSpriteFrame("e_mj_left");
        if ("right_node" == side) return this.emptyAtlas.getSpriteFrame("e_mj_right");
      },
      getAudioURLByMJID: function getAudioURLByMJID(id) {},
      getSide: function getSide(localIndex) {
        return this._sides[localIndex];
      },
      getPre: function getPre(localIndex) {
        return this._pres[localIndex];
      },
      getOutPre: function getOutPre(localIndex) {
        return this._outPres[localIndex];
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
        this.btn_1 = this.node.getChildByName("btn_1").getComponent(cc.Button);
        this.btn_2 = this.node.getChildByName("btn_2").getComponent(cc.Button);
        this.btn_3 = this.node.getChildByName("btn_3").getComponent(cc.Button);
        this.news_node_1 = this.node.getChildByName("news_node_1");
        this.news_node_2 = this.node.getChildByName("news_node_2");
        this.news_node_3 = this.node.getChildByName("news_node_3");
        this.initAllBtn();
        var news_bg = this.node.getChildByName("news_bg");
        var callback = function callback() {
          self.node.active = false;
        };
        wsft.uiFuncs.bindTouchLayer(this.node, news_bg, callback);
      },
      start: function start() {
        var newLabel = this.news_node_3.getChildByName("news_label_2").getComponent(cc.Label);
        newLabel.string = "\u52a0\u76df\u63a8\u5e7f\u5458\u5fae\u4fe1:" + _copyStr;
      },
      onEnable: function onEnable() {
        this.showNewsNode(1);
        wsft.loading.hide();
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
        var btnHander = function btnHander(btn, name) {
          wsft.event.addBtnEvent(btn, self.node, "newsLayer", "allBtnCallback", name);
        };
        btnHander(this.node.getChildByName("close_btn"), "close");
        btnHander(this.node.getChildByName("btn_1"), "btn_1");
        btnHander(this.node.getChildByName("btn_2"), "btn_2");
        btnHander(this.node.getChildByName("btn_3"), "btn_3");
        btnHander(this.news_node_3.getChildByName("copy_btn"), "copy");
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
  outOldCard: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "dcd92/dOiFIz6Kq+rm8MsVE", "outOldCard");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        _outCards: [],
        pointNode: []
      },
      onLoad: function onLoad() {
        console.log("outOldCards======");
        this.initView();
        this.addInitPoint();
        this.addMessgetListen();
      },
      start: function start() {},
      addMessgetListen: function addMessgetListen() {
        wsft.message.addMessage(wsft.protocol.CATCHCARD, this.catchCard.bind(this));
        wsft.message.addMessage(wsft.protocol.RECEIVEOUTCARD, this.receiveOutCards.bind(this));
        wsft.message.addMessage(wsft.protocol.PUSHOUTCARD, this.pushOutCards.bind(this));
        wsft.message.addMessage(wsft.protocol.PUSHPENGCARD, this.pushPengCards.bind(this));
        wsft.message.addMessage(wsft.protocol.RECEIVEOFFLINERECONNECTION, this.receiveOfflineReconnections.bind(this));
        wsft.message.addMessage(wsft.protocol.PUSHROUNDRESULT, this.pushRoundResultoc.bind(this));
      },
      pushRoundResultoc: function pushRoundResultoc(data) {
        var self = this;
        if (data.reconnect) {
          self.hideAllOutCards();
          self.hideAllPoint();
        } else setTimeout(function() {
          self.hideAllOutCards();
          self.hideAllPoint();
        }, 3e3);
      },
      receiveOfflineReconnections: function receiveOfflineReconnections() {
        this.initAllOldCard();
      },
      receivePengCards: function receivePengCards(data) {},
      pushPengCards: function pushPengCards(data) {
        console.log("\u78b0\u724c\u63a8\u9001");
        var index = data.daSeetIndex - 1;
        var seats = wsft.gameData.seats;
        this.initOutOldCard(seats[index], false);
      },
      receiveOutCards: function receiveOutCards(data) {
        console.log("\u51fa\u724c\u8fd4\u56de");
        var self = this;
        setTimeout(function() {
          var index = wsft.gameData.mySeatIndex - 1;
          var seats = wsft.gameData.seats;
          self.initOutOldCard(seats[index], true);
        }, 500);
      },
      pushOutCards: function pushOutCards(data) {
        console.log("\u51fa\u724c\u63a8\u9001");
        var self = this;
        setTimeout(function() {
          var index = data.seetIndex - 1;
          var seats = wsft.gameData.seats;
          self.initOutOldCard(seats[index], true);
        }, 500);
      },
      catchCard: function catchCard(data) {},
      initView: function initView() {
        4 == wsft.gameData.playerNum ? this.initOutCardFour() : 3 == wsft.gameData.playerNum ? this.initOutCardThree() : 2 == wsft.gameData.playerNum && this.initOutCardTwo();
        this.hideAllOutCards();
      },
      initOutCardFour: function initOutCardFour() {
        var gameNode = this.node.getChildByName("game_node");
        var sides = [ "myself_node", "right_node", "up_node", "left_node" ];
        for (var s = 0; s < 4; ++s) {
          var sideName = sides[s];
          var sideRoot = gameNode.getChildByName(sideName);
          var outOldCardPra = sideRoot.getChildByName("out_old_card");
          var _oldCrads = [];
          for (var i = 0; i < 22; ++i) {
            var out_old_card = null;
            0 == s ? out_old_card = cc.instantiate(wsft.mjCard.myOutOldCardPre) : 1 == s ? out_old_card = cc.instantiate(wsft.mjCard.rightOutOldCardPre) : 2 == s ? out_old_card = cc.instantiate(wsft.mjCard.upOutOldCardPre) : 3 == s && (out_old_card = cc.instantiate(wsft.mjCard.leftOutOldCardPre));
            if (i < 11) {
              if ("myself_node" == sideName) {
                out_old_card.x = 55 * i - 275;
                out_old_card.y = 128;
              } else if ("right_node" == sideName) {
                out_old_card.zIndex = 33 - i;
                out_old_card.x = 0;
                out_old_card.y = 25 * i - 125;
              } else if ("up_node" == sideName) {
                out_old_card.zIndex = 3;
                out_old_card.x = 55 * -i + 275;
                out_old_card.y = -128;
              } else if ("left_node" == sideName) {
                out_old_card.x = 0;
                out_old_card.y = -25 * i + 125;
              }
            } else if ("myself_node" == sideName) {
              out_old_card.x = 55 * (i - 11) - 275;
              out_old_card.y = 64;
            } else if ("right_node" == sideName) {
              out_old_card.zIndex = 33 - i;
              out_old_card.x = 48;
              out_old_card.y = 25 * (i - 11) - 125;
            } else if ("up_node" == sideName) {
              out_old_card.zIndex = 2;
              out_old_card.x = 55 * -(i - 11) + 275;
              out_old_card.y = -64;
            } else if ("left_node" == sideName) {
              out_old_card.x = -47;
              out_old_card.y = -25 * (i - 11) + 125;
            }
            outOldCardPra.addChild(out_old_card);
            out_old_card.active = false;
            var sprite = out_old_card.getComponent(cc.Sprite);
            sprite.spriteFrame = null;
            _oldCrads.push(sprite);
          }
          this._outCards[sideName] = _oldCrads;
        }
      },
      initOutCardThree: function initOutCardThree() {
        var gameNode = this.node.getChildByName("game_node");
        var sides = [ "myself_node", "right_node", "left_node" ];
        for (var s = 0; s < 3; ++s) {
          var sideName = sides[s];
          var sideRoot = gameNode.getChildByName(sideName);
          var outOldCardPra = sideRoot.getChildByName("out_old_card");
          var _oldCrads = [];
          for (var i = 0; i < 33; ++i) {
            var out_old_card = null;
            0 == s ? out_old_card = cc.instantiate(wsft.mjCard.myOutOldCardPre) : 1 == s ? out_old_card = cc.instantiate(wsft.mjCard.rightOutOldCardPre) : 2 == s && (out_old_card = cc.instantiate(wsft.mjCard.leftOutOldCardPre));
            if (i < 11) {
              if ("myself_node" == sideName) {
                out_old_card.x = 55 * i - 275;
                out_old_card.y = 128;
              } else if ("right_node" == sideName) {
                out_old_card.zIndex = 33 - i;
                out_old_card.x = 0;
                out_old_card.y = 25 * i - 125;
              } else if ("left_node" == sideName) {
                out_old_card.x = 0;
                out_old_card.y = -25 * i + 125;
              }
            } else if (i >= 11 && i < 22) {
              if ("myself_node" == sideName) {
                out_old_card.x = 55 * (i - 11) - 275;
                out_old_card.y = 64;
              } else if ("right_node" == sideName) {
                out_old_card.zIndex = 33 - i;
                out_old_card.x = 48;
                out_old_card.y = 25 * (i - 11) - 125;
              } else if ("left_node" == sideName) {
                out_old_card.x = -47;
                out_old_card.y = -25 * (i - 11) + 125;
              }
            } else if ("myself_node" == sideName) {
              out_old_card.x = 55 * (i - 22) - 275;
              out_old_card.y = 0;
            } else if ("right_node" == sideName) {
              out_old_card.zIndex = 33 - i;
              out_old_card.x = 96;
              out_old_card.y = 25 * (i - 22) - 125;
            } else if ("left_node" == sideName) {
              out_old_card.x = -94;
              out_old_card.y = -25 * (i - 22) + 125;
            }
            outOldCardPra.addChild(out_old_card);
            out_old_card.active = false;
            var sprite = out_old_card.getComponent(cc.Sprite);
            sprite.spriteFrame = null;
            _oldCrads.push(sprite);
          }
          this._outCards[sideName] = _oldCrads;
        }
      },
      initOutCardTwo: function initOutCardTwo() {
        var gameNode = this.node.getChildByName("game_node");
        var sides = [ "myself_node", "up_node" ];
        for (var s = 0; s < 2; ++s) {
          var sideName = sides[s];
          var sideRoot = gameNode.getChildByName(sideName);
          var outOldCardPra = sideRoot.getChildByName("out_old_card");
          var _oldCrads = [];
          for (var i = 0; i < 56; ++i) {
            var out_old_card = null;
            0 == s ? out_old_card = cc.instantiate(wsft.mjCard.myOutOldCardPre) : 1 == s && (out_old_card = cc.instantiate(wsft.mjCard.upOutOldCardPre));
            if (i < 20) {
              if ("myself_node" == sideName) {
                out_old_card.x = 55 * i - 522.5;
                out_old_card.y = 128;
              } else if ("up_node" == sideName) {
                out_old_card.zIndex = 3;
                out_old_card.x = 55 * -i + 522.5;
                out_old_card.y = -128;
              }
            } else if (i >= 20 && i < 40) {
              if ("myself_node" == sideName) {
                out_old_card.x = 55 * (i - 20) - 522.5;
                out_old_card.y = 64;
              } else if ("up_node" == sideName) {
                out_old_card.zIndex = 2;
                out_old_card.x = 55 * -(i - 20) + 522.5;
                out_old_card.y = -64;
              }
            } else if ("myself_node" == sideName) {
              out_old_card.x = 55 * (i - 40) - 522.5;
              out_old_card.y = 0;
            } else if ("up_node" == sideName) {
              out_old_card.zIndex = 1;
              out_old_card.x = 55 * -(i - 40) + 522.5;
              out_old_card.y = 0;
            }
            outOldCardPra.addChild(out_old_card);
            out_old_card.active = false;
            var sprite = out_old_card.getComponent(cc.Sprite);
            sprite.spriteFrame = null;
            _oldCrads.push(sprite);
          }
          this._outCards[sideName] = _oldCrads;
        }
      },
      initAllOldCard: function initAllOldCard() {
        var seats = wsft.gameData.seats;
        for (var i in seats) this.initOutOldCard(seats[i], false);
      },
      hideAllOutCards: function hideAllOutCards() {
        for (var k in this._outCards) {
          var f = this._outCards[k];
          for (var i in f) f[i].node.active = false;
        }
      },
      initOutOldCard: function initOutOldCard(seatData, _boolPoint) {
        var outOldCard = seatData.outOldCard;
        if (null == outOldCard) return;
        var index = wsft.gameData.getLocalIndex(seatData.seetIndex);
        var _side = wsft.mjCard.getSide(index);
        var _pre = wsft.mjCard.getPre(index);
        "M_" == _pre && (_pre = "B_");
        var outOldCardSprites = this._outCards[_side];
        for (var i = 0; i < outOldCardSprites.length; ++i) {
          var sprite = outOldCardSprites[i];
          sprite.node.active = true;
          i < outOldCard.length && this.setSpriteFrameByMJ(_pre, sprite, outOldCard[i].num, outOldCard[i].type);
        }
        for (var i = outOldCard.length; i < outOldCardSprites.length; ++i) {
          var sprite = outOldCardSprites[i];
          sprite.node.active = false;
          sprite.spriteFrame = null;
        }
        if (_boolPoint) {
          var _sprite = outOldCardSprites[outOldCard.length - 1];
          this.movePointAct(index, _sprite);
        } else this.hideAllPoint();
      },
      addInitPoint: function addInitPoint() {
        var gameNode = this.node.getChildByName("game_node");
        var sides = [ "myself_node", "right_node", "up_node", "left_node" ];
        for (var i = 0; i < sides.length; ++i) {
          var sideName = sides[i];
          var sideRoot = gameNode.getChildByName(sideName);
          var outOldParent = sideRoot.getChildByName("out_old_card_point");
          outOldParent.active = true;
          this.pointNode[i] = outOldParent.getChildByName("point");
          this.pointNode[i].active = false;
        }
      },
      movePointAct: function movePointAct(index, _sprite) {
        for (var i = 0; i < 4; ++i) if (index === i) {
          var y = 0;
          0 == index ? y = _sprite.node.y + 32 : 1 == index || 3 == index ? y = _sprite.node.y + 25 : 2 == index && (y = _sprite.node.y + 25);
          this.pointNode[index].active = true;
          this.pointNode[index].x = _sprite.node.x;
          this.pointNode[index].y = y;
          this.upDownAni(this.pointNode[index], this.pointNode[index].x, this.pointNode[index].y);
        } else {
          this.pointNode[i].active = false;
          this.stopAni(this.pointNode[i]);
        }
      },
      hideAllPoint: function hideAllPoint() {
        for (var i = 0; i < 4; ++i) {
          this.pointNode[i].active = false;
          this.stopAni(this.pointNode[i]);
        }
      },
      upDownAni: function upDownAni(_pointNode, x, y) {
        var ac = cc.sequence(cc.moveTo(.3, x, y + 15), cc.delayTime(.1), cc.moveTo(.3, x, y), cc.delayTime(.1));
        var forever = cc.repeatForever(ac);
        _pointNode.runAction(forever);
      },
      stopAni: function stopAni(_node) {
        _node.stopAllActions();
      },
      setSpriteFrameByMJ: function setSpriteFrameByMJ(pre, sprite, mjNum, mjType) {
        sprite.spriteFrame = wsft.mjCard.getSpriteFrameByMJ(pre, mjNum, mjType);
        sprite.node.active = true;
      }
    });
    cc._RF.pop();
  }, {} ],
  path: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5b180Ww9HlDXJpwnjbW7LDN", "path");
    "use strict";
    module.exports = {
      resolve: function resolve(subPath) {
        return cc.url.raw("resources/" + subPath);
      },
      join: function join() {
        return cc.path.join.apply(null, arguments);
      }
    };
    cc._RF.pop();
  }, {} ],
  pbCore: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6835cckjxZOVZB1TMJQ7gEz", "pbCore");
    "use strict";
    var _typeof = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(obj) {
      return typeof obj;
    } : function(obj) {
      return obj && "function" === typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    var ProtoBuf = require("protobufjs");
    ProtoBuf.Util.IS_NODE = cc.sys.isNative;
    var cccVer = cc.ENGINE_VERSION.match(/\d+\.\d+/)[0];
    function compareVer(v1, v2) {
      var array1 = v1.split(".").map(function(i) {
        return parseInt(i);
      });
      var array2 = v2.split(".").map(function(i) {
        return parseInt(i);
      });
      var diff = 0;
      for (var i = 0; i < array1.length; i++) {
        diff = array1[i] - array2[i];
        if (0 !== diff) return diff > 0 ? 1 : -1;
      }
      return 0;
    }
    ProtoBuf.Util.IS_NODE = false;
    var loadProto = ProtoBuf.loadProto.bind(ProtoBuf);
    ProtoBuf.loadProto = function(asset, builder, filename) {
      try {
        "string" === typeof asset ? loadProto(asset, builder, filename) : asset.text && loadProto(asset.text, builder, filename);
      } catch (e) {
        cc.warn(filename + ": protobuf syntax error");
      }
    };
    ProtoBuf.loadJsonFile = function(filename, callback, builder) {
      callback && "object" === ("undefined" === typeof callback ? "undefined" : _typeof(callback)) ? (builder = callback, 
      callback = null) : callback && "function" === typeof callback || (callback = null);
      if (callback) return ProtoBuf.Util.fetch("string" === typeof filename ? filename : filename["root"] + "/" + filename["file"], function(contents) {
        if (null === contents) {
          callback(Error("Failed to fetch file"));
          return;
        }
        try {
          callback(null, ProtoBuf.loadJson(JSON.parse(contents), builder, filename));
        } catch (e) {
          callback(e);
        }
      });
      var url = "object" === ("undefined" === typeof filename ? "undefined" : _typeof(filename)) ? filename["root"] + "/" + filename["file"] : filename;
      var json = void 0;
      if (ProtoBuf.preloaded) {
        var content = cc.loader.getRes(url, cc.JsonAsset);
        content && (json = cc.JsonAsset ? content.json : content);
      } else {
        var _content = ProtoBuf.Util.fetch(url);
        _content && (json = JSON.parse(_content));
      }
      return json ? ProtoBuf.loadJson(json, builder, filename) : null;
    };
    module.exports = {
      root: "pb",
      preload: function preload(cb) {
        ProtoBuf.Util.fetch = cc.loader.getRes.bind(cc.loader);
        cc.loader.loadResDir(this.root, function(error, data) {
          ProtoBuf.preloaded = !error;
          cb();
        });
      },
      loadFromFile: function loadFromFile(fileNames, packageName) {
        if ((cc.sys.isNative || cc.sys.platform === cc.sys.WECHAT_GAME) && !ProtoBuf.preloaded) {
          cc.error("\u539f\u751f\u6216\u5fae\u4fe1\u5c0f\u6e38\u620f\u4e0a\uff0c\u9700\u8981\u5148\u8c03\u7528preload\u51fd\u6570");
          return;
        }
        "string" === typeof fileNames && (fileNames = [ fileNames ]);
        var builder = ProtoBuf.newBuilder();
        compareVer(cccVer, "1.10.0") >= 0 && ProtoBuf.preloaded ? builder.importRoot = this.root : builder.importRoot = cc.url.raw("resources/" + this.root);
        fileNames.forEach(function(fileName) {
          var extname = cc.path.extname(fileName);
          var fullPath = builder.importRoot + "/" + fileName;
          ".proto" === extname ? ProtoBuf.loadProtoFile(fullPath, builder) : ".json" === extname ? ProtoBuf.loadJsonFile(fullPath, builder) : cc.log("nonsupport file extname, only support 'proto' or 'json'");
        });
        return builder.build(packageName);
      },
      loadAll: function loadAll() {
        var _this = this;
        var extname = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "proto";
        var packageName = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        var files = [];
        (this.root.endsWith("/") || this.root.endsWith("\\")) && (this.root = this.root.substr(0, this.root.length - 1));
        cc.loader._resources.getUuidArray(this.root, null, files);
        files = files.map(function(filePath) {
          var str = filePath.substr(_this.root.length + 1);
          return str + "." + extname;
        });
        return this.loadFromFile(files, packageName);
      },
      loadData: function loadData(url, callback) {
        if (cc.sys.isNative) {
          var data = jsb.fileUtils.getDataFromFile(url);
          setTimeout(function() {
            callback(data);
          }, 0);
        } else {
          var xhr = ProtoBuf.Util.XHR();
          xhr.open("GET", url, true);
          xhr.setRequestHeader("Accept", "text/plain");
          xhr.responseType = "arraybuffer";
          "function" === typeof xhr.overrideMimeType && xhr.overrideMimeType("text/plain");
          if (callback) {
            xhr.onreadystatechange = function() {
              if (4 != xhr.readyState) return;
              200 == xhr.status || 0 == xhr.status ? callback(xhr.response) : callback(null);
            };
            if (4 == xhr.readyState) return;
            xhr.send(null);
          }
        }
      }
    };
    cc._RF.pop();
  }, {
    protobufjs: "protobufjs"
  } ],
  pbMsg: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ea25a45WOtMEYN8fq6ihwUg", "pbMsg");
    "use strict";
    var pbCore = require("pbCore");
    cc.Class({
      ctor: function ctor() {
        var _this = this;
        this.sendMsg = [], this.receiveMsg = [], pbCore.preload(function() {
          _this.pb();
        });
      },
      pb: function pb() {
        var loginpb = pbCore.loadFromFile("loginMessage.proto", "msg.LoginMessage");
        this.sendMsg[wsft.protocol.SEND_LOGIN] = loginpb.LoginCm;
        this.receiveMsg[wsft.protocol.RECEIVE_LOGIN] = loginpb.LoginSm;
        this.receiveMsg[wsft.protocol.PLAYER_CAST] = loginpb.PlayerCast;
        this.receiveMsg[wsft.protocol.PUSH_PLAYER_RECORD_CAST] = loginpb.PlayerRecordCast;
        this.sendMsg[wsft.protocol.SEND_PLAYER_RECORD_CAST] = loginpb.GameRecordCm;
        this.receiveMsg[wsft.protocol.RECEIVE_PLAYER_RECORD_CAST] = loginpb.GameRecordSm;
        var roompb = pbCore.loadFromFile("roomMessage.proto", "msg.RoomMessage");
        this.sendMsg[wsft.protocol.SEND_CREATE_ROOM] = roompb.CreateRoomCm;
        this.receiveMsg[wsft.protocol.RECEIVE_CREATE_ROOM] = roompb.CreateRoomSm;
        this.sendMsg[wsft.protocol.SEND_JOIN_ROOM] = roompb.JoinRoomCm;
        this.receiveMsg[wsft.protocol.RECEIVE_JOIN_ROOM] = roompb.JoinRoomSm;
        this.receiveMsg[wsft.protocol.PUSH_JOIN_ROOM] = roompb.JoinRoomCast;
        this.sendMsg[wsft.protocol.SEND_PREPARE_ROOM] = roompb.PrepareRoomCm;
        this.receiveMsg[wsft.protocol.RECEIVE_PREPARE_ROOM] = roompb.PrepareRoomSm;
        this.receiveMsg[wsft.protocol.PUSH_PREPARE_ROOM] = roompb.PrepareRoomCast;
        this.receiveMsg[wsft.protocol.RECEIVE_LEAVE_ROOM] = roompb.LeaveRoomSm;
        this.receiveMsg[wsft.protocol.RECEIVE_DISSOLVE_ROOM] = roompb.DissolveRoomSm;
        this.receiveMsg[wsft.protocol.PUSH_DISSOLVE_ROOM] = roompb.DissolveRoomCast;
        this.sendMsg[wsft.protocol.SEND_APPLAY_DISSOLVE_ROOM] = roompb.MemberDissolveRoomCm;
        this.receiveMsg[wsft.protocol.RECEIVE_APPLAY_DISSOLVE_ROOM] = roompb.MemberDissolveRoomSm;
        this.receiveMsg[wsft.protocol.PUSH_APPLAY_DISSOLVE_ROOM] = roompb.MemberDissolveRoomCast;
        this.sendMsg[wsft.protocol.SEND_CHAT_ROOM] = roompb.ChatCm;
        this.receiveMsg[wsft.protocol.RECEIVE_CHAT_ROOM] = roompb.ChatSm;
        this.receiveMsg[wsft.protocol.PUSH_CHAT_ROOM] = roompb.ChatCast;
        this.receiveMsg[wsft.protocol.PUSH_OFFLINE] = roompb.OfflineCast;
        var mjpb = pbCore.loadFromFile("mjMessage.proto", "msg.MjMessage");
        this.receiveMsg[wsft.protocol.PUSH_SEND_CARD] = mjpb.FaPaiCast;
        this.receiveMsg[wsft.protocol.CATCH_CARD] = mjpb.ZhuaPaiCast;
        this.receiveMsg[wsft.protocol.SEAT_CATCH_CARD] = mjpb.SeetZhuaPaiCast;
        this.sendMsg[wsft.protocol.SEND_OUT_CARD] = mjpb.DaPaiCm;
        this.receiveMsg[wsft.protocol.RECEIVE_OUT_CARD] = mjpb.DaPaiSm;
        this.receiveMsg[wsft.protocol.PUSH_OUT_CARD] = mjpb.DaPaiCast;
        this.sendMsg[wsft.protocol.SEND_PASS] = mjpb.OverCm;
        this.receiveMsg[wsft.protocol.RECEIVE_PASS] = mjpb.OverSm;
        this.sendMsg[wsft.protocol.SEND_ANGANG] = mjpb.AnGangPaiCm;
        this.receiveMsg[wsft.protocol.RECEIVE_ANGANG] = mjpb.AnGangPaiSm;
        this.receiveMsg[wsft.protocol.PUSH_ANGANG] = mjpb.AnGangPaiCast;
        this.sendMsg[wsft.protocol.SEND_MINGGANG] = mjpb.MingGangPaiCm;
        this.receiveMsg[wsft.protocol.RECEIVE_MINGGANG] = mjpb.MingGangPaiSm;
        this.receiveMsg[wsft.protocol.PUSH_MINGGANG] = mjpb.MingGangPaiCast;
        this.sendMsg[wsft.protocol.SEND_JIEGANG] = mjpb.JieGangCm;
        this.receiveMsg[wsft.protocol.RECEIVE_JIEGANG] = mjpb.JieGangSm;
        this.receiveMsg[wsft.protocol.PUSH_JIEGANG] = mjpb.JieGangCast;
        this.sendMsg[wsft.protocol.SEND_PENG_CARD] = mjpb.PengPaiCm;
        this.receiveMsg[wsft.protocol.RECEIVE_PENG_CARD] = mjpb.PengPaiSm;
        this.receiveMsg[wsft.protocol.PUSH_PENG_CARD] = mjpb.PengPaiCast;
        this.sendMsg[wsft.protocol.SEND_ZI_MO] = mjpb.ZiMoPaiCm;
        this.receiveMsg[wsft.protocol.RECEIVE_ZI_MO] = mjpb.ZiMoPaiSm;
        this.sendMsg[wsft.protocol.SEND_JIE_PAO] = mjpb.JiePaoCm;
        this.receiveMsg[wsft.protocol.RECEIVE_JIE_PAO] = mjpb.JiePaoSm;
        this.sendMsg[wsft.protocol.SEND_OFFLINE_RECONNECTION] = mjpb.ReconnectCm;
        this.receiveMsg[wsft.protocol.RECEIVE_OFFLINE_RECONNECTION] = mjpb.ReconnectSm;
        this.receiveMsg[wsft.protocol.PUSH_ROUND_RESULT] = mjpb.RoundResultCast;
        this.receiveMsg[wsft.protocol.PUSH_GAME_OVER] = mjpb.GameOverCast;
      },
      encodePB: function encodePB(msgId, msgTab) {
        var self = this;
        var pbData = self.sendMsg[msgId];
        null == pbData && cc.error("encodePB==" + msgId + "PB is Null");
        return pbData.encode(msgTab).toArrayBuffer();
      },
      decodePB: function decodePB(msgId, msgTab) {
        var self = this;
        var pbData = self.receiveMsg[msgId];
        null == pbData && cc.error("encodePB==" + msgId + "PB is Null");
        return pbData.decode(msgTab);
      }
    });
    cc._RF.pop();
  }, {
    pbCore: "pbCore"
  } ],
  pengGang: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4cc74ItSjVAoryjkc3cJLSk", "pengGang");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {
        var gameChild = this.node.getChildByName("game_node");
        var myself = gameChild.getChildByName("myself_node");
        var pengangroot = myself.getChildByName("peng_gang_node");
        var realwidth = cc.winSize.width;
        pengangroot.scaleX = 1.2;
        pengangroot.scaleY = 1.2;
        var scale = realwidth / 1280;
        pengangroot.scaleX *= scale;
        pengangroot.scaleY *= scale;
        this.onGameBein();
        this.addMessgetListen();
      },
      start: function start() {},
      addMessgetListen: function addMessgetListen() {
        wsft.message.addMessage(wsft.protocol.PUSHPENGCARD, this.pushPengCardpg.bind(this));
        wsft.message.addMessage(wsft.protocol.RECEIVEANGANG, this.receivePengCardpg.bind(this));
        wsft.message.addMessage(wsft.protocol.PUSHANGANG, this.pushPengCardpg.bind(this));
        wsft.message.addMessage(wsft.protocol.PUSHMINGGANG, this.pushPengCardpg.bind(this));
        wsft.message.addMessage(wsft.protocol.PUSHJIEGANG, this.pushPengCardpg.bind(this));
        wsft.message.addMessage(wsft.protocol.PUSHROUNDRESULT, this.pushRoundResultpg.bind(this));
        wsft.message.addMessage(wsft.protocol.RECEIVEOFFLINERECONNECTION, this.receiveOfflineReconnectionpg.bind(this));
      },
      pushRoundResultpg: function pushRoundResultpg(data) {
        var self = this;
        data.reconnect ? self.onGameBein() : setTimeout(function() {
          self.onGameBein();
        }, 3e3);
      },
      receiveOfflineReconnectionpg: function receiveOfflineReconnectionpg() {
        var seats = wsft.gameData.seats;
        for (var i in seats) this.onPengGangChanged(seats[i]);
      },
      receivePengCardpg: function receivePengCardpg(data) {
        var index = wsft.gameData.mySeatIndex - 1;
        var seats = wsft.gameData.seats;
        this.onPengGangChanged(seats[index]);
      },
      pushPengCardpg: function pushPengCardpg(data) {
        var index = data.seetIndex - 1;
        var seats = wsft.gameData.seats;
        this.onPengGangChanged(seats[index]);
      },
      pushSendCardpg: function pushSendCardpg(data) {},
      onGameBein: function onGameBein() {
        var sides = [ "myself_node", "right_node", "up_node", "left_node" ];
        for (var i = 0; i < sides.length; ++i) {
          var side = sides[i];
          console.log("onGameBein==" + side);
          this.hidePengGang(side);
        }
      },
      hidePengGang: function hidePengGang(side) {
        var gameChild = this.node.getChildByName("game_node");
        var myself = gameChild.getChildByName(side);
        var pengangroot = myself.getChildByName("peng_gang_node");
        if (pengangroot) for (var i = 0; i < pengangroot.childrenCount; ++i) {
          console.log("pengangroot=childrenCount==" + i);
          pengangroot.children[i].active = false;
        }
      },
      onPengGangChanged: function onPengGangChanged(seatData) {
        if (null == seatData.pengs && null == seatData.anGangs && null == seatData.mingGangs && null == seatData.jieGangs) return;
        var localIndex = wsft.gameData.getLocalIndex(seatData.seetIndex);
        var side = wsft.mjCard.getSide(localIndex);
        var pre = wsft.mjCard.getOutPre(localIndex);
        var gameChild = this.node.getChildByName("game_node");
        var myself = gameChild.getChildByName(side);
        var pengangroot = myself.getChildByName("peng_gang_node");
        for (var i = 0; i < pengangroot.childrenCount; ++i) pengangroot.children[i].active = false;
        var index = 0;
        var gangs = seatData.anGangs;
        for (var i = 0; i < gangs.length; ++i) {
          var _mjNum = gangs[i].num;
          var _mjType = gangs[i].type;
          this.initPengAndGangs(pengangroot, side, pre, index, _mjNum, _mjType, "anGangs");
          index++;
        }
        var gangs = seatData.mingGangs;
        for (var i = 0; i < gangs.length; ++i) {
          var _mjNum = gangs[i].num;
          var _mjType = gangs[i].type;
          this.initPengAndGangs(pengangroot, side, pre, index, _mjNum, _mjType, "mingGangs");
          index++;
        }
        var gangs = seatData.jieGangs;
        for (var i = 0; i < gangs.length; ++i) {
          var _mjNum = gangs[i].num;
          var _mjType = gangs[i].type;
          this.initPengAndGangs(pengangroot, side, pre, index, _mjNum, _mjType, "jieGangs");
          index++;
        }
        var pengs = seatData.pengs;
        if (pengs) for (var i = 0; i < pengs.length; ++i) {
          var _mjNum = pengs[i].num;
          var _mjType = pengs[i].type;
          this.initPengAndGangs(pengangroot, side, pre, index, _mjNum, _mjType, "pengs");
          index++;
        }
      },
      initPengAndGangs: function initPengAndGangs(pengangroot, side, pre, index, mjNum, mjType, flag) {
        var pgroot = null;
        if (pengangroot.childrenCount <= index) {
          pgroot = "left_node" == side || "right_node" == side ? cc.instantiate(wsft.mjCard.pengGangLeftRightPre) : cc.instantiate(wsft.mjCard.pengGangMyUpPre);
          pengangroot.addChild(pgroot);
        } else {
          pgroot = pengangroot.children[index];
          pgroot.active = true;
        }
        if ("left_node" == side) pgroot.y = -(25 * index * 3 + 5 * index); else if ("right_node" == side) {
          pgroot.y = 25 * index * 3 + 5 * index;
          pgroot.zIndex = -index;
        } else pgroot.x = "myself_node" == side ? 55 * index * 3 + 10 * index : -(55 * index * 3 + 10 * index);
        var sprites = pgroot.getComponentsInChildren(cc.Sprite);
        for (var s = 0; s < sprites.length; ++s) {
          var sprite = sprites[s];
          if ("gang" == sprite.node.name) {
            var isGang = "pengs" != flag;
            sprite.node.active = isGang;
            sprite.node.scaleX = 1;
            sprite.node.scaleY = 1;
            sprite.spriteFrame = ("anGangs" == flag, wsft.mjCard.getSpriteFrameByMJ(pre, mjNum, mjType));
          } else sprite.spriteFrame = "anGangs" == flag ? wsft.mjCard.getEmptySpriteFrame(side) : wsft.mjCard.getSpriteFrameByMJ(pre, mjNum, mjType);
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  protobufjs: [ function(require, module, exports) {
    (function(process) {
      "use strict";
      cc._RF.push(module, "7e68dAWiXNNB78WG0k+lOfC", "protobufjs");
      "use strict";
      var _typeof = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(obj) {
        return typeof obj;
      } : function(obj) {
        return obj && "function" === typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
      (function(global, factory) {
        "function" === typeof define && define["amd"] ? define([ "bytebuffer" ], factory) : "function" === typeof require && "object" === ("undefined" === typeof module ? "undefined" : _typeof(module)) && module && module["exports"] ? module["exports"] = factory(require("bytebuffer"), true) : (global["dcodeIO"] = global["dcodeIO"] || {})["ProtoBuf"] = factory(global["dcodeIO"]["ByteBuffer"]);
      })(void 0, function(ByteBuffer, isCommonJS) {
        var ProtoBuf = {};
        ProtoBuf.ByteBuffer = ByteBuffer;
        ProtoBuf.Long = ByteBuffer.Long || null;
        ProtoBuf.VERSION = "5.0.2";
        ProtoBuf.WIRE_TYPES = {};
        ProtoBuf.WIRE_TYPES.VARINT = 0;
        ProtoBuf.WIRE_TYPES.BITS64 = 1;
        ProtoBuf.WIRE_TYPES.LDELIM = 2;
        ProtoBuf.WIRE_TYPES.STARTGROUP = 3;
        ProtoBuf.WIRE_TYPES.ENDGROUP = 4;
        ProtoBuf.WIRE_TYPES.BITS32 = 5;
        ProtoBuf.PACKABLE_WIRE_TYPES = [ ProtoBuf.WIRE_TYPES.VARINT, ProtoBuf.WIRE_TYPES.BITS64, ProtoBuf.WIRE_TYPES.BITS32 ];
        ProtoBuf.TYPES = {
          int32: {
            name: "int32",
            wireType: ProtoBuf.WIRE_TYPES.VARINT,
            defaultValue: 0
          },
          uint32: {
            name: "uint32",
            wireType: ProtoBuf.WIRE_TYPES.VARINT,
            defaultValue: 0
          },
          sint32: {
            name: "sint32",
            wireType: ProtoBuf.WIRE_TYPES.VARINT,
            defaultValue: 0
          },
          int64: {
            name: "int64",
            wireType: ProtoBuf.WIRE_TYPES.VARINT,
            defaultValue: ProtoBuf.Long ? ProtoBuf.Long.ZERO : void 0
          },
          uint64: {
            name: "uint64",
            wireType: ProtoBuf.WIRE_TYPES.VARINT,
            defaultValue: ProtoBuf.Long ? ProtoBuf.Long.UZERO : void 0
          },
          sint64: {
            name: "sint64",
            wireType: ProtoBuf.WIRE_TYPES.VARINT,
            defaultValue: ProtoBuf.Long ? ProtoBuf.Long.ZERO : void 0
          },
          bool: {
            name: "bool",
            wireType: ProtoBuf.WIRE_TYPES.VARINT,
            defaultValue: false
          },
          double: {
            name: "double",
            wireType: ProtoBuf.WIRE_TYPES.BITS64,
            defaultValue: 0
          },
          string: {
            name: "string",
            wireType: ProtoBuf.WIRE_TYPES.LDELIM,
            defaultValue: ""
          },
          bytes: {
            name: "bytes",
            wireType: ProtoBuf.WIRE_TYPES.LDELIM,
            defaultValue: null
          },
          fixed32: {
            name: "fixed32",
            wireType: ProtoBuf.WIRE_TYPES.BITS32,
            defaultValue: 0
          },
          sfixed32: {
            name: "sfixed32",
            wireType: ProtoBuf.WIRE_TYPES.BITS32,
            defaultValue: 0
          },
          fixed64: {
            name: "fixed64",
            wireType: ProtoBuf.WIRE_TYPES.BITS64,
            defaultValue: ProtoBuf.Long ? ProtoBuf.Long.UZERO : void 0
          },
          sfixed64: {
            name: "sfixed64",
            wireType: ProtoBuf.WIRE_TYPES.BITS64,
            defaultValue: ProtoBuf.Long ? ProtoBuf.Long.ZERO : void 0
          },
          float: {
            name: "float",
            wireType: ProtoBuf.WIRE_TYPES.BITS32,
            defaultValue: 0
          },
          enum: {
            name: "enum",
            wireType: ProtoBuf.WIRE_TYPES.VARINT,
            defaultValue: 0
          },
          message: {
            name: "message",
            wireType: ProtoBuf.WIRE_TYPES.LDELIM,
            defaultValue: null
          },
          group: {
            name: "group",
            wireType: ProtoBuf.WIRE_TYPES.STARTGROUP,
            defaultValue: null
          }
        };
        ProtoBuf.MAP_KEY_TYPES = [ ProtoBuf.TYPES["int32"], ProtoBuf.TYPES["sint32"], ProtoBuf.TYPES["sfixed32"], ProtoBuf.TYPES["uint32"], ProtoBuf.TYPES["fixed32"], ProtoBuf.TYPES["int64"], ProtoBuf.TYPES["sint64"], ProtoBuf.TYPES["sfixed64"], ProtoBuf.TYPES["uint64"], ProtoBuf.TYPES["fixed64"], ProtoBuf.TYPES["bool"], ProtoBuf.TYPES["string"], ProtoBuf.TYPES["bytes"] ];
        ProtoBuf.ID_MIN = 1;
        ProtoBuf.ID_MAX = 536870911;
        ProtoBuf.convertFieldsToCamelCase = false;
        ProtoBuf.populateAccessors = true;
        ProtoBuf.populateDefaults = true;
        ProtoBuf.Util = function() {
          var Util = {};
          Util.IS_NODE = !!("object" === ("undefined" === typeof process ? "undefined" : _typeof(process)) && process + "" === "[object process]" && !process["browser"]);
          Util.XHR = function() {
            var XMLHttpFactories = [ function() {
              return new XMLHttpRequest();
            }, function() {
              return new ActiveXObject("Msxml2.XMLHTTP");
            }, function() {
              return new ActiveXObject("Msxml3.XMLHTTP");
            }, function() {
              return new ActiveXObject("Microsoft.XMLHTTP");
            } ];
            var xhr = null;
            for (var i = 0; i < XMLHttpFactories.length; i++) {
              try {
                xhr = XMLHttpFactories[i]();
              } catch (e) {
                continue;
              }
              break;
            }
            if (!xhr) throw Error("XMLHttpRequest is not supported");
            return xhr;
          };
          Util.fetch = function(path, callback) {
            callback && "function" != typeof callback && (callback = null);
            if (Util.IS_NODE) {
              var fs = require("fs");
              if (callback) fs.readFile(path, function(err, data) {
                callback(err ? null : "" + data);
              }); else try {
                return fs.readFileSync(path);
              } catch (e) {
                return null;
              }
            } else {
              var xhr = Util.XHR();
              xhr.open("GET", path, !!callback);
              xhr.setRequestHeader("Accept", "text/plain");
              "function" === typeof xhr.overrideMimeType && xhr.overrideMimeType("text/plain");
              if (!callback) {
                xhr.send(null);
                if (200 == xhr.status || 0 == xhr.status && "string" === typeof xhr.responseText) return xhr.responseText;
                return null;
              }
              xhr.onreadystatechange = function() {
                if (4 != xhr.readyState) return;
                200 == xhr.status || 0 == xhr.status && "string" === typeof xhr.responseText ? callback(xhr.responseText) : callback(null);
              };
              if (4 == xhr.readyState) return;
              xhr.send(null);
            }
          };
          Util.toCamelCase = function(str) {
            return str.replace(/_([a-zA-Z])/g, function($0, $1) {
              return $1.toUpperCase();
            });
          };
          return Util;
        }();
        ProtoBuf.Lang = {
          DELIM: /[\s\{\}=;:\[\],'"\(\)<>]/g,
          RULE: /^(?:required|optional|repeated|map)$/,
          TYPE: /^(?:double|float|int32|uint32|sint32|int64|uint64|sint64|fixed32|sfixed32|fixed64|sfixed64|bool|string|bytes)$/,
          NAME: /^[a-zA-Z_][a-zA-Z_0-9]*$/,
          TYPEDEF: /^[a-zA-Z][a-zA-Z_0-9]*$/,
          TYPEREF: /^(?:\.?[a-zA-Z_][a-zA-Z_0-9]*)+$/,
          FQTYPEREF: /^(?:\.[a-zA-Z][a-zA-Z_0-9]*)+$/,
          NUMBER: /^-?(?:[1-9][0-9]*|0|0[xX][0-9a-fA-F]+|0[0-7]+|([0-9]*(\.[0-9]*)?([Ee][+-]?[0-9]+)?)|inf|nan)$/,
          NUMBER_DEC: /^(?:[1-9][0-9]*|0)$/,
          NUMBER_HEX: /^0[xX][0-9a-fA-F]+$/,
          NUMBER_OCT: /^0[0-7]+$/,
          NUMBER_FLT: /^([0-9]*(\.[0-9]*)?([Ee][+-]?[0-9]+)?|inf|nan)$/,
          BOOL: /^(?:true|false)$/i,
          ID: /^(?:[1-9][0-9]*|0|0[xX][0-9a-fA-F]+|0[0-7]+)$/,
          NEGID: /^\-?(?:[1-9][0-9]*|0|0[xX][0-9a-fA-F]+|0[0-7]+)$/,
          WHITESPACE: /\s/,
          STRING: /(?:"([^"\\]*(?:\\.[^"\\]*)*)")|(?:'([^'\\]*(?:\\.[^'\\]*)*)')/g,
          STRING_DQ: /(?:"([^"\\]*(?:\\.[^"\\]*)*)")/g,
          STRING_SQ: /(?:'([^'\\]*(?:\\.[^'\\]*)*)')/g
        };
        ProtoBuf.DotProto = function(ProtoBuf, Lang) {
          var DotProto = {};
          var Tokenizer = function Tokenizer(proto) {
            this.source = proto + "";
            this.index = 0;
            this.line = 1;
            this.stack = [];
            this._stringOpen = null;
          };
          var TokenizerPrototype = Tokenizer.prototype;
          TokenizerPrototype._readString = function() {
            var re = '"' === this._stringOpen ? Lang.STRING_DQ : Lang.STRING_SQ;
            re.lastIndex = this.index - 1;
            var match = re.exec(this.source);
            if (!match) throw Error("unterminated string");
            this.index = re.lastIndex;
            this.stack.push(this._stringOpen);
            this._stringOpen = null;
            return match[1];
          };
          TokenizerPrototype.next = function() {
            if (this.stack.length > 0) return this.stack.shift();
            if (this.index >= this.source.length) return null;
            if (null !== this._stringOpen) return this._readString();
            var repeat, prev, next;
            do {
              repeat = false;
              while (Lang.WHITESPACE.test(next = this.source.charAt(this.index))) {
                "\n" === next && ++this.line;
                if (++this.index === this.source.length) return null;
              }
              if ("/" === this.source.charAt(this.index)) {
                ++this.index;
                if ("/" === this.source.charAt(this.index)) {
                  while ("\n" !== this.source.charAt(++this.index)) if (this.index == this.source.length) return null;
                  ++this.index;
                  ++this.line;
                  repeat = true;
                } else {
                  if ("*" !== (next = this.source.charAt(this.index))) return "/";
                  do {
                    "\n" === next && ++this.line;
                    if (++this.index === this.source.length) return null;
                    prev = next;
                    next = this.source.charAt(this.index);
                  } while ("*" !== prev || "/" !== next);
                  ++this.index;
                  repeat = true;
                }
              }
            } while (repeat);
            if (this.index === this.source.length) return null;
            var end = this.index;
            Lang.DELIM.lastIndex = 0;
            var delim = Lang.DELIM.test(this.source.charAt(end++));
            if (!delim) while (end < this.source.length && !Lang.DELIM.test(this.source.charAt(end))) ++end;
            var token = this.source.substring(this.index, this.index = end);
            '"' !== token && "'" !== token || (this._stringOpen = token);
            return token;
          };
          TokenizerPrototype.peek = function() {
            if (0 === this.stack.length) {
              var token = this.next();
              if (null === token) return null;
              this.stack.push(token);
            }
            return this.stack[0];
          };
          TokenizerPrototype.skip = function(expected) {
            var actual = this.next();
            if (actual !== expected) throw Error("illegal '" + actual + "', '" + expected + "' expected");
          };
          TokenizerPrototype.omit = function(expected) {
            if (this.peek() === expected) {
              this.next();
              return true;
            }
            return false;
          };
          TokenizerPrototype.toString = function() {
            return "Tokenizer (" + this.index + "/" + this.source.length + " at line " + this.line + ")";
          };
          DotProto.Tokenizer = Tokenizer;
          var Parser = function Parser(source) {
            this.tn = new Tokenizer(source);
            this.proto3 = false;
          };
          var ParserPrototype = Parser.prototype;
          ParserPrototype.parse = function() {
            var topLevel = {
              name: "[ROOT]",
              package: null,
              messages: [],
              enums: [],
              imports: [],
              options: {},
              services: []
            };
            var token, head = true, weak;
            try {
              while (token = this.tn.next()) switch (token) {
               case "package":
                if (!head || null !== topLevel["package"]) throw Error("unexpected 'package'");
                token = this.tn.next();
                if (!Lang.TYPEREF.test(token)) throw Error("illegal package name: " + token);
                this.tn.skip(";");
                topLevel["package"] = token;
                break;

               case "import":
                if (!head) throw Error("unexpected 'import'");
                token = this.tn.peek();
                ("public" === token || (weak = "weak" === token)) && this.tn.next();
                token = this._readString();
                this.tn.skip(";");
                weak || topLevel["imports"].push(token);
                break;

               case "syntax":
                if (!head) throw Error("unexpected 'syntax'");
                this.tn.skip("=");
                "proto3" === (topLevel["syntax"] = this._readString()) && (this.proto3 = true);
                this.tn.skip(";");
                break;

               case "message":
                this._parseMessage(topLevel, null);
                head = false;
                break;

               case "enum":
                this._parseEnum(topLevel);
                head = false;
                break;

               case "option":
                this._parseOption(topLevel);
                break;

               case "service":
                this._parseService(topLevel);
                break;

               case "extend":
                this._parseExtend(topLevel);
                break;

               default:
                throw Error("unexpected '" + token + "'");
              }
            } catch (e) {
              e.message = "Parse error at line " + this.tn.line + ": " + e.message;
              throw e;
            }
            delete topLevel["name"];
            return topLevel;
          };
          Parser.parse = function(source) {
            return new Parser(source).parse();
          };
          function mkId(value, mayBeNegative) {
            var id = -1, sign = 1;
            if ("-" == value.charAt(0)) {
              sign = -1;
              value = value.substring(1);
            }
            if (Lang.NUMBER_DEC.test(value)) id = parseInt(value); else if (Lang.NUMBER_HEX.test(value)) id = parseInt(value.substring(2), 16); else {
              if (!Lang.NUMBER_OCT.test(value)) throw Error("illegal id value: " + (sign < 0 ? "-" : "") + value);
              id = parseInt(value.substring(1), 8);
            }
            id = sign * id | 0;
            if (!mayBeNegative && id < 0) throw Error("illegal id value: " + (sign < 0 ? "-" : "") + value);
            return id;
          }
          function mkNumber(val) {
            var sign = 1;
            if ("-" == val.charAt(0)) {
              sign = -1;
              val = val.substring(1);
            }
            if (Lang.NUMBER_DEC.test(val)) return sign * parseInt(val, 10);
            if (Lang.NUMBER_HEX.test(val)) return sign * parseInt(val.substring(2), 16);
            if (Lang.NUMBER_OCT.test(val)) return sign * parseInt(val.substring(1), 8);
            if ("inf" === val) return Infinity * sign;
            if ("nan" === val) return NaN;
            if (Lang.NUMBER_FLT.test(val)) return sign * parseFloat(val);
            throw Error("illegal number value: " + (sign < 0 ? "-" : "") + val);
          }
          ParserPrototype._readString = function() {
            var value = "", token, delim;
            do {
              delim = this.tn.next();
              if ("'" !== delim && '"' !== delim) throw Error("illegal string delimiter: " + delim);
              value += this.tn.next();
              this.tn.skip(delim);
              token = this.tn.peek();
            } while ('"' === token || '"' === token);
            return value;
          };
          ParserPrototype._readValue = function(mayBeTypeRef) {
            var token = this.tn.peek(), value;
            if ('"' === token || "'" === token) return this._readString();
            this.tn.next();
            if (Lang.NUMBER.test(token)) return mkNumber(token);
            if (Lang.BOOL.test(token)) return "true" === token.toLowerCase();
            if (mayBeTypeRef && Lang.TYPEREF.test(token)) return token;
            throw Error("illegal value: " + token);
          };
          ParserPrototype._parseOption = function(parent, isList) {
            var token = this.tn.next(), custom = false;
            if ("(" === token) {
              custom = true;
              token = this.tn.next();
            }
            if (!Lang.TYPEREF.test(token)) throw Error("illegal option name: " + token);
            var name = token;
            if (custom) {
              this.tn.skip(")");
              name = "(" + name + ")";
              token = this.tn.peek();
              if (Lang.FQTYPEREF.test(token)) {
                name += token;
                this.tn.next();
              }
            }
            this.tn.skip("=");
            this._parseOptionValue(parent, name);
            isList || this.tn.skip(";");
          };
          function setOption(options, name, value) {
            if ("undefined" === typeof options[name]) options[name] = value; else {
              Array.isArray(options[name]) || (options[name] = [ options[name] ]);
              options[name].push(value);
            }
          }
          ParserPrototype._parseOptionValue = function(parent, name) {
            var token = this.tn.peek();
            if ("{" !== token) setOption(parent["options"], name, this._readValue(true)); else {
              this.tn.skip("{");
              while ("}" !== (token = this.tn.next())) {
                if (!Lang.NAME.test(token)) throw Error("illegal option name: " + name + "." + token);
                this.tn.omit(":") ? setOption(parent["options"], name + "." + token, this._readValue(true)) : this._parseOptionValue(parent, name + "." + token);
              }
            }
          };
          ParserPrototype._parseService = function(parent) {
            var token = this.tn.next();
            if (!Lang.NAME.test(token)) throw Error("illegal service name at line " + this.tn.line + ": " + token);
            var name = token;
            var svc = {
              name: name,
              rpc: {},
              options: {}
            };
            this.tn.skip("{");
            while ("}" !== (token = this.tn.next())) if ("option" === token) this._parseOption(svc); else {
              if ("rpc" !== token) throw Error("illegal service token: " + token);
              this._parseServiceRPC(svc);
            }
            this.tn.omit(";");
            parent["services"].push(svc);
          };
          ParserPrototype._parseServiceRPC = function(svc) {
            var type = "rpc", token = this.tn.next();
            if (!Lang.NAME.test(token)) throw Error("illegal rpc service method name: " + token);
            var name = token;
            var method = {
              request: null,
              response: null,
              request_stream: false,
              response_stream: false,
              options: {}
            };
            this.tn.skip("(");
            token = this.tn.next();
            if ("stream" === token.toLowerCase()) {
              method["request_stream"] = true;
              token = this.tn.next();
            }
            if (!Lang.TYPEREF.test(token)) throw Error("illegal rpc service request type: " + token);
            method["request"] = token;
            this.tn.skip(")");
            token = this.tn.next();
            if ("returns" !== token.toLowerCase()) throw Error("illegal rpc service request type delimiter: " + token);
            this.tn.skip("(");
            token = this.tn.next();
            if ("stream" === token.toLowerCase()) {
              method["response_stream"] = true;
              token = this.tn.next();
            }
            method["response"] = token;
            this.tn.skip(")");
            token = this.tn.peek();
            if ("{" === token) {
              this.tn.next();
              while ("}" !== (token = this.tn.next())) {
                if ("option" !== token) throw Error("illegal rpc service token: " + token);
                this._parseOption(method);
              }
              this.tn.omit(";");
            } else this.tn.skip(";");
            "undefined" === typeof svc[type] && (svc[type] = {});
            svc[type][name] = method;
          };
          ParserPrototype._parseMessage = function(parent, fld) {
            var isGroup = !!fld, token = this.tn.next();
            var msg = {
              name: "",
              fields: [],
              enums: [],
              messages: [],
              options: {},
              services: [],
              oneofs: {}
            };
            if (!Lang.NAME.test(token)) throw Error("illegal " + (isGroup ? "group" : "message") + " name: " + token);
            msg["name"] = token;
            if (isGroup) {
              this.tn.skip("=");
              fld["id"] = mkId(this.tn.next());
              msg["isGroup"] = true;
            }
            token = this.tn.peek();
            "[" === token && fld && this._parseFieldOptions(fld);
            this.tn.skip("{");
            while ("}" !== (token = this.tn.next())) if (Lang.RULE.test(token)) this._parseMessageField(msg, token); else if ("oneof" === token) this._parseMessageOneOf(msg); else if ("enum" === token) this._parseEnum(msg); else if ("message" === token) this._parseMessage(msg); else if ("option" === token) this._parseOption(msg); else if ("service" === token) this._parseService(msg); else if ("extensions" === token) msg.hasOwnProperty("extensions") ? msg["extensions"] = msg["extensions"].concat(this._parseExtensionRanges()) : msg["extensions"] = this._parseExtensionRanges(); else if ("reserved" === token) this._parseIgnored(); else if ("extend" === token) this._parseExtend(msg); else {
              if (!Lang.TYPEREF.test(token)) throw Error("illegal message token: " + token);
              if (!this.proto3) throw Error("illegal field rule: " + token);
              this._parseMessageField(msg, "optional", token);
            }
            this.tn.omit(";");
            parent["messages"].push(msg);
            return msg;
          };
          ParserPrototype._parseIgnored = function() {
            while (";" !== this.tn.peek()) this.tn.next();
            this.tn.skip(";");
          };
          ParserPrototype._parseMessageField = function(msg, rule, type) {
            if (!Lang.RULE.test(rule)) throw Error("illegal message field rule: " + rule);
            var fld = {
              rule: rule,
              type: "",
              name: "",
              options: {},
              id: 0
            };
            var token;
            if ("map" === rule) {
              if (type) throw Error("illegal type: " + type);
              this.tn.skip("<");
              token = this.tn.next();
              if (!Lang.TYPE.test(token) && !Lang.TYPEREF.test(token)) throw Error("illegal message field type: " + token);
              fld["keytype"] = token;
              this.tn.skip(",");
              token = this.tn.next();
              if (!Lang.TYPE.test(token) && !Lang.TYPEREF.test(token)) throw Error("illegal message field: " + token);
              fld["type"] = token;
              this.tn.skip(">");
              token = this.tn.next();
              if (!Lang.NAME.test(token)) throw Error("illegal message field name: " + token);
              fld["name"] = token;
              this.tn.skip("=");
              fld["id"] = mkId(this.tn.next());
              token = this.tn.peek();
              "[" === token && this._parseFieldOptions(fld);
              this.tn.skip(";");
            } else {
              type = "undefined" !== typeof type ? type : this.tn.next();
              if ("group" === type) {
                var grp = this._parseMessage(msg, fld);
                if (!/^[A-Z]/.test(grp["name"])) throw Error("illegal group name: " + grp["name"]);
                fld["type"] = grp["name"];
                fld["name"] = grp["name"].toLowerCase();
                this.tn.omit(";");
              } else {
                if (!Lang.TYPE.test(type) && !Lang.TYPEREF.test(type)) throw Error("illegal message field type: " + type);
                fld["type"] = type;
                token = this.tn.next();
                if (!Lang.NAME.test(token)) throw Error("illegal message field name: " + token);
                fld["name"] = token;
                this.tn.skip("=");
                fld["id"] = mkId(this.tn.next());
                token = this.tn.peek();
                "[" === token && this._parseFieldOptions(fld);
                this.tn.skip(";");
              }
            }
            msg["fields"].push(fld);
            return fld;
          };
          ParserPrototype._parseMessageOneOf = function(msg) {
            var token = this.tn.next();
            if (!Lang.NAME.test(token)) throw Error("illegal oneof name: " + token);
            var name = token, fld;
            var fields = [];
            this.tn.skip("{");
            while ("}" !== (token = this.tn.next())) {
              fld = this._parseMessageField(msg, "optional", token);
              fld["oneof"] = name;
              fields.push(fld["id"]);
            }
            this.tn.omit(";");
            msg["oneofs"][name] = fields;
          };
          ParserPrototype._parseFieldOptions = function(fld) {
            this.tn.skip("[");
            var token, first = true;
            while ("]" !== (token = this.tn.peek())) {
              first || this.tn.skip(",");
              this._parseOption(fld, true);
              first = false;
            }
            this.tn.next();
          };
          ParserPrototype._parseEnum = function(msg) {
            var enm = {
              name: "",
              values: [],
              options: {}
            };
            var token = this.tn.next();
            if (!Lang.NAME.test(token)) throw Error("illegal name: " + token);
            enm["name"] = token;
            this.tn.skip("{");
            while ("}" !== (token = this.tn.next())) if ("option" === token) this._parseOption(enm); else {
              if (!Lang.NAME.test(token)) throw Error("illegal name: " + token);
              this.tn.skip("=");
              var val = {
                name: token,
                id: mkId(this.tn.next(), true)
              };
              token = this.tn.peek();
              "[" === token && this._parseFieldOptions({
                options: {}
              });
              this.tn.skip(";");
              enm["values"].push(val);
            }
            this.tn.omit(";");
            msg["enums"].push(enm);
          };
          ParserPrototype._parseExtensionRanges = function() {
            var ranges = [];
            var token, range, value;
            do {
              range = [];
              while (true) {
                token = this.tn.next();
                switch (token) {
                 case "min":
                  value = ProtoBuf.ID_MIN;
                  break;

                 case "max":
                  value = ProtoBuf.ID_MAX;
                  break;

                 default:
                  value = mkNumber(token);
                }
                range.push(value);
                if (2 === range.length) break;
                if ("to" !== this.tn.peek()) {
                  range.push(value);
                  break;
                }
                this.tn.next();
              }
              ranges.push(range);
            } while (this.tn.omit(","));
            this.tn.skip(";");
            return ranges;
          };
          ParserPrototype._parseExtend = function(parent) {
            var token = this.tn.next();
            if (!Lang.TYPEREF.test(token)) throw Error("illegal extend reference: " + token);
            var ext = {
              ref: token,
              fields: []
            };
            this.tn.skip("{");
            while ("}" !== (token = this.tn.next())) if (Lang.RULE.test(token)) this._parseMessageField(ext, token); else {
              if (!Lang.TYPEREF.test(token)) throw Error("illegal extend token: " + token);
              if (!this.proto3) throw Error("illegal field rule: " + token);
              this._parseMessageField(ext, "optional", token);
            }
            this.tn.omit(";");
            parent["messages"].push(ext);
            return ext;
          };
          ParserPrototype.toString = function() {
            return "Parser at line " + this.tn.line;
          };
          DotProto.Parser = Parser;
          return DotProto;
        }(ProtoBuf, ProtoBuf.Lang);
        ProtoBuf.Reflect = function(ProtoBuf) {
          var Reflect = {};
          var T = function T(builder, parent, name) {
            this.builder = builder;
            this.parent = parent;
            this.name = name;
            this.className;
          };
          var TPrototype = T.prototype;
          TPrototype.fqn = function() {
            var name = this.name, ptr = this;
            do {
              ptr = ptr.parent;
              if (null == ptr) break;
              name = ptr.name + "." + name;
            } while (true);
            return name;
          };
          TPrototype.toString = function(includeClass) {
            return (includeClass ? this.className + " " : "") + this.fqn();
          };
          TPrototype.build = function() {
            throw Error(this.toString(true) + " cannot be built directly");
          };
          Reflect.T = T;
          var Namespace = function Namespace(builder, parent, name, options, syntax) {
            T.call(this, builder, parent, name);
            this.className = "Namespace";
            this.children = [];
            this.options = options || {};
            this.syntax = syntax || "proto2";
          };
          var NamespacePrototype = Namespace.prototype = Object.create(T.prototype);
          NamespacePrototype.getChildren = function(type) {
            type = type || null;
            if (null == type) return this.children.slice();
            var children = [];
            for (var i = 0, k = this.children.length; i < k; ++i) this.children[i] instanceof type && children.push(this.children[i]);
            return children;
          };
          NamespacePrototype.addChild = function(child) {
            var other;
            if (other = this.getChild(child.name)) if (other instanceof Message.Field && other.name !== other.originalName && null === this.getChild(other.originalName)) other.name = other.originalName; else {
              if (!(child instanceof Message.Field && child.name !== child.originalName && null === this.getChild(child.originalName))) throw Error("Duplicate name in namespace " + this.toString(true) + ": " + child.name);
              child.name = child.originalName;
            }
            this.children.push(child);
          };
          NamespacePrototype.getChild = function(nameOrId) {
            var key = "number" === typeof nameOrId ? "id" : "name";
            for (var i = 0, k = this.children.length; i < k; ++i) if (this.children[i][key] === nameOrId) return this.children[i];
            return null;
          };
          NamespacePrototype.resolve = function(qn, excludeNonNamespace) {
            var part = "string" === typeof qn ? qn.split(".") : qn, ptr = this, i = 0;
            if ("" === part[i]) {
              while (null !== ptr.parent) ptr = ptr.parent;
              i++;
            }
            var child;
            do {
              do {
                if (!(ptr instanceof Reflect.Namespace)) {
                  ptr = null;
                  break;
                }
                child = ptr.getChild(part[i]);
                if (!child || !(child instanceof Reflect.T) || excludeNonNamespace && !(child instanceof Reflect.Namespace)) {
                  ptr = null;
                  break;
                }
                ptr = child;
                i++;
              } while (i < part.length);
              if (null != ptr) break;
              if (null !== this.parent) return this.parent.resolve(qn, excludeNonNamespace);
            } while (null != ptr);
            return ptr;
          };
          NamespacePrototype.qn = function(t) {
            var part = [], ptr = t;
            do {
              part.unshift(ptr.name);
              ptr = ptr.parent;
            } while (null !== ptr);
            for (var len = 1; len <= part.length; len++) {
              var qn = part.slice(part.length - len);
              if (t === this.resolve(qn, t instanceof Reflect.Namespace)) return qn.join(".");
            }
            return t.fqn();
          };
          NamespacePrototype.build = function() {
            var ns = {};
            var children = this.children;
            for (var i = 0, k = children.length, child; i < k; ++i) {
              child = children[i];
              child instanceof Namespace && (ns[child.name] = child.build());
            }
            Object.defineProperty && Object.defineProperty(ns, "$options", {
              value: this.buildOpt()
            });
            return ns;
          };
          NamespacePrototype.buildOpt = function() {
            var opt = {}, keys = Object.keys(this.options);
            for (var i = 0, k = keys.length; i < k; ++i) {
              var key = keys[i], val = this.options[keys[i]];
              opt[key] = val;
            }
            return opt;
          };
          NamespacePrototype.getOption = function(name) {
            if ("undefined" === typeof name) return this.options;
            return "undefined" !== typeof this.options[name] ? this.options[name] : null;
          };
          Reflect.Namespace = Namespace;
          var Element = function Element(type, resolvedType, isMapKey, syntax, name) {
            this.type = type;
            this.resolvedType = resolvedType;
            this.isMapKey = isMapKey;
            this.syntax = syntax;
            this.name = name;
            if (isMapKey && ProtoBuf.MAP_KEY_TYPES.indexOf(type) < 0) throw Error("Invalid map key type: " + type.name);
          };
          var ElementPrototype = Element.prototype;
          function mkDefault(type) {
            "string" === typeof type && (type = ProtoBuf.TYPES[type]);
            if ("undefined" === typeof type.defaultValue) throw Error("default value for type " + type.name + " is not supported");
            if (type == ProtoBuf.TYPES["bytes"]) return new ByteBuffer(0);
            return type.defaultValue;
          }
          Element.defaultFieldValue = mkDefault;
          function mkLong(value, unsigned) {
            if (value && "number" === typeof value.low && "number" === typeof value.high && "boolean" === typeof value.unsigned && value.low === value.low && value.high === value.high) return new ProtoBuf.Long(value.low, value.high, "undefined" === typeof unsigned ? value.unsigned : unsigned);
            if ("string" === typeof value) return ProtoBuf.Long.fromString(value, unsigned || false, 10);
            if ("number" === typeof value) return ProtoBuf.Long.fromNumber(value, unsigned || false);
            throw Error("not convertible to Long");
          }
          ElementPrototype.toString = function() {
            return (this.name || "") + (this.isMapKey ? "map" : "value") + " element";
          };
          ElementPrototype.verifyValue = function(value) {
            var self = this;
            function fail(val, msg) {
              throw Error("Illegal value for " + self.toString(true) + " of type " + self.type.name + ": " + val + " (" + msg + ")");
            }
            switch (this.type) {
             case ProtoBuf.TYPES["int32"]:
             case ProtoBuf.TYPES["sint32"]:
             case ProtoBuf.TYPES["sfixed32"]:
              ("number" !== typeof value || value === value && value % 1 !== 0) && fail("undefined" === typeof value ? "undefined" : _typeof(value), "not an integer");
              return value > 4294967295 ? 0 | value : value;

             case ProtoBuf.TYPES["uint32"]:
             case ProtoBuf.TYPES["fixed32"]:
              ("number" !== typeof value || value === value && value % 1 !== 0) && fail("undefined" === typeof value ? "undefined" : _typeof(value), "not an integer");
              return value < 0 ? value >>> 0 : value;

             case ProtoBuf.TYPES["int64"]:
             case ProtoBuf.TYPES["sint64"]:
             case ProtoBuf.TYPES["sfixed64"]:
              if (ProtoBuf.Long) try {
                return mkLong(value, false);
              } catch (e) {
                fail("undefined" === typeof value ? "undefined" : _typeof(value), e.message);
              } else fail("undefined" === typeof value ? "undefined" : _typeof(value), "requires Long.js");

             case ProtoBuf.TYPES["uint64"]:
             case ProtoBuf.TYPES["fixed64"]:
              if (ProtoBuf.Long) try {
                return mkLong(value, true);
              } catch (e) {
                fail("undefined" === typeof value ? "undefined" : _typeof(value), e.message);
              } else fail("undefined" === typeof value ? "undefined" : _typeof(value), "requires Long.js");

             case ProtoBuf.TYPES["bool"]:
              "boolean" !== typeof value && fail("undefined" === typeof value ? "undefined" : _typeof(value), "not a boolean");
              return value;

             case ProtoBuf.TYPES["float"]:
             case ProtoBuf.TYPES["double"]:
              "number" !== typeof value && fail("undefined" === typeof value ? "undefined" : _typeof(value), "not a number");
              return value;

             case ProtoBuf.TYPES["string"]:
              "string" === typeof value || value && value instanceof String || fail("undefined" === typeof value ? "undefined" : _typeof(value), "not a string");
              return "" + value;

             case ProtoBuf.TYPES["bytes"]:
              if (ByteBuffer.isByteBuffer(value)) return value;
              return ByteBuffer.wrap(value, "base64");

             case ProtoBuf.TYPES["enum"]:
              var values = this.resolvedType.getChildren(ProtoBuf.Reflect.Enum.Value);
              for (i = 0; i < values.length; i++) {
                if (values[i].name == value) return values[i].id;
                if (values[i].id == value) return values[i].id;
              }
              if ("proto3" === this.syntax) {
                ("number" !== typeof value || value === value && value % 1 !== 0) && fail("undefined" === typeof value ? "undefined" : _typeof(value), "not an integer");
                (value > 4294967295 || value < 0) && fail("undefined" === typeof value ? "undefined" : _typeof(value), "not in range for uint32");
                return value;
              }
              fail(value, "not a valid enum value");

             case ProtoBuf.TYPES["group"]:
             case ProtoBuf.TYPES["message"]:
              value && "object" === ("undefined" === typeof value ? "undefined" : _typeof(value)) || fail("undefined" === typeof value ? "undefined" : _typeof(value), "object expected");
              if (value instanceof this.resolvedType.clazz) return value;
              if (value instanceof ProtoBuf.Builder.Message) {
                var obj = {};
                for (var i in value) value.hasOwnProperty(i) && (obj[i] = value[i]);
                value = obj;
              }
              return new this.resolvedType.clazz(value);
            }
            throw Error("[INTERNAL] Illegal value for " + this.toString(true) + ": " + value + " (undefined type " + this.type + ")");
          };
          ElementPrototype.calculateLength = function(id, value) {
            if (null === value) return 0;
            var n;
            switch (this.type) {
             case ProtoBuf.TYPES["int32"]:
              return value < 0 ? ByteBuffer.calculateVarint64(value) : ByteBuffer.calculateVarint32(value);

             case ProtoBuf.TYPES["uint32"]:
              return ByteBuffer.calculateVarint32(value);

             case ProtoBuf.TYPES["sint32"]:
              return ByteBuffer.calculateVarint32(ByteBuffer.zigZagEncode32(value));

             case ProtoBuf.TYPES["fixed32"]:
             case ProtoBuf.TYPES["sfixed32"]:
             case ProtoBuf.TYPES["float"]:
              return 4;

             case ProtoBuf.TYPES["int64"]:
             case ProtoBuf.TYPES["uint64"]:
              return ByteBuffer.calculateVarint64(value);

             case ProtoBuf.TYPES["sint64"]:
              return ByteBuffer.calculateVarint64(ByteBuffer.zigZagEncode64(value));

             case ProtoBuf.TYPES["fixed64"]:
             case ProtoBuf.TYPES["sfixed64"]:
              return 8;

             case ProtoBuf.TYPES["bool"]:
              return 1;

             case ProtoBuf.TYPES["enum"]:
              return ByteBuffer.calculateVarint32(value);

             case ProtoBuf.TYPES["double"]:
              return 8;

             case ProtoBuf.TYPES["string"]:
              n = ByteBuffer.calculateUTF8Bytes(value);
              return ByteBuffer.calculateVarint32(n) + n;

             case ProtoBuf.TYPES["bytes"]:
              if (value.remaining() < 0) throw Error("Illegal value for " + this.toString(true) + ": " + value.remaining() + " bytes remaining");
              return ByteBuffer.calculateVarint32(value.remaining()) + value.remaining();

             case ProtoBuf.TYPES["message"]:
              n = this.resolvedType.calculate(value);
              return ByteBuffer.calculateVarint32(n) + n;

             case ProtoBuf.TYPES["group"]:
              n = this.resolvedType.calculate(value);
              return n + ByteBuffer.calculateVarint32(id << 3 | ProtoBuf.WIRE_TYPES.ENDGROUP);
            }
            throw Error("[INTERNAL] Illegal value to encode in " + this.toString(true) + ": " + value + " (unknown type)");
          };
          ElementPrototype.encodeValue = function(id, value, buffer) {
            if (null === value) return buffer;
            switch (this.type) {
             case ProtoBuf.TYPES["int32"]:
              value < 0 ? buffer.writeVarint64(value) : buffer.writeVarint32(value);
              break;

             case ProtoBuf.TYPES["uint32"]:
              buffer.writeVarint32(value);
              break;

             case ProtoBuf.TYPES["sint32"]:
              buffer.writeVarint32ZigZag(value);
              break;

             case ProtoBuf.TYPES["fixed32"]:
              buffer.writeUint32(value);
              break;

             case ProtoBuf.TYPES["sfixed32"]:
              buffer.writeInt32(value);
              break;

             case ProtoBuf.TYPES["int64"]:
             case ProtoBuf.TYPES["uint64"]:
              buffer.writeVarint64(value);
              break;

             case ProtoBuf.TYPES["sint64"]:
              buffer.writeVarint64ZigZag(value);
              break;

             case ProtoBuf.TYPES["fixed64"]:
              buffer.writeUint64(value);
              break;

             case ProtoBuf.TYPES["sfixed64"]:
              buffer.writeInt64(value);
              break;

             case ProtoBuf.TYPES["bool"]:
              "string" === typeof value ? buffer.writeVarint32("false" === value.toLowerCase() ? 0 : !!value) : buffer.writeVarint32(value ? 1 : 0);
              break;

             case ProtoBuf.TYPES["enum"]:
              buffer.writeVarint32(value);
              break;

             case ProtoBuf.TYPES["float"]:
              buffer.writeFloat32(value);
              break;

             case ProtoBuf.TYPES["double"]:
              buffer.writeFloat64(value);
              break;

             case ProtoBuf.TYPES["string"]:
              buffer.writeVString(value);
              break;

             case ProtoBuf.TYPES["bytes"]:
              if (value.remaining() < 0) throw Error("Illegal value for " + this.toString(true) + ": " + value.remaining() + " bytes remaining");
              var prevOffset = value.offset;
              buffer.writeVarint32(value.remaining());
              buffer.append(value);
              value.offset = prevOffset;
              break;

             case ProtoBuf.TYPES["message"]:
              var bb = new ByteBuffer().LE();
              this.resolvedType.encode(value, bb);
              buffer.writeVarint32(bb.offset);
              buffer.append(bb.flip());
              break;

             case ProtoBuf.TYPES["group"]:
              this.resolvedType.encode(value, buffer);
              buffer.writeVarint32(id << 3 | ProtoBuf.WIRE_TYPES.ENDGROUP);
              break;

             default:
              throw Error("[INTERNAL] Illegal value to encode in " + this.toString(true) + ": " + value + " (unknown type)");
            }
            return buffer;
          };
          ElementPrototype.decode = function(buffer, wireType, id) {
            if (wireType != this.type.wireType) throw Error("Unexpected wire type for element");
            var value, nBytes;
            switch (this.type) {
             case ProtoBuf.TYPES["int32"]:
              return 0 | buffer.readVarint32();

             case ProtoBuf.TYPES["uint32"]:
              return buffer.readVarint32() >>> 0;

             case ProtoBuf.TYPES["sint32"]:
              return 0 | buffer.readVarint32ZigZag();

             case ProtoBuf.TYPES["fixed32"]:
              return buffer.readUint32() >>> 0;

             case ProtoBuf.TYPES["sfixed32"]:
              return 0 | buffer.readInt32();

             case ProtoBuf.TYPES["int64"]:
              return buffer.readVarint64();

             case ProtoBuf.TYPES["uint64"]:
              return buffer.readVarint64().toUnsigned();

             case ProtoBuf.TYPES["sint64"]:
              return buffer.readVarint64ZigZag();

             case ProtoBuf.TYPES["fixed64"]:
              return buffer.readUint64();

             case ProtoBuf.TYPES["sfixed64"]:
              return buffer.readInt64();

             case ProtoBuf.TYPES["bool"]:
              return !!buffer.readVarint32();

             case ProtoBuf.TYPES["enum"]:
              return buffer.readVarint32();

             case ProtoBuf.TYPES["float"]:
              return buffer.readFloat();

             case ProtoBuf.TYPES["double"]:
              return buffer.readDouble();

             case ProtoBuf.TYPES["string"]:
              return buffer.readVString();

             case ProtoBuf.TYPES["bytes"]:
              nBytes = buffer.readVarint32();
              if (buffer.remaining() < nBytes) throw Error("Illegal number of bytes for " + this.toString(true) + ": " + nBytes + " required but got only " + buffer.remaining());
              value = buffer.clone();
              value.limit = value.offset + nBytes;
              buffer.offset += nBytes;
              return value;

             case ProtoBuf.TYPES["message"]:
              nBytes = buffer.readVarint32();
              return this.resolvedType.decode(buffer, nBytes);

             case ProtoBuf.TYPES["group"]:
              return this.resolvedType.decode(buffer, -1, id);
            }
            throw Error("[INTERNAL] Illegal decode type");
          };
          ElementPrototype.valueFromString = function(str) {
            if (!this.isMapKey) throw Error("valueFromString() called on non-map-key element");
            switch (this.type) {
             case ProtoBuf.TYPES["int32"]:
             case ProtoBuf.TYPES["sint32"]:
             case ProtoBuf.TYPES["sfixed32"]:
             case ProtoBuf.TYPES["uint32"]:
             case ProtoBuf.TYPES["fixed32"]:
              return this.verifyValue(parseInt(str));

             case ProtoBuf.TYPES["int64"]:
             case ProtoBuf.TYPES["sint64"]:
             case ProtoBuf.TYPES["sfixed64"]:
             case ProtoBuf.TYPES["uint64"]:
             case ProtoBuf.TYPES["fixed64"]:
              return this.verifyValue(str);

             case ProtoBuf.TYPES["bool"]:
              return "true" === str;

             case ProtoBuf.TYPES["string"]:
              return this.verifyValue(str);

             case ProtoBuf.TYPES["bytes"]:
              return ByteBuffer.fromBinary(str);
            }
          };
          ElementPrototype.valueToString = function(value) {
            if (!this.isMapKey) throw Error("valueToString() called on non-map-key element");
            return this.type === ProtoBuf.TYPES["bytes"] ? value.toString("binary") : value.toString();
          };
          Reflect.Element = Element;
          var Message = function Message(builder, parent, name, options, isGroup, syntax) {
            Namespace.call(this, builder, parent, name, options, syntax);
            this.className = "Message";
            this.extensions = void 0;
            this.clazz = null;
            this.isGroup = !!isGroup;
            this._fields = null;
            this._fieldsById = null;
            this._fieldsByName = null;
          };
          var MessagePrototype = Message.prototype = Object.create(Namespace.prototype);
          MessagePrototype.build = function(rebuild) {
            if (this.clazz && !rebuild) return this.clazz;
            var clazz = function(ProtoBuf, T) {
              var fields = T.getChildren(ProtoBuf.Reflect.Message.Field), oneofs = T.getChildren(ProtoBuf.Reflect.Message.OneOf);
              var Message = function Message(values, var_args) {
                ProtoBuf.Builder.Message.call(this);
                for (var i = 0, k = oneofs.length; i < k; ++i) this[oneofs[i].name] = null;
                for (i = 0, k = fields.length; i < k; ++i) {
                  var field = fields[i];
                  this[field.name] = field.repeated ? [] : field.map ? new ProtoBuf.Map(field) : null;
                  !field.required && "proto3" !== T.syntax || null === field.defaultValue || (this[field.name] = field.defaultValue);
                }
                if (arguments.length > 0) {
                  var value;
                  if (1 !== arguments.length || null === values || "object" !== ("undefined" === typeof values ? "undefined" : _typeof(values)) || !("function" !== typeof values.encode || values instanceof Message) || Array.isArray(values) || values instanceof ProtoBuf.Map || ByteBuffer.isByteBuffer(values) || values instanceof ArrayBuffer || ProtoBuf.Long && values instanceof ProtoBuf.Long) for (i = 0, 
                  k = arguments.length; i < k; ++i) "undefined" !== typeof (value = arguments[i]) && this.$set(fields[i].name, value); else this.$set(values);
                }
              };
              var MessagePrototype = Message.prototype = Object.create(ProtoBuf.Builder.Message.prototype);
              MessagePrototype.add = function(key, value, noAssert) {
                var field = T._fieldsByName[key];
                if (!noAssert) {
                  if (!field) throw Error(this + "#" + key + " is undefined");
                  if (!(field instanceof ProtoBuf.Reflect.Message.Field)) throw Error(this + "#" + key + " is not a field: " + field.toString(true));
                  if (!field.repeated) throw Error(this + "#" + key + " is not a repeated field");
                  value = field.verifyValue(value, true);
                }
                null === this[key] && (this[key] = []);
                this[key].push(value);
                return this;
              };
              MessagePrototype.$add = MessagePrototype.add;
              MessagePrototype.set = function(keyOrObj, value, noAssert) {
                if (keyOrObj && "object" === ("undefined" === typeof keyOrObj ? "undefined" : _typeof(keyOrObj))) {
                  noAssert = value;
                  for (var ikey in keyOrObj) keyOrObj.hasOwnProperty(ikey) && "undefined" !== typeof (value = keyOrObj[ikey]) && void 0 === T._oneofsByName[ikey] && this.$set(ikey, value, noAssert);
                  return this;
                }
                var field = T._fieldsByName[keyOrObj];
                if (noAssert) this[keyOrObj] = value; else {
                  if (!field) throw Error(this + "#" + keyOrObj + " is not a field: undefined");
                  if (!(field instanceof ProtoBuf.Reflect.Message.Field)) throw Error(this + "#" + keyOrObj + " is not a field: " + field.toString(true));
                  this[field.name] = value = field.verifyValue(value);
                }
                if (field && field.oneof) {
                  var currentField = this[field.oneof.name];
                  if (null !== value) {
                    null !== currentField && currentField !== field.name && (this[currentField] = null);
                    this[field.oneof.name] = field.name;
                  } else currentField === keyOrObj && (this[field.oneof.name] = null);
                }
                return this;
              };
              MessagePrototype.$set = MessagePrototype.set;
              MessagePrototype.get = function(key, noAssert) {
                if (noAssert) return this[key];
                var field = T._fieldsByName[key];
                if (!field || !(field instanceof ProtoBuf.Reflect.Message.Field)) throw Error(this + "#" + key + " is not a field: undefined");
                if (!(field instanceof ProtoBuf.Reflect.Message.Field)) throw Error(this + "#" + key + " is not a field: " + field.toString(true));
                return this[field.name];
              };
              MessagePrototype.$get = MessagePrototype.get;
              for (var i = 0; i < fields.length; i++) {
                var field = fields[i];
                if (field instanceof ProtoBuf.Reflect.Message.ExtensionField) continue;
                T.builder.options["populateAccessors"] && function(field) {
                  var Name = field.originalName.replace(/(_[a-zA-Z])/g, function(match) {
                    return match.toUpperCase().replace("_", "");
                  });
                  Name = Name.substring(0, 1).toUpperCase() + Name.substring(1);
                  var name = field.originalName.replace(/([A-Z])/g, function(match) {
                    return "_" + match;
                  });
                  var setter = function setter(value, noAssert) {
                    this[field.name] = noAssert ? value : field.verifyValue(value);
                    return this;
                  };
                  var getter = function getter() {
                    return this[field.name];
                  };
                  null === T.getChild("set" + Name) && (MessagePrototype["set" + Name] = setter);
                  null === T.getChild("set_" + name) && (MessagePrototype["set_" + name] = setter);
                  null === T.getChild("get" + Name) && (MessagePrototype["get" + Name] = getter);
                  null === T.getChild("get_" + name) && (MessagePrototype["get_" + name] = getter);
                }(field);
              }
              MessagePrototype.encode = function(buffer, noVerify) {
                "boolean" === typeof buffer && (noVerify = buffer, buffer = void 0);
                var isNew = false;
                buffer || (buffer = new ByteBuffer(), isNew = true);
                var le = buffer.littleEndian;
                try {
                  T.encode(this, buffer.LE(), noVerify);
                  return (isNew ? buffer.flip() : buffer).LE(le);
                } catch (e) {
                  buffer.LE(le);
                  throw e;
                }
              };
              Message.encode = function(data, buffer, noVerify) {
                return new Message(data).encode(buffer, noVerify);
              };
              MessagePrototype.calculate = function() {
                return T.calculate(this);
              };
              MessagePrototype.encodeDelimited = function(buffer, noVerify) {
                var isNew = false;
                buffer || (buffer = new ByteBuffer(), isNew = true);
                var enc = new ByteBuffer().LE();
                T.encode(this, enc, noVerify).flip();
                buffer.writeVarint32(enc.remaining());
                buffer.append(enc);
                return isNew ? buffer.flip() : buffer;
              };
              MessagePrototype.encodeAB = function() {
                try {
                  return this.encode().toArrayBuffer();
                } catch (e) {
                  e["encoded"] && (e["encoded"] = e["encoded"].toArrayBuffer());
                  throw e;
                }
              };
              MessagePrototype.toArrayBuffer = MessagePrototype.encodeAB;
              MessagePrototype.encodeNB = function() {
                try {
                  return this.encode().toBuffer();
                } catch (e) {
                  e["encoded"] && (e["encoded"] = e["encoded"].toBuffer());
                  throw e;
                }
              };
              MessagePrototype.toBuffer = MessagePrototype.encodeNB;
              MessagePrototype.encode64 = function() {
                try {
                  return this.encode().toBase64();
                } catch (e) {
                  e["encoded"] && (e["encoded"] = e["encoded"].toBase64());
                  throw e;
                }
              };
              MessagePrototype.toBase64 = MessagePrototype.encode64;
              MessagePrototype.encodeHex = function() {
                try {
                  return this.encode().toHex();
                } catch (e) {
                  e["encoded"] && (e["encoded"] = e["encoded"].toHex());
                  throw e;
                }
              };
              MessagePrototype.toHex = MessagePrototype.encodeHex;
              function cloneRaw(obj, binaryAsBase64, longsAsStrings, resolvedType) {
                if (null === obj || "object" !== ("undefined" === typeof obj ? "undefined" : _typeof(obj))) {
                  if (resolvedType && resolvedType instanceof ProtoBuf.Reflect.Enum) {
                    var name = ProtoBuf.Reflect.Enum.getName(resolvedType.object, obj);
                    if (null !== name) return name;
                  }
                  return obj;
                }
                if (ByteBuffer.isByteBuffer(obj)) return binaryAsBase64 ? obj.toBase64() : obj.toBuffer();
                if (ProtoBuf.Long.isLong(obj)) return longsAsStrings ? obj.toString() : ProtoBuf.Long.fromValue(obj);
                var clone;
                if (Array.isArray(obj)) {
                  clone = [];
                  obj.forEach(function(v, k) {
                    clone[k] = cloneRaw(v, binaryAsBase64, longsAsStrings, resolvedType);
                  });
                  return clone;
                }
                clone = {};
                if (obj instanceof ProtoBuf.Map) {
                  var it = obj.entries();
                  for (var e = it.next(); !e.done; e = it.next()) clone[obj.keyElem.valueToString(e.value[0])] = cloneRaw(e.value[1], binaryAsBase64, longsAsStrings, obj.valueElem.resolvedType);
                  return clone;
                }
                var type = obj.$type, field = void 0;
                for (var i in obj) obj.hasOwnProperty(i) && (type && (field = type.getChild(i)) ? clone[i] = cloneRaw(obj[i], binaryAsBase64, longsAsStrings, field.resolvedType) : clone[i] = cloneRaw(obj[i], binaryAsBase64, longsAsStrings));
                return clone;
              }
              MessagePrototype.toRaw = function(binaryAsBase64, longsAsStrings) {
                return cloneRaw(this, !!binaryAsBase64, !!longsAsStrings, this.$type);
              };
              MessagePrototype.encodeJSON = function() {
                return JSON.stringify(cloneRaw(this, true, true, this.$type));
              };
              Message.decode = function(buffer, length, enc) {
                "string" === typeof length && (enc = length, length = -1);
                "string" === typeof buffer ? buffer = ByteBuffer.wrap(buffer, enc || "base64") : ByteBuffer.isByteBuffer(buffer) || (buffer = ByteBuffer.wrap(buffer));
                var le = buffer.littleEndian;
                try {
                  var msg = T.decode(buffer.LE(), length);
                  buffer.LE(le);
                  return msg;
                } catch (e) {
                  buffer.LE(le);
                  throw e;
                }
              };
              Message.decodeDelimited = function(buffer, enc) {
                "string" === typeof buffer ? buffer = ByteBuffer.wrap(buffer, enc || "base64") : ByteBuffer.isByteBuffer(buffer) || (buffer = ByteBuffer.wrap(buffer));
                if (buffer.remaining() < 1) return null;
                var off = buffer.offset, len = buffer.readVarint32();
                if (buffer.remaining() < len) {
                  buffer.offset = off;
                  return null;
                }
                try {
                  var msg = T.decode(buffer.slice(buffer.offset, buffer.offset + len).LE());
                  buffer.offset += len;
                  return msg;
                } catch (err) {
                  buffer.offset += len;
                  throw err;
                }
              };
              Message.decode64 = function(str) {
                return Message.decode(str, "base64");
              };
              Message.decodeHex = function(str) {
                return Message.decode(str, "hex");
              };
              Message.decodeJSON = function(str) {
                return new Message(JSON.parse(str));
              };
              MessagePrototype.toString = function() {
                return T.toString();
              };
              var $optionsS;
              var $options;
              var $typeS;
              var $type;
              Object.defineProperty && (Object.defineProperty(Message, "$options", {
                value: T.buildOpt()
              }), Object.defineProperty(MessagePrototype, "$options", {
                value: Message["$options"]
              }), Object.defineProperty(Message, "$type", {
                value: T
              }), Object.defineProperty(MessagePrototype, "$type", {
                value: T
              }));
              return Message;
            }(ProtoBuf, this);
            this._fields = [];
            this._fieldsById = {};
            this._fieldsByName = {};
            this._oneofsByName = {};
            for (var i = 0, k = this.children.length, child; i < k; i++) {
              child = this.children[i];
              if (child instanceof Enum || child instanceof Message || child instanceof Service) {
                if (clazz.hasOwnProperty(child.name)) throw Error("Illegal reflect child of " + this.toString(true) + ": " + child.toString(true) + " cannot override static property '" + child.name + "'");
                clazz[child.name] = child.build();
              } else if (child instanceof Message.Field) child.build(), this._fields.push(child), 
              this._fieldsById[child.id] = child, this._fieldsByName[child.name] = child; else if (child instanceof Message.OneOf) this._oneofsByName[child.name] = child; else if (!(child instanceof Message.OneOf) && !(child instanceof Extension)) throw Error("Illegal reflect child of " + this.toString(true) + ": " + this.children[i].toString(true));
            }
            return this.clazz = clazz;
          };
          MessagePrototype.encode = function(message, buffer, noVerify) {
            var fieldMissing = null, field;
            for (var i = 0, k = this._fields.length, val; i < k; ++i) {
              field = this._fields[i];
              val = message[field.name];
              field.required && null === val ? null === fieldMissing && (fieldMissing = field) : field.encode(noVerify ? val : field.verifyValue(val), buffer, message);
            }
            if (null !== fieldMissing) {
              var err = Error("Missing at least one required field for " + this.toString(true) + ": " + fieldMissing);
              err["encoded"] = buffer;
              throw err;
            }
            return buffer;
          };
          MessagePrototype.calculate = function(message) {
            for (var n = 0, i = 0, k = this._fields.length, field, val; i < k; ++i) {
              field = this._fields[i];
              val = message[field.name];
              if (field.required && null === val) throw Error("Missing at least one required field for " + this.toString(true) + ": " + field);
              n += field.calculate(val, message);
            }
            return n;
          };
          function skipTillGroupEnd(expectedId, buf) {
            var tag = buf.readVarint32(), wireType = 7 & tag, id = tag >>> 3;
            switch (wireType) {
             case ProtoBuf.WIRE_TYPES.VARINT:
              do {
                tag = buf.readUint8();
              } while (128 === (128 & tag));
              break;

             case ProtoBuf.WIRE_TYPES.BITS64:
              buf.offset += 8;
              break;

             case ProtoBuf.WIRE_TYPES.LDELIM:
              tag = buf.readVarint32();
              buf.offset += tag;
              break;

             case ProtoBuf.WIRE_TYPES.STARTGROUP:
              skipTillGroupEnd(id, buf);
              break;

             case ProtoBuf.WIRE_TYPES.ENDGROUP:
              if (id === expectedId) return false;
              throw Error("Illegal GROUPEND after unknown group: " + id + " (" + expectedId + " expected)");

             case ProtoBuf.WIRE_TYPES.BITS32:
              buf.offset += 4;
              break;

             default:
              throw Error("Illegal wire type in unknown group " + expectedId + ": " + wireType);
            }
            return true;
          }
          MessagePrototype.decode = function(buffer, length, expectedGroupEndId) {
            "number" !== typeof length && (length = -1);
            var start = buffer.offset, msg = new this.clazz(), tag, wireType, id, field;
            while (buffer.offset < start + length || -1 === length && buffer.remaining() > 0) {
              tag = buffer.readVarint32();
              wireType = 7 & tag;
              id = tag >>> 3;
              if (wireType === ProtoBuf.WIRE_TYPES.ENDGROUP) {
                if (id !== expectedGroupEndId) throw Error("Illegal group end indicator for " + this.toString(true) + ": " + id + " (" + (expectedGroupEndId ? expectedGroupEndId + " expected" : "not a group") + ")");
                break;
              }
              if (!(field = this._fieldsById[id])) {
                switch (wireType) {
                 case ProtoBuf.WIRE_TYPES.VARINT:
                  buffer.readVarint32();
                  break;

                 case ProtoBuf.WIRE_TYPES.BITS32:
                  buffer.offset += 4;
                  break;

                 case ProtoBuf.WIRE_TYPES.BITS64:
                  buffer.offset += 8;
                  break;

                 case ProtoBuf.WIRE_TYPES.LDELIM:
                  var len = buffer.readVarint32();
                  buffer.offset += len;
                  break;

                 case ProtoBuf.WIRE_TYPES.STARTGROUP:
                  while (skipTillGroupEnd(id, buffer)) ;
                  break;

                 default:
                  throw Error("Illegal wire type for unknown field " + id + " in " + this.toString(true) + "#decode: " + wireType);
                }
                continue;
              }
              if (field.repeated && !field.options["packed"]) msg[field.name].push(field.decode(wireType, buffer)); else if (field.map) {
                var keyval = field.decode(wireType, buffer);
                msg[field.name].set(keyval[0], keyval[1]);
              } else {
                msg[field.name] = field.decode(wireType, buffer);
                if (field.oneof) {
                  var currentField = msg[field.oneof.name];
                  null !== currentField && currentField !== field.name && (msg[currentField] = null);
                  msg[field.oneof.name] = field.name;
                }
              }
            }
            for (var i = 0, k = this._fields.length; i < k; ++i) {
              field = this._fields[i];
              if (null === msg[field.name]) if ("proto3" === this.syntax) msg[field.name] = field.defaultValue; else {
                if (field.required) {
                  var err = Error("Missing at least one required field for " + this.toString(true) + ": " + field.name);
                  err["decoded"] = msg;
                  throw err;
                }
                ProtoBuf.populateDefaults && null !== field.defaultValue && (msg[field.name] = field.defaultValue);
              }
            }
            return msg;
          };
          Reflect.Message = Message;
          var Field = function Field(builder, message, rule, keytype, type, name, id, options, oneof, syntax) {
            T.call(this, builder, message, name);
            this.className = "Message.Field";
            this.required = "required" === rule;
            this.repeated = "repeated" === rule;
            this.map = "map" === rule;
            this.keyType = keytype || null;
            this.type = type;
            this.resolvedType = null;
            this.id = id;
            this.options = options || {};
            this.defaultValue = null;
            this.oneof = oneof || null;
            this.syntax = syntax || "proto2";
            this.originalName = this.name;
            this.element = null;
            this.keyElement = null;
            !this.builder.options["convertFieldsToCamelCase"] || this instanceof Message.ExtensionField || (this.name = ProtoBuf.Util.toCamelCase(this.name));
          };
          var FieldPrototype = Field.prototype = Object.create(T.prototype);
          FieldPrototype.build = function() {
            this.element = new Element(this.type, this.resolvedType, false, this.syntax, this.name);
            this.map && (this.keyElement = new Element(this.keyType, void 0, true, this.syntax, this.name));
            "proto3" !== this.syntax || this.repeated || this.map ? "undefined" !== typeof this.options["default"] && (this.defaultValue = this.verifyValue(this.options["default"])) : this.defaultValue = Element.defaultFieldValue(this.type);
          };
          FieldPrototype.verifyValue = function(value, skipRepeated) {
            skipRepeated = skipRepeated || false;
            var self = this;
            function fail(val, msg) {
              throw Error("Illegal value for " + self.toString(true) + " of type " + self.type.name + ": " + val + " (" + msg + ")");
            }
            if (null === value) {
              this.required && fail("undefined" === typeof value ? "undefined" : _typeof(value), "required");
              "proto3" === this.syntax && this.type !== ProtoBuf.TYPES["message"] && fail("undefined" === typeof value ? "undefined" : _typeof(value), "proto3 field without field presence cannot be null");
              return null;
            }
            var i;
            if (this.repeated && !skipRepeated) {
              Array.isArray(value) || (value = [ value ]);
              var res = [];
              for (i = 0; i < value.length; i++) res.push(this.element.verifyValue(value[i]));
              return res;
            }
            if (this.map && !skipRepeated) {
              if (value instanceof ProtoBuf.Map) return value;
              value instanceof Object || fail("undefined" === typeof value ? "undefined" : _typeof(value), "expected ProtoBuf.Map or raw object for map field");
              return new ProtoBuf.Map(this, value);
            }
            !this.repeated && Array.isArray(value) && fail("undefined" === typeof value ? "undefined" : _typeof(value), "no array expected");
            return this.element.verifyValue(value);
          };
          FieldPrototype.hasWirePresence = function(value, message) {
            if ("proto3" !== this.syntax) return null !== value;
            if (this.oneof && message[this.oneof.name] === this.name) return true;
            switch (this.type) {
             case ProtoBuf.TYPES["int32"]:
             case ProtoBuf.TYPES["sint32"]:
             case ProtoBuf.TYPES["sfixed32"]:
             case ProtoBuf.TYPES["uint32"]:
             case ProtoBuf.TYPES["fixed32"]:
              return 0 !== value;

             case ProtoBuf.TYPES["int64"]:
             case ProtoBuf.TYPES["sint64"]:
             case ProtoBuf.TYPES["sfixed64"]:
             case ProtoBuf.TYPES["uint64"]:
             case ProtoBuf.TYPES["fixed64"]:
              return 0 !== value.low || 0 !== value.high;

             case ProtoBuf.TYPES["bool"]:
              return value;

             case ProtoBuf.TYPES["float"]:
             case ProtoBuf.TYPES["double"]:
              return 0 !== value;

             case ProtoBuf.TYPES["string"]:
              return value.length > 0;

             case ProtoBuf.TYPES["bytes"]:
              return value.remaining() > 0;

             case ProtoBuf.TYPES["enum"]:
              return 0 !== value;

             case ProtoBuf.TYPES["message"]:
              return null !== value;

             default:
              return true;
            }
          };
          FieldPrototype.encode = function(value, buffer, message) {
            if (null === this.type || "object" !== _typeof(this.type)) throw Error("[INTERNAL] Unresolved type in " + this.toString(true) + ": " + this.type);
            if (null === value || this.repeated && 0 == value.length) return buffer;
            try {
              if (this.repeated) {
                var i;
                if (this.options["packed"] && ProtoBuf.PACKABLE_WIRE_TYPES.indexOf(this.type.wireType) >= 0) {
                  buffer.writeVarint32(this.id << 3 | ProtoBuf.WIRE_TYPES.LDELIM);
                  buffer.ensureCapacity(buffer.offset += 1);
                  var start = buffer.offset;
                  for (i = 0; i < value.length; i++) this.element.encodeValue(this.id, value[i], buffer);
                  var len = buffer.offset - start, varintLen = ByteBuffer.calculateVarint32(len);
                  if (varintLen > 1) {
                    var contents = buffer.slice(start, buffer.offset);
                    start += varintLen - 1;
                    buffer.offset = start;
                    buffer.append(contents);
                  }
                  buffer.writeVarint32(len, start - varintLen);
                } else for (i = 0; i < value.length; i++) buffer.writeVarint32(this.id << 3 | this.type.wireType), 
                this.element.encodeValue(this.id, value[i], buffer);
              } else if (this.map) value.forEach(function(val, key, m) {
                var length = ByteBuffer.calculateVarint32(8 | this.keyType.wireType) + this.keyElement.calculateLength(1, key) + ByteBuffer.calculateVarint32(16 | this.type.wireType) + this.element.calculateLength(2, val);
                buffer.writeVarint32(this.id << 3 | ProtoBuf.WIRE_TYPES.LDELIM);
                buffer.writeVarint32(length);
                buffer.writeVarint32(8 | this.keyType.wireType);
                this.keyElement.encodeValue(1, key, buffer);
                buffer.writeVarint32(16 | this.type.wireType);
                this.element.encodeValue(2, val, buffer);
              }, this); else if (this.hasWirePresence(value, message)) {
                buffer.writeVarint32(this.id << 3 | this.type.wireType);
                this.element.encodeValue(this.id, value, buffer);
              }
            } catch (e) {
              throw Error("Illegal value for " + this.toString(true) + ": " + value + " (" + e + ")");
            }
            return buffer;
          };
          FieldPrototype.calculate = function(value, message) {
            value = this.verifyValue(value);
            if (null === this.type || "object" !== _typeof(this.type)) throw Error("[INTERNAL] Unresolved type in " + this.toString(true) + ": " + this.type);
            if (null === value || this.repeated && 0 == value.length) return 0;
            var n = 0;
            try {
              if (this.repeated) {
                var i, ni;
                if (this.options["packed"] && ProtoBuf.PACKABLE_WIRE_TYPES.indexOf(this.type.wireType) >= 0) {
                  n += ByteBuffer.calculateVarint32(this.id << 3 | ProtoBuf.WIRE_TYPES.LDELIM);
                  ni = 0;
                  for (i = 0; i < value.length; i++) ni += this.element.calculateLength(this.id, value[i]);
                  n += ByteBuffer.calculateVarint32(ni);
                  n += ni;
                } else for (i = 0; i < value.length; i++) n += ByteBuffer.calculateVarint32(this.id << 3 | this.type.wireType), 
                n += this.element.calculateLength(this.id, value[i]);
              } else if (this.map) value.forEach(function(val, key, m) {
                var length = ByteBuffer.calculateVarint32(8 | this.keyType.wireType) + this.keyElement.calculateLength(1, key) + ByteBuffer.calculateVarint32(16 | this.type.wireType) + this.element.calculateLength(2, val);
                n += ByteBuffer.calculateVarint32(this.id << 3 | ProtoBuf.WIRE_TYPES.LDELIM);
                n += ByteBuffer.calculateVarint32(length);
                n += length;
              }, this); else if (this.hasWirePresence(value, message)) {
                n += ByteBuffer.calculateVarint32(this.id << 3 | this.type.wireType);
                n += this.element.calculateLength(this.id, value);
              }
            } catch (e) {
              throw Error("Illegal value for " + this.toString(true) + ": " + value + " (" + e + ")");
            }
            return n;
          };
          FieldPrototype.decode = function(wireType, buffer, skipRepeated) {
            var value, nBytes;
            var wireTypeOK = !this.map && wireType == this.type.wireType || !skipRepeated && this.repeated && this.options["packed"] && wireType == ProtoBuf.WIRE_TYPES.LDELIM || this.map && wireType == ProtoBuf.WIRE_TYPES.LDELIM;
            if (!wireTypeOK) throw Error("Illegal wire type for field " + this.toString(true) + ": " + wireType + " (" + this.type.wireType + " expected)");
            if (wireType == ProtoBuf.WIRE_TYPES.LDELIM && this.repeated && this.options["packed"] && ProtoBuf.PACKABLE_WIRE_TYPES.indexOf(this.type.wireType) >= 0 && !skipRepeated) {
              nBytes = buffer.readVarint32();
              nBytes = buffer.offset + nBytes;
              var values = [];
              while (buffer.offset < nBytes) values.push(this.decode(this.type.wireType, buffer, true));
              return values;
            }
            if (this.map) {
              var key = Element.defaultFieldValue(this.keyType);
              value = Element.defaultFieldValue(this.type);
              nBytes = buffer.readVarint32();
              if (buffer.remaining() < nBytes) throw Error("Illegal number of bytes for " + this.toString(true) + ": " + nBytes + " required but got only " + buffer.remaining());
              var msgbuf = buffer.clone();
              msgbuf.limit = msgbuf.offset + nBytes;
              buffer.offset += nBytes;
              while (msgbuf.remaining() > 0) {
                var tag = msgbuf.readVarint32();
                wireType = 7 & tag;
                var id = tag >>> 3;
                if (1 === id) key = this.keyElement.decode(msgbuf, wireType, id); else {
                  if (2 !== id) throw Error("Unexpected tag in map field key/value submessage");
                  value = this.element.decode(msgbuf, wireType, id);
                }
              }
              return [ key, value ];
            }
            return this.element.decode(buffer, wireType, this.id);
          };
          Reflect.Message.Field = Field;
          var ExtensionField = function ExtensionField(builder, message, rule, type, name, id, options) {
            Field.call(this, builder, message, rule, null, type, name, id, options);
            this.extension;
          };
          ExtensionField.prototype = Object.create(Field.prototype);
          Reflect.Message.ExtensionField = ExtensionField;
          var OneOf = function OneOf(builder, message, name) {
            T.call(this, builder, message, name);
            this.fields = [];
          };
          Reflect.Message.OneOf = OneOf;
          var Enum = function Enum(builder, parent, name, options, syntax) {
            Namespace.call(this, builder, parent, name, options, syntax);
            this.className = "Enum";
            this.object = null;
          };
          Enum.getName = function(enm, value) {
            var keys = Object.keys(enm);
            for (var i = 0, key; i < keys.length; ++i) if (enm[key = keys[i]] === value) return key;
            return null;
          };
          var EnumPrototype = Enum.prototype = Object.create(Namespace.prototype);
          EnumPrototype.build = function(rebuild) {
            if (this.object && !rebuild) return this.object;
            var enm = new ProtoBuf.Builder.Enum(), values = this.getChildren(Enum.Value);
            for (var i = 0, k = values.length; i < k; ++i) enm[values[i]["name"]] = values[i]["id"];
            Object.defineProperty && Object.defineProperty(enm, "$options", {
              value: this.buildOpt(),
              enumerable: false
            });
            return this.object = enm;
          };
          Reflect.Enum = Enum;
          var Value = function Value(builder, enm, name, id) {
            T.call(this, builder, enm, name);
            this.className = "Enum.Value";
            this.id = id;
          };
          Value.prototype = Object.create(T.prototype);
          Reflect.Enum.Value = Value;
          var Extension = function Extension(builder, parent, name, field) {
            T.call(this, builder, parent, name);
            this.field = field;
          };
          Extension.prototype = Object.create(T.prototype);
          Reflect.Extension = Extension;
          var Service = function Service(builder, root, name, options) {
            Namespace.call(this, builder, root, name, options);
            this.className = "Service";
            this.clazz = null;
          };
          var ServicePrototype = Service.prototype = Object.create(Namespace.prototype);
          ServicePrototype.build = function(rebuild) {
            if (this.clazz && !rebuild) return this.clazz;
            return this.clazz = function(ProtoBuf, T) {
              var Service = function Service(rpcImpl) {
                ProtoBuf.Builder.Service.call(this);
                this.rpcImpl = rpcImpl || function(name, msg, callback) {
                  setTimeout(callback.bind(this, Error("Not implemented, see: https://github.com/dcodeIO/ProtoBuf.js/wiki/Services")), 0);
                };
              };
              var ServicePrototype = Service.prototype = Object.create(ProtoBuf.Builder.Service.prototype);
              var rpc = T.getChildren(ProtoBuf.Reflect.Service.RPCMethod);
              for (var i = 0; i < rpc.length; i++) (function(method) {
                ServicePrototype[method.name] = function(req, callback) {
                  try {
                    try {
                      req = method.resolvedRequestType.clazz.decode(ByteBuffer.wrap(req));
                    } catch (err) {
                      if (!(err instanceof TypeError)) throw err;
                    }
                    if (null === req || "object" !== ("undefined" === typeof req ? "undefined" : _typeof(req))) throw Error("Illegal arguments");
                    req instanceof method.resolvedRequestType.clazz || (req = new method.resolvedRequestType.clazz(req));
                    this.rpcImpl(method.fqn(), req, function(err, res) {
                      if (err) {
                        callback(err);
                        return;
                      }
                      null === res && (res = "");
                      try {
                        res = method.resolvedResponseType.clazz.decode(res);
                      } catch (notABuffer) {}
                      if (!res || !(res instanceof method.resolvedResponseType.clazz)) {
                        callback(Error("Illegal response type received in service method " + T.name + "#" + method.name));
                        return;
                      }
                      callback(null, res);
                    });
                  } catch (err) {
                    setTimeout(callback.bind(this, err), 0);
                  }
                };
                Service[method.name] = function(rpcImpl, req, callback) {
                  new Service(rpcImpl)[method.name](req, callback);
                };
                Object.defineProperty && (Object.defineProperty(Service[method.name], "$options", {
                  value: method.buildOpt()
                }), Object.defineProperty(ServicePrototype[method.name], "$options", {
                  value: Service[method.name]["$options"]
                }));
              })(rpc[i]);
              var $optionsS;
              var $options;
              var $typeS;
              var $type;
              Object.defineProperty && (Object.defineProperty(Service, "$options", {
                value: T.buildOpt()
              }), Object.defineProperty(ServicePrototype, "$options", {
                value: Service["$options"]
              }), Object.defineProperty(Service, "$type", {
                value: T
              }), Object.defineProperty(ServicePrototype, "$type", {
                value: T
              }));
              return Service;
            }(ProtoBuf, this);
          };
          Reflect.Service = Service;
          var Method = function Method(builder, svc, name, options) {
            T.call(this, builder, svc, name);
            this.className = "Service.Method";
            this.options = options || {};
          };
          var MethodPrototype = Method.prototype = Object.create(T.prototype);
          MethodPrototype.buildOpt = NamespacePrototype.buildOpt;
          Reflect.Service.Method = Method;
          var RPCMethod = function RPCMethod(builder, svc, name, request, response, request_stream, response_stream, options) {
            Method.call(this, builder, svc, name, options);
            this.className = "Service.RPCMethod";
            this.requestName = request;
            this.responseName = response;
            this.requestStream = request_stream;
            this.responseStream = response_stream;
            this.resolvedRequestType = null;
            this.resolvedResponseType = null;
          };
          RPCMethod.prototype = Object.create(Method.prototype);
          Reflect.Service.RPCMethod = RPCMethod;
          return Reflect;
        }(ProtoBuf);
        ProtoBuf.Builder = function(ProtoBuf, Lang, Reflect) {
          var Builder = function Builder(options) {
            this.ns = new Reflect.Namespace(this, null, "");
            this.ptr = this.ns;
            this.resolved = false;
            this.result = null;
            this.files = {};
            this.importRoot = null;
            this.options = options || {};
          };
          var BuilderPrototype = Builder.prototype;
          Builder.isMessage = function(def) {
            if ("string" !== typeof def["name"]) return false;
            if ("undefined" !== typeof def["values"] || "undefined" !== typeof def["rpc"]) return false;
            return true;
          };
          Builder.isMessageField = function(def) {
            if ("string" !== typeof def["rule"] || "string" !== typeof def["name"] || "string" !== typeof def["type"] || "undefined" === typeof def["id"]) return false;
            return true;
          };
          Builder.isEnum = function(def) {
            if ("string" !== typeof def["name"]) return false;
            if ("undefined" === typeof def["values"] || !Array.isArray(def["values"]) || 0 === def["values"].length) return false;
            return true;
          };
          Builder.isService = function(def) {
            if ("string" !== typeof def["name"] || "object" !== _typeof(def["rpc"]) || !def["rpc"]) return false;
            return true;
          };
          Builder.isExtend = function(def) {
            if ("string" !== typeof def["ref"]) return false;
            return true;
          };
          BuilderPrototype.reset = function() {
            this.ptr = this.ns;
            return this;
          };
          BuilderPrototype.define = function(namespace) {
            if ("string" !== typeof namespace || !Lang.TYPEREF.test(namespace)) throw Error("illegal namespace: " + namespace);
            namespace.split(".").forEach(function(part) {
              var ns = this.ptr.getChild(part);
              null === ns && this.ptr.addChild(ns = new Reflect.Namespace(this, this.ptr, part));
              this.ptr = ns;
            }, this);
            return this;
          };
          BuilderPrototype.create = function(defs) {
            if (!defs) return this;
            if (Array.isArray(defs)) {
              if (0 === defs.length) return this;
              defs = defs.slice();
            } else defs = [ defs ];
            var stack = [ defs ];
            while (stack.length > 0) {
              defs = stack.pop();
              if (!Array.isArray(defs)) throw Error("not a valid namespace: " + JSON.stringify(defs));
              while (defs.length > 0) {
                var def = defs.shift();
                if (Builder.isMessage(def)) {
                  var obj = new Reflect.Message(this, this.ptr, def["name"], def["options"], def["isGroup"], def["syntax"]);
                  var oneofs = {};
                  def["oneofs"] && Object.keys(def["oneofs"]).forEach(function(name) {
                    obj.addChild(oneofs[name] = new Reflect.Message.OneOf(this, obj, name));
                  }, this);
                  def["fields"] && def["fields"].forEach(function(fld) {
                    if (null !== obj.getChild(0 | fld["id"])) throw Error("duplicate or invalid field id in " + obj.name + ": " + fld["id"]);
                    if (fld["options"] && "object" !== _typeof(fld["options"])) throw Error("illegal field options in " + obj.name + "#" + fld["name"]);
                    var oneof = null;
                    if ("string" === typeof fld["oneof"] && !(oneof = oneofs[fld["oneof"]])) throw Error("illegal oneof in " + obj.name + "#" + fld["name"] + ": " + fld["oneof"]);
                    fld = new Reflect.Message.Field(this, obj, fld["rule"], fld["keytype"], fld["type"], fld["name"], fld["id"], fld["options"], oneof, def["syntax"]);
                    oneof && oneof.fields.push(fld);
                    obj.addChild(fld);
                  }, this);
                  var subObj = [];
                  def["enums"] && def["enums"].forEach(function(enm) {
                    subObj.push(enm);
                  });
                  def["messages"] && def["messages"].forEach(function(msg) {
                    subObj.push(msg);
                  });
                  def["services"] && def["services"].forEach(function(svc) {
                    subObj.push(svc);
                  });
                  def["extensions"] && ("number" === typeof def["extensions"][0] ? obj.extensions = [ def["extensions"] ] : obj.extensions = def["extensions"]);
                  this.ptr.addChild(obj);
                  if (subObj.length > 0) {
                    stack.push(defs);
                    defs = subObj;
                    subObj = null;
                    this.ptr = obj;
                    obj = null;
                    continue;
                  }
                  subObj = null;
                } else if (Builder.isEnum(def)) {
                  obj = new Reflect.Enum(this, this.ptr, def["name"], def["options"], def["syntax"]);
                  def["values"].forEach(function(val) {
                    obj.addChild(new Reflect.Enum.Value(this, obj, val["name"], val["id"]));
                  }, this);
                  this.ptr.addChild(obj);
                } else if (Builder.isService(def)) {
                  obj = new Reflect.Service(this, this.ptr, def["name"], def["options"]);
                  Object.keys(def["rpc"]).forEach(function(name) {
                    var mtd = def["rpc"][name];
                    obj.addChild(new Reflect.Service.RPCMethod(this, obj, name, mtd["request"], mtd["response"], !!mtd["request_stream"], !!mtd["response_stream"], mtd["options"]));
                  }, this);
                  this.ptr.addChild(obj);
                } else {
                  if (!Builder.isExtend(def)) throw Error("not a valid definition: " + JSON.stringify(def));
                  obj = this.ptr.resolve(def["ref"], true);
                  if (obj) def["fields"].forEach(function(fld) {
                    if (null !== obj.getChild(0 | fld["id"])) throw Error("duplicate extended field id in " + obj.name + ": " + fld["id"]);
                    if (obj.extensions) {
                      var valid = false;
                      obj.extensions.forEach(function(range) {
                        fld["id"] >= range[0] && fld["id"] <= range[1] && (valid = true);
                      });
                      if (!valid) throw Error("illegal extended field id in " + obj.name + ": " + fld["id"] + " (not within valid ranges)");
                    }
                    var name = fld["name"];
                    this.options["convertFieldsToCamelCase"] && (name = ProtoBuf.Util.toCamelCase(name));
                    var field = new Reflect.Message.ExtensionField(this, obj, fld["rule"], fld["type"], this.ptr.fqn() + "." + name, fld["id"], fld["options"]);
                    var ext = new Reflect.Extension(this, this.ptr, fld["name"], field);
                    field.extension = ext;
                    this.ptr.addChild(ext);
                    obj.addChild(field);
                  }, this); else if (!/\.?google\.protobuf\./.test(def["ref"])) throw Error("extended message " + def["ref"] + " is not defined");
                }
                def = null;
                obj = null;
              }
              defs = null;
              this.ptr = this.ptr.parent;
            }
            this.resolved = false;
            this.result = null;
            return this;
          };
          function propagateSyntax(parent) {
            parent["messages"] && parent["messages"].forEach(function(child) {
              child["syntax"] = parent["syntax"];
              propagateSyntax(child);
            });
            parent["enums"] && parent["enums"].forEach(function(child) {
              child["syntax"] = parent["syntax"];
            });
          }
          BuilderPrototype["import"] = function(json, filename) {
            var delim = "/";
            if ("string" === typeof filename) {
              ProtoBuf.Util.IS_NODE && (filename = require("path")["resolve"](filename));
              if (true === this.files[filename]) return this.reset();
              this.files[filename] = true;
            } else if ("object" === ("undefined" === typeof filename ? "undefined" : _typeof(filename))) {
              var root = filename.root;
              ProtoBuf.Util.IS_NODE && (root = require("path")["resolve"](root));
              (root.indexOf("\\") >= 0 || filename.file.indexOf("\\") >= 0) && (delim = "\\");
              var fname;
              fname = ProtoBuf.Util.IS_NODE ? require("path")["join"](root, filename.file) : root + delim + filename.file;
              if (true === this.files[fname]) return this.reset();
              this.files[fname] = true;
            }
            if (json["imports"] && json["imports"].length > 0) {
              var importRoot, resetRoot = false;
              if ("object" === ("undefined" === typeof filename ? "undefined" : _typeof(filename))) {
                this.importRoot = filename["root"];
                resetRoot = true;
                importRoot = this.importRoot;
                filename = filename["file"];
                (importRoot.indexOf("\\") >= 0 || filename.indexOf("\\") >= 0) && (delim = "\\");
              } else if ("string" === typeof filename) if (this.importRoot) importRoot = this.importRoot; else if (filename.indexOf("/") >= 0) {
                importRoot = filename.replace(/\/[^\/]*$/, "");
                "" === importRoot && (importRoot = "/");
              } else if (filename.indexOf("\\") >= 0) {
                importRoot = filename.replace(/\\[^\\]*$/, "");
                delim = "\\";
              } else importRoot = "."; else importRoot = null;
              for (var i = 0; i < json["imports"].length; i++) if ("string" === typeof json["imports"][i]) {
                if (!importRoot) throw Error("cannot determine import root");
                var importFilename = json["imports"][i];
                if ("google/protobuf/descriptor.proto" === importFilename) continue;
                importFilename = ProtoBuf.Util.IS_NODE ? require("path")["join"](importRoot, importFilename) : importRoot + delim + importFilename;
                if (true === this.files[importFilename]) continue;
                /\.proto$/i.test(importFilename) && !ProtoBuf.DotProto && (importFilename = importFilename.replace(/\.proto$/, ".json"));
                var contents = ProtoBuf.Util.fetch(importFilename);
                if (null === contents) throw Error("failed to import '" + importFilename + "' in '" + filename + "': file not found");
                /\.json$/i.test(importFilename) ? this["import"](JSON.parse(contents + ""), importFilename) : this["import"](ProtoBuf.DotProto.Parser.parse(contents), importFilename);
              } else filename ? /\.(\w+)$/.test(filename) ? this["import"](json["imports"][i], filename.replace(/^(.+)\.(\w+)$/, function($0, $1, $2) {
                return $1 + "_import" + i + "." + $2;
              })) : this["import"](json["imports"][i], filename + "_import" + i) : this["import"](json["imports"][i]);
              resetRoot && (this.importRoot = null);
            }
            json["package"] && this.define(json["package"]);
            json["syntax"] && propagateSyntax(json);
            var base = this.ptr;
            json["options"] && Object.keys(json["options"]).forEach(function(key) {
              base.options[key] = json["options"][key];
            });
            json["messages"] && (this.create(json["messages"]), this.ptr = base);
            json["enums"] && (this.create(json["enums"]), this.ptr = base);
            json["services"] && (this.create(json["services"]), this.ptr = base);
            json["extends"] && this.create(json["extends"]);
            return this.reset();
          };
          BuilderPrototype.resolveAll = function() {
            var res;
            if (null == this.ptr || "object" === _typeof(this.ptr.type)) return this;
            if (this.ptr instanceof Reflect.Namespace) this.ptr.children.forEach(function(child) {
              this.ptr = child;
              this.resolveAll();
            }, this); else if (this.ptr instanceof Reflect.Message.Field) {
              if (Lang.TYPE.test(this.ptr.type)) this.ptr.type = ProtoBuf.TYPES[this.ptr.type]; else {
                if (!Lang.TYPEREF.test(this.ptr.type)) throw Error("illegal type reference in " + this.ptr.toString(true) + ": " + this.ptr.type);
                res = (this.ptr instanceof Reflect.Message.ExtensionField ? this.ptr.extension.parent : this.ptr.parent).resolve(this.ptr.type, true);
                if (!res) throw Error("unresolvable type reference in " + this.ptr.toString(true) + ": " + this.ptr.type);
                this.ptr.resolvedType = res;
                if (res instanceof Reflect.Enum) {
                  this.ptr.type = ProtoBuf.TYPES["enum"];
                  if ("proto3" === this.ptr.syntax && "proto3" !== res.syntax) throw Error("proto3 message cannot reference proto2 enum");
                } else {
                  if (!(res instanceof Reflect.Message)) throw Error("illegal type reference in " + this.ptr.toString(true) + ": " + this.ptr.type);
                  this.ptr.type = res.isGroup ? ProtoBuf.TYPES["group"] : ProtoBuf.TYPES["message"];
                }
              }
              if (this.ptr.map) {
                if (!Lang.TYPE.test(this.ptr.keyType)) throw Error("illegal key type for map field in " + this.ptr.toString(true) + ": " + this.ptr.keyType);
                this.ptr.keyType = ProtoBuf.TYPES[this.ptr.keyType];
              }
              "proto3" === this.ptr.syntax && this.ptr.repeated && void 0 === this.ptr.options.packed && -1 !== ProtoBuf.PACKABLE_WIRE_TYPES.indexOf(this.ptr.type.wireType) && (this.ptr.options.packed = true);
            } else if (this.ptr instanceof ProtoBuf.Reflect.Service.Method) {
              if (!(this.ptr instanceof ProtoBuf.Reflect.Service.RPCMethod)) throw Error("illegal service type in " + this.ptr.toString(true));
              res = this.ptr.parent.resolve(this.ptr.requestName, true);
              if (!res || !(res instanceof ProtoBuf.Reflect.Message)) throw Error("Illegal type reference in " + this.ptr.toString(true) + ": " + this.ptr.requestName);
              this.ptr.resolvedRequestType = res;
              res = this.ptr.parent.resolve(this.ptr.responseName, true);
              if (!res || !(res instanceof ProtoBuf.Reflect.Message)) throw Error("Illegal type reference in " + this.ptr.toString(true) + ": " + this.ptr.responseName);
              this.ptr.resolvedResponseType = res;
            } else if (!(this.ptr instanceof ProtoBuf.Reflect.Message.OneOf) && !(this.ptr instanceof ProtoBuf.Reflect.Extension) && !(this.ptr instanceof ProtoBuf.Reflect.Enum.Value)) throw Error("illegal object in namespace: " + _typeof(this.ptr) + ": " + this.ptr);
            return this.reset();
          };
          BuilderPrototype.build = function(path) {
            this.reset();
            this.resolved || (this.resolveAll(), this.resolved = true, this.result = null);
            null === this.result && (this.result = this.ns.build());
            if (!path) return this.result;
            var part = "string" === typeof path ? path.split(".") : path, ptr = this.result;
            for (var i = 0; i < part.length; i++) {
              if (!ptr[part[i]]) {
                ptr = null;
                break;
              }
              ptr = ptr[part[i]];
            }
            return ptr;
          };
          BuilderPrototype.lookup = function(path, excludeNonNamespace) {
            return path ? this.ns.resolve(path, excludeNonNamespace) : this.ns;
          };
          BuilderPrototype.toString = function() {
            return "Builder";
          };
          Builder.Message = function() {};
          Builder.Enum = function() {};
          Builder.Service = function() {};
          return Builder;
        }(ProtoBuf, ProtoBuf.Lang, ProtoBuf.Reflect);
        ProtoBuf.Map = function(ProtoBuf, Reflect) {
          var Map = function Map(field, contents) {
            if (!field.map) throw Error("field is not a map");
            this.field = field;
            this.keyElem = new Reflect.Element(field.keyType, null, true, field.syntax);
            this.valueElem = new Reflect.Element(field.type, field.resolvedType, false, field.syntax);
            this.map = {};
            Object.defineProperty(this, "size", {
              get: function get() {
                return Object.keys(this.map).length;
              }
            });
            if (contents) {
              var keys = Object.keys(contents);
              for (var i = 0; i < keys.length; i++) {
                var key = this.keyElem.valueFromString(keys[i]);
                var val = this.valueElem.verifyValue(contents[keys[i]]);
                this.map[this.keyElem.valueToString(key)] = {
                  key: key,
                  value: val
                };
              }
            }
          };
          var MapPrototype = Map.prototype;
          function arrayIterator(arr) {
            var idx = 0;
            return {
              next: function next() {
                if (idx < arr.length) return {
                  done: false,
                  value: arr[idx++]
                };
                return {
                  done: true
                };
              }
            };
          }
          MapPrototype.clear = function() {
            this.map = {};
          };
          MapPrototype["delete"] = function(key) {
            var keyValue = this.keyElem.valueToString(this.keyElem.verifyValue(key));
            var hadKey = keyValue in this.map;
            delete this.map[keyValue];
            return hadKey;
          };
          MapPrototype.entries = function() {
            var entries = [];
            var strKeys = Object.keys(this.map);
            for (var i = 0, entry; i < strKeys.length; i++) entries.push([ (entry = this.map[strKeys[i]]).key, entry.value ]);
            return arrayIterator(entries);
          };
          MapPrototype.keys = function() {
            var keys = [];
            var strKeys = Object.keys(this.map);
            for (var i = 0; i < strKeys.length; i++) keys.push(this.map[strKeys[i]].key);
            return arrayIterator(keys);
          };
          MapPrototype.values = function() {
            var values = [];
            var strKeys = Object.keys(this.map);
            for (var i = 0; i < strKeys.length; i++) values.push(this.map[strKeys[i]].value);
            return arrayIterator(values);
          };
          MapPrototype.forEach = function(cb, thisArg) {
            var strKeys = Object.keys(this.map);
            for (var i = 0, entry; i < strKeys.length; i++) cb.call(thisArg, (entry = this.map[strKeys[i]]).value, entry.key, this);
          };
          MapPrototype.set = function(key, value) {
            var keyValue = this.keyElem.verifyValue(key);
            var valValue = this.valueElem.verifyValue(value);
            this.map[this.keyElem.valueToString(keyValue)] = {
              key: keyValue,
              value: valValue
            };
            return this;
          };
          MapPrototype.get = function(key) {
            var keyValue = this.keyElem.valueToString(this.keyElem.verifyValue(key));
            if (!(keyValue in this.map)) return;
            return this.map[keyValue].value;
          };
          MapPrototype.has = function(key) {
            var keyValue = this.keyElem.valueToString(this.keyElem.verifyValue(key));
            return keyValue in this.map;
          };
          return Map;
        }(ProtoBuf, ProtoBuf.Reflect);
        ProtoBuf.loadProto = function(proto, builder, filename) {
          ("string" === typeof builder || builder && "string" === typeof builder["file"] && "string" === typeof builder["root"]) && (filename = builder, 
          builder = void 0);
          return ProtoBuf.loadJson(ProtoBuf.DotProto.Parser.parse(proto), builder, filename);
        };
        ProtoBuf.protoFromString = ProtoBuf.loadProto;
        ProtoBuf.loadProtoFile = function(filename, callback, builder) {
          callback && "object" === ("undefined" === typeof callback ? "undefined" : _typeof(callback)) ? (builder = callback, 
          callback = null) : callback && "function" === typeof callback || (callback = null);
          if (callback) return ProtoBuf.Util.fetch("string" === typeof filename ? filename : filename["root"] + "/" + filename["file"], function(contents) {
            if (null === contents) {
              callback(Error("Failed to fetch file"));
              return;
            }
            try {
              callback(null, ProtoBuf.loadProto(contents, builder, filename));
            } catch (e) {
              callback(e);
            }
          });
          var contents = ProtoBuf.Util.fetch("object" === ("undefined" === typeof filename ? "undefined" : _typeof(filename)) ? filename["root"] + "/" + filename["file"] : filename);
          return null === contents ? null : ProtoBuf.loadProto(contents, builder, filename);
        };
        ProtoBuf.protoFromFile = ProtoBuf.loadProtoFile;
        ProtoBuf.newBuilder = function(options) {
          options = options || {};
          "undefined" === typeof options["convertFieldsToCamelCase"] && (options["convertFieldsToCamelCase"] = ProtoBuf.convertFieldsToCamelCase);
          "undefined" === typeof options["populateAccessors"] && (options["populateAccessors"] = ProtoBuf.populateAccessors);
          return new ProtoBuf.Builder(options);
        };
        ProtoBuf.loadJson = function(json, builder, filename) {
          ("string" === typeof builder || builder && "string" === typeof builder["file"] && "string" === typeof builder["root"]) && (filename = builder, 
          builder = null);
          builder && "object" === ("undefined" === typeof builder ? "undefined" : _typeof(builder)) || (builder = ProtoBuf.newBuilder());
          "string" === typeof json && (json = JSON.parse(json));
          builder["import"](json, filename);
          builder.resolveAll();
          return builder;
        };
        ProtoBuf.loadJsonFile = function(filename, callback, builder) {
          callback && "object" === ("undefined" === typeof callback ? "undefined" : _typeof(callback)) ? (builder = callback, 
          callback = null) : callback && "function" === typeof callback || (callback = null);
          if (callback) return ProtoBuf.Util.fetch("string" === typeof filename ? filename : filename["root"] + "/" + filename["file"], function(contents) {
            if (null === contents) {
              callback(Error("Failed to fetch file"));
              return;
            }
            try {
              callback(null, ProtoBuf.loadJson(JSON.parse(contents), builder, filename));
            } catch (e) {
              callback(e);
            }
          });
          var contents = ProtoBuf.Util.fetch("object" === ("undefined" === typeof filename ? "undefined" : _typeof(filename)) ? filename["root"] + "/" + filename["file"] : filename);
          return null === contents ? null : ProtoBuf.loadJson(JSON.parse(contents), builder, filename);
        };
        return ProtoBuf;
      });
      cc._RF.pop();
    }).call(this, require("_process"));
  }, {
    _process: 1,
    bytebuffer: "bytebuffer",
    fs: "fs",
    path: "path"
  } ],
  protocol: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "54a30xRSopJ8p/SSg99rup2", "protocol");
    "use strict";
    window.wsft = window.wsft || {};
    var protocol = {
      MSG_HEART_BEAT: "MSG_HEART_BEAT",
      adaptiveView: "PORTRAIT_LANDSCAPE",
      TCP_ONOPEN: "tcp_onopen",
      HEART_BEAT: -1,
      SEND_LOGIN: 1,
      RECEIVE_LOGIN: 2,
      PLAYER_CAST: 6,
      PUSH_PLAYER_RECORD_CAST: 7,
      SEND_PLAYER_RECORD_CAST: 9,
      RECEIVE_PLAYER_RECORD_CAST: 10,
      SEND_CREATE_ROOM: 200,
      RECEIVE_CREATE_ROOM: 201,
      SEND_JOIN_ROOM: 204,
      RECEIVE_JOIN_ROOM: 205,
      PUSH_JOIN_ROOM: 206,
      SEND_LEAVE_ROOM: 207,
      RECEIVE_LEAVE_ROOM: 208,
      SEND_DISSOLVE_ROOM: 209,
      RECEIVE_DISSOLVE_ROOM: 210,
      SEND_PREPARE_ROOM: 211,
      RECEIVE_PREPARE_ROOM: 212,
      PUSH_PREPARE_ROOM: 213,
      PUSH_OFFLINE: 214,
      PUSH_DISSOLVE_ROOM: 218,
      SEND_CHAT_ROOM: 219,
      RECEIVE_CHAT_ROOM: 220,
      PUSH_CHAT_ROOM: 221,
      SEND_APPLAY_DISSOLVE_ROOM: 500,
      RECEIVE_APPLAY_DISSOLVE_ROOM: 501,
      PUSH_APPLAY_DISSOLVE_ROOM: 502,
      PUSH_SEND_CARD: 800,
      CATCH_CARD: 804,
      SEAT_CATCH_CARD: 805,
      SEND_OUT_CARD: 814,
      RECEIVE_OUT_CARD: 815,
      PUSH_OUT_CARD: 816,
      SEND_PENG_CARD: 822,
      RECEIVE_PENG_CARD: 823,
      PUSH_PENG_CARD: 824,
      SEND_PASS: 831,
      RECEIVE_PASS: 832,
      SEND_ANGANG: 808,
      RECEIVE_ANGANG: 809,
      PUSH_ANGANG: 810,
      SEND_MINGGANG: 811,
      RECEIVE_MINGGANG: 812,
      PUSH_MINGGANG: 813,
      SEND_JIEGANG: 819,
      RECEIVE_JIEGANG: 820,
      PUSH_JIEGANG: 821,
      SEND_ZI_MO: 806,
      RECEIVE_ZI_MO: 807,
      SEND_JIE_PAO: 817,
      RECEIVE_JIE_PAO: 818,
      SEND_OFFLINE_RECONNECTION: 827,
      RECEIVE_OFFLINE_RECONNECTION: 828,
      PUSH_ROUND_RESULT: 825,
      PUSH_GAME_OVER: 826,
      GAMEINBG: "gameSetInBg",
      GAMEINMUSIC: "gameSetInMusic",
      PUSHJOINROOM: "pushJoinRoom",
      PUSHSENDCARD: "pushSendCard",
      RECEIVEAPPLAYDISSOLVEROOM: "receiveApplayDissolveRoom",
      PUSHAPPLAYDISSOLVEROOM: "pushApplayDissolveRoom",
      CATCHCARD: "catchCard",
      SEATCATCHCARD: "seatCatchCard",
      RECEIVEOUTCARD: "receiveOutCard",
      PUSHOUTCARD: "pushOutCard",
      RECEIVEPENGCARD: "receivePengCard",
      PUSHPENGCARD: "pushPengCard",
      RECEIVEPASS: "receivePass",
      RECEIVEANGANG: "receiveAnGang",
      PUSHANGANG: "pushAnGang",
      RECEIVEMINGGANG: "receiveMingGang",
      PUSHMINGGANG: "pushMingGang",
      RECEIVEJIEGANG: "receiveJieGang",
      PUSHJIEGANG: "pushJieGang",
      PUSHOFFLINE: "pushOffline",
      RECEIVEOFFLINERECONNECTION: "receiveOfflineConnection",
      RECEIVEJIEPAO: "receiveJiePao",
      RECEIVEZIMO: "receiveZiMo",
      RECEIVEPREPAREROOM: "receivePrepare",
      PUSHPREPAREROOM: "pushPrepare",
      RECEIVECHATROOM: "ReceiveChatRoom",
      PUSHCHATROOM: "PushChatRoom",
      PUSHROUNDRESULT: "pushRoundResult",
      PUSHGAMEOVER: "pushGameOver",
      RECEIVEPLAYERRECORDCAST: "receiveRecord"
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
        wsft.message.addMessage(wsft.protocol.RECEIVEPLAYERRECORDCAST, this.receiveRecordr.bind(this));
      },
      start: function start() {},
      receiveRecordr: function receiveRecordr(data) {
        this.updateTwoInfoData(data);
      },
      onEnable: function onEnable() {
        wsft.loading.hide();
        this.recordOneInfo = this.oneInfoContent.getChildByName("record_one_info");
        this.recordOneInfo.active = false;
        this.record_scroll_view_1.active = true;
        this.record_scroll_view_2.active = false;
        this.showType = 1;
        this.updateOneData();
      },
      updateOneData: function updateOneData() {
        if (!wsft.gameData.recordDate) {
          wsft.uiFuncs.showTip("\u6ca1\u6709\u6218\u7ee9\uff01", 30);
          return;
        }
        var recordDate = wsft.gameData.recordDate;
        var children = this.oneInfoContent._children;
        for (var i = 0; i < children.length; ++i) "one_info" == children[i].name && children[i].destroy();
        this.oneInfoContent.height = 130 * recordDate.length;
        for (var index = 0; index < recordDate.length; index++) {
          var _index = recordDate.length - 1 - index;
          var data = recordDate[_index];
          var oneInfoNode = this.getOneInfoNode(index);
          if (oneInfoNode) {
            oneInfoNode.active = true;
            var _sendindex = data.index;
            this.updateOneInfoNode(_sendindex, oneInfoNode, data);
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
        oneInfoNode.getChildByName("room_num_label").getComponent(cc.Label).string = data.roomId + "\u53f7\u623f\u95f4";
        var time = wsft.funcs.formatTime("YYYY-MM-DD hh:mm", data.time);
        oneInfoNode.getChildByName("time_label").getComponent(cc.Label).string = "\u5bf9\u6218\u65f6\u95f4\uff1a" + time;
        for (var i = 0; i < data.coin.length; ++i) {
          var num = i + 1;
          var _coin = data.coin[i];
          oneInfoNode.getChildByName("scores_label_" + num).getComponent(cc.Label).string = _coin;
          oneInfoNode.getChildByName("scores_label_" + num).active = true;
        }
        for (var i = 0; i < data.nickname.length; i++) {
          var num = i + 1;
          var nickname = data.nickname[i];
          var _name = wsft.uiFuncs.trimName(nickname, 8, "...");
          oneInfoNode.getChildByName("name_label_" + num).getComponent(cc.Label).string = _name;
          oneInfoNode.getChildByName("name_label_" + num).active = true;
        }
        for (var i = data.nickname.length + 1; i < 5; i++) {
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
        var index = parseInt(event.dataName);
        wsft.sendDataSocket.SendPlayerRecord(index);
        console.log("event.dataName===" + event.dataName);
      },
      updateTwoInfoData: function updateTwoInfoData(_info) {
        this.record_scroll_view_1.active = false;
        this.record_scroll_view_2.active = true;
        this.recordTwoneInfo = this.twoInfoContent.getChildByName("record_two_info");
        this.recordTwoneInfo.active = false;
        this.showType = 2;
        var children = this.twoInfoContent._children;
        for (var i = 0; i < children.length; ++i) "two_info" == children[i].name && children[i].destroy();
        this.twoInfoContent.height = 102 * _info.round.length;
        var recordDate = wsft.gameData.recordDate;
        var _index = 0;
        for (var index = 0; index < recordDate.length; index++) recordDate[index].index == _info.index && (_index = index);
        for (var i = 0; i < recordDate[_index].nickname.length; i++) {
          var num = i + 1;
          var nickname = recordDate[_index].nickname[i];
          var _name = wsft.uiFuncs.trimName(nickname, 4, "...");
          this.record_scroll_view_2.getChildByName("name_label_" + num).getComponent(cc.Label).string = _name;
          this.record_scroll_view_2.getChildByName("name_label_" + num).active = true;
        }
        for (var index = 0; index < _info.round.length; index++) {
          var data = _info.round[index];
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
        console.log("datadatadata==", data);
        twoInfoNode.getChildByName("order_num_label").getComponent(cc.Label).string = index + 1;
        var time = wsft.funcs.formatTime("MM-DD hh:mm", data.time);
        twoInfoNode.getChildByName("time_label").getComponent(cc.Label).string = time;
        for (var i = 0; i < data.coin.length; i++) {
          var num = i + 1;
          var coin = data.coin[i];
          twoInfoNode.getChildByName("score_label_" + num).getComponent(cc.Label).string = coin;
          twoInfoNode.getChildByName("score_label_" + num).active = true;
        }
        for (var i = data.coin.length + 1; i < 5; i++) {
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
        var btnHader = function btnHader(btn, name) {
          wsft.event.addBtnEvent(btn, self.node, "recordLayer", "allBtnCallback", name);
        };
        btnHader(this.node.getChildByName("close_btn"), "close");
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
        spriteFrame_1: cc.SpriteFrame,
        contentBtn: cc.Node,
        contentRule: cc.Node
      },
      onLoad: function onLoad() {
        var self = this;
        this.initAllBtn();
        this.rule_scroll = this.node.getChildByName("show_scroll_view").getComponent(cc.ScrollView);
        this.rule_info_node = this.contentRule.getChildByName("rule_show");
        var rule_bg = this.node.getChildByName("rule_bg");
        var callback = function callback() {
          self.node.active = false;
        };
        wsft.uiFuncs.bindTouchLayer(this.node, rule_bg, callback);
      },
      start: function start() {},
      onEnable: function onEnable() {
        this.rule_scroll.scrollToTop(0);
        this.showImg(this.spriteFrame_1, 1);
        wsft.loading.hide();
      },
      showImg: function showImg(_spriteFrame, _num) {
        var rule_height = [ 1754, 1434 ];
        this.rule_info_node.getComponent(cc.Sprite).spriteFrame = _spriteFrame;
        var content = this.contentRule;
        content.height = rule_height[_num - 1];
        this.rule_info_node.height = rule_height[_num - 1];
      },
      allBtnCallback: function allBtnCallback(event, name) {
        cc.log(name);
        "close" === name ? this.node.active = false : "btn_1" == name || "btn_2" == name;
      },
      initAllBtn: function initAllBtn() {
        var self = this;
        var btnHader = function btnHader(btn, name) {
          wsft.event.addBtnEvent(btn, self.node, "ruleLayer", "allBtnCallback", name);
        };
        btnHader(this.node.getChildByName("close_btn"), "close");
        btnHader(this.contentBtn.getChildByName("btn_1"), "btn_1");
      },
      onDisable: function onDisable() {
        this.rule_scroll.stopAutoScroll();
      }
    });
    cc._RF.pop();
  }, {
    copy_h5: "copy_h5"
  } ],
  sendDataHttp: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "85c3eBg4EpIMpfSSdELKHxL", "sendDataHttp");
    "use strict";
    window.wsft = window.wsft || {};
    var sendDataHttp = {
      Login_name_paw: function Login_name_paw(_name, _password, _loginCallback) {
        var data = {};
        data.type = "login";
        data.username = _name;
        data.password = _password;
        var url = config.loginUrl + "/Login/functionServlet";
        wsft.https.post(url, _loginCallback, data);
      },
      Login_token: function Login_token(_name, _password, _loginCallback) {
        var data = {};
        data.type = "login";
        data.username = _name;
        data.password = _password;
        var url = config.loginUrl + "/Login/functionServlet";
        wsft.https.post(url, _loginCallback, data);
      },
      Login_wx_token: function Login_wx_token(_name, _password, _loginCallback) {
        var data = {};
        data.type = "login";
        data.username = _name;
        data.password = _password;
        var url = config.loginUrl + "/Login/functionServlet";
        wsft.https.post(url, _loginCallback, data);
      },
      getHeadImg: function getHeadImg(_url, _loginCallback) {
        var data = {};
        var url = _url;
        wsft.https.post(_url, _loginCallback);
      }
    };
    wsft.sendDataHttp = module.exports = sendDataHttp;
    cc._RF.pop();
  }, {} ],
  sendDataSocket: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "33693+ZHi9JK5dJwsr0horl", "sendDataSocket");
    "use strict";
    window.wsft = window.wsft || {};
    var sendDataSocket = {
      HeadrtBeat: function HeadrtBeat() {
        var cmd = wsft.protocol.HEART_BEAT;
        var date = null;
        wsft._socket.sendMsg(cmd, date);
      },
      LoginCm: function LoginCm(_uid, _sessionCode, _loginTime) {
        var cmd = wsft.protocol.SEND_LOGIN;
        var data = {};
        data.uid = _uid, data.sessionCode = _sessionCode;
        data.loginTime = _loginTime;
        var date = wsft.pbMsg.encodePB(cmd, data);
        wsft._socket.sendMsg(cmd, date);
      },
      SendPlayerRecord: function SendPlayerRecord(_index) {
        var cmd = wsft.protocol.SEND_PLAYER_RECORD_CAST;
        var data = {};
        data.index = _index;
        var date = wsft.pbMsg.encodePB(cmd, data);
        wsft._socket.sendMsg(cmd, date);
      },
      CreateRoomCm: function CreateRoomCm(_playType) {
        var cmd = wsft.protocol.SEND_CREATE_ROOM;
        var data = {};
        data.playType = _playType;
        var date = wsft.pbMsg.encodePB(cmd, data);
        wsft._socket.sendMsg(cmd, date);
      },
      JoinRoomCm: function JoinRoomCm(_roomID) {
        var cmd = wsft.protocol.SEND_JOIN_ROOM;
        var data = {};
        data.roomId = _roomID;
        var date = wsft.pbMsg.encodePB(cmd, data);
        wsft._socket.sendMsg(cmd, date);
      },
      PrepareRoom: function PrepareRoom() {
        var cmd = wsft.protocol.SEND_PREPARE_ROOM;
        var date = null;
        wsft._socket.sendMsg(cmd, date);
      },
      LeaveRoom: function LeaveRoom() {
        var cmd = wsft.protocol.SEND_LEAVE_ROOM;
        var date = null;
        wsft._socket.sendMsg(cmd, date);
      },
      DissolveRoom: function DissolveRoom() {
        var cmd = wsft.protocol.SEND_DISSOLVE_ROOM;
        var date = null;
        wsft._socket.sendMsg(cmd, date);
      },
      ApplayDissolveRoom: function ApplayDissolveRoom(_bool) {
        var cmd = wsft.protocol.SEND_APPLAY_DISSOLVE_ROOM;
        var data = {};
        data.agree = _bool;
        var date = wsft.pbMsg.encodePB(cmd, data);
        wsft._socket.sendMsg(cmd, date);
      },
      ChatRoom: function ChatRoom(_id, _type, _content) {
        var cmd = wsft.protocol.SEND_CHAT_ROOM;
        var data = {};
        data.id = _id;
        data.type = _type;
        data.content = _content;
        var date = wsft.pbMsg.encodePB(cmd, data);
        wsft._socket.sendMsg(cmd, date);
      },
      OutCard: function OutCard(_mjNum, _mjType) {
        var cmd = wsft.protocol.SEND_OUT_CARD;
        var data = {};
        data.mj = {};
        data.mj.num = _mjNum;
        data.mj.type = _mjType;
        var date = wsft.pbMsg.encodePB(cmd, data);
        wsft._socket.sendMsg(cmd, date);
      },
      PengCard: function PengCard() {
        var cmd = wsft.protocol.SEND_PENG_CARD;
        var date = null;
        wsft._socket.sendMsg(cmd, date);
      },
      PassCard: function PassCard() {
        var cmd = wsft.protocol.SEND_PASS;
        var date = null;
        wsft._socket.sendMsg(cmd, date);
      },
      JieGang: function JieGang() {
        var cmd = wsft.protocol.SEND_JIEGANG;
        var date = null;
        wsft._socket.sendMsg(cmd, date);
      },
      AnGang: function AnGang(_mjNum, _mjType) {
        var cmd = wsft.protocol.SEND_ANGANG;
        var data = {};
        data.mj = {};
        data.mj.num = _mjNum;
        data.mj.type = _mjType;
        var date = wsft.pbMsg.encodePB(cmd, data);
        wsft._socket.sendMsg(cmd, date);
      },
      MingGang: function MingGang(_mjNum, _mjType) {
        var cmd = wsft.protocol.SEND_MINGGANG;
        var data = {};
        data.mj = {};
        data.mj.num = _mjNum;
        data.mj.type = _mjType;
        var date = wsft.pbMsg.encodePB(cmd, data);
        wsft._socket.sendMsg(cmd, date);
      },
      ZiMo: function ZiMo() {
        var cmd = wsft.protocol.SEND_ZI_MO;
        var date = null;
        wsft._socket.sendMsg(cmd, date);
      },
      JiePao: function JiePao() {
        var cmd = wsft.protocol.SEND_JIE_PAO;
        var date = null;
        wsft._socket.sendMsg(cmd, date);
      },
      OfflineReconnection: function OfflineReconnection() {
        var cmd = wsft.protocol.SEND_OFFLINE_RECONNECTION;
        var date = null;
        wsft._socket.sendMsg(cmd, date);
      }
    };
    wsft.sendDataSocket = module.exports = sendDataSocket;
    cc._RF.pop();
  }, {} ],
  setLayer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "045ddLdmWxCcID82kF8dVzR", "setLayer");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        setNode: cc.Node
      },
      onLoad: function onLoad() {
        var self = this;
        var bg_1 = this.setNode.getChildByName("game_bg_1");
        this.bg_syz_1 = bg_1.getChildByName("syz");
        var bg_2 = this.setNode.getChildByName("game_bg_2");
        this.bg_syz_2 = bg_2.getChildByName("syz");
        var bg_3 = this.setNode.getChildByName("game_bg_3");
        this.bg_syz_3 = bg_3.getChildByName("syz");
        this.bg_syz_1.active = false;
        this.bg_syz_2.active = false;
        this.bg_syz_3.active = false;
        this.initAllBtn();
        this.initSlider();
        this.initcheckBox();
        var set_bg = this.node.getChildByName("set_bg");
        var callback = function callback() {
          self.node.active = false;
        };
        wsft.uiFuncs.bindTouchLayer(this.node, set_bg, callback);
        this.refreshVolume();
      },
      start: function start() {},
      onEnable: function onEnable() {
        this.refreshVolume();
        this.refreshGameBg();
        this.refreshBtn();
        wsft.loading.hide();
      },
      refreshBtn: function refreshBtn() {
        var account = this.node.getChildByName("change_account_btn");
        var dissolve = this.node.getChildByName("applay_dissolve_btn");
        if ("MainScene" == wsft.gameData.gameSceneName) {
          account.active = true;
          dissolve.active = false;
        } else if ("GameScene" == wsft.gameData.gameSceneName) if ("NO" == wsft.gameData.gameState) {
          account.active = false;
          dissolve.active = false;
        } else {
          account.active = false;
          dissolve.active = true;
        }
      },
      refreshGameBg: function refreshGameBg() {
        var gameBg = cc.sys.localStorage.getItem("gameBg");
        if (null != gameBg) {
          if ("1" == gameBg) {
            this.bg_syz_1.active = true;
            this.bg_syz_2.active = false;
            this.bg_syz_3.active = false;
          } else if ("2" == gameBg) {
            this.bg_syz_1.active = false;
            this.bg_syz_2.active = true;
            this.bg_syz_3.active = false;
          } else if ("3" == gameBg) {
            this.bg_syz_1.active = false;
            this.bg_syz_2.active = false;
            this.bg_syz_3.active = true;
          }
        } else {
          this.bg_syz_1.active = true;
          this.bg_syz_2.active = false;
          this.bg_syz_3.active = false;
          cc.sys.localStorage.setItem("gameBg", "1");
        }
      },
      refreshVolume: function refreshVolume() {
        var _sliderMusic = this.setNode.getChildByName("slider_music");
        var _sliderSound = this.setNode.getChildByName("slider_sound");
        var musicMask = _sliderMusic.getChildByName("mask_node");
        var soundMask = _sliderSound.getChildByName("mask_node");
        var sliderMusic = _sliderMusic.getComponent(cc.Slider);
        var sliderSound = _sliderSound.getComponent(cc.Slider);
        musicMask.width = 500 * wsft.audioFuncs.musicVolume;
        soundMask.width = 500 * wsft.audioFuncs.soundVolume;
        sliderMusic.progress = wsft.audioFuncs.musicVolume;
        sliderSound.progress = wsft.audioFuncs.soundVolume;
      },
      checkBoxCallback: function checkBoxCallback(toggle, name) {
        console.log(toggle);
        "toggle" == name && (toggle.isChecked ? wsft.uiFuncs.showTip("\u6682\u65f6\u672a\u5f00\u901aGPS\u529f\u80fd\uff01", 30, 2, new cc.Color(0, 0, 0)) : wsft.uiFuncs.showTip("\u6682\u65f6\u672a\u5f00\u901aGPS\u529f\u80fd", 30, 2, new cc.Color(0, 0, 0)));
      },
      initcheckBox: function initcheckBox() {
        var self = this;
        var checkBoxhander = function checkBoxhander(slider, _name) {
          wsft.event.addCheckBoxEvent(slider, self.node, "setLayer", "checkBoxCallback", _name);
        };
        checkBoxhander(this.node.getChildByName("distance_toggle"), "toggle");
      },
      allBtnCallback: function allBtnCallback(event, name) {
        cc.log(name);
        if ("close" === name) this.node.active = false; else if ("change" == name) cc.director.loadScene("LoginScene"); else if ("applay" == name) wsft.sendDataSocket.ApplayDissolveRoom(true); else if ("bg_1" == name) {
          this.bg_syz_1.active = true;
          this.bg_syz_2.active = false;
          this.bg_syz_3.active = false;
          cc.sys.localStorage.setItem("gameBg", "1");
          "GameScene" == wsft.gameData.gameSceneName && wsft.message.sendMessage(wsft.protocol.GAMEINBG, "");
        } else if ("bg_2" == name) {
          this.bg_syz_1.active = false;
          this.bg_syz_2.active = true;
          this.bg_syz_3.active = false;
          cc.sys.localStorage.setItem("gameBg", "2");
          "GameScene" == wsft.gameData.gameSceneName && wsft.message.sendMessage(wsft.protocol.GAMEINBG, "");
        } else if ("bg_3" == name) {
          this.bg_syz_1.active = false;
          this.bg_syz_2.active = false;
          this.bg_syz_3.active = true;
          cc.sys.localStorage.setItem("gameBg", "3");
          "GameScene" == wsft.gameData.gameSceneName && wsft.message.sendMessage(wsft.protocol.GAMEINBG, "");
        }
      },
      initAllBtn: function initAllBtn() {
        var self = this;
        var btnHader = function btnHader(btn, name) {
          wsft.event.addBtnEvent(btn, self.node, "setLayer", "allBtnCallback", name);
        };
        btnHader(this.node.getChildByName("close_btn"), "close");
        btnHader(this.node.getChildByName("change_account_btn"), "change");
        btnHader(this.node.getChildByName("applay_dissolve_btn"), "applay");
        btnHader(this.setNode.getChildByName("game_bg_1"), "bg_1");
        btnHader(this.setNode.getChildByName("game_bg_2"), "bg_2");
        btnHader(this.setNode.getChildByName("game_bg_3"), "bg_3");
      },
      sliderCallback: function sliderCallback(slider, name) {
        console.log(name);
        if ("music" == name) {
          wsft.audioFuncs.setMusicVolume(slider.progress);
          "GameScene" == wsft.gameData.gameSceneName && wsft.message.sendMessage(wsft.protocol.GAMEINMUSIC, "");
        } else "sound" == name && wsft.audioFuncs.setSoundVolume(slider.progress);
        this.refreshVolume();
      },
      initSlider: function initSlider() {
        var self = this;
        var sliderhander = function sliderhander(slider, _name) {
          wsft.event.addSliderEvent(slider, self.node, "setLayer", "sliderCallback", _name);
        };
        sliderhander(this.setNode.getChildByName("slider_music"), "music");
        sliderhander(this.setNode.getChildByName("slider_sound"), "sound");
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
        wsft.message.addMessage(wsft.protocol.adaptiveView, this.showShare.bind(this));
      },
      start: function start() {
        this.showShare();
      },
      onEnable: function onEnable() {
        wsft.loading.hide();
      },
      showShare: function showShare(date) {
        cc.log(date);
        var share_1 = this.node.getChildByName("share_1");
        var share_2 = this.node.getChildByName("share_2");
        if ("portrait" == config.onorientationChange || "portrait" == date) {
          share_1.active = true;
          share_2.active = false;
        } else {
          share_1.active = false;
          share_2.active = true;
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  shopLayer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "60b3drDJe9IO6Ei963yg5Wq", "shopLayer");
    "use strict";
    var _copy = require("copy_h5");
    var _copyStr = "chifengmajiang";
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {
        var self = this;
        this.initAllBtn();
        var shop_bg = this.node.getChildByName("shop_bg");
        var callback = function callback() {
          self.node.active = false;
        };
        wsft.uiFuncs.bindTouchLayer(this.node, shop_bg, callback);
      },
      start: function start() {
        var wxLabel = this.node.getChildByName("shop_lable_3").getComponent(cc.Label);
        wxLabel.string = _copyStr;
      },
      onEnable: function onEnable() {
        wsft.loading.hide();
      },
      allBtnCallback: function allBtnCallback(event, name) {
        cc.log(name);
        "close" === name || "sure" == name ? this.node.active = false : "copy" == name && cc.sys.isBrowser && (_copy(_copyStr) ? wsft.uiFuncs.showTip("\u590d\u5236\u6210\u529f", 30) : wsft.uiFuncs.showTip("\u590d\u5236\u5931\u8d25", 30));
      },
      initAllBtn: function initAllBtn() {
        var self = this;
        var btnHader = function btnHader(btn, name) {
          wsft.event.addBtnEvent(btn, self.node, "shopLayer", "allBtnCallback", name);
        };
        btnHader(this.node.getChildByName("close_btn"), "close");
        btnHader(this.node.getChildByName("copy_btn"), "copy");
        btnHader(this.node.getChildByName("sure_btn"), "sure");
      }
    });
    cc._RF.pop();
  }, {
    copy_h5: "copy_h5"
  } ],
  smallGameOverLayer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "455f6NDqTdJhJM2AaC3KACG", "smallGameOverLayer");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        timeLabel: null,
        player: []
      },
      onLoad: function onLoad() {
        var roomIdLabel = this.node.getChildByName("room_num_label").getComponent(cc.Label);
        roomIdLabel.string = "\u623f\u95f4\u53f7:" + wsft.gameData.roomId;
        this.timeLabel = this.node.getChildByName("time_label").getComponent(cc.Label);
        var callback = function callback() {};
        wsft.uiFuncs.bindTouchLayer(this.node, this.node, callback);
        this.initAllBtn();
        for (var i = 0; i < 4; ++i) {
          this.player[i] = this.node.getChildByName("player_node_" + i);
          this.player[i].active = true;
        }
        if (4 == wsft.gameData.playerNum) {
          this.player[0].y = 210;
          this.player[1].y = 70;
          this.player[2].y = -70;
          this.player[3].y = -220;
        } else if (3 == wsft.gameData.playerNum) {
          this.player[0].y = 170;
          this.player[1].y = 0;
          this.player[2].y = -170;
          this.player[3].active = false;
        } else if (2 == wsft.gameData.playerNum) {
          this.player[0].y = 110;
          this.player[1].y = -110;
          this.player[2].active = false;
          this.player[3].active = false;
        }
      },
      setSmallGameOver: function setSmallGameOver(data) {
        console.log("setSmallGameOver==");
        var users = data.rs;
        this.timeLabel.string = wsft.funcs.formatTime("YYYY-MM-DD hh:mm");
        data.liuju ? this.setWinCloseLiuJu(3) : users[wsft.gameData.mySeatIndex - 1].rs > 0 ? this.setWinCloseLiuJu(0) : 0 == users[wsft.gameData.mySeatIndex - 1].rs ? this.setWinCloseLiuJu(1) : this.setWinCloseLiuJu(2);
        this.setPlayerMj(data);
      },
      setWinCloseLiuJu: function setWinCloseLiuJu(_num) {
        var lose_win_type = this.node.getChildByName("lose_win_type");
        var wlln = [];
        wlln.push(lose_win_type.getChildByName("win"));
        wlln.push(lose_win_type.getChildByName("nowinlose"));
        wlln.push(lose_win_type.getChildByName("lose"));
        wlln.push(lose_win_type.getChildByName("liuju"));
        for (var i = 0; i < wlln.length; ++i) wlln[i].active = false;
        wlln[_num].active = true;
      },
      start: function start() {},
      setPlayerMj: function setPlayerMj(data) {
        var seats = wsft.gameData.seats;
        var users = data.rs;
        for (var i = 0; i < seats.length; ++i) {
          var player = this.node.getChildByName("player_node_" + i);
          var mjHand = player.getChildByName("hand_card");
          var zhuangNode = player.getChildByName("zhuang");
          zhuangNode.active = i == wsft.gameData.bankerSeatIndex - 1;
          var nameTabLabel = player.getChildByName("name_label").getComponent(cc.Label);
          nameTabLabel.string = seats[i].nickname;
          var huTypeTabLabel = player.getChildByName("hu_type_label").getComponent(cc.Label);
          huTypeTabLabel.string = "";
          var scoreTabLabel = player.getChildByName("score_label").getComponent(cc.Label);
          if (users[i].rs >= 0) {
            scoreTabLabel.node.color = new cc.Color(255, 0, 0);
            scoreTabLabel.string = "+" + users[i].rs;
          } else {
            scoreTabLabel.node.color = new cc.Color(0, 120, 200);
            scoreTabLabel.string = users[i].rs;
          }
          var huNode = player.getChildByName("hu");
          var hupai = player.getChildByName("hu_pai");
          var _hupai = hupai.getComponent(cc.Sprite);
          _hupai.node.active = false;
          huNode.active = false;
          var _typeString = "";
          for (var h in data.hu) if (i == data.hu[h].seetIndex - 1) {
            1 == data.getHuPaiType ? _typeString += "\u63a5\u70ae " : 2 == data.getHuPaiType ? _typeString += "\u81ea\u6478 " : 3 == data.getHuPaiType && (_typeString += "\u62a2\u6760 ");
            for (var t in data.hu[h].huPaiType) _typeString += wsft.gameData.getHuTypeString(data.hu[h].huPaiType[t]) + " ";
            this.setSpriteFrameByMJ("B_", _hupai, data.mj.num, data.mj.type);
            huNode.active = true;
          }
          users[i].fangPao > 0 && (_typeString += "\u70b9\u70ae ");
          huTypeTabLabel.string = _typeString;
          for (var k = 0; k < mjHand.childrenCount; ++k) {
            var n = mjHand.children[k];
            n.active = false;
          }
          var mySeat = seats[i];
          var myHandCard = mySeat.handCard;
          console.log("ggaamyHandCard==", myHandCard);
          var mjPGNum = 3 * (mySeat.pengs.length + mySeat.anGangs.length + mySeat.mingGangs.length + mySeat.jieGangs.length);
          for (var kk = 0; kk < myHandCard.length; ++kk) {
            var mjNum = myHandCard[kk].num;
            var mjType = myHandCard[kk].type;
            var sprite = mjHand.children[mjPGNum + kk];
            var _sprite = sprite.getComponent(cc.Sprite);
            this.setSpriteFrameByMJ("B_", _sprite, mjNum, mjType);
          }
          var pengangroot = player.getChildByName("gang_peng");
          if (null == mySeat.pengs && null == mySeat.anGangs && null == mySeat.mingGangs && null == mySeat.jieGangs) return;
          pengangroot.removeAllChildren();
          this.pengGang(pengangroot, mySeat);
        }
      },
      pengGang: function pengGang(pengangroot, seatData) {
        var index = 0;
        var side = "myself_node";
        var pre = "B_";
        var gangs = seatData.anGangs;
        for (var i = 0; i < gangs.length; ++i) {
          var _mjNum = gangs[i].num;
          var _mjType = gangs[i].type;
          this.initPengAndGangs(pengangroot, side, pre, index, _mjNum, _mjType, "anGangs");
          index++;
        }
        var gangs = seatData.mingGangs;
        for (var i = 0; i < gangs.length; ++i) {
          var _mjNum = gangs[i].num;
          var _mjType = gangs[i].type;
          this.initPengAndGangs(pengangroot, side, pre, index, _mjNum, _mjType, "mingGangs");
          index++;
        }
        var gangs = seatData.jieGangs;
        for (var i = 0; i < gangs.length; ++i) {
          var _mjNum = gangs[i].num;
          var _mjType = gangs[i].type;
          this.initPengAndGangs(pengangroot, side, pre, index, _mjNum, _mjType, "jieGangs");
          index++;
        }
        var pengs = seatData.pengs;
        if (pengs) for (var i = 0; i < pengs.length; ++i) {
          var _mjNum = pengs[i].num;
          var _mjType = pengs[i].type;
          this.initPengAndGangs(pengangroot, side, pre, index, _mjNum, _mjType, "pengs");
          index++;
        }
      },
      initPengAndGangs: function initPengAndGangs(pengangroot, side, pre, index, mjNum, mjType, flag) {
        var pgroot = null;
        pgroot = cc.instantiate(wsft.mjCard.pengGangMyUpPre);
        pengangroot.addChild(pgroot);
        pgroot.x = 55 * index * 3 + 10 * index;
        var sprites = pgroot.getComponentsInChildren(cc.Sprite);
        for (var s = 0; s < sprites.length; ++s) {
          var sprite = sprites[s];
          if ("gang" == sprite.node.name) {
            var isGang = "pengs" != flag;
            sprite.node.active = isGang;
            sprite.spriteFrame = wsft.mjCard.getSpriteFrameByMJ(pre, mjNum, mjType);
          } else sprite.spriteFrame = "anGangs" == flag ? wsft.mjCard.getEmptySpriteFrame(side) : wsft.mjCard.getSpriteFrameByMJ(pre, mjNum, mjType);
        }
      },
      setSpriteFrameByMJ: function setSpriteFrameByMJ(pre, sprite, mjNum, mjType) {
        sprite.spriteFrame = wsft.mjCard.getSpriteFrameByMJ(pre, mjNum, mjType);
        sprite.node.active = true;
      },
      allBtnCallback: function allBtnCallback(event, name) {
        cc.log(name);
        "next" == name ? wsft.sendDataSocket.PrepareRoom() : "over" == name;
      },
      initAllBtn: function initAllBtn() {
        var self = this;
        var btnHader = function btnHader(btn, name) {
          wsft.event.addBtnEvent(btn, self.node, "smallGameOverLayer", "allBtnCallback", name);
        };
        btnHader(this.node.getChildByName("next_btn"), "next");
        btnHader(this.node.getChildByName("over_btn"), "over");
      }
    });
    cc._RF.pop();
  }, {} ],
  tipLayer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0facau50RRJzKRaCbVP2aoi", "tipLayer");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        label_1: cc.Label,
        label_2: cc.Label,
        tipType: null,
        sureBtn: null,
        cancelBtn: null,
        gameRoom: null
      },
      onLoad: function onLoad() {
        this.sureBtn = this.node.getChildByName("sure_btn");
        this.cancelBtn = this.node.getChildByName("cancel_btn");
        this.initAllBtn();
      },
      start: function start() {},
      setLabel: function setLabel(_type, _str1, _str2, _self) {
        this.sureBtn.active = false;
        this.cancelBtn.active = false;
        this.tipType = _type;
        this.label_1.string = _str1 || "";
        this.label_2.string = _str2 || "";
        if ("JieSanOK" == _type || "JieSanNoOK" == _type) {
          this.gameRoom = _self || null;
          this.sureBtn.active = true;
        }
      },
      allBtnCallback: function allBtnCallback(event, name) {
        cc.log(name);
        if ("sure" == name) if ("JieSanOK" == this.tipType) {
          this.node.active = false;
          this.gameRoom.addGameOverLayer();
        } else "JieSanNoOK" == this.tipType && (this.node.active = false); else "cancel" == name;
      },
      initAllBtn: function initAllBtn() {
        var self = this;
        var btnHader = function btnHader(btn, name) {
          wsft.event.addBtnEvent(btn, self.node, "tipLayer", "allBtnCallback", name);
        };
        btnHader(this.node.getChildByName("sure_btn"), "sure");
        btnHader(this.node.getChildByName("cancel_btn"), "cancel");
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
        cc.loader.onProgress = function(completedCount, totalCount, item) {};
        cc.loader.loadResDir("", function(err, textures) {
          wsft.loading.show("\u6b63\u5728\u52a0\u8f7d\u8d44\u6e90\uff0c\u8bf7\u7a0d\u5019...");
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
    cc.Class({
      extends: cc.Component,
      properties: {
        uid: 66,
        nickname: "11",
        headimg: "http://192.168.1.188/Login/functionServlet",
        roomId: null,
        join: null,
        my: null,
        createJ: null,
        notice: "\u6b22\u8fce\u6765\u5230\u8d64\u5cf0\u9ebb\u5c06",
        diamond: 0,
        ip: "192.168.1.1"
      },
      ctor: function ctor() {
        wsft.message.addMessage(wsft.protocol.RECEIVE_LOGIN, this.socketLogin.bind(this));
        wsft.message.addMessage(wsft.protocol.PLAYER_CAST, this.playerCast.bind(this));
      },
      socketLogin: function socketLogin(data) {
        console.log("date==", data);
        if (1 == data.code) {
          this.nickname = data.nickname;
          this.headimg = data.headimg;
          this.roomId = data.roomId;
          this.notice = data.notice;
          this.join = data.join;
          this.my = data.my;
          this.createJ = data.createJ;
          if (this.roomId) {
            wsft.sendDataSocket.OfflineReconnection();
            wsft.loading.show("\u8fdb\u5165\u623f\u95f4\u4e2d...");
          } else this.jumpScene();
        } else {
          wsft.uiFuncs.showTip("\u4e2a\u4eba\u4fe1\u606f\u83b7\u53d6\u5931\u8d25", 30);
          wsft.loading.hide();
        }
      },
      playerCast: function playerCast(data) {
        console.log("date==", data);
        this.diamond = data.diamond;
      },
      jumpScene: function jumpScene() {
        wsft.loading.show("\u6b63\u5728\u52a0\u8f7d\u8d44\u6e90\uff0c\u8bf7\u7a0d\u5019...");
        cc.director.loadScene("MainScene");
      }
    });
    cc._RF.pop();
  }, {} ],
  websocket: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7903fO6vYhPMoSP9+U1tEKw", "websocket");
    "use strict";
    window.wsft = window.wsft || {};
    var _socket = {
      url: "",
      webSocker: null,
      nodeName: "websocket",
      connect: function connect(_url) {
        this.url = _url;
        this.reconnect();
      },
      reconnect: function reconnect() {
        if (!this.url) return;
        var that = this;
        this.killConnect();
        var ws = new WebSocket(this.url);
        cc.log(ws);
        this.webSocker = ws;
        ws.onopen = function(event) {
          cc.log("Send data WS was opened.");
          wsft.message.sendMessage(wsft.protocol.TCP_ONOPEN);
        };
        ws.onmessage = function(event) {
          if (!event) return;
          wsft.message.sendMessage(wsft.protocol.MSG_HEART_BEAT, "");
          if (cc.sys.isBrowser) {
            var reader = new FileReader();
            reader.readAsArrayBuffer(event.data);
            reader.onload = function(e) {
              that.decodePacket(reader.result);
            };
          } else that.decodePacket(event.data);
        };
        ws.onerror = function(event) {
          cc.log("Send Text fired an error");
          wsft.heartBeat.HearTime = 0;
          wsft.uiFuncs.showTip("\b\u65e0\u6cd5\u8fde\u63a5\u670d\u52a1\u5668\uff0c\u8bf7\u68c0\u67e5\u7f51\u7edc\u3002");
          wsft.loading.hide();
        };
        ws.onclose = function(event) {
          cc.log("WebSocket instance closed.");
          wsft.heartBeat.HearTime = 0;
        };
      },
      killConnect: function killConnect() {
        if (this.webSocker && this.webSocker.readyState == WebSocket.OPEN) {
          this.webSocker.close();
          this.webSocker = null;
        }
      },
      sendMsg: function sendMsg(cmd, msg) {
        if (!this.isConnectState()) return;
        var _length = 0;
        msg && (_length = msg.byteLength);
        var buf = new ArrayBuffer(4 + _length);
        var dv = new DataView(buf);
        dv.setUint16(0, 2 + _length, false);
        dv.setUint16(2, cmd, false);
        if (msg) {
          var dvv = new DataView(msg);
          for (var i = 0; i < _length; i++) dv.setUint8(i + 4, dvv.getUint8(i), false);
        }
        console.log("\u53d1\u9001Socket==>>" + cmd);
        this.webSocker.send(buf);
      },
      isConnectState: function isConnectState() {
        return this.webSocker && this.webSocker.readyState == WebSocket.OPEN;
      },
      decodePacket: function decodePacket(data) {
        var buf = new Uint8Array(data);
        var dataView = new DataView(buf.buffer);
        var _length = dataView.getInt16(0);
        var _msgId = dataView.getInt16(2);
        if (-1 == _msgId) return;
        console.log("\u63a5\u53d7====>>" + _msgId);
        Uint8Array.prototype.slice || Object.defineProperty(Uint8Array.prototype, "slice", {
          value: Array.prototype.slice
        });
        var buffer = buf.slice(4, _length + 2);
        var date = wsft.pbMsg.decodePB(_msgId, buffer);
        wsft.message.sendMessage(_msgId, date);
      },
      sliceBuffer: function sliceBuffer(arraybuffer, start, end) {
        var bytes = arraybuffer.byteLength;
        start = start || 0;
        end = end || bytes;
        if (arraybuffer.slice) return arraybuffer.slice(start, end);
        start < 0 && (start += bytes);
        end < 0 && (end += bytes);
        end > bytes && (end = bytes);
        if (start >= bytes || start >= end || 0 === bytes) return new ArrayBuffer(0);
        var abv = new Uint8Array(arraybuffer);
        var result = new Uint8Array(end - start);
        for (var i = start, ii = 0; i < end; i++, ii++) result[ii] = abv[i];
        return result.buffer;
      }
    };
    wsft._socket = module.exports = _socket;
    cc._RF.pop();
  }, {} ]
}, {}, [ "init", "layer_scale_show", "tipLayer", "message", "heartbeat", "https", "websocket", "notice", "bytebuffer", "fs", "long", "path", "pbCore", "protobufjs", "adaptive", "adaptiveView", "imgHead", "audioFuncs", "copy_h5", "err", "event", "funcs", "loading", "uiFuncs", "gameData", "userData", "arrow", "bigGameOverLayer", "chatLayer", "dissolveRoomLayer", "gameRoom", "gameRuleLayer", "gameScene", "gameSeat", "mjCard", "outOldCard", "pengGang", "smallGameOverLayer", "agreementLayer", "loginScene", "ChiFengMJ", "createLayer", "infoLayer", "joinLayer", "mainScene", "newsLayer", "recordLayer", "ruleLayer", "setLayer", "shareLayer", "shopLayer", "pbMsg", "protocol", "sendDataHttp", "sendDataSocket", "update" ]);
//# sourceMappingURL=project.dev.js.map