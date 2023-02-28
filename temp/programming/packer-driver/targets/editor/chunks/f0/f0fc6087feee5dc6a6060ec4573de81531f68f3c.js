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

      __checkObsolete__(['Component', 'Sprite']);

      _iconMapping = {
        0x00: "lion",
        0x01: "lion",
        0x02: "tiger",
        0x03: "lion",
        0x04: "lion",
        0x05: "lion",
        0x06: "lion",
        0x07: "tiger",
        0x10: "tiger",
        0x11: "tiger",
        0x12: "lion",
        0x13: "lion",
        0x14: "lion",
        0x15: "tiger",
        0x16: "tiger",
        0x17: "tiger"
      };

      _export("default", UICard = class UICard extends Component {
        constructor(...args) {
          super(...args);
          this.spriteCard = void 0;
        }

        start() {
          this.spriteCard = this.node.getComponent(Sprite);
        }

        refreshSprite(card) {
          (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
            error: Error()
          }), ResMgr) : ResMgr).getInstance().getSpriteFrameByPath(`Battle/Texture/animal/${_iconMapping[card]}`);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f0fc6087feee5dc6a6060ec4573de81531f68f3c.js.map