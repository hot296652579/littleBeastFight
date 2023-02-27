System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Singleton, EventMgr, _crd;

  function _reportPossibleCrUseOfSingleton(extras) {
    _reporterNs.report("Singleton", "./Sigleton", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }, function (_unresolved_2) {
      Singleton = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "456fc90HXFPho1/8Agnubb6", "EventMgr", undefined);

      __checkObsolete__(['Component', 'resources', 'SpriteAtlas']);

      _export("default", EventMgr = class EventMgr extends (_crd && Singleton === void 0 ? (_reportPossibleCrUseOfSingleton({
        error: Error()
      }), Singleton) : Singleton) {
        constructor() {
          super(...arguments);
          this.eventDir = new Map();
        }

        static get Instance() {
          // super()
          return super.getInstance();
        }

        addEventListen(evt, fun, cxt) {
          if (this.eventDir.has(evt)) {
            var arr = this.eventDir.get(evt);
            arr.push({
              fun,
              cxt
            });
          } else {
            this.eventDir.set(evt, [{
              fun,
              cxt
            }]);
          }
        }

        unEventListen(evt, fun) {
          if (this.eventDir.has(evt)) {
            var index = this.eventDir.get(evt).findIndex(i => i.fun == fun);
            index > -1 && this.eventDir.get(evt).splice(index, 1);
          }
        }

        emit(evt) {
          for (var _len = arguments.length, param = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            param[_key - 1] = arguments[_key];
          }

          if (this.eventDir.has(evt)) {
            this.eventDir.get(evt).forEach(_ref => {
              var {
                fun,
                cxt
              } = _ref;
              cxt ? fun.apply(cxt, param) : fun(...param);
            });
          }
        }

        clearDir() {
          this.eventDir.clear();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e1c0e459db2d4d4bf0a391a3fd9a3128f0d46a3e.js.map