document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('generate').addEventListener('click', generateDescription);
});

function generateDescription() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {action: "generateDescription"}, function(response) {
            document.getElementById('description').innerText = response.description;
        });
    });
}