System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, EndGameDTO, _crd;

  _export("default", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "37db44pNulIW7jSnjc+QdAK", "EndGameDTO", undefined);

      /**
       * 游戏结束
       */
      _export("default", EndGameDTO = class EndGameDTO {
        /**
         * 胜利方
         */

        /**
         * 颜色
         */
        constructor(chair, color) {
          this.chair = void 0;
          this.color = void 0;
          this.chair = chair;
          this.color = color;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=fbcfce8ebc6706c65e64f2a81c229c5648ac880d.js.map