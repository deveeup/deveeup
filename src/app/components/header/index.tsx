import Link from "next/link";
import Image from 'next/image';
import ProfileImage from "../../assets/profileImage.jpg";
import { data } from "../../data";
import "./index.scss";

export default function Header() {
  const { name, header: { titles }} = data();

  return (
    <main className="visualHeader">
      <Image
        src={ProfileImage}
        alt={'David Camacho - Profile Image'}
        width={200}
        height={200}
        />
      <code>
        {name}
      </code>
      <div className="menu">
        <Link href="/">{titles.me}</Link>
        <Link href="/experience">{titles.experience}</Link>
        <Link href="/contact">{titles.contact}</Link>
      </div>
    </main>
  )
}