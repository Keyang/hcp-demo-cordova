#/bin/bash 
cordova-hcp build
rm -Rf ./liveUpdate/public/* 
cp -R ./www/* ./liveUpdate/public/
cd ./liveUpdate
git commit -am "live changes"
git push fh master --force
