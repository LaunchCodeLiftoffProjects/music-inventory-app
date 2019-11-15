package org.launchcode.music.controller;

import org.launchcode.music.model.Genre;
import org.launchcode.music.service.GenreService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/genre")
public class GenreController {
    private GenreService genreService ;

    public GenreController(GenreService genreService) {
        this.genreService = genreService;
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<Genre> getAll() {
        return genreService.getAll();
    }

    @PostMapping("/new")
    @ResponseStatus(HttpStatus.OK)
    public Genre addNew(@RequestBody Genre genre) {
        return genreService.addGenre(genre);
    }

    @GetMapping("/{id}")
    ResponseEntity<Genre> get(@PathVariable Long id) {
        Optional<Genre> genre = genreService.get(id);

        if (genre.isPresent()) {
            return ResponseEntity.ok().body(genre.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping
    ResponseEntity<Genre> update(@RequestBody Genre newGenre) {
        Optional<Genre> someGenre = genreService.update(newGenre);
        if (someGenre.isPresent()) {
            return ResponseEntity.ok().body(someGenre.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    ResponseEntity<String> delete(@PathVariable Long id) {
        if (genreService.delete(id)) {
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}