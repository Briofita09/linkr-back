CREATE TABLE users (
	id serial NOT NULL,
	name varchar(255) NOT NULL UNIQUE,
	email varchar(255) NOT NULL UNIQUE,
	password varchar(255) NOT NULL,
	CONSTRAINT users_pk PRIMARY KEY (id)
);

CREATE TABLE posts (
	id serial NOT NULL,
	"userId" INT NOT NULL,
	text TEXT NOT NULL,
	url TEXT,
	CONSTRAINT posts_pk PRIMARY KEY (id)
);

CREATE TABLE comments (
	id serial NOT NULL,
	"postId" INT NOT NULL,
	text TEXT NOT NULL,
	"userId" INT NOT NULL,
	CONSTRAINT comments_pk PRIMARY KEY (id)
);

CREATE TABLE likes (
	id serial NOT NULL,
	"postId" INT NOT NULL,
	"userId" INT NOT NULL,
	CONSTRAINT likes_pk PRIMARY KEY (id)
);

CREATE TABLE trends (
	id serial NOT NULL,
	name TEXT NOT NULL,
	CONSTRAINT trends_pk PRIMARY KEY (id)
);

CREATE TABLE friends (
	id serial NOT NULL,
	"user1Id" INT NOT NULL,
	"user2Id" INT NOT NULL,
	CONSTRAINT friends_pk PRIMARY KEY (id)
);

CREATE TABLE posts_trends (
	id serial NOT NULL,
	"postId" INT NOT NULL,
	"trendId" INT NOT NULL,
	CONSTRAINT posts_trends_pk PRIMARY KEY (id)
);

ALTER TABLE posts ADD CONSTRAINT posts_fk0 FOREIGN KEY ("userId") REFERENCES users(id);

ALTER TABLE comments ADD CONSTRAINT comments_fk0 FOREIGN KEY ("postId") REFERENCES posts(id);
ALTER TABLE comments ADD CONSTRAINT comments_fk1 FOREIGN KEY ("userId") REFERENCES users(id);

ALTER TABLE likes ADD CONSTRAINT likes_fk0 FOREIGN KEY ("postId") REFERENCES posts(id);
ALTER TABLE likes ADD CONSTRAINT likes_fk1 FOREIGN KEY ("userId") REFERENCES users(id);


ALTER TABLE friends ADD CONSTRAINT friends_fk0 FOREIGN KEY ("user1Id") REFERENCES users(id);
ALTER TABLE friends ADD CONSTRAINT friends_fk1 FOREIGN KEY ("user2Id") REFERENCES users(id);

ALTER TABLE posts_trends ADD CONSTRAINT posts_trends_fk0 FOREIGN KEY ("postId") REFERENCES posts(id);
ALTER TABLE posts_trends ADD CONSTRAINT posts_trends_fk1 FOREIGN KEY ("trendId") REFERENCES trends(id);