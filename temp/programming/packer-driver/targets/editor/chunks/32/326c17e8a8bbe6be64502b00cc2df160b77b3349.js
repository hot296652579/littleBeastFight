System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Node, Button, Component, EventMgr, LogicEvent, UIScreen, Config, MoveCardDTO, OpenCardDTO, FireKit, GameEngine, GameEvent, HumanPlayer, PlayerManager, UICard, TweenUtil, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, UIBattle;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../Script/Base/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLogicEvent(extras) {
    _reporterNs.report("LogicEvent", "../../Script/Games/LogicEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIScreen(extras) {
    _reporterNs.report("UIScreen", "../../Script/UIFrame/UIFrom", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConfig(extras) {
    _reporterNs.report("Config", "./games/Config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMoveCardDTO(extras) {
    _reporterNs.report("MoveCardDTO", "./games/dto/MoveCardDTO", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOpenCardDTO(extras) {
    _reporterNs.report("OpenCardDTO", "./games/dto/OpenCardDTO", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFireKit(extras) {
    _reporterNs.report("FireKit", "./games/fire/FireKit", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameEngine(extras) {
    _reporterNs.report("GameEngine", "./games/GameEngine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameEvent(extras) {
    _reporterNs.report("GameEvent", "./games/GameEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHumanPlayer(extras) {
    _reporterNs.report("HumanPlayer", "./games/HumanPlayer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerManager(extras) {
    _reporterNs.report("PlayerManager", "./games/PlayerManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUICard(extras) {
    _reporterNs.report("UICard", "./games/UI/UICard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTweenUtil(extras) {
    _reporterNs.report("TweenUtil", "./games/utils/TweenUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConfirmColorVO(extras) {
    _reporterNs.report("ConfirmColorVO", "./games/vo/ConfirmColorVO", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMoveResultVO(extras) {
    _reporterNs.report("MoveResultVO", "./games/vo/MoveResultVO", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOpenResultVO(extras) {
    _reporterNs.report("OpenResultVO", "./games/vo/OpenResultVO", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOperationNotifyVO(extras) {
    _reporterNs.report("OperationNotifyVO", "./games/vo/OperationNotifyVO", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSitDownVO(extras) {
    _reporterNs.report("SitDownVO", "./games/vo/SitDownVO", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStartGameVO(extras) {
    _reporterNs.report("StartGameVO", "./games/vo/StartGameVO", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Node = _cc.Node;
      Button = _cc.Button;
      Component = _cc.Component;
    }, function (_unresolved_2) {
      EventMgr = _unresolved_2.default;
    }, function (_unresolved_3) {
      LogicEvent = _unresolved_3.LogicEvent;
    }, function (_unresolved_4) {
      UIScreen = _unresolved_4.UIScreen;
    }, function (_unresolved_5) {
      Config = _unresolved_5.default;
    }, function (_unresolved_6) {
      MoveCardDTO = _unresolved_6.default;
    }, function (_unresolved_7) {
      OpenCardDTO = _unresolved_7.default;
    }, function (_unresolved_8) {
      FireKit = _unresolved_8.default;
    }, function (_unresolved_9) {
      GameEngine = _unresolved_9.default;
    }, function (_unresolved_10) {
      GameEvent = _unresolved_10.default;
    }, function (_unresolved_11) {
      HumanPlayer = _unresolved_11.default;
    }, function (_unresolved_12) {
      PlayerManager = _unresolved_12.default;
    }, function (_unresolved_13) {
      UICard = _unresolved_13.default;
    }, function (_unresolved_14) {
      TweenUtil = _unresolved_14.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0aeaaVRuKhFS5y98dftB6pi", "UIBattle", undefined);

      __checkObsolete__(['_decorator', 'Node', 'Button', 'Component', 'TiledUserNodeData', 'Sprite', 'SpriteFrame']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("UIBattle", UIBattle = (_dec = ccclass('UIBattle'), _dec2 = property(Node), _dec3 = property({
        type: [Node]
      }), _dec(_class = (_class2 = class UIBattle extends (_crd && UIScreen === void 0 ? (_reportPossibleCrUseOfUIScreen({
        error: Error()
      }), UIScreen) : UIScreen) {
        constructor(...args) {
          super(...args);
          this._engine = void 0;
          this.cards = void 0;
          this.chairIds = {};
          this._meChair = void 0;
          this._meId = 1001;
          this._meColor = void 0;
          this._locked = true;
          this.fromIndex = (_crd && GameEngine === void 0 ? (_reportPossibleCrUseOfGameEngine({
            error: Error()
          }), GameEngine) : GameEngine).INVALID_INDEX;

          _initializerDefineProperty(this, "UIGames", _descriptor, this);

          this._iconMapping = {
            0x00: "蓝鼠",
            0x01: "蓝猫",
            0x02: "蓝狗",
            0x03: "蓝狼",
            0x04: "蓝豹",
            0x05: "蓝虎",
            0x06: "蓝狮",
            0x07: "蓝象",
            0x10: "红鼠",
            0x11: "红猫",
            0x12: "红狗",
            0x13: "红狼",
            0x14: "红豹",
            0x15: "红虎",
            0x16: "红狮",
            0x17: "红象"
          };
          this.isEngross = false;

          _initializerDefineProperty(this, "btnCards", _descriptor2, this);

          this.openResultLogic = openResultVO => {
            this.cards[openResultVO.index] = openResultVO.card;
            this.clearSelectStyle();
            this.updateOpenCard(openResultVO);
            this.updateAndSelectStyle(openResultVO.index);
            this.fromIndex = (_crd && GameEngine === void 0 ? (_reportPossibleCrUseOfGameEngine({
              error: Error()
            }), GameEngine) : GameEngine).INVALID_INDEX;
          };

          this.sitDownLogic = sitDownVO => {
            this.chairIds[sitDownVO.chair] = sitDownVO.userId;

            if (sitDownVO.userId == this._meId) {
              //如果是自己
              this._meChair = sitDownVO.chair;
            }
          };

          this.confirmColorLogic = confirmColorVO => {
            if (confirmColorVO.chair == this._meChair) {
              this._meColor = confirmColorVO.color;
              console.log('我方颜色:', this._meColor);
            }
          };

          this.operationNotifyLogic = operationNotifyVO => {
            this._locked = operationNotifyVO.chair != this._meChair;
          };

          this.moveResultLogic = moveResultVO => {
            this.cards[moveResultVO.fromIndex] = moveResultVO.fromCard;
            this.cards[moveResultVO.toIndex] = moveResultVO.toCard;
            this.updateStyle(moveResultVO.fromIndex, moveResultVO.fromCard);
            this.updateStyle(moveResultVO.toIndex, moveResultVO.toCard);

            if (this.cards[moveResultVO.toIndex] != (_crd && GameEngine === void 0 ? (_reportPossibleCrUseOfGameEngine({
              error: Error()
            }), GameEngine) : GameEngine).NONE_CARD) {
              this.updateAndSelectStyle(moveResultVO.toIndex);
            }

            this.fromIndex = (_crd && GameEngine === void 0 ? (_reportPossibleCrUseOfGameEngine({
              error: Error()
            }), GameEngine) : GameEngine).INVALID_INDEX;
          };
        }

        async onShow(...params) {
          this.init();
          this.eventRegister();

          this._engine.enter((_crd && PlayerManager === void 0 ? (_reportPossibleCrUseOfPlayerManager({
            error: Error()
          }), PlayerManager) : PlayerManager).inst().create(new (_crd && HumanPlayer === void 0 ? (_reportPossibleCrUseOfHumanPlayer({
            error: Error()
          }), HumanPlayer) : HumanPlayer)(this._meId, "鸡哥"))); // 进入游戏

        }

        init() {
          this._engine = new (_crd && GameEngine === void 0 ? (_reportPossibleCrUseOfGameEngine({
            error: Error()
          }), GameEngine) : GameEngine)();
        }

        eventRegister() {
          (_crd && FireKit === void 0 ? (_reportPossibleCrUseOfFireKit({
            error: Error()
          }), FireKit) : FireKit).use((_crd && Config === void 0 ? (_reportPossibleCrUseOfConfig({
            error: Error()
          }), Config) : Config).HUMAN_FIRE).onGroup((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).SIT_DOWN, this.sitDownLogic, this);
          (_crd && FireKit === void 0 ? (_reportPossibleCrUseOfFireKit({
            error: Error()
          }), FireKit) : FireKit).use((_crd && Config === void 0 ? (_reportPossibleCrUseOfConfig({
            error: Error()
          }), Config) : Config).HUMAN_FIRE).onGroup((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).START_GAME, this.startGameLogic, this);
          (_crd && FireKit === void 0 ? (_reportPossibleCrUseOfFireKit({
            error: Error()
          }), FireKit) : FireKit).use((_crd && Config === void 0 ? (_reportPossibleCrUseOfConfig({
            error: Error()
          }), Config) : Config).HUMAN_FIRE).onGroup((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).OPEN_RESULT, this.openResultLogic, this);
          (_crd && FireKit === void 0 ? (_reportPossibleCrUseOfFireKit({
            error: Error()
          }), FireKit) : FireKit).use((_crd && Config === void 0 ? (_reportPossibleCrUseOfConfig({
            error: Error()
          }), Config) : Config).HUMAN_FIRE).onGroup((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).CONFIRM_COLOR, this.confirmColorLogic, this);
          (_crd && FireKit === void 0 ? (_reportPossibleCrUseOfFireKit({
            error: Error()
          }), FireKit) : FireKit).use((_crd && Config === void 0 ? (_reportPossibleCrUseOfConfig({
            error: Error()
          }), Config) : Config).HUMAN_FIRE).onGroup((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).OPERATION_NOTIFY, this.operationNotifyLogic, this);
          (_crd && FireKit === void 0 ? (_reportPossibleCrUseOfFireKit({
            error: Error()
          }), FireKit) : FireKit).use((_crd && Config === void 0 ? (_reportPossibleCrUseOfConfig({
            error: Error()
          }), Config) : Config).HUMAN_FIRE).onGroup((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).MOVE_RESULT, this.moveResultLogic, this); // FireKit.use(Config.HUMAN_FIRE).onGroup(GameEvent.END_GAME, this.endGameLogic, this);
        }

        startGameLogic(startGameVo) {
          console.log('startGameVo.chair:', startGameVo.chair);
          this.cards = startGameVo.cards;
          this._locked = startGameVo.chair != this._meChair;

          for (let index = 0; index < this.btnCards.length; index++) {
            let clickEventHandler = new Component.EventHandler();
            clickEventHandler.target = this.node;
            clickEventHandler.component = 'UIBattle';
            clickEventHandler.handler = 'callback';
            clickEventHandler.customEventData = String(index);
            let button = this.btnCards[index].addComponent(Button);
            this.btnCards[index].getChildByName('Sprite').addComponent(_crd && UICard === void 0 ? (_reportPossibleCrUseOfUICard({
              error: Error()
            }), UICard) : UICard);
            button.clickEvents.push(clickEventHandler);
          }
        }

        callback(event, customEventData) {
          let node = event.target;
          let button = node.getComponent(Button);
          let index = customEventData;
          let row = Math.floor(index / 4);
          let col = index % 4;
          console.log('row:' + row + ',col:' + col);
          console.log(this._locked);

          if (!this._locked) {
            let card = this.cards[index];
            let color = card >> 4; //判断花色

            if (color === (_crd && GameEngine === void 0 ? (_reportPossibleCrUseOfGameEngine({
              error: Error()
            }), GameEngine) : GameEngine).DARK) {
              this._engine.open(new (_crd && OpenCardDTO === void 0 ? (_reportPossibleCrUseOfOpenCardDTO({
                error: Error()
              }), OpenCardDTO) : OpenCardDTO)(this._meChair, index));
            } else {
              if (this.fromIndex == (_crd && GameEngine === void 0 ? (_reportPossibleCrUseOfGameEngine({
                error: Error()
              }), GameEngine) : GameEngine).INVALID_INDEX) {
                if (color == this._meColor) {
                  // 选中了自己添加选中状态
                  this.updateAndSelectStyle(index);
                  this.fromIndex = index;
                }
              } else {
                if (this._engine.canMove(this.fromIndex, index, this.cards)) {
                  this._engine.move(new (_crd && MoveCardDTO === void 0 ? (_reportPossibleCrUseOfMoveCardDTO({
                    error: Error()
                  }), MoveCardDTO) : MoveCardDTO)(this._meChair, this.fromIndex, index));

                  this.fromIndex = (_crd && GameEngine === void 0 ? (_reportPossibleCrUseOfGameEngine({
                    error: Error()
                  }), GameEngine) : GameEngine).INVALID_INDEX;
                  this.clearSelectStyle(); // 清除选中状态
                } else {
                  //选中后 再切换到别的牌
                  if (color == this._meColor) {
                    this.updateAndSelectStyle(index);
                    this.fromIndex = index;
                  }
                }
              }
            }
          }
        }
        /**
         *
         * @param openResultVO
         */


        async updateOpenCard(openResultVO) {
          console.log('openResultVO:', openResultVO);
          let card = openResultVO.card;
          let index = openResultVO.index;
          let cardTemp = this.getCardItemTemp(index);
          await (_crd && TweenUtil === void 0 ? (_reportPossibleCrUseOfTweenUtil({
            error: Error()
          }), TweenUtil) : TweenUtil).flip(cardTemp.getChildByName('Sprite'), 0.8, () => {
            this.updateStyle(index, card);
          });
        }

        getCardItemTemp(index) {
          for (let i = 0; i < this.btnCards.length; i++) {
            const element = this.btnCards[i];
            if (i == Number(index)) return element;
          }
        }
        /**
         * 更新牌的样式
         * @param index
         */


        async updateStyle(index, card) {
          let cardTemp = this.getCardItemTemp(index);
          let UICardCom = cardTemp.getChildByName('Sprite').getComponent(_crd && UICard === void 0 ? (_reportPossibleCrUseOfUICard({
            error: Error()
          }), UICard) : UICard);
          UICardCom.refreshSprite(card);
        }
        /**
         * 增加选择状态
         * @param index
         */


        updateAndSelectStyle(index) {
          this.clearSelectStyle(); // 先清除选中

          for (let i = 0; i < this.btnCards.length; i++) {
            const card = this.btnCards[i];

            if (i === index) {}
          }
        }
        /**
         * 清除选中状态
         */


        clearSelectStyle() {
          for (let i = 0; i < (_crd && GameEngine === void 0 ? (_reportPossibleCrUseOfGameEngine({
            error: Error()
          }), GameEngine) : GameEngine).MAX_CARD; i++) {// let gObject = this._view.getChild("card_" + i);
            // if (gObject != null) {
            //     gObject.asCom.getChild("active").asImage.visible = false;
            // }
          }
        }
        /**
         *
         * @param sitDownVO
         */


        async onBtnBackLobby() {
          await this.closeSelf();
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).Instance.emit((_crd && LogicEvent === void 0 ? (_reportPossibleCrUseOfLogicEvent({
            error: Error()
          }), LogicEvent) : LogicEvent).ENTER_HALL_FROM_GAMES);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "UIGames", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "btnCards", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=326c17e8a8bbe6be64502b00cc2df160b77b3349.js.map