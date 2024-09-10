import {assert, expect} from "chai";
import {foodDelivery} from "./food delivery.js";

describe("Tests suite", function() {
    describe("Test getCategory(category)", function(){
        it("with Vegan category" , () => {
            expect(foodDelivery.getCategory("Vegan")).to.equal("Dishes that contain no animal products.")
        });
        it("with Vegetarian category", () => {
            expect(foodDelivery.getCategory("Vegetarian")).to.equal("Dishes that contain no meat or fish.")
        });
        it("with Gluten-Free category", () => {
            expect(foodDelivery.getCategory("Gluten-Free" )).to.equal("Dishes that contain no gluten.")
        });
        it("with All category", () => {
            expect(foodDelivery.getCategory("All")).to.equal("All available dishes.")
        });
        it("with wrong category", () => {
            expect(()=> foodDelivery.getCategory("yavor")).to.throw("Invalid Category!")
        });
     });

     describe("Test addMenuItem(menuItem, maxPrice)", function(){
        it("with invalid parameters", () => {
            expect(()=> foodDelivery.addMenuItem("yavor", "yavor")).to.throw("Invalid Information!");
            expect(()=> foodDelivery.addMenuItem("yavor", 10)).to.throw("Invalid Information!");
            expect(()=> foodDelivery.addMenuItem([{name: "Item", price: 9}], "yavor")).to.throw("Invalid Information!");

            expect(()=> foodDelivery.addMenuItem([{name: "Item", price: 9}], 4)).to.throw("Invalid Information!");
            expect(()=> foodDelivery.addMenuItem([], 10)).to.throw("Invalid Information!");
        });

        it("with valid parameters", () => {
            expect(foodDelivery.addMenuItem([{name: "Item1", price: 9}, {name: "Item2", price: 11}], 10)).to.equal(`There are 1 available menu items matching your criteria!`);
            expect(foodDelivery.addMenuItem([{name: "Item1", price: 10}, {name: "Item2", price: 11}], 10)).to.equal(`There are 1 available menu items matching your criteria!`);
            expect(foodDelivery.addMenuItem([{name: "Item1", price: 9}, {name: "Item2", price: 10}], 10)).to.equal(`There are 2 available menu items matching your criteria!`);
        });
     });
     
     describe("Test calculateOrderCost(shipping, addons, discount)", function(){
        it("with invalid parameters", () => {
            expect(()=> foodDelivery.calculateOrderCost("yavor", "yavor", "yavor")).to.throw("Invalid Information!");

            expect(()=> foodDelivery.calculateOrderCost("yavor", "yavor", true)).to.throw("Invalid Information!");
            expect(()=> foodDelivery.calculateOrderCost("yavor", ["sauce"], "yavor")).to.throw("Invalid Information!");
            expect(()=> foodDelivery.calculateOrderCost(["standard"], "yavor", "yavor")).to.throw("Invalid Information!");

            expect(()=> foodDelivery.calculateOrderCost("yavor", ["sauce"], true)).to.throw("Invalid Information!");
            expect(()=> foodDelivery.calculateOrderCost(["standard"], "yavor", true)).to.throw("Invalid Information!");
            expect(()=> foodDelivery.calculateOrderCost(["standard"], ["sauce"], "yavor")).to.throw("Invalid Information!");            
        });

        it("with valid parameters", () => {
            let firstOrder = 4;
            let secondOrder = 8.5 * 0.85;
            expect(foodDelivery.calculateOrderCost(["standard"], ["sauce"], false)).to.equal(`You spend $${firstOrder.toFixed(2)} for shipping and addons!`);
            expect(foodDelivery.calculateOrderCost(["express"], ["beverage"], true)).to.equal(`You spend $${secondOrder.toFixed(2)} for shipping and addons with a 15% discount!`);
        });
     });     
});



