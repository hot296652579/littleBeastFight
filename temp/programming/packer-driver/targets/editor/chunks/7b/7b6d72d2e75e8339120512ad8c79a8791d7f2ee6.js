System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Player, _crd;

  function _reportPossibleCrUseOfSitDownDTO(extras) {
    _reporterNs.report("SitDownDTO", "./dto/SitDownDTO", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStartGameDTO(extras) {
    _reporterNs.report("StartGameDTO", "./dto/StartGameDTO", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOperationNotifyDTO(extras) {
    _reporterNs.report("OperationNotifyDTO", "./dto/OperationNotifyDTO", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMoveResultDTO(extras) {
    _reporterNs.report("MoveResultDTO", "./dto/MoveResultDTO", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOpenResultDTO(extras) {
    _reporterNs.report("OpenResultDTO", "./dto/OpenResultDTO", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEndGameDTO(extras) {
    _reporterNs.report("EndGameDTO", "./dto/EndGameDTO", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConfirmColorDTO(extras) {
    _reporterNs.report("ConfirmColorDTO", "./dto/ConfirmColorDTO", _context.meta, extras);
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

      _cclegacy._RF.push({}, "ceb8cDc2NhOpasrW7303xmB", "Player", undefined);

      _export("default", Player = class Player {
        /**
         * 玩家ID
         */

        /**
         * 是否为AI
         */

        /**
         * 名称
         */
        constructor(userId, name) {
          this.userId = void 0;
          this.ai = void 0;
          this.name = void 0;
          this.userId = userId;
          this.name = name;
        }
        /**
         * 坐席
         * @param sitDownDTO
         */


        sitDown(sitDownDTO) {
          console.log("SitDown:" + JSON.stringify(sitDownDTO));
          this.onSitDown(sitDownDTO);
        }
        /**
         * 开始游戏
         * @param startGameDTO
         */


        startGame(startGameDTO) {
          console.log("StartGame:" + JSON.stringify(startGameDTO));
          this.onStartGame(startGameDTO);
        }
        /**
         * 显示牌
         * @param openResultDTO
         */


        openResult(openResultDTO) {
          console.log("OpenResult:" + JSON.stringify(openResultDTO));
          this.onOpenResult(openResultDTO);
        }
        /**
         * 确认颜色
         * @param confirmColorDTO
         */


        confirmColor(confirmColorDTO) {
          console.log("ConfirmColor:" + JSON.stringify(confirmColorDTO));
          this.onConfirmColor(confirmColorDTO);
        }
        /**
         * 操作通知
         * @param operationNotifyDTO
         */


        operationNotify(operationNotifyDTO) {
          console.log("OperationNotify:" + JSON.stringify(operationNotifyDTO));
          this.onOperationNotify(operationNotifyDTO);
        }
        /**
         * 移动结果
         * @param moveResultDTO
         */


        moveResult(moveResultDTO) {
          console.log("MoveResult:" + JSON.stringify(moveResultDTO));
          this.onMoveResult(moveResultDTO);
        }
        /**
         * 游戏结束
         * @param endGameDTO
         */


        endGame(endGameDTO) {
          console.log("EndGame:" + JSON.stringify(endGameDTO));
          this.onEndGame(endGameDTO);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7b6d72d2e75e8339120512ad8c79a8791d7f2ee6.js.map