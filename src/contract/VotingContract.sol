pragma solidity ^0.4.0;

contract VotingContract {


    struct Person {
        bool voted;
        bool canVote;
        uint8 vote;
    }

    struct Candidate {
        uint voteCount;
    }

    address owner;
    mapping(address => Person) voters;
    Candidate[] candidates;
    bool open;

    constructor(uint8 numberOfCandidates) public {
        owner = msg.sender;
        candidates.length = numberOfCandidates;
        open = true;
    }

    function vote(uint8 candidateId) public{
        require(open,"Voting has ended");
        require(!voters[msg.sender].voted,"You have already voted");
        require(candidateId < candidates.length, "Wrong candidate Id");
        // brakuje sprawdzenia czy moze glosowac

        voters[msg.sender].voted = true;
        voters[msg.sender].vote = candidateId;
        candidates[candidateId].voteCount += 1;
    }

    function giveRightToVote(address voterAdress) public {
        require(open,"Voting has ended");
        require(msg.sender == owner,"Not the poll owner");
        voters[voterAdress].canVote = true;
    }

    function getWinner() public view returns (uint8 winnerId)  {
        require(!open,"Voting hasn't ended");
        uint256 winnerCount = 0;
        for (uint8 i = 0; i < candidates.length; i++) {
            if (candidates[i].voteCount > winnerCount) {
                winnerCount = candidates[i].voteCount;
                winnerId = i;
            }
        }
    }

    function closeVoting() public {
        require(open,"Voting has ended");
        require(msg.sender == owner,"Not the poll owner");
        open = false;
    }
}