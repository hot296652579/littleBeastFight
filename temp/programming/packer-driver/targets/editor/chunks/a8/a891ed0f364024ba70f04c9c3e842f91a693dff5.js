System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, BaseLogic, _crd;

  function _reportPossibleCrUseOfLogicEventData(extras) {
    _reporterNs.report("LogicEventData", "./LogicEvent", _context.meta, extras);
  }

  _export("BaseLogic", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b8b33qBEXtDuaB8L09uk8Ya", "BaseLogic", undefined);

      _export("BaseLogic", BaseLogic = class BaseLogic {
        constructor() {
          this.data = void 0;
        }

        init() {}

        async onStartEnter(data) {
          this.data = data;
        }
        /*
        子游戏返回大厅的回调通知
        */


        onBackHall(data) {//退出游戏的逻辑
        } //获取relist列表 加载对应游戏的资源


        startLoadGame() {} //资源加载完成


        onLoadResourceComplete(err) {} //加载进度


        onLoadResourceProgress(process) {}

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a891ed0f364024ba70f04c9c3e842f91a693dff5.js.map