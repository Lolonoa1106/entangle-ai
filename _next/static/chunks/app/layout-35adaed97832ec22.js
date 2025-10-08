(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3185],
  {
    65816: function (e, t, n) {
      Promise.resolve().then(n.bind(n, 88507)),
        Promise.resolve().then(n.bind(n, 41930)),
        Promise.resolve().then(n.bind(n, 20896)),
        Promise.resolve().then(n.bind(n, 23428)),
        Promise.resolve().then(n.bind(n, 63602)),
        Promise.resolve().then(n.bind(n, 99759)),
        Promise.resolve().then(n.bind(n, 31400)),
        Promise.resolve().then(n.bind(n, 29718)),
        Promise.resolve().then(n.bind(n, 13281)),
        Promise.resolve().then(n.bind(n, 64258)),
        Promise.resolve().then(n.bind(n, 80605)),
        Promise.resolve().then(n.bind(n, 24895)),
        Promise.resolve().then(n.t.bind(n, 88003, 23)),
        Promise.resolve().then(n.t.bind(n, 98732, 23)),
        Promise.resolve().then(n.t.bind(n, 96935, 23)),
        Promise.resolve().then(n.bind(n, 70335)),
        Promise.resolve().then(n.bind(n, 64707)),
        Promise.resolve().then(n.bind(n, 89472)),
        Promise.resolve().then(n.bind(n, 91167)),
        Promise.resolve().then(n.bind(n, 85961)),
        Promise.resolve().then(n.bind(n, 79943)),
        Promise.resolve().then(n.bind(n, 88394)),
        Promise.resolve().then(n.bind(n, 48793)),
        Promise.resolve().then(n.bind(n, 43998)),
        Promise.resolve().then(n.bind(n, 58957)),
        Promise.resolve().then(n.bind(n, 41924)),
        Promise.resolve().then(n.bind(n, 11413)),
        Promise.resolve().then(n.bind(n, 12364)),
        Promise.resolve().then(n.bind(n, 24377)),
        Promise.resolve().then(n.bind(n, 95573)),
        Promise.resolve().then(n.bind(n, 99724)),
        Promise.resolve().then(n.bind(n, 85199)),
        Promise.resolve().then(n.bind(n, 1970)),
        Promise.resolve().then(n.bind(n, 7133)),
        Promise.resolve().then(n.bind(n, 36558)),
        Promise.resolve().then(n.bind(n, 3208)),
        Promise.resolve().then(n.bind(n, 3743)),
        Promise.resolve().then(n.bind(n, 77419)),
        Promise.resolve().then(n.bind(n, 71923)),
        Promise.resolve().then(n.bind(n, 3403)),
        Promise.resolve().then(n.bind(n, 92799)),
        Promise.resolve().then(n.bind(n, 5946)),
        Promise.resolve().then(n.bind(n, 62813)),
        Promise.resolve().then(n.bind(n, 7280)),
        Promise.resolve().then(n.bind(n, 53943)),
        Promise.resolve().then(n.bind(n, 75939)),
        Promise.resolve().then(n.bind(n, 60989)),
        Promise.resolve().then(n.bind(n, 36237)),
        Promise.resolve().then(n.bind(n, 52809)),
        Promise.resolve().then(n.bind(n, 39598)),
        Promise.resolve().then(n.bind(n, 98408)),
        Promise.resolve().then(n.bind(n, 13840)),
        Promise.resolve().then(n.bind(n, 98222)),
        Promise.resolve().then(n.bind(n, 74295)),
        Promise.resolve().then(n.bind(n, 29612)),
        Promise.resolve().then(n.bind(n, 82119)),
        Promise.resolve().then(n.bind(n, 81008)),
        Promise.resolve().then(n.bind(n, 34598)),
        Promise.resolve().then(n.bind(n, 97504)),
        Promise.resolve().then(n.bind(n, 42850)),
        Promise.resolve().then(n.bind(n, 86273)),
        Promise.resolve().then(n.bind(n, 19777)),
        Promise.resolve().then(n.bind(n, 10122)),
        Promise.resolve().then(n.bind(n, 68770)),
        Promise.resolve().then(n.bind(n, 87671)),
        Promise.resolve().then(n.bind(n, 38217)),
        Promise.resolve().then(n.bind(n, 38480)),
        Promise.resolve().then(n.bind(n, 73855)),
        Promise.resolve().then(n.bind(n, 53193)),
        Promise.resolve().then(n.bind(n, 52693)),
        Promise.resolve().then(n.bind(n, 94585)),
        Promise.resolve().then(n.bind(n, 57883)),
        Promise.resolve().then(n.bind(n, 80179)),
        Promise.resolve().then(n.bind(n, 81485)),
        Promise.resolve().then(n.bind(n, 80078)),
        Promise.resolve().then(n.bind(n, 26357)),
        Promise.resolve().then(n.t.bind(n, 35042, 23)),
        Promise.resolve().then(n.bind(n, 32372)),
        Promise.resolve().then(n.bind(n, 79306)),
        Promise.resolve().then(n.bind(n, 70121)),
        Promise.resolve().then(n.bind(n, 95964)),
        Promise.resolve().then(n.bind(n, 45542)),
        Promise.resolve().then(n.bind(n, 28565)),
        Promise.resolve().then(n.bind(n, 81360)),
        Promise.resolve().then(n.bind(n, 30050)),
        Promise.resolve().then(n.bind(n, 63896)),
        Promise.resolve().then(n.bind(n, 78212)),
        Promise.resolve().then(n.bind(n, 66806)),
        Promise.resolve().then(n.bind(n, 13653)),
        Promise.resolve().then(n.bind(n, 47122));
    },
    88507: function (e, t, n) {
      "use strict";
      n.d(t, {
        Providers: function () {
          return S;
        },
      });
      var a = n(57437),
        i = n(14861);
      n(2648);
      var r = n(38716),
        s = n(91960);
      n(2265);
      var o = n(68575),
        l = n(61764),
        c = n(84782),
        d = (e) => {
          let { initStoreData: t, children: n } = e,
            i = { ...t };
          i?.AgentEntity?.agents &&
            (i.AgentEntity.agents = i.AgentEntity.agents.map(r.T)),
            i?.MessageEntity?.bageData &&
              (i.MessageEntity.bageData = (0, l.MU)(i.MessageEntity.bageData)),
            i?.ProtocolEntity?.bageData &&
              (i.ProtocolEntity.bageData = (0, c.c)(i.ProtocolEntity.bageData)),
            i?.ProtocolEntity?.protocols &&
              (i.ProtocolEntity.protocols = i.ProtocolEntity.protocols.map(
                c.N
              ));
          let d = (0, s.n)(i);
          return (0, a.jsx)(o.zt, {
            store: d,
            stabilityCheck: "never",
            children: n,
          });
        },
        u = n(24461),
        x = n(18867),
        h = n(54114),
        m = n(29827),
        p = n(70335),
        k = n(94594),
        _ = n(46454);
      let f = new h.S();
      var g = function (e) {
          let { children: t, initialState: n } = e;
          return (0, a.jsx)(p.WagmiProvider, {
            config: k.gb,
            initialState: n,
            children: (0, a.jsx)(m.aH, {
              client: f,
              children: (0, a.jsx)(_.vP, { children: t }),
            }),
          });
        },
        y = n(54968),
        v = n(90655);
      let b = [new (n(4298).O)()];
      var C = (e) => {
          let { children: t } = e;
          return (0, a.jsx)(y.U, {
            endpoint:
              "https://rpc.ankr.com/solana/b2717015880533388be8430381f5b7aa3cf67478932e878e19166a418495759b",
            children: (0, a.jsx)(v.n, {
              autoConnect: !0,
              wallets: b,
              children: t,
            }),
          });
        },
        B = n(81441),
        j = n(54654),
        w = (e) => {
          let { children: t } = e;
          return (0, a.jsx)(B.n, {
            autoConnect: !1,
            adapters: [j.w],
            children: t,
          });
        },
        N = n(75948),
        E = n(46503),
        A = (e) => {
          let { children: t } = e;
          return (0, a.jsx)(E.LD, {
            manifestUrl:
              "https://sandbox2-explorer.ent-dx.com/tonconnect-manifest.json",
            children: t,
          });
        },
        H = (e) => {
          let { children: t, initialState: n } = e;
          return (0, a.jsx)(A, {
            children: (0, a.jsx)(N.ZP, {
              children: (0, a.jsx)(C, {
                children: (0, a.jsx)(w, {
                  children: (0, a.jsx)(g, { initialState: n, children: t }),
                }),
              }),
            }),
          });
        },
        V = n(80361),
        T = n(93114),
        D = n(25566);
      let S = (e) => {
        let { children: t, initData: n, initWalletData: r } = e;
        return (0, a.jsxs)(H, {
          initialState: r,
          children: [
            (0, a.jsx)(i.Ix, {}),
            (0, a.jsx)(u.JB, {
              children: (0, a.jsx)(d, {
                initStoreData: n,
                children: (0, a.jsx)(T.l, {
                  children: (0, a.jsx)(x.DY, {
                    children: D.env.IS_STORYBOOK
                      ? t
                      : (0, a.jsx)(V.XJ, { children: t }),
                  }),
                }),
              }),
            }),
          ],
        });
      };
    },
    61562: function (e) {
      "use strict";
      e.exports = [
        {
          inputs: [
            { internalType: "address", name: "_admin", type: "address" },
            { internalType: "address", name: "_ngl", type: "address" },
            {
              internalType: "uint256",
              name: "_inflationStart",
              type: "uint256",
            },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        { inputs: [], name: "BurningBlocked", type: "error" },
        { inputs: [], name: "BurningClosed", type: "error" },
        { inputs: [], name: "InflationBurnBlocked", type: "error" },
        { inputs: [], name: "InvalidConfigData", type: "error" },
        { inputs: [], name: "InvalidParams", type: "error" },
        { inputs: [], name: "InvalidStart", type: "error" },
        { inputs: [], name: "ZeroBurn", type: "error" },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: "uint8",
              name: "bucketId",
              type: "uint8",
            },
            {
              indexed: !0,
              internalType: "address",
              name: "burnedBy",
              type: "address",
            },
            {
              indexed: !1,
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "BurnBucket",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: "address",
              name: "burnedBy",
              type: "address",
            },
            {
              indexed: !1,
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "BurnInflation",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: "address",
              name: "user",
              type: "address",
            },
            {
              indexed: !1,
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "Deposit",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !1,
              internalType: "uint256",
              name: "oldSupply",
              type: "uint256",
            },
            {
              indexed: !1,
              internalType: "uint256",
              name: "newSupply",
              type: "uint256",
            },
          ],
          name: "NativeSupplyChanged",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !1,
              internalType: "uint256",
              name: "oldRate",
              type: "uint256",
            },
            {
              indexed: !1,
              internalType: "uint256",
              name: "newRate",
              type: "uint256",
            },
          ],
          name: "RateChanged",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: "bytes32",
              name: "role",
              type: "bytes32",
            },
            {
              indexed: !0,
              internalType: "bytes32",
              name: "previousAdminRole",
              type: "bytes32",
            },
            {
              indexed: !0,
              internalType: "bytes32",
              name: "newAdminRole",
              type: "bytes32",
            },
          ],
          name: "RoleAdminChanged",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: "bytes32",
              name: "role",
              type: "bytes32",
            },
            {
              indexed: !0,
              internalType: "address",
              name: "account",
              type: "address",
            },
            {
              indexed: !0,
              internalType: "address",
              name: "sender",
              type: "address",
            },
          ],
          name: "RoleGranted",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: "bytes32",
              name: "role",
              type: "bytes32",
            },
            {
              indexed: !0,
              internalType: "address",
              name: "account",
              type: "address",
            },
            {
              indexed: !0,
              internalType: "address",
              name: "sender",
              type: "address",
            },
          ],
          name: "RoleRevoked",
          type: "event",
        },
        {
          inputs: [],
          name: "ADMIN",
          outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "DAY",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "DEFAULT_ADMIN_ROLE",
          outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "DENOMINATOR",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "SETTER",
          outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "YEAR",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint8[]", name: "_bucketIds", type: "uint8[]" },
            {
              components: [
                { internalType: "bool", name: "burningBlocked", type: "bool" },
                {
                  internalType: "uint256",
                  name: "tgePercent",
                  type: "uint256",
                },
                { internalType: "uint256", name: "cliff", type: "uint256" },
                {
                  internalType: "uint256",
                  name: "vestingDuration",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "totalAmount",
                  type: "uint256",
                },
              ],
              internalType: "struct BurnVesting.Config[]",
              name: "configs",
              type: "tuple[]",
            },
          ],
          name: "addBucketConfigs",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          name: "bucketIds",
          outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ internalType: "uint8", name: "id", type: "uint8" }],
          name: "buckets",
          outputs: [
            { internalType: "bool", name: "burningBlocked", type: "bool" },
            { internalType: "uint256", name: "tgePercent", type: "uint256" },
            { internalType: "uint256", name: "cliff", type: "uint256" },
            {
              internalType: "uint256",
              name: "vestingDuration",
              type: "uint256",
            },
            { internalType: "uint256", name: "totalAmount", type: "uint256" },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "burn",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "_amount", type: "uint256" },
          ],
          name: "burnAdmin",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [{ internalType: "uint8", name: "id", type: "uint8" }],
          name: "burned",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "newRate", type: "uint256" },
          ],
          name: "changeInflationRate",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "newNativeSupply",
              type: "uint256",
            },
          ],
          name: "changeNativeSupply",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "circuitBreakerEnabled",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "dailyInflation",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "dailyInflationPerSecond",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "amount", type: "uint256" },
          ],
          name: "deposit",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [{ internalType: "uint8", name: "bucketId", type: "uint8" }],
          name: "getAvailableAmount",
          outputs: [
            { internalType: "uint256", name: "result", type: "uint256" },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getAvailableFromInflation",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ internalType: "bytes32", name: "role", type: "bytes32" }],
          name: "getRoleAdmin",
          outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getTotalAvailableAmount",
          outputs: [
            { internalType: "uint256", name: "bucketBurn", type: "uint256" },
            { internalType: "uint256", name: "inflationBurn", type: "uint256" },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getTotalBurned",
          outputs: [
            { internalType: "uint256", name: "totalBurned", type: "uint256" },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "bytes32", name: "role", type: "bytes32" },
            { internalType: "address", name: "account", type: "address" },
          ],
          name: "grantRole",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "bytes32", name: "role", type: "bytes32" },
            { internalType: "address", name: "account", type: "address" },
          ],
          name: "hasRole",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "inflationBurnBlocked",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "inflationLastBurn",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "inflationRate",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "inflationStart",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ internalType: "uint8", name: "bucketId", type: "uint8" }],
          name: "isBlocked",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "nativeChainSupply",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "ngl",
          outputs: [
            { internalType: "contract IERC20", name: "", type: "address" },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "nowTime",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "bytes32", name: "role", type: "bytes32" },
            { internalType: "address", name: "account", type: "address" },
          ],
          name: "renounceRole",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "bytes32", name: "role", type: "bytes32" },
            { internalType: "address", name: "account", type: "address" },
          ],
          name: "revokeRole",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint8", name: "bucketId", type: "uint8" },
            { internalType: "bool", name: "status", type: "bool" },
          ],
          name: "setBurningBlockedBucket",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [{ internalType: "bool", name: "status", type: "bool" }],
          name: "setCircuitBreaker",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [{ internalType: "bool", name: "status", type: "bool" }],
          name: "setInflationBlocker",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "_newStart", type: "uint256" },
          ],
          name: "setInflationStart",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "_newStart", type: "uint256" },
          ],
          name: "setStart",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "start",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "bytes4", name: "interfaceId", type: "bytes4" },
          ],
          name: "supportsInterface",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "view",
          type: "function",
        },
      ];
    },
    41930: function (e, t, n) {
      "use strict";
      n.d(t, {
        ConnectWallet: function () {
          return f;
        },
      });
      var a = n(57437),
        i = n(33145),
        r = n(36760),
        s = n.n(r),
        o = n(68575),
        l = n(31048),
        c = n.n(l),
        d = n(44738),
        u = n(99376),
        x = n(91960),
        h = n(83526),
        m = n(33730),
        p = n(31440),
        k = n(2265),
        _ = () => {
          let e = (0, o.I0)(),
            { walletConnect: t } = (0, m.Z)(),
            { connectWallet: n } = (0, h.d)(),
            r = (0, u.usePathname)(),
            {
              store: {
                App: { walletConnectChainId: l },
              },
              actions: {
                App: { setWalletConnectChainId: _ },
              },
            } = (0, x.oR)((e) => ({ App: e.AppEntity })),
            f = () => e(_()),
            g = (e, a) => () => {
              a || ("phantom" === e ? n() : t(e, l), f());
            },
            y = (0, k.useMemo)(() => ("/goomnichain" === r ? p.K : p.m), [r]);
          return l
            ? (0, a.jsx)("div", {
                className: c().wrapper,
                children: (0, a.jsxs)("div", {
                  className: s()(c().container, {
                    [c().fadeEnter]: l,
                    [c().fadeExit]: !l,
                    [c().hidden]: !l,
                  }),
                  children: [
                    (0, a.jsxs)("div", {
                      className: c().heading,
                      children: [
                        (0, a.jsx)("h1", {
                          className: c().title,
                          children: "Connect to Wallet",
                        }),
                        (0, a.jsx)("div", {
                          className: c().closeIcon,
                          onClick: f,
                          children: (0, a.jsx)(i.default, {
                            fill: !0,
                            src: d.Z,
                            quality: 100,
                            alt: "entangle-close-asset",
                          }),
                        }),
                      ],
                    }),
                    (0, a.jsxs)("p", {
                      className: c().help,
                      children: [
                        "Connecting your wallet is like “logging on” to Web3. ",
                        (0, a.jsx)("br", {}),
                        " Select your wallet from the options to get started.",
                      ],
                    }),
                    (0, a.jsx)("div", {
                      className: c().walletItemsWrapper,
                      children: y.map((e, t) => {
                        let {
                          title: n,
                          image: r,
                          connector: o,
                          disabled: l,
                        } = e;
                        return (0, a.jsxs)(
                          "div",
                          {
                            className: s()(
                              c().walletItem,
                              l && c().disabledNetwork
                            ),
                            onClick: g(o, l),
                            children: [
                              (0, a.jsx)("p", {
                                className: c().walletTitle,
                                children: n,
                              }),
                              (0, a.jsx)("div", {
                                className: c().walletAsset,
                                children: (0, a.jsx)(i.default, {
                                  fill: !0,
                                  src: r,
                                  quality: 100,
                                  alt: `entangle-${r}-asset`,
                                }),
                              }),
                            ],
                          },
                          t
                        );
                      }),
                    }),
                  ],
                }),
              })
            : null;
        };
      let f = () => (0, a.jsx)(_, {});
    },
    32400: function (e, t, n) {
      "use strict";
      function a(e, t, n) {
        return e.reduce((e, a) => {
          let i = a[2].owner,
            r = {
              created_at: new Date().toISOString(),
              decimals: a[2].decimals,
              deployer: a[2].owner,
              deployment: a[2].peerAddress,
              name: a[2].name,
              owner: a[2].owner,
              protocol_version: 257,
              pure_token: a[2].pureToken || !1,
              salt: a[2].salt,
              symbol: a[2].symbol,
              underlying_token: a[1] ? "0x" : a[2].peerAddress,
              updated_at: new Date().toISOString(),
              verified: !1,
              result_code: 100,
              deploy_tx_hash: n,
              src_chain_id: a[0],
              clusters_deployments: [{ cluster_id: t }],
              src_tx_hash: "",
              total_supply: String(a[2].initialSupply),
              deployments_chain_config: [
                {
                  chain_id: a[0],
                  peer_address: a[2].peerAddress,
                  deployment: "",
                },
              ],
            };
          return e[i] ? e[i].push(r) : (e[i] = [r]), e;
        }, {});
      }
      function i(e) {
        let t = {};
        return (
          e.forEach((e) => {
            let n = e?.clusters_deployments?.[0]?.cluster_id || "";
            t[n] ||
              (t[n] = {
                chains_len: 0,
                created_at: e.created_at,
                id: n,
                is_full: !0,
                clusters_deployments: [],
                failedCount: 0,
                deployingCount: 0,
              });
            let a = t[n];
            a.chains_len += 1;
            let i = {
              deployments: {
                created_at: e.created_at,
                decimals: e.decimals,
                deployer: e.deployer,
                deployment: e.deployment,
                name: e.name,
                owner: e.owner,
                icon_url: e.icon_url,
                deploy_tx_hash: e.deploy_tx_hash,
                protocol_version: e.protocol_version,
                salt: e.salt,
                pure_token: e.pure_token,
                symbol: e.symbol,
                underlying_token: e.underlying_token,
                updated_at: e.updated_at,
                verified: e.verified,
                clusters_deployments: [{ cluster_id: n }],
                result_code: e.result_code,
                src_chain_id: e.src_chain_id,
                src_tx_hash: e.src_tx_hash,
                total_supply: e.total_supply,
                deployments_chain_config: e.deployments_chain_config,
              },
            };
            a.clusters_deployments.push(i),
              0 !== e.result_code && 100 !== e.result_code
                ? ((a.failedCount += 1), (a.is_full = !1))
                : 100 === e.result_code && (a.deployingCount += 1);
          }),
          Object.values(t)
        );
      }
      n.d(t, {
        S: function () {
          return a;
        },
        z: function () {
          return i;
        },
      });
    },
    45158: function (e, t, n) {
      "use strict";
      n.d(t, {
        C: function () {
          return d;
        },
      });
      var a = n(32400),
        i = n(99376),
        r = n(2265),
        s = n(33730),
        o = n(19066),
        l = n(82957).Buffer;
      let c = "successClusterModals",
        d = () => {
          let { push: e } = (0, i.useRouter)(),
            { address: t } = (0, s.Z)(),
            [n, d] = (0, r.useState)([]),
            u = (0, i.usePathname)(),
            x = (0, r.useCallback)(() => {
              let e = localStorage.getItem("uts_deployments");
              d((e ? JSON.parse(e) : {})[t?.toLowerCase() || ""] || []);
            }, [t]);
          (0, r.useEffect)(() => {
            t && x();
            let e = (e) => {
              "uts_deployments" === e.key &&
                (x(), console.log("Cluster data updated for uts_deployments"));
            };
            return (
              window.addEventListener("storage", e),
              () => {
                window.removeEventListener("storage", e);
              }
            );
          }, [t, x, u]);
          let h = (e) => {
            let t = localStorage.getItem(c),
              n = [...(t ? JSON.parse(t) : []), e];
            localStorage.setItem(c, JSON.stringify(n));
          };
          return {
            setDeployingLocalStorage: (t, n) => {
              let i = JSON.parse(
                  localStorage.getItem("uts_deployments") || "{}"
                ),
                r = [];
              t.forEach((e) => {
                let t = e[0],
                  n = e[2]?.peerAddress;
                r.push({ chainId: t, peerAddress: n });
              });
              let s = (function (e) {
                let t = e.map((e) => ({
                  chainId: e.chainId,
                  peer: e.peerAddress.toLowerCase(),
                }));
                t.sort((e, t) => {
                  let n = BigInt(e.chainId),
                    a = BigInt(t.chainId),
                    i = n === a ? 0 : n > a ? 1 : -1;
                  return 0 !== i ? i : e.peer.localeCompare(t.peer);
                });
                let n = t
                  .map((e) =>
                    Uint8Array.from(l.from(e.chainId.toString() + e.peer))
                  )
                  .reduce(
                    (e, t) => Uint8Array.from([...e, ...t]),
                    new Uint8Array(0)
                  );
                return (0, o.w)(n);
              })(r);
              h(s);
              let c = (0, a.S)(t, s, n);
              for (let e in c) i[e] ? i[e].push(...c[e]) : (i[e] = c[e]);
              localStorage.setItem("uts_deployments", JSON.stringify(i)),
                x(),
                e(`/station?clusterId=${s}`);
            },
            pendingDeployments: n,
            removeDeploymentFromLocalStorage: (e) => {
              let t = JSON.parse(
                  localStorage.getItem("uts_deployments") || "{}"
                ),
                n = e.deployer.toLowerCase();
              t[n] &&
                ((t[n] = t[n].filter(
                  (t) =>
                    !(
                      Number(t.src_chain_id) === Number(e.src_chain_id) &&
                      t.deployment.toLowerCase() === e.deployment.toLowerCase()
                    )
                )),
                localStorage.setItem("uts_deployments", JSON.stringify(t)),
                x());
            },
          };
        };
    },
    38536: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return s;
        },
      });
      var a = n(2265),
        i = n(29557);
      let r = [33033],
        s = (e) => {
          let t = (0, a.useMemo)(
              () =>
                Object.values(i.m5)
                  .filter((e) => {
                    let { nonEvm: t, chainId: n, comingSoon: a } = e;
                    return (
                      (!t && !r?.includes?.(n)) || (t && a && !r?.includes?.(n))
                    );
                  })
                  .sort((e, t) =>
                    e.comingSoon && !t.comingSoon
                      ? 1
                      : !e.comingSoon && t.comingSoon
                      ? -1
                      : 0
                  ),
              []
            ),
            n = (0, a.useMemo)(
              () =>
                Object.values(i.m5).filter((e) => {
                  let { nonEvm: t, chainId: n } = e;
                  return !t && !r?.includes?.(n);
                }),
              []
            ),
            s = (0, a.useMemo)(
              () =>
                Object.values(i.m5).filter((e) => {
                  let { nonEvm: t, chainId: n } = e;
                  return (!t && !r?.includes?.(n)) || 900 === n;
                }),
              []
            );
          return (0, a.useMemo)(() => {
            switch (e) {
              case "simple":
                return n;
              case "simpleWithSol":
                return s;
              default:
                return t;
            }
          }, [t, e, n, s]);
        };
    },
    93114: function (e, t, n) {
      "use strict";
      n.d(t, {
        g: function () {
          return u;
        },
        l: function () {
          return x;
        },
      });
      var a = n(57437),
        i = n(2265),
        r = n(78090),
        s = n(13971),
        o = n(45158),
        l = n(32400);
      let c = (e) => {
        let [t, n] = (0, i.useState)([]),
          [a, c] = (0, i.useState)([]),
          [d, u] = (0, i.useState)(!0),
          [x, h] = (0, i.useState)(!0),
          { pendingDeployments: m, removeDeploymentFromLocalStorage: p } = (0,
          o.C)(),
          k = (0, i.useRef)(null);
        return (
          (0, i.useEffect)(() => {
            t.forEach((e) => {
              m.some(
                (t) =>
                  Number(t.src_chain_id) === Number(e.src_chain_id) &&
                  t.deployment.toLowerCase() === e.deployment.toLowerCase()
              ) && p(e);
            });
          }, [t, m, p]),
          (0, i.useEffect)(() => {
            d || (h(!0), c((0, l.z)([...t, ...m])), h(!1));
          }, [t, d, m]),
          (0, i.useEffect)(
            () => (
              u(!0),
              (k.current = r.o
                .subscribe({
                  query: s.o6,
                  variables: { where: { deployer: { _eq: e } } },
                })
                .subscribe({
                  next(e) {
                    let { data: t } = e;
                    n(t.deployments), u(!1);
                  },
                  error(e) {
                    console.error("Websocket connection error", e), u(!1);
                  },
                })),
              () => {
                k.current?.unsubscribe();
              }
            ),
            [e]
          ),
          {
            deployments: t,
            pendingDeployments: m,
            clusters: a,
            isLoading: d,
            isLoadingClusters: x,
          }
        );
      };
      var d = n(33730);
      let u = (0, i.createContext)({
          clusters: [],
          isLoading: !0,
          isLoadingClusters: !0,
        }),
        x = (e) => {
          let { children: t } = e,
            { address: n } = (0, d.Z)(),
            { clusters: i, isLoading: r, isLoadingClusters: s } = c(n || "0x");
          return (0, a.jsx)(u.Provider, {
            value: { clusters: i, isLoading: r, isLoadingClusters: s },
            children: t,
          });
        };
    },
    20896: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          BridgeFooter: function () {
            return u;
          },
        });
      var a = n(57437),
        i = n(34969),
        r = n.n(i),
        s = n(36760),
        o = n.n(s),
        l = n(27648),
        c = n(15150);
      let d = "https://entangle.zendesk.com/hc/en-us",
        u = (e) => {
          let { className: t } = e;
          return (0, a.jsxs)("footer", {
            className: o()(r().container, "lg:flex-row flex-col !p-0", t, {
              [r().container_spacing]: c.Is,
            }),
            children: [
              (0, a.jsxs)("div", {
                className: `${r().firstWrap} lg:px-[24px] items-baseline`,
                children: [
                  (0, a.jsx)("div", {
                    children: (0, a.jsx)(l.default, {
                      className: `${
                        r().link
                      } hidden lg:flex text-[10px] lg:text-[14px]`,
                      href: d,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      children: "Support",
                    }),
                  }),
                  (0, a.jsxs)("div", {
                    className: o()(
                      r().line,
                      "flex justify-center gap-x-5 items-center flex-wrap py-2.5 lg:py-2 lg:my-[8px]"
                    ),
                    children: [
                      (0, a.jsx)(l.default, {
                        className: `${r().link} text-[10px] lg:text-[14px]`,
                        href: "https://hub.entangle.fi/",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: "Explorer",
                      }),
                      (0, a.jsx)(l.default, {
                        className: `${r().link} text-[10px] lg:text-[14px]`,
                        href: "#",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: "Universal Data Feeds",
                      }),
                      (0, a.jsx)(l.default, {
                        className: `${r().link} text-[10px] lg:text-[14px]`,
                        href: "https://uts.entangle.fi/",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: "Universal Token Standard",
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: o()(
                      r().line,
                      "flex justify-center gap-y-3 gap-x-5 items-center flex-wrap py-2.5 lg:py-2 lg:my-[8px]"
                    ),
                    children: [
                      (0, a.jsx)(l.default, {
                        className: `${r().link} text-[10px] lg:text-[14px]`,
                        href: "https://discord.com/invite/entangle",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: "Discord",
                      }),
                      (0, a.jsx)(l.default, {
                        className: `${r().link} text-[10px] lg:text-[14px]`,
                        href: "https://x.com",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: "Twitter",
                      }),
                      (0, a.jsx)(l.default, {
                        className: `${r().link} text-[10px] lg:text-[14px]`,
                        href: "https://blog.entangle.fi/",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: "Medium",
                      }),
                      (0, a.jsx)(l.default, {
                        className: `${r().link} text-[10px] lg:text-[14px]`,
                        href: "https://docs.entangle.fi/",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: "Gitbook",
                      }),
                      (0, a.jsx)("div", {
                        className: "w-full h-px bg-[#1e1e24] lg:hidden flex",
                      }),
                      (0, a.jsx)(l.default, {
                        className: `${r().link} text-[10px] lg:hidden`,
                        href: d,
                        passHref: !0,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: "Support",
                      }),
                      (0, a.jsx)(l.default, {
                        className: `${r().link} text-[10px] lg:text-[14px]`,
                        href: "https://entangle-public.s3.amazonaws.com/Privacy+Policy+for+Entangle+09.05.2024.pdf",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: "Privacy Policy",
                      }),
                      (0, a.jsx)(l.default, {
                        className: `${r().link} text-[10px] lg:text-[14px]`,
                        href: "https://entangle-public.s3.amazonaws.com/Entangle+Terms+of+Use+09.05.2024.pdf",
                        passHref: !0,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: "Terms of Use",
                      }),
                    ],
                  }),
                ],
              }),
              (0, a.jsx)("div", {
                className: "w-full h-px bg-[#1e1e24] lg:hidden flex",
              }),
              (0, a.jsx)("div", {
                className:
                  "my-[8px] text-[var(--neutral-60)] text-[10px] lg:pr-[24px] pr-0 lg:text-[14px]",
                children: "\xa9 2025 Entangle AI. All rights reserved",
              }),
            ],
          });
        };
    },
    23428: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          HubFooter: function () {
            return u;
          },
        });
      var a = n(57437),
        i = n(19510),
        r = n.n(i),
        s = n(36760),
        o = n.n(s),
        l = n(27648),
        c = n(99376);
      let d = "https://entangle.zendesk.com/hc/en-us",
        u = (e) => {
          let { className: t } = e,
            n = (0, c.usePathname)();
          return (0, a.jsxs)("footer", {
            className: o()(r().container, "lg:flex-row flex-col !p-0", t, {
              [r().container_spacing]: "/bridge" === n,
            }),
            children: [
              (0, a.jsxs)("div", {
                className: `${r().firstWrap} lg:px-[24px] items-baseline`,
                children: [
                  (0, a.jsx)("div", {
                    children: (0, a.jsx)(l.default, {
                      className: `${
                        r().link
                      } hidden lg:flex text-[10px] lg:text-[14px]`,
                      href: '#',
                      rel: "noopener noreferrer",
                      children: "Support",
                    }),
                  }),
                  (0, a.jsxs)("div", {
                    className: o()(
                      r().line,
                      "flex justify-center gap-x-5 items-center flex-wrap py-2.5 lg:py-2 lg:my-[8px]"
                    ),
                    children: [
                      (0, a.jsx)(l.default, {
                        className: `${r().link} text-[10px] lg:text-[14px]`,
                        href: "#",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: "Universal Data Feeds",
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: o()(
                      r().line,
                      "flex justify-center gap-y-3 gap-x-5 items-center flex-wrap py-2.5 lg:py-2 lg:my-[8px]"
                    ),
                    children: [
                      (0, a.jsx)(l.default, {
                        className: `${r().link} text-[10px] lg:text-[14px]`,
                        href: "https://x.com",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: "Twitter",
                      }),
                      (0, a.jsx)(l.default, {
                        className: `${r().link} text-[10px] lg:text-[14px]`,
                        href: "https://docs.entangle.fi/",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: "Gitbook",
                      }),
                      (0, a.jsx)("div", {
                        className: "w-full h-px bg-[#1e1e24] lg:hidden flex",
                      }),
                    ],
                  }),
                ],
              }),
              (0, a.jsx)("div", {
                className: "w-full h-px bg-[#1e1e24] lg:hidden flex",
              }),
              (0, a.jsx)("div", {
                className:
                  "my-[8px] text-[var(--neutral-60)] text-[10px] lg:pr-[24px] pr-0 lg:text-[14px]",
                children: "\xa9 2025 Entangle AI. All rights reserved",
              }),
            ],
          });
        };
    },
    53929: function (e, t, n) {
      "use strict";
      n.d(t, {
        G: function () {
          return a.HubFooter;
        },
      });
      var a = n(23428);
    },
    63602: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          UDFFooter: function () {
            return u;
          },
        });
      var a = n(57437),
        i = n(18895),
        r = n.n(i),
        s = n(36760),
        o = n.n(s),
        l = n(27648),
        c = n(99376);
      let d = "https://entangle.zendesk.com/hc/en-us",
        u = (e) => {
          let { className: t } = e,
            n = (0, c.usePathname)();
          return (0, a.jsxs)("footer", {
            className: o()(r().container, "lg:flex-row flex-col !p-0", t, {
              [r().container_spacing]: "/bridge" === n,
            }),
            children: [
              (0, a.jsxs)("div", {
                className: `${r().firstWrap} lg:px-[24px] items-baseline`,
                children: [
                  (0, a.jsx)("div", {
                    children: (0, a.jsx)(l.default, {
                      className: `${
                        r().link
                      } hidden lg:flex text-[10px] lg:text-[14px]`,
                      href: d,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      children: "Support",
                    }),
                  }),
                  (0, a.jsxs)("div", {
                    className: o()(
                      r().line,
                      "flex justify-center gap-x-5 items-center flex-wrap py-2.5 lg:py-2 lg:my-[8px]"
                    ),
                    children: [
                      (0, a.jsx)(l.default, {
                        className: `${r().link} text-[10px] lg:text-[14px]`,
                        href: "https://hub.entangle.fi/",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: "Entangle AI Explorer",
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: o()(
                      r().line,
                      "flex justify-center gap-y-3 gap-x-5 items-center flex-wrap py-2.5 lg:py-2 lg:my-[8px]"
                    ),
                    children: [
                      (0, a.jsx)(l.default, {
                        className: `${r().link} text-[10px] lg:text-[14px]`,
                        href: "https://discord.com/invite/entangle",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: "Discord",
                      }),
                      (0, a.jsx)(l.default, {
                        className: `${r().link} text-[10px] lg:text-[14px]`,
                        href: "https://x.com",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: "Twitter",
                      }),
                      (0, a.jsx)(l.default, {
                        className: `${r().link} text-[10px] lg:text-[14px]`,
                        href: "https://blog.entangle.fi/",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: "Medium",
                      }),
                      (0, a.jsx)(l.default, {
                        className: `${r().link} text-[10px] lg:text-[14px]`,
                        href: "https://docs.entangle.fi/",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: "Gitbook",
                      }),
                      (0, a.jsx)("div", {
                        className: "w-full h-px bg-[#1e1e24] lg:hidden flex",
                      }),
                      (0, a.jsx)(l.default, {
                        className: `${r().link} text-[10px] lg:hidden`,
                        href: d,
                        passHref: !0,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: "Support",
                      }),
                      (0, a.jsx)(l.default, {
                        className: `${r().link} text-[10px] lg:text-[14px]`,
                        href: "https://entangle-public.s3.amazonaws.com/Privacy+Policy+for+Entangle+09.05.2024.pdf",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: "Privacy Policy",
                      }),
                      (0, a.jsx)(l.default, {
                        className: `${r().link} text-[10px] lg:text-[14px]`,
                        href: "https://entangle-public.s3.amazonaws.com/Entangle+Terms+of+Use+09.05.2024.pdf",
                        passHref: !0,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: "Terms of Use",
                      }),
                    ],
                  }),
                ],
              }),
              (0, a.jsx)("div", {
                className: "w-full h-px bg-[#1e1e24] lg:hidden flex",
              }),
              (0, a.jsx)("div", {
                className:
                  "my-[8px] text-[var(--neutral-60)] text-[10px] lg:pr-[24px] pr-0 lg:text-[14px]",
                children: "Powered by Entangle AI",
              }),
            ],
          });
        };
    },
    99759: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          UTSFooter: function () {
            return u;
          },
        });
      var a = n(57437),
        i = n(36760),
        r = n.n(i),
        s = n(30306),
        o = n.n(s),
        l = n(99376),
        c = n(15150),
        d = n(27648);
      let u = (e) => {
        let { className: t } = e;
        return (
          (0, l.usePathname)(),
          (0, a.jsxs)("footer", {
            className: r()(o().container, "lg:flex-row flex-col !p-0", t, {
              [o().container_spacing]: c.Is,
            }),
            children: [
              (0, a.jsxs)("div", {
                className: o().links,
                children: [
                  (0, a.jsx)(d.default, {
                    className: o().link,
                    href: "https://entangle.zendesk.com/hc/en-us",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: "Support",
                  }),
                  (0, a.jsx)(d.default, {
                    className: o().link,
                    href: "https://discord.com/invite/entangle",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: "Discord",
                  }),
                  (0, a.jsx)(d.default, {
                    className: o().link,
                    href: "https://x.com",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: "Twitter",
                  }),
                  (0, a.jsx)(d.default, {
                    className: o().link,
                    href: "https://blog.entangle.fi/",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: "Medium",
                  }),
                  (0, a.jsx)(d.default, {
                    className: o().link,
                    href: "https://docs.entangle.fi/",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: "Gitbook",
                  }),
                  (0, a.jsx)(d.default, {
                    className: o().link,
                    href: "https://entangle-public.s3.amazonaws.com/Privacy+Policy+for+Entangle+09.05.2024.pdf",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: "Privacy Policy",
                  }),
                  (0, a.jsx)(d.default, {
                    className: o().link,
                    href: "https://entangle-public.s3.amazonaws.com/Entangle+Terms+of+Use+09.05.2024.pdf",
                    passHref: !0,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: "Terms of Use",
                  }),
                ],
              }),
              (0, a.jsx)("div", {
                className: "w-full h-px bg-[#1e1e24] lg:hidden flex",
              }),
              (0, a.jsx)("div", {
                className:
                  "my-[8px] self-center text-[var(--neutral-60)] text-[10px] lg:pr-[24px] pr-0 lg:text-[14px] whitespace-nowrap",
                children: "Powered by Entangle AI",
              }),
            ],
          })
        );
      };
    },
    31400: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          BridgeHeaderComponent: function () {
            return Y;
          },
        });
      var a = n(57437),
        i = n(36760),
        r = n.n(i),
        s = n(31300),
        o = n.n(s),
        l = n(99376),
        c = n(2265),
        d = n(44753),
        u = n(27648),
        x = n(3573),
        h = n(10740),
        m = n(91960),
        p = n(28369),
        k = n(83526),
        _ = n(70755),
        f = n(47374),
        g = n(33730),
        y = n(68575),
        v = n(54647),
        b = n(66972),
        C = n(59771),
        B = n(15150),
        j = n(65623),
        w = n(85340),
        N = n(38405),
        E = n(33145),
        A = n(29853),
        H = n(39200),
        V = n.n(H),
        T = n(83276),
        D = n(44738),
        S = n(50339),
        I = n(34409),
        G = n(70388),
        P = n(80361),
        M = n(10270),
        L = n(87057),
        F = n(53929),
        U = (0, c.memo)((e) => {
          let {
              chainId: t,
              navItems: n,
              onConnect: i,
              onDisconnect: s,
              onChangeEntangleType: o,
              entangleType: d,
              addresses: h,
            } = e,
            m = (0, l.usePathname)(),
            [k, _] = (0, c.useState)(!1),
            f = (0, S.a)(1024),
            { goBackState: g, content: y, showBackButton: b } = (0, P.vU)(),
            { isLoading: C } = (0, j.lM)();
          return (
            (0, c.useEffect)(() => {
              let e = document.getElementById("root"),
                t = "overflow-hidden h-full w-full fixed".split(" ");
              return e
                ? (k ? e.classList.add(...t) : e.classList.remove(...t),
                  () => {
                    e.classList.remove(...t);
                  })
                : () => void 0;
            }, [k]),
            (0, c.useEffect)(() => {
              _(!1);
            }, [m]),
            (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsxs)("div", {
                  className: V().headerBurger,
                  children: [
                    b
                      ? (0, a.jsxs)("button", {
                          className: V().returnBack,
                          onClick: g,
                          children: [
                            (0, a.jsx)(G.X, {
                              className: V().returnBack__icon,
                            }),
                            (0, a.jsx)("span", {
                              className: V().returnBack__label,
                              children: `Back to ${y}`,
                            }),
                          ],
                        })
                      : (0, a.jsx)(N.O, { entangleType: d }),
                    (0, a.jsxs)("div", {
                      className: V().right,
                      children: [
                        f && !B.HC && !k && (0, a.jsx)(M.J, {}),
                        !k &&
                          (0, a.jsx)(x.Z, {
                            addresses: h,
                            onConnect: i,
                            chainId: t,
                            isLoadingEntangleTypes: C,
                          }),
                        (0, a.jsx)("button", {
                          onClick: () => _(!k),
                          children: (0, a.jsx)(E.default, {
                            className: V().burgerMenuIcon,
                            src: k ? D.Z.src : T.Z.src,
                            alt: k ? "Close" : "Open",
                            width: 32,
                            height: 32,
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                k &&
                  (0, a.jsxs)("div", {
                    className: V().headerBurger__menu,
                    children: [
                      (0, a.jsxs)("div", {
                        children: [
                          n.map((e, t) => {
                            let {
                              name: n,
                              href: i,
                              subLinks: s,
                              isHidden: o,
                              isExternal: l,
                            } = e;
                            return o
                              ? (0, a.jsxs)(
                                  "div",
                                  {
                                    className: r()(
                                      V().headerBurger__item,
                                      V().navHidden
                                    ),
                                    children: [
                                      (0, a.jsx)(v.m, {
                                        className: V().navHidden__icon,
                                      }),
                                      (0, a.jsx)("span", {
                                        className: V().navHidden__text,
                                        children: (0, p.$)(n),
                                      }),
                                    ],
                                  },
                                  t
                                )
                              : (0, a.jsxs)(
                                  c.Fragment,
                                  {
                                    children: [
                                      (0, a.jsx)("div", {
                                        className: V().headerBurger__item,
                                        children: (0, a.jsxs)(u.default, {
                                          target: l ? "_blank" : void 0,
                                          href: i,
                                          className: V().headerBurger__link,
                                          children: [
                                            (0, p.$)(n),
                                            l &&
                                              (0, a.jsx)(E.default, {
                                                width: 16,
                                                height: 16,
                                                src: A.Z.src,
                                                className:
                                                  V().externalLinkColor,
                                                alt: "External Link",
                                              }),
                                          ],
                                        }),
                                      }),
                                      s &&
                                        s.map((e, t) => {
                                          let {
                                            name: n,
                                            isDesktopOnly: i = !1,
                                            href: s,
                                          } = e;
                                          return (0, a.jsx)(
                                            "div",
                                            {
                                              className: r()(
                                                V().headerBurger__subItem,
                                                { hidden: i }
                                              ),
                                              children: (0, a.jsx)(u.default, {
                                                href: s,
                                                children: (0, a.jsx)(L.Z, {
                                                  children: (0, p.$)(n),
                                                }),
                                              }),
                                            },
                                            t
                                          );
                                        }),
                                    ],
                                  },
                                  t
                                );
                          }),
                          (0, a.jsxs)("div", {
                            className: r()(
                              V().headerBurger__item,
                              V().headerBurger__disconnectContainer,
                              {
                                [V().headerBurger__disconnectContainer_visible]:
                                  h.filter(Boolean).length,
                              }
                            ),
                            children: [
                              (0, a.jsx)(E.default, {
                                src: I.Z.src,
                                alt: "Disconnect",
                                width: 20,
                                height: 20,
                              }),
                              (0, a.jsx)("button", {
                                onClick: s,
                                children: "Disconnect",
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, a.jsx)(F.G, { className: V().headerBurger_footer }),
                    ],
                  }),
              ],
            })
          );
        }),
        Z = n(97897),
        W = n(29557),
        R = n(76985),
        O = n(35382),
        $ = n.n(O);
      let z = (e) => {
          let { type: t } = e,
            n = (0, c.useMemo)(() => ("soon" === t ? "Coming Soon" : t), [t]);
          return (0, a.jsx)("div", {
            className: r()($().badge, $()[`badge_${t}`]),
            children: n,
          });
        },
        K = void 0,
        Y = () => {
          let { push: e } = (0, l.useRouter)();
          (0, d.n)();
          let t = (0, m.TL)(),
            n = (0, l.usePathname)(),
            i = (0, y.v9)((e) => e.AppEntity.appGlobalConfig),
            { entangleTypesOptions: s, isLoading: H } = (0, j.lM)(),
            V = (0, c.useMemo)(
              () => (B.Is ? s.find((e) => e.label === j.zB.BRIDGE) : s[0]),
              [s]
            ),
            [T, D] = (0, c.useState)(V),
            { address: S, chainId: I, disconnect: G } = (0, g.Z)(),
            { address: P, connectWallet: M, disconnectWallet: L } = (0, k.d)(),
            { address: F, connectWallet: O, disconnectWallet: $ } = (0, _.Y)(),
            { address: Y, disconnectWallet: q } = (0, b.H)(),
            { address: X, disconnectWallet: J } = (0, R.e)(),
            Q = (0, c.useMemo)(() => [S, P, F, Y, X], [S, P, F, Y, X]),
            {
              actions: {
                App: { setWalletConnectChainId: ee },
              },
            } = (0, m.oR)((e) => ({ App: e.AppEntity })),
            et = () =>
              f.h
                ? M()
                : (0, C.L4)()
                ? O()
                : void t(ee(B.vL ? W.m5.Ethereum.chainId : W.ZP.chainId)),
            en = (0, c.useCallback)(async () => {
              G(), L(), $(), q(), J();
            }, [G, L, $, q, J]),
            ea = Z.WN;
          return (
            (0, c.useEffect)(() => {
              B.Is ? D(s.find((e) => e.label === j.zB.BRIDGE)) : D(V);
            }, [V, s]),
            (0, a.jsxs)("header", {
              className:
                "sticky top-0 z-[var(--z-index-max)] w-full bg-neutral-10",
              children: [
                (0, a.jsxs)("div", {
                  className: "lg:hidden",
                  children: [
                    (0, a.jsx)(U, {
                      addresses: Q,
                      chainId: I || 0,
                      basePath: K,
                      navItems: ea,
                      onConnect: et,
                      onDisconnect: en,
                      entangleType: T,
                      onChangeEntangleType: (t) => {
                        let n = s.find((e) => String(e.value) === String(t));
                        D(n),
                          n.external
                            ? (window.location.href = n.link)
                            : e(n.link);
                      },
                    }),
                    i?.generalMessage &&
                      (0, a.jsx)(w.Z, { ...i.generalMessage }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: "hidden lg:block",
                  children: [
                    (0, a.jsxs)("div", {
                      className: o().container,
                      children: [
                        (0, a.jsxs)("nav", {
                          className: o().firstWrap,
                          children: [
                            (0, a.jsx)(N.O, { entangleType: T }),
                            (0, a.jsx)("ul", {
                              className: o().navContainer,
                              children: ea.map((e, t) => {
                                let {
                                    name: i,
                                    href: s,
                                    subRoutes: l,
                                    isHidden: c,
                                    isExternal: d,
                                    headerBadge: x,
                                  } = e,
                                  h = n && n.match(/^\/[^\/]+(\/[^\/]+)?/);
                                return c || "soon" === x
                                  ? (0, a.jsx)(
                                      "div",
                                      {
                                        className: o().navHidden,
                                        children:
                                          "soon" === x
                                            ? (0, a.jsxs)(a.Fragment, {
                                                children: [
                                                  (0, a.jsx)("span", {
                                                    className:
                                                      o().navHidden__text,
                                                    children: (0, p.$)(i),
                                                  }),
                                                  (0, a.jsx)(z, {
                                                    type: "soon",
                                                  }),
                                                ],
                                              })
                                            : (0, a.jsxs)(a.Fragment, {
                                                children: [
                                                  (0, a.jsx)(v.m, {
                                                    className:
                                                      o().navHidden__icon,
                                                  }),
                                                  (0, a.jsx)("span", {
                                                    className:
                                                      o().navHidden__text,
                                                    children: (0, p.$)(i),
                                                  }),
                                                ],
                                              }),
                                      },
                                      t
                                    )
                                  : (0, a.jsx)(
                                      "li",
                                      {
                                        children: (0, a.jsxs)(u.default, {
                                          href: s,
                                          target: d ? "_blank" : void 0,
                                          className: r()(o().nav, "IsLink", {
                                            [o().active]:
                                              "/msg/delegate" !== n &&
                                              "/msg/protocols" !== n &&
                                              "/" !== n
                                                ? h && l?.includes(h[0])
                                                : l?.includes(n),
                                          }),
                                          children: [
                                            (0, p.$)(i),
                                            d &&
                                              (0, a.jsx)(E.default, {
                                                width: 12,
                                                height: 12,
                                                src: A.Z.src,
                                                className:
                                                  o().externalLinkColor,
                                                alt: "External Link",
                                              }),
                                          ],
                                        }),
                                      },
                                      t
                                    );
                              }),
                            }),
                          ],
                        }),
                        (0, a.jsx)("div", {
                          className: o().right,
                          children: (0, a.jsx)(x.Z, {
                            addresses: Q,
                            onConnect: et,
                            chainId: I || 0,
                            isLoadingEntangleTypes: H,
                          }),
                        }),
                      ],
                    }),
                    i?.generalMessage &&
                      "object" == typeof i.generalMessage &&
                      (0, a.jsx)(w.Z, { ...i.generalMessage }),
                    (0, a.jsx)(h.F, {}),
                  ],
                }),
              ],
            })
          );
        };
    },
    38405: function (e, t, n) {
      "use strict";
      n.d(t, {
        O: function () {
          return f;
        },
      });
      var a,
        i,
        r = n(57437),
        s = n(2265),
        o = n(33145),
        l = { src: "/_next/static/media/entangle-logo.6bacabfa.svg" },
        c = { src: "/_next/static/media/entangle-text-logo.d2c29f27.svg" },
        d = { src: "/_next/static/media/udf-logo.e3393028.svg" },
        u = { src: "/_next/static/media/udf-text-logo.d411f888.svg" },
        x = n(68099),
        h = n(51351),
        m = { src: "/_next/static/media/uts-logo.ed13ccc0.svg" },
        p = { src: "/_next/static/media/uts-text-logo.1509ef82.svg" },
        k = n(84466),
        _ = n.n(k);
      ((a = i || (i = {})).HUB = "hub"),
        (a.UDF = "udf"),
        (a.BRIDGE = "bridge"),
        (a.ETS = "ets");
      let f = (0, s.memo)((e) => {
        let { entangleType: t } = e;
        return (0, r.jsx)("div", {
          children: (0, r.jsx)("a", {
            className: _().root,
            href: "/",
            children: (() => {
              switch (t.label) {
                case "hub":
                default:
                  return (0, r.jsxs)(r.Fragment, {
                    children: [
                      (0, r.jsx)(o.default, {
                        src: l.src,
                        width: 32,
                        height: 16,
                        alt: "Entangle AI Logo",
                      }),
                      (0, r.jsx)(o.default, {
                        src: c.src,
                        width: 82,
                        height: 12,
                        alt: "Entangle AI Text Logo",
                      }),
                    ],
                  });
                case "udf":
                  return (0, r.jsxs)(r.Fragment, {
                    children: [
                      (0, r.jsx)(o.default, {
                        src: d.src,
                        width: 16,
                        height: 20,
                        alt: "UDF Logo",
                      }),
                      (0, r.jsx)(o.default, {
                        src: u.src,
                        width: 32,
                        height: 20,
                        alt: "UDF Text Logo",
                      }),
                    ],
                  });
                case "ets":
                  return (0, r.jsxs)(r.Fragment, {
                    children: [
                      (0, r.jsx)(o.default, {
                        src: m.src,
                        width: 20,
                        height: 19,
                        alt: "UTS Logo",
                      }),
                      (0, r.jsx)(o.default, {
                        src: p.src,
                        width: 32,
                        height: 19,
                        alt: "UTS Text Logo",
                      }),
                    ],
                  });
                case "bridge":
                  return (0, r.jsxs)(r.Fragment, {
                    children: [
                      (0, r.jsx)(o.default, {
                        src: x.Z.src,
                        width: 16,
                        height: 16,
                        alt: "Bridge Logo",
                      }),
                      (0, r.jsx)(o.default, {
                        src: h.Z.src,
                        width: 60,
                        height: 19,
                        alt: "Bridge Text Logo",
                      }),
                    ],
                  });
              }
            })(),
          }),
        });
      });
      f.displayName = "HeaderLogo";
    },
    29718: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          HubHeader: function () {
            return ea;
          },
        });
      var a = n(57437),
        i = n(2265),
        r = n(99376),
        s = n(68575),
        o = n(27648),
        l = n(36760),
        c = n.n(l),
        d = n(44753),
        u = n(79748),
        x = n.n(u),
        h = n(50339),
        m = n(3573),
        p = n(10740),
        k = n(91960),
        _ = n(28369),
        f = n(83526),
        g = n(70755),
        y = n(47374),
        v = n(33730),
        b = n(54647),
        C = n(66972),
        B = n(59771),
        j = n(15150),
        w = n(10270),
        N = n(73160),
        E = n.n(N),
        A = n(33145),
        H = n(83276),
        V = n(44738),
        T = n(34409),
        D = n(70388),
        S = n(80361),
        I = n(65623),
        G = n(38405),
        P = n(87057),
        M = n(53929);
      let L = (e) => {
        let { className: t } = e;
        return (0, a.jsxs)("svg", {
          className: t,
          viewBox: "0 0 18 18",
          width: "16",
          height: "20",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            (0, a.jsx)("rect", {
              x: "0.3203",
              y: "7.4683",
              width: "7.14894",
              height: "10.2128",
              rx: "1.02128",
              fill: "white",
            }),
            (0, a.jsx)("rect", {
              x: "17.6797",
              y: "0.3193",
              width: "5.10638",
              height: "17.3617",
              rx: "1.02128",
              transform: "rotate(90 17.6797 0.3193)",
              fill: "white",
            }),
            (0, a.jsx)("rect", {
              x: "17.6797",
              y: "13.5957",
              width: "4.08511",
              height: "8.17021",
              rx: "1.02128",
              transform: "rotate(90 17.6797 13.5957)",
              fill: "white",
            }),
            (0, a.jsx)("rect", {
              x: "17.6797",
              y: "7.4683",
              width: "4.08511",
              height: "8.17021",
              rx: "1.02128",
              transform: "rotate(90 17.6797 7.4683)",
              fill: "white",
            }),
          ],
        });
      };
      var F = (0, i.memo)((e) => {
          let {
              chainId: t,
              navItems: n,
              onConnect: s,
              onDisconnect: l,
              onChangeEntangleType: d,
              entangleType: u,
              addresses: x,
            } = e,
            p = (0, r.usePathname)(),
            [k, f] = (0, i.useState)(!1),
            g = (0, h.a)(1024),
            { goBackState: y, content: v, showBackButton: C } = (0, S.vU)(),
            { isLoading: B } = (0, I.lM)();
          return (
            (0, i.useEffect)(() => {
              let e = document.getElementById("root"),
                t = "overflow-hidden h-full w-full fixed".split(" ");
              return e
                ? (k ? e.classList.add(...t) : e.classList.remove(...t),
                  () => {
                    e.classList.remove(...t);
                  })
                : () => void 0;
            }, [k]),
            (0, i.useEffect)(() => {
              f(!1);
            }, [p]),
            (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsxs)("div", {
                  className: E().headerBurger,
                  children: [
                    C
                      ? (0, a.jsxs)("button", {
                          className: E().returnBack,
                          onClick: y,
                          children: [
                            (0, a.jsx)(D.X, {
                              className: E().returnBack__icon,
                            }),
                            (0, a.jsx)("span", {
                              className: E().returnBack__label,
                              children: `Back to ${v}`,
                            }),
                          ],
                        })
                      : (0, a.jsx)(G.O, { entangleType: u }),
                    (0, a.jsxs)("div", {
                      className: E().right,
                      children: [
                        g &&
                          !j.HC &&
                          !k &&
                          (0, a.jsxs)(a.Fragment, {
                            children: [
                              (0, a.jsx)(w.J, {}),
                            ],
                          }),
                        !k &&
                          (0, a.jsx)(m.Z, {
                            addresses: x,
                            onConnect: s,
                            chainId: t,
                            isLoadingEntangleTypes: B,
                          }),
                        (0, a.jsx)("button", {
                          onClick: () => f(!k),
                          children: (0, a.jsx)(A.default, {
                            className: E().burgerMenuIcon,
                            src: k ? V.Z.src : H.Z.src,
                            alt: k ? "Close" : "Open",
                            width: 32,
                            height: 32,
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                k &&
                  (0, a.jsxs)("div", {
                    className: E().headerBurger__menu,
                    children: [
                      (0, a.jsxs)("div", {
                        children: [
                          n.map((e, t) => {
                            let {
                              name: n,
                              href: r,
                              subLinks: s,
                              isHidden: l,
                            } = e;
                            return l
                              ? (0, a.jsxs)(
                                  "div",
                                  {
                                    className: c()(
                                      E().headerBurger__item,
                                      E().navHidden
                                    ),
                                    children: [
                                      (0, a.jsx)(b.m, {
                                        className: E().navHidden__icon,
                                      }),
                                      (0, a.jsx)("span", {
                                        className: E().navHidden__text,
                                        children: (0, _.$)(n),
                                      }),
                                    ],
                                  },
                                  t
                                )
                              : (0, a.jsxs)(
                                  i.Fragment,
                                  {
                                    children: [
                                      (0, a.jsx)("div", {
                                        className: E().headerBurger__item,
                                        children: (0, a.jsx)(o.default, {
                                          href: r,
                                          className: E().headerBurger__link,
                                          children: (0, _.$)(n),
                                        }),
                                      }),
                                      s &&
                                        s.map((e, t) => {
                                          let {
                                            name: n,
                                            isDesktopOnly: i = !1,
                                            href: r,
                                          } = e;
                                          return (0, a.jsx)(
                                            "div",
                                            {
                                              className: c()(
                                                E().headerBurger__subItem,
                                                { hidden: i }
                                              ),
                                              children: (0, a.jsx)(o.default, {
                                                href: r,
                                                children: (0, a.jsx)(P.Z, {
                                                  children: (0, _.$)(n),
                                                }),
                                              }),
                                            },
                                            t
                                          );
                                        }),
                                    ],
                                  },
                                  t
                                );
                          }),
                          (0, a.jsxs)("div", {
                            className: c()(
                              E().headerBurger__item,
                              E().headerBurger__disconnectContainer,
                              {
                                [E().headerBurger__disconnectContainer_visible]:
                                  x.filter(Boolean).length,
                              }
                            ),
                            children: [
                              (0, a.jsx)(A.default, {
                                src: T.Z.src,
                                alt: "Disconnect",
                                width: 20,
                                height: 20,
                              }),
                              (0, a.jsx)("button", {
                                onClick: l,
                                children: "Disconnect",
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, a.jsx)(M.G, { className: E().headerBurger_footer }),
                    ],
                  }),
              ],
            })
          );
        }),
        U = n(21019),
        Z = n.n(U),
        W = n(16629),
        R = {
          src: "/_next/static/media/search.d155ff43.svg",
          height: 24,
          width: 25,
          blurWidth: 0,
          blurHeight: 0,
        },
        O = n(32889),
        $ = n(6874),
        z = n(87591),
        K = n(51378);
      let Y = () => {
        let e = (0, k.TL)(),
          { push: t } = (0, r.useRouter)(),
          [n, a] = (0, i.useState)(null),
          [s, o] = (0, i.useState)(null),
          [l, c] = (0, i.useState)(null),
          d = n && (0, $.O)(n),
          { data: u } = (0, z.p)(n || "", { skip: !n || !!d }),
          { data: x } = (0, K.UI)(n || "", { skip: !n || !d }),
          {
            store: {
              BlockEntity: { block: h },
              ValidatorEntity: { delegationValidators: m },
              MessageEntity: { message: p },
              ProtocolEntity: { protocol: _ },
              AgentEntity: { agent: f },
            },
            asyncActions: {
              Block: { getBlockByHash: g },
              Validator: { getFilteredDelegationValidators: y },
              Message: { getMessage: v },
              Protocol: { getProtocol: b },
              Agent: { getAgent: C },
            },
          } = (0, k.oR)((e) => ({
            BlockEntity: e.BlockEntity,
            ValidatorEntity: e.ValidatorEntity,
            MessageEntity: e.MessageEntity,
            ProtocolEntity: e.ProtocolEntity,
            AgentEntity: e.AgentEntity,
          }));
        (0, i.useEffect)(() => {
          u && o(u), x && c(x);
        }, [u, x]);
        let B = (0, i.useMemo)(() => m.find((e) => e.address === n), [m, n]);
        (0, i.useEffect)(() => {
          w();
        }, [h, B, s, l, f, _, p]);
        let j = () => {
            a(null), o(null), c(null);
          },
          w = () => {
            if (B) {
              t(`#`), j();
              return;
            }
            if (h) {
              t(`#`);
              return;
            }
            if (f && 0 !== Object.keys(f).length) {
              t(`/msg/agents/${f.address}`);
              return;
            }
            if (s || l?.transaction?.length) {
              let e = s?.tx_response?.txhash || l?.transaction[0].hash;
              t(`#`), j();
              return;
            }
            if (_ && 0 !== Object.keys(_).length) {
              t(`#`);
              return;
            }
            if (p) {
              t(`#`);
              return;
            }
          };
        return {
          onSearchSubmit: async (t) => {
            try {
              a(t),
                e(g(t.toUpperCase())),
                e(y({ filters: {}, sort: null, delegatorAddress: "" })),
                e(C({ hash: t })),
                e(v(t)),
                "gorples" === t.toLowerCase() && (t = "Borpa"),
                e(b(t)),
                e(b((0, O.c)(t)));
            } catch (e) {
              console.error("Search error = ", e);
            }
          },
        };
      };
      var q = (0, i.memo)((e) => {
          let { className: t, searchIconClassName: n } = e,
            { onSearchSubmit: r } = Y(),
            [s, o] = (0, i.useState)("");
          return (0, a.jsxs)("div", {
            className: Z().inputWrapper,
            children: [
              (0, a.jsx)("input", {
                value: s,
                onChange: (e) => {
                  o(e.target.value);
                },
                onKeyDown: (e) => {
                  "Enter" === e.key && r(s);
                },
                className: c()(Z().input, t, "!pr-[36px]"),
                placeholder: "Search in Message ID / Txn hash / Address",
              }),
              (0, a.jsx)("button", {
                onClick: () => {
                  o("");
                },
                className: `${Z().inputClearButton}`,
                children: (0, a.jsx)(A.default, {
                  src: s ? W.Z : R,
                  className: n,
                  width: 24,
                  height: 24,
                  alt: "Clear",
                }),
              }),
            ],
          });
        }),
        X = n(56464),
        J = n(85340),
        Q = n(29557),
        ee = n(76985),
        et = n(29853);
      let en = void 0,
        ea = () => {
          let { push: e } = (0, r.useRouter)();
          (0, d.n)();
          let t = (0, k.TL)(),
            n = (0, r.usePathname)(),
            l = (0, h.a)(1024),
            u = (0, s.v9)((e) => e.AppEntity.appGlobalConfig),
            { entangleTypesOptions: N, isLoading: E } = (0, I.lM)(),
            H = (0, i.useMemo)(
              () =>
                j.HC
                  ? N.find((e) => e.label === I.zB.UDF)
                  : "/bridge" === n
                  ? N.find((e) => e.label === I.zB.BRIDGE)
                  : N[0],
              [n, N]
            ),
            [V, T] = (0, i.useState)(H),
            { address: D, chainId: S, disconnect: P } = (0, v.Z)(),
            { address: M, disconnectWallet: U } = (0, ee.e)(),
            { address: Z, connectWallet: W, disconnectWallet: R } = (0, f.d)(),
            { address: O, connectWallet: $, disconnectWallet: z } = (0, g.Y)(),
            { address: K, disconnectWallet: Y } = (0, C.H)(),
            ea = (0, i.useMemo)(() => [D, Z, O, K, M], [D, Z, O, K, M]),
            {
              actions: {
                App: { setWalletConnectChainId: ei },
              },
            } = (0, k.oR)((e) => ({ App: e.AppEntity })),
            er = () =>
              y.h
                ? W()
                : (0, B.L4)()
                ? $()
                : void t(ei(j.vL ? Q.m5.Ethereum.chainId : Q.ZP.chainId)),
            es = (0, i.useCallback)(async () => {
              P(), R(), z(), Y(), U();
            }, [P, R, z, Y, U]),
            eo = (0, i.useMemo)(() => (0, X.Z)(en), []);
          return (
            (0, i.useEffect)(() => {
              j.HC ? T(N.find((e) => e.label === I.zB.UDF)) : T(H);
            }, [H, N]),
            (0, a.jsxs)("header", {
              className:
                "sticky top-0 z-[var(--z-index-max)] w-full bg-neutral-10",
              children: [
                (0, a.jsxs)("div", {
                  className: "lg:hidden",
                  children: [
                    (0, a.jsx)(F, {
                      addresses: ea,
                      chainId: S || 0,
                      basePath: en,
                      navItems: eo,
                      onConnect: er,
                      onDisconnect: es,
                      entangleType: V,
                      onChangeEntangleType: (t) => {
                        let n = N.find((e) => String(e.value) === String(t));
                        T(n),
                          n.external
                            ? (window.location.href = n.link)
                            : e(n.link);
                      },
                    }),
                    u?.generalMessage &&
                      (0, a.jsx)(J.Z, { ...u.generalMessage }),
                    "/msg/delegate" !== n &&
                      "/bridge" !== n &&
                      !j.HC &&
                      (0, a.jsx)("div", {
                        className: "mt-6 w-full px-4",
                        children: (0, a.jsx)(q, {
                          className: `${
                            x().search
                          } w-full !max-w-full !min-w-full`,
                        }),
                      }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: "hidden lg:block",
                  children: [
                    (0, a.jsxs)("div", {
                      className: x().container,
                      children: [
                        (0, a.jsxs)("div", {
                          className: x().firstWrap,
                          children: [
                            (0, a.jsx)(G.O, { entangleType: V }),
                            (0, a.jsx)("div", {
                              className: x().navContainer,
                              children: eo.map((e, t) => {
                                let {
                                    name: i,
                                    href: r,
                                    subRoutes: s,
                                    isHidden: l,
                                    isExternal: d,
                                  } = e,
                                  u = n && n.match(/^\/[^\/]+/);
                                return l
                                  ? (0, a.jsxs)(
                                      "div",
                                      {
                                        className: x().navHidden,
                                        children: [
                                          (0, a.jsx)(b.m, {
                                            className: x().navHidden__icon,
                                          }),
                                          (0, a.jsx)("span", {
                                            className: x().navHidden__text,
                                            children: (0, _.$)(i),
                                          }),
                                        ],
                                      },
                                      t
                                    )
                                  : (0, a.jsxs)(
                                      o.default,
                                      {
                                        href: r,
                                        className: c()(x().nav, "IsLink", {
                                          [x().active]:
                                            "/msg/delegate" !== n &&
                                            "/msg/protocols" !== n &&
                                            "/" !== n
                                              ? u && s?.includes(u[0])
                                              : s?.includes(n),
                                        }),
                                        children: [
                                          (0, _.$)(i),
                                          d &&
                                            (0, a.jsx)(A.default, {
                                              width: 12,
                                              height: 12,
                                              src: et.Z.src,
                                              className: x().externalLinkColor,
                                              alt: "External Link",
                                            }),
                                        ],
                                      },
                                      t
                                    );
                              }),
                            }),
                          ],
                        }),
                        (0, a.jsxs)("div", {
                          className: x().right,
                          children: [
                            !l &&
                              !j.HC &&
                              (0, a.jsxs)(a.Fragment, {
                                children: [
                                  !j.HC &&
                                    (0, a.jsx)(q, {
                                      searchIconClassName: x().searchIcon,
                                    }),
                                  (0, a.jsx)(w.J, {}),
                             
                                ],
                              }),
                            (0, a.jsx)(m.Z, {
                              addresses: ea,
                              onConnect: er,
                              chainId: S || 0,
                              isLoadingEntangleTypes: E,
                            }),
                          ],
                        }),
                      ],
                    }),
                    u?.generalMessage &&
                      "object" == typeof u.generalMessage &&
                      (0, a.jsx)(J.Z, { ...u.generalMessage }),
                    (0, a.jsx)(p.F, {}),
                  ],
                }),
              ],
            })
          );
        };
    },
    85340: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return l;
        },
      });
      var a = n(57437),
        i = n(85114),
        r = n.n(i),
        s = n(99376),
        o = n(2265),
        l = (0, o.memo)((e) => {
          let {
              text: t = "",
              html: n = "",
              color: i = "",
              bgColor: l = "",
              messageId: c = 0,
              pathToShowOn: d = [],
            } = e,
            u = (0, s.usePathname)(),
            [x, h] = (0, o.useState)(!0),
            m = (0, o.useMemo)(
              () =>
                JSON.parse(
                  window.localStorage.getItem("readMessageIds") || "[]"
                ),
              []
            );
          return !x || (c && m.includes(c)) || (d.length > 0 && !d.includes(u))
            ? null
            : (0, a.jsx)("div", {
                className:
                  "w-full py-2 bg-gorples flex justify-center items-center origin-top transition-all duration-500",
                style: { background: l || "rgb(84 177 11)" },
                children: (0, a.jsxs)("div", {
                  className:
                    "relative gap-x-3 flex flex-col justify-center items-center sm:flex-row",
                  style: {
                    width: "100%",
                    maxWidth: "1400px",
                    margin: "0 auto",
                  },
                  children: [
                    (0, a.jsx)("button", {
                      onClick: () => {
                        if (c) {
                          let e = [...m, c];
                          window.localStorage.setItem(
                            "readMessageIds",
                            JSON.stringify(e)
                          );
                        }
                        h(!1);
                      },
                      className: r().notify__close,
                      children: (0, a.jsxs)("svg", {
                        fill: "none",
                        width: "12",
                        height: "12",
                        viewBox: "0 0 12 12",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                          (0, a.jsx)("path", {
                            stroke: "#06E097",
                            strokeWidth: "1.25",
                            strokeLinecap: "round",
                            d: "M1.18596 10.127L10.4386 0.874431",
                          }),
                          (0, a.jsx)("path", {
                            stroke: "#06E097",
                            strokeWidth: "1.25",
                            strokeLinecap: "round",
                            d: "M10.4998 10.1272L1.24757 0.874524",
                          }),
                        ],
                      }),
                    }),
                    n
                      ? (0, a.jsx)("div", {
                          dangerouslySetInnerHTML: { __html: n },
                        })
                      : (0, a.jsx)("p", {
                          className:
                            "text-black text-sm sm:text-lg font-medium font-inter",
                          children: t,
                        }),
                  ],
                }),
              });
        });
    },
    10740: function (e, t, n) {
      "use strict";
      n.d(t, {
        F: function () {
          return r;
        },
      });
      var a = n(57437),
        i = n(75186);
      let r = () =>
        (0, a.jsx)(i.x7, {
          position: "top-center",
          reverseOrder: !1,
          gutter: 8,
          containerClassName: "",
          containerStyle: {},
          toastOptions: {
            className: "",
            duration: 5e3,
            style: { background: "#363636", color: "#fff" },
            success: { duration: 3e3 },
          },
        });
    },
    13281: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          UDFHeader: function () {
            return $;
          },
        });
      var a = n(57437),
        i = n(36760),
        r = n.n(i),
        s = n(45896),
        o = n.n(s),
        l = n(99376),
        c = n(50339),
        d = n(2265),
        u = n(44753),
        x = n(27648),
        h = n(3573),
        m = n(10740),
        p = n(91960),
        k = n(28369),
        _ = n(83526),
        f = n(70755),
        g = n(47374),
        y = n(33730),
        v = n(68575),
        b = n(54647),
        C = n(66972),
        B = n(59771),
        j = n(15150),
        w = n(10270),
        N = n(65623),
        E = n(56464),
        A = n(85340),
        H = n(38405),
        V = n(33145),
        T = n(85709),
        D = n.n(T),
        S = n(83276),
        I = n(44738),
        G = n(34409),
        P = n(70388),
        M = n(80361),
        L = n(87057),
        F = n(53929),
        U = n(29853),
        Z = (0, d.memo)((e) => {
          let {
              chainId: t,
              navItems: n,
              onConnect: i,
              onDisconnect: s,
              onChangeEntangleType: o,
              entangleType: u,
              addresses: m,
            } = e,
            p = (0, l.usePathname)(),
            [_, f] = (0, d.useState)(!1),
            g = (0, c.a)(1024),
            { goBackState: y, content: v, showBackButton: C } = (0, M.vU)(),
            { isLoading: B } = (0, N.lM)();
          return (
            (0, d.useEffect)(() => {
              let e = document.getElementById("root"),
                t = "overflow-hidden h-full w-full fixed".split(" ");
              return e
                ? (_ ? e.classList.add(...t) : e.classList.remove(...t),
                  () => {
                    e.classList.remove(...t);
                  })
                : () => void 0;
            }, [_]),
            (0, d.useEffect)(() => {
              f(!1);
            }, [p]),
            (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsxs)("div", {
                  className: D().headerBurger,
                  children: [
                    C
                      ? (0, a.jsxs)("button", {
                          className: D().returnBack,
                          onClick: y,
                          children: [
                            (0, a.jsx)(P.X, {
                              className: D().returnBack__icon,
                            }),
                            (0, a.jsx)("span", {
                              className: D().returnBack__label,
                              children: `Back to ${v}`,
                            }),
                          ],
                        })
                      : (0, a.jsx)(H.O, { entangleType: u }),
                    (0, a.jsxs)("div", {
                      className: D().right,
                      children: [
                        g && !j.HC && !_ && (0, a.jsx)(w.J, {}),
                        !_ &&
                          (0, a.jsx)(h.Z, {
                            addresses: m,
                            onConnect: i,
                            chainId: t,
                            isLoadingEntangleTypes: B,
                          }),
                        (0, a.jsx)("button", {
                          onClick: () => f(!_),
                          children: (0, a.jsx)(V.default, {
                            className: D().burgerMenuIcon,
                            src: _ ? I.Z.src : S.Z.src,
                            alt: _ ? "Close" : "Open",
                            width: 32,
                            height: 32,
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                _ &&
                  (0, a.jsxs)("div", {
                    className: D().headerBurger__menu,
                    children: [
                      (0, a.jsxs)("div", {
                        children: [
                          n.map((e, t) => {
                            let {
                              name: n,
                              href: i,
                              subLinks: s,
                              isHidden: o,
                              isExternal: l,
                            } = e;
                            return o
                              ? (0, a.jsxs)(
                                  "div",
                                  {
                                    className: r()(
                                      D().headerBurger__item,
                                      D().navHidden
                                    ),
                                    children: [
                                      (0, a.jsx)(b.m, {
                                        className: D().navHidden__icon,
                                      }),
                                      (0, a.jsx)("span", {
                                        className: D().navHidden__text,
                                        children: (0, k.$)(n),
                                      }),
                                    ],
                                  },
                                  t
                                )
                              : (0, a.jsxs)(
                                  d.Fragment,
                                  {
                                    children: [
                                      (0, a.jsx)("div", {
                                        className: D().headerBurger__item,
                                        children: (0, a.jsxs)(x.default, {
                                          target: l ? "_blank" : void 0,
                                          href: i,
                                          className: D().headerBurger__link,
                                          children: [
                                            (0, k.$)(n),
                                            l &&
                                              (0, a.jsx)(V.default, {
                                                width: 16,
                                                height: 16,
                                                src: U.Z.src,
                                                className:
                                                  D().externalLinkColor,
                                                alt: "External Link",
                                              }),
                                          ],
                                        }),
                                      }),
                                      s &&
                                        s.map((e, t) => {
                                          let {
                                            name: n,
                                            isDesktopOnly: i = !1,
                                            href: s,
                                          } = e;
                                          return (0, a.jsx)(
                                            "div",
                                            {
                                              className: r()(
                                                D().headerBurger__subItem,
                                                { hidden: i }
                                              ),
                                              children: (0, a.jsx)(x.default, {
                                                href: s,
                                                children: (0, a.jsx)(L.Z, {
                                                  children: (0, k.$)(n),
                                                }),
                                              }),
                                            },
                                            t
                                          );
                                        }),
                                    ],
                                  },
                                  t
                                );
                          }),
                          (0, a.jsxs)("div", {
                            className: r()(
                              D().headerBurger__item,
                              D().headerBurger__disconnectContainer,
                              {
                                [D().headerBurger__disconnectContainer_visible]:
                                  m.filter(Boolean).length,
                              }
                            ),
                            children: [
                              (0, a.jsx)(V.default, {
                                src: G.Z.src,
                                alt: "Disconnect",
                                width: 20,
                                height: 20,
                              }),
                              (0, a.jsx)("button", {
                                onClick: s,
                                children: "Disconnect",
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, a.jsx)(F.G, { className: D().headerBurger_footer }),
                    ],
                  }),
              ],
            })
          );
        }),
        W = n(29557),
        R = n(76985);
      let O = void 0,
        $ = () => {
          let { push: e } = (0, l.useRouter)();
          (0, u.n)();
          let t = (0, p.TL)(),
            n = (0, l.usePathname)(),
            i = (0, c.a)(1024),
            s = (0, v.v9)((e) => e.AppEntity.appGlobalConfig),
            { entangleTypesOptions: T, isLoading: D } = (0, N.lM)(),
            S = (0, d.useMemo)(
              () =>
                j.HC
                  ? T.find((e) => e.label === N.zB.UDF)
                  : "/bridge" === n
                  ? T.find((e) => e.label === N.zB.BRIDGE)
                  : T[0],
              [n, T]
            ),
            [I, G] = (0, d.useState)(S),
            { address: P, chainId: M, disconnect: L } = (0, y.Z)(),
            { address: F, connectWallet: $, disconnectWallet: z } = (0, _.d)(),
            { address: K, connectWallet: Y, disconnectWallet: q } = (0, f.Y)(),
            { address: X, disconnectWallet: J } = (0, C.H)(),
            { address: Q, disconnectWallet: ee } = (0, R.e)(),
            et = (0, d.useMemo)(() => [P, F, K, X, Q], [P, F, K, X, Q]),
            {
              actions: {
                App: { setWalletConnectChainId: en },
              },
            } = (0, p.oR)((e) => ({ App: e.AppEntity })),
            ea = () =>
              g.h
                ? $()
                : (0, B.L4)()
                ? Y()
                : void t(en(j.vL ? W.m5.Ethereum.chainId : W.ZP.chainId)),
            ei = (0, d.useCallback)(async () => {
              L(), z(), q(), J(), ee();
            }, [L, z, q, J, ee]),
            er = (0, d.useMemo)(() => (0, E.Z)(O), []);
          return (
            (0, d.useEffect)(() => {
              j.HC ? G(T.find((e) => e.label === N.zB.UDF)) : G(S);
            }, [S, T]),
            (0, a.jsxs)("header", {
              className:
                "sticky top-0 z-[var(--z-index-max)] w-full bg-neutral-10",
              children: [
                (0, a.jsxs)("div", {
                  className: "lg:hidden",
                  children: [
                    (0, a.jsx)(Z, {
                      addresses: et,
                      chainId: M || 0,
                      basePath: O,
                      navItems: er,
                      onConnect: ea,
                      onDisconnect: ei,
                      entangleType: I,
                      onChangeEntangleType: (t) => {
                        let n = T.find((e) => String(e.value) === String(t));
                        G(n),
                          n.external
                            ? (window.location.href = n.link)
                            : e(n.link);
                      },
                    }),
                    s?.generalMessage &&
                      (0, a.jsx)(A.Z, { ...s.generalMessage }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: "hidden lg:block",
                  children: [
                    (0, a.jsxs)("div", {
                      className: o().container,
                      children: [
                        (0, a.jsxs)("div", {
                          className: o().firstWrap,
                          children: [
                            (0, a.jsx)(H.O, { entangleType: I }),
                            (0, a.jsx)("div", {
                              className: o().navContainer,
                              children: er.map((e, t) => {
                                let {
                                    name: i,
                                    href: s,
                                    subRoutes: l,
                                    isHidden: c,
                                    isExternal: d,
                                  } = e,
                                  u = n && n.match(/^\/[^\/]+/);
                                return c
                                  ? (0, a.jsxs)(
                                      "div",
                                      {
                                        className: o().navHidden,
                                        children: [
                                          (0, a.jsx)(b.m, {
                                            className: o().navHidden__icon,
                                          }),
                                          (0, a.jsx)("span", {
                                            className: o().navHidden__text,
                                            children: (0, k.$)(i),
                                          }),
                                        ],
                                      },
                                      t
                                    )
                                  : (0, a.jsxs)(
                                      x.default,
                                      {
                                        href: s,
                                        target: d ? "_blank" : void 0,
                                        className: r()(o().nav, "IsLink", {
                                          [o().active]:
                                            "/msg/delegate" !== n &&
                                            "/msg/protocols" !== n &&
                                            "/" !== n
                                              ? u && l?.includes(u[0])
                                              : l?.includes(n),
                                        }),
                                        children: [
                                          (0, k.$)(i),
                                          d &&
                                            (0, a.jsx)(V.default, {
                                              width: 12,
                                              height: 12,
                                              src: U.Z.src,
                                              className: o().externalLinkColor,
                                              alt: "External Link",
                                            }),
                                        ],
                                      },
                                      t
                                    );
                              }),
                            }),
                          ],
                        }),
                        (0, a.jsxs)("div", {
                          className: o().right,
                          children: [
                            !i && !j.HC && (0, a.jsx)(w.J, {}),
                            (0, a.jsx)(h.Z, {
                              addresses: et,
                              onConnect: ea,
                              chainId: M || 0,
                              isLoadingEntangleTypes: D,
                            }),
                          ],
                        }),
                      ],
                    }),
                    s?.generalMessage &&
                      "object" == typeof s.generalMessage &&
                      (0, a.jsx)(A.Z, { ...s.generalMessage }),
                    (0, a.jsx)(m.F, {}),
                  ],
                }),
              ],
            })
          );
        };
    },
    64258: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          UTSHeader: function () {
            return Y;
          },
        });
      var a = n(57437),
        i = n(36760),
        r = n.n(i),
        s = n(63146),
        o = n.n(s),
        l = n(99376),
        c = n(2265),
        d = n(44753),
        u = n(27648),
        x = n(3573),
        h = n(10740),
        m = n(91960),
        p = n(28369),
        k = n(83526),
        _ = n(70755),
        f = n(47374),
        g = n(33730),
        y = n(68575),
        v = n(54647),
        b = n(66972),
        C = n(59771),
        B = n(15150),
        j = n(65623),
        w = n(56464),
        N = n(85340),
        E = n(38405),
        A = n(33145),
        H = n(29853),
        V = n(83188),
        T = n.n(V),
        D = n(83276),
        S = n(44738),
        I = n(50339),
        G = n(34409),
        P = n(70388),
        M = n(80361),
        L = n(87057),
        F = n(99759);
      let U = (e) => {
        let { className: t } = e;
        return (0, a.jsx)("svg", {
          width: "16",
          height: "16",
          viewBox: "0 0 16 16",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          className: t,
          children: (0, a.jsx)("path", {
            d: "M6.93451 14.5967C8.21635 14.8073 9.5318 14.6389 10.7192 14.112C11.9066 13.5852 12.9142 12.7229 13.6182 11.6312C14.3222 10.5395 14.6919 9.26587 14.6819 7.96688C14.6719 6.66789 14.2826 5.40012 13.5618 4.31938M9.00118 1.39672C7.72458 1.20177 6.41884 1.38179 5.24262 1.91492C4.0664 2.44804 3.07034 3.3113 2.37548 4.39982C1.68061 5.48834 1.31685 6.75524 1.32839 8.04659C1.33994 9.33794 1.72629 10.5981 2.44052 11.6741M10.0012 7.99672C10.0012 9.10129 9.10575 9.99672 8.00118 9.99672C6.89661 9.99672 6.00118 9.10129 6.00118 7.99672C6.00118 6.89215 6.89661 5.99672 8.00118 5.99672C9.10575 5.99672 10.0012 6.89215 10.0012 7.99672ZM14.0012 3.33005C14.0012 4.06643 13.4042 4.66338 12.6678 4.66338C11.9315 4.66338 11.3345 4.06643 11.3345 3.33005C11.3345 2.59367 11.9315 1.99672 12.6678 1.99672C13.4042 1.99672 14.0012 2.59367 14.0012 3.33005ZM4.66785 12.6634C4.66785 13.3998 4.07089 13.9967 3.33452 13.9967C2.59814 13.9967 2.00118 13.3998 2.00118 12.6634C2.00118 11.927 2.59814 11.33 3.33452 11.33C4.07089 11.33 4.66785 11.927 4.66785 12.6634Z",
            stroke: "#57C8E0",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          }),
        });
      };
      var Z = n(98063),
        W = n.n(Z);
      let R = (0, c.memo)((e) => {
        let { text: t } = e;
        return (0, a.jsxs)(u.default, {
          className: W().stationLink,
          href: "/station",
          children: [(0, a.jsx)(U, { className: W().stationIcon }), t],
        });
      });
      R.displayName = "StationLink";
      var O = (0, c.memo)((e) => {
          let {
              chainId: t,
              navItems: n,
              onConnect: i,
              onDisconnect: s,
              onChangeEntangleType: o,
              entangleType: d,
              addresses: h,
            } = e,
            m = (0, l.usePathname)(),
            [k, _] = (0, c.useState)(!1);
          (0, I.a)(1024);
          let { goBackState: f, content: g, showBackButton: y } = (0, M.vU)(),
            { isLoading: b } = (0, j.lM)();
          return (
            (0, c.useEffect)(() => {
              let e = document.getElementById("root"),
                t = "overflow-hidden h-full w-full fixed".split(" ");
              return e
                ? (k ? e.classList.add(...t) : e.classList.remove(...t),
                  () => {
                    e.classList.remove(...t);
                  })
                : () => void 0;
            }, [k]),
            (0, c.useEffect)(() => {
              _(!1);
            }, [m]),
            (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsxs)("div", {
                  className: T().headerBurger,
                  children: [
                    y
                      ? (0, a.jsxs)("button", {
                          className: T().returnBack,
                          onClick: f,
                          children: [
                            (0, a.jsx)(P.X, {
                              className: T().returnBack__icon,
                            }),
                            (0, a.jsx)("span", {
                              className: T().returnBack__label,
                              children: `Back to ${g}`,
                            }),
                          ],
                        })
                      : (0, a.jsx)(E.O, { entangleType: d }),
                    (0, a.jsxs)("div", {
                      className: T().right,
                      children: [
                        !k &&
                          (0, a.jsx)(x.Z, {
                            addresses: h,
                            onConnect: i,
                            chainId: t,
                            isLoadingEntangleTypes: b,
                          }),
                        (0, a.jsx)(R, {}),
                        (0, a.jsx)("button", {
                          onClick: () => _(!k),
                          children: (0, a.jsx)(A.default, {
                            className: T().burgerMenuIcon,
                            src: k ? S.Z.src : D.Z.src,
                            alt: k ? "Close" : "Open",
                            width: 32,
                            height: 32,
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                k &&
                  (0, a.jsxs)("div", {
                    className: T().headerBurger__menu,
                    children: [
                      (0, a.jsxs)("div", {
                        children: [
                          n.map((e, t) => {
                            let {
                                name: n,
                                href: i,
                                subLinks: s,
                                isHidden: o,
                                isExternal: l,
                              } = e,
                              d = "string" == typeof n ? (0, p.$)(n) : n;
                            return o
                              ? (0, a.jsxs)(
                                  "div",
                                  {
                                    className: r()(
                                      T().headerBurger__item,
                                      T().navHidden
                                    ),
                                    children: [
                                      (0, a.jsx)(v.m, {
                                        className: T().navHidden__icon,
                                      }),
                                      (0, a.jsx)("span", {
                                        className: T().navHidden__text,
                                        children: d,
                                      }),
                                    ],
                                  },
                                  t
                                )
                              : (0, a.jsxs)(
                                  c.Fragment,
                                  {
                                    children: [
                                      (0, a.jsx)("div", {
                                        className: T().headerBurger__item,
                                        children: (0, a.jsxs)(u.default, {
                                          target: l ? "_blank" : void 0,
                                          href: i,
                                          className: T().headerBurger__link,
                                          children: [
                                            d,
                                            l &&
                                              (0, a.jsx)(A.default, {
                                                width: 16,
                                                height: 16,
                                                src: H.Z.src,
                                                className:
                                                  T().externalLinkColor,
                                                alt: "External Link",
                                              }),
                                          ],
                                        }),
                                      }),
                                      s &&
                                        s.map((e, t) => {
                                          let {
                                              name: n,
                                              isDesktopOnly: i = !1,
                                              href: s,
                                            } = e,
                                            o =
                                              "string" == typeof n
                                                ? (0, p.$)(n)
                                                : n;
                                          return (0, a.jsx)(
                                            "div",
                                            {
                                              className: r()(
                                                T().headerBurger__subItem,
                                                { hidden: i }
                                              ),
                                              children: (0, a.jsx)(u.default, {
                                                href: s,
                                                children: (0, a.jsx)(L.Z, {
                                                  children: o,
                                                }),
                                              }),
                                            },
                                            t
                                          );
                                        }),
                                    ],
                                  },
                                  t
                                );
                          }),
                          (0, a.jsxs)("div", {
                            className: r()(
                              T().headerBurger__item,
                              T().headerBurger__disconnectContainer,
                              {
                                [T().headerBurger__disconnectContainer_visible]:
                                  h.filter(Boolean).length,
                              }
                            ),
                            children: [
                              (0, a.jsx)(A.default, {
                                src: G.Z.src,
                                alt: "Disconnect",
                                width: 20,
                                height: 20,
                              }),
                              (0, a.jsx)("button", {
                                onClick: s,
                                children: "Disconnect",
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, a.jsx)(F.UTSFooter, {
                        className: T().headerBurger_footer,
                      }),
                    ],
                  }),
              ],
            })
          );
        }),
        $ = n(29557),
        z = n(76985);
      let K = void 0,
        Y = () => {
          let { push: e } = (0, l.useRouter)();
          (0, d.n)();
          let t = (0, m.TL)(),
            n = (0, l.usePathname)(),
            i = (0, y.v9)((e) => e.AppEntity.appGlobalConfig),
            { entangleTypesOptions: s, isLoading: V } = (0, j.lM)(),
            T = (0, c.useMemo)(
              () =>
                B.vL
                  ? s.find((e) => e.label === j.zB.ETS)
                  : B.Is
                  ? s.find((e) => e.label === j.zB.BRIDGE)
                  : s[0],
              [n, s]
            ),
            [D, S] = (0, c.useState)(T),
            { address: I, chainId: G, disconnect: P } = (0, g.Z)(),
            { address: M, connectWallet: L, disconnectWallet: F } = (0, k.d)(),
            { address: U, connectWallet: Z, disconnectWallet: W } = (0, _.Y)(),
            { address: Y, disconnectWallet: q } = (0, b.H)(),
            { address: X, disconnectWallet: J } = (0, z.e)(),
            Q = (0, c.useMemo)(() => [I, M, U, Y, X], [I, M, U, Y, X]),
            {
              actions: {
                App: { setWalletConnectChainId: ee },
              },
            } = (0, m.oR)((e) => ({ App: e.AppEntity })),
            et = () =>
              f.h
                ? L()
                : (0, C.L4)()
                ? Z()
                : void t(ee(B.vL ? $.m5.Ethereum.chainId : $.ZP.chainId)),
            en = (0, c.useCallback)(async () => {
              P(), F(), W(), q(), J();
            }, [P, F, W, q, J]),
            ea = (0, c.useMemo)(() => (0, w.Z)(K), []);
          return (
            (0, c.useEffect)(() => {
              B.HC ? S(s.find((e) => e.label === j.zB.UDF)) : S(T);
            }, [T, s]),
            (0, a.jsxs)("header", {
              className:
                "sticky top-0 z-[var(--z-index-max)] w-full bg-neutral-10",
              children: [
                (0, a.jsxs)("div", {
                  className: "lg:hidden",
                  children: [
                    (0, a.jsx)(O, {
                      addresses: Q,
                      chainId: G || 0,
                      basePath: K,
                      navItems: ea,
                      onConnect: et,
                      onDisconnect: en,
                      entangleType: D,
                      onChangeEntangleType: (t) => {
                        let n = s.find((e) => String(e.value) === String(t));
                        S(n),
                          n.external
                            ? (window.location.href = n.link)
                            : e(n.link);
                      },
                    }),
                    i?.generalMessage &&
                      (0, a.jsx)(N.Z, { ...i.generalMessage }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: "hidden lg:block",
                  children: [
                    (0, a.jsxs)("div", {
                      className: o().container,
                      children: [
                        (0, a.jsxs)("div", {
                          className: o().firstWrap,
                          children: [
                            (0, a.jsx)(E.O, { entangleType: D }),
                            (0, a.jsx)("div", {
                              className: o().navContainer,
                              children: ea.map((e, t) => {
                                let {
                                    name: n,
                                    href: i,
                                    isHidden: s,
                                    isExternal: l,
                                  } = e,
                                  c = "string" == typeof n ? (0, p.$)(n) : n;
                                return s
                                  ? (0, a.jsxs)(
                                      "div",
                                      {
                                        className: o().etsNavHidden,
                                        children: [
                                          (0, a.jsx)(v.m, {
                                            className: o().navHidden__icon,
                                          }),
                                          (0, a.jsx)("span", {
                                            className: o().navHidden__text,
                                            children: c,
                                          }),
                                        ],
                                      },
                                      t
                                    )
                                  : (0, a.jsxs)(
                                      u.default,
                                      {
                                        href: i,
                                        target: l ? "_blank" : void 0,
                                        className: r()(o().nav, "IsLink"),
                                        children: [
                                          c,
                                          l &&
                                            (0, a.jsx)(A.default, {
                                              width: 12,
                                              height: 12,
                                              src: H.Z.src,
                                              className: o().externalLinkColor,
                                              alt: "External Link",
                                            }),
                                        ],
                                      },
                                      t
                                    );
                              }),
                            }),
                          ],
                        }),
                        (0, a.jsxs)("div", {
                          className: o().right,
                          children: [
                            B.vL && (0, a.jsx)(R, { text: "Station" }),
                            (0, a.jsx)(x.Z, {
                              addresses: Q,
                              onConnect: et,
                              chainId: G || 0,
                              isLoadingEntangleTypes: V,
                            }),
                          ],
                        }),
                      ],
                    }),
                    i?.generalMessage &&
                      "object" == typeof i.generalMessage &&
                      (0, a.jsx)(N.Z, { ...i.generalMessage }),
                    (0, a.jsx)(h.F, {}),
                  ],
                }),
              ],
            })
          );
        };
    },
    56464: function (e, t, n) {
      "use strict";
      var a = n(97897),
        i = n(15150);
      function r(e, t) {
        return e ? a.Ab : t ? a.$f : a.te;
      }
      t.Z = (e) =>
        e
          ? r(i.vL, i.HC).map((t) => {
              let {
                name: n,
                isAnchor: a = !1,
                href: i,
                subLinks: r,
                isHidden: s,
              } = t;
              return r
                ? {
                    name: n,
                    isAnchor: a,
                    href: i.replace(e, "") || "/",
                    subLinks: r.map((t) => {
                      let { name: n, href: i } = t;
                      return {
                        name: n,
                        href: i.replace(e, "") || "/",
                        isExternal: !i.includes(e) || a,
                      };
                    }),
                    isExternal: !i.includes(e) || a,
                    isHidden: s,
                  }
                : {
                    name: n,
                    isAnchor: a,
                    subRoutes: [""],
                    href: i.replace(e, "") || "/",
                    subLinks: r,
                    isExternal: !i.includes(e) || a,
                    isHidden: s,
                  };
            })
          : r(i.vL, i.HC);
    },
    97897: function (e, t, n) {
      "use strict";
      n.d(t, {
        $f: function () {
          return i;
        },
        Ab: function () {
          return s;
        },
        WN: function () {
          return r;
        },
        te: function () {
          return a;
        },
      });
      let a = [
          {
            name: "Blockchain",
            href: "/validators",
            subRoutes: ["/validators", "/blocks", "/transactions", "/params"],
            subLinks: [
              { name: "Validators", href: "/validators" },
              { name: "Blocks", href: "/blocks" },
              { name: "Transactions", href: "/transactions" },
              { name: "Params", href: "/params" },
            ],
          },
       
         
          
        ],
        i = [
          { name: "Data Feeds", href: "/", subRoutes: ["/"] },
          {
            name: "Sources",
            href: "/sources",
            subRoutes: ["/sources"],
            isHidden: !0,
          },
          {
            name: "Dev Portal",
            href: "/dev-portal",
            subRoutes: ["/dev-portal"],
            isHidden: !0,
          },
          {
            name: "Explorer",
            href: "https://hub.entangle.fi/",
            subRoutes: [],
            isExternal: !0,
          },
        ],
        r = [
          { name: "USDC", href: "/bridge/usdc", subRoutes: ["/bridge/usdc"] },
          {
            name: "Rewards",
            href: "https://omnipoints.entangle.fi/",
            subRoutes: ["/dev-portal"],
            isExternal: !0,
          },
          {
            name: "Go Omnichain",
            href: "/expand",
            subRoutes: [],
            headerBadge: "new",
          },
          {
            name: "Leaderboard",
            href: "/leaderboard",
            subRoutes: [],
            headerBadge: "soon",
          },
        ],
        s = [
          { name: "Launch Universal Token", href: "/" },
          { name: "Launch Universal NFT", href: "/nft", isHidden: !0 },
        ];
    },
    65623: function (e, t, n) {
      "use strict";
      n.d(t, {
        zB: function () {
          return i;
        },
        lM: function () {
          return _;
        },
      });
      var a,
        i,
        r = n(57437),
        s = n(2265),
        o = n(36760),
        l = n.n(o),
        c = n(13544),
        d = n.n(c);
      let u = (0, s.memo)((e) => {
        let { type: t = "hub", ...n } = e;
        return "udf" === t
          ? (0, r.jsxs)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              width: "114",
              height: "33",
              fill: "none",
              viewBox: "0 0 114 33",
              ...n,
              children: [
                (0, r.jsx)("path", {
                  fill: "#fff",
                  fillRule: "evenodd",
                  d: "M-.001 7.274c0-3.348 2.554-6.061 5.705-6.061.91 0 2.032.413 3.05.875 1.069.484 2.212 1.112 3.229 1.697.354.203.78.203 1.133 0 1.016-.585 2.16-1.213 3.228-1.697 1.019-.462 2.14-.875 3.051-.875 3.15 0 5.705 2.713 5.705 6.06 0 3.348-2.554 6.062-5.705 6.062-.91 0-2.032-.414-3.051-.876-1.068-.484-2.212-1.111-3.228-1.696a1.128 1.128 0 0 0-1.133 0c-1.017.585-2.16 1.212-3.228 1.696-1.02.462-2.14.876-3.051.876-3.15 0-5.705-2.714-5.705-6.061Zm5.705-3.637c-1.89 0-3.423 1.628-3.423 3.637 0 2.008 1.532 3.637 3.423 3.637.398 0 1.137-.22 2.155-.682.97-.439 2.04-1.024 3.038-1.598a3.293 3.293 0 0 1 3.304 0c1 .574 2.07 1.159 3.038 1.598 1.018.462 1.757.682 2.156.682 1.89 0 3.423-1.629 3.423-3.637 0-2.009-1.533-3.637-3.423-3.637-.399 0-1.137.22-2.155.681-.97.44-2.04 1.025-3.039 1.6a3.293 3.293 0 0 1-3.304 0c-.999-.575-2.069-1.16-3.038-1.6-1.018-.461-1.757-.68-2.155-.68Z",
                  clipRule: "evenodd",
                }),
                (0, r.jsx)("path", {
                  fill: "#fff",
                  d: "M33.678 12.73V0h9.27v2.546h-6.622v2.546h5.297v2.364h-5.297v2.727h6.622v2.546h-9.27ZM45.153 12.73V3.454h2.472v1.273h.088c.153-.279.37-.533.653-.764.648-.52 1.372-.782 2.172-.782 1.118 0 1.984.334 2.596 1 .624.667.936 1.637.936 2.91v5.637h-2.472V7.456c0-.68-.165-1.194-.495-1.546-.318-.364-.77-.545-1.36-.545-.588 0-1.088.23-1.5.69-.412.461-.618 1.05-.618 1.764v4.91h-2.472ZM55.753 5.637V3.455h1.148v-2h2.472v2h2.543v2.182h-2.543v4.91h2.648v2.182h-5.12V5.637h-1.148ZM64.697 11.656c-.789-.909-1.183-2.097-1.183-3.564s.394-2.649 1.183-3.546c.8-.909 1.79-1.364 2.966-1.364.79 0 1.501.243 2.137.728.27.23.5.473.689.727h.088V3.455h2.472v9.274h-2.472v-1.182h-.088a4.38 4.38 0 0 1-.69.727 3.435 3.435 0 0 1-2.136.728c-1.177 0-2.165-.449-2.966-1.346Zm1.995-5.564c-.412.485-.618 1.152-.618 2 0 .849.206 1.516.618 2 .412.485.942.728 1.59.728.682 0 1.235-.237 1.66-.71.423-.484.635-1.157.635-2.018 0-.86-.212-1.527-.636-2-.424-.485-.977-.727-1.66-.727-.647 0-1.177.242-1.589.727ZM75.52 12.73V3.454h2.473v1.273h.088c.153-.279.37-.533.653-.764.648-.52 1.372-.782 2.172-.782 1.118 0 1.984.334 2.596 1 .624.667.936 1.637.936 2.91v5.637h-2.472V7.456c0-.68-.165-1.194-.495-1.546-.318-.364-.77-.545-1.36-.545-.588 0-1.088.23-1.5.69-.412.461-.618 1.05-.618 1.764v4.91H75.52ZM87.587 11.474c-.8-.897-1.2-2.054-1.2-3.473 0-1.418.4-2.576 1.2-3.473.8-.897 1.783-1.346 2.948-1.346.777 0 1.49.249 2.137.746.27.23.5.473.689.727h.088v-1.2h2.472v12.73h-8.21v-2.183h5.738v-2.655h-.088c-.2.291-.43.54-.689.746a3.435 3.435 0 0 1-2.136.727c-1.166 0-2.149-.449-2.95-1.346Zm1.995-5.4c-.424.473-.636 1.115-.636 1.927s.212 1.455.636 1.928c.424.473.977.709 1.66.709.647 0 1.177-.236 1.589-.71.412-.472.618-1.115.618-1.927s-.206-1.454-.618-1.927c-.412-.473-.942-.71-1.59-.71-.682 0-1.235.237-1.659.71ZM98.393 12.73V0h2.472v10.547h2.03v2.182h-4.502ZM105.444 11.584c-.93-.958-1.395-2.122-1.395-3.492s.465-2.527 1.395-3.473c.941-.958 2.095-1.437 3.46-1.437 1.389 0 2.531.473 3.426 1.419.894.945 1.342 2.11 1.342 3.491v.546h-7.063c.094.606.359 1.121.794 1.545.436.425.936.637 1.501.637.624 0 1.16-.182 1.607-.546a1.87 1.87 0 0 0 .424-.545h2.648a4.956 4.956 0 0 1-.882 1.636c-.942 1.091-2.208 1.637-3.797 1.637-1.365 0-2.519-.473-3.46-1.418Zm1.253-4.492h4.326a2.066 2.066 0 0 0-.724-1.218c-.376-.34-.841-.51-1.395-.51-.553 0-1.024.164-1.412.492-.389.327-.654.739-.795 1.236ZM33.564 27.266v-8.01h1.183v8.01c0 1.275.334 2.264 1.002 2.968.667.692 1.578 1.038 2.73 1.038 1.154 0 2.064-.346 2.732-1.038.667-.704 1.001-1.693 1.001-2.968v-8.01h1.184v8.01c0 1.542-.456 2.78-1.366 3.715-.898.922-2.081 1.383-3.55 1.383-1.469 0-2.658-.46-3.569-1.383-.898-.935-1.347-2.173-1.347-3.715ZM46.399 32V19.255h4.006c1.905 0 3.471.607 4.697 1.821 1.238 1.202 1.857 2.719 1.857 4.552 0 1.833-.619 3.356-1.857 4.57C53.876 31.399 52.31 32 50.405 32h-4.006Zm1.184-1.092h2.822c1.59 0 2.882-.492 3.878-1.475.995-.983 1.493-2.252 1.493-3.805 0-1.554-.498-2.822-1.493-3.805-.996-.984-2.288-1.475-3.878-1.475h-2.822v10.56ZM59.32 32V19.255h8.466v1.093h-7.283v5.007h5.827v1.092h-5.827V32h-1.183Z",
                }),
              ],
            })
          : "bridge" === t
          ? (0, r.jsxs)("svg", {
              fill: "none",
              width: "114",
              height: "36",
              viewBox: "0 0 114 36",
              xmlns: "http://www.w3.org/2000/svg",
              ...n,
              children: [
                (0, r.jsx)("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M0.162598 7.27367C0.162598 3.92605 2.71669 1.21228 5.8673 1.21228C6.77769 1.21228 7.89928 1.62621 8.91829 2.08817C9.98616 2.57227 11.1299 3.20011 12.1465 3.78434C12.5002 3.98765 12.9256 3.98765 13.2794 3.78434C14.296 3.20011 15.4397 2.57227 16.5076 2.08817C17.5266 1.62621 18.6482 1.21228 19.5586 1.21228C22.7092 1.21228 25.2633 3.92605 25.2633 7.27367C25.2633 10.6213 22.7092 13.3351 19.5586 13.3351C18.6482 13.3351 17.5266 12.9211 16.5076 12.4592C15.4397 11.9751 14.296 11.3472 13.2794 10.763C12.9256 10.5597 12.5002 10.5597 12.1465 10.763C11.1299 11.3472 9.98616 11.9751 8.91829 12.4592C7.89928 12.9211 6.77769 13.3351 5.8673 13.3351C2.71669 13.3351 0.162598 10.6213 0.162598 7.27367ZM5.8673 3.63683C3.97693 3.63683 2.44448 5.2651 2.44448 7.27367C2.44448 9.28224 3.97693 10.9105 5.8673 10.9105C6.26605 10.9105 7.00483 10.6906 8.02281 10.2291C8.99193 9.78977 10.0618 9.20457 11.0609 8.6304C12.092 8.0378 13.3339 8.0378 14.365 8.6304C15.3641 9.20457 16.434 9.78977 17.4031 10.2291C18.4211 10.6906 19.1598 10.9105 19.5586 10.9105C21.449 10.9105 22.9814 9.28224 22.9814 7.27367C22.9814 5.2651 21.449 3.63683 19.5586 3.63683C19.1598 3.63683 18.4211 3.85674 17.4031 4.31823C16.434 4.75757 15.3641 5.34276 14.365 5.91693C13.3339 6.50953 12.092 6.50953 11.0609 5.91693C10.0618 5.34276 8.99193 4.75757 8.02281 4.31823C7.00483 3.85674 6.26605 3.63683 5.8673 3.63683Z",
                  fill: "white",
                }),
                (0, r.jsx)("path", {
                  d: "M33.8413 12.7289V0H43.1113V2.54578H36.4899V5.09157H41.787V7.45551H36.4899V10.1831H43.1113V12.7289H33.8413Z",
                  fill: "white",
                }),
                (0, r.jsx)("path", {
                  d: "M45.3163 12.7289V3.45499H47.7883V4.72788H47.8766C48.0296 4.44906 48.2474 4.19448 48.5299 3.96415C49.1773 3.44287 49.9013 3.18223 50.7017 3.18223C51.82 3.18223 52.6852 3.51561 53.2973 4.18236C53.9212 4.84911 54.2331 5.81893 54.2331 7.09183V12.7289H51.7611V7.45551C51.7611 6.77663 51.5963 6.26141 51.2668 5.90985C50.9489 5.54617 50.4957 5.36433 49.9072 5.36433C49.3186 5.36433 48.8183 5.59466 48.4063 6.05533C47.9943 6.51599 47.7883 7.10395 47.7883 7.81919V12.7289H45.3163Z",
                  fill: "white",
                }),
                (0, r.jsx)("path", {
                  d: "M55.9168 5.63709V3.45499H57.0645V1.45473H59.5364V3.45499H62.0791V5.63709H59.5364V10.5468H62.185V12.7289H57.0645V5.63709H55.9168Z",
                  fill: "white",
                }),
                (0, r.jsx)("path", {
                  d: "M64.8606 11.6561C64.0719 10.7468 63.6776 9.55881 63.6776 8.09195C63.6776 6.6251 64.0719 5.44313 64.8606 4.54604C65.6611 3.63683 66.6498 3.18223 67.827 3.18223C68.6157 3.18223 69.3278 3.42468 69.9635 3.9096C70.2342 4.13993 70.4638 4.38238 70.6521 4.63696H70.7404V3.45499H73.2124V12.7289H70.7404V11.5469H70.6521C70.4638 11.8015 70.2342 12.044 69.9635 12.2743C69.3278 12.7592 68.6157 13.0017 67.827 13.0017C66.6498 13.0017 65.6611 12.5531 64.8606 11.6561ZM66.8558 6.0917C66.4438 6.57661 66.2379 7.24336 66.2379 8.09195C66.2379 8.94055 66.4438 9.6073 66.8558 10.0922C67.2678 10.5771 67.7976 10.8196 68.445 10.8196C69.1277 10.8196 69.681 10.5832 70.1047 10.1104C70.5285 9.62548 70.7404 8.95267 70.7404 8.09195C70.7404 7.23124 70.5285 6.56448 70.1047 6.0917C69.681 5.60678 69.1277 5.36433 68.445 5.36433C67.7976 5.36433 67.2678 5.60678 66.8558 6.0917Z",
                  fill: "white",
                }),
                (0, r.jsx)("path", {
                  d: "M75.6844 12.7289V3.45499H78.1563V4.72788H78.2446C78.3977 4.44906 78.6154 4.19448 78.8979 3.96415C79.5454 3.44287 80.2693 3.18223 81.0698 3.18223C82.188 3.18223 83.0532 3.51561 83.6653 4.18236C84.2892 4.84911 84.6012 5.81893 84.6012 7.09183V12.7289H82.1292V7.45551C82.1292 6.77663 81.9644 6.26141 81.6348 5.90985C81.317 5.54617 80.8638 5.36433 80.2752 5.36433C79.6866 5.36433 79.1863 5.59466 78.7743 6.05533C78.3623 6.51599 78.1563 7.10395 78.1563 7.81919V12.7289H75.6844Z",
                  fill: "white",
                }),
                (0, r.jsx)("path", {
                  d: "M87.7503 11.4742C86.9499 10.5771 86.5496 9.4194 86.5496 8.00103C86.5496 6.58267 86.9499 5.42494 87.7503 4.52786C88.5508 3.63077 89.5337 3.18223 90.6991 3.18223C91.476 3.18223 92.1881 3.43075 92.8356 3.92778C93.1063 4.15811 93.3358 4.40057 93.5242 4.65515H93.6125V3.45499H96.0844V16.1839H87.8739V14.0018H93.6125V11.3469H93.5242C93.3241 11.6379 93.0945 11.8864 92.8356 12.0925C92.1999 12.5774 91.4877 12.8198 90.6991 12.8198C89.5337 12.8198 88.5508 12.3713 87.7503 11.4742ZM89.7456 6.07351C89.3218 6.5463 89.1099 7.18881 89.1099 8.00103C89.1099 8.81326 89.3218 9.45577 89.7456 9.92855C90.1693 10.4013 90.7226 10.6377 91.4053 10.6377C92.0528 10.6377 92.5825 10.4013 92.9945 9.92855C93.4065 9.45577 93.6125 8.81326 93.6125 8.00103C93.6125 7.18881 93.4065 6.5463 92.9945 6.07351C92.5825 5.60072 92.0528 5.36433 91.4053 5.36433C90.7226 5.36433 90.1693 5.60072 89.7456 6.07351Z",
                  fill: "white",
                }),
                (0, r.jsx)("path", {
                  d: "M98.5564 12.7289V0H101.028V10.5468H103.059V12.7289H98.5564Z",
                  fill: "white",
                }),
                (0, r.jsx)("path", {
                  d: "M105.607 11.5833C104.677 10.6256 104.212 9.46183 104.212 8.09195C104.212 6.72208 104.677 5.56435 105.607 4.61878C106.549 3.66108 107.702 3.18223 109.068 3.18223C110.457 3.18223 111.599 3.65502 112.493 4.60059C113.388 5.54617 113.835 6.70996 113.835 8.09195V8.63748H106.772C106.867 9.24362 107.132 9.75884 107.567 10.1831C108.003 10.6074 108.503 10.8196 109.068 10.8196C109.692 10.8196 110.227 10.6377 110.675 10.2741C110.851 10.1165 110.993 9.93462 111.098 9.72853H113.747C113.547 10.3468 113.253 10.8923 112.864 11.3651C111.922 12.4562 110.657 13.0017 109.068 13.0017C107.702 13.0017 106.549 12.5289 105.607 11.5833ZM106.861 7.09183H111.187C111.093 6.60691 110.851 6.2008 110.463 5.87349C110.086 5.53405 109.621 5.36433 109.068 5.36433C108.515 5.36433 108.044 5.52799 107.655 5.8553C107.267 6.18262 107.002 6.59479 106.861 7.09183Z",
                  fill: "white",
                }),
                (0, r.jsx)("path", {
                  d: "M33.8186 32V19.2552H39.7358C40.8161 19.2552 41.69 19.5768 42.3576 20.2201C43.0373 20.8513 43.3772 21.6524 43.3772 22.6234C43.3772 23.4974 43.0859 24.2135 42.5032 24.7719C42.2362 25.0146 41.951 25.2088 41.6475 25.3545V25.4455C42.0602 25.5669 42.4365 25.7611 42.7763 26.0281C43.541 26.6229 43.9234 27.4301 43.9234 28.4497C43.9234 29.4814 43.5471 30.331 42.7946 30.9986C42.042 31.6662 41.0224 32 39.7358 32H33.8186ZM35.002 24.8993H39.7358C40.5005 24.8993 41.1013 24.693 41.5383 24.2803C41.9752 23.8676 42.1937 23.3153 42.1937 22.6234C42.1937 21.9316 41.9752 21.3793 41.5383 20.9666C41.1013 20.5539 40.5005 20.3476 39.7358 20.3476H35.002V24.8993ZM35.002 30.9076H39.7358C40.719 30.9076 41.4655 30.6891 41.9752 30.2521C42.485 29.803 42.7399 29.2022 42.7399 28.4497C42.7399 27.6971 42.485 27.1023 41.9752 26.6654C41.4655 26.2163 40.719 25.9917 39.7358 25.9917H35.002V30.9076ZM46.2028 32V22.8966H47.2952V24.6262H47.3134C47.4712 24.2863 47.6836 23.9829 47.9507 23.7159C48.5576 23.109 49.3405 22.8055 50.2994 22.8055H51.3007V23.8069H50.2994C49.4254 23.8069 48.7032 24.1043 48.1327 24.699C47.5744 25.2817 47.2952 26.0463 47.2952 26.9931V32H46.2028ZM52.723 20.7481C52.5652 20.5903 52.4863 20.3961 52.4863 20.1655C52.4863 19.9349 52.5652 19.7407 52.723 19.5829C52.8808 19.4251 53.075 19.3462 53.3056 19.3462C53.5362 19.3462 53.7305 19.4251 53.8882 19.5829C54.046 19.7407 54.1249 19.9349 54.1249 20.1655C54.1249 20.3961 54.046 20.5903 53.8882 20.7481C53.7305 20.9059 53.5362 20.9848 53.3056 20.9848C53.075 20.9848 52.8808 20.9059 52.723 20.7481ZM52.7594 32V22.8966H53.8518V32H52.7594ZM57.2151 30.8348C56.3655 29.9244 55.9406 28.7956 55.9406 27.4483C55.9406 26.101 56.3655 24.9782 57.2151 24.08C58.0648 23.1697 59.0965 22.7145 60.3103 22.7145C61.1721 22.7145 61.9004 22.9269 62.4951 23.3517C63.0899 23.7644 63.5086 24.2196 63.7514 24.7172H63.7696V19.2552H64.862V32H63.7696V30.1793H63.7514C63.5086 30.677 63.0899 31.1382 62.4951 31.563C61.9004 31.9757 61.1721 32.1821 60.3103 32.1821C59.0965 32.1821 58.0648 31.733 57.2151 30.8348ZM58.0162 24.7901C57.3608 25.4941 57.0331 26.3801 57.0331 27.4483C57.0331 28.5164 57.3608 29.4086 58.0162 30.1247C58.6838 30.8287 59.4789 31.1807 60.4013 31.1807C61.2995 31.1807 62.0824 30.8287 62.75 30.1247C63.4297 29.4086 63.7696 28.5164 63.7696 27.4483C63.7696 26.3801 63.4297 25.4941 62.75 24.7901C62.0824 24.0739 61.2995 23.7159 60.4013 23.7159C59.4789 23.7159 58.6838 24.0739 58.0162 24.7901ZM68.2346 30.8348C67.3849 29.9244 66.9601 28.7956 66.9601 27.4483C66.9601 26.101 67.3849 24.9782 68.2346 24.08C69.0842 23.1697 70.1159 22.7145 71.3297 22.7145C72.1915 22.7145 72.9198 22.9269 73.5146 23.3517C74.1093 23.7644 74.5281 24.2196 74.7708 24.7172H74.7891V22.8966H75.8815V35.4593H68.1435V34.4579H74.7891V30.1793H74.7708C74.5281 30.677 74.1093 31.1382 73.5146 31.563C72.9198 31.9757 72.1915 32.1821 71.3297 32.1821C70.1159 32.1821 69.0842 31.733 68.2346 30.8348ZM69.0357 24.7901C68.3802 25.4941 68.0525 26.3801 68.0525 27.4483C68.0525 28.5164 68.3802 29.4086 69.0357 30.1247C69.7033 30.8287 70.4983 31.1807 71.4208 31.1807C72.319 31.1807 73.1019 30.8287 73.7695 30.1247C74.4492 29.4086 74.7891 28.5164 74.7891 27.4483C74.7891 26.3801 74.4492 25.4941 73.7695 24.7901C73.1019 24.0739 72.319 23.7159 71.4208 23.7159C70.4983 23.7159 69.7033 24.0739 69.0357 24.7901ZM79.2904 30.8348C78.4165 29.9366 77.9795 28.8077 77.9795 27.4483C77.9795 26.0888 78.4165 24.96 79.2904 24.0618C80.1644 23.1636 81.2446 22.7145 82.5312 22.7145C83.8057 22.7145 84.8799 23.1636 85.7539 24.0618C86.6399 24.9479 87.083 26.0463 87.083 27.3572V27.8124H79.0719C79.1205 28.7713 79.4725 29.5724 80.1279 30.2157C80.7834 30.859 81.5845 31.1807 82.5312 31.1807C83.5751 31.1807 84.4308 30.8469 85.0984 30.1793C85.414 29.888 85.6507 29.5542 85.8085 29.1779H86.9009C86.6824 29.7484 86.3729 30.2521 85.9724 30.6891C85.0741 31.6844 83.9271 32.1821 82.5312 32.1821C81.2446 32.1821 80.1644 31.733 79.2904 30.8348ZM79.0719 26.811H85.8995C85.8024 25.925 85.4383 25.1906 84.8071 24.608C84.1881 24.0132 83.4295 23.7159 82.5312 23.7159C81.633 23.7159 80.8684 24.0072 80.2372 24.5898C79.606 25.1724 79.2176 25.9128 79.0719 26.811Z",
                  fill: "white",
                }),
              ],
            })
          : "ets" === t
          ? (0, r.jsxs)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              width: "112",
              height: "33",
              viewBox: "0 0 112 33",
              fill: "none",
              children: [
                (0, r.jsx)("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M0 7.19101C0 3.88143 2.51651 1.1985 5.62076 1.1985C6.51775 1.1985 7.62283 1.60773 8.62685 2.06444C9.67901 2.54304 10.8059 3.16375 11.8075 3.74134C12.1561 3.94234 12.5752 3.94234 12.9238 3.74134C13.9254 3.16375 15.0523 2.54304 16.1045 2.06444C17.1085 1.60773 18.2136 1.1985 19.1106 1.1985C22.2148 1.1985 24.7313 3.88143 24.7313 7.19101C24.7313 10.5006 22.2148 13.1835 19.1106 13.1835C18.2136 13.1835 17.1085 12.7743 16.1045 12.3176C15.0523 11.839 13.9254 11.2183 12.9238 10.6407C12.5752 10.4397 12.1561 10.4397 11.8075 10.6407C10.8059 11.2183 9.67901 11.839 8.62685 12.3176C7.62283 12.7743 6.51775 13.1835 5.62076 13.1835C2.51651 13.1835 0 10.5006 0 7.19101ZM5.62076 3.59551C3.75821 3.59551 2.2483 5.20527 2.2483 7.19101C2.2483 9.17676 3.75821 10.7865 5.62076 10.7865C6.01364 10.7865 6.74155 10.5691 7.74455 10.1129C8.69941 9.67852 9.75354 9.09998 10.7379 8.53233C11.7539 7.94647 12.9775 7.94647 13.9934 8.53233C14.9778 9.09998 16.0319 9.67852 16.9868 10.1129C17.9898 10.5691 18.7177 10.7865 19.1106 10.7865C20.9731 10.7865 22.483 9.17676 22.483 7.19101C22.483 5.20527 20.9731 3.59551 19.1106 3.59551C18.7177 3.59551 17.9898 3.81291 16.9868 4.26916C16.0319 4.7035 14.9778 5.28205 13.9934 5.84969C12.9775 6.43556 11.7539 6.43556 10.7379 5.84969C9.75354 5.28205 8.69941 4.7035 7.74455 4.26916C6.74155 3.81291 6.01364 3.59551 5.62076 3.59551Z",
                  fill: "#F0EFF0",
                }),
                (0, r.jsx)("path", {
                  d: "M33.1831 12.5843V0H42.3167V2.51685H35.7927V5.03371H41.0119V7.37079H35.7927V10.0674H42.3167V12.5843H33.1831Z",
                  fill: "#F0EFF0",
                }),
                (0, r.jsx)("path", {
                  d: "M44.4893 12.5843V3.41573H46.9249V4.67416H47.0119C47.1627 4.3985 47.3772 4.14682 47.6556 3.9191C48.2935 3.40375 49.0068 3.14607 49.7954 3.14607C50.8973 3.14607 51.7497 3.47566 52.3528 4.13483C52.9675 4.79401 53.2749 5.75281 53.2749 7.01124V12.5843H50.8393V7.37079C50.8393 6.69963 50.6769 6.19026 50.3522 5.8427C50.039 5.48315 49.5925 5.30337 49.0126 5.30337C48.4327 5.30337 47.9397 5.53109 47.5338 5.98652C47.1279 6.44195 46.9249 7.02322 46.9249 7.73034V12.5843H44.4893Z",
                  fill: "#F0EFF0",
                }),
                (0, r.jsx)("path", {
                  d: "M54.9337 5.57303V3.41573H56.0646V1.4382H58.5002V3.41573H61.0054V5.57303H58.5002V10.427H61.1098V12.5843H56.0646V5.57303H54.9337Z",
                  fill: "#F0EFF0",
                }),
                (0, r.jsx)("path", {
                  d: "M63.746 11.5236C62.9689 10.6247 62.5804 9.45019 62.5804 8C62.5804 6.54981 62.9689 5.38127 63.746 4.49438C64.5346 3.59551 65.5089 3.14607 66.6687 3.14607C67.4458 3.14607 68.1475 3.38577 68.7738 3.86517C69.0405 4.09288 69.2667 4.33258 69.4523 4.58427H69.5392V3.41573H71.9749V12.5843H69.5392V11.4157H69.4523C69.2667 11.6674 69.0405 11.9071 68.7738 12.1348C68.1475 12.6142 67.4458 12.8539 66.6687 12.8539C65.5089 12.8539 64.5346 12.4105 63.746 11.5236ZM65.7119 6.02247C65.3059 6.50187 65.103 7.16105 65.103 8C65.103 8.83895 65.3059 9.49813 65.7119 9.97753C66.1178 10.4569 66.6397 10.6966 67.2776 10.6966C67.9503 10.6966 68.4954 10.4629 68.9129 9.99551C69.3305 9.5161 69.5392 8.85094 69.5392 8C69.5392 7.14906 69.3305 6.48989 68.9129 6.02247C68.4954 5.54307 67.9503 5.30337 67.2776 5.30337C66.6397 5.30337 66.1178 5.54307 65.7119 6.02247Z",
                  fill: "#F0EFF0",
                }),
                (0, r.jsx)("path", {
                  d: "M74.4105 12.5843V3.41573H76.8461V4.67416H76.9331C77.0838 4.3985 77.2984 4.14682 77.5768 3.9191C78.2146 3.40375 78.9279 3.14607 79.7166 3.14607C80.8184 3.14607 81.6709 3.47566 82.274 4.13483C82.8887 4.79401 83.1961 5.75281 83.1961 7.01124V12.5843H80.7604V7.37079C80.7604 6.69963 80.5981 6.19026 80.2733 5.8427C79.9602 5.48315 79.5136 5.30337 78.9337 5.30337C78.3538 5.30337 77.8609 5.53109 77.455 5.98652C77.049 6.44195 76.8461 7.02322 76.8461 7.73034V12.5843H74.4105Z",
                  fill: "#F0EFF0",
                }),
                (0, r.jsx)("path", {
                  d: "M86.2989 11.3438C85.5102 10.4569 85.1159 9.31236 85.1159 7.91011C85.1159 6.50786 85.5102 5.3633 86.2989 4.4764C87.0876 3.58951 88.056 3.14607 89.2042 3.14607C89.9697 3.14607 90.6714 3.39176 91.3093 3.88315C91.576 4.11086 91.8022 4.35056 91.9878 4.60225H92.0747V3.41573H94.5104V16H86.4206V13.8427H92.0747V11.218H91.9878C91.7906 11.5056 91.5644 11.7513 91.3093 11.9551C90.683 12.4345 89.9813 12.6742 89.2042 12.6742C88.056 12.6742 87.0876 12.2307 86.2989 11.3438ZM88.2648 6.00449C87.8472 6.47191 87.6385 7.10712 87.6385 7.91011C87.6385 8.71311 87.8472 9.34832 88.2648 9.81573C88.6823 10.2831 89.2274 10.5169 89.9001 10.5169C90.538 10.5169 91.0599 10.2831 91.4659 9.81573C91.8718 9.34832 92.0747 8.71311 92.0747 7.91011C92.0747 7.10712 91.8718 6.47191 91.4659 6.00449C91.0599 5.53708 90.538 5.30337 89.9001 5.30337C89.2274 5.30337 88.6823 5.53708 88.2648 6.00449Z",
                  fill: "#F0EFF0",
                }),
                (0, r.jsx)("path", {
                  d: "M96.946 12.5843V0H99.3816V10.427H101.382V12.5843H96.946Z",
                  fill: "#F0EFF0",
                }),
                (0, r.jsx)("path", {
                  d: "M103.893 11.4517C102.977 10.5049 102.519 9.35431 102.519 8C102.519 6.64569 102.977 5.50112 103.893 4.56629C104.821 3.61948 105.957 3.14607 107.303 3.14607C108.671 3.14607 109.796 3.61348 110.678 4.54831C111.559 5.48315 112 6.63371 112 8V8.53932H105.041C105.134 9.13858 105.395 9.64794 105.824 10.0674C106.253 10.4869 106.746 10.6966 107.303 10.6966C107.917 10.6966 108.445 10.5169 108.886 10.1573C109.06 10.0015 109.199 9.82172 109.303 9.61798H111.913C111.716 10.2292 111.426 10.7685 111.043 11.236C110.115 12.3146 108.868 12.8539 107.303 12.8539C105.957 12.8539 104.821 12.3865 103.893 11.4517ZM105.128 7.01124H109.39C109.298 6.53184 109.06 6.13034 108.677 5.80674C108.306 5.47116 107.848 5.30337 107.303 5.30337C106.758 5.30337 106.294 5.46517 105.911 5.78876C105.528 6.11236 105.267 6.51985 105.128 7.01124Z",
                  fill: "#F0EFF0",
                }),
                (0, r.jsx)("path", {
                  d: "M42.3345 28.0073V20.0967H43.4551V28.0571C43.4551 29.4129 42.9875 30.4339 42.0522 31.1201C41.117 31.8174 39.93 32.166 38.4912 32.166C37.0524 32.166 35.8654 31.8174 34.9302 31.1201C33.995 30.4339 33.5273 29.4129 33.5273 28.0571V20.0967H34.6479V28.0073C34.6479 29.0311 35.0132 29.8031 35.7437 30.3232C36.4686 30.8545 37.3872 31.1201 38.4995 31.1201C39.6118 31.1201 40.5277 30.8545 41.2471 30.3232C41.972 29.7975 42.3345 29.0256 42.3345 28.0073ZM49.5854 21.1177H45.1528V20.0967H55.1469V21.1177H50.7143V32H49.5854V21.1177ZM65.1454 28.771C65.1454 28.3117 64.9987 27.9326 64.7054 27.6338C64.4176 27.3294 64.0192 27.1081 63.5101 26.9697C63.1449 26.8701 62.5638 26.7511 61.7669 26.6128C60.9756 26.4744 60.436 26.3748 60.1483 26.314C59.5617 26.1867 59.0221 26.0207 58.5296 25.8159C58.0426 25.6112 57.6497 25.2847 57.3509 24.8364C57.0466 24.3937 56.8944 23.8403 56.8944 23.1763C56.8944 22.1691 57.3122 21.375 58.1478 20.7939C58.9889 20.2184 60.057 19.9307 61.3519 19.9307C62.68 19.9307 63.7564 20.2267 64.5809 20.8188C65.3999 21.4165 65.8094 22.2715 65.8094 23.3838V23.7241H64.6805V23.3838C64.6805 22.5703 64.3789 21.9616 63.7757 21.5576C63.1725 21.1536 62.3646 20.9517 61.3519 20.9517C60.3613 20.9517 59.5617 21.1453 58.953 21.5327C58.3332 21.9201 58.0233 22.4679 58.0233 23.1763C58.0233 23.6466 58.1672 24.0396 58.4549 24.355C58.7482 24.6704 59.1467 24.9028 59.6502 25.0522C60.0321 25.1629 60.6602 25.3013 61.5345 25.4673C62.4089 25.6333 62.9069 25.7301 63.0287 25.7578C63.6042 25.8796 64.1382 26.0456 64.6307 26.2559C65.1177 26.4606 65.5134 26.7733 65.8177 27.1938C66.1165 27.62 66.266 28.1457 66.266 28.771C66.266 29.8501 65.8094 30.6857 64.8963 31.2778C63.9777 31.87 62.8184 32.166 61.4183 32.166C60.0127 32.166 58.8589 31.8561 57.9569 31.2363C57.0493 30.6221 56.5955 29.7477 56.5955 28.6133V27.9409H57.7162V28.6133C57.7162 29.46 58.062 30.0964 58.7537 30.5225C59.4399 30.943 60.3309 31.1533 61.4266 31.1533C62.5168 31.1533 63.4077 30.9513 64.0995 30.5474C64.7967 30.1434 65.1454 29.5513 65.1454 28.771Z",
                  fill: "white",
                }),
              ],
            })
          : (0, r.jsxs)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              width: "114",
              height: "33",
              viewBox: "0 0 114 33",
              fill: "none",
              ...n,
              children: [
                (0, r.jsx)("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M-0.000366211 7.27367C-0.000366211 3.92605 2.55373 1.21228 5.70434 1.21228C6.61472 1.21228 7.73631 1.62621 8.75533 2.08817C9.82319 2.57227 10.9669 3.20011 11.9835 3.78434C12.3373 3.98765 12.7627 3.98765 13.1164 3.78434C14.133 3.20011 15.2768 2.57227 16.3446 2.08817C17.3636 1.62621 18.4852 1.21228 19.3956 1.21228C22.5462 1.21228 25.1003 3.92605 25.1003 7.27367C25.1003 10.6213 22.5462 13.3351 19.3956 13.3351C18.4852 13.3351 17.3636 12.9211 16.3446 12.4592C15.2768 11.9751 14.133 11.3472 13.1164 10.763C12.7627 10.5597 12.3373 10.5597 11.9835 10.763C10.9669 11.3472 9.82319 11.9751 8.75533 12.4592C7.73631 12.9211 6.61472 13.3351 5.70434 13.3351C2.55373 13.3351 -0.000366211 10.6213 -0.000366211 7.27367ZM5.70434 3.63683C3.81397 3.63683 2.28151 5.2651 2.28151 7.27367C2.28151 9.28224 3.81397 10.9105 5.70434 10.9105C6.10309 10.9105 6.84186 10.6906 7.85984 10.2291C8.82897 9.78977 9.89884 9.20457 10.8979 8.63041C11.929 8.03781 13.1709 8.03781 14.2021 8.63041C15.2011 9.20457 16.271 9.78977 17.2401 10.2291C18.2581 10.6906 18.9969 10.9105 19.3956 10.9105C21.286 10.9105 22.8184 9.28224 22.8184 7.27367C22.8184 5.2651 21.286 3.63683 19.3956 3.63683C18.9969 3.63683 18.2581 3.85674 17.2401 4.31823C16.271 4.75757 15.2011 5.34276 14.2021 5.91693C13.1709 6.50953 11.929 6.50953 10.8979 5.91693C9.89884 5.34276 8.82897 4.75757 7.85984 4.31823C6.84186 3.85674 6.10309 3.63683 5.70434 3.63683Z",
                  fill: "white",
                }),
                (0, r.jsx)("path", {
                  d: "M33.6784 12.7289V0H42.9483V2.54578H36.3269V5.09157H41.624V7.45551H36.3269V10.1831H42.9483V12.7289H33.6784Z",
                  fill: "white",
                }),
                (0, r.jsx)("path", {
                  d: "M45.1534 12.7289V3.45499H47.6254V4.72788H47.7136C47.8667 4.44906 48.0844 4.19448 48.3669 3.96415C49.0144 3.44287 49.7383 3.18223 50.5388 3.18223C51.657 3.18223 52.5222 3.51561 53.1343 4.18236C53.7582 4.84911 54.0702 5.81893 54.0702 7.09183V12.7289H51.5982V7.45551C51.5982 6.77663 51.4334 6.26142 51.1038 5.90985C50.786 5.54617 50.3328 5.36433 49.7442 5.36433C49.1556 5.36433 48.6553 5.59466 48.2433 6.05533C47.8313 6.51599 47.6254 7.10395 47.6254 7.81919V12.7289H45.1534Z",
                  fill: "white",
                }),
                (0, r.jsx)("path", {
                  d: "M55.7538 5.63709V3.45499H56.9015V1.45473H59.3735V3.45499H61.9161V5.63709H59.3735V10.5468H62.022V12.7289H56.9015V5.63709H55.7538Z",
                  fill: "white",
                }),
                (0, r.jsx)("path", {
                  d: "M64.6976 11.6561C63.909 10.7468 63.5146 9.55881 63.5146 8.09196C63.5146 6.6251 63.909 5.44313 64.6976 4.54604C65.4981 3.63683 66.4869 3.18223 67.664 3.18223C68.4527 3.18223 69.1649 3.42469 69.8005 3.9096C70.0713 4.13993 70.3008 4.38238 70.4892 4.63696H70.5774V3.45499H73.0494V12.7289H70.5774V11.5469H70.4892C70.3008 11.8015 70.0713 12.044 69.8005 12.2743C69.1649 12.7592 68.4527 13.0017 67.664 13.0017C66.4869 13.0017 65.4981 12.5531 64.6976 11.6561ZM66.6929 6.0917C66.2809 6.57661 66.0749 7.24336 66.0749 8.09196C66.0749 8.94055 66.2809 9.6073 66.6929 10.0922C67.1049 10.5771 67.6346 10.8196 68.282 10.8196C68.9648 10.8196 69.518 10.5832 69.9418 10.1104C70.3655 9.62549 70.5774 8.95267 70.5774 8.09196C70.5774 7.23124 70.3655 6.56449 69.9418 6.0917C69.518 5.60679 68.9648 5.36433 68.282 5.36433C67.6346 5.36433 67.1049 5.60679 66.6929 6.0917Z",
                  fill: "white",
                }),
                (0, r.jsx)("path", {
                  d: "M75.5214 12.7289V3.45499H77.9934V4.72788H78.0817C78.2347 4.44906 78.4525 4.19448 78.735 3.96415C79.3824 3.44287 80.1063 3.18223 80.9068 3.18223C82.0251 3.18223 82.8903 3.51561 83.5024 4.18236C84.1263 4.84911 84.4382 5.81893 84.4382 7.09183V12.7289H81.9662V7.45551C81.9662 6.77663 81.8014 6.26142 81.4718 5.90985C81.154 5.54617 80.7008 5.36433 80.1122 5.36433C79.5237 5.36433 79.0234 5.59466 78.6114 6.05533C78.1994 6.51599 77.9934 7.10395 77.9934 7.81919V12.7289H75.5214Z",
                  fill: "white",
                }),
                (0, r.jsx)("path", {
                  d: "M87.5874 11.4742C86.7869 10.5771 86.3867 9.4194 86.3867 8.00103C86.3867 6.58267 86.7869 5.42494 87.5874 4.52786C88.3878 3.63077 89.3707 3.18223 90.5361 3.18223C91.313 3.18223 92.0252 3.43075 92.6726 3.92778C92.9433 4.15811 93.1729 4.40057 93.3612 4.65515H93.4495V3.45499H95.9215V16.1839H87.711V14.0018H93.4495V11.3469H93.3612C93.1611 11.6379 92.9316 11.8864 92.6726 12.0925C92.0369 12.5774 91.3248 12.8198 90.5361 12.8198C89.3707 12.8198 88.3878 12.3713 87.5874 11.4742ZM89.5826 6.07351C89.1589 6.5463 88.947 7.18881 88.947 8.00103C88.947 8.81326 89.1589 9.45577 89.5826 9.92856C90.0064 10.4013 90.5596 10.6377 91.2424 10.6377C91.8898 10.6377 92.4195 10.4013 92.8315 9.92856C93.2435 9.45577 93.4495 8.81326 93.4495 8.00103C93.4495 7.18881 93.2435 6.5463 92.8315 6.07351C92.4195 5.60072 91.8898 5.36433 91.2424 5.36433C90.5596 5.36433 90.0064 5.60072 89.5826 6.07351Z",
                  fill: "white",
                }),
                (0, r.jsx)("path", {
                  d: "M98.3935 12.7289V0H100.865V10.5468H102.896V12.7289H98.3935Z",
                  fill: "white",
                }),
                (0, r.jsx)("path", {
                  d: "M105.444 11.5833C104.514 10.6256 104.049 9.46183 104.049 8.09196C104.049 6.72208 104.514 5.56436 105.444 4.61878C106.386 3.66108 107.539 3.18223 108.905 3.18223C110.294 3.18223 111.436 3.65502 112.33 4.60059C113.225 5.54617 113.672 6.70996 113.672 8.09196V8.63748H106.61C106.704 9.24362 106.969 9.75884 107.404 10.1831C107.84 10.6074 108.34 10.8196 108.905 10.8196C109.529 10.8196 110.064 10.6377 110.512 10.2741C110.688 10.1165 110.83 9.93462 110.935 9.72853H113.584C113.384 10.3468 113.09 10.8923 112.701 11.3651C111.759 12.4562 110.494 13.0017 108.905 13.0017C107.539 13.0017 106.386 12.5289 105.444 11.5833ZM106.698 7.09183H111.024C110.93 6.60691 110.688 6.2008 110.3 5.87349C109.923 5.53405 109.458 5.36433 108.905 5.36433C108.352 5.36433 107.881 5.52799 107.492 5.8553C107.104 6.18262 106.839 6.59479 106.698 7.09183Z",
                  fill: "white",
                }),
                (0, r.jsx)("path", {
                  d: "M33.6556 32V19.2552H34.839V24.9903H42.2128V19.2552H43.3963V32H42.2128V26.0828H34.839V32H33.6556ZM46.3065 28.2676V22.8966H47.399V28.2676C47.399 29.2022 47.6235 29.9244 48.0726 30.4342C48.5338 30.9319 49.159 31.1807 49.9479 31.1807C50.8219 31.1807 51.5562 30.8712 52.151 30.2521C52.7457 29.6331 53.0431 28.8502 53.0431 27.9034V22.8966H54.1355V32H53.0431V30.4524H53.0249C52.7821 30.9137 52.3937 31.3203 51.8596 31.6723C51.3256 32.0121 50.6276 32.1821 49.7659 32.1821C48.7463 32.1821 47.9148 31.8301 47.2715 31.1261C46.6282 30.4221 46.3065 29.4692 46.3065 28.2676ZM56.8637 32V19.2552H57.9561V24.7172H57.9743C58.1685 24.2317 58.5751 23.7765 59.1942 23.3517C59.8132 22.9269 60.5536 22.7145 61.4154 22.7145C62.6292 22.7145 63.6609 23.1697 64.5106 24.08C65.3603 24.9782 65.7851 26.101 65.7851 27.4483C65.7851 28.7956 65.3603 29.9244 64.5106 30.8348C63.6609 31.733 62.6292 32.1821 61.4154 32.1821C60.5536 32.1821 59.8132 31.9697 59.1942 31.5448C58.5751 31.12 58.1685 30.6648 57.9743 30.1793H57.9561V32H56.8637ZM58.9575 24.7901C58.2899 25.4941 57.9561 26.3801 57.9561 27.4483C57.9561 28.5164 58.2899 29.4086 58.9575 30.1247C59.6372 30.8287 60.4262 31.1807 61.3244 31.1807C62.2469 31.1807 63.0358 30.8287 63.6913 30.1247C64.3589 29.4086 64.6927 28.5164 64.6927 27.4483C64.6927 26.3801 64.3589 25.4941 63.6913 24.7901C63.0358 24.0739 62.2469 23.7159 61.3244 23.7159C60.4262 23.7159 59.6372 24.0739 58.9575 24.7901Z",
                  fill: "white",
                }),
              ],
            });
      });
      (u.displayName = "ExplorerIcon"),
        ((0, s.memo)((e) => {
          let { item: t, className: n } = e;
          return (0, r.jsx)("div", {
            className: l()(d().link, n),
            children: (0, r.jsx)(u, { type: t.label }),
          });
        }).displayName = "SelectOption");
      var x = n(15150),
        h = n(68575),
        m = n(99376),
        p = n(25566);
      ((a = i || (i = {})).HUB = "hub"),
        (a.UDF = "udf"),
        (a.BRIDGE = "bridge"),
        (a.ETS = "ets");
      let k = [
          {
            label: "hub",
            value: "1",
            link: x.HC || x.vL ? "https://datafeeds.entangle.fi" : "/",
            external: x.vL || x.HC,
          },
          {
            label: "bridge",
            value: "2",
            link:
              x.HC || x.vL ? "https://datafeeds.entangle.fi/bridge" : "/bridge",
            external: x.vL || x.vL,
          },
          {
            label: "udf",
            value: "3",
            link: x.HC ? "/" : p.env.NEXT_PUBLIC_UDF_DOMAIN,
            external: !(x.HC && x.vL),
          },
          {
            label: "ets",
            value: "4",
            link: x.vL ? "/" : p.env.NEXT_PUBLIC_ETS_DOMAIN,
            external: !(x.HC && x.vL),
          },
        ],
        _ = () => {
          let e = (0, m.usePathname)(),
            t = (0, h.v9)((e) => e.AppEntity.appGlobalConfig),
            n = (0, h.v9)((e) => e.AppEntity.isLoadingAppGlobalConfig),
            [a, i] = (0, s.useState)(k),
            [r, o] = (0, s.useState)(!0),
            l = (0, s.useMemo)(
              () => t?.hiddenEntangleTypesOptions || [],
              [t?.hiddenEntangleTypesOptions]
            );
          return (
            (0, s.useEffect)(() => {
              n ||
                (i(
                  k.filter(
                    (e) =>
                      (!!x.HC && "udf" === e.label) ||
                      (!x.HC && "hub" === e.label) ||
                      (!!x.vL && "ets" === e.label) ||
                      (!x.vL && "hub" === e.label) ||
                      (!!x.Is && "bridge" === e.label) ||
                      !l.includes(e.label)
                  )
                ),
                o(!1));
            }, [l, e, n]),
            { entangleTypesOptions: a, isLoading: r }
          );
        };
    },
    87057: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      var a = n(57437),
        i = n(33145),
        r = (e) => {
          let { children: t } = e;
          return (0, a.jsxs)("div", {
            className: "flex items-center gap-2",
            children: [
              (0, a.jsx)(i.default, {
                src: "/_next/static/media/linkArrow.73fa6b48.svg",
                width: 16,
                height: 16,
                alt: "arrow",
              }),
              (0, a.jsx)("p", {
                className: "text-[var(--Neutral-60)] text-md font-medium",
                children: t,
              }),
            ],
          });
        };
    },
    80605: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          LayoutContent: function () {
            return d;
          },
        });
      var a = n(57437),
        i = n(15150),
        r = n(91960),
        s = n(91415),
        o = n.n(s),
        l = n(99376),
        c = (0, n(2265).memo)(function () {
          let { push: e } = (0, l.useRouter)();
          return (0,
          a.jsxs)("div", { className: o().maintenancePage, children: [(0, a.jsx)("div", { className: o().maintenancePageTitle, children: "System Upgrade" }), (0, a.jsxs)("div", { className: o().maintenancePageContent, children: ["This application is currently offline while we perform essential system upgrades.", (0, a.jsx)("br", {}), "We appreciate your patience and expect to be back online soon."] })] });
        });
      let d = (e) => {
        let { bridge: t, children: n } = e,
          s = (0, r.CG)((e) => e.AppEntity.appGlobalConfig);
        return i.vL && s?.isUTSOnMaintenance
          ? (0, a.jsx)(c, {})
          : i.Is
          ? (0, a.jsx)("main", { className: "layout__container", children: t })
          : (0, a.jsx)("div", { className: "layout__container", children: n });
      };
    },
    32731: function (e, t, n) {
      "use strict";
      n.d(t, {
        e: function () {
          return h;
        },
      });
      var a = n(57437),
        i = n(2265),
        r = n(16529),
        s = n.n(r),
        o = n(33145),
        l = n(83540),
        c = n(68176),
        d = n(24919);
      let u = (0, i.memo)((e) => {
        let { ...t } = e;
        return (0, a.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 29 29",
          ...t,
          children: (0, a.jsx)("path", {
            fill: "#06E097",
            fillRule: "evenodd",
            d: "M15.094 3.106a.84.84 0 0 0-1.188 0l-5.6 5.6a.84.84 0 0 0 1.188 1.188l4.166-4.166v12.906a.84.84 0 0 0 1.68 0V5.728l4.166 4.166a.84.84 0 1 0 1.188-1.188l-5.6-5.6Zm-9.928 16.46c.516 0 .934.419.934.934v2.8a1.86 1.86 0 0 0 1.86 1.867h13.075c1.03 0 1.865-.835 1.865-1.867v-2.8a.933.933 0 0 1 1.867 0v2.8a3.732 3.732 0 0 1-3.732 3.734H7.96A3.728 3.728 0 0 1 4.233 23.3v-2.8c0-.515.418-.933.933-.933Z",
            clipRule: "evenodd",
          }),
        });
      });
      u.displayName = "Unstaking";
      var x = n(37060);
      let h = (0, i.memo)((e) => {
        let {
            value: t,
            onClose: n,
            onSubmit: r,
            contentText: h,
            delegatorName: m,
            loading: p,
          } = e,
          k = (0, x.R)("EAI"),
          _ = (0, i.useMemo)(() => +t * k, [k, t]);
        return (0, a.jsx)(d.F0, {
          styleBasic: !0,
          enable: !0,
          onClose: n,
          title: "You’re unstaking",
          isCloseIcon: !0,
          children: (0, a.jsxs)("div", {
            className: s().root,
            children: [
              (0, a.jsxs)("div", {
                className: s().top,
                children: [
                  (0, a.jsx)(u, { className: s().topIcon }),
                  (0, a.jsx)("div", { className: s().helper, children: h }),
                ],
              }),
              (0, a.jsxs)("div", {
                className: s().row,
                children: [
                  (0, a.jsxs)("div", {
                    className: s().relWrap,
                    children: [
                      (0, a.jsx)(o.default, {
                        src: l.Z.src,
                        width: 32,
                        height: 32,
                        alt: "",
                      }),
                      (0, a.jsx)("div", {
                        className: s().topRightIcon,
                        children: (0, a.jsx)(d.oi, {
                          id: m,
                          width: 13,
                          height: 13,
                        }),
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: s().value,
                    children: [t, " EAI"],
                  }),
                  (0, a.jsxs)("div", {
                    className: s().usd,
                    children: ["≈ $", _?.toFixed(2)],
                  }),
                ],
              }),
              (0, a.jsx)(c.z, {
                stylesLessCurved: !0,
                type: "primary",
                styleFullWidth: !0,
                className: s().button,
                onClick: r,
                styleHigher: !0,
                loading: p,
                children: "Confirm",
              }),
            ],
          }),
        });
      });
      h.displayName = "UnstakingModal";
    },
    86560: function (e, t, n) {
      "use strict";
      n.d(t, {
        O: function () {
          return a;
        },
        Y: function () {
          return i;
        },
      });
      let a = (e) =>
          e.AgentEntity.delegationAgents.reduce((e, t) => e + t.reward, 0),
        i = (e) =>
          e.AgentEntity.delegationAgents.map((e) => ({
            address: e.address,
            amount: e.reward,
            staked: e.stakeForCurrentUser?.value || "0.000000000000000000",
          }));
    },
    44753: function (e, t, n) {
      "use strict";
      n.d(t, {
        n: function () {
          return s;
        },
      });
      var a = n(15150),
        i = n(91960),
        r = n(2265);
      let s = () => {
        let e = (0, i.TL)(),
          {
            asyncActions: {
              App: { getGlobalConfig: t },
            },
          } = (0, i.oR)(() => {});
        (0, r.useEffect)(() => {
          e(t({ id: 1 }));
          let n = setInterval(() => {
            e(t({ id: 1 }));
          }, a.jI);
          return () => clearInterval(n);
        }, []);
      };
    },
    88826: function (e, t, n) {
      "use strict";
      n.d(t, {
        H0: function () {
          return d;
        },
        Nt: function () {
          return o;
        },
        ep: function () {
          return c;
        },
        lb: function () {
          return l;
        },
      });
      var a = n(82723),
        i = n(86560),
        r = n(54484),
        s = n(92713);
      let o = (e) => {
          let t = e.ValidatorEntity.delegationValidators
              ?.filter((e) => Number(e.delegated) > 0)
              .map((e) => ({
                item: e,
                delegationAmount: Number(e.delegated),
                isValidator: !0,
              })),
            n = t?.reduce((e, t) => e + t.delegationAmount, 0),
            a = e.AgentEntity.agents
              .filter((e) => Number(e.stakeForCurrentUser?.value) > 0)
              .map((e) => ({
                item: e,
                delegationAmount: Number(e.stakeForCurrentUser),
                isValidator: !1,
              })),
            i = a.reduce((e, t) => e + t.delegationAmount, 0),
            r = a.sort((e, t) => t.delegationAmount - e.delegationAmount),
            s = t?.sort((e, t) => t.delegationAmount - e.delegationAmount);
          return {
            allWithDelegation: [...r, ...(s || [])].sort(
              (e, t) => t.delegationAmount - e.delegationAmount
            ),
            agentToStake: r[0],
            validatorToStake: s?.[0],
            totalAgentsStaked: i,
            totalValidatorsStaked: n,
          };
        },
        l = (e) => {
          let t = [...e.ValidatorEntity.delegationValidators].sort(
              (e, t) => +t.totalStake - +e.totalStake
            ),
            n = [...e.AgentEntity.agents].sort(
              (e, t) => +t.totalStakeDelegate[1] - +e.totalStakeDelegate[1]
            );
          return { validatorTotalStake: t[0], agentTotalStake: n[0] };
        },
        c = (e) => {
          let t = (0, i.O)(e),
            n = (0, a.K)(e);
          return Number((0, r.t)(n + t, 4));
        },
        d = (0, s.P1)([o], (e) => {
          let { allWithDelegation: t } = e,
            n = 0,
            a = 0;
          return (
            t.forEach((e) => {
              let { item: t, isValidator: i, delegationAmount: r } = e,
                s = i ? parseFloat(t.apr) : t.apy;
              (n += r), (a += r * s);
            }),
            n > 0 ? a / n : 0
          );
        });
    },
    82723: function (e, t, n) {
      "use strict";
      n.d(t, {
        K: function () {
          return r;
        },
        c: function () {
          return i;
        },
      });
      var a = n(55842);
      let i = (e) => ({
          activeValidators: e.ValidatorEntity.delegationValidators.filter(
            (e) => e.status === a.Jn.Active
          ),
          inactiveValidators: e.ValidatorEntity.delegationValidators.filter(
            (e) => e.status !== a.Jn.Active
          ),
        }),
        r = (e) =>
          e.ValidatorEntity.delegationValidators?.[0]?.totalRewards || 0;
    },
    78090: function (e, t, n) {
      "use strict";
      n.d(t, {
        o: function () {
          return k;
        },
      });
      var a = n(52603),
        i = n(56609),
        r = n(73872),
        s = n(95548),
        o = n(3146),
        l = n(83998),
        c = n(43984),
        d = n(42751),
        u = n(36517),
        x = n(36809);
      let h = new a.u({ uri: o.Vw }),
        m = new c.g((0, d.eI)({ url: (0, x.B)(o.Vw) })),
        p = (0, i.V)(
          (e) => {
            let { query: t } = e,
              n = (0, u.p$)(t);
            return (
              "OperationDefinition" === n.kind && "subscription" === n.operation
            );
          },
          m,
          h
        ),
        k = new r.f({ cache: new s.h(), defaultOptions: l.v, link: p });
    },
    28564: function (e, t, n) {
      "use strict";
      n.d(t, {
        V: function () {
          return i;
        },
      });
      let a = { hours: 0, mins: 0 },
        i = async function (e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "day";
          if (!e) return a;
          let n = new Date(e),
            i = new Date(),
            r = n.getTime() - i.getTime();
          return "day" === t
            ? {
                days: Math.floor(r / 864e5),
                hours: Math.floor((r % 864e5) / 36e5),
                mins: Math.floor((r % 36e5) / 6e4),
              }
            : {
                hours: Math.floor(r / 36e5),
                mins: Math.floor((r % 36e5) / 6e4),
                secs: Math.floor((r % 6e4) / 1e3),
              };
        };
    },
    54234: function (e, t, n) {
      "use strict";
      n.d(t, {
        a: function () {
          return a;
        },
      });
      let a = (e, t) => (e.length <= t ? e : e.slice(0, t) + "...");
    },
    33730: function (e, t, n) {
      "use strict";
      var a = n(2265),
        i = n(64707),
        r = n(1970),
        s = n(24377),
        o = n(91960),
        l = n(29557),
        c = n(99376),
        d = n(15150);
      t.Z = () => {
        let {
            address: e,
            chainId: t,
            isConnected: n,
            status: u,
          } = (0, i.useAccount)(),
          [x, h] = (0, a.useState)(void 0),
          m = (0, o.TL)(),
          {
            actions: {
              App: { setWalletConnectChainId: p },
            },
          } = (0, o.oR)((e) => ({ App: e.AppEntity })),
          { disconnect: k } = (0, r.useDisconnect)(),
          { connect: _, connectors: f } = (0, s.useConnect)(),
          { push: g } = (0, c.useRouter)(),
          y = (0, a.useCallback)(
            async (e, t) => {
              try {
                if ((console.log(f), "injected" === e && !window.ethereum))
                  return g(
                    `https://metamask.app.link/dapp/${window.location.hostname}`
                  );
                let n = f.find((t) => t.id === e);
                if (!n) {
                  console.error("connector not found");
                  return;
                }
                _({ chainId: d.vL ? void 0 : t || l.ZP.chainId, connector: n });
              } catch (e) {
                console.log("walletConnect error", e);
              } finally {
                m(p());
              }
            },
            [f, _, g, m, p]
          );
        return (
          (0, a.useEffect)(() => {
            if (!n) return h(void 0);
            h(e);
          }, [e, n]),
          { address: x, disconnect: k, walletConnect: y, chainId: t, status: u }
        );
      };
    },
    83526: function (e, t, n) {
      "use strict";
      n.d(t, {
        d: function () {
          return l;
        },
      });
      var a = n(2265),
        i = n(15408),
        r = n(68575),
        s = n(91960),
        o = n(4298);
      let l = () => {
        let e = (0, i.O)(),
          [t, n] = (0, a.useState)(e.connected),
          {
            actions: {
              Bridge: { setSolanaWasManuallyDisconnected: l },
            },
          } = (0, s.oR)((e) => ({ Bridge: e.BridgeEntity })),
          c = (0, r.I0)();
        return (
          (0, a.useEffect)(() => {
            n(e.connected);
          }, [e.connected]),
          {
            connectWallet: async () => {
              if (!e.connected)
                try {
                  e.select(o.B), await e.wallet?.adapter.connect();
                } catch (e) {
                  console.error(e);
                }
            },
            disconnectWallet: async () => {
              e.connected && (await e.wallet?.adapter.disconnect(), c(l(!0)));
            },
            connected: t,
            connecting: e?.connecting,
            wallet: e,
            sendTransaction: e?.sendTransaction,
            address: e?.publicKey?.toString() || "",
            adapterName: o.B,
          }
        );
      };
    },
    24895: function (e, t, n) {
      "use strict";
      n.d(t, {
        ApolloWrapper: function () {
          return x;
        },
      });
      var a = n(57437),
        i = n(52603),
        r = n(73872),
        s = n(95548),
        o = n(72573),
        l = n(89690);
      let c = new i.u({ uri: "https://cosmos-indexer.entangle.fi/v1/graphql" }),
        d = new r.f({ cache: new s.h(), link: c }),
        u = new o.$();
      function x(e) {
        let { children: t } = e;
        return (0, a.jsx)(l.e, { client: d, suspenseCache: u, children: t });
      }
    },
    18867: function (e, t, n) {
      "use strict";
      n.d(t, {
        y7: function () {
          return a;
        },
        DY: function () {
          return c;
        },
        dd: function () {
          return d;
        },
      });
      var a,
        i = n(57437),
        r = n(2265),
        s = n(32731);
      let o = () => {
        let { modalContent: e, hideModal: t } = d();
        return (0, i.jsx)(i.Fragment, {
          children:
            e?.type === a.UnstakingModal &&
            (0, i.jsx)(s.e, {
              onClose: t,
              value: e.value,
              onSubmit: e.onSubmit,
              contentText: e.contentText,
              delegatorName: e?.delegatorName,
            }),
        });
      };
      (a || (a = {})).UnstakingModal = "unstakingModal";
      let l = (0, r.createContext)({
          modalContent: null,
          showModal: () => {},
          hideModal: () => {},
        }),
        c = (e) => {
          let { children: t } = e,
            [n, a] = (0, r.useState)(null),
            s = (0, r.useCallback)((e) => {
              a(e);
            }, []),
            c = (0, r.useCallback)(() => {
              a(null);
            }, []),
            d = (0, r.useMemo)(
              () => ({ showModal: s, hideModal: c, modalContent: n }),
              [c, n, s]
            );
          return (0, i.jsxs)(l.Provider, {
            value: d,
            children: [t, (0, i.jsx)(o, {})],
          });
        },
        d = () => (0, r.useContext)(l);
    },
    70388: function (e, t, n) {
      "use strict";
      n.d(t, {
        X: function () {
          return i;
        },
      });
      var a = n(57437);
      let i = (e) => {
        let { ...t } = e;
        return (0, a.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 20 20",
          ...t,
          children: (0, a.jsx)("path", {
            stroke: "currentColor",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "1.25",
            d: "m12 5-5 5 5 5",
          }),
        });
      };
    },
    96344: function (e, t, n) {
      "use strict";
      n.d(t, {
        l: function () {
          return i;
        },
      });
      var a = n(57437);
      let i = (0, n(2265).memo)((e) => {
        let { ...t } = e;
        return (0, a.jsx)("svg", {
          width: "10",
          height: "10",
          viewBox: "0 0 10 10",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...t,
          children: (0, a.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M1.98268 8.01735C1.83911 7.87375 1.83911 7.64096 1.98268 7.49743L6.86978 2.61029H3.71323C3.51019 2.61029 3.34559 2.44569 3.34559 2.24265C3.34559 2.0396 3.51019 1.875 3.71323 1.875H7.75735C7.85485 1.875 7.94838 1.91374 8.01735 1.98268C8.08625 2.05163 8.125 2.14514 8.125 2.24265V6.28677C8.125 6.48982 7.96037 6.65442 7.75735 6.65442C7.55434 6.65442 7.38971 6.48982 7.38971 6.28677V3.13023L2.50261 8.01735C2.35903 8.16088 2.12625 8.16088 1.98268 8.01735Z",
            fill: "#A7A7A7",
          }),
        });
      });
      i.displayName = "LinkArrowIcon";
    },
    54647: function (e, t, n) {
      "use strict";
      n.d(t, {
        m: function () {
          return i;
        },
      });
      var a = n(57437);
      let i = (0, n(2265).memo)((e) => {
        let { ...t } = e;
        return (0, a.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 17 16",
          ...t,
          children: (0, a.jsx)("path", {
            stroke: "currentColor",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M5.34 7.333V4.667a3.333 3.333 0 1 1 6.666 0v2.666m-8 0h9.333c.737 0 1.334.597 1.334 1.334v4.666c0 .737-.597 1.334-1.334 1.334H4.006a1.333 1.333 0 0 1-1.333-1.334V8.667c0-.737.597-1.334 1.333-1.334Z",
          }),
        });
      });
      i.displayName = "LockIcon";
    },
    95166: function (e, t, n) {
      "use strict";
      n.d(t, {
        P: function () {
          return i;
        },
      });
      var a = n(57437);
      let i = (e) => {
        let { className: t } = e;
        return (0, a.jsx)("svg", {
          className: t,
          xmlns: "http://www.w3.org/2000/svg",
          width: "9",
          height: "9",
          viewBox: "0 0 9 9",
          fill: "none",
          children: (0, a.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M0.637831 8.36221C0.454056 8.1784 0.454056 7.88043 0.637831 7.69671L6.89332 1.44118H2.85294C2.59304 1.44118 2.38235 1.23048 2.38235 0.970588C2.38235 0.710692 2.59304 0.5 2.85294 0.5H8.02941C8.15421 0.5 8.27393 0.549581 8.36221 0.637835C8.4504 0.72608 8.5 0.845779 8.5 0.970588V6.14707C8.5 6.40697 8.28927 6.61766 8.02941 6.61766C7.76955 6.61766 7.55882 6.40697 7.55882 6.14707V2.10669L1.30334 8.36221C1.11956 8.54593 0.821605 8.54593 0.637831 8.36221Z",
            fill: "#0E0E0E",
          }),
        });
      };
    },
    3573: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return eC;
        },
      });
      var a,
        i,
        r = n(57437),
        s = n(65472),
        o = n.n(s),
        l = n(33145),
        c = n(36760),
        d = n.n(c),
        u = n(2265),
        x = n(63896),
        h = n(29557);
      let m = (e) => [33033, 33133].includes(e),
        p = (e) => {
          let t = (0, h.GW)(e);
          return t?.networkIcon ? t.networkIcon : x.default;
        },
        k = (e) => {
          let t = (0, h.GW)(e);
          return t?.networkText ? t.networkText : null;
        };
      var _ = n(50339),
        f = n(78212),
        g = n(13653),
        y = n(79306),
        v = n(66806),
        b = n(86902),
        C = n(29194),
        B = n(27648),
        j = n(34962),
        w = n.n(j),
        N = (0, u.memo)((e) => {
          let { children: t, isOpen: n } = e;
          return (0, r.jsx)("div", {
            className: w().wrapper,
            children: (0, r.jsx)("div", {
              className: d()(w().container, { [w().open]: n }),
              children: t,
            }),
          });
        }),
        E = n(83526),
        A = n(33730),
        H = n(95166),
        V = { src: "/_next/static/media/wrap-link-icon.f3619eb8.svg" };
      let T = (0, u.memo)((e) => {
        let { ...t } = e;
        return (0, r.jsxs)("svg", {
          width: "14",
          height: "14",
          viewBox: "0 0 14 14",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...t,
          children: [
            (0, r.jsx)("mask", {
              id: "mask0_9415_8023",
              maskUnits: "userSpaceOnUse",
              x: "0",
              y: "0",
              width: "14",
              height: "14",
              children: (0, r.jsx)("rect", {
                width: "14",
                height: "14",
                fill: "#D9D9D9",
              }),
            }),
            (0, r.jsx)("g", {
              mask: "url(#mask0_9415_8023)",
              children: (0, r.jsx)("path", {
                d: "M3.09505 11.9583C2.80037 11.9583 2.55094 11.8563 2.34678 11.6521C2.14261 11.4479 2.04053 11.1985 2.04053 10.9038V3.0962C2.04053 2.80152 2.14261 2.5521 2.34678 2.34793C2.55094 2.14376 2.80037 2.04168 3.09505 2.04168H8.14424L7.26924 2.91668H3.09505C3.05013 2.91668 3.00901 2.9354 2.97167 2.97283C2.93424 3.01016 2.91553 3.05128 2.91553 3.0962V10.9038C2.91553 10.9487 2.93424 10.9899 2.97167 11.0272C3.00901 11.0646 3.05013 11.0833 3.09505 11.0833H10.9027C10.9476 11.0833 10.9887 11.0646 11.026 11.0272C11.0635 10.9899 11.0822 10.9487 11.0822 10.9038V6.6926L11.9572 5.8176V10.9038C11.9572 11.1985 11.8551 11.4479 11.6509 11.6521C11.4468 11.8563 11.1974 11.9583 10.9027 11.9583H3.09505ZM5.54053 8.45835V6.45591L10.8254 1.1712C10.9158 1.08069 11.0153 1.01467 11.1238 0.973159C11.2322 0.931645 11.3425 0.910889 11.4547 0.910889C11.5691 0.910889 11.679 0.931645 11.7844 0.973159C11.8899 1.01467 11.986 1.07879 12.0727 1.16551L12.8052 1.89585C12.8897 1.98636 12.9546 2.08621 12.9999 2.19539C13.0451 2.30457 13.0677 2.41526 13.0677 2.52745C13.0677 2.63965 13.0485 2.74844 13.01 2.85383C12.9715 2.95931 12.907 3.05726 12.8164 3.14768L7.51482 8.45835H5.54053ZM6.41553 7.58335H7.14251L10.7781 3.94758L10.4147 3.58416L10.0255 3.20951L6.41553 6.81947V7.58335Z",
                fill: "#9DA2B3",
              }),
            }),
          ],
        });
      });
      T.displayName = "EditSquareIcon";
      var D = n(54234);
      let S = (e) => {
        let { ...t } = e;
        return (0, r.jsxs)("svg", {
          width: "14",
          height: "14",
          viewBox: "0 0 14 14",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...t,
          children: [
            (0, r.jsx)("rect", {
              width: "14",
              height: "14",
              rx: "4",
              fill: "#1E1E24",
            }),
            (0, r.jsx)("path", {
              d: "M5.76787 9.84252L3.08496 7.15961L3.6226 6.62185L5.76787 8.76712L10.3775 4.15747L10.9152 4.69523L5.76787 9.84252Z",
              fill: "#06E097",
            }),
          ],
        });
      };
      var I = n(61525);
      let G = (e) => {
        let {
            defaultAccountName: t,
            handleDisconnect: n,
            address: a,
            networkName: i,
            refetchAccountName: s,
          } = e,
          [l, c] = (0, u.useState)(!1),
          [x, h] = (0, u.useState)(t),
          [m] = (0, I.H)(),
          p = (0, u.useCallback)((e) => {
            h(e.target.value);
          }, []),
          k = (0, u.useCallback)(() => {
            c((e) => !e),
              setTimeout(() => {
                v.current && (v.current.focus(), v.current.select());
              }, 0);
          }, []);
        (0, u.useEffect)(() => {
          h(t);
        }, [t]);
        let _ = (0, u.useCallback)(() => {
            c(!1);
          }, []),
          f = (0, u.useCallback)(async () => {
            x.length &&
              x != t &&
              (await m({ account: a, name: x, network: i.toLowerCase() }),
              await s(),
              c(!1));
          }, [a, t, m, x, i, s]),
          g = (0, u.useCallback)(
            async (e) => {
              "Enter" === e.key && (await f());
            },
            [f]
          ),
          y = (0, b.Z)(_),
          v = (0, u.useRef)(null);
        return l
          ? (0, r.jsxs)("div", {
              ref: y,
              className: o().accountName,
              children: [
                (0, r.jsxs)("div", {
                  className: o().accountInputContainer,
                  children: [
                    (0, r.jsx)("input", {
                      type: "text",
                      ref: v,
                      className: d()(o().accountInput, {
                        [o().inputError]: !x.length,
                        [o().inputSuccess]: x.length && x != t,
                      }),
                      defaultValue: t,
                      value: x,
                      onChange: p,
                      onKeyDown: g,
                    }),
                    !x.length &&
                      (0, r.jsx)("div", {
                        className: o().inputErrorText,
                        children: "Input required",
                      }),
                  ],
                }),
                (0, r.jsx)(S, {
                  className: d()(o().checkIcon, {
                    [o().checkError]: !x.length,
                    [o().checkSuccess]: x.length && x != t,
                  }),
                  onClick: f,
                }),
              ],
            })
          : (0, r.jsxs)("div", {
              className: o().accountNameContainer,
              children: [
                (0, r.jsxs)("div", {
                  onClick: k,
                  className: o().accountName,
                  children: [
                    (0, D.a)(t, 15),
                    (0, r.jsx)(T, { className: o().editAccountNameIcon }),
                  ],
                }),
                (0, r.jsx)("div", {
                  onClick: n,
                  className: o().accountDropdownDisconnect,
                  children: "Disconnect",
                }),
              ],
            });
      };
      var P = n(72570),
        M = n(73513);
      let L = (0, u.memo)((e) => {
        let { address: t, isCopied: n, setIsCopied: a } = e,
          i = (0, u.useCallback)(() => {
            t && (navigator.clipboard.writeText(t), a(!0));
          }, [t, a]),
          s = (0, u.useCallback)(() => {
            a(!1);
          }, [a]);
        return (
          (0, u.useEffect)(
            () => () => {
              a(!1);
            },
            [a]
          ),
          (0, r.jsx)(r.Fragment, {
            children: (0, r.jsxs)("span", {
              className: o().copyLabel,
              onMouseLeave: s,
              onClick: i,
              children: [
                t ? `${t.slice(0, 2)}...${t.slice(-4)}` : "",
                n
                  ? (0, r.jsx)("span", {
                      className: o().copiedText,
                      children: "copied",
                    })
                  : (0, r.jsx)(M.T, { className: o().copyIcon }),
              ],
            }),
          })
        );
      });
      L.displayName = "AccountAddress";
      var F = (e) => {
          let {
              address: t,
              icon: n,
              accountName: a,
              nglBalance: i,
              usdBalance: s,
              networkName: c,
              children: x,
              disconnect: h,
              refetchAccountName: m,
            } = e,
            [p, k] = (0, u.useState)(!1);
          return (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)("div", {
                className: o().accountDropdownHeader,
                children: (0, r.jsxs)("div", {
                  className: o().accountDropdownLabel,
                  children: [
                    (0, r.jsx)("div", {
                      className: d()(o().chainDropdownIcon, o().accountIcon),
                      children: (0, r.jsx)(l.default, {
                        fill: !0,
                        alt: "Account Icon",
                        src: n,
                      }),
                    }),
                    (0, r.jsx)(G, {
                      defaultAccountName: a || "Account Name",
                      handleDisconnect: h,
                      refetchAccountName: m,
                      address: t,
                      networkName: c,
                    }),
                  ],
                }),
              }),
              (0, r.jsx)("div", {
                children: (0, r.jsx)("div", {
                  className: o().renderSection,
                  children: (0, r.jsxs)("div", {
                    className: d()(o().renderItem, o().accountBalanceContainer),
                    children: [
                      (0, r.jsxs)("div", {
                        className: d()(
                          o().chainIcon,
                          o().accountAddressContainer,
                          { [o().active]: p }
                        ),
                        children: [
                          (0, r.jsx)("div", {
                            className: d()(
                              o().chainDropdownIcon,
                              o().jassDropdownIcon
                            ),
                            children: (0, r.jsx)(P.I, {
                              address: t,
                              diameter: 24,
                            }),
                          }),
                          (0, r.jsx)(L, {
                            address: t,
                            isCopied: p,
                            setIsCopied: k,
                          }),
                        ],
                      }),
                      i &&
                        s &&
                        (0, r.jsxs)("div", {
                          className: o().accountBalance,
                          children: [
                            (0, r.jsxs)("div", {
                              className: o().nglBalance,
                              children: [i, " EAI"],
                            }),
                            (0, r.jsxs)("div", {
                              className: o().usdBalance,
                              children: ["≈ $", s],
                            }),
                          ],
                        }),
                    ],
                  }),
                }),
              }),
              x,
              (0, r.jsx)("div", {
                className: "flex flex-col gap-3",
                children: (0, r.jsx)("div", { className: o().renderBorder }),
              }),
            ],
          });
        },
        U = n(70755),
        Z = n(56420),
        W = n(37060),
        R = n(91960),
        O = n(39502),
        $ = n(47895);
      let z = function (e, t) {
        let n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
          [a, i] = (0, u.useState)("0.00"),
          r = (0, R.TL)(),
          s = (0, R.CG)((e) => e.BalanceEntity.balances);
        return (
          (0, u.useEffect)(() => {
            e &&
              t &&
              r(
                R.zW.Balance.getBalances({
                  address: e,
                  chainId: t,
                  tokens: [$.eT.TOKEN_SOL_NGL],
                })
              );
          }, [t, r, e, n]),
          (0, u.useEffect)(() => {
            if (!e) return;
            let t = s?.[e]?.TOKEN_SOL_NGL || 0n;
            t && i((+(0, O.b)(t, 6)).toFixed(2));
          }, [s, e]),
          a
        );
      };
      var K = n(68575),
        Y = n(88826);
      let q = (e) => {
        let t = (0, R.TL)(),
          { totalValidatorsStaked: n } = (0, K.v9)(Y.Nt),
          {
            store: {
              Agent: { delegatedAmount: a },
            },
            asyncActions: {
              Agent: { getDelegatedAmount: i },
              Validator: { getFilteredDelegationValidators: r },
            },
          } = (0, R.oR)((e) => ({
            Agent: e.AgentEntity,
            Validator: e.ValidatorEntity,
          }));
        (0, u.useEffect)(() => {
          e &&
            (t(i({ delegatorAddress: e })),
            t(r({ filters: {}, sort: null, delegatorAddress: e })));
        }, [e, n, t, i, r]);
        let s = (0, u.useMemo)(() => {
            let e = n + a;
            return e ? e.toFixed(2) : "0.00";
          }, [a, n]),
          o = 0 === a || 0 === n;
        return {
          validatorsStaked: n,
          agentsStaked: a,
          totalStaked: s,
          isLoading: o,
        };
      };
      var X = n(41992),
        J = n(71282);
      let Q = function (e, t) {
          let n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : [],
            [a, i] = (0, u.useState)("0.00"),
            r = (0, R.TL)(),
            s = (0, R.CG)((e) => e.BalanceEntity.balances);
          return (
            (0, u.useEffect)(() => {
              e &&
                t &&
                r(
                  R.zW.Balance.getBalances({
                    address: e,
                    chainId: t,
                    tokens: n,
                  })
                );
            }, [t, r, n, e]),
            (0, u.useEffect)(() => {
              if (!e) return;
              let t = s?.[e]?.TOKEN_TRON_NGL || 0n;
              t && i((+(0, J.d)(t)).toFixed(2));
            }, [s, e]),
            a
          );
        },
        ee = function (e, t) {
          let n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : [],
            [a, i] = (0, u.useState)("0.00"),
            r = (0, R.CG)((e) => e.BalanceEntity.balances),
            s = (0, K.I0)();
          return (
            (0, u.useEffect)(() => {
              e &&
                t &&
                s(
                  R.zW.Balance.getBalances({
                    address: e,
                    chainId: t,
                    tokens: n,
                  })
                );
            }, [t, s, e, n]),
            (0, u.useEffect)(() => {
              if (!e) return;
              let t = r?.[e]?.TOKEN_NOBLE_USDC || 0n;
              t && i((+(0, J.d)(t)).toFixed(2));
            }, [r, a]),
            a
          );
        },
        et = -11n,
        en = function (e, t) {
          let n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : [],
            [a, i] = (0, u.useState)("0.00"),
            r = (0, R.TL)(),
            s = (0, R.CG)((e) => e.BalanceEntity.balances);
          return (
            (0, u.useEffect)(() => {
              e &&
                t &&
                r(
                  R.zW.Balance.getBalances({
                    address: e,
                    chainId: t,
                    tokens: n,
                  })
                );
            }, [t, r, n, e]),
            (0, u.useEffect)(() => {
              if (!e) return;
              let t = s?.[e]?.TOKEN_TON_NGL || 0n;
              console.debug("balances", t, t === et),
                t && t !== et && i((+(0, J.d)(t)).toFixed(2));
            }, [s, e]),
            a
          );
        };
      var ea = n(38217),
        ei = n(50249);
      let er = function (e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          [n, a] = (0, u.useState)("0.00"),
          { data: i } = (0, ea.useWalletClient)({ chainId: e });
        return (
          (0, u.useEffect)(() => {
            (async () => {
              let r = t.find((e) => "EAI" === e.tokenValue);
              if (r?.contractAddress && i && e)
                try {
                  let t = await ei.Y.getTokenBalance(r.contractAddress, i, e),
                    s = (+(0, J.d)(t)).toFixed(2);
                  n !== s && a(s);
                } catch (e) {
                  console.log("useGetEvmBalance", e);
                }
            })();
          }, [e, n, i, t]),
          n
        );
      };
      var es = n(3850),
        eo = (e, t) => {
          let [n, a, i, r, s] = e,
            { totalStaked: o } = q(n),
            { allTokensByChainId: l } = (0, es.e)(),
            c = (0, W.R)("EAI"),
            { balance: d } = (0, Z.r)(h.ZP.chainId),
            x = er(t, l[t]),
            m = z(a, h.m5.Solana.chainId, l[h.m5.Solana.chainId]),
            p = Q(i, h.m5.TRON.chainId, l[h.m5.TRON.chainId]),
            k = en(s, h.m5.TRON.chainId, l[h.m5.TRON.chainId]),
            _ = ee(r, h.m5.Noble.chainId, l[h.m5.Noble.chainId]),
            f = (0, X.u)(n || ""),
            g = (0, u.useMemo)(
              () => (c && d ? (+d.totalBalance * c).toFixed(2) : "0"),
              [d, c]
            ),
            y = (0, u.useMemo)(
              () => (c && d ? (+x * c).toFixed(2) : "0"),
              [d, x, c]
            ),
            v = (0, u.useMemo)(
              () => (c && m ? (+m * c).toFixed(2) : "0"),
              [m, c]
            ),
            b = (0, u.useMemo)(
              () => (c && p ? (+p * c).toFixed(2) : "0"),
              [p, c]
            ),
            C = (0, u.useMemo)(
              () => (c && k ? (+k * c).toFixed(2) : "0"),
              [k, c]
            );
          return {
            totalStaked: o,
            totalOmnipoints: (0, u.useMemo)(() => {
              let { data: e } = f;
              return e && Array.isArray(e) && t == h.ZP.chainId
                ? e.reduce((e, t) => e + Number(t.points), 0)
                : 0;
            }, [t, f]),
            balance: d,
            usdBalance: g,
            evmBalance: x,
            usdEvmBalance: y,
            solanaBalance: m,
            usdSolanaBalance: v,
            tonBalance: k,
            tronBalance: p,
            usdTronBalance: b,
            usdTonBalance: C,
            nobleBalance: _,
          };
        },
        el = n(96344),
        ec = n(66972),
        ed = n(76985),
        eu = n(15150),
        ex = n(29853),
        eh = (0, u.memo)((e) => {
          let {
              isOpen: t,
              addresses: n,
              closeDropdown: a,
              chainId: i,
              evmAccountName: s,
              solanaAccountName: c,
              tronAccountName: x,
              tonAccountName: _,
              nobleAccountName: f,
              refetchAccountName: g,
            } = e,
            [y, v, b, j, w] = n,
            {
              totalStaked: T,
              balance: D,
              usdBalance: S,
              evmBalance: I,
              usdEvmBalance: G,
              solanaBalance: P,
              usdSolanaBalance: M,
              tronBalance: L,
              usdTronBalance: Z,
              tonBalance: W,
              usdTonBalance: R,
              totalOmnipoints: O,
            } = eo(n, i),
            $ = (0, C.q_)({
              from: {
                balance: 0,
                usdBalance: 0,
                totalStaked: 0,
                solanaBalance: 0,
                usdSolanaBalance: 0,
                evmBalance: 0,
                usdEvmBalance: 0,
              },
              config: { duration: 300 },
            }),
            { disconnect: z } = (0, A.Z)(),
            { disconnectWallet: K } = (0, E.d)(),
            { disconnectWallet: Y } = (0, U.Y)(),
            { disconnectWallet: q } = (0, ed.e)(),
            { disconnectWallet: X } = (0, ec.H)();
          return (
            (0, u.useEffect)(() => {
              $.totalStaked.start(Number(T)),
                $.balance.start(Number(D.formatedTotalBalance)),
                $.usdBalance.start(Number(S)),
                $.evmBalance.start(Number(I)),
                $.usdEvmBalance.start(Number(G)),
                $.solanaBalance.start(Number(P)),
                $.usdSolanaBalance.start(Number(M));
            }, [
              $.totalStaked,
              T,
              D,
              S,
              $.balance,
              $.usdBalance,
              $.solanaBalance,
              $.usdSolanaBalance,
              P,
              M,
              $.evmBalance,
              $.usdEvmBalance,
              I,
              G,
            ]),
            (0, u.useEffect)(() => {
              n?.filter(Boolean).length && g();
            }, [n, i, g]),
            (0, r.jsx)(N, {
              isOpen: t,
              children: (0, r.jsxs)("div", {
                className: o().renderContainer,
                children: [
                  y &&
                    (0, r.jsx)(r.Fragment, {
                      children: (0, r.jsx)(F, {
                        address: y,
                        icon: p(i),
                        accountName: s,
                        nglBalance: m(i) ? D.formatedTotalBalance : I,
                        usdBalance: m(i) ? S : G,
                        disconnect: z,
                        refetchAccountName: g,
                        networkName: k(i) ? k(i).toLowerCase() : "",
                        children: (0, r.jsx)("div", {
                          className: "flex flex-col gap-3",
                          children:
                            m(i) &&
                            (0, r.jsxs)(r.Fragment, {
                              children: [
                                (0, r.jsxs)("div", {
                                  className:
                                    "flex w-full items-center justify-between",
                                  children: [
                                    (0, r.jsx)("label", {
                                      className:
                                        "text-[#A7A7A7] text-[12px] text-xs font-inter",
                                      children: "You Staked",
                                    }),
                                    (0, r.jsxs)("p", {
                                      className:
                                        "text-[12px] text-[#D9D9D9] text-sm font-inter",
                                      children: [
                                        Number(T)
                                          ? (0, r.jsx)(C.q.span, {
                                              children: $.totalStaked.to((e) =>
                                                e.toLocaleString("en", {
                                                  minimumFractionDigits: 2,
                                                  maximumFractionDigits: 2,
                                                })
                                              ),
                                            })
                                          : "0.00",
                                        " ",
                                        "EAI",
                                      ],
                                    }),
                                  ],
                                }),
                                (0, r.jsxs)("div", {
                                  className:
                                    "flex w-full items-center justify-between",
                                  children: [
                                    (0, r.jsx)(B.default, {
                                      className: o().omnipointsLabel,
                                      href: "https://app.entanglexplai.xyz/validators",
                                      rel: "noopener noreferrer",
                                      children: (0, r.jsxs)("label", {
                                        className:
                                          "text-[#A7A7A7] text-[12px] text-xs font-inter flex gap-[4px]",
                                        children: [
                                          "Omni Points",
                                          (0, r.jsx)(el.l, {
                                            className: o().omnipointsIcon,
                                          }),
                                        ],
                                      }),
                                    }),
                                    (0, r.jsxs)("p", {
                                      className:
                                        "text-[12px] text-[#D9D9D9] text-sm font-inter",
                                      children: [O, " Points"],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                        }),
                      }),
                    }),
                  v &&
                    (0, r.jsx)(F, {
                      address: v,
                      icon: p(h.m5.Solana.chainId),
                      accountName: c,
                      nglBalance: P,
                      usdBalance: M,
                      disconnect: K,
                      refetchAccountName: g,
                      networkName: k(h.m5.Solana.chainId) || "Solana",
                    }),
                  b &&
                    (0, r.jsx)(F, {
                      address: b,
                      icon: p(h.m5.TRON.chainId),
                      accountName: x,
                      nglBalance: L,
                      usdBalance: Z,
                      disconnect: Y,
                      refetchAccountName: g,
                      networkName: k(h.m5.TRON.chainId) || "TRON",
                    }),
                  w &&
                    (0, r.jsx)(F, {
                      address: w,
                      icon: p(h.m5.TON.chainId),
                      accountName: _,
                      nglBalance: W,
                      usdBalance: R,
                      disconnect: q,
                      refetchAccountName: g,
                      networkName: k(h.m5.TON.chainId) || "TON",
                    }),
                  j &&
                    (0, r.jsx)(F, {
                      address: j,
                      icon: p(h.m5.Noble.chainId),
                      accountName: f,
                      disconnect: X,
                      refetchAccountName: g,
                      networkName: k(h.m5.Noble.chainId) || "Noble",
                    }),
                  (eu.N1 || eu.Is) &&
                    (0, r.jsxs)(r.Fragment, {
                      children: [
                        (0, r.jsxs)("div", {
                          className: o().linksContainer,
                          children: [
                            !eu.Is &&
                              (0, r.jsx)(B.default, {
                                href: "https://photonbridge.io",
                                target: "_blank",
                                className: o().nglContainer,
                                onClick: a,
                                children: (0, r.jsxs)("div", {
                                  className: "flex items-center gap-2",
                                  children: [
                                    (0, r.jsx)("span", {
                                      className: d()(
                                        o().renderTitle,
                                        o().title__link,
                                        o().bridgeLink
                                      ),
                                      children: "Photon Bridge",
                                    }),
                                    (0, r.jsx)(l.default, {
                                      width: 12,
                                      height: 12,
                                      src: ex.Z.src,
                                      alt: "Photon Bridge",
                                    }),
                                  ],
                                }),
                              }),
                            (0, r.jsx)(B.default, {
                              href: eu.Is
                                ? "https://app.entanglexplai.xyz/validators"
                                : "/validators",
                              className: o().nglContainer,
                              children: (0, r.jsxs)("span", {
                                className: d()(
                                  o().renderTitle,
                                  o().title__link,
                                  o().wrapLink
                                ),
                                onClick: a,
                                children: [
                                  "EAI",
                                  (0, r.jsx)(l.default, {
                                    src: V.src,
                                    width: "14",
                                    height: "14",
                                    alt: "Wrap link icon",
                                  }),
                                  "XPL",
                                ],
                              }),
                            }),
                          ],
                        }),
                        // (0, r.jsx)("div", {
                        //   children: (0, r.jsxs)(B.default, {
                        //     href: eu.Is
                        //       ? "/msg/"
                        //       : "/msg/",
                        //     target: eu.Is ? "_blank" : "_self",
                        //     className: o().goToStaking,
                        //     onClick: a,
                        //     children: [
                        //       "Go to Staking",
                        //       (0, r.jsx)(H.P, {
                        //         className: o().goToStakingIcon,
                        //       }),
                        //     ],
                        //   }),
                        // }),
                      ],
                    }),
                ],
              }),
            })
          );
        }),
        em = n(81008),
        ep = n(25864),
        ek = n(73867),
        e_ = n(38536),
        ef = (0, u.memo)((e) => {
          let {
              isOpen: t,
              closeDropdown: n,
              address: a,
              chainIcon: i,
              chainId: s,
            } = e,
            { allTokensByChainId: c } = (0, es.e)(),
            { switchChain: x } = (0, em.useSwitchChain)(),
            [m, p] = (0, u.useState)(!1),
            _ = (0, e_.Z)("expert"),
            f = (0, u.useCallback)(
              (e) => {
                x({ chainId: e.chainId });
              },
              [x]
            ),
            { data: g } = (0, ek.b)({
              address: a || "",
              network: k(s) ? k(s).toLowerCase() : "",
            }),
            y = (0, u.useMemo)(() => {
              let e = new Set(_.map((e) => e.chainId));
              return eu.vL
                ? h.Dc.filter((t) => e.has(t.chainId)).sort((e, t) =>
                    e.comingSoon && !t.comingSoon
                      ? 1
                      : !e.comingSoon && t.comingSoon
                      ? -1
                      : 0
                  )
                : h.Dc;
            }, [_]);
          return (0, r.jsx)(N, {
            isOpen: t,
            children: (0, r.jsxs)("div", {
              className: o().renderContainer,
              children: [
                (0, r.jsxs)("div", {
                  className: o().switchChainDropdownHeader,
                  children: [
                    (0, r.jsxs)("div", {
                      className: o().switchChainDropdownLabel,
                      children: [
                        (0, r.jsx)("div", {
                          className: d()(o().chainDropdownIcon, o().iconBadge),
                          children: (0, r.jsx)(l.default, {
                            src: i,
                            alt: "Chain Icon",
                            fill: !0,
                          }),
                        }),
                        (0, r.jsx)("div", {
                          className: o().accountIconContainer,
                          children: (0, r.jsx)(P.I, {
                            address: a || "",
                            diameter: 39,
                          }),
                        }),
                        (0, r.jsxs)("div", {
                          className: o().switchChainNameContainer,
                          children: [
                            (0, r.jsx)("div", {
                              className: o().switchChainDropdownName,
                              children:
                                g?.account[0] && g?.account[0].name
                                  ? g?.account[0]?.name
                                  : "Account Name",
                            }),
                            a &&
                              (0, r.jsx)("div", {
                                className: d()(o().switchChainAddress, {
                                  [o().active]: m,
                                }),
                                children: (0, r.jsx)(L, {
                                  address: a,
                                  isCopied: m,
                                  setIsCopied: p,
                                }),
                              }),
                          ],
                        }),
                      ],
                    }),
                    (0, r.jsx)("button", {
                      className: "w-5 h-5",
                      onClick: n,
                      children: (0, r.jsx)(ep.T, {
                        type: "base",
                        className: o().closeIcon,
                      }),
                    }),
                  ],
                }),
                (0, r.jsx)("div", {
                  className: o().switchChainDropdownSubheader,
                  children: "Switch Network To",
                }),
                (0, r.jsx)("div", { className: o().renderBorder }),
                (0, r.jsx)("div", {
                  className: o().switchChainDropdownChains,
                  children: y
                    .filter((e) => {
                      let { chainId: t } = e;
                      return c[t]?.length;
                    })
                    .map((e) =>
                      (0, r.jsxs)(
                        "button",
                        {
                          onClick: () => f(e),
                          className: d()(o().chain, {
                            [o().chainConnected]: e.chainId === s,
                            [o().chainUnavailable]:
                              e.chainId === h.m5.Solana.chainId ||
                              e.chainId === h.m5.Noble.chainId ||
                              e.chainId === h.m5.TRON.chainId ||
                              e.chainId === h.m5.TON.chainId,
                          }),
                          disabled: eu.vL && e.comingSoon,
                          children: [
                            (0, r.jsx)(l.default, {
                              src: e.networkIcon || "",
                              alt: e.networkText,
                              width: 32,
                              height: 32,
                            }),
                            e.networkText,
                          ],
                        },
                        e.chainId
                      )
                    ),
                }),
              ],
            }),
          });
        });
      let eg = (e) => (e && e[0]?.name ? e[0]?.name : "Account Name");
      var ey = (e, t) => {
        let [n, a, i, r, s] = e,
          { data: o, refetch: l } = (0, ek.b)({
            address: n || "",
            network: k(t) ? k(t).toLowerCase() : "",
          }),
          { data: c, refetch: d } = (0, ek.b)({
            address: a || "",
            network: "solana",
          }),
          { data: x, refetch: h } = (0, ek.b)({
            address: i || "",
            network: "tron",
          }),
          { data: m, refetch: p } = (0, ek.b)({
            address: r || "",
            network: "noble",
          }),
          { data: _, refetch: f } = (0, ek.b)({
            address: s || "",
            network: "ton",
          }),
          g = (0, u.useCallback)(async () => {
            await l(), await d(), await h(), await p();
          }, [l, p, d, h]),
          y = (0, u.useMemo)(() => eg(o?.account), [o?.account]),
          v = (0, u.useMemo)(() => eg(c?.account), [c?.account]);
        return {
          evmAccountName: y,
          solanaAccountName: v,
          tronAccountName: (0, u.useMemo)(() => eg(x?.account), [x?.account]),
          nobleAccountName: (0, u.useMemo)(() => eg(m?.account), [m?.account]),
          tonAccountName: (0, u.useMemo)(() => eg(_?.account), [_?.account]),
          refetchAccountName: g,
        };
      };
      let ev = (e) => {
        let { className: t } = e;
        return (0, r.jsx)("svg", {
          width: "20",
          height: "20",
          viewBox: "0 0 20 20",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: (0, r.jsxs)("g", {
            id: "account_balance_wallet",
            children: [
              (0, r.jsx)("mask", {
                id: "mask0_9024_26955",
                maskUnits: "userSpaceOnUse",
                x: "0",
                y: "0",
                width: "20",
                height: "20",
                children: (0, r.jsx)("rect", {
                  id: "Bounding box",
                  width: "20",
                  height: "20",
                  fill: "#D9D9D9",
                }),
              }),
              (0, r.jsx)("g", {
                mask: "url(#mask0_9024_26955)",
                children: (0, r.jsx)("path", {
                  id: "account_balance_wallet_2",
                  d: "M4.42345 17.0827C4.00789 17.0827 3.65289 16.9355 3.35845 16.6412C3.06414 16.3468 2.91699 15.9918 2.91699 15.5762V4.42247C2.91699 4.00692 3.06414 3.65192 3.35845 3.35747C3.65289 3.06317 4.00789 2.91602 4.42345 2.91602H15.5772C15.9928 2.91602 16.3478 3.06317 16.6422 3.35747C16.9365 3.65192 17.0837 4.00692 17.0837 4.42247V6.69018H15.8337V4.42247C15.8337 4.34761 15.8096 4.28615 15.7616 4.2381C15.7135 4.19004 15.6521 4.16602 15.5772 4.16602H4.42345C4.34859 4.16602 4.28713 4.19004 4.23908 4.2381C4.19102 4.28615 4.16699 4.34761 4.16699 4.42247V15.5762C4.16699 15.6511 4.19102 15.7125 4.23908 15.7606C4.28713 15.8087 4.34859 15.8327 4.42345 15.8327H15.5772C15.6521 15.8327 15.7135 15.8087 15.7616 15.7606C15.8096 15.7125 15.8337 15.6511 15.8337 15.5762V13.3085H17.0837V15.5762C17.0837 15.9918 16.9365 16.3468 16.6422 16.6412C16.3478 16.9355 15.9928 17.0827 15.5772 17.0827H4.42345ZM11.0901 13.7493C10.6746 13.7493 10.3196 13.6022 10.0251 13.3079C9.73081 13.0134 9.58366 12.6584 9.58366 12.2429V7.75581C9.58366 7.34025 9.73081 6.98525 10.0251 6.69081C10.3196 6.3965 10.6746 6.24935 11.0901 6.24935H16.4105C16.8261 6.24935 17.1811 6.3965 17.4755 6.69081C17.7698 6.98525 17.917 7.34025 17.917 7.75581V12.2429C17.917 12.6584 17.7698 13.0134 17.4755 13.3079C17.1811 13.6022 16.8261 13.7493 16.4105 13.7493H11.0901ZM16.4105 12.4993C16.4854 12.4993 16.5469 12.4753 16.5949 12.4273C16.643 12.3792 16.667 12.3178 16.667 12.2429V7.75581C16.667 7.68095 16.643 7.61949 16.5949 7.57143C16.5469 7.52338 16.4854 7.49935 16.4105 7.49935H11.0901C11.0153 7.49935 10.9538 7.52338 10.9057 7.57143C10.8577 7.61949 10.8337 7.68095 10.8337 7.75581V12.2429C10.8337 12.3178 10.8577 12.3792 10.9057 12.4273C10.9538 12.4753 11.0153 12.4993 11.0901 12.4993H16.4105ZM13.3337 11.2493C13.6809 11.2493 13.976 11.1278 14.2191 10.8848C14.4621 10.6417 14.5837 10.3466 14.5837 9.99935C14.5837 9.65213 14.4621 9.35699 14.2191 9.11393C13.976 8.87088 13.6809 8.74935 13.3337 8.74935C12.9864 8.74935 12.6913 8.87088 12.4482 9.11393C12.2052 9.35699 12.0837 9.65213 12.0837 9.99935C12.0837 10.3466 12.2052 10.6417 12.4482 10.8848C12.6913 11.1278 12.9864 11.2493 13.3337 11.2493Z",
                  fill: "currentColor",
                }),
              }),
            ],
          }),
        });
      };
      var eb = n(92906);
      ((a = i || (i = {})).Evm = "Evm"),
        (a.Solana = "Solana"),
        (a.TRON = "TRON"),
        (a.Noble = "Noble"),
        (a.TON = "TON"),
        (a.None = "None");
      var eC = (0, u.memo)((e) => {
        let {
            addresses: t,
            chainId: n,
            onConnect: a,
            isLoadingEntangleTypes: i,
          } = e,
          [s, c, x, m, k] = t,
          {
            evmAccountName: C,
            solanaAccountName: B,
            tronAccountName: j,
            nobleAccountName: w,
            tonAccountName: N,
            refetchAccountName: E,
          } = ey(t, n),
          [A, H] = (0, u.useState)(!1),
          [V, T] = (0, u.useState)("None"),
          S = (0, _.a)(1024),
          I = (0, u.useCallback)(() => {
            H(!1);
          }, []),
          G = (0, u.useCallback)(() => {
            H(!A), T("None");
          }, [A]),
          P = (0, u.useCallback)(
            (e, t) => {
              e.stopPropagation(),
                "Evm" === V || "Solana" === V
                  ? T("None")
                  : "Evm" === t
                  ? T("Evm")
                  : T("Solana"),
                H(!1);
            },
            [V]
          ),
          M = (0, u.useCallback)(() => {
            T("None"), H(!1);
          }, []),
          L = (0, u.useCallback)(() => {
            M(), I();
          }, [I, M]),
          F = (0, b.Z)(L),
          U = (0, u.useMemo)(() => {
            let e = t.filter(Boolean).length;
            return e > 1
              ? `${e} Accounts`
              : s
              ? S
                ? (0, D.a)(C, 5)
                : (0, D.a)(C, 20)
              : c
              ? S
                ? (0, D.a)(B, 5)
                : (0, D.a)(B, 20)
              : x
              ? S
                ? (0, D.a)(j, 5)
                : (0, D.a)(j, 20)
              : m
              ? S
                ? (0, D.a)(w, 5)
                : (0, D.a)(w, 20)
              : k
              ? S
                ? (0, D.a)(N, 5)
                : (0, D.a)(N, 20)
              : void 0;
          }, [t, s, c, x, m, k, S, C, B, j, w, N]);
        if (!s && eu.vL)
          return (0, r.jsx)("button", {
            className: d()(o().connectButton_ets),
            onClick: a,
            children: "Connect Wallet",
          });
        if (!s && !c && !x && !m && !k)
          return (0, r.jsxs)("button", {
            className: d()(o().connectButton, {
              [o().connectButton_udf]: eu.HC,
            }),
            onClick: a,
            children: [
              (0, r.jsx)(ev, {}),
              (0, r.jsx)("span", {
                className: o().connectWalletText,
                children: "Connect Wallet",
              }),
            ],
          });
        let Z = p(n);
        return eu.vL
          ? (0, r.jsxs)("div", {
              ref: F,
              className: d()(o().account_ets, { [o().account_openUdf]: A }),
              children: [
                (0, r.jsx)("div", {
                  children:
                    s &&
                    (0, r.jsx)("button", {
                      className: d()(o().account__network_ets, {
                        [o().account__network_active]: "Evm" === V,
                      }),
                      onClick: (e) => P(e, "Evm"),
                      disabled: i,
                      children: (0, r.jsx)(l.default, {
                        fill: !0,
                        alt: "EVM Account Icon",
                        src: Z,
                      }),
                    }),
                }),
                (0, r.jsxs)("div", {
                  onClick: G,
                  className: o().account__info_ets,
                  children: [
                    (0, r.jsx)("p", {
                      className: o().account__address_ets,
                      children: (0, eb.F)(s || "", 4),
                    }),
                    (0, r.jsx)("div", {
                      className: d()(o().account__online),
                      children: (0, r.jsx)("span", {}),
                    }),
                  ],
                }),
                (0, r.jsx)(ef, {
                  isOpen: "None" != V,
                  address: "Evm" == V ? s : c,
                  chainIcon: "Evm" == V ? Z : f.default,
                  closeDropdown: M,
                  chainId: "Evm" == V ? n : h.m5.Solana.chainId,
                }),
                (0, r.jsx)(eh, {
                  isOpen: A,
                  addresses: t,
                  closeDropdown: I,
                  chainId: n,
                  refetchAccountName: E,
                  evmAccountName: C,
                  solanaAccountName: B,
                  tronAccountName: j,
                  nobleAccountName: w,
                  tonAccountName: N,
                }),
              ],
            })
          : (0, r.jsxs)("div", {
              ref: F,
              className: d()(o().account, {
                [o().account_open]: A && !eu.HC,
                [o().account_openUdf]: A && eu.HC,
              }),
              children: [
                (0, r.jsxs)("div", {
                  className: o().account_networks,
                  children: [
                    s &&
                      (0, r.jsx)("button", {
                        className: d()(o().account__network, {
                          [o().account__network_active]: "Evm" === V,
                        }),
                        disabled: i,
                        onClick: (e) => P(e, "Evm"),
                        children: (0, r.jsx)(l.default, {
                          fill: !0,
                          alt: "EVM Account Icon",
                          src: Z,
                        }),
                      }),
                    c &&
                      (0, r.jsx)("div", {
                        className: d()(
                          o().account__network,
                          o().account__network_solana,
                          { [o().account__network_active]: "Solana" === V }
                        ),
                        children: (0, r.jsx)(l.default, {
                          fill: !0,
                          alt: "Solana Icon",
                          src: f.default,
                        }),
                      }),
                    x &&
                      (0, r.jsx)("div", {
                        className: d()(
                          o().account__network,
                          o().account__network_solana,
                          { [o().account__network_active]: "TRON" === V }
                        ),
                        children: (0, r.jsx)(l.default, {
                          fill: !0,
                          alt: "TRON Icon",
                          src: g.default,
                        }),
                      }),
                    m &&
                      (0, r.jsx)("div", {
                        className: d()(
                          o().account__network,
                          o().account__network_solana,
                          { [o().account__network_active]: "Noble" === V }
                        ),
                        children: (0, r.jsx)(l.default, {
                          fill: !0,
                          alt: "Noble Icon",
                          src: y.default,
                        }),
                      }),
                    k &&
                      (0, r.jsx)("div", {
                        className: d()(
                          o().account__network,
                          o().account__network_solana,
                          { [o().account__network_active]: "TON" === V }
                        ),
                        children: (0, r.jsx)(l.default, {
                          fill: !0,
                          alt: "TON Icon",
                          src: v.default,
                        }),
                      }),
                  ],
                }),
                (0, r.jsxs)("div", {
                  onClick: G,
                  className: o().account__info,
                  children: [
                    (0, r.jsx)("p", {
                      className: o().account__address,
                      children: U,
                    }),
                    (0, r.jsx)("div", {
                      className: d()(o().account__online, {
                        [o().account__online_udf]: eu.HC,
                      }),
                      children: (0, r.jsx)("span", {}),
                    }),
                  ],
                }),
                (0, r.jsx)(ef, {
                  isOpen: "None" != V,
                  address: "Evm" == V ? s : c,
                  chainIcon: "Evm" == V ? Z : f.default,
                  closeDropdown: M,
                  chainId: "Evm" == V ? n : h.m5.Solana.chainId,
                }),
                (0, r.jsx)(eh, {
                  isOpen: A,
                  addresses: t,
                  closeDropdown: I,
                  chainId: n,
                  refetchAccountName: E,
                  evmAccountName: C,
                  solanaAccountName: B,
                  tronAccountName: j,
                  nobleAccountName: w,
                  tonAccountName: N,
                }),
              ],
            });
      });
    },
    10270: function (e, t, n) {
      "use strict";
      n.d(t, {
        J: function () {
          return U;
        },
      });
      var a,
        i,
        r = n(57437),
        s = n(2265),
        o = n(36760),
        l = n.n(o),
        c = n(55197),
        d = n.n(c),
        u = n(86902);
      let x = (e) => {
        let { className: t } = e;
        return (0, r.jsx)("svg", {
          className: t,
          xmlns: "http://www.w3.org/2000/svg",
          width: "16",
          height: "20",
          viewBox: "0 0 16 20",
          fill: "none",
          children: (0, r.jsx)("path", {
            d: "M14.1317 9.13333C13.8825 8.80833 13.5792 8.52667 13.2975 8.245C12.5717 7.595 11.7483 7.12917 11.055 6.44667C9.44083 4.865 9.08333 2.25417 10.1125 0.25C9.08333 0.499167 8.18416 1.0625 7.41499 1.68C4.60916 3.93333 3.50416 7.90917 4.82583 11.3217C4.86916 11.43 4.91249 11.5383 4.91249 11.6792C4.91249 11.9175 4.74999 12.1342 4.53333 12.2208C4.28416 12.3292 4.02416 12.2642 3.81833 12.0908C3.75684 12.0393 3.70542 11.9769 3.66666 11.9067C2.44249 10.3575 2.24749 8.13667 3.07083 6.36C1.26166 7.83333 0.275826 10.325 0.416659 12.6758C0.481659 13.2175 0.546659 13.7592 0.730826 14.3008C0.882493 14.9508 1.17499 15.6008 1.49999 16.175C2.66999 18.0492 4.69583 19.3925 6.87333 19.6633C9.19166 19.9558 11.6725 19.5333 13.4492 17.93C15.4317 16.1317 16.125 13.25 15.1067 10.78L14.9658 10.4983C14.7383 10 14.1317 9.13333 14.1317 9.13333ZM10.7083 15.9583C10.405 16.2183 9.90666 16.5 9.51666 16.6083C8.30333 17.0417 7.08999 16.435 6.37499 15.72C7.66416 15.4167 8.43332 14.4633 8.66082 13.4992C8.84499 12.6325 8.49833 11.9175 8.35749 11.0833C8.22749 10.2817 8.24916 9.59917 8.54166 8.85167C8.74749 9.26333 8.96416 9.675 9.22416 10C10.0583 11.0833 11.3692 11.56 11.6508 13.0333C11.6942 13.185 11.7158 13.3367 11.7158 13.4992C11.7483 14.3875 11.3583 15.3625 10.7083 15.9583Z",
            fill: "#FFF",
          }),
        });
      };
      var h = JSON.parse(
          '{"v":"5.12.1","fr":30,"ip":0,"op":33,"w":320,"h":330,"nm":"Burn Icon","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Layer 2 Outlines","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[159.797,215.639,0],"ix":2,"l":2},"a":{"a":0,"k":[8.174,10.103,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"t":16,"s":[{"i":[[0.071,-0.019],[0.046,-0.074],[-0.093,-0.06],[-0.129,0.223],[-0.012,0.058]],"o":[[-0.15,0.041],[-0.046,0.074],[0.093,0.06],[0.068,-0.118],[0.011,-0.052]],"v":[[-204.947,-106.597],[-205.273,-106.418],[-205.329,-106.072],[-204.999,-106.269],[-204.866,-106.542]],"c":true}],"h":1},{"t":21,"s":[{"i":[[0.664,-0.578],[0.091,-1.358],[-1.464,-0.142],[-0.161,4.035],[0.624,0.675]],"o":[[-1.409,1.228],[-0.091,1.358],[1.483,0.144],[0.085,-2.134],[-0.556,-0.601]],"v":[[-30.79,-79.819],[-32.973,-75.607],[-31.155,-71.408],[-27.895,-75.56],[-28.855,-79.78]],"c":true}],"h":1},{"t":25,"s":[{"i":[[0.664,-0.578],[0.091,-1.358],[-1.464,-0.142],[-0.161,4.035],[0.624,0.675]],"o":[[-1.409,1.228],[-0.091,1.358],[1.483,0.144],[0.085,-2.134],[-0.556,-0.601]],"v":[[39.96,-156.069],[37.777,-151.857],[39.595,-147.658],[42.855,-151.81],[41.895,-156.03]],"c":true}],"h":1},{"t":29,"s":[{"i":[[0.802,-0.699],[0.022,-1.361],[-2.705,-0.231],[-2.059,3.474],[0.343,1.825]],"o":[[-1.409,1.228],[-0.074,4.593],[2.676,0.229],[0.849,-1.433],[-0.454,-2.415]],"v":[[-224.04,-87.007],[-227.223,-79.482],[-227.655,-70.97],[-222.208,-77.997],[-220.724,-83.976]],"c":true}],"h":1}],"ix":2},"nm":"Path 4","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":1,"k":[{"t":12,"s":[{"i":[[2.113,-2.428],[-0.172,-2.425],[-2.452,-0.793],[0.701,7.184]],"o":[[-2.113,2.428],[0.172,2.425],[2.452,0.793],[-0.701,-7.184]],"v":[[-222.801,-78.141],[-226.189,-70.437],[-222.554,-60.564],[-219.325,-68.818]],"c":true}],"h":1},{"t":16,"s":[{"i":[[3.719,5],[2.185,-3.118],[-6.641,-1.215],[0.161,6.297]],"o":[[1.111,4.467],[-2.004,2.86],[3.931,0.719],[-0.152,-5.946]],"v":[[-34.142,-75.124],[-43.548,-59.652],[-41.032,-48.233],[-34.34,-56.498]],"c":true}],"h":1},{"t":21,"s":[{"i":[[3.625,-1.375],[1.125,-2.5],[-2.25,-2],[-3.125,7.5]],"o":[[-3.625,1.375],[-1.125,2.5],[2.25,2],[3.125,-7.5]],"v":[[47.578,-168.139],[39.703,-162.139],[38.328,-150.514],[46.328,-157.139]],"c":true}],"h":1},{"t":25,"s":[{"i":[[3.625,-1.375],[1.125,-2.5],[-2.25,-2],[-3.125,7.5]],"o":[[-3.625,1.375],[-1.125,2.5],[2.25,2],[3.125,-7.5]],"v":[[55.203,-192.264],[47.328,-186.264],[45.953,-174.639],[53.953,-181.264]],"c":true}],"h":1},{"t":29,"s":[{"i":[[2.17,-0.782],[0.681,-1.443],[-1.336,-1.167],[-2.67,3.899]],"o":[[-2.17,0.782],[-0.681,1.443],[1.336,1.167],[3.088,-4.509]],"v":[[36.908,-163.106],[32.212,-157.966],[31.346,-151.242],[37.15,-155.411]],"c":true}],"h":1}],"ix":2},"nm":"Path 5","mn":"ADBE Vector Shape - Group","hd":false},{"ind":2,"ty":"sh","ix":3,"ks":{"a":1,"k":[{"t":16,"s":[{"i":[[0,0],[-0.077,0.112],[-0.288,0.098],[-0.595,0.068],[0,0],[0.906,-0.189],[0.176,-0.026]],"o":[[0,0],[0.077,-0.112],[0.288,-0.098],[0.595,-0.068],[0,0],[-0.195,0.041],[-0.397,0.058]],"v":[[-226.818,-14.954],[-227.221,-15],[-226.741,-15.332],[-225.82,-15.569],[-225.052,-15.616],[-225.551,-15.132],[-226.116,-15.034]],"c":true}],"h":1},{"t":21,"s":[{"i":[[0,0],[-0.5,-5.75],[-1.875,-5],[-3.875,-3.5],[0,0],[5.902,9.659],[1.147,1.306]],"o":[[0,0],[0.5,5.75],[1.875,5],[3.875,3.5],[0,0],[-1.267,-2.073],[-2.588,-2.946]],"v":[[-71.297,-1.514],[-73.922,0.861],[-70.797,17.861],[-64.797,29.986],[-59.797,32.361],[-63.047,7.611],[-66.729,2.572]],"c":true}],"h":1},{"t":25,"s":[{"i":[[0,0],[-0.5,-5.75],[-1.875,-5],[-3.875,-3.5],[0,0],[5.902,9.658],[1.147,1.306]],"o":[[0,0],[0.5,5.75],[1.875,5],[3.875,3.5],[0,0],[-1.267,-2.073],[-2.588,-2.946]],"v":[[-240.797,-94.514],[-243.422,-92.139],[-240.297,-75.139],[-234.297,-63.014],[-229.297,-60.639],[-232.547,-85.389],[-236.229,-90.428]],"c":true}],"h":1},{"t":29,"s":[{"i":[[1.083,-0.288],[-1.2,-8.274],[1,-8.21],[5.113,-5.039],[-0.891,-1.763],[-11.942,10.616],[2.54,14.908]],"o":[[-1.555,0.413],[0.689,4.753],[-1.003,8.235],[-5.798,5.715],[0.891,1.763],[4.603,-4.092],[-3.007,-17.649]],"v":[[15.113,-6.757],[14.358,12.728],[11.453,34.072],[0.943,51.301],[-13.367,59.457],[28.573,60.334],[38.413,27.704]],"c":true}],"h":1}],"ix":2},"nm":"Path 3","mn":"ADBE Vector Shape - Group","hd":false},{"ind":3,"ty":"sh","ix":4,"ks":{"a":1,"k":[{"t":0,"s":[{"i":[[2.876,-2.468],[4.32,-1.196],[7.92,7.92],[-2.289,10.729],[1.499,9.249],[0.094,2.475],[-0.086,1.46],[-0.213,1.336],[-0.192,0.845],[-0.392,1.208],[-0.326,0.835],[-1.418,-2.375],[-1.242,-1.613],[-0.986,-1.058],[-1.986,-1.756],[-1.659,-1.478],[-1.09,-1.079],[-1.894,-4.494],[-0.279,-0.896],[-0.217,-1.131],[-0.028,-0.106],[-0.05,-0.229],[-0.058,-0.388],[-0.035,-0.347],[-0.024,-0.671],[0.993,-3.609],[1.163,-2.266]],"o":[[-3.356,2.88],[-13.437,4.796],[14.279,-3.367],[2.049,-9.604],[-0.431,-2.657],[-0.057,-1.495],[0.079,-1.345],[0.135,-0.843],[0.27,-1.192],[0.267,-0.822],[1.274,2.548],[1.122,1.879],[0.901,1.17],[1.844,1.98],[1.692,1.496],[1.158,1.032],[3.284,3.248],[0.35,0.829],[0.321,1.031],[0.03,0.106],[0.06,0.229],[0.083,0.385],[0.051,0.342],[0.065,0.642],[0.129,3.573],[-0.68,2.473],[-1.813,3.532]],"v":[[27.776,64.863],[14.572,72.063],[-20.222,62.226],[5.09,37.624],[1.734,10.861],[0.928,3.191],[0.968,-1.236],[1.404,-5.252],[1.893,-7.782],[2.884,-11.378],[3.772,-13.863],[7.797,-6.409],[11.338,-1.135],[14.175,2.199],[19.971,7.749],[25.027,12.177],[28.411,15.331],[36.469,26.635],[37.413,29.221],[38.222,32.462],[38.308,32.779],[38.472,33.467],[38.684,34.626],[38.813,35.658],[38.942,37.624],[37.618,48.537],[34.843,55.691]],"c":true}],"h":1},{"t":4,"s":[{"i":[[1.749,-2.028],[5.503,-0.827],[9.099,1.498],[0.974,10.927],[2.782,8.947],[0.586,2.966],[0.246,1.826],[0.116,1.643],[0.024,1],[-0.077,1.298],[-0.108,0.814],[-1.521,-3.381],[-1.457,-1.423],[-1.079,-1.055],[-2.002,-2.027],[-1.607,-1.739],[-1.042,-1.21],[-2.179,-3.307],[-0.345,-0.604],[-0.316,-0.684],[-0.035,-0.063],[-0.068,-0.138],[-0.097,-0.237],[-0.074,-0.215],[-0.111,-0.422],[-0.102,-2.446],[0.305,-1.622]],"o":[[-2.042,2.367],[-5.503,0.827],[6.455,-5.576],[-0.835,-9.363],[-0.799,-2.57],[-0.354,-1.792],[-0.227,-1.682],[-0.073,-1.036],[-0.033,-1.41],[0.052,-0.884],[1.099,5.046],[1.203,2.675],[1.056,1.032],[2.018,1.974],[1.705,1.727],[1.122,1.214],[3.138,3.645],[0.402,0.61],[0.397,0.694],[0.037,0.062],[0.076,0.136],[0.114,0.231],[0.085,0.209],[0.137,0.398],[0.592,2.25],[0.07,1.676],[-0.475,2.528]],"v":[[31.811,49.14],[19.353,55.775],[-2.449,56.074],[13.266,33.795],[4.86,8.209],[2.755,-0.191],[1.849,-5.638],[1.33,-10.641],[1.184,-13.699],[1.246,-17.773],[1.485,-20.324],[5.419,-7.59],[9.41,-1.397],[12.618,1.735],[18.68,7.747],[23.667,12.951],[26.92,16.59],[30.79,23.029],[31.912,24.85],[32.983,26.918],[33.09,27.106],[33.305,27.516],[33.621,28.219],[33.859,28.854],[34.227,30.083],[35.359,37.218],[35.036,42.194]],"c":true}],"h":1},{"t":8,"s":[{"i":[[0.748,-0.905],[4.468,-1.427],[1.404,-0.338],[1.108,10.686],[4.007,8.469],[1.014,3.986],[0.432,2.494],[0.214,2.18],[0.053,1.27],[-0.108,1.472],[-0.166,0.805],[-2.17,-4.293],[-2.289,-2.609],[-0.92,-1.07],[-1.519,-1.894],[-1.136,-1.565],[-0.712,-1.081],[-1.344,-3.314],[-0.219,-0.618],[-0.212,-0.723],[-0.025,-0.067],[-0.047,-0.146],[-0.061,-0.249],[-0.042,-0.223],[-0.048,-0.434],[0.434,-2.197],[0.467,-1.263]],"o":[[-1.991,2.409],[-3.503,1.119],[2.068,-3.392],[-1.013,-9.768],[-1.373,-2.902],[-0.613,-2.408],[-0.398,-2.297],[-0.135,-1.375],[-0.074,-1.791],[0.073,-1.002],[0.737,5.111],[1.717,3.396],[0.974,1.11],[1.72,2.001],[1.293,1.613],[0.793,1.093],[2.144,3.255],[0.248,0.611],[0.252,0.711],[0.027,0.067],[0.055,0.146],[0.079,0.245],[0.054,0.219],[0.077,0.413],[0.257,2.312],[-0.298,1.505],[-0.728,1.968]],"v":[[24.677,39.955],[16.33,47.362],[7.914,48.813],[11.957,28.631],[2.944,3.308],[-0.68,-7.288],[-2.256,-14.698],[-3.182,-21.459],[-3.465,-25.439],[-3.42,-30.366],[-3.063,-33.086],[1.442,-18.857],[7.523,-9.788],[10.364,-6.521],[15.227,-0.69],[18.873,4.071],[21.132,7.329],[26.389,17.12],[27.089,18.964],[27.785,21.115],[27.863,21.316],[28.017,21.754],[28.226,22.495],[28.369,23.159],[28.554,24.428],[28.19,31.31],[27.011,35.5]],"c":true}],"h":1},{"t":12,"s":[{"i":[[0.67,-0.432],[1.626,0.109],[1.975,1.349],[1.979,2.598],[1.309,2.769],[0.805,2.485],[0.504,2.02],[0.106,1.975],[-0.234,2.284],[-0.907,3.533],[0,0],[-0.839,-6.275],[-1.011,-4.1],[-0.658,-1.188],[-1.301,-1.702],[-1.394,-1.037],[-1.096,-0.657],[-0.897,-0.713],[-0.207,-0.164],[-0.123,-0.116],[-0.089,-0.108],[-0.145,-0.205],[-0.213,-0.437],[-0.276,-0.521],[-0.238,-0.832],[0.025,-1.261],[0.212,-0.672]],"o":[[-1.369,0.884],[-2.386,-0.159],[-2.697,-1.842],[-1.856,-2.436],[-1.116,-2.362],[-0.642,-1.981],[-0.478,-1.919],[-0.123,-2.293],[0.372,-3.629],[0.9,-3.505],[0,0],[0.56,4.186],[0.325,1.318],[1.037,1.874],[1.055,1.38],[1.026,0.763],[0.983,0.589],[0.206,0.164],[0.133,0.105],[0.102,0.096],[0.159,0.195],[0.281,0.397],[0.258,0.53],[0.405,0.765],[0.347,1.213],[-0.014,0.705],[-0.24,0.76]],"v":[[22.866,17.805],[18.213,19.302],[11.403,17.039],[4.59,9.999],[-0.016,2.049],[-2.656,-5.331],[-4.356,-11.343],[-5.6,-17.143],[-6.786,-24.008],[-5.906,-34.88],[1.459,-48.426],[0.293,-26.147],[4.525,-13.573],[6.158,-9.842],[9.596,-4.414],[13.192,-0.641],[16.712,0.882],[19.37,3.063],[20.021,3.513],[20.386,3.867],[20.697,4.15],[21.126,4.771],[21.978,5.955],[22.521,7.638],[24.001,9.772],[24.21,13.55],[23.885,15.641]],"c":true}],"h":1},{"t":16,"s":[{"i":[[0.527,-0.274],[2.393,0.207],[0.731,0.116],[-1.494,5.161],[0.303,4.698],[-0.272,2.042],[-0.266,1.238],[-0.311,1.051],[-0.215,0.598],[-0.33,0.661],[-0.231,0.34],[-0.219,-2.408],[-0.595,-1.652],[-0.235,-0.674],[-0.364,-1.172],[-0.244,-0.945],[-0.134,-0.639],[-0.012,-1.795],[0.013,-0.329],[0.036,-0.376],[0.001,-0.036],[0.005,-0.077],[0.018,-0.127],[0.022,-0.111],[0.059,-0.21],[0.622,-0.932],[0.461,-0.494]],"o":[[-1.402,0.728],[-1.876,-0.163],[1.624,-1.168],[1.366,-4.718],[-0.104,-1.61],[0.164,-1.233],[0.245,-1.14],[0.196,-0.663],[0.304,-0.843],[0.224,-0.45],[-0.616,2.509],[0.174,1.905],[0.253,0.703],[0.439,1.26],[0.31,0.998],[0.17,0.66],[0.403,1.923],[0.002,0.331],[-0.015,0.378],[0,0.036],[-0.001,0.078],[-0.009,0.129],[-0.016,0.112],[-0.041,0.206],[-0.315,1.12],[-0.426,0.639],[-0.718,0.77]],"v":[[9.16,-27.421],[3.793,-25.614],[-0.481,-26.577],[5.257,-35.132],[5.762,-48.603],[6.044,-54.211],[6.696,-57.947],[7.535,-61.255],[8.153,-63.152],[9.106,-65.424],[9.79,-66.614],[9.24,-59.153],[10.415,-53.775],[11.147,-51.711],[12.356,-48.068],[13.188,-45.157],[13.645,-43.21],[14.292,-37.658],[14.276,-36.668],[14.2,-35.538],[14.2,-35.429],[14.19,-35.197],[14.149,-34.813],[14.091,-34.478],[13.939,-33.855],[12.465,-30.74],[11.112,-29.03]],"c":true}],"h":1},{"t":21,"s":[{"i":[[-2.296,4.176],[-2.106,-8.919],[0.167,-5.943],[0.42,-7.176],[5.92,-3.427],[6.79,-0.416],[5.671,1.632],[6.809,3.878],[3.378,5.068],[2.862,6.947],[0.003,0.009],[-0.073,2.675],[-0.848,0.078],[-0.278,-0.128],[-0.72,-0.594],[-0.655,-0.625],[-0.438,-0.443],[-0.551,-0.611],[-0.058,-0.065],[0,0],[-0.085,-0.096],[-0.522,-0.576],[-1.502,-1.59],[-1.513,-1.505],[-2.108,-1.422],[-12.182,8.776],[-2.56,14.584]],"o":[[2.296,-4.176],[1.671,7.075],[-0.252,8.969],[-0.414,7.064],[-3.625,2.098],[-4.102,0.251],[-5.223,-1.503],[-4.896,-2.789],[-4.764,-7.148],[-3.707,-8.997],[0.025,0.029],[0.058,-2.116],[0.187,-0.017],[0.521,0.24],[0.614,0.506],[0.457,0.437],[1.319,1.334],[0.102,0.113],[0.066,0.074],[0,0],[0.185,0.207],[0.876,0.966],[1.322,1.399],[2.8,2.784],[2.243,1.513],[5.872,-4.23],[1.543,-8.791]],"v":[[24.032,37.662],[31.282,37.537],[33.032,55.287],[30.032,82.038],[20.533,109.288],[5.265,114.143],[-9.316,112.311],[-27.303,104.427],[-39.597,92.148],[-50.71,69.62],[-57.217,54.285],[-57.409,48.654],[-56.218,44.539],[-55.514,44.713],[-53.613,46.015],[-51.687,47.742],[-50.336,49.072],[-47.31,52.281],[-47.07,52.549],[-46.968,52.663],[-46.838,52.809],[-45.756,54.012],[-42.088,57.975],[-37.767,62.419],[-29.968,69.287],[-0.413,76.097],[14.534,56.028]],"c":true}],"h":1},{"t":25,"s":[{"i":[[-4.162,2.32],[-2.106,-8.919],[-0.205,-5.942],[3.42,-4.051],[5.92,-3.427],[14.626,0.921],[6.806,0.866],[3.468,3.377],[4.375,3.874],[5.791,7.688],[3.696,13.328],[-1.733,10.148],[-2.257,-0.429],[-11.651,-7.647],[-11.387,-0.069],[-5.942,4.774],[-4.636,5.552],[-2.337,6.658],[1.064,5.858],[4.171,7.199],[-1.281,-5.803],[1.833,-5.888],[0,0],[1.239,-7.664],[11.296,-4.551],[-14.984,-0.955],[-0.993,14.774]],"o":[[5.921,-3.301],[1.671,7.075],[0.42,12.2],[-4.565,5.407],[-4.495,2.602],[-4.457,-0.281],[-4.977,-0.633],[-4.072,-3.966],[-4.995,-4.424],[-4.337,-5.758],[-3.395,-12.24],[1.371,-8.028],[3.67,0.698],[11.244,7.381],[4.005,0.024],[5.584,-4.487],[5.135,-6.149],[1.951,-5.557],[-0.767,-4.222],[12.671,0.949],[1.504,6.815],[-2.757,8.856],[0,0],[-5.261,22.086],[2.046,3.574],[6.116,0.39],[0.918,-13.666]],"v":[[39.032,9.162],[53.907,32.662],[59.657,59.162],[46.657,88.913],[20.408,105.788],[-4.048,111.44],[-21.604,109.121],[-32.928,102.427],[-44.476,91.14],[-61.335,75.494],[-78.842,40.66],[-80.298,3.891],[-74.343,-9.086],[-60.772,8.384],[-36.036,16.431],[-14.882,9.473],[-2.37,-2.302],[8.415,-21.921],[8.264,-37.372],[-0.468,-56.337],[27.449,-41.203],[31.87,-20],[24.695,0.009],[18.964,22.276],[-16.843,57.162],[8.337,68.972],[35.659,45.653]],"c":true}],"h":1},{"t":29,"s":[{"i":[[-1.513,-2.67],[-2.878,-8.701],[0.262,-5.939],[3.42,-4.051],[5.92,-3.427],[14.626,0.921],[5.681,1.991],[4.125,2.333],[4.634,2.667],[7.788,8.242],[2.967,13.509],[-1.776,13.285],[-5.58,2.573],[-5.408,-12.698],[-12.521,3.553],[-2.666,7.076],[1.26,9.289],[-5.837,10.158],[-0.247,7.983],[-2.826,1.061],[-4.371,-7.435],[0,0],[-4.23,-5.402],[-2.44,-2.852],[-2.679,-3.535],[-1.125,-1.465],[-1.305,-1.643]],"o":[[2.734,4.824],[2.671,8.075],[-0.829,18.825],[-4.565,5.407],[-4.495,2.602],[-4.458,-0.281],[-4.735,-1.659],[-6.745,-3.815],[-5.696,-3.278],[-4.951,-5.24],[-2.262,-10.3],[1.585,-11.857],[3.393,-1.564],[2.599,6.103],[8.613,-2.444],[1.13,-3],[-1.326,-9.776],[-0.213,-4.717],[0.368,-11.871],[6.796,-2.551],[5.064,8.615],[0,0],[2.314,2.955],[2.884,3.37],[1.115,1.472],[1.277,1.664],[1.908,2.403]],"v":[[70.719,7.412],[78.782,24.662],[82.157,50.787],[58.782,88.663],[32.408,107.663],[0.952,110.94],[-17.229,105.996],[-32.553,99.052],[-47.226,91.39],[-62.96,78.245],[-77.342,49.285],[-78.633,17.719],[-68.218,-4.711],[-52.397,22.259],[-27.161,30.306],[-11.382,15.786],[-15.557,-8.927],[-18.835,-38.796],[-14.915,-61.142],[-10.593,-88.837],[11.823,-62.203],[30.12,-44.75],[42.07,-27.991],[49.714,-19.724],[58.032,-9.338],[61.087,-4.716],[65.222,0.028]],"c":true}],"h":1}],"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":4,"ty":"sh","ix":5,"ks":{"a":1,"k":[{"t":0,"s":[{"i":[[0,0],[3.124,3.159],[7.702,7.651],[2.821,7.627],[-7.678,15.175],[8.521,-6.943],[-15.171,-38.138],[0,-1.585],[2.369,-1.052],[2.282,1.956],[0.432,0.787],[1.109,11.354],[-2.909,7.106],[1.674,-1.665],[-1.409,-23.995],[-2.049,-6.081],[-3.6,-6.452],[-24.111,-3.082],[-19.63,18.08],[11.288,27.765],[0,0]],"o":[[-2.758,-3.653],[-8.042,-7.307],[-5.839,-5.8],[-5.822,-15.742],[-11.398,2.799],[-31.083,25.326],[0.487,1.225],[0,2.675],[-2.758,1.225],[-0.676,-0.573],[-7.468,-9.59],[-0.904,-9.26],[-0.477,-3.681],[-16.59,16.508],[0.72,6.093],[1.673,7.307],[12.96,21.065],[25.677,3.282],[21.955,-20.222],[0,0],[-2.526,-5.598]],"v":[[65.694,-9.286],[56.455,-19.268],[31.62,-39.491],[18.606,-59.95],[21.174,-109.139],[-8.701,-93.064],[-37.391,15.308],[-36.428,19.333],[-39.126,24.414],[-46.046,21.953],[-47.73,19.884],[-60.422,-12.911],[-57.321,-38.207],[-62.588,-38.68],[-86.231,30.528],[-82.741,48.795],[-74.223,69.871],[-14.705,109.079],[58.139,89.599],[76.494,9.227],[74.943,6.057]],"c":true}],"h":1},{"t":4,"s":[{"i":[[0,0],[3.124,3.113],[4.272,10.06],[-0.813,9.154],[-12.527,18.188],[8.521,-6.842],[-4.781,-44.511],[0,-1.562],[1.011,-0.228],[2.282,1.927],[0.432,0.775],[0.415,15.459],[-4.1,8.837],[1.736,-1.846],[-1.408,-23.638],[-4.556,-6.885],[-5.199,-4.905],[-29.092,-3.417],[-19.232,18.246],[11.288,27.361],[0,0]],"o":[[-2.758,-3.6],[-8.042,-7.2],[-4.297,-10.12],[1.678,-18.896],[-11.398,2.758],[-31.083,24.957],[0.139,1.295],[0,2.636],[-1.797,0.405],[-0.676,-0.565],[-6.371,-4.746],[-0.338,-12.608],[-1.843,1.5],[-17.148,18.232],[0.72,6.004],[3.069,7.115],[24.801,17.095],[25.703,3.019],[21.314,-20.221],[0,0],[-2.526,-5.516]],"v":[[58.194,-7.614],[43.955,-20.701],[27.995,-43.504],[23.187,-72.286],[48.174,-126.764],[-1.201,-96.173],[-35.391,-1.877],[-34.99,4.151],[-37.813,10.144],[-44.734,8.641],[-47.98,5.853],[-58.356,-28.966],[-52.821,-63.582],[-58.194,-58.549],[-85.481,17.121],[-79.491,45.997],[-64.973,66.517],[-8.83,107.904],[57.389,88.707],[71.994,11.755],[64.943,0.381]],"c":true}],"h":1},{"t":8,"s":[{"i":[[2.168,4.936],[10.247,-2.813],[4.272,10.06],[-0.085,9.94],[1.847,1.125],[6.725,-8.614],[1.913,-28.866],[0,-1],[0.647,-0.146],[1.461,1.234],[0.277,0.496],[-0.861,16.839],[-1.506,5.758],[1.528,-1.926],[-1.423,-31.337],[-4.556,-6.885],[-7.324,-3.655],[-29.092,-3.417],[-19.232,18.246],[4.084,18.857],[0,0]],"o":[[-2.866,-6.524],[-9.35,2.566],[-4.297,-10.12],[0.234,-27.384],[-1.847,-1.125],[-21.596,27.66],[-0.055,0.832],[0,1.687],[-1.15,0.26],[-0.433,-0.362],[-4.078,-3.038],[0.703,-13.733],[-1.549,1.431],[-15.089,19.029],[0.72,6.004],[3.069,7.115],[30.301,14.345],[25.703,3.019],[21.314,-20.221],[0,0],[-2.526,-5.516]],"v":[[61.819,-12.614],[45.955,-24.326],[20.495,-46.129],[15.218,-76.254],[38.799,-134.764],[-4.451,-99.298],[-37.961,-17.773],[-37.704,-13.914],[-39.511,-10.079],[-44.565,-10.415],[-47.768,-13.575],[-51.566,-50.492],[-47.696,-83.582],[-52.318,-78.528],[-79.356,13.371],[-73.491,43.122],[-54.973,64.767],[1.67,99.279],[59.264,82.957],[73.744,14.005],[68.943,2.631]],"c":true}],"h":1},{"t":12,"s":[{"i":[[1.816,7.187],[6.117,-0.273],[9.022,6.169],[-0.262,13.554],[-3.602,21.472],[0.654,-19.59],[2.446,-55.7],[0.162,-0.987],[1.566,-0.627],[1.796,1.078],[-2.376,4.599],[6.123,10.87],[-1.533,9.959],[1.556,-1.891],[-6.95,-15.544],[-4.556,-6.885],[-8.426,-10.845],[-18.717,-3.042],[-2.959,2.934],[0.834,18.107],[0,0]],"o":[[-1.491,-5.899],[-7.003,0.312],[-10.743,-7.346],[0.54,-27.977],[-11.398,2.758],[-1.179,35.332],[-0.198,4.51],[-0.274,1.665],[-1.251,0.501],[-1.796,-1.078],[2.451,-4.746],[-3.737,-6.634],[-1.906,1.594],[-15.77,19.162],[3.183,6.74],[3.069,7.115],[8.426,10.845],[25.545,4.152],[11.064,-10.971],[0,0],[-0.115,-5.52]],"v":[[61.444,-21.239],[47.83,-59.576],[33.12,-37.129],[19.076,-69.741],[40.049,-155.014],[-2.451,-107.548],[-29.244,-24.188],[-32.491,-15.089],[-35.896,-11.347],[-40.673,-12.545],[-41.83,-23.059],[-41.303,-53.741],[-45.094,-77.537],[-51.968,-71.748],[-53.481,4.371],[-38.866,24.122],[-26.598,52.892],[7.92,69.529],[48.014,60.457],[63.869,14.005],[63.818,-0.869]],"c":true}],"h":1},{"t":16,"s":[{"i":[[0.509,10.476],[6.073,-0.78],[6.833,2.865],[-3.61,12.732],[1.921,12.157],[6.436,-8.832],[10.572,-23.825],[3.671,-5.725],[0.18,-0.639],[1.248,-2.247],[1.605,-0.842],[1.405,-1.028],[0.189,-1.308],[-1.216,-1.81],[-3.429,-2.556],[-4.194,-2.24],[-3.576,-1.627],[-7.138,2.451],[-4.186,7.404],[-1.666,13.232],[0,0]],"o":[[-0.295,-6.078],[-4.378,0.562],[-5.012,-2.102],[5.108,-18.012],[-11.398,2.758],[-13.596,18.66],[-1.831,4.126],[-1.915,2.986],[-0.902,3.208],[-0.88,1.584],[-1.542,0.809],[-1.066,0.781],[-0.313,2.158],[2.386,3.55],[4.927,3.673],[4.194,2.24],[8.176,3.72],[11.408,-3.917],[7.668,-13.563],[0,0],[-0.115,-5.52]],"v":[[47.694,-65.864],[42.58,-95.701],[23.62,-76.629],[22.53,-103.187],[35.924,-154.889],[1.299,-129.798],[-10.369,-66.313],[-22.741,-50.089],[-27.021,-40.347],[-28.986,-32.889],[-33.122,-29.362],[-38.181,-28.065],[-40.946,-24.082],[-39.652,-17.916],[-29.856,-9.629],[-14.616,0.747],[-0.473,9.892],[23.67,10.404],[36.639,-10.543],[47.369,-38.12],[48.568,-48.244]],"c":true}],"h":1},{"t":21,"s":[{"i":[[2.371,10.217],[6.073,-0.78],[6.769,3.013],[-1.075,5.676],[-5.075,8.715],[6.689,-8.642],[0.697,-13.45],[3.516,-6.8],[1.051,-4.301],[0.006,-2.318],[-0.393,-2.275],[-0.4,-0.929],[-0.302,-0.596],[-0.078,-0.091],[-0.925,-1.138],[-2.014,-2.187],[-3.015,-0.109],[-2.551,2.033],[-2.779,3.152],[-3.023,4.635],[-1.138,4.517]],"o":[[-2.616,-11.274],[-4.378,0.562],[-2.298,-1.023],[2.22,-11.717],[-11.398,2.758],[-17.346,22.41],[-0.233,4.508],[-2.034,3.933],[-0.55,2.252],[-0.006,2.309],[0.172,0.996],[0.264,0.614],[0.054,0.106],[0.954,1.114],[1.876,2.307],[2.043,2.219],[3.26,0.118],[3.286,-2.619],[3.66,-4.151],[2.544,-3.902],[2.077,-8.24]],"v":[[33.819,-77.364],[30.955,-106.076],[19.37,-102.504],[17.977,-113.427],[32.799,-151.764],[-1.451,-127.923],[-3.494,-79.688],[-15.866,-60.339],[-20.021,-47.722],[-20.642,-40.795],[-20.059,-33.893],[-18.96,-31.065],[-18.071,-29.269],[-17.893,-28.959],[-14.981,-25.66],[-9.491,-18.628],[-2.848,-12.483],[5.17,-18.096],[14.639,-26.418],[24.369,-39.87],[31.318,-51.994]],"c":true}],"h":1},{"t":25,"s":[{"i":[[-2.257,5.285],[5.918,-0.734],[3.004,1.754],[-1.377,3.609],[0.576,6.935],[4.02,-8.943],[1.789,-6.925],[0.416,-4.857],[-0.067,-2.387],[-0.176,-1.654],[-0.382,-2.038],[-0.164,-0.617],[-0.099,-0.382],[-0.029,-0.127],[-0.409,-1.122],[-0.756,-0.968],[-1.036,-0.275],[-0.919,1.155],[-1.255,3.733],[-0.962,2.804],[-1.16,1.928]],"o":[[2.465,-5.772],[-4.266,0.529],[-1.081,-0.631],[3.458,-9.06],[-3.749,-0.294],[-3.687,8.202],[-1.221,4.729],[-0.204,2.38],[0.047,1.662],[0.219,2.06],[0.117,0.627],[0.101,0.382],[0.033,0.127],[0.269,1.161],[0.416,1.144],[0.646,0.828],[1.455,0.386],[2.477,-3.114],[0.945,-2.809],[0.726,-2.116],[2.975,-4.943]],"v":[[33.138,-114.995],[37.534,-133.238],[27.402,-129.702],[26.034,-136.99],[28.672,-163.095],[11.496,-139.911],[4.511,-119.59],[2.504,-105.097],[2.657,-97.934],[2.844,-92.948],[3.838,-86.81],[4.34,-84.962],[4.634,-83.814],[4.736,-83.435],[5.529,-79.95],[7.193,-76.688],[9.647,-74.671],[14.172,-74.835],[18.527,-85.835],[20.761,-94.43],[23.575,-100.541]],"c":true}],"h":1},{"t":29,"s":[{"i":[[-0.416,0.768],[-0.073,0.895],[0.098,1.532],[0.021,0.418],[1.65,-0.78],[2.022,-2.828],[0.684,-2.136],[-0.036,-0.878],[-0.075,-0.4],[-0.077,-0.309],[-0.093,-0.316],[-0.059,-0.115],[-0.06,-0.088],[-0.025,-0.017],[-0.273,-0.071],[-0.418,0.043],[-0.326,0.22],[-0.336,0.422],[-0.3,0.448],[-0.315,0.543],[-0.335,0.495]],"o":[[0.436,-0.805],[0.123,-1.504],[-0.027,-0.418],[-0.075,-1.465],[-3.794,1.794],[-1.368,1.913],[-0.264,0.824],[0.016,0.395],[0.058,0.309],[0.079,0.316],[0.034,0.117],[0.046,0.09],[0.014,0.021],[0.212,0.144],[0.434,0.113],[0.488,-0.051],[0.497,-0.336],[0.342,-0.43],[0.354,-0.529],[0.295,-0.51],[0.499,-0.738]],"v":[[47.758,-189.77],[48.631,-192.317],[48.342,-196.913],[48.256,-198.168],[48.053,-202.562],[40.748,-194.619],[37.945,-188.421],[37.927,-185.801],[38.101,-184.604],[38.327,-183.677],[38.569,-182.729],[38.711,-182.38],[38.883,-182.115],[38.934,-182.055],[39.59,-181.637],[40.914,-181.539],[42.229,-181.911],[43.298,-183.149],[44.262,-184.467],[45.261,-186.077],[46.091,-187.626]],"c":true}],"h":1}],"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0.941176470588,0.705882352941,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[8.175,10.103],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":7,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":2055,"st":0,"ct":1,"bm":0}],"markers":[{"tm":24,"cm":"1","dr":0}],"props":{}}'
        ),
        m = JSON.parse(
          '{"v":"5.12.1","fr":30,"ip":0,"op":58,"w":562,"h":544,"nm":"Comp 2","ddd":0,"assets":[{"id":"comp_0","nm":"Pre-comp 1","fr":30,"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Vector 4295","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[730.365,547.874,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-39.548,44.103],[26.548,-66.853]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":1,"k":[{"i":{"x":[0.728],"y":[0.018]},"o":{"x":[1],"y":[0]},"t":18,"s":[5]},{"t":39,"s":[0]}],"ix":5},"lc":2,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Vector 4295","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0],"y":[0.841]},"o":{"x":[0.093],"y":[0.855]},"t":10,"s":[0]},{"t":52,"s":[100]}],"ix":1},"e":{"a":1,"k":[{"i":{"x":[0],"y":[0.841]},"o":{"x":[0.093],"y":[0.855]},"t":7,"s":[0]},{"t":49,"s":[100]}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":0,"op":658,"st":0,"ct":1,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"Vector 4296","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[764.663,638.422,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-8.469,17.616],[88.719,-23.616]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":1,"k":[{"i":{"x":[0.728],"y":[0.018]},"o":{"x":[1],"y":[0]},"t":18,"s":[5]},{"t":39,"s":[0]}],"ix":5},"lc":2,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Vector 4296","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0],"y":[0.841]},"o":{"x":[0.093],"y":[0.855]},"t":10,"s":[0]},{"t":52,"s":[100]}],"ix":1},"e":{"a":1,"k":[{"i":{"x":[0],"y":[0.841]},"o":{"x":[0.093],"y":[0.855]},"t":7,"s":[0]},{"t":49,"s":[100]}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":0,"op":658,"st":0,"ct":1,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"Vector 4294","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[803.273,547.875,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-89.11,71.502],[63.86,-67.252]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":1,"k":[{"i":{"x":[0.728],"y":[0.018]},"o":{"x":[1],"y":[0]},"t":18,"s":[5]},{"t":39,"s":[0]}],"ix":5},"lc":2,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Vector 4294","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0],"y":[0.841]},"o":{"x":[0.093],"y":[0.855]},"t":10,"s":[0]},{"t":52,"s":[100]}],"ix":1},"e":{"a":1,"k":[{"i":{"x":[0],"y":[0.841]},"o":{"x":[0.093],"y":[0.855]},"t":7,"s":[0]},{"t":49,"s":[100]}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":0,"op":658,"st":0,"ct":1,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"Vector 4293","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[816.403,600.4,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-80.457,37.61],[71.457,-59.11]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":1,"k":[{"i":{"x":[0.728],"y":[0.018]},"o":{"x":[1],"y":[0]},"t":18,"s":[5]},{"t":39,"s":[0]}],"ix":5},"lc":2,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Vector 4293","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0],"y":[0.841]},"o":{"x":[0.093],"y":[0.855]},"t":10,"s":[0]},{"t":52,"s":[100]}],"ix":1},"e":{"a":1,"k":[{"i":{"x":[0],"y":[0.841]},"o":{"x":[0.093],"y":[0.855]},"t":7,"s":[0]},{"t":49,"s":[100]}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":0,"op":658,"st":0,"ct":1,"bm":0},{"ddd":0,"ind":5,"ty":4,"nm":"Rectangle 42197","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0,"y":0.811},"o":{"x":0.16,"y":1},"t":2,"s":[659.406,685.023,0],"to":[0,0,0],"ti":[0,0,0]},{"t":38,"s":[711.675,511.377,0]}],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.886,0.886,0.667],"y":[0.18,0.18,1]},"o":{"x":[1,1,0.333],"y":[0,0,0]},"t":17,"s":[100,100,100]},{"t":38,"s":[0,0,100]}],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.612,-0.612],[0,0],[0.612,-0.612],[0,0],[0.612,0.612],[0,0],[-0.612,0.612],[0,0]],"o":[[0,0],[0.612,0.612],[0,0],[-0.612,0.612],[0,0],[-0.612,-0.612],[0,0],[0.612,-0.612]],"v":[[1.109,-2.17],[2.17,-1.109],[2.17,1.109],[1.109,2.17],[-1.109,2.17],[-2.17,1.109],[-2.17,-1.109],[-1.109,-2.17]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.737254917622,0.749019622803,0.800000011921,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 42197","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":2,"op":660,"st":2,"ct":1,"bm":0},{"ddd":0,"ind":6,"ty":4,"nm":"Rectangle 42196","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0,"y":0.85},"o":{"x":0.202,"y":1},"t":0,"s":[659.406,685.023,0],"to":[0,0,0],"ti":[0,0,0]},{"t":36,"s":[826.345,529.008,0]}],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.886,0.886,0.667],"y":[0.18,0.18,1]},"o":{"x":[1,1,0.333],"y":[0,0,0]},"t":15,"s":[100,100,100]},{"t":36,"s":[0,0,100]}],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.612,-0.612],[0,0],[0.612,-0.612],[0,0],[0.612,0.612],[0,0],[-0.612,0.612],[0,0]],"o":[[0,0],[0.612,0.612],[0,0],[-0.612,0.612],[0,0],[-0.612,-0.612],[0,0],[0.612,-0.612]],"v":[[1.109,-2.17],[2.17,-1.109],[2.17,1.109],[1.109,2.17],[-1.109,2.17],[-2.17,1.109],[-2.17,-1.109],[-1.109,-2.17]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.737254917622,0.749019622803,0.800000011921,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 42196","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":658,"st":0,"ct":1,"bm":0},{"ddd":0,"ind":7,"ty":4,"nm":"Rectangle 42195","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":1,"s":[0]},{"t":37,"s":[132]}],"ix":10},"p":{"a":1,"k":[{"i":{"x":0,"y":0.794},"o":{"x":0.147,"y":1},"t":1,"s":[659.406,685.023,0],"to":[0,0,0],"ti":[0,0,0]},{"t":37,"s":[780.534,570.548,0]}],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.886,0.886,0.667],"y":[0.18,0.18,1]},"o":{"x":[1,1,0.333],"y":[0,0,0]},"t":16,"s":[100,100,100]},{"t":37,"s":[0,0,100]}],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.612,-0.612],[0,0],[0.612,-0.612],[0,0],[0.612,0.612],[0,0],[-0.612,0.612],[0,0]],"o":[[0,0],[0.612,0.612],[0,0],[-0.612,0.612],[0,0],[-0.612,-0.612],[0,0],[0.612,-0.612]],"v":[[1.109,-3.88],[3.88,-1.109],[3.88,1.109],[1.109,3.88],[-1.109,3.88],[-3.88,1.109],[-3.88,-1.109],[-1.109,-3.88]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0.941176474094,0.705882370472,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 42195","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":1,"op":659,"st":1,"ct":1,"bm":0},{"ddd":0,"ind":8,"ty":4,"nm":"Ellipse 28720","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0,"y":0.879},"o":{"x":0.251,"y":1},"t":3,"s":[659.406,685.023,0],"to":[0,0,0],"ti":[0,0,0]},{"t":39,"s":[899.999,534.127,0]}],"ix":2,"l":2},"a":{"a":0,"k":[105.499,-58.936,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.886,0.886,0.667],"y":[0.18,0.18,1]},"o":{"x":[1,1,0.333],"y":[0,0,0]},"t":18,"s":[100,100,100]},{"t":39,"s":[0,0,100]}],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[3.136,3.136],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0.941176474094,0.705882370472,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[105.499,-58.936],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 28720","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":3,"op":661,"st":3,"ct":1,"bm":0},{"ddd":0,"ind":9,"ty":4,"nm":"Ellipse 28719","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0,"y":0.871},"o":{"x":0.234,"y":1},"t":1,"s":[659.406,685.023,0],"to":[0,0,0],"ti":[0,0,0]},{"t":37,"s":[690.609,421.821,0]}],"ix":2,"l":2},"a":{"a":0,"k":[-14.445,-102.84,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.886,0.886,0.667],"y":[0.18,0.18,1]},"o":{"x":[1,1,0.333],"y":[0,0,0]},"t":16,"s":[100,100,100]},{"t":37,"s":[0,0,100]}],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[3.136,3.136],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0.941176474094,0.705882370472,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-14.445,-102.84],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 28719","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":1,"op":659,"st":1,"ct":1,"bm":0},{"ddd":0,"ind":10,"ty":4,"nm":"Ellipse 28718","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0,"y":0.88},"o":{"x":0.253,"y":1},"t":0,"s":[659.406,685.023,0],"to":[0,0,0],"ti":[0,0,0]},{"t":36,"s":[812.561,443.007,0]}],"ix":2,"l":2},"a":{"a":0,"k":[60.03,-112.247,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.886,0.886,0.667],"y":[0.18,0.18,1]},"o":{"x":[1,1,0.333],"y":[0,0,0]},"t":15,"s":[100,100,100]},{"t":36,"s":[0,0,100]}],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[6.272,6.272],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0.941176474094,0.705882370472,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[60.03,-112.247],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 28718","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":658,"st":0,"ct":1,"bm":0},{"ddd":0,"ind":11,"ty":4,"nm":"Ellipse 28721","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0,"y":0.783},"o":{"x":0.14,"y":1},"t":1,"s":[659.406,685.023,0],"to":[0,0,0],"ti":[0,0,0]},{"t":37,"s":[686.089,529.018,0]}],"ix":2,"l":2},"a":{"a":0,"k":[-17.58,-28.366,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.886,0.886,0.667],"y":[0.18,0.18,1]},"o":{"x":[1,1,0.333],"y":[0,0,0]},"t":16,"s":[100,100,100]},{"t":37,"s":[0,0,100]}],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[6.272,6.272],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0.941176474094,0.705882370472,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-17.58,-28.366],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 28721","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":1,"op":659,"st":1,"ct":1,"bm":0},{"ddd":0,"ind":12,"ty":4,"nm":"Ellipse 28717","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0,"y":0.838},"o":{"x":0.187,"y":1},"t":3,"s":[659.406,685.023,0],"to":[0,0,0],"ti":[0,0,0]},{"t":39,"s":[868.183,649.779,0]}],"ix":2,"l":2},"a":{"a":0,"k":[96.092,17.89,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.886,0.886,0.667],"y":[0.18,0.18,1]},"o":{"x":[1,1,0.333],"y":[0,0,0]},"t":18,"s":[100,100,100]},{"t":39,"s":[0,0,100]}],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[6.272,6.272],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0.941176474094,0.705882370472,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[96.092,17.89],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 28717","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":3,"op":661,"st":3,"ct":1,"bm":0}]},{"id":"comp_1","nm":"Pre-comp 2","fr":30,"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Intersect 3","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[679.864,660.716,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.32,"y":1},"o":{"x":0.167,"y":0.167},"t":0,"s":[{"i":[[0,0],[-15.556,-15.557],[-12.767,-7.895]],"o":[[7.896,12.767],[15.557,15.557],[0,0]],"v":[[-39.988,-39.987],[-3.94,3.94],[39.988,39.987]],"c":false}]},{"i":{"x":0,"y":1},"o":{"x":0.333,"y":0},"t":7,"s":[{"i":[[0,0],[-15.556,-15.557],[-12.767,-7.895]],"o":[[7.896,12.767],[15.557,15.557],[0,0]],"v":[[-36.573,-43.573],[-0.026,-0.646],[43.402,36.402]],"c":false}]},{"i":{"x":0.1,"y":1},"o":{"x":0.66,"y":0},"t":27,"s":[{"i":[[0,0],[-15.556,-15.557],[-16.454,-4.444]],"o":[[4.365,14.75],[15.557,15.557],[0,0]],"v":[[-46.968,-33.093],[-17.24,17.015],[33.007,46.882]],"c":false}]},{"t":50,"s":[{"i":[[0,0],[-15.556,-15.557],[-12.767,-7.895]],"o":[[7.896,12.767],[15.557,15.557],[0,0]],"v":[[-39.988,-39.987],[-3.94,3.94],[39.988,39.987]],"c":false}]}],"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"gs","o":{"a":0,"k":100,"ix":9},"w":{"a":0,"k":5,"ix":10},"g":{"p":3,"k":{"a":0,"k":[0,0.251,0.259,0.302,0.5,0.251,0.259,0.302,1,0.251,0.259,0.302,0,1,0.5,0.5,1,0],"ix":8}},"s":{"a":0,"k":[-2.797,3.033],"ix":4},"e":{"a":0,"k":[38.636,38.034],"ix":5},"t":2,"h":{"a":0,"k":0,"ix":6},"a":{"a":0,"k":0,"ix":7},"lc":1,"lj":1,"ml":4,"ml2":{"a":0,"k":4,"ix":13},"bm":0,"nm":"Gradient Stroke 1","mn":"ADBE Vector Graphic - G-Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Intersect 3","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":658,"st":0,"ct":1,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"Intersect 2","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[651.572,689.007,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.32,"y":1},"o":{"x":0.167,"y":0.167},"t":0,"s":[{"i":[[0,0],[-9.694,-9.694],[-9.033,-6.973]],"o":[[6.973,9.032],[9.694,9.694],[0,0]],"v":[[-26.825,-26.825],[-1.614,1.613],[26.825,26.825]],"c":false}]},{"i":{"x":0,"y":1},"o":{"x":0.333,"y":0},"t":7,"s":[{"i":[[0,0],[-9.694,-9.694],[-9.033,-6.973]],"o":[[6.973,9.032],[9.694,9.694],[0,0]],"v":[[-24.075,-29.825],[1.386,-1.887],[29.575,23.825]],"c":false}]},{"i":{"x":0.1,"y":1},"o":{"x":0.66,"y":0},"t":27,"s":[{"i":[[0,0],[-9.694,-9.694],[-10.797,-4.735]],"o":[[4.781,10.843],[9.694,9.694],[0,0]],"v":[[-31.632,-22.007],[-9.944,10.033],[22.018,31.643]],"c":false}]},{"t":50,"s":[{"i":[[0,0],[-9.694,-9.694],[-9.033,-6.973]],"o":[[6.973,9.032],[9.694,9.694],[0,0]],"v":[[-26.825,-26.825],[-1.614,1.613],[26.825,26.825]],"c":false}]}],"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"gs","o":{"a":0,"k":100,"ix":9},"w":{"a":0,"k":5,"ix":10},"g":{"p":3,"k":{"a":0,"k":[0,0.251,0.259,0.302,0.5,0.251,0.259,0.302,1,0.251,0.259,0.302,0,1,0.5,0.5,1,0],"ix":8}},"s":{"a":0,"k":[-1.408,0.981],"ix":4},"e":{"a":0,"k":[-25.197,-24.132],"ix":5},"t":2,"h":{"a":0,"k":0.685,"ix":6},"a":{"a":0,"k":135.856,"ix":7},"lc":1,"lj":1,"ml":4,"ml2":{"a":0,"k":4,"ix":13},"bm":0,"nm":"Gradient Stroke 1","mn":"ADBE Vector Graphic - G-Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Intersect 2","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":658,"st":0,"ct":1,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"Intersect","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[624.423,716.157,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.32,"y":1},"o":{"x":0.167,"y":0.167},"t":0,"s":[{"i":[[0,0],[-4.9,-4.9],[-4.819,-4.258]],"o":[[4.258,4.819],[4.9,4.9],[0,0]],"v":[[-14.194,-14.194],[-0.43,0.429],[14.194,14.194]],"c":false}]},{"i":{"x":0,"y":1},"o":{"x":0.333,"y":0},"t":7,"s":[{"i":[[0,0],[-4.9,-4.9],[-4.819,-4.258]],"o":[[4.258,4.819],[4.9,4.9],[0,0]],"v":[[-12.944,-15.069],[0.82,-0.446],[15.444,13.319]],"c":false}]},{"i":{"x":0.1,"y":1},"o":{"x":0.66,"y":0},"t":27,"s":[{"i":[[0,0],[-4.9,-4.9],[-6.094,-3.055]],"o":[[2.89,6.303],[4.9,4.9],[0,0]],"v":[[-14.584,-13.834],[-3.104,3.068],[13.805,14.555]],"c":false}]},{"t":50,"s":[{"i":[[0,0],[-4.9,-4.9],[-4.819,-4.258]],"o":[[4.258,4.819],[4.9,4.9],[0,0]],"v":[[-14.194,-14.194],[-0.43,0.429],[14.194,14.194]],"c":false}]}],"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"gs","o":{"a":0,"k":100,"ix":9},"w":{"a":0,"k":5,"ix":10},"g":{"p":3,"k":{"a":0,"k":[0,0.251,0.259,0.302,0.5,0.251,0.259,0.302,1,0.251,0.259,0.302,0,1,0.5,0.5,1,0],"ix":8}},"s":{"a":0,"k":[0.275,1.781],"ix":4},"e":{"a":0,"k":[-12.173,-11.282],"ix":5},"t":2,"h":{"a":0,"k":0,"ix":6},"a":{"a":0,"k":0,"ix":7},"lc":1,"lj":1,"ml":4,"ml2":{"a":0,"k":4,"ix":13},"bm":0,"nm":"Gradient Stroke 1","mn":"ADBE Vector Graphic - G-Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Intersect","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":658,"st":0,"ct":1,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"Shape Layer 1","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":45,"ix":10},"p":{"a":1,"k":[{"i":{"x":0,"y":1},"o":{"x":0.167,"y":0.167},"t":7,"s":[722.273,618.307,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.1,"y":1},"o":{"x":0.66,"y":0},"t":27,"s":[710.773,628.307,0],"to":[0,0,0],"ti":[0,0,0]},{"t":50,"s":[722.273,618.307,0]}],"ix":2,"l":2},"a":{"a":0,"k":[7.5,-9.5,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":1,"k":[{"i":{"x":[0.32,0.32],"y":[1,1]},"o":{"x":[0.167,0.167],"y":[0,0.167]},"t":0,"s":[167.5,37]},{"i":{"x":[0,0],"y":[1,1]},"o":{"x":[0.333,0.333],"y":[0,0]},"t":7,"s":[167.5,29.7]},{"i":{"x":[0.1,0.1],"y":[1,1]},"o":{"x":[0.66,0.66],"y":[0,0]},"t":27,"s":[167.5,59.5]},{"t":50,"s":[167.5,37]}],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"gs","o":{"a":0,"k":100,"ix":9},"w":{"a":0,"k":5,"ix":10},"g":{"p":3,"k":{"a":0,"k":[0,0.024,0.878,0.592,0.5,0.024,0.878,0.592,1,0.024,0.878,0.592,0,0,0.5,0.5,1,1],"ix":8}},"s":{"a":0,"k":[108.727,85.307],"ix":4},"e":{"a":0,"k":[-9.96,-25.473],"ix":5},"t":1,"lc":1,"lj":1,"ml":4,"ml2":{"a":0,"k":4,"ix":13},"bm":0,"nm":"Gradient Stroke 1","mn":"ADBE Vector Graphic - G-Stroke","hd":false},{"ty":"st","c":{"a":0,"k":[1,0,0,1],"ix":3},"o":{"a":0,"k":0,"ix":4},"w":{"a":0,"k":5,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[7.5,-9.5],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gf","o":{"a":0,"k":100,"ix":10},"r":1,"bm":0,"g":{"p":3,"k":{"a":0,"k":[0,0.251,0.259,0.302,0.5,0.125,0.129,0.151,1,0,0,0],"ix":9}},"s":{"a":0,"k":[-115,0],"ix":5},"e":{"a":0,"k":[100,0],"ix":6},"t":1,"nm":"Gradient Fill 1","mn":"ADBE Vector Graphic - G-Fill","hd":false}],"ip":0,"op":658,"st":0,"ct":1,"bm":0},{"ddd":0,"ind":5,"ty":4,"nm":"Layer 24","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[692.693,647.889,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0,"y":1},"o":{"x":0.167,"y":0.167},"t":7,"s":[{"i":[[-2.412,6.61],[0,0],[0,0],[0,0],[4.975,4.975]],"o":[[0,0],[0,0],[0,0],[-6.61,2.412],[-4.975,-4.975]],"v":[[-84.931,61.736],[-31.002,-86.028],[86.028,31.002],[-61.736,84.931],[-80.729,80.729]],"c":true}]},{"i":{"x":0.1,"y":1},"o":{"x":0.66,"y":0},"t":27,"s":[{"i":[[-2.412,6.61],[0,0],[0,0],[0,0],[4.975,4.975]],"o":[[0,0],[0,0],[0,0],[-6.61,2.412],[-4.975,-4.975]],"v":[[-84.931,61.736],[-41.113,-77.389],[74.432,38.156],[-61.736,84.931],[-80.729,80.729]],"c":true}]},{"t":50,"s":[{"i":[[-2.412,6.61],[0,0],[0,0],[0,0],[4.975,4.975]],"o":[[0,0],[0,0],[0,0],[-6.61,2.412],[-4.975,-4.975]],"v":[[-84.931,61.736],[-31.002,-86.028],[86.028,31.002],[-61.736,84.931],[-80.729,80.729]],"c":true}]}],"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"gs","o":{"a":0,"k":100,"ix":9},"w":{"a":0,"k":5,"ix":10},"g":{"p":3,"k":{"a":0,"k":[0,0.251,0.259,0.302,0.5,0.251,0.259,0.302,1,0.251,0.259,0.302,0,1,0.5,0.5,1,0],"ix":8}},"s":{"a":0,"k":[-71,75],"ix":4},"e":{"a":0,"k":[37.057,-44.639],"ix":5},"t":2,"h":{"a":0,"k":0,"ix":6},"a":{"a":0,"k":0,"ix":7},"lc":1,"lj":1,"ml":4,"ml2":{"a":0,"k":4,"ix":13},"bm":0,"nm":"Gradient Stroke 1","mn":"ADBE Vector Graphic - G-Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":658,"st":0,"ct":1,"bm":0},{"ddd":0,"ind":6,"ty":4,"nm":"Layer 25","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[692.693,647.889,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0,"y":1},"o":{"x":0.167,"y":0.167},"t":7,"s":[{"i":[[-2.412,6.61],[0,0],[0,0],[0,0],[4.975,4.975]],"o":[[0,0],[0,0],[0,0],[-6.61,2.412],[-4.975,-4.975]],"v":[[-84.931,61.736],[-31.002,-86.028],[86.028,31.002],[-61.736,84.931],[-80.729,80.729]],"c":true}]},{"i":{"x":0.1,"y":1},"o":{"x":0.66,"y":0},"t":27,"s":[{"i":[[-2.412,6.61],[0,0],[0,0],[0,0],[4.975,4.975]],"o":[[0,0],[0,0],[0,0],[-6.61,2.412],[-4.975,-4.975]],"v":[[-84.931,61.736],[-41.113,-77.389],[74.432,38.156],[-61.736,84.931],[-80.729,80.729]],"c":true}]},{"t":50,"s":[{"i":[[-2.412,6.61],[0,0],[0,0],[0,0],[4.975,4.975]],"o":[[0,0],[0,0],[0,0],[-6.61,2.412],[-4.975,-4.975]],"v":[[-84.931,61.736],[-31.002,-86.028],[86.028,31.002],[-61.736,84.931],[-80.729,80.729]],"c":true}]}],"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.0941176489,0.098039217293,0.101960785687,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":5,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":658,"st":0,"ct":1,"bm":0},{"ddd":0,"ind":7,"ty":4,"nm":"Layer 26","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[692.693,647.889,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0,"y":1},"o":{"x":0.167,"y":0.167},"t":7,"s":[{"i":[[-2.412,6.61],[0,0],[0,0],[0,0],[4.975,4.975]],"o":[[0,0],[0,0],[0,0],[-6.61,2.412],[-4.975,-4.975]],"v":[[-84.931,61.736],[-31.002,-86.028],[86.028,31.002],[-61.736,84.931],[-80.729,80.729]],"c":true}]},{"i":{"x":0.1,"y":1},"o":{"x":0.66,"y":0},"t":27,"s":[{"i":[[-2.412,6.61],[0,0],[0,0],[0,0],[4.975,4.975]],"o":[[0,0],[0,0],[0,0],[-6.61,2.412],[-4.975,-4.975]],"v":[[-84.931,61.736],[-41.113,-77.389],[74.432,38.156],[-61.736,84.931],[-80.729,80.729]],"c":true}]},{"t":50,"s":[{"i":[[-2.412,6.61],[0,0],[0,0],[0,0],[4.975,4.975]],"o":[[0,0],[0,0],[0,0],[-6.61,2.412],[-4.975,-4.975]],"v":[[-84.931,61.736],[-31.002,-86.028],[86.028,31.002],[-61.736,84.931],[-80.729,80.729]],"c":true}]}],"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"gf","o":{"a":0,"k":100,"ix":10},"r":1,"bm":0,"g":{"p":3,"k":{"a":0,"k":[0,0.251,0.259,0.302,0.5,0.251,0.259,0.302,1,0.251,0.259,0.302,0,0,0.5,0.5,1,1],"ix":9}},"s":{"a":0,"k":[-26.443,46.889],"ix":5},"e":{"a":0,"k":[31.405,193.487],"ix":6},"t":1,"nm":"Gradient Fill 1","mn":"ADBE Vector Graphic - G-Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":658,"st":0,"ct":1,"bm":0},{"ddd":0,"ind":8,"ty":4,"nm":"Layer 27","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[692.693,647.889,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0,"y":1},"o":{"x":0.167,"y":0.167},"t":7,"s":[{"i":[[-2.412,6.61],[0,0],[0,0],[0,0],[4.975,4.975]],"o":[[0,0],[0,0],[0,0],[-6.61,2.412],[-4.975,-4.975]],"v":[[-84.931,61.736],[-31.002,-86.028],[86.028,31.002],[-61.736,84.931],[-80.729,80.729]],"c":true}]},{"i":{"x":0.1,"y":1},"o":{"x":0.66,"y":0},"t":27,"s":[{"i":[[-2.412,6.61],[0,0],[0,0],[0,0],[4.975,4.975]],"o":[[0,0],[0,0],[0,0],[-6.61,2.412],[-4.975,-4.975]],"v":[[-84.931,61.736],[-41.113,-77.389],[74.432,38.156],[-61.736,84.931],[-80.729,80.729]],"c":true}]},{"t":50,"s":[{"i":[[-2.412,6.61],[0,0],[0,0],[0,0],[4.975,4.975]],"o":[[0,0],[0,0],[0,0],[-6.61,2.412],[-4.975,-4.975]],"v":[[-84.931,61.736],[-31.002,-86.028],[86.028,31.002],[-61.736,84.931],[-80.729,80.729]],"c":true}]}],"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.070588238537,0.070588238537,0.070588238537,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":658,"st":0,"ct":1,"bm":0}]}],"layers":[{"ddd":0,"ind":1,"ty":0,"nm":"Pre-comp 1","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[250,316,0],"ix":2,"l":2},"a":{"a":0,"k":[716,627,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"hasMask":true,"masksProperties":[{"inv":false,"mode":"a","pt":{"a":0,"k":{"i":[[12,-252],[-33.25,-33.25],[-82.5,50],[101,59]],"o":[[-12,252],[33.25,33.25],[82.5,-50],[-101,-59]],"v":[[645.25,314],[708,626.5],[918.5,688],[1001,315]],"c":true},"ix":1},"o":{"a":0,"k":100,"ix":3},"x":{"a":0,"k":0,"ix":4},"nm":"Mask 1"}],"w":1432,"h":1254,"ip":7,"op":665,"st":7,"bm":0},{"ddd":0,"ind":2,"ty":0,"nm":"Pre-comp 2","refId":"comp_1","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0],"y":[1]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[3.132]},{"i":{"x":[0],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":7,"s":[7.634]},{"i":{"x":[0.1],"y":[1]},"o":{"x":[0.66],"y":[0]},"t":27,"s":[-2.979]},{"t":50,"s":[3.132]}],"ix":10},"p":{"a":1,"k":[{"i":{"x":0,"y":1},"o":{"x":0.167,"y":0.167},"t":0,"s":[185.5,378.5,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0,"y":1},"o":{"x":0.333,"y":0},"t":7,"s":[183.5,365,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.1,"y":1},"o":{"x":0.66,"y":0},"t":27,"s":[198,392.5,0],"to":[0,0,0],"ti":[0,0,0]},{"t":50,"s":[185.5,378.5,0]}],"ix":2,"l":2},"a":{"a":0,"k":[651.5,689.5,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,-0.034]},"t":0,"s":[100,100,100]},{"i":{"x":[0,0,0],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":7,"s":[98.4,98.4,100]},{"i":{"x":[0.1,0.1,0.1],"y":[1,1,1]},"o":{"x":[0.66,0.66,0.66],"y":[0,0,0]},"t":27,"s":[108,108,100]},{"t":50,"s":[100,100,100]}],"ix":6,"l":2}},"ao":0,"w":1432,"h":1254,"ip":0,"op":658,"st":0,"bm":0}],"markers":[],"props":{}}'
        ),
        p = JSON.parse(
          '{"v":"5.12.1","fr":30,"ip":0,"op":105,"w":1174,"h":351,"nm":"Comp 1","ddd":0,"assets":[{"id":"comp_0","nm":"Coin Comp 1","fr":30,"layers":[{"ddd":0,"ind":1,"ty":0,"nm":"Burn Icon","parent":3,"refId":"comp_1","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-118.133,4.747,0],"ix":2,"l":2},"a":{"a":0,"k":[160,165,0],"ix":1,"l":2},"s":{"a":0,"k":[-37.765,37.765,100],"ix":6,"l":2}},"ao":0,"w":320,"h":330,"ip":54,"op":97,"st":-32,"bm":0},{"ddd":0,"ind":2,"ty":0,"nm":"Burn Icon","parent":3,"refId":"comp_1","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[79.872,7.386,0],"ix":2,"l":2},"a":{"a":0,"k":[160,165,0],"ix":1,"l":2},"s":{"a":0,"k":[36.516,36.516,100],"ix":6,"l":2}},"ao":0,"w":320,"h":330,"ip":60,"op":97,"st":-26,"bm":0},{"ddd":0,"ind":3,"ty":3,"nm":"Null 10","parent":6,"sr":1,"ks":{"o":{"a":0,"k":0,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0,"y":1},"o":{"x":0.333,"y":0},"t":55,"s":[725,494.484,0],"to":[0,0,0],"ti":[0,0,0]},{"t":73,"s":[725,463.484,0]}],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":55,"s":[76,76,100]},{"t":73,"s":[100,100,100]}],"ix":6,"l":2}},"ao":0,"ip":0,"op":658,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":3,"nm":"Null 10","parent":5,"sr":1,"ks":{"o":{"a":0,"k":0,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0,"y":1},"o":{"x":0.333,"y":0},"t":55,"s":[725,494.484,0],"to":[0,0,0],"ti":[0,0,0]},{"t":73,"s":[725,463.484,0]}],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":55,"s":[76,76,100]},{"t":73,"s":[100,100,100]}],"ix":6,"l":2}},"ao":0,"ip":0,"op":658,"st":0,"bm":0},{"ddd":0,"ind":5,"ty":4,"nm":"Coin 3","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.67],"y":[1]},"o":{"x":[0.33],"y":[0]},"t":54,"s":[0]},{"i":{"x":[0.67],"y":[1]},"o":{"x":[0.33],"y":[0]},"t":59,"s":[6.744]},{"i":{"x":[0.67],"y":[1]},"o":{"x":[0.33],"y":[0]},"t":64,"s":[-5.5]},{"i":{"x":[0.67],"y":[1]},"o":{"x":[0.33],"y":[0]},"t":71,"s":[1.209]},{"i":{"x":[0.731],"y":[1]},"o":{"x":[0.33],"y":[0]},"t":78,"s":[-0.302]},{"t":85,"s":[0]}],"ix":10},"p":{"a":1,"k":[{"i":{"x":0,"y":0.778},"o":{"x":0.438,"y":0},"t":45,"s":[724.724,705.68,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.741,"y":1},"o":{"x":0.938,"y":0.347},"t":73,"s":[724.724,509.68,0],"to":[0,0,0],"ti":[0,0,0]},{"t":101,"s":[724.724,392.18,0]}],"ix":2,"l":2},"a":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":56,"s":[724.724,498.18,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":57,"s":[717.724,498.18,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":58,"s":[729.724,498.18,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0,"y":1},"o":{"x":0.21,"y":0.513},"t":59,"s":[724.724,498.18,0],"to":[0,0,0],"ti":[0,0,0]},{"t":71,"s":[739.724,498.18,0]}],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"hasMask":true,"masksProperties":[{"inv":false,"mode":"a","pt":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[717.75,419.157],[734,457.657],[716.75,463.907],[730.75,472.157],[715.5,516.657],[733,547.157],[733,580.407],[575.5,581.657],[589.25,419.407]],"c":true},"ix":1},"o":{"a":0,"k":100,"ix":3},"x":{"a":0,"k":0,"ix":4},"nm":"Mask 1"}],"ef":[{"ty":20,"nm":"Tint","np":6,"mn":"ADBE Tint","ix":1,"en":1,"ef":[{"ty":2,"nm":"Map Black To","mn":"ADBE Tint-0001","ix":1,"v":{"a":0,"k":[0,0,0,0],"ix":1}},{"ty":2,"nm":"Map White To","mn":"ADBE Tint-0002","ix":2,"v":{"a":0,"k":[0.119056373835,0.119056373835,0.119056373835,1],"ix":2}},{"ty":0,"nm":"Amount to Tint","mn":"ADBE Tint-0003","ix":3,"v":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":58.75,"s":[0]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":61.5,"s":[100]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":64.25,"s":[0]},{"t":67,"s":[100]}],"ix":3}},{"ty":6,"nm":"","mn":"ADBE Tint-0004","ix":4,"v":0}]}],"shapes":[{"ty":"gr","it":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[20.328,0],[13.084,8.121],[0,11.493],[-13.124,8.149],[-20.324,0],[-13.08,-8.121],[0,-11.492],[13.128,-8.149]],"o":[[-20.324,0],[-13.124,-8.149],[0,-11.492],[13.084,-8.121],[20.328,0],[13.128,8.149],[0,11.493],[-13.08,8.121]],"v":[[-0.002,43.751],[-51.67,30.509],[-72.306,0],[-51.67,-30.509],[-0.002,-43.751],[51.666,-30.509],[72.306,0],[51.666,30.509]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"gs","o":{"a":0,"k":100,"ix":9},"w":{"a":0,"k":6,"ix":10},"g":{"p":3,"k":{"a":0,"k":[0,0.024,0.878,0.592,0.5,0.024,0.878,0.592,1,0.024,0.878,0.592,0,0,0.5,0.5,1,1],"ix":8}},"s":{"a":0,"k":[7.358,-269.396],"ix":4},"e":{"a":0,"k":[-25.662,-221.37],"ix":5},"t":1,"lc":1,"lj":1,"ml":4,"ml2":{"a":0,"k":4,"ix":13},"bm":0,"nm":"Gradient Stroke 1","mn":"ADBE Vector Graphic - G-Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[726.642,487.604],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[20.328,0],[13.084,8.121],[0,11.493],[-13.124,8.149],[-20.324,0],[-13.08,-8.121],[0,-11.492],[13.128,-8.149]],"o":[[-20.324,0],[-13.124,-8.149],[0,-11.492],[13.084,-8.121],[20.328,0],[13.128,8.149],[0,11.493],[-13.08,8.121]],"v":[[-0.002,43.751],[-51.67,30.509],[-72.306,0],[-51.67,-30.509],[-0.002,-43.751],[51.666,-30.509],[72.306,0],[51.666,30.509]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"gf","o":{"a":0,"k":100,"ix":10},"r":1,"bm":0,"g":{"p":3,"k":{"a":0,"k":[0,0.251,0.259,0.302,0.5,0.251,0.259,0.302,1,0.251,0.259,0.302,0,0,0.5,0.5,1,1],"ix":9}},"s":{"a":0,"k":[1.358,-280.396],"ix":5},"e":{"a":0,"k":[-189.09,-280.396],"ix":6},"t":1,"nm":"Gradient Fill 1","mn":"ADBE Vector Graphic - G-Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[726.642,487.604],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 2","np":2,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[20.328,0],[13.084,8.121],[0,11.493],[-13.124,8.149],[-20.324,0],[-13.08,-8.121],[0,-11.492],[13.128,-8.149]],"o":[[-20.324,0],[-13.124,-8.149],[0,-11.492],[13.084,-8.121],[20.328,0],[13.128,8.149],[0,11.493],[-13.08,8.121]],"v":[[-0.002,43.751],[-51.67,30.509],[-72.306,0],[-51.67,-30.509],[-0.002,-43.751],[51.666,-30.509],[72.306,0],[51.666,30.509]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.019607843831,0.019607843831,0.019607843831,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[726.642,487.604],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 3","np":2,"cix":2,"bm":0,"ix":3,"mn":"ADBE Vector Group","hd":false},{"ty":"tr","p":{"a":0,"k":[726.642,487.604],"ix":2},"a":{"a":0,"k":[726.642,487.604],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 28709","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-26.332,0],[-17.028,-11.159],[0,-16.244],[17.056,-11.176],[26.332,0],[17.032,11.159],[0,16.244],[-17.052,11.176]],"o":[[26.332,0],[17.056,11.176],[0,16.244],[-17.028,11.159],[-26.332,0],[-17.052,-11.176],[0,-16.244],[17.032,-11.159]],"v":[[0,-60.675],[67.064,-42.516],[94.172,0],[67.064,42.516],[0,60.675],[-67.068,42.516],[-94.172,0],[-67.068,-42.516]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"gs","o":{"a":0,"k":100,"ix":9},"w":{"a":0,"k":6,"ix":10},"g":{"p":3,"k":{"a":0,"k":[0,0.024,0.878,0.592,0.5,0.024,0.878,0.592,1,0.024,0.878,0.592,0,0,0.5,0.5,1,1],"ix":8}},"s":{"a":0,"k":[25.276,-282.24],"ix":4},"e":{"a":0,"k":[-291.809,-282.24],"ix":5},"t":1,"lc":1,"lj":1,"ml":4,"ml2":{"a":0,"k":4,"ix":13},"bm":0,"nm":"Gradient Stroke 1","mn":"ADBE Vector Graphic - G-Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[724.724,486.76],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-26.332,0],[-17.028,-11.159],[0,-16.244],[17.056,-11.176],[26.332,0],[17.032,11.159],[0,16.244],[-17.052,11.176]],"o":[[26.332,0],[17.056,11.176],[0,16.244],[-17.028,11.159],[-26.332,0],[-17.052,-11.176],[0,-16.244],[17.032,-11.159]],"v":[[0,-60.675],[67.064,-42.516],[94.172,0],[67.064,42.516],[0,60.675],[-67.068,42.516],[-94.172,0],[-67.068,-42.516]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.019607843831,0.019607843831,0.019607843831,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":6,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[724.724,486.76],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 2","np":2,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-26.332,0],[-17.028,-11.159],[0,-16.244],[17.056,-11.176],[26.332,0],[17.032,11.159],[0,16.244],[-17.052,11.176]],"o":[[26.332,0],[17.056,11.176],[0,16.244],[-17.028,11.159],[-26.332,0],[-17.052,-11.176],[0,-16.244],[17.032,-11.159]],"v":[[0,-60.675],[67.064,-42.516],[94.172,0],[67.064,42.516],[0,60.675],[-67.068,42.516],[-94.172,0],[-67.068,-42.516]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"gf","o":{"a":0,"k":100,"ix":10},"r":1,"bm":0,"g":{"p":3,"k":{"a":0,"k":[0,0.024,0.878,0.592,0.5,0.024,0.878,0.592,1,0.024,0.878,0.592,0,0,0.5,0.5,1,1],"ix":9}},"s":{"a":0,"k":[4.276,-254.24],"ix":5},"e":{"a":0,"k":[-44.632,13.11],"ix":6},"t":1,"nm":"Gradient Fill 1","mn":"ADBE Vector Graphic - G-Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[724.724,486.76],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 3","np":2,"cix":2,"bm":0,"ix":3,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-26.332,0],[-17.028,-11.159],[0,-16.244],[17.056,-11.176],[26.332,0],[17.032,11.159],[0,16.244],[-17.052,11.176]],"o":[[26.332,0],[17.056,11.176],[0,16.244],[-17.028,11.159],[-26.332,0],[-17.052,-11.176],[0,-16.244],[17.032,-11.159]],"v":[[0,-60.675],[67.064,-42.516],[94.172,0],[67.064,42.516],[0,60.675],[-67.068,42.516],[-94.172,0],[-67.068,-42.516]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"gf","o":{"a":0,"k":100,"ix":10},"r":1,"bm":0,"g":{"p":3,"k":{"a":0,"k":[0,0.251,0.259,0.302,0.5,0.251,0.259,0.302,1,0.251,0.259,0.302,0,0,0.5,0.5,1,1],"ix":9}},"s":{"a":0,"k":[-2.724,-282.24],"ix":5},"e":{"a":0,"k":[243.02,-282.24],"ix":6},"t":1,"nm":"Gradient Fill 1","mn":"ADBE Vector Graphic - G-Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[724.724,486.76],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 4","np":2,"cix":2,"bm":0,"ix":4,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-26.332,0],[-17.028,-11.159],[0,-16.244],[17.056,-11.176],[26.332,0],[17.032,11.159],[0,16.244],[-17.052,11.176]],"o":[[26.332,0],[17.056,11.176],[0,16.244],[-17.028,11.159],[-26.332,0],[-17.052,-11.176],[0,-16.244],[17.032,-11.159]],"v":[[0,-60.675],[67.064,-42.516],[94.172,0],[67.064,42.516],[0,60.675],[-67.068,42.516],[-94.172,0],[-67.068,-42.516]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.019607843831,0.019607843831,0.019607843831,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[724.724,486.76],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 5","np":2,"cix":2,"bm":0,"ix":5,"mn":"ADBE Vector Group","hd":false},{"ty":"tr","p":{"a":0,"k":[724.724,486.76],"ix":2},"a":{"a":0,"k":[724.724,486.76],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 28710_2","np":5,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-53.668,0],[0,35.167],[0,0],[0,0],[0,0]],"o":[[53.664,0],[0,0],[0,0],[0,0],[0,35.167]],"v":[[0,41.557],[97.172,-22.119],[97.172,-41.557],[-97.172,-41.557],[-97.172,-22.119]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"gf","o":{"a":0,"k":100,"ix":10},"r":1,"bm":0,"g":{"p":3,"k":{"a":0,"k":[0,0.024,0.878,0.592,0.5,0.024,0.878,0.592,1,0.024,0.878,0.592,0,0,0.5,0.5,1,1],"ix":9}},"s":{"a":0,"k":[-21.724,-213.28],"ix":5},"e":{"a":0,"k":[74.328,-237.294],"ix":6},"t":1,"nm":"Gradient Fill 1","mn":"ADBE Vector Graphic - G-Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[724.724,528.72],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-53.668,0],[0,35.167],[0,0],[0,0],[0,0]],"o":[[53.664,0],[0,0],[0,0],[0,0],[0,35.167]],"v":[[0,41.557],[97.172,-22.119],[97.172,-41.557],[-97.172,-41.557],[-97.172,-22.119]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.019607843831,0.019607843831,0.019607843831,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[724.724,528.72],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 2","np":2,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false},{"ty":"tr","p":{"a":0,"k":[724.724,528.72],"ix":2},"a":{"a":0,"k":[724.724,528.72],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 28706","np":2,"cix":2,"bm":0,"ix":3,"mn":"ADBE Vector Group","hd":false}],"ip":45,"op":97,"st":45,"ct":1,"bm":0},{"ddd":0,"ind":6,"ty":4,"nm":"Coin 2","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.67],"y":[1]},"o":{"x":[0.33],"y":[0]},"t":51,"s":[0]},{"i":{"x":[0.67],"y":[1]},"o":{"x":[0.33],"y":[0]},"t":55,"s":[-5.5]},{"i":{"x":[0.67],"y":[1]},"o":{"x":[0.33],"y":[0]},"t":62,"s":[6.744]},{"i":{"x":[0.67],"y":[1]},"o":{"x":[0.33],"y":[0]},"t":69,"s":[-1.209]},{"i":{"x":[0.708],"y":[1]},"o":{"x":[0.33],"y":[0]},"t":75,"s":[0.369]},{"t":81,"s":[0]}],"ix":10},"p":{"a":1,"k":[{"i":{"x":0,"y":0.778},"o":{"x":0.438,"y":0},"t":45,"s":[724.724,705.68,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.741,"y":1},"o":{"x":0.938,"y":0.347},"t":73,"s":[724.724,509.68,0],"to":[0,0,0],"ti":[0,0,0]},{"t":101,"s":[724.724,392.18,0]}],"ix":2,"l":2},"a":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":56,"s":[724.724,498.18,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":57,"s":[717.724,498.18,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":58,"s":[729.724,498.18,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0,"y":1},"o":{"x":0.21,"y":0.55},"t":59,"s":[724.724,498.18,0],"to":[0,0,0],"ti":[0,0,0]},{"t":71,"s":[713.724,498.18,0]}],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"hasMask":true,"masksProperties":[{"inv":false,"mode":"a","pt":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[717.75,419.157],[734,457.657],[716.75,463.907],[730.75,472.157],[715.5,516.657],[733,547.157],[733,580.407],[854.5,581.657],[868.25,419.407]],"c":true},"ix":1},"o":{"a":0,"k":100,"ix":3},"x":{"a":0,"k":0,"ix":4},"nm":"Mask 1"}],"ef":[{"ty":20,"nm":"Tint","np":6,"mn":"ADBE Tint","ix":1,"en":1,"ef":[{"ty":2,"nm":"Map Black To","mn":"ADBE Tint-0001","ix":1,"v":{"a":0,"k":[0,0,0,0],"ix":1}},{"ty":2,"nm":"Map White To","mn":"ADBE Tint-0002","ix":2,"v":{"a":0,"k":[0.117647059262,0.117647059262,0.117647059262,1],"ix":2}},{"ty":0,"nm":"Amount to Tint","mn":"ADBE Tint-0003","ix":3,"v":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":56,"s":[0]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":58.75,"s":[100]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":61.5,"s":[0]},{"t":64.25,"s":[100]}],"ix":3}},{"ty":6,"nm":"","mn":"ADBE Tint-0004","ix":4,"v":0}]}],"shapes":[{"ty":"gr","it":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[20.328,0],[13.084,8.121],[0,11.493],[-13.124,8.149],[-20.324,0],[-13.08,-8.121],[0,-11.492],[13.128,-8.149]],"o":[[-20.324,0],[-13.124,-8.149],[0,-11.492],[13.084,-8.121],[20.328,0],[13.128,8.149],[0,11.493],[-13.08,8.121]],"v":[[-0.002,43.751],[-51.67,30.509],[-72.306,0],[-51.67,-30.509],[-0.002,-43.751],[51.666,-30.509],[72.306,0],[51.666,30.509]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"gs","o":{"a":0,"k":100,"ix":9},"w":{"a":0,"k":6,"ix":10},"g":{"p":3,"k":{"a":0,"k":[0,0.024,0.878,0.592,0.5,0.024,0.878,0.592,1,0.024,0.878,0.592,0,0,0.5,0.5,1,1],"ix":8}},"s":{"a":0,"k":[7.358,-269.396],"ix":4},"e":{"a":0,"k":[-25.662,-221.37],"ix":5},"t":1,"lc":1,"lj":1,"ml":4,"ml2":{"a":0,"k":4,"ix":13},"bm":0,"nm":"Gradient Stroke 1","mn":"ADBE Vector Graphic - G-Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[726.642,487.604],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[20.328,0],[13.084,8.121],[0,11.493],[-13.124,8.149],[-20.324,0],[-13.08,-8.121],[0,-11.492],[13.128,-8.149]],"o":[[-20.324,0],[-13.124,-8.149],[0,-11.492],[13.084,-8.121],[20.328,0],[13.128,8.149],[0,11.493],[-13.08,8.121]],"v":[[-0.002,43.751],[-51.67,30.509],[-72.306,0],[-51.67,-30.509],[-0.002,-43.751],[51.666,-30.509],[72.306,0],[51.666,30.509]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"gf","o":{"a":0,"k":100,"ix":10},"r":1,"bm":0,"g":{"p":3,"k":{"a":0,"k":[0,0.251,0.259,0.302,0.5,0.251,0.259,0.302,1,0.251,0.259,0.302,0,0,0.5,0.5,1,1],"ix":9}},"s":{"a":0,"k":[1.358,-280.396],"ix":5},"e":{"a":0,"k":[-189.09,-280.396],"ix":6},"t":1,"nm":"Gradient Fill 1","mn":"ADBE Vector Graphic - G-Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[726.642,487.604],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 2","np":2,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[20.328,0],[13.084,8.121],[0,11.493],[-13.124,8.149],[-20.324,0],[-13.08,-8.121],[0,-11.492],[13.128,-8.149]],"o":[[-20.324,0],[-13.124,-8.149],[0,-11.492],[13.084,-8.121],[20.328,0],[13.128,8.149],[0,11.493],[-13.08,8.121]],"v":[[-0.002,43.751],[-51.67,30.509],[-72.306,0],[-51.67,-30.509],[-0.002,-43.751],[51.666,-30.509],[72.306,0],[51.666,30.509]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.019607843831,0.019607843831,0.019607843831,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[726.642,487.604],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 3","np":2,"cix":2,"bm":0,"ix":3,"mn":"ADBE Vector Group","hd":false},{"ty":"tr","p":{"a":0,"k":[726.642,487.604],"ix":2},"a":{"a":0,"k":[726.642,487.604],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 28709","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-26.332,0],[-17.028,-11.159],[0,-16.244],[17.056,-11.176],[26.332,0],[17.032,11.159],[0,16.244],[-17.052,11.176]],"o":[[26.332,0],[17.056,11.176],[0,16.244],[-17.028,11.159],[-26.332,0],[-17.052,-11.176],[0,-16.244],[17.032,-11.159]],"v":[[0,-60.675],[67.064,-42.516],[94.172,0],[67.064,42.516],[0,60.675],[-67.068,42.516],[-94.172,0],[-67.068,-42.516]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"gs","o":{"a":0,"k":100,"ix":9},"w":{"a":0,"k":6,"ix":10},"g":{"p":3,"k":{"a":0,"k":[0,0.024,0.878,0.592,0.5,0.024,0.878,0.592,1,0.024,0.878,0.592,0,0,0.5,0.5,1,1],"ix":8}},"s":{"a":0,"k":[25.276,-282.24],"ix":4},"e":{"a":0,"k":[-291.809,-282.24],"ix":5},"t":1,"lc":1,"lj":1,"ml":4,"ml2":{"a":0,"k":4,"ix":13},"bm":0,"nm":"Gradient Stroke 1","mn":"ADBE Vector Graphic - G-Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[724.724,486.76],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-26.332,0],[-17.028,-11.159],[0,-16.244],[17.056,-11.176],[26.332,0],[17.032,11.159],[0,16.244],[-17.052,11.176]],"o":[[26.332,0],[17.056,11.176],[0,16.244],[-17.028,11.159],[-26.332,0],[-17.052,-11.176],[0,-16.244],[17.032,-11.159]],"v":[[0,-60.675],[67.064,-42.516],[94.172,0],[67.064,42.516],[0,60.675],[-67.068,42.516],[-94.172,0],[-67.068,-42.516]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.019607843831,0.019607843831,0.019607843831,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":6,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[724.724,486.76],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 2","np":2,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-26.332,0],[-17.028,-11.159],[0,-16.244],[17.056,-11.176],[26.332,0],[17.032,11.159],[0,16.244],[-17.052,11.176]],"o":[[26.332,0],[17.056,11.176],[0,16.244],[-17.028,11.159],[-26.332,0],[-17.052,-11.176],[0,-16.244],[17.032,-11.159]],"v":[[0,-60.675],[67.064,-42.516],[94.172,0],[67.064,42.516],[0,60.675],[-67.068,42.516],[-94.172,0],[-67.068,-42.516]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"gf","o":{"a":0,"k":100,"ix":10},"r":1,"bm":0,"g":{"p":3,"k":{"a":0,"k":[0,0.024,0.878,0.592,0.5,0.024,0.878,0.592,1,0.024,0.878,0.592,0,0,0.5,0.5,1,1],"ix":9}},"s":{"a":0,"k":[4.276,-254.24],"ix":5},"e":{"a":0,"k":[-44.632,13.11],"ix":6},"t":1,"nm":"Gradient Fill 1","mn":"ADBE Vector Graphic - G-Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[724.724,486.76],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 3","np":2,"cix":2,"bm":0,"ix":3,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-26.332,0],[-17.028,-11.159],[0,-16.244],[17.056,-11.176],[26.332,0],[17.032,11.159],[0,16.244],[-17.052,11.176]],"o":[[26.332,0],[17.056,11.176],[0,16.244],[-17.028,11.159],[-26.332,0],[-17.052,-11.176],[0,-16.244],[17.032,-11.159]],"v":[[0,-60.675],[67.064,-42.516],[94.172,0],[67.064,42.516],[0,60.675],[-67.068,42.516],[-94.172,0],[-67.068,-42.516]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"gf","o":{"a":0,"k":100,"ix":10},"r":1,"bm":0,"g":{"p":3,"k":{"a":0,"k":[0,0.251,0.259,0.302,0.5,0.251,0.259,0.302,1,0.251,0.259,0.302,0,0,0.5,0.5,1,1],"ix":9}},"s":{"a":0,"k":[-2.724,-282.24],"ix":5},"e":{"a":0,"k":[243.02,-282.24],"ix":6},"t":1,"nm":"Gradient Fill 1","mn":"ADBE Vector Graphic - G-Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[724.724,486.76],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 4","np":2,"cix":2,"bm":0,"ix":4,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-26.332,0],[-17.028,-11.159],[0,-16.244],[17.056,-11.176],[26.332,0],[17.032,11.159],[0,16.244],[-17.052,11.176]],"o":[[26.332,0],[17.056,11.176],[0,16.244],[-17.028,11.159],[-26.332,0],[-17.052,-11.176],[0,-16.244],[17.032,-11.159]],"v":[[0,-60.675],[67.064,-42.516],[94.172,0],[67.064,42.516],[0,60.675],[-67.068,42.516],[-94.172,0],[-67.068,-42.516]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.019607843831,0.019607843831,0.019607843831,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[724.724,486.76],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 5","np":2,"cix":2,"bm":0,"ix":5,"mn":"ADBE Vector Group","hd":false},{"ty":"tr","p":{"a":0,"k":[724.724,486.76],"ix":2},"a":{"a":0,"k":[724.724,486.76],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 28710_2","np":5,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-53.668,0],[0,35.167],[0,0],[0,0],[0,0]],"o":[[53.664,0],[0,0],[0,0],[0,0],[0,35.167]],"v":[[0,41.557],[97.172,-22.119],[97.172,-41.557],[-97.172,-41.557],[-97.172,-22.119]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"gf","o":{"a":0,"k":100,"ix":10},"r":1,"bm":0,"g":{"p":3,"k":{"a":0,"k":[0,0.024,0.878,0.592,0.5,0.024,0.878,0.592,1,0.024,0.878,0.592,0,0,0.5,0.5,1,1],"ix":9}},"s":{"a":0,"k":[-21.724,-213.28],"ix":5},"e":{"a":0,"k":[74.328,-237.294],"ix":6},"t":1,"nm":"Gradient Fill 1","mn":"ADBE Vector Graphic - G-Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[724.724,528.72],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-53.668,0],[0,35.167],[0,0],[0,0],[0,0]],"o":[[53.664,0],[0,0],[0,0],[0,0],[0,35.167]],"v":[[0,41.557],[97.172,-22.119],[97.172,-41.557],[-97.172,-41.557],[-97.172,-22.119]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.019607843831,0.019607843831,0.019607843831,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[724.724,528.72],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 2","np":2,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false},{"ty":"tr","p":{"a":0,"k":[724.724,528.72],"ix":2},"a":{"a":0,"k":[724.724,528.72],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 28706","np":2,"cix":2,"bm":0,"ix":3,"mn":"ADBE Vector Group","hd":false}],"ip":45,"op":97,"st":45,"ct":1,"bm":0},{"ddd":0,"ind":7,"ty":0,"nm":"Burn Icon","parent":3,"refId":"comp_1","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":53.498,"ix":10},"p":{"a":0,"k":[-14.133,36.247,0],"ix":2,"l":2},"a":{"a":0,"k":[160,165,0],"ix":1,"l":2},"s":{"a":0,"k":[-21.244,21.244,100],"ix":6,"l":2}},"ao":0,"w":320,"h":330,"ip":54,"op":97,"st":-32,"bm":0},{"ddd":0,"ind":8,"ty":0,"nm":"Burn Icon","parent":3,"refId":"comp_1","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":-18.928,"ix":10},"p":{"a":0,"k":[-8.633,-10.753,0],"ix":2,"l":2},"a":{"a":0,"k":[160,165,0],"ix":1,"l":2},"s":{"a":0,"k":[-21.244,21.244,100],"ix":6,"l":2}},"ao":0,"w":320,"h":330,"ip":54,"op":97,"st":-32,"bm":0},{"ddd":0,"ind":9,"ty":4,"nm":"Shape Layer 2","parent":5,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[716,625.657,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[-20.688,-188.593],[-1.812,-182.593],[17.438,-168.468],[17.5,-153.218],[0.75,-148.28],[14.375,-154.03],[14.25,-132.655],[-0.875,-88.78],[-0.75,-88.155],[17.062,-55.78],[-48.688,-117.03]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.267451028263,0.267451028263,0.267451028263,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":45,"op":97,"st":0,"ct":1,"bm":0},{"ddd":0,"ind":10,"ty":4,"nm":"Shape Layer 1","parent":6,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[716,625.657,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[6.625,2.125],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0.375,11.75]],"o":[[-6.625,-2.125],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[-0.375,-11.75]],"v":[[18.812,-196.093],[3.312,-202.093],[3.312,-180.28],[11.438,-162.78],[0.812,-162.03],[0.812,-146.405],[13.312,-138.405],[-0.688,-109.28],[-0.75,-88.155],[17.062,-55.78],[57.812,-118.28]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.267451028263,0.267451028263,0.267451028263,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":45,"op":97,"st":0,"ct":1,"bm":0},{"ddd":0,"ind":11,"ty":0,"nm":"Burn Icon","parent":3,"refId":"comp_1","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[89.872,-26.578,0],"ix":2,"l":2},"a":{"a":0,"k":[160,165,0],"ix":1,"l":2},"s":{"a":0,"k":[42.074,42.074,100],"ix":6,"l":2}},"ao":0,"w":320,"h":330,"ip":55,"op":97,"st":-31,"bm":0},{"ddd":0,"ind":12,"ty":0,"nm":"Burn Icon","parent":3,"refId":"comp_1","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[64.872,-39.578,0],"ix":2,"l":2},"a":{"a":0,"k":[160,165,0],"ix":1,"l":2},"s":{"a":0,"k":[34.887,34.887,100],"ix":6,"l":2}},"ao":0,"w":320,"h":330,"ip":55,"op":97,"st":-20,"bm":0},{"ddd":0,"ind":13,"ty":0,"nm":"Burn Icon","parent":3,"refId":"comp_1","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[15.372,-67.078,0],"ix":2,"l":2},"a":{"a":0,"k":[160,165,0],"ix":1,"l":2},"s":{"a":0,"k":[41.449,41.449,100],"ix":6,"l":2}},"ao":0,"w":320,"h":330,"ip":55,"op":97,"st":-5,"bm":0},{"ddd":0,"ind":14,"ty":0,"nm":"Burn Icon","parent":3,"refId":"comp_1","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":1.08,"ix":10},"p":{"a":0,"k":[-64.428,-55.096,0],"ix":2,"l":2},"a":{"a":0,"k":[160,165,0],"ix":1,"l":2},"s":{"a":0,"k":[34.887,34.887,100],"ix":6,"l":2}},"ao":0,"w":320,"h":330,"ip":55,"op":97,"st":17,"bm":0},{"ddd":0,"ind":15,"ty":0,"nm":"Burn Icon","parent":3,"refId":"comp_1","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":1.08,"ix":10},"p":{"a":0,"k":[-111.316,-34.976,0],"ix":2,"l":2},"a":{"a":0,"k":[160,165,0],"ix":1,"l":2},"s":{"a":0,"k":[40.512,40.512,100],"ix":6,"l":2}},"ao":0,"w":320,"h":330,"ip":55,"op":97,"st":30,"bm":0}]},{"id":"comp_1","nm":"Burn Icon","fr":30,"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Layer 2 Outlines","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[159.797,215.639,0],"ix":2,"l":2},"a":{"a":0,"k":[8.174,10.103,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"t":8.677,"s":[{"i":[[0.071,-0.019],[0.046,-0.074],[-0.093,-0.06],[-0.129,0.223],[-0.012,0.058]],"o":[[-0.15,0.041],[-0.046,0.074],[0.093,0.06],[0.068,-0.118],[0.011,-0.052]],"v":[[-204.947,-106.597],[-205.273,-106.418],[-205.329,-106.072],[-204.999,-106.269],[-204.866,-106.542]],"c":true}],"h":1},{"t":11.389,"s":[{"i":[[0.664,-0.578],[0.091,-1.358],[-1.464,-0.142],[-0.161,4.035],[0.624,0.675]],"o":[[-1.409,1.228],[-0.091,1.358],[1.483,0.144],[0.085,-2.134],[-0.556,-0.601]],"v":[[-30.79,-79.819],[-32.973,-75.607],[-31.155,-71.408],[-27.895,-75.56],[-28.855,-79.78]],"c":true}],"h":1},{"t":13.558,"s":[{"i":[[0.664,-0.578],[0.091,-1.358],[-1.464,-0.142],[-0.161,4.035],[0.624,0.675]],"o":[[-1.409,1.228],[-0.091,1.358],[1.483,0.144],[0.085,-2.134],[-0.556,-0.601]],"v":[[39.96,-156.069],[37.777,-151.857],[39.595,-147.658],[42.855,-151.81],[41.895,-156.03]],"c":true}],"h":1},{"t":15.727,"s":[{"i":[[0.802,-0.699],[0.022,-1.361],[-2.705,-0.231],[-2.059,3.474],[0.343,1.825]],"o":[[-1.409,1.228],[-0.074,4.593],[2.676,0.229],[0.849,-1.433],[-0.453,-2.415]],"v":[[-224.04,-87.007],[-227.223,-79.482],[-227.655,-70.97],[-222.208,-77.997],[-220.724,-83.976]],"c":true}],"h":1},{"t":26.573,"s":[{"i":[[0.071,-0.019],[0.046,-0.074],[-0.093,-0.06],[-0.129,0.223],[-0.012,0.058]],"o":[[-0.15,0.041],[-0.046,0.074],[0.093,0.06],[0.068,-0.118],[0.011,-0.052]],"v":[[-204.947,-106.597],[-205.273,-106.418],[-205.329,-106.072],[-204.999,-106.269],[-204.866,-106.542]],"c":true}],"h":1},{"t":29.284,"s":[{"i":[[0.664,-0.578],[0.091,-1.358],[-1.464,-0.142],[-0.161,4.035],[0.624,0.675]],"o":[[-1.409,1.228],[-0.091,1.358],[1.483,0.144],[0.085,-2.134],[-0.556,-0.601]],"v":[[-30.79,-79.819],[-32.973,-75.607],[-31.155,-71.408],[-27.895,-75.56],[-28.855,-79.78]],"c":true}],"h":1},{"t":31.454,"s":[{"i":[[0.664,-0.578],[0.091,-1.358],[-1.464,-0.142],[-0.161,4.035],[0.624,0.675]],"o":[[-1.409,1.228],[-0.091,1.358],[1.483,0.144],[0.085,-2.134],[-0.556,-0.601]],"v":[[39.96,-156.069],[37.777,-151.857],[39.595,-147.658],[42.855,-151.81],[41.895,-156.03]],"c":true}],"h":1},{"t":33.623,"s":[{"i":[[0.802,-0.699],[0.022,-1.361],[-2.705,-0.231],[-2.059,3.474],[0.343,1.825]],"o":[[-1.409,1.228],[-0.074,4.593],[2.676,0.229],[0.849,-1.433],[-0.453,-2.415]],"v":[[-224.04,-87.007],[-227.223,-79.482],[-227.655,-70.97],[-222.208,-77.997],[-220.724,-83.976]],"c":true}],"h":1},{"t":44.469,"s":[{"i":[[0.071,-0.019],[0.046,-0.074],[-0.093,-0.06],[-0.129,0.223],[-0.012,0.058]],"o":[[-0.15,0.041],[-0.046,0.074],[0.093,0.06],[0.068,-0.118],[0.011,-0.052]],"v":[[-204.947,-106.597],[-205.273,-106.418],[-205.329,-106.072],[-204.999,-106.269],[-204.866,-106.542]],"c":true}],"h":1},{"t":47.181,"s":[{"i":[[0.664,-0.578],[0.091,-1.358],[-1.464,-0.142],[-0.161,4.035],[0.624,0.675]],"o":[[-1.409,1.228],[-0.091,1.358],[1.483,0.144],[0.085,-2.134],[-0.556,-0.601]],"v":[[-30.79,-79.819],[-32.973,-75.607],[-31.155,-71.408],[-27.895,-75.56],[-28.855,-79.78]],"c":true}],"h":1},{"t":49.35,"s":[{"i":[[0.664,-0.578],[0.091,-1.358],[-1.464,-0.142],[-0.161,4.035],[0.624,0.675]],"o":[[-1.409,1.228],[-0.091,1.358],[1.483,0.144],[0.085,-2.134],[-0.556,-0.601]],"v":[[39.96,-156.069],[37.777,-151.857],[39.595,-147.658],[42.855,-151.81],[41.895,-156.03]],"c":true}],"h":1},{"t":51.52,"s":[{"i":[[0.802,-0.699],[0.022,-1.361],[-2.705,-0.231],[-2.059,3.474],[0.343,1.825]],"o":[[-1.409,1.228],[-0.074,4.593],[2.676,0.229],[0.849,-1.433],[-0.453,-2.415]],"v":[[-224.04,-87.007],[-227.223,-79.482],[-227.655,-70.97],[-222.208,-77.997],[-220.724,-83.976]],"c":true}],"h":1},{"t":62.365,"s":[{"i":[[0.071,-0.019],[0.046,-0.074],[-0.093,-0.06],[-0.129,0.223],[-0.012,0.058]],"o":[[-0.15,0.041],[-0.046,0.074],[0.093,0.06],[0.068,-0.118],[0.011,-0.052]],"v":[[-204.947,-106.597],[-205.273,-106.418],[-205.329,-106.072],[-204.999,-106.269],[-204.866,-106.542]],"c":true}],"h":1},{"t":65.077,"s":[{"i":[[0.664,-0.578],[0.091,-1.358],[-1.464,-0.142],[-0.161,4.035],[0.624,0.675]],"o":[[-1.409,1.228],[-0.091,1.358],[1.483,0.144],[0.085,-2.134],[-0.556,-0.601]],"v":[[-30.79,-79.819],[-32.973,-75.607],[-31.155,-71.408],[-27.895,-75.56],[-28.855,-79.78]],"c":true}],"h":1},{"t":67.246,"s":[{"i":[[0.664,-0.578],[0.091,-1.358],[-1.464,-0.142],[-0.161,4.035],[0.624,0.675]],"o":[[-1.409,1.228],[-0.091,1.358],[1.483,0.144],[0.085,-2.134],[-0.556,-0.601]],"v":[[39.96,-156.069],[37.777,-151.857],[39.595,-147.658],[42.855,-151.81],[41.895,-156.03]],"c":true}],"h":1},{"t":69.415,"s":[{"i":[[0.802,-0.699],[0.022,-1.361],[-2.705,-0.231],[-2.059,3.474],[0.343,1.825]],"o":[[-1.409,1.228],[-0.074,4.593],[2.676,0.229],[0.849,-1.433],[-0.453,-2.415]],"v":[[-224.04,-87.007],[-227.223,-79.482],[-227.655,-70.97],[-222.208,-77.997],[-220.724,-83.976]],"c":true}],"h":1},{"t":80.262,"s":[{"i":[[0.071,-0.019],[0.046,-0.074],[-0.093,-0.06],[-0.129,0.223],[-0.012,0.058]],"o":[[-0.15,0.041],[-0.046,0.074],[0.093,0.06],[0.068,-0.118],[0.011,-0.052]],"v":[[-204.947,-106.597],[-205.273,-106.418],[-205.329,-106.072],[-204.999,-106.269],[-204.866,-106.542]],"c":true}],"h":1},{"t":82.973,"s":[{"i":[[0.664,-0.578],[0.091,-1.358],[-1.464,-0.142],[-0.161,4.035],[0.624,0.675]],"o":[[-1.409,1.228],[-0.091,1.358],[1.483,0.144],[0.085,-2.134],[-0.556,-0.601]],"v":[[-30.79,-79.819],[-32.973,-75.607],[-31.155,-71.408],[-27.895,-75.56],[-28.855,-79.78]],"c":true}],"h":1},{"t":85.143,"s":[{"i":[[0.664,-0.578],[0.091,-1.358],[-1.464,-0.142],[-0.161,4.035],[0.624,0.675]],"o":[[-1.409,1.228],[-0.091,1.358],[1.483,0.144],[0.085,-2.134],[-0.556,-0.601]],"v":[[39.96,-156.069],[37.777,-151.857],[39.595,-147.658],[42.855,-151.81],[41.895,-156.03]],"c":true}],"h":1},{"t":87.312,"s":[{"i":[[0.802,-0.699],[0.022,-1.361],[-2.705,-0.231],[-2.059,3.474],[0.343,1.825]],"o":[[-1.409,1.228],[-0.074,4.593],[2.676,0.229],[0.849,-1.433],[-0.453,-2.415]],"v":[[-224.04,-87.007],[-227.223,-79.482],[-227.655,-70.97],[-222.208,-77.997],[-220.724,-83.976]],"c":true}],"h":1},{"t":98.157,"s":[{"i":[[0.071,-0.019],[0.046,-0.074],[-0.093,-0.06],[-0.129,0.223],[-0.012,0.058]],"o":[[-0.15,0.041],[-0.046,0.074],[0.093,0.06],[0.068,-0.118],[0.011,-0.052]],"v":[[-204.947,-106.597],[-205.273,-106.418],[-205.329,-106.072],[-204.999,-106.269],[-204.866,-106.542]],"c":true}],"h":1},{"t":100.869,"s":[{"i":[[0.664,-0.578],[0.091,-1.358],[-1.464,-0.142],[-0.161,4.035],[0.624,0.675]],"o":[[-1.409,1.228],[-0.091,1.358],[1.483,0.144],[0.085,-2.134],[-0.556,-0.601]],"v":[[-30.79,-79.819],[-32.973,-75.607],[-31.155,-71.408],[-27.895,-75.56],[-28.855,-79.78]],"c":true}],"h":1},{"t":103.038,"s":[{"i":[[0.664,-0.578],[0.091,-1.358],[-1.464,-0.142],[-0.161,4.035],[0.624,0.675]],"o":[[-1.409,1.228],[-0.091,1.358],[1.483,0.144],[0.085,-2.134],[-0.556,-0.601]],"v":[[39.96,-156.069],[37.777,-151.857],[39.595,-147.658],[42.855,-151.81],[41.895,-156.03]],"c":true}],"h":1},{"t":105.208,"s":[{"i":[[0.802,-0.699],[0.022,-1.361],[-2.705,-0.231],[-2.059,3.474],[0.343,1.825]],"o":[[-1.409,1.228],[-0.074,4.593],[2.676,0.229],[0.849,-1.433],[-0.453,-2.415]],"v":[[-224.04,-87.007],[-227.223,-79.482],[-227.655,-70.97],[-222.208,-77.997],[-220.724,-83.976]],"c":true}],"h":1},{"t":116.054,"s":[{"i":[[0.071,-0.019],[0.046,-0.074],[-0.093,-0.06],[-0.129,0.223],[-0.012,0.058]],"o":[[-0.15,0.041],[-0.046,0.074],[0.093,0.06],[0.068,-0.118],[0.011,-0.052]],"v":[[-204.947,-106.597],[-205.273,-106.418],[-205.329,-106.072],[-204.999,-106.269],[-204.866,-106.542]],"c":true}],"h":1},{"t":118.766,"s":[{"i":[[0.664,-0.578],[0.091,-1.358],[-1.464,-0.142],[-0.161,4.035],[0.624,0.675]],"o":[[-1.409,1.228],[-0.091,1.358],[1.483,0.144],[0.085,-2.134],[-0.556,-0.601]],"v":[[-30.79,-79.819],[-32.973,-75.607],[-31.155,-71.408],[-27.895,-75.56],[-28.855,-79.78]],"c":true}],"h":1},{"t":120.935,"s":[{"i":[[0.664,-0.578],[0.091,-1.358],[-1.464,-0.142],[-0.161,4.035],[0.624,0.675]],"o":[[-1.409,1.228],[-0.091,1.358],[1.483,0.144],[0.085,-2.134],[-0.556,-0.601]],"v":[[39.96,-156.069],[37.777,-151.857],[39.595,-147.658],[42.855,-151.81],[41.895,-156.03]],"c":true}],"h":1},{"t":123.104,"s":[{"i":[[0.802,-0.699],[0.022,-1.361],[-2.705,-0.231],[-2.059,3.474],[0.343,1.825]],"o":[[-1.409,1.228],[-0.074,4.593],[2.676,0.229],[0.849,-1.433],[-0.453,-2.415]],"v":[[-224.04,-87.007],[-227.223,-79.482],[-227.655,-70.97],[-222.208,-77.997],[-220.724,-83.976]],"c":true}],"h":1},{"t":133.95,"s":[{"i":[[0.071,-0.019],[0.046,-0.074],[-0.093,-0.06],[-0.129,0.223],[-0.012,0.058]],"o":[[-0.15,0.041],[-0.046,0.074],[0.093,0.06],[0.068,-0.118],[0.011,-0.052]],"v":[[-204.947,-106.597],[-205.273,-106.418],[-205.329,-106.072],[-204.999,-106.269],[-204.866,-106.542]],"c":true}],"h":1},{"t":136.661,"s":[{"i":[[0.664,-0.578],[0.091,-1.358],[-1.464,-0.142],[-0.161,4.035],[0.624,0.675]],"o":[[-1.409,1.228],[-0.091,1.358],[1.483,0.144],[0.085,-2.134],[-0.556,-0.601]],"v":[[-30.79,-79.819],[-32.973,-75.607],[-31.155,-71.408],[-27.895,-75.56],[-28.855,-79.78]],"c":true}],"h":1},{"t":138.831,"s":[{"i":[[0.664,-0.578],[0.091,-1.358],[-1.464,-0.142],[-0.161,4.035],[0.624,0.675]],"o":[[-1.409,1.228],[-0.091,1.358],[1.483,0.144],[0.085,-2.134],[-0.556,-0.601]],"v":[[39.96,-156.069],[37.777,-151.857],[39.595,-147.658],[42.855,-151.81],[41.895,-156.03]],"c":true}],"h":1},{"t":141,"s":[{"i":[[0.802,-0.699],[0.022,-1.361],[-2.705,-0.231],[-2.059,3.474],[0.343,1.825]],"o":[[-1.409,1.228],[-0.074,4.593],[2.676,0.229],[0.849,-1.433],[-0.453,-2.415]],"v":[[-224.04,-87.007],[-227.223,-79.482],[-227.655,-70.97],[-222.208,-77.997],[-220.724,-83.976]],"c":true}],"h":1}],"ix":2},"nm":"Path 4","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":1,"k":[{"t":6.508,"s":[{"i":[[2.113,-2.428],[-0.172,-2.425],[-2.452,-0.793],[0.701,7.184]],"o":[[-2.113,2.428],[0.172,2.425],[2.452,0.793],[-0.701,-7.184]],"v":[[-222.801,-78.141],[-226.189,-70.437],[-222.554,-60.564],[-219.325,-68.818]],"c":true}],"h":1},{"t":8.677,"s":[{"i":[[3.719,5],[2.185,-3.118],[-6.641,-1.215],[0.161,6.297]],"o":[[1.111,4.467],[-2.004,2.86],[3.931,0.719],[-0.152,-5.946]],"v":[[-34.142,-75.124],[-43.548,-59.652],[-41.032,-48.233],[-34.34,-56.498]],"c":true}],"h":1},{"t":11.389,"s":[{"i":[[3.625,-1.375],[1.125,-2.5],[-2.25,-2],[-3.125,7.5]],"o":[[-3.625,1.375],[-1.125,2.5],[2.25,2],[3.125,-7.5]],"v":[[47.578,-168.139],[39.703,-162.139],[38.328,-150.514],[46.328,-157.139]],"c":true}],"h":1},{"t":13.558,"s":[{"i":[[3.625,-1.375],[1.125,-2.5],[-2.25,-2],[-3.125,7.5]],"o":[[-3.625,1.375],[-1.125,2.5],[2.25,2],[3.125,-7.5]],"v":[[55.203,-192.264],[47.328,-186.264],[45.953,-174.639],[53.953,-181.264]],"c":true}],"h":1},{"t":15.727,"s":[{"i":[[2.17,-0.782],[0.681,-1.443],[-1.336,-1.167],[-2.67,3.899]],"o":[[-2.17,0.782],[-0.681,1.443],[1.336,1.167],[3.088,-4.509]],"v":[[36.908,-163.106],[32.212,-157.966],[31.346,-151.242],[37.15,-155.411]],"c":true}],"h":1},{"t":24.404,"s":[{"i":[[2.113,-2.428],[-0.172,-2.425],[-2.452,-0.793],[0.701,7.184]],"o":[[-2.113,2.428],[0.172,2.425],[2.452,0.793],[-0.701,-7.184]],"v":[[-222.801,-78.141],[-226.189,-70.437],[-222.554,-60.564],[-219.325,-68.818]],"c":true}],"h":1},{"t":26.573,"s":[{"i":[[3.719,5],[2.185,-3.118],[-6.641,-1.215],[0.161,6.297]],"o":[[1.111,4.467],[-2.004,2.86],[3.931,0.719],[-0.152,-5.946]],"v":[[-34.142,-75.124],[-43.548,-59.652],[-41.032,-48.233],[-34.34,-56.498]],"c":true}],"h":1},{"t":29.284,"s":[{"i":[[3.625,-1.375],[1.125,-2.5],[-2.25,-2],[-3.125,7.5]],"o":[[-3.625,1.375],[-1.125,2.5],[2.25,2],[3.125,-7.5]],"v":[[47.578,-168.139],[39.703,-162.139],[38.328,-150.514],[46.328,-157.139]],"c":true}],"h":1},{"t":31.454,"s":[{"i":[[3.625,-1.375],[1.125,-2.5],[-2.25,-2],[-3.125,7.5]],"o":[[-3.625,1.375],[-1.125,2.5],[2.25,2],[3.125,-7.5]],"v":[[55.203,-192.264],[47.328,-186.264],[45.953,-174.639],[53.953,-181.264]],"c":true}],"h":1},{"t":33.623,"s":[{"i":[[2.17,-0.782],[0.681,-1.443],[-1.336,-1.167],[-2.67,3.899]],"o":[[-2.17,0.782],[-0.681,1.443],[1.336,1.167],[3.088,-4.509]],"v":[[36.908,-163.106],[32.212,-157.966],[31.346,-151.242],[37.15,-155.411]],"c":true}],"h":1},{"t":42.3,"s":[{"i":[[2.113,-2.428],[-0.172,-2.425],[-2.452,-0.793],[0.701,7.184]],"o":[[-2.113,2.428],[0.172,2.425],[2.452,0.793],[-0.701,-7.184]],"v":[[-222.801,-78.141],[-226.189,-70.437],[-222.554,-60.564],[-219.325,-68.818]],"c":true}],"h":1},{"t":44.469,"s":[{"i":[[3.719,5],[2.185,-3.118],[-6.641,-1.215],[0.161,6.297]],"o":[[1.111,4.467],[-2.004,2.86],[3.931,0.719],[-0.152,-5.946]],"v":[[-34.142,-75.124],[-43.548,-59.652],[-41.032,-48.233],[-34.34,-56.498]],"c":true}],"h":1},{"t":47.181,"s":[{"i":[[3.625,-1.375],[1.125,-2.5],[-2.25,-2],[-3.125,7.5]],"o":[[-3.625,1.375],[-1.125,2.5],[2.25,2],[3.125,-7.5]],"v":[[47.578,-168.139],[39.703,-162.139],[38.328,-150.514],[46.328,-157.139]],"c":true}],"h":1},{"t":49.35,"s":[{"i":[[3.625,-1.375],[1.125,-2.5],[-2.25,-2],[-3.125,7.5]],"o":[[-3.625,1.375],[-1.125,2.5],[2.25,2],[3.125,-7.5]],"v":[[55.203,-192.264],[47.328,-186.264],[45.953,-174.639],[53.953,-181.264]],"c":true}],"h":1},{"t":51.52,"s":[{"i":[[2.17,-0.782],[0.681,-1.443],[-1.336,-1.167],[-2.67,3.899]],"o":[[-2.17,0.782],[-0.681,1.443],[1.336,1.167],[3.088,-4.509]],"v":[[36.908,-163.106],[32.212,-157.966],[31.346,-151.242],[37.15,-155.411]],"c":true}],"h":1},{"t":60.196,"s":[{"i":[[2.113,-2.428],[-0.172,-2.425],[-2.452,-0.793],[0.701,7.184]],"o":[[-2.113,2.428],[0.172,2.425],[2.452,0.793],[-0.701,-7.184]],"v":[[-222.801,-78.141],[-226.189,-70.437],[-222.554,-60.564],[-219.325,-68.818]],"c":true}],"h":1},{"t":62.365,"s":[{"i":[[3.719,5],[2.185,-3.118],[-6.641,-1.215],[0.161,6.297]],"o":[[1.111,4.467],[-2.004,2.86],[3.931,0.719],[-0.152,-5.946]],"v":[[-34.142,-75.124],[-43.548,-59.652],[-41.032,-48.233],[-34.34,-56.498]],"c":true}],"h":1},{"t":65.077,"s":[{"i":[[3.625,-1.375],[1.125,-2.5],[-2.25,-2],[-3.125,7.5]],"o":[[-3.625,1.375],[-1.125,2.5],[2.25,2],[3.125,-7.5]],"v":[[47.578,-168.139],[39.703,-162.139],[38.328,-150.514],[46.328,-157.139]],"c":true}],"h":1},{"t":67.246,"s":[{"i":[[3.625,-1.375],[1.125,-2.5],[-2.25,-2],[-3.125,7.5]],"o":[[-3.625,1.375],[-1.125,2.5],[2.25,2],[3.125,-7.5]],"v":[[55.203,-192.264],[47.328,-186.264],[45.953,-174.639],[53.953,-181.264]],"c":true}],"h":1},{"t":69.415,"s":[{"i":[[2.17,-0.782],[0.681,-1.443],[-1.336,-1.167],[-2.67,3.899]],"o":[[-2.17,0.782],[-0.681,1.443],[1.336,1.167],[3.088,-4.509]],"v":[[36.908,-163.106],[32.212,-157.966],[31.346,-151.242],[37.15,-155.411]],"c":true}],"h":1},{"t":78.093,"s":[{"i":[[2.113,-2.428],[-0.172,-2.425],[-2.452,-0.793],[0.701,7.184]],"o":[[-2.113,2.428],[0.172,2.425],[2.452,0.793],[-0.701,-7.184]],"v":[[-222.801,-78.141],[-226.189,-70.437],[-222.554,-60.564],[-219.325,-68.818]],"c":true}],"h":1},{"t":80.262,"s":[{"i":[[3.719,5],[2.185,-3.118],[-6.641,-1.215],[0.161,6.297]],"o":[[1.111,4.467],[-2.004,2.86],[3.931,0.719],[-0.152,-5.946]],"v":[[-34.142,-75.124],[-43.548,-59.652],[-41.032,-48.233],[-34.34,-56.498]],"c":true}],"h":1},{"t":82.973,"s":[{"i":[[3.625,-1.375],[1.125,-2.5],[-2.25,-2],[-3.125,7.5]],"o":[[-3.625,1.375],[-1.125,2.5],[2.25,2],[3.125,-7.5]],"v":[[47.578,-168.139],[39.703,-162.139],[38.328,-150.514],[46.328,-157.139]],"c":true}],"h":1},{"t":85.143,"s":[{"i":[[3.625,-1.375],[1.125,-2.5],[-2.25,-2],[-3.125,7.5]],"o":[[-3.625,1.375],[-1.125,2.5],[2.25,2],[3.125,-7.5]],"v":[[55.203,-192.264],[47.328,-186.264],[45.953,-174.639],[53.953,-181.264]],"c":true}],"h":1},{"t":87.312,"s":[{"i":[[2.17,-0.782],[0.681,-1.443],[-1.336,-1.167],[-2.67,3.899]],"o":[[-2.17,0.782],[-0.681,1.443],[1.336,1.167],[3.088,-4.509]],"v":[[36.908,-163.106],[32.212,-157.966],[31.346,-151.242],[37.15,-155.411]],"c":true}],"h":1},{"t":95.988,"s":[{"i":[[2.113,-2.428],[-0.172,-2.425],[-2.452,-0.793],[0.701,7.184]],"o":[[-2.113,2.428],[0.172,2.425],[2.452,0.793],[-0.701,-7.184]],"v":[[-222.801,-78.141],[-226.189,-70.437],[-222.554,-60.564],[-219.325,-68.818]],"c":true}],"h":1},{"t":98.157,"s":[{"i":[[3.719,5],[2.185,-3.118],[-6.641,-1.215],[0.161,6.297]],"o":[[1.111,4.467],[-2.004,2.86],[3.931,0.719],[-0.152,-5.946]],"v":[[-34.142,-75.124],[-43.548,-59.652],[-41.032,-48.233],[-34.34,-56.498]],"c":true}],"h":1},{"t":100.869,"s":[{"i":[[3.625,-1.375],[1.125,-2.5],[-2.25,-2],[-3.125,7.5]],"o":[[-3.625,1.375],[-1.125,2.5],[2.25,2],[3.125,-7.5]],"v":[[47.578,-168.139],[39.703,-162.139],[38.328,-150.514],[46.328,-157.139]],"c":true}],"h":1},{"t":103.038,"s":[{"i":[[3.625,-1.375],[1.125,-2.5],[-2.25,-2],[-3.125,7.5]],"o":[[-3.625,1.375],[-1.125,2.5],[2.25,2],[3.125,-7.5]],"v":[[55.203,-192.264],[47.328,-186.264],[45.953,-174.639],[53.953,-181.264]],"c":true}],"h":1},{"t":105.208,"s":[{"i":[[2.17,-0.782],[0.681,-1.443],[-1.336,-1.167],[-2.67,3.899]],"o":[[-2.17,0.782],[-0.681,1.443],[1.336,1.167],[3.088,-4.509]],"v":[[36.908,-163.106],[32.212,-157.966],[31.346,-151.242],[37.15,-155.411]],"c":true}],"h":1},{"t":113.885,"s":[{"i":[[2.113,-2.428],[-0.172,-2.425],[-2.452,-0.793],[0.701,7.184]],"o":[[-2.113,2.428],[0.172,2.425],[2.452,0.793],[-0.701,-7.184]],"v":[[-222.801,-78.141],[-226.189,-70.437],[-222.554,-60.564],[-219.325,-68.818]],"c":true}],"h":1},{"t":116.054,"s":[{"i":[[3.719,5],[2.185,-3.118],[-6.641,-1.215],[0.161,6.297]],"o":[[1.111,4.467],[-2.004,2.86],[3.931,0.719],[-0.152,-5.946]],"v":[[-34.142,-75.124],[-43.548,-59.652],[-41.032,-48.233],[-34.34,-56.498]],"c":true}],"h":1},{"t":118.766,"s":[{"i":[[3.625,-1.375],[1.125,-2.5],[-2.25,-2],[-3.125,7.5]],"o":[[-3.625,1.375],[-1.125,2.5],[2.25,2],[3.125,-7.5]],"v":[[47.578,-168.139],[39.703,-162.139],[38.328,-150.514],[46.328,-157.139]],"c":true}],"h":1},{"t":120.935,"s":[{"i":[[3.625,-1.375],[1.125,-2.5],[-2.25,-2],[-3.125,7.5]],"o":[[-3.625,1.375],[-1.125,2.5],[2.25,2],[3.125,-7.5]],"v":[[55.203,-192.264],[47.328,-186.264],[45.953,-174.639],[53.953,-181.264]],"c":true}],"h":1},{"t":123.104,"s":[{"i":[[2.17,-0.782],[0.681,-1.443],[-1.336,-1.167],[-2.67,3.899]],"o":[[-2.17,0.782],[-0.681,1.443],[1.336,1.167],[3.088,-4.509]],"v":[[36.908,-163.106],[32.212,-157.966],[31.346,-151.242],[37.15,-155.411]],"c":true}],"h":1},{"t":131.781,"s":[{"i":[[2.113,-2.428],[-0.172,-2.425],[-2.452,-0.793],[0.701,7.184]],"o":[[-2.113,2.428],[0.172,2.425],[2.452,0.793],[-0.701,-7.184]],"v":[[-222.801,-78.141],[-226.189,-70.437],[-222.554,-60.564],[-219.325,-68.818]],"c":true}],"h":1},{"t":133.95,"s":[{"i":[[3.719,5],[2.185,-3.118],[-6.641,-1.215],[0.161,6.297]],"o":[[1.111,4.467],[-2.004,2.86],[3.931,0.719],[-0.152,-5.946]],"v":[[-34.142,-75.124],[-43.548,-59.652],[-41.032,-48.233],[-34.34,-56.498]],"c":true}],"h":1},{"t":136.661,"s":[{"i":[[3.625,-1.375],[1.125,-2.5],[-2.25,-2],[-3.125,7.5]],"o":[[-3.625,1.375],[-1.125,2.5],[2.25,2],[3.125,-7.5]],"v":[[47.578,-168.139],[39.703,-162.139],[38.328,-150.514],[46.328,-157.139]],"c":true}],"h":1},{"t":138.831,"s":[{"i":[[3.625,-1.375],[1.125,-2.5],[-2.25,-2],[-3.125,7.5]],"o":[[-3.625,1.375],[-1.125,2.5],[2.25,2],[3.125,-7.5]],"v":[[55.203,-192.264],[47.328,-186.264],[45.953,-174.639],[53.953,-181.264]],"c":true}],"h":1},{"t":141,"s":[{"i":[[2.17,-0.782],[0.681,-1.443],[-1.336,-1.167],[-2.67,3.899]],"o":[[-2.17,0.782],[-0.681,1.443],[1.336,1.167],[3.088,-4.509]],"v":[[36.908,-163.106],[32.212,-157.966],[31.346,-151.242],[37.15,-155.411]],"c":true}],"h":1}],"ix":2},"nm":"Path 5","mn":"ADBE Vector Shape - Group","hd":false},{"ind":2,"ty":"sh","ix":3,"ks":{"a":1,"k":[{"t":8.677,"s":[{"i":[[0,0],[-0.077,0.112],[-0.288,0.098],[-0.595,0.068],[0,0],[0.906,-0.189],[0.176,-0.026]],"o":[[0,0],[0.077,-0.112],[0.288,-0.098],[0.595,-0.068],[0,0],[-0.195,0.041],[-0.397,0.058]],"v":[[-226.818,-14.954],[-227.221,-15],[-226.741,-15.332],[-225.82,-15.569],[-225.052,-15.616],[-225.551,-15.132],[-226.116,-15.034]],"c":true}],"h":1},{"t":11.389,"s":[{"i":[[0,0],[-0.5,-5.75],[-1.875,-5],[-3.875,-3.5],[0,0],[5.902,9.659],[1.147,1.306]],"o":[[0,0],[0.5,5.75],[1.875,5],[3.875,3.5],[0,0],[-1.267,-2.073],[-2.588,-2.946]],"v":[[-71.297,-1.514],[-73.922,0.861],[-70.797,17.861],[-64.797,29.986],[-59.797,32.361],[-63.047,7.611],[-66.729,2.572]],"c":true}],"h":1},{"t":13.558,"s":[{"i":[[0,0],[-0.5,-5.75],[-1.875,-5],[-3.875,-3.5],[0,0],[5.902,9.658],[1.147,1.306]],"o":[[0,0],[0.5,5.75],[1.875,5],[3.875,3.5],[0,0],[-1.267,-2.073],[-2.588,-2.946]],"v":[[-240.797,-94.514],[-243.422,-92.139],[-240.297,-75.139],[-234.297,-63.014],[-229.297,-60.639],[-232.547,-85.389],[-236.229,-90.428]],"c":true}],"h":1},{"t":15.727,"s":[{"i":[[1.083,-0.288],[-1.2,-8.274],[1,-8.21],[5.113,-5.039],[-0.891,-1.763],[-11.942,10.616],[2.54,14.908]],"o":[[-1.555,0.413],[0.689,4.753],[-1.003,8.235],[-5.798,5.715],[0.891,1.763],[4.603,-4.092],[-3.007,-17.649]],"v":[[15.113,-6.757],[14.358,12.728],[11.453,34.072],[0.943,51.301],[-13.367,59.457],[28.573,60.334],[38.413,27.704]],"c":true}],"h":1},{"t":26.573,"s":[{"i":[[0,0],[-0.077,0.112],[-0.288,0.098],[-0.595,0.068],[0,0],[0.906,-0.189],[0.176,-0.026]],"o":[[0,0],[0.077,-0.112],[0.288,-0.098],[0.595,-0.068],[0,0],[-0.195,0.041],[-0.397,0.058]],"v":[[-226.818,-14.954],[-227.221,-15],[-226.741,-15.332],[-225.82,-15.569],[-225.052,-15.616],[-225.551,-15.132],[-226.116,-15.034]],"c":true}],"h":1},{"t":29.284,"s":[{"i":[[0,0],[-0.5,-5.75],[-1.875,-5],[-3.875,-3.5],[0,0],[5.902,9.659],[1.147,1.306]],"o":[[0,0],[0.5,5.75],[1.875,5],[3.875,3.5],[0,0],[-1.267,-2.073],[-2.588,-2.946]],"v":[[-71.297,-1.514],[-73.922,0.861],[-70.797,17.861],[-64.797,29.986],[-59.797,32.361],[-63.047,7.611],[-66.729,2.572]],"c":true}],"h":1},{"t":31.454,"s":[{"i":[[0,0],[-0.5,-5.75],[-1.875,-5],[-3.875,-3.5],[0,0],[5.902,9.658],[1.147,1.306]],"o":[[0,0],[0.5,5.75],[1.875,5],[3.875,3.5],[0,0],[-1.267,-2.073],[-2.588,-2.946]],"v":[[-240.797,-94.514],[-243.422,-92.139],[-240.297,-75.139],[-234.297,-63.014],[-229.297,-60.639],[-232.547,-85.389],[-236.229,-90.428]],"c":true}],"h":1},{"t":33.623,"s":[{"i":[[1.083,-0.288],[-1.2,-8.274],[1,-8.21],[5.113,-5.039],[-0.891,-1.763],[-11.942,10.616],[2.54,14.908]],"o":[[-1.555,0.413],[0.689,4.753],[-1.003,8.235],[-5.798,5.715],[0.891,1.763],[4.603,-4.092],[-3.007,-17.649]],"v":[[15.113,-6.757],[14.358,12.728],[11.453,34.072],[0.943,51.301],[-13.367,59.457],[28.573,60.334],[38.413,27.704]],"c":true}],"h":1},{"t":44.469,"s":[{"i":[[0,0],[-0.077,0.112],[-0.288,0.098],[-0.595,0.068],[0,0],[0.906,-0.189],[0.176,-0.026]],"o":[[0,0],[0.077,-0.112],[0.288,-0.098],[0.595,-0.068],[0,0],[-0.195,0.041],[-0.397,0.058]],"v":[[-226.818,-14.954],[-227.221,-15],[-226.741,-15.332],[-225.82,-15.569],[-225.052,-15.616],[-225.551,-15.132],[-226.116,-15.034]],"c":true}],"h":1},{"t":47.181,"s":[{"i":[[0,0],[-0.5,-5.75],[-1.875,-5],[-3.875,-3.5],[0,0],[5.902,9.659],[1.147,1.306]],"o":[[0,0],[0.5,5.75],[1.875,5],[3.875,3.5],[0,0],[-1.267,-2.073],[-2.588,-2.946]],"v":[[-71.297,-1.514],[-73.922,0.861],[-70.797,17.861],[-64.797,29.986],[-59.797,32.361],[-63.047,7.611],[-66.729,2.572]],"c":true}],"h":1},{"t":49.35,"s":[{"i":[[0,0],[-0.5,-5.75],[-1.875,-5],[-3.875,-3.5],[0,0],[5.902,9.658],[1.147,1.306]],"o":[[0,0],[0.5,5.75],[1.875,5],[3.875,3.5],[0,0],[-1.267,-2.073],[-2.588,-2.946]],"v":[[-240.797,-94.514],[-243.422,-92.139],[-240.297,-75.139],[-234.297,-63.014],[-229.297,-60.639],[-232.547,-85.389],[-236.229,-90.428]],"c":true}],"h":1},{"t":51.52,"s":[{"i":[[1.083,-0.288],[-1.2,-8.274],[1,-8.21],[5.113,-5.039],[-0.891,-1.763],[-11.942,10.616],[2.54,14.908]],"o":[[-1.555,0.413],[0.689,4.753],[-1.003,8.235],[-5.798,5.715],[0.891,1.763],[4.603,-4.092],[-3.007,-17.649]],"v":[[15.113,-6.757],[14.358,12.728],[11.453,34.072],[0.943,51.301],[-13.367,59.457],[28.573,60.334],[38.413,27.704]],"c":true}],"h":1},{"t":62.365,"s":[{"i":[[0,0],[-0.077,0.112],[-0.288,0.098],[-0.595,0.068],[0,0],[0.906,-0.189],[0.176,-0.026]],"o":[[0,0],[0.077,-0.112],[0.288,-0.098],[0.595,-0.068],[0,0],[-0.195,0.041],[-0.397,0.058]],"v":[[-226.818,-14.954],[-227.221,-15],[-226.741,-15.332],[-225.82,-15.569],[-225.052,-15.616],[-225.551,-15.132],[-226.116,-15.034]],"c":true}],"h":1},{"t":65.077,"s":[{"i":[[0,0],[-0.5,-5.75],[-1.875,-5],[-3.875,-3.5],[0,0],[5.902,9.659],[1.147,1.306]],"o":[[0,0],[0.5,5.75],[1.875,5],[3.875,3.5],[0,0],[-1.267,-2.073],[-2.588,-2.946]],"v":[[-71.297,-1.514],[-73.922,0.861],[-70.797,17.861],[-64.797,29.986],[-59.797,32.361],[-63.047,7.611],[-66.729,2.572]],"c":true}],"h":1},{"t":67.246,"s":[{"i":[[0,0],[-0.5,-5.75],[-1.875,-5],[-3.875,-3.5],[0,0],[5.902,9.658],[1.147,1.306]],"o":[[0,0],[0.5,5.75],[1.875,5],[3.875,3.5],[0,0],[-1.267,-2.073],[-2.588,-2.946]],"v":[[-240.797,-94.514],[-243.422,-92.139],[-240.297,-75.139],[-234.297,-63.014],[-229.297,-60.639],[-232.547,-85.389],[-236.229,-90.428]],"c":true}],"h":1},{"t":69.415,"s":[{"i":[[1.083,-0.288],[-1.2,-8.274],[1,-8.21],[5.113,-5.039],[-0.891,-1.763],[-11.942,10.616],[2.54,14.908]],"o":[[-1.555,0.413],[0.689,4.753],[-1.003,8.235],[-5.798,5.715],[0.891,1.763],[4.603,-4.092],[-3.007,-17.649]],"v":[[15.113,-6.757],[14.358,12.728],[11.453,34.072],[0.943,51.301],[-13.367,59.457],[28.573,60.334],[38.413,27.704]],"c":true}],"h":1},{"t":80.262,"s":[{"i":[[0,0],[-0.077,0.112],[-0.288,0.098],[-0.595,0.068],[0,0],[0.906,-0.189],[0.176,-0.026]],"o":[[0,0],[0.077,-0.112],[0.288,-0.098],[0.595,-0.068],[0,0],[-0.195,0.041],[-0.397,0.058]],"v":[[-226.818,-14.954],[-227.221,-15],[-226.741,-15.332],[-225.82,-15.569],[-225.052,-15.616],[-225.551,-15.132],[-226.116,-15.034]],"c":true}],"h":1},{"t":82.973,"s":[{"i":[[0,0],[-0.5,-5.75],[-1.875,-5],[-3.875,-3.5],[0,0],[5.902,9.659],[1.147,1.306]],"o":[[0,0],[0.5,5.75],[1.875,5],[3.875,3.5],[0,0],[-1.267,-2.073],[-2.588,-2.946]],"v":[[-71.297,-1.514],[-73.922,0.861],[-70.797,17.861],[-64.797,29.986],[-59.797,32.361],[-63.047,7.611],[-66.729,2.572]],"c":true}],"h":1},{"t":85.143,"s":[{"i":[[0,0],[-0.5,-5.75],[-1.875,-5],[-3.875,-3.5],[0,0],[5.902,9.658],[1.147,1.306]],"o":[[0,0],[0.5,5.75],[1.875,5],[3.875,3.5],[0,0],[-1.267,-2.073],[-2.588,-2.946]],"v":[[-240.797,-94.514],[-243.422,-92.139],[-240.297,-75.139],[-234.297,-63.014],[-229.297,-60.639],[-232.547,-85.389],[-236.229,-90.428]],"c":true}],"h":1},{"t":87.312,"s":[{"i":[[1.083,-0.288],[-1.2,-8.274],[1,-8.21],[5.113,-5.039],[-0.891,-1.763],[-11.942,10.616],[2.54,14.908]],"o":[[-1.555,0.413],[0.689,4.753],[-1.003,8.235],[-5.798,5.715],[0.891,1.763],[4.603,-4.092],[-3.007,-17.649]],"v":[[15.113,-6.757],[14.358,12.728],[11.453,34.072],[0.943,51.301],[-13.367,59.457],[28.573,60.334],[38.413,27.704]],"c":true}],"h":1},{"t":98.157,"s":[{"i":[[0,0],[-0.077,0.112],[-0.288,0.098],[-0.595,0.068],[0,0],[0.906,-0.189],[0.176,-0.026]],"o":[[0,0],[0.077,-0.112],[0.288,-0.098],[0.595,-0.068],[0,0],[-0.195,0.041],[-0.397,0.058]],"v":[[-226.818,-14.954],[-227.221,-15],[-226.741,-15.332],[-225.82,-15.569],[-225.052,-15.616],[-225.551,-15.132],[-226.116,-15.034]],"c":true}],"h":1},{"t":100.869,"s":[{"i":[[0,0],[-0.5,-5.75],[-1.875,-5],[-3.875,-3.5],[0,0],[5.902,9.659],[1.147,1.306]],"o":[[0,0],[0.5,5.75],[1.875,5],[3.875,3.5],[0,0],[-1.267,-2.073],[-2.588,-2.946]],"v":[[-71.297,-1.514],[-73.922,0.861],[-70.797,17.861],[-64.797,29.986],[-59.797,32.361],[-63.047,7.611],[-66.729,2.572]],"c":true}],"h":1},{"t":103.038,"s":[{"i":[[0,0],[-0.5,-5.75],[-1.875,-5],[-3.875,-3.5],[0,0],[5.902,9.658],[1.147,1.306]],"o":[[0,0],[0.5,5.75],[1.875,5],[3.875,3.5],[0,0],[-1.267,-2.073],[-2.588,-2.946]],"v":[[-240.797,-94.514],[-243.422,-92.139],[-240.297,-75.139],[-234.297,-63.014],[-229.297,-60.639],[-232.547,-85.389],[-236.229,-90.428]],"c":true}],"h":1},{"t":105.208,"s":[{"i":[[1.083,-0.288],[-1.2,-8.274],[1,-8.21],[5.113,-5.039],[-0.891,-1.763],[-11.942,10.616],[2.54,14.908]],"o":[[-1.555,0.413],[0.689,4.753],[-1.003,8.235],[-5.798,5.715],[0.891,1.763],[4.603,-4.092],[-3.007,-17.649]],"v":[[15.113,-6.757],[14.358,12.728],[11.453,34.072],[0.943,51.301],[-13.367,59.457],[28.573,60.334],[38.413,27.704]],"c":true}],"h":1},{"t":116.054,"s":[{"i":[[0,0],[-0.077,0.112],[-0.288,0.098],[-0.595,0.068],[0,0],[0.906,-0.189],[0.176,-0.026]],"o":[[0,0],[0.077,-0.112],[0.288,-0.098],[0.595,-0.068],[0,0],[-0.195,0.041],[-0.397,0.058]],"v":[[-226.818,-14.954],[-227.221,-15],[-226.741,-15.332],[-225.82,-15.569],[-225.052,-15.616],[-225.551,-15.132],[-226.116,-15.034]],"c":true}],"h":1},{"t":118.766,"s":[{"i":[[0,0],[-0.5,-5.75],[-1.875,-5],[-3.875,-3.5],[0,0],[5.902,9.659],[1.147,1.306]],"o":[[0,0],[0.5,5.75],[1.875,5],[3.875,3.5],[0,0],[-1.267,-2.073],[-2.588,-2.946]],"v":[[-71.297,-1.514],[-73.922,0.861],[-70.797,17.861],[-64.797,29.986],[-59.797,32.361],[-63.047,7.611],[-66.729,2.572]],"c":true}],"h":1},{"t":120.935,"s":[{"i":[[0,0],[-0.5,-5.75],[-1.875,-5],[-3.875,-3.5],[0,0],[5.902,9.658],[1.147,1.306]],"o":[[0,0],[0.5,5.75],[1.875,5],[3.875,3.5],[0,0],[-1.267,-2.073],[-2.588,-2.946]],"v":[[-240.797,-94.514],[-243.422,-92.139],[-240.297,-75.139],[-234.297,-63.014],[-229.297,-60.639],[-232.547,-85.389],[-236.229,-90.428]],"c":true}],"h":1},{"t":123.104,"s":[{"i":[[1.083,-0.288],[-1.2,-8.274],[1,-8.21],[5.113,-5.039],[-0.891,-1.763],[-11.942,10.616],[2.54,14.908]],"o":[[-1.555,0.413],[0.689,4.753],[-1.003,8.235],[-5.798,5.715],[0.891,1.763],[4.603,-4.092],[-3.007,-17.649]],"v":[[15.113,-6.757],[14.358,12.728],[11.453,34.072],[0.943,51.301],[-13.367,59.457],[28.573,60.334],[38.413,27.704]],"c":true}],"h":1},{"t":133.95,"s":[{"i":[[0,0],[-0.077,0.112],[-0.288,0.098],[-0.595,0.068],[0,0],[0.906,-0.189],[0.176,-0.026]],"o":[[0,0],[0.077,-0.112],[0.288,-0.098],[0.595,-0.068],[0,0],[-0.195,0.041],[-0.397,0.058]],"v":[[-226.818,-14.954],[-227.221,-15],[-226.741,-15.332],[-225.82,-15.569],[-225.052,-15.616],[-225.551,-15.132],[-226.116,-15.034]],"c":true}],"h":1},{"t":136.661,"s":[{"i":[[0,0],[-0.5,-5.75],[-1.875,-5],[-3.875,-3.5],[0,0],[5.902,9.659],[1.147,1.306]],"o":[[0,0],[0.5,5.75],[1.875,5],[3.875,3.5],[0,0],[-1.267,-2.073],[-2.588,-2.946]],"v":[[-71.297,-1.514],[-73.922,0.861],[-70.797,17.861],[-64.797,29.986],[-59.797,32.361],[-63.047,7.611],[-66.729,2.572]],"c":true}],"h":1},{"t":138.831,"s":[{"i":[[0,0],[-0.5,-5.75],[-1.875,-5],[-3.875,-3.5],[0,0],[5.902,9.658],[1.147,1.306]],"o":[[0,0],[0.5,5.75],[1.875,5],[3.875,3.5],[0,0],[-1.267,-2.073],[-2.588,-2.946]],"v":[[-240.797,-94.514],[-243.422,-92.139],[-240.297,-75.139],[-234.297,-63.014],[-229.297,-60.639],[-232.547,-85.389],[-236.229,-90.428]],"c":true}],"h":1},{"t":141,"s":[{"i":[[1.083,-0.288],[-1.2,-8.274],[1,-8.21],[5.113,-5.039],[-0.891,-1.763],[-11.942,10.616],[2.54,14.908]],"o":[[-1.555,0.413],[0.689,4.753],[-1.003,8.235],[-5.798,5.715],[0.891,1.763],[4.603,-4.092],[-3.007,-17.649]],"v":[[15.113,-6.757],[14.358,12.728],[11.453,34.072],[0.943,51.301],[-13.367,59.457],[28.573,60.334],[38.413,27.704]],"c":true}],"h":1}],"ix":2},"nm":"Path 3","mn":"ADBE Vector Shape - Group","hd":false},{"ind":3,"ty":"sh","ix":4,"ks":{"a":1,"k":[{"t":0,"s":[{"i":[[2.876,-2.468],[4.32,-1.196],[7.92,7.92],[-2.289,10.729],[1.499,9.249],[0.094,2.475],[-0.086,1.46],[-0.213,1.336],[-0.192,0.845],[-0.392,1.208],[-0.326,0.835],[-1.418,-2.375],[-1.242,-1.613],[-0.986,-1.058],[-1.986,-1.756],[-1.659,-1.478],[-1.09,-1.079],[-1.894,-4.494],[-0.279,-0.896],[-0.217,-1.131],[-0.028,-0.106],[-0.05,-0.229],[-0.058,-0.388],[-0.035,-0.347],[-0.024,-0.671],[0.993,-3.609],[1.163,-2.266]],"o":[[-3.356,2.88],[-13.437,4.796],[14.279,-3.367],[2.049,-9.604],[-0.431,-2.657],[-0.057,-1.495],[0.079,-1.345],[0.135,-0.843],[0.27,-1.192],[0.267,-0.822],[1.274,2.548],[1.122,1.879],[0.901,1.17],[1.844,1.98],[1.692,1.496],[1.158,1.032],[3.284,3.248],[0.349,0.829],[0.321,1.031],[0.03,0.106],[0.06,0.229],[0.083,0.385],[0.051,0.342],[0.065,0.642],[0.129,3.573],[-0.68,2.473],[-1.813,3.532]],"v":[[27.776,64.863],[14.572,72.063],[-20.222,62.226],[5.09,37.624],[1.734,10.861],[0.928,3.191],[0.968,-1.236],[1.404,-5.252],[1.893,-7.782],[2.884,-11.378],[3.772,-13.863],[7.797,-6.409],[11.338,-1.135],[14.175,2.199],[19.971,7.749],[25.027,12.177],[28.411,15.331],[36.469,26.635],[37.413,29.221],[38.222,32.462],[38.308,32.779],[38.472,33.467],[38.684,34.626],[38.813,35.658],[38.942,37.624],[37.618,48.537],[34.843,55.691]],"c":true}],"h":1},{"t":2.169,"s":[{"i":[[1.749,-2.028],[5.503,-0.827],[9.099,1.498],[0.974,10.927],[2.782,8.947],[0.586,2.966],[0.246,1.826],[0.116,1.643],[0.024,1],[-0.077,1.298],[-0.108,0.814],[-1.521,-3.381],[-1.457,-1.423],[-1.079,-1.055],[-2.002,-2.027],[-1.607,-1.739],[-1.042,-1.21],[-2.179,-3.307],[-0.345,-0.604],[-0.316,-0.684],[-0.035,-0.063],[-0.068,-0.138],[-0.097,-0.237],[-0.074,-0.215],[-0.111,-0.422],[-0.102,-2.446],[0.305,-1.622]],"o":[[-2.042,2.367],[-5.503,0.827],[6.455,-5.576],[-0.835,-9.363],[-0.799,-2.57],[-0.354,-1.792],[-0.227,-1.682],[-0.073,-1.036],[-0.033,-1.41],[0.052,-0.884],[1.099,5.046],[1.203,2.675],[1.056,1.032],[2.018,1.974],[1.705,1.727],[1.122,1.214],[3.138,3.645],[0.402,0.61],[0.397,0.694],[0.037,0.062],[0.076,0.136],[0.114,0.231],[0.085,0.209],[0.137,0.398],[0.592,2.25],[0.07,1.676],[-0.475,2.528]],"v":[[31.811,49.14],[19.353,55.775],[-2.449,56.074],[13.266,33.795],[4.86,8.209],[2.755,-0.191],[1.849,-5.638],[1.33,-10.641],[1.184,-13.699],[1.246,-17.773],[1.485,-20.324],[5.419,-7.59],[9.41,-1.397],[12.618,1.735],[18.68,7.747],[23.667,12.951],[26.92,16.59],[30.79,23.029],[31.912,24.85],[32.983,26.918],[33.09,27.106],[33.305,27.516],[33.621,28.219],[33.859,28.854],[34.227,30.083],[35.359,37.218],[35.036,42.194]],"c":true}],"h":1},{"t":4.339,"s":[{"i":[[0.748,-0.905],[4.468,-1.427],[1.404,-0.338],[1.108,10.686],[4.007,8.469],[1.014,3.986],[0.432,2.494],[0.214,2.18],[0.053,1.27],[-0.108,1.472],[-0.166,0.805],[-2.17,-4.293],[-2.289,-2.609],[-0.92,-1.07],[-1.519,-1.894],[-1.136,-1.565],[-0.712,-1.081],[-1.344,-3.314],[-0.219,-0.618],[-0.212,-0.723],[-0.025,-0.067],[-0.047,-0.146],[-0.061,-0.249],[-0.042,-0.223],[-0.048,-0.434],[0.434,-2.197],[0.467,-1.263]],"o":[[-1.991,2.409],[-3.503,1.119],[2.068,-3.392],[-1.013,-9.768],[-1.373,-2.902],[-0.613,-2.408],[-0.398,-2.297],[-0.135,-1.375],[-0.074,-1.791],[0.073,-1.002],[0.737,5.111],[1.717,3.396],[0.974,1.11],[1.72,2.001],[1.293,1.613],[0.793,1.093],[2.144,3.255],[0.248,0.611],[0.252,0.711],[0.027,0.067],[0.055,0.146],[0.079,0.245],[0.054,0.219],[0.077,0.413],[0.257,2.312],[-0.298,1.505],[-0.728,1.968]],"v":[[24.677,39.955],[16.33,47.362],[7.914,48.813],[11.957,28.631],[2.944,3.308],[-0.68,-7.288],[-2.256,-14.698],[-3.182,-21.459],[-3.465,-25.439],[-3.42,-30.366],[-3.063,-33.086],[1.442,-18.857],[7.523,-9.788],[10.364,-6.521],[15.227,-0.69],[18.873,4.071],[21.132,7.329],[26.389,17.12],[27.089,18.964],[27.785,21.115],[27.863,21.316],[28.017,21.754],[28.226,22.495],[28.369,23.159],[28.554,24.428],[28.19,31.31],[27.011,35.5]],"c":true}],"h":1},{"t":6.508,"s":[{"i":[[0.67,-0.432],[1.626,0.109],[1.975,1.349],[1.979,2.598],[1.309,2.769],[0.805,2.485],[0.504,2.02],[0.106,1.975],[-0.234,2.284],[-0.907,3.533],[0,0],[-0.839,-6.275],[-1.011,-4.1],[-0.658,-1.188],[-1.301,-1.702],[-1.394,-1.037],[-1.096,-0.657],[-0.897,-0.713],[-0.207,-0.164],[-0.123,-0.116],[-0.089,-0.108],[-0.145,-0.205],[-0.213,-0.437],[-0.276,-0.521],[-0.238,-0.832],[0.025,-1.261],[0.212,-0.672]],"o":[[-1.369,0.884],[-2.386,-0.159],[-2.697,-1.842],[-1.856,-2.436],[-1.116,-2.362],[-0.642,-1.981],[-0.478,-1.919],[-0.123,-2.293],[0.372,-3.629],[0.9,-3.505],[0,0],[0.56,4.186],[0.325,1.318],[1.037,1.874],[1.055,1.38],[1.026,0.763],[0.983,0.589],[0.206,0.164],[0.133,0.105],[0.102,0.096],[0.159,0.195],[0.281,0.397],[0.258,0.53],[0.405,0.765],[0.347,1.213],[-0.014,0.705],[-0.24,0.76]],"v":[[22.866,17.805],[18.213,19.302],[11.403,17.039],[4.59,9.999],[-0.016,2.049],[-2.656,-5.331],[-4.356,-11.343],[-5.6,-17.143],[-6.786,-24.008],[-5.906,-34.88],[1.459,-48.426],[0.293,-26.147],[4.525,-13.573],[6.158,-9.842],[9.596,-4.414],[13.192,-0.641],[16.712,0.882],[19.37,3.063],[20.021,3.513],[20.386,3.867],[20.697,4.15],[21.126,4.771],[21.978,5.955],[22.521,7.638],[24.001,9.772],[24.21,13.55],[23.885,15.641]],"c":true}],"h":1},{"t":8.677,"s":[{"i":[[0.527,-0.274],[2.393,0.207],[0.731,0.116],[-1.494,5.161],[0.303,4.698],[-0.272,2.042],[-0.266,1.238],[-0.311,1.051],[-0.215,0.598],[-0.33,0.661],[-0.231,0.34],[-0.219,-2.408],[-0.595,-1.652],[-0.235,-0.674],[-0.364,-1.172],[-0.244,-0.945],[-0.134,-0.639],[-0.012,-1.795],[0.013,-0.329],[0.036,-0.376],[0.001,-0.036],[0.005,-0.077],[0.018,-0.127],[0.022,-0.111],[0.059,-0.21],[0.622,-0.932],[0.461,-0.494]],"o":[[-1.402,0.728],[-1.876,-0.163],[1.624,-1.168],[1.366,-4.718],[-0.104,-1.61],[0.164,-1.233],[0.245,-1.14],[0.196,-0.663],[0.304,-0.843],[0.224,-0.45],[-0.616,2.509],[0.174,1.905],[0.253,0.703],[0.439,1.26],[0.31,0.998],[0.17,0.66],[0.403,1.923],[0.002,0.331],[-0.015,0.378],[0,0.036],[-0.001,0.078],[-0.009,0.129],[-0.016,0.112],[-0.041,0.206],[-0.315,1.12],[-0.426,0.639],[-0.718,0.77]],"v":[[9.16,-27.421],[3.793,-25.614],[-0.481,-26.577],[5.257,-35.132],[5.762,-48.603],[6.044,-54.211],[6.696,-57.947],[7.535,-61.255],[8.153,-63.152],[9.106,-65.424],[9.79,-66.614],[9.24,-59.153],[10.415,-53.775],[11.147,-51.711],[12.356,-48.068],[13.188,-45.157],[13.645,-43.21],[14.292,-37.658],[14.276,-36.668],[14.2,-35.538],[14.2,-35.429],[14.19,-35.197],[14.149,-34.813],[14.091,-34.478],[13.939,-33.855],[12.465,-30.74],[11.112,-29.03]],"c":true}],"h":1},{"t":11.389,"s":[{"i":[[-2.296,4.176],[-2.106,-8.919],[0.167,-5.943],[0.42,-7.176],[5.92,-3.427],[6.79,-0.416],[5.671,1.632],[6.809,3.878],[3.378,5.068],[2.862,6.947],[0.003,0.009],[-0.073,2.675],[-0.848,0.078],[-0.278,-0.128],[-0.72,-0.594],[-0.655,-0.625],[-0.438,-0.443],[-0.551,-0.611],[-0.058,-0.065],[0,0],[-0.085,-0.096],[-0.522,-0.576],[-1.502,-1.59],[-1.513,-1.505],[-2.108,-1.422],[-12.182,8.776],[-2.56,14.584]],"o":[[2.296,-4.176],[1.671,7.075],[-0.252,8.969],[-0.414,7.064],[-3.625,2.098],[-4.102,0.251],[-5.223,-1.503],[-4.896,-2.789],[-4.764,-7.148],[-3.707,-8.997],[0.025,0.029],[0.058,-2.116],[0.187,-0.017],[0.521,0.24],[0.614,0.506],[0.457,0.437],[1.319,1.334],[0.102,0.113],[0.066,0.074],[0,0],[0.185,0.207],[0.876,0.966],[1.322,1.399],[2.8,2.784],[2.243,1.513],[5.872,-4.23],[1.543,-8.791]],"v":[[24.032,37.662],[31.282,37.537],[33.032,55.287],[30.032,82.038],[20.533,109.288],[5.265,114.143],[-9.316,112.311],[-27.303,104.427],[-39.597,92.148],[-50.71,69.62],[-57.217,54.285],[-57.409,48.654],[-56.218,44.539],[-55.514,44.713],[-53.613,46.015],[-51.687,47.742],[-50.336,49.072],[-47.31,52.281],[-47.07,52.549],[-46.968,52.663],[-46.838,52.809],[-45.756,54.012],[-42.088,57.975],[-37.767,62.419],[-29.968,69.287],[-0.413,76.097],[14.534,56.028]],"c":true}],"h":1},{"t":13.558,"s":[{"i":[[-4.162,2.32],[-2.106,-8.919],[-0.205,-5.942],[3.42,-4.051],[5.92,-3.427],[14.626,0.921],[6.806,0.866],[3.468,3.377],[4.375,3.874],[5.791,7.688],[3.696,13.328],[-1.733,10.148],[-2.257,-0.429],[-11.651,-7.647],[-11.387,-0.069],[-5.942,4.774],[-4.636,5.552],[-2.338,6.658],[1.064,5.858],[4.171,7.199],[-1.281,-5.803],[1.833,-5.888],[0,0],[1.239,-7.664],[11.296,-4.551],[-14.984,-0.955],[-0.993,14.774]],"o":[[5.921,-3.301],[1.671,7.075],[0.42,12.2],[-4.565,5.407],[-4.495,2.602],[-4.457,-0.281],[-4.977,-0.633],[-4.072,-3.966],[-4.995,-4.424],[-4.337,-5.758],[-3.395,-12.24],[1.371,-8.028],[3.67,0.698],[11.244,7.381],[4.005,0.024],[5.584,-4.487],[5.135,-6.149],[1.951,-5.557],[-0.767,-4.222],[12.671,0.949],[1.504,6.815],[-2.757,8.856],[0,0],[-5.261,22.086],[2.046,3.574],[6.116,0.39],[0.918,-13.666]],"v":[[39.032,9.162],[53.907,32.662],[59.657,59.162],[46.657,88.913],[20.408,105.788],[-4.048,111.44],[-21.604,109.121],[-32.928,102.427],[-44.476,91.14],[-61.335,75.494],[-78.842,40.66],[-80.298,3.891],[-74.343,-9.086],[-60.772,8.384],[-36.036,16.431],[-14.882,9.473],[-2.37,-2.302],[8.415,-21.921],[8.264,-37.372],[-0.468,-56.337],[27.449,-41.203],[31.87,-20],[24.695,0.009],[18.964,22.276],[-16.843,57.162],[8.337,68.972],[35.659,45.653]],"c":true}],"h":1},{"t":15.727,"s":[{"i":[[-1.513,-2.67],[-2.878,-8.701],[0.262,-5.939],[3.42,-4.051],[5.92,-3.427],[14.626,0.921],[5.681,1.991],[4.125,2.333],[4.634,2.667],[7.788,8.242],[2.967,13.509],[-1.776,13.285],[-5.58,2.573],[-5.408,-12.698],[-12.521,3.553],[-2.666,7.076],[1.26,9.289],[-5.837,10.158],[-0.247,7.983],[-2.826,1.061],[-4.371,-7.435],[0,0],[-4.23,-5.402],[-2.44,-2.852],[-2.679,-3.535],[-1.125,-1.465],[-1.305,-1.643]],"o":[[2.734,4.824],[2.671,8.075],[-0.829,18.825],[-4.565,5.407],[-4.495,2.602],[-4.458,-0.281],[-4.735,-1.659],[-6.745,-3.815],[-5.696,-3.278],[-4.951,-5.24],[-2.262,-10.3],[1.585,-11.857],[3.393,-1.564],[2.599,6.103],[8.613,-2.444],[1.13,-3],[-1.326,-9.776],[-0.213,-4.717],[0.368,-11.871],[6.796,-2.551],[5.064,8.615],[0,0],[2.314,2.955],[2.884,3.37],[1.115,1.472],[1.277,1.664],[1.908,2.403]],"v":[[70.719,7.412],[78.782,24.662],[82.157,50.787],[58.782,88.663],[32.408,107.663],[0.952,110.94],[-17.229,105.996],[-32.553,99.052],[-47.226,91.39],[-62.96,78.245],[-77.342,49.285],[-78.633,17.719],[-68.218,-4.711],[-52.397,22.259],[-27.161,30.306],[-11.382,15.786],[-15.557,-8.927],[-18.835,-38.796],[-14.915,-61.142],[-10.593,-88.837],[11.823,-62.203],[30.12,-44.75],[42.07,-27.991],[49.714,-19.724],[58.032,-9.338],[61.087,-4.716],[65.222,0.028]],"c":true}],"h":1},{"t":17.896,"s":[{"i":[[2.876,-2.468],[4.32,-1.196],[7.92,7.92],[-2.289,10.729],[1.499,9.249],[0.094,2.475],[-0.086,1.46],[-0.213,1.336],[-0.192,0.845],[-0.392,1.208],[-0.326,0.835],[-1.418,-2.375],[-1.242,-1.613],[-0.986,-1.058],[-1.986,-1.756],[-1.659,-1.478],[-1.09,-1.079],[-1.894,-4.494],[-0.279,-0.896],[-0.217,-1.131],[-0.028,-0.106],[-0.05,-0.229],[-0.058,-0.388],[-0.035,-0.347],[-0.024,-0.671],[0.993,-3.609],[1.163,-2.266]],"o":[[-3.356,2.88],[-13.437,4.796],[14.279,-3.367],[2.049,-9.604],[-0.431,-2.657],[-0.057,-1.495],[0.079,-1.345],[0.135,-0.843],[0.27,-1.192],[0.267,-0.822],[1.274,2.548],[1.122,1.879],[0.901,1.17],[1.844,1.98],[1.692,1.496],[1.158,1.032],[3.284,3.248],[0.35,0.829],[0.321,1.031],[0.03,0.106],[0.06,0.229],[0.083,0.385],[0.051,0.342],[0.065,0.642],[0.129,3.573],[-0.68,2.473],[-1.813,3.532]],"v":[[27.776,64.863],[14.572,72.063],[-20.222,62.226],[5.09,37.624],[1.734,10.861],[0.928,3.191],[0.968,-1.236],[1.404,-5.252],[1.893,-7.782],[2.884,-11.378],[3.772,-13.863],[7.797,-6.409],[11.338,-1.135],[14.175,2.199],[19.971,7.749],[25.027,12.177],[28.411,15.331],[36.469,26.635],[37.413,29.221],[38.222,32.462],[38.308,32.779],[38.472,33.467],[38.684,34.626],[38.813,35.658],[38.942,37.624],[37.618,48.537],[34.843,55.691]],"c":true}],"h":1},{"t":20.065,"s":[{"i":[[1.749,-2.028],[5.503,-0.827],[9.099,1.498],[0.974,10.927],[2.782,8.947],[0.586,2.966],[0.246,1.826],[0.116,1.643],[0.024,1],[-0.077,1.298],[-0.108,0.814],[-1.521,-3.381],[-1.457,-1.423],[-1.079,-1.055],[-2.002,-2.027],[-1.607,-1.739],[-1.042,-1.21],[-2.179,-3.307],[-0.345,-0.604],[-0.316,-0.684],[-0.035,-0.063],[-0.068,-0.138],[-0.097,-0.237],[-0.074,-0.215],[-0.111,-0.422],[-0.102,-2.446],[0.305,-1.622]],"o":[[-2.042,2.367],[-5.503,0.827],[6.455,-5.576],[-0.835,-9.363],[-0.799,-2.57],[-0.354,-1.792],[-0.227,-1.682],[-0.073,-1.036],[-0.033,-1.41],[0.052,-0.884],[1.099,5.046],[1.203,2.675],[1.056,1.032],[2.018,1.974],[1.705,1.727],[1.122,1.214],[3.138,3.645],[0.402,0.61],[0.397,0.694],[0.037,0.063],[0.076,0.136],[0.114,0.231],[0.085,0.209],[0.137,0.398],[0.592,2.25],[0.07,1.676],[-0.475,2.528]],"v":[[31.811,49.14],[19.353,55.775],[-2.449,56.074],[13.266,33.795],[4.86,8.209],[2.755,-0.191],[1.849,-5.638],[1.33,-10.641],[1.184,-13.699],[1.246,-17.773],[1.485,-20.324],[5.419,-7.59],[9.41,-1.397],[12.618,1.735],[18.68,7.747],[23.667,12.951],[26.92,16.59],[30.79,23.029],[31.912,24.85],[32.983,26.918],[33.09,27.106],[33.305,27.516],[33.621,28.219],[33.859,28.854],[34.227,30.083],[35.359,37.218],[35.036,42.194]],"c":true}],"h":1},{"t":22.234,"s":[{"i":[[0.748,-0.905],[4.468,-1.427],[1.404,-0.338],[1.108,10.686],[4.007,8.469],[1.014,3.986],[0.432,2.494],[0.214,2.18],[0.053,1.27],[-0.108,1.472],[-0.166,0.805],[-2.17,-4.293],[-2.289,-2.609],[-0.92,-1.07],[-1.519,-1.894],[-1.136,-1.565],[-0.712,-1.081],[-1.344,-3.314],[-0.219,-0.618],[-0.212,-0.723],[-0.025,-0.067],[-0.047,-0.146],[-0.061,-0.249],[-0.042,-0.223],[-0.048,-0.434],[0.434,-2.197],[0.467,-1.263]],"o":[[-1.991,2.409],[-3.503,1.119],[2.068,-3.392],[-1.013,-9.768],[-1.373,-2.902],[-0.613,-2.408],[-0.398,-2.297],[-0.135,-1.375],[-0.074,-1.791],[0.073,-1.002],[0.737,5.111],[1.717,3.396],[0.974,1.11],[1.72,2.001],[1.293,1.613],[0.793,1.093],[2.144,3.255],[0.248,0.611],[0.252,0.711],[0.027,0.067],[0.055,0.146],[0.079,0.245],[0.054,0.219],[0.077,0.413],[0.257,2.312],[-0.298,1.505],[-0.728,1.968]],"v":[[24.677,39.955],[16.33,47.362],[7.914,48.813],[11.957,28.631],[2.944,3.308],[-0.68,-7.288],[-2.256,-14.698],[-3.182,-21.459],[-3.465,-25.439],[-3.42,-30.366],[-3.063,-33.086],[1.442,-18.857],[7.523,-9.788],[10.364,-6.521],[15.227,-0.69],[18.873,4.071],[21.132,7.329],[26.389,17.12],[27.089,18.964],[27.785,21.115],[27.863,21.316],[28.017,21.754],[28.226,22.495],[28.369,23.159],[28.554,24.428],[28.19,31.31],[27.011,35.5]],"c":true}],"h":1},{"t":24.404,"s":[{"i":[[0.67,-0.432],[1.626,0.109],[1.975,1.349],[1.979,2.598],[1.309,2.769],[0.805,2.485],[0.504,2.02],[0.106,1.975],[-0.234,2.284],[-0.907,3.533],[0,0],[-0.839,-6.275],[-1.011,-4.1],[-0.658,-1.188],[-1.301,-1.702],[-1.394,-1.037],[-1.096,-0.657],[-0.897,-0.713],[-0.207,-0.164],[-0.123,-0.116],[-0.089,-0.108],[-0.145,-0.205],[-0.213,-0.437],[-0.276,-0.521],[-0.238,-0.832],[0.025,-1.261],[0.212,-0.672]],"o":[[-1.369,0.884],[-2.386,-0.159],[-2.697,-1.842],[-1.856,-2.436],[-1.116,-2.362],[-0.642,-1.981],[-0.478,-1.919],[-0.123,-2.293],[0.372,-3.629],[0.9,-3.505],[0,0],[0.56,4.186],[0.325,1.318],[1.037,1.874],[1.055,1.38],[1.026,0.763],[0.983,0.589],[0.206,0.164],[0.133,0.105],[0.102,0.096],[0.159,0.195],[0.281,0.397],[0.258,0.53],[0.405,0.765],[0.347,1.213],[-0.014,0.705],[-0.24,0.76]],"v":[[22.866,17.805],[18.213,19.302],[11.403,17.039],[4.59,9.999],[-0.016,2.049],[-2.656,-5.331],[-4.356,-11.343],[-5.6,-17.143],[-6.786,-24.008],[-5.906,-34.88],[1.459,-48.426],[0.293,-26.147],[4.525,-13.573],[6.158,-9.842],[9.596,-4.414],[13.192,-0.641],[16.712,0.882],[19.37,3.063],[20.021,3.513],[20.386,3.867],[20.697,4.15],[21.126,4.771],[21.978,5.955],[22.521,7.638],[24.001,9.772],[24.21,13.55],[23.885,15.641]],"c":true}],"h":1},{"t":26.573,"s":[{"i":[[0.527,-0.274],[2.393,0.207],[0.731,0.116],[-1.494,5.161],[0.303,4.698],[-0.272,2.042],[-0.266,1.238],[-0.311,1.051],[-0.215,0.598],[-0.33,0.661],[-0.231,0.34],[-0.219,-2.408],[-0.595,-1.652],[-0.235,-0.674],[-0.364,-1.172],[-0.244,-0.945],[-0.134,-0.639],[-0.012,-1.795],[0.013,-0.329],[0.036,-0.376],[0.001,-0.036],[0.005,-0.077],[0.018,-0.127],[0.022,-0.111],[0.059,-0.21],[0.622,-0.932],[0.461,-0.494]],"o":[[-1.402,0.728],[-1.876,-0.163],[1.624,-1.168],[1.366,-4.718],[-0.104,-1.61],[0.164,-1.233],[0.245,-1.14],[0.196,-0.663],[0.304,-0.843],[0.224,-0.45],[-0.616,2.509],[0.174,1.905],[0.253,0.703],[0.439,1.26],[0.31,0.998],[0.17,0.66],[0.403,1.923],[0.002,0.331],[-0.015,0.378],[0,0.036],[-0.001,0.078],[-0.009,0.129],[-0.016,0.112],[-0.041,0.206],[-0.315,1.12],[-0.426,0.639],[-0.718,0.77]],"v":[[9.16,-27.421],[3.793,-25.614],[-0.481,-26.577],[5.257,-35.132],[5.762,-48.603],[6.044,-54.211],[6.696,-57.947],[7.535,-61.255],[8.153,-63.152],[9.106,-65.424],[9.79,-66.614],[9.24,-59.153],[10.415,-53.775],[11.147,-51.711],[12.356,-48.068],[13.188,-45.157],[13.645,-43.21],[14.292,-37.658],[14.276,-36.668],[14.2,-35.538],[14.2,-35.429],[14.19,-35.197],[14.149,-34.813],[14.091,-34.478],[13.939,-33.855],[12.465,-30.74],[11.112,-29.03]],"c":true}],"h":1},{"t":29.284,"s":[{"i":[[-2.296,4.176],[-2.106,-8.919],[0.167,-5.943],[0.42,-7.176],[5.92,-3.427],[6.79,-0.416],[5.671,1.632],[6.809,3.878],[3.378,5.068],[2.862,6.947],[0.003,0.009],[-0.073,2.675],[-0.848,0.078],[-0.278,-0.128],[-0.72,-0.594],[-0.655,-0.625],[-0.438,-0.443],[-0.551,-0.611],[-0.058,-0.065],[0,0],[-0.085,-0.096],[-0.522,-0.576],[-1.502,-1.59],[-1.513,-1.505],[-2.108,-1.422],[-12.182,8.776],[-2.56,14.584]],"o":[[2.296,-4.175],[1.671,7.075],[-0.252,8.969],[-0.414,7.064],[-3.625,2.098],[-4.102,0.251],[-5.223,-1.503],[-4.896,-2.789],[-4.764,-7.148],[-3.707,-8.997],[0.025,0.029],[0.058,-2.116],[0.187,-0.017],[0.521,0.24],[0.614,0.506],[0.457,0.437],[1.319,1.334],[0.102,0.113],[0.066,0.074],[0,0],[0.185,0.207],[0.876,0.966],[1.322,1.399],[2.8,2.784],[2.243,1.513],[5.872,-4.23],[1.543,-8.791]],"v":[[24.032,37.662],[31.282,37.537],[33.032,55.287],[30.032,82.038],[20.533,109.288],[5.265,114.143],[-9.316,112.311],[-27.303,104.427],[-39.597,92.148],[-50.71,69.62],[-57.217,54.285],[-57.409,48.654],[-56.218,44.539],[-55.514,44.713],[-53.613,46.015],[-51.687,47.742],[-50.336,49.072],[-47.31,52.281],[-47.07,52.549],[-46.968,52.663],[-46.838,52.809],[-45.756,54.012],[-42.088,57.975],[-37.767,62.419],[-29.968,69.287],[-0.413,76.097],[14.534,56.028]],"c":true}],"h":1},{"t":31.454,"s":[{"i":[[-4.162,2.32],[-2.106,-8.919],[-0.205,-5.942],[3.42,-4.051],[5.92,-3.427],[14.626,0.921],[6.806,0.866],[3.468,3.377],[4.375,3.874],[5.791,7.688],[3.696,13.328],[-1.733,10.148],[-2.257,-0.429],[-11.651,-7.647],[-11.387,-0.069],[-5.942,4.774],[-4.636,5.552],[-2.338,6.658],[1.064,5.858],[4.171,7.199],[-1.281,-5.803],[1.833,-5.888],[0,0],[1.239,-7.664],[11.296,-4.551],[-14.984,-0.955],[-0.993,14.774]],"o":[[5.921,-3.301],[1.671,7.075],[0.42,12.2],[-4.565,5.407],[-4.495,2.602],[-4.457,-0.281],[-4.977,-0.633],[-4.072,-3.966],[-4.995,-4.424],[-4.337,-5.758],[-3.395,-12.24],[1.371,-8.028],[3.67,0.698],[11.244,7.381],[4.005,0.024],[5.584,-4.487],[5.135,-6.149],[1.951,-5.557],[-0.767,-4.222],[12.671,0.949],[1.504,6.815],[-2.757,8.856],[0,0],[-5.261,22.086],[2.046,3.574],[6.116,0.39],[0.918,-13.666]],"v":[[39.032,9.162],[53.907,32.662],[59.657,59.162],[46.657,88.913],[20.408,105.788],[-4.048,111.44],[-21.604,109.121],[-32.928,102.427],[-44.476,91.14],[-61.335,75.494],[-78.842,40.66],[-80.298,3.891],[-74.343,-9.086],[-60.772,8.384],[-36.036,16.431],[-14.882,9.473],[-2.37,-2.302],[8.415,-21.921],[8.264,-37.372],[-0.468,-56.337],[27.449,-41.203],[31.87,-20],[24.695,0.009],[18.964,22.276],[-16.843,57.162],[8.337,68.972],[35.659,45.653]],"c":true}],"h":1},{"t":33.623,"s":[{"i":[[-1.513,-2.67],[-2.878,-8.701],[0.262,-5.939],[3.42,-4.051],[5.92,-3.427],[14.626,0.921],[5.681,1.991],[4.125,2.333],[4.634,2.667],[7.788,8.242],[2.967,13.509],[-1.776,13.285],[-5.58,2.573],[-5.408,-12.698],[-12.521,3.553],[-2.666,7.076],[1.26,9.289],[-5.837,10.158],[-0.247,7.983],[-2.826,1.061],[-4.371,-7.435],[0,0],[-4.23,-5.402],[-2.44,-2.852],[-2.679,-3.535],[-1.125,-1.465],[-1.305,-1.643]],"o":[[2.734,4.824],[2.671,8.075],[-0.829,18.825],[-4.565,5.407],[-4.495,2.602],[-4.458,-0.281],[-4.735,-1.659],[-6.745,-3.815],[-5.696,-3.278],[-4.951,-5.24],[-2.262,-10.3],[1.585,-11.857],[3.393,-1.564],[2.599,6.103],[8.613,-2.444],[1.13,-3],[-1.326,-9.776],[-0.213,-4.717],[0.368,-11.871],[6.796,-2.551],[5.064,8.615],[0,0],[2.314,2.955],[2.884,3.37],[1.115,1.472],[1.277,1.664],[1.908,2.403]],"v":[[70.719,7.412],[78.782,24.662],[82.157,50.787],[58.782,88.663],[32.408,107.663],[0.952,110.94],[-17.229,105.996],[-32.553,99.052],[-47.226,91.39],[-62.96,78.245],[-77.342,49.285],[-78.633,17.719],[-68.218,-4.711],[-52.397,22.259],[-27.161,30.306],[-11.382,15.786],[-15.557,-8.927],[-18.835,-38.796],[-14.915,-61.142],[-10.593,-88.837],[11.823,-62.203],[30.12,-44.75],[42.07,-27.991],[49.714,-19.724],[58.032,-9.338],[61.087,-4.716],[65.222,0.028]],"c":true}],"h":1},{"t":35.792,"s":[{"i":[[2.876,-2.468],[4.32,-1.196],[7.92,7.92],[-2.289,10.729],[1.499,9.249],[0.094,2.475],[-0.086,1.46],[-0.213,1.336],[-0.192,0.845],[-0.392,1.208],[-0.326,0.835],[-1.418,-2.375],[-1.242,-1.613],[-0.986,-1.058],[-1.986,-1.756],[-1.659,-1.478],[-1.09,-1.079],[-1.894,-4.494],[-0.279,-0.896],[-0.217,-1.131],[-0.028,-0.106],[-0.05,-0.229],[-0.058,-0.388],[-0.035,-0.347],[-0.024,-0.671],[0.993,-3.609],[1.163,-2.266]],"o":[[-3.356,2.88],[-13.437,4.796],[14.279,-3.367],[2.049,-9.604],[-0.431,-2.657],[-0.057,-1.495],[0.079,-1.345],[0.135,-0.843],[0.27,-1.192],[0.267,-0.822],[1.274,2.548],[1.122,1.879],[0.901,1.17],[1.844,1.98],[1.692,1.496],[1.158,1.032],[3.284,3.248],[0.35,0.829],[0.321,1.031],[0.03,0.106],[0.06,0.229],[0.083,0.385],[0.051,0.342],[0.065,0.642],[0.129,3.573],[-0.68,2.473],[-1.813,3.532]],"v":[[27.776,64.863],[14.572,72.063],[-20.222,62.226],[5.09,37.624],[1.734,10.861],[0.928,3.191],[0.968,-1.236],[1.404,-5.252],[1.893,-7.782],[2.884,-11.378],[3.772,-13.863],[7.797,-6.409],[11.338,-1.135],[14.175,2.199],[19.971,7.749],[25.027,12.177],[28.411,15.331],[36.469,26.635],[37.413,29.221],[38.222,32.462],[38.308,32.779],[38.472,33.467],[38.684,34.626],[38.813,35.658],[38.942,37.624],[37.618,48.537],[34.843,55.691]],"c":true}],"h":1},{"t":37.962,"s":[{"i":[[1.749,-2.028],[5.503,-0.827],[9.099,1.498],[0.974,10.927],[2.782,8.947],[0.586,2.966],[0.246,1.826],[0.116,1.643],[0.024,1],[-0.077,1.298],[-0.108,0.814],[-1.521,-3.381],[-1.457,-1.423],[-1.079,-1.055],[-2.002,-2.027],[-1.607,-1.739],[-1.042,-1.21],[-2.179,-3.307],[-0.345,-0.604],[-0.316,-0.684],[-0.035,-0.063],[-0.068,-0.138],[-0.097,-0.237],[-0.074,-0.215],[-0.111,-0.422],[-0.102,-2.446],[0.305,-1.622]],"o":[[-2.042,2.367],[-5.503,0.827],[6.455,-5.576],[-0.835,-9.363],[-0.799,-2.57],[-0.354,-1.792],[-0.227,-1.682],[-0.073,-1.036],[-0.033,-1.41],[0.052,-0.884],[1.099,5.046],[1.203,2.675],[1.056,1.032],[2.018,1.974],[1.705,1.727],[1.122,1.214],[3.138,3.645],[0.402,0.61],[0.397,0.694],[0.037,0.063],[0.076,0.136],[0.114,0.231],[0.085,0.209],[0.137,0.398],[0.592,2.25],[0.07,1.676],[-0.475,2.528]],"v":[[31.811,49.14],[19.353,55.775],[-2.449,56.074],[13.266,33.795],[4.86,8.209],[2.755,-0.191],[1.849,-5.638],[1.33,-10.641],[1.184,-13.699],[1.246,-17.773],[1.485,-20.324],[5.419,-7.59],[9.41,-1.397],[12.618,1.735],[18.68,7.747],[23.667,12.951],[26.92,16.59],[30.79,23.029],[31.912,24.85],[32.983,26.918],[33.09,27.106],[33.305,27.516],[33.621,28.219],[33.859,28.854],[34.227,30.083],[35.359,37.218],[35.036,42.194]],"c":true}],"h":1},{"t":40.131,"s":[{"i":[[0.748,-0.905],[4.468,-1.427],[1.404,-0.338],[1.108,10.686],[4.007,8.469],[1.014,3.986],[0.432,2.494],[0.214,2.18],[0.053,1.27],[-0.108,1.472],[-0.166,0.805],[-2.17,-4.293],[-2.289,-2.609],[-0.92,-1.07],[-1.519,-1.894],[-1.136,-1.565],[-0.712,-1.081],[-1.344,-3.314],[-0.219,-0.618],[-0.212,-0.723],[-0.025,-0.067],[-0.047,-0.146],[-0.061,-0.249],[-0.042,-0.223],[-0.048,-0.434],[0.434,-2.197],[0.467,-1.263]],"o":[[-1.991,2.409],[-3.503,1.119],[2.068,-3.392],[-1.013,-9.768],[-1.373,-2.902],[-0.613,-2.408],[-0.398,-2.297],[-0.135,-1.375],[-0.074,-1.791],[0.073,-1.002],[0.737,5.111],[1.717,3.396],[0.974,1.11],[1.72,2.001],[1.293,1.613],[0.793,1.093],[2.144,3.255],[0.248,0.611],[0.252,0.711],[0.027,0.067],[0.055,0.146],[0.079,0.245],[0.054,0.219],[0.077,0.413],[0.257,2.312],[-0.298,1.505],[-0.728,1.968]],"v":[[24.677,39.955],[16.33,47.362],[7.914,48.813],[11.957,28.631],[2.944,3.308],[-0.68,-7.288],[-2.256,-14.698],[-3.182,-21.459],[-3.465,-25.439],[-3.42,-30.366],[-3.063,-33.086],[1.442,-18.857],[7.523,-9.788],[10.364,-6.521],[15.227,-0.69],[18.873,4.071],[21.132,7.329],[26.389,17.12],[27.089,18.964],[27.785,21.115],[27.863,21.316],[28.017,21.754],[28.226,22.495],[28.369,23.159],[28.554,24.428],[28.19,31.31],[27.011,35.5]],"c":true}],"h":1},{"t":42.3,"s":[{"i":[[0.67,-0.432],[1.626,0.109],[1.975,1.349],[1.979,2.598],[1.309,2.769],[0.805,2.485],[0.504,2.02],[0.106,1.975],[-0.234,2.284],[-0.907,3.533],[0,0],[-0.839,-6.275],[-1.011,-4.1],[-0.658,-1.188],[-1.301,-1.702],[-1.394,-1.037],[-1.096,-0.657],[-0.897,-0.713],[-0.207,-0.164],[-0.123,-0.116],[-0.089,-0.108],[-0.145,-0.205],[-0.213,-0.437],[-0.276,-0.521],[-0.238,-0.832],[0.025,-1.261],[0.212,-0.672]],"o":[[-1.369,0.884],[-2.386,-0.159],[-2.697,-1.842],[-1.856,-2.436],[-1.116,-2.362],[-0.642,-1.981],[-0.478,-1.919],[-0.123,-2.293],[0.372,-3.629],[0.9,-3.505],[0,0],[0.56,4.186],[0.325,1.318],[1.037,1.874],[1.055,1.38],[1.026,0.763],[0.983,0.589],[0.206,0.164],[0.133,0.105],[0.102,0.096],[0.159,0.195],[0.281,0.397],[0.258,0.53],[0.405,0.765],[0.347,1.213],[-0.014,0.705],[-0.24,0.76]],"v":[[22.866,17.805],[18.213,19.302],[11.403,17.039],[4.59,9.999],[-0.016,2.049],[-2.656,-5.331],[-4.356,-11.343],[-5.6,-17.143],[-6.786,-24.008],[-5.906,-34.88],[1.459,-48.426],[0.293,-26.147],[4.525,-13.573],[6.158,-9.842],[9.596,-4.414],[13.192,-0.641],[16.712,0.882],[19.37,3.063],[20.021,3.513],[20.386,3.867],[20.697,4.15],[21.126,4.771],[21.978,5.955],[22.521,7.638],[24.001,9.772],[24.21,13.55],[23.885,15.641]],"c":true}],"h":1},{"t":44.469,"s":[{"i":[[0.527,-0.274],[2.393,0.207],[0.731,0.116],[-1.494,5.161],[0.303,4.698],[-0.272,2.042],[-0.266,1.238],[-0.311,1.051],[-0.215,0.598],[-0.33,0.661],[-0.231,0.34],[-0.219,-2.408],[-0.595,-1.652],[-0.235,-0.674],[-0.364,-1.172],[-0.244,-0.945],[-0.134,-0.639],[-0.012,-1.795],[0.013,-0.329],[0.036,-0.376],[0.001,-0.036],[0.005,-0.077],[0.018,-0.127],[0.022,-0.111],[0.059,-0.21],[0.622,-0.932],[0.461,-0.494]],"o":[[-1.402,0.728],[-1.876,-0.163],[1.624,-1.168],[1.366,-4.718],[-0.104,-1.61],[0.164,-1.233],[0.245,-1.14],[0.196,-0.663],[0.304,-0.843],[0.224,-0.45],[-0.616,2.509],[0.174,1.905],[0.253,0.703],[0.439,1.26],[0.31,0.998],[0.17,0.66],[0.403,1.923],[0.002,0.331],[-0.015,0.378],[0,0.036],[-0.001,0.078],[-0.009,0.129],[-0.016,0.112],[-0.041,0.206],[-0.315,1.12],[-0.426,0.639],[-0.718,0.77]],"v":[[9.16,-27.421],[3.793,-25.614],[-0.481,-26.577],[5.257,-35.132],[5.762,-48.603],[6.044,-54.211],[6.696,-57.947],[7.535,-61.255],[8.153,-63.152],[9.106,-65.424],[9.79,-66.614],[9.24,-59.153],[10.415,-53.775],[11.147,-51.711],[12.356,-48.068],[13.188,-45.157],[13.645,-43.21],[14.292,-37.658],[14.276,-36.668],[14.2,-35.538],[14.2,-35.429],[14.19,-35.197],[14.149,-34.813],[14.091,-34.478],[13.939,-33.855],[12.465,-30.74],[11.112,-29.03]],"c":true}],"h":1},{"t":47.181,"s":[{"i":[[-2.296,4.176],[-2.106,-8.919],[0.167,-5.943],[0.42,-7.176],[5.92,-3.427],[6.79,-0.416],[5.671,1.632],[6.809,3.878],[3.378,5.068],[2.862,6.947],[0.003,0.009],[-0.073,2.675],[-0.848,0.078],[-0.278,-0.128],[-0.72,-0.594],[-0.655,-0.625],[-0.438,-0.443],[-0.551,-0.611],[-0.058,-0.065],[0,0],[-0.085,-0.096],[-0.522,-0.576],[-1.502,-1.59],[-1.513,-1.505],[-2.108,-1.422],[-12.182,8.776],[-2.56,14.584]],"o":[[2.296,-4.175],[1.671,7.075],[-0.252,8.969],[-0.414,7.064],[-3.625,2.098],[-4.102,0.251],[-5.223,-1.503],[-4.896,-2.789],[-4.764,-7.148],[-3.707,-8.997],[0.025,0.029],[0.058,-2.116],[0.187,-0.017],[0.521,0.24],[0.614,0.506],[0.457,0.437],[1.319,1.334],[0.102,0.113],[0.066,0.074],[0,0],[0.185,0.207],[0.876,0.966],[1.322,1.399],[2.8,2.784],[2.243,1.513],[5.872,-4.23],[1.543,-8.791]],"v":[[24.032,37.662],[31.282,37.537],[33.032,55.287],[30.032,82.038],[20.533,109.288],[5.265,114.143],[-9.316,112.311],[-27.303,104.427],[-39.597,92.148],[-50.71,69.62],[-57.217,54.285],[-57.409,48.654],[-56.218,44.539],[-55.514,44.713],[-53.613,46.015],[-51.687,47.742],[-50.336,49.072],[-47.31,52.281],[-47.07,52.549],[-46.968,52.663],[-46.838,52.809],[-45.756,54.012],[-42.088,57.975],[-37.767,62.419],[-29.968,69.287],[-0.413,76.097],[14.534,56.028]],"c":true}],"h":1},{"t":49.35,"s":[{"i":[[-4.162,2.32],[-2.106,-8.919],[-0.205,-5.942],[3.42,-4.051],[5.92,-3.427],[14.626,0.921],[6.806,0.866],[3.468,3.377],[4.375,3.874],[5.791,7.688],[3.696,13.328],[-1.733,10.148],[-2.257,-0.429],[-11.651,-7.647],[-11.387,-0.069],[-5.942,4.774],[-4.636,5.552],[-2.338,6.658],[1.064,5.858],[4.171,7.199],[-1.281,-5.803],[1.833,-5.888],[0,0],[1.239,-7.664],[11.296,-4.551],[-14.984,-0.955],[-0.993,14.774]],"o":[[5.921,-3.301],[1.671,7.075],[0.42,12.2],[-4.565,5.407],[-4.495,2.602],[-4.457,-0.281],[-4.977,-0.633],[-4.072,-3.966],[-4.995,-4.424],[-4.337,-5.758],[-3.395,-12.24],[1.371,-8.028],[3.67,0.698],[11.244,7.381],[4.005,0.024],[5.584,-4.487],[5.135,-6.149],[1.951,-5.557],[-0.767,-4.222],[12.671,0.949],[1.504,6.815],[-2.757,8.856],[0,0],[-5.261,22.086],[2.046,3.574],[6.116,0.39],[0.918,-13.666]],"v":[[39.032,9.162],[53.907,32.662],[59.657,59.162],[46.657,88.913],[20.408,105.788],[-4.048,111.44],[-21.604,109.121],[-32.928,102.427],[-44.476,91.14],[-61.335,75.494],[-78.842,40.66],[-80.298,3.891],[-74.343,-9.086],[-60.772,8.384],[-36.036,16.431],[-14.882,9.473],[-2.37,-2.302],[8.415,-21.921],[8.264,-37.372],[-0.468,-56.337],[27.449,-41.203],[31.87,-20],[24.695,0.009],[18.964,22.276],[-16.843,57.162],[8.337,68.972],[35.659,45.653]],"c":true}],"h":1},{"t":51.52,"s":[{"i":[[-1.513,-2.67],[-2.878,-8.701],[0.262,-5.939],[3.42,-4.051],[5.92,-3.427],[14.626,0.921],[5.681,1.991],[4.125,2.333],[4.634,2.667],[7.788,8.242],[2.967,13.509],[-1.776,13.285],[-5.58,2.573],[-5.408,-12.698],[-12.521,3.553],[-2.666,7.076],[1.26,9.289],[-5.837,10.158],[-0.247,7.983],[-2.826,1.061],[-4.371,-7.435],[0,0],[-4.23,-5.402],[-2.44,-2.852],[-2.679,-3.535],[-1.125,-1.465],[-1.305,-1.643]],"o":[[2.734,4.824],[2.671,8.075],[-0.829,18.825],[-4.565,5.407],[-4.495,2.602],[-4.458,-0.281],[-4.735,-1.659],[-6.745,-3.815],[-5.696,-3.278],[-4.951,-5.24],[-2.262,-10.3],[1.585,-11.857],[3.393,-1.564],[2.599,6.103],[8.613,-2.444],[1.13,-3],[-1.326,-9.776],[-0.213,-4.717],[0.368,-11.871],[6.796,-2.551],[5.064,8.615],[0,0],[2.314,2.955],[2.884,3.37],[1.115,1.472],[1.277,1.664],[1.908,2.403]],"v":[[70.719,7.412],[78.782,24.662],[82.157,50.787],[58.782,88.663],[32.408,107.663],[0.952,110.94],[-17.229,105.996],[-32.553,99.052],[-47.226,91.39],[-62.96,78.245],[-77.342,49.285],[-78.633,17.719],[-68.218,-4.711],[-52.397,22.259],[-27.161,30.306],[-11.382,15.786],[-15.557,-8.927],[-18.835,-38.796],[-14.915,-61.142],[-10.593,-88.837],[11.823,-62.203],[30.12,-44.75],[42.07,-27.991],[49.714,-19.724],[58.032,-9.338],[61.087,-4.716],[65.222,0.028]],"c":true}],"h":1},{"t":53.688,"s":[{"i":[[2.876,-2.468],[4.32,-1.196],[7.92,7.92],[-2.289,10.729],[1.499,9.249],[0.094,2.475],[-0.086,1.46],[-0.213,1.336],[-0.192,0.845],[-0.392,1.208],[-0.326,0.835],[-1.418,-2.375],[-1.242,-1.613],[-0.986,-1.058],[-1.986,-1.756],[-1.659,-1.478],[-1.09,-1.079],[-1.894,-4.494],[-0.279,-0.896],[-0.217,-1.131],[-0.028,-0.106],[-0.05,-0.229],[-0.058,-0.388],[-0.035,-0.347],[-0.024,-0.671],[0.993,-3.609],[1.163,-2.266]],"o":[[-3.356,2.88],[-13.437,4.796],[14.279,-3.367],[2.049,-9.604],[-0.431,-2.657],[-0.057,-1.495],[0.079,-1.345],[0.135,-0.843],[0.27,-1.192],[0.267,-0.822],[1.274,2.548],[1.122,1.879],[0.901,1.17],[1.844,1.98],[1.692,1.496],[1.158,1.032],[3.284,3.248],[0.35,0.829],[0.321,1.031],[0.03,0.106],[0.06,0.229],[0.083,0.385],[0.051,0.342],[0.065,0.642],[0.129,3.573],[-0.68,2.473],[-1.813,3.532]],"v":[[27.776,64.863],[14.572,72.063],[-20.222,62.226],[5.09,37.624],[1.734,10.861],[0.928,3.191],[0.968,-1.236],[1.404,-5.252],[1.893,-7.782],[2.884,-11.378],[3.772,-13.863],[7.797,-6.409],[11.338,-1.135],[14.175,2.199],[19.971,7.749],[25.027,12.177],[28.411,15.331],[36.469,26.635],[37.413,29.221],[38.222,32.462],[38.308,32.779],[38.472,33.467],[38.684,34.626],[38.813,35.658],[38.942,37.624],[37.618,48.537],[34.843,55.691]],"c":true}],"h":1},{"t":55.857,"s":[{"i":[[1.749,-2.028],[5.503,-0.827],[9.099,1.498],[0.974,10.927],[2.782,8.947],[0.586,2.966],[0.246,1.826],[0.116,1.643],[0.024,1],[-0.077,1.298],[-0.108,0.814],[-1.521,-3.381],[-1.457,-1.423],[-1.079,-1.055],[-2.002,-2.027],[-1.607,-1.739],[-1.042,-1.21],[-2.179,-3.307],[-0.345,-0.604],[-0.316,-0.684],[-0.035,-0.063],[-0.068,-0.138],[-0.097,-0.237],[-0.074,-0.215],[-0.111,-0.422],[-0.102,-2.446],[0.305,-1.622]],"o":[[-2.042,2.367],[-5.503,0.827],[6.455,-5.576],[-0.835,-9.363],[-0.799,-2.57],[-0.354,-1.792],[-0.227,-1.682],[-0.073,-1.036],[-0.033,-1.41],[0.052,-0.884],[1.099,5.046],[1.203,2.675],[1.056,1.032],[2.018,1.974],[1.705,1.727],[1.122,1.214],[3.138,3.645],[0.402,0.61],[0.397,0.694],[0.037,0.063],[0.076,0.136],[0.114,0.231],[0.085,0.209],[0.137,0.398],[0.592,2.25],[0.07,1.676],[-0.475,2.528]],"v":[[31.811,49.14],[19.353,55.775],[-2.449,56.074],[13.266,33.795],[4.86,8.209],[2.755,-0.191],[1.849,-5.638],[1.33,-10.641],[1.184,-13.699],[1.246,-17.773],[1.485,-20.324],[5.419,-7.59],[9.41,-1.397],[12.618,1.735],[18.68,7.747],[23.667,12.951],[26.92,16.59],[30.79,23.029],[31.912,24.85],[32.983,26.918],[33.09,27.106],[33.305,27.516],[33.621,28.219],[33.859,28.854],[34.227,30.083],[35.359,37.218],[35.036,42.194]],"c":true}],"h":1},{"t":58.027,"s":[{"i":[[0.748,-0.905],[4.468,-1.427],[1.404,-0.338],[1.108,10.686],[4.007,8.469],[1.014,3.986],[0.432,2.494],[0.214,2.18],[0.053,1.27],[-0.108,1.472],[-0.166,0.805],[-2.17,-4.293],[-2.289,-2.609],[-0.92,-1.07],[-1.519,-1.894],[-1.136,-1.565],[-0.712,-1.081],[-1.344,-3.314],[-0.219,-0.618],[-0.212,-0.723],[-0.025,-0.067],[-0.047,-0.146],[-0.061,-0.249],[-0.042,-0.223],[-0.048,-0.434],[0.434,-2.197],[0.467,-1.263]],"o":[[-1.991,2.409],[-3.503,1.119],[2.068,-3.392],[-1.013,-9.768],[-1.373,-2.902],[-0.613,-2.408],[-0.398,-2.297],[-0.135,-1.375],[-0.074,-1.791],[0.073,-1.002],[0.737,5.111],[1.717,3.396],[0.974,1.11],[1.72,2.001],[1.293,1.613],[0.793,1.093],[2.144,3.255],[0.248,0.611],[0.252,0.711],[0.027,0.067],[0.055,0.146],[0.079,0.245],[0.054,0.219],[0.077,0.413],[0.257,2.312],[-0.298,1.505],[-0.728,1.968]],"v":[[24.677,39.955],[16.33,47.362],[7.914,48.813],[11.957,28.631],[2.944,3.308],[-0.68,-7.288],[-2.256,-14.698],[-3.182,-21.459],[-3.465,-25.439],[-3.42,-30.366],[-3.063,-33.086],[1.442,-18.857],[7.523,-9.788],[10.364,-6.521],[15.227,-0.69],[18.873,4.071],[21.132,7.329],[26.389,17.12],[27.089,18.964],[27.785,21.115],[27.863,21.316],[28.017,21.754],[28.226,22.495],[28.369,23.159],[28.554,24.428],[28.19,31.31],[27.011,35.5]],"c":true}],"h":1},{"t":60.196,"s":[{"i":[[0.67,-0.432],[1.626,0.109],[1.975,1.349],[1.979,2.598],[1.309,2.769],[0.805,2.485],[0.504,2.02],[0.106,1.975],[-0.234,2.284],[-0.907,3.533],[0,0],[-0.839,-6.275],[-1.011,-4.1],[-0.658,-1.188],[-1.301,-1.702],[-1.394,-1.037],[-1.096,-0.657],[-0.897,-0.713],[-0.207,-0.164],[-0.123,-0.116],[-0.089,-0.108],[-0.145,-0.205],[-0.213,-0.437],[-0.276,-0.521],[-0.238,-0.832],[0.025,-1.261],[0.212,-0.672]],"o":[[-1.369,0.884],[-2.386,-0.159],[-2.697,-1.842],[-1.856,-2.436],[-1.116,-2.362],[-0.642,-1.981],[-0.478,-1.919],[-0.123,-2.293],[0.372,-3.629],[0.9,-3.505],[0,0],[0.56,4.186],[0.325,1.318],[1.037,1.874],[1.055,1.38],[1.026,0.763],[0.983,0.589],[0.206,0.164],[0.133,0.105],[0.102,0.096],[0.159,0.195],[0.281,0.397],[0.258,0.53],[0.405,0.765],[0.347,1.213],[-0.014,0.705],[-0.24,0.76]],"v":[[22.866,17.805],[18.213,19.302],[11.403,17.039],[4.59,9.999],[-0.016,2.049],[-2.656,-5.331],[-4.356,-11.343],[-5.6,-17.143],[-6.786,-24.008],[-5.906,-34.88],[1.459,-48.426],[0.293,-26.147],[4.525,-13.573],[6.158,-9.842],[9.596,-4.414],[13.192,-0.641],[16.712,0.882],[19.37,3.063],[20.021,3.513],[20.386,3.867],[20.697,4.15],[21.126,4.771],[21.978,5.955],[22.521,7.638],[24.001,9.772],[24.21,13.55],[23.885,15.641]],"c":true}],"h":1},{"t":62.365,"s":[{"i":[[0.527,-0.274],[2.393,0.207],[0.731,0.116],[-1.494,5.161],[0.303,4.698],[-0.272,2.042],[-0.266,1.238],[-0.311,1.051],[-0.215,0.598],[-0.33,0.661],[-0.231,0.34],[-0.219,-2.408],[-0.595,-1.652],[-0.235,-0.674],[-0.364,-1.172],[-0.244,-0.945],[-0.134,-0.639],[-0.012,-1.795],[0.013,-0.329],[0.036,-0.376],[0.001,-0.036],[0.005,-0.077],[0.018,-0.127],[0.022,-0.111],[0.059,-0.21],[0.622,-0.932],[0.461,-0.494]],"o":[[-1.402,0.728],[-1.876,-0.163],[1.624,-1.168],[1.366,-4.718],[-0.104,-1.61],[0.164,-1.233],[0.245,-1.14],[0.196,-0.663],[0.304,-0.843],[0.224,-0.45],[-0.616,2.509],[0.174,1.905],[0.253,0.703],[0.439,1.26],[0.31,0.998],[0.17,0.66],[0.403,1.923],[0.002,0.331],[-0.015,0.378],[0,0.036],[-0.001,0.078],[-0.009,0.129],[-0.016,0.112],[-0.041,0.206],[-0.315,1.12],[-0.426,0.639],[-0.718,0.77]],"v":[[9.16,-27.421],[3.793,-25.614],[-0.481,-26.577],[5.257,-35.132],[5.762,-48.603],[6.044,-54.211],[6.696,-57.947],[7.535,-61.255],[8.153,-63.152],[9.106,-65.424],[9.79,-66.614],[9.24,-59.153],[10.415,-53.775],[11.147,-51.711],[12.356,-48.068],[13.188,-45.157],[13.645,-43.21],[14.292,-37.658],[14.276,-36.668],[14.2,-35.538],[14.2,-35.429],[14.19,-35.197],[14.149,-34.813],[14.091,-34.478],[13.939,-33.855],[12.465,-30.74],[11.112,-29.03]],"c":true}],"h":1},{"t":65.077,"s":[{"i":[[-2.296,4.176],[-2.106,-8.919],[0.167,-5.943],[0.42,-7.176],[5.92,-3.427],[6.79,-0.416],[5.671,1.632],[6.809,3.878],[3.378,5.068],[2.862,6.947],[0.003,0.009],[-0.073,2.675],[-0.848,0.078],[-0.278,-0.128],[-0.72,-0.594],[-0.655,-0.625],[-0.438,-0.443],[-0.551,-0.611],[-0.058,-0.065],[0,0],[-0.085,-0.096],[-0.522,-0.576],[-1.502,-1.59],[-1.513,-1.505],[-2.108,-1.422],[-12.182,8.776],[-2.56,14.584]],"o":[[2.296,-4.175],[1.671,7.075],[-0.252,8.969],[-0.414,7.064],[-3.625,2.098],[-4.102,0.251],[-5.223,-1.503],[-4.896,-2.789],[-4.764,-7.148],[-3.707,-8.997],[0.025,0.029],[0.058,-2.116],[0.187,-0.017],[0.521,0.24],[0.614,0.506],[0.457,0.437],[1.319,1.334],[0.102,0.113],[0.066,0.074],[0,0],[0.185,0.207],[0.876,0.966],[1.322,1.399],[2.8,2.784],[2.243,1.513],[5.872,-4.23],[1.543,-8.791]],"v":[[24.032,37.662],[31.282,37.537],[33.032,55.287],[30.032,82.038],[20.533,109.288],[5.265,114.143],[-9.316,112.311],[-27.303,104.427],[-39.597,92.148],[-50.71,69.62],[-57.217,54.285],[-57.409,48.654],[-56.218,44.539],[-55.514,44.713],[-53.613,46.015],[-51.687,47.742],[-50.336,49.072],[-47.31,52.281],[-47.07,52.549],[-46.968,52.663],[-46.838,52.809],[-45.756,54.012],[-42.088,57.975],[-37.767,62.419],[-29.968,69.287],[-0.413,76.097],[14.534,56.028]],"c":true}],"h":1},{"t":67.246,"s":[{"i":[[-4.162,2.32],[-2.106,-8.919],[-0.205,-5.942],[3.42,-4.051],[5.92,-3.427],[14.626,0.921],[6.806,0.866],[3.468,3.377],[4.375,3.874],[5.791,7.688],[3.696,13.328],[-1.733,10.148],[-2.257,-0.429],[-11.651,-7.647],[-11.387,-0.069],[-5.942,4.774],[-4.636,5.552],[-2.338,6.658],[1.064,5.858],[4.171,7.199],[-1.281,-5.803],[1.833,-5.888],[0,0],[1.239,-7.664],[11.296,-4.551],[-14.984,-0.955],[-0.993,14.774]],"o":[[5.921,-3.301],[1.671,7.075],[0.42,12.2],[-4.565,5.407],[-4.495,2.602],[-4.457,-0.281],[-4.977,-0.633],[-4.072,-3.966],[-4.995,-4.424],[-4.337,-5.758],[-3.395,-12.24],[1.371,-8.028],[3.67,0.698],[11.244,7.381],[4.005,0.024],[5.584,-4.487],[5.135,-6.149],[1.951,-5.557],[-0.767,-4.222],[12.671,0.949],[1.504,6.815],[-2.757,8.856],[0,0],[-5.261,22.086],[2.046,3.574],[6.116,0.39],[0.918,-13.666]],"v":[[39.032,9.162],[53.907,32.662],[59.657,59.162],[46.657,88.913],[20.408,105.788],[-4.048,111.44],[-21.604,109.121],[-32.928,102.427],[-44.476,91.14],[-61.335,75.494],[-78.842,40.66],[-80.298,3.891],[-74.343,-9.086],[-60.772,8.384],[-36.036,16.431],[-14.882,9.473],[-2.37,-2.302],[8.415,-21.921],[8.264,-37.372],[-0.468,-56.337],[27.449,-41.203],[31.87,-20],[24.695,0.009],[18.964,22.276],[-16.843,57.162],[8.337,68.972],[35.659,45.653]],"c":true}],"h":1},{"t":69.415,"s":[{"i":[[-1.513,-2.67],[-2.878,-8.701],[0.262,-5.939],[3.42,-4.051],[5.92,-3.427],[14.626,0.921],[5.681,1.991],[4.125,2.333],[4.634,2.667],[7.788,8.242],[2.967,13.509],[-1.776,13.285],[-5.58,2.573],[-5.408,-12.698],[-12.521,3.553],[-2.666,7.076],[1.26,9.289],[-5.837,10.158],[-0.247,7.983],[-2.826,1.061],[-4.371,-7.435],[0,0],[-4.23,-5.402],[-2.44,-2.852],[-2.679,-3.535],[-1.125,-1.465],[-1.305,-1.643]],"o":[[2.734,4.824],[2.671,8.075],[-0.829,18.825],[-4.565,5.407],[-4.495,2.602],[-4.458,-0.281],[-4.735,-1.659],[-6.745,-3.815],[-5.696,-3.278],[-4.951,-5.24],[-2.262,-10.3],[1.585,-11.857],[3.393,-1.564],[2.599,6.103],[8.613,-2.444],[1.13,-3],[-1.326,-9.776],[-0.213,-4.717],[0.368,-11.871],[6.796,-2.551],[5.064,8.615],[0,0],[2.314,2.955],[2.884,3.37],[1.115,1.472],[1.277,1.664],[1.908,2.403]],"v":[[70.719,7.412],[78.782,24.662],[82.157,50.787],[58.782,88.663],[32.408,107.663],[0.952,110.94],[-17.229,105.996],[-32.553,99.052],[-47.226,91.39],[-62.96,78.245],[-77.342,49.285],[-78.633,17.719],[-68.218,-4.711],[-52.397,22.259],[-27.161,30.306],[-11.382,15.786],[-15.557,-8.927],[-18.835,-38.796],[-14.915,-61.142],[-10.593,-88.837],[11.823,-62.203],[30.12,-44.75],[42.07,-27.991],[49.714,-19.724],[58.032,-9.338],[61.087,-4.716],[65.222,0.028]],"c":true}],"h":1},{"t":71.585,"s":[{"i":[[2.876,-2.468],[4.32,-1.196],[7.92,7.92],[-2.289,10.729],[1.499,9.249],[0.094,2.475],[-0.086,1.46],[-0.213,1.336],[-0.192,0.845],[-0.392,1.208],[-0.326,0.835],[-1.418,-2.375],[-1.242,-1.613],[-0.986,-1.058],[-1.986,-1.756],[-1.659,-1.478],[-1.09,-1.079],[-1.894,-4.494],[-0.279,-0.896],[-0.217,-1.131],[-0.028,-0.106],[-0.05,-0.229],[-0.058,-0.388],[-0.035,-0.347],[-0.024,-0.671],[0.993,-3.609],[1.163,-2.266]],"o":[[-3.356,2.88],[-13.437,4.796],[14.279,-3.367],[2.049,-9.604],[-0.431,-2.657],[-0.057,-1.495],[0.079,-1.345],[0.135,-0.843],[0.27,-1.192],[0.267,-0.822],[1.274,2.548],[1.122,1.879],[0.901,1.17],[1.844,1.98],[1.692,1.496],[1.158,1.032],[3.284,3.248],[0.35,0.829],[0.321,1.031],[0.03,0.106],[0.06,0.229],[0.083,0.385],[0.051,0.342],[0.065,0.642],[0.129,3.573],[-0.68,2.473],[-1.813,3.532]],"v":[[27.776,64.863],[14.572,72.063],[-20.222,62.226],[5.09,37.624],[1.734,10.861],[0.928,3.191],[0.968,-1.236],[1.404,-5.252],[1.893,-7.782],[2.884,-11.378],[3.772,-13.863],[7.797,-6.409],[11.338,-1.135],[14.175,2.199],[19.971,7.749],[25.027,12.177],[28.411,15.331],[36.469,26.635],[37.413,29.221],[38.222,32.462],[38.308,32.779],[38.472,33.467],[38.684,34.626],[38.813,35.658],[38.942,37.624],[37.618,48.537],[34.843,55.691]],"c":true}],"h":1},{"t":73.754,"s":[{"i":[[1.749,-2.028],[5.503,-0.827],[9.099,1.498],[0.974,10.927],[2.782,8.947],[0.586,2.966],[0.246,1.826],[0.116,1.643],[0.024,1],[-0.077,1.298],[-0.108,0.814],[-1.521,-3.381],[-1.457,-1.423],[-1.079,-1.055],[-2.002,-2.027],[-1.607,-1.739],[-1.042,-1.21],[-2.179,-3.307],[-0.345,-0.604],[-0.316,-0.684],[-0.035,-0.063],[-0.068,-0.138],[-0.097,-0.237],[-0.074,-0.215],[-0.111,-0.422],[-0.102,-2.446],[0.305,-1.622]],"o":[[-2.042,2.367],[-5.503,0.827],[6.455,-5.576],[-0.835,-9.363],[-0.799,-2.57],[-0.354,-1.792],[-0.227,-1.682],[-0.073,-1.036],[-0.033,-1.41],[0.052,-0.884],[1.099,5.046],[1.203,2.675],[1.056,1.032],[2.018,1.974],[1.705,1.727],[1.122,1.214],[3.138,3.645],[0.402,0.61],[0.397,0.694],[0.037,0.063],[0.076,0.136],[0.114,0.231],[0.085,0.209],[0.137,0.398],[0.592,2.25],[0.07,1.676],[-0.475,2.528]],"v":[[31.811,49.14],[19.353,55.775],[-2.449,56.074],[13.266,33.795],[4.86,8.209],[2.755,-0.191],[1.849,-5.638],[1.33,-10.641],[1.184,-13.699],[1.246,-17.773],[1.485,-20.324],[5.419,-7.59],[9.41,-1.397],[12.618,1.735],[18.68,7.747],[23.667,12.951],[26.92,16.59],[30.79,23.029],[31.912,24.85],[32.983,26.918],[33.09,27.106],[33.305,27.516],[33.621,28.219],[33.859,28.854],[34.227,30.083],[35.359,37.218],[35.036,42.194]],"c":true}],"h":1},{"t":75.923,"s":[{"i":[[0.748,-0.905],[4.468,-1.427],[1.404,-0.338],[1.108,10.686],[4.007,8.469],[1.014,3.986],[0.432,2.494],[0.214,2.18],[0.053,1.27],[-0.108,1.472],[-0.166,0.805],[-2.17,-4.293],[-2.289,-2.609],[-0.92,-1.07],[-1.519,-1.894],[-1.136,-1.565],[-0.712,-1.081],[-1.344,-3.314],[-0.219,-0.618],[-0.212,-0.723],[-0.025,-0.067],[-0.047,-0.146],[-0.061,-0.249],[-0.042,-0.223],[-0.048,-0.434],[0.434,-2.197],[0.467,-1.263]],"o":[[-1.991,2.409],[-3.503,1.119],[2.068,-3.392],[-1.013,-9.768],[-1.373,-2.902],[-0.613,-2.408],[-0.398,-2.297],[-0.135,-1.375],[-0.074,-1.791],[0.073,-1.002],[0.737,5.111],[1.717,3.396],[0.974,1.11],[1.72,2.001],[1.293,1.613],[0.793,1.093],[2.144,3.255],[0.248,0.611],[0.252,0.711],[0.027,0.067],[0.055,0.146],[0.079,0.245],[0.054,0.219],[0.077,0.413],[0.257,2.312],[-0.298,1.505],[-0.728,1.968]],"v":[[24.677,39.955],[16.33,47.362],[7.914,48.813],[11.957,28.631],[2.944,3.308],[-0.68,-7.288],[-2.256,-14.698],[-3.182,-21.459],[-3.465,-25.439],[-3.42,-30.366],[-3.063,-33.086],[1.442,-18.857],[7.523,-9.788],[10.364,-6.521],[15.227,-0.69],[18.873,4.071],[21.132,7.329],[26.389,17.12],[27.089,18.964],[27.785,21.115],[27.863,21.316],[28.017,21.754],[28.226,22.495],[28.369,23.159],[28.554,24.428],[28.19,31.31],[27.011,35.5]],"c":true}],"h":1},{"t":78.093,"s":[{"i":[[0.67,-0.432],[1.626,0.109],[1.975,1.349],[1.979,2.598],[1.309,2.769],[0.805,2.485],[0.504,2.02],[0.106,1.975],[-0.234,2.284],[-0.907,3.533],[0,0],[-0.839,-6.275],[-1.011,-4.1],[-0.658,-1.188],[-1.301,-1.702],[-1.394,-1.037],[-1.096,-0.657],[-0.897,-0.713],[-0.207,-0.164],[-0.123,-0.116],[-0.089,-0.108],[-0.145,-0.205],[-0.213,-0.437],[-0.276,-0.521],[-0.238,-0.832],[0.025,-1.261],[0.212,-0.672]],"o":[[-1.369,0.884],[-2.386,-0.159],[-2.697,-1.842],[-1.856,-2.436],[-1.116,-2.362],[-0.642,-1.981],[-0.478,-1.919],[-0.123,-2.293],[0.372,-3.629],[0.9,-3.505],[0,0],[0.56,4.186],[0.325,1.318],[1.037,1.874],[1.055,1.38],[1.026,0.763],[0.983,0.589],[0.206,0.164],[0.133,0.105],[0.102,0.096],[0.159,0.195],[0.281,0.397],[0.258,0.53],[0.405,0.765],[0.347,1.213],[-0.014,0.705],[-0.24,0.76]],"v":[[22.866,17.805],[18.213,19.302],[11.403,17.039],[4.59,9.999],[-0.016,2.049],[-2.656,-5.331],[-4.356,-11.343],[-5.6,-17.143],[-6.786,-24.008],[-5.906,-34.88],[1.459,-48.426],[0.293,-26.147],[4.525,-13.573],[6.158,-9.842],[9.596,-4.414],[13.192,-0.641],[16.712,0.882],[19.37,3.063],[20.021,3.513],[20.386,3.867],[20.697,4.15],[21.126,4.771],[21.978,5.955],[22.521,7.638],[24.001,9.772],[24.21,13.55],[23.885,15.641]],"c":true}],"h":1},{"t":80.262,"s":[{"i":[[0.527,-0.274],[2.393,0.207],[0.731,0.116],[-1.494,5.161],[0.303,4.698],[-0.272,2.042],[-0.266,1.238],[-0.311,1.051],[-0.215,0.598],[-0.33,0.661],[-0.231,0.34],[-0.219,-2.408],[-0.595,-1.652],[-0.235,-0.674],[-0.364,-1.172],[-0.244,-0.945],[-0.134,-0.639],[-0.012,-1.795],[0.013,-0.329],[0.036,-0.376],[0.001,-0.036],[0.005,-0.077],[0.018,-0.127],[0.022,-0.111],[0.059,-0.21],[0.622,-0.932],[0.461,-0.494]],"o":[[-1.402,0.728],[-1.876,-0.163],[1.624,-1.168],[1.366,-4.718],[-0.104,-1.61],[0.164,-1.233],[0.245,-1.14],[0.196,-0.663],[0.304,-0.843],[0.224,-0.45],[-0.616,2.509],[0.174,1.905],[0.253,0.703],[0.439,1.26],[0.31,0.998],[0.17,0.66],[0.403,1.923],[0.002,0.331],[-0.015,0.378],[0,0.036],[-0.001,0.078],[-0.009,0.129],[-0.016,0.112],[-0.041,0.206],[-0.315,1.12],[-0.426,0.639],[-0.718,0.77]],"v":[[9.16,-27.421],[3.793,-25.614],[-0.481,-26.577],[5.257,-35.132],[5.762,-48.603],[6.044,-54.211],[6.696,-57.947],[7.535,-61.255],[8.153,-63.152],[9.106,-65.424],[9.79,-66.614],[9.24,-59.153],[10.415,-53.775],[11.147,-51.711],[12.356,-48.068],[13.188,-45.157],[13.645,-43.21],[14.292,-37.658],[14.276,-36.668],[14.2,-35.538],[14.2,-35.429],[14.19,-35.197],[14.149,-34.813],[14.091,-34.478],[13.939,-33.855],[12.465,-30.74],[11.112,-29.03]],"c":true}],"h":1},{"t":82.973,"s":[{"i":[[-2.296,4.176],[-2.106,-8.919],[0.167,-5.943],[0.42,-7.176],[5.92,-3.427],[6.79,-0.416],[5.671,1.632],[6.809,3.878],[3.378,5.068],[2.862,6.947],[0.003,0.009],[-0.073,2.675],[-0.848,0.078],[-0.278,-0.128],[-0.72,-0.594],[-0.655,-0.625],[-0.438,-0.443],[-0.551,-0.611],[-0.058,-0.065],[0,0],[-0.085,-0.096],[-0.522,-0.576],[-1.502,-1.59],[-1.513,-1.505],[-2.108,-1.422],[-12.182,8.776],[-2.56,14.584]],"o":[[2.296,-4.175],[1.671,7.075],[-0.252,8.969],[-0.414,7.064],[-3.625,2.098],[-4.102,0.251],[-5.223,-1.503],[-4.896,-2.789],[-4.764,-7.148],[-3.707,-8.997],[0.025,0.029],[0.058,-2.116],[0.187,-0.017],[0.521,0.24],[0.614,0.506],[0.457,0.437],[1.319,1.334],[0.102,0.113],[0.066,0.074],[0,0],[0.185,0.207],[0.876,0.966],[1.322,1.399],[2.8,2.784],[2.243,1.513],[5.872,-4.23],[1.543,-8.791]],"v":[[24.032,37.662],[31.282,37.537],[33.032,55.287],[30.032,82.038],[20.533,109.288],[5.265,114.143],[-9.316,112.311],[-27.303,104.427],[-39.597,92.148],[-50.71,69.62],[-57.217,54.285],[-57.409,48.654],[-56.218,44.539],[-55.514,44.713],[-53.613,46.015],[-51.687,47.742],[-50.336,49.072],[-47.31,52.281],[-47.07,52.549],[-46.968,52.663],[-46.838,52.809],[-45.756,54.012],[-42.088,57.975],[-37.767,62.419],[-29.968,69.287],[-0.413,76.097],[14.534,56.028]],"c":true}],"h":1},{"t":85.143,"s":[{"i":[[-4.162,2.32],[-2.106,-8.919],[-0.205,-5.942],[3.42,-4.051],[5.92,-3.427],[14.626,0.921],[6.806,0.866],[3.468,3.377],[4.375,3.874],[5.791,7.688],[3.696,13.328],[-1.733,10.148],[-2.257,-0.429],[-11.651,-7.647],[-11.387,-0.069],[-5.942,4.774],[-4.636,5.552],[-2.338,6.658],[1.064,5.858],[4.171,7.199],[-1.281,-5.803],[1.833,-5.888],[0,0],[1.239,-7.664],[11.296,-4.551],[-14.984,-0.955],[-0.993,14.774]],"o":[[5.921,-3.301],[1.671,7.075],[0.42,12.2],[-4.565,5.407],[-4.495,2.602],[-4.457,-0.281],[-4.977,-0.633],[-4.072,-3.966],[-4.995,-4.424],[-4.337,-5.758],[-3.395,-12.24],[1.371,-8.028],[3.67,0.698],[11.244,7.381],[4.005,0.024],[5.584,-4.487],[5.135,-6.149],[1.951,-5.557],[-0.767,-4.222],[12.671,0.949],[1.504,6.815],[-2.757,8.856],[0,0],[-5.261,22.086],[2.046,3.574],[6.116,0.39],[0.918,-13.666]],"v":[[39.032,9.162],[53.907,32.662],[59.657,59.162],[46.657,88.913],[20.408,105.788],[-4.048,111.44],[-21.604,109.121],[-32.928,102.427],[-44.476,91.14],[-61.335,75.494],[-78.842,40.66],[-80.298,3.891],[-74.343,-9.086],[-60.772,8.384],[-36.036,16.431],[-14.882,9.473],[-2.37,-2.302],[8.415,-21.921],[8.264,-37.372],[-0.468,-56.337],[27.449,-41.203],[31.87,-20],[24.695,0.009],[18.964,22.276],[-16.843,57.162],[8.337,68.972],[35.659,45.653]],"c":true}],"h":1},{"t":87.312,"s":[{"i":[[-1.513,-2.67],[-2.878,-8.701],[0.262,-5.939],[3.42,-4.051],[5.92,-3.427],[14.626,0.921],[5.681,1.991],[4.125,2.333],[4.634,2.667],[7.788,8.242],[2.967,13.509],[-1.776,13.285],[-5.58,2.573],[-5.408,-12.698],[-12.521,3.553],[-2.666,7.076],[1.26,9.289],[-5.837,10.158],[-0.247,7.983],[-2.826,1.061],[-4.371,-7.435],[0,0],[-4.23,-5.402],[-2.44,-2.852],[-2.679,-3.535],[-1.125,-1.465],[-1.305,-1.643]],"o":[[2.734,4.824],[2.671,8.075],[-0.829,18.825],[-4.565,5.407],[-4.495,2.602],[-4.458,-0.281],[-4.735,-1.659],[-6.745,-3.815],[-5.696,-3.278],[-4.951,-5.24],[-2.262,-10.3],[1.585,-11.857],[3.393,-1.564],[2.599,6.103],[8.613,-2.444],[1.13,-3],[-1.326,-9.776],[-0.213,-4.717],[0.368,-11.871],[6.796,-2.551],[5.064,8.615],[0,0],[2.314,2.955],[2.884,3.37],[1.115,1.472],[1.277,1.664],[1.908,2.403]],"v":[[70.719,7.412],[78.782,24.662],[82.157,50.787],[58.782,88.663],[32.408,107.663],[0.952,110.94],[-17.229,105.996],[-32.553,99.052],[-47.226,91.39],[-62.96,78.245],[-77.342,49.285],[-78.633,17.719],[-68.218,-4.711],[-52.397,22.259],[-27.161,30.306],[-11.382,15.786],[-15.557,-8.927],[-18.835,-38.796],[-14.915,-61.142],[-10.593,-88.837],[11.823,-62.203],[30.12,-44.75],[42.07,-27.991],[49.714,-19.724],[58.032,-9.338],[61.087,-4.716],[65.222,0.028]],"c":true}],"h":1},{"t":89.48,"s":[{"i":[[2.876,-2.468],[4.32,-1.196],[7.92,7.92],[-2.289,10.729],[1.499,9.249],[0.094,2.475],[-0.086,1.46],[-0.213,1.336],[-0.192,0.845],[-0.392,1.208],[-0.326,0.835],[-1.418,-2.375],[-1.242,-1.613],[-0.986,-1.058],[-1.986,-1.756],[-1.659,-1.478],[-1.09,-1.079],[-1.894,-4.494],[-0.279,-0.896],[-0.217,-1.131],[-0.028,-0.106],[-0.05,-0.229],[-0.058,-0.388],[-0.035,-0.347],[-0.024,-0.671],[0.993,-3.609],[1.163,-2.266]],"o":[[-3.356,2.88],[-13.437,4.796],[14.279,-3.367],[2.049,-9.604],[-0.431,-2.657],[-0.057,-1.495],[0.079,-1.345],[0.135,-0.843],[0.27,-1.192],[0.267,-0.822],[1.274,2.548],[1.122,1.879],[0.901,1.17],[1.844,1.98],[1.692,1.496],[1.158,1.032],[3.284,3.248],[0.35,0.829],[0.321,1.031],[0.03,0.106],[0.06,0.229],[0.083,0.385],[0.051,0.342],[0.065,0.642],[0.129,3.573],[-0.68,2.473],[-1.813,3.532]],"v":[[27.776,64.863],[14.572,72.063],[-20.222,62.226],[5.09,37.624],[1.734,10.861],[0.928,3.191],[0.968,-1.236],[1.404,-5.252],[1.893,-7.782],[2.884,-11.378],[3.772,-13.863],[7.797,-6.409],[11.338,-1.135],[14.175,2.199],[19.971,7.749],[25.027,12.177],[28.411,15.331],[36.469,26.635],[37.413,29.221],[38.222,32.462],[38.308,32.779],[38.472,33.467],[38.684,34.626],[38.813,35.658],[38.942,37.624],[37.618,48.537],[34.843,55.691]],"c":true}],"h":1},{"t":91.65,"s":[{"i":[[1.749,-2.028],[5.503,-0.827],[9.099,1.498],[0.974,10.927],[2.782,8.947],[0.586,2.966],[0.246,1.826],[0.116,1.643],[0.024,1],[-0.077,1.298],[-0.108,0.814],[-1.521,-3.381],[-1.457,-1.423],[-1.079,-1.055],[-2.002,-2.027],[-1.607,-1.739],[-1.042,-1.21],[-2.179,-3.307],[-0.345,-0.604],[-0.316,-0.684],[-0.035,-0.063],[-0.068,-0.138],[-0.097,-0.237],[-0.074,-0.215],[-0.111,-0.422],[-0.102,-2.446],[0.305,-1.622]],"o":[[-2.042,2.367],[-5.503,0.827],[6.455,-5.576],[-0.835,-9.363],[-0.799,-2.57],[-0.354,-1.792],[-0.227,-1.682],[-0.073,-1.036],[-0.033,-1.41],[0.052,-0.884],[1.099,5.046],[1.203,2.675],[1.056,1.032],[2.018,1.974],[1.705,1.727],[1.122,1.214],[3.138,3.645],[0.402,0.61],[0.397,0.694],[0.037,0.063],[0.076,0.136],[0.114,0.231],[0.085,0.209],[0.137,0.398],[0.592,2.25],[0.07,1.676],[-0.475,2.528]],"v":[[31.811,49.14],[19.353,55.775],[-2.449,56.074],[13.266,33.795],[4.86,8.209],[2.755,-0.191],[1.849,-5.638],[1.33,-10.641],[1.184,-13.699],[1.246,-17.773],[1.485,-20.324],[5.419,-7.59],[9.41,-1.397],[12.618,1.735],[18.68,7.747],[23.667,12.951],[26.92,16.59],[30.79,23.029],[31.912,24.85],[32.983,26.918],[33.09,27.106],[33.305,27.516],[33.621,28.219],[33.859,28.854],[34.227,30.083],[35.359,37.218],[35.036,42.194]],"c":true}],"h":1},{"t":93.819,"s":[{"i":[[0.748,-0.905],[4.468,-1.427],[1.404,-0.338],[1.108,10.686],[4.007,8.469],[1.014,3.986],[0.432,2.494],[0.214,2.18],[0.053,1.27],[-0.108,1.472],[-0.166,0.805],[-2.17,-4.293],[-2.289,-2.609],[-0.92,-1.07],[-1.519,-1.894],[-1.136,-1.565],[-0.712,-1.081],[-1.344,-3.314],[-0.219,-0.618],[-0.212,-0.723],[-0.025,-0.067],[-0.047,-0.146],[-0.061,-0.249],[-0.042,-0.223],[-0.048,-0.434],[0.434,-2.197],[0.467,-1.263]],"o":[[-1.991,2.409],[-3.503,1.119],[2.068,-3.392],[-1.013,-9.768],[-1.373,-2.902],[-0.613,-2.408],[-0.398,-2.297],[-0.135,-1.375],[-0.074,-1.791],[0.073,-1.002],[0.737,5.111],[1.717,3.396],[0.974,1.11],[1.72,2.001],[1.293,1.613],[0.793,1.093],[2.144,3.255],[0.248,0.611],[0.252,0.711],[0.027,0.067],[0.055,0.146],[0.079,0.245],[0.054,0.219],[0.077,0.413],[0.257,2.312],[-0.298,1.505],[-0.728,1.968]],"v":[[24.677,39.955],[16.33,47.362],[7.914,48.813],[11.957,28.631],[2.944,3.308],[-0.68,-7.288],[-2.256,-14.698],[-3.182,-21.459],[-3.465,-25.439],[-3.42,-30.366],[-3.063,-33.086],[1.442,-18.857],[7.523,-9.788],[10.364,-6.521],[15.227,-0.69],[18.873,4.071],[21.132,7.329],[26.389,17.12],[27.089,18.964],[27.785,21.115],[27.863,21.316],[28.017,21.754],[28.226,22.495],[28.369,23.159],[28.554,24.428],[28.19,31.31],[27.011,35.5]],"c":true}],"h":1},{"t":95.988,"s":[{"i":[[0.67,-0.432],[1.626,0.109],[1.975,1.349],[1.979,2.598],[1.309,2.769],[0.805,2.485],[0.504,2.02],[0.106,1.975],[-0.234,2.284],[-0.907,3.533],[0,0],[-0.839,-6.275],[-1.011,-4.1],[-0.658,-1.188],[-1.301,-1.702],[-1.394,-1.037],[-1.096,-0.657],[-0.897,-0.713],[-0.207,-0.164],[-0.123,-0.116],[-0.089,-0.108],[-0.145,-0.205],[-0.213,-0.437],[-0.276,-0.521],[-0.238,-0.832],[0.025,-1.261],[0.212,-0.672]],"o":[[-1.369,0.884],[-2.386,-0.159],[-2.697,-1.842],[-1.856,-2.436],[-1.116,-2.362],[-0.642,-1.981],[-0.478,-1.919],[-0.123,-2.293],[0.372,-3.629],[0.9,-3.505],[0,0],[0.56,4.186],[0.325,1.318],[1.037,1.874],[1.055,1.38],[1.026,0.763],[0.983,0.589],[0.206,0.164],[0.133,0.105],[0.102,0.096],[0.159,0.195],[0.281,0.397],[0.258,0.53],[0.405,0.765],[0.347,1.213],[-0.014,0.705],[-0.24,0.76]],"v":[[22.866,17.805],[18.213,19.302],[11.403,17.039],[4.59,9.999],[-0.016,2.049],[-2.656,-5.331],[-4.356,-11.343],[-5.6,-17.143],[-6.786,-24.008],[-5.906,-34.88],[1.459,-48.426],[0.293,-26.147],[4.525,-13.573],[6.158,-9.842],[9.596,-4.414],[13.192,-0.641],[16.712,0.882],[19.37,3.063],[20.021,3.513],[20.386,3.867],[20.697,4.15],[21.126,4.771],[21.978,5.955],[22.521,7.638],[24.001,9.772],[24.21,13.55],[23.885,15.641]],"c":true}],"h":1},{"t":98.157,"s":[{"i":[[0.527,-0.274],[2.393,0.207],[0.731,0.116],[-1.494,5.161],[0.303,4.698],[-0.272,2.042],[-0.266,1.238],[-0.311,1.051],[-0.215,0.598],[-0.33,0.661],[-0.231,0.34],[-0.219,-2.408],[-0.595,-1.652],[-0.235,-0.674],[-0.364,-1.172],[-0.244,-0.945],[-0.134,-0.639],[-0.012,-1.795],[0.013,-0.329],[0.036,-0.376],[0.001,-0.036],[0.005,-0.077],[0.018,-0.127],[0.022,-0.111],[0.059,-0.21],[0.622,-0.932],[0.461,-0.494]],"o":[[-1.402,0.728],[-1.876,-0.163],[1.624,-1.168],[1.366,-4.718],[-0.104,-1.61],[0.164,-1.233],[0.245,-1.14],[0.196,-0.663],[0.304,-0.843],[0.224,-0.45],[-0.616,2.509],[0.174,1.905],[0.253,0.703],[0.439,1.26],[0.31,0.998],[0.17,0.66],[0.403,1.923],[0.002,0.331],[-0.015,0.378],[0,0.036],[-0.001,0.078],[-0.009,0.129],[-0.016,0.112],[-0.041,0.206],[-0.315,1.12],[-0.426,0.639],[-0.718,0.77]],"v":[[9.16,-27.421],[3.793,-25.614],[-0.481,-26.577],[5.257,-35.132],[5.762,-48.603],[6.044,-54.211],[6.696,-57.947],[7.535,-61.255],[8.153,-63.152],[9.106,-65.424],[9.79,-66.614],[9.24,-59.153],[10.415,-53.775],[11.147,-51.711],[12.356,-48.068],[13.188,-45.157],[13.645,-43.21],[14.292,-37.658],[14.276,-36.668],[14.2,-35.538],[14.2,-35.429],[14.19,-35.197],[14.149,-34.813],[14.091,-34.478],[13.939,-33.855],[12.465,-30.74],[11.112,-29.03]],"c":true}],"h":1},{"t":100.869,"s":[{"i":[[-2.296,4.176],[-2.106,-8.919],[0.167,-5.943],[0.42,-7.176],[5.92,-3.427],[6.79,-0.416],[5.671,1.632],[6.809,3.878],[3.378,5.068],[2.862,6.947],[0.003,0.009],[-0.073,2.675],[-0.848,0.078],[-0.278,-0.128],[-0.72,-0.594],[-0.655,-0.625],[-0.438,-0.443],[-0.551,-0.611],[-0.058,-0.065],[0,0],[-0.085,-0.096],[-0.522,-0.576],[-1.502,-1.59],[-1.513,-1.505],[-2.108,-1.422],[-12.182,8.776],[-2.56,14.584]],"o":[[2.296,-4.175],[1.671,7.075],[-0.252,8.969],[-0.414,7.064],[-3.625,2.098],[-4.102,0.251],[-5.223,-1.503],[-4.896,-2.789],[-4.764,-7.148],[-3.707,-8.997],[0.025,0.029],[0.058,-2.116],[0.187,-0.017],[0.521,0.24],[0.614,0.506],[0.457,0.437],[1.319,1.334],[0.102,0.113],[0.066,0.074],[0,0],[0.185,0.207],[0.876,0.966],[1.322,1.399],[2.8,2.784],[2.243,1.513],[5.872,-4.23],[1.543,-8.791]],"v":[[24.032,37.662],[31.282,37.537],[33.032,55.287],[30.032,82.038],[20.533,109.288],[5.265,114.143],[-9.316,112.311],[-27.303,104.427],[-39.597,92.148],[-50.71,69.62],[-57.217,54.285],[-57.409,48.654],[-56.218,44.539],[-55.514,44.713],[-53.613,46.015],[-51.687,47.742],[-50.336,49.072],[-47.31,52.281],[-47.07,52.549],[-46.968,52.663],[-46.838,52.809],[-45.756,54.012],[-42.088,57.975],[-37.767,62.419],[-29.968,69.287],[-0.413,76.097],[14.534,56.028]],"c":true}],"h":1},{"t":103.038,"s":[{"i":[[-4.162,2.32],[-2.106,-8.919],[-0.205,-5.942],[3.42,-4.051],[5.92,-3.427],[14.626,0.921],[6.806,0.866],[3.468,3.377],[4.375,3.874],[5.791,7.688],[3.696,13.328],[-1.733,10.148],[-2.257,-0.429],[-11.651,-7.647],[-11.387,-0.069],[-5.942,4.774],[-4.636,5.552],[-2.338,6.658],[1.064,5.858],[4.171,7.199],[-1.281,-5.803],[1.833,-5.888],[0,0],[1.239,-7.664],[11.296,-4.551],[-14.984,-0.955],[-0.993,14.774]],"o":[[5.921,-3.301],[1.671,7.075],[0.42,12.2],[-4.565,5.407],[-4.495,2.602],[-4.457,-0.281],[-4.977,-0.633],[-4.072,-3.966],[-4.995,-4.424],[-4.337,-5.758],[-3.395,-12.24],[1.371,-8.028],[3.67,0.698],[11.244,7.381],[4.005,0.024],[5.584,-4.487],[5.135,-6.149],[1.951,-5.557],[-0.767,-4.222],[12.671,0.949],[1.504,6.815],[-2.757,8.856],[0,0],[-5.261,22.086],[2.046,3.574],[6.116,0.39],[0.918,-13.666]],"v":[[39.032,9.162],[53.907,32.662],[59.657,59.162],[46.657,88.913],[20.408,105.788],[-4.048,111.44],[-21.604,109.121],[-32.928,102.427],[-44.476,91.14],[-61.335,75.494],[-78.842,40.66],[-80.298,3.891],[-74.343,-9.086],[-60.772,8.384],[-36.036,16.431],[-14.882,9.473],[-2.37,-2.302],[8.415,-21.921],[8.264,-37.372],[-0.468,-56.337],[27.449,-41.203],[31.87,-20],[24.695,0.009],[18.964,22.276],[-16.843,57.162],[8.337,68.972],[35.659,45.653]],"c":true}],"h":1},{"t":105.208,"s":[{"i":[[-1.513,-2.67],[-2.878,-8.701],[0.262,-5.939],[3.42,-4.051],[5.92,-3.427],[14.626,0.921],[5.681,1.991],[4.125,2.333],[4.634,2.667],[7.788,8.242],[2.967,13.509],[-1.776,13.285],[-5.58,2.573],[-5.408,-12.698],[-12.521,3.553],[-2.666,7.076],[1.26,9.289],[-5.837,10.158],[-0.247,7.983],[-2.826,1.061],[-4.371,-7.435],[0,0],[-4.23,-5.402],[-2.44,-2.852],[-2.679,-3.535],[-1.125,-1.465],[-1.305,-1.643]],"o":[[2.734,4.824],[2.671,8.075],[-0.829,18.825],[-4.565,5.407],[-4.495,2.602],[-4.458,-0.281],[-4.735,-1.659],[-6.745,-3.815],[-5.696,-3.278],[-4.951,-5.24],[-2.262,-10.3],[1.585,-11.857],[3.393,-1.564],[2.599,6.103],[8.613,-2.444],[1.13,-3],[-1.326,-9.776],[-0.213,-4.717],[0.368,-11.871],[6.796,-2.551],[5.064,8.615],[0,0],[2.314,2.955],[2.884,3.37],[1.115,1.472],[1.277,1.664],[1.908,2.403]],"v":[[70.719,7.412],[78.782,24.662],[82.157,50.787],[58.782,88.663],[32.408,107.663],[0.952,110.94],[-17.229,105.996],[-32.553,99.052],[-47.226,91.39],[-62.96,78.245],[-77.342,49.285],[-78.633,17.719],[-68.218,-4.711],[-52.397,22.259],[-27.161,30.306],[-11.382,15.786],[-15.557,-8.927],[-18.835,-38.796],[-14.915,-61.142],[-10.593,-88.837],[11.823,-62.203],[30.12,-44.75],[42.07,-27.991],[49.714,-19.724],[58.032,-9.338],[61.087,-4.716],[65.222,0.028]],"c":true}],"h":1},{"t":107.377,"s":[{"i":[[2.876,-2.468],[4.32,-1.196],[7.92,7.92],[-2.289,10.729],[1.499,9.249],[0.094,2.475],[-0.086,1.46],[-0.213,1.336],[-0.192,0.845],[-0.392,1.208],[-0.326,0.835],[-1.418,-2.375],[-1.242,-1.613],[-0.986,-1.058],[-1.986,-1.756],[-1.659,-1.478],[-1.09,-1.079],[-1.894,-4.494],[-0.279,-0.896],[-0.217,-1.131],[-0.028,-0.106],[-0.05,-0.229],[-0.058,-0.388],[-0.035,-0.347],[-0.024,-0.671],[0.993,-3.609],[1.163,-2.266]],"o":[[-3.356,2.88],[-13.437,4.796],[14.279,-3.367],[2.049,-9.604],[-0.431,-2.657],[-0.057,-1.495],[0.079,-1.345],[0.135,-0.843],[0.27,-1.192],[0.267,-0.822],[1.274,2.548],[1.122,1.879],[0.901,1.17],[1.844,1.98],[1.692,1.496],[1.158,1.032],[3.284,3.248],[0.35,0.829],[0.321,1.031],[0.03,0.106],[0.06,0.229],[0.083,0.385],[0.051,0.342],[0.065,0.642],[0.129,3.573],[-0.68,2.473],[-1.813,3.532]],"v":[[27.776,64.863],[14.572,72.063],[-20.222,62.226],[5.09,37.624],[1.734,10.861],[0.928,3.191],[0.968,-1.236],[1.404,-5.252],[1.893,-7.782],[2.884,-11.378],[3.772,-13.863],[7.797,-6.409],[11.338,-1.135],[14.175,2.199],[19.971,7.749],[25.027,12.177],[28.411,15.331],[36.469,26.635],[37.413,29.221],[38.222,32.462],[38.308,32.779],[38.472,33.467],[38.684,34.626],[38.813,35.658],[38.942,37.624],[37.618,48.537],[34.843,55.691]],"c":true}],"h":1},{"t":109.546,"s":[{"i":[[1.749,-2.028],[5.503,-0.827],[9.099,1.498],[0.974,10.927],[2.782,8.947],[0.586,2.966],[0.246,1.826],[0.116,1.643],[0.024,1],[-0.077,1.298],[-0.108,0.814],[-1.521,-3.381],[-1.457,-1.423],[-1.079,-1.055],[-2.002,-2.027],[-1.607,-1.739],[-1.042,-1.21],[-2.179,-3.307],[-0.345,-0.604],[-0.316,-0.684],[-0.035,-0.063],[-0.068,-0.138],[-0.097,-0.237],[-0.074,-0.215],[-0.111,-0.422],[-0.102,-2.446],[0.305,-1.622]],"o":[[-2.042,2.367],[-5.503,0.827],[6.455,-5.576],[-0.835,-9.363],[-0.799,-2.57],[-0.354,-1.792],[-0.227,-1.682],[-0.073,-1.036],[-0.033,-1.41],[0.052,-0.884],[1.099,5.046],[1.203,2.675],[1.056,1.032],[2.018,1.974],[1.705,1.727],[1.122,1.214],[3.138,3.645],[0.402,0.61],[0.397,0.694],[0.037,0.063],[0.076,0.136],[0.114,0.231],[0.085,0.209],[0.137,0.398],[0.592,2.25],[0.07,1.676],[-0.475,2.528]],"v":[[31.811,49.14],[19.353,55.775],[-2.449,56.074],[13.266,33.795],[4.86,8.209],[2.755,-0.191],[1.849,-5.638],[1.33,-10.641],[1.184,-13.699],[1.246,-17.773],[1.485,-20.324],[5.419,-7.59],[9.41,-1.397],[12.618,1.735],[18.68,7.747],[23.667,12.951],[26.92,16.59],[30.79,23.029],[31.912,24.85],[32.983,26.918],[33.09,27.106],[33.305,27.516],[33.621,28.219],[33.859,28.854],[34.227,30.083],[35.359,37.218],[35.036,42.194]],"c":true}],"h":1},{"t":111.716,"s":[{"i":[[0.748,-0.905],[4.468,-1.427],[1.404,-0.338],[1.108,10.686],[4.007,8.469],[1.014,3.986],[0.432,2.494],[0.214,2.18],[0.053,1.27],[-0.108,1.472],[-0.166,0.805],[-2.17,-4.293],[-2.289,-2.609],[-0.92,-1.07],[-1.519,-1.894],[-1.136,-1.565],[-0.712,-1.081],[-1.344,-3.314],[-0.219,-0.618],[-0.212,-0.723],[-0.025,-0.067],[-0.047,-0.146],[-0.061,-0.249],[-0.042,-0.223],[-0.048,-0.434],[0.434,-2.197],[0.467,-1.263]],"o":[[-1.991,2.409],[-3.503,1.119],[2.068,-3.392],[-1.013,-9.768],[-1.373,-2.902],[-0.613,-2.408],[-0.398,-2.297],[-0.135,-1.375],[-0.074,-1.791],[0.073,-1.002],[0.737,5.111],[1.717,3.396],[0.974,1.11],[1.72,2.001],[1.293,1.613],[0.793,1.093],[2.144,3.255],[0.248,0.611],[0.252,0.711],[0.027,0.067],[0.055,0.146],[0.079,0.245],[0.054,0.219],[0.077,0.413],[0.257,2.312],[-0.298,1.505],[-0.728,1.968]],"v":[[24.677,39.955],[16.33,47.362],[7.914,48.813],[11.957,28.631],[2.944,3.308],[-0.68,-7.288],[-2.256,-14.698],[-3.182,-21.459],[-3.465,-25.439],[-3.42,-30.366],[-3.063,-33.086],[1.442,-18.857],[7.523,-9.788],[10.364,-6.521],[15.227,-0.69],[18.873,4.071],[21.132,7.329],[26.389,17.12],[27.089,18.964],[27.785,21.115],[27.863,21.316],[28.017,21.754],[28.226,22.495],[28.369,23.159],[28.554,24.428],[28.19,31.31],[27.011,35.5]],"c":true}],"h":1},{"t":113.885,"s":[{"i":[[0.67,-0.432],[1.626,0.109],[1.975,1.349],[1.979,2.598],[1.309,2.769],[0.805,2.485],[0.504,2.02],[0.106,1.975],[-0.234,2.284],[-0.907,3.533],[0,0],[-0.839,-6.275],[-1.011,-4.1],[-0.658,-1.188],[-1.301,-1.702],[-1.394,-1.037],[-1.096,-0.657],[-0.897,-0.713],[-0.207,-0.164],[-0.123,-0.116],[-0.089,-0.108],[-0.145,-0.205],[-0.213,-0.437],[-0.276,-0.521],[-0.238,-0.832],[0.025,-1.261],[0.212,-0.672]],"o":[[-1.369,0.884],[-2.386,-0.159],[-2.697,-1.842],[-1.856,-2.436],[-1.116,-2.362],[-0.642,-1.981],[-0.478,-1.919],[-0.123,-2.293],[0.372,-3.629],[0.9,-3.505],[0,0],[0.56,4.186],[0.325,1.318],[1.037,1.874],[1.055,1.38],[1.026,0.763],[0.983,0.589],[0.206,0.164],[0.133,0.105],[0.102,0.096],[0.159,0.195],[0.281,0.397],[0.258,0.53],[0.405,0.765],[0.347,1.213],[-0.014,0.705],[-0.24,0.76]],"v":[[22.866,17.805],[18.213,19.302],[11.403,17.039],[4.59,9.999],[-0.016,2.049],[-2.656,-5.331],[-4.356,-11.343],[-5.6,-17.143],[-6.786,-24.008],[-5.906,-34.88],[1.459,-48.426],[0.293,-26.147],[4.525,-13.573],[6.158,-9.842],[9.596,-4.414],[13.192,-0.641],[16.712,0.882],[19.37,3.063],[20.021,3.513],[20.386,3.867],[20.697,4.15],[21.126,4.771],[21.978,5.955],[22.521,7.638],[24.001,9.772],[24.21,13.55],[23.885,15.641]],"c":true}],"h":1},{"t":116.054,"s":[{"i":[[0.527,-0.274],[2.393,0.207],[0.731,0.116],[-1.494,5.161],[0.303,4.698],[-0.272,2.042],[-0.266,1.238],[-0.311,1.051],[-0.215,0.598],[-0.33,0.661],[-0.231,0.34],[-0.219,-2.408],[-0.595,-1.652],[-0.235,-0.674],[-0.364,-1.172],[-0.244,-0.945],[-0.134,-0.639],[-0.012,-1.795],[0.013,-0.329],[0.036,-0.376],[0.001,-0.036],[0.005,-0.077],[0.018,-0.127],[0.022,-0.111],[0.059,-0.21],[0.622,-0.932],[0.461,-0.494]],"o":[[-1.402,0.728],[-1.876,-0.163],[1.624,-1.168],[1.366,-4.718],[-0.104,-1.61],[0.164,-1.233],[0.245,-1.14],[0.196,-0.663],[0.304,-0.843],[0.224,-0.45],[-0.616,2.509],[0.174,1.905],[0.253,0.703],[0.439,1.26],[0.31,0.998],[0.17,0.66],[0.403,1.923],[0.002,0.331],[-0.015,0.378],[0,0.036],[-0.001,0.078],[-0.009,0.129],[-0.016,0.112],[-0.041,0.206],[-0.315,1.12],[-0.426,0.639],[-0.718,0.77]],"v":[[9.16,-27.421],[3.793,-25.614],[-0.481,-26.577],[5.257,-35.132],[5.762,-48.603],[6.044,-54.211],[6.696,-57.947],[7.535,-61.255],[8.153,-63.152],[9.106,-65.424],[9.79,-66.614],[9.24,-59.153],[10.415,-53.775],[11.147,-51.711],[12.356,-48.068],[13.188,-45.157],[13.645,-43.21],[14.292,-37.658],[14.276,-36.668],[14.2,-35.538],[14.2,-35.429],[14.19,-35.197],[14.149,-34.813],[14.091,-34.478],[13.939,-33.855],[12.465,-30.74],[11.112,-29.03]],"c":true}],"h":1},{"t":118.766,"s":[{"i":[[-2.296,4.176],[-2.106,-8.919],[0.167,-5.943],[0.42,-7.176],[5.92,-3.427],[6.79,-0.416],[5.671,1.632],[6.809,3.878],[3.378,5.068],[2.862,6.947],[0.003,0.009],[-0.073,2.675],[-0.848,0.078],[-0.278,-0.128],[-0.72,-0.594],[-0.655,-0.625],[-0.438,-0.443],[-0.551,-0.611],[-0.058,-0.065],[0,0],[-0.085,-0.096],[-0.522,-0.576],[-1.502,-1.59],[-1.513,-1.505],[-2.108,-1.422],[-12.182,8.776],[-2.56,14.584]],"o":[[2.296,-4.175],[1.671,7.075],[-0.252,8.969],[-0.414,7.064],[-3.625,2.098],[-4.102,0.251],[-5.223,-1.503],[-4.896,-2.789],[-4.764,-7.148],[-3.707,-8.997],[0.025,0.029],[0.058,-2.116],[0.187,-0.017],[0.521,0.24],[0.614,0.506],[0.457,0.437],[1.319,1.334],[0.102,0.113],[0.066,0.074],[0,0],[0.185,0.207],[0.876,0.966],[1.322,1.399],[2.8,2.784],[2.243,1.513],[5.872,-4.23],[1.543,-8.791]],"v":[[24.032,37.662],[31.282,37.537],[33.032,55.287],[30.032,82.038],[20.533,109.288],[5.265,114.143],[-9.316,112.311],[-27.303,104.427],[-39.597,92.148],[-50.71,69.62],[-57.217,54.285],[-57.409,48.654],[-56.218,44.539],[-55.514,44.713],[-53.613,46.015],[-51.687,47.742],[-50.336,49.072],[-47.31,52.281],[-47.07,52.549],[-46.968,52.663],[-46.838,52.809],[-45.756,54.012],[-42.088,57.975],[-37.767,62.419],[-29.968,69.287],[-0.413,76.097],[14.534,56.028]],"c":true}],"h":1},{"t":120.935,"s":[{"i":[[-4.162,2.32],[-2.106,-8.919],[-0.205,-5.942],[3.42,-4.051],[5.92,-3.427],[14.626,0.921],[6.806,0.866],[3.468,3.377],[4.375,3.874],[5.791,7.688],[3.696,13.328],[-1.733,10.148],[-2.257,-0.429],[-11.651,-7.647],[-11.387,-0.069],[-5.942,4.774],[-4.636,5.552],[-2.338,6.658],[1.064,5.858],[4.171,7.199],[-1.281,-5.803],[1.833,-5.888],[0,0],[1.239,-7.664],[11.296,-4.551],[-14.984,-0.955],[-0.993,14.774]],"o":[[5.921,-3.301],[1.671,7.075],[0.42,12.2],[-4.565,5.407],[-4.495,2.602],[-4.457,-0.281],[-4.977,-0.633],[-4.072,-3.966],[-4.995,-4.424],[-4.337,-5.758],[-3.395,-12.24],[1.371,-8.028],[3.67,0.698],[11.244,7.381],[4.005,0.024],[5.584,-4.487],[5.135,-6.149],[1.951,-5.557],[-0.767,-4.222],[12.671,0.949],[1.504,6.815],[-2.757,8.856],[0,0],[-5.261,22.086],[2.046,3.574],[6.116,0.39],[0.918,-13.666]],"v":[[39.032,9.162],[53.907,32.662],[59.657,59.162],[46.657,88.913],[20.408,105.788],[-4.048,111.44],[-21.604,109.121],[-32.928,102.427],[-44.476,91.14],[-61.335,75.494],[-78.842,40.66],[-80.298,3.891],[-74.343,-9.086],[-60.772,8.384],[-36.036,16.431],[-14.882,9.473],[-2.37,-2.302],[8.415,-21.921],[8.264,-37.372],[-0.468,-56.337],[27.449,-41.203],[31.87,-20],[24.695,0.009],[18.964,22.276],[-16.843,57.162],[8.337,68.972],[35.659,45.653]],"c":true}],"h":1},{"t":123.104,"s":[{"i":[[-1.513,-2.67],[-2.878,-8.701],[0.262,-5.939],[3.42,-4.051],[5.92,-3.427],[14.626,0.921],[5.681,1.991],[4.125,2.333],[4.634,2.667],[7.788,8.242],[2.967,13.509],[-1.776,13.285],[-5.58,2.573],[-5.408,-12.698],[-12.521,3.553],[-2.666,7.076],[1.26,9.289],[-5.837,10.158],[-0.247,7.983],[-2.826,1.061],[-4.371,-7.435],[0,0],[-4.23,-5.402],[-2.44,-2.852],[-2.679,-3.535],[-1.125,-1.465],[-1.305,-1.643]],"o":[[2.734,4.824],[2.671,8.075],[-0.829,18.825],[-4.565,5.407],[-4.495,2.602],[-4.458,-0.281],[-4.735,-1.659],[-6.745,-3.815],[-5.696,-3.278],[-4.951,-5.24],[-2.262,-10.3],[1.585,-11.857],[3.393,-1.564],[2.599,6.103],[8.613,-2.444],[1.13,-3],[-1.326,-9.776],[-0.213,-4.717],[0.368,-11.871],[6.796,-2.551],[5.064,8.615],[0,0],[2.314,2.955],[2.884,3.37],[1.115,1.472],[1.277,1.664],[1.908,2.403]],"v":[[70.719,7.412],[78.782,24.662],[82.157,50.787],[58.782,88.663],[32.408,107.663],[0.952,110.94],[-17.229,105.996],[-32.553,99.052],[-47.226,91.39],[-62.96,78.245],[-77.342,49.285],[-78.633,17.719],[-68.218,-4.711],[-52.397,22.259],[-27.161,30.306],[-11.382,15.786],[-15.557,-8.927],[-18.835,-38.796],[-14.915,-61.142],[-10.593,-88.837],[11.823,-62.203],[30.12,-44.75],[42.07,-27.991],[49.714,-19.724],[58.032,-9.338],[61.087,-4.716],[65.222,0.028]],"c":true}],"h":1},{"t":125.273,"s":[{"i":[[2.876,-2.468],[4.32,-1.196],[7.92,7.92],[-2.289,10.729],[1.499,9.249],[0.094,2.475],[-0.086,1.46],[-0.213,1.336],[-0.192,0.845],[-0.392,1.208],[-0.326,0.835],[-1.418,-2.375],[-1.242,-1.613],[-0.986,-1.058],[-1.986,-1.756],[-1.659,-1.478],[-1.09,-1.079],[-1.894,-4.494],[-0.279,-0.896],[-0.217,-1.131],[-0.028,-0.106],[-0.05,-0.229],[-0.058,-0.388],[-0.035,-0.347],[-0.024,-0.671],[0.993,-3.609],[1.163,-2.266]],"o":[[-3.356,2.88],[-13.437,4.796],[14.279,-3.367],[2.049,-9.604],[-0.431,-2.657],[-0.057,-1.495],[0.079,-1.345],[0.135,-0.843],[0.27,-1.192],[0.267,-0.822],[1.274,2.548],[1.122,1.879],[0.901,1.17],[1.844,1.98],[1.692,1.496],[1.158,1.032],[3.284,3.248],[0.35,0.829],[0.321,1.031],[0.03,0.106],[0.06,0.229],[0.083,0.385],[0.051,0.342],[0.065,0.642],[0.129,3.573],[-0.68,2.473],[-1.813,3.532]],"v":[[27.776,64.863],[14.572,72.063],[-20.222,62.226],[5.09,37.624],[1.734,10.861],[0.928,3.191],[0.968,-1.236],[1.404,-5.252],[1.893,-7.782],[2.884,-11.378],[3.772,-13.863],[7.797,-6.409],[11.338,-1.135],[14.175,2.199],[19.971,7.749],[25.027,12.177],[28.411,15.331],[36.469,26.635],[37.413,29.221],[38.222,32.462],[38.308,32.779],[38.472,33.467],[38.684,34.626],[38.813,35.658],[38.942,37.624],[37.618,48.537],[34.843,55.691]],"c":true}],"h":1},{"t":127.442,"s":[{"i":[[1.749,-2.028],[5.503,-0.827],[9.099,1.498],[0.974,10.927],[2.782,8.947],[0.586,2.966],[0.246,1.826],[0.116,1.643],[0.024,1],[-0.077,1.298],[-0.108,0.814],[-1.521,-3.381],[-1.457,-1.423],[-1.079,-1.055],[-2.002,-2.027],[-1.607,-1.739],[-1.042,-1.21],[-2.179,-3.307],[-0.345,-0.604],[-0.316,-0.684],[-0.035,-0.063],[-0.068,-0.138],[-0.097,-0.237],[-0.074,-0.215],[-0.111,-0.422],[-0.102,-2.446],[0.305,-1.622]],"o":[[-2.042,2.367],[-5.503,0.827],[6.455,-5.576],[-0.835,-9.363],[-0.799,-2.57],[-0.354,-1.792],[-0.227,-1.682],[-0.073,-1.036],[-0.033,-1.41],[0.052,-0.884],[1.099,5.046],[1.203,2.675],[1.056,1.032],[2.018,1.974],[1.705,1.727],[1.122,1.214],[3.138,3.645],[0.402,0.61],[0.397,0.694],[0.037,0.063],[0.076,0.136],[0.114,0.231],[0.085,0.209],[0.137,0.398],[0.592,2.25],[0.07,1.676],[-0.475,2.528]],"v":[[31.811,49.14],[19.353,55.775],[-2.449,56.074],[13.266,33.795],[4.86,8.209],[2.755,-0.191],[1.849,-5.638],[1.33,-10.641],[1.184,-13.699],[1.246,-17.773],[1.485,-20.324],[5.419,-7.59],[9.41,-1.397],[12.618,1.735],[18.68,7.747],[23.667,12.951],[26.92,16.59],[30.79,23.029],[31.912,24.85],[32.983,26.918],[33.09,27.106],[33.305,27.516],[33.621,28.219],[33.859,28.854],[34.227,30.083],[35.359,37.218],[35.036,42.194]],"c":true}],"h":1},{"t":129.611,"s":[{"i":[[0.748,-0.905],[4.468,-1.427],[1.404,-0.338],[1.108,10.686],[4.007,8.469],[1.014,3.986],[0.432,2.494],[0.214,2.18],[0.053,1.27],[-0.108,1.472],[-0.166,0.805],[-2.17,-4.293],[-2.289,-2.609],[-0.92,-1.07],[-1.519,-1.894],[-1.136,-1.565],[-0.712,-1.081],[-1.344,-3.314],[-0.219,-0.618],[-0.212,-0.723],[-0.025,-0.067],[-0.047,-0.146],[-0.061,-0.249],[-0.042,-0.223],[-0.048,-0.434],[0.434,-2.197],[0.467,-1.263]],"o":[[-1.991,2.409],[-3.503,1.119],[2.068,-3.392],[-1.013,-9.768],[-1.373,-2.902],[-0.613,-2.408],[-0.398,-2.297],[-0.135,-1.375],[-0.074,-1.791],[0.073,-1.002],[0.737,5.111],[1.717,3.396],[0.974,1.11],[1.72,2.001],[1.293,1.613],[0.793,1.093],[2.144,3.255],[0.248,0.611],[0.252,0.711],[0.027,0.067],[0.055,0.146],[0.079,0.245],[0.054,0.219],[0.077,0.413],[0.257,2.312],[-0.298,1.505],[-0.728,1.968]],"v":[[24.677,39.955],[16.33,47.362],[7.914,48.813],[11.957,28.631],[2.944,3.308],[-0.68,-7.288],[-2.256,-14.698],[-3.182,-21.459],[-3.465,-25.439],[-3.42,-30.366],[-3.063,-33.086],[1.442,-18.857],[7.523,-9.788],[10.364,-6.521],[15.227,-0.69],[18.873,4.071],[21.132,7.329],[26.389,17.12],[27.089,18.964],[27.785,21.115],[27.863,21.316],[28.017,21.754],[28.226,22.495],[28.369,23.159],[28.554,24.428],[28.19,31.31],[27.011,35.5]],"c":true}],"h":1},{"t":131.781,"s":[{"i":[[0.67,-0.432],[1.626,0.109],[1.975,1.349],[1.979,2.598],[1.309,2.769],[0.805,2.485],[0.504,2.02],[0.106,1.975],[-0.234,2.284],[-0.907,3.533],[0,0],[-0.839,-6.275],[-1.011,-4.1],[-0.658,-1.188],[-1.301,-1.702],[-1.394,-1.037],[-1.096,-0.657],[-0.897,-0.713],[-0.207,-0.164],[-0.123,-0.116],[-0.089,-0.108],[-0.145,-0.205],[-0.213,-0.437],[-0.276,-0.521],[-0.238,-0.832],[0.025,-1.261],[0.212,-0.672]],"o":[[-1.369,0.884],[-2.386,-0.159],[-2.697,-1.842],[-1.856,-2.436],[-1.116,-2.362],[-0.642,-1.981],[-0.478,-1.919],[-0.123,-2.293],[0.372,-3.629],[0.9,-3.505],[0,0],[0.56,4.186],[0.325,1.318],[1.037,1.874],[1.055,1.38],[1.026,0.763],[0.983,0.589],[0.206,0.164],[0.133,0.105],[0.102,0.096],[0.159,0.195],[0.281,0.397],[0.258,0.53],[0.405,0.765],[0.347,1.213],[-0.014,0.705],[-0.24,0.76]],"v":[[22.866,17.805],[18.213,19.302],[11.403,17.039],[4.59,9.999],[-0.016,2.049],[-2.656,-5.331],[-4.356,-11.343],[-5.6,-17.143],[-6.786,-24.008],[-5.906,-34.88],[1.459,-48.426],[0.293,-26.147],[4.525,-13.573],[6.158,-9.842],[9.596,-4.414],[13.192,-0.641],[16.712,0.882],[19.37,3.063],[20.021,3.513],[20.386,3.867],[20.697,4.15],[21.126,4.771],[21.978,5.955],[22.521,7.638],[24.001,9.772],[24.21,13.55],[23.885,15.641]],"c":true}],"h":1},{"t":133.95,"s":[{"i":[[0.527,-0.274],[2.393,0.207],[0.731,0.116],[-1.494,5.161],[0.303,4.698],[-0.272,2.042],[-0.266,1.238],[-0.311,1.051],[-0.215,0.598],[-0.33,0.661],[-0.231,0.34],[-0.219,-2.408],[-0.595,-1.652],[-0.235,-0.674],[-0.364,-1.172],[-0.244,-0.945],[-0.134,-0.639],[-0.012,-1.795],[0.013,-0.329],[0.036,-0.376],[0.001,-0.036],[0.005,-0.077],[0.018,-0.127],[0.022,-0.111],[0.059,-0.21],[0.622,-0.932],[0.461,-0.494]],"o":[[-1.402,0.728],[-1.876,-0.163],[1.624,-1.168],[1.366,-4.718],[-0.104,-1.61],[0.164,-1.233],[0.245,-1.14],[0.196,-0.663],[0.304,-0.843],[0.224,-0.45],[-0.616,2.509],[0.174,1.905],[0.253,0.703],[0.439,1.26],[0.31,0.998],[0.17,0.66],[0.403,1.923],[0.002,0.331],[-0.015,0.378],[0,0.036],[-0.001,0.078],[-0.009,0.129],[-0.016,0.112],[-0.041,0.206],[-0.315,1.12],[-0.426,0.639],[-0.718,0.77]],"v":[[9.16,-27.421],[3.793,-25.614],[-0.481,-26.577],[5.257,-35.132],[5.762,-48.603],[6.044,-54.211],[6.696,-57.947],[7.535,-61.255],[8.153,-63.152],[9.106,-65.424],[9.79,-66.614],[9.24,-59.153],[10.415,-53.775],[11.147,-51.711],[12.356,-48.068],[13.188,-45.157],[13.645,-43.21],[14.292,-37.658],[14.276,-36.668],[14.2,-35.538],[14.2,-35.429],[14.19,-35.197],[14.149,-34.813],[14.091,-34.478],[13.939,-33.855],[12.465,-30.74],[11.112,-29.03]],"c":true}],"h":1},{"t":136.661,"s":[{"i":[[-2.296,4.176],[-2.106,-8.919],[0.167,-5.943],[0.42,-7.176],[5.92,-3.427],[6.79,-0.416],[5.671,1.632],[6.809,3.878],[3.378,5.068],[2.862,6.947],[0.003,0.009],[-0.073,2.675],[-0.848,0.078],[-0.278,-0.128],[-0.72,-0.594],[-0.655,-0.625],[-0.438,-0.443],[-0.551,-0.611],[-0.058,-0.065],[0,0],[-0.085,-0.096],[-0.522,-0.576],[-1.502,-1.59],[-1.513,-1.505],[-2.108,-1.422],[-12.182,8.776],[-2.56,14.584]],"o":[[2.296,-4.175],[1.671,7.075],[-0.252,8.969],[-0.414,7.064],[-3.625,2.098],[-4.102,0.251],[-5.223,-1.503],[-4.896,-2.789],[-4.764,-7.148],[-3.707,-8.997],[0.025,0.029],[0.058,-2.116],[0.187,-0.017],[0.521,0.24],[0.614,0.506],[0.457,0.437],[1.319,1.334],[0.102,0.113],[0.066,0.074],[0,0],[0.185,0.207],[0.876,0.966],[1.322,1.399],[2.8,2.784],[2.243,1.513],[5.872,-4.23],[1.543,-8.791]],"v":[[24.032,37.662],[31.282,37.537],[33.032,55.287],[30.032,82.038],[20.533,109.288],[5.265,114.143],[-9.316,112.311],[-27.303,104.427],[-39.597,92.148],[-50.71,69.62],[-57.217,54.285],[-57.409,48.654],[-56.218,44.539],[-55.514,44.713],[-53.613,46.015],[-51.687,47.742],[-50.336,49.072],[-47.31,52.281],[-47.07,52.549],[-46.968,52.663],[-46.838,52.809],[-45.756,54.012],[-42.088,57.975],[-37.767,62.419],[-29.968,69.287],[-0.413,76.097],[14.534,56.028]],"c":true}],"h":1},{"t":138.831,"s":[{"i":[[-4.162,2.32],[-2.106,-8.919],[-0.205,-5.942],[3.42,-4.051],[5.92,-3.427],[14.626,0.921],[6.806,0.866],[3.468,3.377],[4.375,3.874],[5.791,7.688],[3.696,13.328],[-1.733,10.148],[-2.257,-0.429],[-11.651,-7.647],[-11.387,-0.069],[-5.942,4.774],[-4.636,5.552],[-2.338,6.658],[1.064,5.858],[4.171,7.199],[-1.281,-5.803],[1.833,-5.888],[0,0],[1.239,-7.664],[11.296,-4.551],[-14.984,-0.955],[-0.993,14.774]],"o":[[5.921,-3.301],[1.671,7.075],[0.42,12.2],[-4.565,5.407],[-4.495,2.602],[-4.457,-0.281],[-4.977,-0.633],[-4.072,-3.966],[-4.995,-4.424],[-4.337,-5.758],[-3.395,-12.24],[1.371,-8.028],[3.67,0.698],[11.244,7.381],[4.005,0.024],[5.584,-4.487],[5.135,-6.149],[1.951,-5.557],[-0.767,-4.222],[12.671,0.949],[1.504,6.815],[-2.757,8.856],[0,0],[-5.261,22.086],[2.046,3.574],[6.116,0.39],[0.918,-13.666]],"v":[[39.032,9.162],[53.907,32.662],[59.657,59.162],[46.657,88.913],[20.408,105.788],[-4.048,111.44],[-21.604,109.121],[-32.928,102.427],[-44.476,91.14],[-61.335,75.494],[-78.842,40.66],[-80.298,3.891],[-74.343,-9.086],[-60.772,8.384],[-36.036,16.431],[-14.882,9.473],[-2.37,-2.302],[8.415,-21.921],[8.264,-37.372],[-0.468,-56.337],[27.449,-41.203],[31.87,-20],[24.695,0.009],[18.964,22.276],[-16.843,57.162],[8.337,68.972],[35.659,45.653]],"c":true}],"h":1},{"t":141,"s":[{"i":[[-1.513,-2.67],[-2.878,-8.701],[0.262,-5.939],[3.42,-4.051],[5.92,-3.427],[14.626,0.921],[5.681,1.991],[4.125,2.333],[4.634,2.667],[7.788,8.242],[2.967,13.509],[-1.776,13.285],[-5.58,2.573],[-5.408,-12.698],[-12.521,3.553],[-2.666,7.076],[1.26,9.289],[-5.837,10.158],[-0.247,7.983],[-2.826,1.061],[-4.371,-7.435],[0,0],[-4.23,-5.402],[-2.44,-2.852],[-2.679,-3.535],[-1.125,-1.465],[-1.305,-1.643]],"o":[[2.734,4.824],[2.671,8.075],[-0.829,18.825],[-4.565,5.407],[-4.495,2.602],[-4.458,-0.281],[-4.735,-1.659],[-6.745,-3.815],[-5.696,-3.278],[-4.951,-5.24],[-2.262,-10.3],[1.585,-11.857],[3.393,-1.564],[2.599,6.103],[8.613,-2.444],[1.13,-3],[-1.326,-9.776],[-0.213,-4.717],[0.368,-11.871],[6.796,-2.551],[5.064,8.615],[0,0],[2.314,2.955],[2.884,3.37],[1.115,1.472],[1.277,1.664],[1.908,2.403]],"v":[[70.719,7.412],[78.782,24.662],[82.157,50.787],[58.782,88.663],[32.408,107.663],[0.952,110.94],[-17.229,105.996],[-32.553,99.052],[-47.226,91.39],[-62.96,78.245],[-77.342,49.285],[-78.633,17.719],[-68.218,-4.711],[-52.397,22.259],[-27.161,30.306],[-11.382,15.786],[-15.557,-8.927],[-18.835,-38.796],[-14.915,-61.142],[-10.593,-88.837],[11.823,-62.203],[30.12,-44.75],[42.07,-27.991],[49.714,-19.724],[58.032,-9.338],[61.087,-4.716],[65.222,0.028]],"c":true}],"h":1}],"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":4,"ty":"sh","ix":5,"ks":{"a":1,"k":[{"t":0,"s":[{"i":[[0,0],[3.124,3.159],[7.702,7.651],[2.821,7.627],[-7.678,15.175],[8.521,-6.943],[-15.171,-38.138],[0,-1.585],[2.369,-1.052],[2.282,1.956],[0.432,0.787],[1.109,11.354],[-2.909,7.106],[1.674,-1.665],[-1.409,-23.995],[-2.049,-6.081],[-3.6,-6.452],[-24.111,-3.082],[-19.63,18.08],[11.288,27.765],[0,0]],"o":[[-2.758,-3.653],[-8.042,-7.307],[-5.839,-5.8],[-5.822,-15.742],[-11.398,2.799],[-31.083,25.326],[0.487,1.225],[0,2.675],[-2.758,1.225],[-0.676,-0.573],[-7.468,-9.59],[-0.904,-9.26],[-0.477,-3.681],[-16.59,16.508],[0.72,6.093],[1.673,7.307],[12.96,21.065],[25.677,3.282],[21.955,-20.222],[0,0],[-2.526,-5.598]],"v":[[65.694,-9.286],[56.455,-19.268],[31.62,-39.491],[18.606,-59.95],[21.174,-109.139],[-8.701,-93.064],[-37.391,15.308],[-36.428,19.333],[-39.126,24.414],[-46.046,21.953],[-47.73,19.884],[-60.422,-12.911],[-57.321,-38.207],[-62.588,-38.68],[-86.231,30.528],[-82.741,48.795],[-74.223,69.871],[-14.705,109.079],[58.139,89.599],[76.494,9.227],[74.943,6.057]],"c":true}],"h":1},{"t":2.169,"s":[{"i":[[0,0],[3.124,3.113],[4.272,10.06],[-0.813,9.154],[-12.527,18.188],[8.521,-6.842],[-4.781,-44.511],[0,-1.562],[1.011,-0.228],[2.282,1.927],[0.432,0.775],[0.415,15.459],[-4.1,8.837],[1.736,-1.846],[-1.408,-23.638],[-4.556,-6.885],[-5.199,-4.905],[-29.092,-3.417],[-19.232,18.246],[11.288,27.361],[0,0]],"o":[[-2.758,-3.6],[-8.042,-7.2],[-4.297,-10.12],[1.678,-18.896],[-11.398,2.758],[-31.083,24.957],[0.139,1.295],[0,2.636],[-1.797,0.405],[-0.676,-0.565],[-6.371,-4.746],[-0.338,-12.608],[-1.843,1.5],[-17.148,18.232],[0.72,6.004],[3.069,7.115],[24.801,17.095],[25.703,3.019],[21.314,-20.221],[0,0],[-2.526,-5.516]],"v":[[58.194,-7.614],[43.955,-20.701],[27.995,-43.504],[23.187,-72.286],[48.174,-126.764],[-1.201,-96.173],[-35.391,-1.877],[-34.99,4.151],[-37.813,10.144],[-44.734,8.641],[-47.98,5.853],[-58.356,-28.966],[-52.821,-63.582],[-58.194,-58.549],[-85.481,17.121],[-79.491,45.997],[-64.973,66.517],[-8.83,107.904],[57.389,88.707],[71.994,11.755],[64.943,0.381]],"c":true}],"h":1},{"t":4.339,"s":[{"i":[[2.168,4.936],[10.247,-2.813],[4.272,10.06],[-0.085,9.94],[1.847,1.125],[6.725,-8.614],[1.913,-28.866],[0,-1],[0.647,-0.146],[1.461,1.234],[0.277,0.496],[-0.861,16.839],[-1.506,5.758],[1.528,-1.926],[-1.423,-31.337],[-4.556,-6.885],[-7.324,-3.655],[-29.092,-3.417],[-19.232,18.246],[4.084,18.857],[0,0]],"o":[[-2.866,-6.524],[-9.35,2.566],[-4.297,-10.12],[0.234,-27.384],[-1.847,-1.125],[-21.596,27.66],[-0.055,0.832],[0,1.687],[-1.15,0.26],[-0.433,-0.362],[-4.078,-3.038],[0.703,-13.733],[-1.549,1.431],[-15.089,19.029],[0.72,6.004],[3.069,7.115],[30.301,14.345],[25.703,3.019],[21.314,-20.221],[0,0],[-2.526,-5.516]],"v":[[61.819,-12.614],[45.955,-24.326],[20.495,-46.129],[15.218,-76.254],[38.799,-134.764],[-4.451,-99.298],[-37.961,-17.773],[-37.704,-13.914],[-39.511,-10.079],[-44.565,-10.415],[-47.768,-13.575],[-51.566,-50.492],[-47.696,-83.582],[-52.318,-78.528],[-79.356,13.371],[-73.491,43.122],[-54.973,64.767],[1.67,99.279],[59.264,82.957],[73.744,14.005],[68.943,2.631]],"c":true}],"h":1},{"t":6.508,"s":[{"i":[[1.816,7.187],[6.117,-0.273],[9.022,6.169],[-0.262,13.554],[-3.602,21.472],[0.654,-19.59],[2.446,-55.7],[0.162,-0.987],[1.566,-0.627],[1.796,1.078],[-2.376,4.599],[6.123,10.87],[-1.533,9.959],[1.556,-1.891],[-6.95,-15.544],[-4.556,-6.885],[-8.426,-10.845],[-18.717,-3.042],[-2.959,2.934],[0.834,18.107],[0,0]],"o":[[-1.491,-5.899],[-7.003,0.312],[-10.743,-7.346],[0.54,-27.977],[-11.398,2.758],[-1.179,35.332],[-0.198,4.51],[-0.274,1.665],[-1.251,0.501],[-1.796,-1.078],[2.451,-4.746],[-3.737,-6.634],[-1.906,1.594],[-15.77,19.162],[3.183,6.74],[3.069,7.115],[8.426,10.845],[25.545,4.152],[11.064,-10.971],[0,0],[-0.115,-5.52]],"v":[[61.444,-21.239],[47.83,-59.576],[33.12,-37.129],[19.076,-69.741],[40.049,-155.014],[-2.451,-107.548],[-29.244,-24.188],[-32.491,-15.089],[-35.896,-11.347],[-40.673,-12.545],[-41.83,-23.059],[-41.303,-53.741],[-45.094,-77.537],[-51.968,-71.748],[-53.481,4.371],[-38.866,24.122],[-26.598,52.892],[7.92,69.529],[48.014,60.457],[63.869,14.005],[63.818,-0.869]],"c":true}],"h":1},{"t":8.677,"s":[{"i":[[0.509,10.476],[6.073,-0.78],[6.833,2.865],[-3.61,12.732],[1.921,12.157],[6.436,-8.832],[10.572,-23.825],[3.671,-5.725],[0.18,-0.639],[1.248,-2.247],[1.605,-0.842],[1.405,-1.028],[0.189,-1.308],[-1.216,-1.81],[-3.429,-2.556],[-4.194,-2.24],[-3.576,-1.627],[-7.138,2.451],[-4.186,7.404],[-1.666,13.232],[0,0]],"o":[[-0.295,-6.078],[-4.378,0.562],[-5.012,-2.102],[5.108,-18.012],[-11.398,2.758],[-13.596,18.66],[-1.831,4.126],[-1.915,2.986],[-0.902,3.208],[-0.88,1.584],[-1.542,0.809],[-1.066,0.781],[-0.313,2.158],[2.386,3.55],[4.927,3.673],[4.194,2.24],[8.176,3.72],[11.408,-3.917],[7.668,-13.563],[0,0],[-0.115,-5.52]],"v":[[47.694,-65.864],[42.58,-95.701],[23.62,-76.629],[22.53,-103.187],[35.924,-154.889],[1.299,-129.798],[-10.369,-66.313],[-22.741,-50.089],[-27.021,-40.347],[-28.986,-32.889],[-33.122,-29.362],[-38.181,-28.065],[-40.946,-24.082],[-39.652,-17.916],[-29.856,-9.629],[-14.616,0.747],[-0.473,9.892],[23.67,10.404],[36.639,-10.543],[47.369,-38.12],[48.568,-48.244]],"c":true}],"h":1},{"t":11.389,"s":[{"i":[[2.371,10.217],[6.073,-0.78],[6.769,3.013],[-1.075,5.676],[-5.075,8.715],[6.689,-8.642],[0.697,-13.45],[3.516,-6.8],[1.051,-4.301],[0.006,-2.318],[-0.393,-2.275],[-0.4,-0.929],[-0.302,-0.596],[-0.078,-0.091],[-0.925,-1.138],[-2.014,-2.187],[-3.015,-0.109],[-2.551,2.033],[-2.779,3.152],[-3.023,4.635],[-1.138,4.517]],"o":[[-2.616,-11.274],[-4.378,0.562],[-2.298,-1.023],[2.22,-11.717],[-11.398,2.758],[-17.346,22.41],[-0.233,4.508],[-2.034,3.933],[-0.55,2.252],[-0.006,2.309],[0.172,0.996],[0.264,0.614],[0.054,0.106],[0.954,1.114],[1.876,2.307],[2.043,2.219],[3.26,0.118],[3.286,-2.619],[3.66,-4.151],[2.544,-3.902],[2.077,-8.24]],"v":[[33.819,-77.364],[30.955,-106.076],[19.37,-102.504],[17.977,-113.427],[32.799,-151.764],[-1.451,-127.923],[-3.494,-79.688],[-15.866,-60.339],[-20.021,-47.722],[-20.642,-40.795],[-20.059,-33.893],[-18.96,-31.065],[-18.071,-29.269],[-17.893,-28.959],[-14.981,-25.66],[-9.491,-18.628],[-2.848,-12.483],[5.17,-18.096],[14.639,-26.418],[24.369,-39.87],[31.318,-51.994]],"c":true}],"h":1},{"t":13.558,"s":[{"i":[[-2.257,5.285],[5.918,-0.734],[3.004,1.754],[-1.377,3.609],[0.576,6.935],[4.02,-8.943],[1.789,-6.925],[0.416,-4.857],[-0.067,-2.387],[-0.176,-1.654],[-0.382,-2.038],[-0.164,-0.617],[-0.099,-0.382],[-0.029,-0.127],[-0.409,-1.122],[-0.756,-0.968],[-1.036,-0.275],[-0.919,1.155],[-1.255,3.733],[-0.962,2.804],[-1.16,1.928]],"o":[[2.465,-5.772],[-4.266,0.529],[-1.081,-0.631],[3.458,-9.06],[-3.749,-0.294],[-3.687,8.202],[-1.221,4.729],[-0.204,2.38],[0.047,1.662],[0.219,2.06],[0.117,0.627],[0.101,0.382],[0.033,0.127],[0.269,1.161],[0.416,1.144],[0.646,0.828],[1.455,0.386],[2.477,-3.114],[0.945,-2.809],[0.726,-2.116],[2.975,-4.943]],"v":[[33.138,-114.995],[37.534,-133.238],[27.402,-129.702],[26.034,-136.99],[28.672,-163.095],[11.496,-139.911],[4.511,-119.59],[2.504,-105.097],[2.657,-97.934],[2.844,-92.948],[3.838,-86.81],[4.34,-84.962],[4.634,-83.814],[4.736,-83.435],[5.529,-79.95],[7.193,-76.688],[9.647,-74.671],[14.172,-74.835],[18.527,-85.835],[20.761,-94.43],[23.575,-100.541]],"c":true}],"h":1},{"t":15.727,"s":[{"i":[[-0.416,0.768],[-0.073,0.895],[0.098,1.532],[0.021,0.418],[1.65,-0.78],[2.022,-2.828],[0.684,-2.136],[-0.036,-0.878],[-0.075,-0.4],[-0.077,-0.309],[-0.093,-0.316],[-0.059,-0.115],[-0.06,-0.088],[-0.025,-0.017],[-0.273,-0.071],[-0.418,0.043],[-0.326,0.22],[-0.336,0.422],[-0.3,0.448],[-0.315,0.543],[-0.335,0.495]],"o":[[0.436,-0.805],[0.123,-1.504],[-0.027,-0.418],[-0.075,-1.465],[-3.794,1.794],[-1.368,1.913],[-0.264,0.824],[0.016,0.395],[0.058,0.309],[0.079,0.316],[0.034,0.117],[0.046,0.09],[0.014,0.021],[0.212,0.144],[0.434,0.113],[0.488,-0.051],[0.497,-0.336],[0.342,-0.43],[0.354,-0.529],[0.295,-0.51],[0.499,-0.738]],"v":[[47.758,-189.77],[48.631,-192.317],[48.342,-196.913],[48.256,-198.168],[48.053,-202.562],[40.748,-194.619],[37.945,-188.421],[37.927,-185.801],[38.101,-184.604],[38.327,-183.677],[38.569,-182.729],[38.711,-182.38],[38.883,-182.115],[38.934,-182.055],[39.59,-181.637],[40.914,-181.539],[42.229,-181.911],[43.298,-183.149],[44.262,-184.467],[45.261,-186.077],[46.091,-187.626]],"c":true}],"h":1},{"t":17.896,"s":[{"i":[[0,0],[3.124,3.159],[7.702,7.651],[2.821,7.627],[-7.678,15.175],[8.521,-6.943],[-15.171,-38.138],[0,-1.585],[2.369,-1.052],[2.282,1.956],[0.432,0.787],[1.109,11.354],[-2.909,7.106],[1.674,-1.665],[-1.409,-23.995],[-2.049,-6.081],[-3.6,-6.452],[-24.111,-3.082],[-19.63,18.08],[11.288,27.765],[0,0]],"o":[[-2.758,-3.653],[-8.042,-7.307],[-5.839,-5.8],[-5.822,-15.742],[-11.398,2.799],[-31.083,25.326],[0.487,1.225],[0,2.675],[-2.758,1.225],[-0.676,-0.573],[-7.468,-9.59],[-0.904,-9.26],[-0.477,-3.681],[-16.59,16.508],[0.72,6.093],[1.673,7.307],[12.96,21.065],[25.677,3.282],[21.955,-20.222],[0,0],[-2.526,-5.598]],"v":[[65.694,-9.286],[56.455,-19.268],[31.62,-39.491],[18.606,-59.95],[21.174,-109.139],[-8.701,-93.064],[-37.391,15.308],[-36.428,19.333],[-39.126,24.414],[-46.046,21.953],[-47.73,19.884],[-60.422,-12.911],[-57.321,-38.207],[-62.588,-38.68],[-86.231,30.528],[-82.741,48.795],[-74.223,69.871],[-14.705,109.079],[58.139,89.599],[76.494,9.227],[74.943,6.057]],"c":true}],"h":1},{"t":20.065,"s":[{"i":[[0,0],[3.124,3.113],[4.272,10.06],[-0.813,9.154],[-12.527,18.188],[8.521,-6.842],[-4.781,-44.511],[0,-1.562],[1.011,-0.228],[2.282,1.927],[0.432,0.775],[0.415,15.459],[-4.1,8.837],[1.736,-1.846],[-1.408,-23.638],[-4.556,-6.885],[-5.199,-4.905],[-29.092,-3.417],[-19.232,18.246],[11.288,27.361],[0,0]],"o":[[-2.758,-3.6],[-8.042,-7.2],[-4.297,-10.12],[1.678,-18.896],[-11.398,2.758],[-31.083,24.957],[0.139,1.295],[0,2.636],[-1.797,0.405],[-0.676,-0.565],[-6.371,-4.746],[-0.338,-12.608],[-1.843,1.5],[-17.148,18.232],[0.72,6.004],[3.069,7.115],[24.801,17.095],[25.703,3.019],[21.314,-20.221],[0,0],[-2.526,-5.516]],"v":[[58.194,-7.614],[43.955,-20.701],[27.995,-43.504],[23.187,-72.286],[48.174,-126.764],[-1.201,-96.173],[-35.391,-1.877],[-34.99,4.151],[-37.813,10.144],[-44.734,8.641],[-47.98,5.853],[-58.356,-28.966],[-52.821,-63.582],[-58.194,-58.549],[-85.481,17.121],[-79.491,45.997],[-64.973,66.517],[-8.83,107.904],[57.389,88.707],[71.994,11.755],[64.943,0.381]],"c":true}],"h":1},{"t":22.234,"s":[{"i":[[2.168,4.936],[10.247,-2.813],[4.272,10.06],[-0.085,9.94],[1.847,1.125],[6.725,-8.614],[1.913,-28.866],[0,-1],[0.647,-0.146],[1.461,1.234],[0.277,0.496],[-0.861,16.839],[-1.506,5.758],[1.528,-1.926],[-1.423,-31.337],[-4.556,-6.885],[-7.324,-3.655],[-29.092,-3.417],[-19.232,18.246],[4.084,18.857],[0,0]],"o":[[-2.866,-6.524],[-9.35,2.566],[-4.297,-10.12],[0.234,-27.384],[-1.847,-1.125],[-21.596,27.66],[-0.055,0.832],[0,1.687],[-1.15,0.26],[-0.433,-0.362],[-4.078,-3.038],[0.703,-13.733],[-1.549,1.431],[-15.089,19.029],[0.72,6.004],[3.069,7.115],[30.301,14.345],[25.703,3.019],[21.314,-20.221],[0,0],[-2.526,-5.516]],"v":[[61.819,-12.614],[45.955,-24.326],[20.495,-46.129],[15.218,-76.254],[38.799,-134.764],[-4.451,-99.298],[-37.961,-17.773],[-37.704,-13.914],[-39.511,-10.079],[-44.565,-10.415],[-47.768,-13.575],[-51.566,-50.492],[-47.696,-83.582],[-52.318,-78.528],[-79.356,13.371],[-73.491,43.122],[-54.973,64.767],[1.67,99.279],[59.264,82.957],[73.744,14.005],[68.943,2.631]],"c":true}],"h":1},{"t":24.404,"s":[{"i":[[1.816,7.187],[6.117,-0.273],[9.022,6.169],[-0.262,13.554],[-3.602,21.472],[0.654,-19.59],[2.446,-55.7],[0.162,-0.987],[1.566,-0.627],[1.796,1.078],[-2.376,4.599],[6.123,10.87],[-1.533,9.959],[1.556,-1.891],[-6.95,-15.544],[-4.556,-6.885],[-8.426,-10.845],[-18.717,-3.042],[-2.959,2.934],[0.834,18.107],[0,0]],"o":[[-1.491,-5.899],[-7.003,0.312],[-10.743,-7.346],[0.54,-27.977],[-11.398,2.758],[-1.179,35.332],[-0.198,4.51],[-0.274,1.665],[-1.251,0.501],[-1.796,-1.078],[2.451,-4.746],[-3.737,-6.634],[-1.906,1.594],[-15.77,19.162],[3.183,6.74],[3.069,7.115],[8.426,10.845],[25.545,4.152],[11.064,-10.971],[0,0],[-0.115,-5.52]],"v":[[61.444,-21.239],[47.83,-59.576],[33.12,-37.129],[19.076,-69.741],[40.049,-155.014],[-2.451,-107.548],[-29.244,-24.188],[-32.491,-15.089],[-35.896,-11.347],[-40.673,-12.545],[-41.83,-23.059],[-41.303,-53.741],[-45.094,-77.537],[-51.968,-71.748],[-53.481,4.371],[-38.866,24.122],[-26.598,52.892],[7.92,69.529],[48.014,60.457],[63.869,14.005],[63.818,-0.869]],"c":true}],"h":1},{"t":26.573,"s":[{"i":[[0.509,10.476],[6.073,-0.78],[6.833,2.865],[-3.61,12.732],[1.921,12.157],[6.436,-8.832],[10.572,-23.825],[3.671,-5.725],[0.18,-0.639],[1.248,-2.247],[1.605,-0.842],[1.405,-1.028],[0.189,-1.308],[-1.216,-1.81],[-3.429,-2.556],[-4.194,-2.24],[-3.576,-1.627],[-7.138,2.451],[-4.186,7.404],[-1.666,13.232],[0,0]],"o":[[-0.295,-6.078],[-4.378,0.562],[-5.012,-2.102],[5.108,-18.012],[-11.398,2.758],[-13.596,18.66],[-1.831,4.126],[-1.915,2.986],[-0.902,3.208],[-0.88,1.584],[-1.542,0.809],[-1.066,0.781],[-0.313,2.158],[2.386,3.55],[4.927,3.673],[4.194,2.24],[8.176,3.72],[11.408,-3.917],[7.668,-13.563],[0,0],[-0.115,-5.52]],"v":[[47.694,-65.864],[42.58,-95.701],[23.62,-76.629],[22.53,-103.187],[35.924,-154.889],[1.299,-129.798],[-10.369,-66.313],[-22.741,-50.089],[-27.021,-40.347],[-28.986,-32.889],[-33.122,-29.362],[-38.181,-28.065],[-40.946,-24.082],[-39.652,-17.916],[-29.856,-9.629],[-14.616,0.747],[-0.473,9.892],[23.67,10.404],[36.639,-10.543],[47.369,-38.12],[48.568,-48.244]],"c":true}],"h":1},{"t":29.284,"s":[{"i":[[2.371,10.217],[6.073,-0.78],[6.769,3.013],[-1.075,5.676],[-5.075,8.715],[6.689,-8.642],[0.697,-13.45],[3.516,-6.8],[1.051,-4.301],[0.006,-2.318],[-0.393,-2.275],[-0.4,-0.929],[-0.302,-0.596],[-0.078,-0.091],[-0.925,-1.138],[-2.014,-2.187],[-3.015,-0.109],[-2.551,2.033],[-2.779,3.152],[-3.023,4.635],[-1.138,4.517]],"o":[[-2.616,-11.274],[-4.378,0.562],[-2.298,-1.023],[2.22,-11.717],[-11.398,2.758],[-17.346,22.41],[-0.233,4.508],[-2.034,3.933],[-0.55,2.252],[-0.006,2.309],[0.172,0.996],[0.264,0.614],[0.054,0.106],[0.954,1.114],[1.876,2.307],[2.043,2.219],[3.26,0.118],[3.286,-2.619],[3.66,-4.151],[2.544,-3.902],[2.077,-8.24]],"v":[[33.819,-77.364],[30.955,-106.076],[19.37,-102.504],[17.977,-113.427],[32.799,-151.764],[-1.451,-127.923],[-3.494,-79.688],[-15.866,-60.339],[-20.021,-47.722],[-20.642,-40.795],[-20.059,-33.893],[-18.96,-31.065],[-18.071,-29.269],[-17.893,-28.959],[-14.981,-25.66],[-9.491,-18.628],[-2.848,-12.483],[5.17,-18.096],[14.639,-26.418],[24.369,-39.87],[31.318,-51.994]],"c":true}],"h":1},{"t":31.454,"s":[{"i":[[-2.257,5.285],[5.918,-0.734],[3.004,1.754],[-1.377,3.609],[0.576,6.935],[4.02,-8.943],[1.789,-6.925],[0.416,-4.857],[-0.067,-2.387],[-0.176,-1.654],[-0.382,-2.038],[-0.164,-0.617],[-0.099,-0.382],[-0.029,-0.127],[-0.409,-1.122],[-0.756,-0.968],[-1.036,-0.275],[-0.919,1.155],[-1.255,3.733],[-0.962,2.804],[-1.16,1.928]],"o":[[2.465,-5.772],[-4.266,0.529],[-1.081,-0.631],[3.458,-9.06],[-3.749,-0.294],[-3.687,8.202],[-1.221,4.729],[-0.204,2.38],[0.047,1.662],[0.219,2.06],[0.117,0.627],[0.101,0.382],[0.033,0.127],[0.269,1.161],[0.416,1.144],[0.646,0.828],[1.455,0.386],[2.477,-3.114],[0.945,-2.809],[0.726,-2.116],[2.975,-4.943]],"v":[[33.138,-114.995],[37.534,-133.238],[27.402,-129.702],[26.034,-136.99],[28.672,-163.095],[11.496,-139.911],[4.511,-119.59],[2.504,-105.097],[2.657,-97.934],[2.844,-92.948],[3.838,-86.81],[4.34,-84.962],[4.634,-83.814],[4.736,-83.435],[5.529,-79.95],[7.193,-76.688],[9.647,-74.671],[14.172,-74.835],[18.527,-85.835],[20.761,-94.43],[23.575,-100.541]],"c":true}],"h":1},{"t":33.623,"s":[{"i":[[-0.416,0.768],[-0.073,0.895],[0.098,1.532],[0.021,0.418],[1.65,-0.78],[2.022,-2.828],[0.684,-2.136],[-0.036,-0.878],[-0.075,-0.4],[-0.077,-0.309],[-0.093,-0.316],[-0.059,-0.115],[-0.06,-0.088],[-0.025,-0.017],[-0.273,-0.071],[-0.418,0.043],[-0.326,0.22],[-0.336,0.422],[-0.3,0.448],[-0.315,0.543],[-0.335,0.495]],"o":[[0.436,-0.805],[0.123,-1.504],[-0.027,-0.418],[-0.075,-1.465],[-3.794,1.794],[-1.368,1.913],[-0.264,0.824],[0.016,0.395],[0.058,0.309],[0.079,0.316],[0.034,0.117],[0.046,0.09],[0.014,0.021],[0.212,0.144],[0.434,0.113],[0.488,-0.051],[0.497,-0.336],[0.342,-0.43],[0.354,-0.529],[0.295,-0.51],[0.499,-0.738]],"v":[[47.758,-189.77],[48.631,-192.317],[48.342,-196.913],[48.256,-198.168],[48.053,-202.562],[40.748,-194.619],[37.945,-188.421],[37.927,-185.801],[38.101,-184.604],[38.327,-183.677],[38.569,-182.729],[38.711,-182.38],[38.883,-182.115],[38.934,-182.055],[39.59,-181.637],[40.914,-181.539],[42.229,-181.911],[43.298,-183.149],[44.262,-184.467],[45.261,-186.077],[46.091,-187.626]],"c":true}],"h":1},{"t":35.792,"s":[{"i":[[0,0],[3.124,3.159],[7.702,7.651],[2.821,7.627],[-7.678,15.175],[8.521,-6.943],[-15.171,-38.138],[0,-1.585],[2.369,-1.052],[2.282,1.956],[0.432,0.787],[1.109,11.354],[-2.909,7.106],[1.674,-1.665],[-1.409,-23.995],[-2.049,-6.081],[-3.6,-6.452],[-24.111,-3.082],[-19.63,18.08],[11.288,27.765],[0,0]],"o":[[-2.758,-3.653],[-8.042,-7.307],[-5.839,-5.8],[-5.822,-15.742],[-11.398,2.799],[-31.083,25.326],[0.487,1.225],[0,2.675],[-2.758,1.225],[-0.676,-0.573],[-7.468,-9.59],[-0.904,-9.26],[-0.477,-3.681],[-16.59,16.508],[0.72,6.093],[1.673,7.307],[12.96,21.065],[25.677,3.282],[21.955,-20.222],[0,0],[-2.526,-5.598]],"v":[[65.694,-9.286],[56.455,-19.268],[31.62,-39.491],[18.606,-59.95],[21.174,-109.139],[-8.701,-93.064],[-37.391,15.308],[-36.428,19.333],[-39.126,24.414],[-46.046,21.953],[-47.73,19.884],[-60.422,-12.911],[-57.321,-38.207],[-62.588,-38.68],[-86.231,30.528],[-82.741,48.795],[-74.223,69.871],[-14.705,109.079],[58.139,89.599],[76.494,9.227],[74.943,6.057]],"c":true}],"h":1},{"t":37.962,"s":[{"i":[[0,0],[3.124,3.113],[4.272,10.06],[-0.813,9.154],[-12.527,18.188],[8.521,-6.842],[-4.781,-44.511],[0,-1.562],[1.011,-0.228],[2.282,1.927],[0.432,0.775],[0.415,15.459],[-4.1,8.837],[1.736,-1.846],[-1.408,-23.638],[-4.556,-6.885],[-5.199,-4.905],[-29.092,-3.417],[-19.232,18.246],[11.288,27.361],[0,0]],"o":[[-2.758,-3.6],[-8.042,-7.2],[-4.297,-10.12],[1.678,-18.896],[-11.398,2.758],[-31.083,24.957],[0.139,1.295],[0,2.636],[-1.797,0.405],[-0.676,-0.565],[-6.371,-4.746],[-0.338,-12.608],[-1.843,1.5],[-17.148,18.232],[0.72,6.004],[3.069,7.115],[24.801,17.095],[25.703,3.019],[21.314,-20.221],[0,0],[-2.526,-5.516]],"v":[[58.194,-7.614],[43.955,-20.701],[27.995,-43.504],[23.187,-72.286],[48.174,-126.764],[-1.201,-96.173],[-35.391,-1.877],[-34.99,4.151],[-37.813,10.144],[-44.734,8.641],[-47.98,5.853],[-58.356,-28.966],[-52.821,-63.582],[-58.194,-58.549],[-85.481,17.121],[-79.491,45.997],[-64.973,66.517],[-8.83,107.904],[57.389,88.707],[71.994,11.755],[64.943,0.381]],"c":true}],"h":1},{"t":40.131,"s":[{"i":[[2.168,4.936],[10.247,-2.813],[4.272,10.06],[-0.085,9.94],[1.847,1.125],[6.725,-8.614],[1.913,-28.866],[0,-1],[0.647,-0.146],[1.461,1.234],[0.277,0.496],[-0.861,16.839],[-1.506,5.758],[1.528,-1.926],[-1.423,-31.337],[-4.556,-6.885],[-7.324,-3.655],[-29.092,-3.417],[-19.232,18.246],[4.084,18.857],[0,0]],"o":[[-2.866,-6.524],[-9.35,2.566],[-4.297,-10.12],[0.234,-27.384],[-1.847,-1.125],[-21.596,27.66],[-0.055,0.832],[0,1.687],[-1.15,0.26],[-0.433,-0.362],[-4.078,-3.038],[0.703,-13.733],[-1.549,1.431],[-15.089,19.029],[0.72,6.004],[3.069,7.115],[30.301,14.345],[25.703,3.019],[21.314,-20.221],[0,0],[-2.526,-5.516]],"v":[[61.819,-12.614],[45.955,-24.326],[20.495,-46.129],[15.218,-76.254],[38.799,-134.764],[-4.451,-99.298],[-37.961,-17.773],[-37.704,-13.914],[-39.511,-10.079],[-44.565,-10.415],[-47.768,-13.575],[-51.566,-50.492],[-47.696,-83.582],[-52.318,-78.528],[-79.356,13.371],[-73.491,43.122],[-54.973,64.767],[1.67,99.279],[59.264,82.957],[73.744,14.005],[68.943,2.631]],"c":true}],"h":1},{"t":42.3,"s":[{"i":[[1.816,7.187],[6.117,-0.273],[9.022,6.169],[-0.262,13.554],[-3.602,21.472],[0.654,-19.59],[2.446,-55.7],[0.162,-0.987],[1.566,-0.627],[1.796,1.078],[-2.376,4.599],[6.123,10.87],[-1.533,9.959],[1.556,-1.891],[-6.95,-15.544],[-4.556,-6.885],[-8.426,-10.845],[-18.717,-3.042],[-2.959,2.934],[0.834,18.107],[0,0]],"o":[[-1.491,-5.899],[-7.003,0.312],[-10.743,-7.346],[0.54,-27.977],[-11.398,2.758],[-1.179,35.332],[-0.198,4.51],[-0.274,1.665],[-1.251,0.501],[-1.796,-1.078],[2.451,-4.746],[-3.737,-6.634],[-1.906,1.594],[-15.77,19.162],[3.183,6.74],[3.069,7.115],[8.426,10.845],[25.545,4.152],[11.064,-10.971],[0,0],[-0.115,-5.52]],"v":[[61.444,-21.239],[47.83,-59.576],[33.12,-37.129],[19.076,-69.741],[40.049,-155.014],[-2.451,-107.548],[-29.244,-24.188],[-32.491,-15.089],[-35.896,-11.347],[-40.673,-12.545],[-41.83,-23.059],[-41.303,-53.741],[-45.094,-77.537],[-51.968,-71.748],[-53.481,4.371],[-38.866,24.122],[-26.598,52.892],[7.92,69.529],[48.014,60.457],[63.869,14.005],[63.818,-0.869]],"c":true}],"h":1},{"t":44.469,"s":[{"i":[[0.509,10.476],[6.073,-0.78],[6.833,2.865],[-3.61,12.732],[1.921,12.157],[6.436,-8.832],[10.572,-23.825],[3.671,-5.725],[0.18,-0.639],[1.248,-2.247],[1.605,-0.842],[1.405,-1.028],[0.189,-1.308],[-1.216,-1.81],[-3.429,-2.556],[-4.194,-2.24],[-3.576,-1.627],[-7.138,2.451],[-4.186,7.404],[-1.666,13.232],[0,0]],"o":[[-0.295,-6.078],[-4.378,0.562],[-5.012,-2.102],[5.108,-18.012],[-11.398,2.758],[-13.596,18.66],[-1.831,4.126],[-1.915,2.986],[-0.902,3.208],[-0.88,1.584],[-1.542,0.809],[-1.066,0.781],[-0.313,2.158],[2.386,3.55],[4.927,3.673],[4.194,2.24],[8.176,3.72],[11.408,-3.917],[7.668,-13.563],[0,0],[-0.115,-5.52]],"v":[[47.694,-65.864],[42.58,-95.701],[23.62,-76.629],[22.53,-103.187],[35.924,-154.889],[1.299,-129.798],[-10.369,-66.313],[-22.741,-50.089],[-27.021,-40.347],[-28.986,-32.889],[-33.122,-29.362],[-38.181,-28.065],[-40.946,-24.082],[-39.652,-17.916],[-29.856,-9.629],[-14.616,0.747],[-0.473,9.892],[23.67,10.404],[36.639,-10.543],[47.369,-38.12],[48.568,-48.244]],"c":true}],"h":1},{"t":47.181,"s":[{"i":[[2.371,10.217],[6.073,-0.78],[6.769,3.013],[-1.075,5.676],[-5.075,8.715],[6.689,-8.642],[0.697,-13.45],[3.516,-6.8],[1.051,-4.301],[0.006,-2.318],[-0.393,-2.275],[-0.4,-0.929],[-0.302,-0.596],[-0.078,-0.091],[-0.925,-1.138],[-2.014,-2.187],[-3.015,-0.109],[-2.551,2.033],[-2.779,3.152],[-3.023,4.635],[-1.138,4.517]],"o":[[-2.616,-11.274],[-4.378,0.562],[-2.298,-1.023],[2.22,-11.717],[-11.398,2.758],[-17.346,22.41],[-0.233,4.508],[-2.034,3.933],[-0.55,2.252],[-0.006,2.309],[0.172,0.996],[0.264,0.614],[0.054,0.106],[0.954,1.114],[1.876,2.307],[2.043,2.219],[3.26,0.118],[3.286,-2.619],[3.66,-4.151],[2.544,-3.902],[2.077,-8.24]],"v":[[33.819,-77.364],[30.955,-106.076],[19.37,-102.504],[17.977,-113.427],[32.799,-151.764],[-1.451,-127.923],[-3.494,-79.688],[-15.866,-60.339],[-20.021,-47.722],[-20.642,-40.795],[-20.059,-33.893],[-18.96,-31.065],[-18.071,-29.269],[-17.893,-28.959],[-14.981,-25.66],[-9.491,-18.628],[-2.848,-12.483],[5.17,-18.096],[14.639,-26.418],[24.369,-39.87],[31.318,-51.994]],"c":true}],"h":1},{"t":49.35,"s":[{"i":[[-2.257,5.285],[5.918,-0.734],[3.004,1.754],[-1.377,3.609],[0.576,6.935],[4.02,-8.943],[1.789,-6.925],[0.416,-4.857],[-0.067,-2.387],[-0.176,-1.654],[-0.382,-2.038],[-0.164,-0.617],[-0.099,-0.382],[-0.029,-0.127],[-0.409,-1.122],[-0.756,-0.968],[-1.036,-0.275],[-0.919,1.155],[-1.255,3.733],[-0.962,2.804],[-1.16,1.928]],"o":[[2.465,-5.772],[-4.266,0.529],[-1.081,-0.631],[3.458,-9.06],[-3.749,-0.294],[-3.687,8.202],[-1.221,4.729],[-0.204,2.38],[0.047,1.662],[0.219,2.06],[0.117,0.627],[0.101,0.382],[0.033,0.127],[0.269,1.161],[0.416,1.144],[0.646,0.828],[1.455,0.386],[2.477,-3.114],[0.945,-2.809],[0.726,-2.116],[2.975,-4.943]],"v":[[33.138,-114.995],[37.534,-133.238],[27.402,-129.702],[26.034,-136.99],[28.672,-163.095],[11.496,-139.911],[4.511,-119.59],[2.504,-105.097],[2.657,-97.934],[2.844,-92.948],[3.838,-86.81],[4.34,-84.962],[4.634,-83.814],[4.736,-83.435],[5.529,-79.95],[7.193,-76.688],[9.647,-74.671],[14.172,-74.835],[18.527,-85.835],[20.761,-94.43],[23.575,-100.541]],"c":true}],"h":1},{"t":51.52,"s":[{"i":[[-0.416,0.768],[-0.073,0.895],[0.098,1.532],[0.021,0.418],[1.65,-0.78],[2.022,-2.828],[0.684,-2.136],[-0.036,-0.878],[-0.075,-0.4],[-0.077,-0.309],[-0.093,-0.316],[-0.059,-0.115],[-0.06,-0.088],[-0.025,-0.017],[-0.273,-0.071],[-0.418,0.043],[-0.326,0.22],[-0.336,0.422],[-0.3,0.448],[-0.315,0.543],[-0.335,0.495]],"o":[[0.436,-0.805],[0.123,-1.504],[-0.027,-0.418],[-0.075,-1.465],[-3.794,1.794],[-1.368,1.913],[-0.264,0.824],[0.016,0.395],[0.058,0.309],[0.079,0.316],[0.034,0.117],[0.046,0.09],[0.014,0.021],[0.212,0.144],[0.434,0.113],[0.488,-0.051],[0.497,-0.336],[0.342,-0.43],[0.354,-0.529],[0.295,-0.51],[0.499,-0.738]],"v":[[47.758,-189.77],[48.631,-192.317],[48.342,-196.913],[48.256,-198.168],[48.053,-202.562],[40.748,-194.619],[37.945,-188.421],[37.927,-185.801],[38.101,-184.604],[38.327,-183.677],[38.569,-182.729],[38.711,-182.38],[38.883,-182.115],[38.934,-182.055],[39.59,-181.637],[40.914,-181.539],[42.229,-181.911],[43.298,-183.149],[44.262,-184.467],[45.261,-186.077],[46.091,-187.626]],"c":true}],"h":1},{"t":53.688,"s":[{"i":[[0,0],[3.124,3.159],[7.702,7.651],[2.821,7.627],[-7.678,15.175],[8.521,-6.943],[-15.171,-38.138],[0,-1.585],[2.369,-1.052],[2.282,1.956],[0.432,0.787],[1.109,11.354],[-2.909,7.106],[1.674,-1.665],[-1.409,-23.995],[-2.049,-6.081],[-3.6,-6.452],[-24.111,-3.082],[-19.63,18.08],[11.288,27.765],[0,0]],"o":[[-2.758,-3.653],[-8.042,-7.307],[-5.839,-5.8],[-5.822,-15.742],[-11.398,2.799],[-31.083,25.326],[0.487,1.225],[0,2.675],[-2.758,1.225],[-0.676,-0.573],[-7.468,-9.59],[-0.904,-9.26],[-0.477,-3.681],[-16.59,16.508],[0.72,6.093],[1.673,7.307],[12.96,21.065],[25.677,3.282],[21.955,-20.222],[0,0],[-2.526,-5.598]],"v":[[65.694,-9.286],[56.455,-19.268],[31.62,-39.491],[18.606,-59.95],[21.174,-109.139],[-8.701,-93.064],[-37.391,15.308],[-36.428,19.333],[-39.126,24.414],[-46.046,21.953],[-47.73,19.884],[-60.422,-12.911],[-57.321,-38.207],[-62.588,-38.68],[-86.231,30.528],[-82.741,48.795],[-74.223,69.871],[-14.705,109.079],[58.139,89.599],[76.494,9.227],[74.943,6.057]],"c":true}],"h":1},{"t":55.857,"s":[{"i":[[0,0],[3.124,3.113],[4.272,10.06],[-0.813,9.154],[-12.527,18.188],[8.521,-6.842],[-4.781,-44.511],[0,-1.562],[1.011,-0.228],[2.282,1.927],[0.432,0.775],[0.415,15.459],[-4.1,8.837],[1.736,-1.846],[-1.408,-23.638],[-4.556,-6.885],[-5.199,-4.905],[-29.092,-3.417],[-19.232,18.246],[11.288,27.361],[0,0]],"o":[[-2.758,-3.6],[-8.042,-7.2],[-4.297,-10.12],[1.678,-18.896],[-11.398,2.758],[-31.083,24.957],[0.139,1.295],[0,2.636],[-1.797,0.405],[-0.676,-0.565],[-6.371,-4.746],[-0.338,-12.608],[-1.843,1.5],[-17.148,18.232],[0.72,6.004],[3.069,7.115],[24.801,17.095],[25.703,3.019],[21.314,-20.221],[0,0],[-2.526,-5.516]],"v":[[58.194,-7.614],[43.955,-20.701],[27.995,-43.504],[23.187,-72.286],[48.174,-126.764],[-1.201,-96.173],[-35.391,-1.877],[-34.99,4.151],[-37.813,10.144],[-44.734,8.641],[-47.98,5.853],[-58.356,-28.966],[-52.821,-63.582],[-58.194,-58.549],[-85.481,17.121],[-79.491,45.997],[-64.973,66.517],[-8.83,107.904],[57.389,88.707],[71.994,11.755],[64.943,0.381]],"c":true}],"h":1},{"t":58.027,"s":[{"i":[[2.168,4.936],[10.247,-2.813],[4.272,10.06],[-0.085,9.94],[1.847,1.125],[6.725,-8.614],[1.913,-28.866],[0,-1],[0.647,-0.146],[1.461,1.234],[0.277,0.496],[-0.861,16.839],[-1.506,5.758],[1.528,-1.926],[-1.423,-31.337],[-4.556,-6.885],[-7.324,-3.655],[-29.092,-3.417],[-19.232,18.246],[4.084,18.857],[0,0]],"o":[[-2.866,-6.524],[-9.35,2.566],[-4.297,-10.12],[0.234,-27.384],[-1.847,-1.125],[-21.596,27.66],[-0.055,0.832],[0,1.687],[-1.15,0.26],[-0.433,-0.362],[-4.078,-3.038],[0.703,-13.733],[-1.549,1.431],[-15.089,19.029],[0.72,6.004],[3.069,7.115],[30.301,14.345],[25.703,3.019],[21.314,-20.221],[0,0],[-2.526,-5.516]],"v":[[61.819,-12.614],[45.955,-24.326],[20.495,-46.129],[15.218,-76.254],[38.799,-134.764],[-4.451,-99.298],[-37.961,-17.773],[-37.704,-13.914],[-39.511,-10.079],[-44.565,-10.415],[-47.768,-13.575],[-51.566,-50.492],[-47.696,-83.582],[-52.318,-78.528],[-79.356,13.371],[-73.491,43.122],[-54.973,64.767],[1.67,99.279],[59.264,82.957],[73.744,14.005],[68.943,2.631]],"c":true}],"h":1},{"t":60.196,"s":[{"i":[[1.816,7.187],[6.117,-0.273],[9.022,6.169],[-0.262,13.554],[-3.602,21.472],[0.654,-19.59],[2.446,-55.7],[0.162,-0.987],[1.566,-0.627],[1.796,1.078],[-2.376,4.599],[6.123,10.87],[-1.533,9.959],[1.556,-1.891],[-6.95,-15.544],[-4.556,-6.885],[-8.426,-10.845],[-18.717,-3.042],[-2.959,2.934],[0.834,18.107],[0,0]],"o":[[-1.491,-5.899],[-7.003,0.312],[-10.743,-7.346],[0.54,-27.977],[-11.398,2.758],[-1.179,35.332],[-0.198,4.51],[-0.274,1.665],[-1.251,0.501],[-1.796,-1.078],[2.451,-4.746],[-3.737,-6.634],[-1.906,1.594],[-15.77,19.162],[3.183,6.74],[3.069,7.115],[8.426,10.845],[25.545,4.152],[11.064,-10.971],[0,0],[-0.115,-5.52]],"v":[[61.444,-21.239],[47.83,-59.576],[33.12,-37.129],[19.076,-69.741],[40.049,-155.014],[-2.451,-107.548],[-29.244,-24.188],[-32.491,-15.089],[-35.896,-11.347],[-40.673,-12.545],[-41.83,-23.059],[-41.303,-53.741],[-45.094,-77.537],[-51.968,-71.748],[-53.481,4.371],[-38.866,24.122],[-26.598,52.892],[7.92,69.529],[48.014,60.457],[63.869,14.005],[63.818,-0.869]],"c":true}],"h":1},{"t":62.365,"s":[{"i":[[0.509,10.476],[6.073,-0.78],[6.833,2.865],[-3.61,12.732],[1.921,12.157],[6.436,-8.832],[10.572,-23.825],[3.671,-5.725],[0.18,-0.639],[1.248,-2.247],[1.605,-0.842],[1.405,-1.028],[0.189,-1.308],[-1.216,-1.81],[-3.429,-2.556],[-4.194,-2.24],[-3.576,-1.627],[-7.138,2.451],[-4.186,7.404],[-1.666,13.232],[0,0]],"o":[[-0.295,-6.078],[-4.378,0.562],[-5.012,-2.102],[5.108,-18.012],[-11.398,2.758],[-13.596,18.66],[-1.831,4.126],[-1.915,2.986],[-0.902,3.208],[-0.88,1.584],[-1.542,0.809],[-1.066,0.781],[-0.313,2.158],[2.386,3.55],[4.927,3.673],[4.194,2.24],[8.176,3.72],[11.408,-3.917],[7.668,-13.563],[0,0],[-0.115,-5.52]],"v":[[47.694,-65.864],[42.58,-95.701],[23.62,-76.629],[22.53,-103.187],[35.924,-154.889],[1.299,-129.798],[-10.369,-66.313],[-22.741,-50.089],[-27.021,-40.347],[-28.986,-32.889],[-33.122,-29.362],[-38.181,-28.065],[-40.946,-24.082],[-39.652,-17.916],[-29.856,-9.629],[-14.616,0.747],[-0.473,9.892],[23.67,10.404],[36.639,-10.543],[47.369,-38.12],[48.568,-48.244]],"c":true}],"h":1},{"t":65.077,"s":[{"i":[[2.371,10.217],[6.073,-0.78],[6.769,3.013],[-1.075,5.676],[-5.075,8.715],[6.689,-8.642],[0.697,-13.45],[3.516,-6.8],[1.051,-4.301],[0.006,-2.318],[-0.393,-2.275],[-0.4,-0.929],[-0.302,-0.596],[-0.078,-0.091],[-0.925,-1.138],[-2.014,-2.187],[-3.015,-0.109],[-2.551,2.033],[-2.779,3.152],[-3.023,4.635],[-1.138,4.517]],"o":[[-2.616,-11.274],[-4.378,0.562],[-2.298,-1.023],[2.22,-11.717],[-11.398,2.758],[-17.346,22.41],[-0.233,4.508],[-2.034,3.933],[-0.55,2.252],[-0.006,2.309],[0.172,0.996],[0.264,0.614],[0.054,0.106],[0.954,1.114],[1.876,2.307],[2.043,2.219],[3.26,0.118],[3.286,-2.619],[3.66,-4.151],[2.544,-3.902],[2.077,-8.24]],"v":[[33.819,-77.364],[30.955,-106.076],[19.37,-102.504],[17.977,-113.427],[32.799,-151.764],[-1.451,-127.923],[-3.494,-79.688],[-15.866,-60.339],[-20.021,-47.722],[-20.642,-40.795],[-20.059,-33.893],[-18.96,-31.065],[-18.071,-29.269],[-17.893,-28.959],[-14.981,-25.66],[-9.491,-18.628],[-2.848,-12.483],[5.17,-18.096],[14.639,-26.418],[24.369,-39.87],[31.318,-51.994]],"c":true}],"h":1},{"t":67.246,"s":[{"i":[[-2.257,5.285],[5.918,-0.734],[3.004,1.754],[-1.377,3.609],[0.576,6.935],[4.02,-8.943],[1.789,-6.925],[0.416,-4.857],[-0.067,-2.387],[-0.176,-1.654],[-0.382,-2.038],[-0.164,-0.617],[-0.099,-0.382],[-0.029,-0.127],[-0.409,-1.122],[-0.756,-0.968],[-1.036,-0.275],[-0.919,1.155],[-1.255,3.733],[-0.962,2.804],[-1.16,1.928]],"o":[[2.465,-5.772],[-4.266,0.529],[-1.081,-0.631],[3.458,-9.06],[-3.749,-0.294],[-3.687,8.202],[-1.221,4.729],[-0.204,2.38],[0.047,1.662],[0.219,2.06],[0.117,0.627],[0.101,0.382],[0.033,0.127],[0.269,1.161],[0.416,1.144],[0.646,0.828],[1.455,0.386],[2.477,-3.114],[0.945,-2.809],[0.726,-2.116],[2.975,-4.943]],"v":[[33.138,-114.995],[37.534,-133.238],[27.402,-129.702],[26.034,-136.99],[28.672,-163.095],[11.496,-139.911],[4.511,-119.59],[2.504,-105.097],[2.657,-97.934],[2.844,-92.948],[3.838,-86.81],[4.34,-84.962],[4.634,-83.814],[4.736,-83.435],[5.529,-79.95],[7.193,-76.688],[9.647,-74.671],[14.172,-74.835],[18.527,-85.835],[20.761,-94.43],[23.575,-100.541]],"c":true}],"h":1},{"t":69.415,"s":[{"i":[[-0.416,0.768],[-0.073,0.895],[0.098,1.532],[0.021,0.418],[1.65,-0.78],[2.022,-2.828],[0.684,-2.136],[-0.036,-0.878],[-0.075,-0.4],[-0.077,-0.309],[-0.093,-0.316],[-0.059,-0.115],[-0.06,-0.088],[-0.025,-0.017],[-0.273,-0.071],[-0.418,0.043],[-0.326,0.22],[-0.336,0.422],[-0.3,0.448],[-0.315,0.543],[-0.335,0.495]],"o":[[0.436,-0.805],[0.123,-1.504],[-0.027,-0.418],[-0.075,-1.465],[-3.794,1.794],[-1.368,1.913],[-0.264,0.824],[0.016,0.395],[0.058,0.309],[0.079,0.316],[0.034,0.117],[0.046,0.09],[0.014,0.021],[0.212,0.144],[0.434,0.113],[0.488,-0.051],[0.497,-0.336],[0.342,-0.43],[0.354,-0.529],[0.295,-0.51],[0.499,-0.738]],"v":[[47.758,-189.77],[48.631,-192.317],[48.342,-196.913],[48.256,-198.168],[48.053,-202.562],[40.748,-194.619],[37.945,-188.421],[37.927,-185.801],[38.101,-184.604],[38.327,-183.677],[38.569,-182.729],[38.711,-182.38],[38.883,-182.115],[38.934,-182.055],[39.59,-181.637],[40.914,-181.539],[42.229,-181.911],[43.298,-183.149],[44.262,-184.467],[45.261,-186.077],[46.091,-187.626]],"c":true}],"h":1},{"t":71.585,"s":[{"i":[[0,0],[3.124,3.159],[7.702,7.651],[2.821,7.627],[-7.678,15.175],[8.521,-6.943],[-15.171,-38.138],[0,-1.585],[2.369,-1.052],[2.282,1.956],[0.432,0.787],[1.109,11.354],[-2.909,7.106],[1.674,-1.665],[-1.409,-23.995],[-2.049,-6.081],[-3.6,-6.452],[-24.111,-3.082],[-19.63,18.08],[11.288,27.765],[0,0]],"o":[[-2.758,-3.653],[-8.042,-7.307],[-5.839,-5.8],[-5.822,-15.742],[-11.398,2.799],[-31.083,25.326],[0.487,1.225],[0,2.675],[-2.758,1.225],[-0.676,-0.573],[-7.468,-9.59],[-0.904,-9.26],[-0.477,-3.681],[-16.59,16.508],[0.72,6.093],[1.673,7.307],[12.96,21.065],[25.677,3.282],[21.955,-20.222],[0,0],[-2.526,-5.598]],"v":[[65.694,-9.286],[56.455,-19.268],[31.62,-39.491],[18.606,-59.95],[21.174,-109.139],[-8.701,-93.064],[-37.391,15.308],[-36.428,19.333],[-39.126,24.414],[-46.046,21.953],[-47.73,19.884],[-60.422,-12.911],[-57.321,-38.207],[-62.588,-38.68],[-86.231,30.528],[-82.741,48.795],[-74.223,69.871],[-14.705,109.079],[58.139,89.599],[76.494,9.227],[74.943,6.057]],"c":true}],"h":1},{"t":73.754,"s":[{"i":[[0,0],[3.124,3.113],[4.272,10.06],[-0.813,9.154],[-12.527,18.188],[8.521,-6.842],[-4.781,-44.511],[0,-1.562],[1.011,-0.228],[2.282,1.927],[0.432,0.775],[0.415,15.459],[-4.1,8.837],[1.736,-1.846],[-1.408,-23.638],[-4.556,-6.885],[-5.199,-4.905],[-29.092,-3.417],[-19.232,18.246],[11.288,27.361],[0,0]],"o":[[-2.758,-3.6],[-8.042,-7.2],[-4.297,-10.12],[1.678,-18.896],[-11.398,2.758],[-31.083,24.957],[0.139,1.295],[0,2.636],[-1.797,0.405],[-0.676,-0.565],[-6.371,-4.746],[-0.338,-12.608],[-1.843,1.5],[-17.148,18.232],[0.72,6.004],[3.069,7.115],[24.801,17.095],[25.703,3.019],[21.314,-20.221],[0,0],[-2.526,-5.516]],"v":[[58.194,-7.614],[43.955,-20.701],[27.995,-43.504],[23.187,-72.286],[48.174,-126.764],[-1.201,-96.173],[-35.391,-1.877],[-34.99,4.151],[-37.813,10.144],[-44.734,8.641],[-47.98,5.853],[-58.356,-28.966],[-52.821,-63.582],[-58.194,-58.549],[-85.481,17.121],[-79.491,45.997],[-64.973,66.517],[-8.83,107.904],[57.389,88.707],[71.994,11.755],[64.943,0.381]],"c":true}],"h":1},{"t":75.923,"s":[{"i":[[2.168,4.936],[10.247,-2.813],[4.272,10.06],[-0.085,9.94],[1.847,1.125],[6.725,-8.614],[1.913,-28.866],[0,-1],[0.647,-0.146],[1.461,1.234],[0.277,0.496],[-0.861,16.839],[-1.506,5.758],[1.528,-1.926],[-1.423,-31.337],[-4.556,-6.885],[-7.324,-3.655],[-29.092,-3.417],[-19.232,18.246],[4.084,18.857],[0,0]],"o":[[-2.866,-6.524],[-9.35,2.566],[-4.297,-10.12],[0.234,-27.384],[-1.847,-1.125],[-21.596,27.66],[-0.055,0.832],[0,1.687],[-1.15,0.26],[-0.433,-0.362],[-4.078,-3.038],[0.703,-13.733],[-1.549,1.431],[-15.089,19.029],[0.72,6.004],[3.069,7.115],[30.301,14.345],[25.703,3.019],[21.314,-20.221],[0,0],[-2.526,-5.516]],"v":[[61.819,-12.614],[45.955,-24.326],[20.495,-46.129],[15.218,-76.254],[38.799,-134.764],[-4.451,-99.298],[-37.961,-17.773],[-37.704,-13.914],[-39.511,-10.079],[-44.565,-10.415],[-47.768,-13.575],[-51.566,-50.492],[-47.696,-83.582],[-52.318,-78.528],[-79.356,13.371],[-73.491,43.122],[-54.973,64.767],[1.67,99.279],[59.264,82.957],[73.744,14.005],[68.943,2.631]],"c":true}],"h":1},{"t":78.093,"s":[{"i":[[1.816,7.187],[6.117,-0.273],[9.022,6.169],[-0.262,13.554],[-3.602,21.472],[0.654,-19.59],[2.446,-55.7],[0.162,-0.987],[1.566,-0.627],[1.796,1.078],[-2.376,4.599],[6.123,10.87],[-1.533,9.959],[1.556,-1.891],[-6.95,-15.544],[-4.556,-6.885],[-8.426,-10.845],[-18.717,-3.042],[-2.959,2.934],[0.834,18.107],[0,0]],"o":[[-1.491,-5.899],[-7.003,0.312],[-10.743,-7.346],[0.54,-27.977],[-11.398,2.758],[-1.179,35.332],[-0.198,4.51],[-0.274,1.665],[-1.251,0.501],[-1.796,-1.078],[2.451,-4.746],[-3.737,-6.634],[-1.906,1.594],[-15.77,19.162],[3.183,6.74],[3.069,7.115],[8.426,10.845],[25.545,4.152],[11.064,-10.971],[0,0],[-0.115,-5.52]],"v":[[61.444,-21.239],[47.83,-59.576],[33.12,-37.129],[19.076,-69.741],[40.049,-155.014],[-2.451,-107.548],[-29.244,-24.188],[-32.491,-15.089],[-35.896,-11.347],[-40.673,-12.545],[-41.83,-23.059],[-41.303,-53.741],[-45.094,-77.537],[-51.968,-71.748],[-53.481,4.371],[-38.866,24.122],[-26.598,52.892],[7.92,69.529],[48.014,60.457],[63.869,14.005],[63.818,-0.869]],"c":true}],"h":1},{"t":80.262,"s":[{"i":[[0.509,10.476],[6.073,-0.78],[6.833,2.865],[-3.61,12.732],[1.921,12.157],[6.436,-8.832],[10.572,-23.825],[3.671,-5.725],[0.18,-0.639],[1.248,-2.247],[1.605,-0.842],[1.405,-1.028],[0.189,-1.308],[-1.216,-1.81],[-3.429,-2.556],[-4.194,-2.24],[-3.576,-1.627],[-7.138,2.451],[-4.186,7.404],[-1.666,13.232],[0,0]],"o":[[-0.295,-6.078],[-4.378,0.562],[-5.012,-2.102],[5.108,-18.012],[-11.398,2.758],[-13.596,18.66],[-1.831,4.126],[-1.915,2.986],[-0.902,3.208],[-0.88,1.584],[-1.542,0.809],[-1.066,0.781],[-0.313,2.158],[2.386,3.55],[4.927,3.673],[4.194,2.24],[8.176,3.72],[11.408,-3.917],[7.668,-13.563],[0,0],[-0.115,-5.52]],"v":[[47.694,-65.864],[42.58,-95.701],[23.62,-76.629],[22.53,-103.187],[35.924,-154.889],[1.299,-129.798],[-10.369,-66.313],[-22.741,-50.089],[-27.021,-40.347],[-28.986,-32.889],[-33.122,-29.362],[-38.181,-28.065],[-40.946,-24.082],[-39.652,-17.916],[-29.856,-9.629],[-14.616,0.747],[-0.473,9.892],[23.67,10.404],[36.639,-10.543],[47.369,-38.12],[48.568,-48.244]],"c":true}],"h":1},{"t":82.973,"s":[{"i":[[2.371,10.217],[6.073,-0.78],[6.769,3.013],[-1.075,5.676],[-5.075,8.715],[6.689,-8.642],[0.697,-13.45],[3.516,-6.8],[1.051,-4.301],[0.006,-2.318],[-0.393,-2.275],[-0.4,-0.929],[-0.302,-0.596],[-0.078,-0.091],[-0.925,-1.138],[-2.014,-2.187],[-3.015,-0.109],[-2.551,2.033],[-2.779,3.152],[-3.023,4.635],[-1.138,4.517]],"o":[[-2.616,-11.274],[-4.378,0.562],[-2.298,-1.023],[2.22,-11.717],[-11.398,2.758],[-17.346,22.41],[-0.233,4.508],[-2.034,3.933],[-0.55,2.252],[-0.006,2.309],[0.172,0.996],[0.264,0.614],[0.054,0.106],[0.954,1.114],[1.876,2.307],[2.043,2.219],[3.26,0.118],[3.286,-2.619],[3.66,-4.151],[2.544,-3.902],[2.077,-8.24]],"v":[[33.819,-77.364],[30.955,-106.076],[19.37,-102.504],[17.977,-113.427],[32.799,-151.764],[-1.451,-127.923],[-3.494,-79.688],[-15.866,-60.339],[-20.021,-47.722],[-20.642,-40.795],[-20.059,-33.893],[-18.96,-31.065],[-18.071,-29.269],[-17.893,-28.959],[-14.981,-25.66],[-9.491,-18.628],[-2.848,-12.483],[5.17,-18.096],[14.639,-26.418],[24.369,-39.87],[31.318,-51.994]],"c":true}],"h":1},{"t":85.143,"s":[{"i":[[-2.257,5.285],[5.918,-0.734],[3.004,1.754],[-1.377,3.609],[0.576,6.935],[4.02,-8.943],[1.789,-6.925],[0.416,-4.857],[-0.067,-2.387],[-0.176,-1.654],[-0.382,-2.038],[-0.164,-0.617],[-0.099,-0.382],[-0.029,-0.127],[-0.409,-1.122],[-0.756,-0.968],[-1.036,-0.275],[-0.919,1.155],[-1.255,3.733],[-0.962,2.804],[-1.16,1.928]],"o":[[2.465,-5.772],[-4.266,0.529],[-1.081,-0.631],[3.458,-9.06],[-3.749,-0.294],[-3.687,8.202],[-1.221,4.729],[-0.204,2.38],[0.047,1.662],[0.219,2.06],[0.117,0.627],[0.101,0.382],[0.033,0.127],[0.269,1.161],[0.416,1.144],[0.646,0.828],[1.455,0.386],[2.477,-3.114],[0.945,-2.809],[0.726,-2.116],[2.975,-4.943]],"v":[[33.138,-114.995],[37.534,-133.238],[27.402,-129.702],[26.034,-136.99],[28.672,-163.095],[11.496,-139.911],[4.511,-119.59],[2.504,-105.097],[2.657,-97.934],[2.844,-92.948],[3.838,-86.81],[4.34,-84.962],[4.634,-83.814],[4.736,-83.435],[5.529,-79.95],[7.193,-76.688],[9.647,-74.671],[14.172,-74.835],[18.527,-85.835],[20.761,-94.43],[23.575,-100.541]],"c":true}],"h":1},{"t":87.312,"s":[{"i":[[-0.416,0.768],[-0.073,0.895],[0.098,1.532],[0.021,0.418],[1.65,-0.78],[2.022,-2.828],[0.684,-2.136],[-0.036,-0.878],[-0.075,-0.4],[-0.077,-0.309],[-0.093,-0.316],[-0.059,-0.115],[-0.06,-0.088],[-0.025,-0.017],[-0.273,-0.071],[-0.418,0.043],[-0.326,0.22],[-0.336,0.422],[-0.3,0.448],[-0.315,0.543],[-0.335,0.495]],"o":[[0.436,-0.805],[0.123,-1.504],[-0.027,-0.418],[-0.075,-1.465],[-3.794,1.794],[-1.368,1.913],[-0.264,0.824],[0.016,0.395],[0.058,0.309],[0.079,0.316],[0.034,0.117],[0.046,0.09],[0.014,0.021],[0.212,0.144],[0.434,0.113],[0.488,-0.051],[0.497,-0.336],[0.342,-0.43],[0.354,-0.529],[0.295,-0.51],[0.499,-0.738]],"v":[[47.758,-189.77],[48.631,-192.317],[48.342,-196.913],[48.256,-198.168],[48.053,-202.562],[40.748,-194.619],[37.945,-188.421],[37.927,-185.801],[38.101,-184.604],[38.327,-183.677],[38.569,-182.729],[38.711,-182.38],[38.883,-182.115],[38.934,-182.055],[39.59,-181.637],[40.914,-181.539],[42.229,-181.911],[43.298,-183.149],[44.262,-184.467],[45.261,-186.077],[46.091,-187.626]],"c":true}],"h":1},{"t":89.48,"s":[{"i":[[0,0],[3.124,3.159],[7.702,7.651],[2.821,7.627],[-7.678,15.175],[8.521,-6.943],[-15.171,-38.138],[0,-1.585],[2.369,-1.052],[2.282,1.956],[0.432,0.787],[1.109,11.354],[-2.909,7.106],[1.674,-1.665],[-1.409,-23.995],[-2.049,-6.081],[-3.6,-6.452],[-24.111,-3.082],[-19.63,18.08],[11.288,27.765],[0,0]],"o":[[-2.758,-3.653],[-8.042,-7.307],[-5.839,-5.8],[-5.822,-15.742],[-11.398,2.799],[-31.083,25.326],[0.487,1.225],[0,2.675],[-2.758,1.225],[-0.676,-0.573],[-7.468,-9.59],[-0.904,-9.26],[-0.477,-3.681],[-16.59,16.508],[0.72,6.093],[1.673,7.307],[12.96,21.065],[25.677,3.282],[21.955,-20.222],[0,0],[-2.526,-5.598]],"v":[[65.694,-9.286],[56.455,-19.268],[31.62,-39.491],[18.606,-59.95],[21.174,-109.139],[-8.701,-93.064],[-37.391,15.308],[-36.428,19.333],[-39.126,24.414],[-46.046,21.953],[-47.73,19.884],[-60.422,-12.911],[-57.321,-38.207],[-62.588,-38.68],[-86.231,30.528],[-82.741,48.795],[-74.223,69.871],[-14.705,109.079],[58.139,89.599],[76.494,9.227],[74.943,6.057]],"c":true}],"h":1},{"t":91.65,"s":[{"i":[[0,0],[3.124,3.113],[4.272,10.06],[-0.813,9.154],[-12.527,18.188],[8.521,-6.842],[-4.781,-44.511],[0,-1.562],[1.011,-0.228],[2.282,1.927],[0.432,0.775],[0.415,15.459],[-4.1,8.837],[1.736,-1.846],[-1.408,-23.638],[-4.556,-6.885],[-5.199,-4.905],[-29.092,-3.417],[-19.232,18.246],[11.288,27.361],[0,0]],"o":[[-2.758,-3.6],[-8.042,-7.2],[-4.297,-10.12],[1.678,-18.896],[-11.398,2.758],[-31.083,24.957],[0.139,1.295],[0,2.636],[-1.797,0.405],[-0.676,-0.565],[-6.371,-4.746],[-0.338,-12.608],[-1.843,1.5],[-17.148,18.232],[0.72,6.004],[3.069,7.115],[24.801,17.095],[25.703,3.019],[21.314,-20.221],[0,0],[-2.526,-5.516]],"v":[[58.194,-7.614],[43.955,-20.701],[27.995,-43.504],[23.187,-72.286],[48.174,-126.764],[-1.201,-96.173],[-35.391,-1.877],[-34.99,4.151],[-37.813,10.144],[-44.734,8.641],[-47.98,5.853],[-58.356,-28.966],[-52.821,-63.582],[-58.194,-58.549],[-85.481,17.121],[-79.491,45.997],[-64.973,66.517],[-8.83,107.904],[57.389,88.707],[71.994,11.755],[64.943,0.381]],"c":true}],"h":1},{"t":93.819,"s":[{"i":[[2.168,4.936],[10.247,-2.813],[4.272,10.06],[-0.085,9.94],[1.847,1.125],[6.725,-8.614],[1.913,-28.866],[0,-1],[0.647,-0.146],[1.461,1.234],[0.277,0.496],[-0.861,16.839],[-1.506,5.758],[1.528,-1.926],[-1.423,-31.337],[-4.556,-6.885],[-7.324,-3.655],[-29.092,-3.417],[-19.232,18.246],[4.084,18.857],[0,0]],"o":[[-2.866,-6.524],[-9.35,2.566],[-4.297,-10.12],[0.234,-27.384],[-1.847,-1.125],[-21.596,27.66],[-0.055,0.832],[0,1.687],[-1.15,0.26],[-0.433,-0.362],[-4.078,-3.038],[0.703,-13.733],[-1.549,1.431],[-15.089,19.029],[0.72,6.004],[3.069,7.115],[30.301,14.345],[25.703,3.019],[21.314,-20.221],[0,0],[-2.526,-5.516]],"v":[[61.819,-12.614],[45.955,-24.326],[20.495,-46.129],[15.218,-76.254],[38.799,-134.764],[-4.451,-99.298],[-37.961,-17.773],[-37.704,-13.914],[-39.511,-10.079],[-44.565,-10.415],[-47.768,-13.575],[-51.566,-50.492],[-47.696,-83.582],[-52.318,-78.528],[-79.356,13.371],[-73.491,43.122],[-54.973,64.767],[1.67,99.279],[59.264,82.957],[73.744,14.005],[68.943,2.631]],"c":true}],"h":1},{"t":95.988,"s":[{"i":[[1.816,7.187],[6.117,-0.273],[9.022,6.169],[-0.262,13.554],[-3.602,21.472],[0.654,-19.59],[2.446,-55.7],[0.162,-0.987],[1.566,-0.627],[1.796,1.078],[-2.376,4.599],[6.123,10.87],[-1.533,9.959],[1.556,-1.891],[-6.95,-15.544],[-4.556,-6.885],[-8.426,-10.845],[-18.717,-3.042],[-2.959,2.934],[0.834,18.107],[0,0]],"o":[[-1.491,-5.899],[-7.003,0.312],[-10.743,-7.346],[0.54,-27.977],[-11.398,2.758],[-1.179,35.332],[-0.198,4.51],[-0.274,1.665],[-1.251,0.501],[-1.796,-1.078],[2.451,-4.746],[-3.737,-6.634],[-1.906,1.594],[-15.77,19.162],[3.183,6.74],[3.069,7.115],[8.426,10.845],[25.545,4.152],[11.064,-10.971],[0,0],[-0.115,-5.52]],"v":[[61.444,-21.239],[47.83,-59.576],[33.12,-37.129],[19.076,-69.741],[40.049,-155.014],[-2.451,-107.548],[-29.244,-24.188],[-32.491,-15.089],[-35.896,-11.347],[-40.673,-12.545],[-41.83,-23.059],[-41.303,-53.741],[-45.094,-77.537],[-51.968,-71.748],[-53.481,4.371],[-38.866,24.122],[-26.598,52.892],[7.92,69.529],[48.014,60.457],[63.869,14.005],[63.818,-0.869]],"c":true}],"h":1},{"t":98.157,"s":[{"i":[[0.509,10.476],[6.073,-0.78],[6.833,2.865],[-3.61,12.732],[1.921,12.157],[6.436,-8.832],[10.572,-23.825],[3.671,-5.725],[0.18,-0.639],[1.248,-2.247],[1.605,-0.842],[1.405,-1.028],[0.189,-1.308],[-1.216,-1.81],[-3.429,-2.556],[-4.194,-2.24],[-3.576,-1.627],[-7.138,2.451],[-4.186,7.404],[-1.666,13.232],[0,0]],"o":[[-0.295,-6.078],[-4.378,0.562],[-5.012,-2.102],[5.108,-18.012],[-11.398,2.758],[-13.596,18.66],[-1.831,4.126],[-1.915,2.986],[-0.902,3.208],[-0.88,1.584],[-1.542,0.809],[-1.066,0.781],[-0.313,2.158],[2.386,3.55],[4.927,3.673],[4.194,2.24],[8.176,3.72],[11.408,-3.917],[7.668,-13.563],[0,0],[-0.115,-5.52]],"v":[[47.694,-65.864],[42.58,-95.701],[23.62,-76.629],[22.53,-103.187],[35.924,-154.889],[1.299,-129.798],[-10.369,-66.313],[-22.741,-50.089],[-27.021,-40.347],[-28.986,-32.889],[-33.122,-29.362],[-38.181,-28.065],[-40.946,-24.082],[-39.652,-17.916],[-29.856,-9.629],[-14.616,0.747],[-0.473,9.892],[23.67,10.404],[36.639,-10.543],[47.369,-38.12],[48.568,-48.244]],"c":true}],"h":1},{"t":100.869,"s":[{"i":[[2.371,10.217],[6.073,-0.78],[6.769,3.013],[-1.075,5.676],[-5.075,8.715],[6.689,-8.642],[0.697,-13.45],[3.516,-6.8],[1.051,-4.301],[0.006,-2.318],[-0.393,-2.275],[-0.4,-0.929],[-0.302,-0.596],[-0.078,-0.091],[-0.925,-1.138],[-2.014,-2.187],[-3.015,-0.109],[-2.551,2.033],[-2.779,3.152],[-3.023,4.635],[-1.138,4.517]],"o":[[-2.616,-11.274],[-4.378,0.562],[-2.298,-1.023],[2.22,-11.717],[-11.398,2.758],[-17.346,22.41],[-0.233,4.508],[-2.034,3.933],[-0.55,2.252],[-0.006,2.309],[0.172,0.996],[0.264,0.614],[0.054,0.106],[0.954,1.114],[1.876,2.307],[2.043,2.219],[3.26,0.118],[3.286,-2.619],[3.66,-4.151],[2.544,-3.902],[2.077,-8.24]],"v":[[33.819,-77.364],[30.955,-106.076],[19.37,-102.504],[17.977,-113.427],[32.799,-151.764],[-1.451,-127.923],[-3.494,-79.688],[-15.866,-60.339],[-20.021,-47.722],[-20.642,-40.795],[-20.059,-33.893],[-18.96,-31.065],[-18.071,-29.269],[-17.893,-28.959],[-14.981,-25.66],[-9.491,-18.628],[-2.848,-12.483],[5.17,-18.096],[14.639,-26.418],[24.369,-39.87],[31.318,-51.994]],"c":true}],"h":1},{"t":103.038,"s":[{"i":[[-2.257,5.285],[5.918,-0.734],[3.004,1.754],[-1.377,3.609],[0.576,6.935],[4.02,-8.943],[1.789,-6.925],[0.416,-4.857],[-0.067,-2.387],[-0.176,-1.654],[-0.382,-2.038],[-0.164,-0.617],[-0.099,-0.382],[-0.029,-0.127],[-0.409,-1.122],[-0.756,-0.968],[-1.036,-0.275],[-0.919,1.155],[-1.255,3.733],[-0.962,2.804],[-1.16,1.928]],"o":[[2.465,-5.772],[-4.266,0.529],[-1.081,-0.631],[3.458,-9.06],[-3.749,-0.294],[-3.687,8.202],[-1.221,4.729],[-0.204,2.38],[0.047,1.662],[0.219,2.06],[0.117,0.627],[0.101,0.382],[0.033,0.127],[0.269,1.161],[0.416,1.144],[0.646,0.828],[1.455,0.386],[2.477,-3.114],[0.945,-2.809],[0.726,-2.116],[2.975,-4.943]],"v":[[33.138,-114.995],[37.534,-133.238],[27.402,-129.702],[26.034,-136.99],[28.672,-163.095],[11.496,-139.911],[4.511,-119.59],[2.504,-105.097],[2.657,-97.934],[2.844,-92.948],[3.838,-86.81],[4.34,-84.962],[4.634,-83.814],[4.736,-83.435],[5.529,-79.95],[7.193,-76.688],[9.647,-74.671],[14.172,-74.835],[18.527,-85.835],[20.761,-94.43],[23.575,-100.541]],"c":true}],"h":1},{"t":105.208,"s":[{"i":[[-0.416,0.768],[-0.073,0.895],[0.098,1.532],[0.021,0.418],[1.65,-0.78],[2.022,-2.828],[0.684,-2.136],[-0.036,-0.878],[-0.075,-0.4],[-0.077,-0.309],[-0.093,-0.316],[-0.059,-0.115],[-0.06,-0.088],[-0.025,-0.017],[-0.273,-0.071],[-0.418,0.043],[-0.326,0.22],[-0.336,0.422],[-0.3,0.448],[-0.315,0.543],[-0.335,0.495]],"o":[[0.436,-0.805],[0.123,-1.504],[-0.027,-0.418],[-0.075,-1.465],[-3.794,1.794],[-1.368,1.913],[-0.264,0.824],[0.016,0.395],[0.058,0.309],[0.079,0.316],[0.034,0.117],[0.046,0.09],[0.014,0.021],[0.212,0.144],[0.434,0.113],[0.488,-0.051],[0.497,-0.336],[0.342,-0.43],[0.354,-0.529],[0.295,-0.51],[0.499,-0.738]],"v":[[47.758,-189.77],[48.631,-192.317],[48.342,-196.913],[48.256,-198.168],[48.053,-202.562],[40.748,-194.619],[37.945,-188.421],[37.927,-185.801],[38.101,-184.604],[38.327,-183.677],[38.569,-182.729],[38.711,-182.38],[38.883,-182.115],[38.934,-182.055],[39.59,-181.637],[40.914,-181.539],[42.229,-181.911],[43.298,-183.149],[44.262,-184.467],[45.261,-186.077],[46.091,-187.626]],"c":true}],"h":1},{"t":107.377,"s":[{"i":[[0,0],[3.124,3.159],[7.702,7.651],[2.821,7.627],[-7.678,15.175],[8.521,-6.943],[-15.171,-38.138],[0,-1.585],[2.369,-1.052],[2.282,1.956],[0.432,0.787],[1.109,11.354],[-2.909,7.106],[1.674,-1.665],[-1.409,-23.995],[-2.049,-6.081],[-3.6,-6.452],[-24.111,-3.082],[-19.63,18.08],[11.288,27.765],[0,0]],"o":[[-2.758,-3.653],[-8.042,-7.307],[-5.839,-5.8],[-5.822,-15.742],[-11.398,2.799],[-31.083,25.326],[0.487,1.225],[0,2.675],[-2.758,1.225],[-0.676,-0.573],[-7.468,-9.59],[-0.904,-9.26],[-0.477,-3.681],[-16.59,16.508],[0.72,6.093],[1.673,7.307],[12.96,21.065],[25.677,3.282],[21.955,-20.222],[0,0],[-2.526,-5.598]],"v":[[65.694,-9.286],[56.455,-19.268],[31.62,-39.491],[18.606,-59.95],[21.174,-109.139],[-8.701,-93.064],[-37.391,15.308],[-36.428,19.333],[-39.126,24.414],[-46.046,21.953],[-47.73,19.884],[-60.422,-12.911],[-57.321,-38.207],[-62.588,-38.68],[-86.231,30.528],[-82.741,48.795],[-74.223,69.871],[-14.705,109.079],[58.139,89.599],[76.494,9.227],[74.943,6.057]],"c":true}],"h":1},{"t":109.546,"s":[{"i":[[0,0],[3.124,3.113],[4.272,10.06],[-0.813,9.154],[-12.527,18.188],[8.521,-6.842],[-4.781,-44.511],[0,-1.562],[1.011,-0.228],[2.282,1.927],[0.432,0.775],[0.415,15.459],[-4.1,8.837],[1.736,-1.846],[-1.408,-23.638],[-4.556,-6.885],[-5.199,-4.905],[-29.092,-3.417],[-19.232,18.246],[11.288,27.361],[0,0]],"o":[[-2.758,-3.6],[-8.042,-7.2],[-4.297,-10.12],[1.678,-18.896],[-11.398,2.758],[-31.083,24.957],[0.139,1.295],[0,2.636],[-1.797,0.405],[-0.676,-0.565],[-6.371,-4.746],[-0.338,-12.608],[-1.843,1.5],[-17.148,18.232],[0.72,6.004],[3.069,7.115],[24.801,17.095],[25.703,3.019],[21.314,-20.221],[0,0],[-2.526,-5.516]],"v":[[58.194,-7.614],[43.955,-20.701],[27.995,-43.504],[23.187,-72.286],[48.174,-126.764],[-1.201,-96.173],[-35.391,-1.877],[-34.99,4.151],[-37.813,10.144],[-44.734,8.641],[-47.98,5.853],[-58.356,-28.966],[-52.821,-63.582],[-58.194,-58.549],[-85.481,17.121],[-79.491,45.997],[-64.973,66.517],[-8.83,107.904],[57.389,88.707],[71.994,11.755],[64.943,0.381]],"c":true}],"h":1},{"t":111.716,"s":[{"i":[[2.168,4.936],[10.247,-2.813],[4.272,10.06],[-0.085,9.94],[1.847,1.125],[6.725,-8.614],[1.913,-28.866],[0,-1],[0.647,-0.146],[1.461,1.234],[0.277,0.496],[-0.861,16.839],[-1.506,5.758],[1.528,-1.926],[-1.423,-31.337],[-4.556,-6.885],[-7.324,-3.655],[-29.092,-3.417],[-19.232,18.246],[4.084,18.857],[0,0]],"o":[[-2.866,-6.524],[-9.35,2.566],[-4.297,-10.12],[0.234,-27.384],[-1.847,-1.125],[-21.596,27.66],[-0.055,0.832],[0,1.687],[-1.15,0.26],[-0.433,-0.362],[-4.078,-3.038],[0.703,-13.733],[-1.549,1.431],[-15.089,19.029],[0.72,6.004],[3.069,7.115],[30.301,14.345],[25.703,3.019],[21.314,-20.221],[0,0],[-2.526,-5.516]],"v":[[61.819,-12.614],[45.955,-24.326],[20.495,-46.129],[15.218,-76.254],[38.799,-134.764],[-4.451,-99.298],[-37.961,-17.773],[-37.704,-13.914],[-39.511,-10.079],[-44.565,-10.415],[-47.768,-13.575],[-51.566,-50.492],[-47.696,-83.582],[-52.318,-78.528],[-79.356,13.371],[-73.491,43.122],[-54.973,64.767],[1.67,99.279],[59.264,82.957],[73.744,14.005],[68.943,2.631]],"c":true}],"h":1},{"t":113.885,"s":[{"i":[[1.816,7.187],[6.117,-0.273],[9.022,6.169],[-0.262,13.554],[-3.602,21.472],[0.654,-19.59],[2.446,-55.7],[0.162,-0.987],[1.566,-0.627],[1.796,1.078],[-2.376,4.599],[6.123,10.87],[-1.533,9.959],[1.556,-1.891],[-6.95,-15.544],[-4.556,-6.885],[-8.426,-10.845],[-18.717,-3.042],[-2.959,2.934],[0.834,18.107],[0,0]],"o":[[-1.491,-5.899],[-7.003,0.312],[-10.743,-7.346],[0.54,-27.977],[-11.398,2.758],[-1.179,35.332],[-0.198,4.51],[-0.274,1.665],[-1.251,0.501],[-1.796,-1.078],[2.451,-4.746],[-3.737,-6.634],[-1.906,1.594],[-15.77,19.162],[3.183,6.74],[3.069,7.115],[8.426,10.845],[25.545,4.152],[11.064,-10.971],[0,0],[-0.115,-5.52]],"v":[[61.444,-21.239],[47.83,-59.576],[33.12,-37.129],[19.076,-69.741],[40.049,-155.014],[-2.451,-107.548],[-29.244,-24.188],[-32.491,-15.089],[-35.896,-11.347],[-40.673,-12.545],[-41.83,-23.059],[-41.303,-53.741],[-45.094,-77.537],[-51.968,-71.748],[-53.481,4.371],[-38.866,24.122],[-26.598,52.892],[7.92,69.529],[48.014,60.457],[63.869,14.005],[63.818,-0.869]],"c":true}],"h":1},{"t":116.054,"s":[{"i":[[0.509,10.476],[6.073,-0.78],[6.833,2.865],[-3.61,12.732],[1.921,12.157],[6.436,-8.832],[10.572,-23.825],[3.671,-5.725],[0.18,-0.639],[1.248,-2.247],[1.605,-0.842],[1.405,-1.028],[0.189,-1.308],[-1.216,-1.81],[-3.429,-2.556],[-4.194,-2.24],[-3.576,-1.627],[-7.138,2.451],[-4.186,7.404],[-1.666,13.232],[0,0]],"o":[[-0.295,-6.078],[-4.378,0.562],[-5.012,-2.102],[5.108,-18.012],[-11.398,2.758],[-13.596,18.66],[-1.831,4.126],[-1.915,2.986],[-0.902,3.208],[-0.88,1.584],[-1.542,0.809],[-1.066,0.781],[-0.313,2.158],[2.386,3.55],[4.927,3.673],[4.194,2.24],[8.176,3.72],[11.408,-3.917],[7.668,-13.563],[0,0],[-0.115,-5.52]],"v":[[47.694,-65.864],[42.58,-95.701],[23.62,-76.629],[22.53,-103.187],[35.924,-154.889],[1.299,-129.798],[-10.369,-66.313],[-22.741,-50.089],[-27.021,-40.347],[-28.986,-32.889],[-33.122,-29.362],[-38.181,-28.065],[-40.946,-24.082],[-39.652,-17.916],[-29.856,-9.629],[-14.616,0.747],[-0.473,9.892],[23.67,10.404],[36.639,-10.543],[47.369,-38.12],[48.568,-48.244]],"c":true}],"h":1},{"t":118.766,"s":[{"i":[[2.371,10.217],[6.073,-0.78],[6.769,3.013],[-1.075,5.676],[-5.075,8.715],[6.689,-8.642],[0.697,-13.45],[3.516,-6.8],[1.051,-4.301],[0.006,-2.318],[-0.393,-2.275],[-0.4,-0.929],[-0.302,-0.596],[-0.078,-0.091],[-0.925,-1.138],[-2.014,-2.187],[-3.015,-0.109],[-2.551,2.033],[-2.779,3.152],[-3.023,4.635],[-1.138,4.517]],"o":[[-2.616,-11.274],[-4.378,0.562],[-2.298,-1.023],[2.22,-11.717],[-11.398,2.758],[-17.346,22.41],[-0.233,4.508],[-2.034,3.933],[-0.55,2.252],[-0.006,2.309],[0.172,0.996],[0.264,0.614],[0.054,0.106],[0.954,1.114],[1.876,2.307],[2.043,2.219],[3.26,0.118],[3.286,-2.619],[3.66,-4.151],[2.544,-3.902],[2.077,-8.24]],"v":[[33.819,-77.364],[30.955,-106.076],[19.37,-102.504],[17.977,-113.427],[32.799,-151.764],[-1.451,-127.923],[-3.494,-79.688],[-15.866,-60.339],[-20.021,-47.722],[-20.642,-40.795],[-20.059,-33.893],[-18.96,-31.065],[-18.071,-29.269],[-17.893,-28.959],[-14.981,-25.66],[-9.491,-18.628],[-2.848,-12.483],[5.17,-18.096],[14.639,-26.418],[24.369,-39.87],[31.318,-51.994]],"c":true}],"h":1},{"t":120.935,"s":[{"i":[[-2.257,5.285],[5.918,-0.734],[3.004,1.754],[-1.377,3.609],[0.576,6.935],[4.02,-8.943],[1.789,-6.925],[0.416,-4.857],[-0.067,-2.387],[-0.176,-1.654],[-0.382,-2.038],[-0.164,-0.617],[-0.099,-0.382],[-0.029,-0.127],[-0.409,-1.122],[-0.756,-0.968],[-1.036,-0.275],[-0.919,1.155],[-1.255,3.733],[-0.962,2.804],[-1.16,1.928]],"o":[[2.465,-5.772],[-4.266,0.529],[-1.081,-0.631],[3.458,-9.06],[-3.749,-0.294],[-3.687,8.202],[-1.221,4.729],[-0.204,2.38],[0.047,1.662],[0.219,2.06],[0.117,0.627],[0.101,0.382],[0.033,0.127],[0.269,1.161],[0.416,1.144],[0.646,0.828],[1.455,0.386],[2.477,-3.114],[0.945,-2.809],[0.726,-2.116],[2.975,-4.943]],"v":[[33.138,-114.995],[37.534,-133.238],[27.402,-129.702],[26.034,-136.99],[28.672,-163.095],[11.496,-139.911],[4.511,-119.59],[2.504,-105.097],[2.657,-97.934],[2.844,-92.948],[3.838,-86.81],[4.34,-84.962],[4.634,-83.814],[4.736,-83.435],[5.529,-79.95],[7.193,-76.688],[9.647,-74.671],[14.172,-74.835],[18.527,-85.835],[20.761,-94.43],[23.575,-100.541]],"c":true}],"h":1},{"t":123.104,"s":[{"i":[[-0.416,0.768],[-0.073,0.895],[0.098,1.532],[0.021,0.418],[1.65,-0.78],[2.022,-2.828],[0.684,-2.136],[-0.036,-0.878],[-0.075,-0.4],[-0.077,-0.309],[-0.093,-0.316],[-0.059,-0.115],[-0.06,-0.088],[-0.025,-0.017],[-0.273,-0.071],[-0.418,0.043],[-0.326,0.22],[-0.336,0.422],[-0.3,0.448],[-0.315,0.543],[-0.335,0.495]],"o":[[0.436,-0.805],[0.123,-1.504],[-0.027,-0.418],[-0.075,-1.465],[-3.794,1.794],[-1.368,1.913],[-0.264,0.824],[0.016,0.395],[0.058,0.309],[0.079,0.316],[0.034,0.117],[0.046,0.09],[0.014,0.021],[0.212,0.144],[0.434,0.113],[0.488,-0.051],[0.497,-0.336],[0.342,-0.43],[0.354,-0.529],[0.295,-0.51],[0.499,-0.738]],"v":[[47.758,-189.77],[48.631,-192.317],[48.342,-196.913],[48.256,-198.168],[48.053,-202.562],[40.748,-194.619],[37.945,-188.421],[37.927,-185.801],[38.101,-184.604],[38.327,-183.677],[38.569,-182.729],[38.711,-182.38],[38.883,-182.115],[38.934,-182.055],[39.59,-181.637],[40.914,-181.539],[42.229,-181.911],[43.298,-183.149],[44.262,-184.467],[45.261,-186.077],[46.091,-187.626]],"c":true}],"h":1},{"t":125.273,"s":[{"i":[[0,0],[3.124,3.159],[7.702,7.651],[2.821,7.627],[-7.678,15.175],[8.521,-6.943],[-15.171,-38.138],[0,-1.585],[2.369,-1.052],[2.282,1.956],[0.432,0.787],[1.109,11.354],[-2.909,7.106],[1.674,-1.665],[-1.409,-23.995],[-2.049,-6.081],[-3.6,-6.452],[-24.111,-3.082],[-19.63,18.08],[11.288,27.765],[0,0]],"o":[[-2.758,-3.653],[-8.042,-7.307],[-5.839,-5.8],[-5.822,-15.742],[-11.398,2.799],[-31.083,25.326],[0.487,1.225],[0,2.675],[-2.758,1.225],[-0.676,-0.573],[-7.468,-9.59],[-0.904,-9.26],[-0.477,-3.681],[-16.59,16.508],[0.72,6.093],[1.673,7.307],[12.96,21.065],[25.677,3.282],[21.955,-20.222],[0,0],[-2.526,-5.598]],"v":[[65.694,-9.286],[56.455,-19.268],[31.62,-39.491],[18.606,-59.95],[21.174,-109.139],[-8.701,-93.064],[-37.391,15.308],[-36.428,19.333],[-39.126,24.414],[-46.046,21.953],[-47.73,19.884],[-60.422,-12.911],[-57.321,-38.207],[-62.588,-38.68],[-86.231,30.528],[-82.741,48.795],[-74.223,69.871],[-14.705,109.079],[58.139,89.599],[76.494,9.227],[74.943,6.057]],"c":true}],"h":1},{"t":127.442,"s":[{"i":[[0,0],[3.124,3.113],[4.272,10.06],[-0.813,9.154],[-12.527,18.188],[8.521,-6.842],[-4.781,-44.511],[0,-1.562],[1.011,-0.228],[2.282,1.927],[0.432,0.775],[0.415,15.459],[-4.1,8.837],[1.736,-1.846],[-1.408,-23.638],[-4.556,-6.885],[-5.199,-4.905],[-29.092,-3.417],[-19.232,18.246],[11.288,27.361],[0,0]],"o":[[-2.758,-3.6],[-8.042,-7.2],[-4.297,-10.12],[1.678,-18.896],[-11.398,2.758],[-31.083,24.957],[0.139,1.295],[0,2.636],[-1.797,0.405],[-0.676,-0.565],[-6.371,-4.746],[-0.338,-12.608],[-1.843,1.5],[-17.148,18.232],[0.72,6.004],[3.069,7.115],[24.801,17.095],[25.703,3.019],[21.314,-20.221],[0,0],[-2.526,-5.516]],"v":[[58.194,-7.614],[43.955,-20.701],[27.995,-43.504],[23.187,-72.286],[48.174,-126.764],[-1.201,-96.173],[-35.391,-1.877],[-34.99,4.151],[-37.813,10.144],[-44.734,8.641],[-47.98,5.853],[-58.356,-28.966],[-52.821,-63.582],[-58.194,-58.549],[-85.481,17.121],[-79.491,45.997],[-64.973,66.517],[-8.83,107.904],[57.389,88.707],[71.994,11.755],[64.943,0.381]],"c":true}],"h":1},{"t":129.611,"s":[{"i":[[2.168,4.936],[10.247,-2.813],[4.272,10.06],[-0.085,9.94],[1.847,1.125],[6.725,-8.614],[1.913,-28.866],[0,-1],[0.647,-0.146],[1.461,1.234],[0.277,0.496],[-0.861,16.839],[-1.506,5.758],[1.528,-1.926],[-1.423,-31.337],[-4.556,-6.885],[-7.324,-3.655],[-29.092,-3.417],[-19.232,18.246],[4.084,18.857],[0,0]],"o":[[-2.866,-6.524],[-9.35,2.566],[-4.297,-10.12],[0.234,-27.384],[-1.847,-1.125],[-21.596,27.66],[-0.055,0.832],[0,1.687],[-1.15,0.26],[-0.433,-0.362],[-4.078,-3.038],[0.703,-13.733],[-1.549,1.431],[-15.089,19.029],[0.72,6.004],[3.069,7.115],[30.301,14.345],[25.703,3.019],[21.314,-20.221],[0,0],[-2.526,-5.516]],"v":[[61.819,-12.614],[45.955,-24.326],[20.495,-46.129],[15.218,-76.254],[38.799,-134.764],[-4.451,-99.298],[-37.961,-17.773],[-37.704,-13.914],[-39.511,-10.079],[-44.565,-10.415],[-47.768,-13.575],[-51.566,-50.492],[-47.696,-83.582],[-52.318,-78.528],[-79.356,13.371],[-73.491,43.122],[-54.973,64.767],[1.67,99.279],[59.264,82.957],[73.744,14.005],[68.943,2.631]],"c":true}],"h":1},{"t":131.781,"s":[{"i":[[1.816,7.187],[6.117,-0.273],[9.022,6.169],[-0.262,13.554],[-3.602,21.472],[0.654,-19.59],[2.446,-55.7],[0.162,-0.987],[1.566,-0.627],[1.796,1.078],[-2.376,4.599],[6.123,10.87],[-1.533,9.959],[1.556,-1.891],[-6.95,-15.544],[-4.556,-6.885],[-8.426,-10.845],[-18.717,-3.042],[-2.959,2.934],[0.834,18.107],[0,0]],"o":[[-1.491,-5.899],[-7.003,0.312],[-10.743,-7.346],[0.54,-27.977],[-11.398,2.758],[-1.179,35.332],[-0.198,4.51],[-0.274,1.665],[-1.251,0.501],[-1.796,-1.078],[2.451,-4.746],[-3.737,-6.634],[-1.906,1.594],[-15.77,19.162],[3.183,6.74],[3.069,7.115],[8.426,10.845],[25.545,4.152],[11.064,-10.971],[0,0],[-0.115,-5.52]],"v":[[61.444,-21.239],[47.83,-59.576],[33.12,-37.129],[19.076,-69.741],[40.049,-155.014],[-2.451,-107.548],[-29.244,-24.188],[-32.491,-15.089],[-35.896,-11.347],[-40.673,-12.545],[-41.83,-23.059],[-41.303,-53.741],[-45.094,-77.537],[-51.968,-71.748],[-53.481,4.371],[-38.866,24.122],[-26.598,52.892],[7.92,69.529],[48.014,60.457],[63.869,14.005],[63.818,-0.869]],"c":true}],"h":1},{"t":133.95,"s":[{"i":[[0.509,10.476],[6.073,-0.78],[6.833,2.865],[-3.61,12.732],[1.921,12.157],[6.436,-8.832],[10.572,-23.825],[3.671,-5.725],[0.18,-0.639],[1.248,-2.247],[1.605,-0.842],[1.405,-1.028],[0.189,-1.308],[-1.216,-1.81],[-3.429,-2.556],[-4.194,-2.24],[-3.576,-1.627],[-7.138,2.451],[-4.186,7.404],[-1.666,13.232],[0,0]],"o":[[-0.295,-6.078],[-4.378,0.562],[-5.012,-2.102],[5.108,-18.012],[-11.398,2.758],[-13.596,18.66],[-1.831,4.126],[-1.915,2.986],[-0.902,3.208],[-0.88,1.584],[-1.542,0.809],[-1.066,0.781],[-0.313,2.158],[2.386,3.55],[4.927,3.673],[4.194,2.24],[8.176,3.72],[11.408,-3.917],[7.668,-13.563],[0,0],[-0.115,-5.52]],"v":[[47.694,-65.864],[42.58,-95.701],[23.62,-76.629],[22.53,-103.187],[35.924,-154.889],[1.299,-129.798],[-10.369,-66.313],[-22.741,-50.089],[-27.021,-40.347],[-28.986,-32.889],[-33.122,-29.362],[-38.181,-28.065],[-40.946,-24.082],[-39.652,-17.916],[-29.856,-9.629],[-14.616,0.747],[-0.473,9.892],[23.67,10.404],[36.639,-10.543],[47.369,-38.12],[48.568,-48.244]],"c":true}],"h":1},{"t":136.661,"s":[{"i":[[2.371,10.217],[6.073,-0.78],[6.769,3.013],[-1.075,5.676],[-5.075,8.715],[6.689,-8.642],[0.697,-13.45],[3.516,-6.8],[1.051,-4.301],[0.006,-2.318],[-0.393,-2.275],[-0.4,-0.929],[-0.302,-0.596],[-0.078,-0.091],[-0.925,-1.138],[-2.014,-2.187],[-3.015,-0.109],[-2.551,2.033],[-2.779,3.152],[-3.023,4.635],[-1.138,4.517]],"o":[[-2.616,-11.274],[-4.378,0.562],[-2.298,-1.023],[2.22,-11.717],[-11.398,2.758],[-17.346,22.41],[-0.233,4.508],[-2.034,3.933],[-0.55,2.252],[-0.006,2.309],[0.172,0.996],[0.264,0.614],[0.054,0.106],[0.954,1.114],[1.876,2.307],[2.043,2.219],[3.26,0.118],[3.286,-2.619],[3.66,-4.151],[2.544,-3.902],[2.077,-8.24]],"v":[[33.819,-77.364],[30.955,-106.076],[19.37,-102.504],[17.977,-113.427],[32.799,-151.764],[-1.451,-127.923],[-3.494,-79.688],[-15.866,-60.339],[-20.021,-47.722],[-20.642,-40.795],[-20.059,-33.893],[-18.96,-31.065],[-18.071,-29.269],[-17.893,-28.959],[-14.981,-25.66],[-9.491,-18.628],[-2.848,-12.483],[5.17,-18.096],[14.639,-26.418],[24.369,-39.87],[31.318,-51.994]],"c":true}],"h":1},{"t":138.831,"s":[{"i":[[-2.257,5.285],[5.918,-0.734],[3.004,1.754],[-1.377,3.609],[0.576,6.935],[4.02,-8.943],[1.789,-6.925],[0.416,-4.857],[-0.067,-2.387],[-0.176,-1.654],[-0.382,-2.038],[-0.164,-0.617],[-0.099,-0.382],[-0.029,-0.127],[-0.409,-1.122],[-0.756,-0.968],[-1.036,-0.275],[-0.919,1.155],[-1.255,3.733],[-0.962,2.804],[-1.16,1.928]],"o":[[2.465,-5.772],[-4.266,0.529],[-1.081,-0.631],[3.458,-9.06],[-3.749,-0.294],[-3.687,8.202],[-1.221,4.729],[-0.204,2.38],[0.047,1.662],[0.219,2.06],[0.117,0.627],[0.101,0.382],[0.033,0.127],[0.269,1.161],[0.416,1.144],[0.646,0.828],[1.455,0.386],[2.477,-3.114],[0.945,-2.809],[0.726,-2.116],[2.975,-4.943]],"v":[[33.138,-114.995],[37.534,-133.238],[27.402,-129.702],[26.034,-136.99],[28.672,-163.095],[11.496,-139.911],[4.511,-119.59],[2.504,-105.097],[2.657,-97.934],[2.844,-92.948],[3.838,-86.81],[4.34,-84.962],[4.634,-83.814],[4.736,-83.435],[5.529,-79.95],[7.193,-76.688],[9.647,-74.671],[14.172,-74.835],[18.527,-85.835],[20.761,-94.43],[23.575,-100.541]],"c":true}],"h":1},{"t":141,"s":[{"i":[[-0.416,0.768],[-0.073,0.895],[0.098,1.532],[0.021,0.418],[1.65,-0.78],[2.022,-2.828],[0.684,-2.136],[-0.036,-0.878],[-0.075,-0.4],[-0.077,-0.309],[-0.093,-0.316],[-0.059,-0.115],[-0.06,-0.088],[-0.025,-0.017],[-0.273,-0.071],[-0.418,0.043],[-0.326,0.22],[-0.336,0.422],[-0.3,0.448],[-0.315,0.543],[-0.335,0.495]],"o":[[0.436,-0.805],[0.123,-1.504],[-0.027,-0.418],[-0.075,-1.465],[-3.794,1.794],[-1.368,1.913],[-0.264,0.824],[0.016,0.395],[0.058,0.309],[0.079,0.316],[0.034,0.117],[0.046,0.09],[0.014,0.021],[0.212,0.144],[0.434,0.113],[0.488,-0.051],[0.497,-0.336],[0.342,-0.43],[0.354,-0.529],[0.295,-0.51],[0.499,-0.738]],"v":[[47.758,-189.77],[48.631,-192.317],[48.342,-196.913],[48.256,-198.168],[48.053,-202.562],[40.748,-194.619],[37.945,-188.421],[37.927,-185.801],[38.101,-184.604],[38.327,-183.677],[38.569,-182.729],[38.711,-182.38],[38.883,-182.115],[38.934,-182.055],[39.59,-181.637],[40.914,-181.539],[42.229,-181.911],[43.298,-183.149],[44.262,-184.467],[45.261,-186.077],[46.091,-187.626]],"c":true}],"h":1}],"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0.941176470588,0.705882352941,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[8.175,10.103],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":7,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":2055,"st":0,"ct":1,"bm":0}]}],"layers":[{"ddd":0,"ind":1,"ty":3,"nm":"Null 1","sr":1,"ks":{"o":{"a":0,"k":0,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[593,77,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"ip":0,"op":644,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":0,"nm":"Coin Comp 1","parent":3,"refId":"comp_0","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.333],"y":[0]},"t":35,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":41,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":75,"s":[100]},{"t":82,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[724.5,455,0],"ix":2,"l":2},"a":{"a":0,"k":[724.5,455,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,4.257]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":68,"s":[100,100,100]},{"t":82,"s":[70,70,100]}],"ix":6,"l":2}},"ao":0,"hasMask":true,"masksProperties":[{"inv":false,"mode":"a","pt":{"a":0,"k":{"i":[[36.25,4],[0,0],[0,0],[0,0],[10.993,-20.018],[62.875,0],[7.663,24.405]],"o":[[-36.25,-4],[0,0],[0,0],[0,0],[-8.375,15.25],[-60.25,0],[-31.25,-99.529]],"v":[[488.25,561.25],[472,-10],[1088,2],[957,566],[826.5,578.25],[727.25,627],[623.25,576.25]],"c":true},"ix":1},"o":{"a":0,"k":100,"ix":3},"x":{"a":0,"k":0,"ix":4},"nm":"Mask 1"}],"w":1432,"h":1254,"ip":-15,"op":643,"st":-15,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"Platform","parent":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0,"y":1},"o":{"x":0.333,"y":0},"t":30,"s":[-5.868,268.447,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.237,"y":1},"o":{"x":0.75,"y":0},"t":58,"s":[-5.868,247.947,0],"to":[0,0,0],"ti":[0,0,0]},{"t":104,"s":[-5.868,268.447,0]}],"ix":2,"l":2},"a":{"a":0,"k":[724.132,698.947,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,20.462],[19.596,12.884],[29.596,0],[19.624,-12.9],[0,-20.463],[-19.596,-12.884],[-29.596,0],[-19.624,12.9]],"o":[[0,-20.463],[-19.624,-12.9],[-29.596,0],[-19.596,12.884],[0,20.462],[19.624,12.9],[29.596,0],[19.596,-12.884]],"v":[[108.356,0],[76.148,-51.486],[0,-72.267],[-76.148,-51.486],[-108.356,0],[-76.148,51.486],[0,72.267],[76.148,51.486]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"gs","o":{"a":0,"k":100,"ix":9},"w":{"a":0,"k":6,"ix":10},"g":{"p":3,"k":{"a":0,"k":[0,1,1,1,0.5,1,1,1,1,1,1,1,0,0,0.5,0.5,1,1],"ix":8}},"s":{"a":0,"k":[-0.76,-167.159],"ix":4},"e":{"a":0,"k":[-0.76,-413.459],"ix":5},"t":1,"lc":1,"lj":1,"ml":4,"ml2":{"a":0,"k":4,"ix":13},"bm":0,"nm":"Gradient Stroke 1","mn":"ADBE Vector Graphic - G-Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[724.76,557.841],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[210.713,138.535],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"fl","c":{"a":0,"k":[0.019607843831,0.019607843831,0.019607843831,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[724.76,557.841],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 2","np":2,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false},{"ty":"tr","p":{"a":0,"k":[724.76,557.841],"ix":2},"a":{"a":0,"k":[724.76,557.841],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 28710","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[114.065,-74.704],[-114.065,-206.414],[-114.065,74.706],[114.065,206.414]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"gf","o":{"a":0,"k":100,"ix":10},"r":1,"bm":0,"g":{"p":3,"k":{"a":0,"k":[0,0.02,0.02,0.02,0.5,0.02,0.02,0.02,1,0.02,0.02,0.02,0,0,0.5,0.5,1,1],"ix":9}},"s":{"a":0,"k":[16.206,-261.639],"ix":5},"e":{"a":0,"k":[33.049,193.955],"ix":6},"t":1,"nm":"Gradient Fill 1","mn":"ADBE Vector Graphic - G-Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[610.068,764.837],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 42183","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-114.064,-74.704],[114.064,-206.414],[114.064,74.706],[-114.064,206.414]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"gf","o":{"a":0,"k":100,"ix":10},"r":1,"bm":0,"g":{"p":3,"k":{"a":0,"k":[0,0.02,0.02,0.02,0.5,0.02,0.02,0.02,1,0.02,0.02,0.02,0,0,0.5,0.5,1,1],"ix":9}},"s":{"a":0,"k":[-11.196,238.757],"ix":5},"e":{"a":0,"k":[-54.852,383.113],"ix":6},"t":1,"nm":"Gradient Fill 1","mn":"ADBE Vector Graphic - G-Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[838.196,764.757],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 42182","np":2,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[114.065,-74.704],[-114.065,-206.414],[-114.065,74.706],[114.065,206.414]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.04705882445,0.04705882445,0.04705882445,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[610.068,764.837],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 42181","np":2,"cix":2,"bm":0,"ix":3,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-114.064,-74.704],[114.064,-206.414],[114.064,74.706],[-114.064,206.414]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.04705882445,0.04705882445,0.04705882445,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[838.196,764.757],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 42178","np":2,"cix":2,"bm":0,"ix":4,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[0,-128.71],[222.932,0],[0,128.71],[-222.932,0]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.167],"y":[0.197]},"t":30,"s":[0.023529412225,0.878431379795,0.592156887054,1]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":48,"s":[0.411764681339,1,0.803022146225,1]},{"t":64,"s":[0.023529412225,0.878431379795,0.592156887054,1]}],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":6,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[724.13,558.353],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 42180","np":2,"cix":2,"bm":0,"ix":5,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[0,-131.71],[228.128,0],[0,131.71],[-228.128,0]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"gf","o":{"a":0,"k":100,"ix":10},"r":1,"bm":0,"g":{"p":3,"k":{"a":0,"k":[0,0.251,0.259,0.302,0.5,0.251,0.259,0.302,1,0.251,0.259,0.302,0,0,0.5,0.5,1,1],"ix":9}},"s":{"a":0,"k":[-310.311,-237.336],"ix":5},"e":{"a":0,"k":[-435.219,-20.99],"ix":6},"t":1,"nm":"Gradient Fill 1","mn":"ADBE Vector Graphic - G-Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[724.132,558.353],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[0,-131.71],[228.128,0],[0,131.71],[-228.128,0]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.070588238537,0.070588238537,0.070588238537,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[724.132,558.353],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 2","np":2,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false},{"ty":"tr","p":{"a":0,"k":[724.132,558.353],"ix":2},"a":{"a":0,"k":[724.132,558.353],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 42177_2","np":2,"cix":2,"bm":0,"ix":6,"mn":"ADBE Vector Group","hd":false},{"ty":"tr","p":{"a":0,"k":[724.132,558.353],"ix":2},"a":{"a":0,"k":[724.132,558.353],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Platform 2","np":6,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":644,"st":0,"ct":1,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"Static BG Lines 4","parent":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-16.233,45.059,0],"ix":2,"l":2},"a":{"a":0,"k":[713.767,475.559,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-365.066,-127.334],[27.5,99.314],[172.017,15.878],[365.066,127.334]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"tr","p":{"a":0,"k":[295.767,475.559],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Vector 4223","np":1,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.555],"y":[0]},"t":3,"s":[0]},{"t":48,"s":[100]}],"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.555],"y":[0]},"t":0,"s":[0]},{"t":45,"s":[100]}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false},{"ty":"st","c":{"a":0,"k":[0.023529413635,0.878431432387,0.592156862745,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":6,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false}],"ip":0,"op":644,"st":0,"ct":1,"bm":0},{"ddd":0,"ind":5,"ty":4,"nm":"Static BG Lines 3","parent":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-16.233,45.059,0],"ix":2,"l":2},"a":{"a":0,"k":[713.767,475.559,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[365.066,-127.334],[-27.502,99.314],[-172.018,15.878],[-365.066,127.334]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"tr","p":{"a":0,"k":[1131.766,475.559],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Vector 4224","np":1,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.023529413635,0.878431432387,0.592156862745,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":6,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.555],"y":[0]},"t":3,"s":[0]},{"t":48,"s":[100]}],"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.555],"y":[0]},"t":0,"s":[0]},{"t":45,"s":[100]}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":3,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":0,"op":644,"st":0,"ct":1,"bm":0},{"ddd":0,"ind":6,"ty":4,"nm":"Static BG Lines 5","parent":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-16.233,45.059,0],"ix":2,"l":2},"a":{"a":0,"k":[713.767,475.559,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-454.016,-49.186],[-342.016,16.814],[-197.875,-67.184],[97,103.061]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"tr","p":{"a":0,"k":[626.716,453.97],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 42177","np":1,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.023529413635,0.878431432387,0.592156862745,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":6,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.555],"y":[0]},"t":3,"s":[0]},{"t":48,"s":[100]}],"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.555],"y":[0]},"t":0,"s":[0]},{"t":45,"s":[100]}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":3,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":0,"op":644,"st":0,"ct":1,"bm":0},{"ddd":0,"ind":7,"ty":4,"nm":"Static BG Lines 2","parent":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-16.233,45.059,0],"ix":2,"l":2},"a":{"a":0,"k":[713.767,475.559,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[454.016,-103.061],[97,103.061]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"tr","p":{"a":0,"k":[626.716,453.97],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 42177","np":1,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.023529413635,0.878431432387,0.592156862745,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":6,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.555],"y":[0]},"t":3,"s":[0]},{"t":48,"s":[100]}],"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.555],"y":[0]},"t":0,"s":[0]},{"t":45,"s":[100]}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":3,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":0,"op":644,"st":0,"ct":1,"bm":0},{"ddd":0,"ind":8,"ty":4,"nm":"Static BG Lines","parent":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-16.233,45.059,0],"ix":2,"l":2},"a":{"a":0,"k":[713.767,475.559,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[365.066,-127.334],[-27.502,99.314],[-172.018,15.878],[-365.066,127.334]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"gs","o":{"a":0,"k":100,"ix":9},"w":{"a":0,"k":6,"ix":10},"g":{"p":3,"k":{"a":0,"k":[0,0.251,0.259,0.302,0.5,0.251,0.259,0.302,1,0.251,0.259,0.302,0,1,0.5,0.5,1,0],"ix":8}},"s":{"a":0,"k":[-398,138],"ix":4},"e":{"a":0,"k":[156.733,15.442],"ix":5},"t":2,"h":{"a":0,"k":0,"ix":6},"a":{"a":0,"k":0,"ix":7},"lc":1,"lj":1,"ml":4,"ml2":{"a":0,"k":4,"ix":13},"bm":0,"nm":"Gradient Stroke 1","mn":"ADBE Vector Graphic - G-Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[1131.766,475.559],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Vector 4224","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-365.066,-127.334],[27.5,99.314],[172.017,15.878],[365.066,127.334]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"gs","o":{"a":0,"k":100,"ix":9},"w":{"a":0,"k":6,"ix":10},"g":{"p":3,"k":{"a":0,"k":[0,0.251,0.259,0.302,0.5,0.251,0.259,0.302,1,0.251,0.259,0.302,0,1,0.5,0.5,1,0],"ix":8}},"s":{"a":0,"k":[381,122],"ix":4},"e":{"a":0,"k":[-147.267,85.442],"ix":5},"t":2,"h":{"a":0,"k":0,"ix":6},"a":{"a":0,"k":0,"ix":7},"lc":1,"lj":1,"ml":4,"ml2":{"a":0,"k":4,"ix":13},"bm":0,"nm":"Gradient Stroke 1","mn":"ADBE Vector Graphic - G-Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[295.767,475.559],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Vector 4223","np":2,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[454.016,-103.061],[97,103.061],[-197.875,-67.184],[-342.016,16.814],[-454.016,-49.186]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"gs","o":{"a":0,"k":100,"ix":9},"w":{"a":0,"k":6,"ix":10},"g":{"p":3,"k":{"a":0,"k":[0,0.251,0.259,0.302,0.5,0.251,0.259,0.302,1,0.251,0.259,0.302,0,1,0.5,0.5,1,0],"ix":8}},"s":{"a":0,"k":[79,93],"ix":4},"e":{"a":0,"k":[446.733,-86.058],"ix":5},"t":2,"h":{"a":0,"k":0,"ix":6},"a":{"a":0,"k":0,"ix":7},"lc":1,"lj":1,"ml":4,"ml2":{"a":0,"k":4,"ix":13},"bm":0,"nm":"Gradient Stroke 1","mn":"ADBE Vector Graphic - G-Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[626.716,453.97],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 42177","np":2,"cix":2,"bm":0,"ix":3,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":644,"st":0,"ct":1,"bm":0},{"ddd":0,"ind":9,"ty":4,"nm":"Background Blur","parent":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-5.3,113.429,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[572,260],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"gf","o":{"a":0,"k":100,"ix":10},"r":1,"bm":0,"g":{"p":3,"k":{"a":0,"k":[0,0.09,0.098,0.11,0.5,0.09,0.098,0.11,1,0.09,0.098,0.11,0,1,0.5,0.5,1,0],"ix":9}},"s":{"a":0,"k":[-67105.062,-19503.053],"ix":5},"e":{"a":0,"k":[-8.7,83.071],"ix":6},"t":2,"h":{"a":0,"k":0,"ix":7},"a":{"a":0,"k":0,"ix":8},"nm":"Gradient Fill 1","mn":"ADBE Vector Graphic - G-Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[8.7,-83.071],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Background Blur","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":644,"st":0,"ct":1,"bm":0}],"markers":[],"props":{}}'
        ),
        k = n(39502),
        _ = n(94585),
        f = n(87671),
        g = n(60989),
        y = n(81008),
        v = n(61562),
        b = n.n(v),
        C = n(47895),
        B = n(98158),
        j = n(77650),
        w = n(54484),
        N = n(37060),
        E = n(29557);
      ((a = i || (i = {}))[(a.ReadyToBurn = 0)] = "ReadyToBurn"),
        (a[(a.BurnedToday = 1)] = "BurnedToday"),
        (a[(a.Burning = 2)] = "Burning"),
        (a[(a.SuccessfullyBurned = 3)] = "SuccessfullyBurned");
      var A = n(33730),
        H = n(38217),
        V = n(31440);
      let T = "0xaAF609e63EEDD291e5f8E5019A5bf98CA2B4De88",
        D = E.m5.Ethereum,
        S = (0, s.memo)((e) => {
          let { ...t } = e;
          return (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "25",
            viewBox: "0 0 24 25",
            fill: "none",
            ...t,
            children: (0, r.jsxs)("g", {
              id: "tokens",
              children: [
                (0, r.jsx)("rect", {
                  x: "0.285714",
                  y: "0.785714",
                  width: "23.4286",
                  height: "23.4286",
                  rx: "11.7143",
                  fill: "#121212",
                }),
                (0, r.jsx)("rect", {
                  x: "0.285714",
                  y: "0.785714",
                  width: "23.4286",
                  height: "23.4286",
                  rx: "11.7143",
                  stroke: "#00291C",
                  strokeWidth: "0.571429",
                }),
                (0, r.jsx)("path", {
                  id: "Vector",
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M3.74998 12.5001C3.74998 10.2219 5.42892 8.37506 7.49998 8.37506C8.09843 8.37506 8.83571 8.65676 9.50556 8.97114C10.2075 9.30058 10.9594 9.72786 11.6276 10.1254C11.8602 10.2638 12.1398 10.2638 12.3724 10.1254C13.0406 9.72786 13.7924 9.30058 14.4944 8.97114C15.1643 8.65676 15.9015 8.37506 16.5 8.37506C18.571 8.37506 20.25 10.2219 20.25 12.5001C20.25 14.7782 18.571 16.6251 16.5 16.6251C15.9015 16.6251 15.1643 16.3434 14.4944 16.029C13.7924 15.6995 13.0406 15.2723 12.3724 14.8747C12.1398 14.7363 11.8602 14.7363 11.6276 14.8747C10.9594 15.2723 10.2075 15.6995 9.50556 16.029C8.83571 16.3434 8.09843 16.6251 7.49998 16.6251C5.42892 16.6251 3.74998 14.7782 3.74998 12.5001ZM7.49998 10.0251C6.25735 10.0251 5.24998 11.1332 5.24998 12.5001C5.24998 13.867 6.25735 14.9751 7.49998 14.9751C7.76211 14.9751 8.24774 14.8254 8.91691 14.5113C9.55397 14.2124 10.2573 13.8141 10.914 13.4234C11.5918 13.0201 12.4082 13.0201 13.086 13.4234C13.7427 13.8141 14.446 14.2124 15.0831 14.5113C15.7522 14.8254 16.2379 14.9751 16.5 14.9751C17.7426 14.9751 18.75 13.867 18.75 12.5001C18.75 11.1332 17.7426 10.0251 16.5 10.0251C16.2379 10.0251 15.7522 10.1747 15.0831 10.4888C14.446 10.7878 13.7427 11.186 13.086 11.5768C12.4082 11.98 11.5918 11.98 10.914 11.5768C10.2573 11.186 9.55397 10.7878 8.91691 10.4888C8.24774 10.1747 7.76211 10.0251 7.49998 10.0251Z",
                  fill: "#06E097",
                }),
              ],
            }),
          });
        });
      S.displayName = "EntangleIcon";
      let I = () => {
        let e = new Date(),
          t = new Date(e);
        return (
          t.setUTCHours(8, 20, 0, 0),
          e >= t && t.setUTCDate(t.getUTCDate() + 1),
          t.toISOString()
        );
      };
      var G = n(28564),
        P = n(27648),
        M = n(96344),
        L = n(92906);
      let F = (0, s.memo)((e) => {
          let [t, a] = (0, s.useState)(!1),
            i = (0, s.useRef)(),
            o = (0, s.useCallback)(async () => {
              let e = await Promise.all([n.e(4705), n.e(7882)]).then(
                n.t.bind(n, 7882, 23)
              );
              (i.current = e.default), a(!0);
            }, []);
          if (
            ((0, s.useEffect)(() => {
              "undefined" != typeof document && o();
            }, []),
            !t)
          )
            return null;
          let l = i.current;
          return (0, r.jsx)(l, { ...e });
        }),
        U = (0, s.memo)(() => {
          let [e, t] = (0, s.useState)(i.ReadyToBurn),
            [n, a] = (0, s.useState)(!1),
            [o, c] = (0, s.useState)({ hours: 0, mins: 0, secs: 0 }),
            {
              balance: v,
              eligibleToBurn: E,
              eligibleToBurnUSD: U,
              burnedAmount: Z,
              burnedAmountUSD: W,
              dailyBurn: R,
              burnTokens: O,
              refetch: $,
              txHash: z,
            } = (function (e) {
              let [t, n] = (0, s.useState)(void 0),
                [a, r] = (0, s.useState)(void 0),
                { data: o, writeContract: l } = (0, _.useWriteContract)(),
                { chainId: c, walletConnect: d } = (0, A.Z)(),
                { data: u } = (0, H.useWalletClient)(),
                x = !!u,
                [h, m] = (0, s.useState)(!1),
                { isLoading: p, isSuccess: v } = (0,
                f.useWaitForTransactionReceipt)({ hash: o }),
                E = (0, g.usePublicClient)({ chainId: D.chainId }),
                { switchChain: S } = (0, y.useSwitchChain)(),
                I = (0, N.R)("EAI"),
                { data: G, refetch: P } = (0, j.K)({}),
                M = G?.entangle_daily_burn[0],
                L = (0, s.useCallback)(() => {
                  l({ abi: b(), address: T, functionName: "burn" });
                }, [l]);
              (0, s.useEffect)(() => {
                (async function () {
                  try {
                    let e = await E?.readContract({
                        address: C.FW,
                        abi: B.Wo,
                        functionName: "balanceOf",
                        args: [T],
                      }),
                      t = await E?.readContract({
                        address: T,
                        abi: b(),
                        functionName: "getTotalAvailableAmount",
                      });
                    if (
                      (e && n((0, w.t)(Number((0, k.b)(e, 18)), 2)),
                      t && Array.isArray(t))
                    ) {
                      let e = t.reduce((e, t) => e + t, BigInt(0));
                      r((0, w.t)(Number((0, k.b)(e, 18)), 2));
                    }
                  } catch (e) {
                    console.error("Error fetching contract data:", e);
                  }
                })();
              }, [E]),
                (0, s.useEffect)(() => {
                  p && !v ? e(i.Burning) : v && e(i.SuccessfullyBurned);
                }, [p, v, e]),
                (0, s.useEffect)(() => {
                  h && c === D.chainId && (m(!1), L());
                }, [h, c, L]);
              let F = (0, s.useMemo)(() => {
                  let e;
                  return a && I && (e = (0, w.t)(Number(a) * I, 2)), e;
                }, [a, I]),
                U = (0, s.useMemo)(
                  () =>
                    M?.amount
                      ? (0, w.t)(Number((0, k.b)(M.amount, 18)), 2)
                      : "0",
                  [M]
                ),
                Z = (0, s.useMemo)(() => {
                  let e = "0";
                  return U && I && (e = (0, w.t)(Number(U) * I, 2)), e;
                }, [U, I]),
                W = (0, s.useCallback)(async () => {
                  x || (await d(V.m[0].connector, D.chainId)),
                    c !== D.chainId ? (S({ chainId: D.chainId }), m(!0)) : L();
                }, [x, c, d, S, L]);
              return (0, s.useMemo)(
                () => ({
                  balance: t,
                  eligibleToBurn: a,
                  eligibleToBurnUSD: F,
                  dailyBurn: M,
                  burnTokens: W,
                  refetch: P,
                  burnedAmount: U,
                  burnedAmountUSD: Z,
                  txHash: o,
                }),
                [t, a, F, M, P, W, U, Z, o]
              );
            })(t),
            K = (0, s.useMemo)(
              () =>
                e === i.BurnedToday && R
                  ? `https://etherscan.io/tx/${R.tx_hash}`
                  : e === i.Burning && R
                  ? `https://etherscan.io/tx/${z}`
                  : "",
              [e, R, z]
            ),
            { amount: Y, amountUSD: q } = (0, s.useMemo)(
              () =>
                e === i.BurnedToday
                  ? { amount: Z, amountUSD: W }
                  : { amount: E, amountUSD: U },
              [e, Z, W, E, U]
            );
          (0, s.useEffect)(() => {
            "0" === E && t(i.BurnedToday);
          }, [E]),
            (0, s.useEffect)(() => {
              n || e !== i.SuccessfullyBurned || (t(i.BurnedToday), $());
            }, [e, n, $]);
          let X = (0, s.useCallback)(() => {
              a((e) => !e);
            }, []),
            J = (0, s.useCallback)(() => {
              a(!1);
            }, []),
            Q = (0, u.Z)(J);
          return (
            (0, s.useEffect)(() => {
              let e = async () => {
                let e = I();
                c(await (0, G.V)(e, "hour"));
              };
              e();
              let t = setInterval(e, 1e3);
              return () => clearInterval(t);
            }, []),
            (0, r.jsxs)("div", {
              className: d().popoverContainer,
              ref: Q,
              children: [
                (0, r.jsx)("div", {
                  className: l()(d().toggle, { [d().active]: n }),
                  onClick: X,
                  children: n
                    ? (0, r.jsx)(F, {
                        alt: "Burn animation",
                        animationData: h,
                        className: d().burnIconAnimation,
                        loop: !0,
                      })
                    : (0, r.jsx)(x, { className: d().burnIcon }),
                }),
                n &&
                  (0, r.jsxs)("div", {
                    className: l()(d().popover, { [d().open]: n }),
                    children: [
                      (e === i.ReadyToBurn || e === i.BurnedToday) &&
                        (0, r.jsxs)("div", {
                          children: [
                            (0, r.jsx)("h3", {
                              className: d().header,
                              children: "Daily Burn",
                            }),
                            (0, r.jsxs)("div", {
                              className: d().content,
                              children: [
                                (0, r.jsx)("p", {
                                  className: d().subtitle,
                                  children:
                                    "Burn EAI tokens and help to reduce the supply. Trigger by clicking the Burn button below.",
                                }),
                                (0, r.jsxs)("div", {
                                  className: l()(d().popoverCard, {
                                    [d().popoverCardBurned]:
                                      e === i.BurnedToday,
                                  }),
                                  children: [
                                    e === i.ReadyToBurn
                                      ? (0, r.jsx)("div", {
                                          children: "Eligible to burn today",
                                        })
                                      : R?.burned_by &&
                                        K &&
                                        (0, r.jsxs)(P.default, {
                                          className: d().burnedTransactionLink,
                                          href: K,
                                          target: "_blank",
                                          rel: "noopener noreferrer",
                                          children: [
                                            (0, L.F)(R?.burned_by, 4),
                                            " has already burned",
                                            (0, r.jsx)(M.l, {}),
                                          ],
                                        }),
                                    (0, r.jsxs)("div", {
                                      className: d().eligibleToBurnContent,
                                      children: [
                                        (0, r.jsxs)("div", {
                                          className: d().eligibleToBurnItem,
                                          children: [
                                            (0, r.jsx)(S, {}),
                                            (0, r.jsx)("div", { children: Y }),
                                          ],
                                        }),
                                        (0, r.jsxs)("div", {
                                          className: d().eligibleToBurnItemUSD,
                                          children: ["≈ $ ", q],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, r.jsxs)("div", {
                                  className: d().footer,
                                  children: [
                                    (0, r.jsx)("div", {
                                      children: "Total in Burn pool (EAI)",
                                    }),
                                    (0, r.jsxs)("div", {
                                      children: [
                                        (0, r.jsx)(S, {
                                          className: d().footerIcon,
                                        }),
                                        v,
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            e === i.ReadyToBurn &&
                              (0, r.jsx)("button", {
                                className: d().confirmButton,
                                onClick: O,
                                children: "Burn",
                              }),
                            e === i.BurnedToday &&
                              (0, r.jsxs)("div", {
                                className: l()(d().popoverCard, d().nextBurnIn),
                                children: [
                                  (0, r.jsx)("div", {
                                    children: "Next Burn in",
                                  }),
                                  (0, r.jsxs)("div", {
                                    className: d().countdown,
                                    children: [
                                      o.hours > 0 &&
                                        (0, r.jsxs)("div", {
                                          children: [o.hours, "h :"],
                                        }),
                                      o.mins > 0 &&
                                        (0, r.jsxs)("div", {
                                          children: [o.mins, "m :"],
                                        }),
                                      void 0 !== o.secs &&
                                        (0, r.jsxs)("div", {
                                          children: [o.secs, " s"],
                                        }),
                                    ],
                                  }),
                                ],
                              }),
                          ],
                        }),
                      e === i.SuccessfullyBurned &&
                        (0, r.jsxs)("div", {
                          className: d().successfullyBurnedContainer,
                          children: [
                            (0, r.jsx)(F, {
                              alt: "Burn animation",
                              animationData: m,
                              className: d().celebrationIconAnimation,
                              loop: !0,
                            }),
                            (0, r.jsx)("div", {
                              className: d().header,
                              children: "Completed!",
                            }),
                            (0, r.jsxs)("div", {
                              className: d().title,
                              children: [
                                "You succesfully burned ",
                                E || 0,
                                " EAI tokens.",
                              ],
                            }),
                            (0, r.jsxs)("div", {
                              className: l()(d().popoverCard, d().nextBurnIn),
                              children: [
                                (0, r.jsx)("div", { children: "Next Burn in" }),
                                (0, r.jsxs)("div", {
                                  className: d().countdown,
                                  children: [
                                    o.hours > 0 &&
                                      (0, r.jsxs)("div", {
                                        children: [o.hours, "h :"],
                                      }),
                                    o.mins > 0 &&
                                      (0, r.jsxs)("div", {
                                        children: [o.mins, "m :"],
                                      }),
                                    void 0 !== o.secs &&
                                      (0, r.jsxs)("div", {
                                        children: [o.secs, " s"],
                                      }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      e === i.Burning &&
                        (0, r.jsxs)("div", {
                          className: l()(
                            d().successfullyBurnedContainer,
                            d().burningProcessContainer
                          ),
                          children: [
                            (0, r.jsx)(F, {
                              alt: "Burning animation",
                              animationData: p,
                              className: d().burningProcessAnimation,
                              loop: !0,
                            }),
                            (0, r.jsx)("div", {
                              className: d().header,
                              children: "Initiated",
                            }),
                            (0, r.jsxs)("div", {
                              className: d().popoverCard,
                              children: [
                                (0, r.jsx)("div", { children: "Burning" }),
                                (0, r.jsxs)("div", {
                                  className: d().eligibleToBurnContent,
                                  children: [
                                    (0, r.jsxs)("div", {
                                      className: d().eligibleToBurnItem,
                                      children: [
                                        (0, r.jsx)(S, {}),
                                        (0, r.jsx)("div", {
                                          className: d().eligibleToBurn,
                                          children: E,
                                        }),
                                      ],
                                    }),
                                    (0, r.jsxs)("div", {
                                      className: d().eligibleToBurnItemUSD,
                                      children: ["≈ $ ", U],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            K &&
                              (0, r.jsxs)(P.default, {
                                className: d().transactionLink,
                                href: K,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: [
                                  "Check the transaction here",
                                  (0, r.jsx)(M.l, {}),
                                ],
                              }),
                          ],
                        }),
                    ],
                  }),
              ],
            })
          );
        });
      U.displayName = "BurnPopover";
    },
    31440: function (e, t, n) {
      "use strict";
      n.d(t, {
        m: function () {
          return o;
        },
        K: function () {
          return l;
        },
      });
      var a = n(78952),
        i = {
          src: "/_next/static/media/metamask.31169b91.svg",
          height: 26,
          width: 26,
          blurWidth: 0,
          blurHeight: 0,
        },
        r = {
          src: "/_next/static/media/coinbase.6301c37a.svg",
          height: 24,
          width: 24,
          blurWidth: 0,
          blurHeight: 0,
        },
        s = {
          src: "/_next/static/media/walletconnect.01d83f10.svg",
          height: 16,
          width: 24,
          blurWidth: 0,
          blurHeight: 0,
        };
      let o = [
          {
            title: "Metamask",
            image: i,
            connector: (0, a.t)() ? "injected" : "metaMaskSDK",
            disabled: !1,
          },
          {
            title: "CoinBase",
            image: r,
            connector: "coinbaseWalletSDK",
            disabled: !1,
          },
          {
            title: "WalletConnect",
            image: s,
            connector: "walletConnect",
            disabled: !1,
          },
        ],
        l = [
          {
            title: "Phantom",
            image: {
              src: "/_next/static/media/phantom.a0c9803e.png",
              height: 1200,
              width: 1200,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAMFBMVEWrn/OvovemmfGroPOqnPCrn/OnmvGxpfb///n59/jn4vfy7/e6r/PEu/fa0/XWzv8Vge8CAAAABnRSTlP85OpWWFVpMj6VAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAO0lEQVR4nBXHyQ3AIBAEwV6wZy/A+Wdr8SoVj4E0JuZin327OrOuGXXaUUVElPDM7lpg33KXG3NIYO8POyABqMmGDHUAAAAASUVORK5CYII=",
              blurWidth: 8,
              blurHeight: 8,
            },
            connector: "phantom",
            disabled: !1,
          },
          {
            title: "Metamask",
            image: i,
            connector: (0, a.t)() ? "injected" : "metaMaskSDK",
            disabled: !1,
          },
          {
            title: "CoinBase",
            image: r,
            connector: "coinbaseWalletSDK",
            disabled: !1,
          },
          {
            title: "WalletConnect",
            image: s,
            connector: "walletConnect",
            disabled: !1,
          },
        ];
    },
    35042: function () {},
    39200: function (e) {
      e.exports = {
        headerBurger: "BridgeHeaderBurger_headerBurger__Ahmj5",
        headerBurger__menu: "BridgeHeaderBurger_headerBurger__menu__7tqTf",
        headerBurger__item: "BridgeHeaderBurger_headerBurger__item__h_IWC",
        headerBurgerIcon: "BridgeHeaderBurger_headerBurgerIcon__o11oA",
        headerBurger__subItem:
          "BridgeHeaderBurger_headerBurger__subItem__GWg3x",
        headerBurger__link: "BridgeHeaderBurger_headerBurger__link__Bjsh7",
        navHidden: "BridgeHeaderBurger_navHidden__EyJlS",
        navHidden__icon: "BridgeHeaderBurger_navHidden__icon__xndY7",
        navHidden__text: "BridgeHeaderBurger_navHidden__text__CGEil",
        headerBurger_footer: "BridgeHeaderBurger_headerBurger_footer__LproM",
        right: "BridgeHeaderBurger_right__KkzWh",
        headerBurger__disconnectContainer:
          "BridgeHeaderBurger_headerBurger__disconnectContainer__BvtqM",
        returnBack: "BridgeHeaderBurger_returnBack__yDEsi",
        returnBack__label: "BridgeHeaderBurger_returnBack__label__y07cC",
        returnBack__icon: "BridgeHeaderBurger_returnBack__icon__pVPnw",
        headerBurger__disconnectContainer_visible:
          "BridgeHeaderBurger_headerBurger__disconnectContainer_visible__1Bquh",
        burgerMenuIcon: "BridgeHeaderBurger_burgerMenuIcon__ZbO8z",
        externalLinkColor: "BridgeHeaderBurger_externalLinkColor__Ay_aQ",
      };
    },
    73160: function (e) {
      e.exports = {
        headerBurger: "HubHeaderBurger_headerBurger__y1d3I",
        toggle: "HubHeaderBurger_toggle__Zpyl3",
        dashboardIcon: "HubHeaderBurger_dashboardIcon__Y_6eK",
        headerBurger__menu: "HubHeaderBurger_headerBurger__menu__vomaX",
        headerBurger__item: "HubHeaderBurger_headerBurger__item__xYNPf",
        headerBurgerIcon: "HubHeaderBurger_headerBurgerIcon__7eQo8",
        headerBurger__subItem: "HubHeaderBurger_headerBurger__subItem__1Mel6",
        headerBurger__link: "HubHeaderBurger_headerBurger__link__zifWM",
        navHidden: "HubHeaderBurger_navHidden__tSkUE",
        navHidden__icon: "HubHeaderBurger_navHidden__icon__9RVMQ",
        navHidden__text: "HubHeaderBurger_navHidden__text__NMrTV",
        headerBurger_footer: "HubHeaderBurger_headerBurger_footer__h5Q84",
        right: "HubHeaderBurger_right__JDbct",
        headerBurger__disconnectContainer:
          "HubHeaderBurger_headerBurger__disconnectContainer__q2U83",
        returnBack: "HubHeaderBurger_returnBack__z6O5C",
        returnBack__label: "HubHeaderBurger_returnBack__label__8UmxN",
        returnBack__icon: "HubHeaderBurger_returnBack__icon__9Fw0x",
        headerBurger__disconnectContainer_visible:
          "HubHeaderBurger_headerBurger__disconnectContainer_visible__06Adl",
        burgerMenuIcon: "HubHeaderBurger_burgerMenuIcon__HRznW",
      };
    },
    85709: function (e) {
      e.exports = {
        headerBurger: "UDFHeaderBurger_headerBurger__ZXVZV",
        headerBurger__menu: "UDFHeaderBurger_headerBurger__menu__FrWEI",
        headerBurger__item: "UDFHeaderBurger_headerBurger__item__Vkclv",
        headerBurgerIcon: "UDFHeaderBurger_headerBurgerIcon__xrpcN",
        headerBurger__subItem: "UDFHeaderBurger_headerBurger__subItem__kNR4X",
        headerBurger__link: "UDFHeaderBurger_headerBurger__link__2IL6v",
        navHidden: "UDFHeaderBurger_navHidden__mdHKl",
        navHidden__icon: "UDFHeaderBurger_navHidden__icon__D_Q0z",
        navHidden__text: "UDFHeaderBurger_navHidden__text__VceBU",
        headerBurger_footer: "UDFHeaderBurger_headerBurger_footer__YrHQ_",
        right: "UDFHeaderBurger_right__iSS27",
        headerBurger__disconnectContainer:
          "UDFHeaderBurger_headerBurger__disconnectContainer__p2_XP",
        returnBack: "UDFHeaderBurger_returnBack__lUIu3",
        returnBack__label: "UDFHeaderBurger_returnBack__label__Oyqs8",
        returnBack__icon: "UDFHeaderBurger_returnBack__icon__XUffn",
        headerBurger__disconnectContainer_visible:
          "UDFHeaderBurger_headerBurger__disconnectContainer_visible__Gyf89",
        burgerMenuIcon: "UDFHeaderBurger_burgerMenuIcon__8eAGR",
        externalLinkColor: "UDFHeaderBurger_externalLinkColor__pWtB1",
      };
    },
    83188: function (e) {
      e.exports = {
        headerBurger: "UTSHeaderBurger_headerBurger__15GOS",
        headerBurger__menu: "UTSHeaderBurger_headerBurger__menu__1XWkn",
        headerBurger__item: "UTSHeaderBurger_headerBurger__item__7_cOI",
        headerBurgerIcon: "UTSHeaderBurger_headerBurgerIcon__LM7cQ",
        headerBurger__subItem: "UTSHeaderBurger_headerBurger__subItem__kYfcb",
        headerBurger__link: "UTSHeaderBurger_headerBurger__link__g_5kM",
        navHidden: "UTSHeaderBurger_navHidden__wlqBX",
        navHidden__icon: "UTSHeaderBurger_navHidden__icon__TTEo7",
        navHidden__text: "UTSHeaderBurger_navHidden__text__mhs_z",
        headerBurger_footer: "UTSHeaderBurger_headerBurger_footer__z45_p",
        right: "UTSHeaderBurger_right__1skIn",
        headerBurger__disconnectContainer:
          "UTSHeaderBurger_headerBurger__disconnectContainer__D2nLO",
        returnBack: "UTSHeaderBurger_returnBack__uuv5d",
        returnBack__label: "UTSHeaderBurger_returnBack__label__EsRcI",
        returnBack__icon: "UTSHeaderBurger_returnBack__icon__i_U08",
        headerBurger__disconnectContainer_visible:
          "UTSHeaderBurger_headerBurger__disconnectContainer_visible__KwYN8",
        burgerMenuIcon: "UTSHeaderBurger_burgerMenuIcon__Gh6tI",
        externalLinkColor: "UTSHeaderBurger_externalLinkColor__qm0TO",
      };
    },
    91415: function (e) {
      e.exports = {
        maintenancePage: "MaintenancePageCommon_maintenancePage__sicmT",
        maintenancePageImage:
          "MaintenancePageCommon_maintenancePageImage__UPCdZ",
        maintenancePageTitle:
          "MaintenancePageCommon_maintenancePageTitle__bESMg",
        maintenancePageContent:
          "MaintenancePageCommon_maintenancePageContent__A0Qps",
      };
    },
    21019: function (e) {
      e.exports = {
        input: "SearchInput_input__YYnJ4",
        inputWrapper: "SearchInput_inputWrapper__BLvDI",
        inputClearButton: "SearchInput_inputClearButton__wmqua",
      };
    },
    65472: function (e) {
      e.exports = {
        account: "Account_account__EzVM2",
        account_open: "Account_account_open__frGVm",
        account_openUdf: "Account_account_openUdf__lMFEZ",
        account_networks: "Account_account_networks__uEOL_",
        account__network: "Account_account__network__5sCTf",
        account__network_ets: "Account_account__network_ets__uuq4z",
        account__network_solana: "Account_account__network_solana__VyW64",
        account__network_active: "Account_account__network_active__SiKev",
        account__info: "Account_account__info__bA9ku",
        account__online: "Account_account__online__gYifK",
        account__online_udf: "Account_account__online_udf__W4_tp",
        account___arrow: "Account_account___arrow__aWto8",
        account__address: "Account_account__address__ALVG1",
        connectButton: "Account_connectButton__h891b",
        connectButton_udf: "Account_connectButton_udf__kxmS7",
        renderContainer: "Account_renderContainer__GZKn9",
        linksContainer: "Account_linksContainer__LS5Ni",
        renderTitle: "Account_renderTitle__VZHYi",
        title__link: "Account_title__link__KMMua",
        nglContainer: "Account_nglContainer__Ian1g",
        wrapLink: "Account_wrapLink__ohOEP",
        renderSection: "Account_renderSection__2GIup",
        goToStaking: "Account_goToStaking__TAAIe",
        goToStakingIcon: "Account_goToStakingIcon__y34YF",
        renderItem: "Account_renderItem__RObNT",
        chainIcon: "Account_chainIcon__iZ1v8",
        renderItemAddress: "Account_renderItemAddress__aSMyY",
        renderImage: "Account_renderImage__GKE86",
        renderBorder: "Account_renderBorder__1WSie",
        renderButton: "Account_renderButton__xNAmU",
        copy: "Account_copy__6lNdm",
        accountBalanceContainer: "Account_accountBalanceContainer__cwl6v",
        accountBalance: "Account_accountBalance__dVq2k",
        nglBalance: "Account_nglBalance__MA9MJ",
        usdBalance: "Account_usdBalance__FT6KI",
        accountIconContainer: "Account_accountIconContainer__ArIcO",
        copiedText: "Account_copiedText___JEiC",
        copyLabel: "Account_copyLabel__qRmDq",
        copyIcon: "Account_copyIcon__4ijWB",
        omnipointsIcon: "Account_omnipointsIcon___4Ud5",
        omnipointsLabel: "Account_omnipointsLabel__wvEUv",
        jassIcon: "Account_jassIcon__QtB2m",
        chainDropdownIcon: "Account_chainDropdownIcon__bMobr",
        accountAddressContainer: "Account_accountAddressContainer__zVDQQ",
        active: "Account_active__a5g64",
        switchChainAddress: "Account_switchChainAddress__efCti",
        iconBadge: "Account_iconBadge__Y4v0z",
        jassDropdownIcon: "Account_jassDropdownIcon__mVJA7",
        closeIcon: "Account_closeIcon__9COKw",
        switchChainDropdownHeader: "Account_switchChainDropdownHeader__AJMDs",
        switchChainDropdownLabel: "Account_switchChainDropdownLabel__cYKIh",
        switchChainDropdownName: "Account_switchChainDropdownName__xGdwj",
        switchChainDropdownSubheader:
          "Account_switchChainDropdownSubheader__rMT6b",
        switchChainDropdownChains: "Account_switchChainDropdownChains__Njx4Q",
        chain: "Account_chain__1mgjG",
        chainUnavailable: "Account_chainUnavailable__YGh1t",
        accountDropdownHeader: "Account_accountDropdownHeader__ODm4t",
        accountDropdownLabel: "Account_accountDropdownLabel__y8S0b",
        accountNameContainer: "Account_accountNameContainer__cGHtt",
        switchChainNameContainer: "Account_switchChainNameContainer__vjCcP",
        accountName: "Account_accountName__WrD3Y",
        editAccountNameIcon: "Account_editAccountNameIcon__EOLSd",
        accountInputContainer: "Account_accountInputContainer__ztfQN",
        accountInput: "Account_accountInput__lyT0X",
        checkIcon: "Account_checkIcon__hmGEW",
        checkError: "Account_checkError__jdf_b",
        checkSuccess: "Account_checkSuccess__pncds",
        inputError: "Account_inputError__XLhni",
        inputErrorText: "Account_inputErrorText__gyR_z",
        inputSuccess: "Account_inputSuccess__ZWagU",
        accountDropdownDisconnect: "Account_accountDropdownDisconnect__i_LeE",
        account_ets: "Account_account_ets__BnY61",
        connectButton_ets: "Account_connectButton_ets__VfqmX",
        account__info_ets: "Account_account__info_ets__rNQvf",
        account__address_ets: "Account_account__address_ets__3dHi3",
        connectWalletText: "Account_connectWalletText__aYMAU",
      };
    },
    98063: function (e) {
      e.exports = {
        stationLink: "StationLink_stationLink__5zjYc",
        stationIcon: "StationLink_stationIcon__Eaf1m",
      };
    },
    34969: function (e) {
      e.exports = {
        container: "BridgeFooter_container__RDf2Y",
        firstWrap: "BridgeFooter_firstWrap__sWoPq",
        link: "BridgeFooter_link__TQzAd",
        container_spacing: "BridgeFooter_container_spacing__qK3dc",
        line: "BridgeFooter_line__jwRRT",
      };
    },
    19510: function (e) {
      e.exports = {
        container: "HubFooter_container__N6Piv",
        firstWrap: "HubFooter_firstWrap__VQ_JO",
        link: "HubFooter_link__iZm90",
        container_spacing: "HubFooter_container_spacing__nlfYI",
        line: "HubFooter_line__7Xwm7",
      };
    },
    18895: function (e) {
      e.exports = {
        container: "UDFFooter_container__VYI4B",
        firstWrap: "UDFFooter_firstWrap__yzT6U",
        link: "UDFFooter_link__O_2CC",
        container_spacing: "UDFFooter_container_spacing__Cu8_P",
        line: "UDFFooter_line__5maie",
      };
    },
    30306: function (e) {
      e.exports = {
        container: "UTSFooter_container__Zy5KI",
        container_spacing: "UTSFooter_container_spacing__GZtLY",
        links: "UTSFooter_links__G6LE6",
        link: "UTSFooter_link__qrwV3",
      };
    },
    31300: function (e) {
      e.exports = {
        container: "BridgeHeaderComponent_container__AsWus",
        limitedRightBorder: "BridgeHeaderComponent_limitedRightBorder__z_M0M",
        firstWrap: "BridgeHeaderComponent_firstWrap__z_lCN",
        nav: "BridgeHeaderComponent_nav__8XOIU",
        navHidden: "BridgeHeaderComponent_navHidden__UhM6l",
        navHidden__icon: "BridgeHeaderComponent_navHidden__icon__por_i",
        navHidden__text: "BridgeHeaderComponent_navHidden__text__aXZrD",
        navContainer: "BridgeHeaderComponent_navContainer__jB3pj",
        right: "BridgeHeaderComponent_right__KXGZS",
        search: "BridgeHeaderComponent_search__CadrT",
        active: "BridgeHeaderComponent_active__LXM0l",
        dropdownWrapper: "BridgeHeaderComponent_dropdownWrapper__FfPcW",
        dropdown: "BridgeHeaderComponent_dropdown__xUQsc",
        dropdownItem: "BridgeHeaderComponent_dropdownItem__0BvRF",
        dropdownTrigger: "BridgeHeaderComponent_dropdownTrigger__WsK2W",
        externalLinkColor: "BridgeHeaderComponent_externalLinkColor__3MDbp",
      };
    },
    35382: function (e) {
      e.exports = {
        badge: "HeaderBadge_badge__eoBHF",
        badge_new: "HeaderBadge_badge_new__6F_hf",
        badge_soon: "HeaderBadge_badge_soon__Nc2PA",
      };
    },
    84466: function (e) {
      e.exports = { root: "HeaderLogo_root__gzrty" };
    },
    79748: function (e) {
      e.exports = {
        container: "HubHeader_container__Wdi2G",
        limitedRightBorder: "HubHeader_limitedRightBorder__KhoqD",
        toggle: "HubHeader_toggle__biGfW",
        dashboardIcon: "HubHeader_dashboardIcon__19tcu",
        firstWrap: "HubHeader_firstWrap__D0iV2",
        nav: "HubHeader_nav__4u_1J",
        navHidden: "HubHeader_navHidden__XBj7Q",
        navHidden__icon: "HubHeader_navHidden__icon__y4GtM",
        navHidden__text: "HubHeader_navHidden__text__gK15j",
        navContainer: "HubHeader_navContainer__ehd93",
        right: "HubHeader_right__yw0Wh",
        search: "HubHeader_search__hhxUX",
        active: "HubHeader_active__8sElo",
        dropdownWrapper: "HubHeader_dropdownWrapper__ldVN0",
        dropdown: "HubHeader_dropdown__uJKIx",
        dropdownItem: "HubHeader_dropdownItem__EUrNP",
        dropdownTrigger: "HubHeader_dropdownTrigger__ZzdTw",
        searchIcon: "HubHeader_searchIcon__ImSA5",
        externalLinkColor: "HubHeader_externalLinkColor__MHCYt",
      };
    },
    85114: function (e) {
      e.exports = { notify__close: "Notify_notify__close__xHz14" };
    },
    13544: function (e) {
      e.exports = { link: "SelectOption_link___6vVr" };
    },
    45896: function (e) {
      e.exports = {
        container: "UDFHeader_container__By0u4",
        limitedRightBorder: "UDFHeader_limitedRightBorder__qsUXx",
        firstWrap: "UDFHeader_firstWrap__Z4KZ_",
        nav: "UDFHeader_nav__9SMBT",
        navHidden: "UDFHeader_navHidden__GNIbA",
        navHidden__icon: "UDFHeader_navHidden__icon__3DOdG",
        navHidden__text: "UDFHeader_navHidden__text__xh0NY",
        navContainer: "UDFHeader_navContainer__DxVQw",
        right: "UDFHeader_right__tZhPq",
        search: "UDFHeader_search__wTRIa",
        active: "UDFHeader_active__2bM1t",
        dropdownWrapper: "UDFHeader_dropdownWrapper___6Z7h",
        dropdown: "UDFHeader_dropdown__T1lfk",
        dropdownItem: "UDFHeader_dropdownItem__qr6DT",
        dropdownTrigger: "UDFHeader_dropdownTrigger__E_TeQ",
        externalLinkColor: "UDFHeader_externalLinkColor__mzFHH",
      };
    },
    63146: function (e) {
      e.exports = {
        container: "UTSHeader_container__uWHIL",
        limitedRightBorder: "UTSHeader_limitedRightBorder__w8q2O",
        firstWrap: "UTSHeader_firstWrap__UnS8R",
        nav: "UTSHeader_nav__IAoTm",
        navHidden: "UTSHeader_navHidden__aksYw",
        navHidden__icon: "UTSHeader_navHidden__icon__o4UYz",
        navHidden__text: "UTSHeader_navHidden__text__Y6sbf",
        navContainer: "UTSHeader_navContainer__CxOa9",
        right: "UTSHeader_right__YrruI",
        search: "UTSHeader_search__gbDJ5",
        active: "UTSHeader_active__lPTvI",
        dropdownWrapper: "UTSHeader_dropdownWrapper__atUmh",
        dropdown: "UTSHeader_dropdown__g80fp",
        dropdownItem: "UTSHeader_dropdownItem___PFpo",
        dropdownTrigger: "UTSHeader_dropdownTrigger__466QI",
        externalLinkColor: "UTSHeader_externalLinkColor__3gPBO",
        etsNavHidden: "UTSHeader_etsNavHidden___RnwK",
        etsLink: "UTSHeader_etsLink__u5xZ4",
      };
    },
    16529: function (e) {
      e.exports = {
        top: "UnstakingModal_top__GLrmd",
        helper: "UnstakingModal_helper__KH73g",
        green: "UnstakingModal_green__1wZvg",
        row: "UnstakingModal_row__qM_Bh",
        value: "UnstakingModal_value__Y3ErO",
        usd: "UnstakingModal_usd__vRoOE",
        button: "UnstakingModal_button__rxrsi",
        topIcon: "UnstakingModal_topIcon__eOhkV",
        relWrap: "UnstakingModal_relWrap__DrfxK",
        topRightIcon: "UnstakingModal_topRightIcon__koOCo",
      };
    },
    34962: function (e) {
      e.exports = {
        wrapper: "Dropdown_wrapper__vsqOR",
        container: "Dropdown_container__91o09",
        disabled: "Dropdown_disabled__YUUpX",
        open: "Dropdown_open__IjVBj",
        growDown: "Dropdown_growDown__Dorqb",
        disabledItem: "Dropdown_disabledItem__ctsgs",
        item: "Dropdown_item__vuhTi",
      };
    },
    55197: function (e) {
      e.exports = {
        popoverContainer: "BurnPopover_popoverContainer__Sy7wa",
        toggle: "BurnPopover_toggle__Vl3zK",
        active: "BurnPopover_active__zau3R",
        burnIconAnimation: "BurnPopover_burnIconAnimation__sTspc",
        burnIcon: "BurnPopover_burnIcon__KIlP9",
        popover: "BurnPopover_popover__YWHyk",
        open: "BurnPopover_open__nXqHg",
        growDown: "BurnPopover_growDown__F_I4X",
        header: "BurnPopover_header__8pPPZ",
        content: "BurnPopover_content__5Lzp_",
        popoverCard: "BurnPopover_popoverCard__Wyvis",
        title: "BurnPopover_title__Un6u6",
        subtitle: "BurnPopover_subtitle__dBe4j",
        footer: "BurnPopover_footer___s48Z",
        footerIcon: "BurnPopover_footerIcon___VEcX",
        popoverCardBurned: "BurnPopover_popoverCardBurned__2i_sp",
        eligibleToBurnItem: "BurnPopover_eligibleToBurnItem__toYVG",
        eligibleToBurnItemUSD: "BurnPopover_eligibleToBurnItemUSD__imqMK",
        burnedTransactionLink: "BurnPopover_burnedTransactionLink__CRtXs",
        eligibleToBurnContent: "BurnPopover_eligibleToBurnContent__ETiE6",
        eligibleToBurn: "BurnPopover_eligibleToBurn___c3v3",
        confirmButton: "BurnPopover_confirmButton__NcpKq",
        successfullyBurnedContainer:
          "BurnPopover_successfullyBurnedContainer__DqquK",
        nextBurnIn: "BurnPopover_nextBurnIn__76cUH",
        countdown: "BurnPopover_countdown__u3wCl",
        celebrationIconAnimation: "BurnPopover_celebrationIconAnimation__q9A1y",
        burningProcessAnimation: "BurnPopover_burningProcessAnimation__UayHt",
        burningProcessContainer: "BurnPopover_burningProcessContainer__ZuXqG",
        transactionLink: "BurnPopover_transactionLink__TlK0v",
      };
    },
    31048: function (e) {
      e.exports = {
        fadeEnter: "styles_fadeEnter__H2HLT",
        fadeIn: "styles_fadeIn__zCVBB",
        fadeExit: "styles_fadeExit__lXUBg",
        fadeOut: "styles_fadeOut__eQI_4",
        wrapper: "styles_wrapper__KqxLa",
        container: "styles_container___2WBa",
        heading: "styles_heading__Im54E",
        title: "styles_title__3N8tO",
        closeIcon: "styles_closeIcon__JzsW2",
        help: "styles_help__OzNaB",
        walletItemsWrapper: "styles_walletItemsWrapper__a59Wf",
        walletItem: "styles_walletItem__ugmti",
        clearMultiversx: "styles_clearMultiversx__USdji",
        hidden: "styles_hidden__nXpu_",
        disabledNetwork: "styles_disabledNetwork__OGBzy",
        walletTitle: "styles_walletTitle__hTuOt",
        walletAsset: "styles_walletAsset__XEBqK",
        ping: "styles_ping__KY0pW",
      };
    },
    34409: function (e, t) {
      "use strict";
      t.Z = {
        src: "/_next/static/media/disconnect-icon.f5d296bf.svg",
        height: 20,
        width: 20,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
    83540: function (e, t) {
      "use strict";
      t.Z = {
        src: "/_next/static/media/entangle.8e7bd4e0.svg",
        height: 16,
        width: 16,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
    68099: function (e, t) {
      "use strict";
      t.Z = {
        src: "/_next/static/media/bridge-logo.ae0243c9.svg",
        height: 16,
        width: 16,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
    51351: function (e, t) {
      "use strict";
      t.Z = {
        src: "/_next/static/media/bridge-text-logo.4df04c85.svg",
        height: 13,
        width: 66,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
    83276: function (e, t) {
      "use strict";
      t.Z = {
        src: "/_next/static/media/openDrop.4e2f3819.svg",
        height: 20,
        width: 20,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
  },
  function (e) {
    e.O(
      0,
      [
        5676, 6560, 1581, 1498, 1147, 5386, 8497, 4350, 6918, 8218, 3814, 6990,
        9228, 8933, 1293, 3125, 4335, 4896, 9308, 9543, 6276, 4031, 8217, 3141,
        3345, 9700, 4779, 1394, 483, 6336, 2971, 2117, 1744,
      ],
      function () {
        return e((e.s = 65816));
      }
    ),
      (_N_E = e.O());
  },
]);
