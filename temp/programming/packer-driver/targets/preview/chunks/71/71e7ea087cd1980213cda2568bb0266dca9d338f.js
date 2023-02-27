System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, js, Singleton, LogicManager, _crd;

  function _reportPossibleCrUseOfBaseLogic(extras) {
    _reporterNs.report("BaseLogic", "../Games/BaseLogic", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSingleton(extras) {
    _reporterNs.report("Singleton", "./Sigleton", _context.meta, extras);
  }

  _export("LogicManager", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      js = _cc.js;
    }, function (_unresolved_2) {
      Singleton = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "53e94/yt2hGvItFde3xwyiE", "LogicManager", undefined);

      __checkObsolete__(['js']);

      _export("LogicManager", LogicManager = class LogicManager extends (_crd && Singleton === void 0 ? (_reportPossibleCrUseOfSingleton({
        error: Error()
      }), Singleton) : Singleton) {
        constructor() {
          super(...arguments);
          this.logics = [];
          this.logicTypes = [];
        }

        static Instance() {
          return super.getInstance();
        }

        /**
         * 主要子游戏存在就这里边就应该有
         * @param logicType 
         * @returns 
         */
        registerLogicTypes(logicType) {
          for (var i = 0; i < this.logicTypes.length; i++) {
            if (this.logicTypes[i] == logicType) {
              console.error("\u91CD\u590D\u6DFB\u52A0" + js.getClassName(logicType));
              return;
            }
          }

          this.logicTypes.push(logicType);
          var logic = new logicType();
          this.logics.push(logic);
          logic.init();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=71e7ea087cd1980213cda2568bb0266dca9d338f.js.map