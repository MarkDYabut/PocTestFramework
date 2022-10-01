package com.mark.PocTestFrameWork.driver;

import org.junit.jupiter.api.*;
import org.springframework.boot.test.context.SpringBootTest;

import java.sql.Driver;

@SpringBootTest
public class DriverFactoryTest {

    @BeforeAll
    static void beforeAll() {
        System.out.println("DriverFactoryTest.beforeAll");
    }

    @AfterAll
    static void afterAll() {
        System.out.println("DriverFactoryTest.afterAll");
    }

    @BeforeEach
    void beforeEach() throws Exception {
        System.out.println("DriverFactoryTest.beforeEach");
        DriverFactory.createDriver();

    }

    @AfterEach
    void afterEach() {
        System.out.println("DriverFactoryTest.afterEach");
        DriverFactory.cleanUpDriver();
    }

    @Test
    void test1() throws Exception {
        System.out.println("DriverFactoryTest.test1");
        DriverFactory.printBrowserSettings();
    }

    @Test
    void test2() throws Exception {
        System.out.println("DriverFactoryTest.test2");
        DriverFactory.printBrowserSettings();
    }

}
