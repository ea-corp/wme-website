
import { getPageContent, getPageBySlug, notionClient } from "../../../../lib/notion";
import { NotionRenderer } from "@notion-render/client";
import { notFound } from "next/navigation";

import hljsPlugin from "@notion-render/hljs-plugin";
import bookmarkPlugin from "@notion-render/bookmark-plugin";
import { Post } from "../../_components/post";


export default async function Page({ params }: { params: { slug: string } }) {
  console.log("Slug: ", params);
  const post = await getPageBySlug(params.slug);

  if (!post) notFound();

  const content = await getPageContent(post.id);

  const notionRenderer = new NotionRenderer({
    client: notionClient,
  });

  notionRenderer.use(hljsPlugin({}));
  notionRenderer.use(bookmarkPlugin(undefined));
  const html = await notionRenderer.render(...content);

  console.log("Post: ", post);

  return (
    <Post
      title={(post.properties.Title as any).title[0].plain_text}
      bannerImage={(post.properties.BannerImage as any).url}
      content={html}
      location={(post.properties.Location as any).rich_text[0].text.content}
      date={(post.properties.Date as any).rich_text[0].text.content}
    />
  );
} 