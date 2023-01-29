package com.mark.PocTestFrameWork.Driver;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping("/driver")
public class DriverController {

    private static final Logger LOGGER = LoggerFactory.getLogger(DriverController.class);

    @Autowired
    DriverService driverService;

    @GetMapping("/viewDrivers")
    public String viewDrivers(Model model) {
        LOGGER.info("/viewDrivers()");
        model.addAttribute("getDrivers", driverService.getDrivers());
        return "driver/viewDrivers";
    }

    @GetMapping("/cleanAll")
    public String cleanAll(Model model) {
        LOGGER.info("/cleanAll()");
        driverService.cleanDrivers();
        model.addAttribute("getDrivers", driverService.getDrivers());
        return "driver/viewDrivers";
    }

    @GetMapping("/destroyAll")
    public String destroyAll(Model model) {
        LOGGER.info("/destroyAll()");
        driverService.destroyDrivers();
        model.addAttribute("getDrivers", driverService.getDrivers());
        return "driver/viewDrivers";
    }

    @GetMapping("/ping")
    public String pingDriver(Model model, @RequestParam String id) {
        LOGGER.info("/pingDriver()");
        driverService.pingDriver(id);
        model.addAttribute("getDrivers", driverService.getDrivers());
        return "driver/viewDrivers";
    }

    @GetMapping("/new")
    public String newDriver(Model model) {
        LOGGER.info("/newDriver()");
        driverService.newDriver();
        model.addAttribute("getDrivers", driverService.getDrivers());
        return "driver/viewDrivers";
    }

    @RequestMapping("/destroy")
    public String destroyDriver(Model model, @RequestParam String id) {
        LOGGER.info("/destroyDriver()");
        driverService.destroyDriver(id);
        model.addAttribute("getDrivers", driverService.getDrivers());
        return "driver/viewDrivers";
    }

}
