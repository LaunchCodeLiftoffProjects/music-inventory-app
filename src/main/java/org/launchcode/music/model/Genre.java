package org.launchcode.music.model;

import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import static javax.persistence.CascadeType.ALL;


@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "genre")
@Entity

public class Genre {
    @Id
    @GeneratedValue
    @Column(name= "id")
    private Long id;

    @Column(name = "name")
    private String name;

    @OneToMany
    private List<MusicTrack> musicTracks = new ArrayList<>();

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}