// content.js
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.message === "scrape_zillow") {
      zillow_scraper();
    }
  }
);

function zillow_scraper() {
  let propertyDetails = {};

  propertyDetails.address = document.querySelector('.ds-address-container').innerText;
  propertyDetails.price = document.querySelector('.ds-summary-row').innerText;
  propertyDetails.bedrooms = document.querySelector('.ds-bed-bath-living-area-container').children[0].innerText;
  propertyDetails.bathrooms = document.querySelector('.ds-bed-bath-living-area-container').children[1].innerText;
  propertyDetails.squareFeet = document.querySelector('.ds-bed-bath-living-area-container').children[2].innerText;
  propertyDetails.description = document.querySelector('.ds-overview-section').innerText;

  chrome.runtime.sendMessage({"message": "zillow_data", "data": propertyDetails});
}