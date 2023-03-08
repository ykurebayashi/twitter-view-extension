// This function creates a Promise that will be resolved after the number of milliseconds
const delay = (ms) => new Promise((res) => setTimeout(res, ms));

const deleteViews = async function () {
  // Waits 2 seconds before running
  await delay(2000);

  // Gets the twitter main feed
  const twitterFeed = document.querySelector('[role="main"]');

  // Inside the twitter feed, everytime a node is inserted
  twitterFeed.addEventListener('DOMNodeInserted', (e) => {
    // If the newly inserted node has a a data-testid of 'cellInnerDiv'
    if (e.target.dataset.testid === 'cellInnerDiv') {
      // Get the new code view element, which is an anchor tag that is child of a div with role group and article with role article.
      const tweetViews = document.querySelectorAll(
        'article[role=article] div[role=group] a[role=link]'
      );
      // And remove this element
      tweetViews.forEach((tweet) => tweet.parentNode.remove());
    }
  });
};
deleteViews();
