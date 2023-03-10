System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, _decorator, view, macro, ResolutionPolicy, UITransform, UILobbyMgr, SysDefine, ProjectConfig, UIManager, _dec, _class, _class2, _crd, ccclass, property, UIRoot;

  function _reportPossibleCrUseOfUILobbyMgr(extras) {
    _reporterNs.report("UILobbyMgr", "../Lobby/UILobbyMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSysDefine(extras) {
    _reporterNs.report("SysDefine", "./Config/SysDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfProjectConfig(extras) {
    _reporterNs.report("ProjectConfig", "./ProjectConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIManager(extras) {
    _reporterNs.report("UIManager", "./UIFrame/UIMgr", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
      _decorator = _cc._decorator;
      view = _cc.view;
      macro = _cc.macro;
      ResolutionPolicy = _cc.ResolutionPolicy;
      UITransform = _cc.UITransform;
    }, function (_unresolved_2) {
      UILobbyMgr = _unresolved_2.UILobbyMgr;
    }, function (_unresolved_3) {
      SysDefine = _unresolved_3.SysDefine;
    }, function (_unresolved_4) {
      ProjectConfig = _unresolved_4.ProjectConfig;
    }, function (_unresolved_5) {
      UIManager = _unresolved_5.UIManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7524eS0F2lM1aSw0hao4VJG", "UIRoot", undefined);

      __checkObsolete__(['Component', '_decorator', 'Node', 'view', 'macro', 'ResolutionPolicy', 'UITransform']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * ???????????????????????????
       */

      _export("UIRoot", UIRoot = (_dec = ccclass("UIRoot"), _dec(_class = (_class2 = class UIRoot extends Component {
        constructor(...args) {
          super(...args);
          this.minWidth = 1280;
          this.minHeight = 720;
          this.maxWidth = 1600;
          this.maxHeight = 720;
          this.targetDiction = macro.ORIENTATION_PORTRAIT;
          this.rotationCallBack = null;
        }

        static getInstance() {
          return this.instance;
        }

        async start() {
          view.setResizeCallback(() => {
            console.log("?????????????????????=====");

            if (this.rotationCallBack != null) {
              this.rotationCallBack();
              this.rotationCallBack = null;
            }

            this.doAdapter();
          });
          UIRoot.instance = this;
          this.doAdapter();
          this.onGameInit();
        }

        //???????????????????????????
        getCurScreenDirection() {
          return this.targetDiction;
        } //???????????????????????????


        //??????????????????????????????????????????
        doReSizeAllNode() {
          let rootNode = this.node.parent;

          if (this.targetDiction == macro.ORIENTATION_LANDSCAPE) {
            //??????
            //Root??????
            rootNode.getComponent(UITransform).setContentSize((_crd && ProjectConfig === void 0 ? (_reportPossibleCrUseOfProjectConfig({
              error: Error()
            }), ProjectConfig) : ProjectConfig).DesignScreenHeight, (_crd && ProjectConfig === void 0 ? (_reportPossibleCrUseOfProjectConfig({
              error: Error()
            }), ProjectConfig) : ProjectConfig).DesignScreenWidth);
            this.node.getChildByName((_crd && SysDefine === void 0 ? (_reportPossibleCrUseOfSysDefine({
              error: Error()
            }), SysDefine) : SysDefine).SYS_FIXED_NODE).getComponent(UITransform).setContentSize((_crd && ProjectConfig === void 0 ? (_reportPossibleCrUseOfProjectConfig({
              error: Error()
            }), ProjectConfig) : ProjectConfig).DesignScreenHeight, (_crd && ProjectConfig === void 0 ? (_reportPossibleCrUseOfProjectConfig({
              error: Error()
            }), ProjectConfig) : ProjectConfig).DesignScreenWidth); //UIPopup??????

            this.node.getChildByName((_crd && SysDefine === void 0 ? (_reportPossibleCrUseOfSysDefine({
              error: Error()
            }), SysDefine) : SysDefine).SYS_POPUP_NODE).getComponent(UITransform).setContentSize((_crd && ProjectConfig === void 0 ? (_reportPossibleCrUseOfProjectConfig({
              error: Error()
            }), ProjectConfig) : ProjectConfig).DesignScreenHeight, (_crd && ProjectConfig === void 0 ? (_reportPossibleCrUseOfProjectConfig({
              error: Error()
            }), ProjectConfig) : ProjectConfig).DesignScreenWidth); //UIFloat??????

            this.node.getChildByName((_crd && SysDefine === void 0 ? (_reportPossibleCrUseOfSysDefine({
              error: Error()
            }), SysDefine) : SysDefine).SYS_FLOAT_NODE).getComponent(UITransform).setContentSize((_crd && ProjectConfig === void 0 ? (_reportPossibleCrUseOfProjectConfig({
              error: Error()
            }), ProjectConfig) : ProjectConfig).DesignScreenHeight, (_crd && ProjectConfig === void 0 ? (_reportPossibleCrUseOfProjectConfig({
              error: Error()
            }), ProjectConfig) : ProjectConfig).DesignScreenWidth); //UIWin??????

            this.node.getChildByName((_crd && SysDefine === void 0 ? (_reportPossibleCrUseOfSysDefine({
              error: Error()
            }), SysDefine) : SysDefine).SYS_WIN_NODE).getComponent(UITransform).setContentSize((_crd && ProjectConfig === void 0 ? (_reportPossibleCrUseOfProjectConfig({
              error: Error()
            }), ProjectConfig) : ProjectConfig).DesignScreenHeight, (_crd && ProjectConfig === void 0 ? (_reportPossibleCrUseOfProjectConfig({
              error: Error()
            }), ProjectConfig) : ProjectConfig).DesignScreenWidth); //UILoading??????

            this.node.getChildByName((_crd && SysDefine === void 0 ? (_reportPossibleCrUseOfSysDefine({
              error: Error()
            }), SysDefine) : SysDefine).SYS_LOADING_NODE).getComponent(UITransform).setContentSize((_crd && ProjectConfig === void 0 ? (_reportPossibleCrUseOfProjectConfig({
              error: Error()
            }), ProjectConfig) : ProjectConfig).DesignScreenHeight, (_crd && ProjectConfig === void 0 ? (_reportPossibleCrUseOfProjectConfig({
              error: Error()
            }), ProjectConfig) : ProjectConfig).DesignScreenWidth);
          } else {
            //Root??????
            rootNode.getComponent(UITransform).setContentSize((_crd && ProjectConfig === void 0 ? (_reportPossibleCrUseOfProjectConfig({
              error: Error()
            }), ProjectConfig) : ProjectConfig).DesignScreenWidth, (_crd && ProjectConfig === void 0 ? (_reportPossibleCrUseOfProjectConfig({
              error: Error()
            }), ProjectConfig) : ProjectConfig).DesignScreenHeight);
            this.node.getChildByName((_crd && SysDefine === void 0 ? (_reportPossibleCrUseOfSysDefine({
              error: Error()
            }), SysDefine) : SysDefine).SYS_FIXED_NODE).getComponent(UITransform).setContentSize((_crd && ProjectConfig === void 0 ? (_reportPossibleCrUseOfProjectConfig({
              error: Error()
            }), ProjectConfig) : ProjectConfig).DesignScreenWidth, (_crd && ProjectConfig === void 0 ? (_reportPossibleCrUseOfProjectConfig({
              error: Error()
            }), ProjectConfig) : ProjectConfig).DesignScreenHeight); //UIPopup??????

            this.node.getChildByName((_crd && SysDefine === void 0 ? (_reportPossibleCrUseOfSysDefine({
              error: Error()
            }), SysDefine) : SysDefine).SYS_POPUP_NODE).getComponent(UITransform).setContentSize((_crd && ProjectConfig === void 0 ? (_reportPossibleCrUseOfProjectConfig({
              error: Error()
            }), ProjectConfig) : ProjectConfig).DesignScreenWidth, (_crd && ProjectConfig === void 0 ? (_reportPossibleCrUseOfProjectConfig({
              error: Error()
            }), ProjectConfig) : ProjectConfig).DesignScreenHeight); //UIFloat??????

            this.node.getChildByName((_crd && SysDefine === void 0 ? (_reportPossibleCrUseOfSysDefine({
              error: Error()
            }), SysDefine) : SysDefine).SYS_FLOAT_NODE).getComponent(UITransform).setContentSize((_crd && ProjectConfig === void 0 ? (_reportPossibleCrUseOfProjectConfig({
              error: Error()
            }), ProjectConfig) : ProjectConfig).DesignScreenWidth, (_crd && ProjectConfig === void 0 ? (_reportPossibleCrUseOfProjectConfig({
              error: Error()
            }), ProjectConfig) : ProjectConfig).DesignScreenHeight); //UIWin??????

            this.node.getChildByName((_crd && SysDefine === void 0 ? (_reportPossibleCrUseOfSysDefine({
              error: Error()
            }), SysDefine) : SysDefine).SYS_WIN_NODE).getComponent(UITransform).setContentSize((_crd && ProjectConfig === void 0 ? (_reportPossibleCrUseOfProjectConfig({
              error: Error()
            }), ProjectConfig) : ProjectConfig).DesignScreenWidth, (_crd && ProjectConfig === void 0 ? (_reportPossibleCrUseOfProjectConfig({
              error: Error()
            }), ProjectConfig) : ProjectConfig).DesignScreenHeight); //UILoading??????

            this.node.getChildByName((_crd && SysDefine === void 0 ? (_reportPossibleCrUseOfSysDefine({
              error: Error()
            }), SysDefine) : SysDefine).SYS_LOADING_NODE).getComponent(UITransform).setContentSize((_crd && ProjectConfig === void 0 ? (_reportPossibleCrUseOfProjectConfig({
              error: Error()
            }), ProjectConfig) : ProjectConfig).DesignScreenWidth, (_crd && ProjectConfig === void 0 ? (_reportPossibleCrUseOfProjectConfig({
              error: Error()
            }), ProjectConfig) : ProjectConfig).DesignScreenHeight); //UIBubble??????
            //?????????????????????
          }
        }
        /**
         * 
         * ?????????????????????
         * 1????????????????????? ?????? ?????????????????? 720 x 1280 
         * 2??????????????????????????????????????? 1280 X 720 ??????????????????
         * 
         * ??????????????? ?????? ????????????
         */


        doAdapter() {
          let isLandscape = this.targetDiction == macro.ORIENTATION_LANDSCAPE;

          if (isLandscape) {
            console.log("???????????????xxx  ????????????");
            view.setDesignResolutionSize((_crd && ProjectConfig === void 0 ? (_reportPossibleCrUseOfProjectConfig({
              error: Error()
            }), ProjectConfig) : ProjectConfig).DesignScreenHeight, (_crd && ProjectConfig === void 0 ? (_reportPossibleCrUseOfProjectConfig({
              error: Error()
            }), ProjectConfig) : ProjectConfig).DesignScreenWidth, ResolutionPolicy.FIXED_HEIGHT);
          } else {
            console.log("??????????????? ????????????");
            view.setDesignResolutionSize((_crd && ProjectConfig === void 0 ? (_reportPossibleCrUseOfProjectConfig({
              error: Error()
            }), ProjectConfig) : ProjectConfig).DesignScreenWidth, (_crd && ProjectConfig === void 0 ? (_reportPossibleCrUseOfProjectConfig({
              error: Error()
            }), ProjectConfig) : ProjectConfig).DesignScreenHeight, ResolutionPolicy.FIXED_WIDTH);
          } //this.doReSizeAllNode();

        }

        clearAllNodes() {
          this.node.getChildByName((_crd && SysDefine === void 0 ? (_reportPossibleCrUseOfSysDefine({
            error: Error()
          }), SysDefine) : SysDefine).SYS_SCREEN_NODE).destroyAllChildren();
          this.node.getChildByName((_crd && SysDefine === void 0 ? (_reportPossibleCrUseOfSysDefine({
            error: Error()
          }), SysDefine) : SysDefine).SYS_WIN_NODE).destroyAllChildren(); // this.node.getChildByName(SysDefine.SYS_FIXED_NODE)!.destroyAllChildren();
          // this.node.getChildByName(SysDefine.SYS_POPUP_NODE)!.destroyAllChildren();
          // this.node.getChildByName(SysDefine.SYS_FLOAT_NODE)!.destroyAllChildren();
          // this.node.getChildByName(SysDefine.SYS_BUBBLE_NODE).destroyAllChildren();
          // this.node.getChildByName(SysDefine.SYS_LOADING_NODE).destroyAllChildren();
          // this.node.getChildByName(SysDefine.SYS_BLOCK_NODE).destroyAllChildren();
        }

        async onGameInit() {
          //?????????UIManager??????Node????????????????????? UIManager?????????
          this.clearAllNodes(); //?????????

          (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
            error: Error()
          }), UIManager) : UIManager).destory();
          (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
            error: Error()
          }), UIManager) : UIManager).getInstance().init(this.node.getChildByName((_crd && SysDefine === void 0 ? (_reportPossibleCrUseOfSysDefine({
            error: Error()
          }), SysDefine) : SysDefine).SYS_SCREEN_NODE), this.node.getChildByName((_crd && SysDefine === void 0 ? (_reportPossibleCrUseOfSysDefine({
            error: Error()
          }), SysDefine) : SysDefine).SYS_WIN_NODE));
          (_crd && UILobbyMgr === void 0 ? (_reportPossibleCrUseOfUILobbyMgr({
            error: Error()
          }), UILobbyMgr) : UILobbyMgr).Instance().showScreenLobby(); // let updateRes = await ResMgr.getInstance().preloadLoading("Core/hotupdate/UIUpdate");
          // let result = await ResMgr.getInstance().preloadLoading("Core/UILoading");
          // if (result && updateRes){
          //     UIMgr.getInstance().showUILoading();
          // }else{
          //     console.error("loading?????????????????????");
          // }
          //UIMgr.getInstance().showLoading()\
          //????????? ?????? loading?????? ????????????????????????loading??????
          //????????? ??????????????????Manager config sdks???
          //????????? ????????????(???????????????prefab ?????? texture)
          //????????? ???????????????ui ??????loading ??????????????????
        }

      }, _class2.instance = void 0, _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=fb7f179872617659ebfb2c6a78f88ce6e00bbb03.js.map