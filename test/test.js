describe('sym', function(){
    it('Should return all unique numbers from two datasets where one has only one number', function(){
        expect(sym([1, 2, 3], [2])).toEqual([1,3]);
    });
    it('If a number is unique it should be added to the answer. Test involves only two sets of numbers and the second only has one number', function(){
        expect(sym([1, 2, 3], [4])).toEqual([1,2,3,4]);

    });
    it('Should remove all non unique numbers in two datasets when they both  have multiple numbers', function(){
        expect(sym([1, 2, 3], [2,4])).toEqual([1,3,4]);

    });
    it('Should remove all duplicates in multiple datasets', function(){
        expect(sym([1,2,3],[2,4,5,1,6,7],[8,9,7])).toEqual([3,4,5,6,8,9]);

    });
    it('Should remove all duplicates within first array before checking against other arrays', function(){
        expect(sym([1,1,1,2,3],[2,4,5,6,7],[8,9,7])).toEqual([1,3,4,5,6,8,9]);

    });
    it('Should remove all duplicates within each array before checking against other arrays', function(){
        expect(sym([1,1,1,2,3],[2,2,4,5,6,7],[8,9,7])).toEqual([1,3,4,5,6,8,9]);

    });

});


/*
sym([1, 2, 3], [5, 2, 1, 4]) should return [3, 4, 5].
sym([1, 2, 3], [5, 2, 1, 4]) should contain only three elements.
sym([1, 2, 5], [2, 3, 5], [3, 4, 5]) should return [1, 4, 5]
sym([1, 2, 5], [2, 3, 5], [3, 4, 5]) should contain only three elements.
sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]) should return [1, 4, 5].
sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]) should contain only three elements.
sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]) should return [2, 3, 4, 6, 7].
sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]) should contain only five elements.
sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]) should return [1, 2, 4, 5, 6, 7, 8, 9].
sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]) should contain only eight elements.
    */