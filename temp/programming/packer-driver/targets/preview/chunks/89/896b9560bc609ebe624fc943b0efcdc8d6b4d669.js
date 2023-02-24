System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, _decorator, FormType, UIBase, _crd, ccclass, property;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfFormType(extras) {
    _reporterNs.report("FormType", "../Config/SysDefine", _context.meta, extras);
  }

  _export("UIBase", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      FormType = _unresolved_2.FormType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a109efdivZLApTUbzmrGkKw", "UIBase", undefined);

      __checkObsolete__(['Component', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("UIBase", UIBase = class UIBase extends Component {
        constructor() {
          super(...arguments);
          this.formType = (_crd && FormType === void 0 ? (_reportPossibleCrUseOfFormType({
            error: Error()
          }), FormType) : FormType).FormType_Screen;
          this.willDestory = false;
          this.inited = false;
          this.params = void 0;
        }

        load() {
          return _asyncToGenerator(function* () {
            return new Promise((resolve, reject) => {});
          })();
        }

        onInit() {} //界面参数从这里获取


        onShow() {
          for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
            params[_key] = arguments[_key];
          }

          this.params = params;
        } //界面重新被激活 也就是重新active


        reShow() {} //隐藏的时候执行一些清理操作 并没有真正关闭界面


        onHide() {}

        closeSelf() {
          return _asyncToGenerator(function* () {
            return false; // return await UIManager.getInstance().closeForm(this.fid);
          })();
        }

        showEffect() {
          return _asyncToGenerator(function* () {
            return new Promise((resolve, reject) => {
              resolve(true);
            });
          })();
        }

        hideEffect() {
          return _asyncToGenerator(function* () {
            return new Promise((resolve, reject) => {
              resolve(true);
            });
          })();
        }

        getShowEffectTime() {
          return 0.5;
        }

        getHideEffectTime() {
          return 0.3;
        }

      });

      UIBase.prefabPath = "";

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=896b9560bc609ebe624fc943b0efcdc8d6b4d669.js.map