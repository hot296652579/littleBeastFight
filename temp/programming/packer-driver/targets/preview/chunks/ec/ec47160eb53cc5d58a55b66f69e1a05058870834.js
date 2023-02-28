System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, js, SpriteAtlas, sp, assetManager, error, splitFormName, ResMgr, _crd, ccclass, property, ResType;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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


        preLoad(list, progressCb, completeCallBack, resType) {
          var _this = this;

          return _asyncToGenerator(function* () {
            if (resType == null || resType == undefined) {
              resType = new Map();
            }

            if (resType.size == 0) {
              resType.set(ResType.ResType_Prefab, true);
              resType.set(ResType.ResType_AudioClip, true);
            }

            _this.preloadProgressCallBack = progressCb;
            _this.preloadCompleteCallBack = completeCallBack;
            _this.loadProgress = js.createMap();
            var map = list;
            var idx = 0;

            var _loop = function _loop(_key) {
              idx++;

              if (map.get(_key) == ResType.ResType_Prefab && resType.has(ResType.ResType_Prefab) && resType.get(ResType.ResType_Prefab)) {
                //加载 预制体 prefab
                _this.loadProgress[_key] = 0;
                setTimeout(() => {
                  _this.preloadBundlePrefab(_key);
                }, 0);
              } else if (map.get(_key) == ResType.ResType_SpriteFrame && resType.has(ResType.ResType_SpriteFrame) && resType.get(ResType.ResType_SpriteFrame)) {
                //图片 spriteFrame
                _this.loadProgress[_key] = 0;
                setTimeout(() => {
                  _this.preloadBunleSpriteFrame(_key);
                }, 0);
              } else if (map.get(_key) == ResType.ResType_SpriteAtlas && resType.has(ResType.ResType_SpriteAtlas) && resType.get(ResType.ResType_SpriteAtlas)) {
                //图集 spriteAtlas
                _this.loadProgress[_key] = 0;
                setTimeout(() => {
                  _this.preloadBundleSpriteAtlas(_key);
                }, 0);
              } else if (map.get(_key) == ResType.ResType_Spine && resType.has(ResType.ResType_Spine) && resType.get(ResType.ResType_Spine)) {
                //spine
                _this.loadProgress[_key] = 0;
                setTimeout(() => {
                  _this.preloadBundleSpine(_key);
                }, 0);
              } else if (map.get(_key) == ResType.ResType_AudioClip && resType.has(ResType.ResType_AudioClip) && resType.get(ResType.ResType_AudioClip)) {
                //音频资源 AudioClip
                _this.loadProgress[_key] = 0;
                setTimeout(() => {
                  _this.preloadBundleAudioClip(_key);
                }, 0);
              }
            };

            for (var _key of map.keys()) {
              _loop(_key);
            }

            setTimeout(() => {
              _this.calProgress(1);
            }, 200);
          })();
        }
        /**
         * @description: 预加载bundle对应的 SpriteFrame
         * @param {string} formName
         */


        preloadBunleSpriteFrame(filePath) {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            var _this2$loadSpriteFram;

            var data = (_crd && splitFormName === void 0 ? (_reportPossibleCrUseOfsplitFormName({
              error: Error()
            }), splitFormName) : splitFormName)(filePath);
            var bundleName = data.bundle; //单个资源如果要读取到spriteFrame，必须后边加上spriteFrame路径

            var spriteFrameName = data.prefabName;

            if (_this2.loadSpriteFrameWithBundleKey.has(bundleName) && (_this2$loadSpriteFram = _this2.loadSpriteFrameWithBundleKey.get(bundleName)) != null && _this2$loadSpriteFram.has(filePath)) {
              _this2.loadProgress[filePath] = 1;

              _this2.calProgress(2);

              return;
            }

            var bundle = _this2.subGameBundle.get(bundleName);

            if (bundle == undefined) {
              console.error(bundleName + "\u4E0D\u5B58\u5728");
              return;
            }

            if (!_this2.loadSpriteFrameWithBundleKey.has(bundleName)) {
              _this2.loadSpriteFrameWithBundleKey.set(bundleName, new Map());
            }

            bundle.load(spriteFrameName + '/spriteFrame', (loadCnt, allCnt, item) => {
              _this2.loadProgress[filePath] = loadCnt / allCnt;

              _this2.calProgress(0);
            }, (err, spriteFrame) => {
              if (err != null) {
                console.log(err);
                console.error(filePath + "\u52A0\u8F7D\u5931\u8D25");
              } else {
                _this2.loadProgress[filePath] = 1;

                if (!_this2.loadSpriteFrameWithBundleKey.has(bundleName)) {
                  _this2.loadSpriteFrameWithBundleKey.set(bundleName, new Map());
                }

                _this2.loadSpriteFrameWithBundleKey.get(bundleName).set(filePath, spriteFrame);

                _this2.loadSpriteFrameWithBundleKey.get(bundleName).get(filePath).addRef();

                _this2.calProgress(1);
              }
            });
          })();
        }

        getSpriteFrameByPath(path) {
          var data = (_crd && splitFormName === void 0 ? (_reportPossibleCrUseOfsplitFormName({
            error: Error()
          }), splitFormName) : splitFormName)(path);
          var bundleName = data.bundle;

          if (this.loadSpriteFrameWithBundleKey.has(bundleName) && this.loadSpriteFrameWithBundleKey.get(bundleName).has(path)) {
            this.loadSpriteFrameWithBundleKey.get(bundleName).get(path).addRef();
            return this.loadSpriteFrameWithBundleKey.get(bundleName).get(path);
          }

          return null;
        }

        destorySpriteFrameByPath(path) {
          var data = (_crd && splitFormName === void 0 ? (_reportPossibleCrUseOfsplitFormName({
            error: Error()
          }), splitFormName) : splitFormName)(path);
          var bundleName = data.bundle;

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


        preloadBundlePrefab(formName) {
          var _this3 = this;

          return _asyncToGenerator(function* () {
            var _this3$loadPrefabWith;

            var data = (_crd && splitFormName === void 0 ? (_reportPossibleCrUseOfsplitFormName({
              error: Error()
            }), splitFormName) : splitFormName)(formName);
            var bundleName = data.bundle;
            var prefabName = data.prefabName;

            if (_this3.loadPrefabWithBundleKey.has(bundleName) && (_this3$loadPrefabWith = _this3.loadPrefabWithBundleKey.get(bundleName)) != null && _this3$loadPrefabWith.has(formName)) {
              _this3.loadProgress[formName] = 1;

              _this3.calProgress(2);

              return;
            }

            var bundle = _this3.subGameBundle.get(bundleName);

            if (bundle == undefined) {
              console.error(bundleName + "\u4E0D\u5B58\u5728");
              return;
            }

            if (!_this3.loadPrefabWithBundleKey.has(bundleName)) {
              _this3.loadPrefabWithBundleKey.set(bundleName, new Map());
            }

            bundle.load(prefabName, (loadCnt, allCnt, item) => {
              _this3.loadProgress[formName] = loadCnt / allCnt;

              _this3.calProgress(0);
            }, (err, prefab) => {
              if (err != null) {
                console.log(err);
                console.warn(formName + "\u52A0\u8F7D\u5931\u8D25");
              } else {
                _this3.loadProgress[formName] = 1;

                if (!_this3.loadPrefabWithBundleKey.has(bundleName)) {
                  _this3.loadPrefabWithBundleKey.set(bundleName, new Map());
                }

                _this3.loadPrefabWithBundleKey.get(bundleName).set(formName, prefab);

                _this3.loadPrefabWithBundleKey.get(bundleName).get(formName).addRef();

                _this3.calProgress(1);
              }
            });
          })();
        } //获得一个prefab


        getPrefabByPath(path) {
          var data = (_crd && splitFormName === void 0 ? (_reportPossibleCrUseOfsplitFormName({
            error: Error()
          }), splitFormName) : splitFormName)(path);
          var bundleName = data.bundle;

          if (this.loadPrefabWithBundleKey.has(bundleName) && this.loadPrefabWithBundleKey.get(bundleName).has(path)) {
            this.loadPrefabWithBundleKey.get(bundleName).get(path).addRef();
            return this.loadPrefabWithBundleKey.get(bundleName).get(path);
          }

          return null;
        } //销毁一个prefab


        destoryPrefabByPath(path) {
          var data = (_crd && splitFormName === void 0 ? (_reportPossibleCrUseOfsplitFormName({
            error: Error()
          }), splitFormName) : splitFormName)(path);
          var bundleName = data.bundle;

          if (this.loadPrefabWithBundleKey.has(bundleName) && this.loadPrefabWithBundleKey.get(bundleName).has(path)) {
            if (this.loadPrefabWithBundleKey.get(bundleName).get(path).refCount > 1) {
              this.loadPrefabWithBundleKey.get(bundleName).get(path).decRef();
            }
          }
        } //加载图集


        preloadBundleSpriteAtlas(filePath) {
          var _this4 = this;

          return _asyncToGenerator(function* () {
            var _this4$loadSpriteAtla;

            var data = (_crd && splitFormName === void 0 ? (_reportPossibleCrUseOfsplitFormName({
              error: Error()
            }), splitFormName) : splitFormName)(filePath);
            var bundleName = data.bundle;
            var spriteAtlasName = data.prefabName;

            if (_this4.loadSpriteAtlasWithBundleKey.has(bundleName) && (_this4$loadSpriteAtla = _this4.loadSpriteAtlasWithBundleKey.get(bundleName)) != null && _this4$loadSpriteAtla.has(filePath)) {
              _this4.loadProgress[filePath] = 1;

              _this4.calProgress(2);

              return;
            }

            var bundle = _this4.subGameBundle.get(bundleName);

            if (bundle == undefined) {
              console.error(bundleName + "\u4E0D\u5B58\u5728");
              return;
            }

            if (!_this4.loadSpriteAtlasWithBundleKey.has(bundleName)) {
              _this4.loadSpriteAtlasWithBundleKey.set(bundleName, new Map());
            }

            bundle.load(spriteAtlasName, SpriteAtlas, (loadCnt, allCnt, item) => {
              _this4.loadProgress[filePath] = loadCnt / allCnt;

              _this4.calProgress(0);
            }, (err, spriteAtlas) => {
              if (err != null) {
                console.log(err);
                console.error(filePath + "\u52A0\u8F7D\u5931\u8D25");
              } else {
                _this4.loadProgress[filePath] = 1;

                if (!_this4.loadSpriteAtlasWithBundleKey.has(bundleName)) {
                  _this4.loadSpriteAtlasWithBundleKey.set(bundleName, new Map());
                }

                _this4.loadSpriteAtlasWithBundleKey.get(bundleName).set(filePath, spriteAtlas);

                _this4.loadSpriteAtlasWithBundleKey.get(bundleName).get(filePath).addRef();

                _this4.calProgress(1);
              }
            }); //});
          })();
        } //获取图集


        getSpriteAtlasByPath(path) {
          var data = (_crd && splitFormName === void 0 ? (_reportPossibleCrUseOfsplitFormName({
            error: Error()
          }), splitFormName) : splitFormName)(path);
          var bundleName = data.bundle;

          if (this.loadSpriteAtlasWithBundleKey.has(bundleName) && this.loadSpriteAtlasWithBundleKey.get(bundleName).has(path)) {
            this.loadSpriteAtlasWithBundleKey.get(bundleName).get(path).addRef();
            return this.loadSpriteAtlasWithBundleKey.get(bundleName).get(path);
          }

          return null;
        } //销毁图集


        destorySpriteAtlasByPath(path) {
          var data = (_crd && splitFormName === void 0 ? (_reportPossibleCrUseOfsplitFormName({
            error: Error()
          }), splitFormName) : splitFormName)(path);
          var bundleName = data.bundle;

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


        preloadBundleSpine(formName) {
          var _this5 = this;

          return _asyncToGenerator(function* () {
            var _this5$loadSpineWithB;

            var data = (_crd && splitFormName === void 0 ? (_reportPossibleCrUseOfsplitFormName({
              error: Error()
            }), splitFormName) : splitFormName)(formName);
            var bundleName = data.bundle;
            var prefabName = data.prefabName;

            if (_this5.loadSpineWithBundleKey.has(bundleName) && (_this5$loadSpineWithB = _this5.loadSpineWithBundleKey.get(bundleName)) != null && _this5$loadSpineWithB.has(formName)) {
              _this5.loadProgress[formName] = 1;

              _this5.calProgress(2);

              return;
            }

            var bundle = _this5.subGameBundle.get(bundleName);

            if (bundle == undefined) {
              console.error(bundleName + "\u4E0D\u5B58\u5728");
              return;
            }

            if (!_this5.loadSpineWithBundleKey.has(bundleName)) {
              _this5.loadSpineWithBundleKey.set(bundleName, new Map());
            }

            bundle.load(prefabName, (loadCnt, allCnt, item) => {
              _this5.loadProgress[formName] = loadCnt / allCnt;

              _this5.calProgress(0);
            }, (err, skeletionData) => {
              if (err != null) {
                console.log(err);
                console.warn(formName + "\u52A0\u8F7D\u5931\u8D25");
              } else {
                _this5.loadProgress[formName] = 1;

                if (!_this5.loadSpineWithBundleKey.has(bundleName)) {
                  _this5.loadSpineWithBundleKey.set(bundleName, new Map());
                }

                _this5.loadSpineWithBundleKey.get(bundleName).set(formName, skeletionData);

                _this5.loadSpineWithBundleKey.get(bundleName).get(formName).addRef();

                _this5.calProgress(1);
              }
            });
          })();
        } //获得一个spine


        lazyLoadySpine(path) {
          return new Promise((resolve, reject) => {
            var data = (_crd && splitFormName === void 0 ? (_reportPossibleCrUseOfsplitFormName({
              error: Error()
            }), splitFormName) : splitFormName)(path);
            var bundleName = data.bundle;
            var fileName = data.prefabName;

            if (this.loadSpineWithBundleKey.has(bundleName) && this.loadSpineWithBundleKey.get(bundleName).has(path)) {
              //如果缓存中有直接拿出来用
              this.loadSpineWithBundleKey.get(bundleName).get(path).addRef();
              resolve(this.loadSpineWithBundleKey.get(bundleName).get(path));
              return;
            }

            var bundle = assetManager.getBundle(bundleName);

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
          var data = (_crd && splitFormName === void 0 ? (_reportPossibleCrUseOfsplitFormName({
            error: Error()
          }), splitFormName) : splitFormName)(path);
          var bundleName = data.bundle;

          if (this.loadSpineWithBundleKey.has(bundleName) && this.loadSpineWithBundleKey.get(bundleName).has(path)) {
            if (this.loadSpineWithBundleKey.get(bundleName).get(path).refCount > 1) {
              this.loadSpineWithBundleKey.get(bundleName).get(path).decRef();
            }
          }
        } //加载音频


        preloadBundleAudioClip(filePath) {
          var _this6 = this;

          return _asyncToGenerator(function* () {
            var _this6$loadAudioClipW;

            var data = (_crd && splitFormName === void 0 ? (_reportPossibleCrUseOfsplitFormName({
              error: Error()
            }), splitFormName) : splitFormName)(filePath);
            var bundleName = data.bundle;
            var audioClipName = data.prefabName;

            if (_this6.loadAudioClipWithBundleKey.has(bundleName) && (_this6$loadAudioClipW = _this6.loadAudioClipWithBundleKey.get(bundleName)) != null && _this6$loadAudioClipW.has(filePath)) {
              _this6.loadProgress[filePath] = 1;

              _this6.calProgress(2);

              return;
            }

            var bundle = _this6.subGameBundle.get(bundleName);

            if (bundle == undefined) {
              console.error(bundleName + "\u4E0D\u5B58\u5728");
              return;
            }

            if (!_this6.loadAudioClipWithBundleKey.has(bundleName)) {
              _this6.loadAudioClipWithBundleKey.set(bundleName, new Map());
            }

            bundle.load(audioClipName, (loadCnt, allCnt, item) => {
              _this6.loadProgress[filePath] = loadCnt / allCnt;

              _this6.calProgress(0);
            }, (err, clip) => {
              if (err != null) {
                console.error(filePath + "\u52A0\u8F7D\u5931\u8D25");
              } else {
                _this6.loadProgress[filePath] = 1;

                if (!_this6.loadAudioClipWithBundleKey.has(bundleName)) {
                  _this6.loadAudioClipWithBundleKey.set(bundleName, new Map());
                }

                _this6.loadAudioClipWithBundleKey.get(bundleName).set(filePath, clip);

                _this6.loadAudioClipWithBundleKey.get(bundleName).get(filePath).addRef();

                _this6.calProgress(1);
              }
            }); //});
          })();
        } //根据路径获取Audio Clip


        getAudioClipByPath(path) {
          var data = (_crd && splitFormName === void 0 ? (_reportPossibleCrUseOfsplitFormName({
            error: Error()
          }), splitFormName) : splitFormName)(path);
          var bundleName = data.bundle;

          if (this.loadAudioClipWithBundleKey.has(bundleName) && this.loadAudioClipWithBundleKey.get(bundleName).has(path)) {
            this.loadAudioClipWithBundleKey.get(bundleName).get(path).addRef();
            return this.loadAudioClipWithBundleKey.get(bundleName).get(path);
          }

          return null;
        } //销毁音频


        destoryAudioClipByPath(path) {
          var data = (_crd && splitFormName === void 0 ? (_reportPossibleCrUseOfsplitFormName({
            error: Error()
          }), splitFormName) : splitFormName)(path);
          var bundleName = data.bundle;

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
          var bName = "";

          for (var _key2 of list.keys()) {
            var resData = (_crd && splitFormName === void 0 ? (_reportPossibleCrUseOfsplitFormName({
              error: Error()
            }), splitFormName) : splitFormName)(_key2);
            var bundleName = resData.bundle;
            bName = bundleName;

            if (list.get(_key2) == ResType.ResType_SpriteFrame) {
              if (!this.loadSpriteFrameWithBundleKey.has(bundleName)) {
                continue;
              }

              if (!this.loadSpriteFrameWithBundleKey.get(bName).has(_key2)) {
                continue;
              }

              while (this.loadSpriteFrameWithBundleKey.get(bName).get(_key2).refCount > 0) {
                this.loadSpriteFrameWithBundleKey.get(bName).get(_key2).decRef();
              }

              this.loadSpriteFrameWithBundleKey.get(bName).delete(_key2);
            } else if (list.get(_key2) == ResType.ResType_SpriteAtlas) {
              //释放图集资源
              if (!this.loadSpriteAtlasWithBundleKey.has(bundleName)) {
                continue;
              }

              if (!this.loadSpriteAtlasWithBundleKey.get(bName).has(_key2)) {
                continue;
              }

              while (this.loadSpriteAtlasWithBundleKey.get(bName).get(_key2).refCount > 0) {
                this.loadSpriteAtlasWithBundleKey.get(bName).get(_key2).decRef();
              }

              this.loadSpriteAtlasWithBundleKey.get(bName).delete(_key2);
            } else if (list.get(_key2) == ResType.ResType_Prefab) {
              //预制体资源
              if (!this.loadPrefabWithBundleKey.has(bundleName)) {
                continue;
              }

              if (!this.loadPrefabWithBundleKey.get(bName).has(_key2)) {
                continue;
              }

              while (this.loadPrefabWithBundleKey.get(bName).get(_key2).refCount > 0) {
                this.loadPrefabWithBundleKey.get(bName).get(_key2).decRef();
              }

              this.loadPrefabWithBundleKey.get(bName).delete(_key2);
            } else if (list.get(_key2) == ResType.ResType_AudioClip) {
              //音频资源
              if (!this.loadAudioClipWithBundleKey.has(bundleName)) {
                continue;
              }

              bName = bundleName;

              if (!this.loadAudioClipWithBundleKey.get(bName).has(_key2)) {
                continue;
              }

              while (this.loadAudioClipWithBundleKey.get(bName).get(_key2).refCount > 0) {
                this.loadAudioClipWithBundleKey.get(bName).get(_key2).decRef();
              }

              this.loadAudioClipWithBundleKey.get(bName).delete(_key2);
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
          var progress = 0;
          var allCnt = 0;

          for (var _key3 in this.loadProgress) {
            allCnt = allCnt + 1;
            progress = progress + this.loadProgress[_key3];
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


        loadForm(formName) {
          var _this7 = this;

          return _asyncToGenerator(function* () {
            return new Promise((resolve, reject) => {
              if (!formName || formName.length <= 0) {
                resolve(null);
              }

              var data = (_crd && splitFormName === void 0 ? (_reportPossibleCrUseOfsplitFormName({
                error: Error()
              }), splitFormName) : splitFormName)(formName);
              var bundleName = data.bundle;
              var prefabName = data.prefabName; //如果缓存中有 则直接从缓存中获取，一般情况就是到这里就返回了。因为进入 字游戏或者大厅的时候就会预加载的

              if (_this7.loadPrefabWithBundleKey.has(bundleName) && _this7.loadPrefabWithBundleKey.get(bundleName).has(formName)) {
                resolve(_this7.loadPrefabWithBundleKey.get(bundleName).get(formName));
                return;
              }

              assetManager.loadBundle(bundleName, (err, bundle) => {
                if (err != null) {
                  error(bundleName + "\u52A0\u8F7D\u5931\u8D25");
                  resolve(null);
                  return;
                }

                _this7.subGameBundle.set(bundleName, bundle);

                if (!_this7.loadPrefabWithBundleKey.has(bundleName)) {
                  _this7.loadPrefabWithBundleKey.set(bundleName, new Map());
                }

                bundle.load(prefabName, (err, prefab) => {
                  var _this7$loadPrefabWith;

                  if (err != null) {
                    error(prefabName + "\u52A0\u8F7D\u5931\u8D25");
                    resolve(null);
                    return;
                  } //每加载一次prefab就保存一下。
                  //this.prefabs[formName] = prefab;


                  if (!_this7.loadPrefabWithBundleKey.has(bundleName)) {
                    _this7.loadPrefabWithBundleKey.set(bundleName, new Map());
                  }

                  (_this7$loadPrefabWith = _this7.loadPrefabWithBundleKey.get(bundleName)) == null ? void 0 : _this7$loadPrefabWith.set(formName, prefab);
                  prefab.addRef();
                  resolve(prefab);
                });
              });
            });
          })();
        } //销毁一个form对应的一个资源


        destoryForm(formName) {
          if (formName == null || formName == undefined || formName.length <= 0) {
            return;
          }

          console.log("destoryForm" + formName);
          var data = (_crd && splitFormName === void 0 ? (_reportPossibleCrUseOfsplitFormName({
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
//# sourceMappingURL=ec47160eb53cc5d58a55b66f69e1a05058870834.js.map