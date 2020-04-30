#/bin/bash

echo "trigger jabakustrap deploy"
curl -X POST -d {} https://api.netlify.com/build_hooks/5ea96a50252560a4ec4a1628

echo ""
echo $AAAAA
echo ""
echo "finished"

