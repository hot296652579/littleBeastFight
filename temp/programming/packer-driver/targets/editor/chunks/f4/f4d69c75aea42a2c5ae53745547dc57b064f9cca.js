System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Node, EventMgr, LogicEvent, UIScreen, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, UIBattle;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../Script/Base/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLogicEvent(extras) {
    _reporterNs.report("LogicEvent", "../../Script/Games/LogicEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIScreen(extras) {
    _reporterNs.report("UIScreen", "../../Script/UIFrame/UIFrom", _context.meta, extras);
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
    }, function (_unresolved_2) {
      EventMgr = _unresolved_2.default;
    }, function (_unresolved_3) {
      LogicEvent = _unresolved_3.LogicEvent;
    }, function (_unresolved_4) {
      UIScreen = _unresolved_4.UIScreen;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0aeaaVRuKhFS5y98dftB6pi", "UIBattle", undefined);

      __checkObsolete__(['_decorator', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("UIBattle", UIBattle = (_dec = ccclass('UIBattle'), _dec2 = property(Node), _dec(_class = (_class2 = class UIBattle extends (_crd && UIScreen === void 0 ? (_reportPossibleCrUseOfUIScreen({
        error: Error()
      }), UIScreen) : UIScreen) {
        constructor(...args) {
          super(...args);
          this.isEngross = true;

          _initializerDefineProperty(this, "btnFight", _descriptor, this);
        }

        start() {}

        onLoad() {}

        async onShow(...params) {
          this.init();
          this.eventRegister();
        }

        init() {}

        eventRegister() {}

        async onBtnBackLobby() {
          await this.closeSelf();
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).Instance.emit((_crd && LogicEvent === void 0 ? (_reportPossibleCrUseOfLogicEvent({
            error: Error()
          }), LogicEvent) : LogicEvent).ENTER_HALL_FROM_GAMES);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "btnFight", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f4d69c75aea42a2c5ae53745547dc57b064f9cca.js.map