```javascript
function scrapeZillowData() {
    let homeData = {};
    try {
        homeData.address = document.querySelector('.ds-address-container').innerText;
        homeData.price = document.querySelector('.ds-summary-row').innerText;
        homeData.bedrooms = document.querySelector('.ds-bed-bath-living-area-container').children[0].innerText;
        homeData.bathrooms = document.querySelector('.ds-bed-bath-living-area-container').children[1].innerText;
        homeData.squareFeet = document.querySelector('.ds-bed-bath-living-area-container').children[2].innerText;
        homeData.description = document.querySelector('.ds-overview-section').innerText;
        homeData.propertyDetails = document.querySelector('.ds-home-facts-and-features').innerText;
    } catch (error) {
        console.error('Error scraping data from Zillow:', error);
    }
    return homeData;
}

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.message === "scrape_zillow_data") {
            let data = scrapeZillowData();
            sendResponse({data: data});
        }
    }
);
```