package org.launchcode.music.model;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import javax.persistence.*;
@Data

@AllArgsConstructor

@NoArgsConstructor

@Table(name = "playlist_track")

@Entity

public class PlaylistTrack

{

    @Id
    @Column(name = "Playlist_id")
    private Long playlistid;





    @Column(name = "TrackID")
    private Long trackid;



}