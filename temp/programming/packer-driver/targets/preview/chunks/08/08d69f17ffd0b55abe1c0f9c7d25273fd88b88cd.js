System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, StartGameDTO, _crd;

  _export("default", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d5f66TIiIpM0aQ9L6yTzR4Q", "StartGameDTO", undefined);

      /**
       * 开始游戏
       */
      _export("default", StartGameDTO = class StartGameDTO {
        /**
         * 当前操作的椅子
         */

        /**
         * 牌
         */
        constructor(chair, cards) {
          this.chair = void 0;
          this.cards = void 0;
          this.chair = chair;
          this.cards = cards;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=08d69f17ffd0b55abe1c0f9c7d25273fd88b88cd.js.map