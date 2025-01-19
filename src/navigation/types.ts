import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type NavigationProps = StackNavigationProp<
  RootStackParamList,
  'SearchScreen'
>;
export type SearchScreenRouteProp = RouteProp<
  RootStackParamList,
  'SearchScreen'
>;

export type RootStackParamList = {
  StartScreen: undefined;
  SearchScreen: { city?: string; latitude?: number; longitude?: number };
};
