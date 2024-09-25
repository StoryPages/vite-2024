const DEFAULT_QUALITY = 100;

const DEFAULT_OPTIONS = {
    test: /\.(jpe?g|png|gif|tiff|webp|avif)$/i,
    exclude: undefined,
    include: undefined,
    includePublic: true,
    logStats: true,
    ansiColors: true,
    png: {
        quality: DEFAULT_QUALITY,
    },
    jpeg: {
        quality: DEFAULT_QUALITY,
    },
    jpg: {
        quality: DEFAULT_QUALITY,
    },
    tiff: {
        quality: DEFAULT_QUALITY,
    },
    gif: {},
    webp: {
        lossless: true,
    },
    avif: {
        lossless: true,
    },
    cache: false,
    cacheLocation: undefined,
};

export default DEFAULT_OPTIONS;
