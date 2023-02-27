System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, BlockInputEvents, Tween, Node, tween, UIOpacity, _decorator, FormType, ModalOpacity, UIManager, _dec, _class, _class2, _crd, ccclass, property, ModalMgr;

  function _reportPossibleCrUseOfFormType(extras) {
    _reporterNs.report("FormType", "../Config/SysDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfModalOpacity(extras) {
    _reporterNs.report("ModalOpacity", "../Config/SysDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIBase(extras) {
    _reporterNs.report("UIBase", "./UIBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIWindow(extras) {
    _reporterNs.report("UIWindow", "./UIFrom", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIManager(extras) {
    _reporterNs.report("UIManager", "./UIMgr", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      BlockInputEvents = _cc.BlockInputEvents;
      Tween = _cc.Tween;
      Node = _cc.Node;
      tween = _cc.tween;
      UIOpacity = _cc.UIOpacity;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      FormType = _unresolved_2.FormType;
      ModalOpacity = _unresolved_2.ModalOpacity;
    }, function (_unresolved_3) {
      UIManager = _unresolved_3.UIManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8f367mTyUJCR6wgEVzPmahF", "ModalMgr", undefined);

      __checkObsolete__(['BlockInputEvents', 'Component', 'Tween', 'Node', 'tween', 'UIOpacity', 'UITransform', '_decorator']);

      // import { UIManager } from "./UIManager";
      ({
        ccclass,
        property
      } = _decorator);

      _export("ModalMgr", ModalMgr = (_dec = ccclass("ModalMgr"), _dec(_class = (_class2 = class ModalMgr {
        //private uiModal!:UIModalScript;
        //public static popUpRoot = SysDefine.SYS_UIROOT_NAME + '/' + SysDefine.SYS_POPUP_NODE;
        static getInstance() {
          if (this.instance == null) {
            this.instance = new ModalMgr();
          }

          return this.instance;
        }

        initMaskNode(maskNode) {
          this.maskNode = maskNode;
          this.nPopUp = maskNode.parent;
          this.maskNode.active = false;
          this.maskNode.getComponent(UIOpacity).opacity = 0;
        }
        /** 为mask添加颜色 */
        // private async showModal(maskType: ModalType) {
        //     await this.uiModal.showModal(maskType.opacity, maskType.easingTime, maskType.isEasing);
        // }

        /**
         * coms 是窗体
         * maskArr 是屏蔽层的数据
         * @param coms 
         * @param maskArr 
         * @param isOpen 
         */


        checkModalWinAndPopUp(coms, maskArr, isOpen) {
          var _this = this;

          if (isOpen === void 0) {
            isOpen = true;
          }

          //保证永远只显示一个遮罩 显示
          var hasShow = false;
          console.log("检查屏蔽层的这招显示");
          console.log(coms);
          console.log(maskArr);

          for (var _key in maskArr) {
            if (Object.prototype.hasOwnProperty.call(maskArr, _key)) {
              var element = maskArr[_key];
            }
          }

          console.log("检查屏蔽层的这招显示");

          var _loop = function _loop(idx) {
            var com = coms[idx];
            var tcom = null;

            if (com.formType == (_crd && FormType === void 0 ? (_reportPossibleCrUseOfFormType({
              error: Error()
            }), FormType) : FormType).FormType_Win) {
              tcom = com;
            }

            if (tcom != null) {
              var maskKey = tcom.fid;

              if (maskArr[maskKey]) {
                if (tcom.modalType.opacity >= (_crd && ModalOpacity === void 0 ? (_reportPossibleCrUseOfModalOpacity({
                  error: Error()
                }), ModalOpacity) : ModalOpacity).OpacityZero && !hasShow) {
                  maskArr[maskKey].active = true;

                  if (isOpen) {
                    maskArr[maskKey].getComponent(UIOpacity).opacity = 0;

                    var opac = _this.getOpacityByMask(tcom.modalType.opacity);

                    Tween.stopAllByTarget(maskArr[maskKey]);
                    var t = tcom.getShowEffectTime();
                    tween(opac).to(t, {
                      opacity: opac
                    }, {
                      easing: 'linear'
                    }) // 当前面的动作都执行完毕后才会调用这个回调函数
                    .call(() => {
                      if (tcom.modalType.clickMaskClose) {
                        maskArr[maskKey].off(Node.EventType.TOUCH_START);
                        maskArr[maskKey].on(Node.EventType.TOUCH_START, () => {
                          (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
                            error: Error()
                          }), UIManager) : UIManager).getInstance().closeForm(tcom.fid);
                        });

                        if (tcom.getComponent(BlockInputEvents) == null) {
                          tcom.addComponent(BlockInputEvents);
                        }
                      }
                    }).start();
                  } else {
                    var _opac = _this.getOpacityByMask(tcom.modalType.opacity);

                    maskArr[maskKey].getComponent(UIOpacity).opacity = _opac;
                  }

                  hasShow = true;
                } else {
                  var _t = com.getHideEffectTime();

                  tween(maskArr[maskKey].getComponent(UIOpacity)).to(_t, {
                    opacity: 0
                  }, {
                    easing: 'linear'
                  }).call(() => {}).start();
                }
              }
            }
          };

          for (var idx = coms.length - 1; idx >= 0; idx--) {
            _loop(idx);
          }
        } //判断有多少个wins 是否需要屏蔽层


        checkModalWindow(coms) {
          for (var i = coms.length - 1; i >= 0; i--) {
            if (coms[i].modalType.opacity > 0) {
              var uimask = coms[i].node.getChildByName("UIMask");
              uimask.active = true;
              var opac = uimask.getComponent(UIOpacity).opacity;
              uimask.getComponent(UIOpacity).opacity = 0;
              tween(uimask.getComponent(UIOpacity)).to(0.5, {
                opacity: opac
              }, {
                easing: "linear"
              }).start();
            } else {
              (function () {
                var uimask = coms[i].node.getChildByName("UIMask");

                if (uimask.active) {
                  tween(uimask.getComponent(UIOpacity)).to(0.5, {
                    opacity: 0
                  }, {
                    easing: "linear"
                  }).call(() => {
                    uimask.active = false;
                  }).start();
                }
              })();
            }
          }
        }

        getOpacityByMask(maskOpacity) {
          var tOp = 0;

          if (maskOpacity == (_crd && ModalOpacity === void 0 ? (_reportPossibleCrUseOfModalOpacity({
            error: Error()
          }), ModalOpacity) : ModalOpacity).OpacityZero) {
            tOp = 1;
          } else if (maskOpacity == (_crd && ModalOpacity === void 0 ? (_reportPossibleCrUseOfModalOpacity({
            error: Error()
          }), ModalOpacity) : ModalOpacity).OpacityLow) {
            tOp = 60;
          } else if (maskOpacity == (_crd && ModalOpacity === void 0 ? (_reportPossibleCrUseOfModalOpacity({
            error: Error()
          }), ModalOpacity) : ModalOpacity).OpacityHalf) {
            tOp = 125;
          } else if (maskOpacity == (_crd && ModalOpacity === void 0 ? (_reportPossibleCrUseOfModalOpacity({
            error: Error()
          }), ModalOpacity) : ModalOpacity).OpacityHigh) {
            tOp = 200;
          } else if (maskOpacity == (_crd && ModalOpacity === void 0 ? (_reportPossibleCrUseOfModalOpacity({
            error: Error()
          }), ModalOpacity) : ModalOpacity).OpacityFull) {
            tOp = 255;
          }

          return tOp;
        }

      }, _class2.instance = void 0, _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a9c1f9750572119b9be2468168ecbb091dbc9a3f.js.map