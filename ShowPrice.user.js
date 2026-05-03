// ==UserScript==
// @name            Show Price as Hours of your Life
// @description     Gets the price displayed on shopping sites and shows the equivalent hours of your life spent to earn that money. Also alters dark patterns!
// @author          navchandar
// @version         3.0
// @license         MIT
// @run-at          document-end
// @homepage        https://navchandar.github.io/
// @homepage        https://github.com/navchandar/
// @homepageURL     https://navchandar.github.io/
// @copyright       2019, navchandar (https://openuserjs.org/users/navchandar)
// @icon            data:image/png;base64,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
// @include         https://play.google.com/store/*
// @include         https://play.google.com/store*
// @include         http://play.google.com/store*
// @match           https://www.google.com/*shop*
// @match           https://google.com/*shop*
// @match           https://www.google.co.in/*shop*
// @match           https://google.co.in/*shop*
// @include         http://www.amazon.com
// @include         https://www.amazon.com
// @include         http://www.amazon.in
// @match           https://www.amazon.in/*
// @include         https://www.flipkart.com*
// @include         http://www.flipkart.com*
// @include         https://paytm.com*
// @include         http://paytm.com*
// @include         https://paytmmall.com*
// @include         http://paytmmall.com*
// @match           *://*.amazon.in/*
// @match           *://*.amazon.com/*
// @match           *://*.flipkart.com/*
// @match           *://*.paytm.com/*
// @match           *://*.myntra.com/*
// @match           *://play.google.com/*
// @match           *://*.google.com/store/*
// @match           *://*.google.co.in/shopping/*
// @grant           GM_getValue
// @grant           GM_setValue
// @grant           GM_addStyle
// @namespace       https://greasyfork.org/users/302262
// @supportURL      https://openuserjs.org/scripts/navchandar/Show_Price_as_Hours_of_your_Life/issues
// @setupURL        https://openuserjs.org/install/navchandar/Show_Price_as_Hours_of_your_Life.user.js
// @downloadURL     https://update.greasyfork.org/scripts/383103/Show%20Price%20as%20Hours%20of%20your%20Life.user.js
// @updateURL       https://update.greasyfork.org/scripts/383103/Show%20Price%20as%20Hours%20of%20your%20Life.meta.js
// ==/UserScript==


(function () {
    "use strict";
    // ═══════════════════════════════════════════════════════════
    //  1. SITE CONFIGURATIONS
    // ═══════════════════════════════════════════════════════════
    /**
   * Each entry describes ONE website
   *
   * @typedef  {Object} SiteConfig
   * @property {string}   name         – human-readable label (for logs)
   * @property {function} test         – receives `window.location.href`, returns boolean
   * @property {string}   xpath        – XPath that selects price-containing elements
   * @property {string}   separator    – HTML inserted before the appended label
   * @property {string}   currency     – currency symbol used to strip text (₹ / $ / etc.)
   * @property {array}    darkPatterns – dark patterns to apply custom styles (EMI price should not look larger than the actual price)
   */
    const SITE_CONFIGS = [
        {
            name: "Amazon India",
            test: (url) => url.includes("amazon.in"),
            currency: "₹",
            separator: "&nbsp;",
            // ── Locators for price / amount displayed ───────────────────
            xpath: [
                "//span[contains(@class, 'CurrencyINR')]//following-sibling::span",
                "//span[@class='currencyINR']/parent::*",
                "//*[contains(@class, 'rice')][contains(text(), '₹')]",
                "//*[contains(@class, 'price')]//*[contains(text(), '₹')]",
                "//*[contains(@class, 'price-whole')]",
                "//h2/span[contains(text(), '₹')]",
                "//div[@data-id]//h3",
                "//*[text() = 'Select Seats']/../..//*[contains(text(), ',')]",
                "//*[@id='APayBalance']//span[contains(@class, 'currency')]",
                "//div[contains(@class, 'secondary')]/span[contains(@class, 'base')]",
            ].join(" | "),
            // ── Dark pattern neutralisers ───────────────────
            darkPatterns: [
                {
                    // Giant EMI amount shown to make price look small
                    xpath: "//span[contains(@class, 'emi-')]",
                    styles: { fontSize: "11px", fontWeight: "normal" },
                },
                {
                    // Savings Percent size can be smaller
                    xpath: "//span[contains(@class, 'ercent')]",
                    styles: { fontSize: "12px", fontWeight: "normal" },
                }
            ]
        },
        {
            name: "Amazon US",
            test: (url) => url.includes("amazon.com"),
            currency: "$",
            separator: "&nbsp;",
            xpath: [
                "//*[@class='dealPrice']",
                "//*[@class='buyingPrice']",
                "//*[contains(@class,'-price-whole')]",
                "(//span[@class='dv-conditional-linebreak']//following-sibling::text())[1]",
                "(//span[@class='dv-conditional-linebreak']//following-sibling::text())[2]",
                "//span[contains(@class, 'price')][contains(text(), '$')]",
                "//h2[contains(@class, 'headline') and contains(text(), '₹')]",
                "//a[@id='dealTitle']",
                "//div[contains(@class, 'priceBlock')]",
                "//a//span/span[@class and contains(@class, 'price') and not(contains(@class, 'decimal')) and not(contains(@class, 'fraction'))]",
                "//div[contains(@class, 'price')]/span[contains(@class, 'price') and contains(@class, 'Grid')]",
            ].join(" | "),
            darkPatterns: [
                {
                    xpath: "//span[contains(@class, 'price-decimal') or contains(@class, 'price-fraction')]",
                    styles: { fontSize: "10px" },
                },
                {
                    // Savings Percent size can be smaller
                    xpath: "//span[contains(@class, 'ercent')]",
                    styles: { fontSize: "12px", fontWeight: "normal" },
                }
            ]
        },
        {
            name: "Flipkart",
            test: (url) => url.includes("flipkart.com"),
            currency: "₹",
            separator: "&nbsp;",
            xpath: [
                "//*[contains(@title, '₹')]/div[3]",
                "//div[contains(text(), '₹')]",
            ].join(" | "),
            darkPatterns: [
                {
                    xpath: "//div[contains(@style, 'text-decoration-line: line-through') or contains(text(), '%')]",
                    styles: { fontSize: "12px" },
                },
                {
                    xpath: "//*[contains(text(), 'Upto')]//..//..",
                    styles: { fontSize: "10px" },
                },
                {
                    xpath: "//div[contains(text(), 'EMI')]//..//..//..//..",
                    styles: { fontSize: "10px" },
                },
                {
                    xpath: "//*[contains(text(), 'EMI')]//ancestor::*[contains(@class, 'grid')]",
                    styles: { fontSize: "10px", color: "white", background: "lightgrey" },
                }
            ]
        },
        {
            name: "Paytm",
            test: (url) => url.includes("paytm"),
            currency: "₹",
            separator: "<br/>",
            xpath: [
                "//span/span[contains(text(), 'Rs')]",
                "//a//*[contains(@class, 'iconRupess')]/..",
                "//*[contains(@class, 'iconRupess')]/..",
            ].join(" | "),
        },
        {
            name: "Google Play Store",
            test: (url) => url.includes("google") && url.includes("details"),
            currency: "₹",
            separator: "&nbsp;",
            xpath: [
                "//*[@class='display-price' and contains(text(), '₹')]",
                "//span[contains(text(), '₹')]",
                "//button[@jsmodel]//span[contains(text(), '₹')]",
                "//button[contains(text(), '₹')]//text()",
                "//meta[@itemprop='price']",
            ].join(" | "),
        },
        {
            name: "Google Store",
            test: (url) => url.includes("google") && url.includes("store"),
            currency: "₹",
            separator: "<br/>",
            xpath: [
                "//*[@class='display-price' and contains(text(), '₹')]",
                "//button[@jsmodel]//span[contains(text(), '₹')]",
                "//button[contains(text(), '₹')]//text()",
                "//meta[@itemprop='price']",
            ].join(" | "),
        },
        {
            name: "Google Shopping",
            test: (url) => url.includes("google.co") && url.includes("shop"),
            currency: "₹",
            separator: "&nbsp;",
            xpath: [
                "//div[contains(@class, 'content')]//*[contains(text(), '₹')]",
                "//div[contains(@class, 'result')]//*[contains(text(), '₹')]",
                "//a//div[contains(text(), '₹')]",
            ].join(" | "),
        },
        {
            name: "Myntra",
            test: (url) => url.includes("myntra.com"),
            currency: "₹",
            separator: "&nbsp;",
            xpath: [
                "//*[contains(@class, 'discountedPrice')]",
                "//*[contains(@class, 'pdp-price') or contains(@class, 'pdp-offers-price')]",
                "//*[contains(@class, 'product-item-selling-price') or contains(@class, 'product-price')]"
            ].join(" | "),
            darkPatterns: [
                {
                    xpath: "//*[contains(@class, 'discountPercent') or contains(@class, 'product-strike')]",
                    styles: { fontSize: "10px" },
                },
                {
                    xpath: "//*[contains(@class, 'pdp-discount') or contains(@class, 'mrp')]",
                    styles: { fontSize: "10px" },
                },
            ]
        },
    ];
    // ═══════════════════════════════════════════════════════════
    //  2. CONSTANTS
    // ═══════════════════════════════════════════════════════════
    /** Working-hours calendar */
    const WORK = Object.freeze({
        HOURS_PER_DAY:   9,
        DAYS_PER_MONTH:  22,
        MONTHS_PER_YEAR: 12,
        // Add calculated property here
        get HOURS_PER_MONTH() {
            return this.HOURS_PER_DAY * this.DAYS_PER_MONTH;     // 198
        },
        get HOURS_PER_YEAR() {
            return this.HOURS_PER_MONTH * this.MONTHS_PER_YEAR;  // 2376
        }
    });

    /** Thresholds (in hours) that decide which unit to display */
    const THRESHOLDS = Object.freeze({
        HOURS_MAX:  10,                    // ≤ 10 h   → show hours
        DAYS_MAX:   WORK.HOURS_PER_MONTH,  // ≤ 198 h  → show days
        MONTHS_MAX: WORK.HOURS_PER_YEAR,   // ≤ 2376 h → show months
        // above MONTHS_MAX                            → show years
    });

    /** Markers injected into the DOM so we never process an element twice */
    const MARKER_ATTR  = "data-plh-processed";
    const MARKER_WORDS = ["hrs", "Day", "Month", "YEARS"];

    /** Console prefix for easy filtering in DevTools */
    const LOG_PREFIX = "[PriceLifeHours]";
    /** Polling interval (ms) – used as fallback when MutationObserver fires too infrequently */
    const POLL_INTERVAL_MS = 3000;

    // ═══════════════════════════════════════════════════════════
    //  3. UTILITIES
    // ═══════════════════════════════════════════════════════════
    /** Prefixed console helpers */
    const log   = (...args) => console.log(LOG_PREFIX, ...args);
    const warn  = (...args) => console.warn(LOG_PREFIX, ...args);
    const error = (...args) => console.error(LOG_PREFIX, ...args);

    /**
   * Safe `String.includes` wrapper – returns false for null/undefined.
   * @param {string|null|undefined} str
   * @param {string} search
   * @returns {boolean}
   */
    function safeIncludes(str, search) {
        try {
            return typeof str === "string" && str.includes(search);
        } catch {
            return false;
        }
    }
    /**
   * Check whether text already contains one of our injected markers.
   * @param {string} text
   * @returns {boolean}
   */
    function hasMarker(text) {
        return MARKER_WORDS.some((m) => safeIncludes(text, m));
    }
    // ═══════════════════════════════════════════════════════════
    //  4. SALARY MANAGEMENT
    // ═══════════════════════════════════════════════════════════
    /**
   * Prompt the user for their annual salary and persist it.
   * @param {boolean} [force=false] – if true, always prompt even if a value exists
   * @returns {number|null} the stored salary, or null if the user cancelled
   */
    function promptAndStoreSalary(force = false) {
        if (!force) {
            const existing = GM_getValue("approxAnnualSalary", "");
            if (existing) {
                return Number(existing);
            }
            // User previously cancelled – don't nag on every page load
            if (GM_getValue("UserCancelledPrompt", false)) {
                log("Skipping salary prompt — user cancelled previously.");
                return null;
            }
        }
        const input = prompt(
            "To calculate how many hours of your life each item costs,\n" +
            "enter your approximate Annual Salary / Wage:",
            ""
        );
        if (input && Number(input) > 0) {
            GM_setValue("approxAnnualSalary", input);
            GM_setValue("UserCancelledPrompt", false);
            log(`Stored annual salary: ${input}`);
            return Number(input);
        }
        GM_setValue("UserCancelledPrompt", true);
        warn("User cancelled salary prompt.");
        return null;
    }
    /**
   * Derive hourly rate from the stored annual salary.
   * @returns {number|null}
   */
    function getHourlyRate() {
        const annual = Number(GM_getValue("approxAnnualSalary", ""));
        if (!annual || annual <= 0) {
            warn("No valid annual salary stored — cannot compute hourly rate.");
            return null;
        }
        const hourly = annual / WORK.HOURS_PER_YEAR;
        log(`Hourly rate: ${hourly.toFixed(2)} (annual: ${annual})`);
        return hourly;
    }

    // ═══════════════════════════════════════════════════════════
    //  5. SITE MATCHER
    // ═══════════════════════════════════════════════════════════
    /**
   * Return the first SiteConfig whose `test()` matches the current URL.
   * @returns {SiteConfig|null}
   */
    function detectSite() {
        const url = window.location.href;
        for (const cfg of SITE_CONFIGS) {
            try {
                if (cfg.test(url)) {
                    log(`Matched site: ${cfg.name}`);
                    return cfg;
                }
            } catch (err) {
                error(`Error testing site config "${cfg.name}":`, err);
            }
        }
        warn("Current URL did not match any configured site.");
        return null;
    }

    // ═══════════════════════════════════════════════════════════
    //  6. PRICE PARSER
    // ═══════════════════════════════════════════════════════════
    /**
   * Extract a numeric price from a messy text string.
   *
   * Handles common noise: "+10% offers", "100-200" ranges,
   * currency symbols, commas, "Used/New" suffixes, etc.
   *
   * @param {string} raw – the raw innerText / textContent
   * @returns {number}   – parsed price, or 0 if unparseable
   */
    function parsePrice(raw) {
        if (!raw) {
            return 0;
        }
        try {
            // ── Strategy 1: extract first price-shaped token ───────
            // Covers: ₹8,499.00 | $12.99 | Rs.1,200 | Rs 500
            const priceRegex = /(?:[₹$]|Rs\.?\s?)[\s]?([\d,]+(?:\.\d{1,2})?)/;
            const match = raw.match(priceRegex);
            if (match) {
                const cleaned = match[1].replace(/,/g, "").replace(/\.00$/, "");
                const amount = Number(cleaned);
                if (amount > 0) {
                    return amount;
                }
            }

            // ── Strategy 2: aggressive strip ─────
            let txt = raw;
            // Strip "+X% offer" suffixes (Flipkart)
            if (txt.includes("+")) txt = txt.split("+")[0];
            // Strip "–X%" discount prefixes (Paytm)
            if (txt.includes("%") && txt.includes("-")) txt = txt.split("-")[0];
            // Price ranges — take the higher end
            if (txt.includes("-")) txt = txt.split("-").pop();
            if (txt.toLowerCase().includes("to")) txt = txt.split(/to/i).pop();
            // Strip trailing CTA text
            if (txt.toLowerCase().includes("buy")) txt = txt.split(/buy/i)[0];
            // Remove "X Used" / "X New" / "(XX%)" noise

            txt = txt
                .replace(/\d+\s*Used/gi, "")
                .replace(/\d+\s*New/gi, "")
                .replace(/\(\d+%\)/g, "");

            // Remove descriptive suffixes BEFORE stripping letters
            // "with 20 percent savings", "for 6 months", etc.
            txt = txt
                .replace(/with\s+\d+\s+percent.*/gi, "")
                .replace(/per\s+month.*/gi, "")
                .replace(/\/month.*/gi, "")
                .replace(/for\s+\d+\s+months?.*/gi, "")
                .replace(/\d+\s*%\s*off.*/gi, "");
            // Now strip letters, symbols, whitespace
            txt = txt
                .replace(/[a-z]/gi, "")
                .replace(/[₹$,\s]/g, "")
                .replace(/Rs\.?/g, "")
                .replace(/\.00$/, "")
                .trim();
            let amount = Number(txt);
            // Last resort: digits only
            if (!amount || amount <= 0) {
                const digitsOnly = txt.replace(/\.\d+/g, "").replace(/\D+/g, "");
                amount = Number(digitsOnly);
            }
            return amount > 0 ? amount : 0;
        } catch (err) {
            warn("Price parsing failed for text:", raw, err);
            return 0;
        }
    }


    // ═══════════════════════════════════════════════════════════
    //  7. DOM UPDATER  (core logic)
    // ═══════════════════════════════════════════════════════════
    /**
   * Format a "work-time" label for the given number of hours.
   * @param {number} hours
   * @returns {string} e.g. "3.2 hrs", "1.5 Days", "2.0 Months", "0.8 YEARS"
   */
    function formatWorkTime(hours) {
        if (hours <= THRESHOLDS.HOURS_MAX) {
            return `${hours.toFixed(1)} hrs`;
        }
        if (hours < THRESHOLDS.DAYS_MAX) {
            return `${(hours / WORK.HOURS_PER_DAY).toFixed(1)} Days`;
        }
        if (hours < THRESHOLDS.MONTHS_MAX) {
            return `${(hours / WORK.HOURS_PER_MONTH).toFixed(1)} Months`;
        }
        return `${(hours / WORK.HOURS_PER_YEAR).toFixed(1)} YEARS`;
    }

    /**
 * Find and de-emphasise dark-pattern elements (giant EMI prices, etc.)
 * by forcing smaller, quieter styles on them.
 *
 * @param {SiteConfig} siteConfig
 * @returns {number} count of elements restyled this pass
 */
    function neutraliseDarkPatterns(siteConfig) {
        if (!siteConfig.darkPatterns || siteConfig.darkPatterns.length === 0) {
            return 0;
        }

        const MARKER = "data-plh-dp-fixed";
        let fixed = 0;

        for (const pattern of siteConfig.darkPatterns) {
            try {
                const nodes = document.evaluate(
                    pattern.xpath,
                    document,
                    null,
                    XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
                    null
                );

                for (let i = 0; i < nodes.snapshotLength; i++) {
                    const el = nodes.snapshotItem(i);
                    if (typeof el.getAttribute !== 'function') {
                        // simple text node
                        continue
                    }
                    if (el.getAttribute(MARKER)) {
                        // already handled
                        continue;
                    }

                    // Apply every style override
                    for (const [prop, value] of Object.entries(pattern.styles)) {
                        // fontSize → font-size
                        const tmp = prop.replace(/([A-Z])/g, "-$1").toLowerCase();
                        el.style.setProperty(tmp, value, "important");
                    }

                    el.setAttribute(MARKER, "1");
                    fixed++;
                }
            } catch (err) {
                warn(`Dark-pattern XPath failed: "${pattern.xpath}"`, err);
            }
        }

        if (fixed > 0) {
            log(`Neutralised ${fixed} dark-pattern element(s).`);
        }
        return fixed;
    }

    /**
   * Scan the page for price elements and append work-time labels.
   *
   * @param {SiteConfig} siteConfig
   * @param {number}     hourlyRate
   * @returns {number}   count of elements updated this pass
   */
    function updatePriceElements(siteConfig, hourlyRate) {
        let items;
        try {
            items = document.evaluate(
                siteConfig.xpath,
                document,
                null,
                XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
                null
            );
        } catch (err) {
            error(`XPath evaluation failed for "${siteConfig.name}":`, err);
            return 0;
        }
        if (!items || items.snapshotLength === 0) {
            // Not an error — the page may simply have no prices visible yet
            return 0;
        }
        let updated = 0;
        for (let i = 0; i < items.snapshotLength; i++) {
            const node = items.snapshotItem(i);
            try {
                // Skip if we already processed this node
                if (node.getAttribute && node.getAttribute(MARKER_ATTR)) continue;
                const text = node.innerText || node.textContent || "";
                const html = node.innerHTML || "";
                // Skip if a previous run already injected a label
                if (hasMarker(text) || hasMarker(html)) {
                    continue;
                }
                const price = parsePrice(text);
                if (price <= 0) {
                    continue;
                }
                const hoursNeeded = price / hourlyRate;
                if (!hoursNeeded || !isFinite(hoursNeeded)) {
                    warn(`Could not compute work-time for price ${price}`);
                    continue;
                }
                const label = formatWorkTime(hoursNeeded);
                node.innerHTML += `${siteConfig.separator}<b>(${label})</b>`;
                // Mark so we don't reprocess
                if (node.setAttribute) {
                    node.setAttribute(MARKER_ATTR, "1");
                }
                updated++;
            } catch (err) {
                warn(`Failed to process price node #${i}:`, err);
            }
        }
        if (updated > 0) {
            log(`Labelled ${updated} price element(s).`);
        }
        return updated;
    }
    // ═══════════════════════════════════════════════════════════
    //  8. UI – FLOATING RESET BUTTON
    // ═══════════════════════════════════════════════════════════
    /**
   * Inject a small fixed-position "Reset" button in the bottom-left
   * corner so the user can update their stored salary at any time.
   */
    function injectResetButton() {
        try{
            const container = document.createElement("div");
            container.id = "plh-container";
            container.innerHTML = '<button id="plh-reset" title="Click to update your stored salary" type="button">Reset Income</button>';
            document.body.appendChild(container);
            document.getElementById("plh-reset").addEventListener("click", () => {
                log("User clicked Reset — prompting for new salary…");
                const newSalary = promptAndStoreSalary(/* force */ true);
                if (newSalary) {
                    log("Salary updated — reloading page to re-calculate.");
                    location.reload();
                }
            });
            GM_addStyle(`
      #plh-container {
        position: fixed;
        bottom: 0;
        left: 0;
        z-index: 99999;
        font-size: 11px;
        margin: 0;
        opacity: 0.5;
        transition: opacity 0.3s;
      }
      #plh-container:hover { opacity: 0.85; }
      #plh-reset {
        cursor: pointer;
        background: #d3d3d3ad;
        color: #333;
        border: 1px solid #ccc;
        border-radius: 3px;
        padding: 3px 8px;
        font-size: 9px;
      }
      #plh-reset:hover {
        background: #555;
        color: #fff;
        box-shadow: 0 2px 6px rgba(0,0,0,.24), 0 5px 10px rgba(0,0,0,.19);
      }
    `);
            log("Reset button injected.");
        } catch (err) {
            error("Error during injecting button:", err);
        }
    }
    // ═══════════════════════════════════════════════════════════
    //  9. BOOTSTRAP
    // ═══════════════════════════════════════════════════════════
    /**
   * Main entry point — runs once on page load.
   */
    function init() {
        log("Initialising…");
        // ── Detect site ──────────────────────────────────────────
        const site = detectSite();
        if (!site) {
            warn("Show Price as Hours: No Site match!");
            return;
            // nothing to do on unsupported sites
        }

        // ── Ensure we have a salary ──────────────────────────────
        const salary = promptAndStoreSalary();
        if (!salary) {
            warn("No salary available — script will remain idle.");
            injectResetButton(); // still show button so user can enter salary later
            return;
        }
        const hourlyRate = getHourlyRate();
        if (!hourlyRate) {
            return;
        }

        // ── Inject UI ────────────────────────────────────────────
        injectResetButton();
        // ── First pass ───────────────────────────────────────────
        updatePriceElements(site, hourlyRate);
        neutraliseDarkPatterns(site);
        // ── Observe DOM mutations (SPA / lazy-loaded content) ────
        let debounceTimer = null;
        const observer = new MutationObserver(() => {
            // Debounce rapid-fire mutations to avoid excessive work
            if (debounceTimer) clearTimeout(debounceTimer);
            debounceTimer = setTimeout(() => {
                updatePriceElements(site, hourlyRate);
                neutraliseDarkPatterns(site);
            }, 500);
        });
        observer.observe(document.body, {
            childList: true,
            subtree: true,
        });
        log("MutationObserver attached — watching for new price elements.");
        // ── Fallback polling for sites that swap the DOM silently ─
        setInterval(() => {
            updatePriceElements(site, hourlyRate);
        }, POLL_INTERVAL_MS);
        log(`Fallback poll running every ${POLL_INTERVAL_MS / 1000}s.`);
    }
    // ── Run! ──
    try {
        init();
    } catch (err) {
        error("Fatal error during initialisation:", err);
    }
})();
