// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.18;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Greet {
    string public message;

    mapping (address => string) public userMessage;

    constructor(){
        userMessage[msg.sender] = "Hello World!";
    }

    function greet(string memory _message) public{
        userMessage[msg.sender] = _message;
    }

    function viewGreet() public view returns(string memory){
        return userMessage[msg.sender];
    }
}
