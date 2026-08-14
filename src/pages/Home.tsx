import { useNavigation } from '@react-navigation/native';
import {Text, TouchableOpacity, View} from 'react-native';
import {TNavigationScreenProps} from '../AppRoutes';
import {Theme} from '../shared/themes/Theme';

export const Home = () => {
  const navigation = useNavigation<TNavigationScreenProps>();

  return (
    <View>
      <Text style={{
        fontFamily: 'InterRegular',
        fontSize: 52,
        color: Theme.colors.text,
      }}>
        Home page
      </Text>

      <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
        <Text>Settings</Text>
      </TouchableOpacity>
    </View>
  );
};
