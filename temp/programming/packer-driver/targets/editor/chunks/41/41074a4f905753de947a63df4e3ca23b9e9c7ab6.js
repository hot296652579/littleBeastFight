System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, director, js, ResMgr, PriorityStake, FormType, ModalOpacity, ModalMgr, UIScreen, UIWindow, UIManager, _crd;

  function _reportPossibleCrUseOfResMgr(extras) {
    _reporterNs.report("ResMgr", "../BaseManager/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPriorityStake(extras) {
    _reporterNs.report("PriorityStake", "../utils/PriorityStack", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFormType(extras) {
    _reporterNs.report("FormType", "./config/SysDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfModalOpacity(extras) {
    _reporterNs.report("ModalOpacity", "./config/SysDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfModalMgr(extras) {
    _reporterNs.report("ModalMgr", "./ModalMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIBase(extras) {
    _reporterNs.report("UIBase", "./UIBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIPopup(extras) {
    _reporterNs.report("UIPopup", "./UIForm", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIScreen(extras) {
    _reporterNs.report("UIScreen", "./UIForm", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIWindow(extras) {
    _reporterNs.report("UIWindow", "./UIForm", _context.meta, extras);
  }

  _export("UIManager", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      director = _cc.director;
      js = _cc.js;
    }, function (_unresolved_2) {
      ResMgr = _unresolved_2.ResMgr;
    }, function (_unresolved_3) {
      PriorityStake = _unresolved_3.PriorityStake;
    }, function (_unresolved_4) {
      FormType = _unresolved_4.FormType;
      ModalOpacity = _unresolved_4.ModalOpacity;
    }, function (_unresolved_5) {
      ModalMgr = _unresolved_5.ModalMgr;
    }, function (_unresolved_6) {
      UIScreen = _unresolved_6.UIScreen;
      UIWindow = _unresolved_6.UIWindow;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ce77f5q2qhAo7y8uRpyeMwn", "UIMgr", undefined);

      __checkObsolete__(['director', 'js']);

      _export("UIManager", UIManager = class UIManager {
        constructor() {
          this.ndScreen = null;
          this.ndFixed = null;
          this.ndPopUp = null;
          this.ndFloat = null;
          this.ndWin = null;
          this.ndLoading = null;
          this.ndNode3d = null;
          this.ndUI2dOn3d = null;
          this.ndBubble = null;
          this.ndBlock = null;
          this.allForms = js.createMap();
          this.screensStack = new (_crd && PriorityStake === void 0 ? (_reportPossibleCrUseOfPriorityStake({
            error: Error()
          }), PriorityStake) : PriorityStake)();
          this.loadingForms = js.createMap();
          this.winArr = [];
          this.popupsArr = [];
          this.winMasks = js.createMap();
          this.screenMasks = js.createMap();
          this.waitNodePool = new NodePool();
          this.maskNodePool = new NodePool();
        }

        static getInstance() {
          if (this.instance == null) {
            this.instance = new UIManager();
            director.on("winsizechanged", this.instance.onWinSizeChged, this.instance);
          }

          return this.instance;
        }

        onWinSizeChged() {
          let uiscreens = this.screensStack.getElements();

          for (let k = 0; k < uiscreens.length; k++) {
            console.log("窗口变化，要重新刷新一下======");
            uiscreens[k].node.getComponent(Widget).updateAlignment();
          }
        } //初始化


        init(ndScreen, ndFixed, ndPopUp, ndFloat, ndWin, ndLoading, ndNode3d, nd2dOn3d, ndBubble, ndBlock) {
          this.ndScreen = ndScreen;
          this.ndFixed = ndFixed;
          this.ndPopUp = ndPopUp;
          this.ndFloat = ndFloat;
          this.ndWin = ndWin;
          this.ndLoading = ndLoading;
          this.ndNode3d = ndNode3d;
          this.ndUI2dOn3d = nd2dOn3d;
          this.ndBubble = ndBubble;
          this.ndBlock = ndBlock;
        } //判断一个界面是否正在显示


        checkFormShowing(prefabPath) {
          let com = this.allForms[prefabPath];

          if (!com) {
            return false;
          }

          return com.node.active;
        }

        checkFormLoading(prefabPath) {
          let com = this.loadingForms[prefabPath];
          return !!com;
        }

        getMaskNode() {
          if (this.maskNodePool.size() > 0) {
            let maskNode = this.maskNodePool.get();
            return maskNode;
          }

          return null;
        } //打开一个screen


        async openScreen(prefabPath, ...params) {
          console.log(`打开openScene--${prefabPath}`);

          if (prefabPath == null || prefabPath == undefined || prefabPath.length <= 0) {
            warn(`${prefabPath}，参数错误`);
            return null;
          } //当前窗体正在显示


          if (this.checkFormShowing(prefabPath)) {
            warn(`${prefabPath}窗体正在显示中`);
            return null;
          }

          if (this.checkFormLoading(prefabPath)) {
            warn(`${prefabPath}正在加载中`);
            return null;
          }

          this.loadingForms[prefabPath] = true;
          let pb = (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
            error: Error()
          }), ResMgr) : ResMgr).getInstance().getPrefabByPath(prefabPath);

          if (pb == null) {
            console.error("兼容模式 需要 去健在窗体");
            pb = await (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
              error: Error()
            }), ResMgr) : ResMgr).getInstance().loadForm(prefabPath);
          }

          if (pb == null) {
            warn(`${prefabPath}窗体加载错误!`);
            delete this.loadingForms[prefabPath];
            return null;
          }

          let node = instantiate(pb);
          let com = node.getComponent(_crd && UIScreen === void 0 ? (_reportPossibleCrUseOfUIScreen({
            error: Error()
          }), UIScreen) : UIScreen);

          if (com == null) {
            warn(`${prefabPath}没有绑定UIScreen组件`);
            delete this.loadingForms[prefabPath];
            return null;
          }

          if (com.isOnleyEngross) {
            //关闭掉所有的screen
            console.log("关闭所有的screeen", this.screensStack.getSize(), "==========");

            while (this.screensStack.getSize() > 0) {
              await this.screensStack.getTopElement().closeSelf();
            }
          } else if (com.isEngross) {
            while (this.screensStack.getSize() > 0) {
              await this.screensStack.getTopElement().closeSelf();
            }
          } //给screen增加屏蔽层


          if (!com.is3d) {
            console.log("需要加屏蔽层========");
            let maskNode = this.getMaskNode();

            if (maskNode == null) {
              let mask = (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
                error: Error()
              }), ResMgr) : ResMgr).getInstance().getPrefabByPath("Lobby/Prefabs/UIMask");

              if (mask != null) {
                maskNode = instantiate(mask);
              }
            }

            if (maskNode != null) {
              //在首次加载的时候会有问题。这个地方需要优化一下
              this.ndScreen.addChild(maskNode);
              maskNode.setContentSize(new Size(screen.width, screen.height));
              this.screenMasks[prefabPath] = maskNode;
            }
          } else {
            console.log("当前为3D场景不需要加屏蔽层");

            for (let key in this.screenMasks) {
              this.screenMasks[key].active = false;
            }
          }

          this.allForms[prefabPath] = com;
          com.fid = prefabPath;

          if (com.is3d) {
            this.ndNode3d.addChild(node);
          } else {
            this.ndScreen.addChild(node);
          }

          com.onShow(...params);
          await com.showEffect();

          if (!com.isEngross) {
            //不独占 将其他screen active 设置为false
            let all = this.screensStack.getElements();

            for (let k = 0; k < all.length; k++) {
              all[k].node.active = false;
            }
          } //将对象保存到stack中


          this.screensStack.push(com);
          console.log('保存场景的堆栈数量 : !!!!!!' + this.screensStack.getSize());
          delete this.loadingForms[prefabPath];
          return com;
        } //打开一个窗口


        async openWin(prefabPath, ...params) {
          console.log(`打开openWin--${prefabPath}`);

          if (prefabPath == null || prefabPath == undefined || prefabPath.length <= 0) {
            warn(`${prefabPath}Win节点不存在`);
            return null;
          }

          if (this.checkFormShowing(prefabPath)) {
            warn(`${prefabPath}win节点正在显示中`);
            return null;
          }

          if (this.checkFormLoading(prefabPath)) {
            warn(`${prefabPath}win节点正在打开...`);
            return null;
          }

          this.loadingForms[prefabPath] = true;
          let pb = (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
            error: Error()
          }), ResMgr) : ResMgr).getInstance().getPrefabByPath(prefabPath); //await this.waitFormsecond();
          //兼容一下，暂时这么写。捕鱼的结构需要调整一下  这里要干掉否则 隐藏bug

          if (pb == null) {
            console.error(`${prefabPath}不存在使用了兼容模式`);
            pb = await (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
              error: Error()
            }), ResMgr) : ResMgr).getInstance().loadForm(prefabPath);
          }

          if (pb == null) {
            console.error(`${prefabPath}win节点加载失败`); //如果加载失败了，则需要将节点从

            delete this.loadingForms[prefabPath];
            return null;
          }

          let node = instantiate(pb);
          let com = node.getComponent(_crd && UIWindow === void 0 ? (_reportPossibleCrUseOfUIWindow({
            error: Error()
          }), UIWindow) : UIWindow);

          if (com == null) {
            warn(`${prefabPath}win加载没有绑定到UIWindow组件上`);
            delete this.loadingForms[prefabPath];
            return null;
          }

          if (com.modalType.opacity >= (_crd && ModalOpacity === void 0 ? (_reportPossibleCrUseOfModalOpacity({
            error: Error()
          }), ModalOpacity) : ModalOpacity).OpacityZero) {
            console.log("开始获取屏蔽层的东西");
            let maskNode = this.getMaskNode();

            if (maskNode == null) {
              //有屏蔽层
              let mask = (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
                error: Error()
              }), ResMgr) : ResMgr).getInstance().getPrefabByPath("Lobby/Prefabs/UIMask");
              maskNode = instantiate(mask);
            }

            this.ndWin.addChild(maskNode);
            maskNode.setContentSize(new Size(view.getFrameSize().width, view.getFrameSize().height));
            this.winMasks[prefabPath] = maskNode;
          }

          com.fid = prefabPath;
          this.ndWin.addChild(node);
          this.winArr.push(com);
          this.allForms[prefabPath] = com;
          com.onShow(...params);

          if (com.modalType.opacity >= (_crd && ModalOpacity === void 0 ? (_reportPossibleCrUseOfModalOpacity({
            error: Error()
          }), ModalOpacity) : ModalOpacity).OpacityZero) {
            let arr = this.getModelTypeComs();
            (_crd && ModalMgr === void 0 ? (_reportPossibleCrUseOfModalMgr({
              error: Error()
            }), ModalMgr) : ModalMgr).getInstance().checkModalWinAndPopUp(arr, this.winMasks, true);
          }

          delete this.loadingForms[prefabPath];
          com.showEffect();
          return com;
        }
        /**
         * 对弹出来的popup进行重新排序
         * @param popup 
         */


        reSortPopup(popup) {
          if (this.popupsArr.length > 0) {
            let tIdx = popup.node.getSiblingIndex();
            let maxIdx = this.popupsArr[this.popupsArr.length - 1].node.getSiblingIndex();
            let bigger = false;

            for (let k = 0; k < this.popupsArr.length; k++) {
              if (this.popupsArr[k].fid == popup.fid) {
                bigger = true;
                continue;
              }

              if (bigger == false) {
                this.popupsArr[k].node.setSiblingIndex(k);
              }

              if (bigger) {
                this.popupsArr[k].node.setSiblingIndex(k - 1);
              }
            }

            popup.node.setSiblingIndex(this.popupsArr.length - 1);
          }
        } //动态计算需要遮罩的win和popups
        //对于popup来说，层级越高，越在上


        getModelTypeComs() {
          let arr = [];

          for (let k = 0; k < this.popupsArr.length; k++) {
            arr.push(this.popupsArr[k]);
          }

          for (let k = 0; k < this.winArr.length; k++) {
            arr.push(this.winArr[k]);
          }

          return arr;
        } //打开wait界面


        async openWait(prefabPath) {
          if (prefabPath == null || prefabPath == undefined || prefabPath.length <= 0) {
            warn(`${prefabPath}win节点不存在`);
            return null;
          }

          if (this.checkFormShowing(prefabPath)) {
            warn(`${prefabPath}Win节点正在显示中`);
            return null;
          }

          if (this.checkFormLoading(prefabPath)) {
            warn(`${prefabPath}win节点正在加载中...`);
            return null;
          }

          this.loadingForms[prefabPath] = true;
          let node = this.getWaitNode();

          if (node == null) {
            let pb = (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
              error: Error()
            }), ResMgr) : ResMgr).getInstance().getPrefabByPath(prefabPath); //兼容一下，暂时这么写。捕鱼的结构需要调整一下  这里要干掉否则 隐藏bug

            if (pb == null) {
              console.error(`${prefabPath}不存在使用了兼容模式`);
              pb = await (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
                error: Error()
              }), ResMgr) : ResMgr).getInstance().loadForm(prefabPath);
            }

            if (pb == null) {
              console.error(`${prefabPath}win节点加载失败`);
              delete this.loadingForms[prefabPath];
              return null;
            }

            node = instantiate(pb);
          }

          let com = node.getComponent(_crd && UIWindow === void 0 ? (_reportPossibleCrUseOfUIWindow({
            error: Error()
          }), UIWindow) : UIWindow);

          if (com == null) {
            warn(`${prefabPath}win加载没有绑定到UIWindow组件上`);
            delete this.loadingForms[prefabPath];
            return null;
          }

          if (com.modalType.opacity >= (_crd && ModalOpacity === void 0 ? (_reportPossibleCrUseOfModalOpacity({
            error: Error()
          }), ModalOpacity) : ModalOpacity).OpacityZero) {
            console.log("开始获取屏蔽层的东西");
            let maskNode = this.getMaskNode();

            if (maskNode == null) {
              //有屏蔽层
              let mask = (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
                error: Error()
              }), ResMgr) : ResMgr).getInstance().getPrefabByPath("Lobby/Prefabs/UIMask");
              maskNode = instantiate(mask);
            }

            if (maskNode == null) {
              console.error(`maskNode为空了=====xxxx`);
            }

            this.ndWin.addChild(maskNode);
            maskNode.setContentSize(new Size(view.getFrameSize().width, view.getFrameSize().height)); // maskNode.getComponent(UITransform)!.contentSize = new Size(view.getFrameSize().width, view.getFrameSize().height);

            this.winMasks[prefabPath] = maskNode;
          }

          com.fid = prefabPath;
          this.ndWin.addChild(node);
          this.winArr.push(com);
          this.allForms[prefabPath] = com;
          com.onShow();
          let arr = this.getModelTypeComs();
          (_crd && ModalMgr === void 0 ? (_reportPossibleCrUseOfModalMgr({
            error: Error()
          }), ModalMgr) : ModalMgr).getInstance().checkModalWinAndPopUp(arr, this.winMasks, true);
          delete this.loadingForms[prefabPath];
          await com.showEffect();
          return com;
        }

        getWaitNode() {
          if (this.waitNodePool.size() > 0) {
            return this.waitNodePool.get();
          }

          return null;
        } //关闭waiting节点


        async closeWaiting(prefabPath) {
          let com = this.allForms[prefabPath];

          if (!com) {
            console.log("closeForm中的com不存在");
            return false;
          }

          console.log("关闭waiting ==========");
          let tIdx = -1;

          if (this.winArr.length > 0) {
            for (let k = 0; k < this.winArr.length; k++) {
              if (this.winArr[k].fid == prefabPath) {
                tIdx = k;
                com = this.winArr[k];
                break;
              }
            }
          }

          if (tIdx >= 0 && tIdx < this.winArr.length) {
            this.winArr.splice(tIdx, 1);
            com.onHide();
            let maskPath = com.fid;
            let maskNode = this.winMasks[maskPath];

            if (maskNode) {
              let t = com.getHideEffectTime(); //消失要有消失动画

              Tween.stopAllByTarget(maskNode);
              tween(maskNode).to(t, {
                opacity: 0
              }, {
                easing: 'linear'
              }) // 当前面的动作都执行完毕后才会调用这个回调函数
              .call(() => {
                if (!this.reBackMaskNode(maskNode)) {
                  maskNode.destroy();
                  (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
                    error: Error()
                  }), ResMgr) : ResMgr).getInstance().destoryForm("Lobby/Prefabs/UIMask");
                }
              }).start();
            }

            delete this.winMasks[maskPath];
            let arr = this.getModelTypeComs();
            (_crd && ModalMgr === void 0 ? (_reportPossibleCrUseOfModalMgr({
              error: Error()
            }), ModalMgr) : ModalMgr).getInstance().checkModalWinAndPopUp(arr, this.winMasks, false);
            await com.hideEffect();
            this.reBackWaitNode(com.node);
            (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
              error: Error()
            }), ResMgr) : ResMgr).getInstance().destoryForm(prefabPath);
          }

          delete this.allForms[prefabPath];
        }

        reBackWaitNode(node) {
          this.waitNodePool.put(node);
        }
        /**
         * 关闭一个UIForm
         * @prefabPath
         */


        async closeForm(prefabPath) {
          console.log("closeForm关闭", prefabPath);

          if (!prefabPath || prefabPath.length <= 0) {
            warn(`${prefabPath}`, "参数错误");
            return false;
          }

          let path = prefabPath.split("_")[0];
          let com = this.allForms[prefabPath];

          if (!com && path.length == prefabPath.length) {
            console.log("closeForm中的com不存在");
            return false;
          } // if(com == null && path.length != prefabPath.length){
          //     for(let i = 0;i<this.bubbleMap.get(path).length;i++){
          //         if(this.bubbleMap.get(path)[i].fid == prefabPath){
          //             com = this.bubbleMap.get(path)[i];
          //             break;
          //         }
          //     }
          // }


          if (!com) {
            console.log("closeForm中的com不存在");
            return false;
          }

          switch (com.formType) {
            case (_crd && FormType === void 0 ? (_reportPossibleCrUseOfFormType({
              error: Error()
            }), FormType) : FormType).FormType_Screen:
              await this.exitToScreen(prefabPath);
              break;

            case (_crd && FormType === void 0 ? (_reportPossibleCrUseOfFormType({
              error: Error()
            }), FormType) : FormType).FormType_Fixed:
              // await this.exitToFixed(prefabPath);
              break;

            case (_crd && FormType === void 0 ? (_reportPossibleCrUseOfFormType({
              error: Error()
            }), FormType) : FormType).FormType_Popup:
              // await this.exitToPopup(prefabPath);
              break;

            case (_crd && FormType === void 0 ? (_reportPossibleCrUseOfFormType({
              error: Error()
            }), FormType) : FormType).FormType_Float:
              // await this.exitToFloat(prefabPath);
              break;

            case (_crd && FormType === void 0 ? (_reportPossibleCrUseOfFormType({
              error: Error()
            }), FormType) : FormType).FormType_Win:
              await this.exitToWin(prefabPath);
              break;

            case (_crd && FormType === void 0 ? (_reportPossibleCrUseOfFormType({
              error: Error()
            }), FormType) : FormType).FormType_Loading:
              // await this.exitToLoading(prefabPath);
              break;

            case (_crd && FormType === void 0 ? (_reportPossibleCrUseOfFormType({
              error: Error()
            }), FormType) : FormType).FormType_Bubble:
              // await this.exitToBubble(prefabPath);
              break;
          }

          return true;
        }
        /**
         * screen退出
         * @param prefabPath 
         * @returns 
         */


        async exitToScreen(prefabPath) {
          console.log(`${prefabPath}exitToScreen`);
          let com = this.allForms[prefabPath];

          if (!com) {
            return false;
          } //screen的退出必须是按照栈退出


          let tcom = this.screensStack.pop();

          if (tcom != com) {
            warn(`${prefabPath}screen没有按顺序退出`);
            return;
          }

          let nextCom = this.screensStack.getTopElement();

          if (nextCom != null) {
            nextCom.node.active = true; //界面重新被激活

            nextCom.reShow();
          }

          com.onHide(); //如果不是独占 （这里其实不用判断是否是独占，只要判定还有screen就显示出来就可以了）

          await com.hideEffect(); //节点需要从父节点移除

          com.node.destroy(); //com.node.removeFromParent();

          (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
            error: Error()
          }), ResMgr) : ResMgr).getInstance().destoryForm(prefabPath);
          delete this.allForms[prefabPath];
          console.log(prefabPath, "exittoscreen 成功");
          let maskNode = this.screenMasks[prefabPath];

          if (maskNode != null && maskNode != undefined) {
            if (!this.reBackMaskNode(maskNode)) {
              maskNode.destroy();
              (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
                error: Error()
              }), ResMgr) : ResMgr).getInstance().destoryForm("Lobby/Prefabs/UIMask");
            }

            delete this.screenMasks[prefabPath];
          }
        }
        /**
         * @description:退出窗口 
         * @param {string} prefabPath
         */


        async exitToWin(prefabPath) {
          let com = null;
          let tIdx = -1;

          if (this.winArr.length > 0) {
            for (let k = 0; k < this.winArr.length; k++) {
              if (this.winArr[k].fid == prefabPath) {
                tIdx = k;
                com = this.winArr[k];
                break;
              }
            }
          }

          if (tIdx >= 0 && tIdx < this.winArr.length) {
            this.winArr.splice(tIdx, 1);
            com.onHide();
            let maskPath = com.fid;
            let maskNode = this.winMasks[maskPath];

            if (maskNode) {
              let t = com.getHideEffectTime(); //消失要有消失动画

              Tween.stopAllByTarget(maskNode); // tween<UIOpacity>(maskNode.getComponent(UIOpacity)!).to(t, { opacity: 0 }, { easing: "linear" }).call(() => {
              //     //maskNode.removeFromParent();
              //     if (!this.reBackMaskNode(maskNode)) {
              //         maskNode.destroy();
              //         ResMgr.getInstance().destoryForm("Lobby/Prefabs/UIMask");
              //     }
              // }).start();

              tween(maskNode).to(t, {
                opacity: 0
              }, {
                easing: 'linear'
              }) // 当前面的动作都执行完毕后才会调用这个回调函数
              .call(() => {
                if (!this.reBackMaskNode(maskNode)) {
                  maskNode.destroy();
                  (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
                    error: Error()
                  }), ResMgr) : ResMgr).getInstance().destoryForm("Lobby/Prefabs/UIMask");
                }
              }).start();
            }

            delete this.winMasks[maskPath];
            let arr = this.getModelTypeComs();
            (_crd && ModalMgr === void 0 ? (_reportPossibleCrUseOfModalMgr({
              error: Error()
            }), ModalMgr) : ModalMgr).getInstance().checkModalWinAndPopUp(arr, this.winMasks, false);
            await com.hideEffect();
            com.node.destroy();
            (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
              error: Error()
            }), ResMgr) : ResMgr).getInstance().destoryForm(prefabPath);
          }

          delete this.allForms[prefabPath];
        }

        reBackMaskNode(node) {
          if (this.maskNodePool.size() >= 10) {
            return false;
          }

          this.maskNodePool.put(node);
          return true;
        }

        static destory() {
          this.instance = null;
          director.off("winsizechanged");
        }

      });

      UIManager.instance = void 0;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=41074a4f905753de947a63df4e3ca23b9e9c7ab6.js.map