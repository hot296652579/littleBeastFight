System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, tween, TweenUtil, _crd;

  _export("default", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      tween = _cc.tween;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "72110qWuyVH0J48Rx+hZMzF", "TweenUtils", undefined);

      __checkObsolete__(['tween', 'Node']);

      /*
       * @Description: 
       * @Author: Super_Javan
       * @Date: 2022-12-02 15:07:23
       * @LastEditTime: 2022-12-02 16:54:24
       * @LastEditors: Super_Javan
       */
      _export("default", TweenUtil = class TweenUtil {
        /**
         * 水平翻转（卡片翻转）
         * @param node 节点
         * @param duration 总时长
         * @param onComplete 完成回调
         */
        static flip(node, duration, onComplete) {
          return new Promise(res => {
            const _tween = tween,
                  time = duration / 2,
                  scale = node.scale,
                  skewY = scale > 0 ? 20 : -20;

            _tween(node).parallel(_tween().to(time, {
              scaleX: 0
            }, {
              easing: 'quadIn'
            }), _tween().to(time, {
              skewY: -skewY
            }, {
              easing: 'quadOut'
            })).call(() => {}).parallel(_tween().to(time, {
              scaleX: -scaleX
            }, {
              easing: 'quadOut'
            }), _tween().to(time, {
              skewY: 0
            }, {
              easing: 'quadIn'
            })).call(() => {
              node.scale = 1;
              onComplete && onComplete();
              res();
            }).start();
          });
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8c06509be44972427195f029e9e446287d6891f0.js.map