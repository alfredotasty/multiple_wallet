// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MyCoin is ERC20 {
    mapping(address => string) public addrToName;
    address public owner;

    constructor() ERC20("NammonCoin", "NMC") {
        _mint(msg.sender, 1000 * 10**18);
        owner = msg.sender;
    }
}
