package com.mark.PocTestFrameWork.Automation.ui;

import com.mark.PocTestFrameWork.Automation.Driver.DriverFactory;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.springframework.beans.factory.annotation.Value;

import java.time.Duration;

public class BaseAutomationPage {

    @Value("${test.default.wait.seconds}")
    protected int defaultWaitTimeSeconds;

    public WebDriver getDriver() {
        return DriverFactory.getDriver();
    }

    public WebElement findElementWaitForVisible(By by) {
        return new WebDriverWait(getDriver(), Duration.ofSeconds(defaultWaitTimeSeconds)).until(
                ExpectedConditions.visibilityOfElementLocated(by));
    }
}
