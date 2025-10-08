(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [546, 9257],
  {
    55358: function (t, e, n) {
      "use strict";
      n.d(e, {
        T: function () {
          return o;
        },
      });
      let o = function (t) {
        let e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 8,
          n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4;
        return t ? `${t.slice(0, e)}...${t.slice(-1 * n)}` : "";
      };
      n(94594);
    },
    38536: function (t, e, n) {
      "use strict";
      n.d(e, {
        Z: function () {
          return i;
        },
      });
      var o = n(2265),
        a = n(29557);
      let s = [33033],
        i = (t) => {
          let e = (0, o.useMemo)(
              () =>
                Object.values(a.m5)
                  .filter((t) => {
                    let { nonEvm: e, chainId: n, comingSoon: o } = t;
                    return (
                      (!e && !s?.includes?.(n)) || (e && o && !s?.includes?.(n))
                    );
                  })
                  .sort((t, e) =>
                    t.comingSoon && !e.comingSoon
                      ? 1
                      : !t.comingSoon && e.comingSoon
                      ? -1
                      : 0
                  ),
              []
            ),
            n = (0, o.useMemo)(
              () =>
                Object.values(a.m5).filter((t) => {
                  let { nonEvm: e, chainId: n } = t;
                  return !e && !s?.includes?.(n);
                }),
              []
            ),
            i = (0, o.useMemo)(
              () =>
                Object.values(a.m5).filter((t) => {
                  let { nonEvm: e, chainId: n } = t;
                  return (!e && !s?.includes?.(n)) || 900 === n;
                }),
              []
            );
          return (0, o.useMemo)(() => {
            switch (t) {
              case "simple":
                return n;
              case "simpleWithSol":
                return i;
              default:
                return e;
            }
          }, [e, t, n, i]);
        };
    },
    13904: function (t, e, n) {
      "use strict";
      n.d(e, {
        Y: function () {
          return I;
        },
      });
      var o = n(57437),
        a = n(2265),
        s = n(58362),
        i = n.n(s),
        l = n(24919),
        r = n(36760),
        c = n.n(r),
        d = n(59733);
      let u = (0, a.memo)((t) => {
        let { className: e, ...n } = t;
        return (0, o.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 14 14",
          ...n,
          children: (0, o.jsx)("path", {
            fill: "currentColor",
            d: "M1.75 6.417h1.167v1.166H1.75V6.417Zm4.667-3.5h1.166V5.25H6.417V2.917Zm-1.167 3.5h2.333V8.75H6.417V7.583H5.25V6.417Zm3.5 0h1.167v1.166h1.166V6.417h1.167v1.166h-1.167V8.75h1.167v2.333h-1.167v1.167H9.917v-1.167H7.583v1.167H6.417V9.917H8.75V8.75h1.167V7.583H8.75V6.417Zm2.333 4.666V8.75H9.917v2.333h1.166ZM8.75 1.75h3.5v3.5h-3.5v-3.5Zm1.167 1.167v1.166h1.166V2.917H9.917ZM1.75 1.75h3.5v3.5h-3.5v-3.5Zm1.167 1.167v1.166h1.166V2.917H2.917ZM1.75 8.75h3.5v3.5h-3.5v-3.5Zm1.167 1.167v1.166h1.166V9.917H2.917Z",
          }),
        });
      });
      u.displayName = "QrCode";
      var _ = n(98786),
        m = n(38536),
        h = n(33730),
        p = n(92906),
        f = n(68575),
        x = n(73473),
        g = n(57617),
        b = n.n(g);
      let v = (0, a.memo)((t) => {
        let {
            value: e,
            items: n,
            onChange: s,
            onValueChange: i,
            children: l,
            renderValue: r,
            disabled: c,
            ...d
          } = t,
          u = (0, a.useCallback)(
            (t) => {
              console.log(t.target, "e.target"), i(t.target.value);
            },
            [i]
          );
        return (0, o.jsx)("div", {
          className: b().root,
          children: (0, o.jsx)(x.g, {
            selectedKeys: [String(e)],
            className: b().root,
            radius: "sm",
            onChange: u,
            color: "secondary",
            isDisabled: c,
            classNames: {
              popoverContent: b().popover,
              trigger: b().trigger,
              value: b().value,
              selectorIcon: b().icon,
            },
            items: n,
            renderValue: r,
            value: e,
            ...d,
            children: l,
          }),
        });
      });
      v.displayName = "Select";
      var N = n(25448),
        j = n.n(N),
        w = n(33145);
      let k = (0, a.memo)((t) => {
        let { item: e, className: n } = t;
        return (0, o.jsxs)("button", {
          className: c()(j().item, n),
          disabled: e.comingSoon,
          children: [
            (0, o.jsx)(w.default, {
              src: e.icon,
              className: j().item__icon,
              alt: "Network icon",
              width: 23,
              height: 23,
            }),
            e.label,
          ],
        });
      });
      k.displayName = "SelectOption";
      var C = n(91724),
        y = n(71984);
      let S = (t) => (e) =>
        (0, o.jsx)(
          y.R,
          {
            textValue: e.label,
            isDisabled: e.comingSoon,
            children: (0, o.jsx)(k, { item: e, className: t }),
          },
          e.value
        );
      var T = n(81008),
        M = n(54484),
        E = n(39502);
      let I = (0, a.memo)((t) => {
        let {
            onClose: e,
            nativeBalance: n,
            deploymentFee: s,
            type: r = "expert",
            availableNetworks: x,
            activeNetwork: g,
          } = t,
          { address: b, chainId: N } = (0, h.Z)(),
          j = (0, m.Z)(r),
          w = (0, _.m)(),
          { isNotEnoughBalance: y } = (0, f.v9)((t) => t.EtsEntity),
          [I, L] = (0, a.useState)(!1),
          { switchChain: H } = (0, T.useSwitchChain)(),
          [R, B] = (0, a.useState)([]),
          U = (0, a.useMemo)(
            () =>
              "simpleWithSol" === r
                ? R.find((t) => t.data === g)
                : R.find((t) => t.data === N),
            [r, R, g, N]
          ),
          [P, V] = (0, a.useState)(U),
          A = (0, a.useCallback)(
            (t) => {
              let e = R.find((e) => e.value === String(t));
              V(e), H({ chainId: e.data });
            },
            [R, H]
          );
        return (
          (0, a.useEffect)(() => {
            if (!j.length) return;
            let t = j.map((t, e) => ({
              value: String(e + 1),
              label: t.name,
              icon: t.icon,
              data: t.chainId,
              comingSoon: "expert" === r && t.comingSoon,
            }));
            B(x?.length ? t.filter((t) => x.includes(`${t.data}`)) : t);
          }, [j, r, x]),
          (0, a.useEffect)(() => {
            R.length &&
              ("simpleWithSol" === r
                ? V(R.find((t) => t.data === g))
                : N && V(R.find((t) => t.data === N)));
          }, [N, R, r, g]),
          (0, o.jsx)(l.F0, {
            enable: !0,
            onClose: e,
            title: I ? "Scan QR Code" : "Top Up",
            isCloseIcon: !0,
            modalClassName: i().modal,
            titleClassName: i().modalTitle,
            children: (0, o.jsx)("div", {
              className: i().root,
              children: I
                ? (0, o.jsxs)(o.Fragment, {
                    children: [
                      (0, o.jsx)("div", {
                        className: i().qrCode,
                        children: (0, o.jsx)(C.ZP, {
                          style: {
                            height: "auto",
                            maxWidth: "100%",
                            width: "100%",
                          },
                          value: b || "",
                        }),
                      }),
                      (0, o.jsxs)("div", {
                        className: i().wallet,
                        children: [
                          (0, o.jsx)("span", {
                            className: i().wallet__label,
                            children: "Wallet Address",
                          }),
                          (0, o.jsx)("span", {
                            className: i().wallet__address,
                            children: b,
                          }),
                        ],
                      }),
                      (0, o.jsxs)("button", {
                        className: i().copy,
                        onClick: () => w(b || ""),
                        children: [
                          (0, o.jsx)(d.H, { width: 14, height: 14 }),
                          "Copy Address",
                        ],
                      }),
                    ],
                  })
                : (0, o.jsxs)(o.Fragment, {
                    children: [
                      (0, o.jsx)(v, {
                        items: R,
                        variant: "bordered",
                        className: i().network,
                        onValueChange: (t) => !!Number(t) && A(t),
                        value: [P?.value],
                        renderValue: () => (0, o.jsx)(k, { item: P }),
                        disabled: "simpleWithSol" === r,
                        children: S(),
                      }),
                      (0, o.jsxs)("div", {
                        className: i().info,
                        children: [
                          (0, o.jsx)("span", {
                            className: i().info__label,
                            children: "Required Amount",
                          }),
                          (0, o.jsx)("span", {
                            className: i().amount,
                            children: n
                              ? (0, o.jsxs)(o.Fragment, {
                                  children: [
                                    s,
                                    " ",
                                    (0, o.jsx)("span", {
                                      className: i().amount__symbol,
                                      children: n.symbol,
                                    }),
                                  ],
                                })
                              : "-",
                          }),
                          (0, o.jsxs)("span", {
                            className: c()(i().balance, {
                              [i().balance_notEnough]: y,
                              [i().balance_enough]: !y && n?.value,
                            }),
                            children: [
                              (0, o.jsx)("span", {
                                children: y
                                  ? "Not enough balance:"
                                  : "Your Balance:",
                              }),
                              " ",
                              (0, o.jsx)("span", {
                                className: i().balance__amount,
                                children: n
                                  ? `${(0, M.t)(
                                      Number(
                                        (0, E.b)(n?.value, n?.decimals ?? 18)
                                      ),
                                      5
                                    )} ${n.symbol}`
                                  : "-",
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, o.jsxs)("div", {
                        className: i().box,
                        children: [
                          (0, o.jsxs)("button", {
                            className: i().box__button,
                            onClick: () => w(b || ""),
                            children: [
                              (0, o.jsx)(d.H, { width: 14, height: 14 }),
                              (0, o.jsxs)("span", {
                                className: i().box__text,
                                children: [
                                  "Deposit",
                                  " ",
                                  (0, o.jsx)("span", {
                                    className: i().box__sub,
                                    children: `(${(0, p.F)(b, 4)})`,
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, o.jsxs)("button", {
                            className: i().box__button,
                            onClick: () => L(!0),
                            children: [
                              (0, o.jsx)(u, {}),
                              (0, o.jsx)("span", {
                                className: i().box__text,
                                children: "QR Code",
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, o.jsx)("button", {
                        className: i().confirm,
                        disabled: y,
                        onClick: e,
                        children: "Confirm",
                      }),
                    ],
                  }),
            }),
          })
        );
      });
      I.displayName = "TopUpModal";
    },
    57552: function (t, e, n) {
      "use strict";
      n.d(e, {
        Ro: function () {
          return u;
        },
        T6: function () {
          return a;
        },
        gE: function () {
          return c;
        },
        k8: function () {
          return d;
        },
        nE: function () {
          return s;
        },
      });
      var o = n(6874);
      let a = {
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
        s = {
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
        i = (t) =>
          ({
            33033: "transactions",
            41: "transaction",
            728126428: "#/transaction",
          }[t] || "tx"),
        l = (t) =>
          ({ 33033: "address", 41: "account", 728126428: "#/address" }[t] ||
          "address"),
        r = (t) =>
          ({
            33033: "blocks",
            41: "block",
            59901: "batch",
            728126428: "#/block",
          }[t] || "block"),
        c = (t, e, n) => {
          let s;
          (s = t), (0, o.O)(t) && (s = t.slice(2)), (s = s.toUpperCase());
          let c = { tx: i(e), address: l(e), block: r(e) };
          return `${a[e]}/${c[n]}/${t}`;
        },
        d = (t, e, n) => {
          void 0 !== n
            ? window.open(c(t, Number(n), e), "_blank")
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
          return o;
        },
      });
      let o = (t) => t.startsWith("0x") || t.startsWith("0X");
    },
    98786: function (t, e, n) {
      "use strict";
      n.d(e, {
        m: function () {
          return s;
        },
      });
      var o = n(24461),
        a = n(44406);
      let s = () => {
        let t = (0, o.Xq)();
        return async (e) => {
          try {
            await navigator.clipboard.writeText(e),
              t(
                {
                  title: a.wn.SUCCESS.title,
                  type: a.wn.SUCCESS.type,
                  message: a.uu.COPIED_TO_CLIPBOARD,
                },
                5e3
              );
          } catch (t) {
            console.error("Error:", t);
          }
        };
      };
    },
    37060: function (t, e, n) {
      "use strict";
      n.d(e, {
        R: function () {
          return l;
        },
      });
      var o = n(2265),
        a = n(47895),
        s = n(68575),
        i = n(91960);
      let l = (t, e) => {
        let n = (0, i.TL)(),
          {
            asyncActions: {
              Coin: { getPrice: l },
            },
          } = (0, i.oR)((t) => ({ CoinEntity: t.CoinEntity }));
        (0, o.useEffect)(() => {
          t && !e && n(l(a.wu[t]));
        }, [n, l, t, e]);
        let r = (0, s.v9)(
          (e) => e.CoinEntity.coins[a.wu[t || ""] || ""]?.price
        );
        return "usdc" === t ? 1 : r;
      };
    },
    24461: function (t, e, n) {
      "use strict";
      n.d(e, {
        JB: function () {
          return w;
        },
        Xq: function () {
          return k;
        },
        dc: function () {
          return C;
        },
      });
      var o = n(57437),
        a = n(96039),
        s = n.n(a),
        i = n(2265);
      let l = () => `${Date.now()}-${Math.random().toString(36).slice(2, 11)}`;
      var r = n(36760),
        c = n.n(r),
        d = n(38273),
        u = n.n(d),
        _ = n(27648),
        m = n(33145),
        h = n(29557),
        p = n(55358),
        f = n(57552),
        x = n(16629),
        g = n(29853),
        b = { src: "/_next/static/media/external_link_error.ed23df95.svg" };
      let v = Object.values(h.m5),
        N = (0, i.memo)((t) => {
          let {
            id: e,
            type: n,
            link: a,
            title: s,
            message: i,
            transactions: l,
            onRemove: r,
          } = t;
          return (0, o.jsxs)("div", {
            className: c()(u().notification, u()[`notification_${n}`]),
            children: [
              (0, o.jsxs)("div", {
                className: u().header,
                children: [
                  (0, o.jsx)(m.default, {
                    width: 16,
                    height: 16,
                    src: "/_next/static/media/info-icon.63a8c7d3.svg",
                    alt: "Info Icon",
                  }),
                  (0, o.jsx)("h4", { className: u().title, children: s }),
                  (0, o.jsx)("button", {
                    className: u().closeButton,
                    onClick: () => r(e),
                    children: (0, o.jsx)(m.default, {
                      width: 16,
                      height: 16,
                      src: x.Z.src,
                      alt: "Close Icon",
                    }),
                  }),
                ],
              }),
              (0, o.jsxs)("div", {
                className: u().body,
                children: [
                  (0, o.jsx)("p", { className: u().message, children: i }),
                  l &&
                    l.length > 0 &&
                    (0, o.jsx)("div", {
                      className: u().transactionsList,
                      children: l.map((t, e) => {
                        let { chainId: n, status: a, txHash: s } = t,
                          i = v.find((t) => t.chainId === n),
                          l = `${f.T6[n]}/tx/${s}`;
                        return i
                          ? (0, o.jsxs)(
                              "div",
                              {
                                className: u().transactionItem,
                                children: [
                                  (0, o.jsxs)("div", {
                                    className: u().transactionChain,
                                    children: [
                                      (0, o.jsx)(m.default, {
                                        src: i.icon.src,
                                        width: 16,
                                        height: 16,
                                        alt: i.name,
                                      }),
                                      (0, o.jsx)("p", {
                                        children: i.nativeCurrency,
                                      }),
                                    ],
                                  }),
                                  (0, o.jsxs)("div", {
                                    className: c()(
                                      u().transactionHash,
                                      u()[`transactionHash_${a}`]
                                    ),
                                    children: [
                                      (0, o.jsx)("p", { children: "Tx Hash" }),
                                      (0, o.jsxs)("a", {
                                        href: l,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        children: [
                                          (0, o.jsx)("p", {
                                            children: (0, p.T)(s),
                                          }),
                                          (0, o.jsx)(m.default, {
                                            width: 16,
                                            height: 16,
                                            src:
                                              "success" === a ? g.Z.src : b.src,
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
                  a &&
                    (0, o.jsx)(_.default, {
                      href: a,
                      target: "_blank",
                      className: u().link,
                      children: (0, o.jsx)(m.default, {
                        width: 20,
                        height: 20,
                        src: "error" === n ? b.src : g.Z.src,
                        alt: "External Link",
                      }),
                    }),
                ],
              }),
            ],
          });
        });
      N.displayName = "Notification";
      let j = (0, i.createContext)({
          addNotification: (t, e) => "",
          updateNotification: (t, e) => {},
        }),
        w = (0, i.memo)((t) => {
          let { children: e } = t,
            [n, a] = (0, i.useState)([]),
            r = (0, i.useCallback)((t) => {
              a((e) => e.filter((e) => e.id !== t));
            }, []),
            c = (0, i.useCallback)(
              (t, e) => {
                let n = l(),
                  o = { ...t, id: n };
                return (
                  a((t) => [...t, o]),
                  (e || "error" === t.type) &&
                    setTimeout(() => {
                      r(n);
                    }, e ?? 1e4),
                  n
                );
              },
              [r]
            ),
            d = (0, i.useCallback)(
              (t, e) => {
                a((n) =>
                  n.find((e) => e.id === t)
                    ? n.map((n) => (n.id === t ? { ...n, ...e } : n))
                    : [...n, { id: t, ...e }]
                ),
                  setTimeout(() => {
                    r(t);
                  }, 1e4);
              },
              [r]
            );
          return (0, o.jsxs)(j.Provider, {
            value: { addNotification: c, updateNotification: d },
            children: [
              e,
              (0, o.jsx)("div", {
                className: s().notifications,
                children: n.map((t, e) =>
                  (0, o.jsx)(N, { ...t, onRemove: r }, e)
                ),
              }),
            ],
          });
        }),
        k = () => (0, i.useContext)(j).addNotification,
        C = () => (0, i.useContext)(j).updateNotification;
      w.displayName = "NotificationProvider";
    },
    59733: function (t, e, n) {
      "use strict";
      n.d(e, {
        H: function () {
          return a;
        },
      });
      var o = n(57437);
      let a = (0, n(2265).memo)((t) => {
        let { width: e = 16, height: n = 16, className: a, ...s } = t;
        return (0, o.jsxs)("svg", {
          width: e,
          height: n,
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 16 16",
          className: a,
          ...s,
          children: [
            (0, o.jsx)("g", {
              clipPath: "url(#a)",
              children: (0, o.jsx)("path", {
                stroke: "currentColor",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M2.665 10.67c-.733 0-1.333-.6-1.333-1.334V2.669c0-.733.6-1.333 1.333-1.333h6.667c.733 0 1.333.6 1.333 1.333m-4 2.667h6.667c.736 0 1.333.597 1.333 1.333v6.667c0 .736-.597 1.333-1.333 1.333H6.665a1.333 1.333 0 0 1-1.333-1.333V6.669c0-.736.597-1.333 1.333-1.333Z",
              }),
            }),
            (0, o.jsx)("defs", {
              children: (0, o.jsx)("clipPath", {
                id: "a",
                children: (0, o.jsx)("path", {
                  fill: "#fff",
                  d: "M0 0h16v16H0z",
                }),
              }),
            }),
          ],
        });
      });
      a.displayName = "CopyNew";
    },
    25864: function (t, e, n) {
      "use strict";
      n.d(e, {
        T: function () {
          return a;
        },
      });
      var o = n(57437);
      let a = (0, n(2265).memo)((t) => {
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
      a.displayName = "CloseIcon";
    },
    26185: function (t, e, n) {
      "use strict";
      n.d(e, {
        f: function () {
          return l;
        },
      });
      var o = n(57437),
        a = n(2265),
        s = n(33145),
        i = n(3562);
      let l = (0, a.memo)((t) => {
        let { type: e = "rsz", src: n, alt: l, ...r } = t,
          [c, d] = (0, a.useState)(!1),
          u = (0, a.useMemo)(
            () =>
              "rsz" === e ? (0, i.Sv)(1234567890) : (0, i.BP)(1234567890, e),
            [e]
          );
        return (0, o.jsx)(s.default, {
          ...r,
          alt: l,
          src: c ? u : n,
          onError: () => d(!0),
        });
      });
      l.displayName = "ChainIcon";
    },
    9433: function (t, e, n) {
      "use strict";
      n.d(e, {
        GeneralInfo: function () {
          return f;
        },
      });
      var o = n(57437),
        a = n(28664),
        s = n.n(a),
        i = n(2265),
        l = n(36760),
        r = n.n(l),
        c = n(33145),
        d = n(29194),
        u = n(91960),
        _ = n(3562),
        m = n(29557),
        h = n(34085);
      let p = (t, e) => {
          let n = t.toString();
          return n.includes(".") && n.length - n.indexOf(".") > e + 1
            ? parseFloat(n.slice(0, n.indexOf(".") + e + 1))
            : t;
        },
        f = i.memo((t) => {
          let { infoBlocks: e, className: n } = t,
            a = (0, u.TL)(),
            {
              store: {
                TokenomicsEntity: { bondedTokens: l, inflation: f },
                CoinEntity: {
                  coins: {
                    entangle: { marketCap: x, totalSupply: g },
                  },
                },
              },
              asyncActions: {
                Tokenomics: { getBondedTokens: b },
                Coin: { getMarketCap: v, getSupply: N },
              },
            } = (0, u.oR)((t) => ({
              TokenomicsEntity: t.TokenomicsEntity,
              CoinEntity: t.CoinEntity,
            }));
          (0, i.useEffect)(() => {
            a(b()), a(N("entangle")), a(v("entangle"));
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
            w = (g * f) / Number(l);
          (0, i.useEffect)(() => {
            j.marketCap.start(x),
              j.inflation.start(p(f, 2)),
              j.APR.start(p(w, 2)),
              j.supply.start(p(g, 2)),
              j.totalStaked.start(p(Number(l), 2));
          }, [
            j.marketCap,
            j.inflation,
            j.APR,
            j.supply,
            j.totalStaked,
            x,
            f,
            w,
            g,
            l,
          ]);
          let k = p(f, 2),
            C = p(w, 2),
            y = p(g, 2),
            S = p(Number(l), 2),
            T = (0, i.useMemo)(() => {
              let t = (0, o.jsxs)("div", {
                className: s().supply,
                children: [
                  (0, o.jsx)(c.default, {
                    className: "w-6 h-6",
                    src: (0, _.Sv)(m.ZP.chainId.toString()),
                    width: 24,
                    height: 24,
                    alt: `${h.f[m.ZP.chainId]} Icon`,
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
            }, [C, k, y, S, x]);
          return (0, o.jsx)("div", {
            className: r()(s().generalInfo, n),
            children: (e || T).map((t, e) => {
              let { title: n, value: a } = t;
              return (0, o.jsxs)(
                "div",
                {
                  className: s().infoBlock,
                  children: [
                    (0, o.jsx)("span", {
                      className: s().infoBlockTitle,
                      children: n,
                    }),
                    (0, o.jsx)("span", {
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
      f.displayName = "GeneralInfo";
    },
    93946: function (t, e, n) {
      "use strict";
      n.d(e, {
        ModalContainer: function () {
          return d;
        },
      });
      var o = n(57437),
        a = n(4618),
        s = n.n(a),
        i = n(2265),
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
          titleClassName: _,
          titleTextClassName: m,
          onClose: h,
          styleBasic: p,
          closeIconClassName: f,
          closeIconThin: x,
        } = t;
        return ((0, i.useEffect)(() => {
          if ("undefined" != typeof document && void 0 !== document.body && e)
            return (
              (document.body.className = s().bodyOverflowHidden),
              () => {
                document.body.className = "";
              }
            );
        }, []),
        e)
          ? (0, o.jsx)("div", {
              className: r()(s().modalContainer, d, {
                [s().modalContainerBasic]: p,
              }),
              onClick: h,
              children: (0, o.jsxs)("div", {
                className: r()(s().modal, u, { [s().modalBasic]: p }),
                onClick: (t) => {
                  t.stopPropagation();
                },
                children: [
                  n &&
                    (0, o.jsxs)("div", {
                      className: r()(s().modalHeader, _),
                      children: [
                        (0, o.jsx)("div", {
                          className: r()(s().title, m, { [s().titleBasic]: p }),
                          children: n,
                        }),
                        l &&
                          (0, o.jsx)("button", {
                            className: r()(
                              s().closeIcon,
                              { [s().closeIconBasic]: p },
                              f
                            ),
                            onClick: h,
                            children: (0, o.jsx)(c.T, {
                              type: x ? "thin" : p ? "new" : "base",
                            }),
                          }),
                      ],
                    }),
                  p && (0, o.jsx)("div", { className: s().divider }),
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
          return _;
        },
      });
      var o = n(57437),
        a = n(36760),
        s = n.n(a),
        i = n(48303),
        l = n.n(i),
        r = n(99376),
        c = n(2265),
        d = n(27648);
      let u = (t, e) => t.find((t) => t.path === e) || t[0],
        _ = (t) => {
          let { tabs: e } = t,
            n = (0, r.usePathname)(),
            [a, i] = (0, c.useState)(u(e, n)),
            _ = (t) => i(t);
          return (0, o.jsx)("ul", {
            className: l().tabs,
            children: e.map((t) => {
              let { path: e, name: n } = t;
              return (0, o.jsx)(
                "li",
                {
                  children: (0, o.jsx)(d.default, {
                    className: s()(l().tabs__item, {
                      [l().tabs__item_active]: a?.path === e,
                    }),
                    href: e,
                    onClick: () => _(t),
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
          return s;
        },
        N8: function () {
          return a;
        },
        VH: function () {
          return i;
        },
        YN: function () {
          return l;
        },
        lK: function () {
          return o;
        },
        uu: function () {
          return c;
        },
        wn: function () {
          return r;
        },
      });
      let o = "Invalid value",
        a = "Enter value",
        s = "Internal error, please try again later",
        i = "Not enough balance",
        l = "Not enough staked balance",
        r = {
          SUCCESS: { type: "success", title: "Success!" },
          ERROR: { type: "error", title: "Internal error" },
          TRANSACTION_ERROR: { type: "error", title: "Transaction failure" },
        },
        c = {
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
          return o.GeneralInfo;
        },
        F0: function () {
          return a.ModalContainer;
        },
        jP: function () {
          return _.PathTabs;
        },
        oi: function () {
          return d;
        },
        iA: function () {
          return u.i;
        },
      });
      var o = n(9433),
        a = n(93946),
        s = n(57437),
        i = n(52541),
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
              style: a = { marginRight: "10px" },
              ...d
            } = t,
            u = (0, l.useMemo)(() => {
              let t = e?.toLowerCase();
              return t in c
                ? c[t]
                : "data:image/svg+xml;utf8," + encodeURIComponent((0, i.Y)(e));
            }, [e]);
          return (0, s.jsx)(r.default, {
            width: o,
            height: n,
            src: u,
            alt: e,
            style: a,
            quality: 100,
            ...d,
          });
        };
      var u = n(23757),
        _ = n(61411);
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
    57617: function (t) {
      t.exports = {
        root: "Select_root__Ef6oa",
        popover: "Select_popover__cjTNO",
        trigger: "Select_trigger__2no5P",
        icon: "Select_icon__LUnPI",
        value: "Select_value__NzmF4",
      };
    },
    25448: function (t) {
      t.exports = {
        item: "SelectOption_item__ijdnd",
        item__icon: "SelectOption_item__icon__VxXmU",
      };
    },
    58362: function (t) {
      t.exports = {
        modal: "TopUpModal_modal__XLml3",
        modalTitle: "TopUpModal_modalTitle__clMuH",
        root: "TopUpModal_root__GoEWj",
        network: "TopUpModal_network__KKMik",
        info: "TopUpModal_info__s9bi7",
        info__label: "TopUpModal_info__label__bA3Uu",
        amount: "TopUpModal_amount__hZz4c",
        amount__symbol: "TopUpModal_amount__symbol__4Z5cm",
        balance: "TopUpModal_balance__uk5RY",
        balance_notEnough: "TopUpModal_balance_notEnough__pShb8",
        balance_enough: "TopUpModal_balance_enough__AxrJ8",
        balance_amount: "TopUpModal_balance_amount__pU5ZA",
        box: "TopUpModal_box__TERwH",
        box__button: "TopUpModal_box__button__hYdKO",
        box__text: "TopUpModal_box__text__mdcHD",
        box__sub: "TopUpModal_box__sub__Mjezv",
        confirm: "TopUpModal_confirm__DSpLV",
        copy: "TopUpModal_copy__3DB8M",
        qrCode: "TopUpModal_qrCode__f_PLk",
        wallet: "TopUpModal_wallet__g5IOG",
        wallet__label: "TopUpModal_wallet__label___97n8",
        wallet__address: "TopUpModal_wallet__address__wXtx_",
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
