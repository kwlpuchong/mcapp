import React from 'react';
import {
  AsyncStorage,
  Button,
  StyleSheet,
  View,
  ImageBackground,
  Text
} from 'react-native';
import { connect } from 'react-redux';
import { loginUser } from '../actions';
import t from 'tcomb-form-native';

const LoginForm = t.form.Form;
const loginModel = t.struct({
  username: t.String,
  password: t.String
});
const loginStyles = {
  ...LoginForm.stylesheet,
  controlLabel: {
    normal: {
      color: 'blue',
      fontSize: 18,
      fontWeight: '600'
    }
  }
};
const loginOptions = {
  fields: {
    username: {
      label: 'USERNAME'
    },
    password: {
      label: 'PASSWORD'
    }
  },
  stylesheet: loginStyles
};

class LoginScreen extends React.Component {
  static navigationOptions = {
    title: 'Please login in'
  };

  constructor(props) {
    super(props);
  }

  onLoginPress = () => {
    username = this.loginRef.getValue().username;
    password = this.loginRef.getValue().password;

    this.props.loginUser(username, password);
  };

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('../assets/appBackground.png')}
          style={styles.imageBackground}
        >
          <Text style={styles.textMcollect}>{'mCollect'}</Text>
          <Text style={styles.textFieldCollections}>{'Field Collections'}</Text>
          <Text style={styles.textAuth}>{this.props.desc}</Text>
          <LoginForm
            ref={c => (this.loginRef = c)}
            type={loginModel}
            options={loginOptions}
          />
          <Button title="Login" text="login" onPress={this.onLoginPress} />
        </ImageBackground>
      </View>
    );
  }

  _LoginAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('App');
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  imageBackground: {
    flex: 1,
    width: '100%',
    height: '100%'
  },
  textMcollect: {
    color: 'white',
    fontSize: 36,
    fontWeight: '600'
  },
  textFieldCollections: {
    color: '#FFFFFF99',
    fontSize: 36,
    fontWeight: '300'
  },
  textAuthDesc: {
    color: '#FFFFFF99',
    fontSize: 36,
    fontWeight: '300'
  }
});

mapStateToProps = state => {
  return state.auth;
};

export default connect(
  mapStateToProps,
  { loginUser }
)(LoginScreen);
