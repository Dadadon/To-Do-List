import grabber from './grabber';
import initialLoad from './initialLoad';

const reload = () => {
  grabber('list-contents').appendChild(initialLoad());
};
export default reload;
