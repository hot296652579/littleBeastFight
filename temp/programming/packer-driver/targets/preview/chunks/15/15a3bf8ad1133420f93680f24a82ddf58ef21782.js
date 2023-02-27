System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, UIManager, UILobbyMgr, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfUIManager(extras) {
    _reporterNs.report("UIManager", "../Script/UIFrame/UIMgr", _context.meta, extras);
  }

  _export("UILobbyMgr", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      UIManager = _unresolved_2.UIManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "46efb2OqtZN94o4v53LsHxT", "UILobbyMgr", undefined);

      _export("UILobbyMgr", UILobbyMgr = class UILobbyMgr {
        static Instance() {
          return this.instance;
        }
        /**
         * 打开大厅界面
         */


        showScreenLobby() {
          return _asyncToGenerator(function* () {
            return yield (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
              error: Error()
            }), UIManager) : UIManager).getInstance().openScreen("Lobby/Prefabs/UILobby");
          })();
        }

      });

      UILobbyMgr.instance = new UILobbyMgr();

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=15a3bf8ad1133420f93680f24a82ddf58ef21782.js.map