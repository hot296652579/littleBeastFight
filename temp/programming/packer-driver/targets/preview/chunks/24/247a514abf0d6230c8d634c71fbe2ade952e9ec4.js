System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, tween, Tween, Vec3, FormType, ModalType, UIBase, UIScreen, UIWindow, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfFormType(extras) {
    _reporterNs.report("FormType", "../Config/SysDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfModalType(extras) {
    _reporterNs.report("ModalType", "./Struct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIBase(extras) {
    _reporterNs.report("UIBase", "./UIBase", _context.meta, extras);
  }

  _export({
    UIScreen: void 0,
    UIWindow: void 0
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      tween = _cc.tween;
      Tween = _cc.Tween;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      FormType = _unresolved_2.FormType;
    }, function (_unresolved_3) {
      ModalType = _unresolved_3.ModalType;
    }, function (_unresolved_4) {
      UIBase = _unresolved_4.UIBase;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "85003pnwwZE9Y7uUbzXolI6", "UIFrom", undefined);

      __checkObsolete__(['tween', 'Tween', 'Vec3']);

      _export("UIScreen", UIScreen = class UIScreen extends (_crd && UIBase === void 0 ? (_reportPossibleCrUseOfUIBase({
        error: Error()
      }), UIBase) : UIBase) {
        constructor() {
          super(...arguments);
          this.formType = (_crd && FormType === void 0 ? (_reportPossibleCrUseOfFormType({
            error: Error()
          }), FormType) : FormType).FormType_Screen;
          this.willDestory = true;
          this.isEngross = false;
          this.params = void 0;
          this.isOnleyEngross = false;
        }

        //覆盖父类方法全屏不展示出现效果
        showEffect() {
          return _asyncToGenerator(function* () {
            return true;
          })();
        }

        hideEffect() {
          return _asyncToGenerator(function* () {
            return true;
          })();
        }

        onShow() {
          super.onShow(...arguments);
        }

        reShow() {
          super.reShow();
        }

        onHide() {
          super.onHide();
        }

      });

      _export("UIWindow", UIWindow = class UIWindow extends (_crd && UIBase === void 0 ? (_reportPossibleCrUseOfUIBase({
        error: Error()
      }), UIBase) : UIBase) {
        constructor() {
          super(...arguments);
          this.formType = (_crd && FormType === void 0 ? (_reportPossibleCrUseOfFormType({
            error: Error()
          }), FormType) : FormType).FormType_Win;
          this.modalType = new (_crd && ModalType === void 0 ? (_reportPossibleCrUseOfModalType({
            error: Error()
          }), ModalType) : ModalType)();
          this.priority = 0;
        }

        onShow() {
          super.onShow(...arguments);
        }

        onHide() {
          super.onHide();
        } //打开界面的效果。这里做默认效果。如果个别页面有特殊需求，则各自实现


        showEffect() {
          var _this = this;

          return _asyncToGenerator(function* () {
            Tween.stopAllByTarget(_this.node);

            _this.node.setScale(new Vec3(0, 0, 1));

            return new Promise((resolve, reject) => {
              tween(_this.node).to(0.5, {
                scale: new Vec3(1, 1, 1)
              }, {
                easing: 'backOut'
              }).call(() => {
                resolve(true);
              }).start();
            });
          })();
        }

        hideEffect() {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            Tween.stopAllByTarget(_this2.node);
            return new Promise((resolve, reject) => {
              tween(_this2.node).to(0.3, {
                scale: new Vec3(0, 0, 0)
              }, {
                easing: 'backIn'
              }).call(() => {
                resolve(true);
              }).start();
            });
          })();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=247a514abf0d6230c8d634c71fbe2ade952e9ec4.js.map