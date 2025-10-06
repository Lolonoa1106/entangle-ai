(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [668],
  {
    668: function (e, t, n) {
      Promise.resolve().then(n.bind(n, 42474));
    },
    67764: function (e) {
      "use strict";
      e.exports = [
        { inputs: [], stateMutability: "nonpayable", type: "constructor" },
        { inputs: [], name: "EntangleToken__E1", type: "error" },
        { inputs: [], name: "EntangleToken__E2", type: "error" },
        { inputs: [], name: "EntangleToken__E3", type: "error" },
        { inputs: [], name: "EntangleToken__E4", type: "error" },
        { inputs: [], name: "EntangleToken__E5", type: "error" },
        { inputs: [], name: "EntangleToken__E6", type: "error" },
        { inputs: [], name: "EntangleToken__E7", type: "error" },
        { inputs: [], name: "EntangleToken__E8", type: "error" },
        { inputs: [], name: "EntangleToken__E9", type: "error" },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !1,
              internalType: "address",
              name: "previousAdmin",
              type: "address",
            },
            {
              indexed: !1,
              internalType: "address",
              name: "newAdmin",
              type: "address",
            },
          ],
          name: "AdminChanged",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              indexed: !0,
              internalType: "address",
              name: "spender",
              type: "address",
            },
            {
              indexed: !1,
              internalType: "uint256",
              name: "value",
              type: "uint256",
            },
          ],
          name: "Approval",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: "address",
              name: "beacon",
              type: "address",
            },
          ],
          name: "BeaconUpgraded",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !1,
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              indexed: !1,
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
            {
              indexed: !1,
              internalType: "bytes32",
              name: "txhash",
              type: "bytes32",
            },
            {
              indexed: !1,
              internalType: "uint256",
              name: "fromChain",
              type: "uint256",
            },
            {
              indexed: !1,
              internalType: "bytes32",
              name: "marker",
              type: "bytes32",
            },
          ],
          name: "BridgeDone",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !1,
              internalType: "uint8",
              name: "version",
              type: "uint8",
            },
          ],
          name: "Initialized",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !1,
              internalType: "address",
              name: "account",
              type: "address",
            },
          ],
          name: "Paused",
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
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: "address",
              name: "from",
              type: "address",
            },
            {
              indexed: !0,
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              indexed: !1,
              internalType: "uint256",
              name: "value",
              type: "uint256",
            },
          ],
          name: "Transfer",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !1,
              internalType: "address",
              name: "account",
              type: "address",
            },
          ],
          name: "Unpaused",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: "address",
              name: "implementation",
              type: "address",
            },
          ],
          name: "Upgraded",
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
          name: "BURNER",
          outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
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
          name: "LAZY",
          outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "SPOTTER",
          outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "owner", type: "address" },
            { internalType: "address", name: "spender", type: "address" },
          ],
          name: "allowance",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "spender", type: "address" },
            { internalType: "uint256", name: "amount", type: "uint256" },
          ],
          name: "approve",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "account", type: "address" },
          ],
          name: "balanceOf",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "_chainIdTo", type: "uint256" },
            { internalType: "bytes", name: "_to", type: "bytes" },
            { internalType: "uint256", name: "_amount", type: "uint256" },
            { internalType: "bool", name: "unwrap", type: "bool" },
            { internalType: "bytes32", name: "_marker", type: "bytes32" },
          ],
          name: "bridge",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "_amount", type: "uint256" },
          ],
          name: "burn",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "decimals",
          outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "", type: "address" },
            { internalType: "uint256", name: "", type: "uint256" },
          ],
          name: "decreaseAllowance",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "pure",
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
          inputs: [
            { internalType: "address", name: "", type: "address" },
            { internalType: "uint256", name: "", type: "uint256" },
          ],
          name: "increaseAllowance",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [
            { internalType: "string", name: "name", type: "string" },
            { internalType: "string", name: "symbol", type: "string" },
            { internalType: "bytes32", name: "_protocolId", type: "bytes32" },
            { internalType: "uint256", name: "_eobChainId", type: "uint256" },
            { internalType: "address", name: "_admin", type: "address" },
            {
              internalType: "address",
              name: "_startReceipient",
              type: "address",
            },
            { internalType: "uint256", name: "_startAmount", type: "uint256" },
          ],
          name: "initialize",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "_amount", type: "uint256" },
          ],
          name: "lazyBurn",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "_to", type: "address" },
            { internalType: "uint256", name: "_amount", type: "uint256" },
          ],
          name: "lazyMint",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "name",
          outputs: [{ internalType: "string", name: "", type: "string" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "pauseBridge",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "paused",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "proxiableUUID",
          outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ internalType: "bytes", name: "b", type: "bytes" }],
          name: "redeem",
          outputs: [],
          stateMutability: "nonpayable",
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
          inputs: [{ internalType: "address", name: "_as", type: "address" }],
          name: "setAggregationSpotter",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_bridgeRouterAddress",
              type: "address",
            },
          ],
          name: "setBridgeRouterAddress",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "_feeCollector", type: "address" },
          ],
          name: "setFeeCollector",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "_lazySpotter", type: "address" },
          ],
          name: "setLazySpotter",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256[]", name: "chainIds", type: "uint256[]" },
            {
              internalType: "uint256[]",
              name: "minAmounts",
              type: "uint256[]",
            },
          ],
          name: "setMinBridgeAmount",
          outputs: [],
          stateMutability: "nonpayable",
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
        {
          inputs: [],
          name: "symbol",
          outputs: [{ internalType: "string", name: "", type: "string" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "totalSupply",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256", name: "amount", type: "uint256" },
          ],
          name: "transfer",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "from", type: "address" },
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256", name: "amount", type: "uint256" },
          ],
          name: "transferFrom",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "unpauseBridge",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newImplementation",
              type: "address",
            },
          ],
          name: "upgradeTo",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newImplementation",
              type: "address",
            },
            { internalType: "bytes", name: "data", type: "bytes" },
          ],
          name: "upgradeToAndCall",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
      ];
    },
    61139: function (e) {
      "use strict";
      e.exports = [
        { inputs: [], stateMutability: "nonpayable", type: "constructor" },
        { inputs: [], name: "AccessControlBadConfirmation", type: "error" },
        {
          inputs: [
            { internalType: "address", name: "account", type: "address" },
            { internalType: "bytes32", name: "neededRole", type: "bytes32" },
          ],
          name: "AccessControlUnauthorizedAccount",
          type: "error",
        },
        {
          inputs: [
            { internalType: "address", name: "target", type: "address" },
          ],
          name: "AddressEmptyCode",
          type: "error",
        },
        { inputs: [], name: "BorpaToken__E1", type: "error" },
        { inputs: [], name: "BorpaToken__E10", type: "error" },
        { inputs: [], name: "BorpaToken__E11", type: "error" },
        { inputs: [], name: "BorpaToken__E12", type: "error" },
        { inputs: [], name: "BorpaToken__E2", type: "error" },
        { inputs: [], name: "BorpaToken__E3", type: "error" },
        { inputs: [], name: "BorpaToken__E4", type: "error" },
        { inputs: [], name: "BorpaToken__E5", type: "error" },
        { inputs: [], name: "BorpaToken__E6", type: "error" },
        { inputs: [], name: "BorpaToken__E7", type: "error" },
        { inputs: [], name: "BorpaToken__E8", type: "error" },
        { inputs: [], name: "BorpaToken__E9", type: "error" },
        {
          inputs: [
            {
              internalType: "address",
              name: "implementation",
              type: "address",
            },
          ],
          name: "ERC1967InvalidImplementation",
          type: "error",
        },
        { inputs: [], name: "ERC1967NonPayable", type: "error" },
        {
          inputs: [
            { internalType: "address", name: "spender", type: "address" },
            { internalType: "uint256", name: "allowance", type: "uint256" },
            { internalType: "uint256", name: "needed", type: "uint256" },
          ],
          name: "ERC20InsufficientAllowance",
          type: "error",
        },
        {
          inputs: [
            { internalType: "address", name: "sender", type: "address" },
            { internalType: "uint256", name: "balance", type: "uint256" },
            { internalType: "uint256", name: "needed", type: "uint256" },
          ],
          name: "ERC20InsufficientBalance",
          type: "error",
        },
        {
          inputs: [
            { internalType: "address", name: "approver", type: "address" },
          ],
          name: "ERC20InvalidApprover",
          type: "error",
        },
        {
          inputs: [
            { internalType: "address", name: "receiver", type: "address" },
          ],
          name: "ERC20InvalidReceiver",
          type: "error",
        },
        {
          inputs: [
            { internalType: "address", name: "sender", type: "address" },
          ],
          name: "ERC20InvalidSender",
          type: "error",
        },
        {
          inputs: [
            { internalType: "address", name: "spender", type: "address" },
          ],
          name: "ERC20InvalidSpender",
          type: "error",
        },
        { inputs: [], name: "EnforcedPause", type: "error" },
        { inputs: [], name: "ExpectedPause", type: "error" },
        { inputs: [], name: "FailedInnerCall", type: "error" },
        { inputs: [], name: "InvalidInitialization", type: "error" },
        { inputs: [], name: "NotInitializing", type: "error" },
        {
          inputs: [],
          name: "PhotonFunctionSelectorLib__InvalidParams",
          type: "error",
        },
        { inputs: [], name: "UUPSUnauthorizedCallContext", type: "error" },
        {
          inputs: [{ internalType: "bytes32", name: "slot", type: "bytes32" }],
          name: "UUPSUnsupportedProxiableUUID",
          type: "error",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !1,
              internalType: "uint256",
              name: "masterShare",
              type: "uint256",
            },
          ],
          name: "AllocationsDistributed",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              indexed: !0,
              internalType: "address",
              name: "spender",
              type: "address",
            },
            {
              indexed: !1,
              internalType: "uint256",
              name: "value",
              type: "uint256",
            },
          ],
          name: "Approval",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !1,
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              indexed: !1,
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
            {
              indexed: !1,
              internalType: "bytes32[2]",
              name: "txhash",
              type: "bytes32[2]",
            },
            {
              indexed: !1,
              internalType: "uint256",
              name: "fromChain",
              type: "uint256",
            },
            {
              indexed: !0,
              internalType: "bytes32",
              name: "marker",
              type: "bytes32",
            },
          ],
          name: "BridgeDone",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !1,
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "ClaimMasterRewards",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !1,
              internalType: "uint64",
              name: "version",
              type: "uint64",
            },
          ],
          name: "Initialized",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !1,
              internalType: "address",
              name: "account",
              type: "address",
            },
          ],
          name: "Paused",
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
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: "address",
              name: "from",
              type: "address",
            },
            {
              indexed: !0,
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              indexed: !1,
              internalType: "uint256",
              name: "value",
              type: "uint256",
            },
          ],
          name: "Transfer",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !1,
              internalType: "address",
              name: "account",
              type: "address",
            },
          ],
          name: "Unpaused",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: "address",
              name: "implementation",
              type: "address",
            },
          ],
          name: "Upgraded",
          type: "event",
        },
        {
          inputs: [],
          name: "BURN_DENOMINATOR",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "BURN_PERCENTAGE",
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
          name: "ENDPOINT",
          outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "SYSTEM",
          outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "UPGRADE_INTERFACE_VERSION",
          outputs: [{ internalType: "string", name: "", type: "string" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "_address", type: "address" },
          ],
          name: "addToWhitelist",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "owner", type: "address" },
            { internalType: "address", name: "spender", type: "address" },
          ],
          name: "allowance",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "spender", type: "address" },
            { internalType: "uint256", name: "value", type: "uint256" },
          ],
          name: "approve",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [{ internalType: "address", name: "user", type: "address" }],
          name: "bBalances",
          outputs: [
            { internalType: "uint256", name: "bBorpa", type: "uint256" },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "account", type: "address" },
          ],
          name: "balanceOf",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ internalType: "address", name: "", type: "address" }],
          name: "blacklisted",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "borpaMaster",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "_chainIdTo", type: "uint256" },
            { internalType: "bytes", name: "_to", type: "bytes" },
            { internalType: "uint256", name: "_amount", type: "uint256" },
            { internalType: "bool", name: "unwrap", type: "bool" },
            { internalType: "bytes32", name: "_marker", type: "bytes32" },
          ],
          name: "bridge",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "bridgeRouterAddress",
          outputs: [{ internalType: "bytes", name: "", type: "bytes" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "_amount", type: "uint256" },
          ],
          name: "burn",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "amount", type: "uint256" },
            { internalType: "address", name: "user", type: "address" },
          ],
          name: "burnFor",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "chestManager",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "askedAmount", type: "uint256" },
          ],
          name: "claimMasterRewards",
          outputs: [
            {
              internalType: "uint256",
              name: "effectiveAmount",
              type: "uint256",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "currentDay",
          outputs: [{ internalType: "uint256", name: "day", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "currentEmissionRate",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "currentEmissionRatePerSecond",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "_timestamp", type: "uint256" },
          ],
          name: "dayByTime",
          outputs: [{ internalType: "uint256", name: "day", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "decimals",
          outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "disableBlockedStatus",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "ratePerDay", type: "uint256" },
          ],
          name: "emissionRatePerSecond",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [],
          name: "emissionStart",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "endPoint",
          outputs: [
            { internalType: "contract IProposer", name: "", type: "address" },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "eobChainId",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "feeCollector",
          outputs: [{ internalType: "address", name: "", type: "address" }],
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
          inputs: [
            { internalType: "address", name: "_admin", type: "address" },
            { internalType: "uint256", name: "_eobChainId", type: "uint256" },
            { internalType: "bytes32", name: "_protocolId", type: "bytes32" },
          ],
          name: "initialize",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [{ internalType: "address", name: "", type: "address" }],
          name: "isExcludedFromBurn",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "isWhiteListedPeriod",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ internalType: "address", name: "", type: "address" }],
          name: "isWhitelisted",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "lastEmission",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "masterReserve",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "maxSupply",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "destChainId", type: "uint256" },
          ],
          name: "minBridgeAmounts",
          outputs: [
            { internalType: "uint256", name: "minAmount", type: "uint256" },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "mintedRewardSupply",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "name",
          outputs: [{ internalType: "string", name: "", type: "string" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "pauseBridge",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "paused",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "pendingEmission",
          outputs: [
            { internalType: "uint256", name: "newEmission", type: "uint256" },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "pendingEmissionPerSecond",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "protocolId",
          outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "proxiableUUID",
          outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ internalType: "bytes", name: "b", type: "bytes" }],
          name: "redeem",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "bytes32", name: "role", type: "bytes32" },
            {
              internalType: "address",
              name: "callerConfirmation",
              type: "address",
            },
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
          inputs: [{ internalType: "uint256", name: "day", type: "uint256" }],
          name: "rewardsPerDay",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address[]", name: "addresses", type: "address[]" },
            { internalType: "bool[]", name: "status", type: "bool[]" },
          ],
          name: "setBlacklisted",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "_master", type: "address" },
          ],
          name: "setBorpaMaster",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_bridgeRouterAddress",
              type: "address",
            },
          ],
          name: "setBridgeRouterAddress",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address[]", name: "addresses", type: "address[]" },
            { internalType: "bool[]", name: "status", type: "bool[]" },
          ],
          name: "setBurnExcluded",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "_chestManager", type: "address" },
          ],
          name: "setChestManager",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_emissionStart",
              type: "uint256",
            },
          ],
          name: "setEmissionStart",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "_endPoint", type: "address" },
          ],
          name: "setEndPoint",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "_feeCollector", type: "address" },
          ],
          name: "setFeeCollector",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256[]", name: "chainIds", type: "uint256[]" },
            {
              internalType: "uint256[]",
              name: "minAmounts",
              type: "uint256[]",
            },
          ],
          name: "setMinBridgeAmount",
          outputs: [],
          stateMutability: "nonpayable",
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
        {
          inputs: [],
          name: "symbol",
          outputs: [{ internalType: "string", name: "", type: "string" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "amount", type: "uint256" },
          ],
          name: "systemBurn",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "totalBurnedAmount",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "totalLotteryBurnedAmount",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "totalSupply",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "totalSystemBurnedAmount",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256", name: "value", type: "uint256" },
          ],
          name: "transfer",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "from", type: "address" },
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256", name: "value", type: "uint256" },
          ],
          name: "transferFrom",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "unpauseBridge",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newImplementation",
              type: "address",
            },
            { internalType: "bytes", name: "data", type: "bytes" },
          ],
          name: "upgradeToAndCall",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
      ];
    },
    14892: function (e) {
      "use strict";
      e.exports = [
        {
          inputs: [
            { internalType: "uint32", name: "_localDomain", type: "uint32" },
            { internalType: "address", name: "_attester", type: "address" },
            {
              internalType: "uint32",
              name: "_maxMessageBodySize",
              type: "uint32",
            },
            { internalType: "uint32", name: "_version", type: "uint32" },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: "address",
              name: "attester",
              type: "address",
            },
          ],
          name: "AttesterDisabled",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: "address",
              name: "attester",
              type: "address",
            },
          ],
          name: "AttesterEnabled",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: "address",
              name: "previousAttesterManager",
              type: "address",
            },
            {
              indexed: !0,
              internalType: "address",
              name: "newAttesterManager",
              type: "address",
            },
          ],
          name: "AttesterManagerUpdated",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !1,
              internalType: "uint256",
              name: "newMaxMessageBodySize",
              type: "uint256",
            },
          ],
          name: "MaxMessageBodySizeUpdated",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: "address",
              name: "caller",
              type: "address",
            },
            {
              indexed: !1,
              internalType: "uint32",
              name: "sourceDomain",
              type: "uint32",
            },
            {
              indexed: !0,
              internalType: "uint64",
              name: "nonce",
              type: "uint64",
            },
            {
              indexed: !1,
              internalType: "bytes32",
              name: "sender",
              type: "bytes32",
            },
            {
              indexed: !1,
              internalType: "bytes",
              name: "messageBody",
              type: "bytes",
            },
          ],
          name: "MessageReceived",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !1,
              internalType: "bytes",
              name: "message",
              type: "bytes",
            },
          ],
          name: "MessageSent",
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
        { anonymous: !1, inputs: [], name: "Pause", type: "event" },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: "address",
              name: "newAddress",
              type: "address",
            },
          ],
          name: "PauserChanged",
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
          anonymous: !1,
          inputs: [
            {
              indexed: !1,
              internalType: "uint256",
              name: "oldSignatureThreshold",
              type: "uint256",
            },
            {
              indexed: !1,
              internalType: "uint256",
              name: "newSignatureThreshold",
              type: "uint256",
            },
          ],
          name: "SignatureThresholdUpdated",
          type: "event",
        },
        { anonymous: !1, inputs: [], name: "Unpause", type: "event" },
        {
          inputs: [],
          name: "acceptOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "attesterManager",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "attester", type: "address" },
          ],
          name: "disableAttester",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "newAttester", type: "address" },
          ],
          name: "enableAttester",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [{ internalType: "uint256", name: "index", type: "uint256" }],
          name: "getEnabledAttester",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getNumEnabledAttesters",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "attester", type: "address" },
          ],
          name: "isEnabledAttester",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "localDomain",
          outputs: [{ internalType: "uint32", name: "", type: "uint32" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "maxMessageBodySize",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "nextAvailableNonce",
          outputs: [{ internalType: "uint64", name: "", type: "uint64" }],
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
          name: "pause",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "paused",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "pauser",
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
          inputs: [
            { internalType: "bytes", name: "message", type: "bytes" },
            { internalType: "bytes", name: "attestation", type: "bytes" },
          ],
          name: "receiveMessage",
          outputs: [{ internalType: "bool", name: "success", type: "bool" }],
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
            { internalType: "bytes", name: "newMessageBody", type: "bytes" },
            {
              internalType: "bytes32",
              name: "newDestinationCaller",
              type: "bytes32",
            },
          ],
          name: "replaceMessage",
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
            {
              internalType: "uint32",
              name: "destinationDomain",
              type: "uint32",
            },
            { internalType: "bytes32", name: "recipient", type: "bytes32" },
            { internalType: "bytes", name: "messageBody", type: "bytes" },
          ],
          name: "sendMessage",
          outputs: [{ internalType: "uint64", name: "", type: "uint64" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint32",
              name: "destinationDomain",
              type: "uint32",
            },
            { internalType: "bytes32", name: "recipient", type: "bytes32" },
            {
              internalType: "bytes32",
              name: "destinationCaller",
              type: "bytes32",
            },
            { internalType: "bytes", name: "messageBody", type: "bytes" },
          ],
          name: "sendMessageWithCaller",
          outputs: [{ internalType: "uint64", name: "", type: "uint64" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "newMaxMessageBodySize",
              type: "uint256",
            },
          ],
          name: "setMaxMessageBodySize",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "newSignatureThreshold",
              type: "uint256",
            },
          ],
          name: "setSignatureThreshold",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "signatureThreshold",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
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
          inputs: [],
          name: "unpause",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newAttesterManager",
              type: "address",
            },
          ],
          name: "updateAttesterManager",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "_newPauser", type: "address" },
          ],
          name: "updatePauser",
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
        {
          inputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
          name: "usedNonces",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "version",
          outputs: [{ internalType: "uint32", name: "", type: "uint32" }],
          stateMutability: "view",
          type: "function",
        },
      ];
    },
    10247: function (e) {
      "use strict";
      e.exports = [
        { inputs: [], name: "UTSBase__E0", type: "error" },
        { inputs: [], name: "UTSBase__E1", type: "error" },
        { inputs: [], name: "UTSBase__E2", type: "error" },
        { inputs: [], name: "UTSBase__E3", type: "error" },
        { inputs: [], name: "UTSBase__E4", type: "error" },
        { inputs: [], name: "UTSBase__E5", type: "error" },
        { inputs: [], name: "UTSBase__E6", type: "error" },
        { inputs: [], name: "UTSBase__E7", type: "error" },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: "address",
              name: "spender",
              type: "address",
            },
            {
              indexed: !1,
              internalType: "address",
              name: "from",
              type: "address",
            },
            {
              indexed: !0,
              internalType: "bytes",
              name: "peerAddressIndexed",
              type: "bytes",
            },
            {
              indexed: !1,
              internalType: "bytes",
              name: "peerAddress",
              type: "bytes",
            },
            { indexed: !1, internalType: "bytes", name: "to", type: "bytes" },
            {
              indexed: !1,
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
            {
              indexed: !0,
              internalType: "uint256",
              name: "chainId",
              type: "uint256",
            },
          ],
          name: "Bridged",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: "address",
              name: "caller",
              type: "address",
            },
            {
              indexed: !1,
              internalType: "uint256[]",
              name: "allowedChainIds",
              type: "uint256[]",
            },
            {
              components: [
                { internalType: "bytes", name: "peerAddress", type: "bytes" },
                { internalType: "uint64", name: "minGasLimit", type: "uint64" },
                { internalType: "uint8", name: "decimals", type: "uint8" },
                { internalType: "bool", name: "paused", type: "bool" },
              ],
              indexed: !1,
              internalType: "struct ChainConfig[]",
              name: "chainConfigs",
              type: "tuple[]",
            },
          ],
          name: "ChainConfigUpdated",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              indexed: !1,
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
            {
              indexed: !1,
              internalType: "bytes",
              name: "customPayload",
              type: "bytes",
            },
            {
              components: [
                { internalType: "bytes", name: "sender", type: "bytes" },
                { internalType: "uint256", name: "chainId", type: "uint256" },
                { internalType: "bytes", name: "peerAddress", type: "bytes" },
                { internalType: "uint8", name: "decimals", type: "uint8" },
              ],
              indexed: !0,
              internalType: "struct Origin",
              name: "originIndexed",
              type: "tuple",
            },
            {
              components: [
                { internalType: "bytes", name: "sender", type: "bytes" },
                { internalType: "uint256", name: "chainId", type: "uint256" },
                { internalType: "bytes", name: "peerAddress", type: "bytes" },
                { internalType: "uint8", name: "decimals", type: "uint8" },
              ],
              indexed: !1,
              internalType: "struct Origin",
              name: "origin",
              type: "tuple",
            },
            {
              indexed: !0,
              internalType: "bytes",
              name: "result",
              type: "bytes",
            },
            {
              indexed: !1,
              internalType: "uint256",
              name: "nonce",
              type: "uint256",
            },
          ],
          name: "ExecutionFailed",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: "address",
              name: "to",
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
              internalType: "bytes",
              name: "peerAddressIndexed",
              type: "bytes",
            },
            {
              indexed: !1,
              internalType: "bytes",
              name: "peerAddress",
              type: "bytes",
            },
            {
              indexed: !0,
              internalType: "uint256",
              name: "chainId",
              type: "uint256",
            },
            {
              indexed: !1,
              internalType: "bytes",
              name: "sender",
              type: "bytes",
            },
          ],
          name: "Redeemed",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: "address",
              name: "caller",
              type: "address",
            },
            {
              indexed: !1,
              internalType: "address",
              name: "newRouter",
              type: "address",
            },
          ],
          name: "RouterSet",
          type: "event",
        },
        {
          inputs: [
            { internalType: "address", name: "from", type: "address" },
            { internalType: "bytes", name: "to", type: "bytes" },
            { internalType: "uint256", name: "amount", type: "uint256" },
            { internalType: "uint256", name: "dstChainId", type: "uint256" },
            { internalType: "uint64", name: "dstGasLimit", type: "uint64" },
            { internalType: "bytes", name: "customPayload", type: "bytes" },
            { internalType: "bytes", name: "protocolPayload", type: "bytes" },
          ],
          name: "bridge",
          outputs: [
            { internalType: "bool", name: "success", type: "bool" },
            { internalType: "uint256", name: "bridgedAmount", type: "uint256" },
          ],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "dstChainId", type: "uint256" },
            { internalType: "uint64", name: "dstGasLimit", type: "uint64" },
            {
              internalType: "uint16",
              name: "customPayloadLength",
              type: "uint16",
            },
            { internalType: "bytes", name: "protocolPayload", type: "bytes" },
          ],
          name: "estimateBridgeFee",
          outputs: [
            { internalType: "uint256", name: "paymentAmount", type: "uint256" },
            { internalType: "uint64", name: "dstMinGasLimit", type: "uint64" },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256[]", name: "chainIds", type: "uint256[]" },
          ],
          name: "getChainConfigs",
          outputs: [
            {
              components: [
                { internalType: "bytes", name: "peerAddress", type: "bytes" },
                { internalType: "uint64", name: "minGasLimit", type: "uint64" },
                { internalType: "uint8", name: "decimals", type: "uint8" },
                { internalType: "bool", name: "paused", type: "bool" },
              ],
              internalType: "struct ChainConfig[]",
              name: "configs",
              type: "tuple[]",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256", name: "amount", type: "uint256" },
            { internalType: "bytes", name: "customPayload", type: "bytes" },
            {
              components: [
                { internalType: "bytes", name: "sender", type: "bytes" },
                { internalType: "uint256", name: "chainId", type: "uint256" },
                { internalType: "bytes", name: "peerAddress", type: "bytes" },
                { internalType: "uint8", name: "decimals", type: "uint8" },
              ],
              internalType: "struct Origin",
              name: "origin",
              type: "tuple",
            },
            { internalType: "uint256", name: "nonce", type: "uint256" },
          ],
          name: "isExecutionFailed",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "protocolVersion",
          outputs: [{ internalType: "bytes2", name: "", type: "bytes2" }],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256", name: "amount", type: "uint256" },
            { internalType: "bytes", name: "customPayload", type: "bytes" },
            {
              components: [
                { internalType: "bytes", name: "sender", type: "bytes" },
                { internalType: "uint256", name: "chainId", type: "uint256" },
                { internalType: "bytes", name: "peerAddress", type: "bytes" },
                { internalType: "uint8", name: "decimals", type: "uint8" },
              ],
              internalType: "struct Origin",
              name: "origin",
              type: "tuple",
            },
          ],
          name: "redeem",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256", name: "amount", type: "uint256" },
            { internalType: "bytes", name: "customPayload", type: "bytes" },
            {
              components: [
                { internalType: "bytes", name: "sender", type: "bytes" },
                { internalType: "uint256", name: "chainId", type: "uint256" },
                { internalType: "bytes", name: "peerAddress", type: "bytes" },
                { internalType: "uint8", name: "decimals", type: "uint8" },
              ],
              internalType: "struct Origin",
              name: "origin",
              type: "tuple",
            },
            { internalType: "uint256", name: "nonce", type: "uint256" },
          ],
          name: "retryRedeem",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "router",
          outputs: [
            { internalType: "address", name: "routerAddress", type: "address" },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256[]",
              name: "allowedChainIds",
              type: "uint256[]",
            },
            {
              components: [
                { internalType: "bytes", name: "peerAddress", type: "bytes" },
                { internalType: "uint64", name: "minGasLimit", type: "uint64" },
                { internalType: "uint8", name: "decimals", type: "uint8" },
                { internalType: "bool", name: "paused", type: "bool" },
              ],
              internalType: "struct ChainConfig[]",
              name: "chainConfigs",
              type: "tuple[]",
            },
          ],
          name: "setChainConfig",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "newRouter", type: "address" },
          ],
          name: "setRouter",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256", name: "amount", type: "uint256" },
            { internalType: "bytes", name: "customPayload", type: "bytes" },
            {
              components: [
                { internalType: "bytes", name: "sender", type: "bytes" },
                { internalType: "uint256", name: "chainId", type: "uint256" },
                { internalType: "bytes", name: "peerAddress", type: "bytes" },
                { internalType: "uint8", name: "decimals", type: "uint8" },
              ],
              internalType: "struct Origin",
              name: "origin",
              type: "tuple",
            },
            { internalType: "bytes", name: "result", type: "bytes" },
          ],
          name: "storeFailedExecution",
          outputs: [],
          stateMutability: "nonpayable",
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
        {
          inputs: [],
          name: "underlyingToken",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
      ];
    },
    37681: function (e, t, n) {
      "use strict";
      n.d(t, {
        c: function () {
          return p;
        },
      });
      var a = n(57437),
        i = n(2265),
        s = n(19734),
        r = n.n(s),
        o = n(77398),
        l = n.n(o);
      let d = (e) => {
        let { createdAt: t, updatedAt: n, isFinished: a } = e,
          s = (0, i.useRef)(),
          [r, o] = (0, i.useState)(""),
          d = (0, i.useCallback)(() => {
            if (!t) return;
            let e = new Date(t),
              i = l()(a && n ? new Date(n || "") : new Date()).diff(e),
              s = l().duration(Math.max(i, 1e3)),
              r = Math.floor(s.asHours()),
              d = Math.floor(s.minutes()),
              u = Math.floor(s.seconds());
            Number.isNaN(r) ||
              Number.isNaN(d) ||
              Number.isNaN(u) ||
              o(`${r}h ${d}m ${u}s`);
          }, [t, n, a]);
        return (
          (0, i.useEffect)(() => {
            if ((clearInterval(s.current), d(), !a))
              return (
                (s.current = setInterval(d, 1e3)),
                () => clearInterval(s.current)
              );
          }, [d, a]),
          r
        );
      };
      var u = n(36760),
        c = n.n(u);
      let p = (0, i.memo)((e) => {
        let {
            createdAt: t,
            updatedAt: n,
            isFinished: i,
            timeClassName: s = "",
          } = e,
          o = d({ createdAt: t, updatedAt: n, isFinished: i });
        return t
          ? (0, a.jsx)("div", {
              className: r().status,
              children: (0, a.jsx)("div", {
                className: c()(r().time, s),
                children: o,
              }),
            })
          : null;
      });
      p.displayName = "TimePassed";
    },
    42474: function (e, t, n) {
      "use strict";
      let a, i;
      n.d(t, {
        default: function () {
          return a7;
        },
      });
      var s = n(57437),
        r = n(2265),
        o = n(39502),
        l = n(81008),
        d = n(29557),
        u = n(36760),
        c = n.n(u),
        p = n(64983),
        m = n(33145),
        y = n(52126),
        _ = n.n(y),
        h = n(24919),
        g = n(87598),
        b = n.n(g),
        f = n(47895);
      let x = (e, t) => {
        let n = e.protocol === t.protocol;
        if (e.protocol === f.eD.CCTP) return n;
        if (e.protocol === f.eD.UTS) {
          let a = e?.clusterId === t?.clusterId;
          return n && a;
        }
        let a = f.$3[e.tokenValue]?.includes(t.tokenValue);
        return n && (a || e.tokenValue === t.tokenValue);
      };
      var T = n(80962),
        v = n.n(T);
      let C = (e) => {
        let {
          option: t,
          selected: n,
          className: a,
          onClose: i,
          onClick: r,
          disabled: o,
        } = e;
        return (0, s.jsxs)("button", {
          className: c()(
            v().item,
            { [v().item_selected]: n, [v().disabled]: o },
            a
          ),
          onClick: o
            ? () => {}
            : () => {
                i(), r(t);
              },
          children: [
            (0, s.jsx)("div", {
              className: v().item__box,
              children: (0, s.jsx)(m.default, {
                className: v().item__icon,
                width: 40,
                height: 40,
                src: t.networkIcon,
                alt: t.networkText,
              }),
            }),
            (0, s.jsx)("span", {
              className: v().item__name,
              children: t.networkText,
            }),
          ],
        });
      };
      var w = n(3850),
        k = n(36237),
        N = n(10247),
        S = n.n(N),
        I = n(68575),
        M = n(91960),
        j = n(75888);
      let B = (e) => {
          let { allTokensObj: t } = (0, w.e)(),
            n = t[e || ""],
            a = (0, M.TL)(),
            i = (0, r.useMemo)(
              () =>
                d.Dc.filter((e) => "number" == typeof e.chainId).map((e) =>
                  BigInt(e.chainId)
                ),
              []
            ),
            s = (0, I.v9)((e) => e.EtsEntity.chainConfigs),
            o = (0, r.useMemo)(() => s?.[e || ""], [s, e]),
            { data: l } = (0, k.useReadContract)({
              abi: S(),
              address: n?.metadata?.connectorAddress ?? n?.contractAddress,
              functionName: "getChainConfigs",
              chainId: Number(n?.chainId),
              args: [i],
            }),
            u = (0, r.useMemo)(
              () =>
                !n?.isCustom && o
                  ? o
                  : l
                      ?.map((e, t) =>
                        "0x" === e.peerAddress || e.paused
                          ? null
                          : { chainId: i[t], peerAddress: e.peerAddress }
                      )
                      .filter((e) => null !== e),
              [l, i, o, n]
            ),
            c = (e) =>
              e.map((e) => ({
                chainId: e.chainId.toString(),
                peerAddress: e.peerAddress,
              })),
            p = (0, r.useRef)(!1);
          return (
            (0, r.useEffect)(() => {
              u &&
                u.length > 0 &&
                e &&
                !p.current &&
                (!o || JSON.stringify(c(u)) !== JSON.stringify(c(o))) &&
                ((p.current = !0), a(j.s.actions.addChainConfigs({ [e]: u })));
            }, [u, a, e, o]),
            { filteredPeers: u, foundInverseToken: n }
          );
        },
        E = (e) => {
          let {
              onClose: t,
              enable: n,
              selectedValue: a,
              onClick: i,
              type: o,
              inverseTokenValue: l,
              pathToken: u,
            } = e,
            { allTokensObj: m, allTokensByChainId: y } = (0, w.e)(),
            _ = (0, I.v9)((e) => e.BridgeEntity.tokens),
            g = "usdc" === u,
            { filteredPeers: f, foundInverseToken: T } = B(_.from),
            v = (0, r.useMemo)(
              () =>
                d.Dc.filter((e) => {
                  let { chainId: t } = e;
                  return g
                    ? y[t].find(
                        (e) =>
                          e.tokenValue.toLowerCase().includes("usdc") ||
                          e.tokenText.toLowerCase().includes("usdc")
                      )
                    : y[t]?.length;
                }).map((e) => {
                  let t = o === p.fx.To,
                    n =
                      e.chainId === d.m5.Noble.chainId ||
                      y[e.chainId].every(
                        (e) =>
                          e.tokenValue.toLowerCase().includes("usdc") ||
                          e.tokenText.toLowerCase().includes("usdc")
                      ),
                    a =
                      t &&
                      l &&
                      !!m[l] &&
                      ((!T?.isCustom &&
                        !y[e.chainId]?.some((e) => x(e, m[l]))) ||
                        (T?.isCustom &&
                          !f?.some((t) => Number(t.chainId) === e.chainId)));
                  return { ...e, disabled: a, isUsdcOnlyChain: n };
                }),
              [y, m, f, T?.isCustom, l, g, u, o]
            );
          return (0, s.jsx)(h.F0, {
            title: "Select Network",
            enable: n,
            onClose: t,
            isCloseIcon: !0,
            modalClassName: c()(b().modal, b().networkModal),
            titleClassName: b().modal__title,
            closeIconClassName: b().modal__close,
            className: b().container,
            closeIconThin: !0,
            children: (0, s.jsx)("div", {
              className: c()(
                b().modal__container,
                b().modal__container_network
              ),
              children: v.map((e) =>
                (0, s.jsx)(
                  C,
                  {
                    option: e,
                    onClose: t,
                    selected: a === e.networkValue,
                    onClick: i,
                    disabled: e.disabled || e.isUsdcOnlyChain,
                  },
                  e.networkValue
                )
              ),
            }),
          });
        },
        A = (e) => {
          let {
              className: t,
              value: n,
              onClick: a,
              disabled: i,
              type: o,
              inverseTokenValue: l,
              pathToken: u,
            } = e,
            [p, y] = (0, r.useState)(!1),
            h = (0, r.useMemo)(() => d.Dc.find((e) => e.chainId === n), [n]);
          return (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsxs)("button", {
                onClick: () => {
                  y(!0);
                },
                className: c()(_().selector, t),
                disabled: i,
                children: [
                  (0, s.jsx)("div", {
                    className: c()(_().selector__box, _().selector__box_big),
                    children: h
                      ? (0, s.jsx)(m.default, {
                          className: _().selector__icon,
                          width: 36,
                          height: 36,
                          src: h.networkIcon,
                          alt: h.networkText,
                        })
                      : (0, s.jsx)("div", {
                          className: c()(
                            _().selector__icon,
                            _().selector__icon_empty
                          ),
                        }),
                  }),
                  (0, s.jsx)("span", {
                    className: c()(_().selector__name, {
                      [_().selector__name_active]: h,
                    }),
                    children: h ? h.networkText : "Network",
                  }),
                ],
              }),
              (0, s.jsx)(E, {
                pathToken: u,
                onClose: () => {
                  y(!1);
                },
                enable: p,
                selectedValue: h?.networkValue || "",
                onClick: a,
                type: o,
                inverseTokenValue: l,
              }),
            ],
          });
        };
      var P = n(84510),
        R = n.n(P),
        L = n(38217),
        D = n(33730),
        O = n(83526);
      let F = (e) => "EVM" === d.bj[e],
        U = (e) => "SOL" === d.bj[e],
        W = (e) => "TRX" === d.bj[e],
        V = (e) => "NOBL" === d.bj[e],
        H = (e) => "TON" === d.bj[e];
      var G = n(70755),
        K = n(66972),
        $ = n(76985);
      let Z = (e) => {
        let { address: t } = (0, D.Z)(),
          { address: n } = (0, O.d)(),
          { address: a } = (0, G.Y)(),
          { address: i } = (0, $.e)(),
          { address: s } = (0, K.H)();
        return e
          ? F(e)
            ? t
            : W(e)
            ? a
            : U(e)
            ? n
            : V(e)
            ? s
            : H(e)
            ? i
            : void 0
          : void 0;
      };
      var z = n(48691),
        q = n(54484),
        J = n(46454),
        X = n(77296),
        Y = n(72570),
        Q = n(28572);
      let ee = {
          WNGL: "/public/chains/rsz_entangle.png",
          NGL: "/public/chains/rsz_entangle.png",
          GORPLES: "/public/assets/icons/gorples.png",
          GORPLE: "/public/assets/icons/gorples.png",
        },
        et = (e) => {
          let {
              option: t,
              selectedValue: n,
              className: a,
              onClose: i,
              onClick: l,
              chainId: u,
              type: y,
              inverseValue: _,
            } = e,
            h = n === t.tokenValue,
            { balance: g } = (0, J.Z_)(),
            { data: b } = (0, L.useWalletClient)(),
            x = Z(u),
            { allTokensObj: T } = (0, w.e)(),
            v = (0, I.v9)((e) => e.BalanceEntity.balances[x || ""]),
            C = (0, o.b)(v?.[t.systemLabel] || 0n, t.decimals).toString(),
            k = u && d.Nb.includes(u),
            N = u === d.m5.TRON.chainId,
            S = "NGL" === t.tokenValue,
            M = "GORPLE" === t.tokenValue,
            j = u !== d.pQ.chainId && u !== d.m5.Solana.chainId,
            B = y === p.fx.From && ((!S && !k) || (S && j) || ((S || M) && N)),
            E = f.Fn[t.tokenValue] || 3,
            A = (0, r.useMemo)(
              () =>
                "NGL" === t.tokenValue
                  ? `${g ? (0, z.d)((0, q.t)(+g, E), 2) : "0.00"} NGL`
                  : `${C ? (0, z.d)((0, q.t)(Number(C), E), 2) : "0.00"} ${
                      t.tokenValue
                    }`,
              [t.tokenValue, g, E, C]
            ),
            P = (0, r.useMemo)(() => {
              if (!C) return "0.00";
              let e = (0, Q.x)(C, E);
              return `${e} ${t.tokenValue}`;
            }, [C, t.tokenValue, E]),
            D = T[_ || ""]?.tokenValue,
            O =
              y === p.fx.To &&
              D &&
              D !== t.tokenValue &&
              !f.$3[t.tokenValue]?.includes(D || ""),
            F = y === p.fx.From && u === d.ZP.chainId && "NGL" === t.tokenValue,
            U = (0, r.useCallback)(
              async (e) => {
                if (N && window.tronWeb)
                  try {
                    let e = window.tronWeb;
                    await e.request({
                      method: "wallet_watchAsset",
                      params: {
                        type: "trc20",
                        options: { address: t.contractAddress },
                      },
                    });
                  } catch (e) {
                    console.error("tron error watchAsset", e);
                  }
                else
                  try {
                    if ((e.stopPropagation(), !b)) return;
                    await b.request({
                      method: "wallet_watchAsset",
                      params: {
                        type: "ERC20",
                        options: {
                          address: t.contractAddress,
                          symbol:
                            "GORPLES" === t.tokenValue
                              ? "GORPLE"
                              : t.tokenValue,
                          decimals: t.decimals,
                          image: `${window.location.origin}${ee[t.tokenValue]}`,
                        },
                      },
                    });
                  } catch (e) {
                    console.error("error watchAsset", e);
                  }
              },
              [N, t.contractAddress, t.tokenValue, b]
            );
          return O
            ? null
            : (0, s.jsx)("button", {
                className: c()(R().item, { [R().item_selected]: h }, a),
                onClick: F
                  ? () => {}
                  : () => {
                      i(), l(t.systemLabel);
                    },
                disabled: F,
                children: (0, s.jsxs)("div", {
                  className: R().wrap,
                  children: [
                    (0, s.jsxs)("div", {
                      className: R().item__container,
                      children: [
                        (0, s.jsx)("div", {
                          className: R().item__image,
                          children: t.tokenIcon?.src
                            ? (0, s.jsx)(m.default, {
                                className: R().item__icon,
                                sizes: "32px",
                                src: t.tokenIcon.src || "",
                                width: t.tokenIcon?.width || 32,
                                height: t.tokenIcon?.height || 32,
                                alt: t.tokenValue,
                              })
                            : (0, s.jsx)(Y.I, {
                                address: t.contractAddress,
                                diameter: t.tokenIcon?.width || 32,
                              }),
                        }),
                        (0, s.jsxs)("div", {
                          className: c()(R().item__box, R().item__box_start),
                          children: [
                            (0, s.jsxs)("span", {
                              className: R().item__name,
                              children: [
                                t.tokenText,
                                t.tokenText.includes("GORPLE") && " (ex Borpa)",
                              ],
                            }),
                            (0, s.jsxs)("div", {
                              className: R().item__value,
                              children: [
                                (0, s.jsx)("span", {
                                  className: R().item__ticker,
                                  children: t.tokenValue,
                                }),
                                !t.verified &&
                                  (0, s.jsx)(m.default, {
                                    src: "/icons/warning.svg",
                                    alt: "warning",
                                    width: 18,
                                    height: 18,
                                  }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    y === p.fx.From &&
                      (0, s.jsx)(s.Fragment, {
                        children: (0, s.jsxs)("div", {
                          className: c()(R().item__box, R().item__box_end),
                          children: [
                            (0, s.jsxs)("span", {
                              className: c()(R().itemBalanceContainer, {
                                [R().showAddButton]: B,
                              }),
                              children: [
                                (0, s.jsx)("span", {
                                  className: R().item__name,
                                  children: "Balance",
                                }),
                                (0, s.jsx)("span", {
                                  className: c()(
                                    R().item__value,
                                    R().item__value_balance
                                  ),
                                  children: u === d.pQ.chainId ? A : P,
                                }),
                              ],
                            }),
                            B &&
                              (0, s.jsx)("span", {
                                className: R().addTokenIconContainer,
                                onClick: U,
                                children: (0, s.jsx)(X.p, {
                                  className: R().addTokenIcon,
                                }),
                              }),
                          ],
                        }),
                      }),
                  ],
                }),
              });
        };
      var en = {
        src: "/_next/static/media/search_grey.8b73f72d.svg",
        height: 14,
        width: 14,
        blurWidth: 0,
        blurHeight: 0,
      };
      let ea = (e, t, n) => {
        let a = n.toLowerCase();
        return (t ? e[t] || [] : Object.values(e).flat()).filter((e) => {
          let {
              tokenText: t,
              contractAddress: n,
              metadata: i,
              verified: s,
            } = e,
            r = t?.toLowerCase(),
            o = i?.connectorAddress?.toLowerCase(),
            l = n?.toLowerCase(),
            d = l === a || o === a;
          return (s && (r.includes(a) || l === a)) || d;
        });
      };
      var ei = n(33555),
        es = n(16011),
        er = (e) => {
          let { searchQuery: t } = e;
          return (0, s.jsxs)("div", {
            className: b().searchResults,
            children: [
              (0, s.jsx)("p", { children: "No results found for" }),
              (0, s.jsx)("p", {
                className: b().noResultsQueryText,
                children: t,
              }),
            ],
          });
        },
        eo = n(27648),
        el = n(8910),
        ed = n(25566),
        eu = () =>
          (0, s.jsx)("div", {
            children: (0, s.jsxs)("div", {
              className: b().unknownSourceBannerContainer,
              children: [
                (0, s.jsxs)("div", {
                  className: b().notSupportedBadge,
                  children: [
                    (0, s.jsx)(el.a, {
                      className: "w-3.5 h-3.5",
                      color: "#F87171",
                    }),
                    (0, s.jsx)("p", {
                      className: b().notSupportedBadgeText,
                      children: "Actions required",
                    }),
                  ],
                }),
                (0, s.jsx)("div", {
                  className: "flex",
                  children: (0, s.jsxs)("p", {
                    className: b().unknownSourceText,
                    children: [
                      "This token isn't eligible yet. Use Entangle AI's UTS Interface to\xa0",
                      (0, s.jsxs)(eo.default, {
                        className: b().activeTokenList,
                        href: ed.env.NEXT_PUBLIC_ETS_DOMAIN || "",
                        children: [(0, s.jsx)("br", {}), "deploy a connector"],
                      }),
                      "\xa0and\xa0",
                      (0, s.jsx)(eo.default, {
                        href: `${ed.env.NEXT_PUBLIC_ETS_DOMAIN}/station` || "",
                        className: b().activeTokenList,
                        children: "add liquidity\xa0",
                      }),
                      "to make it bridge-ready.",
                    ],
                  }),
                }),
              ],
            }),
          }),
        ec = (0, r.memo)((e) => {
          let { onCancel: t } = e;
          return (0, s.jsxs)("div", {
            children: [
              (0, s.jsxs)("div", {
                className: b().unknownSourceBannerContainer,
                children: [
                  (0, s.jsxs)("div", {
                    className: b().notSupportedBadge,
                    children: [
                      (0, s.jsx)(el.a, {
                        className: "w-3.5 h-3.5",
                        color: "#F87171",
                      }),
                      (0, s.jsx)("p", {
                        className: b().notSupportedBadgeText,
                        children: "Not supported",
                      }),
                    ],
                  }),
                  (0, s.jsx)("div", {
                    className: "flex",
                    children: (0, s.jsx)("p", {
                      className: b().unknownSourceText,
                      children:
                        "Currently, E-bridge supports UTS and ERC-20 tokens only.",
                    }),
                  }),
                ],
              }),
              (0, s.jsx)("div", {
                className: "flex gap-4 my-8",
                children: (0, s.jsx)("button", {
                  onClick: t,
                  className: b().cancelButton,
                  children: "Back",
                }),
              }),
            ],
          });
        }),
        ep = n(55267),
        em = () =>
          (0, s.jsxs)("div", {
            className: b().rightLink,
            children: [
              (0, s.jsx)(ep.s, { className: b().infoIcon }),
              (0, s.jsx)(eo.default, {
                target: "_blank",
                href: "https://entangle.zendesk.com/hc/en-us/articles/19968049055773-Gorples-Coin-rebranding-FAQ",
                children: "What happened to BORPA?",
              }),
            ],
          }),
        ey = (0, r.memo)((e) => {
          let { verified: t, onClick: n, onCancel: a } = e;
          return t
            ? (0, s.jsx)("div", {
                children: (0, s.jsxs)("div", {
                  className: b().unknownSourceBannerContainer,
                  children: [
                    (0, s.jsx)("div", {
                      className: b().verifiedSourceBadge,
                      children: (0, s.jsx)("p", {
                        className: b().verifiedSourceText,
                        children: "Verified Source",
                      }),
                    }),
                    (0, s.jsx)("div", {
                      className: "flex",
                      children: (0, s.jsxs)("p", {
                        className: b().unknownSourceText,
                        children: [
                          "This token is on Entangle’s\xa0",
                          (0, s.jsx)(eo.default, {
                            href: "https://github.com/Entangle-Protocol/UTS-Public-Token-List",
                            className: b().activeTokenList,
                            children: "Active Token List",
                          }),
                          "\xa0and safe to bridge.",
                        ],
                      }),
                    }),
                  ],
                }),
              })
            : (0, s.jsxs)("div", {
                children: [
                  (0, s.jsxs)("div", {
                    className: b().unknownSourceBannerContainer,
                    children: [
                      (0, s.jsx)("div", {
                        className: b().unknownSourceBadge,
                        children: (0, s.jsx)("p", {
                          className: b().unknownSourceBadgeText,
                          children: "Not verified",
                        }),
                      }),
                      (0, s.jsx)("div", {
                        children: (0, s.jsxs)("p", {
                          className: b().unknownSourceText,
                          children: [
                            "This UTS token is launched through UTS interface but doesn’t appear on our\xa0",
                            (0, s.jsx)(eo.default, {
                              href: "https://github.com/Entangle-Protocol/UTS-Public-Token-List",
                              className: b().activeTokenList,
                              children: "Active Token List",
                            }),
                            ".\xa0Please manage your own risks.",
                          ],
                        }),
                      }),
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    className: "flex gap-4 my-8",
                    children: [
                      (0, s.jsx)("button", {
                        onClick: a,
                        className: b().cancelButton,
                        children: "Back",
                      }),
                      (0, s.jsx)("button", {
                        onClick: n,
                        className: b().selectButton,
                        children: "Select this token",
                      }),
                    ],
                  }),
                ],
              });
        }),
        e_ = () =>
          (0, s.jsx)("div", {
            children: (0, s.jsxs)("div", {
              className: b().unknownSourceBannerContainer,
              children: [
                (0, s.jsx)("div", {
                  className: b().unknownSourceBadge,
                  children: (0, s.jsx)("p", {
                    className: b().unknownSourceBadgeText,
                    children: "Unknown Source",
                  }),
                }),
                (0, s.jsxs)("div", {
                  children: [
                    (0, s.jsxs)("p", {
                      className: b().unknownSourceText,
                      children: [
                        "This UTS token doesn’t appear on Entangle’s\xa0",
                        (0, s.jsx)(eo.default, {
                          href: "https://github.com/Entangle-Protocol/UTS-Public-Token-List",
                          className: b().activeTokenList,
                          children: "Active Token List",
                        }),
                        ".",
                      ],
                    }),
                    (0, s.jsx)("p", {
                      className: b().unknownSourceText,
                      children:
                        "Make sure this is the token you want to bridge.",
                    }),
                  ],
                }),
              ],
            }),
          }),
        eh = n(75466);
      let eg = () =>
        (0, s.jsxs)("div", {
          className: "flex justify-between p-6 w-full",
          children: [
            (0, s.jsxs)("div", {
              className: "flex  gap-3",
              children: [
                (0, s.jsx)(eh.O, { width: 32, height: 32, radius: 50 }),
                (0, s.jsxs)("div", {
                  className: "flex gap-3 flex-col ",
                  children: [
                    (0, s.jsx)(eh.O, { width: 52, height: 16 }),
                    (0, s.jsx)(eh.O, { width: 122, height: 19 }),
                  ],
                }),
              ],
            }),
            (0, s.jsxs)("div", {
              className: "flex items-center gap-3 ",
              children: [
                (0, s.jsxs)("div", {
                  className: "flex gap-3 flex-col items-end",
                  children: [
                    (0, s.jsx)(eh.O, { width: 62, height: 16 }),
                    (0, s.jsx)(eh.O, { width: 82, height: 19 }),
                  ],
                }),
                (0, s.jsx)(eh.O, { width: 24, height: 24, radius: 50 }),
              ],
            }),
          ],
        });
      var eb = n(27266),
        ef = n(98158),
        ex = n(77524),
        eT = n(76595),
        ev = n(52169),
        eC = n(37691),
        ew = n(94594);
      let ek = (e, t, n) => {
        let a =
            d.m5.Solana.chainId === n ||
            d.m5.TON.chainId === n ||
            d.m5.TRON.chainId === n ||
            d.m5.Noble.chainId === n,
          { data: i } = (0, ev.cs)({ where: { result_code: { _eq: 0 } } }),
          [s, o] = (0, r.useState)(),
          [l, u] = (0, r.useState)(),
          c = (0, M.TL)(),
          p = (0, I.v9)((e) => e.EtsEntity.customTokens),
          m = (0, r.useMemo)(
            () =>
              d.Dc.filter((e) => "number" == typeof e.chainId).map((e) =>
                BigInt(e.chainId)
              ),
            []
          ),
          y = (0, r.useMemo)(
            () =>
              i?.deployments.find(
                (t) =>
                  e &&
                  s &&
                  (t.underlying_token.toLowerCase() === s?.toLowerCase() ||
                    t.deployment.toLowerCase() === s?.toLowerCase())
              ),
            [s, e, i?.deployments]
          );
        (0, r.useEffect)(() => {
          let i = async () => {
            e &&
              (0, ei.U)(e) &&
              !a &&
              !t &&
              o(
                await (0, eC.L)(ew.gb, {
                  abi: S(),
                  chainId: n,
                  address: e,
                  functionName: "underlyingToken",
                })
              );
          };
          a || t || i();
        }, [t, n, a, e]);
        let _ = (0, r.useMemo)(
            () =>
              !s || y
                ? []
                : [
                    { abi: ef.Wo, address: s, functionName: "symbol" },
                    { abi: ef.Wo, address: s, functionName: "name" },
                  ],
            [s, y]
          ),
          { data: h } = (0, k.useReadContract)({
            abi: S(),
            address: e,
            functionName: "getChainConfigs",
            chainId: n,
            args: [m],
          }),
          g = (0, r.useMemo)(
            () =>
              h
                ?.map((e, t) =>
                  "0x" === e.peerAddress || e.paused
                    ? null
                    : { chainId: m[t], peerAddress: e.peerAddress }
                )
                .filter((e) => null !== e),
            [h, m, n, s]
          );
        (0, r.useEffect)(() => {
          let t = async () => {
            if (n && e) {
              let e = (0, eb.u)(n),
                t = await e.multicall({ contracts: _ }),
                [a, i] = t?.map((e) => e?.result) || [];
              t[0]?.status === "success" && u({ symbol: a, name: i });
            }
          };
          a || t();
        }, [e, n, _, a]),
          (0, r.useEffect)(() => {
            (async () => {
              if (!l?.name || !l?.symbol || !e || !n || !g) return;
              let t = await Promise.all(
                g?.map(async (e) => {
                  let { chainId: t, peerAddress: n } = e,
                    a = eb.u(Number(t));
                  return {
                    chainId: t,
                    underlyingToken: await a.readContract({
                      abi: S(),
                      address: n,
                      functionName: "underlyingToken",
                    }),
                  };
                })
              );
              n && s && t.push({ chainId: BigInt(n), underlyingToken: s });
              let a = `${(0, eT.XF)(1, 99)}x${(0, eT.QB)(40)}`,
                i = t?.map(async (t) => {
                  let { chainId: n, underlyingToken: i } = t,
                    r = eb.u(Number(n)),
                    o = await r.readContract({
                      abi: ef.Wo,
                      address: i,
                      functionName: "decimals",
                    }),
                    d = g.find((e) => e.chainId === n)?.peerAddress;
                  return {
                    clusterId: a,
                    tokenText: l?.name,
                    tokenValue: l?.symbol,
                    tokenIcon: null,
                    contractAddress: i,
                    systemLabel: ex.w({
                      chainId: Number(n),
                      tokenAddress: i,
                      clusterId: a,
                    }),
                    decimals: o,
                    protocol: f.eD.UTS,
                    chainId: Number(n),
                    metadata: { connectorAddress: s !== e ? d || e : void 0 },
                    local: !1,
                    verified: !1,
                    isCustom: !0,
                  };
                });
              i &&
                Promise.all(i).then((e) => {
                  if (e) {
                    let t = p?.find((t) =>
                        e.some(
                          (e) =>
                            t.contractAddress.toLowerCase() ===
                            e.contractAddress.toLowerCase()
                        )
                      ),
                      n = t?.clusterId || a,
                      i = e
                        .map((e) => ({ ...e, clusterId: n }))
                        .filter(
                          (e) =>
                            !p?.some(
                              (t) =>
                                t.contractAddress.toLowerCase() ===
                                e.contractAddress.toLowerCase()
                            )
                        ),
                      s = i.find(
                        (e) =>
                          "ngl" === e.tokenValue.trim().toLowerCase() ||
                          e.tokenText
                            .trim()
                            .toLowerCase()
                            .includes("gorples") ||
                          "ngl" === e.tokenText.trim().toLowerCase()
                      );
                    if (i?.length > 0 && !y && !s) {
                      let e = i.filter(
                        (e, t, n) =>
                          t ===
                          n.findIndex(
                            (t) => JSON.stringify(t) === JSON.stringify(e)
                          )
                      );
                      c(j.s.actions.addCustomTokens(e));
                    }
                  }
                });
            })();
          }, [e, n, g, s, l?.name, l?.symbol, c, p, y]);
      };
      var eN = n(78952),
        eS = n(64707);
      let eI = (e) => {
        let t = (0, r.useRef)();
        return (
          (0, r.useEffect)(() => {
            t.current = e;
          }),
          t.current
        );
      };
      var eM = () => {
          let e = (0, I.v9)((e) => e.BridgeEntity.chains),
            t = (0, M.TL)(),
            { switchChain: n } = (0, l.useSwitchChain)(),
            { address: a } = (0, eS.useAccount)(),
            {
              store: {
                BridgeEntity: { solanaWasManuallyDisconnected: i },
              },
              actions: {
                Bridge: { setSolanaWasManuallyDisconnected: s },
              },
            } = (0, M.oR)((e) => {
              let { BridgeEntity: t } = e;
              return { BridgeEntity: t };
            }),
            {
              wallet: o,
              connected: u,
              connectWallet: c,
              address: p,
              sendTransaction: m,
            } = (0, O.d)(),
            { connected: y, connectWallet: _, address: h } = (0, G.Y)(),
            { connected: g, connectWallet: b, address: f } = (0, $.e)(),
            { connected: x, connectWallet: T, address: v } = (0, K.H)(),
            C = e.from || 0,
            w = (0, r.useMemo)(() => {
              let e = {
                [d.m5.Solana.chainId]: p || "",
                [d.m5.TRON.chainId]: h || "",
                [d.m5.TON.chainId]: f || "",
                [d.m5.Noble.chainId]: v || "",
              };
              return void 0 !== e[C] ? e[C] : a;
            }, [C, a, p, h, f, v]),
            k = (0, I.v9)((e) => e.BridgeEntity.isFromSolana),
            N = (0, I.v9)((e) => e.BridgeEntity.isToSolana),
            S = (0, I.v9)((e) => e.BridgeEntity.isFromTron),
            j = (0, I.v9)((e) => e.BridgeEntity.isToTron),
            B = (0, I.v9)((e) => e.BridgeEntity.isFromTon),
            E = (0, I.v9)((e) => e.BridgeEntity.isToTon),
            A = (0, I.v9)((e) => e.BridgeEntity.isFromNoble),
            P = (0, I.v9)((e) => e.BridgeEntity.isToNoble),
            R = (0, I.v9)((e) => e.BridgeEntity.currentOperationClientData),
            L = k || N,
            D = S || j,
            F = A || P,
            U = B || E;
          (0, r.useEffect)(() => {
            if (!(0, eN.t)()) {
              if (k && !i) {
                if (R) return;
                u || c();
              }
              !S || i || y || _(), !A || i || x || T(), B && !g && b();
            }
          }, [R, u, y, k, S, B, A, i]),
            (0, r.useEffect)(() => {
              a && C && !R && n({ chainId: C });
            }, [C, R, a, n]);
          let W = eI(e.from);
          return (
            (0, r.useEffect)(() => {
              [900, 901].includes(W) || t(s(!1));
            }, [t, W, s]),
            {
              solWallet: o,
              addressFrom: w,
              chainId: C,
              isConnected: !!a || !!p || !!h,
              isNonEVM: L || D || F || U,
              isToNonEvm: N || j || P || E,
              isFromNonEvm: k || S || A || B,
              isToTron: j,
              isToSolana: N,
              isToNoble: P,
              isToTon: E,
              isFromSolana: k,
              isFromTron: S,
              isFromNoble: A,
              isFromTon: B,
              solSendTransaction: m,
            }
          );
        },
        ej = n(43933),
        eB = n(90376),
        eE = n(15150),
        eA = n(80068),
        eP = n.n(eA);
      let eR = (e) => {
          let { option: t, onClose: n, onClick: a, chainId: i, type: r } = e,
            o = r === p.fx.From && i === d.ZP.chainId && "NGL" === t.tokenValue;
          return (0, s.jsx)("button", {
            className: eP().item,
            onClick: o
              ? () => {}
              : () => {
                  n(), a(t.systemLabel);
                },
            disabled: o,
            children: (0, s.jsxs)("div", {
              className: eP().item__container,
              children: [
                (0, s.jsx)("div", {
                  className: eP().item__image,
                  children: t.tokenIcon?.src
                    ? (0, s.jsx)(m.default, {
                        className: "rounded-medium",
                        sizes: "24px",
                        src: t.tokenIcon.src || "",
                        width: 24,
                        height: 24,
                        alt: t.tokenValue,
                      })
                    : (0, s.jsx)(Y.I, {
                        address: t.contractAddress,
                        diameter: 24,
                      }),
                }),
                (0, s.jsx)("div", {
                  className: c()(eP().item__box, eP().item__box_start),
                  children: (0, s.jsx)("div", {
                    className: eP().item__tokenValue,
                    children: (0, s.jsx)("span", {
                      className: "text-ellipsis overflow-hidden",
                      children: t.tokenValue,
                    }),
                  }),
                }),
              ],
            }),
          });
        },
        eL = (e, t, n, a) => {
          let i = (0, r.useRef)(),
            s = (0, M.TL)(),
            o = (0, r.useMemo)(() => (e.length ? e : t), [e, t]),
            l = (0, r.useCallback)(async () => {
              try {
                if (!a || !n) return;
                s(ej.k.getBalances({ address: a, chainId: n, tokens: o }));
              } catch (e) {
                console.error("get Token Balance", e);
              }
            }, [a, n, e]);
          (0, r.useEffect)(() => {
            if (a)
              return (
                clearInterval(i.current),
                l().then(),
                (i.current = setInterval(() => {
                  (0, eB.o)() && l().then();
                }, eE.g_)),
                () => {
                  clearInterval(i.current);
                }
              );
          }, [n, a, l]);
        },
        eD = "recently_searched_tokens",
        eO = () => {
          let e = localStorage.getItem(eD);
          return e ? JSON.parse(e) : [];
        },
        eF = (e) => {
          let t = eO().filter((t) => t.systemLabel !== e.systemLabel),
            n = [e, ...t];
          return localStorage.setItem(eD, JSON.stringify(n)), n;
        },
        eU = (e) => {
          let {
              onClose: t,
              enable: n,
              selectedValue: a,
              options: i,
              onClick: o,
              chainId: l,
              type: d,
              inverseValue: u,
              pathToken: y,
            } = e,
            { allTokensByChainId: _, allTokensObj: g } = (0, w.e)(),
            T = (0, I.v9)((e) => e.BridgeEntity.chains),
            [v, C] = (0, r.useState)(""),
            N = (0, I.v9)((e) => e.BridgeEntity.tokens),
            [M, j] = (0, r.useState)(v),
            { result: E, loading: A } = (0, es.t)(l, M),
            { filteredPeers: P } = B(N?.from),
            [R, L] = (0, r.useState)([]),
            { addressFrom: D } = eM();
          (0, r.useEffect)(() => {
            L(eO());
          }, []);
          let { data: O } = (0, k.useReadContract)({
              abi: S(),
              address: M,
              functionName: "underlyingToken",
              args: [],
              chainId: l,
              query: { enabled: !!M && (0, ei.U)(v) },
            }),
            [F, U] = (0, r.useState)(!1),
            W = (0, r.useCallback)(() => {
              "from" === d && C(""), "to" === d && t();
            }, [t, d]),
            V = (0, r.useMemo)(
              () => Object.values(f.eT).find((e) => e.contractAddress === O),
              [O]
            ),
            H = (0, r.useMemo)(
              () => (M && _ && !V ? ea(_, l, v) : []),
              [M, _, V, l, v]
            ),
            G = (0, r.useCallback)(
              (e) => {
                let n = H.find((t) => t.systemLabel === e);
                n && L(eF(n)), o(e), t();
              },
              [H, o, t]
            );
          ek(
            M,
            H.find((e) => e.contractAddress.toLowerCase() === M.toLowerCase())
              ?.isSimpleMode,
            l
          ),
            (0, r.useEffect)(() => {
              if (v && !H.length) {
                U(!0);
                let e = setTimeout(() => {
                  U(!1);
                }, 5e3);
                return () => clearTimeout(e);
              }
              H.length && U(!1);
            }, [v, H.length]),
            (0, r.useEffect)(() => {
              let e = setTimeout(() => {
                j(v);
              }, 300);
              return () => clearTimeout(e);
            }, [v]);
          let K = (0, r.useMemo)(
              () =>
                i?.some(
                  (e) =>
                    e.tokenValue.includes("GORPLE") &&
                    (e.protocol === f.eD.CCM || e.protocol === f.eD.CCTP)
                ) &&
                !E?.isETS &&
                !A,
              [i, E?.isETS, A]
            ),
            $ = (0, r.useMemo)(
              () =>
                i?.filter((e) => {
                  if (d === p.fx.From) return e.verified && !e.isSimpleMode;
                  let t = P?.find((e) => Number(e.chainId) === T.to);
                  return (
                    e &&
                    g[u] &&
                    (g[u]?.isCustom
                      ? t?.peerAddress.toLowerCase() ===
                          e.contractAddress.toLowerCase() ||
                        t?.peerAddress.toLowerCase() ===
                          e.metadata?.connectorAddress?.toLowerCase()
                      : x(e, g[u]))
                  );
                }),
              [g, T.to, P, u, i, d]
            );
          return (
            eL(H, $, l, D),
            (0, s.jsxs)(h.F0, {
              title: "Select Token",
              enable: n,
              onClose: t,
              isCloseIcon: !0,
              modalClassName: b().modal,
              titleClassName: b().modal__title,
              closeIconClassName: b().modal__close,
              className: b().container,
              closeIconThin: !0,
              children: [
                "usdc" !== y &&
                  d === p.fx.From &&
                  (0, s.jsxs)(s.Fragment, {
                    children: [
                      (0, s.jsxs)("div", {
                        className: b().searchBar,
                        children: [
                          (0, s.jsx)("button", {
                            className: `${b().inputClearButton}`,
                            children: (0, s.jsx)(m.default, {
                              src: en,
                              width: 16,
                              height: 16,
                              alt: "search",
                            }),
                          }),
                          (0, s.jsx)("input", {
                            type: "text",
                            placeholder:
                              "input name or paste UTS token address",
                            className: c()(
                              b().searchInput,
                              "block w-full rounded-md border-none"
                            ),
                            value: v,
                            onChange: (e) => C(e.target.value),
                          }),
                        ],
                      }),
                      v &&
                        (0, s.jsxs)("div", {
                          className: "flex items-center gap-1.5 py-1",
                          children: [
                            (0, s.jsx)(m.default, {
                              src: en,
                              width: 16,
                              height: 16,
                              alt: "search",
                            }),
                            (0, s.jsx)("p", {
                              className: b().searchResultsColor,
                              children: "Search results",
                            }),
                          ],
                        }),
                    ],
                  }),
                !M &&
                  R.filter((e) => e.chainId === l).length > 0 &&
                  d === p.fx.From &&
                  (0, s.jsxs)("div", {
                    className: "flex gap-2 flex-col mb-3",
                    children: [
                      (0, s.jsx)("div", {
                        className: "flex items-center gap-1.5 ",
                        children: (0, s.jsx)("p", {
                          className: b().searchResultsColor,
                          children: "Recently searched",
                        }),
                      }),
                      (0, s.jsx)("div", {
                        className: "flex gap-2 flex-wrap",
                        children: R.filter((e) => e.chainId === l).map((e) =>
                          (0, s.jsx)(
                            "div",
                            {
                              className: "flex gap-2",
                              children: (0, s.jsx)(eR, {
                                option: e,
                                selectedValue: a,
                                onClick: o,
                                chainId: l,
                                type: d,
                                inverseValue: u,
                                onClose: t,
                              }),
                            },
                            e.systemLabel
                          )
                        ),
                      }),
                    ],
                  }),
                (0, s.jsxs)(s.Fragment, {
                  children: [
                    v &&
                      H?.length > 0 &&
                      (0, s.jsx)("div", {
                        className: b().modal__container,
                        children: H.map((e, n) =>
                          (0, s.jsxs)(
                            "div",
                            {
                              className: "flex gap-2 my-4 flex-col",
                              children: [
                                (0, s.jsx)(
                                  et,
                                  {
                                    onClose: t,
                                    option: e,
                                    selectedValue: a,
                                    onClick: G,
                                    chainId: l,
                                    type: d,
                                    inverseValue: u,
                                  },
                                  e.systemLabel
                                ),
                                !e.isCustom &&
                                  (0, s.jsx)(ey, {
                                    verified: e.verified,
                                    onClick: () => {
                                      t(), o(e.systemLabel);
                                    },
                                    onCancel: W,
                                  }),
                                v &&
                                  (0, ei.U)(v) &&
                                  e.isCustom &&
                                  (0, s.jsx)(e_, {}),
                              ],
                            },
                            n
                          )
                        ),
                      }),
                    !v &&
                      !H.length &&
                      (0, s.jsx)("div", {
                        className: b().modal__container,
                        children: $?.map((e, n) =>
                          s.jsxs(
                            "div",
                            {
                              className: c()("flex justify-center", {
                                "flex-col": d === p.fx.To,
                              }),
                              children: [
                                s.jsx(
                                  et,
                                  {
                                    onClose: t,
                                    option: e,
                                    selectedValue: a,
                                    onClick: o,
                                    chainId: l,
                                    type: d,
                                    className: "w-full",
                                    inverseValue: u,
                                  },
                                  e.tokenValue + e.systemLabel
                                ),
                                !0 &&
                                  !e.isCustom &&
                                  d === p.fx.To &&
                                  s.jsx(ey, {
                                    verified: e.verified,
                                    onClick: () => {
                                      t(), o(e.systemLabel);
                                    },
                                    onCancel: W,
                                  }),
                                d === p.fx.To && e.isCustom && s.jsx(e_, {}),
                              ],
                            },
                            n
                          )
                        ),
                      }),
                    v && F && !H.length && (0, s.jsx)(eg, {}),
                    v && !F && !H.length && (0, s.jsx)(er, { searchQuery: v }),
                    (E?.isETS || E?.isERC20) && 0 === H.length && v
                      ? (0, s.jsx)(eu, {})
                      : 0 === H.length &&
                        !F &&
                        v &&
                        (0, s.jsx)(ec, { onCancel: W }),
                    K && u?.includes("GORPLE") && (0, s.jsx)(em, {}),
                  ],
                }),
              ],
            })
          );
        },
        eW = (e) => {
          let {
              className: t,
              options: n,
              value: a,
              inverseValue: i,
              onClick: o,
              disabled: l,
              chainId: d,
              type: u,
              pathToken: p,
            } = e,
            [y, h] = (0, r.useState)(!1),
            { filteredPeers: g } = B(i),
            { allTokensObj: b } = (0, w.e)(),
            f = (0, I.v9)((e) => e.BridgeEntity.chains),
            x = b[f?.from || ""],
            T =
              "usdc" === p
                ? n?.filter((e) => e.systemLabel.includes("USDC"))
                : x?.isCustom
                ? n?.filter(
                    (e) =>
                      "to" === u &&
                      !e.systemLabel.includes("USDC") &&
                      g
                        .find((e) => Number(e.chainId) === f.to)
                        ?.peerAddress.toLowerCase() ===
                        e.contractAddress.toLowerCase()
                  )
                : n?.filter((e) => !e.systemLabel.includes("USDC")),
            v = (0, r.useMemo)(
              () =>
                T?.find((e) =>
                  "usdc" === p ? e.systemLabel : e.systemLabel === a
                ),
              [T, p, a]
            );
          return (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsxs)("button", {
                onClick: () => {
                  h(!0);
                },
                className: c()(_().selector, _().selector_small, t),
                disabled: l,
                children: [
                  (0, s.jsx)("div", {
                    className: c()(_().selector__box, _().selector__box_small),
                    children: v
                      ? v?.tokenIcon
                        ? (0, s.jsx)(m.default, {
                            className: _().selector__icon,
                            width: 24,
                            height: 24,
                            src: v.tokenIcon,
                            alt: v.tokenValue,
                          })
                        : (0, s.jsx)(Y.I, {
                            address: v.contractAddress,
                            diameter: 24,
                          })
                      : (0, s.jsx)("div", {
                          className: c()(
                            _().selector__icon,
                            _().selector__icon_empty
                          ),
                        }),
                  }),
                  (0, s.jsx)("span", {
                    className: c()(_().selector__name, {
                      [_().selector__name_active]: v,
                    }),
                    children: v ? v.tokenValue : "Asset",
                  }),
                ],
              }),
              y &&
                (0, s.jsx)(eU, {
                  pathToken: p,
                  onClose: () => {
                    h(!1);
                  },
                  enable: y,
                  selectedValue: v?.tokenValue || "",
                  inverseValue: i,
                  options: T,
                  onClick: o,
                  chainId: d,
                  type: u,
                }),
            ],
          });
        };
      var eV = n(89600),
        eH = n.n(eV),
        eG = n(92906),
        eK = () => {
          let e = (0, M.TL)(),
            {
              actions: {
                App: { setWalletConnectChainId: t },
              },
            } = (0, M.oR)((e) => ({ App: e.AppEntity })),
            { connectWallet: n } = (0, O.d)(),
            { connectWallet: a } = (0, G.Y)(),
            { connectWallet: i } = (0, K.H)(),
            s = (0, I.v9)((e) => e.BridgeEntity.isFromSolana),
            r = (0, I.v9)((e) => e.BridgeEntity.isFromTron),
            o = (0, I.v9)((e) => e.BridgeEntity.isFromNoble);
          return {
            onConnectWallet: () =>
              s ? n() : r ? a() : o ? i() : void e(t(d.ZP.chainId)),
          };
        },
        e$ = n(59183),
        eZ = n.n(e$);
      let ez = (0, r.memo)((e) => {
        let { className: t, width: n, height: a, onClick: i } = e;
        return (0, s.jsx)("svg", {
          width: n || 22,
          height: a || 17,
          className: t,
          viewBox: "0 0 22 17",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          onClick: i,
          children: (0, s.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M2.00328 1.51902L2.0033 1.51901C2.03128 1.50498 2.11423 1.46911 2.38613 1.44724C2.67232 1.42422 3.05111 1.42331 3.65153 1.42331H15.6812C16.2816 1.42331 16.6604 1.42422 16.9466 1.44724C17.2185 1.46911 17.3014 1.50498 17.3294 1.519C17.4781 1.59358 17.6055 1.70891 17.6953 1.85395L17.6983 1.87066C17.7125 1.95035 17.7277 2.0683 17.7422 2.22624C17.771 2.54008 17.7914 2.94725 17.8053 3.39367C17.8287 4.14675 17.8323 4.9653 17.8329 5.54688H14.6413C13.9846 5.54688 13.1663 6.02497 13.1663 6.93231V9.68098C13.1663 10.5883 13.9846 11.0664 14.6413 11.0664H17.833V11.234C17.833 11.808 17.8329 12.752 17.8053 13.6045C17.7915 14.0324 17.7712 14.4205 17.7426 14.7195C17.7282 14.8699 17.7132 14.9815 17.6995 15.0565L17.6968 15.0707C17.6069 15.2169 17.4789 15.3331 17.3295 15.408L17.3294 15.4081C17.3014 15.4221 17.2185 15.458 16.9466 15.4798C16.6604 15.5029 16.2816 15.5038 15.6812 15.5038H3.65153C3.0511 15.5038 2.67232 15.5029 2.38613 15.4798C2.11424 15.458 2.03129 15.4221 2.00332 15.4081L2.00318 15.408C1.83432 15.3233 1.69276 15.1859 1.60266 15.0119L1.60265 15.0119C1.58453 14.9769 1.54682 14.8871 1.5242 14.6145C1.50055 14.3295 1.49967 13.9535 1.49967 13.3635V3.56354C1.49967 2.97359 1.50055 2.59758 1.5242 2.31256C1.54682 2.04007 1.58453 1.95026 1.60266 1.91522L1.60268 1.91519C1.69274 1.74119 1.8343 1.60377 2.00328 1.51902ZM18.9997 11.0664V11.234C18.9997 12.3774 18.9997 15.0787 18.7736 15.5155C18.5748 15.8996 18.2575 16.212 17.8672 16.4077C17.4236 16.6302 16.8427 16.6302 15.6812 16.6302H3.65153C2.48993 16.6302 1.90914 16.6302 1.46547 16.4077C1.0752 16.212 0.757913 15.8996 0.559071 15.5155C0.333008 15.0787 0.333008 14.507 0.333008 13.3635V3.56354C0.333008 2.42011 0.333008 1.84838 0.559071 1.41165C0.757913 1.02748 1.07522 0.715141 1.46547 0.519406C1.90914 0.296875 2.48994 0.296875 3.65153 0.296875H15.6812C16.8427 0.296875 17.4236 0.296875 17.8672 0.519406C18.2575 0.715151 18.5748 1.02749 18.7736 1.41165C18.9823 1.81488 18.9983 4.2723 18.9996 5.54688H19.858C20.5148 5.54688 21.333 6.02497 21.333 6.93231V9.68098C21.333 10.5883 20.5148 11.0664 19.858 11.0664H18.9997ZM18.9997 6.67331H19.858C20.0283 6.67331 20.1663 6.78927 20.1663 6.93231V9.68098C20.1663 9.82402 20.0283 9.93998 19.858 9.93998H18.9997V6.67331ZM17.833 6.67331V9.93998H14.6413C14.4711 9.93998 14.333 9.82402 14.333 9.68098V6.93231C14.333 6.78927 14.4711 6.67331 14.6413 6.67331H17.833ZM17.6848 1.80624C17.6848 1.80619 17.6853 1.80759 17.686 1.81061L17.6848 1.80624ZM17.6866 15.116L17.6879 15.1115C17.6871 15.1146 17.6866 15.116 17.6866 15.116Z",
            fill: "currentColor",
          }),
        });
      });
      ez.displayName = "WalletIcon";
      let eq = (0, r.memo)((e) => {
        let { from: t } = e,
          n = (0, I.v9)((e) => e.BridgeEntity.chains),
          a = t ? n.from : n.to,
          { connectWallet: i } = (0, O.d)(),
          { connectWallet: o } = (0, K.H)(),
          { connectWallet: l } = (0, G.Y)(),
          { connectWallet: u } = (0, $.e)(),
          { walletConnect: c } = (0, D.Z)(),
          p = (0, r.useCallback)(
            () =>
              [900, 901].includes(a)
                ? i().then()
                : a === d.m5.Noble.chainId
                ? o().then()
                : a === d.m5.TRON.chainId
                ? l().then()
                : a === d.m5.TON.chainId
                ? u()
                : void c("metaMaskSDK", a).then(),
            [a, c, i, o, l, u]
          );
        return (0, s.jsxs)("div", {
          className: eZ().iconWrapper,
          onClick: p,
          children: [
            (0, s.jsx)(X.p, { className: eZ().plusIcon }),
            (0, s.jsx)("div", {
              className: eZ().text,
              children: "Connect wallet",
            }),
            (0, s.jsx)(ez, { className: eZ().walletIcon }),
          ],
        });
      });
      eq.displayName = "ConnectWalletButton";
      let eJ = (e) => {
        let { className: t, address: n } = e,
          { onConnectWallet: a } = eK();
        return (0, I.v9)((e) => e.BridgeEntity.chains).from
          ? n
            ? (0, s.jsx)("div", {
                className: c()(eH().connect, t),
                children: n
                  ? (0, s.jsxs)("span", {
                      className: eH().label,
                      children: [
                        "Current: ",
                        (0, s.jsx)("span", {
                          className: eH().addressNode,
                          children: (0, eG.F)(n, 4),
                        }),
                      ],
                    })
                  : (0, s.jsx)("button", {
                      className: eH().button,
                      onClick: a,
                      children: "Connect Wallet",
                    }),
              })
            : (0, s.jsx)(eq, { from: !0 })
          : null;
      };
      var eX = n(33920),
        eY = n.n(eX),
        eQ = n(46320),
        e0 = n(66377),
        e1 = n.n(e0),
        e2 = n(14326),
        e6 = n(64024);
      let e5 = (e) => {
        try {
          return new e6.PublicKey(e), !0;
        } catch (e) {
          return !1;
        }
      };
      var e3 = n(54654);
      let e4 = () => {
        let e;
        let { addressFrom: t } = eM(),
          n = (0, I.v9)((e) => e.BridgeEntity.destinationAddress),
          a = (0, I.v9)((e) => e.BridgeEntity.isToNonEvm),
          i = (0, I.v9)((e) => e.BridgeEntity.isToSolana),
          s = (0, I.v9)((e) => e.BridgeEntity.isToTron),
          r = (0, I.v9)((e) => e.BridgeEntity.isToNoble),
          o = n || t;
        return (
          !!o &&
          (i && !e5(o) && (e = !0),
          s && !e3.O.isAddress(o) && (e = !0),
          r && (e = !String(o).startsWith("noble")),
          a || (0, ei.U)(o) || (e = !0),
          e)
        );
      };
      var e9 = n(86902);
      let e7 = (e) => {
          let { setAddressError: t } = e,
            n = (0, M.TL)(),
            [a, i] = (0, r.useState)(!1),
            o = (0, I.v9)((e) => e.BridgeEntity.destinationAddress),
            l = (0, I.v9)((e) => e.BridgeEntity.chains),
            d = e4(),
            u = !!l.to && !!o,
            {
              addressFrom: p,
              isToNonEvm: m,
              isFromNonEvm: y,
              isToSolana: _,
              isToNoble: h,
              isToTron: g,
              isToTon: b,
            } = eM(),
            { address: f } = (0, D.Z)(),
            { address: x } = (0, O.d)(),
            { address: T } = (0, G.Y)(),
            { address: v } = (0, K.H)(),
            { address: C } = (0, $.e)(),
            w = (0, r.useMemo)(
              () =>
                y || m
                  ? g
                    ? T || ""
                    : _
                    ? x || ""
                    : h
                    ? v || ""
                    : b
                    ? C || ""
                    : m
                    ? ""
                    : f || ""
                  : p || "",
              [p, f, y, h, m, _, b, g, v, x, C, T]
            );
          (0, r.useEffect)(() => {
            n(e2.BridgeEntity.actions.setDestinationAddress(w)), t(!1);
          }, [w, n, t]);
          let k = (0, r.useCallback)(() => {
              a && i(!1),
                d && n(e2.BridgeEntity.actions.setDestinationAddress(""));
            }, [n, d, a]),
            N = (0, r.useCallback)(
              (e) => {
                "Enter" === e.key && k();
              },
              [k]
            ),
            S = (0, e9.Z)(() => {
              k();
            });
          return l.to || l.from
            ? o || p || w
              ? a
                ? (0, s.jsxs)("div", {
                    ref: S,
                    className: c()(e1().inputWrapper, {
                      [e1().inputWrapperError]: d && u,
                      [e1().inputWrapperSuccess]: !d && u,
                    }),
                    children: [
                      (0, s.jsx)("input", {
                        className: c()(e1().input),
                        placeholder: "Input other wallet address",
                        value: o,
                        onChange: (e) => {
                          let a = e.target.value;
                          n(e2.BridgeEntity.actions.setDestinationAddress(a)),
                            t(!1);
                        },
                        onKeyDown: N,
                      }),
                      (0, s.jsxs)("div", {
                        className: e1().smallIconWrapper,
                        children: [
                          d &&
                            u &&
                            (0, s.jsx)("div", {
                              className: e1().errorText,
                              children: "Invalid address",
                            }),
                          (0, s.jsx)(ez, {
                            width: 20,
                            height: 19,
                            className: e1().walletIconSmall,
                            onClick: k,
                          }),
                        ],
                      }),
                    ],
                  })
                : o
                ? (0, s.jsx)("div", {
                    className: e1().otherRoot,
                    onClick: () => i(!0),
                    children: (0, s.jsxs)("span", {
                      className: e1().label,
                      children: [
                        "Other wallet:",
                        " ",
                        (0, s.jsx)("span", {
                          className: e1().addressNode,
                          children: (0, eG.F)(o, 4),
                        }),
                      ],
                    }),
                  })
                : (0, s.jsxs)("div", {
                    className: e1().currentRoot,
                    children: [
                      (0, s.jsxs)("span", {
                        className: e1().label,
                        children: [
                          "Current:",
                          " ",
                          (0, s.jsx)("span", {
                            className: e1().addressNode,
                            children: (0, eG.F)(o, 4),
                          }),
                        ],
                      }),
                      (0, s.jsxs)("div", {
                        className: e1().iconWrapper,
                        onClick: () => i(!0),
                        children: [
                          (0, s.jsx)(X.p, { className: e1().plusIcon }),
                          (0, s.jsx)(ez, { className: e1().walletIcon }),
                        ],
                      }),
                    ],
                  })
              : (0, s.jsx)(eq, {})
            : null;
        },
        e8 = (e, t, n, a, i, s) => {
          if (n[e?.systemLabel]?.isCustom && s) {
            let e = s.find((e) => Number(e.chainId) === i);
            return a[i ?? 0].find(
              (t) =>
                t.contractAddress.toLowerCase() ===
                  e?.peerAddress.toLowerCase() ||
                t.metadata?.connectorAddress?.toLowerCase() ===
                  e?.peerAddress.toLowerCase()
            )?.systemLabel;
          }
          if (!n[e?.systemLabel]?.isCustom)
            return t?.find((t) => x(e, t))?.systemLabel;
        },
        te = (e) => {
          let {
              className: t,
              type: n,
              inverseType: a,
              setAmount: i,
              onSwitch: o,
              chainId: l,
              address: d,
              AmountProps: u,
              DestinationProps: m,
              pathToken: y,
            } = e,
            _ = (0, M.TL)(),
            {
              allTokensObj: h,
              allTokensByChainId: g,
              allTokensArr: b,
            } = (0, w.e)(),
            f = (0, I.v9)((e) => e.BridgeEntity.tokens),
            x = "usdc" === y,
            T = (0, r.useMemo)(
              () => b.find((e) => e.contractAddress === y),
              [b, y]
            ),
            v = (0, I.v9)((e) => e.BridgeEntity.chains),
            { filteredPeers: C } = B(f?.from);
          return (
            (0, r.useEffect)(() => {
              _(e2.BridgeEntity.actions.setChains({ from: 0, to: 0 })),
                _(e2.BridgeEntity.actions.setTokens({ from: "", to: "" })),
                T &&
                  T?.chainId &&
                  (_(
                    e2.BridgeEntity.actions.setTokens({
                      from: h[T.systemLabel].systemLabel,
                      to: "",
                    })
                  ),
                  _(
                    e2.BridgeEntity.actions.setChains({
                      from: +T?.chainId,
                      to: 0,
                    })
                  ));
            }, [y, T]),
            (0, s.jsxs)("div", {
              className: c()(eY().interaction, t),
              children: [
                (0, s.jsxs)("header", {
                  className: eY().interaction__header,
                  children: [
                    (0, s.jsx)("h2", {
                      className: c()(eY().interaction__title, {
                        [eY().titlePad]: n === p.fx.To,
                      }),
                      children: n,
                    }),
                    n === p.fx.From && (0, s.jsx)(eJ, { address: d }),
                    n === p.fx.To &&
                      m &&
                      (0, s.jsx)("div", {
                        className: eY().interaction__destination,
                        children: (0, s.jsx)(e7, { ...m }),
                      }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  className: eY().interaction__container,
                  children: [
                    (0, s.jsx)(A, {
                      pathToken: y,
                      className: eY().interaction__network,
                      value: v[n],
                      onClick: (e) => {
                        let t, s;
                        if (
                          (_(e2.BridgeEntity.actions.dropCurrentOperation()),
                          e.chainId == v[a])
                        ) {
                          o();
                          return;
                        }
                        let r = x
                            ? g[e.chainId].filter(
                                (e) =>
                                  e.local &&
                                  "USDC" === e.tokenText &&
                                  "USDC" === e.tokenValue
                              )
                            : g[e.chainId].filter(
                                (e) =>
                                  "USDC" !== e.tokenText &&
                                  "USDC" !== e.tokenValue
                              ),
                          d = g[v[a]],
                          u = !1,
                          c = !1;
                        n === p.fx.From
                          ? f.to && h[f.to]
                            ? (t = e8(h[f.to], r, h, g, l, C)) ||
                              ((t = r[0].systemLabel), (u = !0))
                            : (t = r[0].systemLabel)
                          : (t = h[f.from]
                              ? e8(h[f.from], r, h, g, e.chainId, C)
                              : r[0].systemLabel),
                          u &&
                            t &&
                            h[t] &&
                            !(s = e8(h[t], d, h, g, l, C)) &&
                            (c = !0);
                        let m = { ...f, ...(u ? { [a]: s } : {}), [n]: t },
                          { setTokens: y, setChains: b } =
                            e2.BridgeEntity.actions;
                        _(y(m)),
                          v[n] && i(""),
                          _(b({ ...v, [a]: c ? 0 : v[a], [n]: e.chainId }));
                      },
                      inverseTokenValue: f[a],
                      type: n,
                    }),
                    (0, s.jsx)(eW, {
                      pathToken: y,
                      className: eY().interaction__token,
                      options: g[v[n] || ""],
                      value: f[n],
                      inverseValue: f[a],
                      onClick: (e) => {
                        _(e2.BridgeEntity.actions.dropCurrentOperation());
                        let t = {};
                        if (n === p.fx.From && h[f[a]] && h[e]) {
                          let n = v[a] ? e8(h[e], g[v[a]], h, g, l, C) : void 0;
                          n
                            ? (t[a] = n)
                            : ((t[a] = ""),
                              _(
                                e2.BridgeEntity.actions.setChains({
                                  ...v,
                                  [a]: 0,
                                })
                              ));
                        }
                        _(
                          e2.BridgeEntity.actions.setTokens({
                            ...f,
                            ...t,
                            [n]: e,
                          })
                        );
                      },
                      disabled: !v[n] || x,
                      chainId: l,
                      type: n,
                    }),
                    (0, s.jsx)("div", {
                      className: eY().interaction__amount,
                      children: (0, s.jsx)(eQ.w, {
                        decimals: h[f[n]]?.decimals,
                        protocol: h[f[n]]?.protocol,
                        type: n,
                        ...u,
                      }),
                    }),
                  ],
                }),
              ],
            })
          );
        };
      var tt = n(7407),
        tn = n(33701),
        ta = n.n(tn),
        ti = n(72797),
        ts = n(55826),
        tr = n.n(ts),
        to = n(47374),
        tl = n(32521),
        td = n(93184),
        tu = (e, t) => {
          let { data: n } = (0, L.useWalletClient)(),
            [a, i] = (0, r.useState)(!1),
            s = (0, I.v9)((e) => e.BridgeEntity.chains);
          return {
            approve: (0, r.useCallback)(
              async (a) => {
                i(!0), console.log("APPROVE", a, e, t);
                try {
                  if (!n) return;
                  let i = (0, tl.uN)({ address: e, abi: ef.Wo, client: n }),
                    r = await i.estimateGas.approve([t, a]),
                    o = await i.write.approve([t, a], { gas: r });
                  return await (0, td.e)(ew.gb, {
                    hash: o,
                    chainId: s.from,
                    confirmations: 2,
                  });
                } catch (e) {
                  throw (
                    (console.log("error", e),
                    Error(
                      e instanceof Error
                        ? e?.message
                        : "Error while approving transfer"
                    ))
                  );
                } finally {
                  i(!1);
                }
              },
              [s.from, t, e, n]
            ),
            isLoading: a,
          };
        },
        tc = n(875),
        tp = n(5575),
        tm = (e, t) => {
          let { contractAddress: n, tokenMessenger: i } = e,
            { data: s } = (0, L.useWalletClient)(),
            [o, l] = (0, r.useState)({}),
            d = (0, r.useCallback)(async () => {
              if (n && i && s?.account)
                try {
                  let e = (0, tl.uN)({ address: n, abi: ef.Wo, client: s }),
                    t = await e.read.allowance([s.account.address, i]);
                  console.log("ALLOW", t.toString()),
                    l((e) => ({ ...e, [n]: t }));
                } catch (e) {}
            }, [n, i, s]);
          return (
            (0, r.useEffect)(() => {
              if ((clearInterval(a), !t.skip && s?.account))
                return (
                  d(),
                  (a = setInterval(d, eE.jI)),
                  () => {
                    clearInterval(a);
                  }
                );
            }, [t.skip, d, s?.account]),
            { allowance: o[n], refetch: d }
          );
        },
        ty = n(44553);
      let t_ = (e) => {
        let { allTokensObj: t } = (0, w.e)(),
          n = (0, M.TL)(),
          a = t[(0, I.v9)((e) => e.BridgeEntity.tokens).from],
          i = (0, I.v9)((e) => e.BridgeEntity.isFromSolana),
          s = (0, I.v9)((e) => e.BridgeEntity.isFromNoble),
          o = (0, I.v9)((e) => e.BridgeEntity.isBlockedByAllowance),
          l = a?.isSimpleMode,
          d = a?.metadata?.connectorAddress,
          u =
            !a?.contractAddress ||
            !(a.metadata?.tokenMessenger || d || l) ||
            (a?.protocol !== f.eD.CCTP && a?.protocol !== f.eD.UTS),
          { allowance: c, refetch: p } = tm(
            {
              contractAddress: a?.contractAddress,
              tokenMessenger: a?.metadata?.tokenMessenger || d || ty.B,
            },
            { skip: u }
          );
        return (
          (0, r.useEffect)(() => {
            let t = (e) => {
              n(e2.BridgeEntity.actions.setAllowanceBlock(e));
            };
            if (s || i || (!d && a?.protocol === f.eD.UTS && !l)) return t(!1);
            t(!c || Number(e) > Number(c) / 10 ** a?.decimals);
          }, [d, c, e, n, s, i, a?.decimals, a?.protocol, l]),
          { isBlockedByAllowance: o, refetchAllowance: p }
        );
      };
      var th = n(24461),
        tg = n(68768);
      let tb = (e) =>
        e.message.includes("User rejected the request")
          ? "User rejected the request"
          : e instanceof Error
          ? e.message
          : "Failed to send transaction";
      var tf = n(52535),
        tx = n(12364);
      let tT = (e, t) => {
        let { address: n, token: a, chainId: i } = e,
          [s, l] = (0, r.useState)(!1),
          [d, u] = (0, r.useState)({}),
          c = (0, tx.useConfig)(),
          p = (0, r.useCallback)(async () => {
            if (!n || !a || !i || t) return;
            l(!0);
            let e = await (0, tf.s)(c, { address: n, token: a, chainId: i });
            u((t) => ({
              ...t,
              [`${i}_${a}_${n}`]: Number((0, o.b)(e.value, e.decimals)),
            })),
              l(!1);
          }, [n, a, i, t, c]);
        return (
          (0, r.useEffect)(() => {
            p().then();
          }, [p]),
          {
            isConnectorBalanceLoading: s,
            connectorBalance: d[`${i}_${a}_${n}`],
          }
        );
      };
      var tv = n(34602);
      let { setApproveRequestOpen: tC } = e2.BridgeEntity.actions,
        tw = { GORPLES: 7500, GORPLE: 7500, NGL: 100, WNGL: 100, USDC: 0.1 };
      var tk = (0, r.memo)((e) => {
          let {
              className: t,
              onSubmit: n,
              disabled: a,
              amount: i,
              balance: o,
              isInvalid: u,
              isEnterDestAddress: p,
            } = e,
            { address: m, chainId: y } = (0, D.Z)(),
            _ = (0, M.TL)(),
            { connectWallet: h, connected: g, address: b } = (0, O.d)(),
            { connected: x } = (0, G.Y)(),
            { connected: T } = (0, $.e)(),
            { connected: v } = (0, K.H)(),
            C = (0, I.v9)((e) => e.BridgeEntity.tokens),
            k = (0, I.v9)((e) => e.BridgeEntity.chains),
            { allTokensObj: N } = (0, w.e)(),
            S = N[C.from],
            j = N[C.to],
            B = (0, I.v9)((e) => e.BridgeEntity.bridgeLoading),
            E = (0, th.Xq)(),
            {
              isFromNonEvm: A,
              isFromSolana: P,
              isFromTron: R,
              isFromTon: L,
              isFromNoble: F,
            } = eM(),
            { switchChain: U } = (0, l.useSwitchChain)(),
            [W, V] = (0, r.useState)(0),
            H = (0, I.v9)((e) => e.BridgeEntity.isBlockedByAllowance),
            Z = (0, d.ET)(k.from),
            z = (0, r.useMemo)(
              () =>
                (!Z?.nonEvm && !m) ||
                (!!P && !g) ||
                (!!R && !x) ||
                (!!F && !v) ||
                (!!L && !T),
              [m, Z?.nonEvm, F, P, L, R, v, g, T, x]
            );
          (0, r.useEffect)(() => {
            (async () => {
              if (b) {
                let e = new e6.PublicKey(b);
                V((await tv.ZI.getBalance(e)) / e6.LAMPORTS_PER_SOL);
              }
            })();
          }, [b]);
          let q =
              to.h && !P && !R && !!k.from && k.from !== d.m5.Ethereum.chainId,
            { approve: J, isLoading: X } = tu(
              S?.contractAddress,
              S?.metadata?.tokenMessenger ||
                S?.metadata?.connectorAddress ||
                ty.B
            ),
            Y = (0, I.v9)((e) => e.AppEntity.appGlobalConfig),
            Q = (0, r.useMemo)(() => {
              let e =
                  Math.max(
                    Y?.minAmounts?.[`from_${S?.systemLabel}`] || 0,
                    Y?.minAmounts?.[`to_${j?.systemLabel}`] || 0
                  ) || Y?.minAmounts?.[S?.tokenValue],
                t = tw[S?.tokenValue];
              return S?.protocol === f.eD.UTS ? 1e-7 : e || t || 100;
            }, [Y?.minAmounts, S, j?.systemLabel]),
            { isConnectorBalanceLoading: ee, connectorBalance: et } = tT(
              {
                token: j?.contractAddress,
                address: j?.metadata?.connectorAddress,
                chainId: j?.chainId,
              },
              !j?.metadata?.connectorAddress
            ),
            en = i && +i > +o,
            ea = S && i && Q && +i < Q,
            { refetchAllowance: ei } = t_(i),
            es = a || en || ea || u || (W < 0.02 && P),
            er = (0, r.useMemo)(
              () =>
                p
                  ? "Enter Destination Address"
                  : u
                  ? "Invalid Address"
                  : X
                  ? (0, s.jsxs)(s.Fragment, {
                      children: [
                        (0, s.jsx)(tp.h, { className: tr().refresh }),
                        "Approving ",
                        S?.tokenValue,
                        " Amount in Wallet...",
                      ],
                    })
                  : W < 0.02 && P
                  ? "You should have at least 0.02 SOL to make a transaction"
                  : ea
                  ? `Min ${Q} ${S?.tokenValue}`
                  : !A && S?.chainId && S.chainId !== y
                  ? "Switch network"
                  : i
                  ? "pending" === B
                    ? "Confirming to send funds in wallet..."
                    : S?.protocol === f.eD.CCTP && H
                    ? "Approve USDC amount"
                    : S?.protocol === f.eD.UTS && H
                    ? `Approve ${S.tokenValue} amount`
                    : "Bridge"
                  : "Bridge",
              [
                p,
                u,
                X,
                W,
                P,
                en,
                ea,
                A,
                S?.chainId,
                S?.protocol,
                S?.tokenValue,
                y,
                i,
                B,
                H,
                Q,
              ]
            ),
            eo = (0, r.useCallback)(async () => {
              if (!A && S?.chainId && S.chainId !== y)
                return U({ chainId: S.chainId });
              if (
                (S?.protocol === f.eD.CCTP || S?.protocol === f.eD.UTS) &&
                H
              ) {
                _(tC(!0));
                try {
                  await J((0, tg.v)(i || "0", S.decimals)),
                    await ei(),
                    _(tC(!1)),
                    n();
                } catch (e) {
                  _(tC(!1)),
                    E({ type: "error", title: "Error", message: tb(e) }),
                    console.error(e);
                }
              } else n();
            }, [i, H, A, S, y, J, _, E, n, ei, U]);
          return j?.metadata?.connectorAddress &&
            !ee &&
            void 0 !== et &&
            i &&
            +i > +et
            ? (0, s.jsx)("button", {
                className: c()(tr().submit, t),
                disabled: !0,
                children: "Insufficient Funds in Destination Network",
              })
            : z
            ? (0, s.jsx)("button", {
                className: c()(tr().submit, t),
                onClick: () => {
                  if (to.h) return h();
                  _(
                    tc.L.actions.setWalletConnectChainId(d.m5.Ethereum.chainId)
                  );
                },
                children: "Connect Wallet",
              })
            : q
            ? (0, s.jsx)("button", {
                className: c()(tr().submit, t),
                onClick: () => {
                  if (q)
                    return window.open(
                      `https://metamask.app.link/dapp/${window.location.host}/bridge`,
                      "_blank"
                    );
                },
                children: "Choose Compatible Wallet",
              })
            : (0, s.jsx)("button", {
                className: c()(tr().submit, t),
                onClick: eo,
                disabled: !!es,
                children: er,
              });
        }),
        tN = n(54998);
      let tS = (e) => {
        let t = (0, I.v9)((e) => e.BridgeEntity.chains),
          n = (0, I.v9)((e) => e.BridgeEntity.tokens);
        return (
          !e ||
          isNaN(Number(e)) ||
          !Number(e) ||
          !n.from ||
          !n.to ||
          !t.from ||
          !t.to
        );
      };
      var tI = n(56553),
        tM = n(46503),
        tj = n(15703),
        tB = n(99728);
      function tE(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          [n, a] = (0, r.useState)();
        return (
          (0, r.useEffect)(() => {
            (async () => {
              a(await e());
            })();
          }, t),
          n
        );
      }
      var tA = n(47856),
        tP = n(43972),
        tR = n(32308),
        tL = n(55135),
        tD = JSON.parse(
          '{"version":"0.1.0","name":"ngl_bridge","constants":[{"name":"SEED","type":"string","value":"\\"anchor\\""}],"instructions":[{"name":"initialize","accounts":[{"name":"admin","isMut":true,"isSigner":true,"docs":["Bridge admin"]},{"name":"config","isMut":true,"isSigner":false,"docs":["Bridge config"]},{"name":"systemProgram","isMut":false,"isSigner":false}],"args":[{"name":"bridgeRouterAddress","type":"bytes"},{"name":"minBridgeAmount","type":"u64"},{"name":"feeCollectorVault","type":"publicKey"}]},{"name":"setBridgeConfig","accounts":[{"name":"admin","isMut":true,"isSigner":true,"docs":["Bridge admin"]},{"name":"config","isMut":true,"isSigner":false,"docs":["Bridge config"]}],"args":[{"name":"bridgeRouterAddress","type":"bytes"},{"name":"minBridgeAmount","type":"u64"},{"name":"feeCollectorVault","type":"publicKey"}]},{"name":"receivePhotonMsg","accounts":[{"name":"executor","isMut":true,"isSigner":true,"docs":["Executor wallet"]},{"name":"callAuthority","isMut":false,"isSigner":true,"docs":["Protocol call authority (from photon program)"]},{"name":"opInfo","isMut":false,"isSigner":false,"docs":["Provided by photon program"]},{"name":"authority","isMut":false,"isSigner":false,"docs":["Token authority"]},{"name":"mint","isMut":true,"isSigner":false,"docs":["Token mint (checked by core)"]},{"name":"user","isMut":false,"isSigner":false},{"name":"userVault","isMut":true,"isSigner":false,"docs":["User vault for token"]},{"name":"feeCollectorVault","isMut":true,"isSigner":false,"docs":["Fee collector vault for token"]},{"name":"config","isMut":false,"isSigner":false,"docs":["Bridge config"]},{"name":"coreConfig","isMut":false,"isSigner":false,"docs":["Core config"]},{"name":"coreAuthority","isMut":false,"isSigner":false,"docs":["Core authority"]},{"name":"coreProgram","isMut":false,"isSigner":false},{"name":"tokenProgram","isMut":false,"isSigner":false},{"name":"associatedTokenProgram","isMut":false,"isSigner":false},{"name":"systemProgram","isMut":false,"isSigner":false}],"args":[{"name":"opHash","type":"bytes"},{"name":"code","type":"bytes"},{"name":"params","type":"bytes"}]},{"name":"bridge","accounts":[{"name":"sender","isMut":false,"isSigner":true,"docs":["Sender wallet"]},{"name":"authority","isMut":false,"isSigner":false,"docs":["Token authority"]},{"name":"mint","isMut":true,"isSigner":false,"docs":["Token mint"]},{"name":"senderVault","isMut":true,"isSigner":false,"docs":["Sender vault"]},{"name":"config","isMut":false,"isSigner":false,"docs":["Bridge config"]},{"name":"coreConfig","isMut":false,"isSigner":false,"docs":["Core config"]},{"name":"protocolInfo","isMut":false,"isSigner":false,"docs":["Protocol info"]},{"name":"photonConfig","isMut":true,"isSigner":false,"docs":["Photon system config"]},{"name":"coreProgram","isMut":false,"isSigner":false},{"name":"photonProgram","isMut":false,"isSigner":false},{"name":"tokenProgram","isMut":false,"isSigner":false}],"args":[{"name":"toChainId","type":"u128"},{"name":"to","type":"bytes"},{"name":"amount","type":"u64"},{"name":"marker","type":"bytes"},{"name":"unwrap","type":"bool"}]}],"accounts":[{"name":"Config","type":{"kind":"struct","fields":[{"name":"admin","type":"publicKey"},{"name":"bridgeRouterAddress","type":{"array":["u8",20]}},{"name":"minBridgeAmount","type":"u64"},{"name":"feeCollectorVault","type":"publicKey"}]}}],"errors":[{"code":6000,"name":"InvalidProtocolId","msg":"InvalidProtocolId"},{"code":6001,"name":"InvalidAuthority","msg":"InvalidAuthority"},{"code":6002,"name":"InvalidMethodId","msg":"InvalidMethodId"},{"code":6003,"name":"InvalidParams","msg":"InvalidParams"},{"code":6004,"name":"InvalidPubkey","msg":"InvalidPubkey"},{"code":6005,"name":"MarkerTooLong","msg":"MarkerTooLong"},{"code":6006,"name":"AmountTooLow","msg":"AmountTooLow"},{"code":6007,"name":"InvalidBridgeAddress","msg":"InvalidBridgeAddress"},{"code":6008,"name":"InvalidSelector","msg":"InvalidSelector"},{"code":6009,"name":"InvalidUserAccount","msg":"InvalidUserAccount"},{"code":6010,"name":"InvalidMint","msg":"InvalidMint"}],"metadata":{"address":"br1JCj83uwQa4MtZ5g9C98PfGduMhJED3m4viYLAGUB"}}'
        ),
        tO = n(30056),
        tF = n(32139),
        tU = n(82957).Buffer;
      let tW = new e6.Connection(d.KR),
        tV = async (e) => {
          let {
            to: t,
            amount: n,
            isUnwrap: a,
            publicKey: i,
            chainIdTo: s,
            sendTransaction: r,
            tokenFrom: o,
          } = e;
          if (!i) return;
          let l = {
              [d.m5.Solana.chainId]: (e) =>
                "0x" + tU.from(new e6.PublicKey(e).toBuffer()).toString("hex"),
              [d.m5.TRON.chainId]: (e) =>
                (0, tO.E)(
                  [{ name: "_to", type: "address" }],
                  ["0x" + e3.O.address.toHex(e).slice(2)]
                ),
              [d.m5.TON.chainId]: (e) => {
                let t = tF.Address.parse(e),
                  n = t.hash.slice(0, t.hash.length).toString("hex"),
                  a = (0, tA.beginCell)()
                    .storeUint(t.workChain, 32)
                    .storeUint(BigInt(`0x${n}`), 256)
                    .endCell()
                    .toString()
                    .replace("x{", "")
                    .replace("}", "");
                return console.log("res", a), `0x${a}`;
              },
            },
            u = ty.N[o],
            c = new e6.PublicKey(u.routerAddressSol),
            p = new tL.$r(tD, c, { connection: tW }),
            m = (0, tP.MO)(
              new e6.PublicKey(u.mintAddress),
              i,
              void 0,
              u.tokenProgram
            ),
            y = tH(u.solBridgeProtocolId),
            _ = tR.utf8.encode("r0"),
            h = new e6.PublicKey("pccm961CjaR7T7Hcht9omrXQb9w54ntJo95FFT7N9AJ"),
            [g] = tL.rV.PublicKey.findProgramAddressSync(
              [_, tR.utf8.encode("CONFIG")],
              h
            ),
            [b] = tL.rV.PublicKey.findProgramAddressSync(
              [_, tR.utf8.encode("PROTOCOL"), y],
              h
            ),
            f = l[s]?.(t) || (0, tO.E)([{ name: "_to", type: "address" }], [t]);
          try {
            let e = await p.methods
                .bridge(
                  new tL.BN(s),
                  tH(f),
                  new tL.BN(1e6 * Number(n)),
                  tU.alloc(0),
                  a
                )
                .accounts({
                  sender: i,
                  authority: u.bridgeAuthorityAddress,
                  mint: u.mintAddress,
                  senderVault: m,
                  config: u.bridgeConfigAddress,
                  coreConfig: u.coreConfigAddress,
                  protocolInfo: b,
                  photonConfig: g,
                  coreProgram: new e6.PublicKey(u.coreProgramAddress),
                  photonProgram: h,
                  tokenProgram: u.tokenProgram,
                })
                .transaction(),
              t = await r(e, tW);
            return console.log(t, "TRANSACTION ID: "), t;
          } catch (e) {
            console.error("Bridge SOL -> EVM failed ", e);
            return;
          }
        };
      function tH(e) {
        return tU.from(e.replace("0x", ""), "hex");
      }
      let tG = async (e) => {
        let {
          to: t,
          amount: n,
          isUnwrap: a,
          publicKey: i,
          chainIdTo: s,
          sendTransaction: r,
          tokenFrom: o,
        } = e;
        if (!i) throw Error("Error while approving transfer");
        try {
          return await tV({
            to: t,
            amount: n,
            isUnwrap: a,
            publicKey: i,
            chainIdTo: s,
            sendTransaction: r,
            tokenFrom: o,
          });
        } catch (e) {
          throw (
            (console.error(e, "ERROR20"),
            Error("Error while approving transfer"))
          );
        }
      };
      var tK = function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
          return (
            "0x" +
            [...e]
              .map((e) => e.charCodeAt(0).toString(16).padStart(2, "0"))
              .join("")
              .padEnd(64, "0")
          );
        },
        t$ = n(12629);
      let tZ = {
          NGL: "TRrLNWGX9fpNmyE8MW7KpnPhxEHoAtPQXu",
          GORPLE: "TEVNfiScrfwcn7bwD1YmuK4QBpAgB4JNyH",
          GORPLES: "TEVNfiScrfwcn7bwD1YmuK4QBpAgB4JNyH",
        },
        tz = async (e) => {
          let {
            chainIdTo: t,
            _to: n,
            _amount: a,
            unwrap: i,
            marker: s,
            token: r,
          } = e;
          if (!e3.w.address) return;
          let o = await e3.O.transactionBuilder.triggerSmartContract(
              tZ[r],
              "bridge(uint256,bytes,uint256,bool,bytes32)",
              {},
              [
                { value: t, type: "uint256" },
                { value: n, type: "bytes" },
                { value: a, type: "uint256" },
                { value: i, type: "bool" },
                { value: s, type: "bytes32" },
              ],
              e3.w.address
            ),
            l = await e3.w.signTransaction(o.transaction),
            d = await e3.O.trx.sendRawTransaction(l);
          return console.log("txResponse", d), d.txid;
        };
      var tq = n(82957).Buffer;
      let tJ = async (e) => {
          let {
            to: t,
            amount: n,
            chainIdTo: a,
            chainIdToHex: i,
            tokenFrom: s,
            isUnwrap: r,
          } = e;
          try {
            let e = tK("Bridge"),
              o = (() => {
                if (a === d.m5.Solana.chainId)
                  return (
                    "0x" +
                    tq.from(new e6.PublicKey(t).toBuffer()).toString("hex")
                  );
                if (a === d.m5.TON.chainId) {
                  let e = tF.Address.parse(t),
                    n = e.hash.slice(0, e.hash.length).toString("hex"),
                    a = (0, tA.beginCell)()
                      .storeUint(e.workChain, 32)
                      .storeUint(BigInt(`0x${n}`), 256)
                      .endCell()
                      .toString()
                      .replace("x{", "")
                      .replace("}", "");
                  return console.log("res", a), `0x${a}`;
                }
                return (0, tO.E)([{ name: "_to", type: "address" }], [t]);
              })(),
              l = (0, t$.f)(n);
            return await tz({
              chainIdTo: i,
              _to: o,
              _amount: l,
              unwrap: r,
              marker: e,
              token: s,
            });
          } catch (e) {
            throw (
              (console.error(e, "ERROR24"),
              Error("Error while approving transfer"))
            );
          }
        },
        tX = async (e) => {
          let {
            chainIdTo: t,
            _to: n,
            _amount: a,
            unwrap: i,
            marker: s,
            senderAddress: r,
            tonConnectUI: o,
            contract: l,
          } = e;
          if (r)
            return new Promise((e, d) => {
              let u = {
                address: tA.Address.parse(r),
                send: async (t) => {
                  try {
                    let n = await o.sendTransaction({
                        messages: [
                          {
                            address: t.to.toString(),
                            amount: t.value.toString(),
                            payload: t.body?.toBoc().toString("base64"),
                          },
                        ],
                        validUntil: Date.now() + 3e5,
                      }),
                      a = tA.Cell.fromBase64(n.boc).hash().toString("hex");
                    console.log("hashHex", a), e(a);
                  } catch (e) {
                    console.log("error ton send", e), d(e);
                  }
                },
              };
              console.log("chainIdTo", t),
                l?.sendBridge(u, t, n, a, i, BigInt(s));
            });
        };
      var tY = n(82957).Buffer;
      let tQ = async (e) => {
        let {
            chainIdTo: t,
            to: n,
            amount: a,
            isUnwrap: i,
            tokenFrom: s,
            senderAddress: r,
            tonConnectUI: o,
            contract: l,
          } = e,
          u = (() => {
            let e = d.Nb.includes(t),
              a = t === d.m5.Solana.chainId;
            if (!e) return tY.from(n.slice(2).padStart(64, "0"), "hex");
            if (a) return tY.from(new e6.PublicKey(n).toBuffer());
            if (t === d.m5.TRON.chainId) {
              let e = e3.O.address.toHex(n).slice(2).padStart(64, "0");
              return console.log(e), tY.from(e, "hex");
            }
          })();
        if (u)
          try {
            let e = tK("Bridge"),
              n = (0, tA.beginCell)().storeBuffer(u).endCell().asSlice(),
              c = (0, t$.f)(a);
            return await tX({
              chainIdTo: d.Ty[t] || String(t),
              _to: n,
              _amount: c,
              unwrap: i,
              marker: e,
              token: s,
              senderAddress: r,
              tonConnectUI: o,
              contract: l,
            });
          } catch (e) {
            throw (
              (console.error(e, "ERROR34"),
              Error("Error while approving transfer"))
            );
          }
      };
      var t0 = n(61139),
        t1 = n.n(t0),
        t2 = n(67764),
        t6 = n.n(t2),
        t5 = n(82957).Buffer;
      let t3 = async (e) => {
          let {
            to: t,
            amount: n,
            signer: a,
            isUnwrap: i,
            chainIdTo: s,
            chainIdToHex: r,
            contractAddress: o,
            tokenFrom: l,
            value: u,
          } = e;
          try {
            if (!a) throw Error("ERROR14 signer is undefined");
            let e = l.includes("GORPLE") ? t1() : t6(),
              c = (0, tl.uN)({ address: o, abi: e, client: a }),
              p = {
                [d.m5.Solana.chainId]: (e) =>
                  "0x" +
                  t5.from(new e6.PublicKey(e).toBuffer()).toString("hex"),
                [d.m5.TRON.chainId]: (e) =>
                  (0, tO.E)(
                    [{ name: "_to", type: "address" }],
                    ["0x" + e3.O.address.toHex(e).slice(2)]
                  ),
                [d.m5.TON.chainId]: (e) => {
                  let t = tB.Address.parse(e),
                    n = t.hash.slice(0, t.hash.length).toString("hex"),
                    a = (0, tA.beginCell)()
                      .storeUint(t.workChain, 32)
                      .storeUint(BigInt(`0x${n}`), 256)
                      .endCell()
                      .toString()
                      .replace("x{", "")
                      .replace("}", "");
                  return `0x${a}`;
                },
              },
              m = tK("Bridge"),
              y =
                p[s]?.(t) || (0, tO.E)([{ name: "_to", type: "address" }], [t]),
              _ = (0, t$.f)(u ? "0" : n),
              h = (0, t$.f)(u || "0");
            return await c.write.bridge?.([r, y, _, i, m], { value: h });
          } catch (e) {
            throw (
              (console.error(e, "ERROR14"),
              Error("Error while approving transfer"))
            );
          }
        },
        t4 = () => {
          let e = (0, I.I0)(),
            { sendTransaction: t } = (0, O.d)(),
            [n] = (0, tM.dG)(),
            { client: a } = (function () {
              let { network: e } = (0, $.e)();
              return {
                client: tE(async () => {
                  if (e)
                    return new tB.TonClient({
                      endpoint: await (0, tj.getHttpEndpoint)({
                        network: e === tM.sX.MAINNET ? "mainnet" : "testnet",
                      }),
                    });
                }, [e]),
              };
            })(),
            { wallet: i } = (0, $.e)(),
            s = tE(async () => {
              if (!a || !i) return;
              let e = tI.Vo.fromAddress(tA.Address.parse(f.uN));
              return a.open(e);
            }, [a, i]),
            r = (0, tM.MW)(),
            o = r ? tA.Address.parse(r).toString({ urlSafe: !0 }) : void 0;
          return async (a) => {
            let { chainIdFrom: i } = a;
            return [900, 901].includes(i)
              ? tG({ ...a, sendTransaction: t })
              : i === d.m5.TRON.chainId
              ? tJ(a)
              : i === d.m5.TON.chainId
              ? tQ({ ...a, tonConnectUI: n, senderAddress: o, contract: s })
              : t3({ ...a, dispatch: e });
          };
        },
        t9 = (e, t, n, a) =>
          (e != d.ZP.chainId || t === d.ZP.chainId) &&
          ((e != d.ZP.chainId &&
            t == d.ZP.chainId &&
            "NGL" == n &&
            "NGL" == a) ||
            ((e == d.ZP.chainId ||
              t != d.ZP.chainId ||
              "NGL" != n ||
              "WNGL" != a) &&
              t === d.ZP.chainId &&
              e === d.m5.Solana.chainId));
      f.eD.CCM, f.eD.CCM;
      var t7 = n(41662),
        t8 = n(24836),
        ne = n(91167);
      let nt = () => {
        let e = (0, I.I0)(),
          { address: t, chainId: n } = (0, D.Z)(),
          { data: a } = (0, ne.useBalance)({ chainId: n, address: t });
        return (0, r.useCallback)(
          async (t) => {
            let {
              from: n,
              to: i,
              amount: s,
              chainIdTo: r,
              contractAddress: l,
              client: d,
              connectorAddress: u,
            } = t;
            try {
              if (!d?.account || !d?.chain)
                throw Error("ERROR14 signer is undefined");
              let t = d.chain,
                c = BigInt(r),
                p = (0, tl.uN)({ address: u || l, abi: S(), client: d }),
                [m, y] = await p.read.estimateBridgeFee([
                  c,
                  BigInt(0),
                  0,
                  "0x",
                ]),
                [_] = await p.read.estimateBridgeFee([c, y, 0, "0x"]);
              if (a?.value === 0n || (a?.value && _ > a?.value))
                throw Error(
                  `Insufficient funds for gas, still needed ${(0, q.t)(
                    Number((0, o.b)(_ - a?.value, a?.decimals ?? 18)),
                    5
                  )} ${a?.symbol}`
                );
              let h = await p.estimateGas.bridge([n, i, s, c, y, "0x", "0x"], {
                  value: _,
                  account: d.account,
                }),
                g = await p.write.bridge([n, i, s, c, y, "0x", "0x"], {
                  value: _,
                  chain: t,
                  account: d.account,
                  gas: h,
                });
              return e(e2.BridgeEntity.actions.setLoading("signed")), g;
            } catch (e) {
              throw Error(
                e instanceof Error
                  ? e?.message
                  : "Error while approving transfer"
              );
            }
          },
          [e, a]
        );
      };
      var nn = n(7194);
      let na = [
        {
          inputs: [
            { internalType: "address", name: "masterRouter", type: "address" },
            { internalType: "address", name: "priceFeed", type: "address" },
            {
              internalType: "address",
              name: "singletonFactory",
              type: "address",
            },
            {
              internalType: "uint16",
              name: "paymentTransferGasLimit",
              type: "uint16",
            },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        { inputs: [], name: "AccessControlBadConfirmation", type: "error" },
        {
          inputs: [
            { internalType: "address", name: "account", type: "address" },
            { internalType: "bytes32", name: "neededRole", type: "bytes32" },
          ],
          name: "AccessControlUnauthorizedAccount",
          type: "error",
        },
        {
          inputs: [
            { internalType: "address", name: "target", type: "address" },
          ],
          name: "AddressEmptyCode",
          type: "error",
        },
        {
          inputs: [
            { internalType: "address", name: "account", type: "address" },
          ],
          name: "AddressInsufficientBalance",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "implementation",
              type: "address",
            },
          ],
          name: "ERC1967InvalidImplementation",
          type: "error",
        },
        { inputs: [], name: "ERC1967NonPayable", type: "error" },
        { inputs: [], name: "EnforcedPause", type: "error" },
        { inputs: [], name: "ExpectedPause", type: "error" },
        { inputs: [], name: "FailedInnerCall", type: "error" },
        { inputs: [], name: "InvalidInitialization", type: "error" },
        { inputs: [], name: "NotInitializing", type: "error" },
        {
          inputs: [{ internalType: "address", name: "token", type: "address" }],
          name: "SafeERC20FailedOperation",
          type: "error",
        },
        { inputs: [], name: "SingletonRouter__E0", type: "error" },
        { inputs: [], name: "SingletonRouter__E1", type: "error" },
        { inputs: [], name: "SingletonRouter__E2", type: "error" },
        { inputs: [], name: "SingletonRouter__E3", type: "error" },
        { inputs: [], name: "SingletonRouter__E4", type: "error" },
        { inputs: [], name: "SingletonRouter__E5", type: "error" },
        { inputs: [], name: "SingletonRouter__E6", type: "error" },
        { inputs: [], name: "SingletonRouter__E7", type: "error" },
        { inputs: [], name: "SingletonRouter__E8", type: "error" },
        { inputs: [], name: "UUPSUnauthorizedCallContext", type: "error" },
        {
          inputs: [{ internalType: "bytes32", name: "slot", type: "bytes32" }],
          name: "UUPSUnsupportedProxiableUUID",
          type: "error",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: "bytes32",
              name: "underlyingTokenId",
              type: "bytes32",
            },
            {
              indexed: !1,
              internalType: "address",
              name: "tokenAddress",
              type: "address",
            },
            {
              indexed: !0,
              internalType: "address",
              name: "from",
              type: "address",
            },
            {
              indexed: !1,
              internalType: "bytes",
              name: "receiver",
              type: "bytes",
            },
            {
              indexed: !1,
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
            {
              indexed: !0,
              internalType: "uint256",
              name: "dstChainId",
              type: "uint256",
            },
          ],
          name: "Bridged",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: "address",
              name: "deployer",
              type: "address",
            },
            {
              indexed: !0,
              internalType: "bytes32",
              name: "underlyingTokenId",
              type: "bytes32",
            },
            {
              indexed: !1,
              internalType: "address",
              name: "tokenAddress",
              type: "address",
            },
            {
              indexed: !1,
              internalType: "string",
              name: "name",
              type: "string",
            },
            {
              indexed: !1,
              internalType: "string",
              name: "symbol",
              type: "string",
            },
            {
              indexed: !1,
              internalType: "uint256",
              name: "totalSupply",
              type: "uint256",
            },
            {
              indexed: !0,
              internalType: "uint256",
              name: "dstChainId",
              type: "uint256",
            },
          ],
          name: "DeployRequestSent",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: "uint256",
              name: "dstChainId",
              type: "uint256",
            },
            {
              indexed: !1,
              internalType: "uint64",
              name: "newDstDeployGas",
              type: "uint64",
            },
            {
              indexed: !0,
              internalType: "address",
              name: "caller",
              type: "address",
            },
          ],
          name: "DstDeployGasSet",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: "uint256",
              name: "dstChainId",
              type: "uint256",
            },
            {
              indexed: !1,
              internalType: "uint64",
              name: "newDstRedeemGas",
              type: "uint64",
            },
            {
              indexed: !0,
              internalType: "address",
              name: "caller",
              type: "address",
            },
          ],
          name: "DstRedeemGasSet",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: "uint256",
              name: "dstChainId",
              type: "uint256",
            },
            {
              indexed: !1,
              internalType: "bytes",
              name: "newDstSingletonRouterAddress",
              type: "bytes",
            },
            {
              indexed: !0,
              internalType: "address",
              name: "caller",
              type: "address",
            },
          ],
          name: "DstSingletonRouterSet",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: "bytes32",
              name: "underlyingTokenId",
              type: "bytes32",
            },
            {
              indexed: !0,
              internalType: "address",
              name: "receiver",
              type: "address",
            },
            {
              indexed: !1,
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
            {
              indexed: !1,
              internalType: "uint256",
              name: "nonce",
              type: "uint256",
            },
          ],
          name: "ExecutionFailed",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !1,
              internalType: "uint64",
              name: "version",
              type: "uint64",
            },
          ],
          name: "Initialized",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: "bytes32",
              name: "underlyingTokenId",
              type: "bytes32",
            },
            {
              indexed: !0,
              internalType: "address",
              name: "tokenAddress",
              type: "address",
            },
            {
              indexed: !1,
              internalType: "string",
              name: "name",
              type: "string",
            },
            {
              indexed: !1,
              internalType: "string",
              name: "symbol",
              type: "string",
            },
            {
              indexed: !1,
              internalType: "uint256",
              name: "totalSupply",
              type: "uint256",
            },
          ],
          name: "NewTokenDeployed",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: "address",
              name: "deployer",
              type: "address",
            },
            {
              indexed: !0,
              internalType: "bytes",
              name: "tokenAddressIndexed",
              type: "bytes",
            },
            {
              indexed: !1,
              internalType: "bytes",
              name: "tokenAddress",
              type: "bytes",
            },
            {
              indexed: !0,
              internalType: "uint256",
              name: "srcChainId",
              type: "uint256",
            },
            {
              indexed: !1,
              internalType: "uint256[]",
              name: "dstChainIds",
              type: "uint256[]",
            },
          ],
          name: "OffchainDeployRequestSent",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !1,
              internalType: "address",
              name: "account",
              type: "address",
            },
          ],
          name: "Paused",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: "bytes32",
              name: "underlyingTokenId",
              type: "bytes32",
            },
            {
              indexed: !0,
              internalType: "address",
              name: "tokenAddress",
              type: "address",
            },
            {
              indexed: !0,
              internalType: "address",
              name: "receiver",
              type: "address",
            },
            {
              indexed: !1,
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "Redeemed",
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
          anonymous: !1,
          inputs: [
            {
              indexed: !1,
              internalType: "address",
              name: "account",
              type: "address",
            },
          ],
          name: "Unpaused",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: "address",
              name: "implementation",
              type: "address",
            },
          ],
          name: "Upgraded",
          type: "event",
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
          name: "MANAGER_ROLE",
          outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "MASTER_ROUTER",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "PAUSER_ROLE",
          outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "PRICE_FEED",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "SINGLETON_FACTORY",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "UPGRADE_INTERFACE_VERSION",
          outputs: [{ internalType: "string", name: "", type: "string" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "tokenAddress", type: "address" },
            { internalType: "bytes", name: "protocolPayload", type: "bytes" },
            {
              components: [
                {
                  internalType: "uint256",
                  name: "dstChainId",
                  type: "uint256",
                },
                { internalType: "uint256", name: "amount", type: "uint256" },
                { internalType: "bytes", name: "receiver", type: "bytes" },
              ],
              internalType: "struct ISingletonRouter.BridgeRequest[]",
              name: "requests",
              type: "tuple[]",
            },
          ],
          name: "bridge",
          outputs: [
            { internalType: "uint256", name: "bridgedAmount", type: "uint256" },
            { internalType: "uint256", name: "paymentAmount", type: "uint256" },
          ],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "tokenAddress", type: "address" },
            { internalType: "bytes", name: "protocolPayload", type: "bytes" },
            {
              components: [
                {
                  internalType: "uint256",
                  name: "dstChainId",
                  type: "uint256",
                },
                { internalType: "uint256", name: "amount", type: "uint256" },
                { internalType: "bytes", name: "receiver", type: "bytes" },
              ],
              internalType: "struct ISingletonRouter.BridgeRequest[]",
              name: "requests",
              type: "tuple[]",
            },
          ],
          name: "deployAndBridge",
          outputs: [
            { internalType: "uint256", name: "bridgedAmount", type: "uint256" },
            { internalType: "uint256", name: "paymentAmount", type: "uint256" },
          ],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "dstChainId", type: "uint256" },
          ],
          name: "dstDeployGas",
          outputs: [
            {
              internalType: "uint64",
              name: "dstDeployGasAmount",
              type: "uint64",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "dstChainId", type: "uint256" },
          ],
          name: "dstRedeemGas",
          outputs: [
            {
              internalType: "uint64",
              name: "dstRedeemGasAmount",
              type: "uint64",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "dstChainId", type: "uint256" },
          ],
          name: "dstSingletonRouter",
          outputs: [
            {
              internalType: "bytes",
              name: "dstSingletonRouterAddress",
              type: "bytes",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "singletonRouterAddress",
              type: "address",
            },
            { internalType: "bytes1", name: "messageType", type: "bytes1" },
            { internalType: "bytes", name: "localParams", type: "bytes" },
          ],
          name: "execute",
          outputs: [{ internalType: "uint8", name: "opResult", type: "uint8" }],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256[]",
              name: "dstChainIds",
              type: "uint256[]",
            },
            { internalType: "bytes", name: "protocolPayload", type: "bytes" },
          ],
          name: "getBridgeFees",
          outputs: [
            {
              internalType: "uint256[]",
              name: "bridgeFeeAmounts",
              type: "uint256[]",
            },
            {
              internalType: "uint256",
              name: "totalBridgeFeeAmount",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256[]",
              name: "dstChainIds",
              type: "uint256[]",
            },
            { internalType: "bytes", name: "protocolPayload", type: "bytes" },
          ],
          name: "getDeployAndBridgeFees",
          outputs: [
            {
              internalType: "uint256[]",
              name: "deployAndBridgeFeeAmounts",
              type: "uint256[]",
            },
            {
              internalType: "uint256",
              name: "totalDeployAndBridgeFeeAmounts",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256[]",
              name: "dstChainIds",
              type: "uint256[]",
            },
            { internalType: "bytes", name: "protocolPayload", type: "bytes" },
          ],
          name: "getDeployFees",
          outputs: [
            {
              internalType: "uint256[]",
              name: "deployFeeAmounts",
              type: "uint256[]",
            },
            {
              internalType: "uint256",
              name: "totalDeployFeeAmount",
              type: "uint256",
            },
          ],
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
          inputs: [
            { internalType: "address", name: "defaultAdmin", type: "address" },
          ],
          name: "initialize",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "underlyingTokenId",
              type: "bytes32",
            },
            { internalType: "address", name: "receiver", type: "address" },
            { internalType: "uint256", name: "amount", type: "uint256" },
            { internalType: "uint256", name: "retryNonce", type: "uint256" },
          ],
          name: "isExecutionFailed",
          outputs: [{ internalType: "bool", name: "isFailed", type: "bool" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "pause",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "paused",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "proxiableUUID",
          outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "bytes32", name: "role", type: "bytes32" },
            {
              internalType: "address",
              name: "callerConfirmation",
              type: "address",
            },
          ],
          name: "renounceRole",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "underlyingTokenId",
              type: "bytes32",
            },
            { internalType: "address", name: "receiver", type: "address" },
            { internalType: "uint256", name: "amount", type: "uint256" },
            { internalType: "uint256", name: "nonce", type: "uint256" },
          ],
          name: "retryRedeem",
          outputs: [{ internalType: "bool", name: "success", type: "bool" }],
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
          inputs: [],
          name: "router",
          outputs: [
            { internalType: "address", name: "routerAddress", type: "address" },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "srcChainId", type: "uint256" },
            { internalType: "bytes", name: "tokenAddress", type: "bytes" },
            {
              internalType: "uint256[]",
              name: "dstChainIds",
              type: "uint256[]",
            },
            { internalType: "bytes", name: "protocolPayload", type: "bytes" },
          ],
          name: "sendOffchainDeployRequest",
          outputs: [
            { internalType: "uint256", name: "paymentAmount", type: "uint256" },
          ],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256[]",
              name: "dstChainIds",
              type: "uint256[]",
            },
            {
              internalType: "uint64[]",
              name: "newDstDeployGas",
              type: "uint64[]",
            },
          ],
          name: "setDstDeployGas",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256[]",
              name: "dstChainIds",
              type: "uint256[]",
            },
            {
              internalType: "uint64[]",
              name: "newDstRedeemGas",
              type: "uint64[]",
            },
          ],
          name: "setDstRedeemGas",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256[]",
              name: "dstChainIds",
              type: "uint256[]",
            },
            {
              internalType: "bytes[]",
              name: "newDstSingletonRouter",
              type: "bytes[]",
            },
          ],
          name: "setDstSingletonRouter",
          outputs: [],
          stateMutability: "nonpayable",
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
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "underlyingTokenId",
              type: "bytes32",
            },
          ],
          name: "token",
          outputs: [
            {
              internalType: "address",
              name: "tokenAddressById",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "tokenAddress", type: "address" },
          ],
          name: "tokenId",
          outputs: [
            {
              internalType: "bytes32",
              name: "tokenIdByAddress",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "unpause",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newImplementation",
              type: "address",
            },
            { internalType: "bytes", name: "data", type: "bytes" },
          ],
          name: "upgradeToAndCall",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
      ];
      var ni = n(82957).Buffer;
      let ns = async (e) => {
          let {
              to: t,
              amount: n,
              chainIdTo: a,
              contractAddress: i,
              evmAddress: s,
              nativeBalance: r,
              client: l,
              dispatch: u,
            } = e,
            c = {
              [d.m5.Solana.chainId]: (e) =>
                "0x" + ni.from(new e6.PublicKey(e).toBuffer()).toString("hex"),
            },
            p = c[a]?.(t) || t;
          try {
            if (!l?.account || !l?.chain)
              throw Error("ERROR14 signer is undefined");
            let e = ty.B,
              s = (c[a]?.(t) && BigInt(d.Ty[a])) || BigInt(a),
              m = (0, tl.uN)({ address: e, abi: na, client: l }),
              [y, _] = await m.read.getBridgeFees([[s], "0x"]);
            if (r?.value === 0n || (r?.value && _ > r?.value))
              throw Error(
                `Insufficient funds for gas, still needed ${(0, q.t)(
                  Number((0, o.b)(_ - r?.value, r?.decimals ?? 18)),
                  5
                )} ${r?.symbol}`
              );
            let h = await m.write.bridge([i, "0x", [[s, n, p]]], {
              value: [_],
            });
            return (
              u(e2.BridgeEntity.actions.setLoading("signed")), { txHash: h }
            );
          } catch (e) {
            throw Error(
              e instanceof Error ? e?.message : "Error while approving transfer"
            );
          }
        },
        nr = () => {
          let e = (0, I.I0)(),
            { sendSolDeploy: t } = (0, nn.HI)(),
            { address: n, chainId: a } = (0, D.Z)(),
            { data: i } = (0, ne.useBalance)({ chainId: a, address: n });
          return async (a) => {
            let {
              to: s,
              amount: r,
              chainIdTo: o,
              chainIdFrom: l,
              contractAddress: d,
              client: u,
            } = a;
            return [900, 901].includes(l)
              ? t({
                  amount: r,
                  isBridge: !0,
                  evmAddress: n,
                  mintAddress: d,
                  dstChainIds: [o],
                })
              : ns({
                  to: s,
                  amount: r,
                  chainIdTo: o,
                  contractAddress: d,
                  evmAddress: n,
                  nativeBalance: i,
                  client: u,
                  dispatch: e,
                });
          };
        },
        no = (e) => {
          let { destinationAddress: t, addressIsInvalid: n, amount: a } = e,
            i = (0, M.TL)(),
            s = (0, I.v9)((e) => e.BridgeEntity.chains),
            o = (0, I.v9)((e) => e.BridgeEntity.tokens),
            l = (0, I.v9)((e) => e.BridgeEntity.isFromTon),
            { allTokensObj: u } = (0, w.e)(),
            { wallet: c, sendTransaction: m } = (0, O.d)(),
            { addressFrom: y, isToNonEvm: _ } = eM(),
            { data: h } = (0, L.useWalletClient)(),
            g = u[o.from],
            b = u[o.to],
            { willReceive: x } = (0, tN.w)(
              Number(a),
              void 0,
              g?.protocol === f.eD.UTS
            ),
            T = t4(),
            v = (0, t8.l)(),
            C = nt(),
            k = nr(),
            N = (0, th.Xq)();
          return (0, r.useCallback)(async () => {
            let e, r;
            e = _ ? t : t || y;
            let o = g?.isSimpleMode,
              l = (0, d.ET)(s.to),
              u = l?.chainIdHex;
            if (n || !e || !u || !g || !b || !a) return;
            let m = g.protocol,
              w = m === f.eD.CCTP,
              S = m === f.eD.CCM,
              I = m === f.eD.UTS,
              M = g?.metadata?.bridgeWrapper,
              j = {
                to: e,
                isUnwrap: t9(s.from, s.to, g.tokenValue, b.tokenValue),
                chainIdTo: s.to,
                chainIdFrom: s.from,
                chainIdToHex: u,
                amount: M ? "0" : a,
                contractAddress: M || g.contractAddress,
                publicKey: c.publicKey,
                tokenFrom: g?.tokenValue,
              };
            try {
              if ((i(e2.BridgeEntity.actions.setLoading("pending")), w))
                r = await v({
                  ...j,
                  from: y,
                  tokenMessenger: g.metadata?.tokenMessenger,
                  destinationDomain: l?.metadata?.cctpDomain,
                });
              else if (S)
                r = await T({ ...j, value: M ? a : void 0, signer: h });
              else if (I && h && y && !o)
                r = await C({
                  ...j,
                  from: y,
                  client: h,
                  amount: (0, t7.vz)(a, g.decimals),
                  connectorAddress: g.metadata?.connectorAddress,
                });
              else if (I && y && o) {
                let e = await k({
                  ...j,
                  from: y,
                  client: h,
                  amount: (0, t7.vz)(a, g.decimals),
                  connectorAddress: g.metadata?.connectorAddress,
                });
                if (e?.error) throw Error(e.error);
                r = e?.txHash || e;
              }
              i(e2.BridgeEntity.actions.setLoading("fulfilled"));
              let n =
                "string" == typeof r
                  ? r
                  : r?.hash ||
                    r?.payload?.hash ||
                    r?.payload?.transactionHash ||
                    r?.payload;
              if (n) {
                try {
                  let t = localStorage.getItem("all_bridge_operations"),
                    r = t ? JSON.parse(t) : {};
                  r[y] = r[y] || [];
                  let o = {
                    id: "",
                    src_tx_hash: n,
                    dst_chain_id: String(s.to),
                    amount: String(BigInt(Number(a) * 10 ** g.decimals)),
                    created_at: new Date().toISOString(),
                    arrived_at: "",
                    updated_at: "",
                    bridge_protocol: String(w ? "cctp" : "entangle"),
                    dst_tx_hash: null,
                    metadata: {
                      claimed: !1,
                      claimable: !1,
                      claimed_at: "",
                      attestation: "",
                      claimable_at: "",
                      message_hash: "",
                      attestation_status: "",
                      message_bytes: "",
                    },
                    status: p.n8.ON_GOING,
                    token: g.tokenValue,
                    src_chain_id: String(s.from),
                    sender: y,
                    recipient: e,
                  };
                  r[y].unshift(o),
                    i(
                      e2.BridgeEntity.actions.addBridgeOperations({
                        address: y,
                        operations: [o],
                      })
                    ),
                    localStorage.setItem(
                      "all_bridge_operations",
                      JSON.stringify(r)
                    );
                } catch (e) {
                  console.error(e);
                }
                i(
                  e2.BridgeEntity.actions.setCurrentOperationClientData({
                    txHash: n,
                    sourceChainId: s.from,
                    destChainId: s.to,
                    tokenFrom: g.systemLabel,
                    tokenTo: b.systemLabel,
                    timestamp: new Date().getTime(),
                    sent: a,
                    willReceive: x,
                    protocol: g.protocol,
                    status: "pending",
                    sender: y,
                    recipient: t || y,
                    dstTxHash: null,
                  })
                );
              }
            } catch (e) {
              i(e2.BridgeEntity.actions.setLoading("rejected")),
                N({ type: "error", title: "Error", message: tb(e) }),
                console.error(e);
            }
          }, [
            _,
            s.to,
            s.from,
            n,
            g,
            b,
            a,
            c.publicKey,
            l,
            m,
            t,
            y,
            i,
            h,
            v,
            T,
            C,
            k,
            x,
            N,
          ]);
        };
      var nl = (0, r.memo)((e) => {
          let {
              amount: t,
              error: n,
              destinationAddress: a,
              currentTokenBalanceFormatted: i,
              protocol: o,
            } = e,
            { address: l } = (0, eS.useAccount)(),
            d = (0, I.v9)((e) => e.BridgeEntity.bridgeLoading),
            u = (0, I.v9)((e) => e.BridgeEntity.isToSolana),
            c = (0, I.v9)((e) => e.BridgeEntity.isToNoble),
            { executionFee: p } = (0, tN.w)(Number(t), void 0, o === f.eD.UTS),
            [m, y] = (0, r.useState)(!1);
          (0, r.useEffect)(() => {
            y(!0),
              setTimeout(() => {
                y(!1);
              }, 1e3);
          }, [p]);
          let _ = tS(t),
            h = e4(),
            g = h || _ || n || "pending" === d || n || m,
            b = (c || u) && !a,
            x = no({ amount: t, destinationAddress: a, addressIsInvalid: h });
          return (0, s.jsx)(tk, {
            className: ta().form__submit,
            onSubmit: x,
            disabled: g,
            isInvalid: h,
            isEnterDestAddress: b,
            balance: i || "",
            amount: t,
            address: l,
          });
        }),
        nd = n(15911),
        nu = n.n(nd),
        nc = n(68176),
        np = n(99376),
        nm = (0, r.memo)(function () {
          let { push: e } = (0, np.useRouter)();
          return (0, s.jsxs)("div", {
            className: nu().maintenancePage,
            children: [
              (0, s.jsx)("div", {
                className: nu().maintenancePageTitle,
                children: "System Upgrade",
              }),
              (0, s.jsxs)("div", {
                className: nu().maintenancePageContent,
                children: [
                  "E-bridge is offline for the coming days due to new system upgrades.",
                  (0, s.jsx)("br", {}),
                  "We expect to be back online soon.",
                ],
              }),
              (0, s.jsx)(nc.z, {
                onClick: () => {
                  e("/");
                },
                type: "primary",
                children: "Go Back",
              }),
            ],
          });
        });
      let ny = (e, t) => {
        let { address: n } = (0, D.Z)(),
          a = (0, I.v9)((e) => e.BridgeEntity.chains),
          i = (0, I.v9)((e) => e.BridgeEntity.tokens),
          s = (0, I.v9)((e) => e.BridgeEntity.bridgeLoading),
          o = eI(s),
          [l, d] = (0, r.useState)(p.MR.NotConnectedWallet),
          { address: u } = (0, O.d)(),
          c = (0, M.TL)(),
          m = eI(a.from),
          y = eI(a.to);
        return (
          (0, r.useEffect)(
            () =>
              (n || to.h || u) && (u || !to.h)
                ? (l === p.MR.NotConnectedWallet && d(p.MR.ConnectedWallet),
                  a.to && i.to && a.from && i.from && Number(e))
                  ? d(p.MR.TargetReady)
                  : a.from && i.from && l !== p.MR.BridgeSuccess
                  ? d(p.MR.SourceReady)
                  : void 0
                : d(p.MR.NotConnectedWallet),
            [n, e, l, u, a.to, a.from, i.to, i.from]
          ),
          (0, r.useEffect)(() => {
            "pending" === s && d(p.MR.BridgePending),
              "pending" === o && "signed" === s && d(p.MR.BridgePending),
              "signed" === o &&
                "fulfilled" === s &&
                (d(p.MR.BridgeSuccess), t("")),
              "rejected" === s && d(p.MR.BridgeFailed);
          }, [s, o, t]),
          (0, r.useEffect)(() => {
            l === p.MR.BridgeSuccess &&
              (a.from !== m || a.to !== y) &&
              d(p.MR.SourceReady);
          }, [a.from, a.to, c, m, y, l]),
          l
        );
      };
      var n_ = n(45384),
        nh = n.n(n_),
        ng = n(26838),
        nb = n.n(ng),
        nf = n(22094),
        nx = n.n(nf);
      let nT = (e) => {
        let { className: t } = e;
        return (0, s.jsxs)("svg", {
          className: t,
          xmlns: "http://www.w3.org/2000/svg",
          width: "346",
          height: "92",
          viewBox: "0 0 304 82",
          fill: "none",
          children: [
            (0, s.jsxs)("g", {
              clipPath: "url(#clip0_4325_1271)",
              children: [
                (0, s.jsx)("path", {
                  d: "M87.3065 84.8995L87.3065 2.57104L101.899 2.57104L101.899 84.8995",
                  stroke: "#40424D",
                  strokeWidth: "0.732906",
                }),
                (0, s.jsx)("path", {
                  d: "M201.973 84.8995L201.973 2.57104L216.566 2.57104L216.566 84.8995",
                  stroke: "#40424D",
                  strokeWidth: "0.732906",
                }),
                (0, s.jsx)("line", {
                  x1: "75.9214",
                  y1: "24.3281",
                  x2: "76.0459",
                  y2: "24.3281",
                  stroke: "black",
                  strokeWidth: "0.183227",
                }),
                (0, s.jsx)("line", {
                  x1: "76.1948",
                  y1: "23.6541",
                  x2: "76.1948",
                  y2: "58.9158",
                  stroke: "#40424D",
                  strokeWidth: "0.54968",
                }),
                (0, s.jsx)("line", {
                  x1: "112.93",
                  y1: "14.8347",
                  x2: "112.93",
                  y2: "58.9119",
                  stroke: "#40424D",
                  strokeWidth: "0.54968",
                }),
                (0, s.jsx)("line", {
                  x1: "190.798",
                  y1: "14.6799",
                  x2: "190.798",
                  y2: "58.9104",
                  stroke: "#40424D",
                  strokeWidth: "0.54968",
                }),
                (0, s.jsx)("line", {
                  x1: "124.25",
                  y1: "22.4277",
                  x2: "124.25",
                  y2: "58.9159",
                  stroke: "#40424D",
                  strokeWidth: "0.54968",
                }),
                (0, s.jsx)("line", {
                  x1: "179.86",
                  y1: "22.4277",
                  x2: "179.86",
                  y2: "58.9159",
                  stroke: "#40424D",
                  strokeWidth: "0.54968",
                }),
                (0, s.jsx)("line", {
                  x1: "135.197",
                  y1: "27.2534",
                  x2: "135.197",
                  y2: "58.9123",
                  stroke: "#40424D",
                  strokeWidth: "0.54968",
                }),
                (0, s.jsx)("line", {
                  x1: "168.662",
                  y1: "27.2534",
                  x2: "168.662",
                  y2: "58.9123",
                  stroke: "#40424D",
                  strokeWidth: "0.54968",
                }),
                (0, s.jsx)("line", {
                  x1: "157.333",
                  y1: "29.7104",
                  x2: "157.333",
                  y2: "58.9163",
                  stroke: "#40424D",
                  strokeWidth: "0.54968",
                }),
                (0, s.jsx)("line", {
                  x1: "146.394",
                  y1: "29.7104",
                  x2: "146.394",
                  y2: "58.9163",
                  stroke: "#40424D",
                  strokeWidth: "0.54968",
                }),
                (0, s.jsx)("line", {
                  x1: "64.9985",
                  y1: "34.9214",
                  x2: "64.9985",
                  y2: "58.9147",
                  stroke: "#40424D",
                  strokeWidth: "0.54968",
                }),
                (0, s.jsx)("line", {
                  x1: "227.787",
                  y1: "23.4189",
                  x2: "227.787",
                  y2: "58.9873",
                  stroke: "#40424D",
                  strokeWidth: "0.54968",
                }),
                (0, s.jsx)("line", {
                  x1: "238.856",
                  y1: "34.7661",
                  x2: "238.856",
                  y2: "58.9894",
                  stroke: "#40424D",
                  strokeWidth: "0.54968",
                }),
                (0, s.jsx)("path", {
                  d: "M0 58.9483C23.399 58.0029 73.5684 45.1962 87.3059 2.6062",
                  stroke: "#40424D",
                  strokeWidth: "0.785505",
                }),
                (0, s.jsx)("path", {
                  d: "M303.745 58.8365C280.379 57.8923 230.282 45.1031 216.565 2.57104",
                  stroke: "#40424D",
                  strokeWidth: "0.785505",
                }),
                (0, s.jsx)("path", {
                  d: "M0.12207 58.9172H87.3022",
                  stroke: "#40424D",
                  strokeWidth: "0.54968",
                }),
                (0, s.jsx)("path", {
                  d: "M0.12207 68.1921H87.3022",
                  stroke: "#40424D",
                  strokeWidth: "0.54968",
                }),
                (0, s.jsx)("path", {
                  d: "M101.96 58.9172H201.972",
                  stroke: "#40424D",
                  strokeWidth: "0.54968",
                }),
                (0, s.jsx)("path", {
                  d: "M101.96 68.1921H201.972",
                  stroke: "#40424D",
                  strokeWidth: "0.54968",
                }),
                (0, s.jsx)("path", {
                  d: "M216.566 58.9172H303.746",
                  stroke: "#40424D",
                  strokeWidth: "0.54968",
                }),
                (0, s.jsx)("path", {
                  d: "M216.566 68.1921H303.746",
                  stroke: "#40424D",
                  strokeWidth: "0.54968",
                }),
                (0, s.jsx)("path", {
                  d: "M101.899 2.6123C117.876 27.3722 166.121 48.9891 201.974 2.53564",
                  stroke: "#40424D",
                  strokeWidth: "0.785505",
                }),
              ],
            }),
            (0, s.jsx)("defs", {
              children: (0, s.jsx)("clipPath", {
                id: "clip0_4325_1271",
                children: (0, s.jsx)("rect", {
                  width: "304",
                  height: "81.5364",
                  fill: "white",
                  transform: "translate(0 0.187012)",
                }),
              }),
            }),
          ],
        });
      };
      var nv = n(64007),
        nC = n.n(nv);
      let nw = (e) => {
          let { participant: t } = e;
          return (0, s.jsx)("div", {
            className: nC().participant,
            children: t?.networkIcon
              ? (0, s.jsxs)(s.Fragment, {
                  children: [
                    (0, s.jsx)("div", {
                      className: nC().participant__box,
                      children: (0, s.jsx)(m.default, {
                        className: nC().participant__icon,
                        width: 36,
                        height: 36,
                        src: t.networkIcon,
                        alt: t.networkText,
                      }),
                    }),
                    (0, s.jsxs)("div", {
                      className: nC().participant__info,
                      children: [
                        (0, s.jsx)("div", {
                          className: nC().participant__network,
                          children: t.networkText,
                        }),
                        (0, s.jsx)("div", {
                          className: nC().participant__token,
                          children: t.tokenValue,
                        }),
                      ],
                    }),
                  ],
                })
              : (0, s.jsxs)(s.Fragment, {
                  children: [
                    (0, s.jsx)("div", {
                      className: nC().participant__box,
                      children: (0, s.jsx)("div", {
                        className: c()(
                          nC().participant__icon,
                          nC().participant__icon_empty
                        ),
                      }),
                    }),
                    (0, s.jsxs)("div", {
                      className: nC().participant__info,
                      children: [
                        (0, s.jsx)("div", {
                          className: nC().participant__network,
                          children: "Network",
                        }),
                        (0, s.jsx)("div", {
                          className: nC().participant__token,
                          children: "Token",
                        }),
                      ],
                    }),
                  ],
                }),
          });
        },
        nk = {
          [p.MR.NotConnectedWallet]: { processClassName: "" },
          [p.MR.ConnectedWallet]: {
            processClassName: nx().process__icon_connected,
          },
          [p.MR.SourceReady]: {
            processClassName: nx().process__icon_sourceready,
          },
          [p.MR.TargetReady]: {
            processClassName: nx().process__icon_targetready,
          },
          [p.MR.BridgePending]: {
            processClassName: nx().process__icon_targetready,
          },
          [p.MR.BridgeSuccess]: {
            processClassName: nx().process__icon_targetready,
          },
          [p.MR.BridgeFailed]: {
            processClassName: nx().process__icon_targetready,
          },
        },
        nN = (e) => {
          let { status: t } = e,
            { processClassName: n } = nk[t],
            a = (0, I.v9)((e) => e.BridgeEntity.chains),
            i = (0, I.v9)((e) => e.BridgeEntity.tokens),
            o = (0, I.v9)((e) => e.BridgeEntity.currentOperationClientData),
            { allTokensObj: l } = (0, w.e)(),
            u = o?.sourceChainId || a.from,
            p = o?.destChainId || a.to,
            y = o?.tokenFrom || i.from,
            _ = o?.tokenTo || i.to,
            h = (0, r.useMemo)(
              () => ({
                ...(((0, d.GW)(Number(u))
                  ? (0, d.GW)(Number(u))
                  : (0, d.GW)(u)) || {}),
                ...(l[y] || {}),
              }),
              [l, u, y]
            ),
            g = (0, r.useMemo)(
              () => ({
                ...(((0, d.GW)(Number(p))
                  ? (0, d.GW)(Number(p))
                  : (0, d.GW)(p)) || {}),
                ...(l[_] || {}),
              }),
              [l, p, _]
            );
          return (0, s.jsxs)("div", {
            className: nx().process,
            children: [
              (0, s.jsxs)("div", {
                className: nx().process__participants,
                children: [
                  (0, s.jsx)(nw, { participant: h }),
                  (0, s.jsx)("div", {
                    className: c()(nx().process__loader),
                    children: (0, s.jsx)(m.default, {
                      fill: !0,
                      sizes: "100vw",
                      src: "/_next/static/media/40x19_white_static.9c1aecdc.svg",
                      alt: "Bridge process loading icon",
                    }),
                  }),
                  (0, s.jsx)(nw, { participant: g }),
                ],
              }),
              (0, s.jsx)(nT, { className: c()(nx().process__icon, n) }),
            ],
          });
        };
      var nS = n(89877),
        nI = n(42792),
        nM = n(94585),
        nj = n(14892),
        nB = n.n(nj);
      let nE = () => {
        let { writeContract: e } = (0, nM.useWriteContract)(),
          { address: t } = (0, D.Z)();
        return async (n) => {
          let {
            dstChainId: a,
            messageTransmitterAddress: i,
            attestationHex: s,
            messageHex: r,
          } = n;
          try {
            return new Promise((n, o) => {
              e(
                {
                  abi: nB(),
                  address: i,
                  functionName: "receiveMessage",
                  account: t,
                  args: [r, s],
                },
                {
                  onSuccess: (e) => {
                    console.log(e, "SUCCESS"),
                      (0, td.e)(ew.gb, { chainId: a, hash: e }),
                      n(e);
                  },
                  onError: (e) => {
                    console.error(e, "ERROR"), o(e);
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
        };
      };
      n(38227);
      var nA = n(1197),
        nP = n(77816),
        nR = n(15408),
        nL = n(72263),
        nD = n(82957).Buffer;
      let nO = new e6.Connection(d.KR),
        nF = () => {
          let e = (0, nR.O)();
          return async (t) => {
            let {
                recipient: n,
                sourceChainId: a,
                tokenFromContractAddress: i,
                attestationHex: s,
                messageHex: r,
              } = t,
              { messageTransmitterProgram: o, tokenMessengerMinterProgram: l } =
                (0, nP.CV)(e),
              u = new e6.PublicKey(f.H0),
              c = new e6.PublicKey(n),
              p = String(d.ET(a)?.metadata?.cctpDomain);
            if (!p) throw Error("Invalid sourceChainId");
            let m = (0, nP.Yb)(r),
              y = await (0, nP.dS)(
                {
                  messageTransmitterProgram: o,
                  tokenMessengerMinterProgram: l,
                },
                u,
                i,
                p,
                m
              ),
              _ = [
                {
                  isSigner: !1,
                  isWritable: !1,
                  pubkey: y.tokenMessengerAccount.publicKey,
                },
                {
                  isSigner: !1,
                  isWritable: !1,
                  pubkey: y.remoteTokenMessengerKey.publicKey,
                },
                {
                  isSigner: !1,
                  isWritable: !0,
                  pubkey: y.tokenMinterAccount.publicKey,
                },
                {
                  isSigner: !1,
                  isWritable: !0,
                  pubkey: y.localToken.publicKey,
                },
                { isSigner: !1, isWritable: !1, pubkey: y.tokenPair.publicKey },
                { isSigner: !1, isWritable: !0, pubkey: c },
                {
                  isSigner: !1,
                  isWritable: !0,
                  pubkey: y.custodyTokenAccount.publicKey,
                },
                { isSigner: !1, isWritable: !1, pubkey: nA.H_ },
                {
                  isSigner: !1,
                  isWritable: !1,
                  pubkey: y.tokenMessengerEventAuthority.publicKey,
                },
                { isSigner: !1, isWritable: !1, pubkey: l.programId },
              ],
              h = (await (0, nL.D0)(nO, c)).owner.toBase58(),
              g = await o.methods
                .receiveMessage({
                  message: nD.from(r.replace("0x", ""), "hex"),
                  attestation: nD.from(s.replace("0x", ""), "hex"),
                })
                .accounts({
                  payer: new e6.PublicKey(h),
                  caller: new e6.PublicKey(h),
                  authorityPda: y.authorityPda,
                  messageTransmitter: y.messageTransmitterAccount.publicKey,
                  usedNonces: y.usedNonces,
                  receiver: l.programId,
                  systemProgram: e6.SystemProgram.programId,
                })
                .remainingAccounts(_)
                .rpc();
            return console.log("\n\nreceiveMessage Tx: ", g), g;
          };
        };
      var nU = n(5854),
        nW = n(26665),
        nV = n(75948),
        nH = n(83066),
        nG = n(82957).Buffer;
      let nK = [["/circle.cctp.v1.MsgReceiveMessage", nU.N4]],
        n$ = () => {
          let { address: e } = (0, nV.Os)();
          return async (t) => {
            let { messageHex: n, attestationSignature: a } = t;
            if (window) {
              if (!n || !a) throw Error("Message and attestation are required");
              await window.keplr.enable(d.m5.Noble.chainId);
              let t = window.getOfflineSigner(d.m5.Noble.chainId),
                i = await nH.SigningStargateClient.connectWithSigner(
                  d.m5.Noble.rpcUrl,
                  t,
                  {
                    gasPrice: nH.GasPrice.fromString("0.025uusdc"),
                    registry: new nW.Registry(nK),
                  }
                ),
                s = new Uint8Array(nG.from(n.replace("0x", ""), "hex")),
                r = new Uint8Array(nG.from(a.replace("0x", ""), "hex")),
                o = await i.signAndBroadcast(
                  e,
                  [
                    {
                      typeUrl: "/circle.cctp.v1.MsgReceiveMessage",
                      value: { from: e, message: s, attestation: r },
                    },
                  ],
                  { amount: [{ denom: "uusdc", amount: "0" }], gas: "200000" },
                  ""
                );
              console.log(
                `Minted on Noble: https://mintscan.io/noble-testnet/tx/${o.transactionHash}`
              );
            }
          };
        },
        nZ = async (e) => {
          let t,
            n,
            { messageHex: a, attestationHex: i, sourceChainId: s, hash: r } = e;
          if (i && a) (t = i), (n = a);
          else {
            let e = (0, d.ET)(s),
              a = await fetch(
                `/api/proxy/iris?domain=${e?.metadata?.cctpDomain}&hash=${r}`
              ),
              i = await a.json(),
              { attestation: o, message: l } = i?.messages[0];
            (t = o), (n = l);
          }
          return { attestationHexResult: t, messageHexResult: n };
        },
        nz = () => {
          let e = nE(),
            t = nF(),
            n = n$();
          return async (a) => {
            let {
                hash: i,
                dstChainId: s,
                messageTransmitterAddress: r,
                recipient: o,
                sourceChainId: l,
                tokenFromContractAddress: u,
                attestationHex: c,
                messageHex: p,
              } = a,
              { attestationHexResult: m, messageHexResult: y } = await nZ({
                messageHex: p,
                attestationHex: c,
                sourceChainId: l,
                hash: i,
              });
            if ([900, 901].includes(Number(s))) {
              if (!o) throw Error("Recipient is required");
              return t({
                recipient: o,
                sourceChainId: l,
                tokenFromContractAddress: u,
                sourceTxHash: i,
                attestationHex: m,
                messageHex: y,
              });
            }
            return d.m5.Noble.chainId === s
              ? n({ messageHex: i, attestationSignature: c })
              : e({
                  messageTransmitterAddress: r,
                  dstChainId: s,
                  attestationHex: m,
                  messageHex: y,
                });
          };
        };
      var nq = n(37060);
      let nJ = () => {
          let e = (0, M.TL)(),
            t = (0, I.v9)((e) => e.BridgeEntity.chains),
            n = (0, I.v9)((e) => e.BridgeEntity.tokens),
            { allTokensObj: a, allTokensByChainId: s } = (0, w.e)(),
            l = (0, I.v9)((e) => e.BridgeEntity.currentOperationClientData),
            d = (0, I.v9)((e) => e.BalanceEntity.balances),
            u = (0, I.v9)((e) => e.BridgeEntity.destinationAddress),
            { addressFrom: c } = eM(),
            p = l?.metadata?.additional_account || l?.recipient || u || c || "",
            m = l?.destChainId || t?.to,
            y = a[l?.tokenTo || n.to],
            _ = (0, nq.R)(y?.tokenValue);
          (0, r.useEffect)(
            () => (
              clearInterval(i),
              p &&
                (i = setInterval(() => {
                  e(ej.k.getBalances({ address: p, chainId: +m, tokens: [y] }));
                }, eE.jI)),
              () => {
                clearInterval(i);
              }
            ),
            [s, p, m, e]
          );
          let h = d[p]?.[y?.systemLabel || ""] || 0n,
            g = Number((0, o.b)(h, y?.decimals || 18)) || 0;
          return {
            balanceToDisplay: Number((0, q.t)(Number(g), 2)),
            balanceToUSDDisplay: Number((0, q.t)(g * (_ || 0), 2)),
          };
        },
        nX = {
          0: "",
          "0_1": "You’ll receive",
          "0_2": "You'll send",
          "1_only": "You sent",
          1: "Receiving...",
          2: "Receiving...",
          "3_only": "Receiving...",
          3: "Receiving...",
          4: "Receiving...",
          5: "Received",
        },
        nY = {
          [f.eD.CCM]: nX,
          [f.eD.UTS]: nX,
          [f.eD.CCTP]: {
            0: "",
            "0_1": "You'll send",
            "0_2": "You'll send",
            "0_3": "You'll send",
            1: "You'll send",
            2: "You're sening",
            "3_only": "USDC sent from source chain.",
            3: "You sent",
            "4_only": "Claimable USDC",
            4: "Claimable USDC",
            5: "Claimed USDC",
          },
        };
      var nQ = n(87970);
      let n0 = (0, r.memo)((e) => {
        let {
            step: t,
            hash: n,
            protocol: a,
            tokenFrom: i,
            amountFrom: o,
            dstChainId: u,
            sourceChainId: m,
          } = e,
          y = (0, M.TL)(),
          { allTokensObj: _ } = (0, w.e)(),
          { connectWallet: h, connected: g } = (0, O.d)(),
          { connectWallet: b, connected: x } = (0, K.H)(),
          T = nY[a][t],
          v = (0, I.v9)((e) => e.BridgeEntity.claimLoading),
          C = (0, I.v9)((e) => e.BridgeEntity.tokens),
          k = (0, I.v9)((e) => e.BridgeEntity.currentOperationClientData),
          N = _[k?.tokenTo || C.to],
          S = N?.protocol === f.eD.UTS,
          j = (0, I.v9)((e) => e.BridgeEntity.chains),
          { chainId: B } = (0, D.Z)(),
          E = k?.destChainId || j.to,
          A = (0, r.useMemo)(
            () =>
              [900, 901].includes(Number(E))
                ? g
                : E === d.m5.Noble.chainId
                ? x
                : B === E,
            [B, g, E, x]
          ),
          P = nz(),
          { switchChain: R } = (0, l.useSwitchChain)(),
          L = (0, r.useCallback)(() => {
            y(
              e2.BridgeEntity.actions.setCurrentOperationClientData({
                ...k,
                arrivedAt: new Date().getTime(),
                status: p.n8.COMPLETE,
                metadata: { ...k?.metadata, claimed: !0 },
              })
            );
            let e = localStorage.getItem("claimedPositions"),
              t = e ? JSON.parse(e) : {};
            (t[n] = new Date().getTime()),
              localStorage.setItem("claimedPositions", JSON.stringify(t));
          }, [k, y, n]),
          F = (0, th.Xq)(),
          U = (0, r.useCallback)(() => {
            [900, 901].includes(Number(E)) && h().then(),
              E === d.m5.Noble.chainId && b().then(),
              R({ chainId: E });
          }, [b, h, E, R]),
          W = (0, r.useCallback)(async () => {
            if (A && m && u)
              try {
                y(e2.BridgeEntity.actions.setClaimLoading(!0)),
                  await P({
                    hash: n,
                    dstChainId: u,
                    messageTransmitterAddress: N?.metadata?.messageTransmitter,
                    sourceChainId: m,
                    tokenFromContractAddress: i?.contractAddress,
                    recipient: k?.recipient,
                    attestationHex: k?.metadata?.attestation,
                    messageHex: k?.metadata?.message_bytes,
                  }),
                  setTimeout(() => {
                    L(), y(e2.BridgeEntity.actions.setClaimLoading(!0));
                  }, 1500);
              } catch (e) {
                console.error(e),
                  y(e2.BridgeEntity.actions.setClaimLoading(!0)),
                  e?.message.includes("Nonce already used")
                    ? (L(),
                      F({
                        type: "error",
                        title: "Claiming failure",
                        message: "This transaction was already claimed",
                      }))
                    : F({
                        type: "error",
                        title: "Claiming failure",
                        message:
                          "Something went wrong, please trying again later or contact support",
                      });
              }
          }, [
            y,
            P,
            F,
            L,
            n,
            u,
            m,
            A,
            i?.contractAddress,
            N?.metadata?.messageTransmitter,
            k?.recipient,
            k?.metadata?.attestation,
            k?.metadata?.message_bytes,
          ]);
        (0, r.useEffect)(() => {
          let e = setInterval(() => {
            i?.tokenValue &&
              (k?.destChainId || j.to) &&
              y(
                nQ.G.getCommission({
                  chainId: k?.destChainId || j.to,
                  tokenName: i?.tokenValue,
                })
              );
          }, 5e3);
          return () => {
            clearInterval(e);
          };
        }, [j.to, k?.destChainId, y, i?.tokenValue]);
        let { willReceiveDisplay: V } = (0, tN.w)(
            Number(o),
            i?.tokenValue,
            a === f.eD.UTS
          ),
          H = a !== f.eD.CCM || ["0_2", "1_only"].includes(t) ? o : V,
          { balanceToDisplay: G, balanceToUSDDisplay: $ } = nJ();
        return (0, s.jsxs)("div", {
          className: c()(nb().destination, nb().padding),
          children: [
            !!T &&
              !!o &&
              (0, s.jsxs)("div", {
                className: c()(nb().row, nb().green),
                children: [
                  (0, s.jsx)("div", { className: nb().label, children: T }),
                  (0, s.jsxs)("div", {
                    className: nb().value,
                    children: [H && (0, q.t)(H, 2), " ", i?.tokenValue],
                  }),
                ],
              }),
            (0, s.jsxs)("div", {
              className: c()(nb().row),
              children: [
                (0, s.jsx)("div", {
                  className: nb().label,
                  children: "Destination balance:",
                }),
                (0, s.jsxs)("div", {
                  className: nb().value,
                  children: [
                    (0, s.jsxs)("div", {
                      children: [G, " ", N?.tokenValue || "NGL"],
                    }),
                    !S &&
                      (0, s.jsxs)("div", {
                        className: c()(nb().sup),
                        children: ["≈ $", $],
                      }),
                  ],
                }),
              ],
            }),
            (0, s.jsxs)("div", {
              children: [
                !A &&
                  a === f.eD.CCTP &&
                  t.startsWith("4") &&
                  (0, s.jsx)(nc.z, {
                    disabled: v,
                    className: nb().switch,
                    onClick: U,
                    styleFullWidth: !0,
                    stylesLessCurved: !0,
                    type: "primary",
                    variant: "outlined",
                    children: "Switch Network to Claim",
                  }),
                A &&
                  a === f.eD.CCTP &&
                  String(t)?.startsWith("4") &&
                  k?.status !== "completed" &&
                  (0, s.jsx)(nc.z, {
                    disabled: v,
                    className: nb().buttonOutlined,
                    onClick: W,
                    styleFullWidth: !0,
                    stylesLessCurved: !0,
                    type: "primary",
                    children: "Claim USDC",
                  }),
              ],
            }),
          ],
        });
      });
      n0.displayName = "FundsPosition";
      var n1 = n(37681),
        n2 = n(50339),
        n6 = n(80361);
      let n5 = () =>
          (0, r.useMemo)(() => {
            {
              let e = window.localStorage.getItem("claimedPositions");
              return e ? JSON.parse(e) : {};
            }
          }, []),
        n3 = (e) => {
          let { allTokensObj: t } = (0, w.e)(),
            n = n5(),
            a = (0, I.v9)((e) => e.BridgeEntity.currentOperationClientData),
            i = (0, I.v9)((e) => e.BridgeEntity.tokens),
            s = (0, I.v9)((e) => e.BridgeEntity.bridgeLoading),
            o = (0, I.v9)((e) => e.BridgeEntity.isBlockedByAllowance),
            l = (0, I.v9)((e) => e.BridgeEntity.approveRequestOpen),
            d = t[i.from],
            u = tS(e),
            c = d?.metadata?.connectorAddress,
            p = a?.protocol || d?.protocol;
          return (0, r.useMemo)(
            () =>
              a?.metadata?.step
                ? String(a?.metadata?.step)
                : a?.metadata?.claimed
                ? "5"
                : a?.metadata?.claimable
                ? "4"
                : p !== f.eD.CCM && (p !== f.eD.UTS || c)
                ? p === f.eD.CCTP || (p === f.eD.UTS && c)
                  ? n?.[a?.txHash]
                    ? "5"
                    : "fulfilled" === s || a?.txHash
                    ? "3"
                    : "signed" === s
                    ? "2"
                    : "pending" === s
                    ? "1"
                    : l
                    ? "0_2"
                    : u
                    ? "0_0"
                    : o
                    ? "0_1"
                    : "0_3"
                  : "0_0"
                : a?.txHash
                ? "1"
                : u
                ? "0_0"
                : ["pending", "fulfilled", "signed"].includes(s)
                ? "0_2"
                : "0_1",
            [a, p, c, u, s, n, l, o]
          );
        },
        n4 = { entangle: f.eD.CCM, cctp: f.eD.CCTP, UTS: f.eD.UTS },
        n9 = (e, t, n) => {
          let a = (0, f.j7)(
              +e.src_chain_id || e.src_chain_id,
              e.token,
              t,
              e.metadata.src_underlying_token
            ),
            i = (0, f.j7)(
              +e.dst_chain_id || e.dst_chain_id,
              e.token,
              t,
              e.metadata.dst_underlying_token
            ),
            s =
              (e?.amount &&
                (0, o.b)(BigInt(e.amount), a?.decimals || n || 18)) ||
              0;
          return {
            txHash: e.src_tx_hash,
            dstTxHash: e.dst_tx_hash,
            sourceChainId:
              d.Jf[+e.src_chain_id] ||
              (+e.src_chain_id ? +e.src_chain_id : e.src_chain_id),
            destChainId:
              d.Jf[+e.dst_chain_id] ||
              (+e.dst_chain_id ? +e.dst_chain_id : e.dst_chain_id),
            tokenFrom: a?.systemLabel || null,
            tokenTo: i?.systemLabel || null,
            timestamp: new Date(e.created_at).getTime(),
            arrivedAt: e.arrived_at ? new Date(e.arrived_at).getTime() : null,
            sent: String(s),
            willReceive: 0,
            protocol: n4[e.bridge_protocol] || f.eD.CCM,
            metadata: e.metadata,
            status: e.status,
            recipient: e.recipient,
            sender: e.sender,
          };
        },
        n7 = (e) => {
          let { status: t, amount: n } = e,
            a = (0, r.useRef)(),
            { allTokensObj: i, allTokensByChainId: o } = (0, w.e)(),
            l = (0, I.I0)(),
            { goBackState: d } = (0, n6.vU)(),
            u = (0, n2.a)(768),
            c = (0, I.v9)((e) => e.BridgeEntity.currentOperationClientData),
            [p, { data: m }] = (0, nI.Km)();
          (0, r.useEffect)(() => {
            if (m?.common_bridge_operations?.[0]) {
              let e = m?.common_bridge_operations?.[0],
                t = n9(e, o),
                n = c?.txHash === e.src_tx_hash ? { ...c, ...t } : t;
              l(e2.BridgeEntity.actions.setCurrentOperationClientData(n));
            }
          }, [m]);
          let y = (0, I.v9)((e) => e.BridgeEntity.chains),
            _ = (0, I.v9)((e) => e.BridgeEntity.tokens),
            h = i[c?.tokenFrom || _.from];
          (0, r.useEffect)(() => {
            if (
              (clearTimeout(a.current),
              !c?.metadata?.claimed && c?.metadata?.step !== "5")
            )
              return (
                c?.txHash &&
                  (p({ address: c.txHash }),
                  (a.current = setInterval(() => {
                    p({ address: c.txHash });
                  }, 5e3))),
                () => {
                  a.current && clearTimeout(a.current);
                }
              );
          }, [c?.txHash]);
          let g = n5(),
            b = n3(n);
          return (0, s.jsx)("div", {
            className: nb().status,
            children: (0, s.jsxs)("div", {
              className: nb().status__container,
              children: [
                (0, s.jsx)(nN, { status: t }),
                (0, s.jsxs)("div", {
                  className: nb().wrapper,
                  children: [
                    (0, s.jsxs)("div", {
                      className: nb().padding,
                      children: [
                        c?.timestamp &&
                          (0, s.jsx)(n1.c, {
                            createdAt: c?.timestamp || void 0,
                            updatedAt: c?.arrivedAt || g?.[c?.txHash],
                            isFinished:
                              c?.status === "complete" ||
                              c?.status === "claimed",
                          }),
                        (0, s.jsx)(nS.C1, {
                          step: b || "0",
                          sourceChainId: c?.sourceChainId || y.from,
                          destChainId: c?.destChainId || y.to,
                          src_hash: c?.txHash || "",
                          dest_hash: c?.dstTxHash || "",
                          protocol: h?.protocol || f.eD.CCM,
                        }),
                      ],
                    }),
                    (0, s.jsx)("div", { className: nb().wrapperDivider }),
                    !c &&
                      (0, s.jsx)(n0, {
                        step: b || "0",
                        protocol: h?.protocol || f.eD.CCM,
                        hash: null,
                        sourceChainId: y.from,
                        dstChainId: y.to,
                        amountFrom: Number(n),
                        tokenFrom: h || void 0,
                      }),
                    !!c &&
                      (0, s.jsx)(n0, {
                        step: b || "0",
                        protocol: c.protocol || f.eD.CCM,
                        hash: c.txHash,
                        sourceChainId: c?.sourceChainId || null,
                        dstChainId: c?.destChainId || null,
                        amountFrom: Number(c?.sent) || 0,
                        tokenFrom: h || void 0,
                      }),
                    u &&
                      (0, s.jsx)("div", {
                        className: nb().startWrapper,
                        children: (0, s.jsx)(nc.z, {
                          type: "primary",
                          onClick: d,
                          stylesLessCurved: !0,
                          styleHigher: !0,
                          styleFullWidth: !0,
                          className: nb().startButton,
                          children: "Start Transaction",
                        }),
                      }),
                  ],
                }),
              ],
            }),
          });
        };
      var n8 = n(66905),
        ae = n.n(n8);
      let at = (0, r.memo)((e) => {
        let { value: t, onChange: n, tabs: a, className: i } = e;
        return (0, s.jsx)("ul", {
          className: c()(ae().tabs, i),
          children: a.map((e) =>
            (0, s.jsx)(
              "li",
              {
                className: ae().li,
                children: (0, s.jsxs)("h2", {
                  className: c()(ae().item, {
                    [ae().item_active]: t === e.value,
                  }),
                  onClick: () => n(e.value),
                  children: [
                    e.label,
                    !!e.amount &&
                      (0, s.jsx)("span", {
                        className: c()({ [ae().amount]: t === e.value }),
                        children: ` (${e.amount})`,
                      }),
                  ],
                }),
              },
              e.value
            )
          ),
        });
      });
      at.displayName = "Tabs";
      var an = n(41235),
        aa = n.n(an),
        ai = n(41424),
        as = n.n(ai),
        ar = n(26357);
      let ao = (0, r.memo)((e) => {
        let { amount: t } = e;
        return (0, s.jsx)("div", {
          className: as().root,
          children: (0, s.jsxs)("div", {
            className: as().text,
            children: [
              "Your total claimable USDC is",
              (0, s.jsxs)("div", {
                className: as().innerBox,
                children: [
                  (0, s.jsx)(m.default, {
                    width: 16,
                    height: 16,
                    src: ar.default,
                    alt: "Usdc icon",
                  }),
                  (0, q.t)(t, 2),
                ],
              }),
            ],
          }),
        });
      });
      ao.displayName = "ClaimBlock";
      let al = (e) => ("11100000000000000501" === e ? "900" : e);
      var ad = n(89930),
        au = n.n(ad);
      let ac = (e) => {
          let t = +new Date() - +new Date(e),
            n = Math.floor(t / 6e4),
            a = Math.floor(t / 36e5),
            i = Math.floor(t / 864e5);
          if (n < 60)
            return 0 == n
              ? "<1 min ago"
              : `${n} ${1 === n ? "min" : "mins"} ago`;
          if (a < 24) {
            let e = n % 60;
            return `${a} hour${a > 1 ? "s" : ""} ${
              e > 0 ? `${e} mins` : ""
            } ago`;
          }
          {
            let e = a % 24;
            return `${i} ${i > 1 ? "days" : "day"} ${
              e > 0 ? `${e} hour${e > 1 ? "s" : ""}` : ""
            } ago`;
          }
        },
        ap = (e) => {
          let { ...t } = e;
          return (0, s.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 12 13",
            ...t,
            children: (0, s.jsx)("path", {
              fill: "#797979",
              fillRule: "evenodd",
              d: "M.195 6.5c0-.26.21-.47.47-.47h8.847L6.655 3.173a.47.47 0 0 1 .666-.666l3.66 3.66a.47.47 0 0 1 0 .666l-3.66 3.66a.47.47 0 0 1-.666-.665L9.512 6.97H.665a.47.47 0 0 1-.47-.47Z",
              clipRule: "evenodd",
            }),
          });
        };
      var am = n(5137),
        ay = n.n(am);
      let a_ = (e) => {
        let { ...t } = e;
        return (0, s.jsxs)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 16 16",
          ...t,
          children: [
            (0, s.jsx)("mask", {
              id: "a",
              width: "16",
              height: "16",
              x: "0",
              y: "0",
              maskUnits: "userSpaceOnUse",
              children: (0, s.jsx)("path", {
                fill: "#D9D9D9",
                d: "M0 0h16v16H0z",
              }),
            }),
            (0, s.jsx)("g", {
              mask: "url(#a)",
              children: (0, s.jsx)("path", {
                fill: "#06E097",
                d: "m8 10.037-3.77-3.77.703-.702L8 8.632l3.066-3.067.703.702-3.77 3.77Z",
              }),
            }),
          ],
        });
      };
      var ah = n(37184),
        ag = n.n(ah),
        ab = n(8983),
        af = n(73513);
      let ax = (e) => {
          e.stopPropagation();
        },
        aT = (0, r.memo)((e) => {
          let { label: t, chainId: n, txHash: a, link: i, className: o } = e,
            [l, u] = (0, r.useState)(!1),
            p = (0, d.ET)(n),
            y = a.toLocaleLowerCase(),
            _ = (0, r.useCallback)(
              (e) => {
                e.stopPropagation(),
                  navigator.clipboard.writeText(y),
                  u(!0),
                  setTimeout(() => {
                    u(!1);
                  }, 3e3);
              },
              [y]
            ),
            h = (0, r.useMemo)(
              () =>
                l
                  ? `${String(y).slice(0, 2)}...${String(y).slice(-4)}`
                  : `${String(y).slice(0, 4)}....${String(y).slice(-4)}`,
              [l, y]
            );
          return (0, s.jsxs)("div", {
            className: c()(ag().root, o),
            children: [
              (0, s.jsx)("span", { className: ag().label, children: t }),
              (0, s.jsxs)("div", {
                className: ag().content,
                children: [
                  (0, s.jsxs)("button", {
                    className: c()(ag().copy, { [ag().copy_active]: l }),
                    onClick: _,
                    children: [
                      (0, s.jsx)(m.default, {
                        className: ag().copy__chain,
                        alt: `${p?.name} Icon`,
                        src: p?.icon || "",
                        width: 16,
                        height: 16,
                      }),
                      (0, s.jsx)("span", {
                        className: c()(ag().copy__hash, {
                          [ag().copy__hash_active]: l,
                        }),
                        children: h,
                      }),
                      l
                        ? (0, s.jsx)("span", {
                            className: ag().copy__text,
                            children: "copied",
                          })
                        : (0, s.jsx)(af.T, { className: ag().copy__icon }),
                    ],
                  }),
                  (0, s.jsx)("a", {
                    onClick: ax,
                    className: ag().link,
                    href: i,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: (0, s.jsx)(ab.A, { className: ag().link__icon }),
                  }),
                ],
              }),
            ],
          });
        });
      aT.displayName = "TxInfo";
      let av = (e) => {
          e.stopPropagation();
        },
        aC = (0, r.memo)((e) => {
          let { txs: t, onToggle: n } = e,
            [a, i] = (0, r.useState)(!1),
            o = (0, r.useCallback)(
              (e) => {
                e.stopPropagation();
                let t = !a;
                i(t), n?.(t);
              },
              [a, n]
            );
          return (0, s.jsxs)("div", {
            onClick: av,
            className: c()(ay().root, { [ay().root_open]: a }),
            children: [
              (0, s.jsxs)("div", {
                className: ay().header,
                children: [
                  (0, s.jsx)(
                    aT,
                    {
                      label: t[0].label,
                      chainId: t[0].chainId,
                      txHash: t[0].txHash,
                      link: t[0].link,
                      className: ay().item,
                    },
                    t[0].id
                  ),
                  t.length > 1 &&
                    (0, s.jsx)("button", {
                      className: c()(ay().button, { [ay().button_open]: a }),
                      onClick: o,
                      children: (0, s.jsx)(a_, {
                        className: c()(ay().button__icon, {
                          [ay().button__icon_open]: a,
                        }),
                      }),
                    }),
                ],
              }),
              a &&
                (0, s.jsx)("div", {
                  className: ay().content,
                  children: t
                    .slice(1)
                    .map((e) =>
                      (0, s.jsx)(
                        aT,
                        {
                          label: e.label,
                          chainId: e.chainId,
                          txHash: e.txHash,
                          link: e.link,
                          className: ay().item,
                        },
                        e.id
                      )
                    ),
                }),
            ],
          });
        });
      aC.displayName = "Spoiler";
      var aw = n(57552);
      let ak = (0, r.memo)((e) => {
        let { item: t, switchTab: n, onHeightChange: a } = e,
          {
            status: i,
            created_at: l,
            token: u,
            dst_chain_id: y,
            src_chain_id: _,
            amount: h,
            bridge_protocol: g,
            src_tx_hash: b,
            dst_tx_hash: x,
            metadata: T,
          } = t,
          v = (0, I.I0)(),
          C = al(_),
          k = al(y),
          { allTokensByChainId: N } = (0, w.e)(),
          S = (0, f.j7)(C, u, N, T.src_underlying_token),
          M = (0, d.ET)(C),
          j = (0, d.ET)(k),
          B = (0, r.useMemo)(() => {
            let e = [];
            return (
              "cctp" === g &&
                (x &&
                  e.push({
                    id: 1,
                    label: "Destination Tx",
                    chainId: k,
                    txHash: x,
                    link: (0, aw.gE)(x, k, "tx"),
                  }),
                b &&
                  e.push({
                    id: 2,
                    label: "Source Tx",
                    chainId: C,
                    txHash: b,
                    link: (0, aw.gE)(b, C, "tx"),
                  })),
              ("entangle" === g || "UTS" === g) &&
                (x &&
                  e.push({
                    id: 1,
                    label: "Destination Tx",
                    chainId: k,
                    txHash: x,
                    link: (0, aw.gE)(x, k, "tx"),
                  }),
                T?.operation_two_hash &&
                  e.push({
                    id: 2,
                    label: "Operation Second Tx",
                    chainId: k,
                    txHash: T.operation_two_hash,
                    link: `#`,
                  }),
                T?.operation_one_hash &&
                  e.push({
                    id: 2,
                    label: "Operation First Tx",
                    chainId: k,
                    txHash: T.operation_one_hash,
                    link: `https://hub.entangle.fi/msg/${T.operation_one_hash}`,
                  }),
                b &&
                  e.push({
                    id: 4,
                    label: "Source Tx",
                    chainId: C,
                    txHash: b,
                    link: (0, aw.gE)(b, C, "tx"),
                  })),
              e
            );
          }, [g, x, b, k, C, T.operation_two_hash, T.operation_one_hash]),
          E = (0, r.useCallback)(() => {
            v(e2.BridgeEntity.actions.setCurrentOperationClientData(n9(t, N))),
              n?.();
          }, [v, t, N, n]),
          A = (0, r.useMemo)(() => {
            let e = localStorage.getItem("claimedPositions");
            return e ? JSON.parse(e) : {};
          }, [])[b]
            ? "claimed"
            : i;
        return S
          ? (0, s.jsx)("div", {
              className: au().root,
              onClick: E,
              children: (0, s.jsxs)("div", {
                className: au().wrapper,
                children: [
                  (0, s.jsxs)("div", {
                    className: au().header,
                    children: [
                      (0, s.jsx)("div", {
                        className: c()(au().badge, au()[`badge_${A}`]),
                        children: p.aq[A],
                      }),
                      (0, s.jsx)("span", {
                        className: au().time,
                        children: ac(l),
                      }),
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    className: au().content,
                    children: [
                      (0, s.jsxs)("div", {
                        className: au().token,
                        children: [
                          S?.tokenIcon
                            ? (0, s.jsx)(m.default, {
                                className: au().token__icon,
                                alt: `${S?.tokenText} Icon`,
                                src: S.tokenIcon || "",
                                width: 16,
                                height: 16,
                              })
                            : (0, s.jsx)(Y.I, {
                                address: S.contractAddress,
                                diameter: 16,
                              }),
                          (0, s.jsx)("span", {
                            className: au().token__value,
                            children: `${(0, q.t)(
                              +(0, o.b)(BigInt(h), S?.decimals || 18),
                              2
                            )} ${S?.tokenText}`,
                          }),
                        ],
                      }),
                      (0, s.jsxs)("div", {
                        className: au().chains,
                        children: [
                          (0, s.jsxs)("div", {
                            className: au().chain,
                            children: [
                              (0, s.jsx)(m.default, {
                                className: au().chain__icon,
                                alt: `${M?.name} Icon`,
                                src: M?.icon || "",
                                width: 16,
                                height: 16,
                              }),
                              (0, s.jsx)("span", {
                                children: M?.name && M?.name.split(" ")[0],
                              }),
                            ],
                          }),
                          (0, s.jsx)(ap, { className: au().chains__arrow }),
                          (0, s.jsxs)("div", {
                            className: au().chain,
                            children: [
                              (0, s.jsx)(m.default, {
                                className: au().chain__icon,
                                alt: `${j?.name} Icon`,
                                src: j?.icon || "",
                                width: 16,
                                height: 16,
                              }),
                              (0, s.jsx)("span", {
                                children: j?.name && j?.name.split(" ")[0],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, s.jsx)(aC, { txs: B, onToggle: a }),
                ],
              }),
            })
          : null;
      });
      ak.displayName = "OperationCard";
      let aN = () =>
          (0, s.jsx)("div", {
            className: au().root,
            children: (0, s.jsxs)("div", {
              className: au().wrapper,
              children: [
                (0, s.jsxs)("div", {
                  className: "flex w-full items-center justify-between",
                  children: [
                    (0, s.jsx)(eh.O, { width: 80, height: 16, radius: 3 }),
                    (0, s.jsx)(eh.O, { width: 90, height: 16, radius: 3 }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  className: "flex w-full items-center justify-between",
                  children: [
                    (0, s.jsx)(eh.O, { width: 95, height: 16, radius: 3 }),
                    (0, s.jsxs)("div", {
                      className: "flex items-center gap-2 mr-2",
                      children: [
                        (0, s.jsxs)("div", {
                          className: "flex items-center gap-1",
                          children: [
                            (0, s.jsx)(eh.O, {
                              width: 16,
                              height: 16,
                              radius: 50,
                            }),
                            (0, s.jsx)(eh.O, {
                              width: 26,
                              height: 14,
                              radius: 3,
                            }),
                          ],
                        }),
                        (0, s.jsx)(ap, { className: au().chains__arrow }),
                        (0, s.jsxs)("div", {
                          className: "flex items-center gap-1",
                          children: [
                            (0, s.jsx)(eh.O, {
                              width: 16,
                              height: 16,
                              radius: 50,
                            }),
                            (0, s.jsx)(eh.O, {
                              width: 26,
                              height: 14,
                              radius: 3,
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, s.jsx)("div", {
                  children: (0, s.jsx)(eh.O, {
                    width: 316,
                    height: 40,
                    radius: 20,
                    className: "mt-2",
                  }),
                }),
              ],
            }),
          }),
        aS = (e) => {
          let { count: t = 1 } = e;
          return (0, s.jsx)(s.Fragment, {
            children: Array(t)
              .fill(null)
              .map((e, t) => (0, s.jsx)(aN, {}, t)),
          });
        };
      var aI = n(82479);
      let aM = (0, r.memo)((e) => {
        let { item: t, switchTab: n, onHeightChange: a } = e,
          [i, o] = (0, r.useState)(!1);
        return ((0, r.useEffect)(() => {
          let e = setTimeout(() => {
            o(!0);
          }, 100);
          return () => clearTimeout(e);
        }, []),
        i)
          ? (0, s.jsx)(ak, { item: t, switchTab: n, onHeightChange: a })
          : (0, s.jsx)(aS, { count: 1 });
      });
      aM.displayName = "LazyOperationCard";
      let aj = (0, r.memo)((e) => {
        let { data: t, index: n, style: a } = e,
          { operations: i, switchTab: o, setRowHeight: l } = t,
          d = i[n],
          u = (0, r.useCallback)(
            (e) => {
              l(n, e);
            },
            [n, l]
          );
        return (0, s.jsx)("div", {
          style: a,
          children: (0, s.jsx)("div", {
            className: aa().operationRow,
            children: (0, s.jsx)(aM, {
              item: d,
              switchTab: o,
              onHeightChange: u,
            }),
          }),
        });
      });
      aj.displayName = "OperationRow";
      let aB = (0, r.memo)((e) => {
        let { operations: t, switchTab: n } = e,
          a = n5(),
          { allTokensByChainId: i, allTokensArr: l } = (0, w.e)(),
          { address: d } = (0, eS.useAccount)(),
          [u, c] = (0, r.useState)(!0),
          p = (0, M.TL)(),
          [m] = (0, r.useState)(() => `${(0, eT.XF)(1, 99)}x${(0, eT.QB)(40)}`),
          y = (0, r.useRef)(null),
          [_, h] = (0, r.useState)({}),
          g = (0, r.useCallback)((e) => (_[e] ? 235 : 150), [_]),
          b = (0, r.useCallback)((e, t) => {
            h((n) => ({ ...n, [e]: t })), y.current?.resetAfterIndex(e);
          }, []),
          x = (0, r.useMemo)(
            () => ({
              operations: t || [],
              switchTab: n,
              isLoading: u,
              setRowHeight: b,
            }),
            [u, t, n, b]
          ),
          T = (0, r.useMemo)(
            () =>
              t
                ?.filter(
                  (e) => "claimable" === e.status && !a?.[e?.src_tx_hash]
                )
                ?.reduce((e, t) => {
                  let n = al(t.src_chain_id),
                    a = f.j7(n, t.token, i, t.metadata?.src_underlying_token);
                  return e + +o.b(BigInt(t.amount), a?.decimals || 18);
                }, 0),
            [i, a, t]
          );
        (0, r.useEffect)(() => {
          t?.length && c(!1);
        }, [t]);
        let v = (0, r.useMemo)(
          () =>
            (function (e, t) {
              if (!e) return;
              let n = new Set();
              return e.filter((e) => {
                let a = e.metadata?.src_underlying_token;
                return (
                  !(!a || n.has(a)) &&
                  (n.add(a),
                  !t.some(
                    (e) => e.contractAddress.toLowerCase() === a.toLowerCase()
                  ))
                );
              });
            })(t, l),
          [l, t]
        );
        return (
          (0, r.useEffect)(() => {
            (async () => {
              if (!v) return;
              let e = v.map(async (e) => {
                  let t = [
                      {
                        abi: ef.Wo,
                        address: e.metadata.src_underlying_token,
                        functionName: "decimals",
                      },
                      {
                        abi: ef.Wo,
                        address: e.metadata.src_underlying_token,
                        functionName: "symbol",
                      },
                      {
                        abi: ef.Wo,
                        address: e.metadata.src_underlying_token,
                        functionName: "name",
                      },
                    ],
                    n = (0, eb.u)(Number(e.src_chain_id)),
                    [a, i, s] = (await n.multicall({ contracts: t })).map(
                      (e) => e?.result || null
                    );
                  return {
                    decimals: a,
                    symbol: i,
                    name: s,
                    chainId: e.src_chain_id,
                    underlyingToken: e.metadata.src_underlying_token,
                    contractAddress: e.metadata.src_contract_address,
                  };
                }),
                t = (await Promise.all(e)).map((e) => {
                  let {
                    decimals: t,
                    symbol: n,
                    name: a,
                    chainId: i,
                    underlyingToken: s,
                    contractAddress: r,
                  } = e;
                  return {
                    clusterId: m,
                    tokenText: a,
                    tokenValue: n,
                    tokenIcon: null,
                    contractAddress: s,
                    systemLabel: (0, ex.w)({
                      chainId: Number(i),
                      tokenAddress: s,
                      clusterId: m,
                    }),
                    decimals: t,
                    protocol: f.eD.UTS,
                    chainId: Number(i),
                    metadata: { connectorAddress: s !== r ? r : void 0 },
                    local: !1,
                    verified: !1,
                    isCustom: !0,
                  };
                });
              if (t.length > 0) {
                let e = t.filter(
                  (e, t, n) =>
                    t ===
                    n.findIndex((t) => JSON.stringify(t) === JSON.stringify(e))
                );
                p(j.s.actions.addCustomTokens(e));
              }
            })();
          }, [m, p, v]),
          (0, s.jsxs)("div", {
            className: aa().root,
            children: [
              !!T && (0, s.jsx)(ao, { amount: T }),
              (0, s.jsx)("div", {
                className: aa().operations,
                children: (0, s.jsxs)("div", {
                  className: aa().operations__wrapper,
                  children: [
                    u && void 0 !== t && (0, s.jsx)(aS, { count: 3 }),
                    !!t?.length &&
                      !u &&
                      (0, s.jsx)(aI.S_, {
                        ref: y,
                        height: 600,
                        width: "100%",
                        itemCount: t.length,
                        itemSize: g,
                        itemData: x,
                        overscanCount: 15,
                        children: aj,
                      }),
                    !t?.length &&
                      d &&
                      (0, s.jsx)("span", {
                        className: aa().operations__empty,
                        children: "Currently no transactions yet",
                      }),
                    !t?.length &&
                      !d &&
                      (0, s.jsx)("span", {
                        className: aa().operations__empty,
                        children: "Connect your wallet to see the transactions",
                      }),
                  ],
                }),
              }),
            ],
          })
        );
      });
      aB.displayName = "BridgeOperations";
      var aE = n(62896),
        aA = n(25961),
        aP = n(43871);
      let aR = { items: [] },
        aL = (e) => {
          let [t, n] = (0, r.useState)(aR),
            a = (0, r.useRef)(null),
            i = (0, M.TL)(),
            s = (0, I.v9)((e) => e.BridgeEntity.bridgeOperations),
            o = (0, r.useMemo)(() => (e && s[e]) || [], [s, e]),
            l = (0, r.useCallback)(async () => {
              a.current?.unsubscribe(), (a.current = null), n(aR);
            }, []);
          return (
            (0, aA.K)(async () => {
              e &&
                (await l(),
                (a.current = aP.KD.subscribe({
                  query: aE.Sg,
                  variables: { address: e },
                }).subscribe({
                  next(t) {
                    let { data: n } = t;
                    if (n) {
                      try {
                        let e = localStorage.getItem("all_bridge_operations"),
                          t = e ? JSON.parse(e) : {};
                        Object.keys(t).forEach((e) => {
                          t[e] = t[e].filter((e) => {
                            n?.common_bridge_operations.some(
                              (t) => t.src_tx_hash === e.src_tx_hash
                            );
                          });
                        }),
                          localStorage.setItem(
                            "all_bridge_operations",
                            JSON.stringify(t)
                          );
                      } catch (e) {
                        console.error("Error in useBridgeOperations", e);
                      }
                      let t = [...n?.common_bridge_operations, ...o],
                        a = {},
                        s = t.reduce(
                          (e, t) => (
                            a[t.src_tx_hash] ||
                              d.CY.includes(t.src_chain_id) ||
                              (e.push(t), (a[t.src_tx_hash] = !0)),
                            e
                          ),
                          []
                        );
                      i(
                        e2.BridgeEntity.actions.setBridgeOperations({
                          address: e,
                          operations: s,
                        })
                      );
                    }
                  },
                  error() {
                    console.error("Error in useBridgeOperations");
                  },
                })));
            }, [e]),
            {
              items: (0, r.useMemo)(
                () =>
                  o &&
                  ([...o].sort(
                    (e, t) =>
                      new Date(t.created_at).getTime() -
                      new Date(e.created_at).getTime()
                  ) ||
                    []),
                [o]
              ),
            }
          );
        },
        aD = (e, t) => {
          let [n, a] = (0, r.useState)(e);
          return (
            (0, r.useEffect)(() => {
              let n = setTimeout(() => {
                a(e);
              }, t);
              return () => {
                clearTimeout(n);
              };
            }, [e, t]),
            n
          );
        },
        aO = (e) => [
          { value: "1", label: "Current" },
          { value: "2", label: "All Txs", amount: e },
        ],
        aF = (0, r.memo)((e) => {
          let { status: t, amount: n } = e,
            a = (0, M.TL)(),
            [i, o] = (0, r.useState)("1"),
            { addressFrom: l } = eM(),
            { items: d } = aL(aD(l, 50));
          (0, r.useEffect)(() => {
            try {
              let e = localStorage.getItem("all_bridge_operations"),
                t = JSON.parse(e || "{}");
              Object.keys(t).forEach((e) => {
                a(
                  e2.BridgeEntity.actions.setBridgeOperations({
                    address: e,
                    operations: t[e],
                  })
                );
              });
            } catch (e) {
              console.error(
                "Error on load all bridge operations from local storage",
                e
              );
            }
          }, []);
          let u = (0, r.useMemo)(() => aO(l && d?.length), [l, d?.length]);
          return (0, s.jsxs)("div", {
            className: nh().root,
            children: [
              (0, s.jsx)(at, {
                className: nh().tabs,
                tabs: u,
                value: i,
                onChange: o,
              }),
              "1" === i && (0, s.jsx)(n7, { status: t, amount: n }),
              "2" === i &&
                (0, s.jsx)(aB, {
                  switchTab: () => o("1"),
                  operations: l ? d : void 0,
                }),
            ],
          });
        });
      aF.displayName = "BridgeSidebar";
      var aU = n(21604),
        aW = n.n(aU);
      let aV = (0, r.memo)((e) => {
        let {} = e;
        return (0, s.jsxs)("div", {
          className: aW().root,
          children: [
            "Please note that we are utilizing",
            " ",
            (0, s.jsxs)(eo.default, {
              href: "https://www.circle.com/en/cross-chain-transfer-protocol",
              className: aW().link,
              children: [" ", "USDC’s native bridge solution"],
            }),
            " ",
            "for cross-chain transactions. You must",
            " ",
            (0, s.jsx)("span", {
              className: aW().green,
              children: "approve to send",
            }),
            " USDC funds and",
            " ",
            (0, s.jsx)("span", { className: aW().green, children: "claim it" }),
            " on the destination chain.",
          ],
        });
      });
      aV.displayName = "BridgeCctpNote";
      var aH = n(66417),
        aG = n.n(aH),
        aK = n(40309);
      let a$ = (e) => {
          if (e)
            switch (e) {
              case "op":
              case "base":
              case "arbitrum":
                return "ethereum";
              default:
                return e;
            }
        },
        aZ = (e) => {
          let {
              signer: t,
              address: n,
              chains: a,
              chainTo: i,
              chainFrom: s,
              skip: o,
              isSimpleMode: l,
            } = e,
            d = a$(s),
            [u, c] = (0, r.useState)(void 0),
            p = [900, 901].includes(a.from),
            { chainsFees: m } = (0, aK.I)((0, r.useMemo)(() => [a.to], [a.to])),
            y = (0, r.useCallback)(async () => {
              if (!i || !s || !d) return 0;
              try {
                let e = await fetch(
                    `/api/token-usd-rate?chainFrom=${f.wu[d]}`,
                    { method: "GET" }
                  ),
                  { usdRate: t } = await e.json();
                return t;
              } catch (e) {
                return console.error("Error fetching USD rate:", e), 0;
              }
            }, [i, s, d]);
          return (
            (0, r.useEffect)(() => {
              o ||
                (async () => {
                  if (!t || !n || !a.to || !a.from) return;
                  let e = await fetch(
                    `/api/validate-token-address?token-address=${n}&chain-id=${a.from}`
                  );
                  if ((await e.json()).isETS || l) {
                    if (l) {
                      if (p)
                        console.log(
                          {
                            to: a.to,
                            chainsFees: m,
                            UTSFeeRate: parseFloat(
                              m[a.to]?.simple?.bridgeFeeUSD || "0"
                            ),
                          },
                          "fromSolana UTSFeeRate:"
                        ),
                          c(parseFloat(m[a.to]?.simple?.bridgeFeeUSD || "0"));
                      else
                        try {
                          let e = (0, tl.uN)({
                              address: ty.B,
                              abi: na,
                              client: t,
                            }),
                            [n] = await e.read.getBridgeFees([
                              [BigInt(a.to)],
                              "0x",
                            ]),
                            i = Number(n[0]),
                            s = await y();
                          i && s && c((i / 1e18) * s);
                        } catch (e) {
                          console.error("Error fetching UTS fee rate:", e);
                        }
                    } else
                      try {
                        let e = (0, tl.uN)({ address: n, abi: S(), client: t }),
                          [i, s] = await e.read.estimateBridgeFee([
                            BigInt(a.to),
                            BigInt(0),
                            0,
                            "0x",
                          ]),
                          [r] = await e.read.estimateBridgeFee([
                            BigInt(a.to),
                            s,
                            0,
                            "0x",
                          ]),
                          o = Number(r),
                          l = await y();
                        o && l && c((o / 1e18) * l);
                      } catch (e) {
                        console.error("Error fetching UTS fee rate:", e);
                      }
                  }
                })();
            }, [t, n, a, s, i, y, o, l, p, m]),
            { UTSFeeRate: u }
          );
        },
        az = (0, r.memo)((e) => {
          let { amount: t } = e,
            n = (0, I.v9)((e) => e.BridgeEntity.tokens),
            { allTokensObj: a } = (0, w.e)(),
            i = a[n.from],
            o = i?.protocol === f.eD.CCTP,
            l = i?.protocol === f.eD.UTS,
            { data: u } = (0, L.useWalletClient)(),
            p = i?.metadata?.connectorAddress
              ? i?.metadata?.connectorAddress
              : i?.contractAddress,
            m = (0, I.v9)((e) => e.BridgeEntity.chains),
            y = d.ET(m.to)?.name.toLowerCase(),
            _ = d.ET(m.from)?.name.toLowerCase(),
            { UTSFeeRate: h } = aZ({
              signer: u,
              address: p,
              chains: m,
              chainTo: y,
              chainFrom: _,
              skip: f.eD.UTS !== i?.protocol,
              isSimpleMode: i?.isSimpleMode,
            }),
            { feeTotalUSD: g } = (0, tN.w)(
              Number(t),
              i?.tokenValue,
              i?.protocol === f.eD.UTS
            ),
            b = g < 0.01 ? "<0.01" : g.toFixed(2),
            x = (0, r.useMemo)(() => {
              if (h)
                return h < 0.01
                  ? "< $0.01"
                  : h.toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                      maximumFractionDigits: 2,
                    });
            }, [h]);
          return o
            ? (0, s.jsx)("div", {
                className: c()(aG().content, aG().noBorder),
                children: (0, s.jsxs)("div", {
                  className: aG().row,
                  children: [
                    (0, s.jsx)("h3", {
                      className: aG().label,
                      children: "Execution Fee",
                    }),
                    (0, s.jsxs)("div", {
                      className: aG().value,
                      children: [
                        "View Current Gas",
                        (0, s.jsx)("a", {
                          href: aw.nE[m.from] || "",
                          target: "_blank",
                          children: (0, s.jsx)(ab.A, {
                            className: aG().icon,
                            width: 18,
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              })
            : l
            ? (0, s.jsx)("div", {
                className: c()(aG().content, aG().noBorder),
                children: (0, s.jsxs)("div", {
                  className: aG().row,
                  children: [
                    (0, s.jsx)("h3", {
                      className: aG().label,
                      children: "Execution Fee",
                    }),
                    (0, s.jsx)("div", {
                      className: aG().totalFeeTop,
                      children: x,
                    }),
                  ],
                }),
              })
            : (0, s.jsx)("div", {
                className: c()(aG().content, aG().noBorder),
                children: (0, s.jsxs)("div", {
                  className: aG().row,
                  children: [
                    (0, s.jsx)("h3", {
                      className: aG().label,
                      children: "Execution Fee",
                    }),
                    (0, s.jsxs)("div", {
                      className: aG().value,
                      children: [
                        !!g && (0, s.jsxs)(s.Fragment, { children: ["$", b] }),
                        !g && (0, s.jsx)(s.Fragment, { children: "-" }),
                      ],
                    }),
                  ],
                }),
              });
        });
      az.displayName = "BridgeFees";
      let aq = (e) => {
        let { ...t } = e;
        return (0, s.jsxs)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 16 17",
          ...t,
          children: [
            (0, s.jsx)("mask", {
              id: "a",
              width: "16",
              height: "17",
              x: "0",
              y: "0",
              maskUnits: "userSpaceOnUse",
              children: (0, s.jsx)("path", {
                fill: "#D9D9D9",
                d: "M0 .5h16v16H0z",
              }),
            }),
            (0, s.jsx)("g", {
              mask: "url(#a)",
              children: (0, s.jsx)("path", {
                fill: "currentColor",
                d: "M4 14.833c-.466 0-.86-.16-1.183-.484a1.605 1.605 0 0 1-.484-1.18V11.5h2V2.295l.924.795.936-.795.935.795.936-.795L9 3.09l.936-.795.936.795.936-.795.936.795.923-.795v10.872c0 .466-.162.86-.484 1.182a1.609 1.609 0 0 1-1.183.484H4Zm8-1a.645.645 0 0 0 .475-.191.645.645 0 0 0 .192-.475V3.833H5.334V11.5h6v1.667c0 .189.063.347.191.475a.645.645 0 0 0 .475.191Zm-5.872-7.5v-1H9.91v1H6.128Zm0 2v-1H9.91v1H6.128Zm5.167-1.91a.569.569 0 0 1-.417-.172.569.569 0 0 1-.173-.418c0-.163.058-.302.173-.417a.569.569 0 0 1 .417-.172c.163 0 .302.057.417.172a.568.568 0 0 1 .173.417.569.569 0 0 1-.173.418.569.569 0 0 1-.417.172Zm0 2a.569.569 0 0 1-.417-.172.569.569 0 0 1-.173-.418c0-.163.058-.302.173-.417a.569.569 0 0 1 .417-.172c.163 0 .302.057.417.172a.568.568 0 0 1 .173.417.569.569 0 0 1-.173.418.569.569 0 0 1-.417.172ZM4 13.833h6.334V12.5h-7v.667c0 .189.063.347.191.475a.645.645 0 0 0 .475.191Z",
              }),
            }),
          ],
        });
      };
      var aJ = n(37047),
        aX = n.n(aJ);
      let aY = (0, r.memo)((e) => {
        let {
            localStorageKey: t,
            classNames: n,
            position: a = "center",
            Trigger: i,
            children: o,
          } = e,
          [l, d] = (0, r.useState)(!1);
        (0, r.useEffect)(() => {
          let e = setTimeout(() => {
            localStorage.getItem(t) || d(!0);
          }, 3e3);
          return () => {
            clearTimeout(e);
          };
        }, [t]);
        let u = (0, r.useCallback)(() => {
          d(!1), localStorage.setItem(t, "false");
        }, [t]);
        return (0, s.jsxs)("div", {
          className: c()(aX().base, n?.wrapper, { [aX().active]: l }),
          children: [
            (0, s.jsx)("div", {
              className: c()(aX().trigger, n?.trigger),
              children: (0, s.jsx)(i, { isOpen: l }),
            }),
            (0, s.jsx)("div", {
              className: c()(
                aX().popoverContent,
                {
                  [aX().activePopover]: l,
                  [aX().left]: "left" === a,
                  [aX().center]: "center" === a,
                },
                n?.children
              ),
              children: (0, s.jsx)(o, { handleClose: u }),
            }),
          ],
        });
      });
      aY.displayName = "AnnouncePopover";
      var aQ = n(45682),
        a0 = n.n(aQ),
        a1 = n(77299),
        a2 = n.n(a1);
      let a6 = (0, r.memo)((e) => {
        let { children: t } = e;
        return (0, s.jsx)("div", { className: a2().root, children: t });
      });
      a6.displayName = "Tag";
      var a5 = (e) => {
          let { pathToken: t } = e;
          return (0, s.jsx)(aY, {
            Trigger: (e) => {
              let { isOpen: n } = e;
              return (0, s.jsx)("div", {
                className: c()(a0().title, { [a0().active]: n }),
                children: (0, s.jsx)("h1", {
                  children: "usdc" === t ? "USDC Bridge" : "Photon Bridge",
                }),
              });
            },
            localStorageKey: "SHOULD_ANNOUNCE_EBRIDGE_USDC",
            position: "left",
            classNames: { children: "ml-7" },
            children: (e) => {
              let { handleClose: t } = e;
              return (0, s.jsxs)("div", {
                children: [
                  (0, s.jsxs)("div", {
                    className: "flex gap-1 items-center",
                    children: [
                      (0, s.jsx)(a6, { children: "NEW ASSET" }),
                      (0, s.jsx)(m.default, {
                        src: "/assets/icons/shine.gif",
                        quality: 100,
                        alt: "shine",
                        width: 32,
                        height: 32,
                        className: "w-8 h-8",
                      }),
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    className: aX().text,
                    children: [
                      "Photon Bridge now supports ",
                      (0, s.jsx)("b", { children: "USDC" }),
                      ".",
                    ],
                  }),
                  (0, s.jsx)(nc.z, {
                    type: "info",
                    variant: "contained",
                    onClick: t,
                    className: aX().button,
                    stylesLessCurved: !0,
                    styleHigher: !0,
                    children: "Got it",
                  }),
                ],
              });
            },
          });
        },
        a3 = n(56420),
        a4 = n(58957),
        a9 = (e, t, n, a, i) => {
          let s = (0, r.useRef)(),
            o = (0, M.TL)(),
            l = (0, a4.useChainId)(),
            d = (0, I.v9)((e) => e.BridgeEntity.chains),
            { data: u } = (0, L.useWalletClient)(),
            { data: c } = (0, L.useWalletClient)({ chainId: d.to }),
            { addressFrom: p } = eM(),
            m = (0, r.useCallback)(async () => {
              try {
                if (
                  !p ||
                  (o(ej.k.getBalances({ address: p, chainId: t, tokens: [n] })),
                  !d.to || !i || !a)
                )
                  return;
                o(
                  ej.k.getBalances({
                    address: i || e || "",
                    chainId: d.to,
                    tokens: [a],
                  })
                );
              } catch (e) {
                console.error("get Token Balance", e);
              }
            }, [e, p, n, a, t, d.to, i]);
          (0, r.useEffect)(() => {
            if (p)
              return (
                clearInterval(s.current),
                m().then(),
                (s.current = setInterval(() => {
                  (0, eB.o)() && m().then();
                }, eE.g_)),
                () => {
                  clearInterval(s.current);
                }
              );
          }, [e, l, t, u, c, i, m, p]);
        },
        a7 = function (e) {
          let { token: t } = e,
            n = (0, M.TL)(),
            { allTokensObj: a } = (0, w.e)(),
            {
              store: {
                Balance: { balances: i },
                CoinEntity: {
                  coins: {
                    entangle: { price: u },
                  },
                },
                appGlobalConfig: c,
              },
              asyncActions: {
                Bridge: { getCommission: m },
              },
              actions: {
                Bridge: { setTokens: y, setChains: _ },
              },
            } = (0, M.oR)((e) => ({
              Bridge: e.BridgeEntity,
              Balance: e.BalanceEntity,
              CoinEntity: e.CoinEntity,
              appGlobalConfig: e.AppEntity.appGlobalConfig,
            })),
            { balance: h } = (0, a3.r)(d.ZP.chainId),
            g = (0, n2.a)(1060),
            b = (0, I.v9)((e) => e.BridgeEntity.destinationAddress),
            [x, T] = (0, r.useState)(""),
            [v, C] = (0, r.useState)(!1),
            [k, N] = (0, r.useState)(!1),
            S = (0, I.v9)((e) => e.BridgeEntity.chains),
            j = (0, I.v9)((e) => e.BridgeEntity.tokens),
            B = ny(Number(x), T),
            { addressFrom: E, chainId: A } = eM(),
            { goToState: P, content: R } = (0, n6.vU)(),
            L = (0, r.useCallback)(() => {
              n(e2.BridgeEntity.actions.dropCurrentOperation()), T(""), N(!1);
            }, [n]),
            D = (0, r.useCallback)(() => {
              L(),
                n(y({ from: j.to, to: j.from })),
                n(_({ from: S.to, to: S.from }));
            }, [S, n, L, _, y, j]),
            O = a[j.from],
            F = a[j.to];
          a9(E, S.from, O, F, b),
            (0, r.useEffect)(() => {
              let e = setInterval(() => {
                S.to &&
                  j.from &&
                  n(m({ chainId: S.to, tokenName: O?.tokenValue }));
              }, eE.jI);
              return () => {
                clearInterval(e);
              };
            }, [S.to, j.from]);
          let { switchChain: U } = (0, l.useSwitchChain)();
          (0, r.useEffect)(() => {
            E && S.from && U({ chainId: S.from });
          }, [E, U, S.from]),
            (0, r.useEffect)(() => {
              if (k) return (0, ti.c)(p.uu.ErrorAmountInput);
              let e = {
                900: p.uu.ErrorSolanaWalletNotVerified,
                901: p.uu.ErrorSolanaWalletNotVerified,
                728126428: p.uu.ErrorTRONWalletNotVerified,
              };
              if (v)
                return (0, ti.c)(e[S.to] || p.uu.ErrorEvmWalletNotVerified);
            }, [k, v, S.to]);
          let W = Z(A),
            V = i?.[W || ""]?.[j.from] || 0n,
            H = (0, r.useMemo)(
              () =>
                S.from === d.pQ.chainId &&
                j.from === a.TOKEN_NGL_NGL.systemLabel &&
                h
                  ? h.formatedNglBalance
                  : W && V && a[j.from]?.decimals
                  ? (0, o.b)(V, a[j.from]?.decimals)
                  : "0",
              [a, S.from, W, V, h, j.from]
            ),
            G = (0, r.useMemo)(
              () => (!!S.to && !!j.to && i?.[b || W || ""]?.[j.to]) || 0n,
              [i, S.to, W, b, j.to]
            ),
            K = (0, r.useMemo)(
              () =>
                S.to === d.pQ.chainId &&
                j.to === a.TOKEN_NGL_NGL.systemLabel &&
                h
                  ? h.formatedNglBalance
                  : (0, o.b)(G, a[j.to]?.decimals),
              [a, S.to, G, h, j.to]
            );
          return c?.isBridgeOnMaintenance
            ? (0, s.jsx)(nm, {})
            : (0, s.jsx)("div", {
                className: ta().bridgePageLayout,
                children: (0, s.jsx)("div", {
                  children: (0, s.jsxs)("div", {
                    className: ta().contentContainer,
                    children: [
                      ("Bridge" !== R || !g) &&
                        (0, s.jsxs)("header", {
                          className: ta().contentContainerHeader,
                          children: [
                            (0, s.jsx)(a5, { pathToken: t }),
                            (0, s.jsxs)("button", {
                              className: ta().showStatus,
                              onClick: () => P("Bridge"),
                              children: [
                                (0, s.jsx)(aq, {
                                  className: ta().showStatus__icon,
                                }),
                                (0, s.jsx)("span", {
                                  className: ta().showStatus__text,
                                  children: "View Status",
                                }),
                              ],
                            }),
                          ],
                        }),
                      (0, s.jsxs)("div", {
                        className: ta().bridgePage,
                        children: [
                          ("Bridge" !== R || !g) &&
                            (0, s.jsxs)("div", {
                              className: ta().form,
                              children: [
                                (0, s.jsx)(te, {
                                  className: ta().form__from,
                                  pathToken: t,
                                  type: p.fx.From,
                                  inverseType: p.fx.To,
                                  onSwitch: D,
                                  chainId: A,
                                  address: E,
                                  setAmount: T,
                                  AmountProps: {
                                    error: k,
                                    setError: N,
                                    price: u,
                                    amount: x,
                                    balance: H,
                                    setAmount: T,
                                    token: O?.tokenText,
                                    tokenTicker: O?.tokenValue,
                                  },
                                }),
                                (0, s.jsx)(tt.O, {
                                  className: ta().form__switch,
                                  onSwitch: D,
                                }),
                                (0, s.jsx)(te, {
                                  className: ta().form__to,
                                  pathToken: t,
                                  type: p.fx.To,
                                  inverseType: p.fx.From,
                                  onSwitch: D,
                                  chainId: S.to,
                                  setAmount: T,
                                  AmountProps: {
                                    price: u,
                                    subtractionDisabled:
                                      O?.protocol === f.eD.CCTP,
                                    amount: S.to || j.to ? x : void 0,
                                    setAmount: T,
                                    token: F?.tokenText,
                                    tokenTicker: O?.tokenValue,
                                    balance: K,
                                    noMax: !0,
                                  },
                                  DestinationProps: { setAddressError: C },
                                }),
                                (0, s.jsx)(az, {
                                  className: ta().feesDesc,
                                  amount: x,
                                }),
                                O?.protocol === f.eD.CCTP && (0, s.jsx)(aV, {}),
                                (0, s.jsx)(nl, {
                                  amount: x,
                                  destinationAddress: b,
                                  chainId: A,
                                  currentTokenBalanceFormatted: H,
                                  error: k,
                                  addressError: v,
                                  protocol: O?.protocol,
                                }),
                              ],
                            }),
                          ((g && "Bridge" === R) || !g) &&
                            (0, s.jsx)("div", {
                              className: ta().status,
                              children: (0, s.jsx)(aF, {
                                status: B,
                                amount: x,
                              }),
                            }),
                        ],
                      }),
                    ],
                  }),
                }),
              });
        };
    },
    46320: function (e, t, n) {
      "use strict";
      n.d(t, {
        w: function () {
          return g;
        },
      });
      var a = n(57437),
        i = n(2265),
        s = n(36760),
        r = n.n(s),
        o = n(64983),
        l = n(13901),
        d = n.n(l),
        u = n(48691),
        c = n(54998),
        p = n(47895),
        m = n(37060),
        y = n(54484),
        _ = n(28572);
      let h = (e) => !e || !isNaN(e),
        g = (e) => {
          let {
              className: t,
              type: n,
              setAmount: s,
              error: l,
              balance: g,
              setError: b,
              amount: f,
              withBalance: x = !0,
              token: T,
              tokenTicker: v,
              balanceMinusOne: C,
              decimals: w = 18,
              subtractionDisabled: k,
              noMax: N,
              protocol: S,
            } = e,
            I = n === o.fx.From,
            M = (0, m.R)(T, !I),
            {
              willReceive: j,
              willReceiveDisplay: B,
              blocked: E,
            } = (0, c.w)(Number(f), T, S === p.eD.UTS),
            A = p.Fn[T || ""] || w,
            P = (0, i.useMemo)(() => {
              let e =
                Number(g) > 1e5
                  ? (0, _.x)((0, y.t)(Number(g), A), A)
                  : (0, y.t)(Number((0, _.x)((0, y.t)(Number(g), A), A)), 2);
              return `Bal: ${e} ${v || ""}`;
            }, [g, A, v]),
            R = k || I,
            L = R ? f : B.toString(),
            D = R ? L : !L || 0 > Number(L) ? "" : (0, u.d)((0, y.t)(+L, A), 2),
            O = M && f && j > 0,
            F = O ? (0, y.t)(Number(M) * (R ? +f : +j), 2) : "0.00";
          return (0, a.jsxs)("div", {
            className: r()(
              d().amount,
              { [d().amount_error]: l, [d().bottom]: !I },
              t
            ),
            children: [
              (0, a.jsxs)("div", {
                className: d().amount__box,
                children: [
                  (0, a.jsx)("input", {
                    type: "text",
                    value: D,
                    onChange: I
                      ? (e) => {
                          let t = e.target.value;
                          if (!h(t)) return;
                          let n = t.split(".")[1]?.length;
                          if (n && n > w) return;
                          let a = t.replace(/[^0-9.]/g, "");
                          s && s(a), b && b(!1);
                        }
                      : () => {},
                    className: r()(d().amount__input, {
                      [d().amount__input_disabled]: !I,
                      [d().fade]: E,
                    }),
                    disabled: !I,
                    placeholder: "0.00",
                  }),
                  (0, a.jsx)("span", {
                    className: r()(d().amount__text, !O && d().invisible),
                    children: `($${F})`,
                  }),
                ],
              }),
              (0, a.jsxs)("div", {
                className: d().amount__box,
                children: [
                  !N &&
                    (0, a.jsx)("button", {
                      className: d().amount__max,
                      onClick: () => {
                        let e = "NGL" === T && C ? (+g - 1).toString() : g;
                        s && s(+g ? e : "");
                      },
                      children: "Max",
                    }),
                  x &&
                    (0, a.jsx)("span", {
                      className: r()(d().amount__text, d().amount__balance),
                      children: P,
                    }),
                ],
              }),
            ],
          });
        };
    },
    72797: function (e, t, n) {
      "use strict";
      n.d(t, {
        c: function () {
          return l;
        },
      });
      var a = n(57437),
        i = n(14861),
        s = n(33145),
        r = n(44738);
      n(89310);
      let o = {
          position: "top-center",
          autoClose: 3e3,
          hideProgressBar: !0,
          closeOnClick: !0,
          pauseOnHover: !0,
          draggable: !1,
        },
        l = (e) => {
          i.Am.error(e, {
            ...o,
            icon: () =>
              (0, a.jsx)(s.default, {
                width: 20,
                height: 19,
                src: "/_next/static/media/error.e9248bae.svg",
                alt: "Error Icon",
              }),
            closeButton: () =>
              (0, a.jsx)(s.default, {
                className: "button_close",
                width: 16,
                height: 16,
                src: r.Z.src,
                alt: "Close Icon",
              }),
            className: "notification_error",
          });
        };
    },
    7407: function (e, t, n) {
      "use strict";
      n.d(t, {
        O: function () {
          return d;
        },
      });
      var a = n(57437);
      n(2265);
      var i = n(36760),
        s = n.n(i),
        r = n(80005),
        o = n.n(r);
      let l = (e) => {
          let { wrapped: t } = e;
          return t
            ? (0, a.jsxs)("svg", {
                width: "40",
                height: "41",
                viewBox: "0 0 40 41",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                  (0, a.jsx)("circle", {
                    cx: "20.0005",
                    cy: "20.4985",
                    r: "19.0255",
                    transform: "rotate(-90 20.0005 20.4985)",
                    fill: "#7213EA",
                    stroke: "black",
                    strokeWidth: "1.86047",
                  }),
                  (0, a.jsx)("path", {
                    d: "M11.6484 16.4688L14.6858 13.5383L17.7231 16.4688",
                    stroke: "black",
                    strokeWidth: "1.90476",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                  }),
                  (0, a.jsx)("path", {
                    d: "M14.6816 27.0215V13.8346",
                    stroke: "black",
                    strokeWidth: "1.90476",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                  }),
                  (0, a.jsx)("path", {
                    d: "M28.352 24.5286L25.3147 27.459L22.2773 24.5286",
                    stroke: "black",
                    strokeWidth: "1.90476",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                  }),
                  (0, a.jsx)("path", {
                    d: "M25.3164 13.8346V27.0215",
                    stroke: "black",
                    strokeWidth: "1.90476",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                  }),
                ],
              })
            : (0, a.jsxs)("svg", {
                width: "44",
                height: "44",
                viewBox: "0 0 44 44",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                  (0, a.jsx)("circle", {
                    cx: "22",
                    cy: "22",
                    r: "20",
                    transform: "rotate(-90 22 22)",
                    fill: "#06E097",
                    fillOpacity: "0.8",
                  }),
                  (0, a.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M16.4232 29.9262C16.0469 29.9262 15.7419 29.6211 15.742 29.245L15.7419 16.4387L11.6062 20.5745C11.3402 20.8405 10.9089 20.8405 10.6428 20.5745C10.3768 20.3084 10.3768 19.8771 10.6428 19.6111L15.9415 14.3124C16.0692 14.1847 16.2425 14.1129 16.4232 14.1129C16.6038 14.1129 16.7771 14.1847 16.9049 14.3124L22.2035 19.6111C22.4695 19.8771 22.4695 20.3085 22.2035 20.5745C21.9375 20.8405 21.5061 20.8405 21.2401 20.5745L17.1044 16.4387L17.1044 29.245C17.1044 29.6211 16.7994 29.9261 16.4232 29.9262Z",
                    fill: "black",
                  }),
                  (0, a.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M27.8112 14.1129C28.1874 14.1129 28.4924 14.4179 28.4924 14.7941L28.4924 27.6003L32.6282 23.4646C32.8942 23.1986 33.3255 23.1986 33.5915 23.4646C33.8576 23.7306 33.8576 24.162 33.5915 24.428L28.2929 29.7266C28.1652 29.8544 27.9919 29.9262 27.8112 29.9262C27.6306 29.9261 27.4573 29.8544 27.3295 29.7266L22.0309 24.428C21.7649 24.162 21.7649 23.7306 22.0309 23.4646C22.2969 23.1986 22.7282 23.1986 22.9943 23.4646L27.13 27.6003L27.13 14.7941C27.13 14.4179 27.435 14.1129 27.8112 14.1129Z",
                    fill: "black",
                  }),
                ],
              });
        },
        d = (e) => {
          let { className: t, onSwitch: n, wrapped: i } = e;
          return (0, a.jsx)("button", {
            className: s()(o().switch, t),
            onClick: n,
            children: (0, a.jsx)(l, { wrapped: i }),
          });
        };
    },
    64983: function (e, t, n) {
      "use strict";
      var a, i, s, r, o, l, d, u;
      n.d(t, {
        MR: function () {
          return i;
        },
        aq: function () {
          return c;
        },
        fx: function () {
          return a;
        },
        n8: function () {
          return s;
        },
        uu: function () {
          return r;
        },
      }),
        ((o = a || (a = {})).From = "from"),
        (o.To = "to"),
        ((l = i || (i = {}))[(l.NotConnectedWallet = 0)] =
          "NotConnectedWallet"),
        (l[(l.ConnectedWallet = 1)] = "ConnectedWallet"),
        (l[(l.SourceReady = 2)] = "SourceReady"),
        (l[(l.TargetReady = 3)] = "TargetReady"),
        (l[(l.BridgePending = 4)] = "BridgePending"),
        (l[(l.BridgeSuccess = 5)] = "BridgeSuccess"),
        (l[(l.BridgeFailed = 6)] = "BridgeFailed"),
        ((d = s || (s = {})).ON_GOING = "pending"),
        (d.CLAIMABLE = "claimable"),
        (d.CLAIMED = "claimed"),
        (d.COMPLETE = "complete"),
        (d.FAILED = "failed");
      let c = {
        pending: "On-Going",
        claimable: "Claimable",
        claimed: "Claimed",
        complete: "Completed",
        failed: "Failed",
      };
      ((u = r || (r = {})).SuccessWalletVerified = "Wallet verified"),
        (u.ErrorSolanaWalletNotVerified =
          "Incorrect Solana address. Kindly input correct address to proceed"),
        (u.ErrorTRONWalletNotVerified =
          "Incorrect TRON address. Kindly input correct address to proceed"),
        (u.ErrorEvmWalletNotVerified =
          "Incorrect EVM address. Kindly input correct address to proceed"),
        (u.ErrorAmountInput =
          "The minimum amount for bridging is 100 NGL / WNGL");
    },
    16011: function (e, t, n) {
      "use strict";
      n.d(t, {
        t: function () {
          return s;
        },
      });
      var a = n(2265),
        i = n(33555);
      let s = (e, t) => {
        let [n, s] = (0, a.useState)(null),
          [r, o] = (0, a.useState)(null),
          [l, d] = (0, a.useState)(!1);
        (0, a.useRef)(0);
        let u = async () => {
          s(null), o(null), d(!0);
          try {
            let n = await fetch(
              `/api/validate-token-address?token-address=${t}&chain-id=${e}`
            );
            if (!n.ok) {
              let e = await n.json();
              throw Error(e.error);
            }
            let a = await n.json();
            return o(a), d(!1), !0;
          } catch (e) {
            return (
              s(e instanceof Error ? e.message : "An unknown error occurred"),
              d(!1),
              !1
            );
          }
        };
        return (
          (0, a.useEffect)(() => {
            e &&
              t &&
              ((0, i.U)(t) ? u() : (s("Invalid Token Address"), o(null)));
          }, [e, t]),
          { result: r, loading: l, error: n }
        );
      };
    },
    89877: function (e, t, n) {
      "use strict";
      n.d(t, {
        x1: function () {
          return T;
        },
        E9: function () {
          return g;
        },
        C1: function () {
          return v;
        },
      });
      var a = n(57437),
        i = n(2265),
        s = n(33145),
        r = n(29853),
        o = n(5575),
        l = n(32676),
        d = n.n(l),
        u = n(57552),
        c = n(27648);
      let p = (0, i.memo)((e) => {
        let { className: t, width: n, height: i } = e;
        return (0, a.jsxs)("svg", {
          width: n,
          height: i,
          viewBox: "0 0 21 21",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          className: t,
          children: [
            (0, a.jsx)("circle", {
              cx: "10.5977",
              cy: "10.5",
              r: "9.67391",
              stroke: "currentColor",
              strokeOpacity: "0.4",
              strokeWidth: "0.652174",
            }),
            (0, a.jsx)("circle", {
              cx: "10.602",
              cy: "10.4995",
              r: "5.12846",
              fill: "currentColor",
              stroke: "#262626",
              strokeWidth: "0.652174",
            }),
          ],
        });
      });
      p.displayName = "LoadingPoint";
      let m = (0, i.memo)((e) => {
        let { className: t, width: n, height: i } = e;
        return (0, a.jsxs)("svg", {
          width: n,
          height: i,
          className: t,
          viewBox: "0 0 21 21",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            (0, a.jsx)("circle", {
              cx: "10.5652",
              cy: "10.5",
              r: "9.60729",
              fill: "currentColor",
              stroke: "currentColor",
              strokeWidth: "0.785414",
            }),
            (0, a.jsx)("path", {
              d: "M7.07812 10.9553L9.68143 14.1371L14.888 7.77344",
              stroke: "#151E01",
              strokeWidth: "1.04348",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
          ],
        });
      });
      m.displayName = "Checkmark";
      var y = n(36760),
        _ = n.n(y),
        h = { src: "/_next/static/media/failmark.b34ac326.svg" };
      let g = (0, i.memo)((e) => {
        let {
          isDone: t,
          isLoading: n,
          isFailed: i,
          isGray: r,
          isYellow: o,
        } = e;
        return i
          ? (0, a.jsx)(s.default, {
              src: h.src,
              width: 20,
              height: 20,
              alt: "failed mark",
            })
          : t
          ? (0, a.jsx)(m, {
              className: _()(d().checkmark, { [d().grayed]: r }),
              width: 20,
              height: 20,
            })
          : n
          ? (0, a.jsx)(p, {
              className: _()(
                { [d().grayed]: r, [d().yellow]: o },
                d().loadingPoint
              ),
              width: 20,
              height: 20,
            })
          : (0, a.jsx)(s.default, {
              src: "/_next/static/media/empty-point.6746725c.svg",
              width: 20,
              height: 20,
              alt: "empty point",
            });
      });
      g.displayName = "Point";
      var b = n(47895);
      let f = {
          "0_0": "Choose the asset and amount to bridge",
          "0_1": "Ready to bridge your funds",
          "0_2": "Sending funds from source chain",
          "1_only": "Funds sent from source chain",
          1: "Inbound Msg in flight from source chain.",
          2: "Executing Inbound Msg on Entangle AI...",
          "3_only": "Inbound Msg delivered on Entangle AI.",
          3: "Outbound Msg in flight to destination.",
          4: "Executing Outbound Msg on destination.",
          5: "Funds received on destination chain.",
        },
        x = {
          [b.eD.CCM]: f,
          [b.eD.UTS]: f,
          [b.eD.CCTP]: {
            "0_0": "Choose the asset and amount to bridge.",
            "0_1": "Ready to approve and send your funds.",
            "0_2": "Approve the USDC amount in your wallet.",
            "0_3": "Ready to bridge your funds",
            1: "Confirm to send USDC in your wallet.",
            2: "Sending USDC from source chain...",
            "3_only": "USDC sent from source chain.",
            3: "Receiving USDC on destination chain...",
            "4_only": "USDC received on destination chain.",
            4: "Ready to claim your USDC.",
            5: "USDC claimed to your wallet.",
          },
        },
        T = (0, i.memo)((e) => {
          let {
            isDone: t,
            isLoading: n,
            isGray: i,
            isYellow: s,
            isFailed: r,
            className: o = "",
          } = e;
          return (0, a.jsx)("div", {
            className: _()(
              d().line,
              {
                [d().lineLoading]: n,
                [d().lineDone]: t,
                [d().lineGray]: i,
                [d().lineYellow]: s,
                [d().lineRed]: r,
              },
              o
            ),
          });
        });
      T.displayName = "Line";
      let v = (0, i.memo)((e) => {
        let t,
          {
            transactionStatus: n,
            sourceChainId: l,
            destChainId: p,
            dest_hash: m,
            src_hash: y,
            step: _ = "0",
            failed: h,
            protocol: b = 0,
          } = e,
          [f, v] = (0, i.useState)({}),
          [C, w] = (0, i.useState)({});
        m && 33033 !== p
          ? (t = (0, u.gE)(m, p, "tx"))
          : y && 33033 !== l && (t = (0, u.gE)(y, l, "tx"));
        let k = h || !1,
          N = parseInt(_, 10),
          S = "0x0000000000000000000000000000000000000000" === m && 5 === N,
          I = x[b],
          M = !!I[`${_}_only`] && !f[_];
        return (
          (0, i.useEffect)(() => {
            M &&
              setTimeout(() => {
                v((e) => ({ ...e, [_]: !0 }));
              }, 5e3);
          }, [M, _]),
          (0, a.jsxs)("div", {
            className: d().root,
            children: [
              (0, a.jsxs)("div", {
                className: d().pipeline,
                children: [
                  (0, a.jsx)(g, {
                    isFailed: [0, 1].includes(N) && k,
                    isDone: N > 0,
                    isLoading: 0 === N && !k,
                    isGray: "0_0" === _ || N > 1,
                  }),
                  Array.from({ length: 4 }).map((e, t) =>
                    (0, a.jsxs)(
                      i.Fragment,
                      {
                        children: [
                          (0, a.jsx)(T, {
                            isDone: N > t + 1,
                            isLoading: N === t + 1 && !k && !M,
                            isGray: N > t + 1,
                          }),
                          (0, a.jsx)(g, {
                            isFailed: N === t + 2 && k,
                            isDone: N > t + 1,
                            isLoading: N === t + 1 && !k && !M,
                            isGray: N > t + 2,
                          }),
                        ],
                      },
                      t
                    )
                  ),
                ],
              }),
              (0, a.jsxs)("div", {
                className: d().status,
                children: [
                  !k &&
                    S &&
                    (0, a.jsxs)(a.Fragment, {
                      children: [
                        "Tokens received, getting transaction link...",
                        (0, a.jsx)(o.h, {}),
                        "className=",
                        d().refresh,
                        "width=",
                        12,
                        "height=",
                        12,
                      ],
                    }),
                  !S && !k && I[`${_}${M ? "_only" : ""}`],
                  k && `Failed while ${I[_].toLowerCase()}`,
                  t &&
                    !S &&
                    (0, a.jsx)(c.default, {
                      href: t,
                      target: "_blank",
                      children: (0, a.jsx)(s.default, {
                        width: 12,
                        height: 12,
                        src: r.Z.src,
                        className: d().linkIcon,
                        alt: "",
                      }),
                    }),
                ],
              }),
            ],
          })
        );
      });
      v.displayName = "StatusPipeline";
    },
    34602: function (e, t, n) {
      "use strict";
      n.d(t, {
        GT: function () {
          return c;
        },
        Dp: function () {
          return u;
        },
        TM: function () {
          return d;
        },
        cC: function () {
          return m;
        },
        ZI: function () {
          return p;
        },
        Zt: function () {
          return _;
        },
      });
      var a = JSON.parse(
          '{"version":"0.1.0","name":"uts","instructions":[{"name":"initialize","accounts":[{"name":"admin","isMut":true,"isSigner":true},{"name":"priceProvider","isMut":false,"isSigner":false},{"name":"feeCollector","isMut":false,"isSigner":false},{"name":"masterConfig","isMut":true,"isSigner":false},{"name":"systemProgram","isMut":false,"isSigner":false}],"args":[]},{"name":"configureChain","accounts":[{"name":"admin","isMut":false,"isSigner":true},{"name":"masterConfig","isMut":true,"isSigner":false},{"name":"systemProgram","isMut":false,"isSigner":false}],"args":[{"name":"chainId","type":"u64"},{"name":"bridgePrice","type":"u64"},{"name":"deployPrice","type":"u64"},{"name":"masterRouter","type":"bytes"},{"name":"simpleRouter","type":"bytes"}]},{"name":"setDstGasPrice","accounts":[{"name":"priceProvider","isMut":false,"isSigner":true},{"name":"masterConfig","isMut":true,"isSigner":false},{"name":"systemProgram","isMut":false,"isSigner":false}],"args":[{"name":"chainId","type":"u64"},{"name":"bridgePrice","type":"u64"},{"name":"deployPrice","type":"u64"}]},{"name":"simpleBridge","accounts":[{"name":"sender","isMut":true,"isSigner":true},{"name":"authority","isMut":false,"isSigner":false},{"name":"feeCollector","isMut":true,"isSigner":false},{"name":"masterConfig","isMut":false,"isSigner":false},{"name":"tokenConfig","isMut":false,"isSigner":false},{"name":"mint","isMut":false,"isSigner":false},{"name":"senderVault","isMut":true,"isSigner":false},{"name":"bridgeVault","isMut":true,"isSigner":false},{"name":"protocolInfo","isMut":true,"isSigner":false,"docs":["Protocol info"]},{"name":"photonConfig","isMut":true,"isSigner":false,"docs":["Photon system config"]},{"name":"photonProgram","isMut":false,"isSigner":false},{"name":"systemProgram","isMut":false,"isSigner":false},{"name":"tokenProgram","isMut":false,"isSigner":false}],"args":[{"name":"tokenId","type":"bytes"},{"name":"requests","type":{"vec":{"defined":"BridgeRequest"}}}]},{"name":"simpleDeploy","accounts":[{"name":"sender","isMut":true,"isSigner":true},{"name":"authority","isMut":false,"isSigner":false},{"name":"feeCollector","isMut":true,"isSigner":false},{"name":"masterConfig","isMut":false,"isSigner":false},{"name":"tokenConfig","isMut":true,"isSigner":false},{"name":"mint","isMut":false,"isSigner":false},{"name":"metadataAccount","isMut":false,"isSigner":false,"docs":["MPL metadata"]},{"name":"bridgeVault","isMut":true,"isSigner":false},{"name":"protocolInfo","isMut":true,"isSigner":false,"docs":["Protocol info"]},{"name":"photonConfig","isMut":true,"isSigner":false,"docs":["Photon system config"]},{"name":"photonProgram","isMut":false,"isSigner":false},{"name":"tokenProgram","isMut":false,"isSigner":false},{"name":"associatedTokenProgram","isMut":false,"isSigner":false},{"name":"systemProgram","isMut":false,"isSigner":false}],"args":[{"name":"tokenId","type":"bytes"},{"name":"requests","type":{"vec":{"defined":"BridgeRequest"}}}]},{"name":"simpleRecv","accounts":[{"name":"executor","isMut":true,"isSigner":true,"docs":["Executor wallet"]},{"name":"masterAuthority","isMut":false,"isSigner":true,"docs":["Master authority"]},{"name":"authority","isMut":false,"isSigner":false,"docs":["UTS authority"]},{"name":"tokenConfig","isMut":false,"isSigner":false},{"name":"mint","isMut":false,"isSigner":false,"docs":["Token mint"]},{"name":"bridgeVault","isMut":true,"isSigner":false},{"name":"receiver","isMut":false,"isSigner":false},{"name":"receiverVault","isMut":true,"isSigner":false},{"name":"tokenProgram","isMut":false,"isSigner":false},{"name":"associatedTokenProgram","isMut":false,"isSigner":false},{"name":"systemProgram","isMut":false,"isSigner":false}],"args":[{"name":"messageType","type":"u8"},{"name":"params","type":"bytes"}]}],"accounts":[{"name":"MasterConfig","type":{"kind":"struct","fields":[{"name":"admin","type":"publicKey"},{"name":"priceProvider","type":"publicKey"},{"name":"feeCollector","type":"publicKey"},{"name":"chainConfigs","type":{"array":[{"defined":"ChainConfig"},25]}},{"name":"extended","type":{"array":["u8",1024]}}]}},{"name":"TokenConfig","type":{"kind":"struct","fields":[{"name":"mint","type":"publicKey"},{"name":"tokenProgram","type":"publicKey"},{"name":"reserved","type":{"array":["u8",256]}}]}}],"types":[{"name":"BridgeRequest","type":{"kind":"struct","fields":[{"name":"dstChainId","type":"u64"},{"name":"receiver","type":"bytes"},{"name":"amount","type":"u64"}]}},{"name":"ChainConfig","type":{"kind":"struct","fields":[{"name":"chainId","type":"u64"},{"name":"simpleBridgePrice","docs":["Price in SOL (lamports) for one bridge operation"],"type":"u64"},{"name":"simpleDeployPrice","docs":["Price in SOL (lamports) for one deploy operation"],"type":"u64"},{"name":"masterRouter","docs":["Master router address"],"type":{"defined":"Bytes32"}},{"name":"simpleRouter","docs":["Simple router address"],"type":{"defined":"Bytes32"}},{"name":"extended","type":{"array":["u8",256]}}]}},{"name":"Bytes32","type":{"kind":"alias","value":{"array":["u8",32]}}}],"events":[{"name":"DeployToken","fields":[{"name":"chainId","type":"u64","index":false},{"name":"mint","type":"publicKey","index":false},{"name":"tokenId","type":"bytes","index":false}]},{"name":"ReceiveTokens","fields":[{"name":"tokenId","type":"bytes","index":false},{"name":"mint","type":"publicKey","index":false},{"name":"to","type":"publicKey","index":false},{"name":"amount","type":"u64","index":false}]},{"name":"SendTokens","fields":[{"name":"to","type":"bytes","index":false},{"name":"chainId","type":"u64","index":false},{"name":"amount","type":"u64","index":false},{"name":"fee","type":"u64","index":false}]}],"errors":[{"code":6000,"name":"InvalidTokenId","msg":"Invalid token id"},{"code":6001,"name":"InvalidTokenMint","msg":"Invalid token mint"},{"code":6002,"name":"UnknownChainId","msg":"Unknown chain id"},{"code":6003,"name":"NotAdmin","msg":"Not admin"},{"code":6004,"name":"NotPriceProvider","msg":"Not price provider"},{"code":6005,"name":"InvalidAddress","msg":"Invalid address"},{"code":6006,"name":"NoSpaceLeft","msg":"No space left"},{"code":6007,"name":"EmptyTransfer","msg":"Empty transfer"},{"code":6008,"name":"InvalidProtocolId","msg":"Invalid protocol id"},{"code":6009,"name":"InvalidSelector","msg":"Invalid selector"},{"code":6010,"name":"InvalidParams","msg":"Invalid params"},{"code":6011,"name":"InvalidTokenProgram","msg":"Invalid token program"},{"code":6012,"name":"TokenNotSupported","msg":"Token not supported"},{"code":6013,"name":"InvalidFeeCollector","msg":"Invalid fee collector"},{"code":6014,"name":"TokenExists","msg":"Token exists"},{"code":6015,"name":"NonZeroDeployAmount","msg":"NonZeroDeployAmount"}]}'
        ),
        i = n(32308),
        s = n(47173),
        r = n(29557),
        o = n(55135),
        l = n(64024);
      let d = (0, s.nr)(
          "4554530000000000000000000000000000000000000000000000000000000000"
        ),
        u = i.utf8.encode("r0"),
        c = new l.PublicKey("pccm961CjaR7T7Hcht9omrXQb9w54ntJo95FFT7N9AJ"),
        p = new l.Connection(r.KR),
        m = i.utf8.encode("uts"),
        y = new l.PublicKey("UTSqnv7M4j6wpcoUgAZsNPqAN7Q2qd3hFv9dP5V1fai"),
        _ = new o.$r(a, y, { connection: p });
    },
    7194: function (e, t, n) {
      "use strict";
      n.d(t, {
        HI: function () {
          return N;
        },
      });
      var a = n(55135),
        i = n(15408),
        s = n(68575),
        r = n(15218),
        o = n(84720),
        l = n(18806),
        d = n(32308),
        u = n(43972),
        c = n(1197),
        p = n(23016),
        m = n(48158);
      class y {
        constructor(e, t, n, a, i, s, r, o) {
          (this.mint = e),
            (this.metadataAddress = t),
            (this.name = n),
            (this.symbol = a),
            (this.uri = i),
            (this.supply = s),
            (this.decimals = r),
            (this.isNotMintable = o);
        }
        static #e = (this.fetch = async (e, t) => {
          let n;
          let i = (0, m.i)(e).use((0, p.mplTokenMetadata)());
          try {
            n = await (0, p.fetchDigitalAsset)(i, t.toBase58());
          } catch (e) {
            return null;
          }
          return new y(
            t,
            new a.rV.PublicKey(n.metadata.publicKey.toString()),
            n.metadata.name,
            n.metadata.symbol,
            n.metadata.uri,
            n.mint.supply,
            n.mint.decimals,
            "None" === n.mint.mintAuthority.__option
          );
        });
        isValidForUtsSimple() {
          return (
            this.decimals > 0 && this.supply > BigInt(0) && this.isNotMintable
          );
        }
      }
      var _ = n(99628),
        h = n(47173),
        g = n(64024);
      n(29557);
      var b = n(34602),
        f = n(94594);
      let x = async function (e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          { maxRetries: n = 15, retryInterval: a = 2e3, timeout: i = 3e4 } = t,
          s = 0,
          r = 0;
        for (; r < n && s < i; )
          try {
            return await e();
          } catch (e) {
            if (++r >= n || s >= i)
              throw Error(`Max retries or timeout exceeded: ${e.message}`);
            await new Promise((e) => setTimeout(e, a)), (s += a);
          }
        throw Error("Retries exceeded without success");
      };
      var T = n(44553),
        v = n(93184),
        C = n(82957).Buffer;
      let w = new g.PublicKey("DVUDK7y8oFUFHUm9neVcEufU7U7h9G2Chu5Zq9SBE5MG"),
        k = async (e, t, n, i, s, r) => {
          let o = (0, h.M$)(i),
            l = a.rV.PublicKey.findProgramAddressSync(
              [d.utf8.encode("AUTHORITY")],
              e.programId
            )[0],
            p = a.rV.PublicKey.findProgramAddressSync(
              [b.cC, d.utf8.encode("MASTER_CONFIG")],
              e.programId
            )[0],
            m = a.rV.PublicKey.findProgramAddressSync(
              [b.cC, d.utf8.encode("TOKEN_CONFIG"), o],
              e.programId
            )[0],
            g = a.rV.PublicKey.findProgramAddressSync(
              [b.Dp, d.utf8.encode("PROTOCOL"), b.TM],
              b.GT
            )[0],
            f = a.rV.PublicKey.findProgramAddressSync(
              [b.Dp, d.utf8.encode("CONFIG")],
              b.GT
            )[0];
          if (r) {
            let r = (0, u.MO)(i, l, !0, c.H_),
              d = await y.fetch(e.provider.connection.rpcEndpoint, i);
            return await e.methods
              .simpleDeploy(o, s)
              .accountsStrict({
                sender: t,
                authority: l,
                feeCollector: n,
                masterConfig: p,
                tokenConfig: m,
                mint: i,
                metadataAccount: d.metadataAddress,
                bridgeVault: r,
                protocolInfo: g,
                photonConfig: f,
                photonProgram: b.GT,
                tokenProgram: c.H_,
                associatedTokenProgram: _.ap,
                systemProgram: a.rV.SystemProgram.programId,
              })
              .instruction();
          }
          {
            let i = await e.account.tokenConfig.fetch(m),
              r = i.mint,
              d = (0, u.MO)(r, t, !0, i.tokenProgram),
              y = (0, u.MO)(r, l, !0, i.tokenProgram);
            return await e.methods
              .simpleBridge(o, s)
              .accountsStrict({
                sender: t,
                authority: l,
                feeCollector: n,
                masterConfig: p,
                tokenConfig: m,
                mint: r,
                senderVault: d,
                bridgeVault: y,
                protocolInfo: g,
                photonConfig: f,
                photonProgram: b.GT,
                systemProgram: a.rV.SystemProgram.programId,
                tokenProgram: c.H_,
              })
              .instruction();
          }
        },
        N = () => {
          let { deployFees: e } = (0, o._)(),
            { publicKey: t, sendTransaction: n } = (0, i.O)(),
            { srcChainId: d, currentDeploymentTokenAddress: u } = (0, s.v9)(
              (e) => e.SimpleModeEntity
            ),
            { tokenDetails: c } = (0, r.O)(u || void 0),
            p = (0, l.Dv)(),
            m = async (t) => {
              let { dstChainIds: n } = t;
              try {
                let t = n.map((e) => [BigInt(e), BigInt(0), "0x"]),
                  a = c?.expanded_tokens.find((e) => {
                    let { chain_id: t } = e;
                    return Number(t) === d;
                  });
                if (!a) throw Error("No expanded token");
                console.log("expandedToken", a);
                let i = [a.address, "0x", t],
                  [s, r] = e.result ?? [],
                  o = await p({ args: i, value: r, contractAddress: T.B });
                console.log("sendEvmDeploy txHash", o);
                let { status: l } = await (0, v.e)(f.gb, { hash: o });
                if (
                  (console.log("Transaction confirmed:", l), "reverted" === l)
                )
                  throw Error("Transaction reverted");
                return { txHash: o };
              } catch (e) {
                return (
                  console.log(e),
                  { error: "Something went wrong, please try again later" }
                );
              }
            },
            y = async (e) => {
              let {
                amount: i,
                isBridge: s,
                evmAddress: r,
                mintAddress: o,
                dstChainIds: l,
              } = e;
              if (t)
                try {
                  let e = [],
                    d = a.rV.ComputeBudgetProgram.setComputeUnitPrice({
                      microLamports: 1e6,
                    });
                  e.push(d);
                  let u = a.rV.ComputeBudgetProgram.setComputeUnitLimit({
                    units: 5e5,
                  });
                  e.push(u);
                  let c = a.rV.ComputeBudgetProgram.requestHeapFrame({
                    bytes: 262144,
                  });
                  e.push(c);
                  let p = new g.PublicKey(o),
                    m = s
                      ? [
                          {
                            amount: new a.BN(i ? i.toString() : 0),
                            receiver: r ? (0, h.nr)(r) : C.alloc(20),
                            dstChainId: new a.BN(l[0] || 0),
                          },
                        ]
                      : l.map((e) => ({
                          amount: new a.BN(0),
                          receiver: C.alloc(20),
                          dstChainId: new a.BN(e),
                        })),
                    y = await k(b.Zt, t, w, p, m, !s);
                  e.push(y);
                  let _ = new g.TransactionMessage({
                      payerKey: t,
                      recentBlockhash: (
                        await b.ZI.getLatestBlockhash("finalized")
                      ).blockhash,
                      instructions: e,
                    }).compileToV0Message([]),
                    f = new g.VersionedTransaction(_),
                    T = await n(f, b.ZI);
                  console.log("txHash", T);
                  try {
                    let e = await x(
                      async () => {
                        let e = await b.ZI.getSignatureStatus(T, {
                          searchTransactionHistory: !0,
                        });
                        if (
                          e?.value?.confirmationStatus === "finalized" &&
                          !e.value.err
                        )
                          return e;
                        if (e?.value?.err) throw Error("Transaction failed");
                        throw Error("Transaction not yet confirmed");
                      },
                      { maxRetries: 40, retryInterval: 2e3, timeout: 9e4 }
                    );
                    console.log("Transaction confirmed:", e);
                  } catch (e) {
                    return (
                      console.log("returning the error"),
                      { error: "Please try again later" }
                    );
                  }
                  return console.log("returning the txHash", T), { txHash: T };
                } catch (e) {
                  console.log(e, "returning ");
                  return;
                }
            };
          return {
            sendDeploy: async (e) => (900 === d ? y(e) : m(e)),
            sendEvmDeploy: m,
            sendSolDeploy: y,
          };
        };
    },
    40309: function (e, t, n) {
      "use strict";
      n.d(t, {
        I: function () {
          return b;
        },
      });
      var a = n(68575),
        i = n(37060),
        s = n(2265),
        r = n(32308),
        o = n(39502),
        l = n(55135),
        d = n(34602),
        u = n(94594),
        c = n(37691),
        p = n(9481),
        m = n.n(p),
        y = n(44553),
        _ = n(29557);
      let h = async (e, t) => {
          let n = l.rV.PublicKey.findProgramAddressSync(
            [d.cC, r.utf8.encode("MASTER_CONFIG")],
            e.programId
          )[0];
          return (await e.account.masterConfig.fetch(n)).chainConfigs.find(
            (e) => e.chainId.eq(t)
          );
        },
        g = Object.values(_.m5),
        b = (e) => {
          let t = (0, a.v9)((e) => e.SimpleModeEntity.srcChainId),
            n = (0, s.useMemo)(
              () =>
                g.find((e) => {
                  let { chainId: n } = e;
                  return n === t;
                }),
              [t]
            ),
            r = (0, i.R)(n?.nativeCurrency),
            [p, _] = (0, s.useState)(!1),
            [b, f] = (0, s.useState)({}),
            x = (0, s.useCallback)(
              async (e) => {
                let t = [e.map((e) => BigInt(e)), "0x"],
                  a = { abi: m(), args: t, address: y.B, chainId: n?.chainId },
                  [i] = await (0, c.L)(u.gb, {
                    ...a,
                    functionName: "getDeployFees",
                  }),
                  [s] = await (0, c.L)(u.gb, {
                    ...a,
                    functionName: "getBridgeFees",
                  }),
                  l = e
                    .map((e, t) => ({
                      chainId: e,
                      simpleBridgePrice: s[t],
                      simpleDeployPrice: i[t],
                    }))
                    .reduce((t, n, a) => {
                      if (!n) return { ...t, [e[a]]: null };
                      let { simpleBridgePrice: i, simpleDeployPrice: s } = n,
                        l = (0, o.b)(BigInt(s.toString()), 18),
                        d = (0, o.b)(BigInt(i.toString()), 18),
                        u = String(parseFloat(l || "0") * (r || 0)),
                        c = String(parseFloat(d || "0") * (r || 0));
                      return {
                        ...t,
                        [e[a]]: {
                          simple: {
                            deployFee: l,
                            bridgeFee: d,
                            deployFeeUSD: u,
                            bridgeFeeUSD: c,
                          },
                          expert: null,
                        },
                      };
                    }, {});
                console.log("fetchEvmFees", l), f(l);
              },
              [r, n?.chainId]
            ),
            T = (0, s.useCallback)(
              async (e) => {
                f(
                  (
                    await Promise.all(
                      e.map(async (e) => await h(d.Zt, new l.BN(e)))
                    )
                  ).reduce((t, n, a) => {
                    if (!n) return { ...t, [e[a]]: null };
                    let { simpleBridgePrice: i, simpleDeployPrice: s } = n,
                      l = (0, o.b)(BigInt(s.toString()), 9),
                      d = (0, o.b)(BigInt(i.toString()), 9),
                      u = String(parseFloat(l || "0") * (r || 0)),
                      c = String(parseFloat(d || "0") * (r || 0));
                    return {
                      ...t,
                      [e[a]]: {
                        simple: {
                          deployFee: l,
                          bridgeFee: d,
                          deployFeeUSD: u,
                          bridgeFeeUSD: c,
                        },
                        expert: null,
                      },
                    };
                  }, {})
                );
              },
              [r]
            ),
            v = (0, s.useCallback)(
              async (e) => {
                n?.chainId === 900 ? T(e) : x(e);
              },
              [x, T, n?.chainId]
            );
          return (
            (0, s.useEffect)(() => {
              try {
                _(!0), e.length > 0 && v(e);
              } catch (e) {
                console.log(e);
              } finally {
                _(!1);
              }
            }, [n, e, r, v]),
            { chainsFees: b, isLoading: p }
          );
        };
    },
    47173: function (e, t, n) {
      "use strict";
      n.d(t, {
        M$: function () {
          return s;
        },
        nr: function () {
          return i;
        },
      });
      var a = n(82957).Buffer;
      function i(e) {
        return a.from(e.replace("0x", ""), "hex");
      }
      function s(e) {
        return e.toBuffer();
      }
    },
    54998: function (e, t, n) {
      "use strict";
      n.d(t, {
        w: function () {
          return r;
        },
      });
      var a = n(68575),
        i = n(2265),
        s = n(37060);
      let r = (e, t, n) => {
        let [r, o] = (0, i.useState)(void 0),
          [l, d] = (0, i.useState)(!1),
          u = (0, a.v9)((e) => e.BridgeEntity.commission).value,
          c = (0, s.R)(t),
          p = u[t || "tokenName"],
          m = n ? 0 : p?.networkFee,
          y = n ? 0 : r ? Number(e || 0) * r : 0,
          _ = (0, i.useMemo)(() => Number(m) + y, [m, y]);
        (0, i.useEffect)(() => {
          p?.executionFeePercent
            ? (d(!0),
              setTimeout(() => {
                d(!1), o(p?.executionFeePercent);
              }, 500))
            : o(p?.executionFeePercent);
        }, [p?.executionFeePercent]);
        let h = (0, i.useMemo)(() => (_ ? Number(e) - _ : Number(e)), [e, _]);
        return {
          networkFee: m,
          networkFeeFormatted: Number(m || 0).toLocaleString("en", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          }),
          executionFeePercent: r,
          executionFee: y,
          executionFeeUSD: y * (c || 0),
          feeTotal: _,
          feeTotalUSD: _ * (c || 0),
          willReceiveDisplay: h ? Math.max(0, h) : 0,
          blocked: l,
          willReceive: h,
        };
      };
    },
    15218: function (e, t, n) {
      "use strict";
      n.d(t, {
        O: function () {
          return s;
        },
      });
      var a = n(2265),
        i = n(2445);
      let s = (e) => {
        let {
            data: t,
            error: n,
            isLoading: s,
          } = (0, i.uP)({ address: e }, { skip: !e }),
          r = (0, a.useMemo)(() => {
            if (t && e && !s) return t.getOriginalToken;
          }, [t, e, s]);
        return { error: n, isLoading: s, tokenDetails: r };
      };
    },
    25961: function (e, t, n) {
      "use strict";
      n.d(t, {
        K: function () {
          return i;
        },
      });
      var a = n(2265);
      function i(e, t) {
        let n = (0, a.useRef)(void 0);
        (0, a.useEffect)(() => {
          (n.current && JSON.stringify(n.current) === JSON.stringify(t)) ||
            ((n.current = t), e());
        }, [e, t]);
      }
    },
    84720: function (e, t, n) {
      "use strict";
      n.d(t, {
        _: function () {
          return a.useSimpleModeContext;
        },
      });
      var a = n(13451);
    },
    77296: function (e, t, n) {
      "use strict";
      n.d(t, {
        p: function () {
          return i;
        },
      });
      var a = n(57437);
      let i = (0, n(2265).memo)((e) => {
        let { width: t = 17, height: n = 17 } = e;
        return (0, a.jsxs)("svg", {
          width: 17,
          height: 17,
          viewBox: "0 0 17 17",
          fill: "none",
          children: [
            (0, a.jsx)("path", {
              d: "M3.49219 8.46289H12.8255",
              stroke: "#06E097",
              strokeWidth: "1.12",
              strokeLinecap: "round",
            }),
            (0, a.jsx)("path", {
              d: "M8.15625 3.79688L8.15625 13.1302",
              stroke: "#06E097",
              strokeWidth: "1.12",
              strokeLinecap: "round",
            }),
          ],
        });
      });
      i.displayName = "PlusIcon";
    },
    5575: function (e, t, n) {
      "use strict";
      n.d(t, {
        h: function () {
          return i;
        },
      });
      var a = n(57437);
      let i = (e) => {
        let {
          width: t = 13,
          height: n = 13,
          color: i = "#069A69",
          className: s,
        } = e;
        return (0, a.jsx)("svg", {
          width: t,
          height: n,
          viewBox: "0 0 13 13",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          className: s,
          children: (0, a.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M1.65095 6.32333C1.65095 8.96163 3.56386 10.7589 5.7119 11.1308C5.95771 11.1734 6.12247 11.4072 6.07991 11.653C6.03735 11.8988 5.80358 12.0635 5.55777 12.021C3.03433 11.584 0.747558 9.4571 0.747558 6.32333C0.747558 4.99155 1.35346 3.94492 2.06104 3.14873C2.56822 2.57803 3.14851 2.11473 3.61502 1.7599L2.19541 1.7599C1.95609 1.7599 1.76208 1.56588 1.76208 1.32656C1.76208 1.08724 1.95609 0.893228 2.19541 0.893228L4.79541 0.893228C5.03474 0.893228 5.22875 1.08724 5.22875 1.32656L5.22875 3.92656C5.22875 4.16588 5.03474 4.35989 4.79541 4.35989C4.55609 4.35989 4.36208 4.16588 4.36208 3.92656L4.36208 2.32812L4.36122 2.32877C3.86595 2.7023 3.26068 3.15879 2.7363 3.74884C2.11705 4.44565 1.65095 5.28747 1.65095 6.32333ZM11.2769 6.67742C11.2769 4.06697 9.4045 2.28029 7.2841 1.88222C7.03892 1.83619 6.87748 1.60012 6.92351 1.35494C6.96953 1.10976 7.20561 0.948312 7.45079 0.99434C9.94182 1.46199 12.1802 3.57722 12.1802 6.67742C12.1802 8.0092 11.5743 9.05583 10.8668 9.85202C10.3596 10.4227 9.77941 10.8859 9.31292 11.2408L10.7324 11.2408C10.9717 11.2408 11.1657 11.4348 11.1657 11.6741C11.1657 11.9134 10.9717 12.1074 10.7324 12.1074L8.13239 12.1074C7.89307 12.1074 7.69906 11.9134 7.69906 11.6741L7.69906 9.07409C7.69906 8.83476 7.89307 8.64075 8.13239 8.64075C8.37172 8.64075 8.56573 8.83476 8.56573 9.07409L8.56573 10.6726L8.56658 10.672C9.06186 10.2984 9.66712 9.84196 10.1915 9.25191C10.8108 8.5551 11.2769 7.71329 11.2769 6.67742Z",
            fill: i,
          }),
        });
      };
    },
    8983: function (e, t, n) {
      "use strict";
      n.d(t, {
        A: function () {
          return i;
        },
      });
      var a = n(57437);
      let i = (e) => {
        let { ...t } = e;
        return (0, a.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 16 16",
          ...t,
          children: (0, a.jsx)("path", {
            fill: "currentColor",
            fillRule: "evenodd",
            d: "M3.906 2.99a.91.91 0 0 0-.91.91v8.19c0 .502.408.91.91.91h8.19a.91.91 0 0 0 .91-.91V8.904a.455.455 0 0 0-.91 0v3.184h-8.19V3.9h3.185a.455.455 0 0 0 0-.91H3.906Zm8.644 0H9.82a.455.455 0 0 0 0 .91h1.63L6.769 8.583a.455.455 0 1 0 .644.643l4.683-4.683v1.632a.455.455 0 0 0 .91 0v-2.73a.455.455 0 0 0-.455-.455Z",
            clipRule: "evenodd",
          }),
        });
      };
    },
    55267: function (e, t, n) {
      "use strict";
      n.d(t, {
        s: function () {
          return i;
        },
      });
      var a = n(57437);
      let i = (0, n(2265).memo)((e) => {
        let { ...t } = e;
        return (0, a.jsxs)("svg", {
          width: "16",
          height: "16",
          viewBox: "0 0 16 16",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...t,
          children: [
            (0, a.jsxs)("g", {
              clipPath: "url(#clip0_174_3083)",
              children: [
                (0, a.jsx)("path", {
                  d: "M7.99992 14.6663C11.6818 14.6663 14.6666 11.6816 14.6666 7.99967C14.6666 4.31778 11.6818 1.33301 7.99992 1.33301C4.31802 1.33301 1.33325 4.31778 1.33325 7.99967C1.33325 11.6816 4.31802 14.6663 7.99992 14.6663Z",
                  stroke: t?.stroke ?? "#05847C",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, a.jsx)("path", {
                  d: "M8 10.6667V8",
                  stroke: t?.stroke ?? "#05847C",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, a.jsx)("path", {
                  d: "M8 5.33301H8.00667",
                  stroke: t?.stroke ?? "#05847C",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
              ],
            }),
            (0, a.jsx)("defs", {
              children: (0, a.jsx)("clipPath", {
                id: "clip0_174_3083",
                children: (0, a.jsx)("rect", {
                  width: "16",
                  height: "16",
                  fill: "white",
                }),
              }),
            }),
          ],
        });
      });
      i.displayName = "InfoIcon";
    },
    8910: function (e, t, n) {
      "use strict";
      n.d(t, {
        a: function () {
          return i;
        },
      });
      var a = n(57437);
      let i = (e) => {
        let { className: t, color: n } = e;
        return (0, a.jsxs)("svg", {
          className: t,
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 16 16",
          children: [
            (0, a.jsx)("path", {
              stroke: n || "currentColor",
              fill: n,
              d: "M7.567 1.75a.5.5 0 0 1 .866 0l6.928 12a.5.5 0 0 1-.433.75H1.072a.5.5 0 0 1-.433-.75l6.928-12Z",
            }),
            (0, a.jsx)("path", {
              stroke: "currentColor",
              strokeLinecap: "round",
              d: "M8 6v4.5M8 12h0",
            }),
          ],
        });
      };
    },
    28572: function (e, t, n) {
      "use strict";
      n.d(t, {
        x: function () {
          return s;
        },
      });
      var a = n(48691),
        i = n(54484);
      let s = (e, t) =>
        !e || Number.isNaN(e)
          ? "0.00"
          : Number(e) > 1e5
          ? Number(e).toLocaleString("en", {
              notation: "compact",
              roundingMode: "floor",
            })
          : (0, a.d)((0, i.t)(Number(e), t), 2);
    },
    48691: function (e, t, n) {
      "use strict";
      n.d(t, {
        d: function () {
          return a;
        },
      });
      let a = function (e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          n = e;
        e.includes(".") && (n = String(e).replace(/0+$/, ""));
        let a = n.endsWith(".") ? n.slice(0, -1) : n;
        if (t > 0) {
          if (0 === a.length) return `0.${"0".repeat(t)}`;
          if (!a.includes(".")) return `${a}.${"0".repeat(t)}`;
        }
        return a;
      };
    },
    89310: function () {},
    15911: function (e) {
      e.exports = {
        maintenancePage: "MaintenancePage_maintenancePage__Qy4EP",
        maintenancePageImage: "MaintenancePage_maintenancePageImage__fYLCp",
        maintenancePageTitle: "MaintenancePage_maintenancePageTitle__Q5FL7",
        maintenancePageContent: "MaintenancePage_maintenancePageContent__l1Ect",
      };
    },
    21604: function (e) {
      e.exports = {
        root: "BridgeCctpNote_root__Ob0_E",
        link: "BridgeCctpNote_link__gKECj",
        highlight: "BridgeCctpNote_highlight__TSaOE",
        green: "BridgeCctpNote_green__OY7Ze",
      };
    },
    26838: function (e) {
      e.exports = {
        status: "BridgeCurrentTransaction_status__v9K8o",
        status__header: "BridgeCurrentTransaction_status__header__xGy8M",
        wrap__button: "BridgeCurrentTransaction_wrap__button__eW1zj",
        wrapper: "BridgeCurrentTransaction_wrapper__rKZ02",
        padding: "BridgeCurrentTransaction_padding__4TIu0",
        destination: "BridgeCurrentTransaction_destination__xNsIY",
        row: "BridgeCurrentTransaction_row__8winX",
        label: "BridgeCurrentTransaction_label__x7HHJ",
        green: "BridgeCurrentTransaction_green___EGbN",
        wrapperDivider: "BridgeCurrentTransaction_wrapperDivider__A32KK",
        sup: "BridgeCurrentTransaction_sup__4DG_p",
        switch: "BridgeCurrentTransaction_switch__qrrLW",
        startWrapper: "BridgeCurrentTransaction_startWrapper__jbzxD",
        startButton: "BridgeCurrentTransaction_startButton__SB6GU",
      };
    },
    64007: function (e) {
      e.exports = {
        participant: "Participant_participant__63xHW",
        participant__box: "Participant_participant__box__gJN3h",
        participant__icon: "Participant_participant__icon___aN1h",
        participant__icon_empty: "Participant_participant__icon_empty__Gw_q8",
        participant__info: "Participant_participant__info__Cc3uf",
        participant__network: "Participant_participant__network__SC4qM",
        participant__token: "Participant_participant__token__mTVfU",
      };
    },
    22094: function (e) {
      e.exports = {
        process: "StatusProcess_process__BK3_V",
        process__participants: "StatusProcess_process__participants__hKEXj",
        process__loader: "StatusProcess_process__loader__8gVxf",
        process__loader_pending: "StatusProcess_process__loader_pending__a6gi4",
        process__loader_success: "StatusProcess_process__loader_success__t0p8v",
        process__icon: "StatusProcess_process__icon__uFJ_A",
        process__icon_connected: "StatusProcess_process__icon_connected__0mDgu",
        process__icon_sourceready:
          "StatusProcess_process__icon_sourceready__TiXDf",
        process__icon_targetready:
          "StatusProcess_process__icon_targetready__WHXuR",
        process__hint: "StatusProcess_process__hint__k3TYa",
      };
    },
    19734: function (e) {
      e.exports = {
        time: "TimePassed_time__igWoN",
        status: "TimePassed_status__pD34v",
      };
    },
    66417: function (e) {
      e.exports = {
        header: "BridgeFees_header__QoAeu",
        arrow: "BridgeFees_arrow__3VHMd",
        totalFeeTop: "BridgeFees_totalFeeTop__M0YMg",
        rightContent: "BridgeFees_rightContent__oESdh",
        row: "BridgeFees_row__91Mjd",
        label: "BridgeFees_label__1QcGn",
        value: "BridgeFees_value__EWvjx",
        content: "BridgeFees_content__Cm_L9",
        icon: "BridgeFees_icon__WNBu_",
        iconInfo: "BridgeFees_iconInfo__yL04e",
        tooltipContent: "BridgeFees_tooltipContent__QuBxI",
        coin: "BridgeFees_coin__5NuIW",
        rotated: "BridgeFees_rotated__zpeW_",
        noBorder: "BridgeFees_noBorder__HPqI6",
      };
    },
    41235: function (e) {
      e.exports = {
        root: "BridgeOperations_root__ydfWH",
        operations: "BridgeOperations_operations__6YBmK",
        operations__empty: "BridgeOperations_operations__empty__DOXj7",
        operations__wrapper: "BridgeOperations_operations__wrapper__syaJB",
      };
    },
    41424: function (e) {
      e.exports = {
        root: "ClaimBlock_root__I3lwT",
        text: "ClaimBlock_text__xZRxX",
        innerBox: "ClaimBlock_innerBox__8IQPj",
        button: "ClaimBlock_button__LpnaN",
      };
    },
    89930: function (e) {
      e.exports = {
        root: "OperationCard_root__W_zuH",
        wrapper: "OperationCard_wrapper__cio_X",
        header: "OperationCard_header__XWXOR",
        badge: "OperationCard_badge__rYO6O",
        badge_claimable: "OperationCard_badge_claimable__rGXKV",
        badge_claimed: "OperationCard_badge_claimed__z5wgx",
        badge_failed: "OperationCard_badge_failed__j90Iz",
        badge_pending: "OperationCard_badge_pending__HifXE",
        badge_complete: "OperationCard_badge_complete__lVrNm",
        time: "OperationCard_time__VhsGO",
        content: "OperationCard_content__ACeoP",
        token: "OperationCard_token__cLPEN",
        token__icon: "OperationCard_token__icon__sLrIa",
        token__value: "OperationCard_token__value__2yeLT",
        chains: "OperationCard_chains__eC8Gq",
        chains__arrow: "OperationCard_chains__arrow__QoPyf",
        chain: "OperationCard_chain__dT6Fx",
        chain__icon: "OperationCard_chain__icon__a0_v2",
      };
    },
    5137: function (e) {
      e.exports = {
        root: "Spoiler_root__ggsWH",
        root_open: "Spoiler_root_open__voQhb",
        header: "Spoiler_header__umQRT",
        button: "Spoiler_button__7psmJ",
        button__icon: "Spoiler_button__icon__XpRgX",
        button__icon_open: "Spoiler_button__icon_open__8CJVP",
        content: "Spoiler_content__hTaFA",
        item: "Spoiler_item__XC7ex",
      };
    },
    37184: function (e) {
      e.exports = {
        root: "TxInfo_root__D2D3j",
        label: "TxInfo_label__MBe1u",
        content: "TxInfo_content__sV4B9",
        link: "TxInfo_link__PZ2x_",
        link__icon: "TxInfo_link__icon__JLkVS",
        copy: "TxInfo_copy__xCwOt",
        copy_active: "TxInfo_copy_active__HqlIe",
        copy__hash: "TxInfo_copy__hash__koU_L",
        copy__hash_active: "TxInfo_copy__hash_active__R__pA",
        copy__chain: "TxInfo_copy__chain__bw2Oy",
        copy__text: "TxInfo_copy__text__DsGU0",
        copy__icon: "TxInfo_copy__icon__Wov1m",
      };
    },
    45384: function (e) {
      e.exports = {
        root: "BridgeSidebar_root__x3Kkt",
        tabs: "BridgeSidebar_tabs__agsnb",
      };
    },
    13901: function (e) {
      e.exports = {
        amount: "AmountBlock_amount__Etcrg",
        amount_error: "AmountBlock_amount_error__elKpo",
        amount__box: "AmountBlock_amount__box__xPvV_",
        amount__input: "AmountBlock_amount__input__fO0Zd",
        amount__input_disabled: "AmountBlock_amount__input_disabled__vLKUd",
        amount__text: "AmountBlock_amount__text__o9CXE",
        amount__max: "AmountBlock_amount__max__qwQsu",
        amount__balance: "AmountBlock_amount__balance__m_SNz",
        blocked: "AmountBlock_blocked__CN9eN",
        bottom: "AmountBlock_bottom__KQPy8",
        invisible: "AmountBlock_invisible__PaTDJ",
      };
    },
    89600: function (e) {
      e.exports = {
        connect: "ConnectWallet_connect__0rLdF",
        label: "ConnectWallet_label__ppBK_",
        addressNode: "ConnectWallet_addressNode__6_yYB",
      };
    },
    59183: function (e) {
      e.exports = {
        iconWrapper: "ConnectWalletButton_iconWrapper__x4iUI",
        walletIcon: "ConnectWalletButton_walletIcon__2JsBF",
        plusIcon: "ConnectWalletButton_plusIcon__vt8Zq",
        text: "ConnectWalletButton_text__NyuE1",
      };
    },
    66377: function (e) {
      e.exports = {
        destination: "Destination_destination__jZ5J2",
        destination_solana: "Destination_destination_solana__HLdtK",
        destination__input: "Destination_destination__input__7obkG",
        destination__input_primary:
          "Destination_destination__input_primary__RG6Lc",
        destination__input_secondary:
          "Destination_destination__input_secondary__UGdCo",
        destination__input_disabled:
          "Destination_destination__input_disabled__Pzmkr",
        destination__input_error: "Destination_destination__input_error__qS0UD",
        destination__switch: "Destination_destination__switch__LXAis",
        destination__button: "Destination_destination__button__yX_vP",
        destination__button_disabled:
          "Destination_destination__button_disabled__LPfDZ",
        destination__separator: "Destination_destination__separator__cDFht",
        label: "Destination_label__ogFGo",
        addressNode: "Destination_addressNode__crQPD",
        currentRoot: "Destination_currentRoot__tZ6Aw",
        iconWrapper: "Destination_iconWrapper__6cqtO",
        walletIcon: "Destination_walletIcon__ZHeue",
        plusIcon: "Destination_plusIcon__MQ7x2",
        inputWrapper: "Destination_inputWrapper__PVWpF",
        input: "Destination_input__tr3tH",
        walletIconSmall: "Destination_walletIconSmall__MiuSN",
        otherRoot: "Destination_otherRoot__5xzWP",
        inputWrapperError: "Destination_inputWrapperError__L41Ee",
        inputWrapperSuccess: "Destination_inputWrapperSuccess__X1XQl",
        smallIconWrapper: "Destination_smallIconWrapper__LXrym",
        errorText: "Destination_errorText___xuBR",
      };
    },
    33920: function (e) {
      e.exports = {
        interaction: "InteractionBlock_interaction__BVXf4",
        interaction__header: "InteractionBlock_interaction__header__7dZbc",
        interaction__title: "InteractionBlock_interaction__title__6PsNi",
        interaction__container:
          "InteractionBlock_interaction__container__MT_1N",
        interaction__network: "InteractionBlock_interaction__network__tgJWy",
        interaction__token: "InteractionBlock_interaction__token__Tvl_I",
        interaction__amount: "InteractionBlock_interaction__amount__upPJg",
        interaction__destination:
          "InteractionBlock_interaction__destination__JMOlt",
        titlePad: "InteractionBlock_titlePad__PSIZX",
      };
    },
    52126: function (e) {
      e.exports = {
        selector: "Selector_selector__Za42u",
        selector_small: "Selector_selector_small__UxA0w",
        selector__box: "Selector_selector__box__UZlwd",
        selector__box_small: "Selector_selector__box_small__gqOwN",
        selector__box_big: "Selector_selector__box_big__k6Jx4",
        selector__icon_empty: "Selector_selector__icon_empty__VhSE9",
        selector__name: "Selector_selector__name__hPVWg",
        selector__name_active: "Selector_selector__name_active__dRjEd",
      };
    },
    87598: function (e) {
      e.exports = {
        container: "Modal_container__NUKtJ",
        modal: "Modal_modal__h3aFW",
        modal__container: "Modal_modal__container__0QM41",
        modal__container_network: "Modal_modal__container_network__g_SIB",
        modal__title: "Modal_modal__title__9K1Uy",
        modal__close: "Modal_modal__close__ACzF7",
        banner: "Modal_banner__5uD1d",
        banner__title: "Modal_banner__title__RN0rO",
        banner__text: "Modal_banner__text__MRiAn",
        banner__link: "Modal_banner__link__uI7B_",
        rightLink: "Modal_rightLink__lmOEg",
        infoIcon: "Modal_infoIcon__wc6NV",
        networkModal: "Modal_networkModal__XR0uM",
        searchBar: "Modal_searchBar__qxPh2",
        searchInput: "Modal_searchInput__Hkbm6",
        inputSearchButton: "Modal_inputSearchButton__gd5lY",
        searchText: "Modal_searchText__LPNN_",
        noResultsQueryText: "Modal_noResultsQueryText__MG5xQ",
        searchResults: "Modal_searchResults__V_6ec",
        searchResultsColor: "Modal_searchResultsColor__Io78s",
        unknownSourceBannerContainer:
          "Modal_unknownSourceBannerContainer__ghzcS",
        unknownSourceBadgeText: "Modal_unknownSourceBadgeText__Npogf",
        unknownSourceBadge: "Modal_unknownSourceBadge__H5_1N",
        verifiedSourceBadge: "Modal_verifiedSourceBadge__k08eF",
        unknownSourceText: "Modal_unknownSourceText__XWvF7",
        verifiedSourceText: "Modal_verifiedSourceText__SG41n",
        notSupportedBadge: "Modal_notSupportedBadge__0WcqS",
        notSupportedBadgeText: "Modal_notSupportedBadgeText__mwc4y",
        button: "Modal_button__CamL9",
        selectButton: "Modal_selectButton__YA_Xx",
        cancelButton: "Modal_cancelButton__CIMzM",
        activeTokenList: "Modal_activeTokenList__l_ISU",
      };
    },
    80962: function (e) {
      e.exports = {
        item: "SelectNetworkItem_item__ALC9Z",
        item_selected: "SelectNetworkItem_item_selected__9u0De",
        item__box: "SelectNetworkItem_item__box___CxDr",
        item__icon: "SelectNetworkItem_item__icon__nigl2",
        item__name: "SelectNetworkItem_item__name__M34O9",
        disabled: "SelectNetworkItem_disabled__1I3kr",
      };
    },
    80068: function (e) {
      e.exports = {
        item: "RecentlySearchedTokenItem_item__q9SHb",
        item__container: "RecentlySearchedTokenItem_item__container__A0_fD",
        item__tokenValue: "RecentlySearchedTokenItem_item__tokenValue__HztaW",
      };
    },
    84510: function (e) {
      e.exports = {
        wrap: "SelectTokenItem_wrap__Vms9m",
        item: "SelectTokenItem_item__6Y95s",
        item_selected: "SelectTokenItem_item_selected__rOCgn",
        item__container: "SelectTokenItem_item__container__qFje5",
        item__box: "SelectTokenItem_item__box__gal4n",
        item__box_start: "SelectTokenItem_item__box_start__9fTnb",
        item__box_end: "SelectTokenItem_item__box_end__Zzq_1",
        item__image: "SelectTokenItem_item__image__xkhXq",
        item__icon: "SelectTokenItem_item__icon__kO4Jx",
        item__name: "SelectTokenItem_item__name__ytcky",
        item__ticker: "SelectTokenItem_item__ticker__rJbZ7",
        item__value: "SelectTokenItem_item__value__7Upsa",
        item__value_balance: "SelectTokenItem_item__value_balance__T3JSK",
        item__button: "SelectTokenItem_item__button__J1jRi",
        itemBalanceContainer: "SelectTokenItem_itemBalanceContainer__HK8tX",
        addTokenIconContainer: "SelectTokenItem_addTokenIconContainer__iUzaS",
        addTokenIcon: "SelectTokenItem_addTokenIcon__IRMOi",
      };
    },
    55826: function (e) {
      e.exports = {
        submit: "SubmitButton_submit__oWqre",
        refresh: "SubmitButton_refresh__Vfd6m",
        spin: "SubmitButton_spin__ydceG",
      };
    },
    80005: function (e) {
      e.exports = { switch: "SwitchTransfer_switch__V2eRJ" };
    },
    33701: function (e) {
      e.exports = {
        bridgePageLayout: "page_bridgePageLayout__3BLhd",
        backgroundContainer: "page_backgroundContainer__9IHxZ",
        contentContainer: "page_contentContainer__cGm8Z",
        contentContainerHeader: "page_contentContainerHeader__g8TgF",
        links: "page_links__zqCe3",
        entangleLabsLink: "page_entangleLabsLink__FDm2y",
        contentContainerFooter: "page_contentContainerFooter__FcViD",
        footerLink: "page_footerLink__BAfzO",
        title: "page_title__68bEY",
        bridgePage: "page_bridgePage__8vYkD",
        form: "page_form__9hxB2",
        form__switch: "page_form__switch__blQn0",
        form__to: "page_form__to__JJ9hY",
        form__submit: "page_form__submit__S5tKE",
        status: "page_status__I_LT1",
        bridgeIcon: "page_bridgeIcon__BMZa_",
        showStatus: "page_showStatus__VFlCv",
        showStatus__icon: "page_showStatus__icon__VnQ8e",
        showStatus__text: "page_showStatus__text__hwHtF",
        feesDesc: "page_feesDesc__ER98Z",
        feesMobile: "page_feesMobile__I3d_g",
      };
    },
    32676: function (e) {
      e.exports = {
        root: "StatusPipeline_root__CYnIc",
        pipeline: "StatusPipeline_pipeline__JC_AJ",
        status: "StatusPipeline_status__qjRTX",
        line: "StatusPipeline_line__6De3w",
        lineLoading: "StatusPipeline_lineLoading__oEcYR",
        "border-dance": "StatusPipeline_border-dance__LxvhO",
        lineDone: "StatusPipeline_lineDone__H4AXg",
        loadingPoint: "StatusPipeline_loadingPoint__nhlh_",
        linkIcon: "StatusPipeline_linkIcon__4jrRT",
        refresh: "StatusPipeline_refresh__pxR1a",
        spin: "StatusPipeline_spin__LHRHW",
        grayed: "StatusPipeline_grayed__DNZju",
        lineGray: "StatusPipeline_lineGray__dRfPK",
        yellow: "StatusPipeline_yellow__Xd_Z7",
        lineYellow: "StatusPipeline_lineYellow__CXgHl",
        lineRed: "StatusPipeline_lineRed__TPUM_",
        checkmark: "StatusPipeline_checkmark___H_9Z",
        pulse: "StatusPipeline_pulse__7tPOk",
      };
    },
    37047: function (e) {
      e.exports = {
        popoverContent: "AnnouncePopover_popoverContent__1jDnE",
        center: "AnnouncePopover_center__Lb_Km",
        activePopover: "AnnouncePopover_activePopover__CLAx3",
        left: "AnnouncePopover_left__VV9tm",
        content: "AnnouncePopover_content__VLaXP",
        base: "AnnouncePopover_base__G53Et",
        active: "AnnouncePopover_active__iA_Nr",
        text: "AnnouncePopover_text__tPUFi",
        green: "AnnouncePopover_green__8ZFl_",
        stakingDashboardLink: "AnnouncePopover_stakingDashboardLink__a1wDD",
        stakingDashboardIcon: "AnnouncePopover_stakingDashboardIcon__5IirU",
        styles: "AnnouncePopover_styles__cyHXx",
        button: "AnnouncePopover_button__gbno0",
        beAnnounced: "AnnouncePopover_beAnnounced__sO4_X",
        link: "AnnouncePopover_link__VKB5P",
      };
    },
    45682: function (e) {
      e.exports = {
        title: "popovers_title__Um_Ie",
        active: "popovers_active__5gUen",
      };
    },
    66905: function (e) {
      e.exports = {
        tabs: "Tabs_tabs__eu_eo",
        item: "Tabs_item__ito_F",
        li: "Tabs_li__o6TDN",
        amount: "Tabs_amount__Xn2O_",
        item_active: "Tabs_item_active__BSTB9",
      };
    },
    77299: function (e) {
      e.exports = { root: "Tag_root__brcqU" };
    },
  },
]);
