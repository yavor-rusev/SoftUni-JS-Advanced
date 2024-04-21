import { assert, expect } from "chai";
import { PaymentPackage } from "../12. Payment Package.js";

describe("Testing class PaymentPackage functionality", function () {
    describe("Testing constructor", function () {
        it("Testing with invalid param", function () {
            expect(() => { new PaymentPackage() }).to.throw(Error);
            expect(() => { new PaymentPackage(null) }).to.throw(Error);
            expect(() => { new PaymentPackage(true) }).to.throw(Error);
            expect(() => { new PaymentPackage(false) }).to.throw(Error);
            expect(() => { new PaymentPackage([]) }).to.throw(Error);
            expect(() => { new PaymentPackage({}) }).to.throw(Error);
            expect(() => { new PaymentPackage(1) }).to.throw(Error);
            expect(() => { new PaymentPackage(-1) }).to.throw(Error);
            expect(() => { new PaymentPackage('') }).to.throw(Error);

            expect(() => { new PaymentPackage('HR Services') }).to.throw(Error);
            expect(() => { new PaymentPackage('HR Services', null) }).to.throw(Error);
            expect(() => { new PaymentPackage('HR Services', true) }).to.throw(Error);
            expect(() => { new PaymentPackage('HR Services', false) }).to.throw(Error);
            expect(() => { new PaymentPackage('HR Services', []) }).to.throw(Error);
            expect(() => { new PaymentPackage('HR Services', {}) }).to.throw(Error);
            expect(() => { new PaymentPackage('HR Services', '') }).to.throw(Error);
            expect(() => { new PaymentPackage('HR Services', '1') }).to.throw(Error);
            expect(() => { new PaymentPackage('HR Services', 'HR Services') }).to.throw(Error);
            expect(() => { new PaymentPackage('HR Services', -1) }).to.throw(Error);
            expect(() => { new PaymentPackage('HR Services', -1.5) }).to.throw(Error);
        });

        it("Testing with valid params", function () {
            expect(() => { new PaymentPackage('HR Services', 10.5) }).to.not.throw(Error);
            expect(() => { new PaymentPackage('HR Services', 1.5) }).to.not.throw(Error);
            expect(() => { new PaymentPackage('HR Services', 1) }).to.not.throw(Error);
            expect(() => { new PaymentPackage('HR Services', 0.5) }).to.not.throw(Error);
            expect(() => { new PaymentPackage('HR Services', 0) }).to.not.throw(Error);
        })
    });

    describe("Testing get name()", function () {
        it("Testing with valid params", function () {
            expect(new PaymentPackage('HR Services', 1).name === 'HR Services').to.be.true;
        })
    });

    describe("Testing set name(newValue)", function () {
        it("Testing with invalid param", function () {
            expect(() => { new PaymentPackage('HR Services', 1).name = undefined }).to.throw(Error);
            expect(() => { new PaymentPackage('HR Services', 1).name = null }).to.throw(Error);
            expect(() => { new PaymentPackage('HR Services', 1).name = true }).to.throw(Error);
            expect(() => { new PaymentPackage('HR Services', 1).name = false }).to.throw(Error);
            expect(() => { new PaymentPackage('HR Services', 1).name = [] }).to.throw(Error);
            expect(() => { new PaymentPackage('HR Services', 1).name = {} }).to.throw(Error);
            expect(() => { new PaymentPackage('HR Services', 1).name = '' }).to.throw(Error);
            expect(() => { new PaymentPackage('HR Services', 1).name = -1 }).to.throw(Error);
            expect(() => { new PaymentPackage('HR Services', 1).name = -1.5 }).to.throw(Error);
            expect(() => { new PaymentPackage('HR Services', 1).name = 0 }).to.throw(Error);
            expect(() => { new PaymentPackage('HR Services', 1).name = 1 }).to.throw(Error);
            expect(() => { new PaymentPackage('HR Services', 1).name = 1.5 }).to.throw(Error);
        });

        it("Testing with valid params", function () {
            expect(() => { new PaymentPackage('HR Services', 1).name = 'HR Services' }).to.not.throw(Error);
            expect(() => { new PaymentPackage('HR Services', 1).name = '1' }).to.not.throw(Error);
        })
    });

    describe("Testing get value()", function () {
        it("Testing with valid params", function () {
            expect(new PaymentPackage('HR Services', 1).value === 1).to.be.true;
        })
    });

    describe("Testing set value(newValue)", function () {
        it("Testing with invalid param", function () {
            expect(() => { new PaymentPackage('HR Services', 1).value = undefined }).to.throw(Error);
            expect(() => { new PaymentPackage('HR Services', 1).value = null }).to.throw(Error);
            expect(() => { new PaymentPackage('HR Services', 1).value = true }).to.throw(Error);
            expect(() => { new PaymentPackage('HR Services', 1).value = false }).to.throw(Error);
            expect(() => { new PaymentPackage('HR Services', 1).value = [] }).to.throw(Error);
            expect(() => { new PaymentPackage('HR Services', 1).value = {} }).to.throw(Error);
            expect(() => { new PaymentPackage('HR Services', 1).value = '' }).to.throw(Error);
            expect(() => { new PaymentPackage('HR Services', 1).value = '1' }).to.throw(Error);
            expect(() => { new PaymentPackage('HR Services', 1).value = 'HR Services' }).to.throw(Error);
            expect(() => { new PaymentPackage('HR Services', 1).value = -1 }).to.throw(Error);
            expect(() => { new PaymentPackage('HR Services', 1).value = -1.5 }).to.throw(Error);
        });

        it("Testing with valid params", function () {
            expect(() => { new PaymentPackage('HR Services', 1).value = 0 }).to.not.throw(Error);
            expect(() => { new PaymentPackage('HR Services', 1).value = 0.5 }).to.not.throw(Error);
            expect(() => { new PaymentPackage('HR Services', 1).value = 1 }).to.not.throw(Error);
            expect(() => { new PaymentPackage('HR Services', 1).value = 1.5 }).to.not.throw(Error);
            expect(() => { new PaymentPackage('HR Services', 1).value = 10 }).to.not.throw(Error);
            expect(() => { new PaymentPackage('HR Services', 1).value = 10.5 }).to.not.throw(Error);
        })
    });

    describe("Testing get VAT()", function () {
        it("Testing with valid params", function () {
            expect(new PaymentPackage('HR Services', 1).VAT === 20).to.be.true;
        })
    });

    describe("Testing set VAT(newValue)", function () {
        it("Testing with invalid param", function () {
            expect(() => { new PaymentPackage('HR Services', 1).VAT = undefined }).to.throw(Error);
            expect(() => { new PaymentPackage('HR Services', 1).VAT = null }).to.throw(Error);
            expect(() => { new PaymentPackage('HR Services', 1).VAT = true }).to.throw(Error);
            expect(() => { new PaymentPackage('HR Services', 1).VAT = false }).to.throw(Error);
            expect(() => { new PaymentPackage('HR Services', 1).VAT = [] }).to.throw(Error);
            expect(() => { new PaymentPackage('HR Services', 1).VAT = {} }).to.throw(Error);
            expect(() => { new PaymentPackage('HR Services', 1).VAT = '' }).to.throw(Error);
            expect(() => { new PaymentPackage('HR Services', 1).VAT = '1' }).to.throw(Error);
            expect(() => { new PaymentPackage('HR Services', 1).VAT = 'HR Services' }).to.throw(Error);
            expect(() => { new PaymentPackage('HR Services', 1).VAT = -1 }).to.throw(Error);
            expect(() => { new PaymentPackage('HR Services', 1).value = -1.5 }).to.throw(Error);
        });

        it("Testing with valid params", function () {
            expect(() => { new PaymentPackage('HR Services', 1).VAT = 0 }).to.not.throw(Error);
            expect(() => { new PaymentPackage('HR Services', 1).VAT = 0.5 }).to.not.throw(Error);
            expect(() => { new PaymentPackage('HR Services', 1).VAT = 1 }).to.not.throw(Error);
            expect(() => { new PaymentPackage('HR Services', 1).VAT = 1.5 }).to.not.throw(Error);
            expect(() => { new PaymentPackage('HR Services', 1).VAT = 10 }).to.not.throw(Error);
            expect(() => { new PaymentPackage('HR Services', 1).VAT = 10.5 }).to.not.throw(Error);            
        })
    });

    describe("Testing get active()", function () {
        it("Testing with valid params", function () {
            expect(new PaymentPackage('HR Services', 1).active === true).to.be.true;
        })
    });

    describe("Testing set active(newValue)", function () {
        it("Testing with invalid param", function () {
            expect(() => { new PaymentPackage('HR Services', 1).active = undefined }).to.throw(Error);
            expect(() => { new PaymentPackage('HR Services', 1).active = null }).to.throw(Error);
            expect(() => { new PaymentPackage('HR Services', 1).active = [] }).to.throw(Error);
            expect(() => { new PaymentPackage('HR Services', 1).active = {} }).to.throw(Error);
            expect(() => { new PaymentPackage('HR Services', 1).active = '' }).to.throw(Error);
            expect(() => { new PaymentPackage('HR Services', 1).active = '1' }).to.throw(Error);
            expect(() => { new PaymentPackage('HR Services', 1).active = 'HR Services' }).to.throw(Error);
            expect(() => { new PaymentPackage('HR Services', 1).active = -1 }).to.throw(Error);
            expect(() => { new PaymentPackage('HR Services', 1).active = -1.5 }).to.throw(Error);
            expect(() => { new PaymentPackage('HR Services', 1).active = 0 }).to.throw(Error);
            expect(() => { new PaymentPackage('HR Services', 1).active = 1 }).to.throw(Error);
            expect(() => { new PaymentPackage('HR Services', 1).active = 1.5 }).to.throw(Error);
        });

        it("Testing with valid params", function () {
            expect(() => { new PaymentPackage('HR Services', 1).active = true }).to.not.throw(Error);
            expect(() => { new PaymentPackage('HR Services', 1).active = false }).to.not.throw(Error);

        })
    });

    describe("Testing toString()", function () { 
        it("Testing with active package", function () {            
            expect(new PaymentPackage('HR Services', 1).toString()).to.equal(`Package: HR Services\n- Value (excl. VAT): 1\n- Value (VAT 20%): 1.2`);            
        })

        it("Testing with inactive package", function () {   
            let a = new PaymentPackage('HR Services', 1);
            a.active = false;
            expect(a.toString()).to.equal(`Package: HR Services (inactive)\n- Value (excl. VAT): 1\n- Value (VAT 20%): 1.2`);         
        })
    });
});

