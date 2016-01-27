# Phase 3: Term Likes and Dislikes (Opinions)

## Rails
### Models
* Opinions

### Controllers
* Api::OpinionsController (create, destroy, update)

### Views

## Flux
### Views (React Components)
* OpinionForm

### Stores
* Opinion

### Actions
* ApiActions.receiveAllOpinion -> triggered by ApiUtil
* ApiActions.receiveSingleOpinion
* ApiActions.deleteOpinion
* OpinionActions.fetchAllOpinions -> triggers ApiUtil
* OpinionActions.fetchSingleOpinion
* OpinionActions.createOpinion
* OpinionActions.updateOpinion
* OpinionActions.destroyOpinion

### ApiUtil
* ApiUtil.fetchAllOpinions
* ApiUtil.fetchSingleOpinion
* ApiUtil.createOpinion
* ApiUtil.updateOpinion
* ApiUtil.destroyOpinion

## Gems/Libraries
