package org.launchcode.music.service;
import org.launchcode.music.model.Playlist;
import org.launchcode.music.model.PlaylistTrack;
import org.launchcode.music.repository.PlaylistTrackrepository;
import org.springframework.stereotype.Service;



import java.util.List;
@Service

public class Addplaylisttrack {
    private PlaylistTrackrepository playlistTrackrepository;
    public Addplaylisttrack(PlaylistTrackrepository playlistTrackrepository)
    {

        this.playlistTrackrepository = playlistTrackrepository;
    }
    public List<PlaylistTrack> getAll()
    {
        return playlistTrackrepository.findAll();
    }
    //public List<PlaylistTrack> getTracksforplaylist(Playlist p)
    {
       // return playlistTrackrepository.findAllById(p.getId());//
    }//
     public PlaylistTrack addPlaylisttrack(PlaylistTrack playlisttrack)
    {
        return playlistTrackrepository.save(playlisttrack);
    }

}