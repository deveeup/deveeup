import Link from "next/link";
import Image from 'next/image';
import ProfileImage from "../../assets/profileImage.jpg";
import "./index.scss";

export default function Header() {
  return (
    <main className="visualHeader">
      <Image
        src={ProfileImage}
        alt={'David Camacho - Profile Image'}
        width={200}
        height={200}
        />
      <code>
        david camacho
      </code>
      <div className="menu">
        <Link href="/">me</Link>
        <Link href="/information">information</Link>
        <Link href="/experience">experience</Link>
        <Link href="/contact">contact</Link>
      </div>
    </main>
  )
}