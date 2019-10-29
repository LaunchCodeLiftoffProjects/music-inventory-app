package org.launchcode.music.controller;

import org.launchcode.music.model.MusicTrack;
import org.launchcode.music.service.MusicTrackService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/music-track")
public class MusicTrackController {

    private MusicTrackService musicTrackService;

    public MusicTrackController(MusicTrackService musicTrackService) {
        this.musicTrackService = musicTrackService;
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<MusicTrack> getAll() {
        return musicTrackService.getAll();
    }

    @PostMapping("/new")
    @ResponseStatus(HttpStatus.OK)
    public MusicTrack addNew(@RequestBody MusicTrack musicTrack) {
        return musicTrackService.addMusicTrack(musicTrack);
    }

}
