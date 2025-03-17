import React from 'react';

import { ReactComponent as Chat } from "../../assets/svg/Chat.svg";
import { ReactComponent as ContentPaste } from "../../assets/svg/ContentPaste.svg";
import { ReactComponent as Hat } from "../../assets/svg/Hat.svg";
import { ReactComponent as Heart } from "../../assets/svg/Heart.svg"
import { ReactComponent as Help } from "../../assets/svg/Help.svg"
import { ReactComponent as Home } from "../../assets/svg/Home.svg"
import { ReactComponent as Login } from "../../assets/svg/Login.svg"
import { ReactComponent as Profile } from "../../assets/svg/Profile.svg"
import { ReactComponent as Setting } from "../../assets/svg/Setting.svg"
import { ReactComponent as Shop } from "../../assets/svg/Shop.svg"
import { ReactComponent as Star } from "../../assets/svg/Star.svg"
import { ReactComponent as Time } from "../../assets/svg/Time.svg"
import { ReactComponent as Vector } from "../../assets/svg/Vector.svg"
import { ReactComponent as Public } from "../../assets/svg/Public.svg"

const IconWidget = (props) => {
    let html = '';

    switch (props.icon) {
        case "Chat" :
            html = <Chat className={props.className} />;
            break;
        case "ContentPaste" :
            html = <ContentPaste className={props.className} />;
            break;
        case "Hat" :
            html = <Hat className={props.className} />;
            break;
        case "Heart" :
            html = <Heart className={props.className} />;
            break;
        case "Help" :
            html = <Help className={props.className} />;
            break;
        case "Home" :
            html = <Home className={props.className} />;
            break;
        case "Login" :
            html = <Login className={props.className} />;
            break;
        case "Profile" :
            html = <Profile className={props.className} />;
            break;
        case "Setting" :
            html = <Setting className={props.className} />;
            break;
        case "Shop" :
            html = <Shop className={props.className} />;
            break;
        case "Star" :
            html = <Star className={props.className} />;
            break;
        case "Time" :
            html = <Time className={props.className} />;
            break;
        case "Vector" :
            html = <Vector className={props.className} />;
            break;
        case "Pubilc" :
            html = <Public className={props.className} />;
            break;
    }

    return html;

};

export default IconWidget;