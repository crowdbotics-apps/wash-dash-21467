import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Add-Item141384Navigator from '../features/Add-Item141384/navigator';
import Maps141380Navigator from '../features/Maps141380/navigator';
import UserProfile141376Navigator from '../features/UserProfile141376/navigator';
import Maps141305Navigator from '../features/Maps141305/navigator';
import Add-Item141304Navigator from '../features/Add-Item141304/navigator';
import Maps141300Navigator from '../features/Maps141300/navigator';
import UserProfile141296Navigator from '../features/UserProfile141296/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Add-Item141384: { screen: Add-Item141384Navigator },
Maps141380: { screen: Maps141380Navigator },
UserProfile141376: { screen: UserProfile141376Navigator },
Maps141305: { screen: Maps141305Navigator },
Add-Item141304: { screen: Add-Item141304Navigator },
Maps141300: { screen: Maps141300Navigator },
UserProfile141296: { screen: UserProfile141296Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
