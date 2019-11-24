docker run --rm --publish 8080:8080 -v $HOME/.aws:/root/.aws \
    --env POSTGRESS_USERNAME=$POSTGRESS_USERNAME \
    --env POSTGRESS_PASSWORD=$POSTGRESS_PASSWORD \
    --env POSTGRESS_DATABASE=$POSTGRESS_DATABASE \
    --env POSTGRESS_HOST=$POSTGRESS_HOST \
    --env AWS_REGION=$AWS_REGION \
    --env AWS_PROFILE=$AWS_PROFILE \
    --env AWS_MEDIA_BUCKET=$AWS_MEDIA_BUCKET \
    --name feed baoqger/udagram-feed-service 
