package org.launchcode.music.model;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import javax.persistence.*;
@Data

@AllArgsConstructor

@NoArgsConstructor

@Table(name = "playlist track")

@Entity

public class PlaylistTrack

{

    @Id

    @GeneratedValue

    @Column(name = "Playlist ID")

    private Integer playlistid;

    public Integer getPlaylistid() {
        return playlistid;
    }

    public void setPlaylistid(Integer playlistid) {
        this.playlistid = playlistid;
    }



    @Column(name = "TrackID")
    private Integer trackid;

    public Integer getTrackid() {
        return trackid;
    }

    public void setTrackid(Integer trackid) {
        this.trackid = trackid;
    }

}