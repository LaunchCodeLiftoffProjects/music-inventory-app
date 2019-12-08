package org.launchcode.music.service;

import org.launchcode.music.model.MusicTrack;
import org.launchcode.music.repository.MusicTrackRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MusicTrackService {

    private MusicTrackRepository musicTrackRepository;

    public MusicTrackService(MusicTrackRepository musicTrackRepository) {
        this.musicTrackRepository = musicTrackRepository;
    }

    public List<MusicTrack> getAll(){
        return musicTrackRepository.findAll();
    }

    public MusicTrack addMusicTrack(MusicTrack musicTrack) {
        return musicTrackRepository.save(musicTrack);
    }

    public void deleteMusicTrack(MusicTrack musicTrack) {
        musicTrackRepository.delete(musicTrack);
    }

    public void updateMusicTrack(MusicTrack musicTrack) {
        Long id = musicTrack.getId().longValue();
        List<MusicTrack> musicTracks = musicTrackRepository.findAll();
        for (MusicTrack track : musicTracks) {
            if (track.getId().longValue() == id) {
                musicTrackRepository.save(musicTrack);
            }
        }
    }

    public MusicTrack findTrackById(Long id) {
        MusicTrack track = musicTrackRepository.findById(id).orElse(null);
        return track;
    }
}
