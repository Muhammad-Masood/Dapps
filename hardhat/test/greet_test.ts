import { ethers } from "hardhat"
import {
    loadFixture,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import {expect} from "chai";
import { describe } from "mocha";

describe("Greet", function () {
    let greet:any;
    async function deployContract() {
        const [deployer] = await ethers.getSigners();
        const deployerAddress = deployer.address;
        const Greet = await ethers.getContractFactory("Greet");
         greet = await Greet.deploy({ from: deployerAddress });
        console.log(`Greet.sol Deployed at ${greet.target} from address ${deployerAddress}`);
        return { greet,deployContract,deployerAddress }
    }

    describe("Deployment", function (){
        //Constructor 
        it("Should set right greet for the deployer", async function () {
            await loadFixture(deployContract);
            //const deployerGreet:any = await greet.viewGreet();
            expect(await greet.viewGreet()).to.be.equal("Hello World!");
        });
    });

    describe("Set Greet", function (){
        it("Should set the greet",async function(){
            await loadFixture(deployContract);
            const message:string = "Masood Here!";
            await greet.greet(message);
            expect(await greet.viewGreet()).to.be.equal(message);
        });
    });

    describe("Show greet",function(){
        it("Should Show the right greet of user", async function(){
            const {deployerAddress} = await loadFixture(deployContract);
            const [user] = await ethers.getSigners();
            const message:string = "MAAAAAAM!";
            await greet.greet(message, {from:user.address});
           // it("Should Update the message Mapping",async function(){
                // console.log("Checking User Message");
                expect(await greet.userMessage(user.address)).to.be.equal(message);
            //});
           expect(await greet.viewGreet({from:user.address})).to.be.equal(message);
           //expect(await greet.userMessage(deployerAddress)).not.to.be.equal(message);
        });
    })

});