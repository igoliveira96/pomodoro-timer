import { useNavigation } from '@react-navigation/native';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {TNavigationScreenProps} from '../AppRoutes';
import {Theme} from '../shared/themes/Theme';
import { MaterialIcons } from '@expo/vector-icons';
import {useState} from 'react';

export const Settings = () => {
  const navigation = useNavigation<TNavigationScreenProps>();

  const [notificationsPeriod, setNotificationPeriod] = useState(true);
  const [focusPeriod, setFocusPeriod] = useState(25);
  const [shortBreakPeriod, setShortBreakPeriod] = useState(5);
  const [longBreakPeriod, setLongBreakPeriod] = useState(15);

  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity
        style={styles.settingsButton}
        onPress={() => navigation.goBack()}
      >
        <MaterialIcons name='close' size={28} color={Theme.colors.divider} />
      </TouchableOpacity>

      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>
            Configurações
          </Text>
        </View>

        <View style={styles.formContainer}>
          <View style={styles.formFieldContainer}>
            <Text style={styles.formFieldLabel}>
              Período de foco
            </Text>

            <View style={styles.formFieldButtons}>
              <TouchableOpacity
                style={focusPeriod === 15 ? styles.primaryButton : styles.secondaryButton}
                onPress={() => setFocusPeriod(15)}
              >
                <Text style={styles.primaryButtonText}>15 min</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={focusPeriod === 25 ? styles.primaryButton : styles.secondaryButton}
                onPress={() => setFocusPeriod(25)}
              >
                <Text style={styles.primaryButtonText}>25 min</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={focusPeriod === 35 ? styles.primaryButton : styles.secondaryButton}
                onPress={() => setFocusPeriod(35)}
              >
                <Text style={styles.primaryButtonText}>35 min</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.formFieldContainer}>
            <Text style={styles.formFieldLabel}>
              Pausa curta
            </Text>

            <View style={styles.formFieldButtons}>
              <TouchableOpacity
                style={shortBreakPeriod === 3 ? styles.primaryButton : styles.secondaryButton}
                onPress={() => setShortBreakPeriod(3)}
              >
                <Text style={styles.primaryButtonText}>3 min</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={shortBreakPeriod === 5 ? styles.primaryButton : styles.secondaryButton}
                onPress={() => setShortBreakPeriod(5)}
              >
                <Text style={styles.primaryButtonText}>5 min</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={shortBreakPeriod === 7 ? styles.primaryButton : styles.secondaryButton}
                onPress={() => setShortBreakPeriod(7)}
              >
                <Text style={styles.primaryButtonText}>7 min</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.formFieldContainer}>
            <Text style={styles.formFieldLabel}>
              Pausa longa
            </Text>

            <View style={styles.formFieldButtons}>
              <TouchableOpacity
                style={longBreakPeriod === 10 ? styles.primaryButton : styles.secondaryButton}
                onPress={() => setLongBreakPeriod(10)}
              >
                <Text style={styles.primaryButtonText}>10 min</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={longBreakPeriod === 15 ? styles.primaryButton : styles.secondaryButton}
                onPress={() => setLongBreakPeriod(15)}
              >
                <Text style={styles.primaryButtonText}>15 min</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={longBreakPeriod === 20 ? styles.primaryButton : styles.secondaryButton}
                onPress={() => setLongBreakPeriod(20)}
              >
                <Text style={styles.primaryButtonText}>20 min</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.formFieldContainer}>
            <Text style={styles.formFieldLabel}>
              Notificações
            </Text>

            <View style={styles.formFieldButtons}>
              <TouchableOpacity
                style={!notificationsPeriod ? styles.primaryButton : styles.secondaryButton}
                onPress={() => setNotificationPeriod(false)}
              >
                <Text style={styles.primaryButtonText}>Desativado</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={notificationsPeriod ? styles.primaryButton : styles.secondaryButton}
                onPress={() => setNotificationPeriod(true)}
              >
                <Text style={styles.primaryButtonText}>Ativado</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    gap: 36,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  settingsButton: {
    alignSelf: 'flex-end',
  },
  titleContainer: {
    alignItems: 'center',
  },
  titleText: {
    color: Theme.colors.text,
    fontFamily: Theme.fonts.interBold,
    fontSize: Theme.fontSizes.title
  },
  primaryButton: {
    backgroundColor: Theme.colors.primary,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 55,
  },
  secondaryButton: {
    borderColor: Theme.colors.divider,
    backgroundColor: Theme.colors.divider,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 55,
  },
  primaryButtonText: {
    color: Theme.colors.text,
    fontFamily: Theme.fonts.interRegular,
    fontSize: Theme.fontSizes.body
  },
  formContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    gap: 16,
    maxWidth: 300,
    width: '100%',
  },
  formFieldContainer: {
    gap: 8,
    width: '100%',
  },
  formFieldButtons: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  formFieldLabel: {
    color: Theme.colors.text,
    fontFamily: Theme.fonts.interRegular,
    fontSize: Theme.fontSizes.label
  }
})
