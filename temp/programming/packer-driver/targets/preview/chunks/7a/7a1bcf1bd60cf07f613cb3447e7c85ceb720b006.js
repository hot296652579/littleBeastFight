System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, director, instantiate, js, NodePool, warn, Widget, ResMgr, PriorityStake, UIScreen, UIManager, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfResMgr(extras) {
    _reporterNs.report("ResMgr", "../Base/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPriorityStake(extras) {
    _reporterNs.report("PriorityStake", "../Utils/PriorityStake", _context.meta, extras);
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
      warn = _cc.warn;
      Widget = _cc.Widget;
    }, function (_unresolved_2) {
      ResMgr = _unresolved_2.ResMgr;
    }, function (_unresolved_3) {
      PriorityStake = _unresolved_3.PriorityStake;
    }, function (_unresolved_4) {
      UIScreen = _unresolved_4.UIScreen;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ce77f5q2qhAo7y8uRpyeMwn", "UIMgr", undefined);

      __checkObsolete__(['director', 'instantiate', 'js', 'NodePool', 'Size', 'Tween', 'tween', 'view', 'warn', 'Widget']);

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
            var maskNode = this.maskNodePool.get();
            return maskNode;
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
              // this.ndScreen!.addChild(maskNode!);
              // maskNode!.setContentSize(new Size(screen.width, screen.height));
              _this.screenMasks[prefabPath] = maskNode;
            }

            _this.allForms[prefabPath] = com;
            com.fid = prefabPath; // this.ndScreen!.addChild(node);

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
        // public async openWin(prefabPath: string, ...params: any): Promise<UIWindow | null> {
        //     console.log(`打开openWin--${prefabPath}`);
        //     if (prefabPath == null || prefabPath == undefined || prefabPath.length <= 0) {
        //         warn(`${prefabPath}Win节点不存在`);
        //         return null;
        //     }
        //     if (this.checkFormShowing(prefabPath)) {
        //         warn(`${prefabPath}win节点正在显示中`);
        //         return null;
        //     }
        //     if (this.checkFormLoading(prefabPath)) {
        //         warn(`${prefabPath}win节点正在打开...`)
        //         return null;
        //     }
        //     this.loadingForms[prefabPath] = true;
        //     let pb = ResMgr.getInstance().getPrefabByPath(prefabPath);
        //     //await this.waitFormsecond();
        //     //兼容一下，暂时这么写。捕鱼的结构需要调整一下  这里要干掉否则 隐藏bug
        //     if (pb == null) {
        //         console.error(`${prefabPath}不存在使用了兼容模式`);
        //         pb = await ResMgr.getInstance().loadForm(prefabPath);
        //     }
        //     if (pb == null) {
        //         console.error(`${prefabPath}win节点加载失败`);
        //         //如果加载失败了，则需要将节点从
        //         delete this.loadingForms[prefabPath];
        //         return null;
        //     }
        //     let node = instantiate(pb);
        //     let com = node.getComponent(UIWindow);
        //     if (com == null) {
        //         warn(`${prefabPath}win加载没有绑定到UIWindow组件上`);
        //         delete this.loadingForms[prefabPath];
        //         return null;
        //     }
        //     if (com.modalType.opacity >= ModalOpacity.OpacityZero) {
        //         console.log("开始获取屏蔽层的东西");
        //         let maskNode = this.getMaskNode();
        //         if (maskNode == null) {
        //             //有屏蔽层
        //             let mask = ResMgr.getInstance().getPrefabByPath("Lobby/Prefabs/UIMask");
        //             maskNode = instantiate(mask!);
        //         }
        //         this.ndWin!.addChild(maskNode);
        //         maskNode.setContentSize(new Size(view.getFrameSize().width, view.getFrameSize().height));
        //         this.winMasks[prefabPath] = maskNode;
        //     }
        //     com.fid = prefabPath;
        //     this.ndWin!.addChild(node);
        //     this.winArr.push(com);
        //     this.allForms[prefabPath] = com;
        //     com.onShow(...params);
        //     if (com.modalType.opacity >= ModalOpacity.OpacityZero) {
        //         let arr: UIBase[] = this.getModelTypeComs();
        //         ModalMgr.getInstance().checkModalWinAndPopUp(arr, this.winMasks, true);
        //     }
        //     delete this.loadingForms[prefabPath];
        //     com.showEffect();
        //     return com;
        // }

        /**
         * 关闭一个UIForm
         * @prefabPath
         */


        closeForm(prefabPath) {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            console.log("closeForm关闭", prefabPath);

            if (!prefabPath || prefabPath.length <= 0) {
              warn("" + prefabPath, "参数错误");
              return false;
            }

            var path = prefabPath.split("_")[0];
            var com = _this2.allForms[prefabPath];

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
              case FormType.FormType_Screen:
                yield _this2.exitToScreen(prefabPath);
                break;

              case FormType.FormType_Fixed:
                // await this.exitToFixed(prefabPath);
                break;

              case FormType.FormType_Popup:
                // await this.exitToPopup(prefabPath);
                break;

              case FormType.FormType_Float:
                // await this.exitToFloat(prefabPath);
                break;

              case FormType.FormType_Win:
                yield _this2.exitToWin(prefabPath);
                break;

              case FormType.FormType_Loading:
                // await this.exitToLoading(prefabPath);
                break;

              case FormType.FormType_Bubble:
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
        // private async exitToScreen(prefabPath: string) {
        //     console.log(`${prefabPath}exitToScreen`);
        //     let com = this.allForms[prefabPath];
        //     if (!com) {
        //         return false;
        //     }
        //     //screen的退出必须是按照栈退出
        //     let tcom = this.screensStack.pop();
        //     if (tcom != com) {
        //         warn(`${prefabPath}screen没有按顺序退出`);
        //         return;
        //     }
        //     let nextCom = this.screensStack.getTopElement();
        //     if (nextCom != null) {
        //         nextCom.node.active = true;
        //         //界面重新被激活
        //         nextCom.reShow();
        //     }
        //     com.onHide();
        //     //如果不是独占 （这里其实不用判断是否是独占，只要判定还有screen就显示出来就可以了）
        //     await com.hideEffect();
        //     //节点需要从父节点移除
        //     com.node.destroy();
        //     //com.node.removeFromParent();
        //     ResMgr.getInstance().destoryForm(prefabPath);
        //     delete this.allForms[prefabPath];
        //     console.log(prefabPath, "exittoscreen 成功");
        //     let maskNode = this.screenMasks[prefabPath];
        //     if (maskNode != null && maskNode != undefined) {
        //         if (!this.reBackMaskNode(maskNode)) {
        //             maskNode.destroy();
        //             ResMgr.getInstance().destoryForm("Lobby/Prefabs/UIMask");
        //         }
        //         delete this.screenMasks[prefabPath];
        //     }
        // }

        /**
         * @description:退出窗口 
         * @param {string} prefabPath
         */
        // private async exitToWin(prefabPath: string) {
        //     let com: UIWindow | null = null;
        //     let tIdx: number = -1;
        //     if (this.winArr.length > 0) {
        //         for (let k = 0; k < this.winArr.length; k++) {
        //             if (this.winArr[k].fid == prefabPath) {
        //                 tIdx = k;
        //                 com = this.winArr[k];
        //                 break;
        //             }
        //         }
        //     }
        //     if (tIdx >= 0 && tIdx < this.winArr.length) {
        //         this.winArr.splice(tIdx, 1);
        //         com!.onHide();
        //         let maskPath = com!.fid;
        //         let maskNode = this.winMasks[maskPath];
        //         if (maskNode) {
        //             let t = com!.getHideEffectTime();
        //             //消失要有消失动画
        //             Tween.stopAllByTarget(maskNode);
        //             tween(maskNode)
        //                 .to(t, { opacity: 0 }, { easing: 'linear' })
        //                 // 当前面的动作都执行完毕后才会调用这个回调函数
        //                 .call(() => {
        //                     if (!this.reBackMaskNode(maskNode)) {
        //                         maskNode.destroy();
        //                         ResMgr.getInstance().destoryForm("Lobby/Prefabs/UIMask");
        //                     }
        //                 })
        //                 .start()
        //         }
        //         delete this.winMasks[maskPath];
        //         let arr: UIBase[] = this.getModelTypeComs();
        //         ModalMgr.getInstance().checkModalWinAndPopUp(arr, this.winMasks, false);
        //         await com!.hideEffect();
        //         com!.node.destroy();
        //         ResMgr.getInstance().destoryForm(prefabPath);
        //     }
        //     delete this.allForms[prefabPath];
        // }
        // private reBackMaskNode(node: Node): boolean {
        //     if (this.maskNodePool.size() >= 10) {
        //         return false;
        //     }
        //     this.maskNodePool.put(node);
        //     return true;
        // }


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
//# sourceMappingURL=7a1bcf1bd60cf07f613cb3447e7c85ceb720b006.js.map