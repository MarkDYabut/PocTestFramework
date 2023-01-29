package com.mark.PocTestFrameWork.Driver.Action;

import com.mark.PocTestFrameWork.Driver.DriverService;
import com.mark.PocTestFrameWork.Driver.Action.Gatsby.GatsbyPage;
import org.openqa.selenium.WebDriver;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DriverActionStep {

    @Autowired
    private GatsbyPage gatsbyPage;

    @Autowired
    DriverService driverService;

    // the step will receive a driver
    public void getGatsbyPage(String id){
        WebDriver webDriver = driverService.getDriver(id);
        gatsbyPage.getPage(webDriver);
    }

}
