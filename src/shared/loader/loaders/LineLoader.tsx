import "./lineloader.css";

interface ILineLoaderProps {
  className?: string;
}

export default function LineLoader({ className }: Readonly<ILineLoaderProps>) {
  return <div className={`loader ${className}`}></div>;
}
