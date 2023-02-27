import { socials } from "@/constants";
import Image from "next/image";
import SocialBtn from "./SocialBtn";

export default function QuickOrderSection() {
  return (
    <section className="py-8 sm:py-36">
      <div className="custom-container">
        <div className="shadow-2xl rounded-3xl p-3 sm:p-8">
          <h2 className="title text-start mx-0">Quick Order</h2>
          <div className="block sm:grid sm:grid-cols-2 sm:gap-12">
            <div>
              <p>First select a social network</p>
              <ul className="grid grid-cols-2 gap-3">
                {socials.map((social) => (
                  <li
                    className={`grid content-center text-center last:col-span-2`}
                    key={social._id}
                  >
                    <SocialBtn social={social} isActive={true} />
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p>Then select a service</p>
              <ul>
                <li>1</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
