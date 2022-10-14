// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

contract Bad {
  event logger(uint n);
  receive() external payable{
    emit logger(8);
  }
  function test() external {
    emit logger(9);
  }
}