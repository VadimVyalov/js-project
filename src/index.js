import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import './JS/slide-menu';
import './JS/calendar';
import './JS/darkmode';

const refs = {
  searchImgForm: document.querySelector('#search-form'),
};

const sectionUrl = 'section-list';

const searhParams = {
  searchString: '',
  'api-key': 'VPd8ESOXXGRNi6SUHc4QYJMXdqmRVK3K',
};

//== function
async function getData(url, timeout) {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);
  const response = await axios.get(url, {
    signal: controller.signal,
  });
  clearTimeout(id);

  return response;
}

function makeURL(params, subUrl) {
  const BASE_URL = `https://api.nytimes.com/svc/news/v3/content`;

  const urlParams = new URLSearchParams(params);

  return `${BASE_URL}/${subUrl}.json?${urlParams}`;
}

async function makeData(params, subUrl) {
  const URL = makeURL(params, subUrl);
  // console.log(URL);

  try {
    const Data = await getData(URL, 2500);

    console.log(Data.data);
    console.log(Data.data.results);
  } catch (error) {
    const msg = error.name === 'CanceledError' ? 'Get timeout' : error;
    Notify.failure(`Oops ${msg}`);
  }
}

makeData(searhParams, sectionUrl);
