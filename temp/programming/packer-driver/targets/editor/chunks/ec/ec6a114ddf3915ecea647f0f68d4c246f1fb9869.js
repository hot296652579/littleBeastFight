System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, Singleton, _crd;

  _export("default", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d92edyS1QZPxrCiZsOP5YdO", "Sigleton", undefined);

      _export("default", Singleton = class Singleton {
        static getInstance() {
          if (this._instance == null) {
            this._instance = new this();
          }

          return this._instance;
        }

      });

      Singleton._instance = null;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ec6a114ddf3915ecea647f0f68d4c246f1fb9869.js.map