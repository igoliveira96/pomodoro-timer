import { useNavigation } from '@react-navigation/native';
import {Text, TouchableOpacity, View} from 'react-native';
import {TNavigationScreenProps} from '../AppRoutes';

export const Home = () => {
  const navigation = useNavigation<TNavigationScreenProps>();

  return (
    <View>
      <Text style={{fontFamily: 'InterRegular'}}>
        Home page
      </Text>

      <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
        <Text>Settings</Text>
      </TouchableOpacity>
    </View>
  );
};
