System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, GameEngine, AiPlayer, FireKit, Config, GameEvent, OpenCardDTO, PlayerManager, MoveCardDTO, AiEngine, ActionScore, _crd;

  function _reportPossibleCrUseOfGameEngine(extras) {
    _reporterNs.report("GameEngine", "./GameEngine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAiPlayer(extras) {
    _reporterNs.report("AiPlayer", "./AiPlayer", _context.meta, extras);
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

  function _reportPossibleCrUseOfStartGameVO(extras) {
    _reporterNs.report("StartGameVO", "./vo/StartGameVO", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOpenCardDTO(extras) {
    _reporterNs.report("OpenCardDTO", "./dto/OpenCardDTO", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSitDownVO(extras) {
    _reporterNs.report("SitDownVO", "./vo/SitDownVO", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerManager(extras) {
    _reporterNs.report("PlayerManager", "./PlayerManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOpenResultVO(extras) {
    _reporterNs.report("OpenResultVO", "./vo/OpenResultVO", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOperationNotifyVO(extras) {
    _reporterNs.report("OperationNotifyVO", "./vo/OperationNotifyVO", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMoveResultVO(extras) {
    _reporterNs.report("MoveResultVO", "./vo/MoveResultVO", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEndGameVO(extras) {
    _reporterNs.report("EndGameVO", "./vo/EndGameVO", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConfirmColorVO(extras) {
    _reporterNs.report("ConfirmColorVO", "./vo/ConfirmColorVO", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMoveCardDTO(extras) {
    _reporterNs.report("MoveCardDTO", "./dto/MoveCardDTO", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_unresolved_2) {
      GameEngine = _unresolved_2.default;
    }, function (_unresolved_3) {
      AiPlayer = _unresolved_3.default;
    }, function (_unresolved_4) {
      FireKit = _unresolved_4.default;
    }, function (_unresolved_5) {
      Config = _unresolved_5.default;
    }, function (_unresolved_6) {
      GameEvent = _unresolved_6.default;
    }, function (_unresolved_7) {
      OpenCardDTO = _unresolved_7.default;
    }, function (_unresolved_8) {
      PlayerManager = _unresolved_8.default;
    }, function (_unresolved_9) {
      MoveCardDTO = _unresolved_9.default;
    }],
    execute: function () {
      _crd = true;

      /**
       * AI ??????
       */
      _export("default", AiEngine = class AiEngine {
        /**
         * ????????????
         */

        /**
         * AI?????????ID
         */

        /**
         * AI????????????
         */

        /**
         * Chair -> ID
         */

        /**
         * Chair -> Color
         */

        /**
         * ????????????
         */
        constructor(engine) {
          var _this = this;

          this._engine = void 0;
          this.id = 2001;
          this.ais = {};
          this.chairIds = {};
          this.chairColors = {};
          this.cards = void 0;

          this.sitDownAiLogic = sitDownVO => {
            this.chairIds[sitDownVO.chair] = sitDownVO.userId;
          };

          this.startGameAiLogic = startGameVO => {
            this.cards = startGameVO.cards; //????????????

            var aiPlayer = this.ais[this.chairIds[startGameVO.chair]];

            if (aiPlayer != null) {
              //????????????????????????????????????
              this.openAction(startGameVO.chair);
            }
          };

          this.openResultAiLogic = openResultVO => {
            this.cards[openResultVO.index] = openResultVO.card;
          };

          this.confirmColorAiLogic = confirmColorVO => {
            this.chairColors[confirmColorVO.chair] = confirmColorVO.color;
          };

          this.operationNotifyAiLogic = operationNotifyVO => {
            var chair = operationNotifyVO.chair;
            var aiPlayer = this.ais[this.chairIds[chair]];

            if (aiPlayer != null) {
              (function () {
                //????????????????????????????????????
                // ?????????????????????
                var color = _this.chairColors[chair];
                var myCards = [];

                _this.cards.forEach((v, i) => {
                  if (v >> 4 == color) {
                    // ????????????
                    myCards[v] = i;
                  }
                });

                var actions = []; // ?????????????????????

                if (_this.darkLength().length > 0) {
                  // ????????????
                  actions.push(new ActionScore(100, _this.openAction, chair));
                }

                var _loop = function _loop(_card) {
                  var index = myCards[_card]; //??????

                  var row = Math.floor(index / 4);
                  var col = index % 4;
                  var neighbors = [];

                  if (row < 3) {
                    // ?????????????????????
                    neighbors.push((row + 1) * 4 + col); // ???
                  }

                  if (row > 0) {
                    neighbors.push((row - 1) * 4 + col); // ???
                  }

                  if (col < 3) {
                    neighbors.push(row * 4 + col + 1); // ???
                  }

                  if (col > 0) {
                    neighbors.push(row * 4 + col - 1); // ???
                  }

                  neighbors.forEach(v => {
                    if (_this._engine.canMove(index, v, _this.cards)) {
                      //??????????????????
                      var fromV = _this.cards[index] & 0x0F;
                      var toV = _this.cards[v] & 0x0F;
                      var fromC = _this.cards[index] >> 4;
                      var toC = _this.cards[v] >> 4;

                      if (toC == (_crd && GameEngine === void 0 ? (_reportPossibleCrUseOfGameEngine({
                        error: Error()
                      }), GameEngine) : GameEngine).NONE) {
                        actions.push(new ActionScore(90, _this.moveAction, chair, index, v));
                      } else {
                        if (fromV == 7 && toV == 0) {
                          actions.push(new ActionScore(0, _this.moveAction, chair, index, v));
                        } else if (fromV == 0 && toV == 7) {
                          actions.push(new ActionScore(200, _this.moveAction, chair, index, v));
                        } else {
                          if (fromV - toV > 0) {
                            // ??????
                            actions.push(new ActionScore(99 + toV + fromV - toV, _this.moveAction, chair, index, v));
                          } else {
                            // ?????????
                            actions.push(new ActionScore(99 - fromV, _this.moveAction, chair, index, v));
                          }
                        }
                      }
                    }
                  });
                };

                for (var _card in myCards) {
                  _loop(_card);
                }

                var action = actions.sort((a, b) => {
                  return a.score - b.score;
                })[0]; // let action = _.sortBy(actions, (a) => { // ??????????????????
                //     return 0 - a.score;
                // })[0];

                action.func.apply(_this, action.args);
              })();
            }
          };

          this.moveResultAiLogic = moveResultVO => {
            this.cards[moveResultVO.fromIndex] = moveResultVO.fromCard;
            this.cards[moveResultVO.toIndex] = moveResultVO.toCard;
          };

          this.endGameAiLogic = endGameVO => {
            console.log("==========AI GAME END==========");
            (_crd && FireKit === void 0 ? (_reportPossibleCrUseOfFireKit({
              error: Error()
            }), FireKit) : FireKit).use((_crd && Config === void 0 ? (_reportPossibleCrUseOfConfig({
              error: Error()
            }), Config) : Config).AI_FIRE).offGroup(this);
          };

          this.openAction = chair => {
            var darkCards = this.darkLength(); // ???????????????????????????

            if (darkCards.length > 0) {
              this.runAction(() => {
                // this._engine.open(new OpenCardDTO(chair, _.shuffle(darkCards)[0])); //?????????????????????
                this._engine.open(new (_crd && OpenCardDTO === void 0 ? (_reportPossibleCrUseOfOpenCardDTO({
                  error: Error()
                }), OpenCardDTO) : OpenCardDTO)(chair, this.shuffle(darkCards)[0]));
              });
            }
          };

          this.moveAction = (chair, fromIndex, toIndex) => {
            this.runAction(() => {
              this._engine.move(new (_crd && MoveCardDTO === void 0 ? (_reportPossibleCrUseOfMoveCardDTO({
                error: Error()
              }), MoveCardDTO) : MoveCardDTO)(chair, fromIndex, toIndex)); //????????????

            });
          };

          this.runAction = action => {
            setTimeout(() => {
              action();
            }, Math.floor(Math.random() * 200 + 300));
          };

          this._engine = engine;
          this.initFire();
        }
        /**
         * ?????????????????????
         */


        initFire() {
          (_crd && FireKit === void 0 ? (_reportPossibleCrUseOfFireKit({
            error: Error()
          }), FireKit) : FireKit).use((_crd && Config === void 0 ? (_reportPossibleCrUseOfConfig({
            error: Error()
          }), Config) : Config).AI_FIRE).onGroup((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).SIT_DOWN, this.sitDownAiLogic, this);
          (_crd && FireKit === void 0 ? (_reportPossibleCrUseOfFireKit({
            error: Error()
          }), FireKit) : FireKit).use((_crd && Config === void 0 ? (_reportPossibleCrUseOfConfig({
            error: Error()
          }), Config) : Config).AI_FIRE).onGroup((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).START_GAME, this.startGameAiLogic, this);
          (_crd && FireKit === void 0 ? (_reportPossibleCrUseOfFireKit({
            error: Error()
          }), FireKit) : FireKit).use((_crd && Config === void 0 ? (_reportPossibleCrUseOfConfig({
            error: Error()
          }), Config) : Config).AI_FIRE).onGroup((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).OPEN_RESULT, this.openResultAiLogic, this);
          (_crd && FireKit === void 0 ? (_reportPossibleCrUseOfFireKit({
            error: Error()
          }), FireKit) : FireKit).use((_crd && Config === void 0 ? (_reportPossibleCrUseOfConfig({
            error: Error()
          }), Config) : Config).AI_FIRE).onGroup((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).CONFIRM_COLOR, this.confirmColorAiLogic, this);
          (_crd && FireKit === void 0 ? (_reportPossibleCrUseOfFireKit({
            error: Error()
          }), FireKit) : FireKit).use((_crd && Config === void 0 ? (_reportPossibleCrUseOfConfig({
            error: Error()
          }), Config) : Config).AI_FIRE).onGroup((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).OPERATION_NOTIFY, this.operationNotifyAiLogic, this);
          (_crd && FireKit === void 0 ? (_reportPossibleCrUseOfFireKit({
            error: Error()
          }), FireKit) : FireKit).use((_crd && Config === void 0 ? (_reportPossibleCrUseOfConfig({
            error: Error()
          }), Config) : Config).AI_FIRE).onGroup((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).MOVE_RESULT, this.moveResultAiLogic, this);
          (_crd && FireKit === void 0 ? (_reportPossibleCrUseOfFireKit({
            error: Error()
          }), FireKit) : FireKit).use((_crd && Config === void 0 ? (_reportPossibleCrUseOfConfig({
            error: Error()
          }), Config) : Config).AI_FIRE).onGroup((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).END_GAME, this.endGameAiLogic, this);
        }
        /**
         * ??????
         * @param sitDownVO
         */


        shuffle(darkCards) {
          darkCards.sort(function () {
            return Math.random() - 0.5;
          });
          return this.cards;
        }
        /**
         * ?????????????????????
         */


        darkLength() {
          var darkCards = []; // ???????????????????????????

          this.cards.forEach((v, i) => {
            if (v == (_crd && GameEngine === void 0 ? (_reportPossibleCrUseOfGameEngine({
              error: Error()
            }), GameEngine) : GameEngine).DARK_CARD) {
              darkCards.push(i);
            }
          });
          return darkCards;
        }
        /**
         * ????????????
         * @param chair
         * @param fromIndex
         * @param toIndex
         */


        /**
         * ?????????AI??????
         */
        createAiPlayer() {
          var aiPlayer = (_crd && PlayerManager === void 0 ? (_reportPossibleCrUseOfPlayerManager({
            error: Error()
          }), PlayerManager) : PlayerManager).inst().create(new (_crd && AiPlayer === void 0 ? (_reportPossibleCrUseOfAiPlayer({
            error: Error()
          }), AiPlayer) : AiPlayer)(this.id++, "Ai-" + this.id));
          this.ais[aiPlayer.userId] = aiPlayer;

          this._engine.enter(aiPlayer);
        }

      });
      /**
       * ????????????
       */


      ActionScore = class ActionScore {
        /**
         * ??????
         */

        /**
         * ??????
         */

        /**
         * ??????
         */
        constructor(score, func) {
          this.score = void 0;
          this.func = void 0;
          this.args = [];
          this.score = score;
          this.func = func;

          for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
            args[_key - 2] = arguments[_key];
          }

          this.args = args;
        }

      };
      _crd = false;
    }
  };
});
//# sourceMappingURL=01c5af9eed42d056ffce8ec1bb1f38127d30e0b7.js.map