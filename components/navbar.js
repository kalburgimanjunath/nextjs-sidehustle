import Link from 'next/link';
export default function Navbar() {
  return (
    <div className="navbar-top">
      <div>Sidehustle</div>
      <ul>
        <li>
          <Link href="">Home</Link>
        </li>
        <li>
          <Link href="">Popular Ideas</Link>
        </li>
        <li>
          <Link href="">Contribute your Ideas</Link>
        </li>
      </ul>
    </div>
  );
}
