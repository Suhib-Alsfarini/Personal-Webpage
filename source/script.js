// Sidebar Collapse/Expand functionality
document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.getElementById('sidebar');
    const sidebarToggle = document.getElementById('sidebar-toggle');
    const expandBtn = document.getElementById('sidebar-expand-btn');

    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            sidebar.classList.toggle('collapsed');
            document.body.classList.toggle('sidebar-collapsed');
        });
    }

    if (expandBtn) {
        expandBtn.addEventListener('click', function() {
            sidebar.classList.remove('collapsed');
            document.body.classList.remove('sidebar-collapsed');
        });
    }
});

// Navigation functionality
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.content-section');

// Mobile menu toggle functionality
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                mobileMenuToggle.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 768 && 
            !mobileMenuToggle.contains(e.target) && 
            !navMenu.contains(e.target)) {
            mobileMenuToggle.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
}

// Helper function to activate a section (removes redundancy)
function activateSection(sectionId, updateHistory = false) {
    const targetSection = document.getElementById(sectionId);
    const targetLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
    
    if (targetSection && targetLink) {
        // Remove active class from all
        navLinks.forEach(l => l.classList.remove('active'));
        sections.forEach(s => s.classList.remove('active'));
        
        // Activate target
        targetLink.classList.add('active');
        targetSection.classList.add('active');
        
        // Control the window's scroll bar directly
        if (window.innerWidth > 768) {
            // Desktop/Laptop: Use precise scroll control
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        } else {
            // Mobile/Phone: Use scrollIntoView
            window.scrollTo({
                top: 720, // scroll to just below the fixed header
                behavior: 'smooth'
            });
        }

        // Update URL if needed (for click events, not for page load)
        if (updateHistory) {
            history.pushState(null, null, '#' + sectionId);
        }
    }
}

// Handle navigation clicks
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        activateSection(targetId, true);
    });
});

// Media toggle (Photos/Videos) - works for all phases
function initMediaToggleButtons(){
    document.querySelectorAll('.race-toggle').forEach(toggle => {
        const btns = toggle.querySelectorAll('.race-toggle-btn');
        btns.forEach(btn => {
            btn.addEventListener('click', () => {
                const parentPhase = btn.closest('.phase-content');
                if (!parentPhase) return;

                // update button states
                btns.forEach(b => {
                    const active = b === btn;
                    b.classList.toggle('active', active);
                    b.setAttribute('aria-pressed', active ? 'true' : 'false');
                });

                const targetId = btn.getAttribute('data-target');
                if (!targetId) return;

                // show target and hide other media sections (photos/videos/presentations/years) within the same phase
                parentPhase.querySelectorAll('[id$="-photos-section"], [id$="-videos-section"], [id$="-final-section"], [id$="-first-section"], [id$="-2025-section"], [id$="-2026-section"]').forEach(el => {
                    el.style.display = (el.id === targetId) ? 'block' : 'none';
                });
            });
        });
    });
}

document.addEventListener('DOMContentLoaded', initMediaToggleButtons);

// Handle page load with hash in URL, if the user edits the URL manually or uses back/forward buttons
function loadSectionFromHash() {
    const hash = window.location.hash;
    if (hash) {
        const targetId = hash.substring(1);
        activateSection(targetId, false);
    } else {
        // Default to About section if no hash is present
        activateSection('about', false);
    }
}

// Load section on page load and handle browser back/forward buttons
loadSectionFromHash();
window.addEventListener('hashchange', loadSectionFromHash);

// Disabling right-click context menu
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

// Disabling text selection
document.addEventListener('selectstart', function(e) {
    e.preventDefault();
});

// Disabling drag and drop for images and media
document.addEventListener('dragstart', function(e) {
    e.preventDefault();
});

// Project Filter Functionality
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCategories = document.querySelectorAll('.project-category-card');

// Ensure all categories are visible on page load
projectCategories.forEach(cat => {
    cat.classList.remove('hidden');
    cat.style.display = 'block';
});

// Project navigation (projects list + phases)
const projectNavButtons = document.querySelectorAll('.project-nav-btn');
const projectContents = document.querySelectorAll('.project-content');
const phaseTabs = document.querySelectorAll('.phase-tab');
const phaseContents = document.querySelectorAll('.phase-content');

function showProject(projectKey) {
    // update nav buttons
    projectNavButtons.forEach(btn => btn.classList.toggle('active', btn.getAttribute('data-project') === projectKey));
    // show matching project content
    projectContents.forEach(content => {
        const id = content.id.replace('-content', '');
        if (id === projectKey) {
            content.style.display = 'block';
            content.classList.add('active');
        } else {
            content.style.display = 'none';
            content.classList.remove('active');
        }
    });
}

projectNavButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const projectKey = btn.getAttribute('data-project');
        showProject(projectKey);
        // reset to first phase of the project (if any)
        const projectEl = document.getElementById(projectKey + '-content');
        if (projectEl) {
            const firstTab = projectEl.querySelector('.phase-tab');
            if (firstTab) firstTab.click();
        }
    });
});

// Phase tab switching (works per project and club)
phaseTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const projectSection = tab.closest('.project-content') || tab.closest('.club-content');
        if (!projectSection) return;
        const phase = tab.getAttribute('data-phase');

        // deactivate sibling tabs
        projectSection.querySelectorAll('.phase-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        // hide/show phase contents inside this project/club
        projectSection.querySelectorAll('.phase-content').forEach(pc => {
            if (pc.id === phase) {
                pc.style.display = 'block';
                pc.classList.add('active');
            } else {
                pc.style.display = 'none';
                pc.classList.remove('active');
            }
        });
    });
});

// Initialize: ensure default project and phase are visible
document.addEventListener('DOMContentLoaded', () => {
    const activeProjectBtn = document.querySelector('.project-nav-btn.active') || projectNavButtons[0];
    if (activeProjectBtn) showProject(activeProjectBtn.getAttribute('data-project'));

    // trigger initial phase activation for visible project
    const visibleProject = document.querySelector('.project-content.active') || document.querySelector('.project-content');
    if (visibleProject) {
        const firstPhase = visibleProject.querySelector('.phase-tab');
        if (firstPhase) firstPhase.click();
    }
});

// Internship navigation
const internshipNavButtons = document.querySelectorAll('.internship-nav-btn');
const internshipContents = document.querySelectorAll('.internship-content');

function showInternship(internshipKey) {
    // update nav buttons
    internshipNavButtons.forEach(btn => btn.classList.toggle('active', btn.getAttribute('data-internship') === internshipKey));
    // show matching internship content
    internshipContents.forEach(content => {
        const id = content.id.replace('-content', '');
        if (id === internshipKey) {
            content.style.display = 'block';
            content.classList.add('active');
        } else {
            content.style.display = 'none';
            content.classList.remove('active');
        }
    });
}

internshipNavButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const internshipKey = btn.getAttribute('data-internship');
        showInternship(internshipKey);
    });
});

// Initialize: ensure default internship is visible
document.addEventListener('DOMContentLoaded', () => {
    const activeInternshipBtn = document.querySelector('.internship-nav-btn.active') || internshipNavButtons[0];
    if (activeInternshipBtn) showInternship(activeInternshipBtn.getAttribute('data-internship'));
});

filterButtons.forEach(button => {
    button.addEventListener('click', function() {
        const filterValue = this.getAttribute('data-filter');
        
        // Update active button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        
        // Filter projects
        if (filterValue === 'featured') {
            // Show only categories that contain featured projects
            projectCategories.forEach(category => {
                const hasFeaturedProject = category.querySelector('.featured-project');
                if (hasFeaturedProject) {
                    category.classList.remove('hidden');
                    category.style.display = 'block';
                    
                    // Hide non-featured projects within this category
                    const allProjects = category.querySelectorAll('.project-item');
                    allProjects.forEach(project => {
                        if (project.classList.contains('featured-project')) {
                            project.style.display = 'block';
                        } else {
                            project.style.display = 'none';
                        }
                    });
                } else {
                    category.classList.add('hidden');
                    category.style.display = 'none';
                }
            });
        } else {
            // Regular filtering logic
            projectCategories.forEach(category => {
                const categoryValue = category.getAttribute('data-category');
                
                // Show all projects within visible categories
                const allProjects = category.querySelectorAll('.project-item');
                allProjects.forEach(project => {
                    project.style.display = 'block';
                });
                
                if (filterValue === 'all') {
                    category.classList.remove('hidden');
                    category.style.display = 'block';
                } else {
                    if (categoryValue === filterValue) {
                        category.classList.remove('hidden');
                        category.style.display = 'block';
                    } else {
                        category.classList.add('hidden');
                        category.style.display = 'none';
                    }
                }
            });
        }
    });
});

// Club navigation (IEEE / Meshkat)
const clubNavButtons = document.querySelectorAll('.club-nav-btn');
const clubContents = document.querySelectorAll('.club-content');

function showClub(clubKey) {
    // update nav buttons
    clubNavButtons.forEach(btn => btn.classList.toggle('active', btn.getAttribute('data-club') === clubKey));
    // show matching club content
    clubContents.forEach(content => {
        const id = content.id.replace('-content', '');
        if (id === clubKey) {
            content.style.display = 'block';
            content.classList.add('active');
        } else {
            content.style.display = 'none';
            content.classList.remove('active');
        }
    });
}

clubNavButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const clubKey = btn.getAttribute('data-club');
        showClub(clubKey);
        // reset to first phase of the club (if any)
        const clubEl = document.getElementById(clubKey + '-content');
        if (clubEl) {
            const firstTab = clubEl.querySelector('.phase-tab');
            if (firstTab) firstTab.click();
        }
    });
});

// Initialize: ensure default club is visible
document.addEventListener('DOMContentLoaded', () => {
    const activeClubBtn = document.querySelector('.club-nav-btn.active') || clubNavButtons[0];
    if (activeClubBtn) showClub(activeClubBtn.getAttribute('data-club'));

    // trigger initial phase activation for visible club
    const visibleClub = document.querySelector('.club-content.active') || document.querySelector('.club-content');
    if (visibleClub) {
        const firstPhase = visibleClub.querySelector('.phase-tab');
        if (firstPhase) firstPhase.click();
    }
});
