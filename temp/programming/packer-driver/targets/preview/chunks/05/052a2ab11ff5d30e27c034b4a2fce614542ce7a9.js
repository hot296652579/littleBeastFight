System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, PriorityElement, PriorityQueue, _crd;

  _export({
    PriorityElement: void 0,
    PriorityQueue: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0b5f6Q4lBZKL6FhatMD2Wu/", "PriorityQueue", undefined);

      /**
       * 带有优先级的队列或者栈中的元素
       */
      _export("PriorityElement", PriorityElement = class PriorityElement {
        constructor(data, priority) {
          this.priority = 0;
          this.data = data;
          this.priority = priority;
        }

      });

      _export("PriorityQueue", PriorityQueue = class PriorityQueue {
        constructor() {
          this.queue = new Array(32);
          this.size = 32;
        }

        hasElement(t) {
          for (var e of this.queue) {
            if (e.data == t) {
              return true;
            }
          }

          return false;
        }

        enqueue(e, priority) {
          if (priority === void 0) {
            priority = 0;
          }

          if (this.size > this.queue.length) {//扩容
          }
        }

        dequeue() {}

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=052a2ab11ff5d30e27c034b4a2fce614542ce7a9.js.map