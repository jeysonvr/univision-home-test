import { renderHook, act } from '@testing-library/react-hooks';
import { useForm } from '../../hooks/useForm';

describe('Test in useForm', () => {

    const initialForm = {
        keyword: 'mars'
    }

    test('should return default form', () => {
        const { result } = renderHook( () => useForm(initialForm) );
        const [ values, handleInputChange, reset ] = result.current;

        expect( values ).toEqual( initialForm );
        expect( typeof( handleInputChange ) ).toBe( 'function' );
        expect( typeof( reset ) ).toBe( 'function' );
    })
    
    test('should change form value (keyword)', () => {
        const { result } = renderHook( () => useForm(initialForm) );
        const [ , handleInputChange ] = result.current;

        act( () => {

            handleInputChange({
                target: {
                    name: 'keyword',
                    value: 'jupiter'
                }
            });

        });

        const [ values ] = result.current;
        expect( values ).toEqual( { ...initialForm, keyword: 'jupiter' } )
    })

    test('should reset form', () => {
        const { result } = renderHook( () => useForm(initialForm) );
        const [ , handleInputChange, reset ] = result.current;

        act( () => {

            handleInputChange({
                target: {
                    name: 'keyword',
                    value: 'jupiter'
                }
            });

            reset();

        });

        const [ values ] = result.current;
        expect( values ).toEqual( initialForm );

    })

})