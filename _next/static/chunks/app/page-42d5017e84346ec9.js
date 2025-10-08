(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1931],
  {
    78595: function (e, t, n) {
      Promise.resolve().then(n.bind(n, 1276)),
        Promise.resolve().then(n.bind(n, 20951)),
        Promise.resolve().then(n.bind(n, 96150));
    },
    61724: function (e) {
      "use strict";
      e.exports = [
        {
          inputs: [
            { internalType: "address", name: "masterRouter", type: "address" },
            { internalType: "address", name: "priceFeed", type: "address" },
            { internalType: "address", name: "factory", type: "address" },
            { internalType: "address", name: "registry", type: "address" },
            { internalType: "address", name: "paymentToken", type: "address" },
            {
              internalType: "uint8",
              name: "paymentTokenDecimals",
              type: "uint8",
            },
            {
              internalType: "uint8",
              name: "nativeTokenDecimals",
              type: "uint8",
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
        { inputs: [], name: "UTSDeploymentRouter__E0", type: "error" },
        { inputs: [], name: "UTSDeploymentRouter__E1", type: "error" },
        { inputs: [], name: "UTSDeploymentRouter__E2", type: "error" },
        { inputs: [], name: "UTSDeploymentRouter__E3", type: "error" },
        { inputs: [], name: "UTSDeploymentRouter__E4", type: "error" },
        { inputs: [], name: "UTSDeploymentRouter__E5", type: "error" },
        { inputs: [], name: "UTSDeploymentRouter__E6", type: "error" },
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
              internalType: "uint256",
              name: "chainId",
              type: "uint256",
            },
            {
              indexed: !1,
              internalType: "uint64",
              name: "newConnectorDeployGas",
              type: "uint64",
            },
            {
              indexed: !0,
              internalType: "address",
              name: "caller",
              type: "address",
            },
          ],
          name: "ConfigConnectorDeployGasSet",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: "uint256",
              name: "chainId",
              type: "uint256",
            },
            {
              indexed: !1,
              internalType: "bytes",
              name: "newFactory",
              type: "bytes",
            },
            {
              indexed: !0,
              internalType: "address",
              name: "caller",
              type: "address",
            },
          ],
          name: "ConfigFactorySet",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: "uint256",
              name: "chainId",
              type: "uint256",
            },
            {
              indexed: !1,
              internalType: "uint16",
              name: "newProtocolFee",
              type: "uint16",
            },
            {
              indexed: !0,
              internalType: "address",
              name: "caller",
              type: "address",
            },
          ],
          name: "ConfigProtocolFeeSet",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: "uint256",
              name: "chainId",
              type: "uint256",
            },
            {
              indexed: !1,
              internalType: "uint64",
              name: "newTokenDeployGas",
              type: "uint64",
            },
            {
              indexed: !0,
              internalType: "address",
              name: "caller",
              type: "address",
            },
          ],
          name: "ConfigTokenDeployGasSet",
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
          name: "EOB_CHAIN_ID",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "FACTORY",
          outputs: [{ internalType: "address", name: "", type: "address" }],
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
          name: "PAYMENT_TOKEN",
          outputs: [{ internalType: "address", name: "", type: "address" }],
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
          name: "REGISTRY",
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
            { internalType: "uint256", name: "dstChainId", type: "uint256" },
          ],
          name: "dstConnectorDeployGas",
          outputs: [{ internalType: "uint64", name: "", type: "uint64" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "dstChainId", type: "uint256" },
          ],
          name: "dstDeployConfig",
          outputs: [
            {
              components: [
                { internalType: "bytes", name: "factory", type: "bytes" },
                {
                  internalType: "uint64",
                  name: "tokenDeployGas",
                  type: "uint64",
                },
                {
                  internalType: "uint64",
                  name: "connectorDeployGas",
                  type: "uint64",
                },
                { internalType: "uint16", name: "protocolFee", type: "uint16" },
              ],
              internalType: "struct DstDeployConfig",
              name: "",
              type: "tuple",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "dstChainId", type: "uint256" },
          ],
          name: "dstFactory",
          outputs: [{ internalType: "bytes", name: "", type: "bytes" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "dstChainId", type: "uint256" },
          ],
          name: "dstProtocolFee",
          outputs: [{ internalType: "uint16", name: "", type: "uint16" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "dstChainId", type: "uint256" },
          ],
          name: "dstTokenDeployGas",
          outputs: [{ internalType: "uint64", name: "", type: "uint64" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256[]",
              name: "dstTokenChainIds",
              type: "uint256[]",
            },
            {
              internalType: "uint256[]",
              name: "dstConnectorChainIds",
              type: "uint256[]",
            },
          ],
          name: "estimateDeploy",
          outputs: [
            {
              internalType: "uint256[]",
              name: "tokenPaymentAmount",
              type: "uint256[]",
            },
            {
              internalType: "uint256[]",
              name: "connectorPaymentAmount",
              type: "uint256[]",
            },
            {
              internalType: "uint256",
              name: "totalPaymentAmount",
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
              name: "dstTokenChainIds",
              type: "uint256[]",
            },
            {
              internalType: "uint256[]",
              name: "dstConnectorChainIds",
              type: "uint256[]",
            },
          ],
          name: "estimateDeployNative",
          outputs: [
            {
              internalType: "uint256[]",
              name: "tokenPaymentAmountNative",
              type: "uint256[]",
            },
            {
              internalType: "uint256[]",
              name: "connectorPaymentAmountNative",
              type: "uint256[]",
            },
            {
              internalType: "uint256",
              name: "totalPaymentAmountNative",
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
              name: "dstTokenChainIds",
              type: "uint256[]",
            },
            {
              internalType: "uint256[]",
              name: "dstConnectorChainIds",
              type: "uint256[]",
            },
          ],
          name: "estimateDeployTotal",
          outputs: [
            {
              internalType: "uint256",
              name: "paymentTokenAmount",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "paymentNativeAmount",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "dstFactoryAddress",
              type: "address",
            },
            { internalType: "bytes1", name: "messageType", type: "bytes1" },
            { internalType: "bytes", name: "localParams", type: "bytes" },
          ],
          name: "execute",
          outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [
            {
              components: [
                { internalType: "bytes", name: "owner", type: "bytes" },
                {
                  internalType: "bytes",
                  name: "underlyingToken",
                  type: "bytes",
                },
                { internalType: "bool", name: "feeModule", type: "bool" },
                { internalType: "bytes", name: "router", type: "bytes" },
                {
                  internalType: "uint256[]",
                  name: "allowedChainIds",
                  type: "uint256[]",
                },
                {
                  components: [
                    {
                      internalType: "bytes",
                      name: "peerAddress",
                      type: "bytes",
                    },
                    {
                      internalType: "uint64",
                      name: "minGasLimit",
                      type: "uint64",
                    },
                    { internalType: "uint8", name: "decimals", type: "uint8" },
                    { internalType: "bool", name: "paused", type: "bool" },
                  ],
                  internalType: "struct ChainConfig[]",
                  name: "chainConfigs",
                  type: "tuple[]",
                },
                { internalType: "bytes32", name: "salt", type: "bytes32" },
              ],
              internalType: "struct DeployConnectorData",
              name: "deployData",
              type: "tuple",
            },
          ],
          name: "getDeployConnectorParams",
          outputs: [{ internalType: "bytes", name: "", type: "bytes" }],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [
            {
              components: [
                { internalType: "bytes", name: "owner", type: "bytes" },
                { internalType: "string", name: "name", type: "string" },
                { internalType: "string", name: "symbol", type: "string" },
                { internalType: "uint8", name: "decimals", type: "uint8" },
                {
                  internalType: "uint256",
                  name: "initialSupply",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "mintedAmountToOwner",
                  type: "uint256",
                },
                { internalType: "bool", name: "pureToken", type: "bool" },
                { internalType: "bool", name: "mintable", type: "bool" },
                { internalType: "bool", name: "globalBurnable", type: "bool" },
                {
                  internalType: "bool",
                  name: "onlyRoleBurnable",
                  type: "bool",
                },
                { internalType: "bool", name: "feeModule", type: "bool" },
                { internalType: "bytes", name: "router", type: "bytes" },
                {
                  internalType: "uint256[]",
                  name: "allowedChainIds",
                  type: "uint256[]",
                },
                {
                  components: [
                    {
                      internalType: "bytes",
                      name: "peerAddress",
                      type: "bytes",
                    },
                    {
                      internalType: "uint64",
                      name: "minGasLimit",
                      type: "uint64",
                    },
                    { internalType: "uint8", name: "decimals", type: "uint8" },
                    { internalType: "bool", name: "paused", type: "bool" },
                  ],
                  internalType: "struct ChainConfig[]",
                  name: "chainConfigs",
                  type: "tuple[]",
                },
                { internalType: "bytes32", name: "salt", type: "bytes32" },
              ],
              internalType: "struct DeployTokenData",
              name: "deployData",
              type: "tuple",
            },
          ],
          name: "getDeployTokenParams",
          outputs: [{ internalType: "bytes", name: "", type: "bytes" }],
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
            { internalType: "address", name: "defaultAdmin", type: "address" },
          ],
          name: "initialize",
          outputs: [],
          stateMutability: "nonpayable",
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
          name: "protocolVersion",
          outputs: [{ internalType: "bytes2", name: "", type: "bytes2" }],
          stateMutability: "pure",
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
            {
              components: [
                {
                  internalType: "uint256",
                  name: "dstChainId",
                  type: "uint256",
                },
                { internalType: "bool", name: "isConnector", type: "bool" },
                { internalType: "bytes", name: "params", type: "bytes" },
              ],
              internalType: "struct DeployMetadata[]",
              name: "deployMetadata",
              type: "tuple[]",
            },
            { internalType: "address", name: "paymentToken", type: "address" },
          ],
          name: "sendDeployRequest",
          outputs: [
            { internalType: "uint256", name: "paymentAmount", type: "uint256" },
            {
              internalType: "address",
              name: "currentChainDeployment",
              type: "address",
            },
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
              components: [
                { internalType: "bytes", name: "factory", type: "bytes" },
                {
                  internalType: "uint64",
                  name: "tokenDeployGas",
                  type: "uint64",
                },
                {
                  internalType: "uint64",
                  name: "connectorDeployGas",
                  type: "uint64",
                },
                { internalType: "uint16", name: "protocolFee", type: "uint16" },
              ],
              internalType: "struct DstDeployConfig[]",
              name: "newConfigs",
              type: "tuple[]",
            },
          ],
          name: "setDstDeployConfig",
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
              name: "newTokenDeployGas",
              type: "uint64[]",
            },
            {
              internalType: "uint64[]",
              name: "newConnectorDeployGas",
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
            { internalType: "bytes[]", name: "newFactory", type: "bytes[]" },
          ],
          name: "setDstFactory",
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
              internalType: "uint16[]",
              name: "newProtocolFees",
              type: "uint16[]",
            },
          ],
          name: "setDstProtocolFee",
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
    },
    64402: function (e) {
      "use strict";
      e.exports = [
        {
          inputs: [
            { internalType: "address", name: "masterRouter", type: "address" },
            { internalType: "address", name: "registry", type: "address" },
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
        { inputs: [], name: "Create2EmptyBytecode", type: "error" },
        { inputs: [], name: "Create2FailedDeployment", type: "error" },
        {
          inputs: [
            { internalType: "uint256", name: "balance", type: "uint256" },
            { internalType: "uint256", name: "needed", type: "uint256" },
          ],
          name: "Create2InsufficientBalance",
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
        { inputs: [], name: "UTSFactory__E0", type: "error" },
        { inputs: [], name: "UTSFactory__E1", type: "error" },
        { inputs: [], name: "UTSFactory__E2", type: "error" },
        { inputs: [], name: "UTSFactory__E3", type: "error" },
        { inputs: [], name: "UTSFactory__E4", type: "error" },
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
              internalType: "uint8",
              name: "blueprintId",
              type: "uint8",
            },
            {
              indexed: !1,
              internalType: "address",
              name: "newCodeStorage",
              type: "address",
            },
            {
              indexed: !0,
              internalType: "address",
              name: "caller",
              type: "address",
            },
          ],
          name: "CodeStorageSet",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !1,
              internalType: "address",
              name: "deployment",
              type: "address",
            },
            {
              indexed: !0,
              internalType: "bytes",
              name: "deployerIndexed",
              type: "bytes",
            },
            {
              indexed: !1,
              internalType: "bytes",
              name: "deployer",
              type: "bytes",
            },
            {
              indexed: !0,
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              indexed: !0,
              internalType: "address",
              name: "underlyingToken",
              type: "address",
            },
            {
              indexed: !1,
              internalType: "bytes32",
              name: "salt",
              type: "bytes32",
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
              internalType: "uint8",
              name: "decimals",
              type: "uint8",
            },
          ],
          name: "Deployed",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !1,
              internalType: "address",
              name: "newRouter",
              type: "address",
            },
            {
              indexed: !0,
              internalType: "address",
              name: "caller",
              type: "address",
            },
          ],
          name: "DeploymentRouterSet",
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
          name: "REGISTRY",
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
            { internalType: "uint8", name: "blueprintId", type: "uint8" },
          ],
          name: "codeStorage",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "bool", name: "isConnector", type: "bool" },
            { internalType: "bytes", name: "deployer", type: "bytes" },
            { internalType: "bytes", name: "deployParams", type: "bytes" },
          ],
          name: "deployByRouter",
          outputs: [
            { internalType: "bool", name: "success", type: "bool" },
            { internalType: "address", name: "newDeployment", type: "address" },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              components: [
                { internalType: "bytes", name: "owner", type: "bytes" },
                {
                  internalType: "bytes",
                  name: "underlyingToken",
                  type: "bytes",
                },
                { internalType: "bool", name: "feeModule", type: "bool" },
                { internalType: "bytes", name: "router", type: "bytes" },
                {
                  internalType: "uint256[]",
                  name: "allowedChainIds",
                  type: "uint256[]",
                },
                {
                  components: [
                    {
                      internalType: "bytes",
                      name: "peerAddress",
                      type: "bytes",
                    },
                    {
                      internalType: "uint64",
                      name: "minGasLimit",
                      type: "uint64",
                    },
                    { internalType: "uint8", name: "decimals", type: "uint8" },
                    { internalType: "bool", name: "paused", type: "bool" },
                  ],
                  internalType: "struct ChainConfig[]",
                  name: "chainConfigs",
                  type: "tuple[]",
                },
                { internalType: "bytes32", name: "salt", type: "bytes32" },
              ],
              internalType: "struct DeployConnectorData",
              name: "deployData",
              type: "tuple",
            },
          ],
          name: "deployConnector",
          outputs: [
            { internalType: "bool", name: "success", type: "bool" },
            { internalType: "address", name: "newConnector", type: "address" },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              components: [
                { internalType: "bytes", name: "owner", type: "bytes" },
                { internalType: "string", name: "name", type: "string" },
                { internalType: "string", name: "symbol", type: "string" },
                { internalType: "uint8", name: "decimals", type: "uint8" },
                {
                  internalType: "uint256",
                  name: "initialSupply",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "mintedAmountToOwner",
                  type: "uint256",
                },
                { internalType: "bool", name: "pureToken", type: "bool" },
                { internalType: "bool", name: "mintable", type: "bool" },
                { internalType: "bool", name: "globalBurnable", type: "bool" },
                {
                  internalType: "bool",
                  name: "onlyRoleBurnable",
                  type: "bool",
                },
                { internalType: "bool", name: "feeModule", type: "bool" },
                { internalType: "bytes", name: "router", type: "bytes" },
                {
                  internalType: "uint256[]",
                  name: "allowedChainIds",
                  type: "uint256[]",
                },
                {
                  components: [
                    {
                      internalType: "bytes",
                      name: "peerAddress",
                      type: "bytes",
                    },
                    {
                      internalType: "uint64",
                      name: "minGasLimit",
                      type: "uint64",
                    },
                    { internalType: "uint8", name: "decimals", type: "uint8" },
                    { internalType: "bool", name: "paused", type: "bool" },
                  ],
                  internalType: "struct ChainConfig[]",
                  name: "chainConfigs",
                  type: "tuple[]",
                },
                { internalType: "bytes32", name: "salt", type: "bytes32" },
              ],
              internalType: "struct DeployTokenData",
              name: "deployData",
              type: "tuple",
            },
          ],
          name: "deployToken",
          outputs: [
            { internalType: "bool", name: "success", type: "bool" },
            { internalType: "address", name: "newToken", type: "address" },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint8", name: "blueprintId", type: "uint8" },
            { internalType: "bytes", name: "deployer", type: "bytes" },
            { internalType: "bytes32", name: "salt", type: "bytes32" },
            { internalType: "bool", name: "isConnector", type: "bool" },
          ],
          name: "getPrecomputedAddress",
          outputs: [
            { internalType: "address", name: "deployment", type: "address" },
            { internalType: "bool", name: "hasCode", type: "bool" },
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
          name: "protocolVersion",
          outputs: [{ internalType: "bytes2", name: "", type: "bytes2" }],
          stateMutability: "pure",
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
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint8[]", name: "blueprintIds", type: "uint8[]" },
            {
              internalType: "address[]",
              name: "newCodeStorage",
              type: "address[]",
            },
          ],
          name: "setCodeStorage",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "newRouter", type: "address" },
          ],
          name: "setRouter",
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
    },
    19523: function (e, t, n) {
      "use strict";
      n.d(t, {
        u: function () {
          return o;
        },
      });
      var a = n(64402),
        s = n.n(a),
        i = n(2265),
        r = n(37691),
        l = n(94594);
      let o = (e) => {
        let { abi: t, args: n, signer: a, address: o, functionName: d } = e,
          [c, p] = (0, i.useState)({}),
          [u, m] = (0, i.useState)({}),
          [_, y] = (0, i.useState)({}),
          h = n?.toString() || "",
          x = (0, i.useCallback)(async () => {
            try {
              m((e) => ({ ...e, [h]: !1 }));
              let e = await (0, r.L)(l.gb, {
                address: o,
                abi: t ?? s(),
                client: a,
                functionName: d,
                args: n,
              });
              p((t) => ({ ...t, [h]: e })), m((e) => ({ ...e, [h]: !1 }));
            } catch (e) {
              console.log("useReadContract error", e),
                y((e) => ({ ...e, [h]: !0 }));
            }
          }, [o, n, d, h, a]);
        return (
          (0, i.useEffect)(() => {
            x().then();
          }, [x, a]),
          { result: c[h], isLoading: u[h], isError: _[h], refetch: x }
        );
      };
    },
    75448: function (e, t, n) {
      "use strict";
      n.d(t, {
        z: function () {
          return o;
        },
      });
      var a = n(57437),
        s = n(14822),
        i = n.n(s),
        r = n(24919),
        l = n(28369);
      let o = (e) => {
        let { validatorDescriptions: t } = e.validator;
        if (!t.length) return null;
        let n = t[0]?.moniker;
        return (0, a.jsx)("div", {
          className: i().nameColumnData,
          children: (0, a.jsx)("div", {
            className: i().nameAndAvatarContainer,
            children:
              n &&
              (0, a.jsxs)(a.Fragment, {
                children: [
                  (0, a.jsx)(r.oi, { id: n, width: "12", height: "12" }),
                  n &&
                    (0, a.jsx)("span", {
                      className: i().name,
                      children: (0, l.$)(n),
                    }),
                ],
              }),
          }),
        });
      };
    },
    32400: function (e, t, n) {
      "use strict";
      function a(e, t, n) {
        return e.reduce((e, a) => {
          let s = a[2].owner,
            i = {
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
          return e[s] ? e[s].push(i) : (e[s] = [i]), e;
        }, {});
      }
      function s(e) {
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
            let s = {
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
            a.clusters_deployments.push(s),
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
          return s;
        },
      });
    },
    45158: function (e, t, n) {
      "use strict";
      n.d(t, {
        C: function () {
          return c;
        },
      });
      var a = n(32400),
        s = n(99376),
        i = n(2265),
        r = n(33730),
        l = n(19066),
        o = n(82957).Buffer;
      let d = "successClusterModals",
        c = () => {
          let { push: e } = (0, s.useRouter)(),
            { address: t } = (0, r.Z)(),
            [n, c] = (0, i.useState)([]),
            p = (0, s.usePathname)(),
            u = (0, i.useCallback)(() => {
              let e = localStorage.getItem("uts_deployments");
              c((e ? JSON.parse(e) : {})[t?.toLowerCase() || ""] || []);
            }, [t]);
          (0, i.useEffect)(() => {
            t && u();
            let e = (e) => {
              "uts_deployments" === e.key &&
                (u(), console.log("Cluster data updated for uts_deployments"));
            };
            return (
              window.addEventListener("storage", e),
              () => {
                window.removeEventListener("storage", e);
              }
            );
          }, [t, u, p]);
          let m = (e) => {
            let t = localStorage.getItem(d),
              n = [...(t ? JSON.parse(t) : []), e];
            localStorage.setItem(d, JSON.stringify(n));
          };
          return {
            setDeployingLocalStorage: (t, n) => {
              let s = JSON.parse(
                  localStorage.getItem("uts_deployments") || "{}"
                ),
                i = [];
              t.forEach((e) => {
                let t = e[0],
                  n = e[2]?.peerAddress;
                i.push({ chainId: t, peerAddress: n });
              });
              let r = (function (e) {
                let t = e.map((e) => ({
                  chainId: e.chainId,
                  peer: e.peerAddress.toLowerCase(),
                }));
                t.sort((e, t) => {
                  let n = BigInt(e.chainId),
                    a = BigInt(t.chainId),
                    s = n === a ? 0 : n > a ? 1 : -1;
                  return 0 !== s ? s : e.peer.localeCompare(t.peer);
                });
                let n = t
                  .map((e) =>
                    Uint8Array.from(o.from(e.chainId.toString() + e.peer))
                  )
                  .reduce(
                    (e, t) => Uint8Array.from([...e, ...t]),
                    new Uint8Array(0)
                  );
                return (0, l.w)(n);
              })(i);
              m(r);
              let d = (0, a.S)(t, r, n);
              for (let e in d) s[e] ? s[e].push(...d[e]) : (s[e] = d[e]);
              localStorage.setItem("uts_deployments", JSON.stringify(s)),
                u(),
                e(`/station?clusterId=${r}`);
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
                u());
            },
          };
        };
    },
    16011: function (e, t, n) {
      "use strict";
      n.d(t, {
        t: function () {
          return i;
        },
      });
      var a = n(2265),
        s = n(33555);
      let i = (e, t) => {
        let [n, i] = (0, a.useState)(null),
          [r, l] = (0, a.useState)(null),
          [o, d] = (0, a.useState)(!1);
        (0, a.useRef)(0);
        let c = async () => {
          i(null), l(null), d(!0);
          try {
            let n = await fetch(
              `/api/validate-token-address?token-address=${t}&chain-id=${e}`
            );
            if (!n.ok) {
              let e = await n.json();
              throw Error(e.error);
            }
            let a = await n.json();
            return l(a), d(!1), !0;
          } catch (e) {
            return (
              i(e instanceof Error ? e.message : "An unknown error occurred"),
              d(!1),
              !1
            );
          }
        };
        return (
          (0, a.useEffect)(() => {
            e &&
              t &&
              ((0, s.U)(t) ? c() : (i("Invalid Token Address"), l(null)));
          }, [e, t]),
          { result: r, loading: o, error: n }
        );
      };
    },
    1276: function (e, t, n) {
      "use strict";
      n.d(t, {
        default: function () {
          return tD;
        },
      });
      var a = n(57437),
        s = n(66570),
        i = n.n(s),
        r = n(33730),
        l = n(91960),
        o = n(38536),
        d = n(2265),
        c = n(29557),
        p = n(77865),
        u = n(94594);
      let m = (e) => {
        let { chainId: t, disconnect: n } = (0, r.Z)(),
          a = async () => {
            if (t && !e.some((e) => e.chainId === t))
              try {
                let e = await (0, p.c)(u.gb, {
                  chainId: c.m5.Ethereum.chainId,
                });
                console.log(e);
              } catch (e) {
                e?.cause?.code === 4001 && n();
              }
          };
        (0, d.useEffect)(() => {
          a();
        }, [t, e, p.c]);
      };
      var _ = n(29501),
        y = n(9319),
        h = n(48907),
        x = n.n(h),
        g = n(33145),
        b = n(90028),
        k = n.n(b),
        v = n(89197),
        f = n.n(v),
        T = n(36760),
        N = n.n(T),
        j = (e) => {
          let {
            value: t = "undefined",
            onChange: n,
            shape: s = "square",
            isClickable: i = !1,
          } = e;
          return (0, a.jsx)("div", {
            className: N()(f().checkbox, f()[t], f()[s], {
              [f().nonClickable]: !i,
            }),
            onClick: i ? n : void 0,
            "aria-checked":
              "checked" === t || ("semichecked" === t ? "mixed" : void 0),
            role: "checkbox",
            tabIndex: i ? 0 : -1,
          });
        };
      let w = (0, d.memo)((e) => {
        let { value: t, children: n, onChange: s } = e,
          i = (0, d.useCallback)(() => {
            s && s();
          }, [s]);
        return (0, a.jsxs)("div", {
          className: k().alert,
          onClick: i,
          style: { cursor: s ? "pointer" : "unset" },
          children: [
            void 0 !== t &&
              (0, a.jsx)(j, {
                value: t ? "checked" : "undefined",
                isClickable: !0,
              }),
            (0, a.jsx)("p", { className: k().text, children: n }),
          ],
        });
      });
      w.displayName = "Alert";
      var C = n(34246),
        S = n.n(C),
        I = n(16011),
        M = n(72694),
        E = { src: "/_next/static/media/error.e0c70a02.svg" },
        D = n(26185),
        L = n(3562);
      let B = (0, d.memo)((e) => {
        let {
            error: t,
            address: n,
            network: s,
            onFetch: i,
            onDelete: r,
            onNetworkSelect: l,
            onAddressChange: o,
          } = e,
          [c, p] = (0, d.useState)(n),
          [u, m] = (0, M.nj)(n, 500),
          { result: _, loading: y, error: h } = (0, I.t)(s?.chainId, n),
          x = (0, d.useCallback)(
            (e) => {
              y || (p(e.target.value), m(e.target.value));
            },
            [y]
          );
        return (
          (0, d.useEffect)(() => {
            o(u);
          }, [u]),
          (0, d.useEffect)(() => {
            if (h) i(h, y);
            else if (_) {
              let e = "";
              _.isETS && (e = "UTS Token Not Allowed"),
                _.isERC20 || (e = "Invalid Address"),
                i(e, y);
            } else i("", y);
          }, [_, h, y]),
          (0, a.jsx)(a.Fragment, {
            children: (0, a.jsxs)("div", {
              className: S().block,
              children: [
                (0, a.jsx)("button", {
                  onClick: l,
                  disabled: y,
                  className: N()(S().network, {
                    [S().network_selected]: _?.isERC20,
                  }),
                  children: (0, a.jsx)(D.f, {
                    width: 40,
                    height: 40,
                    alt: s.name,
                    src: (0, L.sf)(s.name, "transparent"),
                  }),
                }),
                (0, a.jsxs)("div", {
                  className: N()(S().inputWrapper, {
                    [S().inputWrapper_error]: t,
                    [S().inputWrapper_selected]: _?.isERC20,
                  }),
                  children: [
                    (0, a.jsx)("input", {
                      type: "text",
                      value: c,
                      className: S().input,
                      onChange: x,
                      placeholder: "Enter ERC-20 token address",
                    }),
                    _?.isERC20 &&
                      (0, a.jsx)("p", {
                        className: S().type,
                        children: "ERC-20",
                      }),
                    (0, a.jsx)("button", {
                      className: S().button,
                      onClick: r,
                      children: (0, a.jsx)(g.default, {
                        src: "/_next/static/media/bin.6d362fc4.svg",
                        width: 16,
                        height: 16,
                        alt: "Add",
                      }),
                    }),
                    t &&
                      (0, a.jsxs)(a.Fragment, {
                        children: [
                          (0, a.jsx)("p", {
                            className: S().errorText,
                            children: t,
                          }),
                          (0, a.jsx)(g.default, {
                            width: 24,
                            height: 24,
                            alt: "Error",
                            src: E.src,
                            className: S().errorIcon,
                          }),
                        ],
                      }),
                  ],
                }),
              ],
            }),
          })
        );
      });
      B.displayName = "ImportedTokenCard";
      var A = n(70885),
        P = n.n(A),
        R = n(24919);
      let W = (0, d.memo)((e) => {
        let { open: t, value: n, options: s, onClose: i, onChange: r } = e;
        return (0, a.jsx)(R.F0, {
          title: "Select Network",
          enable: t,
          onClose: i,
          isCloseIcon: !0,
          modalClassName: P().modal,
          titleClassName: P().modalTitle,
          closeIconClassName: P().modalClose,
          children: (0, a.jsxs)("div", {
            className: P().modalNetworkSelector,
            children: [
              (0, a.jsx)("p", {
                className: P().subTitle,
                children:
                  "At the moment we currently support only ERC20 addresses and EVM chains",
              }),
              (0, a.jsx)("div", {
                className: P().grid,
                children: s.map((e) =>
                  (0, a.jsxs)(
                    "button",
                    {
                      onClick: () => r(e),
                      disabled: e.comingSoon,
                      className: N()(P().item, {
                        [P().selected]: e.chainId === n?.chainId,
                        [P().comingSoon]: e.comingSoon,
                      }),
                      children: [
                        (0, a.jsx)(g.default, {
                          src: e.icon.src,
                          width: 24,
                          height: 24,
                          alt: e.name,
                        }),
                        (0, a.jsx)("p", {
                          className: P().name,
                          children: e.name,
                        }),
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
      W.displayName = "ModalNetworkSelector";
      var U = n(75888);
      let O = (e) => ({
          id: Date.now(),
          error: "",
          address: "",
          loading: !1,
          network: e[0],
        }),
        F = (0, d.memo)((e) => {
          let { networks: t } = e,
            n = (0, l.TL)(),
            { watch: s, setValue: i } = (0, _.Gc)(),
            r = s("importedTokens", []),
            [o, c] = (0, d.useState)(!1),
            [p, u] = (0, d.useState)(!1),
            [m, y] = (0, d.useState)(!1),
            [h, b] = (0, d.useState)(!1),
            [k, v] = (0, d.useState)(null),
            f = (0, d.useMemo)(() => {
              let e = r.reduce((e, t) => {
                let { network: n } = t;
                return { ...e, [n.chainId]: !0 };
              }, {});
              return t.filter((t) => !e[t.chainId]);
            }, [t, r]),
            T = (0, d.useMemo)(() => f.filter((e) => !e.comingSoon), [f]),
            N = (0, d.useCallback)(() => {
              i("importedTokens", [...r, { ...O(T), network: T[0] }]);
            }, [i, T, r]),
            j = (0, d.useCallback)(() => v(null), []),
            C = (0, d.useCallback)(
              (e) => {
                j(),
                  i(
                    "importedTokens",
                    r.map((t) => (t.id === k ? { ...t, network: e } : t))
                  );
              },
              [i, j, k, r]
            ),
            S = (0, d.useCallback)(
              (e) => (t, n) => {
                i(
                  "importedTokens",
                  r.map((a) =>
                    a.id === e ? { ...a, error: t, loading: n } : a
                  )
                );
              },
              [i, r]
            ),
            I = (0, d.useCallback)(
              (e) => () => {
                i(
                  "importedTokens",
                  r.filter((t) => {
                    let { id: n } = t;
                    return n !== e;
                  })
                );
              },
              [i, r]
            ),
            M = (0, d.useCallback)(
              (e) => (t) => {
                i(
                  "importedTokens",
                  r?.map((n) =>
                    n.id === e ? { ...n, address: t, loading: !0 } : n
                  ) || []
                );
              },
              [i, r]
            ),
            E = (0, d.useCallback)((e) => () => v(e), []),
            D = (0, d.useMemo)(
              () =>
                r.every((e) => {
                  let { error: t, loading: n, address: a } = e;
                  return !t && !n && a;
                }),
              [r]
            ),
            L = (0, d.useMemo)(
              () => !!D && (!o || !!p) && (!m || !!h),
              [D, o, p, m, h]
            );
          return (
            (0, d.useEffect)(() => {
              D
                ? (r.length >= 1 ? c(!0) : c(!1), r.length >= 2 ? y(!0) : y(!1))
                : (c(!1), y(!1));
            }, [D, r]),
            (0, d.useEffect)(() => {
              n(U.s.actions.setIsFilledStep(L));
            }, [n, L]),
            (0, d.useEffect)(() => {
              0 === r.length && N();
            }, [r]),
            (0, a.jsxs)("div", {
              className: x().block,
              children: [
                (0, a.jsxs)("div", {
                  className: x().header,
                  children: [
                    (0, a.jsx)("span", {}),
                    (0, a.jsx)("h4", {
                      className: x().title,
                      children: "Import Token (s)",
                    }),
                    (0, a.jsx)("span", {}),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: x().body,
                  children: [
                    r.map((e) =>
                      (0, a.jsx)(
                        B,
                        {
                          ...e,
                          onFetch: S(e.id),
                          onDelete: I(e.id),
                          onAddressChange: M(e.id),
                          onNetworkSelect: E(e.id),
                        },
                        e.id
                      )
                    ),
                    o &&
                      (0, a.jsx)(w, {
                        children:
                          "The input token is not currently UTS-compatible. A UTS connector contract will be deployed to enable compatibility with the UTS ecosystem.",
                      }),
                    m &&
                      (0, a.jsx)(w, {
                        value: h,
                        onChange: () => b((e) => !e),
                        children:
                          "I understand I might be connecting different tokens and confirm my choice",
                      }),
                    o &&
                      (0, a.jsx)(w, {
                        value: p,
                        onChange: () => u((e) => !e),
                        children:
                          "I understand that sufficient tokens must be provided to the connector address as liquidity to enable bridging. Otherwise, bridging across networks will fail.",
                      }),
                    (0, a.jsxs)("button", {
                      onClick: N,
                      disabled: 0 === T.length,
                      className: x().button,
                      children: [
                        (0, a.jsx)(g.default, {
                          src: "/_next/static/media/plus.e017ff98.svg",
                          width: 14,
                          height: 14,
                          alt: "Add",
                        }),
                        (0, a.jsx)("p", { children: "Add more tokens" }),
                      ],
                    }),
                    (0, a.jsx)(W, {
                      open: !!k,
                      value: r.find((e) => {
                        let { id: t } = e;
                        return t === k;
                      })?.network,
                      options: f,
                      onClose: j,
                      onChange: C,
                    }),
                  ],
                }),
              ],
            })
          );
        });
      F.displayName = "ImportedTokensBlock";
      let G = [
          {
            label: "Launch Universal Token",
            value: y.Gm.LaunchNewToken,
            id: 0,
          },
          {
            label: "Expand Existing Token",
            value: y.Gm.LaunchExistingToken,
            id: 1,
          },
        ],
        V = [
          {
            label: "Launch Universal Token",
            value: y.Gm.LaunchNewToken,
            id: 0,
          },
          {
            label: "Expand Existing Token",
            value: y.Gm.LaunchExistingToken,
            id: 1,
          },
        ],
        H = {
          [y.lz.SetupToken]: "Setup Token",
          [y.lz.ChooseToken]: "Choose Token",
          [y.lz.ImportToken]: "Import Token",
          [y.lz.ImportedToken]: "Imported Token",
          [y.lz.ChooseNetwork]: "Choose Network",
          [y.lz.SetupNetwork]: "Setup Network",
          [y.lz.DeployBind]: "Deploy & Bind",
          [y.lz.BindingTokens]: "Binding Tokens",
          [y.lz.TokensBinded]: "Tokens Binded",
          [y.lz.TokensDeployed]: "Tokens Deployed",
          [y.lz.Deploying]: "Deploying...",
        },
        Z = [y.lz.SetupToken, y.lz.SetupNetwork, y.lz.DeployBind],
        z = [
          y.lz.ImportToken,
          y.lz.SetupNetwork,
          y.lz.SetupToken,
          y.lz.DeployBind,
        ],
        q = [y.lz.ImportToken, y.lz.SetupNetwork, y.lz.DeployBind],
        K = (e) =>
          e?.length
            ? {
                tokenTicker: "",
                tokenName: "",
                decimals: "",
                salt: "",
                contractAddress: "",
                tokenSupply: "",
                additionSalt: "",
                connectorContractAddress: "",
                additionConnectorContractAddress: "",
                importedTokens: e?.length ? [O(e)] : [],
                networks: [],
                mechanism: "lock-unlock",
                supplyType: "fixed",
              }
            : void 0;
      var Y = n(875),
        J = n(17370),
        X = n.n(J),
        $ = n(68575),
        Q = n(24461),
        ee = n(94585),
        et = n(1091),
        en = n(59369),
        ea = n(61724),
        es = n.n(ea),
        ei = n(37691),
        er = n(93184),
        el = n(68768),
        eo = n(98158),
        ed = n(47895),
        ec = n(45158);
      let ep = n(25566).env.NEXT_PUBLIC_ETS_DEPLOYMENT_ROUTER_ADDRESS,
        eu = () => {
          let { isNativePayment: e } = (0, $.v9)((e) => e.EtsEntity),
            { writeContractAsync: t } = (0, ee.useWriteContract)(),
            { writeContractAsync: n } = (0, ee.useWriteContract)(),
            { chainId: a } = (0, r.Z)(),
            { setDeployingLocalStorage: s } = (0, ec.C)(),
            [i, l] = (0, d.useState)(!1);
          return {
            sendDeployRequest: (0, d.useCallback)(
              async (i, r, o, d) => {
                l(!0);
                let c = !!o.length;
                try {
                  let l;
                  let p = new et.R(),
                    m = [
                      ...o.map((e) => ({
                        chainId: e.chainId,
                        isConnector: !0,
                      })),
                      ...i.map((e) => ({ chainId: e.id, isConnector: !1 })),
                    ],
                    _ = i.length
                      ? i.map((e) => {
                          let t = {
                              ...r,
                              initialSupply: (0, el.v)(
                                String(
                                  c
                                    ? r.initialSupply
                                    : r.pureToken
                                    ? r.initialSupply
                                    : e.supply
                                ),
                                r.decimals
                              ),
                              mintedAmountToOwner: (0, el.v)(
                                String(c ? 0 : e.supply),
                                r.decimals
                              ),
                              allowedChainIds: m
                                .filter((t) => t.chainId !== e.id)
                                .map((e) => e.chainId),
                              chainConfigs: m
                                .filter((t) => t.chainId !== e.id)
                                .map((e) =>
                                  e.isConnector
                                    ? {
                                        peerAddress: d.peerAddress,
                                        minGasLimit: 0,
                                        decimals: o.find(
                                          (t) => t.chainId === e.chainId
                                        )?.decimals,
                                        paused: !1,
                                      }
                                    : r.chainConfigs[0]
                                ),
                            },
                            n = p.encode(
                              [
                                "tuple(bytes, string, string, uint8, uint256, uint256, bool, bool, bool, bool, bool, bytes, uint256[], tuple(bytes, uint64, uint8, bool)[], bytes32)",
                              ],
                              [
                                [
                                  t.owner,
                                  t.name,
                                  t.symbol,
                                  t.decimals,
                                  t.initialSupply,
                                  t.mintedAmountToOwner,
                                  t.pureToken,
                                  t.mintable,
                                  t.globalBurnable,
                                  t.onlyRoleBurnable,
                                  t.feeModule,
                                  t.router,
                                  t.allowedChainIds,
                                  t.chainConfigs.map((e) => [
                                    e.peerAddress,
                                    e.minGasLimit,
                                    e.decimals,
                                    e.paused,
                                  ]),
                                  t.salt,
                                ],
                              ]
                            );
                          return [e.id, !1, t, n];
                        })
                      : [],
                    y = o.length
                      ? o.map((e) => {
                          let t = {
                              ...d,
                              name: e.name,
                              symbol: e.symbol,
                              decimals: e.decimals,
                              initialSupply: (0, el.v)(
                                `${e.totalSupply}`,
                                e.decimals
                              ),
                              underlyingToken: en.Dv(
                                e.address ||
                                  "0x0000000000000000000000000000000000000000"
                              ),
                              allowedChainIds: m
                                .filter((t) => t.chainId !== e.chainId)
                                .map((e) => e.chainId),
                              chainConfigs: m
                                .filter((t) => t.chainId !== e.chainId)
                                .map((e) =>
                                  e.isConnector
                                    ? {
                                        peerAddress: d.peerAddress,
                                        minGasLimit: 0,
                                        decimals: o.find(
                                          (t) => t.chainId === e.chainId
                                        )?.decimals,
                                        paused: !1,
                                      }
                                    : r.chainConfigs[0]
                                ),
                            },
                            n = p.encode(
                              [
                                "tuple(bytes, bytes, bool, bytes, uint256[], tuple(bytes, uint64, uint8, bool)[], bytes32)",
                              ],
                              [
                                [
                                  t.owner,
                                  t.underlyingToken,
                                  t.feeModule,
                                  t.router,
                                  t.allowedChainIds,
                                  t.chainConfigs.map((e) => [
                                    e.peerAddress,
                                    e.minGasLimit,
                                    e.decimals,
                                    e.paused,
                                  ]),
                                  t.salt,
                                ],
                              ]
                            );
                          return [e.chainId, !0, t, n];
                        })
                      : [],
                    h = [
                      ..._.map((e) => [e[0], e[1], e[2]]),
                      ...y.map((e) => [e[0], e[1], e[2]]),
                    ],
                    x = [
                      ..._.map((e) => [e[0], e[1], e[3]]),
                      ...y.map((e) => [e[0], e[1], e[3]]),
                    ];
                  console.log("SendDeploy args to Storage:", h),
                    console.log("SendDeploy args to Deploy:", x);
                  let g = i.length > 0 ? i.map((e) => e.id) : [],
                    b = o.length > 0 ? o.map((e) => e.chainId) : [],
                    k = await (0, ei.L)(u.gb, {
                      abi: es(),
                      address: ep,
                      functionName: "estimateDeployTotal",
                      args: [g, b],
                    });
                  if (
                    (console.log(
                      g,
                      b,
                      k,
                      "estimateDeployTotalestimateDeployTotalestimateDeployTotal"
                    ),
                    e)
                  )
                    l = await n({
                      abi: es(),
                      address: ep,
                      functionName: "sendDeployRequest",
                      args: [x, "0x0000000000000000000000000000000000000000"],
                      value: k[1],
                    });
                  else {
                    let e = await t({
                      abi: eo.Wo,
                      address: ed.eQ[a],
                      functionName: "approve",
                      args: [ep, k[0]],
                    });
                    try {
                      await (0, er.e)(u.gb, {
                        approveHash: e,
                        chainId: a,
                        confirmations: 2,
                      });
                    } catch (e) {
                      console.log(e, "waitResponse Error");
                    }
                    l = await n({
                      abi: es(),
                      address: ep,
                      functionName: "sendDeployRequest",
                      args: [x, ed.eQ[a]],
                    });
                  }
                  return l && s(h, l), l;
                } catch (e) {
                  console.error("Error during sendDeployRequest:", e), l(!1);
                }
              },
              [e, s, t, a, n]
            ),
            isLoading: i,
          };
        };
      var em = n(97362),
        e_ = n(70388);
      let ey = (0, d.memo)((e) => {
        let { className: t, type: n = "base" } = e;
        return "passed" === n
          ? (0, a.jsxs)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 16 16",
              className: t,
              children: [
                (0, a.jsx)("circle", {
                  cx: "8",
                  cy: "8",
                  r: "5",
                  fill: "#0F3E48",
                }),
                (0, a.jsx)("path", {
                  stroke: "#66E3FF",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  d: "M10.665 6 7 9.667 5.332 8",
                }),
                (0, a.jsx)("circle", {
                  cx: "8",
                  cy: "8",
                  r: "7",
                  stroke: "#3B91A3",
                  strokeWidth: "2",
                }),
              ],
            })
          : (0, a.jsxs)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              width: "16",
              height: "16",
              viewBox: "0 0 16 16",
              fill: "none",
              className: t,
              children: [
                (0, a.jsx)("circle", {
                  cx: "8",
                  cy: "8",
                  r: "5",
                  fill: "#8B8B8B",
                }),
                (0, a.jsx)("circle", {
                  cx: "8",
                  cy: "8",
                  r: "7.01235",
                  stroke: "#8B8B8B",
                  strokeWidth: "1.97531",
                }),
              ],
            });
      });
      ey.displayName = "EtsStepIcon";
      var eh = n(44406),
        ex = n(25566);
      let eg = (0, d.forwardRef)((e, t) => {
        let { address: n, handleConnectWalletClick: s } = e,
          i = (0, l.TL)(),
          r = (0, Q.Xq)(),
          { sendDeployRequest: o, isLoading: c } = eu(),
          {
            currentStep: p,
            launchOption: u,
            isSkipTokenSetup: m,
            isFilledStep: h,
            isTokenReview: x,
            importedTokensData: g,
            isNotEnoughBalance: b,
          } = (0, $.v9)((e) => e.EtsEntity),
          {
            watch: k,
            setValue: v,
            getValues: f,
            formState: { errors: T },
          } = (0, _.Gc)(),
          j = k("importedTokens"),
          w = (0, d.useMemo)(
            () => (u === y.Gm.LaunchExistingToken ? (m ? q : z) : Z),
            [m, u]
          ),
          C = w.length,
          S = (0, d.useCallback)(
            async (e, a) => {
              if (
                (u === y.Gm.LaunchNewToken && -1 === e && "down" === a) ||
                (u === y.Gm.LaunchExistingToken && 2 === p && x && "down" === a)
              )
                i(U.s.actions.setIsTokenReview(!1));
              else if (
                ("down" !== a ||
                  (i(U.s.actions.setStep(e)),
                  u !== y.Gm.LaunchExistingToken ||
                    2 !== p ||
                    x ||
                    i(U.s.actions.setIsSkipTokenSetup(!0))),
                e >= 0 &&
                  e < C &&
                  t.current &&
                  (await t.current.validateStep()))
              ) {
                if (
                  (u !== y.Gm.LaunchNewToken || 0 !== p || x) &&
                  (u !== y.Gm.LaunchExistingToken || 2 !== p || x || "up" !== a)
                ) {
                  if (u === y.Gm.LaunchExistingToken && 0 === p) {
                    let { importedTokens: e } = f(),
                      t = JSON.stringify(
                        e.map((e) => {
                          let {
                            address: t,
                            network: { chainId: n },
                          } = e;
                          return { chainId: n, address: t };
                        })
                      ),
                      n = await fetch(`/api/get-tokens-data?tokens=${t}`),
                      a = await n.json(),
                      s = a[0];
                    if (!s) {
                      r(
                        {
                          type: eh.wn.ERROR.type,
                          title: eh.wn.ERROR.title,
                          message: eh.uu.RPC_UNAVAILABLE,
                        },
                        5e3
                      );
                      return;
                    }
                    v("decimals", String(s.decimals)),
                      v("tokenName", String(s.name)),
                      v("tokenTicker", String(s.symbol)),
                      i(U.s.actions.setImportedTokensData(a));
                  }
                  if (u === y.Gm.LaunchNewToken && 2 === e) {
                    let e = f("networks"),
                      t = "lock-unlock" === f("mechanism"),
                      a = "fixed" === f("supplyType"),
                      s = {
                        owner: en.Dv(
                          n || "0x0000000000000000000000000000000000000000"
                        ),
                        name: f("tokenName"),
                        symbol: f("tokenTicker"),
                        decimals: f("decimals"),
                        initialSupply: f("tokenSupply"),
                        pureToken: t,
                        mintable: !a,
                        globalBurnable: !a,
                        onlyRoleBurnable: !1,
                        feeModule: !1,
                        router: en.Dv(
                          ex.env.NEXT_PUBLIC_ETS_ROUTER_PROXY_ADDRESS
                        ),
                        chainConfigs: [
                          {
                            peerAddress: en.Dv(
                              f("contractAddress") ||
                                "0x0000000000000000000000000000000000000000"
                            ),
                            minGasLimit: 0,
                            decimals: f("decimals"),
                            paused: !1,
                          },
                        ],
                        salt: f("salt"),
                        peerAddress: en.Dv(
                          f("contractAddress") ||
                            "0x0000000000000000000000000000000000000000"
                        ),
                      };
                    await o(e, s, [], {});
                    return;
                  }
                  if (u === y.Gm.LaunchExistingToken && !m && 3 === e) {
                    let e = f("networks"),
                      t = g.reduce((e, t) => {
                        let { totalSupply: n } = t;
                        return n + e;
                      }, 0),
                      a = "lock-unlock" === f("mechanism"),
                      s = {
                        owner: en.Dv(
                          n || "0x0000000000000000000000000000000000000000"
                        ),
                        name: f("tokenName"),
                        symbol: f("tokenTicker"),
                        decimals: f("decimals"),
                        initialSupply: a ? t : 0,
                        pureToken: a,
                        mintable: !1,
                        globalBurnable: !1,
                        onlyRoleBurnable: !1,
                        feeModule: !1,
                        router: en.Dv(
                          ex.env.NEXT_PUBLIC_ETS_ROUTER_PROXY_ADDRESS
                        ),
                        chainConfigs: [
                          {
                            peerAddress: en.Dv(
                              f("contractAddress") ||
                                "0x0000000000000000000000000000000000000000"
                            ),
                            minGasLimit: 0,
                            decimals: f("decimals"),
                            paused: !1,
                          },
                        ],
                        salt: f("salt"),
                        peerAddress: en.Dv(
                          f("contractAddress") ||
                            "0x0000000000000000000000000000000000000000"
                        ),
                      },
                      i = {
                        owner: en.Dv(
                          n || "0x0000000000000000000000000000000000000000"
                        ),
                        feeModule: !1,
                        router: en.Dv(
                          ex.env.NEXT_PUBLIC_ETS_ROUTER_PROXY_ADDRESS
                        ),
                        salt: f("salt"),
                        peerAddress: en.Dv(
                          f("connectorContractAddress") ||
                            "0x0000000000000000000000000000000000000000"
                        ),
                        mintable: !1,
                      };
                    await o(e, s, g, i);
                    return;
                  }
                  i(U.s.actions.setStep(e));
                } else i(U.s.actions.setIsTokenReview(!0));
              }
            },
            [i, v, f, o, t, n, p, C, u, x, m, g]
          ),
          I = (0, d.useCallback)(async () => {
            let e = {
              owner: en.Dv(n || "0x0000000000000000000000000000000000000000"),
              feeModule: !1,
              router: en.Dv(ex.env.NEXT_PUBLIC_ETS_ROUTER_PROXY_ADDRESS),
              salt: f("additionSalt"),
              peerAddress: en.Dv(
                f("additionConnectorContractAddress") ||
                  "0x0000000000000000000000000000000000000000"
              ),
              mintable: !1,
            };
            await o([], {}, g, e);
          }, [n, f, g, o]),
          M = (0, d.useCallback)(() => {
            if (
              (u === y.Gm.LaunchNewToken && 2 !== p && 3 !== p) ||
              (u === y.Gm.LaunchExistingToken && m && 2 !== p) ||
              (u === y.Gm.LaunchExistingToken && !m && 3 !== p)
            )
              return (0, a.jsxs)(a.Fragment, {
                children: [
                  (0, a.jsx)("button", {
                    disabled: (!x && 0 === p) || c,
                    className: X().paginationButton,
                    onClick: () => S(p - 1, "down"),
                    children: (0, a.jsx)(e_.X, {
                      className: X().paginationIcon,
                    }),
                  }),
                  (0, a.jsx)("button", {
                    disabled: !0,
                    className: N()(
                      X().paginationButton,
                      X().paginationButtonRight
                    ),
                    children: (0, a.jsx)(e_.X, {
                      className: N()(
                        X().paginationIcon,
                        X().paginationIconRight
                      ),
                    }),
                  }),
                ],
              });
          }, [u, p, m, x, S]),
          E = (0, d.useCallback)(() => {
            if (u === y.Gm.LaunchNewToken) {
              if (0 === p)
                return x
                  ? (0, a.jsx)("button", {
                      className: N()(X().connectWalletButton),
                      onClick: () => S(p + 1, "up"),
                      children: "Confirm Setup",
                    })
                  : (0, a.jsx)("button", {
                      className: N()(X().connectWalletButton),
                      onClick: () => S(p + 1, "up"),
                      children: "Preview Setup",
                    });
              if (1 === p)
                return (0, a.jsx)(em.e, {
                  isOpen: !!T.networks,
                  content: (0, a.jsxs)("div", {
                    className: X().warning__content,
                    children: [
                      (0, a.jsx)("span", {
                        className: X().warning__label,
                        children: "Total supply",
                      }),
                      (0, a.jsx)("span", { children: T.networks?.message }),
                    ],
                  }),
                  children: (0, a.jsx)("button", {
                    disabled: !h || !!T.networks || b || c,
                    className: X().connectWalletButton,
                    onClick: () => S(p + 1, "up"),
                    children: c ? "Deploying Tokens..." : "Setup & Deploy",
                  }),
                });
            }
            if (u === y.Gm.LaunchExistingToken) {
              if (0 === p)
                return (0, a.jsx)("button", {
                  disabled: !h,
                  className: X().connectWalletButton,
                  onClick: () => S(p + 1, "up"),
                  children: "Import Tokens",
                });
              if (1 === p)
                return (0, a.jsxs)(a.Fragment, {
                  children: [
                    (0, a.jsx)("button", {
                      disabled: !h || b,
                      className: X().connectWalletButton,
                      onClick: () => {
                        S(p + 1, "up"), i(U.s.actions.setIsSkipTokenSetup(!1));
                      },
                      children: "Choose Network",
                    }),
                    j.length > 1
                      ? c
                        ? (0, a.jsx)("button", {
                            disabled: !0,
                            className: X().connectWalletButton,
                            children: "Deploying Tokens...",
                          })
                        : (0, a.jsx)(em.e, {
                            className: X().info,
                            content: (0, a.jsx)("div", {
                              className: X().info__content,
                              children:
                                "If you don’t want to deploy any new tokens, and only to convert imported tokens omni-chain. Alternatively, select other networks.",
                            }),
                            children: (0, a.jsx)("button", {
                              onClick: I,
                              disabled: h || b,
                              className: X().connectWalletButton,
                              children: "Skip & Deploy",
                            }),
                          })
                      : null,
                  ],
                });
              if (2 === p)
                return x
                  ? (0, a.jsx)("button", {
                      disabled: c,
                      className: X().connectWalletButton,
                      onClick: () => S(p + 1, "up"),
                      children: c ? "Deploying Tokens..." : "Confirm & Deploy",
                    })
                  : (0, a.jsx)("button", {
                      className: X().connectWalletButton,
                      onClick: () => S(p + 1, "up"),
                      children: "Preview Setup",
                    });
            }
          }, [i, I, S, p, u, h, x, c]);
        return n
          ? (0, a.jsx)("div", {
              className: X().wrapper,
              children: (0, a.jsxs)("div", {
                className: X().stepper,
                children: [
                  (0, a.jsx)("div", {
                    className: X().stepsContainer,
                    children: w.map((e, t) =>
                      (0, a.jsxs)(
                        "div",
                        {
                          className: N()(X().step, {
                            [X().active]: (t === p && !c) || (c && p + 1 === t),
                            [X().passed]: p > t || (c && p === t),
                          }),
                          children: [
                            (0, a.jsx)("hr", {
                              className: N()(X().stepLine, {
                                [X().hidden]: t + 1 == C,
                              }),
                            }),
                            (0, a.jsx)(ey, {
                              type: p > t || (c && p === t) ? "passed" : "base",
                              className: X().stepIcon,
                            }),
                            (0, a.jsx)(
                              "div",
                              {
                                children:
                                  c && p + 1 === t ? H[y.lz.Deploying] : H[e],
                              },
                              t
                            ),
                          ],
                        },
                        t
                      )
                    ),
                  }),
                  (0, a.jsxs)("div", {
                    className: X().paginationContainer,
                    children: [
                      (0, a.jsx)("div", {
                        className: X().pagination,
                        children: M(),
                      }),
                      (0, a.jsx)("div", {
                        className: X().confirm,
                        children: E(),
                      }),
                    ],
                  }),
                ],
              }),
            })
          : (0, a.jsx)("div", {
              className: X().stepper,
              children: (0, a.jsxs)("div", {
                className: X().connectWallet,
                children: [
                  (0, a.jsx)("p", {
                    children:
                      u === y.Gm.LaunchNewToken
                        ? "Connect wallet to deploy a new universal token with Universal Token Standard."
                        : "Connect wallet to view verified UTS Tokens.",
                  }),
                  (0, a.jsx)("button", {
                    onClick: s,
                    className: X().connectWalletButton,
                    children: "Connect Wallet",
                  }),
                ],
              }),
            });
      });
      eg.displayName = "Stepper";
      var eb = n(42511),
        ek = n.n(eb),
        ev = n(68090),
        ef = n.n(ev),
        eT = n(84873),
        eN = n.n(eT);
      let ej = (0, d.memo)((e) => {
        let {
            item: t,
            activeTabValue: n,
            setActiveTabValue: s,
            type: i = "primary",
          } = e,
          r = (0, d.useCallback)(() => {
            s(t.value);
          }, [t.value, s]);
        return (0, a.jsx)("button", {
          onClick: r,
          className: N()(
            eN().tab,
            { [eN().tab_active]: t.value === n },
            eN()[`tab-${i}`]
          ),
          children: t.label,
        });
      });
      ej.displayName = "Tab";
      let ew = (0, d.memo)((e) => {
        let {
          items: t,
          activeTabValue: n,
          setActiveTabValue: s,
          className: i,
          type: r = "primary",
        } = e;
        return (0, a.jsx)("div", {
          className: N()(ef().root, i),
          children: t.map((e) =>
            (0, a.jsx)(
              ej,
              { type: r, item: e, activeTabValue: n, setActiveTabValue: s },
              e.id
            )
          ),
        });
      });
      ew.displayName = "Tabs";
      var eC = n(53513),
        eS = n.n(eC),
        eI = n(32635);
      let eM = (0, d.memo)((e) => {
        let {
            value: t,
            onChange: n,
            name: s,
            label: i,
            placeholder: r,
            className: l,
            classNameHeader: o,
            classNameAdornment: c,
            error: p,
            hint: u,
            rightAdornment: m,
            rightContent: _,
            leftContent: y,
            disabled: h,
            ...x
          } = e,
          g = (0, d.useCallback)(
            (e) => {
              n(e.target.value);
            },
            [n]
          );
        return (0, a.jsxs)("div", {
          className: N()(eS().root, l),
          children: [
            i &&
              (0, a.jsx)("div", {
                className: N()(eS().header, o),
                children:
                  i &&
                  (0, a.jsxs)("label", {
                    htmlFor: String(s),
                    className: N()(eS().label, { [eS().label_disabled]: h }),
                    children: [
                      i,
                      u && (0, a.jsx)(eI.k, { hint: u, type: "question" }),
                    ],
                  }),
              }),
            (0, a.jsxs)("div", {
              className: eS().wrapper,
              children: [
                y && (0, a.jsx)(a.Fragment, { children: y }),
                (0, a.jsxs)("div", {
                  className: eS().box,
                  children: [
                    (0, a.jsx)("input", {
                      ...x,
                      value: t,
                      onChange: g,
                      name: s,
                      placeholder: r || "Input amount",
                      type: "text",
                      disabled: h,
                      className: N()(eS().input, { [eS().input_error]: p }),
                    }),
                    m &&
                      (0, a.jsx)("div", {
                        className: N()(eS().adornment, c),
                        children: m,
                      }),
                  ],
                }),
                _ && (0, a.jsx)(a.Fragment, { children: _ }),
              ],
            }),
            p?.message &&
              (0, a.jsx)("span", {
                className: eS().error,
                children: p.message,
              }),
          ],
        });
      });
      eM.displayName = "TextInput";
      let eE = (0, d.memo)((e) => {
        let { value: t, onChange: n, ...s } = e,
          i = (0, d.useCallback)(
            (e) => {
              let t = Math.trunc(parseInt(String(e).split(",").join("")));
              isNaN(t) ? n("") : n(String(t));
            },
            [n]
          );
        return (0, a.jsx)(eM, {
          ...s,
          onChange: i,
          value: String(t).length > 0 ? Number(t).toLocaleString("en-us") : "",
        });
      });
      eE.displayName = "TextInputNumber";
      var eD = n(59733);
      let eL = (0, d.memo)((e) => {
        let { width: t = 16, height: n = 16, className: s, ...i } = e;
        return (0, a.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 16 16",
          width: t,
          height: n,
          className: s,
          ...i,
          children: (0, a.jsx)("path", {
            stroke: "currentColor",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M14 8a6 6 0 0 0-6-6 6.5 6.5 0 0 0-4.493 1.827L2 5.333m0 0V2m0 3.333h3.333M2 8a6 6 0 0 0 6 6 6.5 6.5 0 0 0 4.493-1.827L14 10.667m0 0h-3.333m3.333 0V14",
          }),
        });
      });
      eL.displayName = "RefreshNew";
      var eB = n(19523);
      let eA = (e) => {
        let { args: t, signer: n } = e;
        return (0, eB.u)({
          args: t,
          signer: n,
          address: "0x123d82338E00AecB432F526a8aEB9442D48e4412",
          functionName: "getPrecomputedAddress",
        });
      };
      var eP = n(38217),
        eR = n(4529),
        eW = n(61728);
      function eU() {
        let e = Math.random().toString(36).substring(7);
        return "0x" + (0, eR.w)((0, eW.Y0)(e)).slice(-64);
      }
      var eO = n(25345),
        eF = n.n(eO),
        eG = n(50339),
        eV = n(98786),
        eH = n(72570),
        eZ = n(55135),
        ez = n(43113),
        eq = n.n(ez);
      let eK = (e) => {
          let {
            value: t,
            label: n,
            small: s,
            selected: i,
            disabled: r = !1,
            hideBullet: l = !1,
            onChange: o,
          } = e;
          return (0, a.jsxs)("button", {
            disabled: r,
            onClick: () => o(t),
            className: N()(eq().radio, {
              [eq().radio_small]: s,
              [eq().radio_selected]: i,
            }),
            children: [
              !l && (0, a.jsx)("div", { children: (0, a.jsx)("span", {}) }),
              (0, a.jsx)("p", { children: n }),
            ],
          });
        },
        eY = (e) => {
          let {
            label: t,
            value: n,
            small: s,
            direction: i = "row",
            radioItems: r,
            hideBullet: l,
            hint: o,
            onChange: d,
          } = e;
          return (0, a.jsxs)("div", {
            className: eq().radioGroup,
            children: [
              t &&
                (0, a.jsxs)("div", {
                  className: eq().label,
                  children: [
                    t,
                    o && (0, a.jsx)(eI.k, { hint: o, type: "question" }),
                  ],
                }),
              (0, a.jsx)("div", {
                className: N()(eq().items, {
                  [eq().items_row]: "row" === i,
                  [eq().items_column]: "column" === i,
                }),
                children: r.map((e) =>
                  (0, a.jsx)(
                    eK,
                    {
                      ...e,
                      small: s,
                      onChange: d,
                      selected: n === e.value,
                      hideBullet: l,
                    },
                    String(e.value)
                  )
                ),
              }),
            ],
          });
        },
        eJ = new eZ.BN(2).pow(new eZ.BN(256)),
        eX = (e) => {
          let { type: t } = e,
            { data: n } = (0, eP.useWalletClient)({ chainId: 42161 }),
            s = (0, eV.m)(),
            { address: i } = (0, r.Z)(),
            { isTokenReview: l } = (0, $.v9)((e) => e.EtsEntity),
            { watch: o, control: c, setValue: p, clearErrors: u } = (0, _.Gc)(),
            m = o("salt", ""),
            y = o("mechanism"),
            h = o("supplyType"),
            x = o("contractAddress", ""),
            g = o("decimals"),
            b = o("tokenSupply"),
            k = (0, eG.a)(768),
            v = (0, d.useMemo)(
              () => ("flexible" === h ? 1 : "lock-unlock" === y ? 4 : 0),
              [y, h]
            ),
            { result: f } = eA({
              args: (0, d.useMemo)(
                () => [
                  v,
                  en.Dv(i || "0x0000000000000000000000000000000000000000"),
                  m,
                  !1,
                ],
                [i, m, v]
              ),
              signer: n,
            }),
            T = (0, d.useMemo)(() => 0, []),
            { result: j } = eA({
              args: (0, d.useMemo)(
                () => [
                  T,
                  en.Dv(i || "0x0000000000000000000000000000000000000000"),
                  m,
                  !0,
                ],
                [i, m, T]
              ),
              signer: n,
            });
          (0, d.useEffect)(() => {
            i && !m && p("salt", eU());
          }, [i, p, m]),
            (0, d.useEffect)(() => {
              f?.length && p("contractAddress", f[0]);
            }, [f, p]),
            (0, d.useEffect)(() => {
              j?.length && p("connectorContractAddress", j[0]);
            }, [j, p]);
          let w = (0, d.useCallback)(
              (e) =>
                0 > +e || +e > 77
                  ? new eZ.BN(0)
                  : eJ.div(new eZ.BN(10).pow(new eZ.BN(+e))),
              []
            ),
            C = (0, d.useMemo)(() => w(g), [g, b]),
            S = (0, d.useCallback)(
              (e) => {
                try {
                  if (new eZ.BN(e).gt(C))
                    return `Token Supply must be less than or equal to ${Number(
                      C.toString()
                    ).toLocaleString("en-us")}`;
                  return !0;
                } catch (e) {
                  return "Token Supply must be less than 2^256";
                }
              },
              [C]
            );
          return (0, a.jsxs)("div", {
            className: N()(eF().root, eF()[`root_${t}`]),
            children: [
              (0, a.jsxs)("div", {
                className: eF().logo,
                children: [
                  (0, a.jsx)("span", {
                    className: N()(eF().logo__label, {
                      [eF().logo__label_disabled]: l,
                    }),
                    children: "Logo",
                  }),
                  (0, a.jsx)(eH.I, {
                    className: eF().logo__icon,
                    address: x || "0x0000000000000000000000000000000000000000",
                    diameter: 46,
                  }),
                ],
              }),
              (0, a.jsx)(_.Qr, {
                name: "tokenTicker",
                control: c,
                rules: { required: !0 },
                render: (e) => {
                  let {
                    field: { onChange: t, value: n },
                    fieldState: { error: s },
                  } = e;
                  return (0, a.jsx)(eM, {
                    name: "tokenTicker",
                    value: n,
                    label: "Token Ticker",
                    placeholder: "e.g. BTC",
                    error: s,
                    onChange: (e) => {
                      if (e.length <= 11) return t(e);
                    },
                    disabled: l,
                  });
                },
              }),
              (0, a.jsx)(_.Qr, {
                name: "tokenName",
                control: c,
                rules: { required: !0 },
                render: (e) => {
                  let {
                    field: { onChange: t, value: n },
                    fieldState: { error: s },
                  } = e;
                  return (0, a.jsx)(eM, {
                    name: "tokenName",
                    value: n,
                    label: "Token Name",
                    placeholder: "e.g. Bitcoin",
                    error: s,
                    onChange: t,
                    disabled: l,
                  });
                },
              }),
              "new" === t &&
                (0, a.jsx)(_.Qr, {
                  name: "tokenSupply",
                  control: c,
                  rules: { required: !0, validate: S },
                  render: (e) => {
                    let {
                      field: { onChange: t, value: n },
                      fieldState: { error: s },
                    } = e;
                    return (0, a.jsx)(eE, {
                      name: "tokenSupply",
                      value: n,
                      label: "Token Supply",
                      placeholder: "e.g. 1000,000,0000",
                      className: eF().supply,
                      classNameHeader: eF().supply__header,
                      classNameAdornment: eF().supply__adornment,
                      error: s,
                      onChange: (e) => {
                        if (+e > 0 || "" === e) return t(e);
                      },
                      disabled: l,
                      rightAdornment: (0, a.jsxs)(a.Fragment, {
                        children: [
                          !l &&
                            (0, a.jsx)(eY, {
                              value: h,
                              small: !0,
                              hideBullet: !0,
                              onChange: (e) => {
                                p("supplyType", e),
                                  "fixed" === e
                                    ? p("mechanism", "lock-unlock")
                                    : p("mechanism", "mint-burn");
                              },
                              radioItems: [
                                { label: "Fixed Supply", value: "fixed" },
                                { label: "Flexible", value: "flexible" },
                              ],
                            }),
                          l &&
                            k &&
                            (0, a.jsxs)("div", {
                              className: N()(
                                eF().supplyBadges,
                                eF().supplyBadges_mobile
                              ),
                              children: [
                                (0, a.jsx)("div", {
                                  className: eF().supplyBadges__item,
                                  children:
                                    "fixed" === h ? "Fixed Supply" : "Flexible",
                                }),
                                (0, a.jsx)("div", {
                                  className: eF().supplyBadges__item,
                                  children:
                                    "lock-unlock" === y ? "Lock" : "Mint",
                                }),
                              ],
                            }),
                        ],
                      }),
                    });
                  },
                }),
              !l &&
                "fixed" === h &&
                (0, a.jsx)(eY, {
                  label: "Mechanism",
                  value: y,
                  onChange: (e) => p("mechanism", e),
                  radioItems: [
                    { label: "Lock & Unlock", value: "lock-unlock" },
                    { label: "Mint & Burn", value: "mint-burn" },
                  ],
                }),
              l &&
                "new" === t &&
                !k &&
                (0, a.jsxs)("div", {
                  className: N()(eF().supplyBadges, eF().supplyBadges_desktop),
                  children: [
                    (0, a.jsx)("div", {
                      className: eF().supplyBadges__item,
                      children: "fixed" === h ? "Fixed Supply" : "Flexible",
                    }),
                    (0, a.jsx)("div", {
                      className: eF().supplyBadges__item,
                      children:
                        "lock-unlock" === y ? "Lock & Unlock" : "Mint & Burn",
                    }),
                  ],
                }),
              l &&
                "existing" === t &&
                (0, a.jsxs)("div", {
                  className: N()(eF().supplyBadges, eF().supplyBadges_desktop),
                  children: [
                    (0, a.jsx)("div", {
                      className: eF().supplyBadges__item,
                      children: "fixed" === h ? "Fixed Supply" : "Flexible",
                    }),
                    (0, a.jsx)("div", {
                      className: eF().supplyBadges__item,
                      children:
                        "lock-unlock" === y ? "Lock & Unlock" : "Mint & Burn",
                    }),
                  ],
                }),
              (0, a.jsx)(_.Qr, {
                name: "decimals",
                control: c,
                rules: { required: !0 },
                render: (e) => {
                  let {
                    field: { onChange: t, value: n },
                    fieldState: { error: s },
                  } = e;
                  return (0, a.jsx)(eE, {
                    name: "decimals",
                    value: n,
                    label: "Decimal",
                    placeholder: "Custom (0-77)",
                    error: s,
                    onChange: (e) => {
                      if (+e >= 0 && 77 >= +e) return t(e);
                    },
                    className: eF().decimalsInput,
                    disabled: l,
                    leftContent:
                      !l &&
                      (0, a.jsxs)("div", {
                        className: eF().decimals,
                        children: [
                          (0, a.jsxs)("button", {
                            className: N()(eF().decimals__item, {
                              [eF().decimals__item_active]: "18" === n,
                            }),
                            onClick: () => {
                              p("decimals", "18"), u("decimals");
                            },
                            children: [
                              (0, a.jsx)("span", {
                                className: eF().decimals__number,
                                children: "18",
                              }),
                              (0, a.jsx)("span", {
                                className: eF().decimals__text,
                                children: "Popular on EVM",
                              }),
                            ],
                          }),
                          (0, a.jsxs)("button", {
                            className: N()(eF().decimals__item, {
                              [eF().decimals__item_active]: "6" === n,
                            }),
                            onClick: () => {
                              p("decimals", "6"), u("decimals");
                            },
                            children: [
                              (0, a.jsx)("span", {
                                className: eF().decimals__number,
                                children: "6",
                              }),
                              (0, a.jsx)("span", {
                                className: eF().decimals__text,
                                children: "Popular on Solana",
                              }),
                            ],
                          }),
                        ],
                      }),
                    rightAdornment:
                      l &&
                      (0, a.jsx)("div", {
                        className: eF().decimals__badge,
                        children:
                          "18" === n
                            ? "Popular on EVM"
                            : "6" === n
                            ? "Popular on Solana"
                            : "Custom",
                      }),
                  });
                },
              }),
              l
                ? (0, a.jsx)(_.Qr, {
                    name: "contractAddress",
                    control: c,
                    rules: { required: !0 },
                    render: (e) => {
                      let {
                        field: { onChange: t, value: n },
                        fieldState: { error: i },
                      } = e;
                      return (0, a.jsx)(eM, {
                        name: "contractAddress",
                        value: n,
                        label: "Contract Address",
                        placeholder: "Generate Contract Address",
                        error: i,
                        onChange: t,
                        disabled: !0,
                        rightAdornment: (0, a.jsx)("button", {
                          className: eF().addressCopy,
                          onClick: () => s(n),
                          children: (0, a.jsx)(eD.H, {}),
                        }),
                      });
                    },
                  })
                : (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)(_.Qr, {
                      name: "contractAddress",
                      control: c,
                      rules: { required: !0 },
                      render: (e) => {
                        let {
                          field: { onChange: t, value: n },
                          fieldState: { error: i },
                        } = e;
                        return (0, a.jsx)(eM, {
                          name: "contractAddress",
                          value: n,
                          label: "Contract Address",
                          placeholder: "Generate Contract Address",
                          error: i,
                          disabled: !0,
                          onChange: t,
                          rightAdornment: (0, a.jsx)("button", {
                            className: eF().saltCopy,
                            disabled: !n,
                            onClick: () => s(n),
                            children: (0, a.jsx)(eD.H, {}),
                          }),
                          rightContent: (0, a.jsx)("button", {
                            className: eF().refreshSalt,
                            onClick: () => p("salt", eU()),
                            children: (0, a.jsx)(eL, {}),
                          }),
                        });
                      },
                    }),
                  }),
            ],
          });
        };
      var e$ = n(59302),
        eQ = n.n(e$),
        e0 = n(55358);
      let e1 = () => {
        let { isTokenReview: e } = (0, $.v9)((e) => e.EtsEntity),
          [t, n] = (0, d.useState)(),
          s = (0, $.v9)((e) => e.EtsEntity.importedTokensData),
          { setValue: i } = (0, _.Gc)(),
          r = (0, d.useCallback)(() => {
            n(void 0),
              i("decimals", ""),
              i("tokenName", ""),
              i("tokenTicker", "");
          }, [i]),
          l = (0, d.useCallback)(
            (e) => {
              if (t === e.chainId) return r();
              n(e.chainId),
                i("decimals", String(e.decimals)),
                i("tokenName", String(e.name)),
                i("tokenTicker", String(e.symbol));
            },
            [t, i, r]
          );
        return (0, a.jsxs)("div", {
          className: eQ().root,
          children: [
            !e &&
              (0, a.jsxs)("div", {
                className: eQ().list,
                children: [
                  (0, a.jsx)("span", {
                    className: eQ().title,
                    children: "Import Token List",
                  }),
                  s.map((e) =>
                    (0, a.jsxs)(
                      "button",
                      {
                        className: N()(eQ().button, {
                          [eQ().button_active]: t === e.chainId,
                        }),
                        onClick: () => l(e),
                        children: [
                          (0, a.jsxs)("div", {
                            className: eQ().group,
                            children: [
                              (0, a.jsx)("span", {
                                children: (0, a.jsx)(
                                  D.f,
                                  {
                                    type: "color",
                                    src: (0, L.ZC)(e.chainId, "color"),
                                    width: 24,
                                    height: 24,
                                    alt: String(e.chainId),
                                  },
                                  e.chainId
                                ),
                              }),
                              (0, a.jsx)("span", {
                                children: (0, e0.T)(e.address),
                              }),
                            ],
                          }),
                          (0, a.jsx)("span", {
                            className: eQ().label,
                            children: "ERC-20",
                          }),
                        ],
                      },
                      e.chainId
                    )
                  ),
                ],
              }),
            (0, a.jsxs)("div", {
              className: eQ().content,
              children: [
                (0, a.jsxs)("div", {
                  className: eQ().info,
                  children: [
                    (0, a.jsx)("span", {
                      className: eQ().info__label,
                      children:
                        "Use the setup following an imported token, or custom fill for the new token(s)",
                    }),
                    !e &&
                      (0, a.jsx)("button", {
                        className: eQ().info__button,
                        onClick: r,
                        children: "Custom",
                      }),
                  ],
                }),
                (0, a.jsx)(eX, { type: "existing" }),
              ],
            }),
          ],
        });
      };
      var e2 = n(87138),
        e6 = n.n(e2),
        e3 = n(33901),
        e5 = n.n(e3),
        e4 = n(22656),
        e7 = n(52169),
        e8 = n(30354),
        e9 = n.n(e8),
        te = n(25864);
      let tt = (0, d.memo)((e) => {
        let { open: t, onClose: n } = e;
        return (0, a.jsx)(R.F0, {
          enable: t,
          onClose: n,
          isCloseIcon: !0,
          modalClassName: e9().modal,
          children: (0, a.jsxs)("div", {
            className: e9().content,
            children: [
              (0, a.jsx)(g.default, {
                src: "/_next/static/media/soon.52ca97e4.svg",
                width: 32,
                height: 32,
                alt: "Soon",
              }),
              (0, a.jsx)("h5", {
                className: e9().title,
                children: "Verified Tokens Coming Soon",
              }),
              (0, a.jsx)("p", {
                className: e9().text,
                children:
                  "We are currently testing and improving launch additional networks with verified UTS tokens.",
              }),
              (0, a.jsx)("p", {
                className: e9().text,
                children: "Alternatively, please import a token.",
              }),
              (0, a.jsx)("button", {
                onClick: n,
                className: e9().button,
                children: (0, a.jsx)("p", { children: "Got It" }),
              }),
              (0, a.jsx)("button", {
                onClick: n,
                className: e9().close,
                children: (0, a.jsx)(te.T, {
                  width: 16,
                  height: 16,
                  type: "base",
                }),
              }),
            ],
          }),
        });
      });
      tt.displayName = "ComingSoonModal";
      var tn = n(72664),
        ta = n.n(tn);
      let ts = (0, d.memo)((e) => {
        let {
            id: t,
            name: n,
            chain: s,
            symbol: i,
            address: r,
            isSelected: l,
            underlyingAddress: o,
            onSelect: c,
          } = e,
          p = (0, d.useCallback)(() => c && c(t), [t, c]);
        return (0, a.jsxs)("div", {
          onClick: p,
          className: N()(ta().card, { [ta().selected]: l }),
          children: [
            (0, a.jsxs)("div", {
              className: ta().header,
              children: [
                (0, a.jsx)(eH.I, {
                  className: ta().icon,
                  address: r,
                  diameter: 48,
                }),
                (0, a.jsx)(j, {
                  value: l ? "checked" : "undefined",
                  isClickable: !0,
                }),
              ],
            }),
            (0, a.jsxs)("div", {
              className: ta().row,
              children: [
                (0, a.jsx)("p", { className: ta().name, children: n }),
                (0, a.jsx)("p", {
                  className: ta().ets,
                  children: r === o ? "UTS" : "Connector",
                }),
              ],
            }),
            (0, a.jsx)("p", { className: ta().symbol, children: i }),
            (0, a.jsxs)("div", {
              className: ta().address,
              children: [
                (0, a.jsx)(g.default, {
                  width: 16,
                  height: 16,
                  src: s.icon.src,
                  alt: s.name,
                }),
                (0, a.jsx)("p", { children: (0, e0.T)(r) }),
              ],
            }),
          ],
        });
      });
      ts.displayName = "VerifiedTokenCard";
      var ti = n(75466);
      let tr = (0, d.memo)(() =>
        (0, a.jsxs)("div", {
          className: ta().card,
          children: [
            (0, a.jsx)("div", {
              className: ta().header,
              children: (0, a.jsx)(ti.O, { width: 48, height: 48, radius: 8 }),
            }),
            (0, a.jsx)(ti.O, { width: 75, height: 16, radius: 4 }),
            (0, a.jsx)(ti.O, { width: 130, height: 16, radius: 4 }),
            (0, a.jsx)(ti.O, { width: 140, height: 16, radius: 4 }),
          ],
        })
      );
      tr.displayName = "VerifiedTokenCardSkeleton";
      let tl = (0, d.memo)((e) => {
        let { address: t, onConnect: n } = e;
        return (0, a.jsxs)("div", {
          className: e5().skeleton,
          children: [
            (0, a.jsx)(tr, {}),
            (0, a.jsx)(tr, {}),
            (0, a.jsx)(tr, {}),
            (0, a.jsx)(tr, {}),
            (0, a.jsx)(tr, {}),
            !t &&
              (0, a.jsx)("button", {
                onClick: n,
                className: e5().connectWalletButton,
                children: (0, a.jsx)("p", { children: "Connect Wallet" }),
              }),
          ],
        });
      });
      tl.displayName = "VerifiedTokensSkeleton";
      let to = (0, d.memo)(() =>
        (0, a.jsxs)("div", {
          className: e5().placeholder,
          children: [
            (0, a.jsx)(g.default, {
              src: "/_next/static/media/coin.d10fbac7.svg",
              width: 24,
              height: 24,
              alt: "Coin",
            }),
            (0, a.jsx)("h5", {
              className: e5().title,
              style: { color: "#8B8B8B" },
              children: "No UTS Tokens Found",
            }),
            (0, a.jsxs)("p", {
              className: e5().text,
              children: [
                "No verified token has been found on this address. ",
                (0, a.jsx)("br", {}),
                "Please Import a token below or try another wallet.",
              ],
            }),
          ],
        })
      );
      to.displayName = "VerifiedTokensPlaceholder";
      let td = (0, d.memo)((e) => {
        let { networks: t } = e,
          n = (0, l.TL)(),
          { address: s } = (0, r.Z)(),
          { data: i, isLoading: o } = (0, e7.cs)(
            { where: { deployer: { _eq: s ?? "" } } },
            { skip: !s }
          ),
          {
            ref: p,
            onMouseDown: u,
            onMouseUp: m,
            dragStarted: _,
          } = (0, e4.a)(),
          [y, h] = (0, d.useState)([]),
          [x, g] = (0, d.useState)(!1),
          b = (0, d.useCallback)(() => {
            !_.current && (x || g(!0));
          }, [_, x]),
          k = (0, d.useCallback)(() => g(!1), []),
          v = (0, d.useCallback)(
            () => n(Y.L.actions.setWalletConnectChainId(c.m5.Ethereum.chainId)),
            [n]
          ),
          f = (e) => {
            h(
              e?.deployments?.map((e) => {
                let {
                    name: n,
                    symbol: a,
                    deployment: s,
                    src_chain_id: i,
                    underlying_token: r,
                  } = e,
                  l =
                    t.find((e) => {
                      let { chainId: t } = e;
                      return t === Number(i);
                    }) || t[0];
                return {
                  id: s + i,
                  name: n,
                  chain: l,
                  symbol: a,
                  iconSrc: "",
                  address: s,
                  isSelected: !1,
                  underlyingAddress: r,
                };
              }) || []
            );
          };
        return (
          (0, d.useEffect)(() => {
            f(i);
          }, [i]),
          (0, a.jsxs)("div", {
            className: e5().block,
            children: [
              !s || o
                ? (0, a.jsx)(tl, { address: s, onConnect: v })
                : 0 === y.length
                ? (0, a.jsx)(to, {})
                : (0, a.jsx)("div", {
                    ref: p,
                    onMouseDown: u,
                    onMouseUp: m,
                    className: e5().grid,
                    children: y.map((e) =>
                      (0, a.jsx)(ts, { ...e, onSelect: b }, e.id)
                    ),
                  }),
              (0, a.jsx)(tt, { open: x, onClose: k }),
            ],
          })
        );
      });
      td.displayName = "VerifiedTokensBlock";
      let tc = (0, d.memo)(() => {
        let { setValue: e } = (0, _.Gc)(),
          { data: t } = (0, eP.useWalletClient)({ chainId: 42161 }),
          { address: n } = (0, r.Z)(),
          s = (0, d.useMemo)(() => eU(), []),
          i = (0, d.useMemo)(() => 0, []),
          { result: l } = eA({
            args: (0, d.useMemo)(
              () => [
                i,
                en.Dv(n || "0x0000000000000000000000000000000000000000"),
                s,
                !0,
              ],
              [n, s, i]
            ),
            signer: t,
          });
        (0, d.useEffect)(() => {
          l?.length &&
            s &&
            (e("additionSalt", s), e("additionConnectorContractAddress", l[0]));
        }, [e, s, l]);
        let c = (0, o.Z)("expert");
        return (0, a.jsxs)("div", {
          className: e6().importToken,
          children: [
            (0, a.jsx)(F, { networks: c }),
            (0, a.jsxs)("div", {
              className: e6().separator,
              children: [
                (0, a.jsx)("span", {}),
                (0, a.jsx)("p", {
                  className: e6().text,
                  children: "or Choose verified UTS Tokens",
                }),
                (0, a.jsx)("span", {}),
              ],
            }),
            (0, a.jsx)(td, { networks: c }),
          ],
        });
      });
      tc.displayName = "ImportToken";
      var tp = n(75343),
        tu = n.n(tp),
        tm = n(91167),
        t_ = n(37060),
        ty = n(61966),
        th = n(39502),
        tx = n(54484);
      let tg = {
          42161: 4800000n,
          56: 4300000n,
          137: 4300000n,
          10: 4300000n,
          8453: 4300000n,
          43114: 4300000n,
          5e3: 30000000000n,
          1: 4300000n,
          1116: 4300000n,
          196: 4300000n,
        },
        tb = n(25566).env.NEXT_PUBLIC_ETS_DEPLOYMENT_ROUTER_ADDRESS,
        tk = (e) => {
          let {
              selectedTokenChainIds: t,
              allNewTokenChainIds: n,
              connectorChainIds: a,
            } = e,
            { chainId: s } = (0, r.Z)(),
            i = (0, d.useMemo)(
              () =>
                u.gb.chains.find((e) => {
                  let { id: t } = e;
                  return t === s;
                })?.nativeCurrency,
              [s]
            ),
            l = (0, t_.R)(i?.symbol) ?? 0,
            [o, c] = (0, d.useState)(null),
            [p, m] = (0, d.useState)(!1),
            [_, y] = (0, d.useState)(null),
            h = (0, d.useMemo)(() => {
              let e = [...t, ...a].reduce(
                (e, t) => (
                  null !== _ &&
                    0 !== Object.keys(_).length &&
                    _[t] &&
                    ((e.totalPrice += _[t].price),
                    (e.totalUSDPrice += _[t].priceUSD)),
                  e
                ),
                {
                  totalPrice: 0,
                  totalPriceFormatted: 0,
                  totalUSDPrice: 0,
                  totalUSDPriceFormatted: 0,
                }
              );
              return (
                (e.totalPriceFormatted = +(0, tx.t)(e.totalPrice, 5)),
                (e.totalUSDPriceFormatted = +e.totalUSDPrice.toLocaleString(
                  "en",
                  { minimumFractionDigits: 2, maximumFractionDigits: 5 }
                )),
                e
              );
            }, [t, a, _]),
            x = async () => {
              try {
                c(null), m(!0);
                let e = await (0, ty.o)(u.gb, { chainId: s }),
                  t = tg[s] * e;
                console.log("totalCostInGwei for Native Chain:", t);
                let r = await (0, ei.L)(u.gb, {
                  abi: es(),
                  address: tb,
                  functionName: "estimateDeployNative",
                  args: [n, a],
                });
                console.log(r, "estimateDeployNative");
                let o = n.reduce((e, n, a) => {
                    let o = Number(
                        (0, th.b)(n === s ? t : r[0][a], i?.decimals ?? 18)
                      ),
                      d = o * l,
                      c = d.toLocaleString("en", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 5,
                      });
                    return (
                      (e[n] = {
                        price: o,
                        priceFormatted: (0, tx.t)(o, 5),
                        priceUSD: d,
                        priceUSDFormatted: c,
                      }),
                      e
                    );
                  }, {}),
                  d = a.reduce((e, n, a) => {
                    let o = Number(
                        (0, th.b)(n === s ? t : r[1][a], i?.decimals ?? 18)
                      ),
                      d = o * l,
                      c = d.toLocaleString("en", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 5,
                      });
                    return (
                      (e[n] = {
                        price: o,
                        priceFormatted: (0, tx.t)(o, 5),
                        priceUSD: d,
                        priceUSDFormatted: c,
                      }),
                      e
                    );
                  }, {}),
                  p = { ...o, ...d };
                y(p);
              } catch (e) {
                console.log(e),
                  c(
                    e instanceof Error ? e.message : "An unknown error occurred"
                  );
              } finally {
                m(!1);
              }
            };
          return (
            (0, d.useEffect)(() => {
              l && x();
            }, [i, n, a, l]),
            {
              error: o,
              loading: p,
              nativeCurrency: i,
              eachPrice: _,
              totalPrice: h,
              refetch: x,
            }
          );
        };
      var tv = n(54528),
        tf = n.n(tv);
      let tT = (0, d.memo)(() => {
        let { watch: e, getValues: t, setValue: n } = (0, _.Gc)(),
          { launchOption: s, importedTokensData: i } = (0, $.v9)(
            (e) => e.EtsEntity
          ),
          r = e("mechanism"),
          l = e("supplyType"),
          {
            title: o,
            supplyValue: p,
            supplyTitle: u,
            token: m,
            tokenList: h,
          } = (0, d.useMemo)(() => {
            if (s === y.Gm.LaunchNewToken) {
              let {
                  decimals: e,
                  tokenName: n,
                  tokenTicker: a,
                  tokenSupply: s,
                  contractAddress: i,
                } = t(),
                r = {
                  name: n,
                  symbol: a,
                  address: i,
                  chainId: 0,
                  decimals: e,
                  totalSupply: s,
                };
              return {
                title: "Token Set",
                supplyTitle: "Initial Supply",
                supplyValue: r.totalSupply
                  ? Number(r.totalSupply).toLocaleString("en-us")
                  : 0,
                token: r,
                tokenList: [r],
              };
            }
            return {
              title: "Token Imported",
              supplyTitle: "Supply",
              supplyValue: i.reduce((e, t) => {
                let { totalSupply: n } = t;
                return n + e;
              }, 0),
              token: i[0],
              tokenList: i,
            };
          }, [t, s, i]);
        return (0, a.jsxs)("div", {
          className: tf().card,
          children: [
            (0, a.jsx)("h5", { className: tf().title, children: o }),
            (0, a.jsxs)("div", {
              className: tf().body,
              children: [
                (0, a.jsxs)("div", {
                  className: tf().header,
                  children: [
                    (0, a.jsx)(eH.I, {
                      className: tf().icon,
                      address: m.address,
                      diameter: 48,
                    }),
                    (0, a.jsxs)("div", {
                      className: tf().column,
                      children: [
                        (0, a.jsx)("p", {
                          className: tf().primaryText,
                          children: m.name,
                        }),
                        (0, a.jsx)("p", {
                          className: tf().secondaryText,
                          children: m.symbol,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: tf().footer,
                  children: [
                    (0, a.jsxs)("div", {
                      className: tf().footer__box,
                      children: [
                        (0, a.jsxs)("div", {
                          className: tf().column,
                          children: [
                            (0, a.jsx)("p", {
                              className: N()(tf().secondaryText, tf().label),
                              children: "Token Address",
                            }),
                            h.map((e) => {
                              let { chainId: t, address: n } = e,
                                s = (0, c.ET)(t);
                              return (0, a.jsxs)(
                                "div",
                                {
                                  className: tf().address,
                                  children: [
                                    s &&
                                      (0, a.jsx)(g.default, {
                                        width: 16,
                                        height: 16,
                                        alt: s.name,
                                        src: s.icon.src,
                                      }),
                                    (0, a.jsx)("p", { children: (0, e0.T)(n) }),
                                  ],
                                },
                                t
                              );
                            }),
                          ],
                        }),
                        (0, a.jsxs)("div", {
                          className: tf().column,
                          children: [
                            (0, a.jsx)("p", {
                              className: tf().secondaryText,
                              children: u,
                            }),
                            (0, a.jsx)("p", {
                              className: tf().primaryText,
                              children: p.toLocaleString("en-us"),
                            }),
                          ],
                        }),
                      ],
                    }),
                    s === y.Gm.LaunchNewToken &&
                      (0, a.jsx)(eY, {
                        value: r,
                        label: "Mechanism",
                        direction: "column",
                        onChange: (e) => n("mechanism", e),
                        radioItems: [
                          {
                            label: "Lock & Unlock",
                            value: "lock-unlock",
                            disabled: "mint-burn" === r || "flexible" === l,
                          },
                          {
                            label: "Mint & Burn",
                            value: "mint-burn",
                            disabled: "lock-unlock" === r,
                          },
                        ],
                      }),
                  ],
                }),
              ],
            }),
          ],
        });
      });
      tT.displayName = "TokenCard";
      var tN = n(13904);
      let tj = (e) => {
        let { type: t, onChange: n } = e;
        return (0, a.jsxs)("div", {
          className: tu().distribution,
          children: [
            (0, a.jsx)("button", {
              onClick: () => n("evenly"),
              className: N()(tu().distribution__option, {
                [tu().distribution__option_selected]: "evenly" === t,
              }),
              children: (0, a.jsx)("p", { children: "Split Evenly" }),
            }),
            (0, a.jsx)("button", {
              onClick: () => n("custom"),
              className: N()(tu().distribution__option, {
                [tu().distribution__option_selected]: "custom" === t,
              }),
              children: (0, a.jsx)("p", { children: "Custom" }),
            }),
          ],
        });
      };
      tj.displayName = "Distribution";
      let tw = (0, d.memo)((e) => {
        let {
            name: t,
            icon: n,
            error: s,
            supply: i,
            disabled: r,
            readOnly: l,
            onMax: o,
            onSelect: c,
            onChange: p,
            isSelected: u,
            hiddenInput: m,
            depositFeeUSD: _,
            comingSoon: y,
          } = e,
          h = (0, d.useMemo)(() => l || r || !u, [l, r, u]);
        return (0, a.jsxs)("button", {
          onClick: () => {
            c && !r && c();
          },
          disabled: y,
          className: N()(tu().networkOption, {
            [tu().networkOption_selected]: u,
          }),
          children: [
            (0, a.jsxs)("div", {
              className: tu().networkOption__header,
              children: [
                (0, a.jsx)(g.default, {
                  width: 48,
                  height: 48,
                  alt: t,
                  src: n.src,
                }),
                y
                  ? (0, a.jsx)("div", {
                      className: tu().networkOption__comingSoon,
                      children: "Coming Soon",
                    })
                  : (0, a.jsx)(j, {
                      isClickable: !0,
                      value: u ? "checked" : "undefined",
                    }),
              ],
            }),
            (0, a.jsx)("p", {
              className: tu().networkOption__name,
              children: t,
            }),
            (0, a.jsx)("p", {
              className: tu().networkOption__value,
              children: y ? "-" : `~$${_}`,
            }),
            !m &&
              (0, a.jsx)("div", {
                onClick: (e) => {
                  h || e.stopPropagation();
                },
                children: (0, a.jsx)(eE, {
                  name: "supply",
                  value: i,
                  style: { cursor: h ? "pointer" : "text" },
                  error: u && s ? { type: s?.type } : void 0,
                  disabled: y,
                  className: tu().networkOption__input,
                  onChange: (e) => {
                    p && p(e);
                  },
                  readOnly: h,
                  placeholder: "No Supply",
                  rightAdornment: h
                    ? null
                    : (0, a.jsx)("button", {
                        onClick: () => {
                          o && o();
                        },
                        className: tu().networkOption__maxButton,
                        children: "Max",
                      }),
                }),
              }),
          ],
        });
      });
      tw.displayName = "NetworkOption";
      let tC = (0, d.memo)((e) => {
        let { ...t } = e;
        return (0, a.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 14 14",
          ...t,
          children: (0, a.jsx)("path", {
            fill: "#F0EFF0",
            d: "M9.625 5.199v-.261c0-1.176-1.773-2.063-4.125-2.063-2.352 0-4.125.887-4.125 2.063v1.875c0 .979 1.23 1.757 3 1.99v.26c0 1.175 1.773 2.062 4.125 2.062 2.352 0 4.125-.887 4.125-2.063V7.188c0-.97-1.192-1.75-3-1.99Zm2.25 1.989c0 .62-1.443 1.312-3.375 1.312a7.92 7.92 0 0 1-.52-.017c1.012-.369 1.645-.967 1.645-1.67v-.856c1.4.208 2.25.774 2.25 1.23Zm-7.5.855V6.928a8.817 8.817 0 0 0 2.25 0v1.115a7.642 7.642 0 0 1-2.25 0Zm4.5-1.89v.66c0 .393-.582.815-1.5 1.072V6.789c.605-.147 1.117-.365 1.5-.636ZM5.5 3.625c1.932 0 3.375.693 3.375 1.313S7.432 6.25 5.5 6.25s-3.375-.693-3.375-1.313S3.568 3.625 5.5 3.625ZM2.125 6.813v-.66c.382.27.895.49 1.5.636v1.096c-.918-.257-1.5-.68-1.5-1.072Zm3 2.25v-.196a9.02 9.02 0 0 0 .909-.008c.194.069.39.128.591.176v1.1c-.918-.257-1.5-.68-1.5-1.072Zm2.25 1.23V9.175a8.624 8.624 0 0 0 2.25.003v1.115a7.76 7.76 0 0 1-2.25 0Zm3-.159V9.04c.605-.147 1.117-.365 1.5-.636v.66c0 .393-.582.815-1.5 1.071Z",
          }),
        });
      });
      tC.displayName = "CoinsIcon";
      let tS = (0, d.memo)((e) => {
        let { ...t } = e;
        return (0, a.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 16 16",
          ...t,
          children: (0, a.jsxs)("g", {
            fill: "#F25A5A",
            children: [
              (0, a.jsx)("path", {
                d: "M7.301 6.602h1.4V10.1h-1.4V6.6Zm0 4.198h1.4v1.4H7.3v-1.4Z",
              }),
              (0, a.jsx)("path", {
                d: "M9.238 2.54a1.398 1.398 0 0 0-1.237-.743c-.52 0-.994.285-1.237.744l-5.135 9.701a1.393 1.393 0 0 0 .038 1.377 1.385 1.385 0 0 0 1.198.678h10.272a1.39 1.39 0 0 0 1.2-.678 1.393 1.393 0 0 0 .037-1.377L9.238 2.54ZM2.865 12.897l5.136-9.701 5.14 9.701H2.865Z",
              }),
            ],
          }),
        });
      });
      tS.displayName = "WarningIcon";
      let tI = (0, d.memo)(() => {
        let e = (0, l.TL)(),
          t = (0, o.Z)("expert"),
          {
            watch: n,
            setValue: s,
            getValues: i,
            clearErrors: c,
            formState: { errors: p },
          } = (0, _.Gc)(),
          {
            launchOption: u,
            distributionType: m,
            importedTokensData: h,
            isNotEnoughBalance: x,
          } = (0, $.v9)((e) => e.EtsEntity),
          { address: g, chainId: b } = (0, r.Z)(),
          { data: k } = (0, tm.useBalance)({ chainId: b, address: g }),
          v = n("networks", []),
          f = n("mechanism"),
          T = n("importedTokens", []),
          N = (0, d.useMemo)(
            () =>
              v.map((e) => {
                let { id: t } = e;
                return t;
              }),
            [v]
          ),
          w = (0, d.useMemo)(
            () =>
              v.reduce((e, t) => {
                let { id: n, supply: a } = t;
                return { ...e, [n]: String(a) };
              }, {}),
            [v]
          ),
          C = (0, d.useMemo)(
            () =>
              u === y.Gm.LaunchExistingToken
                ? T.map((e) => {
                    let { network: t } = e;
                    return t.chainId;
                  })
                : [],
            [u, T]
          ),
          S = (0, d.useMemo)(() => [...N, ...C], [N, C]),
          [I, M] = (0, d.useState)(!1),
          {
            nativeCurrency: E,
            totalPrice: D,
            eachPrice: L,
          } = tk({
            selectedTokenChainIds: N,
            allNewTokenChainIds: (0, d.useMemo)(
              () =>
                t
                  .filter((e) => {
                    let { chainId: t } = e;
                    return !C.includes(t);
                  })
                  .map((e) => {
                    let { chainId: t } = e;
                    return t;
                  }),
              [C]
            ),
            connectorChainIds: C,
          }),
          B = (0, d.useMemo)(() => {
            if (u === y.Gm.LaunchNewToken) {
              let { tokenSupply: e } = i();
              return Number(e);
            }
            return h.reduce((e, t) => {
              let { totalSupply: n } = t;
              return n + e;
            }, 0);
          }, [i, u, h]),
          { isAllSelected: A } = (0, d.useMemo)(
            () => ({
              isAllSelected:
                t.filter((e) => {
                  let { comingSoon: t } = e;
                  return !t;
                }).length === S.length,
            }),
            [t, S]
          ),
          P = (0, d.useCallback)(
            (e) => () => {
              let t = v.find((t) => e === t.id)
                ? v.filter((t) => e !== t.id)
                : [...v, { id: e, supply: 0 }];
              if ("evenly" === m && u === y.Gm.LaunchNewToken) {
                let e = B / t.length;
                t = t.map((t) => ({ ...t, supply: e }));
              }
              s("networks", t);
            },
            [s, v, u, m, B]
          ),
          R = (0, d.useCallback)(
            (e) => () => {
              s(
                "networks",
                v.map((t) =>
                  e === t.id ? { ...t, supply: B } : { ...t, supply: 0 }
                )
              );
            },
            [s, v, B]
          ),
          W = (0, d.useCallback)(
            (e) => (t) => {
              s(
                "networks",
                v.map((n) => (e === n.id ? { ...n, supply: Number(t) } : n))
              );
            },
            [s, v]
          ),
          O = (0, d.useCallback)(() => {
            if (A) s("networks", []);
            else {
              let e = [
                ...v,
                ...t
                  .filter((e) => {
                    let { comingSoon: t } = e;
                    return !t;
                  })
                  .filter((e) => {
                    let { chainId: t } = e;
                    return !N.includes(t);
                  })
                  .filter((e) => {
                    let { chainId: t } = e;
                    return !C.includes(t);
                  })
                  .map((e) => {
                    let { chainId: t } = e;
                    return { id: t, supply: 0 };
                  }),
              ];
              if ("evenly" === m && u === y.Gm.LaunchNewToken) {
                let t = B / e.length;
                e = e.map((e) => ({ ...e, supply: t }));
              }
              s("networks", e);
            }
          }, [s, v, t, u, A, m, B, N, C]),
          F = (0, d.useCallback)(
            (t) => {
              if ("evenly" === t) {
                let e = B / v.length;
                s(
                  "networks",
                  v.map((t) => ({ ...t, supply: e }))
                );
              }
              e(U.s.actions.setDistributionType(t));
            },
            [e, s, v, B]
          ),
          G = (0, d.useCallback)(() => {
            M(!0);
          }, []),
          V = (0, d.useCallback)(() => {
            M(!1);
          }, []);
        return (
          (0, d.useEffect)(() => {
            g || M(!1);
          }, [g]),
          (0, d.useEffect)(() => {
            c("networks");
          }, [v, c]),
          (0, d.useEffect)(() => {
            (v.length > 0 && u === y.Gm.LaunchNewToken) ||
            (v.length > 0 && u === y.Gm.LaunchExistingToken)
              ? e(U.s.actions.setIsFilledStep(!0))
              : e(U.s.actions.setIsFilledStep(!1));
          }, [e, v, u]),
          (0, d.useEffect)(() => {
            k?.value === 0n ||
            (k?.value &&
              D.totalPrice >= Number((0, th.b)(k?.value, k?.decimals ?? 18)))
              ? e(U.s.actions.setIsNotEnoughBalance(!0))
              : e(U.s.actions.setIsNotEnoughBalance(!1));
          }, [e, D.totalPrice, k?.value, k?.decimals]),
          (0, a.jsxs)("div", {
            className: tu().setupNetwork,
            children: [
              (0, a.jsxs)("div", {
                className: tu().setupNetwork__content,
                children: [
                  (0, a.jsx)("aside", {
                    className: tu().setupNetwork__aside,
                    children: (0, a.jsx)(tT, {}),
                  }),
                  (0, a.jsxs)("div", {
                    className: tu().setupNetwork__main,
                    children: [
                      (0, a.jsx)("h4", {
                        className: tu().setupNetwork__text,
                        children: "Choose Network & Supply to Deploy:",
                      }),
                      (0, a.jsxs)("div", {
                        className: tu().setupNetwork__tabs,
                        children: [
                          (0, a.jsxs)("button", {
                            onClick: O,
                            className: tu().setupNetwork__selectAll,
                            children: [
                              (0, a.jsx)(j, {
                                value: A ? "checked" : "undefined",
                              }),
                              (0, a.jsxs)("p", {
                                children: [
                                  "Select All ",
                                  (0, a.jsxs)("span", {
                                    children: ["(", S.length, ")"],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          u === y.Gm.LaunchNewToken &&
                            (0, a.jsx)(tj, { type: m, onChange: F }),
                        ],
                      }),
                      (0, a.jsx)("div", {
                        className: tu().setupNetwork__body,
                        children: (0, a.jsx)("div", {
                          className: tu().setupNetwork__grid,
                          children: t.map((e) =>
                            (0, a.jsx)(
                              tw,
                              {
                                ...e,
                                supply: C.includes(e.chainId)
                                  ? "0"
                                  : w[e.chainId] ?? "",
                                disabled: C.includes(e.chainId) || e.comingSoon,
                                readOnly:
                                  "evenly" === m ||
                                  u === y.Gm.LaunchExistingToken,
                                isSelected:
                                  N.includes(e.chainId) ||
                                  C.includes(e.chainId),
                                hiddenInput:
                                  "lock-unlock" === f &&
                                  u === y.Gm.LaunchExistingToken,
                                error: p.networks,
                                onMax: R(e.chainId),
                                onSelect: P(e.chainId),
                                onChange: W(e.chainId),
                                depositFeeUSD:
                                  null !== L
                                    ? +L[e.chainId].priceUSDFormatted
                                    : 0,
                                comingSoon: e.comingSoon,
                              },
                              e.chainId
                            )
                          ),
                        }),
                      }),
                      (0, a.jsxs)("div", {
                        className: tu().setupNetwork__footer,
                        children: [
                          (0, a.jsx)("p", {
                            className: tu().setupNetwork__text,
                            children: "Total Deployment Fees:",
                          }),
                          (0, a.jsxs)("div", {
                            className: tu().setupNetwork__info,
                            children: [
                              (0, a.jsxs)("div", {
                                className: tu().setupNetwork__box,
                                children: [
                                  (0, a.jsxs)("p", {
                                    className: tu().setupNetwork__text,
                                    children: [
                                      D.totalPriceFormatted,
                                      " ",
                                      E?.symbol,
                                      " ",
                                      (0, a.jsxs)("span", {
                                        children: [
                                          "(~$",
                                          D.totalUSDPriceFormatted,
                                          ")",
                                        ],
                                      }),
                                    ],
                                  }),
                                  x &&
                                    (0, a.jsx)(em.e, {
                                      placement: "top-end",
                                      className: tu().warning,
                                      content: (0, a.jsxs)("div", {
                                        className: tu().warning__content,
                                        children: [
                                          (0, a.jsx)("span", {
                                            className: tu().warning__label,
                                            children: "Not enough Balance",
                                          }),
                                          (0, a.jsx)("span", {
                                            children: `Your Balance: ${
                                              k
                                                ? `${(0, tx.t)(
                                                    Number(
                                                      (0, th.b)(
                                                        k?.value,
                                                        k?.decimals ?? 18
                                                      )
                                                    ),
                                                    5
                                                  )} ${k.symbol}`
                                                : "-"
                                            }`,
                                          }),
                                        ],
                                      }),
                                      children: (0, a.jsx)("span", {
                                        children: (0, a.jsx)(tS, {
                                          className: tu().warning__icon,
                                        }),
                                      }),
                                    }),
                                ],
                              }),
                              (0, a.jsxs)("button", {
                                onClick: G,
                                disabled: !g,
                                className: tu().topUp,
                                children: [
                                  (0, a.jsx)(tC, {
                                    className: tu().topUp__icon,
                                  }),
                                  "Top Up",
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              I &&
                (0, a.jsx)(tN.Y, {
                  onClose: V,
                  nativeBalance: k,
                  deploymentFee: D.totalPriceFormatted,
                }),
            ],
          })
        );
      });
      tI.displayName = "SetupNetwork";
      let tM = (0, d.forwardRef)((e, t) => {
        let { currentStep: n, launchOption: s } = e,
          { isSkipTokenSetup: i, isTokenReview: r } = (0, $.v9)(
            (e) => e.EtsEntity
          ),
          {
            trigger: l,
            setError: o,
            getValues: c,
            formState: { errors: p },
          } = (0, _.Gc)();
        c();
        let u = (0, d.useCallback)(
            (e) =>
              (s === y.Gm.LaunchNewToken && [0].includes(e)) ||
              (s === y.Gm.LaunchExistingToken && [2].includes(e) && !i && !r),
            [i, s, r]
          ),
          m = (0, d.useCallback)((e) => {
            console.log("data = ", e);
          }, []),
          h = (0, d.useCallback)(() => {
            let { networks: e, tokenSupply: t } = c();
            if (s === y.Gm.LaunchExistingToken) return e.length > 0;
            let n = e.reduce((e, t) => {
              let { supply: n } = t;
              return e + n;
            }, 0);
            return (
              console.log({ tokenSupply: t, distributedSupply: n }),
              n === Number(t) ||
                (o("networks", {
                  type: "custom",
                  message: `Supply should equal to ${Number(t).toLocaleString(
                    "en-us"
                  )}`,
                }),
                !1)
            );
          }, [s]),
          x = (0, d.useCallback)(async () => {
            if (u(n)) {
              let e = [];
              if (
                ([0, 2].includes(n) &&
                  ((e = [
                    "decimals",
                    "tokenName",
                    "tokenTicker",
                    "contractAddress",
                  ]),
                  0 === n && e.push("tokenSupply")),
                !(await l(e)))
              )
                return console.log(p), !1;
              m(c());
            } else if (1 === n) return h();
            return !0;
          }, [n, p, c, u, m, l]);
        (0, d.useImperativeHandle)(t, () => ({ validateStep: x }));
        let g = (0, d.useCallback)(() => {
            switch (n) {
              case 0:
                return (0, a.jsx)(eX, { type: "new" });
              case 1:
                return (0, a.jsx)(tI, {});
              default:
                return (0, a.jsx)("div", { children: "No step found" });
            }
          }, [n]),
          b = (0, d.useCallback)(() => {
            switch (n) {
              case 0:
                return (0, a.jsx)(tc, {});
              case 1:
                return (0, a.jsx)(tI, {});
              case 2:
                if (!i) return (0, a.jsx)(e1, {});
              default:
                return (0, a.jsx)("div", { children: "No step found" });
            }
          }, [n, i]);
        return (0, a.jsx)("div", {
          children: s === y.Gm.LaunchNewToken ? g() : b(),
        });
      });
      tM.displayName = "StepContent";
      let tE = (0, d.forwardRef)((e, t) => {
        let n = (0, l.TL)(),
          {
            currentStep: s,
            launchOption: i,
            isSkipTokenSetup: r,
          } = (0, $.v9)((e) => e.EtsEntity),
          { reset: o } = (0, _.Gc)(),
          c = (0, d.useCallback)(
            (e) => {
              n(U.s.actions.setLaunchOption(e)), o();
            },
            [n, o]
          ),
          p = (0, eG.a)(768);
        return (
          (0, d.useEffect)(() => {
            n(U.s.actions.setLaunchOption(y.Gm.LaunchNewToken)), o();
          }, []),
          (0, a.jsxs)("div", {
            className: N()(ek().interactionBlock, {
              [ek().interactionBlock_newSetupTokenBg]:
                i === y.Gm.LaunchNewToken && 0 === s,
              [ek().interactionBlock_existingSetupTokenGridBg]:
                i === y.Gm.LaunchExistingToken && 0 === s,
              [ek().interactionBlock_existingSetupTokenBg]:
                i === y.Gm.LaunchExistingToken && 2 === s && !r,
            }),
            children: [
              (0, a.jsxs)("div", {
                className: ek().header,
                children: [
                  (0, a.jsx)(ew, {
                    type: "primary",
                    items: p ? V : G,
                    activeTabValue: i,
                    setActiveTabValue: c,
                  }),
                  (0, a.jsxs)("a", {
                    rel: "noopener noreferrer",
                    href: "https://docs.entangle.fi/",
                    target: "_blank",
                    className: ek().docsLink,
                    children: [
                      (0, a.jsx)(g.default, {
                        className: ek().icon,
                        src: "/_next/static/media/docs.39ebe682.svg",
                        alt: "Docs icon",
                        width: 14,
                        height: 14,
                      }),
                      "Docs",
                    ],
                  }),
                ],
              }),
              (0, a.jsx)(tM, { currentStep: s, launchOption: i, ref: t }),
            ],
          })
        );
      });
      tE.displayName = "InteractionBlock";
      var tD = (0, d.memo)(function () {
        let e = (0, l.TL)(),
          { address: t } = (0, r.Z)(),
          n = (0, d.useRef)(null),
          s = (0, d.useCallback)(() => {
            e(Y.L.actions.setWalletConnectChainId(c.m5.Ethereum.chainId));
          }, [e]),
          p = (0, o.Z)("expert");
        m(p);
        let u = K(p),
          y = (0, _.cI)({ defaultValues: u, mode: "onChange" });
        return (
          (0, d.useEffect)(() => {
            y.reset(u);
          }, [p?.length]),
          (0, a.jsx)(_.RV, {
            ...y,
            children: (0, a.jsx)("div", {
              className: i().launchNewTokenPage,
              children: (0, a.jsxs)("div", {
                className: i().contentContainer,
                children: [
                  (0, a.jsx)(tE, { ref: n }),
                  (0, a.jsx)(eg, {
                    address: t,
                    handleConnectWalletClick: s,
                    ref: n,
                  }),
                ],
              }),
            }),
          })
        );
      });
    },
    32635: function (e, t, n) {
      "use strict";
      n.d(t, {
        k: function () {
          return r;
        },
      });
      var a = n(57437),
        s = n(2265),
        i = n(97362);
      let r = (0, s.memo)((e) => {
        let { hint: t, type: n = "base" } = e,
          r = (0, s.useCallback)(() => {
            switch (n) {
              case "new":
                return (0, a.jsx)("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  fill: "none",
                  width: "15",
                  height: "15",
                  viewBox: "0 0 15 15",
                  children: (0, a.jsx)("path", {
                    fill: "#06E097",
                    fillRule: "evenodd",
                    d: "M7.496 1.319a6.181 6.181 0 1 0 0 12.362 6.181 6.181 0 0 0 0-12.362ZM2.2 7.5a5.295 5.295 0 1 1 10.59 0 5.295 5.295 0 0 1-10.59 0Zm5.994-2.8a.7.7 0 1 1-1.4 0 .7.7 0 0 1 1.4 0Zm-2.1 1.4H7.495c.258 0 .466.21.466.467v3.267h.934v.933H6.095v-.933h.933v-2.8h-.933V6.1Z",
                    clipRule: "evenodd",
                  }),
                });
              case "question":
                return (0, a.jsxs)("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  fill: "none",
                  width: "14",
                  height: "14",
                  viewBox: "0 0 14 14",
                  children: [
                    (0, a.jsx)("g", {
                      clipPath: "url(#clip0_97_42223)",
                      children: (0, a.jsx)("path", {
                        stroke: "currentColor",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "M5.304 5.247a1.75 1.75 0 0 1 3.4.584c0 1.166-1.75 1.75-1.75 1.75m.047 2.333h.006m5.828-2.917a5.833 5.833 0 1 1-11.667 0 5.833 5.833 0 0 1 11.667 0Z",
                      }),
                    }),
                    (0, a.jsx)("defs", {
                      children: (0, a.jsx)("clipPath", {
                        id: "clip0_97_42223",
                        children: (0, a.jsx)("path", {
                          fill: "#fff",
                          d: "M0 0h14v14H0z",
                        }),
                      }),
                    }),
                  ],
                });
              default:
                return (0, a.jsxs)("svg", {
                  width: "16",
                  height: "16",
                  viewBox: "0 0 16 16",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: [
                    (0, a.jsxs)("g", {
                      clipPath: "url(#clip0_97_42471)",
                      children: [
                        (0, a.jsx)("path", {
                          d: "M7.99967 14.6663C11.6816 14.6663 14.6663 11.6816 14.6663 7.99967C14.6663 4.31778 11.6816 1.33301 7.99967 1.33301C4.31778 1.33301 1.33301 4.31778 1.33301 7.99967C1.33301 11.6816 4.31778 14.6663 7.99967 14.6663Z",
                          stroke: "#9DA2B3",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                        }),
                        (0, a.jsx)("path", {
                          d: "M8 10.6667V8",
                          stroke: "#9DA2B3",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                        }),
                        (0, a.jsx)("path", {
                          d: "M8 5.33301H8.00667",
                          stroke: "#9DA2B3",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                        }),
                      ],
                    }),
                    (0, a.jsx)("defs", {
                      children: (0, a.jsx)("clipPath", {
                        id: "clip0_97_42471",
                        children: (0, a.jsx)("rect", {
                          width: "16",
                          height: "16",
                          fill: "white",
                        }),
                      }),
                    }),
                  ],
                });
            }
          }, [n]);
        return (0, a.jsx)("div", {
          className: "group",
          children: (0, a.jsx)(i.e, {
            placement: "top-end",
            content: (0, a.jsx)("div", {
              className:
                "text-neutral-90 bg-neutral-20 border border-neutral-30 relative left-[90px] rounded-lg text-medium p-4 w-max max-w-[15rem]",
              children: t,
            }),
            children: r(),
          }),
        });
      });
      r.displayName = "ETSHint";
    },
    20951: function (e, t, n) {
      "use strict";
      n.d(t, {
        default: function () {
          return em;
        },
      });
      var a,
        s,
        i = n(57437),
        r = n(6516),
        l = n.n(r),
        o = n(2265),
        d = n(91960),
        c = n(47625),
        p = n(21156),
        u = n(56940),
        m = n(97059),
        _ = n(62994),
        y = n(54061),
        h = n(20075),
        x = n.n(h),
        g = n(36760),
        b = n.n(g),
        k = n(33145),
        v = n(94587),
        f = n(54484);
      let T = (e) => {
        let {
            data: t,
            period: n,
            withLoader: a = !0,
            strokeColor: s = "var(--Turquoise-50, #08DCCF)",
            withAxis: r = !0,
            curveType: l = "monotoneX",
            width: d = "100%",
            height: h = "100%",
            margin: g,
          } = e,
          [T, N] = (0, o.useState)(!0);
        return (
          (0, o.useEffect)(() => {
            if (!a) {
              setTimeout(() => N(!1), 1e3);
              return;
            }
            N(!1);
          }, [a]),
          (0, i.jsxs)("div", {
            className: b()(x().wrap),
            children: [
              a &&
                (0, i.jsx)("div", {
                  className:
                    "w-full flex justify-center h-[10rem] mb-[-10rem] items-center",
                  children: (0, i.jsx)("div", {
                    className: b()(
                      "flex absolute transition-all justify-center p-4",
                      { "opacity-0": !T, "opacity-100": T }
                    ),
                    children: (0, i.jsx)(k.default, {
                      src: v.Z,
                      alt: "",
                      width: 30,
                      height: 18.6,
                    }),
                  }),
                }),
              (0, i.jsx)(c.h, {
                className: b()("transition-all ", {
                  "opacity-0": T,
                  "opacity-100": !T,
                }),
                width: d,
                height: h,
                children: (0, i.jsxs)(p.w, {
                  data: t,
                  width: 120,
                  height: 20,
                  margin: g,
                  children: [
                    r &&
                      (0, i.jsxs)(i.Fragment, {
                        children: [
                          (0, i.jsx)(u.q, {
                            horizontal: !0,
                            vertical: !0,
                            stroke: "#1E1E24",
                            strokeDasharray: "3 3",
                            strokeLinejoin: "round",
                          }),
                          (0, i.jsx)(m.K, {
                            dataKey: "name",
                            allowDataOverflow: !0,
                            axisLine: !1,
                            tickMargin: 15,
                            tickLine: {
                              stroke: "1E1E24",
                              strokeWidth: 1,
                              height: 50,
                              y2: 300,
                            },
                            tick: {
                              fontSize: "12px",
                              fontStyle: "normal",
                              fontWeight: 400,
                              fill: "var(--neutral-60)",
                            },
                            interval:
                              "hour" === n
                                ? 1
                                : "twenty four hours" === n
                                ? 40
                                : 0,
                          }),
                          (0, i.jsx)(_.B, {
                            tick: {
                              fontSize: "12px",
                              fontStyle: "normal",
                              fontWeight: 400,
                              fill: "var(--neutral-60)",
                            },
                            domain: [
                              (e) => (0, f.t)(e - 0.01, 2),
                              (e) => (0, f.t)(e + 0.01, 2),
                            ],
                            axisLine: !1,
                            tickLine: !1,
                            tickMargin: 20,
                          }),
                        ],
                      }),
                    (0, i.jsx)(y.x, {
                      type: l,
                      dataKey: "value",
                      dot: !1,
                      strokeWidth: 1.5,
                      stroke: s,
                      name: "Line 1",
                    }),
                  ],
                }),
              }),
            ],
          })
        );
      };
      var N = n(87062),
        j = n.n(N);
      ((a = s || (s = {})).HOUR = "hour"),
        (a.TWENTY_FOUR_HOURS = "twenty four hours"),
        (a.SEVEN_DAYS = "seven days");
      let w = () => {
        let {
            store: {
              TokenomicsEntity: { bondedTokens: e, inflation: t },
              CoinEntity: {
                coins: {
                  entangle: {
                    price: n = 0,
                    dailyData: a = [],
                    hourlyData: s = [],
                    twentyFourHdata: r = [],
                    percent: l = "",
                    totalSupply: c,
                  },
                },
              },
            },
          } = (0, d.oR)((e) => ({
            TokenomicsEntity: e.TokenomicsEntity,
            CoinEntity: e.CoinEntity,
          })),
          [p, u] = (0, o.useState)("hour"),
          m = (c * t) / Number(e),
          _ = (0, o.useMemo)(
            () =>
              "hour" === p
                ? s
                : "seven days" === p
                ? a
                : "twenty four hours" === p
                ? r
                : void 0,
            [a, s, p, r]
          ),
          y = l.startsWith("-") ? l.substring(1) : l;
        return (0, i.jsxs)("div", {
          className: "flex flex-col gap-[12px] order-2",
          children: [
            (0, i.jsx)("div", {
              className: j().header,
              children: "Tokenomics",
            }),
            (0, i.jsxs)("div", {
              className: `${j().block} lg:px-[24px] px-[16px]`,
              children: [
                (0, i.jsxs)("div", {
                  className: j().upperWrap,
                  children: [
                    (0, i.jsxs)("div", {
                      className: j().itemWrap,
                      children: [
                        (0, i.jsx)("div", {
                          className: j().name,
                          children: "Price (EAI)",
                        }),
                        (0, i.jsxs)("div", {
                          className: j().priceWrap,
                          children: [
                            (0, i.jsxs)("div", {
                              className: j().value,
                              children: ["$", n],
                            }),
                            (0, i.jsxs)("div", {
                              className: j().percent,
                              style: {
                                color: l.startsWith("-") ? "red" : "#54B10B",
                              },
                              children: [
                                (0, i.jsx)(k.default, {
                                  src: `assets/icons/${
                                    l.startsWith("-")
                                      ? "arrow_down"
                                      : "arrow-up"
                                  }.svg`,
                                  className: j().arrow,
                                  width: 24,
                                  height: 24,
                                  alt: "",
                                }),
                                y,
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, i.jsxs)("div", {
                      className: j().itemWrap,
                      children: [
                        (0, i.jsx)("div", {
                          className: j().name,
                          style: { textAlign: "end" },
                          children: "Staking APR",
                        }),
                        (0, i.jsx)("div", {
                          className: j().value,
                          children: `${m.toLocaleString("en", {
                            minimumFractionDigits: 0,
                            maximumFractionDigits: 2,
                          })}%`,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, i.jsx)("div", {
                  className: j().filters,
                  children: (0, i.jsxs)("div", {
                    className: j().filterWrap,
                    children: [
                      (0, i.jsx)("button", {
                        className:
                          "hour" === p ? j().filterClicked : j().filter,
                        onClick: () => u("hour"),
                        children: "1hr",
                      }),
                      (0, i.jsx)("button", {
                        className:
                          "twenty four hours" === p
                            ? j().filterClicked
                            : j().filter,
                        onClick: () => u("twenty four hours"),
                        children: "24hr",
                      }),
                      (0, i.jsx)("button", {
                        className:
                          "seven days" === p ? j().filterClicked : j().filter,
                        onClick: () => u("seven days"),
                        children: "7d",
                      }),
                    ],
                  }),
                }),
                (0, i.jsx)(T, {
                  data: _,
                  period: p,
                  height: 223,
                  margin: { top: 0, right: 15, bottom: 35, left: -5 },
                }),
              ],
            }),
          ],
        });
      };
      var C = n(63121),
        S = n.n(C),
        I = n(29194),
        M = n(75448);
      let E = (e) => Number(e.replace(/[\s,%]/g, ""));
      var D = n(15150),
        L = n(99404),
        B = n(68575),
        A = n(82723);
      let P = () => {
        let e = (0, d.TL)(),
          {
            store: {
              BlockEntity: { time: t, height: n, totalMessages: a },
            },
            asyncActions: {
              Block: { getInitData: s },
              Validator: { getDelegationValidators: r },
            },
          } = (0, d.oR)((e) => ({
            BlockEntity: e.BlockEntity,
            ValidatorEntity: e.ValidatorEntity,
          })),
          { activeValidators: l, inactiveValidators: c } = (0, B.v9)(A.c),
          p = (0, I.q_)({
            from: {
              height: 0,
              time: 0,
              totalMessages: 0,
              activeValidatorsCount: 0,
              totalValidatorsCount: 0,
            },
            config: { duration: 500 },
          });
        (0, o.useEffect)(() => {
          p.height.start(E(n)),
            p.time.start(Number(t)),
            p.totalMessages.start(a),
            p.activeValidatorsCount.start(l?.length || 0),
            p.totalValidatorsCount.start(l?.length + c?.length || 0);
        }, [
          l?.length,
          p.activeValidatorsCount,
          p.height,
          p.time,
          p.totalMessages,
          p.totalValidatorsCount,
          n,
          c?.length,
          t,
          a,
        ]),
          (0, o.useEffect)(() => {
            e(r({ sort: null, delegatorAddress: void 0 }));
          }, [e, r]),
          (0, o.useEffect)(() => {
            let t = setInterval(() => {
              e(s()), e(r({ sort: null, delegatorAddress: void 0 }));
            }, D.g_);
            return () => {
              clearTimeout(t);
            };
          }, []);
        let { state: u } = (0, L.V)({}),
          { items: m } = u;
        return (0, i.jsxs)("div", {
          className: S().container,
          children: [
            (0, i.jsx)("div", {
              className: S().header,
              children: "Blockchain",
            }),
            (0, i.jsxs)("div", {
              className: S().statWrap,
              children: [
                (0, i.jsxs)("div", {
                  className: S().item,
                  children: [
                    (0, i.jsxs)("div", {
                      className: S().subItem,
                      children: [
                        (0, i.jsx)("div", {
                          className: S().name,
                          children: "latest block",
                        }),
                        (0, i.jsx)("div", {
                          className: S().value,
                          children: (0, i.jsx)(I.q.span, {
                            children: p.height.to((e) =>
                              e.toLocaleString("en", {
                                maximumFractionDigits: 0,
                              })
                            ),
                          }),
                        }),
                      ],
                    }),
                    (0, i.jsxs)("div", {
                      className: S().subItem,
                      children: [
                        (0, i.jsx)("div", {
                          className: S().name,
                          children: "active validators",
                        }),
                        (0, i.jsxs)("div", {
                          className: b()(S().value, S().right),
                          children: [
                            (0, i.jsx)(I.q.span, {
                              children: p.activeValidatorsCount.to((e) =>
                                e.toLocaleString("en", {
                                  maximumFractionDigits: 0,
                                })
                              ),
                            }),
                            "/",
                            (0, i.jsx)(I.q.span, {
                              children: p.totalValidatorsCount.to((e) =>
                                e.toLocaleString("en", {
                                  maximumFractionDigits: 0,
                                })
                              ),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, i.jsx)("div", {
                  className: S().item,
                  children: (0, i.jsxs)("div", {
                    className: S().subItem,
                    children: [
                      (0, i.jsx)("div", {
                        className: S().name,
                        children: "average block time",
                      }),
                      (0, i.jsxs)("div", {
                        className: S().value,
                        children: [
                          (0, i.jsx)(I.q.span, {
                            children: p.time.to((e) =>
                              e.toLocaleString("en", {
                                minimumFractionDigits: 0,
                                maximumFractionDigits: 2,
                              })
                            ),
                          }),
                          " s",
                        ],
                      }),
                    ],
                  }),
                }),
                (0, i.jsx)("div", {
                  className: S().item,
                  children: (0, i.jsxs)("div", {
                    className: S().subItem,
                    children: [
                      (0, i.jsx)("div", {
                        className: S().name,
                        children: "Total Transactions",
                      }),
                      (0, i.jsx)("div", {
                        className: S().value,
                        children: (0, i.jsx)(I.q.span, {
                          children: p.totalMessages.to((e) =>
                            e.toLocaleString("en", { maximumFractionDigits: 0 })
                          ),
                        }),
                      }),
                    ],
                  }),
                }),
                (0, i.jsx)("div", {
                  className: S().item,
                  style: { borderBottom: "none" },
                  children: (0, i.jsxs)("div", {
                    className: S().subItem,
                    children: [
                      (0, i.jsx)("div", {
                        className: S().name,
                        children: "proposer",
                      }),
                      (0, i.jsx)("div", {
                        className: S().coinWrap,
                        children: 0 !== m.length ? (0, M.z)(m[0]) : "-",
                      }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        });
      };
      var R = n(75169),
        W = n(3574),
        U = n(86283);
      let O = (e) => {
          let { data: t } = e,
            [n, a] = (0, o.useState)(!0);
          return (
            (0, o.useEffect)(() => {
              a(!1);
            }, []),
            (0, i.jsxs)("div", {
              className: "h-full w-full",
              children: [
                (0, i.jsx)("div", {
                  className:
                    "w-full flex justify-center h-[5rem] mb-[-5rem] items-center",
                  children: (0, i.jsx)("div", {
                    className: b()(
                      "flex absolute transition-all justify-center p-4",
                      { "opacity-0": !n, "opacity-100": n }
                    ),
                    children: (0, i.jsx)(k.default, {
                      src: v.Z,
                      alt: "",
                      width: 30,
                      height: 18.6,
                    }),
                  }),
                }),
                (0, i.jsx)(c.h, {
                  className: b()("transition-all ", {
                    "opacity-0": n,
                    "opacity-100": !n,
                  }),
                  width: "100%",
                  height: "100%",
                  children: (0, i.jsx)(R.u, {
                    children: (0, i.jsxs)(W.b, {
                      isAnimationActive: !1,
                      style: { outline: "none" },
                      dataKey: "value",
                      data: t,
                      cx: "50%",
                      cy: "50%",
                      stroke: "none",
                      children: [
                        t.map((e, t) =>
                          (0, i.jsx)(
                            U.b,
                            {
                              fill: "bonded" === e.name ? "#6BEAE2" : "#022C29",
                            },
                            `cell-${t}`
                          )
                        ),
                        " ",
                      ],
                    }),
                  }),
                }),
              ],
            })
          );
        },
        F = () => {
          let {
              store: {
                TokenomicsEntity: {
                  bondedTokens: e,
                  unbondedTokens: t,
                  inflation: n,
                },
                CoinEntity: {
                  coins: {
                    entangle: { totalSupply: a },
                  },
                },
              },
            } = (0, d.oR)((e) => ({
              TokenomicsEntity: e.TokenomicsEntity,
              CoinEntity: e.CoinEntity,
            })),
            [s, r] = (0, o.useMemo)(() => {
              let n = (Number(e) / a) * 100;
              return [
                (0, f.t)(n, 2) + "%",
                (0, f.t)((Number(t) / a) * 100, 2) + "%",
              ];
            }, [e, a, t]),
            l = (0, o.useMemo)(
              () => [
                { name: "bonded", value: Number(e) },
                { name: "unbonded", value: Number(t) },
              ],
              [e, t]
            );
          return (0, i.jsxs)("div", {
            className: `${j().secondBlock} px-[16px] lg:px-[24px]`,
            children: [
              (0, i.jsxs)("div", {
                className: j().upperWrap,
                children: [
                  (0, i.jsxs)("div", {
                    className: j().itemWrap,
                    children: [
                      (0, i.jsx)("div", {
                        className: j().name,
                        children: "staked EAI",
                      }),
                      (0, i.jsxs)("div", {
                        className: j().priceWrap,
                        children: [
                          (0, i.jsx)("div", {
                            className: j().value,
                            children: e.replace(/\B(?=(\d{3})+(?!\d))/g, ","),
                          }),
                          (0, i.jsx)("div", {
                            className: j().tokenPercent,
                            children: s,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, i.jsxs)("div", {
                    className: j().itemWrap,
                    children: [
                      (0, i.jsx)("div", {
                        className: j().name,
                        style: { textAlign: "end" },
                        children: "supply",
                      }),
                      (0, i.jsx)("div", {
                        className: j().value,
                        children:
                          a?.toLocaleString("en", {
                            minimumFractionDigits: 0,
                            maximumFractionDigits: 2,
                          }) || 0,
                      }),
                    ],
                  }),
                ],
              }),
              (0, i.jsxs)("div", {
                className: j().upperWrap,
                style: { marginBottom: "0px" },
                children: [
                  (0, i.jsxs)("div", {
                    className: j().itemWrap,
                    children: [
                      (0, i.jsx)("div", {
                        className: j().name,
                        children: "unstaked EAI",
                      }),
                      (0, i.jsxs)("div", {
                        className: j().priceWrap,
                        children: [
                          (0, i.jsx)("div", {
                            className: j().value,
                            children: t.replace(/\B(?=(\d{3})+(?!\d))/g, ","),
                          }),
                          (0, i.jsx)("div", {
                            className: j().tokenPercent,
                            children: r,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, i.jsxs)("div", {
                    className: j().itemWrap,
                    children: [
                      (0, i.jsx)("div", {
                        className: j().name,
                        style: { textAlign: "end" },
                        children: "inflation",
                      }),
                      (0, i.jsxs)("div", {
                        className: j().value,
                        children: [
                          n.toLocaleString("en", {
                            minimumFractionDigits: 0,
                            maximumFractionDigits: 12,
                          }),
                          "%",
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, i.jsx)(O, { data: l }),
            ],
          });
        };
      var G = n(57090),
        V = n.n(G),
        H = n(27648),
        Z = n(24919),
        z = n(28369),
        q = n(23757),
        K = n(75466),
        Y = n(26185);
      let J = () =>
          (0, i.jsxs)("svg", {
            className: b()("transition-all ", "stroke-neutral-60", {
              "rotate-90": !0,
            }),
            width: "16",
            height: "16",
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, i.jsx)("path", {
                d: "M8 12.6663V3.33301",
                stroke: "inherit",
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
              (0, i.jsx)("path", {
                d: "M3.33301 7.99967L7.99967 3.33301L12.6663 7.99967",
                stroke: "inherit",
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
            ],
          }),
        X = [
          {
            name: "Status",
            cellWrapperClassName: "pr-1 pl-4",
            className: "pr-1 pl-4",
            getData: (e) => {
              let { status: t } = e;
              return (0, i.jsx)("div", {
                className: b()(
                  "flex rounded-3xl py-0.5 px-3 text-small w-fit",
                  {
                    "bg-blue-10 text-blue-60": "Inflight" == t,
                    "bg-forest-10 text-forest-50": "Delivered" == t,
                  }
                ),
                children: (0, i.jsx)("span", { children: t }),
              });
            },
            tableCellProps: { align: "left" },
          },
          {
            name: "Source",
            nameElement: (0, i.jsx)("div", {
              className: "flex gap-2 items-center",
              children: "Source",
            }),
            cellWrapperClassName: "px-1",
            className: "px-1",
            getData: (e) => {
              let {
                destination: { from: t, to: n },
              } = e;
              return (0, i.jsxs)("div", {
                className: "flex gap-2 items-center",
                children: [
                  (0, i.jsx)("div", {
                    className: "rounded-full overflow-hidden",
                    children: (0, i.jsx)(Y.f, {
                      type: "table",
                      width: 16,
                      height: 16,
                      src: t.image.src,
                      alt: t.image.alt,
                    }),
                  }),
                  (0, i.jsx)(J, {}),
                  (0, i.jsx)("div", {
                    className: "rounded-full overflow-hidden",
                    children: (0, i.jsx)(Y.f, {
                      type: "table",
                      width: 16,
                      height: 16,
                      src: n.image.src,
                      alt: n.image.alt,
                    }),
                  }),
                ],
              });
            },
          },
          {
            name: "Destination",
            cellWrapperClassName: "px-1",
            className: "px-1",
            getData: (e) => {
              let { destinationTxHash: t } = e;
              return (0, i.jsxs)("div", {
                className: "flex",
                children: [t.substring(0, 5), "..."],
              });
            },
            objectKey: "destinationTxHash",
          },
          {
            name: "Protocol",
            cellWrapperClassName: "pl-1 pr-4",
            className: "pl-1 pr-4",
            getData: (e) => {
              let {
                protocol: { name: t },
              } = e;
              return (0, i.jsxs)("div", {
                className: "flex items-center",
                children: [
                  (0, i.jsx)(Z.oi, { id: t, width: "16", height: "16" }),
                  (0, i.jsx)("span", { children: (0, z.$)(t) }),
                ],
              });
            },
          },
          {
            name: "Created",
            objectKey: "created",
            cellWrapperClassName: "pl-1 pr-4",
            className: "pl-1 pr-4",
            headerWrapperClassName: "!justify-end min-w-[7rem]",
            DataComponent: (e) => {
              let { created: t } = e;
              return (0, i.jsx)(q.g, { time: String(t) });
            },
          },
        ],
        $ = [
          {
            name: "Status",
            cellWrapperClassName: "pr-1 pl-4",
            className: "pr-1 pl-4",
            getData: () => (0, i.jsx)(K.O, { width: 185, height: 24 }),
            tableCellProps: { align: "left" },
          },
          {
            name: "Source",
            nameElement: (0, i.jsx)("div", {
              className: "flex gap-2 items-center",
              children: "Source",
            }),
            cellWrapperClassName: "px-1",
            className: "px-1",
            getData: () => (0, i.jsx)(K.O, { width: 150, height: 24 }),
          },
          {
            name: "Destination",
            cellWrapperClassName: "px-1",
            className: "px-1",
            getData: () => (0, i.jsx)(K.O, { width: 155, height: 24 }),
            objectKey: "destinationTxHash",
          },
          {
            name: "Protocol",
            cellWrapperClassName: "pl-1 pr-4",
            className: "pl-1 pr-4",
            getData: () => (0, i.jsx)(K.O, { width: 215, height: 24 }),
          },
          {
            name: "Created",
            objectKey: "created",
            cellWrapperClassName: "pl-1 pr-4",
            className: "pl-1 pr-4",
            headerWrapperClassName: "!justify-end min-w-[7rem]",
            getData: () => (0, i.jsx)(K.O, { width: 295, height: 24 }),
          },
        ];
      var Q = n(74732),
        ee = n(72694);
      let et = () => {
        let { state: e, loadNextPage: t } = (0, Q.y)({}),
          { items: n, loading: a } = e,
          s = (0, ee.Sf)(() => {
            t();
          }, 500);
        return (0, i.jsxs)("div", {
          className: V().container,
          children: [
            (0, i.jsx)("div", {
              className:
                "border-[1px] border-b-0 border-neutral-800 rounded-t mb-[24px]",
              children: (0, i.jsxs)("div", {
                className: V().wrap,
                children: [
                  (0, i.jsx)("div", {
                    className: V().title,
                    children: "Live Messaging",
                  }),
                
                ],
              }),
            }),
            (0, i.jsx)("div", {
              className: V().table,
              children: (0, i.jsx)(Z.iA, {
                borderTop: !1,
                columns: X,
                data: n,
                isLoading: a,
                skeletonColumns: $,
                selectHandler: (e) => {
                  window.open(`#`);
                },
                className: "!mb-0",
                intersectingHandler: (e) => {
                  e && s();
                },
              }),
            }),
          ],
        });
      };
      var en = n(17096),
        ea = n.n(en);
      let es = (e) => {
        let { title: t, img: n } = e,
          [a, s] = (0, o.useState)(!1);
        return (0, i.jsxs)("div", {
          className: ea().toolTip,
          onMouseEnter: () => s(!0),
          onMouseLeave: () => s(!1),
          children: [
            (0, i.jsx)(k.default, {
              src: n,
              width: 16,
              height: 16,
              alt: `${t} icon`,
            }),
            a &&
              (0, i.jsx)("div", { className: ea().tooltipText, children: t }),
          ],
        });
      };
      var ei = n(3562),
        er = n(34085);
      let el = () => {
        let {
            store: {
              MessageEntity: { bageData: e },
            },
          } = (0, d.oR)((e) => ({ MessageEntity: e.MessageEntity })),
          t = e.protocol_executor,
          n = (0, I.q_)({
            from: { totalMessages: 0, inflightMessages: 0 },
            config: { duration: 500 },
          });
        return (
          (0, o.useEffect)(() => {
            n.totalMessages.start(Number(e.totalMessages.value)),
              n.inflightMessages.start(Number(e.inflightMessages.value));
          }, [
            n.totalMessages,
            n.inflightMessages,
            e.totalMessages,
            e.inflightMessages,
          ]),
          (0, i.jsxs)("div", {
            className: ea().container,
            children: [
              (0, i.jsx)("div", {
                className: ea().header,
                children: "Photon Messaging",
              }),
              (0, i.jsxs)("div", {
                className: ea().statWrap,
                children: [
                  (0, i.jsx)("div", {
                    className: ea().item,
                    children: (0, i.jsxs)("div", {
                      className: ea().subItem,
                      children: [
                        (0, i.jsx)("div", {
                          className: ea().name,
                          children: "Active Agents",
                        }),
                        (0, i.jsx)("div", {
                          className: ea().value,
                          children: `${e.activeAgents}/${e.allAgents}`,
                        }),
                      ],
                    }),
                  }),
                  (0, i.jsx)("div", {
                    className: ea().item,
                    children: (0, i.jsxs)("div", {
                      className: ea().subItem,
                      children: [
                        (0, i.jsx)("div", {
                          className: ea().name,
                          children: "total messages",
                        }),
                        (0, i.jsx)("div", {
                          className: ea().value,
                          children: (0, i.jsx)(I.q.span, {
                            children: n.totalMessages.to((e) =>
                              e.toLocaleString("en", {
                                maximumFractionDigits: 0,
                              })
                            ),
                          }),
                        }),
                      ],
                    }),
                  }),
                  (0, i.jsx)("div", {
                    className: ea().item,
                    children: (0, i.jsxs)("div", {
                      className: ea().subItem,
                      children: [
                        (0, i.jsx)("div", {
                          className: ea().name,
                          children: "inflight messages",
                        }),
                        (0, i.jsx)("div", {
                          className: ea().value,
                          children: (0, i.jsx)(I.q.span, {
                            children: n.inflightMessages.to((e) =>
                              e.toLocaleString("en", {
                                maximumFractionDigits: 0,
                              })
                            ),
                          }),
                        }),
                      ],
                    }),
                  }),
                  (0, i.jsxs)("div", {
                    className: ea().item,
                    style: { borderBottom: "none" },
                    children: [
                      (0, i.jsxs)("div", {
                        className: ea().subItem,
                        children: [
                          (0, i.jsx)("div", {
                            className: ea().name,
                            children: "connected chains",
                          }),
                          (0, i.jsx)("div", {
                            className: ea().value,
                            children: e.connectedChains,
                          }),
                        ],
                      }),
                      (0, i.jsx)("div", {
                        className: ea().subItem,
                        children: (0, i.jsx)("div", {
                          className: ea().chainImages,
                          children: t.map((e) => {
                            let { chain_id: t } = e;
                            return (0, i.jsx)(
                              es,
                              { title: er.f[t], img: (0, ei.Sv)(t + "") },
                              t
                            );
                          }),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          })
        );
      };
      var eo = n(41866),
        ed = n.n(eo),
        ec = n(99376),
        ep = n(77013);
      let eu = () => {
        let { push: e } = (0, ec.useRouter)(),
          { state: t, loadNextPage: n } = (0, L.V)({}),
          { items: a, loading: s } = t;
        return (0, i.jsxs)("div", {
          className: ed().container,
          children: [
            (0, i.jsx)("div", {
              className:
                "border-[1px] border-b-0 border-neutral-800 rounded-t mb-[24px]",
              children: (0, i.jsxs)("div", {
                className: ed().wrap,
                children: [
                  (0, i.jsx)("div", {
                    className: ed().title,
                    children: "Block Information",
                  }),
                  (0, i.jsx)(H.default, {
                    href: "/blocks",
                    className: ed().more,
                    children: "see more",
                  }),
                ],
              }),
            }),
            (0, i.jsx)("div", {
              className: ed().table,
              children: (0, i.jsx)(Z.iA, {
                columns: (0, ep.oo)(5),
                data: a,
                isLoading: s,
                borderTop: !1,
                intersectingHandler: (e) => {
                  e && n();
                },
                className: "!mb-0",
                selectHandler: (t) => {
                  e(`#`);
                },
                skeletonColumns: ep.oX,
              }),
            }),
          ],
        });
      };
      var em = function () {
        let e = (0, d.TL)(),
          {
            asyncActions: {
              Message: { getInitData: t },
              Tokenomics: { getInitData: n },
              Coin: { getInitData: a, getPrice: s },
            },
          } = (0, d.oR)((e) => ({
            Message: e.MessageEntity,
            Tokenomics: e.TokenomicsEntity,
            Coin: e.CoinEntity,
          }));
        return (
          (0, o.useEffect)(() => {
            let i = setInterval(() => {
              e(t()), e(s("base")), e(n()), e(a("entangle"));
            }, D.g_);
            return () => {
              clearTimeout(i);
            };
          }, []),
          (0, i.jsxs)("main", {
            className: l().overviewPage,
            children: [
              (0, i.jsx)(P, {}),
              (0, i.jsx)(w, {}),
              (0, i.jsx)(el, {}),
              (0, i.jsx)(eu, {}),
              (0, i.jsx)(F, {}),
              (0, i.jsx)(et, {}),
            ],
          })
        );
      };
    },
    77013: function (e, t, n) {
      "use strict";
      n.d(t, {
        Tn: function () {
          return o;
        },
        oX: function () {
          return c;
        },
        oo: function () {
          return d;
        },
      });
      var a = n(57437);
      n(2265);
      var s = n(75448),
        i = n(92906),
        r = n(23757),
        l = n(75466);
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
        d = (e) => [
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
            DataComponent: s.z,
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
              (0, a.jsx)("div", {
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
              return (0, a.jsx)(r.g, { time: t });
            },
            tableHeaderProps: { align: "right" },
            tableCellProps: { align: "right" },
            headerWrapperClassName: "!justify-end min-w-[7rem]",
            cellWrapperClassName: "pl-1 pr-4",
            className: "pl-1 pr-4",
          },
        ],
        c = [
          {
            name: "Height",
            objectKey: "height",
            getData: () => (0, a.jsx)(l.O, { width: 120, height: 24 }),
            tableCellProps: { align: "left" },
            cellWrapperClassName: "pr-1 pl-4",
            className: "pr-1 pl-4",
          },
          {
            name: "Proposer",
            objectKey: "validator",
            getData: () => (0, a.jsx)(l.O, { width: 335, height: 24 }),
            tableHeaderProps: { align: "left" },
            headerWrapperClassName: "min-w-[140px]",
            tableCellProps: { align: "left" },
            cellWrapperClassName: "px-1",
            className: "px-1",
          },
          {
            name: "Hash",
            objectKey: "hash",
            getData: () => (0, a.jsx)(l.O, { width: 500, height: 24 }),
            tableHeaderProps: { align: "right" },
            headerWrapperClassName: "justify-center md:justify-center",
            tableCellProps: { align: "left" },
            cellWrapperClassName: "",
            className: "px-1",
          },
          {
            name: "Txs",
            objectKey: "txs",
            getData: () => (0, a.jsx)(l.O, { width: 36, height: 24 }),
            tableHeaderProps: { align: "left" },
            tableCellProps: { align: "left" },
            cellWrapperClassName: "px-1  !text-center",
            className: "px-1",
            headerWrapperClassName: "!justify-center",
          },
          {
            name: "Time",
            objectKey: "timestamp",
            getData: () => (0, a.jsx)(l.O, { width: 185, height: 24 }),
            tableHeaderProps: { align: "right" },
            tableCellProps: { align: "right" },
            headerWrapperClassName: "!justify-end min-w-[7rem]",
            cellWrapperClassName: "pl-1 pr-4",
            className: "pl-1 pr-4",
          },
        ];
    },
    96150: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          DataFeedsPage: function () {
            return ex;
          },
        });
      var a,
        s,
        i,
        r,
        l = n(57437),
        o = n(2265),
        d = n(67803),
        c = n.n(d),
        p = n(36760),
        u = n.n(p),
        m = n(93878),
        _ = n.n(m);
      let y = (0, o.memo)((e) => {
        let { className: t } = e;
        return (0, l.jsx)("div", {
          className: u()(_().root, t),
          children: (0, l.jsxs)("div", {
            className: _().heading,
            children: [
              (0, l.jsx)("h1", {
                className: _().heading__title,
                children: "Universal Data Feeds",
              }),
              (0, l.jsx)("span", {
                className: _().heading__subtitle,
                children: "Chain-agnostic, reliable, accurate and secured data",
              }),
            ],
          }),
        });
      });
      y.displayName = "UniversalDataFeeds";
      var h = n(68575),
        x = n(91960),
        g = n(8347),
        b = n(18154),
        k = n(92713);
      let v = (e) => e.UdfEntity.priceCharts,
        f = (e) => e.UdfEntity.isChartLoading;
      (0, k.P1)([v, (e, t) => t], (e, t) => e.filter((e) => e.data_key === t));
      var T = n(75466),
        N = n(38170),
        j = n.n(N),
        w = n(47432),
        C = n.n(w);
      let S = (0, o.memo)((e) => {
        let { item: t, activeTabValue: n, setActiveTabValue: a } = e;
        return (0, l.jsx)("button", {
          onClick: () => {
            a(t.value);
          },
          className: u()(C().tab, { [C().tab_active]: t.value === n }),
          children: t.label,
        });
      });
      S.displayName = "Tab";
      let I = (0, o.memo)((e) => {
        let {
          items: t,
          activeTabValue: n,
          setActiveTabValue: a,
          className: s,
        } = e;
        return (0, l.jsx)("div", {
          className: u()(j().root, s),
          children: t.map((e) =>
            (0, l.jsx)(
              S,
              { item: e, activeTabValue: n, setActiveTabValue: a },
              e.id
            )
          ),
        });
      });
      I.displayName = "Tabs";
      let M = { id: 0, value: "all", label: "all" },
        E = { value: "1", label: "usd", data: 1 };
      var D = n(53549),
        L = n.n(D),
        B = n(53208),
        A = n.n(B);
      let P = (0, o.memo)(() =>
        (0, l.jsxs)("div", {
          className: u()(A().card, A().card_plug),
          children: [
            (0, l.jsxs)("div", {
              className: A().header,
              children: [
                (0, l.jsx)(T.O, { width: 107, height: 24 }),
                (0, l.jsx)(T.O, { width: 69, height: 37 }),
              ],
            }),
            (0, l.jsxs)("div", {
              className: A().content,
              children: [
                (0, l.jsxs)("div", {
                  className: A().values,
                  children: [
                    (0, l.jsx)(T.O, { width: 155, height: 38 }),
                    (0, l.jsx)(T.O, { width: 225, height: 17 }),
                  ],
                }),
                (0, l.jsxs)("div", {
                  className: A().graph,
                  children: [
                    (0, l.jsx)(T.O, { width: 100, height: 30 }),
                    (0, l.jsx)(T.O, { width: 60, height: 17 }),
                  ],
                }),
              ],
            }),
          ],
        })
      );
      P.displayName = "MarketCardSkeleton";
      var R = n(33145);
      ((a = i || (i = {})).CRYPTO = "crypto"),
        (a.STOCKS = "stocks"),
        (a.FOREX = "forex"),
        (a.REAL_ESTATE = "realEstate"),
        (a.ENERGIES = "energies"),
        ((s = r || (r = {})).HOURLY = "hourly"),
        (s.DAIlY = "daily"),
        (s.WEEKLY = "weekly");
      let W = (0, o.memo)((e) => {
        let { type: t, ...n } = e;
        return "down" === t
          ? (0, l.jsxs)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              ...n,
              children: [
                (0, l.jsx)("mask", {
                  id: "a",
                  width: "24",
                  height: "24",
                  x: "0",
                  y: "0",
                  maskUnits: "userSpaceOnUse",
                  children: (0, l.jsx)("path", {
                    fill: "#D9D9D9",
                    d: "M0 0h24v24H0z",
                  }),
                }),
                (0, l.jsx)("g", {
                  mask: "url(#a)",
                  children: (0, l.jsx)("path", {
                    fill: "#EF4444",
                    d: "m12 21.298-6.56-6.564.971-.989 4.892 4.892v-6.945h1.399v6.954l4.886-4.884.976.972L12 21.298Zm-.697-11.505V6.592h1.399v3.201h-1.4Zm0-5.1v-2h1.399v2h-1.4Z",
                  }),
                }),
              ],
            })
          : (0, l.jsxs)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              ...n,
              children: [
                (0, l.jsx)("mask", {
                  id: "a",
                  width: "24",
                  height: "24",
                  x: "0",
                  y: "0",
                  maskUnits: "userSpaceOnUse",
                  children: (0, l.jsx)("path", {
                    fill: "#D9D9D9",
                    d: "M0 0h24v24H0z",
                  }),
                }),
                (0, l.jsx)("g", {
                  mask: "url(#a)",
                  children: (0, l.jsx)("path", {
                    fill: "#54B10B",
                    d: "M11.303 5.344 6.41 10.228l-.97-.976L12 2.692l6.564 6.56-.976.988-4.886-4.886v6.944h-1.4V5.344Zm0 12.055v-3.202h1.399v3.202h-1.4Zm0 3.899v-2h1.399v2h-1.4Z",
                  }),
                }),
              ],
            });
      });
      W.displayName = "UdfArrow";
      var U = n(47625),
        O = n(21156),
        F = n(62994),
        G = n(54061),
        V = n(81998),
        H = n.n(V),
        Z = n(94587);
      let z = (e) => {
        let { data: t, type: n } = e,
          [a, s] = (0, o.useState)(!0);
        (0, o.useEffect)(() => {
          s(!1);
        }, []);
        let i = (0, o.useMemo)(
          () => t.map((e) => ({ ...e, value: Number(e.value) })),
          [t]
        );
        return (0, l.jsxs)("div", {
          className: u()(H().wrap),
          children: [
            (0, l.jsx)("div", {
              className: u()(H().loadingBox),
              children: (0, l.jsx)("div", {
                className: u()(H().loading, {
                  "opacity-0": !a,
                  "opacity-100": a,
                }),
                children: (0, l.jsx)(R.default, {
                  src: Z.Z,
                  alt: "",
                  width: 30,
                  height: 18.6,
                }),
              }),
            }),
            (0, l.jsx)(U.h, {
              className: u()("transition-all ", {
                "opacity-0": a,
                "opacity-100": !a,
              }),
              width: "100%",
              height: 30,
              children: (0, l.jsxs)(O.w, {
                data: i,
                children: [
                  (0, l.jsx)(F.B, {
                    domain: [
                      Math.min(...i.map((e) => e.value)),
                      Math.max(...i.map((e) => e.value)),
                    ],
                    padding: { top: 2.5, bottom: 2.5 },
                    axisLine: !1,
                    tickLine: !1,
                    hide: !0,
                  }),
                  (0, l.jsx)(G.x, {
                    isAnimationActive: !1,
                    type: "monotoneX",
                    dataKey: "value",
                    dot: !1,
                    strokeWidth: "3px",
                    stroke: "up" === n ? "#54B10B" : "#EF4444",
                    name: "Line 1",
                  }),
                ],
              }),
            }),
          ],
        });
      };
      var q = n(99376),
        K = n(39502),
        Y = n(29194);
      let J = (e) => {
          let {
              price: t,
              priceRate: n,
              float_digits: a,
              decimals: s,
              category: i,
            } = e,
            r = (0, Y.q_)({ from: { price: 0 }, config: { duration: 250 } });
          return (
            (0, o.useEffect)(() => {
              "network gas" === i
                ? r.price.start(+(0, K.b)(BigInt(t), s))
                : r.price.start(+(0, K.b)(BigInt(t), s) * n);
            }, [t, r.price, n, s, i]),
            (0, l.jsx)(Y.q.span, {
              children: r.price.to((e) =>
                e.toLocaleString("en", {
                  minimumFractionDigits: 0,
                  maximumFractionDigits: a,
                })
              ),
            })
          );
        },
        X = (e, t) =>
          e.includes("USD") ? e.replace("USD", t.toLocaleUpperCase()) : e,
        $ = (0, o.memo)((e) => {
          let { type: t, ...n } = e;
          return "eur" === t
            ? (0, l.jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                ...n,
                children: [
                  (0, l.jsxs)("g", {
                    clipPath: "url(#a)",
                    children: [
                      (0, l.jsx)("circle", { cx: "12", cy: "12", r: "12" }),
                      (0, l.jsx)("path", {
                        fill: "#fff",
                        d: "M12.682 15.565c1.78 0 2.35-1.265 2.453-2.622H17C16.758 15.38 15.377 17 12.7 17c-2.626 0-4.215-1.62-4.63-4.088H7v-.957h.967c-.017-.154-.017-.308-.017-.463v-.385H7v-.941h1.054C8.45 7.65 10.04 6 12.7 6s4.04 1.62 4.3 3.795h-1.865c-.19-1.095-.691-2.36-2.453-2.36-1.675 0-2.487 1.157-2.763 2.73H13.2v.942H9.815v.385c0 .155 0 .309.017.463H13.2v.957H9.936c.276 1.527 1.105 2.653 2.746 2.653Z",
                      }),
                    ],
                  }),
                  (0, l.jsx)("defs", {
                    children: (0, l.jsx)("clipPath", {
                      id: "a",
                      children: (0, l.jsx)("path", {
                        fill: "#fff",
                        d: "M0 0h24v24H0z",
                      }),
                    }),
                  }),
                ],
              })
            : "aed" === t
            ? (0, l.jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                ...n,
                children: [
                  (0, l.jsxs)("g", {
                    clipPath: "url(#a)",
                    children: [
                      (0, l.jsx)("circle", { cx: "12", cy: "12", r: "12" }),
                      (0, l.jsx)("path", {
                        fill: "#fff",
                        d: "M6.546 14.127 6.266 5h1.135l.28 9.127H6.546ZM6.168 18 6 17.31a37.1 37.1 0 0 0 .588-.128l.505-.115-.07.268a1.637 1.637 0 0 1-.7-.434A1.055 1.055 0 0 1 6 16.146c0-.255.065-.473.196-.651.14-.17.318-.299.533-.384a1.996 1.996 0 0 1 1.036-.102c.122.017.234.043.337.076l-.113.64a13.891 13.891 0 0 1-.266-.051 1.418 1.418 0 0 0-.28-.026c-.215 0-.383.038-.504.115a.4.4 0 0 0-.182.345c0 .18.06.332.182.46.13.128.275.226.434.294.168.077.304.115.406.115l-.574.052c.252-.06.486-.124.7-.192.225-.06.425-.12.603-.18l.224.653a27.884 27.884 0 0 1-1.71.486c-.307.076-.592.144-.854.204Zm4.866-3.873H9.507v-1.394h1.527v1.394Zm1.404-.575.56-.882c.187.11.449.217.785.32a4.06 4.06 0 0 0 1.177.153c.467 0 .836-.043 1.107-.128.28-.085.48-.209.602-.37a.94.94 0 0 0 .196-.589c0-.17-.042-.38-.126-.626-.075-.256-.243-.597-.504-1.023-.262-.435-.663-1.001-1.205-1.7l.966-.575c.495.622.888 1.184 1.177 1.687.3.503.51.946.63 1.33.132.374.197.698.197.971 0 .34-.093.673-.28.997-.187.315-.5.575-.939.78-.439.204-1.046.306-1.821.306-.337 0-.663-.025-.981-.076a4.91 4.91 0 0 1-.855-.218 3.307 3.307 0 0 1-.686-.357Z",
                      }),
                    ],
                  }),
                  (0, l.jsx)("defs", {
                    children: (0, l.jsx)("clipPath", {
                      id: "a",
                      children: (0, l.jsx)("path", {
                        fill: "#fff",
                        d: "M0 0h24v24H0z",
                      }),
                    }),
                  }),
                ],
              })
            : "jpy" === t
            ? (0, l.jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                ...n,
                children: [
                  (0, l.jsxs)("g", {
                    clipPath: "url(#a)",
                    children: [
                      (0, l.jsx)("circle", { cx: "12", cy: "12", r: "12" }),
                      (0, l.jsx)("path", {
                        fill: "#fff",
                        d: "M14.326 6H16l-3.021 6.11h2.24v.978h-2.453v.93h2.454v.978h-2.454V17h-1.532v-2.004H8.78v-.979h2.454v-.93H8.78v-.978h2.241L8 6h1.674l2.312 5.083h.028L14.326 6Z",
                      }),
                    ],
                  }),
                  (0, l.jsx)("defs", {
                    children: (0, l.jsx)("clipPath", {
                      id: "a",
                      children: (0, l.jsx)("path", {
                        fill: "#fff",
                        d: "M0 0h24v24H0z",
                      }),
                    }),
                  }),
                ],
              })
            : "rub" === t
            ? (0, l.jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                ...n,
                children: [
                  (0, l.jsxs)("g", {
                    clipPath: "url(#a)",
                    children: [
                      (0, l.jsx)("circle", { cx: "12", cy: "12", r: "12" }),
                      (0, l.jsx)("path", {
                        fill: "#fff",
                        d: "M9.306 17V6h2.822c1.31 0 2.281.272 2.911.817.64.544.961 1.335.961 2.372 0 .698-.155 1.3-.465 1.803-.31.493-.77.873-1.381 1.14-.6.267-1.346.4-2.237.4h-1.26V17H9.306ZM8 14.905v-1.002h5.133v1.002H8Zm0-2.373v-1.17h3.437v1.17H8Zm3.722-1.17c.61 0 1.126-.067 1.546-.2.43-.135.76-.355.99-.663.231-.309.346-.73.346-1.264 0-.698-.21-1.217-.63-1.556-.42-.339-1.076-.508-1.966-.508h-1.351v4.19h1.065Z",
                      }),
                    ],
                  }),
                  (0, l.jsx)("defs", {
                    children: (0, l.jsx)("clipPath", {
                      id: "a",
                      children: (0, l.jsx)("path", {
                        fill: "#fff",
                        d: "M0 0h24v24H0z",
                      }),
                    }),
                  }),
                ],
              })
            : "btc" === t
            ? (0, l.jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                ...n,
                children: [
                  (0, l.jsxs)("g", {
                    clipPath: "url(#a)",
                    children: [
                      (0, l.jsx)("circle", { cx: "12", cy: "12", r: "12" }),
                      (0, l.jsx)("path", {
                        fill: "#fff",
                        d: "M12.118 7.136V5h1.167v2.136h-1.167Zm-2.441 0V5h1.166v2.136H9.677ZM12.118 18v-2.136h1.167V18h-1.167Zm-2.441 0v-2.136h1.166V18H9.677ZM8 16.605V6.438h2.989c1.02 0 1.87.08 2.55.242.693.162 1.21.427 1.55.798.352.37.528.863.528 1.48 0 .4-.085.755-.255 1.068-.158.304-.4.56-.729.77-.316.199-.71.336-1.184.412v.071c.486.067.917.19 1.294.37.388.18.692.437.91.77.232.332.347.763.347 1.295 0 .617-.17 1.144-.51 1.58-.328.428-.802.755-1.422.983-.62.218-1.36.328-2.223.328H8Zm3.317-6.105c.996 0 1.767.04 2.132-.234.376-.285.474-.615.474-1.165 0-.56-.231-.959-.693-1.196-.45-.247-1.172-.37-2.168-.37H9.64V10.5h1.677ZM9.677 12l-.037 3.523h1.895c1.009 0 1.713-.176 2.114-.527.401-.352.602-.812.602-1.382 0-.36 0-.614-.274-.94-.185-.22-.425-.304-.838-.446-.413-.152-.978-.228-1.695-.228H9.677Z",
                      }),
                    ],
                  }),
                  (0, l.jsx)("defs", {
                    children: (0, l.jsx)("clipPath", {
                      id: "a",
                      children: (0, l.jsx)("path", {
                        fill: "#fff",
                        d: "M0 0h24v24H0z",
                      }),
                    }),
                  }),
                ],
              })
            : (0, l.jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                ...n,
                children: [
                  (0, l.jsxs)("g", {
                    clipPath: "url(#a)",
                    children: [
                      (0, l.jsx)("circle", { cx: "12", cy: "12", r: "12" }),
                      (0, l.jsx)("path", {
                        fill: "#fff",
                        d: "M16 13.791c0 1.567-1.132 2.82-3.412 2.91V18h-.882v-1.328C9.662 16.462 8.103 15.254 8 13.09h1.5c.118 1.298.853 2.09 2.206 2.268v-3.567c-.015 0-.03-.015-.044-.015-1.53-.418-3.25-1.06-3.25-2.85 0-1.687 1.264-2.792 3.294-2.866V5h.882v1.104c1.78.224 3.03 1.359 3.147 3.284h-1.5c-.132-1.12-.69-1.761-1.647-1.955v3.179c2.015.597 3.412 1.12 3.412 3.179ZM9.926 8.776c0 .88.721 1.224 1.78 1.567v-2.97c-1.088.06-1.78.567-1.78 1.403Zm2.662 3.269v3.358c1.397-.075 1.897-.702 1.897-1.567 0-.985-.617-1.388-1.897-1.791Z",
                      }),
                    ],
                  }),
                  (0, l.jsx)("defs", {
                    children: (0, l.jsx)("clipPath", {
                      id: "a",
                      children: (0, l.jsx)("path", {
                        fill: "#fff",
                        d: "M0 0h24v24H0z",
                      }),
                    }),
                  }),
                ],
              });
        });
      $.displayName = "UdfCurrency";
      let Q = (0, o.memo)((e) => {
        let {
            className: t,
            data_key: n,
            assetIcon: a,
            category_id: s,
            category_name: i,
            price: d,
            priceChangePercent: c,
            priceChangeData: p,
            currentPriceIn: m,
            float_digits: _,
            decimals: y,
          } = e,
          [h, x] = (0, o.useState)(r.WEEKLY),
          { push: g } = (0, q.useRouter)(),
          b = (0, o.useMemo)(() => {
            switch (h) {
              case r.HOURLY:
                return c.hourlyData;
              case r.DAIlY:
                return c.dailyData;
              case r.WEEKLY:
                return c.weeklyData;
            }
          }, [h, c.dailyData, c.hourlyData, c.weeklyData]),
          k = (0, o.useMemo)(() => {
            switch (h) {
              case r.HOURLY:
                return "Last hour";
              case r.DAIlY:
                return "Last 24h";
              case r.WEEKLY:
                return "Last 7 days";
            }
          }, [h]),
          v = (0, o.useMemo)(() => {
            switch (h) {
              case r.HOURLY:
                return p.hourlyData;
              case r.DAIlY:
                return p.dailyData;
              case r.WEEKLY:
                return p.weeklyData;
            }
          }, [h, p.dailyData, p.hourlyData, p.weeklyData]),
          f = (0, o.useCallback)((e, t) => {
            e.stopPropagation(), x(t);
          }, []);
        return (0, l.jsxs)("div", {
          className: u()(A().card, t),
          children: [
            (0, l.jsxs)("div", {
              className: A().header,
              children: [
                (0, l.jsxs)("div", {
                  className: A().asset,
                  children: [
                    a &&
                      (0, l.jsx)(R.default, {
                        className: A().asset__icon,
                        src: a,
                        width: 24,
                        height: 24,
                        alt: "Asset Icon",
                      }),
                    (0, l.jsx)("span", {
                      className: A().asset__name,
                      children: `${X(n, m.label)}`,
                    }),
                  ],
                }),
                (0, l.jsxs)("div", {
                  className: A().class,
                  children: [
                    (0, l.jsx)("span", {
                      className: A().class__type,
                      children: i,
                    }),
                    (0, l.jsx)("span", {
                      className: A().class__name,
                      children: "asset class",
                    }),
                  ],
                }),
              ],
            }),
            (0, l.jsxs)("div", {
              className: A().content,
              children: [
                (0, l.jsxs)("div", {
                  className: A().values,
                  children: [
                    (0, l.jsxs)("div", {
                      className: A().price,
                      children: [
                        (0, l.jsxs)("span", {
                          className: A().price__value,
                          children: [
                            "network gas" !== i &&
                              (0, l.jsx)($, {
                                className: A().price__currency,
                                type: m.label,
                              }),
                            "network gas" === i &&
                              (0, l.jsx)("span", {
                                className: A().price__gwei,
                                children: "gwei ",
                              }),
                            (0, l.jsx)(J, {
                              price: d,
                              priceRate: m.data,
                              float_digits: _,
                              decimals: y,
                              category: i,
                            }),
                          ],
                        }),
                        (0, l.jsx)(W, {
                          type: b.startsWith("-") ? "down" : "up",
                          className: A().price__icon,
                        }),
                      ],
                    }),
                    (0, l.jsxs)("div", {
                      className: A().period,
                      children: [
                        (0, l.jsxs)("button", {
                          className: A().period__item,
                          onClick: (e) => f(e, r.HOURLY),
                          children: [
                            (0, l.jsx)("span", {
                              className: A().period__name,
                              children: "1H",
                            }),
                            (0, l.jsx)("span", {
                              className: u()(
                                A().period__value,
                                c.hourlyData.startsWith("-")
                                  ? A().period__value_down
                                  : A().period__value_up
                              ),
                              children: `${c.hourlyData}%`,
                            }),
                          ],
                        }),
                        (0, l.jsxs)("button", {
                          className: A().period__item,
                          onClick: (e) => f(e, r.DAIlY),
                          children: [
                            (0, l.jsx)("span", {
                              className: A().period__name,
                              children: "24H",
                            }),
                            (0, l.jsx)("span", {
                              className: u()(
                                A().period__value,
                                c.dailyData.startsWith("-")
                                  ? A().period__value_down
                                  : A().period__value_up
                              ),
                              children: `${c.dailyData}%`,
                            }),
                          ],
                        }),
                        (0, l.jsxs)("button", {
                          className: A().period__item,
                          onClick: (e) => f(e, r.WEEKLY),
                          children: [
                            (0, l.jsx)("span", {
                              className: A().period__name,
                              children: "7D",
                            }),
                            (0, l.jsx)("span", {
                              className: u()(
                                A().period__value,
                                c.weeklyData.startsWith("-")
                                  ? A().period__value_down
                                  : A().period__value_up
                              ),
                              children: `${c.weeklyData}%`,
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, l.jsxs)("div", {
                  className: A().graph,
                  children: [
                    (0, l.jsx)("div", {
                      className: A().graph__box,
                      children: (0, l.jsx)(z, {
                        data: v,
                        period: h,
                        type: b.startsWith("-") ? "down" : "up",
                      }),
                    }),
                    (0, l.jsx)("span", {
                      className: A().graph__text,
                      children: k,
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      });
      Q.displayName = "MarketCard";
      var ee = n(50339),
        et = n(12225),
        en = n.n(et),
        ea = n(24919);
      let es = (e) => [
          {
            name: "Asset",
            cellWrapperClassName: "!text-left !p-2 !text-[12px] max-w-[90px]",
            headerWrapperClassName: "w-[90px]",
            getData: (t) => {
              let { assetIcon: n, data_key: a } = t;
              return (0, l.jsxs)("div", {
                className: en().asset,
                children: [
                  n &&
                    (0, l.jsx)(R.default, {
                      className: en().icon,
                      src: n,
                      width: 16,
                      height: 16,
                      alt: "Asset Icon",
                    }),
                  X(a, e.label),
                ],
              });
            },
          },
          {
            name: "Asset Class",
            objectKey: "category_name",
            getData: (e) => {
              let { category_name: t } = e;
              return (0, l.jsx)("span", {
                className: en().assetClass,
                children: t,
              });
            },
            cellWrapperClassName: "!text-left !p-2 !text-[12px] font-bold",
            headerWrapperClassName: "w-[75px]",
          },
          {
            name: "Price",
            objectKey: "price",
            getData: (t) => {
              let {
                priceChangePercent: n,
                price: a,
                float_digits: s,
                decimals: i,
                category_name: r,
              } = t;
              return (0, l.jsxs)("div", {
                className: en().price,
                children: [
                  "network gas" !== r &&
                    (0, l.jsx)($, {
                      className: en().price__currency,
                      type: e.label,
                    }),
                  "network gas" === r &&
                    (0, l.jsx)("span", {
                      className: en().price__gwei,
                      children: "gwei ",
                    }),
                  (0, l.jsx)(J, {
                    priceRate: e.data,
                    price: a,
                    float_digits: s,
                    decimals: i,
                    category: r,
                  }),
                  (0, l.jsx)(W, {
                    type: n.weeklyData.startsWith("-") ? "down" : "up",
                    className: en().price__icon,
                  }),
                ],
              });
            },
            cellWrapperClassName: "!p-2 min-w-[110px] !text-[12px]",
            headerWrapperClassName:
              "w-full flex br-1 text-right justify-end px-3",
          },
          {
            name: "Last 7 Days",
            getData: (e) => {
              let { priceChangeData: t, priceChangePercent: n } = e;
              return (0, l.jsx)("div", {
                className: en().graph,
                children: (0, l.jsx)(z, {
                  data: t.weeklyData,
                  period: r.WEEKLY,
                  type: n.weeklyData.startsWith("-") ? "down" : "up",
                }),
              });
            },
            cellWrapperClassName: "!p-2 min-w-[60px] px-0",
            headerWrapperClassName: "w-[62px]",
          },
        ],
        ei = (e) => {
          let { loading: t, items: n, currentPriceIn: a } = e;
          return (0, ee.a)(1024)
            ? (0, l.jsx)("div", {
                className: en().table,
                children: (0, l.jsx)(ea.iA, {
                  isLoading: t,
                  borderTop: !1,
                  columns: es(a),
                  data: n,
                  className: "!mb-0",
                }),
              })
            : (0, l.jsx)("div", {
                className: en().root,
                children: t
                  ? Array(6)
                      .fill(0)
                      .map((e, t) => (0, l.jsx)(P, {}, t))
                  : n.map((e) =>
                      (0, l.jsx)(Q, { currentPriceIn: a, ...e }, e.asset_id)
                    ),
              });
        };
      var er = n(73473),
        el = n(45696),
        eo = n.n(el);
      let ed = (0, o.memo)((e) => {
        let {
            value: t,
            items: n,
            onChange: a,
            onValueChange: s,
            children: i,
            renderValue: r,
            ...d
          } = e,
          c = (0, o.useCallback)(
            (e) => {
              s(e.target.value);
            },
            [s]
          );
        return (0, l.jsx)("div", {
          className: eo().root,
          children: (0, l.jsx)(er.g, {
            selectedKeys: [String(t)],
            className: eo().root,
            radius: "sm",
            onChange: c,
            color: "secondary",
            classNames: {
              popoverContent: eo().popover,
              trigger: eo().trigger,
              value: eo().value,
              selectorIcon: eo().icon,
            },
            items: n,
            renderValue: r,
            value: t,
            ...d,
            children: i,
          }),
        });
      });
      ed.displayName = "Select";
      var ec = n(60127),
        ep = n.n(ec);
      let eu = (0, o.memo)((e) => {
        let { item: t, className: n } = e;
        return (0, l.jsx)("div", {
          className: u()(ep().item, n),
          children: t.label,
        });
      });
      eu.displayName = "SelectOption";
      var em = n(71984);
      let e_ = (e) => (t) =>
        (0, l.jsx)(
          em.R,
          {
            textValue: t.label,
            children: (0, l.jsx)(eu, { item: t, className: e }),
          },
          t.value
        );
      var ey = (0, o.memo)((e) => {
        let {
          marketFilterTabs: t,
          priceInOptions: n,
          currentPriceIn: a,
          onChangeCurrentPriceIn: s,
        } = e;
        return (
          !!t.length &&
          !!n.length &&
          (0, l.jsxs)("div", {
            className: L().priceIn,
            children: [
              (0, l.jsx)("span", {
                className: L().priceIn__text,
                children: "Price in",
              }),
              (0, l.jsx)(ed, {
                items: n,
                variant: "bordered",
                onValueChange: (e) => !!Number(e) && s(e),
                value: [a?.value],
                renderValue: () =>
                  (0, l.jsx)(eu, { item: a, className: L().priceIn__value }),
                children: e_(L().priceIn__value),
              }),
            ],
          })
        );
      });
      let eh = (0, o.memo)(() => {
        let e = (0, ee.a)(1024),
          t = (0, x.TL)(),
          n = (0, h.v9)((e) => v(e)),
          a = (0, h.v9)((e) => f(e)),
          s = (0, g.FI)({}),
          i = (0, g.sy)({}),
          [r, d] = (0, o.useState)([]),
          [c, p] = (0, o.useState)("crypto"),
          [u, m] = (0, o.useState)([]),
          [_, y] = (0, o.useState)(E),
          [k, N] = (0, o.useState)(!0),
          j = (0, o.useCallback)(
            (e) => {
              y(u.find((t) => t.value === String(e)));
            },
            [u]
          );
        return (
          (0, o.useEffect)(() => {
            if (c)
              return (
                t((0, b.Iv)(c === M.value ? [] : [c])),
                () => {
                  t((0, b.vM)());
                }
              );
          }, [c, t]),
          (0, o.useEffect)(() => {
            if (!s?.data?.category.length) return;
            let e = s?.data?.category.map((e) => ({
              id: e.id,
              value: e.name,
              label: e.name,
            }));
            e?.unshift(M), d(e);
          }, [s?.data?.category]),
          (0, o.useEffect)(() => {
            if (!i?.data?.usd_rate.length) return;
            let e = i?.data?.usd_rate.map((e, t) => ({
              value: String(t + 2),
              label: e.currency,
              data: e.rate,
            }));
            e?.unshift(E), m(e);
          }, [i?.data?.usd_rate]),
          (0, o.useEffect)(() => {
            n.length && N(!1);
          }, [n]),
          (0, l.jsxs)("div", {
            className: L().root,
            children: [
              (0, l.jsxs)("div", {
                className: L().header,
                children: [
                  (0, l.jsx)("span", {
                    className: L().title,
                    children: "Markets",
                  }),
                  e &&
                    (0, l.jsx)(ey, {
                      marketFilterTabs: r,
                      priceInOptions: u,
                      currentPriceIn: _,
                      onChangeCurrentPriceIn: j,
                    }),
                ],
              }),
              (0, l.jsxs)("div", {
                className: L().toolbar,
                children: [
                  (s?.isLoading || i?.isLoading) &&
                    (0, l.jsxs)(l.Fragment, {
                      children: [
                        (0, l.jsx)(T.O, { width: 160, height: 40 }),
                        (0, l.jsx)(T.O, { width: 156, height: 40 }),
                      ],
                    }),
                  !!r.length &&
                    !!u.length &&
                    (0, l.jsxs)(l.Fragment, {
                      children: [
                        (0, l.jsx)(I, {
                          items: r,
                          activeTabValue: c,
                          setActiveTabValue: (e) => {
                            p(e), N(!0);
                          },
                        }),
                        !e &&
                          (0, l.jsx)(ey, {
                            marketFilterTabs: r,
                            priceInOptions: u,
                            currentPriceIn: _,
                            onChangeCurrentPriceIn: j,
                          }),
                      ],
                    }),
                ],
              }),
              (0, l.jsx)(ei, {
                loading: a || k || s?.isLoading || i?.isLoading,
                items: n,
                currentPriceIn: _,
              }),
            ],
          })
        );
      });
      eh.displayName = "Markets";
      let ex = (0, o.memo)(() =>
        (0, l.jsxs)("div", {
          className: c().root,
          children: [
            (0, l.jsx)(y, { className: c().dataFeeds }),
            (0, l.jsx)(eh, {}),
          ],
        })
      );
      ex.displayName = "DataFeedsPage";
    },
    99404: function (e, t, n) {
      "use strict";
      n.d(t, {
        V: function () {
          return h;
        },
      });
      var a = n(2265),
        s = n(91960),
        i = n(66790),
        r = n(25961),
        l = n(43871),
        o = n(27878),
        d = n(77398),
        c = n.n(d);
      let p = (e, t) => e.filter((e) => !t.some((t) => t.hash === e.hash)),
        u = (e) => {
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
                  { timestamp: { _gt: c()(e.Created[0]).format("L") } },
                  {
                    timestamp: {
                      _lte: c()(e.Created[1]).add(1, "days").format("L"),
                    },
                  },
                ],
              }),
            t
          );
        };
      var m = n(85895),
        _ = n(25563);
      let y = {
          loading: !0,
          hasNextPage: !1,
          isNextPageLoading: !0,
          items: [],
        },
        h = (e) => {
          let [t, n] = (0, a.useState)(y),
            d = (0, a.useRef)(null),
            c = (0, a.useMemo)(() => u(e || {}), [e]),
            h = (0, s.TL)(),
            x = (0, a.useCallback)((e) => {
              n((t) => {
                let n = e(t);
                return (0, i.v)(t, n) ? t : n;
              });
            }, []),
            g = (0, a.useCallback)(async () => {
              d.current?.unsubscribe(), (d.current = null), n(y);
            }, []),
            b = (0, a.useCallback)(
              async (e, t, n) => {
                let { data: a } = await h(
                    m.c.endpoints.getBlocks.initiate({
                      limit: e,
                      offset: t,
                      where: n,
                    })
                  ),
                  s = a?.blocks?.length || 0;
                return { data: a, itemsLength: s };
              },
              [h]
            );
          (0, r.K)(async () => {
            await g();
            let { data: e, itemsLength: t } = await b(51, 1, c);
            x((n) => {
              let a = (0, o.jD)({
                data: { blocks: p(e?.blocks || [], n.items) },
                loading: !1,
                networkStatus: 7,
              });
              return {
                ...n,
                loading: !1,
                items: [...a, ...n.items],
                hasNextPage: n.hasNextPage || 51 === t,
                isNextPageLoading: !1,
              };
            }),
              (d.current = l.ti
                .subscribe({
                  query: _.b9,
                  variables: { limit: 1, offset: 0, where: c },
                })
                .subscribe({
                  next(e) {
                    let { data: t } = e,
                      n = t?.blocks?.length || 0;
                    x((e) => {
                      let a = (0, o.jD)({
                        data: { blocks: p(t?.blocks || [], e.items) },
                        loading: !1,
                        networkStatus: 7,
                      });
                      return {
                        ...e,
                        loading: !1,
                        items: [...a, ...e.items],
                        hasNextPage: e.hasNextPage || 51 === n,
                        isNextPageLoading: !1,
                      };
                    });
                  },
                  error() {
                    x((e) => ({ ...e, loading: !1 }));
                  },
                }));
          }, [c]);
          let k = async () => {
            if (t.isNextPageLoading || t.loading) return;
            x((e) => ({ ...e, isNextPageLoading: !0 }));
            let { data: e, itemsLength: n } = await b(51, t.items.length, c);
            x((t) => {
              let a = (0, o.jD)({
                data: { blocks: p(e?.blocks || [], t.items) },
                loading: !1,
                networkStatus: 7,
              });
              return {
                ...t,
                items: [...t.items, ...a],
                isNextPageLoading: !1,
                hasNextPage: 51 === n,
              };
            });
          };
          return { state: t, loadNextPage: k };
        };
    },
    74732: function (e, t, n) {
      "use strict";
      n.d(t, {
        y: function () {
          return m;
        },
      });
      var a = n(2265),
        s = n(91960),
        i = n(66790),
        r = n(66107),
        l = n(25961),
        o = n(64587),
        d = n(61764),
        c = n(43871),
        p = n(69364);
      let u = {
          loading: !0,
          hasNextPage: !1,
          isNextPageLoading: !0,
          items: [],
        },
        m = (e) => {
          let [t, n] = (0, a.useState)(u),
            m = (0, a.useRef)(null),
            _ = (0, a.useMemo)(() => (0, d.GF)(e || {}), [e]),
            y = (0, s.TL)(),
            h = (0, a.useCallback)((e) => {
              n((t) => {
                let n = e(t);
                return (0, i.v)(t, n) ? t : n;
              });
            }, []),
            x = (0, a.useCallback)(async () => {
              m.current?.unsubscribe(), (m.current = null), n(u);
            }, []),
            g = (0, a.useCallback)(
              async (e, t, n) => {
                let { data: a } = await y(
                    r.ci.endpoints.getMessages.initiate({
                      limit: e,
                      offset: t,
                      where: n,
                    })
                  ),
                  s = a?.operations?.length || 0;
                return { data: a, itemsLength: s };
              },
              [y]
            );
          (0, l.K)(async () => {
            await x();
            let { data: e, itemsLength: t } = await g(51, 1, _);
            h((n) => {
              let a = (0, o.t)({
                data: { operations: (0, d.aB)(e?.operations || [], n.items) },
              });
              return {
                ...n,
                items: [...n.items, ...a],
                isNextPageLoading: !1,
                loading: !1,
                hasNextPage: 51 === t,
              };
            }),
              (m.current = c.KD.subscribe({
                query: p.fy,
                variables: { limit: 1, offset: 0, where: _ },
              }).subscribe({
                next(e) {
                  let { data: t } = e,
                    n = t?.operations?.length || 0;
                  h((e) => {
                    let a = (0, o.t)({
                      data: {
                        operations: (0, d.aB)(t?.operations || [], e.items),
                      },
                      loading: !1,
                    });
                    return {
                      ...e,
                      loading: !1,
                      items: [...a, ...e.items],
                      hasNextPage: e.hasNextPage || 51 === n,
                      isNextPageLoading: !1,
                    };
                  });
                },
                error() {
                  h((e) => ({ ...e, loading: !1 }));
                },
              }));
          }, [_]);
          let b = async () => {
            if (t.isNextPageLoading || t.loading) return;
            h((e) => ({ ...e, isNextPageLoading: !0 }));
            let { data: e, itemsLength: n } = await g(51, t.items.length, _);
            h((t) => {
              let a = (0, o.t)({
                data: { operations: (0, d.aB)(e?.operations || [], t.items) },
                loading: !1,
              });
              return {
                ...t,
                items: [...t.items, ...a],
                isNextPageLoading: !1,
                hasNextPage: 51 === n,
              };
            });
          };
          return { state: t, loadNextPage: b };
        };
    },
    82723: function (e, t, n) {
      "use strict";
      n.d(t, {
        K: function () {
          return i;
        },
        c: function () {
          return s;
        },
      });
      var a = n(55842);
      let s = (e) => ({
          activeValidators: e.ValidatorEntity.delegationValidators.filter(
            (e) => e.status === a.Jn.Active
          ),
          inactiveValidators: e.ValidatorEntity.delegationValidators.filter(
            (e) => e.status !== a.Jn.Active
          ),
        }),
        i = (e) =>
          e.ValidatorEntity.delegationValidators?.[0]?.totalRewards || 0;
    },
    33730: function (e, t, n) {
      "use strict";
      var a = n(2265),
        s = n(64707),
        i = n(1970),
        r = n(24377),
        l = n(91960),
        o = n(29557),
        d = n(99376),
        c = n(15150);
      t.Z = () => {
        let {
            address: e,
            chainId: t,
            isConnected: n,
            status: p,
          } = (0, s.useAccount)(),
          [u, m] = (0, a.useState)(void 0),
          _ = (0, l.TL)(),
          {
            actions: {
              App: { setWalletConnectChainId: y },
            },
          } = (0, l.oR)((e) => ({ App: e.AppEntity })),
          { disconnect: h } = (0, i.useDisconnect)(),
          { connect: x, connectors: g } = (0, r.useConnect)(),
          { push: b } = (0, d.useRouter)(),
          k = (0, a.useCallback)(
            async (e, t) => {
              try {
                if ((console.log(g), "injected" === e && !window.ethereum))
                  return b(
                    `https://metamask.app.link/dapp/${window.location.hostname}`
                  );
                let n = g.find((t) => t.id === e);
                if (!n) {
                  console.error("connector not found");
                  return;
                }
                x({ chainId: c.vL ? void 0 : t || o.ZP.chainId, connector: n });
              } catch (e) {
                console.log("walletConnect error", e);
              } finally {
                _(y());
              }
            },
            [g, x, b, _, y]
          );
        return (
          (0, a.useEffect)(() => {
            if (!n) return m(void 0);
            m(e);
          }, [e, n]),
          { address: u, disconnect: h, walletConnect: k, chainId: t, status: p }
        );
      };
    },
    25961: function (e, t, n) {
      "use strict";
      n.d(t, {
        K: function () {
          return s;
        },
      });
      var a = n(2265);
      function s(e, t) {
        let n = (0, a.useRef)(void 0);
        (0, a.useEffect)(() => {
          (n.current && JSON.stringify(n.current) === JSON.stringify(t)) ||
            ((n.current = t), e());
        }, [e, t]);
      }
    },
    22656: function (e, t, n) {
      "use strict";
      n.d(t, {
        a: function () {
          return i;
        },
      });
      var a = n(2265),
        s = n(70514);
      let i = () => {
        let e = (0, a.useRef)(null),
          t = (0, a.useRef)(0),
          n = (0, a.useRef)(!1),
          { onMouseDown: i } = (0, s.Z)(e),
          r = (e) => {
            Math.abs(e.clientX - t.current) > 5 &&
              !n.current &&
              (n.current = !0);
          };
        return (
          (0, a.useEffect)(() => {
            let t = e.current;
            return (
              t && t.addEventListener("mousemove", r),
              () => {
                t && t.removeEventListener("mousemove", r);
              }
            );
          }, [r]),
          {
            ref: e,
            onMouseDown: (e) => {
              (t.current = e.clientX), n.current && (n.current = !1), i(e);
            },
            onMouseUp: () => {
              setTimeout(() => {
                n.current && (n.current = !1);
              }, 0);
            },
            dragStarted: n,
          }
        );
      };
    },
    70388: function (e, t, n) {
      "use strict";
      n.d(t, {
        X: function () {
          return s;
        },
      });
      var a = n(57437);
      let s = (e) => {
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
    72570: function (e, t, n) {
      "use strict";
      n.d(t, {
        I: function () {
          return l;
        },
      });
      var a = n(57437),
        s = n(2265),
        i = n(29700),
        r = n.n(i);
      let l = (0, s.memo)((e) => {
        let { address: t, diameter: n = 40, className: i = "" } = e,
          l = (0, s.useRef)(null);
        return (
          (0, s.useEffect)(() => {
            if (l.current && t) {
              let e = parseInt(t.slice(2, 10), 16),
                a = r()(n, e);
              (l.current.innerHTML = ""), l.current.appendChild(a);
            }
          }, [t, n]),
          (0, a.jsx)("div", {
            ref: l,
            style: { width: n, height: n },
            className: i,
          })
        );
      });
      l.displayName = "JazzIcon";
    },
    66790: function (e, t, n) {
      "use strict";
      n.d(t, {
        v: function () {
          return a;
        },
      });
      let a = (e, t) => JSON.stringify(e) === JSON.stringify(t);
    },
    63121: function (e) {
      e.exports = {
        container: "BlockChain_container__xab47",
        header: "BlockChain_header__AdnTP",
        statWrap: "BlockChain_statWrap__6uPk7",
        item: "BlockChain_item__GZAHp",
        subItem: "BlockChain_subItem__KhHb9",
        name: "BlockChain_name__sMltG",
        value: "BlockChain_value__3LeTl",
        right: "BlockChain_right__YAZxL",
        lastItem: "BlockChain_lastItem__xKwaG",
        lastItemWrap: "BlockChain_lastItemWrap__V6QKz",
        coinWrap: "BlockChain_coinWrap__5UV5l",
      };
    },
    41866: function (e) {
      e.exports = {
        container: "BlockInformation_container__EZiaU",
        wrap: "BlockInformation_wrap__nkUWf",
        more: "BlockInformation_more__JqLJR",
        bgwhite: "BlockInformation_bgwhite__kstWW",
        title: "BlockInformation_title__tnDlX",
        table: "BlockInformation_table__aUz_R",
      };
    },
    14822: function (e) {
      e.exports = {
        nameColumnData: "ValidatorColumnData_nameColumnData__YfNW0",
        nameAndAvatarContainer:
          "ValidatorColumnData_nameAndAvatarContainer__k1RqA",
        avatarUrl: "ValidatorColumnData_avatarUrl__l_dWl",
      };
    },
    20075: function (e) {
      e.exports = {
        wrap: "LineGraph_wrap__ObTrR",
        title: "LineGraph_title__QpAI0",
      };
    },
    57090: function (e) {
      e.exports = {
        container: "LiveMessaging_container__dFRvo",
        wrap: "LiveMessaging_wrap__ukptt",
        more: "LiveMessaging_more__96j0F",
        bgwhite: "LiveMessaging_bgwhite__osw2E",
        title: "LiveMessaging_title__4JoCE",
        table: "LiveMessaging_table__tDf8c",
      };
    },
    6516: function (e) {
      e.exports = { overviewPage: "page_overviewPage__qtEP0" };
    },
    17096: function (e) {
      e.exports = {
        container: "PhotonMessaging_container__NNnuz",
        header: "PhotonMessaging_header__4qJfm",
        statWrap: "PhotonMessaging_statWrap__IL6QA",
        item: "PhotonMessaging_item__eJNE_",
        subItem: "PhotonMessaging_subItem__exfVH",
        name: "PhotonMessaging_name__RFCfO",
        value: "PhotonMessaging_value__PPct0",
        lastItem: "PhotonMessaging_lastItem__8iPU8",
        lastItemWrap: "PhotonMessaging_lastItemWrap__tcmR5",
        coinWrap: "PhotonMessaging_coinWrap__p1QeF",
        toolTip: "PhotonMessaging_toolTip__Ro_iY",
        tooltipText: "PhotonMessaging_tooltipText__488BX",
        chainImages: "PhotonMessaging_chainImages__KmnSo",
      };
    },
    87062: function (e) {
      e.exports = {
        wrap: "Tokenomics_wrap__9SXFm",
        upperWrap: "Tokenomics_upperWrap__Yqc4p",
        header: "Tokenomics_header__BKOgN",
        block: "Tokenomics_block__qn4Mf",
        name: "Tokenomics_name__aITJE",
        value: "Tokenomics_value__Og8Jy",
        itemWrap: "Tokenomics_itemWrap__xHhEu",
        percent: "Tokenomics_percent__z1PkL",
        priceWrap: "Tokenomics_priceWrap__hR32S",
        arrow: "Tokenomics_arrow__ZCDVt",
        secondBlock: "Tokenomics_secondBlock__ymWjK",
        tokenPercent: "Tokenomics_tokenPercent__EDhd3",
        filters: "Tokenomics_filters__TCbt4",
        filterWrap: "Tokenomics_filterWrap___VgDU",
        filterClicked: "Tokenomics_filterClicked__RWBNP",
        filter: "Tokenomics_filter___Ef6m",
        months: "Tokenomics_months__LcQ2r",
        filterArrow: "Tokenomics_filterArrow__lriCy",
        leftArrow: "Tokenomics_leftArrow__UvzQU",
      };
    },
    66570: function (e) {
      e.exports = {
        launchNewTokenPage: "LaunchNewTokenPage_launchNewTokenPage__OWfY1",
        contentContainer: "LaunchNewTokenPage_contentContainer__fjym_",
      };
    },
    42511: function (e) {
      e.exports = {
        interactionBlock: "InteractionBlock_interactionBlock__28C3a",
        interactionBlock_newSetupTokenBg:
          "InteractionBlock_interactionBlock_newSetupTokenBg__G_r3M",
        interactionBlock_existingSetupTokenGridBg:
          "InteractionBlock_interactionBlock_existingSetupTokenGridBg__kpo0b",
        interactionBlock_existingSetupTokenBg:
          "InteractionBlock_interactionBlock_existingSetupTokenBg__hITOo",
        header: "InteractionBlock_header__ZDLWp",
        docsLink: "InteractionBlock_docsLink__r6Dyw",
      };
    },
    70885: function (e) {
      e.exports = {
        modal: "ModalNetworkSelector_modal__bcrKr",
        modalTitle: "ModalNetworkSelector_modalTitle__hfJCG",
        modalClose: "ModalNetworkSelector_modalClose__ZeOZm",
        modalNetworkSelector:
          "ModalNetworkSelector_modalNetworkSelector__ENd3C",
        subTitle: "ModalNetworkSelector_subTitle__OfzHA",
        grid: "ModalNetworkSelector_grid__m33Q_",
        item: "ModalNetworkSelector_item__dUHK6",
        name: "ModalNetworkSelector_name__wqQbb",
        comingSoon: "ModalNetworkSelector_comingSoon__FbwSY",
        selected: "ModalNetworkSelector_selected__lPdzu",
      };
    },
    59302: function (e) {
      e.exports = {
        root: "ExistingSetupToken_root__oRiKZ",
        list: "ExistingSetupToken_list__K_1JZ",
        title: "ExistingSetupToken_title__pR2Rx",
        button: "ExistingSetupToken_button__zzYUH",
        button_active: "ExistingSetupToken_button_active__6SdS8",
        label: "ExistingSetupToken_label__ef9T1",
        group: "ExistingSetupToken_group__nvxDS",
        content: "ExistingSetupToken_content__U_H2H",
        info: "ExistingSetupToken_info__Op_ev",
        info__label: "ExistingSetupToken_info__label__UBF_7",
        info__button: "ExistingSetupToken_info__button__EgrzS",
      };
    },
    87138: function (e) {
      e.exports = {
        importToken: "ImportToken_importToken__S_w80",
        text: "ImportToken_text__KqC8j",
        separator: "ImportToken_separator__iWMLw",
      };
    },
    90028: function (e) {
      e.exports = { alert: "Alert_alert__RxQhk", text: "Alert_text__iHjXL" };
    },
    34246: function (e) {
      e.exports = {
        block: "ImportedTokenCard_block__PORGY",
        network: "ImportedTokenCard_network__k8bb9",
        network_selected: "ImportedTokenCard_network_selected__9P2Wc",
        inputWrapper: "ImportedTokenCard_inputWrapper__ubTRW",
        inputWrapper_selected: "ImportedTokenCard_inputWrapper_selected__965wC",
        inputWrapper_error: "ImportedTokenCard_inputWrapper_error__Abskl",
        input: "ImportedTokenCard_input__y4JPk",
        button: "ImportedTokenCard_button__Paxe6",
        type: "ImportedTokenCard_type__5Zf3E",
        errorText: "ImportedTokenCard_errorText__D5UqL",
        errorIcon: "ImportedTokenCard_errorIcon__EoPQq",
        alert: "ImportedTokenCard_alert__v7U_c",
        alertText: "ImportedTokenCard_alertText__oOIhr",
      };
    },
    48907: function (e) {
      e.exports = {
        block: "ImportedTokensBlock_block__q85qx",
        body: "ImportedTokensBlock_body__0teM7",
        header: "ImportedTokensBlock_header__yUOcw",
        title: "ImportedTokensBlock_title__72MB9",
        button: "ImportedTokensBlock_button__5_fYo",
      };
    },
    30354: function (e) {
      e.exports = {
        modal: "ComingSoonModal_modal__2bB57",
        content: "ComingSoonModal_content__4P85o",
        title: "ComingSoonModal_title__lct_6",
        text: "ComingSoonModal_text__wv_XM",
        close: "ComingSoonModal_close__6pZWP",
        button: "ComingSoonModal_button__Okils",
      };
    },
    72664: function (e) {
      e.exports = {
        card: "VerifiedTokenCard_card___aPuz",
        header: "VerifiedTokenCard_header__f8y1p",
        selected: "VerifiedTokenCard_selected__cvOKW",
        logo: "VerifiedTokenCard_logo__hi8zF",
        row: "VerifiedTokenCard_row__c3BHd",
        name: "VerifiedTokenCard_name__BwFqj",
        ets: "VerifiedTokenCard_ets__CQkFs",
        symbol: "VerifiedTokenCard_symbol__S_DHw",
        address: "VerifiedTokenCard_address__OHn2w",
      };
    },
    33901: function (e) {
      e.exports = {
        block: "VerifiedTokensBlock_block__dLoBv",
        text: "VerifiedTokensBlock_text__gv1n8",
        grid: "VerifiedTokensBlock_grid__dfPhl",
        connectWalletButton: "VerifiedTokensBlock_connectWalletButton__Yn651",
        placeholder: "VerifiedTokensBlock_placeholder__sMraJ",
        skeleton: "VerifiedTokensBlock_skeleton__LAlT3",
      };
    },
    75343: function (e) {
      e.exports = {
        setupNetwork: "SetupNetwork_setupNetwork__FCR7_",
        setupNetwork__text: "SetupNetwork_setupNetwork__text__s3Wnf",
        setupNetwork__content: "SetupNetwork_setupNetwork__content__G_dt8",
        setupNetwork__aside: "SetupNetwork_setupNetwork__aside__HJ9TT",
        setupNetwork__main: "SetupNetwork_setupNetwork__main__e8OSM",
        setupNetwork__tabs: "SetupNetwork_setupNetwork__tabs__RpaiV",
        setupNetwork__selectAll: "SetupNetwork_setupNetwork__selectAll__pNl4B",
        setupNetwork__body: "SetupNetwork_setupNetwork__body__Pdxf9",
        setupNetwork__grid: "SetupNetwork_setupNetwork__grid__Xsrbk",
        setupNetwork__footer: "SetupNetwork_setupNetwork__footer__VBag9",
        setupNetwork__info: "SetupNetwork_setupNetwork__info__3nuEB",
        setupNetwork__box: "SetupNetwork_setupNetwork__box__hOSXN",
        networkOption: "SetupNetwork_networkOption__D_3SC",
        networkOption_selected: "SetupNetwork_networkOption_selected__J93JW",
        networkOption__header: "SetupNetwork_networkOption__header___wBra",
        networkOption__name: "SetupNetwork_networkOption__name__dMkY8",
        networkOption__value: "SetupNetwork_networkOption__value__C8m5n",
        networkOption__input: "SetupNetwork_networkOption__input__oFii1",
        networkOption__maxButton:
          "SetupNetwork_networkOption__maxButton__7jJwU",
        networkOption__comingSoon:
          "SetupNetwork_networkOption__comingSoon__5MILb",
        distribution: "SetupNetwork_distribution__EY2L4",
        distribution__option: "SetupNetwork_distribution__option__e1nvd",
        distribution__option_selected:
          "SetupNetwork_distribution__option_selected__xNu1N",
        distribution__tooltip: "SetupNetwork_distribution__tooltip___GhIk",
        topUp: "SetupNetwork_topUp__3ZG32",
        topUp__icon: "SetupNetwork_topUp__icon__myIhH",
        warning__content: "SetupNetwork_warning__content__v61dz",
        warning__label: "SetupNetwork_warning__label__3hz3C",
        warning__icon: "SetupNetwork_warning__icon__Qqh4U",
      };
    },
    54528: function (e) {
      e.exports = {
        card: "TokenCard_card__krR_N",
        title: "TokenCard_title__nJi4V",
        header: "TokenCard_header__I7ae9",
        body: "TokenCard_body__xN5Pz",
        footer: "TokenCard_footer__3rCE_",
        footer__box: "TokenCard_footer__box__xkaye",
        column: "TokenCard_column__TiVFb",
        primaryText: "TokenCard_primaryText__jTyx0",
        secondaryText: "TokenCard_secondaryText__hgjqM",
        label: "TokenCard_label__CxjD9",
        address: "TokenCard_address__krMjt",
      };
    },
    25345: function (e) {
      e.exports = {
        root: "SetupToken_root__cFyL6",
        root_new: "SetupToken_root_new__VtEgw",
        contractAddress: "SetupToken_contractAddress__8ERTp",
        supplyBadges_desktop: "SetupToken_supplyBadges_desktop__JY_O1",
        root_existing: "SetupToken_root_existing__hJH0J",
        decimals: "SetupToken_decimals__F6Zy9",
        decimals__item: "SetupToken_decimals__item__vf9am",
        decimals__item_active: "SetupToken_decimals__item_active__60Eiz",
        decimals__number: "SetupToken_decimals__number__Tcr4B",
        decimals__text: "SetupToken_decimals__text__Sas_H",
        decimals__badge: "SetupToken_decimals__badge___4LF9",
        mintable: "SetupToken_mintable__npGhH",
        mintable__item: "SetupToken_mintable__item__gOhqX",
        mintable__item_active: "SetupToken_mintable__item_active__RLlI_",
        contractAddress__group: "SetupToken_contractAddress__group__YjLum",
        contractAddress__icon: "SetupToken_contractAddress__icon__D6TpN",
        saltCopy: "SetupToken_saltCopy__JWEH4",
        addressCopy: "SetupToken_addressCopy__kSdwQ",
        refreshSalt: "SetupToken_refreshSalt__pgbC2",
        supplyBadges: "SetupToken_supplyBadges__gKJRb",
        supplyBadges_mobile: "SetupToken_supplyBadges_mobile__nROg9",
        supplyBadges__item: "SetupToken_supplyBadges__item__aeBMJ",
        logo: "SetupToken_logo__5Zmka",
        logo__label: "SetupToken_logo__label___40bE",
        logo__label_disabled: "SetupToken_logo__label_disabled__YjFoB",
        logo__icon: "SetupToken_logo__icon__Chbul",
        supply: "SetupToken_supply__BVPhO",
        decimalsInput: "SetupToken_decimalsInput__SKDBR",
        supply__header: "SetupToken_supply__header__Sv9hQ",
        supply__adornment: "SetupToken_supply__adornment__xt09j",
      };
    },
    17370: function (e) {
      e.exports = {
        wrapper: "Stepper_wrapper__rm3Vm",
        stepper: "Stepper_stepper__ELcu5",
        stepsContainer: "Stepper_stepsContainer__9cjsQ",
        step: "Stepper_step__Bl6Vy",
        stepLine: "Stepper_stepLine__ZBsPA",
        active: "Stepper_active__RCYzf",
        passed: "Stepper_passed__IjIHe",
        hidden: "Stepper_hidden__svueL",
        stepIcon: "Stepper_stepIcon__TEocO",
        paginationContainer: "Stepper_paginationContainer__Ru_OK",
        paginationIcon: "Stepper_paginationIcon___7RLF",
        pagination: "Stepper_pagination__w_UOq",
        confirm: "Stepper_confirm__gjSEn",
        paginationButton: "Stepper_paginationButton__uESDn",
        paginationIconRight: "Stepper_paginationIconRight__GcoYW",
        connectWallet: "Stepper_connectWallet__RJecg",
        connectWalletButton: "Stepper_connectWalletButton__E3tkS",
        warning__content: "Stepper_warning__content__2pt4u",
        warning__label: "Stepper_warning__label__9pJdj",
        info__content: "Stepper_info__content__rybHo",
      };
    },
    84873: function (e) {
      e.exports = {
        tab: "Tab_tab__NIrc_",
        "tab-primary": "Tab_tab-primary__IcPTl",
        tab_active: "Tab_tab_active__koE_B",
        "tab-secondary": "Tab_tab-secondary__faBVi",
        "tab-tertiary": "Tab_tab-tertiary__FXhfg",
      };
    },
    68090: function (e) {
      e.exports = { root: "Tabs_root__pCtYE" };
    },
    43113: function (e) {
      e.exports = {
        radioGroup: "RadioGroup_radioGroup__Y8M__",
        label: "RadioGroup_label__fZB7O",
        items: "RadioGroup_items__zfx1g",
        items_row: "RadioGroup_items_row__tPUCo",
        items_column: "RadioGroup_items_column__oiCtI",
        radio: "RadioGroup_radio__gseFs",
        radio_small: "RadioGroup_radio_small__Wmy_s",
        radio_selected: "RadioGroup_radio_selected__JQuT3",
      };
    },
    67803: function (e) {
      e.exports = {
        root: "DataFeedsPage_root__aXjvU",
        dataFeeds: "DataFeedsPage_dataFeeds__diPCT",
      };
    },
    12225: function (e) {
      e.exports = {
        root: "MarketItems_root__pIyK2",
        table: "MarketItems_table__VmGNM",
        asset: "MarketItems_asset__fLUMB",
        icon: "MarketItems_icon__zGycn",
        assetClass: "MarketItems_assetClass__RCuyQ",
        price: "MarketItems_price__nLRq9",
        price__gwei: "MarketItems_price__gwei__K3pao",
        price__currency: "MarketItems_price__currency__VTDYf",
        price__icon: "MarketItems_price__icon__X7F6f",
        graph: "MarketItems_graph__Q6YPg",
      };
    },
    53549: function (e) {
      e.exports = {
        header: "Markets_header__qL0OP",
        title: "Markets_title__0Hwhg",
        toolbar: "Markets_toolbar___OAKO",
        priceIn: "Markets_priceIn__CVN53",
        priceIn__text: "Markets_priceIn__text__CIkcx",
        priceIn__value: "Markets_priceIn__value__s0gUf",
      };
    },
    93878: function (e) {
      e.exports = {
        root: "UniversalDataFeeds_root__5VNfw",
        heading: "UniversalDataFeeds_heading__Kuw6R",
        heading__title: "UniversalDataFeeds_heading__title__uYznL",
        heading__subtitle: "UniversalDataFeeds_heading__subtitle__4Wn5V",
        amount: "UniversalDataFeeds_amount__Q4Bca",
        amount__text: "UniversalDataFeeds_amount__text__7D53r",
      };
    },
    81998: function (e) {
      e.exports = {
        wrap: "LineGraph_wrap__BlPC2",
        loadingBox: "LineGraph_loadingBox__EGX_O",
        loading: "LineGraph_loading__zobmO",
        title: "LineGraph_title__GwAa2",
      };
    },
    53208: function (e) {
      e.exports = {
        card: "MarketCard_card__gOOyv",
        header: "MarketCard_header__j8JeG",
        asset: "MarketCard_asset__h7gzT",
        asset__icon: "MarketCard_asset__icon__RRc7F",
        asset__name: "MarketCard_asset__name__9PYU_",
        class: "MarketCard_class__V65OL",
        class__type: "MarketCard_class__type__Dbj0g",
        class__name: "MarketCard_class__name__ys01n",
        content: "MarketCard_content__pJNZD",
        values: "MarketCard_values__tVxKo",
        price: "MarketCard_price__nkQlb",
        price__value: "MarketCard_price__value__cUXYz",
        price__gwei: "MarketCard_price__gwei__iISuv",
        price__currency: "MarketCard_price__currency__kqBmq",
        price__icon: "MarketCard_price__icon__3BQJD",
        period: "MarketCard_period__ISBDy",
        period__item: "MarketCard_period__item__oMJ8L",
        period__name: "MarketCard_period__name__O_JPN",
        period__value: "MarketCard_period__value__BeD2V",
        period__value_up: "MarketCard_period__value_up__KOczV",
        period__value_down: "MarketCard_period__value_down__HrCBh",
        graph: "MarketCard_graph__2AXON",
        graph__box: "MarketCard_graph__box___M66I",
        graph__text: "MarketCard_graph__text__8U5Ht",
        card_plug: "MarketCard_card_plug__xFsZl",
      };
    },
    45696: function (e) {
      e.exports = {
        root: "Select_root__Iw0OT",
        popover: "Select_popover__o_Uuo",
        trigger: "Select_trigger__RUEZ3",
        icon: "Select_icon__uMzIE",
        value: "Select_value__aWH_G",
      };
    },
    60127: function (e) {
      e.exports = { item: "SelectOption_item__lUlOr" };
    },
    47432: function (e) {
      e.exports = {
        tab: "Tab_tab__nsylJ",
        tab_active: "Tab_tab_active__W0D8r",
      };
    },
    38170: function (e) {
      e.exports = { root: "Tabs_root___yGpc" };
    },
    89197: function (e) {
      e.exports = {
        checkbox: "Checkbox_checkbox__s36N1",
        undefined: "Checkbox_undefined__xBM0z",
        square: "Checkbox_square__AKCZj",
        round: "Checkbox_round__NsNDk",
        checked: "Checkbox_checked__Hipc1",
        semichecked: "Checkbox_semichecked__PfQHF",
        nonClickable: "Checkbox_nonClickable__hgmSs",
        checkboxWithLabel: "Checkbox_checkboxWithLabel__2ohkA",
      };
    },
    53513: function (e) {
      e.exports = {
        header: "TextInput_header__BUenR",
        label: "TextInput_label__y__JG",
        label_disabled: "TextInput_label_disabled__9k2yl",
        staked: "TextInput_staked__swvj_",
        staked__label: "TextInput_staked__label__n014c",
        staked__label_active: "TextInput_staked__label_active__HU0A_",
        box: "TextInput_box__bScWV",
        input: "TextInput_input__TPTce",
        input_max: "TextInput_input_max__q9wn6",
        input_part: "TextInput_input_part__cQuws",
        input_error: "TextInput_input_error__1VstH",
        error: "TextInput_error__3VjJx",
        adornment: "TextInput_adornment__izAOe",
        wrapper: "TextInput_wrapper__FEzHM",
      };
    },
  },
  function (e) {
    e.O(
      0,
      [
        5335, 6560, 1273, 7185, 1581, 8497, 4350, 6918, 8218, 3814, 6990, 9228,
        8933, 1293, 3125, 4335, 9543, 6276, 4031, 8217, 2016, 3345, 9700, 9023,
        1843, 9530, 483, 546, 2971, 2117, 1744,
      ],
      function () {
        return e((e.s = 78595));
      }
    ),
      (_N_E = e.O());
  },
]);
