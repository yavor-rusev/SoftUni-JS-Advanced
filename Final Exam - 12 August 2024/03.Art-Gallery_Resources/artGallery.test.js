import { assert, expect } from "chai";
import { artGallery } from "./artGallery.js";

describe("Tests suite", function () {
    describe("Test addArtwork (title, dimensions, artist)", function () {
        it("with invalid types of data", () => {
            expect(() => artGallery.addArtwork([], [], [])).to.throw("Invalid Information!");

            expect(() => artGallery.addArtwork("test", [], [])).to.throw("Invalid Information!");
            expect(() => artGallery.addArtwork([], "test", [])).to.throw("Invalid Information!");
            expect(() => artGallery.addArtwork([], [], "test")).to.throw("Invalid Information!");

            expect(() => artGallery.addArtwork("test", "test", [])).to.throw("Invalid Information!");
            expect(() => artGallery.addArtwork([], "test", "test")).to.throw("Invalid Information!");
            expect(() => artGallery.addArtwork("test", [], "test")).to.throw("Invalid Dimensions!");
        });

        it("with invalid values", () => {
            expect(() => artGallery.addArtwork("", "", "")).to.throw("Invalid Dimensions!");

            expect(() => artGallery.addArtwork("", "30 x 40", "")).to.throw("This artist is not allowed in the gallery!");
            expect(() => artGallery.addArtwork("", "30 x 40", "test")).to.throw("This artist is not allowed in the gallery!");
            expect(() => artGallery.addArtwork("test", "30 x 40", "test")).to.throw("This artist is not allowed in the gallery!");

            expect(() => artGallery.addArtwork("test", "-30 x 40", "Picasso")).to.throw("Invalid Dimensions!");
            expect(() => artGallery.addArtwork("test", "30 x -40", "Picasso")).to.throw("Invalid Dimensions!");
            expect(() => artGallery.addArtwork("test", "-30 x -40", "Picasso")).to.throw("Invalid Dimensions!");
            expect(() => artGallery.addArtwork("test", "", "Picasso")).to.throw("Invalid Dimensions!");
            expect(() => artGallery.addArtwork("test", "test", "Picasso")).to.throw("Invalid Dimensions!");
            expect(() => artGallery.addArtwork("test", "test x 40", "Picasso")).to.throw("Invalid Dimensions!");
            expect(() => artGallery.addArtwork("test", "30 x test", "Picasso")).to.throw("Invalid Dimensions!");
            expect(() => artGallery.addArtwork("test", "30x40", "Picasso")).to.throw("Invalid Dimensions!");
            expect(() => artGallery.addArtwork("test", " ", "Picasso")).to.throw("Invalid Dimensions!");
            expect(() => artGallery.addArtwork("test", "30 x", "Picasso")).to.throw("Invalid Dimensions!");
            expect(() => artGallery.addArtwork("test", " x 40", "Picasso")).to.throw("Invalid Dimensions!");
        });

        it("with valid parameters", () => {
            expect(artGallery.addArtwork("test", "30 x 40", "Van Gogh")).to.equal(`Artwork added successfully: 'test' by Van Gogh with dimensions 30 x 40.`);
            expect(artGallery.addArtwork("test", "1 x 1", "Picasso")).to.equal(`Artwork added successfully: 'test' by Picasso with dimensions 1 x 1.`);
            expect(artGallery.addArtwork("test", "0 x 0", "Monet")).to.equal(`Artwork added successfully: 'test' by Monet with dimensions 0 x 0.`);

        });

    });

    describe("Test calculateCosts (exhibitionCosts, insuranceCosts, sponsor)", function () {
        it("with invalid types of data", () => {
            expect(() => artGallery.calculateCosts([], [], [])).to.throw("Invalid Information!");

            expect(() => artGallery.calculateCosts(10, [], [])).to.throw("Invalid Information!");
            expect(() => artGallery.calculateCosts([], 10, [])).to.throw("Invalid Information!");
            expect(() => artGallery.calculateCosts([], [], true)).to.throw("Invalid Information!");
            expect(() => artGallery.calculateCosts([], [], false)).to.throw("Invalid Information!");


            expect(() => artGallery.calculateCosts(10, 10, [])).to.throw("Invalid Information!");
            expect(() => artGallery.calculateCosts([], 10, true)).to.throw("Invalid Information!");
            expect(() => artGallery.calculateCosts([], 10, false)).to.throw("Invalid Information!");
            expect(() => artGallery.calculateCosts(10, [], true)).to.throw("Invalid Information!");
            expect(() => artGallery.calculateCosts(10, [], false)).to.throw("Invalid Information!");
        });

        it("with valid parameters", () => {
            let firstOrder = 4;
            let secondOrder = 4 * 0.90;
            expect(artGallery.calculateCosts(1, 3, false)).to.equal(`Exhibition and insurance costs are ${firstOrder}$.`);
            expect(artGallery.calculateCosts(1, 3, true)).to.equal(`Exhibition and insurance costs are ${secondOrder}$, reduced by 10% with the help of a donation from your sponsor.`);
        });
    });

    describe("Test organizeExhibits (artworksCount, displaySpacesCount)", function () {
        it("with invalid types of data", () => {
            expect(() => artGallery.organizeExhibits([], [])).to.throw("Invalid Information!");

            expect(() => artGallery.organizeExhibits(10, [])).to.throw("Invalid Information!");
            expect(() => artGallery.organizeExhibits([], 10)).to.throw("Invalid Information!");

            expect(() => artGallery.organizeExhibits(-1, [])).to.throw("Invalid Information!");
            expect(() => artGallery.organizeExhibits([], -1)).to.throw("Invalid Information!");
            
            expect(() => artGallery.organizeExhibits(-1, -1)).to.throw("Invalid Information!");
            expect(() => artGallery.organizeExhibits(-1, 1)).to.throw("Invalid Information!");
            expect(() => artGallery.organizeExhibits(1, -1)).to.throw("Invalid Information!");
           
        });

        it("with valid params - 1", () => {
            let artworksCount = 10;
            let displaySpacesCount = 4;
            let artworksPerSpace = Math.trunc(artworksCount / displaySpacesCount);

            expect(artGallery.organizeExhibits(artworksCount, displaySpacesCount)).to.equal(`There are only ${artworksPerSpace} artworks in each display space, you can add more artworks.`);
          
        });

        it("with valid params - 2", () => {
            let artworksCount = 40;
            let displaySpacesCount = 7;
            let artworksPerSpace = Math.trunc(artworksCount / displaySpacesCount);            

            expect(artGallery.organizeExhibits(artworksCount, displaySpacesCount)).to.equal(`You have ${displaySpacesCount} display spaces with ${artworksPerSpace} artworks in each space.`);
                 
        });
    });
});


