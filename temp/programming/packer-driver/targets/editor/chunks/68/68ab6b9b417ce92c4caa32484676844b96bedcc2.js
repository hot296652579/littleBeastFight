System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, splitFormName;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0f154olvbxGJ7UQKGi5bjUO", "Utils", undefined);

      /**
       * 
       * @param 将prefab的路径分隔为 bundle 和 prefabName 
       * @returns 
       */
      _export("splitFormName", splitFormName = formName => {
        let result = {
          bundle: "",
          prefabName: ""
        };
        let arr = formName.split('/');

        if (arr.length <= 0) {
          return result;
        }

        let bundleName = arr[0];
        let prefabName = "";

        for (let k = 1; k < arr.length; k++) {
          prefabName = prefabName + arr[k] + "/";
        }

        prefabName = prefabName.substring(0, prefabName.length - 1);
        result.bundle = bundleName;
        result.prefabName = prefabName;
        return result;
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=68ab6b9b417ce92c4caa32484676844b96bedcc2.js.map