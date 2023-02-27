System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, director, instantiate, js, NodePool, Size, Tween, tween, view, warn, Widget, UITransform, UIOpacity, ResMgr, FormType, ModalOpacity, PriorityStake, ModalMgr, UIScreen, UIWindow, UIManager, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfResMgr(extras) {
    _reporterNs.report("ResMgr", "../Base/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFormType(extras) {
    _reporterNs.report("FormType", "../Config/SysDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfModalOpacity(extras) {
    _reporterNs.report("ModalOpacity", "../Config/SysDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPriorityStake(extras) {
    _reporterNs.report("PriorityStake", "../Utils/PriorityStake", _context.meta, extras);
  }

  function _reportPossibleCrUseOfModalMgr(extras) {
    _reporterNs.report("ModalMgr", "./ModalMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIBase(extras) {
    _reporterNs.report("UIBase", "./UIBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIScreen(extras) {
    _reporterNs.report("UIScreen", "./UIFrom", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIWindow(extras) {
    _reporterNs.report("UIWindow", "./UIFrom", _context.meta, extras);
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
      instantiate = _cc.instantiate;
      js = _cc.js;
      NodePool = _cc.NodePool;
      Size = _cc.Size;
      Tween = _cc.Tween;
      tween = _cc.tween;
      view = _cc.view;
      warn = _cc.warn;
      Widget = _cc.Widget;
      UITransform = _cc.UITransform;
      UIOpacity = _cc.UIOpacity;
    }, function (_unresolved_2) {
      ResMgr = _unresolved_2.ResMgr;
    }, function (_unresolved_3) {
      FormType = _unresolved_3.FormType;
      ModalOpacity = _unresolved_3.ModalOpacity;
    }, function (_unresolved_4) {
      PriorityStake = _unresolved_4.PriorityStake;
    }, function (_unresolved_5) {
      ModalMgr = _unresolved_5.ModalMgr;
    }, function (_unresolved_6) {
      UIScreen = _unresolved_6.UIScreen;
      UIWindow = _unresolved_6.UIWindow;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ce77f5q2qhAo7y8uRpyeMwn", "UIMgr", undefined);

      __checkObsolete__(['director', 'instantiate', 'js', 'NodePool', 'Node', 'Size', 'Tween', 'tween', 'view', 'warn', 'Widget', 'UITransform', 'UIOpacity']);

      _export("UIManager", UIManager = class UIManager {
        constructor() {
          this.ndScreen = null;
          this.ndWin = null;
          this.allForms = js.createMap();
          this.screensStack = new (_crd && PriorityStake === void 0 ? (_reportPossibleCrUseOfPriorityStake({
            error: Error()
          }), PriorityStake) : PriorityStake)();
          this.loadingForms = js.createMap();
          this.winArr = [];
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
          var uiscreens = this.screensStack.getElements();

          for (var k = 0; k < uiscreens.length; k++) {
            console.log("窗口变化，要重新刷新一下======");
            uiscreens[k].node.getComponent(Widget).updateAlignment();
          }
        } //初始化


        init(ndScreen, ndWin) {
          this.ndScreen = ndScreen;
          this.ndWin = ndWin;
        } //判断一个界面是否正在显示


        checkFormShowing(prefabPath) {
          var com = this.allForms[prefabPath];

          if (!com) {
            return false;
          }

          return com.node.active;
        }

        checkFormLoading(prefabPath) {
          var com = this.loadingForms[prefabPath];
          return !!com;
        }

        getMaskNode() {
          if (this.maskNodePool.size() > 0) {
            return this.maskNodePool.get();
          }

          return null;
        } //打开一个screen


        openScreen(prefabPath) {
          var _arguments = arguments,
              _this = this;

          return _asyncToGenerator(function* () {
            console.log("\u6253\u5F00openScene--" + prefabPath);

            if (prefabPath == null || prefabPath == undefined || prefabPath.length <= 0) {
              warn(prefabPath + "\uFF0C\u53C2\u6570\u9519\u8BEF");
              return null;
            } //当前窗体正在显示


            if (_this.checkFormShowing(prefabPath)) {
              warn(prefabPath + "\u7A97\u4F53\u6B63\u5728\u663E\u793A\u4E2D");
              return null;
            }

            if (_this.checkFormLoading(prefabPath)) {
              warn(prefabPath + "\u6B63\u5728\u52A0\u8F7D\u4E2D");
              return null;
            }

            _this.loadingForms[prefabPath] = true;
            var pb = (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
              error: Error()
            }), ResMgr) : ResMgr).getInstance().getPrefabByPath(prefabPath);

            if (pb == null) {
              console.error("兼容模式 需要 去健在窗体"); // pb = await ResMgr.getInstance().loadForm(prefabPath)!;
            }

            if (pb == null) {
              warn(prefabPath + "\u7A97\u4F53\u52A0\u8F7D\u9519\u8BEF!");
              delete _this.loadingForms[prefabPath];
              return null;
            }

            var node = instantiate(pb);
            var com = node.getComponent(_crd && UIScreen === void 0 ? (_reportPossibleCrUseOfUIScreen({
              error: Error()
            }), UIScreen) : UIScreen);

            if (com == null) {
              warn(prefabPath + "\u6CA1\u6709\u7ED1\u5B9AUIScreen\u7EC4\u4EF6");
              delete _this.loadingForms[prefabPath];
              return null;
            }

            if (com.isOnleyEngross) {
              //关闭掉所有的screen
              console.log("关闭所有的screeen", _this.screensStack.getSize(), "==========");

              while (_this.screensStack.getSize() > 0) {
                yield _this.screensStack.getTopElement().closeSelf();
              }
            } else if (com.isEngross) {
              while (_this.screensStack.getSize() > 0) {
                yield _this.screensStack.getTopElement().closeSelf();
              }
            } //给screen增加屏蔽层


            console.log("需要加屏蔽层========");

            var maskNode = _this.getMaskNode();

            if (maskNode == null) {
              var mask = (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
                error: Error()
              }), ResMgr) : ResMgr).getInstance().getPrefabByPath("Lobby/Prefabs/UIMask");

              if (mask != null) {
                maskNode = instantiate(mask);
              }
            }

            if (maskNode != null) {
              //在首次加载的时候会有问题。这个地方需要优化一下
              _this.ndScreen.addChild(maskNode);

              maskNode.getComponent(UITransform).setContentSize(new Size(screen.width, screen.height));
              _this.screenMasks[prefabPath] = maskNode;
            }

            _this.allForms[prefabPath] = com;
            com.fid = prefabPath;

            _this.ndScreen.addChild(node);

            for (var _len = _arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
              params[_key - 1] = _arguments[_key];
            }

            com.onShow(...params);
            yield com.showEffect();

            if (!com.isEngross) {
              //不独占 将其他screen active 设置为false
              var all = _this.screensStack.getElements();

              for (var k = 0; k < all.length; k++) {
                all[k].node.active = false;
              }
            } //将对象保存到stack中


            _this.screensStack.push(com);

            console.log('保存场景的堆栈数量 : !!!!!!' + _this.screensStack.getSize());
            delete _this.loadingForms[prefabPath];
            return com;
          })();
        } //打开一个窗口


        openWin(prefabPath) {
          var _arguments2 = arguments,
              _this2 = this;

          return _asyncToGenerator(function* () {
            console.log("\u6253\u5F00openWin--" + prefabPath);

            if (prefabPath == null || prefabPath == undefined || prefabPath.length <= 0) {
              warn(prefabPath + "Win\u8282\u70B9\u4E0D\u5B58\u5728");
              return null;
            }

            if (_this2.checkFormShowing(prefabPath)) {
              warn(prefabPath + "win\u8282\u70B9\u6B63\u5728\u663E\u793A\u4E2D");
              return null;
            }

            if (_this2.checkFormLoading(prefabPath)) {
              warn(prefabPath + "win\u8282\u70B9\u6B63\u5728\u6253\u5F00...");
              return null;
            }

            _this2.loadingForms[prefabPath] = true;
            var pb = (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
              error: Error()
            }), ResMgr) : ResMgr).getInstance().getPrefabByPath(prefabPath); //await this.waitFormsecond();
            //兼容一下，暂时这么写。捕鱼的结构需要调整一下  这里要干掉否则 隐藏bug

            if (pb == null) {
              console.error(prefabPath + "\u4E0D\u5B58\u5728\u4F7F\u7528\u4E86\u517C\u5BB9\u6A21\u5F0F");
              pb = yield (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
                error: Error()
              }), ResMgr) : ResMgr).getInstance().loadForm(prefabPath);
            }

            if (pb == null) {
              console.error(prefabPath + "win\u8282\u70B9\u52A0\u8F7D\u5931\u8D25"); //如果加载失败了，则需要将节点从

              delete _this2.loadingForms[prefabPath];
              return null;
            }

            var node = instantiate(pb);
            var com = node.getComponent(_crd && UIWindow === void 0 ? (_reportPossibleCrUseOfUIWindow({
              error: Error()
            }), UIWindow) : UIWindow);

            if (com == null) {
              warn(prefabPath + "win\u52A0\u8F7D\u6CA1\u6709\u7ED1\u5B9A\u5230UIWindow\u7EC4\u4EF6\u4E0A");
              delete _this2.loadingForms[prefabPath];
              return null;
            }

            if (com.modalType.opacity >= (_crd && ModalOpacity === void 0 ? (_reportPossibleCrUseOfModalOpacity({
              error: Error()
            }), ModalOpacity) : ModalOpacity).OpacityZero) {
              console.log("开始获取屏蔽层的东西");

              var maskNode = _this2.getMaskNode();

              if (maskNode == null) {
                //有屏蔽层
                var mask = (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
                  error: Error()
                }), ResMgr) : ResMgr).getInstance().getPrefabByPath("Lobby/Prefabs/UIMask");
                maskNode = instantiate(mask);
              }

              _this2.ndWin.addChild(maskNode);

              maskNode.getComponent(UITransform).setContentSize(new Size(view.getFrameSize().width, view.getFrameSize().height));
              _this2.winMasks[prefabPath] = maskNode;
            }

            com.fid = prefabPath;

            _this2.ndWin.addChild(node);

            _this2.winArr.push(com);

            _this2.allForms[prefabPath] = com;

            for (var _len2 = _arguments2.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
              params[_key2 - 1] = _arguments2[_key2];
            }

            com.onShow(...params);

            if (com.modalType.opacity >= (_crd && ModalOpacity === void 0 ? (_reportPossibleCrUseOfModalOpacity({
              error: Error()
            }), ModalOpacity) : ModalOpacity).OpacityZero) {
              var arr = _this2.getModelTypeComs();

              (_crd && ModalMgr === void 0 ? (_reportPossibleCrUseOfModalMgr({
                error: Error()
              }), ModalMgr) : ModalMgr).getInstance().checkModalWinAndPopUp(arr, _this2.winMasks, true);
            }

            delete _this2.loadingForms[prefabPath];
            com.showEffect();
            return com;
          })();
        } //动态计算需要遮罩的win和popups
        //对于popup来说，层级越高，越在上


        getModelTypeComs() {
          var arr = [];

          for (var k = 0; k < this.winArr.length; k++) {
            arr.push(this.winArr[k]);
          }

          return arr;
        }
        /**
         * 关闭一个UIForm
         * @prefabPath
         */


        closeForm(prefabPath) {
          var _this3 = this;

          return _asyncToGenerator(function* () {
            console.log("closeForm关闭", prefabPath);

            if (!prefabPath || prefabPath.length <= 0) {
              warn("" + prefabPath, "参数错误");
              return false;
            }

            var path = prefabPath.split("_")[0];
            var com = _this3.allForms[prefabPath];

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
                yield _this3.exitToScreen(prefabPath);
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
                yield _this3.exitToWin(prefabPath);
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
          })();
        }
        /**
         * screen退出
         * @param prefabPath 
         * @returns 
         */


        exitToScreen(prefabPath) {
          var _this4 = this;

          return _asyncToGenerator(function* () {
            console.log(prefabPath + "exitToScreen");
            var com = _this4.allForms[prefabPath];

            if (!com) {
              return false;
            } //screen的退出必须是按照栈退出


            var tcom = _this4.screensStack.pop();

            if (tcom != com) {
              warn(prefabPath + "screen\u6CA1\u6709\u6309\u987A\u5E8F\u9000\u51FA");
              return;
            }

            var nextCom = _this4.screensStack.getTopElement();

            if (nextCom != null) {
              nextCom.node.active = true; //界面重新被激活

              nextCom.reShow();
            }

            com.onHide(); //如果不是独占 （这里其实不用判断是否是独占，只要判定还有screen就显示出来就可以了）

            yield com.hideEffect(); //节点需要从父节点移除

            com.node.destroy(); //com.node.removeFromParent();

            (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
              error: Error()
            }), ResMgr) : ResMgr).getInstance().destoryForm(prefabPath);
            delete _this4.allForms[prefabPath];
            console.log(prefabPath, "exittoscreen 成功");
            var maskNode = _this4.screenMasks[prefabPath];

            if (maskNode != null && maskNode != undefined) {
              if (!_this4.reBackMaskNode(maskNode)) {
                maskNode.destroy();
                (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
                  error: Error()
                }), ResMgr) : ResMgr).getInstance().destoryForm("Lobby/Prefabs/UIMask");
              }

              delete _this4.screenMasks[prefabPath];
            }
          })();
        }
        /**
         * @description:退出窗口 
         * @param {string} prefabPath
         */


        exitToWin(prefabPath) {
          var _this5 = this;

          return _asyncToGenerator(function* () {
            var com = null;
            var tIdx = -1;

            if (_this5.winArr.length > 0) {
              for (var k = 0; k < _this5.winArr.length; k++) {
                if (_this5.winArr[k].fid == prefabPath) {
                  tIdx = k;
                  com = _this5.winArr[k];
                  break;
                }
              }
            }

            if (tIdx >= 0 && tIdx < _this5.winArr.length) {
              _this5.winArr.splice(tIdx, 1);

              com.onHide();
              var maskPath = com.fid;
              var maskNode = _this5.winMasks[maskPath];

              if (maskNode) {
                var t = com.getHideEffectTime(); //消失要有消失动画

                Tween.stopAllByTarget(maskNode);
                var opacity = maskNode.getComponent(UIOpacity).opacity;
                tween(opacity).to(t, {
                  opacity: 0
                }, {
                  easing: 'linear'
                }) // 当前面的动作都执行完毕后才会调用这个回调函数
                .call(() => {
                  if (!_this5.reBackMaskNode(maskNode)) {
                    maskNode.destroy();
                    (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
                      error: Error()
                    }), ResMgr) : ResMgr).getInstance().destoryForm("Lobby/Prefabs/UIMask");
                  }
                }).start();
              }

              delete _this5.winMasks[maskPath];

              var arr = _this5.getModelTypeComs();

              (_crd && ModalMgr === void 0 ? (_reportPossibleCrUseOfModalMgr({
                error: Error()
              }), ModalMgr) : ModalMgr).getInstance().checkModalWinAndPopUp(arr, _this5.winMasks, false);
              yield com.hideEffect();
              com.node.destroy();
              (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
                error: Error()
              }), ResMgr) : ResMgr).getInstance().destoryForm(prefabPath);
            }

            delete _this5.allForms[prefabPath];
          })();
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
//# sourceMappingURL=688a97d141f2f3ebaec1468d3d3d7d8848c5be75.js.map