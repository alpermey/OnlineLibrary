#!/bin/bash
c=$(ps ax | grep -v grep | grep './emailSender-master' | wc -l)
milli=`date +%s`
if [ $c -gt 0 ]; then   
  ps ax | grep -v grep | grep './emailSender-master' | awk -F ' ' '{print $1}' | xargs sudo kill -9 > /tmp/deploy_frontend_$milli.log 2>&1;
fi
  
ng serve --host 0.0.0.0 --disableHostCheck > /tmp/deploy_frontend_$milli.log 2>&1 & read -t 60 < <(tail -f /tmp/deploy_frontend_$milli.log |  grep 'The server started on port 3000')