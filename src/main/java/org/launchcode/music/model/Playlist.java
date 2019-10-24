package org.launchcode.music.model;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import javax.persistence.*;
@Data

@AllArgsConstructor

@NoArgsConstructor

@Table(name = "playlist")

@Entity

public class Playlist

{

    @Id

    @GeneratedValue

    @Column(name = "Playlist ID")

    private Integer id;



    @Column(name = "Title")

    private String title;

}