package org.launchcode.music.repository;
import org.launchcode.music.model.PlaylistTrack;
import org.springframework.data.jpa.repository.JpaRepository;
 import org.springframework.stereotype.Repository;
@Repository

public interface PlaylistTrackrepository extends JpaRepository<PlaylistTrack, Long>

{

}



