const { Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const fs = require('fs');

(async function example() {
    // Read the script files
    const scriptContent = fs.readFileSync('socket.js', 'utf8');
    const scriptAbc = fs.readFileSync('abc.js', 'utf8');

    // Initialize the Selenium WebDriver
    let options = new chrome.Options();
    options.addArguments('--headless');
    // options.addArguments('--disable-gpu'); // Để tăng hiệu suất nếu cần
    // options.addArguments("--remote-debugging-pipe");
    // options.addArguments("--no-sandbox", "--disable-dev-shm-usage");

    let driver = await new Builder()
        .forBrowser('chrome')
        .setChromeOptions(options)
        .build();

    try {
        // Go to the specified URL
        await driver.get('https://shopmap.gojo.vn/?phone=+0898456907&language=vi&location=16.9777845,108.2597842&platform=android');

        // Execute the scripts
        await driver.executeScript(scriptContent);
        await driver.executeScript(scriptAbc);

        // Wait for a while to see the result (e.g., 5 seconds)
        await driver.sleep(5000);
    } finally {
        // Quit the browser
        // await driver.quit();
    }
})();
