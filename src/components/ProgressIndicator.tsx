import { useEffect, useState } from "react";

function ProgressIndicator() {
  const [progress, setProgress] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;
    const totalHeight = docHeight - windowHeight;
    let p = (scrollTop / totalHeight) * 100;
    console.log(p, window.scrollY, window.innerHeight + window.scrollY);
    setProgress(p);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <progress
      className="progress progress-accent align-top "
      value={progress}
      max="100"
    ></progress>
  );
}

export default ProgressIndicator;
