System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, PriorityElement, PriorityStake, _crd;

  function _reportPossibleCrUseOfPriorityElement(extras) {
    _reporterNs.report("PriorityElement", "./PriorityQueue", _context.meta, extras);
  }

  _export("PriorityStake", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      PriorityElement = _unresolved_2.PriorityElement;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "833cbxRK+ZAnYGNd46kuq9O", "PriorityStake", undefined);

      _export("PriorityStake", PriorityStake = class PriorityStake {
        constructor() {
          this.stack = new Array();
          this.size = 0;
        }

        getSize() {
          return this.size;
        }

        clear() {
          this.stack.length = 0;
          this.size = 0;
        }

        getTopElement() {
          if (this.stack.length <= 0) {
            return null;
          }

          return this.stack[this.stack.length - 1].data;
        }

        getElements() {
          //let elements:T[] = [];
          var elements = new Array();

          for (var e of this.stack) {
            elements.push(e.data);
          }

          return elements;
        }

        push(e, priority) {
          if (priority === void 0) {
            priority = 0;
          }

          this.stack.push(new (_crd && PriorityElement === void 0 ? (_reportPossibleCrUseOfPriorityElement({
            error: Error()
          }), PriorityElement) : PriorityElement)(e, priority));
          this.size++;
          this.ajust();
        }

        pop() {
          if (this.stack.length <= 0) {
            return null;
          }

          this.size--;
          var ele = this.stack.pop();

          if (ele !== undefined) {
            return ele.data;
          } else {
            return null;
          }
        } //根据优先级调整顺序


        ajust() {
          for (var i = this.stack.length - 1; i > 0; i--) {
            if (this.stack[i].priority < this.stack[i - 1].priority) {
              this.swap(i, i - 1);
            }
          }
        }

        swap(a, b) {
          var tmp = this.stack[a];
          this.stack[a] = this.stack[b];
          this.stack[b] = tmp;
        }

        hasElement(t) {
          for (var e of this.stack) {
            if (e.data === t) {
              return true;
            }
          }

          return false;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=159e5b4ed11a6a06d1eeaf88da80b783b950c1a4.js.map