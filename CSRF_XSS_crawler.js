const axios = require('axios');
const cheerio = require('cheerio');

const visitedUrls = new Set();
const baseUrl = 'http://deviantart.com'; // Replace with your starting URL

async function crawl(url, depth = 3) {
    if (depth === 0 || visitedUrls.has(url)) {
        return;
    }

    try {
        const response = await axios.get(url);
        const $ = cheerio.load(response.data);
        visitedUrls.add(url);

        console.log(`Depth: ${depth}, URL: ${url}`);

        // Perform CSRF and XSS checks
        checkCsrf($, url);
        checkXss($, url);

        // Recursively crawl links
        $('a').each((index, element) => {
            const href = $(element).attr('href');
            if (href && href.startsWith('http')) {
                crawl(href, depth - 1);
            }
        });
    } catch (error) {
        console.error(`Error crawling ${url}: ${error.message}`);
    }
}

function checkCsrf($, url) {
    // Check for CSRF tokens
    $('input[name="csrf"]').each(() => {
        console.log(`CSRF token found at ${url}`);
    });
}

function checkXss($, url) {
    // Check for XSS vulnerabilities
    $('a[href^="javascript"]').each(() => {
        console.log(`XSS vulnerability found at ${url}`);
    });
}

crawl(baseUrl);
