import { types } from "../../types/types";

describe('Test in types', () => {

    test('should have these types', () => {
        
        expect( types ).toEqual({
            setParameters: '[search] setParameters',
            setFullImage: '[search] setFullImage',
            setScrollSlider: '[search] setScrollSlider'
        });

    })
    

})