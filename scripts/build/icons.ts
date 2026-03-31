import fs from 'fs';
import url from 'url';
import path from 'path';
import { createRequire } from 'module';
import { Icons, IconType } from '@yuges/icons';
import { template } from '../../templates/icon.ts';

const require = createRequire(import.meta.url);

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const paths = {
    icons: path.resolve(__dirname, '../../src/icons'),
};

fs.rmSync(paths.icons, { recursive: true, force: true, });

Icons.forEach(icon => {
    Object.values(IconType).forEach(type => {
        const svg = fs.readFileSync(
            path.resolve(require.resolve(`@yuges/icons/${type}/${icon.name.kebab}.svg`)),
            'utf-8'
        );

        const data = parse(svg);

        if (! data) {
            return;
        }

        fs.mkdirSync(
            path.resolve(paths.icons, `./${type}/${icon.name.pascal}/src`),
            { recursive: true }
        );

        fs.writeFileSync(
            path.resolve(paths.icons, `./${type}/${icon.name.pascal}/src/Index.vue`),
            template(icon.name.pascal, type, data)
        );

        fs.writeFileSync(
            path.resolve(paths.icons, `./${type}/${icon.name.pascal}/index.ts`),
            `export { default as YIcon${icon.name.pascal}${type[0].toUpperCase() + type.slice(1)} } from './src/Index.vue';\n`
        );
    });
});

Object.values(IconType).forEach(type => {
    fs.writeFileSync(
        path.resolve(paths.icons, `./${type}/index.ts`),
        Icons.map(icon => `export * from './${icon.name.pascal}';`).join('\n') + '\n'
    );
});

fs.writeFileSync(
    path.resolve(paths.icons, `./index.ts`),
    Object.values(IconType).map(type => `export * from './${type}';`).join('\n') + '\n'
);

function parse(str: string)
{
    const svg = str.match(/<svg.*?>/g);
    const paths = str.match(/<path.*?>/g);

    if (!svg || !svg[0]) {
        return;
    }

    const data = {
        name: 'svg',
        type: 'element',
        attributes: attributes(svg[0]),
        children: [] as any[],
    };

    paths?.forEach(path => {
        data.children.push({
            name: 'path',
            type: 'element',
            attributes: attributes(path),
            children: [],
        });
    });

    return data;
}

function attributes(str: string): Record<string, string>
{
    let match;
    const attributes = {} as Record<string, string>;
    const regex = / +?(\S*?) *?= *?["'](.*?)["']/g;

    while ((match = regex.exec(str)) !== null) {
        const name = match[1];
        const value = match[2] || '';

        attributes[name] = value;
    }

    return attributes;
}

console.log('\nIcons successfully created');
