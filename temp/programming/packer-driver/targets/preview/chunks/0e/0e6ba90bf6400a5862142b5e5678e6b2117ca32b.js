System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, BaseLogic, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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

        onStartEnter(data) {
          var _this = this;

          return _asyncToGenerator(function* () {
            _this.data = data;
          })();
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
//# sourceMappingURL=0e6ba90bf6400a5862142b5e5678e6b2117ca32b.js.map