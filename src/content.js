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

    const shorts = Array.from(document.querySelectorAll('#endpoint')).filter(
        (el) => el.textContent.trim() === 'Shorts'
    );
    shorts.forEach((short) => {
        const shortsSection = short.closest('ytd-rich-section-renderer');
        if (shortsSection) {
            shortsSection.style.display = 'none';
        }
    });

    const shortsTabs = Array.from(document.querySelectorAll('#endpoint')).filter(
        (el) => el.textContent.trim() === 'Shorts'
    );
    shortsTabs.forEach((shortsTab) => {
        const shortsTabSection = shortsTab.closest('ytd-mini-guide-entry-renderer') ||
            shortsTab.closest('ytd-guide-entry-renderer');
        if (shortsTabSection) {
            shortsTabSection.style.display = 'none';
        }
    });

    const miniGuideEntries = document.querySelectorAll('ytd-mini-guide-entry-renderer');
    miniGuideEntries.forEach((entry) => {
        if (entry.getAttribute('aria-label') === 'Shorts' || entry.textContent.includes('Shorts')) {
            entry.style.display = 'none';
        }
    });

    const dismissables = document.querySelectorAll('#dismissible');
    dismissables.forEach((dismissable) => {
        if (dismissable.textContent.includes('Shorts')) {
            dismissable.style.display = 'none';
        }
    });

    const shortsItems = document.querySelectorAll('#items');
    shortsItems.forEach((item) => {
        if (item.textContent.includes('Shorts')) {
            item.style.display = 'none';
        }
    });

    const contents = document.querySelectorAll('#contents');
    contents.forEach((item) => {
        if (item.textContent.includes('Shorts')) {
            item.style.display = 'none';
        }
    });

    const ads = document.querySelectorAll('ytd-ad-slot-renderer, .ytp-ad-module');
    ads.forEach((ad) => {
        ad.style.display = 'none'; // Hides YouTube Ads
    });
}


// Use MutationObserver to monitor DOM changes
const observer = new MutationObserver(() => {
    const url = window.location.href;

    if (url.includes('facebook.com')) {
        hideFacebookContent();
    } else if (url.includes('youtube.com')) {
        hideYouTubeContent();
    }
});

// Start observing the document body for changes
observer.observe(document.body, { childList: true, subtree: true });