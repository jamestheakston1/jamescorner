const ORIGINAL_GIF_SRC = "construction.gif";
const PAUSED_GIF_SRC = "https://placehold.co/150x150/000000/FFFFFF?text=PAUSED";
let isGifPaused = false; 
let isMarqueeTicking = true; 
let targetExternalUrl = ''; 

function showWarningModal(url, displayUrl) {
    targetExternalUrl = url;
    document.getElementById('retroModalOverlay').style.display = 'flex';
    document.getElementById('continueButton').textContent = `Continue (${displayUrl})`;
}

function hideWarningModal() {
    document.getElementById('retroModalOverlay').style.display = 'none';
}

function showThanksModal() {
    document.getElementById('thanksModalOverlay').style.display = 'flex';
}

function hideThanksModal() {
    document.getElementById('thanksModalOverlay').style.display = 'none';
}

function showHostingModal() {
    document.getElementById('hostingModalOverlay').style.display = 'flex';
}

function hideHostingModal() {
    document.getElementById('hostingModalOverlay').style.display = 'none';
}

function showCreditsModal() {
    document.getElementById('creditsModalOverlay').style.display = 'flex';
}

function hideCreditsModal() {
    document.getElementById('creditsModalOverlay').style.display = 'none';
}

function showStatsModal() {
    document.getElementById('statsModalOverlay').style.display = 'flex';
}

function hideStatsModal() {
    document.getElementById('statsModalOverlay').style.display = 'none';
}

function continueToExternalLink() {
    hideWarningModal();
    showThanksModal();
    
    setTimeout(() => {
        if (targetExternalUrl) {
            window.open(targetExternalUrl, '_blank'); 
        }
        hideThanksModal();
        targetExternalUrl = ''; 
    }, 2000); 
}

function toggleGifAnimation() {
    const gif = document.getElementById('constructionGif');
    const button = document.getElementById('gifToggleButton');

    if (!gif || !button) return;

    if (!isGifPaused) {
        gif.src = PAUSED_GIF_SRC;
        button.textContent = 'Play Animation';
        isGifPaused = true;
    } else {
        gif.src = ORIGINAL_GIF_SRC;
        button.textContent = 'Pause Animation';
        isGifPaused = false;
    }
}

function toggleMarquee() {
    const marquee = document.getElementById('mainMarquee');
    const button = document.getElementById('marqueeToggleButton');
    
    if (!marquee || !button) return;

    if (isMarqueeTicking) {
        marquee.stop(); 
        button.textContent = 'Play Marquee';
        isMarqueeTicking = false;
    } else {
        marquee.start();
        button.textContent = 'Pause Marquee';
        isMarqueeTicking = true;
    }
}

function updateMarqueeCountdown() {
    const marqueeSpan = document.getElementById('countdownText');
    
    if (marqueeSpan) {
        marqueeSpan.textContent = '[!!] NEW CONTENT COMING SOON [!!]';
    }
}

window.onload = function() {
    const githubUrl = 'https://github.com/manchesterjames-cpu/jamescorner';

    const wixLink = document.getElementById('wixLink');
    if (wixLink) {
        wixLink.addEventListener('click', function(event) {
            event.preventDefault(); 
            showWarningModal('https://www.wix.com', 'https://www.wix.com');
        });
    }
    
    const viewSourceLink = document.getElementById('viewSourceLink');
    if (viewSourceLink) {
        viewSourceLink.addEventListener('click', function(event) {
            event.preventDefault(); 
            showWarningModal(githubUrl, 'https://github.com');
        });
    }

    updateMarqueeCountdown();
};
