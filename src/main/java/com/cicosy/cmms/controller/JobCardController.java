package com.cicosy.cmms.controller;

import com.cicosy.cmms.Entity.JobCard;
import com.cicosy.cmms.Service.JobCardService;
import com.cicosy.cmms.Service.StationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/jobcard")
public class JobCardController {

    private JobCardService jobCardService;
    private  StationService stationService;

    @Autowired
    public JobCardController(JobCardService jobCardService, StationService stationService) {
        this.jobCardService = jobCardService;
        this.stationService = stationService;
    }

    //get all job cards
    @GetMapping("/get/all")
    public List<JobCard> getAllJobCards() {
        return jobCardService.getAllJobCards();
    }

    //get job card by id
    @GetMapping("/get/{id}")
    public JobCard getJobCardById(@PathVariable Long id) {
        return jobCardService.getJobCardById(id);
    }


    //save job card
    @PostMapping("/save/{stationID}")
    public JobCard saveJobCard(@RequestBody JobCard jobCard,@PathVariable String stationID) {

        System.out.println(jobCard.toString());
        jobCard.setStation(stationService.getStationById(Long.valueOf(stationID)));
        System.out.println("Station = "+stationService.getStationById(Long.valueOf(stationID)));
        System.out.println("Start Date : "+LocalDateTime.now());





        jobCard.setJobCardStartDateTime(LocalDateTime.now());
        return jobCardService.saveJobCard(jobCard);
    }

    //update job card
    @PutMapping("/update/{id}")
    public JobCard updateJobCard(@PathVariable Long id,@RequestBody JobCard jobCard) {
        return jobCardService.updateJobCard(id,jobCard);
    }
}
