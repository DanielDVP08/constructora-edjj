import {S3} from '@aws-sdk/client-s3'

export const endpoint = 'https://nyc3.digitaloceanspaces.com'

// export const s3Client = new S3({
//     endpoint,
//     region:'us-east-1',
//     credentials:{
//         accessKeyId:process.env.STORAGE_ACCESS_KEY,
//         secretAccessKey:process.env.STORAGE_SECRET_KEY,
//     },
// })
export const s3Client = new S3({
    endpoint,
    region:'us-east-1',
    credentials:{
        accessKeyId:process.env.STORAGE_ACCESS_KEY as string,
        secretAccessKey:process.env.STORAGE_SECRET_KEY as string,
    }
}) 
