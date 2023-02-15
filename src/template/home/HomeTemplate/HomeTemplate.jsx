import { Fragment, useEffect } from "react";
import { Route } from "react-router-dom";
import Header from "../Layout/Header/Header";
import Footer from "../Layout/Footer/Footer";

export const HomeTemplate = (props) => { // props contains path, exact, component
    const { Component, ...restProps } = props; // destructuring Components props and the rest part

    useEffect(() => {
        window.scroll(0, 0)
    })
    return (<Route {...restProps}
        // This is middle component for helping me render Ui
        render={propRoute => { // props don't use when we don't want to redirect the page
            // props.location, props.history, props.match
            return (
                <Fragment>
                    {/* MAIN LAYOUT */}
                    {/* HEADER */}
                    <Header {...propRoute} />

                    {/* THE BODY USING REDIRECT IN APP.JS */}
                    <Component {...propRoute} />

                    {/* FOOTER */}
                    <Footer />
                </Fragment>
            )

        }
        }
    />)
}
