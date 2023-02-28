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
            0x00: "蓝鼠",
            0x01: "蓝猫",
            0x02: "蓝狗",
            0x03: "蓝狼",
            0x04: "蓝豹",
            0x05: "蓝虎",
            0x06: "蓝狮",
            0x07: "蓝象",
            0x10: "红鼠",
            0x11: "红猫",
            0x12: "红狗",
            0x13: "红狼",
            0x14: "红豹",
            0x15: "红虎",
            0x16: "红狮",
            0x17: "红象"
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
//# sourceMappingURL=90a616d763cd3ee779a6f8f70a5dba21068088c3.js.map