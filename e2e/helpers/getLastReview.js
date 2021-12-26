const getLastReview = async (I) => {
  const reviewerName = await I.executeScript(() => {
    const reviewList = document.querySelectorAll('review-card');
    const lastReviewCard = reviewList[reviewList.length - 1];
    const name = lastReviewCard.shadowRoot.querySelector('.review-content__name').innerHTML;
    return name;
  });
  return reviewerName;
};

module.exports = { getLastReview };
