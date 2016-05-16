Static content of analytics wikimedia.org domain

To easily test locally you can do:

python -m SimpleHTTPServer 5000


And later access files with http://localhost:5000/

## Dashiki ##
We serve some dashiki instances from this domain. 
In order to update you need to build dashiki locally and update the source.
The only thing to look for is that piwik site is #8 and that has to be passed
at build time
### Vital Signs ###
gulp --layout metrics-by-project --config VitalSigns --piwik piwik.wikimedia.org,8

### Browser Reports ###
gulp --layout tabs --config SimpleRequestBreakdowns  --piwik piwik.wikimedia.org,8
