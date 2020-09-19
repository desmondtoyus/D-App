import React, {memo} from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

function Footer(props) {
    return (
        <footer className="nb-footer" data-testid='nb-footer'>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="about">
                            <p>Experienced JavaScript Developer with over seven years’ experience developing scalable,
                                 high-performance, and responsive web applications. Worked on numerous projects 
                                 in various roles, built business-critical applications while balancing various concerns 
                                 including cost, development time, and code quality. </p>

                            <div className="social-media">
                                <ul className="list-inline">
                                <li>
                                    <a href='https://www.linkedin.com/in/desmondademiluyi/' target='_blank' data-testid='linkedin'><i className="fa fa-linkedin"></i></a>
                                    </li>
                                    <li>
                                        <a href='https://www.facebook.com/ademiluyi.toye' target='_blank' data-testid='facebook'><i className="fa fa-facebook"></i></a>
                                    </li>
                                    <li>
                                    <a href='https://github.com/desmondtoyus' target='_blank' data-testid='github'><i className="fa fa-github"></i></a>
                                    </li>
                                    <li>
                                    <a href='https://twitter.com/arewethere_yt' target='_blank' data-testid='twitter'><i className="fa fa-twitter"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <section className="copyright">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-offset-4 col-sm-4 col-sm-offset-4">
                            <p>Copyright &copy; {new Date().getFullYear()}. Desmond Ademiluyi. </p>
                        </div>
                    </div>
                </div>
            </section>
        </footer>
    )
}

export default memo(Footer)