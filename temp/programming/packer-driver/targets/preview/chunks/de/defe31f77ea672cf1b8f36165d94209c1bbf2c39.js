System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, tween, Vec3, TweenUtil, _crd;

  _export("default", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "72110qWuyVH0J48Rx+hZMzF", "TweenUtils", undefined);

      __checkObsolete__(['tween', 'Node', 'Vec3']);

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
            var _tween = tween,
                time = duration / 2,
                scale = node.getScale(),
                skewY = scale.x > 0 ? 20 : -20;

            _tween(node).parallel(_tween().to(time, {
              scale: new Vec3(0, 1, 1)
            }, {
              easing: 'quadIn'
            }), _tween().to(time, {
              skewY: -skewY
            }, {
              easing: 'quadOut'
            })).call(() => {}).parallel(_tween().to(time, {
              scale: new Vec3(-1, 1, 1)
            }, {
              easing: 'quadOut'
            }), _tween().to(time, {
              skewY: 0
            }, {
              easing: 'quadIn'
            })).call(() => {
              node.setScale(1, 1, 1);
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
//# sourceMappingURL=defe31f77ea672cf1b8f36165d94209c1bbf2c39.js.map