#/bin/bash

echo "ENVCHECK"
echo $ENVCHECK

echo "trigger jabakustrap deploy"
curl -X POST -d {} https://api.netlify.com/build_hooks/$DEPLOYKEY

echo ""
echo "finished"

