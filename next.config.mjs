/** @type {import('next').NextConfig} */
import withVideos from "next-videos";

// const nextConfig = {
//     /* config options here */
//     webpack: (config, options) =>
//     {
//         config.module.rules.push({
//             test: /\.mp4$/i,
//             type: 'asset/source'
//         })

//         return config
//     },
// };

const module = {
    webpack: (config, options) =>
    {
        config.module.rules.push({
            test: /\.(pdf|mp4)$/i,
            type: 'asset/source'
        })

        return config
    },
}


export default {
    // ...nextConfig,
    ...withVideos(),
    ...module
};