System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Node, Button, Component, EventMgr, LogicEvent, UIScreen, Config, FireKit, GameEngine, GameEvent, HumanPlayer, PlayerManager, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, UIBattle;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
      FireKit = _unresolved_6.default;
    }, function (_unresolved_7) {
      GameEngine = _unresolved_7.default;
    }, function (_unresolved_8) {
      GameEvent = _unresolved_8.default;
    }, function (_unresolved_9) {
      HumanPlayer = _unresolved_9.default;
    }, function (_unresolved_10) {
      PlayerManager = _unresolved_10.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0aeaaVRuKhFS5y98dftB6pi", "UIBattle", undefined);

      __checkObsolete__(['_decorator', 'Node', 'Button', 'Component', 'TiledUserNodeData']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("UIBattle", UIBattle = (_dec = ccclass('UIBattle'), _dec2 = property(Node), _dec3 = property({
        type: [Node]
      }), _dec(_class = (_class2 = class UIBattle extends (_crd && UIScreen === void 0 ? (_reportPossibleCrUseOfUIScreen({
        error: Error()
      }), UIScreen) : UIScreen) {
        constructor() {
          super(...arguments);
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

          this.sitDownLogic = sitDownVO => {
            this.chairIds[sitDownVO.chair] = sitDownVO.userId;

            if (sitDownVO.userId == this._meId) {
              //如果是自己
              this._meChair = sitDownVO.chair;
            }
          };
        }

        onShow() {
          var _this = this;

          return _asyncToGenerator(function* () {
            _this.init();

            _this.eventRegister();

            _this.scheduleOnce(() => {
              _this._engine.enter((_crd && PlayerManager === void 0 ? (_reportPossibleCrUseOfPlayerManager({
                error: Error()
              }), PlayerManager) : PlayerManager).inst().create(new (_crd && HumanPlayer === void 0 ? (_reportPossibleCrUseOfHumanPlayer({
                error: Error()
              }), HumanPlayer) : HumanPlayer)(_this._meId, "鸡哥"))); // 进入游戏

            }, 1);
          })();
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
          }), GameEvent) : GameEvent).START_GAME, this.startGameLogic, this); // FireKit.use(Config.HUMAN_FIRE).onGroup(GameEvent.OPEN_RESULT, this.openResultLogic, this);
          // FireKit.use(Config.HUMAN_FIRE).onGroup(GameEvent.CONFIRM_COLOR, this.confirmColorLogic, this);
          // FireKit.use(Config.HUMAN_FIRE).onGroup(GameEvent.OPERATION_NOTIFY, this.operationNotifyLogic, this);
          // FireKit.use(Config.HUMAN_FIRE).onGroup(GameEvent.MOVE_RESULT, this.moveResultLogic, this);
          // FireKit.use(Config.HUMAN_FIRE).onGroup(GameEvent.END_GAME, this.endGameLogic, this);
        }

        startGameLogic(startGameVo) {
          console.log(this.node);
          this.cards = startGameVo.cards;
          this._locked = startGameVo.chair != this._meChair;

          for (var index = 0; index < this.btnCards.length; index++) {
            var clickEventHandler = new Component.EventHandler();
            clickEventHandler.target = this.UIGames;
            clickEventHandler.component = 'UIBattleScene';
            clickEventHandler.handler = 'callback';
            clickEventHandler.customEventData = String(index);
            var button = this.btnCards[index].addComponent(Button);
            button.clickEvents.push(clickEventHandler);
          }
        }

        callback(event, customEventData) {
          console.log(event);
        } // callback(event, customEventData) {
        //     let node = event.target;
        //     let button = node.getComponent(Button);
        //     let index = customEventData;
        //     let row = Math.floor(index / 4);
        //     let col = index % 4;
        //     console.log('row:' + row + ',col:' + col);
        //     console.log(this._locked)
        //     if (!this._locked) {
        //         let card = this.cards[index];
        //         console.log('card:' + card);
        //         let color = card >> 4;//判断花色
        //         console.log('card >> 4' + color);
        //         if (color === FBGameEngine.DARK) {
        //             this._engine.open(new OpenCardDTO(this._meChair, index, card));
        //         } else {
        //             if (this.fromIndex == FBGameEngine.INVALID_INDEX) {
        //                 if (color == this._meColor) {
        //                     // 选中了自己添加选中状态
        //                     this.updateAndSelectStyle(index);
        //                     this.fromIndex = index;
        //                 }
        //             } else {
        //                 if (this._engine.canMove(this.fromIndex, index, this.cards)) {
        //                     this._engine.move(new MoveCardDTO(this._meChair, this.fromIndex, index));
        //                     this.fromIndex = FBGameEngine.INVALID_INDEX;
        //                     this.clearSelectStyle();    // 清除选中状态
        //                 } else {
        //                     //选中后 再切换到别的牌
        //                     if (color == this._meColor) {
        //                         this.updateAndSelectStyle(index);
        //                         this.fromIndex = index;
        //                     }
        //                 }
        //             }
        //         }
        //     }
        // }

        /**
         *
         * @param sitDownVO
         */


        onBtnBackLobby() {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            yield _this2.closeSelf();
            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).Instance.emit((_crd && LogicEvent === void 0 ? (_reportPossibleCrUseOfLogicEvent({
              error: Error()
            }), LogicEvent) : LogicEvent).ENTER_HALL_FROM_GAMES);
          })();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "UIGames", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "btnCards", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=71048a93a060ef6dea5425fbaa89ca0eccbb07a1.js.map