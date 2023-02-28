System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, OpenCardDTO, _crd;

  _export("default", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7b7c3xw0d5BxbRlL0PnLTaw", "OpenCardDTO", undefined);

      /**
       * 打开牌
       */
      _export("default", OpenCardDTO = class OpenCardDTO {
        /**
         * 如果是联网游戏chair通过服务端获取
         */

        /**
         * 索引位置
         */
        constructor(chair, index) {
          this.chair = void 0;
          this.index = void 0;
          this.chair = chair;
          this.index = index;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=550eb6e8e234684eb4db6891e457b4f3c9fb6be5.js.map