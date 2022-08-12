import grabber from './grabber';
import initialLoad from './initialLoad';

export function reload() {
    grabber('list-contents').appendChild(initialLoad());
}