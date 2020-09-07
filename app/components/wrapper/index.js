import React, {StrictMode, memo, useEffect, useMemo, useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Helmet} from 'react-helmet-async';
import PropTypes from 'prop-types';
import {changesView} from '../../redux/actions/menu';
import Header from '../header/index';
import Footer from '../footer/index';

function Wrapper(props) {
    const {activeMenu} = useSelector((state) => state.menus);
    const dispatch = useDispatch();
    useEffect(() => {
        return loadViewData()
    }, [activeMenu])

    const loadViewData = () => {
         dispatch(changesView({prop: 'activeMenu', value: props.viewId}))
    }

    return (
        <StrictMode>
            <div className="container-fluid">
                <div className="jumbotron hero">
                    <Helmet>
                        <html lang={props.locale}/>
                        <title>{props.title}</title>
                        <meta name='description' content={props.desc}/>
                    </Helmet>
                    <Header/>
                    <div>
                        {props.children}
                    </div>
                    <Footer/>
                </div>
            </div>
        </StrictMode>
    )
}

Wrapper.propTypes = {
    locale: PropTypes.string,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    viewId: PropTypes.string.isRequired
};

Wrapper.defaultProps = {
    locale: 'en',
    title: `Page title`
};
export default memo(Wrapper);