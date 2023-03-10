System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, SitDownDTO, StartGameDTO, OperationNotifyDTO, MoveResultDTO, OpenResultDTO, EndGameDTO, ConfirmColorDTO, FireKit, Config, AiEngine, GameEngine, _crd;

  function _reportPossibleCrUseOfPlayer(extras) {
    _reporterNs.report("Player", "./Player", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSitDownDTO(extras) {
    _reporterNs.report("SitDownDTO", "./dto/SitDownDTO", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStartGameDTO(extras) {
    _reporterNs.report("StartGameDTO", "./dto/StartGameDTO", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOpenCardDTO(extras) {
    _reporterNs.report("OpenCardDTO", "./dto/OpenCardDTO", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOperationNotifyDTO(extras) {
    _reporterNs.report("OperationNotifyDTO", "./dto/OperationNotifyDTO", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMoveCardDTO(extras) {
    _reporterNs.report("MoveCardDTO", "./dto/MoveCardDTO", _context.meta, extras);
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

  function _reportPossibleCrUseOfFireKit(extras) {
    _reporterNs.report("FireKit", "./fire/FireKit", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConfig(extras) {
    _reporterNs.report("Config", "./Config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAiEngine(extras) {
    _reporterNs.report("AiEngine", "./AiEngine", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      SitDownDTO = _unresolved_2.default;
    }, function (_unresolved_3) {
      StartGameDTO = _unresolved_3.default;
    }, function (_unresolved_4) {
      OperationNotifyDTO = _unresolved_4.default;
    }, function (_unresolved_5) {
      MoveResultDTO = _unresolved_5.default;
    }, function (_unresolved_6) {
      OpenResultDTO = _unresolved_6.default;
    }, function (_unresolved_7) {
      EndGameDTO = _unresolved_7.default;
    }, function (_unresolved_8) {
      ConfirmColorDTO = _unresolved_8.default;
    }, function (_unresolved_9) {
      FireKit = _unresolved_9.default;
    }, function (_unresolved_10) {
      Config = _unresolved_10.default;
    }, function (_unresolved_11) {
      AiEngine = _unresolved_11.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bd82escPn9NDLqKGnQMNaUl", "GameEngine", undefined);

      /**
       * ????????????
       */
      _export("default", GameEngine = class GameEngine {
        /**
         * ???????????????
         */

        /**
         * ??????????????????
         */

        /**
         * ????????????
         */

        /**
         * ????????????????????????
         */

        /**
         * ??????
         */

        /**
         * ??????
         */

        /**
         * ?????????????????????
         */

        /**
         * ?????????????????????
         */

        /**
         * ???????????????
         */

        /**
         * ???????????????
         */

        /**
         * ?????????????????????
         */

        /**
         * ??????????????????????????????
         */

        /**
         * ??????????????????
         */

        /**
         * ??????????????????
         */

        /**
         * ????????????????????? 0 / 1
         */

        /**
         * AI ??????
         */
        constructor() {
          this.players = {};
          this.chairColors = {};
          this.cards = [// ???    ???    ???    ???    ???    ???    ???    ???
          0x00, 0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, // ??????
          0x10, 0x11, 0x12, 0x13, 0x14, 0x15, 0x16, 0x17 // ??????
          ];
          this.currCards = [GameEngine.DARK_CARD, GameEngine.DARK_CARD, GameEngine.DARK_CARD, GameEngine.DARK_CARD, GameEngine.DARK_CARD, GameEngine.DARK_CARD, GameEngine.DARK_CARD, GameEngine.DARK_CARD, GameEngine.DARK_CARD, GameEngine.DARK_CARD, GameEngine.DARK_CARD, GameEngine.DARK_CARD, GameEngine.DARK_CARD, GameEngine.DARK_CARD, GameEngine.DARK_CARD, GameEngine.DARK_CARD];
          this.currChair = void 0;
          this._aiEngine = void 0;
          (_crd && FireKit === void 0 ? (_reportPossibleCrUseOfFireKit({
            error: Error()
          }), FireKit) : FireKit).init((_crd && Config === void 0 ? (_reportPossibleCrUseOfConfig({
            error: Error()
          }), Config) : Config).HUMAN_FIRE);
          (_crd && FireKit === void 0 ? (_reportPossibleCrUseOfFireKit({
            error: Error()
          }), FireKit) : FireKit).init((_crd && Config === void 0 ? (_reportPossibleCrUseOfConfig({
            error: Error()
          }), Config) : Config).AI_FIRE);
          this._aiEngine = new (_crd && AiEngine === void 0 ? (_reportPossibleCrUseOfAiEngine({
            error: Error()
          }), AiEngine) : AiEngine)(this); //?????????AI??????
        }
        /**
         * ??????????????????
         * @param player
         */


        enter(player) {
          var chair = this.assignChair(); // ????????????

          if (chair != GameEngine.INVALID_CHAIR) {
            // ??????????????????????????????
            this.players[chair] = player;
            this.sendSitDown(chair, player);

            if (this.assignChair() != GameEngine.INVALID_CHAIR) {
              //???????????????????????????
              this._aiEngine.createAiPlayer();
            } else {
              // ????????????
              this.startGame(); //????????????
            }
          }
        }
        /**
         * ????????????
         */


        startGame() {
          this.cards = this.shuffle();
          this.currChair = Math.floor(Math.random() * 1 + GameEngine.MAX_CHAIR); //???????????????????????????  

          console.log('??????????????????currChair:', this.currChair);
          this.sendStartGame();
        }
        /**
         * ??????????????????
         */


        sendStartGame() {
          for (var _key in this.players) {
            this.players[_key].startGame(new (_crd && StartGameDTO === void 0 ? (_reportPossibleCrUseOfStartGameDTO({
              error: Error()
            }), StartGameDTO) : StartGameDTO)(this.currChair, this.currCards));
          }
        }
        /**
         * ??????????????????????????????????????????
         * @param chair
         * @param player
         */


        sendSitDown(chair, player) {
          for (var _key2 in this.players) {
            this.players[_key2].sitDown(new (_crd && SitDownDTO === void 0 ? (_reportPossibleCrUseOfSitDownDTO({
              error: Error()
            }), SitDownDTO) : SitDownDTO)(player.userId, chair, player.name));
          }
        }
        /**
         * ???????????????
         * @param chair
         * @param index
         * @param card
         */


        sendOpenResult(chair, index, card) {
          for (var _key3 in this.players) {
            console.log('????????????????????? ?????????????????? chair:', chair, ' ,index:', index, ' ,card:', card);

            this.players[_key3].openResult(new (_crd && OpenResultDTO === void 0 ? (_reportPossibleCrUseOfOpenResultDTO({
              error: Error()
            }), OpenResultDTO) : OpenResultDTO)(chair, index, card));
          }
        }
        /**
         * ??????????????????
         * @param chair
         * @param fromIndex
         * @param fromCard
         * @param toIndex
         * @param toCard
         * @param result
         */


        sendMoveResult(chair, fromIndex, fromCard, toIndex, toCard, result) {
          for (var _key4 in this.players) {
            this.players[_key4].moveResult(new (_crd && MoveResultDTO === void 0 ? (_reportPossibleCrUseOfMoveResultDTO({
              error: Error()
            }), MoveResultDTO) : MoveResultDTO)(chair, fromIndex, fromCard, toIndex, toCard, result));
          }
        }
        /**
         * ????????????????????????
         */


        sendOperationNotify() {
          this.currChair = this.nextChair(); // ??????????????????????????????

          for (var _key5 in this.players) {
            this.players[_key5].operationNotify(new (_crd && OperationNotifyDTO === void 0 ? (_reportPossibleCrUseOfOperationNotifyDTO({
              error: Error()
            }), OperationNotifyDTO) : OperationNotifyDTO)(this.currChair));
          }
        }
        /**
         * ????????????????????????
         */


        sendEndGame() {
          var c = this.checkWin(); // ???????????????

          var chair;

          for (var k in this.chairColors) {
            if (this.chairColors[k] == c) {
              chair = parseInt(k);
            }
          }

          for (var _key6 in this.players) {
            this.players[_key6].endGame(new (_crd && EndGameDTO === void 0 ? (_reportPossibleCrUseOfEndGameDTO({
              error: Error()
            }), EndGameDTO) : EndGameDTO)(chair, c));
          }
        }
        /**
         * ????????????
         */


        sendConfirmColor(chair, color) {
          for (var _key7 in this.players) {
            this.players[_key7].confirmColor(new (_crd && ConfirmColorDTO === void 0 ? (_reportPossibleCrUseOfConfirmColorDTO({
              error: Error()
            }), ConfirmColorDTO) : ConfirmColorDTO)(chair, color));
          }
        }
        /**
         * ??????
         * @param openCardDTO
         */


        open(openCardDTO) {
          console.log("OpenCard:" + JSON.stringify(openCardDTO));
          var chair = openCardDTO.chair;
          var index = openCardDTO.index;

          if (chair != this.currChair) {
            console.log("????????????.");
            return;
          }

          if (this.currCards[index] == GameEngine.DARK_CARD) {
            var card = this.cards[index];
            var length = Object.keys(this.chairColors).length;

            if (length == 0) {
              //????????????
              for (var i = 0; i < GameEngine.MAX_CHAIR; i++) {
                if (i == chair) {
                  this.chairColors[chair] = card >> 4;
                  this.sendConfirmColor(chair, card >> 4);
                } else {
                  this.chairColors[i] = GameEngine.RED ? GameEngine.BLUE : GameEngine.RED;
                  this.sendConfirmColor(i, card >> 4 == GameEngine.RED ? GameEngine.BLUE : GameEngine.RED);
                }
              }
            }

            this.currCards[index] = card;
            this.sendOpenResult(chair, index, this.currCards[index]);

            if (this.checkWin() != -1) {
              this.sendEndGame();
            } else {
              setTimeout(() => {
                this.sendOperationNotify();
              }, 1000);
            }
          }
        }
        /**
         * ?????????
         * @param moveCardDTO
         */


        move(moveCardDTO) {
          console.log("MoveCard:" + JSON.stringify(moveCardDTO));
          var fromIndex = moveCardDTO.fromIndex;
          var toIndex = moveCardDTO.toIndex;
          var fromCard = this.currCards[fromIndex]; // ??????????????????

          var toCard = this.currCards[toIndex]; // ?????????????????????

          var fromV = fromCard & 0x0F;
          var nextV = toCard & 0x0F;
          var fromC = fromCard >> 4;
          var toC = toCard >> 4;

          if (fromC > 1 || toC == GameEngine.DARK_CARD >> 4) {
            // ????????????????????????????????????????????????????????????????????????
            console.log("????????????");
            return;
          }

          this.currCards[fromIndex] = GameEngine.NONE_CARD; // ?????????????????????

          if (toC == GameEngine.NONE_CARD >> 4) {
            // ?????????????????????
            this.currCards[toIndex] = fromCard;
          } else {
            // ????????????
            if (fromV > nextV) {
              if (fromV == 7 && nextV == 0) {
                // ?????? ??? ??????
                this.currCards[toIndex] = toCard;
              } else {
                this.currCards[toIndex] = fromCard;
              }
            }

            if (fromV == nextV) {
              this.currCards[toIndex] = GameEngine.NONE_CARD;
            }

            if (fromV < nextV) {
              if (fromV == 0 && nextV == 7) {
                // ?????? ??? ??????
                this.currCards[toIndex] = fromCard;
              } else {
                this.currCards[toIndex] = toCard;
              }
            }
          }

          var result;

          if (this.currCards[toIndex] == GameEngine.NONE_CARD) {
            result = 0;
          } else if (this.currCards[toIndex] == fromCard) {
            result = 1;
          } else {
            result = -1;
          }

          this.sendMoveResult(moveCardDTO.chair, fromIndex, this.currCards[fromIndex], toIndex, this.currCards[toIndex], result);

          if (this.checkWin() != -1) {
            this.sendEndGame();
          } else {
            this.sendOperationNotify();
          }
        }
        /**
         * ????????????????????????
         */


        checkWin() {
          if (this.currCards.indexOf(GameEngine.DARK_CARD) == -1) {
            var blueC = 0;
            var redC = 0;
            this.currCards.forEach(v => {
              if (v != GameEngine.NONE_CARD) {
                if (v >> 4 == 0) {
                  blueC++;
                } else {
                  redC++;
                }
              }
            });

            if (blueC == 0) {
              return GameEngine.RED; // ??????
            }

            if (redC == 0) {
              return GameEngine.BLUE; // ??????
            }
          }

          return -1;
        }
        /**
         *  ?????????????????????
         */


        shuffle() {
          this.cards.sort(function () {
            return Math.random() - 0.5;
          });
          return this.cards;
        }
        /**
         * ????????????
         */


        assignChair() {
          for (var i = 0; i < GameEngine.MAX_CHAIR; i++) {
            if (this.players[i] == null) {
              return i;
            }
          }

          return GameEngine.INVALID_CHAIR;
        }
        /**
         * ??????????????????????????????
         */


        nextChair() {
          return (this.currChair + 1) % GameEngine.MAX_CHAIR;
        }
        /**
         * ??????????????????
         * @param from  ??????
         * @param to    ??????
         * @param cards ???
         */


        canMove(from, to, cards) {
          var iRow = Math.floor(from / 4);
          var iCol = from % 4;
          var jRow = Math.floor(to / 4);
          var jCol = to % 4;

          if (cards[from] == GameEngine.DARK_CARD || cards[to] == GameEngine.DARK_CARD || cards[from] >> 4 == cards[to] >> 4) {
            return false;
          }

          return iRow == jRow && Math.abs(iCol - jCol) == 1 || iCol == jCol && Math.abs(iRow - jRow) == 1;
        }

      });

      GameEngine.MAX_CARD = 16;
      GameEngine.MAX_CHAIR = 2;
      GameEngine.NONE_CARD = 0xF0;
      GameEngine.DARK_CARD = 0xE0;
      GameEngine.BLUE = 0x00;
      GameEngine.RED = 0x01;
      GameEngine.DARK = 0x0E;
      GameEngine.NONE = 0x0F;
      GameEngine.INVALID_CHAIR = 0xFF;
      GameEngine.INVALID_INDEX = 0xFF;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3a2eb61a0a38cb34af2f90823f2c6dc012418d7b.js.map