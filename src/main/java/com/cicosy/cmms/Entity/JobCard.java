package com.cicosy.cmms.Entity;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import lombok.Data;

import java.io.Serializable;
import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Data
public class JobCard implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String jobCardDescription;

    private JobPriority jobCardPriority;
    private JobCardStatus jobCardStatus;
    private JobCardType jobCardType;

    private Employee jobCardAssignedTo;
    private Employee jobCardAssignedBy;
    private String jobCardAssignedDate;
    private String jobCardAssignedTime;

    //actual start date and time
    @JsonDeserialize(using = LocalDateTimeDeserializer.class)
    private LocalDateTime jobCardStartDateTime;
    //start data and time
//    @JsonDeserialize(using = LocalDateTimeDeserializer.class)
//    private LocalDateTime jobCardStartDateTime;
    //end date and time
    @JsonDeserialize(using = LocalDateTimeDeserializer.class)
    private LocalDateTime jobCardEndDateTime;

    @OneToOne
    private Station station;

    //approved by
    private Employee jobCardApprovedBy;

    @OneToMany
    @Transient
    private List<Equipment> equipmentList;

    private String eq;



}
