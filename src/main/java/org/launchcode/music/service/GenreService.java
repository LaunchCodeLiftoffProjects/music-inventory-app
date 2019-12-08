package org.launchcode.music.service;

import org.launchcode.music.model.Genre;
import org.launchcode.music.repository.GenreRepository;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class GenreService {

    private GenreRepository genreRepository;

    public GenreService(GenreRepository genreRepository){
        this.genreRepository = genreRepository;
    }
    public List<Genre> getAll(){
        return genreRepository.findAll();
    }

    public Optional<Genre> get(Long id) {
        return genreRepository.findById(id);
    }

    public Genre addGenre(Genre genre){
        return genreRepository.save(genre);
    }
    public Optional<Genre> update(Genre genre) {
        if(genreRepository.existsById(genre.getId())){
            genreRepository.save(genre);
            return Optional.of(genre);
        }
        return Optional.empty();
    }
    public boolean delete(Long id) {
        if (genreRepository.existsById(id)) {
            genreRepository.deleteById(id);
            return true;
        }
        return false;
    }
}