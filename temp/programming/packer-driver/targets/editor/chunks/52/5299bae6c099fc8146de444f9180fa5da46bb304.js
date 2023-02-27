System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Asset, Component, director, Label, macro, ProgressBar, sp, _decorator, reslist, ResMgr, ResType, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _crd, ccclass, property, Launch;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfreslist(extras) {
    _reporterNs.report("reslist", "../Lobby/reslist", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResMgr(extras) {
    _reporterNs.report("ResMgr", "../Script/Base/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResType(extras) {
    _reporterNs.report("ResType", "../Script/Base/ResMgr", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Asset = _cc.Asset;
      Component = _cc.Component;
      director = _cc.director;
      Label = _cc.Label;
      macro = _cc.macro;
      ProgressBar = _cc.ProgressBar;
      sp = _cc.sp;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      reslist = _unresolved_2.reslist;
    }, function (_unresolved_3) {
      ResMgr = _unresolved_3.ResMgr;
      ResType = _unresolved_3.ResType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "94930YIYOtGRJjXih8K2mvh", "Lauch", undefined);

      __checkObsolete__(['Asset', 'Component', 'director', 'Label', 'macro', 'ProgressBar', 'sp', '_decorator']);

      /*
       * @Description: 启动界面
       * @Author: Super_Javan
       * @Date: 2022-11-29 12:05:17
       * @LastEditTime: 2022-11-29 15:32:30
       * @LastEditors: Super_Javan
       */
      ({
        ccclass,
        property
      } = _decorator);

      _export("Launch", Launch = (_dec = ccclass('Launch'), _dec2 = property(ProgressBar), _dec3 = property(Label), _dec4 = property(sp.Skeleton), _dec5 = property(Asset), _dec6 = property(ProgressBar), _dec7 = property(Label), _dec(_class = (_class2 = class Launch extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "progressBar", _descriptor, this);

          _initializerDefineProperty(this, "lblTxt", _descriptor2, this);

          _initializerDefineProperty(this, "spinAni", _descriptor3, this);

          _initializerDefineProperty(this, "manifestUrl", _descriptor4, this);

          _initializerDefineProperty(this, "byteProgress", _descriptor5, this);

          _initializerDefineProperty(this, "info", _descriptor6, this);

          this.udpateTips = null;
        }

        start() {
          //禁止多点触摸
          macro.ENABLE_MULTI_TOUCH = false;
          this.progressBar.progress = 0;
          this.lblTxt.string = `加载中...0/100`;
          this.startLoad();
        }

        async startLoad() {
          let list = _crd && reslist === void 0 ? (_reportPossibleCrUseOfreslist({
            error: Error()
          }), reslist) : reslist;
          await (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
            error: Error()
          }), ResMgr) : ResMgr).getInstance().preloadBundleOnly('Lobby');
          let map = new Map([[(_crd && ResType === void 0 ? (_reportPossibleCrUseOfResType({
            error: Error()
          }), ResType) : ResType).ResType_Prefab, true], [(_crd && ResType === void 0 ? (_reportPossibleCrUseOfResType({
            error: Error()
          }), ResType) : ResType).ResType_Material, true], [(_crd && ResType === void 0 ? (_reportPossibleCrUseOfResType({
            error: Error()
          }), ResType) : ResType).ResType_AudioClip, true], [(_crd && ResType === void 0 ? (_reportPossibleCrUseOfResType({
            error: Error()
          }), ResType) : ResType).ResType_SpriteAtlas, true], [(_crd && ResType === void 0 ? (_reportPossibleCrUseOfResType({
            error: Error()
          }), ResType) : ResType).ResType_SpriteFrame, true]]);
          return await (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
            error: Error()
          }), ResMgr) : ResMgr).getInstance().preLoad(list, this.updateProgress.bind(this), this.onResLoadComplete.bind(this), map);
        }

        updateProgress(progress) {
          this.progressBar.progress = progress;
          let progressVal = Math.round(progress * 100);

          if (this.lblTxt != null) {
            this.lblTxt.string = `加载中...${progressVal}/100`;
          }
        } //加载完成回调


        onResLoadComplete() {
          director.loadScene("Main", (err, scene) => {
            if (err != null) {
              console.log(err);
            }
          });
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "progressBar", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "lblTxt", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "spinAni", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "manifestUrl", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "byteProgress", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "info", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5299bae6c099fc8146de444f9180fa5da46bb304.js.map