(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8356],
  {
    45692: function (e, t, a) {
      Promise.resolve().then(a.bind(a, 83726));
    },
    83726: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          MessageTable: function () {
            return H;
          },
        });
      var s = a(57437),
        n = a(99376),
        r = a(47633),
        i = a(2265),
        l = a(34085),
        o = a(3562),
        c = a(26185),
        d = a(66107),
        u = (e) => {
          let { data: t } = (0, d.DE)({}),
            a = t?.operations || [];
          return (0, i.useMemo)(() => {
            let t = e.findIndex(
              (e) => "title" in e && "Destination" === e.name
            );
            return (
              -1 !== t &&
                "options" in e[t] &&
                (e[t].options = a
                  .map((e) => {
                    let { dst_chain_id: t } = e,
                      a = l.f[t.toString()];
                    return a
                      ? {
                          value: t,
                          searchData: a,
                          element: (0, s.jsxs)("div", {
                            className: "flex gap-2 justify-center items-center",
                            children: [
                              (0, s.jsx)(c.f, {
                                type: "color",
                                width: 22,
                                height: 22,
                                src: (0, o.BP)(t, "color"),
                                alt: `${a} Icon`,
                              }),
                              (0, s.jsx)("span", {
                                className:
                                  "capitalize leading-snug tracking-tight",
                                children: a,
                              }),
                            ],
                          }),
                        }
                      : null;
                  })
                  .filter(Boolean)),
              e
            );
          }, [a]);
        },
        m = (e) => {
          let { data: t } = (0, d.og)({}),
            a = t?.operations || [];
          return (0, i.useMemo)(() => {
            let t = e.findIndex((e) => "title" in e && "Source" === e.name);
            return (
              -1 !== t &&
                "options" in e[t] &&
                (e[t].options = a
                  .map((e) => {
                    let { src_chain_id: t } = e,
                      a = l.f[t.toString()];
                    return a
                      ? {
                          value: t,
                          searchData: a,
                          element: (0, s.jsxs)("div", {
                            className: "flex gap-2 justify-center items-center",
                            children: [
                              (0, s.jsx)(c.f, {
                                type: "color",
                                width: 22,
                                height: 22,
                                src: (0, o.BP)(t, "color"),
                                alt: `${a} Icon`,
                              }),
                              (0, s.jsx)("span", {
                                className:
                                  "capitalize leading-snug tracking-tight",
                                children: a,
                              }),
                            ],
                          }),
                        }
                      : null;
                  })
                  .filter(Boolean)),
              e
            );
          }, [a]);
        },
        g = a(91960),
        x = a(36760),
        h = a.n(x),
        p = (e) => {
          let { strokeColorClass: t = "stroke-neutral-50" } = e;
          return (0, s.jsxs)("svg", {
            className: h()("transition-all min-w-[16px]", t, {
              "rotate-90": !0,
            }),
            width: "16",
            height: "16",
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, s.jsx)("path", {
                d: "M8 12.6663V3.33301",
                stroke: "inherit",
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
              (0, s.jsx)("path", {
                d: "M3.33301 7.99967L7.99967 3.33301L12.6663 7.99967",
                stroke: "inherit",
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
            ],
          });
        },
        f = a(28020),
        b = a(77398),
        j = a.n(b),
        N = (0, i.memo)((e) => {
          let { created: t } = e,
            a = (0, i.useMemo)(() => j()(t).utc(!0), [t]),
            [n, r] = (0, i.useState)(j()(a).fromNow()),
            l = (0, i.useRef)(null),
            o = () => {
              r(j()(a).fromNow());
              let e = j()(new Date());
              j().duration(e.diff(a)).asMinutes() >= 60 &&
                l.current &&
                clearInterval(l.current);
            };
          return (
            (0, i.useEffect)(
              () => (
                o(),
                (l.current = window.setInterval(() => o(), 1e3)),
                () => {
                  l.current && clearInterval(l.current);
                }
              ),
              []
            ),
            (0, s.jsx)(f.t, {
              placement: "bottom",
              contentClassName: "px-2 py-1",
              tooltipContent: j()(t).format("ddd, DD MMM YYYY, hh:mm:ss Z"),
              children: (0, s.jsx)("div", {
                className:
                  "flex gap-2 justify-end items-center text-base first-letter:uppercase",
                children: n.replace("an ", "1 "),
              }),
            })
          );
        }),
        v = a(33145);
      let w = {
        Inflight: "Processing",
        Processing: "Processing",
        Delivered: "Delivered",
        Failed: "Failed",
      };
      var C = a(57552),
        y = {
          src: "/_next/static/media/link_external.9173ece8.svg",
          height: 22,
          width: 22,
          blurWidth: 0,
          blurHeight: 0,
        },
        k = a(98786),
        P = {
          src: "/_next/static/media/copy_msg.7466e56e.svg",
          height: 22,
          width: 22,
          blurWidth: 0,
          blurHeight: 0,
        },
        S = a(29557),
        D = (0, i.memo)((e) => {
          let { value: t, chainId: a, search: n } = e,
            r = (0, k.m)();
          if (!t || t.length < 4) return null;
          let i = "address" === n && a + "" == S.ZP.chainId + "";
          return (0, s.jsxs)("div", {
            className: "flex items-center",
            children: [
              (0, s.jsx)(v.default, {
                src: P,
                onClick: (e) => {
                  e.stopPropagation(), r(t);
                },
                alt: "Copy",
                className: "min-w-[22px]",
              }),
              !i &&
                (0, s.jsx)(v.default, {
                  src: y,
                  onClick: (e) => {
                    if ((e.stopPropagation(), a === S.m5.TON.chainId)) {
                      (0, C.Ro)(t);
                      return;
                    }
                    (0, C.k8)(t, n, a);
                  },
                  alt: "Go to explorer",
                  className: "min-w-[22px]",
                }),
            ],
          });
        }),
        _ = a(55590),
        I = a.n(_),
        W = () =>
          (0, s.jsx)("div", {
            className:
              "w-4 h-4 p-0.5 justify-center items-center gap-0.5 inline-flex",
            children: (0, s.jsxs)("div", {
              className:
                "w-full justify-center items-center gap-0.5 inline-flex",
              children: [
                (0, s.jsx)("div", {
                  className: h()(
                    I().proccessingAnimation,
                    "bg-[#f3ff6a] w-0.5 h-0.5 rounded-full"
                  ),
                }),
                (0, s.jsx)("div", {
                  className: h()(
                    I().proccessingAnimation,
                    "bg-[#f3ff6a] w-0.5 h-0.5 rounded-full"
                  ),
                }),
                (0, s.jsx)("div", {
                  className: h()(
                    I().proccessingAnimation,
                    "bg-[#f3ff6a] w-0.5 h-0.5 rounded-full"
                  ),
                }),
              ],
            }),
          }),
        O = a(75466),
        L = a(24919),
        E = a(28369),
        M = a(27648);
      let A = [
          {
            name: "Status",
            title: "Select Status",
            type: "option",
            withCheckIcon: !0,
            options: [
              {
                value: !1,
                element: (0, s.jsx)(s.Fragment, { children: "Processing" }),
              },
              {
                value: !0,
                element: (0, s.jsx)(s.Fragment, { children: "Delivered" }),
              },
            ],
          },
          {
            name: "Source",
            title: "Select Network",
            type: "option",
            // options: [],
          },
          {
            name: "Destination",
            title: "Select Network",
            type: "option",
            // options: [],
          },
          {
            name: "Protocols",
            title: "Select Protocols",
            type: "option",
            options: [],
          },
          { name: "Created", type: "date-range" },
        ],
        T = [
          {
            name: "Status",
            getData: (e) => {
              let { status: t } = e,
                a = w[t];
              return (0, s.jsxs)("div", {
                className: h()(
                  "flex items-center gap-2 rounded-[120px] py-1 px-3.5 w-fit text-sm leading-normal tracking-[.7px]",
                  {
                    "bg-[#1B2000] text-[#F3FF6A]": "Processing" == a,
                    "bg-[#011F15] text-[#00F8A5]": "Delivered" == a,
                    "bg-[#260101] text-[#F87171]": "Failed" == a,
                  }
                ),
                children: [
                  (0, s.jsx)(v.default, {
                    src: `/icons/message_status/${a}.svg`,
                    width: 17,
                    height: 17,
                    alt: "icon",
                  }),
                  (0, s.jsx)("span", { children: a }),
                ],
              });
            },
            headerWrapperClassName:
              "w-[100px] lg:w-auto text-base leading-[157.143%] tracking-[.32px]",
            tableCellProps: { align: "left" },
            cellWrapperClassName: "!text-neutral-60 text-base",
          },
          {
            name: "Source-Destination",
            nameElement: (0, s.jsxs)("div", {
              className: "flex gap-2 items-center",
              children: [
                "Source Tx Hash ",
                (0, s.jsx)(p, {}),
                " Destination Tx Hash",
              ],
            }),
            getData: (e) => {
              let {
                  destination: t,
                  destinationTxHash: a,
                  sourceTxHash: n,
                  status: r,
                } = e,
                i =
                  n.length > 4
                    ? `${n.slice(0, 4)}...${n.slice(-8)}`
                    : (0, s.jsx)(O.O, { width: 128, height: 24 }),
                l =
                  a.length > 4
                    ? `${a.slice(0, 4)}...${a.slice(-8)}`
                    : (0, s.jsx)(O.O, { width: 128, height: 24 }),
                o = w[r];
              return (0, s.jsxs)("div", {
                className: "flex gap-2 items-center",
                children: [
                  (0, s.jsxs)("div", {
                    className: "flex gap-1.5 justify-center items-center",
                    children: [
                      (0, s.jsx)(c.f, {
                        type: "table",
                        width: 24,
                        height: 24,
                        src: t.from.image.src,
                        alt: t.from.image.alt,
                        className: "min-w-[24px]",
                      }),
                      (0, s.jsx)("span", {
                        className:
                          "w-28 text-base leading-[163.725%] tracking-[0.32px]",
                        children: i,
                      }),
                      (0, s.jsx)(D, {
                        search: "tx",
                        chainId: t.from.chainId,
                        value: n,
                      }),
                    ],
                  }),
                  "Delivered" === o || "Failed" === o
                    ? (0, s.jsx)(p, {
                        strokeColorClass:
                          "Delivered" === o ? "stroke-[#00F8A5]" : void 0,
                      })
                    : (0, s.jsx)(W, {}),
                  (0, s.jsxs)("div", {
                    className: "flex gap-2 justify-center items-center",
                    children: [
                      (0, s.jsx)(c.f, {
                        type: "table",
                        width: 24,
                        height: 24,
                        src: t.to.image.src,
                        alt: t.to.image.alt,
                        className: "min-w-[24px]",
                      }),
                      (0, s.jsx)("span", {
                        className:
                          "w-28 text-base leading-[163.725%] tracking-[0.32px]",
                        children: l,
                      }),
                      (0, s.jsx)(D, {
                        search: "tx",
                        chainId: t.to.chainId,
                        value: a,
                      }),
                    ],
                  }),
                ],
              });
            },
            headerWrapperClassName:
              "text-base leading-[157.143%] tracking-[.32px]",
            cellWrapperClassName: "!text-neutral-60 text-base",
          },
          {
            name: "Sender Address",
            getData: (e) => {
              let { senderTx: t, destination: a } = e;
              return (0, s.jsxs)("div", {
                className: "flex items-center",
                children: [
                  (0, s.jsx)("p", {
                    className: "w-[12.5rem] text-base tracking-[0.32px]",
                    children: t.length
                      ? `${t.slice(0, 20)}...`
                      : (0, s.jsx)(O.O, { width: 192, height: 24 }),
                  }),
                  !!t.length &&
                    (0, s.jsx)(D, {
                      value: t,
                      search: "address",
                      chainId: a.from.chainId,
                    }),
                ],
              });
            },
            objectKey: "destinationTxHash",
            headerWrapperClassName:
              "text-base leading-[157.143%] tracking-[.32px]",
            cellWrapperClassName: "!text-neutral-60 text-base",
          },
          {
            name: "Protocol",
            headerWrapperClassName:
              "text-base leading-[157.143%] tracking-[.32px]",
            getData: (e) => {
              let {
                protocol: { name: t, id: a },
              } = e;
              return (0, s.jsxs)(M.default, {
                onClick: (e) => e.stopPropagation(),
                href: `#`,
                className: "flex items-center",
                children: [
                  (0, s.jsx)(L.oi, { id: t, width: 26, height: 26 }),
                  (0, s.jsx)("span", {
                    className:
                      "text-white text-base leading-[163.725%] text-left tracking-[0.32px]",
                    children: (0, E.$)(t),
                  }),
                ],
              });
            },
            cellWrapperClassName:
              "min-w-[150px] lg:min-w-auto !text-neutral-60 text-base",
          },
          {
            name: "Created",
            headerWrapperClassName:
              "min-w-[7rem] md:justify-end justify-end text-base leading-[157.143%] tracking-[.32px]",
            DataComponent: N,
            cellWrapperClassName: "!text-neutral-60 text-base",
          },
        ],
        $ = [
          {
            name: "Status",
            getData: () => (0, s.jsx)(O.O, { width: 130, height: 24 }),
            headerWrapperClassName:
              "w-[100px] lg:w-auto text-base leading-[157.143%] tracking-[.32px]",
            tableCellProps: { align: "left" },
            cellWrapperClassName: "!text-neutral-60 text-base",
          },
          {
            name: "Source-Destination",
            nameElement: (0, s.jsxs)("div", {
              className: "flex gap-2 items-center",
              children: [
                "Source Tx Hash ",
                (0, s.jsx)(p, {}),
                " Destination Tx Hash",
              ],
            }),
            getData: () => (0, s.jsx)(O.O, { width: 445, height: 24 }),
            headerWrapperClassName:
              "text-base leading-[157.143%] tracking-[.32px]",
            cellWrapperClassName: "!text-neutral-60 text-base",
          },
          {
            name: "Sender Address",
            getData: () => (0, s.jsx)(O.O, { width: 270, height: 24 }),
            objectKey: "destinationTxHash",
            headerWrapperClassName:
              "text-base leading-[157.143%] tracking-[.32px]",
            cellWrapperClassName: "!text-neutral-60 text-base",
          },
          {
            name: "Protocol",
            headerWrapperClassName:
              "text-base leading-[157.143%] tracking-[.32px]",
            getData: () => (0, s.jsx)(O.O, { width: 130, height: 24 }),
            cellWrapperClassName:
              "min-w-[150px] lg:min-w-auto !text-neutral-60 text-base",
          },
          {
            name: "Created",
            headerWrapperClassName:
              "min-w-[7rem] md:justify-end justify-end text-base leading-[157.143%] tracking-[.32px]",
            getData: () => (0, s.jsx)(O.O, { width: 130, height: 24 }),
            cellWrapperClassName: "!text-neutral-60 text-base",
          },
        ];
      var F = a(74732),
        B = a(72694);
      let H = () => {
        let e = (0, g.TL)(),
          { push: t } = (0, n.useRouter)(),
          [a, l] = (0, i.useState)({}),
          {
            asyncActions: {
              Message: { getMessage: o },
            },
          } = (0, g.oR)((e) => ({ MessageEntity: e.MessageEntity })),
          { state: c, loadNextPage: d } = (0, F.y)(a),
          { items: x, loading: h, isNextPageLoading: p } = c,
          f = m(u((0, r.Z)(A))),
          b = (0, B.Sf)(() => {
            d();
          }, 500);
        return (0, s.jsx)(L.iA, {
          title: (0, s.jsxs)("h3", {
            className: "flex gap-2 items-center text-xl",
            children: [
              (0, s.jsx)("div", {
                className:
                  "w-3.5 h-3.5 rounded-full bg-[rgba(6,224,151,0.3)] flex justify-center items-center",
                children: (0, s.jsx)("div", {
                  className: "w-2 h-2 rounded-full bg-[#06E097] animate-pulse",
                }),
              }),
              "Live messages",
            ],
          }),
          filters: f,
          isLoading: h,
          isNextPageLoading: p,
          selectHandler: (a) => {
            e(o(a.hash)), t(`#`, { scroll: !1 });
          },
          contentClassName: "rounded-2xl",
          columns: T,
          filterHandler: (e) => {
            l(e);
          },
          intersectingHandler: (e) => {
            e && b();
          },
          data: x,
          skeletonColumns: $,
        });
      };
    },
    74732: function (e, t, a) {
      "use strict";
      a.d(t, {
        y: function () {
          return g;
        },
      });
      var s = a(2265),
        n = a(91960),
        r = a(66790),
        i = a(66107),
        l = a(25961),
        o = a(64587),
        c = a(61764),
        d = a(43871),
        u = a(69364);
      let m = {
          loading: !0,
          hasNextPage: !1,
          isNextPageLoading: !0,
          items: [],
        },
        g = (e) => {
          let [t, a] = (0, s.useState)(m),
            g = (0, s.useRef)(null),
            x = (0, s.useMemo)(() => (0, c.GF)(e || {}), [e]),
            h = (0, n.TL)(),
            p = (0, s.useCallback)((e) => {
              a((t) => {
                let a = e(t);
                return (0, r.v)(t, a) ? t : a;
              });
            }, []),
            f = (0, s.useCallback)(async () => {
              g.current?.unsubscribe(), (g.current = null), a(m);
            }, []),
            b = (0, s.useCallback)(
              async (e, t, a) => {
                let { data: s } = await h(
                    i.ci.endpoints.getMessages.initiate({
                      limit: e,
                      offset: t,
                      where: a,
                    })
                  ),
                  n = s?.operations?.length || 0;
                return { data: s, itemsLength: n };
              },
              [h]
            );
          (0, l.K)(async () => {
            await f();
            let { data: e, itemsLength: t } = await b(51, 1, x);
            p((a) => {
              let s = (0, o.t)({
                data: { operations: (0, c.aB)(e?.operations || [], a.items) },
              });
              return {
                ...a,
                items: [...a.items, ...s],
                isNextPageLoading: !1,
                loading: !1,
                hasNextPage: 51 === t,
              };
            }),
              (g.current = d.KD.subscribe({
                query: u.fy,
                variables: { limit: 1, offset: 0, where: x },
              }).subscribe({
                next(e) {
                  let { data: t } = e,
                    a = t?.operations?.length || 0;
                  p((e) => {
                    let s = (0, o.t)({
                      data: {
                        operations: (0, c.aB)(t?.operations || [], e.items),
                      },
                      loading: !1,
                    });
                    return {
                      ...e,
                      loading: !1,
                      items: [...s, ...e.items],
                      hasNextPage: e.hasNextPage || 51 === a,
                      isNextPageLoading: !1,
                    };
                  });
                },
                error() {
                  p((e) => ({ ...e, loading: !1 }));
                },
              }));
          }, [x]);
          let j = async () => {
            if (t.isNextPageLoading || t.loading) return;
            p((e) => ({ ...e, isNextPageLoading: !0 }));
            let { data: e, itemsLength: a } = await b(51, t.items.length, x);
            p((t) => {
              let s = (0, o.t)({
                data: { operations: (0, c.aB)(e?.operations || [], t.items) },
                loading: !1,
              });
              return {
                ...t,
                items: [...t.items, ...s],
                isNextPageLoading: !1,
                hasNextPage: 51 === a,
              };
            });
          };
          return { state: t, loadNextPage: j };
        };
    },
    47633: function (e, t, a) {
      "use strict";
      var s = a(57437),
        n = a(2265),
        r = a(24919),
        i = a(28369),
        l = a(93805),
        o = a(48392);
      t.Z = (e) => {
        let t = (0, o.mt)((0, l.F)({})) || [];
        return (0, n.useMemo)(() => {
          let a = [...e],
            n = a.findIndex((e) => "name" in e && "Protocols" === e.name);
          return (
            -1 !== n &&
              "options" in a[n] &&
              (a[n].options = Object.values(t).map((e) => ({
                value: e.protocol_id,
                searchData: e.name.name,
                element: (0, s.jsxs)("div", {
                  className: "flex gap-2 justify-center items-center",
                  children: [
                    (0, s.jsx)(r.oi, {
                      style: {},
                      id: e.name.name,
                      width: 22,
                      height: 2,
                    }),
                    (0, s.jsx)("span", {
                      className: "tracking-[.32px] leading-snug",
                      children: (0, i.$)(e.name.name),
                    }),
                  ],
                }),
              }))),
            a
          );
        }, [t]);
      };
    },
    98786: function (e, t, a) {
      "use strict";
      a.d(t, {
        m: function () {
          return r;
        },
      });
      var s = a(24461),
        n = a(44406);
      let r = () => {
        let e = (0, s.Xq)();
        return async (t) => {
          try {
            await navigator.clipboard.writeText(t),
              e(
                {
                  title: n.wn.SUCCESS.title,
                  type: n.wn.SUCCESS.type,
                  message: n.uu.COPIED_TO_CLIPBOARD,
                },
                5e3
              );
          } catch (e) {
            console.error("Error:", e);
          }
        };
      };
    },
    25961: function (e, t, a) {
      "use strict";
      a.d(t, {
        K: function () {
          return n;
        },
      });
      var s = a(2265);
      function n(e, t) {
        let a = (0, s.useRef)(void 0);
        (0, s.useEffect)(() => {
          (a.current && JSON.stringify(a.current) === JSON.stringify(t)) ||
            ((a.current = t), e());
        }, [e, t]);
      }
    },
    26185: function (e, t, a) {
      "use strict";
      a.d(t, {
        f: function () {
          return l;
        },
      });
      var s = a(57437),
        n = a(2265),
        r = a(33145),
        i = a(3562);
      let l = (0, n.memo)((e) => {
        let { type: t = "rsz", src: a, alt: l, ...o } = e,
          [c, d] = (0, n.useState)(!1),
          u = (0, n.useMemo)(
            () =>
              "rsz" === t ? (0, i.Sv)(1234567890) : (0, i.BP)(1234567890, t),
            [t]
          );
        return (0, s.jsx)(r.default, {
          ...o,
          alt: l,
          src: c ? u : a,
          onError: () => d(!0),
        });
      });
      l.displayName = "ChainIcon";
    },
    28020: function (e, t, a) {
      "use strict";
      a.d(t, {
        t: function () {
          return m;
        },
      });
      var s = a(57437),
        n = a(2265),
        r = a(26772),
        i = a(65802),
        l = a(81491),
        o = a(97362),
        c = a(50339),
        d = a(36760),
        u = a.n(d);
      let m = (0, n.memo)((e) => {
        let {
            children: t,
            tooltipContent: a,
            placement: n = "bottom-end",
            contentClassName: d,
          } = e,
          m = (0, c.a)(1024);
        return (0, s.jsx)(s.Fragment, {
          children: m
            ? (0, s.jsxs)(r.j, {
                placement: n,
                classNames: {
                  base: [
                    "before:bg-neutral-20 dark:before:bg-neutral-20 dark:before:border-neutral-30 dark:before:mt-[3px]",
                  ],
                },
                children: [
                  (0, s.jsx)(i.b, { children: t }),
                  (0, s.jsx)(l.g, {
                    children: (0, s.jsx)("div", {
                      className: u()(
                        "text-neutral-90 bg-neutral-20 border border-neutral-30 relative rounded-lg text-medium",
                        d
                      ),
                      children: a,
                    }),
                  }),
                ],
              })
            : (0, s.jsx)(o.e, {
                placement: n,
                classNames: {
                  base: [
                    "before:bg-neutral-20",
                    "dark:before:bg-neutral-20 dark:before:border-neutral-30 dark:before:mt-[3px]",
                  ],
                },
                content: (0, s.jsx)("div", {
                  className: u()(
                    "text-neutral-90 bg-neutral-20 border border-neutral-30 relative rounded-lg text-medium",
                    d
                  ),
                  children: a,
                }),
                children: t,
              }),
        });
      });
      m.displayName = "PopoverTooltip";
    },
    66790: function (e, t, a) {
      "use strict";
      a.d(t, {
        v: function () {
          return s;
        },
      });
      let s = (e, t) => JSON.stringify(e) === JSON.stringify(t);
    },
    55590: function (e) {
      e.exports = {
        proccessingAnimation: "styles_proccessingAnimation__DLm29",
        ping: "styles_ping__82Uk_",
        fadeIn: "styles_fadeIn___cNOJ",
        fadeOut: "styles_fadeOut__3hBWa",
      };
    },
    52541: function (e, t, a) {
      "use strict";
      function s(e) {
        return (
          e.split("").reduce((e, t) => -((e ^ t.charCodeAt(0)) * 5), 5) >>> 2
        );
      }
      function n(e = "", t = 95, a = 45, n = s) {
        let r = n(e);
        return (
          [...Array(e ? 25 : 0)].reduce(
            (e, t, a) =>
              r & (1 << a % 15)
                ? e +
                  `<rect x="${a > 14 ? 7 - ~~(a / 5) : ~~(a / 5)}" y="${
                    a % 5
                  }" width="1" height="1"/>`
                : e,
            `<svg viewBox="-1.5 -1.5 8 8" xmlns="http://www.w3.org/2000/svg" fill="hsl(${
              (r % 9) * 40
            } ${t}% ${a}%)">`
          ) + "</svg>"
        );
      }
      a.d(t, {
        Y: function () {
          return n;
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
                this.innerHTML = e.#e[a] ??= n(...t);
              }
            }
          );
    },
  },
  function (e) {
    e.O(
      0,
      [
        6560, 1581, 8497, 4350, 6918, 8218, 3814, 6990, 9228, 8933, 1293, 9543,
        6276, 9023, 9584, 483, 9257, 2971, 2117, 1744,
      ],
      function () {
        return e((e.s = 45692));
      }
    ),
      (_N_E = e.O());
  },
]);
