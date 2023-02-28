System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Player, FireKit, Config, GameEvent, AiPlayer, _crd;

  function _reportPossibleCrUseOfPlayer(extras) {
    _reporterNs.report("Player", "./Player", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSitDownDTO(extras) {
    _reporterNs.report("SitDownDTO", "./dto/SitDownDTO", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFireKit(extras) {
    _reporterNs.report("FireKit", "./fire/FireKit", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConfig(extras) {
    _reporterNs.report("Config", "./Config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameEvent(extras) {
    _reporterNs.report("GameEvent", "./GameEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStartGameDTO(extras) {
    _reporterNs.report("StartGameDTO", "./dto/StartGameDTO", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSitDownVO(extras) {
    _reporterNs.report("SitDownVO", "./vo/SitDownVO", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStartGameVO(extras) {
    _reporterNs.report("StartGameVO", "./vo/StartGameVO", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOperationNotifyDTO(extras) {
    _reporterNs.report("OperationNotifyDTO", "./dto/OperationNotifyDTO", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOperationNotifyVO(extras) {
    _reporterNs.report("OperationNotifyVO", "./vo/OperationNotifyVO", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOpenResultDTO(extras) {
    _reporterNs.report("OpenResultDTO", "./dto/OpenResultDTO", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMoveResultDTO(extras) {
    _reporterNs.report("MoveResultDTO", "./dto/MoveResultDTO", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOpenResultVO(extras) {
    _reporterNs.report("OpenResultVO", "./vo/OpenResultVO", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMoveResultVO(extras) {
    _reporterNs.report("MoveResultVO", "./vo/MoveResultVO", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEndGameDTO(extras) {
    _reporterNs.report("EndGameDTO", "./dto/EndGameDTO", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEndGameVO(extras) {
    _reporterNs.report("EndGameVO", "./vo/EndGameVO", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConfirmColorDTO(extras) {
    _reporterNs.report("ConfirmColorDTO", "./dto/ConfirmColorDTO", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConfirmColorVO(extras) {
    _reporterNs.report("ConfirmColorVO", "./vo/ConfirmColorVO", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      Player = _unresolved_2.default;
    }, function (_unresolved_3) {
      FireKit = _unresolved_3.default;
    }, function (_unresolved_4) {
      Config = _unresolved_4.default;
    }, function (_unresolved_5) {
      GameEvent = _unresolved_5.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5e7f0tNqTlHHaLVlmZRWbrR", "AiPlayer", undefined);

      /**
       * AI 玩家
       */
      _export("default", AiPlayer = class AiPlayer extends (_crd && Player === void 0 ? (_reportPossibleCrUseOfPlayer({
        error: Error()
      }), Player) : Player) {
        constructor(userId, name) {
          super(userId, name);
          this.ai = true;
        }

        onSitDown(sitDownDTO) {
          (_crd && FireKit === void 0 ? (_reportPossibleCrUseOfFireKit({
            error: Error()
          }), FireKit) : FireKit).use((_crd && Config === void 0 ? (_reportPossibleCrUseOfConfig({
            error: Error()
          }), Config) : Config).AI_FIRE).emit((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).SIT_DOWN, sitDownDTO);
        }

        onStartGame(startGameDTO) {
          (_crd && FireKit === void 0 ? (_reportPossibleCrUseOfFireKit({
            error: Error()
          }), FireKit) : FireKit).use((_crd && Config === void 0 ? (_reportPossibleCrUseOfConfig({
            error: Error()
          }), Config) : Config).AI_FIRE).emit((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).START_GAME, startGameDTO);
        }

        onOpenResult(openResultDTO) {
          (_crd && FireKit === void 0 ? (_reportPossibleCrUseOfFireKit({
            error: Error()
          }), FireKit) : FireKit).use((_crd && Config === void 0 ? (_reportPossibleCrUseOfConfig({
            error: Error()
          }), Config) : Config).AI_FIRE).emit((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).OPEN_RESULT, openResultDTO);
        }

        onConfirmColor(confirmColorDTO) {
          (_crd && FireKit === void 0 ? (_reportPossibleCrUseOfFireKit({
            error: Error()
          }), FireKit) : FireKit).use((_crd && Config === void 0 ? (_reportPossibleCrUseOfConfig({
            error: Error()
          }), Config) : Config).AI_FIRE).emit((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).CONFIRM_COLOR, confirmColorDTO);
        }

        onOperationNotify(operationNotifyDTO) {
          (_crd && FireKit === void 0 ? (_reportPossibleCrUseOfFireKit({
            error: Error()
          }), FireKit) : FireKit).use((_crd && Config === void 0 ? (_reportPossibleCrUseOfConfig({
            error: Error()
          }), Config) : Config).AI_FIRE).emit((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).OPERATION_NOTIFY, operationNotifyDTO);
        }

        onMoveResult(moveResultDTO) {
          (_crd && FireKit === void 0 ? (_reportPossibleCrUseOfFireKit({
            error: Error()
          }), FireKit) : FireKit).use((_crd && Config === void 0 ? (_reportPossibleCrUseOfConfig({
            error: Error()
          }), Config) : Config).AI_FIRE).emit((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).MOVE_RESULT, moveResultDTO);
        }

        onEndGame(endGameDTO) {
          (_crd && FireKit === void 0 ? (_reportPossibleCrUseOfFireKit({
            error: Error()
          }), FireKit) : FireKit).use((_crd && Config === void 0 ? (_reportPossibleCrUseOfConfig({
            error: Error()
          }), Config) : Config).AI_FIRE).emit((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).END_GAME, endGameDTO);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6a5ab6999c8a2a8defb7be179b40e5169e056edf.js.map