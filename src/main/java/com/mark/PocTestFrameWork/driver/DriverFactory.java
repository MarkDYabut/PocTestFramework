package com.mark.PocTestFrameWork.driver;

import io.github.bonigarcia.wdm.WebDriverManager;
import lombok.extern.slf4j.Slf4j;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.remote.Browser;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.net.MalformedURLException;
import java.util.List;
import java.util.Random;

@Component
@Slf4j
public class DriverFactory {

    private static final ThreadLocal<WebDriver> THREAD_LOCAL_DRIVER = new ThreadLocal<>();
    private static List<String> BROWSER_LIST;
    private static boolean randomizeBrowser;
    private static String defaultBrowser;
    private static final Random random = new Random();

    @Value("#{'${test.browser.list}'.split(',')}")
    public void setBrowserList(List<String> browserList) {
        DriverFactory.BROWSER_LIST = browserList;
    }

    @Value("${test.browser.randomize}")
    public void setRandomizeBrowser(boolean randomizeBrowser) {
        DriverFactory.randomizeBrowser = randomizeBrowser;
    }

    @Value("${test.browser.default}")
    public void setDefaultBrowser(String defaultBrowser) {
        DriverFactory.defaultBrowser = defaultBrowser;
    }

    public void printBrowserSettings() {
        System.out.println("DriverFactory.printBrowserSettings");
        System.out.println("Browser List: " + BROWSER_LIST);
        System.out.println("Randomize Browser: " + randomizeBrowser);
        System.out.println("Default Browser: " + defaultBrowser);
    }


    public static void createDriver() throws Exception {
        String browserType = defaultBrowser;

        if (randomizeBrowser) {
            int randomItem = random.nextInt(BROWSER_LIST.size());
            browserType = BROWSER_LIST.get(randomItem);
        }

        log.info("Using browser type: {}", browserType);

        if (Browser.CHROME.is(browserType)) {
            THREAD_LOCAL_DRIVER.set(createChromeDriver());
        } else {
            log.error("Unknown browser type entered.");
            throw new Exception("Unknown browser type entered.");
        }
    }

    private static void setBasicWebDriverProperties(WebDriver webDriver) {
        webDriver.manage().window().maximize();
    }

    private static WebDriver createChromeDriver() throws MalformedURLException {
        return createLocalChromeDriver();
    }

    private static WebDriver createLocalChromeDriver() {
        WebDriverManager.chromedriver().setup();

        ChromeOptions chromeOptions = new ChromeOptions();

        WebDriver webDriver = new ChromeDriver(chromeOptions);
        setBasicWebDriverProperties(webDriver);

        return webDriver;
    }

}
