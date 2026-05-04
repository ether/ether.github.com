import fs from 'fs';
import path from 'path';
import { marked } from 'marked';
import { notFound } from 'next/navigation';

const DOCS_DIR = path.join(process.cwd(), 'docs-content');

export const dynamicParams = false;

export function generateStaticParams() {
    return fs
        .readdirSync(DOCS_DIR)
        .filter((f) => f.endsWith('.md'))
        .map((f) => ({ slug: f.replace(/\.md$/, '') }));
}

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const filePath = path.join(DOCS_DIR, `${slug}.md`);

    if (!fs.existsSync(filePath)) {
        notFound();
    }

    const source = fs.readFileSync(filePath, 'utf8');
    const html = await marked.parse(source, { async: true });

    return (
        <article
            className="markdown-body"
            dangerouslySetInnerHTML={{ __html: html }}
        />
    );
}
