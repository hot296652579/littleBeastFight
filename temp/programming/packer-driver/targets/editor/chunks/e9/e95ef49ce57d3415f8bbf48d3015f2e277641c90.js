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
        constructor(...args) {
          super(...args);
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
          for (let i = 0; i < this.logicTypes.length; i++) {
            if (this.logicTypes[i] == logicType) {
              console.error(`重复添加${js.getClassName(logicType)}`);
              return;
            }
          }

          this.logicTypes.push(logicType);
          let logic = new logicType();
          this.logics.push(logic);
          logic.init();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e95ef49ce57d3415f8bbf48d3015f2e277641c90.js.map