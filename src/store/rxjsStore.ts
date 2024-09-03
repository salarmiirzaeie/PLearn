import {BehaviorSubject} from 'rxjs';

const LanguageGlobalStore = new BehaviorSubject('German');
const setAppLanguage = (counter: string) => LanguageGlobalStore.next(counter);
const getAppLanguage = () => {
  return LanguageGlobalStore;
};

export const rxjsStore = {
  setAppLanguage,
  getAppLanguage,
};
