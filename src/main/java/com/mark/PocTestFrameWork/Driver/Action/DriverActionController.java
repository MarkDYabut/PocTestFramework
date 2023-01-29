package com.mark.PocTestFrameWork.Driver.Action;

import com.mark.PocTestFrameWork.Driver.DriverService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping("/driverAction")
class DriverActionController {

    private static final Logger LOGGER = LoggerFactory.getLogger(DriverActionController.class);

    @Autowired
    DriverService driverService;

    @Autowired
    DriverActionStep driverActionStep;

    @RequestMapping("/doAction")
    public String doAction(Model model, @RequestParam String id) {
        LOGGER.info("/doAction()");
        driverActionStep.getGatsbyPage(id);
        model.addAttribute("getDrivers", driverService.getDrivers());
        return "driver/viewDrivers";
    }
}