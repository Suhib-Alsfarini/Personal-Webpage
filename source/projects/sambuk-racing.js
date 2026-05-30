// Sambuk Racing Project JavaScript

// PDF paths configuration
const pdfPaths = {
    'recruitment-pdf-gallery': {
        path: '../img/projects/Sambuk Racing/Marketing Materials/Recruitment Poster/',
        files: [
            'arabic-compliant-1.pdf',
            'sambuk-recruitment-poster--first-draft.pdf'
        ]
    },
    'sponsorship-pdf-gallery': {
        path: '../img/projects/Sambuk Racing/Marketing Materials/Sponsorship packages/',
        files: [
            'Non-Technical Sponsorship Propasal.pdf',
            'Technical Sponsorship Proposal .pdf'
        ]
    },
    'marketing-pdf-gallery': {
        path: '../img/projects/Sambuk Racing/Marketing Materials/',
        files: [
            'Sambuk Racing Poster.pdf',
            'Sambuk Racing Poster - QMIC Edition.pdf',
            'Poster Second page Draft.pdf'
        ]
    }
};

// Image paths configuration
const imagePaths = {
    'art-concepts-gallery': '../img/projects/Sambuk Racing/Marketing Materials/Art Concepts/',
    'race-photos-gallery': '../img/projects/Sambuk Racing/The Race/Photos/',
    'appreciation-gallery': '../img/projects/Sambuk Racing/Team Activities/Appreciation Dinner/',
    'innovation-gallery': '../img/projects/Sambuk Racing/Team Activities/Innovation Day Outreach/',
    'analysis-gallery': '../img/projects/Sambuk Racing/Team Activities/Race Analysis/',
    'workday-photos-gallery': '../img/projects/Sambuk Racing/Team Activities/Work Day/Photos/',
    'water-test-photos-gallery': '../img/projects/Sambuk Racing/Water Test/Photos/',
    'coronthia-gallery': '../img/projects/Sambuk Racing/Szilard Visit/Coronthia/',
    'e1-gallery': '../img/projects/Sambuk Racing/Szilard Visit/E1/',
    'katara-gallery': '../img/projects/Sambuk Racing/Szilard Visit/Katara/',
    'odp-gallery': '../img/projects/Sambuk Racing/Szilard Visit/ODP/',
    'performance-gallery': '../img/projects/Sambuk Racing/Szilard Visit/Performance Marine/',
    'qu-dean-gallery': '../img/projects/Sambuk Racing/Szilard Visit/QU Dean/',
    'udst-dean-gallery': '../img/projects/Sambuk Racing/Szilard Visit/UDST Dean/',
    'ceremony-gallery': '../img/projects/Sambuk Racing/After Competition Ceremony/',
    'shipment-gallery': '../img/projects/Sambuk Racing/Shipment & Items/',
    'press-gallery': '../img/projects/Sambuk Racing/Press & TV/Media Material/'
};

const videoPaths = {
    'race-videos': '../img/projects/Sambuk Racing/The Race/Videos/',
    'water-test-videos': '../img/projects/Sambuk Racing/Water Test/Videos/',
    'workday-videos': '../img/projects/Sambuk Racing/Team Activities/Work Day/Videos/',
    'press-videos': '../img/projects/Sambuk Racing/Press & TV/Media Material/'
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initializeGalleries();
    initializePDFs();
    initializeModal();
    initializeNavigation();
    setupScrollSpy();
});

// Initialize all galleries with images
function initializeGalleries() {
    Object.keys(imagePaths).forEach(galleryId => {
        const gallery = document.getElementById(galleryId);
        if (gallery) {
            loadImages(galleryId, imagePaths[galleryId]);
        }
    });

    Object.keys(videoPaths).forEach(containerId => {
        const container = document.getElementById(containerId);
        if (container) {
            loadVideos(containerId, videoPaths[containerId]);
        }
    });
}

// Initialize PDF galleries
function initializePDFs() {
    Object.keys(pdfPaths).forEach(galleryId => {
        const gallery = document.getElementById(galleryId);
        if (gallery) {
            loadPDFs(galleryId, pdfPaths[galleryId]);
        }
    });
}

// Load images from a folder (using a predefined list since we can't directly access file system)
function loadImages(galleryId, folderPath) {
    const gallery = document.getElementById(galleryId);
    if (!gallery) return;

    // Create sample image items - in production, these would be loaded from a backend
    // For now, we'll use a fallback approach that loads available images
    
    // Predefined images for each gallery
    const imagesByFolder = {
        'art-concepts-gallery': [
            'Sambuk Coming Soon.png',
            'Sambuk Early Concept.png'
        ],
        'recruitment-gallery': [],
        'sponsorship-gallery': [],
        'race-photos-gallery': [
            'Screenshot 2025-09-05 201122.png',
            'WhatsApp Image 2025-07-09 at 2.49.15 PM (10).jpeg',
            'WhatsApp Image 2025-07-09 at 2.49.15 PM (12).jpeg',
            'WhatsApp Image 2025-07-09 at 2.49.15 PM (14).jpeg',
            'WhatsApp Image 2025-07-09 at 2.49.15 PM (15).jpeg',
            'WhatsApp Image 2025-07-09 at 2.49.15 PM (17).jpeg',
            'WhatsApp Image 2025-07-09 at 2.49.15 PM (18).jpeg',
            'WhatsApp Image 2025-07-09 at 2.49.15 PM (3).jpeg',
            'WhatsApp Image 2025-07-09 at 2.49.15 PM (30).jpeg',
            'WhatsApp Image 2025-07-09 at 2.49.15 PM (38).jpeg',
            'WhatsApp Image 2025-07-09 at 2.49.15 PM (40).jpeg',
            'WhatsApp Image 2025-07-09 at 2.49.15 PM (5).jpeg',
            'WhatsApp Image 2025-07-09 at 2.49.15 PM (8).jpeg',
            'WhatsApp Image 2025-07-09 at 2.49.15 PM (9).jpeg',
            'WhatsApp Image 2025-07-09 at 2.49.15 PM.jpeg',
            'WhatsApp Image 2025-07-09 at 2.51.18 PM (2).jpeg',
            'WhatsApp Image 2025-07-09 at 2.51.18 PM.jpeg',
            'WhatsApp Image 2026-04-21 at 7.13.41 PM (1).jpeg'
        ],
        'appreciation-gallery': [
            'WhatsApp Image 2026-04-21 at 6.59.34 PM (1).jpeg',
            'WhatsApp Image 2026-04-21 at 6.59.34 PM.jpeg',
            'WhatsApp Image 2026-04-21 at 6.59.35 PM (1).jpeg',
            'WhatsApp Image 2026-04-21 at 6.59.35 PM (3).jpeg',
            'WhatsApp Image 2026-04-21 at 6.59.35 PM (4).jpeg',
            'WhatsApp Image 2026-04-21 at 6.59.35 PM.jpeg',
            'WhatsApp Image 2026-04-21 at 6.59.36 PM (1).jpeg'
        ],
        'innovation-gallery': [
            'Innovatio 1.jpeg',
            'Innovation 2.jpeg',
            'innovation 3.jpeg',
            'innovation 4.jpeg',
            'inoovation 5.jpeg',
            'WhatsApp Image 2026-04-21 at 7.11.46 PM.jpeg',
            'WhatsApp Image 2026-04-21 at 7.11.47 PM.jpeg',
            'WhatsApp Image 2026-04-21 at 7.11.48 PM (1).jpeg',
            'WhatsApp Image 2026-04-21 at 7.11.48 PM (2).jpeg',
            'WhatsApp Image 2026-04-21 at 7.11.48 PM.jpeg',
            'WhatsApp Image 2026-04-21 at 7.11.49 PM (1).jpeg',
            'WhatsApp Image 2026-04-21 at 7.11.49 PM (2).jpeg',
            'WhatsApp Image 2026-04-21 at 7.11.49 PM.jpeg',
            'WhatsApp Image 2026-04-21 at 7.11.50 PM.jpeg'
        ],
        'analysis-gallery': [
            'WhatsApp Image 2026-04-20 at 11.52.31 PM (1).jpeg',
            'WhatsApp Image 2026-04-20 at 11.52.31 PM (2).jpeg',
            'WhatsApp Image 2026-04-20 at 11.52.31 PM.jpeg'
        ],
        'workday-photos-gallery': [
            'DSC_0182.jpeg',
            'DSC_0185.jpeg',
            'DSC_0206.jpeg',
            'DSC_0229.jpeg',
            'DSC_0242.jpeg',
            'DSC_0247.jpeg',
            'DSC_0258.jpeg',
            'DSC_0260.jpeg',
            'DSC_0273.jpeg',
            'DSC_0275.jpeg',
            'DSC_0286.jpeg',
            'DSC_0292.jpeg',
            'DSC_0295.jpeg',
            'DSC_0912.jpeg',
            'WhatsApp Image 2026-04-21 at 7.07.18 PM.jpeg',
            'WhatsApp Image 2026-04-21 at 7.07.19 PM (2).jpeg',
            'WhatsApp Image 2026-04-21 at 7.07.20 PM (1).jpeg',
            'WhatsApp Image 2026-04-21 at 7.07.20 PM (2).jpeg',
            'WhatsApp Image 2026-04-21 at 7.07.20 PM (3).jpeg',
            'WhatsApp Image 2026-04-21 at 7.07.26 PM (1).jpeg',
            'WhatsApp Image 2026-04-21 at 7.07.27 PM (1).jpeg',
            'WhatsApp Image 2026-04-21 at 7.07.28 PM (1).jpeg',
            'WhatsApp Image 2026-04-21 at 7.07.33 PM (1).jpeg',
            'WhatsApp Image 2026-04-21 at 7.07.39 PM (1).jpeg',
            'WhatsApp Image 2026-04-21 at 7.07.40 PM.jpeg',
            'WhatsApp Image 2026-04-21 at 7.11.51 PM (1).jpeg'
        ],
        'water-test-photos-gallery': [
            'DSC_0702.jpeg',
            'DSC_0729.jpeg',
            'DSC_0778.jpeg',
            'hamza.jpeg',
            'OSO_9072.jpeg',
            'OSO_9079.jpeg',
            'OSO_9150.jpeg',
            'OSO_9226.jpeg',
            'OSO_9280.jpeg',
            'OSO_9288.jpeg',
            'OSO_9294.jpeg',
            'WhatsApp Image 2025-05-29 at 11.38.19 PM.jpeg',
            'WhatsApp Image 2025-05-29 at 11.38.20 PM (1).jpeg',
            'WhatsApp Image 2025-05-29 at 5.29.28 PM.jpeg',
            'WhatsApp Image 2025-05-30 at 9.01.17 AM.jpeg',
            'WhatsApp Image 2025-05-30 at 9.11.10 AM (1).jpeg',
            'WhatsApp Image 2025-05-30 at 9.11.10 AM.jpeg',
            'WhatsApp Image 2025-05-30 at 9.11.12 AM.jpeg',
            'WhatsApp Image 2026-04-20 at 11.46.04 PM.jpeg',
            'WhatsApp Image 2026-04-20 at 11.49.00 PM.jpeg',
            'WhatsApp Image 2026-04-21 at 7.03.48 PM.jpeg',
            'WhatsApp Image 2026-04-21 at 7.03.49 PM (1).jpeg',
            'WhatsApp Image 2026-04-21 at 7.03.49 PM (2).jpeg',
            'WhatsApp Image 2026-04-21 at 7.03.49 PM.jpeg',
            'WhatsApp Image 2026-04-21 at 7.03.50 PM (1).jpeg',
            'WhatsApp Image 2026-04-21 at 7.03.50 PM (2).jpeg',
            'WhatsApp Image 2026-04-21 at 7.03.50 PM (3).jpeg',
            'WhatsApp Image 2026-04-21 at 7.03.50 PM.jpeg',
            'WhatsApp Image 2026-04-21 at 7.03.51 PM (1).jpeg',
            'WhatsApp Image 2026-04-21 at 7.03.51 PM.jpeg',
            'WhatsApp Image 2026-04-21 at 7.07.13 PM (1).jpeg',
            'WhatsApp Image 2026-04-21 at 7.07.13 PM.jpeg',
            'WhatsApp Image 2026-04-21 at 7.07.24 PM.jpeg',
            'WhatsApp Image 2026-04-21 at 7.07.25 PM (1).jpeg',
            'WhatsApp Image 2026-04-21 at 7.07.25 PM.jpeg'
        ],
        'coronthia-gallery': [
            'Szilard Visit Coronthia 1.JPG',
            'Szilard Visit Coronthia 2.JPG',
            'Szilard Visit Coronthia 3.JPG',
            'Szilard Visit Coronthia 4.JPG',
            'Szilard Visit Coronthia 5.JPG'
        ],
        'e1-gallery': [
            'Szilar Visit E1.JPG',
            'Szilard Visit E1 2 .JPG',
            'Szilard Visit E1 3.jpeg',
            'Szilard Visit E1 4.jpeg'
        ],
        'katara-gallery': [
            'Szilard Visit Katara .jpeg',
            'Szilard Visit Katara.jpeg'
        ],
        'odp-gallery': [
            'Szilard Visit ODP.jpeg'
        ],
        'performance-gallery': [
            'Szilard Visit PMarine 2.JPG',
            'Szilard Visit PMarine 3.JPG',
            'Szilard Visit PMarine 4.JPG',
            'Szilard Visit PMarine 5.JPG'
        ],
        'qu-dean-gallery': [
            'Szilard Visit QU Dean .jpeg',
            'Szilard Visit QU Dean 1.jpeg',
            'Szilard Visit QU Dean 2.jpeg',
            'Szilard Visit QU Dean 3.jpeg',
            'Szilard Visit QU Dean 4.jpeg',
            'Szilard Visit QU Dean 5.jpeg'
        ],
        'udst-dean-gallery': [
            'Szilard Visit UDST Dean .jpeg'
        ],
        'ceremony-gallery': [
            'WhatsApp Image 2026-04-20 at 11.43.05 PM.jpeg',
            'WhatsApp Image 2026-04-21 at 7.01.23 PM (1).jpeg',
            'WhatsApp Image 2026-04-21 at 7.01.23 PM.jpeg',
            'WhatsApp Image 2026-04-21 at 7.01.24 PM.jpeg',
            'WhatsApp Image 2026-04-21 at 7.01.25 PM (1).jpeg',
            'WhatsApp Image 2026-04-21 at 7.01.25 PM.jpeg',
            'WhatsApp Image 2026-04-21 at 7.01.26 PM (1).jpeg',
            'WhatsApp Image 2026-04-21 at 7.01.26 PM (2).jpeg',
            'WhatsApp Image 2026-04-21 at 7.01.26 PM.jpeg',
            'WhatsApp Image 2026-04-21 at 7.01.27 PM.jpeg',
            'WhatsApp Image 2026-04-21 at 7.01.28 PM (1).jpeg',
            'WhatsApp Image 2026-04-21 at 7.01.28 PM.jpeg'
        ],
        'shipment-gallery': [
            'WhatsApp Image 2026-04-20 at 11.48.59 PM.jpeg',
            'WhatsApp Image 2026-04-20 at 11.50.14 PM (1).jpeg',
            'WhatsApp Image 2026-04-20 at 11.50.14 PM.jpeg',
            'WhatsApp Image 2026-04-21 at 7.07.33 PM.jpeg',
            'WhatsApp Image 2026-04-21 at 7.07.34 PM (1).jpeg',
            'WhatsApp Image 2026-04-21 at 7.07.35 PM.jpeg',
            'WhatsApp Image 2026-04-21 at 7.07.36 PM (1).jpeg',
            'WhatsApp Image 2026-04-21 at 7.07.36 PM.jpeg',
            'WhatsApp Image 2026-04-21 at 7.07.37 PM.jpeg',
            'WhatsApp Image 2026-04-21 at 7.07.38 PM (1).jpeg',
            'WhatsApp Image 2026-04-21 at 7.07.40 PM (3).jpeg',
            'WhatsApp Image 2026-04-21 at 7.07.41 PM.jpeg',
            'WhatsApp Image 2026-04-21 at 7.11.50 PM (1).jpeg',
            'WhatsApp Image 2026-04-21 at 7.11.50 PM (2).jpeg',
            'WhatsApp Image 2026-04-21 at 7.11.50 PM (3).jpeg',
            'WhatsApp Image 2026-04-21 at 7.11.51 PM.jpeg',
            'WhatsApp Image 2026-04-21 at 7.13.37 PM.jpeg',
            'WhatsApp Image 2026-04-21 at 7.13.38 PM.jpeg',
            'WhatsApp Image 2026-04-21 at 7.13.39 PM (1).jpeg',
            'WhatsApp Image 2026-04-21 at 7.13.39 PM (2).jpeg',
            'WhatsApp Image 2026-04-21 at 7.13.40 PM (2).jpeg',
            'WhatsApp Image 2026-04-21 at 7.13.40 PM.jpeg',
            'WhatsApp Image 2026-04-21 at 7.13.41 PM.jpeg'
        ],
        'press-gallery': []
    };

    const images = imagesByFolder[galleryId] || [];
    
    if (images.length === 0) {
        // Show placeholder for empty galleries
        const placeholder = document.createElement('div');
        placeholder.className = 'placeholder-message';
        placeholder.textContent = 'No images available in this folder';
        placeholder.style.cssText = `
            grid-column: 1 / -1;
            padding: 40px 20px;
            text-align: center;
            color: #94a3b8;
            font-style: italic;
        `;
        gallery.appendChild(placeholder);
    } else {
        images.forEach((imageName, index) => {
            const item = document.createElement('div');
            item.className = 'gallery-item';
            
            const img = document.createElement('img');
            img.src = folderPath + imageName;
            img.alt = imageName;
            img.onerror = function() {
                this.src = '../img/projects/Sambuk Racing/Sambuk Racing (WHITE) Logo.png';
            };
            
            const p = document.createElement('p');
            p.textContent = imageName.substring(0, 30) + (imageName.length > 30 ? '...' : '');
            
            item.appendChild(img);
            item.appendChild(p);
            item.addEventListener('click', () => openModal(img.src, imageName));
            
            gallery.appendChild(item);
        });
    }
}

// Load videos from a folder
function loadVideos(containerId, folderPath) {
    const container = document.getElementById(containerId);
    if (!container) return;

    // List of video files - would be dynamically loaded in production
    const videosByFolder = {
        'race-videos': [
            { name: 'Championship Race', file: 'Championship Race/ChampionShip Race.mp4' },
            { name: 'Endurance Race', file: 'Endurance race/Endurance Race .mp4' },
            { name: 'Endurance Race 2', file: 'Endurance race/Endurance Race 2 .mp4' },
            { name: 'Endurance Race 3', file: 'Endurance race/Endurance Race 3 .mp4' },
            { name: 'Opening Ceremony', file: 'Opening Ceremony/Opening Ceremony.mp4' },
            { name: 'Qualifying Laps', file: 'Qualifying Laps/Qualifying Laps .mp4' },
            { name: 'Qualifying Laps 2', file: 'Qualifying Laps/Qualifying Laps 2 .mp4' },
            { name: 'Slalom Race', file: 'Slalom Race/Salom Race .mp4' },
            { name: 'Technical Inspection 1', file: 'Technical Inspection/WhatsApp Video 2025-07-09 at 2.49.51 PM (3).mp4' },
            { name: 'Technical Inspection 2', file: 'Technical Inspection/WhatsApp Video 2025-07-09 at 2.49.51 PM (6).mp4' },
            { name: 'Technical Inspection 3', file: 'Technical Inspection/WhatsApp Video 2025-07-09 at 2.49.51 PM (8).mp4' },
            { name: 'Technical Inspection 4', file: 'Technical Inspection/WhatsApp Video 2025-07-09 at 2.49.51 PM.mp4' },
            { name: 'Technical Inspection 5', file: 'Technical Inspection/WhatsApp Video 2025-07-09 at 2.51.18 PM (14).mp4' },
            { name: 'Technical Inspection 6', file: 'Technical Inspection/WhatsApp Video 2025-07-09 at 2.51.18 PM.mp4' }
        ],
        'water-test-videos': [
            { name: 'Water Test 1', file: 'WhatsApp Video 2025-05-29 at 11.40.42 PM.mp4' },
            { name: 'Water Test 2', file: 'WhatsApp Video 2025-05-31 at 12.51.10 AM.mp4' },
            { name: 'Water Test 3', file: 'WhatsApp Video 2026-04-23 at 10.25.07 AM.mp4' },
            { name: 'Water Test 4', file: 'WhatsApp Video 2026-04-23 at 10.25.18 AM.mp4' },
            { name: 'Water Test 5', file: 'WhatsApp Video 2026-04-23 at 10.25.20 AM.mp4' },
            { name: 'Water Test 6', file: 'WhatsApp Video 2026-04-23 at 10.25.21 AM (1).mp4' },
            { name: 'Water Test 7', file: 'WhatsApp Video 2026-04-23 at 10.25.21 AM.mp4' }
        ],
        'workday-videos': [
            { name: 'Work Day Video 1', file: 'DSL_0252.mp4' },
            { name: 'Work Day Video 2', file: 'DSL_0264.mp4' },
            { name: 'Work Day Video 3', file: 'DSL_0897.mp4' },
            { name: 'Work Day Video 4', file: 'WhatsApp Video 2026-04-23 at 10.53.23 AM (1).mp4' },
            { name: 'Work Day Video 5', file: 'WhatsApp Video 2026-04-23 at 10.53.23 AM.mp4' },
            { name: 'Work Day Video 6', file: 'WhatsApp Video 2026-04-23 at 10.53.29 AM.mp4' },
            { name: 'Work Day Video 7', file: 'WhatsApp Video 2026-04-23 at 10.53.31 AM.mp4' },
            { name: 'Work Day Video 8', file: 'WhatsApp Video 2026-04-23 at 10.53.36 AM.mp4' },
            { name: 'Work Day Video 9', file: 'WhatsApp Video 2026-04-23 at 10.53.37 AM.mp4' }
        ],
        'press-videos': [
            { name: 'YCM Live Interview', file: 'Competition Live Stream/YCM Live Interview.mp4' },
            { name: 'Qatar National TV', file: 'Qatar National Television/Qatar National TV.mp4' },
            { name: 'Performance Marine Sponsor Video', file: 'Sponsors Videos/Pm.mp4' },
            { name: 'Solid State Marine Sponsor Video', file: 'Sponsors Videos/Solid State Marine.mp4' },
            { name: 'Team Video - SamBuk Monaco', file: 'Team Video/SamBuk Monaco.mp4' }
        ]
    };

    const videos = videosByFolder[containerId] || [];
    
    if (videos.length === 0) {
        const placeholder = document.createElement('div');
        placeholder.className = 'placeholder-message';
        placeholder.textContent = 'No videos available in this folder';
        placeholder.style.cssText = `
            grid-column: 1 / -1;
            padding: 40px 20px;
            text-align: center;
            color: #94a3b8;
            font-style: italic;
        `;
        container.appendChild(placeholder);
    } else {
        videos.forEach((video, index) => {
            const item = document.createElement('div');
            item.className = 'video-item';
            
            const videoWrapper = document.createElement('div');
            videoWrapper.style.cssText = `
                position: relative;
                width: 100%;
                padding-bottom: 56.25%;
                background-color: #000;
                border-radius: 8px;
                overflow: hidden;
            `;
            
            const videoElement = document.createElement('video');
            videoElement.style.cssText = `
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
            `;
            videoElement.controls = true;
            videoElement.src = folderPath + video.file;
            
            videoWrapper.appendChild(videoElement);
            
            const videoLabel = document.createElement('p');
            videoLabel.textContent = video.name;
            videoLabel.style.cssText = `
                margin-top: 10px;
                font-size: 14px;
                font-weight: 500;
                color: #1e293b;
                text-align: center;
            `;
            
            item.appendChild(videoWrapper);
            item.appendChild(videoLabel);
            container.appendChild(item);
        });
    }
}

// Load PDFs with page navigation
function loadPDFs(galleryId, pdfConfig) {
    const gallery = document.getElementById(galleryId);
    if (!gallery) return;

    const { path, files } = pdfConfig;

    if (!files || files.length === 0) {
        const placeholder = document.createElement('div');
        placeholder.className = 'placeholder-message';
        placeholder.textContent = 'No PDF files available';
        placeholder.style.cssText = `
            grid-column: 1 / -1;
            padding: 40px 20px;
            text-align: center;
            color: #94a3b8;
            font-style: italic;
        `;
        gallery.appendChild(placeholder);
        return;
    }

    files.forEach((fileName, index) => {
        const item = document.createElement('div');
        item.className = 'pdf-item';

        const pdfViewer = document.createElement('div');
        pdfViewer.className = 'pdf-viewer';
        
        const iframe = document.createElement('iframe');
        iframe.src = path + encodeURIComponent(fileName);
        iframe.title = fileName;
        iframe.style.cssText = `
            width: 100%;
            height: 100%;
            border: none;
            border-radius: 8px;
        `;
        
        pdfViewer.appendChild(iframe);

        const label = document.createElement('p');
        label.textContent = fileName.replace('.pdf', '').substring(0, 50);
        label.style.cssText = `
            margin-top: 10px;
            font-size: 14px;
            font-weight: 500;
            color: #1e293b;
            text-align: center;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        `;

        item.appendChild(pdfViewer);
        item.appendChild(label);
        gallery.appendChild(item);
    });
}

// Modal functionality
function initializeModal() {
    const modal = document.getElementById('imageModal');
    const closeBtn = document.querySelector('.modal-close');
    
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }
    
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });
    }

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
}

function openModal(src, alt) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    
    if (modalImage) {
        modalImage.src = src;
        modalImage.alt = alt;
    }
    
    if (modal) {
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal() {
    const modal = document.getElementById('imageModal');
    if (modal) {
        modal.classList.remove('show');
        document.body.style.overflow = 'auto';
    }
}

// Navigation functionality
function initializeNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Remove active class from all items
            navItems.forEach(nav => nav.classList.remove('active'));
            
            // Add active class to clicked item
            item.classList.add('active');
            
            // Scroll to section
            const targetId = item.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// Scroll spy - update active nav item based on scroll position
function setupScrollSpy() {
    const sections = document.querySelectorAll('.content-section');
    const navItems = document.querySelectorAll('.nav-item');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === '#' + current) {
                item.classList.add('active');
            }
        });
    });
}

// Lazy load images
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Toggle sidebar on mobile
const sidebarToggle = document.querySelector('.toggle-btn');
const sidebar = document.querySelector('.project-sidebar');

if (sidebarToggle && sidebar) {
    sidebarToggle.addEventListener('click', () => {
        sidebar.style.display = sidebar.style.display === 'none' ? 'block' : 'none';
    });
}

// Smooth scroll polyfill for older browsers
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
