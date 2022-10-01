package com.mark.PocTestFrameWork.driver;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class DriverFactoryTest {

    static DriverFactory driverFactory = driverFactory = new DriverFactory();

    @BeforeAll
    static void beforeAll() {
        System.out.println("DriverFactorTest.beforeAll");
    }

    @AfterAll
    static void afterAll() {
        System.out.println("DriverFactorTest.afterAll");
    }

    @BeforeEach
    void beforeEach() {
        System.out.println("DriverFactorTest.beforeEach");
    }

    @Test
    void test1() throws Exception {
        System.out.println("DriverFactorTest.test1");
        driverFactory.printBrowserSettings();
        driverFactory.createDriver();
    }

}
