function hideFacebookContent() {
    const newsFeed = document.querySelector('[role="feed"]');
    if (newsFeed) {
        newsFeed.style.display = 'none'; // Hides the Facebook news feed
    }

    const reels = document.querySelector('[aria-label="Reels"]');
    if (reels) {
        reels.style.display = 'none'; // Hides Facebook Reels
    }

    const stories = document.querySelector('[aria-label="Stories"]');
    if (stories) {
        stories.style.display = 'none'; // Hides Facebook Stories
    }
}

function hideYouTubeContent() {
    const homeFeed = document.getElementById('contents');
    if (homeFeed) {
        homeFeed.style.display = 'none'; // Hides the YouTube home feed
    }

    const shorts = Array.from(document.querySelectorAll('#endpoint')).find(
        (el) => el.textContent.trim() === 'Shorts'
    );
    if (shorts) {
        const shortsSection = shorts.closest('ytd-rich-section-renderer');
        if (shortsSection) {
            shortsSection.style.display = 'none'; // Hides YouTube Shorts section
        }
    }

    const shortsTab = Array.from(document.querySelectorAll('#endpoint')).find(
        (el) => el.textContent.trim() === 'Shorts'
    );
    if (shortsTab) {
        shortsTab.style.display = 'none'; // Hides the Shorts tab in the navigation bar
    }

    const ads = document.querySelectorAll('ytd-ad-slot-renderer, .ytp-ad-module');
    ads.forEach((ad) => {
        ad.style.display = 'none'; // Hides YouTube Ads
    });
}

function hideLinkedInContent() {
    const feed = document.querySelector('.scaffold-finite-scroll__content');
    if (feed) {
        feed.style.display = 'none'; // Hides the LinkedIn feed
    }
}

// Use MutationObserver to monitor DOM changes
const observer = new MutationObserver(() => {
    const url = window.location.href;

    if (url.includes('facebook.com')) {
        hideFacebookContent();
    } else if (url.includes('youtube.com')) {
        hideYouTubeContent();
    } else if (url.includes('linkedin.com')) {
        hideLinkedInContent();
    }
});

// Start observing the document body for changes
observer.observe(document.body, { childList: true, subtree: true });