import { Fragment, useEffect } from "react";
import { Redirect, Route } from "react-router-dom";
import { USER_LOGIN } from "../../../utils/settings/config";

export const CheckoutTemplate = (props) => { // props contains path, exact, component
    const { Component, ...restProps } = props; // destructuring Components props and the rest part

    /**
    * PEOPLE MUST LOGIN SUCCESSFULLY IF THEY WANT TO ACCESS CHECKOUT TEMPLATE, ELSE THEY WILL REDIRECT TO LOGIN PAGE
    *
    * 
    */
    useEffect(() => {
        window.scroll(0, 0)
    })

    if (!localStorage.getItem(USER_LOGIN)) {
        return <Redirect to='/login' />
    }
    else {
        return (<Route {...restProps}
            // This is middle component for helping me render Ui
            render={propRoute => { // props don't use when we don't want to redirect the page
                // props.location, props.history, props.match
                return (
                    <Fragment>
                        {/* WE JUST NEED A COMPONENT FOR CHECKOUTTEMPLATE */}
                        {/* THE BODY USING REDIRECT IN APP.JS */}
                        <Component {...propRoute} />
                    </Fragment>
                )

            }
            }
        />
        )
    }
}