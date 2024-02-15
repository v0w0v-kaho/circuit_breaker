/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type {
  ScoreVault,
  ScoreVaultInterface,
} from "../../../contracts/mock/ScoreVault";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_verifierContract",
        type: "address",
      },
      {
        internalType: "address",
        name: "_trustedForwarder",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "msgSender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "count",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "encryptedData",
        type: "string",
      },
    ],
    name: "UpdateScore",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "msgSender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "result",
        type: "bool",
      },
    ],
    name: "Verify",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "getScore",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "forwarder",
        type: "address",
      },
    ],
    name: "isTrustedForwarder",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "scores",
    outputs: [
      {
        internalType: "uint256",
        name: "count",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "encryptedData",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_count",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_encryptedData",
        type: "string",
      },
    ],
    name: "setScore",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "trustedForwarder",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "verifierContract",
    outputs: [
      {
        internalType: "contract IVerifier",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[2]",
        name: "a",
        type: "uint256[2]",
      },
      {
        internalType: "uint256[2][2]",
        name: "b",
        type: "uint256[2][2]",
      },
      {
        internalType: "uint256[2]",
        name: "c",
        type: "uint256[2]",
      },
      {
        internalType: "uint256[2]",
        name: "input",
        type: "uint256[2]",
      },
    ],
    name: "verifyProof",
    outputs: [
      {
        internalType: "bool",
        name: "r",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60c06040523480156200001157600080fd5b506040516200130b3803806200130b833981810160405281019062000037919062000113565b808073ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1681525050508173ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff168152505050506200015a565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620000db82620000ae565b9050919050565b620000ed81620000ce565b8114620000f957600080fd5b50565b6000815190506200010d81620000e2565b92915050565b600080604083850312156200012d576200012c620000a9565b5b60006200013d85828601620000fc565b92505060206200015085828601620000fc565b9150509250929050565b60805160a051611184620001876000396000818161036701526104a90152600061034101526111846000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c80637da0a8771161005b5780637da0a877146100ff578063cf6956881461011d578063d47875d01461013b578063f5c9d69e1461016c5761007d565b8063323ed6a414610082578063572b6c051461009e57806376dd110f146100ce575b600080fd5b61009c600480360381019061009791906107c6565b61019c565b005b6100b860048036038101906100b39190610835565b610252565b6040516100c5919061087d565b60405180910390f35b6100e860048036038101906100e39190610835565b610291565b6040516100f6929190610926565b60405180910390f35b61010761033d565b6040516101149190610965565b60405180910390f35b610125610365565b60405161013291906109df565b60405180910390f35b61015560048036038101906101509190610835565b610389565b604051610163929190610926565b60405180910390f35b61018660048036038101906101819190610b61565b6104a5565b604051610193919061087d565b60405180910390f35b6040518060400160405280838152602001828152506000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008201518160000155602082015181600101908161020e9190610dcc565b509050507ff0a87bc74c0454aea67e54f1538ce1bc17bb8d63f2b6c891e933e1badf934adb83838360405161024593929190610e9e565b60405180910390a1505050565b600061025c61033d565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16149050919050565b60006020528060005260406000206000915090508060000154908060010180546102ba90610bf9565b80601f01602080910402602001604051908101604052809291908181526020018280546102e690610bf9565b80156103335780601f1061030857610100808354040283529160200191610333565b820191906000526020600020905b81548152906001019060200180831161031657829003601f168201915b5050505050905082565b60007f0000000000000000000000000000000000000000000000000000000000000000905090565b7f000000000000000000000000000000000000000000000000000000000000000081565b600060606000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001546000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010180805461041c90610bf9565b80601f016020809104026020016040519081016040528092919081815260200182805461044890610bf9565b80156104955780601f1061046a57610100808354040283529160200191610495565b820191906000526020600020905b81548152906001019060200180831161047857829003601f168201915b5050505050905091509150915091565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663f5c9d69e868686866040518563ffffffff1660e01b81526004016105069493929190611085565b6020604051808303816000875af1158015610525573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061054991906110f8565b15610591577fc39f49fc22f7d1922b75a440342391c3ce5200f33659fb84711c2b8addefd6bf336001604051610580929190611125565b60405180910390a1600190506105d0565b7fc39f49fc22f7d1922b75a440342391c3ce5200f33659fb84711c2b8addefd6bf3360006040516105c3929190611125565b60405180910390a1600090505b949350505050565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610617826105ec565b9050919050565b6106278161060c565b811461063257600080fd5b50565b6000813590506106448161061e565b92915050565b6000819050919050565b61065d8161064a565b811461066857600080fd5b50565b60008135905061067a81610654565b92915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6106d38261068a565b810181811067ffffffffffffffff821117156106f2576106f161069b565b5b80604052505050565b60006107056105d8565b905061071182826106ca565b919050565b600067ffffffffffffffff8211156107315761073061069b565b5b61073a8261068a565b9050602081019050919050565b82818337600083830152505050565b600061076961076484610716565b6106fb565b90508281526020810184848401111561078557610784610685565b5b610790848285610747565b509392505050565b600082601f8301126107ad576107ac610680565b5b81356107bd848260208601610756565b91505092915050565b6000806000606084860312156107df576107de6105e2565b5b60006107ed86828701610635565b93505060206107fe8682870161066b565b925050604084013567ffffffffffffffff81111561081f5761081e6105e7565b5b61082b86828701610798565b9150509250925092565b60006020828403121561084b5761084a6105e2565b5b600061085984828501610635565b91505092915050565b60008115159050919050565b61087781610862565b82525050565b6000602082019050610892600083018461086e565b92915050565b6108a18161064a565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b838110156108e15780820151818401526020810190506108c6565b60008484015250505050565b60006108f8826108a7565b61090281856108b2565b93506109128185602086016108c3565b61091b8161068a565b840191505092915050565b600060408201905061093b6000830185610898565b818103602083015261094d81846108ed565b90509392505050565b61095f8161060c565b82525050565b600060208201905061097a6000830184610956565b92915050565b6000819050919050565b60006109a56109a061099b846105ec565b610980565b6105ec565b9050919050565b60006109b78261098a565b9050919050565b60006109c9826109ac565b9050919050565b6109d9816109be565b82525050565b60006020820190506109f460008301846109d0565b92915050565b600067ffffffffffffffff821115610a1557610a1461069b565b5b602082029050919050565b600080fd5b6000610a38610a33846109fa565b6106fb565b90508060208402830185811115610a5257610a51610a20565b5b835b81811015610a7b5780610a67888261066b565b845260208401935050602081019050610a54565b5050509392505050565b600082601f830112610a9a57610a99610680565b5b6002610aa7848285610a25565b91505092915050565b600067ffffffffffffffff821115610acb57610aca61069b565b5b602082029050919050565b6000610ae9610ae484610ab0565b6106fb565b90508060408402830185811115610b0357610b02610a20565b5b835b81811015610b2c5780610b188882610a85565b845260208401935050604081019050610b05565b5050509392505050565b600082601f830112610b4b57610b4a610680565b5b6002610b58848285610ad6565b91505092915050565b6000806000806101408587031215610b7c57610b7b6105e2565b5b6000610b8a87828801610a85565b9450506040610b9b87828801610b36565b93505060c0610bac87828801610a85565b925050610100610bbe87828801610a85565b91505092959194509250565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680610c1157607f821691505b602082108103610c2457610c23610bca565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302610c8c7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82610c4f565b610c968683610c4f565b95508019841693508086168417925050509392505050565b6000610cc9610cc4610cbf8461064a565b610980565b61064a565b9050919050565b6000819050919050565b610ce383610cae565b610cf7610cef82610cd0565b848454610c5c565b825550505050565b600090565b610d0c610cff565b610d17818484610cda565b505050565b5b81811015610d3b57610d30600082610d04565b600181019050610d1d565b5050565b601f821115610d8057610d5181610c2a565b610d5a84610c3f565b81016020851015610d69578190505b610d7d610d7585610c3f565b830182610d1c565b50505b505050565b600082821c905092915050565b6000610da360001984600802610d85565b1980831691505092915050565b6000610dbc8383610d92565b9150826002028217905092915050565b610dd5826108a7565b67ffffffffffffffff811115610dee57610ded61069b565b5b610df88254610bf9565b610e03828285610d3f565b600060209050601f831160018114610e365760008415610e24578287015190505b610e2e8582610db0565b865550610e96565b601f198416610e4486610c2a565b60005b82811015610e6c57848901518255600182019150602085019450602081019050610e47565b86831015610e895784890151610e85601f891682610d92565b8355505b6001600288020188555050505b505050505050565b6000606082019050610eb36000830186610956565b610ec06020830185610898565b8181036040830152610ed281846108ed565b9050949350505050565b600060029050919050565b600081905092915050565b6000819050919050565b610f058161064a565b82525050565b6000610f178383610efc565b60208301905092915050565b6000602082019050919050565b610f3981610edc565b610f438184610ee7565b9250610f4e82610ef2565b8060005b83811015610f7f578151610f668782610f0b565b9650610f7183610f23565b925050600181019050610f52565b505050505050565b600060029050919050565b600081905092915050565b6000819050919050565b600081905092915050565b610fbb81610edc565b610fc58184610fa7565b9250610fd082610ef2565b8060005b83811015611001578151610fe88782610f0b565b9650610ff383610f23565b925050600181019050610fd4565b505050505050565b60006110158383610fb2565b60408301905092915050565b6000602082019050919050565b61103781610f87565b6110418184610f92565b925061104c82610f9d565b8060005b8381101561107d5781516110648782611009565b965061106f83611021565b925050600181019050611050565b505050505050565b60006101408201905061109b6000830187610f30565b6110a8604083018661102e565b6110b560c0830185610f30565b6110c3610100830184610f30565b95945050505050565b6110d581610862565b81146110e057600080fd5b50565b6000815190506110f2816110cc565b92915050565b60006020828403121561110e5761110d6105e2565b5b600061111c848285016110e3565b91505092915050565b600060408201905061113a6000830185610956565b611147602083018461086e565b939250505056fea2646970667358221220d7e8d504dafc8d3d2e79866b7820993f2de6a25f0b5533e26f9d6ba4b40c6bfc64736f6c63430008140033";

type ScoreVaultConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ScoreVaultConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ScoreVault__factory extends ContractFactory {
  constructor(...args: ScoreVaultConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _verifierContract: AddressLike,
    _trustedForwarder: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(
      _verifierContract,
      _trustedForwarder,
      overrides || {}
    );
  }
  override deploy(
    _verifierContract: AddressLike,
    _trustedForwarder: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(
      _verifierContract,
      _trustedForwarder,
      overrides || {}
    ) as Promise<
      ScoreVault & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): ScoreVault__factory {
    return super.connect(runner) as ScoreVault__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ScoreVaultInterface {
    return new Interface(_abi) as ScoreVaultInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): ScoreVault {
    return new Contract(address, _abi, runner) as unknown as ScoreVault;
  }
}
