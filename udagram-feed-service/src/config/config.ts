// export const config = {
//   "dev": {
//     "username": "chrisbao",
//     "password": "chrisbao",
//     "database": "udagramchrisdev",
//     "host": "udagramchrisdev.cvyuwmldyayy.us-west-1.rds.amazonaws.com",
//     "dialect": "postgres",
//     "aws_region": "us-west-1",
//     "aws_profile": "default",
//     "aws_media_bucket": "udagram-chrisbao-dev"
//   },
//   "prod": {
//     "username": "",
//     "password": "",
//     "database": "udagram_prod",
//     "host": "",
//     "dialect": "postgres"
//   }
// }

export const config = {
  "dev": {
    "username": process.env.POSTGRESS_USERNAME,
    "password": process.env.POSTGRESS_PASSWORD,
    "database": process.env.POSTGRESS_DATABASE,
    "host": process.env.POSTGRESS_HOST,
    "dialect": "postgres",
    "aws_region": process.env.AWS_REGION,
    "aws_profile": process.env.AWS_PROFILE,
    "aws_media_bucket": process.env.AWS_MEDIA_BUCKET
  },
  "prod": {
    "username": "",
    "password": "",
    "database": "udagram_prod",
    "host": "",
    "dialect": "postgres"
  },
  "jwt": {
    "secret": "helloworld"
  }
}
