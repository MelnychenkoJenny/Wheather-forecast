import { RootStackParamList } from '@navigation';

export interface TabItemBlockPropsType {
  label: string;
  screenName: keyof RootStackParamList;
}
