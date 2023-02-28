System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, MoveCardDTO, _crd;

  _export("default", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d87f8ihhC5DbIRp2fzpjIY3", "MoveCardDTO", undefined);

      /**
       * 移动牌
       */
      _export("default", MoveCardDTO = class MoveCardDTO {
        /**
         * 如果是联网游戏chair通过服务端获取
         */

        /**
         * 起点
         */

        /**
         * 终点
         */
        constructor(chair, fromIndex, toIndex) {
          this.chair = void 0;
          this.fromIndex = void 0;
          this.toIndex = void 0;
          this.chair = chair;
          this.fromIndex = fromIndex;
          this.toIndex = toIndex;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3c2285b1572b1214fbc0442647c9f627a99ad628.js.map