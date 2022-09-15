import { View, ActivityIndicator } from 'react-native';

// Theme
import {THEME} from '../../theme';

// Component Style
import { styles } from './styles';

export function Loading() {
  return (
    <View style={styles.container}>
        <ActivityIndicator color={THEME.COLORS.PRIMARY}/>
    </View>
  );
}