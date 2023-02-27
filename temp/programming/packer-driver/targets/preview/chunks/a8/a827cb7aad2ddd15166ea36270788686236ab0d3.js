System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Node, Label, ProgressBar, EventMgr, FBGameEventName, UIWindow, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, FBGameLooading;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../Script/Base/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFBGameEventName(extras) {
    _reporterNs.report("FBGameEventName", "../../Script/Games/LogicEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIWindow(extras) {
    _reporterNs.report("UIWindow", "../../Script/UIFrame/UIFrom", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Node = _cc.Node;
      Label = _cc.Label;
      ProgressBar = _cc.ProgressBar;
    }, function (_unresolved_2) {
      EventMgr = _unresolved_2.default;
    }, function (_unresolved_3) {
      FBGameEventName = _unresolved_3.FBGameEventName;
    }, function (_unresolved_4) {
      UIWindow = _unresolved_4.UIWindow;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0ee02W/M3hA6L7BhBw71LbV", "UIBattleLoading", undefined);

      __checkObsolete__(['_decorator', 'Node', 'Label', 'ProgressBar']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("FBGameLooading", FBGameLooading = (_dec = ccclass('FBGameLooading'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec(_class = (_class2 = class FBGameLooading extends (_crd && UIWindow === void 0 ? (_reportPossibleCrUseOfUIWindow({
        error: Error()
      }), UIWindow) : UIWindow) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "progress", _descriptor, this);

          _initializerDefineProperty(this, "lblProTxt", _descriptor2, this);

          _initializerDefineProperty(this, "duduChe", _descriptor3, this);
        }

        onShow() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).Instance.addEventListen((_crd && FBGameEventName === void 0 ? (_reportPossibleCrUseOfFBGameEventName({
            error: Error()
          }), FBGameEventName) : FBGameEventName).GAME_LOAD_COMPLETE, this.onLoadCompeted, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).Instance.addEventListen((_crd && FBGameEventName === void 0 ? (_reportPossibleCrUseOfFBGameEventName({
            error: Error()
          }), FBGameEventName) : FBGameEventName).GAME_LOAD_PROGRESS, this.onLoadProgress, this);
        }

        onHide() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).Instance.unEventListen((_crd && FBGameEventName === void 0 ? (_reportPossibleCrUseOfFBGameEventName({
            error: Error()
          }), FBGameEventName) : FBGameEventName).GAME_LOAD_COMPLETE, this.onLoadCompeted);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).Instance.unEventListen((_crd && FBGameEventName === void 0 ? (_reportPossibleCrUseOfFBGameEventName({
            error: Error()
          }), FBGameEventName) : FBGameEventName).GAME_LOAD_PROGRESS, this.onLoadProgress);
        }

        onLoadProgress(val) {
          this.lblProTxt.getComponent(Label).string = Math.round(val * 100) + "/100";
          this.progress.getComponent(ProgressBar).progress = val; // this.calDuDuChePos();
        }

        calDuDuChePos() {
          var progress = this.progress.getComponent(ProgressBar).progress;
          var len = 578;
          var x = len * progress - len / 2;
          this.duduChe.setPosition(x, -500);
        }

        onLoadCompeted() {
          this.closeSelf();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "progress", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "lblProTxt", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "duduChe", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a827cb7aad2ddd15166ea36270788686236ab0d3.js.map