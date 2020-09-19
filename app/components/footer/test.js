import React from 'react';
import {render, cleanup} from '../../../__tests__/setup/test-setup';
import Footer from './index';

afterEach(cleanup);

describe('<Footer', () => {
    it('should match snapshot', () => {
        const {asFragment} = render(<Footer/>);
        expect(asFragment).toMatchSnapshot();
    });
    it('should contain footer class', () => {
        const {getByTestId} = render(<Footer/>);
        const footer = getByTestId("nb-footer");
        expect(footer.classList.contains("nb-footer")).toBe(true);

    });
    it('should have active links', () => {
        const {getByTestId} = render(<Footer/>);
        expect(getByTestId('linkedin').getAttribute('href')).toEqual('https://www.linkedin.com/in/desmondademiluyi/');
        expect(getByTestId('facebook').getAttribute('href')).toEqual('https://www.facebook.com/ademiluyi.toye');
        expect(getByTestId('github').getAttribute('href')).toEqual('https://github.com/desmondtoyus');
        expect(getByTestId('twitter').getAttribute('href')).toEqual('https://twitter.com/arewethere_yt');
    });
});