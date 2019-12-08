package org.launchcode.music.Service;
import org.launchcode.music.Model.Favorites;
import org.launchcode.music.Repository.FavoritesRepository;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FavoritesService {
    private FavoritesRepository favoritesrepository;

    public FavoritesService(FavoritesRepository favoritesrepository)
    {

        this.favoritesrepository = favoritesrepository;
    }
    public List<Favorites> getAll()
    {
        return favoritesrepository.findAll();
    }
    public Optional<Favorites> get(Long id){return favoritesrepository.findById(id);}
    public Favorites addFavorites(Favorites favorites){return favoritesrepository.save(favorites);}
    public Optional<Favorites> update(Favorites favorites){
        if (favoritesrepository.existsById(favorites.getId())){
            favoritesrepository.save(favorites);
            return Optional.of(favorites);
        }
        return Optional.empty();
    }
    public boolean delete(Long id){
        if (favoritesrepository.existsById(id)) {
            favoritesrepository.deleteById(id);
            return true;
        }
        return false;}

}
