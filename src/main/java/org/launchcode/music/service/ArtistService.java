package org.launchcode.music.service;

import org.launchcode.music.model.Artist;
import org.launchcode.music.repository.ArtistRepository;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class ArtistService {

    private ArtistRepository artistRepository;


    public ArtistService(ArtistRepository artistRepository) {
        this.artistRepository = artistRepository;
    }

    public List<Artist> getAll() {
        return artistRepository.findAll();
    }

    public Optional<Artist> get(Long id) {
        return artistRepository.findById(id);
    }

    public Artist addArtist(Artist artist){
        return artistRepository.save(artist);
    }
    public Optional<Artist> update(Artist artist) {
        if(artistRepository.existsById(artist.getId())){
            artistRepository.save(artist);
            return Optional.of(artist);
        }
        return Optional.empty();
    }
    public boolean delete(Long id) {
        if (artistRepository.existsById(id)) {
            artistRepository.deleteById(id);
            return true;
        }
        return false;
    }
}