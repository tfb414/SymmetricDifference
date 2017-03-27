describe('sym', function(){
    it('Should return all unique numbers from two datasets where one has only one number and it is a duplicate', function(){
        expect(sym([1, 2, 3], [2])).toEqual([1,3]);
    });
    it('Should return all unique numbers from two datasets where there are no duplicates', function(){
        expect(sym([1, 2, 3], [4])).toEqual([1,2,3,4]);

    });
    it('Should return all unique numbers in two datasets when they both have multiple numbers', function(){
        expect(sym([1, 2, 3], [2,4])).toEqual([1,3,4]);

    });
    it('Should return all unique numbers when comparing each array to the next one.', function(){
        expect(sym([1,2,3],[2,4,5,1,6,7],[8,9,7])).toEqual([3,4,5,6,8,9]);

    });
    it('Should return all unique numbers when comparing each array to the next one while removing duplicates within first array before checking against other arrays', function(){
        expect(sym([1,1,1,2,3],[2,4,5,6,7],[8,9,7])).toEqual([1,3,4,5,6,8,9]);

    });
    it('Should return all unique numbers when comparing each array to the next one while removing duplicates within all arrays before checking against other arrays', function(){
        expect(sym([1,1,1,2,3],[2,2,4,5,6,7],[8,9,7])).toEqual([1,3,4,5,6,8,9]);

    });

});


