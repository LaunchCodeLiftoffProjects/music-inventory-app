package org.launchcode.music.service;

import org.launchcode.music.model.Genre;
import org.launchcode.music.repository.GenreRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GenreService {

    private GenreRepository genreRepository ;


    public GenreService(GenreRepository genreRepository){

        this.genreRepository = genreRepository ;
    }

    public List<Genre> getAll() {

        return genreRepository.findAll();
    }

    public Genre addGenre(Genre genre){

        return genreRepository.save(genre);
    }
}
