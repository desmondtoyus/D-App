import React, {StrictMode, memo, useEffect, useMemo, useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Helmet} from 'react-helmet-async';
import PropTypes from 'prop-types';
import {changesView} from '../../redux/actions/menu/menu';
import Header from '../header/index';
import Footer from '../footer/index';

function Wrapper(props) {
    // const menu = useSelector(state=>state.menus);
    const {pageTitle, activeMenu} = useSelector((state) => state.menus);
    const dispatch = useDispatch();
    useEffect(() => {
        loadViewData()
    }, [activeMenu, pageTitle])

    const loadViewData = async() => {
        await dispatch(changesView({prop: 'pageTitle', value: props.title}))
    }

    return (
        <StrictMode>
            <div className="container-fluid">
                <div className="jumbotron hero">
                    <Helmet>
                        <html lang={props.locale}/>
                        <title>{pageTitle}</title>
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
    desc: PropTypes.string.isRequired
};

Wrapper.defaultProps = {
    locale: 'en',
    title: `Page title`
};
export default memo(Wrapper);