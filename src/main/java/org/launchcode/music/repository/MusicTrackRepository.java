package org.launchcode.music.repository;

import org.launchcode.music.model.MusicTrack;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MusicTrackRepository extends JpaRepository<MusicTrack, Long>{
}
