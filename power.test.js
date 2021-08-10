const power =require('./power');
describe('Calculator Tests',()=>{
    const powerTests=[[3,3,27],[2,8,256],[4,2,16],[6,2,36]];
    for(const test of powerTests) {
        it(`Raises ${test[0]} to the power of ${test[1]} to get ${test[2]}`,()=>{
            expect(power(test[0],test[1])).toBe(test[2]);
        });
    }
});
