System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, ModalOpacity, ModalType, _crd;

  function _reportPossibleCrUseOfModalOpacity(extras) {
    _reporterNs.report("ModalOpacity", "../Config/SysDefine", _context.meta, extras);
  }

  _export("ModalType", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      ModalOpacity = _unresolved_2.ModalOpacity;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "96166GUAoVEY43hYAG87qw+", "Struct", undefined);

      _export("ModalType", ModalType = class ModalType {
        //是否点击遮罩部分关闭
        //缓动实现
        //缓动时间
        constructor(opacity = (_crd && ModalOpacity === void 0 ? (_reportPossibleCrUseOfModalOpacity({
          error: Error()
        }), ModalOpacity) : ModalOpacity).OpacityHigh, clickMaskClose = false, isEasing = true, easingTime = 0.2) {
          this.opacity = (_crd && ModalOpacity === void 0 ? (_reportPossibleCrUseOfModalOpacity({
            error: Error()
          }), ModalOpacity) : ModalOpacity).OpacityHalf;
          this.clickMaskClose = false;
          this.isEasing = true;
          this.easingTime = 0.5;
          this.opacity = opacity;
          this.clickMaskClose = clickMaskClose;
          this.isEasing = isEasing;
          this.easingTime = easingTime;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e2b546c721f7ce5f1945775a6f7c300283ffd7ca.js.map