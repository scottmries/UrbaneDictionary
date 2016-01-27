# Phase 5: ### Phase 5: Favorites and Sets of Favorites (2.5 days)

# Phase 3: Notebooks and Tags (2 days)

## Rails
### Models
* FavoritesSet
* Favorite

### Controllers
* Api::FavoritesSetController (create, destroy, index, show, update)
* Api::FavoriteController (create, destroy)

### Views
* favorites_set/index.json.jbuilder
* favorites_set/show.json.jbuilder
* favorite/show.json.jbuilder

## Flux
### Views (React Components)
* FavoritesSetIndex
  - FavoritesSetIndexItem
* FavoritesSetForm
* FavoriteForm

### Stores
* FavoritesSets

### Actions
* ApiActions.receiveAllFavoritesSets -> triggered by ApiUtil
* ApiActions.receiveSingleFavoritesSet
* ApiActions.deleteFavoritesSet
* NotebookActions.fetchAllFavoritesSets -> triggers ApiUtil
* NotebookActions.fetchSingleFavoritesSet
* NotebookActions.createFavoritesSet
* NotebookActions.editFavoritesSet
* NotebookActions.destroyFavoritesSet

### ApiUtil
* ApiUtil.fetchAllFavoritesSets
* ApiUtil.fetchSingleFavoritesSet
* ApiUtil.createFavoritesSet
* ApiUtil.editFavoritesSet
* ApiUtil.destroyFavoritesSet

## Gems/Libraries
