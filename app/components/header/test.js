import React from 'react';
import { renderHook, act } from "@testing-library/react-hooks"
import {renderWithProviders, fireEvent, cleanup} from '../../../__tests__/setup/test-setup';
import Header from './index';

afterEach(cleanup);

describe('<Header/>', ()=>{
    // global.window = Object.create(window);
    // const url = "http://localhost/";
    // Object.defineProperty(window, 'location', {
    //   value: {
    //     href: url
    //   }
    // });
    // window.location.reload = jest.fn()
   
    const { result } = renderHook(() => useEffect(() => {
      return () => {
        effect
      };
    }, [input])())

    it('should match snapshot', ()=>{
        const {asFragment} = renderWithProviders(<Header/>);
        expect(asFragment).toMatchSnapshot();
    });
    it('should container the header clss', ()=>{
        const {getByTestId} = renderWithProviders(<Header/>);
        expect(getByTestId('navbar').classList.contains("navbar")).toBe(true);
        expect(getByTestId('desmond').getAttribute('href')).toEqual('/');
        expect(getByTestId('home').getAttribute('href')).toEqual('/');
        expect(getByTestId('about').getAttribute('href')).toEqual('/about');
        expect(getByTestId('portfolio').getAttribute('href')).toEqual('/portfolio');
        expect(getByTestId('contact').getAttribute('href')).toEqual('/contact');
    });
    it('should sucessfully click the contact link', ()=>{
         const {getByTestId} = renderWithProviders(<Header/>);
        fireEvent.click(getByTestId('contact'));
        // fireEvent.click(getByText(/click me nao/i));
        expect(getByTestId('contact-li').classList.contains("active")).toBe(true);
    });
    it('should sucessfully click the home link', ()=>{
        const {getByTestId} = renderWithProviders(<Header/>);
       fireEvent.click(getByTestId('home'));
       expect(getByTestId('home-li').classList.contains("active")).toBe(true);

   });
   it('should sucessfully click the portfolio link', ()=>{
    const {getByTestId} = renderWithProviders(<Header/>);
   fireEvent.click(getByTestId('portfolio'));
   expect(getByTestId('portfolio-li').classList.contains("active")).toBe(true);

});
it('should sucessfully click the about link', ()=>{
    const {getByTestId} = renderWithProviders(<Header/>);
   fireEvent.click(getByTestId('about'));
   expect(getByTestId('about-li').classList.contains("active")).toBe(true);

});
})