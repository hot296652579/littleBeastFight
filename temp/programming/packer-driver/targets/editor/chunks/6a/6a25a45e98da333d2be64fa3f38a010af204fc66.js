System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, EventMgr, ResMgr, ResType, LogicEvent, reslist, FBGameLogic, _crd;

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

        async onStartEnter(data) {
          await super.onStartEnter(data); // FBGameNet.getInstance().register();

          this.startLoadGame();
        }
        /**
         * @description: 开始加载游戏资源
         */


        async startLoadGame() {
          let list = _crd && reslist === void 0 ? (_reportPossibleCrUseOfreslist({
            error: Error()
          }), reslist) : reslist;
          await UIMgr.getInstance().clearWaiting();
          await FBGameUIMgr.getInstance().showLoading();
          let resType = new Map();
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
          }), ResMgr) : ResMgr).getInstance().preLoad(list, this.onLoadResourceProgress.bind(this), this.onLoadResourceComplete.bind(this), resType);
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
//# sourceMappingURL=6a25a45e98da333d2be64fa3f38a010af204fc66.js.map