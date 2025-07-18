import webpack from 'webpack';
import path from 'path';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildEnv, BuildPaths } from './config/build/types/config';

export default (env: BuildEnv) => {
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
        locales: path.resolve(__dirname, 'public', 'locales'),
        buildLocales: path.resolve(__dirname, 'build', 'locales'),
        assets: path.resolve(__dirname, 'public', 'assets'),
        buildAssets: path.resolve(__dirname, 'build', 'assets'),
        favicon: path.resolve(__dirname, 'public', 'assets', 'favicon.ico'),
    };

    const mode = env.mode || 'development';
    const PORT = env.port || 3000;
    const apiUrl = env.apiUrl || 'http://192.168.1.9:5000';

    const isDev = mode === 'development';

    const config: webpack.Configuration = buildWebpackConfig({
        mode,
        paths,
        isDev,
        port: PORT,
        apiUrl,
        project: 'frontend',
    });

    return config;
};
