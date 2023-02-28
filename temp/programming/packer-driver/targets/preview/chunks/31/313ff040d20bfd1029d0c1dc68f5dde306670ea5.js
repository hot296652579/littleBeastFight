System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, OnFire, _crd;

  _export("default", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7ea88UPb/NCw4Ey6zcEdasM", "OnFire", undefined);

      /**
       * const ee = new OnFire();
       *
       * ee.on('click', (...values) => {});
       *
       * ee.on('mouseover', (...values) => {});
       *
       * ee.emit('click', 1, 2, 3);
       * ee.fire('mouseover', {}); // same with emit
       *
       * ee.off();
       */
      _export("default", OnFire = class OnFire {
        constructor() {
          this.es = {};
          this.emit = this.fire;
        }

        on(eventName, cb, once) {
          if (once === void 0) {
            once = false;
          }

          if (!this.es[eventName]) {
            this.es[eventName] = [];
          }

          this.es[eventName].push({
            cb,
            once,
            group: ""
          });
        }

        onGroup(eventName, cb, group) {
          if (!this.es[eventName]) {
            this.es[eventName] = [];
          }

          this.es[eventName].push({
            cb,
            once: false,
            group
          });
        }

        once(eventName, cb) {
          this.on(eventName, cb, true);
        }

        fire(eventName) {
          var listeners = this.es[eventName] || [];
          var l = listeners.length;

          for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            params[_key - 1] = arguments[_key];
          }

          for (var i = 0; i < l; i++) {
            var {
              cb,
              once
            } = listeners[i];
            cb.apply(this, params);

            if (once) {
              listeners.splice(i, 1);
              i--;
              l--;
            }
          }
        }

        offGroup(group) {
          for (var esKey in this.es) {
            var listeners = this.es[esKey] || [];
            var l = listeners.length;

            for (var i = 0; i < l; i++) {
              if (listeners[i].group === group) {
                listeners.splice(i, 1);
                i--;
                l--;
              }
            }
          }
        }

        off(eventName, cb) {
          // clean all
          if (eventName === undefined) {
            this.es = {};
          } else {
            if (cb === undefined) {
              // clean the eventName's listeners
              delete this.es[eventName];
            } else {
              var listeners = this.es[eventName] || []; // clean the event and listener

              var l = listeners.length;

              for (var i = 0; i < l; i++) {
                if (listeners[i].cb === cb) {
                  listeners.splice(i, 1);
                  i--;
                  l--;
                }
              }
            }
          }
        } // cname of fire


      });

      OnFire.ver = '__VERSION__';

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=313ff040d20bfd1029d0c1dc68f5dde306670ea5.js.map