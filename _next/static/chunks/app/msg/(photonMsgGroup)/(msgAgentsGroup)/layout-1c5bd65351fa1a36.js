(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5245],
  {
    46722: function (e, t, n) {
      Promise.resolve().then(n.bind(n, 35825)),
        Promise.resolve().then(n.t.bind(n, 65878, 23)),
        Promise.resolve().then(n.bind(n, 9433)),
        Promise.resolve().then(n.bind(n, 93946)),
        Promise.resolve().then(n.bind(n, 61411)),
        Promise.resolve().then(n.bind(n, 69898)),
        Promise.resolve().then(n.bind(n, 56123));
    },
    7642: function (e, t, n) {
      "use strict";
      n.d(t, {
        q: function () {
          return o;
        },
      });
      var s = n(57437),
        a = n(36760),
        l = n.n(a),
        i = n(27648);
      function r(e) {
        let { title: t, children: n } = e;
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)("div", {
              className:
                "text-sm leading-[163.265%] tracking-[0.28px] text-neutral-60 capitalize flex justify-between",
              children: t,
            }),
            (0, s.jsx)("div", {
              style: { fontSize: "16px" },
              className:
                "text-sLarge text-neutral-70 flex justify-between w-full",
              children: n,
            }),
          ],
        });
      }
      let o = (0, n(2265).memo)((e) => {
        let { className: t, href: n, onCLick: a, ...o } = e,
          c = l()(
            t,
            `
      flex-1 border-b p-6 flex flex-col justify-between gap-1 border-neutral-30
      xl:border-b-0 xl:border-r 
      last:border-r-0 
    `
          );
        return n
          ? (0, s.jsx)(i.default, {
              onClick: a,
              href: n,
              className: c,
              children: (0, s.jsx)(r, { ...o }),
            })
          : (0, s.jsx)("div", {
              className: c,
              onClick: a,
              children: (0, s.jsx)(r, { ...o }),
            });
      });
      o.displayName = "Bage";
    },
    35825: function (e, t, n) {
      "use strict";
      n.d(t, {
        default: function () {
          return p;
        },
      });
      var s = n(57437),
        a = n(99376),
        l = n(91960),
        i = n(2265),
        r = n(29194),
        o = n(7642),
        c = n(34085),
        d = n(46475);
      let m = (0, i.memo)((e) => {
        let { sticks: t = 18, currentSticks: n = 7 } = e;
        return (0, s.jsx)("div", {
          className: "flex pb-1 items-center gap-1",
          children: Array.from({ length: t }).map((e, t) =>
            (0, s.jsx)(
              "div",
              {
                style: { background: t < n ? "#B7B7B7" : "#494949" },
                className:
                  "w-0.5 min-w-0.5 max-w-0.5 h-[1.125rem] rounded-[.05rem]",
              },
              t
            )
          ),
        });
      });
      m.displayName = "StickProgress";
      var u = n(36760),
        x = n.n(u),
        f = n(3562),
        h = n(26185);
      let g = () => {
        let e = (0, l.TL)(),
          {
            store: {
              bageData: {
                activeAgents: t,
                allAgents: n,
                totalMessages: a,
                inflightMessages: u,
                totalDelegation: g,
                connectedChains: p,
              },
              chainsFrom: _,
            },
            actions: {
              Message: { setGlobalFilter: v },
            },
          } = (0, l.oR)((e) => {
            let { MessageEntity: t } = e;
            return t;
          }),
          j = (0, r.q_)({
            from: {
              activeAgents: 0,
              allAgents: 0,
              totalMessages: 0,
              totalMessageValue: 0,
              inflightMessages: 0,
              totalDelegation: 0,
              connectedChains: 0,
            },
            config: { duration: 500 },
          });
        return (
          (0, i.useEffect)(() => {
            j.activeAgents.start(t),
              j.allAgents.start(n),
              j.totalMessages.start(a.getShortedValue()),
              j.totalMessageValue.start(82567425),
              j.inflightMessages.start(u.getShortedValue()),
              j.totalDelegation.start(g.getShortedValue()),
              j.connectedChains.start(p);
          }, [t, n, a, u, g, p, j]),
          (0, s.jsxs)("div", {
            className:
              "  flex flex-col border border-neutral-30 rounded-[1.125rem] overflow-hidden xl:flex-row ",
            children: [
              (0, s.jsx)(o.q, {
                href: "/msg/agents",
                className: "grow-[2]",
                title: (0, s.jsx)("div", { children: "Active Agents" }),
                children: (0, s.jsxs)("div", {
                  className: "flex w-full justify-between",
                  children: [
                    (0, s.jsxs)("div", {
                      className: "text-neutral-70 text-2xl",
                      children: [
                        (0, s.jsx)(r.q.span, {
                          className: "text-white",
                          children: j.activeAgents.to((e) => e.toFixed()),
                        }),
                        "/",
                        (0, s.jsx)(r.q.span, {
                          children: j.allAgents.to((e) => e.toFixed()),
                        }),
                      ],
                    }),
                    (0, s.jsx)(m, { currentSticks: (t / n) * 18 }),
                  ],
                }),
              }),
              (0, s.jsx)(o.q, {
                href: "/msg",
                onCLick: () => {
                  e(v({ Status: [!1] }));
                },
                className: "grow-[2] cursor-pointer",
                title: (0, s.jsx)("div", { children: "Processing Messages" }),
                children: (0, s.jsx)(r.q.span, {
                  className: "text-white text-2xl",
                  children: j.inflightMessages.to((e) => d.es.format(e)),
                }),
              }),
              (0, s.jsx)(o.q, {
                className: "grow-[2]",
                title: (0, s.jsx)("div", { children: "Total messages" }),
                children: (0, s.jsx)(r.q.span, {
                  className: "text-white text-2xl",
                  children: j.totalMessages.to((e) => d.es.format(e, !0)),
                }),
              }),
              (0, s.jsx)(o.q, {
                className: "grow-[2] max-w-[21.75rem]",
                title: (0, s.jsxs)("div", {
                  children: [
                    "Connected chains",
                    " ",
                    (0, s.jsxs)("span", {
                      className: "text-white",
                      children: [
                        "(",
                        (0, s.jsx)(
                          r.q.span,
                          {
                            children: j.connectedChains.to((e) => e.toFixed()),
                          },
                          1
                        ),
                        ")",
                      ],
                    }),
                  ],
                }),
                children: (0, s.jsx)("div", {
                  className:
                    "flex py-0.5 overflow-x-auto scrollbar-hide w-full",
                  children: _.map((e, t) =>
                    c.f[e]
                      ? (0, s.jsxs)(
                          "div",
                          {
                            style: {
                              zIndex: t,
                              transform: `translateX(-${4 * t}px)`,
                            },
                            className:
                              "flex group items-center hover:gap-2 transition-all",
                            children: [
                              (0, s.jsxs)("div", {
                                className: x()(
                                  "relative min-w-[28px] min-h-[28px] rounded-full"
                                ),
                                children: [
                                  (0, s.jsx)(h.f, {
                                    type: "color",
                                    src: (0, f.BP)(e, "color"),
                                    className:
                                      "transition-all group-hover:z-[var(--z-index-first-layer)]",
                                    fill: !0,
                                    quality: 100,
                                    alt: `${e} Icon`,
                                  }),
                                  (0, s.jsx)(h.f, {
                                    type: "grey",
                                    className:
                                      "transition-all group-hover:z-[var(--z-index-background)]",
                                    src: (0, f.BP)(e, "grey"),
                                    fill: !0,
                                    quality: 100,
                                    alt: `${e} Icon`,
                                  }),
                                ],
                              }),
                              (0, s.jsx)("p", {
                                className:
                                  " text-white text-sm capitalize font-medium w-0 scale-x-0 overflow-hidden transition-transform origin-left group-hover:w-auto group-hover:pr-3 group-hover:scale-x-100  ",
                                children: c.f[e],
                              }),
                            ],
                          },
                          e + t
                        )
                      : null
                  ),
                }),
              }),
            ],
          })
        );
      };
      function p() {
        return (0, a.useParams)().address ? null : (0, s.jsx)(g, {});
      }
    },
    25864: function (e, t, n) {
      "use strict";
      n.d(t, {
        T: function () {
          return a;
        },
      });
      var s = n(57437);
      let a = (0, n(2265).memo)((e) => {
        let { type: t, ...n } = e;
        return "thin" === t
          ? (0, s.jsx)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 20 20",
              children: (0, s.jsx)("path", {
                stroke: "currentColor",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M15 5 5 15M5 5l10 10",
              }),
            })
          : "new" === t
          ? (0, s.jsx)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              width: "15",
              height: "15",
              fill: "none",
              viewBox: "0 0 15 15",
              children: (0, s.jsx)("path", {
                fill: "currentColor",
                fillRule: "evenodd",
                d: "M.945.16a.556.556 0 0 0-.78.792l6.601 6.497-6.603 6.603a.556.556 0 0 0 .785.786l6.61-6.61 6.497 6.397a.556.556 0 0 0 .78-.792l-6.491-6.39L14.838.948a.556.556 0 0 0-.786-.785l-6.5 6.5L.945.16Z",
                clipRule: "evenodd",
              }),
            })
          : (0, s.jsxs)("svg", {
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ...n,
              children: [
                (0, s.jsx)("path", {
                  d: "M18 6L6 18",
                  stroke: "currentColor",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, s.jsx)("path", {
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
    26185: function (e, t, n) {
      "use strict";
      n.d(t, {
        f: function () {
          return r;
        },
      });
      var s = n(57437),
        a = n(2265),
        l = n(33145),
        i = n(3562);
      let r = (0, a.memo)((e) => {
        let { type: t = "rsz", src: n, alt: r, ...o } = e,
          [c, d] = (0, a.useState)(!1),
          m = (0, a.useMemo)(
            () =>
              "rsz" === t ? (0, i.Sv)(1234567890) : (0, i.BP)(1234567890, t),
            [t]
          );
        return (0, s.jsx)(l.default, {
          ...o,
          alt: r,
          src: c ? m : n,
          onError: () => d(!0),
        });
      });
      r.displayName = "ChainIcon";
    },
    9433: function (e, t, n) {
      "use strict";
      n.d(t, {
        GeneralInfo: function () {
          return g;
        },
      });
      var s = n(57437),
        a = n(28664),
        l = n.n(a),
        i = n(2265),
        r = n(36760),
        o = n.n(r),
        c = n(33145),
        d = n(29194),
        m = n(91960),
        u = n(3562),
        x = n(29557),
        f = n(34085);
      let h = (e, t) => {
          let n = e.toString();
          return n.includes(".") && n.length - n.indexOf(".") > t + 1
            ? parseFloat(n.slice(0, n.indexOf(".") + t + 1))
            : e;
        },
        g = i.memo((e) => {
          let { infoBlocks: t, className: n } = e,
            a = (0, m.TL)(),
            {
              store: {
                TokenomicsEntity: { bondedTokens: r, inflation: g },
                CoinEntity: {
                  coins: {
                    entangle: { marketCap: p, totalSupply: _ },
                  },
                },
              },
              asyncActions: {
                Tokenomics: { getBondedTokens: v },
                Coin: { getMarketCap: j, getSupply: N },
              },
            } = (0, m.oR)((e) => ({
              TokenomicsEntity: e.TokenomicsEntity,
              CoinEntity: e.CoinEntity,
            }));
          (0, i.useEffect)(() => {
            a(v()), a(N("entangle")), a(j("entangle"));
          }, []);
          let w = (0, d.q_)({
              from: {
                marketCap: 0,
                inflation: 0,
                APR: 0,
                supply: 0,
                totalStaked: 0,
              },
              config: { duration: 500 },
            }),
            k = (_ * g) / Number(r);
          (0, i.useEffect)(() => {
            w.marketCap.start(p),
              w.inflation.start(h(g, 2)),
              w.APR.start(h(k, 2)),
              w.supply.start(h(_, 2)),
              w.totalStaked.start(h(Number(r), 2));
          }, [
            w.marketCap,
            w.inflation,
            w.APR,
            w.supply,
            w.totalStaked,
            p,
            g,
            k,
            _,
            r,
          ]);
          let b = h(g, 2),
            y = h(k, 2),
            C = h(_, 2),
            M = h(Number(r), 2),
            B = (0, i.useMemo)(() => {
              let e = (0, s.jsxs)("div", {
                className: l().supply,
                children: [
                  (0, s.jsx)(c.default, {
                    className: "w-6 h-6",
                    src: (0, u.Sv)(x.ZP.chainId.toString()),
                    width: 24,
                    height: 24,
                    alt: `${f.f[x.ZP.chainId]} Icon`,
                  }),
                  (0, s.jsxs)("span", {
                    children: [
                      (0, s.jsx)(d.q.span, {
                        children: w.supply.to((e) =>
                          e.toLocaleString("en", {
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
                  value: (0, s.jsxs)(s.Fragment, {
                    children: [
                      "$",
                      (0, s.jsx)(d.q.span, {
                        children: w.marketCap.to((e) =>
                          e.toLocaleString("en", { maximumFractionDigits: 0 })
                        ),
                      }),
                    ],
                  }),
                },
                {
                  title: "Inflation",
                  value: (0, s.jsxs)(s.Fragment, {
                    children: [
                      (0, s.jsx)(d.q.span, {
                        children: w.inflation.to((e) =>
                          e.toLocaleString("en", {
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
                  value: (0, s.jsxs)(s.Fragment, {
                    children: [
                      (0, s.jsx)(d.q.span, {
                        children: w.APR.to((e) =>
                          e.toLocaleString("en", {
                            minimumFractionDigits: 0,
                            maximumFractionDigits: 2,
                          })
                        ),
                      }),
                      "%",
                    ],
                  }),
                },
                { title: "Supply (NGL)", value: e },
                {
                  title: "Total Stake",
                  value: (0, s.jsx)(d.q.span, {
                    children: w.totalStaked.to((e) =>
                      e.toLocaleString("en", {
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 2,
                      })
                    ),
                  }),
                },
              ];
            }, [y, b, C, M, p]);
          return (0, s.jsx)("div", {
            className: o()(l().generalInfo, n),
            children: (t || B).map((e, t) => {
              let { title: n, value: a } = e;
              return (0, s.jsxs)(
                "div",
                {
                  className: l().infoBlock,
                  children: [
                    (0, s.jsx)("span", {
                      className: l().infoBlockTitle,
                      children: n,
                    }),
                    (0, s.jsx)("span", {
                      className: l().infoBlockValue,
                      children: a,
                    }),
                  ],
                },
                t
              );
            }),
          });
        });
      g.displayName = "GeneralInfo";
    },
    93946: function (e, t, n) {
      "use strict";
      n.d(t, {
        ModalContainer: function () {
          return d;
        },
      });
      var s = n(57437),
        a = n(4618),
        l = n.n(a),
        i = n(2265),
        r = n(36760),
        o = n.n(r),
        c = n(25864);
      let d = (e) => {
        let {
          enable: t = !1,
          title: n,
          children: a,
          isCloseIcon: r,
          className: d,
          modalClassName: m,
          titleClassName: u,
          titleTextClassName: x,
          onClose: f,
          styleBasic: h,
          closeIconClassName: g,
          closeIconThin: p,
        } = e;
        return ((0, i.useEffect)(() => {
          if ("undefined" != typeof document && void 0 !== document.body && t)
            return (
              (document.body.className = l().bodyOverflowHidden),
              () => {
                document.body.className = "";
              }
            );
        }, []),
        t)
          ? (0, s.jsx)("div", {
              className: o()(l().modalContainer, d, {
                [l().modalContainerBasic]: h,
              }),
              onClick: f,
              children: (0, s.jsxs)("div", {
                className: o()(l().modal, m, { [l().modalBasic]: h }),
                onClick: (e) => {
                  e.stopPropagation();
                },
                children: [
                  n &&
                    (0, s.jsxs)("div", {
                      className: o()(l().modalHeader, u),
                      children: [
                        (0, s.jsx)("div", {
                          className: o()(l().title, x, { [l().titleBasic]: h }),
                          children: n,
                        }),
                        r &&
                          (0, s.jsx)("button", {
                            className: o()(
                              l().closeIcon,
                              { [l().closeIconBasic]: h },
                              g
                            ),
                            onClick: f,
                            children: (0, s.jsx)(c.T, {
                              type: p ? "thin" : h ? "new" : "base",
                            }),
                          }),
                      ],
                    }),
                  h && (0, s.jsx)("div", { className: l().divider }),
                  a,
                ],
              }),
            })
          : null;
      };
    },
    61411: function (e, t, n) {
      "use strict";
      n.d(t, {
        PathTabs: function () {
          return u;
        },
      });
      var s = n(57437),
        a = n(36760),
        l = n.n(a),
        i = n(48303),
        r = n.n(i),
        o = n(99376),
        c = n(2265),
        d = n(27648);
      let m = (e, t) => e.find((e) => e.path === t) || e[0],
        u = (e) => {
          let { tabs: t } = e,
            n = (0, o.usePathname)(),
            [a, i] = (0, c.useState)(m(t, n)),
            u = (e) => i(e);
          return (0, s.jsx)("ul", {
            className: r().tabs,
            children: t.map((e) => {
              let { path: t, name: n } = e;
              return (0, s.jsx)(
                "li",
                {
                  children: (0, s.jsx)(d.default, {
                    className: l()(r().tabs__item, {
                      [r().tabs__item_active]: a?.path === t,
                    }),
                    href: t,
                    onClick: () => u(e),
                    children: n,
                  }),
                },
                t
              );
            }),
          });
        };
    },
    28664: function (e) {
      e.exports = {
        generalInfo: "GeneralInfo_generalInfo__cNImG",
        infoBlock: "GeneralInfo_infoBlock__53xxE",
        infoBlockTitle: "GeneralInfo_infoBlockTitle__OMVOR",
        infoBlockValue: "GeneralInfo_infoBlockValue__Kj2Yz",
        supply: "GeneralInfo_supply__kQcFX",
      };
    },
    4618: function (e) {
      e.exports = {
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
    48303: function (e) {
      e.exports = {
        tabs: "PathTabs_tabs__hBnZI",
        tabs__item: "PathTabs_tabs__item__GDMmx",
        tabs__item_active: "PathTabs_tabs__item_active__VzAzM",
      };
    },
  },
  function (e) {
    e.O(
      0,
      [
        6560, 8497, 4350, 6918, 8218, 3814, 6990, 9228, 8933, 1293, 9543, 6276,
        483, 2971, 2117, 1744,
      ],
      function () {
        return e((e.s = 46722));
      }
    ),
      (_N_E = e.O());
  },
]);
