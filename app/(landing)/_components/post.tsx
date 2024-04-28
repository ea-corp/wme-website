interface PostProps {
  title: string;
  bannerImage: string;
  content: string;
  location: string;
  date: string;
}

export function Post(props: PostProps) {
  const { title, content, location, date } = props;

  return (
    <article className="w-full mb-10 flex flex-col items-center pt-20 py-8 px-8">
      <h1 className="text-4xl font-black max-w-5xl text-black mb-8">{title}</h1>
      <div className="flex">
        <p className="text-xl mb-8 font-medium">
          {location} | {date}
        </p>
      </div>
      <div
        className="text-xl mt-4 max-w-5xl leading-10 "
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
    </article>
  );
}
