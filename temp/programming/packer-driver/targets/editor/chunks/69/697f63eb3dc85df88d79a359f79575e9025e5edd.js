System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, js, SpriteAtlas, sp, assetManager, error, splitFormName, ResMgr, _crd, ccclass, property, ResType;

  function _reportPossibleCrUseOfsplitFormName(extras) {
    _reporterNs.report("splitFormName", "../Utils/Utils", _context.meta, extras);
  }

  _export({
    ResMgr: void 0,
    ResType: void 0
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      js = _cc.js;
      SpriteAtlas = _cc.SpriteAtlas;
      sp = _cc.sp;
      assetManager = _cc.assetManager;
      error = _cc.error;
    }, function (_unresolved_2) {
      splitFormName = _unresolved_2.splitFormName;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "65d86VKBvhCVa0WALGo31A7", "ResMgr", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'js', 'Prefab', 'SpriteFrame', 'SpriteAtlas', 'AudioClip', 'sp', 'AssetManager', 'assetManager', 'error']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 资源类型
       */

      (function (ResType) {
        ResType[ResType["ResType_UnKnow"] = 0] = "ResType_UnKnow";
        ResType[ResType["ResType_SpriteFrame"] = 1] = "ResType_SpriteFrame";
        ResType[ResType["ResType_SpriteAtlas"] = 2] = "ResType_SpriteAtlas";
        ResType[ResType["ResType_AudioClip"] = 3] = "ResType_AudioClip";
        ResType[ResType["ResType_Prefab"] = 4] = "ResType_Prefab";
        ResType[ResType["ResType_Spine"] = 5] = "ResType_Spine";
        ResType[ResType["ResType_Fnt"] = 6] = "ResType_Fnt";
        ResType[ResType["ResType_Animation"] = 7] = "ResType_Animation";
        ResType[ResType["ResType_Material"] = 8] = "ResType_Material";
        ResType[ResType["ResType_Shader"] = 9] = "ResType_Shader";
        ResType[ResType["ResType_Particle"] = 10] = "ResType_Particle";
      })(ResType || _export("ResType", ResType = {}));

      _export("ResMgr", ResMgr = class ResMgr {
        constructor() {
          this.preloadProgressCallBack = null;
          this.preloadCompleteCallBack = null;
          this.subGameBundle = new Map();
          this.loadPrefabWithBundleKey = new Map();
          this.loadSpriteFrameWithBundleKey = new Map();
          this.loadSpriteAtlasWithBundleKey = new Map();
          this.loadAudioClipWithBundleKey = new Map();
          this.loadSpineWithBundleKey = new Map();
          this.loadProgress = js.createMap();
        }

        static getInstance() {
          if (this.instance == null) {
            this.instance = new ResMgr();
          }

          return this.instance;
        }

        /**
         * @description: 仅仅加载bunle。主要用途为：子游戏在进入之前，要先加载bundle，然后才能执行对应的逻辑
        大厅字游戏必须保证 大厅对子游戏没有资源和代码引用。
        子游戏可以引用大厅的逻辑代码和资源
        */
        preloadBundleOnly(bundleName) {
          return new Promise((resolve, reject) => {
            if (this.subGameBundle.has(bundleName)) {
              resolve(true);
              return;
            }

            assetManager.loadBundle(bundleName, (err, bundle) => {
              if (err != null) {
                resolve(false);
                return;
              }

              this.subGameBundle.set(bundleName, bundle);
              resolve(true);
            });
          });
        }
        /**
         * @description: 加载list里面对应的每个文件(预设,spriteFrame,图集,音频等)
         * @param {Map} list
         * @param {*} number
         * @param {Function} progressCb
         * @param {Function} completeCallBack
         * @param {*} resType
         * @param {*} boolean
         */


        async preLoad(list, progressCb, completeCallBack, resType) {
          if (resType == null || resType == undefined) {
            resType = new Map();
          }

          if (resType.size == 0) {
            resType.set(ResType.ResType_Prefab, true);
            resType.set(ResType.ResType_AudioClip, true);
          }

          this.preloadProgressCallBack = progressCb;
          this.preloadCompleteCallBack = completeCallBack;
          this.loadProgress = js.createMap();
          let map = list;
          let idx = 0;

          for (let key of map.keys()) {
            idx++;

            if (map.get(key) == ResType.ResType_Prefab && resType.has(ResType.ResType_Prefab) && resType.get(ResType.ResType_Prefab)) {
              //加载 预制体 prefab
              this.loadProgress[key] = 0;
              setTimeout(() => {
                this.preloadBundlePrefab(key);
              }, 0);
            } else if (map.get(key) == ResType.ResType_SpriteFrame && resType.has(ResType.ResType_SpriteFrame) && resType.get(ResType.ResType_SpriteFrame)) {
              //图片 spriteFrame
              this.loadProgress[key] = 0;
              setTimeout(() => {
                this.preloadBunleSpriteFrame(key);
              }, 0);
            } else if (map.get(key) == ResType.ResType_SpriteAtlas && resType.has(ResType.ResType_SpriteAtlas) && resType.get(ResType.ResType_SpriteAtlas)) {
              //图集 spriteAtlas
              this.loadProgress[key] = 0;
              setTimeout(() => {
                this.preloadBundleSpriteAtlas(key);
              }, 0);
            } else if (map.get(key) == ResType.ResType_Spine && resType.has(ResType.ResType_Spine) && resType.get(ResType.ResType_Spine)) {
              //spine
              this.loadProgress[key] = 0;
              setTimeout(() => {
                this.preloadBundleSpine(key);
              }, 0);
            } else if (map.get(key) == ResType.ResType_AudioClip && resType.has(ResType.ResType_AudioClip) && resType.get(ResType.ResType_AudioClip)) {
              //音频资源 AudioClip
              this.loadProgress[key] = 0;
              setTimeout(() => {
                this.preloadBundleAudioClip(key);
              }, 0);
            }
          }

          setTimeout(() => {
            this.calProgress(1);
          }, 200);
        }
        /**
         * @description: 预加载bundle对应的 SpriteFrame
         * @param {string} formName
         */


        async preloadBunleSpriteFrame(filePath) {
          var _this$loadSpriteFrame;

          let data = (_crd && splitFormName === void 0 ? (_reportPossibleCrUseOfsplitFormName({
            error: Error()
          }), splitFormName) : splitFormName)(filePath);
          let bundleName = data.bundle; //单个资源如果要读取到spriteFrame，必须后边加上spriteFrame路径

          let spriteFrameName = data.prefabName;

          if (this.loadSpriteFrameWithBundleKey.has(bundleName) && (_this$loadSpriteFrame = this.loadSpriteFrameWithBundleKey.get(bundleName)) != null && _this$loadSpriteFrame.has(filePath)) {
            this.loadProgress[filePath] = 1;
            this.calProgress(2);
            return;
          }

          let bundle = this.subGameBundle.get(bundleName);

          if (bundle == undefined) {
            console.error(`${bundleName}不存在`);
            return;
          }

          if (!this.loadSpriteFrameWithBundleKey.has(bundleName)) {
            this.loadSpriteFrameWithBundleKey.set(bundleName, new Map());
          }

          bundle.load(spriteFrameName + '.png', (loadCnt, allCnt, item) => {
            this.loadProgress[filePath] = loadCnt / allCnt;
            this.calProgress(0);
          }, (err, spriteFrame) => {
            if (err != null) {
              console.log(err);
              console.error(`${filePath}加载失败`);
            } else {
              this.loadProgress[filePath] = 1;

              if (!this.loadSpriteFrameWithBundleKey.has(bundleName)) {
                this.loadSpriteFrameWithBundleKey.set(bundleName, new Map());
              }

              this.loadSpriteFrameWithBundleKey.get(bundleName).set(filePath, spriteFrame);
              this.loadSpriteFrameWithBundleKey.get(bundleName).get(filePath).addRef();
              this.calProgress(1);
            }
          });
        }

        getSpriteFrameByPath(path) {
          let data = (_crd && splitFormName === void 0 ? (_reportPossibleCrUseOfsplitFormName({
            error: Error()
          }), splitFormName) : splitFormName)(path);
          let bundleName = data.bundle;

          if (this.loadSpriteFrameWithBundleKey.has(bundleName) && this.loadSpriteFrameWithBundleKey.get(bundleName).has(path)) {
            this.loadSpriteFrameWithBundleKey.get(bundleName).get(path).addRef();
            return this.loadSpriteFrameWithBundleKey.get(bundleName).get(path);
          }

          return null;
        }

        destorySpriteFrameByPath(path) {
          let data = (_crd && splitFormName === void 0 ? (_reportPossibleCrUseOfsplitFormName({
            error: Error()
          }), splitFormName) : splitFormName)(path);
          let bundleName = data.bundle;

          if (this.loadSpriteFrameWithBundleKey.has(bundleName) && this.loadSpriteFrameWithBundleKey.get(bundleName).has(path)) {
            //不能释放到 refCount ==0 因为 spriteFrame类资源的释放。 需要在离开游戏的时候被释放掉。也就是他的释放是通过bundle来释放的
            if (this.loadSpriteFrameWithBundleKey.get(bundleName).get(path).refCount > 1) {
              this.loadSpriteFrameWithBundleKey.get(bundleName).get(path).decRef();
            }
          }
        }
        /**
         * @description: 预加载bundle对应的 prefabs
         * @param {string} formName
         */


        async preloadBundlePrefab(formName) {
          var _this$loadPrefabWithB;

          let data = (_crd && splitFormName === void 0 ? (_reportPossibleCrUseOfsplitFormName({
            error: Error()
          }), splitFormName) : splitFormName)(formName);
          let bundleName = data.bundle;
          let prefabName = data.prefabName;

          if (this.loadPrefabWithBundleKey.has(bundleName) && (_this$loadPrefabWithB = this.loadPrefabWithBundleKey.get(bundleName)) != null && _this$loadPrefabWithB.has(formName)) {
            this.loadProgress[formName] = 1;
            this.calProgress(2);
            return;
          }

          let bundle = this.subGameBundle.get(bundleName);

          if (bundle == undefined) {
            console.error(`${bundleName}不存在`);
            return;
          }

          if (!this.loadPrefabWithBundleKey.has(bundleName)) {
            this.loadPrefabWithBundleKey.set(bundleName, new Map());
          }

          bundle.load(prefabName, (loadCnt, allCnt, item) => {
            this.loadProgress[formName] = loadCnt / allCnt;
            this.calProgress(0);
          }, (err, prefab) => {
            if (err != null) {
              console.log(err);
              console.warn(`${formName}加载失败`);
            } else {
              this.loadProgress[formName] = 1;

              if (!this.loadPrefabWithBundleKey.has(bundleName)) {
                this.loadPrefabWithBundleKey.set(bundleName, new Map());
              }

              this.loadPrefabWithBundleKey.get(bundleName).set(formName, prefab);
              this.loadPrefabWithBundleKey.get(bundleName).get(formName).addRef();
              this.calProgress(1);
            }
          });
        } //获得一个prefab


        getPrefabByPath(path) {
          let data = (_crd && splitFormName === void 0 ? (_reportPossibleCrUseOfsplitFormName({
            error: Error()
          }), splitFormName) : splitFormName)(path);
          let bundleName = data.bundle;

          if (this.loadPrefabWithBundleKey.has(bundleName) && this.loadPrefabWithBundleKey.get(bundleName).has(path)) {
            this.loadPrefabWithBundleKey.get(bundleName).get(path).addRef();
            return this.loadPrefabWithBundleKey.get(bundleName).get(path);
          }

          return null;
        } //销毁一个prefab


        destoryPrefabByPath(path) {
          let data = (_crd && splitFormName === void 0 ? (_reportPossibleCrUseOfsplitFormName({
            error: Error()
          }), splitFormName) : splitFormName)(path);
          let bundleName = data.bundle;

          if (this.loadPrefabWithBundleKey.has(bundleName) && this.loadPrefabWithBundleKey.get(bundleName).has(path)) {
            if (this.loadPrefabWithBundleKey.get(bundleName).get(path).refCount > 1) {
              this.loadPrefabWithBundleKey.get(bundleName).get(path).decRef();
            }
          }
        } //加载图集


        async preloadBundleSpriteAtlas(filePath) {
          var _this$loadSpriteAtlas;

          let data = (_crd && splitFormName === void 0 ? (_reportPossibleCrUseOfsplitFormName({
            error: Error()
          }), splitFormName) : splitFormName)(filePath);
          let bundleName = data.bundle;
          let spriteAtlasName = data.prefabName;

          if (this.loadSpriteAtlasWithBundleKey.has(bundleName) && (_this$loadSpriteAtlas = this.loadSpriteAtlasWithBundleKey.get(bundleName)) != null && _this$loadSpriteAtlas.has(filePath)) {
            this.loadProgress[filePath] = 1;
            this.calProgress(2);
            return;
          }

          let bundle = this.subGameBundle.get(bundleName);

          if (bundle == undefined) {
            console.error(`${bundleName}不存在`);
            return;
          }

          if (!this.loadSpriteAtlasWithBundleKey.has(bundleName)) {
            this.loadSpriteAtlasWithBundleKey.set(bundleName, new Map());
          }

          bundle.load(spriteAtlasName, SpriteAtlas, (loadCnt, allCnt, item) => {
            this.loadProgress[filePath] = loadCnt / allCnt;
            this.calProgress(0);
          }, (err, spriteAtlas) => {
            if (err != null) {
              console.log(err);
              console.error(`${filePath}加载失败`);
            } else {
              this.loadProgress[filePath] = 1;

              if (!this.loadSpriteAtlasWithBundleKey.has(bundleName)) {
                this.loadSpriteAtlasWithBundleKey.set(bundleName, new Map());
              }

              this.loadSpriteAtlasWithBundleKey.get(bundleName).set(filePath, spriteAtlas);
              this.loadSpriteAtlasWithBundleKey.get(bundleName).get(filePath).addRef();
              this.calProgress(1);
            }
          }); //});
        } //获取图集


        getSpriteAtlasByPath(path) {
          let data = (_crd && splitFormName === void 0 ? (_reportPossibleCrUseOfsplitFormName({
            error: Error()
          }), splitFormName) : splitFormName)(path);
          let bundleName = data.bundle;

          if (this.loadSpriteAtlasWithBundleKey.has(bundleName) && this.loadSpriteAtlasWithBundleKey.get(bundleName).has(path)) {
            this.loadSpriteAtlasWithBundleKey.get(bundleName).get(path).addRef();
            return this.loadSpriteAtlasWithBundleKey.get(bundleName).get(path);
          }

          return null;
        } //销毁图集


        destorySpriteAtlasByPath(path) {
          let data = (_crd && splitFormName === void 0 ? (_reportPossibleCrUseOfsplitFormName({
            error: Error()
          }), splitFormName) : splitFormName)(path);
          let bundleName = data.bundle;

          if (this.loadSpriteAtlasWithBundleKey.has(bundleName) && this.loadSpriteAtlasWithBundleKey.get(bundleName).has(path)) {
            //不能释放到refCount <=0 
            if (this.loadSpriteAtlasWithBundleKey.get(bundleName).get(path).refCount > 1) {
              this.loadSpriteAtlasWithBundleKey.get(bundleName).get(path).decRef();
            }
          }
        }
        /**
         * @description: 预加载bundle对应的 spine
         * @param {string} formName
         */


        async preloadBundleSpine(formName) {
          var _this$loadSpineWithBu;

          let data = (_crd && splitFormName === void 0 ? (_reportPossibleCrUseOfsplitFormName({
            error: Error()
          }), splitFormName) : splitFormName)(formName);
          let bundleName = data.bundle;
          let prefabName = data.prefabName;

          if (this.loadSpineWithBundleKey.has(bundleName) && (_this$loadSpineWithBu = this.loadSpineWithBundleKey.get(bundleName)) != null && _this$loadSpineWithBu.has(formName)) {
            this.loadProgress[formName] = 1;
            this.calProgress(2);
            return;
          }

          let bundle = this.subGameBundle.get(bundleName);

          if (bundle == undefined) {
            console.error(`${bundleName}不存在`);
            return;
          }

          if (!this.loadSpineWithBundleKey.has(bundleName)) {
            this.loadSpineWithBundleKey.set(bundleName, new Map());
          }

          bundle.load(prefabName, (loadCnt, allCnt, item) => {
            this.loadProgress[formName] = loadCnt / allCnt;
            this.calProgress(0);
          }, (err, skeletionData) => {
            if (err != null) {
              console.log(err);
              console.warn(`${formName}加载失败`);
            } else {
              this.loadProgress[formName] = 1;

              if (!this.loadSpineWithBundleKey.has(bundleName)) {
                this.loadSpineWithBundleKey.set(bundleName, new Map());
              }

              this.loadSpineWithBundleKey.get(bundleName).set(formName, skeletionData);
              this.loadSpineWithBundleKey.get(bundleName).get(formName).addRef();
              this.calProgress(1);
            }
          });
        } //获得一个spine


        lazyLoadySpine(path) {
          return new Promise((resolve, reject) => {
            let data = (_crd && splitFormName === void 0 ? (_reportPossibleCrUseOfsplitFormName({
              error: Error()
            }), splitFormName) : splitFormName)(path);
            let bundleName = data.bundle;
            let fileName = data.prefabName;

            if (this.loadSpineWithBundleKey.has(bundleName) && this.loadSpineWithBundleKey.get(bundleName).has(path)) {
              //如果缓存中有直接拿出来用
              this.loadSpineWithBundleKey.get(bundleName).get(path).addRef();
              resolve(this.loadSpineWithBundleKey.get(bundleName).get(path));
              return;
            }

            let bundle = assetManager.getBundle(bundleName);

            if (bundle == null) {
              resolve(null);
            } else {
              bundle.load(fileName, sp.SkeletonData, (err, spine) => {
                if (err != null) {
                  console.error(err);
                  resolve(null);
                } else {
                  if (!this.loadSpineWithBundleKey.has(bundleName)) {
                    this.loadSpineWithBundleKey.set(bundleName, new Map());
                  }

                  this.loadSpineWithBundleKey.get(bundleName).set(path, spine);
                  this.loadSpineWithBundleKey.get(bundleName).get(path).addRef();
                  resolve(spine);
                }
              });
            }
          });
        } //销毁一个Spine


        destorySpineByPath(path) {
          let data = (_crd && splitFormName === void 0 ? (_reportPossibleCrUseOfsplitFormName({
            error: Error()
          }), splitFormName) : splitFormName)(path);
          let bundleName = data.bundle;

          if (this.loadSpineWithBundleKey.has(bundleName) && this.loadSpineWithBundleKey.get(bundleName).has(path)) {
            if (this.loadSpineWithBundleKey.get(bundleName).get(path).refCount > 1) {
              this.loadSpineWithBundleKey.get(bundleName).get(path).decRef();
            }
          }
        } //加载音频


        async preloadBundleAudioClip(filePath) {
          var _this$loadAudioClipWi;

          let data = (_crd && splitFormName === void 0 ? (_reportPossibleCrUseOfsplitFormName({
            error: Error()
          }), splitFormName) : splitFormName)(filePath);
          let bundleName = data.bundle;
          let audioClipName = data.prefabName;

          if (this.loadAudioClipWithBundleKey.has(bundleName) && (_this$loadAudioClipWi = this.loadAudioClipWithBundleKey.get(bundleName)) != null && _this$loadAudioClipWi.has(filePath)) {
            this.loadProgress[filePath] = 1;
            this.calProgress(2);
            return;
          }

          let bundle = this.subGameBundle.get(bundleName);

          if (bundle == undefined) {
            console.error(`${bundleName}不存在`);
            return;
          }

          if (!this.loadAudioClipWithBundleKey.has(bundleName)) {
            this.loadAudioClipWithBundleKey.set(bundleName, new Map());
          }

          bundle.load(audioClipName, (loadCnt, allCnt, item) => {
            this.loadProgress[filePath] = loadCnt / allCnt;
            this.calProgress(0);
          }, (err, clip) => {
            if (err != null) {
              console.error(`${filePath}加载失败`);
            } else {
              this.loadProgress[filePath] = 1;

              if (!this.loadAudioClipWithBundleKey.has(bundleName)) {
                this.loadAudioClipWithBundleKey.set(bundleName, new Map());
              }

              this.loadAudioClipWithBundleKey.get(bundleName).set(filePath, clip);
              this.loadAudioClipWithBundleKey.get(bundleName).get(filePath).addRef();
              this.calProgress(1);
            }
          }); //});
        } //根据路径获取Audio Clip


        getAudioClipByPath(path) {
          let data = (_crd && splitFormName === void 0 ? (_reportPossibleCrUseOfsplitFormName({
            error: Error()
          }), splitFormName) : splitFormName)(path);
          let bundleName = data.bundle;

          if (this.loadAudioClipWithBundleKey.has(bundleName) && this.loadAudioClipWithBundleKey.get(bundleName).has(path)) {
            this.loadAudioClipWithBundleKey.get(bundleName).get(path).addRef();
            return this.loadAudioClipWithBundleKey.get(bundleName).get(path);
          }

          return null;
        } //销毁音频


        destoryAudioClipByPath(path) {
          let data = (_crd && splitFormName === void 0 ? (_reportPossibleCrUseOfsplitFormName({
            error: Error()
          }), splitFormName) : splitFormName)(path);
          let bundleName = data.bundle;

          if (this.loadAudioClipWithBundleKey.has(bundleName) && this.loadAudioClipWithBundleKey.get(bundleName).has(path)) {
            if (this.loadAudioClipWithBundleKey.get(bundleName).get(path).refCount > 1) {
              this.loadAudioClipWithBundleKey.get(bundleName).get(path).decRef();
            }
          }
        }
        /**
         * 释放当前bundle中的所有动态加载的资源
         * @param list 
         */


        releaseAllResByList(list) {
          let bName = "";

          for (let key of list.keys()) {
            let resData = (_crd && splitFormName === void 0 ? (_reportPossibleCrUseOfsplitFormName({
              error: Error()
            }), splitFormName) : splitFormName)(key);
            let bundleName = resData.bundle;
            bName = bundleName;

            if (list.get(key) == ResType.ResType_SpriteFrame) {
              if (!this.loadSpriteFrameWithBundleKey.has(bundleName)) {
                continue;
              }

              if (!this.loadSpriteFrameWithBundleKey.get(bName).has(key)) {
                continue;
              }

              while (this.loadSpriteFrameWithBundleKey.get(bName).get(key).refCount > 0) {
                this.loadSpriteFrameWithBundleKey.get(bName).get(key).decRef();
              }

              this.loadSpriteFrameWithBundleKey.get(bName).delete(key);
            } else if (list.get(key) == ResType.ResType_SpriteAtlas) {
              //释放图集资源
              if (!this.loadSpriteAtlasWithBundleKey.has(bundleName)) {
                continue;
              }

              if (!this.loadSpriteAtlasWithBundleKey.get(bName).has(key)) {
                continue;
              }

              while (this.loadSpriteAtlasWithBundleKey.get(bName).get(key).refCount > 0) {
                this.loadSpriteAtlasWithBundleKey.get(bName).get(key).decRef();
              }

              this.loadSpriteAtlasWithBundleKey.get(bName).delete(key);
            } else if (list.get(key) == ResType.ResType_Prefab) {
              //预制体资源
              if (!this.loadPrefabWithBundleKey.has(bundleName)) {
                continue;
              }

              if (!this.loadPrefabWithBundleKey.get(bName).has(key)) {
                continue;
              }

              while (this.loadPrefabWithBundleKey.get(bName).get(key).refCount > 0) {
                this.loadPrefabWithBundleKey.get(bName).get(key).decRef();
              }

              this.loadPrefabWithBundleKey.get(bName).delete(key);
            } else if (list.get(key) == ResType.ResType_AudioClip) {
              //音频资源
              if (!this.loadAudioClipWithBundleKey.has(bundleName)) {
                continue;
              }

              bName = bundleName;

              if (!this.loadAudioClipWithBundleKey.get(bName).has(key)) {
                continue;
              }

              while (this.loadAudioClipWithBundleKey.get(bName).get(key).refCount > 0) {
                this.loadAudioClipWithBundleKey.get(bName).get(key).decRef();
              }

              this.loadAudioClipWithBundleKey.get(bName).delete(key);
            }
          }

          if (bName != "") {
            this.loadPrefabWithBundleKey.delete(bName);
            this.loadAudioClipWithBundleKey.delete(bName);
            this.loadSpriteFrameWithBundleKey.delete(bName);
            this.loadSpriteAtlasWithBundleKey.delete(bName);

            if (this.subGameBundle.has(bName)) {
              this.subGameBundle.delete(bName);
            } //调用了 releaseAll 应该不需要再 desRef() 方法了。源码中tryRelease就是将
            //这里releaaseAll还不能调用，如果调用，第二次加载sprite的时候还是有问题的。 暂时不调用，但是回头要处理一下
            //需要调用releaseAll否则有的资源释放不掉


            if (assetManager.getBundle(bName) != null) {
              assetManager.getBundle(bName).releaseAll();
              assetManager.removeBundle(assetManager.getBundle(bName));
            }

            console.log("releaseAll执行了-----", bName);
          }
        }
        /**
         * @description: 计算加载进度 更新进度条
         * @param {number} state
         */


        calProgress(state) {
          let progress = 0;
          let allCnt = 0;

          for (let key in this.loadProgress) {
            allCnt = allCnt + 1;
            progress = progress + this.loadProgress[key];
          }

          if (this.preloadProgressCallBack != null) {
            this.preloadProgressCallBack(progress / allCnt);
          }

          if (progress / allCnt == 1 && state == 1) {
            this.preloadProgressCallBack = null;

            if (this.preloadCompleteCallBack != null) {
              this.preloadCompleteCallBack();
              this.preloadCompleteCallBack = null;
            }
          }
        }
        /**
         * 1:优先判定常驻窗体中有没有节点
         * 需要先判定对应的bundle是否加载了
         * 切割formName为 bundleName prefabName
         * todo dev 这里以后配置成远程包的时候还需要处理为 远程资源的加载
         * @param formName 
         */


        async loadForm(formName) {
          return new Promise((resolve, reject) => {
            if (!formName || formName.length <= 0) {
              resolve(null);
            }

            let data = (_crd && splitFormName === void 0 ? (_reportPossibleCrUseOfsplitFormName({
              error: Error()
            }), splitFormName) : splitFormName)(formName);
            let bundleName = data.bundle;
            let prefabName = data.prefabName; //如果缓存中有 则直接从缓存中获取，一般情况就是到这里就返回了。因为进入 字游戏或者大厅的时候就会预加载的

            if (this.loadPrefabWithBundleKey.has(bundleName) && this.loadPrefabWithBundleKey.get(bundleName).has(formName)) {
              resolve(this.loadPrefabWithBundleKey.get(bundleName).get(formName));
              return;
            }

            assetManager.loadBundle(bundleName, (err, bundle) => {
              if (err != null) {
                error(`${bundleName}加载失败`);
                resolve(null);
                return;
              }

              this.subGameBundle.set(bundleName, bundle);

              if (!this.loadPrefabWithBundleKey.has(bundleName)) {
                this.loadPrefabWithBundleKey.set(bundleName, new Map());
              }

              bundle.load(prefabName, (err, prefab) => {
                var _this$loadPrefabWithB2;

                if (err != null) {
                  error(`${prefabName}加载失败`);
                  resolve(null);
                  return;
                } //每加载一次prefab就保存一下。
                //this.prefabs[formName] = prefab;


                if (!this.loadPrefabWithBundleKey.has(bundleName)) {
                  this.loadPrefabWithBundleKey.set(bundleName, new Map());
                }

                (_this$loadPrefabWithB2 = this.loadPrefabWithBundleKey.get(bundleName)) == null ? void 0 : _this$loadPrefabWithB2.set(formName, prefab);
                prefab.addRef();
                resolve(prefab);
              });
            });
          });
        } //销毁一个form对应的一个资源


        destoryForm(formName) {
          if (formName == null || formName == undefined || formName.length <= 0) {
            return;
          }

          console.log(`destoryForm${formName}`);
          let data = (_crd && splitFormName === void 0 ? (_reportPossibleCrUseOfsplitFormName({
            error: Error()
          }), splitFormName) : splitFormName)(formName);

          if (this.loadPrefabWithBundleKey.has(data.bundle) && this.loadPrefabWithBundleKey.get(data.bundle).has(formName)) {
            //窗体被销毁减少引用计数
            if (this.loadPrefabWithBundleKey.get(data.bundle).get(formName).refCount > 1) {
              this.loadPrefabWithBundleKey.get(data.bundle).get(formName).decRef();
            }
          }
        }

      });

      ResMgr.instance = void 0;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=697f63eb3dc85df88d79a359f79575e9025e5edd.js.map