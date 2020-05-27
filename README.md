# schedule-generator

## Set the database

The app works, now is time to move the data to a proper database language. For this, I've chosen PostreSQL.

First table to create will be the subject table with this structure:
```
CREATE TABLE subjects(
    subject_id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    code VARCHAR(7) NOT NULL,
    credits SMALLINT NOT NULL,
    semester VARCHAR(4) NOT NULL
);
```
With this I'll guarantee that every subject is independent of its sections, just in case they change in the future.

