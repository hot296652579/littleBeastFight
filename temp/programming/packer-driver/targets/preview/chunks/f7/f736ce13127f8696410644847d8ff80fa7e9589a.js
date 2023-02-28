System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, Sprite, UICard, _crd;

  _export("default", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
      Sprite = _cc.Sprite;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a162cLJeWNPabYTtIHVaPFG", "UICard", undefined);

      __checkObsolete__(['Component', 'Sprite']);

      _export("default", UICard = class UICard extends Component {
        constructor() {
          super(...arguments);
          this._iconMapping = {
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
          this.spriteCard = void 0;
        }

        start() {
          this.spriteCard = this.node.getComponent(Sprite);
        }

        refreshSprite(card) {}

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f736ce13127f8696410644847d8ff80fa7e9589a.js.map