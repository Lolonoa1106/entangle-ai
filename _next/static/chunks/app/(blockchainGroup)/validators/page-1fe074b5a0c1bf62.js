(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1902, 9257],
  {
    54224: function (t, e, a) {
      Promise.resolve().then(a.bind(a, 35272));
    },
    55358: function (t, e, a) {
      "use strict";
      a.d(e, {
        T: function () {
          return i;
        },
      });
      let i = function (t) {
        let e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 8,
          a =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4;
        return t ? `${t.slice(0, e)}...${t.slice(-1 * a)}` : "";
      };
      a(94594);
    },
    35272: function (t, e, a) {
      "use strict";
      a.d(e, {
        ValidatorsLayout: function () {
          return U;
        },
      });
      var i,
        n,
        s,
        r,
        o = a(57437),
        l = a(8900),
        c = a.n(l),
        d = a(72694),
        u = a(91960),
        m = a(2265),
        h = a(31720),
        p = a.n(h),
        _ = a(36760),
        x = a.n(_);
      let v = (t) => {
        let {
          onClick: e,
          title: a,
          isActive: i,
          className: n,
          children: s,
        } = t;
        return (0, o.jsx)("div", {
          className: x()(n, p().validatorFilter, { [p().active]: i }),
          onClick: e,
          children: (0, o.jsxs)("div", { className: "flex", children: [a, s] }),
        });
      };
      var f = a(15810),
        g = a.n(f),
        N = a(41716),
        j = a(18434),
        C = a(99376),
        k = a(98114),
        w = a(98786),
        b = a(24919),
        y = a(55164),
        G = a.n(y);
      ((i = s || (s = {})).StrokeColor = "#08DCCF"), (i.TrailColor = "#012523");
      let I = (t) => {
          let { id: e, validator: a } = t,
            { push: i } = (0, C.useRouter)(),
            n = (0, w.m)(),
            s = (t) => {
              let { address: e } = t;
              i(`#`);
            },
            r = (0, N.z)(a.votingPowerPercentage);
          return (0, o.jsxs)("div", {
            onClick: () => s(a),
            className: `${G().validatorGrid} hover:bg-[#0E0E0E] mb-12 !h-min `,
            children: [
              (0, o.jsxs)("div", {
                className: G().validatorGridHeader,
                children: [
                  (0, o.jsxs)("div", {
                    className: G().commission,
                    children: ["Commission: ", a.commission],
                  }),
                  (0, o.jsx)("div", {
                    className: "flex items-center",
                    children: (0, o.jsxs)("div", {
                      className: G().validatorGridId,
                      children: ["#", e + 1],
                    }),
                  }),
                  (0, o.jsxs)("div", {
                    className: G().validatorGridName,
                    children: [
                      (0, o.jsx)(b.oi, {
                        id: a.name,
                        className: G().avatarUrl,
                        width: "24",
                        height: "24",
                        style: { borderRadius: "50%", marginRight: 8 },
                      }),
                      (0, o.jsx)("div", {
                        className: G().name,
                        children: a.name,
                      }),
                    ],
                  }),
                  (0, o.jsxs)("div", {
                    className: G().validatorGridAddress,
                    children: [
                      (0, o.jsx)("div", { children: a.address }),
                      (0, o.jsx)("img", {
                        className: G().copyIcon,
                        src: k.Z.src,
                        onClick: (t) => {
                          t.stopPropagation(), n(a.address);
                        },
                        alt: "Copy Icon",
                        width: 14,
                        height: 14,
                      }),
                    ],
                  }),
                ],
              }),
              (0, o.jsx)("div", {
                className: G().validatorPercentages,
                children:
                  a.votingPowerPercentage &&
                  (0, o.jsxs)("div", {
                    className: `${G().votingPowerContainer} !w-[50%]`,
                    children: [
                      (0, o.jsx)("div", {
                        className: G().votingPowerHeader,
                        children: "Voting Power",
                      }),
                      (0, o.jsxs)("div", {
                        className: G().votingPower,
                        children: [
                          (0, o.jsx)("div", { children: a.votingPower }),
                          (0, o.jsx)("div", {
                            children: a.votingPowerPercentage,
                          }),
                        ],
                      }),
                      (0, o.jsx)("div", {
                        className: G().votingPowerChart,
                        children: (0, o.jsx)(j.x1, {
                          percent: r || 0,
                          strokeWidth: 1,
                          strokeColor: "#08DCCF",
                          trailColor: "#012523",
                          trailWidth: 1,
                        }),
                      }),
                    ],
                  }),
              }),
            ],
          });
        },
        E = (t) => {
          let { validators: e } = t;
          return (0, o.jsx)("div", {
            className: `lg:${
              g().validatorsGridView
            } gap-[16px] lg:gap-[24px] grid lg:grid-cols-2 mt-[24px]`,
            children: e.map((t, e) =>
              (0, o.jsx)(I, { id: e, validator: t }, e)
            ),
          });
        };
      var P = a(33145),
        V = a(55988),
        A = a.n(V),
        L = a(28369),
        R = a(54234),
        D = a(89220),
        T = a(5826);
      let B = [
          {
            name: "#",
            objectKey: "id",
            tableHeaderProps: { align: "left" },
            tableCellProps: { align: "left" },
          },
          {
            name: "Name",
            DataComponent: (t) => {
              let { address: e = "", name: a = "" } = t,
                i = (0, w.m)();
              return (0, o.jsxs)("div", {
                className: A().nameColumnData,
                children: [
                  (0, o.jsxs)("div", {
                    className: A().nameAndAvatarContainer,
                    children: [
                      (0, o.jsx)(b.oi, {
                        className: A().avatarUrl,
                        id: a,
                        width: "12",
                        height: "12",
                      }),
                      a &&
                        (0, o.jsx)("span", {
                          className: A().name,
                          children: (0, L.$)(a),
                        }),
                    ],
                  }),
                  e &&
                    (0, o.jsxs)("div", {
                      className: A().addressContainer,
                      children: [
                        (0, o.jsx)("div", {
                          className: A().address,
                          children: (0, R.a)(e, 20),
                        }),
                        (0, o.jsx)(P.default, {
                          className: A().copyIcon,
                          onClick: (t) => {
                            t.stopPropagation(), i(e);
                          },
                          style: { cursor: "pointer" },
                          src: k.Z,
                          alt: "Copy Icon",
                        }),
                      ],
                    }),
                ],
              });
            },
            tableHeaderProps: { align: "left" },
            tableCellProps: { align: "left" },
          },
          {
            name: "Commission",
            objectKey: "commission",
            tableHeaderProps: { align: "left" },
            tableCellProps: { align: "left" },
            headerWrapperClassName: "md:justify-center justify-center",
            DataComponent: (t) =>
              (0, o.jsx)("div", {
                className: "text-center",
                children: t.commission,
              }),
          },
          {
            name: "Voting Power",
            DataComponent: D.u,
            tableHeaderProps: { align: "right" },
            tableCellProps: { align: "left" },
            headerWrapperClassName: "md:justify-center justify-center",
          },
          {
            name: "",
            DataComponent: T.F,
            tableCellProps: { align: "right" },
            cellWrapperClassName:
              "flex justify-end items-center pt-6 pr-3 pb-0 pl-0",
          },
        ],
        S = (t) => {
          let { validators: e, isLoading: a } = t,
            { push: i } = (0, C.useRouter)();
          return (0, o.jsx)("div", {
            style: { paddingBottom: "40px" },
            children: (0, o.jsx)(b.iA, {
              isLoading: a,
              columns: B,
              data: e,
              selectHandler: (t) => {
                let { address: e } = t;
                i(`#`);
              },
            }),
          });
        };
      var H = { src: "/_next/static/media/gridIcon.5160f3d4.svg" },
        $ = a(44738),
        F = { src: "/_next/static/media/tableIcon.d2974ebe.svg" },
        M = a(82199),
        O = a(33730),
        Z = a(68575),
        W = a(82723);
      ((n = r || (r = {}))[(n.Active = 0)] = "Active"),
        (n[(n.Inactive = 1)] = "Inactive");
      let U = () => {
        let t = (0, m.useRef)(null),
          e = (0, u.TL)(),
          [a, i] = (0, m.useState)(!1),
          [n, s] = (0, m.useState)(!1),
          [r, l] = (0, m.useState)(null),
          { address: h } = (0, O.Z)(),
          { activeValidators: p, inactiveValidators: _ } = (0, Z.v9)(W.c),
          {
            store: {
              ValidatorEntity: { delegationValidators: x, loading: f },
            },
            asyncActions: {
              Validator: { getDelegationValidators: g },
            },
          } = (0, u.oR)((t) => ({ ValidatorEntity: t.ValidatorEntity })),
          N = () => {
            s(!n);
          },
          j = (t) => {
            r === t ? l(null) : l(t);
          },
          C = (t) => {
            t === w ? b(!t) : b(t), i(!1);
          },
          k = (0, m.useMemo)(() => {
            switch (r) {
              case 0:
                return p;
              case 1:
                return _;
              default:
                return x;
            }
          }, [p, x, _, r]);
        (0, m.useEffect)(() => {
          e(g({ sort: null, delegatorAddress: h }));
        }, [h, e, g]);
        let [w, b] = (0, m.useState)(!1);
        return (
          (0, d.t$)(t, () => {
            a && setTimeout(() => i(!1), 50);
          }),
          (0, o.jsxs)("div", {
            className: a ? "" : ` ${c().validatorsLayout}`,
            children: [
              (0, o.jsxs)("div", {
                className: c().validators__header,
                children: [
                  (0, o.jsx)("div", {
                    className: "hidden lg:flex",
                    children: (0, o.jsx)("div", {
                      style: { fontSize: "18px" },
                      className: "text-neutral-90 text-hSmall",
                      children: "Validators",
                    }),
                  }),
                  (0, o.jsxs)("div", {
                    className: `${c().validators} hidden lg:flex`,
                    children: [
                      (0, o.jsx)(v, {
                        isActive: 0 === r,
                        title: `Active (${p.length})`,
                        onClick: () => j(0),
                      }),
                      (0, o.jsx)(v, {
                        isActive: 1 === r,
                        title: `Inactive (${_.length})`,
                        onClick: () => j(1),
                      }),
                      (0, o.jsxs)(v, {
                        isActive: n,
                        title: `${n ? "Grid view" : "Table view"}`,
                        onClick: N,
                        children: [
                          n
                            ? (0, o.jsx)("img", {
                                className: "ml-[6px]",
                                src: H.src,
                                alt: "grid icon",
                              })
                            : (0, o.jsx)("img", {
                                className: "ml-[6px]",
                                src: F.src,
                                alt: "table icon",
                              }),
                          " ",
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, o.jsx)("div", {
                children: (0, o.jsxs)("div", {
                  className: "lg:hidden flex w-full items-center ",
                  children: [
                    (0, o.jsx)("h2", {
                      className: "text-[16px] text-[var(--neutral-90)] ",
                      children: "Validators",
                    }),
                    (0, o.jsx)("div", {
                      ref: t,
                      className: `fixed top-[3.5rem]  bg-black w-[100vw] left-0 h-full border-t border-[#1E1E24] pt-[24px]  ${
                        a ? " flex" : " hidden"
                      }`,
                      children: (0, o.jsx)("div", {
                        className: "w-full overflow-y-auto ",
                        children: (0, o.jsxs)("div", {
                          className: "w-full",
                          children: [
                            (0, o.jsxs)("div", {
                              className:
                                "flex itens-center justify-between px-[16px]",
                              children: [
                                (0, o.jsx)("div", {
                                  className: "text-[16px] text-[#BCBFCC]",
                                  children: "Filters",
                                }),
                                (0, o.jsx)("img", {
                                  src: $.Z.src,
                                  onClick: () => i(!a),
                                  alt: "close",
                                }),
                              ],
                            }),
                            (0, o.jsx)("div", {
                              className: "w-full bg-[#1E1E24] h-px my-[16px] ",
                            }),
                            (0, o.jsx)("div", {
                              onClick: () => C(`Active (${p.length})`),
                              children: (0, o.jsx)(v, {
                                isActive: 0 === r,
                                title: `Active (${p.length})`,
                                onClick: () => j(0),
                                className: "!border-none",
                              }),
                            }),
                            (0, o.jsx)("div", {
                              className: "w-full bg-[#1E1E24] h-px my-[16px] ",
                            }),
                            (0, o.jsx)("div", {
                              onClick: () => C(`Inactive (${_.length})`),
                              children: (0, o.jsx)(v, {
                                isActive: 1 === r,
                                title: `Inactive (${_.length})`,
                                onClick: () => j(1),
                                className: "!border-none",
                              }),
                            }),
                            (0, o.jsxs)("div", {
                              onClick: () => C("Grid view"),
                              children: [
                                (0, o.jsx)("div", {
                                  className:
                                    "w-full bg-[#1E1E24] h-px my-[16px] ",
                                }),
                                (0, o.jsx)(v, {
                                  isActive: n,
                                  title: "Table view",
                                  className: "!border-none",
                                  onClick: N,
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    }),
                    (0, o.jsxs)("div", {
                      className: "ml-auto flex items-center",
                      onClick: () => i(!a),
                      children: [
                        (0, o.jsxs)("div", {
                          className: `text-[#08DCCF] px-[16px] py-[3px] border-[#022C29] rounded-full mr-[8px] ${
                            w ? "border" : "border-0"
                          }`,
                          children: [" ", w || ""],
                        }),
                        (0, o.jsx)("img", { src: M.Z.src, alt: "filter icon" }),
                      ],
                    }),
                  ],
                }),
              }),
              n
                ? (0, o.jsx)(E, { validators: k })
                : (0, o.jsx)(S, { isLoading: f, validators: k }),
            ],
          })
        );
      };
    },
    82723: function (t, e, a) {
      "use strict";
      a.d(e, {
        K: function () {
          return s;
        },
        c: function () {
          return n;
        },
      });
      var i = a(55842);
      let n = (t) => ({
          activeValidators: t.ValidatorEntity.delegationValidators.filter(
            (t) => t.status === i.Jn.Active
          ),
          inactiveValidators: t.ValidatorEntity.delegationValidators.filter(
            (t) => t.status !== i.Jn.Active
          ),
        }),
        s = (t) =>
          t.ValidatorEntity.delegationValidators?.[0]?.totalRewards || 0;
    },
    57552: function (t, e, a) {
      "use strict";
      a.d(e, {
        Ro: function () {
          return u;
        },
        T6: function () {
          return n;
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
      var i = a(6874);
      let n = {
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
        r = (t) =>
          ({
            33033: "transactions",
            41: "transaction",
            728126428: "#/transaction",
          }[t] || "tx"),
        o = (t) =>
          ({ 33033: "address", 41: "account", 728126428: "#/address" }[t] ||
          "address"),
        l = (t) =>
          ({
            33033: "blocks",
            41: "block",
            59901: "batch",
            728126428: "#/block",
          }[t] || "block"),
        c = (t, e, a) => {
          let s;
          (s = t), (0, i.O)(t) && (s = t.slice(2)), (s = s.toUpperCase());
          let c = { tx: r(e), address: o(e), block: l(e) };
          return `${n[e]}/${c[a]}/${t}`;
        },
        d = (t, e, a) => {
          void 0 !== a
            ? window.open(c(t, Number(a), e), "_blank")
            : window.open(`#`, "_blank");
        },
        u = (t) => {
          window.open(`https://tonscan.org/tx/${t}`, "_blank");
        };
    },
    6874: function (t, e, a) {
      "use strict";
      a.d(e, {
        O: function () {
          return i;
        },
      });
      let i = (t) => t.startsWith("0x") || t.startsWith("0X");
    },
    54234: function (t, e, a) {
      "use strict";
      a.d(e, {
        a: function () {
          return i;
        },
      });
      let i = (t, e) => (t.length <= e ? t : t.slice(0, e) + "...");
    },
    24461: function (t, e, a) {
      "use strict";
      a.d(e, {
        JB: function () {
          return k;
        },
        Xq: function () {
          return w;
        },
        dc: function () {
          return b;
        },
      });
      var i = a(57437),
        n = a(96039),
        s = a.n(n),
        r = a(2265);
      let o = () => `${Date.now()}-${Math.random().toString(36).slice(2, 11)}`;
      var l = a(36760),
        c = a.n(l),
        d = a(38273),
        u = a.n(d),
        m = a(27648),
        h = a(33145),
        p = a(29557),
        _ = a(55358),
        x = a(57552),
        v = a(16629),
        f = a(29853),
        g = { src: "/_next/static/media/external_link_error.ed23df95.svg" };
      let N = Object.values(p.m5),
        j = (0, r.memo)((t) => {
          let {
            id: e,
            type: a,
            link: n,
            title: s,
            message: r,
            transactions: o,
            onRemove: l,
          } = t;
          return (0, i.jsxs)("div", {
            className: c()(u().notification, u()[`notification_${a}`]),
            children: [
              (0, i.jsxs)("div", {
                className: u().header,
                children: [
                  (0, i.jsx)(h.default, {
                    width: 16,
                    height: 16,
                    src: "/_next/static/media/info-icon.63a8c7d3.svg",
                    alt: "Info Icon",
                  }),
                  (0, i.jsx)("h4", { className: u().title, children: s }),
                  (0, i.jsx)("button", {
                    className: u().closeButton,
                    onClick: () => l(e),
                    children: (0, i.jsx)(h.default, {
                      width: 16,
                      height: 16,
                      src: v.Z.src,
                      alt: "Close Icon",
                    }),
                  }),
                ],
              }),
              (0, i.jsxs)("div", {
                className: u().body,
                children: [
                  (0, i.jsx)("p", { className: u().message, children: r }),
                  o &&
                    o.length > 0 &&
                    (0, i.jsx)("div", {
                      className: u().transactionsList,
                      children: o.map((t, e) => {
                        let { chainId: a, status: n, txHash: s } = t,
                          r = N.find((t) => t.chainId === a),
                          o = `${x.T6[a]}/tx/${s}`;
                        return r
                          ? (0, i.jsxs)(
                              "div",
                              {
                                className: u().transactionItem,
                                children: [
                                  (0, i.jsxs)("div", {
                                    className: u().transactionChain,
                                    children: [
                                      (0, i.jsx)(h.default, {
                                        src: r.icon.src,
                                        width: 16,
                                        height: 16,
                                        alt: r.name,
                                      }),
                                      (0, i.jsx)("p", {
                                        children: r.nativeCurrency,
                                      }),
                                    ],
                                  }),
                                  (0, i.jsxs)("div", {
                                    className: c()(
                                      u().transactionHash,
                                      u()[`transactionHash_${n}`]
                                    ),
                                    children: [
                                      (0, i.jsx)("p", { children: "Tx Hash" }),
                                      (0, i.jsxs)("a", {
                                        href: o,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        children: [
                                          (0, i.jsx)("p", {
                                            children: (0, _.T)(s),
                                          }),
                                          (0, i.jsx)(h.default, {
                                            width: 16,
                                            height: 16,
                                            src:
                                              "success" === n ? f.Z.src : g.src,
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
                  n &&
                    (0, i.jsx)(m.default, {
                      href: n,
                      target: "_blank",
                      className: u().link,
                      children: (0, i.jsx)(h.default, {
                        width: 20,
                        height: 20,
                        src: "error" === a ? g.src : f.Z.src,
                        alt: "External Link",
                      }),
                    }),
                ],
              }),
            ],
          });
        });
      j.displayName = "Notification";
      let C = (0, r.createContext)({
          addNotification: (t, e) => "",
          updateNotification: (t, e) => {},
        }),
        k = (0, r.memo)((t) => {
          let { children: e } = t,
            [a, n] = (0, r.useState)([]),
            l = (0, r.useCallback)((t) => {
              n((e) => e.filter((e) => e.id !== t));
            }, []),
            c = (0, r.useCallback)(
              (t, e) => {
                let a = o(),
                  i = { ...t, id: a };
                return (
                  n((t) => [...t, i]),
                  (e || "error" === t.type) &&
                    setTimeout(() => {
                      l(a);
                    }, e ?? 1e4),
                  a
                );
              },
              [l]
            ),
            d = (0, r.useCallback)(
              (t, e) => {
                n((a) =>
                  a.find((e) => e.id === t)
                    ? a.map((a) => (a.id === t ? { ...a, ...e } : a))
                    : [...a, { id: t, ...e }]
                ),
                  setTimeout(() => {
                    l(t);
                  }, 1e4);
              },
              [l]
            );
          return (0, i.jsxs)(C.Provider, {
            value: { addNotification: c, updateNotification: d },
            children: [
              e,
              (0, i.jsx)("div", {
                className: s().notifications,
                children: a.map((t, e) =>
                  (0, i.jsx)(j, { ...t, onRemove: l }, e)
                ),
              }),
            ],
          });
        }),
        w = () => (0, r.useContext)(C).addNotification,
        b = () => (0, r.useContext)(C).updateNotification;
      k.displayName = "NotificationProvider";
    },
    25864: function (t, e, a) {
      "use strict";
      a.d(e, {
        T: function () {
          return n;
        },
      });
      var i = a(57437);
      let n = (0, a(2265).memo)((t) => {
        let { type: e, ...a } = t;
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
              ...a,
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
      n.displayName = "CloseIcon";
    },
    9433: function (t, e, a) {
      "use strict";
      a.d(e, {
        GeneralInfo: function () {
          return x;
        },
      });
      var i = a(57437),
        n = a(28664),
        s = a.n(n),
        r = a(2265),
        o = a(36760),
        l = a.n(o),
        c = a(33145),
        d = a(29194),
        u = a(91960),
        m = a(3562),
        h = a(29557),
        p = a(34085);
      let _ = (t, e) => {
          let a = t.toString();
          return a.includes(".") && a.length - a.indexOf(".") > e + 1
            ? parseFloat(a.slice(0, a.indexOf(".") + e + 1))
            : t;
        },
        x = r.memo((t) => {
          let { infoBlocks: e, className: a } = t,
            n = (0, u.TL)(),
            {
              store: {
                TokenomicsEntity: { bondedTokens: o, inflation: x },
                CoinEntity: {
                  coins: {
                    entangle: { marketCap: v, totalSupply: f },
                  },
                },
              },
              asyncActions: {
                Tokenomics: { getBondedTokens: g },
                Coin: { getMarketCap: N, getSupply: j },
              },
            } = (0, u.oR)((t) => ({
              TokenomicsEntity: t.TokenomicsEntity,
              CoinEntity: t.CoinEntity,
            }));
          (0, r.useEffect)(() => {
            n(g()), n(j("entangle")), n(N("entangle"));
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
            k = (f * x) / Number(o);
          (0, r.useEffect)(() => {
            C.marketCap.start(v),
              C.inflation.start(_(x, 2)),
              C.APR.start(_(k, 2)),
              C.supply.start(_(f, 2)),
              C.totalStaked.start(_(Number(o), 2));
          }, [
            C.marketCap,
            C.inflation,
            C.APR,
            C.supply,
            C.totalStaked,
            v,
            x,
            k,
            f,
            o,
          ]);
          let w = _(x, 2),
            b = _(k, 2),
            y = _(f, 2),
            G = _(Number(o), 2),
            I = (0, r.useMemo)(() => {
              let t = (0, i.jsxs)("div", {
                className: s().supply,
                children: [
                  (0, i.jsx)(c.default, {
                    className: "w-6 h-6",
                    src: (0, m.Sv)(h.ZP.chainId.toString()),
                    width: 24,
                    height: 24,
                    alt: `${p.f[h.ZP.chainId]} Icon`,
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
            }, [b, w, y, G, v]);
          return (0, i.jsx)("div", {
            className: l()(s().generalInfo, a),
            children: (e || I).map((t, e) => {
              let { title: a, value: n } = t;
              return (0, i.jsxs)(
                "div",
                {
                  className: s().infoBlock,
                  children: [
                    (0, i.jsx)("span", {
                      className: s().infoBlockTitle,
                      children: a,
                    }),
                    (0, i.jsx)("span", {
                      className: s().infoBlockValue,
                      children: n,
                    }),
                  ],
                },
                e
              );
            }),
          });
        });
      x.displayName = "GeneralInfo";
    },
    93946: function (t, e, a) {
      "use strict";
      a.d(e, {
        ModalContainer: function () {
          return d;
        },
      });
      var i = a(57437),
        n = a(4618),
        s = a.n(n),
        r = a(2265),
        o = a(36760),
        l = a.n(o),
        c = a(25864);
      let d = (t) => {
        let {
          enable: e = !1,
          title: a,
          children: n,
          isCloseIcon: o,
          className: d,
          modalClassName: u,
          titleClassName: m,
          titleTextClassName: h,
          onClose: p,
          styleBasic: _,
          closeIconClassName: x,
          closeIconThin: v,
        } = t;
        return ((0, r.useEffect)(() => {
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
              className: l()(s().modalContainer, d, {
                [s().modalContainerBasic]: _,
              }),
              onClick: p,
              children: (0, i.jsxs)("div", {
                className: l()(s().modal, u, { [s().modalBasic]: _ }),
                onClick: (t) => {
                  t.stopPropagation();
                },
                children: [
                  a &&
                    (0, i.jsxs)("div", {
                      className: l()(s().modalHeader, m),
                      children: [
                        (0, i.jsx)("div", {
                          className: l()(s().title, h, { [s().titleBasic]: _ }),
                          children: a,
                        }),
                        o &&
                          (0, i.jsx)("button", {
                            className: l()(
                              s().closeIcon,
                              { [s().closeIconBasic]: _ },
                              x
                            ),
                            onClick: p,
                            children: (0, i.jsx)(c.T, {
                              type: v ? "thin" : _ ? "new" : "base",
                            }),
                          }),
                      ],
                    }),
                  _ && (0, i.jsx)("div", { className: s().divider }),
                  n,
                ],
              }),
            })
          : null;
      };
    },
    61411: function (t, e, a) {
      "use strict";
      a.d(e, {
        PathTabs: function () {
          return m;
        },
      });
      var i = a(57437),
        n = a(36760),
        s = a.n(n),
        r = a(48303),
        o = a.n(r),
        l = a(99376),
        c = a(2265),
        d = a(27648);
      let u = (t, e) => t.find((t) => t.path === e) || t[0],
        m = (t) => {
          let { tabs: e } = t,
            a = (0, l.usePathname)(),
            [n, r] = (0, c.useState)(u(e, a)),
            m = (t) => r(t);
          return (0, i.jsx)("ul", {
            className: o().tabs,
            children: e.map((t) => {
              let { path: e, name: a } = t;
              return (0, i.jsx)(
                "li",
                {
                  children: (0, i.jsx)(d.default, {
                    className: s()(o().tabs__item, {
                      [o().tabs__item_active]: n?.path === e,
                    }),
                    href: e,
                    onClick: () => m(t),
                    children: a,
                  }),
                },
                e
              );
            }),
          });
        };
    },
    44406: function (t, e, a) {
      "use strict";
      a.d(e, {
        LJ: function () {
          return s;
        },
        N8: function () {
          return n;
        },
        VH: function () {
          return r;
        },
        YN: function () {
          return o;
        },
        lK: function () {
          return i;
        },
        uu: function () {
          return c;
        },
        wn: function () {
          return l;
        },
      });
      let i = "Invalid value",
        n = "Enter value",
        s = "Internal error, please try again later",
        r = "Not enough balance",
        o = "Not enough staked balance",
        l = {
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
    24919: function (t, e, a) {
      "use strict";
      a.d(e, {
        WR: function () {
          return i.GeneralInfo;
        },
        F0: function () {
          return n.ModalContainer;
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
      var i = a(9433),
        n = a(93946),
        s = a(57437),
        r = a(52541),
        o = a(2265),
        l = a(33145);
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
              height: a,
              width: i,
              style: n = { marginRight: "10px" },
              ...d
            } = t,
            u = (0, o.useMemo)(() => {
              let t = e?.toLowerCase();
              return t in c
                ? c[t]
                : "data:image/svg+xml;utf8," + encodeURIComponent((0, r.Y)(e));
            }, [e]);
          return (0, s.jsx)(l.default, {
            width: i,
            height: a,
            src: u,
            alt: e,
            style: n,
            quality: 100,
            ...d,
          });
        };
      var u = a(23757),
        m = a(61411);
    },
    31720: function (t) {
      t.exports = {
        validatorFilter: "ValidatorFilter_validatorFilter__DzkHM",
        active: "ValidatorFilter_active__HhTl8",
      };
    },
    55164: function (t) {
      t.exports = {
        validatorGrid: "ValidatorGrid_validatorGrid__fVGuK",
        validatorGridHeader: "ValidatorGrid_validatorGridHeader__wiX1W",
        validatorGridContent: "ValidatorGrid_validatorGridContent__xydjk",
        validatorGridId: "ValidatorGrid_validatorGridId__lwu41",
        validatorGridAddress: "ValidatorGrid_validatorGridAddress__CZucH",
        votingPowerHeader: "ValidatorGrid_votingPowerHeader__up40k",
        validatorPercentages: "ValidatorGrid_validatorPercentages__grNN1",
        votingPowerContainer: "ValidatorGrid_votingPowerContainer__Rifsj",
        cumulativeShareContainer:
          "ValidatorGrid_cumulativeShareContainer__Rubts",
        commission: "ValidatorGrid_commission__2jzAl",
        copyIcon: "ValidatorGrid_copyIcon__e4xqX",
        validatorGridName: "ValidatorGrid_validatorGridName__cxlED",
        avatarUrl: "ValidatorGrid_avatarUrl__Bsbc6",
        name: "ValidatorGrid_name__qWj5Y",
        votingPower: "ValidatorGrid_votingPower__P6GIg",
      };
    },
    15810: function (t) {
      t.exports = {
        validatorsGridView: "ValidatorsGridView_validatorsGridView__lr1HN",
        validatorGrid: "ValidatorsGridView_validatorGrid__GKJsP",
      };
    },
    8900: function (t) {
      t.exports = {
        validators: "ValidatorsLayout_validators__fopd2",
        validators__header: "ValidatorsLayout_validators__header__QmTB7",
      };
    },
    55988: function (t) {
      t.exports = {
        nameColumnData: "NameColumnData_nameColumnData__ojpkv",
        nameAndAvatarContainer: "NameColumnData_nameAndAvatarContainer__LxFfR",
        addressContainer: "NameColumnData_addressContainer__V2XlN",
        avatarUrl: "NameColumnData_avatarUrl__l1LNJ",
        address: "NameColumnData_address__nh3uG",
        copyIcon: "NameColumnData_copyIcon__Uklaj",
      };
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
  function (t) {
    t.O(
      0,
      [
        9718, 6560, 1581, 3325, 8497, 4350, 6918, 8218, 3814, 6990, 9228, 8933,
        1293, 9443, 9543, 6276, 4031, 8217, 2016, 3141, 9915, 510, 9907, 483,
        7986, 2971, 2117, 1744,
      ],
      function () {
        return t((t.s = 54224));
      }
    ),
      (_N_E = t.O());
  },
]);
