import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Enzyme, { mount } from '../../../__tests__/setup/test-setup';
import { mockState } from '../../../__mocks__/mockState'

import Wrapper from './index';
import reducer from '../../redux/reducers/menu';
import { changesView } from '../../redux/actions/menu/menu'


jest.mock("react-redux", () => ({
    ...jest.requireActual("react-redux"),
    useSelector: jest.fn()
  }));

describe('<Wrapper/>', ()=>{
    beforeEach(() => {
        useSelector.mockImplementation(callback => {
          return callback(mockAppState);
        });
      });
    const mockStore = createStore(reducer, mockState.menus)
    mockStore.dispatch = jest.fn();
        const Wrappered = () => mount(
            <Provider store={mockStore}>
                <Wrapper desc={'test Description'}/>
            </Provider>
        );

    it('it should successfully mount Wrapper Component', ()=>{
        expect(Wrappered).toBeTruthy()
        expect(mockStore.dispatch).toHaveBeenCalled();
        expect(Wrappered).toContain('Welcome Home Son 2 Mr. Biggs');
    })
})
