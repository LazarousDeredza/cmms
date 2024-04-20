package com.cicosy.cmms.controller;

import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.ui.Model;

/**
 * Created by Edward Zengeni
 */
@Controller
public class DashboardController {

    @RequestMapping("/")
    public String index() {
        return "dashboard/index";
    }

    @RequestMapping("/map")
    public String include() {
        return "dashboard/map";
    }

    // Added to test 500 page
    @RequestMapping(path = "/tigger-error", produces = MediaType.APPLICATION_JSON_VALUE)
    public void error500() throws Exception {
        throw new Exception();
    }

    @RequestMapping("/catchment")
    public String displayData(Model model) {
        return "dashboard/catchment-area";

    }

    @RequestMapping("/asset")
    public String Assets(Model model) {
        return "dashboard/asset";

    }

    @RequestMapping("/spares")
    public String Spares(Model model) {
        return "dashboard/spares";

    }

    @RequestMapping("/gh")
    public String Boreholes(Model model) {
        return "dashboard/catchment-area";

    }

    @RequestMapping("/hh")
    public String Vehicles(Model model) {
        return "dashboard/catchment-area";

    }

    @RequestMapping("/stations")
    public String Stations() {
        return "dashboard/stations";
    }

    @RequestMapping("/jobcards")
    public String JobCards() {
        return "dashboard/jobcards";
    }

    @RequestMapping("/addStation")
    public String AddStation() {
        return "dashboard/addStation";
    }

    @RequestMapping("/addJobCard")
    public String addJobCard() {
        return "dashboard/addJobCard";
    }


    @RequestMapping("/equipments")
    public String eqq() {
        return "dashboard/equipments";
    }

    @RequestMapping("/addEquip")
    public String addEquip() {
        return "dashboard/addEquip";
    }

}
