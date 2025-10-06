(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5106],
  {
    39615: function (e, t, a) {
      Promise.resolve().then(a.bind(a, 66837));
    },
    75448: function (e, t, a) {
      "use strict";
      a.d(t, {
        z: function () {
          return o;
        },
      });
      var n = a(57437),
        l = a(14822),
        i = a.n(l),
        s = a(24919),
        r = a(28369);
      let o = (e) => {
        let { validatorDescriptions: t } = e.validator;
        if (!t.length) return null;
        let a = t[0]?.moniker;
        return (0, n.jsx)("div", {
          className: i().nameColumnData,
          children: (0, n.jsx)("div", {
            className: i().nameAndAvatarContainer,
            children:
              a &&
              (0, n.jsxs)(n.Fragment, {
                children: [
                  (0, n.jsx)(s.oi, { id: a, width: "12", height: "12" }),
                  a &&
                    (0, n.jsx)("span", {
                      className: i().name,
                      children: (0, r.$)(a),
                    }),
                ],
              }),
          }),
        });
      };
    },
    77013: function (e, t, a) {
      "use strict";
      a.d(t, {
        Tn: function () {
          return o;
        },
        oX: function () {
          return d;
        },
        oo: function () {
          return c;
        },
      });
      var n = a(57437);
      a(2265);
      var l = a(75448),
        i = a(92906),
        s = a(23757),
        r = a(75466);
      let o = [
          {
            name: "Proposer",
            title: "Proposer",
            isSearchable: !0,
            type: "option",
            searchPlaceholder: "Search for a proposer",
            options: [],
          },
          { name: "Created", type: "date-range" },
        ],
        c = (e) => [
          {
            name: "Height",
            objectKey: "height",
            getData: (e) =>
              String(e.height).replace(/\B(?=(\d{3})+(?!\d))/g, ","),
            tableHeaderProps: { align: "left" },
            tableCellProps: { align: "left" },
            cellWrapperClassName: "pr-1 pl-4",
            className: "pr-1 pl-4",
          },
          {
            name: "Proposer",
            objectKey: "validator",
            DataComponent: l.z,
            tableHeaderProps: { align: "left" },
            headerWrapperClassName: "min-w-[140px]",
            tableCellProps: { align: "left" },
            cellWrapperClassName: "px-1",
            className: "px-1",
          },
          {
            name: "Hash",
            objectKey: "hash",
            DataComponent: (t) =>
              (0, n.jsx)("div", {
                className: "text-center",
                children: (0, i.F)(t.hash, e),
              }),
            tableHeaderProps: { align: "right" },
            headerWrapperClassName: "justify-center md:justify-center",
            tableCellProps: { align: "left" },
            cellWrapperClassName: "",
            className: "px-1",
          },
          {
            name: "Txs",
            objectKey: "txs",
            tableHeaderProps: { align: "left" },
            tableCellProps: { align: "left" },
            cellWrapperClassName: "px-1  !text-center",
            className: "px-1",
            headerWrapperClassName: "!justify-center",
          },
          {
            name: "Time",
            objectKey: "timestamp",
            DataComponent: (e) => {
              let { timestamp: t } = e;
              return (0, n.jsx)(s.g, { time: t });
            },
            tableHeaderProps: { align: "right" },
            tableCellProps: { align: "right" },
            headerWrapperClassName: "!justify-end min-w-[7rem]",
            cellWrapperClassName: "pl-1 pr-4",
            className: "pl-1 pr-4",
          },
        ],
        d = [
          {
            name: "Height",
            objectKey: "height",
            getData: () => (0, n.jsx)(r.O, { width: 120, height: 24 }),
            tableCellProps: { align: "left" },
            cellWrapperClassName: "pr-1 pl-4",
            className: "pr-1 pl-4",
          },
          {
            name: "Proposer",
            objectKey: "validator",
            getData: () => (0, n.jsx)(r.O, { width: 335, height: 24 }),
            tableHeaderProps: { align: "left" },
            headerWrapperClassName: "min-w-[140px]",
            tableCellProps: { align: "left" },
            cellWrapperClassName: "px-1",
            className: "px-1",
          },
          {
            name: "Hash",
            objectKey: "hash",
            getData: () => (0, n.jsx)(r.O, { width: 500, height: 24 }),
            tableHeaderProps: { align: "right" },
            headerWrapperClassName: "justify-center md:justify-center",
            tableCellProps: { align: "left" },
            cellWrapperClassName: "",
            className: "px-1",
          },
          {
            name: "Txs",
            objectKey: "txs",
            getData: () => (0, n.jsx)(r.O, { width: 36, height: 24 }),
            tableHeaderProps: { align: "left" },
            tableCellProps: { align: "left" },
            cellWrapperClassName: "px-1  !text-center",
            className: "px-1",
            headerWrapperClassName: "!justify-center",
          },
          {
            name: "Time",
            objectKey: "timestamp",
            getData: () => (0, n.jsx)(r.O, { width: 185, height: 24 }),
            tableHeaderProps: { align: "right" },
            tableCellProps: { align: "right" },
            headerWrapperClassName: "!justify-end min-w-[7rem]",
            cellWrapperClassName: "pl-1 pr-4",
            className: "pl-1 pr-4",
          },
        ];
    },
    66837: function (e, t, a) {
      "use strict";
      a.d(t, {
        default: function () {
          return h;
        },
      });
      var n = a(57437),
        l = a(99376),
        i = a(2265),
        s = a(24919),
        r = a(77013),
        o = a(91960),
        c = a(14822),
        d = a.n(c),
        u = a(28369),
        m = (e) => {
          let {
            store: {
              BlockEntity: { proposers: t },
            },
          } = (0, o.oR)((e) => ({ BlockEntity: e.BlockEntity }));
          return (0, i.useMemo)(() => {
            let a = [...e],
              l = a.findIndex((e) => "title" in e && "Proposer" === e.title);
            return (
              -1 !== l &&
                "options" in a[l] &&
                (a[l].options = Object.keys(t || {}).map((e) => {
                  let a = t[e];
                  return {
                    value: e,
                    searchData: a,
                    element: (0, n.jsxs)("div", {
                      className: "flex gap-2 justify-start items-center",
                      children: [
                        (0, n.jsx)(s.oi, { id: a, width: "12", height: "12" }),
                        a &&
                          (0, n.jsx)("span", {
                            className: d().name,
                            children: (0, u.$)(a),
                          }),
                      ],
                    }),
                  };
                })),
              a
            );
          }, []);
        },
        p = a(99404),
        g = a(72694),
        h = function () {
          let [e, t] = (0, i.useState)({}),
            { state: a, loadNextPage: o } = (0, p.V)(e),
            { items: c, loading: d, isNextPageLoading: u } = a,
            { push: h } = (0, l.useRouter)(),
            f = (0, g.Sf)(() => {
              o();
            }, 500);
          return (0, n.jsx)(n.Fragment, {
            children: (0, n.jsx)(s.iA, {
              title: "Block Information",
              isLoading: d,
              isNextPageLoading: u,
              filters: m(r.Tn),
              columns: (0, r.oo)(16),
              filterHandler: (e) => {
                0 == Object.keys(e).length ? t({}) : t(e);
              },
              intersectingHandler: (e) => {
                e && f();
              },
              data: c,
              selectHandler: (e) => {
                let { hash: t } = e;
                h(`#`);
              },
              skeletonColumns: r.oX,
            }),
          });
        };
    },
    99404: function (e, t, a) {
      "use strict";
      a.d(t, {
        V: function () {
          return f;
        },
      });
      var n = a(2265),
        l = a(91960),
        i = a(66790),
        s = a(25961),
        r = a(43871),
        o = a(27878),
        c = a(77398),
        d = a.n(c);
      let u = (e, t) => e.filter((e) => !t.some((t) => t.hash === e.hash)),
        m = (e) => {
          let t = {};
          return (
            "Proposer" in e &&
              (t = {
                ...t,
                validator: {
                  validator_info: { operator_address: { _in: e.Proposer } },
                },
              }),
            "Created" in e &&
              (t = {
                ...t,
                _and: [
                  { timestamp: { _gt: d()(e.Created[0]).format("L") } },
                  {
                    timestamp: {
                      _lte: d()(e.Created[1]).add(1, "days").format("L"),
                    },
                  },
                ],
              }),
            t
          );
        };
      var p = a(85895),
        g = a(25563);
      let h = {
          loading: !0,
          hasNextPage: !1,
          isNextPageLoading: !0,
          items: [],
        },
        f = (e) => {
          let [t, a] = (0, n.useState)(h),
            c = (0, n.useRef)(null),
            d = (0, n.useMemo)(() => m(e || {}), [e]),
            f = (0, l.TL)(),
            x = (0, n.useCallback)((e) => {
              a((t) => {
                let a = e(t);
                return (0, i.v)(t, a) ? t : a;
              });
            }, []),
            _ = (0, n.useCallback)(async () => {
              c.current?.unsubscribe(), (c.current = null), a(h);
            }, []),
            b = (0, n.useCallback)(
              async (e, t, a) => {
                let { data: n } = await f(
                    p.c.endpoints.getBlocks.initiate({
                      limit: e,
                      offset: t,
                      where: a,
                    })
                  ),
                  l = n?.blocks?.length || 0;
                return { data: n, itemsLength: l };
              },
              [f]
            );
          (0, s.K)(async () => {
            await _();
            let { data: e, itemsLength: t } = await b(51, 1, d);
            x((a) => {
              let n = (0, o.jD)({
                data: { blocks: u(e?.blocks || [], a.items) },
                loading: !1,
                networkStatus: 7,
              });
              return {
                ...a,
                loading: !1,
                items: [...n, ...a.items],
                hasNextPage: a.hasNextPage || 51 === t,
                isNextPageLoading: !1,
              };
            }),
              (c.current = r.ti
                .subscribe({
                  query: g.b9,
                  variables: { limit: 1, offset: 0, where: d },
                })
                .subscribe({
                  next(e) {
                    let { data: t } = e,
                      a = t?.blocks?.length || 0;
                    x((e) => {
                      let n = (0, o.jD)({
                        data: { blocks: u(t?.blocks || [], e.items) },
                        loading: !1,
                        networkStatus: 7,
                      });
                      return {
                        ...e,
                        loading: !1,
                        items: [...n, ...e.items],
                        hasNextPage: e.hasNextPage || 51 === a,
                        isNextPageLoading: !1,
                      };
                    });
                  },
                  error() {
                    x((e) => ({ ...e, loading: !1 }));
                  },
                }));
          }, [d]);
          let C = async () => {
            if (t.isNextPageLoading || t.loading) return;
            x((e) => ({ ...e, isNextPageLoading: !0 }));
            let { data: e, itemsLength: a } = await b(51, t.items.length, d);
            x((t) => {
              let n = (0, o.jD)({
                data: { blocks: u(e?.blocks || [], t.items) },
                loading: !1,
                networkStatus: 7,
              });
              return {
                ...t,
                items: [...t.items, ...n],
                isNextPageLoading: !1,
                hasNextPage: 51 === a,
              };
            });
          };
          return { state: t, loadNextPage: C };
        };
    },
    25961: function (e, t, a) {
      "use strict";
      a.d(t, {
        K: function () {
          return l;
        },
      });
      var n = a(2265);
      function l(e, t) {
        let a = (0, n.useRef)(void 0);
        (0, n.useEffect)(() => {
          (a.current && JSON.stringify(a.current) === JSON.stringify(t)) ||
            ((a.current = t), e());
        }, [e, t]);
      }
    },
    25864: function (e, t, a) {
      "use strict";
      a.d(t, {
        T: function () {
          return l;
        },
      });
      var n = a(57437);
      let l = (0, a(2265).memo)((e) => {
        let { type: t, ...a } = e;
        return "thin" === t
          ? (0, n.jsx)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 20 20",
              children: (0, n.jsx)("path", {
                stroke: "currentColor",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M15 5 5 15M5 5l10 10",
              }),
            })
          : "new" === t
          ? (0, n.jsx)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              width: "15",
              height: "15",
              fill: "none",
              viewBox: "0 0 15 15",
              children: (0, n.jsx)("path", {
                fill: "currentColor",
                fillRule: "evenodd",
                d: "M.945.16a.556.556 0 0 0-.78.792l6.601 6.497-6.603 6.603a.556.556 0 0 0 .785.786l6.61-6.61 6.497 6.397a.556.556 0 0 0 .78-.792l-6.491-6.39L14.838.948a.556.556 0 0 0-.786-.785l-6.5 6.5L.945.16Z",
                clipRule: "evenodd",
              }),
            })
          : (0, n.jsxs)("svg", {
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ...a,
              children: [
                (0, n.jsx)("path", {
                  d: "M18 6L6 18",
                  stroke: "currentColor",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, n.jsx)("path", {
                  d: "M6 6L18 18",
                  stroke: "currentColor",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
              ],
            });
      });
      l.displayName = "CloseIcon";
    },
    9433: function (e, t, a) {
      "use strict";
      a.d(t, {
        GeneralInfo: function () {
          return f;
        },
      });
      var n = a(57437),
        l = a(28664),
        i = a.n(l),
        s = a(2265),
        r = a(36760),
        o = a.n(r),
        c = a(33145),
        d = a(29194),
        u = a(91960),
        m = a(3562),
        p = a(29557),
        g = a(34085);
      let h = (e, t) => {
          let a = e.toString();
          return a.includes(".") && a.length - a.indexOf(".") > t + 1
            ? parseFloat(a.slice(0, a.indexOf(".") + t + 1))
            : e;
        },
        f = s.memo((e) => {
          let { infoBlocks: t, className: a } = e,
            l = (0, u.TL)(),
            {
              store: {
                TokenomicsEntity: { bondedTokens: r, inflation: f },
                CoinEntity: {
                  coins: {
                    entangle: { marketCap: x, totalSupply: _ },
                  },
                },
              },
              asyncActions: {
                Tokenomics: { getBondedTokens: b },
                Coin: { getMarketCap: C, getSupply: v },
              },
            } = (0, u.oR)((e) => ({
              TokenomicsEntity: e.TokenomicsEntity,
              CoinEntity: e.CoinEntity,
            }));
          (0, s.useEffect)(() => {
            l(b()), l(v("entangle")), l(C("entangle"));
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
            N = (_ * f) / Number(r);
          (0, s.useEffect)(() => {
            j.marketCap.start(x),
              j.inflation.start(h(f, 2)),
              j.APR.start(h(N, 2)),
              j.supply.start(h(_, 2)),
              j.totalStaked.start(h(Number(r), 2));
          }, [
            j.marketCap,
            j.inflation,
            j.APR,
            j.supply,
            j.totalStaked,
            x,
            f,
            N,
            _,
            r,
          ]);
          let k = h(f, 2),
            y = h(N, 2),
            P = h(_, 2),
            w = h(Number(r), 2),
            B = (0, s.useMemo)(() => {
              let e = (0, n.jsxs)("div", {
                className: i().supply,
                children: [
                  (0, n.jsx)(c.default, {
                    className: "w-6 h-6",
                    src: (0, m.Sv)(p.ZP.chainId.toString()),
                    width: 24,
                    height: 24,
                    alt: `${g.f[p.ZP.chainId]} Icon`,
                  }),
                  (0, n.jsxs)("span", {
                    children: [
                      (0, n.jsx)(d.q.span, {
                        children: j.supply.to((e) =>
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
                  value: (0, n.jsxs)(n.Fragment, {
                    children: [
                      "$",
                      (0, n.jsx)(d.q.span, {
                        children: j.marketCap.to((e) =>
                          e.toLocaleString("en", { maximumFractionDigits: 0 })
                        ),
                      }),
                    ],
                  }),
                },
                {
                  title: "Inflation",
                  value: (0, n.jsxs)(n.Fragment, {
                    children: [
                      (0, n.jsx)(d.q.span, {
                        children: j.inflation.to((e) =>
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
                  value: (0, n.jsxs)(n.Fragment, {
                    children: [
                      (0, n.jsx)(d.q.span, {
                        children: j.APR.to((e) =>
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
                  value: (0, n.jsx)(d.q.span, {
                    children: j.totalStaked.to((e) =>
                      e.toLocaleString("en", {
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 2,
                      })
                    ),
                  }),
                },
              ];
            }, [y, k, P, w, x]);
          return (0, n.jsx)("div", {
            className: o()(i().generalInfo, a),
            children: (t || B).map((e, t) => {
              let { title: a, value: l } = e;
              return (0, n.jsxs)(
                "div",
                {
                  className: i().infoBlock,
                  children: [
                    (0, n.jsx)("span", {
                      className: i().infoBlockTitle,
                      children: a,
                    }),
                    (0, n.jsx)("span", {
                      className: i().infoBlockValue,
                      children: l,
                    }),
                  ],
                },
                t
              );
            }),
          });
        });
      f.displayName = "GeneralInfo";
    },
    93946: function (e, t, a) {
      "use strict";
      a.d(t, {
        ModalContainer: function () {
          return d;
        },
      });
      var n = a(57437),
        l = a(4618),
        i = a.n(l),
        s = a(2265),
        r = a(36760),
        o = a.n(r),
        c = a(25864);
      let d = (e) => {
        let {
          enable: t = !1,
          title: a,
          children: l,
          isCloseIcon: r,
          className: d,
          modalClassName: u,
          titleClassName: m,
          titleTextClassName: p,
          onClose: g,
          styleBasic: h,
          closeIconClassName: f,
          closeIconThin: x,
        } = e;
        return ((0, s.useEffect)(() => {
          if ("undefined" != typeof document && void 0 !== document.body && t)
            return (
              (document.body.className = i().bodyOverflowHidden),
              () => {
                document.body.className = "";
              }
            );
        }, []),
        t)
          ? (0, n.jsx)("div", {
              className: o()(i().modalContainer, d, {
                [i().modalContainerBasic]: h,
              }),
              onClick: g,
              children: (0, n.jsxs)("div", {
                className: o()(i().modal, u, { [i().modalBasic]: h }),
                onClick: (e) => {
                  e.stopPropagation();
                },
                children: [
                  a &&
                    (0, n.jsxs)("div", {
                      className: o()(i().modalHeader, m),
                      children: [
                        (0, n.jsx)("div", {
                          className: o()(i().title, p, { [i().titleBasic]: h }),
                          children: a,
                        }),
                        r &&
                          (0, n.jsx)("button", {
                            className: o()(
                              i().closeIcon,
                              { [i().closeIconBasic]: h },
                              f
                            ),
                            onClick: g,
                            children: (0, n.jsx)(c.T, {
                              type: x ? "thin" : h ? "new" : "base",
                            }),
                          }),
                      ],
                    }),
                  h && (0, n.jsx)("div", { className: i().divider }),
                  l,
                ],
              }),
            })
          : null;
      };
    },
    61411: function (e, t, a) {
      "use strict";
      a.d(t, {
        PathTabs: function () {
          return m;
        },
      });
      var n = a(57437),
        l = a(36760),
        i = a.n(l),
        s = a(48303),
        r = a.n(s),
        o = a(99376),
        c = a(2265),
        d = a(27648);
      let u = (e, t) => e.find((e) => e.path === t) || e[0],
        m = (e) => {
          let { tabs: t } = e,
            a = (0, o.usePathname)(),
            [l, s] = (0, c.useState)(u(t, a)),
            m = (e) => s(e);
          return (0, n.jsx)("ul", {
            className: r().tabs,
            children: t.map((e) => {
              let { path: t, name: a } = e;
              return (0, n.jsx)(
                "li",
                {
                  children: (0, n.jsx)(d.default, {
                    className: i()(r().tabs__item, {
                      [r().tabs__item_active]: l?.path === t,
                    }),
                    href: t,
                    onClick: () => m(e),
                    children: a,
                  }),
                },
                t
              );
            }),
          });
        };
    },
    24919: function (e, t, a) {
      "use strict";
      a.d(t, {
        WR: function () {
          return n.GeneralInfo;
        },
        F0: function () {
          return l.ModalContainer;
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
      var n = a(9433),
        l = a(93946),
        i = a(57437),
        s = a(52541),
        r = a(2265),
        o = a(33145);
      let c = {
          "photon-gov": "/protocols/photon-gov.png",
          entangle: "/protocols/entangle-clear.png",
          borpa: "/protocols/gorples.png",
          gorples: "/protocols/gorples.png",
          gorpa: "/protocols/gorples.png",
          "universal-data-feeds": "/protocols/udf.png",
          "udf-v1.1": "/protocols/udf.png",
        },
        d = (e) => {
          let {
              id: t,
              height: a,
              width: n,
              style: l = { marginRight: "10px" },
              ...d
            } = e,
            u = (0, r.useMemo)(() => {
              let e = t?.toLowerCase();
              return e in c
                ? c[e]
                : "data:image/svg+xml;utf8," + encodeURIComponent((0, s.Y)(t));
            }, [t]);
          return (0, i.jsx)(o.default, {
            width: n,
            height: a,
            src: u,
            alt: t,
            style: l,
            quality: 100,
            ...d,
          });
        };
      var u = a(23757),
        m = a(61411);
    },
    66790: function (e, t, a) {
      "use strict";
      a.d(t, {
        v: function () {
          return n;
        },
      });
      let n = (e, t) => JSON.stringify(e) === JSON.stringify(t);
    },
    14822: function (e) {
      e.exports = {
        nameColumnData: "ValidatorColumnData_nameColumnData__YfNW0",
        nameAndAvatarContainer:
          "ValidatorColumnData_nameAndAvatarContainer__k1RqA",
        avatarUrl: "ValidatorColumnData_avatarUrl__l_dWl",
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
    52541: function (e, t, a) {
      "use strict";
      function n(e) {
        return (
          e.split("").reduce((e, t) => -((e ^ t.charCodeAt(0)) * 5), 5) >>> 2
        );
      }
      function l(e = "", t = 95, a = 45, l = n) {
        let i = l(e);
        return (
          [...Array(e ? 25 : 0)].reduce(
            (e, t, a) =>
              i & (1 << a % 15)
                ? e +
                  `<rect x="${a > 14 ? 7 - ~~(a / 5) : ~~(a / 5)}" y="${
                    a % 5
                  }" width="1" height="1"/>`
                : e,
            `<svg viewBox="-1.5 -1.5 8 8" xmlns="http://www.w3.org/2000/svg" fill="hsl(${
              (i % 9) * 40
            } ${t}% ${a}%)">`
          ) + "</svg>"
        );
      }
      a.d(t, {
        Y: function () {
          return l;
        },
      }),
        globalThis.customElements?.get("minidenticon-svg") ||
          globalThis.customElements?.define(
            "minidenticon-svg",
            class e extends HTMLElement {
              static observedAttributes = [
                "username",
                "saturation",
                "lightness",
              ];
              static #e = {};
              #t = !1;
              connectedCallback() {
                this.#a(), (this.#t = !0);
              }
              attributeChangedCallback() {
                this.#t && this.#a();
              }
              #a() {
                let t = e.observedAttributes.map(
                    (e) => this.getAttribute(e) || void 0
                  ),
                  a = t.join(",");
                this.innerHTML = e.#e[a] ??= l(...t);
              }
            }
          );
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
        return e((e.s = 39615));
      }
    ),
      (_N_E = e.O());
  },
]);
