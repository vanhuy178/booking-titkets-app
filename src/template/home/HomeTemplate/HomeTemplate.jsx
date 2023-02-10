import { Fragment, useEffect } from "react";
import { Route } from "react-router-dom";
import HomeMenu from "./HomeMenu";
import Header from "../Layout/Header/Header";
import HomeCarousel from "../Layout/HomeCarousel/HomeCarousel";

export const HomeTemplate = (props) => { // props contains path, exact, component
    const { Component, ...restProps } = props; // destructuring Components props and the rest part
    return (<Route {...restProps}
        // This is middle component for helping me render Ui
        render={propRoute => { // props don't use when we don't want to redirect the page
            // props.location, props.history, props.match
            return (
                <Fragment>
                    <Header {...propRoute} />
                    <HomeCarousel  {...propRoute} />
                    <Component {...propRoute} />
                    <HomeMenu />
                    <footer>
                        đây là footer pages
                    </footer>
                </Fragment>
            )

        }
        }
    />)
}
