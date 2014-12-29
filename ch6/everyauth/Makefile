REPORTER = list
MOCHA_OPTS = --ui bdd -c

db:
	echo Seeding blog-test *****************************************************
	./db/seed.sh
test:
	clear

	echo Starting test *********************************************************
	./node_modules/mocha/bin/mocha \
	--reporter $(REPORTER) \
	$(MOCHA_OPTS) \
	tests/*.js
	echo Ending test
start:
	TWITTER_CONSUMER_KEY=l3Q196sRNpQu5OGuU1Lg \
	TWITTER_CONSUMER_SECRET=4MHATzYw1MYe0op7MFaOCC5dWdtpHR9vAVL6iV4g8b0 \
	node  app

.PHONY: test db start