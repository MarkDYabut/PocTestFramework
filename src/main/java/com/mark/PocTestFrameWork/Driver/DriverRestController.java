package com.mark.PocTestFrameWork.Driver;

import org.openqa.selenium.WebDriver;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/Rest/driver")
public class DriverRestController {

    private static final Logger LOGGER = LoggerFactory.getLogger(DriverRestController.class);

    @Autowired
    DriverService driverService;

    @GetMapping("/viewDrivers")
    public ResponseEntity<Map<String, WebDriver>> viewDrivers() {
        LOGGER.info("/viewDrivers()");
        Map<String, WebDriver> drivers = driverService.getDrivers();
        return new ResponseEntity<>(drivers, HttpStatus.OK);
    }

    @GetMapping("/cleanAll")
    public String cleanAll(Model model) {
        LOGGER.info("/cleanAll()");
        driverService.cleanDrivers();
        model.addAttribute("getDrivers", driverService.getDrivers());
        return "driver/viewDrivers";
    }

    @GetMapping("/destroyAll")
    public ResponseEntity<Map<String, WebDriver>> destroyAll() {
        LOGGER.info("/destroyAll()");
        driverService.destroyDrivers();
        return new ResponseEntity<>(driverService.getDrivers(), HttpStatus.OK);
    }

    @GetMapping("/ping")
    public String pingDriver(Model model, @RequestParam String id) {
        LOGGER.info("/pingDriver()");
        driverService.pingDriver(id);
        model.addAttribute("getDrivers", driverService.getDrivers());
        return "driver/viewDrivers";
    }

    @GetMapping("/new")
    public ResponseEntity<String> newDriver() {
        LOGGER.info("/newDriver()");
        String driver = driverService.newDriver();
        return new ResponseEntity<>(driver, HttpStatus.OK);
    }

    @RequestMapping("/destroy")
    public String destroyDriver(Model model, @RequestParam String id) {
        LOGGER.info("/destroyDriver()");
        driverService.destroyDriver(id);
        model.addAttribute("getDrivers", driverService.getDrivers());
        return "driver/viewDrivers";
    }

}
