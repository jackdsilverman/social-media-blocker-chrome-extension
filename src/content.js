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
    const currentUrl = window.location.href;
    const homeFeed = document.getElementById('primary');
    if (currentUrl === ('https://www.youtube.com/') && homeFeed) {
        homeFeed.style.display = 'none'; // Hides the YouTube home feed
    }

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

    const shorts = document.querySelectorAll('ytm-shorts-lockup-view-model-v2')
    shorts.forEach((short) => {
        short.style.display = 'none'; // Hides YouTube Shorts
    });

    const shortVideo = document.querySelector('#shorts-container');
    if (shortVideo) {
        shortVideo.style.display = 'none'; // Hides YouTube Shorts on the video page
        document.querySelectorAll("video").forEach(vid => vid.pause());
    }

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