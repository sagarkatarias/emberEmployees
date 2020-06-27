import Route from '@ember/routing/route';
import fetch from 'fetch';

export default class PhotosRoute extends Route {
    async model({ url }) {
        const response = await fetch(url);
        const data = await response.text();

        return data;
    }
}