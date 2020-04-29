#/bin/bash

## doin cleaning
rm emoji.css -R
rm -R bootstrap

# bootstrap
curl -s https://api.github.com/repos/twbs/bootstrap/releases/latest | grep browser_download_url | cut -d '"' -f 4 | wget -qi -


echo "Unzipping boostrap"
unzip bootstrap*.zip
# emojicss 
wget "https://emoji-css.afeld.me/emoji.css"

# renaming bootstrap
mv bootstrap*-dist bootstrap

# doin updatin
git add .
git commit -m "Updated libs"
git push -u origin master --force
