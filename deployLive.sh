#/bin/bash 
cordova-hcp build
rm -Rf ./liveUpdate/public/* 
cp -R ./www/* ./liveUpdate/public/