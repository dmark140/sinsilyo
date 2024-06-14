import Landing from "@/Landing/Landing";
import Nav from "@/Nav/Nav";

export default function Home() {
  return (
    <div className="w-full">
      <Nav />
      <br />
      <div className="max-w-[1024px] mx-auto mt-8">
        <Landing />
      </div>
    </div>
  );
}
