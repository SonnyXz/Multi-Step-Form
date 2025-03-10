import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Input } from "../components/input";
export default function Home() {
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center">
      <div className="w-[480px] h-[655px] shadow-xl flex flex-col items-center justify-around">
        <div className="w-[416px] h-[385px flex flex-col gap-5">
          <Header></Header>
          <Input text={"First Name"} isError={true} errorMsg={"Empty"} />
          <Input text={"Last Name"} isError={true} errorMsg={"Empty"} />
          <Input text={"Username"} isError={true} errorMsg={"Empty"} />
        </div>
        <Footer buttonName={"Continue 1/3 "} />
      </div>
    </div>
  );
}
