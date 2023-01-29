package com.mark.PocTestFrameWork.Driver.Action.Gatsby;

import org.openqa.selenium.WebDriver;
import org.springframework.stereotype.Service;

@Service
public class GatsbyPage {

    public void getPage(WebDriver webDriver) {
        webDriver.get("https://www.gatsbyjs.com/");
    }

}
