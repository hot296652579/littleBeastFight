System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, _decorator, view, macro, SysDefine, ProjectConfig, UIManager, _dec, _class, _class2, _crd, ccclass, property, UIRoot;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
    }, function (_unresolved_2) {
      SysDefine = _unresolved_2.SysDefine;
    }, function (_unresolved_3) {
      ProjectConfig = _unresolved_3.ProjectConfig;
    }, function (_unresolved_4) {
      UIManager = _unresolved_4.UIManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7524eS0F2lM1aSw0hao4VJG", "UIRoot", undefined);

      __checkObsolete__(['Component', '_decorator', 'Node', 'view', 'macro']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 应用从这里开始启动
       */

      _export("UIRoot", UIRoot = (_dec = ccclass("UIRoot"), _dec(_class = (_class2 = class UIRoot extends Component {
        constructor() {
          super(...arguments);
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

        start() {
          var _this = this;

          return _asyncToGenerator(function* () {
            view.setResizeCallback(() => {
              console.log("大小发生了改变=====");

              if (_this.rotationCallBack != null) {
                _this.rotationCallBack();

                _this.rotationCallBack = null;
              }

              _this.doAdapter();
            });
            UIRoot.instance = _this;

            _this.doAdapter();

            _this.onGameInit();
          })();
        }

        //获取当前屏幕的朝向
        getCurScreenDirection() {
          return this.targetDiction;
        } //转动结束的回调方法


        //将所有节点的大小重新定义一下
        doReSizeAllNode() {
          var rootNode = this.node.parent;

          if (this.targetDiction == macro.ORIENTATION_LANDSCAPE) {
            //横屏
            //Root节点
            rootNode.setContentSize((_crd && ProjectConfig === void 0 ? (_reportPossibleCrUseOfProjectConfig({
              error: Error()
            }), ProjectConfig) : ProjectConfig).DesignScreenHeight, (_crd && ProjectConfig === void 0 ? (_reportPossibleCrUseOfProjectConfig({
              error: Error()
            }), ProjectConfig) : ProjectConfig).DesignScreenWidth);
            this.node.getChildByName((_crd && SysDefine === void 0 ? (_reportPossibleCrUseOfSysDefine({
              error: Error()
            }), SysDefine) : SysDefine).SYS_FIXED_NODE).setContentSize((_crd && ProjectConfig === void 0 ? (_reportPossibleCrUseOfProjectConfig({
              error: Error()
            }), ProjectConfig) : ProjectConfig).DesignScreenHeight, (_crd && ProjectConfig === void 0 ? (_reportPossibleCrUseOfProjectConfig({
              error: Error()
            }), ProjectConfig) : ProjectConfig).DesignScreenWidth); //UIPopup节点

            this.node.getChildByName((_crd && SysDefine === void 0 ? (_reportPossibleCrUseOfSysDefine({
              error: Error()
            }), SysDefine) : SysDefine).SYS_POPUP_NODE).setContentSize((_crd && ProjectConfig === void 0 ? (_reportPossibleCrUseOfProjectConfig({
              error: Error()
            }), ProjectConfig) : ProjectConfig).DesignScreenHeight, (_crd && ProjectConfig === void 0 ? (_reportPossibleCrUseOfProjectConfig({
              error: Error()
            }), ProjectConfig) : ProjectConfig).DesignScreenWidth); //UIFloat节点

            this.node.getChildByName((_crd && SysDefine === void 0 ? (_reportPossibleCrUseOfSysDefine({
              error: Error()
            }), SysDefine) : SysDefine).SYS_FLOAT_NODE).setContentSize((_crd && ProjectConfig === void 0 ? (_reportPossibleCrUseOfProjectConfig({
              error: Error()
            }), ProjectConfig) : ProjectConfig).DesignScreenHeight, (_crd && ProjectConfig === void 0 ? (_reportPossibleCrUseOfProjectConfig({
              error: Error()
            }), ProjectConfig) : ProjectConfig).DesignScreenWidth); //UIWin节点

            this.node.getChildByName((_crd && SysDefine === void 0 ? (_reportPossibleCrUseOfSysDefine({
              error: Error()
            }), SysDefine) : SysDefine).SYS_WIN_NODE).setContentSize((_crd && ProjectConfig === void 0 ? (_reportPossibleCrUseOfProjectConfig({
              error: Error()
            }), ProjectConfig) : ProjectConfig).DesignScreenHeight, (_crd && ProjectConfig === void 0 ? (_reportPossibleCrUseOfProjectConfig({
              error: Error()
            }), ProjectConfig) : ProjectConfig).DesignScreenWidth); //UILoading节点

            this.node.getChildByName((_crd && SysDefine === void 0 ? (_reportPossibleCrUseOfSysDefine({
              error: Error()
            }), SysDefine) : SysDefine).SYS_LOADING_NODE).setContentSize((_crd && ProjectConfig === void 0 ? (_reportPossibleCrUseOfProjectConfig({
              error: Error()
            }), ProjectConfig) : ProjectConfig).DesignScreenHeight, (_crd && ProjectConfig === void 0 ? (_reportPossibleCrUseOfProjectConfig({
              error: Error()
            }), ProjectConfig) : ProjectConfig).DesignScreenWidth);
          } else {
            //Root节点
            rootNode.setContentSize((_crd && ProjectConfig === void 0 ? (_reportPossibleCrUseOfProjectConfig({
              error: Error()
            }), ProjectConfig) : ProjectConfig).DesignScreenWidth, (_crd && ProjectConfig === void 0 ? (_reportPossibleCrUseOfProjectConfig({
              error: Error()
            }), ProjectConfig) : ProjectConfig).DesignScreenHeight);
            this.node.getChildByName((_crd && SysDefine === void 0 ? (_reportPossibleCrUseOfSysDefine({
              error: Error()
            }), SysDefine) : SysDefine).SYS_FIXED_NODE).setContentSize((_crd && ProjectConfig === void 0 ? (_reportPossibleCrUseOfProjectConfig({
              error: Error()
            }), ProjectConfig) : ProjectConfig).DesignScreenWidth, (_crd && ProjectConfig === void 0 ? (_reportPossibleCrUseOfProjectConfig({
              error: Error()
            }), ProjectConfig) : ProjectConfig).DesignScreenHeight); //UIPopup节点

            this.node.getChildByName((_crd && SysDefine === void 0 ? (_reportPossibleCrUseOfSysDefine({
              error: Error()
            }), SysDefine) : SysDefine).SYS_POPUP_NODE).setContentSize((_crd && ProjectConfig === void 0 ? (_reportPossibleCrUseOfProjectConfig({
              error: Error()
            }), ProjectConfig) : ProjectConfig).DesignScreenWidth, (_crd && ProjectConfig === void 0 ? (_reportPossibleCrUseOfProjectConfig({
              error: Error()
            }), ProjectConfig) : ProjectConfig).DesignScreenHeight); //UIFloat节点

            this.node.getChildByName((_crd && SysDefine === void 0 ? (_reportPossibleCrUseOfSysDefine({
              error: Error()
            }), SysDefine) : SysDefine).SYS_FLOAT_NODE).setContentSize((_crd && ProjectConfig === void 0 ? (_reportPossibleCrUseOfProjectConfig({
              error: Error()
            }), ProjectConfig) : ProjectConfig).DesignScreenWidth, (_crd && ProjectConfig === void 0 ? (_reportPossibleCrUseOfProjectConfig({
              error: Error()
            }), ProjectConfig) : ProjectConfig).DesignScreenHeight); //UIWin节点

            this.node.getChildByName((_crd && SysDefine === void 0 ? (_reportPossibleCrUseOfSysDefine({
              error: Error()
            }), SysDefine) : SysDefine).SYS_WIN_NODE).setContentSize((_crd && ProjectConfig === void 0 ? (_reportPossibleCrUseOfProjectConfig({
              error: Error()
            }), ProjectConfig) : ProjectConfig).DesignScreenWidth, (_crd && ProjectConfig === void 0 ? (_reportPossibleCrUseOfProjectConfig({
              error: Error()
            }), ProjectConfig) : ProjectConfig).DesignScreenHeight); //UILoading节点

            this.node.getChildByName((_crd && SysDefine === void 0 ? (_reportPossibleCrUseOfSysDefine({
              error: Error()
            }), SysDefine) : SysDefine).SYS_LOADING_NODE).setContentSize((_crd && ProjectConfig === void 0 ? (_reportPossibleCrUseOfProjectConfig({
              error: Error()
            }), ProjectConfig) : ProjectConfig).DesignScreenWidth, (_crd && ProjectConfig === void 0 ? (_reportPossibleCrUseOfProjectConfig({
              error: Error()
            }), ProjectConfig) : ProjectConfig).DesignScreenHeight); //UIBubble节点
            //全局屏蔽层节点
          }
        }
        /**
         * 
         * 当前的适配策略
         * 1：默认启动使用 竖屏 设计分辨率为 720 x 1280 
         * 2：当进行屏幕旋转的时候执行 1280 X 720 的设计分辨率
         * 
         * 暂时不测试 适配 的问题。
         */


        doAdapter() {
          var isLandscape = this.targetDiction == macro.ORIENTATION_LANDSCAPE;

          if (isLandscape) {
            console.log("当前为横屏xxx  固定高度");
            view.setDesignResolutionSize((_crd && ProjectConfig === void 0 ? (_reportPossibleCrUseOfProjectConfig({
              error: Error()
            }), ProjectConfig) : ProjectConfig).DesignScreenHeight, (_crd && ProjectConfig === void 0 ? (_reportPossibleCrUseOfProjectConfig({
              error: Error()
            }), ProjectConfig) : ProjectConfig).DesignScreenWidth, ResolutionPolicy.FIXED_HEIGHT);
          } else {
            console.log("当前为竖屏 固定宽度");
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
          }), SysDefine) : SysDefine).SYS_FIXED_NODE).destroyAllChildren();
          this.node.getChildByName((_crd && SysDefine === void 0 ? (_reportPossibleCrUseOfSysDefine({
            error: Error()
          }), SysDefine) : SysDefine).SYS_POPUP_NODE).destroyAllChildren();
          this.node.getChildByName((_crd && SysDefine === void 0 ? (_reportPossibleCrUseOfSysDefine({
            error: Error()
          }), SysDefine) : SysDefine).SYS_FLOAT_NODE).destroyAllChildren();
          this.node.getChildByName((_crd && SysDefine === void 0 ? (_reportPossibleCrUseOfSysDefine({
            error: Error()
          }), SysDefine) : SysDefine).SYS_WIN_NODE).destroyAllChildren();
          this.node.getChildByName((_crd && SysDefine === void 0 ? (_reportPossibleCrUseOfSysDefine({
            error: Error()
          }), SysDefine) : SysDefine).SYS_BUBBLE_NODE).destroyAllChildren();
          this.node.getChildByName((_crd && SysDefine === void 0 ? (_reportPossibleCrUseOfSysDefine({
            error: Error()
          }), SysDefine) : SysDefine).SYS_LOADING_NODE).destroyAllChildren();
          this.node.getChildByName((_crd && SysDefine === void 0 ? (_reportPossibleCrUseOfSysDefine({
            error: Error()
          }), SysDefine) : SysDefine).SYS_BLOCK_NODE).destroyAllChildren();
        }

        onGameInit() {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            //初始化UIManager中的Node。所有节点都在 UIManager中操作
            _this2.clearAllNodes(); //先清空


            (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
              error: Error()
            }), UIManager) : UIManager).destory();
            (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
              error: Error()
            }), UIManager) : UIManager).getInstance().init(_this2.node.getChildByName((_crd && SysDefine === void 0 ? (_reportPossibleCrUseOfSysDefine({
              error: Error()
            }), SysDefine) : SysDefine).SYS_SCREEN_NODE), _this2.node.getChildByName((_crd && SysDefine === void 0 ? (_reportPossibleCrUseOfSysDefine({
              error: Error()
            }), SysDefine) : SysDefine).SYS_WIN_NODE));
            UIMgr.getInstance().showScreenLobby(); // let updateRes = await ResMgr.getInstance().preloadLoading("Core/hotupdate/UIUpdate");
            // let result = await ResMgr.getInstance().preloadLoading("Core/UILoading");
            // if (result && updateRes){
            //     UIMgr.getInstance().showUILoading();
            // }else{
            //     console.error("loading节点初始化失败");
            // }
            //UIMgr.getInstance().showLoading()\
            //第一步 展示 loading页面 当然有些默认就是loading页面
            //第二步 初始化游戏（Manager config sdks）
            //第三步 构建场景(加载必要的prefab 音频 texture)
            //第四步 加载主界面ui 关掉loading 正式进入游戏
          })();
        }

      }, _class2.instance = void 0, _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e806d63bed729928cd74146f9daedd0d3d910672.js.map