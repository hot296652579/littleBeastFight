import { Component, Sprite, UITransform } from "cc";
import { ResMgr } from "../../../../Script/Base/ResMgr";

const _iconMapping: { [key: number]: string; } = {
    0x00: "bear",
    0x01: "crocodile",
    0x02: "tiger",
    0x03: "elephant",
    0x04: "gorilla",
    0x05: "lion",
    0x06: "pig",
    0x07: "tiger",
    0x10: "walrus",
    0x11: "tiger",
    0x12: "lion",
    0x13: "lion",
    0x14: "lion",
    0x15: "tiger",
    0x16: "tiger",
    0x17: "tiger"
};
export default class UICard extends Component {
    private spriteCard: Sprite

    start() {
        this.spriteCard = this.node.getComponent(Sprite)
    }

    async refreshSprite(card: number) {
        const icon = await ResMgr.getInstance().getSpriteFrameByPath(`Battle/Texture/animal/${_iconMapping[card]}`)
        this.spriteCard.spriteFrame = icon
    }
}