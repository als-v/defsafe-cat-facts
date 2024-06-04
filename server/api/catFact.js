import { eventHandler } from 'h3';
import fetch from 'node-fetch';

let cachedFacts = [];

export default eventHandler(async (event) => {

  try {
    
    // cache data is not empty
    if (cachedFacts.length > 0) {
        return { fact: cachedFacts.pop() };
    }

    // max data is 90
    const response = await fetch('https://meowfacts.herokuapp.com/?count=90');
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    // get data and save into cache
    const data = await response.json();
    cachedFacts = data.data;

    return { fact: cachedFacts.pop() };
  } catch (error) {
    console.error('Error fetching cat facts:', error);
    return { error: 'Error fetching cat facts' };
  }
});