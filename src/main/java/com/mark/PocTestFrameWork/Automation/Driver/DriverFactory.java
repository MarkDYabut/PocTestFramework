package com.mark.PocTestFrameWork.Automation.Driver;

import io.github.bonigarcia.wdm.WebDriverManager;
import lombok.extern.slf4j.Slf4j;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxOptions;
import org.openqa.selenium.remote.Browser;
import org.openqa.selenium.remote.LocalFileDetector;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.net.MalformedURLException;
import java.net.URL;
import java.util.List;
import java.util.Random;

@Component
@Slf4j
public class DriverFactory {

    private static final ThreadLocal<WebDriver> THREAD_LOCAL_DRIVER = new ThreadLocal<>();
    private static final Random random = new Random();
    private static List<String> BROWSER_LIST;
    private static boolean randomizeBrowser;
    private static String defaultBrowser;
    private static boolean enableGrid;
    private static String gridUrl;

    public static void createDriver() throws Exception {
        String browserType = defaultBrowser;

        if (randomizeBrowser) {
            int randomItem = random.nextInt(BROWSER_LIST.size());
            browserType = BROWSER_LIST.get(randomItem);
        }

        log.info("Using browser type: {}", browserType);

        if (Browser.CHROME.is(browserType)) {
            THREAD_LOCAL_DRIVER.set(createChromeDriver());
        } else if (Browser.FIREFOX.is(browserType)) {
            THREAD_LOCAL_DRIVER.set(createFirefoxDriver());
        } else {
            log.error("Unknown browser type entered.");
            throw new Exception("Unknown browser type entered.");
        }
    }

    public static WebDriver getDriver() {
        if (THREAD_LOCAL_DRIVER.get() != null) {
            return THREAD_LOCAL_DRIVER.get();
        } else {
            log.error("Webdriver is null and it shouldn't be.");
            throw new RuntimeException("Webdriver is null and it shouldn't be.");
        }
    }

    public static void cleanUpDriver() {
        DriverFactory.quitDriver();
        DriverFactory.removeDriver();
    }

    public static void quitDriver() {
        if (THREAD_LOCAL_DRIVER.get() != null) {
            THREAD_LOCAL_DRIVER.get().quit();
        }
    }

    public static void removeDriver() {
        if (THREAD_LOCAL_DRIVER.get() != null) {
            THREAD_LOCAL_DRIVER.remove();
        }
    }

    private static void setBasicWebDriverProperties(WebDriver webDriver) {
        webDriver.manage().window().maximize();
    }

    private static WebDriver createChromeDriver() throws MalformedURLException {
        return enableGrid ? createRemoteChromeDriver() : createLocalChromeDriver();
    }

    private static WebDriver createLocalChromeDriver() {
        WebDriverManager.chromedriver().setup();

        ChromeOptions chromeOptions = new ChromeOptions();

        WebDriver webDriver = new ChromeDriver(chromeOptions);
        setBasicWebDriverProperties(webDriver);

        return webDriver;
    }

    private static WebDriver createRemoteChromeDriver() throws MalformedURLException {
        String remoteUrl = gridUrl;

        ChromeOptions chromeOptions = new ChromeOptions();

        RemoteWebDriver webDriver = new RemoteWebDriver(new URL(remoteUrl), chromeOptions);
        setBasicWebDriverProperties(webDriver);
        webDriver.setFileDetector(new LocalFileDetector());

        return webDriver;
    }

    private static WebDriver createFirefoxDriver() throws MalformedURLException {
        return enableGrid ? createRemoteFirefoxDriver() : createLocalFirefoxDriver();
    }

    private static WebDriver createRemoteFirefoxDriver() throws MalformedURLException {
        String remoteUrl = gridUrl;
        FirefoxOptions fireFoxOptions = new FirefoxOptions();

        RemoteWebDriver webDriver = new RemoteWebDriver(new URL(remoteUrl), fireFoxOptions);
        setBasicWebDriverProperties(webDriver);
        webDriver.setFileDetector(new LocalFileDetector());

        return webDriver;
    }

    private static WebDriver createLocalFirefoxDriver() {
        WebDriverManager.firefoxdriver().setup();

        FirefoxOptions fireFoxOptions = new FirefoxOptions();

        WebDriver webDriver = new FirefoxDriver(fireFoxOptions);
        setBasicWebDriverProperties(webDriver);

        return webDriver;
    }

    @Value("${test.grid.enable}")
    public void setEnableGrid(boolean enableGrid) {
        DriverFactory.enableGrid = enableGrid;
    }

    @Value("${test.grid.hub.url}")
    public void setGridUrl(String gridUrl) {
        DriverFactory.gridUrl = gridUrl;
    }

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

    public static void printBrowserSettings() {
        System.out.println("DriverFactory.printBrowserSettings");
        System.out.println("Browser List: " + BROWSER_LIST);
        System.out.println("Randomize Browser: " + randomizeBrowser);
        System.out.println("Default Browser: " + defaultBrowser);
    }

}
