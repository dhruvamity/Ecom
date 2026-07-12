<!-- Dhenuh - Home -->
<!DOCTYPE html>

<html lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Dhenuh Ghee - Sacred Nourishment</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Libre+Caslon+Text:ital,wght@0,400;0,700;1,400&amp;family=Work+Sans:wght@400;500;600&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
    </style>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    "colors": {
                        "on-secondary": "#ffffff",
                        "on-tertiary": "#ffffff",
                        "on-primary": "#ffffff",
                        "error": "#ba1a1a",
                        "on-secondary-container": "#795950",
                        "on-primary-fixed": "#261a00",
                        "on-primary-container": "#503a00",
                        "inverse-on-surface": "#f4f0e7",
                        "secondary-fixed": "#ffdbd0",
                        "primary-fixed-dim": "#f6be39",
                        "tertiary": "#536442",
                        "inverse-surface": "#31312b",
                        "surface-container-lowest": "#ffffff",
                        "secondary-fixed-dim": "#e7bdb1",
                        "on-surface-variant": "#4f4634",
                        "surface-bright": "#fdf9f0",
                        "outline-variant": "#d3c5ae",
                        "on-tertiary-fixed-variant": "#3c4c2c",
                        "outline": "#817662",
                        "on-background": "#1c1c17",
                        "tertiary-fixed-dim": "#bacda4",
                        "secondary-container": "#fed3c7",
                        "tertiary-container": "#9cae87",
                        "surface": "#fdf9f0",
                        "on-secondary-fixed": "#2c160e",
                        "on-error": "#ffffff",
                        "on-secondary-fixed-variant": "#5d4037",
                        "on-error-container": "#93000a",
                        "error-container": "#ffdad6",
                        "surface-dim": "#dddad1",
                        "secondary": "#77574d",
                        "surface-container": "#f1eee5",
                        "primary-container": "#d4a017",
                        "tertiary-fixed": "#d6e9be",
                        "on-tertiary-fixed": "#111f05",
                        "surface-container-low": "#f7f3ea",
                        "surface-container-high": "#ece8df",
                        "primary-fixed": "#ffdfa0",
                        "on-primary-fixed-variant": "#5c4300",
                        "background": "#fdf9f0",
                        "surface-variant": "#e6e2d9",
                        "on-surface": "#1c1c17",
                        "inverse-primary": "#f6be39",
                        "surface-tint": "#795900",
                        "surface-container-highest": "#e6e2d9",
                        "on-tertiary-container": "#324223",
                        "primary": "#795900"
                    },
                    "borderRadius": {
                        "DEFAULT": "0.25rem",
                        "lg": "0.5rem",
                        "xl": "0.75rem",
                        "full": "9999px"
                    },
                    "spacing": {
                        "stack-lg": "48px",
                        "gutter": "24px",
                        "container-max": "1280px",
                        "margin-mobile": "16px",
                        "base": "8px",
                        "margin-desktop": "64px",
                        "stack-md": "24px",
                        "stack-sm": "12px"
                    },
                    "fontFamily": {
                        "headline-lg": ["Libre Caslon Text"],
                        "body-lg": ["Work Sans"],
                        "label-sm": ["Work Sans"],
                        "title-md": ["Libre Caslon Text"],
                        "body-md": ["Work Sans"],
                        "headline-lg-mobile": ["Libre Caslon Text"],
                        "display-lg": ["Libre Caslon Text"]
                    },
                    "fontSize": {
                        "headline-lg": ["32px", { "lineHeight": "40px", "fontWeight": "600" }],
                        "body-lg": ["18px", { "lineHeight": "28px", "fontWeight": "400" }],
                        "label-sm": ["12px", { "lineHeight": "16px", "letterSpacing": "0.05em", "fontWeight": "600" }],
                        "title-md": ["20px", { "lineHeight": "28px", "fontWeight": "600" }],
                        "body-md": ["16px", { "lineHeight": "24px", "fontWeight": "400" }],
                        "headline-lg-mobile": ["28px", { "lineHeight": "36px", "fontWeight": "600" }],
                        "display-lg": ["48px", { "lineHeight": "56px", "letterSpacing": "-0.02em", "fontWeight": "700" }]
                    }
                }
            }
        }
    </script>
</head>
<body class="bg-background text-on-surface font-body-md antialiased min-h-screen pb-24 md:pb-0">
<!-- TopAppBar -->
<header class="bg-surface/80 dark:bg-surface-dim/80 backdrop-blur-md docked full-width top-0 sticky z-50">
<div class="flex justify-between items-center px-margin-mobile h-16 w-full max-w-container-max mx-auto md:px-margin-desktop">
<button class="text-primary dark:text-primary-fixed-dim hover:text-primary transition-colors duration-200">
<span class="material-symbols-outlined" data-icon="menu">menu</span>
</button>
<h1 class="font-headline-lg-mobile text-headline-lg-mobile text-primary dark:text-primary-fixed-dim italic md:font-headline-lg md:text-headline-lg">Dhenuh</h1>
<div class="flex items-center gap-4">
<button class="text-primary dark:text-primary-fixed-dim hover:text-primary transition-colors duration-200 hidden md:flex text-on-surface-variant font-medium">Home</button>
<button class="text-primary dark:text-primary-fixed-dim hover:text-primary transition-colors duration-200 hidden md:flex text-on-surface-variant font-medium">Shop</button>
<button class="text-primary dark:text-primary-fixed-dim hover:text-primary transition-colors duration-200">
<span class="material-symbols-outlined" data-icon="shopping_bag">shopping_bag</span>
</button>
</div>
</div>
</header>
<!-- Main Content Canvas -->
<main class="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex flex-col gap-stack-lg pt-stack-md">
<!-- Hero Section -->
<section class="relative w-full rounded-xl overflow-hidden shadow-xl" style="height: 60vh; min-height: 400px;">
<img alt="Sacred Nourishment from Local Heritage" class="absolute inset-0 w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfBBoa37PfaOaz54pltag1tb2_-zfSC3jC51d8LuNYfWam33Tx29zf4lnym-UIBOTRb0uZ69l_0GWS8aD0vN8vjgNhh5phXaqPLxz2uJGPnqal456sQTTq6NtZJOpMreFOKUtsGK0JzkG_HbMNRTrm_M4hkqcR4FSmghlDu0tVyhU3TB8zm1u3z4sbxdQ5tXrB_ZCK_ko7P1zcAgmizqaxvwaktxjAf9f5_YdmcMSW6JLaFAuYbHE2x8EGR2i5csrMbZM"/>
<div class="absolute inset-0 bg-gradient-to-t from-surface-tint/80 to-transparent flex flex-col justify-end p-margin-mobile md:p-margin-desktop">
<div class="max-w-xl text-on-primary">
<h2 class="font-display-lg text-display-lg mb-stack-sm text-surface-bright drop-shadow-md">Sacred Nourishment<br/>from Local Heritage</h2>
<p class="font-body-lg text-body-lg mb-stack-md text-surface-container-low drop-shadow">Experience the purity of traditional Ayurvedic wellness in every golden drop.</p>
<button class="bg-primary text-on-primary px-gutter py-base rounded-full font-label-sm text-label-sm uppercase hover:bg-primary-container hover:text-on-primary-container transition-all shadow-md active:scale-95">Explore Collection</button>
</div>
</div>
</section>
<!-- Search Bar -->
<section class="w-full max-w-2xl mx-auto">
<div class="relative flex items-center bg-surface-container-highest rounded-full shadow-sm overflow-hidden border border-outline-variant focus-within:border-primary transition-colors">
<span class="material-symbols-outlined text-on-surface-variant pl-gutter absolute left-0" data-icon="search">search</span>
<input class="w-full bg-transparent border-none py-base pl-12 pr-gutter font-body-md text-on-surface focus:ring-0 placeholder:text-on-surface-variant/60" placeholder="Search for pure ghee..." type="text"/>
</div>
</section>
<!-- Shop by Quantity (Bento Grid) -->
<section class="w-full">
<h3 class="font-title-md text-title-md text-on-surface mb-stack-md text-center md:text-left">Shop by Quantity</h3>
<div class="grid grid-cols-2 md:grid-cols-4 gap-base md:gap-gutter">
<!-- 500ml -->
<a class="group relative aspect-square rounded-xl overflow-hidden bg-surface-container-low shadow-sm hover:shadow-md transition-all flex flex-col items-center justify-center p-base border border-surface-variant" href="#">
<div class="w-16 h-16 rounded-full bg-primary-container/20 flex items-center justify-center mb-base group-hover:scale-105 transition-transform">
<span class="material-symbols-outlined text-primary text-3xl" data-icon="experiment">experiment</span>
</div>
<span class="font-label-sm text-label-sm text-on-surface">500ml</span>
</a>
<!-- 1L -->
<a class="group relative aspect-square rounded-xl overflow-hidden bg-surface-container-low shadow-sm hover:shadow-md transition-all flex flex-col items-center justify-center p-base border border-surface-variant" href="#">
<div class="w-16 h-16 rounded-full bg-primary-container/20 flex items-center justify-center mb-base group-hover:scale-105 transition-transform">
<span class="material-symbols-outlined text-primary text-3xl" data-icon="water_drop">water_drop</span>
</div>
<span class="font-label-sm text-label-sm text-on-surface">1 Liter</span>
</a>
<!-- 2L -->
<a class="group relative aspect-square rounded-xl overflow-hidden bg-surface-container-low shadow-sm hover:shadow-md transition-all flex flex-col items-center justify-center p-base border border-surface-variant" href="#">
<div class="w-16 h-16 rounded-full bg-primary-container/20 flex items-center justify-center mb-base group-hover:scale-105 transition-transform">
<span class="material-symbols-outlined text-primary text-3xl" data-icon="kettle">kettle</span>
</div>
<span class="font-label-sm text-label-sm text-on-surface">2 Liters</span>
</a>
<!-- 5L -->
<a class="group relative aspect-square rounded-xl overflow-hidden bg-surface-container-low shadow-sm hover:shadow-md transition-all flex flex-col items-center justify-center p-base border border-surface-variant" href="#">
<div class="w-16 h-16 rounded-full bg-primary-container/20 flex items-center justify-center mb-base group-hover:scale-105 transition-transform">
<span class="material-symbols-outlined text-primary text-3xl" data-icon="inventory_2">inventory_2</span>
</div>
<span class="font-label-sm text-label-sm text-on-surface">5 Liters</span>
</a>
</div>
</section>
<!-- Best Sellers -->
<section class="w-full">
<h3 class="font-title-md text-title-md text-on-surface mb-stack-md text-center md:text-left">Our Best Sellers</h3>
<div class="grid grid-cols-1 md:grid-cols-3 gap-gutter">
<!-- Product Card 1 -->
<div class="flex flex-col bg-surface-container-lowest rounded-xl shadow-[0_4px_24px_rgba(119,87,77,0.15)] overflow-hidden">
<div class="relative aspect-[4/3] bg-surface-variant overflow-hidden group">
<img alt="Pure Cow Ghee" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTdgk9hOM8jUNygknMleX7MaFST2s1flrcFyy5xZLU8Qa5ONVd8UBgMLfORCEXe2MKR4WSB3aZ2gEyyUcEAe02_TW3rY-TeylDUhp4df7uND5ZiVZh3Sk8MQ8_x68tKG0pWja0bf6d10gl2Va1mpj3M3N0WNTyHLCSTf_ImkSJWbUpoJsMI4jhpGfMq-ZcsrrM2VQjnh2VM17y0J_3IMYff97LJQIv_MnXk7XWnakU2WK4DXciY6SeblfsOkgqw7kEsj4"/>
<div class="absolute top-base right-base bg-tertiary text-on-tertiary px-2 py-1 rounded-full font-label-sm text-label-sm">A2 Quality</div>
</div>
<div class="p-gutter flex flex-col gap-base flex-grow">
<h4 class="font-title-md text-title-md text-on-surface">Pure Cow Ghee - 1L</h4>
<p class="font-body-md text-body-md text-on-surface-variant line-clamp-2">Traditional hand-churned ghee made from the milk of grass-fed cows.</p>
<div class="mt-auto pt-base flex justify-between items-center">
<span class="font-title-md text-title-md text-primary">₹850</span>
<button class="bg-primary text-on-primary w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:bg-primary-container hover:text-on-primary-container transition-colors active:scale-95">
<span class="material-symbols-outlined" data-icon="add">add</span>
</button>
</div>
</div>
</div>
<!-- Product Card 2 (Placeholder Image) -->
<div class="flex flex-col bg-surface-container-lowest rounded-xl shadow-[0_4px_24px_rgba(119,87,77,0.15)] overflow-hidden">
<div class="relative aspect-[4/3] bg-surface-variant overflow-hidden group">
<img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="A beautifully styled product shot of a small glass jar of golden yellow ghee sitting on a rustic wooden table, softly lit by morning sunlight coming through a nearby window. The aesthetic is warm, natural, and modern organic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBY4-qgU_4DKkN4xjS0Z3GheaRbL-W7rcwBYn97vGTeT3f60I-kD1x0R8fHupzrOuuvxRizpUZkqiubKkamHJvWUHd9-3siJdArINWsS72Irojn9KXyed4N50Nshin588QSWpx0TVWhNHx8uVfbtTxN521fCWd0Le5TL7jR2zJOaDnpz1kGDDdeaLDftORHh-F1A2XWuglB19jAF8ujNNwvwVznTw-Y5nT9PMJUhJXV91TAwsx1HoL4Aw"/>
</div>
<div class="p-gutter flex flex-col gap-base flex-grow">
<h4 class="font-title-md text-title-md text-on-surface">Vedic A2 Ghee - 500ml</h4>
<p class="font-body-md text-body-md text-on-surface-variant line-clamp-2">Sacred nourishment prepared using the ancient Bilona method.</p>
<div class="mt-auto pt-base flex justify-between items-center">
<span class="font-title-md text-title-md text-primary">₹550</span>
<button class="bg-primary text-on-primary w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:bg-primary-container hover:text-on-primary-container transition-colors active:scale-95">
<span class="material-symbols-outlined" data-icon="add">add</span>
</button>
</div>
</div>
</div>
<!-- Product Card 3 (Placeholder Image) -->
<div class="flex flex-col bg-surface-container-lowest rounded-xl shadow-[0_4px_24px_rgba(119,87,77,0.15)] overflow-hidden">
<div class="relative aspect-[4/3] bg-surface-variant overflow-hidden group">
<img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="A premium 2-liter brass container filled with pure golden ghee, placed on an earthy cream-colored stone surface. Soft ambient shadows and elegant lighting highlight the rich texture of the ghee. The mood is sophisticated and artisanal." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA97bVkNNcxqyfO2KfgpouFaL4JsGpZGcQdoIHQujRUjBfQ4We29v2GOas_l6BIhSAKEbUQ5ToTv79M1ZUfnf7SlSwnBr__Ewct0k_Zz8drWg5p-TBnDCDYD1aHCH0vqWE7q4FIspM7Ljoj6kYyQALxW0Oa8AMR81h33rm-BVyAA5ATOTxuJdQW5MPIp5oCgB0-u_YZN-_SRkPSC0tyfRsKTWrij2gauvk7vgBwCdjs_yAsL9Qa4PDXhQ"/>
<div class="absolute top-base right-base bg-tertiary text-on-tertiary px-2 py-1 rounded-full font-label-sm text-label-sm">Best Value</div>
</div>
<div class="p-gutter flex flex-col gap-base flex-grow">
<h4 class="font-title-md text-title-md text-on-surface">Family Pack Ghee - 2L</h4>
<p class="font-body-md text-body-md text-on-surface-variant line-clamp-2">Perfect for daily use, providing authentic taste and health benefits.</p>
<div class="mt-auto pt-base flex justify-between items-center">
<span class="font-title-md text-title-md text-primary">₹1600</span>
<button class="bg-primary text-on-primary w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:bg-primary-container hover:text-on-primary-container transition-colors active:scale-95">
<span class="material-symbols-outlined" data-icon="add">add</span>
</button>
</div>
</div>
</div>
</div>
</section>
<!-- Why Dhenuh? -->
<section class="w-full bg-surface-container-low rounded-xl p-margin-mobile md:p-margin-desktop my-stack-md border border-surface-variant shadow-sm">
<h3 class="font-title-md text-title-md text-on-surface mb-stack-md text-center">Why Choose Dhenuh?</h3>
<div class="grid grid-cols-1 md:grid-cols-3 gap-gutter text-center">
<div class="flex flex-col items-center gap-base">
<div class="w-12 h-12 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center mb-2">
<span class="material-symbols-outlined text-2xl" data-icon="eco">eco</span>
</div>
<h4 class="font-label-sm text-label-sm text-on-surface uppercase">100% Natural</h4>
<p class="font-body-md text-body-md text-on-surface-variant">No preservatives or additives. Just pure, wholesome goodness from nature.</p>
</div>
<div class="flex flex-col items-center gap-base">
<div class="w-12 h-12 rounded-full bg-tertiary-container text-on-tertiary-container flex items-center justify-center mb-2">
<span class="material-symbols-outlined text-2xl" data-icon="history_edu">history_edu</span>
</div>
<h4 class="font-label-sm text-label-sm text-on-surface uppercase">Traditional Methods</h4>
<p class="font-body-md text-body-md text-on-surface-variant">Crafted using the authentic Bilona method to preserve vital nutrients.</p>
</div>
<div class="flex flex-col items-center gap-base">
<div class="w-12 h-12 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center mb-2">
<span class="material-symbols-outlined text-2xl" data-icon="volunteer_activism">volunteer_activism</span>
</div>
<h4 class="font-label-sm text-label-sm text-on-surface uppercase">Ethically Sourced</h4>
<p class="font-body-md text-body-md text-on-surface-variant">Supporting local farmers and ensuring the well-being of our cows.</p>
</div>
</div>
</section>
</main>
<!-- Footer -->
<footer class="w-full px-margin-desktop py-stack-lg flex flex-col md:flex-row justify-between items-center gap-base bg-surface-container-highest dark:bg-surface-dim border-t border-outline-variant mt-stack-lg pb-24 md:pb-stack-lg">
<div class="font-headline-lg text-headline-lg text-secondary">Dhenuh</div>
<div class="flex flex-wrap justify-center gap-base md:gap-gutter">
<a class="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md" href="#">Privacy Policy</a>
<a class="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md" href="#">Terms of Service</a>
<a class="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md" href="#">Shipping Info</a>
<a class="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md" href="#">Bulk Orders</a>
</div>
<p class="font-body-md text-body-md text-on-surface-variant text-center md:text-right">© 2024 Dhenuh Cow Ghee. Traditional Ayurvedic Heritage.</p>
</footer>
<!-- BottomNavBar (Mobile Only) -->
<nav class="fixed bottom-0 left-0 w-full flex justify-around items-center h-20 px-2 pb-safe bg-surface dark:bg-surface-container-highest border-t border-outline-variant shadow-[0_-4px_10px_rgba(121,89,0,0.08)] z-50 rounded-t-xl md:hidden">
<button class="flex flex-col items-center justify-center bg-primary-container text-on-primary-container rounded-full px-4 py-1 hover:bg-surface-container-high scale-105 transition-all duration-300 ease-out">
<span class="material-symbols-outlined mb-1" data-icon="home" data-weight="fill" style="font-variation-settings: 'FILL' 1;">home</span>
<span class="font-label-sm text-label-sm">Home</span>
</button>
<button class="flex flex-col items-center justify-center text-on-surface-variant hover:bg-surface-container-high transition-colors px-2 py-1 rounded-full">
<span class="material-symbols-outlined mb-1" data-icon="storefront">storefront</span>
<span class="font-label-sm text-label-sm">Shop</span>
</button>
<button class="flex flex-col items-center justify-center text-on-surface-variant hover:bg-surface-container-high transition-colors px-2 py-1 rounded-full">
<span class="material-symbols-outlined mb-1" data-icon="shopping_cart">shopping_cart</span>
<span class="font-label-sm text-label-sm">Cart</span>
</button>
<button class="flex flex-col items-center justify-center text-on-surface-variant hover:bg-surface-container-high transition-colors px-2 py-1 rounded-full">
<span class="material-symbols-outlined mb-1" data-icon="person">person</span>
<span class="font-label-sm text-label-sm">Profile</span>
</button>
</nav>
</body></html>

<!-- Dhenuh - Product Info -->
<!DOCTYPE html>

<html lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Dhenuh - Pure Desi Cow Ghee (A2 Vedic)</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Libre+Caslon+Text:ital,wght@0,400;0,700;1,400&amp;family=Work+Sans:wght@400;500;600&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<style type="text/tailwindcss">
        @layer utilities {
            .material-symbols-outlined {
                font-family: 'Material Symbols Outlined';
                font-weight: normal;
                font-style: normal;
                font-size: 24px;  /* Preferred icon size */
                display: inline-block;
                line-height: 1;
                text-transform: none;
                letter-spacing: normal;
                word-wrap: normal;
                white-space: nowrap;
                direction: ltr;
            }
        }
    </style>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    "colors": {
                        "on-secondary": "#ffffff",
                        "on-tertiary": "#ffffff",
                        "on-primary": "#ffffff",
                        "error": "#ba1a1a",
                        "on-secondary-container": "#795950",
                        "on-primary-fixed": "#261a00",
                        "on-primary-container": "#503a00",
                        "inverse-on-surface": "#f4f0e7",
                        "secondary-fixed": "#ffdbd0",
                        "primary-fixed-dim": "#f6be39",
                        "tertiary": "#536442",
                        "inverse-surface": "#31312b",
                        "surface-container-lowest": "#ffffff",
                        "secondary-fixed-dim": "#e7bdb1",
                        "on-surface-variant": "#4f4634",
                        "surface-bright": "#fdf9f0",
                        "outline-variant": "#d3c5ae",
                        "on-tertiary-fixed-variant": "#3c4c2c",
                        "outline": "#817662",
                        "on-background": "#1c1c17",
                        "tertiary-fixed-dim": "#bacda4",
                        "secondary-container": "#fed3c7",
                        "tertiary-container": "#9cae87",
                        "surface": "#fdf9f0",
                        "on-secondary-fixed": "#2c160e",
                        "on-error": "#ffffff",
                        "on-secondary-fixed-variant": "#5d4037",
                        "on-error-container": "#93000a",
                        "error-container": "#ffdad6",
                        "surface-dim": "#dddad1",
                        "secondary": "#77574d",
                        "surface-container": "#f1eee5",
                        "primary-container": "#d4a017",
                        "tertiary-fixed": "#d6e9be",
                        "on-tertiary-fixed": "#111f05",
                        "surface-container-low": "#f7f3ea",
                        "surface-container-high": "#ece8df",
                        "primary-fixed": "#ffdfa0",
                        "on-primary-fixed-variant": "#5c4300",
                        "background": "#fdf9f0",
                        "surface-variant": "#e6e2d9",
                        "on-surface": "#1c1c17",
                        "inverse-primary": "#f6be39",
                        "surface-tint": "#795900",
                        "surface-container-highest": "#e6e2d9",
                        "on-tertiary-container": "#324223",
                        "primary": "#795900"
                    },
                    "borderRadius": {
                        "DEFAULT": "0.25rem",
                        "lg": "0.5rem",
                        "xl": "0.75rem",
                        "full": "9999px"
                    },
                    "spacing": {
                        "stack-lg": "48px",
                        "gutter": "24px",
                        "container-max": "1280px",
                        "margin-mobile": "16px",
                        "base": "8px",
                        "margin-desktop": "64px",
                        "stack-md": "24px",
                        "stack-sm": "12px"
                    },
                    "fontFamily": {
                        "headline-lg": ["Libre Caslon Text"],
                        "body-lg": ["Work Sans"],
                        "label-sm": ["Work Sans"],
                        "title-md": ["Libre Caslon Text"],
                        "body-md": ["Work Sans"],
                        "headline-lg-mobile": ["Libre Caslon Text"],
                        "display-lg": ["Libre Caslon Text"]
                    },
                    "fontSize": {
                        "headline-lg": ["32px", { "lineHeight": "40px", "fontWeight": "600" }],
                        "body-lg": ["18px", { "lineHeight": "28px", "fontWeight": "400" }],
                        "label-sm": ["12px", { "lineHeight": "16px", "letterSpacing": "0.05em", "fontWeight": "600" }],
                        "title-md": ["20px", { "lineHeight": "28px", "fontWeight": "600" }],
                        "body-md": ["16px", { "lineHeight": "24px", "fontWeight": "400" }],
                        "headline-lg-mobile": ["28px", { "lineHeight": "36px", "fontWeight": "600" }],
                        "display-lg": ["48px", { "lineHeight": "56px", "letterSpacing": "-0.02em", "fontWeight": "700" }]
                    }
                }
            }
        }
    </script>
</head>
<body class="bg-surface text-on-surface font-body-md antialiased pb-20 md:pb-0">
<!-- TopAppBar -->
<header class="bg-surface/80 dark:bg-surface-dim/80 backdrop-blur-md docked full-width top-0 sticky z-50 flat no shadows flex justify-between items-center px-margin-mobile h-16 w-full max-w-container-max mx-auto">
<button aria-label="menu" class="text-primary dark:text-primary-fixed-dim hover:text-primary transition-colors duration-200 active:scale-95 transition-transform">
<span class="material-symbols-outlined">menu</span>
</button>
<div class="font-headline-lg-mobile text-headline-lg-mobile text-primary dark:text-primary-fixed-dim italic font-bold">
            Dhenuh
        </div>
<button aria-label="shopping_bag" class="text-primary dark:text-primary-fixed-dim hover:text-primary transition-colors duration-200 active:scale-95 transition-transform">
<span class="material-symbols-outlined">shopping_bag</span>
</button>
</header>
<main class="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-stack-md">
<!-- Product Main Section -->
<div class="flex flex-col md:flex-row gap-gutter">
<!-- Image Gallery (Simplified for mobile-first) -->
<div class="w-full md:w-1/2 flex justify-center items-center bg-surface-container rounded-xl overflow-hidden shadow-[0_15px_30px_rgba(119,87,77,0.15)]">
<img alt="Pure Desi Cow Ghee Jar" class="w-full h-auto object-cover max-h-[500px]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCiYpuCpVdqOCcD3fAsnrfwCUT0KVfAiXCeaplnvF2W2Aw92KEQ4gJFzV5_Nto2f87FvPKNWbXAH3xmerQ5FltvKp-7bLVZRn-Cizlpqk5n18IQc0pZAOBzQl387afOxLtb1sIecGS2d1skqViFqagI31O5f4oBDBxaWXrxM7yQ7gNTwga_msGKX4bKulfQvSmKvc7nJZzPgSKYupmGRz2X8lfn90T7WtKd514DP2IuW0JDE8X5ihsuVv_-5vaDblksrok"/>
</div>
<!-- Product Details -->
<div class="w-full md:w-1/2 flex flex-col gap-stack-sm pt-stack-sm">
<!-- Badges -->
<div class="flex gap-2">
<span class="px-3 py-1 bg-tertiary text-on-tertiary rounded-full font-label-sm text-label-sm">A2 Vedic</span>
<span class="px-3 py-1 bg-surface-variant text-on-surface-variant rounded-full font-label-sm text-label-sm">Hand-Churned</span>
</div>
<h1 class="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-primary">Pure Desi Cow Ghee</h1>
<p class="font-body-lg text-body-lg text-on-surface-variant">
                    Experience the sacred nourishment of traditional Bilona method ghee, crafted from the milk of indigenous cows.
                </p>
<div class="font-title-md text-title-md text-primary mt-2">
                    ₹ 850.00
                </div>
<!-- Quantity Selector -->
<div class="mt-stack-sm">
<label class="font-label-sm text-label-sm text-on-surface-variant block mb-2">Select Size</label>
<div class="flex flex-wrap gap-2">
<button class="px-4 py-2 border border-outline text-on-surface font-body-md rounded-lg hover:bg-surface-container-high transition-colors focus:ring-2 focus:ring-primary focus:outline-none">250ml</button>
<button class="px-4 py-2 border-2 border-primary bg-primary-container/10 text-primary font-body-md rounded-lg focus:outline-none font-medium">500ml</button>
<button class="px-4 py-2 border border-outline text-on-surface font-body-md rounded-lg hover:bg-surface-container-high transition-colors focus:ring-2 focus:ring-primary focus:outline-none">1L</button>
<button class="px-4 py-2 border border-outline text-on-surface font-body-md rounded-lg hover:bg-surface-container-high transition-colors focus:ring-2 focus:ring-primary focus:outline-none">2L</button>
</div>
</div>
<!-- Actions -->
<div class="flex flex-col gap-3 mt-stack-md">
<button class="w-full py-4 bg-primary text-on-primary rounded-xl font-title-md text-title-md hover:bg-primary/90 transition-colors shadow-lg active:scale-[1.02]">
                        Add to Cart
                    </button>
<button class="w-full py-4 border border-secondary text-secondary bg-surface rounded-xl font-title-md text-title-md hover:bg-surface-variant transition-colors active:scale-[1.02]">
                        Buy Now
                    </button>
</div>
</div>
</div>
<!-- Info Tabs -->
<div class="mt-stack-lg border-t border-outline-variant pt-stack-md">
<div class="flex gap-gutter border-b border-outline-variant overflow-x-auto pb-2">
<button class="font-title-md text-title-md text-primary border-b-2 border-primary pb-2 whitespace-nowrap">Benefits</button>
<button class="font-title-md text-title-md text-on-surface-variant hover:text-primary transition-colors pb-2 whitespace-nowrap">Usage</button>
<button class="font-title-md text-title-md text-on-surface-variant hover:text-primary transition-colors pb-2 whitespace-nowrap">Process</button>
</div>
<div class="py-stack-md font-body-md text-on-surface-variant">
<p>Rich in Omega-3, vitamins A, D, E, and K. Promotes healthy digestion, glowing skin, and overall vitality according to ancient Ayurvedic principles.</p>
</div>
</div>
</main>
<!-- BottomNavBar (Mobile Only) -->
<nav class="md:hidden bg-surface dark:bg-surface-container-highest fixed bottom-0 w-full z-50 rounded-t-xl border-t border-outline-variant shadow-[0_-4px_10px_rgba(121,89,0,0.08)] fixed bottom-0 left-0 w-full flex justify-around items-center h-20 px-2 pb-safe">
<a class="flex flex-col items-center justify-center text-on-surface-variant hover:bg-surface-container-high p-2 rounded-lg transition-colors" href="#">
<span class="material-symbols-outlined" data-icon="home">home</span>
<span class="font-label-sm text-label-sm mt-1">Home</span>
</a>
<a class="flex flex-col items-center justify-center bg-primary-container text-on-primary-container rounded-full px-4 py-1 active:scale-105 transition-all duration-300 ease-out" href="#">
<span class="material-symbols-outlined" data-icon="storefront">storefront</span>
<span class="font-label-sm text-label-sm mt-1">Shop</span>
</a>
<a class="flex flex-col items-center justify-center text-on-surface-variant hover:bg-surface-container-high p-2 rounded-lg transition-colors" href="#">
<span class="material-symbols-outlined" data-icon="shopping_cart">shopping_cart</span>
<span class="font-label-sm text-label-sm mt-1">Cart</span>
</a>
<a class="flex flex-col items-center justify-center text-on-surface-variant hover:bg-surface-container-high p-2 rounded-lg transition-colors" href="#">
<span class="material-symbols-outlined" data-icon="person">person</span>
<span class="font-label-sm text-label-sm mt-1">Profile</span>
</a>
</nav>
<!-- Footer -->
<footer class="bg-surface-container-highest dark:bg-surface-dim w-full pt-stack-lg pb-stack-md border-t border-outline-variant flat no shadows w-full px-margin-desktop py-stack-lg flex flex-col md:flex-row justify-between items-center gap-base mt-stack-lg">
<div class="font-headline-lg text-headline-lg text-secondary mb-4 md:mb-0">Dhenuh</div>
<div class="flex flex-wrap justify-center gap-gutter font-body-md text-body-md">
<a class="text-on-surface-variant hover:text-primary transition-colors" href="#">Privacy Policy</a>
<a class="text-on-surface-variant hover:text-primary transition-colors" href="#">Terms of Service</a>
<a class="text-on-surface-variant hover:text-primary transition-colors" href="#">Shipping Info</a>
<a class="text-on-surface-variant hover:text-primary transition-colors" href="#">Bulk Orders</a>
</div>
<div class="text-on-surface-variant font-body-md text-body-md mt-4 md:mt-0 text-center md:text-left">
            © 2024 Dhenuh Cow Ghee. Traditional Ayurvedic Heritage.
        </div>
</footer>
</body></html>

<!-- Dhenuh - Your Cart -->
<!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Dhenuh - Shopping Cart</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Libre+Caslon+Text:ital,wght@0,400;0,700;1,400&amp;family=Work+Sans:wght@400;500;600&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
          darkMode: "class",
          theme: {
            extend: {
              "colors": {
                      "on-secondary": "#ffffff",
                      "on-tertiary": "#ffffff",
                      "on-primary": "#ffffff",
                      "error": "#ba1a1a",
                      "on-secondary-container": "#795950",
                      "on-primary-fixed": "#261a00",
                      "on-primary-container": "#503a00",
                      "inverse-on-surface": "#f4f0e7",
                      "secondary-fixed": "#ffdbd0",
                      "primary-fixed-dim": "#f6be39",
                      "tertiary": "#536442",
                      "inverse-surface": "#31312b",
                      "surface-container-lowest": "#ffffff",
                      "secondary-fixed-dim": "#e7bdb1",
                      "on-surface-variant": "#4f4634",
                      "surface-bright": "#fdf9f0",
                      "outline-variant": "#d3c5ae",
                      "on-tertiary-fixed-variant": "#3c4c2c",
                      "outline": "#817662",
                      "on-background": "#1c1c17",
                      "tertiary-fixed-dim": "#bacda4",
                      "secondary-container": "#fed3c7",
                      "tertiary-container": "#9cae87",
                      "surface": "#fdf9f0",
                      "on-secondary-fixed": "#2c160e",
                      "on-error": "#ffffff",
                      "on-secondary-fixed-variant": "#5d4037",
                      "on-error-container": "#93000a",
                      "error-container": "#ffdad6",
                      "surface-dim": "#dddad1",
                      "secondary": "#77574d",
                      "surface-container": "#f1eee5",
                      "primary-container": "#d4a017",
                      "tertiary-fixed": "#d6e9be",
                      "on-tertiary-fixed": "#111f05",
                      "surface-container-low": "#f7f3ea",
                      "surface-container-high": "#ece8df",
                      "primary-fixed": "#ffdfa0",
                      "on-primary-fixed-variant": "#5c4300",
                      "background": "#fdf9f0",
                      "surface-variant": "#e6e2d9",
                      "on-surface": "#1c1c17",
                      "inverse-primary": "#f6be39",
                      "surface-tint": "#795900",
                      "surface-container-highest": "#e6e2d9",
                      "on-tertiary-container": "#324223",
                      "primary": "#795900"
              },
              "borderRadius": {
                      "DEFAULT": "0.25rem",
                      "lg": "0.5rem",
                      "xl": "0.75rem",
                      "full": "9999px"
              },
              "spacing": {
                      "stack-lg": "48px",
                      "gutter": "24px",
                      "container-max": "1280px",
                      "margin-mobile": "16px",
                      "base": "8px",
                      "margin-desktop": "64px",
                      "stack-md": "24px",
                      "stack-sm": "12px"
              },
              "fontFamily": {
                      "headline-lg": [
                              "Libre Caslon Text"
                      ],
                      "body-lg": [
                              "Work Sans"
                      ],
                      "label-sm": [
                              "Work Sans"
                      ],
                      "title-md": [
                              "Libre Caslon Text"
                      ],
                      "body-md": [
                              "Work Sans"
                      ],
                      "headline-lg-mobile": [
                              "Libre Caslon Text"
                      ],
                      "display-lg": [
                              "Libre Caslon Text"
                      ]
              },
              "fontSize": {
                      "headline-lg": [
                              "32px",
                              {
                                      "lineHeight": "40px",
                                      "fontWeight": "600"
                              }
                      ],
                      "body-lg": [
                              "18px",
                              {
                                      "lineHeight": "28px",
                                      "fontWeight": "400"
                              }
                      ],
                      "label-sm": [
                              "12px",
                              {
                                      "lineHeight": "16px",
                                      "letterSpacing": "0.05em",
                                      "fontWeight": "600"
                              }
                      ],
                      "title-md": [
                              "20px",
                              {
                                      "lineHeight": "28px",
                                      "fontWeight": "600"
                              }
                      ],
                      "body-md": [
                              "16px",
                              {
                                      "lineHeight": "24px",
                                      "fontWeight": "400"
                              }
                      ],
                      "headline-lg-mobile": [
                              "28px",
                              {
                                      "lineHeight": "36px",
                                      "fontWeight": "600"
                              }
                      ],
                      "display-lg": [
                              "48px",
                              {
                                      "lineHeight": "56px",
                                      "letterSpacing": "-0.02em",
                                      "fontWeight": "700"
                              }
                      ]
              }
            },
          },
        }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .material-symbols-outlined.fill-icon {
            font-variation-settings: 'FILL' 1;
        }
        /* Fluid Typography and Spacing Helpers */
        html { font-size: 16px; }
        body { background-color: theme('colors.background'); color: theme('colors.on-background'); }
        
        /* Ambient shadows */
        .ambient-shadow {
            box-shadow: 0 8px 32px rgba(119, 87, 77, 0.08);
        }
    </style>
</head>
<body class="antialiased min-h-screen flex flex-col font-body-md text-body-md">
<!-- TopAppBar (Web) -->
<header class="hidden md:flex bg-surface/80 dark:bg-surface-dim/80 backdrop-blur-md docked full-width top-0 sticky z-50 bg-surface dark:bg-surface-dim flex justify-between items-center px-margin-mobile h-16 w-full max-w-container-max mx-auto flat no shadows">
<button class="text-primary dark:text-primary-fixed-dim hover:text-primary transition-colors duration-200">
<span class="material-symbols-outlined" data-icon="menu">menu</span>
</button>
<div class="font-headline-lg-mobile text-headline-lg-mobile text-primary dark:text-primary-fixed-dim italic">Dhenuh</div>
<button class="text-primary dark:text-primary-fixed-dim hover:text-primary transition-colors duration-200">
<span class="material-symbols-outlined" data-icon="shopping_bag">shopping_bag</span>
</button>
</header>
<!-- Main Content -->
<main class="flex-grow w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-stack-lg pb-[100px] md:pb-stack-lg">
<div class="mb-stack-md">
<h1 class="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-on-background">Your Cart</h1>
<p class="font-body-md text-body-md text-on-surface-variant mt-2">Sacred nourishment, ready for checkout.</p>
</div>
<div class="flex flex-col lg:flex-row gap-gutter items-start">
<!-- Cart Items List -->
<div class="w-full lg:w-2/3 flex flex-col gap-base">
<!-- Item 1 -->
<div class="bg-surface-container-lowest rounded-xl p-4 ambient-shadow flex gap-4 items-center relative overflow-hidden transition-all duration-300 hover:scale-[1.01]">
<div class="w-24 h-24 rounded-lg overflow-hidden shrink-0 bg-surface-container-low">
<img alt="Pure Cow Ghee" class="w-full h-full object-cover mix-blend-multiply" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwB7bIM3kIQBi13I3uiIeNpBWRkcWH1zTTBgnDdT1B2cIisyV9ZEGcOY_gfaP5_3Z9EHDX1-1mCQHv6iNyxy8A2z5HBrxmTK8C3HaZQjEllAJfu4SrJ8YnmUCxHiSVWV8YSd8fp_5xTttiQ0fV7104CEpT5pSFUvn_MChshu_uoNb5itwCw_X7Uxdwl6zFrE5HVx8HjI-d9bOmBIxjyKF8LYFvPfEcSiNgH_QLVHSyHqffNBuNZ1n4kcoT78CSyR2waiU"/>
</div>
<div class="flex-grow flex flex-col justify-between h-full py-1">
<div>
<div class="flex justify-between items-start">
<h3 class="font-title-md text-title-md text-on-surface">Pure Cow Ghee</h3>
<button aria-label="Remove item" class="text-outline hover:text-error transition-colors p-1">
<span class="material-symbols-outlined" data-icon="close">close</span>
</button>
</div>
<span class="inline-block mt-1 bg-tertiary/10 text-tertiary font-label-sm text-label-sm px-2 py-0.5 rounded-full">A2 Vedic</span>
</div>
<div class="flex justify-between items-end mt-4">
<div class="flex items-center bg-surface-container-high rounded-full h-8 px-2 border border-outline-variant/30">
<button aria-label="Decrease quantity" class="w-6 h-6 flex items-center justify-center text-secondary hover:text-primary transition-colors">
<span class="material-symbols-outlined text-sm" data-icon="remove">remove</span>
</button>
<span class="w-8 text-center font-title-md text-title-md text-on-surface text-sm">2</span>
<button aria-label="Increase quantity" class="w-6 h-6 flex items-center justify-center text-secondary hover:text-primary transition-colors">
<span class="material-symbols-outlined text-sm" data-icon="add">add</span>
</button>
</div>
<div class="font-title-md text-title-md text-primary">$45.00</div>
</div>
</div>
</div>
<!-- Item 2 (Placeholder example) -->
<div class="bg-surface-container-lowest rounded-xl p-4 ambient-shadow flex gap-4 items-center relative overflow-hidden transition-all duration-300 hover:scale-[1.01]">
<div class="w-24 h-24 rounded-lg overflow-hidden shrink-0 bg-surface-container-low">
<div class="w-full h-full bg-cover bg-center mix-blend-multiply" data-alt="A jar of premium, golden clarified butter, richly textured, sitting on a rustic wooden table surrounded by warm, soft lighting. The scene evokes traditional ayurvedic wellness with a modern, organic, and clean aesthetic, featuring cream and umber tones." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCmfqcfOxnnO-APM69pyZ96gqLo3_upivTil_TtFZPjQJ5PHj_r9r9wKweT_VN3AYeuudohhPC9aeROtIuRNdmH-vOFuFaWJsaEuzAfPPJElUs1ueBpGVNQYBH_7XYahJm_6nDVHF-ENQ_tlrJYuoVKaXct2dKj2ptCsZGvjuRX8w33C327KUUctK-MTpTUN93-iCme2Gst5LPLuPKWFXz1t6Fok6YMAQ8DKQON60Smqzu5X6wAEiqSKQ')"></div>
</div>
<div class="flex-grow flex flex-col justify-between h-full py-1">
<div>
<div class="flex justify-between items-start">
<h3 class="font-title-md text-title-md text-on-surface">Artisanal Honey</h3>
<button aria-label="Remove item" class="text-outline hover:text-error transition-colors p-1">
<span class="material-symbols-outlined" data-icon="close">close</span>
</button>
</div>
<span class="inline-block mt-1 bg-tertiary/10 text-tertiary font-label-sm text-label-sm px-2 py-0.5 rounded-full">Wildcrafted</span>
</div>
<div class="flex justify-between items-end mt-4">
<div class="flex items-center bg-surface-container-high rounded-full h-8 px-2 border border-outline-variant/30">
<button aria-label="Decrease quantity" class="w-6 h-6 flex items-center justify-center text-secondary hover:text-primary transition-colors">
<span class="material-symbols-outlined text-sm" data-icon="remove">remove</span>
</button>
<span class="w-8 text-center font-title-md text-title-md text-on-surface text-sm">1</span>
<button aria-label="Increase quantity" class="w-6 h-6 flex items-center justify-center text-secondary hover:text-primary transition-colors">
<span class="material-symbols-outlined text-sm" data-icon="add">add</span>
</button>
</div>
<div class="font-title-md text-title-md text-primary">$28.00</div>
</div>
</div>
</div>
</div>
<!-- Order Summary Sidebar -->
<div class="w-full lg:w-1/3 bg-surface-container-lowest rounded-xl p-6 ambient-shadow sticky top-24">
<h2 class="font-title-md text-title-md text-on-surface mb-6 border-b border-outline-variant pb-4">Order Summary</h2>
<div class="space-y-4 mb-6 text-on-surface-variant font-body-md text-body-md">
<div class="flex justify-between">
<span>Subtotal (3 items)</span>
<span class="font-title-md text-title-md text-on-surface text-base">$118.00</span>
</div>
<div class="flex justify-between">
<span>Shipping</span>
<span class="font-title-md text-title-md text-on-surface text-base">Calculated at next step</span>
</div>
<div class="flex justify-between">
<span>Tax</span>
<span class="font-title-md text-title-md text-on-surface text-base">$8.26</span>
</div>
</div>
<div class="border-t border-outline-variant pt-4 mb-6">
<div class="flex justify-between items-center">
<span class="font-title-md text-title-md text-on-surface">Total</span>
<span class="font-headline-lg-mobile text-headline-lg-mobile text-primary">$126.26</span>
</div>
</div>
<!-- Coupon Field -->
<div class="mb-6">
<div class="flex rounded-lg overflow-hidden border border-outline-variant focus-within:border-primary transition-colors bg-surface-container-low">
<input class="w-full bg-transparent border-none focus:ring-0 text-on-surface font-body-md text-body-md py-3 px-4 placeholder:text-outline" placeholder="Promo code" type="text"/>
<button class="bg-surface-variant text-on-surface-variant font-label-sm text-label-sm px-4 hover:bg-surface-container-highest transition-colors">Apply</button>
</div>
</div>
<button class="w-full bg-primary text-on-primary font-label-sm text-label-sm py-4 rounded-lg hover:scale-[1.02] transition-transform shadow-md">
                    Proceed to Checkout
                </button>
<div class="mt-4 flex items-center justify-center gap-2 text-outline font-label-sm text-label-sm">
<span class="material-symbols-outlined text-sm" data-icon="lock">lock</span>
                    Secure Checkout
                </div>
</div>
</div>
</main>
<!-- BottomNavBar (Mobile) -->
<nav class="md:hidden bg-surface dark:bg-surface-container-highest fixed bottom-0 w-full z-50 rounded-t-xl bg-surface dark:bg-surface-container-highest border-t border-outline-variant shadow-[0_-4px_10px_rgba(121,89,0,0.08)] fixed bottom-0 left-0 w-full flex justify-around items-center h-20 px-2 pb-safe">
<a class="flex flex-col items-center justify-center text-on-surface-variant hover:bg-surface-container-high w-16 h-full rounded-xl transition-colors" href="#">
<span class="material-symbols-outlined" data-icon="home">home</span>
<span class="font-label-sm text-label-sm mt-1">Home</span>
</a>
<a class="flex flex-col items-center justify-center text-on-surface-variant hover:bg-surface-container-high w-16 h-full rounded-xl transition-colors" href="#">
<span class="material-symbols-outlined" data-icon="storefront">storefront</span>
<span class="font-label-sm text-label-sm mt-1">Shop</span>
</a>
<a class="flex flex-col items-center justify-center bg-primary-container text-on-primary-container rounded-full px-4 py-1 hover:bg-surface-container-high scale-105 transition-all duration-300 ease-out" href="#">
<span class="material-symbols-outlined fill-icon" data-icon="shopping_cart">shopping_cart</span>
<span class="font-label-sm text-label-sm mt-1">Cart</span>
</a>
<a class="flex flex-col items-center justify-center text-on-surface-variant hover:bg-surface-container-high w-16 h-full rounded-xl transition-colors" href="#">
<span class="material-symbols-outlined" data-icon="person">person</span>
<span class="font-label-sm text-label-sm mt-1">Profile</span>
</a>
</nav>
    
    {{DATA:COMPONENTS:COMPONENTS_4}}


</body></html>

<!-- Dhenuh - Payment -->
<!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Dhenuh - Secure Payment</title>
<!-- Google Fonts -->
<link href="https://fonts.googleapis.com" rel="preconnect"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Libre+Caslon+Text:ital,wght@0,400;0,700;1,400&amp;family=Work+Sans:wght@300;400;500;600&amp;display=swap" rel="stylesheet"/>
<!-- Material Symbols -->
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<!-- Tailwind CSS -->
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<!-- Tailwind Config -->
<script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            "colors": {
                    "on-secondary": "#ffffff",
                    "on-tertiary": "#ffffff",
                    "on-primary": "#ffffff",
                    "error": "#ba1a1a",
                    "on-secondary-container": "#795950",
                    "on-primary-fixed": "#261a00",
                    "on-primary-container": "#503a00",
                    "inverse-on-surface": "#f4f0e7",
                    "secondary-fixed": "#ffdbd0",
                    "primary-fixed-dim": "#f6be39",
                    "tertiary": "#536442",
                    "inverse-surface": "#31312b",
                    "surface-container-lowest": "#ffffff",
                    "secondary-fixed-dim": "#e7bdb1",
                    "on-surface-variant": "#4f4634",
                    "surface-bright": "#fdf9f0",
                    "outline-variant": "#d3c5ae",
                    "on-tertiary-fixed-variant": "#3c4c2c",
                    "outline": "#817662",
                    "on-background": "#1c1c17",
                    "tertiary-fixed-dim": "#bacda4",
                    "secondary-container": "#fed3c7",
                    "tertiary-container": "#9cae87",
                    "surface": "#fdf9f0",
                    "on-secondary-fixed": "#2c160e",
                    "on-error": "#ffffff",
                    "on-secondary-fixed-variant": "#5d4037",
                    "on-error-container": "#93000a",
                    "error-container": "#ffdad6",
                    "surface-dim": "#dddad1",
                    "secondary": "#77574d",
                    "surface-container": "#f1eee5",
                    "primary-container": "#d4a017",
                    "tertiary-fixed": "#d6e9be",
                    "on-tertiary-fixed": "#111f05",
                    "surface-container-low": "#f7f3ea",
                    "surface-container-high": "#ece8df",
                    "primary-fixed": "#ffdfa0",
                    "on-primary-fixed-variant": "#5c4300",
                    "background": "#fdf9f0",
                    "surface-variant": "#e6e2d9",
                    "on-surface": "#1c1c17",
                    "inverse-primary": "#f6be39",
                    "surface-tint": "#795900",
                    "surface-container-highest": "#e6e2d9",
                    "on-tertiary-container": "#324223",
                    "primary": "#795900"
            },
            "borderRadius": {
                    "DEFAULT": "0.25rem",
                    "lg": "0.5rem",
                    "xl": "0.75rem",
                    "full": "9999px"
            },
            "spacing": {
                    "stack-lg": "48px",
                    "gutter": "24px",
                    "container-max": "1280px",
                    "margin-mobile": "16px",
                    "base": "8px",
                    "margin-desktop": "64px",
                    "stack-md": "24px",
                    "stack-sm": "12px"
            },
            "fontFamily": {
                    "headline-lg": ["Libre Caslon Text"],
                    "body-lg": ["Work Sans"],
                    "label-sm": ["Work Sans"],
                    "title-md": ["Libre Caslon Text"],
                    "body-md": ["Work Sans"],
                    "headline-lg-mobile": ["Libre Caslon Text"],
                    "display-lg": ["Libre Caslon Text"]
            },
            "fontSize": {
                    "headline-lg": ["32px", { "lineHeight": "40px", "fontWeight": "600" }],
                    "body-lg": ["18px", { "lineHeight": "28px", "fontWeight": "400" }],
                    "label-sm": ["12px", { "lineHeight": "16px", "letterSpacing": "0.05em", "fontWeight": "600" }],
                    "title-md": ["20px", { "lineHeight": "28px", "fontWeight": "600" }],
                    "body-md": ["16px", { "lineHeight": "24px", "fontWeight": "400" }],
                    "headline-lg-mobile": ["28px", { "lineHeight": "36px", "fontWeight": "600" }],
                    "display-lg": ["48px", { "lineHeight": "56px", "letterSpacing": "-0.02em", "fontWeight": "700" }]
            }
          }
        }
      }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
        }
        .filled-icon {
            font-variation-settings: 'FILL' 1, 'wght' 300, 'GRAD' 0, 'opsz' 24 !important;
        }
        input[type="radio"]:checked + div {
            border-color: #795900;
            background-color: #f7f3ea;
        }
        input[type="radio"]:checked + div .radio-inner {
            background-color: #795900;
        }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="bg-surface text-on-surface font-body-md min-h-screen flex flex-col selection:bg-primary-container selection:text-on-primary-container">
<!-- Transactional Header (Navigation Shell Suppressed as per rules) -->
<header class="w-full flex items-center justify-between px-margin-mobile md:px-margin-desktop h-16 border-b border-outline-variant bg-surface sticky top-0 z-40">
<button aria-label="Go back" class="flex items-center text-on-surface-variant hover:text-primary transition-colors">
<span class="material-symbols-outlined">arrow_back</span>
</button>
<div class="flex items-center gap-2 text-primary">
<span class="material-symbols-outlined filled-icon">lock</span>
<span class="font-label-sm text-label-sm uppercase tracking-widest">Secure Checkout</span>
</div>
<div class="w-6"></div> <!-- Spacer for centering -->
</header>
<!-- Main Checkout Content -->
<main class="flex-1 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-stack-md md:py-stack-lg flex flex-col lg:flex-row gap-gutter">
<!-- Left Column: Payment Methods -->
<section class="w-full lg:w-2/3 flex flex-col gap-stack-md">
<div class="flex flex-col gap-2">
<h1 class="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-primary">Payment</h1>
<p class="font-body-md text-body-md text-on-surface-variant">All transactions are secure and encrypted.</p>
</div>
<!-- Payment Options Accordion -->
<div class="flex flex-col gap-4">
<!-- UPI Option -->
<label class="relative cursor-pointer group">
<input checked="" class="peer sr-only" name="payment_method" onchange="togglePaymentDetails('upi')" type="radio" value="upi"/>
<div class="w-full p-4 rounded-xl border border-outline-variant bg-surface-container-lowest transition-all duration-300">
<div class="flex items-center justify-between w-full">
<div class="flex items-center gap-4">
<div class="w-5 h-5 rounded-full border border-outline flex items-center justify-center">
<div class="w-3 h-3 rounded-full radio-inner transition-colors"></div>
</div>
<span class="material-symbols-outlined text-secondary">qr_code_scanner</span>
<span class="font-title-md text-title-md text-on-surface">UPI (GPay, PhonePe, Paytm)</span>
</div>
</div>
<!-- Expanded Content -->
<div class="mt-4 pt-4 border-t border-outline-variant flex flex-col gap-4 transition-all overflow-hidden block" id="details-upi">
<div class="bg-surface-container-low p-4 rounded-lg flex flex-col items-center justify-center text-center border border-outline-variant/50">
<span class="material-symbols-outlined text-display-lg text-primary mb-2">qr_code_2</span>
<p class="font-body-md text-body-md text-on-surface-variant">A payment request will be sent to your UPI app. Please complete the payment to confirm your order.</p>
<div class="mt-4 w-full">
<input class="w-full bg-surface border-b-2 border-outline-variant focus:border-primary focus:outline-none py-2 text-on-surface font-body-md text-body-md placeholder-on-surface-variant/60 transition-colors" placeholder="Enter UPI ID (e.g., name@okhdfcbank)" type="text"/>
</div>
</div>
</div>
</div>
</label>
<!-- Credit/Debit Card Option -->
<label class="relative cursor-pointer group">
<input class="peer sr-only" name="payment_method" onchange="togglePaymentDetails('card')" type="radio" value="card"/>
<div class="w-full p-4 rounded-xl border border-outline-variant bg-surface-container-lowest transition-all duration-300">
<div class="flex items-center justify-between w-full">
<div class="flex items-center gap-4">
<div class="w-5 h-5 rounded-full border border-outline flex items-center justify-center">
<div class="w-3 h-3 rounded-full radio-inner transition-colors"></div>
</div>
<span class="material-symbols-outlined text-secondary">credit_card</span>
<span class="font-title-md text-title-md text-on-surface">Credit / Debit Card</span>
</div>
<div class="flex gap-1 text-outline">
<!-- Card brand icons as simple spans or images in real world -->
<span class="font-label-sm text-label-sm uppercase">Visa</span>
<span class="font-label-sm text-label-sm uppercase">MC</span>
</div>
</div>
<!-- Expanded Content -->
<div class="mt-4 pt-4 border-t border-outline-variant flex flex-col gap-6 transition-all overflow-hidden hidden" id="details-card">
<div class="relative w-full">
<input class="w-full bg-surface-container-lowest border-b border-outline-variant focus:border-primary focus:outline-none py-3 pl-0 pr-10 text-on-surface font-body-md text-body-md placeholder-on-surface-variant/60 transition-colors" placeholder="Card Number" type="text"/>
<span class="material-symbols-outlined absolute right-2 top-3 text-outline">credit_card</span>
</div>
<div class="flex gap-4">
<div class="w-1/2">
<input class="w-full bg-surface-container-lowest border-b border-outline-variant focus:border-primary focus:outline-none py-3 pl-0 text-on-surface font-body-md text-body-md placeholder-on-surface-variant/60 transition-colors" placeholder="MM / YY" type="text"/>
</div>
<div class="w-1/2 relative">
<input class="w-full bg-surface-container-lowest border-b border-outline-variant focus:border-primary focus:outline-none py-3 pl-0 pr-10 text-on-surface font-body-md text-body-md placeholder-on-surface-variant/60 transition-colors" maxlength="4" placeholder="CVV" type="password"/>
<span class="material-symbols-outlined absolute right-2 top-3 text-outline">info</span>
</div>
</div>
<div class="w-full">
<input class="w-full bg-surface-container-lowest border-b border-outline-variant focus:border-primary focus:outline-none py-3 pl-0 text-on-surface font-body-md text-body-md placeholder-on-surface-variant/60 transition-colors" placeholder="Name on Card" type="text"/>
</div>
</div>
</div>
</label>
<!-- Net Banking Option -->
<label class="relative cursor-pointer group">
<input class="peer sr-only" name="payment_method" onchange="togglePaymentDetails('netbanking')" type="radio" value="netbanking"/>
<div class="w-full p-4 rounded-xl border border-outline-variant bg-surface-container-lowest transition-all duration-300">
<div class="flex items-center justify-between w-full">
<div class="flex items-center gap-4">
<div class="w-5 h-5 rounded-full border border-outline flex items-center justify-center">
<div class="w-3 h-3 rounded-full radio-inner transition-colors"></div>
</div>
<span class="material-symbols-outlined text-secondary">account_balance</span>
<span class="font-title-md text-title-md text-on-surface">Net Banking</span>
</div>
</div>
<!-- Expanded Content -->
<div class="mt-4 pt-4 border-t border-outline-variant flex flex-col gap-4 transition-all overflow-hidden hidden" id="details-netbanking">
<p class="font-body-md text-body-md text-on-surface-variant">You will be redirected to your bank's secure portal to complete the payment.</p>
<select class="w-full bg-surface border-b border-outline-variant focus:border-primary focus:outline-none py-3 text-on-surface font-body-md text-body-md cursor-pointer appearance-none">
<option disabled="" selected="" value="">Select your bank</option>
<option value="sbi">State Bank of India</option>
<option value="hdfc">HDFC Bank</option>
<option value="icici">ICICI Bank</option>
<option value="axis">Axis Bank</option>
<option value="kotak">Kotak Mahindra Bank</option>
</select>
</div>
</div>
</label>
</div>
</section>
<!-- Right Column: Order Summary -->
<aside class="w-full lg:w-1/3 flex flex-col gap-stack-sm mt-8 lg:mt-0">
<div class="bg-surface-container-lowest rounded-2xl p-6 shadow-[0_8px_30px_rgba(119,87,77,0.08)] border border-outline-variant/30 flex flex-col gap-6 sticky top-24">
<h2 class="font-title-md text-title-md text-on-surface border-b border-outline-variant pb-4">Order Summary</h2>
<!-- Product Items -->
<div class="flex flex-col gap-4">
<div class="flex items-start gap-4">
<div class="w-16 h-16 rounded-lg overflow-hidden bg-surface-container-high border border-outline-variant flex-shrink-0 relative">
<div class="w-full h-full bg-cover bg-center" data-alt="A jar of pure Dhenuh A2 cow ghee on a rustic wooden table with soft morning lighting, modern organic e-commerce aesthetic, premium natural textures." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDB1ER94v59ofofiV632gBj8jhNbI790J6rhLsRPDLE85DeJIAyxTbt3rh3gdDS0Oxaehj_qMRObemfjhdcXhCATwuNQIPwUAYtp6LHYNGALQqAY-CUnPBgl7OJqA1PTmkXZQqlT8Tec6VZj1Ht25R3RTViIhXn65Wgw9YKi_9hlS9083tlopFi1sljtanzTODPfz9QGHJ4Gb-rAvIeE2GOIi8seS9cSwo8sjJi2041IrxwJjMdjz0xWg')"></div>
<span class="absolute -top-2 -right-2 bg-secondary text-on-secondary font-label-sm text-label-sm w-5 h-5 flex items-center justify-center rounded-full text-[10px]">2</span>
</div>
<div class="flex flex-col flex-1">
<span class="font-body-md text-body-md font-medium text-on-surface">Pure Cow Ghee</span>
<span class="font-body-sm text-body-sm text-on-surface-variant">500ml Glass Jar</span>
</div>
<span class="font-title-md text-title-md text-primary">₹1,250</span>
</div>
</div>
<!-- Calculation Lines -->
<div class="flex flex-col gap-3 pt-4 border-t border-outline-variant border-dashed">
<div class="flex justify-between items-center text-on-surface-variant font-body-md text-body-md">
<span>Subtotal</span>
<span>₹2,500</span>
</div>
<div class="flex justify-between items-center text-on-surface-variant font-body-md text-body-md">
<span>Shipping</span>
<span class="text-tertiary">Free</span>
</div>
<div class="flex justify-between items-center text-on-surface-variant font-body-md text-body-md">
<span>Taxes</span>
<span>₹125</span>
</div>
</div>
<!-- Total -->
<div class="flex justify-between items-center pt-4 border-t border-outline-variant">
<span class="font-title-md text-title-md text-on-surface font-bold">Total</span>
<span class="font-headline-lg-mobile text-headline-lg-mobile text-primary font-bold">₹2,625</span>
</div>
<!-- Action Button -->
<button class="w-full bg-primary hover:bg-primary-container hover:text-on-primary-container text-on-primary py-4 rounded-full font-title-md text-title-md flex items-center justify-center gap-2 transition-all duration-300 shadow-md hover:shadow-lg mt-4 group">
<span class="material-symbols-outlined text-[20px] group-hover:scale-110 transition-transform">lock</span>
                    Pay Now
                </button>
<p class="text-center font-label-sm text-label-sm text-on-surface-variant mt-2 flex items-center justify-center gap-1">
<span class="material-symbols-outlined text-[14px]">shield</span>
                    Your payment information is processed securely.
                </p>
</div>
</aside>
</main>

    {{DATA:COMPONENTS:COMPONENTS_4}}

    <!-- Simple Interactivity for Accordions -->
<script>
        function togglePaymentDetails(activeMethod) {
            const methods = ['upi', 'card', 'netbanking'];
            methods.forEach(method => {
                const el = document.getElementById(`details-${method}`);
                if(el) {
                    if(method === activeMethod) {
                        el.classList.remove('hidden');
                        el.classList.add('block');
                    } else {
                        el.classList.add('hidden');
                        el.classList.remove('block');
                    }
                }
            });
        }
    </script>
</body></html>

<!-- Dhenuh - Checkout -->
<!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Checkout - Dhenuh</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Libre+Caslon+Text:ital,wght@0,400;0,700;1,400&amp;family=Work+Sans:wght@400;500;600&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    "colors": {
                        "on-secondary": "#ffffff",
                        "on-tertiary": "#ffffff",
                        "on-primary": "#ffffff",
                        "error": "#ba1a1a",
                        "on-secondary-container": "#795950",
                        "on-primary-fixed": "#261a00",
                        "on-primary-container": "#503a00",
                        "inverse-on-surface": "#f4f0e7",
                        "secondary-fixed": "#ffdbd0",
                        "primary-fixed-dim": "#f6be39",
                        "tertiary": "#536442",
                        "inverse-surface": "#31312b",
                        "surface-container-lowest": "#ffffff",
                        "secondary-fixed-dim": "#e7bdb1",
                        "on-surface-variant": "#4f4634",
                        "surface-bright": "#fdf9f0",
                        "outline-variant": "#d3c5ae",
                        "on-tertiary-fixed-variant": "#3c4c2c",
                        "outline": "#817662",
                        "on-background": "#1c1c17",
                        "tertiary-fixed-dim": "#bacda4",
                        "secondary-container": "#fed3c7",
                        "tertiary-container": "#9cae87",
                        "surface": "#fdf9f0",
                        "on-secondary-fixed": "#2c160e",
                        "on-error": "#ffffff",
                        "on-secondary-fixed-variant": "#5d4037",
                        "on-error-container": "#93000a",
                        "error-container": "#ffdad6",
                        "surface-dim": "#dddad1",
                        "secondary": "#77574d",
                        "surface-container": "#f1eee5",
                        "primary-container": "#d4a017",
                        "tertiary-fixed": "#d6e9be",
                        "on-tertiary-fixed": "#111f05",
                        "surface-container-low": "#f7f3ea",
                        "surface-container-high": "#ece8df",
                        "primary-fixed": "#ffdfa0",
                        "on-primary-fixed-variant": "#5c4300",
                        "background": "#fdf9f0",
                        "surface-variant": "#e6e2d9",
                        "on-surface": "#1c1c17",
                        "inverse-primary": "#f6be39",
                        "surface-tint": "#795900",
                        "surface-container-highest": "#e6e2d9",
                        "on-tertiary-container": "#324223",
                        "primary": "#795900"
                    },
                    "borderRadius": {
                        "DEFAULT": "0.25rem",
                        "lg": "0.5rem",
                        "xl": "0.75rem",
                        "full": "9999px"
                    },
                    "spacing": {
                        "stack-lg": "48px",
                        "gutter": "24px",
                        "container-max": "1280px",
                        "margin-mobile": "16px",
                        "base": "8px",
                        "margin-desktop": "64px",
                        "stack-md": "24px",
                        "stack-sm": "12px"
                    },
                    "fontFamily": {
                        "headline-lg": ["Libre Caslon Text"],
                        "body-lg": ["Work Sans"],
                        "label-sm": ["Work Sans"],
                        "title-md": ["Libre Caslon Text"],
                        "body-md": ["Work Sans"],
                        "headline-lg-mobile": ["Libre Caslon Text"],
                        "display-lg": ["Libre Caslon Text"]
                    },
                    "fontSize": {
                        "headline-lg": ["32px", { "lineHeight": "40px", "fontWeight": "600" }],
                        "body-lg": ["18px", { "lineHeight": "28px", "fontWeight": "400" }],
                        "label-sm": ["12px", { "lineHeight": "16px", "letterSpacing": "0.05em", "fontWeight": "600" }],
                        "title-md": ["20px", { "lineHeight": "28px", "fontWeight": "600" }],
                        "body-md": ["16px", { "lineHeight": "24px", "fontWeight": "400" }],
                        "headline-lg-mobile": ["28px", { "lineHeight": "36px", "fontWeight": "600" }],
                        "display-lg": ["48px", { "lineHeight": "56px", "letterSpacing": "-0.02em", "fontWeight": "700" }]
                    }
                }
            }
        }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .material-symbols-outlined.fill {
            font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="bg-background text-on-background min-h-screen font-body-md text-body-md">
<!-- TopAppBar (Transactional - Hidden/Simplified Nav) -->
<header class="bg-surface/80 dark:bg-surface-dim/80 backdrop-blur-md text-primary dark:text-primary-fixed-dim docked full-width top-0 sticky z-50 flat no shadows flex justify-between items-center px-margin-mobile h-16 w-full max-w-container-max mx-auto border-b border-outline-variant/30">
<a class="flex items-center gap-2" href="#">
<span class="material-symbols-outlined">arrow_back</span>
<span class="font-body-md text-body-md">Back to Cart</span>
</a>
<div class="font-headline-lg-mobile text-headline-lg-mobile text-primary dark:text-primary-fixed-dim italic">Dhenuh</div>
<div class="w-6"></div> <!-- Spacer for alignment -->
</header>
<main class="max-w-[800px] mx-auto px-margin-mobile md:px-margin-desktop py-stack-md pb-stack-lg">
<h1 class="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-primary mb-stack-md text-center">Secure Checkout</h1>
<!-- Progress Indicator -->
<div class="flex items-center justify-between mb-stack-lg px-4 relative">
<div class="absolute left-0 top-1/2 w-full h-[2px] bg-surface-container-highest -z-10 -translate-y-1/2"></div>
<div class="absolute left-0 top-1/2 w-1/3 h-[2px] bg-primary -z-10 -translate-y-1/2"></div>
<div class="flex flex-col items-center gap-2">
<div class="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center font-label-sm text-label-sm shadow-md">1</div>
<span class="font-label-sm text-label-sm text-primary">Shipping</span>
</div>
<div class="flex flex-col items-center gap-2">
<div class="w-8 h-8 rounded-full bg-surface-container-high border-2 border-outline-variant text-on-surface-variant flex items-center justify-center font-label-sm text-label-sm">2</div>
<span class="font-label-sm text-label-sm text-on-surface-variant">Delivery</span>
</div>
<div class="flex flex-col items-center gap-2">
<div class="w-8 h-8 rounded-full bg-surface-container-high border-2 border-outline-variant text-on-surface-variant flex items-center justify-center font-label-sm text-label-sm">3</div>
<span class="font-label-sm text-label-sm text-on-surface-variant">Payment</span>
</div>
</div>
<div class="flex flex-col gap-stack-md">
<!-- Section 1: Shipping Address -->
<section class="bg-surface-container-lowest rounded-xl shadow-[0_8px_30px_rgba(119,87,77,0.08)] p-gutter border border-surface-container-high overflow-hidden relative">
<div class="absolute top-0 left-0 w-1 h-full bg-primary"></div>
<h2 class="font-title-md text-title-md text-secondary mb-stack-sm flex items-center gap-2">
<span class="material-symbols-outlined text-primary">location_on</span>
                    Shipping Address
                </h2>
<form class="grid grid-cols-1 md:grid-cols-2 gap-4">
<div class="col-span-1 md:col-span-2">
<label class="block font-label-sm text-label-sm text-on-surface-variant mb-1">Full Name</label>
<input class="w-full bg-surface-container-low border-b border-outline focus:border-primary focus:ring-0 px-3 py-2 text-on-surface bg-transparent transition-colors" placeholder="e.g. Aditi Sharma" type="text"/>
</div>
<div class="col-span-1 md:col-span-2">
<label class="block font-label-sm text-label-sm text-on-surface-variant mb-1">Street Address</label>
<input class="w-full bg-surface-container-low border-b border-outline focus:border-primary focus:ring-0 px-3 py-2 text-on-surface bg-transparent transition-colors" placeholder="House No., Street Name" type="text"/>
</div>
<div class="col-span-1">
<label class="block font-label-sm text-label-sm text-on-surface-variant mb-1">City</label>
<input class="w-full bg-surface-container-low border-b border-outline focus:border-primary focus:ring-0 px-3 py-2 text-on-surface bg-transparent transition-colors" placeholder="City" type="text"/>
</div>
<div class="col-span-1">
<label class="block font-label-sm text-label-sm text-on-surface-variant mb-1">ZIP / Postal Code</label>
<input class="w-full bg-surface-container-low border-b border-outline focus:border-primary focus:ring-0 px-3 py-2 text-on-surface bg-transparent transition-colors" placeholder="ZIP Code" type="text"/>
</div>
<div class="col-span-1 md:col-span-2">
<label class="block font-label-sm text-label-sm text-on-surface-variant mb-1">Mobile Number</label>
<input class="w-full bg-surface-container-low border-b border-outline focus:border-primary focus:ring-0 px-3 py-2 text-on-surface bg-transparent transition-colors" placeholder="+91" type="tel"/>
</div>
<div class="col-span-1 md:col-span-2 mt-4 flex justify-end">
<button class="bg-primary text-on-primary font-label-sm text-label-sm py-3 px-6 rounded-full hover:bg-surface-tint transition-all active:scale-95 shadow-md" type="button">
                            Continue to Delivery
                        </button>
</div>
</form>
</section>
<!-- Collapsed Sections for preview -->
<section class="bg-surface-container-low rounded-xl p-gutter border border-outline-variant/30 flex justify-between items-center opacity-70">
<h2 class="font-title-md text-title-md text-secondary flex items-center gap-2">
<span class="material-symbols-outlined">local_shipping</span>
                    Delivery Speed
                </h2>
<span class="material-symbols-outlined text-outline">expand_more</span>
</section>
<section class="bg-surface-container-low rounded-xl p-gutter border border-outline-variant/30 flex justify-between items-center opacity-70">
<h2 class="font-title-md text-title-md text-secondary flex items-center gap-2">
<span class="material-symbols-outlined">payments</span>
                    Payment
                </h2>
<span class="material-symbols-outlined text-outline">expand_more</span>
</section>
<!-- Order Summary Sidebar/Section -->
<section class="mt-stack-sm bg-surface-container rounded-xl p-gutter shadow-sm border border-outline-variant/20">
<h3 class="font-title-md text-title-md text-primary mb-4 border-b border-outline-variant pb-2">Order Summary</h3>
<div class="flex items-center gap-4 mb-4">
<div class="w-16 h-16 rounded-lg bg-surface-container-highest overflow-hidden relative border border-outline-variant/30">
<img class="w-full h-full object-cover" data-alt="A small product image of a premium glass jar of A2 cow ghee on a clean cream background. Soft, diffused warm lighting highlighting the golden hue of the ghee. Minimalist modern organic style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-o-NUNpVTTksoBt64O7hcurasuXJnf9EEDDfuQXh5gsxf_dJ9jdy1bLD08fF3wwSmge8k3CsmJ9-N_BITG8HmIhcqAnJnh0Tg0ysEVQ94_FN6k7_DKYGQWKZyAq4wy4zbp1hPWoNeV_81laLk9ETt-EKQqg9e3biVgiKomccpgyC1ClsCiBS4v0y6ImC7k1bsBJFBRnx39gI2aqQhoFem3gxf9IDr8-_6lIDYyFHx5XNAohPp8VVL8g"/>
</div>
<div class="flex-1">
<div class="font-body-md text-body-md font-medium text-on-surface">Pure A2 Vedic Ghee</div>
<div class="font-label-sm text-label-sm text-on-surface-variant">500ml • Glass Jar</div>
</div>
<div class="font-title-md text-title-md text-primary">₹1,250</div>
</div>
<div class="space-y-2 border-t border-outline-variant/50 pt-4 mt-4">
<div class="flex justify-between font-body-md text-body-md text-on-surface-variant">
<span>Subtotal</span>
<span>₹1,250</span>
</div>
<div class="flex justify-between font-body-md text-body-md text-on-surface-variant">
<span>Shipping</span>
<span class="text-tertiary">Calculated at next step</span>
</div>
</div>
<div class="flex justify-between font-title-md text-title-md text-on-surface mt-4 pt-4 border-t border-outline-variant font-bold">
<span>Total</span>
<span>₹1,250</span>
</div>
</section>
</div>
</main>
<!-- Footer -->
<footer class="w-full px-margin-desktop py-stack-lg flex flex-col md:flex-row justify-between items-center gap-base bg-surface-container-highest dark:bg-surface-dim border-t border-outline-variant pt-stack-lg pb-stack-md mt-stack-lg">
<div class="font-headline-lg text-headline-lg text-secondary italic">Dhenuh</div>
<p class="font-body-md text-body-md text-on-surface-variant text-center">© 2024 Dhenuh Cow Ghee. Traditional Ayurvedic Heritage.</p>
<div class="flex gap-4 font-body-md text-body-md">
<a class="text-on-surface-variant hover:text-primary transition-colors underline" href="#">Privacy Policy</a>
<a class="text-on-surface-variant hover:text-primary transition-colors underline" href="#">Terms of Service</a>
</div>
</footer>
</body></html>

<!-- Dhenuh - Login/Sign Up -->
<!DOCTYPE html>

<html lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Dhenuh - Login &amp; Registration</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Libre+Caslon+Text:ital,wght@0,400;0,700;1,400&amp;family=Work+Sans:wght@400;600&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    "colors": {
                        "on-secondary": "#ffffff",
                        "on-tertiary": "#ffffff",
                        "on-primary": "#ffffff",
                        "error": "#ba1a1a",
                        "on-secondary-container": "#795950",
                        "on-primary-fixed": "#261a00",
                        "on-primary-container": "#503a00",
                        "inverse-on-surface": "#f4f0e7",
                        "secondary-fixed": "#ffdbd0",
                        "primary-fixed-dim": "#f6be39",
                        "tertiary": "#536442",
                        "inverse-surface": "#31312b",
                        "surface-container-lowest": "#ffffff",
                        "secondary-fixed-dim": "#e7bdb1",
                        "on-surface-variant": "#4f4634",
                        "surface-bright": "#fdf9f0",
                        "outline-variant": "#d3c5ae",
                        "on-tertiary-fixed-variant": "#3c4c2c",
                        "outline": "#817662",
                        "on-background": "#1c1c17",
                        "tertiary-fixed-dim": "#bacda4",
                        "secondary-container": "#fed3c7",
                        "tertiary-container": "#9cae87",
                        "surface": "#fdf9f0",
                        "on-secondary-fixed": "#2c160e",
                        "on-error": "#ffffff",
                        "on-secondary-fixed-variant": "#5d4037",
                        "on-error-container": "#93000a",
                        "error-container": "#ffdad6",
                        "surface-dim": "#dddad1",
                        "secondary": "#77574d",
                        "surface-container": "#f1eee5",
                        "primary-container": "#d4a017",
                        "tertiary-fixed": "#d6e9be",
                        "on-tertiary-fixed": "#111f05",
                        "surface-container-low": "#f7f3ea",
                        "surface-container-high": "#ece8df",
                        "primary-fixed": "#ffdfa0",
                        "on-primary-fixed-variant": "#5c4300",
                        "background": "#fdf9f0",
                        "surface-variant": "#e6e2d9",
                        "on-surface": "#1c1c17",
                        "inverse-primary": "#f6be39",
                        "surface-tint": "#795900",
                        "surface-container-highest": "#e6e2d9",
                        "on-tertiary-container": "#324223",
                        "primary": "#795900"
                    },
                    "borderRadius": {
                        "DEFAULT": "0.25rem",
                        "lg": "0.5rem",
                        "xl": "0.75rem",
                        "full": "9999px"
                    },
                    "spacing": {
                        "stack-lg": "48px",
                        "gutter": "24px",
                        "container-max": "1280px",
                        "margin-mobile": "16px",
                        "base": "8px",
                        "margin-desktop": "64px",
                        "stack-md": "24px",
                        "stack-sm": "12px"
                    },
                    "fontFamily": {
                        "headline-lg": ["Libre Caslon Text"],
                        "body-lg": ["Work Sans"],
                        "label-sm": ["Work Sans"],
                        "title-md": ["Libre Caslon Text"],
                        "body-md": ["Work Sans"],
                        "headline-lg-mobile": ["Libre Caslon Text"],
                        "display-lg": ["Libre Caslon Text"]
                    },
                    "fontSize": {
                        "headline-lg": ["32px", { "lineHeight": "40px", "fontWeight": "600" }],
                        "body-lg": ["18px", { "lineHeight": "28px", "fontWeight": "400" }],
                        "label-sm": ["12px", { "lineHeight": "16px", "letterSpacing": "0.05em", "fontWeight": "600" }],
                        "title-md": ["20px", { "lineHeight": "28px", "fontWeight": "600" }],
                        "body-md": ["16px", { "lineHeight": "24px", "fontWeight": "400" }],
                        "headline-lg-mobile": ["28px", { "lineHeight": "36px", "fontWeight": "600" }],
                        "display-lg": ["48px", { "lineHeight": "56px", "letterSpacing": "-0.02em", "fontWeight": "700" }]
                    }
                },
            },
        }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .tab-content { display: none; }
        .tab-content.active { display: block; }
    </style>
</head>
<body class="bg-background text-on-background font-body-md min-h-screen flex flex-col justify-center items-center py-10 px-margin-mobile">
<div class="w-full max-w-md bg-surface-container-lowest rounded-xl shadow-[0_8px_30px_rgba(121,89,0,0.05)] overflow-hidden">
<!-- Header / Logo -->
<div class="bg-surface-container-low py-8 flex flex-col items-center justify-center border-b border-surface-variant">
<img alt="Dhenuh Logo" class="w-32 h-32 object-contain mb-4" src="https://lh3.googleusercontent.com/aida-public/AB6AXuARTxe8d8XFnOP_fQDPGYRAqF6t-HifGz5ZT_L6ZD1IzvQIurQJ-5UJ3OVIesPSLtXqgDs_IAsTETGzQn5cVcP4GTqnDaJtltnohXr3900a9LFBRRgVvwH7kVxbZzFV-M3YGc4QGmPdWr7ww-X-4ikqlZQUhHSublS7dTonwBZWYkHpkmlXYlWp47J38wspsrsOEglA9rsxGs63GKDsf9av6bkAg5o0G2G3bB6Uw2PUmYSKS_-HNbU_v_lPnqYIOaf5OcA"/>
<h1 class="font-display-lg text-display-lg text-primary text-center">Dhenuh</h1>
<p class="font-body-md text-body-md text-secondary mt-2">Sacred Nourishment</p>
</div>
<!-- Tabs -->
<div class="flex border-b border-surface-variant">
<button class="flex-1 py-4 text-center font-title-md text-title-md text-primary border-b-2 border-primary focus:outline-none transition-colors" id="tab-login" onclick="switchTab('login')">Login</button>
<button class="flex-1 py-4 text-center font-title-md text-title-md text-on-surface-variant focus:outline-none transition-colors" id="tab-signup" onclick="switchTab('signup')">Sign Up</button>
</div>
<!-- Form Container -->
<div class="p-8">
<!-- Login Form -->
<div class="tab-content active" id="content-login">
<form class="space-y-6">
<div>
<label class="block font-label-sm text-label-sm text-secondary mb-2 uppercase tracking-wide" for="login-identifier">Mobile Number or Email</label>
<input class="w-full bg-surface-bright border-b border-outline-variant focus:border-primary focus:ring-0 px-0 py-2 font-body-md text-body-md transition-colors placeholder:text-outline" id="login-identifier" placeholder="Enter your detail" type="text"/>
</div>
<div>
<div class="flex justify-between items-center mb-2">
<label class="block font-label-sm text-label-sm text-secondary uppercase tracking-wide" for="login-password">Password</label>
<a class="font-label-sm text-label-sm text-primary hover:underline" href="#">Forgot?</a>
</div>
<input class="w-full bg-surface-bright border-b border-outline-variant focus:border-primary focus:ring-0 px-0 py-2 font-body-md text-body-md transition-colors placeholder:text-outline" id="login-password" placeholder="••••••••" type="password"/>
</div>
<button class="w-full bg-primary text-on-primary py-3 rounded-lg font-title-md text-title-md shadow-md hover:bg-surface-tint transition-all active:scale-[0.98]" type="button">Sign In</button>
</form>
</div>
<!-- Sign Up Form -->
<div class="tab-content" id="content-signup">
<form class="space-y-6">
<div>
<label class="block font-label-sm text-label-sm text-secondary mb-2 uppercase tracking-wide" for="signup-name">Full Name</label>
<input class="w-full bg-surface-bright border-b border-outline-variant focus:border-primary focus:ring-0 px-0 py-2 font-body-md text-body-md transition-colors placeholder:text-outline" id="signup-name" placeholder="Your full name" type="text"/>
</div>
<div>
<label class="block font-label-sm text-label-sm text-secondary mb-2 uppercase tracking-wide" for="signup-email">Email or Mobile Number</label>
<input class="w-full bg-surface-bright border-b border-outline-variant focus:border-primary focus:ring-0 px-0 py-2 font-body-md text-body-md transition-colors placeholder:text-outline" id="signup-email" placeholder="Email or Mobile" type="text"/>
</div>
<div>
<label class="block font-label-sm text-label-sm text-secondary mb-2 uppercase tracking-wide" for="signup-password">Password</label>
<input class="w-full bg-surface-bright border-b border-outline-variant focus:border-primary focus:ring-0 px-0 py-2 font-body-md text-body-md transition-colors placeholder:text-outline" id="signup-password" placeholder="Create a password" type="password"/>
</div>
<button class="w-full bg-primary text-on-primary py-3 rounded-lg font-title-md text-title-md shadow-md hover:bg-surface-tint transition-all active:scale-[0.98]" type="button">Create Account</button>
</form>
</div>
<!-- Social Login Divider -->
<div class="mt-8 flex items-center justify-center space-x-4">
<div class="h-px bg-outline-variant flex-1"></div>
<span class="font-label-sm text-label-sm text-secondary uppercase">Or continue with</span>
<div class="h-px bg-outline-variant flex-1"></div>
</div>
<!-- Social Buttons -->
<div class="mt-6 flex gap-4">
<button class="flex-1 py-3 px-4 flex items-center justify-center gap-2 border border-outline-variant rounded-lg hover:bg-surface-container-low transition-colors">
<span class="material-symbols-outlined text-on-surface-variant">google</span>
<span class="font-body-md text-body-md text-on-surface-variant">Google</span>
</button>
<button class="flex-1 py-3 px-4 flex items-center justify-center gap-2 border border-outline-variant rounded-lg hover:bg-surface-container-low transition-colors">
<span class="material-symbols-outlined text-on-surface-variant">face_nod</span>
<span class="font-body-md text-body-md text-on-surface-variant">Facebook</span>
</button>
</div>
</div>
</div>
<!-- Suppressed Nav Shell for Transactional Screen -->
<!-- The BottomNavBar and TopAppBar are intentionally excluded as per the Semantic Shell Mandate for Login/Linear flows. -->
<!-- Footer is injected below as per requested components, but minimally styled for a clean canvas. -->
<footer class="w-full pt-stack-lg pb-stack-md bg-surface-container-highest border-t border-outline-variant px-margin-desktop py-stack-lg flex flex-col md:flex-row justify-between items-center gap-base mt-auto">
<div class="font-headline-lg text-headline-lg text-secondary">
            Dhenuh
        </div>
<p class="font-body-md text-body-md text-on-surface-variant text-center">
            © 2024 Dhenuh Cow Ghee. Traditional Ayurvedic Heritage.
        </p>
<div class="flex gap-4 flex-wrap justify-center">
<a class="font-body-md text-body-md text-secondary hover:text-primary transition-colors underline" href="#">Privacy Policy</a>
<a class="font-body-md text-body-md text-secondary hover:text-primary transition-colors underline" href="#">Terms of Service</a>
<a class="font-body-md text-body-md text-secondary hover:text-primary transition-colors underline" href="#">Shipping Info</a>
<a class="font-body-md text-body-md text-secondary hover:text-primary transition-colors underline" href="#">Bulk Orders</a>
</div>
</footer>
<script>
        function switchTab(tabId) {
            // Reset Tabs
            document.getElementById('tab-login').className = 'flex-1 py-4 text-center font-title-md text-title-md text-on-surface-variant focus:outline-none transition-colors';
            document.getElementById('tab-signup').className = 'flex-1 py-4 text-center font-title-md text-title-md text-on-surface-variant focus:outline-none transition-colors';
            
            // Reset Content
            document.getElementById('content-login').classList.remove('active');
            document.getElementById('content-signup').classList.remove('active');

            // Activate Selected
            document.getElementById('tab-' + tabId).className = 'flex-1 py-4 text-center font-title-md text-title-md text-primary border-b-2 border-primary focus:outline-none transition-colors';
            document.getElementById('content-' + tabId).classList.add('active');
        }
    </script>
</body></html>

<!-- Dhenuh - Contact Us -->
<!DOCTYPE html>

<html lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Contact Us - Dhenuh Cow Ghee</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com" rel="preconnect"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Libre+Caslon+Text:ital,wght@0,400;0,700;1,400&amp;family=Work+Sans:wght@400;600&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
          darkMode: "class",
          theme: {
            extend: {
              "colors": {
                      "on-secondary": "#ffffff",
                      "on-tertiary": "#ffffff",
                      "on-primary": "#ffffff",
                      "error": "#ba1a1a",
                      "on-secondary-container": "#795950",
                      "on-primary-fixed": "#261a00",
                      "on-primary-container": "#503a00",
                      "inverse-on-surface": "#f4f0e7",
                      "secondary-fixed": "#ffdbd0",
                      "primary-fixed-dim": "#f6be39",
                      "tertiary": "#536442",
                      "inverse-surface": "#31312b",
                      "surface-container-lowest": "#ffffff",
                      "secondary-fixed-dim": "#e7bdb1",
                      "on-surface-variant": "#4f4634",
                      "surface-bright": "#fdf9f0",
                      "outline-variant": "#d3c5ae",
                      "on-tertiary-fixed-variant": "#3c4c2c",
                      "outline": "#817662",
                      "on-background": "#1c1c17",
                      "tertiary-fixed-dim": "#bacda4",
                      "secondary-container": "#fed3c7",
                      "tertiary-container": "#9cae87",
                      "surface": "#fdf9f0",
                      "on-secondary-fixed": "#2c160e",
                      "on-error": "#ffffff",
                      "on-secondary-fixed-variant": "#5d4037",
                      "on-error-container": "#93000a",
                      "error-container": "#ffdad6",
                      "surface-dim": "#dddad1",
                      "secondary": "#77574d",
                      "surface-container": "#f1eee5",
                      "primary-container": "#d4a017",
                      "tertiary-fixed": "#d6e9be",
                      "on-tertiary-fixed": "#111f05",
                      "surface-container-low": "#f7f3ea",
                      "surface-container-high": "#ece8df",
                      "primary-fixed": "#ffdfa0",
                      "on-primary-fixed-variant": "#5c4300",
                      "background": "#fdf9f0",
                      "surface-variant": "#e6e2d9",
                      "on-surface": "#1c1c17",
                      "inverse-primary": "#f6be39",
                      "surface-tint": "#795900",
                      "surface-container-highest": "#e6e2d9",
                      "on-tertiary-container": "#324223",
                      "primary": "#795900"
              },
              "borderRadius": {
                      "DEFAULT": "0.25rem",
                      "lg": "0.5rem",
                      "xl": "0.75rem",
                      "full": "9999px"
              },
              "spacing": {
                      "stack-lg": "48px",
                      "gutter": "24px",
                      "container-max": "1280px",
                      "margin-mobile": "16px",
                      "base": "8px",
                      "margin-desktop": "64px",
                      "stack-md": "24px",
                      "stack-sm": "12px"
              },
              "fontFamily": {
                      "headline-lg": [
                              "Libre Caslon Text"
                      ],
                      "body-lg": [
                              "Work Sans"
                      ],
                      "label-sm": [
                              "Work Sans"
                      ],
                      "title-md": [
                              "Libre Caslon Text"
                      ],
                      "body-md": [
                              "Work Sans"
                      ],
                      "headline-lg-mobile": [
                              "Libre Caslon Text"
                      ],
                      "display-lg": [
                              "Libre Caslon Text"
                      ]
              },
              "fontSize": {
                      "headline-lg": [
                              "32px",
                              {
                                      "lineHeight": "40px",
                                      "fontWeight": "600"
                              }
                      ],
                      "body-lg": [
                              "18px",
                              {
                                      "lineHeight": "28px",
                                      "fontWeight": "400"
                              }
                      ],
                      "label-sm": [
                              "12px",
                              {
                                      "lineHeight": "16px",
                                      "letterSpacing": "0.05em",
                                      "fontWeight": "600"
                              }
                      ],
                      "title-md": [
                              "20px",
                              {
                                      "lineHeight": "28px",
                                      "fontWeight": "600"
                              }
                      ],
                      "body-md": [
                              "16px",
                              {
                                      "lineHeight": "24px",
                                      "fontWeight": "400"
                              }
                      ],
                      "headline-lg-mobile": [
                              "28px",
                              {
                                      "lineHeight": "36px",
                                      "fontWeight": "600"
                              }
                      ],
                      "display-lg": [
                              "48px",
                              {
                                      "lineHeight": "56px",
                                      "letterSpacing": "-0.02em",
                                      "fontWeight": "700"
                              }
                      ]
              }
      },
          },
        }
      </script>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="bg-background text-on-background font-body-md min-h-screen flex flex-col antialiased">
<!-- Header (Suppressed due to linear/focused intent of Contact Us page, but keeping TopAppBar for brand consistency as requested) -->
<header class="bg-surface/80 dark:bg-surface-dim/80 backdrop-blur-md docked full-width top-0 sticky z-50 flat no shadows bg-surface dark:bg-surface-dim">
<div class="flex justify-between items-center px-margin-mobile h-16 w-full max-w-container-max mx-auto">
<button class="text-primary dark:text-primary-fixed-dim hover:text-primary transition-colors duration-200">
<span aria-hidden="true" class="material-symbols-outlined">menu</span>
</button>
<div class="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-primary dark:text-primary-fixed-dim italic">
                Dhenuh
            </div>
<button class="text-primary dark:text-primary-fixed-dim hover:text-primary transition-colors duration-200">
<span aria-hidden="true" class="material-symbols-outlined">shopping_bag</span>
</button>
</div>
</header>
<main class="flex-grow pb-24 md:pb-0">
<!-- Hero Section -->
<section class="relative px-margin-mobile md:px-margin-desktop py-stack-lg flex flex-col items-center justify-center text-center">
<h1 class="font-display-lg text-display-lg text-on-surface mb-stack-sm">Get in Touch</h1>
<p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
                We're here to help with your sacred nourishment journey. Reach out with any questions about our traditional Ayurvedic heritage ghee.
            </p>
</section>
<!-- Main Content Grid -->
<div class="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-12 gap-gutter pb-stack-lg">
<!-- Contact Form Area -->
<div class="md:col-span-7 bg-surface-container-lowest rounded-xl shadow-[0_4px_24px_rgba(119,87,77,0.15)] p-stack-md md:p-stack-lg relative overflow-hidden">
<!-- Subtle decorative element -->
<div class="absolute -top-12 -right-12 w-32 h-32 bg-primary-container/20 rounded-full blur-2xl"></div>
<h2 class="font-title-md text-title-md text-on-surface mb-stack-md">Send us a Message</h2>
<form class="space-y-stack-sm relative z-10">
<div class="space-y-base">
<label class="font-label-sm text-label-sm text-on-surface-variant block" for="name">Full Name</label>
<input class="w-full bg-surface-bright border-b border-outline-variant focus:border-primary focus:ring-0 px-0 py-2 font-body-md text-on-surface transition-colors" id="name" name="name" placeholder="Your Name" type="text"/>
</div>
<div class="space-y-base">
<label class="font-label-sm text-label-sm text-on-surface-variant block" for="email">Email Address</label>
<input class="w-full bg-surface-bright border-b border-outline-variant focus:border-primary focus:ring-0 px-0 py-2 font-body-md text-on-surface transition-colors" id="email" name="email" placeholder="your@email.com" type="email"/>
</div>
<div class="space-y-base pb-stack-sm">
<label class="font-label-sm text-label-sm text-on-surface-variant block" for="message">Your Message</label>
<textarea class="w-full bg-surface-bright border-b border-outline-variant focus:border-primary focus:ring-0 px-0 py-2 font-body-md text-on-surface transition-colors resize-none" id="message" name="message" placeholder="How can we help you today?" rows="4"></textarea>
</div>
<button class="w-full md:w-auto px-8 py-3 bg-primary text-on-primary font-label-sm text-label-sm rounded-full hover:scale-[1.02] active:scale-95 transition-all duration-200 shadow-md" type="submit">
                        Send Message
                    </button>
</form>
</div>
<!-- Contact Info & Map Area -->
<div class="md:col-span-5 space-y-gutter">
<!-- Contact Cards -->
<div class="bg-surface-container-low rounded-xl p-stack-md flex flex-col gap-stack-sm">
<div class="flex items-start gap-base">
<span aria-hidden="true" class="material-symbols-outlined text-primary bg-primary-container p-2 rounded-full">call</span>
<div>
<h3 class="font-label-sm text-label-sm text-on-surface-variant">Phone</h3>
<p class="font-body-md text-on-surface">+91 98765 43210</p>
</div>
</div>
<div class="flex items-start gap-base">
<span aria-hidden="true" class="material-symbols-outlined text-primary bg-primary-container p-2 rounded-full">forum</span>
<div>
<h3 class="font-label-sm text-label-sm text-on-surface-variant">WhatsApp</h3>
<p class="font-body-md text-on-surface">+91 98765 43210</p>
</div>
</div>
<div class="flex items-start gap-base">
<span aria-hidden="true" class="material-symbols-outlined text-primary bg-primary-container p-2 rounded-full">mail</span>
<div>
<h3 class="font-label-sm text-label-sm text-on-surface-variant">Email</h3>
<p class="font-body-md text-on-surface">hello@dhenuh.com</p>
</div>
</div>
</div>
<!-- Map (Placeholder image) -->
<div class="rounded-xl overflow-hidden shadow-sm h-48 relative bg-surface-variant flex items-center justify-center">
<div class="absolute inset-0 bg-cover bg-center w-full h-full opacity-80" data-alt="A beautifully rendered, minimalist map of a rural Indian town showing artisanal farms. The map uses a warm cream and gold color palette with soft drop shadows, marking a central location with an elegant, traditional pin icon. The style is modern organic, fitting a premium heritage brand." data-location="Jaipur, India" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuAu5pF09isUS1R9DxospLxsmj0pDgKwDlGoSZ9sSWNyDEAnBGwVyLeA3ZxkUic6YdnSe9Er9pnFNAvDb2d1BQnRpEfpV4xpja9Hv1fo17CHOEXNqVQ_WDBGstdbt531LewcK2RjSplXRNeVi2Ur2QB11_9kGB3f8GKDTCmyf1qVBCG-VtVJjYui8RuMADYriiVxa0ZfhAVRpQe412sI029_s_eQgTxFJwgItfZwazsWMZu7qLjrH0LZog')"></div>
<div class="relative z-10 bg-surface/90 backdrop-blur px-4 py-2 rounded-full font-label-sm text-on-surface flex items-center gap-2 border border-outline-variant/30">
<span aria-hidden="true" class="material-symbols-outlined text-primary text-[18px]">location_on</span>
                       Heritage Farm, Rajasthan
                   </div>
</div>
<!-- Social Links -->
<div class="flex justify-center gap-gutter pt-stack-sm">
<a class="text-secondary hover:text-primary transition-colors p-2 rounded-full hover:bg-surface-variant" href="#">
<span aria-hidden="true" class="material-symbols-outlined">public</span>
</a>
<a class="text-secondary hover:text-primary transition-colors p-2 rounded-full hover:bg-surface-variant" href="#">
<span aria-hidden="true" class="material-symbols-outlined">share</span>
</a>
</div>
</div>
</div>
<!-- FAQ Section -->
<section class="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-stack-lg">
<h2 class="font-title-md text-title-md text-center text-on-surface mb-stack-md">Frequently Asked Questions</h2>
<div class="max-w-3xl mx-auto space-y-stack-sm">
<!-- FAQ Item 1 -->
<div class="border-b border-outline-variant pb-base">
<button class="w-full flex justify-between items-center py-2 text-left hover:text-primary transition-colors text-on-surface font-title-md text-title-md">
<span>How long does delivery take?</span>
<span aria-hidden="true" class="material-symbols-outlined">add</span>
</button>
<div class="font-body-md text-on-surface-variant pt-2 pb-4">
                        Standard delivery typically takes 3-5 business days within major metropolitan areas. Rural deliveries may take up to 7 days.
                    </div>
</div>
<!-- FAQ Item 2 -->
<div class="border-b border-outline-variant pb-base">
<button class="w-full flex justify-between items-center py-2 text-left hover:text-primary transition-colors text-on-surface font-title-md text-title-md">
<span>Do you offer bulk ordering?</span>
<span aria-hidden="true" class="material-symbols-outlined">add</span>
</button>
<div class="font-body-md text-on-surface-variant pt-2 pb-4 hidden">
                        Yes, we offer special rates for bulk orders over 5kg. Please contact us via email for a custom quote.
                    </div>
</div>
<!-- FAQ Item 3 -->
<div class="border-b border-outline-variant pb-base">
<button class="w-full flex justify-between items-center py-2 text-left hover:text-primary transition-colors text-on-surface font-title-md text-title-md">
<span>Is your Ghee certified A2?</span>
<span aria-hidden="true" class="material-symbols-outlined">add</span>
</button>
<div class="font-body-md text-on-surface-variant pt-2 pb-4 hidden">
                        Absolutely. All our ghee is sourced from certified indigenous A2 cows and prepared using the traditional bilona method.
                    </div>
</div>
</div>
</section>
</main>

    {{DATA:COMPONENTS:COMPONENTS_4}}

    <!-- Footer Component from JSON -->
<footer class="w-full pt-stack-lg pb-stack-md bg-surface-container-highest dark:bg-surface-dim border-t border-outline-variant">
<div class="w-full px-margin-desktop py-stack-lg flex flex-col md:flex-row justify-between items-center gap-base max-w-container-max mx-auto">
<div class="font-headline-lg text-headline-lg text-secondary">Dhenuh</div>
<div class="flex flex-wrap justify-center gap-gutter">
<a class="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">Privacy Policy</a>
<a class="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">Terms of Service</a>
<a class="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">Shipping Info</a>
<a class="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">Bulk Orders</a>
</div>
<div class="font-body-md text-body-md text-on-surface-variant text-center md:text-right">
                © 2024 Dhenuh Cow Ghee. Traditional Ayurvedic Heritage.
            </div>
</div>
</footer>
<!-- BottomNavBar for Mobile (JSON) - Hidden on md and above -->
<nav class="md:hidden fixed bottom-0 w-full z-50 rounded-t-xl bg-surface dark:bg-surface-container-highest border-t border-outline-variant shadow-[0_-4px_10px_rgba(121,89,0,0.08)]">
<div class="fixed bottom-0 left-0 w-full flex justify-around items-center h-20 px-2 pb-safe">
<button class="flex flex-col items-center justify-center text-on-surface-variant hover:bg-surface-container-high transition-all duration-300 ease-out rounded-xl p-2 w-16">
<span aria-hidden="true" class="material-symbols-outlined mb-1">home</span>
<span class="font-label-sm text-label-sm">Home</span>
</button>
<button class="flex flex-col items-center justify-center text-on-surface-variant hover:bg-surface-container-high transition-all duration-300 ease-out rounded-xl p-2 w-16">
<span aria-hidden="true" class="material-symbols-outlined mb-1">storefront</span>
<span class="font-label-sm text-label-sm">Shop</span>
</button>
<button class="flex flex-col items-center justify-center text-on-surface-variant hover:bg-surface-container-high transition-all duration-300 ease-out rounded-xl p-2 w-16">
<span aria-hidden="true" class="material-symbols-outlined mb-1">shopping_cart</span>
<span class="font-label-sm text-label-sm">Cart</span>
</button>
<button class="flex flex-col items-center justify-center bg-primary-container text-on-primary-container rounded-full px-4 py-1 transition-all duration-300 ease-out scale-105 w-20">
<span aria-hidden="true" class="material-symbols-outlined mb-1" style="font-variation-settings: 'FILL' 1;">person</span>
<span class="font-label-sm text-label-sm">Profile</span>
</button>
</div>
</nav>
<script>
        // Simple FAQ toggle logic
        document.querySelectorAll('.border-b button').forEach(button => {
            button.addEventListener('click', () => {
                const content = button.nextElementSibling;
                const icon = button.querySelector('.material-symbols-outlined');
                
                if(content.classList.contains('hidden')) {
                    content.classList.remove('hidden');
                    icon.textContent = 'remove';
                } else {
                    content.classList.add('hidden');
                    icon.textContent = 'add';
                }
            });
        });
    </script>
</body></html>

<!-- Dhenuh - Our Story -->
<!DOCTYPE html>

<html lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>About Dhenuh - Sacred Nourishment Since 1994</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Libre+Caslon+Text:ital,wght@0,400;0,700;1,400&amp;family=Work+Sans:wght@400;500;600&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    "colors": {
                        "on-secondary": "#ffffff",
                        "on-tertiary": "#ffffff",
                        "on-primary": "#ffffff",
                        "error": "#ba1a1a",
                        "on-secondary-container": "#795950",
                        "on-primary-fixed": "#261a00",
                        "on-primary-container": "#503a00",
                        "inverse-on-surface": "#f4f0e7",
                        "secondary-fixed": "#ffdbd0",
                        "primary-fixed-dim": "#f6be39",
                        "tertiary": "#536442",
                        "inverse-surface": "#31312b",
                        "surface-container-lowest": "#ffffff",
                        "secondary-fixed-dim": "#e7bdb1",
                        "on-surface-variant": "#4f4634",
                        "surface-bright": "#fdf9f0",
                        "outline-variant": "#d3c5ae",
                        "on-tertiary-fixed-variant": "#3c4c2c",
                        "outline": "#817662",
                        "on-background": "#1c1c17",
                        "tertiary-fixed-dim": "#bacda4",
                        "secondary-container": "#fed3c7",
                        "tertiary-container": "#9cae87",
                        "surface": "#fdf9f0",
                        "on-secondary-fixed": "#2c160e",
                        "on-error": "#ffffff",
                        "on-secondary-fixed-variant": "#5d4037",
                        "on-error-container": "#93000a",
                        "error-container": "#ffdad6",
                        "surface-dim": "#dddad1",
                        "secondary": "#77574d",
                        "surface-container": "#f1eee5",
                        "primary-container": "#d4a017",
                        "tertiary-fixed": "#d6e9be",
                        "on-tertiary-fixed": "#111f05",
                        "surface-container-low": "#f7f3ea",
                        "surface-container-high": "#ece8df",
                        "primary-fixed": "#ffdfa0",
                        "on-primary-fixed-variant": "#5c4300",
                        "background": "#fdf9f0",
                        "surface-variant": "#e6e2d9",
                        "on-surface": "#1c1c17",
                        "inverse-primary": "#f6be39",
                        "surface-tint": "#795900",
                        "surface-container-highest": "#e6e2d9",
                        "on-tertiary-container": "#324223",
                        "primary": "#795900"
                    },
                    "borderRadius": {
                        "DEFAULT": "0.25rem",
                        "lg": "0.5rem",
                        "xl": "0.75rem",
                        "full": "9999px"
                    },
                    "spacing": {
                        "stack-lg": "48px",
                        "gutter": "24px",
                        "container-max": "1280px",
                        "margin-mobile": "16px",
                        "base": "8px",
                        "margin-desktop": "64px",
                        "stack-md": "24px",
                        "stack-sm": "12px"
                    },
                    "fontFamily": {
                        "headline-lg": ["Libre Caslon Text"],
                        "body-lg": ["Work Sans"],
                        "label-sm": ["Work Sans"],
                        "title-md": ["Libre Caslon Text"],
                        "body-md": ["Work Sans"],
                        "headline-lg-mobile": ["Libre Caslon Text"],
                        "display-lg": ["Libre Caslon Text"]
                    },
                    "fontSize": {
                        "headline-lg": ["32px", { "lineHeight": "40px", "fontWeight": "600" }],
                        "body-lg": ["18px", { "lineHeight": "28px", "fontWeight": "400" }],
                        "label-sm": ["12px", { "lineHeight": "16px", "letterSpacing": "0.05em", "fontWeight": "600" }],
                        "title-md": ["20px", { "lineHeight": "28px", "fontWeight": "600" }],
                        "body-md": ["16px", { "lineHeight": "24px", "fontWeight": "400" }],
                        "headline-lg-mobile": ["28px", { "lineHeight": "36px", "fontWeight": "600" }],
                        "display-lg": ["48px", { "lineHeight": "56px", "letterSpacing": "-0.02em", "fontWeight": "700" }]
                    }
                }
            }
        }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .fill-icon {
            font-variation-settings: 'FILL' 1;
        }
        
        .organic-shape-1 {
            border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
        }
        .organic-shape-2 {
            border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
        }
    </style>
</head>
<body class="bg-surface text-on-surface font-body-md antialiased min-h-screen flex flex-col">
<!-- TopAppBar -->
<header class="bg-surface/80 dark:bg-surface-dim/80 backdrop-blur-md text-primary dark:text-primary-fixed-dim docked full-width top-0 sticky z-50 flex justify-between items-center px-margin-mobile h-16 w-full max-w-container-max mx-auto shadow-none">
<button aria-label="Menu" class="p-2 hover:text-primary transition-colors duration-200">
<span class="material-symbols-outlined text-2xl">menu</span>
</button>
<h1 class="font-headline-lg-mobile text-headline-lg-mobile text-primary dark:text-primary-fixed-dim italic">Dhenuh</h1>
<button aria-label="Shopping Bag" class="p-2 hover:text-primary transition-colors duration-200">
<span class="material-symbols-outlined text-2xl">shopping_bag</span>
</button>
</header>
<!-- NavigationDrawer (Hidden by default, structure provided) -->
<aside aria-hidden="true" class="fixed inset-y-0 left-0 z-[60] flex flex-col p-base h-full w-80 rounded-r-xl bg-surface-container-low dark:bg-surface-container shadow-xl transform -translate-x-full transition-transform duration-300 ease-in-out" id="nav-drawer">
<div class="flex items-center gap-4 p-4 border-b border-outline-variant mb-4">
<div class="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center overflow-hidden">
<img class="w-full h-full object-cover" data-alt="A small, stylized logo of a cow in a warm, organic golden line art style, suitable for an avatar." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4lIl8mazwBSOfj-PhRopHJBUjKos5_XAYLdpTppafDkmuA7E0Am9-fB2Bmy_L3fs7d4tUZibYCXdwfSM1Plb4EuFkkGmihQ3Yq8SDQ1rWOZmCfr3j4mNtxeEORnlOmRhpLalLJoShkXUh0BnCa3y92MJdbEk0KRbB_6eEyIrPffgozQ9PeKM3VLQ1LbTxvgyZ1_6HjkthkK5N1HqzTvvrciLgf1uE342t_wo5A5ZvvY4guh9b6Lcf8A"/>
</div>
<div>
<h2 class="font-title-md text-title-md text-primary">Dhenuh Ghee</h2>
<p class="font-body-md text-body-md text-on-surface-variant">Sacred Nourishment</p>
<p class="font-label-sm text-label-sm text-secondary">Since 1994</p>
</div>
</div>
<nav class="flex-1 overflow-y-auto space-y-2">
<a class="flex items-center gap-3 p-3 rounded-lg text-on-surface-variant hover:bg-surface-variant hover:bg-primary-fixed/20 transition-colors" href="#">
<span class="material-symbols-outlined">eco</span>
<span class="font-body-md text-body-md">Pure Cow Ghee</span>
</a>
<a class="flex items-center gap-3 p-3 rounded-lg bg-primary-container text-on-primary-container font-bold" href="#">
<span class="material-symbols-outlined fill-icon">history</span>
<span class="font-body-md text-body-md">About Our Heritage</span>
</a>
<a class="flex items-center gap-3 p-3 rounded-lg text-on-surface-variant hover:bg-surface-variant hover:bg-primary-fixed/20 transition-colors" href="#">
<span class="material-symbols-outlined">auto_awesome</span>
<span class="font-body-md text-body-md">A2 Vedic Ghee</span>
</a>
<a class="flex items-center gap-3 p-3 rounded-lg text-on-surface-variant hover:bg-surface-variant hover:bg-primary-fixed/20 transition-colors" href="#">
<span class="material-symbols-outlined">verified</span>
<span class="font-body-md text-body-md">Quality Assurance</span>
</a>
<a class="flex items-center gap-3 p-3 rounded-lg text-on-surface-variant hover:bg-surface-variant hover:bg-primary-fixed/20 transition-colors" href="#">
<span class="material-symbols-outlined">mail</span>
<span class="font-body-md text-body-md">Contact Us</span>
</a>
<a class="flex items-center gap-3 p-3 rounded-lg text-on-surface-variant hover:bg-surface-variant hover:bg-primary-fixed/20 transition-colors" href="#">
<span class="material-symbols-outlined">package</span>
<span class="font-body-md text-body-md">My Orders</span>
</a>
</nav>
</aside>
<main class="flex-1 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-stack-lg pb-32 md:pb-stack-lg">
<!-- Hero Section: Our Story -->
<section class="mb-stack-lg flex flex-col md:flex-row items-center gap-gutter">
<div class="w-full md:w-1/2 flex justify-center order-2 md:order-1 relative">
<div class="absolute inset-0 bg-primary-fixed/30 organic-shape-1 blur-2xl z-0 transform -translate-x-4 translate-y-4"></div>
<img alt="Dhenuh Mother Cow and Calf Illustration" class="relative z-10 w-full max-w-sm drop-shadow-2xl" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgGlydKnlj_AxW8xT2B06BiFi1ir3VRaauUmhVS1B5KCnZziOcKXrsj0jKDwBT9Qfpl7WokhN5gQl4PUbDbc3eclejg7fbYYZw2jedALKeLjpZ_qAkyTWpcgIvHIA6LhU04DUg72RebSpZNthwUBcxbtSPsWRnOtaDTNZ1_u8Kp-Zn4jst_Q5g-iRRL8TrQJJ6pyTL4bLfn2siABlhmhGpviUe8npz8d4_31mHzHqEK1W45v59Ie7wPjhbMan9nLV7rOs"/>
</div>
<div class="w-full md:w-1/2 space-y-stack-sm order-1 md:order-2">
<div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm uppercase tracking-wider">
<span class="material-symbols-outlined text-[16px]">history_edu</span>
                    Our Roots
                </div>
<h2 class="font-display-lg text-display-lg text-primary leading-tight">Sacred Nourishment Since 1994</h2>
<p class="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                    Born in the heartland of traditional dairy farming, Dhenuh began as a small family endeavor to preserve the ancient art of ghee making. For decades, we have remained committed to the purity of our local heritage, honoring the sacred bond between the land, the indigenous cows, and our community.
                </p>
<p class="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                    Our journey is not just about producing ghee; it's about sustaining a legacy of wellness that has been passed down through generations.
                </p>
</div>
</section>
<!-- Mission Statement Bento Box -->
<section class="mb-stack-lg grid grid-cols-1 md:grid-cols-3 gap-gutter">
<div class="col-span-1 md:col-span-2 bg-primary-container text-on-primary-container rounded-3xl p-stack-md flex flex-col justify-center relative overflow-hidden">
<div class="absolute -right-10 -bottom-10 opacity-10">
<span class="material-symbols-outlined text-9xl">workspace_premium</span>
</div>
<h3 class="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-4 relative z-10">Our Mission: Uncompromised Purity</h3>
<p class="font-body-lg text-body-lg relative z-10 max-w-2xl">
                    To deliver health and vitality through 100% pure, ethically sourced, and traditionally crafted A2 cow ghee. We believe that true wellness stems from ingredients that are as close to nature as possible, free from modern adulteration.
                </p>
</div>
<div class="col-span-1 bg-surface-container-high rounded-3xl p-stack-md flex flex-col items-center justify-center text-center space-y-4">
<div class="w-16 h-16 rounded-full bg-surface flex items-center justify-center text-secondary shadow-sm">
<span class="material-symbols-outlined text-3xl fill-icon">favorite</span>
</div>
<h4 class="font-title-md text-title-md text-on-surface">Health First</h4>
<p class="font-body-md text-body-md text-on-surface-variant">Nurturing bodies with Ayurvedic wisdom.</p>
</div>
</section>
<!-- The Process (Bilona Method) - Asymmetric Glassmorphism Layout -->
<section class="mb-stack-lg relative py-stack-lg">
<div class="absolute inset-0 bg-surface-container rounded-3xl -z-10"></div>
<div class="text-center mb-stack-md px-margin-mobile">
<h2 class="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-2">The Bilona Method</h2>
<p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">An ancient, labor-intensive process that ensures every jar of Dhenuh Ghee retains maximum nutritional value and rich aroma.</p>
</div>
<div class="grid grid-cols-1 md:grid-cols-12 gap-gutter px-margin-mobile md:px-stack-md">
<!-- Step 1 -->
<div class="md:col-span-5 bg-surface/60 backdrop-blur-md rounded-2xl p-6 shadow-[0_4px_24px_rgba(121,89,0,0.05)] border border-white/20">
<div class="flex items-start gap-4">
<div class="flex-shrink-0 w-10 h-10 rounded-full bg-tertiary-container text-on-tertiary-container flex items-center justify-center font-bold">1</div>
<div>
<h4 class="font-title-md text-title-md text-on-surface mb-2">A2 Milk Collection</h4>
<p class="font-body-md text-body-md text-on-surface-variant">We source purely from free-grazing indigenous cows, ensuring the highest quality A2 milk rich in essential proteins.</p>
</div>
</div>
</div>
<!-- Image Breakout -->
<div class="md:col-span-7 h-64 md:h-auto rounded-2xl overflow-hidden shadow-lg relative group">
<img class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="A warm, sunlit scene of traditional clay pots used for setting curd in a rustic Indian farm setting. The lighting is golden hour, soft and inviting, highlighting the earthy textures of the pots and a subtle glow on the cream. Premium, organic visual style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrbFZcrzVJFvTF21UM6IHAg4-PiAQUjqTHQLD51EFb3s1U0LJya6ba3yx0XCAfhnlP0ibccRVzIg0VsJ6OxAHZ97XIwsEh_Hw248GDDUkNwNrWvW_VbsrP2mkJsACp4bwWukZqllj71zpxxwp7ZOeEWzYWNVMAeJNRa0BqxGSu89P9sNwe1GoFOW6fqR6-ToW2o98PNi7_yobcLSjgtaROSBaHz0Rq24QQw4WDB-plMRZBK-TcWnZ46g"/>
<div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
<p class="absolute bottom-4 left-4 text-white font-label-sm text-label-sm tracking-widest uppercase">Setting the Curd</p>
</div>
<!-- Step 2 & 3 stacked -->
<div class="md:col-span-6 space-y-gutter">
<div class="bg-surface/60 backdrop-blur-md rounded-2xl p-6 shadow-[0_4px_24px_rgba(121,89,0,0.05)] border border-white/20">
<div class="flex items-start gap-4">
<div class="flex-shrink-0 w-10 h-10 rounded-full bg-tertiary-container text-on-tertiary-container flex items-center justify-center font-bold">2</div>
<div>
<h4 class="font-title-md text-title-md text-on-surface mb-2">Setting the Curd</h4>
<p class="font-body-md text-body-md text-on-surface-variant">The fresh milk is boiled and left to set into curd overnight in earthen pots, allowing natural fermentation.</p>
</div>
</div>
</div>
<div class="bg-surface/60 backdrop-blur-md rounded-2xl p-6 shadow-[0_4px_24px_rgba(121,89,0,0.05)] border border-white/20">
<div class="flex items-start gap-4">
<div class="flex-shrink-0 w-10 h-10 rounded-full bg-tertiary-container text-on-tertiary-container flex items-center justify-center font-bold">3</div>
<div>
<h4 class="font-title-md text-title-md text-on-surface mb-2">Hand-Churning (Bilona)</h4>
<p class="font-body-md text-body-md text-on-surface-variant">The curd is churned bi-directionally using a wooden bilona to separate the makkhan (butter). This crucial step requires immense skill and patience.</p>
</div>
</div>
</div>
</div>
<!-- Final Step -->
<div class="md:col-span-6 bg-primary/5 rounded-2xl p-6 shadow-inner border border-primary/10 flex flex-col justify-center">
<div class="flex items-start gap-4 mb-4">
<div class="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold">4</div>
<div>
<h4 class="font-title-md text-title-md text-on-surface mb-2">Slow Simmering</h4>
<p class="font-body-md text-body-md text-on-surface-variant">The makkhan is slowly heated over a low, controlled flame. The water evaporates, leaving behind pure, golden, aromatic ghee.</p>
</div>
</div>
<div class="mt-4 flex justify-center">
<div class="w-full h-32 rounded-xl overflow-hidden relative">
<img class="w-full h-full object-cover" data-alt="Close up of golden liquid ghee being poured into a premium glass jar. The light catches the amber hues of the pure ghee. A subtle rustic wooden background with soft focus. High-end, organic product photography." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOSmAOh9eBQQU9W7riU97UoWKgOvd46NVrRxDB17HQT4FweuzffikBE7DFPQ6zosD0-O_fHfXXSt77UUu6X01ft4hJ-cZWD3yrsKiTz7bkqOVot1-X7aly2kK-ceeS8NQoBUVzBPPIogPxkMztIWO-IHiK5d1JN-NZbx9bOxeO7DyFcgjCFsQ4g2RCQ_Vjuk1MwjC-gp6GajELbghhgiYmib5rLQprPyHty7tIAIR0R5ngl-Tn_VJd5w"/>
</div>
</div>
</div>
</div>
</section>
<!-- The Family Behind the Brand -->
<section class="mb-stack-lg">
<div class="text-center mb-stack-md">
<h2 class="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-2">Our Family</h2>
<p class="font-body-md text-body-md text-on-surface-variant">Generations of care, poured into every jar.</p>
</div>
<div class="flex flex-col md:flex-row items-center gap-stack-md bg-surface-container-low rounded-3xl p-stack-sm md:p-stack-md">
<div class="w-full md:w-1/3 aspect-square rounded-2xl overflow-hidden organic-shape-2 relative">
<img class="w-full h-full object-cover" data-alt="A portrait of a multi-generational Indian farming family standing proudly in front of a clean, sunlit cow shed. They are dressed in simple, traditional attire. The mood is warm, proud, and authentic. High quality, soft natural lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCR-KD5I_d0S97zpnfucTzEUCRR0Yj-ZzUagMMFD-0MVpJz2lsBUUWxrYQgFXLilyGZk4y9Vvv19z2jaZkYtpRJn1lhxdDLFPLdvv4nOXGtuLeukRFZq6f4bPTY8pY8HvWlu__FPDsAEqGc6VFeReiaz_SWoZmxbUohYReiSjaQTleTh_XLcvYpjXMrqNCNF_VYzk_waPtlwgVtjxoDh5kAWz7u6A0BMc2bp7k-nI1qGzuG8VufVIdcuA"/>
</div>
<div class="w-full md:w-2/3 space-y-4">
<p class="font-body-lg text-body-lg text-on-surface-variant italic border-l-4 border-primary pl-4">
                        "For us, the cows are not just animals; they are family. The ghee we produce is a testament to the respect we hold for nature's cycles and the ancient wisdom of Ayurveda."
                    </p>
<p class="font-body-md text-body-md text-on-surface">
                        Started by our grandfather in the early 90s, Dhenuh has grown carefully, ensuring that expansion never compromises our traditional methods. Today, the third generation oversees the farm, bringing modern hygiene standards to ancient practices without losing the soul of Bilona churning.
                    </p>
</div>
</div>
</section>
</main>
<!-- BottomNavBar (Mobile only, based on JSON) -->
<nav class="md:hidden bg-surface dark:bg-surface-container-highest fixed bottom-0 w-full z-50 rounded-t-xl border-t border-outline-variant shadow-[0_-4px_10px_rgba(121,89,0,0.08)] flex justify-around items-center h-20 px-2 pb-safe">
<button class="flex flex-col items-center justify-center text-on-surface-variant hover:bg-surface-container-high w-16 h-16 rounded-lg transition-colors">
<span class="material-symbols-outlined mb-1">home</span>
<span class="font-label-sm text-label-sm">Home</span>
</button>
<button class="flex flex-col items-center justify-center text-on-surface-variant hover:bg-surface-container-high w-16 h-16 rounded-lg transition-colors">
<span class="material-symbols-outlined mb-1">storefront</span>
<span class="font-label-sm text-label-sm">Shop</span>
</button>
<button class="flex flex-col items-center justify-center text-on-surface-variant hover:bg-surface-container-high w-16 h-16 rounded-lg transition-colors relative">
<span class="material-symbols-outlined mb-1">shopping_cart</span>
<span class="font-label-sm text-label-sm">Cart</span>
</button>
<button class="flex flex-col items-center justify-center bg-primary-container text-on-primary-container rounded-full px-4 py-1 scale-105 transition-all duration-300 ease-out shadow-sm">
<span class="material-symbols-outlined mb-1 fill-icon">info</span>
<span class="font-label-sm text-label-sm">About</span>
</button>
</nav>
<!-- Footer -->
<footer class="bg-surface-container-highest dark:bg-surface-dim border-t border-outline-variant w-full pt-stack-lg pb-stack-md px-margin-mobile md:px-margin-desktop flex flex-col md:flex-row justify-between items-center gap-base mt-auto mb-20 md:mb-0">
<div class="text-center md:text-left mb-4 md:mb-0">
<h2 class="font-headline-lg text-headline-lg text-secondary mb-2 italic">Dhenuh</h2>
<p class="font-body-md text-body-md text-secondary dark:text-secondary-fixed">© 2024 Dhenuh Cow Ghee. Traditional Ayurvedic Heritage.</p>
</div>
<nav class="flex flex-wrap justify-center gap-4 md:gap-8">
<a class="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">Privacy Policy</a>
<a class="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">Terms of Service</a>
<a class="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">Shipping Info</a>
<a class="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">Bulk Orders</a>
</nav>
</footer>
</body></html>