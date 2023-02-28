System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, PlayerManager, _crd;

  function _reportPossibleCrUseOfPlayer(extras) {
    _reporterNs.report("Player", "./Player", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "432fc3o4RpGVoEQOLzmowa+", "PlayerManager", undefined);

      /**
       * 玩家管理
       */
      _export("default", PlayerManager = class PlayerManager {
        constructor() {
          this.players = {};
        }

        static inst() {
          if (this._inst == null) {
            this._inst = new PlayerManager();
          }

          return this._inst;
        }
        /**
         * 根据玩家ID获取玩家信息
         * @param id
         */


        get(id) {
          return this.players[id];
        }
        /**
         * 添加玩家
         * @param player
         */


        add(player) {
          this.players[player.userId] = player;
        }
        /**
         * 创建玩家对象
         * @param player
         */


        create(player) {
          this.add(player);
          return player;
        }

      });

      PlayerManager._inst = void 0;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8821f3e1748e7ac8466d7f8972ed8be89e1c31e0.js.map