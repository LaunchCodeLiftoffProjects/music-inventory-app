package org.launchcode.music.service;
import org.launchcode.music.model.Playlist;
import org.launchcode.music.repository.PlaylistRepository;
import org.springframework.stereotype.Service;



import java.util.List;
import java.util.Optional;

@Service

public class playlistservice {
    private PlaylistRepository playlistRepository;

    public playlistservice(PlaylistRepository playlistRepository) {

        this.playlistRepository = playlistRepository;
    }


    public List<Playlist> getAll() {

        return playlistRepository.findAll();

    }


    public Playlist addPlaylist(Playlist playlist) {

        return playlistRepository.save(playlist);

    }

    public void deletePlaylist(Playlist playlist) {

        playlistRepository.delete(playlist);

    }

    public List<Playlist> searchPlaylist(String searchtext) {

        return playlistRepository.findByTitleContaining(searchtext);

    }
    public boolean updatePlaylist(Playlist playlist) {
        Optional<Playlist> existingPlaylist= playlistRepository.findById(playlist.getId());
        if(existingPlaylist.isPresent())
        {
            existingPlaylist.get().setTitle(playlist.getTitle());
            playlistRepository.save(existingPlaylist.get());
            return true;

        }

        return false;

    }
}