import createLitSSRPlugin from '@lit-labs/nextjs';
import type { NextConfig } from 'next';

const withListSSR = createLitSSRPlugin();

const nextConfig: NextConfig = {
  poweredByHeader: false,
  trailingSlash: false,
  basePath: '',
  reactStrictMode: true,
  output: process.env.IS_LOCAL_DEV === 'true' ? undefined : 'export',
  transpilePackages: [
    '@sbb-esta/lyne-design-tokens',
    '@sbb-esta/lyne-elements',
    '@sbb-esta/lyne-react',
    '@lit/react',
    '@lit/reactive-element',
    '@lit-labs/observers',
    'lit',
    'lit-html',
    'lit-element',
  ],
};

export default process.env.IS_LOCAL_DEV === 'true' ? nextConfig : withListSSR(nextConfig);
