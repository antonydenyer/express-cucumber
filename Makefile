MOCHA_REPORTER = spec
UNIT_TESTS = $(shell find test/app -name "*.test.js")

cucumber:
	@NODE_ENV=test ./node_modules/.bin/cucumber.js test/features \
		-r test/features/step_definitions --prety

spec:
	@NODE_ENV=test ./node_modules/.bin/mocha \
		--require should \
		--require sinon \
		--globals prop \
		--reporter $(MOCHA_REPORTER) \
		--slow 50 \
		--growl \
		$(UNIT_TESTS)

watch:
	@NODE_ENV=test ./node_modules/.bin/mocha \
		--require should \
		--require sinon \
		--globals prop \
		--reporter $(MOCHA_REPORTER) \
		--slow 50 \
		--growl \
		--watch \
		$(UNIT_TESTS)