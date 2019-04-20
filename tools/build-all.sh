echo 'cleaning...'
npm run clean

echo 'building all...'

echo 'building client...'
npm run build -- --project=client --prod

echo 'building api...'
npm run build -- --project=api --prod
