import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, View, ImageBackground, Alert } from 'react-native';

import { Images } from '../../Utils/images';
import { signOut } from '../../Services/gooleServices';
import style from './style';

import { Button, Header } from '../../Component';
import { DashboardProps } from '../../Navigators/StackNavigation';
import { AGE, FULLNAME, getAsyncData } from '../../Utils';

const Dashboard = ({ navigation, route }: DashboardProps) => {
  const [name, setName] = useState<any>('');
  const [age, setAge] = useState<any>();

  useEffect(() => {
    (async () => {
      const fullname = await getAsyncData(FULLNAME);
      const age = await getAsyncData(AGE);
      setName(fullname);
      setAge(age);
    })();
  }, []);

  return (
    <SafeAreaView style={style.container}>
      <Header title="User Details" />
      <ImageBackground
        source={Images.backgroundImage}
        style={style.backgroundImage}
      >
        <View style={style.mainContainer}>
          <View style={style.formView}>
            <View style={style.userContainer}>
              <Text style={style.labelText}>Full Name:</Text>
              <Text style={style.textValue}>{name}</Text>
            </View>
            <View style={style.userContainer}>
              <Text style={[style.labelText]}>Age:</Text>
              <Text style={style.textValue}>{age}</Text>
            </View>
          </View>
          <Button
            label="Sign Out"
            onPress={signOut}
            customStyle={style.button}
            icon={false}
            variant="contained"
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};
export default Dashboard;
