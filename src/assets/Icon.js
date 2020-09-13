import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { ActiveColor, DisableColor } from "./Color";

const IconHome = <Icon name="home" size={20} color={DisableColor} />; // Defaults to regular
const IconHomeActive = <Icon name="home" size={20} color={ActiveColor} solid />;
const IconAbout = <Icon name="info" size={20} color={DisableColor} />; // Defaults to regular
const IconAboutActive = <Icon name="info" size={20} color={ActiveColor} solid />;
const IconSetting = <Icon name="user-cog" size={20} color={DisableColor} />; // Defaults to regular
const IconSettingActive = <Icon name="user-cog" size={20} color={ActiveColor} solid />;

export {IconHome, IconHomeActive, IconAbout, IconAboutActive, IconSetting, IconSettingActive}