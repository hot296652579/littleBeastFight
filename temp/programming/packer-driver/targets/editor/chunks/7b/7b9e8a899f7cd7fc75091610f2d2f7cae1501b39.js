System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, UIManager, UILobbyMgr, _crd;

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


        async showScreenLobby() {
          return await (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
            error: Error()
          }), UIManager) : UIManager).getInstance().openScreen("Lobby/Prefabs/UILobby");
        }

      });

      UILobbyMgr.instance = new UILobbyMgr();

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7b9e8a899f7cd7fc75091610f2d2f7cae1501b39.js.map