function generateDescription(homeData) {
    let description = "";

    // Add basic information
    description += `This is a ${homeData.bedrooms} bedroom, ${homeData.bathrooms} bathroom home located in ${homeData.location}. `;

    // Add price information
    description += `It is currently listed for ${homeData.price}. `;

    // Add square footage if available
    if (homeData.squareFootage) {
        description += `The home spans ${homeData.squareFootage} square feet. `;
    }

    // Add lot size if available
    if (homeData.lotSize) {
        description += `It sits on a lot of ${homeData.lotSize} square feet. `;
    }

    // Add year built if available
    if (homeData.yearBuilt) {
        description += `This home was built in ${homeData.yearBuilt}. `;
    }

    // Add additional features if available
    if (homeData.additionalFeatures && homeData.additionalFeatures.length > 0) {
        description += "Additional features include: " + homeData.additionalFeatures.join(", ") + ". ";
    }

    // Add Zillow URL for more information
    description += `For more information, visit ${homeData.url}.`;

    return description;
}