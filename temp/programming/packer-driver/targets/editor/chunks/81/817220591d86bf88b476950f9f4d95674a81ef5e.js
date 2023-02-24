System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, SysDefine, _crd, FormType, BubbleAppearType, BubbleDisAppearType, ModalOpacity, UIState;

  _export({
    SysDefine: void 0,
    FormType: void 0,
    BubbleAppearType: void 0,
    BubbleDisAppearType: void 0,
    ModalOpacity: void 0,
    UIState: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "387e9n2c0xMrojHEyaxkXEa", "SysDefine", undefined);

      (function (FormType) {
        FormType[FormType["FormType_Loading"] = 0] = "FormType_Loading";
        FormType[FormType["FormType_Screen"] = 1] = "FormType_Screen";
        FormType[FormType["FormType_Fixed"] = 2] = "FormType_Fixed";
        FormType[FormType["FormType_Popup"] = 3] = "FormType_Popup";
        FormType[FormType["FormType_Float"] = 4] = "FormType_Float";
        FormType[FormType["FormType_Win"] = 5] = "FormType_Win";
        FormType[FormType["FormType_Bubble"] = 6] = "FormType_Bubble";
      })(FormType || _export("FormType", FormType = {}));

      (function (BubbleAppearType) {
        BubbleAppearType[BubbleAppearType["AppearType_CenterCenter"] = 0] = "AppearType_CenterCenter";
        BubbleAppearType[BubbleAppearType["AppearType_CenterTop"] = 1] = "AppearType_CenterTop";
        BubbleAppearType[BubbleAppearType["AppearType_RightTop"] = 2] = "AppearType_RightTop";
        BubbleAppearType[BubbleAppearType["AppearType_RightBottom"] = 3] = "AppearType_RightBottom";
      })(BubbleAppearType || _export("BubbleAppearType", BubbleAppearType = {}));

      (function (BubbleDisAppearType) {
        BubbleDisAppearType[BubbleDisAppearType["DisappearType_FadeOut"] = 0] = "DisappearType_FadeOut";
        BubbleDisAppearType[BubbleDisAppearType["DisappearType_MoveUp_FadeOut"] = 1] = "DisappearType_MoveUp_FadeOut";
        BubbleDisAppearType[BubbleDisAppearType["DisappearType_MoveDown_FadeOut"] = 2] = "DisappearType_MoveDown_FadeOut";
      })(BubbleDisAppearType || _export("BubbleDisAppearType", BubbleDisAppearType = {}));

      (function (ModalOpacity) {
        ModalOpacity[ModalOpacity["None"] = 0] = "None";
        ModalOpacity[ModalOpacity["OpacityZero"] = 1] = "OpacityZero";
        ModalOpacity[ModalOpacity["OpacityLow"] = 2] = "OpacityLow";
        ModalOpacity[ModalOpacity["OpacityHalf"] = 3] = "OpacityHalf";
        ModalOpacity[ModalOpacity["OpacityHigh"] = 4] = "OpacityHigh";
        ModalOpacity[ModalOpacity["OpacityFull"] = 5] = "OpacityFull";
      })(ModalOpacity || _export("ModalOpacity", ModalOpacity = {}));

      (function (UIState) {
        UIState[UIState["None"] = 0] = "None";
        UIState[UIState["Loading"] = 1] = "Loading";
        UIState[UIState["Showing"] = 2] = "Showing";
        UIState[UIState["Hiding"] = 3] = "Hiding";
      })(UIState || _export("UIState", UIState = {}));

      _export("SysDefine", SysDefine = class SysDefine {});

      SysDefine.SYS_PATH_CANVAS = "Canvas";
      SysDefine.SYS_PATH_UIFORMS_CONFIG_INFO = "UIFormsConfigInfo";
      SysDefine.SYS_PATH_CONFIG_INFO = "SysConfigInfo";
      SysDefine.SYS_UIROOT_NAME = "Canvas/Root/UIROOT";
      SysDefine.SYS_UIMODAL_NAME = "Canvas/Root/UIROOT/UIModalManager";
      SysDefine.SYS_UIAdapter_NAME = "Canvas/Root/UIROOT/UIAdapterManager";
      SysDefine.SYS_SCENE_NODE = "Root";
      SysDefine.SYS_UIROOT_NODE = "UIROOT";
      SysDefine.SYS_SCREEN_NODE = "UIScreen";
      SysDefine.SYS_FIXED_NODE = "UIFixed";
      SysDefine.SYS_POPUP_NODE = "UIPopup";
      SysDefine.SYS_FLOAT_NODE = "UIFloat";
      SysDefine.SYS_WIN_NODE = "UIWin";
      SysDefine.SYS_LOADING_NODE = "UILoading";
      SysDefine.SYS_BUBBLE_NODE = "UIBubble";
      SysDefine.SYS_BLOCK_NODE = "UIBlock";
      SysDefine.SYS_STANDARD_Prefix = "_";
      SysDefine.SYS_STANDARD_Separator = "$";
      SysDefine.SYS_STANDARD_End = "#";
      SysDefine.UI_PATH_ROOT = "UIForms/";

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=817220591d86bf88b476950f9f4d95674a81ef5e.js.map