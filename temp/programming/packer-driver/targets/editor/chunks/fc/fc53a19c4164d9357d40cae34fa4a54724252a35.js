System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, _decorator, FormType, UIManager, UIBase, _crd, ccclass, property;

  function _reportPossibleCrUseOfFormType(extras) {
    _reporterNs.report("FormType", "../Config/SysDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIManager(extras) {
    _reporterNs.report("UIManager", "./UIMgr", _context.meta, extras);
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
    }, function (_unresolved_3) {
      UIManager = _unresolved_3.UIManager;
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
        constructor(...args) {
          super(...args);
          this.formType = (_crd && FormType === void 0 ? (_reportPossibleCrUseOfFormType({
            error: Error()
          }), FormType) : FormType).FormType_Screen;
          this.willDestory = false;
          this.inited = false;
          this.params = void 0;
        }

        async load() {
          return new Promise((resolve, reject) => {});
        }

        onInit() {} //界面参数从这里获取


        onShow(...params) {
          this.params = params;
        } //界面重新被激活 也就是重新active


        reShow() {} //隐藏的时候执行一些清理操作 并没有真正关闭界面


        onHide() {}

        async closeSelf() {
          return await (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
            error: Error()
          }), UIManager) : UIManager).getInstance().closeForm(this.fid);
        }

        async showEffect() {
          return new Promise((resolve, reject) => {
            resolve(true);
          });
        }

        async hideEffect() {
          return new Promise((resolve, reject) => {
            resolve(true);
          });
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
//# sourceMappingURL=fc53a19c4164d9357d40cae34fa4a54724252a35.js.map