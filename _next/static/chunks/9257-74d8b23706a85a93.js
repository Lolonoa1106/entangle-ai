(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9257],
  {
    55358: function (t, e, n) {
      "use strict";
      n.d(e, {
        T: function () {
          return i;
        },
      });
      let i = function (t) {
        let e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 8,
          n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4;
        return t ? `${t.slice(0, e)}...${t.slice(-1 * n)}` : "";
      };
      n(94594);
    },
    57552: function (t, e, n) {
      "use strict";
      n.d(e, {
        Ro: function () {
          return u;
        },
        T6: function () {
          return o;
        },
        gE: function () {
          return l;
        },
        k8: function () {
          return d;
        },
        nE: function () {
          return a;
        },
      });
      var i = n(6874);
      let o = {
          97: "https://testnet.bscscan.com",
          43113: "https://testnet.snowtrace.io",
          11155111: "https://sepolia.etherscan.io",
          11155420: "https://sepolia-optimism.etherscan.io",
          80002: "https://www.oklink.com/amoy",
          33033: "https://explorer.entangle.fi",
          1: "https://etherscan.io",
          56: "https://bscscan.com",
          43114: "https://subnets.avax.network/c-chain",
          250: "https://ftmscan.com",
          10: "https://optimistic.etherscan.io",
          42161: "https://arbiscan.io",
          137: "https://polygonscan.com",
          5e3: "https://explorer.mantle.xyz",
          59140: "https://lineascan.build",
          195: "https://www.oklink.com/xlayer",
          41: "https://explorer.telos.net",
          59901: "https://explorer.metis.io",
          8453: "https://basescan.org",
          "noble-1": "https://www.mintscan.io/noble",
          111e17: "https://explorer.solana.com",
          900: "https://explorer.solana.com",
          1116: "https://scan.coredao.org",
          196: "https://www.okx.com/ru/web3/explorer/xlayer",
          728126428: "https://tronscan.org",
          "100004503599627370496": "https://tonscan.org",
        },
        a = {
          97: "https://bscscan.com/gastracker",
          43113: "https://snowtrace.io/gastracker",
          11155111: "https://etherscan.io/gastracker",
          11155420: "https://etherscan.io/gastracker",
          80002: "https://www.oklink.com/amoy",
          33033: "https://explorer.entangle.fi",
          1: "https://etherscan.io/gastracker",
          56: "https://bscscan.com/gastracker",
          43114: "https://snowtrace.io/gastracker",
          250: "https://ftmscan.com/gastracker",
          10: "https://tokentool.bitbond.com/gas-price/optimism",
          42161: "https://tokentool.bitbond.com/gas-price/arbitrum",
          137: "https://polygonscan.com/gastracker",
          5e3: "https://explorer.mantle.xyz/stats",
          195: "https://www.oklink.com/xlayer/gas-price",
          41: "https://explorer.telos.net",
          59901: "https://explorer.metis.io/gastracker",
          8453: "https://tokentool.bitbond.com/gas-price/base",
          111e17: "https://explorer.solana.com",
          900: "https://explorer.solana.com",
          1116: "https://scan.coredao.org",
          196: "https://www.oklink.com/xlayer/gas-price",
        },
        s = (t) =>
          ({
            33033: "transactions",
            41: "transaction",
            728126428: "#/transaction",
          }[t] || "tx"),
        r = (t) =>
          ({ 33033: "address", 41: "account", 728126428: "#/address" }[t] ||
          "address"),
        c = (t) =>
          ({
            33033: "blocks",
            41: "block",
            59901: "batch",
            728126428: "#/block",
          }[t] || "block"),
        l = (t, e, n) => {
          let a;
          (a = t), (0, i.O)(t) && (a = t.slice(2)), (a = a.toUpperCase());
          let l = { tx: s(e), address: r(e), block: c(e) };
          return `${o[e]}/${l[n]}/${t}`;
        },
        d = (t, e, n) => {
          void 0 !== n
            ? window.open(l(t, Number(n), e), "_blank")
            : window.open(`#`, "_blank");
        },
        u = (t) => {
          window.open(`https://tonscan.org/tx/${t}`, "_blank");
        };
    },
    6874: function (t, e, n) {
      "use strict";
      n.d(e, {
        O: function () {
          return i;
        },
      });
      let i = (t) => t.startsWith("0x") || t.startsWith("0X");
    },
    24461: function (t, e, n) {
      "use strict";
      n.d(e, {
        JB: function () {
          return w;
        },
        Xq: function () {
          return j;
        },
        dc: function () {
          return C;
        },
      });
      var i = n(57437),
        o = n(96039),
        a = n.n(o),
        s = n(2265);
      let r = () => `${Date.now()}-${Math.random().toString(36).slice(2, 11)}`;
      var c = n(36760),
        l = n.n(c),
        d = n(38273),
        u = n.n(d),
        h = n(27648),
        p = n(33145),
        m = n(29557),
        _ = n(55358),
        f = n(57552),
        g = n(16629),
        x = n(29853),
        k = { src: "/_next/static/media/external_link_error.ed23df95.svg" };
      let v = Object.values(m.m5),
        N = (0, s.memo)((t) => {
          let {
            id: e,
            type: n,
            link: o,
            title: a,
            message: s,
            transactions: r,
            onRemove: c,
          } = t;
          return (0, i.jsxs)("div", {
            className: l()(u().notification, u()[`notification_${n}`]),
            children: [
              (0, i.jsxs)("div", {
                className: u().header,
                children: [
                  (0, i.jsx)(p.default, {
                    width: 16,
                    height: 16,
                    src: "/_next/static/media/info-icon.63a8c7d3.svg",
                    alt: "Info Icon",
                  }),
                  (0, i.jsx)("h4", { className: u().title, children: a }),
                  (0, i.jsx)("button", {
                    className: u().closeButton,
                    onClick: () => c(e),
                    children: (0, i.jsx)(p.default, {
                      width: 16,
                      height: 16,
                      src: g.Z.src,
                      alt: "Close Icon",
                    }),
                  }),
                ],
              }),
              (0, i.jsxs)("div", {
                className: u().body,
                children: [
                  (0, i.jsx)("p", { className: u().message, children: s }),
                  r &&
                    r.length > 0 &&
                    (0, i.jsx)("div", {
                      className: u().transactionsList,
                      children: r.map((t, e) => {
                        let { chainId: n, status: o, txHash: a } = t,
                          s = v.find((t) => t.chainId === n),
                          r = `${f.T6[n]}/tx/${a}`;
                        return s
                          ? (0, i.jsxs)(
                              "div",
                              {
                                className: u().transactionItem,
                                children: [
                                  (0, i.jsxs)("div", {
                                    className: u().transactionChain,
                                    children: [
                                      (0, i.jsx)(p.default, {
                                        src: s.icon.src,
                                        width: 16,
                                        height: 16,
                                        alt: s.name,
                                      }),
                                      (0, i.jsx)("p", {
                                        children: s.nativeCurrency,
                                      }),
                                    ],
                                  }),
                                  (0, i.jsxs)("div", {
                                    className: l()(
                                      u().transactionHash,
                                      u()[`transactionHash_${o}`]
                                    ),
                                    children: [
                                      (0, i.jsx)("p", { children: "Tx Hash" }),
                                      (0, i.jsxs)("a", {
                                        href: r,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        children: [
                                          (0, i.jsx)("p", {
                                            children: (0, _.T)(a),
                                          }),
                                          (0, i.jsx)(p.default, {
                                            width: 16,
                                            height: 16,
                                            src:
                                              "success" === o ? x.Z.src : k.src,
                                            alt: "Link Icon",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              },
                              e
                            )
                          : null;
                      }),
                    }),
                  o &&
                    (0, i.jsx)(h.default, {
                      href: o,
                      target: "_blank",
                      className: u().link,
                      children: (0, i.jsx)(p.default, {
                        width: 20,
                        height: 20,
                        src: "error" === n ? k.src : x.Z.src,
                        alt: "External Link",
                      }),
                    }),
                ],
              }),
            ],
          });
        });
      N.displayName = "Notification";
      let b = (0, s.createContext)({
          addNotification: (t, e) => "",
          updateNotification: (t, e) => {},
        }),
        w = (0, s.memo)((t) => {
          let { children: e } = t,
            [n, o] = (0, s.useState)([]),
            c = (0, s.useCallback)((t) => {
              o((e) => e.filter((e) => e.id !== t));
            }, []),
            l = (0, s.useCallback)(
              (t, e) => {
                let n = r(),
                  i = { ...t, id: n };
                return (
                  o((t) => [...t, i]),
                  (e || "error" === t.type) &&
                    setTimeout(() => {
                      c(n);
                    }, e ?? 1e4),
                  n
                );
              },
              [c]
            ),
            d = (0, s.useCallback)(
              (t, e) => {
                o((n) =>
                  n.find((e) => e.id === t)
                    ? n.map((n) => (n.id === t ? { ...n, ...e } : n))
                    : [...n, { id: t, ...e }]
                ),
                  setTimeout(() => {
                    c(t);
                  }, 1e4);
              },
              [c]
            );
          return (0, i.jsxs)(b.Provider, {
            value: { addNotification: l, updateNotification: d },
            children: [
              e,
              (0, i.jsx)("div", {
                className: a().notifications,
                children: n.map((t, e) =>
                  (0, i.jsx)(N, { ...t, onRemove: c }, e)
                ),
              }),
            ],
          });
        }),
        j = () => (0, s.useContext)(b).addNotification,
        C = () => (0, s.useContext)(b).updateNotification;
      w.displayName = "NotificationProvider";
    },
    25864: function (t, e, n) {
      "use strict";
      n.d(e, {
        T: function () {
          return o;
        },
      });
      var i = n(57437);
      let o = (0, n(2265).memo)((t) => {
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
      o.displayName = "CloseIcon";
    },
    9433: function (t, e, n) {
      "use strict";
      n.d(e, {
        GeneralInfo: function () {
          return f;
        },
      });
      var i = n(57437),
        o = n(28664),
        a = n.n(o),
        s = n(2265),
        r = n(36760),
        c = n.n(r),
        l = n(33145),
        d = n(29194),
        u = n(91960),
        h = n(3562),
        p = n(29557),
        m = n(34085);
      let _ = (t, e) => {
          let n = t.toString();
          return n.includes(".") && n.length - n.indexOf(".") > e + 1
            ? parseFloat(n.slice(0, n.indexOf(".") + e + 1))
            : t;
        },
        f = s.memo((t) => {
          let { infoBlocks: e, className: n } = t,
            o = (0, u.TL)(),
            {
              store: {
                TokenomicsEntity: { bondedTokens: r, inflation: f },
                CoinEntity: {
                  coins: {
                    entangle: { marketCap: g, totalSupply: x },
                  },
                },
              },
              asyncActions: {
                Tokenomics: { getBondedTokens: k },
                Coin: { getMarketCap: v, getSupply: N },
              },
            } = (0, u.oR)((t) => ({
              TokenomicsEntity: t.TokenomicsEntity,
              CoinEntity: t.CoinEntity,
            }));
          (0, s.useEffect)(() => {
            o(k()), o(N("entangle")), o(v("entangle"));
          }, []);
          let b = (0, d.q_)({
              from: {
                marketCap: 0,
                inflation: 0,
                APR: 0,
                supply: 0,
                totalStaked: 0,
              },
              config: { duration: 500 },
            }),
            w = (x * f) / Number(r);
          (0, s.useEffect)(() => {
            b.marketCap.start(g),
              b.inflation.start(_(f, 2)),
              b.APR.start(_(w, 2)),
              b.supply.start(_(x, 2)),
              b.totalStaked.start(_(Number(r), 2));
          }, [
            b.marketCap,
            b.inflation,
            b.APR,
            b.supply,
            b.totalStaked,
            g,
            f,
            w,
            x,
            r,
          ]);
          let j = _(f, 2),
            C = _(w, 2),
            y = _(x, 2),
            I = _(Number(r), 2),
            E = (0, s.useMemo)(() => {
              let t = (0, i.jsxs)("div", {
                className: a().supply,
                children: [
                  (0, i.jsx)(l.default, {
                    className: "w-6 h-6",
                    src: (0, h.Sv)(p.ZP.chainId.toString()),
                    width: 24,
                    height: 24,
                    alt: `${m.f[p.ZP.chainId]} Icon`,
                  }),
                  (0, i.jsxs)("span", {
                    children: [
                      (0, i.jsx)(d.q.span, {
                        children: b.supply.to((t) =>
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
                        children: b.marketCap.to((t) =>
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
                        children: b.inflation.to((t) =>
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
                        children: b.APR.to((t) =>
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
                    children: b.totalStaked.to((t) =>
                      t.toLocaleString("en", {
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 2,
                      })
                    ),
                  }),
                },
              ];
            }, [C, j, y, I, g]);
          return (0, i.jsx)("div", {
            className: c()(a().generalInfo, n),
            children: (e || E).map((t, e) => {
              let { title: n, value: o } = t;
              return (0, i.jsxs)(
                "div",
                {
                  className: a().infoBlock,
                  children: [
                    (0, i.jsx)("span", {
                      className: a().infoBlockTitle,
                      children: n,
                    }),
                    (0, i.jsx)("span", {
                      className: a().infoBlockValue,
                      children: o,
                    }),
                  ],
                },
                e
              );
            }),
          });
        });
      f.displayName = "GeneralInfo";
    },
    93946: function (t, e, n) {
      "use strict";
      n.d(e, {
        ModalContainer: function () {
          return d;
        },
      });
      var i = n(57437),
        o = n(4618),
        a = n.n(o),
        s = n(2265),
        r = n(36760),
        c = n.n(r),
        l = n(25864);
      let d = (t) => {
        let {
          enable: e = !1,
          title: n,
          children: o,
          isCloseIcon: r,
          className: d,
          modalClassName: u,
          titleClassName: h,
          titleTextClassName: p,
          onClose: m,
          styleBasic: _,
          closeIconClassName: f,
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
          ? (0, i.jsx)("div", {
              className: c()(a().modalContainer, d, {
                [a().modalContainerBasic]: _,
              }),
              onClick: m,
              children: (0, i.jsxs)("div", {
                className: c()(a().modal, u, { [a().modalBasic]: _ }),
                onClick: (t) => {
                  t.stopPropagation();
                },
                children: [
                  n &&
                    (0, i.jsxs)("div", {
                      className: c()(a().modalHeader, h),
                      children: [
                        (0, i.jsx)("div", {
                          className: c()(a().title, p, { [a().titleBasic]: _ }),
                          children: n,
                        }),
                        r &&
                          (0, i.jsx)("button", {
                            className: c()(
                              a().closeIcon,
                              { [a().closeIconBasic]: _ },
                              f
                            ),
                            onClick: m,
                            children: (0, i.jsx)(l.T, {
                              type: g ? "thin" : _ ? "new" : "base",
                            }),
                          }),
                      ],
                    }),
                  _ && (0, i.jsx)("div", { className: a().divider }),
                  o,
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
          return h;
        },
      });
      var i = n(57437),
        o = n(36760),
        a = n.n(o),
        s = n(48303),
        r = n.n(s),
        c = n(99376),
        l = n(2265),
        d = n(27648);
      let u = (t, e) => t.find((t) => t.path === e) || t[0],
        h = (t) => {
          let { tabs: e } = t,
            n = (0, c.usePathname)(),
            [o, s] = (0, l.useState)(u(e, n)),
            h = (t) => s(t);
          return (0, i.jsx)("ul", {
            className: r().tabs,
            children: e.map((t) => {
              let { path: e, name: n } = t;
              return (0, i.jsx)(
                "li",
                {
                  children: (0, i.jsx)(d.default, {
                    className: a()(r().tabs__item, {
                      [r().tabs__item_active]: o?.path === e,
                    }),
                    href: e,
                    onClick: () => h(t),
                    children: n,
                  }),
                },
                e
              );
            }),
          });
        };
    },
    44406: function (t, e, n) {
      "use strict";
      n.d(e, {
        LJ: function () {
          return a;
        },
        N8: function () {
          return o;
        },
        VH: function () {
          return s;
        },
        YN: function () {
          return r;
        },
        lK: function () {
          return i;
        },
        uu: function () {
          return l;
        },
        wn: function () {
          return c;
        },
      });
      let i = "Invalid value",
        o = "Enter value",
        a = "Internal error, please try again later",
        s = "Not enough balance",
        r = "Not enough staked balance",
        c = {
          SUCCESS: { type: "success", title: "Success!" },
          ERROR: { type: "error", title: "Internal error" },
          TRANSACTION_ERROR: { type: "error", title: "Transaction failure" },
        },
        l = {
          DELEGATE: "Successfully delegated!",
          DELEGATE_APPROVE: "Delegate approve success!",
          REWARDS_CLAIMED: "Rewards claimed successfully",
          UNDELEGATE: "Successfully undelegated",
          UNDELEGATE_APPROVE: "Undelegate approve success!",
          TRY_AGAIN: "Please try again later",
          FAILED_REDELEGATE: "Failed to redelegate",
          COPIED_TO_CLIPBOARD: "Copied",
          RPC_UNAVAILABLE: "RPC unavailable, try again later",
        };
    },
    24919: function (t, e, n) {
      "use strict";
      n.d(e, {
        WR: function () {
          return i.GeneralInfo;
        },
        F0: function () {
          return o.ModalContainer;
        },
        jP: function () {
          return h.PathTabs;
        },
        oi: function () {
          return d;
        },
        iA: function () {
          return u.i;
        },
      });
      var i = n(9433),
        o = n(93946),
        a = n(57437),
        s = n(52541),
        r = n(2265),
        c = n(33145);
      let l = {
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
              style: o = { marginRight: "10px" },
              ...d
            } = t,
            u = (0, r.useMemo)(() => {
              let t = e?.toLowerCase();
              return t in l
                ? l[t]
                : "data:image/svg+xml;utf8," + encodeURIComponent((0, s.Y)(e));
            }, [e]);
          return (0, a.jsx)(c.default, {
            width: i,
            height: n,
            src: u,
            alt: e,
            style: o,
            quality: 100,
            ...d,
          });
        };
      var u = n(23757),
        h = n(61411);
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
    38273: function (t) {
      t.exports = {
        notification: "Notification_notification__4dhR9",
        header: "Notification_header__9P9RO",
        notification_success: "Notification_notification_success__G5g_V",
        link: "Notification_link__BwVI4",
        notification_error: "Notification_notification_error__DCJSH",
        notification_info: "Notification_notification_info__YBzn_",
        title: "Notification_title__Nti1t",
        closeButton: "Notification_closeButton__wrzWT",
        body: "Notification_body__lvjdL",
        message: "Notification_message__iprhn",
        transactionsList: "Notification_transactionsList__0J7tn",
        transactionItem: "Notification_transactionItem__1IHKQ",
        transactionChain: "Notification_transactionChain__NNocZ",
        transactionHash: "Notification_transactionHash__SSk_d",
        transactionHash_success: "Notification_transactionHash_success__L83Yp",
        transactionHash_reverted:
          "Notification_transactionHash_reverted__bG45L",
      };
    },
    96039: function (t) {
      t.exports = { notifications: "NotificationContext_notifications__9z1LT" };
    },
    16629: function (t, e) {
      "use strict";
      e.Z = {
        src: "/_next/static/media/close-icon.e4add96b.svg",
        height: 16,
        width: 16,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
    29853: function (t, e) {
      "use strict";
      e.Z = {
        src: "/_next/static/media/external_link.e73dc7ab.svg",
        height: 12,
        width: 12,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
  },
]);
