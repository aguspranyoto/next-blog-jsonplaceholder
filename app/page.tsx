import React, { cache } from "react";
import MainContent from "./components/mainContent";
const base_url = "https://jsonplaceholder.typicode.com/posts";

interface Iposts {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default async function Home() {
  const res = await fetch(base_url, {
    cache: "no-store",
  });
  const posts: Iposts[] = await res.json();

  return (
    <div className="container">
      <MainContent {...posts} />
    </div>
  );
}
