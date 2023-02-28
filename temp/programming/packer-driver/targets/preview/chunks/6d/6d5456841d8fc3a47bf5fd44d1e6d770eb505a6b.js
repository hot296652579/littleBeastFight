System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, MoveResultDTO, _crd;

  _export("default", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "36006WqxVJAn4Ftr/YrWDhS", "MoveResultDTO", undefined);

      _export("default", MoveResultDTO = class MoveResultDTO {
        /**
         * 操作的人
         */

        /**
         *开始位置
         */

        /**
         * 开始位置的牌
         */

        /**
         *目标位置
         */

        /**
         * 目标位置的牌
         */

        /**
         * 结果（-1 失败，0 平局 ，1 胜利）
         */
        constructor(chair, fromIndex, fromCard, toIndex, toCard, result) {
          this.chair = void 0;
          this.fromIndex = void 0;
          this.fromCard = void 0;
          this.toIndex = void 0;
          this.toCard = void 0;
          this.result = void 0;
          this.chair = chair;
          this.fromIndex = fromIndex;
          this.fromCard = fromCard;
          this.toIndex = toIndex;
          this.toCard = toCard;
          this.result = result;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6d5456841d8fc3a47bf5fd44d1e6d770eb505a6b.js.map