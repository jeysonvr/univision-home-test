import { renderHook } from '@testing-library/react-hooks';
import { useFetchGifs } from '../../hooks/useFetchGifs';

describe('Test in useFetchGifs', () => {

    test('should return default info', () => {
        const { result } = renderHook( () => useFetchGifs('mars', 0) );

        expect( result.current ).toEqual({
            data: [],
            loading: true
        })
        
    })

})