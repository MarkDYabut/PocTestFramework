package com.mark.PocTestFrameWork.Driver;

import com.mark.PocTestFrameWork.Automation.Driver.DriverFactory;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import javax.annotation.PreDestroy;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

@Service
public class DriverService {

    public final Logger LOGGER = LoggerFactory.getLogger(DriverService.class);
    private final HashMap<String, WebDriver> allDrivers = new HashMap<>();

    @Value("${test-utility.browser}")
    String driverName;

    @Value("${test-utility.chromedriver}")
    String driverPath;

    @Value("${server.port}")
    String serverPort;

    public WebDriver createDriver(String uuid) {
        if (driverName == null || driverPath == null) {
            throw new IllegalArgumentException("Error, somehow driverName or driverPath is null");
        }
        WebDriver driver;
        switch (driverName) {
            case "chrome":
//                System.setProperty("webdriver.chrome.driver", driverPath);
//                WebDriverManager.chromedriver().setup();
                ChromeOptions chromeOptions = new ChromeOptions();
                driver = new ChromeDriver(chromeOptions);

                break;
            case "firefox":
                System.setProperty("webdriver.geck.driver", driverPath);
                driver = new FirefoxDriver();
                break;
            case "edge":
                System.setProperty("webdriver.edge.driver", driverPath);
                driver = new EdgeDriver();
                break;
            default:
                throw new IllegalArgumentException("Please check config.properties; can only currently handle 'google chrome' and 'firefox'");
        }
        allDrivers.put(uuid, driver);
        LOGGER.info("createDriver(): Created driver {}", uuid);
        return driver;
    }

    public WebDriver getDriver(String uuid) {
        LOGGER.info("getDriver(): Getting driver {}", uuid);
        if (!allDrivers.containsKey(uuid)) throw new RuntimeException("Tried to get a driver that didn't exist");
        else return allDrivers.get(uuid);
    }

    public Map<String, WebDriver> getDrivers() {
        LOGGER.info("getDrivers(): Getting {} drivers", allDrivers.size());
        return allDrivers;
    }

    public boolean destroyDriver(String uuid) {
        LOGGER.info("destroyDriver(): Attempting to destroying driver: {}", uuid);
        if (!allDrivers.containsKey(uuid)) {
            LOGGER.error("Could not find driver: {}", uuid);
            return false;
        } else {
            allDrivers.get(uuid).quit();
            allDrivers.remove(uuid);
            LOGGER.info("Found and destroyed driver: {}", uuid);
            return true;
        }
    }

    public boolean openDriver(String uuid) {
        LOGGER.info("openDriver(): Opening driver: {}", uuid);
        if (!allDrivers.containsKey(uuid)) {
            LOGGER.info("Could not find driver: {}", uuid);
            return false;
        } else {
            try {
                WebDriver driver = allDrivers.get(uuid);
                pingDriver(uuid);
            } catch (WebDriverException e) {
                LOGGER.error("WebDriverException caught, driver instance was probably closed; destroying it");
                destroyDriver(uuid);
            }
            return true;
        }
    }

    public void pingDriver(String uuid) {
        LOGGER.info("pingDriver(): Pinging driver: {} ", uuid);
        WebDriver driver = getDriver(uuid);
        ArrayList<String> tabs = new ArrayList<String>(driver.getWindowHandles());
        driver.switchTo().window(tabs.get(tabs.size() - 1));
        ((JavascriptExecutor) driver).executeScript("window.open()");
        tabs = new ArrayList<String>(driver.getWindowHandles());
        driver.switchTo().window(tabs.get(tabs.size() - 1));
    }

    public String newDriver() {
        LOGGER.info("newDriver(): Creating new driver");
        String uuid = UUID.randomUUID().toString();
        WebDriver driver = createDriver(uuid);
        driver.get("http://localhost:".concat(serverPort).concat("/driver/viewDrivers"));
        return uuid;
    }

    public void cleanDrivers() {
        LOGGER.info("cleanDrivers(): Cleaning {} drivers", allDrivers.size());
        ArrayList<String> driversToRemove = new ArrayList<>();

        allDrivers.keySet().parallelStream().forEach(uuid -> {
            try {
                pingDriver(uuid);
            } catch (WebDriverException e) {
                LOGGER.error("WebDriverException caught, driver instance was probably closed; quitting it and adding it to drivers to untrack");
                getDriver(uuid).quit();
                driversToRemove.add(uuid);
            }
        });

        driversToRemove.forEach(key -> {
            allDrivers.remove(key);
        });
    }

    @PreDestroy
    public void destroyDrivers() {
        LOGGER.info("destroyDrivers(): Destroying {} drivers", allDrivers.size());

        allDrivers.keySet().parallelStream().forEach(uuid -> {
            getDriver(uuid).quit();
        });
        allDrivers.clear();

        LOGGER.info("destroyDrivers: Destroyed drivers");
    }

}