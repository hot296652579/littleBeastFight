System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, LogicEventData, _crd, LogicEvent;

  _export({
    LogicEventData: void 0,
    LogicEvent: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1ea28MjS0hOu6igXTRRPcY0", "LogicEvent", undefined);

      (function (LogicEvent) {
        LogicEvent["ENTER_COMPLETE"] = "LOGIC_EVENT_ENTER_COMPLETE";
        LogicEvent["ENTER_HALL"] = "LOGIC_EVENT_ENTER_HALL";
        LogicEvent["ENTER_FBGAME"] = "ENTER_FBGAME";
        LogicEvent["ENTER_HALL_FROM_GAMES"] = "ENTER_HALL_FROM_GAMES";
      })(LogicEvent || _export("LogicEvent", LogicEvent = {}));

      _export("LogicEventData", LogicEventData = class LogicEventData {
        constructor(data) {
          this.data = void 0;
          this.data = data;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d30e3661952a11e0ad6520b6e71777b997a4289c.js.map