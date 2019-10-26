package org.launchcode.music.service;
import org.launchcode.music.model.Playlist;
import org.launchcode.music.repository.PlaylistRepository;
import org.springframework.stereotype.Service;



import java.util.List;
@Service

public class Addplaylist {
    private PlaylistRepository playlistRepository;
    public Addplaylist(PlaylistRepository playlistRepository)
    {

        this.playlistRepository = playlistRepository;
    }



    public List<Playlist> getAll()

    {

        return playlistRepository.findAll();

    }



    public Playlist addPlaylist(Playlist playlist)

    {

        return playlistRepository.save(playlist);

    }

}