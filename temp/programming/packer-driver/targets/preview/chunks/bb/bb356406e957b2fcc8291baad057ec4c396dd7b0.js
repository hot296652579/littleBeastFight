System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, EventMgr, ResMgr, ResType, LogicEvent, reslist, FBGameLogic, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../Script/Base/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResMgr(extras) {
    _reporterNs.report("ResMgr", "../Script/Base/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResType(extras) {
    _reporterNs.report("ResType", "../Script/Base/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLogicEvent(extras) {
    _reporterNs.report("LogicEvent", "../Script/Games/LogicEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLogicEventData(extras) {
    _reporterNs.report("LogicEventData", "../Script/Games/LogicEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfreslist(extras) {
    _reporterNs.report("reslist", "./reslist", _context.meta, extras);
  }

  _export("FBGameLogic", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      EventMgr = _unresolved_2.default;
    }, function (_unresolved_3) {
      ResMgr = _unresolved_3.ResMgr;
      ResType = _unresolved_3.ResType;
    }, function (_unresolved_4) {
      LogicEvent = _unresolved_4.LogicEvent;
    }, function (_unresolved_5) {
      reslist = _unresolved_5.reslist;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "533dcGhmXlNDo2z4GGaWkjB", "BattleLogic", undefined);

      _export("FBGameLogic", FBGameLogic = class FBGameLogic extends BaseLogic {
        init() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).Instance.addEventListen((_crd && LogicEvent === void 0 ? (_reportPossibleCrUseOfLogicEvent({
            error: Error()
          }), LogicEvent) : LogicEvent).ENTER_FBGAME, this.onStartEnter.bind(this), this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).Instance.addEventListen((_crd && LogicEvent === void 0 ? (_reportPossibleCrUseOfLogicEvent({
            error: Error()
          }), LogicEvent) : LogicEvent).ENTER_HALL_FROM_GAMES, this.onBackHall.bind(this), this);
        } //从子游戏返回到大厅了


        onBackHall(data) {
          super.onBackHall(data);
          console.log("返回大厅，需要释放资源");
          setTimeout(() => {
            //清除消息注册
            // FBGameNet.destory();
            //释放对应bundle中的资源 如果是从
            (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
              error: Error()
            }), ResMgr) : ResMgr).getInstance().releaseAllResByList(_crd && reslist === void 0 ? (_reportPossibleCrUseOfreslist({
              error: Error()
            }), reslist) : reslist);
          });
        }

        onStartEnter(data) {
          var _superprop_getOnStartEnter = () => super.onStartEnter,
              _this = this;

          return _asyncToGenerator(function* () {
            yield _superprop_getOnStartEnter().call(_this, data); // FBGameNet.getInstance().register();

            _this.startLoadGame();
          })();
        }
        /**
         * @description: 开始加载游戏资源
         */


        startLoadGame() {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            var list = _crd && reslist === void 0 ? (_reportPossibleCrUseOfreslist({
              error: Error()
            }), reslist) : reslist;
            yield UIMgr.getInstance().clearWaiting();
            yield FBGameUIMgr.getInstance().showLoading();
            var resType = new Map();
            resType.set((_crd && ResType === void 0 ? (_reportPossibleCrUseOfResType({
              error: Error()
            }), ResType) : ResType).ResType_Prefab, true);
            resType.set((_crd && ResType === void 0 ? (_reportPossibleCrUseOfResType({
              error: Error()
            }), ResType) : ResType).ResType_SpriteAtlas, true);
            resType.set((_crd && ResType === void 0 ? (_reportPossibleCrUseOfResType({
              error: Error()
            }), ResType) : ResType).ResType_AudioClip, true);
            resType.set((_crd && ResType === void 0 ? (_reportPossibleCrUseOfResType({
              error: Error()
            }), ResType) : ResType).ResType_SpriteFrame, true);
            (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
              error: Error()
            }), ResMgr) : ResMgr).getInstance().preLoad(list, _this2.onLoadResourceProgress.bind(_this2), _this2.onLoadResourceComplete.bind(_this2), resType);
          })();
        } //加载资源进度


        onLoadResourceProgress(process) {
          console.log("游戏资源进度", process, "=====");
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).Instance.dispatchEvent(FBGameEventName.GAME_LOAD_PROGRESS, process);
        } //加载资源完成


        onLoadResourceComplete(err) {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).Instance.dispatchEvent(FBGameEventName.GAME_LOAD_COMPLETE);
          UIMgr.getInstance().clearWaiting();
          FBGameUIMgr.getInstance().showFBGame();
        }

      });

      LogicManager.getInstance().registerLogicTypes(FBGameLogic);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=bb356406e957b2fcc8291baad057ec4c396dd7b0.js.map