# Urbane Dictionary

[Heroku link][heroku] **NB:** This should be a link to your production site

[heroku]: http://www.herokuapp.com

## Minimum Viable Product

Urbane Dictionary is a web application inspired by Urban Dictionary built using
Ruby on Rails and React.js. Urbane Dictionary allows users to:

<!-- This is a Markdown checklist. Use it to keep track of your progress! -->

- [ ] Create an account
- [ ] Log in / Log out
- [ ] Create, read, edit, and delete terms
- [ ] Like and dislike terms
- [ ] Browse terms by first letter
- [ ] Search terms
- [ ] Facebook Like, Tweet, and favorite terms

## Design Docs
* [View Wireframes][view]
* [DB schema][schema]

[view]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: User Authentication, Term Model and JSON API (1.5 days)

In Phase 1, I will begin by implementing user signup and authentication (using
BCrypt). There will be a basic landing page after signup that will contain the
container for the application's root React component. Before building out the
front end, I will begin by setting up a full JSON API for Terms.

[Details][phase-one]

### Phase 2: Flux Architecture and Term CRUD (2.5 days)

Phase 2 is focused on setting up Flux, the React Router, and the React view
structure for the main application. After the basic Flux architecture has been
set up, a Term store will be implemented and a set of actions corresponding to
the needed CRUD functionality created. Once this is done, I will create React
views for the Terms `Index`, `IndexItem` and `Form`. At the end of Phase 2,
Terms can be created, read, edited and destroyed in the browser. Terms should
save to the database when the form loses focus or is left idle after editing.
Lastly, while constructing the views I will start making custom styles in 
plain CSS.

[Details][phase-two]

### Phase 3: Term Likes and Dislikes (Opinions) (1 day)

Phase 3 allows users to like and dislike Terms, and the number of likes and
dislikes will display below each term. Likes and Dislikes will share a
single set of CRUD functionality (Opinions), with a frontend for each.

[Details][phase-three]

### Phase 4: Browse and Search Terms (1.5 days)

Phase 4 introduces browsing functionality to Terms. Users can search for
terms by a substring, or browse terms by their first letter.

[Details][phase-four]

### Phase 5: Favorites and Sets of Favorites (2.5 days)

Phase 5 introduces three features. Users can connect their Facebook and Twitter
accounts to Urbane Dictionary, allowing them to Like and Retweet them. Users can
also create sets of favorites on Urbane Dictionary and add favorited terms
 to them.

[Details][phase-five]

### Phase 6: Styling Cleanup and Seeding (1 day)

Phase 6 will finalize styling, adding modals for some form elements, and seed
the database.

### Bonus Features (TBD)
- [ ] Subterms: show definition on hover
- [ ] Facebook Likes and Tweets
- [ ] Add audio and video to terms, and attach YouTube links
- [ ] Vote on random terms
- [ ] Multiple sessions

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
