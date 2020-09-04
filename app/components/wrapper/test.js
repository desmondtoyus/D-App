import React from 'react'
import {renderWithProviders, cleanup} from '../../../__tests__/setup/test-setup'
import Wrapper from './index'

 afterEach(cleanup)

 describe('<MainWrapper />', () => {
    it('Should match a snapshot', () => {
        const { asFragment } = renderWithProviders(<Wrapper desc={'Testing'}/>)
        expect(asFragment).toMatchSnapshot()
    });
    it('Should contain Header', () => {
        const { getByTestId } = renderWithProviders(<Wrapper desc={'Testing'} />);
        const appHeader = getByTestId('header');
        expect(appHeader).toBeTruthy();
      });
 })
