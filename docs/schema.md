# Schema Information

## terms
column name  | data type | details
-------------|-----------|-----------------------
id           | integer   | not null, primary key
term         | string    | not null
definition   | text      | not null
usage        | text      | not null
author_id    | integer   | not null, foreign key (references users), indexed
favorites_id | integer   | not null, foreign key (references favorites), indexed

## opinions
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users), indexed
liked       | boolean   | not null

## favorites_sets
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users)
favorite_id | integer   | not null, foreign key (references favorites)

## favorites
column name       | data type | details
------------------|-----------|-----------------------
id                | integer   | not null, primary key
favorites_set_id  | integer   | not null, foreign key (references favorites set), indexed, unique [tag_id]
term_id           | integer   | not null, foreign key (references terms), indexed

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
