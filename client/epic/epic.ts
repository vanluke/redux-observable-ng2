import { 
  loginEpic,
} from '../auth/epics';
import { combineEpics, Epic } from 'redux-observable';

export default combineEpics(
  loginEpic as Epic<{}, {}>,
) as Epic<{}, {}>;