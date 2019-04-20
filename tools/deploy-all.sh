echo 'deploying api...'
gcloud app deploy dist/apps/api/app.yml

echo 'clearing existing client bucket...';
gsutil rm gs://client-host-dev/**

echo 'deploying client...';
gsutil cp dist/apps/client gs://client-host-dev


