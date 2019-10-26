package org.launchcode.music.model;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import javax.persistence.*;
@Data
git
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

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }



    @Column(name = "Title")

    private String title;
    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

}