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
        constructor(opacity, clickMaskClose, isEasing, easingTime) {
          if (opacity === void 0) {
            opacity = (_crd && ModalOpacity === void 0 ? (_reportPossibleCrUseOfModalOpacity({
              error: Error()
            }), ModalOpacity) : ModalOpacity).OpacityHigh;
          }

          if (clickMaskClose === void 0) {
            clickMaskClose = false;
          }

          if (isEasing === void 0) {
            isEasing = true;
          }

          if (easingTime === void 0) {
            easingTime = 0.2;
          }

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
//# sourceMappingURL=332d3519900b8998cad2c4a00ede9da1adda4e4b.js.map