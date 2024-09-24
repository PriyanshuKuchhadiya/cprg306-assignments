import Link from 'next/link';

export default function StudentInfo() {
  return (
    <div>
      <p>Your Name: Priyanshu Kuchhadiya</p>
      <p>
        GitHub Repository:{' '}
        <Link href="https://github.com/PriyanshuKuchhadiya" target="_blank">
          Visit My GitHub
        </Link>
      </p>
    </div>
  );
}