import Image from "next/image";

export default function Home() {
  console.log("what is this component a server or client")
  return (
    <div>
      <a href="about">about section</a>
      <h1 className="text-3xl">hello to next js project</h1>
    </div>
  );
}
