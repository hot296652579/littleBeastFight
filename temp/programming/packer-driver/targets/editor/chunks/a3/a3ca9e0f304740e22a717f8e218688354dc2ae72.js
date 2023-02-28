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
        constructor(...args) {
          super(...args);
          this.spriteCard = void 0;
        }

        start() {
          this.spriteCard = this.node.getComponent(Sprite);
        }

        refreshSprite(card) {
          console.log('card', card);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a3ca9e0f304740e22a717f8e218688354dc2ae72.js.map