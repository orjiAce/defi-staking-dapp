pragma solidity ^0.5.0;

import './RWD.sol';
import './Tether.sol' ;

contract DecentralBank {
  string public name = 'Decentral Bank';
  address public owner;


  constructor(RWD _rwd, Tether _tether) public {

  }
 
}