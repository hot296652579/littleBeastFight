import { _decorator, Node } from "cc";
import EventMgr from "../../Script/Base/EventMgr";
import { LogicEvent } from "../../Script/Games/LogicEvent";
import { UIScreen } from "../../Script/UIFrame/UIFrom";

const { ccclass, property } = _decorator;

@ccclass('UIBattle')
export class UIBattle extends UIScreen {
    isEngross = true;

    @property(Node)
    private btnFight: Node = null;

    start() { }

    onLoad(): void {

    }

    async onShow(...params: any) {
        this.init();
        this.eventRegister();
    }

    init() {

    }

    eventRegister() {

    }

    async onBtnBackLobby() {
        await this.closeSelf();
        EventMgr.Instance.emit(LogicEvent.ENTER_HALL_FROM_GAMES);
    }
}