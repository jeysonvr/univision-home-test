import { getGifs } from "../../helpers/getGifs";

describe( 'test in getGifs', () => {

    test('should return an array of objects', async () => {
        
        const gifs = await getGifs('mars');
        
        expect( Object.prototype.toString.call(gifs) ).toBe('[object Array]');

    })   



})