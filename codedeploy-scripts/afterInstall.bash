# copy files to target by group name

# Copy to prod
cp -R /home/ubuntu/my_web_server-tmp/. /home/ubuntu/my_web_server
chown -R ubuntu:ubuntu /home/ubuntu/my_web_server
cd /home/ubuntu/my_web_server
aws ecr get-login-password --region ap-northeast-2 | docker login --username AWS --password-stdin 686164345236.dkr.ecr.ap-northeast-2.amazonaws.com/my_web_server

docker-compose -f docker-compose-production.yml pull
docker-compose -f docker-compose-production.yml up -d

# send notification
docker cp my_web_server:/app/commit_message.txt /home/ubuntu/my_web_server/commit_message.txt
docker cp my_web_server:/app/.env.production.local /home/ubuntu/my_web_server/.env.production.local
bb_commit_message=$(cat /home/ubuntu/my_web_server/commit_message.txt)
# bb_message_body="메디빌더 운영서버가 업데이트되었습니다.(https://www.my_web_server.com)
# $bb_commit_message"
# bb_message=$(jq -n --arg body "$bb_message_body" '{channel:"C05GAEJAC2V", text:$body}')
# slack_api_key=$(grep "^SLACK_BOT_TOKEN=" /home/ubuntu/medibuilder/.env.production.local | cut -d '=' -f2 | tr -d '\r\n')
# curl -d "$bb_message" -X POST -H "Content-Type: application/json" -H "Authorization: Bearer $slack_api_key" https://slack.com/api/chat.postMessage


docker system prune --all --force