// Configuration
const CONFIG = {
    pointCount: 2500,
    clusterSpread: 300, // Standard deviation for clusters
    mapWidth: 4000,
    mapHeight: 3000,
    colors: {
        sight: "#B58CB5", // Swapped to Purple (User preference/correction)
        sound: "#5A7EBF",
        touch: "#D86C5B",
        smell: "#7BA77B",
        taste: "#E8C547"  // Swapped to Yellow (User preference/correction)
    },
    senseNames: {
        sight: { ko: "시각", en: "Sight" },
        sound: { ko: "청각", en: "Sound" },
        touch: { ko: "촉각", en: "Touch" },
        smell: { ko: "후각", en: "Smell" },
        taste: { ko: "미각", en: "Taste" }
    }
};

const CURATED_IMAGES = {
    sight: [],
    sound: [],
    touch: [],
    // High-quality "Seoul Rain/Atmosphere" images
    smell: [
        "https://images.unsplash.com/photo-1605926910080-0a73ca0f1659?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb",
        "https://images.unsplash.com/photo-1558920778-a82b686f0521?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb",
        "https://images.unsplash.com/photo-1696835196669-4517d46a2a47?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb",
        "https://images.unsplash.com/photo-1529735188788-e1e753fd9171?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb",
        "https://images.unsplash.com/photo-1702737752228-756b265208e2?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb",
        "https://images.unsplash.com/photo-1677172346787-123246aafecd?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb",
        "https://images.unsplash.com/photo-1702737752226-ed00b444e991?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb",
        "https://images.unsplash.com/photo-1702737754550-52191259f235?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb",
        "https://images.unsplash.com/photo-1702737752304-84c1d8f23c7c?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb",
        "https://images.unsplash.com/photo-1702737752267-ccd64a52c1b7?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb",
        "https://images.unsplash.com/photo-1544205579-bac390da3274?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb",
        "https://images.unsplash.com/photo-1687777595424-ca2844414b49?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb",
        "https://images.unsplash.com/photo-1702737754486-a433d500a99a?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb",
        "https://images.unsplash.com/photo-1624176194977-b0996f930188?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb",
        "https://images.unsplash.com/photo-1614693177945-9eb6a67e3670?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb"
    ],
    // High-quality "Korean Street Food/Market" images
    taste: [
        "https://images.unsplash.com/photo-1628532429788-c35922b5e6c1?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb",
        "https://images.unsplash.com/photo-1624176193860-dd7866e5a8aa?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb",
        "https://images.unsplash.com/photo-1628532430664-ef7e7b7b941f?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb",
        "https://images.unsplash.com/photo-1628532431030-3b6d433ed166?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb",
        "https://images.unsplash.com/photo-1639131285716-3fc7f624f138?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb",
        "https://images.unsplash.com/photo-1603545959692-78ab733058c8?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb",
        "https://images.unsplash.com/photo-1628532429833-9350bf2688ef?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb",
        "https://images.unsplash.com/photo-1733959541069-1a289a05a59f?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb",
        "https://images.unsplash.com/photo-1683689274309-6b00eeab798f?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb",
        "https://images.unsplash.com/photo-1565895476294-b24957b878ea?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb",
        "https://images.unsplash.com/photo-1699316788084-d4c0943a4bcf?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb",
        "https://images.unsplash.com/photo-1628532429823-7458fb1fb02a?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb",
        "https://images.unsplash.com/photo-1574028742226-ee1ab3520a7f?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb",
        "https://images.unsplash.com/photo-1521022887356-1db35c7bbf1f?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb",
        "https://images.unsplash.com/photo-1724830909783-b50ab4e263ec?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb"
    ]
};

const SENSE_KEYWORDS = {
    sight: "seoul,city",      // Broader than 'architecture'
    sound: "market,street",   // Broader than 'seoul,market'
    touch: "fabric,texture",  // 'hanbok' was likely too specific/limited
    smell: "coffee,nature",   // Broader than 'korea,cafe'
    taste: "food,dining",     // Broader than 'korean food'
    mixed: "city,life"
};

const SENSE_DESCRIPTIONS = {
    sight: {
        ko: "이 장면은 <strong>서울의 도시 풍경</strong>이 시선을 사로잡습니다. 현대적인 빌딩과 전통적인 구조가 어우러진 시각적 경험입니다.",
        en: "This scene captures the <strong>cityscape of Seoul</strong>. It is a visual experience where modern buildings blend with traditional structures."
    },
    sound: {
        ko: "이 장면은 <strong>활기찬 시장의 소리</strong>로 가득 차 있습니다. 사람들의 대화와 일상의 소음이 생동감 있게 울려 퍼집니다.",
        en: "This scene is filled with the <strong>sounds of a bustling market</strong>. The lively noise of daily life and conversation resonates here."
    },
    touch: {
        ko: "이 장면은 <strong>한복의 고운 선과 질감</strong>이 느껴집니다. 부드러운 옷감의 감촉이 손끝에 생생하게 남아있습니다.",
        en: "This scene evokes the <strong>texture of Hanbok</strong>. The soft touch of traditional fabric remains vivid in the memory."
    },
    smell: {
        ko: "이 장면은 <strong>비에 젖은 서울의 거리</strong> 냄새가 납니다. 젖은 아스팔트와 도시의 공기가 섞인 차분하고 감성적인 후각적 경험입니다.",
        en: "This scene smells of <strong>rain-soaked streets in Seoul</strong>. It is a calm, emotional olfactory experience mixing wet asphalt with city air."
    },
    taste: {
        ko: "이 장면은 <strong>길거리 음식의 활기찬 맛</strong>이 느껴집니다. 시장 골목에서 피어오르는 매콤하고 고소한 풍미가 입맛을 자극합니다.",
        en: "This scene tastes of <strong>vibrant street food</strong>. The spicy and savory flavors rising from market alleys stimulate the appetite."
    }
};

// State
let data = [];
let selectedDot = null;
let activeFilters = new Set(Object.keys(CONFIG.colors));
let zoomTransform = d3.zoomIdentity;
let mousePos = { x: -1000, y: -1000 }; // Initialize off-screen
let isRepulsionActive = true;
let animationFrameId = null;
let flipTimer = null;
let isPanelHovered = false;

// DOM Elements
const introSection = document.getElementById('intro');
const mapContainer = document.getElementById('mapContainer');
const exploreBtn = document.getElementById('exploreBtn');
const polaroid = document.getElementById('polaroid');
const sidePanel = document.getElementById('sidePanel');
const closePanelBtn = document.getElementById('closePanel');
const filterBtns = document.querySelectorAll('.filter-btn');
const zoomInBtn = document.getElementById('zoomIn');
const zoomOutBtn = document.getElementById('zoomOut');
const resetViewBtn = document.getElementById('resetView');

// --- 1. Data Generation ---

function generateData() {
    const senses = Object.keys(CONFIG.colors);
    const centers = [
        { x: CONFIG.mapWidth * 0.5, y: CONFIG.mapHeight * 0.2, sense: 'sight' },
        { x: CONFIG.mapWidth * 0.8, y: CONFIG.mapHeight * 0.4, sense: 'sound' },
        { x: CONFIG.mapWidth * 0.7, y: CONFIG.mapHeight * 0.8, sense: 'touch' },
        { x: CONFIG.mapWidth * 0.3, y: CONFIG.mapHeight * 0.8, sense: 'smell' },
        { x: CONFIG.mapWidth * 0.2, y: CONFIG.mapHeight * 0.4, sense: 'taste' }
    ];

    const points = [];

    // Generate core cluster points
    for (let i = 0; i < CONFIG.pointCount; i++) {
        // Pick a random center
        const center = centers[Math.floor(Math.random() * centers.length)];

        // Random position using normal distribution (Box-Muller transform approximation)
        const u = 1 - Math.random(); // Subtraction to flip [0, 1) to (0, 1]
        const v = Math.random();
        const z = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
        const z2 = Math.sqrt(-2.0 * Math.log(u)) * Math.sin(2.0 * Math.PI * v);

        const x = center.x + z * CONFIG.clusterSpread;
        const y = center.y + z2 * CONFIG.clusterSpread;

        // Determine color/sense mix
        // Mostly the center's sense, but with some noise
        const senseValues = {};
        senses.forEach(s => senseValues[s] = Math.random() * 0.2);
        senseValues[center.sense] += 0.8; // Boost dominant sense

        // Normalize
        const total = Object.values(senseValues).reduce((a, b) => a + b, 0);
        for (let s in senseValues) senseValues[s] /= total;

        points.push({
            id: i,
            x: x,
            y: y,
            dominantSense: center.sense,
            values: senseValues,
            isBlended: false,
            radius: 8.5,
            color: CONFIG.colors[center.sense]
        });
    }

    // Generate blended points between clusters
    const blendCount = CONFIG.pointCount / 3;
    for (let i = 0; i < blendCount; i++) {
        const c1 = centers[Math.floor(Math.random() * centers.length)];
        let c2 = centers[Math.floor(Math.random() * centers.length)];
        while (c1 === c2) c2 = centers[Math.floor(Math.random() * centers.length)];

        const t = Math.random(); // Interpolation factor
        const x = c1.x + (c2.x - c1.x) * t + (Math.random() - 0.5) * 200;
        const y = c1.y + (c2.y - c1.y) * t + (Math.random() - 0.5) * 200;

        // Mix colors
        const color1 = d3.color(CONFIG.colors[c1.sense]);
        const color2 = d3.color(CONFIG.colors[c2.sense]);
        const mixedColor = d3.interpolateRgb(color1, color2)(t);

        points.push({
            id: CONFIG.pointCount + i,
            x: x,
            y: y,
            dominantSense: 'mixed',
            values: { [c1.sense]: 1 - t, [c2.sense]: t }, // Simplified mix
            isBlended: true,
            radius: 7.0,
            color: mixedColor
        });
    }

    return points;
}

// --- 2. D3 Visualization ---

function initMap() {
    data = generateData();

    const svg = d3.select("#map")
        .attr("viewBox", `0 0 ${window.innerWidth} ${window.innerHeight}`);

    const g = svg.append("g");

    // Zoom behavior
    const zoom = d3.zoom()
        .scaleExtent([0.1, 5])
        .on("zoom", (event) => {
            zoomTransform = event.transform; // Update global transform state
            g.attr("transform", event.transform);
        });

    svg.call(zoom);

    // Initial center
    const initialScale = 0.4;
    const initialX = (window.innerWidth - CONFIG.mapWidth * initialScale) / 2;
    const initialY = (window.innerHeight - CONFIG.mapHeight * initialScale) / 2;

    svg.call(zoom.transform, d3.zoomIdentity.translate(initialX, initialY).scale(initialScale));


    // Draw dots
    const dots = g.selectAll("circle")
        .data(data)
        .enter()
        .append("circle")
        .attr("cx", d => d.x)
        .attr("cy", d => d.y)
        .attr("r", d => d.radius)
        .attr("fill", d => d.color)
        .attr("opacity", d => d.isBlended ? 0.8 : 0.9)
        .style("cursor", "pointer")
        .on("mouseover", handleMouseOver)
        .on("mouseout", handleMouseOut)
        .on("click", handleClick);

    // --- Repulsion Effect Loop ---
    function animate() {
        if (!isRepulsionActive) return;

        // Transform mouse coordinates to SVG space
        // We need to invert the zoom transform to get "world" coordinates of the mouse
        const invertedMouse = zoomTransform.invert([mousePos.x, mousePos.y]);
        const mx = invertedMouse[0];
        const my = invertedMouse[1];
        const repulsionRadius = 150; // Radius of effect
        const maxForce = 40; // Max displacement

        dots.attr("cx", d => {
            // If filtered out, don't move (or maybe we hide them via opacity/display)
            if (!isDotVisible(d)) return d.x;

            // If this is the selected dot (targeted), don't move
            if (selectedDot && d.id === selectedDot.id) return d.x;

            const dx = d.x - mx;
            const dy = d.y - my;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < repulsionRadius) {
                // Use a sine wave for the force: 0 at center, max at mid-radius, 0 at edge.
                // This creates a "donut" of repulsion but allows the user to "catch" the dot at the center.
                // Formula: sin( (dist / radius) * PI ) * maxForce

                // We clamp the normalized distance to 0..1 just in case
                const normDist = dist / repulsionRadius;

                // Calculate force
                // We want the force to push AWAY.
                const force = Math.sin(normDist * Math.PI) * maxForce;

                const angle = Math.atan2(dy, dx);
                return d.x + Math.cos(angle) * force;
            }
            return d.x;
        })
            .attr("cy", d => {
                if (!isDotVisible(d)) return d.y;
                if (selectedDot && d.id === selectedDot.id) return d.y;

                const dx = d.x - mx;
                const dy = d.y - my;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < repulsionRadius) {
                    const normDist = dist / repulsionRadius;
                    const force = Math.sin(normDist * Math.PI) * maxForce;
                    const angle = Math.atan2(dy, dx);
                    return d.y + Math.sin(angle) * force;
                }
                return d.y;
            });

        animationFrameId = requestAnimationFrame(animate);
    }

    // Start animation loop
    animate();

    // Check for auto-close in a separate interval or inside animate?
    // Let's put it in animate for smoothness, but maybe throttle it? 
    // Actually, animate is fine.

    // We need to inject the auto-close check into the animate function or run it parallel.
    // Let's modify the animate function above to include it.
    // Since I can't easily edit the middle of the function with replace_file_content if it's huge,
    // I will append a separate loop or just use setInterval for the check.
    // setInterval is easier to manage for "logic" vs "rendering".

    setInterval(() => {
        if (selectedDot && !isPanelHovered) {
            // Calculate distance from mouse to selected dot in SCREEN space
            const [dotScreenX, dotScreenY] = zoomTransform.apply([selectedDot.x, selectedDot.y]);
            const dx = mousePos.x - dotScreenX;
            const dy = mousePos.y - dotScreenY;
            const dist = Math.sqrt(dx * dx + dy * dy);

            // Threshold to close
            if (dist > 350) {
                closeSidePanel();
            }
        }
    }, 200); // Check every 200ms

    // Track mouse movement on the SVG container
    svg.on("mousemove", (event) => {
        const [x, y] = d3.pointer(event);
        // d3.pointer returns coordinates relative to the container (SVG)
        // But our zoom transform is applied to the <g>, so the mouse coordinates 
        // relative to the SVG are actually the "screen" coordinates before transform.
        // We store them directly and invert in the loop.
        mousePos.x = x;
        mousePos.y = y;
    });

    // --- Zoom Controls Logic ---
    zoomInBtn.addEventListener('click', () => {
        svg.transition().duration(500).call(zoom.scaleBy, 1.5);
    });

    zoomOutBtn.addEventListener('click', () => {
        svg.transition().duration(500).call(zoom.scaleBy, 0.6);
    });

    resetViewBtn.addEventListener('click', () => {
        svg.transition().duration(750).call(zoom.transform, d3.zoomIdentity.translate(initialX, initialY).scale(initialScale));
    });
}

// --- Filter Logic ---
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const sense = btn.dataset.sense;

        if (activeFilters.has(sense)) {
            activeFilters.delete(sense);
            btn.classList.remove('active');
        } else {
            activeFilters.add(sense);
            btn.classList.add('active');
        }

        updateVisibility();
    });
});

function isDotVisible(d) {
    if (d.dominantSense === 'mixed') {
        // For mixed, check if ANY of its components are active
        // Simplified: check if the blended colors' parents are active
        // But we stored values. Let's check if the dominant components are active.
        const components = Object.keys(d.values).filter(k => d.values[k] > 0.3); // Threshold
        return components.some(c => activeFilters.has(c));
    }
    return activeFilters.has(d.dominantSense);
}

function updateVisibility() {
    const dots = d3.select("#map").selectAll("circle");

    dots.transition().duration(300)
        .attr("opacity", d => {
            if (!isDotVisible(d)) return 0.05; // Dim instead of hide completely for better feel? Or 0.
            return d.isBlended ? 0.8 : 0.9;
        })
        .style("pointer-events", d => isDotVisible(d) ? "all" : "none");
}


// --- 3. Interactions ---

// --- Intro Animation & Interaction ---

const introCanvas = document.getElementById('introCanvas');
const ctx = introCanvas.getContext('2d');
let introParticles = [];
let introAnimationId;
let introState = 'idle'; // idle, exiting, finished

function resizeIntroCanvas() {
    introCanvas.width = window.innerWidth;
    introCanvas.height = window.innerHeight;
}

window.addEventListener('resize', resizeIntroCanvas);
resizeIntroCanvas();

class IntroParticle {
    constructor() {
        this.reset();
    }

    reset() {
        this.x = Math.random() * introCanvas.width;
        this.y = Math.random() * introCanvas.height;
        this.vx = (Math.random() - 0.5) * 0.8; // Slightly faster for liveliness
        this.vy = (Math.random() - 0.5) * 0.8;
        this.size = Math.random() * 4 + 2;

        const senses = Object.keys(CONFIG.colors);
        this.color = CONFIG.colors[senses[Math.floor(Math.random() * senses.length)]];
        this.alpha = Math.random() * 0.6 + 0.2;
    }

    update() {
        if (introState === 'idle') {
            this.x += this.vx;
            this.y += this.vy;

            // Bounce off edges
            if (this.x < 0 || this.x > introCanvas.width) this.vx *= -1;
            if (this.y < 0 || this.y > introCanvas.height) this.vy *= -1;
        } else if (introState === 'exiting') {
            // Explode outwards from center
            const cx = introCanvas.width / 2;
            const cy = introCanvas.height / 2;
            const dx = this.x - cx;
            const dy = this.y - cy;

            // Add velocity away from center
            this.x += dx * 0.15;
            this.y += dy * 0.15;
            this.alpha -= 0.03;
        }
    }

    draw() {
        if (this.alpha <= 0) return;
        ctx.globalAlpha = this.alpha;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
    }
}

function initIntro() {
    for (let i = 0; i < 100; i++) {
        introParticles.push(new IntroParticle());
    }
    animateIntro();
}

function animateIntro() {
    ctx.clearRect(0, 0, introCanvas.width, introCanvas.height);

    introParticles.forEach(p => {
        p.update();
        p.draw();
    });

    if (introState !== 'finished') {
        introAnimationId = requestAnimationFrame(animateIntro);
    }
}

// Intro Transition
exploreBtn.addEventListener('click', (e) => {
    e.preventDefault();

    // Trigger exit animation
    introState = 'exiting';

    // Fade out button and text immediately
    const content = document.querySelector('.intro-content');
    content.style.transition = 'opacity 0.5s ease';
    content.style.opacity = '0';

    // Wait for particle explosion
    setTimeout(() => {
        introSection.classList.add('hidden');
        mapContainer.style.display = 'block';

        setTimeout(() => {
            introState = 'finished';
            cancelAnimationFrame(introAnimationId);
            mapContainer.classList.add('visible');
        }, 100);
    }, 800);
});

// Start the intro animation
initIntro();

// --- 4. AI Text Generation Logic ---

const VOCABULARY = {
    sight: {
        adjectives: ["Neon", "Bright", "Faded", "Sharp", "Blurry", "Vivid", "Pale", "Geometric", "Urban", "Rustic"],
        nouns: ["Skyline", "Reflection", "Shadow", "Facade", "Perspective", "Glow", "Contrast", "Pattern", "Horizon", "Detail"],
        phrases: ["빛이 스며드는 순간", "도시의 기하학적 패턴", "선명한 시각적 대비", "흐릿한 잔상의 기억", "강렬한 색채의 조화"]
    },
    sound: {
        adjectives: ["Loud", "Quiet", "Rhythmic", "Echoing", "Muffled", "Buzzing", "Melodic", "Chaotic", "Silent", "Harmonic"],
        nouns: ["Resonance", "Beat", "Whisper", "Clatter", "Hum", "Vibration", "Noise", "Silence", "Rhythm", "Echo"],
        phrases: ["멀리서 들려오는 소음", "규칙적인 기계음", "사람들의 웅성거림", "고요한 정적의 소리", "울려 퍼지는 잔향"]
    },
    touch: {
        adjectives: ["Rough", "Smooth", "Cold", "Warm", "Soft", "Hard", "Gritty", "Silky", "Damp", "Dry"],
        nouns: ["Texture", "Surface", "Fabric", "Grain", "Touch", "Feel", "Material", "Layer", "Edge", "Finish"],
        phrases: ["거친 표면의 감촉", "부드러운 천의 느낌", "차가운 금속의 온도", "따뜻한 온기의 흔적", "손끝에 닿는 질감"]
    },
    smell: {
        adjectives: ["Sweet", "Pungent", "Fresh", "Earthy", "Smoky", "Floral", "Spicy", "Musty", "Clean", "Aromatic"],
        nouns: ["Scent", "Aroma", "Fragrance", "Odor", "Perfume", "Essence", "Whiff", "Air", "Breath", "Atmosphere"],
        phrases: ["비 온 뒤의 흙내음", "은은한 커피 향기", "매캐한 연기의 냄새", "상쾌한 아침의 공기", "오래된 종이의 향"]
    },
    taste: {
        adjectives: ["Sweet", "Sour", "Bitter", "Salty", "Spicy", "Savory", "Rich", "Fresh", "Zesty", "Tangy"],
        nouns: ["Flavor", "Taste", "Bite", "Savor", "Palate", "Zest", "Spice", "Sweetness", "Aftertaste", "Essence"],
        phrases: ["입안 가득 퍼지는 풍미", "달콤한 첫 맛의 기억", "쌉싸름한 끝맛", "매콤한 자극의 여운", "깊고 진한 맛의 조화"]
    },
    mixed: {
        adjectives: ["Complex", "Chaotic", "Blended", "Layered", "Dynamic"],
        nouns: ["Moment", "Scene", "Memory", "Experience", "Fragment"],
        phrases: ["복합적인 감각의 조화", "다양한 느낌의 공존", "설명하기 힘든 분위기", "모호한 경계의 순간", "감각의 교차점"]
    }
};

// Pseudo-random generator seeded by ID
function seededRandom(seed) {
    let x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
}

function generateAIAnalysis(d) {
    // Determine dominant sense
    let dominantSense = d.dominantSense;
    if (dominantSense === 'mixed') {
        let maxVal = -1;
        for (const [sense, val] of Object.entries(d.values)) {
            if (val > maxVal) {
                maxVal = val;
                dominantSense = sense;
            }
        }
    }

    // Use ID as seed for consistency
    const seed = d.id * 123.45;
    const r1 = seededRandom(seed);
    const r2 = seededRandom(seed + 1);
    const r3 = seededRandom(seed + 2);

    const vocab = VOCABULARY[dominantSense] || VOCABULARY.mixed;

    // Generate Title: Adjective + Noun
    const adj = vocab.adjectives[Math.floor(r1 * vocab.adjectives.length)];
    const noun = vocab.nouns[Math.floor(r2 * vocab.nouns.length)];
    const title = `${adj} ${noun}`;

    // Generate Sensory Phrase
    const phrase = vocab.phrases[Math.floor(r3 * vocab.phrases.length)];

    return { title, phrase };
}

// Tooltip (Polaroid - Static Editorial)
function handleMouseOver(event, d) {
    const [mx, my] = d3.pointer(event, document.body);

    polaroid.classList.remove('hidden');
    polaroid.style.left = `${mx + 15}px`;
    polaroid.style.top = `${my + 15}px`;

    // Generate AI Text
    const aiText = generateAIAnalysis(d);

    // Load Image (Optimized Size)
    const imgUrl = getImageUrl(d, 200, 200);

    // Populate New Static Structure
    polaroid.innerHTML = `
        <div class="polaroid-title">${aiText.title}</div>
        <div class="polaroid-divider"></div>
        <div class="polaroid-image-frame" style="background-image: url('${imgUrl}')"></div>
        <div class="polaroid-sensory-phrase">${aiText.phrase}</div>
    `;
}

function handleMouseOut() {
    polaroid.classList.add('hidden');
}

// Click & Side Panel
function handleClick(event, d) {
    event.stopPropagation(); // Prevent map click
    selectedDot = d;

    // Ripple Effect
    createRipple(event.clientX, event.clientY);

    // Open Side Panel
    updateSidePanel(d);
    sidePanel.classList.remove('hidden');
}

function createRipple(x, y) {
    const ripple = document.createElement('div');
    ripple.className = 'ripple';
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    document.body.appendChild(ripple);

    setTimeout(() => {
        ripple.remove();
    }, 600);
}

function updateSidePanel(d) {
    const panelTitle = document.getElementById('panelTitle');
    const barsContainer = document.querySelector('.sense-bars');
    const desc = document.getElementById('panelDescription');
    const panelImage = document.getElementById('panelImage');

    panelTitle.textContent = `Scene #${d.id}`;

    // Set Panel Image (Optimized Size)
    const imgUrl = getImageUrl(d, 320, 240);
    panelImage.style.backgroundImage = `url(${imgUrl})`;

    // Clear existing bars
    barsContainer.innerHTML = '';

    // Create bars for each sense
    const senses = Object.keys(CONFIG.colors);

    // Sort senses by value for this point, if we want ordered. Or just fixed order.
    // Let's do fixed order to compare easily.
    senses.forEach(sense => {
        const value = (d.values && d.values[sense]) ? d.values[sense] : 0;
        const percentage = Math.round(value * 100);

        const row = document.createElement('div');
        row.className = 'sense-row';

        row.innerHTML = `
            <span class="sense-label">${CONFIG.senseNames[sense].en}</span>
            <div class="sense-bar-bg">
                <div class="sense-bar-fill" style="width: ${percentage}%; background-color: ${CONFIG.colors[sense]}"></div>
            </div>
            <span style="font-size: 0.8rem; margin-left: 10px; color: #999; width: 30px;">${percentage}%</span>
        `;

        barsContainer.appendChild(row);
    });

    // Dynamic description (Bilingual)
    let dominant = Object.entries(d.values || {}).sort((a, b) => b[1] - a[1])[0];
    if (dominant) {
        const senseKey = dominant[0];
        const percent = Math.round(dominant[1] * 100);

        // Use specific description if available, otherwise fallback
        const descText = SENSE_DESCRIPTIONS[senseKey] || {
            ko: `이 장면은 <strong>${CONFIG.senseNames[senseKey].ko}</strong>이(가) 강하게 느껴지는 순간입니다.`,
            en: `This scene is dominated by <strong>${CONFIG.senseNames[senseKey].en}</strong>.`
        };

        desc.innerHTML = `
            <p class="ko" style="margin-bottom: 10px;">${descText.ko}<br><span style="font-size:0.9em; color:#888;">(${CONFIG.senseNames[senseKey].ko} ${percent}%)</span></p>
            <p class="en" style="color: #666; font-size: 0.9em;">${descText.en}<br><span style="font-size:0.9em; color:#999;">(${CONFIG.senseNames[senseKey].en} ${percent}%)</span></p>
        `;
    } else {
        desc.innerHTML = `
            <p class="ko" style="margin-bottom: 10px;">복합적인 감각이 어우러진 장면입니다.</p>
            <p class="en" style="color: #666; font-size: 0.9em;">This is a scene where multiple senses are blended together.</p>
        `;
    }
}

// Close Panel
function closeSidePanel() {
    sidePanel.classList.add('hidden');
    selectedDot = null; // Deselect
}

closePanelBtn.addEventListener('click', closeSidePanel);

// Close panel when clicking on map background
mapContainer.addEventListener('click', (e) => {
    if (e.target.tagName === 'svg' || e.target.id === 'map') {
        closeSidePanel();
    }
});

// --- Info Modal Logic ---
const menuBtn = document.getElementById('menuBtn');
const infoModal = document.getElementById('infoModal');
const closeModalBtn = document.getElementById('closeModal');

menuBtn.addEventListener('click', () => {
    infoModal.classList.remove('hidden');
});

closeModalBtn.addEventListener('click', () => {
    infoModal.classList.add('hidden');
});

// Close modal when clicking outside content
infoModal.addEventListener('click', (e) => {
    if (e.target === infoModal) {
        infoModal.classList.add('hidden');
    }
});

// Track Panel Hover
sidePanel.addEventListener('mouseenter', () => isPanelHovered = true);
sidePanel.addEventListener('mouseleave', () => isPanelHovered = false);

// Resize Handler
window.addEventListener('resize', () => {
    d3.select("#map").attr("viewBox", `0 0 ${window.innerWidth} ${window.innerHeight}`);
});

// Helper: Get Contextual Image URL
function getImageUrl(d, w, h) {
    // Calculate true dominant sense from values to avoid "mixed" generic photos
    let dominant = 'mixed';
    let maxVal = -1;

    if (d.values) {
        for (const [sense, val] of Object.entries(d.values)) {
            if (val > maxVal) {
                maxVal = val;
                dominant = sense;
            }
        }
    }


    // Use Curated Unsplash Images for specific senses
    if (CURATED_IMAGES[dominant] && CURATED_IMAGES[dominant].length > 0) {
        const index = d.id % CURATED_IMAGES[dominant].length;
        const imageUrl = CURATED_IMAGES[dominant][index];
        // Append resize params if not present (the resolved URLs often have them)
        // If they have params, just return as is.
        // We might want to force w/h for optimization.
        if (imageUrl.includes('?')) {
            return `${imageUrl}&w=${w}`;
        }
        return `${imageUrl}?auto=format&fit=crop&w=${w}&q=80`;
    }

    // Fallback for others (Sight, Sound, Touch, Mixed) using keywords
    let keywords = SENSE_KEYWORDS[dominant] || "abstract";
    const cacheId = d.id % 100;
    return `https://loremflickr.com/${w}/${h}/${keywords}?lock=${cacheId}`;
}

// Initialize
initMap();
