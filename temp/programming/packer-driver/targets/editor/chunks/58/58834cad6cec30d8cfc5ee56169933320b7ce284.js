System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, Sprite, ResMgr, UICard, _crd, _iconMapping;

  function _reportPossibleCrUseOfResMgr(extras) {
    _reporterNs.report("ResMgr", "../../../../Script/Base/ResMgr", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
      Sprite = _cc.Sprite;
    }, function (_unresolved_2) {
      ResMgr = _unresolved_2.ResMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a162cLJeWNPabYTtIHVaPFG", "UICard", undefined);

      __checkObsolete__(['Component', 'Sprite', 'UITransform']);

      _iconMapping = {
        0x00: "bear",
        0x01: "crocodile",
        0x02: "tiger",
        0x03: "elephant",
        0x04: "gorilla",
        0x05: "lion",
        0x06: "pig",
        0x07: "walrus",
        0x10: "bear_square",
        0x11: "crocodile_square",
        0x12: "tiger_square",
        0x13: "elephant_square",
        0x14: "gorilla_square",
        0x15: "lion_square",
        0x16: "pig_square",
        0x17: "walrus_square"
      };

      _export("default", UICard = class UICard extends Component {
        constructor(...args) {
          super(...args);
          this.spriteCard = void 0;
        }

        start() {
          this.spriteCard = this.node.getComponent(Sprite);
        }

        async refreshSprite(card) {
          const icon = await (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
            error: Error()
          }), ResMgr) : ResMgr).getInstance().getSpriteFrameByPath(`Battle/Texture/animal/${_iconMapping[card]}`);
          this.spriteCard.spriteFrame = icon;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=58834cad6cec30d8cfc5ee56169933320b7ce284.js.map