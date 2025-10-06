(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9156],
  {
    85761: function (t, e, n) {
      Promise.resolve().then(n.bind(n, 23227));
    },
    23227: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          TransactionsTable: function () {
            return x;
          },
        });
      var i = n(57437),
        a = n(2265),
        s = n(68420),
        o = n(24919),
        l = n(99376),
        r = n(51378),
        c = n(43871),
        d = n(29784),
        u = n(91960),
        m = n(89616),
        g = n(25961),
        f = n(66790);
      let h = {
          loading: !0,
          hasNextPage: !1,
          isNextPageLoading: !0,
          items: [],
        },
        p = (t) => {
          let [e, n] = (0, a.useState)(h),
            i = (0, a.useRef)(null),
            s = (0, a.useMemo)(() => (0, m.GF)(t || {}), [t]),
            o = (0, u.TL)(),
            l = (0, a.useCallback)((t) => {
              n((e) => {
                let n = t(e);
                return (0, f.v)(e, n) ? e : n;
              });
            }, []),
            p = (0, a.useCallback)(async () => {
              i.current?.unsubscribe(), (i.current = null), n(h);
            }, []),
            _ = (0, a.useCallback)(
              async (t, e, n) => {
                let { data: i } = await o(
                    r.U.endpoints.getTransactions.initiate({
                      limit: t,
                      offset: e,
                      where: n,
                    })
                  ),
                  a = i?.transactions?.length || 0;
                return { data: i, itemsLength: a };
              },
              [o]
            );
          (0, g.K)(async () => {
            await p();
            let { data: t, itemsLength: e } = await _(51, 1, s);
            l((n) => {
              let i = (0, m.b2)({
                data: {
                  transactions: (0, m.Z4)(t?.transactions || [], n.items),
                },
                loading: !1,
                networkStatus: 7,
              });
              return {
                ...n,
                items: [...n.items, ...i],
                isNextPageLoading: !1,
                hasNextPage: 51 === e,
              };
            }),
              (i.current = c.ti
                .subscribe({
                  query: d.Uq,
                  variables: { limit: 1, offset: 0, where: s },
                })
                .subscribe({
                  next(t) {
                    let { data: e } = t,
                      n = e?.transactions?.length || 0;
                    l((t) => {
                      let i = (0, m.b2)({
                        data: {
                          transactions: (0, m.Z4)(
                            e?.transactions || [],
                            t.items
                          ),
                        },
                        loading: !1,
                        networkStatus: 7,
                      });
                      return {
                        ...t,
                        loading: !1,
                        items: [...i, ...t.items],
                        hasNextPage: t.hasNextPage || 51 === n,
                        isNextPageLoading: !1,
                      };
                    });
                  },
                  error() {
                    l((t) => ({ ...t, loading: !1 }));
                  },
                }));
          }, [s]);
          let x = async () => {
            if (e.isNextPageLoading || e.loading) return;
            l((t) => ({ ...t, isNextPageLoading: !0 }));
            let { data: t, itemsLength: n } = await _(51, e.items.length, s);
            l((e) => {
              let i = (0, m.b2)({
                data: {
                  transactions: (0, m.Z4)(t?.transactions || [], e.items),
                },
                loading: !1,
                networkStatus: 7,
              });
              return {
                ...e,
                items: [...e.items, ...i],
                isNextPageLoading: !1,
                hasNextPage: 51 === n,
              };
            });
          };
          return { state: e, loadNextPage: x };
        };
      var _ = n(72694);
      let x = () => {
        let { push: t } = (0, l.useRouter)(),
          [e, n] = (0, a.useState)({}),
          { state: r, loadNextPage: c } = p(e),
          { items: d, loading: u } = r,
          m = (0, _.Sf)(() => {
            c();
          }, 500);
        return (0, i.jsx)("div", {
          children: (0, i.jsx)(o.iA, {
            isLoading: u,
            title: "Transactions",
            selectHandler: (e) => {
              t(`#`);
            },
            skeletonColumns: s.T7,
            columns: s.yV,
            filters: s.yR,
            filterHandler: (t) => {
              0 == Object.keys(t).length ? n({}) : n(t);
            },
            data: d,
            intersectingHandler: (t) => {
              t && m();
            },
          }),
        });
      };
    },
    25961: function (t, e, n) {
      "use strict";
      n.d(e, {
        K: function () {
          return a;
        },
      });
      var i = n(2265);
      function a(t, e) {
        let n = (0, i.useRef)(void 0);
        (0, i.useEffect)(() => {
          (n.current && JSON.stringify(n.current) === JSON.stringify(e)) ||
            ((n.current = e), t());
        }, [t, e]);
      }
    },
    25864: function (t, e, n) {
      "use strict";
      n.d(e, {
        T: function () {
          return a;
        },
      });
      var i = n(57437);
      let a = (0, n(2265).memo)((t) => {
        let { type: e, ...n } = t;
        return "thin" === e
          ? (0, i.jsx)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 20 20",
              children: (0, i.jsx)("path", {
                stroke: "currentColor",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M15 5 5 15M5 5l10 10",
              }),
            })
          : "new" === e
          ? (0, i.jsx)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              width: "15",
              height: "15",
              fill: "none",
              viewBox: "0 0 15 15",
              children: (0, i.jsx)("path", {
                fill: "currentColor",
                fillRule: "evenodd",
                d: "M.945.16a.556.556 0 0 0-.78.792l6.601 6.497-6.603 6.603a.556.556 0 0 0 .785.786l6.61-6.61 6.497 6.397a.556.556 0 0 0 .78-.792l-6.491-6.39L14.838.948a.556.556 0 0 0-.786-.785l-6.5 6.5L.945.16Z",
                clipRule: "evenodd",
              }),
            })
          : (0, i.jsxs)("svg", {
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ...n,
              children: [
                (0, i.jsx)("path", {
                  d: "M18 6L6 18",
                  stroke: "currentColor",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, i.jsx)("path", {
                  d: "M6 6L18 18",
                  stroke: "currentColor",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
              ],
            });
      });
      a.displayName = "CloseIcon";
    },
    9433: function (t, e, n) {
      "use strict";
      n.d(e, {
        GeneralInfo: function () {
          return p;
        },
      });
      var i = n(57437),
        a = n(28664),
        s = n.n(a),
        o = n(2265),
        l = n(36760),
        r = n.n(l),
        c = n(33145),
        d = n(29194),
        u = n(91960),
        m = n(3562),
        g = n(29557),
        f = n(34085);
      let h = (t, e) => {
          let n = t.toString();
          return n.includes(".") && n.length - n.indexOf(".") > e + 1
            ? parseFloat(n.slice(0, n.indexOf(".") + e + 1))
            : t;
        },
        p = o.memo((t) => {
          let { infoBlocks: e, className: n } = t,
            a = (0, u.TL)(),
            {
              store: {
                TokenomicsEntity: { bondedTokens: l, inflation: p },
                CoinEntity: {
                  coins: {
                    entangle: { marketCap: _, totalSupply: x },
                  },
                },
              },
              asyncActions: {
                Tokenomics: { getBondedTokens: v },
                Coin: { getMarketCap: b, getSupply: k },
              },
            } = (0, u.oR)((t) => ({
              TokenomicsEntity: t.TokenomicsEntity,
              CoinEntity: t.CoinEntity,
            }));
          (0, o.useEffect)(() => {
            a(v()), a(k("entangle")), a(b("entangle"));
          }, []);
          let C = (0, d.q_)({
              from: {
                marketCap: 0,
                inflation: 0,
                APR: 0,
                supply: 0,
                totalStaked: 0,
              },
              config: { duration: 500 },
            }),
            N = (x * p) / Number(l);
          (0, o.useEffect)(() => {
            C.marketCap.start(_),
              C.inflation.start(h(p, 2)),
              C.APR.start(h(N, 2)),
              C.supply.start(h(x, 2)),
              C.totalStaked.start(h(Number(l), 2));
          }, [
            C.marketCap,
            C.inflation,
            C.APR,
            C.supply,
            C.totalStaked,
            _,
            p,
            N,
            x,
            l,
          ]);
          let j = h(p, 2),
            w = h(N, 2),
            y = h(x, 2),
            L = h(Number(l), 2),
            M = (0, o.useMemo)(() => {
              let t = (0, i.jsxs)("div", {
                className: s().supply,
                children: [
                  (0, i.jsx)(c.default, {
                    className: "w-6 h-6",
                    src: (0, m.Sv)(g.ZP.chainId.toString()),
                    width: 24,
                    height: 24,
                    alt: `${f.f[g.ZP.chainId]} Icon`,
                  }),
                  (0, i.jsxs)("span", {
                    children: [
                      (0, i.jsx)(d.q.span, {
                        children: C.supply.to((t) =>
                          t.toLocaleString("en", {
                            minimumFractionDigits: 0,
                            maximumFractionDigits: 2,
                          })
                        ),
                      }),
                      " NGL",
                    ],
                  }),
                ],
              });
              return [
                {
                  title: "Market Cap",
                  value: (0, i.jsxs)(i.Fragment, {
                    children: [
                      "$",
                      (0, i.jsx)(d.q.span, {
                        children: C.marketCap.to((t) =>
                          t.toLocaleString("en", { maximumFractionDigits: 0 })
                        ),
                      }),
                    ],
                  }),
                },
                {
                  title: "Inflation",
                  value: (0, i.jsxs)(i.Fragment, {
                    children: [
                      (0, i.jsx)(d.q.span, {
                        children: C.inflation.to((t) =>
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
                  value: (0, i.jsxs)(i.Fragment, {
                    children: [
                      (0, i.jsx)(d.q.span, {
                        children: C.APR.to((t) =>
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
                { title: "Supply (NGL)", value: t },
                {
                  title: "Total Stake",
                  value: (0, i.jsx)(d.q.span, {
                    children: C.totalStaked.to((t) =>
                      t.toLocaleString("en", {
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 2,
                      })
                    ),
                  }),
                },
              ];
            }, [w, j, y, L, _]);
          return (0, i.jsx)("div", {
            className: r()(s().generalInfo, n),
            children: (e || M).map((t, e) => {
              let { title: n, value: a } = t;
              return (0, i.jsxs)(
                "div",
                {
                  className: s().infoBlock,
                  children: [
                    (0, i.jsx)("span", {
                      className: s().infoBlockTitle,
                      children: n,
                    }),
                    (0, i.jsx)("span", {
                      className: s().infoBlockValue,
                      children: a,
                    }),
                  ],
                },
                e
              );
            }),
          });
        });
      p.displayName = "GeneralInfo";
    },
    93946: function (t, e, n) {
      "use strict";
      n.d(e, {
        ModalContainer: function () {
          return d;
        },
      });
      var i = n(57437),
        a = n(4618),
        s = n.n(a),
        o = n(2265),
        l = n(36760),
        r = n.n(l),
        c = n(25864);
      let d = (t) => {
        let {
          enable: e = !1,
          title: n,
          children: a,
          isCloseIcon: l,
          className: d,
          modalClassName: u,
          titleClassName: m,
          titleTextClassName: g,
          onClose: f,
          styleBasic: h,
          closeIconClassName: p,
          closeIconThin: _,
        } = t;
        return ((0, o.useEffect)(() => {
          if ("undefined" != typeof document && void 0 !== document.body && e)
            return (
              (document.body.className = s().bodyOverflowHidden),
              () => {
                document.body.className = "";
              }
            );
        }, []),
        e)
          ? (0, i.jsx)("div", {
              className: r()(s().modalContainer, d, {
                [s().modalContainerBasic]: h,
              }),
              onClick: f,
              children: (0, i.jsxs)("div", {
                className: r()(s().modal, u, { [s().modalBasic]: h }),
                onClick: (t) => {
                  t.stopPropagation();
                },
                children: [
                  n &&
                    (0, i.jsxs)("div", {
                      className: r()(s().modalHeader, m),
                      children: [
                        (0, i.jsx)("div", {
                          className: r()(s().title, g, { [s().titleBasic]: h }),
                          children: n,
                        }),
                        l &&
                          (0, i.jsx)("button", {
                            className: r()(
                              s().closeIcon,
                              { [s().closeIconBasic]: h },
                              p
                            ),
                            onClick: f,
                            children: (0, i.jsx)(c.T, {
                              type: _ ? "thin" : h ? "new" : "base",
                            }),
                          }),
                      ],
                    }),
                  h && (0, i.jsx)("div", { className: s().divider }),
                  a,
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
      var i = n(57437),
        a = n(36760),
        s = n.n(a),
        o = n(48303),
        l = n.n(o),
        r = n(99376),
        c = n(2265),
        d = n(27648);
      let u = (t, e) => t.find((t) => t.path === e) || t[0],
        m = (t) => {
          let { tabs: e } = t,
            n = (0, r.usePathname)(),
            [a, o] = (0, c.useState)(u(e, n)),
            m = (t) => o(t);
          return (0, i.jsx)("ul", {
            className: l().tabs,
            children: e.map((t) => {
              let { path: e, name: n } = t;
              return (0, i.jsx)(
                "li",
                {
                  children: (0, i.jsx)(d.default, {
                    className: s()(l().tabs__item, {
                      [l().tabs__item_active]: a?.path === e,
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
          return i.GeneralInfo;
        },
        F0: function () {
          return a.ModalContainer;
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
      var i = n(9433),
        a = n(93946),
        s = n(57437),
        o = n(52541),
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
              width: i,
              style: a = { marginRight: "10px" },
              ...d
            } = t,
            u = (0, l.useMemo)(() => {
              let t = e?.toLowerCase();
              return t in c
                ? c[t]
                : "data:image/svg+xml;utf8," + encodeURIComponent((0, o.Y)(e));
            }, [e]);
          return (0, s.jsx)(r.default, {
            width: i,
            height: n,
            src: u,
            alt: e,
            style: a,
            quality: 100,
            ...d,
          });
        };
      var u = n(23757),
        m = n(61411);
    },
    66790: function (t, e, n) {
      "use strict";
      n.d(e, {
        v: function () {
          return i;
        },
      });
      let i = (t, e) => JSON.stringify(t) === JSON.stringify(e);
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
      function i(t) {
        return (
          t.split("").reduce((t, e) => -((t ^ e.charCodeAt(0)) * 5), 5) >>> 2
        );
      }
      function a(t = "", e = 95, n = 45, a = i) {
        let s = a(t);
        return (
          [...Array(t ? 25 : 0)].reduce(
            (t, e, n) =>
              s & (1 << n % 15)
                ? t +
                  `<rect x="${n > 14 ? 7 - ~~(n / 5) : ~~(n / 5)}" y="${
                    n % 5
                  }" width="1" height="1"/>`
                : t,
            `<svg viewBox="-1.5 -1.5 8 8" xmlns="http://www.w3.org/2000/svg" fill="hsl(${
              (s % 9) * 40
            } ${e}% ${n}%)">`
          ) + "</svg>"
        );
      }
      n.d(e, {
        Y: function () {
          return a;
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
                this.innerHTML = t.#t[n] ??= a(...e);
              }
            }
          );
    },
  },
  function (t) {
    t.O(
      0,
      [
        6560, 8497, 4350, 6918, 8218, 3814, 6990, 9228, 8933, 1293, 9543, 6276,
        483, 2971, 2117, 1744,
      ],
      function () {
        return t((t.s = 85761));
      }
    ),
      (_N_E = t.O());
  },
]);
