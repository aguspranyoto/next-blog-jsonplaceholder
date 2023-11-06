interface MainContentProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function MainContent({ posts }: MainContentProps) {
  return (
    <>
      {posts.map((value, index) => (
        <div key={index}>
          <h1 className="text-4xl mb-4 font-bold"></h1>
          <div className="flex mb-2 gap-4 text-gray-300">
            <p className="text-sm">author</p>
            <p className="text-sm">published</p>
          </div>
          <div className="border border-gray-300 mb-4">{value.title}</div>
          <div>
            <p className="text-xl">{value.body}</p>
          </div>
        </div>
      ))}
    </>
  );
}
