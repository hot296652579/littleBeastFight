System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, OnFire, FireKit, _crd;

  function _reportPossibleCrUseOfOnFire(extras) {
    _reporterNs.report("OnFire", "./OnFire", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      OnFire = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0dbdfK1twxB/Ye+keYAsm66", "FireKit", undefined);

      _export("default", FireKit = class FireKit {
        /**
         * 初始化 FireKit
         * @param name
         */
        static init(name) {
          if (FireKit.fireDict[name] == null) {
            FireKit.fireDict[name] = new (_crd && OnFire === void 0 ? (_reportPossibleCrUseOfOnFire({
              error: Error()
            }), OnFire) : OnFire)();
          }
        }
        /**
         * 获取 FireKit
         * @param name
         */


        static use(name) {
          return FireKit.fireDict[name];
        }

      });

      FireKit.fireDict = {};

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=bc0c635ec060647054aa2fc2b7201204eadcb557.js.map