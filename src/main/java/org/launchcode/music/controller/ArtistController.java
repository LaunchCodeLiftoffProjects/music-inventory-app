package org.launchcode.music.controller;

import org.launchcode.music.model.Artist;
import org.launchcode.music.service.ArtistService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/artist")
public class ArtistController {
    private ArtistService artistService ;

    public ArtistController(ArtistService artistService) {
        this.artistService = artistService;
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<Artist> getAll() {
        return artistService.getAll();
    }

    @PostMapping("/new")
    @ResponseStatus(HttpStatus.OK)
    public Artist addNew(@RequestBody Artist artist) {
        return artistService.addArtist(artist);
    }

    @GetMapping("/{id}")
    ResponseEntity<Artist> get(@PathVariable Long id) {
        Optional<Artist> artist = artistService.get(id);

        if (artist.isPresent()) {
            return ResponseEntity.ok().body(artist.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping
    ResponseEntity<Artist> update(@RequestBody Artist newArtist) {
        Optional<Artist> someArtist = artistService.update(newArtist);
        if (someArtist.isPresent()) {
            return ResponseEntity.ok().body(someArtist.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    ResponseEntity<String> delete(@PathVariable Long id) {
        if (artistService.delete(id)) {
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
