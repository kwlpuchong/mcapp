import {
  FOREGROUND,
  BACKGROUND,
  INACTIVE
} from 'redux-enhancer-react-native-appstate';
import NavigationService from '../service/NavigationService';
import { voca } from '../util/global';
import {
  APPSTATE_BACKGROUND,
  APPSTATE_FOREGROUND,
  APPSTATE_INACTIVE
} from '../util/constants';

const AppStateReducer = (state = '', action) => {
  switch (action.type) {
    case FOREGROUND:
      if (
        !voca.isBlank(state) &&
        APPSTATE_BACKGROUND.localeCompare(state) == 0
      ) {
        console.log('back to foreground[state]:' + state);
        NavigationService.navigate('Auth');
      }
      return APPSTATE_FOREGROUND;
    case BACKGROUND:
      console.log('keep in background[state]:' + state);
      return APPSTATE_BACKGROUND;
    case INACTIVE:
      console.log('inactive[state]:' + state);
      return APPSTATE_INACTIVE;
    default:
      return state;
  }
};

export default AppStateReducer;
