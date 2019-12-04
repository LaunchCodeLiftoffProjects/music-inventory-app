package org.launchcode.music.model;
import lombok.*;
import javax.persistence.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "music_track")
@Entity
public class MusicTrack {

    @Id
    @GeneratedValue
    @Column(name = "id")
    private Integer id;

    @Column(name = "title")
    private String title;

    @Column(name = "type")
    private String type;

    @ManyToOne
    private Genre genre;

    @ManyToOne
    private Artist artist;

    @ManyToOne
    private Favorites favorites;

    public Integer getId() {
        return id;
    }
}
