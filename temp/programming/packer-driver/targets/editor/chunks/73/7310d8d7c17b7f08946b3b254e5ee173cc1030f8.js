System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, GameEvent, _crd;

  _export("default", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ddb19KTL3ZIB5do95xpvi6+", "GameEvent", undefined);

      /**
       * 定义当前游戏的事件
       */
      _export("default", GameEvent = class GameEvent {});

      GameEvent.SIT_DOWN = "__SIT_DOWN__";
      GameEvent.START_GAME = "__START_GAME__";
      GameEvent.OPEN_RESULT = "__SHOW_RESULT__";
      GameEvent.CONFIRM_COLOR = "__CONFIRM_COLOR__";
      GameEvent.OPERATION_NOTIFY = "__OPERATION_NOTIFY__";
      GameEvent.MOVE_RESULT = "__MOVE_RESULT__";
      GameEvent.END_GAME = "__END_GAME__";

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7310d8d7c17b7f08946b3b254e5ee173cc1030f8.js.map