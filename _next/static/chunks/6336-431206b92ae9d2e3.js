(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6336],
  {
    76647: function () {},
    88924: function () {},
    46815: function (e) {
      "use strict";
      e.exports = [
        {
          inputs: [
            {
              internalType: "address",
              name: "_messageTransmitter",
              type: "address",
            },
            {
              internalType: "uint32",
              name: "_messageBodyVersion",
              type: "uint32",
            },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: "uint64",
              name: "nonce",
              type: "uint64",
            },
            {
              indexed: !0,
              internalType: "address",
              name: "burnToken",
              type: "address",
            },
            {
              indexed: !1,
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
            {
              indexed: !0,
              internalType: "address",
              name: "depositor",
              type: "address",
            },
            {
              indexed: !1,
              internalType: "bytes32",
              name: "mintRecipient",
              type: "bytes32",
            },
            {
              indexed: !1,
              internalType: "uint32",
              name: "destinationDomain",
              type: "uint32",
            },
            {
              indexed: !1,
              internalType: "bytes32",
              name: "destinationTokenMessenger",
              type: "bytes32",
            },
            {
              indexed: !1,
              internalType: "bytes32",
              name: "destinationCaller",
              type: "bytes32",
            },
          ],
          name: "DepositForBurn",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !1,
              internalType: "address",
              name: "localMinter",
              type: "address",
            },
          ],
          name: "LocalMinterAdded",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !1,
              internalType: "address",
              name: "localMinter",
              type: "address",
            },
          ],
          name: "LocalMinterRemoved",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: "address",
              name: "mintRecipient",
              type: "address",
            },
            {
              indexed: !1,
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
            {
              indexed: !0,
              internalType: "address",
              name: "mintToken",
              type: "address",
            },
          ],
          name: "MintAndWithdraw",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: "address",
              name: "previousOwner",
              type: "address",
            },
            {
              indexed: !0,
              internalType: "address",
              name: "newOwner",
              type: "address",
            },
          ],
          name: "OwnershipTransferStarted",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: "address",
              name: "previousOwner",
              type: "address",
            },
            {
              indexed: !0,
              internalType: "address",
              name: "newOwner",
              type: "address",
            },
          ],
          name: "OwnershipTransferred",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !1,
              internalType: "uint32",
              name: "domain",
              type: "uint32",
            },
            {
              indexed: !1,
              internalType: "bytes32",
              name: "tokenMessenger",
              type: "bytes32",
            },
          ],
          name: "RemoteTokenMessengerAdded",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !1,
              internalType: "uint32",
              name: "domain",
              type: "uint32",
            },
            {
              indexed: !1,
              internalType: "bytes32",
              name: "tokenMessenger",
              type: "bytes32",
            },
          ],
          name: "RemoteTokenMessengerRemoved",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: "address",
              name: "newRescuer",
              type: "address",
            },
          ],
          name: "RescuerChanged",
          type: "event",
        },
        {
          inputs: [],
          name: "acceptOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newLocalMinter",
              type: "address",
            },
          ],
          name: "addLocalMinter",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint32", name: "domain", type: "uint32" },
            {
              internalType: "bytes32",
              name: "tokenMessenger",
              type: "bytes32",
            },
          ],
          name: "addRemoteTokenMessenger",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "amount", type: "uint256" },
            {
              internalType: "uint32",
              name: "destinationDomain",
              type: "uint32",
            },
            { internalType: "bytes32", name: "mintRecipient", type: "bytes32" },
            { internalType: "address", name: "burnToken", type: "address" },
          ],
          name: "depositForBurn",
          outputs: [{ internalType: "uint64", name: "_nonce", type: "uint64" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "amount", type: "uint256" },
            {
              internalType: "uint32",
              name: "destinationDomain",
              type: "uint32",
            },
            { internalType: "bytes32", name: "mintRecipient", type: "bytes32" },
            { internalType: "address", name: "burnToken", type: "address" },
            {
              internalType: "bytes32",
              name: "destinationCaller",
              type: "bytes32",
            },
          ],
          name: "depositForBurnWithCaller",
          outputs: [{ internalType: "uint64", name: "nonce", type: "uint64" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint32", name: "remoteDomain", type: "uint32" },
            { internalType: "bytes32", name: "sender", type: "bytes32" },
            { internalType: "bytes", name: "messageBody", type: "bytes" },
          ],
          name: "handleReceiveMessage",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "localMessageTransmitter",
          outputs: [
            {
              internalType: "contract IMessageTransmitter",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "localMinter",
          outputs: [
            {
              internalType: "contract ITokenMinter",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "messageBodyVersion",
          outputs: [{ internalType: "uint32", name: "", type: "uint32" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "owner",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "pendingOwner",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ internalType: "uint32", name: "", type: "uint32" }],
          name: "remoteTokenMessengers",
          outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "removeLocalMinter",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [{ internalType: "uint32", name: "domain", type: "uint32" }],
          name: "removeRemoteTokenMessenger",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "bytes", name: "originalMessage", type: "bytes" },
            {
              internalType: "bytes",
              name: "originalAttestation",
              type: "bytes",
            },
            {
              internalType: "bytes32",
              name: "newDestinationCaller",
              type: "bytes32",
            },
            {
              internalType: "bytes32",
              name: "newMintRecipient",
              type: "bytes32",
            },
          ],
          name: "replaceDepositForBurn",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "contract IERC20",
              name: "tokenContract",
              type: "address",
            },
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256", name: "amount", type: "uint256" },
          ],
          name: "rescueERC20",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "rescuer",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "newOwner", type: "address" },
          ],
          name: "transferOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "newRescuer", type: "address" },
          ],
          name: "updateRescuer",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ];
    },
    75948: function (e, n, t) {
      "use strict";
      t.d(n, {
        Os: function () {
          return m;
        },
        ZP: function () {
          return c;
        },
      });
      var a = t(57437),
        s = t(2265),
        i = t(8448),
        r = t(29557);
      function o() {
        throw Error("Oops! Need to connect your Keplr Wallet first.");
      }
      let l = {
          connected: !1,
          init: o,
          clear: o,
          address: "",
          name: "",
          refreshBalance: o,
          getClient: o,
          getSigner: o,
          updateSigner: o,
          network: "",
          setNetwork: o,
        },
        u = s.createContext(l),
        m = () => s.useContext(u);
      function c(e) {
        let { children: n, network: t, setNetwork: o } = e,
          [m, c] = (0, s.useState)(null),
          [d, p] = (0, s.useState)(null),
          g = r.m5.Noble,
          f = { ...l, init: c, network: t, setNetwork: o },
          [y, h] = (0, s.useState)(f),
          M = () => {
            h({ ...f }), p(null), c(null);
          };
        async function b(e, n) {
          if (d) {
            for (let t in ((n.length = 0), g.coinMap)) {
              let a = await d.getBalance(e, t);
              a && n.push(a);
            }
            h({ ...y, balance: n });
          }
        }
        let k = (e) => {
          c(e);
        };
        return (
          (0, s.useEffect)(() => {
            async function e() {
              try {
                let e = await (0, i.eI)(m, t);
                p(e);
              } catch (e) {}
            }
            m && e();
          }, [m]),
          (0, s.useEffect)(() => {
            let e = [];
            async function n() {
              let n = (await m.getAccounts())[0].address,
                a = window,
                s = await a.keplr.getKey(g.chainId);
              await b(n, e),
                window.localStorage.setItem("wallet_address", n),
                (document.cookie = `wallet_address=${n}; path=/;`),
                h({
                  connected: !0,
                  init: () => {},
                  clear: M,
                  address: n,
                  name: s.name || "",
                  balance: e,
                  refreshBalance: b.bind(null, n, e),
                  getClient: () => d,
                  getSigner: () => m,
                  updateSigner: k,
                  network: t,
                  setNetwork: o,
                });
            }
            m && d && n();
          }, [d]),
          (0, s.useEffect)(() => {
            h({ ...y, network: t });
          }, [t]),
          (0, a.jsx)(u.Provider, { value: y, children: n })
        );
      }
    },
    8448: function (e, n, t) {
      "use strict";
      t.d(n, {
        eI: function () {
          return m;
        },
        ZQ: function () {
          return d;
        },
      });
      var a = t(2265);
      let s = (e) => ({
        chainId: e.chainId,
        chainName: e.chainName,
        rpc: e.rpcUrl,
        rest: e.httpUrl,
        bech32Config: {
          bech32PrefixAccAddr: `${e.addressPrefix}`,
          bech32PrefixAccPub: `${e.addressPrefix}pub`,
          bech32PrefixValAddr: `${e.addressPrefix}valoper`,
          bech32PrefixValPub: `${e.addressPrefix}valoperpub`,
          bech32PrefixConsAddr: `${e.addressPrefix}valcons`,
          bech32PrefixConsPub: `${e.addressPrefix}valconspub`,
        },
        currencies: [
          {
            coinDenom: e.coinMap[e.feeToken].denom,
            coinMinimalDenom: e.feeToken,
            coinDecimals: e.coinMap[e.feeToken].fractionalDigits,
          },
          {
            coinDenom: e.coinMap[e.stakingToken].denom,
            coinMinimalDenom: e.stakingToken,
            coinDecimals: e.coinMap[e.stakingToken].fractionalDigits,
          },
        ],
        feeCurrencies: [
          {
            coinDenom: e.coinMap[e.feeToken].denom,
            coinMinimalDenom: e.feeToken,
            coinDecimals: e.coinMap[e.feeToken].fractionalDigits,
            gasPriceStep: {
              low: e.gasPrice / 2,
              average: e.gasPrice,
              high: 2 * e.gasPrice,
            },
          },
        ],
        stakeCurrency: {
          coinDenom: e.coinMap[e.stakingToken].denom,
          coinMinimalDenom: e.stakingToken,
          coinDecimals: e.coinMap[e.stakingToken].fractionalDigits,
        },
        bip44: { coinType: 118 },
        coinType: 118,
      });
      var i = t(75948),
        r = t(83066),
        o = t(29557),
        l = t(26665),
        u = t(24836);
      async function m(e, n) {
        let t = window.getOfflineSigner(o.m5.Noble.chainId);
        return await r.SigningStargateClient.connectWithSigner(
          o.m5.Noble.rpcUrl,
          t,
          {
            gasPrice: r.GasPrice.fromString("0.025uusdc"),
            registry: new l.Registry(u.x),
          }
        );
      }
      async function c(e) {
        let n = window;
        n.getOfflineSigner ||
          (console.log("Keplr extension is not available"),
          window.open("https://www.keplr.app/get", "_blank")),
          await n.keplr.experimentalSuggestChain(s(e)),
          await n.keplr.enable(e.chainId);
        let t = await n.getOfflineSignerAuto(e.chainId);
        return (t.signAmino = t.signAmino ?? t.sign), Promise.resolve(t);
      }
      function d() {
        let { clear: e, init: n, connected: t, network: s } = (0, i.Os)(),
          [r, l] = (0, a.useState)(!1),
          u = o.m5.Noble;
        return (
          (0, a.useEffect)(() => {
            t && l(!1);
          }, [t]),
          {
            connect: function () {
              let e =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              l(!0),
                c(u)
                  .then((t) => {
                    n(t), e && l(!1);
                  })
                  .catch((e) => {
                    l(!1), console.error(e.message);
                  });
            },
            disconnect: () => {
              localStorage.clear(), e();
            },
            connecting: r,
          }
        );
      }
    },
    77816: function (e, n, t) {
      "use strict";
      t.d(n, {
        Yb: function () {
          return b;
        },
        AW: function () {
          return y;
        },
        CT: function () {
          return p;
        },
        CV: function () {
          return d;
        },
        dS: function () {
          return g;
        },
        DN: function () {
          return f;
        },
      }),
        t(38227);
      var a = t(55135),
        s = t(64024),
        i = t(59369),
        r = t(32308),
        o = JSON.parse(
          '{"version":"0.1.0","name":"message_transmitter","instructions":[{"name":"initialize","accounts":[{"name":"payer","isMut":true,"isSigner":true},{"name":"upgradeAuthority","isMut":false,"isSigner":true},{"name":"messageTransmitter","isMut":true,"isSigner":false},{"name":"messageTransmitterProgramData","isMut":false,"isSigner":false},{"name":"messageTransmitterProgram","isMut":false,"isSigner":false},{"name":"systemProgram","isMut":false,"isSigner":false},{"name":"eventAuthority","isMut":false,"isSigner":false},{"name":"program","isMut":false,"isSigner":false}],"args":[{"name":"params","type":{"defined":"InitializeParams"}}]},{"name":"transferOwnership","accounts":[{"name":"owner","isMut":false,"isSigner":true},{"name":"messageTransmitter","isMut":true,"isSigner":false},{"name":"eventAuthority","isMut":false,"isSigner":false},{"name":"program","isMut":false,"isSigner":false}],"args":[{"name":"params","type":{"defined":"TransferOwnershipParams"}}]},{"name":"acceptOwnership","accounts":[{"name":"pendingOwner","isMut":false,"isSigner":true},{"name":"messageTransmitter","isMut":true,"isSigner":false},{"name":"eventAuthority","isMut":false,"isSigner":false},{"name":"program","isMut":false,"isSigner":false}],"args":[{"name":"params","type":{"defined":"AcceptOwnershipParams"}}]},{"name":"updatePauser","accounts":[{"name":"owner","isMut":false,"isSigner":true},{"name":"messageTransmitter","isMut":true,"isSigner":false},{"name":"eventAuthority","isMut":false,"isSigner":false},{"name":"program","isMut":false,"isSigner":false}],"args":[{"name":"params","type":{"defined":"UpdatePauserParams"}}]},{"name":"updateAttesterManager","accounts":[{"name":"owner","isMut":false,"isSigner":true},{"name":"messageTransmitter","isMut":true,"isSigner":false},{"name":"eventAuthority","isMut":false,"isSigner":false},{"name":"program","isMut":false,"isSigner":false}],"args":[{"name":"params","type":{"defined":"UpdateAttesterManagerParams"}}]},{"name":"pause","accounts":[{"name":"pauser","isMut":false,"isSigner":true},{"name":"messageTransmitter","isMut":true,"isSigner":false},{"name":"eventAuthority","isMut":false,"isSigner":false},{"name":"program","isMut":false,"isSigner":false}],"args":[{"name":"params","type":{"defined":"PauseParams"}}]},{"name":"unpause","accounts":[{"name":"pauser","isMut":false,"isSigner":true},{"name":"messageTransmitter","isMut":true,"isSigner":false},{"name":"eventAuthority","isMut":false,"isSigner":false},{"name":"program","isMut":false,"isSigner":false}],"args":[{"name":"params","type":{"defined":"UnpauseParams"}}]},{"name":"setMaxMessageBodySize","accounts":[{"name":"owner","isMut":false,"isSigner":true},{"name":"messageTransmitter","isMut":true,"isSigner":false},{"name":"eventAuthority","isMut":false,"isSigner":false},{"name":"program","isMut":false,"isSigner":false}],"args":[{"name":"params","type":{"defined":"SetMaxMessageBodySizeParams"}}]},{"name":"enableAttester","accounts":[{"name":"payer","isMut":true,"isSigner":true},{"name":"attesterManager","isMut":false,"isSigner":true},{"name":"messageTransmitter","isMut":true,"isSigner":false},{"name":"systemProgram","isMut":false,"isSigner":false},{"name":"eventAuthority","isMut":false,"isSigner":false},{"name":"program","isMut":false,"isSigner":false}],"args":[{"name":"params","type":{"defined":"EnableAttesterParams"}}]},{"name":"disableAttester","accounts":[{"name":"payer","isMut":true,"isSigner":true},{"name":"attesterManager","isMut":false,"isSigner":true},{"name":"messageTransmitter","isMut":true,"isSigner":false},{"name":"systemProgram","isMut":false,"isSigner":false},{"name":"eventAuthority","isMut":false,"isSigner":false},{"name":"program","isMut":false,"isSigner":false}],"args":[{"name":"params","type":{"defined":"DisableAttesterParams"}}]},{"name":"setSignatureThreshold","accounts":[{"name":"attesterManager","isMut":false,"isSigner":true},{"name":"messageTransmitter","isMut":true,"isSigner":false},{"name":"eventAuthority","isMut":false,"isSigner":false},{"name":"program","isMut":false,"isSigner":false}],"args":[{"name":"params","type":{"defined":"SetSignatureThresholdParams"}}]},{"name":"sendMessage","accounts":[{"name":"eventRentPayer","isMut":true,"isSigner":true},{"name":"senderAuthorityPda","isMut":false,"isSigner":true},{"name":"messageTransmitter","isMut":true,"isSigner":false},{"name":"messageSentEventData","isMut":true,"isSigner":true},{"name":"senderProgram","isMut":false,"isSigner":false},{"name":"systemProgram","isMut":false,"isSigner":false}],"args":[{"name":"params","type":{"defined":"SendMessageParams"}}],"returns":"u64"},{"name":"sendMessageWithCaller","accounts":[{"name":"eventRentPayer","isMut":true,"isSigner":true},{"name":"senderAuthorityPda","isMut":false,"isSigner":true},{"name":"messageTransmitter","isMut":true,"isSigner":false},{"name":"messageSentEventData","isMut":true,"isSigner":true},{"name":"senderProgram","isMut":false,"isSigner":false},{"name":"systemProgram","isMut":false,"isSigner":false}],"args":[{"name":"params","type":{"defined":"SendMessageWithCallerParams"}}],"returns":"u64"},{"name":"replaceMessage","accounts":[{"name":"eventRentPayer","isMut":true,"isSigner":true},{"name":"senderAuthorityPda","isMut":false,"isSigner":true},{"name":"messageTransmitter","isMut":true,"isSigner":false},{"name":"messageSentEventData","isMut":true,"isSigner":true},{"name":"senderProgram","isMut":false,"isSigner":false},{"name":"systemProgram","isMut":false,"isSigner":false}],"args":[{"name":"params","type":{"defined":"ReplaceMessageParams"}}],"returns":"u64"},{"name":"receiveMessage","accounts":[{"name":"payer","isMut":true,"isSigner":true},{"name":"caller","isMut":false,"isSigner":true},{"name":"authorityPda","isMut":false,"isSigner":false},{"name":"messageTransmitter","isMut":false,"isSigner":false},{"name":"usedNonces","isMut":true,"isSigner":false},{"name":"receiver","isMut":false,"isSigner":false},{"name":"systemProgram","isMut":false,"isSigner":false},{"name":"eventAuthority","isMut":false,"isSigner":false},{"name":"program","isMut":false,"isSigner":false}],"args":[{"name":"params","type":{"defined":"ReceiveMessageParams"}}]},{"name":"reclaimEventAccount","accounts":[{"name":"payee","isMut":true,"isSigner":true,"docs":["rent SOL receiver, should match original rent payer"]},{"name":"messageTransmitter","isMut":true,"isSigner":false},{"name":"messageSentEventData","isMut":true,"isSigner":false}],"args":[{"name":"params","type":{"defined":"ReclaimEventAccountParams"}}]},{"name":"getNoncePda","accounts":[{"name":"messageTransmitter","isMut":false,"isSigner":false}],"args":[{"name":"params","type":{"defined":"GetNoncePDAParams"}}],"returns":"publicKey"},{"name":"isNonceUsed","accounts":[{"name":"usedNonces","isMut":false,"isSigner":false,"docs":["Account will be explicitly loaded to avoid error when it\'s not initialized"]}],"args":[{"name":"params","type":{"defined":"IsNonceUsedParams"}}],"returns":"bool"}],"accounts":[{"name":"MessageSent","type":{"kind":"struct","fields":[{"name":"rentPayer","type":"publicKey"},{"name":"message","type":"bytes"}]}},{"name":"MessageTransmitter","docs":["Main state of the MessageTransmitter program"],"type":{"kind":"struct","fields":[{"name":"owner","type":"publicKey"},{"name":"pendingOwner","type":"publicKey"},{"name":"attesterManager","type":"publicKey"},{"name":"pauser","type":"publicKey"},{"name":"paused","type":"bool"},{"name":"localDomain","type":"u32"},{"name":"version","type":"u32"},{"name":"signatureThreshold","type":"u32"},{"name":"enabledAttesters","type":{"vec":"publicKey"}},{"name":"maxMessageBodySize","type":"u64"},{"name":"nextAvailableNonce","type":"u64"}]}},{"name":"UsedNonces","docs":["UsedNonces account holds an array of bits that indicate which nonces were already used","so they can\'t be resused to receive new messages. Array starts with the first_nonce and","holds flags for UsedNonces::MAX_NONCES. Nonces are recorded separately for each remote_domain."],"type":{"kind":"struct","fields":[{"name":"remoteDomain","type":"u32"},{"name":"firstNonce","type":"u64"},{"name":"usedNonces","type":{"array":["u64",100]}}]}}],"types":[{"name":"AcceptOwnershipParams","type":{"kind":"struct","fields":[]}},{"name":"DisableAttesterParams","type":{"kind":"struct","fields":[{"name":"attester","type":"publicKey"}]}},{"name":"EnableAttesterParams","type":{"kind":"struct","fields":[{"name":"newAttester","type":"publicKey"}]}},{"name":"GetNoncePDAParams","type":{"kind":"struct","fields":[{"name":"nonce","type":"u64"},{"name":"sourceDomain","type":"u32"}]}},{"name":"InitializeParams","type":{"kind":"struct","fields":[{"name":"localDomain","type":"u32"},{"name":"attester","type":"publicKey"},{"name":"maxMessageBodySize","type":"u64"},{"name":"version","type":"u32"}]}},{"name":"IsNonceUsedParams","type":{"kind":"struct","fields":[{"name":"nonce","type":"u64"}]}},{"name":"PauseParams","type":{"kind":"struct","fields":[]}},{"name":"ReceiveMessageParams","type":{"kind":"struct","fields":[{"name":"message","type":"bytes"},{"name":"attestation","type":"bytes"}]}},{"name":"HandleReceiveMessageParams","type":{"kind":"struct","fields":[{"name":"remoteDomain","type":"u32"},{"name":"sender","type":"publicKey"},{"name":"messageBody","type":"bytes"},{"name":"authorityBump","type":"u8"}]}},{"name":"ReclaimEventAccountParams","type":{"kind":"struct","fields":[{"name":"attestation","type":"bytes"}]}},{"name":"ReplaceMessageParams","type":{"kind":"struct","fields":[{"name":"originalMessage","type":"bytes"},{"name":"originalAttestation","type":"bytes"},{"name":"newMessageBody","type":"bytes"},{"name":"newDestinationCaller","type":"publicKey"}]}},{"name":"SendMessageWithCallerParams","type":{"kind":"struct","fields":[{"name":"destinationDomain","type":"u32"},{"name":"recipient","type":"publicKey"},{"name":"messageBody","type":"bytes"},{"name":"destinationCaller","type":"publicKey"}]}},{"name":"SendMessageParams","type":{"kind":"struct","fields":[{"name":"destinationDomain","type":"u32"},{"name":"recipient","type":"publicKey"},{"name":"messageBody","type":"bytes"}]}},{"name":"SetMaxMessageBodySizeParams","type":{"kind":"struct","fields":[{"name":"newMaxMessageBodySize","type":"u64"}]}},{"name":"SetSignatureThresholdParams","type":{"kind":"struct","fields":[{"name":"newSignatureThreshold","type":"u32"}]}},{"name":"TransferOwnershipParams","type":{"kind":"struct","fields":[{"name":"newOwner","type":"publicKey"}]}},{"name":"UnpauseParams","type":{"kind":"struct","fields":[]}},{"name":"UpdateAttesterManagerParams","type":{"kind":"struct","fields":[{"name":"newAttesterManager","type":"publicKey"}]}},{"name":"UpdatePauserParams","type":{"kind":"struct","fields":[{"name":"newPauser","type":"publicKey"}]}},{"name":"MathError","type":{"kind":"enum","variants":[{"name":"MathOverflow"},{"name":"MathUnderflow"},{"name":"ErrorInDivision"}]}}],"events":[{"name":"OwnershipTransferStarted","fields":[{"name":"previousOwner","type":"publicKey","index":false},{"name":"newOwner","type":"publicKey","index":false}]},{"name":"OwnershipTransferred","fields":[{"name":"previousOwner","type":"publicKey","index":false},{"name":"newOwner","type":"publicKey","index":false}]},{"name":"PauserChanged","fields":[{"name":"newAddress","type":"publicKey","index":false}]},{"name":"AttesterManagerUpdated","fields":[{"name":"previousAttesterManager","type":"publicKey","index":false},{"name":"newAttesterManager","type":"publicKey","index":false}]},{"name":"MessageReceived","fields":[{"name":"caller","type":"publicKey","index":false},{"name":"sourceDomain","type":"u32","index":false},{"name":"nonce","type":"u64","index":false},{"name":"sender","type":"publicKey","index":false},{"name":"messageBody","type":"bytes","index":false}]},{"name":"SignatureThresholdUpdated","fields":[{"name":"oldSignatureThreshold","type":"u32","index":false},{"name":"newSignatureThreshold","type":"u32","index":false}]},{"name":"AttesterEnabled","fields":[{"name":"attester","type":"publicKey","index":false}]},{"name":"AttesterDisabled","fields":[{"name":"attester","type":"publicKey","index":false}]},{"name":"MaxMessageBodySizeUpdated","fields":[{"name":"newMaxMessageBodySize","type":"u64","index":false}]},{"name":"Pause","fields":[]},{"name":"Unpause","fields":[]}],"errors":[{"code":6000,"name":"InvalidAuthority","msg":"Invalid authority"},{"code":6001,"name":"ProgramPaused","msg":"Instruction is not allowed at this time"},{"code":6002,"name":"InvalidMessageTransmitterState","msg":"Invalid message transmitter state"},{"code":6003,"name":"InvalidSignatureThreshold","msg":"Invalid signature threshold"},{"code":6004,"name":"SignatureThresholdAlreadySet","msg":"Signature threshold already set"},{"code":6005,"name":"InvalidOwner","msg":"Invalid owner"},{"code":6006,"name":"InvalidPauser","msg":"Invalid pauser"},{"code":6007,"name":"InvalidAttesterManager","msg":"Invalid attester manager"},{"code":6008,"name":"InvalidAttester","msg":"Invalid attester"},{"code":6009,"name":"AttesterAlreadyEnabled","msg":"Attester already enabled"},{"code":6010,"name":"TooFewEnabledAttesters","msg":"Too few enabled attesters"},{"code":6011,"name":"SignatureThresholdTooLow","msg":"Signature threshold is too low"},{"code":6012,"name":"AttesterAlreadyDisabled","msg":"Attester already disabled"},{"code":6013,"name":"MessageBodyLimitExceeded","msg":"Message body exceeds max size"},{"code":6014,"name":"InvalidDestinationCaller","msg":"Invalid destination caller"},{"code":6015,"name":"InvalidRecipient","msg":"Invalid message recipient"},{"code":6016,"name":"SenderNotPermitted","msg":"Sender is not permitted"},{"code":6017,"name":"InvalidSourceDomain","msg":"Invalid source domain"},{"code":6018,"name":"InvalidDestinationDomain","msg":"Invalid destination domain"},{"code":6019,"name":"InvalidMessageVersion","msg":"Invalid message version"},{"code":6020,"name":"InvalidUsedNoncesAccount","msg":"Invalid used nonces account"},{"code":6021,"name":"InvalidRecipientProgram","msg":"Invalid recipient program"},{"code":6022,"name":"InvalidNonce","msg":"Invalid nonce"},{"code":6023,"name":"NonceAlreadyUsed","msg":"Nonce already used"},{"code":6024,"name":"MessageTooShort","msg":"Message is too short"},{"code":6025,"name":"MalformedMessage","msg":"Malformed message"},{"code":6026,"name":"InvalidSignatureOrderOrDupe","msg":"Invalid signature order or dupe"},{"code":6027,"name":"InvalidAttesterSignature","msg":"Invalid attester signature"},{"code":6028,"name":"InvalidAttestationLength","msg":"Invalid attestation length"},{"code":6029,"name":"InvalidSignatureRecoveryId","msg":"Invalid signature recovery ID"},{"code":6030,"name":"InvalidSignatureSValue","msg":"Invalid signature S value"},{"code":6031,"name":"InvalidMessageHash","msg":"Invalid message hash"}]}'
        ),
        l = JSON.parse(
          '{"version":"0.1.0","name":"token_messenger_minter","instructions":[{"name":"initialize","accounts":[{"name":"payer","isMut":true,"isSigner":true},{"name":"upgradeAuthority","isMut":false,"isSigner":true},{"name":"authorityPda","isMut":false,"isSigner":false},{"name":"tokenMessenger","isMut":true,"isSigner":false},{"name":"tokenMinter","isMut":true,"isSigner":false},{"name":"tokenMessengerMinterProgramData","isMut":false,"isSigner":false},{"name":"tokenMessengerMinterProgram","isMut":false,"isSigner":false},{"name":"systemProgram","isMut":false,"isSigner":false},{"name":"eventAuthority","isMut":false,"isSigner":false},{"name":"program","isMut":false,"isSigner":false}],"args":[{"name":"params","type":{"defined":"InitializeParams"}}]},{"name":"transferOwnership","accounts":[{"name":"owner","isMut":false,"isSigner":true},{"name":"tokenMessenger","isMut":true,"isSigner":false},{"name":"eventAuthority","isMut":false,"isSigner":false},{"name":"program","isMut":false,"isSigner":false}],"args":[{"name":"params","type":{"defined":"TransferOwnershipParams"}}]},{"name":"acceptOwnership","accounts":[{"name":"pendingOwner","isMut":false,"isSigner":true},{"name":"tokenMessenger","isMut":true,"isSigner":false},{"name":"eventAuthority","isMut":false,"isSigner":false},{"name":"program","isMut":false,"isSigner":false}],"args":[{"name":"params","type":{"defined":"AcceptOwnershipParams"}}]},{"name":"addRemoteTokenMessenger","accounts":[{"name":"payer","isMut":true,"isSigner":true},{"name":"owner","isMut":false,"isSigner":true},{"name":"tokenMessenger","isMut":false,"isSigner":false},{"name":"remoteTokenMessenger","isMut":true,"isSigner":false},{"name":"systemProgram","isMut":false,"isSigner":false},{"name":"eventAuthority","isMut":false,"isSigner":false},{"name":"program","isMut":false,"isSigner":false}],"args":[{"name":"params","type":{"defined":"AddRemoteTokenMessengerParams"}}]},{"name":"removeRemoteTokenMessenger","accounts":[{"name":"payee","isMut":true,"isSigner":true},{"name":"owner","isMut":false,"isSigner":true},{"name":"tokenMessenger","isMut":false,"isSigner":false},{"name":"remoteTokenMessenger","isMut":true,"isSigner":false},{"name":"eventAuthority","isMut":false,"isSigner":false},{"name":"program","isMut":false,"isSigner":false}],"args":[{"name":"params","type":{"defined":"RemoveRemoteTokenMessengerParams"}}]},{"name":"depositForBurn","accounts":[{"name":"owner","isMut":false,"isSigner":true},{"name":"eventRentPayer","isMut":true,"isSigner":true},{"name":"senderAuthorityPda","isMut":false,"isSigner":false},{"name":"burnTokenAccount","isMut":true,"isSigner":false},{"name":"messageTransmitter","isMut":true,"isSigner":false},{"name":"tokenMessenger","isMut":false,"isSigner":false},{"name":"remoteTokenMessenger","isMut":false,"isSigner":false},{"name":"tokenMinter","isMut":false,"isSigner":false},{"name":"localToken","isMut":true,"isSigner":false},{"name":"burnTokenMint","isMut":true,"isSigner":false},{"name":"messageSentEventData","isMut":true,"isSigner":true},{"name":"messageTransmitterProgram","isMut":false,"isSigner":false},{"name":"tokenMessengerMinterProgram","isMut":false,"isSigner":false},{"name":"tokenProgram","isMut":false,"isSigner":false},{"name":"systemProgram","isMut":false,"isSigner":false},{"name":"eventAuthority","isMut":false,"isSigner":false},{"name":"program","isMut":false,"isSigner":false}],"args":[{"name":"params","type":{"defined":"DepositForBurnParams"}}],"returns":"u64"},{"name":"depositForBurnWithCaller","accounts":[{"name":"owner","isMut":false,"isSigner":true},{"name":"eventRentPayer","isMut":true,"isSigner":true},{"name":"senderAuthorityPda","isMut":false,"isSigner":false},{"name":"burnTokenAccount","isMut":true,"isSigner":false},{"name":"messageTransmitter","isMut":true,"isSigner":false},{"name":"tokenMessenger","isMut":false,"isSigner":false},{"name":"remoteTokenMessenger","isMut":false,"isSigner":false},{"name":"tokenMinter","isMut":false,"isSigner":false},{"name":"localToken","isMut":true,"isSigner":false},{"name":"burnTokenMint","isMut":true,"isSigner":false},{"name":"messageSentEventData","isMut":true,"isSigner":true},{"name":"messageTransmitterProgram","isMut":false,"isSigner":false},{"name":"tokenMessengerMinterProgram","isMut":false,"isSigner":false},{"name":"tokenProgram","isMut":false,"isSigner":false},{"name":"systemProgram","isMut":false,"isSigner":false},{"name":"eventAuthority","isMut":false,"isSigner":false},{"name":"program","isMut":false,"isSigner":false}],"args":[{"name":"params","type":{"defined":"DepositForBurnWithCallerParams"}}],"returns":"u64"},{"name":"replaceDepositForBurn","accounts":[{"name":"owner","isMut":false,"isSigner":true},{"name":"eventRentPayer","isMut":true,"isSigner":true},{"name":"senderAuthorityPda","isMut":false,"isSigner":false},{"name":"messageTransmitter","isMut":true,"isSigner":false},{"name":"tokenMessenger","isMut":false,"isSigner":false},{"name":"messageSentEventData","isMut":true,"isSigner":true},{"name":"messageTransmitterProgram","isMut":false,"isSigner":false},{"name":"tokenMessengerMinterProgram","isMut":false,"isSigner":false},{"name":"systemProgram","isMut":false,"isSigner":false},{"name":"eventAuthority","isMut":false,"isSigner":false},{"name":"program","isMut":false,"isSigner":false}],"args":[{"name":"params","type":{"defined":"ReplaceDepositForBurnParams"}}],"returns":"u64"},{"name":"handleReceiveMessage","accounts":[{"name":"authorityPda","isMut":false,"isSigner":true},{"name":"tokenMessenger","isMut":false,"isSigner":false},{"name":"remoteTokenMessenger","isMut":false,"isSigner":false},{"name":"tokenMinter","isMut":false,"isSigner":false},{"name":"localToken","isMut":true,"isSigner":false},{"name":"tokenPair","isMut":false,"isSigner":false},{"name":"recipientTokenAccount","isMut":true,"isSigner":false},{"name":"custodyTokenAccount","isMut":true,"isSigner":false},{"name":"tokenProgram","isMut":false,"isSigner":false},{"name":"eventAuthority","isMut":false,"isSigner":false},{"name":"program","isMut":false,"isSigner":false}],"args":[{"name":"params","type":{"defined":"HandleReceiveMessageParams"}}]},{"name":"setTokenController","accounts":[{"name":"owner","isMut":false,"isSigner":true},{"name":"tokenMessenger","isMut":false,"isSigner":false},{"name":"tokenMinter","isMut":true,"isSigner":false},{"name":"eventAuthority","isMut":false,"isSigner":false},{"name":"program","isMut":false,"isSigner":false}],"args":[{"name":"params","type":{"defined":"SetTokenControllerParams"}}]},{"name":"pause","accounts":[{"name":"pauser","isMut":false,"isSigner":true},{"name":"tokenMinter","isMut":true,"isSigner":false},{"name":"eventAuthority","isMut":false,"isSigner":false},{"name":"program","isMut":false,"isSigner":false}],"args":[{"name":"params","type":{"defined":"PauseParams"}}]},{"name":"unpause","accounts":[{"name":"pauser","isMut":false,"isSigner":true},{"name":"tokenMinter","isMut":true,"isSigner":false},{"name":"eventAuthority","isMut":false,"isSigner":false},{"name":"program","isMut":false,"isSigner":false}],"args":[{"name":"params","type":{"defined":"UnpauseParams"}}]},{"name":"updatePauser","accounts":[{"name":"owner","isMut":false,"isSigner":true},{"name":"tokenMessenger","isMut":false,"isSigner":false},{"name":"tokenMinter","isMut":true,"isSigner":false},{"name":"eventAuthority","isMut":false,"isSigner":false},{"name":"program","isMut":false,"isSigner":false}],"args":[{"name":"params","type":{"defined":"UpdatePauserParams"}}]},{"name":"setMaxBurnAmountPerMessage","accounts":[{"name":"tokenController","isMut":false,"isSigner":true},{"name":"tokenMinter","isMut":false,"isSigner":false},{"name":"localToken","isMut":true,"isSigner":false},{"name":"eventAuthority","isMut":false,"isSigner":false},{"name":"program","isMut":false,"isSigner":false}],"args":[{"name":"params","type":{"defined":"SetMaxBurnAmountPerMessageParams"}}]},{"name":"addLocalToken","accounts":[{"name":"payer","isMut":true,"isSigner":true},{"name":"tokenController","isMut":false,"isSigner":true},{"name":"tokenMinter","isMut":false,"isSigner":false},{"name":"localToken","isMut":true,"isSigner":false},{"name":"custodyTokenAccount","isMut":true,"isSigner":false},{"name":"localTokenMint","isMut":false,"isSigner":false},{"name":"tokenProgram","isMut":false,"isSigner":false},{"name":"systemProgram","isMut":false,"isSigner":false},{"name":"eventAuthority","isMut":false,"isSigner":false},{"name":"program","isMut":false,"isSigner":false}],"args":[{"name":"params","type":{"defined":"AddLocalTokenParams"}}]},{"name":"removeLocalToken","accounts":[{"name":"payee","isMut":true,"isSigner":true},{"name":"tokenController","isMut":false,"isSigner":true},{"name":"tokenMinter","isMut":false,"isSigner":false},{"name":"localToken","isMut":true,"isSigner":false},{"name":"custodyTokenAccount","isMut":true,"isSigner":false},{"name":"tokenProgram","isMut":false,"isSigner":false},{"name":"eventAuthority","isMut":false,"isSigner":false},{"name":"program","isMut":false,"isSigner":false}],"args":[{"name":"params","type":{"defined":"RemoveLocalTokenParams"}}]},{"name":"linkTokenPair","accounts":[{"name":"payer","isMut":true,"isSigner":true},{"name":"tokenController","isMut":false,"isSigner":true},{"name":"tokenMinter","isMut":false,"isSigner":false},{"name":"tokenPair","isMut":true,"isSigner":false},{"name":"systemProgram","isMut":false,"isSigner":false},{"name":"eventAuthority","isMut":false,"isSigner":false},{"name":"program","isMut":false,"isSigner":false}],"args":[{"name":"params","type":{"defined":"LinkTokenPairParams"}}]},{"name":"unlinkTokenPair","accounts":[{"name":"payee","isMut":true,"isSigner":true},{"name":"tokenController","isMut":false,"isSigner":true},{"name":"tokenMinter","isMut":false,"isSigner":false},{"name":"tokenPair","isMut":true,"isSigner":false},{"name":"eventAuthority","isMut":false,"isSigner":false},{"name":"program","isMut":false,"isSigner":false}],"args":[{"name":"params","type":{"defined":"UninkTokenPairParams"}}]},{"name":"burnTokenCustody","accounts":[{"name":"payee","isMut":true,"isSigner":true},{"name":"tokenController","isMut":false,"isSigner":true},{"name":"tokenMinter","isMut":false,"isSigner":false},{"name":"localToken","isMut":false,"isSigner":false},{"name":"custodyTokenAccount","isMut":true,"isSigner":false},{"name":"custodyTokenMint","isMut":true,"isSigner":false},{"name":"tokenProgram","isMut":false,"isSigner":false},{"name":"eventAuthority","isMut":false,"isSigner":false},{"name":"program","isMut":false,"isSigner":false}],"args":[{"name":"params","type":{"defined":"BurnTokenCustodyParams"}}]}],"accounts":[{"name":"TokenMessenger","type":{"kind":"struct","fields":[{"name":"owner","type":"publicKey"},{"name":"pendingOwner","type":"publicKey"},{"name":"localMessageTransmitter","type":"publicKey"},{"name":"messageBodyVersion","type":"u32"},{"name":"authorityBump","type":"u8"}]}},{"name":"RemoteTokenMessenger","type":{"kind":"struct","fields":[{"name":"domain","type":"u32"},{"name":"tokenMessenger","type":"publicKey"}]}},{"name":"TokenMinter","type":{"kind":"struct","fields":[{"name":"tokenController","type":"publicKey"},{"name":"pauser","type":"publicKey"},{"name":"paused","type":"bool"},{"name":"bump","type":"u8"}]}},{"name":"TokenPair","type":{"kind":"struct","fields":[{"name":"remoteDomain","type":"u32"},{"name":"remoteToken","type":"publicKey"},{"name":"localToken","type":"publicKey"},{"name":"bump","type":"u8"}]}},{"name":"LocalToken","type":{"kind":"struct","fields":[{"name":"custody","type":"publicKey"},{"name":"mint","type":"publicKey"},{"name":"burnLimitPerMessage","type":"u64"},{"name":"messagesSent","type":"u64"},{"name":"messagesReceived","type":"u64"},{"name":"amountSent","type":"u128"},{"name":"amountReceived","type":"u128"},{"name":"bump","type":"u8"},{"name":"custodyBump","type":"u8"}]}}],"types":[{"name":"AcceptOwnershipParams","type":{"kind":"struct","fields":[]}},{"name":"AddRemoteTokenMessengerParams","type":{"kind":"struct","fields":[{"name":"domain","type":"u32"},{"name":"tokenMessenger","type":"publicKey"}]}},{"name":"DepositForBurnWithCallerParams","type":{"kind":"struct","fields":[{"name":"amount","type":"u64"},{"name":"destinationDomain","type":"u32"},{"name":"mintRecipient","type":"publicKey"},{"name":"destinationCaller","type":"publicKey"}]}},{"name":"DepositForBurnParams","type":{"kind":"struct","fields":[{"name":"amount","type":"u64"},{"name":"destinationDomain","type":"u32"},{"name":"mintRecipient","type":"publicKey"}]}},{"name":"HandleReceiveMessageParams","type":{"kind":"struct","fields":[{"name":"remoteDomain","type":"u32"},{"name":"sender","type":"publicKey"},{"name":"messageBody","type":"bytes"},{"name":"authorityBump","type":"u8"}]}},{"name":"InitializeParams","type":{"kind":"struct","fields":[{"name":"tokenController","type":"publicKey"},{"name":"localMessageTransmitter","type":"publicKey"},{"name":"messageBodyVersion","type":"u32"}]}},{"name":"RemoveRemoteTokenMessengerParams","type":{"kind":"struct","fields":[]}},{"name":"ReplaceDepositForBurnParams","type":{"kind":"struct","fields":[{"name":"originalMessage","type":"bytes"},{"name":"originalAttestation","type":"bytes"},{"name":"newDestinationCaller","type":"publicKey"},{"name":"newMintRecipient","type":"publicKey"}]}},{"name":"TransferOwnershipParams","type":{"kind":"struct","fields":[{"name":"newOwner","type":"publicKey"}]}},{"name":"AddLocalTokenParams","type":{"kind":"struct","fields":[]}},{"name":"BurnTokenCustodyParams","type":{"kind":"struct","fields":[{"name":"amount","type":"u64"}]}},{"name":"LinkTokenPairParams","type":{"kind":"struct","fields":[{"name":"localToken","type":"publicKey"},{"name":"remoteDomain","type":"u32"},{"name":"remoteToken","type":"publicKey"}]}},{"name":"PauseParams","type":{"kind":"struct","fields":[]}},{"name":"RemoveLocalTokenParams","type":{"kind":"struct","fields":[]}},{"name":"SetMaxBurnAmountPerMessageParams","type":{"kind":"struct","fields":[{"name":"burnLimitPerMessage","type":"u64"}]}},{"name":"SetTokenControllerParams","type":{"kind":"struct","fields":[{"name":"tokenController","type":"publicKey"}]}},{"name":"UninkTokenPairParams","type":{"kind":"struct","fields":[]}},{"name":"UnpauseParams","type":{"kind":"struct","fields":[]}},{"name":"UpdatePauserParams","type":{"kind":"struct","fields":[{"name":"newPauser","type":"publicKey"}]}},{"name":"TokenMinterError","type":{"kind":"enum","variants":[{"name":"InvalidAuthority"},{"name":"InvalidTokenMinterState"},{"name":"ProgramPaused"},{"name":"InvalidTokenPairState"},{"name":"InvalidLocalTokenState"},{"name":"InvalidPauser"},{"name":"InvalidTokenController"},{"name":"BurnAmountExceeded"},{"name":"InvalidAmount"}]}}],"events":[{"name":"OwnershipTransferStarted","fields":[{"name":"previousOwner","type":"publicKey","index":false},{"name":"newOwner","type":"publicKey","index":false}]},{"name":"OwnershipTransferred","fields":[{"name":"previousOwner","type":"publicKey","index":false},{"name":"newOwner","type":"publicKey","index":false}]},{"name":"DepositForBurn","fields":[{"name":"nonce","type":"u64","index":false},{"name":"burnToken","type":"publicKey","index":false},{"name":"amount","type":"u64","index":false},{"name":"depositor","type":"publicKey","index":false},{"name":"mintRecipient","type":"publicKey","index":false},{"name":"destinationDomain","type":"u32","index":false},{"name":"destinationTokenMessenger","type":"publicKey","index":false},{"name":"destinationCaller","type":"publicKey","index":false}]},{"name":"MintAndWithdraw","fields":[{"name":"mintRecipient","type":"publicKey","index":false},{"name":"amount","type":"u64","index":false},{"name":"mintToken","type":"publicKey","index":false}]},{"name":"RemoteTokenMessengerAdded","fields":[{"name":"domain","type":"u32","index":false},{"name":"tokenMessenger","type":"publicKey","index":false}]},{"name":"RemoteTokenMessengerRemoved","fields":[{"name":"domain","type":"u32","index":false},{"name":"tokenMessenger","type":"publicKey","index":false}]},{"name":"SetTokenController","fields":[{"name":"tokenController","type":"publicKey","index":false}]},{"name":"PauserChanged","fields":[{"name":"newAddress","type":"publicKey","index":false}]},{"name":"SetBurnLimitPerMessage","fields":[{"name":"token","type":"publicKey","index":false},{"name":"burnLimitPerMessage","type":"u64","index":false}]},{"name":"LocalTokenAdded","fields":[{"name":"custody","type":"publicKey","index":false},{"name":"mint","type":"publicKey","index":false}]},{"name":"LocalTokenRemoved","fields":[{"name":"custody","type":"publicKey","index":false},{"name":"mint","type":"publicKey","index":false}]},{"name":"TokenPairLinked","fields":[{"name":"localToken","type":"publicKey","index":false},{"name":"remoteDomain","type":"u32","index":false},{"name":"remoteToken","type":"publicKey","index":false}]},{"name":"TokenPairUnlinked","fields":[{"name":"localToken","type":"publicKey","index":false},{"name":"remoteDomain","type":"u32","index":false},{"name":"remoteToken","type":"publicKey","index":false}]},{"name":"Pause","fields":[]},{"name":"Unpause","fields":[]},{"name":"TokenCustodyBurned","fields":[{"name":"custodyTokenAccount","type":"publicKey","index":false},{"name":"amount","type":"u64","index":false}]}],"errors":[{"code":6000,"name":"InvalidAuthority","msg":"Invalid authority"},{"code":6001,"name":"InvalidTokenMessengerState","msg":"Invalid token messenger state"},{"code":6002,"name":"InvalidTokenMessenger","msg":"Invalid token messenger"},{"code":6003,"name":"InvalidOwner","msg":"Invalid owner"},{"code":6004,"name":"MalformedMessage","msg":"Malformed message"},{"code":6005,"name":"InvalidMessageBodyVersion","msg":"Invalid message body version"},{"code":6006,"name":"InvalidAmount","msg":"Invalid amount"},{"code":6007,"name":"InvalidDestinationDomain","msg":"Invalid destination domain"},{"code":6008,"name":"InvalidDestinationCaller","msg":"Invalid destination caller"},{"code":6009,"name":"InvalidMintRecipient","msg":"Invalid mint recipient"},{"code":6010,"name":"InvalidSender","msg":"Invalid sender"},{"code":6011,"name":"InvalidTokenPair","msg":"Invalid token pair"},{"code":6012,"name":"InvalidTokenMint","msg":"Invalid token mint"}]}'
        ),
        u = t(29557),
        m = t(82957).Buffer;
      let c = new s.Connection(u.KR),
        d = (e) => {
          let n = new a.Y7(c, e, {}),
            t = new s.PublicKey("CCTPmbSD7gX1bxKPAmg77w8oFzNFpaQiQUWD43TKaecd"),
            i = new a.$r(o, t, n),
            r = new s.PublicKey("CCTPiPYPc6AsJuwueEnWgSgucamXDZwBd53dQ11YiKX3");
          return {
            messageTransmitterProgram: i,
            tokenMessengerMinterProgram: new a.$r(l, r, n),
          };
        },
        p = (e, n, t) => {
          let { messageTransmitterProgram: a, tokenMessengerMinterProgram: s } =
              e,
            i = M("message_transmitter", a.programId),
            r = M("token_messenger", s.programId),
            o = M("token_minter", s.programId);
          return {
            messageTransmitterAccount: i,
            tokenMessengerAccount: r,
            tokenMinterAccount: o,
            localToken: M("local_token", s.programId, [n]),
            remoteTokenMessengerKey: M("remote_token_messenger", s.programId, [
              t.toString(),
            ]),
            authorityPda: M("sender_authority", s.programId),
          };
        },
        g = async (e, n, t, i, r) => {
          let { messageTransmitterProgram: o, tokenMessengerMinterProgram: l } =
              e,
            u = M("token_messenger", l.programId),
            m = M("message_transmitter", o.programId),
            c = M("token_minter", l.programId),
            d = M("local_token", l.programId, [n]),
            p = M("remote_token_messenger", l.programId, [i]),
            g = new s.PublicKey(h(t)),
            f = M("token_pair", l.programId, [i, g]),
            y = M("custody", l.programId, [n]),
            b = M("message_transmitter_authority", o.programId, [
              l.programId,
            ]).publicKey,
            k = M("__event_authority", l.programId);
          new s.Transaction();
          let S = await o.methods
            .getNoncePda({ nonce: new a.BN(r), sourceDomain: Number(i) })
            .accounts({ messageTransmitter: m.publicKey })
            .view();
          return {
            messageTransmitterAccount: m,
            tokenMessengerAccount: u,
            tokenMinterAccount: c,
            localToken: d,
            remoteTokenMessengerKey: p,
            remoteTokenKey: g,
            tokenPair: f,
            custodyTokenAccount: y,
            authorityPda: b,
            tokenMessengerEventAuthority: k,
            usedNonces: S,
          };
        },
        f = (e) => (0, i.Dv)(r.bs58.decode(e)),
        y = (e) => `0x000000000000000000000000${e.replace("0x", "")}`,
        h = (e) => m.from(e.replace("0x", ""), "hex"),
        M = function (e, n) {
          let t =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : null,
            i = [m.from(a.P6.bytes.utf8.encode(e))];
          if (t)
            for (let e of t)
              "string" == typeof e
                ? i.push(m.from(a.P6.bytes.utf8.encode(e)))
                : Array.isArray(e)
                ? i.push(m.from(e))
                : m.isBuffer(e)
                ? i.push(e)
                : i.push(e.toBuffer());
          let r = s.PublicKey.findProgramAddressSync(i, n);
          return { publicKey: r[0], bump: r[1] };
        },
        b = (e) => {
          let n = h(e).subarray(12, 20);
          return BigInt((0, i.Dv)(n)).toString();
        };
    },
    76985: function (e, n, t) {
      "use strict";
      t.d(n, {
        e: function () {
          return i;
        },
      });
      var a = t(46503);
      let s = {
        universalLink: "https://app.tonkeeper.com/ton-connect",
        bridgeUrl: "https://bridge.tonapi.io/bridge",
      };
      function i() {
        let [e] = (0, a.dG)(),
          n = (0, a.EK)(),
          t = (0, a.MW)();
        return {
          connected: !!n?.account.address,
          wallet: t,
          address: t,
          network: n?.account.chain ?? null,
          connectWallet: async () => {
            if (!e.connected)
              try {
                let n = await e.openModal();
                console.log("data", n);
              } catch (e) {
                console.log("error", e);
              }
            try {
              let n = await e.connector.restoreConnection();
              console.log("rc", n);
              let t = e.connector.connect(s);
              console.log("c", t);
            } catch (e) {
              console.log("error rc or c", e);
            }
          },
          disconnectWallet: () => {
            e?.disconnect();
          },
        };
      }
    },
    24836: function (e, n, t) {
      "use strict";
      function a(e) {
        return (
          e.slice(0, 2) + "000000000000000000000000" + e.slice(2, e.length)
        );
      }
      t.d(n, {
        x: function () {
          return B;
        },
        l: function () {
          return N;
        },
      });
      var s = t(64024),
        i = t(94585),
        r = t(68575),
        o = t(14326),
        l = t(29557),
        u = t(46815),
        m = t.n(u),
        c = t(55135),
        d = t(83526),
        p = t(1197),
        g = t(59369),
        f = t(77816),
        y = t(47895),
        h = t(43972),
        M = t(12639),
        b = t(82957).Buffer;
      new s.Connection(l.KR);
      let k = () => {
        let { sendTransaction: e, wallet: n } = (0, d.d)();
        return async (e) => {
          let {
            to: t,
            amount: i,
            publicKey: r,
            chainIdTo: o,
            destinationDomain: u,
          } = e;
          if ((console.log({ to: t, chainIdTo: o, amount: i }), r))
            try {
              let e;
              let {
                  messageTransmitterProgram: r,
                  tokenMessengerMinterProgram: o,
                } = (0, f.CV)(n),
                m = new s.PublicKey(y.H0),
                d = new s.PublicKey(
                  "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"
                ),
                k = await (0, h.Am)(d, n.publicKey);
              if (u == l.m5?.Noble?.metadata?.cctpDomain) {
                let n = (0, M.fromBech32)(t),
                  i = b.from(n.data).toString("hex");
                console.log("decodedBytes.length", n.data.length),
                  (e = new s.PublicKey((0, g.Pw)(a(`0x${i}`))));
              } else e = new s.PublicKey((0, g.Pw)((0, f.AW)(t)));
              let S = (0, f.CT)(
                  {
                    messageTransmitterProgram: r,
                    tokenMessengerMinterProgram: o,
                  },
                  m,
                  Number(u)
                ),
                v = s.Keypair.generate(),
                T = new c.BN(1e6 * Number(i));
              console.log("\n\nCalling depositForBurn with parameters: "),
                console.log("amount:", T.toString()),
                console.log("destinationDomain:", Number(u)),
                console.log("mintRecipient (hex):", e),
                console.log("mintRecipient (bytes52):", e.toString()),
                console.log(
                  "remoteTokenMessenger (hexa):",
                  (0, f.DN)(S.remoteTokenMessengerKey.publicKey.toString())
                ),
                console.log(
                  "remoteTokenMessenger (bytes52):",
                  S.remoteTokenMessengerKey.publicKey.toString()
                ),
                console.log("burnToken:", m.toString()),
                console.log("accounts", {
                  owner: n.publicKey,
                  eventRentPayer: n.publicKey,
                  senderAuthorityPda: S.authorityPda.publicKey,
                  burnTokenAccount: k,
                  messageTransmitter: S.messageTransmitterAccount.publicKey,
                  tokenMessenger: S.tokenMessengerAccount.publicKey,
                  remoteTokenMessenger: S.remoteTokenMessengerKey.publicKey,
                  tokenMinter: S.tokenMinterAccount.publicKey,
                  localToken: S.localToken.publicKey,
                  burnTokenMint: m,
                  messageTransmitterProgram: r.programId,
                  tokenMessengerMinterProgram: o.programId,
                  messageSentEventData: v.publicKey,
                  tokenProgram: p.H_,
                }),
                console.log("\n\n");
              let w = await o.methods
                .depositForBurn({
                  amount: T,
                  destinationDomain: Number(u),
                  mintRecipient: e,
                })
                .accounts({
                  owner: n.publicKey,
                  eventRentPayer: n.publicKey,
                  senderAuthorityPda: S.authorityPda.publicKey,
                  burnTokenAccount: k,
                  messageTransmitter: S.messageTransmitterAccount.publicKey,
                  tokenMessenger: S.tokenMessengerAccount.publicKey,
                  remoteTokenMessenger: S.remoteTokenMessengerKey.publicKey,
                  tokenMinter: S.tokenMinterAccount.publicKey,
                  localToken: S.localToken.publicKey,
                  burnTokenMint: m,
                  messageTransmitterProgram: r.programId,
                  tokenMessengerMinterProgram: o.programId,
                  messageSentEventData: v.publicKey,
                  tokenProgram: p.H_,
                })
                .signers([v])
                .rpc();
              return console.log(w, "TRANSACTION ID: "), w;
            } catch (e) {
              throw (console.log("Bridge SOL -> EVM failed ", e), e);
            }
        };
      };
      var S = t(75948),
        v = t(32308),
        T = t(5854),
        w = t(83066),
        P = t(26665),
        _ = t(82957).Buffer;
      let x = [["/circle.cctp.v1.MsgDepositForBurn", T.hV]],
        I = () => {
          let { address: e } = (0, S.Os)(),
            n = (0, r.I0)();
          return async (t) => {
            let { to: a, amount: i, destinationDomain: r } = t;
            if (window) {
              let t;
              await window.keplr.enable(l.m5.Noble.chainId);
              let u = window.getOfflineSigner(l.m5.Noble.chainId),
                m = await w.SigningStargateClient.connectWithSigner(
                  l.m5.Noble.rpcUrl,
                  u,
                  {
                    gasPrice: w.GasPrice.fromString("0.025uusdc"),
                    registry: new P.Registry(x),
                  }
                );
              if (r !== l.m5?.Solana?.metadata?.cctpDomain) {
                let e = a.replace(/^0x/, ""),
                  n = 64 - e.length,
                  s = "0".repeat(n) + e;
                t = new Uint8Array(_.from(s, "hex"));
              } else {
                let e = new s.PublicKey(
                    "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"
                  ),
                  n = new s.PublicKey(a);
                t = (await (0, h.Am)(e, n)).toBytes();
              }
              let c = {
                  typeUrl: "/circle.cctp.v1.MsgDepositForBurn",
                  value: {
                    from: e,
                    amount: String(1e6 * Number(i)),
                    destinationDomain: r,
                    mintRecipient: t,
                    burnToken: "uusdc",
                  },
                },
                d = await m.signAndBroadcast(
                  e,
                  [c],
                  { amount: [{ denom: "uusdc", amount: "0" }], gas: "200000" },
                  ""
                );
              console.log("result = ", d),
                console.log(
                  `Burned on Noble: https://mintscan.io/noble/tx/${d.transactionHash}`
                ),
                console.log(
                  `Minting on Ethereum to https://sepolia.etherscan.io/address/${a}`
                ),
                n(o.BridgeEntity.actions.setLoading("signed"));
            }
          };
        };
      var A = t(82957).Buffer;
      let C = (e) => (0, g.Dv)(v.bs58.decode(e)),
        B = [["/circle.cctp.v1.MsgDepositForBurn", T.hV]],
        N = () => {
          let e = (0, r.I0)(),
            { writeContract: n } = (0, i.useWriteContract)(),
            t = (0, r.v9)((e) => e.BridgeEntity.chains),
            { address: u } = (0, S.Os)(),
            c = (0, l.ET)(t.to),
            d = k(),
            p = I();
          return async (t) => {
            let {
                to: i,
                amount: r,
                publicKey: u,
                chainIdTo: g,
                chainIdFrom: f,
                contractAddress: y,
                tokenFrom: b,
                tokenMessenger: k,
                from: S,
                destinationDomain: v,
              } = t,
              T = [900, 901].includes(f);
            if (l.m5.Noble.chainId == f && window) {
              if (null == v) throw Error("Chain to is not a Circle chain");
              try {
                let n = p({ to: i, amount: r, destinationDomain: v });
                return e(o.BridgeEntity.actions.setLoading("signed")), n;
              } catch (e) {
                throw (
                  (console.error(e), Error("Error while approving transfer"))
                );
              }
            }
            if (T) {
              if (!u) throw Error("No public key provided");
              if (!v) throw Error("Chain to is not a Circle chain");
              try {
                let n = await d({
                  to: i,
                  amount: r,
                  publicKey: u,
                  chainIdTo: g,
                  tokenFrom: b,
                  destinationDomain: v,
                });
                return e(o.BridgeEntity.actions.setLoading("signed")), n;
              } catch (e) {
                throw (
                  (console.error("Error sol", e),
                  Error("Error while approving transfer"))
                );
              }
            } else {
              if (!k)
                throw Error("Token Messenger contract address is required");
              if (!c?.metadata?.cctpDomain && c?.metadata?.cctpDomain !== 0)
                throw Error("Chain to is not a Circle chain");
              try {
                return new Promise(async (t, l) => {
                  let u = await (async () => {
                    if (c?.metadata?.cctpDomain === 5) {
                      let e = new s.PublicKey(
                          "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"
                        ),
                        n = new s.PublicKey(i),
                        t = await (0, h.Am)(e, n);
                      return C(t.toString());
                    }
                    if (c?.metadata?.cctpDomain === 4) {
                      let e = (0, M.fromBech32)(i),
                        n = A.from(e.data).toString("hex");
                      return a(`0x${n}`);
                    }
                    return a(i);
                  })();
                  n(
                    {
                      abi: m(),
                      address: k,
                      functionName: "depositForBurn",
                      account: S,
                      args: [
                        BigInt(1e6 * Number(r)),
                        c?.metadata?.cctpDomain,
                        u,
                        y,
                      ],
                    },
                    {
                      onSuccess: (n) => {
                        console.log(n, "RESPONSE"),
                          e(o.BridgeEntity.actions.setLoading("signed")),
                          t(n);
                      },
                      onError: (e) => {
                        console.error(e, "ERROR"),
                          l(Error("Error while approving transfer"));
                      },
                    }
                  );
                });
              } catch (e) {
                throw (
                  (console.error(e, "ERROR14"),
                  Error("Error while approving transfer"))
                );
              }
            }
          };
        };
    },
    5854: function (e, n, t) {
      "use strict";
      t.d(n, {
        N4: function () {
          return u;
        },
        hV: function () {
          return o;
        },
      });
      var a = t(30736),
        s = t(55680),
        i = t.n(s);
      function r() {
        return {
          from: "",
          amount: "",
          destinationDomain: 0,
          mintRecipient: new Uint8Array(0),
          burnToken: "",
        };
      }
      let o = {
        encode(e) {
          let n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : i().Writer.create();
          return (
            "" !== e.from && n.uint32(10).string(e.from),
            "" !== e.amount && n.uint32(18).string(e.amount),
            0 !== e.destinationDomain &&
              n.uint32(24).uint32(e.destinationDomain),
            0 !== e.mintRecipient.length && n.uint32(34).bytes(e.mintRecipient),
            "" !== e.burnToken && n.uint32(42).string(e.burnToken),
            n
          );
        },
        decode(e, n) {
          let t = e instanceof i().Reader ? e : i().Reader.create(e),
            a = void 0 === n ? t.len : t.pos + n,
            s = r();
          for (; t.pos < a; ) {
            let e = t.uint32();
            switch (e >>> 3) {
              case 1:
                if (10 !== e) break;
                s.from = t.string();
                continue;
              case 2:
                if (18 !== e) break;
                s.amount = t.string();
                continue;
              case 3:
                if (24 !== e) break;
                s.destinationDomain = t.uint32();
                continue;
              case 4:
                if (34 !== e) break;
                s.mintRecipient = t.bytes();
                continue;
              case 5:
                if (42 !== e) break;
                s.burnToken = t.string();
                continue;
            }
            if ((7 & e) == 4 || 0 === e) break;
            t.skipType(7 & e);
          }
          return s;
        },
        fromJSON: (e) => ({
          from: d(e.from) ? globalThis.String(e.from) : "",
          amount: d(e.amount) ? globalThis.String(e.amount) : "",
          destinationDomain: d(e.destinationDomain)
            ? globalThis.Number(e.destinationDomain)
            : 0,
          mintRecipient: d(e.mintRecipient)
            ? m(e.mintRecipient)
            : new Uint8Array(0),
          burnToken: d(e.burnToken) ? globalThis.String(e.burnToken) : "",
        }),
        toJSON(e) {
          let n = {};
          return (
            "" !== e.from && (n.from = e.from),
            "" !== e.amount && (n.amount = e.amount),
            0 !== e.destinationDomain &&
              (n.destinationDomain = Math.round(e.destinationDomain)),
            0 !== e.mintRecipient.length &&
              (n.mintRecipient = c(e.mintRecipient)),
            "" !== e.burnToken && (n.burnToken = e.burnToken),
            n
          );
        },
        create: (e) => o.fromPartial(e ?? {}),
        fromPartial(e) {
          let n = r();
          return (
            (n.from = e.from ?? ""),
            (n.amount = e.amount ?? ""),
            (n.destinationDomain = e.destinationDomain ?? 0),
            (n.mintRecipient = e.mintRecipient ?? new Uint8Array(0)),
            (n.burnToken = e.burnToken ?? ""),
            n
          );
        },
      };
      function l() {
        return {
          from: "",
          message: new Uint8Array(0),
          attestation: new Uint8Array(0),
        };
      }
      let u = {
        encode(e) {
          let n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : i().Writer.create();
          return (
            "" !== e.from && n.uint32(10).string(e.from),
            0 !== e.message.length && n.uint32(18).bytes(e.message),
            0 !== e.attestation.length && n.uint32(26).bytes(e.attestation),
            n
          );
        },
        decode(e, n) {
          let t = e instanceof i().Reader ? e : i().Reader.create(e),
            a = void 0 === n ? t.len : t.pos + n,
            s = l();
          for (; t.pos < a; ) {
            let e = t.uint32();
            switch (e >>> 3) {
              case 1:
                if (10 !== e) break;
                s.from = t.string();
                continue;
              case 2:
                if (18 !== e) break;
                s.message = t.bytes();
                continue;
              case 3:
                if (26 !== e) break;
                s.attestation = t.bytes();
                continue;
            }
            if ((7 & e) == 4 || 0 === e) break;
            t.skipType(7 & e);
          }
          return s;
        },
        fromJSON: (e) => ({
          from: d(e.from) ? globalThis.String(e.from) : "",
          message: d(e.message) ? m(e.message) : new Uint8Array(0),
          attestation: d(e.attestation) ? m(e.attestation) : new Uint8Array(0),
        }),
        toJSON(e) {
          let n = {};
          return (
            "" !== e.from && (n.from = e.from),
            0 !== e.message.length && (n.message = c(e.message)),
            0 !== e.attestation.length && (n.attestation = c(e.attestation)),
            n
          );
        },
        create: (e) => u.fromPartial(e ?? {}),
        fromPartial(e) {
          let n = l();
          return (
            (n.from = e.from ?? ""),
            (n.message = e.message ?? new Uint8Array(0)),
            (n.attestation = e.attestation ?? new Uint8Array(0)),
            n
          );
        },
      };
      function m(e) {
        if (globalThis.Buffer)
          return Uint8Array.from(globalThis.Buffer.from(e, "base64"));
        {
          let n = globalThis.atob(e),
            t = new Uint8Array(n.length);
          for (let e = 0; e < n.length; ++e) t[e] = n.charCodeAt(e);
          return t;
        }
      }
      function c(e) {
        if (globalThis.Buffer)
          return globalThis.Buffer.from(e).toString("base64");
        {
          let n = [];
          return (
            e.forEach((e) => {
              n.push(globalThis.String.fromCharCode(e));
            }),
            globalThis.btoa(n.join(""))
          );
        }
      }
      function d(e) {
        return null != e;
      }
      i().util.Long !== a.Z && ((i().util.Long = a.Z), i().configure());
    },
    68176: function (e, n, t) {
      "use strict";
      t.d(n, {
        z: function () {
          return u;
        },
      });
      var a = t(57437),
        s = t(36760),
        i = t.n(s);
      t(2265);
      let r = (e) => {
        let { className: n } = e;
        return (0, a.jsx)("svg", {
          className: n,
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 19 18",
          children: (0, a.jsx)("path", {
            fill: "currentColor",
            fillRule: "evenodd",
            d: "M2.78 8.756c0 3.653 2.649 6.142 5.623 6.656a.625.625 0 1 1-.213 1.233c-3.494-.605-6.66-3.55-6.66-7.89 0-1.843.838-3.292 1.818-4.395.702-.79 1.504-1.43 2.15-1.922h-1.96a.6.6 0 0 1 0-1.2h3.6a.6.6 0 0 1 .6.6v3.6a.6.6 0 0 1-1.2 0V3.221l-.005.004c-.686.517-1.524 1.15-2.25 1.966-.857.965-1.503 2.13-1.503 3.565Zm13.334.488c0-3.614-2.593-6.088-5.529-6.64a.625.625 0 0 1 .231-1.228c3.45.647 6.548 3.576 6.548 7.868 0 1.844-.838 3.294-1.818 4.396-.702.79-1.504 1.43-2.15 1.922h1.96a.6.6 0 1 1 0 1.2h-3.6a.6.6 0 0 1-.6-.6v-3.6a.6.6 0 1 1 1.2 0v2.217l.005-.004c.686-.517 1.524-1.149 2.25-1.966.857-.965 1.503-2.13 1.503-3.565Z",
            clipRule: "evenodd",
          }),
        });
      };
      var o = t(81543),
        l = t.n(o);
      let u = (e) => {
        let {
          onClick: n,
          className: t,
          type: s = "secondary",
          disabled: o = !1,
          children: u,
          variant: m = "contained",
          styleFullWidth: c,
          stylesLessCurved: d,
          styleHigher: p,
          buttonType: g = "button",
          loadingText: f,
          loading: y,
        } = e;
        return (0, a.jsx)("button", {
          className: i()(
            l().button,
            {
              [l().primary]: "primary" === s,
              [l().secondary]: "secondary" === s,
              [l().info]: "info" === s,
              [l().outlined]: "outlined" === m,
              [l().contained]: "contained" === m,
              [l().fullWidth]: c,
              [l().lessCurved]: d,
              [l().higher]: p,
              [l().loading]: y,
            },
            t
          ),
          onClick: n,
          type: g,
          "data-variant": m,
          disabled: o,
          children: y
            ? (0, a.jsxs)("div", {
                className: l().loader,
                children: [
                  (0, a.jsx)(r, { className: l().loader__icon }),
                  `${f || "Pending"}...`,
                ],
              })
            : u,
        });
      };
    },
    55358: function (e, n, t) {
      "use strict";
      t.d(n, {
        T: function () {
          return a;
        },
      });
      let a = function (e) {
        let n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 8,
          t =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4;
        return e ? `${e.slice(0, n)}...${e.slice(-1 * t)}` : "";
      };
      t(94594);
    },
    57552: function (e, n, t) {
      "use strict";
      t.d(n, {
        Ro: function () {
          return c;
        },
        T6: function () {
          return s;
        },
        gE: function () {
          return u;
        },
        k8: function () {
          return m;
        },
        nE: function () {
          return i;
        },
      });
      var a = t(6874);
      let s = {
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
        i = {
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
        r = (e) =>
          ({
            33033: "transactions",
            41: "transaction",
            728126428: "#/transaction",
          }[e] || "tx"),
        o = (e) =>
          ({ 33033: "address", 41: "account", 728126428: "#/address" }[e] ||
          "address"),
        l = (e) =>
          ({
            33033: "blocks",
            41: "block",
            59901: "batch",
            728126428: "#/block",
          }[e] || "block"),
        u = (e, n, t) => {
          let i;
          (i = e), (0, a.O)(e) && (i = e.slice(2)), (i = i.toUpperCase());
          let u = { tx: r(n), address: o(n), block: l(n) };
          return `${s[n]}/${u[t]}/${e}`;
        },
        m = (e, n, t) => {
          void 0 !== t
            ? window.open(u(e, Number(t), n), "_blank")
            : window.open(`#`, "_blank");
        },
        c = (e) => {
          window.open(`https://tonscan.org/tx/${e}`, "_blank");
        };
    },
    6874: function (e, n, t) {
      "use strict";
      t.d(n, {
        O: function () {
          return a;
        },
      });
      let a = (e) => e.startsWith("0x") || e.startsWith("0X");
    },
    47374: function (e, n, t) {
      "use strict";
      t.d(n, {
        h: function () {
          return s;
        },
      });
      var a = t(78952);
      let s = window?.phantom?.solana?.isPhantom && (0, a.t)();
    },
    56420: function (e, n, t) {
      "use strict";
      t.d(n, {
        r: function () {
          return d;
        },
      });
      var a = t(38217),
        s = t(91167),
        i = t(33730),
        r = t(29557),
        o = t(71282),
        l = t(2265),
        u = t(54484),
        m = t(50249);
      let c = {
          wnglBalance: "0.00",
          nglBalance: "0.00",
          totalBalance: "0.00",
          formatedWnglBalance: "0.00",
          formatedNglBalance: "0.00",
          formatedTotalBalance: "0.00",
        },
        d = (e) => {
          let { address: n } = (0, i.Z)(),
            [t, d] = (0, l.useState)(c),
            { data: p } = (0, a.useWalletClient)({ chainId: e }),
            { data: g } = (0, s.useBalance)({ chainId: e, address: n }),
            f = (0, l.useCallback)(async () => {
              let n = { ...c };
              if (!p || !g || !e) return n;
              try {
                let [t, a] = await Promise.all([
                  m.Y.getTokenBalance(
                    r.m5[r.ZP.chainName].contractAddress,
                    p,
                    e
                  ),
                  Promise.resolve(g.value),
                ]);
                (n.wnglBalance = (0, o.d)(t || 0n)),
                  (n.nglBalance = (0, o.d)(a)),
                  (n.totalBalance = (0, o.d)(a + (t || 0n))),
                  (n.formatedWnglBalance = (0, u.t)(+n.wnglBalance, 2)),
                  (n.formatedNglBalance = (0, u.t)(+n.nglBalance, 2)),
                  (n.formatedTotalBalance = (0, u.t)(+n.totalBalance, 2));
              } catch (e) {
                console.error("Failed to fetch balances:", e);
              }
              return n;
            }, [e, g, p]),
            y = (0, l.useCallback)(() => {
              n ? f().then((e) => d(e)) : d(c);
            }, [f, n]);
          return ((0, l.useEffect)(() => {
            y();
          }, [f, n, y]),
          e != r.ZP.chainId)
            ? { balance: c, refreshBalance: y }
            : { balance: t, refreshBalance: y };
        };
    },
    37060: function (e, n, t) {
      "use strict";
      t.d(n, {
        R: function () {
          return o;
        },
      });
      var a = t(2265),
        s = t(47895),
        i = t(68575),
        r = t(91960);
      let o = (e, n) => {
        let t = (0, r.TL)(),
          {
            asyncActions: {
              Coin: { getPrice: o },
            },
          } = (0, r.oR)((e) => ({ CoinEntity: e.CoinEntity }));
        (0, a.useEffect)(() => {
          e && !n && t(o(s.wu[e]));
        }, [t, o, e, n]);
        let l = (0, i.v9)(
          (n) => n.CoinEntity.coins[s.wu[e || ""] || ""]?.price
        );
        return "usdc" === e ? 1 : l;
      };
    },
    66972: function (e, n, t) {
      "use strict";
      t.d(n, {
        H: function () {
          return r;
        },
      });
      var a = t(75948),
        s = t(2265),
        i = t(8448);
      let r = () => {
        let e = (0, a.Os)(),
          n = (0, i.ZQ)(),
          [t, r] = (0, s.useState)(e.connected);
        return (
          (0, s.useEffect)(() => {
            r(e.connected);
          }, [e.connected]),
          {
            connectWallet: async () => {
              if (!e.connected)
                try {
                  await n.connect();
                } catch (e) {
                  console.error(e);
                }
            },
            disconnectWallet: async () => {
              e.connected && (await n.disconnect());
            },
            connected: t,
            connecting: n?.connecting,
            wallet: e,
            address: e.address || "",
          }
        );
      };
    },
    70755: function (e, n, t) {
      "use strict";
      t.d(n, {
        Y: function () {
          return u;
        },
      });
      var a = t(2265),
        s = t(68575),
        i = t(91960),
        r = t(43812),
        o = t(54654),
        l = t(99140);
      let u = () => {
        let e = (0, r.O)(),
          [n, t] = (0, a.useState)(e.connected),
          {
            actions: {
              Bridge: { setSolanaWasManuallyDisconnected: u },
            },
          } = (0, i.oR)((e) => ({ Bridge: e.BridgeEntity })),
          m = (0, s.I0)();
        return (
          (0, a.useEffect)(() => {
            t(e.connected),
              e.connected && e.address && o.O.setAddress(e.address);
          }, [e.address, e.connected]),
          {
            connectWallet: async () => {
              if (!e.connected)
                try {
                  e.select(l.MK), await e.wallet?.adapter.connect();
                } catch (e) {
                  console.error(e);
                }
            },
            disconnectWallet: async () => {
              e.connected && (await e.wallet?.adapter.disconnect(), m(u(!0)));
            },
            connected: n,
            connecting: e?.connecting,
            wallet: e,
            sendTransaction: o.O.trx.sendTransaction,
            address: e.address || "",
            adapterName: l.MK,
          }
        );
      };
    },
    24461: function (e, n, t) {
      "use strict";
      t.d(n, {
        JB: function () {
          return T;
        },
        Xq: function () {
          return w;
        },
        dc: function () {
          return P;
        },
      });
      var a = t(57437),
        s = t(96039),
        i = t.n(s),
        r = t(2265);
      let o = () => `${Date.now()}-${Math.random().toString(36).slice(2, 11)}`;
      var l = t(36760),
        u = t.n(l),
        m = t(38273),
        c = t.n(m),
        d = t(27648),
        p = t(33145),
        g = t(29557),
        f = t(55358),
        y = t(57552),
        h = t(16629),
        M = t(29853),
        b = { src: "/_next/static/media/external_link_error.ed23df95.svg" };
      let k = Object.values(g.m5),
        S = (0, r.memo)((e) => {
          let {
            id: n,
            type: t,
            link: s,
            title: i,
            message: r,
            transactions: o,
            onRemove: l,
          } = e;
          return (0, a.jsxs)("div", {
            className: u()(c().notification, c()[`notification_${t}`]),
            children: [
              (0, a.jsxs)("div", {
                className: c().header,
                children: [
                  (0, a.jsx)(p.default, {
                    width: 16,
                    height: 16,
                    src: "/_next/static/media/info-icon.63a8c7d3.svg",
                    alt: "Info Icon",
                  }),
                  (0, a.jsx)("h4", { className: c().title, children: i }),
                  (0, a.jsx)("button", {
                    className: c().closeButton,
                    onClick: () => l(n),
                    children: (0, a.jsx)(p.default, {
                      width: 16,
                      height: 16,
                      src: h.Z.src,
                      alt: "Close Icon",
                    }),
                  }),
                ],
              }),
              (0, a.jsxs)("div", {
                className: c().body,
                children: [
                  (0, a.jsx)("p", { className: c().message, children: r }),
                  o &&
                    o.length > 0 &&
                    (0, a.jsx)("div", {
                      className: c().transactionsList,
                      children: o.map((e, n) => {
                        let { chainId: t, status: s, txHash: i } = e,
                          r = k.find((e) => e.chainId === t),
                          o = `${y.T6[t]}/tx/${i}`;
                        return r
                          ? (0, a.jsxs)(
                              "div",
                              {
                                className: c().transactionItem,
                                children: [
                                  (0, a.jsxs)("div", {
                                    className: c().transactionChain,
                                    children: [
                                      (0, a.jsx)(p.default, {
                                        src: r.icon.src,
                                        width: 16,
                                        height: 16,
                                        alt: r.name,
                                      }),
                                      (0, a.jsx)("p", {
                                        children: r.nativeCurrency,
                                      }),
                                    ],
                                  }),
                                  (0, a.jsxs)("div", {
                                    className: u()(
                                      c().transactionHash,
                                      c()[`transactionHash_${s}`]
                                    ),
                                    children: [
                                      (0, a.jsx)("p", { children: "Tx Hash" }),
                                      (0, a.jsxs)("a", {
                                        href: o,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        children: [
                                          (0, a.jsx)("p", {
                                            children: (0, f.T)(i),
                                          }),
                                          (0, a.jsx)(p.default, {
                                            width: 16,
                                            height: 16,
                                            src:
                                              "success" === s ? M.Z.src : b.src,
                                            alt: "Link Icon",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              },
                              n
                            )
                          : null;
                      }),
                    }),
                  s &&
                    (0, a.jsx)(d.default, {
                      href: s,
                      target: "_blank",
                      className: c().link,
                      children: (0, a.jsx)(p.default, {
                        width: 20,
                        height: 20,
                        src: "error" === t ? b.src : M.Z.src,
                        alt: "External Link",
                      }),
                    }),
                ],
              }),
            ],
          });
        });
      S.displayName = "Notification";
      let v = (0, r.createContext)({
          addNotification: (e, n) => "",
          updateNotification: (e, n) => {},
        }),
        T = (0, r.memo)((e) => {
          let { children: n } = e,
            [t, s] = (0, r.useState)([]),
            l = (0, r.useCallback)((e) => {
              s((n) => n.filter((n) => n.id !== e));
            }, []),
            u = (0, r.useCallback)(
              (e, n) => {
                let t = o(),
                  a = { ...e, id: t };
                return (
                  s((e) => [...e, a]),
                  (n || "error" === e.type) &&
                    setTimeout(() => {
                      l(t);
                    }, n ?? 1e4),
                  t
                );
              },
              [l]
            ),
            m = (0, r.useCallback)(
              (e, n) => {
                s((t) =>
                  t.find((n) => n.id === e)
                    ? t.map((t) => (t.id === e ? { ...t, ...n } : t))
                    : [...t, { id: e, ...n }]
                ),
                  setTimeout(() => {
                    l(e);
                  }, 1e4);
              },
              [l]
            );
          return (0, a.jsxs)(v.Provider, {
            value: { addNotification: u, updateNotification: m },
            children: [
              n,
              (0, a.jsx)("div", {
                className: i().notifications,
                children: t.map((e, n) =>
                  (0, a.jsx)(S, { ...e, onRemove: l }, n)
                ),
              }),
            ],
          });
        }),
        w = () => (0, r.useContext)(v).addNotification,
        P = () => (0, r.useContext)(v).updateNotification;
      T.displayName = "NotificationProvider";
    },
    80361: function (e, n, t) {
      "use strict";
      t.d(n, {
        XJ: function () {
          return l;
        },
        vU: function () {
          return u;
        },
      });
      var a = t(57437),
        s = t(2265),
        i = t(99376),
        r = t(15150);
      let o = (0, s.createContext)({
          showBackButton: !1,
          goToPage: () => {},
          goBackPage: () => {},
          goToState: () => {},
          goBackState: () => {},
          content: null,
        }),
        l = (0, s.memo)((e) => {
          let { children: n } = e,
            [t, l] = (0, s.useState)(!1),
            [u, m] = (0, s.useState)("/"),
            [c, d] = (0, s.useState)(null),
            { push: p } = (0, i.useRouter)(),
            g = (0, i.usePathname)(),
            f = () => {
              l(!1), d(null);
            };
          return (
            (0, s.useEffect)(() => {
              "Bridge" !== c || r.Is || f();
            }, [c, g]),
            (0, a.jsx)(o.Provider, {
              value: {
                showBackButton: t,
                goToPage: (e, n) => {
                  m(g), l(!0), d(n), p(e);
                },
                goBackPage: () => {
                  f(), p(u);
                },
                goToState: (e) => {
                  d(e), l(!0);
                },
                goBackState: () => {
                  f();
                },
                content: c,
              },
              children: n,
            })
          );
        }),
        u = () => (0, s.useContext)(o);
      l.displayName = "ReturnBackProvider";
    },
    46454: function (e, n, t) {
      "use strict";
      t.d(n, {
        Z_: function () {
          return c;
        },
        vP: function () {
          return m;
        },
      });
      var a = t(57437),
        s = t(2265),
        i = t(64707),
        r = t(91167),
        o = t(90376),
        l = t(15150);
      let u = s.createContext({ balance: void 0 }),
        m = (e) => {
          let { children: n } = e,
            { address: t } = (0, i.useAccount)(),
            { data: m, refetch: c } = (0, r.useBalance)({ address: t });
          (0, s.useEffect)(() => {
            let e = setInterval(() => {
              (0, o.o)() && c();
            }, l.g_);
            return () => clearInterval(e);
          }, [c]);
          let d = (0, s.useMemo)(() => ({ balance: m?.formatted }), [m]);
          return (0, a.jsx)(u.Provider, { value: d, children: n });
        },
        c = () => (0, s.useContext)(u);
    },
    25864: function (e, n, t) {
      "use strict";
      t.d(n, {
        T: function () {
          return s;
        },
      });
      var a = t(57437);
      let s = (0, t(2265).memo)((e) => {
        let { type: n, ...t } = e;
        return "thin" === n
          ? (0, a.jsx)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 20 20",
              children: (0, a.jsx)("path", {
                stroke: "currentColor",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M15 5 5 15M5 5l10 10",
              }),
            })
          : "new" === n
          ? (0, a.jsx)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              width: "15",
              height: "15",
              fill: "none",
              viewBox: "0 0 15 15",
              children: (0, a.jsx)("path", {
                fill: "currentColor",
                fillRule: "evenodd",
                d: "M.945.16a.556.556 0 0 0-.78.792l6.601 6.497-6.603 6.603a.556.556 0 0 0 .785.786l6.61-6.61 6.497 6.397a.556.556 0 0 0 .78-.792l-6.491-6.39L14.838.948a.556.556 0 0 0-.786-.785l-6.5 6.5L.945.16Z",
                clipRule: "evenodd",
              }),
            })
          : (0, a.jsxs)("svg", {
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ...t,
              children: [
                (0, a.jsx)("path", {
                  d: "M18 6L6 18",
                  stroke: "currentColor",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, a.jsx)("path", {
                  d: "M6 6L18 18",
                  stroke: "currentColor",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
              ],
            });
      });
      s.displayName = "CloseIcon";
    },
    73513: function (e, n, t) {
      "use strict";
      t.d(n, {
        T: function () {
          return s;
        },
      });
      var a = t(57437);
      let s = (0, t(2265).memo)((e) => {
        let { ...n } = e;
        return (0, a.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "10",
          height: "12",
          viewBox: "0 0 10 12",
          fill: "none",
          ...n,
          children: (0, a.jsx)("path", {
            d: "M3.28369 9.70776C2.98901 9.70776 2.73958 9.60568 2.53542 9.40151C2.33125 9.19735 2.22917 8.94792 2.22917 8.65324V2.01228C2.22917 1.7176 2.33125 1.46818 2.53542 1.26401C2.73958 1.05985 2.98901 0.957764 3.28369 0.957764H8.17465C8.46933 0.957764 8.71875 1.05985 8.92292 1.26401C9.12708 1.46818 9.22917 1.7176 9.22917 2.01228V8.65324C9.22917 8.94792 9.12708 9.19735 8.92292 9.40151C8.71875 9.60568 8.46933 9.70776 8.17465 9.70776H3.28369ZM3.28369 8.83276H8.17465C8.21956 8.83276 8.26069 8.81405 8.29802 8.77662C8.33545 8.73928 8.35417 8.69816 8.35417 8.65324V2.01228C8.35417 1.96737 8.33545 1.92624 8.29802 1.88891C8.26069 1.85148 8.21956 1.83276 8.17465 1.83276H3.28369C3.23877 1.83276 3.19765 1.85148 3.16031 1.88891C3.12288 1.92624 3.10417 1.96737 3.10417 2.01228V8.65324C3.10417 8.69816 3.12288 8.73928 3.16031 8.77662C3.19765 8.81405 3.23877 8.83276 3.28369 8.83276ZM1.24202 11.7494C0.94734 11.7494 0.697917 11.6473 0.49375 11.4432C0.289583 11.239 0.1875 10.9896 0.1875 10.6949V3.17895H1.0625V10.6949C1.0625 10.7398 1.08122 10.781 1.11865 10.8183C1.15598 10.8557 1.1971 10.8744 1.24202 10.8744H7.00798V11.7494H1.24202Z",
            fill: "#9DA2B3",
          }),
        });
      });
      s.displayName = "CopyIcon";
    },
    9433: function (e, n, t) {
      "use strict";
      t.d(n, {
        GeneralInfo: function () {
          return y;
        },
      });
      var a = t(57437),
        s = t(28664),
        i = t.n(s),
        r = t(2265),
        o = t(36760),
        l = t.n(o),
        u = t(33145),
        m = t(29194),
        c = t(91960),
        d = t(3562),
        p = t(29557),
        g = t(34085);
      let f = (e, n) => {
          let t = e.toString();
          return t.includes(".") && t.length - t.indexOf(".") > n + 1
            ? parseFloat(t.slice(0, t.indexOf(".") + n + 1))
            : e;
        },
        y = r.memo((e) => {
          let { infoBlocks: n, className: t } = e,
            s = (0, c.TL)(),
            {
              store: {
                TokenomicsEntity: { bondedTokens: o, inflation: y },
                CoinEntity: {
                  coins: {
                    entangle: { marketCap: h, totalSupply: M },
                  },
                },
              },
              asyncActions: {
                Tokenomics: { getBondedTokens: b },
                Coin: { getMarketCap: k, getSupply: S },
              },
            } = (0, c.oR)((e) => ({
              TokenomicsEntity: e.TokenomicsEntity,
              CoinEntity: e.CoinEntity,
            }));
          (0, r.useEffect)(() => {
            s(b()), s(S("entangle")), s(k("entangle"));
          }, []);
          let v = (0, m.q_)({
              from: {
                marketCap: 0,
                inflation: 0,
                APR: 0,
                supply: 0,
                totalStaked: 0,
              },
              config: { duration: 500 },
            }),
            T = (M * y) / Number(o);
          (0, r.useEffect)(() => {
            v.marketCap.start(h),
              v.inflation.start(f(y, 2)),
              v.APR.start(f(T, 2)),
              v.supply.start(f(M, 2)),
              v.totalStaked.start(f(Number(o), 2));
          }, [
            v.marketCap,
            v.inflation,
            v.APR,
            v.supply,
            v.totalStaked,
            h,
            y,
            T,
            M,
            o,
          ]);
          let w = f(y, 2),
            P = f(T, 2),
            _ = f(M, 2),
            x = f(Number(o), 2),
            I = (0, r.useMemo)(() => {
              let e = (0, a.jsxs)("div", {
                className: i().supply,
                children: [
                  (0, a.jsx)(u.default, {
                    className: "w-6 h-6",
                    src: (0, d.Sv)(p.ZP.chainId.toString()),
                    width: 24,
                    height: 24,
                    alt: `${g.f[p.ZP.chainId]} Icon`,
                  }),
                  (0, a.jsxs)("span", {
                    children: [
                      (0, a.jsx)(m.q.span, {
                        children: v.supply.to((e) =>
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
                  value: (0, a.jsxs)(a.Fragment, {
                    children: [
                      "$",
                      (0, a.jsx)(m.q.span, {
                        children: v.marketCap.to((e) =>
                          e.toLocaleString("en", { maximumFractionDigits: 0 })
                        ),
                      }),
                    ],
                  }),
                },
                {
                  title: "Inflation",
                  value: (0, a.jsxs)(a.Fragment, {
                    children: [
                      (0, a.jsx)(m.q.span, {
                        children: v.inflation.to((e) =>
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
                  value: (0, a.jsxs)(a.Fragment, {
                    children: [
                      (0, a.jsx)(m.q.span, {
                        children: v.APR.to((e) =>
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
                  value: (0, a.jsx)(m.q.span, {
                    children: v.totalStaked.to((e) =>
                      e.toLocaleString("en", {
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 2,
                      })
                    ),
                  }),
                },
              ];
            }, [P, w, _, x, h]);
          return (0, a.jsx)("div", {
            className: l()(i().generalInfo, t),
            children: (n || I).map((e, n) => {
              let { title: t, value: s } = e;
              return (0, a.jsxs)(
                "div",
                {
                  className: i().infoBlock,
                  children: [
                    (0, a.jsx)("span", {
                      className: i().infoBlockTitle,
                      children: t,
                    }),
                    (0, a.jsx)("span", {
                      className: i().infoBlockValue,
                      children: s,
                    }),
                  ],
                },
                n
              );
            }),
          });
        });
      y.displayName = "GeneralInfo";
    },
    72570: function (e, n, t) {
      "use strict";
      t.d(n, {
        I: function () {
          return o;
        },
      });
      var a = t(57437),
        s = t(2265),
        i = t(29700),
        r = t.n(i);
      let o = (0, s.memo)((e) => {
        let { address: n, diameter: t = 40, className: i = "" } = e,
          o = (0, s.useRef)(null);
        return (
          (0, s.useEffect)(() => {
            if (o.current && n) {
              let e = parseInt(n.slice(2, 10), 16),
                a = r()(t, e);
              (o.current.innerHTML = ""), o.current.appendChild(a);
            }
          }, [n, t]),
          (0, a.jsx)("div", {
            ref: o,
            style: { width: t, height: t },
            className: i,
          })
        );
      });
      o.displayName = "JazzIcon";
    },
    93946: function (e, n, t) {
      "use strict";
      t.d(n, {
        ModalContainer: function () {
          return m;
        },
      });
      var a = t(57437),
        s = t(4618),
        i = t.n(s),
        r = t(2265),
        o = t(36760),
        l = t.n(o),
        u = t(25864);
      let m = (e) => {
        let {
          enable: n = !1,
          title: t,
          children: s,
          isCloseIcon: o,
          className: m,
          modalClassName: c,
          titleClassName: d,
          titleTextClassName: p,
          onClose: g,
          styleBasic: f,
          closeIconClassName: y,
          closeIconThin: h,
        } = e;
        return ((0, r.useEffect)(() => {
          if ("undefined" != typeof document && void 0 !== document.body && n)
            return (
              (document.body.className = i().bodyOverflowHidden),
              () => {
                document.body.className = "";
              }
            );
        }, []),
        n)
          ? (0, a.jsx)("div", {
              className: l()(i().modalContainer, m, {
                [i().modalContainerBasic]: f,
              }),
              onClick: g,
              children: (0, a.jsxs)("div", {
                className: l()(i().modal, c, { [i().modalBasic]: f }),
                onClick: (e) => {
                  e.stopPropagation();
                },
                children: [
                  t &&
                    (0, a.jsxs)("div", {
                      className: l()(i().modalHeader, d),
                      children: [
                        (0, a.jsx)("div", {
                          className: l()(i().title, p, { [i().titleBasic]: f }),
                          children: t,
                        }),
                        o &&
                          (0, a.jsx)("button", {
                            className: l()(
                              i().closeIcon,
                              { [i().closeIconBasic]: f },
                              y
                            ),
                            onClick: g,
                            children: (0, a.jsx)(u.T, {
                              type: h ? "thin" : f ? "new" : "base",
                            }),
                          }),
                      ],
                    }),
                  f && (0, a.jsx)("div", { className: i().divider }),
                  s,
                ],
              }),
            })
          : null;
      };
    },
    61411: function (e, n, t) {
      "use strict";
      t.d(n, {
        PathTabs: function () {
          return d;
        },
      });
      var a = t(57437),
        s = t(36760),
        i = t.n(s),
        r = t(48303),
        o = t.n(r),
        l = t(99376),
        u = t(2265),
        m = t(27648);
      let c = (e, n) => e.find((e) => e.path === n) || e[0],
        d = (e) => {
          let { tabs: n } = e,
            t = (0, l.usePathname)(),
            [s, r] = (0, u.useState)(c(n, t)),
            d = (e) => r(e);
          return (0, a.jsx)("ul", {
            className: o().tabs,
            children: n.map((e) => {
              let { path: n, name: t } = e;
              return (0, a.jsx)(
                "li",
                {
                  children: (0, a.jsx)(m.default, {
                    className: i()(o().tabs__item, {
                      [o().tabs__item_active]: s?.path === n,
                    }),
                    href: n,
                    onClick: () => d(e),
                    children: t,
                  }),
                },
                n
              );
            }),
          });
        };
    },
    3850: function (e, n, t) {
      "use strict";
      t.d(n, {
        e: function () {
          return f;
        },
      });
      var a = t(2265),
        s = t(47895),
        i = t(52169),
        r = t(77524),
        o = t(68575);
      let l = (e) =>
        Object.values(e).reduce((e, n) => {
          if (n.chainId) {
            let t =
              "number" == typeof n.chainId
                ? BigInt(n.chainId).toString()
                : n.chainId;
            e[t] || (e[t] = []), e[t].push(n);
          }
          return e;
        }, {});
      var u = t(2445),
        m = t(29557);
      let c = (e) => {
          let { chainId: n, tokenAddress: t, clusterId: a } = e;
          return `TOKEN_${n}_${t?.toLowerCase()}_${a || ""}`;
        },
        d = (e) => {
          let n = e?.address,
            t = e?.underlying_token_id,
            a = { src: e.logo_url, height: 24, width: 24 };
          return {
            clusterId: t,
            tokenText: e.name,
            tokenValue: e.symbol,
            tokenIcon: e.logo_url ? a : null,
            contractAddress: n,
            chainId: m.Jf[e.chain_id],
            decimals: +e.decimals || 6,
            verified: e.verified,
            protocol: s.eD.UTS,
            systemLabel: c({
              chainId: +e.chain_id,
              tokenAddress: n.toLowerCase(),
              clusterId: t,
            }),
            isSimpleMode: !0,
          };
        },
        p = (e) => {
          let { chainId: n, tokenAddress: t, clusterId: a } = e;
          return `TOKEN_${n}_${t?.toLowerCase()}_${a || ""}`;
        },
        g = (e, n) => {
          let t = e?.address,
            a = e?.underlying_token_id,
            i = n?.find((e) => e.clusterId === a)?.tokenIcon,
            r = n?.find((e) => e.clusterId === a);
          return {
            clusterId: a,
            tokenText: r?.tokenText || e.name,
            tokenValue: r?.tokenValue || e.symbol,
            tokenIcon: i ? { src: i.src, height: 24, width: 24 } : null,
            contractAddress: t,
            chainId: +e.chain_id,
            decimals: 18,
            verified: !!r?.verified,
            protocol: s.eD.UTS,
            systemLabel: p({
              chainId: +e.chain_id,
              tokenAddress: t.toLowerCase(),
              clusterId: a,
            }),
            metadata: { connectorAddress: "" },
            isSimpleMode: !0,
          };
        },
        f = () => {
          let e = (0, o.v9)((e) => e.AppEntity.appGlobalConfig),
            { data: n, ...t } = (0, i.cs)({
              where: { result_code: { _eq: 0 } },
            }),
            { data: m } = (0, u.di)({}),
            c = (0, a.useMemo)(
              () =>
                m?.original_tokens
                  .filter((e) => 0 !== e.expanded_tokens.length)
                  .map((e) => d(e)),
              [m?.original_tokens]
            ),
            p = (0, o.v9)((e) => e.EtsEntity.customTokens),
            f = (0, a.useMemo)(
              () =>
                p?.filter(
                  (e, n, t) =>
                    n ===
                    t.findIndex((n) => JSON.stringify(n) === JSON.stringify(e))
                ),
              [p]
            ),
            y = (0, a.useMemo)(
              () =>
                Object.values(s.eT).reduce(
                  (e, n) => ((e[n.systemLabel] = { ...n, local: !0 }), e),
                  {}
                ),
              []
            ),
            h = (0, a.useMemo)(() => {
              let e = { ...y },
                t = f?.reduce((e, n) => ((e[n.systemLabel] = n), e), {});
              if (
                (c?.forEach((n) => {
                  e[n.systemLabel] = n;
                }),
                m?.original_tokens
                  .flatMap((e) => e.expanded_tokens)
                  .map((e) => g(e, c))
                  .forEach((n) => {
                    e[n.systemLabel] = n;
                  }),
                !n?.deployments)
              )
                return f ? { ...e, ...t } : e;
              let a = new Set();
              return (
                n.deployments
                  .filter(
                    (e) =>
                      0 === e.result_code &&
                      e.clusters_deployments[0]?.cluster_id
                  )
                  .filter(
                    (e) =>
                      !Object.values(y).find((n) => {
                        let t = n.contractAddress.toLowerCase(),
                          s =
                            e.deployment !== e.underlying_token
                              ? e.deployment
                              : void 0,
                          i =
                            t === e?.underlying_token.toLowerCase() ||
                            t === s?.toLowerCase();
                        if (i) {
                          let n = e.clusters_deployments[0]?.cluster_id;
                          n && a.add(n);
                        }
                        return n.chainId === e?.src_chain_id && i;
                      })
                  )
                  .filter((e) => {
                    let n = e.clusters_deployments[0]?.cluster_id;
                    return !a.has(n);
                  })
                  .map((e) => (0, r.z)(e))
                  .forEach((n) => {
                    e[n.systemLabel] = n;
                  }),
                { ...e, ...t }
              );
            }, [y, n?.deployments, m?.original_tokens, f, c]),
            { allTokensByChainId: M, allTokensArr: b } = (0, a.useMemo)(() => {
              let n = Object.values(h),
                t = { ...h },
                a = e?.hiddenTokens || [];
              return (
                Object.keys(t)
                  .filter(
                    (e) =>
                      a.includes(e) ||
                      a.includes(t[e].tokenValue) ||
                      a.includes(t[e].systemLabel)
                  )
                  .forEach((e) => {
                    delete t[e];
                  }),
                { allTokensByChainId: l(t), allTokensArr: n }
              );
            }, [h, e]);
          return {
            allTokensObj: h,
            allTokensArr: b,
            allTokensByChainId: M,
            ...t,
          };
        };
    },
    24919: function (e, n, t) {
      "use strict";
      t.d(n, {
        WR: function () {
          return a.GeneralInfo;
        },
        F0: function () {
          return s.ModalContainer;
        },
        jP: function () {
          return d.PathTabs;
        },
        oi: function () {
          return m;
        },
        iA: function () {
          return c.i;
        },
      });
      var a = t(9433),
        s = t(93946),
        i = t(57437),
        r = t(52541),
        o = t(2265),
        l = t(33145);
      let u = {
          "photon-gov": "/protocols/photon-gov.png",
          entangle: "/protocols/entangle-clear.png",
          borpa: "/protocols/gorples.png",
          gorples: "/protocols/gorples.png",
          gorpa: "/protocols/gorples.png",
          "universal-data-feeds": "/protocols/udf.png",
          "udf-v1.1": "/protocols/udf.png",
        },
        m = (e) => {
          let {
              id: n,
              height: t,
              width: a,
              style: s = { marginRight: "10px" },
              ...m
            } = e,
            c = (0, o.useMemo)(() => {
              let e = n?.toLowerCase();
              return e in u
                ? u[e]
                : "data:image/svg+xml;utf8," + encodeURIComponent((0, r.Y)(n));
            }, [n]);
          return (0, i.jsx)(l.default, {
            width: a,
            height: t,
            src: c,
            alt: n,
            style: s,
            quality: 100,
            ...m,
          });
        };
      var c = t(23757),
        d = t(61411);
    },
    90376: function (e, n, t) {
      "use strict";
      function a() {
        return void 0 !== document.hidden
          ? !document.hidden
          : void 0 !== document.msHidden
          ? !document.msHidden
          : void 0 !== document.webkitHidden
          ? !document.webkitHidden
          : "hidden" !== document.visibilityState;
      }
      t.d(n, {
        o: function () {
          return a;
        },
      });
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
    81543: function (e) {
      e.exports = {
        button: "Button_button__uVCkF",
        secondary: "Button_secondary__WZRb3",
        primary: "Button_primary__SEg7u",
        loading: "Button_loading__4O4og",
        outlined: "Button_outlined__YpzTL",
        info: "Button_info__lU_vE",
        contained: "Button_contained__EUv_0",
        fullWidth: "Button_fullWidth__l4g69",
        lessCurved: "Button_lessCurved__P_Mg_",
        higher: "Button_higher__dFpT8",
        loader: "Button_loader__RNBTg",
        loader__icon: "Button_loader__icon__7soHX",
        spin: "Button_spin__2fPIA",
      };
    },
    38273: function (e) {
      e.exports = {
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
    96039: function (e) {
      e.exports = { notifications: "NotificationContext_notifications__9z1LT" };
    },
    16629: function (e, n) {
      "use strict";
      n.Z = {
        src: "/_next/static/media/close-icon.e4add96b.svg",
        height: 16,
        width: 16,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
    29853: function (e, n) {
      "use strict";
      n.Z = {
        src: "/_next/static/media/external_link.e73dc7ab.svg",
        height: 12,
        width: 12,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
  },
]);
