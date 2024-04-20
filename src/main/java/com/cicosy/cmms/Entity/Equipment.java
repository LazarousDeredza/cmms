package com.cicosy.cmms.Entity;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
public class Equipment {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String equipmentName;
    private String equipmentDescription;

    @Column(unique = true)
    private String equipmentNumber;

    @OneToOne
    private Station station;

    //priority
    private CriticalLevel criticalLevel;

    @Override
    public String toString() {
        return "Equipment{" +
                "id=" + id +
                ", equipmentName='" + equipmentName + '\'' +
                ", equipmentDescription='" + equipmentDescription + '\'' +
                ", equipmentNumber='" + equipmentNumber + '\'' +
                ", station=" + station +
                ", criticalLevel=" + criticalLevel +
                '}';
    }
}
