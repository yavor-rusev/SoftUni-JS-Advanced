import { workforceManagement } from "./workforceManagement.js";
import { expect, assert} from "chai";

describe("workforceManagement", function() {
    describe("•   recruitStaff (name, role, experience)", function() {
        it("test role with Diveloper", function() {
            expect(() => workforceManagement.recruitStaff("Yavor", 'Developer', 5)).to.not.Throw();
        });

        it("test role with non-Diveloper", function() {
            expect(() => workforceManagement.recruitStaff("Yavor", 'proba', 5)).to.Throw(`We are not currently hiring for this role.`);
        });

        it("test with enought experience", function() {
            expect(workforceManagement.recruitStaff("Yavor", 'Developer', 4)).to.equal(`Yavor has been successfully recruited for the role of Developer.`);
            expect(workforceManagement.recruitStaff("Yavor", 'Developer', 10)).to.equal(`Yavor has been successfully recruited for the role of Developer.`);
        });

        it("test with not enought experience", function() {
            expect(workforceManagement.recruitStaff("Yavor", 'Developer', 3)).to.equal(`Yavor is not suitable for this role.`);
            expect(workforceManagement.recruitStaff("Yavor", 'Developer', 0)).to.equal(`Yavor is not suitable for this role.`);
        });
     });

     describe("•	computeWages (hoursWorked)", function() {
        it("test with less than 160 hours", function() {
            expect(workforceManagement.computeWages(100)).to.equal(1800);         
        });

        it("test with 160 hours", function() {
            expect(workforceManagement.computeWages(160)).to.equal(2880);         
        });

        it("test with more than 160 hours", function() {
            expect(workforceManagement.computeWages(161)).to.equal(4398);         
        });

        it("test with negative number", function() {
            expect(() => workforceManagement.computeWages(-5)).to.Throw("Invalid hours");            
        });

        it("test with non-number input", function() {
            expect(() => workforceManagement.computeWages("5")).to.Throw("Invalid hours");
            expect(() => workforceManagement.computeWages([])).to.Throw("Invalid hours");
        });
     })

     describe("•	dismissEmployee (workforce, employeeIndex)", function() {
        let arr = ["Petar", "Ivan", "George"];

        it("test with valid params",function() {
            expect(workforceManagement.dismissEmployee(["Petar", "Ivan", "George"], 0)).to.equal("Ivan, George");
            expect(workforceManagement.dismissEmployee(["Petar", "Ivan", "George"], 2)).to.equal("Petar, Ivan");            
        });

        it("test with negative index",function() {
            expect(() => workforceManagement.dismissEmployee(arr, -1)).to.Throw("Invalid input");                        
        });

        
        it("test with out of range index",function() {
            expect(() => workforceManagement.dismissEmployee(arr, arr.length)).to.Throw("Invalid input");                      
        });

        it("test with non-array first param",function() {
            expect(() => workforceManagement.dismissEmployee({}, 1)).to.Throw("Invalid input");                   
        });

        it("test with non-number second param",function() {
            expect(() => workforceManagement.dismissEmployee(["Petar", "Ivan", "George"], "1")).to.Throw("Invalid input");                  
            expect(() => workforceManagement.dismissEmployee(["Petar", "Ivan", "George"], "proba")).to.Throw("Invalid input");               
        });
     })    
});
