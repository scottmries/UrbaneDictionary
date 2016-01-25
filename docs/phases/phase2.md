# Phase 2: Flux Architecture and Term CRUD (2 days)

## Rails
### Models

### Controllers

### Views

## Flux
### Views (React Components)
* TermsIndex
  - TermsIndexItem
* TermForm

### Stores
* Term

### Actions
* ApiActions.receiveAllTerms -> triggered by ApiUtil
* ApiActions.receiveSingleTerm
* ApiActions.deleteTerm
* TermActions.fetchAllTerms -> triggers ApiUtil
* TermActions.fetchSingleTerm
* TermActions.createTerm
* TermActions.editTerm
* TermActions.destroyTerm

### ApiUtil
* ApiUtil.fetchAllTerms
* ApiUtil.fetchSingleTerm
* ApiUtil.createTerm
* ApiUtil.editTerm
* ApiUtil.destroyTerm

## Gems/Libraries
* Flux Dispatcher (npm)
