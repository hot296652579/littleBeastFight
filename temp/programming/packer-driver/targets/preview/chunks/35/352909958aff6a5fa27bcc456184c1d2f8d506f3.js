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
        var result = {
          bundle: "",
          prefabName: ""
        };
        var arr = formName.split('/');

        if (arr.length <= 0) {
          return result;
        }

        var bundleName = arr[0];
        var prefabName = "";

        for (var k = 1; k < arr.length; k++) {
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
//# sourceMappingURL=352909958aff6a5fa27bcc456184c1d2f8d506f3.js.map