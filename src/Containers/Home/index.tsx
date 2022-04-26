import React from 'react';
import { View, Image, ImageBackground, SafeAreaView } from 'react-native';

import { Images } from '../../Utils/images';
import { Button } from '../../Component';
import { HomeProps } from '../../Navigators/StackNavigation';
import { loginWithGoogle } from '../../Services/gooleServices';

import style from './style';
import { FULLNAME, setAsyncData, TOKEN } from '../../Utils';

const Home = ({ navigation }: HomeProps) => {
  const onPressSocialLogin = async () => {
    try {
      const response: any = await loginWithGoogle();
      await setAsyncData(TOKEN, response.user.id);
      await setAsyncData(FULLNAME, response.user.name);
      navigation.navigate('Login');
    } catch (error) {}
  };

  return (
    <SafeAreaView style={style.container}>
      <ImageBackground
        source={Images.backgroundImage}
        style={style.backgroundImage}
      >
        <View style={style.subContainer}>
          <Image source={Images.logo} style={style.logo} />
          <Button
            variant='outlined'
            label='Continue with Google'
            onPress={onPressSocialLogin}
            icon={true}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};
export default Home;
