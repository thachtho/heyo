const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
    const scriptContent = fs.readFileSync('socket.js', 'utf8');
    const scriptAbc = fs.readFileSync('abc.js', 'utf8');
    // Khởi tạo trình duyệt Puppeteer
    const browser = await puppeteer.launch({
    	headless: 'new',
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });

    
    // Mở một tab mới
    const page = await browser.newPage();

    // Đi tới URL của trang web
    await page.goto('https://shopmap.gojo.vn/?phone=+0898129185&language=vi&location=16.9777845,108.2597842&platform=android');

    await page.evaluate(scriptContent);
    await page.evaluate(scriptAbc);

    // Chờ một lúc để xem kết quả (ví dụ: 5 giây)
    await page.waitForTimeout(5000);
    // Đóng trình duyệt
    // await browser.close();
})();

