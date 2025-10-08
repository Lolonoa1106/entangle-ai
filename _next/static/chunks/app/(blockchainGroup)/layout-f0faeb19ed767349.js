(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4486],
  {
    11585: function (t, e, n) {
      Promise.resolve().then(n.t.bind(n, 97140, 23)),
        Promise.resolve().then(n.bind(n, 63651));
    },
    63651: function (t, e, n) {
      "use strict";
      n.d(e, {
        default: function () {
          return l;
        },
      });
      var o = n(57437),
        i = n(99376),
        a = n(24919);
      let s = () =>
        (0, o.jsx)(a.jP, {
          tabs: [
            { path: "/validators", name: "Validators" },
            { path: "/blocks", name: "Blocks" },
            { path: "/transactions", name: "Transactions" },
            { path: "/params", name: "Params" },
          ],
        });
      function l() {
        return (0, i.useParams)().address
          ? null
          : (0, o.jsxs)(o.Fragment, {
              children: [(0, o.jsx)(s, {}), (0, o.jsx)(a.WR, {})],
            });
      }
    },
    25864: function (t, e, n) {
      "use strict";
      n.d(e, {
        T: function () {
          return i;
        },
      });
      var o = n(57437);
      let i = (0, n(2265).memo)((t) => {
        let { type: e, ...n } = t;
        return "thin" === e
          ? (0, o.jsx)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 20 20",
              children: (0, o.jsx)("path", {
                stroke: "currentColor",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M15 5 5 15M5 5l10 10",
              }),
            })
          : "new" === e
          ? (0, o.jsx)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              width: "15",
              height: "15",
              fill: "none",
              viewBox: "0 0 15 15",
              children: (0, o.jsx)("path", {
                fill: "currentColor",
                fillRule: "evenodd",
                d: "M.945.16a.556.556 0 0 0-.78.792l6.601 6.497-6.603 6.603a.556.556 0 0 0 .785.786l6.61-6.61 6.497 6.397a.556.556 0 0 0 .78-.792l-6.491-6.39L14.838.948a.556.556 0 0 0-.786-.785l-6.5 6.5L.945.16Z",
                clipRule: "evenodd",
              }),
            })
          : (0, o.jsxs)("svg", {
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ...n,
              children: [
                (0, o.jsx)("path", {
                  d: "M18 6L6 18",
                  stroke: "currentColor",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, o.jsx)("path", {
                  d: "M6 6L18 18",
                  stroke: "currentColor",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
              ],
            });
      });
      i.displayName = "CloseIcon";
    },
    9433: function (t, e, n) {
      "use strict";
      n.d(e, {
        GeneralInfo: function () {
          return _;
        },
      });
      var o = n(57437),
        i = n(28664),
        a = n.n(i),
        s = n(2265),
        l = n(36760),
        r = n.n(l),
        c = n(33145),
        d = n(29194),
        u = n(91960),
        m = n(3562),
        p = n(29557),
        h = n(34085);
      let f = (t, e) => {
          let n = t.toString();
          return n.includes(".") && n.length - n.indexOf(".") > e + 1
            ? parseFloat(n.slice(0, n.indexOf(".") + e + 1))
            : t;
        },
        _ = s.memo((t) => {
          let { infoBlocks: e, className: n } = t,
            i = (0, u.TL)(),
            {
              store: {
                TokenomicsEntity: { bondedTokens: l, inflation: _ },
                CoinEntity: {
                  coins: {
                    entangle: { marketCap: g, totalSupply: x },
                  },
                },
              },
              asyncActions: {
                Tokenomics: { getBondedTokens: v },
                Coin: { getMarketCap: k, getSupply: b },
              },
            } = (0, u.oR)((t) => ({
              TokenomicsEntity: t.TokenomicsEntity,
              CoinEntity: t.CoinEntity,
            }));
          (0, s.useEffect)(() => {
            i(v()), i(b("entangle")), i(k("entangle"));
          }, []);
          let j = (0, d.q_)({
              from: {
                marketCap: 0,
                inflation: 0,
                APR: 0,
                supply: 0,
                totalStaked: 0,
              },
              config: { duration: 500 },
            }),
            C = (x * _) / Number(l);
          (0, s.useEffect)(() => {
            j.marketCap.start(g),
              j.inflation.start(f(_, 2)),
              j.APR.start(f(C, 2)),
              j.supply.start(f(x, 2)),
              j.totalStaked.start(f(Number(l), 2));
          }, [
            j.marketCap,
            j.inflation,
            j.APR,
            j.supply,
            j.totalStaked,
            g,
            _,
            C,
            x,
            l,
          ]);
          let w = f(_, 2),
            y = f(C, 2),
            B = f(x, 2),
            N = f(Number(l), 2),
            M = (0, s.useMemo)(() => {
              let t = (0, o.jsxs)("div", {
                className: a().supply,
                children: [
                  (0, o.jsx)(c.default, {
                    className: "w-6 h-6",
                    src: (0, m.Sv)(p.ZP.chainId.toString()),
                    width: 24,
                    height: 24,
                    alt: `${h.f[p.ZP.chainId]} Icon`,
                  }),
                  (0, o.jsxs)("span", {
                    children: [
                      (0, o.jsx)(d.q.span, {
                        children: j.supply.to((t) =>
                          t.toLocaleString("en", {
                            minimumFractionDigits: 0,
                            maximumFractionDigits: 2,
                          })
                        ),
                      }),
                      " EAI",
                    ],
                  }),
                ],
              });
              return [
                {
                  title: "Market Cap",
                  value: (0, o.jsxs)(o.Fragment, {
                    children: [
                      "$",
                      (0, o.jsx)(d.q.span, {
                        children: j.marketCap.to((t) =>
                          t.toLocaleString("en", { maximumFractionDigits: 0 })
                        ),
                      }),
                    ],
                  }),
                },
                {
                  title: "Inflation",
                  value: (0, o.jsxs)(o.Fragment, {
                    children: [
                      (0, o.jsx)(d.q.span, {
                        children: j.inflation.to((t) =>
                          t.toLocaleString("en", {
                            minimumFractionDigits: 0,
                            maximumFractionDigits: 2,
                          })
                        ),
                      }),
                      "%",
                    ],
                  }),
                },
                {
                  title: "APR",
                  value: (0, o.jsxs)(o.Fragment, {
                    children: [
                      (0, o.jsx)(d.q.span, {
                        children: j.APR.to((t) =>
                          t.toLocaleString("en", {
                            minimumFractionDigits: 0,
                            maximumFractionDigits: 2,
                          })
                        ),
                      }),
                      "%",
                    ],
                  }),
                },
                { title: "Supply (EAI)", value: t },
                {
                  title: "Total Stake",
                  value: (0, o.jsx)(d.q.span, {
                    children: j.totalStaked.to((t) =>
                      t.toLocaleString("en", {
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 2,
                      })
                    ),
                  }),
                },
              ];
            }, [y, w, B, N, g]);
          return (0, o.jsx)("div", {
            className: r()(a().generalInfo, n),
            children: (e || M).map((t, e) => {
              let { title: n, value: i } = t;
              return (0, o.jsxs)(
                "div",
                {
                  className: a().infoBlock,
                  children: [
                    (0, o.jsx)("span", {
                      className: a().infoBlockTitle,
                      children: n,
                    }),
                    (0, o.jsx)("span", {
                      className: a().infoBlockValue,
                      children: i,
                    }),
                  ],
                },
                e
              );
            }),
          });
        });
      _.displayName = "GeneralInfo";
    },
    93946: function (t, e, n) {
      "use strict";
      n.d(e, {
        ModalContainer: function () {
          return d;
        },
      });
      var o = n(57437),
        i = n(4618),
        a = n.n(i),
        s = n(2265),
        l = n(36760),
        r = n.n(l),
        c = n(25864);
      let d = (t) => {
        let {
          enable: e = !1,
          title: n,
          children: i,
          isCloseIcon: l,
          className: d,
          modalClassName: u,
          titleClassName: m,
          titleTextClassName: p,
          onClose: h,
          styleBasic: f,
          closeIconClassName: _,
          closeIconThin: g,
        } = t;
        return ((0, s.useEffect)(() => {
          if ("undefined" != typeof document && void 0 !== document.body && e)
            return (
              (document.body.className = a().bodyOverflowHidden),
              () => {
                document.body.className = "";
              }
            );
        }, []),
        e)
          ? (0, o.jsx)("div", {
              className: r()(a().modalContainer, d, {
                [a().modalContainerBasic]: f,
              }),
              onClick: h,
              children: (0, o.jsxs)("div", {
                className: r()(a().modal, u, { [a().modalBasic]: f }),
                onClick: (t) => {
                  t.stopPropagation();
                },
                children: [
                  n &&
                    (0, o.jsxs)("div", {
                      className: r()(a().modalHeader, m),
                      children: [
                        (0, o.jsx)("div", {
                          className: r()(a().title, p, { [a().titleBasic]: f }),
                          children: n,
                        }),
                        l &&
                          (0, o.jsx)("button", {
                            className: r()(
                              a().closeIcon,
                              { [a().closeIconBasic]: f },
                              _
                            ),
                            onClick: h,
                            children: (0, o.jsx)(c.T, {
                              type: g ? "thin" : f ? "new" : "base",
                            }),
                          }),
                      ],
                    }),
                  f && (0, o.jsx)("div", { className: a().divider }),
                  i,
                ],
              }),
            })
          : null;
      };
    },
    61411: function (t, e, n) {
      "use strict";
      n.d(e, {
        PathTabs: function () {
          return m;
        },
      });
      var o = n(57437),
        i = n(36760),
        a = n.n(i),
        s = n(48303),
        l = n.n(s),
        r = n(99376),
        c = n(2265),
        d = n(27648);
      let u = (t, e) => t.find((t) => t.path === e) || t[0],
        m = (t) => {
          let { tabs: e } = t,
            n = (0, r.usePathname)(),
            [i, s] = (0, c.useState)(u(e, n)),
            m = (t) => s(t);
          return (0, o.jsx)("ul", {
            className: l().tabs,
            children: e.map((t) => {
              let { path: e, name: n } = t;
              return (0, o.jsx)(
                "li",
                {
                  children: (0, o.jsx)(d.default, {
                    className: a()(l().tabs__item, {
                      [l().tabs__item_active]: i?.path === e,
                    }),
                    href: e,
                    onClick: () => m(t),
                    children: n,
                  }),
                },
                e
              );
            }),
          });
        };
    },
    24919: function (t, e, n) {
      "use strict";
      n.d(e, {
        WR: function () {
          return o.GeneralInfo;
        },
        F0: function () {
          return i.ModalContainer;
        },
        jP: function () {
          return m.PathTabs;
        },
        oi: function () {
          return d;
        },
        iA: function () {
          return u.i;
        },
      });
      var o = n(9433),
        i = n(93946),
        a = n(57437),
        s = n(52541),
        l = n(2265),
        r = n(33145);
      let c = {
          "photon-gov": "/protocols/photon-gov.png",
          entangle: "/protocols/entangle-clear.png",
          borpa: "/protocols/gorples.png",
          gorples: "/protocols/gorples.png",
          gorpa: "/protocols/gorples.png",
          "universal-data-feeds": "/protocols/udf.png",
          "udf-v1.1": "/protocols/udf.png",
        },
        d = (t) => {
          let {
              id: e,
              height: n,
              width: o,
              style: i = { marginRight: "10px" },
              ...d
            } = t,
            u = (0, l.useMemo)(() => {
              let t = e?.toLowerCase();
              return t in c
                ? c[t]
                : "data:image/svg+xml;utf8," + encodeURIComponent((0, s.Y)(e));
            }, [e]);
          return (0, a.jsx)(r.default, {
            width: o,
            height: n,
            src: u,
            alt: e,
            style: i,
            quality: 100,
            ...d,
          });
        };
      var u = n(23757),
        m = n(61411);
    },
    97140: function (t) {
      t.exports = { blockChainPage: "page_blockChainPage__L1RBk" };
    },
    28664: function (t) {
      t.exports = {
        generalInfo: "GeneralInfo_generalInfo__cNImG",
        infoBlock: "GeneralInfo_infoBlock__53xxE",
        infoBlockTitle: "GeneralInfo_infoBlockTitle__OMVOR",
        infoBlockValue: "GeneralInfo_infoBlockValue__Kj2Yz",
        supply: "GeneralInfo_supply__kQcFX",
      };
    },
    4618: function (t) {
      t.exports = {
        modalContainer: "Modal_modalContainer__3KHja",
        modalContainerBasic: "Modal_modalContainerBasic__d7kgM",
        modal: "Modal_modal__LBq2E",
        bodyOverflowHidden: "Modal_bodyOverflowHidden__bQx__",
        modalHeader: "Modal_modalHeader__pQClH",
        title: "Modal_title__kJDwr",
        closeIcon: "Modal_closeIcon__O5SGN",
        divider: "Modal_divider__cGe9p",
        modalBasic: "Modal_modalBasic__NldQH",
        titleBasic: "Modal_titleBasic__CI7mr",
        closeIconBasic: "Modal_closeIconBasic__87_ZV",
      };
    },
    48303: function (t) {
      t.exports = {
        tabs: "PathTabs_tabs__hBnZI",
        tabs__item: "PathTabs_tabs__item__GDMmx",
        tabs__item_active: "PathTabs_tabs__item_active__VzAzM",
      };
    },
    52541: function (t, e, n) {
      "use strict";
      function o(t) {
        return (
          t.split("").reduce((t, e) => -((t ^ e.charCodeAt(0)) * 5), 5) >>> 2
        );
      }
      function i(t = "", e = 95, n = 45, i = o) {
        let a = i(t);
        return (
          [...Array(t ? 25 : 0)].reduce(
            (t, e, n) =>
              a & (1 << n % 15)
                ? t +
                  `<rect x="${n > 14 ? 7 - ~~(n / 5) : ~~(n / 5)}" y="${
                    n % 5
                  }" width="1" height="1"/>`
                : t,
            `<svg viewBox="-1.5 -1.5 8 8" xmlns="http://www.w3.org/2000/svg" fill="hsl(${
              (a % 9) * 40
            } ${e}% ${n}%)">`
          ) + "</svg>"
        );
      }
      n.d(e, {
        Y: function () {
          return i;
        },
      }),
        globalThis.customElements?.get("minidenticon-svg") ||
          globalThis.customElements?.define(
            "minidenticon-svg",
            class t extends HTMLElement {
              static observedAttributes = [
                "username",
                "saturation",
                "lightness",
              ];
              static #t = {};
              #e = !1;
              connectedCallback() {
                this.#n(), (this.#e = !0);
              }
              attributeChangedCallback() {
                this.#e && this.#n();
              }
              #n() {
                let e = t.observedAttributes.map(
                    (t) => this.getAttribute(t) || void 0
                  ),
                  n = e.join(",");
                this.innerHTML = t.#t[n] ??= i(...e);
              }
            }
          );
    },
  },
  function (t) {
    t.O(
      0,
      [
        4633, 6560, 8497, 4350, 6918, 8218, 3814, 6990, 9228, 8933, 1293, 9543,
        6276, 483, 2971, 2117, 1744,
      ],
      function () {
        return t((t.s = 11585));
      }
    ),
      (_N_E = t.O());
  },
]);
