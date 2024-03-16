=====================================================

Owenn FILS-AIMÉ


=====================================================

Clè API : cd9b555d3d8563fc3a28f6284e5897b7

=====================================================

EndPoints :

Find a tv show by title
https://api.themoviedb.org/3/search/tv$?api_key=X&query=<Y>

Find a tv show by id
https://api.themoviedb.org/3/tv/${id}&?api_key=<Y>&append_to_response=credits

Find the recommendations for a specific tv show id
https://api.themoviedb.org/3/tv/<X>/recommendations?api_key=<Y>

Find the popular tv shows
https://api.themoviedb.org/3/tv/popular?api_key=<Y>


DOC 
https://developer.themoviedb.org/reference/intro/getting-started


=====================================================

Conventional commits : 

Example :
feat(search): Add an input to search the product


Must be one of the following:
build: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
ci: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
docs: Documentation only changes
feat: A new feature
fix: A bug fix
perf: A code change that improves performance
refactor: A code change that neither fixes a bug nor adds a feature=
style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
test: Adding missing tests or correcting existing tests