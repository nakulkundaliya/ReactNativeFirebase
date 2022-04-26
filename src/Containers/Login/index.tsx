import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, View, ImageBackground } from 'react-native';
import { Images } from '../../Utils/images';
import { useDispatch } from 'react-redux';
import { AddUserDetails } from '../../Redux/action';
import { Button, Header, InputField } from '../../Component';
import { LoginProps } from '../../Navigators/StackNavigation';
import style from './style';
import { AGE, FULLNAME, getAsyncData, setAsyncData } from '../../Utils';

const Login = ({ navigation, route }: LoginProps) => {
  const [name, setName] = useState<string>('');
  const [age, setAge] = useState<number>();

  const dispatch = useDispatch();

  const addUserData = async () => {
    dispatch(AddUserDetails({ name, age }));
    await setAsyncData(AGE, age);
  };

  const onPressLeft = () => navigation.goBack();

  useEffect(() => {
    (async () => {
      const fullname = await getAsyncData(FULLNAME);
      setName(fullname);
    })();
  }, []);

  return (
    <SafeAreaView style={style.container}>
      <Header
        onPressLeft={onPressLeft}
        leftIcon={Images.backIcon}
        title="Welcome Page"
      />
      <ImageBackground source={Images.backgroundImage} style={style.backGround}>
        <View style={style.mainContainer}>
          <Text style={style.labelText}>Full Name :</Text>
          <InputField
            style={style.input}
            value={name}
            onChangeText={(val) => setName(val as string)}
            placeholder="Full Name"
          />
          <Text style={[style.labelText, { marginRight: 200 }]}>Age :</Text>
          <InputField
            style={style.input}
            value={age}
            onChangeText={(age) => setAge(age as number)}
            placeholder="Age"
          />
          <Button
            variant="contained"
            customStyle={style.button}
            label="Submit"
            onPress={addUserData}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};
export default Login;
