System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, GameEngine, AiPlayer, FireKit, Config, GameEvent, OpenCardDTO, PlayerManager, MoveCardDTO, AiEngine, ActionScore, _crd;

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
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
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

      _cclegacy._RF.push({}, "85164dTSgVLj6kTwPfY5kpp", "AiEngine", undefined);

      /**
       * AI 引擎
       */
      _export("default", AiEngine = class AiEngine {
        /**
         * 游戏引擎
         */

        /**
         * AI的起始ID
         */

        /**
         * AI玩家列表
         */

        /**
         * Chair -> ID
         */

        /**
         * Chair -> Color
         */

        /**
         * 当前的牌
         */
        constructor(engine) {
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
            this.cards = startGameVO.cards; //初始化牌

            let aiPlayer = this.ais[this.chairIds[startGameVO.chair]];

            if (aiPlayer != null) {
              //如果当前操作玩家是机器人
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
            let chair = operationNotifyVO.chair;
            let aiPlayer = this.ais[this.chairIds[chair]];
            console.log('当前应该操作的chair:', chair);

            if (aiPlayer != null) {
              //如果当前操作玩家是机器人
              // 获取自己的花色
              let color = this.chairColors[chair];
              let myCards = [];
              this.cards.forEach((v, i) => {
                if (v >> 4 == color) {
                  // 自己的牌
                  myCards[v] = i;
                }
              });
              let actions = []; // 所有运行的动作

              if (this.darkLength().length > 0) {
                // 操作列表
                actions.push(new ActionScore(100, this.openAction, chair));
              }

              for (let card in myCards) {
                let index = myCards[card]; //索引

                let row = Math.floor(index / 4);
                let col = index % 4;
                let neighbors = [];

                if (row < 3) {
                  // 获取邻居的下标
                  neighbors.push((row + 1) * 4 + col); // 下
                }

                if (row > 0) {
                  neighbors.push((row - 1) * 4 + col); // 上
                }

                if (col < 3) {
                  neighbors.push(row * 4 + col + 1); // 右
                }

                if (col > 0) {
                  neighbors.push(row * 4 + col - 1); // 左
                }

                neighbors.forEach(v => {
                  if (this._engine.canMove(index, v, this.cards)) {
                    //如果能够移动
                    let fromV = this.cards[index] & 0x0F;
                    let toV = this.cards[v] & 0x0F;
                    let fromC = this.cards[index] >> 4;
                    let toC = this.cards[v] >> 4;

                    if (toC == (_crd && GameEngine === void 0 ? (_reportPossibleCrUseOfGameEngine({
                      error: Error()
                    }), GameEngine) : GameEngine).NONE) {
                      actions.push(new ActionScore(90, this.moveAction, chair, index, v));
                    } else {
                      if (fromV == 7 && toV == 0) {
                        actions.push(new ActionScore(0, this.moveAction, chair, index, v));
                      } else if (fromV == 0 && toV == 7) {
                        actions.push(new ActionScore(200, this.moveAction, chair, index, v));
                      } else {
                        if (fromV - toV > 0) {
                          // 能吃
                          actions.push(new ActionScore(99 + toV + fromV - toV, this.moveAction, chair, index, v));
                        } else {
                          // 不能吃
                          actions.push(new ActionScore(99 - fromV, this.moveAction, chair, index, v));
                        }
                      }
                    }
                  }
                });
              }

              console.log('机器人操作的actions', actions);
              let action = actions.sort((a, b) => {
                return a.score - b.score;
              })[0];
              console.log('action', action); // let action = _.sortBy(actions, (a) => { // 按照分数排序
              //     return 0 - a.score;
              // })[0];

              action.func.apply(this, action.args);
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
            let darkCards = this.darkLength(); // 获取未打开的牌下标

            if (darkCards.length > 0) {
              this.runAction(() => {
                const shuffleIndex = this.darkLength()[0];
                console.log('机器人打开的index位置:', shuffleIndex);

                this._engine.open(new (_crd && OpenCardDTO === void 0 ? (_reportPossibleCrUseOfOpenCardDTO({
                  error: Error()
                }), OpenCardDTO) : OpenCardDTO)(chair, shuffleIndex));
              });
            }
          };

          this.moveAction = (chair, fromIndex, toIndex) => {
            this.runAction(() => {
              this._engine.move(new (_crd && MoveCardDTO === void 0 ? (_reportPossibleCrUseOfMoveCardDTO({
                error: Error()
              }), MoveCardDTO) : MoveCardDTO)(chair, fromIndex, toIndex)); //移动操作

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
         * 初始化事件订阅
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
         * 坐下
         * @param sitDownVO
         */


        shuffle(darkCards) {
          darkCards.sort(function () {
            return Math.random() - 0.5;
          });
          return this.cards;
        }
        /**
         * 获取未打开的牌
         */


        darkLength() {
          let darkCards = []; // 获取未打开的牌下标

          for (const key in this.cards) {
            if (Object.prototype.hasOwnProperty.call(this.cards, key)) {
              const element = this.cards[key];
              if (element == (_crd && GameEngine === void 0 ? (_reportPossibleCrUseOfGameEngine({
                error: Error()
              }), GameEngine) : GameEngine).DARK_CARD) darkCards.push(key);
            }
          }

          darkCards.sort(function () {
            return Math.random() - 0.5;
          });
          return darkCards;
        }
        /**
         * 移动操作
         * @param chair
         * @param fromIndex
         * @param toIndex
         */


        /**
         * 创建个AI玩家
         */
        createAiPlayer() {
          let aiPlayer = (_crd && PlayerManager === void 0 ? (_reportPossibleCrUseOfPlayerManager({
            error: Error()
          }), PlayerManager) : PlayerManager).inst().create(new (_crd && AiPlayer === void 0 ? (_reportPossibleCrUseOfAiPlayer({
            error: Error()
          }), AiPlayer) : AiPlayer)(this.id++, "Ai-" + this.id));
          this.ais[aiPlayer.userId] = aiPlayer;

          this._engine.enter(aiPlayer);
        }

      });
      /**
       * 操作评分
       */


      ActionScore = class ActionScore {
        /**
         * 分数
         */

        /**
         * 函数
         */

        /**
         * 参数
         */
        constructor(score, func, ...args) {
          this.score = void 0;
          this.func = void 0;
          this.args = [];
          this.score = score;
          this.func = func;
          this.args = args;
        }

      };

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4770f417ab34f2983be6f6ebb6c2ef1ed56d2b12.js.map